"use strict";
cc._RF.push(module, '1c695UaNo9HdqUwSpd2sGAG', 'LoadingScript');
// GameHall/script/LoadingScript.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoadingScript = /** @class */ (function (_super) {
    __extends(LoadingScript, _super);
    function LoadingScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.layoutNode = null;
        _this.tipLabel = null;
        _this.progressBar = null;
        _this.progressBarCB = null;
        return _this;
    }
    LoadingScript.prototype.onLoad = function () {
        var scaleW = cc.winSize.width / 1080;
        var scaleH = cc.winSize.height / 2340;
        this.node.scaleX = scaleW;
        this.node.scaleY = scaleH;
    };
    LoadingScript.prototype.onEnable = function () {
        var _this = this;
        // loading
        var time = 0;
        this.progressBar.barSprite.fillRange = time;
        this.progressBarCB = function () {
            time += 0.08;
            if (time >= 0.95) {
                return;
            }
            _this.progressBar.barSprite.fillRange = time;
            _this.tipLabel.string = "Loading..." + Math.ceil(time * 100) + "%";
        };
        this.schedule(function () {
            _this.progressBarCB();
        }, 0.01);
    };
    LoadingScript.prototype.loadCompelete = function () {
        this.progressBar.barSprite.fillRange = 0.99;
        this.tipLabel.string = "Loading..." + Math.ceil(0.99 * 100) + "%";
        this.unschedule(this.progressBarCB);
        this.layoutNode.active = false;
    };
    __decorate([
        property(cc.Node)
    ], LoadingScript.prototype, "layoutNode", void 0);
    __decorate([
        property(cc.Label)
    ], LoadingScript.prototype, "tipLabel", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], LoadingScript.prototype, "progressBar", void 0);
    LoadingScript = __decorate([
        ccclass
    ], LoadingScript);
    return LoadingScript;
}(cc.Component));
exports.default = LoadingScript;

cc._RF.pop();