import { AudioManager } from "../../../../Script/BaseFrame/AudioManager";
import { CommonCtr } from "../../../../Script/BaseFrame/CommonCtr";
import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import HttpHelpEx from "../../../../Script/Common/Managers/HttpHelpEx";
import { UIUtil } from "../../../../Script/Common/UIUtil";
import { AppConst } from "../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst";
import { BaseFrameNative } from "../../../../Script/BaseFrameNative";
import { LoginViewCtr } from "../../Login/LoginViewCtr";
import LobbyViewCtr from "../LobbyViewCtr";
import CExtractRecord from "./CExtractRecord";
import NativeMethod from "../../NativeMethod";

/**
 * @description 社區
 */
export default class CommunityView extends ViewBase {
    protected get packageResourceName(): string {
        return "gameHall";
    }
    protected get packageName(): string {
        return "res/Lobby";
    }
    protected get componentName(): string {
        return "Community";
    }

    private ui_btn_communityBreak: fgui.GButton = null; //返回
    private ui_btn_service: fgui.GButton = null; //客服
    private ui_btn_extractRecord: fgui.GButton = null;
    private ui_btn_joinCommunitty: fgui.GButton = null; //加入
    private ui_inputCommNum: fgui.GTextInput = null; //加入社区ID输入框
    private ui_btn_search: fgui.GButton = null; //社区成员搜索按钮
    private ui_inputIdOrAccent: fgui.GTextInput = null; //社区成员输入框
    private ui_btn_down: fgui.GComboBox = null; //下拉框
    private ui_btn_commission: fgui.GButton = null; //领取
    private ui_extractCommission: fgui.GComponent = null; //领取二次确认框
    private ui_btn_extractqx: fgui.GButton = null;
    private ui_btn_extractqd: fgui.GButton = null;
    private ui_Authorization: fgui.GComponent = null; //代理级别设置
    private ui_btn_sqPanelqx: fgui.GButton = null;
    private ui_btn_sqPanelsq: fgui.GButton = null;
    private ui_btn_agent1: fgui.GButton = null;
    private ui_btn_agent2: fgui.GButton = null;
    private ui_btn_agent3: fgui.GButton = null;
    private ui_1_Level: fgui.GGroup = null;
    private ui_2_Level: fgui.GGroup = null;
    private ui_3_Level: fgui.GGroup = null;

    private cextractRecord: CExtractRecord = null;

    private gameConfig = [
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
    ]
    private nowAgentLevel: number = 0;
    private agentLevel: number = 0;
    private agentPercent: number = 0;
    private agentPercentList: number[] = [60, 12, 8];
    private agentUserID: number = 0;
    private isSetAgentLevelSuccess: boolean = false;
    private uiLevelPos: cc.Vec3[] = [];
    private typeController: fgui.Controller;

    /**基金記錄 */
    private ui_btn_fundlog: fgui.GButton = null;
    /**转入 */
    private ui_btn_into: fgui.GButton = null;
    /**转出 */
    private ui_btn_rollout: fgui.GButton = null;
    /**详细查询 */
    private ui_btn_detailedquery: fgui.GButton = null;

    private ui_intoFund: fgui.GComponent = null; //转入确认框
    private ui_intoGold: fgui.GTextInput = null;

    private ui_outFund: fgui.GComponent = null; //转出确认框
    private ui_outGold: fgui.GTextInput = null;

    private ui_agentIntroduced: fgui.GComponent = null; //社区联系方式
    private ui_unionContact: fgui.GComponent = null; //联盟联系方式

    private ui_btn_shequkefu: fgui.GButton = null; // 社区客服

    createChildComponents() {
        super.createChildComponents();
        this.fguiComponent.visible = false;
    }

    allChildCreated() {
        super.allChildCreated();
    }

    OnLoadCompleted() {
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
    }


