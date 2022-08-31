/**
 * 棋盘状态
 * 状态是自上而下的，比如棋盘设置状态为转动，那么棋盘包含的轴、格子、棋子的状态全部都是转动状态
 * 但是下一级状态的变化不影响上一级状态，比如某列停止转动，它的状态变化并不会影响棋盘的状态
 */
export enum SymbolBoardStatus {
    /**
     * 静止
     */
    Ready,
    /**
     * 转动中
     */
    Spinning,
    /**
     * 停止
     */
    Stopped,
    /**
     * 棋子替换中
     */
    Replacing,
    /**
     * 中奖展示中
     */
    PrizeShowing,
    /**
     * 结算中
     */
    Settling,
}
