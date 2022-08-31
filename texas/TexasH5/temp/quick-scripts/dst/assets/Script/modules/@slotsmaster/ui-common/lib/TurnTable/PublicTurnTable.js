
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@slotsmaster/ui-common/lib/TurnTable/PublicTurnTable.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '04620P2rTdBDoowsQJXxkc1', 'PublicTurnTable');
// Script/modules/@slotsmaster/ui-common/lib/TurnTable/PublicTurnTable.ts

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
exports.PublicTurnTable = void 0;
var TurnTable_1 = require("../TurnTable");
var MgrOrder_1 = require("../MgrOrder");
var HttpApi_1 = require("../HttpApi");
var AppConst_1 = require("../AppConst");
var Utils_1 = require("../../../../@mogafa/utils/lib/Utils");
var PublicTurnTable = /** @class */ (function (_super) {
    __extends(PublicTurnTable, _super);
    function PublicTurnTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resultValue = 3;
        _this.startValue = 10000;
        _this.usd = 0.95;
        _this.shineIndex = 1;
        _this.scheduleShine = _this.turnTableShine;
        return _this;
    }
    Object.defineProperty(PublicTurnTable.prototype, "SpinButtonName", {
        get: function () {
            return "Spin";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PublicTurnTable.prototype, "CollectButtonName", {
        get: function () {
            return "Collect";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PublicTurnTable.prototype, "goldTurnData", {
        get: function () {
            return this.getWheelArray();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PublicTurnTable.prototype, "goldTurnLabel", {
        get: function () {
            var labelArr = [];
            for (var i = 1; i < 17; i++) {
                labelArr.push("label" + i);
            }
            return labelArr;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PublicTurnTable.prototype, "packageResourceName", {
        get: function () {
            return "Games/Common/UI/InGameTurntable/InGameTurntable";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PublicTurnTable.prototype, "packageName", {
        get: function () {
            return "InGameTurntable";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PublicTurnTable.prototype, "componentName", {
        get: function () {
            return "GameWheel";
        },
        enumerable: false,
        configurable: true
    });
    PublicTurnTable.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.visible = false;
        this.fguiComponent.getChild("Close").asButton.onClick(this.turnTableEnd, this);
    };
    PublicTurnTable.prototype.finished = function () {
        _super.prototype.finished.call(this);
        this.fguiComponent.getController("type").selectedIndex = 1;
        this.fguiComponent.getController("state").selectedIndex = 1;
        this.unschedule(this.scheduleShine);
        this.fguiComponent.getChild("getGold").asLabel.text = "" + this.resultValue;
        var turnResult = this.fguiComponent.getChild("getMoreGold");
        var result = this.startValue * this.resultValue;
        this.cmgpNumberField = turnResult.asMogafaNumberField();
        this.cmgpNumberField.play(0, result, 2);
    };
    PublicTurnTable.prototype.setResulText = function (value) {
        if (value) {
            if (this.resulText) {
                this.resulText.text = Utils_1.Utils.formatNumberToInt(value) + " X";
            }
        }
    };
    PublicTurnTable.prototype.turnTableEnd = function () {
        if (this.wheelFinishedCallback) {
            this.wheelFinishedCallback();
        }
        this.fguiComponent.node.zIndex = 0;
        this.Hide();
    };
    PublicTurnTable.prototype.onShow = function (callBack, wheelData) {
        _super.prototype.onShow.call(this, callBack, wheelData);
        this.gameWheel = wheelData;
        this.fguiComponent.visible = true;
        this.fguiComponent.node.zIndex = 999;
        this.fguiComponent.getController("type").selectedIndex = 0;
        this.onWheelOpen();
        this.resulText = this.fguiComponent.getChild("Gold").asTextField;
        if (this.gameWheel) {
            this.startValue = this.gameWheel.winCoins;
            this.resultValue = this.gameWheel.wheel.finalValue.value;
            this.usd = this.gameWheel.productPrice;
        }
        this.fguiComponent.getChild("Spin").asCom.getChild("value").asLabel.text = "USD " + this.usd + " SPIN";
        this.fguiComponent.getChild("getMoreGold").asLabel.text = "";
        this.setResulText("" + this.startValue);
        this.initData("" + this.resultValue, 0);
    };
    PublicTurnTable.prototype.startTurn = function () {
        _super.prototype.startTurn.call(this);
        this.fguiComponent.getController("type").selectedIndex = 2;
        this.shineIndex = 1;
        this.schedule(this.scheduleShine, 0.1);
    };
    PublicTurnTable.prototype.onClickGetSpin = function () {
        var data = {
            productCode: this.productCode,
            productId: this.productId,
            quantity: 1,
        };
        MgrOrder_1.MgrOrder.getInstance().sendOrderToJava(data, this.buySuccess, this.buyFailed);
    };
    PublicTurnTable.prototype.buySuccess = function () {
        this.StartSpin();
    };
    PublicTurnTable.prototype.buyFailed = function () {
        //  UIMgr.getInstance().showTipView(this, 0, "Payment result", "Purchase failed");
    };
    PublicTurnTable.prototype.shineHide = function () {
        for (var i = 1; i < 16; i++) {
            this.fguiComponent.getChild("light_" + i).visible = false;
        }
    };
    PublicTurnTable.prototype.turnTableShine = function () {
        if (this.shineIndex < 16) {
            this.shineHide();
            this.fguiComponent.getChild("light_" + this.shineIndex).visible = true;
        }
        this.shineIndex++;
        if (this.shineIndex > 15) {
            this.shineIndex = 1;
        }
    };
    PublicTurnTable.prototype.getWheelArray = function () {
        if (this.gameWheel) {
            var wheelValues = this.gameWheel.wheel.values;
            var values = [];
            for (var i in wheelValues) {
                values.push("" + wheelValues[i].value);
            }
            return values;
        }
        return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"];
    };
    PublicTurnTable.prototype.onWheelOpen = function () {
        var _this = this;
        var productId = this.gameWheel ? this._gameWheel.productId : "112358";
        HttpApi_1.default.http
            .post(HttpApi_1.default.server + HttpApi_1.Http_CreatForm + ("?" + ("productId=" + productId + "&quantity=" + 1)), {}, {
            headers: {
                // 'Content-Type': "application/json",
                Authorization: AppConst_1.AppConst.accessToken,
            },
        })
            .then(function (res) {
            console.log(res);
            if (res.code == 200) {
                _this.productCode = res.data.productCode;
                _this.productId = res.data.productId;
                _this.orderId = res.data.orderId;
            }
        }, function (err) { })
            .catch(function (err) { });
    };
    return PublicTurnTable;
}(TurnTable_1.default));
exports.PublicTurnTable = PublicTurnTable;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAc2xvdHNtYXN0ZXJcXHVpLWNvbW1vblxcbGliXFxUdXJuVGFibGVcXFB1YmxpY1R1cm5UYWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsMENBQXFDO0FBQ3JDLHdDQUF1QztBQUN2QyxzQ0FBd0U7QUFDeEUsd0NBQXVDO0FBRXZDLDZEQUE0RDtBQUk1RDtJQUFxQyxtQ0FBUztJQUE5QztRQUFBLHFFQXlLQztRQTdJVyxpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUN4QixnQkFBVSxHQUFXLEtBQUssQ0FBQztRQUMzQixTQUFHLEdBQVcsSUFBSSxDQUFDO1FBQ25CLGdCQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLG1CQUFhLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQzs7SUF5SWhELENBQUM7SUF4S0csc0JBQWMsMkNBQWM7YUFBNUI7WUFDSSxPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDOzs7T0FBQTtJQUNELHNCQUFjLDhDQUFpQjthQUEvQjtZQUNJLE9BQU8sU0FBUyxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWMseUNBQVk7YUFBMUI7WUFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQUNELHNCQUFjLDBDQUFhO2FBQTNCO1lBQ0ksSUFBSSxRQUFRLEdBQWEsRUFBRSxDQUFDO1lBQzVCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3pCLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQzlCO1lBQ0QsT0FBTyxRQUFRLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYyxnREFBbUI7YUFBakM7WUFDSSxPQUFPLGlEQUFpRCxDQUFDO1FBQzdELENBQUM7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QyxHQUFHLElBQU8sQ0FBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0F6S0EsQUF5S0MsQ0F6S29DLG1CQUFTLEdBeUs3QztBQXpLWSwwQ0FBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5pbXBvcnQgVHVyblRhYmxlIGZyb20gXCIuLi9UdXJuVGFibGVcIjtcbmltcG9ydCB7IE1nck9yZGVyIH0gZnJvbSBcIi4uL01nck9yZGVyXCI7XG5pbXBvcnQgSHR0cEFwaSwgeyBIdHRwX0NyZWF0Rm9ybSwgSHR0cF9HZXRWZXJpZnlQYXkgfSBmcm9tIFwiLi4vSHR0cEFwaVwiO1xuaW1wb3J0IHsgQXBwQ29uc3QgfSBmcm9tIFwiLi4vQXBwQ29uc3RcIjtcbmltcG9ydCB7IE1vZ2FmYU51bWJlckZpZWxkIH0gZnJvbSBcIi4uLy4uLy4uLy4uL0Btb2dhZmEvZmFpcnlndWktY29tcG9uZW50L2xpYi9leHRlbnNpb25zL01vZ2FmYU51bWJlckZpZWxkXCI7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuLi8uLi8uLi8uLi9AbW9nYWZhL3V0aWxzL2xpYi9VdGlsc1wiO1xuaW1wb3J0IFNwaW5SZXN1bHRzR2FtZVdoZWVsIGZyb20gXCIuLi8uLi8uLi8uLi9zcGluLXJlc3VsdC9TcGluUmVzdWx0c0dhbWVXaGVlbFwiO1xuXG5cbmV4cG9ydCBjbGFzcyBQdWJsaWNUdXJuVGFibGUgZXh0ZW5kcyBUdXJuVGFibGUge1xuICAgIHByb3RlY3RlZCBnZXQgU3BpbkJ1dHRvbk5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiU3BpblwiO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IENvbGxlY3RCdXR0b25OYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIkNvbGxlY3RcIjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBnb2xkVHVybkRhdGEoKTogc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRXaGVlbEFycmF5KCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgZ29sZFR1cm5MYWJlbCgpOiBzdHJpbmdbXSB7XG4gICAgICAgIGxldCBsYWJlbEFycjogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxNzsgaSsrKSB7XG4gICAgICAgICAgICBsYWJlbEFyci5wdXNoKFwibGFiZWxcIiArIGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsYWJlbEFycjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBwYWNrYWdlUmVzb3VyY2VOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIkdhbWVzL0NvbW1vbi9VSS9JbkdhbWVUdXJudGFibGUvSW5HYW1lVHVybnRhYmxlXCI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgcGFja2FnZU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiSW5HYW1lVHVybnRhYmxlXCI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgY29tcG9uZW50TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJHYW1lV2hlZWxcIjtcbiAgICB9XG4gICAgcHJpdmF0ZSByZXN1bFRleHQ6IGZndWkuR1RleHRGaWVsZDtcbiAgICBwcml2YXRlIGNtZ3BOdW1iZXJGaWVsZDogTW9nYWZhTnVtYmVyRmllbGQ7XG4gICAgcHJpdmF0ZSByZXN1bHRWYWx1ZTogbnVtYmVyID0gMztcbiAgICBwcml2YXRlIHN0YXJ0VmFsdWU6IG51bWJlciA9IDEwMDAwO1xuICAgIHByaXZhdGUgdXNkOiBudW1iZXIgPSAwLjk1O1xuICAgIHByaXZhdGUgc2hpbmVJbmRleDogbnVtYmVyID0gMTtcbiAgICBwcml2YXRlIHNjaGVkdWxlU2hpbmUgPSB0aGlzLnR1cm5UYWJsZVNoaW5lO1xuICAgIHByaXZhdGUgcHJvZHVjdElkOiBhbnk7XG4gICAgcHJpdmF0ZSBwcm9kdWN0Q29kZTogYW55O1xuICAgIHByaXZhdGUgb3JkZXJJZDogYW55O1xuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUNoaWxkQ29tcG9uZW50cygpIHtcbiAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRDb21wb25lbnRzKCk7XG4gICAgICAgIHRoaXMuZmd1aUNvbXBvbmVudC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZmd1aUNvbXBvbmVudC5nZXRDaGlsZChcIkNsb3NlXCIpLmFzQnV0dG9uLm9uQ2xpY2sodGhpcy50dXJuVGFibGVFbmQsIHRoaXMpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBmaW5pc2hlZCgpIHtcbiAgICAgICAgc3VwZXIuZmluaXNoZWQoKTtcbiAgICAgICAgdGhpcy5mZ3VpQ29tcG9uZW50LmdldENvbnRyb2xsZXIoXCJ0eXBlXCIpLnNlbGVjdGVkSW5kZXggPSAxO1xuICAgICAgICB0aGlzLmZndWlDb21wb25lbnQuZ2V0Q29udHJvbGxlcihcInN0YXRlXCIpLnNlbGVjdGVkSW5kZXggPSAxO1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5zY2hlZHVsZVNoaW5lKTtcbiAgICAgICAgdGhpcy5mZ3VpQ29tcG9uZW50LmdldENoaWxkKFwiZ2V0R29sZFwiKS5hc0xhYmVsLnRleHQgPSBcIlwiICsgdGhpcy5yZXN1bHRWYWx1ZTtcbiAgICAgICAgbGV0IHR1cm5SZXN1bHQgPSB0aGlzLmZndWlDb21wb25lbnQuZ2V0Q2hpbGQoXCJnZXRNb3JlR29sZFwiKTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuc3RhcnRWYWx1ZSAqIHRoaXMucmVzdWx0VmFsdWU7XG4gICAgICAgIHRoaXMuY21ncE51bWJlckZpZWxkID0gdHVyblJlc3VsdC5hc01vZ2FmYU51bWJlckZpZWxkKCk7XG4gICAgICAgIHRoaXMuY21ncE51bWJlckZpZWxkLnBsYXkoMCwgcmVzdWx0LCAyKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldFJlc3VsVGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVzdWxUZXh0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN1bFRleHQudGV4dCA9IFV0aWxzLmZvcm1hdE51bWJlclRvSW50KHZhbHVlKSArIFwiIFhcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdHVyblRhYmxlRW5kKCkge1xuICAgICAgICBpZiAodGhpcy53aGVlbEZpbmlzaGVkQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMud2hlZWxGaW5pc2hlZENhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mZ3VpQ29tcG9uZW50Lm5vZGUuekluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5IaWRlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uU2hvdyhjYWxsQmFjazogRnVuY3Rpb24sIHdoZWVsRGF0YTogU3BpblJlc3VsdHNHYW1lV2hlZWwpIHtcbiAgICAgICAgc3VwZXIub25TaG93KGNhbGxCYWNrLCB3aGVlbERhdGEpO1xuICAgICAgICB0aGlzLmdhbWVXaGVlbCA9IHdoZWVsRGF0YTtcbiAgICAgICAgdGhpcy5mZ3VpQ29tcG9uZW50LnZpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmZndWlDb21wb25lbnQubm9kZS56SW5kZXggPSA5OTk7XG4gICAgICAgIHRoaXMuZmd1aUNvbXBvbmVudC5nZXRDb250cm9sbGVyKFwidHlwZVwiKS5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5vbldoZWVsT3BlbigpO1xuICAgICAgICB0aGlzLnJlc3VsVGV4dCA9IHRoaXMuZmd1aUNvbXBvbmVudC5nZXRDaGlsZChcIkdvbGRcIikuYXNUZXh0RmllbGQ7XG4gICAgICAgIGlmICh0aGlzLmdhbWVXaGVlbCkge1xuICAgICAgICAgICAgdGhpcy5zdGFydFZhbHVlID0gdGhpcy5nYW1lV2hlZWwud2luQ29pbnM7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdFZhbHVlID0gdGhpcy5nYW1lV2hlZWwud2hlZWwuZmluYWxWYWx1ZS52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMudXNkID0gdGhpcy5nYW1lV2hlZWwucHJvZHVjdFByaWNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmd1aUNvbXBvbmVudC5nZXRDaGlsZChcIlNwaW5cIikuYXNDb20uZ2V0Q2hpbGQoXCJ2YWx1ZVwiKS5hc0xhYmVsLnRleHQgPSBcIlVTRCBcIiArIHRoaXMudXNkICsgXCIgU1BJTlwiO1xuICAgICAgICB0aGlzLmZndWlDb21wb25lbnQuZ2V0Q2hpbGQoXCJnZXRNb3JlR29sZFwiKS5hc0xhYmVsLnRleHQgPSBcIlwiO1xuICAgICAgICB0aGlzLnNldFJlc3VsVGV4dChcIlwiICsgdGhpcy5zdGFydFZhbHVlKTtcbiAgICAgICAgdGhpcy5pbml0RGF0YShcIlwiICsgdGhpcy5yZXN1bHRWYWx1ZSwgMCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHN0YXJ0VHVybigpIHtcbiAgICAgICAgc3VwZXIuc3RhcnRUdXJuKCk7XG4gICAgICAgIHRoaXMuZmd1aUNvbXBvbmVudC5nZXRDb250cm9sbGVyKFwidHlwZVwiKS5zZWxlY3RlZEluZGV4ID0gMjtcbiAgICAgICAgdGhpcy5zaGluZUluZGV4ID0gMTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnNjaGVkdWxlU2hpbmUsIDAuMSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uQ2xpY2tHZXRTcGluKCkge1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIHByb2R1Y3RDb2RlOiB0aGlzLnByb2R1Y3RDb2RlLFxuICAgICAgICAgICAgcHJvZHVjdElkOiB0aGlzLnByb2R1Y3RJZCxcbiAgICAgICAgICAgIHF1YW50aXR5OiAxLFxuICAgICAgICB9O1xuICAgICAgICBNZ3JPcmRlci5nZXRJbnN0YW5jZSgpLnNlbmRPcmRlclRvSmF2YShkYXRhLCB0aGlzLmJ1eVN1Y2Nlc3MsIHRoaXMuYnV5RmFpbGVkKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1eVN1Y2Nlc3MoKSB7XG4gICAgICAgIHRoaXMuU3RhcnRTcGluKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidXlGYWlsZWQoKSB7XG4gICAgICAgIC8vICBVSU1nci5nZXRJbnN0YW5jZSgpLnNob3dUaXBWaWV3KHRoaXMsIDAsIFwiUGF5bWVudCByZXN1bHRcIiwgXCJQdXJjaGFzZSBmYWlsZWRcIik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzaGluZUhpZGUoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTY7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5mZ3VpQ29tcG9uZW50LmdldENoaWxkKFwibGlnaHRfXCIgKyBpKS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHR1cm5UYWJsZVNoaW5lKCkge1xuICAgICAgICBpZiAodGhpcy5zaGluZUluZGV4IDwgMTYpIHtcbiAgICAgICAgICAgIHRoaXMuc2hpbmVIaWRlKCk7XG4gICAgICAgICAgICB0aGlzLmZndWlDb21wb25lbnQuZ2V0Q2hpbGQoXCJsaWdodF9cIiArIHRoaXMuc2hpbmVJbmRleCkudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaGluZUluZGV4Kys7XG4gICAgICAgIGlmICh0aGlzLnNoaW5lSW5kZXggPiAxNSkge1xuICAgICAgICAgICAgdGhpcy5zaGluZUluZGV4ID0gMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0V2hlZWxBcnJheSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVdoZWVsKSB7XG4gICAgICAgICAgICBsZXQgd2hlZWxWYWx1ZXMgPSB0aGlzLmdhbWVXaGVlbC53aGVlbC52YWx1ZXM7XG4gICAgICAgICAgICBsZXQgdmFsdWVzID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4gd2hlZWxWYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaChcIlwiICsgd2hlZWxWYWx1ZXNbaV0udmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCIsIFwiMTBcIiwgXCIxMVwiLCBcIjEyXCIsIFwiMTNcIiwgXCIxNFwiLCBcIjE1XCIsIFwiMTZcIl07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbldoZWVsT3BlbigpIHtcbiAgICAgICAgbGV0IHByb2R1Y3RJZCA9IHRoaXMuZ2FtZVdoZWVsID8gdGhpcy5fZ2FtZVdoZWVsLnByb2R1Y3RJZCA6IFwiMTEyMzU4XCI7XG4gICAgICAgIEh0dHBBcGkuaHR0cFxuICAgICAgICAgICAgLnBvc3QoXG4gICAgICAgICAgICAgICAgSHR0cEFwaS5zZXJ2ZXIgKyBIdHRwX0NyZWF0Rm9ybSArIGA/JHtgcHJvZHVjdElkPSR7cHJvZHVjdElkfSZxdWFudGl0eT0kezF9YH1gLFxuICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gJ0NvbnRlbnQtVHlwZSc6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogQXBwQ29uc3QuYWNjZXNzVG9rZW4sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAgICAgKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdENvZGUgPSByZXMuZGF0YS5wcm9kdWN0Q29kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdElkID0gcmVzLmRhdGEucHJvZHVjdElkO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcmRlcklkID0gcmVzLmRhdGEub3JkZXJJZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKGVycikgPT4geyB9XG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4geyB9KTtcbiAgICB9XG59XG4iXX0=