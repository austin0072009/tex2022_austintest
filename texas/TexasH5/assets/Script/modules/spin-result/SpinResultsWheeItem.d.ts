/**
 * 转盘选项
 *
 * @class SpinResultsWheelItem
 */
export default class SpinResultsWheelItem {
    _value: number;
    _assets: number;
    /**
     * Creates an instance of SpinResultsWheelItem.
     * @param {number} value 值
     * @param {number} assets 资产
     * @memberof SpinResultsWheelItem
     */
    constructor(value: number, assets: number);
    /**
     * 获取值
     *
     * @type {number}
     * @memberof SpinResultsWheelItem
     */
    get value(): number;
    /**
     * 设置值
     *
     * @memberof SpinResultsWheelItem
     */
    set value(value: number);
    /**
     * 获取资产
     *
     * @type {number}
     * @memberof SpinResultsWheelItem
     */
    get assets(): number;
    /**
     * 设置资产
     *
     * @memberof SpinResultsWheelItem
     */
    set assets(value: number);
}
