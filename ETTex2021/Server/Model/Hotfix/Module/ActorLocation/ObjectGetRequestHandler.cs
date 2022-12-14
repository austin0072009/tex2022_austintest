using System;
using ETModel;

namespace ETModel
{
	[MessageHandler(AppType.Location)]
	public class ObjectGetRequestHandler : AMRpcHandler<ObjectGetRequest, ObjectGetResponse>
	{
		protected override async ETTask Run(Session session, ObjectGetRequest request, ObjectGetResponse response, Action reply)
		{
			long instanceId = await Game.Scene.GetComponent<LocationComponent>().Get(request.Key);
			if (instanceId == 0)
			{
				response.Error = ErrorCode.ERR_ActorLocationNotFound;
			}
			response.InstanceId = instanceId;
			reply();
		}
	}
}