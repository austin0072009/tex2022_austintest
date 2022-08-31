using System.Collections.Generic;

namespace ETModel
{
    /// <summary>
    /// 随机分配Gate服务器地址
    /// </summary>
	public class RealmGateAddressComponent : Component
	{
		public readonly List<StartConfig> GateAddress = new List<StartConfig>();

		public StartConfig GetAddress()
		{
			int n = RandomHelper.RandomNumber(0, this.GateAddress.Count);
			return this.GateAddress[n];
		}
	}
}
