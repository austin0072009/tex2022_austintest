
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/slots/lib/PrizeShowStatus.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bf7d4L+P5lH15yRYD4PeQxV', 'PrizeShowStatus');
// Script/modules/@mogafa/slots/lib/PrizeShowStatus.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrizeShowStatus = void 0;
/**
 * 中奖结果展示状态
 * 这也是棋盘状态,是否和WaitingResultsStatus合并? 然后改名为SymbolBoardStatus?
 * 还有就是bigwin
 */
var PrizeShowStatus;
(function (PrizeShowStatus) {
    /**
     * 已准备好
     */
    PrizeShowStatus[PrizeShowStatus["Ready"] = 0] = "Ready";
    /**
     * 开始展示结果前
     */
    PrizeShowStatus[PrizeShowStatus["BeforeShowing"] = 1] = "BeforeShowing";
    /**
     * 展示中
     */
    PrizeShowStatus[PrizeShowStatus["Showing"] = 2] = "Showing";
    /**
     * 开始结算前
     */
    PrizeShowStatus[PrizeShowStatus["BeforeSettling"] = 3] = "BeforeSettling";
    /**
     * 结算中
     */
    PrizeShowStatus[PrizeShowStatus["Settling"] = 4] = "Settling";
    /**
     * 结算完成
     */
    PrizeShowStatus[PrizeShowStatus["Settled"] = 5] = "Settled";
})(PrizeShowStatus = exports.PrizeShowStatus || (exports.PrizeShowStatus = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxzbG90c1xcbGliXFxQcml6ZVNob3dTdGF0dXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7R0FJRztBQUNILElBQVksZUF5Qlg7QUF6QkQsV0FBWSxlQUFlO0lBQ3ZCOztPQUVHO0lBQ0gsdURBQUssQ0FBQTtJQUNMOztPQUVHO0lBQ0gsdUVBQWEsQ0FBQTtJQUNiOztPQUVHO0lBQ0gsMkRBQU8sQ0FBQTtJQUNQOztPQUVHO0lBQ0gseUVBQWMsQ0FBQTtJQUNkOztPQUVHO0lBQ0gsNkRBQVEsQ0FBQTtJQUNSOztPQUVHO0lBQ0gsMkRBQU8sQ0FBQTtBQUNYLENBQUMsRUF6QlcsZUFBZSxHQUFmLHVCQUFlLEtBQWYsdUJBQWUsUUF5QjFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDkuK3lpZbnu5PmnpzlsZXnpLrnirbmgIFcbiAqIOi/meS5n+aYr+aji+ebmOeKtuaAgSzmmK/lkKblkoxXYWl0aW5nUmVzdWx0c1N0YXR1c+WQiOW5tj8g54S25ZCO5pS55ZCN5Li6U3ltYm9sQm9hcmRTdGF0dXM/XG4gKiDov5jmnInlsLHmmK9iaWd3aW5cbiAqL1xuZXhwb3J0IGVudW0gUHJpemVTaG93U3RhdHVzIHtcbiAgICAvKipcbiAgICAgKiDlt7Llh4blpIflpb1cbiAgICAgKi9cbiAgICBSZWFkeSxcbiAgICAvKipcbiAgICAgKiDlvIDlp4vlsZXnpLrnu5PmnpzliY1cbiAgICAgKi9cbiAgICBCZWZvcmVTaG93aW5nLFxuICAgIC8qKlxuICAgICAqIOWxleekuuS4rVxuICAgICAqL1xuICAgIFNob3dpbmcsXG4gICAgLyoqXG4gICAgICog5byA5aeL57uT566X5YmNXG4gICAgICovXG4gICAgQmVmb3JlU2V0dGxpbmcsXG4gICAgLyoqXG4gICAgICog57uT566X5LitXG4gICAgICovXG4gICAgU2V0dGxpbmcsXG4gICAgLyoqXG4gICAgICog57uT566X5a6M5oiQXG4gICAgICovXG4gICAgU2V0dGxlZCxcbn1cbiJdfQ==