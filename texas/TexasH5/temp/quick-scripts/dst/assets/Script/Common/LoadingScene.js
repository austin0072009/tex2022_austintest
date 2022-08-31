
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/LoadingScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb21tb25cXExvYWRpbmdTY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7R0FPRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0gscURBQStDO0FBQ3pDLElBQUEsS0FBOEIsRUFBRSxDQUFDLFVBQVUsRUFBekMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsSUFBSSxVQUFrQixDQUFDO0FBR2xEO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBdURDO1FBckRXLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRzlCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHekIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUlyQixXQUFLLEdBQVcsQ0FBQyxDQUFDOztJQTJDOUIsQ0FBQztJQTFDRyw2QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUE7U0FDL0M7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsZ0JBQUUsQ0FBQTtJQUNyQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksOEJBQU8sR0FBZCxVQUFlLE9BQWU7UUFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDaEcsQ0FBQztJQUVNLGtDQUFXLEdBQWxCLFVBQW1CLElBQWlCLEVBQUUsUUFBa0I7UUFBckMscUJBQUEsRUFBQSxTQUFpQjtRQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUM7UUFDM0QsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRTtZQUM1RSxRQUFRLEVBQUUsQ0FBQztTQUNkO0lBQ0wsQ0FBQztJQUVELDZCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFBO1lBQ2pCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ3JDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUE7Z0JBQ2QsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO2FBQ3BDO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7WUFFaEQsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO1NBQ2Y7UUFFRCxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQTtJQUN2QixDQUFDO0lBcEREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ21CO0lBR3JDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ2U7SUFHakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDVztJQVJaLFlBQVk7UUFGaEMsT0FBTztRQUNQLElBQUksQ0FBQywyQkFBMkIsQ0FBQztPQUNiLFlBQVksQ0F1RGhDO0lBQUQsbUJBQUM7Q0F2REQsQUF1REMsQ0F2RHlDLEVBQUUsQ0FBQyxTQUFTLEdBdURyRDtrQkF2RG9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQEF1dGhvcjogc2luMjAyMVxuICogQERhdGU6IDIwMjAtMDUtMTIgMDk6NTc6MzRcbiAqIEBMYXN0RWRpdG9yczogc2luMjAyMVxuICogQExhc3RFZGl0VGltZTogMjAyMC0wNy0zMCAxMzo0NjoxMlxuICogQFZlcnNpb246IENvY29zQ3JlYXRvciBWMi4yLjJcbiAqIEBEZXNjcmlwdGlvbjpcbiAqL1xuXG5cbmltcG9ydCB7IEVOLCBDTiB9IGZyb20gXCIuLi9jb25maWcvTG9hZGluZ1RpcHNcIjtcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIG1lbnUgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuQG1lbnUoXCJMb2FkaW5nU2NlbmUvTG9hZGluZ1NjZW5lXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkaW5nU2NlbmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgX2xvYWRpbmdNYXNrOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHB1YmxpYyBfcHJvZ3Jlc3M6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBfVGlwOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgY29sZFRpbWU6IG51bWJlcjtcbiAgICBwcml2YXRlIGxhbmd1YWU6IGFueTtcbiAgICBwcml2YXRlIEluZGV4OiBudW1iZXIgPSAwO1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5fbG9hZGluZ01hc2sgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtYXNrXCIpO1xuICAgICAgICB0aGlzLl9wcm9ncmVzcyA9IHRoaXMuX2xvYWRpbmdNYXNrLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NcIik7XG4gICAgICAgIHRoaXMuX1RpcCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImxhYmVsXCIpO1xuICAgICAgICBpZiAodGhpcy5fVGlwKSB7XG4gICAgICAgICAgICB0aGlzLl9UaXAuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIlwiXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2xkVGltZSA9IDE7XG4gICAgICAgIHRoaXMuSW5kZXggPSAwO1xuICAgICAgICB0aGlzLmxhbmd1YWUgPSBFTlxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWKoOi9vei/m+W6puadoVxuICAgICAqIEBwYXJhbSBwcm9jZXNzXG4gICAgICovXG4gICAgcHVibGljIGxvYWRpbmcocHJvY2VzczogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2xvYWRpbmdNYXNrLmdldENvbXBvbmVudChjYy5NYXNrKS5ub2RlLndpZHRoID0gKHRoaXMuX3Byb2dyZXNzLndpZHRoICogcHJvY2VzcykgLyAxMDA7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRpbmdUZXN0KHN0ZXA6IG51bWJlciA9IDEwLCBjYWxsYmFjazogRnVuY3Rpb24pIHtcbiAgICAgICAgdGhpcy5fbG9hZGluZ01hc2suZ2V0Q29tcG9uZW50KGNjLk1hc2spLm5vZGUud2lkdGggKz0gc3RlcDtcbiAgICAgICAgaWYgKHRoaXMuX2xvYWRpbmdNYXNrLmdldENvbXBvbmVudChjYy5NYXNrKS5ub2RlLndpZHRoID49IHRoaXMuX3Byb2dyZXNzLndpZHRoKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIGlmICh0aGlzLmNvbGRUaW1lIDwgMCAmJiB0aGlzLl9UaXApIHtcbiAgICAgICAgICAgIHRoaXMuY29sZFRpbWUgPSA1XG4gICAgICAgICAgICBsZXQgc3RyaW5nID0gdGhpcy5sYW5ndWFlW3RoaXMuSW5kZXhdXG4gICAgICAgICAgICBpZiAoIXN0cmluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuSW5kZXggPSAwXG4gICAgICAgICAgICAgICAgc3RyaW5nID0gdGhpcy5sYW5ndWFlW3RoaXMuSW5kZXhdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9UaXAuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBzdHJpbmdcblxuICAgICAgICAgICAgdGhpcy5JbmRleCsrXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbGRUaW1lIC09IGR0XG4gICAgfVxufVxuIl19