    public addTouchCallback() {
        //关闭
        this.ui_btn_communityBreak.onClick(() => {
            AudioManager.Singleton.play('CommunityView', "button");
            this.Hide();
        })
        // 基金记录
        this.ui_btn_fundlog.onClick(() => {
            AudioManager.Singleton.play('CommunityView', "button");
            if (this.cextractRecord) {
                this.cextractRecord.Show();
            } else {
                this.cextractRecord = this.addFguiComponent(CExtractRecord);
            }
        })
        /**详细查询 按钮 需要跳转到浏览器打开网页 */
        this.ui_btn_detailedquery.onClick(() => {
            AudioManager.Singleton.play('CommunityView', "button");
            let url = BaseFrameNative.serverList.agentsysyUrl;
            if (url && url != "") {
                cc.sys.openURL(url);
                // LobbyViewCtr.instance.view.openWebsite.call(LobbyViewCtr.instance.view, url);
            } else {
                CommonCtr.instance.view.ShowTipLabel("请联系客服！");
            }
        })
        //客服
        this.ui_btn_service.onClick(() => {
            AudioManager.Singleton.play('CommunityView', "button");
            UIUtil.kefuFunction(LobbyViewCtr.instance.view.openWebsite.bind(LobbyViewCtr.instance.view));
        })
        this.ui_btn_shequkefu.onClick(() => {
            AudioManager.Singleton.play('CommunityView', "button");
            UIUtil.kefuFunction(LobbyViewCtr.instance.view.openWebsite.bind(LobbyViewCtr.instance.view));
        })
        //加入按钮
        this.ui_btn_joinCommunitty.onClick(() => {
            AudioManager.Singleton.play('CommunityView', "button");
            let id = this.ui_inputCommNum.text;
            if (id == "") {
                CommonCtr.instance.view.ShowTipLabel("請輸入正確的社區號");
            } else {
                LobbyViewCtr.instance.cs_apply_club(Number(id), "");
            }
        })
        //社区成员搜索按钮
        this.ui_btn_search.onClick(() => {
            AudioManager.Singleton.play('CommunityView', "button");
            let searchText = this.ui_inputIdOrAccent.text;
            this.initCommunityMembers(searchText);
        })
        //下拉框
        this.ui_btn_down.node.on(fgui.Event.STATUS_CHANGED, () => {
            AudioManager.Singleton.play('CommunityView', "button");
            console.log(this.gameConfig[this.ui_btn_down.selectedIndex]);
            let list = this.gameConfig[this.ui_btn_down.selectedIndex];
            this.getCommunityContribution(list);
        }, this)
        //领取
        this.ui_btn_commission.onClick(() => {
            // AudioManager.Singleton.play('CommunityView', "button");
            // let gold: number = LobbyViewCtr.instance.Model.ageninfo.GoldC;
            // if (gold <= 0) {
            //     CommonCtr.instance.view.ShowTipLabel("没有可以领取的佣金");
            //     return;
            // }
            // this.ui_extractCommission.getChild("extractGold").asTextField.text = UIUtil.formatNumber100(gold) + "";
            // this.ui_extractCommission.visible = true;
        })
        this.ui_btn_extractqx.onClick(() => {
            AudioManager.Singleton.play('CommunityView', "button");
            this.ui_extractCommission.visible = false;
        })
        this.ui_btn_extractqd.onClick(() => {
            AudioManager.Singleton.play('CommunityView', "button");
            let gold: number = LobbyViewCtr.instance.Model.ageninfo.GoldC;
            let cidx: number = LoginViewCtr.instance.Model.cidx;
            // LobbyViewCtr.instance.cs_getcommision(gold, cidx);
            // 改为领取基金
            LobbyViewCtr.instance.cs_fundchange_club(cidx, 2, gold);
        })
        //代理级别设置
        this.ui_btn_sqPanelqx.onClick(() => {
            AudioManager.Singleton.play('CommunityView', "button");
            this.ui_Authorization.visible = false;
        })
        this.ui_btn_sqPanelsq.onClick(() => {
            AudioManager.Singleton.play('CommunityView', "button");
            if (this.nowAgentLevel == this.agentLevel) {
                CommonCtr.instance.view.ShowTipLabel("代理级别未改变");
            } else {
                let idx = LoginViewCtr.instance.Model.cidx;
                LobbyViewCtr.instance.cs_setagent_gm(idx, this.agentUserID, this.agentPercent);
            }
        })
        this.ui_btn_agent1.onClick(() => {
            AudioManager.Singleton.play('CommunityView', "button");
            this.agentLevel = 1;
            this.setAgentLevelSelect();
        })
        this.ui_btn_agent2.onClick(() => {
            AudioManager.Singleton.play('CommunityView', "button");
            this.agentLevel = 2;
            this.setAgentLevelSelect();
        })
        this.ui_btn_agent3.onClick(() => {
            AudioManager.Singleton.play('CommunityView', "button");
            this.agentLevel = 3;
            this.setAgentLevelSelect();
        })
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
        this.ui_btn_rollout.onClick(() => {
            AudioManager.Singleton.play('CommunityView', "button");
            this.ui_outGold.text = "";
            let gold: number = LobbyViewCtr.instance.Model.ageninfo.GoldC;
            if (gold <= 0) {
                CommonCtr.instance.view.ShowTipLabel("沒有可以領取的基金");
                return;
            }
            this.ui_outFund.getChild("balanceText").asTextField.text = "餘額：" + UIUtil.formatNumber100(gold);
            this.ui_outFund.visible = true;
        })
        this.ui_outFund.getChild("btn_outqx").asButton.onClick(() => {
            AudioManager.Singleton.play('CommunityView', "button");
            this.ui_outFund.visible = false;
        })
        this.ui_outFund.getChild("btn_outqd").asButton.onClick(() => {
            AudioManager.Singleton.play('CommunityView', "button");
            if (this.ui_outGold.text == "") {
                CommonCtr.instance.view.ShowTipLabel("請輸入金額");
                return;
            }
            if (!UIUtil.isNumber(this.ui_outGold.text)) {
                CommonCtr.instance.view.ShowTipLabel("請輸入數字");
                return;
            }
            let gold: number = Number(this.ui_outGold.text);
            let yue: number = LobbyViewCtr.instance.Model.ageninfo.GoldC;
            if (Number(gold) * 100 > Number(yue)) {
                CommonCtr.instance.view.ShowTipLabel("可轉出基金不足");
                return;
            }
            let cidx: number = LoginViewCtr.instance.Model.cidx;
            LobbyViewCtr.instance.cs_fundchange_club(cidx, 2, gold * 100);
        })
        this.ui_outGold.on(fgui.Event.TEXT_CHANGE, this.changedOutText, this);
        //转入
        this.ui_btn_into.onClick(() => {
            AudioManager.Singleton.play('CommunityView', "button");
            this.ui_intoGold.text = "";
            //更新显示余额
            let yue = AppConst.mPlayerModel.gold;
            console.log("AppConst.mPlayerModel == ", AppConst.mPlayerModel);
            this.ui_intoFund.getChild("balanceText").asTextField.text = "餘額：" + UIUtil.formatNumber100(yue);
            this.ui_intoFund.visible = true;
        })
        this.ui_intoFund.getChild("btn_intoqx").asButton.onClick(() => {
            AudioManager.Singleton.play('CommunityView', "button");
            this.ui_intoFund.visible = false;
        })
        this.ui_intoFund.getChild("btn_intoqd").asButton.onClick(() => {
            AudioManager.Singleton.play('CommunityView', "button");
            if (this.ui_intoGold.text == "") {
                CommonCtr.instance.view.ShowTipLabel("請輸入金額");
                return;
            }
            if (!UIUtil.isNumber(this.ui_intoGold.text)) {
                CommonCtr.instance.view.ShowTipLabel("請輸入數字");
                return;
            }
            let gold: number = Number(this.ui_intoGold.text);
            let yue = AppConst.mPlayerModel.gold;
            if (Number(gold) * 100 > Number(yue)) {
                CommonCtr.instance.view.ShowTipLabel("可轉入餘額不足" + gold);
                return;
            }
            let cidx: number = LoginViewCtr.instance.Model.cidx;
            LobbyViewCtr.instance.cs_fundchange_club(cidx, 1, gold * 100);
        })
        this.ui_intoGold.on(fgui.Event.TEXT_CHANGE, this.changedText, this);
    }

