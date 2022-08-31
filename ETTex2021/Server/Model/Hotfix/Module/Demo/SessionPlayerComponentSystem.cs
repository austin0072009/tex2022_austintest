using ETModel;
using ETModel.Framework.Game.Contract;

namespace ETModel
{
	[ObjectSystem]
	public class SessionPlayerComponentDestroySystem : DestroySystem<SessionPlayerComponent>
	{
		public override void Destroy(SessionPlayerComponent self)
		{
			// 发送断线消息
			if (self.Player.UnitId != 0)
			{ 
				ActorLocationSender actorLocationSender = Game.Scene.GetComponent<ActorLocationSenderComponent>().Get(self.Player.UnitId);
				actorLocationSender.Send(new G2M_SessionDisconnect());
			}
			else
			{ 
				Log.Error(string.Format("可能C2G_EnterMap 没有成功返回，连接切换了 客户端OnDisconnected UserId:[{0}]{1}已与服务器断开", self.Player.UserID, self.Player.UnitId));
				//ActionFactory.OnDisconnected(self.Player.UserID, ""); 
			}
			Game.Scene.GetComponent<PlayerComponent>()?.Remove(self.Player.UserID);
//			ActionFactory.OnDisconnected(self.Player.UserID, "");

			Log.Debug(string.Format("客户端OnDisconnected UserId:[{0}]{1}已与服务器断开", self.Player.UserID, self.Player.UnitId));
		}
	}
}