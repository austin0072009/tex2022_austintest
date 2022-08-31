using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Common.Serialization;
using ETModel.Framework.Game.Sns;
using ETModel.Framework.Model;
using ETModel.Script.Model;
using Model.Scut_Script.Common;
using Serialize.Linq.Serializers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace ETModel.Script.CsScript.Action
{
    public class BaseHelper
    {
        
        public static async Task<SnsUser> LoginByMobile(string pid, string pwd)
        {
            SnsUser user = null;
            user = await Game.Scene.GetComponent<RedisDBProxyComponent>().Login(pid, pwd);
            return user;
        }
        public static async Task<SnsUser> LoginGetSnsUser(string pid)
        {
            SnsUser user = await Game.Scene.GetComponent<RedisDBProxyComponent>().LoginSnsUser(pid);
            return user;
        }
        

        public static async Task<T> GetBase<T>(long key, bool islocal = true) where T : BaseEntity, new()
        {
            return await GameEntityCache.Instance.GetEntity<T>(key, islocal);
        }

      
        public static async Task<T> GetBaseDB<T>(long key) where T : BaseEntity, new()
        {
            var jsonT = await Game.Scene.GetComponent<RedisDBProxyComponent>().GetDBDataTAsync(key, typeof(T).Name, 3);
            return (T)JsonUtils.Deserialize(jsonT, typeof(T));
        } 
   

        public static async Task<T> GetShare<T>(long key, bool islocal = true) where T : ShareEntity, new()
        {
            return await GameEntityCache.Instance.GetEntity<T>(key, islocal);
        }

        public static async Task<T> GetShare<T>(Expression<Func<T, bool>> match) where T : ShareEntity, new()
        {
            try
            {
                List<T> alist = await GetShareAll<T>(match);
                var share = alist.FirstOrDefault();
                if (share != null)
                {
                    if (GameEntityCache.Instance.HasNumberField(typeof(T)))
                    {
                        GameEntityCache.Instance.SetEntity(share);
                    }
                }
                return share;
            }
            catch (Exception e)
            {
                TraceLogEx.Error($"获取数据{typeof(T).FullName}错误为：{e.Message}");
                Log.Error($"获取数据{typeof(T).FullName}错误为：{e.Message}");
            }
            return default;
        }

        public static async Task<T> GetBase<T>(Expression<Func<T, bool>> match) where T : BaseEntity, new()
        {
            try
            {
                List<T> alist = await GetBaseAll<T>(match);
                var share = alist.FirstOrDefault();
                if (share != null)
                {
                    if (GameEntityCache.Instance.HasNumberField(typeof(T)))
                    {
                        GameEntityCache.Instance.SetEntity(share);
                    }
                }
                return share;
            }
            catch (Exception e)
            {
                TraceLogEx.Error(e, $"获取数据{typeof(T).FullName}错误为：{e.Message}");
            }
            return default;
        }


        public static async Task<List<T>> GetShareAll<T>() where T : ShareEntity, new()
        {
            string jsonT = "";
            ////TaskEx.WaitAll(Task.Run(async () =>
            ////{
            ////    jsonT = await Game.Scene.GetComponent<RedisDBProxyComponent>().GetDBDataListTAllAsync(typeof(T).Name);
            ////}));
            jsonT = await Game.Scene.GetComponent<RedisDBProxyComponent>().GetDBDataListTAllAsync(typeof(T).Name);
            List<T> list = JsonUtils.Deserialize<List<T>>(jsonT);
            foreach (T item in list)
            if (GameEntityCache.Instance.HasNumberField(typeof(T)))
            {
                GameEntityCache.Instance.SetEntity(item);
            }
            return list;
        }
         
        public static async Task<List<T>> GetShareAll<T>(Expression<Func<T, bool>> exp) where T : ShareEntity, new()
        { 
            var serializer = new ExpressionSerializer(new JsonSerializer()); 
            serializer.AddKnownType(typeof(T));
            string expjson = serializer.SerializeText(exp, new Serialize.Linq.Factories.FactorySettings() { UseRelaxedTypeNames = true, AllowPrivateFieldAccess = true });

            ////// Deserialize expression
            ////Expression actualExpression = serializer.DeserializeText(expjson);
            ////var exp2 = (Expression<Func<T, bool>>)actualExpression; 
            ////Predicate<T> match2 = new Predicate<T>(exp2.Compile());
            ////return new ShareCacheStruct<T>().FindAll(match2);  

            string jsonT = await Game.Scene.GetComponent<RedisDBProxyComponent>().GetDBDataListTAsync(typeof(T).Name, 0, expjson);
            var entitys = JsonUtils.Deserialize<List<T>>(jsonT);
            if (entitys != null)
            {
                if (GameEntityCache.Instance.HasNumberField(typeof(T)))
                {
                    foreach (var item in entitys)
                    {
                        GameEntityCache.Instance.SetEntity(item);
                    }
                }
            }
            return entitys;
        }

        public static async Task<List<T>> GetBaseAll<T>(Expression<Func<T, bool>> exp) where T : BaseEntity, new()
        {
            var serializer = new ExpressionSerializer(new JsonSerializer());// Serialize expression
            serializer.AddKnownType(typeof(T));
            string expjson = serializer.SerializeText(exp, new Serialize.Linq.Factories.FactorySettings() { UseRelaxedTypeNames = true, AllowPrivateFieldAccess = true });
            string jsonT = "";
            jsonT = await Game.Scene.GetComponent<RedisDBProxyComponent>().GetDBDataListTAsync(typeof(T).Name, 1, expjson);
            var entitys = JsonUtils.Deserialize<List<T>>(jsonT);
            if (GameEntityCache.Instance.HasNumberField(typeof(T)))
                foreach (var item in entitys)
                {
                    GameEntityCache.Instance.SetEntity(item);
                }
            return entitys;

        }

        public static async Task<bool> ReLoad<T>() where T : ShareEntity, new()
        {
            await Game.Scene.GetComponent<RedisDBProxyComponent>().GetDBDataReloadAsync(typeof(T).Name, 0);
            return true;
        }

        public static async Task<bool> ReLoadBase<T>() where T : BaseEntity, new()
        {
            await Game.Scene.GetComponent<RedisDBProxyComponent>().GetDBDataReloadAsync(typeof(T).Name, 1);
            return true;
        }

        public static async Task<bool> Add<T>(T result) where T : ShareEntity, new()
        {
            if (result.GetMessageQueueId() == 0)
            {
                return await InsertShare(result);
            }
            return await GameEntityCache.Instance.AddOrUpdate(result);
            //jsonT = await Game.Scene.GetComponent<RedisDBProxyComponent>().AddOrUpdateaAsync(typeof(T).Name, 0, JsonUtils.Serialize(result));
            //return jsonT == "1";
        }

      
        public static async Task<bool> AddOrUpdate<T>(T result, bool UseNumberField = true) where T : ShareEntity, new()
        {
            if (result.GetMessageQueueId() == 0)
            {
                return await InsertShare(result);
            }
            return await GameEntityCache.Instance.AddOrUpdate(result, UseNumberField);
            //jsonT = await Game.Scene.GetComponent<RedisDBProxyComponent>().AddOrUpdateaAsync(typeof(T).Name, 0, JsonUtils.Serialize(result));
            //return jsonT == "1";
        }

        public static async Task<bool> AddOrUpdateBase<T>(T result) where T : BaseEntity, new()
        {
            if (result.GetMessageQueueId() == 0)
            {
                return await InsertBase(result);
            }
            return await GameEntityCache.Instance.AddOrUpdate(result);
            //jsonT = await Game.Scene.GetComponent<RedisDBProxyComponent>().AddOrUpdateaAsync(typeof(T).Name, 1, JsonUtils.Serialize(result));
            //return jsonT == "1";
        }
        public static async Task<bool> InsertBase<T>(T entity, string tname = null) where T : BaseEntity
        {
            return (await Game.Scene.GetComponent<RedisDBProxyComponent>().AddOrUpdateaAsync(tname == null ? typeof(T).Name : tname, 3, JsonUtils.Serialize(entity))).ToInt32() > 0;
        }
        public static async Task<int> InsertBaseBackID<T>(T entity, string tname = null) where T : BaseEntity
        {
            return (await Game.Scene.GetComponent<RedisDBProxyComponent>().AddOrUpdateaAsync(tname == null ? typeof(T).Name : tname, 3, JsonUtils.Serialize(entity))).ToInt32();
        }
        public static async Task<bool> InsertShare<T>(T entity, string tname = null) where T : ShareEntity
        {
            return (await Game.Scene.GetComponent<RedisDBProxyComponent>().AddOrUpdateaAsync(tname == null ? typeof(T).Name : tname, 2, JsonUtils.Serialize(entity))).ToInt32() > 0;
        }
        public static async Task<int> InsertShareBackID<T>(T entity, string tname = null) where T : ShareEntity
        {
            return (await Game.Scene.GetComponent<RedisDBProxyComponent>().AddOrUpdateaAsync(tname == null ? typeof(T).Name : tname, 2, JsonUtils.Serialize(entity))).ToInt32();
        }
     
        public static async Task<bool> DeleteBase<T>(T result) where T : BaseEntity, new()
        {
            string json = await Game.Scene.GetComponent<RedisDBProxyComponent>().DeleteTAsync(typeof(T).Name, 1, JsonUtils.Serialize(result));
            return json == "1";
        }
        public static async Task<bool> Delete<T>(T result) where T : ShareEntity, new()
        {
            string jsonT = "";
            ////TaskEx.WaitAll(Task.Run(async () =>
            ////{
            ////    jsonT = await Game.Scene.GetComponent<RedisDBProxyComponent>().DeleteTAsync(typeof(T).Name, 0, JsonUtils.Serialize(result));
            ////}));
            jsonT = await Game.Scene.GetComponent<RedisDBProxyComponent>().DeleteTAsync(typeof(T).Name, 0, JsonUtils.Serialize(result));
            return jsonT == "1";
        }

        /// <summary>
        /// 异步写数据库
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="model"></param>
        public static void AddAsyncS<T>(T model) where T : AbstractEntity
        {
            Type pt = typeof(BaseHelper);
            var alltryre = pt.GetMethod("AddDBAsync");
            object[] args = new object[1];
            args[0] = model;
            var t = typeof(T);
            alltryre = alltryre.MakeGenericMethod(t);
            alltryre.Invoke(null, args);
        }
        public static async void AddAsync<T>(T model) where T : AbstractEntity
        { 
            await Game.Scene.GetComponent<RedisDBProxyComponent>().WriteTAsync(JsonUtils.Serialize(model), typeof(T).Name, 0);
        }
        public static async Task AddAsyncWait<T>(T model)
        {
            await Game.Scene.GetComponent<RedisDBProxyComponent>().WriteTAsync(JsonUtils.Serialize(model), typeof(T).Name, 0);
        }

        public static async Task<long> UpdateUserGold(long userID, long addGold)
        {
            return await Game.Scene.GetComponent<RedisDBProxyComponent>().UpdateTIncreAsync("tUser", "Gold", addGold, userID);
        }

        public static async Task<long> UpdateTIncre(string tname, string fname, long fval, long pval)
        {
            return await Game.Scene.GetComponent<RedisDBProxyComponent>().UpdateTIncreAsync(tname, fname, fval, pval);
        }

      
        public static async Task<long> SendOneToDbReturnIdentity<T>(T model) where T : AbstractEntity
        {
            string jsonT = "";
            
            jsonT = await Game.Scene.GetComponent<RedisDBProxyComponent>().WriteTAsync(JsonUtils.Serialize(model), typeof(T).Name, 1);
            return Convert.ToInt64(jsonT);
        }
        #region activecode 

        public static async Task<int> GetAcodeUseUserId(string code)
        {
            string jsonT = "";
            jsonT = await Game.Scene.GetComponent<RedisDBProxyComponent>().GetDBCommonFunAsync("GetAcodeUseUserId", code);
            return Convert.ToInt32(jsonT);
        }


        public static async Task<string> GenerateCode(int UserID)
        {
            return await GetNewCode(0, UserID);
           
        }
        /// <summary>
        /// 找到按ID升序的 第一个未使用的码
        /// </summary>
        /// <returns></returns>
        public static async Task<tActiveCode> GetNoUseActiveCode()
        {
            string jsonT = "";
            jsonT = await Game.Scene.GetComponent<RedisDBProxyComponent>().GetDBCommonFunAsync("GetNoUseActiveCode", "");
            return JsonUtils.Deserialize<tActiveCode>(jsonT);
        }
        public static async Task<string> GetNewCode(int cidx, int userid)
        {
            var str = await Game.Scene.GetComponent<RedisDBProxyComponent>().GetDBCommonFun2Async("GetNewCode", cidx.ToString(), userid.ToString());
            int code = Convert.ToInt32(str);
            return Convert.ToString(code, 16);
        }
        public static async Task<int> GetUserIDFromCode(int cidx, string code)
        {
            var str = await Game.Scene.GetComponent<RedisDBProxyComponent>().GetDBCommonFun2Async("GetUserIDFromCode", cidx.ToString(), Convert.ToInt32(code, 16).ToString());
            return Convert.ToInt32(str);
        }
        public static async Task<bool> UpdateActiveCode(int id, int userid)
        {
            string jsonT = "";
            jsonT = await Game.Scene.GetComponent<RedisDBProxyComponent>().GetDBCommonFun2Async("GetNoUseActiveCode", id + "", userid + "");
            return jsonT == "1";//            
        }
        #endregion

        #region userstatus
        public static async Task<UserStatus> GetUserStatusbyUserID(int UserID)
        {
            return await UserStatusCache.Ins.GetStatus(UserID, 0); 
        }
        public static async Task<UserStatus> TryGetUserStatus(int UserID)
        {
            return await UserStatusCache.Ins.GetStatus(UserID, 1); 
        }       

        public static async Task<List<UserStatus>> GetAllUserStatus()
        {
            string jsonT = await Game.Scene.GetComponent<RedisDBProxyComponent>().USGetAsync(0, 2);
            List<UserStatus> uss = JsonUtils.Deserialize<List<UserStatus>>(jsonT);
            ////foreach (var us in uss)
            ////{
            ////    UserStatusCache.Ins.Update(us); 
            ////}
            return uss;
        }
      
        public static async ETTask<bool> AddorUpdateUserStatus(UserStatus us)
        {
            return await UserStatusCache.Ins.AddOrUpdate(us);
        }      
        #endregion

        #region  dboprate

        /// <summary>
        /// 获取机器人ID
        /// </summary>
        /// <returns></returns>
        public static List<int> GetUserIdListS(int value)
        {
            Type pt = typeof(BaseHelper);
            var alltryre = pt.GetMethod("GetUserIdListAsycn");
            object[] args = new object[1];
            args[0] = value;
            object _tobj = alltryre.Invoke(null, args);
            if (_tobj is Task<List<int>>)
            {
                Task<List<int>> _t = _tobj as Task<List<int>>;
                return _t.Result;
            }
            return new List<int>();
        }
        public static async Task<List<int>> GetUserIdList(int value)
        {
            string jsonT = ""; 
            jsonT = await Game.Scene.GetComponent<RedisDBProxyComponent>().GetDBCommonFunAsync("GetUserIdList", value + "");
            return JsonUtils.Deserialize<List<int>>(jsonT);
        }

        #endregion

        /// <summary>
        /// 记录用户登录
        /// </summary> 
        public static void AddUserLoginLog(int userId, string IP, string machineCode, int machineType, float lat, float lng)
        {
            return;
        }

        #region  common robot
     
        public static async void RobotExistNumAddOne()
        { 
            await Game.Scene.GetComponent<RedisDBProxyComponent>().GetDBCommonFunAsync("RobotExistNumAddOne", "");
        }
 
        public static async void RobotExistNumReduceOne()
        { 
            await Game.Scene.GetComponent<RedisDBProxyComponent>().GetDBCommonFunAsync("RobotExistNumReduceOne", "");
        } 
      
        public static async Task<tUser> GetARobot(int uid = 0)
        {
            string jsonT = ""; 
            jsonT = await Game.Scene.GetComponent<RedisDBProxyComponent>().GetDBCommonFunAsync("GetARobot", uid + "");
            var user = JsonUtils.Deserialize<tUser>(jsonT);

            if (user!=null) user = await GameEntityCache.Instance.GetEntity<tUser>(user.UserID);
            return user;
        }

        /// <summary>
        /// 机器人统一回收接口
        /// </summary>
        public static async void RobotCallback(tUser _user)
        { 
            await Game.Scene.GetComponent<RedisDBProxyComponent>().GetDBCommonFunAsync("RobotCallback", JsonUtils.Serialize(_user));
        }

        public static async void ReverseData()
        { 
            await Game.Scene.GetComponent<RedisDBProxyComponent>().GetDBCommonFunAsync("ReverseData", "");
        } 
     

        public static async void UpdateRobotForce()
        { 
            await Game.Scene.GetComponent<RedisDBProxyComponent>().GetDBCommonFunAsync("UpdateRobotForce", "");
        }

        public static async Task<int> QueRobotUserCount()
        {
            string jsonT = "";
            jsonT = await Game.Scene.GetComponent<RedisDBProxyComponent>().GetDBCommonFunAsync("QueRobotUserCount", "");
            return Convert.ToInt32(jsonT);
        }
        #endregion  
         
        /// <summary>
        /// <summary>
        /// 获取游戏中聊天记录
        /// </summary>
        /// <param name="tableid"></param>
        /// <param name="roomid"></param>
        /// <param name="gameid"></param>
        /// <returns></returns>
        public static async Task<List<Barrage>> GetTableBarrage(int tableid, int roomid, int gameid)
        {
            string jsonT = "";
            jsonT = await Game.Scene.GetComponent<RedisDBProxyComponent>().GetDBCommonFun3Async("GetTableBarrage", tableid + "", roomid + "", gameid + "");
            return JsonUtils.Deserialize<List<Barrage>>(jsonT);
        }

        public static async Task<List<tclubapplylog>> GetApplyListlog(int ctype, int atype, long cid)
        {
            string jsonT = await Game.Scene.GetComponent<RedisDBProxyComponent>().GetDBCommonFun3Async("GetApplyListlog3", ctype + "", atype + "", cid + "");
            return JsonUtils.Deserialize<List<tclubapplylog>>(jsonT);
        }
   
        public static async Task<tclubapplylog> Getclubapplylog(int type, long cid, int userid)
        {
            string jsonT = await Game.Scene.GetComponent<RedisDBProxyComponent>().GetDBCommonFun3Async("Getclubapplylog", type + "", cid + "", userid + "");
            return JsonUtils.Deserialize<tclubapplylog>(jsonT);
        }
     

        public static async void UpdateApplylogStatus(long logid, int status)
        {
            string jsonT = await Game.Scene.GetComponent<RedisDBProxyComponent>().GetDBCommonFun2Async("UpdateApplylogStatus", logid + "", status + "");
            //return jsonT.ToBool();
        }
        public static async Task<List<tclubusergoldlog>> Getclubgoldlog(int clubid, int userid)
        {
            string jsonT = await Game.Scene.GetComponent<RedisDBProxyComponent>().GetDBCommonFun2Async("Getclubgoldlog2", clubid + "", userid + "");
            return JsonUtils.Deserialize<List<tclubusergoldlog>>(jsonT);
        }
  
        public static async Task<List<tclubfundlog>> GetFondLog(int clubid)
        {
            string jsonT = await Game.Scene.GetComponent<RedisDBProxyComponent>().GetDBCommonFunAsync("GetFondLog", clubid + "");
            return JsonUtils.Deserialize<List<tclubfundlog>>(jsonT);
        }
        /// <summary> 领取任务奖励 </summary>
        public static async Task<sc_award> Award(int userid, int taskid)
        {
            if (userid <= 0 || taskid <= 0) return null;
            return await Game.Scene.GetComponent<RedisDBProxyComponent>().TaskAsync<sc_award>(new cs_award { taskid = taskid, userid = userid });
        }
        /// <summary> 更新任务状态 </summary>
        public static async void TaskComplate(int userid, int taskid)
        {
            if (userid <= 0 || taskid <= 0) return;
            Game.Scene.GetComponent<RedisDBProxyComponent>().TaskAsync(new cs_taskcomplate { taskid = taskid, userid = userid });
        }
        public static async void TaskComplate(int userid)
        {
            if (userid <= 0) return;
            Game.Scene.GetComponent<RedisDBProxyComponent>().TaskAsync(new cs_taskcomplate { userid = userid, taskid = -88888 });
        }
        /// <summary> 签到任务 </summary>
        public static async void UserSignin(int userid)
        {
            if (userid <= 0) return;
            Game.Scene.GetComponent<RedisDBProxyComponent>().TaskAsync(new cs_signin { userid = userid });
        }
        /// <summary> 增加玩家任务数据值 </summary>
        public static async void ChangeUserGameDate(int userid, int gameid, string type, int num = 1,int replace=0)
        {
            Game.Scene.GetComponent<RedisDBProxyComponent>().TaskAsync(new cs_game_data_change { userid = userid, gameid = gameid, type = type, num = num,replace= replace });
        }
        /// <summary> 获取任务信息列表 </summary>
        public static async Task<sc_tasklist> GetTaskList(int userid)
        {
            if (userid <= 0) return null;
            return await Game.Scene.GetComponent<RedisDBProxyComponent>().TaskAsync<sc_tasklist>(new cs_tasklist { userid = userid });
        }
        /// <summary> 添加任务 </summary>
        public static async Task<sc_task_add_base> TaskAdd(TempTask task)
        {
            if (task == null) return null;
            return await Game.Scene.GetComponent<RedisDBProxyComponent>().TaskAsync<sc_task_add_base>(new cs_task_add_base { task = task });
        }
        /// <summary>
        /// 用户结算统计
        /// </summary>
        /// <param name="userid"> 用户编号</param>
        /// <param name="gameid">游戏编号</param>
        /// <param name="changegold">当前局输赢分数</param>
        public static async void UserClear(int userid, int gameid, int changegold)
        {
            //Game.Scene.GetComponent<RedisDBProxyComponent>().TaskAsync(new userclearinfo { userid = userid, gameid = gameid, score = changegold });
        }
        public static async void TableClear(int gameid, List<UserScoreInfo> infos)
        {
            //Game.Scene.GetComponent<RedisDBProxyComponent>().TaskAsync(new tableclearinfo { gameid = gameid, infos = infos });
        }
        public static async void ChangeMiniGameCount(int userid)
        {
            //Game.Scene.GetComponent<RedisDBProxyComponent>().TaskAsync(new cs_game_data_change { userid = userid, gameid = -1, type = TaskDataType.JoinCount.ToString(), num = 1 });
        }

        public static async Task<SnsUser> SetUserInfo(string strCondition, string strParameter)
        {
            string jsonT = await Game.Scene.GetComponent<RedisDBProxyComponent>().GetDBCommonFun2Async("SetUserInfo", strCondition, strParameter);
            return JsonUtils.Deserialize<SnsUser>(jsonT);
        }
        /// <summary>
        /// 设备检测
        /// </summary>
        /// <param name="device"></param>
        /// <returns></returns>
        public static async Task<bool> CheckDevice(string device)
        {
            string jsonT = await Game.Scene.GetComponent<RedisDBProxyComponent>().GetDBCommonFunAsync("CheckDevice", device);
            return JsonUtils.Deserialize<bool>(jsonT);
        }
    }
}