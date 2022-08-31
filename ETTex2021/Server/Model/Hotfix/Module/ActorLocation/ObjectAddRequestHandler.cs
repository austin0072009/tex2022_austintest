using System;
using ETModel;

namespace ETModel
{
	[MessageHandler(AppType.Location)]
	public class ObjectAddRequestHandler : AMRpcHandler<ObjectAddRequest, ObjectAddResponse>
	{
		protected override async ETTask Run(Session session, ObjectAddRequest request, ObjectAddResponse response, Action reply)
		{
			await Game.Scene.GetComponent<LocationComponent>().Add(request.Key, request.InstanceId);
			reply();
		}
	}
}