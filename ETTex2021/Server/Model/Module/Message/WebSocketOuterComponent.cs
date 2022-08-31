using System;

namespace ETModel
{
	[ObjectSystem]
	public class WebSocketNetOuterComponentAwakeSystem : AwakeSystem<NetOuterComponent>
	{
		public override void Awake(NetOuterComponent self)
		{
			self.Awake(self.Protocol);
			self.MessagePacker = new ProtobufPacker();
			self.MessageDispatcher = new OuterMessageDispatcher();
		}
	}

	[ObjectSystem]
	public class WebSocketNetOuterComponentAwake1System : AwakeSystem<WebSocketOuterComponent, string>
	{
		public override void Awake(WebSocketOuterComponent self, string address)
		{
			Console.WriteLine("WebSocket.address:" + address + " Protocol:" + self.Protocol);
			self.Awake(self.Protocol, address);
			self.MessagePacker = new ProtobufPacker();
			self.MessageDispatcher = new OuterMessageDispatcher();
		}
	}

	[ObjectSystem]
	public class WebSocketNetOuterComponentLoadSystem : LoadSystem<WebSocketOuterComponent>
	{
		public override void Load(WebSocketOuterComponent self)
		{
			self.MessagePacker = new ProtobufPacker();
			self.MessageDispatcher = new OuterMessageDispatcher();
		}
	}

	[ObjectSystem]
	public class WebSocketNetOuterComponentUpdateSystem : UpdateSystem<WebSocketOuterComponent>
	{
		public override void Update(WebSocketOuterComponent self)
		{
			self.Update();
		}
	}
	public class WebSocketOuterComponent : NetworkComponent
    {
        public NetworkProtocol Protocol = NetworkProtocol.WebSocket;
        private int _waitms = 0;
        public override void Update()
        {
            base.Update();
            _waitms++;
            if (_waitms > 100000)
            {
                _waitms = 0;
                Console.WriteLine(DateTime.Now + "...........WebSocket.session.Count:" + base.Count);
            }
        }
    }
}
