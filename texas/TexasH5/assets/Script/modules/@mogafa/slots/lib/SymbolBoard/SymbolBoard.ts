
import { SymbolBoardStatus } from "./SymbolBoardStatus";
import { IResilienceMove } from "../IResilienceMove";
import SpinResultsSlot from "../../../../spin-result/SpinResultsSlot";


export default interface SymbolBoard {
    /**
     * 最大棋子编码
     */
    maxCode: number;
    /**
     * 等待结果状态
     */
    //waitingResultsStatus: WaitingResultsStatus;
    /**
     * 棋盘状态
     */
    status: SymbolBoardStatus;
    /**
     * 最终结果
     *
     */
    slotResults: SpinResultsSlot;
    /**
     * 开始等待结果前
     * 目前不提供单列或单个格子开始转动前的拦截点
     */
    beforeStartWaitingResults(): void;
    /**
     * 停止等待结果前
     */
    beforeStopWaitingResults(): void;
    /**
     * 开始等待结果前
     * @returns 返回true可以开始等待，false则不能开始
     */
    onBeforeStartWaitingResults(): boolean;
    /**
     * 停止等待结果前
     * @returns 返回true可以开始等待，false则不能停止（比如自动停止时间到，但是结果还没有拿到）
     */
    onBeforeStopWaitingResults(): boolean;
    /**
     * 能否开始停止
     */
    canStop(): boolean;
    /**
     * 当格子最终结果设置完毕
     *
     * @param listener 回调函数
     * @param target target
     */
    onCellResultSet(listener: Function, target?: any): void;
    /**
     * 取消当格子最终结果设置完毕的监听
     *
     * @param listener 回调函数
     * @param target target
     */
    offCellResultSet(listener: Function, target?: any): void;
    /**
     * 清除所有格子停止转动监听
     */
    clearCellResultSet(): void;
    /**
     * 当列最终结果设置完毕
     *
     * @param listener 回调函数
     * @param target target
     */
    onColumnResultsSet(listener: Function, target?: any): void;
    /**
     * 清除当列最终结果设置完毕的监听
     *
     * @param listener 回调函数
     * @param target target
     */
    offColumnResultsSet(listener: Function, target?: any): void;
    /**
     * 清除所有当列最终结果设置完毕的监听
     *
     */
    clearColumnResultsSet(): void;
    /**
     * 当整个棋盘最终结果设置完毕
     *
     * @param listener 回调函数
     * @param target target
     */
    onResultsSet(listener: Function, target?: any): void;
    /**
     * 清楚当整个棋盘最终结果设置完毕的监听
     *
     * @param listener 回调函数
     * @param target target
     */
    offResultsSet(listener: Function, target?: any): void;
    /**
     * 清楚当整个棋盘最终结果设置完毕的监听
     */
    clearResultsSet(): void;
    /**
     * 列进入holdWin模式，当列停止，holdWin模式自动结束
     *
     * @param columnIndex 列索引
     */
    columnHoldWin(columnIndex: number): void;
    /**
     * 列移动
     * @param columnIndex 列索引
     * @param step 移动步长
     * @param code 下一个棋子编码，如果移动超界，用这个棋子作为新出现的棋子
     * @returns 如果移动超界，下一个棋子被使用则返回true
     */
    columnMoveY(columnIndex: number, step: number, code?: number): boolean;
    /**
     * 转轴启动回弹配置
     * @param columnIndex
     * @param up
     * @param down
     */
    reelStartResilienceConfig(columnIndex: number, up: IResilienceMove, down: IResilienceMove): void;
    /**
     * 转轴结束回弹配置
     * @param columnIndex
     * @param down
     * @param up
     */
    reelEndResilienceConfig(columnIndex: number, down: IResilienceMove, up: IResilienceMove): void;
    /**
     * 格子holdwin
     *
     * @param reelIndex 列索引
     * @param cellIndex 格子索引
     */
    cellHoldWin(reelIndex: number, cellIndex: number): void;
    /**
     * 格子移动
     * @param columnIndex 列索引
     * @param cellIndex 格子索引
     * @param code 下一个棋子编码，如果移动超界，用这个棋子作为新出现的棋子
     * @returns 如果移动超界，下一个棋子被使用则返回true
     */
    cellMoveY(columnIndex: number, cellIndex: number, step: number, code?: number): boolean;
    /**
     * 获取指定列额外单元格个数
     * @param columnIndex 列索引
     * @returns top顶上额外单元格数量，bottom底部额外单元格数量
     */
    getColumnExtraCellCount(columnIndex: number): { top: number; bottom: number };
    /**
     * 立即设置指定列的最终结果
     * @param columnIndex 列索引
     * @param codes 棋子
     */
    setFinalResultsImmediately(columnIndex: number, codes: number[], assets: number[]): void;
    /**
     * 立即设置指定格子的最终结果
     * @param columnIndex 列索引
     * @param cellIndex 格子索引
     * @param code 最终结果棋子
     */
    setFinalResultImmediately(columnIndex: number, cellIndex: number, code: number): void;
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
     * 当收到请求结果时调用
     *
     * @param listener 监听函数
     * @param target 目标
     */
    onResultsReceived(listener: Function, target?: any): void;
    /**
     * 清楚当收到请求结果时调用的监听
     *
     * @param listener 监听函数
     * @param target 目标
     */
    offResultsReceived(listener: Function, target?: any): void;
    /**
     * 清楚所有当收到请求结果时调用的监听
     */
    clearResultsReceived(): void;
}
