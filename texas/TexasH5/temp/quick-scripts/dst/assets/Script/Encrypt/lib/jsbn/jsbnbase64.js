
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Encrypt/lib/jsbn/jsbnbase64.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cc39ef4KwtAVYAj9V3bzHOl', 'jsbnbase64');
// Script/Encrypt/lib/jsbn/jsbnbase64.js

"use strict";

exports.__esModule = true;
exports.hex2b64 = hex2b64;
exports.b64tohex = b64tohex;
exports.b64toBA = b64toBA;

var _util = require("./util");

var b64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var b64pad = "=";

function hex2b64(h) {
  var i;
  var c;
  var ret = "";

  for (i = 0; i + 3 <= h.length; i += 3) {
    c = parseInt(h.substring(i, i + 3), 16);
    ret += b64map.charAt(c >> 6) + b64map.charAt(c & 63);
  }

  if (i + 1 == h.length) {
    c = parseInt(h.substring(i, i + 1), 16);
    ret += b64map.charAt(c << 2);
  } else if (i + 2 == h.length) {
    c = parseInt(h.substring(i, i + 2), 16);
    ret += b64map.charAt(c >> 2) + b64map.charAt((c & 3) << 4);
  }

  while ((ret.length & 3) > 0) {
    ret += b64pad;
  }

  return ret;
} // convert a base64 string to hex


function b64tohex(s) {
  var ret = "";
  var i;
  var k = 0; // b64 state, 0-3

  var slop = 0;

  for (i = 0; i < s.length; ++i) {
    if (s.charAt(i) == b64pad) {
      break;
    }

    var v = b64map.indexOf(s.charAt(i));

    if (v < 0) {
      continue;
    }

    if (k == 0) {
      ret += (0, _util.int2char)(v >> 2);
      slop = v & 3;
      k = 1;
    } else if (k == 1) {
      ret += (0, _util.int2char)(slop << 2 | v >> 4);
      slop = v & 0xf;
      k = 2;
    } else if (k == 2) {
      ret += (0, _util.int2char)(slop);
      ret += (0, _util.int2char)(v >> 2);
      slop = v & 3;
      k = 3;
    } else {
      ret += (0, _util.int2char)(slop << 2 | v >> 4);
      ret += (0, _util.int2char)(v & 0xf);
      k = 0;
    }
  }

  if (k == 1) {
    ret += (0, _util.int2char)(slop << 2);
  }

  return ret;
} // convert a base64 string to a byte/number array


