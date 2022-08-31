/**
 * 中奖结果展示状态
 * 这也是棋盘状态,是否和WaitingResultsStatus合并? 然后改名为SymbolBoardStatus?
 * 还有就是bigwin
 */
export enum PrizeShowStatus {
    /**
     * 已准备好
     */
    Ready,
    /**
     * 开始展示结果前
     */
    BeforeShowing,
    /**
     * 展示中
     */
    Showing,
    /**
     * 开始结算前
     */
    BeforeSettling,
    /**
     * 结算中
     */
    Settling,
    /**
     * 结算完成
     */
    Settled,
}
