"use strict";
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