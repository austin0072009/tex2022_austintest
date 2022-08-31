using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Common.Serialization;
using ETModel.Script.Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
 
namespace ETModel.Script.CsScript.Action
{
    public class UserLevConfig
    {
        /// <summary>
        /// 兑换比例（1点经验对应多少下注值）
        /// </summary>
        public int BetExperience;
        /// <summary>
        /// 升级经验值
        /// </summary>
        public Dictionary<int, int> UpgradeExp;
        /// <summary>
        /// 对应等级的没人经验上限限制
        /// </summary>
        public Dictionary<int, int> UpgradeLimitExp;
    }
    public class tb_UserEx : ConfigManger
    {
        private static UserLevConfig _config;
        private static DateTime lastWriteTime;
        public static async Task<string> GetUserNameByUserID(int userid)
        {
            tUser _tempuser = await GetFromCachebyUserID(userid);
            if (_tempuser != null) return _tempuser.wechatName;
            return "";
        }
        public static int GetTodayAddUserByFuserid(int userid)
        {
            var cacheSet = new PersonalCacheStruct<tUser>();
            var starttime = DateTime.Now.ToGetBeginDateTime();
            var endtime = DateTime.Now.ToGetDayEndDateTime();
            var _tempuser = cacheSet.FindAll(userid.ToString(), t => t.UserID == userid && t.RegTime >= starttime
            && t.RegTime <= endtime);
            return _tempuser.Count();
        }
        public static async Task<tUser> GetFromCachebyUserID(int UserID)
        {
            tUser _tempuser = await BaseHelper.GetBase<tUser>(UserID);
            return _tempuser;
        } 

        public static async void UpdateData(tUser _user)
        {
            if (_user == null) return;
            
            await BaseHelper.AddOrUpdateBase(_user);
        }

        #region 玩家经验
        /// <summary>
        /// 增加玩家经验值
        /// </summary>
        /// <param name="user"></param>
        /// <param name="lscore"></param>
        public static async void AddUserExp(tUser user,int lscore)
        {
            if (user == null) return ;
            DateTime currTime = DateTime.Now.ToGetBeginDateTime();
            if(user.StatisticsTime.ToGetBeginDateTime()!= currTime)
            {
                user.StatisticsTime = DateTime.Now;
                user.TodayUserExp = 0;
                user.currBetScore = 0;
            }
            UserLevConfig config = LevConfig;
            if (!config.UpgradeLimitExp.TryGetValue(user.lv, out int limitExp)) return ;
            if (user.TodayUserExp >= limitExp) return ;
            int betExp = config.BetExperience == 0 ? 1 : config.BetExperience;
            int exp = (user.currBetScore+ lscore) / betExp;
            user.currBetScore = (user.currBetScore + lscore) % betExp;
            int tmpExp = (user.TodayUserExp + exp) > limitExp ? (user.TodayUserExp + exp)- limitExp : exp;
            SetUserExp(user, tmpExp);
        }
        /// <summary>
        /// 增加玩家经验值
        /// </summary>
        /// <param name="uid"></param>
        /// <param name="lscore"></param>
        public static async void AddUserExp(int uid, int lscore)
        {
            tUser user = await BaseHelper.GetBase<tUser>(uid);
            AddUserExp(user, lscore);
        }
        /// <summary>
        /// 设置玩家经验值
        /// </summary>
        /// <param name="user"></param>
        /// <param name="lscore"></param>
        public static async void SetUserExp(tUser user, int exp)
        {
            if (user == null) return;
            UserLevConfig config = LevConfig;
            if (!config.UpgradeLimitExp.ContainsKey(user.lv)) return;
            if (config.UpgradeExp.Keys.Max() == user.lv) return;
            user.UserExp += exp;
            user.TodayUserExp += exp;
            
            foreach (var v in config.UpgradeExp)
            {
                if (v.Key == user.lv && user.UserExp >= v.Value)
                {
                    user.lv++;
                    user.UserExp -= v.Value;
                    
                }
            }
            await BaseHelper.AddOrUpdateBase(user);
        }
        /// <summary>
        /// 获取玩家升级经验值
        /// </summary>
        /// <param name="user"></param>
        /// <param name="lscore"></param>
        public static long getUserExp(tUser user)
        {
            if (user == null) return 0;
            UserLevConfig config = LevConfig;
            long lTotalExp = 0;
            foreach (var v in config.UpgradeExp)
            {
                if (v.Key == user.lv)
                {
                    lTotalExp = v.Value;
                }
            }
            return lTotalExp;
        }
        /// <summary>
        /// 设置玩家经验值
        /// </summary>
        /// <param name="uid"></param>
        /// <param name="lscore"></param>
        public static async void SetUserExp(int uid, int exp)
        {
            tUser user = await BaseHelper.GetBase<tUser>(uid);
            SetUserExp(user, exp);
        }
        public static UserLevConfig LevConfig
        {
            get
            {
                string strPath = StartConfigComponent.Instance.ConfigPath + $"/GameConfig/UserLevConfig.json";
                DateTime currWriteTime = File.GetLastWriteTimeUtc(strPath);
                if (currWriteTime != lastWriteTime)
                {
                    lastWriteTime = currWriteTime;
                    string strValue = File.ReadAllText(strPath);
                    _config = JsonUtils.Deserialize<UserLevConfig>(strValue);
                }
                return _config;
            }
            
        }
        #endregion

