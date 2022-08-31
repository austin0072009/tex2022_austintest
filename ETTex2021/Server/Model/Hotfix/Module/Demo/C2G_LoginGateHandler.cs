using ETModel.Script.CsScript.Action;
using System;
using System.Collections.Generic;
using System.Net;

namespace ETModel
{
    [MessageHandler(AppType.Gate)]
    public class C2G_LoginGateHandler : AMRpcHandler<C2G_LoginGate, G2C_LoginGate>
    {
        protected override async ETTask Run(Session session, C2G_LoginGate request, G2C_LoginGate response, Action reply)
        {
            GateSessionKeyComponent _gates = Game.Scene.GetComponent<GateSessionKeyComponent>();
            string account = _gates.Get(Convert.ToInt64(request.Key));
            if (account == null)
            {
                response.Error = ErrorCode.ERR_ConnectGateKeyError;
                response.Message = "Gate key验证失败!";
                reply();
                return;
            }
            int userid = Convert.ToInt32(account);
            var oldplayer = await RepeatLogin(session, userid); //Game.Scene.GetComponent<PlayerComponent>().GetByUserID(userid);
            if (oldplayer == null)
            {
                oldplayer = ComponentFactory.Create<Player, string, int>(account, userid);
                Game.Scene.GetComponent<PlayerComponent>().Add(oldplayer);
            }
            session.AddComponent<SessionPlayerComponent>().Player = oldplayer;
            Console.WriteLine("...............C2G_LoginGate sessinId:" + session.InstanceId + " session count:" + _gates.SessionCount);
            session.AddComponent<MailBoxComponent, string>(MailboxType.GateSession);
            //CreateUnit(session, oldplayer);
            response.PlayerId = oldplayer.Id;
            TraceLogEx.Log("连接[" + session.InstanceId + "]的登录,与用户[" + userid + "]绑定成功 session count:" + _gates.SessionCount);
            reply();

            //session.Send(new G2C_TestHotfixMessage() { Info = "recv hotfix message success" });
            await ETTask.CompletedTask;
        }
        int _index = 0;
        async void CreateUnit(Session session, Player player)
        {
            List<StartConfig> maps = StartConfigComponent.Instance.MapConfigs;
            IPEndPoint mapAddress;
            if (maps.Count > 1)
            {
                if (_index == 0) _index = 1;
                else _index = 0;
                mapAddress = maps[_index].GetComponent<InnerConfig>().IPEndPoint;
            }
            else mapAddress = maps[0].GetComponent<InnerConfig>().IPEndPoint;
            Session mapSession = Game.Scene.GetComponent<NetInnerComponent>().Get(mapAddress);
            M2G_CreateUnit createUnit = (M2G_CreateUnit)await mapSession.Call(new G2M_CreateUnit() { PlayerId = player.UserID, GateSessionId = session.InstanceId,ClientAddress = session.RemoteClientAddress.ToString() });
            player.UnitId = createUnit.UnitId;
            Game.Scene.GetComponent<ActorLocationSenderComponent>().Get(createUnit.UnitId)?.Send(new G2M_SessionDisconnect() { Type = 1 }).Coroutine();
        }

        private async ETTask<Player> RepeatLogin(Session session, int userid)
        {
            try
            {
                Log.Debug($"玩家地址为[{session.RemoteClientAddress}]登陆服务器[{session.RemoteAddress}]");
                Console.WriteLine($"--------客户端IP{session.RemoteClientAddress}");
                var mapip = IPManager.Ins.IPGroups[AppType.Map][0];
                var mapsession = Game.Scene.GetComponent<NetInnerComponent>().Get(mapip);
                M2SG_GetUnitResponse redisDB_RPCResponse = (M2SG_GetUnitResponse)await mapsession.Call(new SG2M_GetUnitResponse { userid = userid });
                Unit _targetunit = redisDB_RPCResponse._unit;
                if (_targetunit == null) return null;
                if (!_targetunit.TryGetGateSession(out Session gatesession, out long GateSessionID)) return null;
                TraceLogEx.Log("连接[" + session.InstanceId + "]的登录，引发玩家[" + userid + "]UnitId[" + _targetunit.Id + "]原连接[" + GateSessionID + "]被顶号");
                //顶号逻辑
                var rsp = (G2G_GetPlayerResponse)await gatesession.Call(new G2G_GetPlayerRequest { GateSessionId = GateSessionID, UnitID = _targetunit.Id, UserID = _targetunit.UserID,Message= "账号在其他地方登录" });
                if (rsp == null) return null;
                if (rsp.player != null) { rsp.player.UnitId = 0; Game.Scene.GetComponent<PlayerComponent>().Add(rsp.player); }
                return rsp.player;
            }
            catch (Exception ex) { TraceLogEx.Error(ex, "获取玩家[" + userid + "]信息(用于处理顶号逻辑)发生异常"); }
            return null;
        }
    }
}