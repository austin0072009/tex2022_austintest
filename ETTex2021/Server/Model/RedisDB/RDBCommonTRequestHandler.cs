using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Common.Serialization;
using ETModel.Script.CsScript.Action;
using System;

namespace ETModel
{
    [MessageHandler(AppType.RedisDB)]
	public class RDBCommonTRequestHandler : AMRpcHandler<RedisDB_CommonTRequest, RedisDB_CommonTReply>  
	{
		protected override async ETTask Run(Session session, RedisDB_CommonTRequest request, RedisDB_CommonTReply response, Action reply)
		{  
			if (!CacheFactory.RedisDBSuccess) { Log.Debug($" RedisDB boot error!DB_CommonFunRequest"); return ; }
			try
			{
				string tname = "ETModel.Script.Model." + request.TName;
				var t = Type.GetType(tname);
				
				Type pt = typeof(BaseBrigeHelper);
				string method = request.funname;
				var alltryre = pt.GetMethod(method);

				object[] args = new object[1];
				args[0] = JsonUtils.Deserialize(request.data, t);
				object _tobj = alltryre.Invoke(null, args);
				response.Message = JsonUtils.Serialize(_tobj);
			}
			catch (Exception ex)
			{
				TraceLogEx.Error(ex, "202009093 request.funname：" + request.funname);
				response.Error = ErrorCode.ERR_ReadDBError;
			}
			reply();
		}
		 
	}
}
