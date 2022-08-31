
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/GiftItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '68b9dlwDfNN+LCnNzzJQlxj', 'GiftItem');
// Script/Common/GiftItem.ts

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
var GiftItem = /** @class */ (function (_super) {
    __extends(GiftItem, _super);
    function GiftItem() {
        return _super.call(this) || this;
    }
    GiftItem.prototype.onConstruct = function () {
        this.loader = this.getChild("loader").asLoader;
    };
    GiftItem.prototype.showGift = function (prefad) {
        this.prefadAni = prefad;
        var sk = cc.instantiate(prefad);
        this.loader.url = "ui://Common/" + prefad.name;
        // this.loader.node.addChild(sk);
        // sk.setPosition(0, 0);
    };
    GiftItem.prototype.createAnimationNode = function () {
        return cc.instantiate(this.prefadAni);
    };
    return GiftItem;
}(fgui.GComponent));
exports.default = GiftItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb21tb25cXEdpZnRJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQXNDLDRCQUFlO0lBQ2pEO2VBQ0ksaUJBQU87SUFDWCxDQUFDO0lBRVMsOEJBQVcsR0FBckI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQ25ELENBQUM7SUFHTSwyQkFBUSxHQUFmLFVBQWdCLE1BQWlCO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsY0FBYyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDL0MsaUNBQWlDO1FBQ2pDLHdCQUF3QjtJQUM1QixDQUFDO0lBRU0sc0NBQW1CLEdBQTFCO1FBQ0ksT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBR0wsZUFBQztBQUFELENBeEJBLEFBd0JDLENBeEJxQyxJQUFJLENBQUMsVUFBVSxHQXdCcEQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBHaWZ0SXRlbSBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBwdWJsaWMgbG9hZGVyOiBmZ3VpLkdMb2FkZXI7XG4gICAgcHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmxvYWRlciA9IHRoaXMuZ2V0Q2hpbGQoXCJsb2FkZXJcIikuYXNMb2FkZXI7XG4gICAgfVxuICAgIHB1YmxpYyBwcmVmYWRBbmk6IGNjLlByZWZhYjtcblxuICAgIHB1YmxpYyBzaG93R2lmdChwcmVmYWQ6IGNjLlByZWZhYikge1xuICAgICAgICB0aGlzLnByZWZhZEFuaSA9IHByZWZhZDtcbiAgICAgICAgbGV0IHNrID0gY2MuaW5zdGFudGlhdGUocHJlZmFkKTtcblxuICAgICAgICB0aGlzLmxvYWRlci51cmwgPSBcInVpOi8vQ29tbW9uL1wiICsgcHJlZmFkLm5hbWU7XG4gICAgICAgIC8vIHRoaXMubG9hZGVyLm5vZGUuYWRkQ2hpbGQoc2spO1xuICAgICAgICAvLyBzay5zZXRQb3NpdGlvbigwLCAwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlQW5pbWF0aW9uTm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIGNjLmluc3RhbnRpYXRlKHRoaXMucHJlZmFkQW5pKTtcbiAgICB9XG5cblxufSJdfQ==