

namespace ETModel
{ 
	[ObjectSystem]
	public class UnitAwakeSystem : AwakeSystem<Unit, long  >
	{
		public override void Awake(Unit self, long a)
		{
			self.Awake(a);
		}
	}

	public sealed class Unit: Entity
	{
		public long UnitType { get;   set; }

		public string Remoteaddress;

		public long UserID;

		public string mapaddress;

		public void Awake(long unitType)
		{
			this.UnitType = unitType;
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