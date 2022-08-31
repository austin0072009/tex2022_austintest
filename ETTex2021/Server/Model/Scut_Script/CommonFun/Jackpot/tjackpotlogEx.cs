using ETModel.Script.Model;
using System.Collections.Generic;
using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Data;

/// <summary>
/// Scut 缓存获取不支持，?类型
/// </summary>
namespace ETModel.Script.CsScript.Action
{

    public class tjackpotlogEx
    {
        /// <summary>
        /// 获取最近 topCount 行奖池记录
        /// </summary> 
        public static List<PotUserLog> GetJackpotLog(int gameid,int topCount = 10)
        {
            var list = new List<PotUserLog>();
            var dbProvider = DbConnectionProvider.CreateDbProvider(strFixed.strConnectstring);

            var command = dbProvider.CreateCommandStruct("tjackpotLog", CommandMode.Inquiry);
            command.Columns = "UserId,Gold,JackpotType,CreateTime,GameId";
            command.Filter = dbProvider.CreateCommandFilter();
            command.Filter.Condition = string.Format("JackpotType in(1,2,3) AND {0} AND {1}",
                dbProvider.FormatFilterParam("ChangeType"), dbProvider.FormatFilterParam("GameId"));
           
            command.Filter.AddParam("ChangeType", 1);//表示中奖
            command.Filter.AddParam("GameId", gameid);
            command.OrderBy = "CreateTime desc";
            command.Top = topCount;
            command.Parser();
            using (var dr = dbProvider.ExecuteReader(System.Data.CommandType.Text, command.Sql, command.Parameters))
            {
                var tbuserCache = new PersonalCacheStruct<tUser>();
                while (dr.Read())
                {
                    tUser _tempuser = tbuserCache.FindKey(dr["UserId"].ToString());
                    if (_tempuser != null)
                    {
                        list.Add(new PotUserLog
                        {
                            _n = _tempuser.wechatName.Trim(),
                            _gold = dr["Gold"].ToInt32(),
                            _jt = dr["JackpotType"].ToInt32(),
                            _time = dr["CreateTime"].ToDateTime().ToString("MM-dd HH:mm:ss")
                        });
                    }
                }
            }
            return list;
        }

        /// <summary>
        /// 最近的 topCount 行天皇记录
        /// </summary>  
        public static List<PotUserLog> GetBigJackpotLog(int gameid,int topCount=1)
        {
            var list = new List<PotUserLog>();
            var dbProvider = DbConnectionProvider.CreateDbProvider(strFixed.strConnectstring);

            var command = dbProvider.CreateCommandStruct("tjackpotLog", CommandMode.Inquiry);
            command.Columns = "UserId,Gold,JackpotType,CreateTime,GameId";
            command.Filter = dbProvider.CreateCommandFilter();
            command.Filter.Condition = string.Format("{0} AND {1} AND {2}", dbProvider.FormatFilterParam("JackpotType"), 
                dbProvider.FormatFilterParam("ChangeType"), 
                dbProvider.FormatFilterParam("GameId"));

            command.Filter.AddParam("JackpotType", 1);
            command.Filter.AddParam("ChangeType", 1);//表示中奖
            command.Filter.AddParam("GameId", gameid);
            command.OrderBy = "CreateTime desc";  
            command.Top = topCount;
            command.Parser();
            using (var dr = dbProvider.ExecuteReader(System.Data.CommandType.Text, command.Sql, command.Parameters))
            {
                var tbuserCache = new PersonalCacheStruct<tUser>();
                while (dr.Read())
                {
                    tUser _tempuser = tbuserCache.FindKey(dr["UserId"].ToString());
                    if (_tempuser != null)
                    {
                        list.Add(new PotUserLog
                        {
                            _n = _tempuser.wechatName.Trim(),
                            _gold = dr["Gold"].ToInt32(),
                            _jt = dr["JackpotType"].ToInt32(),
                            _time = dr["CreateTime"].ToDateTime().ToString("MM-dd HH:mm:ss")
                        });
                    }
                }
            }
            return list;
        }
    }

 
   
}

