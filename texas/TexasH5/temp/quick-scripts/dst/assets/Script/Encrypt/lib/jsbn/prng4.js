
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Encrypt/lib/jsbn/prng4.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a07ddKb5OBIxJAwktp2PoMc', 'prng4');
// Script/Encrypt/lib/jsbn/prng4.js

"use strict";

exports.__esModule = true;
exports.prng_newstate = prng_newstate;
exports.rng_psize = exports.Arcfour = void 0;

// prng4.js - uses Arcfour as a PRNG
var Arcfour =
/** @class */
function () {
  function Arcfour() {
    this.i = 0;
    this.j = 0;
    this.S = [];
  } // Arcfour.prototype.init = ARC4init;
  // Initialize arcfour context from key, an array of ints, each from [0..255]


  Arcfour.prototype.init = function (key) {
    var i;
    var j;
    var t;

    for (i = 0; i < 256; ++i) {
      this.S[i] = i;
    }

    j = 0;

    for (i = 0; i < 256; ++i) {
      j = j + this.S[i] + key[i % key.length] & 255;
      t = this.S[i];
      this.S[i] = this.S[j];
      this.S[j] = t;
    }

    this.i = 0;
    this.j = 0;
  }; // Arcfour.prototype.next = ARC4next;


  Arcfour.prototype.next = function () {
    var t;
    this.i = this.i + 1 & 255;
    this.j = this.j + this.S[this.i] & 255;
    t = this.S[this.i];
    this.S[this.i] = this.S[this.j];
    this.S[this.j] = t;
    return this.S[t + this.S[this.i] & 255];
  };

  return Arcfour;
}();

exports.Arcfour = Arcfour;

// Plug in your RNG constructor here
function prng_newstate() {
  return new Arcfour();
} // Pool size must be a multiple of 4 and greater than 32.
// An array of bytes the size of the pool will be passed to init()


