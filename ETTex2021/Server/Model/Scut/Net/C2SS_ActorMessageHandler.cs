

namespace ETModel
{
	[ActorMessageHandler(AppType.Map)]
	public class C2SS_ActorMessageHandler : AMActorLocationHandler<Unit, C2SS_ActorMessage>
	{
		protected override async ETTask Run(Unit unit, C2SS_ActorMessage message)
		{
			Log.Info($"C2SS_ActorMessage : {message.Message}");
			await ETTask.CompletedTask;
		}
	}
}