        /// <summary>
        /// 设置用户等级
        /// </summary>
        /// <param name="uid"></param>
        /// <param name="level"></param>
        /// <returns></returns>
        public static async Task<string> SetUserLevel(int uid, int level)
        {
            tUser user = await BaseHelper.GetBase<tUser>(uid);
            if (user == null) return "设置失败!";

            user.vlevel = level;
            await BaseHelper.AddOrUpdateBase(user);

            return "1";
        }

        public static async void SetRobotGold(tUser _user, int _min, int _max )
        { 
            if (_user.GetGoldAndWinGold >= _min && _user.GetGoldAndWinGold <= _max) return; 
            if (ToolsEx.CheckPercent( 90))
            {   //90%模拟真人环境
                int _tempLimit = ToolsEx.GetRandomSys(_min, _max);
                _tempLimit /= 100; 
                _user.Gold = (long)(_tempLimit * 100); 
            }
            else
            {
                _user.Gold = _max; 
            }
            await BaseHelper.AddOrUpdateBase(_user); 
        }

        /// <summary>
        /// 写入钻石日志    改变钻石之后调用
        /// </summary>
        /// <param name="user"></param>
        /// <param name="ChangeType"></param>
        /// <param name="gameid"></param>
        /// <param name="remark"></param>
        /// <param name="gold">加钻石为:负    减钻石为：正</param>
        public static void UserDiamondLog(tUser user, int ChangeType, int gameid, string remark, long gold)
        {
            tDiamondChangeLog dlog = new tDiamondChangeLog();
            dlog.BeforeGold = user.diamond + gold;
            dlog.AfterGold = user.diamond;
            dlog.ChangeType = ChangeType;
            dlog.UserId = user.UserID;
            dlog.Gold = gold < 0 ? gold * -1 : gold;
            dlog.Remark = remark;
            BaseHelper.AddAsync(dlog);
        } 

        /// <summary>
        /// 操作金币数量
        /// </summary>
        /// <param name="user">玩家</param>
        /// <param name="coin">金币数量</param>
        /// <param name="actionType">操作类型</param>
        /// <returns></returns>
        public static async Task<bool> ActionCoin(tUser user, long coin, ResActionType actionType, string tradeNo)
        {
            decimal bcoin = user.GetGoldAndWinGold;
            coin = Math.Abs(coin);
            switch (actionType)
            {
                case ResActionType.Add:
                    user.Gold += coin;
                    break;
                case ResActionType.Minus:
                    if (user.GetGoldAndWinGold < coin)
                    {
                        return false;
                    }
                    user.GoldReduce(coin);
                    break;
            }
            var tb_TradeInfo = await BaseHelper.GetShare<tTradeInfo>((x) => x.TradeNo == tradeNo && x.ToUserId == user.UserID);
            if (tb_TradeInfo == null) return false;
            tgoldchangelog model = new tgoldchangelog();
            model.UserId = user.UserID;
            model.Gold = tb_TradeInfo.TaxCoin;
            model.BeforeGold = (long)bcoin;
            model.GameId = 52;
            model.AfterGold = user.GetGoldAndWinGold;
            model.IsRobot = false;
            model.ChangeType = 5;
            BaseHelper.AddAsync(model);
            //记录日志
            return true;
        }

