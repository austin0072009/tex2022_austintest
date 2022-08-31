using ETModel.Script.CsScript.Action;

namespace ETModel
{
    public static class MessageHelper
	{
		public static void Broadcast(IActorMessage message)
		{
			Unit[] units = Game.Scene.GetComponent<UnitComponent>().GetAll();
			ActorMessageSenderComponent actorLocationSenderComponent = Game.Scene.GetComponent<ActorMessageSenderComponent>();
			foreach (Unit unit in units)
			{
				UnitGateComponent unitGateComponent = unit.GetComponent<UnitGateComponent>();
				if (unitGateComponent.IsDisconnect||unit.UserID<=0)
				{
					continue;
				}

				ActorMessageSender actorMessageSender = actorLocationSenderComponent.Get(unitGateComponent.GateSessionActorId);
				actorMessageSender.Send(message);
			}
		}

		public static void PushMessagetoOne(IActorMessage message, Unit _targetunit)
		{ 
			//var _targetunit = ETModel.Game.Scene.GetComponent<UnitComponent>().GetByUserID(userid);
			ActorMessageSenderComponent actorLocationSenderComponent = Game.Scene.GetComponent<ActorMessageSenderComponent>();

			UnitGateComponent unitGateComponent = _targetunit.GetComponent<UnitGateComponent>();
			if (unitGateComponent==null ||  unitGateComponent.IsDisconnect)
			{
				return;
			}

			ActorMessageSender actorMessageSender = actorLocationSenderComponent.Get(unitGateComponent.GateSessionActorId);
			actorMessageSender.Send(message);
		}

		public static async void SendActor(IActorMessage message, int userid)
		{
			Unit _targetunit = await FactoryBaseHelper.GetUnitInMap(userid);
			//var _targetunit = ETModel.Game.Scene.GetComponent<UnitComponent>().GetByUserID(userid);
			ActorMessageSenderComponent actorLocationSenderComponent = Game.Scene.GetComponent<ActorMessageSenderComponent>();

			UnitGateComponent unitGateComponent = _targetunit.GetComponent<UnitGateComponent>();
			if (unitGateComponent == null || unitGateComponent.IsDisconnect)
			{
				return;
			}

			ActorMessageSender actorMessageSender = actorLocationSenderComponent.Get(unitGateComponent.GateSessionActorId);
			actorMessageSender.Send(message);
		}

		public static async ETTask<IActorResponse> PushMessageAsync(IActorRequest message, int userid)
		{
			Unit[] units = Game.Scene.GetComponent<UnitComponent>().GetAll();
			ActorMessageSenderComponent actorLocationSenderComponent = Game.Scene.GetComponent<ActorMessageSenderComponent>();
			foreach (Unit unit in units)
			{
				if (unit.UserID != userid) continue;
				UnitGateComponent unitGateComponent = unit.GetComponent<UnitGateComponent>();
				if (unitGateComponent.IsDisconnect)
				{
					continue;
				}

				ActorMessageSender actorMessageSender = actorLocationSenderComponent.Get(unitGateComponent.GateSessionActorId);
				var _res = await	actorMessageSender.CallWithoutException(message);
				return _res;
			}
			return null;
		}
	}
}
