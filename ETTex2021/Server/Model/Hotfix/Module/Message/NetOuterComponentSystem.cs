using ETModel;
using System;

namespace ETModel
{
	[ObjectSystem]
	public class NetOuterComponentAwakeSystem : AwakeSystem<NetOuterComponent>
	{
		public override void Awake(NetOuterComponent self)
		{			
			self.Awake(self.Protocol);
			self.MessagePacker = new ProtobufPacker();
			self.MessageDispatcher = new OuterMessageDispatcher();
		}
	}

	[ObjectSystem]
	public class NetOuterComponentAwake1System : AwakeSystem<NetOuterComponent, string>
	{
		public override void Awake(NetOuterComponent self, string address)
		{
			Console.WriteLine("NetOuterComponent .address:" + address + " Protocol:"+ self.Protocol);
			self.Awake(self.Protocol, address);
			self.MessagePacker = new ProtobufPacker();
			self.MessageDispatcher = new OuterMessageDispatcher();
		}
	}
	
	[ObjectSystem]
	public class NetOuterComponentLoadSystem : LoadSystem<NetOuterComponent>
	{
		public override void Load(NetOuterComponent self)
		{
			self.MessagePacker = new ProtobufPacker();
			self.MessageDispatcher = new OuterMessageDispatcher();
		}
	}
	
	[ObjectSystem]
	public class NetOuterComponentUpdateSystem : UpdateSystem<NetOuterComponent>
	{
		public override void Update(NetOuterComponent self)
		{
			self.Update();
		}
	}
}