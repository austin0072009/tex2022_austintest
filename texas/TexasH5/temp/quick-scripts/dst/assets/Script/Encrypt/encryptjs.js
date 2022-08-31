
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Encrypt/encryptjs.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}(function (Buffer){
"use strict";
cc._RF.push(module, 'ec036FaBN5KJ5KP9iOB64n1', 'encryptjs');
// Script/Encrypt/encryptjs.js

"use strict";

/*!
 * Copyright (c) 2015 Sri Harsha <sri.harsha@zenq.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
(function (name, definition) {
  if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    module.exports = definition();
  } else if (typeof define === 'function' && typeof define.amd === 'object') {
    define(definition);
  } else if (typeof define === 'function' && typeof define.petal === 'object') {
    define(name, [], definition);
  } else {
    this[name] = definition();
  }
})('encryptjs', function (encryptjs) {
  var rl; //Electron doesnt support stdin, so dont setup CLI if its not available.

  encryptjs = {
    version: '1.0.0'
  }; //Right before exporting the validator object, pass each of the builtins
  //through extend() so that their first argument is coerced to a string

  encryptjs.init = function () {
    console.log("--------------------Applying Encryption Algorithm------------------ ");
  };

  'use strict';

  if (typeof module != 'undefined' && module.exports) var Algo = require('./algo'); // CommonJS (Node.js)

  encryptjs.encrypt = function (plaintext, password, nBits) {
    var blockSize = 16; // block size fixed at 16 bytes / 128 bits (Nb=4)

    if (!(nBits == 128 || nBits == 192 || nBits == 256)) return ''; // standard allows 128/192/256 bit keys

    plaintext = String(plaintext).utf8Encode();
    password = String(password).utf8Encode(); // use AES itself to encrypt password to get cipher key (using plain password as source for key
    // expansion) - gives us well encrypted key (though hashed key might be preferred for prod'n use)

    var nBytes = nBits / 8; // no bytes in key (16/24/32)

    var pwBytes = new Array(nBytes);

    for (var i = 0; i < nBytes; i++) {
      // use 1st 16/24/32 chars of password for key
      pwBytes[i] = isNaN(password.charCodeAt(i)) ? 0 : password.charCodeAt(i);
    }

    var key = Algo.cipher(pwBytes, Algo.keyExpansion(pwBytes)); // gives us 16-byte key

    key = key.concat(key.slice(0, nBytes - 16)); // expand key to 16/24/32 bytes long
    // initialise 1st 8 bytes of counter block with nonce (NIST SP800-38A �B.2): [0-1] = millisec,
    // [2-3] = random, [4-7] = seconds, together giving full sub-millisec uniqueness up to Feb 2106

    var counterBlock = new Array(blockSize);
    var nonce = new Date().getTime(); // timestamp: milliseconds since 1-Jan-1970

    var nonceMs = nonce % 1000;
    var nonceSec = Math.floor(nonce / 1000);
    var nonceRnd = Math.floor(Math.random() * 0xffff); // for debugging: nonce = nonceMs = nonceSec = nonceRnd = 0;

    for (var i = 0; i < 2; i++) {
      counterBlock[i] = nonceMs >>> i * 8 & 0xff;
    }

    for (var i = 0; i < 2; i++) {
      counterBlock[i + 2] = nonceRnd >>> i * 8 & 0xff;
    }

    for (var i = 0; i < 4; i++) {
      counterBlock[i + 4] = nonceSec >>> i * 8 & 0xff;
    } // and convert it to a string to go on the front of the ciphertext


    var ctrTxt = '';

    for (var i = 0; i < 8; i++) {
      ctrTxt += String.fromCharCode(counterBlock[i]);
    } // generate key schedule - an expansion of the key into distinct Key Rounds for each round


    var keySchedule = Algo.keyExpansion(key);
    var blockCount = Math.ceil(plaintext.length / blockSize);
    var ciphertxt = new Array(blockCount); // ciphertext as array of strings

    for (var b = 0; b < blockCount; b++) {
      // set counter (block #) in last 8 bytes of counter block (leaving nonce in 1st 8 bytes)
      // done in two stages for 32-bit ops: using two words allows us to go past 2^32 blocks (68GB)
      for (var c = 0; c < 4; c++) {
        counterBlock[15 - c] = b >>> c * 8 & 0xff;
      }

      for (var c = 0; c < 4; c++) {
        counterBlock[15 - c - 4] = b / 0x100000000 >>> c * 8;
      }

      var cipherCntr = Algo.cipher(counterBlock, keySchedule); // -- encrypt counter block --
      // block size is reduced on final block

      var blockLength = b < blockCount - 1 ? blockSize : (plaintext.length - 1) % blockSize + 1;
      var cipherChar = new Array(blockLength);

      for (var i = 0; i < blockLength; i++) {
        // -- xor plaintext with ciphered counter char-by-char --
        cipherChar[i] = cipherCntr[i] ^ plaintext.charCodeAt(b * blockSize + i);
        cipherChar[i] = String.fromCharCode(cipherChar[i]);
      }

      ciphertxt[b] = cipherChar.join('');
    } // use Array.join() for better performance than repeated string appends


    var ciphertext = ctrTxt + ciphertxt.join(''); // ciphertext = ciphertext.base64Encode();

    ciphertext = encryptjs.base64Encode(ciphertext);
    return ciphertext;
  };

  encryptjs.decrypt = function (ciphertext, password, nBits) {
    var blockSize = 16; // block size fixed at 16 bytes / 128 bits (Nb=4) for AES

    if (!(nBits == 128 || nBits == 192 || nBits == 256)) return ''; // standard allows 128/192/256 bit keys
    // ciphertext = String(ciphertext).base64Decode();

    ciphertext = encryptjs.base64Decode(String(ciphertext));
    password = String(password).utf8Encode(); // use AES to encrypt password (mirroring encrypt routine)

    var nBytes = nBits / 8; // no bytes in key

    var pwBytes = new Array(nBytes);

    for (var i = 0; i < nBytes; i++) {
      pwBytes[i] = isNaN(password.charCodeAt(i)) ? 0 : password.charCodeAt(i);
    }

    var key = Algo.cipher(pwBytes, Algo.keyExpansion(pwBytes));
    key = key.concat(key.slice(0, nBytes - 16)); // expand key to 16/24/32 bytes long
    // recover nonce from 1st 8 bytes of ciphertext

    var counterBlock = new Array(8);
    var ctrTxt = ciphertext.slice(0, 8);

    for (var i = 0; i < 8; i++) {
      counterBlock[i] = ctrTxt.charCodeAt(i);
    } // generate key schedule


    var keySchedule = Algo.keyExpansion(key); // separate ciphertext into blocks (skipping past initial 8 bytes)

    var nBlocks = Math.ceil((ciphertext.length - 8) / blockSize);
    var ct = new Array(nBlocks);

    for (var b = 0; b < nBlocks; b++) {
      ct[b] = ciphertext.slice(8 + b * blockSize, 8 + b * blockSize + blockSize);
    }

    ciphertext = ct; // ciphertext is now array of block-length strings
    // plaintext will get generated block-by-block into array of block-length strings

    var plaintxt = new Array(ciphertext.length);

    for (var b = 0; b < nBlocks; b++) {
      // set counter (block #) in last 8 bytes of counter block (leaving nonce in 1st 8 bytes)
      for (var c = 0; c < 4; c++) {
        counterBlock[15 - c] = b >>> c * 8 & 0xff;
      }

      for (var c = 0; c < 4; c++) {
        counterBlock[15 - c - 4] = (b + 1) / 0x100000000 - 1 >>> c * 8 & 0xff;
      }

      var cipherCntr = Algo.cipher(counterBlock, keySchedule); // encrypt counter block

      var plaintxtByte = new Array(ciphertext[b].length);

      for (var i = 0; i < ciphertext[b].length; i++) {
        // -- xor plaintxt with ciphered counter byte-by-byte --
        plaintxtByte[i] = cipherCntr[i] ^ ciphertext[b].charCodeAt(i);
        plaintxtByte[i] = String.fromCharCode(plaintxtByte[i]);
      }

      plaintxt[b] = plaintxtByte.join('');
    } // join array of blocks into single plaintext string


    var plaintext = plaintxt.join('');
    plaintext = plaintext.utf8Decode(); // decode from UTF8 back to Unicode multi-byte chars

    return plaintext;
  }; //----------------base64 start---------------


  var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  encryptjs.base64Encode = function (input) {
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;
    input = encryptjs._utf8_encode(input);

    while (i < input.length) {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);
      enc1 = chr1 >> 2;
      enc2 = (chr1 & 3) << 4 | chr2 >> 4;
      enc3 = (chr2 & 15) << 2 | chr3 >> 6;
      enc4 = chr3 & 63;

      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }

      output = output + _keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
    }

    return output;
  };

  encryptjs.base64Decode = function (input) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    while (i < input.length) {
      enc1 = _keyStr.indexOf(input.charAt(i++));
      enc2 = _keyStr.indexOf(input.charAt(i++));
      enc3 = _keyStr.indexOf(input.charAt(i++));
      enc4 = _keyStr.indexOf(input.charAt(i++));
      chr1 = enc1 << 2 | enc2 >> 4;
      chr2 = (enc2 & 15) << 4 | enc3 >> 2;
      chr3 = (enc3 & 3) << 6 | enc4;
      output = output + String.fromCharCode(chr1);

      if (enc3 != 64) {
        output = output + String.fromCharCode(chr2);
      }

      if (enc4 != 64) {
        output = output + String.fromCharCode(chr3);
      }
    }

    output = encryptjs._utf8_decode(output);
    return output;
  }; // private method for UTF-8 encoding


  encryptjs._utf8_encode = function (string) {
    string = string.replace(/\r\n/g, "\n");
    var utftext = "";

    for (var n = 0; n < string.length; n++) {
      var c = string.charCodeAt(n);

      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if (c > 127 && c < 2048) {
        utftext += String.fromCharCode(c >> 6 | 192);
        utftext += String.fromCharCode(c & 63 | 128);
      } else {
        utftext += String.fromCharCode(c >> 12 | 224);
        utftext += String.fromCharCode(c >> 6 & 63 | 128);
        utftext += String.fromCharCode(c & 63 | 128);
      }
    }

    return utftext;
  }; // private method for UTF-8 decoding


  encryptjs._utf8_decode = function (utftext) {
    var string = "";
    var i = 0;
    var c = 0;
    var c1 = 0;
    var c2 = 0;

    while (i < utftext.length) {
      c = utftext.charCodeAt(i);

      if (c < 128) {
        string += String.fromCharCode(c);
        i++;
      } else if (c > 191 && c < 224) {
        c2 = utftext.charCodeAt(i + 1);
        string += String.fromCharCode((c & 31) << 6 | c2 & 63);
        i += 2;
      } else {
        c2 = utftext.charCodeAt(i + 1);
        c3 = utftext.charCodeAt(i + 2);
        string += String.fromCharCode((c & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
        i += 3;
      }
    }

    return string;
  }; //------------------base64 end----------------


  encryptjs.getTextEncryptAndSaveToTextFile = function (filePath, password, nBits) {
    if (!rl) throw Error("Command line not supported on this platform");
    rl.question("Enter the text to be encrypted: ", function (answer) {
      // TODO: Log the answer in a database
      console.log("'" + answer + "' This text will be encrypted and stored in a text file 'encrypted.txt'");
      var cipherText = encryptjs.encrypt(answer, password, nBits);
      rl.close();
    });
  };

  encryptjs.getTextEncryptAndSaveToJSONFile = function (filePath, password, nBits) {
    if (!rl) throw Error("Command line not supported on this platform");
    rl.question("Enter the text to be encrypted: ", function (answer) {
      // TODO: Log the answer in a database
      console.log("'" + answer + "' This text will be encrypted and stored in a text file 'encrypted.txt'");
      var cipherText = encryptjs.encrypt(answer, password, nBits);
      encryptjs.writeCipherTextToJSON(filePath, {
        EncryptedText: cipherText
      }, function () {
        console.log("'encryptedText.JSON' File created in your local directory, if not present refresh your project");
      });
      rl.close();
    });
  };

  encryptjs.writeCipherTextToJSON = function (file, obj, options, callback) {
    if (callback == null) {
      callback = options;
      options = {};
    }

    var spaces = typeof options === 'object' && options !== null ? 'spaces' in options ? options.spaces : this.spaces : this.spaces;
    var str = '';

    try {
      str = JSON.stringify(obj, options ? options.replacer : null, spaces) + '\n';
    } catch (err) {
      if (callback) return callback(err, null);
    }
  };

  if (typeof String.prototype.utf8Encode == 'undefined') {
    String.prototype.utf8Encode = function () {
      return unescape(encodeURIComponent(this));
    };
  }

  if (typeof String.prototype.utf8Decode == 'undefined') {
    String.prototype.utf8Decode = function () {
      try {
        return decodeURIComponent(escape(this));
      } catch (e) {
        return this; // invalid UTF-8? return as-is
      }
    };
  }

  if (typeof String.prototype.base64Encode == 'undefined') {
    String.prototype.base64Encode = function () {
      if (typeof btoa != 'undefined') return btoa(this); // browser

      if (typeof Buffer != 'undefined') return new Buffer(this, 'utf8').toString('base64'); // Node.js

      throw new Error('No Base64 Encode');
    };
  }

  if (typeof String.prototype.base64Decode == 'undefined') {
    String.prototype.base64Decode = function () {
      if (typeof atob != 'undefined') return atob(this); // browser

      if (typeof Buffer != 'undefined') return new Buffer(this, 'base64').toString('utf8'); // Node.js

      throw new Error('No Base64 Decode');
    };
  }

  encryptjs.init();
  return encryptjs;
});

cc._RF.pop();

}).call(this,require("buffer").Buffer)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hc3NldHNcXFNjcmlwdFxcRW5jcnlwdFxcZW5jcnlwdGpzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsQ0FBQyxVQUFVLElBQVYsRUFBZ0IsVUFBaEIsRUFBNEI7QUFDekIsTUFBSSxPQUFPLE9BQVAsS0FBbUIsV0FBbkIsSUFBa0MsT0FBTyxNQUFQLEtBQWtCLFdBQXhELEVBQXFFO0FBQ2pFLElBQUEsTUFBTSxDQUFDLE9BQVAsR0FBaUIsVUFBVSxFQUEzQjtBQUNILEdBRkQsTUFFTyxJQUFJLE9BQU8sTUFBUCxLQUFrQixVQUFsQixJQUFnQyxPQUFPLE1BQU0sQ0FBQyxHQUFkLEtBQXNCLFFBQTFELEVBQW9FO0FBQ3ZFLElBQUEsTUFBTSxDQUFDLFVBQUQsQ0FBTjtBQUNILEdBRk0sTUFFQSxJQUFJLE9BQU8sTUFBUCxLQUFrQixVQUFsQixJQUFnQyxPQUFPLE1BQU0sQ0FBQyxLQUFkLEtBQXdCLFFBQTVELEVBQXNFO0FBQ3pFLElBQUEsTUFBTSxDQUFDLElBQUQsRUFBTyxFQUFQLEVBQVcsVUFBWCxDQUFOO0FBQ0gsR0FGTSxNQUVBO0FBQ0gsU0FBSyxJQUFMLElBQWEsVUFBVSxFQUF2QjtBQUNIO0FBQ0osQ0FWRCxFQVVHLFdBVkgsRUFVZ0IsVUFBVSxTQUFWLEVBQXFCO0FBQ2pDLE1BQUksRUFBSixDQURpQyxDQUVqQzs7QUFFQSxFQUFBLFNBQVMsR0FBRztBQUFFLElBQUEsT0FBTyxFQUFFO0FBQVgsR0FBWixDQUppQyxDQU1qQztBQUNBOztBQUNBLEVBQUEsU0FBUyxDQUFDLElBQVYsR0FBaUIsWUFBWTtBQUN6QixJQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksc0VBQVo7QUFDSCxHQUZEOztBQUdBOztB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QU8sUUFBUSxDQUFDLGtCQUFrQixDQUFDLElBQUQsQ0FBbkIsQ0FBZjtBQUNILEtBRkQ7QUFHSDs7QUFFRCxNQUFJLE9BQU8sTUFBTSxDQUFDLFNBQVAsQ0FBaUIsVUFBeEIsSUFBc0MsV0FBMUMsRUFBdUQ7QUFDbkQsSUFBQSxNQUFNLENBQUMsU0FBUCxDQUFpQixVQUFqQixHQUE4QixZQUFZO0FBQ3RDLFVBQUk7QUFDQSxlQUFPLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxJQUFELENBQVAsQ0FBekI7QUFDSCxPQUZELENBRUUsT0FBTyxDQUFQLEVBQVU7QUFDUixlQUFPLElBQVAsQ0FEUSxDQUNLO0FBQ2hCO0FBQ0osS0FORDtBQU9IOztBQUVELE1BQUksT0FBTyxNQUFNLENBQUMsU0FBUCxDQUFpQixZQUF4QixJQUF3QyxXQUE1QyxFQUF5RDtBQUNyRCxJQUFBLE1BQU0sQ0FBQyxTQUFQLENBQWlCLFlBQWpCLEdBQWdDLFlBQVk7QUFDeEMsVUFBSSxPQUFPLElBQVAsSUFBZSxXQUFuQixFQUFnQyxPQUFPLElBQUksQ0FBQyxJQUFELENBQVgsQ0FEUSxDQUNXOztBQUNuRCxVQUFJLE9BQU8sTUFBUCxJQUFpQixXQUFyQixFQUFrQyxPQUFPLElBQUksTUFBSixDQUFXLElBQVgsRUFBaUIsTUFBakIsRUFBeUIsUUFBekIsQ0FBa0MsUUFBbEMsQ0FBUCxDQUZNLENBRThDOztBQUN0RixZQUFNLElBQUksS0FBSixDQUFVLGtCQUFWLENBQU47QUFDSCxLQUpEO0FBS0g7O0FBRUQsTUFBSSxPQUFPLE1BQU0sQ0FBQyxTQUFQLENBQWlCLFlBQXhCLElBQXdDLFdBQTVDLEVBQXlEO0FBQ3JELElBQUEsTUFBTSxDQUFDLFNBQVAsQ0FBaUIsWUFBakIsR0FBZ0MsWUFBWTtBQUN4QyxVQUFJLE9BQU8sSUFBUCxJQUFlLFdBQW5CLEVBQWdDLE9BQU8sSUFBSSxDQUFDLElBQUQsQ0FBWCxDQURRLENBQ1c7O0FBQ25ELFVBQUksT0FBTyxNQUFQLElBQWlCLFdBQXJCLEVBQWtDLE9BQU8sSUFBSSxNQUFKLENBQVcsSUFBWCxFQUFpQixRQUFqQixFQUEyQixRQUEzQixDQUFvQyxNQUFwQyxDQUFQLENBRk0sQ0FFOEM7O0FBQ3RGLFlBQU0sSUFBSSxLQUFKLENBQVUsa0JBQVYsQ0FBTjtBQUNILEtBSkQ7QUFLSDs7QUFFRCxFQUFBLFNBQVMsQ0FBQyxJQUFWO0FBRUEsU0FBTyxTQUFQO0FBRUgsQ0F0VUQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbbnVsbF19