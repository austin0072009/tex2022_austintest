using System;
using ETModel;

namespace ETModel
{
	[MessageHandler(AppType.Map)]
	public class G2M_CreateUnitHandler : AMRpcHandler<G2M_CreateUnit, M2G_CreateUnit>
	{
		protected override async ETTask Run(Session session, G2M_CreateUnit request, M2G_CreateUnit response, Action reply)
		{
			var oldunit = Game.Scene.GetComponent<UnitComponent>().GetByUserID(request.PlayerId);
			if (oldunit != null)
			{
				Game.Scene.GetComponent<UnitComponent>().RemoveByUserID(request.PlayerId);
			}

			Unit unit = ComponentFactory.CreateWithId<Unit>(IdGenerater.GenerateId()); 
			unit.UserID = request.PlayerId;
			unit.Remoteaddress = request.ClientAddress;
			unit.mapaddress = session.RemoteAddress.ToString();
			await unit.AddComponent<MailBoxComponent>().AddLocation();
			unit.AddComponent<UnitGateComponent, long>(request.GateSessionId);
			Game.Scene.GetComponent<UnitComponent>().Add(unit);
			response.UnitId = unit.Id;
			 

			////// 广播创建的unit
			////M2C_CreateUnits createUnits = new M2C_CreateUnits();
			////Unit[] units = Game.Scene.GetComponent<UnitComponent>().GetAll();
			////foreach (Unit u in units)
			////{
			////	UnitInfo unitInfo = new UnitInfo(); 
			////	unitInfo.UnitId = u.Id;
			////	createUnits.Units.Add(unitInfo);
			////}
			////MessageHelper.Broadcast(createUnits);

			reply();
		}
	}
}