"use strict";
cc._RF.push(module, '8ea3ek6gs1BvIAwcaBhWAhO', 'FlowingWaterView');
// GameHall/script/Lobby/flowingwater/FlowingWaterView.ts

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
var CommonCtr_1 = require("../../../../Script/BaseFrame/CommonCtr");
var ViewBase_1 = require("../../../../Script/BaseFrame/ViewBase");
var HttpHelpEx_1 = require("../../../../Script/Common/Managers/HttpHelpEx");
var UIUtil_1 = require("../../../../Script/Common/UIUtil");
var AppConst_1 = require("../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst");
var BaseFrameNative_1 = require("../../../../Script/BaseFrameNative");
/**
 * @description 我的流水
 */
var FlowingWaterView = /** @class */ (function (_super) {
    __extends(FlowingWaterView, _super);
    function FlowingWaterView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btn_waterBreak = null;
        _this.ui_gameDown = null;
        _this.ui_turnoverList = null;
        // private comboboxItem: string[] = ["全部", "德州撲克", "德州牛仔", "龍虎", "忍者", "哪吒傳奇",
        //     "九綫拉王", "宙斯", "火牛奇襲", "水果瑪麗", "財神過年", "火之女王"];
        _this.comboboxItemId = [0, 51, 104, 21, 201, 505, 92, 254, 4096, 91, 258, 54];
        _this.comboboxItem = ["全部", "帶入", "返還", "受贈", "贈送", "充值", "提現"];
        _this.changeType = [0, 33, 34, 7, 8, 10, 47];
        _this.turnoverListData = [];
        /**当前的页数 */
        _this.pageIndex = 1;
        /**当前查询的游戏id */
        _this.selectGameId = 0;
        /**選擇的類型 */
        _this.selectChangType = 0;
        /**是否可以获取数据 */
        _this.getDataBool = true;
        return _this;
    }
    Object.defineProperty(FlowingWaterView.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowingWaterView.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowingWaterView.prototype, "componentName", {
        get: function () {
            return "flowingwater";
        },
        enumerable: false,
        configurable: true
    });
    FlowingWaterView.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.visible = false;
        this.ui_btn_waterBreak.onClick(this.Hide, this);
        this.ui_gameDown.items = this.comboboxItem;
        this.ui_turnoverList.setVirtual();
        this.ui_turnoverList.itemRenderer = this.renderListItem.bind(this);
        this.ui_turnoverList.on(fgui.Event.PULL_UP_RELEASE, this.onPullUpToRefresh, this);
        this.ui_gameDown.on(fgui.Event.STATUS_CHANGED, this.onChanged, this);
    };
    FlowingWaterView.prototype.OnLoadCompleted = function () {
        this.Show();
    };
    FlowingWaterView.prototype.Hide = function () {
        AudioManager_1.AudioManager.Singleton.play('FlowingWaterView', "button");
        _super.prototype.Hide.call(this);
    };
    FlowingWaterView.prototype.renderListItem = function (index, obj) {
        var item = obj;
        var streamNum = item.getChild("n1").asTextField;
        var time = item.getChild("n2").asTextField;
        var gameName = item.getChild("n3").asTextField;
        var win = item.getChild("n4").asTextField;
        var color = item.getController("color");
        var str = '';
        switch (this.turnoverListData[index].type) {
            case 33: //
                str = '帶入';
                break;
            case 34: //返还 
                str = '返還';
                break;
            case 7: //受赠
                str = '受贈';
                break;
            case 8: //赠送
                str = '贈送';
                break;
            case 10:
                str = '充值';
                break;
            case 47:
                str = '提現';
                break;
            default:
                str = '上下分';
                break;
        }
        streamNum.text = str;
        time.text = this.turnoverListData[index].time;
        gameName.text = this.turnoverListData[index].gameName;
        if (this.turnoverListData[index].win > 0) {
            color.setSelectedIndex(0);
            win.text = '+' + this.turnoverListData[index].win;
        }
        else {
            color.setSelectedIndex(1);
            win.text = this.turnoverListData[index].win + '';
        }
    };
    /**上刷新 */
    FlowingWaterView.prototype.onPullUpToRefresh = function () {
        if (!this.getDataBool) {
            return;
        }
        // if (this.pageIndex * 20 > this.totalCount) {
        //     return;
        // }
        this.pageIndex += 1;
        this.getData();
    };
    /**下拉狀態變化 */
    FlowingWaterView.prototype.onChanged = function () {
        AudioManager_1.AudioManager.Singleton.play('FlowingWaterView', "button");
        // this.selectGameId = this.comboboxItemId[this.ui_gameDown.selectedIndex];
        this.selectChangType = this.changeType[this.ui_gameDown.selectedIndex];
        if (this.lastGameId == this.selectChangType) {
            return;
        }
        this.turnoverListData = [];
        this.pageIndex = 1;
        this.getData();
    };
    FlowingWaterView.prototype.getData = function () {
        var _this = this;
        if (!this.getDataBool) {
            return;
        }
        this.getDataBool = false;
        // CommonCtr.instance.ShowTipLabel("正在获取数据");
        var url = BaseFrameNative_1.BaseFrameNative.serverlistItem.apiAdress + "/api/gamelog/GetJackUserLog2";
        var params = {
            PageSize: 20,
            pageIndex: this.pageIndex,
            userid: AppConst_1.AppConst.mPlayerModel.userid + '',
            GameId: this.selectGameId,
            changeType: this.selectChangType
        };
        HttpHelpEx_1.default.instance.post(url, params)
            .then(function (res) {
            _this.getDataBool = true;
            cc.log("  ------res----", res);
            if (res.code == 1) {
                // this.pageIndex = res.data.pageIndex;
                // this.totalCount = res.data.totalCount;
                var data = res.data;
                if (_this.lastGameId >= 0) {
                    if (_this.lastGameId != _this.selectChangType) {
                        _this.turnoverListData = [];
                    }
                }
                else {
                    _this.turnoverListData = [];
                }
                _this.lastGameId = _this.selectChangType;
                if (data.length > 0) {
                    for (var i = 0; i < data.length; i++) {
                        var info = { type: null, time: null, gameName: '', win: null };
                        info.type = data[i].changeType; //类型
                        info.time = data[i].time; //时间
                        info.gameName = data[i].gameName.split("≡")[0]; //名字  "財神過年≡God Of Wealth New Year"
                        info.win = UIUtil_1.UIUtil.formatNumber100(data[i].gold); //金额
                        _this.turnoverListData.push(info);
                    }
                }
                else {
                    CommonCtr_1.CommonCtr.instance.ShowTipLabel("暂无数据");
                }
                _this.ui_turnoverList.numItems = _this.turnoverListData.length;
                _this.ui_turnoverList.scrollPane.scrollBottom(true);
            }
            else {
                CommonCtr_1.CommonCtr.instance.ShowTipLabel("获取数据失败");
            }
        })
            .catch(function (err) {
            _this.getDataBool = true;
            cc.log("----------err---", err);
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("获取数据失败");
        });
    };
    FlowingWaterView.prototype.Show = function () {
        this.turnoverListData = [];
        this.ui_turnoverList.numItems = this.turnoverListData.length;
        this.pageIndex = 1;
        this.getData();
        _super.prototype.Show.call(this);
    };
    return FlowingWaterView;
}(ViewBase_1.default));
exports.default = FlowingWaterView;

cc._RF.pop();