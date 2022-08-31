import { AudioManager } from "../../../Script/BaseFrame/AudioManager";
import { CommonCtr } from "../../../Script/BaseFrame/CommonCtr";
import CommonView from "../../../Script/BaseFrame/CommonView";
import { PublicMethods } from "../../../Script/BaseFrame/PublicMethods";
import { SceneManager } from "../../../Script/BaseFrame/SceneManager";
import StatusbarView from "../../../Script/BaseFrame/StatusbarView";
import ViewBase from "../../../Script/BaseFrame/ViewBase";
import { UIUtil } from "../../../Script/Common/UIUtil";
import { AppConst } from "../../../Script/modules/@slotsmaster/ui-common/lib/AppConst";
import { BaseFrameNative } from "../../../Script/BaseFrameNative";
import { LoginViewCtr } from "../Login/LoginViewCtr";
import NativeMethod from "../NativeMethod";
import ActivityDetails from "./activity/ActivityDetails";
import ActivityView from "./activity/ActivityView";
import CardInfoItem from "./career/CardInfoItem";
import CareerView from "./career/CareerView";
import MyCardDerailsView from "./career/MyCardDerailsView";
import MyCardHistory from "./career/MyCardHistory";
import MyCardSpectrumView from "./career/MyCardSpectrumView";
import MySsDerailsView from "./career/MySsDerailsView";
import CommunityView from "./Community/CommunityView";
import Broadcast from "./Components/Broadcast";
import RoomItem from "./Components/RoomItem";
import SlideShow from "./Components/SlideShow";
import createTableTexas from "./createTable/createTableTexas";
import EntertainmentView from "./entertainment/EntertainmentView";
import GameItemInEntertainment from "./entertainment/GameItemInEntertainment";
import FlowingWaterView from "./flowingwater/FlowingWaterView";
import MyInformationView from "./flowingwater/MyInformationView";
import WalletRecordView from "./flowingwater/WalletRecordView";
import { MyKnapsackItem } from "./knapsack/MyKnapsackItem";
import MyKnapsackView from "./knapsack/MyKnapsackView";
import { TableRoomInfoTex } from "./LobbyNetData";
import LobbyViewCtr from "./LobbyViewCtr";
import MatchBlindsItem from "./match/MatchBlindsItem";
import MatchDerailsView from "./match/MatchDerailsView";
import MatchItem from "./match/MatchItem";
import MatchPlayInfoItem from "./match/MatchPlayInfoItem";
import MatchRewardTypeOne from "./match/MatchRewardTypeOne";
import MatchRewardTypeThree from "./match/MatchRewardTypeThree";
import MatchRewardTypeTwo from "./match/MatchRewardTypeTwo";
import MatchView from "./match/MatchView";
import MeView from "./Me/MeView";
import ModifyLoginPwdView from "./modifyLoginPwd/ModifyLoginPwdView";
import ModifyPlayPwdView from "./modifyPlayPwd/ModifyPlayPwdView";
import MyinfoView from "./myinfo/MyinfoView";
import PopupView from "./pop/PopupView";
import AboutUsView from "./settingpanel/AboutUsView";
import LanguageView from "./settingpanel/LanguageView";
import PrivacyView from "./settingpanel/PrivacyView";
import SettingView from "./settingpanel/SettingView";
import ShareView from "./share/ShareView";
import BankcardDerails from "./topup/BankcardDerails";
import TopupView from "./topup/TopupView";
import ViptopDerails from "./topup/ViptopDerails";
import VirtualDerails from "./topup/VirtualDerails";
import ZfbDerails from "./topup/ZfbDerails";
import MyverificationPwdView from "./transfer/MyverificationPwdView";
import TransferView from "./transfer/TransferView";
import MyVipPrivilegeView from "./vip/MyVipPrivilegeView";
import VipConfirmAdressView from "./vip/VipConfirmAdressView";
import VipConfirmOrderView from "./vip/VipConfirmOrderView";
import VipDerailsView from "./vip/VipDerailsView";
import VipExchangeLogView from "./vip/VipExchangeLogView";
import VipExidAdressView from "./vip/VipExidAdressView";
import VipShoppingView from "./vip/VipShoppingView";
import WelfareQuestItem from "./welfare/WelfareQuestItem";
import WelfareView from "./welfare/WelfareView";
import WithdrawalView from "./Withdrawal/WithdrawalView";
import redPacket from "./redPacket/redPacket";
import { ReconnectManager } from "../../../Script/BaseFrame/ReconnectManager";
import GameUpdateMgr from "../GameUpdateMgr";
import SetPayPassword from "./Me/SetPayPassword";



const { ccclass, property } = cc._decorator;
@ccclass
export default class LobbyView extends ViewBase {
    protected get needProcess(): boolean {
        return true;
    }
    protected get packageResourceName(): string {
        return "gameHall";
    }
    protected get packageName(): string {
        return "res/Lobby";
    }
    protected get componentName(): string {
        return "Lobby";
    }

    @property(cc.Node)
    loadNode: cc.Node = null;

