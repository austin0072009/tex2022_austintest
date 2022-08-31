
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/slots/lib/WaitingResultsStatus.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '31be46yBIVG/JMl7ufKmGV0', 'WaitingResultsStatus');
// Script/modules/@mogafa/slots/lib/WaitingResultsStatus.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaitingResultsStatus1 = void 0;
// todo: 改名为WaitingWinningResultsStatus 这是用户等待中奖结果的状态
// 这是棋盘的状态
/**
 * Waiting results status
 */
var WaitingResultsStatus1;
(function (WaitingResultsStatus1) {
    /**
     * ready
     */
    WaitingResultsStatus1[WaitingResultsStatus1["Ready"] = 0] = "Ready";
    /**
     * 开始等待前
     */
    WaitingResultsStatus1[WaitingResultsStatus1["BeforeStartWaiting"] = 1] = "BeforeStartWaiting";
    /**
     * 等待中
     */
    WaitingResultsStatus1[WaitingResultsStatus1["Waiting"] = 2] = "Waiting";
    /**
     * 停止等待前
     */
    WaitingResultsStatus1[WaitingResultsStatus1["BeforeStopWaiting"] = 3] = "BeforeStopWaiting";
    /**
     * 停止中
     */
    WaitingResultsStatus1[WaitingResultsStatus1["Stopping"] = 4] = "Stopping";
    /**
     * 停止状态
     */
    WaitingResultsStatus1[WaitingResultsStatus1["Stopped"] = 5] = "Stopped";
    /**
     * 假冒棋子替换前
     */
    WaitingResultsStatus1[WaitingResultsStatus1["BeforeMockSymbolsReplacing"] = 6] = "BeforeMockSymbolsReplacing";
    /**
     * 假冒棋子替换中
     */
    WaitingResultsStatus1[WaitingResultsStatus1["MockSymbolsReplacing"] = 7] = "MockSymbolsReplacing";
    /**
     * 假冒棋子替换结束
     */
    WaitingResultsStatus1[WaitingResultsStatus1["MockSymbolsReplaced"] = 8] = "MockSymbolsReplaced";
})(WaitingResultsStatus1 = exports.WaitingResultsStatus1 || (exports.WaitingResultsStatus1 = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxzbG90c1xcbGliXFxXYWl0aW5nUmVzdWx0c1N0YXR1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBcUQ7QUFDckQsVUFBVTtBQUNWOztHQUVHO0FBQ0gsSUFBWSxxQkFxQ1g7QUFyQ0QsV0FBWSxxQkFBcUI7SUFDN0I7O09BRUc7SUFDSCxtRUFBSyxDQUFBO0lBQ0w7O09BRUc7SUFDSCw2RkFBa0IsQ0FBQTtJQUNsQjs7T0FFRztJQUNILHVFQUFPLENBQUE7SUFDUDs7T0FFRztJQUNILDJGQUFpQixDQUFBO0lBQ2pCOztPQUVHO0lBQ0gseUVBQVEsQ0FBQTtJQUNSOztPQUVHO0lBQ0gsdUVBQU8sQ0FBQTtJQUNQOztPQUVHO0lBQ0gsNkdBQTBCLENBQUE7SUFDMUI7O09BRUc7SUFDSCxpR0FBb0IsQ0FBQTtJQUNwQjs7T0FFRztJQUNILCtGQUFtQixDQUFBO0FBQ3ZCLENBQUMsRUFyQ1cscUJBQXFCLEdBQXJCLDZCQUFxQixLQUFyQiw2QkFBcUIsUUFxQ2hDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdG9kbzog5pS55ZCN5Li6V2FpdGluZ1dpbm5pbmdSZXN1bHRzU3RhdHVzIOi/meaYr+eUqOaIt+etieW+heS4reWllue7k+aenOeahOeKtuaAgVxuLy8g6L+Z5piv5qOL55uY55qE54q25oCBXG4vKipcbiAqIFdhaXRpbmcgcmVzdWx0cyBzdGF0dXNcbiAqL1xuZXhwb3J0IGVudW0gV2FpdGluZ1Jlc3VsdHNTdGF0dXMxIHtcbiAgICAvKipcbiAgICAgKiByZWFkeVxuICAgICAqL1xuICAgIFJlYWR5LFxuICAgIC8qKlxuICAgICAqIOW8gOWni+etieW+heWJjVxuICAgICAqL1xuICAgIEJlZm9yZVN0YXJ0V2FpdGluZyxcbiAgICAvKipcbiAgICAgKiDnrYnlvoXkuK1cbiAgICAgKi9cbiAgICBXYWl0aW5nLFxuICAgIC8qKlxuICAgICAqIOWBnOatouetieW+heWJjVxuICAgICAqL1xuICAgIEJlZm9yZVN0b3BXYWl0aW5nLFxuICAgIC8qKlxuICAgICAqIOWBnOatouS4rVxuICAgICAqL1xuICAgIFN0b3BwaW5nLFxuICAgIC8qKlxuICAgICAqIOWBnOatoueKtuaAgVxuICAgICAqL1xuICAgIFN0b3BwZWQsXG4gICAgLyoqXG4gICAgICog5YGH5YaS5qOL5a2Q5pu/5o2i5YmNXG4gICAgICovXG4gICAgQmVmb3JlTW9ja1N5bWJvbHNSZXBsYWNpbmcsXG4gICAgLyoqXG4gICAgICog5YGH5YaS5qOL5a2Q5pu/5o2i5LitXG4gICAgICovXG4gICAgTW9ja1N5bWJvbHNSZXBsYWNpbmcsXG4gICAgLyoqXG4gICAgICog5YGH5YaS5qOL5a2Q5pu/5o2i57uT5p2fXG4gICAgICovXG4gICAgTW9ja1N5bWJvbHNSZXBsYWNlZCxcbn1cbiJdfQ==