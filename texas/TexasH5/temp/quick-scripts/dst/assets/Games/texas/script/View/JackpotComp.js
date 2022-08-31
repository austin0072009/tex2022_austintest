
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/texas/script/View/JackpotComp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXHRleGFzXFxzY3JpcHRcXFZpZXdcXEphY2twb3RDb21wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGtFQUE2RDtBQUM3RCw0RUFBdUU7QUFDdkUsMkRBQTBEO0FBQzFELHNFQUFxRTtBQUNyRSwyREFBc0Q7QUFDdEQsd0RBQXVEO0FBR3ZEO0lBQXlDLCtCQUFRO0lBQWpEO1FBQUEscUVBMlNDO1FBMVNVLHlCQUFtQixHQUFpQixJQUFJLENBQUM7UUFDekMsZUFBUyxHQUFvQixJQUFJLENBQUM7UUFHekMsK0NBQStDO1FBQ3hDLG1CQUFhLEdBQWUsSUFBSSxDQUFDO1FBQ2pDLG1CQUFhLEdBQW9CLElBQUksQ0FBQztRQUM3Qyx1REFBdUQ7UUFDaEQsa0JBQVksR0FBb0IsSUFBSSxDQUFDO1FBQ3JDLGtCQUFZLEdBQW9CLElBQUksQ0FBQztRQUNyQyxrQkFBWSxHQUFlLElBQUksQ0FBQztRQUVoQyxrQkFBWSxHQUFvQixJQUFJLENBQUM7UUFDckMsa0JBQVksR0FBb0IsSUFBSSxDQUFDO1FBQ3JDLG9CQUFjLEdBQW9CLElBQUksQ0FBQztRQUN2QyxnQkFBVSxHQUFvQixJQUFJLENBQUM7UUFDbkMsa0JBQVksR0FBb0IsSUFBSSxDQUFDO1FBQ3JDLGtCQUFZLEdBQW9CLElBQUksQ0FBQztRQUNyQyxvQkFBYyxHQUFvQixJQUFJLENBQUM7UUFDdkMscUJBQWUsR0FBb0IsSUFBSSxDQUFDO1FBQ3hDLGlCQUFXLEdBQW9CLElBQUksQ0FBQztRQUNwQyxpQkFBVyxHQUFvQixJQUFJLENBQUM7UUFDcEMsaUJBQVcsR0FBb0IsSUFBSSxDQUFDO1FBQ3BDLGdCQUFVLEdBQW9CLElBQUksQ0FBQztRQUNuQyxtQkFBYSxHQUFvQixJQUFJLENBQUM7UUFDdEMsZUFBUyxHQUFvQixJQUFJLENBQUM7UUFDbEMsZUFBUyxHQUFvQixJQUFJLENBQUM7UUFDbEMsZUFBUyxHQUFvQixJ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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Qb3NWYWxTRCB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL2NzX2Jhc2VcIjtcbmltcG9ydCBWaWV3QmFzZSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9WaWV3QmFzZVwiO1xuaW1wb3J0IEh0dHBIZWxwRXggZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9Db21tb24vTWFuYWdlcnMvSHR0cEhlbHBFeFwiO1xuaW1wb3J0IHsgVUlVdGlsIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9Db21tb24vVUlVdGlsXCI7XG5pbXBvcnQgeyBCYXNlRnJhbWVOYXRpdmUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZU5hdGl2ZVwiO1xuaW1wb3J0IEZfVGV4YXNWaWV3Q3RyIGZyb20gXCIuLi9Db250cmwvRl9UZXhhc1ZpZXdDdHJcIjtcbmltcG9ydCB7IFRleGFzTGFuZ3VhZ2UgfSBmcm9tIFwiLi4vTW9kZWwvVGV4YXNMYW5ndWFnZVwiO1xuaW1wb3J0IHsgc2NfdGphY2twb3RMb2csIFBvdFVzZXJMb2cgfSBmcm9tIFwiLi4vTW9kZWwvVGV4YXNOZXREYXRhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEphY2twb3RDb21wIGV4dGVuZHMgVmlld0Jhc2Uge1xuICAgIHB1YmxpYyB1aV9idG5DbG9zZV9qYWNrcG90OiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuICAgIHB1YmxpYyB1aV9wYW5lbHM6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XG4gICAgcHJpdmF0ZSBsb2dMaXN0OiBzY190amFja3BvdExvZztcblxuICAgIC8vIHB1YmxpYyB1aV9hbGxKYWNrcG90OmZndWkuR0NvbXBvbmVudCA9IG51bGw7XG4gICAgcHVibGljIHVpX3Jld2FyZExpc3Q6IGZndWkuR0xpc3QgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9jdXJKYWNrcG90OiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIC8vIHB1YmxpYyB1aV90eHRUaXRsZUN1ckphY2twb3Q6Zmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfdHh0T2J0YWluOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9zY29yZUNlbGw6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XG4gICAgcHVibGljIHVpX3Njb3JlTGlzdDogZmd1aS5HTGlzdCA9IG51bGw7XG5cbiAgICBwdWJsaWMgdWlfdGl0bGVUZXh0OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9qY3psTGFiZWw6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX2pjemxMYWJlbF9oOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9qY0xhYmVsOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9qY0xhYmVsX2g6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX2pjamxMYWJlbDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfamNqbExhYmVsX2g6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX3NoZWRpbmdUaXRsZTogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfdHlwZTFQZXI6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX3R5cGUyUGVyOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV90eXBlM1BlcjogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfdHh0RGVzYzogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfY3VySmNqbFR4dDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfcGFuZWwxOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9wYW5lbDI6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XG4gICAgcHVibGljIHVpX3BhbmVsMzogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcblxuICAgIHB1YmxpYyBwYWdlSW5kZXggPSAwO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8gNuS4quW6leearuWvueW6lOeahOWlluaxoCBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBiYXNlMnBvdDogQ29tbW9uUG9zVmFsU0RbXTtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOacgOWkp+i1ouWutlxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIG1heDogUG90VXNlckxvZztcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOacgOi/keaXpeW/l1xuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHBsb2c6IFBvdFVzZXJMb2dbXTtcbiAgICBwcml2YXRlIHBhZ2VUb2dnbGVzOiBmZ3VpLkdCdXR0b25bXTtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWIneWni+WMllxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHJpdmF0ZSBvbkxvYWRFbmQgPSBmYWxzZTtcbiAgICBPbkxvYWRDb21wbGV0ZWQoKSB7XG4gICAgICAgIHRoaXMub25Mb2FkRW5kID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMubXlzdGFydCkgdGhpcy5NeVN0YXJ0RXgoKTtcbiAgICB9XG4gICAgcHVibGljIE15U3RhcnQoKSB7XG4gICAgICAgIHRoaXMubXlzdGFydCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLm9uTG9hZEVuZCkgdGhpcy5NeVN0YXJ0RXgoKTtcbiAgICB9XG4gICAgQXV0b1NldEdvUHJvcGVydHkoKSB7IH1cblxuICAgIHB1YmxpYyBNeVN0YXJ0RXgoKSB7XG4gICAgICAgIHN1cGVyLkF1dG9TZXRHb1Byb3BlcnR5KCk7XG4gICAgICAgIHRoaXMuSW5pdExhbmd1YWdlKCk7XG4gICAgICAgIHRoaXMuSW5pdCgpO1xuICAgICAgICB0aGlzLkluaXRFdmVudHMoKTtcbiAgICAgICAgdGhpcy5TaG93KCk7XG4gICAgfVxuICAgIHB1YmxpYyBJbml0TGFuZ3VhZ2UoKSB7XG4gICAgICAgIC8vIHRoaXMudWlfdGl0bGVUZXh0LnRleHQgPSBcIuWlluaxoFwiO1xuICAgICAgICB0aGlzLnVpX2pjemxMYWJlbC50ZXh0ID0gXCLlpZbmsaDmgLvop4hcIjtcbiAgICAgICAgdGhpcy51aV9qY3psTGFiZWxfaC50ZXh0ID0gXCLlpZbmsaDmgLvop4hcIjtcbiAgICAgICAgdGhpcy51aV9qY0xhYmVsLnRleHQgPSBcIuWlluaxoFwiO1xuICAgICAgICB0aGlzLnVpX2pjTGFiZWxfaC50ZXh0ID0gXCLlpZbmsaBcIjtcbiAgICAgICAgdGhpcy51aV9qY2psTGFiZWwudGV4dCA9IFwi5aWW5rGg6K6w5b2VXCI7XG4gICAgICAgIHRoaXMudWlfamNqbExhYmVsX2gudGV4dCA9IFwi5aWW5rGg6K6w5b2VXCI7XG4gICAgICAgIHRoaXMudWlfc2hlZGluZ1RpdGxlLnRleHQgPSBcIuWQhOe6p+WIq+WlluaxoOWlluWKseiuvuWumlwiO1xuICAgICAgICB0aGlzLnVpX3R5cGUxUGVyLnRleHQgPSBcIuiOt+WlluavlOS+i1wiO1xuICAgICAgICB0aGlzLnVpX3R5cGUyUGVyLnRleHQgPSBcIuiOt+WlluavlOS+i1wiO1xuICAgICAgICB0aGlzLnVpX3R5cGUzUGVyLnRleHQgPSBcIuiOt+WlluavlOS+i1wiO1xuICAgICAgICB0aGlzLnVpX3R4dERlc2MudGV4dCA9IFwi6K6h5YWl5pWw6aKd6buY6K6k5Li6MeWkp+ebsigx5aSn55uy5bCB6aG2KVwiO1xuICAgICAgICB0aGlzLnVpX2N1ckpjamxUeHQudGV4dCA9IFwi5b2T5YmN5aWW5rGg5aWW5Yqx6K6w5b2VXCI7XG4gICAgfVxuICAgIHB1YmxpYyBJbml0KCkge1xuICAgICAgICB0aGlzLnVpX3Njb3JlQ2VsbC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYmFzZTJwb3QgPSBbXTtcbiAgICAgICAgdGhpcy5wbG9nID0gW107XG4gICAgICAgIHRoaXMucGFnZVRvZ2dsZXMgPSBbXTtcbiAgICB9XG5cbiAgICBwcml2YXRlIEluaXRFdmVudHMoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdCA9IHRoaXMuZ2V0Q2hpbGQoXCJidG50eXBlXCIgKyBpKS5hc0J1dHRvbjtcbiAgICAgICAgICAgIGlmICh0ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VUb2dnbGVzLnB1c2godCk7XG4gICAgICAgICAgICAgICAgbGV0IHRlbXBJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgdC5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TZXRHcm91cElzT24odCwgIXRoaXMuR2V0R3JvdXBJc09uKHQpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TZXRUb2dnbGUodCwgdGhpcy5HZXRHcm91cElzT24odCkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5HZXRHcm91cElzT24odCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuU2VsZWN0UGFnZSh0ZW1wSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5TZXRHcm91cElzT24odCwgaSA9PSAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLlNldFRvZ2dsZSh0LCB0aGlzLkdldEdyb3VwSXNPbih0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVpX2J0bkNsb3NlX2phY2twb3Qub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLkhpZGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIFNldFRvZ2dsZSh0OiBmZ3VpLkdCdXR0b24sIGlzT246IGJvb2xlYW4pIHtcblxuICAgIH1cblxuICAgIHByaXZhdGUgdXNlclBvcyA9IDA7XG5cbiAgICBwdWJsaWMgU2hvdygpIHtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHN1cGVyLlNob3coKTtcbiAgICAgICAgdGhpcy5Ub2dnbGVQYWdlKDApO1xuICAgIH1cblxuICAgIHB1YmxpYyBIaWRlKCkge1xuICAgICAgICBzdXBlci5IaWRlKCk7XG4gICAgICAgIHRoaXMubG9nTGlzdCA9IG51bGw7XG4gICAgICAgIHRoaXMuYmFzZTJwb3QgPSBbXTtcbiAgICAgICAgdGhpcy5wbG9nID0gW107XG4gICAgICAgIHRoaXMubWF4ID0gbnVsbDtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBwdWJsaWMgVG9nZ2xlUGFnZShwYWdlSW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLlNldEdyb3VwSXNPbih0aGlzLnBhZ2VUb2dnbGVzW3BhZ2VJbmRleF0sIHRydWUpO1xuICAgIH1cbiAgICBwdWJsaWMgU2VsZWN0UGFnZShwYWdlSW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLnBhZ2VJbmRleCA9IHBhZ2VJbmRleDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwYW5lbDogZmd1aS5HQ29tcG9uZW50ID0gdGhpcy5nZXRDaGlsZChcInBhbmVsXCIgKyBpKTtcbiAgICAgICAgICAgIHBhbmVsLnZpc2libGUgPSAoaSA9PSBwYWdlSW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5VcGRhdGVQYWdlKHBhZ2VJbmRleCk7XG4gICAgfVxuXG4gICAgcHVibGljIFVwZGF0ZVBhZ2UocGFnZUluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHBhZ2VJbmRleCA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLlVwZGF0ZUFsbEphY2twb3QoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwYWdlSW5kZXggPT0gMikge1xuICAgICAgICAgICAgdGhpcy5VcGRhdGVDdXJKYWNrcG90KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLlVwZGF0ZVNjb3JlUGFuZWwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBHZXRBbGxKYWNrcG90KCk6IG51bWJlciB7XG4gICAgICAgIGxldCBhbGxKYWNrcG90ID0gMDtcbiAgICAgICAgaWYgKHRoaXMuYmFzZTJwb3QgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5iYXNlMnBvdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGFsbEphY2twb3QgKz0gVUlVdGlsLk51bWJlclRvSW50KGl0ZW0udmFsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFsbEphY2twb3Q7XG4gICAgfVxuXG4gICAgcHVibGljIEdldEphY2twb3QoZGlwaTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IHZhbHVlID0gMDtcbiAgICAgICAgaWYgKHRoaXMuYmFzZTJwb3QgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5iYXNlMnBvdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLnBvcyA9PSBkaXBpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gVUlVdGlsLk51bWJlclRvSW50KGl0ZW0udmFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIFVwZGF0ZUFsbEphY2twb3QoKSB7XG4gICAgICAgIHRoaXMuU2V0SmFja3BvdCh0aGlzLnVpX3BhbmVsMSwgdGhpcy5HZXRBbGxKYWNrcG90KCkpO1xuICAgICAgICB0aGlzLnVpX3Jld2FyZExpc3QucmVtb3ZlQ2hpbGRyZW5Ub1Bvb2woKTtcbiAgICAgICAgaWYgKHRoaXMuYmFzZTJwb3QgPT0gbnVsbCkgeyByZXR1cm47IH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYmFzZTJwb3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjZWxsID0gdGhpcy51aV9yZXdhcmRMaXN0LmFkZEl0ZW1Gcm9tUG9vbCgpLmFzQ29tO1xuICAgICAgICAgICAgbGV0IHR4dCA9IGNlbGwuZ2V0Q2hpbGQoXCJUZXh0XCIpLmFzVGV4dEZpZWxkO1xuICAgICAgICAgICAgbGV0IHR4dE1hbmdvID0gY2VsbC5nZXRDaGlsZChcInR4dE1hbmdvXCIpLmFzVGV4dEZpZWxkO1xuICAgICAgICAgICAgdHh0LnRleHQgPSBVSVV0aWwuZm9ybWF0TnVtYmVyMTAwKHRoaXMuYmFzZTJwb3RbaV0ucG9zKSArIChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5nYW1laWQgPT0gNTIgPyBcIuearlwiIDogXCIvXCIgKyBVSVV0aWwuZm9ybWF0TnVtYmVyMTAwKHRoaXMuYmFzZTJwb3RbaV0ucG9zICogMikpOy8v55quXG4gICAgICAgICAgICAvLyB0aGlzLlNldEphY2twb3QoY2VsbCwgVUlVdGlsLk51bWJlclRvSW50KHRoaXMuYmFzZTJwb3RbaV0udmFsKSk7XG4gICAgICAgICAgICB0eHRNYW5nby50ZXh0ID0gVUlVdGlsLk51bWJlclRvSW50KHRoaXMuYmFzZTJwb3RbaV0udmFsIC8gMTAwKSArIFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgVXBkYXRlQ3VySmFja3BvdCgpIHtcbiAgICAgICAgbGV0IG1vZGVsID0gRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWw7XG4gICAgICAgIC8vIHRoaXMudWlfdHh0VGl0bGVDdXJKYWNrcG90LnRleHQgPVwi5bqV5rGgXCIrIChtb2RlbC5icmF0ZSAvIDEwMCkgK1wi5aWW5rGg5oC76YeR6aKdXCI7XG4gICAgICAgIHRoaXMuU2V0SmFja3BvdCh0aGlzLnVpX3BhbmVsMiwgdGhpcy5HZXRKYWNrcG90KG1vZGVsLmJyYXRlKSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgVXBkYXRlU2NvcmVQYW5lbCgpIHtcbiAgICAgICAgaWYgKHRoaXMubWF4ICE9IG51bGwgJiYgdGhpcy5tYXguX24gIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy51aV90eHRPYnRhaW4udGV4dCA9IHRoaXMubWF4Ll9uO1xuICAgICAgICAgICAgdGhpcy5TZXRTY29yZUNlbGwodGhpcy51aV9zY29yZUNlbGwsIHRoaXMubWF4KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKHRoaXMucGxvZyAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnVpX3Njb3JlTGlzdC5yZW1vdmVDaGlsZHJlblRvUG9vbCgpO1xuICAgICAgICAgICAgbGV0IGdvOiBmZ3VpLkdPYmplY3QgPSBudWxsO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMCAmJiBpIDwgdGhpcy5wbG9nLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZ28gPSB0aGlzLnVpX3Njb3JlTGlzdC5hZGRJdGVtRnJvbVBvb2woKTtcbiAgICAgICAgICAgICAgICB0aGlzLlNldFNjb3JlQ2VsbChnby5hc0NvbSwgdGhpcy5wbG9nW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIFNldFNjb3JlQ2VsbChjZWxsOiBmZ3VpLkdDb21wb25lbnQsIHNkOiBQb3RVc2VyTG9nKSB7XG4gICAgICAgIGNlbGwudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIGxldCB0eHROYW1lID0gY2VsbC5nZXRDaGlsZChcInR4dE5hbWVcIikuYXNUZXh0RmllbGQ7XG4gICAgICAgIGxldCB0eHRUeXBlID0gY2VsbC5nZXRDaGlsZChcInR4dFR5cGVcIikuYXNUZXh0RmllbGQ7XG4gICAgICAgIGxldCB0eHRTY29yZSA9IGNlbGwuZ2V0Q2hpbGQoXCJ0eHRTY29yZVwiKS5hc1RleHRGaWVsZDtcbiAgICAgICAgbGV0IHR4dFRpbWUgPSBjZWxsLmdldENoaWxkKFwidHh0VGltZVwiKS5hc1RleHRGaWVsZDtcbiAgICAgICAgdHh0TmFtZS50ZXh0ID0gc2QuX247XG4gICAgICAgIHR4dFR5cGUudGV4dCA9IHNkLl9qdCA9PSAxID8gVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTMxNSkgOiAoc2QuX2p0ID09IDIgPyBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxMzE2KSA6IFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDEzMTcpKTsvL+eah+WutuWQjOiKsemhuiDlkIzoirHpobog5Zub5p2hXG5cbiAgICAgICAgdHh0VGltZS50ZXh0ID0gc2QuX3RpbWU7XG4gICAgICAgIHR4dFNjb3JlLnRleHQgPSBVSVV0aWwuZm9ybWF0TnVtYmVyMTAwKHNkLl9nb2xkKSArIFwiXCI7XG4gICAgfVxuXG4gICAgLy/orr7nva7lpZbmsaBcbiAgICBwdWJsaWMgU2V0SmFja3BvdChqYWNrcG90R3JvdXA6IGZndWkuR09iamVjdCwgbW9uZ29PZlRhYmxlOiBudW1iZXIpIHtcbiAgICAgICAgbW9uZ29PZlRhYmxlID0gVUlVdGlsLk51bWJlclRvSW50KG1vbmdvT2ZUYWJsZSAvIDEwMCk7XG4gICAgICAgIGxldCBzdHJOdW0gPSBtb25nb09mVGFibGUudG9TdHJpbmcoKTtcbiAgICAgICAgbGV0IHR4dCA9IG51bGw7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IDg7IGkrKykge1xuICAgICAgICAgICAgdHh0ID0gamFja3BvdEdyb3VwLmFzQ29tLmdldENoaWxkKFwidHh0TWFuZ29cIiArIGkpLmFzVGV4dEZpZWxkO1xuICAgICAgICAgICAgbGV0IG51bSA9IChzdHJOdW0ubGVuZ3RoIC0gaSkgPj0gMCA/IHN0ck51bS5jaGFyQXQoc3RyTnVtLmxlbmd0aCAtIGkpIDogXCIwXCI7XG4gICAgICAgICAgICB0eHQudGV4dCA9IG51bSA9PSBudWxsIHx8IG51bSA9PSBcIlwiID8gXCIwXCIgOiBudW07XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBVcGRhdGVMb2dEYXRhKGRhdGE6IHNjX3RqYWNrcG90TG9nKSB7XG4gICAgfVxuXG4gICAgcHVibGljIFVwZGF0ZUphY2twb3REYXRhKF9iYXNlMnBvdDogQ29tbW9uUG9zVmFsU0RbXSkgLy8sIF9tYXg6UG90VXNlckxvZywgX3Bsb2c6UG90VXNlckxvZ1tdXG4gICAge1xuICAgICAgICB0aGlzLmJhc2UycG90ID0gX2Jhc2UycG90O1xuICAgICAgICAvLyB0aGlzLm1heCA9IF9tYXg7XG4gICAgICAgIC8vIHRoaXMucGxvZyA9IF9wbG9nO1xuICAgICAgICB0aGlzLkh0dHBHZXRNYXhBbmRQbG9nKCk7XG4gICAgfVxuXG4gICAgSHR0cEdldE1heEFuZFBsb2coKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IHVybCA9IEJhc2VGcmFtZU5hdGl2ZS5zZXJ2ZXJsaXN0SXRlbS5hcGlBZHJlc3MgKyBcIi9hcGkvR2FtZWxvZy9HZXRKYWNrcG90TG9nXCI7XG4gICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICBnYW1laWQ6IDUxXG4gICAgICAgIH1cbiAgICAgICAgSHR0cEhlbHBFeC5pbnN0YW5jZS5wb3N0KHVybCwgcGFyYW1zKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tR2V0QWdlbnRSZWNlaXZlbG9nLS0tXCIsIHJlcyk7XG4gICAgICAgICAgICBpZiAocmVzLmNvZGUgPT0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWF4ID0gSlNPTi5wYXJzZShyZXMuZGF0YS5tYXgpIGFzIFBvdFVzZXJMb2c7XG4gICAgICAgICAgICAgICAgdGhpcy5wbG9nID0gSlNPTi5wYXJzZShyZXMuZGF0YS5wbG9nKSBhcyBQb3RVc2VyTG9nW107XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlSW5kZXggPSB0aGlzLnBhZ2VJbmRleCA9PSAwID8gMSA6IHRoaXMucGFnZUluZGV4O1xuICAgICAgICAgICAgICAgIHRoaXMuVXBkYXRlUGFnZSh0aGlzLnBhZ2VJbmRleCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLnZpZXcudGlwVmlldy5TaG93VGlwTGFiZWwoVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTgwMDMyKSk7Ly/ojrflj5bmlbDmja7lpLHotKVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS1lcnItLS1cIiwgZXJyKVxuICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2Uudmlldy50aXBWaWV3LlNob3dUaXBMYWJlbChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxODAwMzIpKTsvL+iOt+WPluaVsOaNruWksei0pVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHByaXZhdGUgU2V0R3JvdXBJc09uKG9iajogZmd1aS5HT2JqZWN0LCBpc09uOiBib29sZWFuKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wYWdlVG9nZ2xlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHQgPSB0aGlzLnBhZ2VUb2dnbGVzW2ldO1xuICAgICAgICAgICAgaWYgKHQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHQuYXNDb20uZ2V0Q29udHJvbGxlcihcImlzT25cIikuc2V0U2VsZWN0ZWRJbmRleCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBvYmouYXNDb20uZ2V0Q29udHJvbGxlcihcImlzT25cIikuc2V0U2VsZWN0ZWRJbmRleChpc09uID8gMSA6IDApO1xuICAgIH1cblxuICAgIHByaXZhdGUgR2V0R3JvdXBJc09uKGJ1dHRvbjogZmd1aS5HT2JqZWN0KTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBpc09uID0gYnV0dG9uLmFzQ29tLmdldENvbnRyb2xsZXIoXCJpc09uXCIpLnNlbGVjdGVkSW5kZXg7XG4gICAgICAgIGlmIChpc09uID09IG51bGwpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5hc0NvbS5nZXRDb250cm9sbGVyKFwiaXNPblwiKS5zZXRTZWxlY3RlZEluZGV4KDApO1xuICAgICAgICAgICAgaXNPbiA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzT24gPT0gMCA/IGZhbHNlIDogdHJ1ZTtcbiAgICB9XG5cbn0iXX0=