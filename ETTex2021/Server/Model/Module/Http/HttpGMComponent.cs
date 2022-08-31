using ETModel.Script.CsScript.Action;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Reflection;
using System.Text;

namespace ETModel
{
	[ObjectSystem]
	public class HttpGMComponentAwakeSystem : AwakeSystem<HttpGMComponent>
	{
		public override void Awake(HttpGMComponent self)
		{
			self.Awake();
		}
	}
 

	[ObjectSystem]
	public class HttpGMComponentStartSystem : StartSystem<HttpGMComponent>
	{
		public override void Start(HttpGMComponent self)
		{
			self.Start();
		}
	}

	/// <summary>
	/// http请求分发器
	/// </summary>
	public class HttpGMComponent : Component
	{
		public AppType appType; 
		public HttpConfig HttpConfig; 

		public void Awake()
		{
			StartConfig startConfig = StartConfigComponent.Instance.StartConfig;
			this.appType = startConfig.AppType;
			this.HttpConfig = startConfig.GetComponent<HttpConfig>(); 
		}

	 
		public void Start()
		{
			GMService.Current.Start("http://*", 8080, "Service");//"			HttpConfig.Url
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