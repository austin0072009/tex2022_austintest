export default class SpinResultsCollectible {
    private _code;
    private _value;
    private _maxValue;
    constructor(code?: number, value?: number, maxValue?: number);
    /**
     * 获取编码
     */
    get code(): number;
    /**
     * 设置编码
     */
    set code(value: number);
    /**
     * 获取当前值
     */
    get value(): number;
    /**
     * 设置当前值
     */
    set value(value: number);
    /**
     * 获取最大值
     */
    get maxValue(): number;
    /**
     * 设置最大值
     */
    set maxValue(value: number);
}
