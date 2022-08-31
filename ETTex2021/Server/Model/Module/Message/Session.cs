using ETModel.Script.CsScript.Action;
using GameSystem;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading;

namespace ETModel
{
    [ObjectSystem]
    public class SessionAwakeSystem : AwakeSystem<Session, AChannel>
    {
        public override void Awake(Session self, AChannel b)
        {
            self.Awake(b);
        }
    }

    public sealed class Session : Entity
    {
        private static int RpcId { get; set; }
        private AChannel channel;

        private readonly Dictionary<int, Action<IResponse>> requestCallback = new Dictionary<int, Action<IResponse>>();
        private readonly byte[] opcodeBytes = new byte[2];
        // 协议类型（为以后逻辑做区分 2020/12/7）
        public NetworkProtocol protocol;
        public NetworkComponent Network
        {
            get
            {
                return this.GetParent<NetworkComponent>();
            }
        }

        public int Error
        {
            get
            {
                return this.channel.Error;
            }
            set
            {
                this.channel.Error = value;
            }
        }
        public NetworkComponent _network;
        public void Awake(AChannel aChannel)
        {
            this.channel = aChannel;
            this.requestCallback.Clear();
            long id = this.Id;
            _network = Network;
            try
            {
                channel.ErrorCallback += (c, e) =>
                {
                    if (protocol.Equals(NetworkProtocol.TCP)) Console.WriteLine("因异常[" + e + "]关闭TCP[" + ((TChannel)channel).GetIP() + "]连接:" + this.Id);
                    this._network.Remove(id);
                };
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
            channel.ReadCallback += this.OnRead;
            // 初始化协议类型为以后逻辑做区分 2020/12/7
            if (channel.GetType() == typeof(WChannel))
            {
                protocol = NetworkProtocol.WebSocket;
                Console.WriteLine("创建WebSocket[" + ((WChannel)channel).GetIP() + "]连接:" + this.Id);
            }
            else if (channel.GetType() == typeof(KChannel))
            {
                protocol = NetworkProtocol.KCP;
            }
            else
            {
                protocol = NetworkProtocol.TCP;
                Console.WriteLine("创建TCP[" + ((TChannel)channel).GetIP() + "]连接:" + this.Id);
            }
        }

        public override void Dispose()
        {
            if (this.IsDisposed)
            {
                return;
            }
            if (protocol.Equals(NetworkProtocol.TCP))
            {
                //Console.WriteLine(string.Format("datetime：{0}", DateTime.Now.ToString("G")));
                //StackTrace st = new StackTrace(true);
                //for (int i = 0; i < st.FrameCount; i++)
                //{
                //    int line = st.GetFrame(i).GetFileLineNumber();
                //    if (line != 0) Console.WriteLine(string.Format("at：{0}的{1}行", st.GetFrame(i).GetFileName(), line));
                //}
            }
            this._network.Remove(this.Id);

            base.Dispose();

            foreach (Action<IResponse> action in this.requestCallback.Values.ToArray())
            {
                if (action == null)
                {
                    TraceLogEx.Error(" action == null ...");
                    continue;
                }
                action.Invoke(new ErrorResponse { Error = this.Error });
            }

            //int error = this.channel.Error;
            //if (this.channel.Error != 0)
            //{
            //	Log.Trace($"session dispose: {this.Id} ErrorCode: {error}, please see ErrorCode.cs!");
            //}

            this.channel.Dispose();

            this.requestCallback.Clear();
        }

        public void Start()
        {
            this.channel.Start();
        }

        public IPEndPoint RemoteAddress
        {
            get
            {
                return this.channel.RemoteAddress;
            }
        }

        public IPEndPoint RemoteClientAddress
        {
            get
            {
                string strAddress = "";
                if (channel.GetType() == typeof(WChannel))
                {
                    strAddress = ((WChannel)channel).GetIP();
                }
                else
                {
                    strAddress = ((TChannel)channel).GetIP();
                }
                if (strAddress == "")
                {
                    return this.channel.RemoteAddress;
                }
                else
                {
                    return IPEndPoint.Parse(strAddress);
                }
            }
        }

        public ETChannelType ChannelType
        {
            get
            {
                return this.channel.ChannelType;
            }
        }

        public MemoryStream Stream
        {
            get
            {
                return this.channel.Stream;
            }
        }

        public void OnRead(MemoryStream memoryStream)
        {
            try
            {
                this.Run(memoryStream);
            }
            catch (Exception e)
            {
                Log.Error(e);
            }
        }

        private void Run(MemoryStream memoryStream)
        {
            // 打印收到的消息
            //memoryStream.Seek(Packet.MessageIndex, SeekOrigin.Begin);
            //byte[] bs = new byte[memoryStream.Length];
            //memoryStream.Read(bs,0,bs.Length);
            //ushort opcode = BitConverter.ToUInt16(memoryStream.GetBuffer(), Packet.OpcodeIndex);
            memoryStream.Seek(0, SeekOrigin.Begin);
            ushort opcode = memoryStream.ReadUInt16();
            var buff = memoryStream.ReadBytes();
            Run(opcode, buff);
        }

        public void Run(ushort opcode, byte[] buff)
        {
            var network = this.Network;
            if (network == null)
            {
                Log.Error(string.Format("opcode: {0} {1}  ip: {2} 202008221444 ", opcode, 0, this.RemoteAddress));
                return;
            }
            object message;
            OpcodeTypeComponent opcodeTypeComponent = network.Entity.GetComponent<OpcodeTypeComponent>();
            //消息头解析失败，给客户端一个反馈 2020/12/8
            if (opcodeTypeComponent.GetType(opcode) == null)
            {
                printRec("消息头[" + opcode + "]解析失败:" + buff.ToStr());
                Send("消息头解析失败");
                return;
            }
            object instance = opcodeTypeComponent.GetInstance(opcode);
            // 映射消息生成器失败打印日志 2020/12/8
            if (instance == null)
            {
                printRec("找不到消息生成器:" + buff.ToStr());
                Send("找不到消息生成器");
                return;
            }
            try
            {
                message = network.MessagePacker.DeserializeFrom(instance, buff, 0, buff.Length);
                if (message == null)
                {
                    printRec("消息反编译失败:" + buff.ToStr());
                    Send("消息反编译失败");
                    return;
                }
                else
                {
                    printRec(message);
                }
                if (OpcodeHelper.IsNeedDebugLogMessage(opcode))
                {
                    //Log.Msg(message); //请求日志暂时不打印
                }
            }
            catch (Exception e)
            {
                // 出现任何消息解析异常都要断开Session，防止客户端伪造消息
                Log.Error($"opcode: {opcode} {instance.GetType().Name} {network.Count} , ip: {this.RemoteAddress}\r\n反编译失败:\r\n{buff.ToStr()}\r\n{e}");
                this.Error = ErrorCode.ERR_PacketParserError;
                if (Network != null) Network.Remove(this.Id);
                TraceLogEx.Error(e, $"opcode: {opcode} {instance.GetType().Name} {network.Count} , ip: {this.RemoteAddress}\r\n反编译失败:\r\n{buff.ToStr()}\r\n{e}");
                return;
            }

            if (!(message is IResponse response))
            {
                network.MessageDispatcher.Dispatch(this, opcode, message);
                return;
            }
            try
            {
                Action<IResponse> action;
                if (!this.requestCallback.TryGetValue(response.RpcId, out action))
                {
                    throw new Exception($"not found rpc, response message: {StringHelper.MessageToStr(response)}");
                }
                this.requestCallback.Remove(response.RpcId);

                if (action != null) action(response); else TraceLogEx.Error("Response回调为空,Response信息：" + response.GetObjectInfo());
            }
            catch (Exception ex)
            {
                Log.Error($"opcode: {opcode} {instance.GetType().Name} {network.Count} , ip: {this.RemoteAddress}\r\n回复消息失败:\r\n{response.GetObjectInfo()}\r\n{ex}");
                this.Error = ErrorCode.ERR_PacketParserError;
                if (Network != null) Network.Remove(this.Id);
            }
        }

        public ETTask<IResponse> CallWithoutException(IRequest request)
        {
            int rpcId = ++RpcId;
            var tcs = new ETTaskCompletionSource<IResponse>();

            this.requestCallback[rpcId] = (response) =>
            {
                if (response is ErrorResponse errorResponse)
                {
                    Console.WriteLine($"session close, errorcode: {errorResponse.Error} {errorResponse.Message}");
                    //TraceLogEx.Error($"session close, errorcode: {errorResponse.Error} {errorResponse.Message}");
                    tcs.SetException(new Exception($"session close, errorcode: {errorResponse.Error} {errorResponse.Message}"));
                    return;
                }
                tcs.SetResult(response);
            };

            request.RpcId = rpcId;
            this.Send(request);
            return tcs.Task;
        }

        // 接收日志打印
        public void printRec(object obj, Exception e = null)
        {
            if (!NetworkProtocol.TCP.Equals(protocol))
            {
                if (!(obj is C2G_Heartbeat))
                    if (e == null)
                    {
                        Console.WriteLine("收到[" + protocol + "]客户端消息:" + obj.GetObjectInfo());
                    }
                    else
                    {
                        Console.WriteLine("收到[" + protocol + "]客户端消息:" + obj.GetObjectInfo(), e);
                    }
            }
            //else /*if (_network.AppType.Equals(AppType.Map) || _network.AppType.Equals(AppType.Gate))*/
            //{
            //    if (e == null)
            //    {
            //        Console.WriteLine("收到TCP[" + ((TChannel)channel).GetInfo() + "]," + CommonFun.getObjectInfo(obj));
            //    }
            //    else
            //    {
            //        Console.WriteLine("收到TCP[" + ((TChannel)channel).GetInfo() + "]," + CommonFun.getObjectInfo(obj), e);
            //    }
            //}
        }

        public void printSend(object obj, Exception e = null)
        {
            if (!NetworkProtocol.TCP.Equals(protocol))
            {
                if (!(obj is G2C_Heartbeat))
                {
                    string strValue = obj.GetObjectInfo();
                    if (strValue.IndexOf("sc_jackpot_n") > -1) return;
                    if (e == null)
                    {
                        Console.WriteLine(DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss.ffff") + "发送消息到[" + protocol + "]客户端," + strValue);
                    }
                    else
                    {
                        Console.WriteLine(DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss.ffff") + "发送消息到[" + protocol + "]客户端," + strValue, e);
                    }
                }
                    
            }
            //else /*if (_network.AppType.Equals(AppType.Map) || _network.AppType.Equals(AppType.Gate))*/
            //{
            //    if (e == null)
            //    {
            //        Console.WriteLine("发送消息到TCP[" + ((TChannel)channel).GetInfo() + "]," + CommonFun.getObjectInfo(obj));
            //    }
            //    else
            //    {
            //        Console.WriteLine("发送消息到TCP[" + ((TChannel)channel).GetInfo() + "]," + CommonFun.getObjectInfo(obj), e);
            //    }
            //}
        }

        public void printSend(byte[] bs)
        {
            if (!NetworkProtocol.TCP.Equals(protocol))
            {
                Console.WriteLine("发送消息到[" + protocol + "]客户端二进制," + bs.GetArrayInfo());
            }
            //else /*if (_network.AppType.Equals(AppType.Map) || _network.AppType.Equals(AppType.Gate))*/
            //{
            //    Console.WriteLine("发送消息到TCP[" + ((TChannel)channel).GetInfo() + "]二进制," + CommonFun.getArrayInfo(bs));
            //}
        }

        public ETTask<IResponse> CallWithoutException(IRequest request, CancellationToken cancellationToken)
        {
            int rpcId = ++RpcId;
            var tcs = new ETTaskCompletionSource<IResponse>();

            this.requestCallback[rpcId] = (response) =>
            {
                if (response is ErrorResponse errorResponse)
                {
                    Console.WriteLine($"session close, errorcode: {errorResponse.Error} {errorResponse.Message}");
                    //TraceLogEx.Error($"session close, errorcode: {errorResponse.Error} {errorResponse.Message}");
                    tcs.SetException(new Exception($"session close, errorcode: {errorResponse.Error} {errorResponse.Message}"));
                    return;
                }
                tcs.SetResult(response);
            };

            cancellationToken.Register(() => this.requestCallback.Remove(rpcId));

            request.RpcId = rpcId;
            this.Send(request);
            return tcs.Task;
        }

        public ETTask<IResponse> Call(IRequest request)
        {
            //return 	CallAsync(request);
            int rpcId = ++RpcId;
            var tcs = new ETTaskCompletionSource<IResponse>();

            try
            {
                this.requestCallback[rpcId] = (response) =>
                {
                    if (ErrorCode.IsRpcNeedThrowException(response.Error))
                    {
                        Console.WriteLine($"Rpc Error: {request.GetType().FullName} {response.Error}");
                        //TraceLogEx.Error($"Rpc Error: {request.GetType().FullName} {response.Error}");
                        tcs.SetException(new Exception($"Rpc Error: {request.GetType().FullName} {response.Error}"));
                        return;
                    }

                    tcs.SetResult(response);
                };
            }
            catch (Exception ex)
            {
                Log.Error(ex);
            }

            request.RpcId = rpcId;
            this.Send(request);
            return tcs.Task;
        }
        public ETTask<IResponse> CallAsync(IRequest request)
        {
            var tcs = new ETTaskCompletionSource<IResponse>();
            OneThreadSynchronizationContext.Instance.Post((obj) =>
            {
                int rpcId = ++RpcId;
                this.requestCallback[rpcId] = (response) =>
                {
                    if (ErrorCode.IsRpcNeedThrowException(response.Error))
                    {
                        Console.WriteLine($"Rpc Error: {request.GetType().FullName} {response.Error}");
                        //TraceLogEx.Error($"Rpc Error: {request.GetType().FullName} {response.Error}");
                        tcs.SetException(new Exception($"Rpc Error: {request.GetType().FullName} {response.Error}"));
                        return;
                    }

                    tcs.SetResult(response);
                };
                request.RpcId = rpcId;
                this.Send(request);
            }, request);

            return tcs.Task;
        }
        public void SyncTask(IRequest request, Action<IResponse> callback)
        {
            OneThreadSynchronizationContext.Instance.Post(async (obj) =>
           {
               var _data = await Call(request);
               callback(_data);
           }, request);
        }

        public ETTask<IResponse> Call(IRequest request, CancellationToken cancellationToken)
        {
            int rpcId = ++RpcId;
            var tcs = new ETTaskCompletionSource<IResponse>();

            this.requestCallback[rpcId] = (response) =>
            {
                if (ErrorCode.IsRpcNeedThrowException(response.Error))
                {
                    Console.WriteLine($"Rpc Error: {request.GetType().FullName} {response.Error}");
                    //TraceLogEx.Error($"Rpc Error: {request.GetType().FullName} {response.Error}");
                    tcs.SetException(new Exception($"Rpc Error: {request.GetType().FullName} {response.Error}"));
                }

                tcs.SetResult(response);
            };

            cancellationToken.Register(() => this.requestCallback.Remove(rpcId));

            request.RpcId = rpcId;
            this.Send(request);
            return tcs.Task;
        }
        //public ETTask<IResponse> CallTimeOut(IRequest request)
        //{
        //    CancellationTokenSource tokenSource = new CancellationTokenSource();
        //    Game.Scene.GetComponent<TimerComponent>().AddTimeEvents(4500, () =>
        //    {
        //        if (tokenSource != null) tokenSource.Cancel();
        //        //return new ErrorResponse() { Error = 4500 };
        //    });
        //    return Call(request, tokenSource.Token);
        //}
        public void Reply(IResponse message)
        {
            if (this.IsDisposed)
            {
                if (protocol.Equals(NetworkProtocol.TCP)) Console.WriteLine("TCP[" + ((TChannel)channel).GetIP() + "]，Session已经被Dispose了");
                throw new Exception("session已经被Dispose了");
            }

            this.Send(message);
        }

        public void Send(IMessage message)
        {
            OpcodeTypeComponent opcodeTypeComponent = _network.Entity.GetComponent<OpcodeTypeComponent>();
            ushort opcode = opcodeTypeComponent.GetOpcode(message.GetType());
            Send(opcode, message);
        }

        public async void SendRpc(IRequest request)
        {
            int rpcId = ++RpcId;
            var tcs = new ETTaskCompletionSource<ETVoid>();
            request.RpcId = rpcId;
            Send(request);
            await tcs.Task;
        }

        public void Send(string str)
        {
            Send(str.ToBytes().ToArray());
        }

        public void Send(ushort opcode, object message)
        {
            if (this.IsDisposed)
            {
                if (protocol.Equals(NetworkProtocol.TCP)) Console.WriteLine("TCP[" + ((TChannel)channel).GetIP() + "]，Session已经被Dispose了");
                throw new Exception("session已经被Dispose了");
            }

            if (OpcodeHelper.IsNeedDebugLogMessage(opcode))
            {
                //	Log.Msg(" send:" + message); //请求日志暂时不打印
            }

            //lock (stream)
            //{
            //stream.Seek(Packet.MessageIndex, SeekOrigin.Begin);
            //stream.SetLength(Packet.MessageIndex);
            //this.Network.MessagePacker.SerializeTo(message, stream);
            var buff = this.Network.MessagePacker.SerializeTo(message);
            byte[] bytes = new byte[Packet.MessageIndex + buff.Length];
            bytes.WriteTo(0, opcode);
            Array.Copy(buff, 0, bytes, Packet.MessageIndex, buff.Length);
            //stream.Seek(0, SeekOrigin.Begin);
            //stream.SetLength(Packet.MessageIndex + buff.Length);
            //stream.WriteByte((byte)(opcode & 0xff));
            //stream.WriteByte((byte)(opcode >> 8));
            //stream.Write(buff);
            //opcodeBytes.WriteTo(0, opcode);
            //Array.Copy(opcodeBytes, 0, stream.GetBuffer(), 0, opcodeBytes.Length);


            //}
#if SERVER
            // 如果是allserver，内部消息不走网络，直接转给session,方便调试时看到整体堆栈
            if (this._network.AppType == AppType.AllServer)
            {
                Session session = this._network.Entity.GetComponent<NetInnerComponent>().Get(this.RemoteAddress);
                //if(sendStream==null) sendStream= new RecyclableMemoryStreamManager().GetStream("message", ushort.MaxValue);
                //sendStream.Seek(0, 0);
                //sendStream.SetLength(bs.Length);
                //sendStream.Write(bs, 0, bs.Length);
                session.Run(opcode, buff);
                return;
            }
#endif
            // 打印发送日志 2020/12/8
            printSend(message);
            //byte[] bs=new byte[stream.Length];
            // Array.Copy(stream.GetBuffer(),0,bs,0,bs.Length);
            //printSend(bs) ;
            this.Send(bytes);
        }

        public void Send(MemoryStream stream)
        {
            channel.Send(stream);
        }
        public void Send(byte[] bytes)
        {
            channel.Send(bytes);
        }
    }
}