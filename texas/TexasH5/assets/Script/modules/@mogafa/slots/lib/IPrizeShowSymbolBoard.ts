import { PrizeShowStatus } from "./PrizeShowStatus";

export default interface IPrizeShowSymbolBoard {
    /**
     * 中奖展示时是否可发spin请求
     */
    //canBeSpinRequestWhenPrizeShow: boolean;
    /**
     * 中奖效果展示状态
     */
    prizeShowStatus: PrizeShowStatus;
    /**
     * 筹码棋子奖励
     */
    readonly chipCellRewards: { position: number; symbolCode: number; rewards: number }[];
    /**
     * jackpot棋子奖励
     */
    readonly jackpotCellRewards: { position: number; symbolCode: number; rewards: number }[];
    /**
     * 连线
     */
    readonly matchedLines: number[][];
    /**
     * 5、6、7连展示
     *
     * @param number 相同棋子数
     */
    ofAKindShow(number: number): void;
    /**
     * 展示连线
     * @param lines 连线列表
     * @param times 展示次数
     * @param callback 展示完成后的回调
     */
    prizeLineShow(lines: number[][], times: number): void;
    /**
     * 筹码结算
     *
     * @param position 位置
     * @param symbolCode 棋子编号
     * @param assets 资产
     */
    prizeChipCellSettle(position: number, symbolCode: number, assets: number): void;
    /**
     * jackpot计算
     *
     * @param position 位置
     * @param symbolCode 棋子编号
     * @param assets 资产
     */
    prizeJackpotCellSettle(position: number, symbolCode: number, assets: number): void;

    /**
     * 接收所有单元格奖励结算完成
     */
    receiveAllCellRewardsSettled(): void;

    /**
     *
     * @param callback
     * @param interval
     * @param repeat
     * @param delay
     */
    schedule(callback: Function, interval?: number, repeat?: number, delay?: number): void;
    /**
     *
     * @param callback
     */
    unschedule(callback: Function): void;

    /**
     * 监听当完成一次中奖展示
     *
     * @param listener 监听函数
     * @param [target] 绑定目标
     */
    onPrizeLineShowCompletedOnce(listener: Function, target?: any): void;
    /**
     * 取消监听当完成一次中奖展示
     *
     * @param listener 监听函数
     * @param target 绑定目标
     */
    offPrizeLineShowCompletedOnce(listener: Function, target?: any): void;
    /**
     * 清除完成一次中奖展示监听
     */
    clearPrizeLineShowCompletedOnce(): void;
    /**
     * 监听格子奖励结算完成一次
     * 比如respin中筹码棋子结算，格子jp弹窗展示
     *
     * @param listener 监听函数
     * @param target 绑定目标
     */
    onCellRewardSettledOnce(listener: Function, target?: any): void;
    /**
     * 取消监听格子奖励结算
     *
     * @param listener 监听函数
     * @param target 绑定目标
     */
    offCellRewardSettledOnce(listener: Function, target?: any): void;
    /**
     * 清除格子奖励结算的所有监听
     */
    clearCellRewardSettledOnce(): void;

    lineIndex:number
}
