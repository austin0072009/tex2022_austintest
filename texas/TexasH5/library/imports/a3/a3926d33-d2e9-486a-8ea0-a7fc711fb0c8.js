"use strict";
cc._RF.push(module, 'a39260z0ulIao6gp/xxH7DI', 'LoadingScene');
// Script/Common/LoadingScene.ts

"use strict";
/*
 * @Author: sin2021
 * @Date: 2020-05-12 09:57:34
 * @LastEditors: sin2021
 * @LastEditTime: 2020-07-30 13:46:12
 * @Version: CocosCreator V2.2.2
 * @Description:
 */
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
var LoadingTips_1 = require("../config/LoadingTips");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var LoadingScene = /** @class */ (function (_super) {
    __extends(LoadingScene, _super);
    function LoadingScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._loadingMask = null;
        _this._progress = null;
        _this._Tip = null;
        _this.Index = 0;
        return _this;
    }
    LoadingScene.prototype.onLoad = function () {
        this._loadingMask = this.node.getChildByName("mask");
        this._progress = this._loadingMask.getChildByName("progress");
        this._Tip = this.node.getChildByName("label");
        if (this._Tip) {
            this._Tip.getComponent(cc.Label).string = "";
        }
        this.coldTime = 1;
        this.Index = 0;
        this.languae = LoadingTips_1.EN;
    };
    /**
     * 加载进度条
     * @param process
     */
    LoadingScene.prototype.loading = function (process) {
        this._loadingMask.getComponent(cc.Mask).node.width = (this._progress.width * process) / 100;
    };
    LoadingScene.prototype.loadingTest = function (step, callback) {
        if (step === void 0) { step = 10; }
        this._loadingMask.getComponent(cc.Mask).node.width += step;
        if (this._loadingMask.getComponent(cc.Mask).node.width >= this._progress.width) {
            callback();
        }
    };
    LoadingScene.prototype.update = function (dt) {
        if (this.coldTime < 0 && this._Tip) {
            this.coldTime = 5;
            var string = this.languae[this.Index];
            if (!string) {
                this.Index = 0;
                string = this.languae[this.Index];
            }
            this._Tip.getComponent(cc.Label).string = string;
            this.Index++;
        }
        this.coldTime -= dt;
    };
    __decorate([
        property(cc.Node)
    ], LoadingScene.prototype, "_loadingMask", void 0);
    __decorate([
        property(cc.Node)
    ], LoadingScene.prototype, "_progress", void 0);
    __decorate([
        property(cc.Node)
    ], LoadingScene.prototype, "_Tip", void 0);
    LoadingScene = __decorate([
        ccclass,
        menu("LoadingScene/LoadingScene")
    ], LoadingScene);
    return LoadingScene;
}(cc.Component));
exports.default = LoadingScene;

cc._RF.pop();