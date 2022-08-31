/** Namespace proto. */
export namespace proto {

    /** MsgID enum. */
    enum MsgID {
        ERROR_MSG = 0,
        C2R_Login = 10001,
        R2C_Login = 10002,
        C2G_LoginGate = 10003,
        G2C_LoginGate = 10004,
        G2C_TestHotfixMessage = 10005,
        C2M_TestActorRequest = 10006,
        M2C_TestActorResponse = 10007,
        PlayerInfo = 10008,
        C2G_PlayerInfo = 10009,
        G2C_PlayerInfo = 10010,
        C2SS_ActorRPCRequest = 101,
        SS2C_ActorRPCReply = 102,
        SS2C_ActorMessage = 103,
        BroadcastInfo = 104,
        C2SS_ActorMessage = 105,
        C2M_TestRequest = 106,
        M2C_TestResponse = 107,
        Actor_TransferRequest = 108,
        Actor_TransferResponse = 109,
        C2G_EnterMap = 110,
        G2C_EnterMap = 111,
        UnitInfo = 112,
        M2C_CreateUnits = 113,
        Frame_ClickMap = 114,
        M2C_PathfindingResult = 115,
        C2R_Ping = 116,
        R2C_Ping = 117,
        G2C_Test = 118,
        C2M_Reload = 119,
        M2C_Reload = 120,
        SS2C_BaseNotify = 121,
        C2G_Heartbeat = 122,
        G2C_Heartbeat = 123
    }
}
