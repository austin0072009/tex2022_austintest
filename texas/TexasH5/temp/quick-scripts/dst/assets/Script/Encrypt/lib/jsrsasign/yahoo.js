
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Encrypt/lib/jsrsasign/yahoo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fc3b5TlruVCS4PcKVVzvH7c', 'yahoo');
// Script/Encrypt/lib/jsrsasign/yahoo.js

"use strict";

exports.__esModule = true;
exports.YAHOO = void 0;

/*!
Copyright (c) 2011, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 2.9.0
*/
var YAHOO = {};
exports.YAHOO = YAHOO;
YAHOO.lang = {
  /**
   * Utility to set up the prototype, constructor and superclass properties to
   * support an inheritance strategy that can chain constructors and methods.
   * Static members will not be inherited.
   *
   * @method extend
   * @static
   * @param {Function} subc   the object to modify
   * @param {Function} superc the object to inherit
   * @param {Object} overrides  additional properties/methods to add to the
   *                              subclass prototype.  These will override the
   *                              matching items obtained from the superclass
   *                              if present.
   */
  extend: function extend(subc, superc, overrides) {
    if (!superc || !subc) {
      throw new Error("YAHOO.lang.extend failed, please check that " + "all dependencies are included.");
    }

    var F = function F() {};

    F.prototype = superc.prototype;
    subc.prototype = new F();
    subc.prototype.constructor = subc;
    subc.superclass = superc.prototype;

    if (superc.prototype.constructor == Object.prototype.constructor) {
      superc.prototype.constructor = superc;
    }

    if (overrides) {
      var i;

      for (i in overrides) {
        subc.prototype[i] = overrides[i];
      }
      /*
       * IE will not enumerate native functions in a derived object even if the
       * function was overridden.  This is a workaround for specific functions
       * we care about on the Object prototype.
       * @property _IEEnumFix
       * @param {Function} r  the object to receive the augmentation
       * @param {Function} s  the object that supplies the properties to augment
       * @static
       * @private
       */


      var _IEEnumFix = function _IEEnumFix() {},
          ADD = ["toString", "valueOf"];

      try {
        if (/MSIE/.test(navigator.userAgent)) {
          _IEEnumFix = function _IEEnumFix(r, s) {
            for (i = 0; i < ADD.length; i = i + 1) {
              var fname = ADD[i],
                  f = s[fname];

              if (typeof f === 'function' && f != Object.prototype[fname]) {
                r[fname] = f;
              }
            }
          };
        }
      } catch (ex) {}

      ;

      _IEEnumFix(subc.prototype, overrides);
    }
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbmNyeXB0XFxsaWJcXGpzcnNhc2lnblxceWFob28uanMiXSwibmFtZXMiOlsiWUFIT08iLCJsYW5nIiwiZXh0ZW5kIiwic3ViYyIsInN1cGVyYyIsIm92ZXJyaWRlcyIsIkVycm9yIiwiRiIsInByb3RvdHlwZSIsImNvbnN0cnVjdG9yIiwic3VwZXJjbGFzcyIsIk9iamVjdCIsImkiLCJfSUVFbnVtRml4IiwiQUREIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInIiLCJzIiwibGVuZ3RoIiwiZm5hbWUiLCJmIiwiZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBSUEsS0FBSyxHQUFHLEVBQVo7O0FBQ1BBLEtBQUssQ0FBQ0MsSUFBTixHQUFhO0FBQ1Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNJQyxFQUFBQSxNQUFNLEVBQUUsZ0JBQVVDLElBQVYsRUFBZ0JDLE1BQWhCLEVBQXdCQyxTQUF4QixFQUFtQztBQUN2QyxRQUFJLENBQUNELE1BQUQsSUFBVyxDQUFDRCxJQUFoQixFQUFzQjtBQUNsQixZQUFNLElBQUlHLEtBQUosQ0FBVSxpREFDWixnQ0FERSxDQUFOO0FBRUg7O0FBQ0QsUUFBSUMsQ0FBQyxHQUFHLFNBQUpBLENBQUksR0FBWSxDQUFHLENBQXZCOztBQUNBQSxJQUFBQSxDQUFDLENBQUNDLFNBQUYsR0FBY0osTUFBTSxDQUFDSSxTQUFyQjtBQUNBTCxJQUFBQSxJQUFJLENBQUNLLFNBQUwsR0FBaUIsSUFBSUQsQ0FBSixFQUFqQjtBQUNBSixJQUFBQSxJQUFJLENBQUNLLFNBQUwsQ0FBZUMsV0FBZixHQUE2Qk4sSUFBN0I7QUFDQUEsSUFBQUEsSUFBSSxDQUFDTyxVQUFMLEdBQWtCTixNQUFNLENBQUNJLFNBQXpCOztBQUNBLFFBQUlKLE1BQU0sQ0FBQ0ksU0FBUCxDQUFpQkMsV0FBakIsSUFBZ0NFLE1BQU0sQ0FBQ0gsU0FBUCxDQUFpQkMsV0FBckQsRUFBa0U7QUFDOURMLE1BQUFBLE1BQU0sQ0FBQ0ksU0FBUCxDQUFpQkMsV0FBakIsR0FBK0JMLE1BQS9CO0FBQ0g7O0FBQ0QsUUFBSUMsU0FBSixFQUFlO0FBQ1gsVUFBSU8sQ0FBSjs7QUFDQSxXQUFLQSxDQUFMLElBQVVQLFNBQVYsRUFBcUI7QUFDakJGLFFBQUFBLElBQUksQ0FBQ0ssU0FBTCxDQUFlSSxDQUFmLElBQW9CUCxTQUFTLENBQUNPLENBQUQsQ0FBN0I7QUFDSDtBQUNEO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDWSxVQUFJQyxVQUFVLEdBQUcsc0JBQVksQ0FBRyxDQUFoQztBQUFBLFVBQWtDQyxHQUFHLEdBQUcsQ0FBQyxVQUFELEVBQWEsU0FBYixDQUF4Qzs7QUFDQSxVQUFJO0FBQ0EsWUFBSSxPQUFPQyxJQUFQLENBQVlDLFNBQVMsQ0FBQ0MsU0FBdEIsQ0FBSixFQUFzQztBQUNsQ0osVUFBQUEsVUFBVSxHQUFHLG9CQUFVSyxDQUFWLEVBQWFDLENBQWIsRUFBZ0I7QUFDekIsaUJBQUtQLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR0UsR0FBRyxDQUFDTSxNQUFwQixFQUE0QlIsQ0FBQyxHQUFHQSxDQUFDLEdBQUcsQ0FBcEMsRUFBdUM7QUFDbkMsa0JBQUlTLEtBQUssR0FBR1AsR0FBRyxDQUFDRixDQUFELENBQWY7QUFBQSxrQkFBb0JVLENBQUMsR0FBR0gsQ0FBQyxDQUFDRSxLQUFELENBQXpCOztBQUNBLGtCQUFJLE9BQU9DLENBQVAsS0FBYSxVQUFiLElBQTJCQSxDQUFDLElBQUlYLE1BQU0sQ0FBQ0gsU0FBUCxDQUFpQmEsS0FBakIsQ0FBcEMsRUFBNkQ7QUFDekRILGdCQUFBQSxDQUFDLENBQUNHLEtBQUQsQ0FBRCxHQUFXQyxDQUFYO0FBQ0g7QUFDSjtBQUNKLFdBUEQ7QUFRSDtBQUNKLE9BWEQsQ0FZQSxPQUFPQyxFQUFQLEVBQVcsQ0FBRzs7QUFDZDs7QUFDQVYsTUFBQUEsVUFBVSxDQUFDVixJQUFJLENBQUNLLFNBQU4sRUFBaUJILFNBQWpCLENBQVY7QUFDSDtBQUNKO0FBNURRLENBQWIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuQ29weXJpZ2h0IChjKSAyMDExLCBZYWhvbyEgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuQ29kZSBsaWNlbnNlZCB1bmRlciB0aGUgQlNEIExpY2Vuc2U6XG5odHRwOi8vZGV2ZWxvcGVyLnlhaG9vLmNvbS95dWkvbGljZW5zZS5odG1sXG52ZXJzaW9uOiAyLjkuMFxuKi9cbmV4cG9ydCB2YXIgWUFIT08gPSB7fTtcbllBSE9PLmxhbmcgPSB7XG4gICAgLyoqXG4gICAgICogVXRpbGl0eSB0byBzZXQgdXAgdGhlIHByb3RvdHlwZSwgY29uc3RydWN0b3IgYW5kIHN1cGVyY2xhc3MgcHJvcGVydGllcyB0b1xuICAgICAqIHN1cHBvcnQgYW4gaW5oZXJpdGFuY2Ugc3RyYXRlZ3kgdGhhdCBjYW4gY2hhaW4gY29uc3RydWN0b3JzIGFuZCBtZXRob2RzLlxuICAgICAqIFN0YXRpYyBtZW1iZXJzIHdpbGwgbm90IGJlIGluaGVyaXRlZC5cbiAgICAgKlxuICAgICAqIEBtZXRob2QgZXh0ZW5kXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHN1YmMgICB0aGUgb2JqZWN0IHRvIG1vZGlmeVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHN1cGVyYyB0aGUgb2JqZWN0IHRvIGluaGVyaXRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3ZlcnJpZGVzICBhZGRpdGlvbmFsIHByb3BlcnRpZXMvbWV0aG9kcyB0byBhZGQgdG8gdGhlXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJjbGFzcyBwcm90b3R5cGUuICBUaGVzZSB3aWxsIG92ZXJyaWRlIHRoZVxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hpbmcgaXRlbXMgb2J0YWluZWQgZnJvbSB0aGUgc3VwZXJjbGFzc1xuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgcHJlc2VudC5cbiAgICAgKi9cbiAgICBleHRlbmQ6IGZ1bmN0aW9uIChzdWJjLCBzdXBlcmMsIG92ZXJyaWRlcykge1xuICAgICAgICBpZiAoIXN1cGVyYyB8fCAhc3ViYykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWUFIT08ubGFuZy5leHRlbmQgZmFpbGVkLCBwbGVhc2UgY2hlY2sgdGhhdCBcIiArXG4gICAgICAgICAgICAgICAgXCJhbGwgZGVwZW5kZW5jaWVzIGFyZSBpbmNsdWRlZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIEYgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgICAgIEYucHJvdG90eXBlID0gc3VwZXJjLnByb3RvdHlwZTtcbiAgICAgICAgc3ViYy5wcm90b3R5cGUgPSBuZXcgRigpO1xuICAgICAgICBzdWJjLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YmM7XG4gICAgICAgIHN1YmMuc3VwZXJjbGFzcyA9IHN1cGVyYy5wcm90b3R5cGU7XG4gICAgICAgIGlmIChzdXBlcmMucHJvdG90eXBlLmNvbnN0cnVjdG9yID09IE9iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IpIHtcbiAgICAgICAgICAgIHN1cGVyYy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdXBlcmM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG92ZXJyaWRlcykge1xuICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICBmb3IgKGkgaW4gb3ZlcnJpZGVzKSB7XG4gICAgICAgICAgICAgICAgc3ViYy5wcm90b3R5cGVbaV0gPSBvdmVycmlkZXNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICogSUUgd2lsbCBub3QgZW51bWVyYXRlIG5hdGl2ZSBmdW5jdGlvbnMgaW4gYSBkZXJpdmVkIG9iamVjdCBldmVuIGlmIHRoZVxuICAgICAgICAgICAgICogZnVuY3Rpb24gd2FzIG92ZXJyaWRkZW4uICBUaGlzIGlzIGEgd29ya2Fyb3VuZCBmb3Igc3BlY2lmaWMgZnVuY3Rpb25zXG4gICAgICAgICAgICAgKiB3ZSBjYXJlIGFib3V0IG9uIHRoZSBPYmplY3QgcHJvdG90eXBlLlxuICAgICAgICAgICAgICogQHByb3BlcnR5IF9JRUVudW1GaXhcbiAgICAgICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHIgIHRoZSBvYmplY3QgdG8gcmVjZWl2ZSB0aGUgYXVnbWVudGF0aW9uXG4gICAgICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBzICB0aGUgb2JqZWN0IHRoYXQgc3VwcGxpZXMgdGhlIHByb3BlcnRpZXMgdG8gYXVnbWVudFxuICAgICAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmFyIF9JRUVudW1GaXggPSBmdW5jdGlvbiAoKSB7IH0sIEFERCA9IFtcInRvU3RyaW5nXCIsIFwidmFsdWVPZlwiXTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKC9NU0lFLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIF9JRUVudW1GaXggPSBmdW5jdGlvbiAociwgcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IEFERC5sZW5ndGg7IGkgPSBpICsgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmbmFtZSA9IEFERFtpXSwgZiA9IHNbZm5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZiA9PT0gJ2Z1bmN0aW9uJyAmJiBmICE9IE9iamVjdC5wcm90b3R5cGVbZm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJbZm5hbWVdID0gZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGV4KSB7IH1cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIF9JRUVudW1GaXgoc3ViYy5wcm90b3R5cGUsIG92ZXJyaWRlcyk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuIl19