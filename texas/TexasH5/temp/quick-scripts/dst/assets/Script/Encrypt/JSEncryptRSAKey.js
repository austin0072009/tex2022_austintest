
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Encrypt/JSEncryptRSAKey.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e6bd9Afw3xJmpV26xYbguIY', 'JSEncryptRSAKey');
// Script/Encrypt/JSEncryptRSAKey.js

"use strict";

exports.__esModule = true;
exports.JSEncryptRSAKey = void 0;

var _jsbnbase = require("./lib/jsbn/jsbnbase64");

var _hex = require("./lib/asn1js/hex");

var _base = require("./lib/asn1js/base64");

var _asn = require("./lib/asn1js/asn1");

var _rsa = require("./lib/jsbn/rsa");

var _jsbn = require("./lib/jsbn/jsbn");

var _asn2 = require("./lib/jsrsasign/asn1-1.0");

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

/**
 * Create a new JSEncryptRSAKey that extends Tom Wu's RSA key object.
 * This object is just a decorator for parsing the key parameter
 * @param {string|Object} key - The key in string format, or an object containing
 * the parameters needed to build a RSAKey object.
 * @constructor
 */
var JSEncryptRSAKey =
/** @class */
function (_super) {
  __extends(JSEncryptRSAKey, _super);

  function JSEncryptRSAKey(key) {
    var _this = _super.call(this) || this; // Call the super constructor.
    //  RSAKey.call(this);
    // If a key key was provided.


    if (key) {
      // If this is a string...
      if (typeof key === "string") {
        _this.parseKey(key);
      } else if (JSEncryptRSAKey.hasPrivateKeyProperty(key) || JSEncryptRSAKey.hasPublicKeyProperty(key)) {
        // Set the values for the key.
        _this.parsePropertiesFrom(key);
      }
    }

    return _this;
  }
  /**
   * Method to parse a pem encoded string containing both a public or private key.
   * The method will translate the pem encoded string in a der encoded string and
   * will parse private key and public key parameters. This method accepts public key
   * in the rsaencryption pkcs #1 format (oid: 1.2.840.113549.1.1.1).
   *
   * @todo Check how many rsa formats use the same format of pkcs #1.
   *
   * The format is defined as:
   * PublicKeyInfo ::= SEQUENCE {
   *   algorithm       AlgorithmIdentifier,
   *   PublicKey       BIT STRING
   * }
   * Where AlgorithmIdentifier is:
   * AlgorithmIdentifier ::= SEQUENCE {
   *   algorithm       OBJECT IDENTIFIER,     the OID of the enc algorithm
   *   parameters      ANY DEFINED BY algorithm OPTIONAL (NULL for PKCS #1)
   * }
   * and PublicKey is a SEQUENCE encapsulated in a BIT STRING
   * RSAPublicKey ::= SEQUENCE {
   *   modulus           INTEGER,  -- n
   *   publicExponent    INTEGER   -- e
   * }
   * it's possible to examine the structure of the keys obtained from openssl using
   * an asn.1 dumper as the one used here to parse the components: http://lapo.it/asn1js/
   * @argument {string} pem the pem encoded string, can include the BEGIN/END header/footer
   * @private
   */


  JSEncryptRSAKey.prototype.parseKey = function (pem) {
    try {
      var modulus = 0;
      var public_exponent = 0;
      var reHex = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/;
      var der = reHex.test(pem) ? _hex.Hex.decode(pem) : _base.Base64.unarmor(pem);

      var asn1 = _asn.ASN1.decode(der); // Fixes a bug with OpenSSL 1.0+ private keys


      if (asn1.sub.length === 3) {
        asn1 = asn1.sub[2].sub[0];
      }

      if (asn1.sub.length === 9) {
        // Parse the private key.
        modulus = asn1.sub[1].getHexStringValue(); // bigint

        this.n = (0, _jsbn.parseBigInt)(modulus, 16);
        public_exponent = asn1.sub[2].getHexStringValue(); // int

        this.e = parseInt(public_exponent, 16);
        var private_exponent = asn1.sub[3].getHexStringValue(); // bigint

        this.d = (0, _jsbn.parseBigInt)(private_exponent, 16);
        var prime1 = asn1.sub[4].getHexStringValue(); // bigint

        this.p = (0, _jsbn.parseBigInt)(prime1, 16);
        var prime2 = asn1.sub[5].getHexStringValue(); // bigint

        this.q = (0, _jsbn.parseBigInt)(prime2, 16);
        var exponent1 = asn1.sub[6].getHexStringValue(); // bigint

        this.dmp1 = (0, _jsbn.parseBigInt)(exponent1, 16);
        var exponent2 = asn1.sub[7].getHexStringValue(); // bigint

        this.dmq1 = (0, _jsbn.parseBigInt)(exponent2, 16);
        var coefficient = asn1.sub[8].getHexStringValue(); // bigint

        this.coeff = (0, _jsbn.parseBigInt)(coefficient, 16);
      } else if (asn1.sub.length === 2) {
        // Parse the public key.
        var bit_string = asn1.sub[1];
        var sequence = bit_string.sub[0];
        modulus = sequence.sub[0].getHexStringValue();
        this.n = (0, _jsbn.parseBigInt)(modulus, 16);
        public_exponent = sequence.sub[1].getHexStringValue();
        this.e = parseInt(public_exponent, 16);
      } else {
        return false;
      }

      return true;
    } catch (ex) {
      return false;
    }
  };
  /**
   * Translate rsa parameters in a hex encoded string representing the rsa key.
   *
   * The translation follow the ASN.1 notation :
   * RSAPrivateKey ::= SEQUENCE {
   *   version           Version,
   *   modulus           INTEGER,  -- n
   *   publicExponent    INTEGER,  -- e
   *   privateExponent   INTEGER,  -- d
   *   prime1            INTEGER,  -- p
   *   prime2            INTEGER,  -- q
   *   exponent1         INTEGER,  -- d mod (p1)
   *   exponent2         INTEGER,  -- d mod (q-1)
   *   coefficient       INTEGER,  -- (inverse of q) mod p
   * }
   * @returns {string}  DER Encoded String representing the rsa private key
   * @private
   */


  JSEncryptRSAKey.prototype.getPrivateBaseKey = function () {
    var options = {
      array: [new _asn2.KJUR.asn1.DERInteger({
        "int": 0
      }), new _asn2.KJUR.asn1.DERInteger({
        bigint: this.n
      }), new _asn2.KJUR.asn1.DERInteger({
        "int": this.e
      }), new _asn2.KJUR.asn1.DERInteger({
        bigint: this.d
      }), new _asn2.KJUR.asn1.DERInteger({
        bigint: this.p
      }), new _asn2.KJUR.asn1.DERInteger({
        bigint: this.q
      }), new _asn2.KJUR.asn1.DERInteger({
        bigint: this.dmp1
      }), new _asn2.KJUR.asn1.DERInteger({
        bigint: this.dmq1
      }), new _asn2.KJUR.asn1.DERInteger({
        bigint: this.coeff
      })]
    };
    var seq = new _asn2.KJUR.asn1.DERSequence(options);
    return seq.getEncodedHex();
  };
  /**
   * base64 (pem) encoded version of the DER encoded representation
   * @returns {string} pem encoded representation without header and footer
   * @public
   */


  JSEncryptRSAKey.prototype.getPrivateBaseKeyB64 = function () {
    return (0, _jsbnbase.hex2b64)(this.getPrivateBaseKey());
  };
  /**
   * Translate rsa parameters in a hex encoded string representing the rsa public key.
   * The representation follow the ASN.1 notation :
   * PublicKeyInfo ::= SEQUENCE {
   *   algorithm       AlgorithmIdentifier,
   *   PublicKey       BIT STRING
   * }
   * Where AlgorithmIdentifier is:
   * AlgorithmIdentifier ::= SEQUENCE {
   *   algorithm       OBJECT IDENTIFIER,     the OID of the enc algorithm
   *   parameters      ANY DEFINED BY algorithm OPTIONAL (NULL for PKCS #1)
   * }
   * and PublicKey is a SEQUENCE encapsulated in a BIT STRING
   * RSAPublicKey ::= SEQUENCE {
   *   modulus           INTEGER,  -- n
   *   publicExponent    INTEGER   -- e
   * }
   * @returns {string} DER Encoded String representing the rsa public key
   * @private
   */


  JSEncryptRSAKey.prototype.getPublicBaseKey = function () {
    var first_sequence = new _asn2.KJUR.asn1.DERSequence({
      array: [new _asn2.KJUR.asn1.DERObjectIdentifier({
        oid: "1.2.840.113549.1.1.1"
      }), new _asn2.KJUR.asn1.DERNull()]
    });
    var second_sequence = new _asn2.KJUR.asn1.DERSequence({
      array: [new _asn2.KJUR.asn1.DERInteger({
        bigint: this.n
      }), new _asn2.KJUR.asn1.DERInteger({
        "int": this.e
      })]
    });
    var bit_string = new _asn2.KJUR.asn1.DERBitString({
      hex: "00" + second_sequence.getEncodedHex()
    });
    var seq = new _asn2.KJUR.asn1.DERSequence({
      array: [first_sequence, bit_string]
    });
    return seq.getEncodedHex();
  };
  /**
   * base64 (pem) encoded version of the DER encoded representation
   * @returns {string} pem encoded representation without header and footer
   * @public
   */


  JSEncryptRSAKey.prototype.getPublicBaseKeyB64 = function () {
    return (0, _jsbnbase.hex2b64)(this.getPublicBaseKey());
  };
  /**
   * wrap the string in block of width chars. The default value for rsa keys is 64
   * characters.
   * @param {string} str the pem encoded string without header and footer
   * @param {Number} [width=64] - the length the string has to be wrapped at
   * @returns {string}
   * @private
   */


  JSEncryptRSAKey.wordwrap = function (str, width) {
    width = width || 64;

    if (!str) {
      return str;
    }

    var regex = "(.{1," + width + "})( +|$\n?)|(.{1," + width + "})";
    return str.match(RegExp(regex, "g")).join("\n");
  };
  /**
   * Retrieve the pem encoded private key
   * @returns {string} the pem encoded private key with header/footer
   * @public
   */


  JSEncryptRSAKey.prototype.getPrivateKey = function () {
    var key = "-----BEGIN RSA PRIVATE KEY-----\n";
    key += JSEncryptRSAKey.wordwrap(this.getPrivateBaseKeyB64()) + "\n";
    key += "-----END RSA PRIVATE KEY-----";
    return key;
  };
  /**
   * Retrieve the pem encoded public key
   * @returns {string} the pem encoded public key with header/footer
   * @public
   */


  JSEncryptRSAKey.prototype.getPublicKey = function () {
    var key = "-----BEGIN PUBLIC KEY-----\n";
    key += JSEncryptRSAKey.wordwrap(this.getPublicBaseKeyB64()) + "\n";
    key += "-----END PUBLIC KEY-----";
    return key;
  };
  /**
   * Check if the object contains the necessary parameters to populate the rsa modulus
   * and public exponent parameters.
   * @param {Object} [obj={}] - An object that may contain the two public key
   * parameters
   * @returns {boolean} true if the object contains both the modulus and the public exponent
   * properties (n and e)
   * @todo check for types of n and e. N should be a parseable bigInt object, E should
   * be a parseable integer number
   * @private
   */


  JSEncryptRSAKey.hasPublicKeyProperty = function (obj) {
    obj = obj || {};
    return obj.hasOwnProperty("n") && obj.hasOwnProperty("e");
  };
  /**
   * Check if the object contains ALL the parameters of an RSA key.
   * @param {Object} [obj={}] - An object that may contain nine rsa key
   * parameters
   * @returns {boolean} true if the object contains all the parameters needed
   * @todo check for types of the parameters all the parameters but the public exponent
   * should be parseable bigint objects, the public exponent should be a parseable integer number
   * @private
   */


  JSEncryptRSAKey.hasPrivateKeyProperty = function (obj) {
    obj = obj || {};
    return obj.hasOwnProperty("n") && obj.hasOwnProperty("e") && obj.hasOwnProperty("d") && obj.hasOwnProperty("p") && obj.hasOwnProperty("q") && obj.hasOwnProperty("dmp1") && obj.hasOwnProperty("dmq1") && obj.hasOwnProperty("coeff");
  };
  /**
   * Parse the properties of obj in the current rsa object. Obj should AT LEAST
   * include the modulus and public exponent (n, e) parameters.
   * @param {Object} obj - the object containing rsa parameters
   * @private
   */


  JSEncryptRSAKey.prototype.parsePropertiesFrom = function (obj) {
    this.n = obj.n;
    this.e = obj.e;

    if (obj.hasOwnProperty("d")) {
      this.d = obj.d;
      this.p = obj.p;
      this.q = obj.q;
      this.dmp1 = obj.dmp1;
      this.dmq1 = obj.dmq1;
      this.coeff = obj.coeff;
    }
  };

  return JSEncryptRSAKey;
}(_rsa.RSAKey);

