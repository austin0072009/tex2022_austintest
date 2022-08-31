using ETModel;
using System.Collections.Generic;
namespace ETModel
{
	[Message(InnerOpcode.RedisDB_RPCRequest)]
	public partial class RedisDB_RPCRequest: IRequest
	{
		public int RpcId { get; set; }

		public string Message { get; set; }

	}

	[Message(InnerOpcode.RedisDB_RPCResponse)]
	public partial class RedisDB_RPCResponse: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

	}

/// <summary>
/// 传送unit
/// </summary>
	[Message(InnerOpcode.M2M_TrasferUnitRequest)]
	public partial class M2M_TrasferUnitRequest: IRequest
	{
		public int RpcId { get; set; }

		public Unit Unit { get; set; }

	}

	[Message(InnerOpcode.M2M_TrasferUnitResponse)]
	public partial class M2M_TrasferUnitResponse: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

		public long InstanceId { get; set; }

	}

	[Message(InnerOpcode.M2A_Reload)]
	public partial class M2A_Reload: IRequest
	{
		public int RpcId { get; set; }

	}

	[Message(InnerOpcode.A2M_Reload)]
	public partial class A2M_Reload: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

	}

	[Message(InnerOpcode.G2G_LockRequest)]
	public partial class G2G_LockRequest: IRequest
	{
		public int RpcId { get; set; }

		public long Id { get; set; }

		public string Address { get; set; }

	}

	[Message(InnerOpcode.G2G_LockResponse)]
	public partial class G2G_LockResponse: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

	}

	[Message(InnerOpcode.G2G_LockReleaseRequest)]
	public partial class G2G_LockReleaseRequest: IRequest
	{
		public int RpcId { get; set; }

		public long Id { get; set; }

		public string Address { get; set; }

	}

	[Message(InnerOpcode.G2G_LockReleaseResponse)]
	public partial class G2G_LockReleaseResponse: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

	}

	[Message(InnerOpcode.DBSaveRequest)]
	public partial class DBSaveRequest: IRequest
	{
		public int RpcId { get; set; }

		public string CollectionName { get; set; }

		public ComponentWithId Component { get; set; }

	}

	[Message(InnerOpcode.DBSaveBatchResponse)]
	public partial class DBSaveBatchResponse: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

	}

	[Message(InnerOpcode.DBSaveBatchRequest)]
	public partial class DBSaveBatchRequest: IRequest
	{
		public int RpcId { get; set; }

		public string CollectionName { get; set; }

		public List<ComponentWithId> Components = new List<ComponentWithId>();

	}

	[Message(InnerOpcode.DBSaveResponse)]
	public partial class DBSaveResponse: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

	}

	[Message(InnerOpcode.DBQueryRequest)]
	public partial class DBQueryRequest: IRequest
	{
		public int RpcId { get; set; }

		public long Id { get; set; }

		public string CollectionName { get; set; }

	}

	[Message(InnerOpcode.DBQueryResponse)]
	public partial class DBQueryResponse: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

		public ComponentWithId Component { get; set; }

	}

	[Message(InnerOpcode.DBQueryBatchRequest)]
	public partial class DBQueryBatchRequest: IRequest
	{
		public int RpcId { get; set; }

		public string CollectionName { get; set; }

		public List<long> IdList = new List<long>();

	}

	[Message(InnerOpcode.DBQueryBatchResponse)]
	public partial class DBQueryBatchResponse: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

		public List<ComponentWithId> Components = new List<ComponentWithId>();

	}

	[Message(InnerOpcode.DBQueryJsonRequest)]
	public partial class DBQueryJsonRequest: IRequest
	{
		public int RpcId { get; set; }

		public string CollectionName { get; set; }

		public string Json { get; set; }

	}

	[Message(InnerOpcode.DBQueryJsonResponse)]
	public partial class DBQueryJsonResponse: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

		public List<ComponentWithId> Components = new List<ComponentWithId>();

	}

	[Message(InnerOpcode.ObjectAddRequest)]
	public partial class ObjectAddRequest: IRequest
	{
		public int RpcId { get; set; }

		public long Key { get; set; }

		public long InstanceId { get; set; }

	}

	[Message(InnerOpcode.ObjectAddResponse)]
	public partial class ObjectAddResponse: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

	}

	[Message(InnerOpcode.ObjectRemoveRequest)]
	public partial class ObjectRemoveRequest: IRequest
	{
		public int RpcId { get; set; }

		public long Key { get; set; }

	}

	[Message(InnerOpcode.ObjectRemoveResponse)]
	public partial class ObjectRemoveResponse: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

	}

	[Message(InnerOpcode.ObjectLockRequest)]
	public partial class ObjectLockRequest: IRequest
	{
		public int RpcId { get; set; }

		public long Key { get; set; }

		public long InstanceId { get; set; }

		public int Time { get; set; }

	}

	[Message(InnerOpcode.ObjectLockResponse)]
	public partial class ObjectLockResponse: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

	}

	[Message(InnerOpcode.ObjectUnLockRequest)]
	public partial class ObjectUnLockRequest: IRequest
	{
		public int RpcId { get; set; }

		public long Key { get; set; }

		public long OldInstanceId { get; set; }

		public long InstanceId { get; set; }

	}

	[Message(InnerOpcode.ObjectUnLockResponse)]
	public partial class ObjectUnLockResponse: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

	}

	[Message(InnerOpcode.ObjectGetRequest)]
	public partial class ObjectGetRequest: IRequest
	{
		public int RpcId { get; set; }

		public long Key { get; set; }

	}

	[Message(InnerOpcode.ObjectGetResponse)]
	public partial class ObjectGetResponse: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

		public long InstanceId { get; set; }

	}

	[Message(InnerOpcode.R2G_GetLoginKey)]
	public partial class R2G_GetLoginKey: IRequest
	{
		public int RpcId { get; set; }

		public string Account { get; set; }

	}

	[Message(InnerOpcode.G2R_GetLoginKey)]
	public partial class G2R_GetLoginKey: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

		public long Key { get; set; }

	}

	[Message(InnerOpcode.G2M_CreateUnit)]
	public partial class G2M_CreateUnit: IRequest
	{
		public int RpcId { get; set; }

		public long PlayerId { get; set; }

		public long GateSessionId { get; set; }

		public string ClientAddress { get; set; }

	}

	[Message(InnerOpcode.M2G_CreateUnit)]
	public partial class M2G_CreateUnit: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

