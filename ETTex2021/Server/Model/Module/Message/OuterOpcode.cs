using ETModel;
namespace ETModel
{
	[Message(OuterOpcode.C2SS_ActorRPCRequest)]
	public partial class C2SS_ActorRPCRequest : IActorLocationRequest {}

	[Message(OuterOpcode.SS2C_ActorRPCReply)]
	public partial class SS2C_ActorRPCReply : IActorLocationResponse {}

	[Message(OuterOpcode.SS2C_ActorMessage)]
	public partial class SS2C_ActorMessage : IActorMessage {}

	[Message(OuterOpcode.BroadcastInfo)]
	public partial class BroadcastInfo {}

	[Message(OuterOpcode.C2SS_ActorMessage)]
	public partial class C2SS_ActorMessage : IActorLocationMessage {}

	[Message(OuterOpcode.C2M_TestRequest)]
	public partial class C2M_TestRequest : IActorLocationRequest {}

	[Message(OuterOpcode.M2C_TestResponse)]
	public partial class M2C_TestResponse : IActorLocationResponse {}

	[Message(OuterOpcode.Actor_TransferRequest)]
	public partial class Actor_TransferRequest : IActorLocationRequest {}

	[Message(OuterOpcode.Actor_TransferResponse)]
	public partial class Actor_TransferResponse : IActorLocationResponse {}

	[Message(OuterOpcode.C2G_EnterMap)]
	public partial class C2G_EnterMap : IRequest {}

	[Message(OuterOpcode.G2C_EnterMap)]
	public partial class G2C_EnterMap : IResponse {}

// 自己的unit id
// 所有的unit
	[Message(OuterOpcode.UnitInfo)]
	public partial class UnitInfo {}

	[Message(OuterOpcode.M2C_CreateUnits)]
	public partial class M2C_CreateUnits : IActorMessage {}

	[Message(OuterOpcode.C2R_Ping)]
	public partial class C2R_Ping : IRequest {}

	[Message(OuterOpcode.R2C_Ping)]
	public partial class R2C_Ping : IResponse {}

	[Message(OuterOpcode.G2C_Test)]
	public partial class G2C_Test : IMessage {}

	[Message(OuterOpcode.C2M_Reload)]
	public partial class C2M_Reload : IRequest {}

	[Message(OuterOpcode.M2C_Reload)]
	public partial class M2C_Reload : IResponse {}

	[Message(OuterOpcode.SS2C_BaseNotify)]
	public partial class SS2C_BaseNotify : IActorMessage {}

	[Message(OuterOpcode.C2G_Heartbeat)]
	public partial class C2G_Heartbeat : IMessage {}

