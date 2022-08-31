using ETModel.Script.Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using ETModel.Framework.Common;
using ETModel.Framework.Common.Serialization;
using ETModel.Framework.Data;
using System.Threading.Tasks;

namespace ETModel.Script.CsScript.Action
{
    public  class RankHelper : BaseHelper
    {
        /// <summary>
        /// 是否打开活动
        /// </summary>
        public static bool OpenActive = true;

        /// <summary>
        /// 返回排行榜列表
        /// </summary>
        /// <returns></returns>
        public static async Task<string> cs_getranklist2(tUser _user)
        {
            sc_getranklist2 _senddata = new sc_getranklist2() { result = 1 };

            string timeStr = "2020-03-02 00:00:00";
            DateTime now = DateTime.Now;
            string minute = "00";
            if (now.Minute >= 30)
                minute = "30";
            _senddata.EndTime = Convert.ToDateTime(now.Date.ToShortDateString() + " " + now.Hour.ToString() + ":" + minute + ":00");
            _senddata.BeginTime = Convert.ToDateTime(timeStr);
            var active = GetGameActivities();

            _senddata.agentRank = GetGameUserRankList(0, _user.UserID);
            _senddata.agentRankActive = active.Where(t => t.Type == 2).FirstOrDefault();

            if (_senddata.agentRankActive.startTime < DateTime.Now && _senddata.agentRankActive.endTime > DateTime.Now) _senddata.agentExist = true;
            else _senddata.agentExist = false;

            if (_senddata.agentRank.Count == 21)
            {
                _senddata.Mess = ((_senddata.agentRank[19].TotalHand - _senddata.agentRank[20].TotalHand) / 100).ToString();
                _senddata.agentRank.RemoveAt(20);
            }
            else
                _senddata.Mess = "";
            //删除没有红利的代理
            bool hasNo = true;
            while (hasNo && _senddata.agentRank.Count > 0)
            {
                if (_senddata.agentRank[_senddata.agentRank.Count - 1].TotalHand <= 0)
                    _senddata.agentRank.RemoveAt(_senddata.agentRank.Count - 1);
                else
                    hasNo = false;
            }
            _senddata.profitRank = GetGameUserRankList(-1, _user.UserID);
            _senddata.profitRankActive = active.Where(t => t.Type == 3).FirstOrDefault();

            if (_senddata.profitRankActive.startTime < DateTime.Now && _senddata.profitRankActive.endTime > DateTime.Now)  _senddata.profitExist = true;
            else _senddata.profitExist = false;

            if (_senddata.profitRank.Count == 21)
            {
                _senddata.Mess4 = ((_senddata.profitRank[19].TotalHand - _senddata.profitRank[20].TotalHand) / 100).ToString();
                _senddata.profitRank.RemoveAt(20);
            }
            else
                _senddata.Mess4 = "";
           
            HourHandRank hhr = new HourHandRank();
            if (RankHelper.OpenActive)
            {
                var handA = active.Where(t => t.Type == 1).FirstOrDefault();
                handA = handA == null ? new GameActivities(): handA;

                hhr.active = handA;
                if (handA.startTime < DateTime.Now && handA.endTime > DateTime.Now)
                {
                    List<RankUserSD> rlist = new List<RankUserSD>();
                    var Rank1 =await GetUserHandRankList(1);
                    rlist.AddRange(Rank1);
                    var Rank2 =await GetUserHandRankList(2);
                    rlist.AddRange(Rank2);
                    var Rank5 =await GetUserHandRankList(5);
                    rlist.AddRange(Rank5);
                    var Rank10 =await GetUserHandRankList(10);
                    rlist.AddRange(Rank10);
                    var Rank20 =await GetUserHandRankList(20);
                    rlist.AddRange(Rank20);
                    var Rank50 =await GetUserHandRankList(50);
                    rlist.AddRange(Rank50);

                    hhr.BaseRate1Rank = rlist;
                    hhr.IsExist = true;
                }
                else
                {
                    hhr.IsExist = false;
                    hhr.Msg = Language.Instance.activiteOver;
                }
            }
            else
            {
                hhr.IsExist = false;
                hhr.Msg = Language.Instance.activiteOpen;
            }
            _senddata.HourHandRank = hhr;
            return JsonUtils.Serialize(_senddata);
        }

        /// <summary>
        /// 返回排行榜列表
        /// </summary>
        /// <returns></returns>
        public static async Task<string> GetRankList(tUser _user, cs_getranklist _data)
        {
            sc_getranklist _senddata = new sc_getranklist() { result = 1, _ranklist = new List<RankInfoSD>() };
            _senddata._onlymine = _data._onlymine;
            _senddata.type = _data.type;
            _senddata._ranklist =await GetRankList(_data.type);
            return JsonUtils.Serialize(_senddata);
        }


