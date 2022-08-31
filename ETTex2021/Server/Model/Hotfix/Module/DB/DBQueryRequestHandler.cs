using System;
using ETModel;

namespace ETModel
{
	[MessageHandler(AppType.DB)]
	public class DBQueryRequestHandler : AMRpcHandler<DBQueryRequest, DBQueryResponse>
	{
		protected override async ETTask Run(Session session, DBQueryRequest request, DBQueryResponse response, Action reply)
		{
			ComponentWithId component = await Game.Scene.GetComponent<DBComponent>().Get(request.CollectionName, request.Id);

			response.Component = component;

			reply();
		}
	}
}