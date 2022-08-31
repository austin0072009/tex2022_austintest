
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/knapsack/MyKnapsackView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '19d17Ad7t9LJZdbzml4v2ih', 'MyKnapsackView');
// GameHall/script/Lobby/knapsack/MyKnapsackView.ts

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
var LobbyViewCtr_1 = require("../LobbyViewCtr");
/**
 * @description 背包
 */
var MyKnapsackView = /** @class */ (function (_super) {
    __extends(MyKnapsackView, _super);
    function MyKnapsackView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btn_knspBreak = null;
        _this.ui_pkgList = null;
        _this._listData = [];
        return _this;
    }
    Object.defineProperty(MyKnapsackView.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyKnapsackView.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyKnapsackView.prototype, "componentName", {
        get: function () {
            return "knapsack";
        },
        enumerable: false,
        configurable: true
    });
    MyKnapsackView.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.visible = false;
        this.ui_btn_knspBreak.onClick(this.Hide, this);
        this.ui_pkgList.setVirtual();
        this.ui_pkgList.itemRenderer = this.renderListItem.bind(this);
        this.ui_pkgList.on(fgui.Event.CLICK_ITEM, this.onClickItem, this);
    };
    MyKnapsackView.prototype.OnLoadCompleted = function () {
        this.Show();
    };
    MyKnapsackView.prototype.Hide = function () {
        AudioManager_1.AudioManager.Singleton.play('MyKnapsackView', "button");
        _super.prototype.Hide.call(this);
    };
    Object.defineProperty(MyKnapsackView.prototype, "listData", {
        get: function () {
            return this._listData;
        },
        set: function (data) {
            this._listData = data;
            this.ui_pkgList.numItems = data.length;
        },
        enumerable: false,
        configurable: true
    });
    MyKnapsackView.prototype.renderListItem = function (index, obj) {
        var item = obj;
        item.setData(this.listData[index]);
    };
    MyKnapsackView.prototype.onClickItem = function (item) {
        AudioManager_1.AudioManager.Singleton.play('MyKnapsackView', "button");
        item.showDesc();
    };
    // public initBagPackData() {
    //     this.ui_pkgList.removeChildrenToPool();
    //     for (let index = 0; index < this.listData.length; index++) {
    //         const element = this.listData[index];
    //         let item = this.ui_pkgList.addItemFromPool().asCom as MyKnapsackItem;
    //         item.setData(element);
    //     }
    // }
    MyKnapsackView.prototype.Show = function () {
        _super.prototype.Show.call(this);
        this.listData = LobbyViewCtr_1.default.instance.model.bagpackData;
        // this.initBagPackData();
    };
    return MyKnapsackView;
}(ViewBase_1.default));
exports.default = MyKnapsackView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXGtuYXBzYWNrXFxNeUtuYXBzYWNrVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwRUFBeUU7QUFDekUsa0VBQTZEO0FBRTdELGdEQUEyQztBQUczQzs7R0FFRztBQUNIO0lBQTRDLGtDQUFRO0lBQXBEO1FBQUEscUVBNkRDO1FBbERXLHNCQUFnQixHQUFpQixJQUFJLENBQUM7UUFDdEMsZ0JBQVUsR0FBZSxJQUFJLENBQUM7UUFpQi9CLGVBQVMsR0FBZSxFQUFFLENBQUM7O0lBZ0N0QyxDQUFDO0lBNURHLHNCQUFjLCtDQUFtQjthQUFqQztZQUNJLE9BQU8sVUFBVSxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWMsdUNBQVc7YUFBekI7WUFDSSxPQUFPLFdBQVcsQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUNELHNCQUFjLHlDQUFhO2FBQTNCO1lBQ0ksT0FBTyxVQUFVLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFLRCw4Q0FBcUIsR0FBckI7UUFDSSxpQkFBTSxxQkFBcUIsV0FBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNuQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFDRCx3Q0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFDRCw2QkFBSSxHQUFKO1FBQ0ksMkJBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3hELGlCQUFNLElBQUksV0FBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxzQkFBVyxvQ0FBUTthQUluQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDO2FBTkQsVUFBb0IsSUFBSTtZQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzNDLENBQUM7OztPQUFBO0lBS00sdUNBQWMsR0FBckIsVUFBc0IsS0FBYSxFQUFFLEdBQWlCO1FBQ2xELElBQUksSUFBSSxHQUFtQixHQUFHLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNNLG9DQUFXLEdBQWxCLFVBQW1CLElBQW9CO1FBQ25DLDJCQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELDZCQUE2QjtJQUM3Qiw4Q0FBOEM7SUFDOUMsbUVBQW1FO0lBQ25FLGdEQUFnRDtJQUNoRCxnRkFBZ0Y7SUFDaEYsaUNBQWlDO0lBQ2pDLFFBQVE7SUFDUixJQUFJO0lBRUcsNkJBQUksR0FBWDtRQUNJLGlCQUFNLElBQUksV0FBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLFFBQVEsR0FBRyxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQ3hELDBCQUEwQjtJQUM5QixDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQTdEQSxBQTZEQyxDQTdEMkMsa0JBQVEsR0E2RG5EIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXVkaW9NYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCBWaWV3QmFzZSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9WaWV3QmFzZVwiO1xyXG5pbXBvcnQgeyBQcm9wSW5mbyB9IGZyb20gXCIuLi9Mb2JieU5ldERhdGFcIjtcclxuaW1wb3J0IExvYmJ5Vmlld0N0ciBmcm9tIFwiLi4vTG9iYnlWaWV3Q3RyXCI7XHJcbmltcG9ydCB7IE15S25hcHNhY2tJdGVtIH0gZnJvbSBcIi4vTXlLbmFwc2Fja0l0ZW1cIjtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24g6IOM5YyFXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUtuYXBzYWNrVmlldyBleHRlbmRzIFZpZXdCYXNlIHtcclxuICAgIHByb3RlY3RlZCBnZXQgcGFja2FnZVJlc291cmNlTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcImdhbWVIYWxsXCI7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IHBhY2thZ2VOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwicmVzL0xvYmJ5XCI7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IGNvbXBvbmVudE5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJrbmFwc2Fja1wiO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdWlfYnRuX2tuc3BCcmVhazogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfcGtnTGlzdDogZmd1aS5HTGlzdCA9IG51bGw7XHJcblxyXG4gICAgY3JlYXRlQ2hpbGRDb21wb25lbnRzKCkge1xyXG4gICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkQ29tcG9uZW50cygpO1xyXG4gICAgICAgIHRoaXMuZmd1aUNvbXBvbmVudC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51aV9idG5fa25zcEJyZWFrLm9uQ2xpY2sodGhpcy5IaWRlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnVpX3BrZ0xpc3Quc2V0VmlydHVhbCgpO1xyXG4gICAgICAgIHRoaXMudWlfcGtnTGlzdC5pdGVtUmVuZGVyZXIgPSB0aGlzLnJlbmRlckxpc3RJdGVtLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy51aV9wa2dMaXN0Lm9uKGZndWkuRXZlbnQuQ0xJQ0tfSVRFTSwgdGhpcy5vbkNsaWNrSXRlbSwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBPbkxvYWRDb21wbGV0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5TaG93KCk7XHJcbiAgICB9XHJcbiAgICBIaWRlKCkge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnTXlLbmFwc2Fja1ZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICBzdXBlci5IaWRlKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgX2xpc3REYXRhOiBQcm9wSW5mb1tdID0gW107XHJcbiAgICBwdWJsaWMgc2V0IGxpc3REYXRhKGRhdGEpIHtcclxuICAgICAgICB0aGlzLl9saXN0RGF0YSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy51aV9wa2dMaXN0Lm51bUl0ZW1zID0gZGF0YS5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IGxpc3REYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9saXN0RGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyTGlzdEl0ZW0oaW5kZXg6IG51bWJlciwgb2JqOiBmZ3VpLkdPYmplY3QpIHtcclxuICAgICAgICBsZXQgaXRlbSA9IDxNeUtuYXBzYWNrSXRlbT5vYmo7XHJcbiAgICAgICAgaXRlbS5zZXREYXRhKHRoaXMubGlzdERhdGFbaW5kZXhdKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvbkNsaWNrSXRlbShpdGVtOiBNeUtuYXBzYWNrSXRlbSkge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnTXlLbmFwc2Fja1ZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICBpdGVtLnNob3dEZXNjKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHVibGljIGluaXRCYWdQYWNrRGF0YSgpIHtcclxuICAgIC8vICAgICB0aGlzLnVpX3BrZ0xpc3QucmVtb3ZlQ2hpbGRyZW5Ub1Bvb2woKTtcclxuICAgIC8vICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5saXN0RGF0YS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgIC8vICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubGlzdERhdGFbaW5kZXhdO1xyXG4gICAgLy8gICAgICAgICBsZXQgaXRlbSA9IHRoaXMudWlfcGtnTGlzdC5hZGRJdGVtRnJvbVBvb2woKS5hc0NvbSBhcyBNeUtuYXBzYWNrSXRlbTtcclxuICAgIC8vICAgICAgICAgaXRlbS5zZXREYXRhKGVsZW1lbnQpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICBwdWJsaWMgU2hvdygpIHtcclxuICAgICAgICBzdXBlci5TaG93KCk7XHJcbiAgICAgICAgdGhpcy5saXN0RGF0YSA9IExvYmJ5Vmlld0N0ci5pbnN0YW5jZS5tb2RlbC5iYWdwYWNrRGF0YTtcclxuICAgICAgICAvLyB0aGlzLmluaXRCYWdQYWNrRGF0YSgpO1xyXG4gICAgfVxyXG59Il19