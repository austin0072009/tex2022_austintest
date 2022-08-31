using System;

namespace ETModel
{
	public class NetOuterComponent : NetworkComponent
	{
		public NetworkProtocol Protocol = NetworkProtocol.TCP;
		private int _waitms = 0;
		public override void Update()
		{
			base.Update();
			_waitms++;
			// 刷新太频繁影响日志查看，值扩大100倍 2020/12/7
			if (_waitms > 100000)
			{
				_waitms = 0;
				Console.WriteLine(DateTime.Now + "...........session.Count:" + base.Count);
			}
		}
	}
}