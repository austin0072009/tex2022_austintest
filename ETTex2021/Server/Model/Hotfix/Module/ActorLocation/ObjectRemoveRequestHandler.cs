using System;
using ETModel;

namespace ETModel
{
	[MessageHandler(AppType.Location)]
	public class ObjectRemoveRequestHandler : AMRpcHandler<ObjectRemoveRequest, ObjectRemoveResponse>
	{
		protected override async ETTask Run(Session session, ObjectRemoveRequest request, ObjectRemoveResponse response, Action reply)
		{
			await Game.Scene.GetComponent<LocationComponent>().Remove(request.Key);
			reply();
			await ETTask.CompletedTask;
		}
	}
}