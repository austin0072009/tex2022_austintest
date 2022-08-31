using ETModel.Framework.Common.Serialization;
using ETModel.Framework.Game.Sns;
using ETModel.Script.CsScript.Action;
using System;

namespace ETModel
{
    [ObjectSystem]
    public class RedisDBProxyComponentSystem : AwakeSystem<RedisDBProxyComponent>
    {
        public override void Awake(RedisDBProxyComponent self)
        {
            self.Awake();
        }
    }

    /// <summary>
    /// 用来与数据库操作代理
    /// </summary>
    public static class RedisDBComponentEx
    {
        public static void Awake(this RedisDBProxyComponent self)
        {
            StartConfig dbStartConfig = StartConfigComponent.Instance.RedisDBConfig;
            self.dbAddress = dbStartConfig.GetComponent<InnerConfig>().IPEndPoint;
        }

        public static async ETTask<SnsUser> Login(this RedisDBProxyComponent self, string _pid, string _pwd)
        {
            //StartConfig dbStartConfig = StartConfigComponent.Instance.RedisDBConfig;
            //self.dbAddress = dbStartConfig.GetComponent<InnerConfig>().IPEndPoint;
            Session session = Game.Scene.GetComponent<NetInnerComponent>().Get(self.dbAddress);
            RedisDB_LoginReplyMessage _loginreply = (RedisDB_LoginReplyMessage)await session.Call(new RedisDB_LoginRequestMessage { pid = _pid, pwd = _pwd });
            if (_loginreply.Error == 0) return JsonUtils.Deserialize<SnsUser>(_loginreply.Message);
            else return null;
        }
        public static async ETTask<SnsUser> LoginSnsUser(this RedisDBProxyComponent self, string _pid )
        {
            //StartConfig dbStartConfig = StartConfigComponent.Instance.RedisDBConfig;
            //self.dbAddress = dbStartConfig.GetComponent<InnerConfig>().IPEndPoint;
            Session session = Game.Scene.GetComponent<NetInnerComponent>().Get(self.dbAddress);
            RedisDB_LoginSnsUserReplyMessage _loginreply = (RedisDB_LoginSnsUserReplyMessage)await session.Call(new RedisDB_LoginSnsUserRequestMessage { pid = _pid});
            if (_loginreply.Error == 0) return JsonUtils.Deserialize<SnsUser>(_loginreply.Message);
            else return null;
        }

        public static async ETTask<string> GetDBDataTAsync(this RedisDBProxyComponent self, long _idx, string _Tname, int ispersonal)
        {
            StartConfig dbStartConfig = StartConfigComponent.Instance.RedisDBConfig;
            var dbAddress = dbStartConfig.GetComponent<InnerConfig>().IPEndPoint;
            try
            {
                Session session = Game.Scene.GetComponent<NetInnerComponent>().Get(dbAddress);
                RedisDB_GetTReply redisDB_RPCResponse = (RedisDB_GetTReply)await session.Call(new RedisDB_GetTRequest { idx = _idx, TName = _Tname, personal = ispersonal });
                //Log.Debug($"DB返回数据：{redisDB_RPCResponse.Message}");
                return redisDB_RPCResponse.Message;
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "202009081533");
                return "";
            }
        }

