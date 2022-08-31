"use strict";
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