
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/career/MyCardSpectrumView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5e9caeDd4RHUYCq5EuuL0mT', 'MyCardSpectrumView');
// GameHall/script/Lobby/career/MyCardSpectrumView.ts

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
var ViewBase_1 = require("../../../../Script/BaseFrame/ViewBase");
var WebSocketManager_1 = require("../../../../Script/BaseFrame/WebSocketManager");
var UIUtil_1 = require("../../../../Script/Common/UIUtil");
var LobbyViewCtr_1 = require("../LobbyViewCtr");
var CareerNetDataStruct_1 = require("./CareerNetDataStruct");
/*
 * @description 我的牌普
 */
var MyCardSpectrumView = /** @class */ (function (_super) {
    __extends(MyCardSpectrumView, _super);
    function MyCardSpectrumView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btn_mycardSpBreak = null;
        /**取消 */
        _this.ui_btn_myCardQx = null;
        /**删除 */
        _this.ui_btn_myCardDelect = null;
        _this.ui_cardItemList = null;
        _this.ui_n119 = null;
        _this.texasCollectList = null;
        _this.delItem = [];
        _this.allItem = [];
        return _this;
    }
    Object.defineProperty(MyCardSpectrumView.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyCardSpectrumView.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyCardSpectrumView.prototype, "componentName", {
        get: function () {
            return "myCardSpectrum";
        },
        enumerable: false,
        configurable: true
    });
    MyCardSpectrumView.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.visible = false;
        this.ui_btn_mycardSpBreak.onClick(this.Hide, this);
        this.ui_cardItemList.on(fgui.Event.CLICK_ITEM, this.onClickItem, this);
        this.ui_btn_myCardDelect.onClick(this.delectCardItem, this);
        this.ui_btn_myCardQx.onClick(this.qxCardItem, this);
        this.ui_cardItemList.itemRenderer = this.renderListItem.bind(this);
    };
    MyCardSpectrumView.prototype.OnLoadCompleted = function () {
        var _this = this;
        this.Show();
        this.ui_n119.onClick(function () {
            _this.setControllerProperty("edit", 1);
            _this.ui_n119.visible = false;
            _this.setCardIsEdit();
        });
    };
    MyCardSpectrumView.prototype.Show = function () {
        this.allItem = [];
        _super.prototype.Show.call(this);
        var _getlist = new CareerNetDataStruct_1.cs_geymytexascollect_tex();
        _getlist._g = 51;
        _getlist.fn = "cs_geymytexascollect_tex";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(_getlist, this.sc_geymytexascollect_tex.bind(this));
    };
    MyCardSpectrumView.prototype.sc_geymytexascollect_tex = function (data) {
        this.texasCollectList = data.data;
        this.ui_cardItemList.numItems = this.texasCollectList.length;
    };
    MyCardSpectrumView.prototype.onClickItem = function (item) {
        console.log("-------", item);
        if (item.isDelect) {
            this.delItem.push(item);
            return;
        }
        console.error("cid=" + item.dataInfo.cid);
        LobbyViewCtr_1.default.instance.view.showMyCardHistory(item.dataInfo.cid);
    };
    MyCardSpectrumView.prototype.delectCardItem = function () {
        var _this = this;
        this.delItem.forEach(function (item) {
            _this.ui_cardItemList.removeChild(item);
            _this.cs_texascollect_tex(item.dataInfo.infoId);
        });
        this.setControllerProperty("edit", 0);
        this.ui_n119.visible = true;
        this.setCardIsEdit();
    };
    MyCardSpectrumView.prototype.qxCardItem = function () {
        this.delItem.forEach(function (item) {
            item.setTypeCon(0);
        });
        this.delItem = [];
        this.setControllerProperty("edit", 0);
        this.ui_n119.visible = true;
        this.setCardIsEdit();
    };
    MyCardSpectrumView.prototype.setCardIsEdit = function () {
        var _this = this;
        this.allItem.forEach(function (item) {
            item.setEditCon(_this.getControllerProperty("edit"));
        });
    };
    MyCardSpectrumView.prototype.renderListItem = function (index, item) {
        var card = item;
        var cardata = UIUtil_1.UIUtil.Concat(this.texasCollectList[index].OwnSpair, this.texasCollectList[index].compoker);
        card.setData(cardata, this.texasCollectList[index].OwnWin);
        card.dataInfo = this.texasCollectList[index];
        this.allItem.push(card);
    };
    MyCardSpectrumView.prototype.cs_texascollect_tex = function (infoId) {
        var _getlist = new CareerNetDataStruct_1.cs_texascollect_tex();
        _getlist._g = 51;
        // _getlist.levelid = this.Model.levelid;
        // _getlist.tableid = this.Model.tableid;
        _getlist.type = 1;
        _getlist.infoId = infoId;
        _getlist.fn = "cs_texascollect_tex";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(_getlist, this.sc_texascollect_tex.bind(this)); // () => { return true; });
    };
    MyCardSpectrumView.prototype.sc_texascollect_tex = function (data) {
        if (data.result == 1) {
            console.log("删除成功！");
        }
    };
    return MyCardSpectrumView;
}(ViewBase_1.default));
exports.default = MyCardSpectrumView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXGNhcmVlclxcTXlDYXJkU3BlY3RydW1WaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtFQUE2RDtBQUM3RCxrRkFBaUY7QUFDakYsMkRBQTBEO0FBQzFELGdEQUEyQztBQUUzQyw2REFBdUo7QUFFdko7O0dBRUc7QUFDSDtJQUFnRCxzQ0FBUTtJQUF4RDtRQUFBLHFFQXNIQztRQTNHVywwQkFBb0IsR0FBaUIsSUFBSSxDQUFDO1FBQ2xELFFBQVE7UUFDQSxxQkFBZSxHQUFpQixJQUFJLENBQUM7UUFDN0MsUUFBUTtRQUNBLHlCQUFtQixHQUFpQixJQUFJLENBQUM7UUFDekMscUJBQWUsR0FBZSxJQUFJLENBQUM7UUFDcEMsYUFBTyxHQUFpQixJQUFJLENBQUM7UUFFNUIsc0JBQWdCLEdBQXVCLElBQUksQ0FBQztRQW9DNUMsYUFBTyxHQUFtQixFQUFFLENBQUM7UUFDN0IsYUFBTyxHQUFtQixFQUFFLENBQUM7O0lBOER6QyxDQUFDO0lBcEhHLHNCQUFjLG1EQUFtQjthQUFqQztZQUNJLE9BQU8sVUFBVSxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWMsMkNBQVc7YUFBekI7WUFDSSxPQUFPLFdBQVcsQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUNELHNCQUFjLDZDQUFhO2FBQTNCO1lBQ0ksT0FBTyxnQkFBZ0IsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQVdELGtEQUFxQixHQUFyQjtRQUNJLGlCQUFNLHFCQUFxQixXQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ25DLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxJ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RyxFQUFFLENBQUM7UUFDakIseUNBQXlDO1FBQ3pDLHlDQUF5QztRQUN6QyxRQUFRLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNsQixRQUFRLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN6QixRQUFRLENBQUMsRUFBRSxHQUFHLHFCQUFxQixDQUFDO1FBQ3BDLG1DQUFnQixDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBLDJCQUEyQjtJQUNwSCxDQUFDO0lBRU0sZ0RBQW1CLEdBQTFCLFVBQTJCLElBQXlCO1FBQ2hELElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN4QjtJQUNMLENBQUM7SUFDTCx5QkFBQztBQUFELENBdEhBLEFBc0hDLENBdEgrQyxrQkFBUSxHQXNIdkQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlld0Jhc2UgZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvVmlld0Jhc2VcIjtcclxuaW1wb3J0IHsgV2ViU29ja2V0TWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL1dlYlNvY2tldE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgVUlVdGlsIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9Db21tb24vVUlVdGlsXCI7XHJcbmltcG9ydCBMb2JieVZpZXdDdHIgZnJvbSBcIi4uL0xvYmJ5Vmlld0N0clwiO1xyXG5pbXBvcnQgQ2FyZEluZm9JdGVtIGZyb20gXCIuL0NhcmRJbmZvSXRlbVwiO1xyXG5pbXBvcnQgeyBjc19nZXlteXRleGFzY29sbGVjdF90ZXgsIHNjX2dleW15dGV4YXNjb2xsZWN0X3RleCwgVGV4YXNDb2xsZWN0TGlzdCwgY3NfdGV4YXNjb2xsZWN0X3RleCwgc2NfdGV4YXNjb2xsZWN0X3RleCB9IGZyb20gXCIuL0NhcmVlck5ldERhdGFTdHJ1Y3RcIjtcclxuXHJcbi8qXHJcbiAqIEBkZXNjcmlwdGlvbiDmiJHnmoTniYzmma5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15Q2FyZFNwZWN0cnVtVmlldyBleHRlbmRzIFZpZXdCYXNlIHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IHBhY2thZ2VSZXNvdXJjZU5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJnYW1lSGFsbFwiO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGdldCBwYWNrYWdlTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcInJlcy9Mb2JieVwiO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGdldCBjb21wb25lbnROYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwibXlDYXJkU3BlY3RydW1cIjtcclxuICAgIH1cclxuICAgIHByaXZhdGUgdWlfYnRuX215Y2FyZFNwQnJlYWs6IGZndWkuR0J1dHRvbiA9IG51bGw7XHJcbiAgICAvKirlj5bmtoggKi9cclxuICAgIHByaXZhdGUgdWlfYnRuX215Q2FyZFF4OiBmZ3VpLkdCdXR0b24gPSBudWxsO1xyXG4gICAgLyoq5Yig6ZmkICovXHJcbiAgICBwcml2YXRlIHVpX2J0bl9teUNhcmREZWxlY3Q6IGZndWkuR0J1dHRvbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX2NhcmRJdGVtTGlzdDogZmd1aS5HTGlzdCA9IG51bGw7XHJcbiAgICBwdWJsaWMgdWlfbjExOTogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHRleGFzQ29sbGVjdExpc3Q6IFRleGFzQ29sbGVjdExpc3RbXSA9IG51bGw7XHJcblxyXG4gICAgY3JlYXRlQ2hpbGRDb21wb25lbnRzKCkge1xyXG4gICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkQ29tcG9uZW50cygpO1xyXG4gICAgICAgIHRoaXMuZmd1aUNvbXBvbmVudC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51aV9idG5fbXljYXJkU3BCcmVhay5vbkNsaWNrKHRoaXMuSGlkZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy51aV9jYXJkSXRlbUxpc3Qub24oZmd1aS5FdmVudC5DTElDS19JVEVNLCB0aGlzLm9uQ2xpY2tJdGVtLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnVpX2J0bl9teUNhcmREZWxlY3Qub25DbGljayh0aGlzLmRlbGVjdENhcmRJdGVtLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnVpX2J0bl9teUNhcmRReC5vbkNsaWNrKHRoaXMucXhDYXJkSXRlbSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMudWlfY2FyZEl0ZW1MaXN0Lml0ZW1SZW5kZXJlciA9IHRoaXMucmVuZGVyTGlzdEl0ZW0uYmluZCh0aGlzKTtcclxuICAgIH1cclxuICAgIE9uTG9hZENvbXBsZXRlZCgpIHtcclxuICAgICAgICB0aGlzLlNob3coKTtcclxuXHJcbiAgICAgICAgdGhpcy51aV9uMTE5Lm9uQ2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJQcm9wZXJ0eShcImVkaXRcIiwgMSlcclxuICAgICAgICAgICAgdGhpcy51aV9uMTE5LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRDYXJkSXNFZGl0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgU2hvdygpIHtcclxuICAgICAgICB0aGlzLmFsbEl0ZW0gPSBbXTtcclxuICAgICAgICBzdXBlci5TaG93KCk7XHJcbiAgICAgICAgbGV0IF9nZXRsaXN0OiBjc19nZXlteXRleGFzY29sbGVjdF90ZXggPSBuZXcgY3NfZ2V5bXl0ZXhhc2NvbGxlY3RfdGV4KCk7XHJcbiAgICAgICAgX2dldGxpc3QuX2cgPSA1MTtcclxuICAgICAgICBfZ2V0bGlzdC5mbiA9IFwiY3NfZ2V5bXl0ZXhhc2NvbGxlY3RfdGV4XCI7XHJcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5TZW5kSlNPTihfZ2V0bGlzdCwgdGhpcy5zY19nZXlteXRleGFzY29sbGVjdF90ZXguYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNjX2dleW15dGV4YXNjb2xsZWN0X3RleChkYXRhOiBzY19nZXlteXRleGFzY29sbGVjdF90ZXgpIHtcclxuICAgICAgICB0aGlzLnRleGFzQ29sbGVjdExpc3QgPSBkYXRhLmRhdGE7XHJcbiAgICAgICAgdGhpcy51aV9jYXJkSXRlbUxpc3QubnVtSXRlbXMgPSB0aGlzLnRleGFzQ29sbGVjdExpc3QubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGVsSXRlbTogQ2FyZEluZm9JdGVtW10gPSBbXTtcclxuICAgIHByaXZhdGUgYWxsSXRlbTogQ2FyZEluZm9JdGVtW10gPSBbXTtcclxuICAgIHB1YmxpYyBvbkNsaWNrSXRlbShpdGVtOiBDYXJkSW5mb0l0ZW0pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS1cIiwgaXRlbSk7XHJcbiAgICAgICAgaWYgKGl0ZW0uaXNEZWxlY3QpIHtcclxuICAgICAgICAgICAgdGhpcy5kZWxJdGVtLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcImNpZD1cIiArIGl0ZW0uZGF0YUluZm8uY2lkKTtcclxuICAgICAgICBMb2JieVZpZXdDdHIuaW5zdGFuY2Uudmlldy5zaG93TXlDYXJkSGlzdG9yeShpdGVtLmRhdGFJbmZvLmNpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGVjdENhcmRJdGVtKCkge1xyXG4gICAgICAgIHRoaXMuZGVsSXRlbS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudWlfY2FyZEl0ZW1MaXN0LnJlbW92ZUNoaWxkKGl0ZW0pO1xyXG4gICAgICAgICAgICB0aGlzLmNzX3RleGFzY29sbGVjdF90ZXgoaXRlbS5kYXRhSW5mby5pbmZvSWQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJQcm9wZXJ0eShcImVkaXRcIiwgMCk7XHJcbiAgICAgICAgdGhpcy51aV9uMTE5LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FyZElzRWRpdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBxeENhcmRJdGVtKCkge1xyXG4gICAgICAgIHRoaXMuZGVsSXRlbS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0VHlwZUNvbigwKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmRlbEl0ZW0gPSBbXTtcclxuICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJQcm9wZXJ0eShcImVkaXRcIiwgMCk7XHJcbiAgICAgICAgdGhpcy51aV9uMTE5LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FyZElzRWRpdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRDYXJkSXNFZGl0KCkge1xyXG4gICAgICAgIHRoaXMuYWxsSXRlbS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0RWRpdENvbih0aGlzLmdldENvbnRyb2xsZXJQcm9wZXJ0eShcImVkaXRcIikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXJMaXN0SXRlbShpbmRleDogbnVtYmVyLCBpdGVtOiBmZ3VpLkdPYmplY3QpIHtcclxuICAgICAgICBsZXQgY2FyZDogQ2FyZEluZm9JdGVtID0gaXRlbSBhcyBDYXJkSW5mb0l0ZW07XHJcbiAgICAgICAgbGV0IGNhcmRhdGE6IG51bWJlcltdID0gVUlVdGlsLkNvbmNhdCh0aGlzLnRleGFzQ29sbGVjdExpc3RbaW5kZXhdLk93blNwYWlyLCB0aGlzLnRleGFzQ29sbGVjdExpc3RbaW5kZXhdLmNvbXBva2VyKTtcclxuICAgICAgICBjYXJkLnNldERhdGEoY2FyZGF0YSwgdGhpcy50ZXhhc0NvbGxlY3RMaXN0W2luZGV4XS5Pd25XaW4pO1xyXG4gICAgICAgIGNhcmQuZGF0YUluZm8gPSB0aGlzLnRleGFzQ29sbGVjdExpc3RbaW5kZXhdO1xyXG4gICAgICAgIHRoaXMuYWxsSXRlbS5wdXNoKGNhcmQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjc190ZXhhc2NvbGxlY3RfdGV4KGluZm9JZDogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IF9nZXRsaXN0OiBjc190ZXhhc2NvbGxlY3RfdGV4ID0gbmV3IGNzX3RleGFzY29sbGVjdF90ZXgoKTtcclxuICAgICAgICBfZ2V0bGlzdC5fZyA9IDUxO1xyXG4gICAgICAgIC8vIF9nZXRsaXN0LmxldmVsaWQgPSB0aGlzLk1vZGVsLmxldmVsaWQ7XHJcbiAgICAgICAgLy8gX2dldGxpc3QudGFibGVpZCA9IHRoaXMuTW9kZWwudGFibGVpZDtcclxuICAgICAgICBfZ2V0bGlzdC50eXBlID0gMTtcclxuICAgICAgICBfZ2V0bGlzdC5pbmZvSWQgPSBpbmZvSWQ7XHJcbiAgICAgICAgX2dldGxpc3QuZm4gPSBcImNzX3RleGFzY29sbGVjdF90ZXhcIjtcclxuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlNlbmRKU09OKF9nZXRsaXN0LCB0aGlzLnNjX3RleGFzY29sbGVjdF90ZXguYmluZCh0aGlzKSk7Ly8gKCkgPT4geyByZXR1cm4gdHJ1ZTsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNjX3RleGFzY29sbGVjdF90ZXgoZGF0YTogc2NfdGV4YXNjb2xsZWN0X3RleCkge1xyXG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCA9PSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Yig6Zmk5oiQ5Yqf77yBXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==