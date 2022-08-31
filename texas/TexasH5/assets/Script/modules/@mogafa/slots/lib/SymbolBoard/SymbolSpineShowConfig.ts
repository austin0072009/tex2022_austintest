import SpineAnimationPlayParameter from "../../../fairygui-component/lib/SpineAnimationPlayParameter";


/**
 *
 */
export default class SymbolSpineShowConfig {
    private _code: number;
    private _spineName: string;
    private _spineComponentName: string;
    private _skin: string;
    private _playParameters: SpineAnimationPlayParameter[] = [];
    private _completeCount: number = 1;
    private _scale: number = 1;
    private _premultipliedAlpha: boolean = true;
    /**
     * 构造函数
     *
     * @param code 棋子编码
     * @param spineName spine名称
     * @param spineComponentName spine组件名称
     * @param playParameters 动画播放参数
     * @param skin 皮肤，如果没有指定，使用默认皮肤
     * @param completeCount 播放次数，没有指定为1
     * @param scale 缩放，没有指定为1
     * @param premultipliedAlpha 贴图预乘，没有指定为false 默认为true
     */
    constructor(
        code: number,
        spineName: string,
        spineComponentName: string,
        playParameters: SpineAnimationPlayParameter[],
        skin?: string,
        completeCount?: number,
        scale?: number,
        premultipliedAlpha?: boolean,
    ) {
        this._code = code;
        this._spineName = spineName;
        this._spineComponentName = spineComponentName;
        this._playParameters = playParameters;
        this._completeCount = completeCount
        this._scale = scale
        this._premultipliedAlpha = premultipliedAlpha
        if (!this._playParameters) {
            this._playParameters = [];
        }
        this._skin = skin;
        if (completeCount == null) {
            this._completeCount = 1;
        }
        if (scale == null) {
            this._scale = 1;
        }
        if (premultipliedAlpha == null) {
            this._premultipliedAlpha = true;
        }
    }
    /**
     * 获取棋子编码
     */
    public get code(): number {
        return this._code;
    }
    /**
     * 获取spine名称
     */
    public get spineName(): string {
        return this._spineName;
    }
    /**
     * 获取spine组件名称
     */
    public get spineComponentName(): string {
        return this._spineComponentName;
    }
    /**
     * 获取动画播放参数
     */
    public get playParameters(): SpineAnimationPlayParameter[] {
        return this._playParameters;
    }
    /**
     * 获取皮肤
     */
    public get skin(): string {
        return this._skin;
    }
    /**
     * Gets complete count
     * 获取完成计数，当播放次数达到该数值是认为播放结束，
     * 为0表示不计数
     */
    public get completeCount(): number {
        return this._completeCount;
    }
    /**
     * 获取缩放
     */
    public get scale(): number {
        return this._scale;
    }

    /**
     * 获取贴图预乘
     */
    public get premultipliedAlpha(): boolean {
        return this._premultipliedAlpha;
    }
}
