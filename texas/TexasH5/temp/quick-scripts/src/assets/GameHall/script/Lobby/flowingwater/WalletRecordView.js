"use strict";
cc._RF.push(module, 'b84b0AXkP5EuLUPuA05SP1R', 'WalletRecordView');
// GameHall/script/Lobby/flowingwater/WalletRecordView.ts

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
 * @description 我的錢包
 */
var WalletRecordView = /** @class */ (function (_super) {
    __extends(WalletRecordView, _super);
    function WalletRecordView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btn_waterBreak = null;
        _this.ui_turnoverList = null;
        _this.turnoverListData = [];
        _this.ui_gameDown = null;
        /**当前的页数 */
        _this.pageIndex = 1;
        /**当前查询的游戏id */
        _this.selectGameId = 0;
        /**選擇的類型 */
        _this.selectChangType = [];
        // private comboboxItem: string[] = ["全部", "受贈", "贈送", "充值", "提現"];
        _this.changeType = [[7, 8, 10, 47], [7], [8], [10], [47]];
        /**是否可以获取数据 */
        _this.getDataBool = true;
        return _this;
    }
    Object.defineProperty(WalletRecordView.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WalletRecordView.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WalletRecordView.prototype, "componentName", {
        get: function () {
            return "walletRecord";
        },
        enumerable: false,
        configurable: true
    });
    WalletRecordView.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.visible = false;
        // this.ui_gameDown.items = this.comboboxItem;
        this.selectChangType = this.changeType[this.ui_gameDown.selectedIndex];
        this.ui_btn_waterBreak.onClick(this.Hide, this);
        this.ui_turnoverList.setVirtual();
        this.ui_turnoverList.itemRenderer = this.renderListItem.bind(this);
        this.ui_turnoverList.on(fgui.Event.PULL_UP_RELEASE, this.onPullUpToRefresh, this);
        this.ui_gameDown.on(fgui.Event.STATUS_CHANGED, this.onChanged, this);
    };
    WalletRecordView.prototype.OnLoadCompleted = function () {
        this.Show();
    };
    WalletRecordView.prototype.Hide = function () {
        AudioManager_1.AudioManager.Singleton.play('WalletRecordView', "button");
        _super.prototype.Hide.call(this);
    };
    WalletRecordView.prototype.renderListItem = function (index, obj) {
        var item = obj;
        var type = item.getChild("n1").asTextField;
        var time = item.getChild("n2").asTextField;
        var win = item.getChild("n3").asTextField;
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
                str = "充值"; //'上下分';   //充值
                break;
            case 47:
                str = '提現';
                break;
            default:
                str = '上下分';
                break;
        }
        type.text = str;
        time.text = this.turnoverListData[index].time;
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
    WalletRecordView.prototype.onPullUpToRefresh = function () {
        if (!this.getDataBool) {
            return;
        }
        if (this.turnoverListData.length < 15) {
            return;
        }
        this.pageIndex += 1;
        this.getData();
    };
    /**下拉狀態變化 */
    WalletRecordView.prototype.onChanged = function () {
        AudioManager_1.AudioManager.Singleton.play('WalletRecordView', "button");
        this.selectChangType = this.changeType[this.ui_gameDown.selectedIndex];
        if (this.lastGameId == this.selectChangType) {
            return;
        }
        this.turnoverListData = [];
        this.pageIndex = 1;
        this.getData();
    };
    WalletRecordView.prototype.getData = function () {
        var _this = this;
        if (!this.getDataBool) {
            return;
        }
        fgui.GRoot.inst.showModalWait();
        this.getDataBool = false;
        // CommonCtr.instance.ShowTipLabel("正在获取数据");
        var url = BaseFrameNative_1.BaseFrameNative.serverlistItem.apiAdress + "/api/gamelog/GetJackUserLog3";
        var params = {
            PageSize: 20,
            pageIndex: this.pageIndex,
            userid: AppConst_1.AppConst.mPlayerModel.userid + '',
            GameId: this.selectGameId,
            changeType: this.selectChangType,
            Keywords: ''
        };
        HttpHelpEx_1.default.instance.post(url, params)
            .then(function (res) {
            _this.getDataBool = true;
            cc.log("  ------res----", res);
            fgui.GRoot.inst.closeModalWait();
            if (res.code == 1) {
                // this.pageIndex = res.data.pageIndex;
                // this.totalCount = res.data.totalCount;
                var data = res.data;
                if (_this.lastGameId && _this.lastGameId.length >= 0) {
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
                        info.win = UIUtil_1.UIUtil.formatNumber100(data[i].gold); //金额
                        if (info.type == 7 || info.type == 10 || info.type == 47 || info.type == 8) {
                            _this.turnoverListData.push(info);
                        }
                    }
                }
                else {
                    CommonCtr_1.CommonCtr.instance.ShowTipLabel("暂无数据");
                }
                _this.ui_turnoverList.numItems = _this.turnoverListData.length;
                // this.ui_turnoverList.scrollPane.scrollBottom(true);
            }
            else {
                CommonCtr_1.CommonCtr.instance.ShowTipLabel("获取数据失败");
            }
        })
            .catch(function (err) {
            _this.getDataBool = true;
            fgui.GRoot.inst.closeModalWait();
            cc.log("----------err---", err);
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("获取数据失败");
        });
    };
    WalletRecordView.prototype.Show = function () {
        this.turnoverListData = [];
        this.ui_turnoverList.numItems = this.turnoverListData.length;
        this.pageIndex = 1;
        this.getData();
        _super.prototype.Show.call(this);
    };
    return WalletRecordView;
}(ViewBase_1.default));
exports.default = WalletRecordView;

cc._RF.pop();