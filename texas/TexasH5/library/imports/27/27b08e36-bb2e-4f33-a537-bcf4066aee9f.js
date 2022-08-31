"use strict";
cc._RF.push(module, '27b0842uy5PM6U3vPQGau6f', 'TurnTable');
// Script/modules/@slotsmaster/ui-common/lib/TurnTable.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FguiComponentBase_1 = require("../../../@mogafa/fairygui-component/lib/FguiComponentBase");
var TurnTable = /** @class */ (function (_super) {
    __extends(TurnTable, _super);
    function TurnTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ifRun = false;
        _this.time = 6;
        _this.circle = 5;
        _this.degree = 0; //结束目标点
        return _this;
    }
    TurnTable.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.addButtonEvent();
        //内部转盘
        this.insideWheel = this.fguiComponent.getChild("internalTurntable").asCom;
    };
    TurnTable.prototype.onShow = function (callBack, wheelData) {
        this.wheelFinishedCallback = callBack;
    };
    TurnTable.prototype.addButtonEvent = function () {
        this.fguiComponent.getChild(this.SpinButtonName).asButton.onClick(this.onClickGetSpin, this);
        this.fguiComponent.getChild(this.CollectButtonName).asButton.onClick(this.onClickCollect, this);
    };
    Object.defineProperty(TurnTable.prototype, "gameWheel", {
        get: function () {
            return this._gameWheel;
        },
        set: function (data) {
            this._gameWheel = data;
        },
        enumerable: false,
        configurable: true
    });
    TurnTable.prototype.onClickGetSpin = function () {
        //this.StartSpin();
    };
    TurnTable.prototype.onClickCollect = function () {
        if (this.wheelFinishedCallback) {
            this.wheelFinishedCallback();
        }
        this.fguiComponent.visible = false;
    };
    TurnTable.prototype.StartSpin = function () {
        if (this.ifRun)
            return;
        this.ifRun = true;
        this.startTurn();
    };
    /**
     * 转盘数据
     * @param finalCodes 目标值
     * @param offset  偏差值
     */
    TurnTable.prototype.initData = function (finalCodes, offset) {
        if (offset === void 0) { offset = 0; }
        var dataArr = this.goldTurnData;
        if (dataArr.length != this.goldTurnLabel.length) {
            cc.error("转盘数据不一致");
        }
        else {
            //取目标值index
            this.insideWheel.node.angle = 0;
            var finalIndex = dataArr.indexOf(finalCodes);
            var angle = 360 / dataArr.length;
            if (finalIndex != -1) {
                this.degree = (dataArr.length - finalIndex) * angle + offset;
                for (var i = 0; i < this.goldTurnLabel.length; i++) {
                    this.insideWheel.getChild(this.goldTurnLabel[i]).asLabel.text = String(dataArr[i]);
                }
            }
            else {
                cc.error("查找结果数据失败");
            }
        }
    };
    TurnTable.prototype.startTurn = function () {
        var finished = cc.callFunc(function () {
            this.finished();
        }, this);
        var roActEas = cc
            .rotateTo(this.time, 360 * this.circle + this.degree + 11.25)
            .easing(cc.easeCubicActionInOut());
        var roActEas_stop = cc.rotateBy(0.5, 11.25).easing(cc.easeCircleActionIn());
        var action = cc.sequence(roActEas, roActEas_stop, finished); //停止状态 慢 - 快 - 慢
        this.insideWheel.node.runAction(action);
    };
    /**
     * 转盘结束回调(可用于显示结果之后后续步骤)
     */
    TurnTable.prototype.finished = function () {
        this.ifRun = false;
    };
    TurnTable.prototype.Show = function () {
        this.active = true;
        if (this._fguiComponent) {
            this._fguiComponent.visible = true;
        }
    };
    TurnTable.prototype.Hide = function () {
        this.active = false;
        this._fguiComponent.visible = false;
    };
    return TurnTable;
}(FguiComponentBase_1.default));
exports.default = TurnTable;

cc._RF.pop();