    onLoad() {
        NativeMethod.changeOrientationH(false);
        let filename: string;
        switch (AppConst.languageType) {
            case 1:
                filename = "hallZWFT";
                break;
            case 2:
                filename = "hallZWJT";
                break;
            case 3:
                break;
            case 4:
                break;
            default:
                filename = "hallZWFT";
                break;
        }
        fgui.UIObjectFactory.setExtension("ui://Lobby/Slideshow", SlideShow);
        fgui.UIObjectFactory.setExtension("ui://Lobby/Broadcast", Broadcast);
        fgui.UIObjectFactory.setExtension("ui://Lobby/roomItem", RoomItem);
        fgui.UIObjectFactory.setExtension("ui://Lobby/me", MeView);
        fgui.UIObjectFactory.setExtension("ui://Lobby/zfbDerails", ZfbDerails);
        fgui.UIObjectFactory.setExtension("ui://Lobby/bankcardDerails", BankcardDerails);
        fgui.UIObjectFactory.setExtension("ui://Lobby/VirtualDerails", VirtualDerails);
        fgui.UIObjectFactory.setExtension("ui://Lobby/viptopDerails", ViptopDerails);
        fgui.UIObjectFactory.setExtension("ui://Lobby/entertainment", EntertainmentView);
        fgui.UIObjectFactory.setExtension("ui://Lobby/activity", ActivityView);
        fgui.UIObjectFactory.setExtension("ui://Lobby/gameItem", GameItemInEntertainment);
        fgui.UIObjectFactory.setExtension("ui://Lobby/cardInfoItem", CardInfoItem);
        fgui.UIObjectFactory.setExtension("ui://Lobby/matchItem", MatchItem);
        fgui.UIObjectFactory.setExtension("ui://Lobby/knapsackItem", MyKnapsackItem);
        fgui.UIObjectFactory.setExtension("ui://Lobby/questItem", WelfareQuestItem);
        fgui.UIObjectFactory.setExtension("ui://Lobby/mzTableItem", MatchBlindsItem);
        fgui.UIObjectFactory.setExtension("ui://Lobby/playInfoItem", MatchPlayInfoItem);
        fgui.UIObjectFactory.setExtension("ui://Lobby/ssWinItem", MatchRewardTypeOne);
        fgui.UIObjectFactory.setExtension("ui://Lobby/ssWinItem1", MatchRewardTypeTwo);
        fgui.UIObjectFactory.setExtension("ui://Lobby/ssWinItem2", MatchRewardTypeThree);

        fgui.UIConfig.globalModalWaiting = "ui://Lobby/GlobalModalWaiting";
        if (AppConst.languageType == 1) {
            fgui.addLoadHandler();
            fgui.GRoot.create();
            super.onLoad();
            return;
        }
        let bundle = cc.assetManager.getBundle("gameHall");
        bundle.load(`/res/language/${filename}`, (err, data: any) => {
            if (err) {
                cc.log("语言文件加载失败");
                fgui.addLoadHandler();
                fgui.GRoot.create();
                super.onLoad();
                return;
            }
            fgui.UIPackage.setStringsSource(data.text);
            fgui.addLoadHandler();
            fgui.GRoot.create();
            super.onLoad();
        })
    }

    /**游戲选择的控制器 */
    private selectGameController: fgui.Controller;
    /**场次选择的控制器 */
    private selectLimitController: fgui.Controller;
    /**房间列表 */
    private ui_roomList: fgui.GList = null;
    /**金币 */
    private ui_Hallgold: fgui.GTextField = null;
    private ui_btn_serviveTop: fgui.GButton = null; // 客服
    private ui_vip: fgui.GRichTextField = null;
    private ui_btn_hallAddGold: fgui.GButton = null;
    private ui_join_1: fgui.GComponent = null;
    private ui_btn_createTexas: fgui.GButton = null;
    private ui_btn_limitEmty: fgui.GButton = null;

    private input_joinCommunitty: fgui.GTextInput = null;
    private btn_joinCommunitty: fgui.GButton = null;

    private tipView: CommonView;

    private ui_bottomBar: fgui.GComponent = null;
    public barController: fgui.Controller;

    public meView: MeView;
    public topupView: TopupView;
    public transferView: TransferView;
    public withdrawalView: WithdrawalView;
    public welfareView: WelfareView;
    public settingView: SettingView;
    public modifyLoginPwdView: ModifyLoginPwdView;
    public modifyPlayPwdView: ModifyPlayPwdView;
    public communityView: CommunityView;  //社區
    public activityView: ActivityView;      //活動
    public activityDetails: ActivityDetails; //活動詳情
    public entertainmentView: EntertainmentView; //娛樂
    public shareView: ShareView; //分享
    public careerView: CareerView; //生涯
    public myCardSpectrumView: MyCardSpectrumView; //我的牌普
    public myCardDerailsView: MyCardDerailsView; //牌局详情
    public myCardHistory: MyCardHistory;//牌局回顾
    public myKnapsackView: MyKnapsackView; //背包
    public matchView: MatchView; //賽事
    public matchDerailsView: MatchDerailsView; //賽事詳情
    public mySsDerailsView: MySsDerailsView; //賽事詳情
    public verificationPwdView: MyverificationPwdView; //支付密码
    public myinfoView: MyinfoView; //我的個人信息
    public flowingWaterView: FlowingWaterView; //我的個人信息
    public aboutUsView: AboutUsView; //關於我們
    public privacyView: PrivacyView; //隱私政策
    public languageView: LanguageView; //語言
    public myVipPrivilegeView: MyVipPrivilegeView; //VIP特權
    public vipShoppingView: VipShoppingView; //VIP商城
    public vipDerailsView: VipDerailsView; //VIP详情
    public vipExchangeLogView: VipExchangeLogView; //VIP兑换记录
    public vipExidAdressView: VipExidAdressView; //VIP兑换编辑收货地址
    public vipConfirmOrderView: VipConfirmOrderView; //VIP兑换确认订单
    public vipConfirmAdressView: VipConfirmAdressView; //VIP确认地址
    public createTableTexas: createTableTexas;
    public popupView: PopupView; //公告
    public myInformationView: MyInformationView; //我的消息
    public walletRecordView: WalletRecordView; //錢包記錄
    public redPacketView: redPacket;
    public setPayPassword: SetPayPassword;

