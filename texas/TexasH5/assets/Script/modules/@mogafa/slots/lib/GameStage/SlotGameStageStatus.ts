/**
 * Slot游戏状态
 * @remark
 * 这里是游戏的状态,某个状态可能对应棋盘的某个过程的状态
 * 比如:等待中奖结果中这个状态,棋盘就有多个状态
 */
export enum SlotGameStageStatus {
    /**
     * 已准备好
     */
    Ready,
    // /**
    //  * 开始等待服务器结果
    //  */
    // StartWaitingServerResults,
    /**
     * 开始请求服务器
     */
    RequestingServer,
    /**
     * 等待服务器结果中
     */
    WaitingServerResults,
    /**
     * 收到服务器结果
     */
    ServerResultsReceived,
    // /**
    //  * 开始等待中奖结果
    //  */
    // StartWaitingWinningResults,
    /**
     * 等待中奖结果中
     */
    BoardsSpinning,
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
    BoardsReplacing,
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
    BoardsPrizeShowing,
    /**
     * 开始金币结算
     */
    //StartCoinSettlement,
    /**
     * 金币结算
     */
    BoardsSettling,
    /**
     * 中奖展示，bigwin， jp等
     */
    PrizeShowing,
}
