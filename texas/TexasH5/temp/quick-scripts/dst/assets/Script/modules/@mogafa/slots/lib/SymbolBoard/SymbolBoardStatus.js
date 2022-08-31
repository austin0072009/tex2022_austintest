
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/slots/lib/SymbolBoard/SymbolBoardStatus.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '260e8gUP4ZH/LnOwSR4h6DV', 'SymbolBoardStatus');
// Script/modules/@mogafa/slots/lib/SymbolBoard/SymbolBoardStatus.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SymbolBoardStatus = void 0;
/**
 * 棋盘状态
 * 状态是自上而下的，比如棋盘设置状态为转动，那么棋盘包含的轴、格子、棋子的状态全部都是转动状态
 * 但是下一级状态的变化不影响上一级状态，比如某列停止转动，它的状态变化并不会影响棋盘的状态
 */
var SymbolBoardStatus;
(function (SymbolBoardStatus) {
    /**
     * 静止
     */
    SymbolBoardStatus[SymbolBoardStatus["Ready"] = 0] = "Ready";
    /**
     * 转动中
     */
    SymbolBoardStatus[SymbolBoardStatus["Spinning"] = 1] = "Spinning";
    /**
     * 停止
     */
    SymbolBoardStatus[SymbolBoardStatus["Stopped"] = 2] = "Stopped";
    /**
     * 棋子替换中
     */
    SymbolBoardStatus[SymbolBoardStatus["Replacing"] = 3] = "Replacing";
    /**
     * 中奖展示中
     */
    SymbolBoardStatus[SymbolBoardStatus["PrizeShowing"] = 4] = "PrizeShowing";
    /**
     * 结算中
     */
    SymbolBoardStatus[SymbolBoardStatus["Settling"] = 5] = "Settling";
})(SymbolBoardStatus = exports.SymbolBoardStatus || (exports.SymbolBoardStatus = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxzbG90c1xcbGliXFxTeW1ib2xCb2FyZFxcU3ltYm9sQm9hcmRTdGF0dXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7R0FJRztBQUNILElBQVksaUJBeUJYO0FBekJELFdBQVksaUJBQWlCO0lBQ3pCOztPQUVHO0lBQ0gsMkRBQUssQ0FBQTtJQUNMOztPQUVHO0lBQ0gsaUVBQVEsQ0FBQTtJQUNSOztPQUVHO0lBQ0gsK0RBQU8sQ0FBQTtJQUNQOztPQUVHO0lBQ0gsbUVBQVMsQ0FBQTtJQUNUOztPQUVHO0lBQ0gseUVBQVksQ0FBQTtJQUNaOztPQUVHO0lBQ0gsaUVBQVEsQ0FBQTtBQUNaLENBQUMsRUF6QlcsaUJBQWlCLEdBQWpCLHlCQUFpQixLQUFqQix5QkFBaUIsUUF5QjVCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDmo4vnm5jnirbmgIFcbiAqIOeKtuaAgeaYr+iHquS4iuiAjOS4i+eahO+8jOavlOWmguaji+ebmOiuvue9rueKtuaAgeS4uui9rOWKqO+8jOmCo+S5iOaji+ebmOWMheWQq+eahOi9tOOAgeagvOWtkOOAgeaji+WtkOeahOeKtuaAgeWFqOmDqOmDveaYr+i9rOWKqOeKtuaAgVxuICog5L2G5piv5LiL5LiA57qn54q25oCB55qE5Y+Y5YyW5LiN5b2x5ZON5LiK5LiA57qn54q25oCB77yM5q+U5aaC5p+Q5YiX5YGc5q2i6L2s5Yqo77yM5a6D55qE54q25oCB5Y+Y5YyW5bm25LiN5Lya5b2x5ZON5qOL55uY55qE54q25oCBXG4gKi9cbmV4cG9ydCBlbnVtIFN5bWJvbEJvYXJkU3RhdHVzIHtcbiAgICAvKipcbiAgICAgKiDpnZnmraJcbiAgICAgKi9cbiAgICBSZWFkeSxcbiAgICAvKipcbiAgICAgKiDovazliqjkuK1cbiAgICAgKi9cbiAgICBTcGlubmluZyxcbiAgICAvKipcbiAgICAgKiDlgZzmraJcbiAgICAgKi9cbiAgICBTdG9wcGVkLFxuICAgIC8qKlxuICAgICAqIOaji+WtkOabv+aNouS4rVxuICAgICAqL1xuICAgIFJlcGxhY2luZyxcbiAgICAvKipcbiAgICAgKiDkuK3lpZblsZXnpLrkuK1cbiAgICAgKi9cbiAgICBQcml6ZVNob3dpbmcsXG4gICAgLyoqXG4gICAgICog57uT566X5LitXG4gICAgICovXG4gICAgU2V0dGxpbmcsXG59XG4iXX0=