    private roomGroup: fgui.GGroup;
    public lobbyController: LobbyViewCtr;
    public broadcast: Broadcast;

    private gettablelistCB: Function = null;
    private isStartTimer: boolean = true;

    public isHallJoin: boolean = false;
    private isCanTouch: boolean = false;

    private slideShow: SlideShow;
    private ui_btn_breakw: fgui.GButton = null;

    private ui_updateLayer: fgui.GComponent = null;
    private ui_loading: fgui.GImage = null;
    private ui_progressText: fgui.GTextField = null;
    private ui_btn_eyes: fgui.GButton = null;

    public isLimitEmty: boolean = false;

    createChildComponents(): void {
        super.createChildComponents();
        console.log("--- createChildComponents time ---", new Date().getTime());

        this.ui_updateLayer.visible = false;
        this.tipView = this.addFguiComponent(CommonView);
        this.tipView.node.zIndex = 200;
        let state = this.addFguiComponent(StatusbarView, false);
        state.fguiY = 10;
        state.node.zIndex = 300;

        // 预加载会导致加载太慢 放在加载时一起加
        // this.aboutUsView = this.addFguiComponent(AboutUsView);
        // this.privacyView = this.addFguiComponent(PrivacyView);
        // this.welfareView = this.addFguiComponent(WelfareView);
    }

    allChildCreated() {
        super.allChildCreated();
        console.log("--- allChildCreated time ---", new Date().getTime());
    }

    OnLoadCompleted() {
        BaseFrameNative.nowGameView = null;
        BaseFrameNative.isInHall = true;
        LobbyViewCtr.instance.RegistNotify();

        console.log("--- OnLoadCompleted time ---", new Date().getTime());
        fgui.GRoot.inst.addChild(this.fguiComponent);
        // this.fguiComponent.makeFullScreen();
        PublicMethods.screenFit(this.fguiComponent);
        this.lobbyController = LobbyViewCtr.instance;
        this.lobbyController.view = this;

        this.selectGameController = this.fguiComponent.getController("game");
        this.selectLimitController = this.fguiComponent.getController("limit");
        this.selectGameController.onChanged(this.selectGame, this);
        this.selectLimitController.onChanged(this.selectLimit, this);

        this.ui_roomList.setVirtual();
        this.ui_roomList.itemRenderer = this.renderListItem.bind(this);
        this.ui_roomList.on(fgui.Event.CLICK_ITEM, this.onClickItem, this);

        this.barController = this.ui_bottomBar.getController("bar");
        this.barController.onChanged(this.barStateChange, this);
        this.barController.setSelectedIndex(3);
        let barLoader = this.ui_bottomBar.getChild("n1").asButton.getChild("n2").asLoader;
        NativeMethod.setUrlByLanguage(barLoader);

        this.meView = this.getChild("me") as unknown as MeView;
        this.slideShow = this.getChild("Slideshow") as SlideShow;
        this.meView.changedBtnCom(this.meView.height);


        this.broadcast = this.getChild("Broadcast") as Broadcast;
        this.broadcast.node.zIndex = cc.macro.MAX_ZINDEX;
        this.activityView = this.getChild("activity") as unknown as ActivityView;
        this.entertainmentView = this.getChild("entertainment") as unknown as EntertainmentView;
        this.ui_btn_hallAddGold.onClick(this.showTopup, this);
        this.ui_btn_eyes.onClick(this.hideGold, this);
        this.ui_btn_serviveTop.onClick(() => {
            AudioManager.Singleton.play('LobbyView', "button");
            UIUtil.kefuFunction(this.openWebsite.bind(this));
        }, this);
        this.roomGroup = this.getChild("n22").asGroup;

        this.ui_btn_limitEmty.onClick(this.limitEmtyCallback, this);

        // 注册加入社区按钮事件
        this.input_joinCommunitty = this.ui_join_1.getChild("inputCommNum").asTextInput;
        this.btn_joinCommunitty = this.ui_join_1.getChild("btn_joinCommunitty").asButton;
        this.btn_joinCommunitty.onClick(() => {
            if (this.isCanTouch) {
                CommonCtr.instance.view.ShowTipLabel("請不要頻繁點擊！");
                return;
            }
            this.isCanTouch = true;
            let id = this.input_joinCommunitty.text;
            if (id == "") {
                CommonCtr.instance.view.ShowTipLabel("請輸入正確的社區號");
            } else {
                this.isHallJoin = true;
                LobbyViewCtr.instance.cs_apply_club(Number(id), "");
            }
            this.scheduleOnce(() => {
                this.isCanTouch = false;
            }, 2)
        })
        // 获取VIP配置
        LobbyViewCtr.instance.cs_getvipconfig();
        // 获取邮件消息
        LobbyViewCtr.instance.cs_getemaillist();

        this.ui_btn_createTexas.onClick(this.showCreateTableTexas.bind(this));
        // this.ui_btn_createTexas.visible = BaseFrameNative.serverlistItem.status == 0;
        let lv = AppConst.mPlayerModel.lv;
        let isShow: boolean = false;
        if (lv == 20 || BaseFrameNative.serverlistItem.status == 0) {
            isShow = true;
        }
        this.ui_btn_createTexas.visible = isShow;

        let id = AppConst.mPlayerModel.userid;
        let url = AppConst.mPlayerModel.wechat.wicon; //头像
        this.meView.setHead(url);
        if (AppConst.currentlevelid !== undefined) { //从游戏中返回再取获取最新的金币
            this.lobbyController.cs_searchgoldornickname(id);//获取金币
        } else {
            this.changedGold();
        }
        // 加载完毕 取消loading
        let script = this.loadNode.getComponent("LoadingScript");
        if (script) {
            script.loadCompelete();
        }
        this.loadNode.active = false;

        this.ui_btn_breakw.node.zIndex = cc.macro.MAX_ZINDEX;
        this.ui_btn_breakw.sortingOrder = 9997;
        this.ui_btn_breakw.onClick(() => {
            AudioManager.Singleton.play('LobbyView', "button");
            this.closeWebView();
        }, this)

        this.isShowCommunity();
        console.log("LoginViewCtr.instance.Model.cidx == ", LoginViewCtr.instance.Model.cidx);
        if (LoginViewCtr.instance.Model.cidx != 0) {
            LobbyViewCtr.instance.cs_getagentinfo_onlyData(LoginViewCtr.instance.Model.cidx);
        } else {
            // 清空之前的缓存
            LobbyViewCtr.instance.Model.ageninfo = null;
        }
        LobbyViewCtr.instance.Model.isSetPayPassword = (AppConst.mPlayerModel["UserPassword"] && AppConst.mPlayerModel["UserPassword"] != "");

        this.lobbyController.cs_getnotice(1);
        this.lobbyController.cs_getnotice(4);
        this.intiWebView();
        window.closeWebView = this.closeWebView.bind(this);
        AudioManager.Singleton.playBGM("bgmusic");
        AudioManager.Singleton.setSoundStatus(AudioManager.TexasMusicStatus ? "open" : "close");
        AudioManager.Singleton.setEffectStatus(AudioManager.TexasEffectStatus ? "open" : "close");
        this.barStateChange(false); //显示到默认页面
        this.reconnection();

        // 重连逻辑
        cc.game.off(cc.game.EVENT_SHOW);
        cc.game.on(cc.game.EVENT_SHOW, this.gameEventShow.bind(this));
        cc.game.off(cc.game.EVENT_HIDE);
        cc.game.on(cc.game.EVENT_HIDE, this.gameEventHide.bind(this));
    }

