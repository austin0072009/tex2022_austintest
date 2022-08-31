using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Common.Serialization;
using ETModel.Script.CsScript.Action;
using System;
using System.Collections.Generic;
using System.Reflection;

namespace ETModel
{
    [MessageHandler(AppType.RedisDB)]
    public class RDBCommonFun2RequestHandler : AMRpcHandler<DB_CommonFun2Request, DB_CommonFun2Reply>
    {
        Dictionary<string, KeyValuePair<MethodInfo, ParameterInfo[]>> methods = new Dictionary<string, KeyValuePair<MethodInfo, ParameterInfo[]>>();
        public RDBCommonFun2RequestHandler()
        {
            Type pt = typeof(BaseBrigeHelper);
            foreach (var info in pt.GetMethods())
            {
                methods.Add(info.Name, new KeyValuePair<MethodInfo, ParameterInfo[]>(info, info.GetParameters()));
            }
        }

        protected override async ETTask Run(Session session, DB_CommonFun2Request request, DB_CommonFun2Reply response, Action reply)
        {
            Console.Write($"收到DB 获取请求：{request.funname},");
            if (!CacheFactory.RedisDBSuccess) { Log.Debug($" RedisDB boot error!DB_CommonFun2Request"); return; }
            try
            {
                if (methods.TryGetValue(request.funname, out KeyValuePair<MethodInfo, ParameterInfo[]> mp))
                {
                    response.Message = JsonUtils.Serialize(mp.Key.Invoke(null, CommonFun.GetParams(mp.Value, request.para1, request.para2)));
                }
                else
                {
                    TraceLogEx.Error("202009033 not found request.funname：" + request.funname);
                    response.Error = ErrorCode.ERR_RpcFail;
                }

                //Type pt = typeof(BaseBrigeHelper);
                //string method = request.funname;
                //var alltryre = pt.GetMethod(method);
                //object[] args = CommonFun.GetParams(alltryre.GetParameters(), request.para1, request.para2);
                //object _tobj = alltryre.Invoke(null, args);
                //response.Message = JsonUtils.Serialize(_tobj);
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "202009033 request.funname：" + request.funname);
                response.Error = ErrorCode.ERR_ReadDBError;
            }
            reply();
        }



    }
}
