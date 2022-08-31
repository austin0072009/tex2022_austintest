
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/BaseFrame/CommonFunc.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxCYXNlRnJhbWVcXENvbW1vbkZ1bmMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQStEO0FBRS9EO0lBQUE7SUEwQkEsQ0FBQztJQXpCRyxnQkFBZ0I7SUFDVCxvQ0FBeUIsR0FBaEMsVUFBaUMsR0FBVztRQUN4QyxJQUFJLElBQUksR0FBRyxpQ0FBZSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQztRQUN6RCxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUM5QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLEdBQUcsRUFBRTtnQkFDaEIsT0FBTyxJQUFJLENBQUM7YUFDZjtTQUNKO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBUSxHQUFHLGtFQUFhLENBQUMsQ0FBQztRQUN0QyxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsbUJBQW1CO0lBQ1oscUNBQTBCLEdBQWpDLFVBQWtDLEdBQVc7UUFDekMsSUFBSSxJQUFJLEdBQUcsaUNBQWUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQ2xELEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQzlDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QixJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksR0FBRyxFQUFFO2dCQUNoQixPQUFPLElBQUksQ0FBQzthQUNmO1NBQ0o7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUFRLEdBQUcsa0VBQWEsQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTCxpQkFBQztBQUFELENBMUJBLEFBMEJDLElBQUE7QUExQlksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlRnJhbWVOYXRpdmUgfSBmcm9tIFwiLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZU5hdGl2ZVwiO1xuXG5leHBvcnQgY2xhc3MgQ29tbW9uRnVuYyB7XG4gICAgLy8g6YCa5YWzaWTojrflj5bmnKzlnLDphY3nva7nmoTniYjmnKxcbiAgICBzdGF0aWMgZ2V0RGVmYXVsdFZlcnNpb25Kc29uQnlJRChpZHg6IG51bWJlcikge1xuICAgICAgICBsZXQgbGlzdCA9IEJhc2VGcmFtZU5hdGl2ZS5kZWZhdWx0U2VydmVyTGlzdC5nYW1lcmVzbGlzdDtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxpc3QubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IGxpc3RbaW5kZXhdO1xuICAgICAgICAgICAgaWYgKGRhdGEuaWQgPT0gaWR4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYOacquaJvuWIsGlkJHtpZHh9LOivt+ajgOafpeaYr+WQpuS8oOi+k+ato+ehru+8gWApO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyDpgJrlhbNpZOiOt+WPluacgOaWsOeahOa4uOaIj+mFjee9rueahOeJiOacrFxuICAgIHN0YXRpYyBnZXRMYXN0ZU5ld1ZlcnNpb25Kc29uQnlJRChpZHg6IG51bWJlcikge1xuICAgICAgICBsZXQgbGlzdCA9IEJhc2VGcmFtZU5hdGl2ZS5zZXJ2ZXJMaXN0LmdhbWVyZXNsaXN0O1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGlzdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gbGlzdFtpbmRleF07XG4gICAgICAgICAgICBpZiAoZGF0YS5pZCA9PSBpZHgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhg5pyq5om+5YiwaWQke2lkeH0s6K+35qOA5p+l5piv5ZCm5Lyg6L6T5q2j56Gu77yBYCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn0iXX0=