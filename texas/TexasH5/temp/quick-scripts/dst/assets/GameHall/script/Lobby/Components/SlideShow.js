
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/Components/SlideShow.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e786fvmN/lJMaYpSDRiU2EV', 'SlideShow');
// GameHall/script/Lobby/Components/SlideShow.ts

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
 * @description 轮播图
 */
var SlideShow = /** @class */ (function (_super) {
    __extends(SlideShow, _super);
    function SlideShow() {
        return _super.call(this) || this;
    }
    SlideShow.prototype.onConstruct = function () {
        this.indexController = this.getController("index");
        this.list = this.getChild("list").asList;
        this.list.setVirtualAndLoop();
        this.list.itemRenderer = this.itemRenderer.bind(this);
        this.list.numItems = 4;
        // this.timerId = setInterval(() => {
        //     this.list.scrollPane.scrollRight(1, true);
        // }, 5000)
        this.loopRoll();
    };
    SlideShow.prototype.loopRoll = function () {
        var _this = this;
        this.node.stopAllActions();
        this.node.runAction(cc.repeatForever(cc.sequence(cc.delayTime(5), cc.callFunc(function () {
            _this.list.scrollPane.scrollRight(1, true);
        }))));
    };
    SlideShow.prototype.itemRenderer = function (index, obj) {
        var item = obj;
        var loader = item.getChild("n0").asLoader;
        if (index == 0 || index == 2) {
            loader.url = "ui://Lobby/BANNER";
        }
        else {
            loader.url = "ui://Lobby/BANNER1";
        }
        this.indexController.setSelectedIndex(index);
    };
    SlideShow.prototype.clean = function () {
        // clearInterval(this.timerId);
        this.node.stopAllActions();
    };
    SlideShow.prototype.onDestroy = function () {
        this.node.stopAllActions();
        // clearInterval(this.timerId);
    };
    return SlideShow;
}(fgui.GComponent));
exports.default = SlideShow;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXENvbXBvbmVudHNcXFNsaWRlU2hvdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7R0FFRztBQUNIO0lBQXVDLDZCQUFlO0lBQ2xEO2VBQ0ksaUJBQU87SUFDWCxDQUFDO0lBS1MsK0JBQVcsR0FBckI7UUFDSSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLHFDQUFxQztRQUNyQyxpREFBaUQ7UUFDakQsV0FBVztRQUNYLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRU0sNEJBQVEsR0FBZjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FDZixFQUFFLENBQUMsYUFBYSxDQUNaLEVBQUUsQ0FBQyxRQUFRLENBQ1AsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFDZixFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ1IsS0FBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ2YsQ0FBQTtJQUNMLENBQUM7SUFFTyxnQ0FBWSxHQUFwQixVQUFxQixLQUFhLEVBQUUsR0FBaUI7UUFDakQsSUFBSSxJQUFJLEdBQW9CLEdBQUcsQ0FBQztRQUNoQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUMxQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtZQUMxQixNQUFNLENBQUMsR0FBRyxHQUFHLG1CQUFtQixDQUFDO1NBQ3BDO2FBQU07WUFDSCxNQUFNLENBQUMsR0FBRyxHQUFHLG9CQUFvQixDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBQ00seUJBQUssR0FBWjtRQUNJLCtCQUErQjtRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFDTSw2QkFBUyxHQUFoQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDM0IsK0JBQStCO0lBQ25DLENBQUM7SUFFTCxnQkFBQztBQUFELENBbkRBLEFBbURDLENBbkRzQyxJQUFJLENBQUMsVUFBVSxHQW1EckQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDova7mkq3lm75cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlU2hvdyBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgaW5kZXhDb250cm9sbGVyOiBmZ3VpLkNvbnRyb2xsZXI7XHJcbiAgICBwcml2YXRlIGxpc3Q6IGZndWkuR0xpc3Q7XHJcbiAgICBwcml2YXRlIHRpbWVySWQ7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uQ29uc3RydWN0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW5kZXhDb250cm9sbGVyID0gdGhpcy5nZXRDb250cm9sbGVyKFwiaW5kZXhcIik7XHJcbiAgICAgICAgdGhpcy5saXN0ID0gdGhpcy5nZXRDaGlsZChcImxpc3RcIikuYXNMaXN0O1xyXG4gICAgICAgIHRoaXMubGlzdC5zZXRWaXJ0dWFsQW5kTG9vcCgpO1xyXG4gICAgICAgIHRoaXMubGlzdC5pdGVtUmVuZGVyZXIgPSB0aGlzLml0ZW1SZW5kZXJlci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMubGlzdC5udW1JdGVtcyA9IDQ7XHJcbiAgICAgICAgLy8gdGhpcy50aW1lcklkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmxpc3Quc2Nyb2xsUGFuZS5zY3JvbGxSaWdodCgxLCB0cnVlKTtcclxuICAgICAgICAvLyB9LCA1MDAwKVxyXG4gICAgICAgIHRoaXMubG9vcFJvbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9vcFJvbGwoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgY2MucmVwZWF0Rm9yZXZlcihcclxuICAgICAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSg1KSxcclxuICAgICAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdC5zY3JvbGxQYW5lLnNjcm9sbFJpZ2h0KDEsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pKSlcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpdGVtUmVuZGVyZXIoaW5kZXg6IG51bWJlciwgb2JqOiBmZ3VpLkdPYmplY3QpIHtcclxuICAgICAgICBsZXQgaXRlbSA9IDxmZ3VpLkdDb21wb25lbnQ+b2JqO1xyXG4gICAgICAgIGxldCBsb2FkZXIgPSBpdGVtLmdldENoaWxkKFwibjBcIikuYXNMb2FkZXI7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IDAgfHwgaW5kZXggPT0gMikge1xyXG4gICAgICAgICAgICBsb2FkZXIudXJsID0gXCJ1aTovL0xvYmJ5L0JBTk5FUlwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvYWRlci51cmwgPSBcInVpOi8vTG9iYnkvQkFOTkVSMVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluZGV4Q29udHJvbGxlci5zZXRTZWxlY3RlZEluZGV4KGluZGV4KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBjbGVhbigpIHtcclxuICAgICAgICAvLyBjbGVhckludGVydmFsKHRoaXMudGltZXJJZCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIC8vIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklkKTtcclxuICAgIH1cclxuXHJcbn0iXX0=