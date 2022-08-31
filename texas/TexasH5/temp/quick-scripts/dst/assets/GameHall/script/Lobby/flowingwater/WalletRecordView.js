
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/flowingwater/WalletRecordView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXGZsb3dpbmd3YXRlclxcV2FsbGV0UmVjb3JkVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwRUFBeUU7QUFDekUsb0VBQW1FO0FBQ25FLGtFQUE2RDtBQUM3RCw0RUFBdUU7QUFDdkUsMkRBQTBEO0FBQzFELDJGQUEwRjtBQUMxRixzRUFBcUU7QUFFckU7O0dBRUc7QUFDSDtJQUE4QyxvQ0FBUTtJQUF0RDtRQUFBLHFFQW1NQztRQXhMVyx1QkFBaUIsR0FBaUIsSUFBSSxDQUFDO1FBQ3ZDLHFCQUFlLEdBQWUsSUFBSSxDQUFDO1FBQ25DLHNCQUFnQixHQUFrRCxFQUFFLENBQUM7UUFDckUsaUJBQVcsR0FBbUIsSUFBSSxDQUFDO1FBQzNDLFdBQVc7UUFDSCxlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBSTlCLGVBQWU7UUFDUCxrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUlqQyxXQUFXO1FBQ0gscUJBQWUsR0FBYSxFQUFFLENBQUM7UUFFdkMsbUVBQW1FO1FBQzNELGdCQUFVLEdBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQStFeEUsY0FBYztRQUNOLGlCQUFXLEdBQVksSUFBSSxDQUFDOztJQXNGeEMsQ0FBQztJQWxNRyxzQkFBYyxpREFBbUI7YUFBakM7WUFDSSxPQUFPLFVBQVUsQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUNELHNCQUFjLHlDQUFXO2FBQXpCO1lBQ0ksT0FBTyxXQUFXLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYywyQ0FBYTthQUEzQjtZQUNJLE9BQU8sY0FBYyxDQUFDO1FBQzFC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QixDQUFDLE1BQU0sQ0FBQztnQkFDN0Qsc0RBQXNEO2FBQ3pEO2lCQUFNO2dCQUNILHFCQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM3QztRQUNMLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEdBQUc7WUFDUCxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNqQyxFQUFFLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQy9CLHFCQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUMsQ0FBQTtJQUNWLENBQUM7SUFLTSwrQkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO1FBQzdELElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLGlCQUFNLElBQUksV0FBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTCx1QkFBQztBQUFELENBbk1BLEFBbU1DLENBbk02QyxrQkFBUSxHQW1NckQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdWRpb01hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IHsgQ29tbW9uQ3RyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvQ29tbW9uQ3RyXCI7XHJcbmltcG9ydCBWaWV3QmFzZSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9WaWV3QmFzZVwiO1xyXG5pbXBvcnQgSHR0cEhlbHBFeCBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0NvbW1vbi9NYW5hZ2Vycy9IdHRwSGVscEV4XCI7XHJcbmltcG9ydCB7IFVJVXRpbCB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQ29tbW9uL1VJVXRpbFwiO1xyXG5pbXBvcnQgeyBBcHBDb25zdCB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvbW9kdWxlcy9Ac2xvdHNtYXN0ZXIvdWktY29tbW9uL2xpYi9BcHBDb25zdFwiO1xyXG5pbXBvcnQgeyBCYXNlRnJhbWVOYXRpdmUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZU5hdGl2ZVwiO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDmiJHnmoTpjKLljIVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhbGxldFJlY29yZFZpZXcgZXh0ZW5kcyBWaWV3QmFzZSB7XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IHBhY2thZ2VSZXNvdXJjZU5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJnYW1lSGFsbFwiO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGdldCBwYWNrYWdlTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcInJlcy9Mb2JieVwiO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGdldCBjb21wb25lbnROYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwid2FsbGV0UmVjb3JkXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1aV9idG5fd2F0ZXJCcmVhazogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfdHVybm92ZXJMaXN0OiBmZ3VpLkdMaXN0ID0gbnVsbDtcclxuICAgIHByaXZhdGUgdHVybm92ZXJMaXN0RGF0YTogeyB0eXBlOiBudW1iZXIsIHRpbWU6IHN0cmluZywgd2luOiBudW1iZXIgfVtdID0gW107XHJcbiAgICBwcml2YXRlIHVpX2dhbWVEb3duOiBmZ3VpLkdDb21ib0JveCA9IG51bGw7XHJcbiAgICAvKirlvZPliY3nmoTpobXmlbAgKi9cclxuICAgIHByaXZhdGUgcGFnZUluZGV4OiBudW1iZXIgPSAxO1xyXG5cclxuICAgIC8qKuW9k+WJjeaVsOaNrueahOaAu+aVsCAqL1xyXG4gICAgcHJpdmF0ZSB0b3RhbENvdW50OiBudW1iZXI7XHJcbiAgICAvKirlvZPliY3mn6Xor6LnmoTmuLjmiI9pZCAqL1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RHYW1lSWQ6IG51bWJlciA9IDA7XHJcbiAgICAvKirkuIrmrKHmn6Xor6LnmoTmuLjmiI9pZCAqL1xyXG4gICAgcHJpdmF0ZSBsYXN0R2FtZUlkOiBudW1iZXJbXTtcclxuXHJcbiAgICAvKirpgbjmk4fnmoTpoZ7lnosgKi9cclxuICAgIHByaXZhdGUgc2VsZWN0Q2hhbmdUeXBlOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIC8vIHByaXZhdGUgY29tYm9ib3hJdGVtOiBzdHJpbmdbXSA9IFtcIuWFqOmDqFwiLCBcIuWPl+i0iFwiLCBcIui0iOmAgVwiLCBcIuWFheWAvFwiLCBcIuaPkOePvlwiXTtcclxuICAgIHByaXZhdGUgY2hhbmdlVHlwZTogbnVtYmVyW11bXSA9IFtbNywgOCwgMTAsIDQ3XSwgWzddLCBbOF0sIFsxMF0sIFs0N11dO1xyXG5cclxuICAgIGNyZWF0ZUNoaWxkQ29tcG9uZW50cygpIHtcclxuICAgICAgICBzdXBlci5jcmVhdGVDaGlsZENvbXBvbmVudHMoKTtcclxuICAgICAgICB0aGlzLmZndWlDb21wb25lbnQudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vIHRoaXMudWlfZ2FtZURvd24uaXRlbXMgPSB0aGlzLmNvbWJvYm94SXRlbTtcclxuICAgICAgICB0aGlzLnNlbGVjdENoYW5nVHlwZSA9IHRoaXMuY2hhbmdlVHlwZVt0aGlzLnVpX2dhbWVEb3duLnNlbGVjdGVkSW5kZXhdO1xyXG4gICAgICAgIHRoaXMudWlfYnRuX3dhdGVyQnJlYWsub25DbGljayh0aGlzLkhpZGUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudWlfdHVybm92ZXJMaXN0LnNldFZpcnR1YWwoKTtcclxuICAgICAgICB0aGlzLnVpX3R1cm5vdmVyTGlzdC5pdGVtUmVuZGVyZXIgPSB0aGlzLnJlbmRlckxpc3RJdGVtLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy51aV90dXJub3Zlckxpc3Qub24oZmd1aS5FdmVudC5QVUxMX1VQX1JFTEVBU0UsIHRoaXMub25QdWxsVXBUb1JlZnJlc2gsIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnVpX2dhbWVEb3duLm9uKGZndWkuRXZlbnQuU1RBVFVTX0NIQU5HRUQsIHRoaXMub25DaGFuZ2VkLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBPbkxvYWRDb21wbGV0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5TaG93KCk7XHJcbiAgICB9XHJcbiAgICBIaWRlKCkge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnV2FsbGV0UmVjb3JkVmlldycsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHN1cGVyLkhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyTGlzdEl0ZW0oaW5kZXg6IG51bWJlciwgb2JqOiBmZ3VpLkdPYmplY3QpIHtcclxuICAgICAgICBsZXQgaXRlbSA9IDxmZ3VpLkdDb21wb25lbnQ+b2JqO1xyXG4gICAgICAgIGxldCB0eXBlID0gaXRlbS5nZXRDaGlsZChcIm4xXCIpLmFzVGV4dEZpZWxkO1xyXG4gICAgICAgIGxldCB0aW1lID0gaXRlbS5nZXRDaGlsZChcIm4yXCIpLmFzVGV4dEZpZWxkO1xyXG5cclxuICAgICAgICBsZXQgd2luID0gaXRlbS5nZXRDaGlsZChcIm4zXCIpLmFzVGV4dEZpZWxkO1xyXG5cclxuICAgICAgICBsZXQgY29sb3IgPSBpdGVtLmdldENvbnRyb2xsZXIoXCJjb2xvclwiKTtcclxuXHJcbiAgICAgICAgbGV0IHN0ciA9ICcnO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy50dXJub3Zlckxpc3REYXRhW2luZGV4XS50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMzM6ICAvL1xyXG4gICAgICAgICAgICAgICAgc3RyID0gJ+W4tuWFpSc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzNDogIC8v6L+U6L+YIFxyXG4gICAgICAgICAgICAgICAgc3RyID0gJ+i/lOmChCc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA3OiAgLy/lj5fotaBcclxuICAgICAgICAgICAgICAgIHN0ciA9ICflj5fotIgnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgODogIC8v6LWg6YCBXHJcbiAgICAgICAgICAgICAgICBzdHIgPSAn6LSI6YCBJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEwOlxyXG4gICAgICAgICAgICAgICAgc3RyID0gXCLlhYXlgLxcIjsvLyfkuIrkuIvliIYnOyAgIC8v5YWF5YC8XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0NzpcclxuICAgICAgICAgICAgICAgIHN0ciA9ICfmj5Dnj74nO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBzdHIgPSAn5LiK5LiL5YiGJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0eXBlLnRleHQgPSBzdHI7XHJcbiAgICAgICAgdGltZS50ZXh0ID0gdGhpcy50dXJub3Zlckxpc3REYXRhW2luZGV4XS50aW1lO1xyXG4gICAgICAgIGlmICh0aGlzLnR1cm5vdmVyTGlzdERhdGFbaW5kZXhdLndpbiA+IDApIHtcclxuICAgICAgICAgICAgY29sb3Iuc2V0U2VsZWN0ZWRJbmRleCgwKTtcclxuICAgICAgICAgICAgd2luLnRleHQgPSAnKycgKyB0aGlzLnR1cm5vdmVyTGlzdERhdGFbaW5kZXhdLndpbjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb2xvci5zZXRTZWxlY3RlZEluZGV4KDEpO1xyXG4gICAgICAgICAgICB3aW4udGV4dCA9IHRoaXMudHVybm92ZXJMaXN0RGF0YVtpbmRleF0ud2luICsgJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKuS4iuWIt+aWsCAqL1xyXG4gICAgcHVibGljIG9uUHVsbFVwVG9SZWZyZXNoKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5nZXREYXRhQm9vbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnR1cm5vdmVyTGlzdERhdGEubGVuZ3RoIDwgMTUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBhZ2VJbmRleCArPSAxO1xyXG4gICAgICAgIHRoaXMuZ2V0RGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuaYr+WQpuWPr+S7peiOt+WPluaVsOaNriAqL1xyXG4gICAgcHJpdmF0ZSBnZXREYXRhQm9vbDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgLyoq5LiL5ouJ54uA5oWL6K6K5YyWICovXHJcbiAgICBwdWJsaWMgb25DaGFuZ2VkKCkge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnV2FsbGV0UmVjb3JkVmlldycsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0Q2hhbmdUeXBlID0gdGhpcy5jaGFuZ2VUeXBlW3RoaXMudWlfZ2FtZURvd24uc2VsZWN0ZWRJbmRleF07XHJcbiAgICAgICAgaWYgKHRoaXMubGFzdEdhbWVJZCA9PSB0aGlzLnNlbGVjdENoYW5nVHlwZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudHVybm92ZXJMaXN0RGF0YSA9IFtdO1xyXG4gICAgICAgIHRoaXMucGFnZUluZGV4ID0gMTtcclxuICAgICAgICB0aGlzLmdldERhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RGF0YSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZ2V0RGF0YUJvb2wpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmZ3VpLkdSb290Lmluc3Quc2hvd01vZGFsV2FpdCgpO1xyXG4gICAgICAgIHRoaXMuZ2V0RGF0YUJvb2wgPSBmYWxzZTtcclxuICAgICAgICAvLyBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKFwi5q2j5Zyo6I635Y+W5pWw5o2uXCIpO1xyXG4gICAgICAgIGxldCB1cmwgPSBCYXNlRnJhbWVOYXRpdmUuc2VydmVybGlzdEl0ZW0uYXBpQWRyZXNzICsgXCIvYXBpL2dhbWVsb2cvR2V0SmFja1VzZXJMb2czXCI7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgUGFnZVNpemU6IDIwLCAvL+mggemdouWkp+Wwj1xyXG4gICAgICAgICAgICBwYWdlSW5kZXg6IHRoaXMucGFnZUluZGV4LCAvL+mhteaVsFxyXG4gICAgICAgICAgICB1c2VyaWQ6IEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC51c2VyaWQgKyAnJyxcclxuICAgICAgICAgICAgR2FtZUlkOiB0aGlzLnNlbGVjdEdhbWVJZCxcclxuICAgICAgICAgICAgY2hhbmdlVHlwZTogdGhpcy5zZWxlY3RDaGFuZ1R5cGUsLy9bNywgOCwgMTAsIDQ3XSwgIC8vXHJcbiAgICAgICAgICAgIEtleXdvcmRzOiAnJ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIEh0dHBIZWxwRXguaW5zdGFuY2UucG9zdCh1cmwsIHBhcmFtcylcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhQm9vbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCIgIC0tLS0tLXJlcy0tLS1cIiwgcmVzKTtcclxuICAgICAgICAgICAgICAgIGZndWkuR1Jvb3QuaW5zdC5jbG9zZU1vZGFsV2FpdCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5jb2RlID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnBhZ2VJbmRleCA9IHJlcy5kYXRhLnBhZ2VJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnRvdGFsQ291bnQgPSByZXMuZGF0YS50b3RhbENvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGFzdEdhbWVJZCAmJiB0aGlzLmxhc3RHYW1lSWQubGVuZ3RoID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGFzdEdhbWVJZCAhPSB0aGlzLnNlbGVjdENoYW5nVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50dXJub3Zlckxpc3REYXRhID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR1cm5vdmVyTGlzdERhdGEgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0R2FtZUlkID0gdGhpcy5zZWxlY3RDaGFuZ1R5cGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmZvID0geyB0eXBlOiBudWxsLCB0aW1lOiBudWxsLCBnYW1lTmFtZTogJycsIHdpbjogbnVsbCB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5mby50eXBlID0gZGF0YVtpXS5jaGFuZ2VUeXBlOyAvL+exu+Wei1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5mby50aW1lID0gZGF0YVtpXS50aW1lOyAgLy/ml7bpl7RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZm8ud2luID0gVUlVdGlsLmZvcm1hdE51bWJlcjEwMChkYXRhW2ldLmdvbGQpOyAgLy/ph5Hpop1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmZvLnR5cGUgPT0gNyB8fCBpbmZvLnR5cGUgPT0gMTAgfHwgaW5mby50eXBlID09IDQ3IHx8IGluZm8udHlwZSA9PSA4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50dXJub3Zlckxpc3REYXRhLnB1c2goaW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKFwi5pqC5peg5pWw5o2uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpX3R1cm5vdmVyTGlzdC5udW1JdGVtcyA9IHRoaXMudHVybm92ZXJMaXN0RGF0YS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy51aV90dXJub3Zlckxpc3Quc2Nyb2xsUGFuZS5zY3JvbGxCb3R0b20odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwoXCLojrflj5bmlbDmja7lpLHotKVcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldERhdGFCb29sID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGZndWkuR1Jvb3QuaW5zdC5jbG9zZU1vZGFsV2FpdCgpO1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiLS0tLS0tLS0tLWVyci0tLVwiLCBlcnIpXHJcbiAgICAgICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKFwi6I635Y+W5pWw5o2u5aSx6LSlXCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyBTaG93KCkge1xyXG4gICAgICAgIHRoaXMudHVybm92ZXJMaXN0RGF0YSA9IFtdO1xyXG4gICAgICAgIHRoaXMudWlfdHVybm92ZXJMaXN0Lm51bUl0ZW1zID0gdGhpcy50dXJub3Zlckxpc3REYXRhLmxlbmd0aDtcclxuICAgICAgICB0aGlzLnBhZ2VJbmRleCA9IDE7XHJcbiAgICAgICAgdGhpcy5nZXREYXRhKCk7XHJcbiAgICAgICAgc3VwZXIuU2hvdygpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==