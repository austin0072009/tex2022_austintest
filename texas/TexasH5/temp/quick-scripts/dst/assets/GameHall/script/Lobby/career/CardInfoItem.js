
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/career/CardInfoItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '90759nFhnxEFqyXwS4lG3D8', 'CardInfoItem');
// GameHall/script/Lobby/career/CardInfoItem.ts

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
var UIUtil_1 = require("../../../../Script/Common/UIUtil");
/**@description 我的牌普 item */
var CardInfoItem = /** @class */ (function (_super) {
    __extends(CardInfoItem, _super);
    function CardInfoItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dataInfo = null;
        _this.isDelect = false;
        return _this;
    }
    CardInfoItem.prototype.onConstruct = function () {
        this.selectBtn = this.getChild("n2").asButton;
        this.cardLoader0 = this.getChild("n6").asLoader;
        this.cardLoader1 = this.getChild("n7").asLoader;
        this.cardLoader2 = this.getChild("n8").asLoader;
        this.cardLoader3 = this.getChild("n9").asLoader;
        this.cardLoader4 = this.getChild("n10").asLoader;
        this.cardLoader5 = this.getChild("n11").asLoader;
        this.cardLoader6 = this.getChild("n12").asLoader;
        this.txtWin = this.getChild("n3").asTextField;
        this.cardLoader0.url = "ui://Lobby/101_1";
        this.cardLoader1.url = "ui://Lobby/102_1";
        this.cardLoader2.url = "ui://Lobby/103_1";
        this.cardLoader3.url = "ui://Lobby/104_1";
        this.cardLoader4.url = "ui://Lobby/105_1";
        this.cardLoader5.url = "ui://Lobby/106_1";
        this.cardLoader6.url = "ui://Lobby/107_1";
        this.selectBtn.onClick(this.selectCard, this);
        this.winController = this.getController("win");
        this.typeController = this.getController("type");
        this.editController = this.getController("edit");
    };
    CardInfoItem.prototype.setData = function (data, OwnWin) {
        for (var i = 0; i < 7; i++) {
            // console.error(`ui://Lobby/${data[i]}_1`);
            this["cardLoader" + i].url = "ui://Lobby/" + data[i] + "_1";
        }
        var num = UIUtil_1.UIUtil.formatNumber100(OwnWin);
        this.txtWin.text = num > 0 ? "+" + num : num + "";
        this.winController.setSelectedIndex(OwnWin > 0 ? 1 : 0);
    };
    CardInfoItem.prototype.selectCard = function () {
        this.isDelect = !this.isDelect;
        this.setTypeCon(this.isDelect ? 1 : 0);
    };
    CardInfoItem.prototype.setTypeCon = function (type) {
        this.typeController.setSelectedIndex(type);
    };
    CardInfoItem.prototype.setEditCon = function (index) {
        this.editController.setSelectedIndex(index);
    };
    return CardInfoItem;
}(fgui.GComponent));
exports.default = CardInfoItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXGNhcmVlclxcQ2FyZEluZm9JdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUEwRDtBQUcxRCw0QkFBNEI7QUFDNUI7SUFBMEMsZ0NBQWU7SUFBekQ7UUFBQSxxRUE2REM7UUE1RFUsY0FBUSxHQUFxQixJQUFJLENBQUM7UUFnRGxDLGNBQVEsR0FBWSxLQUFLLENBQUM7O0lBWXJDLENBQUM7SUEvQ2Esa0NBQVcsR0FBckI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQzlDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDaEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUNoRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQ2hELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDaEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUNqRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQ2pELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDakQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUU5QyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQztRQUMxQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQztRQUMxQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQztRQUMxQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQztRQUMxQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQztRQUMxQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQztRQUMxQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQztRQUUxQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFTSw4QkFBTyxHQUFkLFVBQWUsSUFBYyxFQUFFLE1BQWM7UUFDekMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4Qiw0Q0FBNEM7WUFDNUMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsZ0JBQWMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFJLENBQUM7U0FDMUQ7UUFDRCxJQUFJLEdBQUcsR0FBRyxlQUFNLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDbEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFJTSxpQ0FBVSxHQUFqQjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ00saUNBQVUsR0FBakIsVUFBa0IsSUFBWTtRQUMxQixJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDTSxpQ0FBVSxHQUFqQixVQUFrQixLQUFhO1FBQzNCLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0E3REEsQUE2REMsQ0E3RHlDLElBQUksQ0FBQyxVQUFVLEdBNkR4RCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVJVXRpbCB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQ29tbW9uL1VJVXRpbFwiO1xyXG5pbXBvcnQgeyBUZXhhc0NvbGxlY3RMaXN0IH0gZnJvbSBcIi4vQ2FyZWVyTmV0RGF0YVN0cnVjdFwiO1xyXG5cclxuLyoqQGRlc2NyaXB0aW9uIOaIkeeahOeJjOaZriBpdGVtICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmRJbmZvSXRlbSBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgZGF0YUluZm86IFRleGFzQ29sbGVjdExpc3QgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RCdG46IGZndWkuR0J1dHRvbjtcclxuICAgIHByaXZhdGUgdHh0V2luOiBmZ3VpLkdUZXh0RmllbGQ7XHJcbiAgICBwcml2YXRlIGNhcmRMb2FkZXIwOiBmZ3VpLkdMb2FkZXI7XHJcbiAgICBwcml2YXRlIGNhcmRMb2FkZXIxOiBmZ3VpLkdMb2FkZXI7XHJcbiAgICBwcml2YXRlIGNhcmRMb2FkZXIyOiBmZ3VpLkdMb2FkZXI7XHJcbiAgICBwcml2YXRlIGNhcmRMb2FkZXIzOiBmZ3VpLkdMb2FkZXI7XHJcbiAgICBwcml2YXRlIGNhcmRMb2FkZXI0OiBmZ3VpLkdMb2FkZXI7XHJcbiAgICBwcml2YXRlIGNhcmRMb2FkZXI1OiBmZ3VpLkdMb2FkZXI7XHJcbiAgICBwcml2YXRlIGNhcmRMb2FkZXI2OiBmZ3VpLkdMb2FkZXI7XHJcbiAgICBwcml2YXRlIHdpbkNvbnRyb2xsZXI6IGZndWkuQ29udHJvbGxlcjtcclxuICAgIHByaXZhdGUgdHlwZUNvbnRyb2xsZXI6IGZndWkuQ29udHJvbGxlcjtcclxuICAgIHByaXZhdGUgZWRpdENvbnRyb2xsZXI6IGZndWkuQ29udHJvbGxlcjtcclxuICAgIHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdEJ0biA9IHRoaXMuZ2V0Q2hpbGQoXCJuMlwiKS5hc0J1dHRvbjtcclxuICAgICAgICB0aGlzLmNhcmRMb2FkZXIwID0gdGhpcy5nZXRDaGlsZChcIm42XCIpLmFzTG9hZGVyO1xyXG4gICAgICAgIHRoaXMuY2FyZExvYWRlcjEgPSB0aGlzLmdldENoaWxkKFwibjdcIikuYXNMb2FkZXI7XHJcbiAgICAgICAgdGhpcy5jYXJkTG9hZGVyMiA9IHRoaXMuZ2V0Q2hpbGQoXCJuOFwiKS5hc0xvYWRlcjtcclxuICAgICAgICB0aGlzLmNhcmRMb2FkZXIzID0gdGhpcy5nZXRDaGlsZChcIm45XCIpLmFzTG9hZGVyO1xyXG4gICAgICAgIHRoaXMuY2FyZExvYWRlcjQgPSB0aGlzLmdldENoaWxkKFwibjEwXCIpLmFzTG9hZGVyO1xyXG4gICAgICAgIHRoaXMuY2FyZExvYWRlcjUgPSB0aGlzLmdldENoaWxkKFwibjExXCIpLmFzTG9hZGVyO1xyXG4gICAgICAgIHRoaXMuY2FyZExvYWRlcjYgPSB0aGlzLmdldENoaWxkKFwibjEyXCIpLmFzTG9hZGVyO1xyXG4gICAgICAgIHRoaXMudHh0V2luID0gdGhpcy5nZXRDaGlsZChcIm4zXCIpLmFzVGV4dEZpZWxkO1xyXG5cclxuICAgICAgICB0aGlzLmNhcmRMb2FkZXIwLnVybCA9IFwidWk6Ly9Mb2JieS8xMDFfMVwiO1xyXG4gICAgICAgIHRoaXMuY2FyZExvYWRlcjEudXJsID0gXCJ1aTovL0xvYmJ5LzEwMl8xXCI7XHJcbiAgICAgICAgdGhpcy5jYXJkTG9hZGVyMi51cmwgPSBcInVpOi8vTG9iYnkvMTAzXzFcIjtcclxuICAgICAgICB0aGlzLmNhcmRMb2FkZXIzLnVybCA9IFwidWk6Ly9Mb2JieS8xMDRfMVwiO1xyXG4gICAgICAgIHRoaXMuY2FyZExvYWRlcjQudXJsID0gXCJ1aTovL0xvYmJ5LzEwNV8xXCI7XHJcbiAgICAgICAgdGhpcy5jYXJkTG9hZGVyNS51cmwgPSBcInVpOi8vTG9iYnkvMTA2XzFcIjtcclxuICAgICAgICB0aGlzLmNhcmRMb2FkZXI2LnVybCA9IFwidWk6Ly9Mb2JieS8xMDdfMVwiO1xyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdEJ0bi5vbkNsaWNrKHRoaXMuc2VsZWN0Q2FyZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy53aW5Db250cm9sbGVyID0gdGhpcy5nZXRDb250cm9sbGVyKFwid2luXCIpO1xyXG4gICAgICAgIHRoaXMudHlwZUNvbnRyb2xsZXIgPSB0aGlzLmdldENvbnRyb2xsZXIoXCJ0eXBlXCIpO1xyXG4gICAgICAgIHRoaXMuZWRpdENvbnRyb2xsZXIgPSB0aGlzLmdldENvbnRyb2xsZXIoXCJlZGl0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXREYXRhKGRhdGE6IG51bWJlcltdLCBPd25XaW46IG51bWJlcikge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoYHVpOi8vTG9iYnkvJHtkYXRhW2ldfV8xYCk7XHJcbiAgICAgICAgICAgIHRoaXNbXCJjYXJkTG9hZGVyXCIgKyBpXS51cmwgPSBgdWk6Ly9Mb2JieS8ke2RhdGFbaV19XzFgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbnVtID0gVUlVdGlsLmZvcm1hdE51bWJlcjEwMChPd25XaW4pO1xyXG4gICAgICAgIHRoaXMudHh0V2luLnRleHQgPSBudW0gPiAwID8gXCIrXCIgKyBudW0gOiBudW0gKyBcIlwiO1xyXG4gICAgICAgIHRoaXMud2luQ29udHJvbGxlci5zZXRTZWxlY3RlZEluZGV4KE93bldpbiA+IDAgPyAxIDogMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzRGVsZWN0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHVibGljIHNlbGVjdENhcmQoKSB7XHJcbiAgICAgICAgdGhpcy5pc0RlbGVjdCA9ICF0aGlzLmlzRGVsZWN0O1xyXG4gICAgICAgIHRoaXMuc2V0VHlwZUNvbih0aGlzLmlzRGVsZWN0ID8gMSA6IDApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldFR5cGVDb24odHlwZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy50eXBlQ29udHJvbGxlci5zZXRTZWxlY3RlZEluZGV4KHR5cGUpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldEVkaXRDb24oaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZWRpdENvbnRyb2xsZXIuc2V0U2VsZWN0ZWRJbmRleChpbmRleCk7XHJcbiAgICB9XHJcbn0iXX0=