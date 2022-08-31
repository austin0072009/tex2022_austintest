namespace ETModel
{
	[ObjectSystem]
	public class PlayerSystem : AwakeSystem<Player, string, int >
	{
		public override void Awake(Player self, string a, int userid)
		{
			self.Awake(a, userid);
		}
	}

	public sealed class Player : Entity
	{
		public string Account { get; private set; }
		
		public long UnitId { get; set; }
		public int UserID { get; set; }
		public void Awake(string account, int userid)
		{
			this.Account = account;
			this.UserID = userid;
		}
		
		public override void Dispose()
		{
			if (this.IsDisposed)
			{
				return;
			}

			base.Dispose();
		}
	}
}