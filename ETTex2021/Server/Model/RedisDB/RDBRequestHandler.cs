using System;
using ETModel;
using ETModel.Framework.Cache.Generic;

namespace ETModel
{
	[MessageHandler(AppType.RedisDB)]
	public class RDBRequestHandler : AMRpcHandler<RedisDB_RPCRequest, RedisDB_RPCResponse>
	{
		protected override async ETTask Run(Session session, RedisDB_RPCRequest request, RedisDB_RPCResponse response, Action reply)
		{
			RedisDBComponent dbComponent = Game.Scene.GetComponent<RedisDBComponent>();
			Console.Write($"收到DB处理请求：{request.Message},在这里处理数据保存或读取 ");
			if (!CacheFactory.RedisDBSuccess) { Log.Debug($" RedisDB boot error!RedisDB_RPCRequest"); return; }
			response.Message = $"RedisDB:{dbComponent.InstanceId}  从数据库返回的数据 ";
			reply();
		}
	}
}