using System;
using ETModel;

namespace ETModel
{
	[MessageHandler(AppType.Map)]
	public class G2SS_RequestMessageHandler : AMRpcHandler<G2SS_RequestMessage, SS2G_ReplyMessage>
	{
		protected override async ETTask Run(Session session, G2SS_RequestMessage request, SS2G_ReplyMessage response, Action reply)
		{
			 
			Log.Info($"server gate 2 scut server start........................ {request.PlayerId}  {request.RpcId}");


			reply();
			await ETTask.CompletedTask;
		}
	}
}