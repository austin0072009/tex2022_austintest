using System;
using ETModel;
using ETModel.Framework.Cache.Generic;
using ETModel.Script.CsScript.Action;

using ETModel.Framework.Common.Serialization;

namespace ETModel
{
	[MessageHandler(AppType.RedisDB)]
	public class RDBGetListTAllRequestHandler : AMRpcHandler<RedisDB_GetListTAllRequest, RedisDB_GetListTAllReply>
	{
		protected override async ETTask Run(Session session, RedisDB_GetListTAllRequest request, RedisDB_GetListTAllReply response, Action reply)
		{
			RedisDBComponent dbComponent = Game.Scene.GetComponent<RedisDBComponent>();
			Console.Write($"收到DB请求...RedisDBGetListTAllRequestHandler"); 
			if (!CacheFactory.RedisDBSuccess) { Log.Debug($" RedisDB boot error!RedisDB_GetListTAllRequest"); return; }

			string tname = "ETModel.Script.Model." + request.TName;
			var t = Type.GetType(tname);

			Type pt = typeof(BaseBrigeHelper); 

			var all = pt.GetMethod("GetShareAllFun");
			all = all.MakeGenericMethod(t);

			object _tobj = all.Invoke(null, null);
			response.Message = JsonUtils.Serialize(_tobj);// $"RedisDB:{dbComponent.InstanceId}  从数据库返回的数据 ";

			reply(); 
		}
	}
}