	[Message(OuterOpcode.G2C_Heartbeat)]
	public partial class G2C_Heartbeat : IMessage {}

//////////////////////////////////捕鱼/////////////////////////////////////////////////////////
/// <summary>
/// 进入FJ后开始推送鱼的信息
/// </summary>
	[Message(OuterOpcode.SS2C_ActorPushFishMessage)]
	public partial class SS2C_ActorPushFishMessage : IActorMessage {}

/// <summary>
/// fresh gate
/// </summary>
/// <summary>
/// 生成鱼 的数据列表
/// </summary>
/// <summary>
/// 生成 鱼的协议
/// </summary>
	[Message(OuterOpcode.FishPOD)]
	public partial class FishPOD {}

/// <summary>
/// 鱼的全局唯一guidarr
/// </summary>
/// <summary>
/// 鱼ID(0-24)fishid
/// </summary>
/// <summary>
/// 鱼路径PathID(1-150)
/// </summary>
/// <summary>
/// 分组ID
/// </summary>
/// <summary>
/// 鱼出生的时间 born time
/// </summary>
/// <summary>
/// 鱼死亡的时间
/// </summary>
/// <summary>
/// buff
/// </summary>
/// <summary>
/// 鱼标记
/// </summary>
/// <summary>
/// 对应FishPOD的buff鱼的协议
/// </summary>
	[Message(OuterOpcode.FishBuff)]
	public partial class FishBuff {}

/// <summary>
/// 鱼的全局唯一guidarr
/// </summary>
/// <summary>
/// 类型1.gold加倍，2.加速度移动一半，3.鱼王，4.道具掉落,5.显示鱼泡泡
/// </summary>
/// <summary>
/// 对应类型的值
/// </summary>
/// <summary>
/// 金玉满堂
/// </summary>
/// <summary>
/// 一石三鱼
/// </summary>
/// <summary>
/// 一箭双雕
/// </summary>
/// <summary>
/// 大闹天空
/// </summary>
/// <summary>
/// 闪电连锁
/// </summary>
	[Message(OuterOpcode.CC2S_ActorKillFishRequest)]
	public partial class CC2S_ActorKillFishRequest : IActorLocationRequest {}

/// <summary>
///_lanucheruid
/// </summary>
/// <summary>
/// 鱼的全局唯一ID
/// </summary>
//房间ID
//桌子ID
	[Message(OuterOpcode.SS2C_ActorKillFishResponse)]
	public partial class SS2C_ActorKillFishResponse : IActorLocationResponse {}

/// <summary>
/// 鱼的全局唯一ID
/// </summary>
/// <summary>
/// 玩家当前gold
/// </summary>
/// <summary>
/// 杀死鱼的奖励（_kill=false时为0）
/// </summary>
/// <summary>
/// 是否杀死鱼
/// </summary>
/// <summary>
/// 发送炮弹信息给其他玩家
/// </summary>
	[Message(OuterOpcode.SS2C_ActorPushShootMessage)]
	public partial class SS2C_ActorPushShootMessage : IActorMessage {}

/// <summary>
/// 玩家当前gold
/// </summary>
/// <summary>
///
/// </summary>
/// <summary>
/// 炮台类型ID
/// </summary>
/// <summary>
/// 炮台 发射器 lancher的id
/// </summary>
/// <summary>
/// 炮弹从哪个位置发射出去的
/// </summary>
/// <summary>
/// 炮弹发射的目标点
/// </summary>
/// <summary>
/// 发射炮炮的请求
/// </summary>
	[Message(OuterOpcode.CC2S_ActorShootFishRequest)]
	public partial class CC2S_ActorShootFishRequest : IActorLocationRequest {}

/// <summary>
/// 炮台类型ID
/// </summary>
/// <summary>
///  lv id 等级ID
/// </summary>
/// <summary>
/// 炮弹从哪个位置发射出去的 1,2,3,4
/// </summary>
/// <summary>
/// 炮弹发射的目标点 屏幕坐标
/// </summary>
	[Message(OuterOpcode.SS2C_ActorShootFishResponse)]
	public partial class SS2C_ActorShootFishResponse : IActorLocationResponse {}

}
namespace ETModel
{
	public static partial class OuterOpcode
	{
		 public const ushort C2SS_ActorRPCRequest = 101;
		 public const ushort SS2C_ActorRPCReply = 102;
		 public const ushort SS2C_ActorMessage = 103;
		 public const ushort BroadcastInfo = 104;
		 public const ushort C2SS_ActorMessage = 105;
		 public const ushort C2M_TestRequest = 106;
		 public const ushort M2C_TestResponse = 107;
		 public const ushort Actor_TransferRequest = 108;
		 public const ushort Actor_TransferResponse = 109;
		 public const ushort C2G_EnterMap = 110;
		 public const ushort G2C_EnterMap = 111;
		 public const ushort UnitInfo = 112;
		 public const ushort M2C_CreateUnits = 113;
		 public const ushort C2R_Ping = 114;
		 public const ushort R2C_Ping = 115;
		 public const ushort G2C_Test = 116;
		 public const ushort C2M_Reload = 117;
		 public const ushort M2C_Reload = 118;
		 public const ushort SS2C_BaseNotify = 119;
		 public const ushort C2G_Heartbeat = 120;
		 public const ushort G2C_Heartbeat = 121;
		 public const ushort SS2C_ActorPushFishMessage = 122;
		 public const ushort FishPOD = 123;
		 public const ushort FishBuff = 124;
		 public const ushort CC2S_ActorKillFishRequest = 125;
		 public const ushort SS2C_ActorKillFishResponse = 126;
		 public const ushort SS2C_ActorPushShootMessage = 127;
		 public const ushort CC2S_ActorShootFishRequest = 128;
		 public const ushort SS2C_ActorShootFishResponse = 129;
	}
}
