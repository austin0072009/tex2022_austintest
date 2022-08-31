
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/topup/VirtualDerails.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '23791D7X19Js7szi9+lbHzF', 'VirtualDerails');
// GameHall/script/Lobby/topup/VirtualDerails.ts

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
/**虚拟币充值详情 */
var VirtualDerails = /** @class */ (function (_super) {
    __extends(VirtualDerails, _super);
    function VirtualDerails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VirtualDerails.prototype.onConstruct = function () {
        this.btn_next = this.getChild("n17").asButton;
        this.btn_next.onClick(this.next, this);
        this.numController = this.getController("num");
        this.numInput = this.getChild("n10").asTextInput;
    };
    VirtualDerails.prototype.next = function () {
        console.log("123213213123123");
    };
    return VirtualDerails;
}(fgui.GComponent));
exports.default = VirtualDerails;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXHRvcHVwXFxWaXJ0dWFsRGVyYWlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxhQUFhO0FBQ2I7SUFBNEMsa0NBQWU7SUFBM0Q7O0lBbUJBLENBQUM7SUFWYSxvQ0FBVyxHQUFyQjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQztJQUNyRCxDQUFDO0lBRU0sNkJBQUksR0FBWDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQW5CQSxBQW1CQyxDQW5CMkMsSUFBSSxDQUFDLFVBQVUsR0FtQjFEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoq6Jma5ouf5biB5YWF5YC86K+m5oOFICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpcnR1YWxEZXJhaWxzIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgYnRuX25leHQ6IGZndWkuR0J1dHRvbjtcclxuICAgXHJcbiAgICAvKirmlbDph48gKi9cclxuICAgIHByaXZhdGUgbnVtQ29udHJvbGxlcjogZmd1aS5Db250cm9sbGVyO1xyXG5cclxuICAgIC8qKuaVsOmHj+i+k+WFpSAqL1xyXG4gICAgcHJpdmF0ZSBudW1JbnB1dDogZmd1aS5HVGV4dElucHV0O1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpIHtcclxuICAgICAgICB0aGlzLmJ0bl9uZXh0ID0gdGhpcy5nZXRDaGlsZChcIm4xN1wiKS5hc0J1dHRvbjtcclxuICAgICAgICB0aGlzLmJ0bl9uZXh0Lm9uQ2xpY2sodGhpcy5uZXh0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm51bUNvbnRyb2xsZXIgPSB0aGlzLmdldENvbnRyb2xsZXIoXCJudW1cIik7XHJcbiAgICAgICAgdGhpcy5udW1JbnB1dCA9IHRoaXMuZ2V0Q2hpbGQoXCJuMTBcIikuYXNUZXh0SW5wdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5leHQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIxMjMyMTMyMTMxMjMxMjNcIilcclxuICAgIH1cclxufSJdfQ==