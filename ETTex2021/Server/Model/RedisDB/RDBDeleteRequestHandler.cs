using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Common.Serialization;
using ETModel.Script.CsScript.Action;
using System;

namespace ETModel
{
    [MessageHandler(AppType.RedisDB)]
	public class RDBDeleteRequestHandler : AMRpcHandler<RedisDB_DeleteTRequest, RedisDB_DeleteTReply>
	{
		protected override async ETTask Run(Session session, RedisDB_DeleteTRequest request, RedisDB_DeleteTReply response, Action reply)
		{
			RedisDBComponent dbComponent = Game.Scene.GetComponent<RedisDBComponent>();
			Console.Write($"收到DB 获取请求：{request.TName},");
			if (!CacheFactory.RedisDBSuccess) { Log.Debug($" RedisDB boot error!RedisDB_DeleteTRequest"); return; }
			string tname = "ETModel.Script.Model." + request.TName;
			var t = Type.GetType(tname);

			Type pt = typeof(BaseBrigeHelper);
			string method = "";
			if (request.personal == 1) method = "DeleteForBase";
			else method = "Delete";

			object _o = Activator.CreateInstance(pt);
			object[] args = new object[1];
			args[0] = JsonUtils.Deserialize(request.data, t);
			var all = pt.GetMethod(method);
			all = all.MakeGenericMethod(t);
			object _tobj = all.Invoke(null, args);
			response.Message = Convert.ToBoolean(_tobj) ? "1" : "0"; // $"RedisDB:{dbComponent.InstanceId}  从数据库返回的数据 ";
			 

			reply();
			await ETTask.CompletedTask;
		}
	}
}