// 自己的unit id
// 自己的unit id
		public long UnitId { get; set; }

// 所有的unit
// 所有的unit
		public List<UnitInfo> Units = new List<UnitInfo>();

	}

	[Message(InnerOpcode.G2M_SessionDisconnect)]
	public partial class G2M_SessionDisconnect: IActorLocationMessage
	{
		public int RpcId { get; set; }

		public long ActorId { get; set; }

		public int Type { get; set; }

	}

	[Message(InnerOpcode.G2SS_RequestMessage)]
	public partial class G2SS_RequestMessage: IRequest
	{
		public int RpcId { get; set; }

		public long PlayerId { get; set; }

		public long GateSessionId { get; set; }

		public string Message { get; set; }

	}

	[Message(InnerOpcode.SS2G_ReplyMessage)]
	public partial class SS2G_ReplyMessage: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

		public long PlayerId { get; set; }

	}

	[Message(InnerOpcode.RedisDB_LoginRequestMessage)]
	public partial class RedisDB_LoginRequestMessage: IRequest
	{
		public int RpcId { get; set; }

		public string pid { get; set; }

		public string pwd { get; set; }

		public string ChannelID { get; set; }

	}

	[Message(InnerOpcode.RedisDB_LoginReplyMessage)]
	public partial class RedisDB_LoginReplyMessage: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

		public int UserID { get; set; }

	}

	[Message(InnerOpcode.RedisDB_GetTRequest)]
	public partial class RedisDB_GetTRequest: IRequest
	{
		public int RpcId { get; set; }

		public long idx { get; set; }

		public int personal { get; set; }

		public string TName { get; set; }

	}

	[Message(InnerOpcode.RedisDB_GetTReply)]
	public partial class RedisDB_GetTReply: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

	}

	[Message(InnerOpcode.RedisDB_GetListTRequest)]
	public partial class RedisDB_GetListTRequest: IRequest
	{
		public int RpcId { get; set; }

		public string TName { get; set; }

		public int personal { get; set; }

		public string exp { get; set; }

	}

	[Message(InnerOpcode.RedisDB_GetListTReply)]
	public partial class RedisDB_GetListTReply: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

	}

	[Message(InnerOpcode.RedisDB_ReloadRequest)]
	public partial class RedisDB_ReloadRequest: IRequest
	{
		public int RpcId { get; set; }

		public string TName { get; set; }

		public int personal { get; set; }

	}

	[Message(InnerOpcode.RedisDB_ReloadReply)]
	public partial class RedisDB_ReloadReply: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

	}

	[Message(InnerOpcode.RedisDB_AddorUpateRequest)]
	public partial class RedisDB_AddorUpateRequest: IRequest
	{
		public int RpcId { get; set; }

		public string data { get; set; }

		public string TName { get; set; }

		public int personal { get; set; }

	}

	[Message(InnerOpcode.RedisDB_AddorUpateReply)]
	public partial class RedisDB_AddorUpateReply: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

	}

	[Message(InnerOpcode.RedisDB_WriteTRequest)]
	public partial class RedisDB_WriteTRequest: IRequest
	{
		public int RpcId { get; set; }

		public string data { get; set; }

		public string TName { get; set; }

		public int needreturn { get; set; }

	}

	[Message(InnerOpcode.RedisDB_WriteTReply)]
	public partial class RedisDB_WriteTReply: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

	}

	[Message(InnerOpcode.RedisDB_DeleteTRequest)]
	public partial class RedisDB_DeleteTRequest: IRequest
	{
		public int RpcId { get; set; }

		public string data { get; set; }

		public string TName { get; set; }

		public int personal { get; set; }

	}

	[Message(InnerOpcode.RedisDB_DeleteTReply)]
	public partial class RedisDB_DeleteTReply: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

	}

	[Message(InnerOpcode.US_GetRequest)]
	public partial class US_GetRequest: IRequest
	{
		public int RpcId { get; set; }

		public int userid { get; set; }

		public int istry { get; set; }

	}

	[Message(InnerOpcode.US_GetReply)]
	public partial class US_GetReply: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

	}

	[Message(InnerOpcode.US_AddOrUpdateRequest)]
	public partial class US_AddOrUpdateRequest: IRequest
	{
		public int RpcId { get; set; }

		public string data { get; set; }

	}

	[Message(InnerOpcode.US_AddOrUpdateReply)]
	public partial class US_AddOrUpdateReply: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

	}

	[Message(InnerOpcode.DB_CommonFunRequest)]
	public partial class DB_CommonFunRequest: IRequest
	{
		public int RpcId { get; set; }

		public string funname { get; set; }

		public string para { get; set; }

	}

	[Message(InnerOpcode.DB_CommonFunReply)]
	public partial class DB_CommonFunReply: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

	}

	[Message(InnerOpcode.DB_CommonFun2Request)]
	public partial class DB_CommonFun2Request: IRequest
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string funname { get; set; }

		public string para1 { get; set; }

		public string para2 { get; set; }

	}

	[Message(InnerOpcode.DB_CommonFun2Reply)]
	public partial class DB_CommonFun2Reply: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

	}

	[Message(InnerOpcode.DB_CommonFun3Request)]
	public partial class DB_CommonFun3Request: IRequest
	{
		public int RpcId { get; set; }

		public string funname { get; set; }

		public string para1 { get; set; }

		public string para2 { get; set; }

		public string para3 { get; set; }

	}

	[Message(InnerOpcode.DB_CommonFun3Reply)]
	public partial class DB_CommonFun3Reply: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

	}

	[Message(InnerOpcode.RedisDB_GetListTAllRequest)]
	public partial class RedisDB_GetListTAllRequest: IRequest
	{
		public int RpcId { get; set; }

		public string TName { get; set; }

	}

	[Message(InnerOpcode.RedisDB_GetListTAllReply)]
	public partial class RedisDB_GetListTAllReply: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

	}

	[Message(InnerOpcode.Robot_AddOrUpdateRequest)]
	public partial class Robot_AddOrUpdateRequest: IRequest
	{
		public int RpcId { get; set; }

		public string data { get; set; }

	}

	[Message(InnerOpcode.Robot_AddOrUpdateReply)]
	public partial class Robot_AddOrUpdateReply: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

	}

	[Message(InnerOpcode.Lobby_CommonFunRequest)]
	public partial class Lobby_CommonFunRequest: IRequest
	{
		public int RpcId { get; set; }

		public int _g { get; set; }

		public string funname { get; set; }

		public string para { get; set; }

	}

	[Message(InnerOpcode.Lobby_CommonFunReply)]
	public partial class Lobby_CommonFunReply: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

	}

	[Message(InnerOpcode.Lobby_CommonFun2Request)]
	public partial class Lobby_CommonFun2Request: IRequest
	{
		public int RpcId { get; set; }

		public int UserID { get; set; }

		public int _g { get; set; }

		public string funname { get; set; }

		public string para { get; set; }

	}

	[Message(InnerOpcode.Lobby_CommonFun2Reply)]
	public partial class Lobby_CommonFun2Reply: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

	}

