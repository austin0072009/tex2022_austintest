using ETModel.Framework.Common.Serialization;
using ETModel.Script.CsScript.Action;
using GameSystem;
using Microsoft.VisualStudio.Services.CircuitBreaker;
using Model.Scut_Script.GameMessage;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;

namespace ETModel
{
    public abstract class GameActorHandler : Component, IMHandler
    {
        public BaseTable table;
        public bool IsTableCommond(string command)
        {
            if (table == null) return false;
            return table.IsTableCommond(command);
        }
        public abstract ETVoid Handle(Session session, object actorMessage);
        public abstract Type GetMessageType();
        public abstract ETTask Receive(IGameRequest request);
        public int GetTableID() { if (table == null) return -1; return table._tableid; }
    }
    public class GameActorLocationRpcHandler  : GameActorHandler  
    {
        ConcurrentQueue<IGameRequest> queue = new ConcurrentQueue<IGameRequest>();
        private AtomicBoolean IsLock = new AtomicBoolean();
        public void Awake()
        {
        }
        public override Type GetMessageType()
        {
            return typeof(GameRequest);
        }
        Dictionary<int, Session> sessions = new Dictionary<int, Session>();

        public override async ETVoid Handle(Session session, object actorMessage)
        {
            await Receive(new ClientRequest(session, actorMessage));
        }
        public override async ETTask Receive(IGameRequest request)
        {
            try
            {
                if (IsLock)
                {
                    queue.Enqueue(request);
                }
                else if (queue.Count > 0)
                {
                    queue.Enqueue(request);
                    await Run();
                }
                else
                {
                    await Run(request);
                }
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "202106032140 接收消息发生异常，消息[" + request.GetObjectInfo() + "]");
            }
        }
        private async ETTask Run(IGameRequest request = null)
        {
            bool oldlock = IsLock;
            if (!IsLock.CompareAndSet(false, true) && (oldlock || !IsLock))
            {
                if (request != null) queue.Enqueue(request);
                TraceLogEx.Error("202106031852 执行锁判断异常，消息[" + request.GetObjectInfo() + "]在锁住的情况被执行,原状态为" + oldlock + ",当前锁状态" + IsLock);
                return;
            }
            bool IsRun = false;
            try
            {
                if (request != null || (queue.TryDequeue(out request) && request != null))
                {
                    IsRun = true;
                    if (request is ClientRequest)
                    {
                        var req = request as ClientRequest;
                        await OuterTableRun(req.session, req.message);
                    }
                    else
                    {
                        await InnerTableRun(request as InnerRequest);
                    }
                }
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "202106032140 执行消息发生异常，消息[" + request.GetObjectInfo() + "]");
            }
            IsLock.Exchange(false);
            if (IsRun) await Run();
        }

        private async ETTask OuterTableRun(Session session, object actorMessage)
        {
            GameRequest request = null;
            try
            {
                request = actorMessage as GameRequest;
                if (request == null) { Log.Error($"消息类型转换错误: {actorMessage.GetType().FullName} to {typeof(GameData).Name}"); return; }
                int rpcId = request.RpcId;
                long instanceId = session.InstanceId;
                Lobby_CommonFun2Reply response = Activator.CreateInstance<Lobby_CommonFun2Reply>();

                void Reply()
                {
                    // 等回调回来,session可以已经断开了,所以需要判断session InstanceId是否一样
                    if (session.InstanceId != instanceId)
                    {
                        return;
                    }
                    response.RpcId = rpcId;
                    session.Reply(response);
                }

                try
                {
                    sessions[request.userid] = session;
                    response.Message = await table.execute(request.userid, request);
                    if (response.Message.IsNullOrWhiteSpace())
                    {
                        TraceLogEx.Log("消息[" + request.GetObjectInfo() + "]处理结果为空");
                    }
                    Reply();
                }
                catch (Exception exception)
                {
                    TraceLogEx.Error(exception, "处理客户端消息[" + JsonUtils.Serialize(request) + "]发生异常:");
                    response.Error = ErrorCode.ERR_RpcFail;
                    response.Message = "处理客户端消息发生未处理异常";
                    Reply();
                }
            }
            catch (Exception e)
            {
                Log.Error($"解释消息失败: {actorMessage.GetType().FullName}\n{e}");
            }
            //if (request != null) Game.Scene.GetComponent<TableComponent>()?.PrintUserStatusError(request.userid, request.data);
        }

        private async ETTask InnerTableRun(InnerRequest request)
        {
            if (request.InnerId == table.manager.InnerId)
            { 
                if (request is InnerCommand)
                {
                    var command = request as InnerCommand;
                    await table.execute(command.userid, command.cs, command.content);
                }
                else if (request is ProcessEnd)
                {
                    var command = request as ProcessEnd;
                    await table.manager.End(command.ProcessIndex);
                }
            }
            else
            {
                TraceLogEx.Error( base.table._gameid + "内部命令执行失败,编号[" + table.manager.InnerId + "]错误" +" : " + JsonUtils.Serialize(request));
            }
        }

    }
}
