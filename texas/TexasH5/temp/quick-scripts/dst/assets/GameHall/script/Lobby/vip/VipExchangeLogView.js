
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/vip/VipExchangeLogView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fe8a1qost1A6IZVGtqfZ3rp', 'VipExchangeLogView');
// GameHall/script/Lobby/vip/VipExchangeLogView.ts

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
var AppConst_1 = require("../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst");
var BaseFrameNative_1 = require("../../../../Script/BaseFrameNative");
var NativeMethod_1 = require("../../NativeMethod");
/**
 * @description vip 兑换记录
 *
 */
var VipExchangeLogView = /** @class */ (function (_super) {
    __extends(VipExchangeLogView, _super);
    function VipExchangeLogView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btn_exchangeBreak = null;
        _this.ui_exLogList = null;
        _this.ui_changeLog = null;
        /**記錄數據 */
        _this.orderListData = [];
        return _this;
    }
    Object.defineProperty(VipExchangeLogView.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VipExchangeLogView.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VipExchangeLogView.prototype, "componentName", {
        get: function () {
            return "ExchangeLog";
        },
        enumerable: false,
        configurable: true
    });
    VipExchangeLogView.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.visible = false;
        this.ui_btn_exchangeBreak.onClick(this.Hide, this);
        this.ui_exLogList.setVirtual();
        this.ui_exLogList.itemRenderer = this.itemRender.bind(this);
        NativeMethod_1.default.setUrlByLanguage(this.ui_changeLog);
    };
    VipExchangeLogView.prototype.OnLoadCompleted = function () {
        this.Show();
    };
    VipExchangeLogView.prototype.Hide = function () {
        AudioManager_1.AudioManager.Singleton.play('VipExchangeLogView', "button");
        _super.prototype.Hide.call(this);
    };
    VipExchangeLogView.prototype.itemRender = function (index, obj) {
        var com = obj;
        var name = com.getChild("name").asTextField;
        var order = com.getChild("order").asTextField;
        var time = com.getChild("time").asTextField;
        var souce = com.getChild("souce").asTextField;
        var state = com.getChild("state").asTextField;
        name.text = this.orderListData[index].itemName;
        order.setVar("order", this.orderListData[index].orderNum).flushVars();
        time.setVar("time", this.orderListData[index].creatDate).flushVars();
        souce.setVar("jf", this.orderListData[index].itemScores + '').flushVars();
        state.text = this.orderListData[index].status;
    };
    VipExchangeLogView.prototype.Show = function () {
        _super.prototype.Show.call(this);
        this.getitemOrderLog();
    };
    VipExchangeLogView.prototype.getitemOrderLog = function () {
        var _this = this;
        var url = BaseFrameNative_1.BaseFrameNative.serverlistItem.apiAdress + "/api/Game/Getitemorderlog" + ("?userid=" + AppConst_1.AppConst.mPlayerModel.userid);
        HttpHelpEx_1.default.instance.get(url)
            .then(function (res) {
            cc.log("兑换记录----------", res);
            if (res.code == 1) {
                _this.orderListData = res.data.data;
                _this.ui_exLogList.numItems = _this.orderListData.length;
            }
        })
            .catch(function () {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("獲取兌換記錄失敗");
        });
    };
    return VipExchangeLogView;
}(ViewBase_1.default));
exports.default = VipExchangeLogView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXHZpcFxcVmlwRXhjaGFuZ2VMb2dWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBFQUF5RTtBQUN6RSxvRUFBbUU7QUFDbkUsa0VBQTZEO0FBQzdELDRFQUF1RTtBQUN2RSwyRkFBMEY7QUFDMUYsc0VBQXFFO0FBQ3JFLG1EQUE4QztBQUU5Qzs7O0dBR0c7QUFDSDtJQUFnRCxzQ0FBUTtJQUF4RDtRQUFBLHFFQTBFQztRQS9EVywwQkFBb0IsR0FBaUIsSUFBSSxDQUFDO1FBQzFDLGtCQUFZLEdBQWUsSUFBSSxDQUFDO1FBQ2hDLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQXdDMUMsVUFBVTtRQUNGLG1CQUFhLEdBQW9HLEVBQUUsQ0FBQzs7SUFvQmhJLENBQUM7SUF6RUcsc0JBQWMsbURBQW1CO2FBQWpDO1lBQ0ksT0FBTyxVQUFVLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYywyQ0FBVzthQUF6QjtZQUNJLE9BQU8sV0FBVyxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWMsNkNBQWE7YUFBM0I7WUFDSSxPQUFPLGFBQWEsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUtELGtEQUFxQixHQUFyQjtRQUNJLGlCQUFNLHFCQUFxQixXQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ25DLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVuRCxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTVELHNCQUFZLENB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bnRlbnQiOlsiaW1wb3J0IHsgQXVkaW9NYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IENvbW1vbkN0ciB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL0NvbW1vbkN0clwiO1xyXG5pbXBvcnQgVmlld0Jhc2UgZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvVmlld0Jhc2VcIjtcclxuaW1wb3J0IEh0dHBIZWxwRXggZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9Db21tb24vTWFuYWdlcnMvSHR0cEhlbHBFeFwiO1xyXG5pbXBvcnQgeyBBcHBDb25zdCB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvbW9kdWxlcy9Ac2xvdHNtYXN0ZXIvdWktY29tbW9uL2xpYi9BcHBDb25zdFwiO1xyXG5pbXBvcnQgeyBCYXNlRnJhbWVOYXRpdmUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZU5hdGl2ZVwiO1xyXG5pbXBvcnQgTmF0aXZlTWV0aG9kIGZyb20gXCIuLi8uLi9OYXRpdmVNZXRob2RcIjtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gdmlwIOWFkeaNouiusOW9lVxyXG4gKiBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpcEV4Y2hhbmdlTG9nVmlldyBleHRlbmRzIFZpZXdCYXNlIHtcclxuICAgIHByb3RlY3RlZCBnZXQgcGFja2FnZVJlc291cmNlTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcImdhbWVIYWxsXCI7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IHBhY2thZ2VOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwicmVzL0xvYmJ5XCI7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IGNvbXBvbmVudE5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJFeGNoYW5nZUxvZ1wiO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdWlfYnRuX2V4Y2hhbmdlQnJlYWs6IGZndWkuR0J1dHRvbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX2V4TG9nTGlzdDogZmd1aS5HTGlzdCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX2NoYW5nZUxvZzogZmd1aS5HTG9hZGVyID0gbnVsbDtcclxuICAgIGNyZWF0ZUNoaWxkQ29tcG9uZW50cygpIHtcclxuICAgICAgICBzdXBlci5jcmVhdGVDaGlsZENvbXBvbmVudHMoKTtcclxuICAgICAgICB0aGlzLmZndWlDb21wb25lbnQudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudWlfYnRuX2V4Y2hhbmdlQnJlYWsub25DbGljayh0aGlzLkhpZGUsIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnVpX2V4TG9nTGlzdC5zZXRWaXJ0dWFsKCk7XHJcbiAgICAgICAgdGhpcy51aV9leExvZ0xpc3QuaXRlbVJlbmRlcmVyID0gdGhpcy5pdGVtUmVuZGVyLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIE5hdGl2ZU1ldGhvZC5zZXRVcmxCeUxhbmd1YWdlKHRoaXMudWlfY2hhbmdlTG9nKTtcclxuICAgIH1cclxuICAgIE9uTG9hZENvbXBsZXRlZCgpIHtcclxuICAgICAgICB0aGlzLlNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBIaWRlKCkge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnVmlwRXhjaGFuZ2VMb2dWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgc3VwZXIuSGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpdGVtUmVuZGVyKGluZGV4OiBudW1iZXIsIG9iajogZmd1aS5HT2JqZWN0KSB7XHJcbiAgICAgICAgbGV0IGNvbSA9IDxmZ3VpLkdDb21wb25lbnQ+b2JqO1xyXG4gICAgICAgIGxldCBuYW1lID0gY29tLmdldENoaWxkKFwibmFtZVwiKS5hc1RleHRGaWVsZDtcclxuICAgICAgICBsZXQgb3JkZXIgPSBjb20uZ2V0Q2hpbGQoXCJvcmRlclwiKS5hc1RleHRGaWVsZDtcclxuICAgICAgICBsZXQgdGltZSA9IGNvbS5nZXRDaGlsZChcInRpbWVcIikuYXNUZXh0RmllbGQ7XHJcbiAgICAgICAgbGV0IHNvdWNlID0gY29tLmdldENoaWxkKFwic291Y2VcIikuYXNUZXh0RmllbGQ7XHJcbiAgICAgICAgbGV0IHN0YXRlID0gY29tLmdldENoaWxkKFwic3RhdGVcIikuYXNUZXh0RmllbGQ7XHJcblxyXG4gICAgICAgIG5hbWUudGV4dCA9IHRoaXMub3JkZXJMaXN0RGF0YVtpbmRleF0uaXRlbU5hbWU7XHJcbiAgICAgICAgb3JkZXIuc2V0VmFyKFwib3JkZXJcIiwgdGhpcy5vcmRlckxpc3REYXRhW2luZGV4XS5vcmRlck51bSkuZmx1c2hWYXJzKCk7XHJcbiAgICAgICAgdGltZS5zZXRWYXIoXCJ0aW1lXCIsIHRoaXMub3JkZXJMaXN0RGF0YVtpbmRleF0uY3JlYXREYXRlKS5mbHVzaFZhcnMoKTtcclxuICAgICAgICBzb3VjZS5zZXRWYXIoXCJqZlwiLCB0aGlzLm9yZGVyTGlzdERhdGFbaW5kZXhdLml0ZW1TY29yZXMgKyAnJykuZmx1c2hWYXJzKCk7XHJcbiAgICAgICAgc3RhdGUudGV4dCA9IHRoaXMub3JkZXJMaXN0RGF0YVtpbmRleF0uc3RhdHVzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTaG93KCkge1xyXG4gICAgICAgIHN1cGVyLlNob3coKTtcclxuICAgICAgICB0aGlzLmdldGl0ZW1PcmRlckxvZygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuiomOmMhOaVuOaTmiAqL1xyXG4gICAgcHJpdmF0ZSBvcmRlckxpc3REYXRhOiB7IGl0ZW1OYW1lOiBzdHJpbmcsIG9yZGVyTnVtOiBzdHJpbmcsIGl0ZW1TY29yZXM6IG51bWJlciwgc3RhdHVzOiBzdHJpbmcsIGNyZWF0RGF0ZTogc3RyaW5nIH1bXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBnZXRpdGVtT3JkZXJMb2coKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IEJhc2VGcmFtZU5hdGl2ZS5zZXJ2ZXJsaXN0SXRlbS5hcGlBZHJlc3MgKyBcIi9hcGkvR2FtZS9HZXRpdGVtb3JkZXJsb2dcIiArIGA/dXNlcmlkPSR7QXBwQ29uc3QubVBsYXllck1vZGVsLnVzZXJpZH1gO1xyXG5cclxuICAgICAgICBIdHRwSGVscEV4Lmluc3RhbmNlLmdldCh1cmwpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIuWFkeaNouiusOW9lS0tLS0tLS0tLS1cIiwgcmVzKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuY29kZSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcmRlckxpc3REYXRhID0gcmVzLmRhdGEuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpX2V4TG9nTGlzdC5udW1JdGVtcyA9IHRoaXMub3JkZXJMaXN0RGF0YS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKFwi542y5Y+W5YWM5o+b6KiY6YyE5aSx5pWXXCIpO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcblxyXG59Il19