
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@slotsmaster/ui-common/lib/Card/CardGet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAc2xvdHNtYXN0ZXJcXHVpLWNvbW1vblxcbGliXFxDYXJkXFxDYXJkR2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrQ0FBaUM7QUFFakM7SUFBNkIsMkJBQUs7SUFBbEM7UUFBQSxxRUE2TEM7UUFoS1csZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFFdkIsWUFBTSxHQUFXLEdBQUcsQ0FBQzs7SUE4SmpDLENBQUM7SUE1TEcsc0JBQWMsOEJBQVM7YUFBdkI7WUFDSSxPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDOzs7T0FBQTtJQUNELHNCQUFjLDZCQUFRO2FBQXRCO1lBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQy9DLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWMsaUNBQVk7YUFBMUI7WUFDSSxPQUFPLGFBQWEsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUNELHNCQUFjLGlDQUFZO2FBQTFCO1lBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQy9DLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWMsa0NBQWE7YUFBM0I7WUFDSSxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDL0MsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYyx3Q0FBbUI7YUFBakM7WUFDSSxPQUFPLFlBQVksQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUNELHNCQUFjLGdDQUFXO2FBQXpCO1lBQ0ksT0FBTyxRQUFRLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYyxrQ0FBYTthQUEzQjtZQUNJLE9BQU8sU0FBUyxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksOEJBQVM7YUFBYjtZQUNJLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDZCxDQUFDOzs7T0FBQTtJQUtTLHVDQUFxQixH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QztBQTdMWSwwQkFBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvcHVwIH0gZnJvbSBcIi4uL1BvcHVwXCI7XG5cbmV4cG9ydCBjbGFzcyBDYXJkR2V0IGV4dGVuZHMgUG9wdXAge1xuICAgIHByb3RlY3RlZCBnZXQgYmFzZVBhbmVsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcImJhc2VcIjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBhbmltTm9kZSgpOiBjYy5Ob2RlW10ge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBidXR0b25PS05hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiY2xvc2VCdXR0b25cIjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBnb2xkR3Jvd05hbWUoKTogc3RyaW5nW10ge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBub3JtYWxOdW1OYW1lKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgcGFja2FnZVJlc291cmNlTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJHYW1lQ29tbW9uXCI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgcGFja2FnZU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiQ29tbW9uXCI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgY29tcG9uZW50TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJDYXJkR2V0XCI7XG4gICAgfVxuICAgIGdldCBjbG9zZVRpbWUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBwcml2YXRlIF9tb3ZlQ2xpcDogZmd1aS5HTW92aWVDbGlwO1xuICAgIHByaXZhdGUgX2NhcmRDb3VudDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9jYWxsQmFjazogRnVuY3Rpb247XG4gICAgcHJpdmF0ZSBfaW5pdFk6IG51bWJlciA9IDIzMDtcbiAgICBwcm90ZWN0ZWQgY3JlYXRlQ2hpbGRDb21wb25lbnRzKCkge1xuICAgICAgICBzdXBlci5jcmVhdGVDaGlsZENvbXBvbmVudHMoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRQb3NYKCk6IG51bWJlciB7XG4gICAgICAgIGxldCBkZXNpZ25TaXplID0gY2Mudmlldy5nZXREZXNpZ25SZXNvbHV0aW9uU2l6ZSgpLndpZHRoO1xuICAgICAgICBsZXQgdmlzaWJsZVNpemUgPSBjYy52aWV3LmdldFZpc2libGVTaXplKCkud2lkdGg7XG4gICAgICAgIGxldCBzaXplID0gOTYwICsgKHZpc2libGVTaXplIC0gZGVzaWduU2l6ZSkgLyAyO1xuICAgICAgICByZXR1cm4gc2l6ZTtcbiAgICB9XG4gICAgcHJpdmF0ZSBwbGF5QWN0aW9uKCk6IHZvaWQge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuX2NhcmRDb3VudCkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uT25lKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25Ud28oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvblRocmVlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25Gb3VyKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgYWN0aW9uT25lKCk6IHZvaWQge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBpdGVtMSA9IHRoaXMuX2Jhc2UuZ2V0Q2hpbGQoXCIwXCIpLmFzQ29tO1xuICAgICAgICBsZXQgY2FsbEJhY2sgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLm1vdmVBbGxJdGVtQm90dG9tKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpdGVtMS5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMiksIGNhbGxCYWNrKSk7XG4gICAgfVxuICAgIHByaXZhdGUgYWN0aW9uVHdvKCk6IHZvaWQge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBpdGVtMSA9IHRoaXMuX2Jhc2UuZ2V0Q2hpbGQoXCIwXCIpLmFzQ29tO1xuICAgICAgICBsZXQgaXRlbTIgPSB0aGlzLl9iYXNlLmdldENoaWxkKFwiMVwiKS5hc0NvbTtcbiAgICAgICAgbGV0IGFjdGlvbjEgPSBjYy5tb3ZlQnkoMSwgLTIzMCwgMCk7XG4gICAgICAgIGxldCBhY3Rpb24yID0gY2Mucm90YXRlQnkoMSwgLTUpO1xuICAgICAgICBsZXQgYWN0aW9uMyA9IGNjLm1vdmVCeSgxLCAyMzAsIDApO1xuICAgICAgICBsZXQgYWN0aW9uNCA9IGNjLnJvdGF0ZUJ5KDEsIDUpO1xuXG4gICAgICAgIGxldCBjYWxsQmFjayA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYubW92ZUFsbEl0ZW1Cb3R0b20oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGl0ZW0xLm5vZGUucnVuQWN0aW9uKGNjLnNwYXduKGFjdGlvbjEsIGFjdGlvbjIpKTtcbiAgICAgICAgaXRlbTIubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2Muc3Bhd24oYWN0aW9uMywgYWN0aW9uNCksIGNjLmRlbGF5VGltZSgyKSwgY2FsbEJhY2spKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBhY3Rpb25UaHJlZSgpOiB2b2lkIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgaXRlbTEgPSB0aGlzLl9iYXNlLmdldENoaWxkKFwiMFwiKS5hc0NvbTtcbiAgICAgICAgbGV0IGl0ZW0yID0gdGhpcy5fYmFzZS5nZXRDaGlsZChcIjFcIikuYXNDb207XG4gICAgICAgIGxldCBhY3Rpb24xID0gY2MubW92ZUJ5KDEsIC00NTgsIC0zMCk7XG4gICAgICAgIGxldCBhY3Rpb24yID0gY2Mucm90YXRlQnkoMSwgLTUpO1xuICAgICAgICBsZXQgYWN0aW9uMyA9IGNjLm1vdmVCeSgxLCA0NTgsIC0zMCk7XG4gICAgICAgIGxldCBhY3Rpb240ID0gY2Mucm90YXRlQnkoMSwgNSk7XG5cbiAgICAgICAgbGV0IGNhbGxCYWNrID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5tb3ZlQWxsSXRlbUJvdHRvbSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgaXRlbTEubm9kZS5ydW5BY3Rpb24oY2Muc3Bhd24oYWN0aW9uMSwgYWN0aW9uMikpO1xuICAgICAgICBpdGVtMi5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5zcGF3bihhY3Rpb24zLCBhY3Rpb240KSwgY2MuZGVsYXlUaW1lKDIpLCBjYWxsQmFjaykpO1xuICAgIH1cbiAgICBwcml2YXRlIGFjdGlvbkZvdXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWN0aW9uVHdvKCk7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IGl0ZW0xID0gdGhpcy5fYmFzZS5nZXRDaGlsZChcIjJcIikuYXNDb207XG4gICAgICAgIGxldCBpdGVtMiA9IHRoaXMuX2Jhc2UuZ2V0Q2hpbGQoXCIzXCIpLmFzQ29tO1xuICAgICAgICBsZXQgYWN0aW9uMSA9IGNjLm1vdmVCeSgxLCAtNDU4IC0gMjMwLCAtNjApO1xuICAgICAgICBsZXQgYWN0aW9uMiA9IGNjLnJvdGF0ZUJ5KDEsIC0xMCk7XG4gICAgICAgIGxldCBhY3Rpb24zID0gY2MubW92ZUJ5KDEsIDQ1OCArIDIzMCwgLTYwKTtcbiAgICAgICAgbGV0IGFjdGlvbjQgPSBjYy5yb3RhdGVCeSgxLCAxMCk7XG5cbiAgICAgICAgbGV0IGNhbGxCYWNrID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5tb3ZlQWxsSXRlbUJvdHRvbSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgaXRlbTEubm9kZS5ydW5BY3Rpb24oY2Muc3Bhd24oYWN0aW9uMSwgYWN0aW9uMikpO1xuICAgICAgICBpdGVtMi5ub2RlLnJ1bkFjdGlvbihjYy5zcGF3bihhY3Rpb24zLCBhY3Rpb240KSk7XG4gICAgfVxuICAgIHByaXZhdGUgbW92ZUFsbEl0ZW1Cb3R0b20oKTogdm9pZCB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IGRlc2lnblNpemUgPSBjYy52aWV3LmdldERlc2lnblJlc29sdXRpb25TaXplKCkud2lkdGg7XG4gICAgICAgIGxldCB2aXNpYmxlU2l6ZSA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKS53aWR0aDtcbiAgICAgICAgbGV0IHNpemUgPSAyMDAgKyAodmlzaWJsZVNpemUgLSBkZXNpZ25TaXplKSAvIDI7XG4gICAgICAgIGxldCBjYWxsQmFjayA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYuaGlkZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX2NhcmRDb3VudDsgaW5kZXgrKykge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLl9iYXNlLmdldENoaWxkKGluZGV4LnRvU3RyaW5nKCkpLmFzQ29tO1xuICAgICAgICAgICAgaXRlbS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBhY3Rpb24xID0gY2Muc2NhbGVUbygxLCAwKTtcbiAgICAgICAgICAgIGxldCBhY3Rpb24yID0gY2MubW92ZVRvKDEsIHNpemUsIC0xMDAwKTtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PSB0aGlzLl9jYXJkQ291bnQgLSAxKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5zcGF3bihhY3Rpb24xLCBhY3Rpb24yKSwgY2FsbEJhY2spKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbS5ub2RlLnJ1bkFjdGlvbihjYy5zcGF3bihhY3Rpb24xLCBhY3Rpb24yKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBoaWRlSXRlbSgpOiB2b2lkIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDQ7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5fYmFzZS5nZXRDaGlsZChpbmRleC50b1N0cmluZygpKS5hc0NvbTtcbiAgICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgaXRlbS5ub2RlLnNjYWxlID0gMC44O1xuICAgICAgICAgICAgaXRlbS5ub2RlLmFuZ2xlID0gMDtcbiAgICAgICAgICAgIGl0ZW0ubm9kZS54ID0gdGhpcy5nZXRQb3NYKCk7XG4gICAgICAgICAgICBpdGVtLm5vZGUueSA9IHRoaXMuX2luaXRZO1xuICAgICAgICAgICAgaXRlbS5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHNldERhdGEoY2FyZERhdGE6IGFueSwgY2FsbEJhY2s6IEZ1bmN0aW9uKSB7XG4gICAgICAgIC8vdGhpcy5fbW92ZUNsaXAubm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuX21vdmVDbGlwLm5vZGUub3BhY2l0eSk7XG4gICAgICAgIHRoaXMuX2NhcmRDb3VudCA9IGNhcmREYXRhLmxlbmd0aDtcbiAgICAgICAgaWYgKHRoaXMuX2NhcmRDb3VudCA8PSAwKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5fY2FsbEJhY2sgPSBjYWxsQmFjaztcbiAgICAgICAgdGhpcy5fYmFzZS5nZXRDaGlsZChcImNvdW50XCIpLmFzTGFiZWwudGV4dCA9IHRoaXMuX2NhcmRDb3VudC50b1N0cmluZygpO1xuXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIHRoaXMuaGlkZUl0ZW0oKTtcbiAgICAgICAgbGV0IGlzTmV3ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX2NhcmRDb3VudDsgaW5kZXgrKykge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLl9iYXNlLmdldENoaWxkKGluZGV4LnRvU3RyaW5nKCkpLmFzQ29tO1xuICAgICAgICAgICAgaXRlbS52aXNpYmxlID0gdHJ1ZTtcblxuICAgICAgICAgICAgaXRlbS5nZXRDaGlsZChcImljb25cIikuYXNMb2FkZXIudXJsID0gY2FyZERhdGFbaW5kZXhdLmltYWdlVXJsO1xuICAgICAgICAgICAgaXRlbS5nZXRDaGlsZChcImNvdW50XCIpLmFzTGFiZWwudGV4dCA9IGNhcmREYXRhW2luZGV4XS5jYXJkQ291bnQ7XG4gICAgICAgICAgICBpc05ldyA9IGNhcmREYXRhW2luZGV4XS5pc05ld0NhcmQgPT0gdHJ1ZSA/IDEgOiAwO1xuICAgICAgICAgICAgaXRlbS5nZXRDb250cm9sbGVyKFwiaXNOZXdcIikuc2V0U2VsZWN0ZWRJbmRleChpc05ldyk7XG4gICAgICAgIH1cblxuICAgICAgICAvL3RoaXMuX21vdmVDbGlwLnBsYXlpbmcgPSB0cnVlO1xuICAgICAgICAvL3RoaXMuX21vdmVDbGlwLnNldFBsYXlTZXR0aW5ncyhcbiAgICAgICAgLy8gICAgMCxcbiAgICAgICAgLy8gICAgLTEsXG4gICAgICAgIC8vICAgIDEsXG4gICAgICAgIC8vICAgIC0xLFxuICAgICAgICAvLyAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vICAgICAgICBzZWxmLl9tb3ZlQ2xpcC5ub2RlLnJ1bkFjdGlvbihjYy5mYWRlT3V0KDAuMikpO1xuICAgICAgICAvLyAgICAgICAgc2VsZi5fbW92ZUNsaXAucGxheWluZyA9IGZhbHNlO1xuICAgICAgICAvLyAgICAgICBzZWxmLnBsYXlBY3Rpb24oKTtcbiAgICAgICAgLy8gICAgfSxcbiAgICAgICAgLy8gICAgdGhpc1xuICAgICAgICAvLyApO1xuICAgIH1cbiAgICBzaG93KCk6IHZvaWQge1xuICAgICAgICBzdXBlci5zaG93KCk7XG4gICAgfVxuICAgIGhpZGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NhbGxCYWNrKCk7XG4gICAgICAgIHN1cGVyLmhpZGUoKTtcbiAgICB9XG4gICAgb25QbGF5SGlkZUFuaSgpOiB2b2lkIHsgfVxufVxuIl19