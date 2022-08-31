using ETModel.Script.CsScript.Action;
using GameSystem;
using System;

namespace ETModel
{
    public interface IGateRequest : IRequest
    {
        long GateSessionID { get; set; }
    }
    public static class UnitHelper
    {
        public static bool TryGetGateSession(this Unit unit, out Session session, out long GateSessionID)
        {
            GateSessionID = 0;
            session = null;
            try
            {
                if (unit == null) return false;
                var unitGateComponent = unit.GetComponent<UnitGateComponent>();
                if (unitGateComponent == null || unitGateComponent.GateSessionActorId <= 0) return false;
                GateSessionID = unitGateComponent.GateSessionActorId;
                var ip = StartConfigComponent.Instance.GetInnerAddress(IdGenerater.GetAppId(GateSessionID));
                if (ip == null) return false;
                session = Game.Scene.GetComponent<NetInnerComponent>().Get(ip);
            }
            catch (Exception ex) { TraceLogEx.Error(ex, "通过[" + unit.GetObjectInfo() + "]获取Gate连接发生异常"); }
            return session != null;
        }



        public async static void SendMessage(int userid, IActorMessage message)
        {
            var unit = await Game.Scene.GetComponent<LobbyProxyComponent>().GetUnitFromMapAsync(userid);
            if (unit.TryGetGateSession(out Session session, out long id)) { message.ActorId = id; session.Send(message); }
        }
        public async static ETTask<Response> CallGate<Response>(this Unit unit, IRequest request) where Response : IResponse
        {
            if (unit.TryGetGateSession(out Session session, out long id)) return (Response)await session.Call(request);
            return default;
        }
        public async static ETTask<Response> CallGate<Response>(int userid, IRequest request) where Response : IResponse
        {
            var unit = await Game.Scene.GetComponent<LobbyProxyComponent>().GetUnitFromMapAsync(userid);
            return await unit.CallGate<Response>(request);
        }
    }
}
