
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/flowingwater/FlowingWaterView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXGZsb3dpbmd3YXRlclxcRmxvd2luZ1dhdGVyVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwRUFBeUU7QUFDekUsb0VBQW1FO0FBQ25FLGtFQUE2RDtBQUM3RCw0RUFBdUU7QUFDdkUsMkRBQTBEO0FBQzFELDJGQUEwRjtBQUMxRixzRUFBcUU7QUFFckU7O0dBRUc7QUFDSDtJQUE4QyxvQ0FBUTtJQUF0RDtRQUFBLHFFQXlNQztRQTlMVyx1QkFBaUIsR0FBaUIsSUFBSSxDQUFDO1FBQ3ZDLGlCQUFXLEdBQW1CLElBQUksQ0FBQztRQUNuQyxxQkFBZSxHQUFlLElBQUksQ0FBQztRQUUzQyw4RUFBOEU7UUFDOUUscURBQXFEO1FBQzdDLG9CQUFjLEdBQWEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWxGLGtCQUFZLEdBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwRSxnQkFBVSxHQUFhLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFHakQsc0JBQWdCLEdBQW9FLEVBQUUsQ0FBQztRQUUvRixXQUFXO1FBQ0gsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUk5QixlQUFlO1FBQ1Asa0JBQVksR0FBVyxDQUFDLENBQUM7UUFJakMsV0FBVztRQUNILHFCQUFlLEdBQVcsQ0FBQyxDQUFDO1FBaUZwQyxjQUFjO1FBQ04saUJBQVcsR0FB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LENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUMzQztnQkFDRCxLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO2dCQUM3RCxLQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdEQ7aUJBQU07Z0JBQ0gscUJBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzdDO1FBRUwsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsR0FBRztZQUNQLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLEVBQUUsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDL0IscUJBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUFBO0lBQ1YsQ0FBQztJQUtNLCtCQUFJLEdBQVg7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7UUFDN0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsaUJBQU0sSUFBSSxXQUFFLENBQUM7SUFDakIsQ0FBQztJQUVMLHVCQUFDO0FBQUQsQ0F6TUEsQUF5TUMsQ0F6TTZDLGtCQUFRLEdBeU1yRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1ZGlvTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBDb21tb25DdHIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9Db21tb25DdHJcIjtcclxuaW1wb3J0IFZpZXdCYXNlIGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL1ZpZXdCYXNlXCI7XHJcbmltcG9ydCBIdHRwSGVscEV4IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQ29tbW9uL01hbmFnZXJzL0h0dHBIZWxwRXhcIjtcclxuaW1wb3J0IHsgVUlVdGlsIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9Db21tb24vVUlVdGlsXCI7XHJcbmltcG9ydCB7IEFwcENvbnN0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9tb2R1bGVzL0BzbG90c21hc3Rlci91aS1jb21tb24vbGliL0FwcENvbnN0XCI7XHJcbmltcG9ydCB7IEJhc2VGcmFtZU5hdGl2ZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lTmF0aXZlXCI7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIOaIkeeahOa1geawtFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxvd2luZ1dhdGVyVmlldyBleHRlbmRzIFZpZXdCYXNlIHtcclxuICAgIHByb3RlY3RlZCBnZXQgcGFja2FnZVJlc291cmNlTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcImdhbWVIYWxsXCI7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IHBhY2thZ2VOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwicmVzL0xvYmJ5XCI7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IGNvbXBvbmVudE5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJmbG93aW5nd2F0ZXJcIjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVpX2J0bl93YXRlckJyZWFrOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9nYW1lRG93bjogZmd1aS5HQ29tYm9Cb3ggPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV90dXJub3Zlckxpc3Q6IGZndWkuR0xpc3QgPSBudWxsO1xyXG5cclxuICAgIC8vIHByaXZhdGUgY29tYm9ib3hJdGVtOiBzdHJpbmdbXSA9IFtcIuWFqOmDqFwiLCBcIuW+t+W3nuaSsuWFi1wiLCBcIuW+t+W3nueJm+S7lFwiLCBcIum+jeiZjlwiLCBcIuW/jeiAhVwiLCBcIuWTquWQkuWCs+Wlh1wiLFxyXG4gICAgLy8gICAgIFwi5Lmd57ar5ouJ546LXCIsIFwi5a6Z5pavXCIsIFwi54Gr54mb5aWH6KWyXCIsIFwi5rC05p6c55Gq6bqXXCIsIFwi6LKh56We6YGO5bm0XCIsIFwi54Gr5LmL5aWz546LXCJdO1xyXG4gICAgcHJpdmF0ZSBjb21ib2JveEl0ZW1JZDogbnVtYmVyW10gPSBbMCwgNTEsIDEwNCwgMjEsIDIwMSwgNTA1LCA5MiwgMjU0LCA0MDk2LCA5MSwgMjU4LCA1NF07XHJcblxyXG4gICAgcHJpdmF0ZSBjb21ib2JveEl0ZW06IHN0cmluZ1tdID0gW1wi5YWo6YOoXCIsIFwi5bi25YWlXCIsIFwi6L+U6YKEXCIsIFwi5Y+X6LSIXCIsIFwi6LSI6YCBXCIsIFwi5YWF5YC8XCIsIFwi5o+Q54++XCJdO1xyXG4gICAgcHJpdmF0ZSBjaGFuZ2VUeXBlOiBudW1iZXJbXSA9IFswLCAzMywgMzQsIDcsIDgsIDEwLCA0N107XHJcblxyXG5cclxuICAgIHByaXZhdGUgdHVybm92ZXJMaXN0RGF0YTogeyB0eXBlOiBudW1iZXIsIHRpbWU6IHN0cmluZywgZ2FtZU5hbWU6IHN0cmluZywgd2luOiBudW1iZXIgfVtdID0gW107XHJcblxyXG4gICAgLyoq5b2T5YmN55qE6aG15pWwICovXHJcbiAgICBwcml2YXRlIHBhZ2VJbmRleDogbnVtYmVyID0gMTtcclxuXHJcbiAgICAvKirlvZPliY3mlbDmja7nmoTmgLvmlbAgKi9cclxuICAgIHByaXZhdGUgdG90YWxDb3VudDogbnVtYmVyO1xyXG4gICAgLyoq5b2T5YmN5p+l6K+i55qE5ri45oiPaWQgKi9cclxuICAgIHByaXZhdGUgc2VsZWN0R2FtZUlkOiBudW1iZXIgPSAwO1xyXG4gICAgLyoq5LiK5qyh5p+l6K+i55qE5ri45oiPaWQgKi9cclxuICAgIHByaXZhdGUgbGFzdEdhbWVJZDogbnVtYmVyO1xyXG5cclxuICAgIC8qKumBuOaTh+eahOmhnuWeiyAqL1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RDaGFuZ1R5cGU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgY3JlYXRlQ2hpbGRDb21wb25lbnRzKCkge1xyXG4gICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkQ29tcG9uZW50cygpO1xyXG4gICAgICAgIHRoaXMuZmd1aUNvbXBvbmVudC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51aV9idG5fd2F0ZXJCcmVhay5vbkNsaWNrKHRoaXMuSGlkZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy51aV9nYW1lRG93bi5pdGVtcyA9IHRoaXMuY29tYm9ib3hJdGVtO1xyXG4gICAgICAgIHRoaXMudWlfdHVybm92ZXJMaXN0LnNldFZpcnR1YWwoKTtcclxuICAgICAgICB0aGlzLnVpX3R1cm5vdmVyTGlzdC5pdGVtUmVuZGVyZXIgPSB0aGlzLnJlbmRlckxpc3RJdGVtLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy51aV90dXJub3Zlckxpc3Qub24oZmd1aS5FdmVudC5QVUxMX1VQX1JFTEVBU0UsIHRoaXMub25QdWxsVXBUb1JlZnJlc2gsIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnVpX2dhbWVEb3duLm9uKGZndWkuRXZlbnQuU1RBVFVTX0NIQU5HRUQsIHRoaXMub25DaGFuZ2VkLCB0aGlzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgT25Mb2FkQ29tcGxldGVkKCkge1xyXG4gICAgICAgIHRoaXMuU2hvdygpO1xyXG4gICAgfVxyXG4gICAgSGlkZSgpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ0Zsb3dpbmdXYXRlclZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICBzdXBlci5IaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlckxpc3RJdGVtKGluZGV4OiBudW1iZXIsIG9iajogZmd1aS5HT2JqZWN0KSB7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSA8Zmd1aS5HQ29tcG9uZW50Pm9iajtcclxuICAgICAgICBsZXQgc3RyZWFtTnVtID0gaXRlbS5nZXRDaGlsZChcIm4xXCIpLmFzVGV4dEZpZWxkO1xyXG4gICAgICAgIGxldCB0aW1lID0gaXRlbS5nZXRDaGlsZChcIm4yXCIpLmFzVGV4dEZpZWxkO1xyXG4gICAgICAgIGxldCBnYW1lTmFtZSA9IGl0ZW0uZ2V0Q2hpbGQoXCJuM1wiKS5hc1RleHRGaWVsZDtcclxuICAgICAgICBsZXQgd2luID0gaXRlbS5nZXRDaGlsZChcIm40XCIpLmFzVGV4dEZpZWxkO1xyXG4gICAgICAgIGxldCBjb2xvciA9IGl0ZW0uZ2V0Q29udHJvbGxlcihcImNvbG9yXCIpO1xyXG5cclxuICAgICAgICBsZXQgc3RyID0gJyc7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnR1cm5vdmVyTGlzdERhdGFbaW5kZXhdLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAzMzogIC8vXHJcbiAgICAgICAgICAgICAgICBzdHIgPSAn5bi25YWlJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM0OiAgLy/ov5Tov5ggXHJcbiAgICAgICAgICAgICAgICBzdHIgPSAn6L+U6YKEJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDc6ICAvL+WPl+i1oFxyXG4gICAgICAgICAgICAgICAgc3RyID0gJ+WPl+i0iCc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA4OiAgLy/otaDpgIFcclxuICAgICAgICAgICAgICAgIHN0ciA9ICfotIjpgIEnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTA6XHJcbiAgICAgICAgICAgICAgICBzdHIgPSAn5YWF5YC8JztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQ3OlxyXG4gICAgICAgICAgICAgICAgc3RyID0gJ+aPkOePvic7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHN0ciA9ICfkuIrkuIvliIYnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdHJlYW1OdW0udGV4dCA9IHN0cjtcclxuXHJcbiAgICAgICAgdGltZS50ZXh0ID0gdGhpcy50dXJub3Zlckxpc3REYXRhW2luZGV4XS50aW1lO1xyXG4gICAgICAgIGdhbWVOYW1lLnRleHQgPSB0aGlzLnR1cm5vdmVyTGlzdERhdGFbaW5kZXhdLmdhbWVOYW1lO1xyXG4gICAgICAgIGlmICh0aGlzLnR1cm5vdmVyTGlzdERhdGFbaW5kZXhdLndpbiA+IDApIHtcclxuICAgICAgICAgICAgY29sb3Iuc2V0U2VsZWN0ZWRJbmRleCgwKTtcclxuICAgICAgICAgICAgd2luLnRleHQgPSAnKycgKyB0aGlzLnR1cm5vdmVyTGlzdERhdGFbaW5kZXhdLndpbjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb2xvci5zZXRTZWxlY3RlZEluZGV4KDEpO1xyXG4gICAgICAgICAgICB3aW4udGV4dCA9IHRoaXMudHVybm92ZXJMaXN0RGF0YVtpbmRleF0ud2luICsgJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKuS4iuWIt+aWsCAqL1xyXG4gICAgcHVibGljIG9uUHVsbFVwVG9SZWZyZXNoKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5nZXREYXRhQm9vbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmICh0aGlzLnBhZ2VJbmRleCAqIDIwID4gdGhpcy50b3RhbENvdW50KSB7XHJcbiAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgdGhpcy5wYWdlSW5kZXggKz0gMTtcclxuICAgICAgICB0aGlzLmdldERhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirmmK/lkKblj6/ku6Xojrflj5bmlbDmja4gKi9cclxuICAgIHByaXZhdGUgZ2V0RGF0YUJvb2w6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8qKuS4i+aLieeLgOaFi+iuiuWMliAqL1xyXG4gICAgcHVibGljIG9uQ2hhbmdlZCgpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ0Zsb3dpbmdXYXRlclZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICAvLyB0aGlzLnNlbGVjdEdhbWVJZCA9IHRoaXMuY29tYm9ib3hJdGVtSWRbdGhpcy51aV9nYW1lRG93bi5zZWxlY3RlZEluZGV4XTtcclxuICAgICAgICB0aGlzLnNlbGVjdENoYW5nVHlwZSA9IHRoaXMuY2hhbmdlVHlwZVt0aGlzLnVpX2dhbWVEb3duLnNlbGVjdGVkSW5kZXhdO1xyXG4gICAgICAgIGlmICh0aGlzLmxhc3RHYW1lSWQgPT0gdGhpcy5zZWxlY3RDaGFuZ1R5cGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnR1cm5vdmVyTGlzdERhdGEgPSBbXTtcclxuICAgICAgICB0aGlzLnBhZ2VJbmRleCA9IDE7XHJcbiAgICAgICAgdGhpcy5nZXREYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldERhdGEoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmdldERhdGFCb29sKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nZXREYXRhQm9vbCA9IGZhbHNlO1xyXG4gICAgICAgIC8vIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwoXCLmraPlnKjojrflj5bmlbDmja5cIik7XHJcbiAgICAgICAgbGV0IHVybCA9IEJhc2VGcmFtZU5hdGl2ZS5zZXJ2ZXJsaXN0SXRlbS5hcGlBZHJlc3MgKyBcIi9hcGkvZ2FtZWxvZy9HZXRKYWNrVXNlckxvZzJcIjtcclxuICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICBQYWdlU2l6ZTogMjAsIC8v6aCB6Z2i5aSn5bCPXHJcbiAgICAgICAgICAgIHBhZ2VJbmRleDogdGhpcy5wYWdlSW5kZXgsIC8v6aG15pWwXHJcbiAgICAgICAgICAgIHVzZXJpZDogQXBwQ29uc3QubVBsYXllck1vZGVsLnVzZXJpZCArICcnLFxyXG4gICAgICAgICAgICBHYW1lSWQ6IHRoaXMuc2VsZWN0R2FtZUlkLFxyXG4gICAgICAgICAgICBjaGFuZ2VUeXBlOiB0aGlzLnNlbGVjdENoYW5nVHlwZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIEh0dHBIZWxwRXguaW5zdGFuY2UucG9zdCh1cmwsIHBhcmFtcylcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhQm9vbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCIgIC0tLS0tLXJlcy0tLS1cIiwgcmVzKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuY29kZSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wYWdlSW5kZXggPSByZXMuZGF0YS5wYWdlSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy50b3RhbENvdW50ID0gcmVzLmRhdGEudG90YWxDb3VudDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhc3RHYW1lSWQgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sYXN0R2FtZUlkICE9IHRoaXMuc2VsZWN0Q2hhbmdUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR1cm5vdmVyTGlzdERhdGEgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHVybm92ZXJMaXN0RGF0YSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RHYW1lSWQgPSB0aGlzLnNlbGVjdENoYW5nVHlwZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZm8gPSB7IHR5cGU6IG51bGwsIHRpbWU6IG51bGwsIGdhbWVOYW1lOiAnJywgd2luOiBudWxsIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZvLnR5cGUgPSBkYXRhW2ldLmNoYW5nZVR5cGU7IC8v57G75Z6LXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZvLnRpbWUgPSBkYXRhW2ldLnRpbWU7ICAvL+aXtumXtFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5mby5nYW1lTmFtZSA9IGRhdGFbaV0uZ2FtZU5hbWUuc3BsaXQoXCLiiaFcIilbMF07ICAvL+WQjeWtlyAgXCLosqHnpZ7pgY7lubTiiaFHb2QgT2YgV2VhbHRoIE5ldyBZZWFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZm8ud2luID0gVUlVdGlsLmZvcm1hdE51bWJlcjEwMChkYXRhW2ldLmdvbGQpOyAgLy/ph5Hpop1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHVybm92ZXJMaXN0RGF0YS5wdXNoKGluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLlNob3dUaXBMYWJlbChcIuaaguaXoOaVsOaNrlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51aV90dXJub3Zlckxpc3QubnVtSXRlbXMgPSB0aGlzLnR1cm5vdmVyTGlzdERhdGEubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudWlfdHVybm92ZXJMaXN0LnNjcm9sbFBhbmUuc2Nyb2xsQm90dG9tKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKFwi6I635Y+W5pWw5o2u5aSx6LSlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YUJvb2wgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiLS0tLS0tLS0tLWVyci0tLVwiLCBlcnIpXHJcbiAgICAgICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKFwi6I635Y+W5pWw5o2u5aSx6LSlXCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyBTaG93KCkge1xyXG4gICAgICAgIHRoaXMudHVybm92ZXJMaXN0RGF0YSA9IFtdO1xyXG4gICAgICAgIHRoaXMudWlfdHVybm92ZXJMaXN0Lm51bUl0ZW1zID0gdGhpcy50dXJub3Zlckxpc3REYXRhLmxlbmd0aDtcclxuICAgICAgICB0aGlzLnBhZ2VJbmRleCA9IDE7XHJcbiAgICAgICAgdGhpcy5nZXREYXRhKCk7XHJcbiAgICAgICAgc3VwZXIuU2hvdygpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==