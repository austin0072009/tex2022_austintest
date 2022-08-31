
/** Namespace OuterMessage. */
export namespace OuterMessage {

    /** Properties of a C2SS_ActorRPCRequest. */
    interface IC2SS_ActorRPCRequest {

        /** C2SS_ActorRPCRequest RpcId */
        RpcId?: (number | null);

        /** C2SS_ActorRPCRequest ActorId */
        ActorId?: (Long | null);

        /** C2SS_ActorRPCRequest request */
        request?: (string | null);
    }

    /** Represents a C2SS_ActorRPCRequest. */
    class C2SS_ActorRPCRequest implements IC2SS_ActorRPCRequest {

        /**
         * Constructs a new C2SS_ActorRPCRequest.
         * @param [p] Properties to set
         */
        constructor(p?: OuterMessage.IC2SS_ActorRPCRequest);

        /** C2SS_ActorRPCRequest RpcId. */
        public RpcId: number;

        /** C2SS_ActorRPCRequest ActorId. */
        public ActorId: Long;

        /** C2SS_ActorRPCRequest request. */
        public request: string;

        /**
         * Creates a new C2SS_ActorRPCRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2SS_ActorRPCRequest instance
         */
        public static create(properties?: OuterMessage.IC2SS_ActorRPCRequest): OuterMessage.C2SS_ActorRPCRequest;

        /**
         * Encodes the specified C2SS_ActorRPCRequest message. Does not implicitly {@link OuterMessage.C2SS_ActorRPCRequest.verify|verify} messages.
         * @param m C2SS_ActorRPCRequest message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: OuterMessage.IC2SS_ActorRPCRequest, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2SS_ActorRPCRequest message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns C2SS_ActorRPCRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): OuterMessage.C2SS_ActorRPCRequest;
    }

    /** Properties of a SS2C_ActorRPCReply. */
    interface ISS2C_ActorRPCReply {

        /** SS2C_ActorRPCReply RpcId */
        RpcId?: (number | null);

        /** SS2C_ActorRPCReply Error */
        Error?: (number | null);

        /** SS2C_ActorRPCReply Message */
        Message?: (string | null);
    }

    /** Represents a SS2C_ActorRPCReply. */
    class SS2C_ActorRPCReply implements ISS2C_ActorRPCReply {

        /**
         * Constructs a new SS2C_ActorRPCReply.
         * @param [p] Properties to set
         */
        constructor(p?: OuterMessage.ISS2C_ActorRPCReply);

        /** SS2C_ActorRPCReply RpcId. */
        public RpcId: number;

        /** SS2C_ActorRPCReply Error. */
        public Error: number;

        /** SS2C_ActorRPCReply Message. */
        public Message: string;

        /**
         * Creates a new SS2C_ActorRPCReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SS2C_ActorRPCReply instance
         */
        public static create(properties?: OuterMessage.ISS2C_ActorRPCReply): OuterMessage.SS2C_ActorRPCReply;

        /**
         * Encodes the specified SS2C_ActorRPCReply message. Does not implicitly {@link OuterMessage.SS2C_ActorRPCReply.verify|verify} messages.
         * @param m SS2C_ActorRPCReply message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: OuterMessage.ISS2C_ActorRPCReply, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SS2C_ActorRPCReply message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SS2C_ActorRPCReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): OuterMessage.SS2C_ActorRPCReply;
    }

    /** Properties of a SS2C_ActorMessage. */
    interface ISS2C_ActorMessage {

        /** SS2C_ActorMessage RpcId */
        RpcId?: (number | null);

        /** SS2C_ActorMessage ActorId */
        ActorId?: (Long | null);

        /** SS2C_ActorMessage Info */
        Info?: (OuterMessage.IBroadcastInfo[] | null);
    }

    /** Represents a SS2C_ActorMessage. */
    class SS2C_ActorMessage implements ISS2C_ActorMessage {

        /**
         * Constructs a new SS2C_ActorMessage.
         * @param [p] Properties to set
         */
        constructor(p?: OuterMessage.ISS2C_ActorMessage);

