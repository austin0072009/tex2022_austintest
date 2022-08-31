/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";
var protobuf = require("protobufjs");


// Common aliases
var $Reader = protobuf.Reader, $Writer = protobuf.Writer, $util = protobuf.util;

// Exported root namespace
var $root = protobuf.roots["default"] || (protobuf.roots["default"] = {});

$root.OuterMessage = (function () {

    /**
     * Namespace OuterMessage.
     * @exports OuterMessage
     * @namespace
     */
    var OuterMessage = {};

    OuterMessage.C2SS_ActorRPCRequest = (function () {

        /**
         * Properties of a C2SS_ActorRPCRequest.
         * @memberof OuterMessage
         * @interface IC2SS_ActorRPCRequest
         * @property {number|null} [RpcId] C2SS_ActorRPCRequest RpcId
         * @property {Long|null} [ActorId] C2SS_ActorRPCRequest ActorId
         * @property {string|null} [request] C2SS_ActorRPCRequest request
         */

        /**
         * Constructs a new C2SS_ActorRPCRequest.
         * @memberof OuterMessage
         * @classdesc Represents a C2SS_ActorRPCRequest.
         * @implements IC2SS_ActorRPCRequest
         * @constructor
         * @param {OuterMessage.IC2SS_ActorRPCRequest=} [p] Properties to set
         */
        function C2SS_ActorRPCRequest(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2SS_ActorRPCRequest RpcId.
         * @member {number} RpcId
         * @memberof OuterMessage.C2SS_ActorRPCRequest
         * @instance
         */
        C2SS_ActorRPCRequest.prototype.RpcId = 0;

        /**
         * C2SS_ActorRPCRequest ActorId.
         * @member {Long} ActorId
         * @memberof OuterMessage.C2SS_ActorRPCRequest
         * @instance
         */
        C2SS_ActorRPCRequest.prototype.ActorId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * C2SS_ActorRPCRequest request.
         * @member {string} request
         * @memberof OuterMessage.C2SS_ActorRPCRequest
         * @instance
         */
        C2SS_ActorRPCRequest.prototype.request = "";

        /**
         * Creates a new C2SS_ActorRPCRequest instance using the specified properties.
         * @function create
         * @memberof OuterMessage.C2SS_ActorRPCRequest
         * @static
         * @param {OuterMessage.IC2SS_ActorRPCRequest=} [properties] Properties to set
         * @returns {OuterMessage.C2SS_ActorRPCRequest} C2SS_ActorRPCRequest instance
         */
        C2SS_ActorRPCRequest.create = function create(properties) {
            return new C2SS_ActorRPCRequest(properties);
        };

        /**
         * Encodes the specified C2SS_ActorRPCRequest message. Does not implicitly {@link OuterMessage.C2SS_ActorRPCRequest.verify|verify} messages.
         * @function encode
         * @memberof OuterMessage.C2SS_ActorRPCRequest
         * @static
         * @param {OuterMessage.IC2SS_ActorRPCRequest} m C2SS_ActorRPCRequest message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2SS_ActorRPCRequest.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.request != null && Object.hasOwnProperty.call(m, "request"))
                w.uint32(10).string(m.request);
            if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId"))
                w.uint32(720).int32(m.RpcId);
            if (m.ActorId != null && Object.hasOwnProperty.call(m, "ActorId"))
                w.uint32(744).int64(m.ActorId);
            return w;
        };

        /**
         * Decodes a C2SS_ActorRPCRequest message from the specified reader or buffer.
         * @function decode
         * @memberof OuterMessage.C2SS_ActorRPCRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {OuterMessage.C2SS_ActorRPCRequest} C2SS_ActorRPCRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2SS_ActorRPCRequest.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.OuterMessage.C2SS_ActorRPCRequest();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 90:
                        m.RpcId = r.int32();
                        break;
                    case 93:
                        m.ActorId = r.int64();
                        break;
                    case 1:
                        m.request = r.string();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };

        return C2SS_ActorRPCRequest;
    })();

    OuterMessage.SS2C_ActorRPCReply = (function () {

        /**
         * Properties of a SS2C_ActorRPCReply.
         * @memberof OuterMessage
         * @interface ISS2C_ActorRPCReply
         * @property {number|null} [RpcId] SS2C_ActorRPCReply RpcId
         * @property {number|null} [Error] SS2C_ActorRPCReply Error
         * @property {string|null} [Message] SS2C_ActorRPCReply Message
         */

        /**
         * Constructs a new SS2C_ActorRPCReply.
         * @memberof OuterMessage
         * @classdesc Represents a SS2C_ActorRPCReply.
         * @implements ISS2C_ActorRPCReply
         * @constructor
         * @param {OuterMessage.ISS2C_ActorRPCReply=} [p] Properties to set
         */
        function SS2C_ActorRPCReply(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * SS2C_ActorRPCReply RpcId.
         * @member {number} RpcId
         * @memberof OuterMessage.SS2C_ActorRPCReply
         * @instance
         */
        SS2C_ActorRPCReply.prototype.RpcId = 0;

        /**
         * SS2C_ActorRPCReply Error.
         * @member {number} Error
         * @memberof OuterMessage.SS2C_ActorRPCReply
         * @instance
         */
        SS2C_ActorRPCReply.prototype.Error = 0;

        /**
         * SS2C_ActorRPCReply Message.
         * @member {string} Message
         * @memberof OuterMessage.SS2C_ActorRPCReply
         * @instance
         */
        SS2C_ActorRPCReply.prototype.Message = "";

        /**
         * Creates a new SS2C_ActorRPCReply instance using the specified properties.
         * @function create
         * @memberof OuterMessage.SS2C_ActorRPCReply
         * @static
         * @param {OuterMessage.ISS2C_ActorRPCReply=} [properties] Properties to set
         * @returns {OuterMessage.SS2C_ActorRPCReply} SS2C_ActorRPCReply instance
         */
        SS2C_ActorRPCReply.create = function create(properties) {
            return new SS2C_ActorRPCReply(properties);
        };

        /**
         * Encodes the specified SS2C_ActorRPCReply message. Does not implicitly {@link OuterMessage.SS2C_ActorRPCReply.verify|verify} messages.
         * @function encode
         * @memberof OuterMessage.SS2C_ActorRPCReply
         * @static
         * @param {OuterMessage.ISS2C_ActorRPCReply} m SS2C_ActorRPCReply message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SS2C_ActorRPCReply.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId"))
                w.uint32(720).int32(m.RpcId);
            if (m.Error != null && Object.hasOwnProperty.call(m, "Error"))
                w.uint32(728).int32(m.Error);
            if (m.Message != null && Object.hasOwnProperty.call(m, "Message"))
                w.uint32(738).string(m.Message);
            return w;
        };

        /**
         * Decodes a SS2C_ActorRPCReply message from the specified reader or buffer.
         * @function decode
         * @memberof OuterMessage.SS2C_ActorRPCReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {OuterMessage.SS2C_ActorRPCReply} SS2C_ActorRPCReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SS2C_ActorRPCReply.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.OuterMessage.SS2C_ActorRPCReply();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 90:
                        m.RpcId = r.int32();
                        break;
                    case 91:
                        m.Error = r.int32();
                        break;
                    case 92:
                        m.Message = r.string();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };

        return SS2C_ActorRPCReply;
    })();

    OuterMessage.SS2C_ActorMessage = (function () {

        /**
         * Properties of a SS2C_ActorMessage.
         * @memberof OuterMessage
         * @interface ISS2C_ActorMessage
         * @property {number|null} [RpcId] SS2C_ActorMessage RpcId
         * @property {Long|null} [ActorId] SS2C_ActorMessage ActorId
         * @property {Array.<OuterMessage.IBroadcastInfo>|null} [Info] SS2C_ActorMessage Info
         */

        /**
         * Constructs a new SS2C_ActorMessage.
         * @memberof OuterMessage
         * @classdesc Represents a SS2C_ActorMessage.
         * @implements ISS2C_ActorMessage
         * @constructor
         * @param {OuterMessage.ISS2C_ActorMessage=} [p] Properties to set
         */
        function SS2C_ActorMessage(p) {
            this.Info = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * SS2C_ActorMessage RpcId.
         * @member {number} RpcId
         * @memberof OuterMessage.SS2C_ActorMessage
         * @instance
         */
        SS2C_ActorMessage.prototype.RpcId = 0;

        /**
         * SS2C_ActorMessage ActorId.
         * @member {Long} ActorId
         * @memberof OuterMessage.SS2C_ActorMessage
         * @instance
         */
        SS2C_ActorMessage.prototype.ActorId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * SS2C_ActorMessage Info.
         * @member {Array.<OuterMessage.IBroadcastInfo>} Info
         * @memberof OuterMessage.SS2C_ActorMessage
         * @instance
         */
        SS2C_ActorMessage.prototype.Info = $util.emptyArray;

        /**
         * Creates a new SS2C_ActorMessage instance using the specified properties.
         * @function create
         * @memberof OuterMessage.SS2C_ActorMessage
         * @static
         * @param {OuterMessage.ISS2C_ActorMessage=} [properties] Properties to set
         * @returns {OuterMessage.SS2C_ActorMessage} SS2C_ActorMessage instance
         */
        SS2C_ActorMessage.create = function create(properties) {
            return new SS2C_ActorMessage(properties);
        };

        /**
         * Encodes the specified SS2C_ActorMessage message. Does not implicitly {@link OuterMessage.SS2C_ActorMessage.verify|verify} messages.
         * @function encode
         * @memberof OuterMessage.SS2C_ActorMessage
         * @static
         * @param {OuterMessage.ISS2C_ActorMessage} m SS2C_ActorMessage message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SS2C_ActorMessage.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Info != null && m.Info.length) {
                for (var i = 0; i < m.Info.length; ++i)
                    $root.OuterMessage.BroadcastInfo.encode(m.Info[i], w.uint32(10).fork()).ldelim();
            }
            if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId"))
                w.uint32(720).int32(m.RpcId);
            if (m.ActorId != null && Object.hasOwnProperty.call(m, "ActorId"))
                w.uint32(744).int64(m.ActorId);
            return w;
        };

        /**
         * Decodes a SS2C_ActorMessage message from the specified reader or buffer.
         * @function decode
         * @memberof OuterMessage.SS2C_ActorMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {OuterMessage.SS2C_ActorMessage} SS2C_ActorMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SS2C_ActorMessage.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.OuterMessage.SS2C_ActorMessage();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 90:
                        m.RpcId = r.int32();
                        break;
                    case 93:
                        m.ActorId = r.int64();
                        break;
                    case 1:
                        if (!(m.Info && m.Info.length))
                            m.Info = [];
                        m.Info.push($root.OuterMessage.BroadcastInfo.decode(r, r.uint32()));
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };

        return SS2C_ActorMessage;
    })();

    OuterMessage.BroadcastInfo = (function () {

        /**
         * Properties of a BroadcastInfo.
         * @memberof OuterMessage
         * @interface IBroadcastInfo
         * @property {Long|null} [UnitId] BroadcastInfo UnitId
         * @property {string|null} [Message] BroadcastInfo Message
         */

        /**
         * Constructs a new BroadcastInfo.
         * @memberof OuterMessage
         * @classdesc Represents a BroadcastInfo.
         * @implements IBroadcastInfo
         * @constructor
         * @param {OuterMessage.IBroadcastInfo=} [p] Properties to set
         */
        function BroadcastInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * BroadcastInfo UnitId.
         * @member {Long} UnitId
         * @memberof OuterMessage.BroadcastInfo
         * @instance
         */
        BroadcastInfo.prototype.UnitId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * BroadcastInfo Message.
         * @member {string} Message
         * @memberof OuterMessage.BroadcastInfo
         * @instance
         */
        BroadcastInfo.prototype.Message = "";

        /**
         * Creates a new BroadcastInfo instance using the specified properties.
         * @function create
         * @memberof OuterMessage.BroadcastInfo
         * @static
         * @param {OuterMessage.IBroadcastInfo=} [properties] Properties to set
         * @returns {OuterMessage.BroadcastInfo} BroadcastInfo instance
         */
        BroadcastInfo.create = function create(properties) {
            return new BroadcastInfo(properties);
        };

        /**
         * Encodes the specified BroadcastInfo message. Does not implicitly {@link OuterMessage.BroadcastInfo.verify|verify} messages.
         * @function encode
         * @memberof OuterMessage.BroadcastInfo
         * @static
         * @param {OuterMessage.IBroadcastInfo} m BroadcastInfo message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BroadcastInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.UnitId != null && Object.hasOwnProperty.call(m, "UnitId"))
                w.uint32(8).int64(m.UnitId);
            if (m.Message != null && Object.hasOwnProperty.call(m, "Message"))
                w.uint32(18).string(m.Message);
            return w;
        };

        /**
         * Decodes a BroadcastInfo message from the specified reader or buffer.
         * @function decode
         * @memberof OuterMessage.BroadcastInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {OuterMessage.BroadcastInfo} BroadcastInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.OuterMessage.BroadcastInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1:
                        m.UnitId = r.int64();
                        break;
                    case 2:
                        m.Message = r.string();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };

        return BroadcastInfo;
    })();

    OuterMessage.C2SS_ActorMessage = (function () {

        /**
         * Properties of a C2SS_ActorMessage.
         * @memberof OuterMessage
         * @interface IC2SS_ActorMessage
         * @property {number|null} [RpcId] C2SS_ActorMessage RpcId
         * @property {Long|null} [ActorId] C2SS_ActorMessage ActorId
         * @property {string|null} [Message] C2SS_ActorMessage Message
         */

        /**
         * Constructs a new C2SS_ActorMessage.
         * @memberof OuterMessage
         * @classdesc Represents a C2SS_ActorMessage.
         * @implements IC2SS_ActorMessage
         * @constructor
         * @param {OuterMessage.IC2SS_ActorMessage=} [p] Properties to set
         */
        function C2SS_ActorMessage(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2SS_ActorMessage RpcId.
         * @member {number} RpcId
         * @memberof OuterMessage.C2SS_ActorMessage
         * @instance
         */
        C2SS_ActorMessage.prototype.RpcId = 0;

        /**
         * C2SS_ActorMessage ActorId.
         * @member {Long} ActorId
         * @memberof OuterMessage.C2SS_ActorMessage
         * @instance
         */
        C2SS_ActorMessage.prototype.ActorId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * C2SS_ActorMessage Message.
         * @member {string} Message
         * @memberof OuterMessage.C2SS_ActorMessage
         * @instance
         */
        C2SS_ActorMessage.prototype.Message = "";

        /**
         * Creates a new C2SS_ActorMessage instance using the specified properties.
         * @function create
         * @memberof OuterMessage.C2SS_ActorMessage
         * @static
         * @param {OuterMessage.IC2SS_ActorMessage=} [properties] Properties to set
         * @returns {OuterMessage.C2SS_ActorMessage} C2SS_ActorMessage instance
         */
        C2SS_ActorMessage.create = function create(properties) {
            return new C2SS_ActorMessage(properties);
        };

        /**
         * Encodes the specified C2SS_ActorMessage message. Does not implicitly {@link OuterMessage.C2SS_ActorMessage.verify|verify} messages.
         * @function encode
         * @memberof OuterMessage.C2SS_ActorMessage
         * @static
         * @param {OuterMessage.IC2SS_ActorMessage} m C2SS_ActorMessage message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2SS_ActorMessage.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId"))
                w.uint32(720).int32(m.RpcId);
            if (m.ActorId != null && Object.hasOwnProperty.call(m, "ActorId"))
                w.uint32(744).int64(m.ActorId);
            if (m.Message != null && Object.hasOwnProperty.call(m, "Message"))
                w.uint32(754).string(m.Message);
            return w;
        };

        /**
         * Decodes a C2SS_ActorMessage message from the specified reader or buffer.
         * @function decode
         * @memberof OuterMessage.C2SS_ActorMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {OuterMessage.C2SS_ActorMessage} C2SS_ActorMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2SS_ActorMessage.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.OuterMessage.C2SS_ActorMessage();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 90:
                        m.RpcId = r.int32();
                        break;
                    case 93:
                        m.ActorId = r.int64();
                        break;
                    case 94:
                        m.Message = r.string();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };

        return C2SS_ActorMessage;
    })();

    OuterMessage.C2M_TestRequest = (function () {

        /**
         * Properties of a C2M_TestRequest.
         * @memberof OuterMessage
         * @interface IC2M_TestRequest
         * @property {number|null} [RpcId] C2M_TestRequest RpcId
         * @property {Long|null} [ActorId] C2M_TestRequest ActorId
         * @property {string|null} [request] C2M_TestRequest request
         */

        /**
         * Constructs a new C2M_TestRequest.
         * @memberof OuterMessage
         * @classdesc Represents a C2M_TestRequest.
         * @implements IC2M_TestRequest
         * @constructor
         * @param {OuterMessage.IC2M_TestRequest=} [p] Properties to set
         */
        function C2M_TestRequest(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2M_TestRequest RpcId.
         * @member {number} RpcId
         * @memberof OuterMessage.C2M_TestRequest
         * @instance
         */
        C2M_TestRequest.prototype.RpcId = 0;

        /**
         * C2M_TestRequest ActorId.
         * @member {Long} ActorId
         * @memberof OuterMessage.C2M_TestRequest
         * @instance
         */
        C2M_TestRequest.prototype.ActorId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * C2M_TestRequest request.
         * @member {string} request
         * @memberof OuterMessage.C2M_TestRequest
         * @instance
         */
        C2M_TestRequest.prototype.request = "";

        /**
         * Creates a new C2M_TestRequest instance using the specified properties.
         * @function create
         * @memberof OuterMessage.C2M_TestRequest
         * @static
         * @param {OuterMessage.IC2M_TestRequest=} [properties] Properties to set
         * @returns {OuterMessage.C2M_TestRequest} C2M_TestRequest instance
         */
        C2M_TestRequest.create = function create(properties) {
            return new C2M_TestRequest(properties);
        };

        /**
         * Encodes the specified C2M_TestRequest message. Does not implicitly {@link OuterMessage.C2M_TestRequest.verify|verify} messages.
         * @function encode
         * @memberof OuterMessage.C2M_TestRequest
         * @static
         * @param {OuterMessage.IC2M_TestRequest} m C2M_TestRequest message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2M_TestRequest.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.request != null && Object.hasOwnProperty.call(m, "request"))
                w.uint32(10).string(m.request);
            if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId"))
                w.uint32(720).int32(m.RpcId);
            if (m.ActorId != null && Object.hasOwnProperty.call(m, "ActorId"))
                w.uint32(744).int64(m.ActorId);
            return w;
        };

        /**
         * Decodes a C2M_TestRequest message from the specified reader or buffer.
         * @function decode
         * @memberof OuterMessage.C2M_TestRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {OuterMessage.C2M_TestRequest} C2M_TestRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2M_TestRequest.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.OuterMessage.C2M_TestRequest();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 90:
                        m.RpcId = r.int32();
                        break;
                    case 93:
                        m.ActorId = r.int64();
                        break;
                    case 1:
                        m.request = r.string();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };

        return C2M_TestRequest;
    })();

    OuterMessage.M2C_TestResponse = (function () {

        /**
         * Properties of a M2C_TestResponse.
         * @memberof OuterMessage
         * @interface IM2C_TestResponse
         * @property {number|null} [RpcId] M2C_TestResponse RpcId
         * @property {number|null} [Error] M2C_TestResponse Error
         * @property {string|null} [Message] M2C_TestResponse Message
         * @property {string|null} [response] M2C_TestResponse response
         */

        /**
         * Constructs a new M2C_TestResponse.
         * @memberof OuterMessage
         * @classdesc Represents a M2C_TestResponse.
         * @implements IM2C_TestResponse
         * @constructor
         * @param {OuterMessage.IM2C_TestResponse=} [p] Properties to set
         */
        function M2C_TestResponse(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * M2C_TestResponse RpcId.
         * @member {number} RpcId
         * @memberof OuterMessage.M2C_TestResponse
         * @instance
         */
        M2C_TestResponse.prototype.RpcId = 0;

        /**
         * M2C_TestResponse Error.
         * @member {number} Error
         * @memberof OuterMessage.M2C_TestResponse
         * @instance
         */
        M2C_TestResponse.prototype.Error = 0;

        /**
         * M2C_TestResponse Message.
         * @member {string} Message
         * @memberof OuterMessage.M2C_TestResponse
         * @instance
         */
        M2C_TestResponse.prototype.Message = "";

        /**
         * M2C_TestResponse response.
         * @member {string} response
         * @memberof OuterMessage.M2C_TestResponse
         * @instance
         */
        M2C_TestResponse.prototype.response = "";

        /**
         * Creates a new M2C_TestResponse instance using the specified properties.
         * @function create
         * @memberof OuterMessage.M2C_TestResponse
         * @static
         * @param {OuterMessage.IM2C_TestResponse=} [properties] Properties to set
         * @returns {OuterMessage.M2C_TestResponse} M2C_TestResponse instance
         */
        M2C_TestResponse.create = function create(properties) {
            return new M2C_TestResponse(properties);
        };

        /**
         * Encodes the specified M2C_TestResponse message. Does not implicitly {@link OuterMessage.M2C_TestResponse.verify|verify} messages.
         * @function encode
         * @memberof OuterMessage.M2C_TestResponse
         * @static
         * @param {OuterMessage.IM2C_TestResponse} m M2C_TestResponse message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        M2C_TestResponse.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.response != null && Object.hasOwnProperty.call(m, "response"))
                w.uint32(10).string(m.response);
            if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId"))
                w.uint32(720).int32(m.RpcId);
            if (m.Error != null && Object.hasOwnProperty.call(m, "Error"))
                w.uint32(728).int32(m.Error);
            if (m.Message != null && Object.hasOwnProperty.call(m, "Message"))
                w.uint32(738).string(m.Message);
            return w;
        };

        /**
         * Decodes a M2C_TestResponse message from the specified reader or buffer.
         * @function decode
         * @memberof OuterMessage.M2C_TestResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {OuterMessage.M2C_TestResponse} M2C_TestResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        M2C_TestResponse.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.OuterMessage.M2C_TestResponse();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 90:
                        m.RpcId = r.int32();
                        break;
                    case 91:
                        m.Error = r.int32();
                        break;
                    case 92:
                        m.Message = r.string();
                        break;
                    case 1:
                        m.response = r.string();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };

        return M2C_TestResponse;
    })();

    OuterMessage.Actor_TransferRequest = (function () {

        /**
         * Properties of an Actor_TransferRequest.
         * @memberof OuterMessage
         * @interface IActor_TransferRequest
         * @property {number|null} [RpcId] Actor_TransferRequest RpcId
         * @property {Long|null} [ActorId] Actor_TransferRequest ActorId
         * @property {number|null} [MapIndex] Actor_TransferRequest MapIndex
         */

        /**
         * Constructs a new Actor_TransferRequest.
         * @memberof OuterMessage
         * @classdesc Represents an Actor_TransferRequest.
         * @implements IActor_TransferRequest
         * @constructor
         * @param {OuterMessage.IActor_TransferRequest=} [p] Properties to set
         */
        function Actor_TransferRequest(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Actor_TransferRequest RpcId.
         * @member {number} RpcId
         * @memberof OuterMessage.Actor_TransferRequest
         * @instance
         */
        Actor_TransferRequest.prototype.RpcId = 0;

        /**
         * Actor_TransferRequest ActorId.
         * @member {Long} ActorId
         * @memberof OuterMessage.Actor_TransferRequest
         * @instance
         */
        Actor_TransferRequest.prototype.ActorId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * Actor_TransferRequest MapIndex.
         * @member {number} MapIndex
         * @memberof OuterMessage.Actor_TransferRequest
         * @instance
         */
        Actor_TransferRequest.prototype.MapIndex = 0;

        /**
         * Creates a new Actor_TransferRequest instance using the specified properties.
         * @function create
         * @memberof OuterMessage.Actor_TransferRequest
         * @static
         * @param {OuterMessage.IActor_TransferRequest=} [properties] Properties to set
         * @returns {OuterMessage.Actor_TransferRequest} Actor_TransferRequest instance
         */
        Actor_TransferRequest.create = function create(properties) {
            return new Actor_TransferRequest(properties);
        };

        /**
         * Encodes the specified Actor_TransferRequest message. Does not implicitly {@link OuterMessage.Actor_TransferRequest.verify|verify} messages.
         * @function encode
         * @memberof OuterMessage.Actor_TransferRequest
         * @static
         * @param {OuterMessage.IActor_TransferRequest} m Actor_TransferRequest message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_TransferRequest.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.MapIndex != null && Object.hasOwnProperty.call(m, "MapIndex"))
                w.uint32(8).int32(m.MapIndex);
            if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId"))
                w.uint32(720).int32(m.RpcId);
            if (m.ActorId != null && Object.hasOwnProperty.call(m, "ActorId"))
                w.uint32(744).int64(m.ActorId);
            return w;
        };

        /**
         * Decodes an Actor_TransferRequest message from the specified reader or buffer.
         * @function decode
         * @memberof OuterMessage.Actor_TransferRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {OuterMessage.Actor_TransferRequest} Actor_TransferRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_TransferRequest.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.OuterMessage.Actor_TransferRequest();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 90:
                        m.RpcId = r.int32();
                        break;
                    case 93:
                        m.ActorId = r.int64();
                        break;
                    case 1:
                        m.MapIndex = r.int32();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };

        return Actor_TransferRequest;
    })();

    OuterMessage.Actor_TransferResponse = (function () {

        /**
         * Properties of an Actor_TransferResponse.
         * @memberof OuterMessage
         * @interface IActor_TransferResponse
         * @property {number|null} [RpcId] Actor_TransferResponse RpcId
         * @property {number|null} [Error] Actor_TransferResponse Error
         * @property {string|null} [Message] Actor_TransferResponse Message
         */

        /**
         * Constructs a new Actor_TransferResponse.
         * @memberof OuterMessage
         * @classdesc Represents an Actor_TransferResponse.
         * @implements IActor_TransferResponse
         * @constructor
         * @param {OuterMessage.IActor_TransferResponse=} [p] Properties to set
         */
        function Actor_TransferResponse(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Actor_TransferResponse RpcId.
         * @member {number} RpcId
         * @memberof OuterMessage.Actor_TransferResponse
         * @instance
         */
        Actor_TransferResponse.prototype.RpcId = 0;

        /**
         * Actor_TransferResponse Error.
         * @member {number} Error
         * @memberof OuterMessage.Actor_TransferResponse
         * @instance
         */
        Actor_TransferResponse.prototype.Error = 0;

        /**
         * Actor_TransferResponse Message.
         * @member {string} Message
         * @memberof OuterMessage.Actor_TransferResponse
         * @instance
         */
        Actor_TransferResponse.prototype.Message = "";

        /**
         * Creates a new Actor_TransferResponse instance using the specified properties.
         * @function create
         * @memberof OuterMessage.Actor_TransferResponse
         * @static
         * @param {OuterMessage.IActor_TransferResponse=} [properties] Properties to set
         * @returns {OuterMessage.Actor_TransferResponse} Actor_TransferResponse instance
         */
        Actor_TransferResponse.create = function create(properties) {
            return new Actor_TransferResponse(properties);
        };

        /**
         * Encodes the specified Actor_TransferResponse message. Does not implicitly {@link OuterMessage.Actor_TransferResponse.verify|verify} messages.
         * @function encode
         * @memberof OuterMessage.Actor_TransferResponse
         * @static
         * @param {OuterMessage.IActor_TransferResponse} m Actor_TransferResponse message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_TransferResponse.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId"))
                w.uint32(720).int32(m.RpcId);
            if (m.Error != null && Object.hasOwnProperty.call(m, "Error"))
                w.uint32(728).int32(m.Error);
            if (m.Message != null && Object.hasOwnProperty.call(m, "Message"))
                w.uint32(738).string(m.Message);
            return w;
        };

        /**
         * Decodes an Actor_TransferResponse message from the specified reader or buffer.
         * @function decode
         * @memberof OuterMessage.Actor_TransferResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {OuterMessage.Actor_TransferResponse} Actor_TransferResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_TransferResponse.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.OuterMessage.Actor_TransferResponse();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 90:
                        m.RpcId = r.int32();
                        break;
                    case 91:
                        m.Error = r.int32();
                        break;
                    case 92:
                        m.Message = r.string();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };

        return Actor_TransferResponse;
    })();

    OuterMessage.C2G_EnterMap = (function () {

        /**
         * Properties of a C2G_EnterMap.
         * @memberof OuterMessage
         * @interface IC2G_EnterMap
         * @property {number|null} [RpcId] C2G_EnterMap RpcId
         */

        /**
         * Constructs a new C2G_EnterMap.
         * @memberof OuterMessage
         * @classdesc Represents a C2G_EnterMap.
         * @implements IC2G_EnterMap
         * @constructor
         * @param {OuterMessage.IC2G_EnterMap=} [p] Properties to set
         */
        function C2G_EnterMap(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2G_EnterMap RpcId.
         * @member {number} RpcId
         * @memberof OuterMessage.C2G_EnterMap
         * @instance
         */
        C2G_EnterMap.prototype.RpcId = 0;

        /**
         * Creates a new C2G_EnterMap instance using the specified properties.
         * @function create
         * @memberof OuterMessage.C2G_EnterMap
         * @static
         * @param {OuterMessage.IC2G_EnterMap=} [properties] Properties to set
         * @returns {OuterMessage.C2G_EnterMap} C2G_EnterMap instance
         */
        C2G_EnterMap.create = function create(properties) {
            return new C2G_EnterMap(properties);
        };

        /**
         * Encodes the specified C2G_EnterMap message. Does not implicitly {@link OuterMessage.C2G_EnterMap.verify|verify} messages.
         * @function encode
         * @memberof OuterMessage.C2G_EnterMap
         * @static
         * @param {OuterMessage.IC2G_EnterMap} m C2G_EnterMap message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2G_EnterMap.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId"))
                w.uint32(720).int32(m.RpcId);
            return w;
        };

        /**
         * Decodes a C2G_EnterMap message from the specified reader or buffer.
         * @function decode
         * @memberof OuterMessage.C2G_EnterMap
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {OuterMessage.C2G_EnterMap} C2G_EnterMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2G_EnterMap.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.OuterMessage.C2G_EnterMap();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 90:
                        m.RpcId = r.int32();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };

        return C2G_EnterMap;
    })();

    OuterMessage.G2C_EnterMap = (function () {

        /**
         * Properties of a G2C_EnterMap.
         * @memberof OuterMessage
         * @interface IG2C_EnterMap
         * @property {number|null} [RpcId] G2C_EnterMap RpcId
         * @property {number|null} [Error] G2C_EnterMap Error
         * @property {string|null} [Message] G2C_EnterMap Message
         * @property {Long|null} [UnitId] G2C_EnterMap UnitId
         * @property {Array.<OuterMessage.IUnitInfo>|null} [Units] G2C_EnterMap Units
         */

        /**
         * Constructs a new G2C_EnterMap.
         * @memberof OuterMessage
         * @classdesc Represents a G2C_EnterMap.
         * @implements IG2C_EnterMap
         * @constructor
         * @param {OuterMessage.IG2C_EnterMap=} [p] Properties to set
         */
        function G2C_EnterMap(p) {
            this.Units = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * G2C_EnterMap RpcId.
         * @member {number} RpcId
         * @memberof OuterMessage.G2C_EnterMap
         * @instance
         */
        G2C_EnterMap.prototype.RpcId = 0;

        /**
         * G2C_EnterMap Error.
         * @member {number} Error
         * @memberof OuterMessage.G2C_EnterMap
         * @instance
         */
        G2C_EnterMap.prototype.Error = 0;

        /**
         * G2C_EnterMap Message.
         * @member {string} Message
         * @memberof OuterMessage.G2C_EnterMap
         * @instance
         */
        G2C_EnterMap.prototype.Message = "";

        /**
         * G2C_EnterMap UnitId.
         * @member {Long} UnitId
         * @memberof OuterMessage.G2C_EnterMap
         * @instance
         */
        G2C_EnterMap.prototype.UnitId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * G2C_EnterMap Units.
         * @member {Array.<OuterMessage.IUnitInfo>} Units
         * @memberof OuterMessage.G2C_EnterMap
         * @instance
         */
        G2C_EnterMap.prototype.Units = $util.emptyArray;

        /**
         * Creates a new G2C_EnterMap instance using the specified properties.
         * @function create
         * @memberof OuterMessage.G2C_EnterMap
         * @static
         * @param {OuterMessage.IG2C_EnterMap=} [properties] Properties to set
         * @returns {OuterMessage.G2C_EnterMap} G2C_EnterMap instance
         */
        G2C_EnterMap.create = function create(properties) {
            return new G2C_EnterMap(properties);
        };

        /**
         * Encodes the specified G2C_EnterMap message. Does not implicitly {@link OuterMessage.G2C_EnterMap.verify|verify} messages.
         * @function encode
         * @memberof OuterMessage.G2C_EnterMap
         * @static
         * @param {OuterMessage.IG2C_EnterMap} m G2C_EnterMap message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        G2C_EnterMap.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.UnitId != null && Object.hasOwnProperty.call(m, "UnitId"))
                w.uint32(8).int64(m.UnitId);
            if (m.Units != null && m.Units.length) {
                for (var i = 0; i < m.Units.length; ++i)
                    $root.OuterMessage.UnitInfo.encode(m.Units[i], w.uint32(18).fork()).ldelim();
            }
            if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId"))
                w.uint32(720).int32(m.RpcId);
            if (m.Error != null && Object.hasOwnProperty.call(m, "Error"))
                w.uint32(728).int32(m.Error);
            if (m.Message != null && Object.hasOwnProperty.call(m, "Message"))
                w.uint32(738).string(m.Message);
            return w;
        };

        /**
         * Decodes a G2C_EnterMap message from the specified reader or buffer.
         * @function decode
         * @memberof OuterMessage.G2C_EnterMap
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {OuterMessage.G2C_EnterMap} G2C_EnterMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        G2C_EnterMap.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.OuterMessage.G2C_EnterMap();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 90:
                        m.RpcId = r.int32();
                        break;
                    case 91:
                        m.Error = r.int32();
                        break;
                    case 92:
                        m.Message = r.string();
                        break;
                    case 1:
                        m.UnitId = r.int64();
                        break;
                    case 2:
                        if (!(m.Units && m.Units.length))
                            m.Units = [];
                        m.Units.push($root.OuterMessage.UnitInfo.decode(r, r.uint32()));
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };

        return G2C_EnterMap;
    })();

    OuterMessage.UnitInfo = (function () {

        /**
         * Properties of an UnitInfo.
         * @memberof OuterMessage
         * @interface IUnitInfo
         * @property {Long|null} [UnitId] UnitInfo UnitId
         * @property {number|null} [X] UnitInfo X
         * @property {number|null} [Y] UnitInfo Y
         * @property {number|null} [Z] UnitInfo Z
         */

        /**
         * Constructs a new UnitInfo.
         * @memberof OuterMessage
         * @classdesc Represents an UnitInfo.
         * @implements IUnitInfo
         * @constructor
         * @param {OuterMessage.IUnitInfo=} [p] Properties to set
         */
        function UnitInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UnitInfo UnitId.
         * @member {Long} UnitId
         * @memberof OuterMessage.UnitInfo
         * @instance
         */
        UnitInfo.prototype.UnitId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * UnitInfo X.
         * @member {number} X
         * @memberof OuterMessage.UnitInfo
         * @instance
         */
        UnitInfo.prototype.X = 0;

        /**
         * UnitInfo Y.
         * @member {number} Y
         * @memberof OuterMessage.UnitInfo
         * @instance
         */
        UnitInfo.prototype.Y = 0;

        /**
         * UnitInfo Z.
         * @member {number} Z
         * @memberof OuterMessage.UnitInfo
         * @instance
         */
        UnitInfo.prototype.Z = 0;

        /**
         * Creates a new UnitInfo instance using the specified properties.
         * @function create
         * @memberof OuterMessage.UnitInfo
         * @static
         * @param {OuterMessage.IUnitInfo=} [properties] Properties to set
         * @returns {OuterMessage.UnitInfo} UnitInfo instance
         */
        UnitInfo.create = function create(properties) {
            return new UnitInfo(properties);
        };

        /**
         * Encodes the specified UnitInfo message. Does not implicitly {@link OuterMessage.UnitInfo.verify|verify} messages.
         * @function encode
         * @memberof OuterMessage.UnitInfo
         * @static
         * @param {OuterMessage.IUnitInfo} m UnitInfo message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnitInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.UnitId != null && Object.hasOwnProperty.call(m, "UnitId"))
                w.uint32(8).int64(m.UnitId);
            if (m.X != null && Object.hasOwnProperty.call(m, "X"))
                w.uint32(21).float(m.X);
            if (m.Y != null && Object.hasOwnProperty.call(m, "Y"))
                w.uint32(29).float(m.Y);
            if (m.Z != null && Object.hasOwnProperty.call(m, "Z"))
                w.uint32(37).float(m.Z);
            return w;
        };

        /**
         * Decodes an UnitInfo message from the specified reader or buffer.
         * @function decode
         * @memberof OuterMessage.UnitInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {OuterMessage.UnitInfo} UnitInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnitInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.OuterMessage.UnitInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 1:
                        m.UnitId = r.int64();
                        break;
                    case 2:
                        m.X = r.float();
                        break;
                    case 3:
                        m.Y = r.float();
                        break;
                    case 4:
                        m.Z = r.float();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };

        return UnitInfo;
    })();

    OuterMessage.M2C_CreateUnits = (function () {

        /**
         * Properties of a M2C_CreateUnits.
         * @memberof OuterMessage
         * @interface IM2C_CreateUnits
         * @property {number|null} [RpcId] M2C_CreateUnits RpcId
         * @property {Long|null} [ActorId] M2C_CreateUnits ActorId
         * @property {Array.<OuterMessage.IUnitInfo>|null} [Units] M2C_CreateUnits Units
         */

        /**
         * Constructs a new M2C_CreateUnits.
         * @memberof OuterMessage
         * @classdesc Represents a M2C_CreateUnits.
         * @implements IM2C_CreateUnits
         * @constructor
         * @param {OuterMessage.IM2C_CreateUnits=} [p] Properties to set
         */
        function M2C_CreateUnits(p) {
            this.Units = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * M2C_CreateUnits RpcId.
         * @member {number} RpcId
         * @memberof OuterMessage.M2C_CreateUnits
         * @instance
         */
        M2C_CreateUnits.prototype.RpcId = 0;

        /**
         * M2C_CreateUnits ActorId.
         * @member {Long} ActorId
         * @memberof OuterMessage.M2C_CreateUnits
         * @instance
         */
        M2C_CreateUnits.prototype.ActorId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * M2C_CreateUnits Units.
         * @member {Array.<OuterMessage.IUnitInfo>} Units
         * @memberof OuterMessage.M2C_CreateUnits
         * @instance
         */
        M2C_CreateUnits.prototype.Units = $util.emptyArray;

        /**
         * Creates a new M2C_CreateUnits instance using the specified properties.
         * @function create
         * @memberof OuterMessage.M2C_CreateUnits
         * @static
         * @param {OuterMessage.IM2C_CreateUnits=} [properties] Properties to set
         * @returns {OuterMessage.M2C_CreateUnits} M2C_CreateUnits instance
         */
        M2C_CreateUnits.create = function create(properties) {
            return new M2C_CreateUnits(properties);
        };

        /**
         * Encodes the specified M2C_CreateUnits message. Does not implicitly {@link OuterMessage.M2C_CreateUnits.verify|verify} messages.
         * @function encode
         * @memberof OuterMessage.M2C_CreateUnits
         * @static
         * @param {OuterMessage.IM2C_CreateUnits} m M2C_CreateUnits message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        M2C_CreateUnits.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Units != null && m.Units.length) {
                for (var i = 0; i < m.Units.length; ++i)
                    $root.OuterMessage.UnitInfo.encode(m.Units[i], w.uint32(10).fork()).ldelim();
            }
            if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId"))
                w.uint32(720).int32(m.RpcId);
            if (m.ActorId != null && Object.hasOwnProperty.call(m, "ActorId"))
                w.uint32(744).int64(m.ActorId);
            return w;
        };

        /**
         * Decodes a M2C_CreateUnits message from the specified reader or buffer.
         * @function decode
         * @memberof OuterMessage.M2C_CreateUnits
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {OuterMessage.M2C_CreateUnits} M2C_CreateUnits
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        M2C_CreateUnits.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.OuterMessage.M2C_CreateUnits();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 90:
                        m.RpcId = r.int32();
                        break;
                    case 93:
                        m.ActorId = r.int64();
                        break;
                    case 1:
                        if (!(m.Units && m.Units.length))
                            m.Units = [];
                        m.Units.push($root.OuterMessage.UnitInfo.decode(r, r.uint32()));
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };

        return M2C_CreateUnits;
    })();

    OuterMessage.Frame_ClickMap = (function () {

        /**
         * Properties of a Frame_ClickMap.
         * @memberof OuterMessage
         * @interface IFrame_ClickMap
         * @property {number|null} [RpcId] Frame_ClickMap RpcId
         * @property {Long|null} [ActorId] Frame_ClickMap ActorId
         * @property {Long|null} [Id] Frame_ClickMap Id
         * @property {number|null} [X] Frame_ClickMap X
         * @property {number|null} [Y] Frame_ClickMap Y
         * @property {number|null} [Z] Frame_ClickMap Z
         */

        /**
         * Constructs a new Frame_ClickMap.
         * @memberof OuterMessage
         * @classdesc Represents a Frame_ClickMap.
         * @implements IFrame_ClickMap
         * @constructor
         * @param {OuterMessage.IFrame_ClickMap=} [p] Properties to set
         */
        function Frame_ClickMap(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Frame_ClickMap RpcId.
         * @member {number} RpcId
         * @memberof OuterMessage.Frame_ClickMap
         * @instance
         */
        Frame_ClickMap.prototype.RpcId = 0;

        /**
         * Frame_ClickMap ActorId.
         * @member {Long} ActorId
         * @memberof OuterMessage.Frame_ClickMap
         * @instance
         */
        Frame_ClickMap.prototype.ActorId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * Frame_ClickMap Id.
         * @member {Long} Id
         * @memberof OuterMessage.Frame_ClickMap
         * @instance
         */
        Frame_ClickMap.prototype.Id = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * Frame_ClickMap X.
         * @member {number} X
         * @memberof OuterMessage.Frame_ClickMap
         * @instance
         */
        Frame_ClickMap.prototype.X = 0;

        /**
         * Frame_ClickMap Y.
         * @member {number} Y
         * @memberof OuterMessage.Frame_ClickMap
         * @instance
         */
        Frame_ClickMap.prototype.Y = 0;

        /**
         * Frame_ClickMap Z.
         * @member {number} Z
         * @memberof OuterMessage.Frame_ClickMap
         * @instance
         */
        Frame_ClickMap.prototype.Z = 0;

        /**
         * Creates a new Frame_ClickMap instance using the specified properties.
         * @function create
         * @memberof OuterMessage.Frame_ClickMap
         * @static
         * @param {OuterMessage.IFrame_ClickMap=} [properties] Properties to set
         * @returns {OuterMessage.Frame_ClickMap} Frame_ClickMap instance
         */
        Frame_ClickMap.create = function create(properties) {
            return new Frame_ClickMap(properties);
        };

        /**
         * Encodes the specified Frame_ClickMap message. Does not implicitly {@link OuterMessage.Frame_ClickMap.verify|verify} messages.
         * @function encode
         * @memberof OuterMessage.Frame_ClickMap
         * @static
         * @param {OuterMessage.IFrame_ClickMap} m Frame_ClickMap message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Frame_ClickMap.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.X != null && Object.hasOwnProperty.call(m, "X"))
                w.uint32(13).float(m.X);
            if (m.Y != null && Object.hasOwnProperty.call(m, "Y"))
                w.uint32(21).float(m.Y);
            if (m.Z != null && Object.hasOwnProperty.call(m, "Z"))
                w.uint32(29).float(m.Z);
            if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId"))
                w.uint32(720).int32(m.RpcId);
            if (m.ActorId != null && Object.hasOwnProperty.call(m, "ActorId"))
                w.uint32(744).int64(m.ActorId);
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(752).int64(m.Id);
            return w;
        };

        /**
         * Decodes a Frame_ClickMap message from the specified reader or buffer.
         * @function decode
         * @memberof OuterMessage.Frame_ClickMap
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {OuterMessage.Frame_ClickMap} Frame_ClickMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Frame_ClickMap.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.OuterMessage.Frame_ClickMap();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 90:
                        m.RpcId = r.int32();
                        break;
                    case 93:
                        m.ActorId = r.int64();
                        break;
                    case 94:
                        m.Id = r.int64();
                        break;
                    case 1:
                        m.X = r.float();
                        break;
                    case 2:
                        m.Y = r.float();
                        break;
                    case 3:
                        m.Z = r.float();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };

        return Frame_ClickMap;
    })();

    OuterMessage.M2C_PathfindingResult = (function () {

        /**
         * Properties of a M2C_PathfindingResult.
         * @memberof OuterMessage
         * @interface IM2C_PathfindingResult
         * @property {Long|null} [ActorId] M2C_PathfindingResult ActorId
         * @property {Long|null} [Id] M2C_PathfindingResult Id
         * @property {number|null} [X] M2C_PathfindingResult X
         * @property {number|null} [Y] M2C_PathfindingResult Y
         * @property {number|null} [Z] M2C_PathfindingResult Z
         * @property {Array.<number>|null} [Xs] M2C_PathfindingResult Xs
         * @property {Array.<number>|null} [Ys] M2C_PathfindingResult Ys
         * @property {Array.<number>|null} [Zs] M2C_PathfindingResult Zs
         */

        /**
         * Constructs a new M2C_PathfindingResult.
         * @memberof OuterMessage
         * @classdesc Represents a M2C_PathfindingResult.
         * @implements IM2C_PathfindingResult
         * @constructor
         * @param {OuterMessage.IM2C_PathfindingResult=} [p] Properties to set
         */
        function M2C_PathfindingResult(p) {
            this.Xs = [];
            this.Ys = [];
            this.Zs = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * M2C_PathfindingResult ActorId.
         * @member {Long} ActorId
         * @memberof OuterMessage.M2C_PathfindingResult
         * @instance
         */
        M2C_PathfindingResult.prototype.ActorId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * M2C_PathfindingResult Id.
         * @member {Long} Id
         * @memberof OuterMessage.M2C_PathfindingResult
         * @instance
         */
        M2C_PathfindingResult.prototype.Id = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * M2C_PathfindingResult X.
         * @member {number} X
         * @memberof OuterMessage.M2C_PathfindingResult
         * @instance
         */
        M2C_PathfindingResult.prototype.X = 0;

        /**
         * M2C_PathfindingResult Y.
         * @member {number} Y
         * @memberof OuterMessage.M2C_PathfindingResult
         * @instance
         */
        M2C_PathfindingResult.prototype.Y = 0;

        /**
         * M2C_PathfindingResult Z.
         * @member {number} Z
         * @memberof OuterMessage.M2C_PathfindingResult
         * @instance
         */
        M2C_PathfindingResult.prototype.Z = 0;

        /**
         * M2C_PathfindingResult Xs.
         * @member {Array.<number>} Xs
         * @memberof OuterMessage.M2C_PathfindingResult
         * @instance
         */
        M2C_PathfindingResult.prototype.Xs = $util.emptyArray;

        /**
         * M2C_PathfindingResult Ys.
         * @member {Array.<number>} Ys
         * @memberof OuterMessage.M2C_PathfindingResult
         * @instance
         */
        M2C_PathfindingResult.prototype.Ys = $util.emptyArray;

        /**
         * M2C_PathfindingResult Zs.
         * @member {Array.<number>} Zs
         * @memberof OuterMessage.M2C_PathfindingResult
         * @instance
         */
        M2C_PathfindingResult.prototype.Zs = $util.emptyArray;

        /**
         * Creates a new M2C_PathfindingResult instance using the specified properties.
         * @function create
         * @memberof OuterMessage.M2C_PathfindingResult
         * @static
         * @param {OuterMessage.IM2C_PathfindingResult=} [properties] Properties to set
         * @returns {OuterMessage.M2C_PathfindingResult} M2C_PathfindingResult instance
         */
        M2C_PathfindingResult.create = function create(properties) {
            return new M2C_PathfindingResult(properties);
        };

        /**
         * Encodes the specified M2C_PathfindingResult message. Does not implicitly {@link OuterMessage.M2C_PathfindingResult.verify|verify} messages.
         * @function encode
         * @memberof OuterMessage.M2C_PathfindingResult
         * @static
         * @param {OuterMessage.IM2C_PathfindingResult} m M2C_PathfindingResult message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        M2C_PathfindingResult.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int64(m.Id);
            if (m.X != null && Object.hasOwnProperty.call(m, "X"))
                w.uint32(21).float(m.X);
            if (m.Y != null && Object.hasOwnProperty.call(m, "Y"))
                w.uint32(29).float(m.Y);
            if (m.Z != null && Object.hasOwnProperty.call(m, "Z"))
                w.uint32(37).float(m.Z);
            if (m.Xs != null && m.Xs.length) {
                w.uint32(42).fork();
                for (var i = 0; i < m.Xs.length; ++i)
                    w.float(m.Xs[i]);
                w.ldelim();
            }
            if (m.Ys != null && m.Ys.length) {
                w.uint32(50).fork();
                for (var i = 0; i < m.Ys.length; ++i)
                    w.float(m.Ys[i]);
                w.ldelim();
            }
            if (m.Zs != null && m.Zs.length) {
                w.uint32(58).fork();
                for (var i = 0; i < m.Zs.length; ++i)
                    w.float(m.Zs[i]);
                w.ldelim();
            }
            if (m.ActorId != null && Object.hasOwnProperty.call(m, "ActorId"))
                w.uint32(744).int64(m.ActorId);
            return w;
        };

        /**
         * Decodes a M2C_PathfindingResult message from the specified reader or buffer.
         * @function decode
         * @memberof OuterMessage.M2C_PathfindingResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {OuterMessage.M2C_PathfindingResult} M2C_PathfindingResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        M2C_PathfindingResult.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.OuterMessage.M2C_PathfindingResult();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 93:
                        m.ActorId = r.int64();
                        break;
                    case 1:
                        m.Id = r.int64();
                        break;
                    case 2:
                        m.X = r.float();
                        break;
                    case 3:
                        m.Y = r.float();
                        break;
                    case 4:
                        m.Z = r.float();
                        break;
                    case 5:
                        if (!(m.Xs && m.Xs.length))
                            m.Xs = [];
                        if ((t & 7) === 2) {
                            var c2 = r.uint32() + r.pos;
                            while (r.pos < c2)
                                m.Xs.push(r.float());
                        } else
                            m.Xs.push(r.float());
                        break;
                    case 6:
                        if (!(m.Ys && m.Ys.length))
                            m.Ys = [];
                        if ((t & 7) === 2) {
                            var c2 = r.uint32() + r.pos;
                            while (r.pos < c2)
                                m.Ys.push(r.float());
                        } else
                            m.Ys.push(r.float());
                        break;
                    case 7:
                        if (!(m.Zs && m.Zs.length))
                            m.Zs = [];
                        if ((t & 7) === 2) {
                            var c2 = r.uint32() + r.pos;
                            while (r.pos < c2)
                                m.Zs.push(r.float());
                        } else
                            m.Zs.push(r.float());
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };

        return M2C_PathfindingResult;
    })();

    OuterMessage.C2R_Ping = (function () {

        /**
         * Properties of a C2R_Ping.
         * @memberof OuterMessage
         * @interface IC2R_Ping
         * @property {number|null} [RpcId] C2R_Ping RpcId
         */

        /**
         * Constructs a new C2R_Ping.
         * @memberof OuterMessage
         * @classdesc Represents a C2R_Ping.
         * @implements IC2R_Ping
         * @constructor
         * @param {OuterMessage.IC2R_Ping=} [p] Properties to set
         */
        function C2R_Ping(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2R_Ping RpcId.
         * @member {number} RpcId
         * @memberof OuterMessage.C2R_Ping
         * @instance
         */
        C2R_Ping.prototype.RpcId = 0;

        /**
         * Creates a new C2R_Ping instance using the specified properties.
         * @function create
         * @memberof OuterMessage.C2R_Ping
         * @static
         * @param {OuterMessage.IC2R_Ping=} [properties] Properties to set
         * @returns {OuterMessage.C2R_Ping} C2R_Ping instance
         */
        C2R_Ping.create = function create(properties) {
            return new C2R_Ping(properties);
        };

        /**
         * Encodes the specified C2R_Ping message. Does not implicitly {@link OuterMessage.C2R_Ping.verify|verify} messages.
         * @function encode
         * @memberof OuterMessage.C2R_Ping
         * @static
         * @param {OuterMessage.IC2R_Ping} m C2R_Ping message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2R_Ping.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId"))
                w.uint32(720).int32(m.RpcId);
            return w;
        };

        /**
         * Decodes a C2R_Ping message from the specified reader or buffer.
         * @function decode
         * @memberof OuterMessage.C2R_Ping
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {OuterMessage.C2R_Ping} C2R_Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2R_Ping.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.OuterMessage.C2R_Ping();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 90:
                        m.RpcId = r.int32();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };

        return C2R_Ping;
    })();

    OuterMessage.R2C_Ping = (function () {

        /**
         * Properties of a R2C_Ping.
         * @memberof OuterMessage
         * @interface IR2C_Ping
         * @property {number|null} [RpcId] R2C_Ping RpcId
         * @property {number|null} [Error] R2C_Ping Error
         * @property {string|null} [Message] R2C_Ping Message
         */

        /**
         * Constructs a new R2C_Ping.
         * @memberof OuterMessage
         * @classdesc Represents a R2C_Ping.
         * @implements IR2C_Ping
         * @constructor
         * @param {OuterMessage.IR2C_Ping=} [p] Properties to set
         */
        function R2C_Ping(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * R2C_Ping RpcId.
         * @member {number} RpcId
         * @memberof OuterMessage.R2C_Ping
         * @instance
         */
        R2C_Ping.prototype.RpcId = 0;

        /**
         * R2C_Ping Error.
         * @member {number} Error
         * @memberof OuterMessage.R2C_Ping
         * @instance
         */
        R2C_Ping.prototype.Error = 0;

        /**
         * R2C_Ping Message.
         * @member {string} Message
         * @memberof OuterMessage.R2C_Ping
         * @instance
         */
        R2C_Ping.prototype.Message = "";

        /**
         * Creates a new R2C_Ping instance using the specified properties.
         * @function create
         * @memberof OuterMessage.R2C_Ping
         * @static
         * @param {OuterMessage.IR2C_Ping=} [properties] Properties to set
         * @returns {OuterMessage.R2C_Ping} R2C_Ping instance
         */
        R2C_Ping.create = function create(properties) {
            return new R2C_Ping(properties);
        };

        /**
         * Encodes the specified R2C_Ping message. Does not implicitly {@link OuterMessage.R2C_Ping.verify|verify} messages.
         * @function encode
         * @memberof OuterMessage.R2C_Ping
         * @static
         * @param {OuterMessage.IR2C_Ping} m R2C_Ping message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        R2C_Ping.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId"))
                w.uint32(720).int32(m.RpcId);
            if (m.Error != null && Object.hasOwnProperty.call(m, "Error"))
                w.uint32(728).int32(m.Error);
            if (m.Message != null && Object.hasOwnProperty.call(m, "Message"))
                w.uint32(738).string(m.Message);
            return w;
        };

        /**
         * Decodes a R2C_Ping message from the specified reader or buffer.
         * @function decode
         * @memberof OuterMessage.R2C_Ping
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {OuterMessage.R2C_Ping} R2C_Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        R2C_Ping.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.OuterMessage.R2C_Ping();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 90:
                        m.RpcId = r.int32();
                        break;
                    case 91:
                        m.Error = r.int32();
                        break;
                    case 92:
                        m.Message = r.string();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };

        return R2C_Ping;
    })();

    OuterMessage.G2C_Test = (function () {

        /**
         * Properties of a G2C_Test.
         * @memberof OuterMessage
         * @interface IG2C_Test
         */

        /**
         * Constructs a new G2C_Test.
         * @memberof OuterMessage
         * @classdesc Represents a G2C_Test.
         * @implements IG2C_Test
         * @constructor
         * @param {OuterMessage.IG2C_Test=} [p] Properties to set
         */
        function G2C_Test(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Creates a new G2C_Test instance using the specified properties.
         * @function create
         * @memberof OuterMessage.G2C_Test
         * @static
         * @param {OuterMessage.IG2C_Test=} [properties] Properties to set
         * @returns {OuterMessage.G2C_Test} G2C_Test instance
         */
        G2C_Test.create = function create(properties) {
            return new G2C_Test(properties);
        };

        /**
         * Encodes the specified G2C_Test message. Does not implicitly {@link OuterMessage.G2C_Test.verify|verify} messages.
         * @function encode
         * @memberof OuterMessage.G2C_Test
         * @static
         * @param {OuterMessage.IG2C_Test} m G2C_Test message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        G2C_Test.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * Decodes a G2C_Test message from the specified reader or buffer.
         * @function decode
         * @memberof OuterMessage.G2C_Test
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {OuterMessage.G2C_Test} G2C_Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        G2C_Test.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.OuterMessage.G2C_Test();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };

        return G2C_Test;
    })();

    OuterMessage.C2M_Reload = (function () {

        /**
         * Properties of a C2M_Reload.
         * @memberof OuterMessage
         * @interface IC2M_Reload
         * @property {number|null} [RpcId] C2M_Reload RpcId
         * @property {string|null} [Account] C2M_Reload Account
         * @property {string|null} [Password] C2M_Reload Password
         */

        /**
         * Constructs a new C2M_Reload.
         * @memberof OuterMessage
         * @classdesc Represents a C2M_Reload.
         * @implements IC2M_Reload
         * @constructor
         * @param {OuterMessage.IC2M_Reload=} [p] Properties to set
         */
        function C2M_Reload(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2M_Reload RpcId.
         * @member {number} RpcId
         * @memberof OuterMessage.C2M_Reload
         * @instance
         */
        C2M_Reload.prototype.RpcId = 0;

        /**
         * C2M_Reload Account.
         * @member {string} Account
         * @memberof OuterMessage.C2M_Reload
         * @instance
         */
        C2M_Reload.prototype.Account = "";

        /**
         * C2M_Reload Password.
         * @member {string} Password
         * @memberof OuterMessage.C2M_Reload
         * @instance
         */
        C2M_Reload.prototype.Password = "";

        /**
         * Creates a new C2M_Reload instance using the specified properties.
         * @function create
         * @memberof OuterMessage.C2M_Reload
         * @static
         * @param {OuterMessage.IC2M_Reload=} [properties] Properties to set
         * @returns {OuterMessage.C2M_Reload} C2M_Reload instance
         */
        C2M_Reload.create = function create(properties) {
            return new C2M_Reload(properties);
        };

        /**
         * Encodes the specified C2M_Reload message. Does not implicitly {@link OuterMessage.C2M_Reload.verify|verify} messages.
         * @function encode
         * @memberof OuterMessage.C2M_Reload
         * @static
         * @param {OuterMessage.IC2M_Reload} m C2M_Reload message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2M_Reload.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Account != null && Object.hasOwnProperty.call(m, "Account"))
                w.uint32(10).string(m.Account);
            if (m.Password != null && Object.hasOwnProperty.call(m, "Password"))
                w.uint32(18).string(m.Password);
            if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId"))
                w.uint32(720).int32(m.RpcId);
            return w;
        };

        /**
         * Decodes a C2M_Reload message from the specified reader or buffer.
         * @function decode
         * @memberof OuterMessage.C2M_Reload
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {OuterMessage.C2M_Reload} C2M_Reload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2M_Reload.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.OuterMessage.C2M_Reload();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 90:
                        m.RpcId = r.int32();
                        break;
                    case 1:
                        m.Account = r.string();
                        break;
                    case 2:
                        m.Password = r.string();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };

        return C2M_Reload;
    })();

    OuterMessage.M2C_Reload = (function () {

        /**
         * Properties of a M2C_Reload.
         * @memberof OuterMessage
         * @interface IM2C_Reload
         * @property {number|null} [RpcId] M2C_Reload RpcId
         * @property {number|null} [Error] M2C_Reload Error
         * @property {string|null} [Message] M2C_Reload Message
         */

        /**
         * Constructs a new M2C_Reload.
         * @memberof OuterMessage
         * @classdesc Represents a M2C_Reload.
         * @implements IM2C_Reload
         * @constructor
         * @param {OuterMessage.IM2C_Reload=} [p] Properties to set
         */
        function M2C_Reload(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * M2C_Reload RpcId.
         * @member {number} RpcId
         * @memberof OuterMessage.M2C_Reload
         * @instance
         */
        M2C_Reload.prototype.RpcId = 0;

        /**
         * M2C_Reload Error.
         * @member {number} Error
         * @memberof OuterMessage.M2C_Reload
         * @instance
         */
        M2C_Reload.prototype.Error = 0;

        /**
         * M2C_Reload Message.
         * @member {string} Message
         * @memberof OuterMessage.M2C_Reload
         * @instance
         */
        M2C_Reload.prototype.Message = "";

        /**
         * Creates a new M2C_Reload instance using the specified properties.
         * @function create
         * @memberof OuterMessage.M2C_Reload
         * @static
         * @param {OuterMessage.IM2C_Reload=} [properties] Properties to set
         * @returns {OuterMessage.M2C_Reload} M2C_Reload instance
         */
        M2C_Reload.create = function create(properties) {
            return new M2C_Reload(properties);
        };

        /**
         * Encodes the specified M2C_Reload message. Does not implicitly {@link OuterMessage.M2C_Reload.verify|verify} messages.
         * @function encode
         * @memberof OuterMessage.M2C_Reload
         * @static
         * @param {OuterMessage.IM2C_Reload} m M2C_Reload message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        M2C_Reload.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId"))
                w.uint32(720).int32(m.RpcId);
            if (m.Error != null && Object.hasOwnProperty.call(m, "Error"))
                w.uint32(728).int32(m.Error);
            if (m.Message != null && Object.hasOwnProperty.call(m, "Message"))
                w.uint32(738).string(m.Message);
            return w;
        };

        /**
         * Decodes a M2C_Reload message from the specified reader or buffer.
         * @function decode
         * @memberof OuterMessage.M2C_Reload
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {OuterMessage.M2C_Reload} M2C_Reload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        M2C_Reload.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.OuterMessage.M2C_Reload();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 90:
                        m.RpcId = r.int32();
                        break;
                    case 91:
                        m.Error = r.int32();
                        break;
                    case 92:
                        m.Message = r.string();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };

        return M2C_Reload;
    })();

    OuterMessage.SS2C_BaseNotify = (function () {

        /**
         * Properties of a SS2C_BaseNotify.
         * @memberof OuterMessage
         * @interface ISS2C_BaseNotify
         * @property {number|null} [RpcId] SS2C_BaseNotify RpcId
         * @property {Long|null} [ActorId] SS2C_BaseNotify ActorId
         * @property {string|null} [data] SS2C_BaseNotify data
         */

        /**
         * Constructs a new SS2C_BaseNotify.
         * @memberof OuterMessage
         * @classdesc Represents a SS2C_BaseNotify.
         * @implements ISS2C_BaseNotify
         * @constructor
         * @param {OuterMessage.ISS2C_BaseNotify=} [p] Properties to set
         */
        function SS2C_BaseNotify(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * SS2C_BaseNotify RpcId.
         * @member {number} RpcId
         * @memberof OuterMessage.SS2C_BaseNotify
         * @instance
         */
        SS2C_BaseNotify.prototype.RpcId = 0;

        /**
         * SS2C_BaseNotify ActorId.
         * @member {Long} ActorId
         * @memberof OuterMessage.SS2C_BaseNotify
         * @instance
         */
        SS2C_BaseNotify.prototype.ActorId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * SS2C_BaseNotify data.
         * @member {string} data
         * @memberof OuterMessage.SS2C_BaseNotify
         * @instance
         */
        SS2C_BaseNotify.prototype.data = "";

        /**
         * Creates a new SS2C_BaseNotify instance using the specified properties.
         * @function create
         * @memberof OuterMessage.SS2C_BaseNotify
         * @static
         * @param {OuterMessage.ISS2C_BaseNotify=} [properties] Properties to set
         * @returns {OuterMessage.SS2C_BaseNotify} SS2C_BaseNotify instance
         */
        SS2C_BaseNotify.create = function create(properties) {
            return new SS2C_BaseNotify(properties);
        };

        /**
         * Encodes the specified SS2C_BaseNotify message. Does not implicitly {@link OuterMessage.SS2C_BaseNotify.verify|verify} messages.
         * @function encode
         * @memberof OuterMessage.SS2C_BaseNotify
         * @static
         * @param {OuterMessage.ISS2C_BaseNotify} m SS2C_BaseNotify message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SS2C_BaseNotify.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId"))
                w.uint32(720).int32(m.RpcId);
            if (m.ActorId != null && Object.hasOwnProperty.call(m, "ActorId"))
                w.uint32(744).int64(m.ActorId);
            if (m.data != null && Object.hasOwnProperty.call(m, "data"))
                w.uint32(754).string(m.data);
            return w;
        };

        /**
         * Decodes a SS2C_BaseNotify message from the specified reader or buffer.
         * @function decode
         * @memberof OuterMessage.SS2C_BaseNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {OuterMessage.SS2C_BaseNotify} SS2C_BaseNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SS2C_BaseNotify.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.OuterMessage.SS2C_BaseNotify();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 90:
                        m.RpcId = r.int32();
                        break;
                    case 93:
                        m.ActorId = r.int64();
                        break;
                    case 94:
                        m.data = r.string();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };

        return SS2C_BaseNotify;
    })();

    OuterMessage.C2G_Heartbeat = (function () {

        /**
         * Properties of a C2G_Heartbeat.
         * @memberof OuterMessage
         * @interface IC2G_Heartbeat
         * @property {number|null} [RpcId] C2G_Heartbeat RpcId
         */

        /**
         * Constructs a new C2G_Heartbeat.
         * @memberof OuterMessage
         * @classdesc Represents a C2G_Heartbeat.
         * @implements IC2G_Heartbeat
         * @constructor
         * @param {OuterMessage.IC2G_Heartbeat=} [p] Properties to set
         */
        function C2G_Heartbeat(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2G_Heartbeat RpcId.
         * @member {number} RpcId
         * @memberof OuterMessage.C2G_Heartbeat
         * @instance
         */
        C2G_Heartbeat.prototype.RpcId = 0;

        /**
         * Creates a new C2G_Heartbeat instance using the specified properties.
         * @function create
         * @memberof OuterMessage.C2G_Heartbeat
         * @static
         * @param {OuterMessage.IC2G_Heartbeat=} [properties] Properties to set
         * @returns {OuterMessage.C2G_Heartbeat} C2G_Heartbeat instance
         */
        C2G_Heartbeat.create = function create(properties) {
            return new C2G_Heartbeat(properties);
        };

        /**
         * Encodes the specified C2G_Heartbeat message. Does not implicitly {@link OuterMessage.C2G_Heartbeat.verify|verify} messages.
         * @function encode
         * @memberof OuterMessage.C2G_Heartbeat
         * @static
         * @param {OuterMessage.IC2G_Heartbeat} m C2G_Heartbeat message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2G_Heartbeat.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId"))
                w.uint32(720).int32(m.RpcId);
            return w;
        };

        /**
         * Decodes a C2G_Heartbeat message from the specified reader or buffer.
         * @function decode
         * @memberof OuterMessage.C2G_Heartbeat
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {OuterMessage.C2G_Heartbeat} C2G_Heartbeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2G_Heartbeat.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.OuterMessage.C2G_Heartbeat();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 90:
                        m.RpcId = r.int32();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };

        return C2G_Heartbeat;
    })();

    OuterMessage.G2C_Heartbeat = (function () {

        /**
         * Properties of a G2C_Heartbeat.
         * @memberof OuterMessage
         * @interface IG2C_Heartbeat
         * @property {number|null} [RpcId] G2C_Heartbeat RpcId
         * @property {number|null} [ServerTime] G2C_Heartbeat ServerTime
         */

        /**
         * Constructs a new G2C_Heartbeat.
         * @memberof OuterMessage
         * @classdesc Represents a G2C_Heartbeat.
         * @implements IG2C_Heartbeat
         * @constructor
         * @param {OuterMessage.IG2C_Heartbeat=} [p] Properties to set
         */
        function G2C_Heartbeat(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * G2C_Heartbeat RpcId.
         * @member {number} RpcId
         * @memberof OuterMessage.G2C_Heartbeat
         * @instance
         */
        G2C_Heartbeat.prototype.RpcId = 0;

        /**
         * G2C_Heartbeat ServerTime.
         * @member {number} ServerTime
         * @memberof OuterMessage.G2C_Heartbeat
         * @instance
         */
        G2C_Heartbeat.prototype.ServerTime = 0;

        /**
         * Creates a new G2C_Heartbeat instance using the specified properties.
         * @function create
         * @memberof OuterMessage.G2C_Heartbeat
         * @static
         * @param {OuterMessage.IG2C_Heartbeat=} [properties] Properties to set
         * @returns {OuterMessage.G2C_Heartbeat} G2C_Heartbeat instance
         */
        G2C_Heartbeat.create = function create(properties) {
            return new G2C_Heartbeat(properties);
        };

        /**
         * Encodes the specified G2C_Heartbeat message. Does not implicitly {@link OuterMessage.G2C_Heartbeat.verify|verify} messages.
         * @function encode
         * @memberof OuterMessage.G2C_Heartbeat
         * @static
         * @param {OuterMessage.IG2C_Heartbeat} m G2C_Heartbeat message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        G2C_Heartbeat.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId"))
                w.uint32(720).int32(m.RpcId);
            if (m.ServerTime != null && Object.hasOwnProperty.call(m, "ServerTime"))
                w.uint32(728).int32(m.ServerTime);
            return w;
        };

        /**
         * Decodes a G2C_Heartbeat message from the specified reader or buffer.
         * @function decode
         * @memberof OuterMessage.G2C_Heartbeat
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {OuterMessage.G2C_Heartbeat} G2C_Heartbeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        G2C_Heartbeat.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.OuterMessage.G2C_Heartbeat();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                    case 90:
                        m.RpcId = r.int32();
                        break;
                    case 91:
                        m.ServerTime = r.int32();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                }
            }
            return m;
        };

        return G2C_Heartbeat;
    })();

    return OuterMessage;
})();

module.exports = $root;
