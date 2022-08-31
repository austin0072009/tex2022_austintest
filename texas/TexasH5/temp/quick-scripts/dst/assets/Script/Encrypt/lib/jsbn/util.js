
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Encrypt/lib/jsbn/util.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5deb74TkIVOVJNieyXDzQpa', 'util');
// Script/Encrypt/lib/jsbn/util.js

"use strict";

exports.__esModule = true;
exports.int2char = int2char;
exports.op_and = op_and;
exports.op_or = op_or;
exports.op_xor = op_xor;
exports.op_andnot = op_andnot;
exports.lbit = lbit;
exports.cbit = cbit;
var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";

function int2char(n) {
  return BI_RM.charAt(n);
} //#region BIT_OPERATIONS
// (public) this & a


function op_and(x, y) {
  return x & y;
} // (public) this | a


function op_or(x, y) {
  return x | y;
} // (public) this ^ a


function op_xor(x, y) {
  return x ^ y;
} // (public) this & ~a


function op_andnot(x, y) {
  return x & ~y;
} // return index of lowest 1-bit in x, x < 2^31


function lbit(x) {
  if (x == 0) {
    return -1;
  }

  var r = 0;

  if ((x & 0xffff) == 0) {
    x >>= 16;
    r += 16;
  }

  if ((x & 0xff) == 0) {
    x >>= 8;
    r += 8;
  }

  if ((x & 0xf) == 0) {
    x >>= 4;
    r += 4;
  }

  if ((x & 3) == 0) {
    x >>= 2;
    r += 2;
  }

  if ((x & 1) == 0) {
    ++r;
  }

  return r;
} // return number of 1 bits in x


