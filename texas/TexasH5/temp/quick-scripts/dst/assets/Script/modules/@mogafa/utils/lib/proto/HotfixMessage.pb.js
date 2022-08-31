
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/utils/lib/proto/HotfixMessage.pb.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'af651+rcp9LW4QUq/CPfLwM', 'HotfixMessage.pb');
// Script/modules/@mogafa/utils/lib/proto/HotfixMessage.pb.js

/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var protobuf = require("protobufjs"); // Common aliases


var $Reader = protobuf.Reader,
    $Writer = protobuf.Writer,
    $util = protobuf.util; // Exported root namespace

var $root = protobuf.roots["default"] || (protobuf.roots["default"] = {});

$root.HotfixMessage = function () {
  /**
   * Namespace HotfixMessage.
   * @exports HotfixMessage
   * @namespace
   */
  var HotfixMessage = {};

  HotfixMessage.C2R_Login = function () {
    /**
     * Properties of a C2R_Login.
     * @memberof HotfixMessage
     * @interface IC2R_Login
     * @property {number|null} [RpcId] C2R_Login RpcId
     * @property {string|null} [Account] C2R_Login Account
     * @property {string|null} [Password] C2R_Login Password
     */

    /**
     * Constructs a new C2R_Login.
     * @memberof HotfixMessage
     * @classdesc Represents a C2R_Login.
     * @implements IC2R_Login
     * @constructor
     * @param {HotfixMessage.IC2R_Login=} [p] Properties to set
     */
    function C2R_Login(p) {
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) {
        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
    }
    /**
     * C2R_Login RpcId.
     * @member {number} RpcId
     * @memberof HotfixMessage.C2R_Login
     * @instance
     */


    C2R_Login.prototype.RpcId = 0;
    /**
     * C2R_Login Account.
     * @member {string} Account
     * @memberof HotfixMessage.C2R_Login
     * @instance
     */

    C2R_Login.prototype.Account = "";
    /**
     * C2R_Login Password.
     * @member {string} Password
     * @memberof HotfixMessage.C2R_Login
     * @instance
     */

    C2R_Login.prototype.Password = "";
    /**
     * Creates a new C2R_Login instance using the specified properties.
     * @function create
     * @memberof HotfixMessage.C2R_Login
     * @static
     * @param {HotfixMessage.IC2R_Login=} [properties] Properties to set
     * @returns {HotfixMessage.C2R_Login} C2R_Login instance
     */

    C2R_Login.create = function create(properties) {
      return new C2R_Login(properties);
    };
    /**
     * Encodes the specified C2R_Login message. Does not implicitly {@link HotfixMessage.C2R_Login.verify|verify} messages.
     * @function encode
     * @memberof HotfixMessage.C2R_Login
     * @static
     * @param {HotfixMessage.IC2R_Login} m C2R_Login message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    C2R_Login.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.Account != null && Object.hasOwnProperty.call(m, "Account")) w.uint32(10).string(m.Account);
      if (m.Password != null && Object.hasOwnProperty.call(m, "Password")) w.uint32(18).string(m.Password);
      if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId")) w.uint32(720).int32(m.RpcId);
      return w;
    };
    /**
     * Decodes a C2R_Login message from the specified reader or buffer.
     * @function decode
     * @memberof HotfixMessage.C2R_Login
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {HotfixMessage.C2R_Login} C2R_Login
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    C2R_Login.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
          m = new $root.HotfixMessage.C2R_Login();

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

    return C2R_Login;
  }();

  HotfixMessage.R2C_Login = function () {
    /**
     * Properties of a R2C_Login.
     * @memberof HotfixMessage
     * @interface IR2C_Login
     * @property {number|null} [RpcId] R2C_Login RpcId
     * @property {number|null} [Error] R2C_Login Error
     * @property {string|null} [Message] R2C_Login Message
     * @property {string|null} [Address] R2C_Login Address
     * @property {string|null} [Key] R2C_Login Key
     * @property {number|null} [userid] R2C_Login userid
     */

    /**
     * Constructs a new R2C_Login.
     * @memberof HotfixMessage
     * @classdesc Represents a R2C_Login.
     * @implements IR2C_Login
     * @constructor
     * @param {HotfixMessage.IR2C_Login=} [p] Properties to set
     */
    function R2C_Login(p) {
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) {
        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
    }
    /**
     * R2C_Login RpcId.
     * @member {number} RpcId
     * @memberof HotfixMessage.R2C_Login
     * @instance
     */


    R2C_Login.prototype.RpcId = 0;
    /**
     * R2C_Login Error.
     * @member {number} Error
     * @memberof HotfixMessage.R2C_Login
     * @instance
     */

    R2C_Login.prototype.Error = 0;
    /**
     * R2C_Login Message.
     * @member {string} Message
     * @memberof HotfixMessage.R2C_Login
     * @instance
     */

    R2C_Login.prototype.Message = "";
    /**
     * R2C_Login Address.
     * @member {string} Address
     * @memberof HotfixMessage.R2C_Login
     * @instance
     */

    R2C_Login.prototype.Address = "";
    /**
     * R2C_Login Key.
     * @member {string} Key
     * @memberof HotfixMessage.R2C_Login
     * @instance
     */

    R2C_Login.prototype.Key = "";
    /**
     * R2C_Login userid.
     * @member {number} userid
     * @memberof HotfixMessage.R2C_Login
     * @instance
     */

    R2C_Login.prototype.userid = 0;
    /**
     * Creates a new R2C_Login instance using the specified properties.
     * @function create
     * @memberof HotfixMessage.R2C_Login
     * @static
     * @param {HotfixMessage.IR2C_Login=} [properties] Properties to set
     * @returns {HotfixMessage.R2C_Login} R2C_Login instance
     */

    R2C_Login.create = function create(properties) {
      return new R2C_Login(properties);
    };
    /**
     * Encodes the specified R2C_Login message. Does not implicitly {@link HotfixMessage.R2C_Login.verify|verify} messages.
     * @function encode
     * @memberof HotfixMessage.R2C_Login
     * @static
     * @param {HotfixMessage.IR2C_Login} m R2C_Login message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    R2C_Login.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.Address != null && Object.hasOwnProperty.call(m, "Address")) w.uint32(10).string(m.Address);
      if (m.Key != null && Object.hasOwnProperty.call(m, "Key")) w.uint32(18).string(m.Key);
      if (m.userid != null && Object.hasOwnProperty.call(m, "userid")) w.uint32(24).int32(m.userid);
      if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId")) w.uint32(720).int32(m.RpcId);
      if (m.Error != null && Object.hasOwnProperty.call(m, "Error")) w.uint32(728).int32(m.Error);
      if (m.Message != null && Object.hasOwnProperty.call(m, "Message")) w.uint32(738).string(m.Message);
      return w;
    };
    /**
     * Decodes a R2C_Login message from the specified reader or buffer.
     * @function decode
     * @memberof HotfixMessage.R2C_Login
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {HotfixMessage.R2C_Login} R2C_Login
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    R2C_Login.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
          m = new $root.HotfixMessage.R2C_Login();

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
            m.Address = r.string();
            break;

          case 2:
            m.Key = r.string();
            break;

          case 3:
            m.userid = r.int32();
            break;

          default:
            r.skipType(t & 7);
            break;
        }
      }

      return m;
    };

    return R2C_Login;
  }();

  HotfixMessage.C2G_LoginGate = function () {
    /**
     * Properties of a C2G_LoginGate.
     * @memberof HotfixMessage
     * @interface IC2G_LoginGate
     * @property {number|null} [RpcId] C2G_LoginGate RpcId
     * @property {string|null} [Key] C2G_LoginGate Key
     * @property {number|null} [userid] C2G_LoginGate userid
     */

    /**
     * Constructs a new C2G_LoginGate.
     * @memberof HotfixMessage
     * @classdesc Represents a C2G_LoginGate.
     * @implements IC2G_LoginGate
     * @constructor
     * @param {HotfixMessage.IC2G_LoginGate=} [p] Properties to set
     */
    function C2G_LoginGate(p) {
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) {
        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
    }
    /**
     * C2G_LoginGate RpcId.
     * @member {number} RpcId
     * @memberof HotfixMessage.C2G_LoginGate
     * @instance
     */


    C2G_LoginGate.prototype.RpcId = 0;
    /**
     * C2G_LoginGate Key.
     * @member {string} Key
     * @memberof HotfixMessage.C2G_LoginGate
     * @instance
     */

    C2G_LoginGate.prototype.Key = "";
    /**
     * C2G_LoginGate userid.
     * @member {number} userid
     * @memberof HotfixMessage.C2G_LoginGate
     * @instance
     */

    C2G_LoginGate.prototype.userid = 0;
    /**
     * Creates a new C2G_LoginGate instance using the specified properties.
     * @function create
     * @memberof HotfixMessage.C2G_LoginGate
     * @static
     * @param {HotfixMessage.IC2G_LoginGate=} [properties] Properties to set
     * @returns {HotfixMessage.C2G_LoginGate} C2G_LoginGate instance
     */

    C2G_LoginGate.create = function create(properties) {
      return new C2G_LoginGate(properties);
    };
    /**
     * Encodes the specified C2G_LoginGate message. Does not implicitly {@link HotfixMessage.C2G_LoginGate.verify|verify} messages.
     * @function encode
     * @memberof HotfixMessage.C2G_LoginGate
     * @static
     * @param {HotfixMessage.IC2G_LoginGate} m C2G_LoginGate message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    C2G_LoginGate.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.Key != null && Object.hasOwnProperty.call(m, "Key")) w.uint32(10).string(m.Key);
      if (m.userid != null && Object.hasOwnProperty.call(m, "userid")) w.uint32(24).int32(m.userid);
      if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId")) w.uint32(720).int32(m.RpcId);
      return w;
    };
    /**
     * Decodes a C2G_LoginGate message from the specified reader or buffer.
     * @function decode
     * @memberof HotfixMessage.C2G_LoginGate
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {HotfixMessage.C2G_LoginGate} C2G_LoginGate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    C2G_LoginGate.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
          m = new $root.HotfixMessage.C2G_LoginGate();

      while (r.pos < c) {
        var t = r.uint32();

        switch (t >>> 3) {
          case 90:
            m.RpcId = r.int32();
            break;

          case 1:
            m.Key = r.string();
            break;

          case 3:
            m.userid = r.int32();
            break;

          default:
            r.skipType(t & 7);
            break;
        }
      }

      return m;
    };

    return C2G_LoginGate;
  }();

  HotfixMessage.G2C_LoginGate = function () {
    /**
     * Properties of a G2C_LoginGate.
     * @memberof HotfixMessage
     * @interface IG2C_LoginGate
     * @property {number|null} [RpcId] G2C_LoginGate RpcId
     * @property {number|null} [Error] G2C_LoginGate Error
     * @property {string|null} [Message] G2C_LoginGate Message
     * @property {Long|null} [PlayerId] G2C_LoginGate PlayerId
     */

    /**
     * Constructs a new G2C_LoginGate.
     * @memberof HotfixMessage
     * @classdesc Represents a G2C_LoginGate.
     * @implements IG2C_LoginGate
     * @constructor
     * @param {HotfixMessage.IG2C_LoginGate=} [p] Properties to set
     */
    function G2C_LoginGate(p) {
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) {
        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
    }
    /**
     * G2C_LoginGate RpcId.
     * @member {number} RpcId
     * @memberof HotfixMessage.G2C_LoginGate
     * @instance
     */


    G2C_LoginGate.prototype.RpcId = 0;
    /**
     * G2C_LoginGate Error.
     * @member {number} Error
     * @memberof HotfixMessage.G2C_LoginGate
     * @instance
     */

    G2C_LoginGate.prototype.Error = 0;
    /**
     * G2C_LoginGate Message.
     * @member {string} Message
     * @memberof HotfixMessage.G2C_LoginGate
     * @instance
     */

    G2C_LoginGate.prototype.Message = "";
    /**
     * G2C_LoginGate PlayerId.
     * @member {Long} PlayerId
     * @memberof HotfixMessage.G2C_LoginGate
     * @instance
     */

    G2C_LoginGate.prototype.PlayerId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
    /**
     * Creates a new G2C_LoginGate instance using the specified properties.
     * @function create
     * @memberof HotfixMessage.G2C_LoginGate
     * @static
     * @param {HotfixMessage.IG2C_LoginGate=} [properties] Properties to set
     * @returns {HotfixMessage.G2C_LoginGate} G2C_LoginGate instance
     */

    G2C_LoginGate.create = function create(properties) {
      return new G2C_LoginGate(properties);
    };
    /**
     * Encodes the specified G2C_LoginGate message. Does not implicitly {@link HotfixMessage.G2C_LoginGate.verify|verify} messages.
     * @function encode
     * @memberof HotfixMessage.G2C_LoginGate
     * @static
     * @param {HotfixMessage.IG2C_LoginGate} m G2C_LoginGate message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    G2C_LoginGate.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.PlayerId != null && Object.hasOwnProperty.call(m, "PlayerId")) w.uint32(8).int64(m.PlayerId);
      if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId")) w.uint32(720).int32(m.RpcId);
      if (m.Error != null && Object.hasOwnProperty.call(m, "Error")) w.uint32(728).int32(m.Error);
      if (m.Message != null && Object.hasOwnProperty.call(m, "Message")) w.uint32(738).string(m.Message);
      return w;
    };
    /**
     * Decodes a G2C_LoginGate message from the specified reader or buffer.
     * @function decode
     * @memberof HotfixMessage.G2C_LoginGate
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {HotfixMessage.G2C_LoginGate} G2C_LoginGate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    G2C_LoginGate.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
          m = new $root.HotfixMessage.G2C_LoginGate();

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
            m.PlayerId = r.int64();
            break;

          default:
            r.skipType(t & 7);
            break;
        }
      }

      return m;
    };

    return G2C_LoginGate;
  }();

  HotfixMessage.G2C_TestHotfixMessage = function () {
    /**
     * Properties of a G2C_TestHotfixMessage.
     * @memberof HotfixMessage
     * @interface IG2C_TestHotfixMessage
     * @property {string|null} [Info] G2C_TestHotfixMessage Info
     */

    /**
     * Constructs a new G2C_TestHotfixMessage.
     * @memberof HotfixMessage
     * @classdesc Represents a G2C_TestHotfixMessage.
     * @implements IG2C_TestHotfixMessage
     * @constructor
     * @param {HotfixMessage.IG2C_TestHotfixMessage=} [p] Properties to set
     */
    function G2C_TestHotfixMessage(p) {
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) {
        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
    }
    /**
     * G2C_TestHotfixMessage Info.
     * @member {string} Info
     * @memberof HotfixMessage.G2C_TestHotfixMessage
     * @instance
     */


    G2C_TestHotfixMessage.prototype.Info = "";
    /**
     * Creates a new G2C_TestHotfixMessage instance using the specified properties.
     * @function create
     * @memberof HotfixMessage.G2C_TestHotfixMessage
     * @static
     * @param {HotfixMessage.IG2C_TestHotfixMessage=} [properties] Properties to set
     * @returns {HotfixMessage.G2C_TestHotfixMessage} G2C_TestHotfixMessage instance
     */

    G2C_TestHotfixMessage.create = function create(properties) {
      return new G2C_TestHotfixMessage(properties);
    };
    /**
     * Encodes the specified G2C_TestHotfixMessage message. Does not implicitly {@link HotfixMessage.G2C_TestHotfixMessage.verify|verify} messages.
     * @function encode
     * @memberof HotfixMessage.G2C_TestHotfixMessage
     * @static
     * @param {HotfixMessage.IG2C_TestHotfixMessage} m G2C_TestHotfixMessage message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    G2C_TestHotfixMessage.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.Info != null && Object.hasOwnProperty.call(m, "Info")) w.uint32(10).string(m.Info);
      return w;
    };
    /**
     * Decodes a G2C_TestHotfixMessage message from the specified reader or buffer.
     * @function decode
     * @memberof HotfixMessage.G2C_TestHotfixMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {HotfixMessage.G2C_TestHotfixMessage} G2C_TestHotfixMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    G2C_TestHotfixMessage.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
          m = new $root.HotfixMessage.G2C_TestHotfixMessage();

      while (r.pos < c) {
        var t = r.uint32();

        switch (t >>> 3) {
          case 1:
            m.Info = r.string();
            break;

          default:
            r.skipType(t & 7);
            break;
        }
      }

      return m;
    };

    return G2C_TestHotfixMessage;
  }();

  HotfixMessage.C2M_TestActorRequest = function () {
    /**
     * Properties of a C2M_TestActorRequest.
     * @memberof HotfixMessage
     * @interface IC2M_TestActorRequest
     * @property {number|null} [RpcId] C2M_TestActorRequest RpcId
     * @property {Long|null} [ActorId] C2M_TestActorRequest ActorId
     * @property {string|null} [Info] C2M_TestActorRequest Info
     */

    /**
     * Constructs a new C2M_TestActorRequest.
     * @memberof HotfixMessage
     * @classdesc Represents a C2M_TestActorRequest.
     * @implements IC2M_TestActorRequest
     * @constructor
     * @param {HotfixMessage.IC2M_TestActorRequest=} [p] Properties to set
     */
    function C2M_TestActorRequest(p) {
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) {
        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
    }
    /**
     * C2M_TestActorRequest RpcId.
     * @member {number} RpcId
     * @memberof HotfixMessage.C2M_TestActorRequest
     * @instance
     */


    C2M_TestActorRequest.prototype.RpcId = 0;
    /**
     * C2M_TestActorRequest ActorId.
     * @member {Long} ActorId
     * @memberof HotfixMessage.C2M_TestActorRequest
     * @instance
     */

    C2M_TestActorRequest.prototype.ActorId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
    /**
     * C2M_TestActorRequest Info.
     * @member {string} Info
     * @memberof HotfixMessage.C2M_TestActorRequest
     * @instance
     */

    C2M_TestActorRequest.prototype.Info = "";
    /**
     * Creates a new C2M_TestActorRequest instance using the specified properties.
     * @function create
     * @memberof HotfixMessage.C2M_TestActorRequest
     * @static
     * @param {HotfixMessage.IC2M_TestActorRequest=} [properties] Properties to set
     * @returns {HotfixMessage.C2M_TestActorRequest} C2M_TestActorRequest instance
     */

    C2M_TestActorRequest.create = function create(properties) {
      return new C2M_TestActorRequest(properties);
    };
    /**
     * Encodes the specified C2M_TestActorRequest message. Does not implicitly {@link HotfixMessage.C2M_TestActorRequest.verify|verify} messages.
     * @function encode
     * @memberof HotfixMessage.C2M_TestActorRequest
     * @static
     * @param {HotfixMessage.IC2M_TestActorRequest} m C2M_TestActorRequest message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    C2M_TestActorRequest.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.Info != null && Object.hasOwnProperty.call(m, "Info")) w.uint32(10).string(m.Info);
      if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId")) w.uint32(720).int32(m.RpcId);
      if (m.ActorId != null && Object.hasOwnProperty.call(m, "ActorId")) w.uint32(728).int64(m.ActorId);
      return w;
    };
    /**
     * Decodes a C2M_TestActorRequest message from the specified reader or buffer.
     * @function decode
     * @memberof HotfixMessage.C2M_TestActorRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {HotfixMessage.C2M_TestActorRequest} C2M_TestActorRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    C2M_TestActorRequest.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
          m = new $root.HotfixMessage.C2M_TestActorRequest();

      while (r.pos < c) {
        var t = r.uint32();

        switch (t >>> 3) {
          case 90:
            m.RpcId = r.int32();
            break;

          case 91:
            m.ActorId = r.int64();
            break;

          case 1:
            m.Info = r.string();
            break;

          default:
            r.skipType(t & 7);
            break;
        }
      }

      return m;
    };

    return C2M_TestActorRequest;
  }();

  HotfixMessage.M2C_TestActorResponse = function () {
    /**
     * Properties of a M2C_TestActorResponse.
     * @memberof HotfixMessage
     * @interface IM2C_TestActorResponse
     * @property {number|null} [RpcId] M2C_TestActorResponse RpcId
     * @property {number|null} [Error] M2C_TestActorResponse Error
     * @property {string|null} [Message] M2C_TestActorResponse Message
     * @property {string|null} [Info] M2C_TestActorResponse Info
     */

    /**
     * Constructs a new M2C_TestActorResponse.
     * @memberof HotfixMessage
     * @classdesc Represents a M2C_TestActorResponse.
     * @implements IM2C_TestActorResponse
     * @constructor
     * @param {HotfixMessage.IM2C_TestActorResponse=} [p] Properties to set
     */
    function M2C_TestActorResponse(p) {
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) {
        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
    }
    /**
     * M2C_TestActorResponse RpcId.
     * @member {number} RpcId
     * @memberof HotfixMessage.M2C_TestActorResponse
     * @instance
     */


    M2C_TestActorResponse.prototype.RpcId = 0;
    /**
     * M2C_TestActorResponse Error.
     * @member {number} Error
     * @memberof HotfixMessage.M2C_TestActorResponse
     * @instance
     */

    M2C_TestActorResponse.prototype.Error = 0;
    /**
     * M2C_TestActorResponse Message.
     * @member {string} Message
     * @memberof HotfixMessage.M2C_TestActorResponse
     * @instance
     */

    M2C_TestActorResponse.prototype.Message = "";
    /**
     * M2C_TestActorResponse Info.
     * @member {string} Info
     * @memberof HotfixMessage.M2C_TestActorResponse
     * @instance
     */

    M2C_TestActorResponse.prototype.Info = "";
    /**
     * Creates a new M2C_TestActorResponse instance using the specified properties.
     * @function create
     * @memberof HotfixMessage.M2C_TestActorResponse
     * @static
     * @param {HotfixMessage.IM2C_TestActorResponse=} [properties] Properties to set
     * @returns {HotfixMessage.M2C_TestActorResponse} M2C_TestActorResponse instance
     */

    M2C_TestActorResponse.create = function create(properties) {
      return new M2C_TestActorResponse(properties);
    };
    /**
     * Encodes the specified M2C_TestActorResponse message. Does not implicitly {@link HotfixMessage.M2C_TestActorResponse.verify|verify} messages.
     * @function encode
     * @memberof HotfixMessage.M2C_TestActorResponse
     * @static
     * @param {HotfixMessage.IM2C_TestActorResponse} m M2C_TestActorResponse message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    M2C_TestActorResponse.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.Info != null && Object.hasOwnProperty.call(m, "Info")) w.uint32(10).string(m.Info);
      if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId")) w.uint32(720).int32(m.RpcId);
      if (m.Error != null && Object.hasOwnProperty.call(m, "Error")) w.uint32(728).int32(m.Error);
      if (m.Message != null && Object.hasOwnProperty.call(m, "Message")) w.uint32(738).string(m.Message);
      return w;
    };
    /**
     * Decodes a M2C_TestActorResponse message from the specified reader or buffer.
     * @function decode
     * @memberof HotfixMessage.M2C_TestActorResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {HotfixMessage.M2C_TestActorResponse} M2C_TestActorResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    M2C_TestActorResponse.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
          m = new $root.HotfixMessage.M2C_TestActorResponse();

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
            m.Info = r.string();
            break;

          default:
            r.skipType(t & 7);
            break;
        }
      }

      return m;
    };

    return M2C_TestActorResponse;
  }();

  HotfixMessage.PlayerInfo = function () {
    /**
     * Properties of a PlayerInfo.
     * @memberof HotfixMessage
     * @interface IPlayerInfo
     * @property {number|null} [RpcId] PlayerInfo RpcId
     */

    /**
     * Constructs a new PlayerInfo.
     * @memberof HotfixMessage
     * @classdesc Represents a PlayerInfo.
     * @implements IPlayerInfo
     * @constructor
     * @param {HotfixMessage.IPlayerInfo=} [p] Properties to set
     */
    function PlayerInfo(p) {
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) {
        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
    }
    /**
     * PlayerInfo RpcId.
     * @member {number} RpcId
     * @memberof HotfixMessage.PlayerInfo
     * @instance
     */


    PlayerInfo.prototype.RpcId = 0;
    /**
     * Creates a new PlayerInfo instance using the specified properties.
     * @function create
     * @memberof HotfixMessage.PlayerInfo
     * @static
     * @param {HotfixMessage.IPlayerInfo=} [properties] Properties to set
     * @returns {HotfixMessage.PlayerInfo} PlayerInfo instance
     */

    PlayerInfo.create = function create(properties) {
      return new PlayerInfo(properties);
    };
    /**
     * Encodes the specified PlayerInfo message. Does not implicitly {@link HotfixMessage.PlayerInfo.verify|verify} messages.
     * @function encode
     * @memberof HotfixMessage.PlayerInfo
     * @static
     * @param {HotfixMessage.IPlayerInfo} m PlayerInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    PlayerInfo.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId")) w.uint32(720).int32(m.RpcId);
      return w;
    };
    /**
     * Decodes a PlayerInfo message from the specified reader or buffer.
     * @function decode
     * @memberof HotfixMessage.PlayerInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {HotfixMessage.PlayerInfo} PlayerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    PlayerInfo.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
          m = new $root.HotfixMessage.PlayerInfo();

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

    return PlayerInfo;
  }();

  HotfixMessage.C2G_PlayerInfo = function () {
    /**
     * Properties of a C2G_PlayerInfo.
     * @memberof HotfixMessage
     * @interface IC2G_PlayerInfo
     * @property {number|null} [RpcId] C2G_PlayerInfo RpcId
     */

    /**
     * Constructs a new C2G_PlayerInfo.
     * @memberof HotfixMessage
     * @classdesc Represents a C2G_PlayerInfo.
     * @implements IC2G_PlayerInfo
     * @constructor
     * @param {HotfixMessage.IC2G_PlayerInfo=} [p] Properties to set
     */
    function C2G_PlayerInfo(p) {
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) {
        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
    }
    /**
     * C2G_PlayerInfo RpcId.
     * @member {number} RpcId
     * @memberof HotfixMessage.C2G_PlayerInfo
     * @instance
     */


    C2G_PlayerInfo.prototype.RpcId = 0;
    /**
     * Creates a new C2G_PlayerInfo instance using the specified properties.
     * @function create
     * @memberof HotfixMessage.C2G_PlayerInfo
     * @static
     * @param {HotfixMessage.IC2G_PlayerInfo=} [properties] Properties to set
     * @returns {HotfixMessage.C2G_PlayerInfo} C2G_PlayerInfo instance
     */

    C2G_PlayerInfo.create = function create(properties) {
      return new C2G_PlayerInfo(properties);
    };
    /**
     * Encodes the specified C2G_PlayerInfo message. Does not implicitly {@link HotfixMessage.C2G_PlayerInfo.verify|verify} messages.
     * @function encode
     * @memberof HotfixMessage.C2G_PlayerInfo
     * @static
     * @param {HotfixMessage.IC2G_PlayerInfo} m C2G_PlayerInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    C2G_PlayerInfo.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId")) w.uint32(720).int32(m.RpcId);
      return w;
    };
    /**
     * Decodes a C2G_PlayerInfo message from the specified reader or buffer.
     * @function decode
     * @memberof HotfixMessage.C2G_PlayerInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {HotfixMessage.C2G_PlayerInfo} C2G_PlayerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    C2G_PlayerInfo.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
          m = new $root.HotfixMessage.C2G_PlayerInfo();

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

    return C2G_PlayerInfo;
  }();

  HotfixMessage.G2C_PlayerInfo = function () {
    /**
     * Properties of a G2C_PlayerInfo.
     * @memberof HotfixMessage
     * @interface IG2C_PlayerInfo
     * @property {number|null} [RpcId] G2C_PlayerInfo RpcId
     * @property {number|null} [Error] G2C_PlayerInfo Error
     * @property {string|null} [Message] G2C_PlayerInfo Message
     * @property {HotfixMessage.IPlayerInfo|null} [PlayerInfo] G2C_PlayerInfo PlayerInfo
     * @property {Array.<HotfixMessage.IPlayerInfo>|null} [PlayerInfos] G2C_PlayerInfo PlayerInfos
     * @property {Array.<string>|null} [TestRepeatedString] G2C_PlayerInfo TestRepeatedString
     * @property {Array.<number>|null} [TestRepeatedInt32] G2C_PlayerInfo TestRepeatedInt32
     */

    /**
     * Constructs a new G2C_PlayerInfo.
     * @memberof HotfixMessage
     * @classdesc Represents a G2C_PlayerInfo.
     * @implements IG2C_PlayerInfo
     * @constructor
     * @param {HotfixMessage.IG2C_PlayerInfo=} [p] Properties to set
     */
    function G2C_PlayerInfo(p) {
      this.PlayerInfos = [];
      this.TestRepeatedString = [];
      this.TestRepeatedInt32 = [];
      if (p) for (var ks = Object.keys(p), i = 0; i < ks.length; ++i) {
        if (p[ks[i]] != null) this[ks[i]] = p[ks[i]];
      }
    }
    /**
     * G2C_PlayerInfo RpcId.
     * @member {number} RpcId
     * @memberof HotfixMessage.G2C_PlayerInfo
     * @instance
     */


    G2C_PlayerInfo.prototype.RpcId = 0;
    /**
     * G2C_PlayerInfo Error.
     * @member {number} Error
     * @memberof HotfixMessage.G2C_PlayerInfo
     * @instance
     */

    G2C_PlayerInfo.prototype.Error = 0;
    /**
     * G2C_PlayerInfo Message.
     * @member {string} Message
     * @memberof HotfixMessage.G2C_PlayerInfo
     * @instance
     */

    G2C_PlayerInfo.prototype.Message = "";
    /**
     * G2C_PlayerInfo PlayerInfo.
     * @member {HotfixMessage.IPlayerInfo|null|undefined} PlayerInfo
     * @memberof HotfixMessage.G2C_PlayerInfo
     * @instance
     */

    G2C_PlayerInfo.prototype.PlayerInfo = null;
    /**
     * G2C_PlayerInfo PlayerInfos.
     * @member {Array.<HotfixMessage.IPlayerInfo>} PlayerInfos
     * @memberof HotfixMessage.G2C_PlayerInfo
     * @instance
     */

    G2C_PlayerInfo.prototype.PlayerInfos = $util.emptyArray;
    /**
     * G2C_PlayerInfo TestRepeatedString.
     * @member {Array.<string>} TestRepeatedString
     * @memberof HotfixMessage.G2C_PlayerInfo
     * @instance
     */

    G2C_PlayerInfo.prototype.TestRepeatedString = $util.emptyArray;
    /**
     * G2C_PlayerInfo TestRepeatedInt32.
     * @member {Array.<number>} TestRepeatedInt32
     * @memberof HotfixMessage.G2C_PlayerInfo
     * @instance
     */

    G2C_PlayerInfo.prototype.TestRepeatedInt32 = $util.emptyArray;
    /**
     * Creates a new G2C_PlayerInfo instance using the specified properties.
     * @function create
     * @memberof HotfixMessage.G2C_PlayerInfo
     * @static
     * @param {HotfixMessage.IG2C_PlayerInfo=} [properties] Properties to set
     * @returns {HotfixMessage.G2C_PlayerInfo} G2C_PlayerInfo instance
     */

    G2C_PlayerInfo.create = function create(properties) {
      return new G2C_PlayerInfo(properties);
    };
    /**
     * Encodes the specified G2C_PlayerInfo message. Does not implicitly {@link HotfixMessage.G2C_PlayerInfo.verify|verify} messages.
     * @function encode
     * @memberof HotfixMessage.G2C_PlayerInfo
     * @static
     * @param {HotfixMessage.IG2C_PlayerInfo} m G2C_PlayerInfo message or plain object to encode
     * @param {$protobuf.Writer} [w] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */


    G2C_PlayerInfo.encode = function encode(m, w) {
      if (!w) w = $Writer.create();
      if (m.PlayerInfo != null && Object.hasOwnProperty.call(m, "PlayerInfo")) $root.HotfixMessage.PlayerInfo.encode(m.PlayerInfo, w.uint32(10).fork()).ldelim();

      if (m.PlayerInfos != null && m.PlayerInfos.length) {
        for (var i = 0; i < m.PlayerInfos.length; ++i) {
          $root.HotfixMessage.PlayerInfo.encode(m.PlayerInfos[i], w.uint32(18).fork()).ldelim();
        }
      }

      if (m.TestRepeatedString != null && m.TestRepeatedString.length) {
        for (var i = 0; i < m.TestRepeatedString.length; ++i) {
          w.uint32(26).string(m.TestRepeatedString[i]);
        }
      }

      if (m.TestRepeatedInt32 != null && m.TestRepeatedInt32.length) {
        w.uint32(34).fork();

        for (var i = 0; i < m.TestRepeatedInt32.length; ++i) {
          w.int32(m.TestRepeatedInt32[i]);
        }

        w.ldelim();
      }

      if (m.RpcId != null && Object.hasOwnProperty.call(m, "RpcId")) w.uint32(720).int32(m.RpcId);
      if (m.Error != null && Object.hasOwnProperty.call(m, "Error")) w.uint32(728).int32(m.Error);
      if (m.Message != null && Object.hasOwnProperty.call(m, "Message")) w.uint32(738).string(m.Message);
      return w;
    };
    /**
     * Decodes a G2C_PlayerInfo message from the specified reader or buffer.
     * @function decode
     * @memberof HotfixMessage.G2C_PlayerInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
     * @param {number} [l] Message length if known beforehand
     * @returns {HotfixMessage.G2C_PlayerInfo} G2C_PlayerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */


    G2C_PlayerInfo.decode = function decode(r, l) {
      if (!(r instanceof $Reader)) r = $Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
          m = new $root.HotfixMessage.G2C_PlayerInfo();

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
            m.PlayerInfo = $root.HotfixMessage.PlayerInfo.decode(r, r.uint32());
            break;

          case 2:
            if (!(m.PlayerInfos && m.PlayerInfos.length)) m.PlayerInfos = [];
            m.PlayerInfos.push($root.HotfixMessage.PlayerInfo.decode(r, r.uint32()));
            break;

          case 3:
            if (!(m.TestRepeatedString && m.TestRepeatedString.length)) m.TestRepeatedString = [];
            m.TestRepeatedString.push(r.string());
            break;

          case 4:
            if (!(m.TestRepeatedInt32 && m.TestRepeatedInt32.length)) m.TestRepeatedInt32 = [];

            if ((t & 7) === 2) {
              var c2 = r.uint32() + r.pos;

              while (r.pos < c2) {
                m.TestRepeatedInt32.push(r.int32());
              }
            } else m.TestRepeatedInt32.push(r.int32());

            break;

          default:
            r.skipType(t & 7);
            break;
        }
      }

      return m;
    };

    return G2C_PlayerInfo;
  }();

  return HotfixMessage;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFx1dGlsc1xcbGliXFxwcm90b1xcSG90Zml4TWVzc2FnZS5wYi5qcyJdLCJuYW1lcyI6WyJwcm90b2J1ZiIsInJlcXVpcmUiLCIkUmVhZGVyIiwiUmVhZGVyIiwiJFdyaXRlciIsIldyaXRlciIsIiR1dGlsIiwidXRpbCIsIiRyb290Iiwicm9vdHMiLCJIb3RmaXhNZXNzYWdlIiwiQzJSX0xvZ2luIiwicCIsImtzIiwiT2JqZWN0Iiwia2V5cyIsImkiLCJsZW5ndGgiLCJwcm90b3R5cGUiLCJScGNJZCIsIkFjY291bnQiLCJQYXNzd29yZCIsImNyZWF0ZSIsInByb3BlcnRpZXMiLCJlbmNvZGUiLCJtIiwidyIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInVpbnQzMiIsInN0cmluZyIsImludDMyIiwiZGVjb2RlIiwiciIsImwiLCJjIiwidW5kZWZpbmVkIiwibGVuIiwicG9zIiwidCIsInNraXBUeXBlIiwiUjJDX0xvZ2luIiwiRXJyb3IiLCJNZXNzYWdlIiwiQWRkcmVzcyIsIktleSIsInVzZXJpZCIsIkMyR19Mb2dpbkdhdGUiLCJHMkNfTG9naW5HYXRlIiwiUGxheWVySWQiLCJMb25nIiwiZnJvbUJpdHMiLCJpbnQ2NCIsIkcyQ19UZXN0SG90Zml4TWVzc2FnZSIsIkluZm8iLCJDMk1fVGVzdEFjdG9yUmVxdWVzdCIsIkFjdG9ySWQiLCJNMkNfVGVzdEFjdG9yUmVzcG9uc2UiLCJQbGF5ZXJJbmZvIiwiQzJHX1BsYXllckluZm8iLCJHMkNfUGxheWVySW5mbyIsIlBsYXllckluZm9zIiwiVGVzdFJlcGVhdGVkU3RyaW5nIiwiVGVzdFJlcGVhdGVkSW50MzIiLCJlbXB0eUFycmF5IiwiZm9yayIsImxkZWxpbSIsInB1c2giLCJjMiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsSUFBSUEsUUFBUSxHQUFHQyxPQUFPLENBQUMs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Q3FCLEVBQXRCOztBQXN3Q0EyRCxNQUFNLENBQUNDLE9BQVAsR0FBaUI5RCxLQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyplc2xpbnQtZGlzYWJsZSBibG9jay1zY29wZWQtdmFyLCBpZC1sZW5ndGgsIG5vLWNvbnRyb2wtcmVnZXgsIG5vLW1hZ2ljLW51bWJlcnMsIG5vLXByb3RvdHlwZS1idWlsdGlucywgbm8tcmVkZWNsYXJlLCBuby1zaGFkb3csIG5vLXZhciwgc29ydC12YXJzKi9cblwidXNlIHN0cmljdFwiO1xudmFyIHByb3RvYnVmID0gcmVxdWlyZShcInByb3RvYnVmanNcIik7XG4vLyBDb21tb24gYWxpYXNlc1xudmFyICRSZWFkZXIgPSBwcm90b2J1Zi5SZWFkZXIsICRXcml0ZXIgPSBwcm90b2J1Zi5Xcml0ZXIsICR1dGlsID0gcHJvdG9idWYudXRpbDtcblxuLy8gRXhwb3J0ZWQgcm9vdCBuYW1lc3BhY2VcbnZhciAkcm9vdCA9IHByb3RvYnVmLnJvb3RzW1wiZGVmYXVsdFwiXSB8fCAocHJvdG9idWYucm9vdHNbXCJkZWZhdWx0XCJdID0ge30pO1xuXG4kcm9vdC5Ib3RmaXhNZXNzYWdlID0gKGZ1bmN0aW9uICgpIHtcblxuICAgIC8qKlxuICAgICAqIE5hbWVzcGFjZSBIb3RmaXhNZXNzYWdlLlxuICAgICAqIEBleHBvcnRzIEhvdGZpeE1lc3NhZ2VcbiAgICAgKiBAbmFtZXNwYWNlXG4gICAgICovXG4gICAgdmFyIEhvdGZpeE1lc3NhZ2UgPSB7fTtcblxuICAgIEhvdGZpeE1lc3NhZ2UuQzJSX0xvZ2luID0gKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvcGVydGllcyBvZiBhIEMyUl9Mb2dpbi5cbiAgICAgICAgICogQG1lbWJlcm9mIEhvdGZpeE1lc3NhZ2VcbiAgICAgICAgICogQGludGVyZmFjZSBJQzJSX0xvZ2luXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfG51bGx9IFtScGNJZF0gQzJSX0xvZ2luIFJwY0lkXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bGx9IFtBY2NvdW50XSBDMlJfTG9naW4gQWNjb3VudFxuICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSBbUGFzc3dvcmRdIEMyUl9Mb2dpbiBQYXNzd29yZFxuICAgICAgICAgKi9cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29uc3RydWN0cyBhIG5ldyBDMlJfTG9naW4uXG4gICAgICAgICAqIEBtZW1iZXJvZiBIb3RmaXhNZXNzYWdlXG4gICAgICAgICAqIEBjbGFzc2Rlc2MgUmVwcmVzZW50cyBhIEMyUl9Mb2dpbi5cbiAgICAgICAgICogQGltcGxlbWVudHMgSUMyUl9Mb2dpblxuICAgICAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgICAgICogQHBhcmFtIHtIb3RmaXhNZXNzYWdlLklDMlJfTG9naW49fSBbcF0gUHJvcGVydGllcyB0byBzZXRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIEMyUl9Mb2dpbihwKSB7XG4gICAgICAgICAgICBpZiAocClcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrcyA9IE9iamVjdC5rZXlzKHApLCBpID0gMDsgaSA8IGtzLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgICAgICAgICBpZiAocFtrc1tpXV0gIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNba3NbaV1dID0gcFtrc1tpXV07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQzJSX0xvZ2luIFJwY0lkLlxuICAgICAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFJwY0lkXG4gICAgICAgICAqIEBtZW1iZXJvZiBIb3RmaXhNZXNzYWdlLkMyUl9Mb2dpblxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIEMyUl9Mb2dpbi5wcm90b3R5cGUuUnBjSWQgPSAwO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDMlJfTG9naW4gQWNjb3VudC5cbiAgICAgICAgICogQG1lbWJlciB7c3RyaW5nfSBBY2NvdW50XG4gICAgICAgICAqIEBtZW1iZXJvZiBIb3RmaXhNZXNzYWdlLkMyUl9Mb2dpblxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIEMyUl9Mb2dpbi5wcm90b3R5cGUuQWNjb3VudCA9IFwiXCI7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEMyUl9Mb2dpbiBQYXNzd29yZC5cbiAgICAgICAgICogQG1lbWJlciB7c3RyaW5nfSBQYXNzd29yZFxuICAgICAgICAgKiBAbWVtYmVyb2YgSG90Zml4TWVzc2FnZS5DMlJfTG9naW5cbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBDMlJfTG9naW4ucHJvdG90eXBlLlBhc3N3b3JkID0gXCJcIjtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyBhIG5ldyBDMlJfTG9naW4gaW5zdGFuY2UgdXNpbmcgdGhlIHNwZWNpZmllZCBwcm9wZXJ0aWVzLlxuICAgICAgICAgKiBAZnVuY3Rpb24gY3JlYXRlXG4gICAgICAgICAqIEBtZW1iZXJvZiBIb3RmaXhNZXNzYWdlLkMyUl9Mb2dpblxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7SG90Zml4TWVzc2FnZS5JQzJSX0xvZ2luPX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XG4gICAgICAgICAqIEByZXR1cm5zIHtIb3RmaXhNZXNzYWdlLkMyUl9Mb2dpbn0gQzJSX0xvZ2luIGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBDMlJfTG9naW4uY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQzJSX0xvZ2luKHByb3BlcnRpZXMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbmNvZGVzIHRoZSBzcGVjaWZpZWQgQzJSX0xvZ2luIG1lc3NhZ2UuIERvZXMgbm90IGltcGxpY2l0bHkge0BsaW5rIEhvdGZpeE1lc3NhZ2UuQzJSX0xvZ2luLnZlcmlmeXx2ZXJpZnl9IG1lc3NhZ2VzLlxuICAgICAgICAgKiBAZnVuY3Rpb24gZW5jb2RlXG4gICAgICAgICAqIEBtZW1iZXJvZiBIb3RmaXhNZXNzYWdlLkMyUl9Mb2dpblxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7SG90Zml4TWVzc2FnZS5JQzJSX0xvZ2lufSBtIEMyUl9Mb2dpbiBtZXNzYWdlIG9yIHBsYWluIG9iamVjdCB0byBlbmNvZGVcbiAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuV3JpdGVyfSBbd10gV3JpdGVyIHRvIGVuY29kZSB0b1xuICAgICAgICAgKiBAcmV0dXJucyB7JHByb3RvYnVmLldyaXRlcn0gV3JpdGVyXG4gICAgICAgICAqL1xuICAgICAgICBDMlJfTG9naW4uZW5jb2RlID0gZnVuY3Rpb24gZW5jb2RlKG0sIHcpIHtcbiAgICAgICAgICAgIGlmICghdylcbiAgICAgICAgICAgICAgICB3ID0gJFdyaXRlci5jcmVhdGUoKTtcbiAgICAgICAgICAgIGlmIChtLkFjY291bnQgIT0gbnVsbCAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtLCBcIkFjY291bnRcIikpXG4gICAgICAgICAgICAgICAgdy51aW50MzIoMTApLnN0cmluZyhtLkFjY291bnQpO1xuICAgICAgICAgICAgaWYgKG0uUGFzc3dvcmQgIT0gbnVsbCAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtLCBcIlBhc3N3b3JkXCIpKVxuICAgICAgICAgICAgICAgIHcudWludDMyKDE4KS5zdHJpbmcobS5QYXNzd29yZCk7XG4gICAgICAgICAgICBpZiAobS5ScGNJZCAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG0sIFwiUnBjSWRcIikpXG4gICAgICAgICAgICAgICAgdy51aW50MzIoNzIwKS5pbnQzMihtLlJwY0lkKTtcbiAgICAgICAgICAgIHJldHVybiB3O1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWNvZGVzIGEgQzJSX0xvZ2luIG1lc3NhZ2UgZnJvbSB0aGUgc3BlY2lmaWVkIHJlYWRlciBvciBidWZmZXIuXG4gICAgICAgICAqIEBmdW5jdGlvbiBkZWNvZGVcbiAgICAgICAgICogQG1lbWJlcm9mIEhvdGZpeE1lc3NhZ2UuQzJSX0xvZ2luXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuUmVhZGVyfFVpbnQ4QXJyYXl9IHIgUmVhZGVyIG9yIGJ1ZmZlciB0byBkZWNvZGUgZnJvbVxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xdIE1lc3NhZ2UgbGVuZ3RoIGlmIGtub3duIGJlZm9yZWhhbmRcbiAgICAgICAgICogQHJldHVybnMge0hvdGZpeE1lc3NhZ2UuQzJSX0xvZ2lufSBDMlJfTG9naW5cbiAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBwYXlsb2FkIGlzIG5vdCBhIHJlYWRlciBvciB2YWxpZCBidWZmZXJcbiAgICAgICAgICogQHRocm93cyB7JHByb3RvYnVmLnV0aWwuUHJvdG9jb2xFcnJvcn0gSWYgcmVxdWlyZWQgZmllbGRzIGFyZSBtaXNzaW5nXG4gICAgICAgICAqL1xuICAgICAgICBDMlJfTG9naW4uZGVjb2RlID0gZnVuY3Rpb24gZGVjb2RlKHIsIGwpIHtcbiAgICAgICAgICAgIGlmICghKHIgaW5zdGFuY2VvZiAkUmVhZGVyKSlcbiAgICAgICAgICAgICAgICByID0gJFJlYWRlci5jcmVhdGUocik7XG4gICAgICAgICAgICB2YXIgYyA9IGwgPT09IHVuZGVmaW5lZCA/IHIubGVuIDogci5wb3MgKyBsLCBtID0gbmV3ICRyb290LkhvdGZpeE1lc3NhZ2UuQzJSX0xvZ2luKCk7XG4gICAgICAgICAgICB3aGlsZSAoci5wb3MgPCBjKSB7XG4gICAgICAgICAgICAgICAgdmFyIHQgPSByLnVpbnQzMigpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodCA+Pj4gMykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDkwOlxuICAgICAgICAgICAgICAgICAgICAgICAgbS5ScGNJZCA9IHIuaW50MzIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBtLkFjY291bnQgPSByLnN0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uUGFzc3dvcmQgPSByLnN0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICByLnNraXBUeXBlKHQgJiA3KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBDMlJfTG9naW47XG4gICAgfSkoKTtcblxuICAgIEhvdGZpeE1lc3NhZ2UuUjJDX0xvZ2luID0gKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvcGVydGllcyBvZiBhIFIyQ19Mb2dpbi5cbiAgICAgICAgICogQG1lbWJlcm9mIEhvdGZpeE1lc3NhZ2VcbiAgICAgICAgICogQGludGVyZmFjZSBJUjJDX0xvZ2luXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfG51bGx9IFtScGNJZF0gUjJDX0xvZ2luIFJwY0lkXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfG51bGx9IFtFcnJvcl0gUjJDX0xvZ2luIEVycm9yXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bGx9IFtNZXNzYWdlXSBSMkNfTG9naW4gTWVzc2FnZVxuICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSBbQWRkcmVzc10gUjJDX0xvZ2luIEFkZHJlc3NcbiAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd8bnVsbH0gW0tleV0gUjJDX0xvZ2luIEtleVxuICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcnxudWxsfSBbdXNlcmlkXSBSMkNfTG9naW4gdXNlcmlkXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb25zdHJ1Y3RzIGEgbmV3IFIyQ19Mb2dpbi5cbiAgICAgICAgICogQG1lbWJlcm9mIEhvdGZpeE1lc3NhZ2VcbiAgICAgICAgICogQGNsYXNzZGVzYyBSZXByZXNlbnRzIGEgUjJDX0xvZ2luLlxuICAgICAgICAgKiBAaW1wbGVtZW50cyBJUjJDX0xvZ2luXG4gICAgICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAgICAgKiBAcGFyYW0ge0hvdGZpeE1lc3NhZ2UuSVIyQ19Mb2dpbj19IFtwXSBQcm9wZXJ0aWVzIHRvIHNldFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gUjJDX0xvZ2luKHApIHtcbiAgICAgICAgICAgIGlmIChwKVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGtzID0gT2JqZWN0LmtleXMocCksIGkgPSAwOyBpIDwga3MubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICAgICAgICAgIGlmIChwW2tzW2ldXSAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trc1tpXV0gPSBwW2tzW2ldXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSMkNfTG9naW4gUnBjSWQuXG4gICAgICAgICAqIEBtZW1iZXIge251bWJlcn0gUnBjSWRcbiAgICAgICAgICogQG1lbWJlcm9mIEhvdGZpeE1lc3NhZ2UuUjJDX0xvZ2luXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgUjJDX0xvZ2luLnByb3RvdHlwZS5ScGNJZCA9IDA7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFIyQ19Mb2dpbiBFcnJvci5cbiAgICAgICAgICogQG1lbWJlciB7bnVtYmVyfSBFcnJvclxuICAgICAgICAgKiBAbWVtYmVyb2YgSG90Zml4TWVzc2FnZS5SMkNfTG9naW5cbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBSMkNfTG9naW4ucHJvdG90eXBlLkVycm9yID0gMDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUjJDX0xvZ2luIE1lc3NhZ2UuXG4gICAgICAgICAqIEBtZW1iZXIge3N0cmluZ30gTWVzc2FnZVxuICAgICAgICAgKiBAbWVtYmVyb2YgSG90Zml4TWVzc2FnZS5SMkNfTG9naW5cbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBSMkNfTG9naW4ucHJvdG90eXBlLk1lc3NhZ2UgPSBcIlwiO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSMkNfTG9naW4gQWRkcmVzcy5cbiAgICAgICAgICogQG1lbWJlciB7c3RyaW5nfSBBZGRyZXNzXG4gICAgICAgICAqIEBtZW1iZXJvZiBIb3RmaXhNZXNzYWdlLlIyQ19Mb2dpblxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIFIyQ19Mb2dpbi5wcm90b3R5cGUuQWRkcmVzcyA9IFwiXCI7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFIyQ19Mb2dpbiBLZXkuXG4gICAgICAgICAqIEBtZW1iZXIge3N0cmluZ30gS2V5XG4gICAgICAgICAqIEBtZW1iZXJvZiBIb3RmaXhNZXNzYWdlLlIyQ19Mb2dpblxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIFIyQ19Mb2dpbi5wcm90b3R5cGUuS2V5ID0gXCJcIjtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUjJDX0xvZ2luIHVzZXJpZC5cbiAgICAgICAgICogQG1lbWJlciB7bnVtYmVyfSB1c2VyaWRcbiAgICAgICAgICogQG1lbWJlcm9mIEhvdGZpeE1lc3NhZ2UuUjJDX0xvZ2luXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgUjJDX0xvZ2luLnByb3RvdHlwZS51c2VyaWQgPSAwO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGEgbmV3IFIyQ19Mb2dpbiBpbnN0YW5jZSB1c2luZyB0aGUgc3BlY2lmaWVkIHByb3BlcnRpZXMuXG4gICAgICAgICAqIEBmdW5jdGlvbiBjcmVhdGVcbiAgICAgICAgICogQG1lbWJlcm9mIEhvdGZpeE1lc3NhZ2UuUjJDX0xvZ2luXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtIb3RmaXhNZXNzYWdlLklSMkNfTG9naW49fSBbcHJvcGVydGllc10gUHJvcGVydGllcyB0byBzZXRcbiAgICAgICAgICogQHJldHVybnMge0hvdGZpeE1lc3NhZ2UuUjJDX0xvZ2lufSBSMkNfTG9naW4gaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIFIyQ19Mb2dpbi5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUocHJvcGVydGllcykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSMkNfTG9naW4ocHJvcGVydGllcyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVuY29kZXMgdGhlIHNwZWNpZmllZCBSMkNfTG9naW4gbWVzc2FnZS4gRG9lcyBub3QgaW1wbGljaXRseSB7QGxpbmsgSG90Zml4TWVzc2FnZS5SMkNfTG9naW4udmVyaWZ5fHZlcmlmeX0gbWVzc2FnZXMuXG4gICAgICAgICAqIEBmdW5jdGlvbiBlbmNvZGVcbiAgICAgICAgICogQG1lbWJlcm9mIEhvdGZpeE1lc3NhZ2UuUjJDX0xvZ2luXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtIb3RmaXhNZXNzYWdlLklSMkNfTG9naW59IG0gUjJDX0xvZ2luIG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxuICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3XSBXcml0ZXIgdG8gZW5jb2RlIHRvXG4gICAgICAgICAqIEByZXR1cm5zIHskcHJvdG9idWYuV3JpdGVyfSBXcml0ZXJcbiAgICAgICAgICovXG4gICAgICAgIFIyQ19Mb2dpbi5lbmNvZGUgPSBmdW5jdGlvbiBlbmNvZGUobSwgdykge1xuICAgICAgICAgICAgaWYgKCF3KVxuICAgICAgICAgICAgICAgIHcgPSAkV3JpdGVyLmNyZWF0ZSgpO1xuICAgICAgICAgICAgaWYgKG0uQWRkcmVzcyAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG0sIFwiQWRkcmVzc1wiKSlcbiAgICAgICAgICAgICAgICB3LnVpbnQzMigxMCkuc3RyaW5nKG0uQWRkcmVzcyk7XG4gICAgICAgICAgICBpZiAobS5LZXkgIT0gbnVsbCAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtLCBcIktleVwiKSlcbiAgICAgICAgICAgICAgICB3LnVpbnQzMigxOCkuc3RyaW5nKG0uS2V5KTtcbiAgICAgICAgICAgIGlmIChtLnVzZXJpZCAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG0sIFwidXNlcmlkXCIpKVxuICAgICAgICAgICAgICAgIHcudWludDMyKDI0KS5pbnQzMihtLnVzZXJpZCk7XG4gICAgICAgICAgICBpZiAobS5ScGNJZCAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG0sIFwiUnBjSWRcIikpXG4gICAgICAgICAgICAgICAgdy51aW50MzIoNzIwKS5pbnQzMihtLlJwY0lkKTtcbiAgICAgICAgICAgIGlmIChtLkVycm9yICE9IG51bGwgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobSwgXCJFcnJvclwiKSlcbiAgICAgICAgICAgICAgICB3LnVpbnQzMig3MjgpLmludDMyKG0uRXJyb3IpO1xuICAgICAgICAgICAgaWYgKG0uTWVzc2FnZSAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG0sIFwiTWVzc2FnZVwiKSlcbiAgICAgICAgICAgICAgICB3LnVpbnQzMig3MzgpLnN0cmluZyhtLk1lc3NhZ2UpO1xuICAgICAgICAgICAgcmV0dXJuIHc7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlY29kZXMgYSBSMkNfTG9naW4gbWVzc2FnZSBmcm9tIHRoZSBzcGVjaWZpZWQgcmVhZGVyIG9yIGJ1ZmZlci5cbiAgICAgICAgICogQGZ1bmN0aW9uIGRlY29kZVxuICAgICAgICAgKiBAbWVtYmVyb2YgSG90Zml4TWVzc2FnZS5SMkNfTG9naW5cbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5SZWFkZXJ8VWludDhBcnJheX0gciBSZWFkZXIgb3IgYnVmZmVyIHRvIGRlY29kZSBmcm9tXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbF0gTWVzc2FnZSBsZW5ndGggaWYga25vd24gYmVmb3JlaGFuZFxuICAgICAgICAgKiBAcmV0dXJucyB7SG90Zml4TWVzc2FnZS5SMkNfTG9naW59IFIyQ19Mb2dpblxuICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHBheWxvYWQgaXMgbm90IGEgcmVhZGVyIG9yIHZhbGlkIGJ1ZmZlclxuICAgICAgICAgKiBAdGhyb3dzIHskcHJvdG9idWYudXRpbC5Qcm90b2NvbEVycm9yfSBJZiByZXF1aXJlZCBmaWVsZHMgYXJlIG1pc3NpbmdcbiAgICAgICAgICovXG4gICAgICAgIFIyQ19Mb2dpbi5kZWNvZGUgPSBmdW5jdGlvbiBkZWNvZGUociwgbCkge1xuICAgICAgICAgICAgaWYgKCEociBpbnN0YW5jZW9mICRSZWFkZXIpKVxuICAgICAgICAgICAgICAgIHIgPSAkUmVhZGVyLmNyZWF0ZShyKTtcbiAgICAgICAgICAgIHZhciBjID0gbCA9PT0gdW5kZWZpbmVkID8gci5sZW4gOiByLnBvcyArIGwsIG0gPSBuZXcgJHJvb3QuSG90Zml4TWVzc2FnZS5SMkNfTG9naW4oKTtcbiAgICAgICAgICAgIHdoaWxlIChyLnBvcyA8IGMpIHtcbiAgICAgICAgICAgICAgICB2YXIgdCA9IHIudWludDMyKCk7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0ID4+PiAzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTA6XG4gICAgICAgICAgICAgICAgICAgICAgICBtLlJwY0lkID0gci5pbnQzMigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTE6XG4gICAgICAgICAgICAgICAgICAgICAgICBtLkVycm9yID0gci5pbnQzMigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTI6XG4gICAgICAgICAgICAgICAgICAgICAgICBtLk1lc3NhZ2UgPSByLnN0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uQWRkcmVzcyA9IHIuc3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgbS5LZXkgPSByLnN0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG0udXNlcmlkID0gci5pbnQzMigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICByLnNraXBUeXBlKHQgJiA3KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBSMkNfTG9naW47XG4gICAgfSkoKTtcblxuICAgIEhvdGZpeE1lc3NhZ2UuQzJHX0xvZ2luR2F0ZSA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByb3BlcnRpZXMgb2YgYSBDMkdfTG9naW5HYXRlLlxuICAgICAgICAgKiBAbWVtYmVyb2YgSG90Zml4TWVzc2FnZVxuICAgICAgICAgKiBAaW50ZXJmYWNlIElDMkdfTG9naW5HYXRlXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfG51bGx9IFtScGNJZF0gQzJHX0xvZ2luR2F0ZSBScGNJZFxuICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSBbS2V5XSBDMkdfTG9naW5HYXRlIEtleVxuICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcnxudWxsfSBbdXNlcmlkXSBDMkdfTG9naW5HYXRlIHVzZXJpZFxuICAgICAgICAgKi9cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29uc3RydWN0cyBhIG5ldyBDMkdfTG9naW5HYXRlLlxuICAgICAgICAgKiBAbWVtYmVyb2YgSG90Zml4TWVzc2FnZVxuICAgICAgICAgKiBAY2xhc3NkZXNjIFJlcHJlc2VudHMgYSBDMkdfTG9naW5HYXRlLlxuICAgICAgICAgKiBAaW1wbGVtZW50cyBJQzJHX0xvZ2luR2F0ZVxuICAgICAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgICAgICogQHBhcmFtIHtIb3RmaXhNZXNzYWdlLklDMkdfTG9naW5HYXRlPX0gW3BdIFByb3BlcnRpZXMgdG8gc2V0XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBDMkdfTG9naW5HYXRlKHApIHtcbiAgICAgICAgICAgIGlmIChwKVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGtzID0gT2JqZWN0LmtleXMocCksIGkgPSAwOyBpIDwga3MubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICAgICAgICAgIGlmIChwW2tzW2ldXSAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trc1tpXV0gPSBwW2tzW2ldXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDMkdfTG9naW5HYXRlIFJwY0lkLlxuICAgICAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFJwY0lkXG4gICAgICAgICAqIEBtZW1iZXJvZiBIb3RmaXhNZXNzYWdlLkMyR19Mb2dpbkdhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBDMkdfTG9naW5HYXRlLnByb3RvdHlwZS5ScGNJZCA9IDA7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEMyR19Mb2dpbkdhdGUgS2V5LlxuICAgICAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IEtleVxuICAgICAgICAgKiBAbWVtYmVyb2YgSG90Zml4TWVzc2FnZS5DMkdfTG9naW5HYXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgQzJHX0xvZ2luR2F0ZS5wcm90b3R5cGUuS2V5ID0gXCJcIjtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQzJHX0xvZ2luR2F0ZSB1c2VyaWQuXG4gICAgICAgICAqIEBtZW1iZXIge251bWJlcn0gdXNlcmlkXG4gICAgICAgICAqIEBtZW1iZXJvZiBIb3RmaXhNZXNzYWdlLkMyR19Mb2dpbkdhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBDMkdfTG9naW5HYXRlLnByb3RvdHlwZS51c2VyaWQgPSAwO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGEgbmV3IEMyR19Mb2dpbkdhdGUgaW5zdGFuY2UgdXNpbmcgdGhlIHNwZWNpZmllZCBwcm9wZXJ0aWVzLlxuICAgICAgICAgKiBAZnVuY3Rpb24gY3JlYXRlXG4gICAgICAgICAqIEBtZW1iZXJvZiBIb3RmaXhNZXNzYWdlLkMyR19Mb2dpbkdhdGVcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge0hvdGZpeE1lc3NhZ2UuSUMyR19Mb2dpbkdhdGU9fSBbcHJvcGVydGllc10gUHJvcGVydGllcyB0byBzZXRcbiAgICAgICAgICogQHJldHVybnMge0hvdGZpeE1lc3NhZ2UuQzJHX0xvZ2luR2F0ZX0gQzJHX0xvZ2luR2F0ZSBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgQzJHX0xvZ2luR2F0ZS5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUocHJvcGVydGllcykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDMkdfTG9naW5HYXRlKHByb3BlcnRpZXMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbmNvZGVzIHRoZSBzcGVjaWZpZWQgQzJHX0xvZ2luR2F0ZSBtZXNzYWdlLiBEb2VzIG5vdCBpbXBsaWNpdGx5IHtAbGluayBIb3RmaXhNZXNzYWdlLkMyR19Mb2dpbkdhdGUudmVyaWZ5fHZlcmlmeX0gbWVzc2FnZXMuXG4gICAgICAgICAqIEBmdW5jdGlvbiBlbmNvZGVcbiAgICAgICAgICogQG1lbWJlcm9mIEhvdGZpeE1lc3NhZ2UuQzJHX0xvZ2luR2F0ZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7SG90Zml4TWVzc2FnZS5JQzJHX0xvZ2luR2F0ZX0gbSBDMkdfTG9naW5HYXRlIG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxuICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3XSBXcml0ZXIgdG8gZW5jb2RlIHRvXG4gICAgICAgICAqIEByZXR1cm5zIHskcHJvdG9idWYuV3JpdGVyfSBXcml0ZXJcbiAgICAgICAgICovXG4gICAgICAgIEMyR19Mb2dpbkdhdGUuZW5jb2RlID0gZnVuY3Rpb24gZW5jb2RlKG0sIHcpIHtcbiAgICAgICAgICAgIGlmICghdylcbiAgICAgICAgICAgICAgICB3ID0gJFdyaXRlci5jcmVhdGUoKTtcbiAgICAgICAgICAgIGlmIChtLktleSAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG0sIFwiS2V5XCIpKVxuICAgICAgICAgICAgICAgIHcudWludDMyKDEwKS5zdHJpbmcobS5LZXkpO1xuICAgICAgICAgICAgaWYgKG0udXNlcmlkICE9IG51bGwgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobSwgXCJ1c2VyaWRcIikpXG4gICAgICAgICAgICAgICAgdy51aW50MzIoMjQpLmludDMyKG0udXNlcmlkKTtcbiAgICAgICAgICAgIGlmIChtLlJwY0lkICE9IG51bGwgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobSwgXCJScGNJZFwiKSlcbiAgICAgICAgICAgICAgICB3LnVpbnQzMig3MjApLmludDMyKG0uUnBjSWQpO1xuICAgICAgICAgICAgcmV0dXJuIHc7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlY29kZXMgYSBDMkdfTG9naW5HYXRlIG1lc3NhZ2UgZnJvbSB0aGUgc3BlY2lmaWVkIHJlYWRlciBvciBidWZmZXIuXG4gICAgICAgICAqIEBmdW5jdGlvbiBkZWNvZGVcbiAgICAgICAgICogQG1lbWJlcm9mIEhvdGZpeE1lc3NhZ2UuQzJHX0xvZ2luR2F0ZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLlJlYWRlcnxVaW50OEFycmF5fSByIFJlYWRlciBvciBidWZmZXIgdG8gZGVjb2RlIGZyb21cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtsXSBNZXNzYWdlIGxlbmd0aCBpZiBrbm93biBiZWZvcmVoYW5kXG4gICAgICAgICAqIEByZXR1cm5zIHtIb3RmaXhNZXNzYWdlLkMyR19Mb2dpbkdhdGV9IEMyR19Mb2dpbkdhdGVcbiAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBwYXlsb2FkIGlzIG5vdCBhIHJlYWRlciBvciB2YWxpZCBidWZmZXJcbiAgICAgICAgICogQHRocm93cyB7JHByb3RvYnVmLnV0aWwuUHJvdG9jb2xFcnJvcn0gSWYgcmVxdWlyZWQgZmllbGRzIGFyZSBtaXNzaW5nXG4gICAgICAgICAqL1xuICAgICAgICBDMkdfTG9naW5HYXRlLmRlY29kZSA9IGZ1bmN0aW9uIGRlY29kZShyLCBsKSB7XG4gICAgICAgICAgICBpZiAoIShyIGluc3RhbmNlb2YgJFJlYWRlcikpXG4gICAgICAgICAgICAgICAgciA9ICRSZWFkZXIuY3JlYXRlKHIpO1xuICAgICAgICAgICAgdmFyIGMgPSBsID09PSB1bmRlZmluZWQgPyByLmxlbiA6IHIucG9zICsgbCwgbSA9IG5ldyAkcm9vdC5Ib3RmaXhNZXNzYWdlLkMyR19Mb2dpbkdhdGUoKTtcbiAgICAgICAgICAgIHdoaWxlIChyLnBvcyA8IGMpIHtcbiAgICAgICAgICAgICAgICB2YXIgdCA9IHIudWludDMyKCk7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0ID4+PiAzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTA6XG4gICAgICAgICAgICAgICAgICAgICAgICBtLlJwY0lkID0gci5pbnQzMigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uS2V5ID0gci5zdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBtLnVzZXJpZCA9IHIuaW50MzIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgci5za2lwVHlwZSh0ICYgNyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gQzJHX0xvZ2luR2F0ZTtcbiAgICB9KSgpO1xuXG4gICAgSG90Zml4TWVzc2FnZS5HMkNfTG9naW5HYXRlID0gKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvcGVydGllcyBvZiBhIEcyQ19Mb2dpbkdhdGUuXG4gICAgICAgICAqIEBtZW1iZXJvZiBIb3RmaXhNZXNzYWdlXG4gICAgICAgICAqIEBpbnRlcmZhY2UgSUcyQ19Mb2dpbkdhdGVcbiAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ8bnVsbH0gW1JwY0lkXSBHMkNfTG9naW5HYXRlIFJwY0lkXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfG51bGx9IFtFcnJvcl0gRzJDX0xvZ2luR2F0ZSBFcnJvclxuICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSBbTWVzc2FnZV0gRzJDX0xvZ2luR2F0ZSBNZXNzYWdlXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7TG9uZ3xudWxsfSBbUGxheWVySWRdIEcyQ19Mb2dpbkdhdGUgUGxheWVySWRcbiAgICAgICAgICovXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnN0cnVjdHMgYSBuZXcgRzJDX0xvZ2luR2F0ZS5cbiAgICAgICAgICogQG1lbWJlcm9mIEhvdGZpeE1lc3NhZ2VcbiAgICAgICAgICogQGNsYXNzZGVzYyBSZXByZXNlbnRzIGEgRzJDX0xvZ2luR2F0ZS5cbiAgICAgICAgICogQGltcGxlbWVudHMgSUcyQ19Mb2dpbkdhdGVcbiAgICAgICAgICogQGNvbnN0cnVjdG9yXG4gICAgICAgICAqIEBwYXJhbSB7SG90Zml4TWVzc2FnZS5JRzJDX0xvZ2luR2F0ZT19IFtwXSBQcm9wZXJ0aWVzIHRvIHNldFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gRzJDX0xvZ2luR2F0ZShwKSB7XG4gICAgICAgICAgICBpZiAocClcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrcyA9IE9iamVjdC5rZXlzKHApLCBpID0gMDsgaSA8IGtzLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgICAgICAgICBpZiAocFtrc1tpXV0gIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNba3NbaV1dID0gcFtrc1tpXV07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRzJDX0xvZ2luR2F0ZSBScGNJZC5cbiAgICAgICAgICogQG1lbWJlciB7bnVtYmVyfSBScGNJZFxuICAgICAgICAgKiBAbWVtYmVyb2YgSG90Zml4TWVzc2FnZS5HMkNfTG9naW5HYXRlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgRzJDX0xvZ2luR2F0ZS5wcm90b3R5cGUuUnBjSWQgPSAwO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHMkNfTG9naW5HYXRlIEVycm9yLlxuICAgICAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IEVycm9yXG4gICAgICAgICAqIEBtZW1iZXJvZiBIb3RmaXhNZXNzYWdlLkcyQ19Mb2dpbkdhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBHMkNfTG9naW5HYXRlLnByb3RvdHlwZS5FcnJvciA9IDA7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEcyQ19Mb2dpbkdhdGUgTWVzc2FnZS5cbiAgICAgICAgICogQG1lbWJlciB7c3RyaW5nfSBNZXNzYWdlXG4gICAgICAgICAqIEBtZW1iZXJvZiBIb3RmaXhNZXNzYWdlLkcyQ19Mb2dpbkdhdGVcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBHMkNfTG9naW5HYXRlLnByb3RvdHlwZS5NZXNzYWdlID0gXCJcIjtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRzJDX0xvZ2luR2F0ZSBQbGF5ZXJJZC5cbiAgICAgICAgICogQG1lbWJlciB7TG9uZ30gUGxheWVySWRcbiAgICAgICAgICogQG1lbWJlcm9mIEhvdGZpeE1lc3NhZ2UuRzJDX0xvZ2luR2F0ZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIEcyQ19Mb2dpbkdhdGUucHJvdG90eXBlLlBsYXllcklkID0gJHV0aWwuTG9uZyA/ICR1dGlsLkxvbmcuZnJvbUJpdHMoMCwgMCwgZmFsc2UpIDogMDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyBhIG5ldyBHMkNfTG9naW5HYXRlIGluc3RhbmNlIHVzaW5nIHRoZSBzcGVjaWZpZWQgcHJvcGVydGllcy5cbiAgICAgICAgICogQGZ1bmN0aW9uIGNyZWF0ZVxuICAgICAgICAgKiBAbWVtYmVyb2YgSG90Zml4TWVzc2FnZS5HMkNfTG9naW5HYXRlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtIb3RmaXhNZXNzYWdlLklHMkNfTG9naW5HYXRlPX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XG4gICAgICAgICAqIEByZXR1cm5zIHtIb3RmaXhNZXNzYWdlLkcyQ19Mb2dpbkdhdGV9IEcyQ19Mb2dpbkdhdGUgaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIEcyQ19Mb2dpbkdhdGUuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRzJDX0xvZ2luR2F0ZShwcm9wZXJ0aWVzKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRW5jb2RlcyB0aGUgc3BlY2lmaWVkIEcyQ19Mb2dpbkdhdGUgbWVzc2FnZS4gRG9lcyBub3QgaW1wbGljaXRseSB7QGxpbmsgSG90Zml4TWVzc2FnZS5HMkNfTG9naW5HYXRlLnZlcmlmeXx2ZXJpZnl9IG1lc3NhZ2VzLlxuICAgICAgICAgKiBAZnVuY3Rpb24gZW5jb2RlXG4gICAgICAgICAqIEBtZW1iZXJvZiBIb3RmaXhNZXNzYWdlLkcyQ19Mb2dpbkdhdGVcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge0hvdGZpeE1lc3NhZ2UuSUcyQ19Mb2dpbkdhdGV9IG0gRzJDX0xvZ2luR2F0ZSBtZXNzYWdlIG9yIHBsYWluIG9iamVjdCB0byBlbmNvZGVcbiAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuV3JpdGVyfSBbd10gV3JpdGVyIHRvIGVuY29kZSB0b1xuICAgICAgICAgKiBAcmV0dXJucyB7JHByb3RvYnVmLldyaXRlcn0gV3JpdGVyXG4gICAgICAgICAqL1xuICAgICAgICBHMkNfTG9naW5HYXRlLmVuY29kZSA9IGZ1bmN0aW9uIGVuY29kZShtLCB3KSB7XG4gICAgICAgICAgICBpZiAoIXcpXG4gICAgICAgICAgICAgICAgdyA9ICRXcml0ZXIuY3JlYXRlKCk7XG4gICAgICAgICAgICBpZiAobS5QbGF5ZXJJZCAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG0sIFwiUGxheWVySWRcIikpXG4gICAgICAgICAgICAgICAgdy51aW50MzIoOCkuaW50NjQobS5QbGF5ZXJJZCk7XG4gICAgICAgICAgICBpZiAobS5ScGNJZCAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG0sIFwiUnBjSWRcIikpXG4gICAgICAgICAgICAgICAgdy51aW50MzIoNzIwKS5pbnQzMihtLlJwY0lkKTtcbiAgICAgICAgICAgIGlmIChtLkVycm9yICE9IG51bGwgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobSwgXCJFcnJvclwiKSlcbiAgICAgICAgICAgICAgICB3LnVpbnQzMig3MjgpLmludDMyKG0uRXJyb3IpO1xuICAgICAgICAgICAgaWYgKG0uTWVzc2FnZSAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG0sIFwiTWVzc2FnZVwiKSlcbiAgICAgICAgICAgICAgICB3LnVpbnQzMig3MzgpLnN0cmluZyhtLk1lc3NhZ2UpO1xuICAgICAgICAgICAgcmV0dXJuIHc7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlY29kZXMgYSBHMkNfTG9naW5HYXRlIG1lc3NhZ2UgZnJvbSB0aGUgc3BlY2lmaWVkIHJlYWRlciBvciBidWZmZXIuXG4gICAgICAgICAqIEBmdW5jdGlvbiBkZWNvZGVcbiAgICAgICAgICogQG1lbWJlcm9mIEhvdGZpeE1lc3NhZ2UuRzJDX0xvZ2luR2F0ZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLlJlYWRlcnxVaW50OEFycmF5fSByIFJlYWRlciBvciBidWZmZXIgdG8gZGVjb2RlIGZyb21cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtsXSBNZXNzYWdlIGxlbmd0aCBpZiBrbm93biBiZWZvcmVoYW5kXG4gICAgICAgICAqIEByZXR1cm5zIHtIb3RmaXhNZXNzYWdlLkcyQ19Mb2dpbkdhdGV9IEcyQ19Mb2dpbkdhdGVcbiAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBwYXlsb2FkIGlzIG5vdCBhIHJlYWRlciBvciB2YWxpZCBidWZmZXJcbiAgICAgICAgICogQHRocm93cyB7JHByb3RvYnVmLnV0aWwuUHJvdG9jb2xFcnJvcn0gSWYgcmVxdWlyZWQgZmllbGRzIGFyZSBtaXNzaW5nXG4gICAgICAgICAqL1xuICAgICAgICBHMkNfTG9naW5HYXRlLmRlY29kZSA9IGZ1bmN0aW9uIGRlY29kZShyLCBsKSB7XG4gICAgICAgICAgICBpZiAoIShyIGluc3RhbmNlb2YgJFJlYWRlcikpXG4gICAgICAgICAgICAgICAgciA9ICRSZWFkZXIuY3JlYXRlKHIpO1xuICAgICAgICAgICAgdmFyIGMgPSBsID09PSB1bmRlZmluZWQgPyByLmxlbiA6IHIucG9zICsgbCwgbSA9IG5ldyAkcm9vdC5Ib3RmaXhNZXNzYWdlLkcyQ19Mb2dpbkdhdGUoKTtcbiAgICAgICAgICAgIHdoaWxlIChyLnBvcyA8IGMpIHtcbiAgICAgICAgICAgICAgICB2YXIgdCA9IHIudWludDMyKCk7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0ID4+PiAzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTA6XG4gICAgICAgICAgICAgICAgICAgICAgICBtLlJwY0lkID0gci5pbnQzMigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTE6XG4gICAgICAgICAgICAgICAgICAgICAgICBtLkVycm9yID0gci5pbnQzMigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTI6XG4gICAgICAgICAgICAgICAgICAgICAgICBtLk1lc3NhZ2UgPSByLnN0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uUGxheWVySWQgPSByLmludDY0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHIuc2tpcFR5cGUodCAmIDcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG07XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIEcyQ19Mb2dpbkdhdGU7XG4gICAgfSkoKTtcblxuICAgIEhvdGZpeE1lc3NhZ2UuRzJDX1Rlc3RIb3RmaXhNZXNzYWdlID0gKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvcGVydGllcyBvZiBhIEcyQ19UZXN0SG90Zml4TWVzc2FnZS5cbiAgICAgICAgICogQG1lbWJlcm9mIEhvdGZpeE1lc3NhZ2VcbiAgICAgICAgICogQGludGVyZmFjZSBJRzJDX1Rlc3RIb3RmaXhNZXNzYWdlXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bGx9IFtJbmZvXSBHMkNfVGVzdEhvdGZpeE1lc3NhZ2UgSW5mb1xuICAgICAgICAgKi9cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29uc3RydWN0cyBhIG5ldyBHMkNfVGVzdEhvdGZpeE1lc3NhZ2UuXG4gICAgICAgICAqIEBtZW1iZXJvZiBIb3RmaXhNZXNzYWdlXG4gICAgICAgICAqIEBjbGFzc2Rlc2MgUmVwcmVzZW50cyBhIEcyQ19UZXN0SG90Zml4TWVzc2FnZS5cbiAgICAgICAgICogQGltcGxlbWVudHMgSUcyQ19UZXN0SG90Zml4TWVzc2FnZVxuICAgICAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgICAgICogQHBhcmFtIHtIb3RmaXhNZXNzYWdlLklHMkNfVGVzdEhvdGZpeE1lc3NhZ2U9fSBbcF0gUHJvcGVydGllcyB0byBzZXRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIEcyQ19UZXN0SG90Zml4TWVzc2FnZShwKSB7XG4gICAgICAgICAgICBpZiAocClcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrcyA9IE9iamVjdC5rZXlzKHApLCBpID0gMDsgaSA8IGtzLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgICAgICAgICBpZiAocFtrc1tpXV0gIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNba3NbaV1dID0gcFtrc1tpXV07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRzJDX1Rlc3RIb3RmaXhNZXNzYWdlIEluZm8uXG4gICAgICAgICAqIEBtZW1iZXIge3N0cmluZ30gSW5mb1xuICAgICAgICAgKiBAbWVtYmVyb2YgSG90Zml4TWVzc2FnZS5HMkNfVGVzdEhvdGZpeE1lc3NhZ2VcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBHMkNfVGVzdEhvdGZpeE1lc3NhZ2UucHJvdG90eXBlLkluZm8gPSBcIlwiO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGEgbmV3IEcyQ19UZXN0SG90Zml4TWVzc2FnZSBpbnN0YW5jZSB1c2luZyB0aGUgc3BlY2lmaWVkIHByb3BlcnRpZXMuXG4gICAgICAgICAqIEBmdW5jdGlvbiBjcmVhdGVcbiAgICAgICAgICogQG1lbWJlcm9mIEhvdGZpeE1lc3NhZ2UuRzJDX1Rlc3RIb3RmaXhNZXNzYWdlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtIb3RmaXhNZXNzYWdlLklHMkNfVGVzdEhvdGZpeE1lc3NhZ2U9fSBbcHJvcGVydGllc10gUHJvcGVydGllcyB0byBzZXRcbiAgICAgICAgICogQHJldHVybnMge0hvdGZpeE1lc3NhZ2UuRzJDX1Rlc3RIb3RmaXhNZXNzYWdlfSBHMkNfVGVzdEhvdGZpeE1lc3NhZ2UgaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIEcyQ19UZXN0SG90Zml4TWVzc2FnZS5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUocHJvcGVydGllcykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBHMkNfVGVzdEhvdGZpeE1lc3NhZ2UocHJvcGVydGllcyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVuY29kZXMgdGhlIHNwZWNpZmllZCBHMkNfVGVzdEhvdGZpeE1lc3NhZ2UgbWVzc2FnZS4gRG9lcyBub3QgaW1wbGljaXRseSB7QGxpbmsgSG90Zml4TWVzc2FnZS5HMkNfVGVzdEhvdGZpeE1lc3NhZ2UudmVyaWZ5fHZlcmlmeX0gbWVzc2FnZXMuXG4gICAgICAgICAqIEBmdW5jdGlvbiBlbmNvZGVcbiAgICAgICAgICogQG1lbWJlcm9mIEhvdGZpeE1lc3NhZ2UuRzJDX1Rlc3RIb3RmaXhNZXNzYWdlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtIb3RmaXhNZXNzYWdlLklHMkNfVGVzdEhvdGZpeE1lc3NhZ2V9IG0gRzJDX1Rlc3RIb3RmaXhNZXNzYWdlIG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxuICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3XSBXcml0ZXIgdG8gZW5jb2RlIHRvXG4gICAgICAgICAqIEByZXR1cm5zIHskcHJvdG9idWYuV3JpdGVyfSBXcml0ZXJcbiAgICAgICAgICovXG4gICAgICAgIEcyQ19UZXN0SG90Zml4TWVzc2FnZS5lbmNvZGUgPSBmdW5jdGlvbiBlbmNvZGUobSwgdykge1xuICAgICAgICAgICAgaWYgKCF3KVxuICAgICAgICAgICAgICAgIHcgPSAkV3JpdGVyLmNyZWF0ZSgpO1xuICAgICAgICAgICAgaWYgKG0uSW5mbyAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG0sIFwiSW5mb1wiKSlcbiAgICAgICAgICAgICAgICB3LnVpbnQzMigxMCkuc3RyaW5nKG0uSW5mbyk7XG4gICAgICAgICAgICByZXR1cm4gdztcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVjb2RlcyBhIEcyQ19UZXN0SG90Zml4TWVzc2FnZSBtZXNzYWdlIGZyb20gdGhlIHNwZWNpZmllZCByZWFkZXIgb3IgYnVmZmVyLlxuICAgICAgICAgKiBAZnVuY3Rpb24gZGVjb2RlXG4gICAgICAgICAqIEBtZW1iZXJvZiBIb3RmaXhNZXNzYWdlLkcyQ19UZXN0SG90Zml4TWVzc2FnZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLlJlYWRlcnxVaW50OEFycmF5fSByIFJlYWRlciBvciBidWZmZXIgdG8gZGVjb2RlIGZyb21cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtsXSBNZXNzYWdlIGxlbmd0aCBpZiBrbm93biBiZWZvcmVoYW5kXG4gICAgICAgICAqIEByZXR1cm5zIHtIb3RmaXhNZXNzYWdlLkcyQ19UZXN0SG90Zml4TWVzc2FnZX0gRzJDX1Rlc3RIb3RmaXhNZXNzYWdlXG4gICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgcGF5bG9hZCBpcyBub3QgYSByZWFkZXIgb3IgdmFsaWQgYnVmZmVyXG4gICAgICAgICAqIEB0aHJvd3MgeyRwcm90b2J1Zi51dGlsLlByb3RvY29sRXJyb3J9IElmIHJlcXVpcmVkIGZpZWxkcyBhcmUgbWlzc2luZ1xuICAgICAgICAgKi9cbiAgICAgICAgRzJDX1Rlc3RIb3RmaXhNZXNzYWdlLmRlY29kZSA9IGZ1bmN0aW9uIGRlY29kZShyLCBsKSB7XG4gICAgICAgICAgICBpZiAoIShyIGluc3RhbmNlb2YgJFJlYWRlcikpXG4gICAgICAgICAgICAgICAgciA9ICRSZWFkZXIuY3JlYXRlKHIpO1xuICAgICAgICAgICAgdmFyIGMgPSBsID09PSB1bmRlZmluZWQgPyByLmxlbiA6IHIucG9zICsgbCwgbSA9IG5ldyAkcm9vdC5Ib3RmaXhNZXNzYWdlLkcyQ19UZXN0SG90Zml4TWVzc2FnZSgpO1xuICAgICAgICAgICAgd2hpbGUgKHIucG9zIDwgYykge1xuICAgICAgICAgICAgICAgIHZhciB0ID0gci51aW50MzIoKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHQgPj4+IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgbS5JbmZvID0gci5zdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgci5za2lwVHlwZSh0ICYgNyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gRzJDX1Rlc3RIb3RmaXhNZXNzYWdlO1xuICAgIH0pKCk7XG5cbiAgICBIb3RmaXhNZXNzYWdlLkMyTV9UZXN0QWN0b3JSZXF1ZXN0ID0gKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvcGVydGllcyBvZiBhIEMyTV9UZXN0QWN0b3JSZXF1ZXN0LlxuICAgICAgICAgKiBAbWVtYmVyb2YgSG90Zml4TWVzc2FnZVxuICAgICAgICAgKiBAaW50ZXJmYWNlIElDMk1fVGVzdEFjdG9yUmVxdWVzdFxuICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcnxudWxsfSBbUnBjSWRdIEMyTV9UZXN0QWN0b3JSZXF1ZXN0IFJwY0lkXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7TG9uZ3xudWxsfSBbQWN0b3JJZF0gQzJNX1Rlc3RBY3RvclJlcXVlc3QgQWN0b3JJZFxuICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSBbSW5mb10gQzJNX1Rlc3RBY3RvclJlcXVlc3QgSW5mb1xuICAgICAgICAgKi9cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29uc3RydWN0cyBhIG5ldyBDMk1fVGVzdEFjdG9yUmVxdWVzdC5cbiAgICAgICAgICogQG1lbWJlcm9mIEhvdGZpeE1lc3NhZ2VcbiAgICAgICAgICogQGNsYXNzZGVzYyBSZXByZXNlbnRzIGEgQzJNX1Rlc3RBY3RvclJlcXVlc3QuXG4gICAgICAgICAqIEBpbXBsZW1lbnRzIElDMk1fVGVzdEFjdG9yUmVxdWVzdFxuICAgICAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgICAgICogQHBhcmFtIHtIb3RmaXhNZXNzYWdlLklDMk1fVGVzdEFjdG9yUmVxdWVzdD19IFtwXSBQcm9wZXJ0aWVzIHRvIHNldFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gQzJNX1Rlc3RBY3RvclJlcXVlc3QocCkge1xuICAgICAgICAgICAgaWYgKHApXG4gICAgICAgICAgICAgICAgZm9yICh2YXIga3MgPSBPYmplY3Qua2V5cyhwKSwgaSA9IDA7IGkgPCBrcy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBba3NbaV1dICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2tzW2ldXSA9IHBba3NbaV1dO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEMyTV9UZXN0QWN0b3JSZXF1ZXN0IFJwY0lkLlxuICAgICAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFJwY0lkXG4gICAgICAgICAqIEBtZW1iZXJvZiBIb3RmaXhNZXNzYWdlLkMyTV9UZXN0QWN0b3JSZXF1ZXN0XG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgQzJNX1Rlc3RBY3RvclJlcXVlc3QucHJvdG90eXBlLlJwY0lkID0gMDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQzJNX1Rlc3RBY3RvclJlcXVlc3QgQWN0b3JJZC5cbiAgICAgICAgICogQG1lbWJlciB7TG9uZ30gQWN0b3JJZFxuICAgICAgICAgKiBAbWVtYmVyb2YgSG90Zml4TWVzc2FnZS5DMk1fVGVzdEFjdG9yUmVxdWVzdFxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIEMyTV9UZXN0QWN0b3JSZXF1ZXN0LnByb3RvdHlwZS5BY3RvcklkID0gJHV0aWwuTG9uZyA/ICR1dGlsLkxvbmcuZnJvbUJpdHMoMCwgMCwgZmFsc2UpIDogMDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQzJNX1Rlc3RBY3RvclJlcXVlc3QgSW5mby5cbiAgICAgICAgICogQG1lbWJlciB7c3RyaW5nfSBJbmZvXG4gICAgICAgICAqIEBtZW1iZXJvZiBIb3RmaXhNZXNzYWdlLkMyTV9UZXN0QWN0b3JSZXF1ZXN0XG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgQzJNX1Rlc3RBY3RvclJlcXVlc3QucHJvdG90eXBlLkluZm8gPSBcIlwiO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGEgbmV3IEMyTV9UZXN0QWN0b3JSZXF1ZXN0IGluc3RhbmNlIHVzaW5nIHRoZSBzcGVjaWZpZWQgcHJvcGVydGllcy5cbiAgICAgICAgICogQGZ1bmN0aW9uIGNyZWF0ZVxuICAgICAgICAgKiBAbWVtYmVyb2YgSG90Zml4TWVzc2FnZS5DMk1fVGVzdEFjdG9yUmVxdWVzdFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7SG90Zml4TWVzc2FnZS5JQzJNX1Rlc3RBY3RvclJlcXVlc3Q9fSBbcHJvcGVydGllc10gUHJvcGVydGllcyB0byBzZXRcbiAgICAgICAgICogQHJldHVybnMge0hvdGZpeE1lc3NhZ2UuQzJNX1Rlc3RBY3RvclJlcXVlc3R9IEMyTV9UZXN0QWN0b3JSZXF1ZXN0IGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBDMk1fVGVzdEFjdG9yUmVxdWVzdC5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUocHJvcGVydGllcykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDMk1fVGVzdEFjdG9yUmVxdWVzdChwcm9wZXJ0aWVzKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRW5jb2RlcyB0aGUgc3BlY2lmaWVkIEMyTV9UZXN0QWN0b3JSZXF1ZXN0IG1lc3NhZ2UuIERvZXMgbm90IGltcGxpY2l0bHkge0BsaW5rIEhvdGZpeE1lc3NhZ2UuQzJNX1Rlc3RBY3RvclJlcXVlc3QudmVyaWZ5fHZlcmlmeX0gbWVzc2FnZXMuXG4gICAgICAgICAqIEBmdW5jdGlvbiBlbmNvZGVcbiAgICAgICAgICogQG1lbWJlcm9mIEhvdGZpeE1lc3NhZ2UuQzJNX1Rlc3RBY3RvclJlcXVlc3RcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge0hvdGZpeE1lc3NhZ2UuSUMyTV9UZXN0QWN0b3JSZXF1ZXN0fSBtIEMyTV9UZXN0QWN0b3JSZXF1ZXN0IG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxuICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3XSBXcml0ZXIgdG8gZW5jb2RlIHRvXG4gICAgICAgICAqIEByZXR1cm5zIHskcHJvdG9idWYuV3JpdGVyfSBXcml0ZXJcbiAgICAgICAgICovXG4gICAgICAgIEMyTV9UZXN0QWN0b3JSZXF1ZXN0LmVuY29kZSA9IGZ1bmN0aW9uIGVuY29kZShtLCB3KSB7XG4gICAgICAgICAgICBpZiAoIXcpXG4gICAgICAgICAgICAgICAgdyA9ICRXcml0ZXIuY3JlYXRlKCk7XG4gICAgICAgICAgICBpZiAobS5JbmZvICE9IG51bGwgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobSwgXCJJbmZvXCIpKVxuICAgICAgICAgICAgICAgIHcudWludDMyKDEwKS5zdHJpbmcobS5JbmZvKTtcbiAgICAgICAgICAgIGlmIChtLlJwY0lkICE9IG51bGwgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobSwgXCJScGNJZFwiKSlcbiAgICAgICAgICAgICAgICB3LnVpbnQzMig3MjApLmludDMyKG0uUnBjSWQpO1xuICAgICAgICAgICAgaWYgKG0uQWN0b3JJZCAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG0sIFwiQWN0b3JJZFwiKSlcbiAgICAgICAgICAgICAgICB3LnVpbnQzMig3MjgpLmludDY0KG0uQWN0b3JJZCk7XG4gICAgICAgICAgICByZXR1cm4gdztcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVjb2RlcyBhIEMyTV9UZXN0QWN0b3JSZXF1ZXN0IG1lc3NhZ2UgZnJvbSB0aGUgc3BlY2lmaWVkIHJlYWRlciBvciBidWZmZXIuXG4gICAgICAgICAqIEBmdW5jdGlvbiBkZWNvZGVcbiAgICAgICAgICogQG1lbWJlcm9mIEhvdGZpeE1lc3NhZ2UuQzJNX1Rlc3RBY3RvclJlcXVlc3RcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5SZWFkZXJ8VWludDhBcnJheX0gciBSZWFkZXIgb3IgYnVmZmVyIHRvIGRlY29kZSBmcm9tXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbF0gTWVzc2FnZSBsZW5ndGggaWYga25vd24gYmVmb3JlaGFuZFxuICAgICAgICAgKiBAcmV0dXJucyB7SG90Zml4TWVzc2FnZS5DMk1fVGVzdEFjdG9yUmVxdWVzdH0gQzJNX1Rlc3RBY3RvclJlcXVlc3RcbiAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBwYXlsb2FkIGlzIG5vdCBhIHJlYWRlciBvciB2YWxpZCBidWZmZXJcbiAgICAgICAgICogQHRocm93cyB7JHByb3RvYnVmLnV0aWwuUHJvdG9jb2xFcnJvcn0gSWYgcmVxdWlyZWQgZmllbGRzIGFyZSBtaXNzaW5nXG4gICAgICAgICAqL1xuICAgICAgICBDMk1fVGVzdEFjdG9yUmVxdWVzdC5kZWNvZGUgPSBmdW5jdGlvbiBkZWNvZGUociwgbCkge1xuICAgICAgICAgICAgaWYgKCEociBpbnN0YW5jZW9mICRSZWFkZXIpKVxuICAgICAgICAgICAgICAgIHIgPSAkUmVhZGVyLmNyZWF0ZShyKTtcbiAgICAgICAgICAgIHZhciBjID0gbCA9PT0gdW5kZWZpbmVkID8gci5sZW4gOiByLnBvcyArIGwsIG0gPSBuZXcgJHJvb3QuSG90Zml4TWVzc2FnZS5DMk1fVGVzdEFjdG9yUmVxdWVzdCgpO1xuICAgICAgICAgICAgd2hpbGUgKHIucG9zIDwgYykge1xuICAgICAgICAgICAgICAgIHZhciB0ID0gci51aW50MzIoKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHQgPj4+IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5MDpcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uUnBjSWQgPSByLmludDMyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5MTpcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uQWN0b3JJZCA9IHIuaW50NjQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBtLkluZm8gPSByLnN0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICByLnNraXBUeXBlKHQgJiA3KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBDMk1fVGVzdEFjdG9yUmVxdWVzdDtcbiAgICB9KSgpO1xuXG4gICAgSG90Zml4TWVzc2FnZS5NMkNfVGVzdEFjdG9yUmVzcG9uc2UgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcm9wZXJ0aWVzIG9mIGEgTTJDX1Rlc3RBY3RvclJlc3BvbnNlLlxuICAgICAgICAgKiBAbWVtYmVyb2YgSG90Zml4TWVzc2FnZVxuICAgICAgICAgKiBAaW50ZXJmYWNlIElNMkNfVGVzdEFjdG9yUmVzcG9uc2VcbiAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ8bnVsbH0gW1JwY0lkXSBNMkNfVGVzdEFjdG9yUmVzcG9uc2UgUnBjSWRcbiAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ8bnVsbH0gW0Vycm9yXSBNMkNfVGVzdEFjdG9yUmVzcG9uc2UgRXJyb3JcbiAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd8bnVsbH0gW01lc3NhZ2VdIE0yQ19UZXN0QWN0b3JSZXNwb25zZSBNZXNzYWdlXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bGx9IFtJbmZvXSBNMkNfVGVzdEFjdG9yUmVzcG9uc2UgSW5mb1xuICAgICAgICAgKi9cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29uc3RydWN0cyBhIG5ldyBNMkNfVGVzdEFjdG9yUmVzcG9uc2UuXG4gICAgICAgICAqIEBtZW1iZXJvZiBIb3RmaXhNZXNzYWdlXG4gICAgICAgICAqIEBjbGFzc2Rlc2MgUmVwcmVzZW50cyBhIE0yQ19UZXN0QWN0b3JSZXNwb25zZS5cbiAgICAgICAgICogQGltcGxlbWVudHMgSU0yQ19UZXN0QWN0b3JSZXNwb25zZVxuICAgICAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgICAgICogQHBhcmFtIHtIb3RmaXhNZXNzYWdlLklNMkNfVGVzdEFjdG9yUmVzcG9uc2U9fSBbcF0gUHJvcGVydGllcyB0byBzZXRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIE0yQ19UZXN0QWN0b3JSZXNwb25zZShwKSB7XG4gICAgICAgICAgICBpZiAocClcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrcyA9IE9iamVjdC5rZXlzKHApLCBpID0gMDsgaSA8IGtzLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgICAgICAgICBpZiAocFtrc1tpXV0gIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNba3NbaV1dID0gcFtrc1tpXV07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogTTJDX1Rlc3RBY3RvclJlc3BvbnNlIFJwY0lkLlxuICAgICAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFJwY0lkXG4gICAgICAgICAqIEBtZW1iZXJvZiBIb3RmaXhNZXNzYWdlLk0yQ19UZXN0QWN0b3JSZXNwb25zZVxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIE0yQ19UZXN0QWN0b3JSZXNwb25zZS5wcm90b3R5cGUuUnBjSWQgPSAwO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNMkNfVGVzdEFjdG9yUmVzcG9uc2UgRXJyb3IuXG4gICAgICAgICAqIEBtZW1iZXIge251bWJlcn0gRXJyb3JcbiAgICAgICAgICogQG1lbWJlcm9mIEhvdGZpeE1lc3NhZ2UuTTJDX1Rlc3RBY3RvclJlc3BvbnNlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgTTJDX1Rlc3RBY3RvclJlc3BvbnNlLnByb3RvdHlwZS5FcnJvciA9IDA7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE0yQ19UZXN0QWN0b3JSZXNwb25zZSBNZXNzYWdlLlxuICAgICAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IE1lc3NhZ2VcbiAgICAgICAgICogQG1lbWJlcm9mIEhvdGZpeE1lc3NhZ2UuTTJDX1Rlc3RBY3RvclJlc3BvbnNlXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgTTJDX1Rlc3RBY3RvclJlc3BvbnNlLnByb3RvdHlwZS5NZXNzYWdlID0gXCJcIjtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTTJDX1Rlc3RBY3RvclJlc3BvbnNlIEluZm8uXG4gICAgICAgICAqIEBtZW1iZXIge3N0cmluZ30gSW5mb1xuICAgICAgICAgKiBAbWVtYmVyb2YgSG90Zml4TWVzc2FnZS5NMkNfVGVzdEFjdG9yUmVzcG9uc2VcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBNMkNfVGVzdEFjdG9yUmVzcG9uc2UucHJvdG90eXBlLkluZm8gPSBcIlwiO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGEgbmV3IE0yQ19UZXN0QWN0b3JSZXNwb25zZSBpbnN0YW5jZSB1c2luZyB0aGUgc3BlY2lmaWVkIHByb3BlcnRpZXMuXG4gICAgICAgICAqIEBmdW5jdGlvbiBjcmVhdGVcbiAgICAgICAgICogQG1lbWJlcm9mIEhvdGZpeE1lc3NhZ2UuTTJDX1Rlc3RBY3RvclJlc3BvbnNlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtIb3RmaXhNZXNzYWdlLklNMkNfVGVzdEFjdG9yUmVzcG9uc2U9fSBbcHJvcGVydGllc10gUHJvcGVydGllcyB0byBzZXRcbiAgICAgICAgICogQHJldHVybnMge0hvdGZpeE1lc3NhZ2UuTTJDX1Rlc3RBY3RvclJlc3BvbnNlfSBNMkNfVGVzdEFjdG9yUmVzcG9uc2UgaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIE0yQ19UZXN0QWN0b3JSZXNwb25zZS5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUocHJvcGVydGllcykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNMkNfVGVzdEFjdG9yUmVzcG9uc2UocHJvcGVydGllcyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVuY29kZXMgdGhlIHNwZWNpZmllZCBNMkNfVGVzdEFjdG9yUmVzcG9uc2UgbWVzc2FnZS4gRG9lcyBub3QgaW1wbGljaXRseSB7QGxpbmsgSG90Zml4TWVzc2FnZS5NMkNfVGVzdEFjdG9yUmVzcG9uc2UudmVyaWZ5fHZlcmlmeX0gbWVzc2FnZXMuXG4gICAgICAgICAqIEBmdW5jdGlvbiBlbmNvZGVcbiAgICAgICAgICogQG1lbWJlcm9mIEhvdGZpeE1lc3NhZ2UuTTJDX1Rlc3RBY3RvclJlc3BvbnNlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtIb3RmaXhNZXNzYWdlLklNMkNfVGVzdEFjdG9yUmVzcG9uc2V9IG0gTTJDX1Rlc3RBY3RvclJlc3BvbnNlIG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxuICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3XSBXcml0ZXIgdG8gZW5jb2RlIHRvXG4gICAgICAgICAqIEByZXR1cm5zIHskcHJvdG9idWYuV3JpdGVyfSBXcml0ZXJcbiAgICAgICAgICovXG4gICAgICAgIE0yQ19UZXN0QWN0b3JSZXNwb25zZS5lbmNvZGUgPSBmdW5jdGlvbiBlbmNvZGUobSwgdykge1xuICAgICAgICAgICAgaWYgKCF3KVxuICAgICAgICAgICAgICAgIHcgPSAkV3JpdGVyLmNyZWF0ZSgpO1xuICAgICAgICAgICAgaWYgKG0uSW5mbyAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG0sIFwiSW5mb1wiKSlcbiAgICAgICAgICAgICAgICB3LnVpbnQzMigxMCkuc3RyaW5nKG0uSW5mbyk7XG4gICAgICAgICAgICBpZiAobS5ScGNJZCAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG0sIFwiUnBjSWRcIikpXG4gICAgICAgICAgICAgICAgdy51aW50MzIoNzIwKS5pbnQzMihtLlJwY0lkKTtcbiAgICAgICAgICAgIGlmIChtLkVycm9yICE9IG51bGwgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobSwgXCJFcnJvclwiKSlcbiAgICAgICAgICAgICAgICB3LnVpbnQzMig3MjgpLmludDMyKG0uRXJyb3IpO1xuICAgICAgICAgICAgaWYgKG0uTWVzc2FnZSAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG0sIFwiTWVzc2FnZVwiKSlcbiAgICAgICAgICAgICAgICB3LnVpbnQzMig3MzgpLnN0cmluZyhtLk1lc3NhZ2UpO1xuICAgICAgICAgICAgcmV0dXJuIHc7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlY29kZXMgYSBNMkNfVGVzdEFjdG9yUmVzcG9uc2UgbWVzc2FnZSBmcm9tIHRoZSBzcGVjaWZpZWQgcmVhZGVyIG9yIGJ1ZmZlci5cbiAgICAgICAgICogQGZ1bmN0aW9uIGRlY29kZVxuICAgICAgICAgKiBAbWVtYmVyb2YgSG90Zml4TWVzc2FnZS5NMkNfVGVzdEFjdG9yUmVzcG9uc2VcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5SZWFkZXJ8VWludDhBcnJheX0gciBSZWFkZXIgb3IgYnVmZmVyIHRvIGRlY29kZSBmcm9tXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbF0gTWVzc2FnZSBsZW5ndGggaWYga25vd24gYmVmb3JlaGFuZFxuICAgICAgICAgKiBAcmV0dXJucyB7SG90Zml4TWVzc2FnZS5NMkNfVGVzdEFjdG9yUmVzcG9uc2V9IE0yQ19UZXN0QWN0b3JSZXNwb25zZVxuICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHBheWxvYWQgaXMgbm90IGEgcmVhZGVyIG9yIHZhbGlkIGJ1ZmZlclxuICAgICAgICAgKiBAdGhyb3dzIHskcHJvdG9idWYudXRpbC5Qcm90b2NvbEVycm9yfSBJZiByZXF1aXJlZCBmaWVsZHMgYXJlIG1pc3NpbmdcbiAgICAgICAgICovXG4gICAgICAgIE0yQ19UZXN0QWN0b3JSZXNwb25zZS5kZWNvZGUgPSBmdW5jdGlvbiBkZWNvZGUociwgbCkge1xuICAgICAgICAgICAgaWYgKCEociBpbnN0YW5jZW9mICRSZWFkZXIpKVxuICAgICAgICAgICAgICAgIHIgPSAkUmVhZGVyLmNyZWF0ZShyKTtcbiAgICAgICAgICAgIHZhciBjID0gbCA9PT0gdW5kZWZpbmVkID8gci5sZW4gOiByLnBvcyArIGwsIG0gPSBuZXcgJHJvb3QuSG90Zml4TWVzc2FnZS5NMkNfVGVzdEFjdG9yUmVzcG9uc2UoKTtcbiAgICAgICAgICAgIHdoaWxlIChyLnBvcyA8IGMpIHtcbiAgICAgICAgICAgICAgICB2YXIgdCA9IHIudWludDMyKCk7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0ID4+PiAzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTA6XG4gICAgICAgICAgICAgICAgICAgICAgICBtLlJwY0lkID0gci5pbnQzMigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTE6XG4gICAgICAgICAgICAgICAgICAgICAgICBtLkVycm9yID0gci5pbnQzMigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTI6XG4gICAgICAgICAgICAgICAgICAgICAgICBtLk1lc3NhZ2UgPSByLnN0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uSW5mbyA9IHIuc3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHIuc2tpcFR5cGUodCAmIDcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG07XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIE0yQ19UZXN0QWN0b3JSZXNwb25zZTtcbiAgICB9KSgpO1xuXG4gICAgSG90Zml4TWVzc2FnZS5QbGF5ZXJJbmZvID0gKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvcGVydGllcyBvZiBhIFBsYXllckluZm8uXG4gICAgICAgICAqIEBtZW1iZXJvZiBIb3RmaXhNZXNzYWdlXG4gICAgICAgICAqIEBpbnRlcmZhY2UgSVBsYXllckluZm9cbiAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ8bnVsbH0gW1JwY0lkXSBQbGF5ZXJJbmZvIFJwY0lkXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb25zdHJ1Y3RzIGEgbmV3IFBsYXllckluZm8uXG4gICAgICAgICAqIEBtZW1iZXJvZiBIb3RmaXhNZXNzYWdlXG4gICAgICAgICAqIEBjbGFzc2Rlc2MgUmVwcmVzZW50cyBhIFBsYXllckluZm8uXG4gICAgICAgICAqIEBpbXBsZW1lbnRzIElQbGF5ZXJJbmZvXG4gICAgICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAgICAgKiBAcGFyYW0ge0hvdGZpeE1lc3NhZ2UuSVBsYXllckluZm89fSBbcF0gUHJvcGVydGllcyB0byBzZXRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIFBsYXllckluZm8ocCkge1xuICAgICAgICAgICAgaWYgKHApXG4gICAgICAgICAgICAgICAgZm9yICh2YXIga3MgPSBPYmplY3Qua2V5cyhwKSwgaSA9IDA7IGkgPCBrcy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBba3NbaV1dICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2tzW2ldXSA9IHBba3NbaV1dO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBsYXllckluZm8gUnBjSWQuXG4gICAgICAgICAqIEBtZW1iZXIge251bWJlcn0gUnBjSWRcbiAgICAgICAgICogQG1lbWJlcm9mIEhvdGZpeE1lc3NhZ2UuUGxheWVySW5mb1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIFBsYXllckluZm8ucHJvdG90eXBlLlJwY0lkID0gMDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyBhIG5ldyBQbGF5ZXJJbmZvIGluc3RhbmNlIHVzaW5nIHRoZSBzcGVjaWZpZWQgcHJvcGVydGllcy5cbiAgICAgICAgICogQGZ1bmN0aW9uIGNyZWF0ZVxuICAgICAgICAgKiBAbWVtYmVyb2YgSG90Zml4TWVzc2FnZS5QbGF5ZXJJbmZvXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtIb3RmaXhNZXNzYWdlLklQbGF5ZXJJbmZvPX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XG4gICAgICAgICAqIEByZXR1cm5zIHtIb3RmaXhNZXNzYWdlLlBsYXllckluZm99IFBsYXllckluZm8gaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIFBsYXllckluZm8uY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUGxheWVySW5mbyhwcm9wZXJ0aWVzKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRW5jb2RlcyB0aGUgc3BlY2lmaWVkIFBsYXllckluZm8gbWVzc2FnZS4gRG9lcyBub3QgaW1wbGljaXRseSB7QGxpbmsgSG90Zml4TWVzc2FnZS5QbGF5ZXJJbmZvLnZlcmlmeXx2ZXJpZnl9IG1lc3NhZ2VzLlxuICAgICAgICAgKiBAZnVuY3Rpb24gZW5jb2RlXG4gICAgICAgICAqIEBtZW1iZXJvZiBIb3RmaXhNZXNzYWdlLlBsYXllckluZm9cbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge0hvdGZpeE1lc3NhZ2UuSVBsYXllckluZm99IG0gUGxheWVySW5mbyBtZXNzYWdlIG9yIHBsYWluIG9iamVjdCB0byBlbmNvZGVcbiAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuV3JpdGVyfSBbd10gV3JpdGVyIHRvIGVuY29kZSB0b1xuICAgICAgICAgKiBAcmV0dXJucyB7JHByb3RvYnVmLldyaXRlcn0gV3JpdGVyXG4gICAgICAgICAqL1xuICAgICAgICBQbGF5ZXJJbmZvLmVuY29kZSA9IGZ1bmN0aW9uIGVuY29kZShtLCB3KSB7XG4gICAgICAgICAgICBpZiAoIXcpXG4gICAgICAgICAgICAgICAgdyA9ICRXcml0ZXIuY3JlYXRlKCk7XG4gICAgICAgICAgICBpZiAobS5ScGNJZCAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG0sIFwiUnBjSWRcIikpXG4gICAgICAgICAgICAgICAgdy51aW50MzIoNzIwKS5pbnQzMihtLlJwY0lkKTtcbiAgICAgICAgICAgIHJldHVybiB3O1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWNvZGVzIGEgUGxheWVySW5mbyBtZXNzYWdlIGZyb20gdGhlIHNwZWNpZmllZCByZWFkZXIgb3IgYnVmZmVyLlxuICAgICAgICAgKiBAZnVuY3Rpb24gZGVjb2RlXG4gICAgICAgICAqIEBtZW1iZXJvZiBIb3RmaXhNZXNzYWdlLlBsYXllckluZm9cbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5SZWFkZXJ8VWludDhBcnJheX0gciBSZWFkZXIgb3IgYnVmZmVyIHRvIGRlY29kZSBmcm9tXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbF0gTWVzc2FnZSBsZW5ndGggaWYga25vd24gYmVmb3JlaGFuZFxuICAgICAgICAgKiBAcmV0dXJucyB7SG90Zml4TWVzc2FnZS5QbGF5ZXJJbmZvfSBQbGF5ZXJJbmZvXG4gICAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgcGF5bG9hZCBpcyBub3QgYSByZWFkZXIgb3IgdmFsaWQgYnVmZmVyXG4gICAgICAgICAqIEB0aHJvd3MgeyRwcm90b2J1Zi51dGlsLlByb3RvY29sRXJyb3J9IElmIHJlcXVpcmVkIGZpZWxkcyBhcmUgbWlzc2luZ1xuICAgICAgICAgKi9cbiAgICAgICAgUGxheWVySW5mby5kZWNvZGUgPSBmdW5jdGlvbiBkZWNvZGUociwgbCkge1xuICAgICAgICAgICAgaWYgKCEociBpbnN0YW5jZW9mICRSZWFkZXIpKVxuICAgICAgICAgICAgICAgIHIgPSAkUmVhZGVyLmNyZWF0ZShyKTtcbiAgICAgICAgICAgIHZhciBjID0gbCA9PT0gdW5kZWZpbmVkID8gci5sZW4gOiByLnBvcyArIGwsIG0gPSBuZXcgJHJvb3QuSG90Zml4TWVzc2FnZS5QbGF5ZXJJbmZvKCk7XG4gICAgICAgICAgICB3aGlsZSAoci5wb3MgPCBjKSB7XG4gICAgICAgICAgICAgICAgdmFyIHQgPSByLnVpbnQzMigpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodCA+Pj4gMykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDkwOlxuICAgICAgICAgICAgICAgICAgICAgICAgbS5ScGNJZCA9IHIuaW50MzIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgci5za2lwVHlwZSh0ICYgNyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gUGxheWVySW5mbztcbiAgICB9KSgpO1xuXG4gICAgSG90Zml4TWVzc2FnZS5DMkdfUGxheWVySW5mbyA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByb3BlcnRpZXMgb2YgYSBDMkdfUGxheWVySW5mby5cbiAgICAgICAgICogQG1lbWJlcm9mIEhvdGZpeE1lc3NhZ2VcbiAgICAgICAgICogQGludGVyZmFjZSBJQzJHX1BsYXllckluZm9cbiAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ8bnVsbH0gW1JwY0lkXSBDMkdfUGxheWVySW5mbyBScGNJZFxuICAgICAgICAgKi9cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29uc3RydWN0cyBhIG5ldyBDMkdfUGxheWVySW5mby5cbiAgICAgICAgICogQG1lbWJlcm9mIEhvdGZpeE1lc3NhZ2VcbiAgICAgICAgICogQGNsYXNzZGVzYyBSZXByZXNlbnRzIGEgQzJHX1BsYXllckluZm8uXG4gICAgICAgICAqIEBpbXBsZW1lbnRzIElDMkdfUGxheWVySW5mb1xuICAgICAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgICAgICogQHBhcmFtIHtIb3RmaXhNZXNzYWdlLklDMkdfUGxheWVySW5mbz19IFtwXSBQcm9wZXJ0aWVzIHRvIHNldFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gQzJHX1BsYXllckluZm8ocCkge1xuICAgICAgICAgICAgaWYgKHApXG4gICAgICAgICAgICAgICAgZm9yICh2YXIga3MgPSBPYmplY3Qua2V5cyhwKSwgaSA9IDA7IGkgPCBrcy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBba3NbaV1dICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2tzW2ldXSA9IHBba3NbaV1dO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEMyR19QbGF5ZXJJbmZvIFJwY0lkLlxuICAgICAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFJwY0lkXG4gICAgICAgICAqIEBtZW1iZXJvZiBIb3RmaXhNZXNzYWdlLkMyR19QbGF5ZXJJbmZvXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgQzJHX1BsYXllckluZm8ucHJvdG90eXBlLlJwY0lkID0gMDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyBhIG5ldyBDMkdfUGxheWVySW5mbyBpbnN0YW5jZSB1c2luZyB0aGUgc3BlY2lmaWVkIHByb3BlcnRpZXMuXG4gICAgICAgICAqIEBmdW5jdGlvbiBjcmVhdGVcbiAgICAgICAgICogQG1lbWJlcm9mIEhvdGZpeE1lc3NhZ2UuQzJHX1BsYXllckluZm9cbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge0hvdGZpeE1lc3NhZ2UuSUMyR19QbGF5ZXJJbmZvPX0gW3Byb3BlcnRpZXNdIFByb3BlcnRpZXMgdG8gc2V0XG4gICAgICAgICAqIEByZXR1cm5zIHtIb3RmaXhNZXNzYWdlLkMyR19QbGF5ZXJJbmZvfSBDMkdfUGxheWVySW5mbyBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgQzJHX1BsYXllckluZm8uY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQzJHX1BsYXllckluZm8ocHJvcGVydGllcyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVuY29kZXMgdGhlIHNwZWNpZmllZCBDMkdfUGxheWVySW5mbyBtZXNzYWdlLiBEb2VzIG5vdCBpbXBsaWNpdGx5IHtAbGluayBIb3RmaXhNZXNzYWdlLkMyR19QbGF5ZXJJbmZvLnZlcmlmeXx2ZXJpZnl9IG1lc3NhZ2VzLlxuICAgICAgICAgKiBAZnVuY3Rpb24gZW5jb2RlXG4gICAgICAgICAqIEBtZW1iZXJvZiBIb3RmaXhNZXNzYWdlLkMyR19QbGF5ZXJJbmZvXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHBhcmFtIHtIb3RmaXhNZXNzYWdlLklDMkdfUGxheWVySW5mb30gbSBDMkdfUGxheWVySW5mbyBtZXNzYWdlIG9yIHBsYWluIG9iamVjdCB0byBlbmNvZGVcbiAgICAgICAgICogQHBhcmFtIHskcHJvdG9idWYuV3JpdGVyfSBbd10gV3JpdGVyIHRvIGVuY29kZSB0b1xuICAgICAgICAgKiBAcmV0dXJucyB7JHByb3RvYnVmLldyaXRlcn0gV3JpdGVyXG4gICAgICAgICAqL1xuICAgICAgICBDMkdfUGxheWVySW5mby5lbmNvZGUgPSBmdW5jdGlvbiBlbmNvZGUobSwgdykge1xuICAgICAgICAgICAgaWYgKCF3KVxuICAgICAgICAgICAgICAgIHcgPSAkV3JpdGVyLmNyZWF0ZSgpO1xuICAgICAgICAgICAgaWYgKG0uUnBjSWQgIT0gbnVsbCAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtLCBcIlJwY0lkXCIpKVxuICAgICAgICAgICAgICAgIHcudWludDMyKDcyMCkuaW50MzIobS5ScGNJZCk7XG4gICAgICAgICAgICByZXR1cm4gdztcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVjb2RlcyBhIEMyR19QbGF5ZXJJbmZvIG1lc3NhZ2UgZnJvbSB0aGUgc3BlY2lmaWVkIHJlYWRlciBvciBidWZmZXIuXG4gICAgICAgICAqIEBmdW5jdGlvbiBkZWNvZGVcbiAgICAgICAgICogQG1lbWJlcm9mIEhvdGZpeE1lc3NhZ2UuQzJHX1BsYXllckluZm9cbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5SZWFkZXJ8VWludDhBcnJheX0gciBSZWFkZXIgb3IgYnVmZmVyIHRvIGRlY29kZSBmcm9tXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbF0gTWVzc2FnZSBsZW5ndGggaWYga25vd24gYmVmb3JlaGFuZFxuICAgICAgICAgKiBAcmV0dXJucyB7SG90Zml4TWVzc2FnZS5DMkdfUGxheWVySW5mb30gQzJHX1BsYXllckluZm9cbiAgICAgICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBwYXlsb2FkIGlzIG5vdCBhIHJlYWRlciBvciB2YWxpZCBidWZmZXJcbiAgICAgICAgICogQHRocm93cyB7JHByb3RvYnVmLnV0aWwuUHJvdG9jb2xFcnJvcn0gSWYgcmVxdWlyZWQgZmllbGRzIGFyZSBtaXNzaW5nXG4gICAgICAgICAqL1xuICAgICAgICBDMkdfUGxheWVySW5mby5kZWNvZGUgPSBmdW5jdGlvbiBkZWNvZGUociwgbCkge1xuICAgICAgICAgICAgaWYgKCEociBpbnN0YW5jZW9mICRSZWFkZXIpKVxuICAgICAgICAgICAgICAgIHIgPSAkUmVhZGVyLmNyZWF0ZShyKTtcbiAgICAgICAgICAgIHZhciBjID0gbCA9PT0gdW5kZWZpbmVkID8gci5sZW4gOiByLnBvcyArIGwsIG0gPSBuZXcgJHJvb3QuSG90Zml4TWVzc2FnZS5DMkdfUGxheWVySW5mbygpO1xuICAgICAgICAgICAgd2hpbGUgKHIucG9zIDwgYykge1xuICAgICAgICAgICAgICAgIHZhciB0ID0gci51aW50MzIoKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHQgPj4+IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5MDpcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uUnBjSWQgPSByLmludDMyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHIuc2tpcFR5cGUodCAmIDcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG07XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIEMyR19QbGF5ZXJJbmZvO1xuICAgIH0pKCk7XG5cbiAgICBIb3RmaXhNZXNzYWdlLkcyQ19QbGF5ZXJJbmZvID0gKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvcGVydGllcyBvZiBhIEcyQ19QbGF5ZXJJbmZvLlxuICAgICAgICAgKiBAbWVtYmVyb2YgSG90Zml4TWVzc2FnZVxuICAgICAgICAgKiBAaW50ZXJmYWNlIElHMkNfUGxheWVySW5mb1xuICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcnxudWxsfSBbUnBjSWRdIEcyQ19QbGF5ZXJJbmZvIFJwY0lkXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfG51bGx9IFtFcnJvcl0gRzJDX1BsYXllckluZm8gRXJyb3JcbiAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd8bnVsbH0gW01lc3NhZ2VdIEcyQ19QbGF5ZXJJbmZvIE1lc3NhZ2VcbiAgICAgICAgICogQHByb3BlcnR5IHtIb3RmaXhNZXNzYWdlLklQbGF5ZXJJbmZvfG51bGx9IFtQbGF5ZXJJbmZvXSBHMkNfUGxheWVySW5mbyBQbGF5ZXJJbmZvXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7QXJyYXkuPEhvdGZpeE1lc3NhZ2UuSVBsYXllckluZm8+fG51bGx9IFtQbGF5ZXJJbmZvc10gRzJDX1BsYXllckluZm8gUGxheWVySW5mb3NcbiAgICAgICAgICogQHByb3BlcnR5IHtBcnJheS48c3RyaW5nPnxudWxsfSBbVGVzdFJlcGVhdGVkU3RyaW5nXSBHMkNfUGxheWVySW5mbyBUZXN0UmVwZWF0ZWRTdHJpbmdcbiAgICAgICAgICogQHByb3BlcnR5IHtBcnJheS48bnVtYmVyPnxudWxsfSBbVGVzdFJlcGVhdGVkSW50MzJdIEcyQ19QbGF5ZXJJbmZvIFRlc3RSZXBlYXRlZEludDMyXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb25zdHJ1Y3RzIGEgbmV3IEcyQ19QbGF5ZXJJbmZvLlxuICAgICAgICAgKiBAbWVtYmVyb2YgSG90Zml4TWVzc2FnZVxuICAgICAgICAgKiBAY2xhc3NkZXNjIFJlcHJlc2VudHMgYSBHMkNfUGxheWVySW5mby5cbiAgICAgICAgICogQGltcGxlbWVudHMgSUcyQ19QbGF5ZXJJbmZvXG4gICAgICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAgICAgKiBAcGFyYW0ge0hvdGZpeE1lc3NhZ2UuSUcyQ19QbGF5ZXJJbmZvPX0gW3BdIFByb3BlcnRpZXMgdG8gc2V0XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBHMkNfUGxheWVySW5mbyhwKSB7XG4gICAgICAgICAgICB0aGlzLlBsYXllckluZm9zID0gW107XG4gICAgICAgICAgICB0aGlzLlRlc3RSZXBlYXRlZFN0cmluZyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5UZXN0UmVwZWF0ZWRJbnQzMiA9IFtdO1xuICAgICAgICAgICAgaWYgKHApXG4gICAgICAgICAgICAgICAgZm9yICh2YXIga3MgPSBPYmplY3Qua2V5cyhwKSwgaSA9IDA7IGkgPCBrcy5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBba3NbaV1dICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2tzW2ldXSA9IHBba3NbaV1dO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEcyQ19QbGF5ZXJJbmZvIFJwY0lkLlxuICAgICAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFJwY0lkXG4gICAgICAgICAqIEBtZW1iZXJvZiBIb3RmaXhNZXNzYWdlLkcyQ19QbGF5ZXJJbmZvXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgRzJDX1BsYXllckluZm8ucHJvdG90eXBlLlJwY0lkID0gMDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRzJDX1BsYXllckluZm8gRXJyb3IuXG4gICAgICAgICAqIEBtZW1iZXIge251bWJlcn0gRXJyb3JcbiAgICAgICAgICogQG1lbWJlcm9mIEhvdGZpeE1lc3NhZ2UuRzJDX1BsYXllckluZm9cbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBHMkNfUGxheWVySW5mby5wcm90b3R5cGUuRXJyb3IgPSAwO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHMkNfUGxheWVySW5mbyBNZXNzYWdlLlxuICAgICAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IE1lc3NhZ2VcbiAgICAgICAgICogQG1lbWJlcm9mIEhvdGZpeE1lc3NhZ2UuRzJDX1BsYXllckluZm9cbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBHMkNfUGxheWVySW5mby5wcm90b3R5cGUuTWVzc2FnZSA9IFwiXCI7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEcyQ19QbGF5ZXJJbmZvIFBsYXllckluZm8uXG4gICAgICAgICAqIEBtZW1iZXIge0hvdGZpeE1lc3NhZ2UuSVBsYXllckluZm98bnVsbHx1bmRlZmluZWR9IFBsYXllckluZm9cbiAgICAgICAgICogQG1lbWJlcm9mIEhvdGZpeE1lc3NhZ2UuRzJDX1BsYXllckluZm9cbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBHMkNfUGxheWVySW5mby5wcm90b3R5cGUuUGxheWVySW5mbyA9IG51bGw7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEcyQ19QbGF5ZXJJbmZvIFBsYXllckluZm9zLlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheS48SG90Zml4TWVzc2FnZS5JUGxheWVySW5mbz59IFBsYXllckluZm9zXG4gICAgICAgICAqIEBtZW1iZXJvZiBIb3RmaXhNZXNzYWdlLkcyQ19QbGF5ZXJJbmZvXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgRzJDX1BsYXllckluZm8ucHJvdG90eXBlLlBsYXllckluZm9zID0gJHV0aWwuZW1wdHlBcnJheTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRzJDX1BsYXllckluZm8gVGVzdFJlcGVhdGVkU3RyaW5nLlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheS48c3RyaW5nPn0gVGVzdFJlcGVhdGVkU3RyaW5nXG4gICAgICAgICAqIEBtZW1iZXJvZiBIb3RmaXhNZXNzYWdlLkcyQ19QbGF5ZXJJbmZvXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgRzJDX1BsYXllckluZm8ucHJvdG90eXBlLlRlc3RSZXBlYXRlZFN0cmluZyA9ICR1dGlsLmVtcHR5QXJyYXk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEcyQ19QbGF5ZXJJbmZvIFRlc3RSZXBlYXRlZEludDMyLlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheS48bnVtYmVyPn0gVGVzdFJlcGVhdGVkSW50MzJcbiAgICAgICAgICogQG1lbWJlcm9mIEhvdGZpeE1lc3NhZ2UuRzJDX1BsYXllckluZm9cbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBHMkNfUGxheWVySW5mby5wcm90b3R5cGUuVGVzdFJlcGVhdGVkSW50MzIgPSAkdXRpbC5lbXB0eUFycmF5O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGEgbmV3IEcyQ19QbGF5ZXJJbmZvIGluc3RhbmNlIHVzaW5nIHRoZSBzcGVjaWZpZWQgcHJvcGVydGllcy5cbiAgICAgICAgICogQGZ1bmN0aW9uIGNyZWF0ZVxuICAgICAgICAgKiBAbWVtYmVyb2YgSG90Zml4TWVzc2FnZS5HMkNfUGxheWVySW5mb1xuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7SG90Zml4TWVzc2FnZS5JRzJDX1BsYXllckluZm89fSBbcHJvcGVydGllc10gUHJvcGVydGllcyB0byBzZXRcbiAgICAgICAgICogQHJldHVybnMge0hvdGZpeE1lc3NhZ2UuRzJDX1BsYXllckluZm99IEcyQ19QbGF5ZXJJbmZvIGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBHMkNfUGxheWVySW5mby5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUocHJvcGVydGllcykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBHMkNfUGxheWVySW5mbyhwcm9wZXJ0aWVzKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRW5jb2RlcyB0aGUgc3BlY2lmaWVkIEcyQ19QbGF5ZXJJbmZvIG1lc3NhZ2UuIERvZXMgbm90IGltcGxpY2l0bHkge0BsaW5rIEhvdGZpeE1lc3NhZ2UuRzJDX1BsYXllckluZm8udmVyaWZ5fHZlcmlmeX0gbWVzc2FnZXMuXG4gICAgICAgICAqIEBmdW5jdGlvbiBlbmNvZGVcbiAgICAgICAgICogQG1lbWJlcm9mIEhvdGZpeE1lc3NhZ2UuRzJDX1BsYXllckluZm9cbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcGFyYW0ge0hvdGZpeE1lc3NhZ2UuSUcyQ19QbGF5ZXJJbmZvfSBtIEcyQ19QbGF5ZXJJbmZvIG1lc3NhZ2Ugb3IgcGxhaW4gb2JqZWN0IHRvIGVuY29kZVxuICAgICAgICAgKiBAcGFyYW0geyRwcm90b2J1Zi5Xcml0ZXJ9IFt3XSBXcml0ZXIgdG8gZW5jb2RlIHRvXG4gICAgICAgICAqIEByZXR1cm5zIHskcHJvdG9idWYuV3JpdGVyfSBXcml0ZXJcbiAgICAgICAgICovXG4gICAgICAgIEcyQ19QbGF5ZXJJbmZvLmVuY29kZSA9IGZ1bmN0aW9uIGVuY29kZShtLCB3KSB7XG4gICAgICAgICAgICBpZiAoIXcpXG4gICAgICAgICAgICAgICAgdyA9ICRXcml0ZXIuY3JlYXRlKCk7XG4gICAgICAgICAgICBpZiAobS5QbGF5ZXJJbmZvICE9IG51bGwgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobSwgXCJQbGF5ZXJJbmZvXCIpKVxuICAgICAgICAgICAgICAgICRyb290LkhvdGZpeE1lc3NhZ2UuUGxheWVySW5mby5lbmNvZGUobS5QbGF5ZXJJbmZvLCB3LnVpbnQzMigxMCkuZm9yaygpKS5sZGVsaW0oKTtcbiAgICAgICAgICAgIGlmIChtLlBsYXllckluZm9zICE9IG51bGwgJiYgbS5QbGF5ZXJJbmZvcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG0uUGxheWVySW5mb3MubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICAgICAgICAgICRyb290LkhvdGZpeE1lc3NhZ2UuUGxheWVySW5mby5lbmNvZGUobS5QbGF5ZXJJbmZvc1tpXSwgdy51aW50MzIoMTgpLmZvcmsoKSkubGRlbGltKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobS5UZXN0UmVwZWF0ZWRTdHJpbmcgIT0gbnVsbCAmJiBtLlRlc3RSZXBlYXRlZFN0cmluZy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG0uVGVzdFJlcGVhdGVkU3RyaW5nLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgICAgICAgICB3LnVpbnQzMigyNikuc3RyaW5nKG0uVGVzdFJlcGVhdGVkU3RyaW5nW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtLlRlc3RSZXBlYXRlZEludDMyICE9IG51bGwgJiYgbS5UZXN0UmVwZWF0ZWRJbnQzMi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB3LnVpbnQzMigzNCkuZm9yaygpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbS5UZXN0UmVwZWF0ZWRJbnQzMi5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICAgICAgdy5pbnQzMihtLlRlc3RSZXBlYXRlZEludDMyW2ldKTtcbiAgICAgICAgICAgICAgICB3LmxkZWxpbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG0uUnBjSWQgIT0gbnVsbCAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtLCBcIlJwY0lkXCIpKVxuICAgICAgICAgICAgICAgIHcudWludDMyKDcyMCkuaW50MzIobS5ScGNJZCk7XG4gICAgICAgICAgICBpZiAobS5FcnJvciAhPSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG0sIFwiRXJyb3JcIikpXG4gICAgICAgICAgICAgICAgdy51aW50MzIoNzI4KS5pbnQzMihtLkVycm9yKTtcbiAgICAgICAgICAgIGlmIChtLk1lc3NhZ2UgIT0gbnVsbCAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtLCBcIk1lc3NhZ2VcIikpXG4gICAgICAgICAgICAgICAgdy51aW50MzIoNzM4KS5zdHJpbmcobS5NZXNzYWdlKTtcbiAgICAgICAgICAgIHJldHVybiB3O1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWNvZGVzIGEgRzJDX1BsYXllckluZm8gbWVzc2FnZSBmcm9tIHRoZSBzcGVjaWZpZWQgcmVhZGVyIG9yIGJ1ZmZlci5cbiAgICAgICAgICogQGZ1bmN0aW9uIGRlY29kZVxuICAgICAgICAgKiBAbWVtYmVyb2YgSG90Zml4TWVzc2FnZS5HMkNfUGxheWVySW5mb1xuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwYXJhbSB7JHByb3RvYnVmLlJlYWRlcnxVaW50OEFycmF5fSByIFJlYWRlciBvciBidWZmZXIgdG8gZGVjb2RlIGZyb21cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtsXSBNZXNzYWdlIGxlbmd0aCBpZiBrbm93biBiZWZvcmVoYW5kXG4gICAgICAgICAqIEByZXR1cm5zIHtIb3RmaXhNZXNzYWdlLkcyQ19QbGF5ZXJJbmZvfSBHMkNfUGxheWVySW5mb1xuICAgICAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHBheWxvYWQgaXMgbm90IGEgcmVhZGVyIG9yIHZhbGlkIGJ1ZmZlclxuICAgICAgICAgKiBAdGhyb3dzIHskcHJvdG9idWYudXRpbC5Qcm90b2NvbEVycm9yfSBJZiByZXF1aXJlZCBmaWVsZHMgYXJlIG1pc3NpbmdcbiAgICAgICAgICovXG4gICAgICAgIEcyQ19QbGF5ZXJJbmZvLmRlY29kZSA9IGZ1bmN0aW9uIGRlY29kZShyLCBsKSB7XG4gICAgICAgICAgICBpZiAoIShyIGluc3RhbmNlb2YgJFJlYWRlcikpXG4gICAgICAgICAgICAgICAgciA9ICRSZWFkZXIuY3JlYXRlKHIpO1xuICAgICAgICAgICAgdmFyIGMgPSBsID09PSB1bmRlZmluZWQgPyByLmxlbiA6IHIucG9zICsgbCwgbSA9IG5ldyAkcm9vdC5Ib3RmaXhNZXNzYWdlLkcyQ19QbGF5ZXJJbmZvKCk7XG4gICAgICAgICAgICB3aGlsZSAoci5wb3MgPCBjKSB7XG4gICAgICAgICAgICAgICAgdmFyIHQgPSByLnVpbnQzMigpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodCA+Pj4gMykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDkwOlxuICAgICAgICAgICAgICAgICAgICAgICAgbS5ScGNJZCA9IHIuaW50MzIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDkxOlxuICAgICAgICAgICAgICAgICAgICAgICAgbS5FcnJvciA9IHIuaW50MzIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDkyOlxuICAgICAgICAgICAgICAgICAgICAgICAgbS5NZXNzYWdlID0gci5zdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBtLlBsYXllckluZm8gPSAkcm9vdC5Ib3RmaXhNZXNzYWdlLlBsYXllckluZm8uZGVjb2RlKHIsIHIudWludDMyKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKG0uUGxheWVySW5mb3MgJiYgbS5QbGF5ZXJJbmZvcy5sZW5ndGgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0uUGxheWVySW5mb3MgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uUGxheWVySW5mb3MucHVzaCgkcm9vdC5Ib3RmaXhNZXNzYWdlLlBsYXllckluZm8uZGVjb2RlKHIsIHIudWludDMyKCkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShtLlRlc3RSZXBlYXRlZFN0cmluZyAmJiBtLlRlc3RSZXBlYXRlZFN0cmluZy5sZW5ndGgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0uVGVzdFJlcGVhdGVkU3RyaW5nID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBtLlRlc3RSZXBlYXRlZFN0cmluZy5wdXNoKHIuc3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKG0uVGVzdFJlcGVhdGVkSW50MzIgJiYgbS5UZXN0UmVwZWF0ZWRJbnQzMi5sZW5ndGgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0uVGVzdFJlcGVhdGVkSW50MzIgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgodCAmIDcpID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMyID0gci51aW50MzIoKSArIHIucG9zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChyLnBvcyA8IGMyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLlRlc3RSZXBlYXRlZEludDMyLnB1c2goci5pbnQzMigpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0uVGVzdFJlcGVhdGVkSW50MzIucHVzaChyLmludDMyKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICByLnNraXBUeXBlKHQgJiA3KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBHMkNfUGxheWVySW5mbztcbiAgICB9KSgpO1xuXG4gICAgcmV0dXJuIEhvdGZpeE1lc3NhZ2U7XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICRyb290O1xuIl19