        /** SS2C_ActorMessage RpcId. */
        public RpcId: number;

        /** SS2C_ActorMessage ActorId. */
        public ActorId: Long;

        /** SS2C_ActorMessage Info. */
        public Info: OuterMessage.IBroadcastInfo[];

        /**
         * Creates a new SS2C_ActorMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SS2C_ActorMessage instance
         */
        public static create(properties?: OuterMessage.ISS2C_ActorMessage): OuterMessage.SS2C_ActorMessage;

        /**
         * Encodes the specified SS2C_ActorMessage message. Does not implicitly {@link OuterMessage.SS2C_ActorMessage.verify|verify} messages.
         * @param m SS2C_ActorMessage message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: OuterMessage.ISS2C_ActorMessage, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SS2C_ActorMessage message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SS2C_ActorMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): OuterMessage.SS2C_ActorMessage;
    }

    /** Properties of a BroadcastInfo. */
    interface IBroadcastInfo {

        /** BroadcastInfo UnitId */
        UnitId?: (Long | null);

        /** BroadcastInfo Message */
        Message?: (string | null);
    }

    /** Represents a BroadcastInfo. */
    class BroadcastInfo implements IBroadcastInfo {

        /**
         * Constructs a new BroadcastInfo.
         * @param [p] Properties to set
         */
        constructor(p?: OuterMessage.IBroadcastInfo);

        /** BroadcastInfo UnitId. */
        public UnitId: Long;

        /** BroadcastInfo Message. */
        public Message: string;

        /**
         * Creates a new BroadcastInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BroadcastInfo instance
         */
        public static create(properties?: OuterMessage.IBroadcastInfo): OuterMessage.BroadcastInfo;

        /**
         * Encodes the specified BroadcastInfo message. Does not implicitly {@link OuterMessage.BroadcastInfo.verify|verify} messages.
         * @param m BroadcastInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: OuterMessage.IBroadcastInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BroadcastInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns BroadcastInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): OuterMessage.BroadcastInfo;
    }

    /** Properties of a C2SS_ActorMessage. */
    interface IC2SS_ActorMessage {

        /** C2SS_ActorMessage RpcId */
        RpcId?: (number | null);

        /** C2SS_ActorMessage ActorId */
        ActorId?: (Long | null);

        /** C2SS_ActorMessage Message */
        Message?: (string | null);
    }

    /** Represents a C2SS_ActorMessage. */
    class C2SS_ActorMessage implements IC2SS_ActorMessage {

        /**
         * Constructs a new C2SS_ActorMessage.
         * @param [p] Properties to set
         */
        constructor(p?: OuterMessage.IC2SS_ActorMessage);

        /** C2SS_ActorMessage RpcId. */
        public RpcId: number;

        /** C2SS_ActorMessage ActorId. */
        public ActorId: Long;

        /** C2SS_ActorMessage Message. */
        public Message: string;

        /**
         * Creates a new C2SS_ActorMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2SS_ActorMessage instance
         */
        public static create(properties?: OuterMessage.IC2SS_ActorMessage): OuterMessage.C2SS_ActorMessage;

        /**
         * Encodes the specified C2SS_ActorMessage message. Does not implicitly {@link OuterMessage.C2SS_ActorMessage.verify|verify} messages.
         * @param m C2SS_ActorMessage message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: OuterMessage.IC2SS_ActorMessage, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2SS_ActorMessage message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns C2SS_ActorMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): OuterMessage.C2SS_ActorMessage;
    }

    /** Properties of a C2M_TestRequest. */
    interface IC2M_TestRequest {

        /** C2M_TestRequest RpcId */
        RpcId?: (number | null);

        /** C2M_TestRequest ActorId */
        ActorId?: (Long | null);

        /** C2M_TestRequest request */
        request?: (string | null);
    }

    /** Represents a C2M_TestRequest. */
    class C2M_TestRequest implements IC2M_TestRequest {

        /**
         * Constructs a new C2M_TestRequest.
         * @param [p] Properties to set
         */
        constructor(p?: OuterMessage.IC2M_TestRequest);

