"use strict";
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