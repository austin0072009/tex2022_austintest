using System;
using ETModel;
using ETModel.Framework.Cache.Generic;
using ETModel.Script.CsScript.Action;

using ETModel.Framework.Common.Serialization;

namespace ETModel
{
	[MessageHandler(AppType.RedisDB)]
	public class USGetRequestHandler : AMRpcHandler<US_GetRequest, US_GetReply>
	{
		protected override async ETTask Run(Session session, US_GetRequest request, US_GetReply response, Action reply)
		{
			RedisDBComponent dbComponent = Game.Scene.GetComponent<RedisDBComponent>();
			Console.Write($"收到DB请求...US_GetRequest"); 
			if (!CacheFactory.RedisDBSuccess) { Log.Debug($" RedisDB boot error!US_GetRequest"); return; }

			Type pt = typeof(BaseBrigeHelper);
			string method = "";
            if (request.istry == 1) method = "TryGetUserStatus";
			else if (request.istry == 2) method = "GetAllUserStatus";
			else method = "GetUserStatusbyUserID";

            object _o = Activator.CreateInstance(pt);
			object[] args = new object[1];
			args[0] = request.userid;
			var all = pt.GetMethod(method);
			object _tobj = null;
            if (request.istry == 2)
            {
				_tobj = all.Invoke(null, null);
			}
            else
            {
				_tobj = all.Invoke(null, args);
			}
			response.Message = JsonUtils.Serialize(_tobj);// $"RedisDB:{dbComponent.InstanceId}  从数据库返回的数据 ";

			reply();
		}
	}
}