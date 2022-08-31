"use strict";
cc._RF.push(module, 'f6f3b8CuGxMcbv8vfgOT8O1', 'CardGet');
// Script/modules/@slotsmaster/ui-common/lib/Card/CardGet.ts

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
exports.CardGet = void 0;
var Popup_1 = require("../Popup");
var CardGet = /** @class */ (function (_super) {
    __extends(CardGet, _super);
    function CardGet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._cardCount = 0;
        _this._initY = 230;
        return _this;
    }
    Object.defineProperty(CardGet.prototype, "basePanel", {
        get: function () {
            return "base";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CardGet.prototype, "animNode", {
        get: function () {
            throw new Error("Method not implemented.");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CardGet.prototype, "buttonOKName", {
        get: function () {
            return "closeButton";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CardGet.prototype, "goldGrowName", {
        get: function () {
            throw new Error("Method not implemented.");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CardGet.prototype, "normalNumName", {
        get: function () {
            throw new Error("Method not implemented.");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CardGet.prototype, "packageResourceName", {
        get: function () {
            return "GameCommon";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CardGet.prototype, "packageName", {
        get: function () {
            return "Common";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CardGet.prototype, "componentName", {
        get: function () {
            return "CardGet";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CardGet.prototype, "closeTime", {
        get: function () {
            return -1;
        },
        enumerable: false,
        configurable: true
    });
    CardGet.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
    };
    CardGet.prototype.getPosX = function () {
        var designSize = cc.view.getDesignResolutionSize().width;
        var visibleSize = cc.view.getVisibleSize().width;
        var size = 960 + (visibleSize - designSize) / 2;
        return size;
    };
    CardGet.prototype.playAction = function () {
        switch (this._cardCount) {
            case 1:
                this.actionOne();
                break;
            case 2:
                this.actionTwo();
                break;
            case 3:
                this.actionThree();
                break;
            case 4:
                this.actionFour();
                break;
            default:
                break;
        }
    };
    CardGet.prototype.actionOne = function () {
        var self = this;
        var item1 = this._base.getChild("0").asCom;
        var callBack = cc.callFunc(function () {
            self.moveAllItemBottom();
        });
        item1.node.runAction(cc.sequence(cc.delayTime(2), callBack));
    };
    CardGet.prototype.actionTwo = function () {
        var self = this;
        var item1 = this._base.getChild("0").asCom;
        var item2 = this._base.getChild("1").asCom;
        var action1 = cc.moveBy(1, -230, 0);
        var action2 = cc.rotateBy(1, -5);
        var action3 = cc.moveBy(1, 230, 0);
        var action4 = cc.rotateBy(1, 5);
        var callBack = cc.callFunc(function () {
            self.moveAllItemBottom();
        });
        item1.node.runAction(cc.spawn(action1, action2));
        item2.node.runAction(cc.sequence(cc.spawn(action3, action4), cc.delayTime(2), callBack));
    };
    CardGet.prototype.actionThree = function () {
        var self = this;
        var item1 = this._base.getChild("0").asCom;
        var item2 = this._base.getChild("1").asCom;
        var action1 = cc.moveBy(1, -458, -30);
        var action2 = cc.rotateBy(1, -5);
        var action3 = cc.moveBy(1, 458, -30);
        var action4 = cc.rotateBy(1, 5);
        var callBack = cc.callFunc(function () {
            self.moveAllItemBottom();
        });
        item1.node.runAction(cc.spawn(action1, action2));
        item2.node.runAction(cc.sequence(cc.spawn(action3, action4), cc.delayTime(2), callBack));
    };
    CardGet.prototype.actionFour = function () {
        this.actionTwo();
        var self = this;
        var item1 = this._base.getChild("2").asCom;
        var item2 = this._base.getChild("3").asCom;
        var action1 = cc.moveBy(1, -458 - 230, -60);
        var action2 = cc.rotateBy(1, -10);
        var action3 = cc.moveBy(1, 458 + 230, -60);
        var action4 = cc.rotateBy(1, 10);
        var callBack = cc.callFunc(function () {
            self.moveAllItemBottom();
        });
        item1.node.runAction(cc.spawn(action1, action2));
        item2.node.runAction(cc.spawn(action3, action4));
    };
    CardGet.prototype.moveAllItemBottom = function () {
        var self = this;
        var designSize = cc.view.getDesignResolutionSize().width;
        var visibleSize = cc.view.getVisibleSize().width;
        var size = 200 + (visibleSize - designSize) / 2;
        var callBack = cc.callFunc(function () {
            self.hide();
        });
        for (var index = 0; index < this._cardCount; index++) {
            var item = this._base.getChild(index.toString()).asCom;
            item.visible = true;
            var action1 = cc.scaleTo(1, 0);
            var action2 = cc.moveTo(1, size, -1000);
            if (index == this._cardCount - 1) {
                item.node.runAction(cc.sequence(cc.spawn(action1, action2), callBack));
            }
            else {
                item.node.runAction(cc.spawn(action1, action2));
            }
        }
    };
    CardGet.prototype.hideItem = function () {
        for (var index = 0; index < 4; index++) {
            var item = this._base.getChild(index.toString()).asCom;
            item.visible = false;
            item.node.scale = 0.8;
            item.node.angle = 0;
            item.node.x = this.getPosX();
            item.node.y = this._initY;
            item.node.stopAllActions();
        }
    };
    CardGet.prototype.setData = function (cardData, callBack) {
        //this._moveClip.node.opacity = 255;
        //console.log(this._moveClip.node.opacity);
        this._cardCount = cardData.length;
        if (this._cardCount <= 0)
            return;
        this._callBack = callBack;
        this._base.getChild("count").asLabel.text = this._cardCount.toString();
        var self = this;
        this.show();
        this.hideItem();
        var isNew = 0;
        for (var index = 0; index < this._cardCount; index++) {
            var item = this._base.getChild(index.toString()).asCom;
            item.visible = true;
            item.getChild("icon").asLoader.url = cardData[index].imageUrl;
            item.getChild("count").asLabel.text = cardData[index].cardCount;
            isNew = cardData[index].isNewCard == true ? 1 : 0;
            item.getController("isNew").setSelectedIndex(isNew);
        }
        //this._moveClip.playing = true;
        //this._moveClip.setPlaySettings(
        //    0,
        //    -1,
        //    1,
        //    -1,
        //    function () {
        //        self._moveClip.node.runAction(cc.fadeOut(0.2));
        //        self._moveClip.playing = false;
        //       self.playAction();
        //    },
        //    this
        // );
    };
    CardGet.prototype.show = function () {
        _super.prototype.show.call(this);
    };
    CardGet.prototype.hide = function () {
        this._callBack();
        _super.prototype.hide.call(this);
    };
    CardGet.prototype.onPlayHideAni = function () { };
    return CardGet;
}(Popup_1.Popup));
exports.CardGet = CardGet;

cc._RF.pop();