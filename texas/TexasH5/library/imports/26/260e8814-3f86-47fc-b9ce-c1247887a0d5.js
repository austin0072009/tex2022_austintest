"use strict";
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