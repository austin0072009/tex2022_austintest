
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/welfare/WelfareView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '456d5aFYTxM4JQDmM7hG3/N', 'WelfareView');
// GameHall/script/Lobby/welfare/WelfareView.ts

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
var AudioManager_1 = require("../../../../Script/BaseFrame/AudioManager");
var ViewBase_1 = require("../../../../Script/BaseFrame/ViewBase");
var UIUtil_1 = require("../../../../Script/Common/UIUtil");
var AppConst_1 = require("../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst");
var LobbyViewCtr_1 = require("../LobbyViewCtr");
/**
 * @description 福利
 */
var WelfareView = /** @class */ (function (_super) {
    __extends(WelfareView, _super);
    function WelfareView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btn_break = null;
        _this.ui_welfaregold = null;
        _this.ui_btn_welfareaddGold = null;
        _this.ui_welfareList = null;
        _this.tasklist = [];
        return _this;
    }
    Object.defineProperty(WelfareView.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WelfareView.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WelfareView.prototype, "componentName", {
        get: function () {
            return "welfare";
        },
        enumerable: false,
        configurable: true
    });
    WelfareView.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.visible = false;
        this.fguiComponent.sortingOrder = 9000;
        this.ui_btn_break.onClick(this.Hide, this);
        this.ui_btn_welfareaddGold.onClick(this.showTopupView, this);
        this.typeController = this.fguiComponent.getController("type");
        this.typeController.onChanged(this.conChanged, this);
        this.slideShow = this.getChild("n14").asCom;
        this.ui_welfareList.setVirtual();
        this.ui_welfareList.itemRenderer = this.renderListItem.bind(this);
        this.ui_welfaregold.text = UIUtil_1.UIUtil.formatNumber(AppConst_1.AppConst.mPlayerModel.gold) + '';
    };
    WelfareView.prototype.OnLoadCompleted = function () {
        this.Show();
    };
    /**控制器状态改变 */
    WelfareView.prototype.conChanged = function () {
        AudioManager_1.AudioManager.Singleton.play('WelfareView', "button");
        this.handleData();
    };
    WelfareView.prototype.Hide = function () {
        AudioManager_1.AudioManager.Singleton.play('WelfareView', "button");
        _super.prototype.Hide.call(this);
    };
    WelfareView.prototype.renderListItem = function (index, obj) {
        var item = obj;
        item.setData(this.tasklist[index]);
    };
    WelfareView.prototype.handleData = function () {
        var task = LobbyViewCtr_1.default.instance.Model.tasklist;
        this.tasklist = [];
        if (this.typeController.selectedIndex == 0) { //超值
            for (var i = 0, len = task.length; i < len; i++) {
                if (task[i].type == 2) {
                    this.tasklist.push(task[i]);
                }
            }
        }
        else { //新手
            for (var i = 0, len = task.length; i < len; i++) {
                if (task[i].type == 1) {
                    this.tasklist.push(task[i]);
                }
            }
        }
        this.ui_welfareList.numItems = this.tasklist.length;
    };
    WelfareView.prototype.Show = function () {
        this.ui_welfaregold.text = UIUtil_1.UIUtil.formatNumber(AppConst_1.AppConst.mPlayerModel.gold) + '';
        LobbyViewCtr_1.default.instance.cs_tasklist();
        _super.prototype.Show.call(this);
    };
    WelfareView.prototype.showTopupView = function () {
        AudioManager_1.AudioManager.Singleton.play('WelfareView', "button");
        LobbyViewCtr_1.default.instance.view.showTopup();
    };
    return WelfareView;
}(ViewBase_1.default));
exports.default = WelfareView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXHdlbGZhcmVcXFdlbGZhcmVWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBFQUF5RTtBQUN6RSxrRUFBNkQ7QUFDN0QsMkRBQTBEO0FBQzFELDJGQUEwRjtBQUcxRixnREFBMkM7QUFHM0M7O0dBRUc7QUFDSDtJQUF5QywrQkFBUTtJQUFqRDtRQUFBLHFFQWdGQztRQXJFVyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFDbEMsb0JBQWMsR0FBb0IsSUFBSSxDQUFDO1FBQ3ZDLDJCQUFxQixHQUFpQixJQUFJLENBQUM7UUFDM0Msb0JBQWMsR0FBZSxJQUFJLENBQUM7UUFFbEMsY0FBUSxHQUFlLEVBQUUsQ0FBQzs7SUFnRXRDLENBQUM7SUEvRUcsc0JBQWMsNENBQW1CO2FBQWpDO1lBQ0ksT0FBTyxVQUFVLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYyxvQ0FBVzthQUF6QjtZQUNJLE9BQU8sV0FBVyxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWMsc0NBQWE7YUFBM0I7WUFDSSxPQUFPLFNBQVMsQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQVVELDJDQUFxQixHQUFyQjtRQUNJLGlCQUFNLHFCQUFxQixXQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FB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SUFDakIsQ0FBQztJQUNNLG1DQUFhLEdBQXBCO1FBQ0ksMkJBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNyRCxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVMLGtCQUFDO0FBQUQsQ0FoRkEsQUFnRkMsQ0FoRndDLGtCQUFRLEdBZ0ZoRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1ZGlvTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgVmlld0Jhc2UgZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvVmlld0Jhc2VcIjtcclxuaW1wb3J0IHsgVUlVdGlsIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9Db21tb24vVUlVdGlsXCI7XHJcbmltcG9ydCB7IEFwcENvbnN0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9tb2R1bGVzL0BzbG90c21hc3Rlci91aS1jb21tb24vbGliL0FwcENvbnN0XCI7XHJcbmltcG9ydCBTbGlkZVNob3cgZnJvbSBcIi4uL0NvbXBvbmVudHMvU2xpZGVTaG93XCI7XHJcbmltcG9ydCB7IHRhc2tsaXN0IH0gZnJvbSBcIi4uL0xvYmJ5TmV0RGF0YVwiO1xyXG5pbXBvcnQgTG9iYnlWaWV3Q3RyIGZyb20gXCIuLi9Mb2JieVZpZXdDdHJcIjtcclxuaW1wb3J0IFdlbGZhcmVRdWVzdEl0ZW0gZnJvbSBcIi4vV2VsZmFyZVF1ZXN0SXRlbVwiO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDnpo/liKlcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlbGZhcmVWaWV3IGV4dGVuZHMgVmlld0Jhc2Uge1xyXG4gICAgcHJvdGVjdGVkIGdldCBwYWNrYWdlUmVzb3VyY2VOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwiZ2FtZUhhbGxcIjtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBnZXQgcGFja2FnZU5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJyZXMvTG9iYnlcIjtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBnZXQgY29tcG9uZW50TmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcIndlbGZhcmVcIjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVpX2J0bl9icmVhazogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfd2VsZmFyZWdvbGQ6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX2J0bl93ZWxmYXJlYWRkR29sZDogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfd2VsZmFyZUxpc3Q6IGZndWkuR0xpc3QgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB0eXBlQ29udHJvbGxlcjogZmd1aS5Db250cm9sbGVyO1xyXG4gICAgcHJpdmF0ZSB0YXNrbGlzdDogdGFza2xpc3RbXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBzbGlkZVNob3c6IFNsaWRlU2hvdztcclxuICAgIGNyZWF0ZUNoaWxkQ29tcG9uZW50cygpIHtcclxuICAgICAgICBzdXBlci5jcmVhdGVDaGlsZENvbXBvbmVudHMoKTtcclxuICAgICAgICB0aGlzLmZndWlDb21wb25lbnQudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZmd1aUNvbXBvbmVudC5zb3J0aW5nT3JkZXIgPSA5MDAwO1xyXG4gICAgICAgIHRoaXMudWlfYnRuX2JyZWFrLm9uQ2xpY2sodGhpcy5IaWRlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnVpX2J0bl93ZWxmYXJlYWRkR29sZC5vbkNsaWNrKHRoaXMuc2hvd1RvcHVwVmlldywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy50eXBlQ29udHJvbGxlciA9IHRoaXMuZmd1aUNvbXBvbmVudC5nZXRDb250cm9sbGVyKFwidHlwZVwiKTtcclxuICAgICAgICB0aGlzLnR5cGVDb250cm9sbGVyLm9uQ2hhbmdlZCh0aGlzLmNvbkNoYW5nZWQsIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnNsaWRlU2hvdyA9IHRoaXMuZ2V0Q2hpbGQoXCJuMTRcIikuYXNDb20gYXMgU2xpZGVTaG93O1xyXG5cclxuICAgICAgICB0aGlzLnVpX3dlbGZhcmVMaXN0LnNldFZpcnR1YWwoKTtcclxuICAgICAgICB0aGlzLnVpX3dlbGZhcmVMaXN0Lml0ZW1SZW5kZXJlciA9IHRoaXMucmVuZGVyTGlzdEl0ZW0uYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy51aV93ZWxmYXJlZ29sZC50ZXh0ID0gVUlVdGlsLmZvcm1hdE51bWJlcihBcHBDb25zdC5tUGxheWVyTW9kZWwuZ29sZCkgKyAnJztcclxuICAgIH1cclxuICAgIE9uTG9hZENvbXBsZXRlZCgpIHtcclxuICAgICAgICB0aGlzLlNob3coKTtcclxuICAgIH1cclxuICAgIC8qKuaOp+WItuWZqOeKtuaAgeaUueWPmCAqL1xyXG4gICAgcHVibGljIGNvbkNoYW5nZWQoKSB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdXZWxmYXJlVmlldycsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlRGF0YSgpO1xyXG4gICAgfVxyXG4gICAgSGlkZSgpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ1dlbGZhcmVWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgc3VwZXIuSGlkZSgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHJlbmRlckxpc3RJdGVtKGluZGV4OiBudW1iZXIsIG9iajogZmd1aS5HT2JqZWN0KSB7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSA8V2VsZmFyZVF1ZXN0SXRlbT5vYmo7XHJcbiAgICAgICAgaXRlbS5zZXREYXRhKHRoaXMudGFza2xpc3RbaW5kZXhdKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBoYW5kbGVEYXRhKCkge1xyXG4gICAgICAgIGxldCB0YXNrID0gTG9iYnlWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLnRhc2tsaXN0O1xyXG4gICAgICAgIHRoaXMudGFza2xpc3QgPSBbXTtcclxuICAgICAgICBpZiAodGhpcy50eXBlQ29udHJvbGxlci5zZWxlY3RlZEluZGV4ID09IDApIHsgLy/otoXlgLxcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRhc2subGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0YXNrW2ldLnR5cGUgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFza2xpc3QucHVzaCh0YXNrW2ldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7IC8v5paw5omLXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0YXNrLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFza1tpXS50eXBlID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhc2tsaXN0LnB1c2godGFza1tpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51aV93ZWxmYXJlTGlzdC5udW1JdGVtcyA9IHRoaXMudGFza2xpc3QubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTaG93KCkge1xyXG4gICAgICAgIHRoaXMudWlfd2VsZmFyZWdvbGQudGV4dCA9IFVJVXRpbC5mb3JtYXROdW1iZXIoQXBwQ29uc3QubVBsYXllck1vZGVsLmdvbGQpICsgJyc7XHJcbiAgICAgICAgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLmNzX3Rhc2tsaXN0KCk7XHJcbiAgICAgICAgc3VwZXIuU2hvdygpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNob3dUb3B1cFZpZXcoKSB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdXZWxmYXJlVmlldycsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS52aWV3LnNob3dUb3B1cCgpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==