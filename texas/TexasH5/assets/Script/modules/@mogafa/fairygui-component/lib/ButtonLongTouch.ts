

import FguiComponentBase from "./FguiComponentBase";
enum doubleState {
    init = 1,
    awake = 2,
    end = 3,
};
export class ButtonLongTouch extends FguiComponentBase {
    protected get packageResourceName(): string {
        return null;
    }
    protected get packageName(): string {
        return null;
    }
    protected get componentName(): string {
        return null;
    }
    //* 是否点击
    private _isTouch: boolean = false;
    //* 点击时间
    private _touchTime: number = 0;
    //* 双击间隔
    private _doubleTime: number = 0;
    private _doubleState: doubleState = doubleState.init;

    registerTouchLong(node: cc.Node) {
        this.node = node;
        node.on(cc.Node.EventType.TOUCH_START, this.startTouch.bind(this));
        node.on(cc.Node.EventType.TOUCH_END, this.endTouch.bind(this));
    }

    startTouch() {
        this._isTouch = true;
        this._touchTime = 0;
    }

    endTouch() {
        this._isTouch = false;
    }

    update(dt: number) {
        if (this._isTouch) {
            this._touchTime++;
            if (this._touchTime > 30) {
                this._isTouch = false;
                this.node.emit("touch-long");
                this._doubleTime = 0;
                this._touchTime = 0;
                return;
            }

            // if(this._doubleTime > 0 && this._doubleTime < 10)
            // {
            //     this._isTouch = false;
            //     this.node.emit("touch-double");
            //     this._doubleTime = 0;
            //     this._touchTime = 0;
            // }
        }
        else {
            if (this._touchTime > 0 && this._touchTime < 30) {
                // if (this._doubleTime < 10 )
                // {
                //    this._doubleTime++;
                // }
                // if( this._doubleTime >= 10)
                // {
                this.node.emit("touch-short");
                this._touchTime = 0;
                this._doubleTime = 0;
                //}

            }
        }
    }
}