/// <summary>
/// 传送unit
/// </summary>
	[Message(InnerOpcode.SG2M_GetUnitResponse)]
	public partial class SG2M_GetUnitResponse: IRequest
	{
		public int RpcId { get; set; }

		public int userid { get; set; }

	}

	[Message(InnerOpcode.M2SG_GetUnitResponse)]
	public partial class M2SG_GetUnitResponse: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

		public Unit _unit { get; set; }

	}

	[Message(InnerOpcode.RedisDB_CommonTRequest)]
	public partial class RedisDB_CommonTRequest: IRequest
	{
		public int RpcId { get; set; }

		public string data { get; set; }

		public string TName { get; set; }

		public int needret { get; set; }

		public string funname { get; set; }

	}

	[Message(InnerOpcode.RedisDB_CommonTReply)]
	public partial class RedisDB_CommonTReply: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

	}

	[Message(InnerOpcode.RedisDB_UpdateTIncreRequest)]
	public partial class RedisDB_UpdateTIncreRequest: IRequest
	{
		public int RpcId { get; set; }

		public string TName { get; set; }

		public string FName { get; set; }

		public long addval { get; set; }

		public string PName { get; set; }

		public long pval { get; set; }

	}

	[Message(InnerOpcode.RedisDB_UpdateTIncreReply)]
	public partial class RedisDB_UpdateTIncreReply: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

		public long val { get; set; }

	}

	[Message(InnerOpcode.GlobalInfoRequest)]
	public partial class GlobalInfoRequest: IRequest
	{
		public int RpcId { get; set; }

		public string Message { get; set; }

	}

	[Message(InnerOpcode.GlobalInfoReply)]
	public partial class GlobalInfoReply: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

	}

	[Message(InnerOpcode.RedisDB_UpdateDataRequest)]
	public partial class RedisDB_UpdateDataRequest: IRequest
	{
		public int RpcId { get; set; }

		public string TName { get; set; }

		public string Message { get; set; }

		public byte[] Content { get; set; }

	}

	[Message(InnerOpcode.RedisDB_UpdateDataReply)]
	public partial class RedisDB_UpdateDataReply: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

		public byte[] Content { get; set; }

	}

	[Message(InnerOpcode.RedisDB_RatailUserRequset)]
	public partial class RedisDB_RatailUserRequset: IRequest
	{
		public int RpcId { get; set; }

		public long ActorId { get; set; }

// 0:登录进入游戏 1:离开游戏 2:转额
// 0:登录进入游戏 1:离开游戏 2:转额
		public int Type { get; set; }

		public int RetailID { get; set; }

		public int UserID { get; set; }

		public string RetailUser { get; set; }

		public string UserName { get; set; }

		public string PassportId { get; set; }

		public long Gold { get; set; }

		public int Ratio { get; set; }

//订单ID
//订单ID
		public string TransID { get; set; }

	}

	[Message(InnerOpcode.RedisDB_RatailUserReply)]
	public partial class RedisDB_RatailUserReply: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

		public long lGold { get; set; }

	}

	[Message(InnerOpcode.ComponentComplateMessage)]
	public partial class ComponentComplateMessage: IRequest
	{
		public int RpcId { get; set; }

		public string Message { get; set; }

		public int appid { get; set; }

		public int gameid { get; set; }

		public int apptype { get; set; }

	}

	[Message(InnerOpcode.G2G_GetPlayerRequest)]
	public partial class G2G_GetPlayerRequest: IRequest
	{
		public int RpcId { get; set; }

		public long GateSessionId { get; set; }

		public string Message { get; set; }

		public long UserID { get; set; }

		public long UnitID { get; set; }

	}

	[Message(InnerOpcode.G2G_GetPlayerResponse)]
	public partial class G2G_GetPlayerResponse: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

		public Player player { get; set; }

	}

	[Message(InnerOpcode.Any2G_DisponseSession)]
	public partial class Any2G_DisponseSession: IRequest
	{
		public int RpcId { get; set; }

		public long GateSessionId { get; set; }

		public string Message { get; set; }

	}

	[Message(InnerOpcode.RedisDB_AgentRequest)]
	public partial class RedisDB_AgentRequest: IRequest
	{
		public int RpcId { get; set; }

		public string Message { get; set; }

	}

	[Message(InnerOpcode.RedisDB_AgentResponse)]
	public partial class RedisDB_AgentResponse: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

	}

	[Message(InnerOpcode.RedisDB_TaskRequest)]
	public partial class RedisDB_TaskRequest: IRequest
	{
		public int RpcId { get; set; }

		public string Message { get; set; }

	}

	[Message(InnerOpcode.RedisDB_TaskResponse)]
	public partial class RedisDB_TaskResponse: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

	}

	[Message(InnerOpcode.CompeteRequest)]
	public partial class CompeteRequest: IRequest
	{
		public int RpcId { get; set; }

		public string Message { get; set; }

	}

	[Message(InnerOpcode.CompeteResponse)]
	public partial class CompeteResponse: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

	}

	[Message(InnerOpcode.R2M_CacheSyncRequest)]
	public partial class R2M_CacheSyncRequest: IRequest
	{
		public int RpcId { get; set; }

		public string TName { get; set; }

		public int key { get; set; }

		public byte[] Content { get; set; }

	}

	[Message(InnerOpcode.M2S_CacheSyncRequest)]
	public partial class M2S_CacheSyncRequest: IRequest
	{
		public int RpcId { get; set; }

		public string TName { get; set; }

		public int key { get; set; }

		public byte[] Content { get; set; }

	}

	[Message(InnerOpcode.Any2S_USSyncRequest)]
	public partial class Any2S_USSyncRequest: IRequest
	{
		public int RpcId { get; set; }

		public string status { get; set; }

	}

	[Message(InnerOpcode.Any2M_USSyncRequest)]
	public partial class Any2M_USSyncRequest: IRequest
	{
		public int RpcId { get; set; }

		public string status { get; set; }

	}

	[Message(InnerOpcode.A2A_AppInfoRequest)]
	public partial class A2A_AppInfoRequest: IRequest
	{
		public int RpcId { get; set; }

		public string Message { get; set; }

	}

	[Message(InnerOpcode.A2A_AppInfoResponse)]
	public partial class A2A_AppInfoResponse: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

	}

	[Message(InnerOpcode.Lobby2game_DealDataExRequest)]
	public partial class Lobby2game_DealDataExRequest: IRequest
	{
		public int RpcId { get; set; }

		public int UserID { get; set; }

		public int _g { get; set; }

		public string para { get; set; }

	}

	[Message(InnerOpcode.Lobby2game_DealDataExReply)]
	public partial class Lobby2game_DealDataExReply: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

	}

	[Message(InnerOpcode.Lobby2game_ApplyExitTableRequest)]
	public partial class Lobby2game_ApplyExitTableRequest: IRequest
	{
		public int RpcId { get; set; }

		public int UserID { get; set; }

		public int _g { get; set; }

		public int tableid { get; set; }

	}

	[Message(InnerOpcode.Lobby2game_ApplyExitTableReply)]
	public partial class Lobby2game_ApplyExitTableReply: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

	}

	[Message(InnerOpcode.RedisDB_LoginSnsUserRequestMessage)]
	public partial class RedisDB_LoginSnsUserRequestMessage: IRequest
	{
		public int RpcId { get; set; }

		public string pid { get; set; }

	}

	[Message(InnerOpcode.RedisDB_LoginSnsUserReplyMessage)]
	public partial class RedisDB_LoginSnsUserReplyMessage: IResponse
	{
		public int RpcId { get; set; }

		public int Error { get; set; }

		public string Message { get; set; }

		public int UserID { get; set; }

	}

}
