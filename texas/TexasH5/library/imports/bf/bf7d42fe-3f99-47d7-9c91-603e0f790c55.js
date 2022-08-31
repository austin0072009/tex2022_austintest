"use strict";
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