    public gameEventShow() {
        CommonCtr.instance.view.Hide();
        cc.game.resume();
        ReconnectManager.getInstance.reconnect(this.connectSuccess.bind(this), this.connectFail.bind(this), false);
    }

    public connectSuccess() {
        console.log("--- connectSuccess ---");
    }

    public connectFail() {
        CommonCtr.instance.view.backLogin();
    }

    public gameEventHide() {
        console.log("--- gameEventHide ---");
        cc.game.pause();
    }

    private webView: cc.WebView;
    public intiWebView() {
        let node = this.getChild("webview").asLoader.node;
        this.webView = node.addComponent(cc.WebView);
        let webviewEventHandler = new cc.Component.EventHandler();
        webviewEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
        webviewEventHandler.component = "LobbyView";
        webviewEventHandler.handler = "webViewEvent";
        //@ts-ignore
        this.webView.webviewEvents.push(webviewEventHandler);
        this.webView.node.active = false;
    }
    public webViewEvent(sender, event, customEventData) {
        console.log("customEventData == ", customEventData);
        if (event === cc.WebView.EventType.LOADED) {
            console.log("-webView---loaded---finish!")
        } else if (event === cc.WebView.EventType.LOADING) {
            console.log("webView---loading")
        } else if (event === cc.WebView.EventType.ERROR) {
            console.log("webView---sender", JSON.stringify(sender));
            console.log("webView---event", event);
            // this.closeWebView();
        }
    }
    public closeWebView() {
        cc.log("========closeWebView============");
        this.ui_btn_breakw.visible = false;
        this.webView.url = '';
        this.webView.node.active = false;
    }
    /**打開網頁 */
    public openWebsite(url: string) {
        this.ui_btn_breakw.visible = true;
        this.webView.node.active = true;
        this.webView.url = url;
    }

    public limitEmtyCallback() {
        AudioManager.Singleton.play('LobbyView', "button");
        this.isLimitEmty = !this.isLimitEmty;
        this.ui_btn_limitEmty.selected = this.isLimitEmty;
        this.handleRoomData();
    }

    public GetLev(exp: number) {
        let vipConfig = LobbyViewCtr.instance.Model.vipConfig;
        let iLev = 0;
        let iLen = vipConfig.UpExps.length;
        let iTotalExp = 0;
        for (let i = 0; i < iLen; i++) {
            iTotalExp += vipConfig.UpExps[i];
            if (exp >= iTotalExp) {
                iLev = i;
            } else { break };
        }
        LobbyViewCtr.instance.Model.vipLevel = iLev;
        this.ui_vip.setVar("vip", iLev + '').flushVars();
        if (this.meView) this.meView.initData();
        return iLev;
    }

    onDisable() {
        this.unscheduleAllCallbacks();
    }

    public changedGold() {
        let gold = AppConst.mPlayerModel.gold;

        if (this.ui_btn_eyes.selected) {
            this.ui_Hallgold.text = '*****';
        } else {
            this.ui_Hallgold.text = UIUtil.formatNumber(gold) + "";;
        }

        this.entertainmentView && this.entertainmentView.changedGold();
    }

