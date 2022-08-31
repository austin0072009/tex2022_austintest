"use strict";
cc._RF.push(module, 'fa22aMk1/pLDJ+//0w5+dAN', 'PayTable');
// Script/Common/PayTable.ts

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
var SoundMgr_1 = require("../modules/@mogafa/utils/lib/SoundMgr");
var Utils_1 = require("../modules/@mogafa/utils/lib/Utils");
var Popup_1 = require("../modules/@slotsmaster/ui-common/lib/Popup");
var PayTable = /** @class */ (function (_super) {
    __extends(PayTable, _super);
    function PayTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._curBet = 0;
        return _this;
    }
    Object.defineProperty(PayTable.prototype, "curBet", {
        set: function (value) {
            this._curBet = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PayTable.prototype, "animNode", {
        get: function () {
            throw new Error("Method not implemented.");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PayTable.prototype, "buttonOKName", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PayTable.prototype, "goldGrowName", {
        get: function () {
            throw new Error("Method not implemented.");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PayTable.prototype, "normalNumName", {
        get: function () {
            throw new Error("Method not implemented.");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PayTable.prototype, "payTableListName", {
        get: function () {
            return "list";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PayTable.prototype, "backToGameButtonName", {
        get: function () {
            return "backToGame";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PayTable.prototype, "openRightPageButtonName", {
        get: function () {
            return "openRightPage";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PayTable.prototype, "openLeftPageButtonName", {
        get: function () {
            return "openLeftPage";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PayTable.prototype, "showPayTableEvent", {
        get: function () {
            return "showPayTable";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PayTable.prototype, "closeTime", {
        get: function () {
            return -1;
        },
        enumerable: false,
        configurable: true
    });
    PayTable.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this._view = this.fguiComponent;
        this.node.on(this.showPayTableEvent, this.show, this);
        if (this.payTableListName) {
            this.payTableList = this.getChild(this.payTableListName).asList;
            this._curIndex = this.payTableList.getFirstChildInView();
        }
        if (this.backToGameButtonName) {
            this.backToGameButton = this.getChild(this.backToGameButtonName).asButton;
            this.backToGameButton.onClick(this.onBackToGameClick.bind(this));
        }
        if (this.openRightPageButtonName) {
            this.openRightPageButton = this.getChild(this.openRightPageButtonName).asButton;
            this.openRightPageButton.onClick(this.onOpenLeftPageClick.bind(this));
        }
        if (this.openLeftPageButtonName) {
            this.openLeftPageButton = this.getChild(this.openLeftPageButtonName).asButton;
            this.openLeftPageButton.onClick(this.onOpenRightPageClick.bind(this));
        }
    };
    PayTable.prototype.onBackToGameClick = function (listener, target) {
        SoundMgr_1.default.getInstance().playEffect("button");
        this.payTableList.scrollToView(0);
        this._curIndex = 0;
        _super.prototype.hide.call(this);
    };
    PayTable.prototype.onOpenRightPageClick = function (listener, target) {
        SoundMgr_1.default.getInstance().playEffect("button");
        this._curIndex = this.payTableList.scrollPane.currentPageX;
        this._curIndex--;
        if (this._curIndex >= 0) {
            this.jumpPointItem();
        }
    };
    PayTable.prototype.onOpenLeftPageClick = function (listener, target) {
        SoundMgr_1.default.getInstance().playEffect("button");
        this._curIndex = this.payTableList.scrollPane.currentPageX;
        this._curIndex++;
        if (this._curIndex <= this.payTableList.numChildren) {
            this.jumpPointItem();
        }
    };
    PayTable.prototype.jumpPointItem = function () {
        this.payTableList.scrollToView(this._curIndex, true);
        this.payTableList.itemIndexToChildIndex(this._curIndex);
    };
    PayTable.prototype.setData = function (json, curBets) {
        if (!json)
            return;
        this._json = json;
        this._curBet = curBets;
        var payTableTable = json.config;
        for (var i = 0; i < this.payTableList.numItems; i++) {
            var element = this.payTableList._children[i].asCom;
            if (element.name == "payTable") {
                var payTableTableData = payTableTable.payTable;
                var labelGroup = element.getChild("payTableData").asCom;
                for (var j = 0; j < labelGroup.numChildren; j++) {
                    //* 根据棋子的编码对应paytable返回数据的下标
                    var index = parseInt(labelGroup._children[j].name);
                    var revKey = Object.keys(payTableTableData[index]).reverse();
                    var str = "";
                    for (var k = 0; k < revKey.length; k++) {
                        str =
                            str +
                                revKey[k] +
                                "=" +
                                Utils_1.Utils.numToCountingNnit(payTableTableData[index][revKey[k]] * curBets / payTableTable.linecount) +
                                "\n"; // cc.cdd.MgrUser.curBets
                    }
                    labelGroup._children[j].text = str;
                }
            }
            if (element.name == "scatterMap") {
                var scatterMap = payTableTable.scatterMap;
                if (scatterMap) {
                    var labelGroup1 = element.getChild("scatterMapData").asCom;
                    for (var a = 0; a < labelGroup1.numChildren; a++) {
                        var index = parseInt(labelGroup1._children[a].name);
                        var data2 = scatterMap[index];
                        labelGroup1._children[a].text = data2;
                    }
                }
            }
            if (element.name == "jpMultipleMap") {
                var jpMultipleMap = payTableTable.jpMultipleMap;
                if (jpMultipleMap) {
                    var labelGroup2 = element.getChild("jpMultipleMapData").asCom;
                    for (var a = 0; a < labelGroup2.numChildren; a++) {
                        var index = parseInt(labelGroup2._children[a].name);
                        var data2 = jpMultipleMap[index];
                        labelGroup2._children[a].text = data2;
                    }
                }
            }
            if (element.name == "zuesFeature") {
                var zuesFeature = payTableTable.zuesFeature;
                if (zuesFeature) {
                    var labelGroup2 = element.getChild("zuesFeatureData").asCom;
                    for (var a = 0; a < labelGroup2.numChildren; a++) {
                        var index = parseInt(labelGroup2._children[a].name);
                        var data2 = zuesFeature[index];
                        labelGroup2._children[a].text = data2;
                    }
                }
            }
            if (element.name == "jackpot") {
                var jackpotData = payTableTable.jackpotData;
                if (jackpotData) {
                    var labelGroup2 = element.getChild("jackpotData").asCom;
                    for (var a = 0; a < labelGroup2.numChildren; a++) {
                        var index = parseInt(labelGroup2._children[a].name);
                        var data2 = jackpotData[a];
                        labelGroup2._children[a].text = data2;
                    }
                }
            }
        }
    };
    PayTable.prototype.setPayTable = function () { };
    PayTable.prototype.show = function () {
        this.setData(this._json, this._curBet);
        _super.prototype.show.call(this);
    };
    return PayTable;
}(Popup_1.Popup));
exports.default = PayTable;

cc._RF.pop();