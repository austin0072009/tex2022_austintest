using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Common.Serialization;
using ETModel.Script.CsScript.Action;
using System;

namespace ETModel
{
    [MessageHandler(AppType.RedisDB)]
    public class RDBGetListTRequestHandler : AMRpcHandler<RedisDB_GetListTRequest, RedisDB_GetListTReply>
    {
        protected override async ETTask Run(Session session, RedisDB_GetListTRequest request, RedisDB_GetListTReply response, Action reply)
        {
            RedisDBComponent dbComponent = Game.Scene.GetComponent<RedisDBComponent>();

            Console.Write($"RedisDBGetListTRequestHandler：{request.TName}  \n");
            if (!CacheFactory.RedisDBSuccess)
            {
                response.Error = ErrorCode.ERR_ReadDBError;// $"RedisDB:{dbComponent.InstanceId}  从数据库返回的数据 ";
                Console.Write(" RedisDB boot error!RedisDB_GetListTRequest");
                reply();
                return;
            }
            try
            {
                string tname = "ETModel.Script.Model." + request.TName;
                var t = Type.GetType(tname);

                Type pt = typeof(BaseBrigeHelper);
                object _o = Activator.CreateInstance(pt);

                var all = request.personal == 0 ? pt.GetMethod("GetShareAll") : pt.GetMethod("GetBaseAll");
                all = all.MakeGenericMethod(t);

                object[] args = new object[1];
                args[0] = request.exp;
                object _tobj = all.Invoke(null, args);
                response.Message = JsonUtils.Serialize(_tobj);// $"RedisDB:{dbComponent.InstanceId}  从数据库返回的数据 "; 
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "20200903");
                response.Error = ErrorCode.ERR_ReadDBError;
            }
            reply();
        }

    }
}
