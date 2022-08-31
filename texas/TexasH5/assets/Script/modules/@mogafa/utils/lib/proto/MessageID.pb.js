/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";
var protobuf = require("protobufjs");
// Common aliases
var $Reader = protobuf.Reader, $Writer = protobuf.Writer, $util = protobuf.util;

// Exported root namespace
var $root = protobuf.roots["default"] || (protobuf.roots["default"] = {});

$root.proto = (function () {

    /**
     * Namespace proto.
     * @exports proto
     * @namespace
     */
    var proto = {};

    /**
     * MsgID enum.
     * @name proto.MsgID
     * @enum {number}
     * @property {number} ERROR_MSG=0 错误消息
     * @property {number} C2R_Login=10001 请求登录
     * @property {number} R2C_Login=10002 登录结果
     * @property {number} C2G_LoginGate=10003 请求登录Gate服务器
     * @property {number} G2C_LoginGate=10004 登录Gate服务器结果
     * @property {number} G2C_TestHotfixMessage=10005 G2C_TestHotfixMessage value
     * @property {number} C2M_TestActorRequest=10006 Actor测试请求
     * @property {number} M2C_TestActorResponse=10007 Actor测试请求结果
     * @property {number} PlayerInfo=10008 玩家信息
     * @property {number} C2G_PlayerInfo=10009 C2G_PlayerInfo value
     * @property {number} G2C_PlayerInfo=10010 Gate返回的玩家信息
     * @property {number} C2SS_ActorRPCRequest=101 C2SS_ActorRPCRequest value
     * @property {number} SS2C_ActorRPCReply=102 SS2C_ActorRPCReply value
     * @property {number} SS2C_ActorMessage=103 SS2C_ActorMessage value
     * @property {number} BroadcastInfo=104 BroadcastInfo value
     * @property {number} C2SS_ActorMessage=105 C2SS_ActorMessage value
     * @property {number} C2M_TestRequest=106 C2M_TestRequest value
     * @property {number} M2C_TestResponse=107 M2C_TestResponse value
     * @property {number} Actor_TransferRequest=108 Actor_TransferRequest value
     * @property {number} Actor_TransferResponse=109 Actor_TransferResponse value
     * @property {number} C2G_EnterMap=110 C2G_EnterMap value
     * @property {number} G2C_EnterMap=111 G2C_EnterMap value
     * @property {number} UnitInfo=112 UnitInfo value
     * @property {number} M2C_CreateUnits=113 M2C_CreateUnits value
     * @property {number} Frame_ClickMap=114 Frame_ClickMap value
     * @property {number} M2C_PathfindingResult=115 M2C_PathfindingResult value
     * @property {number} C2R_Ping=116 C2R_Ping value
     * @property {number} R2C_Ping=117 R2C_Ping value
     * @property {number} G2C_Test=118 G2C_Test value
     * @property {number} C2M_Reload=119 C2M_Reload value
     * @property {number} M2C_Reload=120 M2C_Reload value
     * @property {number} SS2C_BaseNotify=121 SS2C_BaseNotify value
     * @property {number} C2G_Heartbeat=122 C2G_Heartbeat value
     * @property {number} G2C_Heartbeat=123 G2C_Heartbeat value
     */
    proto.MsgID = (function () {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ERROR_MSG"] = 0;
        values[valuesById[10001] = "C2R_Login"] = 10001;
        values[valuesById[10002] = "R2C_Login"] = 10002;
        values[valuesById[10003] = "C2G_LoginGate"] = 10003;
        values[valuesById[10004] = "G2C_LoginGate"] = 10004;
        values[valuesById[10005] = "G2C_TestHotfixMessage"] = 10005;
        values[valuesById[10006] = "C2M_TestActorRequest"] = 10006;
        values[valuesById[10007] = "M2C_TestActorResponse"] = 10007;
        values[valuesById[10008] = "PlayerInfo"] = 10008;
        values[valuesById[10009] = "C2G_PlayerInfo"] = 10009;
        values[valuesById[10010] = "G2C_PlayerInfo"] = 10010;
        values[valuesById[101] = "C2SS_ActorRPCRequest"] = 101;
        values[valuesById[102] = "SS2C_ActorRPCReply"] = 102;
        values[valuesById[103] = "SS2C_ActorMessage"] = 103;
        values[valuesById[104] = "BroadcastInfo"] = 104;
        values[valuesById[105] = "C2SS_ActorMessage"] = 105;
        values[valuesById[106] = "C2M_TestRequest"] = 106;
        values[valuesById[107] = "M2C_TestResponse"] = 107;
        values[valuesById[108] = "Actor_TransferRequest"] = 108;
        values[valuesById[109] = "Actor_TransferResponse"] = 109;
        values[valuesById[110] = "C2G_EnterMap"] = 110;
        values[valuesById[111] = "G2C_EnterMap"] = 111;
        values[valuesById[112] = "UnitInfo"] = 112;
        values[valuesById[113] = "M2C_CreateUnits"] = 113;
        values[valuesById[114] = "Frame_ClickMap"] = 114;
        values[valuesById[115] = "M2C_PathfindingResult"] = 115;
        values[valuesById[116] = "C2R_Ping"] = 116;
        values[valuesById[117] = "R2C_Ping"] = 117;
        values[valuesById[118] = "G2C_Test"] = 118;
        values[valuesById[119] = "C2M_Reload"] = 119;
        values[valuesById[120] = "M2C_Reload"] = 120;
        values[valuesById[121] = "SS2C_BaseNotify"] = 121;
        values[valuesById[122] = "C2G_Heartbeat"] = 122;
        values[valuesById[123] = "G2C_Heartbeat"] = 123;
        return values;
    })();

    return proto;
})();

module.exports = $root;
