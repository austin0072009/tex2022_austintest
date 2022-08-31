using ETModel.Script.Model;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Data;

/// <summary>
///  
/// </summary>
namespace ETModel.Script.CsScript.Action
{

    public class ttableHistoryLogEx
    {
        public static void Insert(ttablehistoryLog model)
        {
            try
            {
                BaseHelper.AddAsync(model);
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "20170809..........sql insert error!");
            }
        }

        public static ttablehistoryLog GetTableLogByKey(string key, int gameid)
        {
            var dbProvider = DbConnectionProvider.CreateDbProvider(strFixed.strConnectstring);
            var command = dbProvider.CreateCommandStruct("ttablehistoryLog", CommandMode.Inquiry);
            command.Columns = "Id,gameid,BigEndList,CreatTime,plist,GameDetails,RoomNum,bg,uids,clubid,allid";
            command.Filter = dbProvider.CreateCommandFilter();
            command.Filter.Condition = string.Format("{0} AND {1}", dbProvider.FormatFilterParam("RoomNum"), dbProvider.FormatFilterParam("gameid"));
            command.Filter.AddParam("RoomNum", key);
            command.Filter.AddParam("gameid", gameid);
            command.OrderBy = "Id asc LIMIT 0,1";
            command.Parser();

            using (var reader = ConnectManagerEx.DataProvider.ExecuteReader(CommandType.Text, command.Sql, command.Parameters))
            {
                while (reader.Read())
                {
                    ttablehistoryLog ordermode = new ttablehistoryLog
                    {
                        Id = reader["Id"].ToString(),
                        gameid = reader["gameid"].ToInt32(),
                        BigEndList = reader["BigEndList"].ToString(),
                        CreatTime = reader["CreatTime"].ToDateTime(),
                        plist = JsonConvert.DeserializeObject<CacheList<ETModel.Script.Model.PInfoSD>>(reader["plist"].ToString()),
                        GameDetails = reader["GameDetails"].ToString(),
                        RoomNum = reader["RoomNum"].ToInt32(),
                        bg = reader["bg"].ToInt32(),
                        uids = reader["uids"].ToString(),
                        clubid = reader["clubid"].ToInt32(),
                        allid = reader["allid"].ToInt32()
                    };
                    reader.Dispose();
                    return ordermode;
                }
            }
            return null;
        } 
    }

    public class ttableRecordMJLogEx
    {
        public static void Insert(ttableLogMJ model)
        {
            try
            {
                BaseHelper.AddAsync(model);
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "20200724..........sql insert error!");
            }
        }
        /// <summary>
        ///   
        /// </summary>
        /// <param name="gameid"></param>
        /// <param name="userid"></param>
        /// <param name="top"></param>
        /// <returns></returns>
        public static ttableLogMJ GetTableLog(string idx)
        {
            try
            {
                DbBaseProvider dbprovider = DbConnectionProvider.CreateDbProvider("ConnData");
                var command = dbprovider.CreateCommandStruct("ttableRecorkMJLog", CommandMode.Inquiry);
                command.Columns = "*";
                command.Filter = ConnectManagerEx.DataProvider.CreateCommandFilter();
                command.Filter.Condition = string.Format("{0}", dbprovider.FormatFilterParam("Idx"));
                command.Filter.AddParam("Idx", idx);

                command.Parser();
                using (var reader = dbprovider.ExecuteReader(CommandType.Text, command.Sql, command.Parameters))
                {
                    if (reader.Read())
                    {
                        return new ttableLogMJ()
                        {
                            Idx = reader["Idx"].ToString(),
                            MatchCode = reader["MatchCode"].ToString(),
                            CreateTime = reader["CreateTime"].ToDateTime(),
                            TableInfo = reader["TableInfo"].ToString(),
                            _actions = JsonConvert.DeserializeObject<List<string>>(reader["actions"].ToString())
                        };
                    }
                    else return null;
                }
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "20200724..........sql insert error!");
                return null;
            }

        }
        /// <summary>
        /// 得到top    录像数据
        /// </summary>
        /// <param name="gameid"></param>
        /// <param name="userid"></param>
        /// <param name="top"></param>
        /// <returns></returns>
        public static List<ttableLogMJ> GetRecorkLogTop(int gameid, int userid, int top)
        {
            List<ttableLogMJ> gameUserInfo = new List<ttableLogMJ>();
            var dbProvider = DbConnectionProvider.CreateDbProvider(strFixed.strConnectstring);
            var command = dbProvider.CreateCommandStruct("ttableRecorkMJLog", CommandMode.Inquiry);

            command.Columns = "*";
            command.Filter = ConnectManagerEx.DataProvider.CreateCommandFilter();
            command.Filter.Condition = string.Format("gameid={0} AND FIND_IN_SET({1}, uids)",
                gameid, userid);

            command.OrderBy = "CreateTime desc LIMIT 0," + top;
            command.Parser();
            using (var reader = ConfigManger.Provider.ExecuteReader(CommandType.Text, command.Sql, command.Parameters))
            {
                while (reader.Read())
                {
                    ttableLogMJ userInfo = new ttableLogMJ();
                    userInfo.Idx = reader["Idx"].ToString();
                    userInfo.gameid = reader["gameid"].ToInt32();
                    userInfo.actions = reader["actions"].ToString();
                    userInfo.CreateTime = reader["CreateTime"].ToDateTime();
                    userInfo.MatchCode = reader["MatchCode"].ToString();
                    userInfo.TableInfo = reader["TableInfo"].ToString();
                    userInfo.uids = reader["uids"].ToString();
                    userInfo.RecordUser = reader["RecordUser"].ToString();
                    gameUserInfo.Add(userInfo);
                }
            }
            return gameUserInfo;
        }
        /// <summary>
        /// 根据桌子得到录像
        /// </summary>
        /// <param name="tnum"></param>
        /// <returns></returns>
        public static List<ttableLogMJ> GetRecorkLogByTnum(int gameid, string tnum)
        {
            List<ttableLogMJ> gameUserInfo = new List<ttableLogMJ>();
            var dbProvider = DbConnectionProvider.CreateDbProvider(strFixed.strConnectstring);
            var command = dbProvider.CreateCommandStruct("ttableRecorkMJLog", CommandMode.Inquiry);

            command.Columns = "*";
            command.Filter = ConnectManagerEx.DataProvider.CreateCommandFilter();
            command.Filter.Condition = string.Format("gameid={0} AND MatchCode={1}",
                gameid, tnum);

            command.OrderBy = "CreateTime desc LIMIT 0,20";
            command.Parser();
            using (var reader = ConfigManger.Provider.ExecuteReader(CommandType.Text, command.Sql, command.Parameters))
            {
                while (reader.Read())
                {
                    ttableLogMJ userInfo = new ttableLogMJ();
                    userInfo.Idx = reader["Idx"].ToString();
                    userInfo.gameid = reader["gameid"].ToInt32();
                    userInfo.actions = reader["actions"].ToString();
                    userInfo.CreateTime = reader["CreateTime"].ToDateTime();
                    userInfo.MatchCode = reader["MatchCode"].ToString();
                    userInfo.TableInfo = reader["TableInfo"].ToString();
                    userInfo.uids = reader["uids"].ToString();
                    userInfo.RecordUser = reader["RecordUser"].ToString();
                    gameUserInfo.Add(userInfo);
                }
            }
            return gameUserInfo;
        }

    }
}