        public static bool ActionDiamond(tUser user, long coin, ResActionType actionType, string tradeNo)
        {
            decimal bcoin = user.GetGoldAndWinGold;
            coin = Math.Abs(coin);
            switch (actionType)
            {
                case ResActionType.Add:
                    user.diamond += coin;
                    break;
                case ResActionType.Minus:
                    if (user.diamond < coin)
                    {
                        return false;
                    }
                    user.diamond -= coin;
                    break;
            }
            var tb_TradeInfo = BaseHelper.GetShare<tTradeInfo>((x) => x.TradeNo == tradeNo && x.ToUserId == user.UserID);
            if (tb_TradeInfo == null) return false;
            return false;
        }


        //public static string GetRandText(string index)
        //{
        //    int _index = 0;
        //    int.TryParse(index, out _index);
        //    List<string> languageList = new List<string>();
        //    languageList.Add("没毛病,干就完了,奥力给.");
        //    languageList.Add("搞紧,搞紧,你在吃蝙蝠吗？紧到吞不下.");
        //    languageList.Add("冲撒.上.");
        //    languageList.Add("我也想低调,但是实力不允许撒.");
        //    languageList.Add("日月同生,天地人和,来张主牌,急急如律令.");
        //    languageList.Add("莫管我,输浑了.");
        //    languageList.Add("干干巴巴,麻麻赖赖,盘他.");
        //    languageList.Add("东风吹,战鼓擂,现今扯旋谁怕谁.");
        //    languageList.Add("卧槽,无情啊.");
        //    languageList.Add("先赢的是纸,后赢的才是钱.");
        //    return languageList[_index];
        //} 


        /// <summary>
        /// 得到可领取红包的用户id
        /// </summary>
        /// <returns></returns>
        public static List<int> GetGameUserRed()
        { 
            List<int> list = new List<int>(); 
            return list;
        }

        /// <summary>
        /// 玩家在线时间日志
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="_gameid"></param>
        /// <param name="_roomid"></param>
        /// <param name="bEnterHall"></param>
        /// <param name="bEnterGame"></param>
        public static void WriteUserOnLineTime(int userid,int _gameid,int _roomid,bool bEnterHall,bool bEnterGame)
        {
            BaseHelper.AddAsync(new tUserOnlineTimeLog()
            {
                UserId = userid,
                HallLogInTime = bEnterHall ? TimeHelper.ClientNowSeconds() :0 ,
                HallLogOutTime = bEnterHall ? 0 : TimeHelper.ClientNowSeconds(),
                GameLogInTime = (bEnterGame&&_roomid!=0 )? TimeHelper.ClientNowSeconds() : 0,
                gameid = _gameid,
                levelid = _roomid,
                GameLogOutTime = (bEnterGame||_roomid==0)?0:TimeHelper.ClientNowSeconds()
            });
        }
    }

