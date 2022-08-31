"use strict";
cc._RF.push(module, 'a29e1ehqlhCq4pPViybk+fG', 'TexasTipView');
// Games/texas/script/View/TexasTipView.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ViewBase_1 = require("../../../../Script/BaseFrame/ViewBase");
var TexasLanguage_1 = require("../Model/TexasLanguage");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TexasTipView = /** @class */ (function (_super) {
    __extends(TexasTipView, _super);
    function TexasTipView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_tipContent = null;
        _this.ui_tipOK = null;
        _this.ui_tipOKClick = null;
        _this.ui_tipClose = null;
        _this.ui_tipOKClickText = null;
        _this.ui_tipOKText = null;
        _this.ui_tipCloseText = null;
        _this.ui_tipLabel = null;
        _this._funOK = null;
        _this._funClose = null;
        _this.okStartX = 0;
        _this.onLoadEnd = false;
        _this.messages = [];
        return _this;
    }
    TexasTipView.prototype.OnLoadCompleted = function () {
        this.onLoadEnd = true;
        if (this.mystart)
            this.MyStartEx();
    };
    TexasTipView.prototype.MyStart = function () {
        this.mystart = true;
        if (this.onLoadEnd)
            this.MyStartEx();
    };
    TexasTipView.prototype.MyStartEx = function () {
        if (this.ui_tipContent == null)
            _super.prototype.AutoSetGoProperty.call(this);
        this.okStartX = this.ui_tipOK.x;
        this.messages = [];
        // this.moveAnimation = this.fguiComponent.getTransition("t0");
        // this.moveAnimation.stop();
        this.Hide();
    };
    TexasTipView.prototype.AutoSetGoProperty = function () { };
    TexasTipView.prototype.ShowTip = function (mes, funok, funclose, okText, closeText) {
        var _this = this;
        if (okText === void 0) { okText = TexasLanguage_1.TexasLanguage.getLanguageById(1432); }
        if (closeText === void 0) { closeText = TexasLanguage_1.TexasLanguage.getLanguageById(1393); }
        this.setControllerProperty("type", 0);
        this.ui_tipContent.text = mes;
        this._funOK = funok;
        this._funClose = funclose;
        this.ui_tipOKClickText.text = okText;
        this.ui_tipOKText.text = okText;
        this.ui_tipCloseText.text = closeText;
        if (this._funOK) {
            this.ui_tipOKClick.onClick(function () {
                _this._funOK();
                _this.Hide();
            });
            this.ui_tipOK.onClick(function () {
                _this._funOK();
                _this.Hide();
            });
        }
        else {
            this.ui_tipOK.onClick(function () {
                _this.Hide();
            });
        }
        if (this._funClose) {
            this.ui_tipClose.onClick(function () {
                _this._funClose();
                _this.Hide();
            });
            this.ui_tipOK.visible = false;
            this.ui_tipOKClick.visible = true;
            this.ui_tipClose.visible = true;
        }
        else {
            this.ui_tipOK.visible = true;
            this.ui_tipOKClick.visible = false;
            this.ui_tipClose.visible = false;
        }
        this.Show();
    };
    TexasTipView.prototype.ShowTipLabel = function (mes) {
        // this.messages.push(mes);
        // if (!this.isOpend) {
        //     this.tipMessage();
        // }
        console.log("---ShowTipLabel---", mes);
        this.setControllerProperty("type", 1);
        this.Show();
        this.ui_tipLabel.visible = false;
        var node = cc.instantiate(this.ui_tipLabel.node);
        node.parent = this.ui_tipLabel.node.parent;
        node.position = this.ui_tipLabel.node.position;
        node.getComponent(cc.Label).string = mes;
        node.active = true;
        node.opacity = 255;
        cc.tween(node)
            .parallel(cc.tween().by(1.5, { position: cc.v3(0, 400, 0) }), cc.tween().to(1.5, { opacity: 128 }))
            .call(function () {
            node.removeFromParent(true);
        })
            .start();
    };
    // private isOpend: boolean = false;
    // private moveAnimation: fgui.Transition;
    // private tipMessage() {
    //     let mess = this.messages.shift();
    //     if (!mess) {
    //         this.isOpend = false;
    //         this.Hide();
    //         return;
    //     }
    //     this.setControllerProperty("type", 1);
    //     this.Show();
    //     this.isOpend = true;
    //     this.ui_tipLabel.text = mess;
    //     this.moveAnimation.play(() => {
    //         this.ui_tipLabel.text = '';
    //         this.tipMessage();
    //     }, 1)
    // }
    TexasTipView.prototype.Hide = function () {
        this.ui_tipOK.clearClick();
        this.ui_tipOKClick.clearClick();
        this.ui_tipClose.clearClick();
        _super.prototype.Hide.call(this);
        this.node.active = false;
    };
    TexasTipView.prototype.Show = function () {
        this.node.active = true;
        _super.prototype.Show.call(this);
    };
    TexasTipView.prototype.onDestroy = function () {
        // this.moveAnimation.stop();
    };
    TexasTipView = __decorate([
        ccclass
    ], TexasTipView);
    return TexasTipView;
}(ViewBase_1.default));
exports.default = TexasTipView;

cc._RF.pop();