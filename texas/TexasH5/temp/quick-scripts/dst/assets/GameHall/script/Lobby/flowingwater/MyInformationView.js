
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/flowingwater/MyInformationView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '43a3fDcUt5IG4GjaWE5o9Gp', 'MyInformationView');
// GameHall/script/Lobby/flowingwater/MyInformationView.ts

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
var WebSocketManager_1 = require("../../../../Script/BaseFrame/WebSocketManager");
var UIUtil_1 = require("../../../../Script/Common/UIUtil");
var LoginViewCtr_1 = require("../../Login/LoginViewCtr");
var LobbyNetData_1 = require("../LobbyNetData");
var LobbyViewCtr_1 = require("../LobbyViewCtr");
/**
 * @description 我的消息
 */
var MyInformationView = /** @class */ (function (_super) {
    __extends(MyInformationView, _super);
    function MyInformationView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btn_waterBreak = null;
        _this.ui_EmailList = null;
        _this.ui_emailDetails = null;
        _this.ui_emailTitle = null;
        _this.ui_emailContent = null;
        _this.ui_emailFrom = null;
        _this.ui_emailTime = null;
        _this.ui_btnRemoveEmail = null;
        _this.emaillist = [];
        _this.readCnt = 0; //已读数
        _this.readCntUn = 0; //未读数
        return _this;
    }
    Object.defineProperty(MyInformationView.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyInformationView.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyInformationView.prototype, "componentName", {
        get: function () {
            return "information";
        },
        enumerable: false,
        configurable: true
    });
    MyInformationView.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.visible = false;
        this.ui_btn_waterBreak.onClick(this.Hide, this);
        this.ui_EmailList.itemProvider = this.getListItemResource.bind(this);
        this.ui_EmailList.itemRenderer = this.renderListItem.bind(this);
    };
    MyInformationView.prototype.OnLoadCompleted = function () {
        this.Show();
    };
    MyInformationView.prototype.Hide = function () {
        AudioManager_1.AudioManager.Singleton.play('MyInformationView', "button");
        if (this.ui_emailDetails.visible) {
            this.ui_EmailList.visible = true;
            this.ui_emailDetails.visible = false;
            this.ui_btnRemoveEmail.visible = false;
            LobbyViewCtr_1.default.instance.cs_getemaillist(true);
        }
        else {
            // if (this.readCnt == this.readCntUn) {
            //     LobbyViewCtr.instance.view.setFlowingRead(false);
            // }
            // LobbyViewCtr.instance.cs_getemaillist(false);
            LobbyViewCtr_1.default.instance.view.meView.refreshMessageEmail();
            _super.prototype.Hide.call(this);
        }
    };
    MyInformationView.prototype.Show = function () {
        _super.prototype.Show.call(this);
        this.readCntUn = 0;
        this.readCnt = 0;
        this.ui_EmailList.removeChildrenToPool();
        this.emaillist = LobbyViewCtr_1.default.instance.Model.emailInfo.emaillist;
        this.ui_EmailList.numItems = this.emaillist.length * 2;
    };
    MyInformationView.prototype.getListItemResource = function (index) {
        if (index % 2 == 0) {
            return "ui://Lobby/zjTimeItem";
        }
        return "ui://Lobby/emailList";
    };
    MyInformationView.prototype.renderListItem = function (index, item) {
        var _this = this;
        var go = item;
        if (index % 2 == 0) {
            var createTime = this.emaillist[UIUtil_1.UIUtil.NumberToInt(index / 2)]._time;
            createTime = createTime == null ? "" : createTime;
            go.getChild("n1").asTextField.text = createTime;
        }
        else {
            go.getChild("emailName").asTextField.text = this.emaillist[UIUtil_1.UIUtil.NumberToInt(index / 2)].title;
            var content_1 = this.emaillist[UIUtil_1.UIUtil.NumberToInt(index / 2)].content;
            var conArr = content_1.split("\r\n");
            content_1 = "";
            conArr.forEach(function (item) { return content_1 += item; });
            UIUtil_1.UIUtil.SetLimitTxt(go.getChild("emailIntro").asTextField, content_1, 60);
            go.getChild("emailIntro").asTextField.text += "...";
            go.getController("type").setSelectedIndex(this.emaillist[UIUtil_1.UIUtil.NumberToInt(index / 2)]._type - 1);
            var islook = false;
            // if(this.emaillist[UIUtil.NumberToInt(index / 2)]._type == MailTypeEnum.personal){
            //     islook = this.emaillist[UIUtil.NumberToInt(index / 2)].islook;
            // }
            // else{
            var userid = LoginViewCtr_1.LoginViewCtr.instance.Model.mPlayerModel.userid;
            var tradeno = this.emaillist[UIUtil_1.UIUtil.NumberToInt(index / 2)].tradeno;
            var lookN = UIUtil_1.PlayerPrefs.GetInt("ISLOOK" + userid + "" + tradeno, 0);
            islook = lookN == 0 ? false : true;
            if (LobbyViewCtr_1.default.instance.view && !islook) {
                LobbyViewCtr_1.default.instance.view.setFlowingRead(true);
                this.readCntUn++;
            }
            // }
            go.getController("read").setSelectedIndex(islook ? 1 : 0);
            go.getChild("buttonOpen").asButton.clearClick();
            go.getChild("buttonOpen").asButton.onClick(function () {
                go.getController("read").setSelectedIndex(1);
                _this.ShowEmaiContent(_this.emaillist[UIUtil_1.UIUtil.NumberToInt(index / 2)]);
            });
        }
    };
    MyInformationView.prototype.ShowEmaiContent = function (data) {
        var _this = this;
        console.log("ShowEmaiContent");
        this.ui_EmailList.visible = false;
        this.ui_emailDetails.visible = true;
        this.ui_btnRemoveEmail.visible = true;
        this.ui_emailTitle.text = data.title;
        this.ui_emailContent.text = data.content;
        this.ui_emailFrom.text = "——" + data.fromUserName;
        this.ui_emailTime.text = data._time;
        //个人邮件标记已读
        // if(data._type == MailTypeEnum.personal)
        // {
        //     let state = new cs_setemailstate();
        //     state.tradeNo = data.tradeno;
        //     state.fn ="cs_setemailstate";
        //     WebSocketManager.getInstance.SendJSON(state,this.sc_setemailstate.bind(this));
        // }else{
        //其他邮件标记已读
        var userid = LoginViewCtr_1.LoginViewCtr.instance.Model.mPlayerModel.userid;
        var tradeno = data.tradeno;
        if (UIUtil_1.PlayerPrefs.GetInt("ISLOOK" + userid + "" + tradeno, 0) == 0)
            this.readCnt++;
        UIUtil_1.PlayerPrefs.SetInt("ISLOOK" + userid + "" + tradeno, 1);
        // }
        this.ui_btnRemoveEmail.clearClick();
        this.ui_btnRemoveEmail.onClick(function () {
            _this.cs_removeEmail(data.tradeno, data.ToUserId);
        });
    };
    MyInformationView.prototype.sc_setemailstate = function (data) {
        if (data.result == 1) {
            console.error("标记梯度成功！");
            return;
        }
        console.error("标记梯度失败！");
    };
    MyInformationView.prototype.cs_removeEmail = function (tradeNo, toUserId) {
        var remove = new LobbyNetData_1.cs_removeEmail();
        remove.tradeNo = tradeNo;
        remove.ToUserId = toUserId;
        remove.fn = "cs_removeEmail";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(remove, this.sc_removeEmail.bind(this));
    };
    MyInformationView.prototype.sc_removeEmail = function (data) {
        //-1 邮件不存在  -2系统邮件不可删除。默认保留7天
        if (data.result == 1) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("刪除成功！");
            this.Hide();
        }
        else if (data.result == -1) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("郵件不存在！");
        }
        else if (data.result == -2) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("系統郵件不可刪除，默認保留7天！");
        }
    };
    return MyInformationView;
}(ViewBase_1.default));
exports.default = MyInformationView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXGZsb3dpbmd3YXRlclxcTXlJbmZvcm1hdGlvblZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEVBQXlFO0FBQ3pFLG9FQUFtRTtBQUNuRSxrRUFBNkQ7QUFDN0Qsa0ZBQWlGO0FBQ2pGLDJEQUF1RTtBQUN2RSx5REFBd0Q7QUFDeEQsZ0RBQWtLO0FBQ2xLLGdEQUEyQztBQUUzQzs7R0FFRztBQUNIO0lBQStDLHFDQUFRO0lBQXZEO1FBQUEscUVBa0tDO1FBdkpXLHVCQUFpQixHQUFpQixJQUFJLENBQUM7UUFDdkMsa0JBQVksR0FBZSxJQUFJLENBQUM7UUFDaEMscUJBQWUsR0FBb0IsSUFBSSxDQUFDO1FBQ3hDLG1CQUFhLEdBQW9CLElBQUksQ0FBQztRQUN0QyxxQkFBZSxHQUFvQixJQUFJLENBQUM7UUFDeEMsa0JBQVksR0FBb0IsSUFBSSxDQUFDO1FBQ3JDLGtCQUFZLEdBQW9CLElBQUksQ0FBQztRQUNyQyx1QkFBaUIsR0FBaUIsSUFBSSxDQUFDO1FBRXZDLGVBQVMsR0FBa0IsRUFBRSxDQUFDO1FBQzlCLGFBQU8sR0FBVyxDQUFDLENBQUMsQ0FBQSxLQUFLO1FBQ3pCLGVBQVMsR0FBVyxDQUFDLENBQUMsQ0FBQSxLQUFLOztJQTRJdkMsQ0FBQztJQWpLRyxzQkFBYyxrREFBbUI7YUFBakM7WUFDSSxPQUFPLFVBQVUsQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUNELHNCQUFjLDBDQUFXO2FBQXpCO1lBQ0ksT0FBTyxXQUFXLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYyw0Q0FBYTthQUEzQjtZQUNJLE9BQU8sYUFBYSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBY0QsaURBQXFCLEdBQXJCO1FBQ0ksaUJBQU0scUJBQXFCLFdBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FB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IiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXVkaW9NYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IENvbW1vbkN0ciB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL0NvbW1vbkN0clwiO1xyXG5pbXBvcnQgVmlld0Jhc2UgZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvVmlld0Jhc2VcIjtcclxuaW1wb3J0IHsgV2ViU29ja2V0TWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL1dlYlNvY2tldE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgUGxheWVyUHJlZnMsIFVJVXRpbCB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQ29tbW9uL1VJVXRpbFwiO1xyXG5pbXBvcnQgeyBMb2dpblZpZXdDdHIgfSBmcm9tIFwiLi4vLi4vTG9naW4vTG9naW5WaWV3Q3RyXCI7XHJcbmltcG9ydCB7IGNzX2dldGVtYWlsbGlzdCwgY3NfcmVtb3ZlRW1haWwsIGNzX3NldGVtYWlsc3RhdGUsIEVtYWlsaW5mb1NELCBNYWlsVHlwZUVudW0sIHNjX2dldGVtYWlsbGlzdCwgc2NfcmVtb3ZlRW1haWwsIHNjX3NldGVtYWlsc3RhdGUgfSBmcm9tIFwiLi4vTG9iYnlOZXREYXRhXCI7XHJcbmltcG9ydCBMb2JieVZpZXdDdHIgZnJvbSBcIi4uL0xvYmJ5Vmlld0N0clwiO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDmiJHnmoTmtojmga9cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15SW5mb3JtYXRpb25WaWV3IGV4dGVuZHMgVmlld0Jhc2Uge1xyXG4gICAgcHJvdGVjdGVkIGdldCBwYWNrYWdlUmVzb3VyY2VOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwiZ2FtZUhhbGxcIjtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBnZXQgcGFja2FnZU5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJyZXMvTG9iYnlcIjtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBnZXQgY29tcG9uZW50TmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcImluZm9ybWF0aW9uXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1aV9idG5fd2F0ZXJCcmVhazogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfRW1haWxMaXN0OiBmZ3VpLkdMaXN0ID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfZW1haWxEZXRhaWxzOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9lbWFpbFRpdGxlOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9lbWFpbENvbnRlbnQ6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX2VtYWlsRnJvbTogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfZW1haWxUaW1lOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9idG5SZW1vdmVFbWFpbDogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGVtYWlsbGlzdDogRW1haWxpbmZvU0RbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSByZWFkQ250OiBudW1iZXIgPSAwOy8v5bey6K+75pWwXHJcbiAgICBwcml2YXRlIHJlYWRDbnRVbjogbnVtYmVyID0gMDsvL+acquivu+aVsFxyXG4gICAgY3JlYXRlQ2hpbGRDb21wb25lbnRzKCkge1xyXG4gICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkQ29tcG9uZW50cygpO1xyXG4gICAgICAgIHRoaXMuZmd1aUNvbXBvbmVudC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51aV9idG5fd2F0ZXJCcmVhay5vbkNsaWNrKHRoaXMuSGlkZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy51aV9FbWFpbExpc3QuaXRlbVByb3ZpZGVyID0gdGhpcy5nZXRMaXN0SXRlbVJlc291cmNlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy51aV9FbWFpbExpc3QuaXRlbVJlbmRlcmVyID0gdGhpcy5yZW5kZXJMaXN0SXRlbS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIE9uTG9hZENvbXBsZXRlZCgpIHtcclxuICAgICAgICB0aGlzLlNob3coKTtcclxuICAgIH1cclxuICAgIEhpZGUoKSB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdNeUluZm9ybWF0aW9uVmlldycsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLnVpX2VtYWlsRGV0YWlscy52aXNpYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudWlfRW1haWxMaXN0LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnVpX2VtYWlsRGV0YWlscy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudWlfYnRuUmVtb3ZlRW1haWwudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBMb2JieVZpZXdDdHIuaW5zdGFuY2UuY3NfZ2V0ZW1haWxsaXN0KHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLnJlYWRDbnQgPT0gdGhpcy5yZWFkQ250VW4pIHtcclxuICAgICAgICAgICAgLy8gICAgIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS52aWV3LnNldEZsb3dpbmdSZWFkKGZhbHNlKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyBMb2JieVZpZXdDdHIuaW5zdGFuY2UuY3NfZ2V0ZW1haWxsaXN0KGZhbHNlKTtcclxuICAgICAgICAgICAgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLnZpZXcubWVWaWV3LnJlZnJlc2hNZXNzYWdlRW1haWwoKTtcclxuICAgICAgICAgICAgc3VwZXIuSGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBTaG93KCkge1xyXG4gICAgICAgIHN1cGVyLlNob3coKTtcclxuICAgICAgICB0aGlzLnJlYWRDbnRVbiA9IDA7XHJcbiAgICAgICAgdGhpcy5yZWFkQ250ID0gMDtcclxuICAgICAgICB0aGlzLnVpX0VtYWlsTGlzdC5yZW1vdmVDaGlsZHJlblRvUG9vbCgpO1xyXG4gICAgICAgIHRoaXMuZW1haWxsaXN0ID0gTG9iYnlWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmVtYWlsSW5mby5lbWFpbGxpc3Q7XHJcbiAgICAgICAgdGhpcy51aV9FbWFpbExpc3QubnVtSXRlbXMgPSB0aGlzLmVtYWlsbGlzdC5sZW5ndGggKiAyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRMaXN0SXRlbVJlc291cmNlKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoaW5kZXggJSAyID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwidWk6Ly9Mb2JieS96alRpbWVJdGVtXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcInVpOi8vTG9iYnkvZW1haWxMaXN0XCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlckxpc3RJdGVtKGluZGV4OiBudW1iZXIsIGl0ZW06IGZndWkuR09iamVjdCkge1xyXG4gICAgICAgIGxldCBnbyA9IDxmZ3VpLkdCdXR0b24+aXRlbTtcclxuICAgICAgICBpZiAoaW5kZXggJSAyID09IDApIHtcclxuICAgICAgICAgICAgbGV0IGNyZWF0ZVRpbWUgPSB0aGlzLmVtYWlsbGlzdFtVSVV0aWwuTnVtYmVyVG9JbnQoaW5kZXggLyAyKV0uX3RpbWU7XHJcbiAgICAgICAgICAgIGNyZWF0ZVRpbWUgPSBjcmVhdGVUaW1lID09IG51bGwgPyBcIlwiIDogY3JlYXRlVGltZTtcclxuICAgICAgICAgICAgZ28uZ2V0Q2hpbGQoXCJuMVwiKS5hc1RleHRGaWVsZC50ZXh0ID0gY3JlYXRlVGltZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBnby5nZXRDaGlsZChcImVtYWlsTmFtZVwiKS5hc1RleHRGaWVsZC50ZXh0ID0gdGhpcy5lbWFpbGxpc3RbVUlVdGlsLk51bWJlclRvSW50KGluZGV4IC8gMildLnRpdGxlO1xyXG4gICAgICAgICAgICBsZXQgY29udGVudCA9IHRoaXMuZW1haWxsaXN0W1VJVXRpbC5OdW1iZXJUb0ludChpbmRleCAvIDIpXS5jb250ZW50O1xyXG4gICAgICAgICAgICBsZXQgY29uQXJyID0gY29udGVudC5zcGxpdChcIlxcclxcblwiKTtcclxuICAgICAgICAgICAgY29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGNvbkFyci5mb3JFYWNoKGl0ZW0gPT4gY29udGVudCArPSBpdGVtKTtcclxuICAgICAgICAgICAgVUlVdGlsLlNldExpbWl0VHh0KGdvLmdldENoaWxkKFwiZW1haWxJbnRyb1wiKS5hc1RleHRGaWVsZCwgY29udGVudCwgNjApO1xyXG4gICAgICAgICAgICBnby5nZXRDaGlsZChcImVtYWlsSW50cm9cIikuYXNUZXh0RmllbGQudGV4dCArPSBcIi4uLlwiO1xyXG4gICAgICAgICAgICBnby5nZXRDb250cm9sbGVyKFwidHlwZVwiKS5zZXRTZWxlY3RlZEluZGV4KHRoaXMuZW1haWxsaXN0W1VJVXRpbC5OdW1iZXJUb0ludChpbmRleCAvIDIpXS5fdHlwZSAtIDEpO1xyXG4gICAgICAgICAgICBsZXQgaXNsb29rID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIGlmKHRoaXMuZW1haWxsaXN0W1VJVXRpbC5OdW1iZXJUb0ludChpbmRleCAvIDIpXS5fdHlwZSA9PSBNYWlsVHlwZUVudW0ucGVyc29uYWwpe1xyXG4gICAgICAgICAgICAvLyAgICAgaXNsb29rID0gdGhpcy5lbWFpbGxpc3RbVUlVdGlsLk51bWJlclRvSW50KGluZGV4IC8gMildLmlzbG9vaztcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyBlbHNle1xyXG4gICAgICAgICAgICBsZXQgdXNlcmlkID0gTG9naW5WaWV3Q3RyLmluc3RhbmNlLk1vZGVsLm1QbGF5ZXJNb2RlbC51c2VyaWQ7XHJcbiAgICAgICAgICAgIGxldCB0cmFkZW5vID0gdGhpcy5lbWFpbGxpc3RbVUlVdGlsLk51bWJlclRvSW50KGluZGV4IC8gMildLnRyYWRlbm87XHJcbiAgICAgICAgICAgIGxldCBsb29rTiA9IFBsYXllclByZWZzLkdldEludChcIklTTE9PS1wiICsgdXNlcmlkICsgXCJcIiArIHRyYWRlbm8sIDApO1xyXG4gICAgICAgICAgICBpc2xvb2sgPSBsb29rTiA9PSAwID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoTG9iYnlWaWV3Q3RyLmluc3RhbmNlLnZpZXcgJiYgIWlzbG9vaykge1xyXG4gICAgICAgICAgICAgICAgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLnZpZXcuc2V0Rmxvd2luZ1JlYWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRDbnRVbisrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgZ28uZ2V0Q29udHJvbGxlcihcInJlYWRcIikuc2V0U2VsZWN0ZWRJbmRleChpc2xvb2sgPyAxIDogMCk7XHJcbiAgICAgICAgICAgIGdvLmdldENoaWxkKFwiYnV0dG9uT3BlblwiKS5hc0J1dHRvbi5jbGVhckNsaWNrKCk7XHJcbiAgICAgICAgICAgIGdvLmdldENoaWxkKFwiYnV0dG9uT3BlblwiKS5hc0J1dHRvbi5vbkNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGdvLmdldENvbnRyb2xsZXIoXCJyZWFkXCIpLnNldFNlbGVjdGVkSW5kZXgoMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlNob3dFbWFpQ29udGVudCh0aGlzLmVtYWlsbGlzdFtVSVV0aWwuTnVtYmVyVG9JbnQoaW5kZXggLyAyKV0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNob3dFbWFpQ29udGVudChkYXRhOiBFbWFpbGluZm9TRCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2hvd0VtYWlDb250ZW50XCIpO1xyXG4gICAgICAgIHRoaXMudWlfRW1haWxMaXN0LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVpX2VtYWlsRGV0YWlscy52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVpX2J0blJlbW92ZUVtYWlsLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudWlfZW1haWxUaXRsZS50ZXh0ID0gZGF0YS50aXRsZTtcclxuICAgICAgICB0aGlzLnVpX2VtYWlsQ29udGVudC50ZXh0ID0gZGF0YS5jb250ZW50O1xyXG4gICAgICAgIHRoaXMudWlfZW1haWxGcm9tLnRleHQgPSBcIuKAlOKAlFwiICsgZGF0YS5mcm9tVXNlck5hbWU7XHJcbiAgICAgICAgdGhpcy51aV9lbWFpbFRpbWUudGV4dCA9IGRhdGEuX3RpbWU7XHJcblxyXG4gICAgICAgIC8v5Liq5Lq66YKu5Lu25qCH6K6w5bey6K+7XHJcbiAgICAgICAgLy8gaWYoZGF0YS5fdHlwZSA9PSBNYWlsVHlwZUVudW0ucGVyc29uYWwpXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICBsZXQgc3RhdGUgPSBuZXcgY3Nfc2V0ZW1haWxzdGF0ZSgpO1xyXG4gICAgICAgIC8vICAgICBzdGF0ZS50cmFkZU5vID0gZGF0YS50cmFkZW5vO1xyXG4gICAgICAgIC8vICAgICBzdGF0ZS5mbiA9XCJjc19zZXRlbWFpbHN0YXRlXCI7XHJcbiAgICAgICAgLy8gICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuU2VuZEpTT04oc3RhdGUsdGhpcy5zY19zZXRlbWFpbHN0YXRlLmJpbmQodGhpcykpO1xyXG4gICAgICAgIC8vIH1lbHNle1xyXG4gICAgICAgIC8v5YW25LuW6YKu5Lu25qCH6K6w5bey6K+7XHJcbiAgICAgICAgbGV0IHVzZXJpZCA9IExvZ2luVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5tUGxheWVyTW9kZWwudXNlcmlkO1xyXG4gICAgICAgIGxldCB0cmFkZW5vID0gZGF0YS50cmFkZW5vO1xyXG4gICAgICAgIGlmIChQbGF5ZXJQcmVmcy5HZXRJbnQoXCJJU0xPT0tcIiArIHVzZXJpZCArIFwiXCIgKyB0cmFkZW5vLCAwKSA9PSAwKSB0aGlzLnJlYWRDbnQrKztcclxuICAgICAgICBQbGF5ZXJQcmVmcy5TZXRJbnQoXCJJU0xPT0tcIiArIHVzZXJpZCArIFwiXCIgKyB0cmFkZW5vLCAxKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIHRoaXMudWlfYnRuUmVtb3ZlRW1haWwuY2xlYXJDbGljaygpO1xyXG4gICAgICAgIHRoaXMudWlfYnRuUmVtb3ZlRW1haWwub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3NfcmVtb3ZlRW1haWwoZGF0YS50cmFkZW5vLCBkYXRhLlRvVXNlcklkKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2Nfc2V0ZW1haWxzdGF0ZShkYXRhOiBzY19zZXRlbWFpbHN0YXRlKSB7XHJcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0ID09IDEpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuagh+iusOair+W6puaIkOWKn++8gVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmVycm9yKFwi5qCH6K6w5qKv5bqm5aSx6LSl77yBXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjc19yZW1vdmVFbWFpbCh0cmFkZU5vOiBzdHJpbmcsIHRvVXNlcklkOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgcmVtb3ZlID0gbmV3IGNzX3JlbW92ZUVtYWlsKCk7XHJcbiAgICAgICAgcmVtb3ZlLnRyYWRlTm8gPSB0cmFkZU5vO1xyXG4gICAgICAgIHJlbW92ZS5Ub1VzZXJJZCA9IHRvVXNlcklkO1xyXG4gICAgICAgIHJlbW92ZS5mbiA9IFwiY3NfcmVtb3ZlRW1haWxcIjtcclxuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlNlbmRKU09OKHJlbW92ZSwgdGhpcy5zY19yZW1vdmVFbWFpbC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2NfcmVtb3ZlRW1haWwoZGF0YTogc2NfcmVtb3ZlRW1haWwpIHtcclxuICAgICAgICAvLy0xIOmCruS7tuS4jeWtmOWcqCAgLTLns7vnu5/pgq7ku7bkuI3lj6/liKDpmaTjgILpu5jorqTkv53nlZk35aSpXHJcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0ID09IDEpIHtcclxuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFwi5Yiq6Zmk5oiQ5Yqf77yBXCIpO1xyXG4gICAgICAgICAgICB0aGlzLkhpZGUoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGRhdGEucmVzdWx0ID09IC0xKSB7XHJcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3LlNob3dUaXBMYWJlbChcIumDteS7tuS4jeWtmOWcqO+8gVwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGRhdGEucmVzdWx0ID09IC0yKSB7XHJcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3LlNob3dUaXBMYWJlbChcIuezu+e1semDteS7tuS4jeWPr+WIqumZpO+8jOm7mOiqjeS/neeVmTflpKnvvIFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19