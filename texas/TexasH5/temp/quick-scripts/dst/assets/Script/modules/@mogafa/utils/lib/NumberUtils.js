
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/utils/lib/NumberUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f3e23PZ7+FHVa8kBNN1SfVU', 'NumberUtils');
// Script/modules/@mogafa/utils/lib/NumberUtils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberUtils = /** @class */ (function () {
    function NumberUtils() {
    }
    NumberUtils.random = function (min, max, excludes) {
        var code = Math.floor(Math.random() * (min + max + 1)) - min;
        if (!excludes) {
            return code;
        }
        while (excludes.find(function (e) { return e === code; }) != null) {
            code = Math.floor(Math.random() * (min + max + 1)) - min;
        }
        return code;
    };
    NumberUtils.isNumber = function (x) {
        return typeof x === "number";
    };
    NumberUtils.isString = function (x) {
        return typeof x === "string";
    };
    return NumberUtils;
}());
exports.default = NumberUtils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFx1dGlsc1xcbGliXFxOdW1iZXJVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFrQkEsQ0FBQztJQWpCaUIsa0JBQU0sR0FBcEIsVUFBcUIsR0FBVyxFQUFFLEdBQVcsRUFBRSxRQUFtQjtRQUM5RCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDN0QsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNYLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLEtBQUssSUFBSSxFQUFWLENBQVUsQ0FBQyxJQUFJLElBQUksRUFBRTtZQUM3QyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1NBQzVEO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNhLG9CQUFRLEdBQXRCLFVBQXVCLENBQU07UUFDekIsT0FBTyxPQUFPLENBQUMsS0FBSyxRQUFRLENBQUM7SUFDakMsQ0FBQztJQUVhLG9CQUFRLEdBQXRCLFVBQXVCLENBQU07UUFDekIsT0FBTyxPQUFPLENBQUMsS0FBSyxRQUFRLENBQUM7SUFDakMsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FsQkEsQUFrQkMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bWJlclV0aWxzIHtcbiAgICBwdWJsaWMgc3RhdGljIHJhbmRvbShtaW46IG51bWJlciwgbWF4OiBudW1iZXIsIGV4Y2x1ZGVzPzogbnVtYmVyW10pOiBudW1iZXIge1xuICAgICAgICBsZXQgY29kZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtaW4gKyBtYXggKyAxKSkgLSBtaW47XG4gICAgICAgIGlmICghZXhjbHVkZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBjb2RlO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChleGNsdWRlcy5maW5kKChlKSA9PiBlID09PSBjb2RlKSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb2RlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1pbiArIG1heCArIDEpKSAtIG1pbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29kZTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBpc051bWJlcih4OiBhbnkpOiB4IGlzIG51bWJlciB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgeCA9PT0gXCJudW1iZXJcIjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGlzU3RyaW5nKHg6IGFueSk6IHggaXMgc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB4ID09PSBcInN0cmluZ1wiO1xuICAgIH1cbn1cbiJdfQ==