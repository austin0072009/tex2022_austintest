
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/utils/lib/proto/OuterMessage.pb.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4520dGFV0tI4Iosb5C244iG', 'OuterMessage.pb');
// Script/modules/@mogafa/utils/lib/proto/OuterMessage.pb.js

/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var protobuf = require("protobufjs"); // Common aliases


var $Reader = protobuf.Reader,
    $Writer = protobuf.Writer,
    $util = protobuf.util; // Exported root namespace

var $root = protobuf.roots["default"] || (protobuf.roots["default"] = {});

$root.OuterMessage = function () {
  /**
   * Namespace OuterMessage.
   * @exports OuterMessage
   * @namespace
   */
  var OuterMessage = {};

  OuterMessage.C2SS_ActorRPCRequest = function () {
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
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) {
        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
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
      if (!w) w = $Writer.create();
      if (m.request != null && Object.hasOwnProperty.call(m, "request")) w.uint32(10).string(m.request);
      if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId")) w.uint32(720).int32(m.RpcId);
      if (m.ActorId != null && Object.hasOwnProperty.call(m, "ActorId")) w.uint32(744).int64(m.ActorId);
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
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
          m = new $root.OuterMessage.C2SS_ActorRPCRequest();

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
  }();

  OuterMessage.SS2C_ActorRPCReply = function () {
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
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) {
        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
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
      if (!w) w = $Writer.create();
      if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId")) w.uint32(720).int32(m.RpcId);
      if (m.Error != null && Object.hasOwnProperty.call(m, "Error")) w.uint32(728).int32(m.Error);
      if (m.Message != null && Object.hasOwnProperty.call(m, "Message")) w.uint32(738).string(m.Message);
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
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
          m = new $root.OuterMessage.SS2C_ActorRPCReply();

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
  }();

  OuterMessage.SS2C_ActorMessage = function () {
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
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) {
        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
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
      if (!w) w = $Writer.create();

      if (m.Info != null && m.Info.length) {
        for (var i = 0; i < m.Info.length; ++i) {
          $root.OuterMessage.BroadcastInfo.encode(m.Info[i], w.uint32(10).fork()).ldelim();
        }
      }

      if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId")) w.uint32(720).int32(m.RpcId);
      if (m.ActorId != null && Object.hasOwnProperty.call(m, "ActorId")) w.uint32(744).int64(m.ActorId);
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
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
          m = new $root.OuterMessage.SS2C_ActorMessage();

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
            if (!(m.Info && m.Info.length)) m.Info = [];
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
  }();

  OuterMessage.BroadcastInfo = function () {
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
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) {
        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
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
      if (!w) w = $Writer.create();
      if (m.UnitId != null && Object.hasOwnProperty.call(m, "UnitId")) w.uint32(8).int64(m.UnitId);
      if (m.Message != null && Object.hasOwnProperty.call(m, "Message")) w.uint32(18).string(m.Message);
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
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
          m = new $root.OuterMessage.BroadcastInfo();

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
  }();

  OuterMessage.C2SS_ActorMessage = function () {
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
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) {
        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
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
      if (!w) w = $Writer.create();
      if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId")) w.uint32(720).int32(m.RpcId);
      if (m.ActorId != null && Object.hasOwnProperty.call(m, "ActorId")) w.uint32(744).int64(m.ActorId);
      if (m.Message != null && Object.hasOwnProperty.call(m, "Message")) w.uint32(754).string(m.Message);
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
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
          m = new $root.OuterMessage.C2SS_ActorMessage();

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
  }();

  OuterMessage.C2M_TestRequest = function () {
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
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) {
        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
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
      if (!w) w = $Writer.create();
      if (m.request != null && Object.hasOwnProperty.call(m, "request")) w.uint32(10).string(m.request);
      if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId")) w.uint32(720).int32(m.RpcId);
      if (m.ActorId != null && Object.hasOwnProperty.call(m, "ActorId")) w.uint32(744).int64(m.ActorId);
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
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
          m = new $root.OuterMessage.C2M_TestRequest();

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
  }();

  OuterMessage.M2C_TestResponse = function () {
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
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) {
        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
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
      if (!w) w = $Writer.create();
      if (m.response != null && Object.hasOwnProperty.call(m, "response")) w.uint32(10).string(m.response);
      if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId")) w.uint32(720).int32(m.RpcId);
      if (m.Error != null && Object.hasOwnProperty.call(m, "Error")) w.uint32(728).int32(m.Error);
      if (m.Message != null && Object.hasOwnProperty.call(m, "Message")) w.uint32(738).string(m.Message);
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
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
          m = new $root.OuterMessage.M2C_TestResponse();

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
  }();

  OuterMessage.Actor_TransferRequest = function () {
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
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) {
        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
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
      if (!w) w = $Writer.create();
      if (m.MapIndex != null && Object.hasOwnProperty.call(m, "MapIndex")) w.uint32(8).int32(m.MapIndex);
      if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId")) w.uint32(720).int32(m.RpcId);
      if (m.ActorId != null && Object.hasOwnProperty.call(m, "ActorId")) w.uint32(744).int64(m.ActorId);
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
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
          m = new $root.OuterMessage.Actor_TransferRequest();

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
  }();

  OuterMessage.Actor_TransferResponse = function () {
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
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) {
        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
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
      if (!w) w = $Writer.create();
      if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId")) w.uint32(720).int32(m.RpcId);
      if (m.Error != null && Object.hasOwnProperty.call(m, "Error")) w.uint32(728).int32(m.Error);
      if (m.Message != null && Object.hasOwnProperty.call(m, "Message")) w.uint32(738).string(m.Message);
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
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
          m = new $root.OuterMessage.Actor_TransferResponse();

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
  }();

  OuterMessage.C2G_EnterMap = function () {
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
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) {
        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
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
      if (!w) w = $Writer.create();
      if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId")) w.uint32(720).int32(m.RpcId);
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
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
          m = new $root.OuterMessage.C2G_EnterMap();

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
  }();

  OuterMessage.G2C_EnterMap = function () {
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
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) {
        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
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
      if (!w) w = $Writer.create();
      if (m.UnitId != null && Object.hasOwnProperty.call(m, "UnitId")) w.uint32(8).int64(m.UnitId);

      if (m.Units != null && m.Units.length) {
        for (var i = 0; i < m.Units.length; ++i) {
          $root.OuterMessage.UnitInfo.encode(m.Units[i], w.uint32(18).fork()).ldelim();
        }
      }

      if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId")) w.uint32(720).int32(m.RpcId);
      if (m.Error != null && Object.hasOwnProperty.call(m, "Error")) w.uint32(728).int32(m.Error);
      if (m.Message != null && Object.hasOwnProperty.call(m, "Message")) w.uint32(738).string(m.Message);
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
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
          m = new $root.OuterMessage.G2C_EnterMap();

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
            if (!(m.Units && m.Units.length)) m.Units = [];
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
  }();

  OuterMessage.UnitInfo = function () {
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
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) {
        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
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
      if (!w) w = $Writer.create();
      if (m.UnitId != null && Object.hasOwnProperty.call(m, "UnitId")) w.uint32(8).int64(m.UnitId);
      if (m.X != null && Object.hasOwnProperty.call(m, "X")) w.uint32(21)["float"](m.X);
      if (m.Y != null && Object.hasOwnProperty.call(m, "Y")) w.uint32(29)["float"](m.Y);
      if (m.Z != null && Object.hasOwnProperty.call(m, "Z")) w.uint32(37)["float"](m.Z);
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
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
          m = new $root.OuterMessage.UnitInfo();

      while (r.pos < c) {
        var t = r.uint32();

        switch (t >>> 3) {
          case 1:
            m.UnitId = r.int64();
            break;

          case 2:
            m.X = r["float"]();
            break;

          case 3:
            m.Y = r["float"]();
            break;

          case 4:
            m.Z = r["float"]();
            break;

          default:
            r.skipType(t & 7);
            break;
        }
      }

      return m;
    };

    return UnitInfo;
  }();

  OuterMessage.M2C_CreateUnits = function () {
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
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) {
        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
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
      if (!w) w = $Writer.create();

      if (m.Units != null && m.Units.length) {
        for (var i = 0; i < m.Units.length; ++i) {
          $root.OuterMessage.UnitInfo.encode(m.Units[i], w.uint32(10).fork()).ldelim();
        }
      }

      if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId")) w.uint32(720).int32(m.RpcId);
      if (m.ActorId != null && Object.hasOwnProperty.call(m, "ActorId")) w.uint32(744).int64(m.ActorId);
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
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
          m = new $root.OuterMessage.M2C_CreateUnits();

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
            if (!(m.Units && m.Units.length)) m.Units = [];
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
  }();

  OuterMessage.Frame_ClickMap = function () {
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
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) {
        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
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
      if (!w) w = $Writer.create();
      if (m.X != null && Object.hasOwnProperty.call(m, "X")) w.uint32(13)["float"](m.X);
      if (m.Y != null && Object.hasOwnProperty.call(m, "Y")) w.uint32(21)["float"](m.Y);
      if (m.Z != null && Object.hasOwnProperty.call(m, "Z")) w.uint32(29)["float"](m.Z);
      if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId")) w.uint32(720).int32(m.RpcId);
      if (m.ActorId != null && Object.hasOwnProperty.call(m, "ActorId")) w.uint32(744).int64(m.ActorId);
      if (m.Id != null && Object.hasOwnProperty.call(m, "Id")) w.uint32(752).int64(m.Id);
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
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
          m = new $root.OuterMessage.Frame_ClickMap();

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
            m.X = r["float"]();
            break;

          case 2:
            m.Y = r["float"]();
            break;

          case 3:
            m.Z = r["float"]();
            break;

          default:
            r.skipType(t & 7);
            break;
        }
      }

      return m;
    };

    return Frame_ClickMap;
  }();

  OuterMessage.M2C_PathfindingResult = function () {
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
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) {
        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
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
      if (!w) w = $Writer.create();
      if (m.Id != null && Object.hasOwnProperty.call(m, "Id")) w.uint32(8).int64(m.Id);
      if (m.X != null && Object.hasOwnProperty.call(m, "X")) w.uint32(21)["float"](m.X);
      if (m.Y != null && Object.hasOwnProperty.call(m, "Y")) w.uint32(29)["float"](m.Y);
      if (m.Z != null && Object.hasOwnProperty.call(m, "Z")) w.uint32(37)["float"](m.Z);

      if (m.Xs != null && m.Xs.length) {
        w.uint32(42).fork();

        for (var i = 0; i < m.Xs.length; ++i) {
          w["float"](m.Xs[i]);
        }

        w.ldelim();
      }

      if (m.Ys != null && m.Ys.length) {
        w.uint32(50).fork();

        for (var i = 0; i < m.Ys.length; ++i) {
          w["float"](m.Ys[i]);
        }

        w.ldelim();
      }

      if (m.Zs != null && m.Zs.length) {
        w.uint32(58).fork();

        for (var i = 0; i < m.Zs.length; ++i) {
          w["float"](m.Zs[i]);
        }

        w.ldelim();
      }

      if (m.ActorId != null && Object.hasOwnProperty.call(m, "ActorId")) w.uint32(744).int64(m.ActorId);
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
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
          m = new $root.OuterMessage.M2C_PathfindingResult();

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
            m.X = r["float"]();
            break;

          case 3:
            m.Y = r["float"]();
            break;

          case 4:
            m.Z = r["float"]();
            break;

          case 5:
            if (!(m.Xs && m.Xs.length)) m.Xs = [];

            if ((t & 7) === 2) {
              var c2 = r.uint32() + r.pos;

              while (r.pos < c2) {
                m.Xs.push(r["float"]());
              }
            } else m.Xs.push(r["float"]());

            break;

          case 6:
            if (!(m.Ys && m.Ys.length)) m.Ys = [];

            if ((t & 7) === 2) {
              var c2 = r.uint32() + r.pos;

              while (r.pos < c2) {
                m.Ys.push(r["float"]());
              }
            } else m.Ys.push(r["float"]());

            break;

          case 7:
            if (!(m.Zs && m.Zs.length)) m.Zs = [];

            if ((t & 7) === 2) {
              var c2 = r.uint32() + r.pos;

              while (r.pos < c2) {
                m.Zs.push(r["float"]());
              }
            } else m.Zs.push(r["float"]());

            break;

          default:
            r.skipType(t & 7);
            break;
        }
      }

      return m;
    };

    return M2C_PathfindingResult;
  }();

  OuterMessage.C2R_Ping = function () {
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
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) {
        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
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
      if (!w) w = $Writer.create();
      if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId")) w.uint32(720).int32(m.RpcId);
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
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
          m = new $root.OuterMessage.C2R_Ping();

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
  }();

  OuterMessage.R2C_Ping = function () {
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
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) {
        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
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
      if (!w) w = $Writer.create();
      if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId")) w.uint32(720).int32(m.RpcId);
      if (m.Error != null && Object.hasOwnProperty.call(m, "Error")) w.uint32(728).int32(m.Error);
      if (m.Message != null && Object.hasOwnProperty.call(m, "Message")) w.uint32(738).string(m.Message);
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
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
          m = new $root.OuterMessage.R2C_Ping();

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
  }();

  OuterMessage.G2C_Test = function () {
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
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) {
        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
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
      if (!w) w = $Writer.create();
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
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
          m = new $root.OuterMessage.G2C_Test();

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
  }();

  OuterMessage.C2M_Reload = function () {
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
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) {
        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
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
      if (!w) w = $Writer.create();
      if (m.Account != null && Object.hasOwnProperty.call(m, "Account")) w.uint32(10).string(m.Account);
      if (m.Password != null && Object.hasOwnProperty.call(m, "Password")) w.uint32(18).string(m.Password);
      if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId")) w.uint32(720).int32(m.RpcId);
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
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
          m = new $root.OuterMessage.C2M_Reload();

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
  }();

  OuterMessage.M2C_Reload = function () {
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
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) {
        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
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
      if (!w) w = $Writer.create();
      if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId")) w.uint32(720).int32(m.RpcId);
      if (m.Error != null && Object.hasOwnProperty.call(m, "Error")) w.uint32(728).int32(m.Error);
      if (m.Message != null && Object.hasOwnProperty.call(m, "Message")) w.uint32(738).string(m.Message);
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
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
          m = new $root.OuterMessage.M2C_Reload();

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
  }();

  OuterMessage.SS2C_BaseNotify = function () {
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
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) {
        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
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
      if (!w) w = $Writer.create();
      if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId")) w.uint32(720).int32(m.RpcId);
      if (m.ActorId != null && Object.hasOwnProperty.call(m, "ActorId")) w.uint32(744).int64(m.ActorId);
      if (m.data != null && Object.hasOwnProperty.call(m, "data")) w.uint32(754).string(m.data);
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
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
          m = new $root.OuterMessage.SS2C_BaseNotify();

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
  }();

  OuterMessage.C2G_Heartbeat = function () {
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
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) {
        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
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
      if (!w) w = $Writer.create();
      if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId")) w.uint32(720).int32(m.RpcId);
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
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
          m = new $root.OuterMessage.C2G_Heartbeat();

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
  }();

  OuterMessage.G2C_Heartbeat = function () {
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
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) {
        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
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
      if (!w) w = $Writer.create();
      if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId")) w.uint32(720).int32(m.RpcId);
      if (m.ServerTime != null && Object.hasOwnProperty.call(m, "ServerTime")) w.uint32(728).int32(m.ServerTime);
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
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
          m = new $root.OuterMessage.G2C_Heartbeat();

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
  }();

  return OuterMessage;
}();