        public static void TryRecoverFromDbForSysconfig()
        { 
            BaseHelper.ReLoad<tsysconfig>();
        }
        public static async Task<List<tsysconfig>> GetSysConfig(string pistr)
        {
            List<tsysconfig> data =await BaseHelper.GetShareAll<tsysconfig>(t => t.Dec == pistr);
            if (data==null)
            {
                TryRecoverFromDbForSysconfig();
                data =await BaseHelper.GetShareAll<tsysconfig>(t => t.Dec == pistr);
            }
            if (data == null) return new List<tsysconfig>();
            return data;
        }
        public static async Task<tsysconfig> GetValByKey(string key)
        {
            tsysconfig data = await BaseHelper.GetShare<tsysconfig>(t => t.Key == key);
            if (data == null)
            {
                TryRecoverFromDbForSysconfig();
                data = await BaseHelper.GetShare<tsysconfig>(t => t.Key == key);
            }
            if (data == null) return null;
            return data;
        }

        #region rank db
        /// <summary>
        /// 每天统计一次排行榜内容未处理  是writeonly
        /// </summary>
        public static void SetRankListEveryDay()
        {
            ////var cacheSettable = new ShareCacheStruct<ttableLog>();
            ////List<ttableUserLog> _tmListall = new List<ttableUserLog>();//有最优的SQL语句或存储过程来执行的    还需要按UserID分组 按AddorReduceMoney从大到小排序 
            //////////取一天前的数据 
            ////////List<tbtablerecord> _tabList = cacheSettable.FindAll((t_user) => { return t_user.gameid == 4 && t_user._isover == true && t_user.EndTime > System.DateTime.Now.AddDays(-1); });
            ////////foreach (tbtablerecord t_tab in _tabList)
            ////////{
            ////////    var cacheSet = new ShareCacheStruct<tb_TableMoneyLog>();
            ////////    _tmListall.AddRange(cacheSet.FindAll((t_user) => { return t_user._guid == t_tab._guid && t_user._isover == true; }));
            ////////}
            //////最前5名
            ////if (_tmListall.Count < 5) return;

        }
        public static async Task<List<RankInfoSD>> GetRankList(int type)
        {
            List<RankInfoSD> _rankinfolist = new List<RankInfoSD>(); 
            var userIds = await BaseHelper.GetUserIdList(0); //ExeOnlyRedisDBHelper.GetUserIdList(0);
            List<tUser> userList = new List<tUser>();
            foreach (var item in userIds)
            {
                tUser user =await BaseHelper.GetBase<tUser>(item); 
                if (user != null) userList.Add(user);
            }
            if (userList.Any())
            {
                List<tUser> tempList = new List<tUser>();
                if (type == 1)
                    tempList = userList.OrderByDescending(w => w.diamond).Take(20).ToList();
                else if (type == 2)
                    tempList = userList.OrderByDescending(w => w.Gold).Take(20).ToList();
                _rankinfolist = tempList.Select(w => new RankInfoSD { userid = w.UserID, winScore = type == 1 ? (int)w.diamond : (int)w.Gold, uName = w.wechatName, rank = tempList.IndexOf(w) + 1, headurl = ToolsEx.IsHandlePhoto(w.isRobot, w.wechatHeadIcon) }).ToList();
            }
            return _rankinfolist;
        }

        /// <summary>
        /// 活动是否存在
        /// </summary>
        /// <returns></returns>
        public static List<GameActivities> GetGameActivities()
        {
            var dbProvider = DbConnectionProvider.CreateDbProvider(strFixed.strConnectstring_System);
            var command = dbProvider.CreateCommandStruct("gameactivities", CommandMode.Inquiry);
            command.Columns = "Id,EndTime,StartTime,BackField";
            command.Filter = ConnectManagerEx.DataProvider.CreateCommandFilter();
            command.Filter.Condition = string.Format("BackField in(1,2,3)");
           
            //command.Filter.AddParam("StartTime", DateTime.Now);
            //command.Filter.AddParam("EndTime", DateTime.Now);
            command.OrderBy = "CreatTime desc";
            command.Parser();
            List<GameActivities> gat = new List<GameActivities>();
            using (var reader = dbProvider.ExecuteReader(CommandType.Text, command.Sql, command.Parameters))
            {

                while (reader.Read())
                {
                    gat.Add(new GameActivities()
                    {
                        endTime = reader["EndTime"].ToDateTime(),
                        startTime = reader["StartTime"].ToDateTime(),
                        Type = reader["BackField"].ToInt32()
                    });
                }
            }
            return gat;
        }
        /// <summary>
        /// 得到验证码
        /// </summary>
        /// <param name="cerifcode"></param>
        /// <returns></returns>
        public static  bool Getverifycode(string cerifcode)
        {
            try
            {
                var dbProvider = DbConnectionProvider.CreateDbProvider(strFixed.strConnectstring_System);
                var command = dbProvider.CreateCommandStruct("verifycodeentities", CommandMode.Inquiry);
                command.Columns = "Id";
                command.Filter = ConnectManagerEx.DataProvider.CreateCommandFilter();
                command.Filter.Condition = string.Format("{0} AND {1} AND {2}", dbProvider.FormatFilterParam("CreatTime", ">="),
                    dbProvider.FormatFilterParam("VerifyCode"),
                    dbProvider.FormatFilterParam("IsDel"));
                command.Filter.AddParam("CreatTime", DateTime.Now.AddMinutes(-10));
                command.Filter.AddParam("VerifyCode", cerifcode);
                command.Filter.AddParam("IsDel", 0);
                command.OrderBy = "CreatTime desc limit 0,1";
                command.Parser();
                object _res = dbProvider.ExecuteScalar(CommandType.Text, command.Sql, command.Parameters);
                if (_res != null) return _res.ToInt() > 0 ? true : false;
                else return false;
            }
            catch (Exception)
            {

                return false;
            }
        }
        public static void Useverifycode(string code)
        {
            try
            {
                var dbProvider = DbConnectionProvider.CreateDbProvider(strFixed.strConnectstring_System);
                var command = dbProvider.CreateCommandStruct("verifycodeentities", CommandMode.Modify);
                command.AddParameter("IsDel", 1);
                
                command.Filter = dbProvider.CreateCommandFilter();
                command.Filter.Condition = string.Format("{0}", dbProvider.FormatFilterParam("VerifyCode"));
                command.Filter.AddParam("VerifyCode", code);
                command.Parser();
                dbProvider.ExecuteQuery(CommandType.Text, command.Sql, command.Parameters);
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "Useverifycode fail error!!! ");
            }
        }


