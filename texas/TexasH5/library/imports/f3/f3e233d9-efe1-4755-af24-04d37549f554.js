"use strict";
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