    /**斷綫重連 */
    public reconnection() {
        let state = AppConst.mPlayerModel.state;
        console.log("AppConst.mPlayerModel === ", AppConst.mPlayerModel);
        console.log("AppConst.mPlayerModel.state === ", AppConst.mPlayerModel.state);
        if (state > 0) { //需要重连
            AppConst.mPlayerModel.state = 0;
            let gameId = AppConst.currentGameId;
            console.log("断线重连中...", gameId);
            switch (gameId) {
                case 51: //德州
                    CommonCtr.instance.ShowTipLabel("断线重连中...");
                    let tid = AppConst.roomId;
                    this.entergid = gameId;
                    this.entertid = +tid;
                    this.enterlvid = AppConst.currentlevelid;
                    this.checkUpdateGame();
                    break;
                default:
                    this.entertainmentView.checkUpdateGame(gameId);
                    break;
            }
        } else {
            let gameId = AppConst.currentGameId;
            if (!gameId) {
                return;
            }
            if (gameId == -1) {
                this.showTopup();
                return;
            }
            if (gameId === 51) {

            } else {
                this.barController.selectedIndex = 5;
            }
        }
    }
    public showCreateTableTexas() {
        if (this.createTableTexas) {
            this.createTableTexas.Show();
        } else {
            this.createTableTexas = this.addFguiComponent(createTableTexas);
        }
    }
    public showTopup() {
        if (this.topupView) {
            this.topupView.Show();
        } else {
            this.topupView = this.addFguiComponent(TopupView);
            this.topupView.node.zIndex = 190;
        }
    }
    public showTransferView() {
        if (this.transferView) {
            this.transferView.Show();
        } else {
            this.transferView = this.addFguiComponent(TransferView);
        }
    }
    public showWithdrawal() {
        if (this.withdrawalView) {
            this.withdrawalView.Show();
        } else {
            this.withdrawalView = this.addFguiComponent(WithdrawalView);
        }
    }
    public showWelfareView() {
        // this.meView.visible = false;
        //  this.barController.setSelectedIndex(0);
        if (this.welfareView) {
            this.welfareView.Show();
        } else {
            this.welfareView = this.addFguiComponent(WelfareView);
        }
    }
    public showSettingView() {
        if (this.settingView) {
            this.settingView.Show();
        } else {
            this.settingView = this.addFguiComponent(SettingView);
        }
    }
    public showModifyLoginPwdView() {
        if (this.modifyLoginPwdView) {
            this.modifyLoginPwdView.Show();
        } else {
            this.modifyLoginPwdView = this.addFguiComponent(ModifyLoginPwdView);
        }
    }

    public showModifyPlayPwdView() {
        if (this.modifyPlayPwdView) {
            this.modifyPlayPwdView.Show();
        } else {
            this.modifyPlayPwdView = this.addFguiComponent(ModifyPlayPwdView);
        }
    }
    public showcommunityView() {
        if (this.communityView) {
            this.communityView.Show();
        } else {
            this.communityView = this.addFguiComponent(CommunityView);
        }
    }
    public showactivityDetails(data: any) {
        if (this.activityDetails) {
            this.activityDetails.MyStart(data);
        } else {
            this.activityDetails = this.addFguiComponent(ActivityDetails);
            this.activityDetails.MyStart(data);
        }
    }
    public showShareView() {
        if (this.shareView) {
            this.shareView.Show();
        } else {
            this.shareView = this.addFguiComponent(ShareView);
        }
    }
    public showCareerView() {
        if (this.careerView) {
            this.careerView.Show();
        } else {
            this.careerView = this.addFguiComponent(CareerView);
        }
    }

    public showMyCardSpectrumView() {
        if (this.myCardSpectrumView) {
            this.myCardSpectrumView.Show();
        } else {
            this.myCardSpectrumView = this.addFguiComponent(MyCardSpectrumView);
        }
    }
    public showMyCardDerailsView(_tid: string, data: any = null) {
        if (this.myCardDerailsView) {
            this.myCardDerailsView.MyStart(_tid);
        } else {
            this.myCardDerailsView = this.addFguiComponent(MyCardDerailsView);
            this.myCardDerailsView.MyStart(_tid);
        }
        // if (this.myCardHistory) {
        //     this.myCardHistory.MyStart(_cid, data);
        // } else {
        //     this.myCardHistory = this.addFguiComponent(MyCardHistory);
        //     this.myCardHistory.MyStart(_cid, data);
        // }
    }
    public showMyCardHistory(_cid: string, data: any = null) {
        if (this.myCardHistory) {
            this.myCardHistory.MyStart(_cid, data);
        } else {
            this.myCardHistory = this.addFguiComponent(MyCardHistory);
            this.myCardHistory.MyStart(_cid, data);
        }
    }
    public showknapsackView() {
        if (this.myKnapsackView) {
            this.myKnapsackView.Show();
        } else {
            this.myKnapsackView = this.addFguiComponent(MyKnapsackView);
        }
    }
    public showMatchView() {
        if (this.matchView) {
            this.matchView.Show();
        } else {
            this.matchView = this.addFguiComponent(MatchView, false);
            this.matchView.fguiHeight = this.fguiHeight - 187;
        }
    }