        public static async Task<List<RankUserSD>> GetUserHandRankList(int type)
        {
            List<RankUserSD> gameUserInfo = new List<RankUserSD>();
            var dbProvider = DbConnectionProvider.CreateDbProvider(strFixed.strConnectstring);
            var command = dbProvider.CreateCommandStruct("tusergamehand", CommandMode.Inquiry);

            command.Columns = "Id,SUM(pos" + type + "Count) as TotalHand,UserId";
            command.Filter = ConnectManagerEx.DataProvider.CreateCommandFilter();
            command.Filter.Condition = string.Format("1=1 GROUP BY UserId HAVING TotalHand>0");

            command.OrderBy = "TotalHand desc LIMIT 0,40";
            command.Parser();
            using (var reader = ConfigManger.Provider.ExecuteReader(CommandType.Text, command.Sql, command.Parameters))
            {
                int num = 0;
                while (reader.Read())
                {
                    RankUserSD userInfo = new RankUserSD();
                    num++;
                    userInfo.Rank = num;
                    userInfo.UserName = await tb_UserEx.GetUserNameByUserID(reader["UserId"].ToInt());
                    userInfo.UserId = reader["UserId"].ToInt();
                    userInfo.TotalHand = reader["TotalHand"].ToInt();
                    userInfo.t = type;
                    gameUserInfo.Add(userInfo);
                }
            }
            List<tsysconfig> sysdatas = await RankHelper.GetSysConfig(type + "皮奖励");
            var data = sysdatas.Select(t => new KeyValuePair<int, int>(int.Parse(t.Key), int.Parse(t.Val))).ToList();
            var rdata = from a in gameUserInfo
                        join b in data on a.Rank equals b.Key
                        into c
                        from aa in c.DefaultIfEmpty()
                        select new RankUserSD
                        {
                            Prize = aa.Value,
                            Rank = a.Rank,
                            t = a.t,
                            TotalHand = a.TotalHand,
                            UserId = a.UserId,
                            UserName = a.UserName
                        };
            return rdata.ToList();
        }


        public static List<RankUserSD> GetGameUserRankList(int type, int userId)
        {
            List<RankUserSD> gameUserInfo = new List<RankUserSD>();
            var dbProvider = DbConnectionProvider.CreateDbProvider(strFixed.strConnectstring);
            var command = dbProvider.CreateCommandStruct("tGameUserRank", CommandMode.Inquiry);
            command.Columns = "Id,UserId,UserName,TotalHand,Rank,RankType,Prize,GameId";
            command.Filter = ConnectManagerEx.DataProvider.CreateCommandFilter();
            command.Filter.Condition = string.Format("{0} AND ({1} OR {2}) AND {3}", dbProvider.FormatFilterParam("RankType"), dbProvider.FormatFilterParam("UserId"),
                dbProvider.FormatFilterParam("Rank", "<="), dbProvider.FormatFilterParam("TotalHand", ">"));
            command.Filter.AddParam("RankType", type);
            command.Filter.AddParam("UserId", userId);
            command.Filter.AddParam("Rank", 40);
            command.Filter.AddParam("TotalHand", 0);
            command.OrderBy = "Rank ASC";
            command.Parser();
            using (var reader = ConfigManger.Provider.ExecuteReader(CommandType.Text, command.Sql, command.Parameters))
            {
                while (reader.Read())
                {
                    RankUserSD userInfo = new RankUserSD();

                    userInfo.UserName = reader["UserName"].ToString();
                    userInfo.UserId = reader["UserId"].ToInt();
                    userInfo.TotalHand = reader["TotalHand"].ToInt();
                    userInfo.Rank = reader["Rank"].ToInt();
                    userInfo.Prize = reader["Prize"].ToInt();
                    gameUserInfo.Add(userInfo);
                }
            }
            return gameUserInfo;
        }
        #endregion
    }
}
