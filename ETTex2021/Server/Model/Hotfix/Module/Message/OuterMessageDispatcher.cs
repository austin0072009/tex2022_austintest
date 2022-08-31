using System;

namespace ETModel
{
    public class OuterMessageDispatcher : IMessageDispatcher
    {
        public void Dispatch(Session session, ushort opcode, object message)
        {
            DispatchAsync(session, opcode, message).Coroutine();
        }

        public async ETVoid DispatchAsync(Session session, ushort opcode, object message)
        {
            SessionHeartbeatComponent sessionHeartbeatComponent = session.GetComponent<SessionHeartbeatComponent>();
            SessionUserComponent sessionUserComponent = session.GetComponent<SessionUserComponent>();
            if (sessionHeartbeatComponent == null)
            {
                session.Dispose();//心跳组件 没有 直接销毁
                return;
            }
            sessionHeartbeatComponent.UpReceiveMessageDistance = 0;//重置上次收到消息的时间
                                                                   //如果没有挂载SessionUserComponent组件 需要判断一下是不是登陆消息
            if (sessionUserComponent == null)
            {
                ////if (message.GetType() != typeof(C2G_GateLogin) && message.GetType() != typeof(C2R_CommonLogin))
                ////{
                ////	session.Dispose();//发其他 消息 却没有 SessionUserComponent 组件 绝对不走正常
                ////	return;
                ////}
            }
            //如果收到 一秒收到的消息 大于规定的消息 就认定是DOSS攻击 直接销毁
            if (++sessionHeartbeatComponent.SecondTotalMessageNum >=
                SessionHeartbeatComponent.DestroySeesiontSecondTotalNum)
            {
                //断开连接
                sessionHeartbeatComponent.DisposeSession();
                //直接封号
                //  UserHelp.StopSealOrRelieve(sessionUserComponent.UserId,true,"DOSS攻击封号"); //不要封号容易误封
                return;
            }
            // 根据消息接口判断是不是Actor消息，不同的接口做不同的处理
            switch (message)
            {
                case IActorLocationRequest actorLocationRequest: // gate session收到actor rpc消息，先向actor 发送rpc请求，再将请求结果返回客户端
                    {
                        var sessionp = session.GetComponent<SessionPlayerComponent>();
                        if (sessionp == null)
                        {
                            Log.Error(" 2021040810061 sessionp is null msg:" + JsonHelper.ToJson(message));
                            break;
                        }
                        long unitId = sessionp.Player.UnitId;
                        ActorLocationSender actorLocationSender = Game.Scene.GetComponent<ActorLocationSenderComponent>().Get(unitId);

                        int rpcId = actorLocationRequest.RpcId; // 这里要保存客户端的rpcId
                        long instanceId = session.InstanceId;
                        IResponse response = await actorLocationSender.Call(actorLocationRequest);
                        response.RpcId = rpcId;

                        // session可能已经断开了，所以这里需要判断
                        if (session.InstanceId == instanceId)
                        {
                            session.Reply(response);
                        }

                        break;
                    }
                case IActorLocationMessage actorLocationMessage:
                    {
                        var sessionp = session.GetComponent<SessionPlayerComponent>();
                        if (sessionp == null)
                        {
                            Log.Error(" 2021040810062 sessionp is null msg:" + JsonHelper.ToJson(message));
                            break;
                        }
                        long unitId = sessionp.Player.UnitId;
                        ActorLocationSender actorLocationSender = Game.Scene.GetComponent<ActorLocationSenderComponent>().Get(unitId);
                        actorLocationSender.Send(actorLocationMessage);
                        break;
                    }
                case IActorRequest actorRequest:  // 分发IActorRequest消息，目前没有用到，需要的自己添加
                    {
                        break;
                    }
                case IActorMessage actorMessage:  // 分发IActorMessage消息，目前没有用到，需要的自己添加
                    {
                        break;
                    }
                case C2G_Heartbeat c2GHeartbeat: //不知道为啥心跳要加在这儿
                    {
                        var current = DateTime.Now;
                        session.Send(new G2C_Heartbeat { RpcId = c2GHeartbeat.RpcId, ServerTime = current.Day * 1000000 + current.Hour * 10000 + current.Minute * 100 + current.Second });
                        break;
                    }
                default:
                    {
                        // 非Actor消息
                        Game.Scene.GetComponent<MessageDispatcherComponent>().Handle(session, new MessageInfo(opcode, message));
                        break;
                    }
            }
        }
    }
}