    public showMatchDerailsView() {
        if (this.matchDerailsView) {
            this.matchDerailsView.Show();
        } else {
            this.matchDerailsView = this.addFguiComponent(MatchDerailsView);
        }
    }
    public showmySsDerailsView(cid: number) {
        if (this.mySsDerailsView) {
            this.mySsDerailsView.Competeid = cid;
            this.mySsDerailsView.Show();
        } else {
            this.mySsDerailsView.Competeid = cid;
            this.mySsDerailsView = this.addFguiComponent(MySsDerailsView);
        }
    }
    /**验证密码 */
    public showVerificationPwdView() {
        if (this.verificationPwdView) {
            this.verificationPwdView.Show();
        } else {
            this.verificationPwdView = this.addFguiComponent(MyverificationPwdView);
        }
    }
    /**个人信息 */
    public showMyinfoView() {
        if (this.myinfoView) {
            this.myinfoView.Show();
        } else {
            this.myinfoView = this.addFguiComponent(MyinfoView);
        }
    }
    /**流水 */
    public showFlowingWaterView() {
        if (this.flowingWaterView) {
            this.flowingWaterView.Show();
        } else {
            this.flowingWaterView = this.addFguiComponent(FlowingWaterView);
        }
    }
    /**關於我們 */
    public showAboutUsView() {
        if (this.aboutUsView) {
            this.aboutUsView.Show();
        } else {
            this.aboutUsView = this.addFguiComponent(AboutUsView);
        }
    }
    /**隱私 */
    public showPrivacyView() {
        if (this.privacyView) {
            this.privacyView.Show();
        } else {
            this.privacyView = this.addFguiComponent(PrivacyView);
        }
    }
    /**语言设置 */
    public showLanguageView() {
        if (this.languageView) {
            this.languageView.Show();
        } else {
            this.languageView = this.addFguiComponent(LanguageView);
        }
    }
    /**vip 特權 */
    public showVipPrivilegeView() {
        if (this.myVipPrivilegeView) {
            this.myVipPrivilegeView.Show();
        } else {
            this.myVipPrivilegeView = this.addFguiComponent(MyVipPrivilegeView);
        }
    }
    public showVipShoppingView() {
        if (this.vipShoppingView) {
            this.vipShoppingView.Show();
        } else {
            this.vipShoppingView = this.addFguiComponent(VipShoppingView);
        }
    }
    /**vip详情 */
    public showVipDerailsView() {
        if (this.vipDerailsView) {
            this.vipDerailsView.Show();
        } else {
            this.vipDerailsView = this.addFguiComponent(VipDerailsView);
        }
    }
    public showVipExchangeLogView() {
        if (this.vipExchangeLogView) {
            this.vipExchangeLogView.Show();
        } else {
            this.vipExchangeLogView = this.addFguiComponent(VipExchangeLogView);
        }
    }
    public showVipExidAdressView() {
        if (this.vipExidAdressView) {
            this.vipExidAdressView.Show();
        } else {
            this.vipExidAdressView = this.addFguiComponent(VipExidAdressView);
        }
    }
    public showVipConfirmOrderView() {
        if (this.vipConfirmOrderView) {
            this.vipConfirmOrderView.Show();
        } else {
            this.vipConfirmOrderView = this.addFguiComponent(VipConfirmOrderView);
        }
    }
    public showVipConfirmAdressView() {
        if (this.vipConfirmAdressView) {
            this.vipConfirmAdressView.Show();
        } else {
            this.vipConfirmAdressView = this.addFguiComponent(VipConfirmAdressView);
        }
    }
    public showPopupView() {
        if (this.popupView) {
            this.popupView.Show();
        } else {
            this.popupView = this.addFguiComponent(PopupView);
        }
    }
    /**我的消息 */
    public showMyInformationView() {
        if (this.myInformationView) {
            this.myInformationView.Show();
        } else {
            this.myInformationView = this.addFguiComponent(MyInformationView);
        }
    }
    /**设置未读消息 */
    public setFlowingRead(isRead: boolean) {
        if (this.meView) {
            this.meView.setFlowingRead(isRead);
        }
    }
    public showWalletRecordView() {
        if (this.walletRecordView) {
            this.walletRecordView.Show();
        } else {
            this.walletRecordView = this.addFguiComponent(WalletRecordView);
        }
    }

    public showRedPacketViewLayer() {
        if (this.redPacketView) {
            this.redPacketView.Show();
        } else {
            this.redPacketView = this.addFguiComponent(redPacket);
        }
    }

    public showSetPayPasswordView() {
        if (this.setPayPassword) {
            this.setPayPassword.Show();
        } else {
            this.setPayPassword = this.addFguiComponent(SetPayPassword);
        }
    }

    /**隐藏金币 */
    public hideGold() {
        if (this.ui_btn_eyes.selected) {
            this.ui_Hallgold.text = '*****';
        } else {
            this.ui_Hallgold.text = UIUtil.formatNumber(AppConst.mPlayerModel.gold) + "";;
        }
    }





    /**选择游戏 */
    public selectGame() {
        AudioManager.Singleton.play('LobbyView', "button");
        // cc.log("--------当前选择的游戏-----", this.selectGameController.selectedIndex);
        this.handleRoomData();
    }

    public selectGameByIndex() {
        let tableList: TableRoomInfoTex[] = [];
        let selectIndex = this.selectGameController.selectedIndex;
        if (selectIndex == 0) {
            tableList = this.lobbyController.Model.tableList;
        } else if (selectIndex == 1) {
            let list = this.lobbyController.Model.tableList;
            for (let i = 0, len = list.length; i < len; i++) {
                if (list[i].t != 10 && list[i].t != 20) {
                    tableList.push(list[i]);
                }
            }
        } else if (selectIndex == 2) { //AOF
            let list = this.lobbyController.Model.tableList;
            for (let i = 0, len = list.length; i < len; i++) {
                if (list[i].t == 20) {
                    tableList.push(list[i]);
                }
            }
        } else if (selectIndex == 3) {//短牌
            let list = this.lobbyController.Model.tableList;
            for (let i = 0, len = list.length; i < len; i++) {
                if (list[i].t == 10) {
                    tableList.push(list[i]);
                }
            }
        }
        return tableList;
    }

