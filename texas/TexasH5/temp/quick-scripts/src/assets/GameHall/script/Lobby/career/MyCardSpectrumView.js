"use strict";
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