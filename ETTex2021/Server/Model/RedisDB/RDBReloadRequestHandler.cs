using ETModel.Framework.Cache.Generic;
using ETModel.Script.CsScript.Action;
using System;

namespace ETModel
{
    [MessageHandler(AppType.RedisDB)]
	public class RDBReloadRequestHandler : AMRpcHandler<RedisDB_ReloadRequest, RedisDB_ReloadReply>  
	{
		protected override async ETTask Run(Session session, RedisDB_ReloadRequest request, RedisDB_ReloadReply response, Action reply)
		{
			RedisDBComponent dbComponent = Game.Scene.GetComponent<RedisDBComponent>();
			Console.Write($"RDBReloadRequestHandler 获取请求：{request.TName},");			
			if (!CacheFactory.RedisDBSuccess) { Log.Debug($" RedisDB boot error!RedisDB_ReloadRequest"); return; }
			try
			{
				string tname = "ETModel.Script.Model." + request.TName;
				var t = Type.GetType(tname);

				Type pt = typeof(BaseBrigeHelper); 
				
				string method = "";
				if (request.personal == 1) method = "ReLoadBase";
				else method = "ReLoad";

				var alltryre = pt.GetMethod(method);
				alltryre = alltryre.MakeGenericMethod(t); 
				object _tobj2 = alltryre.Invoke(null, null);
				response.Message = "1";// $"RedisDB:{dbComponent.InstanceId}  从数据库返回的数据 ";
			}
			catch (Exception ex)
			{
				Log.Fatal(ex);
			}
			reply();
		}
		 
	}
}
