using ETModel.Framework.Common.Serialization;
using Microsoft.IO;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.WebSockets;
using System.Security.Authentication.ExtendedProtection;
using System.Security.Policy;
using System.Security.Principal;

namespace ETModel
{
    public class WService : AService
    {
        private readonly HttpListener httpListener;

        private readonly Dictionary<long, WChannel> channels = new Dictionary<long, WChannel>();

        public RecyclableMemoryStreamManager MemoryStreamManager = new RecyclableMemoryStreamManager();

        public WService(IEnumerable<string> prefixs, Action<AChannel> acceptCallback)
        {
            this.AcceptCallback += acceptCallback;

            this.httpListener = new HttpListener();

            StartAccept(prefixs).Coroutine();
        }

        public WService()
        {
        }

        public override AChannel GetChannel(long id)
        {
            WChannel channel;
            this.channels.TryGetValue(id, out channel);
            return channel;
        }

        public override AChannel ConnectChannel(IPEndPoint ipEndPoint)
        {
            ClientWebSocket webSocket = new ClientWebSocket();
            WChannel channel = new WChannel(webSocket, this);
            this.channels[channel.Id] = channel;
            channel.ConnectAsync(ipEndPoint.ToString()).Coroutine();
            return channel;
        }

        public override AChannel ConnectChannel(string address)
        {
            ClientWebSocket webSocket = new ClientWebSocket();
            WChannel channel = new WChannel(webSocket, this);
            this.channels[channel.Id] = channel;
            channel.ConnectAsync(address).Coroutine();
            return channel;
        }

        public override void Remove(long id)
        {
            WChannel channel;
            if (!this.channels.TryGetValue(id, out channel))
            {
                return;
            }

            this.channels.Remove(id);
            channel.Dispose();
        }

        public override void Update()
        {

        }

        public async ETVoid StartAccept(IEnumerable<string> prefixs)
        {
            try
            {
                foreach (string prefix in prefixs)
                {
                    //string addr=prefix.StartsWith("http") ? prefix : "http://"+ prefix;
                    //addr = addr.EndsWith("/") ? addr : addr + "/";
                    //addr.Substring(add)
                    // ?????????????????????websocket?????????????????????????????????http://???https://???????????????/?????????????????????????????????????????????????????????
                    string address = "http://*" + prefix.Substring(prefix.LastIndexOf(':')) + "/";
                    Console.WriteLine("websocket????????????:" + address);
                    this.httpListener.Prefixes.Add(address);
                }

                httpListener.Start();
                HttpListenerWebSocketContext webSocketContext = null;
                while (true)
                {
                    try
                    {
                        HttpListenerContext httpListenerContext = await this.httpListener.GetContextAsync();
                        
                        webSocketContext = await httpListenerContext.AcceptWebSocketAsync(null);

                        WChannel channel = new WChannel(webSocketContext, httpListenerContext.Request, this);
                        this.channels[channel.Id] = channel;

                        this.OnAccept(channel);
                    }
                    catch (Exception e)
                    {
                        //Console.WriteLine("Websocket??????[" + JsonUtils.Serialize(webSocketContext) + "]????????????", e);
                        Log.Error(e);
                    }
                }
            }
            catch (HttpListenerException e)
            {
                if (e.ErrorCode == 5)
                {
                    throw new Exception($"CMD??????????????????: netsh http add urlacl url=http://*:8080/ user=Everyone", e);
                }
                Log.Error(e);
            }
            catch (Exception e)
            {
                Log.Error(e);
            }
        }
    }
}