var rng_psize = 256;
exports.rng_psize = rng_psize;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbmNyeXB0XFxsaWJcXGpzYm5cXHBybmc0LmpzIl0sIm5hbWVzIjpbIkFyY2ZvdXIiLCJpIiwiaiIsIlMiLCJwcm90b3R5cGUiLCJpbml0Iiwia2V5IiwidCIsImxlbmd0aCIsIm5leHQiLCJwcm5nX25ld3N0YXRlIiwicm5nX3BzaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLElBQUlBLE9BQU87QUFBRztBQUFlLFlBQVk7QUFDckMsV0FBU0EsT0FBVCxHQUFtQjtBQUNmLFNBQUtDLENBQUwsR0FBUyxDQUFUO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTLENBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVMsRUFBVDtBQUNILEdBTG9DLENBTXJDO0FBQ0E7OztBQUNBSCxFQUFBQSxPQUFPLENBQUNJLFNBQVIsQ0FBa0JDLElBQWxCLEdBQXlCLFVBQVVDLEdBQVYsRUFBZTtBQUNwQyxRQUFJTCxDQUFKO0FBQ0EsUUFBSUMsQ0FBSjtBQUNBLFFBQUlLLENBQUo7O0FBQ0EsU0FBS04sQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHLEdBQWhCLEVBQXFCLEVBQUVBLENBQXZCLEVBQTBCO0FBQ3RCLFdBQUtFLENBQUwsQ0FBT0YsQ0FBUCxJQUFZQSxDQUFaO0FBQ0g7O0FBQ0RDLElBQUFBLENBQUMsR0FBRyxDQUFKOztBQUNBLFNBQUtELENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBRyxHQUFoQixFQUFxQixFQUFFQSxDQUF2QixFQUEwQjtBQUN0QkMsTUFBQUEsQ0FBQyxHQUFJQSxDQUFDLEdBQUcsS0FBS0MsQ0FBTCxDQUFPRixDQUFQLENBQUosR0FBZ0JLLEdBQUcsQ0FBQ0wsQ0FBQyxHQUFHSyxHQUFHLENBQUNFLE1BQVQsQ0FBcEIsR0FBd0MsR0FBNUM7QUFDQUQsTUFBQUEsQ0FBQyxHQUFHLEtBQUtKLENBQUwsQ0FBT0YsQ0FBUCxDQUFKO0FBQ0EsV0FBS0UsQ0FBTCxDQUFPRixDQUFQLElBQVksS0FBS0UsQ0FBTCxDQUFPRCxDQUFQLENBQVo7QUFDQSxXQUFLQyxDQUFMLENBQU9ELENBQVAsSUFBWUssQ0FBWjtBQUNIOztBQUNELFNBQUtOLENBQUwsR0FBUyxDQUFUO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTLENBQVQ7QUFDSCxHQWhCRCxDQVJxQyxDQXlCckM7OztBQUNBRixFQUFBQSxPQUFPLENBQUNJLFNBQVIsQ0FBa0JLLElBQWxCLEdBQXlCLFlBQVk7QUFDakMsUUFBSUYsQ0FBSjtBQUNBLFNBQUtOLENBQUwsR0FBVSxLQUFLQSxDQUFMLEdBQVMsQ0FBVixHQUFlLEdBQXhCO0FBQ0EsU0FBS0MsQ0FBTCxHQUFVLEtBQUtBLENBQUwsR0FBUyxLQUFLQyxDQUFMLENBQU8sS0FBS0YsQ0FBWixDQUFWLEdBQTRCLEdBQXJDO0FBQ0FNLElBQUFBLENBQUMsR0FBRyxLQUFLSixDQUFMLENBQU8sS0FBS0YsQ0FBWixDQUFKO0FBQ0EsU0FBS0UsQ0FBTCxDQUFPLEtBQUtGLENBQVosSUFBaUIsS0FBS0UsQ0FBTCxDQUFPLEtBQUtELENBQVosQ0FBakI7QUFDQSxTQUFLQyxDQUFMLENBQU8sS0FBS0QsQ0FBWixJQUFpQkssQ0FBakI7QUFDQSxXQUFPLEtBQUtKLENBQUwsQ0FBUUksQ0FBQyxHQUFHLEtBQUtKLENBQUwsQ0FBTyxLQUFLRixDQUFaLENBQUwsR0FBdUIsR0FBOUIsQ0FBUDtBQUNILEdBUkQ7O0FBU0EsU0FBT0QsT0FBUDtBQUNILENBcEM0QixFQUE3Qjs7OztBQXNDQTtBQUNPLFNBQVNVLGFBQVQsR0FBeUI7QUFDNUIsU0FBTyxJQUFJVixPQUFKLEVBQVA7QUFDSCxFQUNEO0FBQ0E7OztBQUNPLElBQUlXLFNBQVMsR0FBRyxHQUFoQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcHJuZzQuanMgLSB1c2VzIEFyY2ZvdXIgYXMgYSBQUk5HXG52YXIgQXJjZm91ciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBcmNmb3VyKCkge1xuICAgICAgICB0aGlzLmkgPSAwO1xuICAgICAgICB0aGlzLmogPSAwO1xuICAgICAgICB0aGlzLlMgPSBbXTtcbiAgICB9XG4gICAgLy8gQXJjZm91ci5wcm90b3R5cGUuaW5pdCA9IEFSQzRpbml0O1xuICAgIC8vIEluaXRpYWxpemUgYXJjZm91ciBjb250ZXh0IGZyb20ga2V5LCBhbiBhcnJheSBvZiBpbnRzLCBlYWNoIGZyb20gWzAuLjI1NV1cbiAgICBBcmNmb3VyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgdmFyIGo7XG4gICAgICAgIHZhciB0O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgICAgICAgICAgIHRoaXMuU1tpXSA9IGk7XG4gICAgICAgIH1cbiAgICAgICAgaiA9IDA7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICAgICAgICAgICAgaiA9IChqICsgdGhpcy5TW2ldICsga2V5W2kgJSBrZXkubGVuZ3RoXSkgJiAyNTU7XG4gICAgICAgICAgICB0ID0gdGhpcy5TW2ldO1xuICAgICAgICAgICAgdGhpcy5TW2ldID0gdGhpcy5TW2pdO1xuICAgICAgICAgICAgdGhpcy5TW2pdID0gdDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmkgPSAwO1xuICAgICAgICB0aGlzLmogPSAwO1xuICAgIH07XG4gICAgLy8gQXJjZm91ci5wcm90b3R5cGUubmV4dCA9IEFSQzRuZXh0O1xuICAgIEFyY2ZvdXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0O1xuICAgICAgICB0aGlzLmkgPSAodGhpcy5pICsgMSkgJiAyNTU7XG4gICAgICAgIHRoaXMuaiA9ICh0aGlzLmogKyB0aGlzLlNbdGhpcy5pXSkgJiAyNTU7XG4gICAgICAgIHQgPSB0aGlzLlNbdGhpcy5pXTtcbiAgICAgICAgdGhpcy5TW3RoaXMuaV0gPSB0aGlzLlNbdGhpcy5qXTtcbiAgICAgICAgdGhpcy5TW3RoaXMual0gPSB0O1xuICAgICAgICByZXR1cm4gdGhpcy5TWyh0ICsgdGhpcy5TW3RoaXMuaV0pICYgMjU1XTtcbiAgICB9O1xuICAgIHJldHVybiBBcmNmb3VyO1xufSgpKTtcbmV4cG9ydCB7IEFyY2ZvdXIgfTtcbi8vIFBsdWcgaW4geW91ciBSTkcgY29uc3RydWN0b3IgaGVyZVxuZXhwb3J0IGZ1bmN0aW9uIHBybmdfbmV3c3RhdGUoKSB7XG4gICAgcmV0dXJuIG5ldyBBcmNmb3VyKCk7XG59XG4vLyBQb29sIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQgYW5kIGdyZWF0ZXIgdGhhbiAzMi5cbi8vIEFuIGFycmF5IG9mIGJ5dGVzIHRoZSBzaXplIG9mIHRoZSBwb29sIHdpbGwgYmUgcGFzc2VkIHRvIGluaXQoKVxuZXhwb3J0IHZhciBybmdfcHNpemUgPSAyNTY7XG4iXX0=