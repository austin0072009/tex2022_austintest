"use strict";
cc._RF.push(module, '97e2a/bZt9LwJfc9E3OqDG2', 'CommonFunc');
// Script/BaseFrame/CommonFunc.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonFunc = void 0;
var BaseFrameNative_1 = require("../../Script/BaseFrameNative");
var CommonFunc = /** @class */ (function () {
    function CommonFunc() {
    }
    // 通关id获取本地配置的版本
    CommonFunc.getDefaultVersionJsonByID = function (idx) {
        var list = BaseFrameNative_1.BaseFrameNative.defaultServerList.gamereslist;
        for (var index = 0; index < list.length; index++) {
            var data = list[index];
            if (data.id == idx) {
                return data;
            }
        }
        console.log("\u672A\u627E\u5230id" + idx + ",\u8BF7\u68C0\u67E5\u662F\u5426\u4F20\u8F93\u6B63\u786E\uFF01");
        return null;
    };
    // 通关id获取最新的游戏配置的版本
    CommonFunc.getLasteNewVersionJsonByID = function (idx) {
        var list = BaseFrameNative_1.BaseFrameNative.serverList.gamereslist;
        for (var index = 0; index < list.length; index++) {
            var data = list[index];
            if (data.id == idx) {
                return data;
            }
        }
        console.log("\u672A\u627E\u5230id" + idx + ",\u8BF7\u68C0\u67E5\u662F\u5426\u4F20\u8F93\u6B63\u786E\uFF01");
        return null;
    };
    return CommonFunc;
}());
exports.CommonFunc = CommonFunc;

cc._RF.pop();