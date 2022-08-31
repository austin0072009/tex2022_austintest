"use strict";
cc._RF.push(module, 'eddf3MzIrBKrYI4Z5f/jKPy', 'TexasRecordComp');
// Games/texas/script/View/TexasRecordComp.ts

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
var F_TexasViewCtr_1 = require("../Contrl/F_TexasViewCtr");
var TexasLanguage_1 = require("../Model/TexasLanguage");
var ViewBase_1 = require("../../../../Script/BaseFrame/ViewBase");
var UIUtil_1 = require("../../../../Script/Common/UIUtil");
var Texas_1 = require("../Model/Texas");
var TexasRecordComp = /** @class */ (function (_super) {
    __extends(TexasRecordComp, _super);
    function TexasRecordComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btnClose_Record = null;
        _this.ui_ListRecord = null;
        _this.ui_lookPlayerCell = null;
        _this.ui_ListLookPlayer = null;
        _this.ui_txtLookTime = null;
        _this.ui_TextTitle = null;
        _this.ui_nameTitle = null;
        _this.ui_takeGoldTitle = null;
        _this.ui_turnScoreTitle = null;
        _this.ui_TextPlayer = null;
        _this.ui_cuopaiTxt = null;
        _this.ui_txtJackpotPool = null;
        _this.onLoadEnd = false;
        //打开界面
        // Show(cardList:number[])
        // {
        //     super.Show();
        // }
        _this.timer = null;
        return _this;
    }
    TexasRecordComp.prototype.MyStart = function () {
        this.mystart = true;
        if (this.onLoadEnd)
            this.MyStartEx();
    };
    TexasRecordComp.prototype.OnLoadCompleted = function () {
        this.onLoadEnd = true;
        if (this.mystart)
            this.MyStartEx();
    };
    TexasRecordComp.prototype.AutoSetGoProperty = function () { };
    TexasRecordComp.prototype.MyStartEx = function () {
        _super.prototype.AutoSetGoProperty.call(this);
        this.InitLanguage();
        this.Init();
        this.Show();
    };
    TexasRecordComp.prototype.InitLanguage = function () {
        this.ui_TextTitle.text = TexasLanguage_1.TexasLanguage.getLanguageById(1344); //实时战绩
        this.ui_nameTitle.text = TexasLanguage_1.TexasLanguage.getLanguageById(1385); //昵称
        this.ui_takeGoldTitle.text = TexasLanguage_1.TexasLanguage.getLanguageById(1345); //带入
        this.ui_turnScoreTitle.text = TexasLanguage_1.TexasLanguage.getLanguageById(1346); //积分
        this.ui_TextPlayer.text = TexasLanguage_1.TexasLanguage.getLanguageById(1347); //旁观玩家
        this.ui_cuopaiTxt.text = TexasLanguage_1.TexasLanguage.getLanguageById(1348); //搓牌
    };
    TexasRecordComp.prototype.Init = function () {
        this.InitEvents();
    };
    TexasRecordComp.prototype.InitEvents = function () {
        var _this = this;
        var self = this;
        this.ui_btnClose_Record.onClick(function () {
            if (self.node.getNumberOfRunningActions() > 0)
                return;
            _this.Clear();
            self.node.runAction(cc.moveTo(0.2, cc.v2(-self.fguiWidth, 0))); //DoTweenEx.DOLocalMoveX(this.gameObject.transform, -this.gameObject.GetComponent<RectTransform>().sizeDelta.x, 0.5f);
        });
    };
    TexasRecordComp.prototype.UpdateData = function (_jackpot, _glist, _wlist, insPool, goldout) {
        // this.ui_txtJackpotPool.visible = true;
        this.ui_txtJackpotPool.text = _jackpot >= 0 ? "+" + UIUtil_1.UIUtil.NumberToInt(_jackpot / 100) : "+0";
        var endTime = F_TexasViewCtr_1.default.instance.Model.endTime;
        this.ShowUserList(_wlist);
        _glist.sort(function (x1, x2) { return x2.gain - x1.gain; });
        this.ShowRecordList(_glist, insPool, _wlist, goldout);
        if (!F_TexasViewCtr_1.default.instance.Model.isGamestart) {
            var countDown = endTime;
            this.ui_txtLookTime.visible = (countDown > 0);
            if (countDown <= 0) {
                return;
            }
            this.ui_txtLookTime.text = UIUtil_1.UIUtil.getStringTime(countDown);
        }
        else {
            this.UpdateLeftTime(endTime); // - UIUtil.NumberToInt(cc.director.getTotalTime()/1000));
        }
    };
    TexasRecordComp.prototype.ShowRecordList = function (tList, insNum, _wlist, goldout) {
        if (tList == null || tList.length == 0)
            return;
        // UIUtil.HideChildren(this.ui_ListRecord);
        this.ui_ListRecord.removeChildrenToPool();
        var go = null;
        if (F_TexasViewCtr_1.default.instance.Model.gametype == 2) //保险模式显示保险池
         {
            go = this.ui_ListRecord.addItemFromPool();
            go.setScale(1, 1);
            this.SetInsPoolCell(go, insNum, goldout);
        }
        for (var i = 0; i < tList.length; i++) {
            go = this.ui_ListRecord.addItemFromPool();
            go.setScale(1, 1);
            this.SetRecordCellInfo(go, tList[i], _wlist, goldout);
        }
    };
    TexasRecordComp.prototype.SetInsPoolCell = function (inslCell, insNum, goldout) {
        var txtName = inslCell.getChild("txtName").asCom;
        var txtTakeGold = inslCell.getChild("txtTakeGold").asCom;
        var txtTurnScore = inslCell.getChild("txtTurnScore").asTextField;
        var insBg = inslCell.getChild("InsImage").asLoader;
        var txtGoldout = inslCell.getChild("txtGoldout").asTextField;
        inslCell.getChild("insNum").asTextField.visible = true;
        insBg.visible = true;
        txtName.visible = false;
        txtTakeGold.visible = false;
        txtTurnScore.color = new cc.Color(81, 174, 21);
        txtTurnScore.text = Texas_1.Texas.formatNumber100(insNum) + "";
        txtGoldout.text = goldout == null || goldout == 0 ? "" : "(" + goldout + ")";
        UIUtil_1.UIUtil.loadImage(insBg, "baoxianIcon", "Texas"); //Res.Singleton.SetImageSprite(insBg.GetComponent<Image>(), "whirl_history", "baoxianIcon");
    };
    TexasRecordComp.prototype.SetRecordCellInfo = function (scoreCell, gainData, _wlist, goldout) {
        var txtName = scoreCell.getChild("txtName").asTextField;
        var txtTakeGold = scoreCell.getChild("txtTakeGold").asTextField;
        var txtTurnScore = scoreCell.getChild("txtTurnScore").asTextField;
        var txtpcountScore = scoreCell.getChild("txtpcountScore").asTextField;
        var txtGoldout = scoreCell.getChild("txtGoldout").asTextField;
        var selfImage = scoreCell.getChild("selfImage");
        selfImage.visible = (gainData.UserID == F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid);
        var insBg = scoreCell.getChild("InsImage").asCom;
        scoreCell.getChild("insNum").asTextField.visible = false;
        insBg.visible = false;
        txtName.visible = true;
        txtTakeGold.visible = true;
        txtpcountScore.visible = true;
        txtName.text = gainData.wechat.wName;
        UIUtil_1.UIUtil.SetLimitTxt(txtName, gainData.wechat.wName, 6);
        txtTakeGold.text = Texas_1.Texas.formatNumber100(gainData.finto) + "";
        txtGoldout.text = goldout == null || goldout == 0 ? "" : "(" + goldout + ")";
        var positive = gainData.gain > 0 ? "+" : "";
        var colorStr = null;
        if (gainData.gain > 0) {
            colorStr = new cc.Color(187, 73, 73);
        }
        else if (gainData.gain == 0) {
            colorStr = new cc.Color(133, 133, 133);
        }
        else {
            colorStr = new cc.Color(60, 177, 124);
        }
        txtTurnScore.color = colorStr;
        txtTurnScore.text = "" + positive + Texas_1.Texas.formatNumber100(gainData.gain);
        txtpcountScore.text = gainData.pcount.toString();
        //需要变灰 离桌的情况或者不在桌子上的玩家
        var temp = null;
        _wlist.forEach(function (item) {
            if (item.userid == gainData.UserID)
                temp = item;
        }); //判断当前玩家是否是观众
        var color = gainData.offline == 1 || temp != null ? cc.Color.GRAY : cc.Color.WHITE;
        txtName.color = color;
        txtTakeGold.color = color;
        txtpcountScore.color = color;
    };
    TexasRecordComp.prototype.ShowUserList = function (tList) {
        if (tList == null || tList.length == 0)
            return;
        this.ui_ListLookPlayer.removeChildrenToPool();
        var go = null;
        for (var i = 0; i < tList.length; i++) {
            go = this.ui_ListLookPlayer.addItemFromPool();
            go.setScale(1, 1);
            this.SetUserCellInfo(go, tList[i]);
        }
    };
    TexasRecordComp.prototype.SetUserCellInfo = function (scoreCell, gainData) {
        var _this = this;
        var headImage = scoreCell.getChild("UserHead").asCom.getChild("headImage").asLoader;
        var txtName = scoreCell.getChild("txtName").asTextField;
        var btn = scoreCell.getChild("button").asButton;
        UIUtil_1.UIUtil.SetLimitTxt(txtName, gainData._n, 6);
        UIUtil_1.UIUtil.loadImage(headImage, gainData.wechat.wicon);
        btn.clearClick();
        var self = this;
        btn.onClick(function () {
            _this.Clear();
            self.node.runAction(cc.moveTo(0.2, cc.v2(-self.fguiWidth, 0))); // DoTweenEx.DOLocalMoveX(this.gameObject.transform, -this.gameObject.GetComponent<RectTransform>().sizeDelta.x, 0.5f);
            F_TexasViewCtr_1.default.instance.view.ShowUIUserInfo(gainData, -1);
        });
    };
    TexasRecordComp.prototype.UpdateLeftTime = function (leftTime) {
        var _this = this;
        if (!F_TexasViewCtr_1.default.instance.Model.isGamestart)
            return;
        var countDown = leftTime - 1;
        this.ui_txtLookTime.visible = (countDown > 0);
        if (countDown <= 0) {
            return;
        }
        this.ui_txtLookTime.text = UIUtil_1.UIUtil.getStringTime(countDown);
        var endTime = leftTime + cc.director.getTotalTime() / 1000;
        this.unschedule(this.timer);
        this.schedule(this.timer = function () {
            countDown = UIUtil_1.UIUtil.NumberToInt((endTime - cc.director.getTotalTime() / 1000));
            _this.ui_txtLookTime.text = UIUtil_1.UIUtil.getStringTime(countDown);
            if (countDown <= 0) {
                F_TexasViewCtr_1.default.instance.cs_getgain_tex(); //重新请求刷新
            }
        }, 1, countDown);
    };
    TexasRecordComp.prototype.Show = function () {
        _super.prototype.Show.call(this);
        this.ui_btnClose_Record.visible = true;
    };
    TexasRecordComp.prototype.Hide = function () {
        _super.prototype.Hide.call(this);
        this.Clear();
    };
    TexasRecordComp.prototype.OnDestroy = function () {
        this.Hide();
    };
    TexasRecordComp.prototype.Clear = function () {
        // this.ui_btnClose_Record.visible = false;
        this.unschedule(this.timer);
    };
    return TexasRecordComp;
}(ViewBase_1.default));
exports.default = TexasRecordComp;

cc._RF.pop();