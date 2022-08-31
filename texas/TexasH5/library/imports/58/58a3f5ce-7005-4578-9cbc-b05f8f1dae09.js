"use strict";
cc._RF.push(module, '58a3fXOcAVFeJy8sF+PHa4J', 'CommonCtr');
// Script/BaseFrame/CommonCtr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonModel = exports.CommonCtr = void 0;
var CommonCtr = /** @class */ (function () {
    function CommonCtr() {
    }
    Object.defineProperty(CommonCtr, "instance", {
        get: function () {
            if (this._viewCtr == null) {
                this._viewCtr = new CommonCtr();
                //初始注册这个Ctrl里面的服务器推送方法 
                this._viewCtr.RegistNotify();
            }
            return this._viewCtr;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CommonCtr.prototype, "Model", {
        get: function () {
            if (this._model == null) {
                this._model = new CommonModel();
                this._model.Init();
            }
            return this._model;
        },
        enumerable: false,
        configurable: true
    });
    CommonCtr.prototype.RegistNotify = function () {
    };
    Object.defineProperty(CommonCtr.prototype, "IsDestory", {
        /**判断此View是否已经释放  */
        get: function () {
            if (this.view == null || this.view._isDestory)
                return true;
            return false;
        },
        enumerable: false,
        configurable: true
    });
    CommonCtr.prototype.ShowTip = function (msg) {
        console.log("" + msg);
        if (this.view == null || this.view._isDestory)
            return;
        //UI还同有实例化之前 就调用了
        this.view.ShowTip(msg);
    };
    CommonCtr.prototype.ShowTipLabelMove = function (msg, move) {
        console.log("" + msg);
        if (this.view == null || this.view._isDestory || this.view == null) { //UI还同有实例化之前 就调用了
            console.error("...ui_single_mTipPanelLabel is null ......................ShowSingleLabel");
            return;
        }
        this.view.ShowTipLabel(msg);
    };
    /**文字上飘 */
    CommonCtr.prototype.ShowTipLabel = function (msg) {
        console.log("" + msg);
        if (this.view == null || this.view._isDestory || this.view == null) { //UI还同有实例化之前 就调用了
            console.error("...ui_single_mTipPanelLabel is null ......................ShowSingleLabel");
            return;
        }
        this.view.ShowTipLabel(msg);
    };
    CommonCtr.prototype.ShowTipCallback = function (mes, funok, funclose) {
        if (this.view == null || this.view._isDestory || this.view == null) { //UI还同有实例化之前 就调用了
            console.error("...ui_single_mTipPanelLabel is null ......................ShowSingleLabel");
            return;
        }
        this.view.ShowTip(mes, funok, funclose);
    };
    CommonCtr.prototype.ShowLoad_Circle = function (_show) {
        console.log(" show circle and no input .");
    };
    return CommonCtr;
}());
exports.CommonCtr = CommonCtr;
var CommonModel = /** @class */ (function () {
    function CommonModel() {
    }
    CommonModel.prototype.Init = function () { };
    CommonModel.prototype.setServerList = function (para1, p2) {
        console.error("setServerList undeal.");
    };
    return CommonModel;
}());
exports.CommonModel = CommonModel;

cc._RF.pop();