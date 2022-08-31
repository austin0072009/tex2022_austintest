
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/texas/script/View/CardRedbetComp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXHRleGFzXFxzY3JpcHRcXFZpZXdcXENhcmRSZWRiZXRDb21wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtFQUE2RDtBQUM3RCwyREFBdUU7QUFFakUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsV0FBVztBQUNYO0lBQTRDLGtDQUFRO0lBQXBEO1FBQUEscUVBOFBDO1FBNVBVLFlBQU0sR0FBaUIsSUFBSSxDQUFDO1FBRTVCLGVBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsWUFBTSxHQUFpQixJQUFJLENBQUM7UUFDNUIsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUlWLGlCQUFXLEdBQWdCLElBQUksQ0FBQztRQUUvQixlQUFTLEdBQVksS0FBSyxDQUFDOztJQWlQdkMsQ0FBQztJQWhQRyxzQkFBVyxtQ0FBTzthQUFsQixVQUFtQixLQUFjO1lBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFDRCxhQUFhO0lBQ2IsT0FBTztJQUNQLGNBQWM7SUFDUCw2QkFBSSxHQUFYLFVBQVksTUFBZTtRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUN4QixJQUFJLElBQUksQ0FBQyxTQUFTO1lBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFDRCwwQ0FBaUIsR0FBakIsY0FBc0IsQ0FBQztJQUV2Qix3Q0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLElB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Q0FBQztJQUMvQiwyQkFBWSxHQUFlLEtBQUssQ0FBQztJQXFGbkQscUJBQUM7Q0E5UEQsQUE4UEMsQ0E5UDJDLGtCQUFRLEdBOFBuRDtrQkE5UG9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlld0Jhc2UgZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvVmlld0Jhc2VcIjtcbmltcG9ydCB7IFBsYXllclByZWZzLCBVSVV0aWwgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0NvbW1vbi9VSVV0aWxcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuLy8gQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmRSZWRiZXRDb21wIGV4dGVuZHMgVmlld0Jhc2Uge1xuXG4gICAgcHVibGljIHVpX2V5ZTogZmd1aS5HTG9hZGVyID0gbnVsbDtcbiAgICBwdWJsaWMgb3JpZ2luUm90YXRlOiBjYy5WZWMzO1xuICAgIHB1YmxpYyBfY2FuQ2xpY2sgPSBmYWxzZTtcbiAgICBwdWJsaWMgX3Nob3dUeXBlOiBudW1iZXI7Ly8gMOWPlua2iCAgICAx5bGV56S6XG4gICAgcHVibGljIHVpX3ZhbDogZmd1aS5HTG9hZGVyID0gbnVsbDtcbiAgICBwdWJsaWMgVmFsdWUgPSAwO1xuICAgIHByaXZhdGUgc3RhdGljIFVuU2VsZWN0UG9zdGlvblk6IG51bWJlcjtcbiAgICBwcml2YXRlIFNlbGVjdFBvc3Rpb246IG51bWJlcjtcbiAgICBwdWJsaWMgU2VsZWN0OiBib29sZWFuO1xuICAgIHB1YmxpYyB1aV9NYXhJbWFnZTogZmd1aS5HSW1hZ2UgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBvbkxvYWRFbmQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgc2V0IHZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5mZ3VpQ29tcG9uZW50LnZpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDliJ3lp4vljJZcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBJbml0KF9jbGljazogYm9vbGVhbikge1xuICAgICAgICB0aGlzLm15c3RhcnQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9jYW5DbGljayA9IF9jbGljaztcbiAgICAgICAgaWYgKHRoaXMub25Mb2FkRW5kKSB0aGlzLk15U3RhcnRFeCgpO1xuICAgIH1cbiAgICBBdXRvU2V0R29Qcm9wZXJ0eSgpIHsgfVxuXG4gICAgT25Mb2FkQ29tcGxldGVkKCkge1xuICAgICAgICB0aGlzLm9uTG9hZEVuZCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLm15c3RhcnQpIHRoaXMuTXlTdGFydEV4KCk7XG4gICAgfVxuXG4gICAgTXlTdGFydEV4KCkge1xuICAgICAgICBzdXBlci5BdXRvU2V0R29Qcm9wZXJ0eSgpO1xuICAgICAgICB0aGlzLl9zaG93VHlwZSA9IDA7XG4gICAgICAgIHRoaXMuU2hvd0V5ZShmYWxzZSk7XG4gICAgICAgIHRoaXMuQWRkTGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy5SZXNldCgpO1xuICAgIH1cblxuXG5cblxuICAgIHB1YmxpYyBDbGVhcigpIHtcbiAgICAgICAgQ2FyZFJlZGJldENvbXAuVW5TZWxlY3RQb3N0aW9uWSA9IHRoaXMubm9kZS55O1xuICAgICAgICB0aGlzLlNlbGVjdFBvc3Rpb24gPSBDYXJkUmVkYmV0Q29tcC5VblNlbGVjdFBvc3Rpb25ZIC0gMTA7XG4gICAgICAgIHRoaXMuU2VsZWN0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBVcGRhdGVVSShpc0F1dG9TaG93OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuU2V0Q2FyZEltYWdlKHRoaXMuVmFsdWUsIGlzQXV0b1Nob3cpO1xuICAgIH1cblxuICAgIHByaXZhdGUgU2V0Q2FyZEltYWdlKGlkOiBudW1iZXIsIGlzQXV0b1Nob3c6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKCF0aGlzLnVpX3ZhbCkgcmV0dXJuO1xuICAgICAgICBpZiAoQ2FyZFJlZGJldENvbXAuY2FyZFR5cGVOYW1lID09IG51bGwpIENhcmRSZWRiZXRDb21wLmNhcmRUeXBlTmFtZSA9IENhcmRSZWRiZXRDb21wLmNhcmRUeXBlMztcbiAgICAgICAgbGV0IGNhcmRUeXBlID0gUGxheWVyUHJlZnMuR2V0SW50KFwia2V5X2NhcmRzX2luZGV4XCIsIDEpO1xuICAgICAgICBVSVV0aWwubG9hZEltYWdlKHRoaXMudWlfdmFsLCAoaWQgPT0gMCB8fCBpZCA9PSBudWxsID8gQ2FyZFJlZGJldENvbXAuY2FyZFR5cGVOYW1lIDogaWQgKyBcIl9cIiArIGNhcmRUeXBlKSwgXCJUZXhhc1wiKTtcblxuICAgICAgICBpZiAoaXNBdXRvU2hvdykge1xuICAgICAgICAgICAgdGhpcy51aV92YWwudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBwdWJsaWMgU2V0VmFsKHZhbHVlOiBudW1iZXIsIGlzQXV0b1Nob3cgPSB0cnVlKSB7XG4gICAgICAgIHRoaXMuVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5VcGRhdGVVSShpc0F1dG9TaG93KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgVXBkYXRlQ2FyZEltYWdlKCkge1xuICAgICAgICBpZiAodGhpcy5WYWx1ZSA9PSAwKSB7XG4gICAgICAgICAgICAvL+WPquS/ruaUueeJjOiDjOmdoiAgICBcbiAgICAgICAgICAgIHRoaXMuVXBkYXRlVUkoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBBZGRMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jYW5DbGljaykgcmV0dXJuO1xuXG4gICAgfVxuICAgIHB1YmxpYyBTZXRVblNlbGVjdGVkKCkge1xuICAgICAgICBpZiAodGhpcy5TZWxlY3QpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IGNjLnYzKHRoaXMubm9kZS5wb3NpdGlvbi54LCBDYXJkUmVkYmV0Q29tcC5VblNlbGVjdFBvc3Rpb25ZLCAwKTtcbiAgICAgICAgICAgIHRoaXMuU2VsZWN0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDku4XljYHkuInmsLTnibnmnInnmoRcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cImdvXCI+PC9wYXJhbT5cbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJldmVudERhdGFcIj48L3BhcmFtPlxuICAgIHB1YmxpYyBTZWxlY3RDYXJkKGdvOiBmZ3VpLkdDb21wb25lbnQpLy8sIGV2ZW50RGF0YTpCYXNlRXZlbnREYXRhKVxuICAgIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jYW5DbGljaykgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5WYWx1ZSA9PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRXICB2YWx1ZSBpcyAwXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuU2VsZWN0ID0gIXRoaXMuU2VsZWN0O1xuICAgICAgICBpZiAodGhpcy5TZWxlY3QpIHtcbiAgICAgICAgICAgIGdvLm5vZGUucnVuQWN0aW9uKGNjLm1vdmVUbygwLjIsIGNjLnYyKGdvLm5vZGUueCwgQ2FyZFJlZGJldENvbXAuVW5TZWxlY3RQb3N0aW9uWSArIDIwKSkpOy8vZ28udHJhbnNmb3JtLkRPTG9jYWxNb3ZlWShVblNlbGVjdFBvc3Rpb25ZICsgMjAsIDAuMmYpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZ28ubm9kZS5ydW5BY3Rpb24oY2MubW92ZVRvKDAuMiwgY2MudjIoZ28ubm9kZS54LCBDYXJkUmVkYmV0Q29tcC5VblNlbGVjdFBvc3Rpb25ZKSkpOy8vZ28udHJhbnNmb3JtLkRPTG9jYWxNb3ZlWShVblNlbGVjdFBvc3Rpb25ZLCAwLjJmKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcHVibGljIG9uRG93bihnbzogZmd1aS5HQ29tcG9uZW50KS8vLCBCYXNlRXZlbnREYXRhIGV2ZW50RGF0YSlcbiAgICB7XG5cbiAgICB9XG4gICAgcHVibGljIG9uRW50ZXIoZ286IGZndWkuR0NvbXBvbmVudCkvLywgQmFzZUV2ZW50RGF0YSBldmVudERhdGEpXG4gICAge1xuXG4gICAgfVxuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyBUZXhhcyDkuJPnlKhcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cIl9jYXJkTGlzdFwiPjwvcGFyYW0+XG4gICAgcHVibGljIFNldFNob3dTdGF0ZShfY2FyZExpc3Q6IG51bWJlcltdKSB7XG4gICAgICAgIGlmIChfY2FyZExpc3QuaW5kZXhPZih0aGlzLlZhbHVlKSA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLlJlc2V0Q29sb3IoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcblxuICAgICAgICAgICAgdGhpcy5TZXRDb2xvckdhcnkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBSZXNldENvbG9yKCkge1xuICAgICAgICBpZiAoIXRoaXMudWlfdmFsKSByZXR1cm47XG4gICAgICAgIHRoaXMudWlfdmFsLmNvbG9yID0gbmV3IGNjLkNvbG9yKDI1NSwgMjU1LCAyNTUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBTZXRDb2xvckdhcnkoKSB7XG4gICAgICAgIGlmICghdGhpcy51aV92YWwpIHJldHVybjtcbiAgICAgICAgdGhpcy51aV92YWwuY29sb3IgPSBuZXcgY2MuQ29sb3IoMTY0LCAxNTgsIDE1OCk7XG4gICAgICAgIHRoaXMudWlfdmFsLmNvbG9yID0gY2MuQ29sb3IuR1JBWTtcbiAgICB9XG5cbiAgICBwdWJsaWMgU2hvd01heENhcmRCZyhpc1Nob3c6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMudWlfTWF4SW1hZ2UgIT0gbnVsbClcbiAgICAgICAgICAgIHRoaXMudWlfTWF4SW1hZ2UudmlzaWJsZSA9IGlzU2hvdztcbiAgICB9XG4gICAgcHVibGljIFJlc2V0KGlzUmVzZXRWYWx1ZSA9IHRydWUpIHtcbiAgICAgICAgdGhpcy5SZXNldENvbG9yKCk7XG4gICAgICAgIHRoaXMuQ2xlYXIoKTtcbiAgICAgICAgdGhpcy5TaG93KCk7XG4gICAgICAgIHRoaXMuU3RvcFRydW5QYWdlKCk7XG4gICAgICAgIHRoaXMuU2hvd0V5ZShmYWxzZSk7XG4gICAgICAgIGlmIChpc1Jlc2V0VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuU2V0VmFsKDApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5TZXRDYXJkSW1hZ2UoMCwgZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudWlfdmFsKSB0aGlzLnVpX3ZhbC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuU2hvd01heENhcmRCZyhmYWxzZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgY2FyZFR5cGUxID0gLypcIjAwMFwiOyAvLyovXCIwMDFcIjtcbiAgICBwcml2YXRlIHN0YXRpYyBjYXJkVHlwZTIgPSAvKlwiMDAwXCI7IC8vKi9cIjAwMlwiO1xuICAgIHByaXZhdGUgc3RhdGljIGNhcmRUeXBlMyA9IC8qXCIwMDBcIjsvLyovXCIwMDNcIjtcbiAgICBwcml2YXRlIHN0YXRpYyBjYXJkVHlwZTQgPSAvKlwiMDAwXCI7Ly8qL1wiMDA0XCI7XG4gICAgcHJpdmF0ZSBzdGF0aWMgY2FyZFR5cGU1ID0gLypcIjAwMFwiOy8vKi9cIjAwNVwiO1xuICAgIHB1YmxpYyBzdGF0aWMgY2FyZFR5cGVOYW1lID0gLypcIjAwMFwiOy8vKi9cIjAwMVwiO1xuXG4gICAgcHVibGljIHN0YXRpYyBTZXRDYXJkSW1hZ2VUeXBlKHR5cGU6IG51bWJlcikge1xuICAgICAgICBsZXQgY2FyZE5hbWU6IHN0cmluZyA9IG51bGw7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAxOiBjYXJkTmFtZSA9IENhcmRSZWRiZXRDb21wLmNhcmRUeXBlMTsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6IGNhcmROYW1lID0gQ2FyZFJlZGJldENvbXAuY2FyZFR5cGUyOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzogY2FyZE5hbWUgPSBDYXJkUmVkYmV0Q29tcC5jYXJkVHlwZTM7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OiBjYXJkTmFtZSA9IENhcmRSZWRiZXRDb21wLmNhcmRUeXBlNDsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDU6IGNhcmROYW1lID0gQ2FyZFJlZGJldENvbXAuY2FyZFR5cGU1OyBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2FyZE5hbWUgIT0gdGhpcy5jYXJkVHlwZU5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuY2FyZFR5cGVOYW1lID0gY2FyZE5hbWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgU2hvd1R1cm5QYWdlKCkge1xuICAgICAgICBpZiAoIXRoaXMudWlfdmFsKSByZXR1cm47XG4gICAgICAgIFVJVXRpbC5sb2FkSW1hZ2UodGhpcy51aV92YWwsIENhcmRSZWRiZXRDb21wLmNhcmRUeXBlTmFtZSwgXCJUZXhhc1wiKTtcbiAgICAgICAgdGhpcy5ub2RlLmFuY2hvclggPSAwLjVcbiAgICAgICAgdGhpcy5ub2RlLmFuY2hvclkgPSAwLjVcbiAgICAgICAgbGV0IGFjdGlvbiA9IGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgY2Muc3Bhd24oXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjIsIDAsIDEpLFxuICAgICAgICAgICAgICAgIGNjLnNrZXdUbygwLjIsIDAsIDIwKSxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5VcGRhdGVVSShmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNrZXdZID0gLTIwO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjYy5zcGF3bihcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMiwgMSwgMSksXG4gICAgICAgICAgICAgICAgY2Muc2tld1RvKDAuMiwgMCwgMClcbiAgICAgICAgICAgICksXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMudWlfdmFsLm5vZGUucnVuQWN0aW9uKGFjdGlvbik7XG4gICAgfVxuXG4gICAgcHVibGljIFN0b3BUcnVuUGFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMudWlfdmFsKSB0aGlzLnVpX3ZhbC5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuVXBkYXRlVUkoZmFsc2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyBTaG93RXllKGlzU2hvdzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9zaG93VHlwZSA9IGlzU2hvdyA/IDEgOiAwO1xuICAgICAgICBpZiAodGhpcy51aV9leWUgIT0gbnVsbCkgdGhpcy51aV9leWUudmlzaWJsZSA9IGlzU2hvdztcbiAgICB9XG5cbiAgICAvL+e/u+eJjFxuICAgIHB1YmxpYyBUdXJub3Zlcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubm9kZS5hbmNob3JYID0gMC41XG4gICAgICAgIHRoaXMubm9kZS5hbmNob3JZID0gMC41XG4gICAgICAgIGxldCBhY3Rpb24gPSBjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgIGNjLnNwYXduKFxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4yLCAwLCAxKSxcbiAgICAgICAgICAgICAgICBjYy5za2V3VG8oMC4yLCAwLCAyMCksXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuU2V0VmFsKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2tld1kgPSAtMjA7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGNjLnNwYXduKFxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4yLCAxLCAxKSxcbiAgICAgICAgICAgICAgICBjYy5za2V3VG8oMC4yLCAwLCAwKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihhY3Rpb24pO1xuICAgIH1cblxuICAgIFNob3coKSB7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmZndWlDb21wb25lbnQudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLnVpX3ZhbCkge1xuICAgICAgICAgICAgdGhpcy51aV92YWwudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnVpX3ZhbC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBIaWRlKCkge1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZmd1aUNvbXBvbmVudC52aXNpYmxlID0gZmFsc2U7XG4gICAgfVxufSJdfQ==