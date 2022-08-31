using ETModel.Framework.Common.Serialization;
using ETModel.Framework.Game.Contract.Action;
using Google.Protobuf.Collections;
using System;

namespace ETModel
{
    [MessageHandler(AppType.Gate)]
    public class G2G_GetPlayerInfoHandler : AMRpcHandler<G2G_GetPlayerRequest, G2G_GetPlayerResponse>
    {
        protected async override ETTask Run(Session session, G2G_GetPlayerRequest request, G2G_GetPlayerResponse response, Action reply)
        {
            var oldsession = Game.EventSystem.Get(request.GateSessionId) as Session;
            if (oldsession != null)
            {
                response.player = Game.Scene.GetComponent<PlayerComponent>().GetByUserID((int)request.UserID);
                oldsession.Send(new SS2C_ActorMessage { Info = new RepeatedField<BroadcastInfo> { new BroadcastInfo { Message = JsonUtils.Serialize(new sc_offline_n { result = -444444, message = request.Message }) } } });
                //oldsession.Send(new SS2C_ActorRPCReply { Message = JsonUtils.Serialize(new sc_base { fn = "sc_offline_n", result = -444444, message = "账号在其他地方登录" }) });
                oldsession.Dispose();
            }
            reply();
        }
    }
}

