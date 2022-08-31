
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/Community/CExtractRecord.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e80b45AbWpBe6gL+Q/fuFrp', 'CExtractRecord');
// GameHall/script/Lobby/Community/CExtractRecord.ts

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
var BaseFrameNative_1 = require("../../../../Script/BaseFrameNative");
var LoginViewCtr_1 = require("../../Login/LoginViewCtr");
/**
 * @description 基金记录
 */
var CExtractRecord = /** @class */ (function (_super) {
    __extends(CExtractRecord, _super);
    function CExtractRecord() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btn_extractBreak = null;
        _this.ui_extractList = null;
        _this.typeDown = null;
        _this.changeType = ["全部", "轉入", "轉出"];
        _this.selectChangType = "全部";
        _this.recordList = null;
        return _this;
    }
    Object.defineProperty(CExtractRecord.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CExtractRecord.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CExtractRecord.prototype, "componentName", {
        get: function () {
            return "ExtractRecord";
        },
        enumerable: false,
        configurable: true
    });
    CExtractRecord.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.ui_extractList.removeChildrenToPool();
        this.fguiComponent.sortingOrder = 9888;
    };
    CExtractRecord.prototype.OnLoadCompleted = function () {
        var _this = this;
        this.typeDown = this.fguiComponent.getChild("n49").asComboBox;
        this.typeDown.items = this.changeType;
        this.typeDown.text = this.changeType[0];
        this.typeDown.on(fgui.Event.STATUS_CHANGED, this.onChanged, this);
        this.ui_btn_extractBreak.onClick(function () {
            AudioManager_1.AudioManager.Singleton.play('CExtractRecord', "button");
            _this.Hide();
        });
        this.Show();
    };
    CExtractRecord.prototype.Show = function () {
        _super.prototype.Show.call(this);
        this.selectChangType = this.changeType[0];
        this.getExtractRecordDate();
    };
    CExtractRecord.prototype.Hide = function () {
        _super.prototype.Hide.call(this);
    };
    CExtractRecord.prototype.onChanged = function () {
        AudioManager_1.AudioManager.Singleton.play('CExtractRecord', "button");
        this.selectChangType = this.changeType[this.typeDown.selectedIndex];
        this.initExtractRecordList(this.recordList);
    };
    CExtractRecord.prototype.getExtractRecordDate = function () {
        var self = this;
        // let url = BaseFrameNative.serverlistItem.apiAdress + "/api/Gamelog/GetFundlog";
        // let params = {
        //     userid: LoginViewCtr.instance.Model.mPlayerModel.userid,
        //     clubid: LoginViewCtr.instance.Model.cidx
        // }
        // HttpHelpEx.instance.post(url, params).then((res) => {
        //     console.log("---GetFundlog---", res);
        //     if (res.code == 1) {
        //         self.initExtractRecordList(res.data);
        //     } else {
        //         CommonCtr.instance.view.ShowTipLabel("获取记录失败");
        //     }
        // }).catch((err) => {
        //     console.log("---err---", err)
        //     CommonCtr.instance.view.ShowTipLabel("获取记录失败");
        // })
        var url = BaseFrameNative_1.BaseFrameNative.serverlistItem.apiAdress + "/api/Gamelog/GetFundlog" + ("?clubid=" + LoginViewCtr_1.LoginViewCtr.instance.Model.cidx);
        HttpHelpEx_1.default.instance.get(url)
            .then(function (res) {
            console.log("---GetFundlog---", res);
            if (res.code == 1) {
                self.recordList = res.data;
                self.initExtractRecordList(res.data);
            }
            else {
                CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("获取记录失败");
            }
        })
            .catch(function () {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("获取记录失败");
        });
    };
    CExtractRecord.prototype.initExtractRecordList = function (m_list) {
        this.ui_extractList.removeChildrenToPool();
        for (var index = 0; index < m_list.length; index++) {
            var data = m_list[index];
            if (this.selectChangType == this.changeType[1] && data.changeType == 1) {
                var item = this.ui_extractList.addItemFromPool().asCom;
                item.getChild("n1").asTextField.text = UIUtil_1.UIUtil.formatNumber100(data.gold) + ""; // 金额
                item.getChild("n2").asTextField.text = data.time + ""; // 时间
                item.getChild("n4").asTextField.text = this.changeType[1]; //状态
            }
            if (this.selectChangType == this.changeType[2] && data.changeType != 1) {
                var item = this.ui_extractList.addItemFromPool().asCom;
                item.getChild("n1").asTextField.text = UIUtil_1.UIUtil.formatNumber100(data.gold) + ""; // 金额
                item.getChild("n2").asTextField.text = data.time + ""; // 时间
                item.getChild("n4").asTextField.text = this.changeType[2]; //状态
            }
            if (this.selectChangType == this.changeType[0]) {
                var item = this.ui_extractList.addItemFromPool().asCom;
                item.getChild("n1").asTextField.text = UIUtil_1.UIUtil.formatNumber100(data.gold) + ""; // 金额
                item.getChild("n2").asTextField.text = data.time + ""; // 时间
                item.getChild("n4").asTextField.text = data.changeType == 1 ? "轉入" : "轉出"; //状态
            }
        }
    };
    return CExtractRecord;
}(ViewBase_1.default));
exports.default = CExtractRecord;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXENvbW11bml0eVxcQ0V4dHJhY3RSZWNvcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEVBQXlFO0FBQ3pFLG9FQUFtRTtBQUNuRSxrRUFBNkQ7QUFDN0QsNEVBQXVFO0FBQ3ZFLDJEQUEwRDtBQUMxRCxzRUFBcUU7QUFDckUseURBQXdEO0FBQ3hEOztHQUVHO0FBQ0g7SUFBNEMsa0NBQVE7SUFBcEQ7UUFBQSxxRUFvSEM7UUF6R1cseUJBQW1CLEdBQWlCLElBQUksQ0FBQztRQUN6QyxvQkFBYyxHQUFlLElBQUksQ0FBQztRQUNsQyxjQUFRLEdBQW1CLElBQUksQ0FBQztRQUVoQyxnQkFBVSxHQUFhLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxQyxxQkFBZSxHQUFXLElBQUksQ0FBQztRQUMvQixnQkFBVSxHQUFRLElBQUksQ0FBQzs7SUFtR25DLENBQUM7SUFuSEcsc0JBQWMsK0NBQW1CO2FBQWpDO1lBQ0ksT0FBTyxVQUFVLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYyx1Q0FBVzthQUF6QjtZQUNJLE9BQU8sV0FBVyxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWMseUNBQWE7YUFBM0I7WUFDSSxPQUFPLGVBQWUsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQVVELDhDQUFxQixHQUFyQjtRQUNJLGlCQUFNLHFCQUFxQixXQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUMzQyxDQUFDO0lBRUQsd0NBQWUsR0FBZjtRQUFBLGlCQVlDO1FBWEcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxL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QUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEtBQUs7Z0JBQzVELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTthQUNsRTtZQUNELElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUM1QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQUssQ0FBQztnQkFDdkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLGVBQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEtBQUs7Z0JBQ3BGLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEtBQUs7Z0JBQzVELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJO2FBQ2xGO1NBQ0o7SUFDTCxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQXBIQSxBQW9IQyxDQXBIMkMsa0JBQVEsR0FvSG5EIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXVkaW9NYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9BdWRpb01hbmFnZXInO1xyXG5pbXBvcnQgeyBDb21tb25DdHIgfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL0NvbW1vbkN0cic7XHJcbmltcG9ydCBWaWV3QmFzZSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL1ZpZXdCYXNlJztcclxuaW1wb3J0IEh0dHBIZWxwRXggZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0L0NvbW1vbi9NYW5hZ2Vycy9IdHRwSGVscEV4JztcclxuaW1wb3J0IHsgVUlVdGlsIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0L0NvbW1vbi9VSVV0aWwnO1xyXG5pbXBvcnQgeyBCYXNlRnJhbWVOYXRpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lTmF0aXZlJztcclxuaW1wb3J0IHsgTG9naW5WaWV3Q3RyIH0gZnJvbSAnLi4vLi4vTG9naW4vTG9naW5WaWV3Q3RyJztcclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDln7rph5HorrDlvZVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENFeHRyYWN0UmVjb3JkIGV4dGVuZHMgVmlld0Jhc2Uge1xyXG4gICAgcHJvdGVjdGVkIGdldCBwYWNrYWdlUmVzb3VyY2VOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwiZ2FtZUhhbGxcIjtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBnZXQgcGFja2FnZU5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJyZXMvTG9iYnlcIjtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBnZXQgY29tcG9uZW50TmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcIkV4dHJhY3RSZWNvcmRcIjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVpX2J0bl9leHRyYWN0QnJlYWs6IGZndWkuR0J1dHRvbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX2V4dHJhY3RMaXN0OiBmZ3VpLkdMaXN0ID0gbnVsbDtcclxuICAgIHByaXZhdGUgdHlwZURvd246IGZndWkuR0NvbWJvQm94ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGNoYW5nZVR5cGU6IHN0cmluZ1tdID0gW1wi5YWo6YOoXCIsIFwi6L2J5YWlXCIsIFwi6L2J5Ye6XCJdO1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RDaGFuZ1R5cGU6IHN0cmluZyA9IFwi5YWo6YOoXCI7XHJcbiAgICBwcml2YXRlIHJlY29yZExpc3Q6IGFueSA9IG51bGw7XHJcblxyXG4gICAgY3JlYXRlQ2hpbGRDb21wb25lbnRzKCkge1xyXG4gICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkQ29tcG9uZW50cygpO1xyXG4gICAgICAgIHRoaXMudWlfZXh0cmFjdExpc3QucmVtb3ZlQ2hpbGRyZW5Ub1Bvb2woKTtcclxuICAgICAgICB0aGlzLmZndWlDb21wb25lbnQuc29ydGluZ09yZGVyID0gOTg4ODtcclxuICAgIH1cclxuXHJcbiAgICBPbkxvYWRDb21wbGV0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy50eXBlRG93biA9IHRoaXMuZmd1aUNvbXBvbmVudC5nZXRDaGlsZChcIm40OVwiKS5hc0NvbWJvQm94O1xyXG4gICAgICAgIHRoaXMudHlwZURvd24uaXRlbXMgPSB0aGlzLmNoYW5nZVR5cGU7XHJcbiAgICAgICAgdGhpcy50eXBlRG93bi50ZXh0ID0gdGhpcy5jaGFuZ2VUeXBlWzBdO1xyXG4gICAgICAgIHRoaXMudHlwZURvd24ub24oZmd1aS5FdmVudC5TVEFUVVNfQ0hBTkdFRCwgdGhpcy5vbkNoYW5nZWQsIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnVpX2J0bl9leHRyYWN0QnJlYWsub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnQ0V4dHJhY3RSZWNvcmQnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgdGhpcy5IaWRlKCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5TaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNob3coKSB7XHJcbiAgICAgICAgc3VwZXIuU2hvdygpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0Q2hhbmdUeXBlID0gdGhpcy5jaGFuZ2VUeXBlWzBdO1xyXG4gICAgICAgIHRoaXMuZ2V0RXh0cmFjdFJlY29yZERhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgSGlkZSgpIHtcclxuICAgICAgICBzdXBlci5IaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQ2hhbmdlZCgpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ0NFeHRyYWN0UmVjb3JkJywgXCJidXR0b25cIik7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RDaGFuZ1R5cGUgPSB0aGlzLmNoYW5nZVR5cGVbdGhpcy50eXBlRG93bi5zZWxlY3RlZEluZGV4XTtcclxuICAgICAgICB0aGlzLmluaXRFeHRyYWN0UmVjb3JkTGlzdCh0aGlzLnJlY29yZExpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRFeHRyYWN0UmVjb3JkRGF0ZSgpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgLy8gbGV0IHVybCA9IEJhc2VGcmFtZU5hdGl2ZS5zZXJ2ZXJsaXN0SXRlbS5hcGlBZHJlc3MgKyBcIi9hcGkvR2FtZWxvZy9HZXRGdW5kbG9nXCI7XHJcbiAgICAgICAgLy8gbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAvLyAgICAgdXNlcmlkOiBMb2dpblZpZXdDdHIuaW5zdGFuY2UuTW9kZWwubVBsYXllck1vZGVsLnVzZXJpZCxcclxuICAgICAgICAvLyAgICAgY2x1YmlkOiBMb2dpblZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuY2lkeFxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBIdHRwSGVscEV4Lmluc3RhbmNlLnBvc3QodXJsLCBwYXJhbXMpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIi0tLUdldEZ1bmRsb2ctLS1cIiwgcmVzKTtcclxuICAgICAgICAvLyAgICAgaWYgKHJlcy5jb2RlID09IDEpIHtcclxuICAgICAgICAvLyAgICAgICAgIHNlbGYuaW5pdEV4dHJhY3RSZWNvcmRMaXN0KHJlcy5kYXRhKTtcclxuICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3LlNob3dUaXBMYWJlbChcIuiOt+WPluiusOW9leWksei0pVwiKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCItLS1lcnItLS1cIiwgZXJyKVxyXG4gICAgICAgIC8vICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoXCLojrflj5borrDlvZXlpLHotKVcIik7XHJcbiAgICAgICAgLy8gfSlcclxuXHJcbiAgICAgICAgbGV0IHVybCA9IEJhc2VGcmFtZU5hdGl2ZS5zZXJ2ZXJsaXN0SXRlbS5hcGlBZHJlc3MgKyBcIi9hcGkvR2FtZWxvZy9HZXRGdW5kbG9nXCIgKyBgP2NsdWJpZD0ke0xvZ2luVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5jaWR4fWA7XHJcblxyXG4gICAgICAgIEh0dHBIZWxwRXguaW5zdGFuY2UuZ2V0KHVybClcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS1HZXRGdW5kbG9nLS0tXCIsIHJlcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmNvZGUgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYucmVjb3JkTGlzdCA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaW5pdEV4dHJhY3RSZWNvcmRMaXN0KHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFwi6I635Y+W6K6w5b2V5aSx6LSlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFwi6I635Y+W6K6w5b2V5aSx6LSlXCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0RXh0cmFjdFJlY29yZExpc3QobV9saXN0OiBhbnkpIHtcclxuICAgICAgICB0aGlzLnVpX2V4dHJhY3RMaXN0LnJlbW92ZUNoaWxkcmVuVG9Qb29sKCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBtX2xpc3QubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gbV9saXN0W2luZGV4XTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0Q2hhbmdUeXBlID09IHRoaXMuY2hhbmdlVHlwZVsxXSAmJiBkYXRhLmNoYW5nZVR5cGUgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLnVpX2V4dHJhY3RMaXN0LmFkZEl0ZW1Gcm9tUG9vbCgpLmFzQ29tO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZChcIm4xXCIpLmFzVGV4dEZpZWxkLnRleHQgPSBVSVV0aWwuZm9ybWF0TnVtYmVyMTAwKGRhdGEuZ29sZCkgKyBcIlwiOyAvLyDph5Hpop1cclxuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGQoXCJuMlwiKS5hc1RleHRGaWVsZC50ZXh0ID0gZGF0YS50aW1lICsgXCJcIjsgLy8g5pe26Ze0XHJcbiAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkKFwibjRcIikuYXNUZXh0RmllbGQudGV4dCA9IHRoaXMuY2hhbmdlVHlwZVsxXTsgLy/nirbmgIFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RDaGFuZ1R5cGUgPT0gdGhpcy5jaGFuZ2VUeXBlWzJdICYmIGRhdGEuY2hhbmdlVHlwZSAhPSAxKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMudWlfZXh0cmFjdExpc3QuYWRkSXRlbUZyb21Qb29sKCkuYXNDb207XHJcbiAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkKFwibjFcIikuYXNUZXh0RmllbGQudGV4dCA9IFVJVXRpbC5mb3JtYXROdW1iZXIxMDAoZGF0YS5nb2xkKSArIFwiXCI7IC8vIOmHkeminVxyXG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZChcIm4yXCIpLmFzVGV4dEZpZWxkLnRleHQgPSBkYXRhLnRpbWUgKyBcIlwiOyAvLyDml7bpl7RcclxuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGQoXCJuNFwiKS5hc1RleHRGaWVsZC50ZXh0ID0gdGhpcy5jaGFuZ2VUeXBlWzJdOyAvL+eKtuaAgVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdENoYW5nVHlwZSA9PSB0aGlzLmNoYW5nZVR5cGVbMF0pIHtcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy51aV9leHRyYWN0TGlzdC5hZGRJdGVtRnJvbVBvb2woKS5hc0NvbTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGQoXCJuMVwiKS5hc1RleHRGaWVsZC50ZXh0ID0gVUlVdGlsLmZvcm1hdE51bWJlcjEwMChkYXRhLmdvbGQpICsgXCJcIjsgLy8g6YeR6aKdXHJcbiAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkKFwibjJcIikuYXNUZXh0RmllbGQudGV4dCA9IGRhdGEudGltZSArIFwiXCI7IC8vIOaXtumXtFxyXG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZChcIm40XCIpLmFzVGV4dEZpZWxkLnRleHQgPSBkYXRhLmNoYW5nZVR5cGUgPT0gMSA/IFwi6L2J5YWlXCIgOiBcIui9ieWHulwiOyAvL+eKtuaAgVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19