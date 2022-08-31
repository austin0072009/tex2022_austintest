
/** Namespace HotfixMessage. */
export namespace HotfixMessage {

    /** Properties of a C2R_Login. */
    interface IC2R_Login {

        /** C2R_Login RpcId */
        RpcId?: (number | null);

        /** C2R_Login Account */
        Account?: (string | null);

        /** C2R_Login Password */
        Password?: (string | null);
    }

    /** Represents a C2R_Login. */
    class C2R_Login implements IC2R_Login {

        /**
         * Constructs a new C2R_Login.
         * @param [p] Properties to set
         */
        constructor(p?: HotfixMessage.IC2R_Login);

        /** C2R_Login RpcId. */
        public RpcId: number;

        /** C2R_Login Account. */
        public Account: string;

        /** C2R_Login Password. */
        public Password: string;

        /**
         * Creates a new C2R_Login instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2R_Login instance
         */
        public static create(properties?: HotfixMessage.IC2R_Login): HotfixMessage.C2R_Login;

        /**
         * Encodes the specified C2R_Login message. Does not implicitly {@link HotfixMessage.C2R_Login.verify|verify} messages.
         * @param m C2R_Login message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: HotfixMessage.IC2R_Login, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2R_Login message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns C2R_Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): HotfixMessage.C2R_Login;
    }

    /** Properties of a R2C_Login. */
    interface IR2C_Login {

        /** R2C_Login RpcId */
        RpcId?: (number | null);

        /** R2C_Login Error */
        Error?: (number | null);

        /** R2C_Login Message */
        Message?: (string | null);

        /** R2C_Login Address */
        Address?: (string | null);

        /** R2C_Login Key */
        Key?: (string | null);

        /** R2C_Login userid */
        userid?: (number | null);
    }

    /** Represents a R2C_Login. */
    class R2C_Login implements IR2C_Login {

        /**
         * Constructs a new R2C_Login.
         * @param [p] Properties to set
         */
        constructor(p?: HotfixMessage.IR2C_Login);

        /** R2C_Login RpcId. */
        public RpcId: number;

        /** R2C_Login Error. */
        public Error: number;

        /** R2C_Login Message. */
        public Message: string;

        /** R2C_Login Address. */
        public Address: string;

        /** R2C_Login Key. */
        public Key: string;

        /** R2C_Login userid. */
        public userid: number;

        /**
         * Creates a new R2C_Login instance using the specified properties.
         * @param [properties] Properties to set
         * @returns R2C_Login instance
         */
        public static create(properties?: HotfixMessage.IR2C_Login): HotfixMessage.R2C_Login;

        /**
         * Encodes the specified R2C_Login message. Does not implicitly {@link HotfixMessage.R2C_Login.verify|verify} messages.
         * @param m R2C_Login message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: HotfixMessage.IR2C_Login, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a R2C_Login message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns R2C_Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): HotfixMessage.R2C_Login;
    }

    /** Properties of a C2G_LoginGate. */
    interface IC2G_LoginGate {

        /** C2G_LoginGate RpcId */
        RpcId?: (number | null);

        /** C2G_LoginGate Key */
        Key?: (string | null);

        /** C2G_LoginGate userid */
        userid?: (number | null);
    }

    /** Represents a C2G_LoginGate. */
    class C2G_LoginGate implements IC2G_LoginGate {

        /**
         * Constructs a new C2G_LoginGate.
         * @param [p] Properties to set
         */
        constructor(p?: HotfixMessage.IC2G_LoginGate);

        /** C2G_LoginGate RpcId. */
        public RpcId: number;

        /** C2G_LoginGate Key. */
        public Key: string;

        /** C2G_LoginGate userid. */
        public userid: number;

        /**
         * Creates a new C2G_LoginGate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2G_LoginGate instance
         */
        public static create(properties?: HotfixMessage.IC2G_LoginGate): HotfixMessage.C2G_LoginGate;

        /**
         * Encodes the specified C2G_LoginGate message. Does not implicitly {@link HotfixMessage.C2G_LoginGate.verify|verify} messages.
         * @param m C2G_LoginGate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: HotfixMessage.IC2G_LoginGate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2G_LoginGate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns C2G_LoginGate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): HotfixMessage.C2G_LoginGate;
    }

    /** Properties of a G2C_LoginGate. */
    interface IG2C_LoginGate {

        /** G2C_LoginGate RpcId */
        RpcId?: (number | null);

        /** G2C_LoginGate Error */
        Error?: (number | null);

        /** G2C_LoginGate Message */
        Message?: (string | null);

        /** G2C_LoginGate PlayerId */
        PlayerId?: (Long | null);
    }

    /** Represents a G2C_LoginGate. */
    class G2C_LoginGate implements IG2C_LoginGate {

        /**
         * Constructs a new G2C_LoginGate.
         * @param [p] Properties to set
         */
        constructor(p?: HotfixMessage.IG2C_LoginGate);

