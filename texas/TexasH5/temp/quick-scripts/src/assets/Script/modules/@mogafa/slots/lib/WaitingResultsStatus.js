"use strict";
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