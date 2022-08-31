/**
 * spin动画播放参数
 */
export default class SpineAnimationPlayParameter {
    /**
     * 动画名称
     */
    private _animationName: string;
    /**
     * 是否循环播放
     */
    private _isLoop: boolean;
    /**
     * 构造函数
     * @param name 动画名称
     * @param isLoop 是否循环
     */
    constructor(name: string, isLoop: boolean) {
        this._animationName = name;
        this._isLoop = isLoop;
    }
    /**
     * 获取动画名称
     */
    public get animationName(): string {
        return this._animationName;
    }
    /**
     * 设置动画名称
     */
    public set animationName(value: string) {
        this._animationName = value;
    }
    /**
     * 获取是否循环播放
     */
    public get isLoop(): boolean {
        return this._isLoop;
    }
    /**
     * 设置是否循环播放
     */
    public set isLoop(value: boolean) {
        this._isLoop = value;
    }
}