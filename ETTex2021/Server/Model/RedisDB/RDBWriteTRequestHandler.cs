using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Common.Serialization;
using ETModel.Script.CsScript.Action;
using System;

namespace ETModel
{
    [MessageHandler(AppType.RedisDB)]
	public class RDBWriteTRequestHandler : AMRpcHandler<RedisDB_WriteTRequest, RedisDB_WriteTReply>  
	{
		protected override async ETTask Run(Session session, RedisDB_WriteTRequest request, RedisDB_WriteTReply response, Action reply)
		{
			RedisDBComponent dbComponent = Game.Scene.GetComponent<RedisDBComponent>();
			//Console.WriteLine($"RDBWriteTRequestHandler writeT：{request.TName},");
			if (!CacheFactory.RedisDBSuccess) { Log.Debug($" RedisDB boot error!RedisDB_WriteTRequest"); return; }
			string tname = "ETModel.Script.Model." + request.TName;
			var t = Type.GetType(tname);

			Type pt = typeof(BaseBrigeHelper);
			object _o = Activator.CreateInstance(pt);

			string method = "";
			if (request.needreturn == 1) method = "SendOneToDbReturnIdentity";
			else method = "AddAsync";

			var all = pt.GetMethod(method);
			all = all.MakeGenericMethod(t);

			object[] args = new object[1];
			args[0] = JsonUtils.Deserialize(request.data, t);
			object _tobj = all.Invoke(null, args);
			response.Message = (request.needreturn == 1)? JsonUtils.Serialize(_tobj):"0";// $"RedisDB:{dbComponent.InstanceId}  从数据库返回的数据 ";

			reply();
		}
		 
	}
}