exports.JSEncryptRSAKey = JSEncryptRSAKey;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbmNyeXB0XFxKU0VuY3J5cHRSU0FLZXkuanMiXSwibmFtZXMiOlsiX19leHRlbmRzIiwiZXh0ZW5kU3RhdGljcyIsImQiLCJiIiwiT2JqZWN0Iiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJBcnJheSIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJUeXBlRXJyb3IiLCJTdHJpbmciLCJfXyIsImNvbnN0cnVjdG9yIiwiY3JlYXRlIiwiSlNFbmNyeXB0UlNBS2V5IiwiX3N1cGVyIiwia2V5IiwiX3RoaXMiLCJwYXJzZUtleSIsImhhc1ByaXZhdGVLZXlQcm9wZXJ0eSIsImhhc1B1YmxpY0tleVByb3BlcnR5IiwicGFyc2VQcm9wZXJ0aWVzRnJvbSIsInBlbSIsIm1vZHVsdXMiLCJwdWJsaWNfZXhwb25lbnQiLCJyZUhleCIsImRlciIsInRlc3QiLCJIZXgiLCJkZWNvZGUiLCJCYXNlNjQiLCJ1bmFybW9yIiwiYXNuMSIsIkFTTjEiLCJzdWIiLCJsZW5ndGgiLCJnZXRIZXhTdHJpbmdWYWx1ZSIsIm4iLCJlIiwicGFyc2VJbnQiLCJwcml2YXRlX2V4cG9uZW50IiwicHJpbWUxIiwicHJpbWUyIiwicSIsImV4cG9uZW50MSIsImRtcDEiLCJleHBvbmVudDIiLCJkbXExIiwiY29lZmZpY2llbnQiLCJjb2VmZiIsImJpdF9zdHJpbmciLCJzZXF1ZW5jZSIsImV4IiwiZ2V0UHJpdmF0ZUJhc2VLZXkiLCJvcHRpb25zIiwiYXJyYXkiLCJLSlVSIiwiREVSSW50ZWdlciIsImJpZ2ludCIsInNlcSIsIkRFUlNlcXVlbmNlIiwiZ2V0RW5jb2RlZEhleCIsImdldFByaXZhdGVCYXNlS2V5QjY0IiwiZ2V0UHVibGljQmFzZUtleSIsImZpcnN0X3NlcXVlbmNlIiwiREVST2JqZWN0SWRlbnRpZmllciIsIm9pZCIsIkRFUk51bGwiLCJzZWNvbmRfc2VxdWVuY2UiLCJERVJCaXRTdHJpbmciLCJoZXgiLCJnZXRQdWJsaWNCYXNlS2V5QjY0Iiwid29yZHdyYXAiLCJzdHIiLCJ3aWR0aCIsInJlZ2V4IiwibWF0Y2giLCJSZWdFeHAiLCJqb2luIiwiZ2V0UHJpdmF0ZUtleSIsImdldFB1YmxpY0tleSIsIm9iaiIsIlJTQUtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFyQkEsSUFBSUEsU0FBUyxHQUFJLFVBQVEsU0FBS0EsU0FBZCxJQUE2QixZQUFZO0FBQ3JELE1BQUlDLGNBQWEsR0FBRyx1QkFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0FBQ2hDRixJQUFBQSxjQUFhLEdBQUdHLE1BQU0sQ0FBQ0MsY0FBUCxJQUNYO0FBQUVDLE1BQUFBLFNBQVMsRUFBRTtBQUFiLGlCQUE2QkMsS0FBN0IsSUFBc0MsVUFBVUwsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0FBQUVELE1BQUFBLENBQUMsQ0FBQ0ksU0FBRixHQUFjSCxDQUFkO0FBQWtCLEtBRC9ELElBRVosVUFBVUQsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0FBQUUsV0FBSyxJQUFJSyxDQUFULElBQWNMLENBQWQ7QUFBaUIsWUFBSUMsTUFBTSxDQUFDSyxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUNSLENBQXJDLEVBQXdDSyxDQUF4QyxDQUFKLEVBQWdETixDQUFDLENBQUNNLENBQUQsQ0FBRCxHQUFPTCxDQUFDLENBQUNLLENBQUQsQ0FBUjtBQUFqRTtBQUErRSxLQUZyRzs7QUFHQSxXQUFPUCxjQUFhLENBQUNDLENBQUQsRUFBSUMsQ0FBSixDQUFwQjtBQUNILEdBTEQ7O0FBTUEsU0FBTyxVQUFVRCxDQUFWLEVBQWFDLENBQWIsRUFBZ0I7QUFDbkIsUUFBSSxPQUFPQSxDQUFQLEtBQWEsVUFBYixJQUEyQkEsQ0FBQyxLQUFLLElBQXJDLEVBQ0ksTUFBTSxJQUFJUyxTQUFKLENBQWMseUJBQXlCQyxNQUFNLENBQUNWLENBQUQsQ0FBL0IsR0FB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RyxDQUFDbEYsQ0FBYjtBQUNBLFdBQUtNLENBQUwsR0FBUzRFLEdBQUcsQ0FBQzVFLENBQWI7QUFDQSxXQUFLc0MsQ0FBTCxHQUFTc0MsR0FBRyxDQUFDdEMsQ0FBYjtBQUNBLFdBQUtFLElBQUwsR0FBWW9DLEdBQUcsQ0FBQ3BDLElBQWhCO0FBQ0EsV0FBS0UsSUFBTCxHQUFZa0MsR0FBRyxDQUFDbEMsSUFBaEI7QUFDQSxXQUFLRSxLQUFMLEdBQWFnQyxHQUFHLENBQUNoQyxLQUFqQjtBQUNIO0FBQ0osR0FYRDs7QUFZQSxTQUFPbkMsZUFBUDtBQUNILENBNVJvQyxDQTRSbkNvRSxXQTVSbUMsQ0FBckMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fICgpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IHsgaGV4MmI2NCB9IGZyb20gXCIuL2xpYi9qc2JuL2pzYm5iYXNlNjRcIjtcbmltcG9ydCB7IEhleCB9IGZyb20gXCIuL2xpYi9hc24xanMvaGV4XCI7XG5pbXBvcnQgeyBCYXNlNjQgfSBmcm9tIFwiLi9saWIvYXNuMWpzL2Jhc2U2NFwiO1xuaW1wb3J0IHsgQVNOMSB9IGZyb20gXCIuL2xpYi9hc24xanMvYXNuMVwiO1xuaW1wb3J0IHsgUlNBS2V5IH0gZnJvbSBcIi4vbGliL2pzYm4vcnNhXCI7XG5pbXBvcnQgeyBwYXJzZUJpZ0ludCB9IGZyb20gXCIuL2xpYi9qc2JuL2pzYm5cIjtcbmltcG9ydCB7IEtKVVIgfSBmcm9tIFwiLi9saWIvanNyc2FzaWduL2FzbjEtMS4wXCI7XG4vKipcbiAqIENyZWF0ZSBhIG5ldyBKU0VuY3J5cHRSU0FLZXkgdGhhdCBleHRlbmRzIFRvbSBXdSdzIFJTQSBrZXkgb2JqZWN0LlxuICogVGhpcyBvYmplY3QgaXMganVzdCBhIGRlY29yYXRvciBmb3IgcGFyc2luZyB0aGUga2V5IHBhcmFtZXRlclxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBrZXkgLSBUaGUga2V5IGluIHN0cmluZyBmb3JtYXQsIG9yIGFuIG9iamVjdCBjb250YWluaW5nXG4gKiB0aGUgcGFyYW1ldGVycyBuZWVkZWQgdG8gYnVpbGQgYSBSU0FLZXkgb2JqZWN0LlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnZhciBKU0VuY3J5cHRSU0FLZXkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEpTRW5jcnlwdFJTQUtleSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBKU0VuY3J5cHRSU0FLZXkgKGtleSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICAvLyBDYWxsIHRoZSBzdXBlciBjb25zdHJ1Y3Rvci5cbiAgICAgICAgLy8gIFJTQUtleS5jYWxsKHRoaXMpO1xuICAgICAgICAvLyBJZiBhIGtleSBrZXkgd2FzIHByb3ZpZGVkLlxuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICAvLyBJZiB0aGlzIGlzIGEgc3RyaW5nLi4uXG4gICAgICAgICAgICBpZiAodHlwZW9mIGtleSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIF90aGlzLnBhcnNlS2V5KGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChKU0VuY3J5cHRSU0FLZXkuaGFzUHJpdmF0ZUtleVByb3BlcnR5KGtleSkgfHxcbiAgICAgICAgICAgICAgICBKU0VuY3J5cHRSU0FLZXkuaGFzUHVibGljS2V5UHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIC8vIFNldCB0aGUgdmFsdWVzIGZvciB0aGUga2V5LlxuICAgICAgICAgICAgICAgIF90aGlzLnBhcnNlUHJvcGVydGllc0Zyb20oa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE1ldGhvZCB0byBwYXJzZSBhIHBlbSBlbmNvZGVkIHN0cmluZyBjb250YWluaW5nIGJvdGggYSBwdWJsaWMgb3IgcHJpdmF0ZSBrZXkuXG4gICAgICogVGhlIG1ldGhvZCB3aWxsIHRyYW5zbGF0ZSB0aGUgcGVtIGVuY29kZWQgc3RyaW5nIGluIGEgZGVyIGVuY29kZWQgc3RyaW5nIGFuZFxuICAgICAqIHdpbGwgcGFyc2UgcHJpdmF0ZSBrZXkgYW5kIHB1YmxpYyBrZXkgcGFyYW1ldGVycy4gVGhpcyBtZXRob2QgYWNjZXB0cyBwdWJsaWMga2V5XG4gICAgICogaW4gdGhlIHJzYWVuY3J5cHRpb24gcGtjcyAjMSBmb3JtYXQgKG9pZDogMS4yLjg0MC4xMTM1NDkuMS4xLjEpLlxuICAgICAqXG4gICAgICogQHRvZG8gQ2hlY2sgaG93IG1hbnkgcnNhIGZvcm1hdHMgdXNlIHRoZSBzYW1lIGZvcm1hdCBvZiBwa2NzICMxLlxuICAgICAqXG4gICAgICogVGhlIGZvcm1hdCBpcyBkZWZpbmVkIGFzOlxuICAgICAqIFB1YmxpY0tleUluZm8gOjo9IFNFUVVFTkNFIHtcbiAgICAgKiAgIGFsZ29yaXRobSAgICAgICBBbGdvcml0aG1JZGVudGlmaWVyLFxuICAgICAqICAgUHVibGljS2V5ICAgICAgIEJJVCBTVFJJTkdcbiAgICAgKiB9XG4gICAgICogV2hlcmUgQWxnb3JpdGhtSWRlbnRpZmllciBpczpcbiAgICAgKiBBbGdvcml0aG1JZGVudGlmaWVyIDo6PSBTRVFVRU5DRSB7XG4gICAgICogICBhbGdvcml0aG0gICAgICAgT0JKRUNUIElERU5USUZJRVIsICAgICB0aGUgT0lEIG9mIHRoZSBlbmMgYWxnb3JpdGhtXG4gICAgICogICBwYXJhbWV0ZXJzICAgICAgQU5ZIERFRklORUQgQlkgYWxnb3JpdGhtIE9QVElPTkFMIChOVUxMIGZvciBQS0NTICMxKVxuICAgICAqIH1cbiAgICAgKiBhbmQgUHVibGljS2V5IGlzIGEgU0VRVUVOQ0UgZW5jYXBzdWxhdGVkIGluIGEgQklUIFNUUklOR1xuICAgICAqIFJTQVB1YmxpY0tleSA6Oj0gU0VRVUVOQ0Uge1xuICAgICAqICAgbW9kdWx1cyAgICAgICAgICAgSU5URUdFUiwgIC0tIG5cbiAgICAgKiAgIHB1YmxpY0V4cG9uZW50ICAgIElOVEVHRVIgICAtLSBlXG4gICAgICogfVxuICAgICAqIGl0J3MgcG9zc2libGUgdG8gZXhhbWluZSB0aGUgc3RydWN0dXJlIG9mIHRoZSBrZXlzIG9idGFpbmVkIGZyb20gb3BlbnNzbCB1c2luZ1xuICAgICAqIGFuIGFzbi4xIGR1bXBlciBhcyB0aGUgb25lIHVzZWQgaGVyZSB0byBwYXJzZSB0aGUgY29tcG9uZW50czogaHR0cDovL2xhcG8uaXQvYXNuMWpzL1xuICAgICAqIEBhcmd1bWVudCB7c3RyaW5nfSBwZW0gdGhlIHBlbSBlbmNvZGVkIHN0cmluZywgY2FuIGluY2x1ZGUgdGhlIEJFR0lOL0VORCBoZWFkZXIvZm9vdGVyXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBKU0VuY3J5cHRSU0FLZXkucHJvdG90eXBlLnBhcnNlS2V5ID0gZnVuY3Rpb24gKHBlbSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIG1vZHVsdXMgPSAwO1xuICAgICAgICAgICAgdmFyIHB1YmxpY19leHBvbmVudCA9IDA7XG4gICAgICAgICAgICB2YXIgcmVIZXggPSAvXlxccyooPzpbMC05QS1GYS1mXVswLTlBLUZhLWZdXFxzKikrJC87XG4gICAgICAgICAgICB2YXIgZGVyID0gcmVIZXgudGVzdChwZW0pID8gSGV4LmRlY29kZShwZW0pIDogQmFzZTY0LnVuYXJtb3IocGVtKTtcbiAgICAgICAgICAgIHZhciBhc24xID0gQVNOMS5kZWNvZGUoZGVyKTtcbiAgICAgICAgICAgIC8vIEZpeGVzIGEgYnVnIHdpdGggT3BlblNTTCAxLjArIHByaXZhdGUga2V5c1xuICAgICAgICAgICAgaWYgKGFzbjEuc3ViLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIGFzbjEgPSBhc24xLnN1YlsyXS5zdWJbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYXNuMS5zdWIubGVuZ3RoID09PSA5KSB7XG4gICAgICAgICAgICAgICAgLy8gUGFyc2UgdGhlIHByaXZhdGUga2V5LlxuICAgICAgICAgICAgICAgIG1vZHVsdXMgPSBhc24xLnN1YlsxXS5nZXRIZXhTdHJpbmdWYWx1ZSgpOyAvLyBiaWdpbnRcbiAgICAgICAgICAgICAgICB0aGlzLm4gPSBwYXJzZUJpZ0ludChtb2R1bHVzLCAxNik7XG4gICAgICAgICAgICAgICAgcHVibGljX2V4cG9uZW50ID0gYXNuMS5zdWJbMl0uZ2V0SGV4U3RyaW5nVmFsdWUoKTsgLy8gaW50XG4gICAgICAgICAgICAgICAgdGhpcy5lID0gcGFyc2VJbnQocHVibGljX2V4cG9uZW50LCAxNik7XG4gICAgICAgICAgICAgICAgdmFyIHByaXZhdGVfZXhwb25lbnQgPSBhc24xLnN1YlszXS5nZXRIZXhTdHJpbmdWYWx1ZSgpOyAvLyBiaWdpbnRcbiAgICAgICAgICAgICAgICB0aGlzLmQgPSBwYXJzZUJpZ0ludChwcml2YXRlX2V4cG9uZW50LCAxNik7XG4gICAgICAgICAgICAgICAgdmFyIHByaW1lMSA9IGFzbjEuc3ViWzRdLmdldEhleFN0cmluZ1ZhbHVlKCk7IC8vIGJpZ2ludFxuICAgICAgICAgICAgICAgIHRoaXMucCA9IHBhcnNlQmlnSW50KHByaW1lMSwgMTYpO1xuICAgICAgICAgICAgICAgIHZhciBwcmltZTIgPSBhc24xLnN1Yls1XS5nZXRIZXhTdHJpbmdWYWx1ZSgpOyAvLyBiaWdpbnRcbiAgICAgICAgICAgICAgICB0aGlzLnEgPSBwYXJzZUJpZ0ludChwcmltZTIsIDE2KTtcbiAgICAgICAgICAgICAgICB2YXIgZXhwb25lbnQxID0gYXNuMS5zdWJbNl0uZ2V0SGV4U3RyaW5nVmFsdWUoKTsgLy8gYmlnaW50XG4gICAgICAgICAgICAgICAgdGhpcy5kbXAxID0gcGFyc2VCaWdJbnQoZXhwb25lbnQxLCAxNik7XG4gICAgICAgICAgICAgICAgdmFyIGV4cG9uZW50MiA9IGFzbjEuc3ViWzddLmdldEhleFN0cmluZ1ZhbHVlKCk7IC8vIGJpZ2ludFxuICAgICAgICAgICAgICAgIHRoaXMuZG1xMSA9IHBhcnNlQmlnSW50KGV4cG9uZW50MiwgMTYpO1xuICAgICAgICAgICAgICAgIHZhciBjb2VmZmljaWVudCA9IGFzbjEuc3ViWzhdLmdldEhleFN0cmluZ1ZhbHVlKCk7IC8vIGJpZ2ludFxuICAgICAgICAgICAgICAgIHRoaXMuY29lZmYgPSBwYXJzZUJpZ0ludChjb2VmZmljaWVudCwgMTYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYXNuMS5zdWIubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgLy8gUGFyc2UgdGhlIHB1YmxpYyBrZXkuXG4gICAgICAgICAgICAgICAgdmFyIGJpdF9zdHJpbmcgPSBhc24xLnN1YlsxXTtcbiAgICAgICAgICAgICAgICB2YXIgc2VxdWVuY2UgPSBiaXRfc3RyaW5nLnN1YlswXTtcbiAgICAgICAgICAgICAgICBtb2R1bHVzID0gc2VxdWVuY2Uuc3ViWzBdLmdldEhleFN0cmluZ1ZhbHVlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5uID0gcGFyc2VCaWdJbnQobW9kdWx1cywgMTYpO1xuICAgICAgICAgICAgICAgIHB1YmxpY19leHBvbmVudCA9IHNlcXVlbmNlLnN1YlsxXS5nZXRIZXhTdHJpbmdWYWx1ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZSA9IHBhcnNlSW50KHB1YmxpY19leHBvbmVudCwgMTYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRyYW5zbGF0ZSByc2EgcGFyYW1ldGVycyBpbiBhIGhleCBlbmNvZGVkIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIHJzYSBrZXkuXG4gICAgICpcbiAgICAgKiBUaGUgdHJhbnNsYXRpb24gZm9sbG93IHRoZSBBU04uMSBub3RhdGlvbiA6XG4gICAgICogUlNBUHJpdmF0ZUtleSA6Oj0gU0VRVUVOQ0Uge1xuICAgICAqICAgdmVyc2lvbiAgICAgICAgICAgVmVyc2lvbixcbiAgICAgKiAgIG1vZHVsdXMgICAgICAgICAgIElOVEVHRVIsICAtLSBuXG4gICAgICogICBwdWJsaWNFeHBvbmVudCAgICBJTlRFR0VSLCAgLS0gZVxuICAgICAqICAgcHJpdmF0ZUV4cG9uZW50ICAgSU5URUdFUiwgIC0tIGRcbiAgICAgKiAgIHByaW1lMSAgICAgICAgICAgIElOVEVHRVIsICAtLSBwXG4gICAgICogICBwcmltZTIgICAgICAgICAgICBJTlRFR0VSLCAgLS0gcVxuICAgICAqICAgZXhwb25lbnQxICAgICAgICAgSU5URUdFUiwgIC0tIGQgbW9kIChwMSlcbiAgICAgKiAgIGV4cG9uZW50MiAgICAgICAgIElOVEVHRVIsICAtLSBkIG1vZCAocS0xKVxuICAgICAqICAgY29lZmZpY2llbnQgICAgICAgSU5URUdFUiwgIC0tIChpbnZlcnNlIG9mIHEpIG1vZCBwXG4gICAgICogfVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9ICBERVIgRW5jb2RlZCBTdHJpbmcgcmVwcmVzZW50aW5nIHRoZSByc2EgcHJpdmF0ZSBrZXlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIEpTRW5jcnlwdFJTQUtleS5wcm90b3R5cGUuZ2V0UHJpdmF0ZUJhc2VLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgYXJyYXk6IFtcbiAgICAgICAgICAgICAgICBuZXcgS0pVUi5hc24xLkRFUkludGVnZXIoeyBpbnQ6IDAgfSksXG4gICAgICAgICAgICAgICAgbmV3IEtKVVIuYXNuMS5ERVJJbnRlZ2VyKHsgYmlnaW50OiB0aGlzLm4gfSksXG4gICAgICAgICAgICAgICAgbmV3IEtKVVIuYXNuMS5ERVJJbnRlZ2VyKHsgaW50OiB0aGlzLmUgfSksXG4gICAgICAgICAgICAgICAgbmV3IEtKVVIuYXNuMS5ERVJJbnRlZ2VyKHsgYmlnaW50OiB0aGlzLmQgfSksXG4gICAgICAgICAgICAgICAgbmV3IEtKVVIuYXNuMS5ERVJJbnRlZ2VyKHsgYmlnaW50OiB0aGlzLnAgfSksXG4gICAgICAgICAgICAgICAgbmV3IEtKVVIuYXNuMS5ERVJJbnRlZ2VyKHsgYmlnaW50OiB0aGlzLnEgfSksXG4gICAgICAgICAgICAgICAgbmV3IEtKVVIuYXNuMS5ERVJJbnRlZ2VyKHsgYmlnaW50OiB0aGlzLmRtcDEgfSksXG4gICAgICAgICAgICAgICAgbmV3IEtKVVIuYXNuMS5ERVJJbnRlZ2VyKHsgYmlnaW50OiB0aGlzLmRtcTEgfSksXG4gICAgICAgICAgICAgICAgbmV3IEtKVVIuYXNuMS5ERVJJbnRlZ2VyKHsgYmlnaW50OiB0aGlzLmNvZWZmIH0pXG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgICAgIHZhciBzZXEgPSBuZXcgS0pVUi5hc24xLkRFUlNlcXVlbmNlKG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gc2VxLmdldEVuY29kZWRIZXgoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIGJhc2U2NCAocGVtKSBlbmNvZGVkIHZlcnNpb24gb2YgdGhlIERFUiBlbmNvZGVkIHJlcHJlc2VudGF0aW9uXG4gICAgICogQHJldHVybnMge3N0cmluZ30gcGVtIGVuY29kZWQgcmVwcmVzZW50YXRpb24gd2l0aG91dCBoZWFkZXIgYW5kIGZvb3RlclxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBKU0VuY3J5cHRSU0FLZXkucHJvdG90eXBlLmdldFByaXZhdGVCYXNlS2V5QjY0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gaGV4MmI2NCh0aGlzLmdldFByaXZhdGVCYXNlS2V5KCkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVHJhbnNsYXRlIHJzYSBwYXJhbWV0ZXJzIGluIGEgaGV4IGVuY29kZWQgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgcnNhIHB1YmxpYyBrZXkuXG4gICAgICogVGhlIHJlcHJlc2VudGF0aW9uIGZvbGxvdyB0aGUgQVNOLjEgbm90YXRpb24gOlxuICAgICAqIFB1YmxpY0tleUluZm8gOjo9IFNFUVVFTkNFIHtcbiAgICAgKiAgIGFsZ29yaXRobSAgICAgICBBbGdvcml0aG1JZGVudGlmaWVyLFxuICAgICAqICAgUHVibGljS2V5ICAgICAgIEJJVCBTVFJJTkdcbiAgICAgKiB9XG4gICAgICogV2hlcmUgQWxnb3JpdGhtSWRlbnRpZmllciBpczpcbiAgICAgKiBBbGdvcml0aG1JZGVudGlmaWVyIDo6PSBTRVFVRU5DRSB7XG4gICAgICogICBhbGdvcml0aG0gICAgICAgT0JKRUNUIElERU5USUZJRVIsICAgICB0aGUgT0lEIG9mIHRoZSBlbmMgYWxnb3JpdGhtXG4gICAgICogICBwYXJhbWV0ZXJzICAgICAgQU5ZIERFRklORUQgQlkgYWxnb3JpdGhtIE9QVElPTkFMIChOVUxMIGZvciBQS0NTICMxKVxuICAgICAqIH1cbiAgICAgKiBhbmQgUHVibGljS2V5IGlzIGEgU0VRVUVOQ0UgZW5jYXBzdWxhdGVkIGluIGEgQklUIFNUUklOR1xuICAgICAqIFJTQVB1YmxpY0tleSA6Oj0gU0VRVUVOQ0Uge1xuICAgICAqICAgbW9kdWx1cyAgICAgICAgICAgSU5URUdFUiwgIC0tIG5cbiAgICAgKiAgIHB1YmxpY0V4cG9uZW50ICAgIElOVEVHRVIgICAtLSBlXG4gICAgICogfVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IERFUiBFbmNvZGVkIFN0cmluZyByZXByZXNlbnRpbmcgdGhlIHJzYSBwdWJsaWMga2V5XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBKU0VuY3J5cHRSU0FLZXkucHJvdG90eXBlLmdldFB1YmxpY0Jhc2VLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBmaXJzdF9zZXF1ZW5jZSA9IG5ldyBLSlVSLmFzbjEuREVSU2VxdWVuY2Uoe1xuICAgICAgICAgICAgYXJyYXk6IFtcbiAgICAgICAgICAgICAgICBuZXcgS0pVUi5hc24xLkRFUk9iamVjdElkZW50aWZpZXIoeyBvaWQ6IFwiMS4yLjg0MC4xMTM1NDkuMS4xLjFcIiB9KSxcbiAgICAgICAgICAgICAgICBuZXcgS0pVUi5hc24xLkRFUk51bGwoKVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHNlY29uZF9zZXF1ZW5jZSA9IG5ldyBLSlVSLmFzbjEuREVSU2VxdWVuY2Uoe1xuICAgICAgICAgICAgYXJyYXk6IFtcbiAgICAgICAgICAgICAgICBuZXcgS0pVUi5hc24xLkRFUkludGVnZXIoeyBiaWdpbnQ6IHRoaXMubiB9KSxcbiAgICAgICAgICAgICAgICBuZXcgS0pVUi5hc24xLkRFUkludGVnZXIoeyBpbnQ6IHRoaXMuZSB9KVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGJpdF9zdHJpbmcgPSBuZXcgS0pVUi5hc24xLkRFUkJpdFN0cmluZyh7XG4gICAgICAgICAgICBoZXg6IFwiMDBcIiArIHNlY29uZF9zZXF1ZW5jZS5nZXRFbmNvZGVkSGV4KClcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBzZXEgPSBuZXcgS0pVUi5hc24xLkRFUlNlcXVlbmNlKHtcbiAgICAgICAgICAgIGFycmF5OiBbXG4gICAgICAgICAgICAgICAgZmlyc3Rfc2VxdWVuY2UsXG4gICAgICAgICAgICAgICAgYml0X3N0cmluZ1xuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHNlcS5nZXRFbmNvZGVkSGV4KCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBiYXNlNjQgKHBlbSkgZW5jb2RlZCB2ZXJzaW9uIG9mIHRoZSBERVIgZW5jb2RlZCByZXByZXNlbnRhdGlvblxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IHBlbSBlbmNvZGVkIHJlcHJlc2VudGF0aW9uIHdpdGhvdXQgaGVhZGVyIGFuZCBmb290ZXJcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgSlNFbmNyeXB0UlNBS2V5LnByb3RvdHlwZS5nZXRQdWJsaWNCYXNlS2V5QjY0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gaGV4MmI2NCh0aGlzLmdldFB1YmxpY0Jhc2VLZXkoKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiB3cmFwIHRoZSBzdHJpbmcgaW4gYmxvY2sgb2Ygd2lkdGggY2hhcnMuIFRoZSBkZWZhdWx0IHZhbHVlIGZvciByc2Ega2V5cyBpcyA2NFxuICAgICAqIGNoYXJhY3RlcnMuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0ciB0aGUgcGVtIGVuY29kZWQgc3RyaW5nIHdpdGhvdXQgaGVhZGVyIGFuZCBmb290ZXJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW3dpZHRoPTY0XSAtIHRoZSBsZW5ndGggdGhlIHN0cmluZyBoYXMgdG8gYmUgd3JhcHBlZCBhdFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBKU0VuY3J5cHRSU0FLZXkud29yZHdyYXAgPSBmdW5jdGlvbiAoc3RyLCB3aWR0aCkge1xuICAgICAgICB3aWR0aCA9IHdpZHRoIHx8IDY0O1xuICAgICAgICBpZiAoIXN0cikge1xuICAgICAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVnZXggPSBcIiguezEsXCIgKyB3aWR0aCArIFwifSkoICt8JFxcbj8pfCguezEsXCIgKyB3aWR0aCArIFwifSlcIjtcbiAgICAgICAgcmV0dXJuIHN0ci5tYXRjaChSZWdFeHAocmVnZXgsIFwiZ1wiKSkuam9pbihcIlxcblwiKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHJpZXZlIHRoZSBwZW0gZW5jb2RlZCBwcml2YXRlIGtleVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBwZW0gZW5jb2RlZCBwcml2YXRlIGtleSB3aXRoIGhlYWRlci9mb290ZXJcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgSlNFbmNyeXB0UlNBS2V5LnByb3RvdHlwZS5nZXRQcml2YXRlS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIga2V5ID0gXCItLS0tLUJFR0lOIFJTQSBQUklWQVRFIEtFWS0tLS0tXFxuXCI7XG4gICAgICAgIGtleSArPSBKU0VuY3J5cHRSU0FLZXkud29yZHdyYXAodGhpcy5nZXRQcml2YXRlQmFzZUtleUI2NCgpKSArIFwiXFxuXCI7XG4gICAgICAgIGtleSArPSBcIi0tLS0tRU5EIFJTQSBQUklWQVRFIEtFWS0tLS0tXCI7XG4gICAgICAgIHJldHVybiBrZXk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZSB0aGUgcGVtIGVuY29kZWQgcHVibGljIGtleVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBwZW0gZW5jb2RlZCBwdWJsaWMga2V5IHdpdGggaGVhZGVyL2Zvb3RlclxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBKU0VuY3J5cHRSU0FLZXkucHJvdG90eXBlLmdldFB1YmxpY0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGtleSA9IFwiLS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS1cXG5cIjtcbiAgICAgICAga2V5ICs9IEpTRW5jcnlwdFJTQUtleS53b3Jkd3JhcCh0aGlzLmdldFB1YmxpY0Jhc2VLZXlCNjQoKSkgKyBcIlxcblwiO1xuICAgICAgICBrZXkgKz0gXCItLS0tLUVORCBQVUJMSUMgS0VZLS0tLS1cIjtcbiAgICAgICAgcmV0dXJuIGtleTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSBvYmplY3QgY29udGFpbnMgdGhlIG5lY2Vzc2FyeSBwYXJhbWV0ZXJzIHRvIHBvcHVsYXRlIHRoZSByc2EgbW9kdWx1c1xuICAgICAqIGFuZCBwdWJsaWMgZXhwb25lbnQgcGFyYW1ldGVycy5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29iaj17fV0gLSBBbiBvYmplY3QgdGhhdCBtYXkgY29udGFpbiB0aGUgdHdvIHB1YmxpYyBrZXlcbiAgICAgKiBwYXJhbWV0ZXJzXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIG9iamVjdCBjb250YWlucyBib3RoIHRoZSBtb2R1bHVzIGFuZCB0aGUgcHVibGljIGV4cG9uZW50XG4gICAgICogcHJvcGVydGllcyAobiBhbmQgZSlcbiAgICAgKiBAdG9kbyBjaGVjayBmb3IgdHlwZXMgb2YgbiBhbmQgZS4gTiBzaG91bGQgYmUgYSBwYXJzZWFibGUgYmlnSW50IG9iamVjdCwgRSBzaG91bGRcbiAgICAgKiBiZSBhIHBhcnNlYWJsZSBpbnRlZ2VyIG51bWJlclxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgSlNFbmNyeXB0UlNBS2V5Lmhhc1B1YmxpY0tleVByb3BlcnR5ID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICBvYmogPSBvYmogfHwge307XG4gICAgICAgIHJldHVybiAob2JqLmhhc093blByb3BlcnR5KFwiblwiKSAmJlxuICAgICAgICAgICAgb2JqLmhhc093blByb3BlcnR5KFwiZVwiKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGUgb2JqZWN0IGNvbnRhaW5zIEFMTCB0aGUgcGFyYW1ldGVycyBvZiBhbiBSU0Ega2V5LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqPXt9XSAtIEFuIG9iamVjdCB0aGF0IG1heSBjb250YWluIG5pbmUgcnNhIGtleVxuICAgICAqIHBhcmFtZXRlcnNcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgb2JqZWN0IGNvbnRhaW5zIGFsbCB0aGUgcGFyYW1ldGVycyBuZWVkZWRcbiAgICAgKiBAdG9kbyBjaGVjayBmb3IgdHlwZXMgb2YgdGhlIHBhcmFtZXRlcnMgYWxsIHRoZSBwYXJhbWV0ZXJzIGJ1dCB0aGUgcHVibGljIGV4cG9uZW50XG4gICAgICogc2hvdWxkIGJlIHBhcnNlYWJsZSBiaWdpbnQgb2JqZWN0cywgdGhlIHB1YmxpYyBleHBvbmVudCBzaG91bGQgYmUgYSBwYXJzZWFibGUgaW50ZWdlciBudW1iZXJcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIEpTRW5jcnlwdFJTQUtleS5oYXNQcml2YXRlS2V5UHJvcGVydHkgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIG9iaiA9IG9iaiB8fCB7fTtcbiAgICAgICAgcmV0dXJuIChvYmouaGFzT3duUHJvcGVydHkoXCJuXCIpICYmXG4gICAgICAgICAgICBvYmouaGFzT3duUHJvcGVydHkoXCJlXCIpICYmXG4gICAgICAgICAgICBvYmouaGFzT3duUHJvcGVydHkoXCJkXCIpICYmXG4gICAgICAgICAgICBvYmouaGFzT3duUHJvcGVydHkoXCJwXCIpICYmXG4gICAgICAgICAgICBvYmouaGFzT3duUHJvcGVydHkoXCJxXCIpICYmXG4gICAgICAgICAgICBvYmouaGFzT3duUHJvcGVydHkoXCJkbXAxXCIpICYmXG4gICAgICAgICAgICBvYmouaGFzT3duUHJvcGVydHkoXCJkbXExXCIpICYmXG4gICAgICAgICAgICBvYmouaGFzT3duUHJvcGVydHkoXCJjb2VmZlwiKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBQYXJzZSB0aGUgcHJvcGVydGllcyBvZiBvYmogaW4gdGhlIGN1cnJlbnQgcnNhIG9iamVjdC4gT2JqIHNob3VsZCBBVCBMRUFTVFxuICAgICAqIGluY2x1ZGUgdGhlIG1vZHVsdXMgYW5kIHB1YmxpYyBleHBvbmVudCAobiwgZSkgcGFyYW1ldGVycy5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gdGhlIG9iamVjdCBjb250YWluaW5nIHJzYSBwYXJhbWV0ZXJzXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBKU0VuY3J5cHRSU0FLZXkucHJvdG90eXBlLnBhcnNlUHJvcGVydGllc0Zyb20gPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHRoaXMubiA9IG9iai5uO1xuICAgICAgICB0aGlzLmUgPSBvYmouZTtcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShcImRcIikpIHtcbiAgICAgICAgICAgIHRoaXMuZCA9IG9iai5kO1xuICAgICAgICAgICAgdGhpcy5wID0gb2JqLnA7XG4gICAgICAgICAgICB0aGlzLnEgPSBvYmoucTtcbiAgICAgICAgICAgIHRoaXMuZG1wMSA9IG9iai5kbXAxO1xuICAgICAgICAgICAgdGhpcy5kbXExID0gb2JqLmRtcTE7XG4gICAgICAgICAgICB0aGlzLmNvZWZmID0gb2JqLmNvZWZmO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gSlNFbmNyeXB0UlNBS2V5O1xufShSU0FLZXkpKTtcbmV4cG9ydCB7IEpTRW5jcnlwdFJTQUtleSB9O1xuIl19