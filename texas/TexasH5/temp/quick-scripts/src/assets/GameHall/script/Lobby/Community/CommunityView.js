"use strict";
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