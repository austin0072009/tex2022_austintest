using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Common.Serialization;
using ETModel.Script.CsScript.Action;
using System;

namespace ETModel
{
    [MessageHandler(AppType.RedisDB)]
    public class RDBAddorUpdateRequestHandler : AMRpcHandler<RedisDB_AddorUpateRequest, RedisDB_AddorUpateReply>
    {
        protected override async ETTask Run(Session session, RedisDB_AddorUpateRequest request, RedisDB_AddorUpateReply response, Action reply)
        {
            RedisDBComponent dbComponent = Game.Scene.GetComponent<RedisDBComponent>();
            Console.Write($"收到DB 获取请求：{request.TName},");
            if (!CacheFactory.RedisDBSuccess) { Log.Debug($" RedisDB boot error!RedisDB_AddorUpateRequest"); return; }
            string tname = "ETModel.Script.Model." + request.TName;
            var t = Type.GetType(tname);

            Type pt = typeof(BaseBrigeHelper);
            string method;
            if (request.personal == 3) method = "InsertBase";
            else if (request.personal == 2) method = "InsertShare";
            else if (request.personal == 1) method = "AddOrUpdateBase";
            else method = "AddOrUpdate";
            object _o = Activator.CreateInstance(pt);
            object[] args = new object[1];
            args[0] = JsonUtils.Deserialize(request.data, t);
            if (args[0] == null) { Console.WriteLine("RDBAddorUpdateRequestHandler:更新[" + tname + "]数据[" + request.data + "]为空,更新数据失败"); return; }
            var all = pt.GetMethod(method);
            all = all.MakeGenericMethod(t);
            object _tobj = all.Invoke(null, args);
            if (request.personal < 2) response.Message = Convert.ToBoolean(_tobj) ? "1" : "0";// $"RedisDB:{dbComponent.InstanceId}  从数据库返回的数据 ";
            else response.Message = _tobj.ToString();

            reply();
            await ETTask.CompletedTask;
        }
    }
}