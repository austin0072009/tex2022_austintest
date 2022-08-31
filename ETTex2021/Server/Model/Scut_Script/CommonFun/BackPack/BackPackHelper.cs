using ETModel.Framework.Common.Serialization;
using ETModel.Script.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ETModel.Script.CsScript.Action
{
    public class BackPackHelper : BaseHelper
    {
        /// <summary>
        /// 获取背包列表信息
        /// </summary>
        /// <param name="userid"></param>
        /// <returns></returns>
        public static async Task<string> GetBackPackList(int userid)
        {
            sc_getbackpacklist proplist = new sc_getbackpacklist() { result = 0, props = new List<PropInfo>(), message = "没有道具" };
            tuserInfoEx userex = await tb_userinfoEx.GetFromCachebyUserID(userid);
            if (userex.BackPack != null && userex.BackPack.Count > 0)
            {
                List<tPropConfig> props = await BaseHelper.GetShareAll<tPropConfig>();
                var BackPack = userex.BackPack.GroupBy(t=>t.PropID).Select(t=>new UserBackPack() { PropID=t.Key,PropCount=t.Sum(s=>s.PropCount)}).ToList();
                foreach (var v in BackPack)
                {
                    tPropConfig config = props.Find(p => p.PropID == v.PropID);
                    if (config == null) continue;
                    if (v.PropCount == 0) continue;
                    proplist.props.Add(new PropInfo()
                    {
                        PropID = v.PropID,
                        PropCount = v.PropCount,
                        PropName = config.PropName,
                        PropType = config.PropType,
                        UseType = config.UseType,
                        Desc = config.Desc,
                        ImgUrl = ToolsEx.IsHandlePhoto(0, config.ImgUrl)
                    });
                }
                proplist.result = 1;
                proplist.message = "获取成功";
            }
            return JsonUtils.Serialize(proplist);
        }
        /// <summary>
        /// 背包增加道具
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="propid"></param>
        /// <param name="count"></param>
        public static async Task<bool> AddProp(int userid, int propid, int count)
        {
            tPropConfig config = await BaseHelper.GetShare<tPropConfig>(p => p.PropID == propid);
            if (config == null)
            {
                return false;
            }
            tuserInfoEx userex = await tb_userinfoEx.GetFromCachebyUserID(userid);
            if (userex.BackPack == null) userex.BackPack = new Framework.Cache.Generic.CacheList<UserBackPack>();
            List<UserBackPack> ubps = userex.BackPack.FindAll(b => b.PropID == propid);
            if (ubps != null && ubps.Count > 0)
            {
                int iLen = ubps.Count;
                for (int i = 0; i < iLen; i++)
                {
                    if (ubps[i].PropCount < config.PropCount)
                    {
                        int iTmpCount = ubps[i].PropCount;
                        ubps[i].PropCount = count + ubps[i].PropCount > config.PropCount ? config.PropCount : count + ubps[i].PropCount;
                        ubps[i].RemoveTime = DateTime.Now;
                        count -= (ubps[i].PropCount - iTmpCount);
                    }else if(config.PropCount == 0)
                    {
                        ubps[i].PropCount += count ;
                        ubps[i].RemoveTime = DateTime.Now;
                        count = 0;
                    }
                    if (count <= 0) break;
                }
            }
            while (count > 0)
            {
                UserBackPack ubp = new UserBackPack();
                ubp.PropID = propid;
                ubp.PropCount = count > config.PropCount ? config.PropCount : count;
                ubp.RemoveTime = DateTime.Now;
                userex.BackPack.Add(ubp);
                count -= ubp.PropCount;
            }
            await BaseHelper.AddOrUpdateBase<tuserInfoEx>(userex);
            return true;
        }
        /// <summary>
        /// 背包增加道具
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="propid"></param>
        /// <param name="count"></param>
        public static bool AddProp_Local(tuserInfoEx userinfo, int propid, int count)
        {
            tPropConfig config = BaseBrigeHelper.GetShare<tPropConfig>(p => p.PropID == propid);
            if (config == null)
            {
                return false;
            }
            if (userinfo == null) return false;
            if (userinfo.BackPack == null) userinfo.BackPack = new Framework.Cache.Generic.CacheList<UserBackPack>();
            List<UserBackPack> ubps = userinfo.BackPack.FindAll(b => b.PropID == propid);
            if (ubps != null && ubps.Count > 0)
            {
                int iLen = ubps.Count;
                for (int i = 0; i < iLen; i++)
                {
                    if (ubps[i].PropCount < config.PropCount)
                    {
                        int iTmpCount = ubps[i].PropCount;
                        ubps[i].PropCount = count + ubps[i].PropCount > config.PropCount ? count + ubps[i].PropCount - config.PropCount : count + ubps[i].PropCount;
                        ubps[i].RemoveTime = DateTime.Now;
                        count -= (ubps[i].PropCount - iTmpCount);
                    }
                    if (count <= 0) break;
                }
            }
            while (count > 0)
            {
                UserBackPack ubp = new UserBackPack();
                ubp.PropID = propid;
                ubp.PropCount = count > config.PropCount ? count - config.PropCount : count;
                userinfo.BackPack.Add(ubp);
                count -= ubp.PropCount;
            }
            return true;
        }
        /// <summary> 判断物品是否足够 </summary>
        public static bool IsEnough(tuserInfoEx info, PrizeInfo prize)
        {
            if (info == null) return false;
            var list = info.BackPack.FindAll(x => x.PropID == prize.type);
            if (list == null) return false;
            int num = 0;
            foreach (var item in list) num += item.PropCount;
            return num >= prize.num;
        }
        /// <summary>
        /// 背包删除道具
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="propid"></param>
        /// <param name="count"></param>
        public static async Task<bool> RemovProp(int userid, int propid, int count)
        {
            tuserInfoEx userex = await tb_userinfoEx.GetFromCachebyUserID(userid);
            if (userex.BackPack == null) userex.BackPack = new Framework.Cache.Generic.CacheList<UserBackPack>();
            List<UserBackPack> ubps = userex.BackPack.FindAll(b => b.PropID == propid);
            if (ubps == null || ubps.Count <= 0)
            {
                return false;
            }
            int iLen = ubps.Count;
            int iTmpCount = ubps.Sum<UserBackPack>(u => u.PropCount);
            if (iTmpCount < count)
            {
                return false;
            }
            List<int> removeIndexs = new List<int>();
            iLen = userex.BackPack.Count;
            for (int i = 0; i < iLen; i++)
            {
                if (userex.BackPack[i].PropID == propid)
                {
                    iTmpCount = userex.BackPack[i].PropCount;
                    userex.BackPack[i].PropCount = count > userex.BackPack[i].PropCount ? 0 : userex.BackPack[i].PropCount - count;
                    count -= (iTmpCount - userex.BackPack[i].PropCount);
                    if (userex.BackPack[i].PropCount <= 0) removeIndexs.Add(i);
                }
                if (count <= 0) break;
            }
            foreach (var v in removeIndexs)
            {
                userex.BackPack.RemoveAt(v);
            }
            await BaseHelper.AddOrUpdateBase<tuserInfoEx>(userex);
            return true;
        }
        /// <summary>
        /// 使用道具
        /// </summary>
        /// <param name="user"></param>
        /// <param name="propid"></param>
        /// <param name="count"></param>
        /// <returns></returns>
        public static async Task<string> UseProp(tUser user, int propid, int count)
        {
            sc_useprop useprop = new sc_useprop() { result = 0, message = "没找到该道具" };
            tuserInfoEx userex = await tb_userinfoEx.GetFromCachebyUserID(user.UserID);
            useprop.UserGold = user.GetGoldAndWinGold;
            if (userex.BackPack != null && userex.BackPack.Count > 0)
            {
                List<tPropConfig> props = await BaseHelper.GetShareAll<tPropConfig>();
                List<UserBackPack> ubps = userex.BackPack.FindAll(u => u.PropID == propid);
                tPropConfig config = props.Find(p => p.PropID == propid);
                if (ubps != null && ubps.Count > 0 && config != null)
                {
                    int iTmpCount = count;
                    int iTotalCount = ubps.Sum(u => u.PropCount);
                    if (await RemovProp(user.UserID, propid, iTmpCount))
                    {

                        if (config.PropType == 0)//金币
                        {
                            user.Gold += config.Gold * count * 100;
                            useprop.PropID = config.PropID;
                            useprop.PropCount = iTotalCount - count;
                            useprop.PropGold = config.Gold * count;
                            useprop.UserGold = user.GetGoldAndWinGold;
                            await BaseHelper.AddOrUpdateBase(user);
                            WritePropLog(user.UserID, config.PropID, -count, 0, "兑换金币");
                        }
                        else if (config.PropType == 1)//头像
                        {
                            if (userex.HeadIcos == null) userex.HeadIcos = new Framework.Cache.Generic.CacheList<string>();
                            if (!userex.HeadIcos.Contains(config.ImgUrl))
                            {
                                userex.HeadIcos.Add(config.ImgUrl);
                            }
                            userex.HeadFrame = config.ImgUrl;
                            useprop.PropID = config.PropID;
                            useprop.PropGold = config.Gold;
                            useprop.data = config.ImgUrl;
                            BaseHelper.ChangeUserGameDate(user.UserID, 0, "ChangeAvatarFrameCount");
                            await BaseHelper.AddOrUpdateBase(userex);
                            WritePropLog(user.UserID, config.PropID, -count, 0, "使用头像");
                        }
                        else
                        {
                            switch (propid)
                            {
                                default:
                                    TraceLogEx.Error($"玩家[{user.UserID}]道具ID为[{propid}]数量为[{count}]的对应功能尚未实现");
                                    break;
                            }
                        }
                        useprop.result = 1;
                        useprop.message = "使用道具成功";
                    }
                    else
                    {
                        useprop.message = "道具数量不足";
                    }
                }
                else
                {
                    useprop.message = "未找到相应道具";
                }
            }
            return JsonUtils.Serialize(useprop);
        }
        /// <summary>
        /// 给玩家添加道具
        /// </summary>
        /// <param name="strValue"></param>
        /// <returns></returns>
        public static async Task<string> GmAddUserProp(string strValue)
        {
            cs_adduserprop_gm prop = JsonUtils.Deserialize<cs_adduserprop_gm>(strValue);
            sc_adduserprop_gm reValue = new sc_adduserprop_gm() { _ret = 1, PropID = prop.PropID };
            foreach (var userid in prop.userids)
            {
                if (await AddProp(userid, prop.PropID, prop.PropCount))
                {
                    reValue._ret = 0;
                    tuserInfoEx userex = await tb_userinfoEx.GetFromCachebyUserID(userid);
                    foreach (var v in userex.BackPack)
                    {
                        if (v.PropID != prop.PropID) continue;
                        reValue.PropCount += v.PropCount;
                    }
                    WritePropLog(userid, prop.PropID, prop.PropCount, 0, "GM发放道具");
                }
                else
                {
                    WritePropLog(userid, prop.PropID, prop.PropCount, 1, "GM发放道具");
                }
            }

            return JsonUtils.Serialize(reValue);
        }
        /// <summary>
        /// 移除玩家道具
        /// </summary>
        /// <param name="strValue"></param>
        /// <returns></returns>
        public static async Task<string> GmRemoveUserProp(string strValue)
        {
            cs_removeuserprop_gm prop = JsonUtils.Deserialize<cs_removeuserprop_gm>(strValue);
            sc_removeuserprop_gm reValue = new sc_removeuserprop_gm() { _ret = 1, PropID = prop.PropID };
            if (await RemovProp(prop.userid, prop.PropID, prop.PropCount))
            {
                tuserInfoEx userex = await tb_userinfoEx.GetFromCachebyUserID(prop.userid);
                foreach (var v in userex.BackPack)
                {
                    if (v.PropID != prop.PropID) continue;
                    reValue.PropCount += v.PropCount;
                }
                reValue._ret = 0;
                WritePropLog(prop.userid, prop.PropID, -prop.PropCount, 0, "GM移除道具");
            }
            else
            {
                WritePropLog(prop.userid, prop.PropID, -prop.PropCount, 1, "GM移除道具");
            }
            return JsonUtils.Serialize(reValue);
        }
        /// <summary>
        /// 添加道具配置
        /// </summary>
        /// <param name="strValue"></param>
        /// <returns></returns>
        public static async Task<string> GmAddUserPropConfig(string strValue)
        {
            cs_addpropconfig_gm prop = JsonUtils.Deserialize<cs_addpropconfig_gm>(strValue);
            sc_adduserprop_gm reValue = new sc_adduserprop_gm() { _ret = 0 };
            tPropConfig propConfig = await BaseHelper.GetShare<tPropConfig>(p => p.PropID == prop.config.PropID);
            if (propConfig != null)
            {
                propConfig.PropName = prop.config.PropName;
                propConfig.PropType = prop.config.PropType;
                propConfig.UseType = prop.config.UseType;
                propConfig.Desc = prop.config.Desc;
                propConfig.PropCount = prop.config.PropCount;
                propConfig.Gold = prop.config.Gold;
                propConfig.ImgUrl = prop.config.ImgUrl == null ? propConfig.ImgUrl : prop.config.ImgUrl;
                await BaseHelper.AddOrUpdate(propConfig);
            }
            else
            {
                await BaseHelper.Add(prop.config);
            }
            return JsonUtils.Serialize(reValue);
        }
        /// <summary>
        /// 道具日志
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="propid"></param>
        /// <param name="propcount">正数表示增加，负数表示减少</param>
        /// <param name="status">0：成功 1:失败</param>
        /// <param name="remark"></param>
        public static void WritePropLog(int userid,int propid,int propcount,int status,string remark)
        {
            BaseHelper.AddAsync(new tUserPropLog()
            {
                UserId=userid,
                PropID = propid,
                PropCount = propcount,
                Status = status,
                remark = remark
            });
        }
    }
}
