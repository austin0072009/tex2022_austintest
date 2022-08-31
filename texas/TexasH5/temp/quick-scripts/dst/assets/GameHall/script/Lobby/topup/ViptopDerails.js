
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/topup/ViptopDerails.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1493eTmpnZNEJwJ7FX0kn0e', 'ViptopDerails');
// GameHall/script/Lobby/topup/ViptopDerails.ts

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
/**vip充值详情 */
var ViptopDerails = /** @class */ (function (_super) {
    __extends(ViptopDerails, _super);
    function ViptopDerails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViptopDerails.prototype.onConstruct = function () {
        this.btn_server1 = this.getChild("server1").asButton;
        this.btn_server2 = this.getChild("server2").asButton;
        this.btn_server1.onClick(this.jump1, this);
        this.btn_server2.onClick(this.jump2, this);
    };
    ViptopDerails.prototype.jump1 = function () {
    };
    ViptopDerails.prototype.jump2 = function () {
    };
    return ViptopDerails;
}(fgui.GComponent));
exports.default = ViptopDerails;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXHRvcHVwXFxWaXB0b3BEZXJhaWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGFBQWE7QUFDYjtJQUEyQyxpQ0FBZTtJQUExRDs7SUFtQkEsQ0FBQztJQWZhLG1DQUFXLEdBQXJCO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUNyRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBRXJELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRU0sNkJBQUssR0FBWjtJQUVBLENBQUM7SUFDTSw2QkFBSyxHQUFaO0lBRUEsQ0FBQztJQUVMLG9CQUFDO0FBQUQsQ0FuQkEsQUFtQkMsQ0FuQjBDLElBQUksQ0FBQyxVQUFVLEdBbUJ6RCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKnZpcOWFheWAvOivpuaDhSAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaXB0b3BEZXJhaWxzIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgYnRuX3NlcnZlcjE6IGZndWkuR0J1dHRvbjtcclxuICAgIHByaXZhdGUgYnRuX3NlcnZlcjI6IGZndWkuR0J1dHRvbjtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKSB7XHJcbiAgICAgICAgdGhpcy5idG5fc2VydmVyMSA9IHRoaXMuZ2V0Q2hpbGQoXCJzZXJ2ZXIxXCIpLmFzQnV0dG9uO1xyXG4gICAgICAgIHRoaXMuYnRuX3NlcnZlcjIgPSB0aGlzLmdldENoaWxkKFwic2VydmVyMlwiKS5hc0J1dHRvbjtcclxuXHJcbiAgICAgICAgdGhpcy5idG5fc2VydmVyMS5vbkNsaWNrKHRoaXMuanVtcDEsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYnRuX3NlcnZlcjIub25DbGljayh0aGlzLmp1bXAyLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMganVtcDEoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgcHVibGljIGp1bXAyKCkge1xyXG5cclxuICAgIH1cclxuXHJcbn0iXX0=