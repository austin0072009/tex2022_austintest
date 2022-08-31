"use strict";
cc._RF.push(module, 'c5cacjzr7tOF7DULMfVYij0', 'JackpotComp');
// Games/texas/script/View/JackpotComp.ts

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
var HttpHelpEx_1 = require("../../../../Script/Common/Managers/HttpHelpEx");
var UIUtil_1 = require("../../../../Script/Common/UIUtil");
var BaseFrameNative_1 = require("../../../../Script/BaseFrameNative");
var F_TexasViewCtr_1 = require("../Contrl/F_TexasViewCtr");
var TexasLanguage_1 = require("../Model/TexasLanguage");
var JackpotComp = /** @class */ (function (_super) {
    __extends(JackpotComp, _super);
    function JackpotComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btnClose_jackpot = null;
        _this.ui_panels = null;
        // public ui_allJackpot:fgui.GComponent = null;
        _this.ui_rewardList = null;
        _this.ui_curJackpot = null;
        // public ui_txtTitleCurJackpot:fgui.GTextField = null;
        _this.ui_txtObtain = null;
        _this.ui_scoreCell = null;
        _this.ui_scoreList = null;
        _this.ui_titleText = null;
        _this.ui_jczlLabel = null;
        _this.ui_jczlLabel_h = null;
        _this.ui_jcLabel = null;
        _this.ui_jcLabel_h = null;
        _this.ui_jcjlLabel = null;
        _this.ui_jcjlLabel_h = null;
        _this.ui_shedingTitle = null;
        _this.ui_type1Per = null;
        _this.ui_type2Per = null;
        _this.ui_type3Per = null;
        _this.ui_txtDesc = null;
        _this.ui_curJcjlTxt = null;
        _this.ui_panel1 = null;
        _this.ui_panel2 = null;
        _this.ui_panel3 = null;
        _this.pageIndex = 0;
        /// <summary>
        /// 初始化
        /// </summary>
        _this.onLoadEnd = false;
        _this.userPos = 0;
        return _this;
    }
    JackpotComp.prototype.OnLoadCompleted = function () {
        this.onLoadEnd = true;
        if (this.mystart)
            this.MyStartEx();
    };
    JackpotComp.prototype.MyStart = function () {
        this.mystart = true;
        if (this.onLoadEnd)
            this.MyStartEx();
    };
    JackpotComp.prototype.AutoSetGoProperty = function () { };
    JackpotComp.prototype.MyStartEx = function () {
        _super.prototype.AutoSetGoProperty.call(this);
        this.InitLanguage();
        this.Init();
        this.InitEvents();
        this.Show();
    };
    JackpotComp.prototype.InitLanguage = function () {
        // this.ui_titleText.text = "奖池";
        this.ui_jczlLabel.text = "奖池总览";
        this.ui_jczlLabel_h.text = "奖池总览";
        this.ui_jcLabel.text = "奖池";
        this.ui_jcLabel_h.text = "奖池";
        this.ui_jcjlLabel.text = "奖池记录";
        this.ui_jcjlLabel_h.text = "奖池记录";
        this.ui_shedingTitle.text = "各级别奖池奖励设定";
        this.ui_type1Per.text = "获奖比例";
        this.ui_type2Per.text = "获奖比例";
        this.ui_type3Per.text = "获奖比例";
        this.ui_txtDesc.text = "计入数额默认为1大盲(1大盲封顶)";
        this.ui_curJcjlTxt.text = "当前奖池奖励记录";
    };
    JackpotComp.prototype.Init = function () {
        this.ui_scoreCell.visible = false;
        this.base2pot = [];
        this.plog = [];
        this.pageToggles = [];
    };
    JackpotComp.prototype.InitEvents = function () {
        var _this = this;
        var _loop_1 = function () {
            var t = this_1.getChild("btntype" + i).asButton;
            if (t != null) {
                this_1.pageToggles.push(t);
                var tempIndex_1 = i;
                t.onClick(function () {
                    _this.SetGroupIsOn(t, !_this.GetGroupIsOn(t));
                    _this.SetToggle(t, _this.GetGroupIsOn(t));
                    if (_this.GetGroupIsOn(t)) {
                        _this.SelectPage(tempIndex_1);
                    }
                    else {
                    }
                }, false);
                this_1.SetGroupIsOn(t, i == 0);
                this_1.SetToggle(t, this_1.GetGroupIsOn(t));
            }
        };
        var this_1 = this;
        for (var i = 1; i < 4; i++) {
            _loop_1();
        }
        this.ui_btnClose_jackpot.onClick(function () {
            _this.Hide();
        });
    };
    JackpotComp.prototype.SetToggle = function (t, isOn) {
    };
    JackpotComp.prototype.Show = function () {
        this.node.active = true;
        _super.prototype.Show.call(this);
        this.TogglePage(0);
    };
    JackpotComp.prototype.Hide = function () {
        _super.prototype.Hide.call(this);
        this.logList = null;
        this.base2pot = [];
        this.plog = [];
        this.max = null;
        this.node.active = false;
    };
    JackpotComp.prototype.TogglePage = function (pageIndex) {
        this.SetGroupIsOn(this.pageToggles[pageIndex], true);
    };
    JackpotComp.prototype.SelectPage = function (pageIndex) {
        this.pageIndex = pageIndex;
        for (var i = 1; i < 4; i++) {
            var panel = this.getChild("panel" + i);
            panel.visible = (i == pageIndex);
        }
        this.UpdatePage(pageIndex);
    };
    JackpotComp.prototype.UpdatePage = function (pageIndex) {
        if (pageIndex == 1) {
            this.UpdateAllJackpot();
        }
        else if (pageIndex == 2) {
            this.UpdateCurJackpot();
        }
        else {
            this.UpdateScorePanel();
        }
    };
    JackpotComp.prototype.GetAllJackpot = function () {
        var allJackpot = 0;
        if (this.base2pot != null) {
            this.base2pot.forEach(function (item) {
                allJackpot += UIUtil_1.UIUtil.NumberToInt(item.val);
            });
        }
        return allJackpot;
    };
    JackpotComp.prototype.GetJackpot = function (dipi) {
        var value = 0;
        if (this.base2pot != null) {
            this.base2pot.forEach(function (item) {
                if (item.pos == dipi) {
                    value = UIUtil_1.UIUtil.NumberToInt(item.val);
                }
            });
        }
        return value;
    };
    JackpotComp.prototype.UpdateAllJackpot = function () {
        this.SetJackpot(this.ui_panel1, this.GetAllJackpot());
        this.ui_rewardList.removeChildrenToPool();
        if (this.base2pot == null) {
            return;
        }
        for (var i = 0; i < this.base2pot.length; i++) {
            var cell = this.ui_rewardList.addItemFromPool().asCom;
            var txt = cell.getChild("Text").asTextField;
            var txtMango = cell.getChild("txtMango").asTextField;
            txt.text = UIUtil_1.UIUtil.formatNumber100(this.base2pot[i].pos) + (F_TexasViewCtr_1.default.instance.Model.gameid == 52 ? "皮" : "/" + UIUtil_1.UIUtil.formatNumber100(this.base2pot[i].pos * 2)); //皮
            // this.SetJackpot(cell, UIUtil.NumberToInt(this.base2pot[i].val));
            txtMango.text = UIUtil_1.UIUtil.NumberToInt(this.base2pot[i].val / 100) + "";
        }
    };
    JackpotComp.prototype.UpdateCurJackpot = function () {
        var model = F_TexasViewCtr_1.default.instance.Model;
        // this.ui_txtTitleCurJackpot.text ="底池"+ (model.brate / 100) +"奖池总金额";
        this.SetJackpot(this.ui_panel2, this.GetJackpot(model.brate));
    };
    JackpotComp.prototype.UpdateScorePanel = function () {
        if (this.max != null && this.max._n != null) {
            this.ui_txtObtain.text = this.max._n;
            this.SetScoreCell(this.ui_scoreCell, this.max);
        }
        if (this.plog != null) {
            this.ui_scoreList.removeChildrenToPool();
            var go = null;
            for (var i = 0; i < 10 && i < this.plog.length; i++) {
                go = this.ui_scoreList.addItemFromPool();
                this.SetScoreCell(go.asCom, this.plog[i]);
            }
        }
    };
    JackpotComp.prototype.SetScoreCell = function (cell, sd) {
        cell.visible = true;
        var txtName = cell.getChild("txtName").asTextField;
        var txtType = cell.getChild("txtType").asTextField;
        var txtScore = cell.getChild("txtScore").asTextField;
        var txtTime = cell.getChild("txtTime").asTextField;
        txtName.text = sd._n;
        txtType.text = sd._jt == 1 ? TexasLanguage_1.TexasLanguage.getLanguageById(1315) : (sd._jt == 2 ? TexasLanguage_1.TexasLanguage.getLanguageById(1316) : TexasLanguage_1.TexasLanguage.getLanguageById(1317)); //皇家同花顺 同花顺 四条
        txtTime.text = sd._time;
        txtScore.text = UIUtil_1.UIUtil.formatNumber100(sd._gold) + "";
    };
    //设置奖池
    JackpotComp.prototype.SetJackpot = function (jackpotGroup, mongoOfTable) {
        mongoOfTable = UIUtil_1.UIUtil.NumberToInt(mongoOfTable / 100);
        var strNum = mongoOfTable.toString();
        var txt = null;
        for (var i = 1; i <= 8; i++) {
            txt = jackpotGroup.asCom.getChild("txtMango" + i).asTextField;
            var num = (strNum.length - i) >= 0 ? strNum.charAt(strNum.length - i) : "0";
            txt.text = num == null || num == "" ? "0" : num;
        }
    };
    JackpotComp.prototype.UpdateLogData = function (data) {
    };
    JackpotComp.prototype.UpdateJackpotData = function (_base2pot) {
        this.base2pot = _base2pot;
        // this.max = _max;
        // this.plog = _plog;
        this.HttpGetMaxAndPlog();
    };
    JackpotComp.prototype.HttpGetMaxAndPlog = function () {
        var _this = this;
        var self = this;
        var url = BaseFrameNative_1.BaseFrameNative.serverlistItem.apiAdress + "/api/Gamelog/GetJackpotLog";
        var params = {
            gameid: 51
        };
        HttpHelpEx_1.default.instance.post(url, params).then(function (res) {
            console.log("---GetAgentReceivelog---", res);
            if (res.code == 1) {
                _this.max = JSON.parse(res.data.max);
                _this.plog = JSON.parse(res.data.plog);
                _this.pageIndex = _this.pageIndex == 0 ? 1 : _this.pageIndex;
                _this.UpdatePage(_this.pageIndex);
            }
            else {
                F_TexasViewCtr_1.default.instance.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(180032)); //获取数据失败
            }
        }).catch(function (err) {
            console.log("---err---", err);
            F_TexasViewCtr_1.default.instance.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(180032)); //获取数据失败
        });
    };
    JackpotComp.prototype.SetGroupIsOn = function (obj, isOn) {
        for (var i = 0; i < this.pageToggles.length; i++) {
            var t = this.pageToggles[i];
            if (t != null) {
                t.asCom.getController("isOn").setSelectedIndex(0);
            }
        }
        obj.asCom.getController("isOn").setSelectedIndex(isOn ? 1 : 0);
    };
    JackpotComp.prototype.GetGroupIsOn = function (button) {
        var isOn = button.asCom.getController("isOn").selectedIndex;
        if (isOn == null) {
            button.asCom.getController("isOn").setSelectedIndex(0);
            isOn = 0;
        }
        return isOn == 0 ? false : true;
    };
    return JackpotComp;
}(ViewBase_1.default));
exports.default = JackpotComp;

cc._RF.pop();