// todo: 改名为WaitingWinningResultsStatus 这是用户等待中奖结果的状态
// 这是棋盘的状态
/**
 * Waiting results status
 */
export enum WaitingResultsStatus1 {
    /**
     * ready
     */
    Ready,
    /**
     * 开始等待前
     */
    BeforeStartWaiting,
    /**
     * 等待中
     */
    Waiting,
    /**
     * 停止等待前
     */
    BeforeStopWaiting,
    /**
     * 停止中
     */
    Stopping,
    /**
     * 停止状态
     */
    Stopped,
    /**
     * 假冒棋子替换前
     */
    BeforeMockSymbolsReplacing,
    /**
     * 假冒棋子替换中
     */
    MockSymbolsReplacing,
    /**
     * 假冒棋子替换结束
     */
    MockSymbolsReplaced,
}
