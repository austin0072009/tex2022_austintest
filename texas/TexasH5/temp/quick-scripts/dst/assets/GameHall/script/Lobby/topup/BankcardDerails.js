
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/topup/BankcardDerails.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '12b7598JUxFPKUdYb730htY', 'BankcardDerails');
// GameHall/script/Lobby/topup/BankcardDerails.ts

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
/**银行卡充值详情 */
var BankcardDerails = /** @class */ (function (_super) {
    __extends(BankcardDerails, _super);
    function BankcardDerails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BankcardDerails.prototype.onConstruct = function () {
        this.btn_next = this.getChild("n17").asButton;
        this.btn_next.onClick(this.next, this);
        this.numController = this.getController("num");
        this.numInput = this.getChild("n10").asTextInput;
    };
    BankcardDerails.prototype.next = function () {
        console.log("123213213123123");
    };
    return BankcardDerails;
}(fgui.GComponent));
exports.default = BankcardDerails;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXHRvcHVwXFxCYW5rY2FyZERlcmFpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsYUFBYTtBQUNiO0lBQTZDLG1DQUFlO0lBQTVEOztJQW1CQSxDQUFDO0lBVmEscUNBQVcsR0FBckI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUM7SUFDckQsQ0FBQztJQUVNLDhCQUFJLEdBQVg7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUE7SUFDbEMsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FuQkEsQUFtQkMsQ0FuQjRDLElBQUksQ0FBQyxVQUFVLEdBbUIzRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKumTtuihjOWNoeWFheWAvOivpuaDhSAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYW5rY2FyZERlcmFpbHMgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBidG5fbmV4dDogZmd1aS5HQnV0dG9uO1xyXG4gICBcclxuICAgIC8qKuaVsOmHjyAqL1xyXG4gICAgcHJpdmF0ZSBudW1Db250cm9sbGVyOiBmZ3VpLkNvbnRyb2xsZXI7XHJcblxyXG4gICAgLyoq5pWw6YeP6L6T5YWlICovXHJcbiAgICBwcml2YXRlIG51bUlucHV0OiBmZ3VpLkdUZXh0SW5wdXQ7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uQ29uc3RydWN0KCkge1xyXG4gICAgICAgIHRoaXMuYnRuX25leHQgPSB0aGlzLmdldENoaWxkKFwibjE3XCIpLmFzQnV0dG9uO1xyXG4gICAgICAgIHRoaXMuYnRuX25leHQub25DbGljayh0aGlzLm5leHQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubnVtQ29udHJvbGxlciA9IHRoaXMuZ2V0Q29udHJvbGxlcihcIm51bVwiKTtcclxuICAgICAgICB0aGlzLm51bUlucHV0ID0gdGhpcy5nZXRDaGlsZChcIm4xMFwiKS5hc1RleHRJbnB1dDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmV4dCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIjEyMzIxMzIxMzEyMzEyM1wiKVxyXG4gICAgfVxyXG59Il19