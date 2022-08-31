import SpinResultsWheelItem from "./SpinResultsWheeItem";
export default class SpinResultsWheel {
    private _values;
    private _finalValue;
    private _finalPosition;
    /**
     * 构造函数
     * @param values 值
     * @param finalValue 最终值
     */
    constructor(values?: SpinResultsWheelItem[], finalValue?: SpinResultsWheelItem);
    /**
     * 获取转盘值
     */
    get values(): SpinResultsWheelItem[];
    /**
     * 设置转盘值
     */
    set values(value: SpinResultsWheelItem[]);
    /**
     * 获取最终值
     */
    get finalValue(): SpinResultsWheelItem;
    /**
     * 设置最终值
     */
    set finalValue(value: SpinResultsWheelItem);
    /**
     * 获取最终位置
     */
    get finalPosition(): number;
}
