"use strict";
cc._RF.push(module, '2697euZSUBEBb9sfdhUo3x0', 'RollNotifierComp');
// Games/texas/script/View/RollNotifierComp.ts

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
exports.RollNotifierComp = void 0;
var ViewBase_1 = require("../../../../Script/BaseFrame/ViewBase");
var F_TexasViewCtr_1 = require("../Contrl/F_TexasViewCtr");
var RollNotifierComp = /** @class */ (function (_super) {
    __extends(RollNotifierComp, _super);
    function RollNotifierComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_danMuBg = null;
        _this.ui_danMuTxt = null;
        _this.ui_danButton = null;
        _this.mSpeed = 350.0;
        _this.mNormalQueue = [];
        _this.onLoadEnd = false;
        _this.mImgScaleSpeed = 0.05;
        return _this;
    }
    RollNotifierComp.prototype.OnLoadCompleted = function () {
        this.onLoadEnd = true;
        if (this.mystart)
            this.MyStartEx();
    };
    RollNotifierComp.prototype.AutoSetGoProperty = function () { };
    RollNotifierComp.prototype.MyStart = function () {
        this.mystart = true;
        if (this.onLoadEnd)
            this.MyStartEx();
    };
    RollNotifierComp.prototype.MyStartEx = function () {
        if (this.ui_danMuBg == null)
            _super.prototype.AutoSetGoProperty.call(this);
        this.mNormalQueue = [];
        this.mIsPlaying = false;
        this.bgScreenHalfWidth = cc.winSize.width;
        // this.ui_danMuTxt.isCSF = true;
        // gameObject.getOrAddComponent<CanvasGroup>().alpha = 1f;
    };
    RollNotifierComp.prototype.addNotify = function (content) {
        if (this.ui_danButton.visible)
            this.ui_danButton.visible = false;
        this.fguiComponent.visible = true;
        this.mNormalQueue.push(content);
        if (!this.mIsPlaying) {
            this.MoveEndCall();
        }
    };
    RollNotifierComp.prototype.addVoicsNotify = function (title, content, pos) {
        this.ui_danButton.clearClick();
        this.ui_danButton.onClick(function () {
            F_TexasViewCtr_1.default.instance.notifyPlayVoice(pos, content);
        });
        this.fguiComponent.visible = true;
        this.mNormalQueue.push(title);
        if (!this.mIsPlaying) {
            this.MoveEndCall();
        }
    };
    RollNotifierComp.prototype.DoMove = function () {
        var _this = this;
        this.ui_danMuBg.node.stopAllActions();
        this.mIsPlaying = true;
        var time = ((this.bgScreenHalfWidth + this.danmuBgHalfLength) * 2) / this.mSpeed;
        this.ui_danMuBg.node.runAction(cc.sequence(cc.moveTo(time, cc.v2(-(this.bgScreenHalfWidth + this.danmuBgHalfLength), this.ui_danMuBg.node.y)), cc.callFunc(function () {
            _this.MoveEndCall();
        })));
    };
    RollNotifierComp.prototype.MoveEndCall = function () {
        if (this.fguiComponent == null) {
            return;
        }
        this.ui_danMuBg.node.stopAllActions();
        this.ResetOneText();
        var isHaveNext = this.CheckAndSetCurShowText();
        if (isHaveNext) {
            this.DoMove();
        }
    };
    RollNotifierComp.prototype.CheckAndSetCurShowText = function () {
        if (this.curShowStr != null) {
            return true;
        }
        var str = this.mNormalQueue.length > 0 ? this.mNormalQueue.splice(this.mNormalQueue.length - 1, 1)[0] : null;
        this.curShowStr = str;
        if (this.curShowStr != null) {
            this.fguiComponent.visible = true;
            this.ui_danMuTxt.text = this.curShowStr;
            this.danmuBgHalfLength = this.ui_danMuBg.getChild("bg").width * 0.5;
            this.ui_danMuBg.x = (this.bgScreenHalfWidth + this.danmuBgHalfLength);
        }
        else {
            //没有新的用于显示的文本 则重置状态     
            this.ResetPlayRoll();
        }
        return this.curShowStr != null;
    };
    RollNotifierComp.prototype.ResetPlayRoll = function () {
        this.mIsPlaying = false;
        this.fguiComponent.visible = false;
    };
    RollNotifierComp.prototype.ResetOneText = function () {
        this.curShowStr = null;
    };
    RollNotifierComp.prototype.Hide = function () {
        this.ResetPlayRoll();
        _super.prototype.Hide.call(this);
    };
    return RollNotifierComp;
}(ViewBase_1.default));
exports.RollNotifierComp = RollNotifierComp;

cc._RF.pop();