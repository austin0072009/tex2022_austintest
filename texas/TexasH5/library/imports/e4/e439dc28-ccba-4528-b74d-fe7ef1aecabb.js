"use strict";
cc._RF.push(module, 'e439dwozLpFKLdN/n7xrsq7', 'BalenceComp');
// Games/texas/script/Balence/BalenceComp.ts

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
var ViewBase_1 = require("../../../../Script/BaseFrame/ViewBase");
var UIUtil_1 = require("../../../../Script/Common/UIUtil");
var F_TexasViewCtr_1 = require("../Contrl/F_TexasViewCtr");
var BalenceCtr_1 = require("./BalenceCtr");
var BalenceComp = /** @class */ (function (_super) {
    __extends(BalenceComp, _super);
    function BalenceComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_txtRoomName = null;
        _this.ui_txtGameDate = null;
        // public ui_txtGameTime:fgui.GTextField = null;
        _this.ui_userInfo1 = null;
        _this.ui_userInfo2 = null;
        _this.ui_userInfo3 = null;
        _this.ui_txtDipi = null;
        // public ui_txtJackpot:fgui.GTextField = null;
        _this.ui_txtActionCount = null;
        _this.ui_txtTotalGold = null;
        _this.ui_ListContent = null;
        _this.ui_shareBtn = null;
        _this.ui_btnExit = null;
        _this.ui_huiguBtn = null;
        _this.ui_huiguBtnText = null;
        _this.ui_baoxiancell = null;
        _this.ui_allShoushuTitle = null;
        _this.ui_takeInTitle = null;
        _this.ui_zhanjuTitle = null;
        _this.ui_rankTitle = null;
        _this.ui_userTitle = null;
        _this.ui_shoushuTitle = null;
        _this.ui_zhanjiTitle = null;
        _this.ui_clubBtn = null;
        _this.ui_clubBtnText = null;
        _this.ui_InsuranceDetailed = null;
        _this.ui_InsuranceDetailedScroll = null;
        _this.ui_clubcell = null;
        _this.ui_userCell = null;
        _this.ui_btnExit_i = null;
        _this.ui_zhanjuTitle_i = null;
        _this.ui_btnExit_c = null;
        _this.ui_clubDetailed = null;
        _this.ui_clubDetailedScroll = null;
        _this.ui_zhanjuTitle_c = null;
        _this.onLoadEnd = false;
        _this.strDipi = "底皮 ";
        _this.strJackpot = "奖池: ";
        _this.strActionCount = "本局总手数:";
        _this.strTotalGold = "本局总带入:";
        _this.strRoomName = "房间名:川渝扑克-";
        _this.strId = "ID: ";
        _this.strTake = "带入: ";
        _this.strShouShu = "手数: ";
        _this.strScore = "战绩: ";
        return _this;
    }
    Object.defineProperty(BalenceComp.prototype, "_model", {
        get: function () {
            return BalenceCtr_1.default.instance.Model;
        },
        enumerable: false,
        configurable: true
    });
    BalenceComp.prototype.OnLoadCompleted = function () {
        this.onLoadEnd = true;
        if (this.mystart)
            this.MyStartEx();
    };
    BalenceComp.prototype.MyStart = function () {
        this.mystart = true;
        if (this.onLoadEnd)
            this.MyStartEx();
    };
    BalenceComp.prototype.MyStartEx = function () {
        BalenceCtr_1.default.instance.view = this; //固定每个view设置的写法        
        this.Init();
        this.InitEvents();
        this.Hide();
    };
    BalenceComp.prototype.InitLanguage = function () {
        //设置颜色没有效果
        this.ui_allShoushuTitle.text = UIUtil_1.UIUtil.TextGradient("#FFFFFF", "#BAEAFF", "总手数:");
        this.ui_takeInTitle.text = UIUtil_1.UIUtil.TextGradient("#FFFFFF", "#BAEAFF", "总带入: ");
        this.ui_zhanjuTitle.text = UIUtil_1.UIUtil.TextGradient("#FFFFFF", "#BAEAFF", "战局详情");
        this.ui_rankTitle.text = UIUtil_1.UIUtil.TextGradient("#FFFFFF", "#BAEAFF", "排名");
        this.ui_userTitle.text = UIUtil_1.UIUtil.TextGradient("#FFFFFF", "#BAEAFF", "玩家");
        this.ui_shoushuTitle.text = UIUtil_1.UIUtil.TextGradient("#FFFFFF", "#BAEAFF", "手数");
        this.ui_zhanjiTitle.text = UIUtil_1.UIUtil.TextGradient("#FFFFFF", "#BAEAFF", "战绩");
        this.ui_baoxiancell.getChild("Text").asTextField.text = "保险";
        this.ui_zhanjuTitle_i.text = UIUtil_1.UIUtil.TextGradient("#FFFFFF", "#BAEAFF", "保险明细");
        this.ui_zhanjuTitle_c.text = UIUtil_1.UIUtil.TextGradient("#FFFFFF", "#BAEAFF", "俱乐部明细");
        this.ui_clubBtnText.text = UIUtil_1.UIUtil.TextGradient("#FFFFFF", "#BAEAFF", "俱乐部明细");
        this.ui_huiguBtnText.text = UIUtil_1.UIUtil.TextGradient("#FFFFFF", "#BAEAFF", "牌局回顾");
    };
    BalenceComp.prototype.InitImage = function () {
    };
    BalenceComp.prototype.Init = function () {
        this.ui_baoxiancell = this.ui_ListContent.addItem("ui://Texas/baoxiancell").asCom;
    };
    BalenceComp.prototype.InitEvents = function () {
        var _this = this;
        this.ui_shareBtn.clearClick();
        this.ui_shareBtn.onClick(function () {
            _this.TakeShotAndShare();
        });
        this.ui_btnExit.clearClick();
        this.ui_btnExit.onClick(function () {
            // this.Hide();
            F_TexasViewCtr_1.default.instance.cs_applyexittable_tex(null);
        });
        this.ui_huiguBtn.clearClick();
        this.ui_huiguBtn.onClick(function () {
            F_TexasViewCtr_1.default.instance.ShowHistory_bigend();
        });
        this.ui_baoxiancell.clearClick();
        this.ui_baoxiancell.getChild("Button").onClick(function () {
            _this.ShowInsuranceDetailed();
        });
        this.ui_clubBtn.clearClick();
        this.ui_clubBtn.onClick(function () {
            _this.ShowClubDetailed();
        });
        this.ui_btnExit_i.clearClick();
        this.ui_btnExit_i.onClick(function () {
            _this.ui_InsuranceDetailedScroll.removeChildrenToPool();
            _this.ui_InsuranceDetailed.visible = false;
        });
        this.ui_btnExit_c.clearClick();
        this.ui_btnExit_c.onClick(function () {
            _this.ui_clubDetailedScroll.removeChildrenToPool();
            _this.ui_clubDetailed.visible = false;
        });
    };
    BalenceComp.prototype.Open = function (gameId, roomNum) {
        this.Show();
        this.InitImage();
        this.InitLanguage();
        this.isTexas = gameId == 51;
        this.strRoomName = "房间名:" + this.isTexas ? "德州" : "扯旋" + "-"; //房间名 德州:扯旋
        this.ui_txtRoomName.text = (this.strRoomName + this._model.br + "-" + roomNum);
        this.ui_txtGameDate.text = (this._model.begintime + " ---- " + this._model.endtime);
        // this.ui_txtGameTime.text = (this._model.duration <= 30 ? "0.5h" : "1h");
        var positive = this._model.tax > 0 ? "+" : "";
        // this.ui_txtJackpot.text = positive + UIUtil.NumberToInt(this._model.tax / 100);
        this.ui_txtActionCount.text = "" + this._model.pcount;
        this.ui_txtTotalGold.text = "" + UIUtil_1.UIUtil.NumberToInt(this._model.allintogold / 100);
        this.SetUserInfo(this.ui_userInfo1, this.GetUserInfoByType(this._model.gainlist, 1), 0); //土豪
        this.SetUserInfo(this.ui_userInfo2, this.GetUserInfoByType(this._model.gainlist, 2), 1);
        this.SetUserInfo(this.ui_userInfo3, this.GetUserInfoByType(this._model.gainlist, 3), 2); //大鱼
        this.ui_baoxiancell.getChild("txtScore").asTextField.text = UIUtil_1.UIUtil.formatNumber100(this._model.InsurTotal) + "";
        this.ShowList(this._model.gainlist);
        this.ui_clubBtn.visible = true;
        this.ui_baoxiancell.getChild("Button").visible = true;
        if (!this._model.isnamger) {
            this.ui_clubBtn.visible = false;
            this.ui_baoxiancell.getChild("Text").text = "保险";
            this.ui_baoxiancell.getChild("Button").visible = false;
        }
        this.ui_InsuranceDetailedScroll.visible = true;
    };
    BalenceComp.prototype.Hide = function () {
        _super.prototype.Hide.call(this);
        this.node.active = false;
    };
    BalenceComp.prototype.Show = function () {
        this.node.active = true;
        _super.prototype.Show.call(this);
    };
    //1: 土豪 2: MVP 3 : 大鱼
    BalenceComp.prototype.GetUserInfoByType = function (tList, type) {
        if (tList == null) {
            return null;
        }
        var result = null;
        tList.forEach(function (item) {
            if (type == 1) {
                if (result == null || result.finto < item.finto) {
                    result = item;
                }
            }
            else if (type == 2) {
                if (result == null || result.gain < item.gain) {
                    result = item;
                }
            }
            else {
                if (result == null || result.gain > item.gain) {
                    result = item;
                }
            }
        });
        return result;
    };
    BalenceComp.prototype.SetUserInfo = function (user, userInfo, turnTitle) {
        user.visible = (userInfo != null);
        if (userInfo == null)
            return;
        var nameTxt = user.getChild("nameText").asTextField;
        var headImage = user.getChild("UserHead").asCom.getChild("headImage").asLoader;
        UIUtil_1.UIUtil.SetLimitTxt(nameTxt, userInfo.wechat.wName, 6);
        UIUtil_1.UIUtil.loadImage(headImage, userInfo.wechat.wicon);
        user.getController("type").setSelectedIndex(turnTitle);
    };
    BalenceComp.prototype.ShowList = function (tList) {
        this.ui_ListContent.removeChildrenToPool();
        this.ui_baoxiancell.visible = (tList != null && tList.length > 0);
        if (tList == null || tList.length == 0)
            return;
        tList.sort(function (info1, info2) { return info2.gain - info1.gain; });
        var go = null;
        var testGold = this._model.allintogold;
        for (var i = 0; i < tList.length; i++) {
            go = this.ui_ListContent.addItemFromPool("ui://Texas/scoreCell2").asCom;
            this.SetCellInfo(go, tList[i], i + 1);
            testGold += tList[i].gain;
        }
        if (testGold != 0) {
            //DebugEX.LogC("大结算数据不对：" + testGold);
        }
    };
    BalenceComp.prototype.SetCellInfo = function (scoreCell, gainData, rankId) {
        var headImage = scoreCell.getChild("UserHead").asCom.getChild("headImage").asLoader;
        var txtRank = scoreCell.getChild("txtRank").asTextField;
        var txtUserName = scoreCell.getChild("txtUserName").asTextField;
        var txtUserId = scoreCell.getChild("txtUserId").asTextField;
        var txtUserGold = scoreCell.getChild("txtUserGold").asTextField;
        var txtActionCount = scoreCell.getChild("txtActionCount").asTextField;
        var txtScore = scoreCell.getChild("txtScore").asTextField;
        var txtRunAway = scoreCell.getChild("txtRunAway").asTextField;
        txtRunAway.visible = (gainData.otherMoney != 0);
        if (gainData.otherMoney > 0) {
            txtRunAway.text = "逃跑奖励:" + (gainData.otherMoney / 100.0).toFixed(2); //逃跑奖励
        }
        else {
            txtRunAway.text = "逃跑惩罚:" + (gainData.otherMoney / 100.0).toFixed(2); //逃跑惩罚
        }
        UIUtil_1.UIUtil.loadImage(headImage, gainData.wechat.wicon);
        scoreCell.getController("top").setSelectedIndex(rankId > 3 ? 0 : rankId);
        txtRank.text = rankId + "";
        txtUserName.text = gainData.wechat.wName;
        txtUserId.text = "ID:  " + gainData.UserID;
        txtUserGold.text = "带入:  " + UIUtil_1.UIUtil.formatNumber100(gainData.finto);
        txtActionCount.text = gainData.pcount + "";
        var positive = gainData.gain > 0 ? "+" : "";
        txtScore.text = positive + (BalenceCtr_1.default.instance.Model.IsSupper ? UIUtil_1.UIUtil.formatNumber100(gainData.gain) : UIUtil_1.UIUtil.formatNumber100(gainData.gain));
        txtScore.color = gainData.gain >= 0 ? new cc.Color(193, 77, 70) : new cc.Color(195, 138, 53);
    };
    BalenceComp.prototype.TakeShotAndShare = function () {
        // let filename = "Screenshot-" + System.DateTime.Now.ToString("MMddHHmmss");
        // ScreenshotManager.SaveScreenshot(filename, "ScreenshotApp", "jpg");
        // TimeInfoMgr.instance.AddTimer(1.5F, () =>
        // {
        //     if (gameObject.activeSelf)
        //     {
        //         string path = "";
        //         if (Application.platform == RuntimePlatform.Android)
        //         {
        //             path = "/sdcard/Pictures/Screenshots/" + filename + ".jpg";
        //         }
        //         else
        //         {
        //             path = Application.persistentDataPath + "/" + filename + ".jpg";
        //         }
        //         ShareSdkManager.Singleton.ShareTableBigEnd(path);
        //     }
        // });
    };
    BalenceComp.prototype.ShowInsuranceDetailed = function () {
        this.ui_InsuranceDetailed.visible = true;
        this.ui_clubcell.visible = false;
        this.ui_userCell.visible = false;
        if (this._model.clunbins == null || this._model.clunbins.length == 0)
            return;
        this.ui_InsuranceDetailedScroll.removeChildrenToPool();
        var index = 1;
        for (var i = 0; i < this._model.clunbins.length; ++i) {
            var temp = this._model.clunbins[i];
            var go = this.ui_InsuranceDetailedScroll.addItem("ui://Texas/clubcell").asCom;
            ++index;
            var clubtxt = go.getChild("txtScore").asTextField;
            clubtxt.text = temp.clubname;
            for (var j = 0; j < temp.userinfos.length; ++j) {
                var userData = temp.userinfos[j];
                var userGo = this.ui_InsuranceDetailedScroll.addItem("ui://Texas/userCell").asCom;
                ++index;
                var head = userGo.getChild("UserHead").asCom.getChild("headImage").asLoader;
                var winTxt = userGo.getChild("txtScore").asTextField;
                var userNametxt = userGo.getChild("txtUserName").asTextField;
                head.visible = false;
                UIUtil_1.UIUtil.loadImage(head, userData.headurl);
                userNametxt.text = userData.name;
                var positive = userData.gold > 0 ? "+" : "";
                winTxt.text = positive + UIUtil_1.UIUtil.formatNumber100(userData.gold);
                winTxt.color = userData.gold > 0 ? new cc.Color(193, 77, 70) : new cc.Color(195, 138, 53);
            }
        }
    };
    BalenceComp.prototype.ShowClubDetailed = function () {
        this.ui_clubDetailed.visible = true;
        if (this._model.clubWl == null || this._model.clubWl.length == 0)
            return;
        this.ui_clubDetailedScroll.removeChildrenToPool();
        for (var i = 0; i < this._model.clubWl.length; ++i) {
            var go = this.ui_clubDetailedScroll.addItemFromPool().asCom;
            var clubtxt = go.getChild("txtclubName").asTextField;
            var wintxt = go.getChild("txtScore").asTextField;
            clubtxt.text = this._model.clubWl[i].clubname;
            wintxt.text = this._model.clubWl[i].gold + "";
            var positive = this._model.clubWl[i].gold > 0 ? "+" : "";
            wintxt.text = positive + (BalenceCtr_1.default.instance.Model.IsSupper ? UIUtil_1.UIUtil.formatNumber100(this._model.clubWl[i].gold) : UIUtil_1.UIUtil.formatNumber100(this._model.clubWl[i].gold));
            wintxt.color = this._model.clubWl[i].gold >= 0 ? new cc.Color(193, 77, 70) : new cc.Color(195, 138, 53);
        }
    };
    return BalenceComp;
}(ViewBase_1.default));
exports.default = BalenceComp;

cc._RF.pop();