module.exports = $root;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFx1dGlsc1xcbGliXFxwcm90b1xcT3V0ZXJNZXNzYWdlLnBiLmpzIl0sIm5hbWVzIjpbInByb3RvYnVmIiwicmVxdWlyZSIsIiRSZWFkZXIiLCJSZWFkZXIiLCIkV3JpdGVyIiwiV3JpdGVyIiwiJHV0aWwiLCJ1dGlsIiwiJHJvb3QiLCJyb290cyIsIk91dGVyTWVzc2FnZSIsIkMyU1NfQWN0b3JSUENSZXF1ZXN0IiwicCIsImtzIiwiT2JqZWN0Iiwia2V5cyIsImkiLCJsZW5ndGgiLCJwcm90b3R5cGUiLCJScGNJZCIsIkFjdG9ySWQiLCJMb25nIiwiZnJvbUJpdHMiLCJyZXF1ZXN0IiwiY3JlYXRlIiwicHJvcGVydGllcyIsImVuY29kZSIsIm0iLCJ3IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwidWludDMyIiwic3RyaW5nIiwiaW50MzIiLCJpbnQ2NCIsImRlY29kZSIsInIiLCJsIiwiYyIsInVuZGVmaW5lZCIsImxlbiIsInBvcyIsInQiLCJza2lwVHlwZSIsIlNTMkNfQWN0b3JSUENSZXBseSIsIkVycm9yIiwiTWVzc2FnZSIsIlNTMkNfQWN0b3JNZXNzYWdlIiwiSW5mbyIsImVtcHR5QXJyYXkiLCJCcm9hZGNhc3RJbmZvIiwiZm9yayIsImxkZWxpbSIsInB1c2giLCJVbml0SWQiLCJDMlNTX0FjdG9yTWVzc2FnZSIsIkMyTV9UZXN0UmVxdWVzdCIsIk0yQ19UZXN0UmVzcG9uc2UiLCJyZXNwb25zZSIsIkFjdG9yX1RyYW5zZmVyUmVxdWVzdCIsIk1hcEluZGV4IiwiQWN0b3JfVHJhbnNmZXJSZXNwb25zZSIsIkMyR19FbnRlck1hcCIsIkcyQ19FbnRlck1hcCIsIlVuaXRzIiwiVW5pdEluZm8iLCJYIiwiWSIsIloiLCJNMkNfQ3JlYXRlVW5pdHMiLCJGcmFtZV9DbGlja01hcCIsIklkIiwiTTJDX1BhdGhmaW5kaW5nUmVzdWx0IiwiWHMiLCJZcyIsIlpzIiwiYzIiLCJDMlJfUGluZyIsIlIyQ19QaW5nIiwiRzJDX1Rlc3QiLCJDMk1fUmVsb2FkIiwiQWNjb3VudCIsIlBhc3N3b3JkIiwiTTJDX1JlbG9hZCIsIlNTMkNfQmFzZU5vdGlmeSIsImRhdGEiLCJDMkdfSGVhcnRiZWF0IiwiRzJDX0hlYXJ0YmVhdCIsIlNlcnZlclRpbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUNBLElBQUlBLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFlBQUQsQ0FBdEIsRUFHQTs7O0FBQ0EsSUFBSUMsT0FBTyxHQUFHRixRQUFRLENBQUNHLE1BQXZCO0FBQUEsSUFBK0JDLE9BQU8sR0FBR0osUUFBUSxDQUFDSyxNQUFsRDtBQUFBLElBQTBEQyxLQUFLLEdBQUdOLFFBQVEsQ0FBQ08sSUFBM0UsRUFFQTs7QUFDQSxJQUFJQyxLQUFLLEdBQUdSLFFBQVEsQ0FBQ1MsS0FBVCxDQUFlLFNBQWYsTUFBOEJULFFBQVEsQ0FBQ1MsS0FBVCxDQUFlLFNBQWYsSUFBNEIsRUFBMUQsQ0FBWjs7QUFFQUQsS0FBSyxDQUFDRSxZQUFOLEdBQXNCLFlBQVk7QUFFOUI7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNJLE1BQUlBLFlBQVksR0FBRyxFQUFuQjs7QUFFQUEsRUFBQUEsWUFBWSxDQUFDQyxvQkFBYixHQUFxQyxZQUFZO0FBRTdDO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNRLGFBQVNBLG9CQUFULENBQThCQyxDQUE5QixFQUFpQztBQUM3QixVQUFJQSxDQUFKLEVBQ0ksS0FBSyxJQUFJQyxFQUFFLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSCxDQUFaLENBQVQsRUFBeUJJLENBQUMsR0FBRyxDQUFsQyxFQUFxQ0EsQ0FBQyxHQUFHSCxFQUFFLENBQUNJLE1BQTVDLEVBQW9ELEVBQUVELENBQXREO0FBQ0ksWUFBSUosQ0FBQyxDQUFDQyxFQUFFLENBQUNH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QUFDSCxLQUFGLEVBQWY7QUFDQTs7QUFDSjtBQUNJRyxZQUFBQSxDQUFDLENBQUNPLFFBQUYsQ0FBV0QsQ0FBQyxHQUFHLENBQWY7QUFDQTtBQVRSO0FBV0g7O0FBQ0QsYUFBT2YsQ0FBUDtBQUNILEtBbkJEOztBQXFCQSxXQUFPNEQsYUFBUDtBQUNILEdBekc0QixFQUE3Qjs7QUEyR0EsU0FBTzdFLFlBQVA7QUFDSCxDQTF5Rm9CLEVBQXJCOztBQTR5RkErRSxNQUFNLENBQUNDLE9BQVAsR0FBaUJsRixLQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyplc2xpbnQtZGlzYWJsZSBibG9jay1zY29wZWQtdmFyLCBpZC1sZW5ndGgsIG5vLWNvbnRyb2wtcmVnZXgsIG5vLW1hZ2ljLW51bWJlcnMsIG5vLXByb3RvdHlwZS1idWlsdGlucywgbm8tcmVkZWNsYXJlLCBuby1zaGFkb3csIG5vLXZhciwgc29ydC12YXJzKi9cblwidXNlIHN0cmljdFwiO1xudmFyIHByb3RvYnVmID0gcmVxdWlyZShcInByb3RvYnVmanNcIik7XG5cblxuLy8gQ29tbW9uIGFsaWFzZXNcbnZhciAkUmVhZGVyID0gcHJvdG9idWYuUmVhZGVyLCAkV3JpdGVyID0gcHJvdG9idWYuV3JpdGVyLCAkdXRpbCA9IHByb3RvYnVmLnV0aWw7XG5cbi8vIEV4cG9ydGVkIHJvb3QgbmFtZXNwYWNlXG52YXIgJHJvb3QgPSBwcm90b2J1Zi5yb290c1tcImRlZmF1bHRcIl0gfHwgKHByb3RvYnVmLnJvb3RzW1wiZGVmYXVsdFwiXSA9IHt9KTtcblxuJHJvb3QuT3V0ZXJNZXNzYWdlID0gKGZ1bmN0aW9uICgpIHtcblxuICAgIC8qKlxuICAgICAqIE5hbWVzcGFjZSBPdXRlck1lc3NhZ2UuXG4gICAgICogQGV4cG9ydHMgT3V0ZXJNZXNzYWdlXG4gICAgICogQG5hbWVzcGFjZVxuICAgICAqL1xuICAgIHZhciBPdXRlck1lc3NhZ2UgPSB7fTtcblxuICAgIE91dGVyTWVzc2FnZS5DMlNTX0FjdG9yUlBDUmVxdWVzdCA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByb3BlcnRpZXMgb2YgYSBDMlNTX0FjdG9yUlBDUmVxdWVzdC5cbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZVxuICAgICAgICAgKiBAaW50ZXJmYWNlIElDMlNTX0FjdG9yUlBDUmVxdWVzdFxuICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcnxudWxsfSBbUnBjSWRdIEMyU1NfQWN0b3JSUENSZXF1ZXN0IFJwY0lkXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7TG9uZ3xudWxsfSBbQWN0b3JJZF0gQzJTU19BY3RvclJQQ1JlcXVlc3QgQWN0b3JJZFxuICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSBbcmVxdWVzdF0gQzJTU19BY3RvclJQQ1JlcXVlc3QgcmVxdWVzdFxuICAgICAgICAgKi9cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29uc3RydWN0cyBhIG5ldyBDMlNTX0FjdG9yUlBDUmVxdWVzdC5cbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZVxuICAgICAgICAgKiBAY2xhc3NkZXNjIFJlcHJlc2VudHMgYSBDMlNTX0FjdG9yUlBDUmVxdWVzdC5cbiAgICAgICAgICogQGltcGxlbWVudHMgSUMyU1NfQWN0b3JSUENSZXF1ZXN0XG4gICAgICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAgICAgKiBAcGFyYW0ge091dGVyTWVzc2FnZS5JQzJTU19BY3RvclJQQ1JlcXVlc3Q9fSBbcF0gUHJvcGVydGllcyB0byBzZXRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIEMyU1NfQWN0b3JSUENSZXF1ZXN0KHApIHtcbiAgICAgICAgICAgIGlmIChwKVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGtzID0gT2JqZWN0LmtleXMocCksIGkgPSAwOyBpIDwga3MubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICAgICAgICAgIGlmIChwW2tzW2ldXSAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trc1tpXV0gPSBwW2tzW2ldXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDMlNTX0FjdG9yUlBDUmVxdWVzdCBScGNJZC5cbiAgICAgICAgICogQG1lbWJlciB7bnVtYmVyfSBScGNJZFxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLkMyU1NfQWN0b3JSUENSZXF1ZXN0XG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgQzJTU19BY3RvclJQQ1JlcXVlc3QucHJvdG90eXBlLlJwY0lkID0gMDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQzJTU19BY3RvclJQQ1JlcXVlc3QgQWN0b3JJZC5cbiAgICAgICAgICogQG1lbWJlciB7TG9uZ30gQWN0b3JJZFxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLkMyU1NfQWN0b3JSUENSZXF1ZXN0XG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgQzJTU19BY3RvclJQQ1JlcXVlc3QucHJvdG90eXBlLkFjdG9ySWQgPSAkdXRpbC5Mb25nID8gJHV0aWwuTG9uZy5mcm9tQml0cygwLCAwLCBmYWxzZSkgOiAwO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDMlNTX0FjdG9yUlBDUmVxdWVzdCByZXF1ZXN0LlxuICAgICAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IHJlcXVlc3RcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5DMlNTX0FjdG9yUlBDUmVxdWVzdFxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIEMyU1NfQWN0b3JSUENSZXF1ZXN0LnByb3RvdHlwZS5yZXF1ZXN0ID0gXCJcIjtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyBhIG5ldyBDMlNTX0FjdG9yUlBDUmVxdWVzdCBpbnN0YW5jZSB1c2luZyB0aGUgc3BlY2lmaWVkIHByb3BlcnRpZXMuXG4gICAgICAgICAqIEBmdW5jdGlvbiBjcmVhdGVcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5DMlNTX0FjdG9yUlBDUmVxdWVzdFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T3V0ZXJNZXNzYWdlLklDMlNTX0FjdG9yUlBDUmVxdWVzdD19IFtwcm9wZXJ0aWVzXSBQcm9wZXJ0aWVzIHRvIHNldFxuICAgICAgICAgKiBAcmV0dXJucyB7T3V0ZXJNZXNzYWdlLkMyU1NfQWN0b3JSUENSZXF1ZXN0fSBDMlNTX0FjdG9yUlBDUmVxdWVzdCBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgQzJTU19BY3RvclJQQ1JlcXVlc3QuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQzJTU19BY3RvclJQQ1JlcXVlc3QocHJvcGVydGllcyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVuY29kZXMgdGhlIHNwZWNpZmllZCBDMlNTX0FjdG9yUlBDUmVxdWVzdCBtZXNzYWdlLiBEb2VzIG5vdCBpbXBsaWNpdGx5IHtAbGluayBPdXRlck1lc3NhZ2UuQzJTU19BY3RvclJQQ1JlcXVlc3QudmVyaWZ5fHZlcmlmeX0gbWVzc2FnZXMuXG4gICAgICAgICAqIEBmdW5jdGlvbiBlbmNvZGVcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5DMlNTX0FjdG9yUlBDUmVxdWVzdFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T3V0ZXJNZXNzYWdlLklDMlNTX0FjdG9yUlBDUmVxdWVzdH0gbSBDMlNTX0FjdG9yUlBDUmVxdWVzdCBtZXNzYWdlIG9yIHBsYWluIG9iamVjdCB0byBlbmNvZGVcbiAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuV3JpdGVyfSBbd10gV3JpdGVyIHRvIGVuY29kZSB0b1xuICAgICAgICAgKiBAcmV0dXJucyB7JHByb3RvYnVmLldyaXRlcn0gV3JpdGVyXG4gICAgICAgICAqL1xuICAgICAgICBDMlNTX0FjdG9yUlBDUmVxdWVzdC5lbmNvZGUgPSBmdW5jdGlvbiBlbmNvZGUobSwgdykge1xuICAgICAgICAgICAgaWYgKCF3KVxuICAgICAgICAgICAgICAgIHcgPSAkV3JpdGVyLmNyZWF0ZSgpO1xuICAgICAgICAgICAgaWYgKG0ucmVxdWVzdCAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG0sIFwicmVxdWVzdFwiKSlcbiAgICAgICAgICAgICAgICB3LnVpbnQzMigxMCkuc3RyaW5nKG0ucmVxdWVzdCk7XG4gICAgICAgICAgICBpZiAobS5ScGNJZCAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG0sIFwiUnBjSWRcIikpXG4gICAgICAgICAgICAgICAgdy51aW50MzIoNzIwKS5pbnQzMihtLlJwY0lkKTtcbiAgICAgICAgICAgIGlmIChtLkFjdG9ySWQgIT0gbnVsbCAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtLCBcIkFjdG9ySWRcIikpXG4gICAgICAgICAgICAgICAgdy51aW50MzIoNzQ0KS5pbnQ2NChtLkFjdG9ySWQpO1xuICAgICAgICAgICAgcmV0dXJuIHc7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlY29kZXMgYSBDMlNTX0FjdG9yUlBDUmVxdWVzdCBtZXNzYWdlIGZyb20gdGhlIHNwZWNpZmllZCByZWFkZXIgb3IgYnVmZmVyLlxuICAgICAgICAgKiBAZnVuY3Rpb24gZGVjb2RlXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuQzJTU19BY3RvclJQQ1JlcXVlc3RcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5SZWFkZXJ8VWludDhBcnJheX0gciBSZWFkZXIgb3IgYnVmZmVyIHRvIGRlY29kZSBmcm9tXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbF0gTWVzc2FnZSBsZW5ndGggaWYga25vd24gYmVmb3JlaGFuZFxuICAgICAgICAgKiBAcmV0dXJucyB7T3V0ZXJNZXNzYWdlLkMyU1NfQWN0b3JSUENSZXF1ZXN0fSBDMlNTX0FjdG9yUlBDUmVxdWVzdFxuICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHBheWxvYWQgaXMgbm90IGEgcmVhZGVyIG9yIHZhbGlkIGJ1ZmZlclxuICAgICAgICAgKiBAdGhyb3dzIHskcHJvdG9idWYudXRpbC5Qcm90b2NvbEVycm9yfSBJZiByZXF1aXJlZCBmaWVsZHMgYXJlIG1pc3NpbmdcbiAgICAgICAgICovXG4gICAgICAgIEMyU1NfQWN0b3JSUENSZXF1ZXN0LmRlY29kZSA9IGZ1bmN0aW9uIGRlY29kZShyLCBsKSB7XG4gICAgICAgICAgICBpZiAoIShyIGluc3RhbmNlb2YgJFJlYWRlcikpXG4gICAgICAgICAgICAgICAgciA9ICRSZWFkZXIuY3JlYXRlKHIpO1xuICAgICAgICAgICAgdmFyIGMgPSBsID09PSB1bmRlZmluZWQgPyByLmxlbiA6IHIucG9zICsgbCwgbSA9IG5ldyAkcm9vdC5PdXRlck1lc3NhZ2UuQzJTU19BY3RvclJQQ1JlcXVlc3QoKTtcbiAgICAgICAgICAgIHdoaWxlIChyLnBvcyA8IGMpIHtcbiAgICAgICAgICAgICAgICB2YXIgdCA9IHIudWludDMyKCk7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0ID4+PiAzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTA6XG4gICAgICAgICAgICAgICAgICAgICAgICBtLlJwY0lkID0gci5pbnQzMigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTM6XG4gICAgICAgICAgICAgICAgICAgICAgICBtLkFjdG9ySWQgPSByLmludDY0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgbS5yZXF1ZXN0ID0gci5zdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgci5za2lwVHlwZSh0ICYgNyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gQzJTU19BY3RvclJQQ1JlcXVlc3Q7XG4gICAgfSkoKTtcblxuICAgIE91dGVyTWVzc2FnZS5TUzJDX0FjdG9yUlBDUmVwbHkgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcm9wZXJ0aWVzIG9mIGEgU1MyQ19BY3RvclJQQ1JlcGx5LlxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlXG4gICAgICAgICAqIEBpbnRlcmZhY2UgSVNTMkNfQWN0b3JSUENSZXBseVxuICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcnxudWxsfSBbUnBjSWRdIFNTMkNfQWN0b3JSUENSZXBseSBScGNJZFxuICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcnxudWxsfSBbRXJyb3JdIFNTMkNfQWN0b3JSUENSZXBseSBFcnJvclxuICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSBbTWVzc2FnZV0gU1MyQ19BY3RvclJQQ1JlcGx5IE1lc3NhZ2VcbiAgICAgICAgICovXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnN0cnVjdHMgYSBuZXcgU1MyQ19BY3RvclJQQ1JlcGx5LlxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlXG4gICAgICAgICAqIEBjbGFzc2Rlc2MgUmVwcmVzZW50cyBhIFNTMkNfQWN0b3JSUENSZXBseS5cbiAgICAgICAgICogQGltcGxlbWVudHMgSVNTMkNfQWN0b3JSUENSZXBseVxuICAgICAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgICAgICogQHBhcmFtIHtPdXRlck1lc3NhZ2UuSVNTMkNfQWN0b3JSUENSZXBseT19IFtwXSBQcm9wZXJ0aWVzIHRvIHNldFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gU1MyQ19BY3RvclJQQ1JlcGx5KHApIHtcbiAgICAgICAgICAgIGlmIChwKVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGtzID0gT2JqZWN0LmtleXMocCksIGkgPSAwOyBpIDwga3MubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICAgICAgICAgIGlmIChwW2tzW2ldXSAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trc1tpXV0gPSBwW2tzW2ldXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTUzJDX0FjdG9yUlBDUmVwbHkgUnBjSWQuXG4gICAgICAgICAqIEBtZW1iZXIge251bWJlcn0gUnBjSWRcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5TUzJDX0FjdG9yUlBDUmVwbHlcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBTUzJDX0FjdG9yUlBDUmVwbHkucHJvdG90eXBlLlJwY0lkID0gMDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU1MyQ19BY3RvclJQQ1JlcGx5IEVycm9yLlxuICAgICAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IEVycm9yXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuU1MyQ19BY3RvclJQQ1JlcGx5XG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgU1MyQ19BY3RvclJQQ1JlcGx5LnByb3RvdHlwZS5FcnJvciA9IDA7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNTMkNfQWN0b3JSUENSZXBseSBNZXNzYWdlLlxuICAgICAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IE1lc3NhZ2VcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5TUzJDX0FjdG9yUlBDUmVwbHlcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBTUzJDX0FjdG9yUlBDUmVwbHkucHJvdG90eXBlLk1lc3NhZ2UgPSBcIlwiO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGEgbmV3IFNTMkNfQWN0b3JSUENSZXBseSBpbnN0YW5jZSB1c2luZyB0aGUgc3BlY2lmaWVkIHByb3BlcnRpZXMuXG4gICAgICAgICAqIEBmdW5jdGlvbiBjcmVhdGVcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5TUzJDX0FjdG9yUlBDUmVwbHlcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge091dGVyTWVzc2FnZS5JU1MyQ19BY3RvclJQQ1JlcGx5PX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XG4gICAgICAgICAqIEByZXR1cm5zIHtPdXRlck1lc3NhZ2UuU1MyQ19BY3RvclJQQ1JlcGx5fSBTUzJDX0FjdG9yUlBDUmVwbHkgaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIFNTMkNfQWN0b3JSUENSZXBseS5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUocHJvcGVydGllcykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTUzJDX0FjdG9yUlBDUmVwbHkocHJvcGVydGllcyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVuY29kZXMgdGhlIHNwZWNpZmllZCBTUzJDX0FjdG9yUlBDUmVwbHkgbWVzc2FnZS4gRG9lcyBub3QgaW1wbGljaXRseSB7QGxpbmsgT3V0ZXJNZXNzYWdlLlNTMkNfQWN0b3JSUENSZXBseS52ZXJpZnl8dmVyaWZ5fSBtZXNzYWdlcy5cbiAgICAgICAgICogQGZ1bmN0aW9uIGVuY29kZVxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLlNTMkNfQWN0b3JSUENSZXBseVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T3V0ZXJNZXNzYWdlLklTUzJDX0FjdG9yUlBDUmVwbHl9IG0gU1MyQ19BY3RvclJQQ1JlcGx5IG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxuICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3XSBXcml0ZXIgdG8gZW5jb2RlIHRvXG4gICAgICAgICAqIEByZXR1cm5zIHskcHJvdG9idWYuV3JpdGVyfSBXcml0ZXJcbiAgICAgICAgICovXG4gICAgICAgIFNTMkNfQWN0b3JSUENSZXBseS5lbmNvZGUgPSBmdW5jdGlvbiBlbmNvZGUobSwgdykge1xuICAgICAgICAgICAgaWYgKCF3KVxuICAgICAgICAgICAgICAgIHcgPSAkV3JpdGVyLmNyZWF0ZSgpO1xuICAgICAgICAgICAgaWYgKG0uUnBjSWQgIT0gbnVsbCAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtLCBcIlJwY0lkXCIpKVxuICAgICAgICAgICAgICAgIHcudWludDMyKDcyMCkuaW50MzIobS5ScGNJZCk7XG4gICAgICAgICAgICBpZiAobS5FcnJvciAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG0sIFwiRXJyb3JcIikpXG4gICAgICAgICAgICAgICAgdy51aW50MzIoNzI4KS5pbnQzMihtLkVycm9yKTtcbiAgICAgICAgICAgIGlmIChtLk1lc3NhZ2UgIT0gbnVsbCAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtLCBcIk1lc3NhZ2VcIikpXG4gICAgICAgICAgICAgICAgdy51aW50MzIoNzM4KS5zdHJpbmcobS5NZXNzYWdlKTtcbiAgICAgICAgICAgIHJldHVybiB3O1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWNvZGVzIGEgU1MyQ19BY3RvclJQQ1JlcGx5IG1lc3NhZ2UgZnJvbSB0aGUgc3BlY2lmaWVkIHJlYWRlciBvciBidWZmZXIuXG4gICAgICAgICAqIEBmdW5jdGlvbiBkZWNvZGVcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5TUzJDX0FjdG9yUlBDUmVwbHlcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5SZWFkZXJ8VWludDhBcnJheX0gciBSZWFkZXIgb3IgYnVmZmVyIHRvIGRlY29kZSBmcm9tXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbF0gTWVzc2FnZSBsZW5ndGggaWYga25vd24gYmVmb3JlaGFuZFxuICAgICAgICAgKiBAcmV0dXJucyB7T3V0ZXJNZXNzYWdlLlNTMkNfQWN0b3JSUENSZXBseX0gU1MyQ19BY3RvclJQQ1JlcGx5XG4gICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgcGF5bG9hZCBpcyBub3QgYSByZWFkZXIgb3IgdmFsaWQgYnVmZmVyXG4gICAgICAgICAqIEB0aHJvd3MgeyRwcm90b2J1Zi51dGlsLlByb3RvY29sRXJyb3J9IElmIHJlcXVpcmVkIGZpZWxkcyBhcmUgbWlzc2luZ1xuICAgICAgICAgKi9cbiAgICAgICAgU1MyQ19BY3RvclJQQ1JlcGx5LmRlY29kZSA9IGZ1bmN0aW9uIGRlY29kZShyLCBsKSB7XG4gICAgICAgICAgICBpZiAoIShyIGluc3RhbmNlb2YgJFJlYWRlcikpXG4gICAgICAgICAgICAgICAgciA9ICRSZWFkZXIuY3JlYXRlKHIpO1xuICAgICAgICAgICAgdmFyIGMgPSBsID09PSB1bmRlZmluZWQgPyByLmxlbiA6IHIucG9zICsgbCwgbSA9IG5ldyAkcm9vdC5PdXRlck1lc3NhZ2UuU1MyQ19BY3RvclJQQ1JlcGx5KCk7XG4gICAgICAgICAgICB3aGlsZSAoci5wb3MgPCBjKSB7XG4gICAgICAgICAgICAgICAgdmFyIHQgPSByLnVpbnQzMigpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodCA+Pj4gMykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDkwOlxuICAgICAgICAgICAgICAgICAgICAgICAgbS5ScGNJZCA9IHIuaW50MzIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDkxOlxuICAgICAgICAgICAgICAgICAgICAgICAgbS5FcnJvciA9IHIuaW50MzIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDkyOlxuICAgICAgICAgICAgICAgICAgICAgICAgbS5NZXNzYWdlID0gci5zdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgci5za2lwVHlwZSh0ICYgNyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gU1MyQ19BY3RvclJQQ1JlcGx5O1xuICAgIH0pKCk7XG5cbiAgICBPdXRlck1lc3NhZ2UuU1MyQ19BY3Rvck1lc3NhZ2UgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcm9wZXJ0aWVzIG9mIGEgU1MyQ19BY3Rvck1lc3NhZ2UuXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2VcbiAgICAgICAgICogQGludGVyZmFjZSBJU1MyQ19BY3Rvck1lc3NhZ2VcbiAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ8bnVsbH0gW1JwY0lkXSBTUzJDX0FjdG9yTWVzc2FnZSBScGNJZFxuICAgICAgICAgKiBAcHJvcGVydHkge0xvbmd8bnVsbH0gW0FjdG9ySWRdIFNTMkNfQWN0b3JNZXNzYWdlIEFjdG9ySWRcbiAgICAgICAgICogQHByb3BlcnR5IHtBcnJheS48T3V0ZXJNZXNzYWdlLklCcm9hZGNhc3RJbmZvPnxudWxsfSBbSW5mb10gU1MyQ19BY3Rvck1lc3NhZ2UgSW5mb1xuICAgICAgICAgKi9cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29uc3RydWN0cyBhIG5ldyBTUzJDX0FjdG9yTWVzc2FnZS5cbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZVxuICAgICAgICAgKiBAY2xhc3NkZXNjIFJlcHJlc2VudHMgYSBTUzJDX0FjdG9yTWVzc2FnZS5cbiAgICAgICAgICogQGltcGxlbWVudHMgSVNTMkNfQWN0b3JNZXNzYWdlXG4gICAgICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAgICAgKiBAcGFyYW0ge091dGVyTWVzc2FnZS5JU1MyQ19BY3Rvck1lc3NhZ2U9fSBbcF0gUHJvcGVydGllcyB0byBzZXRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIFNTMkNfQWN0b3JNZXNzYWdlKHApIHtcbiAgICAgICAgICAgIHRoaXMuSW5mbyA9IFtdO1xuICAgICAgICAgICAgaWYgKHApXG4gICAgICAgICAgICAgICAgZm9yICh2YXIga3MgPSBPYmplY3Qua2V5cyhwKSwgaSA9IDA7IGkgPCBrcy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBba3NbaV1dICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2tzW2ldXSA9IHBba3NbaV1dO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNTMkNfQWN0b3JNZXNzYWdlIFJwY0lkLlxuICAgICAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFJwY0lkXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuU1MyQ19BY3Rvck1lc3NhZ2VcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBTUzJDX0FjdG9yTWVzc2FnZS5wcm90b3R5cGUuUnBjSWQgPSAwO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTUzJDX0FjdG9yTWVzc2FnZSBBY3RvcklkLlxuICAgICAgICAgKiBAbWVtYmVyIHtMb25nfSBBY3RvcklkXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuU1MyQ19BY3Rvck1lc3NhZ2VcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBTUzJDX0FjdG9yTWVzc2FnZS5wcm90b3R5cGUuQWN0b3JJZCA9ICR1dGlsLkxvbmcgPyAkdXRpbC5Mb25nLmZyb21CaXRzKDAsIDAsIGZhbHNlKSA6IDA7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNTMkNfQWN0b3JNZXNzYWdlIEluZm8uXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5LjxPdXRlck1lc3NhZ2UuSUJyb2FkY2FzdEluZm8+fSBJbmZvXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuU1MyQ19BY3Rvck1lc3NhZ2VcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBTUzJDX0FjdG9yTWVzc2FnZS5wcm90b3R5cGUuSW5mbyA9ICR1dGlsLmVtcHR5QXJyYXk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZXMgYSBuZXcgU1MyQ19BY3Rvck1lc3NhZ2UgaW5zdGFuY2UgdXNpbmcgdGhlIHNwZWNpZmllZCBwcm9wZXJ0aWVzLlxuICAgICAgICAgKiBAZnVuY3Rpb24gY3JlYXRlXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuU1MyQ19BY3Rvck1lc3NhZ2VcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge091dGVyTWVzc2FnZS5JU1MyQ19BY3Rvck1lc3NhZ2U9fSBbcHJvcGVydGllc10gUHJvcGVydGllcyB0byBzZXRcbiAgICAgICAgICogQHJldHVybnMge091dGVyTWVzc2FnZS5TUzJDX0FjdG9yTWVzc2FnZX0gU1MyQ19BY3Rvck1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIFNTMkNfQWN0b3JNZXNzYWdlLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShwcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNTMkNfQWN0b3JNZXNzYWdlKHByb3BlcnRpZXMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbmNvZGVzIHRoZSBzcGVjaWZpZWQgU1MyQ19BY3Rvck1lc3NhZ2UgbWVzc2FnZS4gRG9lcyBub3QgaW1wbGljaXRseSB7QGxpbmsgT3V0ZXJNZXNzYWdlLlNTMkNfQWN0b3JNZXNzYWdlLnZlcmlmeXx2ZXJpZnl9IG1lc3NhZ2VzLlxuICAgICAgICAgKiBAZnVuY3Rpb24gZW5jb2RlXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuU1MyQ19BY3Rvck1lc3NhZ2VcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge091dGVyTWVzc2FnZS5JU1MyQ19BY3Rvck1lc3NhZ2V9IG0gU1MyQ19BY3Rvck1lc3NhZ2UgbWVzc2FnZSBvciBwbGFpbiBvYmplY3QgdG8gZW5jb2RlXG4gICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLldyaXRlcn0gW3ddIFdyaXRlciB0byBlbmNvZGUgdG9cbiAgICAgICAgICogQHJldHVybnMgeyRwcm90b2J1Zi5Xcml0ZXJ9IFdyaXRlclxuICAgICAgICAgKi9cbiAgICAgICAgU1MyQ19BY3Rvck1lc3NhZ2UuZW5jb2RlID0gZnVuY3Rpb24gZW5jb2RlKG0sIHcpIHtcbiAgICAgICAgICAgIGlmICghdylcbiAgICAgICAgICAgICAgICB3ID0gJFdyaXRlci5jcmVhdGUoKTtcbiAgICAgICAgICAgIGlmIChtLkluZm8gIT0gbnVsbCAmJiBtLkluZm8ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtLkluZm8ubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICAgICAgICAgICRyb290Lk91dGVyTWVzc2FnZS5Ccm9hZGNhc3RJbmZvLmVuY29kZShtLkluZm9baV0sIHcudWludDMyKDEwKS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG0uUnBjSWQgIT0gbnVsbCAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtLCBcIlJwY0lkXCIpKVxuICAgICAgICAgICAgICAgIHcudWludDMyKDcyMCkuaW50MzIobS5ScGNJZCk7XG4gICAgICAgICAgICBpZiAobS5BY3RvcklkICE9IG51bGwgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobSwgXCJBY3RvcklkXCIpKVxuICAgICAgICAgICAgICAgIHcudWludDMyKDc0NCkuaW50NjQobS5BY3RvcklkKTtcbiAgICAgICAgICAgIHJldHVybiB3O1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWNvZGVzIGEgU1MyQ19BY3Rvck1lc3NhZ2UgbWVzc2FnZSBmcm9tIHRoZSBzcGVjaWZpZWQgcmVhZGVyIG9yIGJ1ZmZlci5cbiAgICAgICAgICogQGZ1bmN0aW9uIGRlY29kZVxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLlNTMkNfQWN0b3JNZXNzYWdlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuUmVhZGVyfFVpbnQ4QXJyYXl9IHIgUmVhZGVyIG9yIGJ1ZmZlciB0byBkZWNvZGUgZnJvbVxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xdIE1lc3NhZ2UgbGVuZ3RoIGlmIGtub3duIGJlZm9yZWhhbmRcbiAgICAgICAgICogQHJldHVybnMge091dGVyTWVzc2FnZS5TUzJDX0FjdG9yTWVzc2FnZX0gU1MyQ19BY3Rvck1lc3NhZ2VcbiAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBwYXlsb2FkIGlzIG5vdCBhIHJlYWRlciBvciB2YWxpZCBidWZmZXJcbiAgICAgICAgICogQHRocm93cyB7JHByb3RvYnVmLnV0aWwuUHJvdG9jb2xFcnJvcn0gSWYgcmVxdWlyZWQgZmllbGRzIGFyZSBtaXNzaW5nXG4gICAgICAgICAqL1xuICAgICAgICBTUzJDX0FjdG9yTWVzc2FnZS5kZWNvZGUgPSBmdW5jdGlvbiBkZWNvZGUociwgbCkge1xuICAgICAgICAgICAgaWYgKCEociBpbnN0YW5jZW9mICRSZWFkZXIpKVxuICAgICAgICAgICAgICAgIHIgPSAkUmVhZGVyLmNyZWF0ZShyKTtcbiAgICAgICAgICAgIHZhciBjID0gbCA9PT0gdW5kZWZpbmVkID8gci5sZW4gOiByLnBvcyArIGwsIG0gPSBuZXcgJHJvb3QuT3V0ZXJNZXNzYWdlLlNTMkNfQWN0b3JNZXNzYWdlKCk7XG4gICAgICAgICAgICB3aGlsZSAoci5wb3MgPCBjKSB7XG4gICAgICAgICAgICAgICAgdmFyIHQgPSByLnVpbnQzMigpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodCA+Pj4gMykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDkwOlxuICAgICAgICAgICAgICAgICAgICAgICAgbS5ScGNJZCA9IHIuaW50MzIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDkzOlxuICAgICAgICAgICAgICAgICAgICAgICAgbS5BY3RvcklkID0gci5pbnQ2NCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKG0uSW5mbyAmJiBtLkluZm8ubGVuZ3RoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLkluZm8gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uSW5mby5wdXNoKCRyb290Lk91dGVyTWVzc2FnZS5Ccm9hZGNhc3RJbmZvLmRlY29kZShyLCByLnVpbnQzMigpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHIuc2tpcFR5cGUodCAmIDcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG07XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIFNTMkNfQWN0b3JNZXNzYWdlO1xuICAgIH0pKCk7XG5cbiAgICBPdXRlck1lc3NhZ2UuQnJvYWRjYXN0SW5mbyA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByb3BlcnRpZXMgb2YgYSBCcm9hZGNhc3RJbmZvLlxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlXG4gICAgICAgICAqIEBpbnRlcmZhY2UgSUJyb2FkY2FzdEluZm9cbiAgICAgICAgICogQHByb3BlcnR5IHtMb25nfG51bGx9IFtVbml0SWRdIEJyb2FkY2FzdEluZm8gVW5pdElkXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bGx9IFtNZXNzYWdlXSBCcm9hZGNhc3RJbmZvIE1lc3NhZ2VcbiAgICAgICAgICovXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnN0cnVjdHMgYSBuZXcgQnJvYWRjYXN0SW5mby5cbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZVxuICAgICAgICAgKiBAY2xhc3NkZXNjIFJlcHJlc2VudHMgYSBCcm9hZGNhc3RJbmZvLlxuICAgICAgICAgKiBAaW1wbGVtZW50cyBJQnJvYWRjYXN0SW5mb1xuICAgICAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgICAgICogQHBhcmFtIHtPdXRlck1lc3NhZ2UuSUJyb2FkY2FzdEluZm89fSBbcF0gUHJvcGVydGllcyB0byBzZXRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIEJyb2FkY2FzdEluZm8ocCkge1xuICAgICAgICAgICAgaWYgKHApXG4gICAgICAgICAgICAgICAgZm9yICh2YXIga3MgPSBPYmplY3Qua2V5cyhwKSwgaSA9IDA7IGkgPCBrcy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBba3NbaV1dICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2tzW2ldXSA9IHBba3NbaV1dO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJyb2FkY2FzdEluZm8gVW5pdElkLlxuICAgICAgICAgKiBAbWVtYmVyIHtMb25nfSBVbml0SWRcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5Ccm9hZGNhc3RJbmZvXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgQnJvYWRjYXN0SW5mby5wcm90b3R5cGUuVW5pdElkID0gJHV0aWwuTG9uZyA/ICR1dGlsLkxvbmcuZnJvbUJpdHMoMCwgMCwgZmFsc2UpIDogMDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQnJvYWRjYXN0SW5mbyBNZXNzYWdlLlxuICAgICAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IE1lc3NhZ2VcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5Ccm9hZGNhc3RJbmZvXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgQnJvYWRjYXN0SW5mby5wcm90b3R5cGUuTWVzc2FnZSA9IFwiXCI7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZXMgYSBuZXcgQnJvYWRjYXN0SW5mbyBpbnN0YW5jZSB1c2luZyB0aGUgc3BlY2lmaWVkIHByb3BlcnRpZXMuXG4gICAgICAgICAqIEBmdW5jdGlvbiBjcmVhdGVcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5Ccm9hZGNhc3RJbmZvXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPdXRlck1lc3NhZ2UuSUJyb2FkY2FzdEluZm89fSBbcHJvcGVydGllc10gUHJvcGVydGllcyB0byBzZXRcbiAgICAgICAgICogQHJldHVybnMge091dGVyTWVzc2FnZS5Ccm9hZGNhc3RJbmZvfSBCcm9hZGNhc3RJbmZvIGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBCcm9hZGNhc3RJbmZvLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShwcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEJyb2FkY2FzdEluZm8ocHJvcGVydGllcyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVuY29kZXMgdGhlIHNwZWNpZmllZCBCcm9hZGNhc3RJbmZvIG1lc3NhZ2UuIERvZXMgbm90IGltcGxpY2l0bHkge0BsaW5rIE91dGVyTWVzc2FnZS5Ccm9hZGNhc3RJbmZvLnZlcmlmeXx2ZXJpZnl9IG1lc3NhZ2VzLlxuICAgICAgICAgKiBAZnVuY3Rpb24gZW5jb2RlXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuQnJvYWRjYXN0SW5mb1xuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T3V0ZXJNZXNzYWdlLklCcm9hZGNhc3RJbmZvfSBtIEJyb2FkY2FzdEluZm8gbWVzc2FnZSBvciBwbGFpbiBvYmplY3QgdG8gZW5jb2RlXG4gICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLldyaXRlcn0gW3ddIFdyaXRlciB0byBlbmNvZGUgdG9cbiAgICAgICAgICogQHJldHVybnMgeyRwcm90b2J1Zi5Xcml0ZXJ9IFdyaXRlclxuICAgICAgICAgKi9cbiAgICAgICAgQnJvYWRjYXN0SW5mby5lbmNvZGUgPSBmdW5jdGlvbiBlbmNvZGUobSwgdykge1xuICAgICAgICAgICAgaWYgKCF3KVxuICAgICAgICAgICAgICAgIHcgPSAkV3JpdGVyLmNyZWF0ZSgpO1xuICAgICAgICAgICAgaWYgKG0uVW5pdElkICE9IG51bGwgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobSwgXCJVbml0SWRcIikpXG4gICAgICAgICAgICAgICAgdy51aW50MzIoOCkuaW50NjQobS5Vbml0SWQpO1xuICAgICAgICAgICAgaWYgKG0uTWVzc2FnZSAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG0sIFwiTWVzc2FnZVwiKSlcbiAgICAgICAgICAgICAgICB3LnVpbnQzMigxOCkuc3RyaW5nKG0uTWVzc2FnZSk7XG4gICAgICAgICAgICByZXR1cm4gdztcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVjb2RlcyBhIEJyb2FkY2FzdEluZm8gbWVzc2FnZSBmcm9tIHRoZSBzcGVjaWZpZWQgcmVhZGVyIG9yIGJ1ZmZlci5cbiAgICAgICAgICogQGZ1bmN0aW9uIGRlY29kZVxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLkJyb2FkY2FzdEluZm9cbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5SZWFkZXJ8VWludDhBcnJheX0gciBSZWFkZXIgb3IgYnVmZmVyIHRvIGRlY29kZSBmcm9tXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbF0gTWVzc2FnZSBsZW5ndGggaWYga25vd24gYmVmb3JlaGFuZFxuICAgICAgICAgKiBAcmV0dXJucyB7T3V0ZXJNZXNzYWdlLkJyb2FkY2FzdEluZm99IEJyb2FkY2FzdEluZm9cbiAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBwYXlsb2FkIGlzIG5vdCBhIHJlYWRlciBvciB2YWxpZCBidWZmZXJcbiAgICAgICAgICogQHRocm93cyB7JHByb3RvYnVmLnV0aWwuUHJvdG9jb2xFcnJvcn0gSWYgcmVxdWlyZWQgZmllbGRzIGFyZSBtaXNzaW5nXG4gICAgICAgICAqL1xuICAgICAgICBCcm9hZGNhc3RJbmZvLmRlY29kZSA9IGZ1bmN0aW9uIGRlY29kZShyLCBsKSB7XG4gICAgICAgICAgICBpZiAoIShyIGluc3RhbmNlb2YgJFJlYWRlcikpXG4gICAgICAgICAgICAgICAgciA9ICRSZWFkZXIuY3JlYXRlKHIpO1xuICAgICAgICAgICAgdmFyIGMgPSBsID09PSB1bmRlZmluZWQgPyByLmxlbiA6IHIucG9zICsgbCwgbSA9IG5ldyAkcm9vdC5PdXRlck1lc3NhZ2UuQnJvYWRjYXN0SW5mbygpO1xuICAgICAgICAgICAgd2hpbGUgKHIucG9zIDwgYykge1xuICAgICAgICAgICAgICAgIHZhciB0ID0gci51aW50MzIoKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHQgPj4+IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgbS5Vbml0SWQgPSByLmludDY0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgbS5NZXNzYWdlID0gci5zdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgci5za2lwVHlwZSh0ICYgNyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gQnJvYWRjYXN0SW5mbztcbiAgICB9KSgpO1xuXG4gICAgT3V0ZXJNZXNzYWdlLkMyU1NfQWN0b3JNZXNzYWdlID0gKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvcGVydGllcyBvZiBhIEMyU1NfQWN0b3JNZXNzYWdlLlxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlXG4gICAgICAgICAqIEBpbnRlcmZhY2UgSUMyU1NfQWN0b3JNZXNzYWdlXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfG51bGx9IFtScGNJZF0gQzJTU19BY3Rvck1lc3NhZ2UgUnBjSWRcbiAgICAgICAgICogQHByb3BlcnR5IHtMb25nfG51bGx9IFtBY3RvcklkXSBDMlNTX0FjdG9yTWVzc2FnZSBBY3RvcklkXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bGx9IFtNZXNzYWdlXSBDMlNTX0FjdG9yTWVzc2FnZSBNZXNzYWdlXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb25zdHJ1Y3RzIGEgbmV3IEMyU1NfQWN0b3JNZXNzYWdlLlxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlXG4gICAgICAgICAqIEBjbGFzc2Rlc2MgUmVwcmVzZW50cyBhIEMyU1NfQWN0b3JNZXNzYWdlLlxuICAgICAgICAgKiBAaW1wbGVtZW50cyBJQzJTU19BY3Rvck1lc3NhZ2VcbiAgICAgICAgICogQGNvbnN0cnVjdG9yXG4gICAgICAgICAqIEBwYXJhbSB7T3V0ZXJNZXNzYWdlLklDMlNTX0FjdG9yTWVzc2FnZT19IFtwXSBQcm9wZXJ0aWVzIHRvIHNldFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gQzJTU19BY3Rvck1lc3NhZ2UocCkge1xuICAgICAgICAgICAgaWYgKHApXG4gICAgICAgICAgICAgICAgZm9yICh2YXIga3MgPSBPYmplY3Qua2V5cyhwKSwgaSA9IDA7IGkgPCBrcy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBba3NbaV1dICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2tzW2ldXSA9IHBba3NbaV1dO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEMyU1NfQWN0b3JNZXNzYWdlIFJwY0lkLlxuICAgICAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFJwY0lkXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuQzJTU19BY3Rvck1lc3NhZ2VcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBDMlNTX0FjdG9yTWVzc2FnZS5wcm90b3R5cGUuUnBjSWQgPSAwO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDMlNTX0FjdG9yTWVzc2FnZSBBY3RvcklkLlxuICAgICAgICAgKiBAbWVtYmVyIHtMb25nfSBBY3RvcklkXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuQzJTU19BY3Rvck1lc3NhZ2VcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBDMlNTX0FjdG9yTWVzc2FnZS5wcm90b3R5cGUuQWN0b3JJZCA9ICR1dGlsLkxvbmcgPyAkdXRpbC5Mb25nLmZyb21CaXRzKDAsIDAsIGZhbHNlKSA6IDA7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEMyU1NfQWN0b3JNZXNzYWdlIE1lc3NhZ2UuXG4gICAgICAgICAqIEBtZW1iZXIge3N0cmluZ30gTWVzc2FnZVxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLkMyU1NfQWN0b3JNZXNzYWdlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgQzJTU19BY3Rvck1lc3NhZ2UucHJvdG90eXBlLk1lc3NhZ2UgPSBcIlwiO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGEgbmV3IEMyU1NfQWN0b3JNZXNzYWdlIGluc3RhbmNlIHVzaW5nIHRoZSBzcGVjaWZpZWQgcHJvcGVydGllcy5cbiAgICAgICAgICogQGZ1bmN0aW9uIGNyZWF0ZVxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLkMyU1NfQWN0b3JNZXNzYWdlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPdXRlck1lc3NhZ2UuSUMyU1NfQWN0b3JNZXNzYWdlPX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XG4gICAgICAgICAqIEByZXR1cm5zIHtPdXRlck1lc3NhZ2UuQzJTU19BY3Rvck1lc3NhZ2V9IEMyU1NfQWN0b3JNZXNzYWdlIGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBDMlNTX0FjdG9yTWVzc2FnZS5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUocHJvcGVydGllcykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDMlNTX0FjdG9yTWVzc2FnZShwcm9wZXJ0aWVzKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRW5jb2RlcyB0aGUgc3BlY2lmaWVkIEMyU1NfQWN0b3JNZXNzYWdlIG1lc3NhZ2UuIERvZXMgbm90IGltcGxpY2l0bHkge0BsaW5rIE91dGVyTWVzc2FnZS5DMlNTX0FjdG9yTWVzc2FnZS52ZXJpZnl8dmVyaWZ5fSBtZXNzYWdlcy5cbiAgICAgICAgICogQGZ1bmN0aW9uIGVuY29kZVxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLkMyU1NfQWN0b3JNZXNzYWdlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPdXRlck1lc3NhZ2UuSUMyU1NfQWN0b3JNZXNzYWdlfSBtIEMyU1NfQWN0b3JNZXNzYWdlIG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxuICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3XSBXcml0ZXIgdG8gZW5jb2RlIHRvXG4gICAgICAgICAqIEByZXR1cm5zIHskcHJvdG9idWYuV3JpdGVyfSBXcml0ZXJcbiAgICAgICAgICovXG4gICAgICAgIEMyU1NfQWN0b3JNZXNzYWdlLmVuY29kZSA9IGZ1bmN0aW9uIGVuY29kZShtLCB3KSB7XG4gICAgICAgICAgICBpZiAoIXcpXG4gICAgICAgICAgICAgICAgdyA9ICRXcml0ZXIuY3JlYXRlKCk7XG4gICAgICAgICAgICBpZiAobS5ScGNJZCAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG0sIFwiUnBjSWRcIikpXG4gICAgICAgICAgICAgICAgdy51aW50MzIoNzIwKS5pbnQzMihtLlJwY0lkKTtcbiAgICAgICAgICAgIGlmIChtLkFjdG9ySWQgIT0gbnVsbCAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtLCBcIkFjdG9ySWRcIikpXG4gICAgICAgICAgICAgICAgdy51aW50MzIoNzQ0KS5pbnQ2NChtLkFjdG9ySWQpO1xuICAgICAgICAgICAgaWYgKG0uTWVzc2FnZSAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG0sIFwiTWVzc2FnZVwiKSlcbiAgICAgICAgICAgICAgICB3LnVpbnQzMig3NTQpLnN0cmluZyhtLk1lc3NhZ2UpO1xuICAgICAgICAgICAgcmV0dXJuIHc7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlY29kZXMgYSBDMlNTX0FjdG9yTWVzc2FnZSBtZXNzYWdlIGZyb20gdGhlIHNwZWNpZmllZCByZWFkZXIgb3IgYnVmZmVyLlxuICAgICAgICAgKiBAZnVuY3Rpb24gZGVjb2RlXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuQzJTU19BY3Rvck1lc3NhZ2VcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5SZWFkZXJ8VWludDhBcnJheX0gciBSZWFkZXIgb3IgYnVmZmVyIHRvIGRlY29kZSBmcm9tXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbF0gTWVzc2FnZSBsZW5ndGggaWYga25vd24gYmVmb3JlaGFuZFxuICAgICAgICAgKiBAcmV0dXJucyB7T3V0ZXJNZXNzYWdlLkMyU1NfQWN0b3JNZXNzYWdlfSBDMlNTX0FjdG9yTWVzc2FnZVxuICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHBheWxvYWQgaXMgbm90IGEgcmVhZGVyIG9yIHZhbGlkIGJ1ZmZlclxuICAgICAgICAgKiBAdGhyb3dzIHskcHJvdG9idWYudXRpbC5Qcm90b2NvbEVycm9yfSBJZiByZXF1aXJlZCBmaWVsZHMgYXJlIG1pc3NpbmdcbiAgICAgICAgICovXG4gICAgICAgIEMyU1NfQWN0b3JNZXNzYWdlLmRlY29kZSA9IGZ1bmN0aW9uIGRlY29kZShyLCBsKSB7XG4gICAgICAgICAgICBpZiAoIShyIGluc3RhbmNlb2YgJFJlYWRlcikpXG4gICAgICAgICAgICAgICAgciA9ICRSZWFkZXIuY3JlYXRlKHIpO1xuICAgICAgICAgICAgdmFyIGMgPSBsID09PSB1bmRlZmluZWQgPyByLmxlbiA6IHIucG9zICsgbCwgbSA9IG5ldyAkcm9vdC5PdXRlck1lc3NhZ2UuQzJTU19BY3Rvck1lc3NhZ2UoKTtcbiAgICAgICAgICAgIHdoaWxlIChyLnBvcyA8IGMpIHtcbiAgICAgICAgICAgICAgICB2YXIgdCA9IHIudWludDMyKCk7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0ID4+PiAzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTA6XG4gICAgICAgICAgICAgICAgICAgICAgICBtLlJwY0lkID0gci5pbnQzMigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTM6XG4gICAgICAgICAgICAgICAgICAgICAgICBtLkFjdG9ySWQgPSByLmludDY0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5NDpcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uTWVzc2FnZSA9IHIuc3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHIuc2tpcFR5cGUodCAmIDcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG07XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIEMyU1NfQWN0b3JNZXNzYWdlO1xuICAgIH0pKCk7XG5cbiAgICBPdXRlck1lc3NhZ2UuQzJNX1Rlc3RSZXF1ZXN0ID0gKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvcGVydGllcyBvZiBhIEMyTV9UZXN0UmVxdWVzdC5cbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZVxuICAgICAgICAgKiBAaW50ZXJmYWNlIElDMk1fVGVzdFJlcXVlc3RcbiAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ8bnVsbH0gW1JwY0lkXSBDMk1fVGVzdFJlcXVlc3QgUnBjSWRcbiAgICAgICAgICogQHByb3BlcnR5IHtMb25nfG51bGx9IFtBY3RvcklkXSBDMk1fVGVzdFJlcXVlc3QgQWN0b3JJZFxuICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSBbcmVxdWVzdF0gQzJNX1Rlc3RSZXF1ZXN0IHJlcXVlc3RcbiAgICAgICAgICovXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnN0cnVjdHMgYSBuZXcgQzJNX1Rlc3RSZXF1ZXN0LlxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlXG4gICAgICAgICAqIEBjbGFzc2Rlc2MgUmVwcmVzZW50cyBhIEMyTV9UZXN0UmVxdWVzdC5cbiAgICAgICAgICogQGltcGxlbWVudHMgSUMyTV9UZXN0UmVxdWVzdFxuICAgICAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgICAgICogQHBhcmFtIHtPdXRlck1lc3NhZ2UuSUMyTV9UZXN0UmVxdWVzdD19IFtwXSBQcm9wZXJ0aWVzIHRvIHNldFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gQzJNX1Rlc3RSZXF1ZXN0KHApIHtcbiAgICAgICAgICAgIGlmIChwKVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGtzID0gT2JqZWN0LmtleXMocCksIGkgPSAwOyBpIDwga3MubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICAgICAgICAgIGlmIChwW2tzW2ldXSAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trc1tpXV0gPSBwW2tzW2ldXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDMk1fVGVzdFJlcXVlc3QgUnBjSWQuXG4gICAgICAgICAqIEBtZW1iZXIge251bWJlcn0gUnBjSWRcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5DMk1fVGVzdFJlcXVlc3RcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBDMk1fVGVzdFJlcXVlc3QucHJvdG90eXBlLlJwY0lkID0gMDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQzJNX1Rlc3RSZXF1ZXN0IEFjdG9ySWQuXG4gICAgICAgICAqIEBtZW1iZXIge0xvbmd9IEFjdG9ySWRcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5DMk1fVGVzdFJlcXVlc3RcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBDMk1fVGVzdFJlcXVlc3QucHJvdG90eXBlLkFjdG9ySWQgPSAkdXRpbC5Mb25nID8gJHV0aWwuTG9uZy5mcm9tQml0cygwLCAwLCBmYWxzZSkgOiAwO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDMk1fVGVzdFJlcXVlc3QgcmVxdWVzdC5cbiAgICAgICAgICogQG1lbWJlciB7c3RyaW5nfSByZXF1ZXN0XG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuQzJNX1Rlc3RSZXF1ZXN0XG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgQzJNX1Rlc3RSZXF1ZXN0LnByb3RvdHlwZS5yZXF1ZXN0ID0gXCJcIjtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyBhIG5ldyBDMk1fVGVzdFJlcXVlc3QgaW5zdGFuY2UgdXNpbmcgdGhlIHNwZWNpZmllZCBwcm9wZXJ0aWVzLlxuICAgICAgICAgKiBAZnVuY3Rpb24gY3JlYXRlXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuQzJNX1Rlc3RSZXF1ZXN0XG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPdXRlck1lc3NhZ2UuSUMyTV9UZXN0UmVxdWVzdD19IFtwcm9wZXJ0aWVzXSBQcm9wZXJ0aWVzIHRvIHNldFxuICAgICAgICAgKiBAcmV0dXJucyB7T3V0ZXJNZXNzYWdlLkMyTV9UZXN0UmVxdWVzdH0gQzJNX1Rlc3RSZXF1ZXN0IGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBDMk1fVGVzdFJlcXVlc3QuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQzJNX1Rlc3RSZXF1ZXN0KHByb3BlcnRpZXMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbmNvZGVzIHRoZSBzcGVjaWZpZWQgQzJNX1Rlc3RSZXF1ZXN0IG1lc3NhZ2UuIERvZXMgbm90IGltcGxpY2l0bHkge0BsaW5rIE91dGVyTWVzc2FnZS5DMk1fVGVzdFJlcXVlc3QudmVyaWZ5fHZlcmlmeX0gbWVzc2FnZXMuXG4gICAgICAgICAqIEBmdW5jdGlvbiBlbmNvZGVcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5DMk1fVGVzdFJlcXVlc3RcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge091dGVyTWVzc2FnZS5JQzJNX1Rlc3RSZXF1ZXN0fSBtIEMyTV9UZXN0UmVxdWVzdCBtZXNzYWdlIG9yIHBsYWluIG9iamVjdCB0byBlbmNvZGVcbiAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuV3JpdGVyfSBbd10gV3JpdGVyIHRvIGVuY29kZSB0b1xuICAgICAgICAgKiBAcmV0dXJucyB7JHByb3RvYnVmLldyaXRlcn0gV3JpdGVyXG4gICAgICAgICAqL1xuICAgICAgICBDMk1fVGVzdFJlcXVlc3QuZW5jb2RlID0gZnVuY3Rpb24gZW5jb2RlKG0sIHcpIHtcbiAgICAgICAgICAgIGlmICghdylcbiAgICAgICAgICAgICAgICB3ID0gJFdyaXRlci5jcmVhdGUoKTtcbiAgICAgICAgICAgIGlmIChtLnJlcXVlc3QgIT0gbnVsbCAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtLCBcInJlcXVlc3RcIikpXG4gICAgICAgICAgICAgICAgdy51aW50MzIoMTApLnN0cmluZyhtLnJlcXVlc3QpO1xuICAgICAgICAgICAgaWYgKG0uUnBjSWQgIT0gbnVsbCAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtLCBcIlJwY0lkXCIpKVxuICAgICAgICAgICAgICAgIHcudWludDMyKDcyMCkuaW50MzIobS5ScGNJZCk7XG4gICAgICAgICAgICBpZiAobS5BY3RvcklkICE9IG51bGwgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobSwgXCJBY3RvcklkXCIpKVxuICAgICAgICAgICAgICAgIHcudWludDMyKDc0NCkuaW50NjQobS5BY3RvcklkKTtcbiAgICAgICAgICAgIHJldHVybiB3O1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWNvZGVzIGEgQzJNX1Rlc3RSZXF1ZXN0IG1lc3NhZ2UgZnJvbSB0aGUgc3BlY2lmaWVkIHJlYWRlciBvciBidWZmZXIuXG4gICAgICAgICAqIEBmdW5jdGlvbiBkZWNvZGVcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5DMk1fVGVzdFJlcXVlc3RcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5SZWFkZXJ8VWludDhBcnJheX0gciBSZWFkZXIgb3IgYnVmZmVyIHRvIGRlY29kZSBmcm9tXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbF0gTWVzc2FnZSBsZW5ndGggaWYga25vd24gYmVmb3JlaGFuZFxuICAgICAgICAgKiBAcmV0dXJucyB7T3V0ZXJNZXNzYWdlLkMyTV9UZXN0UmVxdWVzdH0gQzJNX1Rlc3RSZXF1ZXN0XG4gICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgcGF5bG9hZCBpcyBub3QgYSByZWFkZXIgb3IgdmFsaWQgYnVmZmVyXG4gICAgICAgICAqIEB0aHJvd3MgeyRwcm90b2J1Zi51dGlsLlByb3RvY29sRXJyb3J9IElmIHJlcXVpcmVkIGZpZWxkcyBhcmUgbWlzc2luZ1xuICAgICAgICAgKi9cbiAgICAgICAgQzJNX1Rlc3RSZXF1ZXN0LmRlY29kZSA9IGZ1bmN0aW9uIGRlY29kZShyLCBsKSB7XG4gICAgICAgICAgICBpZiAoIShyIGluc3RhbmNlb2YgJFJlYWRlcikpXG4gICAgICAgICAgICAgICAgciA9ICRSZWFkZXIuY3JlYXRlKHIpO1xuICAgICAgICAgICAgdmFyIGMgPSBsID09PSB1bmRlZmluZWQgPyByLmxlbiA6IHIucG9zICsgbCwgbSA9IG5ldyAkcm9vdC5PdXRlck1lc3NhZ2UuQzJNX1Rlc3RSZXF1ZXN0KCk7XG4gICAgICAgICAgICB3aGlsZSAoci5wb3MgPCBjKSB7XG4gICAgICAgICAgICAgICAgdmFyIHQgPSByLnVpbnQzMigpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodCA+Pj4gMykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDkwOlxuICAgICAgICAgICAgICAgICAgICAgICAgbS5ScGNJZCA9IHIuaW50MzIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDkzOlxuICAgICAgICAgICAgICAgICAgICAgICAgbS5BY3RvcklkID0gci5pbnQ2NCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIG0ucmVxdWVzdCA9IHIuc3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHIuc2tpcFR5cGUodCAmIDcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG07XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIEMyTV9UZXN0UmVxdWVzdDtcbiAgICB9KSgpO1xuXG4gICAgT3V0ZXJNZXNzYWdlLk0yQ19UZXN0UmVzcG9uc2UgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcm9wZXJ0aWVzIG9mIGEgTTJDX1Rlc3RSZXNwb25zZS5cbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZVxuICAgICAgICAgKiBAaW50ZXJmYWNlIElNMkNfVGVzdFJlc3BvbnNlXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfG51bGx9IFtScGNJZF0gTTJDX1Rlc3RSZXNwb25zZSBScGNJZFxuICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcnxudWxsfSBbRXJyb3JdIE0yQ19UZXN0UmVzcG9uc2UgRXJyb3JcbiAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd8bnVsbH0gW01lc3NhZ2VdIE0yQ19UZXN0UmVzcG9uc2UgTWVzc2FnZVxuICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSBbcmVzcG9uc2VdIE0yQ19UZXN0UmVzcG9uc2UgcmVzcG9uc2VcbiAgICAgICAgICovXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnN0cnVjdHMgYSBuZXcgTTJDX1Rlc3RSZXNwb25zZS5cbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZVxuICAgICAgICAgKiBAY2xhc3NkZXNjIFJlcHJlc2VudHMgYSBNMkNfVGVzdFJlc3BvbnNlLlxuICAgICAgICAgKiBAaW1wbGVtZW50cyBJTTJDX1Rlc3RSZXNwb25zZVxuICAgICAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgICAgICogQHBhcmFtIHtPdXRlck1lc3NhZ2UuSU0yQ19UZXN0UmVzcG9uc2U9fSBbcF0gUHJvcGVydGllcyB0byBzZXRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIE0yQ19UZXN0UmVzcG9uc2UocCkge1xuICAgICAgICAgICAgaWYgKHApXG4gICAgICAgICAgICAgICAgZm9yICh2YXIga3MgPSBPYmplY3Qua2V5cyhwKSwgaSA9IDA7IGkgPCBrcy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBba3NbaV1dICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2tzW2ldXSA9IHBba3NbaV1dO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE0yQ19UZXN0UmVzcG9uc2UgUnBjSWQuXG4gICAgICAgICAqIEBtZW1iZXIge251bWJlcn0gUnBjSWRcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5NMkNfVGVzdFJlc3BvbnNlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgTTJDX1Rlc3RSZXNwb25zZS5wcm90b3R5cGUuUnBjSWQgPSAwO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNMkNfVGVzdFJlc3BvbnNlIEVycm9yLlxuICAgICAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IEVycm9yXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuTTJDX1Rlc3RSZXNwb25zZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIE0yQ19UZXN0UmVzcG9uc2UucHJvdG90eXBlLkVycm9yID0gMDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTTJDX1Rlc3RSZXNwb25zZSBNZXNzYWdlLlxuICAgICAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IE1lc3NhZ2VcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5NMkNfVGVzdFJlc3BvbnNlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgTTJDX1Rlc3RSZXNwb25zZS5wcm90b3R5cGUuTWVzc2FnZSA9IFwiXCI7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE0yQ19UZXN0UmVzcG9uc2UgcmVzcG9uc2UuXG4gICAgICAgICAqIEBtZW1iZXIge3N0cmluZ30gcmVzcG9uc2VcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5NMkNfVGVzdFJlc3BvbnNlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgTTJDX1Rlc3RSZXNwb25zZS5wcm90b3R5cGUucmVzcG9uc2UgPSBcIlwiO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGEgbmV3IE0yQ19UZXN0UmVzcG9uc2UgaW5zdGFuY2UgdXNpbmcgdGhlIHNwZWNpZmllZCBwcm9wZXJ0aWVzLlxuICAgICAgICAgKiBAZnVuY3Rpb24gY3JlYXRlXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuTTJDX1Rlc3RSZXNwb25zZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T3V0ZXJNZXNzYWdlLklNMkNfVGVzdFJlc3BvbnNlPX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XG4gICAgICAgICAqIEByZXR1cm5zIHtPdXRlck1lc3NhZ2UuTTJDX1Rlc3RSZXNwb25zZX0gTTJDX1Rlc3RSZXNwb25zZSBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgTTJDX1Rlc3RSZXNwb25zZS5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUocHJvcGVydGllcykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNMkNfVGVzdFJlc3BvbnNlKHByb3BlcnRpZXMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbmNvZGVzIHRoZSBzcGVjaWZpZWQgTTJDX1Rlc3RSZXNwb25zZSBtZXNzYWdlLiBEb2VzIG5vdCBpbXBsaWNpdGx5IHtAbGluayBPdXRlck1lc3NhZ2UuTTJDX1Rlc3RSZXNwb25zZS52ZXJpZnl8dmVyaWZ5fSBtZXNzYWdlcy5cbiAgICAgICAgICogQGZ1bmN0aW9uIGVuY29kZVxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLk0yQ19UZXN0UmVzcG9uc2VcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge091dGVyTWVzc2FnZS5JTTJDX1Rlc3RSZXNwb25zZX0gbSBNMkNfVGVzdFJlc3BvbnNlIG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxuICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3XSBXcml0ZXIgdG8gZW5jb2RlIHRvXG4gICAgICAgICAqIEByZXR1cm5zIHskcHJvdG9idWYuV3JpdGVyfSBXcml0ZXJcbiAgICAgICAgICovXG4gICAgICAgIE0yQ19UZXN0UmVzcG9uc2UuZW5jb2RlID0gZnVuY3Rpb24gZW5jb2RlKG0sIHcpIHtcbiAgICAgICAgICAgIGlmICghdylcbiAgICAgICAgICAgICAgICB3ID0gJFdyaXRlci5jcmVhdGUoKTtcbiAgICAgICAgICAgIGlmIChtLnJlc3BvbnNlICE9IG51bGwgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobSwgXCJyZXNwb25zZVwiKSlcbiAgICAgICAgICAgICAgICB3LnVpbnQzMigxMCkuc3RyaW5nKG0ucmVzcG9uc2UpO1xuICAgICAgICAgICAgaWYgKG0uUnBjSWQgIT0gbnVsbCAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtLCBcIlJwY0lkXCIpKVxuICAgICAgICAgICAgICAgIHcudWludDMyKDcyMCkuaW50MzIobS5ScGNJZCk7XG4gICAgICAgICAgICBpZiAobS5FcnJvciAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG0sIFwiRXJyb3JcIikpXG4gICAgICAgICAgICAgICAgdy51aW50MzIoNzI4KS5pbnQzMihtLkVycm9yKTtcbiAgICAgICAgICAgIGlmIChtLk1lc3NhZ2UgIT0gbnVsbCAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtLCBcIk1lc3NhZ2VcIikpXG4gICAgICAgICAgICAgICAgdy51aW50MzIoNzM4KS5zdHJpbmcobS5NZXNzYWdlKTtcbiAgICAgICAgICAgIHJldHVybiB3O1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWNvZGVzIGEgTTJDX1Rlc3RSZXNwb25zZSBtZXNzYWdlIGZyb20gdGhlIHNwZWNpZmllZCByZWFkZXIgb3IgYnVmZmVyLlxuICAgICAgICAgKiBAZnVuY3Rpb24gZGVjb2RlXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuTTJDX1Rlc3RSZXNwb25zZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLlJlYWRlcnxVaW50OEFycmF5fSByIFJlYWRlciBvciBidWZmZXIgdG8gZGVjb2RlIGZyb21cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtsXSBNZXNzYWdlIGxlbmd0aCBpZiBrbm93biBiZWZvcmVoYW5kXG4gICAgICAgICAqIEByZXR1cm5zIHtPdXRlck1lc3NhZ2UuTTJDX1Rlc3RSZXNwb25zZX0gTTJDX1Rlc3RSZXNwb25zZVxuICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHBheWxvYWQgaXMgbm90IGEgcmVhZGVyIG9yIHZhbGlkIGJ1ZmZlclxuICAgICAgICAgKiBAdGhyb3dzIHskcHJvdG9idWYudXRpbC5Qcm90b2NvbEVycm9yfSBJZiByZXF1aXJlZCBmaWVsZHMgYXJlIG1pc3NpbmdcbiAgICAgICAgICovXG4gICAgICAgIE0yQ19UZXN0UmVzcG9uc2UuZGVjb2RlID0gZnVuY3Rpb24gZGVjb2RlKHIsIGwpIHtcbiAgICAgICAgICAgIGlmICghKHIgaW5zdGFuY2VvZiAkUmVhZGVyKSlcbiAgICAgICAgICAgICAgICByID0gJFJlYWRlci5jcmVhdGUocik7XG4gICAgICAgICAgICB2YXIgYyA9IGwgPT09IHVuZGVmaW5lZCA/IHIubGVuIDogci5wb3MgKyBsLCBtID0gbmV3ICRyb290Lk91dGVyTWVzc2FnZS5NMkNfVGVzdFJlc3BvbnNlKCk7XG4gICAgICAgICAgICB3aGlsZSAoci5wb3MgPCBjKSB7XG4gICAgICAgICAgICAgICAgdmFyIHQgPSByLnVpbnQzMigpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodCA+Pj4gMykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDkwOlxuICAgICAgICAgICAgICAgICAgICAgICAgbS5ScGNJZCA9IHIuaW50MzIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDkxOlxuICAgICAgICAgICAgICAgICAgICAgICAgbS5FcnJvciA9IHIuaW50MzIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDkyOlxuICAgICAgICAgICAgICAgICAgICAgICAgbS5NZXNzYWdlID0gci5zdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBtLnJlc3BvbnNlID0gci5zdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgci5za2lwVHlwZSh0ICYgNyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gTTJDX1Rlc3RSZXNwb25zZTtcbiAgICB9KSgpO1xuXG4gICAgT3V0ZXJNZXNzYWdlLkFjdG9yX1RyYW5zZmVyUmVxdWVzdCA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByb3BlcnRpZXMgb2YgYW4gQWN0b3JfVHJhbnNmZXJSZXF1ZXN0LlxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlXG4gICAgICAgICAqIEBpbnRlcmZhY2UgSUFjdG9yX1RyYW5zZmVyUmVxdWVzdFxuICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcnxudWxsfSBbUnBjSWRdIEFjdG9yX1RyYW5zZmVyUmVxdWVzdCBScGNJZFxuICAgICAgICAgKiBAcHJvcGVydHkge0xvbmd8bnVsbH0gW0FjdG9ySWRdIEFjdG9yX1RyYW5zZmVyUmVxdWVzdCBBY3RvcklkXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfG51bGx9IFtNYXBJbmRleF0gQWN0b3JfVHJhbnNmZXJSZXF1ZXN0IE1hcEluZGV4XG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb25zdHJ1Y3RzIGEgbmV3IEFjdG9yX1RyYW5zZmVyUmVxdWVzdC5cbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZVxuICAgICAgICAgKiBAY2xhc3NkZXNjIFJlcHJlc2VudHMgYW4gQWN0b3JfVHJhbnNmZXJSZXF1ZXN0LlxuICAgICAgICAgKiBAaW1wbGVtZW50cyBJQWN0b3JfVHJhbnNmZXJSZXF1ZXN0XG4gICAgICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAgICAgKiBAcGFyYW0ge091dGVyTWVzc2FnZS5JQWN0b3JfVHJhbnNmZXJSZXF1ZXN0PX0gW3BdIFByb3BlcnRpZXMgdG8gc2V0XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBBY3Rvcl9UcmFuc2ZlclJlcXVlc3QocCkge1xuICAgICAgICAgICAgaWYgKHApXG4gICAgICAgICAgICAgICAgZm9yICh2YXIga3MgPSBPYmplY3Qua2V5cyhwKSwgaSA9IDA7IGkgPCBrcy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBba3NbaV1dICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2tzW2ldXSA9IHBba3NbaV1dO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFjdG9yX1RyYW5zZmVyUmVxdWVzdCBScGNJZC5cbiAgICAgICAgICogQG1lbWJlciB7bnVtYmVyfSBScGNJZFxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLkFjdG9yX1RyYW5zZmVyUmVxdWVzdFxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIEFjdG9yX1RyYW5zZmVyUmVxdWVzdC5wcm90b3R5cGUuUnBjSWQgPSAwO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBY3Rvcl9UcmFuc2ZlclJlcXVlc3QgQWN0b3JJZC5cbiAgICAgICAgICogQG1lbWJlciB7TG9uZ30gQWN0b3JJZFxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLkFjdG9yX1RyYW5zZmVyUmVxdWVzdFxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIEFjdG9yX1RyYW5zZmVyUmVxdWVzdC5wcm90b3R5cGUuQWN0b3JJZCA9ICR1dGlsLkxvbmcgPyAkdXRpbC5Mb25nLmZyb21CaXRzKDAsIDAsIGZhbHNlKSA6IDA7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFjdG9yX1RyYW5zZmVyUmVxdWVzdCBNYXBJbmRleC5cbiAgICAgICAgICogQG1lbWJlciB7bnVtYmVyfSBNYXBJbmRleFxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLkFjdG9yX1RyYW5zZmVyUmVxdWVzdFxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIEFjdG9yX1RyYW5zZmVyUmVxdWVzdC5wcm90b3R5cGUuTWFwSW5kZXggPSAwO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGEgbmV3IEFjdG9yX1RyYW5zZmVyUmVxdWVzdCBpbnN0YW5jZSB1c2luZyB0aGUgc3BlY2lmaWVkIHByb3BlcnRpZXMuXG4gICAgICAgICAqIEBmdW5jdGlvbiBjcmVhdGVcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5BY3Rvcl9UcmFuc2ZlclJlcXVlc3RcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge091dGVyTWVzc2FnZS5JQWN0b3JfVHJhbnNmZXJSZXF1ZXN0PX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XG4gICAgICAgICAqIEByZXR1cm5zIHtPdXRlck1lc3NhZ2UuQWN0b3JfVHJhbnNmZXJSZXF1ZXN0fSBBY3Rvcl9UcmFuc2ZlclJlcXVlc3QgaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIEFjdG9yX1RyYW5zZmVyUmVxdWVzdC5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUocHJvcGVydGllcykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBBY3Rvcl9UcmFuc2ZlclJlcXVlc3QocHJvcGVydGllcyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVuY29kZXMgdGhlIHNwZWNpZmllZCBBY3Rvcl9UcmFuc2ZlclJlcXVlc3QgbWVzc2FnZS4gRG9lcyBub3QgaW1wbGljaXRseSB7QGxpbmsgT3V0ZXJNZXNzYWdlLkFjdG9yX1RyYW5zZmVyUmVxdWVzdC52ZXJpZnl8dmVyaWZ5fSBtZXNzYWdlcy5cbiAgICAgICAgICogQGZ1bmN0aW9uIGVuY29kZVxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLkFjdG9yX1RyYW5zZmVyUmVxdWVzdFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T3V0ZXJNZXNzYWdlLklBY3Rvcl9UcmFuc2ZlclJlcXVlc3R9IG0gQWN0b3JfVHJhbnNmZXJSZXF1ZXN0IG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxuICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3XSBXcml0ZXIgdG8gZW5jb2RlIHRvXG4gICAgICAgICAqIEByZXR1cm5zIHskcHJvdG9idWYuV3JpdGVyfSBXcml0ZXJcbiAgICAgICAgICovXG4gICAgICAgIEFjdG9yX1RyYW5zZmVyUmVxdWVzdC5lbmNvZGUgPSBmdW5jdGlvbiBlbmNvZGUobSwgdykge1xuICAgICAgICAgICAgaWYgKCF3KVxuICAgICAgICAgICAgICAgIHcgPSAkV3JpdGVyLmNyZWF0ZSgpO1xuICAgICAgICAgICAgaWYgKG0uTWFwSW5kZXggIT0gbnVsbCAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtLCBcIk1hcEluZGV4XCIpKVxuICAgICAgICAgICAgICAgIHcudWludDMyKDgpLmludDMyKG0uTWFwSW5kZXgpO1xuICAgICAgICAgICAgaWYgKG0uUnBjSWQgIT0gbnVsbCAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtLCBcIlJwY0lkXCIpKVxuICAgICAgICAgICAgICAgIHcudWludDMyKDcyMCkuaW50MzIobS5ScGNJZCk7XG4gICAgICAgICAgICBpZiAobS5BY3RvcklkICE9IG51bGwgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobSwgXCJBY3RvcklkXCIpKVxuICAgICAgICAgICAgICAgIHcudWludDMyKDc0NCkuaW50NjQobS5BY3RvcklkKTtcbiAgICAgICAgICAgIHJldHVybiB3O1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWNvZGVzIGFuIEFjdG9yX1RyYW5zZmVyUmVxdWVzdCBtZXNzYWdlIGZyb20gdGhlIHNwZWNpZmllZCByZWFkZXIgb3IgYnVmZmVyLlxuICAgICAgICAgKiBAZnVuY3Rpb24gZGVjb2RlXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuQWN0b3JfVHJhbnNmZXJSZXF1ZXN0XG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuUmVhZGVyfFVpbnQ4QXJyYXl9IHIgUmVhZGVyIG9yIGJ1ZmZlciB0byBkZWNvZGUgZnJvbVxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xdIE1lc3NhZ2UgbGVuZ3RoIGlmIGtub3duIGJlZm9yZWhhbmRcbiAgICAgICAgICogQHJldHVybnMge091dGVyTWVzc2FnZS5BY3Rvcl9UcmFuc2ZlclJlcXVlc3R9IEFjdG9yX1RyYW5zZmVyUmVxdWVzdFxuICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHBheWxvYWQgaXMgbm90IGEgcmVhZGVyIG9yIHZhbGlkIGJ1ZmZlclxuICAgICAgICAgKiBAdGhyb3dzIHskcHJvdG9idWYudXRpbC5Qcm90b2NvbEVycm9yfSBJZiByZXF1aXJlZCBmaWVsZHMgYXJlIG1pc3NpbmdcbiAgICAgICAgICovXG4gICAgICAgIEFjdG9yX1RyYW5zZmVyUmVxdWVzdC5kZWNvZGUgPSBmdW5jdGlvbiBkZWNvZGUociwgbCkge1xuICAgICAgICAgICAgaWYgKCEociBpbnN0YW5jZW9mICRSZWFkZXIpKVxuICAgICAgICAgICAgICAgIHIgPSAkUmVhZGVyLmNyZWF0ZShyKTtcbiAgICAgICAgICAgIHZhciBjID0gbCA9PT0gdW5kZWZpbmVkID8gci5sZW4gOiByLnBvcyArIGwsIG0gPSBuZXcgJHJvb3QuT3V0ZXJNZXNzYWdlLkFjdG9yX1RyYW5zZmVyUmVxdWVzdCgpO1xuICAgICAgICAgICAgd2hpbGUgKHIucG9zIDwgYykge1xuICAgICAgICAgICAgICAgIHZhciB0ID0gci51aW50MzIoKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHQgPj4+IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5MDpcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uUnBjSWQgPSByLmludDMyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5MzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uQWN0b3JJZCA9IHIuaW50NjQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBtLk1hcEluZGV4ID0gci5pbnQzMigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICByLnNraXBUeXBlKHQgJiA3KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBBY3Rvcl9UcmFuc2ZlclJlcXVlc3Q7XG4gICAgfSkoKTtcblxuICAgIE91dGVyTWVzc2FnZS5BY3Rvcl9UcmFuc2ZlclJlc3BvbnNlID0gKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvcGVydGllcyBvZiBhbiBBY3Rvcl9UcmFuc2ZlclJlc3BvbnNlLlxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlXG4gICAgICAgICAqIEBpbnRlcmZhY2UgSUFjdG9yX1RyYW5zZmVyUmVzcG9uc2VcbiAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ8bnVsbH0gW1JwY0lkXSBBY3Rvcl9UcmFuc2ZlclJlc3BvbnNlIFJwY0lkXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfG51bGx9IFtFcnJvcl0gQWN0b3JfVHJhbnNmZXJSZXNwb25zZSBFcnJvclxuICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSBbTWVzc2FnZV0gQWN0b3JfVHJhbnNmZXJSZXNwb25zZSBNZXNzYWdlXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb25zdHJ1Y3RzIGEgbmV3IEFjdG9yX1RyYW5zZmVyUmVzcG9uc2UuXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2VcbiAgICAgICAgICogQGNsYXNzZGVzYyBSZXByZXNlbnRzIGFuIEFjdG9yX1RyYW5zZmVyUmVzcG9uc2UuXG4gICAgICAgICAqIEBpbXBsZW1lbnRzIElBY3Rvcl9UcmFuc2ZlclJlc3BvbnNlXG4gICAgICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAgICAgKiBAcGFyYW0ge091dGVyTWVzc2FnZS5JQWN0b3JfVHJhbnNmZXJSZXNwb25zZT19IFtwXSBQcm9wZXJ0aWVzIHRvIHNldFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gQWN0b3JfVHJhbnNmZXJSZXNwb25zZShwKSB7XG4gICAgICAgICAgICBpZiAocClcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrcyA9IE9iamVjdC5rZXlzKHApLCBpID0gMDsgaSA8IGtzLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgICAgICAgICBpZiAocFtrc1tpXV0gIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNba3NbaV1dID0gcFtrc1tpXV07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQWN0b3JfVHJhbnNmZXJSZXNwb25zZSBScGNJZC5cbiAgICAgICAgICogQG1lbWJlciB7bnVtYmVyfSBScGNJZFxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLkFjdG9yX1RyYW5zZmVyUmVzcG9uc2VcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBBY3Rvcl9UcmFuc2ZlclJlc3BvbnNlLnByb3RvdHlwZS5ScGNJZCA9IDA7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFjdG9yX1RyYW5zZmVyUmVzcG9uc2UgRXJyb3IuXG4gICAgICAgICAqIEBtZW1iZXIge251bWJlcn0gRXJyb3JcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5BY3Rvcl9UcmFuc2ZlclJlc3BvbnNlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgQWN0b3JfVHJhbnNmZXJSZXNwb25zZS5wcm90b3R5cGUuRXJyb3IgPSAwO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBY3Rvcl9UcmFuc2ZlclJlc3BvbnNlIE1lc3NhZ2UuXG4gICAgICAgICAqIEBtZW1iZXIge3N0cmluZ30gTWVzc2FnZVxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLkFjdG9yX1RyYW5zZmVyUmVzcG9uc2VcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBBY3Rvcl9UcmFuc2ZlclJlc3BvbnNlLnByb3RvdHlwZS5NZXNzYWdlID0gXCJcIjtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyBhIG5ldyBBY3Rvcl9UcmFuc2ZlclJlc3BvbnNlIGluc3RhbmNlIHVzaW5nIHRoZSBzcGVjaWZpZWQgcHJvcGVydGllcy5cbiAgICAgICAgICogQGZ1bmN0aW9uIGNyZWF0ZVxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLkFjdG9yX1RyYW5zZmVyUmVzcG9uc2VcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge091dGVyTWVzc2FnZS5JQWN0b3JfVHJhbnNmZXJSZXNwb25zZT19IFtwcm9wZXJ0aWVzXSBQcm9wZXJ0aWVzIHRvIHNldFxuICAgICAgICAgKiBAcmV0dXJucyB7T3V0ZXJNZXNzYWdlLkFjdG9yX1RyYW5zZmVyUmVzcG9uc2V9IEFjdG9yX1RyYW5zZmVyUmVzcG9uc2UgaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIEFjdG9yX1RyYW5zZmVyUmVzcG9uc2UuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQWN0b3JfVHJhbnNmZXJSZXNwb25zZShwcm9wZXJ0aWVzKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRW5jb2RlcyB0aGUgc3BlY2lmaWVkIEFjdG9yX1RyYW5zZmVyUmVzcG9uc2UgbWVzc2FnZS4gRG9lcyBub3QgaW1wbGljaXRseSB7QGxpbmsgT3V0ZXJNZXNzYWdlLkFjdG9yX1RyYW5zZmVyUmVzcG9uc2UudmVyaWZ5fHZlcmlmeX0gbWVzc2FnZXMuXG4gICAgICAgICAqIEBmdW5jdGlvbiBlbmNvZGVcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5BY3Rvcl9UcmFuc2ZlclJlc3BvbnNlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPdXRlck1lc3NhZ2UuSUFjdG9yX1RyYW5zZmVyUmVzcG9uc2V9IG0gQWN0b3JfVHJhbnNmZXJSZXNwb25zZSBtZXNzYWdlIG9yIHBsYWluIG9iamVjdCB0byBlbmNvZGVcbiAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuV3JpdGVyfSBbd10gV3JpdGVyIHRvIGVuY29kZSB0b1xuICAgICAgICAgKiBAcmV0dXJucyB7JHByb3RvYnVmLldyaXRlcn0gV3JpdGVyXG4gICAgICAgICAqL1xuICAgICAgICBBY3Rvcl9UcmFuc2ZlclJlc3BvbnNlLmVuY29kZSA9IGZ1bmN0aW9uIGVuY29kZShtLCB3KSB7XG4gICAgICAgICAgICBpZiAoIXcpXG4gICAgICAgICAgICAgICAgdyA9ICRXcml0ZXIuY3JlYXRlKCk7XG4gICAgICAgICAgICBpZiAobS5ScGNJZCAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG0sIFwiUnBjSWRcIikpXG4gICAgICAgICAgICAgICAgdy51aW50MzIoNzIwKS5pbnQzMihtLlJwY0lkKTtcbiAgICAgICAgICAgIGlmIChtLkVycm9yICE9IG51bGwgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobSwgXCJFcnJvclwiKSlcbiAgICAgICAgICAgICAgICB3LnVpbnQzMig3MjgpLmludDMyKG0uRXJyb3IpO1xuICAgICAgICAgICAgaWYgKG0uTWVzc2FnZSAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG0sIFwiTWVzc2FnZVwiKSlcbiAgICAgICAgICAgICAgICB3LnVpbnQzMig3MzgpLnN0cmluZyhtLk1lc3NhZ2UpO1xuICAgICAgICAgICAgcmV0dXJuIHc7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlY29kZXMgYW4gQWN0b3JfVHJhbnNmZXJSZXNwb25zZSBtZXNzYWdlIGZyb20gdGhlIHNwZWNpZmllZCByZWFkZXIgb3IgYnVmZmVyLlxuICAgICAgICAgKiBAZnVuY3Rpb24gZGVjb2RlXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuQWN0b3JfVHJhbnNmZXJSZXNwb25zZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLlJlYWRlcnxVaW50OEFycmF5fSByIFJlYWRlciBvciBidWZmZXIgdG8gZGVjb2RlIGZyb21cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtsXSBNZXNzYWdlIGxlbmd0aCBpZiBrbm93biBiZWZvcmVoYW5kXG4gICAgICAgICAqIEByZXR1cm5zIHtPdXRlck1lc3NhZ2UuQWN0b3JfVHJhbnNmZXJSZXNwb25zZX0gQWN0b3JfVHJhbnNmZXJSZXNwb25zZVxuICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHBheWxvYWQgaXMgbm90IGEgcmVhZGVyIG9yIHZhbGlkIGJ1ZmZlclxuICAgICAgICAgKiBAdGhyb3dzIHskcHJvdG9idWYudXRpbC5Qcm90b2NvbEVycm9yfSBJZiByZXF1aXJlZCBmaWVsZHMgYXJlIG1pc3NpbmdcbiAgICAgICAgICovXG4gICAgICAgIEFjdG9yX1RyYW5zZmVyUmVzcG9uc2UuZGVjb2RlID0gZnVuY3Rpb24gZGVjb2RlKHIsIGwpIHtcbiAgICAgICAgICAgIGlmICghKHIgaW5zdGFuY2VvZiAkUmVhZGVyKSlcbiAgICAgICAgICAgICAgICByID0gJFJlYWRlci5jcmVhdGUocik7XG4gICAgICAgICAgICB2YXIgYyA9IGwgPT09IHVuZGVmaW5lZCA/IHIubGVuIDogci5wb3MgKyBsLCBtID0gbmV3ICRyb290Lk91dGVyTWVzc2FnZS5BY3Rvcl9UcmFuc2ZlclJlc3BvbnNlKCk7XG4gICAgICAgICAgICB3aGlsZSAoci5wb3MgPCBjKSB7XG4gICAgICAgICAgICAgICAgdmFyIHQgPSByLnVpbnQzMigpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodCA+Pj4gMykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDkwOlxuICAgICAgICAgICAgICAgICAgICAgICAgbS5ScGNJZCA9IHIuaW50MzIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDkxOlxuICAgICAgICAgICAgICAgICAgICAgICAgbS5FcnJvciA9IHIuaW50MzIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDkyOlxuICAgICAgICAgICAgICAgICAgICAgICAgbS5NZXNzYWdlID0gci5zdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgci5za2lwVHlwZSh0ICYgNyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gQWN0b3JfVHJhbnNmZXJSZXNwb25zZTtcbiAgICB9KSgpO1xuXG4gICAgT3V0ZXJNZXNzYWdlLkMyR19FbnRlck1hcCA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByb3BlcnRpZXMgb2YgYSBDMkdfRW50ZXJNYXAuXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2VcbiAgICAgICAgICogQGludGVyZmFjZSBJQzJHX0VudGVyTWFwXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfG51bGx9IFtScGNJZF0gQzJHX0VudGVyTWFwIFJwY0lkXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb25zdHJ1Y3RzIGEgbmV3IEMyR19FbnRlck1hcC5cbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZVxuICAgICAgICAgKiBAY2xhc3NkZXNjIFJlcHJlc2VudHMgYSBDMkdfRW50ZXJNYXAuXG4gICAgICAgICAqIEBpbXBsZW1lbnRzIElDMkdfRW50ZXJNYXBcbiAgICAgICAgICogQGNvbnN0cnVjdG9yXG4gICAgICAgICAqIEBwYXJhbSB7T3V0ZXJNZXNzYWdlLklDMkdfRW50ZXJNYXA9fSBbcF0gUHJvcGVydGllcyB0byBzZXRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIEMyR19FbnRlck1hcChwKSB7XG4gICAgICAgICAgICBpZiAocClcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrcyA9IE9iamVjdC5rZXlzKHApLCBpID0gMDsgaSA8IGtzLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgICAgICAgICBpZiAocFtrc1tpXV0gIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNba3NbaV1dID0gcFtrc1tpXV07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQzJHX0VudGVyTWFwIFJwY0lkLlxuICAgICAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFJwY0lkXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuQzJHX0VudGVyTWFwXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgQzJHX0VudGVyTWFwLnByb3RvdHlwZS5ScGNJZCA9IDA7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZXMgYSBuZXcgQzJHX0VudGVyTWFwIGluc3RhbmNlIHVzaW5nIHRoZSBzcGVjaWZpZWQgcHJvcGVydGllcy5cbiAgICAgICAgICogQGZ1bmN0aW9uIGNyZWF0ZVxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLkMyR19FbnRlck1hcFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T3V0ZXJNZXNzYWdlLklDMkdfRW50ZXJNYXA9fSBbcHJvcGVydGllc10gUHJvcGVydGllcyB0byBzZXRcbiAgICAgICAgICogQHJldHVybnMge091dGVyTWVzc2FnZS5DMkdfRW50ZXJNYXB9IEMyR19FbnRlck1hcCBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgQzJHX0VudGVyTWFwLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShwcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEMyR19FbnRlck1hcChwcm9wZXJ0aWVzKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRW5jb2RlcyB0aGUgc3BlY2lmaWVkIEMyR19FbnRlck1hcCBtZXNzYWdlLiBEb2VzIG5vdCBpbXBsaWNpdGx5IHtAbGluayBPdXRlck1lc3NhZ2UuQzJHX0VudGVyTWFwLnZlcmlmeXx2ZXJpZnl9IG1lc3NhZ2VzLlxuICAgICAgICAgKiBAZnVuY3Rpb24gZW5jb2RlXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuQzJHX0VudGVyTWFwXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPdXRlck1lc3NhZ2UuSUMyR19FbnRlck1hcH0gbSBDMkdfRW50ZXJNYXAgbWVzc2FnZSBvciBwbGFpbiBvYmplY3QgdG8gZW5jb2RlXG4gICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLldyaXRlcn0gW3ddIFdyaXRlciB0byBlbmNvZGUgdG9cbiAgICAgICAgICogQHJldHVybnMgeyRwcm90b2J1Zi5Xcml0ZXJ9IFdyaXRlclxuICAgICAgICAgKi9cbiAgICAgICAgQzJHX0VudGVyTWFwLmVuY29kZSA9IGZ1bmN0aW9uIGVuY29kZShtLCB3KSB7XG4gICAgICAgICAgICBpZiAoIXcpXG4gICAgICAgICAgICAgICAgdyA9ICRXcml0ZXIuY3JlYXRlKCk7XG4gICAgICAgICAgICBpZiAobS5ScGNJZCAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG0sIFwiUnBjSWRcIikpXG4gICAgICAgICAgICAgICAgdy51aW50MzIoNzIwKS5pbnQzMihtLlJwY0lkKTtcbiAgICAgICAgICAgIHJldHVybiB3O1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWNvZGVzIGEgQzJHX0VudGVyTWFwIG1lc3NhZ2UgZnJvbSB0aGUgc3BlY2lmaWVkIHJlYWRlciBvciBidWZmZXIuXG4gICAgICAgICAqIEBmdW5jdGlvbiBkZWNvZGVcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5DMkdfRW50ZXJNYXBcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5SZWFkZXJ8VWludDhBcnJheX0gciBSZWFkZXIgb3IgYnVmZmVyIHRvIGRlY29kZSBmcm9tXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbF0gTWVzc2FnZSBsZW5ndGggaWYga25vd24gYmVmb3JlaGFuZFxuICAgICAgICAgKiBAcmV0dXJucyB7T3V0ZXJNZXNzYWdlLkMyR19FbnRlck1hcH0gQzJHX0VudGVyTWFwXG4gICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgcGF5bG9hZCBpcyBub3QgYSByZWFkZXIgb3IgdmFsaWQgYnVmZmVyXG4gICAgICAgICAqIEB0aHJvd3MgeyRwcm90b2J1Zi51dGlsLlByb3RvY29sRXJyb3J9IElmIHJlcXVpcmVkIGZpZWxkcyBhcmUgbWlzc2luZ1xuICAgICAgICAgKi9cbiAgICAgICAgQzJHX0VudGVyTWFwLmRlY29kZSA9IGZ1bmN0aW9uIGRlY29kZShyLCBsKSB7XG4gICAgICAgICAgICBpZiAoIShyIGluc3RhbmNlb2YgJFJlYWRlcikpXG4gICAgICAgICAgICAgICAgciA9ICRSZWFkZXIuY3JlYXRlKHIpO1xuICAgICAgICAgICAgdmFyIGMgPSBsID09PSB1bmRlZmluZWQgPyByLmxlbiA6IHIucG9zICsgbCwgbSA9IG5ldyAkcm9vdC5PdXRlck1lc3NhZ2UuQzJHX0VudGVyTWFwKCk7XG4gICAgICAgICAgICB3aGlsZSAoci5wb3MgPCBjKSB7XG4gICAgICAgICAgICAgICAgdmFyIHQgPSByLnVpbnQzMigpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodCA+Pj4gMykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDkwOlxuICAgICAgICAgICAgICAgICAgICAgICAgbS5ScGNJZCA9IHIuaW50MzIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgci5za2lwVHlwZSh0ICYgNyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gQzJHX0VudGVyTWFwO1xuICAgIH0pKCk7XG5cbiAgICBPdXRlck1lc3NhZ2UuRzJDX0VudGVyTWFwID0gKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvcGVydGllcyBvZiBhIEcyQ19FbnRlck1hcC5cbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZVxuICAgICAgICAgKiBAaW50ZXJmYWNlIElHMkNfRW50ZXJNYXBcbiAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ8bnVsbH0gW1JwY0lkXSBHMkNfRW50ZXJNYXAgUnBjSWRcbiAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ8bnVsbH0gW0Vycm9yXSBHMkNfRW50ZXJNYXAgRXJyb3JcbiAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd8bnVsbH0gW01lc3NhZ2VdIEcyQ19FbnRlck1hcCBNZXNzYWdlXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7TG9uZ3xudWxsfSBbVW5pdElkXSBHMkNfRW50ZXJNYXAgVW5pdElkXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7QXJyYXkuPE91dGVyTWVzc2FnZS5JVW5pdEluZm8+fG51bGx9IFtVbml0c10gRzJDX0VudGVyTWFwIFVuaXRzXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb25zdHJ1Y3RzIGEgbmV3IEcyQ19FbnRlck1hcC5cbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZVxuICAgICAgICAgKiBAY2xhc3NkZXNjIFJlcHJlc2VudHMgYSBHMkNfRW50ZXJNYXAuXG4gICAgICAgICAqIEBpbXBsZW1lbnRzIElHMkNfRW50ZXJNYXBcbiAgICAgICAgICogQGNvbnN0cnVjdG9yXG4gICAgICAgICAqIEBwYXJhbSB7T3V0ZXJNZXNzYWdlLklHMkNfRW50ZXJNYXA9fSBbcF0gUHJvcGVydGllcyB0byBzZXRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIEcyQ19FbnRlck1hcChwKSB7XG4gICAgICAgICAgICB0aGlzLlVuaXRzID0gW107XG4gICAgICAgICAgICBpZiAocClcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrcyA9IE9iamVjdC5rZXlzKHApLCBpID0gMDsgaSA8IGtzLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgICAgICAgICBpZiAocFtrc1tpXV0gIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNba3NbaV1dID0gcFtrc1tpXV07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRzJDX0VudGVyTWFwIFJwY0lkLlxuICAgICAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFJwY0lkXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuRzJDX0VudGVyTWFwXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgRzJDX0VudGVyTWFwLnByb3RvdHlwZS5ScGNJZCA9IDA7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEcyQ19FbnRlck1hcCBFcnJvci5cbiAgICAgICAgICogQG1lbWJlciB7bnVtYmVyfSBFcnJvclxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLkcyQ19FbnRlck1hcFxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIEcyQ19FbnRlck1hcC5wcm90b3R5cGUuRXJyb3IgPSAwO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHMkNfRW50ZXJNYXAgTWVzc2FnZS5cbiAgICAgICAgICogQG1lbWJlciB7c3RyaW5nfSBNZXNzYWdlXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuRzJDX0VudGVyTWFwXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgRzJDX0VudGVyTWFwLnByb3RvdHlwZS5NZXNzYWdlID0gXCJcIjtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRzJDX0VudGVyTWFwIFVuaXRJZC5cbiAgICAgICAgICogQG1lbWJlciB7TG9uZ30gVW5pdElkXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuRzJDX0VudGVyTWFwXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgRzJDX0VudGVyTWFwLnByb3RvdHlwZS5Vbml0SWQgPSAkdXRpbC5Mb25nID8gJHV0aWwuTG9uZy5mcm9tQml0cygwLCAwLCBmYWxzZSkgOiAwO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHMkNfRW50ZXJNYXAgVW5pdHMuXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5LjxPdXRlck1lc3NhZ2UuSVVuaXRJbmZvPn0gVW5pdHNcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5HMkNfRW50ZXJNYXBcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBHMkNfRW50ZXJNYXAucHJvdG90eXBlLlVuaXRzID0gJHV0aWwuZW1wdHlBcnJheTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyBhIG5ldyBHMkNfRW50ZXJNYXAgaW5zdGFuY2UgdXNpbmcgdGhlIHNwZWNpZmllZCBwcm9wZXJ0aWVzLlxuICAgICAgICAgKiBAZnVuY3Rpb24gY3JlYXRlXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuRzJDX0VudGVyTWFwXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPdXRlck1lc3NhZ2UuSUcyQ19FbnRlck1hcD19IFtwcm9wZXJ0aWVzXSBQcm9wZXJ0aWVzIHRvIHNldFxuICAgICAgICAgKiBAcmV0dXJucyB7T3V0ZXJNZXNzYWdlLkcyQ19FbnRlck1hcH0gRzJDX0VudGVyTWFwIGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBHMkNfRW50ZXJNYXAuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRzJDX0VudGVyTWFwKHByb3BlcnRpZXMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbmNvZGVzIHRoZSBzcGVjaWZpZWQgRzJDX0VudGVyTWFwIG1lc3NhZ2UuIERvZXMgbm90IGltcGxpY2l0bHkge0BsaW5rIE91dGVyTWVzc2FnZS5HMkNfRW50ZXJNYXAudmVyaWZ5fHZlcmlmeX0gbWVzc2FnZXMuXG4gICAgICAgICAqIEBmdW5jdGlvbiBlbmNvZGVcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5HMkNfRW50ZXJNYXBcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge091dGVyTWVzc2FnZS5JRzJDX0VudGVyTWFwfSBtIEcyQ19FbnRlck1hcCBtZXNzYWdlIG9yIHBsYWluIG9iamVjdCB0byBlbmNvZGVcbiAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuV3JpdGVyfSBbd10gV3JpdGVyIHRvIGVuY29kZSB0b1xuICAgICAgICAgKiBAcmV0dXJucyB7JHByb3RvYnVmLldyaXRlcn0gV3JpdGVyXG4gICAgICAgICAqL1xuICAgICAgICBHMkNfRW50ZXJNYXAuZW5jb2RlID0gZnVuY3Rpb24gZW5jb2RlKG0sIHcpIHtcbiAgICAgICAgICAgIGlmICghdylcbiAgICAgICAgICAgICAgICB3ID0gJFdyaXRlci5jcmVhdGUoKTtcbiAgICAgICAgICAgIGlmIChtLlVuaXRJZCAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG0sIFwiVW5pdElkXCIpKVxuICAgICAgICAgICAgICAgIHcudWludDMyKDgpLmludDY0KG0uVW5pdElkKTtcbiAgICAgICAgICAgIGlmIChtLlVuaXRzICE9IG51bGwgJiYgbS5Vbml0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG0uVW5pdHMubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICAgICAgICAgICRyb290Lk91dGVyTWVzc2FnZS5Vbml0SW5mby5lbmNvZGUobS5Vbml0c1tpXSwgdy51aW50MzIoMTgpLmZvcmsoKSkubGRlbGltKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobS5ScGNJZCAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG0sIFwiUnBjSWRcIikpXG4gICAgICAgICAgICAgICAgdy51aW50MzIoNzIwKS5pbnQzMihtLlJwY0lkKTtcbiAgICAgICAgICAgIGlmIChtLkVycm9yICE9IG51bGwgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobSwgXCJFcnJvclwiKSlcbiAgICAgICAgICAgICAgICB3LnVpbnQzMig3MjgpLmludDMyKG0uRXJyb3IpO1xuICAgICAgICAgICAgaWYgKG0uTWVzc2FnZSAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG0sIFwiTWVzc2FnZVwiKSlcbiAgICAgICAgICAgICAgICB3LnVpbnQzMig3MzgpLnN0cmluZyhtLk1lc3NhZ2UpO1xuICAgICAgICAgICAgcmV0dXJuIHc7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlY29kZXMgYSBHMkNfRW50ZXJNYXAgbWVzc2FnZSBmcm9tIHRoZSBzcGVjaWZpZWQgcmVhZGVyIG9yIGJ1ZmZlci5cbiAgICAgICAgICogQGZ1bmN0aW9uIGRlY29kZVxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLkcyQ19FbnRlck1hcFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLlJlYWRlcnxVaW50OEFycmF5fSByIFJlYWRlciBvciBidWZmZXIgdG8gZGVjb2RlIGZyb21cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtsXSBNZXNzYWdlIGxlbmd0aCBpZiBrbm93biBiZWZvcmVoYW5kXG4gICAgICAgICAqIEByZXR1cm5zIHtPdXRlck1lc3NhZ2UuRzJDX0VudGVyTWFwfSBHMkNfRW50ZXJNYXBcbiAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBwYXlsb2FkIGlzIG5vdCBhIHJlYWRlciBvciB2YWxpZCBidWZmZXJcbiAgICAgICAgICogQHRocm93cyB7JHByb3RvYnVmLnV0aWwuUHJvdG9jb2xFcnJvcn0gSWYgcmVxdWlyZWQgZmllbGRzIGFyZSBtaXNzaW5nXG4gICAgICAgICAqL1xuICAgICAgICBHMkNfRW50ZXJNYXAuZGVjb2RlID0gZnVuY3Rpb24gZGVjb2RlKHIsIGwpIHtcbiAgICAgICAgICAgIGlmICghKHIgaW5zdGFuY2VvZiAkUmVhZGVyKSlcbiAgICAgICAgICAgICAgICByID0gJFJlYWRlci5jcmVhdGUocik7XG4gICAgICAgICAgICB2YXIgYyA9IGwgPT09IHVuZGVmaW5lZCA/IHIubGVuIDogci5wb3MgKyBsLCBtID0gbmV3ICRyb290Lk91dGVyTWVzc2FnZS5HMkNfRW50ZXJNYXAoKTtcbiAgICAgICAgICAgIHdoaWxlIChyLnBvcyA8IGMpIHtcbiAgICAgICAgICAgICAgICB2YXIgdCA9IHIudWludDMyKCk7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0ID4+PiAzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTA6XG4gICAgICAgICAgICAgICAgICAgICAgICBtLlJwY0lkID0gci5pbnQzMigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTE6XG4gICAgICAgICAgICAgICAgICAgICAgICBtLkVycm9yID0gci5pbnQzMigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTI6XG4gICAgICAgICAgICAgICAgICAgICAgICBtLk1lc3NhZ2UgPSByLnN0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uVW5pdElkID0gci5pbnQ2NCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKG0uVW5pdHMgJiYgbS5Vbml0cy5sZW5ndGgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0uVW5pdHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uVW5pdHMucHVzaCgkcm9vdC5PdXRlck1lc3NhZ2UuVW5pdEluZm8uZGVjb2RlKHIsIHIudWludDMyKCkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgci5za2lwVHlwZSh0ICYgNyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gRzJDX0VudGVyTWFwO1xuICAgIH0pKCk7XG5cbiAgICBPdXRlck1lc3NhZ2UuVW5pdEluZm8gPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcm9wZXJ0aWVzIG9mIGFuIFVuaXRJbmZvLlxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlXG4gICAgICAgICAqIEBpbnRlcmZhY2UgSVVuaXRJbmZvXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7TG9uZ3xudWxsfSBbVW5pdElkXSBVbml0SW5mbyBVbml0SWRcbiAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ8bnVsbH0gW1hdIFVuaXRJbmZvIFhcbiAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ8bnVsbH0gW1ldIFVuaXRJbmZvIFlcbiAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ8bnVsbH0gW1pdIFVuaXRJbmZvIFpcbiAgICAgICAgICovXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnN0cnVjdHMgYSBuZXcgVW5pdEluZm8uXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2VcbiAgICAgICAgICogQGNsYXNzZGVzYyBSZXByZXNlbnRzIGFuIFVuaXRJbmZvLlxuICAgICAgICAgKiBAaW1wbGVtZW50cyBJVW5pdEluZm9cbiAgICAgICAgICogQGNvbnN0cnVjdG9yXG4gICAgICAgICAqIEBwYXJhbSB7T3V0ZXJNZXNzYWdlLklVbml0SW5mbz19IFtwXSBQcm9wZXJ0aWVzIHRvIHNldFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gVW5pdEluZm8ocCkge1xuICAgICAgICAgICAgaWYgKHApXG4gICAgICAgICAgICAgICAgZm9yICh2YXIga3MgPSBPYmplY3Qua2V5cyhwKSwgaSA9IDA7IGkgPCBrcy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBba3NbaV1dICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2tzW2ldXSA9IHBba3NbaV1dO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVuaXRJbmZvIFVuaXRJZC5cbiAgICAgICAgICogQG1lbWJlciB7TG9uZ30gVW5pdElkXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuVW5pdEluZm9cbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBVbml0SW5mby5wcm90b3R5cGUuVW5pdElkID0gJHV0aWwuTG9uZyA/ICR1dGlsLkxvbmcuZnJvbUJpdHMoMCwgMCwgZmFsc2UpIDogMDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVW5pdEluZm8gWC5cbiAgICAgICAgICogQG1lbWJlciB7bnVtYmVyfSBYXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuVW5pdEluZm9cbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBVbml0SW5mby5wcm90b3R5cGUuWCA9IDA7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVuaXRJbmZvIFkuXG4gICAgICAgICAqIEBtZW1iZXIge251bWJlcn0gWVxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLlVuaXRJbmZvXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgVW5pdEluZm8ucHJvdG90eXBlLlkgPSAwO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVbml0SW5mbyBaLlxuICAgICAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFpcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5Vbml0SW5mb1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIFVuaXRJbmZvLnByb3RvdHlwZS5aID0gMDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyBhIG5ldyBVbml0SW5mbyBpbnN0YW5jZSB1c2luZyB0aGUgc3BlY2lmaWVkIHByb3BlcnRpZXMuXG4gICAgICAgICAqIEBmdW5jdGlvbiBjcmVhdGVcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5Vbml0SW5mb1xuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T3V0ZXJNZXNzYWdlLklVbml0SW5mbz19IFtwcm9wZXJ0aWVzXSBQcm9wZXJ0aWVzIHRvIHNldFxuICAgICAgICAgKiBAcmV0dXJucyB7T3V0ZXJNZXNzYWdlLlVuaXRJbmZvfSBVbml0SW5mbyBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgVW5pdEluZm8uY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVW5pdEluZm8ocHJvcGVydGllcyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVuY29kZXMgdGhlIHNwZWNpZmllZCBVbml0SW5mbyBtZXNzYWdlLiBEb2VzIG5vdCBpbXBsaWNpdGx5IHtAbGluayBPdXRlck1lc3NhZ2UuVW5pdEluZm8udmVyaWZ5fHZlcmlmeX0gbWVzc2FnZXMuXG4gICAgICAgICAqIEBmdW5jdGlvbiBlbmNvZGVcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5Vbml0SW5mb1xuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T3V0ZXJNZXNzYWdlLklVbml0SW5mb30gbSBVbml0SW5mbyBtZXNzYWdlIG9yIHBsYWluIG9iamVjdCB0byBlbmNvZGVcbiAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuV3JpdGVyfSBbd10gV3JpdGVyIHRvIGVuY29kZSB0b1xuICAgICAgICAgKiBAcmV0dXJucyB7JHByb3RvYnVmLldyaXRlcn0gV3JpdGVyXG4gICAgICAgICAqL1xuICAgICAgICBVbml0SW5mby5lbmNvZGUgPSBmdW5jdGlvbiBlbmNvZGUobSwgdykge1xuICAgICAgICAgICAgaWYgKCF3KVxuICAgICAgICAgICAgICAgIHcgPSAkV3JpdGVyLmNyZWF0ZSgpO1xuICAgICAgICAgICAgaWYgKG0uVW5pdElkICE9IG51bGwgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobSwgXCJVbml0SWRcIikpXG4gICAgICAgICAgICAgICAgdy51aW50MzIoOCkuaW50NjQobS5Vbml0SWQpO1xuICAgICAgICAgICAgaWYgKG0uWCAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG0sIFwiWFwiKSlcbiAgICAgICAgICAgICAgICB3LnVpbnQzMigyMSkuZmxvYXQobS5YKTtcbiAgICAgICAgICAgIGlmIChtLlkgIT0gbnVsbCAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtLCBcIllcIikpXG4gICAgICAgICAgICAgICAgdy51aW50MzIoMjkpLmZsb2F0KG0uWSk7XG4gICAgICAgICAgICBpZiAobS5aICE9IG51bGwgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobSwgXCJaXCIpKVxuICAgICAgICAgICAgICAgIHcudWludDMyKDM3KS5mbG9hdChtLlopO1xuICAgICAgICAgICAgcmV0dXJuIHc7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlY29kZXMgYW4gVW5pdEluZm8gbWVzc2FnZSBmcm9tIHRoZSBzcGVjaWZpZWQgcmVhZGVyIG9yIGJ1ZmZlci5cbiAgICAgICAgICogQGZ1bmN0aW9uIGRlY29kZVxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLlVuaXRJbmZvXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuUmVhZGVyfFVpbnQ4QXJyYXl9IHIgUmVhZGVyIG9yIGJ1ZmZlciB0byBkZWNvZGUgZnJvbVxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xdIE1lc3NhZ2UgbGVuZ3RoIGlmIGtub3duIGJlZm9yZWhhbmRcbiAgICAgICAgICogQHJldHVybnMge091dGVyTWVzc2FnZS5Vbml0SW5mb30gVW5pdEluZm9cbiAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBwYXlsb2FkIGlzIG5vdCBhIHJlYWRlciBvciB2YWxpZCBidWZmZXJcbiAgICAgICAgICogQHRocm93cyB7JHByb3RvYnVmLnV0aWwuUHJvdG9jb2xFcnJvcn0gSWYgcmVxdWlyZWQgZmllbGRzIGFyZSBtaXNzaW5nXG4gICAgICAgICAqL1xuICAgICAgICBVbml0SW5mby5kZWNvZGUgPSBmdW5jdGlvbiBkZWNvZGUociwgbCkge1xuICAgICAgICAgICAgaWYgKCEociBpbnN0YW5jZW9mICRSZWFkZXIpKVxuICAgICAgICAgICAgICAgIHIgPSAkUmVhZGVyLmNyZWF0ZShyKTtcbiAgICAgICAgICAgIHZhciBjID0gbCA9PT0gdW5kZWZpbmVkID8gci5sZW4gOiByLnBvcyArIGwsIG0gPSBuZXcgJHJvb3QuT3V0ZXJNZXNzYWdlLlVuaXRJbmZvKCk7XG4gICAgICAgICAgICB3aGlsZSAoci5wb3MgPCBjKSB7XG4gICAgICAgICAgICAgICAgdmFyIHQgPSByLnVpbnQzMigpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodCA+Pj4gMykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBtLlVuaXRJZCA9IHIuaW50NjQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBtLlggPSByLmZsb2F0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgbS5ZID0gci5mbG9hdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uWiA9IHIuZmxvYXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgci5za2lwVHlwZSh0ICYgNyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gVW5pdEluZm87XG4gICAgfSkoKTtcblxuICAgIE91dGVyTWVzc2FnZS5NMkNfQ3JlYXRlVW5pdHMgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcm9wZXJ0aWVzIG9mIGEgTTJDX0NyZWF0ZVVuaXRzLlxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlXG4gICAgICAgICAqIEBpbnRlcmZhY2UgSU0yQ19DcmVhdGVVbml0c1xuICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcnxudWxsfSBbUnBjSWRdIE0yQ19DcmVhdGVVbml0cyBScGNJZFxuICAgICAgICAgKiBAcHJvcGVydHkge0xvbmd8bnVsbH0gW0FjdG9ySWRdIE0yQ19DcmVhdGVVbml0cyBBY3RvcklkXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7QXJyYXkuPE91dGVyTWVzc2FnZS5JVW5pdEluZm8+fG51bGx9IFtVbml0c10gTTJDX0NyZWF0ZVVuaXRzIFVuaXRzXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb25zdHJ1Y3RzIGEgbmV3IE0yQ19DcmVhdGVVbml0cy5cbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZVxuICAgICAgICAgKiBAY2xhc3NkZXNjIFJlcHJlc2VudHMgYSBNMkNfQ3JlYXRlVW5pdHMuXG4gICAgICAgICAqIEBpbXBsZW1lbnRzIElNMkNfQ3JlYXRlVW5pdHNcbiAgICAgICAgICogQGNvbnN0cnVjdG9yXG4gICAgICAgICAqIEBwYXJhbSB7T3V0ZXJNZXNzYWdlLklNMkNfQ3JlYXRlVW5pdHM9fSBbcF0gUHJvcGVydGllcyB0byBzZXRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIE0yQ19DcmVhdGVVbml0cyhwKSB7XG4gICAgICAgICAgICB0aGlzLlVuaXRzID0gW107XG4gICAgICAgICAgICBpZiAocClcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrcyA9IE9iamVjdC5rZXlzKHApLCBpID0gMDsgaSA8IGtzLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgICAgICAgICBpZiAocFtrc1tpXV0gIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNba3NbaV1dID0gcFtrc1tpXV07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogTTJDX0NyZWF0ZVVuaXRzIFJwY0lkLlxuICAgICAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFJwY0lkXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuTTJDX0NyZWF0ZVVuaXRzXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgTTJDX0NyZWF0ZVVuaXRzLnByb3RvdHlwZS5ScGNJZCA9IDA7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE0yQ19DcmVhdGVVbml0cyBBY3RvcklkLlxuICAgICAgICAgKiBAbWVtYmVyIHtMb25nfSBBY3RvcklkXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuTTJDX0NyZWF0ZVVuaXRzXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgTTJDX0NyZWF0ZVVuaXRzLnByb3RvdHlwZS5BY3RvcklkID0gJHV0aWwuTG9uZyA/ICR1dGlsLkxvbmcuZnJvbUJpdHMoMCwgMCwgZmFsc2UpIDogMDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTTJDX0NyZWF0ZVVuaXRzIFVuaXRzLlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheS48T3V0ZXJNZXNzYWdlLklVbml0SW5mbz59IFVuaXRzXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuTTJDX0NyZWF0ZVVuaXRzXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgTTJDX0NyZWF0ZVVuaXRzLnByb3RvdHlwZS5Vbml0cyA9ICR1dGlsLmVtcHR5QXJyYXk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZXMgYSBuZXcgTTJDX0NyZWF0ZVVuaXRzIGluc3RhbmNlIHVzaW5nIHRoZSBzcGVjaWZpZWQgcHJvcGVydGllcy5cbiAgICAgICAgICogQGZ1bmN0aW9uIGNyZWF0ZVxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLk0yQ19DcmVhdGVVbml0c1xuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T3V0ZXJNZXNzYWdlLklNMkNfQ3JlYXRlVW5pdHM9fSBbcHJvcGVydGllc10gUHJvcGVydGllcyB0byBzZXRcbiAgICAgICAgICogQHJldHVybnMge091dGVyTWVzc2FnZS5NMkNfQ3JlYXRlVW5pdHN9IE0yQ19DcmVhdGVVbml0cyBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgTTJDX0NyZWF0ZVVuaXRzLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShwcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE0yQ19DcmVhdGVVbml0cyhwcm9wZXJ0aWVzKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRW5jb2RlcyB0aGUgc3BlY2lmaWVkIE0yQ19DcmVhdGVVbml0cyBtZXNzYWdlLiBEb2VzIG5vdCBpbXBsaWNpdGx5IHtAbGluayBPdXRlck1lc3NhZ2UuTTJDX0NyZWF0ZVVuaXRzLnZlcmlmeXx2ZXJpZnl9IG1lc3NhZ2VzLlxuICAgICAgICAgKiBAZnVuY3Rpb24gZW5jb2RlXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuTTJDX0NyZWF0ZVVuaXRzXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPdXRlck1lc3NhZ2UuSU0yQ19DcmVhdGVVbml0c30gbSBNMkNfQ3JlYXRlVW5pdHMgbWVzc2FnZSBvciBwbGFpbiBvYmplY3QgdG8gZW5jb2RlXG4gICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLldyaXRlcn0gW3ddIFdyaXRlciB0byBlbmNvZGUgdG9cbiAgICAgICAgICogQHJldHVybnMgeyRwcm90b2J1Zi5Xcml0ZXJ9IFdyaXRlclxuICAgICAgICAgKi9cbiAgICAgICAgTTJDX0NyZWF0ZVVuaXRzLmVuY29kZSA9IGZ1bmN0aW9uIGVuY29kZShtLCB3KSB7XG4gICAgICAgICAgICBpZiAoIXcpXG4gICAgICAgICAgICAgICAgdyA9ICRXcml0ZXIuY3JlYXRlKCk7XG4gICAgICAgICAgICBpZiAobS5Vbml0cyAhPSBudWxsICYmIG0uVW5pdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtLlVuaXRzLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgICAgICAgICAkcm9vdC5PdXRlck1lc3NhZ2UuVW5pdEluZm8uZW5jb2RlKG0uVW5pdHNbaV0sIHcudWludDMyKDEwKS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG0uUnBjSWQgIT0gbnVsbCAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtLCBcIlJwY0lkXCIpKVxuICAgICAgICAgICAgICAgIHcudWludDMyKDcyMCkuaW50MzIobS5ScGNJZCk7XG4gICAgICAgICAgICBpZiAobS5BY3RvcklkICE9IG51bGwgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobSwgXCJBY3RvcklkXCIpKVxuICAgICAgICAgICAgICAgIHcudWludDMyKDc0NCkuaW50NjQobS5BY3RvcklkKTtcbiAgICAgICAgICAgIHJldHVybiB3O1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWNvZGVzIGEgTTJDX0NyZWF0ZVVuaXRzIG1lc3NhZ2UgZnJvbSB0aGUgc3BlY2lmaWVkIHJlYWRlciBvciBidWZmZXIuXG4gICAgICAgICAqIEBmdW5jdGlvbiBkZWNvZGVcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5NMkNfQ3JlYXRlVW5pdHNcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5SZWFkZXJ8VWludDhBcnJheX0gciBSZWFkZXIgb3IgYnVmZmVyIHRvIGRlY29kZSBmcm9tXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbF0gTWVzc2FnZSBsZW5ndGggaWYga25vd24gYmVmb3JlaGFuZFxuICAgICAgICAgKiBAcmV0dXJucyB7T3V0ZXJNZXNzYWdlLk0yQ19DcmVhdGVVbml0c30gTTJDX0NyZWF0ZVVuaXRzXG4gICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgcGF5bG9hZCBpcyBub3QgYSByZWFkZXIgb3IgdmFsaWQgYnVmZmVyXG4gICAgICAgICAqIEB0aHJvd3MgeyRwcm90b2J1Zi51dGlsLlByb3RvY29sRXJyb3J9IElmIHJlcXVpcmVkIGZpZWxkcyBhcmUgbWlzc2luZ1xuICAgICAgICAgKi9cbiAgICAgICAgTTJDX0NyZWF0ZVVuaXRzLmRlY29kZSA9IGZ1bmN0aW9uIGRlY29kZShyLCBsKSB7XG4gICAgICAgICAgICBpZiAoIShyIGluc3RhbmNlb2YgJFJlYWRlcikpXG4gICAgICAgICAgICAgICAgciA9ICRSZWFkZXIuY3JlYXRlKHIpO1xuICAgICAgICAgICAgdmFyIGMgPSBsID09PSB1bmRlZmluZWQgPyByLmxlbiA6IHIucG9zICsgbCwgbSA9IG5ldyAkcm9vdC5PdXRlck1lc3NhZ2UuTTJDX0NyZWF0ZVVuaXRzKCk7XG4gICAgICAgICAgICB3aGlsZSAoci5wb3MgPCBjKSB7XG4gICAgICAgICAgICAgICAgdmFyIHQgPSByLnVpbnQzMigpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodCA+Pj4gMykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDkwOlxuICAgICAgICAgICAgICAgICAgICAgICAgbS5ScGNJZCA9IHIuaW50MzIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDkzOlxuICAgICAgICAgICAgICAgICAgICAgICAgbS5BY3RvcklkID0gci5pbnQ2NCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKG0uVW5pdHMgJiYgbS5Vbml0cy5sZW5ndGgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0uVW5pdHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uVW5pdHMucHVzaCgkcm9vdC5PdXRlck1lc3NhZ2UuVW5pdEluZm8uZGVjb2RlKHIsIHIudWludDMyKCkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgci5za2lwVHlwZSh0ICYgNyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gTTJDX0NyZWF0ZVVuaXRzO1xuICAgIH0pKCk7XG5cbiAgICBPdXRlck1lc3NhZ2UuRnJhbWVfQ2xpY2tNYXAgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcm9wZXJ0aWVzIG9mIGEgRnJhbWVfQ2xpY2tNYXAuXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2VcbiAgICAgICAgICogQGludGVyZmFjZSBJRnJhbWVfQ2xpY2tNYXBcbiAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ8bnVsbH0gW1JwY0lkXSBGcmFtZV9DbGlja01hcCBScGNJZFxuICAgICAgICAgKiBAcHJvcGVydHkge0xvbmd8bnVsbH0gW0FjdG9ySWRdIEZyYW1lX0NsaWNrTWFwIEFjdG9ySWRcbiAgICAgICAgICogQHByb3BlcnR5IHtMb25nfG51bGx9IFtJZF0gRnJhbWVfQ2xpY2tNYXAgSWRcbiAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ8bnVsbH0gW1hdIEZyYW1lX0NsaWNrTWFwIFhcbiAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ8bnVsbH0gW1ldIEZyYW1lX0NsaWNrTWFwIFlcbiAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ8bnVsbH0gW1pdIEZyYW1lX0NsaWNrTWFwIFpcbiAgICAgICAgICovXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnN0cnVjdHMgYSBuZXcgRnJhbWVfQ2xpY2tNYXAuXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2VcbiAgICAgICAgICogQGNsYXNzZGVzYyBSZXByZXNlbnRzIGEgRnJhbWVfQ2xpY2tNYXAuXG4gICAgICAgICAqIEBpbXBsZW1lbnRzIElGcmFtZV9DbGlja01hcFxuICAgICAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgICAgICogQHBhcmFtIHtPdXRlck1lc3NhZ2UuSUZyYW1lX0NsaWNrTWFwPX0gW3BdIFByb3BlcnRpZXMgdG8gc2V0XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBGcmFtZV9DbGlja01hcChwKSB7XG4gICAgICAgICAgICBpZiAocClcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrcyA9IE9iamVjdC5rZXlzKHApLCBpID0gMDsgaSA8IGtzLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgICAgICAgICBpZiAocFtrc1tpXV0gIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNba3NbaV1dID0gcFtrc1tpXV07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRnJhbWVfQ2xpY2tNYXAgUnBjSWQuXG4gICAgICAgICAqIEBtZW1iZXIge251bWJlcn0gUnBjSWRcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5GcmFtZV9DbGlja01hcFxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIEZyYW1lX0NsaWNrTWFwLnByb3RvdHlwZS5ScGNJZCA9IDA7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZyYW1lX0NsaWNrTWFwIEFjdG9ySWQuXG4gICAgICAgICAqIEBtZW1iZXIge0xvbmd9IEFjdG9ySWRcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5GcmFtZV9DbGlja01hcFxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIEZyYW1lX0NsaWNrTWFwLnByb3RvdHlwZS5BY3RvcklkID0gJHV0aWwuTG9uZyA/ICR1dGlsLkxvbmcuZnJvbUJpdHMoMCwgMCwgZmFsc2UpIDogMDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRnJhbWVfQ2xpY2tNYXAgSWQuXG4gICAgICAgICAqIEBtZW1iZXIge0xvbmd9IElkXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuRnJhbWVfQ2xpY2tNYXBcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBGcmFtZV9DbGlja01hcC5wcm90b3R5cGUuSWQgPSAkdXRpbC5Mb25nID8gJHV0aWwuTG9uZy5mcm9tQml0cygwLCAwLCBmYWxzZSkgOiAwO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGcmFtZV9DbGlja01hcCBYLlxuICAgICAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFhcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5GcmFtZV9DbGlja01hcFxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIEZyYW1lX0NsaWNrTWFwLnByb3RvdHlwZS5YID0gMDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRnJhbWVfQ2xpY2tNYXAgWS5cbiAgICAgICAgICogQG1lbWJlciB7bnVtYmVyfSBZXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuRnJhbWVfQ2xpY2tNYXBcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBGcmFtZV9DbGlja01hcC5wcm90b3R5cGUuWSA9IDA7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZyYW1lX0NsaWNrTWFwIFouXG4gICAgICAgICAqIEBtZW1iZXIge251bWJlcn0gWlxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLkZyYW1lX0NsaWNrTWFwXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgRnJhbWVfQ2xpY2tNYXAucHJvdG90eXBlLlogPSAwO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGEgbmV3IEZyYW1lX0NsaWNrTWFwIGluc3RhbmNlIHVzaW5nIHRoZSBzcGVjaWZpZWQgcHJvcGVydGllcy5cbiAgICAgICAgICogQGZ1bmN0aW9uIGNyZWF0ZVxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLkZyYW1lX0NsaWNrTWFwXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPdXRlck1lc3NhZ2UuSUZyYW1lX0NsaWNrTWFwPX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XG4gICAgICAgICAqIEByZXR1cm5zIHtPdXRlck1lc3NhZ2UuRnJhbWVfQ2xpY2tNYXB9IEZyYW1lX0NsaWNrTWFwIGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBGcmFtZV9DbGlja01hcC5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUocHJvcGVydGllcykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBGcmFtZV9DbGlja01hcChwcm9wZXJ0aWVzKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRW5jb2RlcyB0aGUgc3BlY2lmaWVkIEZyYW1lX0NsaWNrTWFwIG1lc3NhZ2UuIERvZXMgbm90IGltcGxpY2l0bHkge0BsaW5rIE91dGVyTWVzc2FnZS5GcmFtZV9DbGlja01hcC52ZXJpZnl8dmVyaWZ5fSBtZXNzYWdlcy5cbiAgICAgICAgICogQGZ1bmN0aW9uIGVuY29kZVxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLkZyYW1lX0NsaWNrTWFwXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPdXRlck1lc3NhZ2UuSUZyYW1lX0NsaWNrTWFwfSBtIEZyYW1lX0NsaWNrTWFwIG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxuICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3XSBXcml0ZXIgdG8gZW5jb2RlIHRvXG4gICAgICAgICAqIEByZXR1cm5zIHskcHJvdG9idWYuV3JpdGVyfSBXcml0ZXJcbiAgICAgICAgICovXG4gICAgICAgIEZyYW1lX0NsaWNrTWFwLmVuY29kZSA9IGZ1bmN0aW9uIGVuY29kZShtLCB3KSB7XG4gICAgICAgICAgICBpZiAoIXcpXG4gICAgICAgICAgICAgICAgdyA9ICRXcml0ZXIuY3JlYXRlKCk7XG4gICAgICAgICAgICBpZiAobS5YICE9IG51bGwgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobSwgXCJYXCIpKVxuICAgICAgICAgICAgICAgIHcudWludDMyKDEzKS5mbG9hdChtLlgpO1xuICAgICAgICAgICAgaWYgKG0uWSAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG0sIFwiWVwiKSlcbiAgICAgICAgICAgICAgICB3LnVpbnQzMigyMSkuZmxvYXQobS5ZKTtcbiAgICAgICAgICAgIGlmIChtLlogIT0gbnVsbCAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtLCBcIlpcIikpXG4gICAgICAgICAgICAgICAgdy51aW50MzIoMjkpLmZsb2F0KG0uWik7XG4gICAgICAgICAgICBpZiAobS5ScGNJZCAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG0sIFwiUnBjSWRcIikpXG4gICAgICAgICAgICAgICAgdy51aW50MzIoNzIwKS5pbnQzMihtLlJwY0lkKTtcbiAgICAgICAgICAgIGlmIChtLkFjdG9ySWQgIT0gbnVsbCAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtLCBcIkFjdG9ySWRcIikpXG4gICAgICAgICAgICAgICAgdy51aW50MzIoNzQ0KS5pbnQ2NChtLkFjdG9ySWQpO1xuICAgICAgICAgICAgaWYgKG0uSWQgIT0gbnVsbCAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtLCBcIklkXCIpKVxuICAgICAgICAgICAgICAgIHcudWludDMyKDc1MikuaW50NjQobS5JZCk7XG4gICAgICAgICAgICByZXR1cm4gdztcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVjb2RlcyBhIEZyYW1lX0NsaWNrTWFwIG1lc3NhZ2UgZnJvbSB0aGUgc3BlY2lmaWVkIHJlYWRlciBvciBidWZmZXIuXG4gICAgICAgICAqIEBmdW5jdGlvbiBkZWNvZGVcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5GcmFtZV9DbGlja01hcFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLlJlYWRlcnxVaW50OEFycmF5fSByIFJlYWRlciBvciBidWZmZXIgdG8gZGVjb2RlIGZyb21cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtsXSBNZXNzYWdlIGxlbmd0aCBpZiBrbm93biBiZWZvcmVoYW5kXG4gICAgICAgICAqIEByZXR1cm5zIHtPdXRlck1lc3NhZ2UuRnJhbWVfQ2xpY2tNYXB9IEZyYW1lX0NsaWNrTWFwXG4gICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgcGF5bG9hZCBpcyBub3QgYSByZWFkZXIgb3IgdmFsaWQgYnVmZmVyXG4gICAgICAgICAqIEB0aHJvd3MgeyRwcm90b2J1Zi51dGlsLlByb3RvY29sRXJyb3J9IElmIHJlcXVpcmVkIGZpZWxkcyBhcmUgbWlzc2luZ1xuICAgICAgICAgKi9cbiAgICAgICAgRnJhbWVfQ2xpY2tNYXAuZGVjb2RlID0gZnVuY3Rpb24gZGVjb2RlKHIsIGwpIHtcbiAgICAgICAgICAgIGlmICghKHIgaW5zdGFuY2VvZiAkUmVhZGVyKSlcbiAgICAgICAgICAgICAgICByID0gJFJlYWRlci5jcmVhdGUocik7XG4gICAgICAgICAgICB2YXIgYyA9IGwgPT09IHVuZGVmaW5lZCA/IHIubGVuIDogci5wb3MgKyBsLCBtID0gbmV3ICRyb290Lk91dGVyTWVzc2FnZS5GcmFtZV9DbGlja01hcCgpO1xuICAgICAgICAgICAgd2hpbGUgKHIucG9zIDwgYykge1xuICAgICAgICAgICAgICAgIHZhciB0ID0gci51aW50MzIoKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHQgPj4+IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5MDpcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uUnBjSWQgPSByLmludDMyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5MzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uQWN0b3JJZCA9IHIuaW50NjQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDk0OlxuICAgICAgICAgICAgICAgICAgICAgICAgbS5JZCA9IHIuaW50NjQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBtLlggPSByLmZsb2F0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgbS5ZID0gci5mbG9hdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uWiA9IHIuZmxvYXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgci5za2lwVHlwZSh0ICYgNyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gRnJhbWVfQ2xpY2tNYXA7XG4gICAgfSkoKTtcblxuICAgIE91dGVyTWVzc2FnZS5NMkNfUGF0aGZpbmRpbmdSZXN1bHQgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcm9wZXJ0aWVzIG9mIGEgTTJDX1BhdGhmaW5kaW5nUmVzdWx0LlxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlXG4gICAgICAgICAqIEBpbnRlcmZhY2UgSU0yQ19QYXRoZmluZGluZ1Jlc3VsdFxuICAgICAgICAgKiBAcHJvcGVydHkge0xvbmd8bnVsbH0gW0FjdG9ySWRdIE0yQ19QYXRoZmluZGluZ1Jlc3VsdCBBY3RvcklkXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7TG9uZ3xudWxsfSBbSWRdIE0yQ19QYXRoZmluZGluZ1Jlc3VsdCBJZFxuICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcnxudWxsfSBbWF0gTTJDX1BhdGhmaW5kaW5nUmVzdWx0IFhcbiAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ8bnVsbH0gW1ldIE0yQ19QYXRoZmluZGluZ1Jlc3VsdCBZXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfG51bGx9IFtaXSBNMkNfUGF0aGZpbmRpbmdSZXN1bHQgWlxuICAgICAgICAgKiBAcHJvcGVydHkge0FycmF5LjxudW1iZXI+fG51bGx9IFtYc10gTTJDX1BhdGhmaW5kaW5nUmVzdWx0IFhzXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7QXJyYXkuPG51bWJlcj58bnVsbH0gW1lzXSBNMkNfUGF0aGZpbmRpbmdSZXN1bHQgWXNcbiAgICAgICAgICogQHByb3BlcnR5IHtBcnJheS48bnVtYmVyPnxudWxsfSBbWnNdIE0yQ19QYXRoZmluZGluZ1Jlc3VsdCBac1xuICAgICAgICAgKi9cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29uc3RydWN0cyBhIG5ldyBNMkNfUGF0aGZpbmRpbmdSZXN1bHQuXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2VcbiAgICAgICAgICogQGNsYXNzZGVzYyBSZXByZXNlbnRzIGEgTTJDX1BhdGhmaW5kaW5nUmVzdWx0LlxuICAgICAgICAgKiBAaW1wbGVtZW50cyBJTTJDX1BhdGhmaW5kaW5nUmVzdWx0XG4gICAgICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAgICAgKiBAcGFyYW0ge091dGVyTWVzc2FnZS5JTTJDX1BhdGhmaW5kaW5nUmVzdWx0PX0gW3BdIFByb3BlcnRpZXMgdG8gc2V0XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBNMkNfUGF0aGZpbmRpbmdSZXN1bHQocCkge1xuICAgICAgICAgICAgdGhpcy5YcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5ZcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5acyA9IFtdO1xuICAgICAgICAgICAgaWYgKHApXG4gICAgICAgICAgICAgICAgZm9yICh2YXIga3MgPSBPYmplY3Qua2V5cyhwKSwgaSA9IDA7IGkgPCBrcy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBba3NbaV1dICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2tzW2ldXSA9IHBba3NbaV1dO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE0yQ19QYXRoZmluZGluZ1Jlc3VsdCBBY3RvcklkLlxuICAgICAgICAgKiBAbWVtYmVyIHtMb25nfSBBY3RvcklkXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuTTJDX1BhdGhmaW5kaW5nUmVzdWx0XG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgTTJDX1BhdGhmaW5kaW5nUmVzdWx0LnByb3RvdHlwZS5BY3RvcklkID0gJHV0aWwuTG9uZyA/ICR1dGlsLkxvbmcuZnJvbUJpdHMoMCwgMCwgZmFsc2UpIDogMDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTTJDX1BhdGhmaW5kaW5nUmVzdWx0IElkLlxuICAgICAgICAgKiBAbWVtYmVyIHtMb25nfSBJZFxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLk0yQ19QYXRoZmluZGluZ1Jlc3VsdFxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIE0yQ19QYXRoZmluZGluZ1Jlc3VsdC5wcm90b3R5cGUuSWQgPSAkdXRpbC5Mb25nID8gJHV0aWwuTG9uZy5mcm9tQml0cygwLCAwLCBmYWxzZSkgOiAwO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNMkNfUGF0aGZpbmRpbmdSZXN1bHQgWC5cbiAgICAgICAgICogQG1lbWJlciB7bnVtYmVyfSBYXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuTTJDX1BhdGhmaW5kaW5nUmVzdWx0XG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgTTJDX1BhdGhmaW5kaW5nUmVzdWx0LnByb3RvdHlwZS5YID0gMDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTTJDX1BhdGhmaW5kaW5nUmVzdWx0IFkuXG4gICAgICAgICAqIEBtZW1iZXIge251bWJlcn0gWVxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLk0yQ19QYXRoZmluZGluZ1Jlc3VsdFxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIE0yQ19QYXRoZmluZGluZ1Jlc3VsdC5wcm90b3R5cGUuWSA9IDA7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE0yQ19QYXRoZmluZGluZ1Jlc3VsdCBaLlxuICAgICAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFpcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5NMkNfUGF0aGZpbmRpbmdSZXN1bHRcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBNMkNfUGF0aGZpbmRpbmdSZXN1bHQucHJvdG90eXBlLlogPSAwO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNMkNfUGF0aGZpbmRpbmdSZXN1bHQgWHMuXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5LjxudW1iZXI+fSBYc1xuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLk0yQ19QYXRoZmluZGluZ1Jlc3VsdFxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIE0yQ19QYXRoZmluZGluZ1Jlc3VsdC5wcm90b3R5cGUuWHMgPSAkdXRpbC5lbXB0eUFycmF5O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNMkNfUGF0aGZpbmRpbmdSZXN1bHQgWXMuXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5LjxudW1iZXI+fSBZc1xuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLk0yQ19QYXRoZmluZGluZ1Jlc3VsdFxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIE0yQ19QYXRoZmluZGluZ1Jlc3VsdC5wcm90b3R5cGUuWXMgPSAkdXRpbC5lbXB0eUFycmF5O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNMkNfUGF0aGZpbmRpbmdSZXN1bHQgWnMuXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5LjxudW1iZXI+fSBac1xuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLk0yQ19QYXRoZmluZGluZ1Jlc3VsdFxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIE0yQ19QYXRoZmluZGluZ1Jlc3VsdC5wcm90b3R5cGUuWnMgPSAkdXRpbC5lbXB0eUFycmF5O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGEgbmV3IE0yQ19QYXRoZmluZGluZ1Jlc3VsdCBpbnN0YW5jZSB1c2luZyB0aGUgc3BlY2lmaWVkIHByb3BlcnRpZXMuXG4gICAgICAgICAqIEBmdW5jdGlvbiBjcmVhdGVcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5NMkNfUGF0aGZpbmRpbmdSZXN1bHRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge091dGVyTWVzc2FnZS5JTTJDX1BhdGhmaW5kaW5nUmVzdWx0PX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XG4gICAgICAgICAqIEByZXR1cm5zIHtPdXRlck1lc3NhZ2UuTTJDX1BhdGhmaW5kaW5nUmVzdWx0fSBNMkNfUGF0aGZpbmRpbmdSZXN1bHQgaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIE0yQ19QYXRoZmluZGluZ1Jlc3VsdC5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUocHJvcGVydGllcykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNMkNfUGF0aGZpbmRpbmdSZXN1bHQocHJvcGVydGllcyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVuY29kZXMgdGhlIHNwZWNpZmllZCBNMkNfUGF0aGZpbmRpbmdSZXN1bHQgbWVzc2FnZS4gRG9lcyBub3QgaW1wbGljaXRseSB7QGxpbmsgT3V0ZXJNZXNzYWdlLk0yQ19QYXRoZmluZGluZ1Jlc3VsdC52ZXJpZnl8dmVyaWZ5fSBtZXNzYWdlcy5cbiAgICAgICAgICogQGZ1bmN0aW9uIGVuY29kZVxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLk0yQ19QYXRoZmluZGluZ1Jlc3VsdFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T3V0ZXJNZXNzYWdlLklNMkNfUGF0aGZpbmRpbmdSZXN1bHR9IG0gTTJDX1BhdGhmaW5kaW5nUmVzdWx0IG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxuICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3XSBXcml0ZXIgdG8gZW5jb2RlIHRvXG4gICAgICAgICAqIEByZXR1cm5zIHskcHJvdG9idWYuV3JpdGVyfSBXcml0ZXJcbiAgICAgICAgICovXG4gICAgICAgIE0yQ19QYXRoZmluZGluZ1Jlc3VsdC5lbmNvZGUgPSBmdW5jdGlvbiBlbmNvZGUobSwgdykge1xuICAgICAgICAgICAgaWYgKCF3KVxuICAgICAgICAgICAgICAgIHcgPSAkV3JpdGVyLmNyZWF0ZSgpO1xuICAgICAgICAgICAgaWYgKG0uSWQgIT0gbnVsbCAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtLCBcIklkXCIpKVxuICAgICAgICAgICAgICAgIHcudWludDMyKDgpLmludDY0KG0uSWQpO1xuICAgICAgICAgICAgaWYgKG0uWCAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG0sIFwiWFwiKSlcbiAgICAgICAgICAgICAgICB3LnVpbnQzMigyMSkuZmxvYXQobS5YKTtcbiAgICAgICAgICAgIGlmIChtLlkgIT0gbnVsbCAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtLCBcIllcIikpXG4gICAgICAgICAgICAgICAgdy51aW50MzIoMjkpLmZsb2F0KG0uWSk7XG4gICAgICAgICAgICBpZiAobS5aICE9IG51bGwgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobSwgXCJaXCIpKVxuICAgICAgICAgICAgICAgIHcudWludDMyKDM3KS5mbG9hdChtLlopO1xuICAgICAgICAgICAgaWYgKG0uWHMgIT0gbnVsbCAmJiBtLlhzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHcudWludDMyKDQyKS5mb3JrKCk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtLlhzLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgICAgICAgICB3LmZsb2F0KG0uWHNbaV0pO1xuICAgICAgICAgICAgICAgIHcubGRlbGltKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobS5ZcyAhPSBudWxsICYmIG0uWXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdy51aW50MzIoNTApLmZvcmsoKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG0uWXMubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICAgICAgICAgIHcuZmxvYXQobS5Zc1tpXSk7XG4gICAgICAgICAgICAgICAgdy5sZGVsaW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtLlpzICE9IG51bGwgJiYgbS5acy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB3LnVpbnQzMig1OCkuZm9yaygpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbS5acy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICAgICAgdy5mbG9hdChtLlpzW2ldKTtcbiAgICAgICAgICAgICAgICB3LmxkZWxpbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG0uQWN0b3JJZCAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG0sIFwiQWN0b3JJZFwiKSlcbiAgICAgICAgICAgICAgICB3LnVpbnQzMig3NDQpLmludDY0KG0uQWN0b3JJZCk7XG4gICAgICAgICAgICByZXR1cm4gdztcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVjb2RlcyBhIE0yQ19QYXRoZmluZGluZ1Jlc3VsdCBtZXNzYWdlIGZyb20gdGhlIHNwZWNpZmllZCByZWFkZXIgb3IgYnVmZmVyLlxuICAgICAgICAgKiBAZnVuY3Rpb24gZGVjb2RlXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuTTJDX1BhdGhmaW5kaW5nUmVzdWx0XG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuUmVhZGVyfFVpbnQ4QXJyYXl9IHIgUmVhZGVyIG9yIGJ1ZmZlciB0byBkZWNvZGUgZnJvbVxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xdIE1lc3NhZ2UgbGVuZ3RoIGlmIGtub3duIGJlZm9yZWhhbmRcbiAgICAgICAgICogQHJldHVybnMge091dGVyTWVzc2FnZS5NMkNfUGF0aGZpbmRpbmdSZXN1bHR9IE0yQ19QYXRoZmluZGluZ1Jlc3VsdFxuICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHBheWxvYWQgaXMgbm90IGEgcmVhZGVyIG9yIHZhbGlkIGJ1ZmZlclxuICAgICAgICAgKiBAdGhyb3dzIHskcHJvdG9idWYudXRpbC5Qcm90b2NvbEVycm9yfSBJZiByZXF1aXJlZCBmaWVsZHMgYXJlIG1pc3NpbmdcbiAgICAgICAgICovXG4gICAgICAgIE0yQ19QYXRoZmluZGluZ1Jlc3VsdC5kZWNvZGUgPSBmdW5jdGlvbiBkZWNvZGUociwgbCkge1xuICAgICAgICAgICAgaWYgKCEociBpbnN0YW5jZW9mICRSZWFkZXIpKVxuICAgICAgICAgICAgICAgIHIgPSAkUmVhZGVyLmNyZWF0ZShyKTtcbiAgICAgICAgICAgIHZhciBjID0gbCA9PT0gdW5kZWZpbmVkID8gci5sZW4gOiByLnBvcyArIGwsIG0gPSBuZXcgJHJvb3QuT3V0ZXJNZXNzYWdlLk0yQ19QYXRoZmluZGluZ1Jlc3VsdCgpO1xuICAgICAgICAgICAgd2hpbGUgKHIucG9zIDwgYykge1xuICAgICAgICAgICAgICAgIHZhciB0ID0gci51aW50MzIoKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHQgPj4+IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5MzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uQWN0b3JJZCA9IHIuaW50NjQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBtLklkID0gci5pbnQ2NCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uWCA9IHIuZmxvYXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBtLlkgPSByLmZsb2F0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgbS5aID0gci5mbG9hdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKG0uWHMgJiYgbS5Ycy5sZW5ndGgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0uWHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgodCAmIDcpID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMyID0gci51aW50MzIoKSArIHIucG9zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChyLnBvcyA8IGMyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLlhzLnB1c2goci5mbG9hdCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0uWHMucHVzaChyLmZsb2F0KCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKG0uWXMgJiYgbS5Zcy5sZW5ndGgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0uWXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgodCAmIDcpID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMyID0gci51aW50MzIoKSArIHIucG9zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChyLnBvcyA8IGMyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLllzLnB1c2goci5mbG9hdCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0uWXMucHVzaChyLmZsb2F0KCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKG0uWnMgJiYgbS5acy5sZW5ndGgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0uWnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgodCAmIDcpID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMyID0gci51aW50MzIoKSArIHIucG9zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChyLnBvcyA8IGMyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLlpzLnB1c2goci5mbG9hdCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0uWnMucHVzaChyLmZsb2F0KCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICByLnNraXBUeXBlKHQgJiA3KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBNMkNfUGF0aGZpbmRpbmdSZXN1bHQ7XG4gICAgfSkoKTtcblxuICAgIE91dGVyTWVzc2FnZS5DMlJfUGluZyA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByb3BlcnRpZXMgb2YgYSBDMlJfUGluZy5cbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZVxuICAgICAgICAgKiBAaW50ZXJmYWNlIElDMlJfUGluZ1xuICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcnxudWxsfSBbUnBjSWRdIEMyUl9QaW5nIFJwY0lkXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb25zdHJ1Y3RzIGEgbmV3IEMyUl9QaW5nLlxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlXG4gICAgICAgICAqIEBjbGFzc2Rlc2MgUmVwcmVzZW50cyBhIEMyUl9QaW5nLlxuICAgICAgICAgKiBAaW1wbGVtZW50cyBJQzJSX1BpbmdcbiAgICAgICAgICogQGNvbnN0cnVjdG9yXG4gICAgICAgICAqIEBwYXJhbSB7T3V0ZXJNZXNzYWdlLklDMlJfUGluZz19IFtwXSBQcm9wZXJ0aWVzIHRvIHNldFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gQzJSX1BpbmcocCkge1xuICAgICAgICAgICAgaWYgKHApXG4gICAgICAgICAgICAgICAgZm9yICh2YXIga3MgPSBPYmplY3Qua2V5cyhwKSwgaSA9IDA7IGkgPCBrcy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBba3NbaV1dICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2tzW2ldXSA9IHBba3NbaV1dO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEMyUl9QaW5nIFJwY0lkLlxuICAgICAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFJwY0lkXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuQzJSX1BpbmdcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBDMlJfUGluZy5wcm90b3R5cGUuUnBjSWQgPSAwO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGEgbmV3IEMyUl9QaW5nIGluc3RhbmNlIHVzaW5nIHRoZSBzcGVjaWZpZWQgcHJvcGVydGllcy5cbiAgICAgICAgICogQGZ1bmN0aW9uIGNyZWF0ZVxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLkMyUl9QaW5nXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPdXRlck1lc3NhZ2UuSUMyUl9QaW5nPX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XG4gICAgICAgICAqIEByZXR1cm5zIHtPdXRlck1lc3NhZ2UuQzJSX1Bpbmd9IEMyUl9QaW5nIGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBDMlJfUGluZy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUocHJvcGVydGllcykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDMlJfUGluZyhwcm9wZXJ0aWVzKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRW5jb2RlcyB0aGUgc3BlY2lmaWVkIEMyUl9QaW5nIG1lc3NhZ2UuIERvZXMgbm90IGltcGxpY2l0bHkge0BsaW5rIE91dGVyTWVzc2FnZS5DMlJfUGluZy52ZXJpZnl8dmVyaWZ5fSBtZXNzYWdlcy5cbiAgICAgICAgICogQGZ1bmN0aW9uIGVuY29kZVxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLkMyUl9QaW5nXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPdXRlck1lc3NhZ2UuSUMyUl9QaW5nfSBtIEMyUl9QaW5nIG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxuICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3XSBXcml0ZXIgdG8gZW5jb2RlIHRvXG4gICAgICAgICAqIEByZXR1cm5zIHskcHJvdG9idWYuV3JpdGVyfSBXcml0ZXJcbiAgICAgICAgICovXG4gICAgICAgIEMyUl9QaW5nLmVuY29kZSA9IGZ1bmN0aW9uIGVuY29kZShtLCB3KSB7XG4gICAgICAgICAgICBpZiAoIXcpXG4gICAgICAgICAgICAgICAgdyA9ICRXcml0ZXIuY3JlYXRlKCk7XG4gICAgICAgICAgICBpZiAobS5ScGNJZCAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG0sIFwiUnBjSWRcIikpXG4gICAgICAgICAgICAgICAgdy51aW50MzIoNzIwKS5pbnQzMihtLlJwY0lkKTtcbiAgICAgICAgICAgIHJldHVybiB3O1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWNvZGVzIGEgQzJSX1BpbmcgbWVzc2FnZSBmcm9tIHRoZSBzcGVjaWZpZWQgcmVhZGVyIG9yIGJ1ZmZlci5cbiAgICAgICAgICogQGZ1bmN0aW9uIGRlY29kZVxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLkMyUl9QaW5nXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuUmVhZGVyfFVpbnQ4QXJyYXl9IHIgUmVhZGVyIG9yIGJ1ZmZlciB0byBkZWNvZGUgZnJvbVxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xdIE1lc3NhZ2UgbGVuZ3RoIGlmIGtub3duIGJlZm9yZWhhbmRcbiAgICAgICAgICogQHJldHVybnMge091dGVyTWVzc2FnZS5DMlJfUGluZ30gQzJSX1BpbmdcbiAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBwYXlsb2FkIGlzIG5vdCBhIHJlYWRlciBvciB2YWxpZCBidWZmZXJcbiAgICAgICAgICogQHRocm93cyB7JHByb3RvYnVmLnV0aWwuUHJvdG9jb2xFcnJvcn0gSWYgcmVxdWlyZWQgZmllbGRzIGFyZSBtaXNzaW5nXG4gICAgICAgICAqL1xuICAgICAgICBDMlJfUGluZy5kZWNvZGUgPSBmdW5jdGlvbiBkZWNvZGUociwgbCkge1xuICAgICAgICAgICAgaWYgKCEociBpbnN0YW5jZW9mICRSZWFkZXIpKVxuICAgICAgICAgICAgICAgIHIgPSAkUmVhZGVyLmNyZWF0ZShyKTtcbiAgICAgICAgICAgIHZhciBjID0gbCA9PT0gdW5kZWZpbmVkID8gci5sZW4gOiByLnBvcyArIGwsIG0gPSBuZXcgJHJvb3QuT3V0ZXJNZXNzYWdlLkMyUl9QaW5nKCk7XG4gICAgICAgICAgICB3aGlsZSAoci5wb3MgPCBjKSB7XG4gICAgICAgICAgICAgICAgdmFyIHQgPSByLnVpbnQzMigpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodCA+Pj4gMykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDkwOlxuICAgICAgICAgICAgICAgICAgICAgICAgbS5ScGNJZCA9IHIuaW50MzIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgci5za2lwVHlwZSh0ICYgNyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gQzJSX1Bpbmc7XG4gICAgfSkoKTtcblxuICAgIE91dGVyTWVzc2FnZS5SMkNfUGluZyA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByb3BlcnRpZXMgb2YgYSBSMkNfUGluZy5cbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZVxuICAgICAgICAgKiBAaW50ZXJmYWNlIElSMkNfUGluZ1xuICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcnxudWxsfSBbUnBjSWRdIFIyQ19QaW5nIFJwY0lkXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfG51bGx9IFtFcnJvcl0gUjJDX1BpbmcgRXJyb3JcbiAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd8bnVsbH0gW01lc3NhZ2VdIFIyQ19QaW5nIE1lc3NhZ2VcbiAgICAgICAgICovXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnN0cnVjdHMgYSBuZXcgUjJDX1BpbmcuXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2VcbiAgICAgICAgICogQGNsYXNzZGVzYyBSZXByZXNlbnRzIGEgUjJDX1BpbmcuXG4gICAgICAgICAqIEBpbXBsZW1lbnRzIElSMkNfUGluZ1xuICAgICAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgICAgICogQHBhcmFtIHtPdXRlck1lc3NhZ2UuSVIyQ19QaW5nPX0gW3BdIFByb3BlcnRpZXMgdG8gc2V0XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBSMkNfUGluZyhwKSB7XG4gICAgICAgICAgICBpZiAocClcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrcyA9IE9iamVjdC5rZXlzKHApLCBpID0gMDsgaSA8IGtzLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgICAgICAgICBpZiAocFtrc1tpXV0gIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNba3NbaV1dID0gcFtrc1tpXV07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUjJDX1BpbmcgUnBjSWQuXG4gICAgICAgICAqIEBtZW1iZXIge251bWJlcn0gUnBjSWRcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5SMkNfUGluZ1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIFIyQ19QaW5nLnByb3RvdHlwZS5ScGNJZCA9IDA7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFIyQ19QaW5nIEVycm9yLlxuICAgICAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IEVycm9yXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuUjJDX1BpbmdcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBSMkNfUGluZy5wcm90b3R5cGUuRXJyb3IgPSAwO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSMkNfUGluZyBNZXNzYWdlLlxuICAgICAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IE1lc3NhZ2VcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5SMkNfUGluZ1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIFIyQ19QaW5nLnByb3RvdHlwZS5NZXNzYWdlID0gXCJcIjtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyBhIG5ldyBSMkNfUGluZyBpbnN0YW5jZSB1c2luZyB0aGUgc3BlY2lmaWVkIHByb3BlcnRpZXMuXG4gICAgICAgICAqIEBmdW5jdGlvbiBjcmVhdGVcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5SMkNfUGluZ1xuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T3V0ZXJNZXNzYWdlLklSMkNfUGluZz19IFtwcm9wZXJ0aWVzXSBQcm9wZXJ0aWVzIHRvIHNldFxuICAgICAgICAgKiBAcmV0dXJucyB7T3V0ZXJNZXNzYWdlLlIyQ19QaW5nfSBSMkNfUGluZyBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgUjJDX1BpbmcuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUjJDX1BpbmcocHJvcGVydGllcyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVuY29kZXMgdGhlIHNwZWNpZmllZCBSMkNfUGluZyBtZXNzYWdlLiBEb2VzIG5vdCBpbXBsaWNpdGx5IHtAbGluayBPdXRlck1lc3NhZ2UuUjJDX1BpbmcudmVyaWZ5fHZlcmlmeX0gbWVzc2FnZXMuXG4gICAgICAgICAqIEBmdW5jdGlvbiBlbmNvZGVcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5SMkNfUGluZ1xuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T3V0ZXJNZXNzYWdlLklSMkNfUGluZ30gbSBSMkNfUGluZyBtZXNzYWdlIG9yIHBsYWluIG9iamVjdCB0byBlbmNvZGVcbiAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuV3JpdGVyfSBbd10gV3JpdGVyIHRvIGVuY29kZSB0b1xuICAgICAgICAgKiBAcmV0dXJucyB7JHByb3RvYnVmLldyaXRlcn0gV3JpdGVyXG4gICAgICAgICAqL1xuICAgICAgICBSMkNfUGluZy5lbmNvZGUgPSBmdW5jdGlvbiBlbmNvZGUobSwgdykge1xuICAgICAgICAgICAgaWYgKCF3KVxuICAgICAgICAgICAgICAgIHcgPSAkV3JpdGVyLmNyZWF0ZSgpO1xuICAgICAgICAgICAgaWYgKG0uUnBjSWQgIT0gbnVsbCAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtLCBcIlJwY0lkXCIpKVxuICAgICAgICAgICAgICAgIHcudWludDMyKDcyMCkuaW50MzIobS5ScGNJZCk7XG4gICAgICAgICAgICBpZiAobS5FcnJvciAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG0sIFwiRXJyb3JcIikpXG4gICAgICAgICAgICAgICAgdy51aW50MzIoNzI4KS5pbnQzMihtLkVycm9yKTtcbiAgICAgICAgICAgIGlmIChtLk1lc3NhZ2UgIT0gbnVsbCAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtLCBcIk1lc3NhZ2VcIikpXG4gICAgICAgICAgICAgICAgdy51aW50MzIoNzM4KS5zdHJpbmcobS5NZXNzYWdlKTtcbiAgICAgICAgICAgIHJldHVybiB3O1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWNvZGVzIGEgUjJDX1BpbmcgbWVzc2FnZSBmcm9tIHRoZSBzcGVjaWZpZWQgcmVhZGVyIG9yIGJ1ZmZlci5cbiAgICAgICAgICogQGZ1bmN0aW9uIGRlY29kZVxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLlIyQ19QaW5nXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuUmVhZGVyfFVpbnQ4QXJyYXl9IHIgUmVhZGVyIG9yIGJ1ZmZlciB0byBkZWNvZGUgZnJvbVxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xdIE1lc3NhZ2UgbGVuZ3RoIGlmIGtub3duIGJlZm9yZWhhbmRcbiAgICAgICAgICogQHJldHVybnMge091dGVyTWVzc2FnZS5SMkNfUGluZ30gUjJDX1BpbmdcbiAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBwYXlsb2FkIGlzIG5vdCBhIHJlYWRlciBvciB2YWxpZCBidWZmZXJcbiAgICAgICAgICogQHRocm93cyB7JHByb3RvYnVmLnV0aWwuUHJvdG9jb2xFcnJvcn0gSWYgcmVxdWlyZWQgZmllbGRzIGFyZSBtaXNzaW5nXG4gICAgICAgICAqL1xuICAgICAgICBSMkNfUGluZy5kZWNvZGUgPSBmdW5jdGlvbiBkZWNvZGUociwgbCkge1xuICAgICAgICAgICAgaWYgKCEociBpbnN0YW5jZW9mICRSZWFkZXIpKVxuICAgICAgICAgICAgICAgIHIgPSAkUmVhZGVyLmNyZWF0ZShyKTtcbiAgICAgICAgICAgIHZhciBjID0gbCA9PT0gdW5kZWZpbmVkID8gci5sZW4gOiByLnBvcyArIGwsIG0gPSBuZXcgJHJvb3QuT3V0ZXJNZXNzYWdlLlIyQ19QaW5nKCk7XG4gICAgICAgICAgICB3aGlsZSAoci5wb3MgPCBjKSB7XG4gICAgICAgICAgICAgICAgdmFyIHQgPSByLnVpbnQzMigpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodCA+Pj4gMykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDkwOlxuICAgICAgICAgICAgICAgICAgICAgICAgbS5ScGNJZCA9IHIuaW50MzIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDkxOlxuICAgICAgICAgICAgICAgICAgICAgICAgbS5FcnJvciA9IHIuaW50MzIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDkyOlxuICAgICAgICAgICAgICAgICAgICAgICAgbS5NZXNzYWdlID0gci5zdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgci5za2lwVHlwZSh0ICYgNyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gUjJDX1Bpbmc7XG4gICAgfSkoKTtcblxuICAgIE91dGVyTWVzc2FnZS5HMkNfVGVzdCA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByb3BlcnRpZXMgb2YgYSBHMkNfVGVzdC5cbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZVxuICAgICAgICAgKiBAaW50ZXJmYWNlIElHMkNfVGVzdFxuICAgICAgICAgKi9cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29uc3RydWN0cyBhIG5ldyBHMkNfVGVzdC5cbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZVxuICAgICAgICAgKiBAY2xhc3NkZXNjIFJlcHJlc2VudHMgYSBHMkNfVGVzdC5cbiAgICAgICAgICogQGltcGxlbWVudHMgSUcyQ19UZXN0XG4gICAgICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAgICAgKiBAcGFyYW0ge091dGVyTWVzc2FnZS5JRzJDX1Rlc3Q9fSBbcF0gUHJvcGVydGllcyB0byBzZXRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIEcyQ19UZXN0KHApIHtcbiAgICAgICAgICAgIGlmIChwKVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGtzID0gT2JqZWN0LmtleXMocCksIGkgPSAwOyBpIDwga3MubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICAgICAgICAgIGlmIChwW2tzW2ldXSAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trc1tpXV0gPSBwW2tzW2ldXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGEgbmV3IEcyQ19UZXN0IGluc3RhbmNlIHVzaW5nIHRoZSBzcGVjaWZpZWQgcHJvcGVydGllcy5cbiAgICAgICAgICogQGZ1bmN0aW9uIGNyZWF0ZVxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLkcyQ19UZXN0XG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPdXRlck1lc3NhZ2UuSUcyQ19UZXN0PX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XG4gICAgICAgICAqIEByZXR1cm5zIHtPdXRlck1lc3NhZ2UuRzJDX1Rlc3R9IEcyQ19UZXN0IGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBHMkNfVGVzdC5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUocHJvcGVydGllcykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBHMkNfVGVzdChwcm9wZXJ0aWVzKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRW5jb2RlcyB0aGUgc3BlY2lmaWVkIEcyQ19UZXN0IG1lc3NhZ2UuIERvZXMgbm90IGltcGxpY2l0bHkge0BsaW5rIE91dGVyTWVzc2FnZS5HMkNfVGVzdC52ZXJpZnl8dmVyaWZ5fSBtZXNzYWdlcy5cbiAgICAgICAgICogQGZ1bmN0aW9uIGVuY29kZVxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLkcyQ19UZXN0XG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPdXRlck1lc3NhZ2UuSUcyQ19UZXN0fSBtIEcyQ19UZXN0IG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxuICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3XSBXcml0ZXIgdG8gZW5jb2RlIHRvXG4gICAgICAgICAqIEByZXR1cm5zIHskcHJvdG9idWYuV3JpdGVyfSBXcml0ZXJcbiAgICAgICAgICovXG4gICAgICAgIEcyQ19UZXN0LmVuY29kZSA9IGZ1bmN0aW9uIGVuY29kZShtLCB3KSB7XG4gICAgICAgICAgICBpZiAoIXcpXG4gICAgICAgICAgICAgICAgdyA9ICRXcml0ZXIuY3JlYXRlKCk7XG4gICAgICAgICAgICByZXR1cm4gdztcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVjb2RlcyBhIEcyQ19UZXN0IG1lc3NhZ2UgZnJvbSB0aGUgc3BlY2lmaWVkIHJlYWRlciBvciBidWZmZXIuXG4gICAgICAgICAqIEBmdW5jdGlvbiBkZWNvZGVcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5HMkNfVGVzdFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLlJlYWRlcnxVaW50OEFycmF5fSByIFJlYWRlciBvciBidWZmZXIgdG8gZGVjb2RlIGZyb21cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtsXSBNZXNzYWdlIGxlbmd0aCBpZiBrbm93biBiZWZvcmVoYW5kXG4gICAgICAgICAqIEByZXR1cm5zIHtPdXRlck1lc3NhZ2UuRzJDX1Rlc3R9IEcyQ19UZXN0XG4gICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgcGF5bG9hZCBpcyBub3QgYSByZWFkZXIgb3IgdmFsaWQgYnVmZmVyXG4gICAgICAgICAqIEB0aHJvd3MgeyRwcm90b2J1Zi51dGlsLlByb3RvY29sRXJyb3J9IElmIHJlcXVpcmVkIGZpZWxkcyBhcmUgbWlzc2luZ1xuICAgICAgICAgKi9cbiAgICAgICAgRzJDX1Rlc3QuZGVjb2RlID0gZnVuY3Rpb24gZGVjb2RlKHIsIGwpIHtcbiAgICAgICAgICAgIGlmICghKHIgaW5zdGFuY2VvZiAkUmVhZGVyKSlcbiAgICAgICAgICAgICAgICByID0gJFJlYWRlci5jcmVhdGUocik7XG4gICAgICAgICAgICB2YXIgYyA9IGwgPT09IHVuZGVmaW5lZCA/IHIubGVuIDogci5wb3MgKyBsLCBtID0gbmV3ICRyb290Lk91dGVyTWVzc2FnZS5HMkNfVGVzdCgpO1xuICAgICAgICAgICAgd2hpbGUgKHIucG9zIDwgYykge1xuICAgICAgICAgICAgICAgIHZhciB0ID0gci51aW50MzIoKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHQgPj4+IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHIuc2tpcFR5cGUodCAmIDcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG07XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIEcyQ19UZXN0O1xuICAgIH0pKCk7XG5cbiAgICBPdXRlck1lc3NhZ2UuQzJNX1JlbG9hZCA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByb3BlcnRpZXMgb2YgYSBDMk1fUmVsb2FkLlxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlXG4gICAgICAgICAqIEBpbnRlcmZhY2UgSUMyTV9SZWxvYWRcbiAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ8bnVsbH0gW1JwY0lkXSBDMk1fUmVsb2FkIFJwY0lkXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bGx9IFtBY2NvdW50XSBDMk1fUmVsb2FkIEFjY291bnRcbiAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd8bnVsbH0gW1Bhc3N3b3JkXSBDMk1fUmVsb2FkIFBhc3N3b3JkXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb25zdHJ1Y3RzIGEgbmV3IEMyTV9SZWxvYWQuXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2VcbiAgICAgICAgICogQGNsYXNzZGVzYyBSZXByZXNlbnRzIGEgQzJNX1JlbG9hZC5cbiAgICAgICAgICogQGltcGxlbWVudHMgSUMyTV9SZWxvYWRcbiAgICAgICAgICogQGNvbnN0cnVjdG9yXG4gICAgICAgICAqIEBwYXJhbSB7T3V0ZXJNZXNzYWdlLklDMk1fUmVsb2FkPX0gW3BdIFByb3BlcnRpZXMgdG8gc2V0XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBDMk1fUmVsb2FkKHApIHtcbiAgICAgICAgICAgIGlmIChwKVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGtzID0gT2JqZWN0LmtleXMocCksIGkgPSAwOyBpIDwga3MubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICAgICAgICAgIGlmIChwW2tzW2ldXSAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trc1tpXV0gPSBwW2tzW2ldXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDMk1fUmVsb2FkIFJwY0lkLlxuICAgICAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFJwY0lkXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuQzJNX1JlbG9hZFxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIEMyTV9SZWxvYWQucHJvdG90eXBlLlJwY0lkID0gMDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQzJNX1JlbG9hZCBBY2NvdW50LlxuICAgICAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IEFjY291bnRcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5DMk1fUmVsb2FkXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgQzJNX1JlbG9hZC5wcm90b3R5cGUuQWNjb3VudCA9IFwiXCI7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEMyTV9SZWxvYWQgUGFzc3dvcmQuXG4gICAgICAgICAqIEBtZW1iZXIge3N0cmluZ30gUGFzc3dvcmRcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5DMk1fUmVsb2FkXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgQzJNX1JlbG9hZC5wcm90b3R5cGUuUGFzc3dvcmQgPSBcIlwiO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGEgbmV3IEMyTV9SZWxvYWQgaW5zdGFuY2UgdXNpbmcgdGhlIHNwZWNpZmllZCBwcm9wZXJ0aWVzLlxuICAgICAgICAgKiBAZnVuY3Rpb24gY3JlYXRlXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuQzJNX1JlbG9hZFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T3V0ZXJNZXNzYWdlLklDMk1fUmVsb2FkPX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XG4gICAgICAgICAqIEByZXR1cm5zIHtPdXRlck1lc3NhZ2UuQzJNX1JlbG9hZH0gQzJNX1JlbG9hZCBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgQzJNX1JlbG9hZC5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUocHJvcGVydGllcykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDMk1fUmVsb2FkKHByb3BlcnRpZXMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbmNvZGVzIHRoZSBzcGVjaWZpZWQgQzJNX1JlbG9hZCBtZXNzYWdlLiBEb2VzIG5vdCBpbXBsaWNpdGx5IHtAbGluayBPdXRlck1lc3NhZ2UuQzJNX1JlbG9hZC52ZXJpZnl8dmVyaWZ5fSBtZXNzYWdlcy5cbiAgICAgICAgICogQGZ1bmN0aW9uIGVuY29kZVxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLkMyTV9SZWxvYWRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge091dGVyTWVzc2FnZS5JQzJNX1JlbG9hZH0gbSBDMk1fUmVsb2FkIG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxuICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3XSBXcml0ZXIgdG8gZW5jb2RlIHRvXG4gICAgICAgICAqIEByZXR1cm5zIHskcHJvdG9idWYuV3JpdGVyfSBXcml0ZXJcbiAgICAgICAgICovXG4gICAgICAgIEMyTV9SZWxvYWQuZW5jb2RlID0gZnVuY3Rpb24gZW5jb2RlKG0sIHcpIHtcbiAgICAgICAgICAgIGlmICghdylcbiAgICAgICAgICAgICAgICB3ID0gJFdyaXRlci5jcmVhdGUoKTtcbiAgICAgICAgICAgIGlmIChtLkFjY291bnQgIT0gbnVsbCAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtLCBcIkFjY291bnRcIikpXG4gICAgICAgICAgICAgICAgdy51aW50MzIoMTApLnN0cmluZyhtLkFjY291bnQpO1xuICAgICAgICAgICAgaWYgKG0uUGFzc3dvcmQgIT0gbnVsbCAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtLCBcIlBhc3N3b3JkXCIpKVxuICAgICAgICAgICAgICAgIHcudWludDMyKDE4KS5zdHJpbmcobS5QYXNzd29yZCk7XG4gICAgICAgICAgICBpZiAobS5ScGNJZCAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG0sIFwiUnBjSWRcIikpXG4gICAgICAgICAgICAgICAgdy51aW50MzIoNzIwKS5pbnQzMihtLlJwY0lkKTtcbiAgICAgICAgICAgIHJldHVybiB3O1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWNvZGVzIGEgQzJNX1JlbG9hZCBtZXNzYWdlIGZyb20gdGhlIHNwZWNpZmllZCByZWFkZXIgb3IgYnVmZmVyLlxuICAgICAgICAgKiBAZnVuY3Rpb24gZGVjb2RlXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuQzJNX1JlbG9hZFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLlJlYWRlcnxVaW50OEFycmF5fSByIFJlYWRlciBvciBidWZmZXIgdG8gZGVjb2RlIGZyb21cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtsXSBNZXNzYWdlIGxlbmd0aCBpZiBrbm93biBiZWZvcmVoYW5kXG4gICAgICAgICAqIEByZXR1cm5zIHtPdXRlck1lc3NhZ2UuQzJNX1JlbG9hZH0gQzJNX1JlbG9hZFxuICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHBheWxvYWQgaXMgbm90IGEgcmVhZGVyIG9yIHZhbGlkIGJ1ZmZlclxuICAgICAgICAgKiBAdGhyb3dzIHskcHJvdG9idWYudXRpbC5Qcm90b2NvbEVycm9yfSBJZiByZXF1aXJlZCBmaWVsZHMgYXJlIG1pc3NpbmdcbiAgICAgICAgICovXG4gICAgICAgIEMyTV9SZWxvYWQuZGVjb2RlID0gZnVuY3Rpb24gZGVjb2RlKHIsIGwpIHtcbiAgICAgICAgICAgIGlmICghKHIgaW5zdGFuY2VvZiAkUmVhZGVyKSlcbiAgICAgICAgICAgICAgICByID0gJFJlYWRlci5jcmVhdGUocik7XG4gICAgICAgICAgICB2YXIgYyA9IGwgPT09IHVuZGVmaW5lZCA/IHIubGVuIDogci5wb3MgKyBsLCBtID0gbmV3ICRyb290Lk91dGVyTWVzc2FnZS5DMk1fUmVsb2FkKCk7XG4gICAgICAgICAgICB3aGlsZSAoci5wb3MgPCBjKSB7XG4gICAgICAgICAgICAgICAgdmFyIHQgPSByLnVpbnQzMigpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodCA+Pj4gMykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDkwOlxuICAgICAgICAgICAgICAgICAgICAgICAgbS5ScGNJZCA9IHIuaW50MzIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBtLkFjY291bnQgPSByLnN0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uUGFzc3dvcmQgPSByLnN0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICByLnNraXBUeXBlKHQgJiA3KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBDMk1fUmVsb2FkO1xuICAgIH0pKCk7XG5cbiAgICBPdXRlck1lc3NhZ2UuTTJDX1JlbG9hZCA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByb3BlcnRpZXMgb2YgYSBNMkNfUmVsb2FkLlxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlXG4gICAgICAgICAqIEBpbnRlcmZhY2UgSU0yQ19SZWxvYWRcbiAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ8bnVsbH0gW1JwY0lkXSBNMkNfUmVsb2FkIFJwY0lkXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfG51bGx9IFtFcnJvcl0gTTJDX1JlbG9hZCBFcnJvclxuICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSBbTWVzc2FnZV0gTTJDX1JlbG9hZCBNZXNzYWdlXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb25zdHJ1Y3RzIGEgbmV3IE0yQ19SZWxvYWQuXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2VcbiAgICAgICAgICogQGNsYXNzZGVzYyBSZXByZXNlbnRzIGEgTTJDX1JlbG9hZC5cbiAgICAgICAgICogQGltcGxlbWVudHMgSU0yQ19SZWxvYWRcbiAgICAgICAgICogQGNvbnN0cnVjdG9yXG4gICAgICAgICAqIEBwYXJhbSB7T3V0ZXJNZXNzYWdlLklNMkNfUmVsb2FkPX0gW3BdIFByb3BlcnRpZXMgdG8gc2V0XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBNMkNfUmVsb2FkKHApIHtcbiAgICAgICAgICAgIGlmIChwKVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGtzID0gT2JqZWN0LmtleXMocCksIGkgPSAwOyBpIDwga3MubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICAgICAgICAgIGlmIChwW2tzW2ldXSAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trc1tpXV0gPSBwW2tzW2ldXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNMkNfUmVsb2FkIFJwY0lkLlxuICAgICAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFJwY0lkXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuTTJDX1JlbG9hZFxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIE0yQ19SZWxvYWQucHJvdG90eXBlLlJwY0lkID0gMDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTTJDX1JlbG9hZCBFcnJvci5cbiAgICAgICAgICogQG1lbWJlciB7bnVtYmVyfSBFcnJvclxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLk0yQ19SZWxvYWRcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBNMkNfUmVsb2FkLnByb3RvdHlwZS5FcnJvciA9IDA7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE0yQ19SZWxvYWQgTWVzc2FnZS5cbiAgICAgICAgICogQG1lbWJlciB7c3RyaW5nfSBNZXNzYWdlXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuTTJDX1JlbG9hZFxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIE0yQ19SZWxvYWQucHJvdG90eXBlLk1lc3NhZ2UgPSBcIlwiO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGEgbmV3IE0yQ19SZWxvYWQgaW5zdGFuY2UgdXNpbmcgdGhlIHNwZWNpZmllZCBwcm9wZXJ0aWVzLlxuICAgICAgICAgKiBAZnVuY3Rpb24gY3JlYXRlXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuTTJDX1JlbG9hZFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T3V0ZXJNZXNzYWdlLklNMkNfUmVsb2FkPX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XG4gICAgICAgICAqIEByZXR1cm5zIHtPdXRlck1lc3NhZ2UuTTJDX1JlbG9hZH0gTTJDX1JlbG9hZCBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgTTJDX1JlbG9hZC5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUocHJvcGVydGllcykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNMkNfUmVsb2FkKHByb3BlcnRpZXMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbmNvZGVzIHRoZSBzcGVjaWZpZWQgTTJDX1JlbG9hZCBtZXNzYWdlLiBEb2VzIG5vdCBpbXBsaWNpdGx5IHtAbGluayBPdXRlck1lc3NhZ2UuTTJDX1JlbG9hZC52ZXJpZnl8dmVyaWZ5fSBtZXNzYWdlcy5cbiAgICAgICAgICogQGZ1bmN0aW9uIGVuY29kZVxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLk0yQ19SZWxvYWRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge091dGVyTWVzc2FnZS5JTTJDX1JlbG9hZH0gbSBNMkNfUmVsb2FkIG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxuICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3XSBXcml0ZXIgdG8gZW5jb2RlIHRvXG4gICAgICAgICAqIEByZXR1cm5zIHskcHJvdG9idWYuV3JpdGVyfSBXcml0ZXJcbiAgICAgICAgICovXG4gICAgICAgIE0yQ19SZWxvYWQuZW5jb2RlID0gZnVuY3Rpb24gZW5jb2RlKG0sIHcpIHtcbiAgICAgICAgICAgIGlmICghdylcbiAgICAgICAgICAgICAgICB3ID0gJFdyaXRlci5jcmVhdGUoKTtcbiAgICAgICAgICAgIGlmIChtLlJwY0lkICE9IG51bGwgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobSwgXCJScGNJZFwiKSlcbiAgICAgICAgICAgICAgICB3LnVpbnQzMig3MjApLmludDMyKG0uUnBjSWQpO1xuICAgICAgICAgICAgaWYgKG0uRXJyb3IgIT0gbnVsbCAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtLCBcIkVycm9yXCIpKVxuICAgICAgICAgICAgICAgIHcudWludDMyKDcyOCkuaW50MzIobS5FcnJvcik7XG4gICAgICAgICAgICBpZiAobS5NZXNzYWdlICE9IG51bGwgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobSwgXCJNZXNzYWdlXCIpKVxuICAgICAgICAgICAgICAgIHcudWludDMyKDczOCkuc3RyaW5nKG0uTWVzc2FnZSk7XG4gICAgICAgICAgICByZXR1cm4gdztcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVjb2RlcyBhIE0yQ19SZWxvYWQgbWVzc2FnZSBmcm9tIHRoZSBzcGVjaWZpZWQgcmVhZGVyIG9yIGJ1ZmZlci5cbiAgICAgICAgICogQGZ1bmN0aW9uIGRlY29kZVxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLk0yQ19SZWxvYWRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5SZWFkZXJ8VWludDhBcnJheX0gciBSZWFkZXIgb3IgYnVmZmVyIHRvIGRlY29kZSBmcm9tXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbF0gTWVzc2FnZSBsZW5ndGggaWYga25vd24gYmVmb3JlaGFuZFxuICAgICAgICAgKiBAcmV0dXJucyB7T3V0ZXJNZXNzYWdlLk0yQ19SZWxvYWR9IE0yQ19SZWxvYWRcbiAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBwYXlsb2FkIGlzIG5vdCBhIHJlYWRlciBvciB2YWxpZCBidWZmZXJcbiAgICAgICAgICogQHRocm93cyB7JHByb3RvYnVmLnV0aWwuUHJvdG9jb2xFcnJvcn0gSWYgcmVxdWlyZWQgZmllbGRzIGFyZSBtaXNzaW5nXG4gICAgICAgICAqL1xuICAgICAgICBNMkNfUmVsb2FkLmRlY29kZSA9IGZ1bmN0aW9uIGRlY29kZShyLCBsKSB7XG4gICAgICAgICAgICBpZiAoIShyIGluc3RhbmNlb2YgJFJlYWRlcikpXG4gICAgICAgICAgICAgICAgciA9ICRSZWFkZXIuY3JlYXRlKHIpO1xuICAgICAgICAgICAgdmFyIGMgPSBsID09PSB1bmRlZmluZWQgPyByLmxlbiA6IHIucG9zICsgbCwgbSA9IG5ldyAkcm9vdC5PdXRlck1lc3NhZ2UuTTJDX1JlbG9hZCgpO1xuICAgICAgICAgICAgd2hpbGUgKHIucG9zIDwgYykge1xuICAgICAgICAgICAgICAgIHZhciB0ID0gci51aW50MzIoKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHQgPj4+IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5MDpcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uUnBjSWQgPSByLmludDMyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5MTpcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uRXJyb3IgPSByLmludDMyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5MjpcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uTWVzc2FnZSA9IHIuc3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHIuc2tpcFR5cGUodCAmIDcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG07XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIE0yQ19SZWxvYWQ7XG4gICAgfSkoKTtcblxuICAgIE91dGVyTWVzc2FnZS5TUzJDX0Jhc2VOb3RpZnkgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcm9wZXJ0aWVzIG9mIGEgU1MyQ19CYXNlTm90aWZ5LlxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlXG4gICAgICAgICAqIEBpbnRlcmZhY2UgSVNTMkNfQmFzZU5vdGlmeVxuICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcnxudWxsfSBbUnBjSWRdIFNTMkNfQmFzZU5vdGlmeSBScGNJZFxuICAgICAgICAgKiBAcHJvcGVydHkge0xvbmd8bnVsbH0gW0FjdG9ySWRdIFNTMkNfQmFzZU5vdGlmeSBBY3RvcklkXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bGx9IFtkYXRhXSBTUzJDX0Jhc2VOb3RpZnkgZGF0YVxuICAgICAgICAgKi9cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29uc3RydWN0cyBhIG5ldyBTUzJDX0Jhc2VOb3RpZnkuXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2VcbiAgICAgICAgICogQGNsYXNzZGVzYyBSZXByZXNlbnRzIGEgU1MyQ19CYXNlTm90aWZ5LlxuICAgICAgICAgKiBAaW1wbGVtZW50cyBJU1MyQ19CYXNlTm90aWZ5XG4gICAgICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAgICAgKiBAcGFyYW0ge091dGVyTWVzc2FnZS5JU1MyQ19CYXNlTm90aWZ5PX0gW3BdIFByb3BlcnRpZXMgdG8gc2V0XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBTUzJDX0Jhc2VOb3RpZnkocCkge1xuICAgICAgICAgICAgaWYgKHApXG4gICAgICAgICAgICAgICAgZm9yICh2YXIga3MgPSBPYmplY3Qua2V5cyhwKSwgaSA9IDA7IGkgPCBrcy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBba3NbaV1dICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2tzW2ldXSA9IHBba3NbaV1dO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNTMkNfQmFzZU5vdGlmeSBScGNJZC5cbiAgICAgICAgICogQG1lbWJlciB7bnVtYmVyfSBScGNJZFxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLlNTMkNfQmFzZU5vdGlmeVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIFNTMkNfQmFzZU5vdGlmeS5wcm90b3R5cGUuUnBjSWQgPSAwO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTUzJDX0Jhc2VOb3RpZnkgQWN0b3JJZC5cbiAgICAgICAgICogQG1lbWJlciB7TG9uZ30gQWN0b3JJZFxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLlNTMkNfQmFzZU5vdGlmeVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIFNTMkNfQmFzZU5vdGlmeS5wcm90b3R5cGUuQWN0b3JJZCA9ICR1dGlsLkxvbmcgPyAkdXRpbC5Mb25nLmZyb21CaXRzKDAsIDAsIGZhbHNlKSA6IDA7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNTMkNfQmFzZU5vdGlmeSBkYXRhLlxuICAgICAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IGRhdGFcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5TUzJDX0Jhc2VOb3RpZnlcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBTUzJDX0Jhc2VOb3RpZnkucHJvdG90eXBlLmRhdGEgPSBcIlwiO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGEgbmV3IFNTMkNfQmFzZU5vdGlmeSBpbnN0YW5jZSB1c2luZyB0aGUgc3BlY2lmaWVkIHByb3BlcnRpZXMuXG4gICAgICAgICAqIEBmdW5jdGlvbiBjcmVhdGVcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5TUzJDX0Jhc2VOb3RpZnlcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge091dGVyTWVzc2FnZS5JU1MyQ19CYXNlTm90aWZ5PX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XG4gICAgICAgICAqIEByZXR1cm5zIHtPdXRlck1lc3NhZ2UuU1MyQ19CYXNlTm90aWZ5fSBTUzJDX0Jhc2VOb3RpZnkgaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIFNTMkNfQmFzZU5vdGlmeS5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUocHJvcGVydGllcykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTUzJDX0Jhc2VOb3RpZnkocHJvcGVydGllcyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVuY29kZXMgdGhlIHNwZWNpZmllZCBTUzJDX0Jhc2VOb3RpZnkgbWVzc2FnZS4gRG9lcyBub3QgaW1wbGljaXRseSB7QGxpbmsgT3V0ZXJNZXNzYWdlLlNTMkNfQmFzZU5vdGlmeS52ZXJpZnl8dmVyaWZ5fSBtZXNzYWdlcy5cbiAgICAgICAgICogQGZ1bmN0aW9uIGVuY29kZVxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLlNTMkNfQmFzZU5vdGlmeVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T3V0ZXJNZXNzYWdlLklTUzJDX0Jhc2VOb3RpZnl9IG0gU1MyQ19CYXNlTm90aWZ5IG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxuICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3XSBXcml0ZXIgdG8gZW5jb2RlIHRvXG4gICAgICAgICAqIEByZXR1cm5zIHskcHJvdG9idWYuV3JpdGVyfSBXcml0ZXJcbiAgICAgICAgICovXG4gICAgICAgIFNTMkNfQmFzZU5vdGlmeS5lbmNvZGUgPSBmdW5jdGlvbiBlbmNvZGUobSwgdykge1xuICAgICAgICAgICAgaWYgKCF3KVxuICAgICAgICAgICAgICAgIHcgPSAkV3JpdGVyLmNyZWF0ZSgpO1xuICAgICAgICAgICAgaWYgKG0uUnBjSWQgIT0gbnVsbCAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtLCBcIlJwY0lkXCIpKVxuICAgICAgICAgICAgICAgIHcudWludDMyKDcyMCkuaW50MzIobS5ScGNJZCk7XG4gICAgICAgICAgICBpZiAobS5BY3RvcklkICE9IG51bGwgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobSwgXCJBY3RvcklkXCIpKVxuICAgICAgICAgICAgICAgIHcudWludDMyKDc0NCkuaW50NjQobS5BY3RvcklkKTtcbiAgICAgICAgICAgIGlmIChtLmRhdGEgIT0gbnVsbCAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtLCBcImRhdGFcIikpXG4gICAgICAgICAgICAgICAgdy51aW50MzIoNzU0KS5zdHJpbmcobS5kYXRhKTtcbiAgICAgICAgICAgIHJldHVybiB3O1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWNvZGVzIGEgU1MyQ19CYXNlTm90aWZ5IG1lc3NhZ2UgZnJvbSB0aGUgc3BlY2lmaWVkIHJlYWRlciBvciBidWZmZXIuXG4gICAgICAgICAqIEBmdW5jdGlvbiBkZWNvZGVcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5TUzJDX0Jhc2VOb3RpZnlcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5SZWFkZXJ8VWludDhBcnJheX0gciBSZWFkZXIgb3IgYnVmZmVyIHRvIGRlY29kZSBmcm9tXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbF0gTWVzc2FnZSBsZW5ndGggaWYga25vd24gYmVmb3JlaGFuZFxuICAgICAgICAgKiBAcmV0dXJucyB7T3V0ZXJNZXNzYWdlLlNTMkNfQmFzZU5vdGlmeX0gU1MyQ19CYXNlTm90aWZ5XG4gICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgcGF5bG9hZCBpcyBub3QgYSByZWFkZXIgb3IgdmFsaWQgYnVmZmVyXG4gICAgICAgICAqIEB0aHJvd3MgeyRwcm90b2J1Zi51dGlsLlByb3RvY29sRXJyb3J9IElmIHJlcXVpcmVkIGZpZWxkcyBhcmUgbWlzc2luZ1xuICAgICAgICAgKi9cbiAgICAgICAgU1MyQ19CYXNlTm90aWZ5LmRlY29kZSA9IGZ1bmN0aW9uIGRlY29kZShyLCBsKSB7XG4gICAgICAgICAgICBpZiAoIShyIGluc3RhbmNlb2YgJFJlYWRlcikpXG4gICAgICAgICAgICAgICAgciA9ICRSZWFkZXIuY3JlYXRlKHIpO1xuICAgICAgICAgICAgdmFyIGMgPSBsID09PSB1bmRlZmluZWQgPyByLmxlbiA6IHIucG9zICsgbCwgbSA9IG5ldyAkcm9vdC5PdXRlck1lc3NhZ2UuU1MyQ19CYXNlTm90aWZ5KCk7XG4gICAgICAgICAgICB3aGlsZSAoci5wb3MgPCBjKSB7XG4gICAgICAgICAgICAgICAgdmFyIHQgPSByLnVpbnQzMigpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodCA+Pj4gMykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDkwOlxuICAgICAgICAgICAgICAgICAgICAgICAgbS5ScGNJZCA9IHIuaW50MzIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDkzOlxuICAgICAgICAgICAgICAgICAgICAgICAgbS5BY3RvcklkID0gci5pbnQ2NCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBtLmRhdGEgPSByLnN0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICByLnNraXBUeXBlKHQgJiA3KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBTUzJDX0Jhc2VOb3RpZnk7XG4gICAgfSkoKTtcblxuICAgIE91dGVyTWVzc2FnZS5DMkdfSGVhcnRiZWF0ID0gKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvcGVydGllcyBvZiBhIEMyR19IZWFydGJlYXQuXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2VcbiAgICAgICAgICogQGludGVyZmFjZSBJQzJHX0hlYXJ0YmVhdFxuICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcnxudWxsfSBbUnBjSWRdIEMyR19IZWFydGJlYXQgUnBjSWRcbiAgICAgICAgICovXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnN0cnVjdHMgYSBuZXcgQzJHX0hlYXJ0YmVhdC5cbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZVxuICAgICAgICAgKiBAY2xhc3NkZXNjIFJlcHJlc2VudHMgYSBDMkdfSGVhcnRiZWF0LlxuICAgICAgICAgKiBAaW1wbGVtZW50cyBJQzJHX0hlYXJ0YmVhdFxuICAgICAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgICAgICogQHBhcmFtIHtPdXRlck1lc3NhZ2UuSUMyR19IZWFydGJlYXQ9fSBbcF0gUHJvcGVydGllcyB0byBzZXRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIEMyR19IZWFydGJlYXQocCkge1xuICAgICAgICAgICAgaWYgKHApXG4gICAgICAgICAgICAgICAgZm9yICh2YXIga3MgPSBPYmplY3Qua2V5cyhwKSwgaSA9IDA7IGkgPCBrcy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBba3NbaV1dICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2tzW2ldXSA9IHBba3NbaV1dO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEMyR19IZWFydGJlYXQgUnBjSWQuXG4gICAgICAgICAqIEBtZW1iZXIge251bWJlcn0gUnBjSWRcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5DMkdfSGVhcnRiZWF0XG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgQzJHX0hlYXJ0YmVhdC5wcm90b3R5cGUuUnBjSWQgPSAwO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGEgbmV3IEMyR19IZWFydGJlYXQgaW5zdGFuY2UgdXNpbmcgdGhlIHNwZWNpZmllZCBwcm9wZXJ0aWVzLlxuICAgICAgICAgKiBAZnVuY3Rpb24gY3JlYXRlXG4gICAgICAgICAqIEBtZW1iZXJvZiBPdXRlck1lc3NhZ2UuQzJHX0hlYXJ0YmVhdFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7T3V0ZXJNZXNzYWdlLklDMkdfSGVhcnRiZWF0PX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XG4gICAgICAgICAqIEByZXR1cm5zIHtPdXRlck1lc3NhZ2UuQzJHX0hlYXJ0YmVhdH0gQzJHX0hlYXJ0YmVhdCBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgQzJHX0hlYXJ0YmVhdC5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUocHJvcGVydGllcykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDMkdfSGVhcnRiZWF0KHByb3BlcnRpZXMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbmNvZGVzIHRoZSBzcGVjaWZpZWQgQzJHX0hlYXJ0YmVhdCBtZXNzYWdlLiBEb2VzIG5vdCBpbXBsaWNpdGx5IHtAbGluayBPdXRlck1lc3NhZ2UuQzJHX0hlYXJ0YmVhdC52ZXJpZnl8dmVyaWZ5fSBtZXNzYWdlcy5cbiAgICAgICAgICogQGZ1bmN0aW9uIGVuY29kZVxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLkMyR19IZWFydGJlYXRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge091dGVyTWVzc2FnZS5JQzJHX0hlYXJ0YmVhdH0gbSBDMkdfSGVhcnRiZWF0IG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxuICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3XSBXcml0ZXIgdG8gZW5jb2RlIHRvXG4gICAgICAgICAqIEByZXR1cm5zIHskcHJvdG9idWYuV3JpdGVyfSBXcml0ZXJcbiAgICAgICAgICovXG4gICAgICAgIEMyR19IZWFydGJlYXQuZW5jb2RlID0gZnVuY3Rpb24gZW5jb2RlKG0sIHcpIHtcbiAgICAgICAgICAgIGlmICghdylcbiAgICAgICAgICAgICAgICB3ID0gJFdyaXRlci5jcmVhdGUoKTtcbiAgICAgICAgICAgIGlmIChtLlJwY0lkICE9IG51bGwgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobSwgXCJScGNJZFwiKSlcbiAgICAgICAgICAgICAgICB3LnVpbnQzMig3MjApLmludDMyKG0uUnBjSWQpO1xuICAgICAgICAgICAgcmV0dXJuIHc7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlY29kZXMgYSBDMkdfSGVhcnRiZWF0IG1lc3NhZ2UgZnJvbSB0aGUgc3BlY2lmaWVkIHJlYWRlciBvciBidWZmZXIuXG4gICAgICAgICAqIEBmdW5jdGlvbiBkZWNvZGVcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5DMkdfSGVhcnRiZWF0XG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuUmVhZGVyfFVpbnQ4QXJyYXl9IHIgUmVhZGVyIG9yIGJ1ZmZlciB0byBkZWNvZGUgZnJvbVxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xdIE1lc3NhZ2UgbGVuZ3RoIGlmIGtub3duIGJlZm9yZWhhbmRcbiAgICAgICAgICogQHJldHVybnMge091dGVyTWVzc2FnZS5DMkdfSGVhcnRiZWF0fSBDMkdfSGVhcnRiZWF0XG4gICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgcGF5bG9hZCBpcyBub3QgYSByZWFkZXIgb3IgdmFsaWQgYnVmZmVyXG4gICAgICAgICAqIEB0aHJvd3MgeyRwcm90b2J1Zi51dGlsLlByb3RvY29sRXJyb3J9IElmIHJlcXVpcmVkIGZpZWxkcyBhcmUgbWlzc2luZ1xuICAgICAgICAgKi9cbiAgICAgICAgQzJHX0hlYXJ0YmVhdC5kZWNvZGUgPSBmdW5jdGlvbiBkZWNvZGUociwgbCkge1xuICAgICAgICAgICAgaWYgKCEociBpbnN0YW5jZW9mICRSZWFkZXIpKVxuICAgICAgICAgICAgICAgIHIgPSAkUmVhZGVyLmNyZWF0ZShyKTtcbiAgICAgICAgICAgIHZhciBjID0gbCA9PT0gdW5kZWZpbmVkID8gci5sZW4gOiByLnBvcyArIGwsIG0gPSBuZXcgJHJvb3QuT3V0ZXJNZXNzYWdlLkMyR19IZWFydGJlYXQoKTtcbiAgICAgICAgICAgIHdoaWxlIChyLnBvcyA8IGMpIHtcbiAgICAgICAgICAgICAgICB2YXIgdCA9IHIudWludDMyKCk7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0ID4+PiAzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTA6XG4gICAgICAgICAgICAgICAgICAgICAgICBtLlJwY0lkID0gci5pbnQzMigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICByLnNraXBUeXBlKHQgJiA3KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBDMkdfSGVhcnRiZWF0O1xuICAgIH0pKCk7XG5cbiAgICBPdXRlck1lc3NhZ2UuRzJDX0hlYXJ0YmVhdCA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByb3BlcnRpZXMgb2YgYSBHMkNfSGVhcnRiZWF0LlxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlXG4gICAgICAgICAqIEBpbnRlcmZhY2UgSUcyQ19IZWFydGJlYXRcbiAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ8bnVsbH0gW1JwY0lkXSBHMkNfSGVhcnRiZWF0IFJwY0lkXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfG51bGx9IFtTZXJ2ZXJUaW1lXSBHMkNfSGVhcnRiZWF0IFNlcnZlclRpbWVcbiAgICAgICAgICovXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnN0cnVjdHMgYSBuZXcgRzJDX0hlYXJ0YmVhdC5cbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZVxuICAgICAgICAgKiBAY2xhc3NkZXNjIFJlcHJlc2VudHMgYSBHMkNfSGVhcnRiZWF0LlxuICAgICAgICAgKiBAaW1wbGVtZW50cyBJRzJDX0hlYXJ0YmVhdFxuICAgICAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgICAgICogQHBhcmFtIHtPdXRlck1lc3NhZ2UuSUcyQ19IZWFydGJlYXQ9fSBbcF0gUHJvcGVydGllcyB0byBzZXRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIEcyQ19IZWFydGJlYXQocCkge1xuICAgICAgICAgICAgaWYgKHApXG4gICAgICAgICAgICAgICAgZm9yICh2YXIga3MgPSBPYmplY3Qua2V5cyhwKSwgaSA9IDA7IGkgPCBrcy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBba3NbaV1dICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2tzW2ldXSA9IHBba3NbaV1dO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEcyQ19IZWFydGJlYXQgUnBjSWQuXG4gICAgICAgICAqIEBtZW1iZXIge251bWJlcn0gUnBjSWRcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5HMkNfSGVhcnRiZWF0XG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgRzJDX0hlYXJ0YmVhdC5wcm90b3R5cGUuUnBjSWQgPSAwO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHMkNfSGVhcnRiZWF0IFNlcnZlclRpbWUuXG4gICAgICAgICAqIEBtZW1iZXIge251bWJlcn0gU2VydmVyVGltZVxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLkcyQ19IZWFydGJlYXRcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBHMkNfSGVhcnRiZWF0LnByb3RvdHlwZS5TZXJ2ZXJUaW1lID0gMDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyBhIG5ldyBHMkNfSGVhcnRiZWF0IGluc3RhbmNlIHVzaW5nIHRoZSBzcGVjaWZpZWQgcHJvcGVydGllcy5cbiAgICAgICAgICogQGZ1bmN0aW9uIGNyZWF0ZVxuICAgICAgICAgKiBAbWVtYmVyb2YgT3V0ZXJNZXNzYWdlLkcyQ19IZWFydGJlYXRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge091dGVyTWVzc2FnZS5JRzJDX0hlYXJ0YmVhdD19IFtwcm9wZXJ0aWVzXSBQcm9wZXJ0aWVzIHRvIHNldFxuICAgICAgICAgKiBAcmV0dXJucyB7T3V0ZXJNZXNzYWdlLkcyQ19IZWFydGJlYXR9IEcyQ19IZWFydGJlYXQgaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIEcyQ19IZWFydGJlYXQuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRzJDX0hlYXJ0YmVhdChwcm9wZXJ0aWVzKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRW5jb2RlcyB0aGUgc3BlY2lmaWVkIEcyQ19IZWFydGJlYXQgbWVzc2FnZS4gRG9lcyBub3QgaW1wbGljaXRseSB7QGxpbmsgT3V0ZXJNZXNzYWdlLkcyQ19IZWFydGJlYXQudmVyaWZ5fHZlcmlmeX0gbWVzc2FnZXMuXG4gICAgICAgICAqIEBmdW5jdGlvbiBlbmNvZGVcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5HMkNfSGVhcnRiZWF0XG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtPdXRlck1lc3NhZ2UuSUcyQ19IZWFydGJlYXR9IG0gRzJDX0hlYXJ0YmVhdCBtZXNzYWdlIG9yIHBsYWluIG9iamVjdCB0byBlbmNvZGVcbiAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuV3JpdGVyfSBbd10gV3JpdGVyIHRvIGVuY29kZSB0b1xuICAgICAgICAgKiBAcmV0dXJucyB7JHByb3RvYnVmLldyaXRlcn0gV3JpdGVyXG4gICAgICAgICAqL1xuICAgICAgICBHMkNfSGVhcnRiZWF0LmVuY29kZSA9IGZ1bmN0aW9uIGVuY29kZShtLCB3KSB7XG4gICAgICAgICAgICBpZiAoIXcpXG4gICAgICAgICAgICAgICAgdyA9ICRXcml0ZXIuY3JlYXRlKCk7XG4gICAgICAgICAgICBpZiAobS5ScGNJZCAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG0sIFwiUnBjSWRcIikpXG4gICAgICAgICAgICAgICAgdy51aW50MzIoNzIwKS5pbnQzMihtLlJwY0lkKTtcbiAgICAgICAgICAgIGlmIChtLlNlcnZlclRpbWUgIT0gbnVsbCAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtLCBcIlNlcnZlclRpbWVcIikpXG4gICAgICAgICAgICAgICAgdy51aW50MzIoNzI4KS5pbnQzMihtLlNlcnZlclRpbWUpO1xuICAgICAgICAgICAgcmV0dXJuIHc7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlY29kZXMgYSBHMkNfSGVhcnRiZWF0IG1lc3NhZ2UgZnJvbSB0aGUgc3BlY2lmaWVkIHJlYWRlciBvciBidWZmZXIuXG4gICAgICAgICAqIEBmdW5jdGlvbiBkZWNvZGVcbiAgICAgICAgICogQG1lbWJlcm9mIE91dGVyTWVzc2FnZS5HMkNfSGVhcnRiZWF0XG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuUmVhZGVyfFVpbnQ4QXJyYXl9IHIgUmVhZGVyIG9yIGJ1ZmZlciB0byBkZWNvZGUgZnJvbVxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xdIE1lc3NhZ2UgbGVuZ3RoIGlmIGtub3duIGJlZm9yZWhhbmRcbiAgICAgICAgICogQHJldHVybnMge091dGVyTWVzc2FnZS5HMkNfSGVhcnRiZWF0fSBHMkNfSGVhcnRiZWF0XG4gICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgcGF5bG9hZCBpcyBub3QgYSByZWFkZXIgb3IgdmFsaWQgYnVmZmVyXG4gICAgICAgICAqIEB0aHJvd3MgeyRwcm90b2J1Zi51dGlsLlByb3RvY29sRXJyb3J9IElmIHJlcXVpcmVkIGZpZWxkcyBhcmUgbWlzc2luZ1xuICAgICAgICAgKi9cbiAgICAgICAgRzJDX0hlYXJ0YmVhdC5kZWNvZGUgPSBmdW5jdGlvbiBkZWNvZGUociwgbCkge1xuICAgICAgICAgICAgaWYgKCEociBpbnN0YW5jZW9mICRSZWFkZXIpKVxuICAgICAgICAgICAgICAgIHIgPSAkUmVhZGVyLmNyZWF0ZShyKTtcbiAgICAgICAgICAgIHZhciBjID0gbCA9PT0gdW5kZWZpbmVkID8gci5sZW4gOiByLnBvcyArIGwsIG0gPSBuZXcgJHJvb3QuT3V0ZXJNZXNzYWdlLkcyQ19IZWFydGJlYXQoKTtcbiAgICAgICAgICAgIHdoaWxlIChyLnBvcyA8IGMpIHtcbiAgICAgICAgICAgICAgICB2YXIgdCA9IHIudWludDMyKCk7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0ID4+PiAzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTA6XG4gICAgICAgICAgICAgICAgICAgICAgICBtLlJwY0lkID0gci5pbnQzMigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTE6XG4gICAgICAgICAgICAgICAgICAgICAgICBtLlNlcnZlclRpbWUgPSByLmludDMyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHIuc2tpcFR5cGUodCAmIDcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG07XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIEcyQ19IZWFydGJlYXQ7XG4gICAgfSkoKTtcblxuICAgIHJldHVybiBPdXRlck1lc3NhZ2U7XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICRyb290O1xuIl19