function cbit(x) {
  var r = 0;

  while (x != 0) {
    x &= x - 1;
    ++r;
  }

  return r;
} //#endregion BIT_OPERATIONS

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbmNyeXB0XFxsaWJcXGpzYm5cXHV0aWwuanMiXSwibmFtZXMiOlsiQklfUk0iLCJpbnQyY2hhciIsIm4iLCJjaGFyQXQiLCJvcF9hbmQiLCJ4IiwieSIsIm9wX29yIiwib3BfeG9yIiwib3BfYW5kbm90IiwibGJpdCIsInIiLCJjYml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsS0FBSyxHQUFHLHNDQUFaOztBQUNPLFNBQVNDLFFBQVQsQ0FBa0JDLENBQWxCLEVBQXFCO0FBQ3hCLFNBQU9GLEtBQUssQ0FBQ0csTUFBTixDQUFhRCxDQUFiLENBQVA7QUFDSCxFQUNEO0FBQ0E7OztBQUNPLFNBQVNFLE1BQVQsQ0FBZ0JDLENBQWhCLEVBQW1CQyxDQUFuQixFQUFzQjtBQUN6QixTQUFPRCxDQUFDLEdBQUdDLENBQVg7QUFDSCxFQUNEOzs7QUFDTyxTQUFTQyxLQUFULENBQWVGLENBQWYsRUFBa0JDLENBQWxCLEVBQXFCO0FBQ3hCLFNBQU9ELENBQUMsR0FBR0MsQ0FBWDtBQUNILEVBQ0Q7OztBQUNPLFNBQVNFLE1BQVQsQ0FBZ0JILENBQWhCLEVBQW1CQyxDQUFuQixFQUFzQjtBQUN6QixTQUFPRCxDQUFDLEdBQUdDLENBQVg7QUFDSCxFQUNEOzs7QUFDTyxTQUFTRyxTQUFULENBQW1CSixDQUFuQixFQUFzQkMsQ0FBdEIsRUFBeUI7QUFDNUIsU0FBT0QsQ0FBQyxHQUFHLENBQUNDLENBQVo7QUFDSCxFQUNEOzs7QUFDTyxTQUFTSSxJQUFULENBQWNMLENBQWQsRUFBaUI7QUFDcEIsTUFBSUEsQ0FBQyxJQUFJLENBQVQsRUFBWTtBQUNSLFdBQU8sQ0FBQyxDQUFSO0FBQ0g7O0FBQ0QsTUFBSU0sQ0FBQyxHQUFHLENBQVI7O0FBQ0EsTUFBSSxDQUFDTixDQUFDLEdBQUcsTUFBTCxLQUFnQixDQUFwQixFQUF1QjtBQUNuQkEsSUFBQUEsQ0FBQyxLQUFLLEVBQU47QUFDQU0sSUFBQUEsQ0FBQyxJQUFJLEVBQUw7QUFDSDs7QUFDRCxNQUFJLENBQUNOLENBQUMsR0FBRyxJQUFMLEtBQWMsQ0FBbEIsRUFBcUI7QUFDakJBLElBQUFBLENBQUMsS0FBSyxDQUFOO0FBQ0FNLElBQUFBLENBQUMsSUFBSSxDQUFMO0FBQ0g7O0FBQ0QsTUFBSSxDQUFDTixDQUFDLEdBQUcsR0FBTCxLQUFhLENBQWpCLEVBQW9CO0FBQ2hCQSxJQUFBQSxDQUFDLEtBQUssQ0FBTjtBQUNBTSxJQUFBQSxDQUFDLElBQUksQ0FBTDtBQUNIOztBQUNELE1BQUksQ0FBQ04sQ0FBQyxHQUFHLENBQUwsS0FBVyxDQUFmLEVBQWtCO0FBQ2RBLElBQUFBLENBQUMsS0FBSyxDQUFOO0FBQ0FNLElBQUFBLENBQUMsSUFBSSxDQUFMO0FBQ0g7O0FBQ0QsTUFBSSxDQUFDTixDQUFDLEdBQUcsQ0FBTCxLQUFXLENBQWYsRUFBa0I7QUFDZCxNQUFFTSxDQUFGO0FBQ0g7O0FBQ0QsU0FBT0EsQ0FBUDtBQUNILEVBQ0Q7OztBQUNPLFNBQVNDLElBQVQsQ0FBY1AsQ0FBZCxFQUFpQjtBQUNwQixNQUFJTSxDQUFDLEdBQUcsQ0FBUjs7QUFDQSxTQUFPTixDQUFDLElBQUksQ0FBWixFQUFlO0FBQ1hBLElBQUFBLENBQUMsSUFBSUEsQ0FBQyxHQUFHLENBQVQ7QUFDQSxNQUFFTSxDQUFGO0FBQ0g7O0FBQ0QsU0FBT0EsQ0FBUDtBQUNILEVBQ0QiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBCSV9STSA9IFwiMDEyMzQ1Njc4OWFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6XCI7XG5leHBvcnQgZnVuY3Rpb24gaW50MmNoYXIobikge1xuICAgIHJldHVybiBCSV9STS5jaGFyQXQobik7XG59XG4vLyNyZWdpb24gQklUX09QRVJBVElPTlNcbi8vIChwdWJsaWMpIHRoaXMgJiBhXG5leHBvcnQgZnVuY3Rpb24gb3BfYW5kKHgsIHkpIHtcbiAgICByZXR1cm4geCAmIHk7XG59XG4vLyAocHVibGljKSB0aGlzIHwgYVxuZXhwb3J0IGZ1bmN0aW9uIG9wX29yKHgsIHkpIHtcbiAgICByZXR1cm4geCB8IHk7XG59XG4vLyAocHVibGljKSB0aGlzIF4gYVxuZXhwb3J0IGZ1bmN0aW9uIG9wX3hvcih4LCB5KSB7XG4gICAgcmV0dXJuIHggXiB5O1xufVxuLy8gKHB1YmxpYykgdGhpcyAmIH5hXG5leHBvcnQgZnVuY3Rpb24gb3BfYW5kbm90KHgsIHkpIHtcbiAgICByZXR1cm4geCAmIH55O1xufVxuLy8gcmV0dXJuIGluZGV4IG9mIGxvd2VzdCAxLWJpdCBpbiB4LCB4IDwgMl4zMVxuZXhwb3J0IGZ1bmN0aW9uIGxiaXQoeCkge1xuICAgIGlmICh4ID09IDApIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICB2YXIgciA9IDA7XG4gICAgaWYgKCh4ICYgMHhmZmZmKSA9PSAwKSB7XG4gICAgICAgIHggPj49IDE2O1xuICAgICAgICByICs9IDE2O1xuICAgIH1cbiAgICBpZiAoKHggJiAweGZmKSA9PSAwKSB7XG4gICAgICAgIHggPj49IDg7XG4gICAgICAgIHIgKz0gODtcbiAgICB9XG4gICAgaWYgKCh4ICYgMHhmKSA9PSAwKSB7XG4gICAgICAgIHggPj49IDQ7XG4gICAgICAgIHIgKz0gNDtcbiAgICB9XG4gICAgaWYgKCh4ICYgMykgPT0gMCkge1xuICAgICAgICB4ID4+PSAyO1xuICAgICAgICByICs9IDI7XG4gICAgfVxuICAgIGlmICgoeCAmIDEpID09IDApIHtcbiAgICAgICAgKytyO1xuICAgIH1cbiAgICByZXR1cm4gcjtcbn1cbi8vIHJldHVybiBudW1iZXIgb2YgMSBiaXRzIGluIHhcbmV4cG9ydCBmdW5jdGlvbiBjYml0KHgpIHtcbiAgICB2YXIgciA9IDA7XG4gICAgd2hpbGUgKHggIT0gMCkge1xuICAgICAgICB4ICY9IHggLSAxO1xuICAgICAgICArK3I7XG4gICAgfVxuICAgIHJldHVybiByO1xufVxuLy8jZW5kcmVnaW9uIEJJVF9PUEVSQVRJT05TXG4iXX0=