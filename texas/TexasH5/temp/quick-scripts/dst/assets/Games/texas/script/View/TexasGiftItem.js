
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/texas/script/View/TexasGiftItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a267cb5mmlJULa7GoPgpw/m', 'TexasGiftItem');
// Games/texas/script/View/TexasGiftItem.ts

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
var TexasGiftItem = /** @class */ (function (_super) {
    __extends(TexasGiftItem, _super);
    function TexasGiftItem() {
        return _super.call(this) || this;
    }
    // private loader: fgui.GLoader;
    TexasGiftItem.prototype.onConstruct = function () {
        // this.loader = this.getChild("loader").asLoader;
    };
    TexasGiftItem.prototype.showGift = function (prefad) {
        this.prefadAni = prefad;
        var sk = cc.instantiate(prefad);
        // this.loader.node.addChild(sk);
        // sk.setPosition(0, 0);
    };
    TexasGiftItem.prototype.createAnimationNode = function () {
        return cc.instantiate(this.prefadAni);
    };
    return TexasGiftItem;
}(fgui.GComponent));
exports.default = TexasGiftItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXHRleGFzXFxzY3JpcHRcXFZpZXdcXFRleGFzR2lmdEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBMkMsaUNBQWU7SUFDdEQ7ZUFDSSxpQkFBTztJQUNYLENBQUM7SUFDRCxnQ0FBZ0M7SUFDdEIsbUNBQVcsR0FBckI7UUFDSSxrREFBa0Q7SUFDdEQsQ0FBQztJQUdNLGdDQUFRLEdBQWYsVUFBZ0IsTUFBaUI7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDeEIsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxpQ0FBaUM7UUFDakMsd0JBQXdCO0lBQzVCLENBQUM7SUFFTSwyQ0FBbUIsR0FBMUI7UUFDSSxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFHTCxvQkFBQztBQUFELENBdEJBLEFBc0JDLENBdEIwQyxJQUFJLENBQUMsVUFBVSxHQXNCekQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBUZXhhc0dpZnRJdGVtIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIC8vIHByaXZhdGUgbG9hZGVyOiBmZ3VpLkdMb2FkZXI7XG4gICAgcHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6IHZvaWQge1xuICAgICAgICAvLyB0aGlzLmxvYWRlciA9IHRoaXMuZ2V0Q2hpbGQoXCJsb2FkZXJcIikuYXNMb2FkZXI7XG4gICAgfVxuICAgIHB1YmxpYyBwcmVmYWRBbmk6IGNjLlByZWZhYjtcblxuICAgIHB1YmxpYyBzaG93R2lmdChwcmVmYWQ6IGNjLlByZWZhYikge1xuICAgICAgICB0aGlzLnByZWZhZEFuaSA9IHByZWZhZDtcbiAgICAgICAgbGV0IHNrID0gY2MuaW5zdGFudGlhdGUocHJlZmFkKTtcbiAgICAgICAgLy8gdGhpcy5sb2FkZXIubm9kZS5hZGRDaGlsZChzayk7XG4gICAgICAgIC8vIHNrLnNldFBvc2l0aW9uKDAsIDApO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGVBbmltYXRpb25Ob2RlKCkge1xuICAgICAgICByZXR1cm4gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVmYWRBbmkpO1xuICAgIH1cblxuXG59Il19