    /**选择的场次 */
    public selectLimit() {
        AudioManager.Singleton.play('LobbyView', "button");
        // cc.log("--------当前选择的场次-----", event.selectedIndex);
        //1 以下微  1 2 5小   10 25 50 中  100 200 500大
        this.handleRoomData();
    }

    // 刷新VIP界面
    public refreshMeView() {
        this.barController.setSelectedIndex(4);
        this.barStateChange(false);
    }

    // 跳转大厅
    public jumpHomePage() {
        this.barController.setSelectedIndex(3);
        this.barStateChange(false);
    }

    /**bar 的狀態改變 */
    public barStateChange(isPlaySound: boolean = true) {
        if (isPlaySound) {
            AudioManager.Singleton.play('LobbyView', "button");
        }
        this.meView && this.meView.Hide();
        this.activityView && this.activityView.Hide();
        this.entertainmentView && this.entertainmentView.Hide();
        this.matchView && this.matchView.Hide();
        this.ui_join_1.visible = false;
        this.unschedule(this.gettablelistCB); // 停止获取游戏德州列表
        LobbyViewCtr.instance.Model.isHomePage = false;
        this.ui_roomList.visible = false;
        if (this.barController.selectedIndex == 4) {
            this.meView.Show();//我的
        } else if (this.barController.selectedIndex == 1) {
            this.roomGroup.visible = false;
            this.activityView.Show();//活動
        } else if (this.barController.selectedIndex == 5) {
            this.entertainmentView.Show();//娛樂城
            // this.isShowCommunity();
        } else if (this.barController.selectedIndex == 2) {
            this.showMatchView(); //賽事
        } else if (this.barController.selectedIndex == 3) {//首頁
            this.roomGroup.visible = true;
            this.meView.Hide();
            this.activityView.Hide();
            this.entertainmentView.Hide();
            this.matchView && this.matchView.Hide();
            this.isShowCommunity();
            this.ui_roomList.visible = !(LoginViewCtr.instance.Model.cidx == 0);
            // 直接拉一次列表
            LobbyViewCtr.instance.Model.isHomePage = true;
            this.lobbyController.cs_gettablelist_tex();
            this.gettablelistCB = () => {
                //如果不在首页，就不刷新
                if (LobbyViewCtr.instance.Model.isHomePage) {
                    this.lobbyController.cs_gettablelist_tex();
                }
            }
            this.schedule(this.gettablelistCB, 10);
        }
    }

    // 是否显示社区内容
    public isShowCommunity() {
        // 显示加入社区 根据是否有社区号判断显示
        this.ui_roomList.visible = !(LoginViewCtr.instance.Model.cidx == 0);
        this.ui_join_1.visible = LoginViewCtr.instance.Model.cidx == 0;
    }

    public joinSuccess() {
        this.ui_join_1.visible = false;
        this.barStateChange();
    }

    private _isCanTouch: boolean = true;
    private entergid: number = 0;
    private entertid: number = 0;
    private enterlvid: number = 0;

    /**点击进入游戏 */
    public onClickItem(item: RoomItem) {
        if (!this._isCanTouch) return;
        AudioManager.Singleton.play('LobbyView', "button");
        this._isCanTouch = false;
        this.entergid = item.gid;
        this.entertid = item.tid;
        this.enterlvid = item.lvid;
        this.checkUpdateGame();

        this.scheduleOnce(() => {
            this._isCanTouch = true;
        }, 1)
    }

    public checkUpdateGame() {
        if (cc.sys.isNative && BaseFrameNative.isNeedUpdate) {
            let gameName: string = "";
            if (this.entergid == 51) {
                gameName = "texas";
                // 德州放在大厅里 不单独更新
                this.enterGame();
                return;
            }
            let commonView = CommonCtr.instance.view;
            GameUpdateMgr.instance.checkUpdate(gameName, this.enterGame.bind(this), commonView, null, this.updateProgress.bind(this), this.updateFail.bind(this));
            cc.tween(this.ui_loading.node)
                .by(1, { angle: -360 })
                .repeatForever()
                .start()
        } else {
            this.enterGame();
        }
    }

    // 更新进度
    public updateProgress(size: number, totleSize: number) {
        this.ui_updateLayer.visible = true;
        let progress = size / totleSize;
        if (isNaN(progress)) {
            progress = 0;
        }
        this.ui_progressText.text = `${Math.floor(progress * 100)}%`;
        if (progress >= 1) {
            this.ui_loading.node.stopAllActions();
            setTimeout(() => {
                this.ui_updateLayer.visible = false;
                this.enterGame();
            }, 200);
        }
    }

    // 更新失败
    public updateFail() {
        this._isCanTouch = true;
        CommonCtr.instance.view.ShowTipLabel("更新失败，请重试");
        this.ui_updateLayer.visible = false;
        this.ui_loading.node.stopAllActions();
    }

    // 进入游戏
    public enterGame() {
        cc.log(this.entergid + " enter tnum:" + this.entertid);
        this._isCanTouch = true;
        AppConst.roomId = "" + this.entertid;
        if (this.entergid == 51 && this.entertid != 0) {
            AppConst.currentGameId = 51;
            AppConst.currentlevelid = this.enterlvid;
            this.lobbyController.cs_entertablenum_tex(this.entertid + '', this.entergid);
        }
    }

    public intoTexas() {
        AppConst.mPlayerModel.state = 0;
        SceneManager.Singleton.loadScene("texas", "texas");
    }

