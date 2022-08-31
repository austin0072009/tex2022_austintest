
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@slotsmaster/ui-common/lib/Loading/Loading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '38f27e/3/hD9YoE2ZGj+bqv', 'Loading');
// Script/modules/@slotsmaster/ui-common/lib/Loading/Loading.ts

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
exports.Loading = void 0;
var Utils_1 = require("../../../../@mogafa/utils/lib/Utils");
var AppConst_1 = require("../AppConst");
var Popup_1 = require("../Popup");
var Loading = /** @class */ (function (_super) {
    __extends(Loading, _super);
    function Loading() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spineResources = "GameHall/Spine/loading/loading01";
        return _this;
    }
    Object.defineProperty(Loading.prototype, "basePanel", {
        get: function () {
            return "";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Loading.prototype, "animNode", {
        get: function () {
            throw new Error("Method not implemented.");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Loading.prototype, "buttonOKName", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Loading.prototype, "goldGrowName", {
        get: function () {
            throw new Error("Method not implemented.");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Loading.prototype, "normalNumName", {
        get: function () {
            throw new Error("Method not implemented.");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Loading.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Loading.prototype, "packageName", {
        get: function () {
            return "res/Loading";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Loading.prototype, "componentName", {
        get: function () {
            return "ShowLoading";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Loading.prototype, "closeTime", {
        get: function () {
            return -1;
        },
        enumerable: false,
        configurable: true
    });
    Loading.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.node.on(AppConst_1.AppConst.IsShowLoading, this.isShow, this);
    };
    Loading.prototype.doRotate = function () {
        // this.fguiComponent.getChild("JUHUA").node.stopAllActions();
        // this.fguiComponent.getChild("JUHUA").node.runAction(cc.rotateBy(1, 360).repeatForever());
    };
    Loading.prototype.isShow = function (isShow) {
        if (isShow === void 0) { isShow = true; }
        console.log("Loading--", isShow);
        if (isShow)
            this.show();
        else
            this.hide();
    };
    Loading.prototype.show = function () {
        _super.prototype.show.call(this);
        Utils_1.Utils.addSpine(this.spineResources, this.fguiComponent.getChild("spine").node, function (loadBg) {
            loadBg.setAnimation(0, "loading", true);
        });
        Utils_1.Utils.addSpine(this.spineResources, this.getChild("load.spine").node, function (load) {
            load.setAnimation(0, "slots", true);
        });
        // this.doRotate();
    };
    Loading.prototype.hide = function () {
        // this.fguiComponent.getChild("JUHUA").node.stopAllActions();
        _super.prototype.hide.call(this);
    };
    Loading.prototype.onPlayShowAni = function () { };
    Loading.prototype.onPlayHideAni = function () { };
    return Loading;
}(Popup_1.Popup));
exports.Loading = Loading;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAc2xvdHNtYXN0ZXJcXHVpLWNvbW1vblxcbGliXFxMb2FkaW5nXFxMb2FkaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSw2REFBNEQ7QUFDNUQsd0NBQXVDO0FBQ3ZDLGtDQUFpQztBQUVqQztJQUE2QiwyQkFBSztJQUFsQztRQUFBLHFFQTZEQztRQWpDVyxvQkFBYyxHQUFXLGtDQUFrQyxDQUFDOztJQWlDeEUsQ0FBQztJQTVERyxzQkFBYyw4QkFBUzthQUF2QjtZQUNJLE9BQU8sRUFBRSxDQUFDO1FBQ2QsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYyw2QkFBUTthQUF0QjtZQUNJLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUMvQyxDQUFDOzs7T0FBQTtJQUNELHNCQUFjLGlDQUFZO2FBQTFCO1lBQ0ksT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYyxpQ0FBWTthQUExQjtZQUNJLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUMvQyxDQUFDOzs7T0FBQTtJQUNELHNCQUFjLGtDQUFhO2FBQTNCO1lBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQy9DLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWMsd0NBQW1CO2FBQWpDO1lBQ0ksT0FBTyxVQUFVLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYyxnQ0FBVzthQUF6QjtZQUNJLE9BQU8sYUFBYSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWMsa0NBQWE7YUFBM0I7WUFDSSxPQUFPLGFBQWEsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUNELHNCQUFJLDhCQUFTO2FBQWI7WUFDSSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2QsQ0FBQzs7O09BQUE7SUFFUyx1Q0FBcUIsR0FBL0I7UUFDSSxpQkFBTSxxQkFBcUIsV0FBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLG1CQUFRLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUNELDBCQUFRLEdBQVI7UUFDSSw4REFBOEQ7UUFDOUQsNEZBQTRGO0lBQ2hHLENBQUM7SUFDTyx3QkFBTSxHQUFkLFVBQWUsTUFBc0I7UUFBdEIsdUJBQUEsRUFBQSxhQUFzQjtRQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNqQyxJQUFJLE1BQU07WUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7O1lBQ25CLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBQ0Qsc0JBQUksR0FBSjtRQUNJLGlCQUFNLElBQUksV0FBRSxDQUFDO1FBQ2IsYUFBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxVQUFDLE1BQW1CO1lBQy9GLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztRQUNILGFBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksRUFBRSxVQUFDLElBQWlCO1lBQ3BGLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztRQUNILG1CQUFtQjtJQUN2QixDQUFDO0lBRUQsc0JBQUksR0FBSjtRQUNJLDhEQUE4RDtRQUM5RCxpQkFBTSxJQUFJLFdBQUUsQ0FBQztJQUNqQixDQUFDO0lBRVMsK0JBQWEsR0FBdkIsY0FBa0MsQ0FBQztJQUV6QiwrQkFBYSxHQUF2QixjQUFrQyxDQUFDO0lBQ3ZDLGNBQUM7QUFBRCxDQTdEQSxBQTZEQyxDQTdENEIsYUFBSyxHQTZEakM7QUE3RFksMEJBQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4uLy4uLy4uLy4uL0Btb2dhZmEvdXRpbHMvbGliL1V0aWxzXCI7XG5pbXBvcnQgeyBBcHBDb25zdCB9IGZyb20gXCIuLi9BcHBDb25zdFwiO1xuaW1wb3J0IHsgUG9wdXAgfSBmcm9tIFwiLi4vUG9wdXBcIjtcblxuZXhwb3J0IGNsYXNzIExvYWRpbmcgZXh0ZW5kcyBQb3B1cCB7XG4gICAgcHJvdGVjdGVkIGdldCBiYXNlUGFuZWwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgYW5pbU5vZGUoKTogY2MuTm9kZVtdIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgYnV0dG9uT0tOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IGdvbGRHcm93TmFtZSgpOiBzdHJpbmdbXSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IG5vcm1hbE51bU5hbWUoKTogc3RyaW5nW10ge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBwYWNrYWdlUmVzb3VyY2VOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcImdhbWVIYWxsXCI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgcGFja2FnZU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwicmVzL0xvYWRpbmdcIjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBjb21wb25lbnROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIlNob3dMb2FkaW5nXCI7XG4gICAgfVxuICAgIGdldCBjbG9zZVRpbWUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBwcml2YXRlIHNwaW5lUmVzb3VyY2VzOiBzdHJpbmcgPSBcIkdhbWVIYWxsL1NwaW5lL2xvYWRpbmcvbG9hZGluZzAxXCI7XG4gICAgcHJvdGVjdGVkIGNyZWF0ZUNoaWxkQ29tcG9uZW50cygpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRDb21wb25lbnRzKCk7XG4gICAgICAgIHRoaXMubm9kZS5vbihBcHBDb25zdC5Jc1Nob3dMb2FkaW5nLCB0aGlzLmlzU2hvdywgdGhpcyk7XG4gICAgfVxuICAgIGRvUm90YXRlKCkge1xuICAgICAgICAvLyB0aGlzLmZndWlDb21wb25lbnQuZ2V0Q2hpbGQoXCJKVUhVQVwiKS5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIC8vIHRoaXMuZmd1aUNvbXBvbmVudC5nZXRDaGlsZChcIkpVSFVBXCIpLm5vZGUucnVuQWN0aW9uKGNjLnJvdGF0ZUJ5KDEsIDM2MCkucmVwZWF0Rm9yZXZlcigpKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBpc1Nob3coaXNTaG93OiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkxvYWRpbmctLVwiLCBpc1Nob3cpO1xuICAgICAgICBpZiAoaXNTaG93KSB0aGlzLnNob3coKTtcbiAgICAgICAgZWxzZSB0aGlzLmhpZGUoKTtcbiAgICB9XG4gICAgc2hvdygpIHtcbiAgICAgICAgc3VwZXIuc2hvdygpO1xuICAgICAgICBVdGlscy5hZGRTcGluZSh0aGlzLnNwaW5lUmVzb3VyY2VzLCB0aGlzLmZndWlDb21wb25lbnQuZ2V0Q2hpbGQoXCJzcGluZVwiKS5ub2RlLCAobG9hZEJnOiBzcC5Ta2VsZXRvbikgPT4ge1xuICAgICAgICAgICAgbG9hZEJnLnNldEFuaW1hdGlvbigwLCBcImxvYWRpbmdcIiwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBVdGlscy5hZGRTcGluZSh0aGlzLnNwaW5lUmVzb3VyY2VzLCB0aGlzLmdldENoaWxkKFwibG9hZC5zcGluZVwiKS5ub2RlLCAobG9hZDogc3AuU2tlbGV0b24pID0+IHtcbiAgICAgICAgICAgIGxvYWQuc2V0QW5pbWF0aW9uKDAsIFwic2xvdHNcIiwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyB0aGlzLmRvUm90YXRlKCk7XG4gICAgfVxuXG4gICAgaGlkZSgpIHtcbiAgICAgICAgLy8gdGhpcy5mZ3VpQ29tcG9uZW50LmdldENoaWxkKFwiSlVIVUFcIikubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICBzdXBlci5oaWRlKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uUGxheVNob3dBbmkoKTogdm9pZCB7IH1cblxuICAgIHByb3RlY3RlZCBvblBsYXlIaWRlQW5pKCk6IHZvaWQgeyB9XG59XG4iXX0=