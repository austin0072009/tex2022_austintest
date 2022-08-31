using ETModel.Script.CsScript.Action;
using System;
using System.Net;

namespace ETModel
{
    [MessageHandler(AppType.Realm)]
    public class C2R_LoginHandler : AMRpcHandler<C2R_Login, R2C_Login>
    {
        protected override async ETTask Run(Session session, C2R_Login request, R2C_Login response, Action reply)
        {

            var user = await Game.Scene.GetComponent<RedisDBProxyComponent>().Login(request.Account, request.Password);
            if (user == null)
            {
                response.Error = ErrorCode.ERR_AccountOrPasswordError;
                reply();
                return;
            }

            if (user != null && TokenManager.instanceBase.NeedVali(user.UserId))
            {

                if (!TokenManager.instanceBase.TokenVali(user.UserId, request.Token))
                {
                    response.Error = ErrorCode.ERR_Fail;
                    reply();
                    TraceLogEx.Log("拒绝访问:" + user.UserId);
                    return;
                }
            }
            //if (user != null && TokenManager.instanceBase.IsExist(user.UserId))
            //{
            //    TokenManager.instanceBase.DeleteToken(user.UserId);
            //}


            // 随机分配一个Gate
            StartConfig config = Game.Scene.GetComponent<RealmGateAddressComponent>().GetAddress();
            //Log.Debug($"gate address: {MongoHelper.ToJson(config)}");
            IPEndPoint innerAddress = config.GetComponent<InnerConfig>().IPEndPoint;
            Session gateSession = Game.Scene.GetComponent<NetInnerComponent>().Get(innerAddress);

            // 向gate请求一个key,客户端可以拿着这个key连接gate
            G2R_GetLoginKey g2RGetLoginKey = (G2R_GetLoginKey)await gateSession.Call(new R2G_GetLoginKey() { Account = user.UserId.ToString() });
            string outerAddress = config.GetComponent<OuterConfig>().Address2;
            if (session.protocol == NetworkProtocol.WebSocket) { outerAddress = config.GetComponent<OuterConfig>().ws2; }
            
            response.Address = outerAddress;
            response.Key = Convert.ToString(g2RGetLoginKey.Key);
            response.Userid = user.UserId;// snsUser.UserId;
            reply();
        }
    }
}