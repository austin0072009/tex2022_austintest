"use strict";
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