        /** C2M_TestRequest RpcId. */
        public RpcId: number;

        /** C2M_TestRequest ActorId. */
        public ActorId: Long;

        /** C2M_TestRequest request. */
        public request: string;

        /**
         * Creates a new C2M_TestRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2M_TestRequest instance
         */
        public static create(properties?: OuterMessage.IC2M_TestRequest): OuterMessage.C2M_TestRequest;

        /**
         * Encodes the specified C2M_TestRequest message. Does not implicitly {@link OuterMessage.C2M_TestRequest.verify|verify} messages.
         * @param m C2M_TestRequest message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: OuterMessage.IC2M_TestRequest, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2M_TestRequest message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns C2M_TestRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): OuterMessage.C2M_TestRequest;
    }

    /** Properties of a M2C_TestResponse. */
    interface IM2C_TestResponse {

        /** M2C_TestResponse RpcId */
        RpcId?: (number | null);

        /** M2C_TestResponse Error */
        Error?: (number | null);

        /** M2C_TestResponse Message */
        Message?: (string | null);

        /** M2C_TestResponse response */
        response?: (string | null);
    }

    /** Represents a M2C_TestResponse. */
    class M2C_TestResponse implements IM2C_TestResponse {

        /**
         * Constructs a new M2C_TestResponse.
         * @param [p] Properties to set
         */
        constructor(p?: OuterMessage.IM2C_TestResponse);

        /** M2C_TestResponse RpcId. */
        public RpcId: number;

        /** M2C_TestResponse Error. */
        public Error: number;

        /** M2C_TestResponse Message. */
        public Message: string;

        /** M2C_TestResponse response. */
        public response: string;

        /**
         * Creates a new M2C_TestResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns M2C_TestResponse instance
         */
        public static create(properties?: OuterMessage.IM2C_TestResponse): OuterMessage.M2C_TestResponse;

        /**
         * Encodes the specified M2C_TestResponse message. Does not implicitly {@link OuterMessage.M2C_TestResponse.verify|verify} messages.
         * @param m M2C_TestResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: OuterMessage.IM2C_TestResponse, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a M2C_TestResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns M2C_TestResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): OuterMessage.M2C_TestResponse;
    }

    /** Properties of an Actor_TransferRequest. */
    interface IActor_TransferRequest {

        /** Actor_TransferRequest RpcId */
        RpcId?: (number | null);

        /** Actor_TransferRequest ActorId */
        ActorId?: (Long | null);

        /** Actor_TransferRequest MapIndex */
        MapIndex?: (number | null);
    }

    /** Represents an Actor_TransferRequest. */
    class Actor_TransferRequest implements IActor_TransferRequest {

        /**
         * Constructs a new Actor_TransferRequest.
         * @param [p] Properties to set
         */
        constructor(p?: OuterMessage.IActor_TransferRequest);

        /** Actor_TransferRequest RpcId. */
        public RpcId: number;

        /** Actor_TransferRequest ActorId. */
        public ActorId: Long;

        /** Actor_TransferRequest MapIndex. */
        public MapIndex: number;

        /**
         * Creates a new Actor_TransferRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Actor_TransferRequest instance
         */
        public static create(properties?: OuterMessage.IActor_TransferRequest): OuterMessage.Actor_TransferRequest;

        /**
         * Encodes the specified Actor_TransferRequest message. Does not implicitly {@link OuterMessage.Actor_TransferRequest.verify|verify} messages.
         * @param m Actor_TransferRequest message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: OuterMessage.IActor_TransferRequest, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Actor_TransferRequest message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Actor_TransferRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): OuterMessage.Actor_TransferRequest;
    }

    /** Properties of an Actor_TransferResponse. */
    interface IActor_TransferResponse {

        /** Actor_TransferResponse RpcId */
        RpcId?: (number | null);

        /** Actor_TransferResponse Error */
        Error?: (number | null);

        /** Actor_TransferResponse Message */
        Message?: (string | null);
    }