    public changedText() {
        let text = this.ui_intoGold.text;
        if (UIUtil.isNumber(text)) {
            let yue = AppConst.mPlayerModel.gold;
            if (Number(text) > UIUtil.formatNumber(yue)) {
                CommonCtr.instance.view.ShowTipLabel("超過最大可轉入金額");
            }
        } else {
            CommonCtr.instance.view.ShowTipLabel("請輸入數字");
        }
    }

    public changedOutText() {
        let text = this.ui_outGold.text;
        if (UIUtil.isNumber(text)) {
            let yue = LobbyViewCtr.instance.Model.ageninfo.GoldC;
            if (Number(text) > UIUtil.formatNumber(yue)) {
                CommonCtr.instance.view.ShowTipLabel("超過最大可轉出金額");
            }
        } else {
            CommonCtr.instance.view.ShowTipLabel("請輸入數字");
        }
    }

    public stateChanged() {
        let index = this.typeController.selectedIndex;
        switch (index) {
            case 1://社区详情
                AudioManager.Singleton.play('CommunityView', "button");
                // this.initCommunityDetails();
                this.agentInfoShow();
                break;
            case 2://社区成员
                AudioManager.Singleton.play('CommunityView', "button");
                this.initCommunityMembers();
                break;
            case 3://社区贡献
                AudioManager.Singleton.play('CommunityView', "button");
                let com = this.fguiComponent.getChild("n101").asCom;
                let list = com.getChild("contributionList").asList;
                list.removeChildrenToPool();
                let slist = this.gameConfig[this.ui_btn_down.selectedIndex];
                this.getCommunityContribution(slist);
                break;
            case 4://社区奖励说明
                AudioManager.Singleton.play('CommunityView', "button");
                this.initCommunityRewardIntroduce();
                break;
            case 5://联盟联系方式
                AudioManager.Singleton.play('CommunityView', "button");
                this.initUnionContact(null, this.ui_unionContact, 1);
                this.getUnionContact(1);
                break;
        }
    }

