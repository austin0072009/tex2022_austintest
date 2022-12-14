using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Common.Serialization;
using ETModel.Framework.Game.Sns;
using ETModel.Script.CsScript.Action;
using System;
namespace ETModel
{
    [MessageHandler(AppType.RedisDB)]
    public class RDBLoginRequestHandler : AMRpcHandler<RedisDB_LoginRequestMessage, RedisDB_LoginReplyMessage>
    {
        protected override async ETTask Run(Session session, RedisDB_LoginRequestMessage request, RedisDB_LoginReplyMessage response, Action reply)
        {
            Console.WriteLine($"收到DB请求...RedisDB_LoginRequestMessage \n");
            try
            {
                if (!CacheFactory.RedisDBSuccess) { Log.Debug($" RedisDB boot error!RedisDB_LoginRequestMessage"); reply(); return; }
                //Console.Write($"收到DB处理请求：{request.Message},在这里处理数据保存或读取 ");
                var snsUser = await SnsManager.LoginByMobile(request.pid, request.pwd);
                if (snsUser == null)
                {
                    response.Error = ErrorCode.ERR_AccountOrPasswordError;
                    response.UserID = 0;
                    reply();
                    return;
                }
                response.Message = JsonUtils.Serialize(snsUser);
                response.UserID = snsUser.UserId;
                Console.WriteLine($" ...RedisDB_LoginRequestMessage Message:" + response.Message);
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "202009032");
                response.Error = ErrorCode.ERR_ReadDBError;
            }
            reply();
        }
    }
}