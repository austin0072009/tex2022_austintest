"use strict";
cc._RF.push(module, '5e702VN8IpNZ7FDuaOLVFeD', 'CardRedbetComp');
// Games/texas/script/View/CardRedbetComp.ts

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
var ViewBase_1 = require("../../../../Script/BaseFrame/ViewBase");
var UIUtil_1 = require("../../../../Script/Common/UIUtil");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
// @ccclass
var CardRedbetComp = /** @class */ (function (_super) {
    __extends(CardRedbetComp, _super);
    function CardRedbetComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_eye = null;
        _this._canClick = false;
        _this.ui_val = null;
        _this.Value = 0;
        _this.ui_MaxImage = null;
        _this.onLoadEnd = false;
        return _this;
    }
    Object.defineProperty(CardRedbetComp.prototype, "visible", {
        set: function (value) {
            this.fguiComponent.visible = true;
            this.node.active = true;
        },
        enumerable: false,
        configurable: true
    });
    /// <summary>
    /// 初始化
    /// </summary>
    CardRedbetComp.prototype.Init = function (_click) {
        this.mystart = true;
        this._canClick = _click;
        if (this.onLoadEnd)
            this.MyStartEx();
    };
    CardRedbetComp.prototype.AutoSetGoProperty = function () { };
    CardRedbetComp.prototype.OnLoadCompleted = function () {
        this.onLoadEnd = true;
        if (this.mystart)
            this.MyStartEx();
    };
    CardRedbetComp.prototype.MyStartEx = function () {
        _super.prototype.AutoSetGoProperty.call(this);
        this._showType = 0;
        this.ShowEye(false);
        this.AddListener();
        this.Reset();
    };
    CardRedbetComp.prototype.Clear = function () {
        CardRedbetComp.UnSelectPostionY = this.node.y;
        this.SelectPostion = CardRedbetComp.UnSelectPostionY - 10;
        this.Select = false;
    };
    CardRedbetComp.prototype.UpdateUI = function (isAutoShow) {
        this.SetCardImage(this.Value, isAutoShow);
    };
    CardRedbetComp.prototype.SetCardImage = function (id, isAutoShow) {
        if (!this.ui_val)
            return;
        if (CardRedbetComp.cardTypeName == null)
            CardRedbetComp.cardTypeName = CardRedbetComp.cardType3;
        var cardType = UIUtil_1.PlayerPrefs.GetInt("key_cards_index", 1);
        UIUtil_1.UIUtil.loadImage(this.ui_val, (id == 0 || id == null ? CardRedbetComp.cardTypeName : id + "_" + cardType), "Texas");
        if (isAutoShow) {
            this.ui_val.visible = true;
        }
    };
    CardRedbetComp.prototype.SetVal = function (value, isAutoShow) {
        if (isAutoShow === void 0) { isAutoShow = true; }
        this.Value = value;
        this.UpdateUI(isAutoShow);
    };
    CardRedbetComp.prototype.UpdateCardImage = function () {
        if (this.Value == 0) {
            //只修改牌背面    
            this.UpdateUI(false);
        }
    };
    CardRedbetComp.prototype.AddListener = function () {
        if (!this._canClick)
            return;
    };
    CardRedbetComp.prototype.SetUnSelected = function () {
        if (this.Select) {
            this.node.position = cc.v3(this.node.position.x, CardRedbetComp.UnSelectPostionY, 0);
            this.Select = false;
        }
    };
    /// <summary>
    /// 仅十三水特有的
    /// </summary>
    /// <param name="go"></param>
    /// <param name="eventData"></param>
    CardRedbetComp.prototype.SelectCard = function (go) {
        if (!this._canClick)
            return;
        if (this.Value == 0) {
            console.log("TW  value is 0");
            return;
        }
        this.Select = !this.Select;
        if (this.Select) {
            go.node.runAction(cc.moveTo(0.2, cc.v2(go.node.x, CardRedbetComp.UnSelectPostionY + 20))); //go.transform.DOLocalMoveY(UnSelectPostionY + 20, 0.2f);
        }
        else {
            go.node.runAction(cc.moveTo(0.2, cc.v2(go.node.x, CardRedbetComp.UnSelectPostionY))); //go.transform.DOLocalMoveY(UnSelectPostionY, 0.2f);
        }
    };
    CardRedbetComp.prototype.onDown = function (go) {
    };
    CardRedbetComp.prototype.onEnter = function (go) {
    };
    /// <summary>
    /// Texas 专用
    /// </summary>
    /// <param name="_cardList"></param>
    CardRedbetComp.prototype.SetShowState = function (_cardList) {
        if (_cardList.indexOf(this.Value) >= 0) {
            this.ResetColor();
        }
        else {
            this.SetColorGary();
        }
    };
    CardRedbetComp.prototype.ResetColor = function () {
        if (!this.ui_val)
            return;
        this.ui_val.color = new cc.Color(255, 255, 255);
    };
    CardRedbetComp.prototype.SetColorGary = function () {
        if (!this.ui_val)
            return;
        this.ui_val.color = new cc.Color(164, 158, 158);
        this.ui_val.color = cc.Color.GRAY;
    };
    CardRedbetComp.prototype.ShowMaxCardBg = function (isShow) {
        if (this.ui_MaxImage != null)
            this.ui_MaxImage.visible = isShow;
    };
    CardRedbetComp.prototype.Reset = function (isResetValue) {
        if (isResetValue === void 0) { isResetValue = true; }
        this.ResetColor();
        this.Clear();
        this.Show();
        this.StopTrunPage();
        this.ShowEye(false);
        if (isResetValue) {
            this.SetVal(0);
        }
        else {
            this.SetCardImage(0, false);
        }
        if (this.ui_val)
            this.ui_val.visible = false;
        this.ShowMaxCardBg(false);
    };
    CardRedbetComp.SetCardImageType = function (type) {
        var cardName = null;
        switch (type) {
            case 1:
                cardName = CardRedbetComp.cardType1;
                break;
            case 2:
                cardName = CardRedbetComp.cardType2;
                break;
            case 3:
                cardName = CardRedbetComp.cardType3;
                break;
            case 4:
                cardName = CardRedbetComp.cardType4;
                break;
            case 5:
                cardName = CardRedbetComp.cardType5;
                break;
            default:
                break;
        }
        if (cardName != this.cardTypeName) {
            this.cardTypeName = cardName;
        }
    };
    CardRedbetComp.prototype.ShowTurnPage = function () {
        var _this = this;
        if (!this.ui_val)
            return;
        UIUtil_1.UIUtil.loadImage(this.ui_val, CardRedbetComp.cardTypeName, "Texas");
        this.node.anchorX = 0.5;
        this.node.anchorY = 0.5;
        var action = cc.sequence(cc.spawn(cc.scaleTo(0.2, 0, 1), cc.skewTo(0.2, 0, 20)), cc.callFunc(function () {
            _this.UpdateUI(false);
            _this.node.skewY = -20;
        }), cc.spawn(cc.scaleTo(0.2, 1, 1), cc.skewTo(0.2, 0, 0)));
        this.ui_val.node.runAction(action);
    };
    CardRedbetComp.prototype.StopTrunPage = function () {
        if (this.ui_val)
            this.ui_val.node.stopAllActions();
        this.UpdateUI(false);
    };
    CardRedbetComp.prototype.ShowEye = function (isShow) {
        this._showType = isShow ? 1 : 0;
        if (this.ui_eye != null)
            this.ui_eye.visible = isShow;
    };
    //翻牌
    CardRedbetComp.prototype.Turnover = function (value) {
        var _this = this;
        this.node.anchorX = 0.5;
        this.node.anchorY = 0.5;
        var action = cc.sequence(cc.spawn(cc.scaleTo(0.2, 0, 1), cc.skewTo(0.2, 0, 20)), cc.callFunc(function () {
            _this.SetVal(value);
            _this.node.skewY = -20;
        }), cc.spawn(cc.scaleTo(0.2, 1, 1), cc.skewTo(0.2, 0, 0)));
        this.node.runAction(action);
    };
    CardRedbetComp.prototype.Show = function () {
        this.node.active = true;
        this.fguiComponent.visible = true;
        if (this.ui_val) {
            this.ui_val.visible = true;
            this.ui_val.node.active = true;
        }
    };
    CardRedbetComp.prototype.Hide = function () {
        this.node.active = false;
        this.fguiComponent.visible = false;
    };
    CardRedbetComp.cardType1 = "001";
    CardRedbetComp.cardType2 = "002";
    CardRedbetComp.cardType3 = "003";
    CardRedbetComp.cardType4 = "004";
    CardRedbetComp.cardType5 = "005";
    CardRedbetComp.cardTypeName = "001";
    return CardRedbetComp;
}(ViewBase_1.default));
exports.default = CardRedbetComp;

cc._RF.pop();