    private room: {
        name: string, tableId: string,
        time: number, playNum: number, limit: number,
        maxPlayNum: number, brate: number, preG: number, gid: number, tid: number, lvid: number, t: number,
        IsSettle: boolean, cgold: number, ispas: number
    }[] = [];

    /**处理房间数据 */
    public handleRoomData() {
        let roomList = this.selectGameByIndex();
        this.room = [];
        let live = this.selectLimitController.selectedIndex;
        let lastLive = this.selectLimitController.previsousIndex;
        // if (live == 0) {
        //     this.ui_btn_limitEmty.selected = false;
        // }
        for (let i = 0, len = roomList.length; i < len; i++) {
            let data = { name: '', tableId: '', time: 0, playNum: 0, limit: 0, maxPlayNum: 0, brate: 0, preG: 0, gid: 0, tid: 0, lvid: 0, t: 0, IsSettle: false, cgold: 0, ispas: 0 };
            data.name = "";//roomList[i].tname; //游戏名字
            data.tableId = roomList[i].tid + ''; //tableid
            data.time = roomList[i].ltime;   //时间
            data.playNum = roomList[i].pcount; //人数
            data.limit = roomList[i].lg;  //最低带入
            data.maxPlayNum = roomList[i].manNum;  //最多几个人
            data.brate = UIUtil.formatNumber100(roomList[i].brate);  //底注
            data.preG = UIUtil.formatNumber100(roomList[i].preG);  //前注
            data.gid = roomList[i].gid;
            data.tid = roomList[i].tid;
            data.lvid = roomList[i].lvid;
            data.t = roomList[i].t;
            data.IsSettle = roomList[i].IsSettle;
            data.cgold = roomList[i].cgold;
            data.ispas = roomList[i].ispas;
            if (this.ui_btn_limitEmty.selected) {
                if (roomList[i].pcount < roomList[i].manNum) {
                    if (live == 1 && data.brate < 1) { //微
                        this.room.push(data);
                    } else if (live == 2 && (data.brate == 1 || data.brate == 2 || data.brate == 5)) {//小
                        this.room.push(data);
                    } else if (live == 3 && (data.brate == 10 || data.brate == 25 || data.brate == 50)) {//中
                        this.room.push(data);
                    } else if (live == 4 && (data.brate == 100 || data.brate == 200 || data.brate == 500)) {//大
                        this.room.push(data);
                        // } else if (live == 5 && (roomList[i].pcount < roomList[i].manNum)) {//空位
                        //     console.log("lastLive == ", lastLive);
                        //     if (lastLive == 1 && data.brate < 1) { //微
                        //         this.room.push(data);
                        //     } else if (lastLive == 2 && (data.brate == 1 || data.brate == 2 || data.brate == 5)) { //小
                        //         this.room.push(data);
                        //     } else if (lastLive == 3 && (data.brate == 10 || data.brate == 20 || data.brate == 50)) { //中
                        //         this.room.push(data);
                        //     } else if (lastLive == 4 && (data.brate == 100 || data.brate == 200 || data.brate == 500)) { //大
                        //         this.room.push(data);
                        //     } else if (lastLive == 0) {
                        //         this.room.push(data);
                        //     }
                    } else if (live == 0) { //全部
                        this.room.push(data);
                    }
                }
            } else {
                if (live == 1 && data.brate < 1) { //微
                    this.room.push(data);
                } else if (live == 2 && (data.brate == 1 || data.brate == 2 || data.brate == 5)) {//小
                    this.room.push(data);
                } else if (live == 3 && (data.brate == 10 || data.brate == 25 || data.brate == 50)) {//中
                    this.room.push(data);
                } else if (live == 4 && (data.brate == 100 || data.brate == 200 || data.brate == 500)) {//大
                    this.room.push(data);
                    // } else if (live == 5 && (roomList[i].pcount < roomList[i].manNum)) {//空位
                    //     console.log("lastLive == ", lastLive);
                    //     if (lastLive == 1 && data.brate < 1) { //微
                    //         this.room.push(data);
                    //     } else if (lastLive == 2 && (data.brate == 1 || data.brate == 2 || data.brate == 5)) { //小
                    //         this.room.push(data);
                    //     } else if (lastLive == 3 && (data.brate == 10 || data.brate == 20 || data.brate == 50)) { //中
                    //         this.room.push(data);
                    //     } else if (lastLive == 4 && (data.brate == 100 || data.brate == 200 || data.brate == 500)) { //大
                    //         this.room.push(data);
                    //     } else if (lastLive == 0) {
                    //         this.room.push(data);
                    //     }
                } else if (live == 0) { //全部
                    this.room.push(data);
                }
            }
        }
        this.ui_roomList.numItems = this.room.length;
    }



    /**刷新房间数据 */
    public renderListItem(index: number, obj: fgui.GObject) {
        (<RoomItem>obj).setData(this.room[index]);
    }

    public onDestroy() {
        BaseFrameNative.isInHall = false;
        cc.game.off(cc.game.EVENT_SHOW);
        cc.game.off(cc.game.EVENT_HIDE);
        this.unscheduleAllCallbacks();
        this.slideShow && this.slideShow.clean();
        this.matchView && this.matchView.clean();
        this.matchDerailsView && this.matchDerailsView.clean();
        this.welfareView && this.welfareView.slideShow.clean();
        AudioManager.Singleton.stopBGM();
        fgui.UIPackage.removePackage("res/Lobby");
        this.node.destroyAllChildren();
        LobbyViewCtr.instance.view = null;
        LobbyViewCtr.instance.model = null;
        LobbyViewCtr.instance.UnRegistNotify();
        super.onDestroy();
    }
}