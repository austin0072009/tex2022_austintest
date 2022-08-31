
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Encrypt/jsencrypt.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c3bf5uYMUNCB7QE1nVU7bCp', 'jsencrypt');
// Script/Encrypt/jsencrypt.js

"use strict";

exports.__esModule = true;
exports.JSEncrypt = void 0;

var _base = require("./lib/asn1js/base64");

var _JSEncryptRSAKey = require("./JSEncryptRSAKey");

/**
 *
 * @param {Object} [options = {}] - An object to customize JSEncrypt behaviour
 * possible parameters are:
 * - default_key_size        {number}  default: 1024 the key size in bit
 * - default_public_exponent {string}  default: '010001' the hexadecimal representation of the public exponent
 * - log                     {boolean} default: false whether log warn/error or not
 * @constructor
 */
var JSEncrypt =
/** @class */
function () {
  function JSEncrypt(options) {
    if (options === void 0) {
      options = {};
    }

    options = options || {};
    this.default_key_size = options.default_key_size ? parseInt(options.default_key_size, 10) : 1024;
    this.default_public_exponent = options.default_public_exponent || "010001"; // 65537 default openssl public exponent for rsa key type

    this.log = options.log || false; // The private and public key.

    this.key = null;
  }
  /**
   * Method to set the rsa key parameter (one method is enough to set both the public
   * and the private key, since the private key contains the public key paramenters)
   * Log a warning if logs are enabled
   * @param {Object|string} key the pem encoded string or an object (with or without header/footer)
   * @public
   */


  JSEncrypt.prototype.setKey = function (key) {
    if (this.log && this.key) {
      console.warn("A key was already set, overriding existing.");
    }

    this.key = new _JSEncryptRSAKey.JSEncryptRSAKey(key);
  };
  /**
   * Proxy method for setKey, for api compatibility
   * @see setKey
   * @public
   */


  JSEncrypt.prototype.setPrivateKey = function (privkey) {
    // Create the key.
    this.setKey(privkey);
  };
  /**
   * Proxy method for setKey, for api compatibility
   * @see setKey
   * @public
   */


  JSEncrypt.prototype.setPublicKey = function (pubkey) {
    // Sets the public key.
    this.setKey(pubkey);
  };
  /**
   * Proxy method for RSAKey object's decrypt, decrypt the string using the private
   * components of the rsa key object. Note that if the object was not set will be created
   * on the fly (by the getKey method) using the parameters passed in the JSEncrypt constructor
   * @param {string} str base64 encoded crypted string to decrypt
   * @return {string} the decrypted string
   * @public
   */


  JSEncrypt.prototype.decrypt = function (str) {
    // Return the decrypted string.
    try {
      return this.getKey().decrypt((0, _base.b64tohex)(str));
    } catch (ex) {
      return false;
    }
  };
  /**
   * Proxy method for RSAKey object's encrypt, encrypt the string using the public
   * components of the rsa key object. Note that if the object was not set will be created
   * on the fly (by the getKey method) using the parameters passed in the JSEncrypt constructor
   * @param {string} str the string to encrypt
   * @return {string} the encrypted string encoded in base64
   * @public
   */


  JSEncrypt.prototype.encrypt = function (str) {
    // Return the encrypted string.
    try {
      return (0, _base.hex2b64)(this.getKey().encrypt(str));
    } catch (ex) {
      return false;
    }
  };
  /**
   * Proxy method for RSAKey object's sign.
   * @param {string} str the string to sign
   * @param {function} digestMethod hash method
   * @param {string} digestName the name of the hash algorithm
   * @return {string} the signature encoded in base64
   * @public
   */


  JSEncrypt.prototype.sign = function (str, digestMethod, digestName) {
    // return the RSA signature of 'str' in 'hex' format.
    try {
      return (0, _base.hex2b64)(this.getKey().sign(str, digestMethod, digestName));
    } catch (ex) {
      return false;
    }
  };
  /**
   * Proxy method for RSAKey object's verify.
   * @param {string} str the string to verify
   * @param {string} signature the signature encoded in base64 to compare the string to
   * @param {function} digestMethod hash method
   * @return {boolean} whether the data and signature match
   * @public
   */


  JSEncrypt.prototype.verify = function (str, signature, digestMethod) {
    // Return the decrypted 'digest' of the signature.
    try {
      return this.getKey().verify(str, (0, _base.b64tohex)(signature), digestMethod);
    } catch (ex) {
      return false;
    }
  };
  /**
   * Getter for the current JSEncryptRSAKey object. If it doesn't exists a new object
   * will be created and returned
   * @param {callback} [cb] the callback to be called if we want the key to be generated
   * in an async fashion
   * @returns {JSEncryptRSAKey} the JSEncryptRSAKey object
   * @public
   */


  JSEncrypt.prototype.getKey = function (cb) {
    // Only create new if it does not exist.
    if (!this.key) {
      // Get a new private key.
      this.key = new _JSEncryptRSAKey.JSEncryptRSAKey();

      if (cb && {}.toString.call(cb) === "[object Function]") {
        this.key.generateAsync(this.default_key_size, this.default_public_exponent, cb);
        return;
      } // Generate the key.


      this.key.generate(this.default_key_size, this.default_public_exponent);
    }

    return this.key;
  };
  /**
   * Returns the pem encoded representation of the private key
   * If the key doesn't exists a new key will be created
   * @returns {string} pem encoded representation of the private key WITH header and footer
   * @public
   */


  JSEncrypt.prototype.getPrivateKey = function () {
    // Return the private representation of this key.
    return this.getKey().getPrivateKey();
  };
  /**
   * Returns the pem encoded representation of the private key
   * If the key doesn't exists a new key will be created
   * @returns {string} pem encoded representation of the private key WITHOUT header and footer
   * @public
   */


  JSEncrypt.prototype.getPrivateKeyB64 = function () {
    // Return the private representation of this key.
    return this.getKey().getPrivateBaseKeyB64();
  };
  /**
   * Returns the pem encoded representation of the public key
   * If the key doesn't exists a new key will be created
   * @returns {string} pem encoded representation of the public key WITH header and footer
   * @public
   */


  JSEncrypt.prototype.getPublicKey = function () {
    // Return the private representation of this key.
    return this.getKey().getPublicKey();
  };
  /**
   * Returns the pem encoded representation of the public key
   * If the key doesn't exists a new key will be created
   * @returns {string} pem encoded representation of the public key WITHOUT header and footer
   * @public
   */


  JSEncrypt.prototype.getPublicKeyB64 = function () {
    // Return the private representation of this key.
    return this.getKey().getPublicBaseKeyB64();
  };

  JSEncrypt.version = "3.2.1";
  return JSEncrypt;
}();

