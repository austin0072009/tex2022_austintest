"use strict";
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