    /** Represents an Actor_TransferResponse. */
    class Actor_TransferResponse implements IActor_TransferResponse {

        /**
         * Constructs a new Actor_TransferResponse.
         * @param [p] Properties to set
         */
        constructor(p?: OuterMessage.IActor_TransferResponse);

        /** Actor_TransferResponse RpcId. */
        public RpcId: number;

        /** Actor_TransferResponse Error. */
        public Error: number;

        /** Actor_TransferResponse Message. */
        public Message: string;

        /**
         * Creates a new Actor_TransferResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Actor_TransferResponse instance
         */
        public static create(properties?: OuterMessage.IActor_TransferResponse): OuterMessage.Actor_TransferResponse;

        /**
         * Encodes the specified Actor_TransferResponse message. Does not implicitly {@link OuterMessage.Actor_TransferResponse.verify|verify} messages.
         * @param m Actor_TransferResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: OuterMessage.IActor_TransferResponse, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Actor_TransferResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Actor_TransferResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): OuterMessage.Actor_TransferResponse;
    }

    /** Properties of a C2G_EnterMap. */
    interface IC2G_EnterMap {

        /** C2G_EnterMap RpcId */
        RpcId?: (number | null);
    }

    /** Represents a C2G_EnterMap. */
    class C2G_EnterMap implements IC2G_EnterMap {

        /**
         * Constructs a new C2G_EnterMap.
         * @param [p] Properties to set
         */
        constructor(p?: OuterMessage.IC2G_EnterMap);

        /** C2G_EnterMap RpcId. */
        public RpcId: number;

        /**
         * Creates a new C2G_EnterMap instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2G_EnterMap instance
         */
        public static create(properties?: OuterMessage.IC2G_EnterMap): OuterMessage.C2G_EnterMap;

        /**
         * Encodes the specified C2G_EnterMap message. Does not implicitly {@link OuterMessage.C2G_EnterMap.verify|verify} messages.
         * @param m C2G_EnterMap message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: OuterMessage.IC2G_EnterMap, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2G_EnterMap message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns C2G_EnterMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): OuterMessage.C2G_EnterMap;
    }

    /** Properties of a G2C_EnterMap. */
    interface IG2C_EnterMap {

        /** G2C_EnterMap RpcId */
        RpcId?: (number | null);

        /** G2C_EnterMap Error */
        Error?: (number | null);

        /** G2C_EnterMap Message */
        Message?: (string | null);

        /** G2C_EnterMap UnitId */
        UnitId?: (Long | null);

        /** G2C_EnterMap Units */
        Units?: (OuterMessage.IUnitInfo[] | null);
    }

    /** Represents a G2C_EnterMap. */
    class G2C_EnterMap implements IG2C_EnterMap {

        /**
         * Constructs a new G2C_EnterMap.
         * @param [p] Properties to set
         */
        constructor(p?: OuterMessage.IG2C_EnterMap);

        /** G2C_EnterMap RpcId. */
        public RpcId: number;

        /** G2C_EnterMap Error. */
        public Error: number;

        /** G2C_EnterMap Message. */
        public Message: string;

        /** G2C_EnterMap UnitId. */
        public UnitId: Long;

        /** G2C_EnterMap Units. */
        public Units: OuterMessage.IUnitInfo[];

        /**
         * Creates a new G2C_EnterMap instance using the specified properties.
         * @param [properties] Properties to set
         * @returns G2C_EnterMap instance
         */
        public static create(properties?: OuterMessage.IG2C_EnterMap): OuterMessage.G2C_EnterMap;

        /**
         * Encodes the specified G2C_EnterMap message. Does not implicitly {@link OuterMessage.G2C_EnterMap.verify|verify} messages.
         * @param m G2C_EnterMap message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: OuterMessage.IG2C_EnterMap, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a G2C_EnterMap message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns G2C_EnterMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): OuterMessage.G2C_EnterMap;
    }

    /** Properties of an UnitInfo. */
    interface IUnitInfo {

        /** UnitInfo UnitId */
        UnitId?: (Long | null);

