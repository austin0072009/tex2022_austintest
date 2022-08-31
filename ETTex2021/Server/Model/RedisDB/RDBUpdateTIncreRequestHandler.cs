using ETModel.Framework.Cache.Generic;
using ETModel.Script.CsScript.Action;
using Model.Scut_Script.Common;
using System;
using System.Reflection;

namespace ETModel
{
    [MessageHandler(AppType.RedisDB)]
    public class RDBUpdateTIncreRequestHandler : AMRpcHandler<RedisDB_UpdateTIncreRequest, RedisDB_UpdateTIncreReply>
    {
        protected override async ETTask Run(Session session, RedisDB_UpdateTIncreRequest request, RedisDB_UpdateTIncreReply response, Action reply)
        {
            RedisDBComponent dbComponent = Game.Scene.GetComponent<RedisDBComponent>();
            Console.WriteLine($"RedisDB_UpdateTIncreRequest 获取请求：{request.TName},");
            if (!CacheFactory.RedisDBSuccess) { Log.Debug($" RedisDB boot error!RedisDB_UpdateTIncreRequest"); return; }
            string tname = "ETModel.Script.Model." + request.TName;
            Type t = Type.GetType(tname);
            try
            {
                Type pt = typeof(BaseBrigeHelper);
                object _tobj = pt.GetMethod("GetBaseT").MakeGenericMethod(t).Invoke(null, new object[] { request.pval.ToString() });
                //if (_tobj == null) _tobj = pt.GetMethod("UpdateTIncre").MakeGenericMethod(t).Invoke(null, new object[] { request.TName, request.FName, request.addval, request.pval });
                if (_tobj != null)
                {
                    var info = _tobj.GetType().GetProperty(request.FName);
                    CommonFun.NumberIncrease(_tobj, info, request.addval);
                    pt.GetMethod("AddOrUpdateBase").MakeGenericMethod(t).Invoke(null, new object[] { _tobj });
                    response.val = Convert.ToInt64(_tobj.GetType().GetProperty(request.FName).GetValue(_tobj));
                    Type gec = typeof(GameEntityCache);
                    gec.GetMethod("SendBroadcastCache").MakeGenericMethod(t).Invoke(null, new object[] { _tobj });
                    //GameEntityCache.Instance.SendBroadcastCache(_tobj);
                }
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "202101271755");
                response.Message = "执行更新时发生错误";
                response.Error = -111111;
                response.val = -999999999;
            }
            response.Message = "0";

            reply();
        }

    }
}
