
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/topup/TopupView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3bd08Hyr3ZIcZOcUnrXQECH', 'TopupView');
// GameHall/script/Lobby/topup/TopupView.ts

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
/**
 * @description 充值
 */
var TopupView = /** @class */ (function (_super) {
    __extends(TopupView, _super);
    function TopupView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**金币 */
        _this.ui_gold = null;
        _this.ui_btn_break = null;
        _this.ui_btn_addGold = null;
        _this.ui_playTree = null;
        return _this;
    }
    Object.defineProperty(TopupView.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TopupView.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TopupView.prototype, "componentName", {
        get: function () {
            return "topup";
        },
        enumerable: false,
        configurable: true
    });
    TopupView.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.visible = false;
        this.ui_playTree.collapseAll();
        // this.ui_playTree.on(fgui.Event.CLICK_ITEM, this.__clickNode, this);
        this.ui_playTree.treeNodeWillExpand = this.renderExpand.bind(this);
        this.ui_btn_break.onClick(this.Hide, this);
    };
    TopupView.prototype.OnLoadCompleted = function () {
        this.Show();
    };
    TopupView.prototype.Hide = function () {
        AudioManager_1.AudioManager.Singleton.play('TopupView', "button");
        _super.prototype.Hide.call(this);
    };
    TopupView.prototype.renderExpand = function (node, expanded) {
        node._cell.getController('leaf').selectedIndex = expanded ? 1 : 0;
        if (this.target == node) {
            return;
        }
        if (this.target && this.target.expanded) {
            this.target.expanded = !this.target.expanded;
        }
        this.target = node;
    };
    TopupView.prototype.Show = function () {
        _super.prototype.Show.call(this);
        AppConst_1.AppConst.currentGameId = null;
        this.ui_gold.text = UIUtil_1.UIUtil.formatNumber(AppConst_1.AppConst.mPlayerModel.gold) + '';
    };
    TopupView.prototype.__clickNode = function (itemObject) {
        //this.ui_playTree.collapseAll();
        console.log("--------------", itemObject.treeNode);
    };
    return TopupView;
}(ViewBase_1.default));
exports.default = TopupView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXHRvcHVwXFxUb3B1cFZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEVBQXlFO0FBQ3pFLGtFQUE2RDtBQUM3RCwyREFBMEQ7QUFDMUQsMkZBQTBGO0FBRTFGOztHQUVHO0FBQ0g7SUFBdUMsNkJBQVE7SUFBL0M7UUFBQSxxRUFzREM7UUE1Q0csUUFBUTtRQUNBLGFBQU8sR0FBb0IsSUFBSSxDQUFDO1FBQ2hDLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUNsQyxvQkFBYyxHQUFpQixJQUFJLENBQUM7UUFDcEMsaUJBQVcsR0FBZSxJQUFJLENBQUM7O0lBd0MzQyxDQUFDO0lBckRHLHNCQUFjLDBDQUFtQjthQUFqQztZQUNJLE9BQU8sVUFBVSxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWMsa0NBQVc7YUFBekI7WUFDSSxPQUFPLFdBQVcsQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUNELHNCQUFjLG9DQUFhO2FBQTNCO1lBQ0ksT0FBTyxPQUFPLENBQUM7UUFDbkIsQ0FBQzs7O09BQUE7SUFPRCx5Q0FBcUIsR0FBckI7UUFDSSxpQkFBTSxxQkFBcUIsV0FBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNuQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQy9CLHNFQUFzRTtRQUN0RSxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNELG1DQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUNELHdCQUFJLEdBQUo7UUFDSSwyQkFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ25ELGlCQUFNLElBQUksV0FBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTSxnQ0FBWSxHQUFuQixVQUFvQixJQUFvQixFQUFFLFFBQWlCO1FBQ3ZELElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFDckIsT0FBTztTQUNWO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7U0FDaEQ7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDO0lBRU0sd0JBQUksR0FBWDtRQUNJLGlCQUFNLElBQUksV0FBRSxDQUFDO1FBQ2IsbUJBQVEsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLGVBQU0sQ0FBQyxZQUFZLENBQUMsbUJBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzdFLENBQUM7SUFFRCwrQkFBVyxHQUFYLFVBQVksVUFBd0I7UUFDaEMsaUNBQWlDO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFTCxnQkFBQztBQUFELENBdERBLEFBc0RDLENBdERzQyxrQkFBUSxHQXNEOUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdWRpb01hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IFZpZXdCYXNlIGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL1ZpZXdCYXNlXCI7XHJcbmltcG9ydCB7IFVJVXRpbCB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQ29tbW9uL1VJVXRpbFwiO1xyXG5pbXBvcnQgeyBBcHBDb25zdCB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvbW9kdWxlcy9Ac2xvdHNtYXN0ZXIvdWktY29tbW9uL2xpYi9BcHBDb25zdFwiO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDlhYXlgLxcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcHVwVmlldyBleHRlbmRzIFZpZXdCYXNlIHtcclxuICAgIHByb3RlY3RlZCBnZXQgcGFja2FnZVJlc291cmNlTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcImdhbWVIYWxsXCI7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IHBhY2thZ2VOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwicmVzL0xvYmJ5XCI7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IGNvbXBvbmVudE5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJ0b3B1cFwiO1xyXG4gICAgfVxyXG4gICAgLyoq6YeR5biBICovXHJcbiAgICBwcml2YXRlIHVpX2dvbGQ6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX2J0bl9icmVhazogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfYnRuX2FkZEdvbGQ6IGZndWkuR0J1dHRvbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX3BsYXlUcmVlOiBmZ3VpLkdUcmVlID0gbnVsbDtcclxuXHJcbiAgICBjcmVhdGVDaGlsZENvbXBvbmVudHMoKSB7XHJcbiAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRDb21wb25lbnRzKCk7XHJcbiAgICAgICAgdGhpcy5mZ3VpQ29tcG9uZW50LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVpX3BsYXlUcmVlLmNvbGxhcHNlQWxsKCk7XHJcbiAgICAgICAgLy8gdGhpcy51aV9wbGF5VHJlZS5vbihmZ3VpLkV2ZW50LkNMSUNLX0lURU0sIHRoaXMuX19jbGlja05vZGUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudWlfcGxheVRyZWUudHJlZU5vZGVXaWxsRXhwYW5kID0gdGhpcy5yZW5kZXJFeHBhbmQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnVpX2J0bl9icmVhay5vbkNsaWNrKHRoaXMuSGlkZSwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBPbkxvYWRDb21wbGV0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5TaG93KCk7XHJcbiAgICB9XHJcbiAgICBIaWRlKCkge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnVG9wdXBWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgc3VwZXIuSGlkZSgpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSB0YXJnZXQ6IGZndWkuR1RyZWVOb2RlO1xyXG4gICAgcHVibGljIHJlbmRlckV4cGFuZChub2RlOiBmZ3VpLkdUcmVlTm9kZSwgZXhwYW5kZWQ6IGJvb2xlYW4pIHtcclxuICAgICAgICBub2RlLl9jZWxsLmdldENvbnRyb2xsZXIoJ2xlYWYnKS5zZWxlY3RlZEluZGV4ID0gZXhwYW5kZWQgPyAxIDogMDtcclxuICAgICAgICBpZiAodGhpcy50YXJnZXQgPT0gbm9kZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnRhcmdldCAmJiB0aGlzLnRhcmdldC5leHBhbmRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldC5leHBhbmRlZCA9ICF0aGlzLnRhcmdldC5leHBhbmRlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSBub2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTaG93KCkge1xyXG4gICAgICAgIHN1cGVyLlNob3coKTtcclxuICAgICAgICBBcHBDb25zdC5jdXJyZW50R2FtZUlkID0gbnVsbDtcclxuICAgICAgICB0aGlzLnVpX2dvbGQudGV4dCA9IFVJVXRpbC5mb3JtYXROdW1iZXIoQXBwQ29uc3QubVBsYXllck1vZGVsLmdvbGQpICsgJyc7XHJcbiAgICB9XHJcblxyXG4gICAgX19jbGlja05vZGUoaXRlbU9iamVjdDogZmd1aS5HT2JqZWN0KSB7XHJcbiAgICAgICAgLy90aGlzLnVpX3BsYXlUcmVlLmNvbGxhcHNlQWxsKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLVwiLCBpdGVtT2JqZWN0LnRyZWVOb2RlKTtcclxuICAgIH1cclxuXHJcbn0iXX0=