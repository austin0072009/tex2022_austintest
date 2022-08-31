"use strict";
cc._RF.push(module, 'c3138TAnaBLx5lP3LrfHXsB', 'MatchItem');
// GameHall/script/Lobby/match/MatchItem.ts

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
/**
 * @description 賽事 item
 */
var MatchItem = /** @class */ (function (_super) {
    __extends(MatchItem, _super);
    function MatchItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatchItem.prototype.onConstruct = function () {
        this.matchName = this.getChild("name").asTextField;
        this.jackpotNum = this.getChild("jack").asTextField;
        this.enrollPlayNum = this.getChild("playNum").asTextField;
        this.matchState = this.getChild("state").asTextField;
        this.year = this.getChild("year").asTextField;
        this.enrollTime = this.getChild("time").asTextField;
        this.free = this.getChild("free").asTextField;
        this.signup = this.getChild("signup").asImage;
        this.colorController = this.getController("color");
    };
    /**设置数据 */
    MatchItem.prototype.setData = function (data) {
        this.data = data;
        var str = data.StartTime.split(" ");
        this.year.text = str[0].slice(str[0].indexOf("-") + 1);
        this.enrollTime.text = str[1].slice(0, str[1].lastIndexOf(":"));
        this.jackpotNum.text = "¥" + this.toThousands(data.prizepool);
        this.enrollPlayNum.text = data.signupcount + "/" + data.maxcount;
        this.matchName.text = data.name;
        this.free.text = data.free[0].name + "*" + data.free[0].num;
        this.signup.visible = data.IsSignup;
        if (!data.cansignup) {
            if (Date.now() < new Date(data.SignupTime).getTime()) { //报名未开始
                this.matchState.text = '報名未開始';
            }
            else {
                this.matchState.text = '報名結束';
            }
        }
        else {
            this.matchState.text = '報名中';
        }
    };
    MatchItem.prototype.toThousands = function (nums) {
        var num = (nums || 0).toString();
        var result = '';
        while (num.length > 3) {
            result = ',' + num.slice(-3) + result;
            num = num.slice(0, num.length - 3);
        }
        if (num) {
            result = num + result;
        }
        return result;
    };
    return MatchItem;
}(fgui.GButton));
exports.default = MatchItem;

cc._RF.pop();