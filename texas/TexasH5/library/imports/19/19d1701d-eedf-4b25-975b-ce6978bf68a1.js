"use strict";
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