export default class SpinResultsChess {
    private _code;
    private _assets;
    private _position;
    constructor(code?: number, assets?: number, position?: number);
    /**
     * 获取结果棋子编码
     */
    get code(): number;
    /**
     * 设置结果棋子编码
     *
     */
    set code(value: number);
    /**
     * 获取棋子上的资产（比如金币数、freespin次数）
     */
    get assets(): number;
    /**
     * 设置棋子上的资产（比如金币数、freespin次数）
     */
    set assets(value: number);
    /**
     * 获取棋子位置
     */
    get position(): number;
    /**
     * 设置棋子位置
     */
    set position(value: number);
}
