
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/GMPopup.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '94e79AgGQ5H+KBA/J2mkJ/W', 'GMPopup');
// Script/Common/GMPopup.ts

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
exports.GMPopup = void 0;
/*
 * @Description: Gm命令
 * @Version: CocosCreator V2.2.2
 * @Autor: sin2021
 * @Date: 2020-04-22 11:11:36
 * @LastEditors: sin2021
 * @LastEditTime: 2020-09-03 14:11:59
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var GMPopup = /** @class */ (function (_super) {
    __extends(GMPopup, _super);
    function GMPopup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.timeArray = [];
        return _this;
    }
    GMPopup.prototype.onLoad = function () {
        this.input = this.node.getChildByName("editBox").getComponent(cc.EditBox);
        this.node.zIndex = 100;
        if (cc.sys.os === cc.sys.OS_ANDROID || cc.sys.os === cc.sys.OS_IOS) {
            this.node.active = false;
        }
        else {
            this.node.active = true;
        }
    };
    GMPopup.prototype.clearEdit = function () {
        this.input.string = "";
    };
    GMPopup.prototype.close = function () {
        this.node.active = false;
    };
    GMPopup.prototype.show = function () {
        this.node.active = true;
    };
    GMPopup.prototype.inputText = function () {
        if (this.input && this.input != undefined)
            return this.gmCode(this.input.string);
    };
    GMPopup.prototype.testEditStrToArr = function (newStr) {
        var arr = newStr;
        if (newStr == undefined) {
            hands = [];
        }
        else {
            var splitOneArr = arr.split("|");
            var hands = [];
            this.curSpinLength = splitOneArr[0].length + 1;
            if (splitOneArr.length > 1) {
                var splitTwoArr = splitOneArr[0].split("&");
                if (splitOneArr[0].length < arr.length) {
                    arr = arr.substring(splitOneArr[0].length);
                }
                else {
                    arr = "";
                }
                for (var j = 0; j < splitTwoArr.length; j++) {
                    var hand = splitTwoArr[j].split(",");
                    for (var k = 0; k < hand.length; k++) {
                        hand[k] = Number(hand[k]);
                    }
                    hands.push(hand);
                }
            }
            if (hands.length == 0) {
                var newHand = splitOneArr[0].split(",");
                var newHandArr = [];
                for (var k = 0; k < newHand.length; k++) {
                    newHandArr.push(Number(newHand[k]));
                }
                hands.push(newHandArr);
            }
        }
        return hands;
    };
    GMPopup.prototype.testEditDelte = function () {
        if (this.input && this.input != undefined)
            this.input.string = "";
    };
    GMPopup.prototype.gmCode = function (str) {
        var hand = [];
        var hands = [];
        if (str === "") {
            hands = [];
        }
        else {
            var splitStrArr = str.split("|");
            if (splitStrArr.length > 0) {
                hand = splitStrArr
                    .slice(0, 1)
                    .join(",")
                    .split(",")
                    .map(function (item) { return Number(item); });
                hands.push(hand);
                this.input.string = splitStrArr.slice(1, splitStrArr.length).join("|");
            }
            else {
                hands = [];
            }
        }
        return hands;
    };
    GMPopup = __decorate([
        ccclass
    ], GMPopup);
    return GMPopup;
}(cc.Component));
exports.GMPopup = GMPopup;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb21tb25cXEdNUG9wdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0dBT0c7QUFDRyxJQUFBLEtBQThCLEVBQUUsQ0FBQyxVQUFVLEVBQXpDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLElBQUksVUFBa0IsQ0FBQztBQUVsRDtJQUE2QiwyQkFBWTtJQUF6QztRQUFBLHFFQTRGQztRQTFGVyxlQUFTLEdBQWtCLEVBQUUsQ0FBQzs7SUEwRjFDLENBQUM7SUF2Rkcsd0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDdkIsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUNoRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDNUI7YUFBTTtZQUNILElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUMzQjtJQUNMLENBQUM7SUFFRCwyQkFBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCx1QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFRCxzQkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxN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SCxJQUFJLFdBQVcsR0FBYSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzNDLElBQUksV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3hCLElBQUksR0FBRyxXQUFXO3FCQUNiLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3FCQUNYLElBQUksQ0FBQyxHQUFHLENBQUM7cUJBQ1QsS0FBSyxDQUFDLEdBQUcsQ0FBQztxQkFDVixHQUFHLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQVosQ0FBWSxDQUFDLENBQUM7Z0JBQ2pDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDMUU7aUJBQU07Z0JBQ0gsS0FBSyxHQUFHLEVBQUUsQ0FBQzthQUNkO1NBQ0o7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBM0ZRLE9BQU87UUFEbkIsT0FBTztPQUNLLE9BQU8sQ0E0Rm5CO0lBQUQsY0FBQztDQTVGRCxBQTRGQyxDQTVGNEIsRUFBRSxDQUFDLFNBQVMsR0E0RnhDO0FBNUZZLDBCQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBEZXNjcmlwdGlvbjogR23lkb3ku6RcbiAqIEBWZXJzaW9uOiBDb2Nvc0NyZWF0b3IgVjIuMi4yXG4gKiBAQXV0b3I6IHNpbjIwMjFcbiAqIEBEYXRlOiAyMDIwLTA0LTIyIDExOjExOjM2XG4gKiBATGFzdEVkaXRvcnM6IHNpbjIwMjFcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjAtMDktMDMgMTQ6MTE6NTlcbiAqL1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgbWVudSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgR01Qb3B1cCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBjdXJTcGluTGVuZ3RoOiBudW1iZXI7XG4gICAgcHJpdmF0ZSB0aW1lQXJyYXk6IEFycmF5PG51bWJlcj4gPSBbXTtcbiAgICBwcml2YXRlIGlucHV0OiBjYy5FZGl0Qm94O1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmlucHV0ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZWRpdEJveFwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCk7XG4gICAgICAgIHRoaXMubm9kZS56SW5kZXggPSAxMDA7XG4gICAgICAgIGlmIChjYy5zeXMub3MgPT09IGNjLnN5cy5PU19BTkRST0lEIHx8IGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX0lPUykge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhckVkaXQoKSB7XG4gICAgICAgIHRoaXMuaW5wdXQuc3RyaW5nID0gXCJcIjtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIGlucHV0VGV4dCgpOiBBcnJheTxudW1iZXIgfCBzdHJpbmc+W10ge1xuICAgICAgICBpZiAodGhpcy5pbnB1dCAmJiB0aGlzLmlucHV0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXMuZ21Db2RlKHRoaXMuaW5wdXQuc3RyaW5nKTtcbiAgICB9XG5cbiAgICB0ZXN0RWRpdFN0clRvQXJyKG5ld1N0cikge1xuICAgICAgICBsZXQgYXJyID0gbmV3U3RyO1xuICAgICAgICBpZiAobmV3U3RyID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaGFuZHMgPSBbXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBzcGxpdE9uZUFyciA9IGFyci5zcGxpdChcInxcIik7XG4gICAgICAgICAgICB2YXIgaGFuZHMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuY3VyU3Bpbkxlbmd0aCA9IHNwbGl0T25lQXJyWzBdLmxlbmd0aCArIDE7XG4gICAgICAgICAgICBpZiAoc3BsaXRPbmVBcnIubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGxldCBzcGxpdFR3b0FyciA9IHNwbGl0T25lQXJyWzBdLnNwbGl0KFwiJlwiKTtcbiAgICAgICAgICAgICAgICBpZiAoc3BsaXRPbmVBcnJbMF0ubGVuZ3RoIDwgYXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBhcnIgPSBhcnIuc3Vic3RyaW5nKHNwbGl0T25lQXJyWzBdLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYXJyID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzcGxpdFR3b0Fyci5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaGFuZCA9IHNwbGl0VHdvQXJyW2pdLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBoYW5kLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kW2tdID0gTnVtYmVyKGhhbmRba10pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGhhbmRzLnB1c2goaGFuZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaGFuZHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3SGFuZCA9IHNwbGl0T25lQXJyWzBdLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3SGFuZEFyciA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbmV3SGFuZC5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBuZXdIYW5kQXJyLnB1c2goTnVtYmVyKG5ld0hhbmRba10pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaGFuZHMucHVzaChuZXdIYW5kQXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGFuZHM7XG4gICAgfVxuXG4gICAgdGVzdEVkaXREZWx0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXQgJiYgdGhpcy5pbnB1dCAhPSB1bmRlZmluZWQpIHRoaXMuaW5wdXQuc3RyaW5nID0gXCJcIjtcbiAgICB9XG5cbiAgICBnbUNvZGUoc3RyOiBzdHJpbmcpOiBudW1iZXJbXVtdIHtcbiAgICAgICAgbGV0IGhhbmQ6IG51bWJlcltdID0gW107XG4gICAgICAgIGxldCBoYW5kczogbnVtYmVyW11bXSA9IFtdO1xuICAgICAgICBpZiAoc3RyID09PSBcIlwiKSB7XG4gICAgICAgICAgICBoYW5kcyA9IFtdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHNwbGl0U3RyQXJyOiBzdHJpbmdbXSA9IHN0ci5zcGxpdChcInxcIik7XG4gICAgICAgICAgICBpZiAoc3BsaXRTdHJBcnIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGhhbmQgPSBzcGxpdFN0ckFyclxuICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgMSlcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oXCIsXCIpXG4gICAgICAgICAgICAgICAgICAgIC5zcGxpdChcIixcIilcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoaXRlbSkgPT4gTnVtYmVyKGl0ZW0pKTtcbiAgICAgICAgICAgICAgICBoYW5kcy5wdXNoKGhhbmQpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXQuc3RyaW5nID0gc3BsaXRTdHJBcnIuc2xpY2UoMSwgc3BsaXRTdHJBcnIubGVuZ3RoKS5qb2luKFwifFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaGFuZHMgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGFuZHM7XG4gICAgfVxufVxuIl19