        /** UnitInfo X */
        X?: (number | null);

        /** UnitInfo Y */
        Y?: (number | null);

        /** UnitInfo Z */
        Z?: (number | null);
    }

    /** Represents an UnitInfo. */
    class UnitInfo implements IUnitInfo {

        /**
         * Constructs a new UnitInfo.
         * @param [p] Properties to set
         */
        constructor(p?: OuterMessage.IUnitInfo);

        /** UnitInfo UnitId. */
        public UnitId: Long;

        /** UnitInfo X. */
        public X: number;

        /** UnitInfo Y. */
        public Y: number;

        /** UnitInfo Z. */
        public Z: number;

        /**
         * Creates a new UnitInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UnitInfo instance
         */
        public static create(properties?: OuterMessage.IUnitInfo): OuterMessage.UnitInfo;

        /**
         * Encodes the specified UnitInfo message. Does not implicitly {@link OuterMessage.UnitInfo.verify|verify} messages.
         * @param m UnitInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: OuterMessage.IUnitInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UnitInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UnitInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): OuterMessage.UnitInfo;
    }

    /** Properties of a M2C_CreateUnits. */
    interface IM2C_CreateUnits {

        /** M2C_CreateUnits RpcId */
        RpcId?: (number | null);

        /** M2C_CreateUnits ActorId */
        ActorId?: (Long | null);

        /** M2C_CreateUnits Units */
        Units?: (OuterMessage.IUnitInfo[] | null);
    }

    /** Represents a M2C_CreateUnits. */
    class M2C_CreateUnits implements IM2C_CreateUnits {

        /**
         * Constructs a new M2C_CreateUnits.
         * @param [p] Properties to set
         */
        constructor(p?: OuterMessage.IM2C_CreateUnits);

        /** M2C_CreateUnits RpcId. */
        public RpcId: number;

        /** M2C_CreateUnits ActorId. */
        public ActorId: Long;

        /** M2C_CreateUnits Units. */
        public Units: OuterMessage.IUnitInfo[];

        /**
         * Creates a new M2C_CreateUnits instance using the specified properties.
         * @param [properties] Properties to set
         * @returns M2C_CreateUnits instance
         */
        public static create(properties?: OuterMessage.IM2C_CreateUnits): OuterMessage.M2C_CreateUnits;

        /**
         * Encodes the specified M2C_CreateUnits message. Does not implicitly {@link OuterMessage.M2C_CreateUnits.verify|verify} messages.
         * @param m M2C_CreateUnits message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: OuterMessage.IM2C_CreateUnits, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a M2C_CreateUnits message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns M2C_CreateUnits
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): OuterMessage.M2C_CreateUnits;
    }

    /** Properties of a Frame_ClickMap. */
    interface IFrame_ClickMap {

        /** Frame_ClickMap RpcId */
        RpcId?: (number | null);

        /** Frame_ClickMap ActorId */
        ActorId?: (Long | null);

        /** Frame_ClickMap Id */
        Id?: (Long | null);

        /** Frame_ClickMap X */
        X?: (number | null);

        /** Frame_ClickMap Y */
        Y?: (number | null);

        /** Frame_ClickMap Z */
        Z?: (number | null);
    }

    /** Represents a Frame_ClickMap. */
    class Frame_ClickMap implements IFrame_ClickMap {

        /**
         * Constructs a new Frame_ClickMap.
         * @param [p] Properties to set
         */
        constructor(p?: OuterMessage.IFrame_ClickMap);

        /** Frame_ClickMap RpcId. */
        public RpcId: number;

        /** Frame_ClickMap ActorId. */
        public ActorId: Long;

        /** Frame_ClickMap Id. */
        public Id: Long;

        /** Frame_ClickMap X. */
        public X: number;

        /** Frame_ClickMap Y. */
        public Y: number;

        /** Frame_ClickMap Z. */
        public Z: number;

        /**
         * Creates a new Frame_ClickMap instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Frame_ClickMap instance
         */
        public static create(properties?: OuterMessage.IFrame_ClickMap): OuterMessage.Frame_ClickMap;