    public Show() {
        super.Show();
        // new
        // this.setControllerProperty("c1", 2);
        // this.setControllerProperty("type", 1);
        // this.initCommunityDetails();
        this.agentInfoShow();
    }

    // 社区详情显示
    public agentInfoShow() {
        // 判断是否显示社区详情
        if (LoginViewCtr.instance.Model.cidx == 0) {
            this.setControllerProperty("c1", 0);
            this.setControllerProperty("type", 0);
        } else {
            if (this.isSetAgentLevelSuccess) {
                this.isSetAgentLevelSuccess = false;
                this.setControllerProperty("type", 2);
                this.initCommunityMembers();
            } else {
                // this.setControllerProperty("c1", 1);
                // this.setControllerProperty("type", 1);
                // // this.initCommunityDetails();
                // 代理等级为1才显示转入基金等 不为1显示上级联系方式 =1表示是创建者
                this.setControllerProperty("type", 1);
                if (LobbyViewCtr.instance.Model.ageninfo.clubuserid == AppConst.mPlayerModel.userid) {
                    this.setControllerProperty("c1", 1);
                    this.fguiComponent.getChild("n61").asCom.visible = true;
                    this.ui_agentIntroduced.visible = false;
                    this.initCommunityDetails();
                } else {
                    this.setControllerProperty("c1", 2);
                    this.initUnionContact(null, this.ui_agentIntroduced, 2);
                    this.fguiComponent.getChild("n61").asCom.visible = false;
                    this.ui_agentIntroduced.visible = true;
                    this.getUnionContact(2);
                }
            }
        }
    }