function b64toBA(s) {
  // piggyback on b64tohex for now, optimize later
  var h = b64tohex(s);
  var i;
  var a = [];

  for (i = 0; 2 * i < h.length; ++i) {
    a[i] = parseInt(h.substring(2 * i, 2 * i + 2), 16);
  }

  return a;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbmNyeXB0XFxsaWJcXGpzYm5cXGpzYm5iYXNlNjQuanMiXSwibmFtZXMiOlsiYjY0bWFwIiwiYjY0cGFkIiwiaGV4MmI2NCIsImgiLCJpIiwiYyIsInJldCIsImxlbmd0aCIsInBhcnNlSW50Iiwic3Vic3RyaW5nIiwiY2hhckF0IiwiYjY0dG9oZXgiLCJzIiwiayIsInNsb3AiLCJ2IiwiaW5kZXhPZiIsImI2NHRvQkEiLCJhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0EsSUFBSUEsTUFBTSxHQUFHLGtFQUFiO0FBQ0EsSUFBSUMsTUFBTSxHQUFHLEdBQWI7O0FBQ08sU0FBU0MsT0FBVCxDQUFpQkMsQ0FBakIsRUFBb0I7QUFDdkIsTUFBSUMsQ0FBSjtBQUNBLE1BQUlDLENBQUo7QUFDQSxNQUFJQyxHQUFHLEdBQUcsRUFBVjs7QUFDQSxPQUFLRixDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUcsQ0FBSixJQUFTRCxDQUFDLENBQUNJLE1BQXZCLEVBQStCSCxDQUFDLElBQUksQ0FBcEMsRUFBdUM7QUFDbkNDLElBQUFBLENBQUMsR0FBR0csUUFBUSxDQUFDTCxDQUFDLENBQUNNLFNBQUYsQ0FBWUwsQ0FBWixFQUFlQSxDQUFDLEdBQUcsQ0FBbkIsQ0FBRCxFQUF3QixFQUF4QixDQUFaO0FBQ0FFLElBQUFBLEdBQUcsSUFBSU4sTUFBTSxDQUFDVSxNQUFQLENBQWNMLENBQUMsSUFBSSxDQUFuQixJQUF3QkwsTUFBTSxDQUFDVSxNQUFQLENBQWNMLENBQUMsR0FBRyxFQUFsQixDQUEvQjtBQUNIOztBQUNELE1BQUlELENBQUMsR0FBRyxDQUFKLElBQVNELENBQUMsQ0FBQ0ksTUFBZixFQUF1QjtBQUNuQkYsSUFBQUEsQ0FBQyxHQUFHRyxRQUFRLENBQUNMLENBQUMsQ0FBQ00sU0FBRixDQUFZTCxDQUFaLEVBQWVBLENBQUMsR0FBRyxDQUFuQixDQUFELEVBQXdCLEVBQXhCLENBQVo7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QjtBQUNBLE1BQUlSLENBQUo7QUFDQSxNQUFJYyxDQUFDLEdBQUcsRUFBUjs7QUFDQSxPQUFLZCxDQUFDLEdBQUcsQ0FBVCxFQUFZLElBQUlBLENBQUosR0FBUUQsQ0FBQyxDQUFDSSxNQUF0QixFQUE4QixFQUFFSCxDQUFoQyxFQUFtQztBQUMvQmMsSUFBQUEsQ0FBQyxDQUFDZCxDQUFELENBQUQsR0FBT0ksUUFBUSxDQUFDTCxDQUFDLENBQUNNLFNBQUYsQ0FBWSxJQUFJTCxDQUFoQixFQUFtQixJQUFJQSxDQUFKLEdBQVEsQ0FBM0IsQ0FBRCxFQUFnQyxFQUFoQyxDQUFmO0FBQ0g7O0FBQ0QsU0FBT2MsQ0FBUDtBQUNIIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbnQyY2hhciB9IGZyb20gXCIuL3V0aWxcIjtcbnZhciBiNjRtYXAgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky9cIjtcbnZhciBiNjRwYWQgPSBcIj1cIjtcbmV4cG9ydCBmdW5jdGlvbiBoZXgyYjY0KGgpIHtcbiAgICB2YXIgaTtcbiAgICB2YXIgYztcbiAgICB2YXIgcmV0ID0gXCJcIjtcbiAgICBmb3IgKGkgPSAwOyBpICsgMyA8PSBoLmxlbmd0aDsgaSArPSAzKSB7XG4gICAgICAgIGMgPSBwYXJzZUludChoLnN1YnN0cmluZyhpLCBpICsgMyksIDE2KTtcbiAgICAgICAgcmV0ICs9IGI2NG1hcC5jaGFyQXQoYyA+PiA2KSArIGI2NG1hcC5jaGFyQXQoYyAmIDYzKTtcbiAgICB9XG4gICAgaWYgKGkgKyAxID09IGgubGVuZ3RoKSB7XG4gICAgICAgIGMgPSBwYXJzZUludChoLnN1YnN0cmluZyhpLCBpICsgMSksIDE2KTtcbiAgICAgICAgcmV0ICs9IGI2NG1hcC5jaGFyQXQoYyA8PCAyKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaSArIDIgPT0gaC5sZW5ndGgpIHtcbiAgICAgICAgYyA9IHBhcnNlSW50KGguc3Vic3RyaW5nKGksIGkgKyAyKSwgMTYpO1xuICAgICAgICByZXQgKz0gYjY0bWFwLmNoYXJBdChjID4+IDIpICsgYjY0bWFwLmNoYXJBdCgoYyAmIDMpIDw8IDQpO1xuICAgIH1cbiAgICB3aGlsZSAoKHJldC5sZW5ndGggJiAzKSA+IDApIHtcbiAgICAgICAgcmV0ICs9IGI2NHBhZDtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cbi8vIGNvbnZlcnQgYSBiYXNlNjQgc3RyaW5nIHRvIGhleFxuZXhwb3J0IGZ1bmN0aW9uIGI2NHRvaGV4KHMpIHtcbiAgICB2YXIgcmV0ID0gXCJcIjtcbiAgICB2YXIgaTtcbiAgICB2YXIgayA9IDA7IC8vIGI2NCBzdGF0ZSwgMC0zXG4gICAgdmFyIHNsb3AgPSAwO1xuICAgIGZvciAoaSA9IDA7IGkgPCBzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmIChzLmNoYXJBdChpKSA9PSBiNjRwYWQpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2ID0gYjY0bWFwLmluZGV4T2Yocy5jaGFyQXQoaSkpO1xuICAgICAgICBpZiAodiA8IDApIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChrID09IDApIHtcbiAgICAgICAgICAgIHJldCArPSBpbnQyY2hhcih2ID4+IDIpO1xuICAgICAgICAgICAgc2xvcCA9IHYgJiAzO1xuICAgICAgICAgICAgayA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoayA9PSAxKSB7XG4gICAgICAgICAgICByZXQgKz0gaW50MmNoYXIoKHNsb3AgPDwgMikgfCAodiA+PiA0KSk7XG4gICAgICAgICAgICBzbG9wID0gdiAmIDB4ZjtcbiAgICAgICAgICAgIGsgPSAyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGsgPT0gMikge1xuICAgICAgICAgICAgcmV0ICs9IGludDJjaGFyKHNsb3ApO1xuICAgICAgICAgICAgcmV0ICs9IGludDJjaGFyKHYgPj4gMik7XG4gICAgICAgICAgICBzbG9wID0gdiAmIDM7XG4gICAgICAgICAgICBrID0gMztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldCArPSBpbnQyY2hhcigoc2xvcCA8PCAyKSB8ICh2ID4+IDQpKTtcbiAgICAgICAgICAgIHJldCArPSBpbnQyY2hhcih2ICYgMHhmKTtcbiAgICAgICAgICAgIGsgPSAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChrID09IDEpIHtcbiAgICAgICAgcmV0ICs9IGludDJjaGFyKHNsb3AgPDwgMik7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59XG4vLyBjb252ZXJ0IGEgYmFzZTY0IHN0cmluZyB0byBhIGJ5dGUvbnVtYmVyIGFycmF5XG5leHBvcnQgZnVuY3Rpb24gYjY0dG9CQShzKSB7XG4gICAgLy8gcGlnZ3liYWNrIG9uIGI2NHRvaGV4IGZvciBub3csIG9wdGltaXplIGxhdGVyXG4gICAgdmFyIGggPSBiNjR0b2hleChzKTtcbiAgICB2YXIgaTtcbiAgICB2YXIgYSA9IFtdO1xuICAgIGZvciAoaSA9IDA7IDIgKiBpIDwgaC5sZW5ndGg7ICsraSkge1xuICAgICAgICBhW2ldID0gcGFyc2VJbnQoaC5zdWJzdHJpbmcoMiAqIGksIDIgKiBpICsgMiksIDE2KTtcbiAgICB9XG4gICAgcmV0dXJuIGE7XG59XG4iXX0=