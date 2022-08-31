using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Common.Serialization;
using ETModel.Framework.Data;
using ETModel.Framework.Game.Sns;
using ETModel.Framework.Model;
using ETModel.Framework.Net;
using ETModel.Script.Model;
using MySql.Data.MySqlClient;
using Serialize.Linq.Serializers;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using System.Threading.Tasks;
//https://www.itranslater.com/qa/details/2105198602925638656
namespace ETModel.Script.CsScript.Action
{
    public class BaseBrigeHelper
    {

        public static T GetBaseT<T>(string key) where T : BaseEntity, new()
        {
            return new PersonalCacheStruct<T>().FindKey(key.ToString());
        }
        public static T GetBaseByKey<T>(int key1, int key2) where T : BaseEntity, new()
        {
            return new PersonalCacheStruct<T>().FindKey(key1.ToString(), key2);
        }
        public static T GetShareT<T>(object keys) where T : ShareEntity, new()
        {
            return new ShareCacheStruct<T>().FindKey(keys);
        }
        /// <summary>
        /// BaseEntity   Find
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="personalId"></param>
        /// <param name="match"></param>
        /// <returns></returns>
        public static T FindForBe<T>(string personalId, Predicate<T> match) where T : BaseEntity, new()
        {
            return new PersonalCacheStruct<T>().Find(personalId.ToString(), match);
        }
        public static T GetBase<T>(Predicate<T> match) where T : BaseEntity, new()
        {
            return new PersonalCacheStruct<T>().FindGlobal(match).FirstOrDefault();
        }
        public static T GetShare<T>(Predicate<T> match) where T : ShareEntity, new()
        {
            return new ShareCacheStruct<T>().FindAll(match).FirstOrDefault();
        }
        public static bool IsExistNickName(string strName)
        {
            return new PersonalCacheStruct<tUser>().IsExist(t => t.wechatName == strName);
        }
        internal static long UpdateRetailGoldLog(int retailID, string retailUser, int type, int score, string desc)
        {
            long logid = -1;
            try
            {
                DbBaseProvider dbprovider = DbConnectionProvider.CreateDbProvider(strFixed.strConnectstring_Sns);
                var command = dbprovider.CreateCommandStruct("retailchangeinfo", CommandMode.Insert);
                command.ReturnIdentity = true;
                command.AddParameter("RetailID", retailID);
                command.AddParameter("RetailUser", retailUser);
                command.AddParameter("Type", type);
                command.AddParameter("Score", score);
                command.AddParameter("CreateTime", DateTime.Now);
                command.AddParameter("Desc", desc);
                command.Parser();
                using (var reader = dbprovider.ExecuteReader(CommandType.Text, command.Sql, command.Parameters))
                {
                    if (reader.Read())
                    {
                        logid = Convert.ToInt64(reader[0]);
                        reader.Dispose();
                    }
                }
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "20170809..........sql insert error!");
            }
            return logid;
        }
        /// <summary>
        /// 商户玩家转额日志表
        /// </summary>
        /// <param name="retailID">商户ID</param>
        /// <param name="UserID">玩家ID</param>
        /// <param name="TransID">订单号</param>
        /// <param name="status">状态 0:交易中，1:交易成功，2:交易失败</param>
        /// <param name="score">转换金额</param>
        /// <param name="desc">描述</param>
        /// <returns></returns>
        internal static long UpdateRetailUserTransGoldLog(int retailID, int UserID,string TransID, int status, long score,long beforeScore,long afterScore, string desc,int type)
        {
            long logid = -1;
            try
            {
                DbBaseProvider dbprovider = DbConnectionProvider.CreateDbProvider(strFixed.strConnectstring_Sns);
                var command = dbprovider.CreateCommandStruct("retailusertranslog", CommandMode.Insert);
                command.ReturnIdentity = true;
                command.AddParameter("RetailID", retailID);
                command.AddParameter("UserID", UserID);
                command.AddParameter("Status", status);
                command.AddParameter("Score", score);
                command.AddParameter("BeforeGold", beforeScore);
                command.AddParameter("AfterGold", afterScore);
                command.AddParameter("Type", type);
                command.AddParameter("RetailTransID", TransID);
                command.AddParameter("TransID", IdGenerater.GenerateId().ToString());
                command.AddParameter("CreateTime", DateTime.Now);
                command.AddParameter("UpdateTime", DateTime.Now);
                command.AddParameter("Desc", desc);
                command.Parser();
                using (var reader = dbprovider.ExecuteReader(CommandType.Text, command.Sql, command.Parameters))
                {
                    if (reader.Read())
                    {
                        logid = Convert.ToInt64(reader[0]);
                        reader.Dispose();
                    }
                }
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "20170809..........sql insert error!");
            }
            return logid;
        }
        /// <summary>
        /// 更新完成状态
        /// </summary>
        /// <param name="logid">日志ID</param>
        /// <param name="status">状态 0:交易中，1:交易成功，2:交易失败</param>
        /// <returns></returns>
        internal static long UpdateRetailUserTransGoldLogStatus(long logid, int status)
        {
            try
            {
                DbBaseProvider dbprovider = DbConnectionProvider.CreateDbProvider(strFixed.strConnectstring_Sns);
                var command = dbprovider.CreateCommandStruct("retailusertranslog", CommandMode.Modify);
                command.AddParameter("Status", status);
                command.AddParameter("UpdateTime", DateTime.Now);
                command.Filter = SQLConnectManager.Provider.CreateCommandFilter();
                command.Filter.Condition = command.Filter.FormatExpression("id");
                command.Filter.AddParam("id", logid);
                command.Parser();
                using (var reader = dbprovider.ExecuteReader(CommandType.Text, command.Sql, command.Parameters))
                {
                    if (reader.Read())
                    {
                        logid = Convert.ToInt64(reader[0]);
                        reader.Dispose();
                    }
                }
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "20170809..........sql insert error!");
            }
            return logid;
        }

        public static List<T> GetShareAllFun<T>() where T : ShareEntity, new()
        {
            return new ShareCacheStruct<T>().FindAll();
        }

        public static List<T> GetShareAll<T>(string expjson) where T : ShareEntity, new()
        {
            // Serialize expression
            var serializer = new ExpressionSerializer(new JsonSerializer());
            serializer.AddKnownType(typeof(T));
            // Deserialize expression
            Expression actualExpression = serializer.DeserializeText(expjson);
            var exp2 = (Expression<Func<T, bool>>)actualExpression;

            Predicate<T> match2 = new Predicate<T>(exp2.Compile());
            return new ShareCacheStruct<T>().FindAll(match2);
        }
        public static List<T> GetShareAllMatch<T>(Predicate<T> match) where T : ShareEntity, new()
        {
            return new ShareCacheStruct<T>().FindAll(match);
        }
        public static List<T> GetBaseAll<T>(string expjson) where T : BaseEntity, new()
        {
            var serializer = new ExpressionSerializer(new JsonSerializer());
            serializer.AddKnownType(typeof(T));
            Expression actualExpression = serializer.DeserializeText(expjson);
            var exp2 = (Expression<Func<T, bool>>)actualExpression;

            Predicate<T> match2 = new Predicate<T>(exp2.Compile());
            return new PersonalCacheStruct<T>().FindGlobal(match2);
        }
        public static List<T> GetBaseAllMatch<T>(Predicate<T> match) where T : BaseEntity, new()
        {
            return new PersonalCacheStruct<T>().FindGlobal(match);
        }
        public static void ReLoad<T>() where T : ShareEntity, new()
        {
            var cache = new ShareCacheStruct<T>();
            cache.ReLoad();

            if (cache.Count == 0)
            {
                SchemaTable schema = EntitySchemaSet.Get<T>();
                DbBaseProvider provider = DbConnectionProvider.CreateDbProvider(schema);
                DbDataFilter filter = new DbDataFilter(0);
                cache.TryRecoverFromDb(filter);//从数据库中恢复数据 
            }
        }
        public static void ReLoadBase<T>() where T : BaseEntity, new()
        {
            var cache = new PersonalCacheStruct<T>();
            cache.ReLoad();

            if (cache.Count == 0)
            {
                SchemaTable schema = EntitySchemaSet.Get<T>();
                DbBaseProvider provider = DbConnectionProvider.CreateDbProvider(schema);
                DbDataFilter filter = new DbDataFilter(0);
                cache.TryRecoverFromDb(filter);//从数据库中恢复数据 
            }
        }
        public static T GetDataByKey<T>(string key) where T : BaseEntity, new()
        {
            return GetBaseDB<T>(long.Parse(key));
        }


        /// <summary>
        /// AddOrUpdate  BaseEntity
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="t"></param>
        /// <param name="period"></param>
        /// <returns></returns>
        public static bool AddOrUpdateBase<T>(T t) where T : BaseEntity, new()
        {
            return new PersonalCacheStruct<T>().AddOrUpdate(t, 0);
        }
        public static bool AddOrUpdate<T>(T result) where T : ShareEntity, new()
        {
            var cache = new ShareCacheStruct<T>();

            return cache.AddOrUpdate(result);
        }

        public static bool Delete<T>(T result) where T : ShareEntity, new()
        {
            var cache = new ShareCacheStruct<T>();

            return cache.Delete(result);
        }


        /// <summary>
        /// Delete   PersonalCacheStruct
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="t"></param>
        /// <returns></returns>
        public static bool DeleteForBase<T>(T t) where T : BaseEntity, new()
        {
            return new PersonalCacheStruct<T>().Delete(t);
            //if (new PersonalCacheStruct<T>().Delete(t))
            //{
            //    DeleteBaseDB(t);
            //    return true;
            //}
            //return false;
        }

        /// <summary>
        /// 异步写数据库
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="model"></param>
        public static void AddAsync<T>(T model) where T : AbstractEntity
        {
            WriteDBHelper.AddAsync<T>(model);
        }
        public static long SendOneToDbReturnIdentity<T>(T data) where T : AbstractEntity
        {
            return WriteDBHelper.SendOneToDbReturnIdentity<T>(data);
        }

        #region userstatus
        public static UserStatus GetUserStatusbyUserID(int UserID)
        {
            return UserStatusManager.instanceBase.GetUserStatusbyUserID(UserID);
        }
        public static List<UserStatus> GetAllUserStatus()
        {
            return UserStatusManager.instanceBase.GetAllUserStatus();
        }
        /// <summary>
        /// 接口需要明确的地方调用
        /// </summary>
        /// <param name="UserID"></param>
        /// <returns></returns>
        public static UserStatus TryGetUserStatus(int UserID)
        {
            return UserStatusManager.instanceBase.TryGetUserStatus(UserID);
        }
        public static bool UpdateUserStatusByUserID(int UserID, UserStatusEnum _status)
        {
            return UserStatusManager.instanceBase.UpdateUserStatusByUserID(UserID, _status);
        }
        /// <summary>
        /// 用户登录后，进入FJ 调用这个方法 状态为2
        /// 系统自己分配后，开始一桌打牌， 状态为3
        /// 掉线后，设置状态为4
        /// </summary>
        /// <param name="us"></param>
        public static void AddorUpdateUserStatus(UserStatus us)
        {
            UserStatusManager.instanceBase.AddorUpdateUserStatus(us);
        }


        #endregion

        #region dboperate

        /// <summary>
        /// 获取机器人ID
        /// </summary>
        /// <returns></returns>
        public static List<int> GetUserIdList(int value)
        {
            List<int> list = new List<int>();
            var command = ConfigManger.Provider.CreateCommandStruct("tUser", CommandMode.Inquiry);
            command.Columns = "UserId";
            command.Filter = ConfigManger.Provider.CreateCommandFilter();
            command.Filter.Condition = string.Format("{0}",
                command.Filter.FormatExpression("isRobot")
                );
            command.Filter.AddParam("isRobot", value);
            command.Parser();

            using (var reader = ConfigManger.Provider.ExecuteReader(CommandType.Text, command.Sql, command.Parameters))
            {
                while (reader.Read())
                {
                    list.Add(Convert.ToInt32(reader["UserId"]));
                }
                reader.Dispose();
            }
            return list.OrderBy(w => w).ToList();
        }
        /// <summary>
        /// 直接调用 只能在RedisDB中调用
        /// </summary>
        /// <returns></returns>
        public static List<tUser> GetRobotUser()
        {
            List<tUser> _userList = new List<tUser>();

            var robotIdList = GetUserIdList(1);
            if (robotIdList.Any())
            {
                robotIdList.ForEach(userid =>
                {
                    tUser user = BaseBrigeHelper.GetBaseT<tUser>(userid.ToString());
                    if (user == null) user = BaseBrigeHelper.GetBaseDB<tUser>(userid);
                    if (user != null) _userList.Add(user);
                });
            }
            if (_userList == null || _userList.Count == 0)
            {
                TraceLogEx.Error(" tb_user 中没有机器人，201610231608");
            }
            return _userList;
        }
        #endregion

        /// <summary>
        /// 记录用户登录
        /// </summary> 
        public static void AddUserLoginLog(int userId, string IP, string machineCode, int machineType, float lat, float lng)
        {
            if (userId <= 0)
            {
                return;
            }
            Task.Run(() => { SnsCenterUser.AddUserLoginLog(userId, IP, machineCode, machineType, lat, lng); });
        }
        #region activecode 
        /// <summary>
        /// 找到使用此激活码的人
        /// </summary>
        /// <param name="useUserId"></param>
        /// <returns></returns>
        public static int GetAcodeUseUserId(string code)
        {
            return ActiveCodeHelper.GetUseUserId(code);
        }
        /// <summary> 获取用户编号 </summary>
        public static int GetUserIDFromCode(int code)
        {
            return ActiveCodeHelper.GetUserID(code);
        }
        /// <summary>
        /// 生成自已的激活码
        /// </summary>
        /// <param name="UserID"></param> 
        /// <returns></returns>
        public static string GenerateCode(int UserID)
        {
            var code = ActiveCodeHelper.GetNoUseActiveCode();
            if (code == null)
            {
                TraceLogEx.Error("GenerateCode  code is null" + UserID);
                return "";
            }
            else
            {
                ActiveCodeHelper.UpdateActiveCode(code.Id, UserID);
                return code.Activecode.ToString();
            }
            //await ActiveCodeHelper.GenerateCode(UserID);
        }
        /// <summary>
        /// 找到按ID升序的 第一个未使用的码
        /// </summary>
        /// <returns></returns>
        public static tActiveCode GetNoUseActiveCode(string para)
        {
            return ActiveCodeHelper.GetNoUseActiveCode();
        }

        public static bool UpdateActiveCode(int id, int userid)
        {
            return ActiveCodeHelper.UpdateActiveCode(id, userid);
        }
        #endregion
        #region  common robot

        public static void RobotExistNumAddOne(string para)
        {
            CommonRobotManager.instance.RobotExistNumAddOne();
        }

        public static void RobotExistNumReduceOne(string para)
        {
            CommonRobotManager.instance.RobotExistNumReduceOne();
        }

        /// <summary>
        /// 处理一下机器人 1.顺序不打乱。2.机器人分组
        /// </summary>
        /// <returns></returns>
        public static tUser GetARobot(string uid2 = "0")
        {
            int gid = Convert.ToInt32(uid2);
            return CommonRobotManager.instance.GetARobot(gid);
        }

        /// <summary>
        /// 机器人统一回收接口
        /// </summary>
        public static void RobotCallback(tUser _user)
        {
            CommonRobotManager.instance.RobotCallback(_user);
        }


        public static void ReverseData(string para)
        {
            CommonRobotManager.instance.ReverseData();
        }

        public static void UpdateRobotForce(string para)
        {
            CommonRobotManager.instance.UpdateRobotForce();
        }
        public static int QueRobotUserCount(string para)
        {
            return CommonRobotManager.instance.QueRobotUserCount;
        }
        #endregion

        public static long InsertTableLog(ttableLog model)
        {
            try
            {
                DbBaseProvider dbprovider = DbConnectionProvider.CreateDbProvider("ConnData");
                var command = dbprovider.CreateCommandStruct("ttableLog", CommandMode.Insert);
                command.ReturnIdentity = true;
                command.AddParameter("MatchCode", model.MatchCode);
                command.AddParameter("StartTime", model.StartTime);
                command.AddParameter("EndTime", model.EndTime);
                command.AddParameter("gameid", model.gameid); 
                command.Parser();

                using (var reader = dbprovider.ExecuteReader(CommandType.Text, command.Sql, command.Parameters))
                {
                    if (reader.Read())
                    {
                        model.Idx = Convert.ToInt64(reader[0]);
                        reader.Dispose();

                        return model.Idx;
                    }
                    else return 0;
                }
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "20170809..........sql insert error!");
                return 0;
            }
        }
        public static long InsertShare<T>(T agent) where T : ShareEntity, new()
        {
            try
            {
                if (EntitySchemaSet.TryGet<T>(out SchemaTable schema))
                {
                    Type type = typeof(T);
                    DbBaseProvider dbprovider = DbConnectionProvider.CreateDbProvider("ConnData");
                    var command = dbprovider.CreateCommandStruct(type.Name, CommandMode.Insert);
                    command.ReturnIdentity = true;
                    var ps = type.GetProperties(BindingFlags.DeclaredOnly | BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Static | BindingFlags.Instance);
                    string keyname = schema.Keys[0];
                    PropertyInfo keyinfo = null;
                    object value = null;
                    foreach (var info in ps)
                    {
                        if (info.Name.Equals(keyname)) keyinfo = info;
                        else if ((value = info.GetValue(agent)) != null)
                        {
                            bool isformat = value.GetType() == typeof(string) || typeof(IFormattable).IsAssignableFrom(value.GetType());
                            command.AddParameter(info.Name, isformat ? value : JsonUtils.Serialize(value));
                        }
                    }
                    command.Parser();
                    using (var reader = dbprovider.ExecuteReader(CommandType.Text, command.Sql, command.Parameters))
                    {
                        if (reader.Read())
                        {
                            int id = Convert.ToInt32(reader[0]);
                            keyinfo.SetValue(agent, id);
                            reader.Dispose();
                            new ShareCacheStruct<T>().AddOrUpdate(agent);
                            return id;
                        }
                        else return 0;
                    }
                }
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "20170809..........sql insert error!");
                return 0;
            }
            return 0;
        }
        public static long InsertBase<T>(T agent) where T : BaseEntity, new()
        {

            if (EntitySchemaSet.TryGet<T>(out SchemaTable schema))
            {
                Type type = typeof(T);
                DbBaseProvider dbprovider = DbConnectionProvider.CreateDbProvider("ConnData");
                if (dbprovider != null)
                {
                    var command = dbprovider.CreateCommandStruct(type.Name, CommandMode.Insert);
                    if (command != null)
                    {
                        try
                        {
                            command.ReturnIdentity = true;
                            var ps = type.GetProperties(BindingFlags.DeclaredOnly | BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Static | BindingFlags.Instance);
                            PropertyInfo keyinfo = null;
                            string keyname = schema.Keys[0];
                            object value = null;
                            foreach (var info in ps)
                            {
                                if (info.Name.Equals(keyname)) keyinfo = info;
                                else if ((value = info.GetValue(agent)) != null)
                                {
                                    bool isformat = value.GetType() == typeof(string) || value.GetType() == typeof(bool) || typeof(IFormattable).IsAssignableFrom(value.GetType());
                                    command.AddParameter(info.Name, isformat ? value : JsonUtils.Serialize(value));
                                }
                            }

                            command.Parser();
                            using (var reader = dbprovider.ExecuteReader(CommandType.Text, command.Sql, command.Parameters))
                            {
                                if (reader.Read())
                                {

                                    int id = Convert.ToInt32(reader[0]);
                                    keyinfo.SetValue(agent, id);
                                    reader.Dispose();
                                    new PersonalCacheStruct<T>().AddOrUpdate(agent);
                                    return id;
                                }
                                else return 0;
                            }
                        }
                        catch (Exception ex)
                        {
                            TraceLogEx.Error(ex, "20170809..........sql insert error! " +command.Sql);
                            return 0;
                        }
                    }
                }
            }

            return 0;
        }
        public static bool DeleteBaseDB<T>(T data) where T : BaseEntity
        {
            if (EntitySchemaSet.TryGet<T>(out SchemaTable schema) && schema.Keys.Length == 1)
            {
                Type type = typeof(T);
                DbBaseProvider dbprovider = DbConnectionProvider.CreateDbProvider("ConnData");
                var command = dbprovider.CreateCommandStruct(type.Name, CommandMode.Delete);
                command.ReturnIdentity = true;
                command.Filter = dbprovider.CreateCommandFilter();
                command.Filter.Condition = string.Format("{0}", dbprovider.FormatFilterParam(schema.Keys[0], "="));
                command.Filter.AddParam(schema.Keys[0], data.GetMessageQueueId());

                //command.Filter.Condition = schema.Keys[0] + "=" + data.GetMessageQueueId();
                command.Parser();
                //return dbprovider.ExecuteNonQuery(data.GetMessageQueueId(), CommandType.Text, command.TableName, command.Sql, command.Parameters) > 0;
                using (var reader = dbprovider.ExecuteReader(CommandType.Text, command.Sql, command.Parameters))
                {
                    if (reader.Read())
                    {
                        Console.WriteLine("删除数据库数据结果" + Convert.ToInt32(reader[0]));
                    }
                }
            }
            return false;
        }
         
     
        /// <summary>
        /// <summary>
        /// 获取游戏中聊天记录
        /// </summary>
        /// <param name="tableid"></param>
        /// <param name="roomid"></param>
        /// <param name="gameid"></param>
        /// <returns></returns>
        public static List<Barrage> GetTableBarrage(int tableid, int roomid, int gameid)
        {
            List<tbarrageinfo> list = new List<tbarrageinfo>();
            var dbProvider = DbConnectionProvider.CreateDbProvider(strFixed.strConnectstring);
            var command = dbProvider.CreateCommandStruct("tchatlog", CommandMode.Inquiry);
            command.Columns = "Id,UserId,BarrageContent,BarrageType,CreateTime,RoomId,tableId";
            command.Filter = dbProvider.CreateCommandFilter();
            command.Filter.Condition = string.Format("{0} AND {1} AND {2}", dbProvider.FormatFilterParam("RoomId", "="),
                dbProvider.FormatFilterParam("tableId", "="), dbProvider.FormatFilterParam("GameId", "="));
            command.Filter.AddParam("RoomId", roomid);
            command.Filter.AddParam("tableId", tableid);
            command.Filter.AddParam("GameId", gameid);
            command.OrderBy = "CreateTime desc";
            command.Parser();
            using (var dr = dbProvider.ExecuteReader(CommandType.Text, command.Sql, command.Parameters))
            {
                while (dr.Read())
                {
                    list.Add(new tbarrageinfo()
                    {
                        UserId = Convert.ToInt32(dr["UserId"]),
                        BarrageContent = dr["BarrageContent"].ToString(),
                        tableId = Convert.ToInt32(dr["tableId"]),
                        RoomId = Convert.ToInt32(dr["RoomId"]),
                        BarrageType = dr["BarrageType"].ToString(),
                        CreateTime = dr["CreateTime"].ToDateTime()

                    });
                }

            }
            List<Barrage> blist = new List<Barrage>();
            foreach (var t in list)
            {
                tUser tempUser = BaseBrigeHelper.GetBaseT<tUser>(t.UserId.ToString());
                blist.Add(new Barrage()
                {
                    username = tempUser.wechatName, // tb_UserEx.GetUserNameByUserID(t.UserId),
                    content = t.BarrageContent,
                    ptime = t.CreateTime.ToString("MM-dd HH:mm"),
                    type = t.BarrageType.ToInt32(),
                });
            }
            return blist;
        }

        public static T UpdateTIncre<T>(string fname, long addval, long key, bool cantzero,string connectKey = strFixed.strConnectstring) where T : BaseEntity, new()
        {
            try
            {
                if (EntitySchemaSet.TryGet<T>(out SchemaTable schema))
                {
                    var personal = new PersonalCacheStruct<T>();
                    var keys = schema.Keys;
                    if (!schema.Columns.ContainsKey(fname) || !schema.Columns[fname].ColumnType.IsValueType || !schema.Columns[fname].ColumnType.IsPrimitive)
                    {
                        return null;
                    }
                    if (keys != null && keys.Length == 1)
                    {
                        //DbDataFilter filter = new DbDataFilter(1);
                        //filter.Parameters.Add(fname, fname + "+" + addval);
                        //filter.Condition = keys[0] + "=" + pval;
                        ////filter.Parameters.Add("returning", "*");
                        //return personal.TryGetFromDB(schema, filter);
                        var dbProvider = DbConnectionProvider.CreateDbProvider(connectKey);

                        var command = dbProvider.CreateCommandStruct(typeof(T).Name, CommandMode.Modify, "*");
                        command.AddExpress(fname + "=" + fname + "+" + addval);
                        command.Filter = dbProvider.CreateCommandFilter();
                        command.Filter.Condition = keys[0] + "=" + key + (cantzero ? $" and {fname}+{addval} >= 0" : "");
                        //command.Filter.Parameters[0].Value = (long)command.Filter.Parameters[0].Value + addval;
                        command.Parser();
                        //return personal.TryGetFromDB(schema,command.Filter);
                        //$"update {tname} set {fname}={fname}+{addval} where {keys[0]}={pval}"
                        //if (ConnectManagerEx.DataProvider.ExecuteQuery(CommandType.Text, command.Sql, command.Parameters) > 0)
                        //{
                        //    return personal.TryGetFromDB(key);
                        //}
                        if (dbProvider.ExecuteQuery(CommandType.Text, command.Sql, command.Parameters) > 0)
                        {
                            return personal.TryGetFromDB(key);
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "UpdateTIncre fail error!!! ");
            }
            return null;
        }

        public static bool UpdateTIncreNotEntity(string tname, string fname, long addval, string keyname, long key, bool cantzero = true)
        {
            try
            {
                var dbProvider = DbConnectionProvider.CreateDbProvider(strFixed.strConnectstring);
                var command = dbProvider.CreateCommandStruct(tname, CommandMode.Modify, "*");
                command.AddExpress(fname + "=" + fname + "+" + addval);
                command.Filter.Condition = keyname + "=" + key + (cantzero ? $" and {fname}+{addval} >= 0" : "");
                command.Parser();
                return dbProvider.ExecuteQuery(CommandType.Text, command.Sql, command.Parameters) == 1;
                //using (var reader = dbProvider.ExecuteScalar(CommandType.Text, command.Sql, command.Parameters))
                //{
                //    //if (reader.Read())
                //    //{
                //    //    var ps = model.GetType().GetProperties();
                //    //    for (int i = 0; i < reader.FieldCount; i++)
                //    //    {
                //    //        //foreach (var item in ps) {
                //    //        //    reader[i].
                //    //        //}
                //    //    }
                //    //    reader.Dispose();
                //    //}
                //    return true;
                //}
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "增量更新发生异常");
            }
            return false;
            //command.Filter.Parameters[0].Value = (long)command.Filter.Parameters[0].Value + addval;
            //filter.Condition = keys[0] + "=" + pval;
            ////filter.Parameters.Add("returning", "*");
            //return personal.TryGetFromDB(schema, filter);

        }

        public static T GetBaseDB<T>(long key) where T : BaseEntity, new()
        {
            return new PersonalCacheStruct<T>().TryGetFromDB(key);
        }

        public static T GetShareDB<T>(long key) where T : ShareEntity, new()
        {
            return new ShareCacheStruct<T>().TryGetFromDB(key);
        }

        /// <summary>
        /// 获取两种申请类型
        /// </summary>
        /// <param name="ctype">类型1</param>
        /// <param name="atype">类型2</param>
        /// <param name="cid"></param>
        /// <returns></returns>
        public static List<tclubapplylog> GetApplyListlog3(int ctype, int atype, long cid)
        {
            return tCommonlogEx.GetApplyListlog(ctype, atype, cid);
        }
        public static List<tclubapplylog> GetApplyListlog(int type, long cid)
        {
            return tCommonlogEx.GetApplyListlog(type, cid);
        }
    
        public static tclubapplylog Getclubapplylog(int type, long cid, int userid)
        {
            return tCommonlogEx.Getclubapplylog(type, cid, userid);
        }

        public static tclubapplylog GetAlliapplylog(int type, long cid, int ownid)
        {
            return tCommonlogEx.GetAlliapplylog(type, cid, ownid);
        }
        public static bool UpdateApplylogStatus(long logid, int status)
        {
            return tCommonlogEx.UpdateApplylogStatus(logid, status);
        }
        public static List<tclubusergoldlog> Getclubgoldlog2(int clubid, int userid)
        {
            return tCommonlogEx.Getclubgoldlog(clubid, userid);
        }
        public static List<tclubgoldlog> Getclubgoldlog(int clubid)
        {
            return tCommonlogEx.Getclubgoldlog(clubid);
        }
        public static List<tclubfundlog> GetFondLog(int clubid)
        {
            return tCommonlogEx.GetFondLog(clubid);
        }

        public static SnsUser SetUserInfo(string strCondition, string strParameter)
        {
            Dictionary<string, object> dicParamerter = JsonUtils.Deserialize<Dictionary<string, object>>(strParameter);
            if (dicParamerter == null) dicParamerter = new Dictionary<string, object>();

            SnsUser snsUser = new SnsUser();
            var command = SQLConnectManager.Provider.CreateCommandStruct("SnsUserInfo", CommandMode.Inquiry);
            command.OrderBy = "USERID ASC";
            command.Columns = "UserId,PassportID,PassportPwd,DeviceID,RegType,RegTime,RetailID,RetailUser,Mobile,Mail,PwdType,RealName,IDCards,ActiveCode,SendActiveDate,ActiveDate,WeixinCode";
            command.Filter = SQLConnectManager.Provider.CreateCommandFilter();
            command.Filter.Condition = strCondition;
            foreach (var v in dicParamerter)
            {
                command.Filter.AddParam(v.Key, v.Value);
            }
            command.Parser();

            using (var aReader = SQLConnectManager.Provider.ExecuteReader(CommandType.Text, command.Sql, command.Parameters))
            {
                if (aReader.Read())
                {
                    snsUser.UserId = Convert.ToInt32(aReader["UserId"]);
                    snsUser.IMEI = Convert.ToString(aReader["DeviceID"]);
                    snsUser.PassportId = Convert.ToString(aReader["PassportID"]);
                    snsUser.Password = Convert.ToString(aReader["PassportPwd"]);
                    snsUser.RegTime = Convert.ToDateTime(aReader["RegTime"]);
                    snsUser.RetailID = Convert.ToString(aReader["RetailID"]);
                    snsUser.RetailUser = Convert.ToString(aReader["RetailUser"]);
                    snsUser.Mobile = Convert.ToString(aReader["Mobile"]);
                    snsUser.Mail = Convert.ToString(aReader["Mail"]);
                    snsUser.RealName = Convert.ToString(aReader["RealName"]);
                    snsUser.IDCards = Convert.ToString(aReader["IDCards"]);
                    snsUser.ActiveCode = Convert.ToString(aReader["ActiveCode"]);
                    snsUser.SendActiveDate = ToDate(Convert.ToString(aReader["SendActiveDate"]));
                    snsUser.ActiveDate = ToDate(Convert.ToString(aReader["ActiveDate"]));
                    snsUser.WeixinCode = Convert.ToString(aReader["WeixinCode"]);
                    snsUser.PwdType = (PwdType)Enum.ToObject(typeof(PwdType), Convert.ToInt32(aReader["PwdType"]));
                    snsUser.RegType = (RegType)Enum.ToObject(typeof(RegType), Convert.ToInt32(aReader["RegType"]));
                }
            }
            return snsUser;
        }
        /// <summary>
        /// 设备检查
        /// </summary>
        /// <param name="device"></param>
        /// <returns></returns>
        public static bool CheckDevice(string device)
        {
            if (string.IsNullOrEmpty(device))
                return true;

            var command = SQLConnectManager.Provider.CreateCommandStruct("LimitDevice", CommandMode.Inquiry);
            command.Columns = "COUNT(DeviceID)";
            command.Filter = SQLConnectManager.Provider.CreateCommandFilter();
            command.Filter.Condition = command.Filter.FormatExpression("DeviceID");
            command.Filter.AddParam("DeviceID", device);
            command.Parser();

            int count = Convert.ToInt32(SQLConnectManager.Provider.ExecuteScalar(CommandType.Text, command.Sql, command.Parameters));
            return count <= 0;
        }
        private static DateTime ToDate(string str)
        {
            DateTime result;
            DateTime.TryParse(str, out result);
            return result;
        }
    }
}