        /** G2C_LoginGate RpcId. */
        public RpcId: number;

        /** G2C_LoginGate Error. */
        public Error: number;

        /** G2C_LoginGate Message. */
        public Message: string;

        /** G2C_LoginGate PlayerId. */
        public PlayerId: Long;

        /**
         * Creates a new G2C_LoginGate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns G2C_LoginGate instance
         */
        public static create(properties?: HotfixMessage.IG2C_LoginGate): HotfixMessage.G2C_LoginGate;

        /**
         * Encodes the specified G2C_LoginGate message. Does not implicitly {@link HotfixMessage.G2C_LoginGate.verify|verify} messages.
         * @param m G2C_LoginGate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: HotfixMessage.IG2C_LoginGate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a G2C_LoginGate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns G2C_LoginGate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): HotfixMessage.G2C_LoginGate;
    }

    /** Properties of a G2C_TestHotfixMessage. */
    interface IG2C_TestHotfixMessage {

        /** G2C_TestHotfixMessage Info */
        Info?: (string | null);
    }

    /** Represents a G2C_TestHotfixMessage. */
    class G2C_TestHotfixMessage implements IG2C_TestHotfixMessage {

        /**
         * Constructs a new G2C_TestHotfixMessage.
         * @param [p] Properties to set
         */
        constructor(p?: HotfixMessage.IG2C_TestHotfixMessage);

        /** G2C_TestHotfixMessage Info. */
        public Info: string;

        /**
         * Creates a new G2C_TestHotfixMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns G2C_TestHotfixMessage instance
         */
        public static create(properties?: HotfixMessage.IG2C_TestHotfixMessage): HotfixMessage.G2C_TestHotfixMessage;

        /**
         * Encodes the specified G2C_TestHotfixMessage message. Does not implicitly {@link HotfixMessage.G2C_TestHotfixMessage.verify|verify} messages.
         * @param m G2C_TestHotfixMessage message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: HotfixMessage.IG2C_TestHotfixMessage, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a G2C_TestHotfixMessage message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns G2C_TestHotfixMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): HotfixMessage.G2C_TestHotfixMessage;
    }

    /** Properties of a C2M_TestActorRequest. */
    interface IC2M_TestActorRequest {

        /** C2M_TestActorRequest RpcId */
        RpcId?: (number | null);

        /** C2M_TestActorRequest ActorId */
        ActorId?: (Long | null);

        /** C2M_TestActorRequest Info */
        Info?: (string | null);
    }

    /** Represents a C2M_TestActorRequest. */
    class C2M_TestActorRequest implements IC2M_TestActorRequest {

        /**
         * Constructs a new C2M_TestActorRequest.
         * @param [p] Properties to set
         */
        constructor(p?: HotfixMessage.IC2M_TestActorRequest);

        /** C2M_TestActorRequest RpcId. */
        public RpcId: number;

        /** C2M_TestActorRequest ActorId. */
        public ActorId: Long;

        /** C2M_TestActorRequest Info. */
        public Info: string;

        /**
         * Creates a new C2M_TestActorRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2M_TestActorRequest instance
         */
        public static create(properties?: HotfixMessage.IC2M_TestActorRequest): HotfixMessage.C2M_TestActorRequest;

        /**
         * Encodes the specified C2M_TestActorRequest message. Does not implicitly {@link HotfixMessage.C2M_TestActorRequest.verify|verify} messages.
         * @param m C2M_TestActorRequest message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: HotfixMessage.IC2M_TestActorRequest, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2M_TestActorRequest message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns C2M_TestActorRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): HotfixMessage.C2M_TestActorRequest;
    }

    /** Properties of a M2C_TestActorResponse. */
    interface IM2C_TestActorResponse {

        /** M2C_TestActorResponse RpcId */
        RpcId?: (number | null);

        /** M2C_TestActorResponse Error */
        Error?: (number | null);

        /** M2C_TestActorResponse Message */
        Message?: (string | null);

        /** M2C_TestActorResponse Info */
        Info?: (string | null);
    }

    /** Represents a M2C_TestActorResponse. */
    class M2C_TestActorResponse implements IM2C_TestActorResponse {

        /**
         * Constructs a new M2C_TestActorResponse.
         * @param [p] Properties to set
         */
        constructor(p?: HotfixMessage.IM2C_TestActorResponse);

        /** M2C_TestActorResponse RpcId. */
        public RpcId: number;

        /** M2C_TestActorResponse Error. */
        public Error: number;

        /** M2C_TestActorResponse Message. */
        public Message: string;

        /** M2C_TestActorResponse Info. */
        public Info: string;

        /**
         * Creates a new M2C_TestActorResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns M2C_TestActorResponse instance
         */
        public static create(properties?: HotfixMessage.IM2C_TestActorResponse): HotfixMessage.M2C_TestActorResponse;

