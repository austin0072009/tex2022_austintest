using ETModel.Framework.Common.Serialization;
using ETModel.Script.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ETModel.Script.CsScript.Action
{
    public class VIPHelper : BaseHelper
    {
        private static tVipConfig _vipConfig;
        private static  int glodTimes = 100;
        /// <summary>
        /// 获取vip的权限信息
        /// </summary>
        /// <param name="_user"></param>
        /// <returns></returns>
        public static string GetVipAuth(tUser _user)
        {
            sc_getvipinfo vipinfo = new sc_getvipinfo() { result = 0 };
            try
            {
                vipinfo.result = 1;
                vipinfo.data = new List<authSD>() { new authSD() { authname = "", authvalue = 99 } };// // tvipinfoEx.GetAuthByUserId(_user.UserID);
            }
            catch (Exception ex)
            {
                vipinfo.result = 0;
                TraceLogEx.Log("GetVipAuth" + ex.Message);
                throw;
            }
            return JsonUtils.Serialize(vipinfo);
        }
       
        /// <summary>
        /// 获取当前用户当前场次累计的免费次数
        /// </summary>
        /// <param name="_user"></param>
        /// <param name="levelid"></param>
        /// <returns></returns>
        public static string GetUserVipFreeInfo(tUser _user, int levelid)
        {
            sc_getuservipfreeinfo freeinfo = new sc_getuservipfreeinfo() { result = 0};
            try
            {
                freeinfo.freecount = tvipinfoEx.GetUserFreeCountByLevelId(_user, levelid);
                freeinfo.result = 1;
            }
            catch (Exception ex)
            {

                freeinfo.result = 0;
                TraceLogEx.Log("GetUserVipFreeInfo" + ex.Message);
            }
            return JsonUtils.Serialize(freeinfo);
        }

        #region 新增
        /// <summary>
        /// 获取VIP配置表信息
        /// </summary>
        /// <returns></returns>
        public static async Task<tVipConfig> GetVipConfig()
        {
            if (_vipConfig == null)
            {
                _vipConfig = await BaseHelper.GetShare<tVipConfig>(1);
                if (_vipConfig == null)
                {
                    _vipConfig = new tVipConfig()
                    {
                        Id = 1,
                        UpExps = new Framework.Cache.Generic.CacheList<int>(),
                        UpReward = new Framework.Cache.Generic.CacheList<int>(),
                        UpRule = new Framework.Cache.Generic.CacheList<RuleInfo>(),
                        Discount = new Framework.Cache.Generic.CacheList<float>(),
                        DropExps = new Framework.Cache.Generic.CacheDictionary<int, int>(),
                        MonthDay = 2,
                        MonthReward = new Framework.Cache.Generic.CacheList<int>(),
                        FreeWithdrawTimes = new Framework.Cache.Generic.CacheList<int>(),
                        WithdrawLimit = new Framework.Cache.Generic.CacheList<int>(),
                        ValidBetScore = 10000
                    };
                    //await BaseHelper.AddOrUpdate(_vipConfig);//此处会把数据全部重置未空了
                }
            }
            
            return _vipConfig;
        }
        public static tVipConfig Config
        {
            get
            {
                return _vipConfig;
            }
        }
        /// <summary>
        /// 设置VIP配置
        /// </summary>
        /// <param name="strValue"></param>
        /// <returns></returns>
        public static async Task<string> SetVipConfig(string strValue)
        {
            tVipConfig config = JsonUtils.Deserialize<tVipConfig>(strValue);
            sc_modifyvipconfig_gm vipconfig = new sc_modifyvipconfig_gm() { };
            if (config != null)
            {
                _vipConfig = config;
                vipconfig.config = config;
                await BaseHelper.AddOrUpdate(config);
            }
            else
            {
                vipconfig._ret = 1;
                vipconfig._info = "Json解析失败";
            }
            return JsonUtils.Serialize(vipconfig); 
        }
        /// <summary>
        /// 设置VIP配置
        /// </summary>
        /// <param name="strValue"></param>
        /// <returns></returns>
        public static async Task<string> SetUserVipLev(int userid,int lev,int lScore)
        {
            sc_setuserviplev_gm vipLev = new sc_setuserviplev_gm() { };
            if (_vipConfig == null) await GetVipConfig();
            if ((lev > _vipConfig.UpExps.Count||lev<0)&&lev!=-1)
            {
                vipLev._ret = 1;
                vipLev._info = "超过了等级限制";
            }
            else
            {
                int iLen = _vipConfig.UpExps.Count;
                int iTotalExp = 0;
                for (int i = 0; i < iLen; i++)
                {
                    iTotalExp += _vipConfig.UpExps[i];
                    if (i==lev)
                    {
                        break;
                    }
                }
                tuserInfoEx infoEx = await tb_userinfoEx.GetFromCachebyUserID(userid);
                if (lev == 1 && lScore == -1 && infoEx.vipExp >= 10) return "";
                if (lScore != -1) infoEx.vipScore = lScore;
                if(lev!=-1) infoEx.vipExp = iTotalExp;
                vipLev.lScore = infoEx.vipScore;
                int iVipLev = await GetLev(infoEx.vipExp);
                if (infoEx.vipLv != iVipLev)
                {
                    BaseHelper.ChangeUserGameDate(userid, 0, "UserVipLev", iVipLev,1);
                }
                infoEx.vipLv = iVipLev;
                vipLev.lev = infoEx.vipLv;
                await BaseHelper.AddOrUpdateBase(infoEx);
            }
            return JsonUtils.Serialize(vipLev);
        }
        /// <summary>
        /// 获取玩家VIP信息
        /// </summary>
        /// <param name="userid"></param>
        /// <returns></returns>
        public static async Task<string> GetUserVipInfo(int userid)
        {
            tuserInfoEx infoEx = await tb_userinfoEx.GetFromCachebyUserID(userid);
            sc_getuservipinfo reInfo = new sc_getuservipinfo() {result=1 };
            reInfo.currExp = infoEx.vipExp;
            reInfo.currScore = infoEx.vipScore;
            if (infoEx.vipLv == 0)
            {
                reInfo.MonthAwardStatus = 2;
                reInfo.UpAwardStatus = 2;
            }
            else
            {
                DateTime nowTime = DateTime.Now;
                if(_vipConfig==null) return JsonUtils.Serialize(reInfo);
                if (infoEx.ReceiveMonthAwardTime.Month != nowTime.Month&&nowTime.Day>=_vipConfig.MonthDay)
                {
                    reInfo.MonthAwardStatus = 0;
                }
                else
                {
                    reInfo.MonthAwardStatus = 1;
                }
                if (infoEx.vipLv > infoEx.AwardStatus)
                {
                    reInfo.UpAwardStatus = 0;
                }
                else
                {
                    reInfo.UpAwardStatus = 1;
                }
            }
            
            return JsonUtils.Serialize(reInfo);
        }
        /// <summary>
        /// 领取晋级奖励
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public static async Task<string> ReceiveUpAward(tUser user)
        {
            tuserInfoEx infoEx = await tb_userinfoEx.GetFromCachebyUserID(user.UserID);
            sc_receiveupaward reInfo = new sc_receiveupaward() {result=0 };
            int currLev = infoEx.vipLv;
            if (_vipConfig==null || _vipConfig.UpReward.Count <= currLev)
            {
                reInfo.message = "服务器VIP配置异常"; 
            }else if (infoEx.AwardStatus < currLev)
            {
                infoEx.AwardStatus = currLev;
                user.Gold += _vipConfig.UpReward[currLev]* glodTimes;
                reInfo.AwardScore = _vipConfig.UpReward[currLev];
                reInfo.MyScore = user.GetGoldAndWinGold;
                await BaseHelper.AddOrUpdateBase(infoEx);
                await BaseHelper.AddOrUpdateBase(user);
                reInfo.result = 1;
            }
            else
            {
                reInfo.message = "已领取或未满足领取条件";
            }
            
            return JsonUtils.Serialize(reInfo);
        }

        /// <summary>
        /// 领取每月奖励
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public static async Task<string> ReceiveMonthAward(tUser user)
        {
            tuserInfoEx infoEx = await tb_userinfoEx.GetFromCachebyUserID(user.UserID);
            sc_receivemonthaward reInfo = new sc_receivemonthaward() { };
            int currLev = infoEx.vipLv;
            int iDay = DateTime.Now.Day;
            if (_vipConfig==null ||_vipConfig.MonthReward.Count <= currLev)
            {
                reInfo.message = "服务器VIP配置异常";
            }
            else if (currLev > 0&& infoEx.ReceiveMonthAwardTime.Month!=DateTime.Now.Month )
            {
                infoEx.ReceiveMonthAwardTime = DateTime.Now;
                user.Gold += _vipConfig.MonthReward[currLev]* glodTimes;
                reInfo.AwardScore = _vipConfig.MonthReward[currLev];
                reInfo.MyScore = user.GetGoldAndWinGold;
                await BaseHelper.AddOrUpdateBase(infoEx);
                await BaseHelper.AddOrUpdateBase(user);
                reInfo.result = 1;
            }
            else
            {
                reInfo.message = "已领取或未满足领取条件";
            }
            return JsonUtils.Serialize(reInfo);
        }
        /// <summary>
        /// 获取玩家VIP信息
        /// </summary>
        /// <param name="userid"></param>
        /// <returns></returns>
        public static async Task<string> WriteUserVipScore(int userid,int lScore)
        {
            sc_writeuservipscore_gm reInfo = new sc_writeuservipscore_gm() { _ret=1 };
            tuserInfoEx infoEx = await tb_userinfoEx.GetFromCachebyUserID(userid);
            if (infoEx == null)
            {
                reInfo._info = "未找到该玩家";
            }
            else if (infoEx.vipScore < lScore)
            {
                reInfo._info = "积分不足";
            }else
            {
                infoEx.vipScore -= lScore;
                reInfo._ret = 0;
                reInfo._info = "扣除成功";
                await BaseHelper.AddOrUpdateBase(infoEx);
            }
            return JsonUtils.Serialize(reInfo);
        }
        /// <summary>
        /// 获取等级
        /// </summary>
        /// <param name="exp"></param>
        /// <returns></returns>
        public static async Task<int> GetLev(int exp)
        {
            if (_vipConfig == null) await GetVipConfig();
            int iLev = 0;
            int iLen = _vipConfig.UpExps.Count;
            int iTotalExp = 0;
            for(int i = 0; i < iLen; i++)
            {
                iTotalExp += _vipConfig.UpExps[i];
                if (exp >= iTotalExp)
                {
                    iLev = i;
                }
                else break;
            }
            return iLev;
        }
        /// <summary>
        /// VIP掉级
        /// </summary>
        /// <param name="time"></param>
        /// <param name="userid"></param>
        public static async void DropExp(int userid)
        {
            if (_vipConfig == null) await GetVipConfig();
            DateTime nowTime = DateTime.Now;
            tuserInfoEx infoEx = await tb_userinfoEx.GetFromCachebyUserID(userid);
            int iDays = nowTime.Subtract(infoEx.EnterGameTime).Days;
            if (iDays >= 3)
            {
                int MaxDay = 0;
                int SubExp = 0;
                
                if (infoEx.vipExp == 0) return;
                foreach(var v in _vipConfig.DropExps)
                {
                    MaxDay = v.Key;
                    SubExp = v.Value;
                    if (iDays >= v.Key)
                    {
                        infoEx.vipExp -= v.Value;
                        if (infoEx.vipExp <= 0)
                        {
                            infoEx.vipExp = 0;
                            await BaseHelper.AddOrUpdateBase(infoEx);
                            return;
                        }
                    }
                }
                int iTimes = (iDays - MaxDay) / MaxDay;
                infoEx.vipExp -= (iTimes*SubExp);
                if (infoEx.vipExp <= 0)
                {
                    infoEx.vipExp = 0;
                }
            }
            int iVipLev = await GetLev(infoEx.vipExp);
            if (infoEx.vipLv != iVipLev)
            {
                BaseHelper.ChangeUserGameDate(userid, 0, "UserVipLev", iVipLev,1);
            }
            infoEx.vipLv = iVipLev;
            await BaseHelper.AddOrUpdateBase(infoEx);
        }
        /// <summary>
        /// 设置升级经验
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="gametype">0 德州扑克  1:小游戏</param>
        /// <param name="winScore">一局流水</param>
        /// <param name="minrate">小盲</param>
        /// <param name="gametimes">游戏次数</param>
        public static async Task<int> SetUpgradeExp(int userid,int gametype,long winScore,int minrate,int gametimes)
        {
            if (_vipConfig == null) await GetVipConfig();
            List<RuleInfo> rules = _vipConfig.UpRule.FindAll(r => r.GameType == gametype&&r.GameTimes==gametimes);
            if (rules.Count<=0)
            {
                return gametimes;
            }
            if (gametype == 0)
            {
                RuleInfo rule = rules.Find(r => r.SmallRate == minrate);
                if (rule == null)
                {
                    TraceLogEx.Error($"未找到对应的小盲[{minrate}]VIP经验配置");
                    return 0;
                }
                SetUserVipInfo(userid, rule.Exp, 0);

            }
            else if (gametype == 1)
            {
                List<RuleInfo> tmpRules = rules.FindAll(r => r.Water <= Math.Abs(winScore));
                if (tmpRules.Count <= 0) return 0;
                tmpRules.Sort((a, b) => {
                    if (a.Water > b.Water)
                    {
                        return 1;
                    }
                    else
                    {
                        return 0;
                    }
                });
                RuleInfo rule = tmpRules[0];
                SetUserVipInfo(userid, rule.Exp, 0);
            }
            return 0;
        }
        /// <summary>
        /// 设置VIP积分
        /// </summary>
        /// <param name="userid"></param>
        public static async ETTask<int> SetVipScore(int userid, int lOldWaterScore, int lScore)
        {
            if (_vipConfig == null) await GetVipConfig();
            int lTmpWaterScore = lOldWaterScore + lScore;
            int lTmpScore = lTmpWaterScore % _vipConfig.ValidBetScore;
            int lIntegralScore = lTmpWaterScore / _vipConfig.ValidBetScore;
            if (lIntegralScore > 0)
            {
                SetUserVipInfo(userid, 0, lIntegralScore);
                return lTmpScore;
            }
            else
            {
                return lTmpWaterScore;
            }
        }
        /// <summary>
        /// 设置VIP经验和积分
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="exp"></param>
        /// <param name="score"></param>
        public static async void SetUserVipInfo(int userid,int exp,int score)
        {
            tuserInfoEx infoEx = await tb_userinfoEx.GetFromCachebyUserID(userid);
            //if (infoEx.vipLv == 0) return;
            infoEx.vipExp += exp;
            infoEx.vipScore += score;
            int iVipLev = await GetLev(infoEx.vipExp);
            if (infoEx.vipLv != iVipLev)
            {
                BaseHelper.ChangeUserGameDate(userid, 0, "UserVipLev", iVipLev,1);
            }
            infoEx.vipLv = iVipLev;
            await BaseHelper.AddOrUpdateBase(infoEx);
        }
        #endregion
    }

}