        /**
         * Encodes the specified Frame_ClickMap message. Does not implicitly {@link OuterMessage.Frame_ClickMap.verify|verify} messages.
         * @param m Frame_ClickMap message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: OuterMessage.IFrame_ClickMap, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Frame_ClickMap message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Frame_ClickMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): OuterMessage.Frame_ClickMap;
    }

    /** Properties of a M2C_PathfindingResult. */
    interface IM2C_PathfindingResult {

        /** M2C_PathfindingResult ActorId */
        ActorId?: (Long | null);

        /** M2C_PathfindingResult Id */
        Id?: (Long | null);

        /** M2C_PathfindingResult X */
        X?: (number | null);

        /** M2C_PathfindingResult Y */
        Y?: (number | null);

        /** M2C_PathfindingResult Z */
        Z?: (number | null);

        /** M2C_PathfindingResult Xs */
        Xs?: (number[] | null);

        /** M2C_PathfindingResult Ys */
        Ys?: (number[] | null);

        /** M2C_PathfindingResult Zs */
        Zs?: (number[] | null);
    }

    /** Represents a M2C_PathfindingResult. */
    class M2C_PathfindingResult implements IM2C_PathfindingResult {

        /**
         * Constructs a new M2C_PathfindingResult.
         * @param [p] Properties to set
         */
        constructor(p?: OuterMessage.IM2C_PathfindingResult);

        /** M2C_PathfindingResult ActorId. */
        public ActorId: Long;

        /** M2C_PathfindingResult Id. */
        public Id: Long;

        /** M2C_PathfindingResult X. */
        public X: number;

        /** M2C_PathfindingResult Y. */
        public Y: number;

        /** M2C_PathfindingResult Z. */
        public Z: number;

        /** M2C_PathfindingResult Xs. */
        public Xs: number[];

        /** M2C_PathfindingResult Ys. */
        public Ys: number[];

        /** M2C_PathfindingResult Zs. */
        public Zs: number[];

        /**
         * Creates a new M2C_PathfindingResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns M2C_PathfindingResult instance
         */
        public static create(properties?: OuterMessage.IM2C_PathfindingResult): OuterMessage.M2C_PathfindingResult;

        /**
         * Encodes the specified M2C_PathfindingResult message. Does not implicitly {@link OuterMessage.M2C_PathfindingResult.verify|verify} messages.
         * @param m M2C_PathfindingResult message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: OuterMessage.IM2C_PathfindingResult, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a M2C_PathfindingResult message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns M2C_PathfindingResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): OuterMessage.M2C_PathfindingResult;
    }

    /** Properties of a C2R_Ping. */
    interface IC2R_Ping {

        /** C2R_Ping RpcId */
        RpcId?: (number | null);
    }

    /** Represents a C2R_Ping. */
    class C2R_Ping implements IC2R_Ping {

        /**
         * Constructs a new C2R_Ping.
         * @param [p] Properties to set
         */
        constructor(p?: OuterMessage.IC2R_Ping);

        /** C2R_Ping RpcId. */
        public RpcId: number;

        /**
         * Creates a new C2R_Ping instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2R_Ping instance
         */
        public static create(properties?: OuterMessage.IC2R_Ping): OuterMessage.C2R_Ping;

        /**
         * Encodes the specified C2R_Ping message. Does not implicitly {@link OuterMessage.C2R_Ping.verify|verify} messages.
         * @param m C2R_Ping message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: OuterMessage.IC2R_Ping, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2R_Ping message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns C2R_Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): OuterMessage.C2R_Ping;
    }

    /** Properties of a R2C_Ping. */
    interface IR2C_Ping {

        /** R2C_Ping RpcId */
        RpcId?: (number | null);

        /** R2C_Ping Error */
        Error?: (number | null);

        /** R2C_Ping Message */
        Message?: (string | null);
    }

    /** Represents a R2C_Ping. */
    class R2C_Ping implements IR2C_Ping {

