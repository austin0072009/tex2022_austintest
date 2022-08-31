using System;
using ETModel;
using ETModel.Framework.Cache.Generic;
using ETModel.Script.CsScript.Action;

using ETModel.Framework.Common.Serialization;

namespace ETModel
{
	[MessageHandler(AppType.RedisDB)]
	public class RobotAddorUpdateRequestHandler : AMRpcHandler<Robot_AddOrUpdateRequest, Robot_AddOrUpdateReply>
	{
		protected override async ETTask Run(Session session, Robot_AddOrUpdateRequest request, Robot_AddOrUpdateReply response, Action reply)
		{ 
			Console.Write($"收到DB请求...US_AddOrUpdateRequest"); 
			if (!CacheFactory.RedisDBSuccess) { Log.Debug($" RedisDB boot error!US_AddOrUpdateRequest"); return; }

			Type pt = typeof(BaseBrigeHelper);
			string method = "RobotCallback"; 

			object _o = Activator.CreateInstance(pt);
			object[] args = new object[1];
			args[0] = JsonUtils.Deserialize<UserStatus>(request.data);
			var all = pt.GetMethod(method); 
			object _tobj = all.Invoke(null, args);
			response.Message ="1" ;// $"RedisDB:{dbComponent.InstanceId}  从数据库返回的数据 ";

			reply();
		}
	}
}