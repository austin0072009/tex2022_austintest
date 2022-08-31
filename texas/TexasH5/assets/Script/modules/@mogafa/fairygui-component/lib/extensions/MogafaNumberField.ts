import { Utils } from "../../../utils/lib/Utils";


export class MogafaNumberField extends cc.Component {
    private runTime: number = 0;
    private maxTime: number = 0;
    private running: boolean = false;

    private _min?: number = null;
    private _max?: number = null;
    private _gtextField?: fgui.GTextField = null;
    public static instanceArr: MogafaNumberField[] = [];
    private _callback: Function;
    constructor(textField: fgui.GTextField) {
        super();
        this.unschedule(this.scheduleNumber);
        this._gtextField = textField;
        this.schedule(this.scheduleNumber, 0);
        MogafaNumberField.instanceArr.push(this);
    }

    public static clearInstanceArr(): void {
        MogafaNumberField.instanceArr = [];
    }

    public static destroyInstanceArr(callback?: Function): void {
        MogafaNumberField.instanceArr.map((item, index) => {
            item.clear();
        });
        if (callback) {
            callback();
        }
    }
    public clear() {
        this._min = null;
        this._max = null;
        this.unschedule(this.scheduleNumber);
    }
    public get gtextField(): fgui.GTextField {
        return this._gtextField;
    }
    /**
     *
     * @param min 设置开始值
     * @param max 设置终点值
     * @param step 时间
     */
    public play(min: number, max: number, step: number, callback?: Function) {
        this.schedule(this.scheduleNumber, 0);
        this._min = min;
        this._max = max;
        this.maxTime = step;
        this.runTime = 0;
        this.running = true;
        this._callback = callback;
    }

    private scheduleNumber() {
        if (!this.running) return;
        this.runTime += 0.015;
        if (!this.maxTime) {
            this.setValue(this._max);
        }
        if (this.maxTime == -1) {
            this._min += 100;

            if (this._min >= this._max) {
                this._min = this._max;
            }
            this.setValue(this._min);
        } else {
            let radio = this.runTime / this.maxTime;

            radio = Math.max(0, Math.min(1, radio));

            let value = cc.misc.lerp(this._min, this._max, radio);
            if (value) {
                this.setValue(value);
            }

            if (this.maxTime != -1 && this.runTime >= this.maxTime) {
                this.running = false;
                this.finish();
            }
        }
    }

    public cancelPlay(): void {
        this.unschedule(this.scheduleNumber);
    }

    private finish() {
        if (this._callback) {
            this._callback();
        }
    }

    public setValue(value: number) {
        this._gtextField.text = Utils.formatNumberToInt(value, 0);
    }

    /**
     * 设置
     * @param min 最小值
     */
    public set min(min: number) {
        this._min = min;
        if (this._max != null) {
            this._gtextField.text = `${this._max}-${this._min}`;
        }
    }
    public set max(max: number) {
        this._max = max;
        if (this._min != null) {
            this._gtextField.text = `${this._min}-${this._max}`;
        }
    }
}

(fgui.GObject.prototype as any).asMogafaNumberField = function (): MogafaNumberField {
    return new MogafaNumberField(this.asTextField);
};
