
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/texas/script/View/TexasTipView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXHRleGFzXFxzY3JpcHRcXFZpZXdcXFRleGFzVGlwVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrRUFBNkQ7QUFDN0Qsd0RBQXVEO0FBR2pELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFRO0lBQWxEO1FBQUEscUVBbUpDO1FBbEpVLG1CQUFhLEdBQW9CLElBQUksQ0FBQztRQUN0QyxjQUFRLEdBQWlCLElBQUksQ0FBQztRQUM5QixtQkFBYSxHQUFpQixJQUFJLENBQUM7UUFDbkMsaUJBQVcsR0FBaUIsSUFBSSxDQUFDO1FBQ2pDLHVCQUFpQixHQUFvQixJQUFJLENBQUM7UUFDMUMsa0JBQVksR0FBb0IsSUFBSSxDQUFDO1FBQ3JDLHFCQUFlLEdBQW9CLElBQUksQ0FBQztRQUN4QyxpQkFBVyxHQUFvQixJQUFJLENBQUM7UUFFbkMsWUFBTSxHQUFhLElBQUksQ0FBQztRQUN4QixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBQzNCLGNBQVEsR0FBRyxDQUFDLENBQUM7UUFFYixlQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGNBQVEsR0FBYSxFQUFFLENBQUM7O0lBb0lwQyxDQUFDO0lBbklHLHNDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUV0QixJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFTSw4QkFBTyxHQUFkO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxJQUFJLENBQUMsU0FBUztZQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBR08sZ0NBQVMsR0FBakI7UUFDSSxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSTtZQUFFLGlCQUFNLGlCQUFpQixXQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQiwrREFBK0Q7UUFDL0QsNkJBQTZCO1FBQzdCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsd0NBQWlCLEdBQWpCLGNBQXNCLENBQUM7SUFHaEIsOEJBQU8sR0FBZCxVQUFlLEdBQVcsRUFBRSxLQUFnQixFQUFFLFFBQW1CLEVBQUUsTUFBNEMsRUFBRSxTQUErQztRQUFoSyxpQkEwQ0M7UUExQ2tFLHVCQUFBLEVBQUEsU0FBUyw2QkFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7UUFBRSwwQkFBQSxFQUFBLFlBQVksNkJBQWEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDO1FBQzVKLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBRTFCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUNoQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7UUFHdEMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7Z0JBQ3ZCLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDZCxLQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDaEIsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztnQkFDbEIsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNkLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQztTQUNOO2FBQU07WUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztnQkFDbEIsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDO1NBQ047UUFFRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDakIsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNsQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDbkM7YUFBTTtZQUNILElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1NBQ3BDO1FBQ0QsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxtQ0FBWSxHQUFuQixVQUFvQixHQUFXO1FBQzNCLDJCQUEyQjtRQUMzQix1QkFBdUI7UUFDdkIseUJBQXlCO1FBQ3pCLElBQUk7UUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRVosSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLElBQUksSUFBSSxHQUFZLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMvQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ25CLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2FBQ1QsUUFBUSxDQUNMLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQ2xELEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQ3ZDO2FBQ0EsSUFBSSxDQUFDO1lBQ0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFBO0lBQ2hCLENBQUM7SUFFRCxvQ0FBb0M7SUFDcEMsMENBQTBDO0lBQzFDLHlCQUF5QjtJQUN6Qix3Q0FBd0M7SUFDeEMsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUiw2Q0FBNkM7SUFDN0MsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixvQ0FBb0M7SUFDcEMsc0NBQXNDO0lBQ3RDLHNDQUFzQztJQUN0Qyw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLElBQUk7SUFHSiwyQkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDOUIsaUJBQU0sSUFBSSxXQUFFLENBQUM7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUVELDJCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDeEIsaUJBQU0sSUFBSSxXQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELGdDQUFTLEdBQVQ7UUFDSSw2QkFBNkI7SUFDakMsQ0FBQztJQWxKZ0IsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQW1KaEM7SUFBRCxtQkFBQztDQW5KRCxBQW1KQyxDQW5KeUMsa0JBQVEsR0FtSmpEO2tCQW5Kb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3QmFzZSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9WaWV3QmFzZVwiO1xuaW1wb3J0IHsgVGV4YXNMYW5ndWFnZSB9IGZyb20gXCIuLi9Nb2RlbC9UZXhhc0xhbmd1YWdlXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleGFzVGlwVmlldyBleHRlbmRzIFZpZXdCYXNlIHtcbiAgICBwdWJsaWMgdWlfdGlwQ29udGVudDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfdGlwT0s6IGZndWkuR0J1dHRvbiA9IG51bGw7XG4gICAgcHVibGljIHVpX3RpcE9LQ2xpY2s6IGZndWkuR0J1dHRvbiA9IG51bGw7XG4gICAgcHVibGljIHVpX3RpcENsb3NlOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuICAgIHB1YmxpYyB1aV90aXBPS0NsaWNrVGV4dDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfdGlwT0tUZXh0OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV90aXBDbG9zZVRleHQ6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX3RpcExhYmVsOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfZnVuT0s6IEZ1bmN0aW9uID0gbnVsbDtcbiAgICBwcml2YXRlIF9mdW5DbG9zZTogRnVuY3Rpb24gPSBudWxsO1xuICAgIHByaXZhdGUgb2tTdGFydFggPSAwO1xuXG4gICAgcHJpdmF0ZSBvbkxvYWRFbmQgPSBmYWxzZTtcbiAgICBwcml2YXRlIG1lc3NhZ2VzOiBzdHJpbmdbXSA9IFtdO1xuICAgIE9uTG9hZENvbXBsZXRlZCgpIHtcbiAgICAgICAgdGhpcy5vbkxvYWRFbmQgPSB0cnVlO1xuXG4gICAgICAgIGlmICh0aGlzLm15c3RhcnQpIHRoaXMuTXlTdGFydEV4KCk7XG4gICAgfVxuXG4gICAgcHVibGljIE15U3RhcnQoKSB7XG4gICAgICAgIHRoaXMubXlzdGFydCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLm9uTG9hZEVuZCkgdGhpcy5NeVN0YXJ0RXgoKTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgTXlTdGFydEV4KCkge1xuICAgICAgICBpZiAodGhpcy51aV90aXBDb250ZW50ID09IG51bGwpIHN1cGVyLkF1dG9TZXRHb1Byb3BlcnR5KCk7XG4gICAgICAgIHRoaXMub2tTdGFydFggPSB0aGlzLnVpX3RpcE9LLng7XG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSBbXTtcbiAgICAgICAgLy8gdGhpcy5tb3ZlQW5pbWF0aW9uID0gdGhpcy5mZ3VpQ29tcG9uZW50LmdldFRyYW5zaXRpb24oXCJ0MFwiKTtcbiAgICAgICAgLy8gdGhpcy5tb3ZlQW5pbWF0aW9uLnN0b3AoKTtcbiAgICAgICAgdGhpcy5IaWRlKCk7XG4gICAgfVxuXG4gICAgQXV0b1NldEdvUHJvcGVydHkoKSB7IH1cblxuXG4gICAgcHVibGljIFNob3dUaXAobWVzOiBzdHJpbmcsIGZ1bm9rPzogRnVuY3Rpb24sIGZ1bmNsb3NlPzogRnVuY3Rpb24sIG9rVGV4dCA9IFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE0MzIpLCBjbG9zZVRleHQgPSBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxMzkzKSkge1xuICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJQcm9wZXJ0eShcInR5cGVcIiwgMCk7XG4gICAgICAgIHRoaXMudWlfdGlwQ29udGVudC50ZXh0ID0gbWVzO1xuICAgICAgICB0aGlzLl9mdW5PSyA9IGZ1bm9rO1xuICAgICAgICB0aGlzLl9mdW5DbG9zZSA9IGZ1bmNsb3NlO1xuXG4gICAgICAgIHRoaXMudWlfdGlwT0tDbGlja1RleHQudGV4dCA9IG9rVGV4dDtcbiAgICAgICAgdGhpcy51aV90aXBPS1RleHQudGV4dCA9IG9rVGV4dDtcbiAgICAgICAgdGhpcy51aV90aXBDbG9zZVRleHQudGV4dCA9IGNsb3NlVGV4dDtcblxuXG4gICAgICAgIGlmICh0aGlzLl9mdW5PSykge1xuICAgICAgICAgICAgdGhpcy51aV90aXBPS0NsaWNrLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Z1bk9LKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5IaWRlKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy51aV90aXBPSy5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9mdW5PSygpO1xuICAgICAgICAgICAgICAgIHRoaXMuSGlkZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVpX3RpcE9LLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuSGlkZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fZnVuQ2xvc2UpIHtcbiAgICAgICAgICAgIHRoaXMudWlfdGlwQ2xvc2Uub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZnVuQ2xvc2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLkhpZGUoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnVpX3RpcE9LLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudWlfdGlwT0tDbGljay52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudWlfdGlwQ2xvc2UudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVpX3RpcE9LLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy51aV90aXBPS0NsaWNrLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudWlfdGlwQ2xvc2UudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuU2hvdygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBTaG93VGlwTGFiZWwobWVzOiBzdHJpbmcpIHtcbiAgICAgICAgLy8gdGhpcy5tZXNzYWdlcy5wdXNoKG1lcyk7XG4gICAgICAgIC8vIGlmICghdGhpcy5pc09wZW5kKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnRpcE1lc3NhZ2UoKTtcbiAgICAgICAgLy8gfVxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLVNob3dUaXBMYWJlbC0tLVwiLCBtZXMpO1xuICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJQcm9wZXJ0eShcInR5cGVcIiwgMSk7XG4gICAgICAgIHRoaXMuU2hvdygpO1xuXG4gICAgICAgIHRoaXMudWlfdGlwTGFiZWwudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICBsZXQgbm9kZTogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMudWlfdGlwTGFiZWwubm9kZSk7XG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy51aV90aXBMYWJlbC5ub2RlLnBhcmVudDtcbiAgICAgICAgbm9kZS5wb3NpdGlvbiA9IHRoaXMudWlfdGlwTGFiZWwubm9kZS5wb3NpdGlvbjtcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IG1lcztcbiAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBub2RlLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgIGNjLnR3ZWVuKG5vZGUpXG4gICAgICAgICAgICAucGFyYWxsZWwoXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oKS5ieSgxLjUsIHsgcG9zaXRpb246IGNjLnYzKDAsIDQwMCwgMCkgfSksXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oKS50bygxLjUsIHsgb3BhY2l0eTogMTI4IH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVGcm9tUGFyZW50KHRydWUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpXG4gICAgfVxuXG4gICAgLy8gcHJpdmF0ZSBpc09wZW5kOiBib29sZWFuID0gZmFsc2U7XG4gICAgLy8gcHJpdmF0ZSBtb3ZlQW5pbWF0aW9uOiBmZ3VpLlRyYW5zaXRpb247XG4gICAgLy8gcHJpdmF0ZSB0aXBNZXNzYWdlKCkge1xuICAgIC8vICAgICBsZXQgbWVzcyA9IHRoaXMubWVzc2FnZXMuc2hpZnQoKTtcbiAgICAvLyAgICAgaWYgKCFtZXNzKSB7XG4gICAgLy8gICAgICAgICB0aGlzLmlzT3BlbmQgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgIHRoaXMuSGlkZSgpO1xuICAgIC8vICAgICAgICAgcmV0dXJuO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHRoaXMuc2V0Q29udHJvbGxlclByb3BlcnR5KFwidHlwZVwiLCAxKTtcbiAgICAvLyAgICAgdGhpcy5TaG93KCk7XG4gICAgLy8gICAgIHRoaXMuaXNPcGVuZCA9IHRydWU7XG4gICAgLy8gICAgIHRoaXMudWlfdGlwTGFiZWwudGV4dCA9IG1lc3M7XG4gICAgLy8gICAgIHRoaXMubW92ZUFuaW1hdGlvbi5wbGF5KCgpID0+IHtcbiAgICAvLyAgICAgICAgIHRoaXMudWlfdGlwTGFiZWwudGV4dCA9ICcnO1xuICAgIC8vICAgICAgICAgdGhpcy50aXBNZXNzYWdlKCk7XG4gICAgLy8gICAgIH0sIDEpXG4gICAgLy8gfVxuXG5cbiAgICBIaWRlKCkge1xuICAgICAgICB0aGlzLnVpX3RpcE9LLmNsZWFyQ2xpY2soKTtcbiAgICAgICAgdGhpcy51aV90aXBPS0NsaWNrLmNsZWFyQ2xpY2soKTtcbiAgICAgICAgdGhpcy51aV90aXBDbG9zZS5jbGVhckNsaWNrKCk7XG4gICAgICAgIHN1cGVyLkhpZGUoKTtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIFNob3coKSB7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBzdXBlci5TaG93KCk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICAvLyB0aGlzLm1vdmVBbmltYXRpb24uc3RvcCgpO1xuICAgIH1cbn0iXX0=