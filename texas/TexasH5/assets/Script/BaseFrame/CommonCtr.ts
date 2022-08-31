import CommonView from "./CommonView";

export class CommonCtr {
    public view: CommonView
    private static _viewCtr: CommonCtr;
    private _model: CommonModel;
    public static get instance(): CommonCtr {
        if (this._viewCtr == null) {
            this._viewCtr = new CommonCtr();
            //初始注册这个Ctrl里面的服务器推送方法 
            this._viewCtr.RegistNotify();
        }
        return this._viewCtr;
    }


    public get Model(): CommonModel {
        if (this._model == null) {
            this._model = new CommonModel();
            this._model.Init();
        }
        return this._model;
    }

    public RegistNotify() {
    }

    /**判断此View是否已经释放  */
    public get IsDestory(): Boolean {
        if (this.view == null || this.view._isDestory) return true;
        return false;
    }
    public ShowTip(msg: string) {
        console.log("" + msg);
        if (this.view == null || this.view._isDestory) return;
        //UI还同有实例化之前 就调用了
        this.view.ShowTip(msg);
    }

    public ShowTipLabelMove(msg: string, move: boolean) {
        console.log("" + msg);
        if (this.view == null || this.view._isDestory || this.view == null) { //UI还同有实例化之前 就调用了
            console.error("...ui_single_mTipPanelLabel is null ......................ShowSingleLabel");
            return;
        }
        this.view.ShowTipLabel(msg);
    }

    /**文字上飘 */
    public ShowTipLabel(msg: string) {
        console.log("" + msg);
        if (this.view == null || this.view._isDestory || this.view == null) { //UI还同有实例化之前 就调用了
            console.error("...ui_single_mTipPanelLabel is null ......................ShowSingleLabel");
            return;
        }
        this.view.ShowTipLabel(msg);
    }

    public ShowTipCallback(mes: string, funok?: Function, funclose?: Function) {
        if (this.view == null || this.view._isDestory || this.view == null) { //UI还同有实例化之前 就调用了
            console.error("...ui_single_mTipPanelLabel is null ......................ShowSingleLabel");
            return;
        }
        this.view.ShowTip(mes, funok, funclose);
    }

    public ShowLoad_Circle(_show: boolean) {
        console.log(" show circle and no input .");
    }
}

export class CommonModel {
    public text: string;
    public _curIP
    public Init(): void { }
    public setServerList(para1: any, p2: any) {
        console.error("setServerList undeal.");
    }

}