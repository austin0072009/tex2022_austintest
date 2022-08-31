"use strict";
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