        /**
         * Encodes the specified M2C_TestActorResponse message. Does not implicitly {@link HotfixMessage.M2C_TestActorResponse.verify|verify} messages.
         * @param m M2C_TestActorResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: HotfixMessage.IM2C_TestActorResponse, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a M2C_TestActorResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns M2C_TestActorResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): HotfixMessage.M2C_TestActorResponse;
    }

    /** Properties of a PlayerInfo. */
    interface IPlayerInfo {

        /** PlayerInfo RpcId */
        RpcId?: (number | null);
    }

    /** Represents a PlayerInfo. */
    class PlayerInfo implements IPlayerInfo {

        /**
         * Constructs a new PlayerInfo.
         * @param [p] Properties to set
         */
        constructor(p?: HotfixMessage.IPlayerInfo);

        /** PlayerInfo RpcId. */
        public RpcId: number;

        /**
         * Creates a new PlayerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerInfo instance
         */
        public static create(properties?: HotfixMessage.IPlayerInfo): HotfixMessage.PlayerInfo;

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link HotfixMessage.PlayerInfo.verify|verify} messages.
         * @param m PlayerInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: HotfixMessage.IPlayerInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): HotfixMessage.PlayerInfo;
    }

    /** Properties of a C2G_PlayerInfo. */
    interface IC2G_PlayerInfo {

        /** C2G_PlayerInfo RpcId */
        RpcId?: (number | null);
    }

    /** Represents a C2G_PlayerInfo. */
    class C2G_PlayerInfo implements IC2G_PlayerInfo {

        /**
         * Constructs a new C2G_PlayerInfo.
         * @param [p] Properties to set
         */
        constructor(p?: HotfixMessage.IC2G_PlayerInfo);

        /** C2G_PlayerInfo RpcId. */
        public RpcId: number;

        /**
         * Creates a new C2G_PlayerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2G_PlayerInfo instance
         */
        public static create(properties?: HotfixMessage.IC2G_PlayerInfo): HotfixMessage.C2G_PlayerInfo;

        /**
         * Encodes the specified C2G_PlayerInfo message. Does not implicitly {@link HotfixMessage.C2G_PlayerInfo.verify|verify} messages.
         * @param m C2G_PlayerInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: HotfixMessage.IC2G_PlayerInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2G_PlayerInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns C2G_PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): HotfixMessage.C2G_PlayerInfo;
    }

    /** Properties of a G2C_PlayerInfo. */
    interface IG2C_PlayerInfo {

        /** G2C_PlayerInfo RpcId */
        RpcId?: (number | null);

        /** G2C_PlayerInfo Error */
        Error?: (number | null);

        /** G2C_PlayerInfo Message */
        Message?: (string | null);

        /** G2C_PlayerInfo PlayerInfo */
        PlayerInfo?: (HotfixMessage.IPlayerInfo | null);

        /** G2C_PlayerInfo PlayerInfos */
        PlayerInfos?: (HotfixMessage.IPlayerInfo[] | null);

        /** G2C_PlayerInfo TestRepeatedString */
        TestRepeatedString?: (string[] | null);

        /** G2C_PlayerInfo TestRepeatedInt32 */
        TestRepeatedInt32?: (number[] | null);
    }

    /** Represents a G2C_PlayerInfo. */
    class G2C_PlayerInfo implements IG2C_PlayerInfo {

        /**
         * Constructs a new G2C_PlayerInfo.
         * @param [p] Properties to set
         */
        constructor(p?: HotfixMessage.IG2C_PlayerInfo);

        /** G2C_PlayerInfo RpcId. */
        public RpcId: number;

        /** G2C_PlayerInfo Error. */
        public Error: number;

        /** G2C_PlayerInfo Message. */
        public Message: string;

        /** G2C_PlayerInfo PlayerInfo. */
        public PlayerInfo?: (HotfixMessage.IPlayerInfo | null);

        /** G2C_PlayerInfo PlayerInfos. */
        public PlayerInfos: HotfixMessage.IPlayerInfo[];

        /** G2C_PlayerInfo TestRepeatedString. */
        public TestRepeatedString: string[];

        /** G2C_PlayerInfo TestRepeatedInt32. */
        public TestRepeatedInt32: number[];

        /**
         * Creates a new G2C_PlayerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns G2C_PlayerInfo instance
         */
        public static create(properties?: HotfixMessage.IG2C_PlayerInfo): HotfixMessage.G2C_PlayerInfo;

        /**
         * Encodes the specified G2C_PlayerInfo message. Does not implicitly {@link HotfixMessage.G2C_PlayerInfo.verify|verify} messages.
         * @param m G2C_PlayerInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: HotfixMessage.IG2C_PlayerInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a G2C_PlayerInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns G2C_PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): HotfixMessage.G2C_PlayerInfo;
    }
}