        /**
         * Constructs a new R2C_Ping.
         * @param [p] Properties to set
         */
        constructor(p?: OuterMessage.IR2C_Ping);

        /** R2C_Ping RpcId. */
        public RpcId: number;

        /** R2C_Ping Error. */
        public Error: number;

        /** R2C_Ping Message. */
        public Message: string;

        /**
         * Creates a new R2C_Ping instance using the specified properties.
         * @param [properties] Properties to set
         * @returns R2C_Ping instance
         */
        public static create(properties?: OuterMessage.IR2C_Ping): OuterMessage.R2C_Ping;

        /**
         * Encodes the specified R2C_Ping message. Does not implicitly {@link OuterMessage.R2C_Ping.verify|verify} messages.
         * @param m R2C_Ping message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: OuterMessage.IR2C_Ping, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a R2C_Ping message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns R2C_Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): OuterMessage.R2C_Ping;
    }

    /** Properties of a G2C_Test. */
    interface IG2C_Test {
    }

    /** Represents a G2C_Test. */
    class G2C_Test implements IG2C_Test {

        /**
         * Constructs a new G2C_Test.
         * @param [p] Properties to set
         */
        constructor(p?: OuterMessage.IG2C_Test);

        /**
         * Creates a new G2C_Test instance using the specified properties.
         * @param [properties] Properties to set
         * @returns G2C_Test instance
         */
        public static create(properties?: OuterMessage.IG2C_Test): OuterMessage.G2C_Test;

        /**
         * Encodes the specified G2C_Test message. Does not implicitly {@link OuterMessage.G2C_Test.verify|verify} messages.
         * @param m G2C_Test message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: OuterMessage.IG2C_Test, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a G2C_Test message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns G2C_Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): OuterMessage.G2C_Test;
    }

    /** Properties of a C2M_Reload. */
    interface IC2M_Reload {

        /** C2M_Reload RpcId */
        RpcId?: (number | null);

        /** C2M_Reload Account */
        Account?: (string | null);

        /** C2M_Reload Password */
        Password?: (string | null);
    }

    /** Represents a C2M_Reload. */
    class C2M_Reload implements IC2M_Reload {

        /**
         * Constructs a new C2M_Reload.
         * @param [p] Properties to set
         */
        constructor(p?: OuterMessage.IC2M_Reload);

        /** C2M_Reload RpcId. */
        public RpcId: number;

        /** C2M_Reload Account. */
        public Account: string;

        /** C2M_Reload Password. */
        public Password: string;

        /**
         * Creates a new C2M_Reload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2M_Reload instance
         */
        public static create(properties?: OuterMessage.IC2M_Reload): OuterMessage.C2M_Reload;

        /**
         * Encodes the specified C2M_Reload message. Does not implicitly {@link OuterMessage.C2M_Reload.verify|verify} messages.
         * @param m C2M_Reload message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: OuterMessage.IC2M_Reload, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2M_Reload message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns C2M_Reload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): OuterMessage.C2M_Reload;
    }

    /** Properties of a M2C_Reload. */
    interface IM2C_Reload {

        /** M2C_Reload RpcId */
        RpcId?: (number | null);

        /** M2C_Reload Error */
        Error?: (number | null);

        /** M2C_Reload Message */
        Message?: (string | null);
    }

    /** Represents a M2C_Reload. */
    class M2C_Reload implements IM2C_Reload {

        /**
         * Constructs a new M2C_Reload.
         * @param [p] Properties to set
         */
        constructor(p?: OuterMessage.IM2C_Reload);

        /** M2C_Reload RpcId. */
        public RpcId: number;

        /** M2C_Reload Error. */
        public Error: number;

        /** M2C_Reload Message. */
        public Message: string;

        /**
         * Creates a new M2C_Reload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns M2C_Reload instance
         */
        public static create(properties?: OuterMessage.IM2C_Reload): OuterMessage.M2C_Reload;

