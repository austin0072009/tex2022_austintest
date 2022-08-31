import IPrizeShowSymbolBoard from "./IPrizeShowSymbolBoard";

export default interface IPrizeShowStrategy {
    /**
     * 棋盘
     */
    symbolBoard: IPrizeShowSymbolBoard;
    /**
     * 开始展示中奖
     */
    startShow(): void;
    /**
     * 开始结算
     */
    startSettle(): void;

    /**
     * 重置策略
     */
    reset(): void;
}
