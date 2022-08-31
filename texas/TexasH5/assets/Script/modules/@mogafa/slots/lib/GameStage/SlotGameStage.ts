import { SpinResultsGameMode } from "../../../../spin-result/SpinResultsGameMode";




/**
 * slot游戏接口
 */
export default interface SlotGameStage {
    /**
     * 当前游戏类型
     */
    readonly currentGameMode: SpinResultsGameMode;
    /**
     * 触发免费游戏类型，如果没有触发则为null
     */
    readonly freeModeTrigger: SpinResultsGameMode;

    checkCoinEnough(): boolean;
    /**
     * 点击spin按钮后请求,如果带有次数,则表示点击了自动spin
     * @param times 次数,-1表示不限次数
     */
    spinClick(times?: number): void;
    /**
     * 当收到请求结果时调用
     *
     * @param listener 监听函数
     * @param target 目标
     */
    onSpinResultsReceived(listener: Function, target?: any): void;
    /**
     * 清楚当收到请求结果时调用的监听
     *
     * @param listener 监听函数
     * @param target 目标
     */
    offSpinResultsReceived(listener: Function, target?: any): void;
    /**
     * 清楚所有当收到请求结果时调用的监听
     */
    clearSpinResultsReceived(): void;
    /**
     * 监听游戏状态变化
     * @param listener 回调函数
     * @param target 目标
     */
    onStatusChanged(listener: Function, target?: any): void;
    /**
     * 取消监听游戏状态变化
     * @param listener 回调函数
     * @param target 目标
     */
    offStatusChanged(listener: Function, target?: any): void;
    /**
     * 取消所有监听游戏状态的变化
     */
    clearStatusChanged(): void;
    /**
     * 检查金币是否足够事件
     */
    onSpinCheckCoin(listener: Function, target?: any): void;
    offSpinCheckCoin(listener: Function, target?: any): void;
    clearSpinCheckCoin(): void;
}
