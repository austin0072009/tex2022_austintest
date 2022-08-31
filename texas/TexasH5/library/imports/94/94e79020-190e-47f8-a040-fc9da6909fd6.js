"use strict";
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