    public class tb_userinfoEx
    {
        public static async Task<tuserInfoEx> GetFromCachebyUserID(int UserID)
        {
            tuserInfoEx _tempuser = await BaseHelper.GetBase<tuserInfoEx>(UserID);
            if (_tempuser == null)
            {
                tuserInfoEx tuserex = new tuserInfoEx() { UserID = UserID };
                if (tuserex.BackPack == null) tuserex.BackPack = new CacheList<UserBackPack>();
                await BaseHelper.AddOrUpdateBase(tuserex);
                return tuserex;
            }
            return _tempuser;
        }
        public static async void AddOrUpdateBase(tuserInfoEx tuserex)
        {
            await BaseHelper.AddOrUpdateBase(tuserex);
        }
        /// <summary>
        /// 临时的签到统计数据
        /// </summary>
        /// <param name="UserID"></param>
        /// <param name="cgold"></param>
        /// <param name="cashgold"></param>
        public static async void UpdateSigninData(int UserID,long cgold = 0,long cashgold = 0)
        {
            var currTime = DateTime.Now.ToGetBeginDateTime();
            tTaskCompletionInfo cinfos = BaseBrigeHelper.GetBase<tTaskCompletionInfo>(x => x.userid == UserID && x.CreateDate.ToGetBeginDateTime() == currTime && x.taskid==80);
            if (cinfos!=null && cinfos.IsReceive) return;

            tuserInfoEx _tempuser = await GetFromCachebyUserID(UserID);
            if (_tempuser != null)
            {
                if (_tempuser.SigninData == null) _tempuser.SigninData = new SigninInfo();
                _tempuser.SigninData.Cashout += cashgold;
                _tempuser.SigninData.TotalRecharge += cgold;
                _tempuser.SigninData.etime = DateTime.Now;
            }
        }



    }

    public class tb_textenconfigEx
    {
        public static async Task<textenconfig> GetConfigFromCache()
        {
            textenconfig desconfig = await BaseHelper.GetShare<textenconfig>(t => t.Id == 1);
            if (desconfig == null)
            {
                var m = new textenconfig();
                return m;
            }
            return desconfig;
        }

    }



    public enum UserLevelEnum
    {
        Init = -1,
        /// <summary>
        ///  
        /// </summary>
        lv1 = 1,
        /// <summary>
        ///  
        /// </summary>
        lv2 = 2,
        /// <summary>
        ///  
        /// </summary>
        lv3 = 3, 

        /// <summary>
        ///  
        /// </summary>
        lv_createmax = 19,
        /// <summary>
        ///  
        /// </summary>
        lv_robot = 20,
    }

    public class tNoticeEx
    {
        public static async Task<tnotice> GetLastNotice(int type)
        {

            string ttype = type + "";
            List<tnotice> tlist = await BaseHelper.GetShareAll<tnotice>(w => w.isStart == 1 && w.type == ttype && w.starttime >= DateTime.Now && w.endtime <= DateTime.Now);
            var notice = tlist.OrderByDescending(w => w.noticetime).ToList().FirstOrDefault();

            return notice;
        }

        public static async Task<List<tnotice>> GetAllNotice(int type)
        {

            string ttype = type + "";
            List<tnotice> tlist = await BaseHelper.GetShareAll<tnotice>(w => w.isStart == 1 && w.type == ttype && w.starttime <= DateTime.Now &&  w.endtime >= DateTime.Now);
           // List<tnotice> tlist = await BaseHelper.GetShareAll<tnotice>(w => w.isStart == 1 && w._type == ttype && (w.endtime > DateTime.Now || w.endtime == null));

            return tlist;
        }

    } 

    public class tactivityEx
    {
        public static async Task<List<tactivity>> GetTactivitys()
        {
            List<tactivity> list = await BaseHelper.GetShareAll<tactivity>();
            return list;
        }
    }


    /// <summary>
    /// 统一写在线日志
    /// </summary>
    public class tonlineinfoEx
    {
        /// <summary>
        /// 根据条件获取走势图信息
        /// </summary>
        /// <param name="_data"></param>
        /// <returns></returns>
        public static void WriteLog(int gameid, int roomid, int onlinecount, int rcount)
        {
            if (onlinecount <= 0) return;

            BaseHelper.AddAsync(new tonlineinfo()
            {
                GameId = gameid,
                CreateTime = DateTime.Now,
                GameModel = 0,
                RoomId = roomid,
                OnlineCount = onlinecount,
                GameType = 0,
                rCount = rcount
            });
        }

    } 


}
