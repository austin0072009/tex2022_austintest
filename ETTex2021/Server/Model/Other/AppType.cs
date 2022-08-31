using System;
using System.Collections.Generic;

namespace ETModel
{
	[Flags]
	public enum AppType
	{
        /// <summary>
        /// 
        /// </summary>
		None = 0,
        /// <summary>
        /// 连接客户端的外网和连接内部服务器的内网，对服务器进程进行管理，自动检测和启动服务器进程。
        /// 加载有内网组件NetInnerComponent，外网组件NetOuterComponent，
        /// 服务器进程管理组件。自动启动突然停止运行的服务器，保证此服务器管理的其它服务器崩溃后能及时自动启动运行。
        /// </summary>
		Manager = 1,
        /// <summary>
        /// 对Actor消息进行管理（添加、移除、分发等），连接内网和外网，对内网服务器进程进行操作，
        /// 随机分配Gate服务器地址。
        /// 内网组件NetInnerComponent，外网组件NetOuterComponent，
        /// Gate服务器随机分发组件。客户端登录时连接的第一个服务器，也可称为登录服务器。
        /// </summary>
		Realm = 1 << 1,
        /// <summary>
        /// 对玩家进行管理，对Actor消息进行管理（添加、移除、分发等），连接内网和外网，对内网服务器进程进行操作，
        /// 随机分配Gate服务器地址，对Actor消息进程进行管理，对玩家ID登录后的Key进行管理。
        /// 加载有玩家管理组件PlayerComponent，管理登陆时联网的Key组件GateSessionKeyComponent。
        /// </summary>
		Gate = 1 << 2,
		Http = 1 << 3,
		DB = 1 << 4,
        /// <summary>
        /// 连接内网，服务器进程状态集中管理（Actor消息IP管理服务器）。加载有内网组件NetInnerComponent，服务器消息处理状态存储组件LocationComponent。
        /// 对客户端的登录信息进行验证和客户端登录后连接的服务器，登录后通过此服务器进行消息互动，也可称为验证服务器。
        /// </summary>
		Location = 1 << 5,
		/// <summary>
		/// ScutLobby 连接内网，对ActorMessage消息进行管理（添加、移除、分发等），对场景内现在活动物体存储管理，对内网服务器进程进行操作，
		/// 对Actor消息进程进行管理，对Actor消息进行管理（添加、移除、分发等），服务器帧率管理。服务器帧率管理组件ServerFrameComponent。
		/// </summary>
		Map = 1 << 6,

		RedisDB = 1<<8, 
		ScutGame = 1<<10,

		BenchmarkWebsocketServer = 1 << 26,
		BenchmarkWebsocketClient = 1 << 27,
		Robot = 1 << 28,
        /// <summary>
        /// 连接内网和测试服务器承受力。加载有内网组件NetInnerComponent，服务器承受力测试组件BenchmarkComponent。
        /// </summary>
		Benchmark = 1 << 29,
		// 客户端Hotfix层
		ClientH = 1 << 30,
		// 客户端Model层
		ClientM = 1 << 31,

		// 7
		AllServer = Manager | Realm | Gate | Http | DB | Location | Map | BenchmarkWebsocketServer| RedisDB| ScutGame
	}

	public static class AppTypeHelper
	{
		public static List<AppType> GetServerTypes()
		{
			List<AppType> appTypes = new List<AppType> { AppType.Manager, AppType.Realm, AppType.Gate };
			return appTypes;
		}

		public static bool Is(this AppType a, AppType b)
		{
			if ((a & b) != 0)
			{
				return true;
			}
			return false;
		}
	}
}