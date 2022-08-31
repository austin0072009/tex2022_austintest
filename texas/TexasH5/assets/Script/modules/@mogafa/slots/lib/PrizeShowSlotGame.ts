import { SpinResultsWinType } from "../../../spin-result/SpinResultsWinType";



export default interface PrizeShowSlotGame {
    /**
     * bigWin、superWin、megaWin展示
     *
     * @param winType win类型
     * @param coins 金币数
     * @param closeTimeout 自动关闭时间，单位毫秒
     */
    prizeWinShow(winType: SpinResultsWinType, coins: number, closeTimeout: number): void;
    /**
     * jackpot展示
     *
     * @param coins 金币
     * @param closeTimeout 自动关闭时间，单位毫秒
     */
    prizeJackpotShow(coins: number, closeTimeout: number): void;
}