exports.JSEncrypt = JSEncrypt;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbmNyeXB0XFxqc2VuY3J5cHQuanMiXSwibmFtZXMiOlsiSlNFbmNyeXB0Iiwib3B0aW9ucyIsImRlZmF1bHRfa2V5X3NpemUiLCJwYXJzZUludCIsImRlZmF1bHRfcHVibGljX2V4cG9uZW50IiwibG9nIiwia2V5IiwicHJvdG90eXBlIiwic2V0S2V5IiwiY29uc29sZSIsIndhcm4iLCJKU0VuY3J5cHRSU0FLZXkiLCJzZXRQcml2YXRlS2V5IiwicHJpdmtleSIsInNldFB1YmxpY0tleSIsInB1YmtleSIsImRlY3J5cHQiLCJzdHIiLCJnZXRLZXkiLCJleCIsImVuY3J5cHQiLCJzaWduIiwiZGlnZXN0TWV0aG9kIiwiZGlnZXN0TmFtZSIsInZlcmlmeSIsInNpZ25hdHVyZSIsImNiIiwidG9TdHJpbmciLCJjYWxsIiwiZ2VuZXJhdGVBc3luYyIsImdlbmVyYXRlIiwiZ2V0UHJpdmF0ZUtleSIsImdldFByaXZhdGVLZXlCNjQiLCJnZXRQcml2YXRlQmFzZUtleUI2NCIsImdldFB1YmxpY0tleSIsImdldFB1YmxpY0tleUI2NCIsImdldFB1YmxpY0Jhc2VLZXlCNjQiLCJ2ZXJzaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlBLFNBQVM7QUFBRztBQUFlLFlBQVk7QUFDdkMsV0FBU0EsU0FBVCxDQUFvQkMsT0FBcEIsRUFBNkI7QUFDekIsUUFBSUEsT0FBTyxLQUFLLEtBQUssQ0FBckIsRUFBd0I7QUFBRUEsTUFBQUEsT0FBTyxHQUFHLEVBQVY7QUFBZTs7QUFDekNBLElBQUFBLE9BQU8sR0FBR0EsT0FBTyxJQUFJLEVBQXJCO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0JELE9BQU8sQ0FBQ0MsZ0JBQVIsR0FBMkJDLFFBQVEsQ0FBQ0YsT0FBTyxDQUFDQyxnQkFBVCxFQUEyQixFQUEzQixDQUFu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SWxDLEVBQUFBLFNBQVMsQ0FBQ08sU0FBVixDQUFvQjRCLGVBQXBCLEdBQXNDLFlBQVk7QUFDOUM7QUFDQSxXQUFPLEtBQUtqQixNQUFMLEdBQWNrQixtQkFBZCxFQUFQO0FBQ0gsR0FIRDs7QUFJQXBDLEVBQUFBLFNBQVMsQ0FBQ3FDLE9BQVYsR0FBb0IsT0FBcEI7QUFDQSxTQUFPckMsU0FBUDtBQUNILENBN0s4QixFQUEvQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYjY0dG9oZXgsIGhleDJiNjQgfSBmcm9tIFwiLi9saWIvYXNuMWpzL2Jhc2U2NFwiO1xuaW1wb3J0IHsgSlNFbmNyeXB0UlNBS2V5IH0gZnJvbSBcIi4vSlNFbmNyeXB0UlNBS2V5XCI7XG4vKipcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMgPSB7fV0gLSBBbiBvYmplY3QgdG8gY3VzdG9taXplIEpTRW5jcnlwdCBiZWhhdmlvdXJcbiAqIHBvc3NpYmxlIHBhcmFtZXRlcnMgYXJlOlxuICogLSBkZWZhdWx0X2tleV9zaXplICAgICAgICB7bnVtYmVyfSAgZGVmYXVsdDogMTAyNCB0aGUga2V5IHNpemUgaW4gYml0XG4gKiAtIGRlZmF1bHRfcHVibGljX2V4cG9uZW50IHtzdHJpbmd9ICBkZWZhdWx0OiAnMDEwMDAxJyB0aGUgaGV4YWRlY2ltYWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIHB1YmxpYyBleHBvbmVudFxuICogLSBsb2cgICAgICAgICAgICAgICAgICAgICB7Ym9vbGVhbn0gZGVmYXVsdDogZmFsc2Ugd2hldGhlciBsb2cgd2Fybi9lcnJvciBvciBub3RcbiAqIEBjb25zdHJ1Y3RvclxuICovXG52YXIgSlNFbmNyeXB0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEpTRW5jcnlwdCAob3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgdGhpcy5kZWZhdWx0X2tleV9zaXplID0gb3B0aW9ucy5kZWZhdWx0X2tleV9zaXplID8gcGFyc2VJbnQob3B0aW9ucy5kZWZhdWx0X2tleV9zaXplLCAxMCkgOiAxMDI0O1xuICAgICAgICB0aGlzLmRlZmF1bHRfcHVibGljX2V4cG9uZW50ID0gb3B0aW9ucy5kZWZhdWx0X3B1YmxpY19leHBvbmVudCB8fCBcIjAxMDAwMVwiOyAvLyA2NTUzNyBkZWZhdWx0IG9wZW5zc2wgcHVibGljIGV4cG9uZW50IGZvciByc2Ega2V5IHR5cGVcbiAgICAgICAgdGhpcy5sb2cgPSBvcHRpb25zLmxvZyB8fCBmYWxzZTtcbiAgICAgICAgLy8gVGhlIHByaXZhdGUgYW5kIHB1YmxpYyBrZXkuXG4gICAgICAgIHRoaXMua2V5ID0gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTWV0aG9kIHRvIHNldCB0aGUgcnNhIGtleSBwYXJhbWV0ZXIgKG9uZSBtZXRob2QgaXMgZW5vdWdoIHRvIHNldCBib3RoIHRoZSBwdWJsaWNcbiAgICAgKiBhbmQgdGhlIHByaXZhdGUga2V5LCBzaW5jZSB0aGUgcHJpdmF0ZSBrZXkgY29udGFpbnMgdGhlIHB1YmxpYyBrZXkgcGFyYW1lbnRlcnMpXG4gICAgICogTG9nIGEgd2FybmluZyBpZiBsb2dzIGFyZSBlbmFibGVkXG4gICAgICogQHBhcmFtIHtPYmplY3R8c3RyaW5nfSBrZXkgdGhlIHBlbSBlbmNvZGVkIHN0cmluZyBvciBhbiBvYmplY3QgKHdpdGggb3Igd2l0aG91dCBoZWFkZXIvZm9vdGVyKVxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBKU0VuY3J5cHQucHJvdG90eXBlLnNldEtleSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKHRoaXMubG9nICYmIHRoaXMua2V5KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJBIGtleSB3YXMgYWxyZWFkeSBzZXQsIG92ZXJyaWRpbmcgZXhpc3RpbmcuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMua2V5ID0gbmV3IEpTRW5jcnlwdFJTQUtleShrZXkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUHJveHkgbWV0aG9kIGZvciBzZXRLZXksIGZvciBhcGkgY29tcGF0aWJpbGl0eVxuICAgICAqIEBzZWUgc2V0S2V5XG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIEpTRW5jcnlwdC5wcm90b3R5cGUuc2V0UHJpdmF0ZUtleSA9IGZ1bmN0aW9uIChwcml2a2V5KSB7XG4gICAgICAgIC8vIENyZWF0ZSB0aGUga2V5LlxuICAgICAgICB0aGlzLnNldEtleShwcml2a2V5KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFByb3h5IG1ldGhvZCBmb3Igc2V0S2V5LCBmb3IgYXBpIGNvbXBhdGliaWxpdHlcbiAgICAgKiBAc2VlIHNldEtleVxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBKU0VuY3J5cHQucHJvdG90eXBlLnNldFB1YmxpY0tleSA9IGZ1bmN0aW9uIChwdWJrZXkpIHtcbiAgICAgICAgLy8gU2V0cyB0aGUgcHVibGljIGtleS5cbiAgICAgICAgdGhpcy5zZXRLZXkocHVia2V5KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFByb3h5IG1ldGhvZCBmb3IgUlNBS2V5IG9iamVjdCdzIGRlY3J5cHQsIGRlY3J5cHQgdGhlIHN0cmluZyB1c2luZyB0aGUgcHJpdmF0ZVxuICAgICAqIGNvbXBvbmVudHMgb2YgdGhlIHJzYSBrZXkgb2JqZWN0LiBOb3RlIHRoYXQgaWYgdGhlIG9iamVjdCB3YXMgbm90IHNldCB3aWxsIGJlIGNyZWF0ZWRcbiAgICAgKiBvbiB0aGUgZmx5IChieSB0aGUgZ2V0S2V5IG1ldGhvZCkgdXNpbmcgdGhlIHBhcmFtZXRlcnMgcGFzc2VkIGluIHRoZSBKU0VuY3J5cHQgY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyIGJhc2U2NCBlbmNvZGVkIGNyeXB0ZWQgc3RyaW5nIHRvIGRlY3J5cHRcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBkZWNyeXB0ZWQgc3RyaW5nXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIEpTRW5jcnlwdC5wcm90b3R5cGUuZGVjcnlwdCA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgLy8gUmV0dXJuIHRoZSBkZWNyeXB0ZWQgc3RyaW5nLlxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0S2V5KCkuZGVjcnlwdChiNjR0b2hleChzdHIpKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUHJveHkgbWV0aG9kIGZvciBSU0FLZXkgb2JqZWN0J3MgZW5jcnlwdCwgZW5jcnlwdCB0aGUgc3RyaW5nIHVzaW5nIHRoZSBwdWJsaWNcbiAgICAgKiBjb21wb25lbnRzIG9mIHRoZSByc2Ega2V5IG9iamVjdC4gTm90ZSB0aGF0IGlmIHRoZSBvYmplY3Qgd2FzIG5vdCBzZXQgd2lsbCBiZSBjcmVhdGVkXG4gICAgICogb24gdGhlIGZseSAoYnkgdGhlIGdldEtleSBtZXRob2QpIHVzaW5nIHRoZSBwYXJhbWV0ZXJzIHBhc3NlZCBpbiB0aGUgSlNFbmNyeXB0IGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0ciB0aGUgc3RyaW5nIHRvIGVuY3J5cHRcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBlbmNyeXB0ZWQgc3RyaW5nIGVuY29kZWQgaW4gYmFzZTY0XG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIEpTRW5jcnlwdC5wcm90b3R5cGUuZW5jcnlwdCA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgLy8gUmV0dXJuIHRoZSBlbmNyeXB0ZWQgc3RyaW5nLlxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGhleDJiNjQodGhpcy5nZXRLZXkoKS5lbmNyeXB0KHN0cikpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChleCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBQcm94eSBtZXRob2QgZm9yIFJTQUtleSBvYmplY3QncyBzaWduLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgdGhlIHN0cmluZyB0byBzaWduXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZGlnZXN0TWV0aG9kIGhhc2ggbWV0aG9kXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRpZ2VzdE5hbWUgdGhlIG5hbWUgb2YgdGhlIGhhc2ggYWxnb3JpdGhtXG4gICAgICogQHJldHVybiB7c3RyaW5nfSB0aGUgc2lnbmF0dXJlIGVuY29kZWQgaW4gYmFzZTY0XG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIEpTRW5jcnlwdC5wcm90b3R5cGUuc2lnbiA9IGZ1bmN0aW9uIChzdHIsIGRpZ2VzdE1ldGhvZCwgZGlnZXN0TmFtZSkge1xuICAgICAgICAvLyByZXR1cm4gdGhlIFJTQSBzaWduYXR1cmUgb2YgJ3N0cicgaW4gJ2hleCcgZm9ybWF0LlxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGhleDJiNjQodGhpcy5nZXRLZXkoKS5zaWduKHN0ciwgZGlnZXN0TWV0aG9kLCBkaWdlc3ROYW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFByb3h5IG1ldGhvZCBmb3IgUlNBS2V5IG9iamVjdCdzIHZlcmlmeS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyIHRoZSBzdHJpbmcgdG8gdmVyaWZ5XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNpZ25hdHVyZSB0aGUgc2lnbmF0dXJlIGVuY29kZWQgaW4gYmFzZTY0IHRvIGNvbXBhcmUgdGhlIHN0cmluZyB0b1xuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGRpZ2VzdE1ldGhvZCBoYXNoIG1ldGhvZFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHdoZXRoZXIgdGhlIGRhdGEgYW5kIHNpZ25hdHVyZSBtYXRjaFxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBKU0VuY3J5cHQucHJvdG90eXBlLnZlcmlmeSA9IGZ1bmN0aW9uIChzdHIsIHNpZ25hdHVyZSwgZGlnZXN0TWV0aG9kKSB7XG4gICAgICAgIC8vIFJldHVybiB0aGUgZGVjcnlwdGVkICdkaWdlc3QnIG9mIHRoZSBzaWduYXR1cmUuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRLZXkoKS52ZXJpZnkoc3RyLCBiNjR0b2hleChzaWduYXR1cmUpLCBkaWdlc3RNZXRob2QpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChleCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXR0ZXIgZm9yIHRoZSBjdXJyZW50IEpTRW5jcnlwdFJTQUtleSBvYmplY3QuIElmIGl0IGRvZXNuJ3QgZXhpc3RzIGEgbmV3IG9iamVjdFxuICAgICAqIHdpbGwgYmUgY3JlYXRlZCBhbmQgcmV0dXJuZWRcbiAgICAgKiBAcGFyYW0ge2NhbGxiYWNrfSBbY2JdIHRoZSBjYWxsYmFjayB0byBiZSBjYWxsZWQgaWYgd2Ugd2FudCB0aGUga2V5IHRvIGJlIGdlbmVyYXRlZFxuICAgICAqIGluIGFuIGFzeW5jIGZhc2hpb25cbiAgICAgKiBAcmV0dXJucyB7SlNFbmNyeXB0UlNBS2V5fSB0aGUgSlNFbmNyeXB0UlNBS2V5IG9iamVjdFxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBKU0VuY3J5cHQucHJvdG90eXBlLmdldEtleSA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICAvLyBPbmx5IGNyZWF0ZSBuZXcgaWYgaXQgZG9lcyBub3QgZXhpc3QuXG4gICAgICAgIGlmICghdGhpcy5rZXkpIHtcbiAgICAgICAgICAgIC8vIEdldCBhIG5ldyBwcml2YXRlIGtleS5cbiAgICAgICAgICAgIHRoaXMua2V5ID0gbmV3IEpTRW5jcnlwdFJTQUtleSgpO1xuICAgICAgICAgICAgaWYgKGNiICYmIHt9LnRvU3RyaW5nLmNhbGwoY2IpID09PSBcIltvYmplY3QgRnVuY3Rpb25dXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmtleS5nZW5lcmF0ZUFzeW5jKHRoaXMuZGVmYXVsdF9rZXlfc2l6ZSwgdGhpcy5kZWZhdWx0X3B1YmxpY19leHBvbmVudCwgY2IpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIHRoZSBrZXkuXG4gICAgICAgICAgICB0aGlzLmtleS5nZW5lcmF0ZSh0aGlzLmRlZmF1bHRfa2V5X3NpemUsIHRoaXMuZGVmYXVsdF9wdWJsaWNfZXhwb25lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmtleTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHBlbSBlbmNvZGVkIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBwcml2YXRlIGtleVxuICAgICAqIElmIHRoZSBrZXkgZG9lc24ndCBleGlzdHMgYSBuZXcga2V5IHdpbGwgYmUgY3JlYXRlZFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IHBlbSBlbmNvZGVkIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBwcml2YXRlIGtleSBXSVRIIGhlYWRlciBhbmQgZm9vdGVyXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIEpTRW5jcnlwdC5wcm90b3R5cGUuZ2V0UHJpdmF0ZUtleSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gUmV0dXJuIHRoZSBwcml2YXRlIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMga2V5LlxuICAgICAgICByZXR1cm4gdGhpcy5nZXRLZXkoKS5nZXRQcml2YXRlS2V5KCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBwZW0gZW5jb2RlZCByZXByZXNlbnRhdGlvbiBvZiB0aGUgcHJpdmF0ZSBrZXlcbiAgICAgKiBJZiB0aGUga2V5IGRvZXNuJ3QgZXhpc3RzIGEgbmV3IGtleSB3aWxsIGJlIGNyZWF0ZWRcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBwZW0gZW5jb2RlZCByZXByZXNlbnRhdGlvbiBvZiB0aGUgcHJpdmF0ZSBrZXkgV0lUSE9VVCBoZWFkZXIgYW5kIGZvb3RlclxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBKU0VuY3J5cHQucHJvdG90eXBlLmdldFByaXZhdGVLZXlCNjQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFJldHVybiB0aGUgcHJpdmF0ZSByZXByZXNlbnRhdGlvbiBvZiB0aGlzIGtleS5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0S2V5KCkuZ2V0UHJpdmF0ZUJhc2VLZXlCNjQoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHBlbSBlbmNvZGVkIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBwdWJsaWMga2V5XG4gICAgICogSWYgdGhlIGtleSBkb2Vzbid0IGV4aXN0cyBhIG5ldyBrZXkgd2lsbCBiZSBjcmVhdGVkXG4gICAgICogQHJldHVybnMge3N0cmluZ30gcGVtIGVuY29kZWQgcmVwcmVzZW50YXRpb24gb2YgdGhlIHB1YmxpYyBrZXkgV0lUSCBoZWFkZXIgYW5kIGZvb3RlclxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBKU0VuY3J5cHQucHJvdG90eXBlLmdldFB1YmxpY0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gUmV0dXJuIHRoZSBwcml2YXRlIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMga2V5LlxuICAgICAgICByZXR1cm4gdGhpcy5nZXRLZXkoKS5nZXRQdWJsaWNLZXkoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHBlbSBlbmNvZGVkIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBwdWJsaWMga2V5XG4gICAgICogSWYgdGhlIGtleSBkb2Vzbid0IGV4aXN0cyBhIG5ldyBrZXkgd2lsbCBiZSBjcmVhdGVkXG4gICAgICogQHJldHVybnMge3N0cmluZ30gcGVtIGVuY29kZWQgcmVwcmVzZW50YXRpb24gb2YgdGhlIHB1YmxpYyBrZXkgV0lUSE9VVCBoZWFkZXIgYW5kIGZvb3RlclxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBKU0VuY3J5cHQucHJvdG90eXBlLmdldFB1YmxpY0tleUI2NCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gUmV0dXJuIHRoZSBwcml2YXRlIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMga2V5LlxuICAgICAgICByZXR1cm4gdGhpcy5nZXRLZXkoKS5nZXRQdWJsaWNCYXNlS2V5QjY0KCk7XG4gICAgfTtcbiAgICBKU0VuY3J5cHQudmVyc2lvbiA9IFwiMy4yLjFcIjtcbiAgICByZXR1cm4gSlNFbmNyeXB0O1xufSgpKTtcbmV4cG9ydCB7IEpTRW5jcnlwdCB9O1xuIl19