        public static async ETTask<string> GetDBDataListTAsync(this RedisDBProxyComponent self, string _Tname, int ispersonal, string _exp)
        {
            StartConfig dbStartConfig = StartConfigComponent.Instance.RedisDBConfig;
            var dbAddress = dbStartConfig.GetComponent<InnerConfig>().IPEndPoint;
            try
            {
                Session session = Game.Scene.GetComponent<NetInnerComponent>().Get(dbAddress);
                RedisDB_GetListTReply redisDB_RPCResponse = (RedisDB_GetListTReply)await session.Call(new RedisDB_GetListTRequest { personal = ispersonal, TName = _Tname, exp = _exp });

                return redisDB_RPCResponse.Message;
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "2020090815332");
                return "";
            }
        }

        public static async ETTask<string> GetDBDataListTAllAsync(this RedisDBProxyComponent self, string _Tname)
        {
            StartConfig dbStartConfig = StartConfigComponent.Instance.RedisDBConfig;
            var dbAddress = dbStartConfig.GetComponent<InnerConfig>().IPEndPoint;
            try
            {
                Session session = Game.Scene.GetComponent<NetInnerComponent>().Get(dbAddress);
                RedisDB_GetListTAllReply redisDB_RPCResponse = (RedisDB_GetListTAllReply)await session.Call(new RedisDB_GetListTAllRequest { TName = _Tname });
                //Log.Debug($"DB返回数据：{redisDB_RPCResponse.Message}");
                return redisDB_RPCResponse.Message;
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "202009081533");
                return "";
            }
        }


        public static async ETTask<string> GetDBDataReloadAsync(this RedisDBProxyComponent self, string _Tname, int ispersonal)
        {
            StartConfig dbStartConfig = StartConfigComponent.Instance.RedisDBConfig;
            var dbAddress = dbStartConfig.GetComponent<InnerConfig>().IPEndPoint;
            Session session = Game.Scene.GetComponent<NetInnerComponent>().Get(dbAddress);
            try
            {
                RedisDB_ReloadReply redisDB_RPCResponse = (RedisDB_ReloadReply)await session.Call(new RedisDB_ReloadRequest { personal = ispersonal, TName = _Tname });
            }
            catch (Exception ex)
            {
                Log.Error(ex);
            }
            //Log.Debug($"DB返回数据：{redisDB_RPCResponse.Message}");
            return "";
        }


        public static async ETTask<string> AddOrUpdateaAsync(this RedisDBProxyComponent self, string _Tname, int ispersonal, string _data)
        {
            StartConfig dbStartConfig = StartConfigComponent.Instance.RedisDBConfig;
            var dbAddress = dbStartConfig.GetComponent<InnerConfig>().IPEndPoint;
            try
            {
                Session session = Game.Scene.GetComponent<NetInnerComponent>().Get(dbAddress);
                RedisDB_AddorUpateReply redisDB_RPCResponse = (RedisDB_AddorUpateReply)await session.Call(new RedisDB_AddorUpateRequest { personal = ispersonal, TName = _Tname, data = _data });
                //Log.Debug($"DB返回数据：{redisDB_RPCResponse.Message}");
                return redisDB_RPCResponse.Message;
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "202009081533");
                return "";
            }
        }

        public static async ETTask<byte[]> AddOrUpdateaAsync(this RedisDBProxyComponent self, string tname, byte[] msg)
        {
            try
            {
                //var manager = NumberFieldComponent.Instance;
                //byte[] msg = null;
                //if (manager != null && (msg = manager.GetRequest(obj)) != null)
                //{
                Session session = Game.Scene.GetComponent<NetInnerComponent>().Get(self.dbAddress);
                RedisDB_UpdateDataReply response = (RedisDB_UpdateDataReply)await session.Call(new RedisDB_UpdateDataRequest { TName = tname, Content = msg });
                return response.Content;
                //using (MemoryStream stream = new MemoryStream(response.Message.ToByteArray()))
                //{
                //    var fields = manager.Decode(obj.GetType(), stream);
                //    if (fields != null && fields.Count > 0) manager.SetValue(false, obj, fields);
                //}
                //}
                //else TraceLogEx.Error("不支持类型[" + obj.GetType().FullName + "],混合更改失败");
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "202009081533");
                return null;
            }
        }

        public static async ETTask<long> UpdateTIncreAsync(this RedisDBProxyComponent self, string tname, string fname, long fval, long pval)
        {
            StartConfig dbStartConfig = StartConfigComponent.Instance.RedisDBConfig;
            var dbAddress = dbStartConfig.GetComponent<InnerConfig>().IPEndPoint;
            try
            {
                Session session = Game.Scene.GetComponent<NetInnerComponent>().Get(dbAddress);
                RedisDB_UpdateTIncreReply redisDB_RPCResponse = (RedisDB_UpdateTIncreReply)await session.Call(new RedisDB_UpdateTIncreRequest { addval = fval, FName = fname, TName = tname, pval = pval });
                //Log.Debug($"DB返回数据：{redisDB_RPCResponse.Message}");
                return redisDB_RPCResponse.val;
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "202009081533");
                return long.MinValue;
            }
        }


        public static async ETTask<string> WriteTAsync(this RedisDBProxyComponent self, string _data, string _Tname, int needret)
        {
            StartConfig dbStartConfig = StartConfigComponent.Instance.RedisDBConfig;
            var dbAddress = dbStartConfig.GetComponent<InnerConfig>().IPEndPoint;
            try
            {
                Session session = Game.Scene.GetComponent<NetInnerComponent>().Get(dbAddress);
                RedisDB_WriteTReply redisDB_RPCResponse = (RedisDB_WriteTReply)await session.Call(new RedisDB_WriteTRequest { data = _data, TName = _Tname, needreturn = needret });
                //Log.Debug($"DB返回数据：{redisDB_RPCResponse.Message}");
                return redisDB_RPCResponse.Message;
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "202009081533");
                return "";
            }
        }

        public static async ETTask<string> DeleteTAsync(this RedisDBProxyComponent self, string _Tname, int ispersonal, string _data)
        {
            StartConfig dbStartConfig = StartConfigComponent.Instance.RedisDBConfig;
            var dbAddress = dbStartConfig.GetComponent<InnerConfig>().IPEndPoint;
            try
            {
                Session session = Game.Scene.GetComponent<NetInnerComponent>().Get(dbAddress);
                RedisDB_DeleteTReply redisDB_RPCResponse = (RedisDB_DeleteTReply)await session.Call(new RedisDB_DeleteTRequest { personal = ispersonal, TName = _Tname, data = _data });
                //Log.Debug($"DB返回数据：{redisDB_RPCResponse.Message}");
                return redisDB_RPCResponse.Message;
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "202009081533");
                return "";
            }
        }

        public static async ETTask<string> USGetAsync(this RedisDBProxyComponent self, int _idx, int _istry)
        {
            StartConfig dbStartConfig = StartConfigComponent.Instance.RedisDBConfig;
            var dbAddress = dbStartConfig.GetComponent<InnerConfig>().IPEndPoint;
            try
            {
                Session session = Game.Scene.GetComponent<NetInnerComponent>().Get(dbAddress);
                US_GetReply redisDB_RPCResponse = (US_GetReply)await session.Call(new US_GetRequest { istry = _istry, userid = _idx });
                //Log.Debug($"DB返回数据：{redisDB_RPCResponse.Message}");
                return redisDB_RPCResponse.Message;
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "202009081533");
                return "";
            }
        }

        public static async ETTask<string> USAddOrUpdateaAsync(this RedisDBProxyComponent self, string _data)
        {
            StartConfig dbStartConfig = StartConfigComponent.Instance.RedisDBConfig;
            var dbAddress = dbStartConfig.GetComponent<InnerConfig>().IPEndPoint;
            try
            {
                Session session = Game.Scene.GetComponent<NetInnerComponent>().Get(dbAddress);
                US_AddOrUpdateReply redisDB_RPCResponse = (US_AddOrUpdateReply)await session.Call(new US_AddOrUpdateRequest { data = _data });
                //Log.Debug($"DB返回数据：{redisDB_RPCResponse.Message}");
                return redisDB_RPCResponse.Message;
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "202009081533");
                return "";
            }
        }


        public static async ETTask<string> GetDBCommonFunAsync(this RedisDBProxyComponent self, string _fname, string _para)
        {
            StartConfig dbStartConfig = StartConfigComponent.Instance.RedisDBConfig;
            var dbAddress = dbStartConfig.GetComponent<InnerConfig>().IPEndPoint;
            try
            {
                Session session = Game.Scene.GetComponent<NetInnerComponent>().Get(dbAddress);
                DB_CommonFunReply redisDB_RPCResponse = (DB_CommonFunReply)await session.Call(new DB_CommonFunRequest { funname = _fname, para = _para });
                //Log.Debug($"DB返回数据：{redisDB_RPCResponse.Message}");
                return redisDB_RPCResponse.Message;
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "202009051804");
                return "";
            }
        }
        public static async ETTask<string> GetDBCommonFun2Async(this RedisDBProxyComponent self, string _fname, string _para1, string _para2)
        {
            StartConfig dbStartConfig = StartConfigComponent.Instance.RedisDBConfig;
            var dbAddress = dbStartConfig.GetComponent<InnerConfig>().IPEndPoint;
            try
            {
                Session session = Game.Scene.GetComponent<NetInnerComponent>().Get(dbAddress);
                DB_CommonFun2Reply redisDB_RPCResponse = (DB_CommonFun2Reply)await session.Call(new DB_CommonFun2Request { funname = _fname, para1 = _para1, para2 = _para2 });
                //Log.Debug($"DB返回数据：{redisDB_RPCResponse.Message}");
                return redisDB_RPCResponse.Message;
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "202009051804");
                return "";
            }
        }
        public static async void TaskAsync(this RedisDBProxyComponent self, cs_task cs)
        {
            if (self == null) return;
            try
            {
                Session session = Game.Scene.GetComponent<NetInnerComponent>().Get(self.dbAddress);
                session.SendRpc(new RedisDB_TaskRequest { Message = JsonUtils.Serialize(cs) });
            }
            catch (Exception ex) { TraceLogEx.Error(ex, "提交任务失败:" + JsonUtils.Serialize(cs)); }
        }
        public static async ETTask<T> TaskAsync<T>(this RedisDBProxyComponent self, cs_task cs)
        {
            if (self == null) return default;
            try
            {
                cs.isreturn = true;
                Session session = Game.Scene.GetComponent<NetInnerComponent>().Get(self.dbAddress);
                RedisDB_TaskResponse rsp = (RedisDB_TaskResponse)await session.Call(new RedisDB_TaskRequest { Message = JsonUtils.Serialize(cs) });
                if (rsp.Message == null) return default;
                return JsonUtils.Deserialize<T>(rsp.Message);
            }
            catch (Exception ex) { TraceLogEx.Error(ex, "获取任务信息失败:" + JsonUtils.Serialize(cs)); };
            return default;
        }
  

        public static async ETTask<string> GetDBCommonFun3Async(this RedisDBProxyComponent self, string _fname, string _para1, string _para2, string _para3)
        {
            StartConfig dbStartConfig = StartConfigComponent.Instance.RedisDBConfig;
            var dbAddress = dbStartConfig.GetComponent<InnerConfig>().IPEndPoint;
            try
            {
                Session session = Game.Scene.GetComponent<NetInnerComponent>().Get(dbAddress);
                DB_CommonFun3Reply redisDB_RPCResponse = (DB_CommonFun3Reply)await session.Call(new DB_CommonFun3Request { funname = _fname, para1 = _para1, para2 = _para2, para3 = _para3 });
                //Log.Debug($"DB返回数据：{redisDB_RPCResponse.Message}");
                return redisDB_RPCResponse.Message;
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "202009151804");
                return "";
            }
        }
       
    }
}