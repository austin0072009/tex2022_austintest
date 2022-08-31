"use strict";
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