        /**
         * Encodes the specified M2C_Reload message. Does not implicitly {@link OuterMessage.M2C_Reload.verify|verify} messages.
         * @param m M2C_Reload message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: OuterMessage.IM2C_Reload, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a M2C_Reload message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns M2C_Reload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): OuterMessage.M2C_Reload;
    }

    /** Properties of a SS2C_BaseNotify. */
    interface ISS2C_BaseNotify {

        /** SS2C_BaseNotify RpcId */
        RpcId?: (number | null);

        /** SS2C_BaseNotify ActorId */
        ActorId?: (Long | null);

        /** SS2C_BaseNotify data */
        data?: (string | null);
    }

    /** Represents a SS2C_BaseNotify. */
    class SS2C_BaseNotify implements ISS2C_BaseNotify {

        /**
         * Constructs a new SS2C_BaseNotify.
         * @param [p] Properties to set
         */
        constructor(p?: OuterMessage.ISS2C_BaseNotify);

        /** SS2C_BaseNotify RpcId. */
        public RpcId: number;

        /** SS2C_BaseNotify ActorId. */
        public ActorId: Long;

        /** SS2C_BaseNotify data. */
        public data: string;

        /**
         * Creates a new SS2C_BaseNotify instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SS2C_BaseNotify instance
         */
        public static create(properties?: OuterMessage.ISS2C_BaseNotify): OuterMessage.SS2C_BaseNotify;

        /**
         * Encodes the specified SS2C_BaseNotify message. Does not implicitly {@link OuterMessage.SS2C_BaseNotify.verify|verify} messages.
         * @param m SS2C_BaseNotify message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: OuterMessage.ISS2C_BaseNotify, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SS2C_BaseNotify message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SS2C_BaseNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): OuterMessage.SS2C_BaseNotify;
    }

    /** Properties of a C2G_Heartbeat. */
    interface IC2G_Heartbeat {

        /** C2G_Heartbeat RpcId */
        RpcId?: (number | null);
    }

    /** Represents a C2G_Heartbeat. */
    class C2G_Heartbeat implements IC2G_Heartbeat {

        /**
         * Constructs a new C2G_Heartbeat.
         * @param [p] Properties to set
         */
        constructor(p?: OuterMessage.IC2G_Heartbeat);

        /** C2G_Heartbeat RpcId. */
        public RpcId: number;

        /**
         * Creates a new C2G_Heartbeat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2G_Heartbeat instance
         */
        public static create(properties?: OuterMessage.IC2G_Heartbeat): OuterMessage.C2G_Heartbeat;

        /**
         * Encodes the specified C2G_Heartbeat message. Does not implicitly {@link OuterMessage.C2G_Heartbeat.verify|verify} messages.
         * @param m C2G_Heartbeat message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: OuterMessage.IC2G_Heartbeat, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2G_Heartbeat message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns C2G_Heartbeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): OuterMessage.C2G_Heartbeat;
    }

    /** Properties of a G2C_Heartbeat. */
    interface IG2C_Heartbeat {

        /** G2C_Heartbeat RpcId */
        RpcId?: (number | null);

        /** G2C_Heartbeat ServerTime */
        ServerTime?: (number | null);
    }

    /** Represents a G2C_Heartbeat. */
    class G2C_Heartbeat implements IG2C_Heartbeat {

        /**
         * Constructs a new G2C_Heartbeat.
         * @param [p] Properties to set
         */
        constructor(p?: OuterMessage.IG2C_Heartbeat);

        /** G2C_Heartbeat RpcId. */
        public RpcId: number;

        /** G2C_Heartbeat ServerTime. */
        public ServerTime: number;

        /**
         * Creates a new G2C_Heartbeat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns G2C_Heartbeat instance
         */
        public static create(properties?: OuterMessage.IG2C_Heartbeat): OuterMessage.G2C_Heartbeat;

        /**
         * Encodes the specified G2C_Heartbeat message. Does not implicitly {@link OuterMessage.G2C_Heartbeat.verify|verify} messages.
         * @param m G2C_Heartbeat message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: OuterMessage.IG2C_Heartbeat, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a G2C_Heartbeat message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns G2C_Heartbeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): OuterMessage.G2C_Heartbeat;
    }
}