    // 获取联盟联系方式
    public getUnionContact(m_type: number) {
        let self = this;
        //名称
        let orgName: string = "";
        if (m_type == 1) {
            let clubNameText = self.ui_unionContact.getChild("clubName");
            orgName = "联盟：" + LobbyViewCtr.instance.Model.ageninfo.allidname;
            clubNameText.text = orgName;
        } else if (m_type == 2) {
            let clubNameText = self.ui_agentIntroduced.getChild("clubName");
            orgName = "社区：" + LobbyViewCtr.instance.Model.ageninfo.clubname;
            clubNameText.text = orgName;
        }

        let url = BaseFrameNative.serverlistItem.apiAdress + "/api/Gamelog/GetContactInfo" + `?clubid=${LoginViewCtr.instance.Model.cidx}`;
        HttpHelpEx.instance.get(url)
            .then((res) => {
                console.log("---GetContactInfo---", res);
                if (res.code == 1) {
                    if (m_type == 1) {
                        self.initUnionContact(res.data, self.ui_unionContact, m_type);
                    } else if (m_type == 2) {
                        self.initUnionContact(res.data, self.ui_agentIntroduced, m_type);
                    }
                } else {
                    CommonCtr.instance.view.ShowTipLabel("获取联系方式失败");
                }
            })
    }

