
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/topup/ZfbDerails.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c9936ck/z9De5OCBAN69faq', 'ZfbDerails');
// GameHall/script/Lobby/topup/ZfbDerails.ts

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
/**支付宝充值详情 */
var ZfbDerails = /** @class */ (function (_super) {
    __extends(ZfbDerails, _super);
    function ZfbDerails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZfbDerails.prototype.onConstruct = function () {
        this.btn_next = this.getChild("n17").asButton;
        this.btn_next.onClick(this.next, this);
        this.typeController = this.getController("type");
        this.numController = this.getController("num");
        this.numInput = this.getChild("n10").asTextInput;
    };
    ZfbDerails.prototype.next = function () {
        console.log("123213213123123");
        var type = this.typeController.selectedIndex;
        if (type == 0) {
            return;
        }
        var num = this.numController.selectedIndex;
        var inputNum = this.numInput.text;
    };
    return ZfbDerails;
}(fgui.GComponent));
exports.default = ZfbDerails;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXHRvcHVwXFxaZmJEZXJhaWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGFBQWE7QUFDYjtJQUF3Qyw4QkFBZTtJQUF2RDs7SUE0QkEsQ0FBQztJQWxCYSxnQ0FBVyxHQUFyQjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUM7SUFDckQsQ0FBQztJQUVNLHlCQUFJLEdBQVg7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUE7UUFDOUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUM7UUFDN0MsSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFO1lBQ1gsT0FBTztTQUNWO1FBQ0QsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFFdEMsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0E1QkEsQUE0QkMsQ0E1QnVDLElBQUksQ0FBQyxVQUFVLEdBNEJ0RCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKuaUr+S7mOWuneWFheWAvOivpuaDhSAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBaZmJEZXJhaWxzIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgYnRuX25leHQ6IGZndWkuR0J1dHRvbjtcclxuICAgIC8qKuexu+WeiyAgKi9cclxuICAgIHByaXZhdGUgdHlwZUNvbnRyb2xsZXI6IGZndWkuQ29udHJvbGxlcjtcclxuICAgIC8qKuaVsOmHjyAqL1xyXG4gICAgcHJpdmF0ZSBudW1Db250cm9sbGVyOiBmZ3VpLkNvbnRyb2xsZXI7XHJcblxyXG4gICAgLyoq5pWw6YeP6L6T5YWlICovXHJcbiAgICBwcml2YXRlIG51bUlucHV0OiBmZ3VpLkdUZXh0SW5wdXQ7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uQ29uc3RydWN0KCkge1xyXG4gICAgICAgIHRoaXMuYnRuX25leHQgPSB0aGlzLmdldENoaWxkKFwibjE3XCIpLmFzQnV0dG9uO1xyXG4gICAgICAgIHRoaXMuYnRuX25leHQub25DbGljayh0aGlzLm5leHQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudHlwZUNvbnRyb2xsZXIgPSB0aGlzLmdldENvbnRyb2xsZXIoXCJ0eXBlXCIpO1xyXG4gICAgICAgIHRoaXMubnVtQ29udHJvbGxlciA9IHRoaXMuZ2V0Q29udHJvbGxlcihcIm51bVwiKTtcclxuICAgICAgICB0aGlzLm51bUlucHV0ID0gdGhpcy5nZXRDaGlsZChcIm4xMFwiKS5hc1RleHRJbnB1dDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmV4dCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIjEyMzIxMzIxMzEyMzEyM1wiKVxyXG4gICAgICAgIGxldCB0eXBlID0gdGhpcy50eXBlQ29udHJvbGxlci5zZWxlY3RlZEluZGV4O1xyXG4gICAgICAgIGlmICh0eXBlID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbnVtID0gdGhpcy5udW1Db250cm9sbGVyLnNlbGVjdGVkSW5kZXg7XHJcbiAgICAgICAgbGV0IGlucHV0TnVtID0gdGhpcy5udW1JbnB1dC50ZXh0O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59Il19