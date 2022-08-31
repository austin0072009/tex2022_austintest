
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/texas/script/Balence/BalenceComp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXHRleGFzXFxzY3JpcHRcXEJhbGVuY2VcXEJhbGVuY2VDb21wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtFQUE2RDtBQUM3RCwyREFBMEQ7QUFDMUQsMkRBQXNEO0FBRXRELDJDQUF3RDtBQUl4RDtJQUF5QywrQkFBUTtJQUFqRDtRQUFBLHFFQW9XQztRQW5XVSxvQkFBYyxHQUFvQixJQUFJLENBQUM7UUFDdkMsb0JBQWMsR0FBb0IsSUFBSSxDQUFDO1FBQzlDLGdEQUFnRDtRQUN6QyxrQkFBWSxHQUFvQixJQUFJLENBQUM7UUFDckMsa0JBQVksR0FBb0IsSUFBSSxDQUFDO1FBQ3JDLGtCQUFZLEdBQW9CLElBQUksQ0FBQztRQUVyQyxnQkFBVSxHQUFvQixJQUFJLENBQUM7UUFDMUMsK0NBQStDO1FBQ3hDLHVCQUFpQixHQUFvQixJQUFJLENBQUM7UUFDMUMscUJBQWUsR0FBb0IsSUFBSSxDQUFDO1FBRXhDLG9CQUFjLEdBQWUsSUFBSSxDQUFDO1FBRWxDLGlCQUFXLEdBQWlCLElBQUksQ0FBQztRQUNqQyxnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFDaEMsaUJBQVcsR0FBaUIsSUFBSSxDQUFDO1FBQ2pDLHFCQUFlLEdBQW9CLElBQUksQ0FBQztRQUV4QyxvQkFBYyxHQUFvQixJQUFJLENBQUM7UUFFdkMsd0JBQWtCLEdBQW9CLElBQUksQ0FBQztRQUMzQyxvQkFBYyxHQUFvQixJQUFJLENBQUM7UUFDdkMsb0JBQWMsR0FBb0IsSUFBSSxDQUFDO1FBQ3ZDLGtCQUFZLEdBQW9CLElBQUksQ0FBQztRQUNyQyxrQkFBWSxHQUFvQixJQUFJLENBQUM7UUFDckMscUJBQWUsR0FBb0IsSUFBSSxDQUFDO1FBQ3hDLG9CQUFjLEdBQW9CLElBQUksQ0FBQztRQUN2QyxnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFDaEMsb0JBQWMsR0FBb0IsSUFBSSxDQUFDO1FBRXZDLDBC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QyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDM0c7SUFDTCxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQXBXQSxBQW9XQyxDQXBXd0Msa0JBQVEsR0FvV2hEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZXdCYXNlIGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL1ZpZXdCYXNlXCI7XG5pbXBvcnQgeyBVSVV0aWwgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0NvbW1vbi9VSVV0aWxcIjtcbmltcG9ydCBGX1RleGFzVmlld0N0ciBmcm9tIFwiLi4vQ29udHJsL0ZfVGV4YXNWaWV3Q3RyXCI7XG5pbXBvcnQgeyBUYWJsZUdhaW5TRCwgY2x1YmluZm8sIEluc3VyaW5mbyB9IGZyb20gXCIuLi9Nb2RlbC9UZXhhc05ldERhdGFcIjtcbmltcG9ydCBCYWxlbmNlQ3RyLCB7IEJhbGVuY2VNb2RlbCB9IGZyb20gXCIuL0JhbGVuY2VDdHJcIjtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhbGVuY2VDb21wIGV4dGVuZHMgVmlld0Jhc2Uge1xuICAgIHB1YmxpYyB1aV90eHRSb29tTmFtZTogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfdHh0R2FtZURhdGU6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgLy8gcHVibGljIHVpX3R4dEdhbWVUaW1lOmZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX3VzZXJJbmZvMTogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfdXNlckluZm8yOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV91c2VySW5mbzM6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XG5cbiAgICBwdWJsaWMgdWlfdHh0RGlwaTogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICAvLyBwdWJsaWMgdWlfdHh0SmFja3BvdDpmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV90eHRBY3Rpb25Db3VudDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfdHh0VG90YWxHb2xkOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuXG4gICAgcHVibGljIHVpX0xpc3RDb250ZW50OiBmZ3VpLkdMaXN0ID0gbnVsbDtcblxuICAgIHB1YmxpYyB1aV9zaGFyZUJ0bjogZmd1aS5HQnV0dG9uID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfYnRuRXhpdDogZmd1aS5HQnV0dG9uID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfaHVpZ3VCdG46IGZndWkuR0J1dHRvbiA9IG51bGw7XG4gICAgcHVibGljIHVpX2h1aWd1QnRuVGV4dDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcblxuICAgIHB1YmxpYyB1aV9iYW94aWFuY2VsbDogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcblxuICAgIHB1YmxpYyB1aV9hbGxTaG91c2h1VGl0bGU6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX3Rha2VJblRpdGxlOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV96aGFuanVUaXRsZTogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfcmFua1RpdGxlOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV91c2VyVGl0bGU6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX3Nob3VzaHVUaXRsZTogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfemhhbmppVGl0bGU6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX2NsdWJCdG46IGZndWkuR0J1dHRvbiA9IG51bGw7XG4gICAgcHVibGljIHVpX2NsdWJCdG5UZXh0OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuXG4gICAgcHVibGljIHVpX0luc3VyYW5jZURldGFpbGVkOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9JbnN1cmFuY2VEZXRhaWxlZFNjcm9sbDogZmd1aS5HTGlzdCA9IG51bGw7XG4gICAgcHVibGljIHVpX2NsdWJjZWxsOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV91c2VyQ2VsbDogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfYnRuRXhpdF9pOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuICAgIHB1YmxpYyB1aV96aGFuanVUaXRsZV9pOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuXG4gICAgcHVibGljIHVpX2J0bkV4aXRfYzogZmd1aS5HQnV0dG9uID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfY2x1YkRldGFpbGVkOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9jbHViRGV0YWlsZWRTY3JvbGw6IGZndWkuR0xpc3QgPSBudWxsO1xuICAgIHB1YmxpYyB1aV96aGFuanVUaXRsZV9jOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuXG5cbiAgICBwdWJsaWMgZ2V0IF9tb2RlbCgpOiBCYWxlbmNlTW9kZWwge1xuICAgICAgICByZXR1cm4gQmFsZW5jZUN0ci5pbnN0YW5jZS5Nb2RlbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uTG9hZEVuZCA9IGZhbHNlO1xuICAgIE9uTG9hZENvbXBsZXRlZCgpIHtcbiAgICAgICAgdGhpcy5vbkxvYWRFbmQgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5teXN0YXJ0KSB0aGlzLk15U3RhcnRFeCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBNeVN0YXJ0KCkge1xuICAgICAgICB0aGlzLm15c3RhcnQgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5vbkxvYWRFbmQpIHRoaXMuTXlTdGFydEV4KCk7XG4gICAgfVxuXG4gICAgcHVibGljIE15U3RhcnRFeCgpIHtcbiAgICAgICAgQmFsZW5jZUN0ci5pbnN0YW5jZS52aWV3ID0gdGhpczsvL+WbuuWumuavj+S4qnZpZXforr7nva7nmoTlhpnms5UgICAgICAgIFxuICAgICAgICB0aGlzLkluaXQoKTtcbiAgICAgICAgdGhpcy5Jbml0RXZlbnRzKCk7XG4gICAgICAgIHRoaXMuSGlkZSgpO1xuICAgIH1cbiAgICBwdWJsaWMgSW5pdExhbmd1YWdlKCkge1xuICAgICAgICAvL+iuvue9ruminOiJsuayoeacieaViOaenFxuICAgICAgICB0aGlzLnVpX2FsbFNob3VzaHVUaXRsZS50ZXh0ID0gVUlVdGlsLlRleHRHcmFkaWVudChcIiNGRkZGRkZcIiwgXCIjQkFFQUZGXCIsIFwi5oC75omL5pWwOlwiKTtcbiAgICAgICAgdGhpcy51aV90YWtlSW5UaXRsZS50ZXh0ID0gVUlVdGlsLlRleHRHcmFkaWVudChcIiNGRkZGRkZcIiwgXCIjQkFFQUZGXCIsIFwi5oC75bim5YWlOiBcIik7XG4gICAgICAgIHRoaXMudWlfemhhbmp1VGl0bGUudGV4dCA9IFVJVXRpbC5UZXh0R3JhZGllbnQoXCIjRkZGRkZGXCIsIFwiI0JBRUFGRlwiLCBcIuaImOWxgOivpuaDhVwiKTtcbiAgICAgICAgdGhpcy51aV9yYW5rVGl0bGUudGV4dCA9IFVJVXRpbC5UZXh0R3JhZGllbnQoXCIjRkZGRkZGXCIsIFwiI0JBRUFGRlwiLCBcIuaOkuWQjVwiKTtcbiAgICAgICAgdGhpcy51aV91c2VyVGl0bGUudGV4dCA9IFVJVXRpbC5UZXh0R3JhZGllbnQoXCIjRkZGRkZGXCIsIFwiI0JBRUFGRlwiLCBcIueOqeWutlwiKTtcbiAgICAgICAgdGhpcy51aV9zaG91c2h1VGl0bGUudGV4dCA9IFVJVXRpbC5UZXh0R3JhZGllbnQoXCIjRkZGRkZGXCIsIFwiI0JBRUFGRlwiLCBcIuaJi+aVsFwiKTtcbiAgICAgICAgdGhpcy51aV96aGFuamlUaXRsZS50ZXh0ID0gVUlVdGlsLlRleHRHcmFkaWVudChcIiNGRkZGRkZcIiwgXCIjQkFFQUZGXCIsIFwi5oiY57upXCIpO1xuICAgICAgICB0aGlzLnVpX2Jhb3hpYW5jZWxsLmdldENoaWxkKFwiVGV4dFwiKS5hc1RleHRGaWVsZC50ZXh0ID0gXCLkv53pmalcIjtcbiAgICAgICAgdGhpcy51aV96aGFuanVUaXRsZV9pLnRleHQgPSBVSVV0aWwuVGV4dEdyYWRpZW50KFwiI0ZGRkZGRlwiLCBcIiNCQUVBRkZcIiwgXCLkv53pmanmmI7nu4ZcIik7XG4gICAgICAgIHRoaXMudWlfemhhbmp1VGl0bGVfYy50ZXh0ID0gVUlVdGlsLlRleHRHcmFkaWVudChcIiNGRkZGRkZcIiwgXCIjQkFFQUZGXCIsIFwi5L+x5LmQ6YOo5piO57uGXCIpO1xuICAgICAgICB0aGlzLnVpX2NsdWJCdG5UZXh0LnRleHQgPSBVSVV0aWwuVGV4dEdyYWRpZW50KFwiI0ZGRkZGRlwiLCBcIiNCQUVBRkZcIiwgXCLkv7HkuZDpg6jmmI7nu4ZcIik7XG4gICAgICAgIHRoaXMudWlfaHVpZ3VCdG5UZXh0LnRleHQgPSBVSVV0aWwuVGV4dEdyYWRpZW50KFwiI0ZGRkZGRlwiLCBcIiNCQUVBRkZcIiwgXCLniYzlsYDlm57pob5cIik7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgSW5pdEltYWdlKCkge1xuXG4gICAgfVxuICAgIHB1YmxpYyBJbml0KCkge1xuICAgICAgICB0aGlzLnVpX2Jhb3hpYW5jZWxsID0gdGhpcy51aV9MaXN0Q29udGVudC5hZGRJdGVtKFwidWk6Ly9UZXhhcy9iYW94aWFuY2VsbFwiKS5hc0NvbTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBJbml0RXZlbnRzKCkge1xuICAgICAgICB0aGlzLnVpX3NoYXJlQnRuLmNsZWFyQ2xpY2soKTtcbiAgICAgICAgdGhpcy51aV9zaGFyZUJ0bi5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuVGFrZVNob3RBbmRTaGFyZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnVpX2J0bkV4aXQuY2xlYXJDbGljaygpO1xuICAgICAgICB0aGlzLnVpX2J0bkV4aXQub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICAvLyB0aGlzLkhpZGUoKTtcbiAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLmNzX2FwcGx5ZXhpdHRhYmxlX3RleChudWxsKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnVpX2h1aWd1QnRuLmNsZWFyQ2xpY2soKTtcbiAgICAgICAgdGhpcy51aV9odWlndUJ0bi5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLlNob3dIaXN0b3J5X2JpZ2VuZCgpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudWlfYmFveGlhbmNlbGwuY2xlYXJDbGljaygpO1xuICAgICAgICB0aGlzLnVpX2Jhb3hpYW5jZWxsLmdldENoaWxkKFwiQnV0dG9uXCIpLm9uQ2xpY2soKCkgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLlNob3dJbnN1cmFuY2VEZXRhaWxlZCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnVpX2NsdWJCdG4uY2xlYXJDbGljaygpO1xuICAgICAgICB0aGlzLnVpX2NsdWJCdG4ub25DbGljaygoKSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMuU2hvd0NsdWJEZXRhaWxlZCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnVpX2J0bkV4aXRfaS5jbGVhckNsaWNrKCk7XG4gICAgICAgIHRoaXMudWlfYnRuRXhpdF9pLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51aV9JbnN1cmFuY2VEZXRhaWxlZFNjcm9sbC5yZW1vdmVDaGlsZHJlblRvUG9vbCgpO1xuICAgICAgICAgICAgdGhpcy51aV9JbnN1cmFuY2VEZXRhaWxlZC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudWlfYnRuRXhpdF9jLmNsZWFyQ2xpY2soKTtcbiAgICAgICAgdGhpcy51aV9idG5FeGl0X2Mub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVpX2NsdWJEZXRhaWxlZFNjcm9sbC5yZW1vdmVDaGlsZHJlblRvUG9vbCgpO1xuICAgICAgICAgICAgdGhpcy51aV9jbHViRGV0YWlsZWQudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0ckRpcGkgPSBcIuW6leeariBcIjtcbiAgICBwcml2YXRlIHN0ckphY2twb3QgPSBcIuWlluaxoDogXCI7XG4gICAgcHJpdmF0ZSBzdHJBY3Rpb25Db3VudCA9IFwi5pys5bGA5oC75omL5pWwOlwiO1xuICAgIHByaXZhdGUgc3RyVG90YWxHb2xkID0gXCLmnKzlsYDmgLvluKblhaU6XCI7XG4gICAgcHJpdmF0ZSBzdHJSb29tTmFtZSA9IFwi5oi/6Ze05ZCNOuW3nea4neaJkeWFiy1cIjtcblxuICAgIHByaXZhdGUgc3RySWQgPSBcIklEOiBcIjtcbiAgICBwcml2YXRlIHN0clRha2UgPSBcIuW4puWFpTogXCI7XG4gICAgcHJpdmF0ZSBzdHJTaG91U2h1ID0gXCLmiYvmlbA6IFwiO1xuICAgIHByaXZhdGUgc3RyU2NvcmUgPSBcIuaImOe7qTogXCI7XG5cbiAgICBwcml2YXRlIGlzVGV4YXM6IGJvb2xlYW47XG4gICAgcHVibGljIE9wZW4oZ2FtZUlkOiBudW1iZXIsIHJvb21OdW06IHN0cmluZykge1xuICAgICAgICB0aGlzLlNob3coKTtcbiAgICAgICAgdGhpcy5Jbml0SW1hZ2UoKTtcbiAgICAgICAgdGhpcy5Jbml0TGFuZ3VhZ2UoKTtcbiAgICAgICAgdGhpcy5pc1RleGFzID0gZ2FtZUlkID09IDUxO1xuICAgICAgICB0aGlzLnN0clJvb21OYW1lID0gXCLmiL/pl7TlkI06XCIgKyB0aGlzLmlzVGV4YXMgPyBcIuW+t+W3nlwiIDogXCLmia/ml4tcIiArIFwiLVwiOy8v5oi/6Ze05ZCNIOW+t+W3njrmia/ml4tcbiAgICAgICAgdGhpcy51aV90eHRSb29tTmFtZS50ZXh0ID0gKHRoaXMuc3RyUm9vbU5hbWUgKyB0aGlzLl9tb2RlbC5iciArIFwiLVwiICsgcm9vbU51bSk7XG4gICAgICAgIHRoaXMudWlfdHh0R2FtZURhdGUudGV4dCA9ICh0aGlzLl9tb2RlbC5iZWdpbnRpbWUgKyBcIiAtLS0tIFwiICsgdGhpcy5fbW9kZWwuZW5kdGltZSk7XG4gICAgICAgIC8vIHRoaXMudWlfdHh0R2FtZVRpbWUudGV4dCA9ICh0aGlzLl9tb2RlbC5kdXJhdGlvbiA8PSAzMCA/IFwiMC41aFwiIDogXCIxaFwiKTtcblxuICAgICAgICBsZXQgcG9zaXRpdmUgPSB0aGlzLl9tb2RlbC50YXggPiAwID8gXCIrXCIgOiBcIlwiO1xuICAgICAgICAvLyB0aGlzLnVpX3R4dEphY2twb3QudGV4dCA9IHBvc2l0aXZlICsgVUlVdGlsLk51bWJlclRvSW50KHRoaXMuX21vZGVsLnRheCAvIDEwMCk7XG4gICAgICAgIHRoaXMudWlfdHh0QWN0aW9uQ291bnQudGV4dCA9IFwiXCIgKyB0aGlzLl9tb2RlbC5wY291bnQ7XG4gICAgICAgIHRoaXMudWlfdHh0VG90YWxHb2xkLnRleHQgPSBcIlwiICsgVUlVdGlsLk51bWJlclRvSW50KHRoaXMuX21vZGVsLmFsbGludG9nb2xkIC8gMTAwKTtcblxuICAgICAgICB0aGlzLlNldFVzZXJJbmZvKHRoaXMudWlfdXNlckluZm8xLCB0aGlzLkdldFVzZXJJbmZvQnlUeXBlKHRoaXMuX21vZGVsLmdhaW5saXN0LCAxKSwgMCk7Ly/lnJ/osapcbiAgICAgICAgdGhpcy5TZXRVc2VySW5mbyh0aGlzLnVpX3VzZXJJbmZvMiwgdGhpcy5HZXRVc2VySW5mb0J5VHlwZSh0aGlzLl9tb2RlbC5nYWlubGlzdCwgMiksIDEpO1xuICAgICAgICB0aGlzLlNldFVzZXJJbmZvKHRoaXMudWlfdXNlckluZm8zLCB0aGlzLkdldFVzZXJJbmZvQnlUeXBlKHRoaXMuX21vZGVsLmdhaW5saXN0LCAzKSwgMik7Ly/lpKfpsbxcbiAgICAgICAgdGhpcy51aV9iYW94aWFuY2VsbC5nZXRDaGlsZChcInR4dFNjb3JlXCIpLmFzVGV4dEZpZWxkLnRleHQgPSBVSVV0aWwuZm9ybWF0TnVtYmVyMTAwKHRoaXMuX21vZGVsLkluc3VyVG90YWwpICsgXCJcIjtcbiAgICAgICAgdGhpcy5TaG93TGlzdCh0aGlzLl9tb2RlbC5nYWlubGlzdCk7XG5cbiAgICAgICAgdGhpcy51aV9jbHViQnRuLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLnVpX2Jhb3hpYW5jZWxsLmdldENoaWxkKFwiQnV0dG9uXCIpLnZpc2libGUgPSB0cnVlO1xuICAgICAgICBpZiAoIXRoaXMuX21vZGVsLmlzbmFtZ2VyKSB7XG4gICAgICAgICAgICB0aGlzLnVpX2NsdWJCdG4udmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy51aV9iYW94aWFuY2VsbC5nZXRDaGlsZChcIlRleHRcIikudGV4dCA9IFwi5L+d6ZmpXCI7XG4gICAgICAgICAgICB0aGlzLnVpX2Jhb3hpYW5jZWxsLmdldENoaWxkKFwiQnV0dG9uXCIpLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVpX0luc3VyYW5jZURldGFpbGVkU2Nyb2xsLnZpc2libGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBIaWRlKCkge1xuICAgICAgICBzdXBlci5IaWRlKCk7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgU2hvdygpIHtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHN1cGVyLlNob3coKTtcbiAgICB9XG5cbiAgICAvLzE6IOWcn+ixqiAyOiBNVlAgMyA6IOWkp+mxvFxuICAgIHB1YmxpYyBHZXRVc2VySW5mb0J5VHlwZSh0TGlzdDogVGFibGVHYWluU0RbXSwgdHlwZTogbnVtYmVyKTogVGFibGVHYWluU0Qge1xuICAgICAgICBpZiAodExpc3QgPT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxuXG4gICAgICAgIGxldCByZXN1bHQ6IFRhYmxlR2FpblNEID0gbnVsbDtcbiAgICAgICAgdExpc3QuZm9yRWFjaChpdGVtID0+IHtcblxuICAgICAgICAgICAgaWYgKHR5cGUgPT0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT0gbnVsbCB8fCByZXN1bHQuZmludG8gPCBpdGVtLmZpbnRvKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PSAyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PSBudWxsIHx8IHJlc3VsdC5nYWluIDwgaXRlbS5nYWluKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PSBudWxsIHx8IHJlc3VsdC5nYWluID4gaXRlbS5nYWluKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXG4gICAgcHVibGljIFNldFVzZXJJbmZvKHVzZXI6IGZndWkuR0NvbXBvbmVudCwgdXNlckluZm86IFRhYmxlR2FpblNELCB0dXJuVGl0bGU6IG51bWJlcikge1xuICAgICAgICB1c2VyLnZpc2libGUgPSAodXNlckluZm8gIT0gbnVsbCk7XG4gICAgICAgIGlmICh1c2VySW5mbyA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIGxldCBuYW1lVHh0ID0gdXNlci5nZXRDaGlsZChcIm5hbWVUZXh0XCIpLmFzVGV4dEZpZWxkO1xuICAgICAgICBsZXQgaGVhZEltYWdlID0gdXNlci5nZXRDaGlsZChcIlVzZXJIZWFkXCIpLmFzQ29tLmdldENoaWxkKFwiaGVhZEltYWdlXCIpLmFzTG9hZGVyO1xuXG4gICAgICAgIFVJVXRpbC5TZXRMaW1pdFR4dChuYW1lVHh0LCB1c2VySW5mby53ZWNoYXQud05hbWUsIDYpO1xuXG4gICAgICAgIFVJVXRpbC5sb2FkSW1hZ2UoaGVhZEltYWdlLCB1c2VySW5mby53ZWNoYXQud2ljb24pO1xuICAgICAgICB1c2VyLmdldENvbnRyb2xsZXIoXCJ0eXBlXCIpLnNldFNlbGVjdGVkSW5kZXgodHVyblRpdGxlKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBTaG93TGlzdCh0TGlzdDogVGFibGVHYWluU0RbXSkge1xuICAgICAgICB0aGlzLnVpX0xpc3RDb250ZW50LnJlbW92ZUNoaWxkcmVuVG9Qb29sKCk7XG4gICAgICAgIHRoaXMudWlfYmFveGlhbmNlbGwudmlzaWJsZSA9ICh0TGlzdCAhPSBudWxsICYmIHRMaXN0Lmxlbmd0aCA+IDApO1xuICAgICAgICBpZiAodExpc3QgPT0gbnVsbCB8fCB0TGlzdC5sZW5ndGggPT0gMCkgcmV0dXJuO1xuICAgICAgICB0TGlzdC5zb3J0KChpbmZvMSwgaW5mbzIpID0+IGluZm8yLmdhaW4gLSBpbmZvMS5nYWluKTtcbiAgICAgICAgbGV0IGdvID0gbnVsbDtcbiAgICAgICAgbGV0IHRlc3RHb2xkID0gdGhpcy5fbW9kZWwuYWxsaW50b2dvbGQ7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZ28gPSB0aGlzLnVpX0xpc3RDb250ZW50LmFkZEl0ZW1Gcm9tUG9vbChcInVpOi8vVGV4YXMvc2NvcmVDZWxsMlwiKS5hc0NvbTtcbiAgICAgICAgICAgIHRoaXMuU2V0Q2VsbEluZm8oZ28sIHRMaXN0W2ldLCBpICsgMSk7XG4gICAgICAgICAgICB0ZXN0R29sZCArPSB0TGlzdFtpXS5nYWluO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRlc3RHb2xkICE9IDApIHtcbiAgICAgICAgICAgIC8vRGVidWdFWC5Mb2dDKFwi5aSn57uT566X5pWw5o2u5LiN5a+577yaXCIgKyB0ZXN0R29sZCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHB1YmxpYyBTZXRDZWxsSW5mbyhzY29yZUNlbGw6IGZndWkuR0NvbXBvbmVudCwgZ2FpbkRhdGE6IFRhYmxlR2FpblNELCByYW5rSWQ6IG51bWJlcikge1xuICAgICAgICBsZXQgaGVhZEltYWdlID0gc2NvcmVDZWxsLmdldENoaWxkKFwiVXNlckhlYWRcIikuYXNDb20uZ2V0Q2hpbGQoXCJoZWFkSW1hZ2VcIikuYXNMb2FkZXI7XG4gICAgICAgIGxldCB0eHRSYW5rID0gc2NvcmVDZWxsLmdldENoaWxkKFwidHh0UmFua1wiKS5hc1RleHRGaWVsZDtcbiAgICAgICAgbGV0IHR4dFVzZXJOYW1lID0gc2NvcmVDZWxsLmdldENoaWxkKFwidHh0VXNlck5hbWVcIikuYXNUZXh0RmllbGQ7XG4gICAgICAgIGxldCB0eHRVc2VySWQgPSBzY29yZUNlbGwuZ2V0Q2hpbGQoXCJ0eHRVc2VySWRcIikuYXNUZXh0RmllbGQ7XG4gICAgICAgIGxldCB0eHRVc2VyR29sZCA9IHNjb3JlQ2VsbC5nZXRDaGlsZChcInR4dFVzZXJHb2xkXCIpLmFzVGV4dEZpZWxkO1xuICAgICAgICBsZXQgdHh0QWN0aW9uQ291bnQgPSBzY29yZUNlbGwuZ2V0Q2hpbGQoXCJ0eHRBY3Rpb25Db3VudFwiKS5hc1RleHRGaWVsZDtcbiAgICAgICAgbGV0IHR4dFNjb3JlID0gc2NvcmVDZWxsLmdldENoaWxkKFwidHh0U2NvcmVcIikuYXNUZXh0RmllbGQ7XG4gICAgICAgIGxldCB0eHRSdW5Bd2F5ID0gc2NvcmVDZWxsLmdldENoaWxkKFwidHh0UnVuQXdheVwiKS5hc1RleHRGaWVsZDtcblxuICAgICAgICB0eHRSdW5Bd2F5LnZpc2libGUgPSAoZ2FpbkRhdGEub3RoZXJNb25leSAhPSAwKTtcbiAgICAgICAgaWYgKGdhaW5EYXRhLm90aGVyTW9uZXkgPiAwKSB7XG5cbiAgICAgICAgICAgIHR4dFJ1bkF3YXkudGV4dCA9IFwi6YCD6LeR5aWW5YqxOlwiICsgKGdhaW5EYXRhLm90aGVyTW9uZXkgLyAxMDAuMCkudG9GaXhlZCgyKTsvL+mAg+i3keWlluWKsVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdHh0UnVuQXdheS50ZXh0ID0gXCLpgIPot5Hmg6nnvZo6XCIgKyAoZ2FpbkRhdGEub3RoZXJNb25leSAvIDEwMC4wKS50b0ZpeGVkKDIpOy8v6YCD6LeR5oOp572aXG4gICAgICAgIH1cblxuXG4gICAgICAgIFVJVXRpbC5sb2FkSW1hZ2UoaGVhZEltYWdlLCBnYWluRGF0YS53ZWNoYXQud2ljb24pO1xuICAgICAgICBzY29yZUNlbGwuZ2V0Q29udHJvbGxlcihcInRvcFwiKS5zZXRTZWxlY3RlZEluZGV4KHJhbmtJZCA+IDMgPyAwIDogcmFua0lkKTtcbiAgICAgICAgdHh0UmFuay50ZXh0ID0gcmFua0lkICsgXCJcIjtcbiAgICAgICAgdHh0VXNlck5hbWUudGV4dCA9IGdhaW5EYXRhLndlY2hhdC53TmFtZTtcbiAgICAgICAgdHh0VXNlcklkLnRleHQgPSBcIklEOiAgXCIgKyBnYWluRGF0YS5Vc2VySUQ7XG4gICAgICAgIHR4dFVzZXJHb2xkLnRleHQgPSBcIuW4puWFpTogIFwiICsgVUlVdGlsLmZvcm1hdE51bWJlcjEwMChnYWluRGF0YS5maW50byk7XG4gICAgICAgIHR4dEFjdGlvbkNvdW50LnRleHQgPSBnYWluRGF0YS5wY291bnQgKyBcIlwiO1xuXG4gICAgICAgIGxldCBwb3NpdGl2ZSA9IGdhaW5EYXRhLmdhaW4gPiAwID8gXCIrXCIgOiBcIlwiO1xuICAgICAgICB0eHRTY29yZS50ZXh0ID0gcG9zaXRpdmUgKyAoQmFsZW5jZUN0ci5pbnN0YW5jZS5Nb2RlbC5Jc1N1cHBlciA/IFVJVXRpbC5mb3JtYXROdW1iZXIxMDAoZ2FpbkRhdGEuZ2FpbikgOiBVSVV0aWwuZm9ybWF0TnVtYmVyMTAwKGdhaW5EYXRhLmdhaW4pKTtcbiAgICAgICAgdHh0U2NvcmUuY29sb3IgPSBnYWluRGF0YS5nYWluID49IDAgPyBuZXcgY2MuQ29sb3IoMTkzLCA3NywgNzApIDogbmV3IGNjLkNvbG9yKDE5NSwgMTM4LCA1Myk7XG4gICAgfVxuXG4gICAgcHVibGljIFRha2VTaG90QW5kU2hhcmUoKSB7XG4gICAgICAgIC8vIGxldCBmaWxlbmFtZSA9IFwiU2NyZWVuc2hvdC1cIiArIFN5c3RlbS5EYXRlVGltZS5Ob3cuVG9TdHJpbmcoXCJNTWRkSEhtbXNzXCIpO1xuICAgICAgICAvLyBTY3JlZW5zaG90TWFuYWdlci5TYXZlU2NyZWVuc2hvdChmaWxlbmFtZSwgXCJTY3JlZW5zaG90QXBwXCIsIFwianBnXCIpO1xuICAgICAgICAvLyBUaW1lSW5mb01nci5pbnN0YW5jZS5BZGRUaW1lcigxLjVGLCAoKSA9PlxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgICBpZiAoZ2FtZU9iamVjdC5hY3RpdmVTZWxmKVxuICAgICAgICAvLyAgICAge1xuICAgICAgICAvLyAgICAgICAgIHN0cmluZyBwYXRoID0gXCJcIjtcbiAgICAgICAgLy8gICAgICAgICBpZiAoQXBwbGljYXRpb24ucGxhdGZvcm0gPT0gUnVudGltZVBsYXRmb3JtLkFuZHJvaWQpXG4gICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAvLyAgICAgICAgICAgICBwYXRoID0gXCIvc2RjYXJkL1BpY3R1cmVzL1NjcmVlbnNob3RzL1wiICsgZmlsZW5hbWUgKyBcIi5qcGdcIjtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgZWxzZVxuICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgcGF0aCA9IEFwcGxpY2F0aW9uLnBlcnNpc3RlbnREYXRhUGF0aCArIFwiL1wiICsgZmlsZW5hbWUgKyBcIi5qcGdcIjtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgU2hhcmVTZGtNYW5hZ2VyLlNpbmdsZXRvbi5TaGFyZVRhYmxlQmlnRW5kKHBhdGgpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIFNob3dJbnN1cmFuY2VEZXRhaWxlZCgpIHtcbiAgICAgICAgdGhpcy51aV9JbnN1cmFuY2VEZXRhaWxlZC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51aV9jbHViY2VsbC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudWlfdXNlckNlbGwudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5fbW9kZWwuY2x1bmJpbnMgPT0gbnVsbCB8fCB0aGlzLl9tb2RlbC5jbHVuYmlucy5sZW5ndGggPT0gMCkgcmV0dXJuO1xuICAgICAgICB0aGlzLnVpX0luc3VyYW5jZURldGFpbGVkU2Nyb2xsLnJlbW92ZUNoaWxkcmVuVG9Qb29sKCk7XG4gICAgICAgIGxldCBpbmRleCA9IDE7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fbW9kZWwuY2x1bmJpbnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGxldCB0ZW1wOiBjbHViaW5mbyA9IHRoaXMuX21vZGVsLmNsdW5iaW5zW2ldO1xuICAgICAgICAgICAgbGV0IGdvOiBmZ3VpLkdDb21wb25lbnQgPSB0aGlzLnVpX0luc3VyYW5jZURldGFpbGVkU2Nyb2xsLmFkZEl0ZW0oXCJ1aTovL1RleGFzL2NsdWJjZWxsXCIpLmFzQ29tO1xuICAgICAgICAgICAgKytpbmRleDtcblxuICAgICAgICAgICAgbGV0IGNsdWJ0eHQgPSBnby5nZXRDaGlsZChcInR4dFNjb3JlXCIpLmFzVGV4dEZpZWxkO1xuICAgICAgICAgICAgY2x1YnR4dC50ZXh0ID0gdGVtcC5jbHVibmFtZTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0ZW1wLnVzZXJpbmZvcy5sZW5ndGg7ICsraikge1xuICAgICAgICAgICAgICAgIGxldCB1c2VyRGF0YTogSW5zdXJpbmZvID0gdGVtcC51c2VyaW5mb3Nbal07XG4gICAgICAgICAgICAgICAgbGV0IHVzZXJHbzogZmd1aS5HQ29tcG9uZW50ID0gdGhpcy51aV9JbnN1cmFuY2VEZXRhaWxlZFNjcm9sbC5hZGRJdGVtKFwidWk6Ly9UZXhhcy91c2VyQ2VsbFwiKS5hc0NvbTtcbiAgICAgICAgICAgICAgICArK2luZGV4O1xuXG4gICAgICAgICAgICAgICAgbGV0IGhlYWQgPSB1c2VyR28uZ2V0Q2hpbGQoXCJVc2VySGVhZFwiKS5hc0NvbS5nZXRDaGlsZChcImhlYWRJbWFnZVwiKS5hc0xvYWRlcjtcbiAgICAgICAgICAgICAgICBsZXQgd2luVHh0ID0gdXNlckdvLmdldENoaWxkKFwidHh0U2NvcmVcIikuYXNUZXh0RmllbGQ7XG4gICAgICAgICAgICAgICAgbGV0IHVzZXJOYW1ldHh0ID0gdXNlckdvLmdldENoaWxkKFwidHh0VXNlck5hbWVcIikuYXNUZXh0RmllbGQ7XG4gICAgICAgICAgICAgICAgaGVhZC52aXNpYmxlID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBVSVV0aWwubG9hZEltYWdlKGhlYWQsIHVzZXJEYXRhLmhlYWR1cmwpO1xuXG4gICAgICAgICAgICAgICAgdXNlck5hbWV0eHQudGV4dCA9IHVzZXJEYXRhLm5hbWU7XG5cbiAgICAgICAgICAgICAgICBsZXQgcG9zaXRpdmUgPSB1c2VyRGF0YS5nb2xkID4gMCA/IFwiK1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICB3aW5UeHQudGV4dCA9IHBvc2l0aXZlICsgVUlVdGlsLmZvcm1hdE51bWJlcjEwMCh1c2VyRGF0YS5nb2xkKTtcbiAgICAgICAgICAgICAgICB3aW5UeHQuY29sb3IgPSB1c2VyRGF0YS5nb2xkID4gMCA/IG5ldyBjYy5Db2xvcigxOTMsIDc3LCA3MCkgOiBuZXcgY2MuQ29sb3IoMTk1LCAxMzgsIDUzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgU2hvd0NsdWJEZXRhaWxlZCgpIHtcbiAgICAgICAgdGhpcy51aV9jbHViRGV0YWlsZWQudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLl9tb2RlbC5jbHViV2wgPT0gbnVsbCB8fCB0aGlzLl9tb2RlbC5jbHViV2wubGVuZ3RoID09IDApIHJldHVybjtcbiAgICAgICAgdGhpcy51aV9jbHViRGV0YWlsZWRTY3JvbGwucmVtb3ZlQ2hpbGRyZW5Ub1Bvb2woKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9tb2RlbC5jbHViV2wubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGxldCBnbyA9IHRoaXMudWlfY2x1YkRldGFpbGVkU2Nyb2xsLmFkZEl0ZW1Gcm9tUG9vbCgpLmFzQ29tO1xuICAgICAgICAgICAgbGV0IGNsdWJ0eHQgPSBnby5nZXRDaGlsZChcInR4dGNsdWJOYW1lXCIpLmFzVGV4dEZpZWxkO1xuICAgICAgICAgICAgbGV0IHdpbnR4dCA9IGdvLmdldENoaWxkKFwidHh0U2NvcmVcIikuYXNUZXh0RmllbGQ7XG5cbiAgICAgICAgICAgIGNsdWJ0eHQudGV4dCA9IHRoaXMuX21vZGVsLmNsdWJXbFtpXS5jbHVibmFtZTtcbiAgICAgICAgICAgIHdpbnR4dC50ZXh0ID0gdGhpcy5fbW9kZWwuY2x1YldsW2ldLmdvbGQgKyBcIlwiO1xuXG4gICAgICAgICAgICBsZXQgcG9zaXRpdmUgPSB0aGlzLl9tb2RlbC5jbHViV2xbaV0uZ29sZCA+IDAgPyBcIitcIiA6IFwiXCI7XG4gICAgICAgICAgICB3aW50eHQudGV4dCA9IHBvc2l0aXZlICsgKEJhbGVuY2VDdHIuaW5zdGFuY2UuTW9kZWwuSXNTdXBwZXIgPyBVSVV0aWwuZm9ybWF0TnVtYmVyMTAwKHRoaXMuX21vZGVsLmNsdWJXbFtpXS5nb2xkKSA6IFVJVXRpbC5mb3JtYXROdW1iZXIxMDAodGhpcy5fbW9kZWwuY2x1YldsW2ldLmdvbGQpKTtcbiAgICAgICAgICAgIHdpbnR4dC5jb2xvciA9IHRoaXMuX21vZGVsLmNsdWJXbFtpXS5nb2xkID49IDAgPyBuZXcgY2MuQ29sb3IoMTkzLCA3NywgNzApIDogbmV3IGNjLkNvbG9yKDE5NSwgMTM4LCA1Myk7XG4gICAgICAgIH1cbiAgICB9XG59Il19