    public initUnionContact(data, m_node: fgui.GComponent, m_type: number) {
        let contactText1 = m_node.getChild("contactText1").asTextField;
        contactText1.visible = false;
        let contactText2 = m_node.getChild("contactText2").asTextField;
        contactText2.visible = false;
        let contactText3 = m_node.getChild("contactText3").asTextField;
        contactText3.visible = false;
        let downloadText1 = m_node.getChild("downloadText1").asTextField;
        downloadText1.visible = false;
        let downloadText2 = m_node.getChild("downloadText2").asTextField;
        downloadText2.visible = false;
        let downloadText3 = m_node.getChild("downloadText3").asTextField;
        downloadText3.visible = false;
        let btn_copy1 = m_node.getChild("btn_copy1").asButton;
        btn_copy1.visible = false;
        let btn_copy2 = m_node.getChild("btn_copy2").asButton;
        btn_copy2.visible = false;
        let btn_copy3 = m_node.getChild("btn_copy3").asButton;
        btn_copy3.visible = false;
        if (data) {
            let list = [];
            for (let index = 0; index < data.length; index++) {
                const element = data[index];
                if (element.role == m_type && element.no && element.no != "") {
                    list.push(element);
                }
            }
            for (let index = 0; index < list.length; index++) {
                let num: number = index + 1;
                const element = list[index];
                if (num <= 3) {
                    let contactText = m_node.getChild("contactText" + num).asTextField;
                    contactText.visible = true;
                    if (element.name && element.name != "") {
                        contactText.text = element.name + "：" + element.no;
                    } else {
                        contactText.text = element.no;
                    }
                    if (element.url && element.url != "") {
                        let downloadText = m_node.getChild("downloadText" + num).asTextField;
                        downloadText.visible = true;
                        downloadText.text = "地址：" + element.url;
                        let btn_copy = m_node.getChild("btn_copy" + num).asButton;
                        btn_copy.visible = true;
                        btn_copy.clearClick();
                        btn_copy.onClick(() => {
                            AudioManager.Singleton.play('CommunityView', "button");
                            let download_url: string = element.url;
                            if (CC_JSB) {
                                NativeMethod.copyTextString(download_url);
                                CommonCtr.instance.view.ShowTipLabel("复制成功");
                            } else {
                                let bool = this.commandCopy(download_url);
                                let str = bool ? "复制成功" : "复制失败";
                                CommonCtr.instance.view.ShowTipLabel(str);
                            }
                        })
                    }
                }
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
    }

    public jumpOpenURL(url: string) {
        cc.sys.openURL(url);
    }

    /**复制 */
    public commandCopy(input) {
        const el = document.createElement('textarea');
        el.value = input;
        // Prevent keyboard from showing on mobile
        el.setAttribute('readonly', '');
        //el.style.contain = 'strict';
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        el.style.fontSize = '12pt'; // Prevent zooming on iOS
        const selection = getSelection();
        let originalRange: any = false;
        if (selection.rangeCount > 0) {
            originalRange = selection.getRangeAt(0);
        }
        document.body.appendChild(el);
        el.select();
        // Explicit selection workaround for iOS
        el.selectionStart = 0;
        el.selectionEnd = input.length;
        let success = false;
        try {
            success = document.execCommand('copy');
        } catch (err) { }

        document.body.removeChild(el);

        if (originalRange) {
            selection.removeAllRanges();
            selection.addRange(originalRange);
        }
        return success;
    };

    // 加载社区详情
    public initCommunityDetails() {
        console.log("---initCommunityDetails---");
        let com = this.fguiComponent.getChild("n61").asCom;
        let data = LobbyViewCtr.instance.Model.ageninfo;
        com.getChild("myId").asTextField.text = data.Code + ""; //id
        com.getChild("subordinateNum").asTextField.text = data.calist.length + ""; //下級玩家
        com.getChild("newlyAdded").asTextField.text = data.taddnum + ""; //今日新增
        com.getChild("todayActive").asTextField.text = data.tactive + ""; //今日活躍
        com.getChild("Cumulative").asTextField.text = UIUtil.formatNumber100(data.income).toFixed(2) + ""; //纍計佣金
        com.getChild("todaycommission").asTextField.text = UIUtil.formatNumber100(data.tCommision).toFixed(2) + ""; //今日佣金
        com.getChild("extract").asTextField.text = UIUtil.formatNumber100(data.GoldHistoryC).toFixed(2) + ""; //纍計提取
        com.getChild("canmentionExtract").asTextField.text = UIUtil.formatNumber(data.GoldC) + ""; //可提佣金
        this.fguiComponent.getChild("n61").asCom.getChild("n64").asTextField.text = data.clubname; //社区名字
    }

    // 加载社区成员
    public initCommunityMembers(searchID: string = "") {
        console.log("---initCommunityMembers---");
        let com = this.fguiComponent.getChild("n89").asCom;
        let list = com.getChild("membersList").asList;
        list.removeChildrenToPool();

        let calist = LobbyViewCtr.instance.Model.ageninfo.calist;
        if (searchID != "") {
            let isFind: boolean = false;
            for (let index = 0; index < calist.length; index++) {
                const element = calist[index];
                if (element.UserID + "" == searchID) {
                    calist = [element];
                    isFind = true;
                    continue;
                }
            }
            if (!isFind) {
                CommonCtr.instance.view.ShowTipLabel("未找到此用户");
            }
        }
        for (let index = 0; index < calist.length; index++) {
            let item = list.addItemFromPool().asCom;
            let data = calist[index];
            item.getChild("id").asTextField.text = data.UserID + "";
            item.getChild("name").asTextField.text = data.name + "";
            let agentL: number = this.getAgentLevelByRate(data.rate);
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
    }

    // 通过rate获取代理级别
    public getAgentLevelByRate(rate: number): number {
        if (rate <= 0) {
            return 0;
        } else {
            for (let index = 0; index < this.agentPercentList.length; index++) {
                let agentPercent = this.agentPercentList[index];
                if (agentPercent == rate) {
                    return index + 1;
                }
            }
            return 0;
        }
    }

    // 通过http拉取贡献信息
    public getCommunityContribution(m_list?) {
        let self = this;
        let url = BaseFrameNative.serverlistItem.apiAdress + "/api/Gamelog/GetGameAgentLog";
        // let url = "http://129.204.109.218:82/api/Gamelog/GetGameAgentLog";
        let gameid = "";
        if (m_list) gameid = m_list.gameid;
        let params = {
            userid: LoginViewCtr.instance.Model.mPlayerModel.userid,
            gameid: gameid,
            clubid: LoginViewCtr.instance.Model.cidx
        }
        HttpHelpEx.instance.post(url, params).then((res) => {
            console.log("---GetGameAgentLog---", res);
            if (res.code == 1) {
                self.initCommunityContribution(res.data);
            } else {
                CommonCtr.instance.view.ShowTipLabel("获取日志失败");
            }
        }).catch((err) => {
            console.log("---err---", err)
            CommonCtr.instance.view.ShowTipLabel("获取日志失败");
        })
    }

    // 加载社区贡献
    public initCommunityContribution(m_list) {
        console.log("---initCommunityContribution---");
        // this.ui_btn_down.items = this.getGameTypeList("name");
        let com = this.fguiComponent.getChild("n101").asCom;
        let list = com.getChild("contributionList").asList;
        list.removeChildrenToPool();

        for (let index = 0; index < m_list.length; index++) {
            let item = list.addItemFromPool().asCom;
            let data = m_list[index];
            item.getChild("name").asTextField.text = data.wechatName + "";
            item.getChild("id").asTextField.text = data.userId + "";
            item.getChild("time").asTextField.text = data.createDate + "";
            item.getChild("gold").asTextField.text = Math.floor(data.actionCoin / 100).toFixed(2) + "";
            item.getChild("gameName").asTextField.text = data.name + "";
        }
    }

    // 根据keyName获取游戏列表
    public getGameTypeList(m_type: string) {
        let temp = [];
        for (let index = 0; index < this.gameConfig.length; index++) {
            const element = this.gameConfig[index];
            temp.push(element[m_type]);
        }
        return temp;
    }

    // 加载社区奖励说明
    public initCommunityRewardIntroduce() {
        console.log("---initCommunityRewardIntroduce---");
        let data = LobbyViewCtr.instance.Model.ageninfo;
        let textTextField = this.fguiComponent.getChild("n118").asCom.getChild("n101").asTextField;
        textTextField.text = "";
        textTextField.text = data.reward;//社区奖励说明
    }

    // 申请加入社区成功
    public applyClubSuccess() {
        // this.Hide();
        this.setControllerProperty("c1", 1);
        this.setControllerProperty("type", 1);
        this.initCommunityDetails();
    }

    //领取佣金成功
    public getcommisionSuccess() {
        this.ui_extractCommission.visible = false;
        LobbyViewCtr.instance.cs_getagentinfo(LoginViewCtr.instance.Model.cidx);
    }

    //设置代理级别选中状态
    public setAgentLevelSelect() {
        console.log("LobbyViewCtr.instance.Model.ageninfo.lv == ", LobbyViewCtr.instance.Model.ageninfo.lv);
        if (LobbyViewCtr.instance.Model.ageninfo.lv == 1) {
            this.ui_1_Level.visible = false;
            this.ui_2_Level.visible = true;
            this.ui_2_Level.setPosition(this.uiLevelPos[0].x, this.uiLevelPos[0].y);
            this.ui_3_Level.visible = true;
            this.ui_3_Level.setPosition(this.uiLevelPos[1].x, this.uiLevelPos[1].y);
        } else if (LobbyViewCtr.instance.Model.ageninfo.lv == 2) {
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
    }

    //设置代理级别成功 
    public setAgentLevelSuccess() {
        this.ui_Authorization.visible = false;
        this.isSetAgentLevelSuccess = true;
        LobbyViewCtr.instance.cs_getagentinfo(LoginViewCtr.instance.Model.cidx);
    }

    // 转出成功
    public outFundchangeClub() {
        this.ui_intoFund.visible = false;
        this.ui_outFund.visible = false;
        this.ui_intoGold.text = "";
        this.ui_outGold.text = "";
        this.ui_extractCommission.visible = false;
        LobbyViewCtr.instance.cs_getagentinfo(LoginViewCtr.instance.Model.cidx);
    }
}