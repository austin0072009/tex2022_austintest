
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/Community/CommunityView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '784a4BfqqpOH4PwyjWfm4S/', 'CommunityView');
// GameHall/script/Lobby/Community/CommunityView.ts

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
var LoginViewCtr_1 = require("../../Login/LoginViewCtr");
var LobbyViewCtr_1 = require("../LobbyViewCtr");
var CExtractRecord_1 = require("./CExtractRecord");
var NativeMethod_1 = require("../../NativeMethod");
/**
 * @description 社區
 */
var CommunityView = /** @class */ (function (_super) {
    __extends(CommunityView, _super);
    function CommunityView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btn_communityBreak = null; //返回
        _this.ui_btn_service = null; //客服
        _this.ui_btn_extractRecord = null;
        _this.ui_btn_joinCommunitty = null; //加入
        _this.ui_inputCommNum = null; //加入社区ID输入框
        _this.ui_btn_search = null; //社区成员搜索按钮
        _this.ui_inputIdOrAccent = null; //社区成员输入框
        _this.ui_btn_down = null; //下拉框
        _this.ui_btn_commission = null; //领取
        _this.ui_extractCommission = null; //领取二次确认框
        _this.ui_btn_extractqx = null;
        _this.ui_btn_extractqd = null;
        _this.ui_Authorization = null; //代理级别设置
        _this.ui_btn_sqPanelqx = null;
        _this.ui_btn_sqPanelsq = null;
        _this.ui_btn_agent1 = null;
        _this.ui_btn_agent2 = null;
        _this.ui_btn_agent3 = null;
        _this.ui_1_Level = null;
        _this.ui_2_Level = null;
        _this.ui_3_Level = null;
        _this.cextractRecord = null;
        _this.gameConfig = [
            { name: "全部游戲", gameid: 0 },
            { name: "德州撲克", gameid: 51 },
            { name: "德州牛仔", gameid: 104 },
            { name: "宙斯", gameid: 254 },
            { name: "九綫拉王", gameid: 92 },
            { name: "水果瑪麗", gameid: 91 },
            { name: "財神過年", gameid: 258 },
            { name: "火牛", gameid: 4096 },
            { name: "龍虎", gameid: 21 },
            { name: "火之女王", gameid: 54 },
            { name: "忍者", gameid: 201 }
        ];
        _this.nowAgentLevel = 0;
        _this.agentLevel = 0;
        _this.agentPercent = 0;
        _this.agentPercentList = [60, 12, 8];
        _this.agentUserID = 0;
        _this.isSetAgentLevelSuccess = false;
        _this.uiLevelPos = [];
        /**基金記錄 */
        _this.ui_btn_fundlog = null;
        /**转入 */
        _this.ui_btn_into = null;
        /**转出 */
        _this.ui_btn_rollout = null;
        /**详细查询 */
        _this.ui_btn_detailedquery = null;
        _this.ui_intoFund = null; //转入确认框
        _this.ui_intoGold = null;
        _this.ui_outFund = null; //转出确认框
        _this.ui_outGold = null;
        _this.ui_agentIntroduced = null; //社区联系方式
        _this.ui_unionContact = null; //联盟联系方式
        _this.ui_btn_shequkefu = null; // 社区客服
        return _this;
    }
    Object.defineProperty(CommunityView.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CommunityView.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CommunityView.prototype, "componentName", {
        get: function () {
            return "Community";
        },
        enumerable: false,
        configurable: true
    });
    CommunityView.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.visible = false;
    };
    CommunityView.prototype.allChildCreated = function () {
        _super.prototype.allChildCreated.call(this);
    };
    CommunityView.prototype.OnLoadCompleted = function () {
        this.uiLevelPos.push(new cc.Vec3(this.ui_1_Level.x, this.ui_1_Level.y, 0));
        this.uiLevelPos.push(new cc.Vec3(this.ui_2_Level.x, this.ui_2_Level.y, 0));
        this.uiLevelPos.push(new cc.Vec3(this.ui_3_Level.x, this.ui_3_Level.y, 0));
        this.getChild("n121").visible = false;
        this.ui_extractCommission.visible = false;
        this.ui_Authorization.visible = false;
        this.ui_intoFund.visible = false;
        this.ui_outFund.visible = false;
        this.typeController = this.fguiComponent.getController("type");
        this.typeController.onChanged(this.stateChanged, this);
        this.typeController.setSelectedIndex(1);
        this.addTouchCallback();
        this.Show();
    };
    CommunityView.prototype.addTouchCallback = function () {
        var _this = this;
        //关闭
        this.ui_btn_communityBreak.onClick(function () {
            AudioManager_1.AudioManager.Singleton.play('CommunityView', "button");
            _this.Hide();
        });
        // 基金记录
        this.ui_btn_fundlog.onClick(function () {
            AudioManager_1.AudioManager.Singleton.play('CommunityView', "button");
            if (_this.cextractRecord) {
                _this.cextractRecord.Show();
            }
            else {
                _this.cextractRecord = _this.addFguiComponent(CExtractRecord_1.default);
            }
        });
        /**详细查询 按钮 需要跳转到浏览器打开网页 */
        this.ui_btn_detailedquery.onClick(function () {
            AudioManager_1.AudioManager.Singleton.play('CommunityView', "button");
            var url = BaseFrameNative_1.BaseFrameNative.serverList.agentsysyUrl;
            if (url && url != "") {
                cc.sys.openURL(url);
                // LobbyViewCtr.instance.view.openWebsite.call(LobbyViewCtr.instance.view, url);
            }
            else {
                CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("请联系客服！");
            }
        });
        //客服
        this.ui_btn_service.onClick(function () {
            AudioManager_1.AudioManager.Singleton.play('CommunityView', "button");
            UIUtil_1.UIUtil.kefuFunction(LobbyViewCtr_1.default.instance.view.openWebsite.bind(LobbyViewCtr_1.default.instance.view));
        });
        this.ui_btn_shequkefu.onClick(function () {
            AudioManager_1.AudioManager.Singleton.play('CommunityView', "button");
            UIUtil_1.UIUtil.kefuFunction(LobbyViewCtr_1.default.instance.view.openWebsite.bind(LobbyViewCtr_1.default.instance.view));
        });
        //加入按钮
        this.ui_btn_joinCommunitty.onClick(function () {
            AudioManager_1.AudioManager.Singleton.play('CommunityView', "button");
            var id = _this.ui_inputCommNum.text;
            if (id == "") {
                CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("請輸入正確的社區號");
            }
            else {
                LobbyViewCtr_1.default.instance.cs_apply_club(Number(id), "");
            }
        });
        //社区成员搜索按钮
        this.ui_btn_search.onClick(function () {
            AudioManager_1.AudioManager.Singleton.play('CommunityView', "button");
            var searchText = _this.ui_inputIdOrAccent.text;
            _this.initCommunityMembers(searchText);
        });
        //下拉框
        this.ui_btn_down.node.on(fgui.Event.STATUS_CHANGED, function () {
            AudioManager_1.AudioManager.Singleton.play('CommunityView', "button");
            console.log(_this.gameConfig[_this.ui_btn_down.selectedIndex]);
            var list = _this.gameConfig[_this.ui_btn_down.selectedIndex];
            _this.getCommunityContribution(list);
        }, this);
        //领取
        this.ui_btn_commission.onClick(function () {
            // AudioManager.Singleton.play('CommunityView', "button");
            // let gold: number = LobbyViewCtr.instance.Model.ageninfo.GoldC;
            // if (gold <= 0) {
            //     CommonCtr.instance.view.ShowTipLabel("没有可以领取的佣金");
            //     return;
            // }
            // this.ui_extractCommission.getChild("extractGold").asTextField.text = UIUtil.formatNumber100(gold) + "";
            // this.ui_extractCommission.visible = true;
        });
        this.ui_btn_extractqx.onClick(function () {
            AudioManager_1.AudioManager.Singleton.play('CommunityView', "button");
            _this.ui_extractCommission.visible = false;
        });
        this.ui_btn_extractqd.onClick(function () {
            AudioManager_1.AudioManager.Singleton.play('CommunityView', "button");
            var gold = LobbyViewCtr_1.default.instance.Model.ageninfo.GoldC;
            var cidx = LoginViewCtr_1.LoginViewCtr.instance.Model.cidx;
            // LobbyViewCtr.instance.cs_getcommision(gold, cidx);
            // 改为领取基金
            LobbyViewCtr_1.default.instance.cs_fundchange_club(cidx, 2, gold);
        });
        //代理级别设置
        this.ui_btn_sqPanelqx.onClick(function () {
            AudioManager_1.AudioManager.Singleton.play('CommunityView', "button");
            _this.ui_Authorization.visible = false;
        });
        this.ui_btn_sqPanelsq.onClick(function () {
            AudioManager_1.AudioManager.Singleton.play('CommunityView', "button");
            if (_this.nowAgentLevel == _this.agentLevel) {
                CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("代理级别未改变");
            }
            else {
                var idx = LoginViewCtr_1.LoginViewCtr.instance.Model.cidx;
                LobbyViewCtr_1.default.instance.cs_setagent_gm(idx, _this.agentUserID, _this.agentPercent);
            }
        });
        this.ui_btn_agent1.onClick(function () {
            AudioManager_1.AudioManager.Singleton.play('CommunityView', "button");
            _this.agentLevel = 1;
            _this.setAgentLevelSelect();
        });
        this.ui_btn_agent2.onClick(function () {
            AudioManager_1.AudioManager.Singleton.play('CommunityView', "button");
            _this.agentLevel = 2;
            _this.setAgentLevelSelect();
        });
        this.ui_btn_agent3.onClick(function () {
            AudioManager_1.AudioManager.Singleton.play('CommunityView', "button");
            _this.agentLevel = 3;
            _this.setAgentLevelSelect();
        });
        //社区详情
        // this.fguiComponent.getChild("n58").asButton.onClick(() => {
        //     AudioManager.Singleton.play('CommunityView', "button");
        //     this.setControllerProperty("type", 1);
        //     this.initCommunityDetails();
        // })
        // //社区成员
        // this.fguiComponent.getChild("n59").asButton.onClick(() => {
        //     AudioManager.Singleton.play('CommunityView', "button");
        //     this.setControllerProperty("type", 2);
        //     this.initCommunityMembers();
        // })
        // //社区贡献
        // this.fguiComponent.getChild("n57").asButton.onClick(() => {
        //     AudioManager.Singleton.play('CommunityView', "button");
        //     this.setControllerProperty("type", 3);
        //     let com = this.fguiComponent.getChild("n101").asCom;
        //     let list = com.getChild("contributionList").asList;
        //     list.removeChildrenToPool();
        //     this.getCommunityContribution();
        // })
        // //社区奖励说明
        // this.fguiComponent.getChild("n60").asButton.onClick(() => {
        //     AudioManager.Singleton.play('CommunityView', "button");
        //     // this.setControllerProperty("type", 4);
        //     this.initCommunityRewardIntroduce();
        // })
        //转出
        this.ui_btn_rollout.onClick(function () {
            AudioManager_1.AudioManager.Singleton.play('CommunityView', "button");
            _this.ui_outGold.text = "";
            var gold = LobbyViewCtr_1.default.instance.Model.ageninfo.GoldC;
            if (gold <= 0) {
                CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("沒有可以領取的基金");
                return;
            }
            _this.ui_outFund.getChild("balanceText").asTextField.text = "餘額：" + UIUtil_1.UIUtil.formatNumber100(gold);
            _this.ui_outFund.visible = true;
        });
        this.ui_outFund.getChild("btn_outqx").asButton.onClick(function () {
            AudioManager_1.AudioManager.Singleton.play('CommunityView', "button");
            _this.ui_outFund.visible = false;
        });
        this.ui_outFund.getChild("btn_outqd").asButton.onClick(function () {
            AudioManager_1.AudioManager.Singleton.play('CommunityView', "button");
            if (_this.ui_outGold.text == "") {
                CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("請輸入金額");
                return;
            }
            if (!UIUtil_1.UIUtil.isNumber(_this.ui_outGold.text)) {
                CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("請輸入數字");
                return;
            }
            var gold = Number(_this.ui_outGold.text);
            var yue = LobbyViewCtr_1.default.instance.Model.ageninfo.GoldC;
            if (Number(gold) * 100 > Number(yue)) {
                CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("可轉出基金不足");
                return;
            }
            var cidx = LoginViewCtr_1.LoginViewCtr.instance.Model.cidx;
            LobbyViewCtr_1.default.instance.cs_fundchange_club(cidx, 2, gold * 100);
        });
        this.ui_outGold.on(fgui.Event.TEXT_CHANGE, this.changedOutText, this);
        //转入
        this.ui_btn_into.onClick(function () {
            AudioManager_1.AudioManager.Singleton.play('CommunityView', "button");
            _this.ui_intoGold.text = "";
            //更新显示余额
            var yue = AppConst_1.AppConst.mPlayerModel.gold;
            console.log("AppConst.mPlayerModel == ", AppConst_1.AppConst.mPlayerModel);
            _this.ui_intoFund.getChild("balanceText").asTextField.text = "餘額：" + UIUtil_1.UIUtil.formatNumber100(yue);
            _this.ui_intoFund.visible = true;
        });
        this.ui_intoFund.getChild("btn_intoqx").asButton.onClick(function () {
            AudioManager_1.AudioManager.Singleton.play('CommunityView', "button");
            _this.ui_intoFund.visible = false;
        });
        this.ui_intoFund.getChild("btn_intoqd").asButton.onClick(function () {
            AudioManager_1.AudioManager.Singleton.play('CommunityView', "button");
            if (_this.ui_intoGold.text == "") {
                CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("請輸入金額");
                return;
            }
            if (!UIUtil_1.UIUtil.isNumber(_this.ui_intoGold.text)) {
                CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("請輸入數字");
                return;
            }
            var gold = Number(_this.ui_intoGold.text);
            var yue = AppConst_1.AppConst.mPlayerModel.gold;
            if (Number(gold) * 100 > Number(yue)) {
                CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("可轉入餘額不足" + gold);
                return;
            }
            var cidx = LoginViewCtr_1.LoginViewCtr.instance.Model.cidx;
            LobbyViewCtr_1.default.instance.cs_fundchange_club(cidx, 1, gold * 100);
        });
        this.ui_intoGold.on(fgui.Event.TEXT_CHANGE, this.changedText, this);
    };
    CommunityView.prototype.changedText = function () {
        var text = this.ui_intoGold.text;
        if (UIUtil_1.UIUtil.isNumber(text)) {
            var yue = AppConst_1.AppConst.mPlayerModel.gold;
            if (Number(text) > UIUtil_1.UIUtil.formatNumber(yue)) {
                CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("超過最大可轉入金額");
            }
        }
        else {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("請輸入數字");
        }
    };
    CommunityView.prototype.changedOutText = function () {
        var text = this.ui_outGold.text;
        if (UIUtil_1.UIUtil.isNumber(text)) {
            var yue = LobbyViewCtr_1.default.instance.Model.ageninfo.GoldC;
            if (Number(text) > UIUtil_1.UIUtil.formatNumber(yue)) {
                CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("超過最大可轉出金額");
            }
        }
        else {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("請輸入數字");
        }
    };
    CommunityView.prototype.stateChanged = function () {
        var index = this.typeController.selectedIndex;
        switch (index) {
            case 1: //社区详情
                AudioManager_1.AudioManager.Singleton.play('CommunityView', "button");
                // this.initCommunityDetails();
                this.agentInfoShow();
                break;
            case 2: //社区成员
                AudioManager_1.AudioManager.Singleton.play('CommunityView', "button");
                this.initCommunityMembers();
                break;
            case 3: //社区贡献
                AudioManager_1.AudioManager.Singleton.play('CommunityView', "button");
                var com = this.fguiComponent.getChild("n101").asCom;
                var list = com.getChild("contributionList").asList;
                list.removeChildrenToPool();
                var slist = this.gameConfig[this.ui_btn_down.selectedIndex];
                this.getCommunityContribution(slist);
                break;
            case 4: //社区奖励说明
                AudioManager_1.AudioManager.Singleton.play('CommunityView', "button");
                this.initCommunityRewardIntroduce();
                break;
            case 5: //联盟联系方式
                AudioManager_1.AudioManager.Singleton.play('CommunityView', "button");
                this.initUnionContact(null, this.ui_unionContact, 1);
                this.getUnionContact(1);
                break;
        }
    };
    CommunityView.prototype.Show = function () {
        _super.prototype.Show.call(this);
        // new
        // this.setControllerProperty("c1", 2);
        // this.setControllerProperty("type", 1);
        // this.initCommunityDetails();
        this.agentInfoShow();
    };
    // 社区详情显示
    CommunityView.prototype.agentInfoShow = function () {
        // 判断是否显示社区详情
        if (LoginViewCtr_1.LoginViewCtr.instance.Model.cidx == 0) {
            this.setControllerProperty("c1", 0);
            this.setControllerProperty("type", 0);
        }
        else {
            if (this.isSetAgentLevelSuccess) {
                this.isSetAgentLevelSuccess = false;
                this.setControllerProperty("type", 2);
                this.initCommunityMembers();
            }
            else {
                // this.setControllerProperty("c1", 1);
                // this.setControllerProperty("type", 1);
                // // this.initCommunityDetails();
                // 代理等级为1才显示转入基金等 不为1显示上级联系方式 =1表示是创建者
                this.setControllerProperty("type", 1);
                if (LobbyViewCtr_1.default.instance.Model.ageninfo.clubuserid == AppConst_1.AppConst.mPlayerModel.userid) {
                    this.setControllerProperty("c1", 1);
                    this.fguiComponent.getChild("n61").asCom.visible = true;
                    this.ui_agentIntroduced.visible = false;
                    this.initCommunityDetails();
                }
                else {
                    this.setControllerProperty("c1", 2);
                    this.initUnionContact(null, this.ui_agentIntroduced, 2);
                    this.fguiComponent.getChild("n61").asCom.visible = false;
                    this.ui_agentIntroduced.visible = true;
                    this.getUnionContact(2);
                }
            }
        }
    };
    // 获取联盟联系方式
    CommunityView.prototype.getUnionContact = function (m_type) {
        var self = this;
        //名称
        var orgName = "";
        if (m_type == 1) {
            var clubNameText = self.ui_unionContact.getChild("clubName");
            orgName = "联盟：" + LobbyViewCtr_1.default.instance.Model.ageninfo.allidname;
            clubNameText.text = orgName;
        }
        else if (m_type == 2) {
            var clubNameText = self.ui_agentIntroduced.getChild("clubName");
            orgName = "社区：" + LobbyViewCtr_1.default.instance.Model.ageninfo.clubname;
            clubNameText.text = orgName;
        }
        var url = BaseFrameNative_1.BaseFrameNative.serverlistItem.apiAdress + "/api/Gamelog/GetContactInfo" + ("?clubid=" + LoginViewCtr_1.LoginViewCtr.instance.Model.cidx);
        HttpHelpEx_1.default.instance.get(url)
            .then(function (res) {
            console.log("---GetContactInfo---", res);
            if (res.code == 1) {
                if (m_type == 1) {
                    self.initUnionContact(res.data, self.ui_unionContact, m_type);
                }
                else if (m_type == 2) {
                    self.initUnionContact(res.data, self.ui_agentIntroduced, m_type);
                }
            }
            else {
                CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("获取联系方式失败");
            }
        });
    };
    CommunityView.prototype.initUnionContact = function (data, m_node, m_type) {
        var _this = this;
        var contactText1 = m_node.getChild("contactText1").asTextField;
        contactText1.visible = false;
        var contactText2 = m_node.getChild("contactText2").asTextField;
        contactText2.visible = false;
        var contactText3 = m_node.getChild("contactText3").asTextField;
        contactText3.visible = false;
        var downloadText1 = m_node.getChild("downloadText1").asTextField;
        downloadText1.visible = false;
        var downloadText2 = m_node.getChild("downloadText2").asTextField;
        downloadText2.visible = false;
        var downloadText3 = m_node.getChild("downloadText3").asTextField;
        downloadText3.visible = false;
        var btn_copy1 = m_node.getChild("btn_copy1").asButton;
        btn_copy1.visible = false;
        var btn_copy2 = m_node.getChild("btn_copy2").asButton;
        btn_copy2.visible = false;
        var btn_copy3 = m_node.getChild("btn_copy3").asButton;
        btn_copy3.visible = false;
        if (data) {
            var list = [];
            for (var index = 0; index < data.length; index++) {
                var element = data[index];
                if (element.role == m_type && element.no && element.no != "") {
                    list.push(element);
                }
            }
            var _loop_1 = function (index) {
                var num = index + 1;
                var element = list[index];
                if (num <= 3) {
                    var contactText = m_node.getChild("contactText" + num).asTextField;
                    contactText.visible = true;
                    if (element.name && element.name != "") {
                        contactText.text = element.name + "：" + element.no;
                    }
                    else {
                        contactText.text = element.no;
                    }
                    if (element.url && element.url != "") {
                        var downloadText = m_node.getChild("downloadText" + num).asTextField;
                        downloadText.visible = true;
                        downloadText.text = "地址：" + element.url;
                        var btn_copy = m_node.getChild("btn_copy" + num).asButton;
                        btn_copy.visible = true;
                        btn_copy.clearClick();
                        btn_copy.onClick(function () {
                            AudioManager_1.AudioManager.Singleton.play('CommunityView', "button");
                            var download_url = element.url;
                            if (CC_JSB) {
                                NativeMethod_1.default.copyTextString(download_url);
                                CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("复制成功");
                            }
                            else {
                                var bool = _this.commandCopy(download_url);
                                var str = bool ? "复制成功" : "复制失败";
                                CommonCtr_1.CommonCtr.instance.view.ShowTipLabel(str);
                            }
                        });
                    }
                }
            };
            for (var index = 0; index < list.length; index++) {
                _loop_1(index);
            }
        }
        // let vxTitle = this.ui_unionContact.getChild("n106").asCom;
        // let vxText = this.ui_unionContact.getChild("vxText").asTextField;
        // let tlTitle = this.ui_unionContact.getChild("n104").asCom;
        // let tlText = this.ui_unionContact.getChild("tlText").asTextField;
        // let downloadTitle = this.ui_unionContact.getChild("n108").asCom;
        // let linkTextBtn = this.ui_unionContact.getChild("downloadText").asButton;
        // let downloadText = linkTextBtn.getChild("linkText").asTextField;
        // if (data && data.allinfo[0]) {
        //     let info = data.allinfo[0];
        //     if (info.weixin && info.weixin != "") {
        //         vxTitle.visible = true;
        //         vxText.visible = true;
        //         vxText.text = info.weixin;
        //     }
        //     if (info.nature && info.nature != "") {
        //         tlTitle.visible = true;
        //         tlText.visible = true;
        //         tlText.text = info.nature;
        //     }
        //     if (info.downloadUrl && info.downloadUrl != "") {
        //         downloadTitle.visible = true;
        //         linkTextBtn.visible = true;
        //         downloadText.text = info.downloadUrl;
        //         linkTextBtn.clearClick();
        //         linkTextBtn.onClick(() => {
        //             AudioManager.Singleton.play('CommunityView', "button");
        //             console.log("info.downloadUrl === ", info.downloadUrl);
        //             self.jumpOpenURL(info.downloadUrl);
        //         })
        //     }
        // } else {
        //     vxTitle.visible = false;
        //     vxText.visible = false;
        //     tlTitle.visible = false;
        //     tlText.visible = false;
        //     downloadTitle.visible = false;
        //     linkTextBtn.visible = false;
        // }
    };
    CommunityView.prototype.jumpOpenURL = function (url) {
        cc.sys.openURL(url);
    };
    /**复制 */
    CommunityView.prototype.commandCopy = function (input) {
        var el = document.createElement('textarea');
        el.value = input;
        // Prevent keyboard from showing on mobile
        el.setAttribute('readonly', '');
        //el.style.contain = 'strict';
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        el.style.fontSize = '12pt'; // Prevent zooming on iOS
        var selection = getSelection();
        var originalRange = false;
        if (selection.rangeCount > 0) {
            originalRange = selection.getRangeAt(0);
        }
        document.body.appendChild(el);
        el.select();
        // Explicit selection workaround for iOS
        el.selectionStart = 0;
        el.selectionEnd = input.length;
        var success = false;
        try {
            success = document.execCommand('copy');
        }
        catch (err) { }
        document.body.removeChild(el);
        if (originalRange) {
            selection.removeAllRanges();
            selection.addRange(originalRange);
        }
        return success;
    };
    ;
    // 加载社区详情
    CommunityView.prototype.initCommunityDetails = function () {
        console.log("---initCommunityDetails---");
        var com = this.fguiComponent.getChild("n61").asCom;
        var data = LobbyViewCtr_1.default.instance.Model.ageninfo;
        com.getChild("myId").asTextField.text = data.Code + ""; //id
        com.getChild("subordinateNum").asTextField.text = data.calist.length + ""; //下級玩家
        com.getChild("newlyAdded").asTextField.text = data.taddnum + ""; //今日新增
        com.getChild("todayActive").asTextField.text = data.tactive + ""; //今日活躍
        com.getChild("Cumulative").asTextField.text = UIUtil_1.UIUtil.formatNumber100(data.income).toFixed(2) + ""; //纍計佣金
        com.getChild("todaycommission").asTextField.text = UIUtil_1.UIUtil.formatNumber100(data.tCommision).toFixed(2) + ""; //今日佣金
        com.getChild("extract").asTextField.text = UIUtil_1.UIUtil.formatNumber100(data.GoldHistoryC).toFixed(2) + ""; //纍計提取
        com.getChild("canmentionExtract").asTextField.text = UIUtil_1.UIUtil.formatNumber(data.GoldC) + ""; //可提佣金
        this.fguiComponent.getChild("n61").asCom.getChild("n64").asTextField.text = data.clubname; //社区名字
    };
    // 加载社区成员
    CommunityView.prototype.initCommunityMembers = function (searchID) {
        if (searchID === void 0) { searchID = ""; }
        console.log("---initCommunityMembers---");
        var com = this.fguiComponent.getChild("n89").asCom;
        var list = com.getChild("membersList").asList;
        list.removeChildrenToPool();
        var calist = LobbyViewCtr_1.default.instance.Model.ageninfo.calist;
        if (searchID != "") {
            var isFind = false;
            for (var index = 0; index < calist.length; index++) {
                var element = calist[index];
                if (element.UserID + "" == searchID) {
                    calist = [element];
                    isFind = true;
                    continue;
                }
            }
            if (!isFind) {
                CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("未找到此用户");
            }
        }
        for (var index = 0; index < calist.length; index++) {
            var item = list.addItemFromPool().asCom;
            var data = calist[index];
            item.getChild("id").asTextField.text = data.UserID + "";
            item.getChild("name").asTextField.text = data.name + "";
            var agentL = this.getAgentLevelByRate(data.rate);
            //  item.getChild("type").asTextField.text = agentL + "级";
            // item.getChild("type").visible = data.isagent >= 1 || agentL > 0;
            item.getChild("time").asTextField.text = data.regtime + "";
            // let changeBtn = item.getChild("btn_Edit").asButton;
            // let isShow = data.lv - LobbyViewCtr.instance.Model.ageninfo.lv == 1;
            // if (LobbyViewCtr.instance.Model.ageninfo.lv == 3 || !isShow) {
            //     changeBtn.node.active = false;
            // } else {
            //     changeBtn.clearClick();
            //     changeBtn.onClick(() => {
            //         this.agentUserID = data.UserID;
            //         this.agentLevel = agentL;
            //         this.nowAgentLevel = agentL;
            //         this.setAgentLevelSelect();
            //         this.ui_Authorization.visible = true;
            //     })
            // }
        }
    };
    // 通过rate获取代理级别
    CommunityView.prototype.getAgentLevelByRate = function (rate) {
        if (rate <= 0) {
            return 0;
        }
        else {
            for (var index = 0; index < this.agentPercentList.length; index++) {
                var agentPercent = this.agentPercentList[index];
                if (agentPercent == rate) {
                    return index + 1;
                }
            }
            return 0;
        }
    };
    // 通过http拉取贡献信息
    CommunityView.prototype.getCommunityContribution = function (m_list) {
        var self = this;
        var url = BaseFrameNative_1.BaseFrameNative.serverlistItem.apiAdress + "/api/Gamelog/GetGameAgentLog";
        // let url = "http://129.204.109.218:82/api/Gamelog/GetGameAgentLog";
        var gameid = "";
        if (m_list)
            gameid = m_list.gameid;
        var params = {
            userid: LoginViewCtr_1.LoginViewCtr.instance.Model.mPlayerModel.userid,
            gameid: gameid,
            clubid: LoginViewCtr_1.LoginViewCtr.instance.Model.cidx
        };
        HttpHelpEx_1.default.instance.post(url, params).then(function (res) {
            console.log("---GetGameAgentLog---", res);
            if (res.code == 1) {
                self.initCommunityContribution(res.data);
            }
            else {
                CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("获取日志失败");
            }
        }).catch(function (err) {
            console.log("---err---", err);
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("获取日志失败");
        });
    };
    // 加载社区贡献
    CommunityView.prototype.initCommunityContribution = function (m_list) {
        console.log("---initCommunityContribution---");
        // this.ui_btn_down.items = this.getGameTypeList("name");
        var com = this.fguiComponent.getChild("n101").asCom;
        var list = com.getChild("contributionList").asList;
        list.removeChildrenToPool();
        for (var index = 0; index < m_list.length; index++) {
            var item = list.addItemFromPool().asCom;
            var data = m_list[index];
            item.getChild("name").asTextField.text = data.wechatName + "";
            item.getChild("id").asTextField.text = data.userId + "";
            item.getChild("time").asTextField.text = data.createDate + "";
            item.getChild("gold").asTextField.text = Math.floor(data.actionCoin / 100).toFixed(2) + "";
            item.getChild("gameName").asTextField.text = data.name + "";
        }
    };
    // 根据keyName获取游戏列表
    CommunityView.prototype.getGameTypeList = function (m_type) {
        var temp = [];
        for (var index = 0; index < this.gameConfig.length; index++) {
            var element = this.gameConfig[index];
            temp.push(element[m_type]);
        }
        return temp;
    };
    // 加载社区奖励说明
    CommunityView.prototype.initCommunityRewardIntroduce = function () {
        console.log("---initCommunityRewardIntroduce---");
        var data = LobbyViewCtr_1.default.instance.Model.ageninfo;
        var textTextField = this.fguiComponent.getChild("n118").asCom.getChild("n101").asTextField;
        textTextField.text = "";
        textTextField.text = data.reward; //社区奖励说明
    };
    // 申请加入社区成功
    CommunityView.prototype.applyClubSuccess = function () {
        // this.Hide();
        this.setControllerProperty("c1", 1);
        this.setControllerProperty("type", 1);
        this.initCommunityDetails();
    };
    //领取佣金成功
    CommunityView.prototype.getcommisionSuccess = function () {
        this.ui_extractCommission.visible = false;
        LobbyViewCtr_1.default.instance.cs_getagentinfo(LoginViewCtr_1.LoginViewCtr.instance.Model.cidx);
    };
    //设置代理级别选中状态
    CommunityView.prototype.setAgentLevelSelect = function () {
        console.log("LobbyViewCtr.instance.Model.ageninfo.lv == ", LobbyViewCtr_1.default.instance.Model.ageninfo.lv);
        if (LobbyViewCtr_1.default.instance.Model.ageninfo.lv == 1) {
            this.ui_1_Level.visible = false;
            this.ui_2_Level.visible = true;
            this.ui_2_Level.setPosition(this.uiLevelPos[0].x, this.uiLevelPos[0].y);
            this.ui_3_Level.visible = true;
            this.ui_3_Level.setPosition(this.uiLevelPos[1].x, this.uiLevelPos[1].y);
        }
        else if (LobbyViewCtr_1.default.instance.Model.ageninfo.lv == 2) {
            this.ui_1_Level.visible = false;
            this.ui_2_Level.visible = false;
            this.ui_3_Level.visible = true;
            this.ui_3_Level.setPosition(this.uiLevelPos[0].x, this.uiLevelPos[0].y);
        }
        if (this.agentLevel != 0) {
            this.agentPercent = this.agentPercentList[this.agentLevel - 1];
        }
        this.ui_btn_agent1.selected = this.agentLevel == 1;
        this.ui_btn_agent2.selected = this.agentLevel == 2;
        this.ui_btn_agent3.selected = this.agentLevel == 3;
    };
    //设置代理级别成功 
    CommunityView.prototype.setAgentLevelSuccess = function () {
        this.ui_Authorization.visible = false;
        this.isSetAgentLevelSuccess = true;
        LobbyViewCtr_1.default.instance.cs_getagentinfo(LoginViewCtr_1.LoginViewCtr.instance.Model.cidx);
    };
    // 转出成功
    CommunityView.prototype.outFundchangeClub = function () {
        this.ui_intoFund.visible = false;
        this.ui_outFund.visible = false;
        this.ui_intoGold.text = "";
        this.ui_outGold.text = "";
        this.ui_extractCommission.visible = false;
        LobbyViewCtr_1.default.instance.cs_getagentinfo(LoginViewCtr_1.LoginViewCtr.instance.Model.cidx);
    };
    return CommunityView;
}(ViewBase_1.default));
exports.default = CommunityView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXENvbW11bml0eVxcQ29tbXVuaXR5Vmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwRUFBeUU7QUFDekUsb0VBQW1FO0FBQ25FLGtFQUE2RDtBQUM3RCw0RUFBdUU7QUFDdkUsMkRBQTBEO0FBQzFELDJGQUEwRjtBQUMxRixzRUFBcUU7QUFDckUseURBQXdEO0FBQ3hELGdEQUEyQztBQUMzQyxtREFBOEM7QUFDOUMsbURBQThDO0FBRTlDOztHQUVHO0FBQ0g7SUFBMkMsaUNBQVE7SUFBbkQ7UUFBQSxxRUEwd0JDO1FBL3ZCVywyQkFBcUIsR0FBaUIsSUFBSSxDQUFDLENBQUMsSUFBSTtRQUNoRCxvQkFBYyxHQUFpQixJQUFJLENBQUMsQ0FBQyxJQUFJO1FBQ3pDLDBCQUFvQixHQUFpQixJQUFJLENBQUM7UUFDMUMsMkJBQXFCLEdBQWlCLElBQUksQ0FBQyxDQUFDLElBQUk7UUFDaEQscUJBQWUsR0FBb0IsSUFBSSxDQUFDLENBQUMsV0FBVztRQUNwRCxtQkFBYSxHQUFpQixJQUFJLENBQUMsQ0FBQyxVQUFVO1FBQzlDLHdCQUFrQixHQUFvQixJQUFJLENBQUMsQ0FBQyxTQUFTO1FBQ3JELGlCQUFXLEdBQW1CLElBQUksQ0FBQyxDQUFDLEtBQUs7UUFDekMsdUJBQWlCLEdBQWlCLElBQUksQ0FBQyxDQUFDLElBQUk7UUFDNUMsMEJBQW9CLEdBQW9CLElBQUksQ0FBQyxDQUFDLFNBQVM7UUFDdkQsc0JBQWdCLEdBQWlCLElBQUksQ0FBQztRQUN0QyxzQkFBZ0IsR0FBaUIsSUFBSSxDQUFDO1FBQ3RDLHNCQUFnQixHQUFvQixJQUFJLENBQUMsQ0FBQyxRQUFRO1FBQ2xELHNCQUFnQixHQUFpQixJQUFJLENBQUM7UUFDdEMsc0JBQWdCLEdBQWlCLElBQUksQ0FBQztRQUN0QyxtQkFBYSxHQUFpQixJQUFJLENBQUM7UUFDbkMsbUJB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b0JBQW9CLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUMxQyxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsMkJBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFDTCxvQkFBQztBQUFELENBMXdCQSxBQTB3QkMsQ0Exd0IwQyxrQkFBUSxHQTB3QmxEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXVkaW9NYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IENvbW1vbkN0ciB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL0NvbW1vbkN0clwiO1xyXG5pbXBvcnQgVmlld0Jhc2UgZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvVmlld0Jhc2VcIjtcclxuaW1wb3J0IEh0dHBIZWxwRXggZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9Db21tb24vTWFuYWdlcnMvSHR0cEhlbHBFeFwiO1xyXG5pbXBvcnQgeyBVSVV0aWwgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0NvbW1vbi9VSVV0aWxcIjtcclxuaW1wb3J0IHsgQXBwQ29uc3QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L21vZHVsZXMvQHNsb3RzbWFzdGVyL3VpLWNvbW1vbi9saWIvQXBwQ29uc3RcIjtcclxuaW1wb3J0IHsgQmFzZUZyYW1lTmF0aXZlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWVOYXRpdmVcIjtcclxuaW1wb3J0IHsgTG9naW5WaWV3Q3RyIH0gZnJvbSBcIi4uLy4uL0xvZ2luL0xvZ2luVmlld0N0clwiO1xyXG5pbXBvcnQgTG9iYnlWaWV3Q3RyIGZyb20gXCIuLi9Mb2JieVZpZXdDdHJcIjtcclxuaW1wb3J0IENFeHRyYWN0UmVjb3JkIGZyb20gXCIuL0NFeHRyYWN0UmVjb3JkXCI7XHJcbmltcG9ydCBOYXRpdmVNZXRob2QgZnJvbSBcIi4uLy4uL05hdGl2ZU1ldGhvZFwiO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDnpL7ljYBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW11bml0eVZpZXcgZXh0ZW5kcyBWaWV3QmFzZSB7XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IHBhY2thZ2VSZXNvdXJjZU5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJnYW1lSGFsbFwiO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGdldCBwYWNrYWdlTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcInJlcy9Mb2JieVwiO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGdldCBjb21wb25lbnROYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwiQ29tbXVuaXR5XCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1aV9idG5fY29tbXVuaXR5QnJlYWs6IGZndWkuR0J1dHRvbiA9IG51bGw7IC8v6L+U5ZueXHJcbiAgICBwcml2YXRlIHVpX2J0bl9zZXJ2aWNlOiBmZ3VpLkdCdXR0b24gPSBudWxsOyAvL+WuouacjVxyXG4gICAgcHJpdmF0ZSB1aV9idG5fZXh0cmFjdFJlY29yZDogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfYnRuX2pvaW5Db21tdW5pdHR5OiBmZ3VpLkdCdXR0b24gPSBudWxsOyAvL+WKoOWFpVxyXG4gICAgcHJpdmF0ZSB1aV9pbnB1dENvbW1OdW06IGZndWkuR1RleHRJbnB1dCA9IG51bGw7IC8v5Yqg5YWl56S+5Yy6SUTovpPlhaXmoYZcclxuICAgIHByaXZhdGUgdWlfYnRuX3NlYXJjaDogZmd1aS5HQnV0dG9uID0gbnVsbDsgLy/npL7ljLrmiJDlkZjmkJzntKLmjInpkq5cclxuICAgIHByaXZhdGUgdWlfaW5wdXRJZE9yQWNjZW50OiBmZ3VpLkdUZXh0SW5wdXQgPSBudWxsOyAvL+ekvuWMuuaIkOWRmOi+k+WFpeahhlxyXG4gICAgcHJpdmF0ZSB1aV9idG5fZG93bjogZmd1aS5HQ29tYm9Cb3ggPSBudWxsOyAvL+S4i+aLieahhlxyXG4gICAgcHJpdmF0ZSB1aV9idG5fY29tbWlzc2lvbjogZmd1aS5HQnV0dG9uID0gbnVsbDsgLy/pooblj5ZcclxuICAgIHByaXZhdGUgdWlfZXh0cmFjdENvbW1pc3Npb246IGZndWkuR0NvbXBvbmVudCA9IG51bGw7IC8v6aKG5Y+W5LqM5qyh56Gu6K6k5qGGXHJcbiAgICBwcml2YXRlIHVpX2J0bl9leHRyYWN0cXg6IGZndWkuR0J1dHRvbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX2J0bl9leHRyYWN0cWQ6IGZndWkuR0J1dHRvbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX0F1dGhvcml6YXRpb246IGZndWkuR0NvbXBvbmVudCA9IG51bGw7IC8v5Luj55CG57qn5Yir6K6+572uXHJcbiAgICBwcml2YXRlIHVpX2J0bl9zcVBhbmVscXg6IGZndWkuR0J1dHRvbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX2J0bl9zcVBhbmVsc3E6IGZndWkuR0J1dHRvbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX2J0bl9hZ2VudDE6IGZndWkuR0J1dHRvbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX2J0bl9hZ2VudDI6IGZndWkuR0J1dHRvbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX2J0bl9hZ2VudDM6IGZndWkuR0J1dHRvbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpXzFfTGV2ZWw6IGZndWkuR0dyb3VwID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfMl9MZXZlbDogZmd1aS5HR3JvdXAgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV8zX0xldmVsOiBmZ3VpLkdHcm91cCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBjZXh0cmFjdFJlY29yZDogQ0V4dHJhY3RSZWNvcmQgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgZ2FtZUNvbmZpZyA9IFtcclxuICAgICAgICB7IG5hbWU6IFwi5YWo6YOo5ri45oiyXCIsIGdhbWVpZDogMCB9LFxyXG4gICAgICAgIHsgbmFtZTogXCLlvrflt57mkrLlhYtcIiwgZ2FtZWlkOiA1MSB9LFxyXG4gICAgICAgIHsgbmFtZTogXCLlvrflt57niZvku5RcIiwgZ2FtZWlkOiAxMDQgfSxcclxuICAgICAgICB7IG5hbWU6IFwi5a6Z5pavXCIsIGdhbWVpZDogMjU0IH0sXHJcbiAgICAgICAgeyBuYW1lOiBcIuS5nee2q+aLieeOi1wiLCBnYW1laWQ6IDkyIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcIuawtOaenOeRqum6l1wiLCBnYW1laWQ6IDkxIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcIuiyoeelnumBjuW5tFwiLCBnYW1laWQ6IDI1OCB9LFxyXG4gICAgICAgIHsgbmFtZTogXCLngavniZtcIiwgZ2FtZWlkOiA0MDk2IH0sXHJcbiAgICAgICAgeyBuYW1lOiBcIum+jeiZjlwiLCBnYW1laWQ6IDIxIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcIueBq+S5i+Wls+eOi1wiLCBnYW1laWQ6IDU0IH0sXHJcbiAgICAgICAgeyBuYW1lOiBcIuW/jeiAhVwiLCBnYW1laWQ6IDIwMSB9XHJcbiAgICBdXHJcbiAgICBwcml2YXRlIG5vd0FnZW50TGV2ZWw6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGFnZW50TGV2ZWw6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGFnZW50UGVyY2VudDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgYWdlbnRQZXJjZW50TGlzdDogbnVtYmVyW10gPSBbNjAsIDEyLCA4XTtcclxuICAgIHByaXZhdGUgYWdlbnRVc2VySUQ6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGlzU2V0QWdlbnRMZXZlbFN1Y2Nlc3M6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgdWlMZXZlbFBvczogY2MuVmVjM1tdID0gW107XHJcbiAgICBwcml2YXRlIHR5cGVDb250cm9sbGVyOiBmZ3VpLkNvbnRyb2xsZXI7XHJcblxyXG4gICAgLyoq5Z+66YeR6KiY6YyEICovXHJcbiAgICBwcml2YXRlIHVpX2J0bl9mdW5kbG9nOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xyXG4gICAgLyoq6L2s5YWlICovXHJcbiAgICBwcml2YXRlIHVpX2J0bl9pbnRvOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xyXG4gICAgLyoq6L2s5Ye6ICovXHJcbiAgICBwcml2YXRlIHVpX2J0bl9yb2xsb3V0OiBmZ3VpLkdCdXR0b24gPSBudWxsO1xyXG4gICAgLyoq6K+m57uG5p+l6K+iICovXHJcbiAgICBwcml2YXRlIHVpX2J0bl9kZXRhaWxlZHF1ZXJ5OiBmZ3VpLkdCdXR0b24gPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgdWlfaW50b0Z1bmQ6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7IC8v6L2s5YWl56Gu6K6k5qGGXHJcbiAgICBwcml2YXRlIHVpX2ludG9Hb2xkOiBmZ3VpLkdUZXh0SW5wdXQgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgdWlfb3V0RnVuZDogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDsgLy/ovazlh7rnoa7orqTmoYZcclxuICAgIHByaXZhdGUgdWlfb3V0R29sZDogZmd1aS5HVGV4dElucHV0ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHVpX2FnZW50SW50cm9kdWNlZDogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDsgLy/npL7ljLrogZTns7vmlrnlvI9cclxuICAgIHByaXZhdGUgdWlfdW5pb25Db250YWN0OiBmZ3VpLkdDb21wb25lbnQgPSBudWxsOyAvL+iBlOebn+iBlOezu+aWueW8j1xyXG5cclxuICAgIHByaXZhdGUgdWlfYnRuX3NoZXF1a2VmdTogZmd1aS5HQnV0dG9uID0gbnVsbDsgLy8g56S+5Yy65a6i5pyNXHJcblxyXG4gICAgY3JlYXRlQ2hpbGRDb21wb25lbnRzKCkge1xyXG4gICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkQ29tcG9uZW50cygpO1xyXG4gICAgICAgIHRoaXMuZmd1aUNvbXBvbmVudC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYWxsQ2hpbGRDcmVhdGVkKCkge1xyXG4gICAgICAgIHN1cGVyLmFsbENoaWxkQ3JlYXRlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIE9uTG9hZENvbXBsZXRlZCgpIHtcclxuICAgICAgICB0aGlzLnVpTGV2ZWxQb3MucHVzaChuZXcgY2MuVmVjMyh0aGlzLnVpXzFfTGV2ZWwueCwgdGhpcy51aV8xX0xldmVsLnksIDApKTtcclxuICAgICAgICB0aGlzLnVpTGV2ZWxQb3MucHVzaChuZXcgY2MuVmVjMyh0aGlzLnVpXzJfTGV2ZWwueCwgdGhpcy51aV8yX0xldmVsLnksIDApKTtcclxuICAgICAgICB0aGlzLnVpTGV2ZWxQb3MucHVzaChuZXcgY2MuVmVjMyh0aGlzLnVpXzNfTGV2ZWwueCwgdGhpcy51aV8zX0xldmVsLnksIDApKTtcclxuICAgICAgICB0aGlzLmdldENoaWxkKFwibjEyMVwiKS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51aV9leHRyYWN0Q29tbWlzc2lvbi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51aV9BdXRob3JpemF0aW9uLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVpX2ludG9GdW5kLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVpX291dEZ1bmQudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudHlwZUNvbnRyb2xsZXIgPSB0aGlzLmZndWlDb21wb25lbnQuZ2V0Q29udHJvbGxlcihcInR5cGVcIik7XHJcbiAgICAgICAgdGhpcy50eXBlQ29udHJvbGxlci5vbkNoYW5nZWQodGhpcy5zdGF0ZUNoYW5nZWQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudHlwZUNvbnRyb2xsZXIuc2V0U2VsZWN0ZWRJbmRleCgxKTtcclxuICAgICAgICB0aGlzLmFkZFRvdWNoQ2FsbGJhY2soKTtcclxuICAgICAgICB0aGlzLlNob3coKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGFkZFRvdWNoQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgLy/lhbPpl61cclxuICAgICAgICB0aGlzLnVpX2J0bl9jb21tdW5pdHlCcmVhay5vbkNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdDb21tdW5pdHlWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIHRoaXMuSGlkZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8g5Z+66YeR6K6w5b2VXHJcbiAgICAgICAgdGhpcy51aV9idG5fZnVuZGxvZy5vbkNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdDb21tdW5pdHlWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNleHRyYWN0UmVjb3JkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNleHRyYWN0UmVjb3JkLlNob3coKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2V4dHJhY3RSZWNvcmQgPSB0aGlzLmFkZEZndWlDb21wb25lbnQoQ0V4dHJhY3RSZWNvcmQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvKiror6bnu4bmn6Xor6Ig5oyJ6ZKuIOmcgOimgei3s+i9rOWIsOa1j+iniOWZqOaJk+W8gOe9kemhtSAqL1xyXG4gICAgICAgIHRoaXMudWlfYnRuX2RldGFpbGVkcXVlcnkub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnQ29tbXVuaXR5VmlldycsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBsZXQgdXJsID0gQmFzZUZyYW1lTmF0aXZlLnNlcnZlckxpc3QuYWdlbnRzeXN5VXJsO1xyXG4gICAgICAgICAgICBpZiAodXJsICYmIHVybCAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5zeXMub3BlblVSTCh1cmwpO1xyXG4gICAgICAgICAgICAgICAgLy8gTG9iYnlWaWV3Q3RyLmluc3RhbmNlLnZpZXcub3BlbldlYnNpdGUuY2FsbChMb2JieVZpZXdDdHIuaW5zdGFuY2UudmlldywgdXJsKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3LlNob3dUaXBMYWJlbChcIuivt+iBlOezu+Wuouacje+8gVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy/lrqLmnI1cclxuICAgICAgICB0aGlzLnVpX2J0bl9zZXJ2aWNlLm9uQ2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ0NvbW11bml0eVZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgVUlVdGlsLmtlZnVGdW5jdGlvbihMb2JieVZpZXdDdHIuaW5zdGFuY2Uudmlldy5vcGVuV2Vic2l0ZS5iaW5kKExvYmJ5Vmlld0N0ci5pbnN0YW5jZS52aWV3KSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnVpX2J0bl9zaGVxdWtlZnUub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnQ29tbXVuaXR5VmlldycsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBVSVV0aWwua2VmdUZ1bmN0aW9uKExvYmJ5Vmlld0N0ci5pbnN0YW5jZS52aWV3Lm9wZW5XZWJzaXRlLmJpbmQoTG9iYnlWaWV3Q3RyLmluc3RhbmNlLnZpZXcpKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8v5Yqg5YWl5oyJ6ZKuXHJcbiAgICAgICAgdGhpcy51aV9idG5fam9pbkNvbW11bml0dHkub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnQ29tbXVuaXR5VmlldycsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBsZXQgaWQgPSB0aGlzLnVpX2lucHV0Q29tbU51bS50ZXh0O1xyXG4gICAgICAgICAgICBpZiAoaWQgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFwi6KuL6Ly45YWl5q2j56K655qE56S+5Y2A6JmfXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLmNzX2FwcGx5X2NsdWIoTnVtYmVyKGlkKSwgXCJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC8v56S+5Yy65oiQ5ZGY5pCc57Si5oyJ6ZKuXHJcbiAgICAgICAgdGhpcy51aV9idG5fc2VhcmNoLm9uQ2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ0NvbW11bml0eVZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgbGV0IHNlYXJjaFRleHQgPSB0aGlzLnVpX2lucHV0SWRPckFjY2VudC50ZXh0O1xyXG4gICAgICAgICAgICB0aGlzLmluaXRDb21tdW5pdHlNZW1iZXJzKHNlYXJjaFRleHQpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy/kuIvmi4nmoYZcclxuICAgICAgICB0aGlzLnVpX2J0bl9kb3duLm5vZGUub24oZmd1aS5FdmVudC5TVEFUVVNfQ0hBTkdFRCwgKCkgPT4ge1xyXG4gICAgICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ0NvbW11bml0eVZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5nYW1lQ29uZmlnW3RoaXMudWlfYnRuX2Rvd24uc2VsZWN0ZWRJbmRleF0pO1xyXG4gICAgICAgICAgICBsZXQgbGlzdCA9IHRoaXMuZ2FtZUNvbmZpZ1t0aGlzLnVpX2J0bl9kb3duLnNlbGVjdGVkSW5kZXhdO1xyXG4gICAgICAgICAgICB0aGlzLmdldENvbW11bml0eUNvbnRyaWJ1dGlvbihsaXN0KTtcclxuICAgICAgICB9LCB0aGlzKVxyXG4gICAgICAgIC8v6aKG5Y+WXHJcbiAgICAgICAgdGhpcy51aV9idG5fY29tbWlzc2lvbi5vbkNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdDb21tdW5pdHlWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIC8vIGxldCBnb2xkOiBudW1iZXIgPSBMb2JieVZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuYWdlbmluZm8uR29sZEM7XHJcbiAgICAgICAgICAgIC8vIGlmIChnb2xkIDw9IDApIHtcclxuICAgICAgICAgICAgLy8gICAgIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3LlNob3dUaXBMYWJlbChcIuayoeacieWPr+S7pemihuWPlueahOS9o+mHkVwiKTtcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyB0aGlzLnVpX2V4dHJhY3RDb21taXNzaW9uLmdldENoaWxkKFwiZXh0cmFjdEdvbGRcIikuYXNUZXh0RmllbGQudGV4dCA9IFVJVXRpbC5mb3JtYXROdW1iZXIxMDAoZ29sZCkgKyBcIlwiO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnVpX2V4dHJhY3RDb21taXNzaW9uLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy51aV9idG5fZXh0cmFjdHF4Lm9uQ2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ0NvbW11bml0eVZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgdGhpcy51aV9leHRyYWN0Q29tbWlzc2lvbi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnVpX2J0bl9leHRyYWN0cWQub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnQ29tbXVuaXR5VmlldycsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBsZXQgZ29sZDogbnVtYmVyID0gTG9iYnlWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmFnZW5pbmZvLkdvbGRDO1xyXG4gICAgICAgICAgICBsZXQgY2lkeDogbnVtYmVyID0gTG9naW5WaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmNpZHg7XHJcbiAgICAgICAgICAgIC8vIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS5jc19nZXRjb21taXNpb24oZ29sZCwgY2lkeCk7XHJcbiAgICAgICAgICAgIC8vIOaUueS4uumihuWPluWfuumHkVxyXG4gICAgICAgICAgICBMb2JieVZpZXdDdHIuaW5zdGFuY2UuY3NfZnVuZGNoYW5nZV9jbHViKGNpZHgsIDIsIGdvbGQpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy/ku6PnkIbnuqfliKvorr7nva5cclxuICAgICAgICB0aGlzLnVpX2J0bl9zcVBhbmVscXgub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnQ29tbXVuaXR5VmlldycsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnVpX0F1dGhvcml6YXRpb24udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy51aV9idG5fc3FQYW5lbHNxLm9uQ2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ0NvbW11bml0eVZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubm93QWdlbnRMZXZlbCA9PSB0aGlzLmFnZW50TGV2ZWwpIHtcclxuICAgICAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3LlNob3dUaXBMYWJlbChcIuS7o+eQhue6p+WIq+acquaUueWPmFwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBpZHggPSBMb2dpblZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuY2lkeDtcclxuICAgICAgICAgICAgICAgIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS5jc19zZXRhZ2VudF9nbShpZHgsIHRoaXMuYWdlbnRVc2VySUQsIHRoaXMuYWdlbnRQZXJjZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy51aV9idG5fYWdlbnQxLm9uQ2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ0NvbW11bml0eVZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgdGhpcy5hZ2VudExldmVsID0gMTtcclxuICAgICAgICAgICAgdGhpcy5zZXRBZ2VudExldmVsU2VsZWN0KCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnVpX2J0bl9hZ2VudDIub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnQ29tbXVuaXR5VmlldycsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFnZW50TGV2ZWwgPSAyO1xyXG4gICAgICAgICAgICB0aGlzLnNldEFnZW50TGV2ZWxTZWxlY3QoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMudWlfYnRuX2FnZW50My5vbkNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdDb21tdW5pdHlWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIHRoaXMuYWdlbnRMZXZlbCA9IDM7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QWdlbnRMZXZlbFNlbGVjdCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy/npL7ljLror6bmg4VcclxuICAgICAgICAvLyB0aGlzLmZndWlDb21wb25lbnQuZ2V0Q2hpbGQoXCJuNThcIikuYXNCdXR0b24ub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnQ29tbXVuaXR5VmlldycsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNldENvbnRyb2xsZXJQcm9wZXJ0eShcInR5cGVcIiwgMSk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuaW5pdENvbW11bml0eURldGFpbHMoKTtcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIC8vIC8v56S+5Yy65oiQ5ZGYXHJcbiAgICAgICAgLy8gdGhpcy5mZ3VpQ29tcG9uZW50LmdldENoaWxkKFwibjU5XCIpLmFzQnV0dG9uLm9uQ2xpY2soKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ0NvbW11bml0eVZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5zZXRDb250cm9sbGVyUHJvcGVydHkoXCJ0eXBlXCIsIDIpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmluaXRDb21tdW5pdHlNZW1iZXJzKCk7XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICAvLyAvL+ekvuWMuui0oeeMrlxyXG4gICAgICAgIC8vIHRoaXMuZmd1aUNvbXBvbmVudC5nZXRDaGlsZChcIm41N1wiKS5hc0J1dHRvbi5vbkNsaWNrKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdDb21tdW5pdHlWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2V0Q29udHJvbGxlclByb3BlcnR5KFwidHlwZVwiLCAzKTtcclxuICAgICAgICAvLyAgICAgbGV0IGNvbSA9IHRoaXMuZmd1aUNvbXBvbmVudC5nZXRDaGlsZChcIm4xMDFcIikuYXNDb207XHJcbiAgICAgICAgLy8gICAgIGxldCBsaXN0ID0gY29tLmdldENoaWxkKFwiY29udHJpYnV0aW9uTGlzdFwiKS5hc0xpc3Q7XHJcbiAgICAgICAgLy8gICAgIGxpc3QucmVtb3ZlQ2hpbGRyZW5Ub1Bvb2woKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5nZXRDb21tdW5pdHlDb250cmlidXRpb24oKTtcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIC8vIC8v56S+5Yy65aWW5Yqx6K+05piOXHJcbiAgICAgICAgLy8gdGhpcy5mZ3VpQ29tcG9uZW50LmdldENoaWxkKFwibjYwXCIpLmFzQnV0dG9uLm9uQ2xpY2soKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ0NvbW11bml0eVZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5zZXRDb250cm9sbGVyUHJvcGVydHkoXCJ0eXBlXCIsIDQpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmluaXRDb21tdW5pdHlSZXdhcmRJbnRyb2R1Y2UoKTtcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIC8v6L2s5Ye6XHJcbiAgICAgICAgdGhpcy51aV9idG5fcm9sbG91dC5vbkNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdDb21tdW5pdHlWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIHRoaXMudWlfb3V0R29sZC50ZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgbGV0IGdvbGQ6IG51bWJlciA9IExvYmJ5Vmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5hZ2VuaW5mby5Hb2xkQztcclxuICAgICAgICAgICAgaWYgKGdvbGQgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFwi5rKS5pyJ5Y+v5Lul6aCY5Y+W55qE5Z+66YeRXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudWlfb3V0RnVuZC5nZXRDaGlsZChcImJhbGFuY2VUZXh0XCIpLmFzVGV4dEZpZWxkLnRleHQgPSBcIumkmOmhje+8mlwiICsgVUlVdGlsLmZvcm1hdE51bWJlcjEwMChnb2xkKTtcclxuICAgICAgICAgICAgdGhpcy51aV9vdXRGdW5kLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy51aV9vdXRGdW5kLmdldENoaWxkKFwiYnRuX291dHF4XCIpLmFzQnV0dG9uLm9uQ2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ0NvbW11bml0eVZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgdGhpcy51aV9vdXRGdW5kLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMudWlfb3V0RnVuZC5nZXRDaGlsZChcImJ0bl9vdXRxZFwiKS5hc0J1dHRvbi5vbkNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdDb21tdW5pdHlWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVpX291dEdvbGQudGV4dCA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoXCLoq4vovLjlhaXph5HpoY1cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFVSVV0aWwuaXNOdW1iZXIodGhpcy51aV9vdXRHb2xkLnRleHQpKSB7XHJcbiAgICAgICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoXCLoq4vovLjlhaXmlbjlrZdcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGdvbGQ6IG51bWJlciA9IE51bWJlcih0aGlzLnVpX291dEdvbGQudGV4dCk7XHJcbiAgICAgICAgICAgIGxldCB5dWU6IG51bWJlciA9IExvYmJ5Vmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5hZ2VuaW5mby5Hb2xkQztcclxuICAgICAgICAgICAgaWYgKE51bWJlcihnb2xkKSAqIDEwMCA+IE51bWJlcih5dWUpKSB7XHJcbiAgICAgICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoXCLlj6/ovYnlh7rln7rph5HkuI3otrNcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGNpZHg6IG51bWJlciA9IExvZ2luVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5jaWR4O1xyXG4gICAgICAgICAgICBMb2JieVZpZXdDdHIuaW5zdGFuY2UuY3NfZnVuZGNoYW5nZV9jbHViKGNpZHgsIDIsIGdvbGQgKiAxMDApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy51aV9vdXRHb2xkLm9uKGZndWkuRXZlbnQuVEVYVF9DSEFOR0UsIHRoaXMuY2hhbmdlZE91dFRleHQsIHRoaXMpO1xyXG4gICAgICAgIC8v6L2s5YWlXHJcbiAgICAgICAgdGhpcy51aV9idG5faW50by5vbkNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdDb21tdW5pdHlWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIHRoaXMudWlfaW50b0dvbGQudGV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgIC8v5pu05paw5pi+56S65L2Z6aKdXHJcbiAgICAgICAgICAgIGxldCB5dWUgPSBBcHBDb25zdC5tUGxheWVyTW9kZWwuZ29sZDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBcHBDb25zdC5tUGxheWVyTW9kZWwgPT0gXCIsIEFwcENvbnN0Lm1QbGF5ZXJNb2RlbCk7XHJcbiAgICAgICAgICAgIHRoaXMudWlfaW50b0Z1bmQuZ2V0Q2hpbGQoXCJiYWxhbmNlVGV4dFwiKS5hc1RleHRGaWVsZC50ZXh0ID0gXCLppJjpoY3vvJpcIiArIFVJVXRpbC5mb3JtYXROdW1iZXIxMDAoeXVlKTtcclxuICAgICAgICAgICAgdGhpcy51aV9pbnRvRnVuZC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMudWlfaW50b0Z1bmQuZ2V0Q2hpbGQoXCJidG5faW50b3F4XCIpLmFzQnV0dG9uLm9uQ2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ0NvbW11bml0eVZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgdGhpcy51aV9pbnRvRnVuZC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnVpX2ludG9GdW5kLmdldENoaWxkKFwiYnRuX2ludG9xZFwiKS5hc0J1dHRvbi5vbkNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdDb21tdW5pdHlWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVpX2ludG9Hb2xkLnRleHQgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFwi6KuL6Ly45YWl6YeR6aGNXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghVUlVdGlsLmlzTnVtYmVyKHRoaXMudWlfaW50b0dvbGQudGV4dCkpIHtcclxuICAgICAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3LlNob3dUaXBMYWJlbChcIuiri+i8uOWFpeaVuOWtl1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgZ29sZDogbnVtYmVyID0gTnVtYmVyKHRoaXMudWlfaW50b0dvbGQudGV4dCk7XHJcbiAgICAgICAgICAgIGxldCB5dWUgPSBBcHBDb25zdC5tUGxheWVyTW9kZWwuZ29sZDtcclxuICAgICAgICAgICAgaWYgKE51bWJlcihnb2xkKSAqIDEwMCA+IE51bWJlcih5dWUpKSB7XHJcbiAgICAgICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoXCLlj6/ovYnlhaXppJjpoY3kuI3otrNcIiArIGdvbGQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBjaWR4OiBudW1iZXIgPSBMb2dpblZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuY2lkeDtcclxuICAgICAgICAgICAgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLmNzX2Z1bmRjaGFuZ2VfY2x1YihjaWR4LCAxLCBnb2xkICogMTAwKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMudWlfaW50b0dvbGQub24oZmd1aS5FdmVudC5URVhUX0NIQU5HRSwgdGhpcy5jaGFuZ2VkVGV4dCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNoYW5nZWRUZXh0KCkge1xyXG4gICAgICAgIGxldCB0ZXh0ID0gdGhpcy51aV9pbnRvR29sZC50ZXh0O1xyXG4gICAgICAgIGlmIChVSVV0aWwuaXNOdW1iZXIodGV4dCkpIHtcclxuICAgICAgICAgICAgbGV0IHl1ZSA9IEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC5nb2xkO1xyXG4gICAgICAgICAgICBpZiAoTnVtYmVyKHRleHQpID4gVUlVdGlsLmZvcm1hdE51bWJlcih5dWUpKSB7XHJcbiAgICAgICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoXCLotoXpgY7mnIDlpKflj6/ovYnlhaXph5HpoY1cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoXCLoq4vovLjlhaXmlbjlrZdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjaGFuZ2VkT3V0VGV4dCgpIHtcclxuICAgICAgICBsZXQgdGV4dCA9IHRoaXMudWlfb3V0R29sZC50ZXh0O1xyXG4gICAgICAgIGlmIChVSVV0aWwuaXNOdW1iZXIodGV4dCkpIHtcclxuICAgICAgICAgICAgbGV0IHl1ZSA9IExvYmJ5Vmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5hZ2VuaW5mby5Hb2xkQztcclxuICAgICAgICAgICAgaWYgKE51bWJlcih0ZXh0KSA+IFVJVXRpbC5mb3JtYXROdW1iZXIoeXVlKSkge1xyXG4gICAgICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFwi6LaF6YGO5pyA5aSn5Y+v6L2J5Ye66YeR6aGNXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFwi6KuL6Ly45YWl5pW45a2XXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGVDaGFuZ2VkKCkge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMudHlwZUNvbnRyb2xsZXIuc2VsZWN0ZWRJbmRleDtcclxuICAgICAgICBzd2l0Y2ggKGluZGV4KSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTovL+ekvuWMuuivpuaDhVxyXG4gICAgICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdDb21tdW5pdHlWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmluaXRDb21tdW5pdHlEZXRhaWxzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFnZW50SW5mb1Nob3coKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6Ly/npL7ljLrmiJDlkZhcclxuICAgICAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnQ29tbXVuaXR5VmlldycsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0Q29tbXVuaXR5TWVtYmVycygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzovL+ekvuWMuui0oeeMrlxyXG4gICAgICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdDb21tdW5pdHlWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29tID0gdGhpcy5mZ3VpQ29tcG9uZW50LmdldENoaWxkKFwibjEwMVwiKS5hc0NvbTtcclxuICAgICAgICAgICAgICAgIGxldCBsaXN0ID0gY29tLmdldENoaWxkKFwiY29udHJpYnV0aW9uTGlzdFwiKS5hc0xpc3Q7XHJcbiAgICAgICAgICAgICAgICBsaXN0LnJlbW92ZUNoaWxkcmVuVG9Qb29sKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2xpc3QgPSB0aGlzLmdhbWVDb25maWdbdGhpcy51aV9idG5fZG93bi5zZWxlY3RlZEluZGV4XTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29tbXVuaXR5Q29udHJpYnV0aW9uKHNsaXN0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQ6Ly/npL7ljLrlpZblirHor7TmmI5cclxuICAgICAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnQ29tbXVuaXR5VmlldycsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0Q29tbXVuaXR5UmV3YXJkSW50cm9kdWNlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA1Oi8v6IGU55uf6IGU57O75pa55byPXHJcbiAgICAgICAgICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ0NvbW11bml0eVZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFVuaW9uQ29udGFjdChudWxsLCB0aGlzLnVpX3VuaW9uQ29udGFjdCwgMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFVuaW9uQ29udGFjdCgxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgU2hvdygpIHtcclxuICAgICAgICBzdXBlci5TaG93KCk7XHJcbiAgICAgICAgLy8gbmV3XHJcbiAgICAgICAgLy8gdGhpcy5zZXRDb250cm9sbGVyUHJvcGVydHkoXCJjMVwiLCAyKTtcclxuICAgICAgICAvLyB0aGlzLnNldENvbnRyb2xsZXJQcm9wZXJ0eShcInR5cGVcIiwgMSk7XHJcbiAgICAgICAgLy8gdGhpcy5pbml0Q29tbXVuaXR5RGV0YWlscygpO1xyXG4gICAgICAgIHRoaXMuYWdlbnRJbmZvU2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOekvuWMuuivpuaDheaYvuekulxyXG4gICAgcHVibGljIGFnZW50SW5mb1Nob3coKSB7XHJcbiAgICAgICAgLy8g5Yik5pat5piv5ZCm5pi+56S656S+5Yy66K+m5oOFXHJcbiAgICAgICAgaWYgKExvZ2luVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5jaWR4ID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVyUHJvcGVydHkoXCJjMVwiLCAwKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVyUHJvcGVydHkoXCJ0eXBlXCIsIDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU2V0QWdlbnRMZXZlbFN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNTZXRBZ2VudExldmVsU3VjY2VzcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVyUHJvcGVydHkoXCJ0eXBlXCIsIDIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0Q29tbXVuaXR5TWVtYmVycygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zZXRDb250cm9sbGVyUHJvcGVydHkoXCJjMVwiLCAxKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuc2V0Q29udHJvbGxlclByb3BlcnR5KFwidHlwZVwiLCAxKTtcclxuICAgICAgICAgICAgICAgIC8vIC8vIHRoaXMuaW5pdENvbW11bml0eURldGFpbHMoKTtcclxuICAgICAgICAgICAgICAgIC8vIOS7o+eQhuetiee6p+S4ujHmiY3mmL7npLrovazlhaXln7rph5HnrYkg5LiN5Li6MeaYvuekuuS4iue6p+iBlOezu+aWueW8jyA9MeihqOekuuaYr+WIm+W7uuiAhVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVyUHJvcGVydHkoXCJ0eXBlXCIsIDEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKExvYmJ5Vmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5hZ2VuaW5mby5jbHVidXNlcmlkID09IEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC51c2VyaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJQcm9wZXJ0eShcImMxXCIsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmd1aUNvbXBvbmVudC5nZXRDaGlsZChcIm42MVwiKS5hc0NvbS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpX2FnZW50SW50cm9kdWNlZC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0Q29tbXVuaXR5RGV0YWlscygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJQcm9wZXJ0eShcImMxXCIsIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdFVuaW9uQ29udGFjdChudWxsLCB0aGlzLnVpX2FnZW50SW50cm9kdWNlZCwgMik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mZ3VpQ29tcG9uZW50LmdldENoaWxkKFwibjYxXCIpLmFzQ29tLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpX2FnZW50SW50cm9kdWNlZC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFVuaW9uQ29udGFjdCgyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDojrflj5bogZTnm5/ogZTns7vmlrnlvI9cclxuICAgIHB1YmxpYyBnZXRVbmlvbkNvbnRhY3QobV90eXBlOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgLy/lkI3np7BcclxuICAgICAgICBsZXQgb3JnTmFtZTogc3RyaW5nID0gXCJcIjtcclxuICAgICAgICBpZiAobV90eXBlID09IDEpIHtcclxuICAgICAgICAgICAgbGV0IGNsdWJOYW1lVGV4dCA9IHNlbGYudWlfdW5pb25Db250YWN0LmdldENoaWxkKFwiY2x1Yk5hbWVcIik7XHJcbiAgICAgICAgICAgIG9yZ05hbWUgPSBcIuiBlOebn++8mlwiICsgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmFnZW5pbmZvLmFsbGlkbmFtZTtcclxuICAgICAgICAgICAgY2x1Yk5hbWVUZXh0LnRleHQgPSBvcmdOYW1lO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobV90eXBlID09IDIpIHtcclxuICAgICAgICAgICAgbGV0IGNsdWJOYW1lVGV4dCA9IHNlbGYudWlfYWdlbnRJbnRyb2R1Y2VkLmdldENoaWxkKFwiY2x1Yk5hbWVcIik7XHJcbiAgICAgICAgICAgIG9yZ05hbWUgPSBcIuekvuWMuu+8mlwiICsgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmFnZW5pbmZvLmNsdWJuYW1lO1xyXG4gICAgICAgICAgICBjbHViTmFtZVRleHQudGV4dCA9IG9yZ05hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdXJsID0gQmFzZUZyYW1lTmF0aXZlLnNlcnZlcmxpc3RJdGVtLmFwaUFkcmVzcyArIFwiL2FwaS9HYW1lbG9nL0dldENvbnRhY3RJbmZvXCIgKyBgP2NsdWJpZD0ke0xvZ2luVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5jaWR4fWA7XHJcbiAgICAgICAgSHR0cEhlbHBFeC5pbnN0YW5jZS5nZXQodXJsKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLUdldENvbnRhY3RJbmZvLS0tXCIsIHJlcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmNvZGUgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtX3R5cGUgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmluaXRVbmlvbkNvbnRhY3QocmVzLmRhdGEsIHNlbGYudWlfdW5pb25Db250YWN0LCBtX3R5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobV90eXBlID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5pbml0VW5pb25Db250YWN0KHJlcy5kYXRhLCBzZWxmLnVpX2FnZW50SW50cm9kdWNlZCwgbV90eXBlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3LlNob3dUaXBMYWJlbChcIuiOt+WPluiBlOezu+aWueW8j+Wksei0pVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdFVuaW9uQ29udGFjdChkYXRhLCBtX25vZGU6IGZndWkuR0NvbXBvbmVudCwgbV90eXBlOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgY29udGFjdFRleHQxID0gbV9ub2RlLmdldENoaWxkKFwiY29udGFjdFRleHQxXCIpLmFzVGV4dEZpZWxkO1xyXG4gICAgICAgIGNvbnRhY3RUZXh0MS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGNvbnRhY3RUZXh0MiA9IG1fbm9kZS5nZXRDaGlsZChcImNvbnRhY3RUZXh0MlwiKS5hc1RleHRGaWVsZDtcclxuICAgICAgICBjb250YWN0VGV4dDIudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBjb250YWN0VGV4dDMgPSBtX25vZGUuZ2V0Q2hpbGQoXCJjb250YWN0VGV4dDNcIikuYXNUZXh0RmllbGQ7XHJcbiAgICAgICAgY29udGFjdFRleHQzLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICBsZXQgZG93bmxvYWRUZXh0MSA9IG1fbm9kZS5nZXRDaGlsZChcImRvd25sb2FkVGV4dDFcIikuYXNUZXh0RmllbGQ7XHJcbiAgICAgICAgZG93bmxvYWRUZXh0MS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGRvd25sb2FkVGV4dDIgPSBtX25vZGUuZ2V0Q2hpbGQoXCJkb3dubG9hZFRleHQyXCIpLmFzVGV4dEZpZWxkO1xyXG4gICAgICAgIGRvd25sb2FkVGV4dDIudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBkb3dubG9hZFRleHQzID0gbV9ub2RlLmdldENoaWxkKFwiZG93bmxvYWRUZXh0M1wiKS5hc1RleHRGaWVsZDtcclxuICAgICAgICBkb3dubG9hZFRleHQzLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICBsZXQgYnRuX2NvcHkxID0gbV9ub2RlLmdldENoaWxkKFwiYnRuX2NvcHkxXCIpLmFzQnV0dG9uO1xyXG4gICAgICAgIGJ0bl9jb3B5MS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGJ0bl9jb3B5MiA9IG1fbm9kZS5nZXRDaGlsZChcImJ0bl9jb3B5MlwiKS5hc0J1dHRvbjtcclxuICAgICAgICBidG5fY29weTIudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBidG5fY29weTMgPSBtX25vZGUuZ2V0Q2hpbGQoXCJidG5fY29weTNcIikuYXNCdXR0b247XHJcbiAgICAgICAgYnRuX2NvcHkzLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICBsZXQgbGlzdCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZGF0YS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkYXRhW2luZGV4XTtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnJvbGUgPT0gbV90eXBlICYmIGVsZW1lbnQubm8gJiYgZWxlbWVudC5ubyAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsaXN0Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IG51bTogbnVtYmVyID0gaW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGxpc3RbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgaWYgKG51bSA8PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRhY3RUZXh0ID0gbV9ub2RlLmdldENoaWxkKFwiY29udGFjdFRleHRcIiArIG51bSkuYXNUZXh0RmllbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdFRleHQudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQubmFtZSAmJiBlbGVtZW50Lm5hbWUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWN0VGV4dC50ZXh0ID0gZWxlbWVudC5uYW1lICsgXCLvvJpcIiArIGVsZW1lbnQubm87XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFjdFRleHQudGV4dCA9IGVsZW1lbnQubm87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnVybCAmJiBlbGVtZW50LnVybCAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkb3dubG9hZFRleHQgPSBtX25vZGUuZ2V0Q2hpbGQoXCJkb3dubG9hZFRleHRcIiArIG51bSkuYXNUZXh0RmllbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvd25sb2FkVGV4dC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG93bmxvYWRUZXh0LnRleHQgPSBcIuWcsOWdgO+8mlwiICsgZWxlbWVudC51cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBidG5fY29weSA9IG1fbm9kZS5nZXRDaGlsZChcImJ0bl9jb3B5XCIgKyBudW0pLmFzQnV0dG9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidG5fY29weS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnRuX2NvcHkuY2xlYXJDbGljaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidG5fY29weS5vbkNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnQ29tbXVuaXR5VmlldycsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRvd25sb2FkX3VybDogc3RyaW5nID0gZWxlbWVudC51cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoQ0NfSlNCKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmF0aXZlTWV0aG9kLmNvcHlUZXh0U3RyaW5nKGRvd25sb2FkX3VybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFwi5aSN5Yi25oiQ5YqfXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYm9vbCA9IHRoaXMuY29tbWFuZENvcHkoZG93bmxvYWRfdXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RyID0gYm9vbCA/IFwi5aSN5Yi25oiQ5YqfXCIgOiBcIuWkjeWItuWksei0pVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3LlNob3dUaXBMYWJlbChzdHIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gbGV0IHZ4VGl0bGUgPSB0aGlzLnVpX3VuaW9uQ29udGFjdC5nZXRDaGlsZChcIm4xMDZcIikuYXNDb207XHJcbiAgICAgICAgLy8gbGV0IHZ4VGV4dCA9IHRoaXMudWlfdW5pb25Db250YWN0LmdldENoaWxkKFwidnhUZXh0XCIpLmFzVGV4dEZpZWxkO1xyXG4gICAgICAgIC8vIGxldCB0bFRpdGxlID0gdGhpcy51aV91bmlvbkNvbnRhY3QuZ2V0Q2hpbGQoXCJuMTA0XCIpLmFzQ29tO1xyXG4gICAgICAgIC8vIGxldCB0bFRleHQgPSB0aGlzLnVpX3VuaW9uQ29udGFjdC5nZXRDaGlsZChcInRsVGV4dFwiKS5hc1RleHRGaWVsZDtcclxuICAgICAgICAvLyBsZXQgZG93bmxvYWRUaXRsZSA9IHRoaXMudWlfdW5pb25Db250YWN0LmdldENoaWxkKFwibjEwOFwiKS5hc0NvbTtcclxuICAgICAgICAvLyBsZXQgbGlua1RleHRCdG4gPSB0aGlzLnVpX3VuaW9uQ29udGFjdC5nZXRDaGlsZChcImRvd25sb2FkVGV4dFwiKS5hc0J1dHRvbjtcclxuICAgICAgICAvLyBsZXQgZG93bmxvYWRUZXh0ID0gbGlua1RleHRCdG4uZ2V0Q2hpbGQoXCJsaW5rVGV4dFwiKS5hc1RleHRGaWVsZDtcclxuICAgICAgICAvLyBpZiAoZGF0YSAmJiBkYXRhLmFsbGluZm9bMF0pIHtcclxuICAgICAgICAvLyAgICAgbGV0IGluZm8gPSBkYXRhLmFsbGluZm9bMF07XHJcbiAgICAgICAgLy8gICAgIGlmIChpbmZvLndlaXhpbiAmJiBpbmZvLndlaXhpbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB2eFRpdGxlLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICAgICAgdnhUZXh0LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICAgICAgdnhUZXh0LnRleHQgPSBpbmZvLndlaXhpbjtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBpZiAoaW5mby5uYXR1cmUgJiYgaW5mby5uYXR1cmUgIT0gXCJcIikge1xyXG4gICAgICAgIC8vICAgICAgICAgdGxUaXRsZS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgICAgIHRsVGV4dC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgICAgIHRsVGV4dC50ZXh0ID0gaW5mby5uYXR1cmU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgaWYgKGluZm8uZG93bmxvYWRVcmwgJiYgaW5mby5kb3dubG9hZFVybCAhPSBcIlwiKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBkb3dubG9hZFRpdGxlLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICAgICAgbGlua1RleHRCdG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgICAgICBkb3dubG9hZFRleHQudGV4dCA9IGluZm8uZG93bmxvYWRVcmw7XHJcbiAgICAgICAgLy8gICAgICAgICBsaW5rVGV4dEJ0bi5jbGVhckNsaWNrKCk7XHJcbiAgICAgICAgLy8gICAgICAgICBsaW5rVGV4dEJ0bi5vbkNsaWNrKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ0NvbW11bml0eVZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImluZm8uZG93bmxvYWRVcmwgPT09IFwiLCBpbmZvLmRvd25sb2FkVXJsKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBzZWxmLmp1bXBPcGVuVVJMKGluZm8uZG93bmxvYWRVcmwpO1xyXG4gICAgICAgIC8vICAgICAgICAgfSlcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIHZ4VGl0bGUudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICB2eFRleHQudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICB0bFRpdGxlLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAvLyAgICAgdGxUZXh0LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAvLyAgICAgZG93bmxvYWRUaXRsZS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gICAgIGxpbmtUZXh0QnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGp1bXBPcGVuVVJMKHVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgY2Muc3lzLm9wZW5VUkwodXJsKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirlpI3liLYgKi9cclxuICAgIHB1YmxpYyBjb21tYW5kQ29weShpbnB1dCkge1xyXG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgICAgICBlbC52YWx1ZSA9IGlucHV0O1xyXG4gICAgICAgIC8vIFByZXZlbnQga2V5Ym9hcmQgZnJvbSBzaG93aW5nIG9uIG1vYmlsZVxyXG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAnJyk7XHJcbiAgICAgICAgLy9lbC5zdHlsZS5jb250YWluID0gJ3N0cmljdCc7XHJcbiAgICAgICAgZWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgIGVsLnN0eWxlLmxlZnQgPSAnLTk5OTlweCc7XHJcbiAgICAgICAgZWwuc3R5bGUuZm9udFNpemUgPSAnMTJwdCc7IC8vIFByZXZlbnQgem9vbWluZyBvbiBpT1NcclxuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBnZXRTZWxlY3Rpb24oKTtcclxuICAgICAgICBsZXQgb3JpZ2luYWxSYW5nZTogYW55ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHNlbGVjdGlvbi5yYW5nZUNvdW50ID4gMCkge1xyXG4gICAgICAgICAgICBvcmlnaW5hbFJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgICAgIGVsLnNlbGVjdCgpO1xyXG4gICAgICAgIC8vIEV4cGxpY2l0IHNlbGVjdGlvbiB3b3JrYXJvdW5kIGZvciBpT1NcclxuICAgICAgICBlbC5zZWxlY3Rpb25TdGFydCA9IDA7XHJcbiAgICAgICAgZWwuc2VsZWN0aW9uRW5kID0gaW5wdXQubGVuZ3RoO1xyXG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgc3VjY2VzcyA9IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7IH1cclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbCk7XHJcblxyXG4gICAgICAgIGlmIChvcmlnaW5hbFJhbmdlKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKG9yaWdpbmFsUmFuZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3VjY2VzcztcclxuICAgIH07XHJcblxyXG4gICAgLy8g5Yqg6L2956S+5Yy66K+m5oOFXHJcbiAgICBwdWJsaWMgaW5pdENvbW11bml0eURldGFpbHMoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCItLS1pbml0Q29tbXVuaXR5RGV0YWlscy0tLVwiKTtcclxuICAgICAgICBsZXQgY29tID0gdGhpcy5mZ3VpQ29tcG9uZW50LmdldENoaWxkKFwibjYxXCIpLmFzQ29tO1xyXG4gICAgICAgIGxldCBkYXRhID0gTG9iYnlWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmFnZW5pbmZvO1xyXG4gICAgICAgIGNvbS5nZXRDaGlsZChcIm15SWRcIikuYXNUZXh0RmllbGQudGV4dCA9IGRhdGEuQ29kZSArIFwiXCI7IC8vaWRcclxuICAgICAgICBjb20uZ2V0Q2hpbGQoXCJzdWJvcmRpbmF0ZU51bVwiKS5hc1RleHRGaWVsZC50ZXh0ID0gZGF0YS5jYWxpc3QubGVuZ3RoICsgXCJcIjsgLy/kuIvntJrnjqnlrrZcclxuICAgICAgICBjb20uZ2V0Q2hpbGQoXCJuZXdseUFkZGVkXCIpLmFzVGV4dEZpZWxkLnRleHQgPSBkYXRhLnRhZGRudW0gKyBcIlwiOyAvL+S7iuaXpeaWsOWinlxyXG4gICAgICAgIGNvbS5nZXRDaGlsZChcInRvZGF5QWN0aXZlXCIpLmFzVGV4dEZpZWxkLnRleHQgPSBkYXRhLnRhY3RpdmUgKyBcIlwiOyAvL+S7iuaXpea0u+i6jVxyXG4gICAgICAgIGNvbS5nZXRDaGlsZChcIkN1bXVsYXRpdmVcIikuYXNUZXh0RmllbGQudGV4dCA9IFVJVXRpbC5mb3JtYXROdW1iZXIxMDAoZGF0YS5pbmNvbWUpLnRvRml4ZWQoMikgKyBcIlwiOyAvL+e6jeioiOS9o+mHkVxyXG4gICAgICAgIGNvbS5nZXRDaGlsZChcInRvZGF5Y29tbWlzc2lvblwiKS5hc1RleHRGaWVsZC50ZXh0ID0gVUlVdGlsLmZvcm1hdE51bWJlcjEwMChkYXRhLnRDb21taXNpb24pLnRvRml4ZWQoMikgKyBcIlwiOyAvL+S7iuaXpeS9o+mHkVxyXG4gICAgICAgIGNvbS5nZXRDaGlsZChcImV4dHJhY3RcIikuYXNUZXh0RmllbGQudGV4dCA9IFVJVXRpbC5mb3JtYXROdW1iZXIxMDAoZGF0YS5Hb2xkSGlzdG9yeUMpLnRvRml4ZWQoMikgKyBcIlwiOyAvL+e6jeioiOaPkOWPllxyXG4gICAgICAgIGNvbS5nZXRDaGlsZChcImNhbm1lbnRpb25FeHRyYWN0XCIpLmFzVGV4dEZpZWxkLnRleHQgPSBVSVV0aWwuZm9ybWF0TnVtYmVyKGRhdGEuR29sZEMpICsgXCJcIjsgLy/lj6/mj5DkvaPph5FcclxuICAgICAgICB0aGlzLmZndWlDb21wb25lbnQuZ2V0Q2hpbGQoXCJuNjFcIikuYXNDb20uZ2V0Q2hpbGQoXCJuNjRcIikuYXNUZXh0RmllbGQudGV4dCA9IGRhdGEuY2x1Ym5hbWU7IC8v56S+5Yy65ZCN5a2XXHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Yqg6L2956S+5Yy65oiQ5ZGYXHJcbiAgICBwdWJsaWMgaW5pdENvbW11bml0eU1lbWJlcnMoc2VhcmNoSUQ6IHN0cmluZyA9IFwiXCIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLWluaXRDb21tdW5pdHlNZW1iZXJzLS0tXCIpO1xyXG4gICAgICAgIGxldCBjb20gPSB0aGlzLmZndWlDb21wb25lbnQuZ2V0Q2hpbGQoXCJuODlcIikuYXNDb207XHJcbiAgICAgICAgbGV0IGxpc3QgPSBjb20uZ2V0Q2hpbGQoXCJtZW1iZXJzTGlzdFwiKS5hc0xpc3Q7XHJcbiAgICAgICAgbGlzdC5yZW1vdmVDaGlsZHJlblRvUG9vbCgpO1xyXG5cclxuICAgICAgICBsZXQgY2FsaXN0ID0gTG9iYnlWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmFnZW5pbmZvLmNhbGlzdDtcclxuICAgICAgICBpZiAoc2VhcmNoSUQgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBsZXQgaXNGaW5kOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjYWxpc3QubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gY2FsaXN0W2luZGV4XTtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LlVzZXJJRCArIFwiXCIgPT0gc2VhcmNoSUQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxpc3QgPSBbZWxlbWVudF07XHJcbiAgICAgICAgICAgICAgICAgICAgaXNGaW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWlzRmluZCkge1xyXG4gICAgICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFwi5pyq5om+5Yiw5q2k55So5oi3XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjYWxpc3QubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gbGlzdC5hZGRJdGVtRnJvbVBvb2woKS5hc0NvbTtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBjYWxpc3RbaW5kZXhdO1xyXG4gICAgICAgICAgICBpdGVtLmdldENoaWxkKFwiaWRcIikuYXNUZXh0RmllbGQudGV4dCA9IGRhdGEuVXNlcklEICsgXCJcIjtcclxuICAgICAgICAgICAgaXRlbS5nZXRDaGlsZChcIm5hbWVcIikuYXNUZXh0RmllbGQudGV4dCA9IGRhdGEubmFtZSArIFwiXCI7XHJcbiAgICAgICAgICAgIGxldCBhZ2VudEw6IG51bWJlciA9IHRoaXMuZ2V0QWdlbnRMZXZlbEJ5UmF0ZShkYXRhLnJhdGUpO1xyXG4gICAgICAgICAgICAvLyAgaXRlbS5nZXRDaGlsZChcInR5cGVcIikuYXNUZXh0RmllbGQudGV4dCA9IGFnZW50TCArIFwi57qnXCI7XHJcbiAgICAgICAgICAgIC8vIGl0ZW0uZ2V0Q2hpbGQoXCJ0eXBlXCIpLnZpc2libGUgPSBkYXRhLmlzYWdlbnQgPj0gMSB8fCBhZ2VudEwgPiAwO1xyXG4gICAgICAgICAgICBpdGVtLmdldENoaWxkKFwidGltZVwiKS5hc1RleHRGaWVsZC50ZXh0ID0gZGF0YS5yZWd0aW1lICsgXCJcIjtcclxuXHJcbiAgICAgICAgICAgIC8vIGxldCBjaGFuZ2VCdG4gPSBpdGVtLmdldENoaWxkKFwiYnRuX0VkaXRcIikuYXNCdXR0b247XHJcbiAgICAgICAgICAgIC8vIGxldCBpc1Nob3cgPSBkYXRhLmx2IC0gTG9iYnlWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmFnZW5pbmZvLmx2ID09IDE7XHJcbiAgICAgICAgICAgIC8vIGlmIChMb2JieVZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuYWdlbmluZm8ubHYgPT0gMyB8fCAhaXNTaG93KSB7XHJcbiAgICAgICAgICAgIC8vICAgICBjaGFuZ2VCdG4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gICAgIGNoYW5nZUJ0bi5jbGVhckNsaWNrKCk7XHJcbiAgICAgICAgICAgIC8vICAgICBjaGFuZ2VCdG4ub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5hZ2VudFVzZXJJRCA9IGRhdGEuVXNlcklEO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuYWdlbnRMZXZlbCA9IGFnZW50TDtcclxuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLm5vd0FnZW50TGV2ZWwgPSBhZ2VudEw7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5zZXRBZ2VudExldmVsU2VsZWN0KCk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy51aV9BdXRob3JpemF0aW9uLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDpgJrov4dyYXRl6I635Y+W5Luj55CG57qn5YirXHJcbiAgICBwdWJsaWMgZ2V0QWdlbnRMZXZlbEJ5UmF0ZShyYXRlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChyYXRlIDw9IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuYWdlbnRQZXJjZW50TGlzdC5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBhZ2VudFBlcmNlbnQgPSB0aGlzLmFnZW50UGVyY2VudExpc3RbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFnZW50UGVyY2VudCA9PSByYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6YCa6L+HaHR0cOaLieWPlui0oeeMruS/oeaBr1xyXG4gICAgcHVibGljIGdldENvbW11bml0eUNvbnRyaWJ1dGlvbihtX2xpc3Q/KSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCB1cmwgPSBCYXNlRnJhbWVOYXRpdmUuc2VydmVybGlzdEl0ZW0uYXBpQWRyZXNzICsgXCIvYXBpL0dhbWVsb2cvR2V0R2FtZUFnZW50TG9nXCI7XHJcbiAgICAgICAgLy8gbGV0IHVybCA9IFwiaHR0cDovLzEyOS4yMDQuMTA5LjIxODo4Mi9hcGkvR2FtZWxvZy9HZXRHYW1lQWdlbnRMb2dcIjtcclxuICAgICAgICBsZXQgZ2FtZWlkID0gXCJcIjtcclxuICAgICAgICBpZiAobV9saXN0KSBnYW1laWQgPSBtX2xpc3QuZ2FtZWlkO1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIHVzZXJpZDogTG9naW5WaWV3Q3RyLmluc3RhbmNlLk1vZGVsLm1QbGF5ZXJNb2RlbC51c2VyaWQsXHJcbiAgICAgICAgICAgIGdhbWVpZDogZ2FtZWlkLFxyXG4gICAgICAgICAgICBjbHViaWQ6IExvZ2luVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5jaWR4XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEh0dHBIZWxwRXguaW5zdGFuY2UucG9zdCh1cmwsIHBhcmFtcykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tR2V0R2FtZUFnZW50TG9nLS0tXCIsIHJlcyk7XHJcbiAgICAgICAgICAgIGlmIChyZXMuY29kZSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmluaXRDb21tdW5pdHlDb250cmlidXRpb24ocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFwi6I635Y+W5pel5b+X5aSx6LSlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLWVyci0tLVwiLCBlcnIpXHJcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3LlNob3dUaXBMYWJlbChcIuiOt+WPluaXpeW/l+Wksei0pVwiKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOWKoOi9veekvuWMuui0oeeMrlxyXG4gICAgcHVibGljIGluaXRDb21tdW5pdHlDb250cmlidXRpb24obV9saXN0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCItLS1pbml0Q29tbXVuaXR5Q29udHJpYnV0aW9uLS0tXCIpO1xyXG4gICAgICAgIC8vIHRoaXMudWlfYnRuX2Rvd24uaXRlbXMgPSB0aGlzLmdldEdhbWVUeXBlTGlzdChcIm5hbWVcIik7XHJcbiAgICAgICAgbGV0IGNvbSA9IHRoaXMuZmd1aUNvbXBvbmVudC5nZXRDaGlsZChcIm4xMDFcIikuYXNDb207XHJcbiAgICAgICAgbGV0IGxpc3QgPSBjb20uZ2V0Q2hpbGQoXCJjb250cmlidXRpb25MaXN0XCIpLmFzTGlzdDtcclxuICAgICAgICBsaXN0LnJlbW92ZUNoaWxkcmVuVG9Qb29sKCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBtX2xpc3QubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gbGlzdC5hZGRJdGVtRnJvbVBvb2woKS5hc0NvbTtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBtX2xpc3RbaW5kZXhdO1xyXG4gICAgICAgICAgICBpdGVtLmdldENoaWxkKFwibmFtZVwiKS5hc1RleHRGaWVsZC50ZXh0ID0gZGF0YS53ZWNoYXROYW1lICsgXCJcIjtcclxuICAgICAgICAgICAgaXRlbS5nZXRDaGlsZChcImlkXCIpLmFzVGV4dEZpZWxkLnRleHQgPSBkYXRhLnVzZXJJZCArIFwiXCI7XHJcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGQoXCJ0aW1lXCIpLmFzVGV4dEZpZWxkLnRleHQgPSBkYXRhLmNyZWF0ZURhdGUgKyBcIlwiO1xyXG4gICAgICAgICAgICBpdGVtLmdldENoaWxkKFwiZ29sZFwiKS5hc1RleHRGaWVsZC50ZXh0ID0gTWF0aC5mbG9vcihkYXRhLmFjdGlvbkNvaW4gLyAxMDApLnRvRml4ZWQoMikgKyBcIlwiO1xyXG4gICAgICAgICAgICBpdGVtLmdldENoaWxkKFwiZ2FtZU5hbWVcIikuYXNUZXh0RmllbGQudGV4dCA9IGRhdGEubmFtZSArIFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOagueaNrmtleU5hbWXojrflj5bmuLjmiI/liJfooahcclxuICAgIHB1YmxpYyBnZXRHYW1lVHlwZUxpc3QobV90eXBlOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgdGVtcCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmdhbWVDb25maWcubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmdhbWVDb25maWdbaW5kZXhdO1xyXG4gICAgICAgICAgICB0ZW1wLnB1c2goZWxlbWVudFttX3R5cGVdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRlbXA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Yqg6L2956S+5Yy65aWW5Yqx6K+05piOXHJcbiAgICBwdWJsaWMgaW5pdENvbW11bml0eVJld2FyZEludHJvZHVjZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLWluaXRDb21tdW5pdHlSZXdhcmRJbnRyb2R1Y2UtLS1cIik7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBMb2JieVZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuYWdlbmluZm87XHJcbiAgICAgICAgbGV0IHRleHRUZXh0RmllbGQgPSB0aGlzLmZndWlDb21wb25lbnQuZ2V0Q2hpbGQoXCJuMTE4XCIpLmFzQ29tLmdldENoaWxkKFwibjEwMVwiKS5hc1RleHRGaWVsZDtcclxuICAgICAgICB0ZXh0VGV4dEZpZWxkLnRleHQgPSBcIlwiO1xyXG4gICAgICAgIHRleHRUZXh0RmllbGQudGV4dCA9IGRhdGEucmV3YXJkOy8v56S+5Yy65aWW5Yqx6K+05piOXHJcbiAgICB9XHJcblxyXG4gICAgLy8g55Sz6K+35Yqg5YWl56S+5Yy65oiQ5YqfXHJcbiAgICBwdWJsaWMgYXBwbHlDbHViU3VjY2VzcygpIHtcclxuICAgICAgICAvLyB0aGlzLkhpZGUoKTtcclxuICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJQcm9wZXJ0eShcImMxXCIsIDEpO1xyXG4gICAgICAgIHRoaXMuc2V0Q29udHJvbGxlclByb3BlcnR5KFwidHlwZVwiLCAxKTtcclxuICAgICAgICB0aGlzLmluaXRDb21tdW5pdHlEZXRhaWxzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/pooblj5bkvaPph5HmiJDlip9cclxuICAgIHB1YmxpYyBnZXRjb21taXNpb25TdWNjZXNzKCkge1xyXG4gICAgICAgIHRoaXMudWlfZXh0cmFjdENvbW1pc3Npb24udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS5jc19nZXRhZ2VudGluZm8oTG9naW5WaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmNpZHgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6K6+572u5Luj55CG57qn5Yir6YCJ5Lit54q25oCBXHJcbiAgICBwdWJsaWMgc2V0QWdlbnRMZXZlbFNlbGVjdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkxvYmJ5Vmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5hZ2VuaW5mby5sdiA9PSBcIiwgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmFnZW5pbmZvLmx2KTtcclxuICAgICAgICBpZiAoTG9iYnlWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmFnZW5pbmZvLmx2ID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy51aV8xX0xldmVsLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy51aV8yX0xldmVsLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnVpXzJfTGV2ZWwuc2V0UG9zaXRpb24odGhpcy51aUxldmVsUG9zWzBdLngsIHRoaXMudWlMZXZlbFBvc1swXS55KTtcclxuICAgICAgICAgICAgdGhpcy51aV8zX0xldmVsLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnVpXzNfTGV2ZWwuc2V0UG9zaXRpb24odGhpcy51aUxldmVsUG9zWzFdLngsIHRoaXMudWlMZXZlbFBvc1sxXS55KTtcclxuICAgICAgICB9IGVsc2UgaWYgKExvYmJ5Vmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5hZ2VuaW5mby5sdiA9PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMudWlfMV9MZXZlbC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudWlfMl9MZXZlbC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudWlfM19MZXZlbC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy51aV8zX0xldmVsLnNldFBvc2l0aW9uKHRoaXMudWlMZXZlbFBvc1swXS54LCB0aGlzLnVpTGV2ZWxQb3NbMF0ueSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5hZ2VudExldmVsICE9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hZ2VudFBlcmNlbnQgPSB0aGlzLmFnZW50UGVyY2VudExpc3RbdGhpcy5hZ2VudExldmVsIC0gMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudWlfYnRuX2FnZW50MS5zZWxlY3RlZCA9IHRoaXMuYWdlbnRMZXZlbCA9PSAxO1xyXG4gICAgICAgIHRoaXMudWlfYnRuX2FnZW50Mi5zZWxlY3RlZCA9IHRoaXMuYWdlbnRMZXZlbCA9PSAyO1xyXG4gICAgICAgIHRoaXMudWlfYnRuX2FnZW50My5zZWxlY3RlZCA9IHRoaXMuYWdlbnRMZXZlbCA9PSAzO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6K6+572u5Luj55CG57qn5Yir5oiQ5YqfIFxyXG4gICAgcHVibGljIHNldEFnZW50TGV2ZWxTdWNjZXNzKCkge1xyXG4gICAgICAgIHRoaXMudWlfQXV0aG9yaXphdGlvbi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc1NldEFnZW50TGV2ZWxTdWNjZXNzID0gdHJ1ZTtcclxuICAgICAgICBMb2JieVZpZXdDdHIuaW5zdGFuY2UuY3NfZ2V0YWdlbnRpbmZvKExvZ2luVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5jaWR4KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDovazlh7rmiJDlip9cclxuICAgIHB1YmxpYyBvdXRGdW5kY2hhbmdlQ2x1YigpIHtcclxuICAgICAgICB0aGlzLnVpX2ludG9GdW5kLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVpX291dEZ1bmQudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudWlfaW50b0dvbGQudGV4dCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy51aV9vdXRHb2xkLnRleHQgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMudWlfZXh0cmFjdENvbW1pc3Npb24udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS5jc19nZXRhZ2VudGluZm8oTG9naW5WaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmNpZHgpO1xyXG4gICAgfVxyXG59Il19