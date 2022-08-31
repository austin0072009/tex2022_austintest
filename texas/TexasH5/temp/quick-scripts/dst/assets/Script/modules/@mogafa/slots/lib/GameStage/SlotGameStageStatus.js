
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/slots/lib/GameStage/SlotGameStageStatus.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '75a63ns/fFNmpAxvIxejFpX', 'SlotGameStageStatus');
// Script/modules/@mogafa/slots/lib/GameStage/SlotGameStageStatus.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlotGameStageStatus = void 0;
/**
 * Slot游戏状态
 * @remark
 * 这里是游戏的状态,某个状态可能对应棋盘的某个过程的状态
 * 比如:等待中奖结果中这个状态,棋盘就有多个状态
 */
var SlotGameStageStatus;
(function (SlotGameStageStatus) {
    /**
     * 已准备好
     */
    SlotGameStageStatus[SlotGameStageStatus["Ready"] = 0] = "Ready";
    // /**
    //  * 开始等待服务器结果
    //  */
    // StartWaitingServerResults,
    /**
     * 开始请求服务器
     */
    SlotGameStageStatus[SlotGameStageStatus["RequestingServer"] = 1] = "RequestingServer";
    /**
     * 等待服务器结果中
     */
    SlotGameStageStatus[SlotGameStageStatus["WaitingServerResults"] = 2] = "WaitingServerResults";
    /**
     * 收到服务器结果
     */
    SlotGameStageStatus[SlotGameStageStatus["ServerResultsReceived"] = 3] = "ServerResultsReceived";
    // /**
    //  * 开始等待中奖结果
    //  */
    // StartWaitingWinningResults,
    /**
     * 等待中奖结果中
     */
    SlotGameStageStatus[SlotGameStageStatus["BoardsSpinning"] = 4] = "BoardsSpinning";
    /**
     * 棋盘停止
     */
    //BoardsStopped,
    /**
     * 开始替换假冒棋子
     */
    //StartReplacingMockSymbol,
    /**
     * 替换棋子中
     */
    SlotGameStageStatus[SlotGameStageStatus["BoardsReplacing"] = 5] = "BoardsReplacing";
    // /**
    //  * 替换棋子完成
    //  */
    // BoardsReplaced,
    /**
     * 开始等待中奖结果展示
     */
    //StartPrizeShow,
    /**
     * 中奖结果展示
     */
    SlotGameStageStatus[SlotGameStageStatus["BoardsPrizeShowing"] = 6] = "BoardsPrizeShowing";
    /**
     * 开始金币结算
     */
    //StartCoinSettlement,
    /**
     * 金币结算
     */
    SlotGameStageStatus[SlotGameStageStatus["BoardsSettling"] = 7] = "BoardsSettling";
    /**
     * 中奖展示，bigwin， jp等
     */
    SlotGameStageStatus[SlotGameStageStatus["PrizeShowing"] = 8] = "PrizeShowing";
})(SlotGameStageStatus = exports.SlotGameStageStatus || (exports.SlotGameStageStatus = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxzbG90c1xcbGliXFxHYW1lU3RhZ2VcXFNsb3RHYW1lU3RhZ2VTdGF0dXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0dBS0c7QUFDSCxJQUFZLG1CQWlFWDtBQWpFRCxXQUFZLG1CQUFtQjtJQUMzQjs7T0FFRztJQUNILCtEQUFLLENBQUE7SUFDTCxNQUFNO0lBQ04sZUFBZTtJQUNmLE1BQU07SUFDTiw2QkFBNkI7SUFDN0I7O09BRUc7SUFDSCxxRkFBZ0IsQ0FBQTtJQUNoQjs7T0FFRztJQUNILDZGQUFvQixDQUFBO0lBQ3BCOztPQUVHO0lBQ0gsK0ZBQXFCLENBQUE7SUFDckIsTUFBTTtJQUNOLGNBQWM7SUFDZCxNQUFNO0lBQ04sOEJBQThCO0lBQzlCOztPQUVHO0lBQ0gsaUZBQWMsQ0FBQTtJQUNkOztPQUVHO0lBQ0gsZ0JBQWdCO0lBQ2hCOztPQUVHO0lBQ0gsMkJBQTJCO0lBQzNCOztPQUVHO0lBQ0gsbUZBQWUsQ0FBQTtJQUNmLE1BQU07SUFDTixZQUFZO0lBQ1osTUFBTTtJQUNOLGtCQUFrQjtJQUNsQjs7T0FFRztJQUNILGlCQUFpQjtJQUNqQjs7T0FFRztJQUNILHlGQUFrQixDQUFBO0lBQ2xCOztPQUVHO0lBQ0gsc0JBQXNCO0lBQ3RCOztPQUVHO0lBQ0gsaUZBQWMsQ0FBQTtJQUNkOztPQUVHO0lBQ0gsNkVBQVksQ0FBQTtBQUNoQixDQUFDLEVBakVXLG1CQUFtQixHQUFuQiwyQkFBbUIsS0FBbkIsMkJBQW1CLFFBaUU5QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU2xvdOa4uOaIj+eKtuaAgVxuICogQHJlbWFya1xuICog6L+Z6YeM5piv5ri45oiP55qE54q25oCBLOafkOS4queKtuaAgeWPr+iDveWvueW6lOaji+ebmOeahOafkOS4qui/h+eoi+eahOeKtuaAgVxuICog5q+U5aaCOuetieW+heS4reWllue7k+aenOS4rei/meS4queKtuaAgSzmo4vnm5jlsLHmnInlpJrkuKrnirbmgIFcbiAqL1xuZXhwb3J0IGVudW0gU2xvdEdhbWVTdGFnZVN0YXR1cyB7XG4gICAgLyoqXG4gICAgICog5bey5YeG5aSH5aW9XG4gICAgICovXG4gICAgUmVhZHksXG4gICAgLy8gLyoqXG4gICAgLy8gICog5byA5aeL562J5b6F5pyN5Yqh5Zmo57uT5p6cXG4gICAgLy8gICovXG4gICAgLy8gU3RhcnRXYWl0aW5nU2VydmVyUmVzdWx0cyxcbiAgICAvKipcbiAgICAgKiDlvIDlp4vor7fmsYLmnI3liqHlmahcbiAgICAgKi9cbiAgICBSZXF1ZXN0aW5nU2VydmVyLFxuICAgIC8qKlxuICAgICAqIOetieW+heacjeWKoeWZqOe7k+aenOS4rVxuICAgICAqL1xuICAgIFdhaXRpbmdTZXJ2ZXJSZXN1bHRzLFxuICAgIC8qKlxuICAgICAqIOaUtuWIsOacjeWKoeWZqOe7k+aenFxuICAgICAqL1xuICAgIFNlcnZlclJlc3VsdHNSZWNlaXZlZCxcbiAgICAvLyAvKipcbiAgICAvLyAgKiDlvIDlp4vnrYnlvoXkuK3lpZbnu5PmnpxcbiAgICAvLyAgKi9cbiAgICAvLyBTdGFydFdhaXRpbmdXaW5uaW5nUmVzdWx0cyxcbiAgICAvKipcbiAgICAgKiDnrYnlvoXkuK3lpZbnu5PmnpzkuK1cbiAgICAgKi9cbiAgICBCb2FyZHNTcGlubmluZyxcbiAgICAvKipcbiAgICAgKiDmo4vnm5jlgZzmraJcbiAgICAgKi9cbiAgICAvL0JvYXJkc1N0b3BwZWQsXG4gICAgLyoqXG4gICAgICog5byA5aeL5pu/5o2i5YGH5YaS5qOL5a2QXG4gICAgICovXG4gICAgLy9TdGFydFJlcGxhY2luZ01vY2tTeW1ib2wsXG4gICAgLyoqXG4gICAgICog5pu/5o2i5qOL5a2Q5LitXG4gICAgICovXG4gICAgQm9hcmRzUmVwbGFjaW5nLFxuICAgIC8vIC8qKlxuICAgIC8vICAqIOabv+aNouaji+WtkOWujOaIkFxuICAgIC8vICAqL1xuICAgIC8vIEJvYXJkc1JlcGxhY2VkLFxuICAgIC8qKlxuICAgICAqIOW8gOWni+etieW+heS4reWllue7k+aenOWxleekulxuICAgICAqL1xuICAgIC8vU3RhcnRQcml6ZVNob3csXG4gICAgLyoqXG4gICAgICog5Lit5aWW57uT5p6c5bGV56S6XG4gICAgICovXG4gICAgQm9hcmRzUHJpemVTaG93aW5nLFxuICAgIC8qKlxuICAgICAqIOW8gOWni+mHkeW4gee7k+eul1xuICAgICAqL1xuICAgIC8vU3RhcnRDb2luU2V0dGxlbWVudCxcbiAgICAvKipcbiAgICAgKiDph5HluIHnu5PnrpdcbiAgICAgKi9cbiAgICBCb2FyZHNTZXR0bGluZyxcbiAgICAvKipcbiAgICAgKiDkuK3lpZblsZXnpLrvvIxiaWd3aW7vvIwganDnrYlcbiAgICAgKi9cbiAgICBQcml6ZVNob3dpbmcsXG59XG4iXX0=