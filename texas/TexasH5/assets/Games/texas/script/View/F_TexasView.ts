import F_TexasViewCtr from '../Contrl/F_TexasViewCtr';
import { BigEndInfoSD_tex, cs_entertablenum_tex, PInfoSD, sc_bigend_tex_n, sc_chatlog, sc_compete_award_info, sc_compete_table_info, sc_delay_tex, sc_delay_tex_n, sc_end_tex_n, sc_entertablenum_tex, sc_gamble_tex, sc_gamble_tex_n, sc_getalljackpot_tex, sc_getgain_tex, sc_getgamelevel, sc_getnotice_n, sc_giveup_tex, sc_insurance_tex, sc_openplay_tex_n, sc_ready_tex, sc_ready_tex_n, sc_roomhistory_tex, sc_showmycard_tex, sc_showmycard_tex_n, sc_tablestart_tex_n, sc_thistory_tex, sc_tjackpotLog, sc_token_tex_n, SuperClub, TableRecoverTexasSD, TexasCompareSD, TexTInfoSD } from '../Model/TexasNetData';
import TexasUserComp, { TexasUserHandleState, UserConnectState } from "./TexasUserComp";
import TexasTable from "./TexasTable";
import CardRedbetComp from "./CardRedbetComp";
import { PokerTexasType, Texas } from "../Model/Texas";
import TimeInfoMgrTex from './TimeInfoMgrTex';
import { UIMoveMonoFgui } from './UIMoveMono';
import TexasHelpsettingComp from './TexasHelpsettingComp';
import UserInfoComp from './UserInfoComp';
import ChipPositionTex from './ChipPositionTex';
import CachePool from './CachePool';
import TexasRecordComp from './TexasRecordComp';
import TexasTipView from './TexasTipView';
import CommonView from '../../../../Script/BaseFrame/CommonView';
import TexasHistoryComp from './TexasHistoryComp';
import JackpotComp from './JackpotComp';
import BalenceComp from '../Balence/BalenceComp';
import BalenceCtr from '../Balence/BalenceCtr';
import TexasChatComp from './TexasChatComp';
import { RollNotifierComp } from './RollNotifierComp';
import { TexasLanguage } from '../Model/TexasLanguage';
import { BroadcastView } from '../../../../GameHall/script/Lobby/Components/BroadcastView';
import TexasBigWinSpin from '../TexasSpine/TexasBigWinSpin';
import { TexQueueMessages } from './TexQueueMessages';
import { sc_compete_rank_info } from '../../../../GameHall/script/Lobby/LobbyNetData';
import LobbyViewCtr from '../../../../GameHall/script/Lobby/LobbyViewCtr';
import { AudioManager } from '../../../../Script/BaseFrame/AudioManager';
import { CommonCtr } from '../../../../Script/BaseFrame/CommonCtr';
import { CommonPosValListSD, CommonPosValSD, OtherUserInfoSD, sc_disconnect_n, PlayerInfoSD, sc_chat_n } from '../../../../Script/BaseFrame/cs_base';
import ViewBase from '../../../../Script/BaseFrame/ViewBase';
import { UIUtil, PlayerPrefs } from '../../../../Script/Common/UIUtil';
import { AppConst } from '../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst';
import { WebSocketManager } from '../../../../Script/BaseFrame/WebSocketManager';
import { ReconnectManager } from '../../../../Script/BaseFrame/ReconnectManager';
import { BaseFrameNative } from '../../../../Script/BaseFrameNative';

const { ccclass, property } = cc._decorator;

@ccclass
export default class F_TexasView extends ViewBase {
    protected get needProcess(): boolean {
        return true;
    }
    protected get packageResourceName(): string {
        return "texas";
    }
    protected get packageName(): string {
        return "res/Texas";
    }
    protected get componentName(): string {
        return "Texas";
    }

    @property(cc.Node)
    loadNode: cc.Node = null;

    private isCanUpdate: boolean = true;

    public Action: boolean = false; //????????????

    public ui_tablecenter: fgui.GComponent = null;
    public ui_cachePanel: fgui.GComponent = null;
    public ui_texasfightview: cc.Canvas = null;
    public ui_voiceChat: fgui.GComponent = null;
    public ui_BtnMessage: fgui.GButton = null;
    // public ui_btnYuYin:fgui.GButton = null; //?????????
    //// public Transform ui_linepanel; // ????????????
    //// public WaitLineComp linePanel;
    //// public Toggle ui_btnAuto; //???????????? 
    public ui_chippoolroot: fgui.GLoader = null; //??????????????? 
    public chipPool: CachePool = null;
    public ui_jackpotall: fgui.GComponent = null;
    public ui_jackpotbg: fgui.GLoader = null;
    public ui_lastjackpotbg: fgui.GLoader = null;
    public ui_globalinfo: fgui.GComponent = null;
    public ui_bgMango: fgui.GGroup = null;
    public ui_jackpotPanel: fgui.GComponent = null;
    public ui_btnMango: fgui.GButton = null;
    public jackpotComp: JackpotComp = null;
    public ui_txtMatchLv: fgui.GTextField = null;
    public ui_txtGameType: fgui.GTextField = null;
    public ui_txtPassword: fgui.GTextField = null;
    public ui_txtRoomNameMid: fgui.GTextField = null;//EmojiText; //?????????
    public ui_txtClubName: fgui.GTextField = null;//EmojiText//????????????
    public ui_txtRoom: fgui.GTextField = null; //?????????
    public ui_txtBase: fgui.GTextField = null; //??????
    public ui_txtNexBas: fgui.GTextField = null;//????????????
    public ui_txtNexTime: fgui.GTextField = null;//?????????????????????
    public ui_txtAll: fgui.GTextField = null; //??????
    public ui_lasttxtAll: fgui.GTextField = null; //???????????????
    public ui_Password: fgui.GComponent = null;
    public ui_inputPass: fgui.GTextInput = null;//??????????????????
    public ui_imgMatchRank: fgui.GImage = null;//????????????
    public ui_txtMatchRank: fgui.GTextField = null;//??????

    public ui_txtRound: fgui.GTextField = null; //??????
    public ui_txtAdd: fgui.GTextField = null; //??????
    public ui_txtMoney: fgui.GTextField = null; //
    public ui_txtName: fgui.GTextField = null; // 
    public ui_UserManager: fgui.GComponent = null;

    public ui_bgDeskTip: fgui.GLoader = null;
    public ui_txtDeskTip: fgui.GTextField = null;
    public ui_HelpSettingPanel: fgui.GComponent = null; //???????????? 
    public ui_balencePanel: fgui.GComponent = null;
    public balenceComp: BalenceComp = null;

    /////public Button ui_btnChat;
    public ui_chatPanel: fgui.GComponent = null;
    public chatComp: TexasChatComp = null;

    public ui_rollNotifyPanel: fgui.GComponent = null;
    public rollNoyifierComp: RollNotifierComp;

    public ui_runtimeRecord: fgui.GComponent = null; //??????????????????
    public ui_btnClose_Record: fgui.GButton = null; //????????????????????????
    public ui_btnRecord: fgui.GButton = null; //????????????????????????
    public recordComp: TexasRecordComp = null;
    public ui_btnRefresh: fgui.GButton = null;
    public ui_btnGPS: fgui.GButton = null;

    public ui_historyPanel: fgui.GComponent = null; //????????????
    public ui_btnHistory: fgui.GButton = null; //????????????????????????
    // public ui_btnCollect: fgui.GButton = null;
    public historyComp: TexasHistoryComp = null;

    public ui_userInfoPanel: fgui.GComponent = null; //??????????????????

    public ui_waitPanel: fgui.GComponent = null; //??????4??? ????????????
    public ui_txtFireTime: fgui.GTextField = null; //?????????
    public ui_txtStartDesc: fgui.GTextField = null;

    public helpSettingComp: TexasHelpsettingComp = null;
    public ui_zhuobubg: fgui.GLoader = null;

    public ui_bgMangoL: fgui.GComponent = null;
    public ui_vedioTypeBg: fgui.GComponent = null;
    public ui_vedio_line: fgui.GComponent = null;
    public ui_leftcardsite: fgui.GComponent = null;
    public ui_rightcardsite: fgui.GComponent = null;
    public ui_downcardsite: fgui.GComponent = null;
    public ui_upcardsite: fgui.GComponent = null;

    public _chippoolList: fgui.GComponent[];
    public ChipRecordList: ChipPositionTex[];

    public ui_user0: fgui.GComponent = null;
    public ui_user1: fgui.GComponent = null; // ????????????
    public ui_user2: fgui.GComponent = null;
    public ui_user3: fgui.GComponent = null;
    public ui_user4: fgui.GComponent = null;
    public ui_user5: fgui.GComponent = null;
    public ui_user6: fgui.GComponent = null;
    public ui_user7: fgui.GComponent = null;
    public ui_user8: fgui.GComponent = null;
    public ui_user9: fgui.GComponent = null;

    public ui_imgGray: fgui.GLoader = null; //template gray 
    private btnaddslidernow: number;
    public ui_BtnAddLimit: fgui.GComponent = null; //???????????? 
    public ui_CommonCards: fgui.GComponent = null; //??????
    public ui_curTexastype: fgui.GComponent = null; //????????????
    public ui_txtcurtexastype: fgui.GTextField = null;
    public _CommonCardImageList: CardRedbetComp[] = [];

    //??????????????????
    public ui_btnAutoQiPai: fgui.GButton = null; //????????????
    public ui_txtAutoQiPai: fgui.GTextField = null;
    public ui_btnAutoFollow: fgui.GButton = null; //????????????
    public ui_txtAutoFollow: fgui.GTextField = null;
    private isAutoQiPai: boolean = false; //
    private isAutoFollow: boolean = false; //

    public ui_btnAdd: fgui.GButton = null; //??????
    public ui_btn15add: fgui.GButton = null; //?????? 
    public ui_btn14add: fgui.GButton = null; //?????? 
    public ui_btn13add: fgui.GButton = null; //?????? 
    public ui_btn12add: fgui.GButton = null; //?????? 
    public ui_btn1add: fgui.GButton = null; //?????? 
    public ui_btnallinadd: fgui.GButton = null; //?????? 
    public ui_sliderAdd: fgui.GSlider = null;//?????????
    public ui_txtNums: fgui.GTextField = null;
    public ui_bar_v2: fgui.GImage = null;//??????????????????
    ////public Text ui_txtaddDynamic;
    public ui_btns: fgui.GComponent = null;
    public ui_btnFollow: fgui.GButton = null; //??????
    public ui_txtfollowDynamic: fgui.GTextField = null;
    public ui_btnZheZhao: fgui.GComponent = null; //????????????
    public ui_delayAdd: fgui.GButton = null;
    public ui_StatusManager: fgui.GComponent = null;

    public ui_btnLeftCards: fgui.GButton = null;
    public ui_btnShowPai: fgui.GButton = null;
    public ui_BtnAddpanel: fgui.GComponent = null; //??????????????? 
    public ui_btnXiu: fgui.GButton = null; //???/???
    public ui_btnqipai: fgui.GButton = null; //??????  
    public ui_btnBackTable: fgui.GButton = null; //??????

    //????????????
    public ui_BtnInsurancePanel: fgui.GComponent = null;
    public ui_fenchi: fgui.GButton = null;
    public ui_btngiveup: fgui.GButton = null;
    public ui_btnBaoben: fgui.GButton = null;
    public ui_btnManchi: fgui.GButton = null;
    public ui_insGiveUpText: fgui.GTextField = null;
    public ui_fenchiNumText: fgui.GTextField = null;
    public ui_txtBaoben: fgui.GTextField = null;
    public ui_txtBaoben1: fgui.GTextField = null;
    public ui_textManchi: fgui.GTextField = null;
    public ui_textManchi1: fgui.GTextField = null;
    public ui_insTimeText: fgui.GTextField = null;
    public ui_insuranceInfo: fgui.GButton = null;
    public ui_PoolNum: fgui.GTextField = null;
    public ui_PeiLvText: fgui.GTextField = null;
    public ui_BupaiText: fgui.GTextField = null;
    // public ui_inzhuTxt: fgui.GTextField = null;
    // public ui_inFenTxt: fgui.GTextField = null;
    public ui_insuranceInfo32: fgui.GButton = null;
    // public ui_PoolNum32: fgui.GTextField = null;
    // public ui_PeiLvText32: fgui.GTextField = null;
    // public ui_BupaiText32: fgui.GTextField = null;
    public ui_insuranceAddPanel: fgui.GComponent = null;
    public ui_closeInsAddPanel: fgui.GButton = null;
    public ui_toubaoNum: fgui.GTextField = null;
    public ui_peifuNum: fgui.GTextField = null;
    public ui_peilvNum: fgui.GTextField = null;
    public ui_sliderInsAdd: fgui.GSlider = null;
    // public ui_baobenText: fgui.GComponent = null;
    public ui_bupaiPanel: fgui.GList = null;
    // public ui_bupaiCell:fgui.GComponent = null;
    // public ui_ccardsPanel: fgui.GList = null;
    // public ui_ccardsCell:fgui.GComponent = null;
    public ui_InsUserCardList: fgui.GList = null;
    public ui_btnBupaiAllCard: fgui.GButton = null;//????????????
    public ui_btnMixBaoxian: fgui.GButton = null;//????????????
    public ui_btnMaxBaoxian: fgui.GButton = null;//????????????
    public ui_InsCntDown: fgui.GTextField = null;//????????????
    public ui_InsDelayGold: fgui.GTextField = null;//????????????
    public ui_insDelayAdd: fgui.GButton = null;//????????????
    // public ui_btnInsAll:fgui.GButton = null;//?????????
    public ui_btnInsZhu: fgui.GButton = null;//??????
    public ui_btnInsFen: fgui.GButton = null;//??????
    public ui_jiangchiText: fgui.GTextField = null;

    public ui_jackpotparant: fgui.GComponent = null;
    public ui_jackpot1: fgui.GComponent = null;
    public ui_jackpot2: fgui.GComponent = null;
    public ui_jackpot3: fgui.GComponent = null;
    public ui_jackpot4: fgui.GComponent = null;

    public ui_txtjackpot1: fgui.GTextField = null;
    public ui_txtjackpot2: fgui.GTextField = null;
    public ui_txtjackpot3: fgui.GTextField = null;
    public ui_txtjackpot4: fgui.GTextField = null;

    public ui_insjackpotparant: fgui.GList = null;
    public ui_btnBaoxianCommit: fgui.GButton = null;//????????????
    public ui_txtOutsCnt: fgui.GTextField = null;

    // #endregion

    private _Curaddvalue: number; //????????????????????????  
    public _bftable: TexasTable;
    public ui_ImgEmojGiftTemplete: fgui.GLoader = null;
    public ui_txtCurTime: fgui.GTextField = null;
    public ui_txtWifi: fgui.GTextField = null;
    public ui_txtProgress: fgui.GTextField = null;
    public ui_nearUserPanel: fgui.GComponent = null; //????????????  
    public ui_tiantianxuan: fgui.GLoader = null;
    public ui_tableInfogroup: fgui.GComponent = null;
    //// public Transform ui_leftCardsPanel; //???????????????

    //---********* ????????????
    public ui_keyboardPanel: fgui.GComponent = null;
    public isHaveAddGold: boolean = false;
    public isShowAddGoldPanel: boolean = true;
    public ui_takeGoldPanel: fgui.GComponent = null; //?????????????????????
    public ui_txtHintDesc: fgui.GTextField = null;
    public ui_sliderTakeGold: fgui.GSlider = null;
    public ui_txtScore: fgui.GTextField = null;
    public ui_scoreImageFont: fgui.GComponent = null;
    public ui_txtTakeGoldPanel: fgui.GTextField = null;
    public ui_refreshCgold: fgui.GButton = null;
    public ui_btnTakeGold: fgui.GButton = null;
    public ui_btnrechargeEx: fgui.GButton = null;
    public ui_btn_close_takeGold: fgui.GButton = null;
    public ui_btnRechargeGold: fgui.GButton = null;
    public ui_takein_txt: fgui.GTextField = null;
    public ui_takein_num: fgui.GTextField = null;
    public ui_takein_min_txt: fgui.GTextField = null;
    public ui_takein_max_txt: fgui.GTextField = null;
    public ui_clubNotice_txt: fgui.GTextField = null;
    // public Toggle ui_club_Toggle_item; 
    public ui_clubgold_text: fgui.GTextField = null;
    public ui_clubgold_num: fgui.GTextField = null;
    public ui_addClubGold_btn: fgui.GButton = null;

    private curTakeGold: number = 0;
    private curAddGold: number = 0;
    private curApplyGold: number = 0;
    private maxTakeGold: number;
    private curSelectSClub: SuperClub;
    private gameingTimer: Function;
    public vedioRawImage: fgui.GLoader = null; //RawImage

    public ui_selfEndtimetips: fgui.GLoader = null;
    public ui_selfImageF: fgui.GLoader = null;
    public ui_selfEndtimetipsText: fgui.GTextField = null;

    private isKeep: number = 0; //????????????
    private password: string = "";
    private lastGambleGold: number = 0;
    private dichi: number; //??????
    private endTime: number;

    public isfirst: boolean = false;//???????????????????????????
    public ismyturn: boolean = false;//??????????????????????????????????????????

    public selectFiveCards: number[] = [];
    public maxCards: number[] = [];
    public curCommondCards: number[] = [];

    public static _dicInsRate: Map<number, number> = new Map<number, number>();

    public ui_vedioCcardTip: fgui.GTextField = null;
    public ui_txtFireDesc: fgui.GTextField = null;
    public ui_txtShowPai: fgui.GTextField = null;
    public ui_xiuText: fgui.GTextField = null;
    public ui_txtBackTable: fgui.GTextField = null;
    public ui_txtLeftCards: fgui.GTextField = null;
    public ui_fenchiTip: fgui.GTextField = null;
    public ui_clickSelectText: fgui.GTextField = null;
    public ui_clickSelectText32: fgui.GTextField = null;
    // public ui_maxText: fgui.GTextField = null;
    public ui_toubaoText: fgui.GTextField = null;
    public ui_peifuText: fgui.GTextField = null;
    public ui_peilvText: fgui.GTextField = null;
    public ui_gongpaiText: fgui.GTextField = null;
    public ui_refreshText: fgui.GTextField = null;
    public ui_TakeGoldText: fgui.GTextField = null;
    public ui_rechargeExText: fgui.GTextField = null;
    public ui_textGoldDesc: fgui.GTextField = null;
    public ui_chatingText: fgui.GTextField = null;

    public ui_tiantianxuanPos: fgui.GComponent = null; //RectTransform
    public ui_tableInfogroupPos: fgui.GComponent = null; //RectTransform
    public ui_jackpotallPos: fgui.GComponent = null; //RectTransform
    public ui_waitPanelPos: fgui.GComponent = null; //RectTransform
    public ui_curTexastypePos: fgui.GComponent = null; //RectTransform
    public ui_btnsPos: fgui.GComponent = null; //RectTransform
    public ui_selfEndtimetipsPos: fgui.GComponent = null; //RectTransform

    public ui_confirmHandlePanel: fgui.GComponent = null;
    public ui_confirmHandlebg: fgui.GButton = null;
    public ui_confirmTitle_txt: fgui.GTextField = null;
    public ui_noRemindTxt: fgui.GTextField = null;
    public ui_GiveUpConfirm_txt: fgui.GTextField = null;
    public ui_CheckConfirm_txt: fgui.GTextField = null;
    public ui_noRemind: fgui.GButton = null;
    public ui_GiveUpConfirm: fgui.GButton = null;
    public ui_CheckConfirm: fgui.GButton = null;

    public ui_newMsg_btn: fgui.GButton = null;
    public ui_newMsg_Text: fgui.GTextField = null;
    public ui_newApply_btn: fgui.GButton = null;
    public ui_newApply_Text: fgui.GTextField = null;

    public ui_ConfirmStartBtn: fgui.GButton = null;
    public ui_ConfirmStart_Text: fgui.GTextField = null;

    public ui_openTip: fgui.GComponent = null;
    public ui_txtopentip: fgui.GTextField = null;
    public ui_bigWin: fgui.GComponent = null;
    public bigwinSpin: TexasBigWinSpin;
    private bigwinNode: cc.Node;
    public ui_funcBtns: fgui.GComponent = null;

    public ui_pauseview: fgui.GComponent = null;

    public ui_tipView: fgui.GComponent = null;
    public tipView: TexasTipView;
    public commonView: CommonView;
    private bupaiList: number[] = [];
    public userInfoComp: UserInfoComp;

    //??????????????????
    public ui_outGoldPanel: fgui.GComponent = null;
    public ui_btn_close_outGold: fgui.GButton = null;
    public ui_sliderOutGold: fgui.GSlider = null;
    public ui_outGold_num: fgui.GTextField = null;
    public ui_btnOutGold: fgui.GButton = null;
    public ui_myGold_num: fgui.GTextField = null;
    public ui_btnRefreshGold: fgui.GButton = null;
    // public broadcast: BroadcastView;

    private sendCardAni: fgui.GComponent[] = [];
    private isCanExeTexMas: boolean = false;//??????????????????????????????

    public get model() {
        return F_TexasViewCtr.instance.Model;
    }

    onLoad() {
        let filename: string;
        TexasLanguage.LoadLanguageConfig();
        switch (AppConst.languageType) {
            case 1:
                filename = "TexasZWFT";
                break;
            case 2:
                filename = "TexasZWJT";
                break;
            case 3:
                break;
            case 4:
                break;
            default:
                filename = "TexasZWFT";
                break;
        }
        let bundle = cc.assetManager.getBundle("texas");
        bundle.load(`/res/language/${filename}`, (err, data: any) => {
            if (err) {
                cc.log("????????????????????????");
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
        // fgui.UIObjectFactory.setExtension("ui://Texas/Broadcast", Broadcast);
        F_TexasViewCtr.instance.view = this;
    }

    createChildComponents(): void {
        super.createChildComponents();
        fgui.GRoot.inst.addChild(this.fguiComponent);
        this.fguiComponent.visible = false;
    }

    allChildCreated() {
        super.allChildCreated();
    }

    update() {
        if (this.isCanUpdate) {
            if (TexQueueMessages.instance.isCanExeNext() && this.isCanExeTexMas) {
                TexQueueMessages.instance.ExeNextMes();
            }
        }
    }

    // #region Override 
    public OnLoadCompleted(): void {
        let scaleX = cc.winSize.width / this.fguiComponent.node.width;
        this.fguiComponent.node.setScale(scaleX, 1);

        // ??????????????????????????????????????????
        cc.game.off(cc.game.EVENT_SHOW);
        cc.game.on(cc.game.EVENT_SHOW, this.gameEventShow.bind(this));
        cc.game.off(cc.game.EVENT_HIDE);
        cc.game.on(cc.game.EVENT_HIDE, this.gameEventHide.bind(this));
        this.Init();

        F_TexasViewCtr.instance.RegistNotify();
    }

    public gameEventShow() {
        // ?????????????????? ????????????????????????????????????
        console.log("---gameEventShow---");
        cc.game.resume();
        this.isCanUpdate = false;
        setTimeout(() => {
            this.sendReconnect();
        }, 500)
    }

    //????????????
    public sendReconnect() {
        this.commonView.showLoading();
        ReconnectManager.getInstance.reconnect(this.connectSuccess.bind(this), this.connectFail.bind(this));
    }

    // ??????????????????
    public connectSuccess() {
        this.commonView.showLoading();
        this.scheduleOnce(() => {
            this.cs_entertablenum_tex();
        }, 1);
    }

    // ??????????????????
    public connectFail(tipStr: string) {
        this.commonView.ShowTip(tipStr, () => {
            this.sendReconnect();
        });
    }

    public gameEventHide() {
        console.log("---gameEventHide---");
        // ????????????????????? ????????????
        if (this.ui_BtnInsurancePanel.visible) {
            F_TexasViewCtr.instance.cs_insurance_tex(F_TexasViewCtr.instance.Model._posServer, 0, 0, null);
        }
        if (this._bftable.myUser != null && this._bftable.myUser.IsWaitToTakeIn()) {
            F_TexasViewCtr.instance.cs_sitdownwaitup_tex();
        }
        this.unscheduleAllCallbacks();
        this._bftable.userList.forEach(user => {
            if (user) user.unscheduleAllCallbacks();
        })
        TimeInfoMgrTex.instance.removeTimer();
        TexQueueMessages.instance.removeAllMes();
        cc.game.pause();
    }

    public cs_entertablenum_tex() {
        let data: cs_entertablenum_tex = new cs_entertablenum_tex();
        data.tnumber = AppConst.roomId;
        data._g = AppConst.currentGameId;
        data.fn = "cs_entertablenum_tex";
        WebSocketManager.getInstance.Send(JSON.stringify(data), this.sc_entertablenum_tex.bind(this));
    }

    public sc_entertablenum_tex(data: sc_entertablenum_tex) {
        this.commonView.hideLoading();
        if (data.result == 1) {
            this.isCanUpdate = true;
            TexQueueMessages.instance.removeAllMes();
            AppConst.enterTableData = data;
            data.levelid && (AppConst.currentlevelid = data.levelid);
            AppConst.currentGameId = 51;
            this.InitUI();
            this.HandleTableRecover(this.model.table, this.model.palyerlist);
        } else {
            F_TexasViewCtr.instance.ExitGame();
        }

    }

    public Init(): void {
        this.Show();
        this.loadSounds();
        this.fguiComponent.visible = true;
        BaseFrameNative.nowGameView = this;

        F_TexasView._dicInsRate = new Map<number, number>();
        F_TexasView._dicInsRate.set(1, 31);
        F_TexasView._dicInsRate.set(2, 16);
        F_TexasView._dicInsRate.set(3, 10);
        F_TexasView._dicInsRate.set(4, 8);
        F_TexasView._dicInsRate.set(5, 6);
        F_TexasView._dicInsRate.set(6, 5);
        F_TexasView._dicInsRate.set(7, 4);
        F_TexasView._dicInsRate.set(8, 3.5);
        F_TexasView._dicInsRate.set(9, 3);
        F_TexasView._dicInsRate.set(10, 2.5);
        F_TexasView._dicInsRate.set(11, 2.3);
        F_TexasView._dicInsRate.set(12, 2);
        F_TexasView._dicInsRate.set(13, 1.8);
        F_TexasView._dicInsRate.set(14, 1.6); //???????????????????????????
        F_TexasView._dicInsRate.set(15, 1.4);
        F_TexasView._dicInsRate.set(16, 1.3);
        F_TexasView._dicInsRate.set(17, 1.2);
        F_TexasView._dicInsRate.set(18, 1.1);
        F_TexasView._dicInsRate.set(19, 1.0);
        F_TexasView._dicInsRate.set(20, 0.8);
        this.UpdateCurTime();

        this.scheduleOnce(this.curTimeTimer = () => {
            this.UpdateCurTime();
        }, 5);
        this._bftable = new TexasTable();
        this.initManager();

        this.chipPool = this.ui_chippoolroot.node.addComponent(CachePool);
        this.chipPool.fguiComponent = this.ui_chippoolroot.asCom;
        this.ui_chippoolroot.node.active = true;

        this.historyComp = this.ui_historyPanel.node.addComponent(TexasHistoryComp);
        this.historyComp.fguiComponent = this.ui_historyPanel;
        this.ui_historyPanel.node.active = true;

        this.helpSettingComp = this.ui_HelpSettingPanel.node.addComponent(TexasHelpsettingComp);
        this.helpSettingComp.fguiComponent = this.ui_HelpSettingPanel;
        this.ui_HelpSettingPanel.node.active = true;

        this.balenceComp = this.ui_balencePanel.node.addComponent(BalenceComp);
        this.balenceComp.fguiComponent = this.ui_balencePanel;
        this.ui_balencePanel.node.active = true;

        this.chatComp = this.ui_chatPanel.node.addComponent(TexasChatComp);
        this.chatComp.fguiComponent = this.ui_chatPanel;
        this.ui_chatPanel.node.active = true;

        this.commonView = this.addFguiComponent(CommonView);
        this.tipView = this.ui_tipView.node.addComponent(TexasTipView)
        this.tipView.fguiComponent = this.ui_tipView;
        this.ui_tipView.node.active = true;

        this.rollNoyifierComp = this.ui_rollNotifyPanel.node.addComponent(RollNotifierComp);
        this.rollNoyifierComp.fguiComponent = this.ui_rollNotifyPanel;
        this.ui_rollNotifyPanel.node.active = true;

        this.userInfoComp = this.ui_userInfoPanel.node.addComponent(UserInfoComp);
        this.userInfoComp.fguiComponent = this.ui_userInfoPanel;
        this.userInfoComp.node.active = true;

        this.addFguiComponent(BroadcastView).fguiY = 161;


        this.bigwinNode = this.ui_bigWin.getChild("bgwinNode").node;
        this.bigwinSpin = new TexasBigWinSpin(this.bigwinNode);
        this.addChild(this.bigwinSpin);
        this.RegistEvent();
        this.InitUI();

        this.RefreshDeskImage();
    }

    InitUI() {
        let data = AppConst.enterTableData;
        F_TexasViewCtr.instance.sc_entertablenum_tex(data);
        F_TexasViewCtr.instance.Model.mPlayerModel = AppConst.mPlayerModel;
        F_TexasViewCtr.instance.Model.room = AppConst.enterTableData;
        this.showCardIndex = 0;
        this.show3cards = false;
        this.show4card = false;
        this.show5card = false;
        this.model.curMsgId = 0;
        this.endTime = 0;
        this.selectFiveCards = [];
        this.maxCards = [];
        this.curCommondCards = [];
        this.bupaiList = [];
        this.RetsetPlayer();
        this.InitiStatus();
        this.hideUIAllBtns();
        this.ui_txtPassword.visible = false;
        this.ui_txtGameType.visible = false;
        this.ui_txtBase.text = (F_TexasViewCtr.instance.Model.MatchCode == "" ? "" : TexasLanguage.getLanguageById(1408) + ":" + F_TexasViewCtr.instance.Model.MatchCode) +
            "  ??????:" + UIUtil.formatNumber100(this.model.brate);
        this.UpdateJackpot(0, 0);
        this.UpdateLastJpot(0);
        this.dichi = 0;
        this.ui_txtAll.text = "0";
        this.ui_lasttxtAll.text = "0";
        this.curSelectSClub = null;
        this.ui_txtAdd.text = TexasLanguage.getLanguageById(1410) + ":0";//??????
        this.ui_txtMoney.text = UIUtil.formatNumber100(F_TexasViewCtr.instance.Model.mPlayerModel.gold) + "";
        this.ui_txtName.text = F_TexasViewCtr.instance.Model.mPlayerModel._n;
        this.ui_txtRound.text = TexasLanguage.getLanguageById(1411) + ":0";//??????
        this.ui_txtRoom.text = TexasLanguage.getLanguageById(1180) + ": " + this.model.Room_tnumber;
        this.updateTableInfo();
        this.SetMangoOfTable(this.model._mangoOfTable);
        this.ui_btnLeftCards.getChild("Text").asTextField.text = this.getLeftCardCost();
        this.historyComp.MyStart(true);
        this.helpSettingComp.MyStart(1);
        this.helpSettingComp.closeShowView();
        this.balenceComp.MyStart();
        this.chatComp.MyStart();
        this.ShowUIChatPanel(false);
        this.tipView.MyStart();
        this.rollNoyifierComp.MyStart();
        this.userInfoComp.MyStart();
        this.ui_runtimeRecord.visible = false;
        this.HideUITakeGoldPanel();
        this.ShowUIDeskTip(null);
        this.UpdateConfirmStartBtn();
        this.StartGamingTimer(this.model.endTime);// - UIUtil.NumberToInt(cc.director.getTotalTime() / 1000));
        this.MessageReBack();
        this.UpdateTakeInTip();
        this.isCanExeTexMas = true;
    }


    loadSounds() {
        let abbf = cc.assetManager.getBundle("texas");
        abbf.loadDir("res/Sounds", cc.AudioClip, function (err, clips) {
            for (let i = 0; i < clips.length; i++) {
                AudioManager.Singleton.add(clips[i].name, clips[i]);
            }
            AudioManager.Singleton.playBGM("texas_fightMusic");
            AudioManager.Singleton.setSoundStatus(AudioManager.TexasMusicStatus ? "open" : "close");
            AudioManager.Singleton.setEffectStatus(AudioManager.TexasEffectStatus ? "open" : "close");
        });
    }

    private isBigEnd = false;
    public onDestroy(): void {
        console.log("--- texas OnDestroy ---");
        cc.game.off(cc.game.EVENT_SHOW);
        cc.game.off(cc.game.EVENT_HIDE);
        this.showCardIndex = 0;
        this.isBigEnd = false;
        this.lastGambleGold = 0;
        this.isHaveAddGold = false;
        this.chipPool.ClearAllCache();
        F_TexasViewCtr.instance.view = null;
        F_TexasViewCtr.instance.UnRegistNotify();
        this.model.Reset();
        this._bftable = new TexasTable();
        this._bftable.userList = [];
        this._CommonCardImageList = [];
        this.stopAllTimer();
        F_TexasViewCtr.instance.Model.Init();
        AudioManager.Singleton.stopBGM();
        this.unschedule(this.loadVedioTime);
        TimeInfoMgrTex.instance.removeTimer();
        TexQueueMessages.instance.removeAllMes();
    }

    private stopAllTimer() {
        this.unschedule(this.fireTimer);
        this.unschedule(this.curTimeTimer);
        this.unschedule(this.endTimer);
        this.unschedule(this.timeOutTimer);
        this.unschedule(this.gameingTimer);
    }

    private StartGamingTimer(remainTime: number) {
        if (remainTime <= 0) { return; }
        this.unschedule(this.gameingTimer);
        this.scheduleOnce(this.gameingTimer = () => {

        }, remainTime - 1);//?????????????????????????????????????????????????????????
    }

    public ResetUI() {
        this.SetAutoQiPai(false);
        this.SetAutoGamble(false);
        this.ShowUIBalencePanel(null);
        this.ResetUserUI();
    }

    public ResetUserUI() {
        this._bftable.userList.forEach(user => {
            if (user == null) { return true; }
            user.ResetPlayingDataAndUI(); //??????????????????,????????????,?????????????????????UI
        });
    }

    private curTimeTimer: Function = null;
    private loadVedioTime: Function;
    public ui_userVedioPosPanel: fgui.GComponent = null;
    private pos: Map<number, fgui.GComponent>;

    public ui_CommonCardspos: fgui.GComponent = null;
    public ui_CommonCardVediospos: fgui.GComponent = null;
    private cc_pos: fgui.GComponent[];

    public initManager() { //???????????????????????? ?????????????????????
        this._bftable.Clear();
        if (this.model.openV > 0)
            this.InitVedioPosList();
        else
            this.InitPosList();

        this.InitUserInfo(this.ui_user0, 0);
        this.InitUserInfo(this.ui_user1, 1);
        this.InitUserInfo(this.ui_user2, 2);
        this.InitUserInfo(this.ui_user3, 3);
        this.InitUserInfo(this.ui_user4, 4);
        this.InitUserInfo(this.ui_user5, 5);
        this.InitUserInfo(this.ui_user6, 6);
        this.InitUserInfo(this.ui_user7, 7);
        this.InitUserInfo(this.ui_user8, 8);
        this.InitUserInfo(this.ui_user9, 9, this.ResetPos.bind(this));

        this._bftable.Init();
    }

    private InitPosList() {
        if (this.pos == null)
            this.pos = new Map<number, fgui.GComponent>();
        if (this.cc_pos == null)
            this.cc_pos = [];
        this.pos.clear();
        console.log("manNum", this.model.manNum);
        let posPanel: fgui.GComponent = this.ui_UserManager.getChild("userPosPanel" + this.model.manNum).asCom;
        for (let i = 0; i < posPanel._children.length; i++) {
            this.pos.set(i + 1, posPanel._children[i].asCom);
        }

        this.cc_pos = [];
        for (let i = 0; i < this.ui_CommonCardspos._children.length; i++) {
            this.cc_pos.push(this.ui_CommonCardspos._children[i].asCom);
        }

        this.sendCardAni = [];
        for (var i = 1; i < 10; i++) {
            let scard = this.ui_UserManager.getChild("sendCard" + i).asCom;
            this.sendCardAni.push(scard);
        }
    }

    private InitVedioPosList() {
        if (this.pos == null)
            this.pos = new Map<number, fgui.GComponent>();
        if (this.cc_pos == null)
            this.cc_pos = [];
        this.pos.clear();
        for (let i = 0; i < this.ui_userVedioPosPanel._children.length; i++) {
            this.pos.set(i + 1, this.ui_userVedioPosPanel._children[i].asCom);
        }

        this.cc_pos = [];
        for (let i = 0; i < this.ui_CommonCardVediospos._children.length; i++) {
            this.cc_pos.push(this.ui_CommonCardVediospos._children[i].asCom);
        }
    }

    private InitUserInfo(_userTs: fgui.GComponent, localPos: number, callBack: Function = null) {
        let userTs: fgui.GComponent = _userTs;
        let user: TexasUserComp = userTs.node.getComponent(TexasUserComp);
        if (user == null) user = userTs.node.addComponent(TexasUserComp);
        user.fguiComponent = userTs;
        userTs.node.active = true;
        this._bftable.userList.push(user);
        user.MyStart(localPos, this.ui_tablecenter, callBack);

    }

    public InitiStatus() {
        this.isBigEnd = false;
        this.ismyturn = false;
        this.ui_HelpSettingPanel.visible = true;

        // this.ui_btnYuYin.visible = true;
        // VoiceChatMono voiceHelper = ui_voiceChat.gameObject.getOrAddComponent<VoiceChatMono> ();
        // voiceHelper.MyStart ();
        this.ui_CommonCards.visible = false;
        this.ui_StatusManager.getController("commoncard4").setSelectedIndex(0);
        this.ui_StatusManager.getController("commoncard5").setSelectedIndex(0);
        this.ui_curTexastype.visible = false;
        this.ui_BtnAddLimit.visible = false;
        this.ui_sliderAdd.visible = false;
        this.ui_BtnAddpanel.visible = false;
        this.ui_jackpotparant.visible = false;
        this.ui_insjackpotparant.visible = false;
        this.curCommondCards = [];
        this.ShowUIJackpot(false);
    }

    public MessageReBack() {
        this.sc_entertable_texas_n(this.model.palyerlist);
        if (this.model.table != null) {
            this.HandleTableRecover(this.model.table, this.model.palyerlist);
        }
    }

    /// <summary>
    /// ????????????
    /// </summary>
    private RetsetPlayer() {
        this._bftable.userList.forEach(data => {
            data.ResetUserCompUI();
        });
        this.Action = false;
    }

    /// <summary>
    /// ????????????pos??????????????????
    /// </summary>
    private GetLocalPos(pos: number) {
        let mypos = F_TexasViewCtr.instance.Model._posServer;
        return TexasTable.GetLocalPosByServerPos(pos, mypos, this.model.manNum);
    }

    private openBtnZhezao() {
        this.ui_btnZheZhao.visible = true;
        this.scheduleOnce(() => {
            if (this.ui_btnZheZhao == null) return;
            this.ui_btnZheZhao.visible = false;
        }, 1)
    }

    /// <summary>
    /// ??????UI??????
    /// </summary>
    private RegistEvent() {
        this.ShowActionBtns(false);
        if (this.model.gametype == 20) this.moveN1toN2(this.ui_btnallinadd.node, this.ui_btnAutoFollow.node);
        //???
        this.ui_btnallinadd.onClick(() => {
            this.ui_BtnAddLimit.visible = false;
            this.ui_sliderAdd.visible = false;
            this.GambleAllIn();
        });
        //???
        this.ui_btnXiu.onClick(() => {
            this.GambleXiu();
        });
        //??????,?????????
        this.ui_btnFollow.clearClick();
        this.ui_btnFollow.onClick(() => {
            this.GambleMultiple(1);
        });
        //???       
        this.ui_btn1add.onClick(() => {
            let type = PlayerPrefs.GetInt(F_TexasViewCtr.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 1, 3);
            if (type == 9)//Allin
                this.GambleAllIn();
            else
                this.GambleMultiple(2);
        }); //1?????????  
        this.ui_btn12add.onClick(() => {
            let type = PlayerPrefs.GetInt(F_TexasViewCtr.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 2, 5);
            if (type == 9)//Allin
                this.GambleAllIn();
            else
                this.GambleMultiple(3);
        }); //2?????????      
        this.ui_btn13add.onClick(() => {
            let type = PlayerPrefs.GetInt(F_TexasViewCtr.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 3, 7);
            if (type == 9)//Allin
                this.GambleAllIn();
            else
                this.GambleMultiple(4);
        });
        this.ui_btn14add.onClick(() => {
            let type = PlayerPrefs.GetInt(F_TexasViewCtr.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 4, 1);
            if (type == 9)//Allin
                this.GambleAllIn();
            else
                this.GambleMultiple(5);
        });
        this.ui_btn15add.onClick(() => {
            let type = PlayerPrefs.GetInt(F_TexasViewCtr.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 5, 1);
            if (type == 9)//Allin
                this.GambleAllIn();
            else
                this.GambleMultiple(6);
        });

        this.ui_sliderAdd.on(fgui.Event.STATUS_CHANGED, (slider) => {
            let mygold = UIUtil.formatNumber100(this._bftable.myUser.player.gold);
            let chooseValue = Math.ceil(mygold * slider.value / 100);
            let min = UIUtil.formatNumber100(F_TexasViewCtr.instance.Model.turnGamble);
            if (F_TexasViewCtr.instance.Model._CommonCard.length > 0) {
                if (UIUtil.formatNumber100(F_TexasViewCtr.instance.Model._gamble) > min) {
                    min = UIUtil.formatNumber100(F_TexasViewCtr.instance.Model._gamble);
                }
                let bei = Math.round(chooseValue / min);
                this.curAddGold = bei * min;
            } else {
                this.curAddGold = chooseValue;
            }
            if (this.curAddGold > mygold) {
                this.ui_sliderAdd.value = this.curAddGold;
                this.ui_bar_v2.fillAmount = slider.value;
                this.ui_txtNums.text = "ALLIN";
            } else {
                this.ui_sliderAdd.value = this.curAddGold;
                this.ui_bar_v2.fillAmount = slider.value;
                this.ui_txtNums.text = this.curAddGold + "";
            }
        });
        this.ui_sliderAdd.on(fgui.Event.TOUCH_END, (slider) => {
            if (this.ui_txtNums.text != "ALLIN") {
                if (this.curAddGold <= UIUtil.formatNumber100(F_TexasViewCtr.instance.Model.turnGamble)) {
                    this.ui_sliderAdd.visible = false;
                    this.ui_BtnAddLimit.visible = false;
                    return;
                }
                if (this.curAddGold < this.minAddGold || this.curAddGold <= 0) {
                    this.tipView.ShowTipLabel("?????????????????????0");
                    return;
                }
                if (F_TexasViewCtr.instance.Model._CommonCard.length >= 3) {
                    let minGamble = UIUtil.formatNumber100(F_TexasViewCtr.instance.Model.turnGamble);
                    if (this.curAddGold < minGamble * 2) {
                        this.tipView.ShowTipLabel("?????????????????????" + minGamble * 2);
                        return;
                    }
                } else {
                    let minGamble = UIUtil.formatNumber100(F_TexasViewCtr.instance.Model.turnGamble);
                    if (this.curAddGold < minGamble) {
                        this.tipView.ShowTipLabel("?????????????????????" + minGamble);
                        return;
                    }
                }
            }

            let gambleGold = this.curAddGold;
            if (PlayerPrefs.GetInt("key_lagan_value", 0) == 1) {
                this.tipView.ShowTip(TexasLanguage.getLanguageById(2216) + gambleGold, () => {
                    this.ui_sliderAdd.visible = false;
                    this.ui_BtnAddLimit.visible = false;
                    this.Wait();
                    //???/???
                    if (gambleGold == this.ui_sliderAdd.max)
                        this.GambleAllIn();
                    else
                        F_TexasViewCtr.instance.cs_gamble_tex(gambleGold * 100, true);
                }, () => { });//????????????{0}
            } else {
                this.ui_sliderAdd.visible = false;
                this.ui_BtnAddLimit.visible = false;
                this.Wait();
                //???/???
                if (gambleGold == this.ui_sliderAdd.max)
                    this.GambleAllIn();
                else
                    F_TexasViewCtr.instance.cs_gamble_tex(gambleGold * 100, true);
            }
        });

        this.ui_btnAdd.onClick(() => {
            if (this.model.gametype == 20) return;
            let mygold = UIUtil.formatNumber100(this._bftable.myUser.player.gold);
            let min = UIUtil.formatNumber100(F_TexasViewCtr.instance.Model.turnGamble);
            if (F_TexasViewCtr.instance.Model._CommonCard.length >= 3) {
                this.minAddGold = min * 2;
            } else {
                this.minAddGold = min;
            }
            if (mygold < this.minAddGold) {
                this.minAddGold = mygold;
                this.ui_txtNums.text = "ALLIN";
            } else {
                this.ui_txtNums.text = this.minAddGold + "";
            }
            let percent = Math.floor(this.minAddGold * 100 / mygold);
            console.log("percent === ", percent);
            percent = percent >= 100 ? 100 : percent;
            this.ui_sliderAdd.value = percent;
            this.ui_sliderAdd.min = 0;
            this.ui_sliderAdd.max = 100;
            this.ui_bar_v2.fillAmount = percent;

            // this.minAddGold = this.model.brate * 2 > mygold ? mygold : this.model.brate * 2;
            // this.minAddGold = Number((this.minAddGold / 100).toFixed(2));
            // this.ui_sliderAdd.value = this.minAddGold;
            // this.ui_txtNums.text = this.minAddGold + "";
            // this.ui_bar_v2.fillAmount = this.minAddGold;

            this.ui_sliderAdd.visible = true;

        });

        // ???/?????? 
        this.ui_btnqipai.onClick(() => {
            // AudioManager.Singleton.play("", "texas_qipai");
            let isGiveup = PlayerPrefs.GetInt("key_ConfirmGiveUp", 0);
            if (this.GetFollowMinGamble() <= 0 && isGiveup == 0) {
                this.ShowConfirmHandlePanel(true);
            }
            else {
                F_TexasViewCtr.instance.cs_giveup_tex(F_TexasViewCtr.instance.Model._posServer);
                this.openBtnZhezao();
            }
        });
        //?????????/???
        this.ui_btnAutoQiPai.onClick(() => {
            this.SetAutoQiPai(!this.isAutoQiPai);
            this.SetAutoGamble(false);
        });
        this.ui_btnAutoFollow.onClick(() => {
            this.SetAutoGamble(!this.isAutoFollow);
            this.SetAutoQiPai(false);
        });
        //??????
        this.ui_btnBackTable.onClick(() => {
            //???????????????????????????serverpos
            if (this._bftable.myUser.serverpos > 0) {
                this.CheckAutoSitDown(this._bftable.myUser.serverpos);
            }
            this.CheckBtnBackTableState();
        });

        this.ui_btnLeftCards.onClick(() => {
            if (this.isCanSeeLeftCards) {
                let cost = this.ui_btnLeftCards.getChild("Text").asTextField.text;
                if (AppConst.mPlayerModel.gold < Number(cost)) {
                    CommonCtr.instance.ShowTip(TexasLanguage.getLanguageById(1601));//????????????
                    return;
                }
                F_TexasViewCtr.instance.cs_seerestcard_tex();
            }
            this.ShowUILeftCards(false, false);
        });

        this.ui_btnShowPai.onClick(() => {
            if (this.isCanXiuPai) {
                if (AppConst.mPlayerModel.gold < this.model.brate * 10) {
                    CommonCtr.instance.ShowTip(TexasLanguage.getLanguageById(1601));//????????????
                    return;
                }
                F_TexasViewCtr.instance.cs_forceshowcard_tex();
            }
            this.ShowUILeftCards(false, false);
        });

        //#region ????????????
        this.ui_btngiveup.onClick(() => {
            this.Wait();
            F_TexasViewCtr.instance.cs_insurance_tex(F_TexasViewCtr.instance.Model._posServer, 0, 0, null);
            this.ui_funcBtns.visible = true;
        });
        this.ui_btnBaoben.onClick(() => {
            this.Wait();
            F_TexasViewCtr.instance.cs_insurance_tex(F_TexasViewCtr.instance.Model._posServer, this.baobenZInsAddGold, this.baobenFInsAddGold, this.bupaiList.length <= 0 ? null : this.bupaiList);
            this.ui_funcBtns.visible = true;
        });
        this.ui_btnManchi.onClick(() => {
            this.Wait();
            F_TexasViewCtr.instance.cs_insurance_tex(F_TexasViewCtr.instance.Model._posServer, this.manchiZInsAddGold, this.manchiFInsAddGold, this.bupaiList.length <= 0 ? null : this.bupaiList);
            this.ui_funcBtns.visible = true;
        });
        this.ui_fenchi.onClick(() => {
            if (this.zhuInsAddGold <= 0 && this.fenInsAddGold <= 0) {
                CommonCtr.instance.ShowTip(TexasLanguage.getLanguageById(2212));//??????????????????0
                return;
            }

            this.tipView.ShowTip(TexasLanguage.getLanguageById(2217) + (this.tempInsAddGold / 100),
                () => {
                    this.Wait();
                    F_TexasViewCtr.instance.cs_insurance_tex(F_TexasViewCtr.instance.Model._posServer, this.zhuInsAddGold, this.fenInsAddGold, this.bupaiList.length <= 0 ? null : this.bupaiList);
                    this.ui_funcBtns.visible = true;
                },
                () => { });//????????????{0}
        });


        // this.ui_btnInsAll.onClick(()=>{
        //     this.HandleInsuranceBtnsForSelfTurn();
        // });
        this.ui_insuranceInfo.onClick(() => {
            // this.ui_insuranceAddPanel.visible = true;
            this.showInsAddInfo(1);
        });
        this.ui_insuranceInfo32.onClick(() => {
            // this.ui_insuranceAddPanel.visible = true;
            this.showInsAddInfo(2);
        });

        this.ui_closeInsAddPanel.onClick(() => {
            // this.ui_insuranceAddPanel.visible = false;
            // this.ui_funcBtns.visible = true;
        });
        this.ui_sliderInsAdd.on(fgui.Event.STATUS_CHANGED, (slider) => {
            console.log("????????????" + UIUtil.NumberToInt(slider.value));
            this.showCurInsAdd(UIUtil.NumberToInt(slider.value));

            if (this.tempInsAddGold <= 0) {
                this.ui_fenchiTip.text = "";//???????????????
                return;
            }
            this.ui_fenchiNumText.text = UIUtil.formatNumber100(this.zhuInsAddGold + this.fenInsAddGold) + "";
            this.ui_fenchiTip.text = TexasLanguage.getLanguageById(2237);//????????????
        });
        //this.ui_sliderInsAdd.on(fgui.Event.TOUCH_END, (slider) => {
        this.ui_btnBaoxianCommit.onClick(() => {
            if (this.tempInsAddGold <= 0) {
                this.ui_fenchiTip.text = "";//???????????????
                CommonCtr.instance.ShowTip(TexasLanguage.getLanguageById(2212));//??????????????????0
                return;
            }
            if (PlayerPrefs.GetInt("key_lagan_value", 0) == 1) {
                CommonCtr.instance.ShowTipCallback(TexasLanguage.getLanguageById(2217) + (this.tempInsAddGold / 100),
                    () => {
                        this.ui_fenchiNumText.text = UIUtil.formatNumber100(this.zhuInsAddGold + this.fenInsAddGold) + "";
                        this.ui_fenchiTip.text = TexasLanguage.getLanguageById(2237);//????????????
                        this.ui_BtnInsurancePanel.visible = false;
                        F_TexasViewCtr.instance.cs_insurance_tex(F_TexasViewCtr.instance.Model._posServer, this.zhuInsAddGold, this.fenInsAddGold, this.bupaiList.length <= 0 ? null : this.bupaiList);
                    },
                    () => { });//????????????{0}
            }
            else {
                this.ui_fenchiNumText.text = UIUtil.formatNumber100(this.zhuInsAddGold + this.fenInsAddGold) + "";
                this.ui_fenchiTip.text = TexasLanguage.getLanguageById(2237);//????????????
                this.ui_BtnInsurancePanel.visible = false;
                F_TexasViewCtr.instance.cs_insurance_tex(F_TexasViewCtr.instance.Model._posServer, this.zhuInsAddGold, this.fenInsAddGold, this.bupaiList.length <= 0 ? null : this.bupaiList);
            }
        });
        //#endregion
        this.ui_delayAdd.onClick(() => {
            if (AppConst.mPlayerModel.gold < 2000 * (F_TexasViewCtr.instance.Model.delayCount == -1 ? 0 : UIUtil.NumberToInt(Math.pow(2, F_TexasViewCtr.instance.Model.delayCount)))) {
                CommonCtr.instance.ShowTip(TexasLanguage.getLanguageById(1601));//????????????
            } else {
                this.cs_delay_tex();
            }
        });

        this.ui_insDelayAdd.onClick(() => {
            if (AppConst.mPlayerModel.gold < 2000 * (F_TexasViewCtr.instance.Model.delayCount == -1 ? 0 : UIUtil.NumberToInt(Math.pow(2, F_TexasViewCtr.instance.Model.delayCount)))) {
                CommonCtr.instance.ShowTip(TexasLanguage.getLanguageById(1601));//????????????
            }
            else
                this.cs_delay_tex();
        });



        this.ui_sliderTakeGold.on(fgui.Event.STATUS_CHANGED, (slider) => {
            let num = (UIUtil.NumberToInt(slider.value) + 1) * this.minTakeGold;

            //AOF?????????????????????????????????minTakeGold?????????
            if (this.model.gametype == 20) {
                if (slider.value >= this.maxTakeGold - this.minTakeGold && slider.value <= this.maxTakeGold) {
                    num = slider.value;
                } else {
                    num = (UIUtil.NumberToInt(slider.value / this.minTakeGold) + 1) * this.minTakeGold;
                }
            }

            this.UpdateTakeGoldUI(num > this.maxTakeGold ? this.maxTakeGold : (num < this.minTakeGold ? this.minTakeGold : num));

        }, this);

        this.ui_btnrechargeEx.onClick(() => {
            // RechargeCtr.instance.OpenWindow ();
        });
        this.ui_refreshCgold.onClick(() => {
            if (this.curSelectSClub == null) {
                CommonCtr.instance.ShowTip(TexasLanguage.getLanguageById(2219));//????????????????????????
                return;
            }
            F_TexasViewCtr.instance.cs_refreshbalance_club(this.curSelectSClub != null ? this.curSelectSClub.cid : 0);
        });
        this.ui_btnTakeGold.onClick(() => {
            if (this.model.clubid > 0 && this.model.IsSupper) {
            }
            if (this.curTakeGold > 0 && this.curTakeGold <= this.maxTakeGold) {
                if (this.isShowAddGoldPanel) {
                    this.isHaveAddGold = true;
                    F_TexasViewCtr.instance.cs_addgoldingame_tex(UIUtil.NumberToInt(this.curTakeGold), this.model.curSClub != null ? this.model.curSClub.cid : 0);
                }
                else {
                    this.password = this.ui_inputPass.text.trim();
                    F_TexasViewCtr.instance.cs_sitdown_tex(this.posSit, UIUtil.NumberToInt(this.curTakeGold), this.isKeep, this.password, this.curSelectSClub != null ? this.curSelectSClub.cid : 0);
                }
                this.HideUITakeGoldPanel();
            }
            else {
                this.ShowUITakeGoldPanel(true, 0, true);
                //CommonCtr.instance.ShowTip("?????? ?????? ??????:curTakeGold" + curTakeGold + " max:" + maxTakeGold);
            }
        });

        this.ui_btnRechargeGold.onClick(() => {
            //??????
        });

        this.ui_btn_close_takeGold.onClick(() => {
            if (this._bftable.myUser != null && this._bftable.myUser.IsWaitToTakeIn()) {
                F_TexasViewCtr.instance.cs_sitdownwaitup_tex();//??????????????????????????????????????????
            }
            this.HideUITakeGoldPanel();
        });
        this.ui_BtnMessage.onClick(() => {
            this.ShowUIChatPanel(true);
        });
        this.ui_btnRecord.onClick(() => {
            console.log("ui_runtimeRecord?????? == " + this.ui_historyPanel.node.getNumberOfRunningActions());
            if (this.isBigEnd || this.ui_runtimeRecord.node.getNumberOfRunningActions() > 0) { return; }

            F_TexasViewCtr.instance.cs_getgain_tex();
            if (this.recordComp == null) {
                this.recordComp = this.ui_runtimeRecord.node.addComponent(TexasRecordComp);
                this.recordComp.fguiComponent = this.ui_runtimeRecord.asCom;
                this.ui_runtimeRecord.node.active = true;
                this.recordComp.MyStart();

            }
            // this.recordComp.Show();
            if (this.model.curTableOverCount > 0) F_TexasViewCtr.instance.Model.isGamestart = true;
            this.ui_runtimeRecord.node.runAction(cc.moveTo(0.2, cc.v2(0, 0))) // DoTweenEx.DOLocalMoveX (ui_runtimeRecord, 0, 0.5f);
        });

        this.ui_btnHistory.onClick(() => {
            console.log("ui_historyPanel?????? == " + this.ui_historyPanel.node.getNumberOfRunningActions());
            if (this.isBigEnd || this.ui_historyPanel.node.getNumberOfRunningActions() > 0) { return; }
            this.historyComp.Show();
            // this.ui_btnCollect.visible = true;
            this.ui_historyPanel.node.x = 1080;
            cc.tween(this.ui_historyPanel.node)
                .to(0.2, { position: cc.v3(0, this.ui_historyPanel.y, 0) })
                .call(() => {
                    F_TexasViewCtr.instance.cs_thistory_tex();
                })
                .start()
        });

        this.ui_btnMango.onClick(() => {
            F_TexasViewCtr.instance.cs_getalljackpot_tex();
            if (this.jackpotComp == null) {
                this.jackpotComp = this.ui_jackpotPanel.node.addComponent(JackpotComp);
                this.jackpotComp.fguiComponent = this.ui_jackpotPanel;
                this.ui_jackpotPanel.node.active = true;
                this.jackpotComp.MyStart();
            } else {
                this.jackpotComp.Show();
            }
        });

        this.ui_btnRefresh.onClick(() => {
            CommonCtr.instance.ShowTip(TexasLanguage.getLanguageById(1583));//??????????????????
        });

        this.ui_btnRefreshGold.onClick(() => {
            F_TexasViewCtr.instance.cs_freshplayerInfoSD();
        });

        this.ui_btnGPS.onClick(() => {
            // this.nearUserComp.Show (null);
        });

        this.ui_addClubGold_btn.onClick(() => {
            // this.ShowAddClubPanel();
        });
        this.ui_noRemind.onClick(() => {
            let index = this.ui_noRemind.getController("isOn").selectedIndex;
            let value = index == 0 ? 1 : 0;
            this.ui_noRemind.getController("isOn").setSelectedIndex(value);
            PlayerPrefs.SetInt("key_ConfirmGiveUp", value);
        });
        this.ui_GiveUpConfirm.getChild("tipCloseText").text = TexasLanguage.getLanguageById(1395);//??????
        this.ui_GiveUpConfirm.onClick(() => {
            this.ShowConfirmHandlePanel(false);
            F_TexasViewCtr.instance.cs_giveup_tex(F_TexasViewCtr.instance.Model._posServer);
            this.openBtnZhezao();
        });
        this.ui_CheckConfirm.getChild("tipOKText").text = TexasLanguage.getLanguageById(1297);//??????
        this.ui_CheckConfirm.onClick(() => {
            this.ShowConfirmHandlePanel(false);
            if (this.ui_btnFollow.visible)
                this.GambleMultiple(1);
            else
                this.GambleXiu();
        });
        this.ui_confirmHandlebg.onClick(() => {
            this.ShowConfirmHandlePanel(false);
        });
        //????????????
        this.ui_btnBupaiAllCard.onClick(() => {
            this.selectBupaiAll();
            this.showCurInsAdd(this.tempInsAddGold);
        });
        this.ui_btnMixBaoxian.onClick(() => {
            // if(this.ui_sliderInsAdd.enabled == false) return;
            this.ui_sliderInsAdd.value = this.ui_sliderInsAdd.min;
            this.showCurInsAdd(UIUtil.NumberToInt(this.ui_sliderInsAdd.min))
            // if (this.tempInsAddGold <= 0) {
            // this.ui_fenchiTip.text = "";//???????????????
            //     return;
            // }
            this.ui_fenchiNumText.text = UIUtil.formatNumber100(this.zhuInsAddGold + this.fenInsAddGold) + "";
            this.ui_fenchiTip.text = TexasLanguage.getLanguageById(2237);//????????????
        });
        this.ui_btnMaxBaoxian.onClick(() => {
            // if(this.ui_sliderInsAdd.enabled == false) return;
            this.ui_sliderInsAdd.value = this.ui_sliderInsAdd.max;
            this.showCurInsAdd(UIUtil.NumberToInt(this.ui_sliderInsAdd.max))

            this.ui_fenchiNumText.text = UIUtil.formatNumber100(this.zhuInsAddGold + this.fenInsAddGold) + "";
            this.ui_fenchiTip.text = TexasLanguage.getLanguageById(2237);//????????????
        });

        this.ui_sliderOutGold.on(fgui.Event.STATUS_CHANGED, (slider) => {
            let num = UIUtil.NumberToInt(slider.value);
            this.ui_outGold_num.text = num + "";
            let curGold = UIUtil.formatNumber100(this.model.tableLockGold);
        }, this);

        //??????????????????
        this.ui_btnOutGold.onClick(() => {
            let num = UIUtil.NumberToInt(this.ui_sliderOutGold.value);
            this.ui_outGoldPanel.visible = false;
            F_TexasViewCtr.instance.cs_goldback_tex(num * 100);
            this._isCanOutGold = true;
        });

        this.ui_btn_close_outGold.onClick(() => {
            this.ui_outGoldPanel.visible = false;
        });
    }

    public ShowHistory() {
        this.historyComp.Show();
        // this.ui_btnCollect.visible = true;
        this.ui_historyPanel.node.x = 1080;
        this.ui_historyPanel.node.runAction(cc.sequence(
            cc.moveTo(0.2, cc.v2(0, this.ui_historyPanel.y)),
            cc.callFunc(() => {
                F_TexasViewCtr.instance.cs_thistory_tex();
            }),
        ));
    }

    public ShowHistory_bigend() {
        this.historyComp.Show();
        // this.ui_btnCollect.visible = true;
        this.ui_historyPanel.node.x = 1080;
        this.ui_historyPanel.node.runAction(cc.sequence(
            cc.moveTo(0.2, cc.v2(0, this.ui_historyPanel.y)),
            cc.callFunc(() => {
                F_TexasViewCtr.instance.cs_roomhistory_tex();
            }),
        ));
    }

    public ShowAnchorCcardsTip(isShow: boolean) {
        this.ui_vedioCcardTip.visible = isShow;
    }

    private SetButtonEnable(btn: fgui.GButton, isEnable: boolean, btnColor: cc.Color = null, txtColor: cc.Color = null) {
        btn.enabled = isEnable;
        let _img: fgui.GImage = btn.getChild("Image").asImage;
        if (_img == null) return;

        if (isEnable) {
            _img.color = btnColor == null ? cc.Color.WHITE : btnColor;
        } else {
            _img.color = cc.Color.GRAY;
        }

        if (btn._children.length > 0) {
            let text: fgui.GTextField = btn._children[1].asTextField;
            if (text != null) {
                if (isEnable) {
                    text.color = txtColor == null ? cc.Color.WHITE : txtColor;
                } else {
                    text.color = cc.Color.GRAY;
                }
            }
        }
    }

    public cs_delay_tex() {
        F_TexasViewCtr.instance.cs_delay_tex();
    }

    public sc_delay_tex(data: sc_delay_tex) {

    }

    public sc_delay_tex_n(data: sc_delay_tex_n) {
        //??????????????????,????????????????????????????????????????????????????????????????????????????????????    
        this._bftable.userList.forEach(tempUser => {
            if (tempUser == null || tempUser.player == null) return true;
            //??????????????????,????????????,???,??????????????????
            if (tempUser.player.userid == data.UserID) {
                if (data._msgid <= 0 && tempUser.self)//isReBack()
                {
                    //????????????????????????????????????????????????????????????
                    tempUser.showDelay(this.model.lefttime);
                }
                else
                    tempUser.showDelay(data.time);

                if (tempUser.self)//??????????????????????????????
                {
                    this.insdelayTime = data.time;
                    F_TexasViewCtr.instance.Model.delayCount = data.delays;
                    this.ShowDelay(true);
                }
            }
        });
    }

    private SetAutoGamble(isAuto: boolean) {
        this.isAutoFollow = isAuto;
        this.ui_txtAutoFollow.text = isAuto ? TexasLanguage.getLanguageById(1393) : TexasLanguage.getLanguageById(2233);//?????? ??????//n??????
    }

    private SetAutoQiPai(isAuto: boolean) {
        this.isAutoQiPai = isAuto;
        this.ui_txtAutoQiPai.text = isAuto ? TexasLanguage.getLanguageById(1393) : TexasLanguage.getLanguageById(1294);//?????? ??????\n???/???
    }

    public AutoGambleGold() {
        if (this.isAutoFollow) {
            this.GambleMultiple(1);
        }
    }

    public AutoQiPai() {
        if (this.isAutoQiPai) {
            let isCanXiu = (this.model._mingamble <= 0 && this.model._emaxg <= 0);
            if (isCanXiu) {
                this.GambleXiu();
            } else {
                F_TexasViewCtr.instance.cs_giveup_tex(F_TexasViewCtr.instance.Model._posServer);
            }
        }
    }

    public AutoGamble(_select: boolean) {
        this.AutoGambleGold();
    }

    public ClearTable() {
        if (this.model.clubid > 0 && this.model.IsSupper) {
            this.ui_txtMoney.text = UIUtil.formatNumber100(this.model.cgold) + "";
        }
        else {
            this.ui_txtMoney.text = UIUtil.formatNumber100(F_TexasViewCtr.instance.Model.mPlayerModel.gold) + "";
        }
        this.ui_CommonCards.visible = false;
        this.ui_StatusManager.getController("commoncard4").setSelectedIndex(0);
        this.ui_StatusManager.getController("commoncard5").setSelectedIndex(0);
        this.ui_curTexastype.visible = false;
        this.ui_jackpotparant.visible = false;
        this.ui_insjackpotparant.visible = false;
        this.curCommondCards = [];
        this._CommonCardImageList = [];

        F_TexasViewCtr.instance.Model._CommonCard = [];
        F_TexasViewCtr.instance.Model._OpenCount = 2;
        this.RetsetPlayer();
        for (let i = 0; i < this.ui_chippoolroot.asCom._children.length; i++) {
            this.ui_chippoolroot.asCom._children[i].node.destroy();
        }
        if (this._chippoolList != null) {
            for (let i = 0; i < this._chippoolList.length; i++) {
                if (this._chippoolList[i] != null) this._chippoolList[i].node.destroy();
            }
            this._chippoolList = [];
        }
        this.dichi = 0;
        this.ui_txtAll.text = "";
        this.ui_lasttxtAll.text = "";
        if (this.ChipRecordList != null) this.ChipRecordList = [];
    }

    public ShowCardsForce(othercard: CommonPosValListSD[]) {
        othercard.forEach(_shoupai => {
            let winer: TexasUserComp = this._bftable.GetUserByUserId(_shoupai.pos);
            if (winer == null) return true;
            winer.ShowCard(_shoupai.vallist); //???????????????????????????????????????
        });
    }
    /// <summary>
    /// ????????????????????????????????????
    /// </summary>
    /// <param name="card"></param>
    public ShowRestCommonCards(cards: number[]) {
        this.model.clicknum += 1;
        this.curCommondCards = [];
        UIUtil.Concat(this.curCommondCards, cards);
        if (this._CommonCardImageList.length == 0) {
            this._CommonCardImageList = [];
            for (let i = 0; i < 5; ++i) {
                let _tempCard = this.ui_StatusManager.getChild("CommonCard" + (i + 1));
                let card = _tempCard.node.getComponent(CardRedbetComp);
                if (card == null) {
                    card = _tempCard.node.addComponent(CardRedbetComp);
                    card.fguiComponent = _tempCard.asCom;
                }
                card.Init(false);
                this._CommonCardImageList.push(card);
            }
        }
        for (let i = 0; i < 5; ++i) {
            this._CommonCardImageList[i].Reset();
            this._CommonCardImageList[i].Hide();
        }
        this.ui_CommonCards.visible = true;
        for (let i = 0; i < cards.length; i++) {
            this.moveN1toN2(this._CommonCardImageList[i].node, this.cc_pos[i].node);
            this._CommonCardImageList[i].SetVal(cards[i]);
            this._CommonCardImageList[i].Show();
        }
        this.ShowSelfMaxCards();

        this.isCanSeeLeftCards = this._bftable.myUser.serverpos > 0 && this.model._CommonCard.length < 5; //??????????????????    
        let isShow = this._bftable.myUser.serverpos > 0 && !this.IsSelfWatch() && !this.IsSelfWaitToTakeIn();
        this.ui_btnLeftCards.getChild("Text").asTextField.text = this.getLeftCardCost();
        this.ui_btnLeftCards.visible = (isShow && this.isCanSeeLeftCards);
    }


    public scalarArrayEquals(array1, array2) {
        let b = array1.length == array2.length
        if (b) {
            for (var i = 0; i < array1.length; i++) {
                if (array1[i] != array2[i]) {
                    b = false;
                    return b;
                }
            }
        }
        return b;
    }

    public showCardIndex: number = 0;
    public isSending: boolean = false;
    public ShowCommonCards() {
        if (F_TexasViewCtr.instance.Model._CommonCard != null && F_TexasViewCtr.instance.Model._CommonCard.length != 0) {
            if (this._CommonCardImageList.length == 0) {
                this._CommonCardImageList = [];
                for (let i = 0; i < 5; ++i) {
                    let _tempCard = this.ui_StatusManager.getChild("CommonCard" + (i + 1)); //ui_CommonCards
                    let card = _tempCard.node.getComponent(CardRedbetComp);
                    if (card == null) {
                        card = _tempCard.node.addComponent(CardRedbetComp);
                        card.fguiComponent = _tempCard.asCom;
                    }
                    card.Init(false);
                    this._CommonCardImageList.push(card);
                }
            }

            if (this.showCardIndex == 5) { //5??????????????????
                for (let i = 0; i < 5; ++i) {
                    this._CommonCardImageList[i].Reset();
                    this._CommonCardImageList[i].Hide();
                }

                this.ui_CommonCards.visible = true;
                for (let i = 0; i < this.curCommondCards.length; i++) {
                    this.moveN1toN2(this._CommonCardImageList[i].node, this.cc_pos[i].node);
                    this._CommonCardImageList[i].SetVal(this.curCommondCards[i]);
                    this._CommonCardImageList[i].Show();
                }
                this.ShowSelfMaxCards();
            } else {
                this.showCommonAni();
            }
            // if (this.scalarArrayEquals(this.curCommondCards, F_TexasViewCtr.instance.Model._CommonCard)) {
            //     for (let i = 0; i < 5; ++i) {
            //         this._CommonCardImageList[i].Reset();
            //         this._CommonCardImageList[i].Hide();
            //     }

            //     this.ui_CommonCards.visible = true;
            //     for (let i = 0; i < this.curCommondCards.length; i++) {
            //         this.moveN1toN2(this._CommonCardImageList[i].node, this.cc_pos[i].node);
            //         this._CommonCardImageList[i].SetVal(this.curCommondCards[i]);
            //         this._CommonCardImageList[i].Show();
            //     }
            //     this.ShowSelfMaxCards();
            // } else {
            //     this.showCommonAni();
            // }
        }
        else {
            this.ui_CommonCards.visible = false;
            this.ui_StatusManager.getController("commoncard4").setSelectedIndex(0);
            this.ui_StatusManager.getController("commoncard5").setSelectedIndex(0);
            this.ui_curTexastype.visible = false;
            this.curCommondCards = [];
            this.ShowSelfMaxCards();//???????????????????????????????????????????????????                       
        }
    }

    public show3cards: boolean;
    public show4card: boolean;
    public show5card: boolean;

    public showCommonAni() {
        if (F_TexasViewCtr.instance.Model._CommonCard.length < 3) {
            console.log("?????????????????? = " + F_TexasViewCtr.instance.Model._CommonCard.length);
            return;
        }
        if (this.isSending) return;
        if (this.showCardIndex < 3) {
            // ??????????????????
            F_TexasViewCtr.instance.RefreshUserCurGamble();
            this.scheduleOnce(() => {
                this.ui_CommonCards.visible = true;
                this.ShowCommonAniBy3();
            }, 0.2)
        } else if (this.showCardIndex == 3) {
            // ???????????????
            this.ShowCommonAniBy4_5(4);
        } else if (this.showCardIndex == 4) {
            // ????????????
            this.ShowCommonAniBy4_5(5);
        } else {
            // ????????????
        }

        // if (F_TexasViewCtr.instance.Model._CommonCard.length == 3) //?????????????????????
        // {
        //     if (this.show3cards) {
        //         return;
        //     }

        //     //????????????????????????????????????
        //     F_TexasViewCtr.instance.RefreshUserCurGamble();
        //     this.scheduleOnce(() => {
        //         this.ui_CommonCards.visible = true;
        //         this.ShowCommonAniBy3();
        //     }, 0.2)

        // } 
        // else {
        //     this.ui_CommonCards.visible = true;
        //     let aniCount = F_TexasViewCtr.instance.Model._CommonCard.length - this.curCommondCards.length;
        //     if (aniCount <= 2) {
        //         if (this.show3cards) {
        //             this.show4card = F_TexasViewCtr.instance.Model._CommonCard.length == 4;
        //             return;
        //         }
        //         if (this.show4card) {
        //             this.show5card = F_TexasViewCtr.instance.Model._CommonCard.length == 5;
        //             return;
        //         }
        //         if (this.show5card)
        //             return;
        //         //?????????????????????????????????????????????????????????
        //         //console.log("ssssssssssssssssssss F_TexasViewCtr.instance.Model._CommonCard.Count ==== " + F_TexasViewCtr.instance.Model._CommonCard.Count);
        //         let delayTime = F_TexasViewCtr.instance.Model._CommonCard.length - this.curCommondCards.length == 2 ? 2 : 0;
        //         this.ShowCommonAniBy45(0, delayTime);
        //     }
        //     else {
        //         this.ui_CommonCards.visible = true;
        //         if (this.show3cards) {
        //             this.show4card = F_TexasViewCtr.instance.Model._CommonCard.length == 4;
        //             return;
        //         }
        //         if (this.show4card) {
        //             this.show5card = F_TexasViewCtr.instance.Model._CommonCard.length == 5;
        //             return;
        //         }
        //         if (this.show5card)
        //             return;
        //         //?????????????????????4?????????5????????????????????????????????????
        //         //console.log("ddddddddddddddddddddddddddd F_TexasViewCtr.instance.Model._CommonCard.Count ==== " + F_TexasViewCtr.instance.Model._CommonCard.Count);
        //         this.ShowCommonAniBy3(() => {
        //             this.ShowCommonAniBy45(1, 3);
        //         });
        //     }
        // }
    }

    /// <summary>
    /// ???????????????.?????????1.5S
    /// </summary>
    /// <param name="onComplete"></param>
    public ShowCommonAniBy3(onComplete: Function = null) {
        for (let i = 0; i < this._CommonCardImageList.length; i++) {
            this._CommonCardImageList[i].Reset();
            this._CommonCardImageList[i].Hide();
            if (i + 1 > F_TexasViewCtr.instance.Model._CommonCard.length || i > 2) {
                continue;
            }
            let timeout = setTimeout(() => {
                if (!this._CommonCardImageList) return;
                this.isSending = true;
                var tempGo = this._CommonCardImageList[i].node;
                var tempCard: CardRedbetComp = this._CommonCardImageList[i];
                this.moveN1toN2(tempGo, this.cc_pos[0].node); //tempGo.position =  this.cc_pos[0].node.position;
                tempGo.stopAllActions();
                var cardValue = F_TexasViewCtr.instance.Model._CommonCard[i];
                tempCard.Show();
                if (i == 0) {
                    this.show3cards = true;
                    tempCard.SetVal(0);
                    tempGo.runAction(cc.sequence(
                        cc.delayTime(0.2),
                        cc.callFunc(() => {
                            tempCard.Turnover(cardValue);
                        }),
                    ));
                }
                else if (i == 1) {
                    tempCard.SetVal(0);
                    var v = this.convertNodeSpaceAR(tempGo, this.cc_pos[i].node)
                    tempGo.runAction(cc.sequence(
                        cc.moveTo(0.2, cc.v2(v.x, v.y)),
                        cc.callFunc(() => {
                            tempCard.Turnover(cardValue);
                        }),
                    ));
                }
                else {
                    tempCard.SetVal(0);
                    var v2 = this.convertNodeSpaceAR(tempGo, this.cc_pos[i].node)
                    tempGo.runAction(cc.sequence(
                        cc.callFunc(() => {
                            tempCard.Show();
                        }),
                        cc.moveTo(0.2, cc.v2(v2.x, v2.y)),
                        cc.callFunc(() => {
                            tempCard.Turnover(cardValue);
                        }),
                        cc.delayTime(0.5),
                        cc.callFunc(() => {
                            this.show3cards = false;
                            if (F_TexasViewCtr.instance.Model._CommonCard.length > 3) {
                                this.curCommondCards = F_TexasViewCtr.instance.Model._CommonCard.slice(0, 3);
                            }
                            else {
                                this.curCommondCards = F_TexasViewCtr.instance.Model._CommonCard;
                            }

                            if (onComplete != null)//????????????????????????
                            {
                                onComplete();
                            }
                            // else//??????????????????????????????????????????????????????????????????
                            // {
                            //     if (F_TexasViewCtr.instance.Model._CommonCard.length > 3) {
                            //         this.ShowCommonAniBy45(1, 3);
                            //     }
                            // }
                            // if (F_TexasViewCtr.instance.Model._CommonCard.length == 3) {
                            //     this.ShowSelfMaxCards();
                            // }
                            this.ShowSelfMaxCards();
                            this.isSending = false;
                            this.showCardIndex = 3;
                            this.showCommonAni();
                        }),
                    ));
                }
            }, 50 * i);
            TimeInfoMgrTex.instance.addTimerNoCallback(timeout);
        }
    }

    public ShowCommonAniBy4_5(index: number) {
        console.log("ShowCommonAniBy4_5 === ", index);
        let i = index - 1;
        var cardValue = F_TexasViewCtr.instance.Model._CommonCard[i];
        console.log("ShowCommonAniBy4_5  cardValue  === ", cardValue);
        if (!cardValue || cardValue <= 0) return;
        F_TexasViewCtr.instance.RefreshUserCurGamble();
        this._CommonCardImageList[i].Hide();
        this._CommonCardImageList[i].Reset();

        var tempGo = this._CommonCardImageList[i].node;
        var tempCard = this._CommonCardImageList[i];
        tempGo.stopAllActions();
        this.moveN1toN2(tempGo, this.cc_pos[i].node);
        var tempIdx = i;
        this.show4card = i == 3;
        this.show5card = i == 4;

        tempGo.anchorX = 0.5;
        tempGo.anchorY = 0.5;
        tempGo.runAction(cc.sequence(
            cc.callFunc(() => {
                this.isSending = true;
                if (this.show4card) this.ui_StatusManager.getController("commoncard4").setSelectedIndex(0);
                if (this.show4card) this.ui_StatusManager.getController("commoncard4").setSelectedIndex(1);
                if (this.show5card) this.ui_StatusManager.getController("commoncard5").setSelectedIndex(0);
                if (this.show5card) this.ui_StatusManager.getController("commoncard5").setSelectedIndex(1);
            }),
            cc.delayTime(0.2),
            cc.callFunc(() => {
                tempCard.Show();
                tempCard.SetVal(0);
            }),
            cc.spawn(
                cc.scaleTo(0.15, 0, 1),
                cc.skewTo(0.15, 0, 20),
            ),
            cc.callFunc(() => {
                tempCard.SetVal(cardValue);
                tempGo.skewY = -20;
            }),
            cc.spawn(
                cc.scaleTo(0.15, 1, 1),
                cc.skewTo(0.15, 0, 0)
            ),

            cc.callFunc(() => {
                this.moveN1toN2(tempGo, this.cc_pos[tempIdx].node);
                if (tempIdx == 3) this.show4card = false;
                if (tempIdx == 4) this.show5card = false;
                this.curCommondCards = F_TexasViewCtr.instance.Model._CommonCard.slice(0, tempIdx + 1);
                this.ShowSelfMaxCards();

                this.isSending = false;
                this.showCardIndex = index;
            }),
            cc.delayTime(1),
            cc.callFunc(() => {
                this.showCommonAni();
            })
        ));
    }

    /// <summary>
    /// ??????????????????????????????
    /// </summary>
    /// <param name="delayTime"></param>
    public ShowCommonAniBy45(delayTime4: number, delayTime5: number) {
        for (let i = this.curCommondCards.length; i < this._CommonCardImageList.length; i++) {
            // console.error("getNumberOfRunningActions =" + this._CommonCardImageList[i].node.getNumberOfRunningActions());
            // if (this._CommonCardImageList[i].node.getNumberOfRunningActions() > 0) {
            //     continue;
            // }

            F_TexasViewCtr.instance.RefreshUserCurGamble();
            this._CommonCardImageList[i].Reset();
            this._CommonCardImageList[i].Hide();
            if (i + 1 > F_TexasViewCtr.instance.Model._CommonCard.length) {
                continue;
            }
            let timeout = setTimeout(() => {
                var tempGo = this._CommonCardImageList[i].node;
                var tempCard = this._CommonCardImageList[i];
                tempCard.Show();
                tempGo.stopAllActions();
                this.moveN1toN2(tempGo, this.cc_pos[i].node);
                tempCard.SetVal(0);
                var cardValue = F_TexasViewCtr.instance.Model._CommonCard[i];
                var tempIdx = i;
                this.show4card = i == 3;
                this.show5card = i == 4;

                tempGo.anchorX = 0.5
                tempGo.anchorY = 0.5
                tempGo.runAction(cc.sequence(
                    cc.callFunc(() => {
                        if (this.show4card) this.ui_StatusManager.getController("commoncard4").setSelectedIndex(0);
                        if (this.show4card) this.ui_StatusManager.getController("commoncard4").setSelectedIndex(1);
                        if (this.show5card) this.ui_StatusManager.getController("commoncard5").setSelectedIndex(0);
                        if (this.show5card) this.ui_StatusManager.getController("commoncard5").setSelectedIndex(1);
                    }),
                    cc.delayTime(0.2),
                    cc.spawn(
                        cc.scaleTo(0.15, 0, 1),
                        cc.skewTo(0.15, 0, 20),
                    ),
                    cc.callFunc(() => {
                        tempCard.SetVal(cardValue);
                        tempGo.skewY = -20;
                    }),
                    cc.spawn(
                        cc.scaleTo(0.15, 1, 1),
                        cc.skewTo(0.15, 0, 0)
                    ),

                    cc.callFunc(() => {
                        this.moveN1toN2(tempGo, this.cc_pos[tempIdx].node);
                        if (tempIdx == 3) this.show4card = false;
                        if (tempIdx == 4) this.show5card = false;
                        this.curCommondCards = F_TexasViewCtr.instance.Model._CommonCard.slice(0, tempIdx + 1);
                        this.ShowSelfMaxCards();
                        if (this.show5card) {
                            // this.ShowCommonAniBy45(0, 1);
                        }
                    }),
                ));
            }, (i == this._CommonCardImageList.length - 1 ? delayTime5 : delayTime4) * 1000);
            TimeInfoMgrTex.instance.addTimerNoCallback(timeout);
        }
    }

    /// <summary>
    /// ?????????????????????????????????????????????
    /// </summary>
    public ShowSelfMaxCards() {
        if (F_TexasViewCtr.instance.Model.delay == 1) {
            if (!this.ismyturn) return;//???????????????????????????????????????????????????????????????????????????                
        }
        this.selectFiveCards = [];
        this.maxCards = [];
        this._bftable.userList.forEach(tempUser => {
            if (tempUser == null) return true;
            //???????????????????????????playing???????????????????????????????????????????????????????????????????????????????????????&& F_TexasViewCtr.instance.Model.isGaming
            if (tempUser.self && !tempUser.IsWatch() && tempUser.IsPlaying() && !tempUser.IsKeep()) {
                console.log("this.model._ShouPai == ", this.model._ShouPai);
                console.log("this.curCommondCards == ", this.curCommondCards);
                this.selectFiveCards = Texas.GetFiveFromSeven(this.model._ShouPai, this.curCommondCards, this.model._ShouPai.length + this.curCommondCards.length);
                console.log("selectFiveCards=" + this.selectFiveCards);
                if (this.selectFiveCards.length >= 2)//?????????5??????????????????????????????2???????????????????????????????????? 
                {
                    this.maxCards = Texas.GetMaxTypeCards(this.selectFiveCards);
                    tempUser.ShowMaxCards(this.selectFiveCards, this.maxCards);
                    this.showCommonMaxCards(this.maxCards);
                    this.ui_curTexastype.visible = true;
                    var _type = Texas.GetTexasType(this.selectFiveCards);
                    if (this.selectFiveCards.length == 2)//???????????????????????????????????????????????????
                    {
                        if (_type == PokerTexasType.Five_ONE_PAIR) {
                            this.ui_txtcurtexastype.text = Texas.GetNameByType(_type);
                        }
                        else {
                            this.ui_txtcurtexastype.text = Texas.GetNameByType(PokerTexasType.Five_Single);
                        }
                    }
                    else {
                        this.ui_txtcurtexastype.text = Texas.GetNameByType(_type);
                    }
                }
            }
        });
    }

    private showCommonMaxCards(maxCards: number[]) {
        this._CommonCardImageList.forEach(temp => {
            if (this.selectFiveCards.indexOf(temp.Value) == -1) {
                temp.SetColorGary();
            }
            else {
                temp.ResetColor();
            }

            temp.ShowMaxCardBg(maxCards.indexOf(temp.Value) >= 0);
        });
    }
    /// <summary>
    /// ?????????????????????
    /// </summary>
    /// <returns></returns>
    public GetNextEmptyPos(): TexasUserComp {
        return null;
    }
    /// <summary>
    /// ??????????????????
    /// </summary>
    /// <returns></returns>
    public GetAllPos(): TexasUserComp[] {
        let list: TexasUserComp[] = [];
        return list;
    }
    public IsShowMyAction(isShow: boolean) {
        this.ui_btns.visible = isShow;
        this.ui_selfEndtimetips.visible = (this.ui_btns.visible && this.ui_btnqipai.visible);
        this.ShowDelay(this.ui_selfEndtimetips.visible);
    }
    public MineExecute(_isMine: boolean, turnChange: boolean) {
        console.log("===??????????????????==" + _isMine)
        if (_isMine) {
            console.log("IsCanHandleAction === ", this.IsCanHandleAction())
            if (this.IsCanHandleAction()) {
                if (this.isAutoQiPai) {
                    this.ShowActionBtns(false);
                    this.AutoQiPai();

                    this.SetAutoGamble(!this.isAutoQiPai);//?????????/???????????????????????????/???
                    this.SetAutoQiPai(false);
                }
                else if (this.isAutoFollow && this.GetFollowMinGamble() <= 0) //????????????
                {
                    this.ShowActionBtns(false);
                    this.AutoGambleGold();

                    this.SetAutoGamble(!this.isAutoFollow);//???????????????????????????????????????
                    this.SetAutoQiPai(false);
                }
                else {
                    this.SetAutoGamble(false);
                    this.SetAutoQiPai(false);

                    this._bftable.myUser.SetLastSite();
                    if (this.historyComp) this.historyComp.Hide();
                    AudioManager.Singleton.play("", "game_myturn", false);
                    console.log("this.model.insList31 = ", this.model.insList31);
                    console.log("this.model.insList32 = ", this.model.insList32);
                    if (!this.model.insList31 && !this.model.insList32) {
                        this.HandleActionBtnsForSelfTurn(turnChange);
                    }
                    this.ShowDelay(true);
                }
                // let isShowCard: boolean = false;
                // if (this.model.delay == 1 && !this.ismyturn) {
                //     this.ismyturn = true;
                // } else {
                //     isShowCard = true;
                // }
                // if (isShowCard)//????????????????????????????????????????????????????????????????????????????????????????????????
                // {
                let _tempUser: TexasUserComp = this._bftable.userList.find(item => { return item.self == true });
                if (_tempUser != null && _tempUser.player != null) {
                    for (var i = 0; i < this.model._ShouPai.length; i++) {
                        let index = i;
                        let _poker = 0;
                        if (_tempUser.self) _poker = this.model._ShouPai[i];
                        let card: CardRedbetComp = _tempUser.GetCard(index);
                        if (card == null) { console.log("fetal error: SendCard is null"); return; }
                        console.log("2222222222====", _poker);
                        _tempUser.SetCardVal_pub(card, _poker);
                        this.IsShowMyAction(true);
                    }
                }
                // }
                //?????? ???????????????????????????????????????????????????????????????????????????bug
                // if (this.ui_btns.visible) {
                //     var _tempUser: TexasUserComp = this._bftable.userList.find(item => { return item.self == true });
                //     if (_tempUser != null && _tempUser.player != null) {
                //         for (var i = 0; i < this.model._ShouPai.length; i++) {
                //             let index = i;
                //             let _poker = this.model._ShouPai[i];
                //             let card: CardRedbetComp = _tempUser.GetCard(index);
                //             if (card == null) { console.log("fetal error: SendCard is null"); return; }
                //             console.log("33333333====", _poker);
                //             _tempUser.SetCardVal_pub(card, _poker);
                //         }
                //     }
                // }
            }

            if (this.IsSelfWatch()) {
                console.log("??????????????? ????????????????????????");
            }
            if (this.IsSelfWaitToTakeIn()) {
                console.log("?????????????????? ????????????????????????");
            }
        } else {
            this.Wait(); //????????????????????????
            //???????????????,????????????????????????,????????????????????????
            if (this.IsCanHandleAction()) {
                this.HandleActionBtnsForOtherTurn();
            }
        }
    }

    public MineInsuranceExecute(_isMine: boolean) {
        if (_isMine) {
            if (this.IsCanHandleAction()) {
                this._bftable.myUser.SetLastSite();
                AudioManager.Singleton.play("", "game_myturn");
                //???????????????????????????
                let timeout = setTimeout(() => {
                    this.HandleInsuranceBtnsForSelfTurn();
                }, 1000);
                TimeInfoMgrTex.instance.addTimerNoCallback(timeout);
                this.ShowDelay(true);//??????????????????????????????
            }
            if (this.IsSelfWatch()) {
                console.log("??????????????? ????????????????????????");
            }
            if (this.IsSelfWaitToTakeIn()) {
                console.log("?????????????????? ????????????????????????");
            }
        } else {

        }
    }

    public ShowDelay(isShow: boolean) {
        this.ui_delayAdd.visible = (isShow && F_TexasViewCtr.instance.Model.delayCount < 5);//???????????????????????????,??????????????????????????????5???
        this.ui_insDelayAdd.visible = (isShow && F_TexasViewCtr.instance.Model.delayCount < 5);//???????????????????????????,??????????????????????????????5???
        if (isShow) {
            let delayCost = this.ui_delayAdd.getChild("Text").asTextField;
            let expend: string = this.getDelayExpend();
            // console.log("expend === ", expend);
            // delayCost.text = F_TexasViewCtr.instance.Model.delayCount == -1 ? TexasLanguage.getLanguageById(2181) : (20.0 * (UIUtil.NumberToInt(Math.pow(2, F_TexasViewCtr.instance.Model.delayCount)))).toString();//-1??????????????????????????????
            delayCost.text = expend;
            this.ui_InsDelayGold.text = delayCost.text;
            this.ui_InsCntDown.text = "+15s";
        }
    }

    // ??????????????????
    public getDelayExpend(): string {
        let expend: number = 0;
        let count: number = F_TexasViewCtr.instance.Model.delayCount;
        if (count == -1) {
            return TexasLanguage.getLanguageById(2181);
        }
        console.log("this.model.brate == ", this.model.brate);
        let brate = UIUtil.formatNumber100(this.model.brate);
        if (brate < 1) { //???
            expend = 20;
        } else if (brate == 1 || brate == 2 || brate == 5) {//???
            expend = 200;
        } else if (brate == 10 || brate == 25 || brate == 50) {//???
            expend = 500;
        } else if (brate == 100 || brate == 200 || brate == 500) {//???
            expend = 1000;
        }
        let expendStr: string = (UIUtil.formatNumber100(expend) * (UIUtil.NumberToInt(Math.pow(2, count)))).toFixed(2);
        return expendStr;
    }

    public Wait() {
        this.ShowDelay(false);
        this.hideUIAllBtns();
    }
    private hideUIAllBtns() {
        this.ShowConfirmHandlePanel(false);
        this.ShowActionBtns(false);
        this.StopClock();
        if (this.IsCanHandleAction() && !this.model.isinsurance) {
            this.ShowActionAuto(true);
        }

        this.CheckBtnBackTableState();
        this.Action = false;
    }
    private timeUpId: any;
    //???????????????????????????
    public ShowClock(cdTime = 15, totalTime = 15, isShowText = true, formatTime: string = null) {
        if (this.model.isinsurance)
            formatTime = "";//??????
        else
            formatTime = TexasLanguage.getLanguageById(1395) + "\n";//??????
        let cd = cdTime;
        this.endTime = UIUtil.NumberToInt(cc.director.getTotalTime() / 1000) + cdTime;
        this.ui_selfEndtimetips.fillAmount = cd / totalTime + 0.01;
        this.showUICountTimeText(isShowText, cd, formatTime);
        this.ui_selfEndtimetips.node.stopAllActions();
        this.ui_selfEndtimetips.node.stopAllActions();
        // this.ui_selfEndtimetips.DOFillAmount (0, cd).SetEase (Ease.Linear);
        if (cd > 5) AudioManager.Singleton.stopEffect("texas_timeout");//???????????????>5?????????5???????????????
        this.schedule(() => {
            cd = UIUtil.NumberToInt(this.endTime - UIUtil.NumberToInt(cc.director.getTotalTime() / 1000));
            if (isShowText) {
                if (formatTime == null) {
                    this.ui_selfEndtimetipsText.text = cd + "";
                }
                else {
                    this.ui_selfEndtimetipsText.text = formatTime + cd;
                }
            }

            // ????????????5???????????????
            if (cd == 5) {
                AudioManager.Singleton.play("", "texas_timeout");
            }

        }, 1, cd)
    }
    //???????????????
    private showUICountTimeText(isShow = true, time = 15, formatTime = null) {
        this.ui_selfEndtimetips.visible = (isShow && ((this.ui_btns.visible && this.ui_btnqipai.visible) || this.ui_BtnInsurancePanel.visible));
        if (isShow && time != -9999) {
            this.ui_selfEndtimetipsText.text = formatTime + "" //string.Format (formatTime, time);
        }
    }
    public StopClock(isForce = false) {
        // AudioManager.Singleton.removeSound(timeUpId);
        this.ui_selfEndtimetips.node.stopAllActions();
        // this.ui_selfEndtimetips.transform.DOKill ();
        this.showUICountTimeText(false);
    }
    private turnInterval: number = 0;
    private countInterval: number = 0.05;
    private userInterval: number = 0;
    private static _cardNum: number = 2;

    // ?????? 
    // public FaPai_n(_myCards: number[]) {
    //     let _tempUserList: TexasUserComp[] = this._bftable.userList;
    //     for (var i = 0; i < F_TexasView._cardNum; i++) {
    //         let caechcout = 0;
    //         for (var j = 0; j < _tempUserList.length; j++) {
    //             let _tempUser: TexasUserComp = _tempUserList[j];
    //             if (_tempUser.player == null) continue;
    //             caechcout++;
    //             let index = i;
    //             let _poker = 0;
    //             if (_tempUser.self) _poker = _myCards[i];
    //             this.scheduleOnce(() => {
    //                 _tempUser.SendCard(index, _poker);
    //             }, i * 0.2 + caechcout * 0.1);
    //         }
    //     }
    // }
    // public FaPai_nb(_myCards: number[], isAnim: boolean) {
    //     if (!this.model.isGaming) { return; }
    //     if (this.model.PlayingUsers == null || this.model.PlayingUsers.length <= 0) { return; } //??????????????????????????? 
    //     //_myCards ?????? ?????????????????????????????????????????????????????????????????????
    //     let count = 0;
    //     let _tempUserList: TexasUserComp[] = this._bftable.userList;
    //     for (var i = 0; i < F_TexasView._cardNum; i++) {
    //         let userIndex = 0;
    //         for (var j = 0; j < this.model.PlayingUsers.length; j++) {
    //             let playingUser: CommonPosValSD = this.model.PlayingUsers[j];
    //             if (playingUser.val <= 0)
    //                 continue; //???????????????????????????0
    //             let _tempUser: TexasUserComp = this._bftable.GetUserByUserId(playingUser.pos);

    //             if (_tempUser == null || _tempUser.player == null) continue;
    //             if (_tempUser.curCardIndex >= i) { continue; }
    //             if (_tempUser.IsWatch() || _tempUser.IsWaitToTakeIn()) { continue; }
    //             if (_tempUser.userConnectState == UserConnectState.keepSeat) { continue; }
    //             userIndex++;
    //             count++;
    //             let index = i;
    //             let _poker = 0;
    //             if (_tempUser.self && _myCards != null && i < _myCards.length) _poker = _myCards[i];
    //             let delay = isAnim ? count * this.countInterval + userIndex * this.userInterval : 0;
    //             this.SendUserCard(_tempUser, delay, index, _poker, null, false);
    //             // console.error("playingUser.pos = "+ _tempUser.serverpos);
    //             // this.sendCardAni[_tempUser.serverpos].visible = false;
    //         }
    //     }

    //     // this.ui_UserManager.getController("sendCard").setSelectedIndex(0);
    //     // this.ui_UserManager.getController("sendCard").setSelectedIndex(1);

    //     if (isAnim)
    //         this.PlaySendCardAudio(count);
    // }
    public FaPai_nb(_myCards: number[], isAnim: boolean) {
        if (!this.model.isGaming) { return; }
        if (this.model.PlayingUsers == null || this.model.PlayingUsers.length <= 0) { return; } //??????????????????????????? 
        //_myCards ?????? ?????????????????????????????????????????????????????????????????????
        let count = 0;
        for (var j = 0; j < this.model.PlayingUsers.length; j++) {
            let userIndex = 0;
            for (var i = 0; i < F_TexasView._cardNum; i++) {

                let playingUser: CommonPosValSD = this.model.PlayingUsers[j];
                if (playingUser.val <= 0)
                    continue; //???????????????????????????0
                let _tempUser: TexasUserComp = this._bftable.GetUserByUserId(playingUser.pos);

                if (_tempUser == null || _tempUser.player == null) continue;
                if (_tempUser.curCardIndex >= i) { continue; }
                if (_tempUser.IsWatch() || _tempUser.IsWaitToTakeIn()) { continue; }
                if (_tempUser.userConnectState == UserConnectState.keepSeat) { continue; }
                userIndex++;

                let index = i;
                let _poker = 0;
                if (_tempUser.self && _myCards != null && i < _myCards.length) _poker = _myCards[i];
                let delay = isAnim ? this.countInterval + this.userInterval : 0;
                this.SendUserCard(_tempUser, delay, index, _poker, null, false);

            }
        }

        if (isAnim)
            this.PlaySendCardAudio(count);
    }

    public SendOpenCard(isAnim: boolean) {
        if (this.model._CurTurnCount < 2) { return; }
        let count = 0;
        for (var i = 0; i < this.model._CurTurnCount - 1 && i < 2; i++) {
            if (2 + i <= this.curSendCardIndex) { continue; } //??????????????????????????????     
            this.curSendCardIndex = 2 + i; //2 ?????? ????????????

            let userIndex = 0;
            F_TexasViewCtr.instance.Model._pos2openPai.forEach(p2card => {
                let user: TexasUserComp = this._bftable.GetUserByPos(p2card.pos);
                if (p2card == null || user == null || user.player == null) { return true; }
                if (p2card.vallist.length > i) {
                    let cardIndex = 2 + i;
                    userIndex++;
                    count++;
                    let delay = isAnim ? count * this.countInterval + userIndex * this.userInterval : 0;
                    this.SendUserCard(user, delay, cardIndex, p2card.vallist[0], p2card.vallist, true);
                }
            });
        }

        //PlaySendCardAudio(count);
    }
    private curSendCardIndex = 0;
    public SendUserCard(_tempUser: TexasUserComp, delay: number, cardIndex: number, poker: number, openPai: number[], isAudio: boolean) {
        if (_tempUser.player == null) return;
        if (_tempUser.curCardIndex >= cardIndex) { return; }
        let _cardIndex = cardIndex;
        let _poker = poker;
        if (delay > 0) {
            this.scheduleOnce(() => {
                if (isAudio) {
                    AudioManager.Singleton.play("", "game_deal");
                }
                _tempUser.SendCard(_cardIndex, _poker, true, openPai);
            }, delay);
        }
        else {
            _tempUser.SendCard(_cardIndex, _poker, false, openPai);
        }
    }

    public FaPaiNoAni(_myCards: number[]) {
        if (!this.model.isGaming) { return; }
        if (this.model.PlayingUsers == null || this.model.PlayingUsers.length <= 0) { return; } //???????????????????????????
        for (var i = 0; i < F_TexasView._cardNum; i++) {
            let caechcout = 0;
            this._bftable.userList.forEach(_tempUser => {
                if (_tempUser == null || _tempUser.player == null) return true;
                if (_tempUser.IsWatch() || _tempUser.IsWaitToTakeIn()) return true;
                if (_tempUser.userConnectState == UserConnectState.keepSeat) return true;
                caechcout++;
                let index = i;
                let _poker = 0;
                if (_tempUser.self) _poker = _myCards[i];
                _tempUser.SendCardNoAni(index, _poker);
            });
        }
    }

    // ?????????????????? 
    public GiveUp(pos: number) {
        if (this._bftable == null) return;
        var user = this._bftable.GetUserByPos(pos);
        if (user == null) return;
    }

    // #region

    /// <summary>
    /// ??????????????????
    /// </summary>
    /// <param name="data"></param>
    public sc_gamble_tex(data: sc_gamble_tex) {

    }
    /// <summary>
    /// ??????????????????
    /// </summary>
    /// <param name="data"></param>
    public sc_insurance_tex(data: sc_insurance_tex) {
        if (this.insTimerCB) {
            this.unschedule(this.insTimerCB);
            this.ui_BtnInsurancePanel.visible = false;
        }
    }
    /// <summary>
    /// ??????????????????
    /// </summary>
    /// <param name="data"></param>
    public sc_giveup_tex(data: sc_giveup_tex) {
        this.hideUIAllBtns();
    }

    /// <summary>
    /// ???????????????
    /// </summary>
    /// <param name="data"></param>
    public sc_tablestart_tex_n(_bankerPos: number, _showCard: number[], _pos2Gamble: CommonPosValSD[], _pos2Gold: CommonPosValSD[], _pos2Bigsmall: CommonPosValSD[], remainTime: number, isReback: boolean, pos2strad: CommonPosValSD[]) {
        this._isCanOutGold = false;
        this.isHaveAddGold = false;
        this.isfirst = false;
        this.ismyturn = false;
        this.dichi = 0;
        this.showCardIndex = 0;
        this.show3cards = false;
        this.show4card = false;
        this.show5card = false;
        this.curCommondCards = [];
        this.ui_CommonCards.visible = false;
        this.ui_StatusManager.getController("commoncard4").setSelectedIndex(0);
        this.ui_StatusManager.getController("commoncard5").setSelectedIndex(0);
        this.ShowUILeftCards(false, false);
        this.StartGamingTimer(remainTime);
        this.unschedule(this.endTimer); //TimeInfoMgr.instance.StopTimer (this.endTimer);
        this.unschedule(this.timeOutTimer);//TimeInfoMgr.instance.StopTimer ((this.timeOutTimer);
        // console.log("[Progress: --- start ] sc_tablestart_tex_n  ");
        this.model.SetRemainTime(remainTime);
        F_TexasViewCtr.instance.Model.isGamestart = true;
        this.HideUIWaitPlayPanel();
        // ui_btnStart.gameObject.SetActive (false);
        this.ResetUI();
        this.hideUIAllBtns();
        this.ShowUIJackpot();
        this.UpdateJackpot();
        AudioManager.Singleton.play("", "game_chips_to_table");
        this.model._lastjpot = 0;
        let lastJport = 0;
        _pos2Gamble.forEach(_gamble => {
            this.model.SetUserData_isW_pos(_gamble.pos, _gamble.val > 0 ? 0 : 1); //????????????
            this.sc_tablestartgamble_tex_n(_gamble.pos, UIUtil.NumberToInt(_gamble.val), false, _bankerPos); //?????????????????????????????????
            lastJport += UIUtil.NumberToInt(_gamble.val);
        });

        //?????????????????????????????????????????????
        var firstdata = _pos2Bigsmall.reduce((i1, i2) => i1.val < i2.val ? i1 : i2);
        let firstUser: TexasUserComp = this._bftable.GetUserByUserId(firstdata.pos);
        if (firstUser != null && firstUser.self) {
            this.isfirst = true;
        }

        if (isReback) {
            this.moveMyGambleToTableGameble();
            F_TexasViewCtr.instance.RefreshUserCurGamble();
            this.UpdateLastJpot(lastJport); //???????????? ???????????????????????????????????????????????????
            this.UpdateJackpot(lastJport); //???????????? ?????????????????????????????????????????????
            this.fapaiAfterFirstGambleAni(_bankerPos, _showCard, _pos2Gamble, _pos2Gold, _pos2Bigsmall, remainTime, lastJport, pos2strad);
        }
        else {   //????????????????????????????????????????????????????????????
            this.scheduleOnce(() => {
                this.moveMyGambleToTableGameble();
                F_TexasViewCtr.instance.RefreshUserCurGamble();
                this.UpdateLastJpot(lastJport); //???????????? ???????????????????????????????????????????????????
                this.UpdateJackpot(lastJport); //???????????? ?????????????????????????????????????????????
            }, 0.2)
            //???????????????????????????????????????????????????????????????????????????

            this.scheduleOnce(() => {
                this.fapaiAfterFirstGambleAni(_bankerPos, _showCard, _pos2Gamble, _pos2Gold, _pos2Bigsmall, remainTime, lastJport, pos2strad);
            }, this.moveToTableTime + 0.2);
        }

        //?????????????????????????????????stradlle????????????????????????
        for (var i = 0; i < _pos2Gold.length; i++) {
            let user: CommonPosValSD = _pos2Gold[i];
            let _tempUser: TexasUserComp = this._bftable.GetUserByUserId(user.pos);
            if (_tempUser == null) continue;

            if (_tempUser.player != null) {
                _tempUser.UpdateMoney(UIUtil.NumberToInt(user.val));
            }

            if (_tempUser.IsWatch() || _tempUser.IsWaitToTakeIn()) { continue; }

            _tempUser.ShowUIReady(false);
            _tempUser.ShowUIWatch(false);
            _tempUser.ShowUIWiatTakeIn(false);
            if (_tempUser.serverpos == _bankerPos) {
                _tempUser.SetBanker(true);
            }
            else {
                _tempUser.SetBanker(false);
            }
            if (_tempUser.self && this._bftable.myUser != null) {

            }
        }

        // aof????????????????????????????????????????????????allin
        this.scheduleOnce(() => {
            for (var i = 0; i < _pos2Gamble.length; i++) {
                let gamble: CommonPosValSD = _pos2Gamble[i];
                for (let index = 0; index < _pos2Gold.length; index++) {
                    let user = _pos2Gold[index];
                    if (user.pos == gamble.pos) {
                        if (user.val == 0 && gamble.val > 0) { // ??????allin
                            let _tempUser: TexasUserComp = this._bftable.GetUserByUserId(user.pos);
                            if (_tempUser) {
                                AudioManager.Singleton.play("", "texas_qiao");
                                _tempUser.updateHandleStateText(TexasUserHandleState.allin);
                            }
                        }
                    }
                }
            }
        }, 0.5)
    }
    /// <summary>
    /// ???????????????????????????????????????????????????????????????????????????????????????
    /// </summary>
    /// <param name="_bankerPos"></param>
    /// <param name="_showCard"></param>
    /// <param name="_pos2Gamble"></param>
    /// <param name="_pos2Gold"></param>
    /// <param name="_pos2Bigsmall"></param>
    /// <param name="remainTime"></param>
    public fapaiAfterFirstGambleAni(_bankerPos: number, _showCard: number[], _pos2Gamble: CommonPosValSD[], _pos2Gold: CommonPosValSD[], _pos2Bigsmall: CommonPosValSD[], remainTime: number, lastjport: number, pos2strad: CommonPosValSD[]) {
        let dxJport = 0;
        _pos2Bigsmall.forEach(_bigsmall => //???????????????
        {
            this.sc_tablestartgamble_tex_n(_bigsmall.pos, UIUtil.NumberToInt(_bigsmall.val), false, _bankerPos);
            dxJport += UIUtil.NumberToInt(_bigsmall.val);
        });
        this.UpdateJackpot(dxJport + lastjport); //?????????????????? ?????????????????????????????????????????????????????????
        //stradlle??????????????????????????????stradlle,???????????????????????????stradlle
        if (_pos2Bigsmall.length > 2) {
            var stradlle = _pos2Bigsmall.reduce((i1, i2) => i1.val > i2.val ? i1 : i2);
            let stradlleUser: TexasUserComp = this._bftable.GetUserByUserId(stradlle.pos);
            if (stradlleUser != null) {
                stradlleUser.updateHandleStateText(TexasUserHandleState.stradlle);
            }
        }

        //?????????
        if (pos2strad != null) {
            for (var i = 0; i < pos2strad.length; i++) {
                let _tempUser: TexasUserComp = this._bftable.GetUserByUserId(pos2strad[i].pos);
                if (_tempUser != null) {
                    _tempUser.updateHandleStateText(TexasUserHandleState.strad);
                    _tempUser.GenerateChip_nbb(pos2strad[i].val, false, false);
                    console.error(_tempUser.player._n + "????????????" + pos2strad[i].val);
                }
            }
        }
        console.log("fapaiAfterFirstGambleAni _showCard === ", _showCard);
        this.FaPai_nb(_showCard, true);
        this.curSendCardIndex = 1;
    }

    /// <summary>
    /// ????????????
    /// </summary>
    public sc_ready_tex(data: sc_ready_tex) {
        this.curSendCardIndex = 0;
    }
    public sc_ready_tex_n(data: sc_ready_tex_n) {

    }

    private isCanSeeLeftCards = false;
    private isCanXiuPai = false;

    // ???????????? 
    public sc_end_tex_n(data: sc_end_tex_n) {
        //#region ????????????
        data._pos2ShouPai.forEach(_shoupai => {
            let winer: TexasUserComp = this._bftable.GetUserByUserId(_shoupai.pos);
            if (winer == null) return true;
            winer.ShowCard(_shoupai.vallist); //???????????????????????????????????????
        });
        data._pos2MaxPai.forEach(_shoupai => {
            let _tUser: TexasUserComp = this._bftable.GetUserByUserId(_shoupai.pos);
            if (_tUser == null) return true;
            _tUser.ShowMaxCard(_shoupai.vallist); //???????????????????????????????????????
            _tUser.SetShowStateGray();
        });

        if ((data._pos2ShouPai == null || data._pos2ShouPai.length <= 0) && data.Showcard != null && data.Showcard.length > 0)//????????????????????????
        {
            data.Showcard.forEach(_showpaiUser => {
                let _tUser: TexasUserComp = this._bftable.GetUserByUserId(_showpaiUser.uid);
                if (_tUser == null || _tUser.self || _showpaiUser.cards == null || _showpaiUser.cards.length <= 0) return true;
                _tUser.DisplayShowCard(_showpaiUser.cards); //????????????
            });
        }
        this.ismyturn = false;
        console.log("[Progress: --- game over ] sc_end_whi_n  :");
        this.HandleTableAndUserData_end(data, this.moveToTableTime + 0.15 + this.moveToUserTime);
        this.HandleTableUI_end(data);
        this.HandleTableAnimation_end(data);
    }

    private HandleTableAndUserData_end(data: sc_end_tex_n, delayShowTime: number) {
        this.curSendCardIndex = 0;
        this.model.SetMinStartGamble(data.limitgold);
        //???????????????,???????????????????????????????????????????????????????????????????????????????????????
        if (this.model.clubid > 0 && this.model.IsSupper) {
            this.model.cgold = data.ugold;//???????????????????????????????????????
            // if (this.model.curSClub != null)//???????????????????????????????????????????????????
            // ClubViewCtr.instance.UpdateClubInfocgold(this.model.curSClub.cid, data.ugold);
            // else
            //     console.log("club is null"); 
        }
        else {
            // LobbyViewCtr.instance.sc_freshgold_n(2, data.ugold); //???????????????????????????data.pos2gold?????????????????????
        }

        data._pos2GoldWin.forEach(item => {
            if (item.val > 0) {
                let userComp: TexasUserComp = this._bftable.GetUserByUserId(item.pos);
                if (userComp == null) {
                    console.log("HandleTableAndUserData_end  userComp == null item.pos=" + item.pos);
                }
            }
        });
        //??????????????????
        data._pos2Gold.forEach(_tempgold => {
            let p: TexasUserComp = this._bftable.GetUserByUserId(_tempgold.pos);
            if (p == null) return true;
            p.allinGamble = 0;
            p.GameOver(UIUtil.NumberToInt(_tempgold.val));
            if (p.self) { F_TexasViewCtr.instance.Model.MyEndMoney = UIUtil.NumberToInt(_tempgold.val); this.model.SetLockGold(UIUtil.NumberToInt(_tempgold.val)); }
        });

        //???????????????????????????
        data._watchlist.forEach(_watch => {
            let _tUser: TexasUserComp = this._bftable.GetUserByUserId(_watch.pos);
            if (_tUser == null) return true;
            if (_watch.val == 1) {
                if (_tUser.player != null) {
                    this.model.SetUserData_isW(_tUser.player.userid, 1); //????????????
                }
            }
        });

        //?????????????????????
        let keeplist: CommonPosValSD[] = data._keeplist;
        if (this.model.id2keep.length > 0) {
            keeplist = this.model.id2keep;
        }
        if (keeplist != null) {
            keeplist.forEach(item => {
                let _tUser: TexasUserComp = this._bftable.GetUserByUserId(item.pos);
                if (_tUser == null) return true;
                if (item.val == 0) {
                    //?????????
                } else if (item.val > 0) {
                    if (_tUser.player != null) {
                        console.log("_keeplist ----- ?????????????????????");
                        // ?????????????????????????????????????????????
                        this.model.SetUserData_isW(_tUser.player.userid, 1); //????????????
                        this.model.SetUserData_isK(_tUser.player.userid, UIUtil.NumberToInt(item.val - delayShowTime)); //????????? ??????????????? ????????????                         
                        _tUser.update_UserInfo(_tUser.userInfo);
                    }
                    _tUser.SetUseConnectState(UserConnectState.keepSeat);
                } else { //??????????????????????????????????????????????????????
                    // this.model.RemovePlayerList(_tUser.player.userid);
                }
            });
        }

        this.UpdateJackpot(data._jackpot); // ????????????????????????
        this.UpdateLastJpot(data._jackpot); //????????????????????????????????????
        //??????id2kepp??????
        this.model.id2keep = [];
    }

    // ???????????????????????????
    public dealEndLeaveData(data: sc_end_tex_n) {
        //?????????????????????
        if (data._keeplist != null) {
            data._keeplist.forEach(item => {
                let _tUser: TexasUserComp = this._bftable.GetUserByUserId(item.pos);
                if (_tUser == null) return true;
                if (item.val == 0) {
                } else if (item.val > 0) {
                } else { //??????????????????????????????????????????????????????
                    // console.error("remove --- ", _tUser.player.userid);
                    this.model.RemovePlayerList(_tUser.player.userid);
                }
            });
        }
    }

    private HandleTableUI_end(data: sc_end_tex_n) {
        this.ui_btnqipai.visible = false;
        this.ui_curTexastype.visible = false;
        this.ui_jackpotparant.visible = false;
        this.ui_insjackpotparant.visible = false;
        this.ShowDelay(false);
        this.SetAutoQiPai(false);
        this.SetAutoGamble(false);
        this.ShowActionBtns(false);
        this.hideUIAllBtns();

        this.isCanSeeLeftCards = this._bftable.myUser.serverpos > 0 && this.model._CommonCard.length < 5; //??????????????????    
        this.isCanXiuPai = data._pos2ShouPai.length < data._pos2GoldWin.length; //???????????????????????????(????????????????????????????????????????????????????????? ???????????????)
        this.ShowUILeftCards(this.isCanXiuPai, this.isCanSeeLeftCards);

        //????????????????????????
        this.ShowUIWaitPlayPanel();
    }

    private HandleTableAnimation_end(data: sc_end_tex_n) {
        this.setResultWinGold(data._pos2GoldWin); //???????????????????????????
        this.CheckShowBigWin(data._pos2Score); //??????bigwin

        this.moveMyGambleToTableGameble(data._pos2GoldWin); //????????????
        this.DelayMoveTableGambleToWiner(this.moveToTableTime + 0.1, data._pos2GoldWin); //????????????
        this.delayHandleUserUIAfterAnimation(this.moveToTableTime + 0.2 + this.moveToUserTime, data);
        this.HandleTimeOutUserUI(3, data);
    }
    private CheckShowBigWin(_pos2Score: TexasCompareSD[]) {
        for (var i = 0; i < _pos2Score.length; i++) {
            var comparesd = _pos2Score[i];
            let _tempUser: TexasUserComp = this._bftable.GetUserByUserId(comparesd.pos);
            if (_tempUser != null) {
                if (_tempUser.self) {
                    if (comparesd.bigwin > 0) {
                        this.ShowEftBigWin(comparesd.bigwin);
                    }
                }
                if (comparesd.claim > 0) {
                    _tempUser.endShowInsClaim(comparesd.claim);
                }
            }
        }
    }
    private delayHandleUserUIAfterAnimation(delayTime: number, data: sc_end_tex_n) {
        this.endTimer = TimeInfoMgrTex.instance.AddTimer(delayTime, () => {
            if (!this.model.isGaming && this._bftable)//&& RootObject != null) 
            {
                this._bftable.userList.forEach(user => {
                    if (user.player == null) {
                        user.ClearUser(); //?????????????????????  
                    } else {
                        let existUser: OtherUserInfoSD = this.model.GetUserInfo(user.player.userid);
                        if (existUser == null) {
                            this.RemoveUser(user.player.userid);
                        } else {
                            //?????????????????????????????????????????????
                            if (user.userConnectState == UserConnectState.keepSeat) {
                                // this.TabeleEndSetKeep(user);
                            }

                        }
                    }
                });
            }
        });
    }
    public HandleTimeOutUserUI(delayTime: number, data: sc_end_tex_n) {
        this.timeOutTimer = TimeInfoMgrTex.instance.AddTimer(delayTime, () => {
            if (!this.model.isGaming)// && RootObject != null) 
            {
                let readyCount = this.model.GetReadyCount();
                //console.log("???????????? ?????????????????????");
                if (this._bftable) {
                    this._bftable.userList.forEach(user => {
                        if (user.player == null) {
                            user.ClearUser(); //?????????????????????  
                        } else {
                            let existUser: OtherUserInfoSD = this.model.GetUserInfo(user.player.userid);
                            if (existUser == null) {
                                this.RemoveUser(user.player.userid);
                            }
                            else {
                                //?????????????????????????????????????????????
                                if (user.userConnectState == UserConnectState.keepSeat) {
                                    user.ResetPlayingUI();//??????????????????????????????
                                    this.TabeleEndSetKeep(user);
                                } else {
                                    user.SetStateUserWait();
                                }
                            }
                        }
                    });
                }
                this.ui_CommonCards.visible = false;
                this.ui_StatusManager.getController("commoncard4").setSelectedIndex(0);
                this.ui_StatusManager.getController("commoncard5").setSelectedIndex(0);
                this.ui_curTexastype.visible = false;
                this.curCommondCards = [];
                this.ShowUILeftCards(false, false);
                this.ShowUIJackpot(false);
            }
        });
    }

    //#region ????????????
    public sc_bigend_tex_n(data: sc_bigend_tex_n) {
        console.log("[Progress: --- big balence ] sc_bigend_whi_n ");
        if (this.model.competeid == 0) {
            this.isBigEnd = true;
            this.scheduleOnce(() => {
                // ?????????????????????
                this.historyComp.Hide();
                // ??????????????????
                this.ShowUIBalencePanel(data.bigend, data.isnamger);
                //????????????????????????????????????
            }, 5);
        } else {
            this.isCanExeTexMas = false;
            this.scheduleOnce(() => {
                // this.model.table = AppConst.enterTableData;
                // this.model.tableid = AppConst.enterTableData.tableid;
                // this.model.levelid = AppConst.enterTableData.levelid;
                // this.model.palyerlist = AppConst.enterTableData.palyerlist;
                F_TexasViewCtr.instance.sc_entertablenum_tex(AppConst.enterTableData);
                this.HandleTableRecover(AppConst.enterTableData, AppConst.enterTableData.palyerlist);
            }, 1);
        }
    }

    // public endtipid: Function = null;
    // public setEndTip(value: number) {
    //     let str: string = UIUtil.formatNumber100(value) + "";
    //     if (value >= 0) {
    //         str = "[color=#00FF00]+" + str + "[/color]";
    //     } else {
    //         str = "[color=#00FF00]" + str + "[/color]";
    //     }

    //     if (this.endtipid != null) {
    //         this.unschedule(this.endtipid);
    //         this.endtipid = null;
    //     }
    // }

    // #endregion 
    public winChouma(_pos: number, _index: number, Score: number, maxCard: number[]) {
        if (this._chippoolList == null || this._bftable == null) return;
        let _tempUser: TexasUserComp = this._bftable.GetUserByPos(_pos);
        if (_tempUser != null) {
            _tempUser.winChouma(this._chippoolList[_index]);
        }
    }
    //????????????????????????
    private ResetAllUsers() {
        this.model.SetMyServerPos(0);
        for (var i = 0; i < this._bftable.userList.length; i++) {
            this._bftable.userList[i].ClearUser();
        }
    }
    /// <summary>
    /// ??????????????????
    /// </summary>
    public sc_entertable_texas_n(playerlist: OtherUserInfoSD[]) {
        if (this.model.palyerlist == null) { return; }
        // console.log("[Progress: --- enter Room ] sc_entertable_whirl_n  playerCount:" + playerlist.length);
        this.ResetAllUsers();
        // let playerCount = playerlist.length;
        this.model.palyerlist.forEach(otheruserinfo => {
            otheruserinfo.isK = otheruserinfo.isK > 0 ? otheruserinfo.isK + 1 : 0;
            if (otheruserinfo.isW == 0 || otheruserinfo.isK > 0 || otheruserinfo.pos < 10) {
                this.update_UserInfo(otheruserinfo);
            }
        });

        this.CheckMoveToMyPos();
    }

    public update_UserInfoSitDown(user: OtherUserInfoSD, id2keep: CommonPosValSD[], aTime: number) {
        console.error("sitdown --- ", user.py._n);
        this.model.id2keep = id2keep;
        this.RemoveUser(user.py.userid); //???????????????????????????
        this.model.AddPlayerList(user);
        this.CheckRemainPlayer(id2keep);
        this.model.RemovePos2Apply(user.pos);
        if (aTime > 0)//????????????????????????
        {
            let temp: CommonPosValSD = new CommonPosValSD();
            temp.val = aTime;
            temp.pos = user.pos;
            this.model.AddPos2ApplyList(temp);
        }
        this.update_UserInfo(user);
        this.CheckMoveToMyPos();
    }

    //?????????????????????????????????????????????????????????????????????????????????????????????
    public CheckRemainPlayer(id2keep: CommonPosValSD[]) {
        for (var i = 0; i < this.model.palyerlist.length; i++) {
            if (!this.IsInDesk(this.model.palyerlist[i].py.userid, id2keep)) {
                let removeSuccess = this.RemoveUser(this.model.palyerlist[i].py.userid);
                if (removeSuccess) {
                    i--;
                }
            }
        }
    }
    public IsInDesk(userId: number, id2keep: CommonPosValSD[]): boolean {
        var isIn = false;
        if (id2keep != null) {
            id2keep.forEach(item => {
                if (item.pos == userId) {
                    isIn = true;
                }
            });
        }
        console.log("IsInDesk===userId=" + userId + ", id2keep=" + id2keep);
        return isIn;
    }

    private removUserCallBack: Function = null;
    //????????????????????????????????????
    public UpdateRemoveUser(userId: number) {
        var user: TexasUserComp = null;
        if (this.removUserCallBack) this.unschedule(this.removUserCallBack);
        this.removUserCallBack = function () {
            // console.error("???????????????????????? 1 ???" + userId);
            if (this._bftable) user = this._bftable.GetUserByUserId(userId);
            if (user !== null) {
                // console.error("???????????????????????? 2 ???" + userId);
                this.RemoveUser(userId);
            }
        }
        this.schedule(this.removUserCallBack, 0.5, 20);
    }

    public RemoveUser(userId: number): boolean {
        this.unschedule(this.removUserCallBack);
        if (this._bftable == null) return;
        let user: TexasUserComp = this._bftable.GetUserByUserId(userId);
        if (user != null) {
            if (user.self) {
                this.hideUIAllBtns();
                this.ui_curTexastype.visible = false;
                this.ShowOpenTip(false);
                //????????????:????????????????????????          
            }
            user.ClearUser(); //?????????????????????  
        }
        this.CheckBtnBackTableState();
        //?????????????????????????????????????????????
        if (!this.model.isGaming) {
            this.ShowUIWaitPlayPanel();
        }
        return this.model.RemovePlayerList(userId); //????????????         
    }

    public update_UserInfo(userInfo: OtherUserInfoSD) {
        let _tempUser: TexasUserComp = this._bftable.GetUserByUserId(userInfo.py.userid);
        if (_tempUser != null) {
            _tempUser.ClearUser();
            _tempUser.update_UserInfo(userInfo);
            if (userInfo.py.userid == F_TexasViewCtr.instance.Model.mPlayerModel.userid) {
                this.model.SetMyServerPos(userInfo.pos); //??????????????????
            }

            this.CheckBtnBackTableState();
            this.ShowUIWaitPlayPanel();
        }
        else {
            //console.log("_bftable.userList.Count:" + _bftable.userList.Count);
        }
    }

    //????????????,???????????????,???????????????
    public sc_tablestartgamble_tex_n(userId: number, _curGamble: number, _turnOver: boolean, _bankerPos: number, _allin = false) {
        var _tempUser = this._bftable.GetUserByUserId(userId);
        if (_tempUser == null) { return; }
        if (_tempUser.IsWatch() || _tempUser.IsWaitToTakeIn()) { return; }
        //_tempUser.ResetPlayingDataAndUI (); //??????????????????,????????????,?????????????????????UI
        _tempUser.ShowUIGamble(true);
        if (_curGamble > 0) {
            _tempUser.GenerateChipNoUpate(_curGamble);
        }
        if (_tempUser.serverpos == _bankerPos) {
            _tempUser.SetBanker(true);
        }
        else {
            _tempUser.SetBanker(false);
        }
        _tempUser.GambleMongo(0);
    }
    /// <summary>
    /// ????????????
    /// </summary>
    public sc_gamble_tex_n(data: sc_gamble_tex_n) {
        // pos: number, _curGamble: number, _turnOver: boolean, _allin = false, addRate = false
        // data.pos, data._gamble, data._turnOver, data._allin, data.addrate
        this.UpdateJackpot();
        if (!this._bftable) return;
        var _tempUser = this._bftable.GetUserByPos(data.pos);
        if (_tempUser == null) return;

        //?????????????????????????????????????????????????????????
        _tempUser.Wait();

        if (data._gamble == 0) { //???
            AudioManager.Singleton.play("", "game_action_xiu");
            _tempUser.updateHandleStateText(TexasUserHandleState.xiu);
            if (data._turnOver) {
                F_TexasViewCtr.instance.RefreshUserCurGamble();
            }
            return;
        }
        AudioManager.Singleton.play("", "game_chips_to_table");
        _tempUser.GenerateChip_nbb(data._gamble, true, data._turnOver, data.tgold);

        if (data._allin) {
            AudioManager.Singleton.play("", "texas_qiao");
            _tempUser.updateHandleStateText(TexasUserHandleState.allin);
        } else if (data.addrate) {
            _tempUser.updateHandleStateText(TexasUserHandleState.da);
        } else {
            _tempUser.updateHandleStateText(TexasUserHandleState.follow);
        }
        let addGold = data._gamble - this.GetFollowMinGamble();
        if (this.model._CurTurnCount == 2) {
            if (addGold > 0) {
                this.lastGambleGold = addGold;
            }
        }

        if (data._turnOver) {
            TimeInfoMgrTex.instance.AddTimer(0.618, () => {
                this._bftable.userList.forEach(tempUser => {
                    if (tempUser.Empty) return true;
                    tempUser.DealTurnChip(); //??????????????????????????????????????? 
                });
            });
        }
    }

    /// <summary>
    /// ???????????????
    /// </summary>
    /// <param name="data"></param>
    public sc_giveup_tex_n(pos: number, turnOver: boolean) {
        if (this._bftable == null) return;
        var _tempUser = this._bftable.GetUserByPos(pos);
        if (_tempUser == null) return;
        AudioManager.Singleton.play("", "game_action_diu");
        _tempUser.ShowGiveUp();
        _tempUser.updateHandleStateText(TexasUserHandleState.giveUp);
        _tempUser.StopClock();
        if (_tempUser.self) {
            this.Wait();
        }
        if (turnOver) F_TexasViewCtr.instance.RefreshUserCurGamble();
    }

    /// <summary>
    /// ?????????????????????
    /// </summary>
    /// <param name="pos"></param>
    /// <param name="ins"></param>
    public sc_insurance_tex_n(pos: number, ins: number) {
        // console.error(pos + "==????????????????????? ins=" + ins);
        var _tempUser = this._bftable.GetUserByPos(pos);
        if (_tempUser == null) return;
        _tempUser.StopClock();
        _tempUser.updateInsStateText(ins);
    }

    // ??????????????? 
    public sc_disconnect_n(data: sc_disconnect_n) {
        let player: TexasUserComp = this._bftable.GetUserByPos(data.pos);
        if (player != null) {
            player.DisconnetcOrReline(data.reconnect != 1);
        }
    }

    /// <summary>
    /// ?????????token  ???????????????4?????????????????????????????????????????? ???????????????????????? 
    /// </summary>
    /// <param name="data"></param>
    public sc_token_tex_n(data: sc_token_tex_n, turnChange: boolean, delayTime: number = 0) {
        //ui_txtAll.text = "?????????:" + UIUtil.formatNumber( F_TexasViewCtr.instance.Model._jackpot);
        //UpdateJackpot();
        let delay = 0;
        if (F_TexasViewCtr.instance.Model.isTurnOver) {
            this.UpdateLastJpot(); //????????????????????????????????????????????????
            delay += 1;
        }
        if (data._msgid <= 0)//isReBack()
        {
            this.tokenAction(data.pos, turnChange, true);
            return;
        }
        this.scheduleOnce(() => {
            this.tokenAction(data.pos, turnChange, false, delay + 1 + delayTime);
        }, delay + 1);
    }

    private tokenAction(pos: number, turnChange: boolean, isReback = false, delayTime: number = 0) {
        this._bftable.userList.forEach(tempUser => {
            if (tempUser.Empty) return true;
            //??????????????????,????????????,???,??????????????????
            if (turnChange) {
                tempUser.ResetUserHandleStateForTurn();
            }
            // console.log("===???????????????serverpos="+tempUser.serverpos +", pos="+pos);
            if (tempUser.serverpos == pos) {
                tempUser.Execute(turnChange, this.model.lefttime, delayTime);
            }
            else {
                tempUser.Wait();
            }

            if (isReback && tempUser.self && tempUser.serverpos == pos && !tempUser.self)//????????????????????????????????????????????????????????????isReBack()
            {
                console.log("delayTime === ", delayTime);
                tempUser.ShowClock(this.model.lefttime - delayTime, this.model.lefttime - delayTime);
            }
        });

        this.DealCurPalyer(turnChange);
        this.ShowCommonCards();
        this.SendOpenCard(true);
        this.DealMutilJackpot();
        if (turnChange) {
            this.DealTurnFaPai();
        }
    }

    /// <summary>
    /// ??????token  ???????????????????????????????????????????????????  
    /// </summary>
    /// <param name="data"></param>
    public sc_instoken_tex_n(pos: number, turnChange: boolean, isFirstTurn: boolean, _pos2Shoupai: CommonPosValListSD[], _pos2win: CommonPosValSD[], potlist: number[], ipos: CommonPosValSD[]) {
        let delay: number = 0;
        if (F_TexasViewCtr.instance.Model.isTurnOver) {
            delay += 1;
        }
        TimeInfoMgrTex.instance.AddTimer(delay, () => {
            //????????????????????????????????????
            this._bftable.userList.forEach(tempUser => {
                if (tempUser.Empty) return true;
                //?????????????????????????????????
                if (_pos2Shoupai != null && _pos2Shoupai.length > 0) {
                    _pos2Shoupai.forEach(tempPosShoupai => {
                        if (tempUser.player.userid == tempPosShoupai.pos) {
                            tempUser.ShowInsurancerCard(tempPosShoupai.vallist); //????????????????????????????????????????????????????????????
                            tempUser.isIns = true;
                        }
                    });
                }
            });
            //???????????????????????????????????????
            let disCount = this.model._CommonCard.length - this.curCommondCards.length >= 0 ? this.model._CommonCard.length - this.curCommondCards.length : 0;
            let delayy = disCount <= 0 ? 0 : (disCount >= 3 ? 2 * (disCount - 3) + 1.5 : 2 * (disCount - 1) + 1);
            TimeInfoMgrTex.instance.AddTimer(delayy + 0.5, () => {
                this._bftable.userList.forEach(tempUser => {
                    if (tempUser.Empty) return true;
                    //??????????????????,????????????,???,??????????????????
                    if (turnChange) {
                        tempUser.ResetUserHandleStateForTurn();
                    }
                    if (tempUser.serverpos == pos) {
                        tempUser.InsuranceExecute();
                    } else {
                        if (ipos == null || ipos.length <= 0)
                            tempUser.Wait();
                        else {
                            var b = ipos.find(value => { return value.pos == tempUser.player.userid; }); //serverpos
                            if (b == null)//???????????????????????????????????????????????????
                                tempUser.Wait();
                        }
                    }

                    //???????????????????????????????????????
                    if (_pos2win != null && _pos2win.length > 0) {
                        _pos2win.forEach(tempPos2win => {
                            if (tempUser.player.userid == tempPos2win.pos) {
                                tempUser.ShowInsWinPer_num(UIUtil.NumberToInt(tempPos2win.val)); //??????????????????????????????????????????????????????????????????
                            }
                        });
                    }
                });
            });

            this.UpdateLastJpot();
            //??????????????????????????????
            TimeInfoMgrTex.instance.AddTimer(1, () => {
                this.ShowCommonCards();
            });
            this.showInsJackpot(potlist);
        });
    }

    /// <summary>
    /// ?????????????????????allin?????????????????????????????????,????????????
    /// </summary>
    public sc_Allin_tex_n(_pos2Shoupai: CommonPosValListSD[], potlist: number[]) {
        let delay = 0;
        if (F_TexasViewCtr.instance.Model.isTurnOver) delay += 1;
        this.UpdateLastJpot();
        this.showInsJackpot(potlist);
        TimeInfoMgrTex.instance.AddTimer(delay, () => {
            this._bftable.userList.forEach(tempUser => {
                if (tempUser.Empty) return true;
                //allin????????????????????????
                if (_pos2Shoupai != null && _pos2Shoupai.length > 0) {
                    _pos2Shoupai.forEach(tempPosShoupai => {
                        if (tempUser.player.userid == tempPosShoupai.pos) {
                            console.log("????????????????????????????????????????????????????????????");
                            tempUser.ShowInsurancerCard(tempPosShoupai.vallist); //????????????????????????????????????????????????????????????
                        }
                    });
                }
            });
            this.model.endDelay = true;
            //??????????????????????????????
            TimeInfoMgrTex.instance.AddTimer(1, () => {
                this.ShowCommonCards();
            });
        });
    }
    private DealMutilJackpot() {
        this.showInsJackpot(F_TexasViewCtr.instance.Model.potlist);
        return;
        if (F_TexasViewCtr.instance.Model.potlist.length > 0) {
            this.ui_jackpotparant.visible = true;
            switch (F_TexasViewCtr.instance.Model.potlist.length) {
                case 1:
                    this.ui_jackpot1.visible = false;
                    this.ui_jackpot2.visible = false;
                    this.ui_jackpot3.visible = false;
                    this.ui_jackpot4.visible = false;
                    break;
                case 2:
                    this.ui_jackpot1.visible = true;
                    this.ui_txtjackpot1.text = UIUtil.formatNumber100(F_TexasViewCtr.instance.Model.potlist[1]) + "";
                    this.ui_jackpot2.visible = false;
                    this.ui_jackpot3.visible = false;
                    this.ui_jackpot4.visible = false;
                    break;
                case 3:
                    this.ui_jackpot1.visible = true;
                    this.ui_jackpot2.visible = true;
                    this.ui_txtjackpot1.text = UIUtil.formatNumber100(F_TexasViewCtr.instance.Model.potlist[1]) + "";
                    this.ui_txtjackpot2.text = UIUtil.formatNumber100(F_TexasViewCtr.instance.Model.potlist[2]) + "";
                    this.ui_jackpot3.visible = false;
                    this.ui_jackpot4.visible = false;
                    break;
                case 4:
                    this.ui_jackpot1.visible = true;
                    this.ui_jackpot2.visible = true;
                    this.ui_jackpot3.visible = true;
                    this.ui_txtjackpot1.text = UIUtil.formatNumber100(F_TexasViewCtr.instance.Model.potlist[1]) + "";
                    this.ui_txtjackpot2.text = UIUtil.formatNumber100(F_TexasViewCtr.instance.Model.potlist[2]) + "";
                    this.ui_txtjackpot3.text = UIUtil.formatNumber100(F_TexasViewCtr.instance.Model.potlist[3]) + "";
                    this.ui_jackpot4.visible = false;
                    break;
                default:
                    this.ui_jackpot1.visible = true;
                    this.ui_jackpot2.visible = true;
                    this.ui_jackpot3.visible = true;
                    this.ui_jackpot4.visible = true;
                    this.ui_txtjackpot1.text = UIUtil.formatNumber100(F_TexasViewCtr.instance.Model.potlist[1]) + "";
                    this.ui_txtjackpot2.text = UIUtil.formatNumber100(F_TexasViewCtr.instance.Model.potlist[2]) + "";
                    this.ui_txtjackpot3.text = UIUtil.formatNumber100(F_TexasViewCtr.instance.Model.potlist[3]) + "";
                    this.ui_txtjackpot4.text = UIUtil.formatNumber100(F_TexasViewCtr.instance.Model.potlist[4]) + "";
                    break;
            }
        }
        else
            this.ui_jackpotparant.visible = false;
    }

    public AddChipPool(achouma: fgui.GComponent) {
        if (this._chippoolList == null) this._chippoolList = [];
        this._chippoolList.push(achouma);
    }

    public GetAChipPosition(kind: string, _suggetpos: cc.Vec2): cc.Vec2 {
        if (this.ChipRecordList == null) this.ChipRecordList = [];
        for (var i = 0; i < this.ChipRecordList.length; i++) {
            let data1: ChipPositionTex = this.ChipRecordList[i];
            if (data1.kind == kind && data1.count < 10) {
                data1.count++;
                let x = data1.beginV3.x;
                let y = 9 * (data1.count - 1) + data1.beginV3.y;
                return cc.v2(x, y); //(Vector3.up * 9 * (data1.count - 1)) + data1.beginV3;
            }
        }
        let data = new ChipPositionTex();
        data.count = 1;
        data.kind = kind;
        let v1 = cc.v2((this.ChipRecordList.length % 5 * 50 - 50), 0);
        let v2 = cc.v2(0, -1 * (UIUtil.NumberToInt(this.ChipRecordList.length / 5) * 50));
        _suggetpos = cc.v2(_suggetpos.x + v1.x, _suggetpos.y + v2.y);
        data.beginV3 = _suggetpos;
        this.ChipRecordList.push(data);
        return data.beginV3;
    }

    //     #endregion 
    // ???????????????????????????????????????????????????????????????????????????????????? 
    public chipAniCallBackList: Function[];
    public cacheChipAniCallBackList: Function[];
    /// <summary>
    /// ????????????????????????
    /// </summary>
    public DealCurPalyer(turnChange: boolean, gameover = false) {
        if (gameover) {
            if (this.chipAniCallBackList != null) {
                this.chipAniCallBackList.find((a) => {
                    a();
                    return false;
                });
                this.chipAniCallBackList = null;
            }
            if (this.cacheChipAniCallBackList != null) {
                this.cacheChipAniCallBackList.find((a) => {
                    a();
                    return false;
                });
                this.cacheChipAniCallBackList = null;
            }
            return;
        }
        if (this.chipAniCallBackList != null) {
            this.chipAniCallBackList.find((a) => {
                a();
                return false;
            });
            this.chipAniCallBackList = null;
        }
        if (this.cacheChipAniCallBackList != null) {
            this.chipAniCallBackList = [];
            this.cacheChipAniCallBackList.find((a) => {
                this.chipAniCallBackList.push(a);
                return false;
            });
            this.cacheChipAniCallBackList = null;
        }
        if (turnChange && this._chippoolList != null && this._chippoolList.length > 0) {
            this._bftable.userList.forEach(user => {
                user.DealTurnChip();
            });
        }
    }
    //ui_bgMango ?????????????????????
    public SetMangoOfTable(_mongoOfTable: number) {
        let mongoOfTable = UIUtil.NumberToInt(_mongoOfTable / 100);
        let img: fgui.GTextField = null;
        let strNum = mongoOfTable.toString();
        if (this.ui_globalinfo == null) return;
        for (var i = 1; i <= 8; i++) {
            img = this.ui_globalinfo.getChild("txtMango" + i).asTextField;

            let num = (strNum.length - i) >= 0 ? strNum.charAt(strNum.length - i) : "0";
            img.text = num == null ? "0" : num;
        }
    }
    public SetCacheChoumaAni(_call: Function) {
        console.log("SetCeachChoumaAni");
        if (this.cacheChipAniCallBackList == null) {
            this.cacheChipAniCallBackList = [];
        }
        this.cacheChipAniCallBackList.push(_call);
    }
    public GetOpenCards(pos: number): number[] {
        var list: number[] = null;
        this.model._pos2openPai.forEach(p2card => {
            if (p2card.pos == pos) {
                list = p2card.vallist;
            }
        });

        return list;

    }
    public ShowUIBalencePanel(data: BigEndInfoSD_tex, ismanager = true) {
        // if (RootObject == null) { return; }
        //????????????(?????????????????? 1. ?????????)
        let isCanShow = data != null;
        if (isCanShow) {
            BalenceCtr.instance.Model.br = data.br;
            BalenceCtr.instance.Model.allintogold = data.allintogold;
            BalenceCtr.instance.Model.begintime = data.btime;
            BalenceCtr.instance.Model.duration = data.dur;
            BalenceCtr.instance.Model.endtime = data.etime;
            BalenceCtr.instance.Model.gainlist = data.gainlist;
            BalenceCtr.instance.Model.pcount = data.pc;
            BalenceCtr.instance.Model.tax = data.tax;
            BalenceCtr.instance.Model.InsurTotal = data.InsurTotal;
            BalenceCtr.instance.Model.clubWl = data.clubWl;
            BalenceCtr.instance.Model.clunbins = data.clunbins;
            BalenceCtr.instance.Model.isnamger = ismanager;
            BalenceCtr.instance.Model.IsSupper = data.IsSupper;
            this.balenceComp.Open(51, F_TexasViewCtr.instance.Model.Room_tnumber);
        } else {
            this.balenceComp.Hide();
        }
    }
    public ShowUIChatPanel(isShow: boolean) {
        //????????????(??????????????????)
        let isCanShow = isShow;
        if (isCanShow) {
            this.chatComp.Show();
        } else {
            this.chatComp.Hide();
        }
    }
    public DealTurnFaPai() {

    }
    private setResultWinGold(winGold: CommonPosValSD[]) {
        let tempItem: CommonPosValSD = null;
        let tempUser: TexasUserComp = null;
        for (var i = 0; i < winGold.length; i++) {
            tempItem = winGold[i];
            if (tempItem.val != 0) {
                tempUser = this._bftable.GetUserByUserId(tempItem.pos);
                if (tempUser == null) {
                    //console.log("??????????????????" + tempItem.pos);
                } else {
                    if (tempItem.val > 0) {
                        tempUser.ShowUITopTip(tempItem.val > 0 ? "+" + UIUtil.formatNumber100(tempItem.val) : UIUtil.formatNumber100(tempItem.val) + "");
                    }
                    tempUser.ShowWinPer(UIUtil.NumberToInt(tempItem.val));

                    //?????????????????????????????????????????????????????????
                    tempUser.ShowUIUserHandleState(-1);
                    tempUser.updateInsStateText(-1);
                }

            }
        }
    }
    public ShowUIDeskTip(tip = null, delay = 1) {
        this.ui_bgDeskTip.visible = (tip != null);
        this.ui_txtDeskTip.visible = (tip != null);
        if (tip != null) {
            this.ui_txtDeskTip.text = tip;
            if (delay > 0) {
                // this.ui_txtDeskTip.transform.DOMoveZ (1, delay).OnComplete (() => {
                this.scheduleOnce(() => {
                    this.ShowUIDeskTip(null);
                }, delay)
                // });
            }
        }
    }
    public sc_tjackpotLog(data: sc_tjackpotLog) {
        if (this.jackpotComp != null && this.jackpotComp.fguiComponent.visible) {
            this.jackpotComp.UpdateLogData(data);
        }
    }
    public sc_getalljackpot_tex(data: sc_getalljackpot_tex) {
        if (this.jackpotComp != null) {
            if (data == null) return;
            // this.jackpotComp.Show();
            this.jackpotComp.UpdateJackpotData(data._base2pot);//, data._max, data.plog);
        }
    }
    // #region ??????????????????,??????????????????
    public UpdateRecordView(data: sc_getgain_tex) {
        if (this.recordComp != null) {
            if (data == null) return;
            if (!this.recordComp) return;
            this.recordComp.Show();
            this.recordComp.fguiComponent.visible = true;
            this.model.SetRemainTime(data.lefttime);
            this.recordComp.UpdateData(data.jackpot, data.glist, data.wlist, data.Inspool, data.goldout);
        }
    }
    public UpdateHistoryView_data(data: sc_thistory_tex) {
        if (this.historyComp != null && this.historyComp.fguiComponent.visible) {
            this.historyComp.UpdateData_sc(data);
        }
    }
    public UpdateHistoryView_data2(data: sc_roomhistory_tex) {
        if (this.historyComp != null && this.historyComp.fguiComponent.visible) {
            this.historyComp.UpdateData(data.ulist, data.tulist, this.model.tableid, this.model.brate, 0, 0, 0);
            this.historyComp.ui_btnCollectHist.visible = false;
            this.historyComp.ui_btnShare.visible = false;
        }
    }
    public UpdateHistoryView_ptnn(ulist: PInfoSD[], tulist: TexTInfoSD[], d: number, ShowCard: number) {
        if (this.historyComp != null && this.historyComp.fguiComponent.visible) {
            this.historyComp.UpdateData(ulist, tulist, F_TexasViewCtr.instance.Model.tableid, d, ShowCard);
        }
    }
    public UpdateCollectData(savaNum: number, infoId: string, IsSava: boolean) {
        if (this.historyComp != null && this.historyComp.fguiComponent.visible) {
            this.historyComp.UpdateCollectData(savaNum, infoId, IsSava);
        }
    }
    //     #endregion
    //     #region chip ????????????

    private GenerateChipMove(): UIMoveMonoFgui {
        let obj = this.chipPool.GetCacheObject("ImgChipClone", this.ui_chippoolroot.asCom, "ImgChipTemplete");

        return obj as UIMoveMonoFgui;
    }

    private moveToTableTime = 0.5;
    private moveToUserTime = 0.25;
    private endTimer: Function;
    private timeOutTimer: Function;

    /// <summary>
    /// ?????????????????????????????????????????????
    /// </summary>
    /// <param name="firstGamble"></param>
    private moveFirstGambleToTabel(userId: number, _curGamble: number) {
        var userComp = this._bftable.GetUserByUserId(userId);
        if (userComp == null || userComp == null || userComp.player == null) { return; }

        userComp.ShowUIGamble(false); //?????????????????????????????????
        ////???????????? ??????????????????
        let chipMove: UIMoveMonoFgui = this.GenerateChipMove();
        this.MoveChip(chipMove, userComp.fguiComponent, this.ui_jackpotbg.asCom, this.moveToTableTime);
    }
    public moveMyGambleToTableGameble(changeGold: CommonPosValSD[] = null) {
        var isHaveChouma = false;
        let _tempUserList: TexasUserComp[] = this._bftable.userList;
        _tempUserList.forEach(userComp => {
            if (userComp == null || userComp.fguiComponent == null || userComp.player == null) { return true; }

            userComp.ShowUIGamble(false); //?????????????????????????????????
            ////???????????? ??????????????????
            if (userComp.curGamble > 0) //???????????????????????????????????????
            {
                let chipMove: UIMoveMonoFgui = this.GenerateChipMove();
                this.MoveChip(chipMove, userComp.ui_gambleBg.asCom, this.ui_jackpotbg.asCom, this.moveToTableTime);
                isHaveChouma = true;
            }
        });
        if (isHaveChouma) AudioManager.Singleton.play("", "game_chips_to_table");
    }

    private DelayMoveTableGambleToWiner(time: number, changeGold: CommonPosValSD[]) {
        TimeInfoMgrTex.instance.AddTimer(time, () => {
            if (!this.model.isGaming)// && this.RootObject != null)
                this.moveTableGamebleToWiner(changeGold);
        });
    }

    private moveTableGamebleToWiner(changeGold: CommonPosValSD[]) {
        // if (this.RootObject == null) { return; }
        // this.ShowUIJackpot (false); //????????????????????? ????????????????????????
        var userComp: TexasUserComp = null;
        var count = 0;
        changeGold.forEach(item => {
            if (item.val > 0) { //??????????????????
                count++;
                userComp = this._bftable.GetUserByUserId(item.pos);
                if (userComp == null) {
                    console.log("??????????????? " + item.pos);
                } else {
                    let chipMove: UIMoveMonoFgui = this.GenerateChipMove();
                    let obj = chipMove;
                    this.MoveChip(chipMove, this.ui_jackpotbg.asCom, userComp.ui_txtGold.asCom, this.moveToUserTime);
                }
            }
        });
        if (count > 0) {
            AudioManager.Singleton.play("", "game_chips_to_player");
        }

        console.log("???????????? ?????????, ????????????:" + count);
    }

    private onCmp: Function[] = null;
    private MoveChip(chip: UIMoveMonoFgui, from: fgui.GComponent, to: fgui.GComponent, time: number, cmp: Function = null, easeType: number = 1) {
        console.log("chip.fromTs=" + chip.fromTs + ",,from=" + from);
        chip.Show();
        chip.fromTs = from;
        chip.fixedTime = time;
        chip.isUseSpeed = false;
        chip.ease = easeType;
        var obj = chip.asCom;
        if (cmp != null) this.onCmp.push(cmp);
        if (this.onCmp == null) this.onCmp = [];
        this.onCmp.push(() => {
            obj.node.destroy();
            this.chipPool.DestroyObject(obj);
        });
        console.log("?????????????????????" + this.onCmp.length)
        chip.Move(to, this.onCmp);
    }
    //     #endregion
    //     #region UI ???????????? 
    public ShowUIJackpot(isShow = true) {
        this.ui_jackpotbg.visible = isShow;
        this.ui_lastjackpotbg.visible = isShow;
    }

    //1?????????????????? 2??? ?????????????????? 3?????????????????? 4?????????????????????
    public UpdateJackpot(jackpot = -1, mango = -1) {
        this.dichi = jackpot > 0 ? jackpot : this.model._jpot;
        console.log("?????? : " + this.dichi);
        if (this.ui_txtAll) this.ui_txtAll.text = TexasLanguage.getLanguageById(1396) + " : " + UIUtil.formatNumber100ToK(this.dichi);//??????
    }
    public UpdateLastJpot(lastJpot = -1) {
        this.ui_lasttxtAll.text = UIUtil.formatNumber100ToK(lastJpot > 0 ? lastJpot : this.model._lastjpot) + "";
    }
    public HideUITakeGoldPanel() {
        this.ShowUITakeGoldPanel(false);
    }

    public CheckAutoSitDown(localpos: number) {
        this.posSit = localpos;
        // ??????????????????????????????(???????????????,???????????????????????????)
        if (this.model.tableLockGold > this.model.minStartGamble && this.model.tableLockGold > 0) {
            //??????????????????,??????????????????????????? ???????????????
            this.isKeep = this._bftable.myUser.userConnectState == UserConnectState.keepSeat ? 1 : 0;
            //???????????????0   
            F_TexasViewCtr.instance.cs_autoSitDown_tex(this.posSit, this.model.curSClub != null ? this.model.curSClub.cid : 0, this.password);
        } else {
            this.isKeep = this._bftable.myUser.userConnectState == UserConnectState.keepSeat ? 1 : 0;
            F_TexasViewCtr.instance.cs_sitdownwait_tex(this.posSit, this.isKeep);
            // F_TexasViewCtr.instance.cs_autoSitDown_tex(this.posSit, this.model.curSClub != null ? this.model.curSClub.cid : 0, this.password);
        }
    }

    public WaitToTakeIn() {
        this.ShowUITakeGoldPanel(true, this.posSit, true);
    }
    public IsCanAddGold(): boolean {
        let curGold = this._bftable.myUser.player != null ? UIUtil.NumberToInt(this.model.tableLockGold) : 0;
        let minBrate = this.model.intorate_min;//UIUtil.NumberToInt(this.model.brate * 200); //UIUtil.NumberToInt(this.model.brate * 200 * this.model.intorate_min);
        let maxBrate = this.model.intorate_max;//UIUtil.NumberToInt(this.model.brate * 2000); //UIUtil.NumberToInt(this.model.brate * 200 * this.model.intorate_max);
        let takeIn = curGold <= maxBrate ? maxBrate - curGold : 0;
        this.ui_myGold_num.text = UIUtil.formatNumber100(AppConst.mPlayerModel.gold) + "";
        return this._bftable.myUser.serverpos > 0 && !this.isHaveAddGold && takeIn >= minBrate;//???????????????????????????????????????
    }

    public _isCanOutGold: boolean = false;//???????????????
    //???????????????
    public IsCanOutGold(): boolean {
        if (this.model.gametype != 20 || this._isCanOutGold) return false;//??????AOF??????
        let curGold = this._bftable.myUser.player != null ? UIUtil.NumberToInt(this._bftable.myUser.player.gold) : 0;
        // let _gamble = this._bftable.myUser.allinGamble;
        console.log("this.model.room == ", this.model.room);
        if (this.model.room.AOF_Times == null) this.model.room.AOF_Times = 1;

        let maxBrate = UIUtil.NumberToInt((curGold - this.model.brate * 200 * this.model.room.AOF_Times) / 100); //* 2;//?????????????????? - ???????????????????????? * ?????????????????? - ???????????? = ???????????????
        console.error("brate=" + this.model.brate + ",????????????" + curGold + "-" + (this.model.brate * 200 * this.model.room.AOF_Times) + ",??????????????????" + maxBrate);
        if (maxBrate > 1) {
            this.ui_sliderOutGold.min = 1;
            this.ui_sliderOutGold.max = maxBrate;
            this.ui_sliderOutGold.value = 1;
            this.ui_outGold_num.text = "1";
            return true;
        }
        return false;
    }

    //?????????????????????
    public OutAfterUpGold(userid: number, _money: number) {
        let user = this._bftable.GetUserByUserId(userid);
        if (user != null && user.self) {
            AppConst.mPlayerModel.gold = _money;
            this.model.tableLockGold = _money;
            this.tipView.ShowTipLabel(TexasLanguage.getLanguageById(180012))//???????????????
        }

        if (user != null) user.UpdateMoney(_money);
    }

    public posSit = 0;
    private minTakeGold = 0;
    //????????????
    public ShowUITakeGoldPanel(isShow = true, localpos = 0, isShowTip = false, isRefresh: boolean = false) {
        if (!isRefresh) {
            let u = this._bftable.GetUserByUserId(this.model.mPlayerModel.userid);
            // if (isShow && u != null && u.userInfo && u.IsPlaying()) return;
            //??????????????? ?????? ????????????????????????0
            if (isShow && this.model.cgold != 0 && this.model.cgold != -1 && u && u.player && u.player.gold >= UIUtil.NumberToInt((this.model.brate * 200))) {
                F_TexasViewCtr.instance.cs_autoSitDown_tex(localpos, this.model.curSClub != null ? this.model.curSClub.cid : 0, this.password);
                return;
            }

            //stradlle  = ?????? * 4 ???  ?????? =  stradlle + ??????
            if (this.model.tableLockGold > this.model.brate * 5 && this.model.tableLockGold > 0 && isShow) {
                F_TexasViewCtr.instance.cs_sitdown_tex(localpos, 0, this.isKeep, this.password, this.curSelectSClub != null ? this.curSelectSClub.cid : 0);
                return;
            }
        }

        this.ui_takeGoldPanel.visible = isShow;
        if (isShow) {
            if (this.posSit != 0) localpos = this.posSit;
            // this.curSelectSClub = null;
            this.ui_textGoldDesc.text = this.model.clubid > 0 && this.model.IsSupper ? TexasLanguage.getLanguageById(2204) : TexasLanguage.getLanguageById(1352);//?????????/???????????????:   ?????????/?????????:
            this.ui_txtHintDesc.text = TexasLanguage.getLanguageById(1397);//?????????????????????????????????
            this.isShowAddGoldPanel = false;
            this.posSit = localpos;
            this.ui_takeGoldPanel.getChild("txtTitle").asTextField.text = TexasLanguage.getLanguageById(1398);//????????????
            this.password = "";
            this.ui_inputPass.text = "";
            console.log("this.model.pas == ", this.model.pas);
            console.log("this.isKeep == ", this.isKeep);
            if (this.model.room != null && this.model.pas != "" && this.isKeep != 1) {
                console.log("??????????????????")
                this.ui_Password.visible = true;
            } else {
                this.ui_Password.visible = false;
            }

            let minBrate = UIUtil.NumberToInt(this.model.brate);
            let maxBrate = UIUtil.NumberToInt(minBrate * 2);
            this.minTakeGold = this.model.intorate_min;//maxBrate * 100; //this.model.room != null ? this.model.room.lg * 100 : minBrate; //????????????????????????????????????room????????????????????????????????????50??????
            //console.log("limit:" + (model.room != null ? model.room.lowlimit.ToString() : " null"));
            // if (this.minTakeGold <= 0) { this.minTakeGold = minBrate; } //
            if (this.model.clubid > 0 && this.model.IsSupper) {
                this.model.cgold = 0;
                this.ui_clubgold_num.text = "0";
                if (this.model.clubslist == null || this.model.clubslist.length <= 0
                    || (this.model.curSClub != null && this.model.clubslist.find(item => { return item.cid == this.model.curSClub.cid }) == null)) {
                    // this.curSelectSClub = null;
                    this.maxTakeGold = 0;
                    this.ui_clubgold_num.text = "0";
                    this.ShowTakeInInfo(false);
                }
                this.maxTakeGold = this.model.cgold > maxBrate ? maxBrate : this.model.cgold;
            }
            else {
                // ui_clubToggleGroup.gameObject.SetActive(false);
                this.maxTakeGold = F_TexasViewCtr.instance.Model.mPlayerModel.gold > maxBrate ? maxBrate : F_TexasViewCtr.instance.Model.mPlayerModel.gold;
            }
            let mgold = UIUtil.NumberToInt(AppConst.mPlayerModel.gold / 100) * 100;
            this.maxTakeGold = this.model.intorate_max > mgold ? mgold : this.model.intorate_max;//maxBrate * 1000;
            this.ShowTakeInInfo(isShowTip);
        }
        else {
            this.ui_sliderTakeGold.value = 0;
        }
    }

    public ShowTakeInInfo(isShowTip = false) {
        this.UpdateTakeGoldUI(this.minTakeGold);
        console.log("min :" + this.minTakeGold + " max:" + this.maxTakeGold + " cur:" + this.curTakeGold);
        // this.ui_sliderTakeGold.min = 0;//this.minTakeGold;
        this.ui_sliderTakeGold.max = UIUtil.NumberToInt((this.maxTakeGold - this.minTakeGold) / this.minTakeGold);
        if (this.model.gametype == 20) this.ui_sliderTakeGold.max = this.maxTakeGold;
        this.ui_sliderTakeGold.enabled = this.minTakeGold <= this.maxTakeGold;

        this.ui_sliderTakeGold.value = 0;// this.maxTakeGold == 0 ? 0 : this.curTakeGold / this.maxTakeGold;
        this.ui_txtScore.color = this.minTakeGold <= this.maxTakeGold ? cc.Color.WHITE : cc.Color.RED;
        this.ui_txtScore.text = UIUtil.NumberToInt(this.minTakeGold / 100) + "";
        let gold = UIUtil.NumberToInt(this.minTakeGold / 100) + "";
        let scale = gold.length >= 3 ? 2 / gold.length : 1;
        // this.numImageFont.setTxt(gold, "N_", "scoreNum", scale);
        if (this.curTakeGold <= 0 && isShowTip) {
            this.tipView.ShowTipLabel(TexasLanguage.getLanguageById(1585));//????????????????????????????????????
        }
    }
    public AddGoldFail() {
        this.isHaveAddGold = false;
    }

    //????????????
    public ShowUIOutGoldPanel() {
        this.ui_outGoldPanel.visible = true;
    }

    //????????????
    public ShowUIAddGoldPanel() {
        this.isShowAddGoldPanel = true;
        if (this.isHaveAddGold) { return; }
        this.ui_takeGoldPanel.visible = true;
        this.ui_Password.visible = false;
        this.ui_takeGoldPanel.getChild("txtTitle").asTextField.text = TexasLanguage.getLanguageById(1400);//????????????
        this.ui_txtHintDesc.text = TexasLanguage.getLanguageById(1401);//?????????????????????????????????????????????????????????
        // keyboardComp.Hide();
        let curGold = UIUtil.NumberToInt(this.model.tableLockGold);
        let minBrate = UIUtil.NumberToInt(this.model.brate);//?????? = ??????
        // let maxLimitBrate = UIUtil.NumberToInt((this.model.brate * 200 * this.model.intorate_max));
        let maxBrate = minBrate * 2;//?????? = ?????? * 2 
        this.minTakeGold = this.model.intorate_min;//maxBrate * 100; //?????????????????? = ??????*100??? 
        // if (this.minTakeGold <= 0) { this.minTakeGold = minBrate; } //        
        if (this.model.clubid > 0 && this.model.IsSupper) {
            if (this.model.clubslist == null || this.model.clubslist.length <= 0
                || this.model.curSClub == null || this.model.clubslist.find(item => { return item.cid == this.model.curSClub.cid }) == null) {
                this.maxTakeGold = 0;
                this.ui_clubgold_num.text = "0";
                this.ShowTakeInInfo(false);
            }
        }
        this.maxTakeGold = this.model.intorate_max - curGold;//UIUtil.NumberToInt(maxBrate * 1000 - curGold) / 100 * 100; //???????????? = ??????*100*10 - ????????????
        this.ShowTakeInInfo(true);
    }
    public UpdateTakeGoldUI(inputTakeGold: number) {
        let tempTakeGold = inputTakeGold;
        //????????????
        if (this.minTakeGold > this.maxTakeGold) {
            tempTakeGold = UIUtil.NumberToInt(this.maxTakeGold);
        } else {
            tempTakeGold = this.Clamp(inputTakeGold, 0, UIUtil.NumberToInt(this.maxTakeGold));
        }

        this.curTakeGold = this.minTakeGold > 0 ? (this.Clamp(tempTakeGold + 1, 0, UIUtil.NumberToInt(this.maxTakeGold)) / this.minTakeGold) * this.minTakeGold : tempTakeGold;//0; //???1 ?????? slider ?????????????????????????????????minTakeGold
        this.SetTakeGoldUI(this.curTakeGold, this.minTakeGold, UIUtil.NumberToInt(this.maxTakeGold));
    }
    public SetTakeGoldUI(takeGold: number, minGold: number, maxGold: number) {
        if (!this.ui_takeGoldPanel.visible) { return; }
        console.log("???????????? :" + takeGold + " max:" + maxGold);
        this.ui_txtTakeGoldPanel.text = (UIUtil.NumberToInt((takeGold / 100))) + "/" + UIUtil.NumberToInt((maxGold / 100));
        this.ui_takein_num.text = UIUtil.NumberToInt((takeGold / 100)) == 0 ? "??????" : (UIUtil.NumberToInt((takeGold / 100))).toString();
        this.ui_txtScore.text = (UIUtil.NumberToInt((takeGold / 100))).toString();
        let gold = (UIUtil.NumberToInt((takeGold / 100))).toString();
        let scale = gold.length >= 3 ? 2 / gold.length : 1;

        // this.ui_myGold_num.text = UIUtil.formatNumber100(AppConst.mPlayerModel.gold - takeGold) + "";
    }
    public ShowAddClubPanel() {
        let minBrate = UIUtil.NumberToInt(this.model.brate);
        let maxBrate = UIUtil.NumberToInt(minBrate * 2);

        let minApply = this.model.room != null ? this.model.room.lg : minBrate; //????????????????????????????????????room????????????????????????????????????50??????
        if (minApply <= 0) { minApply = minBrate; }
        let maxApply = maxBrate;

        if (this.model.clubslist == null || this.model.clubslist.length <= 0) {
            maxApply = 0;
            this.ShowApplyInfo(minApply, maxApply);
        }
        this.ShowApplyInfo(minApply, maxApply);
    }
    public ShowApplyInfo(minApply: number, maxApply: number) {
        this.UpdateApplyGoldUI(minApply);
    }
    public UpdateApplyGoldUI(inputTakeGold: number) {
        this.SetApplyGoldUI(this.curApplyGold);
    }
    public SetApplyGoldUI(takeGold: number) {
        // if (!this.ui_applycontent.visible) { return; }
        // this.ui_applynum_txt.text = (UIUtil.NumberToInt((takeGold / 100))).toString();
    }

    private minAddGold = 0;
    private maxAddGold = 0;
    public SetCurGambleAddGold(value: number) {
        let tempAddGold = this.minAddGold * Math.ceil(value / this.minAddGold);
        tempAddGold = Number(tempAddGold.toFixed(2));
        let minadd = UIUtil.formatNumber100(F_TexasViewCtr.instance.Model._curGambleLimitMin);
        console.log("tempAddGold == ", tempAddGold);

        console.log("minadd == ", minadd);
        // if (tempAddGold < minadd) {
        //     tempAddGold = minadd;
        // }
        if (tempAddGold > this.maxAddGold) {
            tempAddGold = this.maxAddGold;
        }
        let fill = tempAddGold / this.maxAddGold;
        this.ui_bar_v2.fillAmount = fill;
        if (tempAddGold >= this.maxAddGold) {
            this.ui_txtNums.text = "ALLIN";
            this.curAddGold = tempAddGold;
            this.ui_bar_v2.fillAmount = 1;
        } else {
            this.curAddGold = tempAddGold;
            this.ui_txtNums.text = this.curAddGold + "";
        }
    }

    private GetAddBase(addNum: number): number {
        let addBase = 1;
        if (addNum < 10) addBase = 2;
        else if (addNum >= 10 && addNum < 100) addBase = 5;
        else if (addNum >= 100 && addNum < 1000) addBase = 10;
        else if (addNum >= 1000 && addNum < 10000) addBase = 100;
        else addBase = 1000;
        return addBase;
    }

    private GetSliderMaxValue(gold: number, isRemainder: boolean): number {
        let max = 0;
        let round = 0;
        let remain = 0;
        if (gold <= 10) {
            round = gold / 2;
            remain = gold % 2;
        }
        else if (gold > 10 && gold <= 100) {
            round = (gold - 10) / 5 + 5;
            remain = gold % 5;
        }
        else if (gold > 100 && gold <= 1000) {
            round = (gold - 100) / 10 + 5 + 18;
            remain = gold % 10;
        }
        else if (gold > 1000 && gold <= 10000) {
            round = (gold - 1000) / 100 + 5 + 18 + 90;
            remain = gold % 100;
        }
        else {
            round = (gold - 10000) / 1000 + 5 + 18 + 90 + 90;
            remain = gold % 1000;
        }
        max = round + (remain > 0 && isRemainder ? 1 : 0);
        return max;
    }

    private GetCurrentGoldBySlider(sliderValue: number) {
        let curGold = 0;
        if (sliderValue >= this.ui_sliderAdd.max) return this.maxAddGold;
        if (sliderValue <= 5) {
            curGold = 2 * sliderValue;
        }
        else if (sliderValue > 5 && sliderValue <= 23) {
            curGold = (sliderValue - 5) * 5 + 10;
        }
        else if (sliderValue > 23 && sliderValue <= 113) {
            curGold = (sliderValue - 23) * 10 + 100;
        }
        else if (sliderValue > 113 && sliderValue <= 203) {
            curGold = (sliderValue - 113) * 100 + 1000;
        }
        else {
            curGold = (sliderValue - 203) * 1000 + 10000;
        }
        return curGold;
    }

    public ShowUIUserInfo(player: PlayerInfoSD, serverPos: number) {
        if (player != null) {
            this.userInfoComp.show(player, serverPos);
        } else {
            // this.userInfoComp.Hide();
            // this.ShowUITakeGoldPanel(true, serverPos);
        }

    }

    public UpdateUserInfo(player: PlayerInfoSD, serverPos: number) {
        if (this.userInfoComp == null) {
            return;
        }
        if (player != null) {
            this.userInfoComp.updateInfo(player, serverPos);
        }
        else {
            this.userInfoComp.Hide();
        }
    }

    private HideUIWaitPlayPanel() {
        this.ui_waitPanel.visible = false;
        this.unschedule(this.fireTimer)
    }

    private fireTimer: Function;
    public ShowUIWaitPlayPanel() {
        let userCount: number = this.model.GetMinPlayerCount();
        let readyCount: number = this.model.GetReadyCount();
        let remainTime: number = this.model.endTime;// - UIUtil.NumberToInt(cc.director.getTotalTime() / 1000);
        //??????????????????
        let isRealShow: boolean = !this.model.isGaming && readyCount < userCount;
        console.log("userCount:" + userCount);
        console.log("remainTime:" + remainTime + " isGaming:" + this.model.isGaming + " readyCount:" + readyCount); //--temp
        this.ui_waitPanel.visible = isRealShow;
        if (isRealShow) {
            // if (this.model.ownnerid == F_TexasViewCtr.instance.Model.mPlayerModel.userid && this.model.openplay && !this.model.isopen) {
            //     this.ui_txtStartDesc.text = TexasLanguage.getLanguageById(2264);//????????????????????????
            // }
            // else {
            this.ui_txtStartDesc.text = `${TexasLanguage.getLanguageById(180000)}${userCount}${TexasLanguage.getLanguageById(180001)}`;//???????????????{0}?????????????????????
            // }
            this.ui_txtStartDesc.visible = true;
            // ????????????????????? ??????????????????2???????????????????????????  ???????????????
            if (!this.model.isShowPersonRemind && readyCount >= 2) {
                this.ui_txtStartDesc.visible = false;
            } else if (!this.model.isShowPersonRemind) {
                this.ui_txtStartDesc.text = `${TexasLanguage.getLanguageById(180000)}${2}${TexasLanguage.getLanguageById(180001)}`;//???????????????{0}?????????????????????
            }
            this.ShowUIJackpot(false);
        } else {

        }
    }

    // #endregion
    public IsSelfWatch(): boolean {
        return this.model.IsPosWatch(this.model._posServer);
    }
    public IsSelfWaitToTakeIn(): boolean {
        return this.model.IsPosWaitToTakeIn(this.model._posServer);
    }
    public UpdateUserState(userId: number, keepTime: number, gold: number) {
        if (keepTime <= 0) { return; }
        let user: TexasUserComp = this._bftable.GetUserByUserId(userId);
        if (user != null && gold >= 0) {
            user.UpdateMoney(gold);
        }
        this.SetUserForKeepSeat_nn(userId, keepTime);
    }
    public SetUserForKeepSeat_nn(userId: number, remainTime: number) {
        if (remainTime <= 0) { return; }
        this.model.SetUserData_isW(userId, 1); //????????????
        this.model.SetUserData_isK(userId, remainTime); //????????? ??????????????? ????????????   
        this.SetUserForKeepSeat_n(userId); //????????? ??????????????? ???????????? 
    }
    public SetUserForKeepSeat_n(userId: number) {
        this.SetUserForKeepSeat_user(this._bftable.GetUserByUserId(userId));
    }
    //??????user???????????????
    public SetUserForKeepSeat_user(user: TexasUserComp) {
        if (user == null || user.player == null) { return; }
        let info: OtherUserInfoSD = this.model.GetUserInfo(user.player.userid);
        if (info != null) {
            user.update_UserInfo(info);
        }
        if (user.self) {
            this.hideUIAllBtns();
            this.CheckBtnBackTableState();
            this.ui_curTexastype.visible = false;
        }
    }
    //????????????????????????????????????
    public TabeleEndSetKeep(user: TexasUserComp) {
        user.UpdateUserConnectState(UserConnectState.keepSeat);
        if (user.self) {
            this.hideUIAllBtns();
            this.CheckBtnBackTableState();
        }
    }
    //??????
    //??????0??? ??? ???1????????? >=2 ??????
    public GambleMultiple(multiple: number) {
        //????????? ???????????????????????????
        let gold = multiple == 0 ? 0 : this.GetDaGamble(multiple);
        if (gold <= 0) {

        } else {
            this.ui_sliderAdd.visible = false;
            this.ui_BtnAddLimit.visible = false;
        }
        //???/???
        let addRate = multiple > 1 || this._bftable.myUser.player.gold <= gold;
        gold = Math.min(gold, UIUtil.NumberToInt(this._bftable.myUser.player.gold));
        this.Wait();
        F_TexasViewCtr.instance.cs_gamble_tex(gold, addRate);
    }
    //???
    public GambleXiu() {
        this.GambleMultiple(0);
    }

    //??? 
    public GambleAllIn() {
        let gold = UIUtil.NumberToInt(this._bftable.myUser.player.gold);
        this.Wait();
        F_TexasViewCtr.instance.cs_gamble_tex(gold, true);
    }

    //(???????????? ??????????????????0)?????????????????????????????????:1.??????????????????,??????????????????,??? ????????????,??? ?????????
    private IsCanHandleAction(): boolean {
        if (!this.model.isGaming) { return false; } //???????????????
        if (this._bftable.myUser == null) { return false; }
        if (this._bftable.myUser.Empty) { return false; } //???????????????
        if (this._bftable.myUser.isGiveUp) { return false; } //????????????        
        if (this._bftable.myUser.userConnectState == UserConnectState.keepSeat) { return false; }
        if (this.IsSelfWatch()) { return false; } //??????    
        if (this.IsSelfWaitToTakeIn()) { return false; } //??????   
        return true;
    }
    //????????????????????????????????????
    public ShowActionBtns(isShow: boolean) {
        for (var i = 0; i < this.ui_btns._children.length; i++) {
            this.ui_btns._children[i].visible = isShow;
        }
    }
    //????????????
    private HandleActionBtnsForSelfTurn(isNewTurn: boolean) {
        this.ShowActionBtns(false);
        this.ui_btnqipai.visible = true; //??????        
        //????????????????????????
        this.ui_btnXiu.visible = this.model.gametype != 20 && ((isNewTurn && !this.model.firstTurnStart) || (this.model._mingamble <= 0 && this.model._emaxg <= 0)); //???
        //ui_btnFollow.gameObject.SetActive(!F_TexasViewCtr.instance.Model.showcard);
        let mingamble = this.GetFollowMinGamble();
        this.ui_btnFollow.visible = this.model.gametype != 20 && (this._bftable.myUser.player.gold > mingamble && !this.ui_btnXiu.visible); //???,????????????????????????1???,???????????????????????????,????????????????????? ???????????????
        //ALLIN???????????????????????????????????????????????????????????????????????????????????????
        this.ui_btnallinadd.visible = this.model.gametype == 20 || (this._bftable.myUser.player.gold <= mingamble || (this._bftable.myUser.player.gold < this.GetDaGamble(this.GetMinDaGambleType()) && mingamble <= 0)); //ALLIN

        let followEndGamble = mingamble; //????????????????????????
        this.ui_txtfollowDynamic.text = followEndGamble <= 0 ? TexasLanguage.getLanguageById(1404) : UIUtil.formatNumber100ToK(followEndGamble) + "\n" + TexasLanguage.getLanguageById(1296); //straddle????????????????????????????????????????????????0????????????????????????????????????????????????????????????

        console.log("minGamble:" + this.model._mingamble + " myGold:" + this._bftable.myUser.player.gold);

        let daMinGamble = 0;
        this.ShowActionAddGamble(true, daMinGamble); //??? :?????????????????????????????????????????????
    }

    //??????????????????
    private buyInsType: number;//0???????????????????????? 1????????????????????????????????? 2?????????????????????????????????    
    private maxInsAddGold: number = 0;
    private minInsAddGold = 0;
    //private int manchiGold = 0;
    //private int baobenInsAddGold = 0;
    private manchiFInsAddGold: number = 0;
    private baobenFInsAddGold: number = 0;
    private manchiZInsAddGold: number = 0;
    private baobenZInsAddGold: number = 0;
    private insType: number = 0;
    private getRateByCount(num: number): number {
        let count = this.bupaiList.length > 0 ? this.bupaiList.length : num;//???????????????????????????????????????
        if (count < 1) return 0;
        if (count > 20) count = 20;
        if (F_TexasView._dicInsRate.has(count)) return F_TexasView._dicInsRate.get(count);
        return 0;
    }


    public insdelayTime: number = 0;
    public insTimerCB: Function = null;
    private HandleInsuranceBtnsForSelfTurn() {
        if (this.GetInsSwitch() == 0)//?????????????????????????????????????????????????????????????????????????????????
        {
            this.Wait();
            F_TexasViewCtr.instance.cs_insurance_tex(F_TexasViewCtr.instance.Model._posServer, 0, 0, null);
            return;
        }

        if (this.ui_BtnInsurancePanel.visible) {
            this.ui_BtnInsurancePanel.visible = false;
            let timeout = setTimeout(() => {
                this.ui_BtnInsurancePanel.visible = true;
            }, 1000);
            TimeInfoMgrTex.instance.addTimerNoCallback(timeout);
        } else {
            this.ShowActionBtns(false);
            this.ui_BtnInsurancePanel.visible = true;
        }
        this.tempInsAddGold = 0;
        this.zhuInsAddGold = 0;
        this.fenInsAddGold = 0;
        this.ui_fenchiNumText.text = "0";
        this.ui_sliderInsAdd.value = 0;
        this.ui_txtOutsCnt.text = "0";

        // this.ui_funcBtns.visible = false;
        this.ui_insuranceAddPanel.visible = true;// false;

        this.ui_fenchiTip.visible = true;
        this.ui_fenchiTip.text = "";//???????????????

        let zhuchi = this.model.insList31 != null && this.model.insList31.length > 0 && this.model.curJiangchi31 > 0;
        let fenchi = this.model.insList32 != null && this.model.insList32.length > 0 && this.model.curJiangchi32 > 0;

        // this.ui_btnInsAll.enabled = zhuchi || fenchi;
        this.ui_insuranceInfo.enabled = zhuchi;
        this.ui_insuranceInfo32.enabled = fenchi;

        // this.ui_btnInsAll.getController("isOn").setSelectedIndex(zhuchi || fenchi ? 1 : 0);
        this.ui_insuranceInfo.getController("isOn").setSelectedIndex(zhuchi ? 1 : 0);
        this.ui_insuranceInfo32.getController("isOn").setSelectedIndex(fenchi ? 1 : 0);

        this.showInsComCard(F_TexasViewCtr.instance.Model._CommonCard);
        this.ui_bupaiPanel.removeChildrenToPool();

        this.buyInsType = zhuchi && fenchi ? 0 : zhuchi ? 1 : 2;//0???????????????????????? 1???????????? 2????????????
        //??????????????????????????????????????????????????????????????????????????????????????????ilist???,???????????????list31 ???????????????list32
        switch (this.buyInsType) {
            case 0:
                this.manchiZInsAddGold = this.model.insList31[2];
                this.manchiFInsAddGold = this.model.insList32[2];
                this.baobenZInsAddGold = this.model.insList31[1];
                this.baobenFInsAddGold = this.model.insList32[1];
                this.showInsAddInfo(1);
                break;
            case 1:
                this.manchiZInsAddGold = this.model.insList31[2];
                this.manchiFInsAddGold = 0;
                this.baobenZInsAddGold = this.model.insList31[1];
                this.baobenFInsAddGold = 0;
                this.showInsAddInfo(1);
                break;
            case 2:
                this.manchiZInsAddGold = 0;
                this.manchiFInsAddGold = this.model.insList32[2];
                this.baobenZInsAddGold = 0;
                this.baobenFInsAddGold = this.model.insList32[1];
                this.showInsAddInfo(2);
                break;
        }

        this.ui_txtBaoben.text = UIUtil.formatNumber100(this.baobenZInsAddGold + this.baobenFInsAddGold) + "";
        this.ui_txtBaoben1.text = zhuchi && fenchi ? TexasLanguage.getLanguageById(2243) : TexasLanguage.getLanguageById(1302);//???????????? ??????
        this.ui_textManchi.text = UIUtil.formatNumber100(this.manchiZInsAddGold + this.manchiFInsAddGold) + "";
        console.error("????????????=" + this.ui_textManchi.text);
        this.ui_textManchi1.text = zhuchi && fenchi ? TexasLanguage.getLanguageById(2242) : TexasLanguage.getLanguageById(1303);//???????????? ??????  
        // this.ui_jiangchiText.text = "??????";
        // this.ui_PoolNum.text = UIUtil.formatNumber100(this.model.curJiangchi31 + this.model.curJiangchi32) + "";

        // this.ui_sliderInsAdd.enabled = false;
        // this.ui_toubaoNum.text = this.ui_textManchi.text;
        // this.ui_peifuNum.text = UIUtil.formatNumber100((this.model.curJiangchi31 + this.model.curJiangchi32) / 31)+"";
        // this.ui_peilvNum.text = "31";

        this.ui_fenchiNumText.text = UIUtil.formatNumber100(this.zhuInsAddGold + this.fenInsAddGold) + "";
        this.ui_fenchiTip.text = TexasLanguage.getLanguageById(2237);//????????????

        // ???????????????
        this.insdelayTime = this.model.lefttime;
        this.ui_insTimeText.text = this.insdelayTime + "S";
        this.ui_insTimeText.visible = true;
        if (this.insTimerCB) {
            this.unschedule(this.insTimerCB);
        }
        this.insTimerCB = function () {
            this.insdelayTime -= 1;
            if (this.insdelayTime < 0) {
                if (this.insTimerCB) {
                    this.unschedule(this.insTimerCB);
                    this.ui_BtnInsurancePanel.visible = false;
                    F_TexasViewCtr.instance.cs_insurance_tex(F_TexasViewCtr.instance.Model._posServer, 0, 0, null);
                }
                this.ui_insTimeText.visible = false;
                return;
            }
            this.ui_insTimeText.text = this.insdelayTime + "S";
        }
        this.schedule(this.insTimerCB, 1);
    }

    private showZhuchi() {
        this.ui_jiangchiText.text = "??????";
        this.ui_PoolNum.text = UIUtil.formatNumber100(this.model.curJiangchi31) + "";
        this.ui_PeiLvText.text = TexasLanguage.getLanguageById(1341) + " " + this.getRateByCount(this.model.outs31.length);//??????
        this.ui_BupaiText.text = TexasLanguage.getLanguageById(1342) + " " + this.model.outs31.length;//??????
    }
    private showFenchi() {
        this.ui_jiangchiText.text = "??????";
        this.ui_PoolNum.text = UIUtil.formatNumber100(this.model.curJiangchi32) + "";
        this.ui_PeiLvText.text = TexasLanguage.getLanguageById(1341) + " " + this.getRateByCount(this.model.outs32.length);//??????
        this.ui_BupaiText.text = TexasLanguage.getLanguageById(1342) + " " + this.model.outs32.length;//??????
    }


    //????????????
    private ShowInsUserCardList() {
        this.ui_InsUserCardList.removeChildrenToPool();

        //????????????????????????
        let minBetUser: TexasUserComp = null;

        if (this.insType == 2) {
            let tUsers: TexasUserComp[] = [];
            for (var i = 0; i <= 9; i++) {
                let user = this._bftable.GetUserByPos(i);
                if (user != null && user.userInfo != null && user.isIns) {
                    // console.error("??????allin?????????"+user.player._n+",??????="+user.allinGamble);
                    tUsers.push(user);
                }
            }
            tUsers.sort((a, b) => {
                return a.allinGamble - b.allinGamble;
            });
            minBetUser = tUsers[0];
            // console.error("?????????????????????"+minBetUser.player._n+",??????="+minBetUser.allinGamble);
        }



        for (var i = 0; i <= 9; i++) {
            let user = this._bftable.GetUserByPos(i);
            if (user != null && user.userInfo != null && user.isIns) {
                let card1 = "";
                let card2 = "";

                //??????????????????????????????
                if (this.insType == 2 && minBetUser.player.userid == user.player.userid) continue;

                // let ipos: CommonPosValSD = null;
                // for (var j = 0; j < this.model.insIpos.length; j++) {
                //     if (this.model.insIpos[j].pos == user.player.userid) {
                //         ipos = this.model.insIpos[j];
                //         break;
                //     }
                // }

                // if (ipos != null) {
                //     if (ipos.val != 0 && ipos.val != this.insType) {
                //         // console.error("?????????");
                //         continue;
                //     }
                // } else {
                //     continue;
                // }

                let obj = this.ui_InsUserCardList.addItemFromPool().asCom;
                obj.getChild("userName").asTextField.text = user.userInfo.py._n;
                if (user.serverpos == this.model._posServer) {
                    obj.getChild("toubaoing").visible = true;
                    obj.getChild("outsCnt").asTextField.text = "";
                    card1 = F_TexasViewCtr.instance.Model._ShouPai == null || F_TexasViewCtr.instance.Model._ShouPai[0] == null ? CardRedbetComp.cardTypeName : F_TexasViewCtr.instance.Model._ShouPai[0] + "_" + PlayerPrefs.GetInt("key_cards_index", 1);
                    card2 = F_TexasViewCtr.instance.Model._ShouPai == null || F_TexasViewCtr.instance.Model._ShouPai[1] == null ? CardRedbetComp.cardTypeName : F_TexasViewCtr.instance.Model._ShouPai[1] + "_" + PlayerPrefs.GetInt("key_cards_index", 1);
                } else {
                    obj.getChild("toubaoing").visible = false;
                    obj.getChild("outsCnt").asTextField.text = "";
                    card1 = user.openCards == null || user.openCards[0] == null ? CardRedbetComp.cardTypeName : user.openCards[0] + "_" + PlayerPrefs.GetInt("key_cards_index", 1);
                    card2 = user.openCards == null || user.openCards[1] == null ? CardRedbetComp.cardTypeName : user.openCards[1] + "_" + PlayerPrefs.GetInt("key_cards_index", 1);
                }
                UIUtil.loadImage(obj.getChild("userCard1").asLoader, card1, "Texas");
                UIUtil.loadImage(obj.getChild("userCard2").asLoader, card2, "Texas");

            }
        }
    }


    private bupaiPanelObjList: BupaiPanelObj[] = [];//?????????????????????????????????

    /// <summary>
    /// 1 ???????????? 2????????????
    /// </summary>
    /// <param name="type"></param>
    private showInsAddInfo(type: number) {
        // this.ui_sliderInsAdd.enabled = true;
        this.insType = type;
        switch (type) {
            case 1:
                this.showZhuchiInsAdd();
                this.showZhuchi();
                break;
            case 2:
                this.showFenchiInsAdd();
                this.showFenchi();
                break;
        }
        this.ShowInsUserCardList();//????????????????????????
        //??????????????????0?????????????????????
        // this.ui_btngiveup.enabled = this.minInsAddGold == 0;
        // this.ui_btngiveup.grayed = this.minInsAddGold > 0;

        // console.error("????????????Max="+this.ui_sliderInsAdd.max);
    }
    private showZhuchiInsAdd() {
        if (this.model.insList31 == null || this.model.insList31.length == 0) return;
        let playerGold = UIUtil.NumberToInt(this._bftable.myUser.player.gold + (this.model.clubid > 0 && this.model.IsSupper ? this.model.cgold : F_TexasViewCtr.instance.Model.mPlayerModel.gold));
        this.bupaiList = [];
        //??????????????????????????????*0.25?????????????????????????????????*0.5f
        let rate = F_TexasViewCtr.instance.Model._CommonCard.length == 3 ? 0.25 : 0.5;
        let maxGold = Math.min(playerGold, UIUtil.NumberToInt(this.dichi * rate));

        this.maxInsAddGold = UIUtil.NumberToInt(this.model.curJiangchi31 / this.getRateByCount(this.model.outs31.length)); //maxGold >= this.model.insList31[2] ? this.model.insList31[2] : maxGold;
        this.minInsAddGold = maxGold >= this.model.insList31[0] ? this.model.insList31[0] : maxGold;

        this.zhuInsAddGold = this.zhuInsAddGold == null || this.zhuInsAddGold == 0 ? this.minInsAddGold : this.zhuInsAddGold;
        this.ui_sliderInsAdd.min = this.minInsAddGold;
        this.ui_sliderInsAdd.max = this.manchiZInsAddGold + this.manchiFInsAddGold;//this.maxInsAddGold;
        this.ui_sliderInsAdd.value = this.zhuInsAddGold;
        this.tempInsAddGold = this.zhuInsAddGold;
        this.showCurInsAdd(this.zhuInsAddGold);


        this.ui_toubaoNum.text = UIUtil.formatNumber100(this.zhuInsAddGold) + "";
        let peifu = (this.getRateByCount(this.model.outs31.length) * this.zhuInsAddGold)
        this.ui_peifuNum.text = UIUtil.formatNumber100(peifu >= this.model.curJiangchi31 ? this.model.curJiangchi31 : peifu) + "";
        this.ui_PeiLvText.text = TexasLanguage.getLanguageById(1341) + " " + this.getRateByCount(this.model.outs31.length).toString();//??????


        // this.ui_baobenText.visible = (this.minInsAddGold <= this.model.insList31[1]);
        if (this.minInsAddGold <= this.model.insList31[1]) {
            let rate2 = (this.model.insList31[1] - this.minInsAddGold) / (this.maxInsAddGold - this.minInsAddGold > 0 ? this.maxInsAddGold - this.minInsAddGold : 1);
            // let aa = this.ui_baobenText.parent.GetComponent<RectTransform>().sizeDelta.y * rate2;
            // this.ui_baobenText.node.position = cc.v3(49.2, aa, 0);
        }

        this.bupaiPanelObjList = [];
        this.ui_txtOutsCnt.text = this.model.outs31.length + "";
        this.ui_bupaiPanel.removeChildrenToPool();
        for (var i = 0; i < this.model.outs31.length; i++) {
            var temp = this.model.outs31[i];
            var _tempCard = this.ui_bupaiPanel.addItemFromPool().asCom;
            let toggle: fgui.GButton = _tempCard.getChild("Button").asButton;
            let checkmark: fgui.GLoader = _tempCard.getChild("Checkmark").asLoader;
            toggle.clearClick();
            checkmark.visible = false;
            // console.error("this.model.inOrder = " + this.model.inOrder);
            toggle.enabled = this.model.inOrder == 0;
            //????????????????????????outs
            // toggle.onClick(() => {
            //     checkmark.visible = !checkmark.visible;
            //     if (checkmark.visible) {
            //         this.bupaiList.push(temp);
            //     }
            //     else {
            //         this.bupaiList.splice(this.bupaiList.indexOf(temp), 1);
            //     }

            //     this.maxInsAddGold = UIUtil.NumberToInt(this.model.curJiangchi31 / this.getRateByCount(this.model.outs31.length));
            //     this.ui_sliderInsAdd.max = this.manchiZInsAddGold + this.manchiFInsAddGold;//this.maxInsAddGold;
            //     this.zhuInsAddGold = this.minInsAddGold;
            //     this.ui_sliderInsAdd.value = this.zhuInsAddGold;
            //     this.showCurInsAdd(this.zhuInsAddGold);
            // });

            UIUtil.loadImage(_tempCard.getChild("val").asLoader, (temp == 0 ? CardRedbetComp.cardTypeName : temp + "_" + PlayerPrefs.GetInt("key_cards_index", 1)), "Texas")
            let bupaiObj = new BupaiPanelObj();
            bupaiObj.num = temp;
            bupaiObj.com = _tempCard;
            this.bupaiPanelObjList.push(bupaiObj);
        }

        // this.ui_ccardsPanel.removeChildrenToPool();
        // for (var i = 0; i < F_TexasViewCtr.instance.Model._CommonCard.length; ++i) {
        //     let temp = F_TexasViewCtr.instance.Model._CommonCard[i];
        //     let _tempCard = this.ui_bupaiPanel.addItemFromPool().asCom;
        //     _tempCard.getChild("val").asLoader.url = "ui://Texas/" + (temp == 0 ? CardRedbetComp.cardTypeName : temp);
        // }
    }
    private showFenchiInsAdd() {
        if (this.model.insList32 == null || this.model.insList32.length == 0) return;
        let playerGold = UIUtil.NumberToInt(this._bftable.myUser.player.gold + (this.model.clubid > 0 && this.model.IsSupper ? this.model.cgold : F_TexasViewCtr.instance.Model.mPlayerModel.gold));
        this.bupaiList = [];
        //??????????????????????????????*0.25?????????????????????????????????*0.5f
        let rate = F_TexasViewCtr.instance.Model._CommonCard.length == 3 ? 0.25 : 0.5;
        let maxGold = Math.min(playerGold, UIUtil.NumberToInt((this.dichi * rate)));

        this.maxInsAddGold = UIUtil.NumberToInt(this.model.curJiangchi32 / this.getRateByCount(this.model.outs32.length));//maxGold >= this.model.insList32[2] ? this.model.insList32[2] : maxGold; 
        this.minInsAddGold = maxGold >= this.model.insList32[0] ? this.model.insList32[0] : maxGold;

        this.fenInsAddGold = this.fenInsAddGold == null || this.fenInsAddGold == 0 ? this.minInsAddGold : this.fenInsAddGold;
        this.ui_sliderInsAdd.min = this.minInsAddGold;
        this.ui_sliderInsAdd.max = this.manchiZInsAddGold + this.manchiFInsAddGold;//this.maxInsAddGold;
        this.ui_sliderInsAdd.value = this.fenInsAddGold;
        this.tempInsAddGold = this.fenInsAddGold;
        this.showCurInsAdd(this.fenInsAddGold);


        this.ui_toubaoNum.text = UIUtil.formatNumber100(this.fenInsAddGold) + "";
        let peifu = (this.getRateByCount(this.model.outs32.length) * this.fenInsAddGold);
        this.ui_peifuNum.text = UIUtil.formatNumber100(peifu >= this.model.curJiangchi32 ? this.model.curJiangchi32 : peifu) + "";
        this.ui_PeiLvText.text = TexasLanguage.getLanguageById(1341) + " " + this.getRateByCount(this.model.outs32.length).toString();//??????

        // this.ui_baobenText.visible = (this.minInsAddGold <= this.model.insList32[1]);
        if (this.minInsAddGold <= this.model.insList32[1]) {
            let rate2 = (this.model.insList32[1] - this.minInsAddGold) / (this.maxInsAddGold - this.minInsAddGold > 0 ? this.maxInsAddGold - this.minInsAddGold : 1);
            // let aa = this.ui_baobenText.parent.GetComponent<RectTransform>().sizeDelta.y * rate2;
            // this.ui_baobenText.transform.localPosition = new Vector3(49.2f, aa, 0);
        }
        this.bupaiPanelObjList = [];
        this.ui_txtOutsCnt.text = this.model.outs32.length + "";
        this.ui_bupaiPanel.removeChildrenToPool();
        for (var i = 0; i < this.model.outs32.length; i++) {
            let temp = this.model.outs32[i];
            let _tempCard = this.ui_bupaiPanel.addItemFromPool().asCom;
            let toggle: fgui.GButton = _tempCard.getChild("Button").asButton;
            let checkmark: fgui.GLoader = _tempCard.getChild("Checkmark").asLoader;
            toggle.clearClick();
            checkmark.visible = false;
            // console.error("this.model.inOrder = " + this.model.inOrder);
            toggle.enabled = this.model.inOrder == 0;
            //?????????????????????outs
            // toggle.onClick(() => {
            //     checkmark.visible = !checkmark.visible;
            //     if (checkmark.visible) {
            //         this.bupaiList.push(temp);

            //     }
            //     else {
            //         this.bupaiList.splice(this.bupaiList.indexOf(temp), 1);

            //     }
            //     this.maxInsAddGold = UIUtil.NumberToInt(this.model.curJiangchi32 / this.getRateByCount(this.model.outs31.length));
            //     this.ui_sliderInsAdd.max = this.manchiZInsAddGold + this.manchiFInsAddGold;//this.maxInsAddGold;
            //     this.fenInsAddGold = this.minInsAddGold;
            //     this.ui_sliderInsAdd.value = this.fenInsAddGold;
            //     this.showCurInsAdd(this.fenInsAddGold);
            // });

            UIUtil.loadImage(_tempCard.getChild("val").asLoader, (temp == 0 ? CardRedbetComp.cardTypeName : temp + "_" + PlayerPrefs.GetInt("key_cards_index", 1)), "Texas");
            let bupaiObj = new BupaiPanelObj();
            bupaiObj.num = temp;
            bupaiObj.com = _tempCard;
            this.bupaiPanelObjList.push(bupaiObj);
        }

        // this.ui_ccardsPanel.removeChildrenToPool();
        // for (var i = 0; i < F_TexasViewCtr.instance.Model._CommonCard.length; ++i) {
        //     var temp = F_TexasViewCtr.instance.Model._CommonCard[i];
        //     var _tempCard = this.ui_bupaiPanel.addItemFromPool().asCom;
        //     _tempCard.getChild("val").asLoader.url = "ui://Texas/" + (temp == 0 ? CardRedbetComp.cardTypeName : temp);
        // }
    }

    //????????????
    private selectBupaiAll() {
        if (this.model.inOrder > 0) return;
        let index = this.ui_btnBupaiAllCard.getController("isOn").selectedIndex;
        let ison = index == 0 ? false : true;
        ison = !ison;
        this.bupaiList = [];
        for (var i = 0; i < this.bupaiPanelObjList.length; i++) {
            let checkmark: fgui.GLoader = this.bupaiPanelObjList[i].com.getChild("Checkmark").asLoader;
            checkmark.visible = ison;
            if (ison) {
                this.bupaiList.push(this.bupaiPanelObjList[i].num);
            }
            else {
                this.bupaiList.splice(this.bupaiList.indexOf(this.bupaiPanelObjList[i].num), 1);
            }
        }
        this.ui_btnBupaiAllCard.getController("isOn").setSelectedIndex(ison ? 1 : 0);
    }

    private InsComCards: fgui.GLoader[] = [];
    //????????????????????????
    private showInsComCard(cards: number[]) {
        if (this.InsComCards == null) this.InsComCards = [];
        for (var i = 0; i < 5; i++) {
            if (this.InsComCards[i] == null) {
                let card = this.ui_BtnInsurancePanel.getChild("comCard" + (i + 1)).asLoader;
                this.InsComCards[i] = card;
            }
            this.InsComCards[i].visible = false;
        }

        for (var i = 0; i <= cards.length; i++) {
            if (cards[i] != null && cards[i] != 0) {
                UIUtil.loadImage(this.InsComCards[i], cards[i] + "_" + PlayerPrefs.GetInt("key_cards_index", 1), "Texas");
                this.InsComCards[i].visible = true;
            } else {
                UIUtil.loadImage(this.InsComCards[i], CardRedbetComp.cardTypeName, "Texas");
                this.InsComCards[i].visible = false;
            }
        }
    }

    private tempInsAddGold: number;
    private zhuInsAddGold: number;
    private fenInsAddGold: number;
    private showCurInsAdd(value: number) {

        this.tempInsAddGold = value;
        //????????????
        this.tempInsAddGold = this.Clamp(this.tempInsAddGold, 0, this.maxInsAddGold);
        if (this.insType == 2) {
            this.fenInsAddGold = this.tempInsAddGold;
            this.showCurInsAddF();
        }
        else {
            this.zhuInsAddGold = this.tempInsAddGold;
            this.showCurInsAddZ();
        }

    }
    private showCurInsAddZ() {
        this.ui_toubaoNum.text = UIUtil.formatNumber100(this.zhuInsAddGold) + "";
        let peifu = (this.getRateByCount(this.model.outs31.length) * this.zhuInsAddGold)
        this.ui_peifuNum.text = UIUtil.formatNumber100(peifu >= this.model.curJiangchi31 ? this.model.curJiangchi31 : peifu) + "";
        this.ui_peilvNum.text = this.getRateByCount(this.model.outs31.length) + "";

        if (this.zhuInsAddGold > 0) {
            this.ui_PeiLvText.text = TexasLanguage.getLanguageById(1405) + " " + this.ui_peifuNum.text;//??????
            // this.ui_BupaiText.text = TexasLanguage.getLanguageById(1406) + " " + this.ui_toubaoNum.text;//??????
        }
        else {
            this.ui_PeiLvText.text = TexasLanguage.getLanguageById(1341) + " " + this.getRateByCount(this.model.outs31.length);//??????
            this.ui_BupaiText.text = TexasLanguage.getLanguageById(1342) + " " + (this.bupaiList.length > 0 ? this.bupaiList.length : this.model.outs31.length);//??????
        }
    }
    private showCurInsAddF() {
        this.ui_toubaoNum.text = UIUtil.formatNumber100(this.fenInsAddGold) + "";
        let peifu = (this.getRateByCount(this.model.outs32.length) * this.fenInsAddGold)
        this.ui_peifuNum.text = UIUtil.formatNumber100(peifu >= this.model.curJiangchi32 ? this.model.curJiangchi32 : peifu) + "";
        this.ui_peilvNum.text = this.getRateByCount(this.model.outs32.length) + "";

        if (this.fenInsAddGold > 0) {
            this.ui_PeiLvText.text = TexasLanguage.getLanguageById(1405) + " " + this.ui_peifuNum.text;//??????
            // this.ui_BupaiText.text = TexasLanguage.getLanguageById(1406) + " " + this.ui_toubaoNum.text;//??????
        }
        else {
            this.ui_PeiLvText.text = TexasLanguage.getLanguageById(1341) + " " + this.getRateByCount(this.model.outs32.length);//??????
            this.ui_BupaiText.text = TexasLanguage.getLanguageById(1342) + " " + (this.bupaiList.length > 0 ? this.bupaiList.length : this.model.outs32.length);//??????
        }
    }
    public showInsJackpot(potlist: number[]) {
        if (potlist != null && potlist.length > 0) {
            this.ui_insjackpotparant.visible = true;
            this.ui_insjackpotparant.removeChildrenToPool();
            for (var i = 0; i < potlist.length; ++i) {
                if (i == 0) continue;//??????????????????
                var temp = potlist[i];
                var _temppot = this.ui_insjackpotparant.addItemFromPool();
                let potTxt = _temppot.asCom.getChild("insjackpotTxt").asTextField;
                potTxt.text = UIUtil.formatNumber100ToK(temp);
                let potIdxTxt = _temppot.asCom.getChild("insjackpotIdx").asTextField;
                potIdxTxt.text = i.toString();//??????
            }
        } else {
            this.ui_insjackpotparant.visible = false;
        }
    }
    //?????????????????????(??????????????????????????????????????? ??????????????????????????????)
    private GetFollowMinGamble(): number {
        return this.model._mingamble;
    }

    //?????????+???????????????????????????????????????* ?????? +??????????????????--?????????????????????  ???????????????????????????????????? 2 3 4 ???
    //1:???????????? 2:?????????*1/2 3:?????????*2/3 4:?????????*1
    private GetDaGamble(index: number) {
        let daGamble = this.GetFollowMinGamble();
        let type = 0;
        switch (index) {
            case 1:
                daGamble = this.GetFollowMinGamble();
                break;
            case 2:
                type = PlayerPrefs.GetInt(F_TexasViewCtr.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 1, 3);
                daGamble = this.model.firstTurnStart ? this.model.brate * 4 * 2 : this.GetDaGambleByAddType(type);
                break;
            case 3:
                type = PlayerPrefs.GetInt(F_TexasViewCtr.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 2, 5);
                daGamble = this.model.firstTurnStart ? this.model.brate * 4 * 3 : this.GetDaGambleByAddType(type);
                break;
            case 4:
                type = PlayerPrefs.GetInt(F_TexasViewCtr.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 3, 7);
                daGamble = this.model.firstTurnStart ? this.model.brate * 4 * 4 : this.GetDaGambleByAddType(type);
                break;
            case 5:
                type = PlayerPrefs.GetInt(F_TexasViewCtr.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 4, 1);
                daGamble = this.GetDaGambleByAddType2(type);
                break;
            case 6:
                type = PlayerPrefs.GetInt(F_TexasViewCtr.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 5, 1);
                daGamble = this.GetDaGambleByAddType2(type);
                break;
        }
        return daGamble;
    }
    public GetDaGambleByAddType(type: number): number {
        let daGamble = this.GetFollowMinGamble();
        switch (type) {
            case 1:
                daGamble = UIUtil.NumberToInt((this.dichi + this.GetFollowMinGamble()) * 1 / 4) + this.GetFollowMinGamble();
                break;
            case 2:
                daGamble = UIUtil.NumberToInt((this.dichi + this.GetFollowMinGamble()) * 1 / 3) + this.GetFollowMinGamble();
                break;
            case 3:
                daGamble = UIUtil.NumberToInt((this.dichi + this.GetFollowMinGamble()) * 1 / 2) + this.GetFollowMinGamble();
                break;
            case 4:
                daGamble = UIUtil.NumberToInt((this.dichi + this.GetFollowMinGamble()) * 3 / 5) + this.GetFollowMinGamble();
                break;
            case 5:
                daGamble = UIUtil.NumberToInt((this.dichi + this.GetFollowMinGamble()) * 2 / 3) + this.GetFollowMinGamble();
                break;
            case 6:
                daGamble = UIUtil.NumberToInt((this.dichi + this.GetFollowMinGamble()) * 3 / 4) + this.GetFollowMinGamble();
                break;
            case 7:
                daGamble = UIUtil.NumberToInt((this.dichi + this.GetFollowMinGamble()) * 1) + this.GetFollowMinGamble();
                break;
            case 8:
                daGamble = UIUtil.NumberToInt((this.dichi + this.GetFollowMinGamble()) * 3 / 2) + this.GetFollowMinGamble();
                break;
            case 9:
                daGamble = UIUtil.NumberToInt(this._bftable.myUser.player.gold);//Allin
                break;
        }
        if (type < 9 && type >= 1 && daGamble > 100) {
            daGamble = UIUtil.NumberToInt(daGamble / 100);
            return daGamble * 100;
        }
        else {
            return daGamble;
        }
    }
    public GetDaGambleByAddType2(type: number): number {
        let daGamble = this.GetFollowMinGamble();
        switch (type) {
            case 1:
                daGamble = 0;
                break;
            case 2:
                daGamble = (this.dichi + this.GetFollowMinGamble()) * 1 / 4 + this.GetFollowMinGamble();
                break;
            case 3:
                daGamble = (this.dichi + this.GetFollowMinGamble()) * 1 / 3 + this.GetFollowMinGamble();
                break;
            case 4:
                daGamble = (this.dichi + this.GetFollowMinGamble()) * 1 / 2 + this.GetFollowMinGamble();
                break;
            case 5:
                daGamble = (this.dichi + this.GetFollowMinGamble()) * 2 / 3 + this.GetFollowMinGamble();
                break;
            case 6:
                daGamble = (this.dichi + this.GetFollowMinGamble()) * 3 / 4 + this.GetFollowMinGamble();
                break;
            case 7:
                daGamble = (this.dichi + this.GetFollowMinGamble()) * 1 + this.GetFollowMinGamble();
                break;
            case 8:
                daGamble = (this.dichi + this.GetFollowMinGamble()) * 3 / 2 + this.GetFollowMinGamble();
                break;
            case 9:
                daGamble = UIUtil.NumberToInt(this._bftable.myUser.player.gold);//Allin
                break;
        }
        if (type < 9 && type >= 2) {
            daGamble = daGamble / 100;
            return daGamble * 100;
        }
        else {
            return daGamble;
        }
    }
    public GetMinDaGambleType(): number//??????????????????????????????
    {
        let type1 = PlayerPrefs.GetInt(F_TexasViewCtr.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 1, 3);
        let type2 = PlayerPrefs.GetInt(F_TexasViewCtr.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 2, 5);
        let type3 = PlayerPrefs.GetInt(F_TexasViewCtr.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 3, 7);
        let type4 = PlayerPrefs.GetInt(F_TexasViewCtr.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 4, 1);
        let type5 = PlayerPrefs.GetInt(F_TexasViewCtr.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 5, 1);
        let max = Math.max(type1, type2, type3);
        type4 = type4 == 1 ? max : type4;//?????????????????????????????????????????????????????????type?????????
        type5 = type5 == 1 ? max : type5;//?????????????????????????????????????????????????????????type?????????
        let min = Math.min(type1, type2, type3, type4, type5);
        if (type1 == min) return 2;
        else if (type2 == min) return 3;
        else if (type3 == min) return 4;
        else if (type4 == min) return 5;
        else return 6;

    }
    private GetDaGambleBase(): number {
        return this.model._curMaxGamble;
    }
    //???????????????
    private HandleActionBtnsForOtherTurn() {
        this.ShowActionBtns(false);
        if (this.IsCanHandleAction()) this.ShowActionAuto(true);
    }
    //????????????????????????,??????????????? ,????????????????????????,??????????????????????????????(???????????? ??????????????????0)
    public ShowActionAuto(isShow: boolean) {
        this.ui_btnAutoQiPai.visible = isShow;
        this.ui_btnAutoFollow.visible = isShow;
    }
    //?????? ??? ????????????
    public ShowActionAddGamble(isShow: boolean, daEndGamble: number) {
        this.ui_btnAdd.visible = this.model.gametype != 20 && isShow;
        this.ui_BtnAddLimit.visible = this.model.gametype != 20 && (isShow);
        this.ui_BtnAddpanel.visible = this.model.gametype != 20 && (isShow);
        this.ui_sliderAdd.visible = false;
        if (isShow) {
            // ?????????????????????
            this.ui_btn1add.getChild("Text").asTextField.text = this.model.firstTurnStart ? UIUtil.formatNumber100(this.model.brate * 4 * 2) + "" : UIUtil.formatNumber100(this.GetDaGamble(2)) + "";
            if (this.ui_btn1add.getChild("Text").asTextField.text == "0") {
                let num = UIUtil.formatNumber100(this.model.brate * 4 * 2);
                let nu = UIUtil.formatNumber100(this.GetDaGamble(2));
            }
            this.ui_btn12add.getChild("Text").asTextField.text = this.model.firstTurnStart ? UIUtil.formatNumber100(this.model.brate * 4 * 3) + "" : UIUtil.formatNumber100(this.GetDaGamble(3)) + "";
            this.ui_btn13add.getChild("Text").asTextField.text = this.model.firstTurnStart ? UIUtil.formatNumber100(this.model.brate * 4 * 4) + "" : UIUtil.formatNumber100(this.GetDaGamble(4)) + "";
            this.ui_btn14add.getChild("Text").asTextField.text = UIUtil.formatNumber100(this.GetDaGamble(5)) + "";
            this.ui_btn15add.getChild("Text").asTextField.text = UIUtil.formatNumber100(this.GetDaGamble(6)) + "";
            this.ui_btn1add.getChild("addType").asTextField.text = this.model.firstTurnStart ? "2X" : this.GetJiazhuType(PlayerPrefs.GetInt(F_TexasViewCtr.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 1, 3));
            this.ui_btn12add.getChild("addType").asTextField.text = this.model.firstTurnStart ? "3X" : this.GetJiazhuType(PlayerPrefs.GetInt(F_TexasViewCtr.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 2, 5));
            this.ui_btn13add.getChild("addType").asTextField.text = this.model.firstTurnStart ? "4X" : this.GetJiazhuType(PlayerPrefs.GetInt(F_TexasViewCtr.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 3, 7));
            this.ui_btn14add.getChild("addType").asTextField.text = this.GetJiazhuType2(PlayerPrefs.GetInt(F_TexasViewCtr.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 4, 1));
            this.ui_btn15add.getChild("addType").asTextField.text = this.GetJiazhuType2(PlayerPrefs.GetInt(F_TexasViewCtr.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 5, 1));
            this.ui_btn14add.visible = (PlayerPrefs.GetInt(F_TexasViewCtr.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 4, 1) > 1 && !this.model.firstTurnStart);
            this.ui_btn15add.visible = (PlayerPrefs.GetInt(F_TexasViewCtr.instance.Model.mPlayerModel.userid + "_key_jiazhu" + 5, 1) > 1 && !this.model.firstTurnStart);
            this.ui_sliderAdd.min = 0;
            this.maxAddGold = UIUtil.NumberToInt(this._bftable.myUser.player.gold / 100);


            let mingamble = this.GetFollowMinGamble();//???????????????????????????????????????????????????????????????:??????-??????;????????????<=0?????????????????????????????????>=?????????????????????????????????
            if (this.ui_btnXiu.visible)
                this.minAddGold = this.model.brate * 2;
            else {
                if (mingamble <= 0)
                    this.minAddGold = this.model.brate * 2;
                else {
                    if (mingamble < this.model.brate * 2) this.minAddGold = this.model.brate * 4 - mingamble;
                    else this.minAddGold = mingamble * 2;
                }
            }
            // this.minAddGold = this._bftable.myUser.player.gold >= this.minAddGold ? this.minAddGold / 100 : this.maxAddGold;
            let mygold = this._bftable.myUser.player.gold;
            this.minAddGold = this.model.brate * 2 > mygold ? mygold : this.model.brate * 2;
            console.log("this.minAddGold = 1 === ", this.minAddGold);
            this.minAddGold = Number(this.minAddGold.toFixed(2));
            console.log("this.minAddGold = 2 === ", this.minAddGold);
            // this.ui_sliderAdd.max = this.maxAddGold;
            // this.ui_sliderAdd.value = this.minAddGold;
            this.ui_txtNums.text = this.minAddGold + "";
            this.ui_bar_v2.fillAmount = 0;
            this.SetButtonEnable(this.ui_btn1add, this._bftable.myUser.player.gold >= this.GetDaGamble(2), cc.Color.WHITE);
            this.SetButtonEnable(this.ui_btn12add, this._bftable.myUser.player.gold >= this.GetDaGamble(3), cc.Color.WHITE);
            this.SetButtonEnable(this.ui_btn13add, this._bftable.myUser.player.gold >= this.GetDaGamble(4), cc.Color.WHITE);
            this.SetButtonEnable(this.ui_btn14add, this._bftable.myUser.player.gold >= this.GetDaGamble(5), cc.Color.WHITE);
            this.SetButtonEnable(this.ui_btn15add, this._bftable.myUser.player.gold >= this.GetDaGamble(6), cc.Color.WHITE);
        }
    }

    public UpdateCurTime() {
        if (this.ui_txtCurTime == null) { return; }
        this.ui_txtCurTime.text = (new Date().getHours()) + ":" + (new Date().getMinutes());
        let progress: number = this.GetBatteryLevel();
        // this.ui_sliderPower.value = progress;
        this.ui_txtProgress.text = UIUtil.NumberToInt(progress * 100) + "%";
    }
    GetBatteryLevel(): number {
        return 1;//SystemInfo.batteryLevel;//??????
    }

    private HandleYuYinState() {
        // this.ui_btnYuYin.enabled = !IsSelfWatch() && !IsSelfWaitToTakeIn(); ;
    }
    public HandleTableRecover(table: sc_entertablenum_tex, playerList: OtherUserInfoSD[]) {
        if (table == null) { return; }
        // this.isCanExeTexMas = false;
        let sd: TableRecoverTexasSD = table._recover;
        //???????????????
        this.UpdateRecoverData(table);

        //??????????????????
        this.sc_entertable_texas_n(playerList);

        // ??????????????????
        playerList.forEach(item => {
            let _tempUser: TexasUserComp = this._bftable.GetUserByUserId(item.py.userid);
            if (_tempUser) {
                _tempUser.SetBanker(item.pos == table._recover.bankpos);
            }
        })

        if (this.model._ShouPai != null) {
            // console.log ("shouPai:" + this.model._ShouPai.length);
            for (var i = 0; i < this.model._ShouPai.length; i++) {
                console.log(" I : " + (i + 1) + " id:" + this.model._ShouPai[i]);
            }
        }
        var mingamble: number[] = [];
        this.FaPaiNoAni(this.model._ShouPai);

        // ???????????????????????????
        let isOneRound: boolean = this.getIsOneRound(sd._pos2bigsmall, sd._pos2gamble);
        //?????????????????? ??????
        sd._pos2gamble.forEach(item => {
            var user = this._bftable.GetUserByUserId(item.pos);
            if (user != null && !user.IsWatch() && !user.IsWaitToTakeIn() && user.userConnectState != UserConnectState.keepSeat) {
                if (isOneRound && sd._pos2bigsmall) {
                    let isAction: boolean = false;
                    for (let index = 0; index < sd._pos2bigsmall.length; index++) {
                        const element = sd._pos2bigsmall[index];
                        if (element.pos == item.pos && element.val > item.val) {
                            isAction = true;
                            break;
                        }
                    }
                    this.SetUserState(item.pos, isAction ? TexasUserHandleState.follow : TexasUserHandleState.invalid);
                } else {
                    if (item.val > this.model.brate) {
                        this.SetUserState(item.pos, TexasUserHandleState.da);
                    } else if (item.val > 0) {
                        this.SetUserState(item.pos, TexasUserHandleState.follow);
                    } else {
                        this.SetUserState(item.pos, TexasUserHandleState.invalid);
                    }
                }
                if (item.val > 0) {
                    user.GenerateChip_nbb(UIUtil.NumberToInt(item.val), false);
                }
                mingamble.push(item.val);
            }
        });

        //???????????????????????????
        sd._pos2gold.forEach(user => {
            let _tempUser: TexasUserComp = this._bftable.GetUserByUserId(user.pos);
            if (_tempUser == null) return true;

            if (_tempUser.player != null) {
                _tempUser.UpdateMoney(UIUtil.NumberToInt(user.val));
            }
        });
        let count = 0;

        if (sd.shoupai != null && sd.shoupai.length > 0) {
            var user = this._bftable.myUser;
            if (user != null) {
                if (!user.IsWatch() && !user.IsWaitToTakeIn() && user.userConnectState != UserConnectState.keepSeat) {
                    count = Math.max(count, sd.shoupai.length);
                    console.log("user.ShowFirstCard(sd.shoupai) == ", sd.shoupai);
                    this.model._ShouPai = sd.shoupai;

                    // ?????? ?????????????????????????????????????????????????????????
                    let myuserid = F_TexasViewCtr.instance.Model.mPlayerModel.userid;
                    let isShowShouPai: boolean = false;
                    if (table.delay == 1) { // ????????????
                        console.error("table.delay == ", table.delay);
                        sd._pos2giveup.forEach(item => {
                            if (item.pos == myuserid && item.val != 0) {
                                // ?????????
                                isShowShouPai = true;
                                console.log("isShowShouPai 11 == ", isShowShouPai);
                            }
                        });
                        sd._pos2look.forEach(item => {
                            if (item.pos == myuserid && item.val != 0) {
                                // ?????????
                                isShowShouPai = true;
                                console.log("isShowShouPai 22 == ", isShowShouPai);
                            }
                        });
                        sd._pos2allin.forEach(item => {
                            if (item.pos == myuserid && item.val != 0) {
                                // ?????????
                                isShowShouPai = true;
                                console.log("isShowShouPai 33 == ", isShowShouPai);
                            }
                        });
                        sd._pos2gamble.forEach(item => {
                            if (item.pos == myuserid && item.val > this.model.brate) {
                                // ?????????
                                isShowShouPai = true;
                                console.log("isShowShouPai xiazhu == ", isShowShouPai);
                            }
                        });
                        if (sd._opencard.length > 0) {
                            // ????????????
                            isShowShouPai = true;
                            console.log("isShowShouPai 44444 == ", isShowShouPai);
                        }
                    } else {
                        // ????????????????????????????????????
                        isShowShouPai = true;
                    }
                    console.log("isShowShouPai == ", isShowShouPai);
                    if (isShowShouPai) {
                        user.ShowFirstCard(sd.shoupai);
                        user.UpdatePos(sd.shoupai);
                    } else {
                        user.ShowFirstCard([0, 0]);
                        user.UpdatePos([0, 0]);
                    }
                }
            }
        }

        if (this.model.isGaming) {
            if (count == 0) {
                this.curSendCardIndex = 1;
            } else if (count == 1) {
                this.curSendCardIndex = 2;
            } else if (count == 2) {
                this.curSendCardIndex = 3;
            }
        }
        sd._pos2look.forEach(item => {
            if (item.val == 1) {
                var user = this._bftable.GetUserByUserId(item.pos);
                if (user != null && !user.IsWatch() && !user.IsWaitToTakeIn() && user.userConnectState != UserConnectState.keepSeat) {
                    this.SetUserState(item.pos, TexasUserHandleState.xiu);
                }
            }

        });

        sd._pos2allin.forEach(item => {
            if (item.val == 1) {
                var user = this._bftable.GetUserByUserId(item.pos);
                if (user != null && !user.IsWatch() && !user.IsWaitToTakeIn() && user.userConnectState != UserConnectState.keepSeat) {
                    this.SetUserState(item.pos, TexasUserHandleState.allin);
                }
            }
        });

        sd._pos2giveup.forEach(item => {
            if (item.val == 1) {
                var user = this._bftable.GetUserByUserId(item.pos);
                //?????????????????????????????????????????????
                if (user != null && !user.IsWatch() && !user.IsWaitToTakeIn() && user.userConnectState != UserConnectState.keepSeat && user.serverpos != sd.ctoken) {
                    this.SetUserState(item.pos, TexasUserHandleState.giveUp);
                }
            }
        });

        if (isOneRound) {
            if (sd._pos2bigsmall && sd._pos2bigsmall.length > 2) {
                var stradlle = sd._pos2bigsmall.reduce((i1, i2) => i1.val > i2.val ? i1 : i2);
                let stradlleUser: TexasUserComp = this._bftable.GetUserByUserId(stradlle.pos);
                if (stradlleUser != null) {
                    stradlleUser.updateHandleStateText(TexasUserHandleState.stradlle);
                }
            }
        }

        this.UpdateJackpot();
        this.UpdateLastJpot();
        this.ShowUIJackpot(this.model.isGaming);
        this.ShowUIWaitPlayPanel();
        this.ShowCommonCards();

        //?????????????????????????????????
        if (sd.ctoken == this.model._posServer) {
            if (this.model._mingamble == null) {
                mingamble.sort((a, b) => {
                    return b - a;
                });
                this.model._mingamble = mingamble[0] - mingamble[mingamble.length - 1];
            }
            this.model.lefttime = sd.lt;
            this.tokenAction(sd.ctoken, false);
            this.model.lefttime = 15;
        } else {
            this.model.lefttime = sd.lt;
            this.tokenAction(sd.ctoken, false);
            this.model.lefttime = 15;
        }

        //?????????????????????????????????????????????
        if (LobbyViewCtr.instance.Model.TexSitdownData != null) {
            let sidDatas = LobbyViewCtr.instance.Model.TexSitdownData;
            for (var i = 0; i < sidDatas.length; i++) {
                F_TexasViewCtr.instance.sc_sitdown_tex_n(sidDatas[i]);
            }
            LobbyViewCtr.instance.Model.TexSitdownData = null;
        }

        //??????????????????????????????
        let timeout = setTimeout(() => {
            F_TexasViewCtr.instance.cs_compete_table_info();
            this.isCanExeTexMas = true;
        }, 1000);
        TimeInfoMgrTex.instance.addTimerNoCallback(timeout);

        //????????????????????????
        if (this.model.competeid != 0) {
            UIUtil.loadImage(this.ui_zhuobubg, "matchBG1", "Texas");
        }
        // ??????????????????
        if (table._recover.insdata) {
            table._recover.insdata.forEach(item => {
                F_TexasViewCtr.instance.sc_instoken_tex_n(item);
            })
        }
        // ??????????????????
        F_TexasViewCtr.instance.Model.openplay = table.openplay;
        if (table._recover._status != 3) { // ???????????????
            this.sc_openplay_tex_n();
        }
    }

    public getIsOneRound(_pos2bigsmall: CommonPosValSD[], _pos2gamble: CommonPosValSD[]): boolean {
        let result: boolean = false;
        if (_pos2bigsmall && _pos2bigsmall.length > 2) {
            var stradlle = _pos2bigsmall.reduce((i1, i2) => i1.val > i2.val ? i1 : i2);
            for (let index = 0; index < _pos2gamble.length; index++) {
                let data = _pos2gamble[index];
                // stradlle??????????????????
                if (data.pos == stradlle.pos && data.val == stradlle.val) {
                    result = true;
                    break;
                }
            }
        }
        return result;
    }

    public updateTableInfo() {
        let str0: string = "";//F_TexasViewCtr.instance.Model.MatchCode == null || F_TexasViewCtr.instance.Model.MatchCode == "" ? "" : + TexasLanguage.getLanguageById(1408) + ":" + F_TexasViewCtr.instance.Model.MatchCode + " ";//?????? LanguageConfig.getLanguageById(1408)
        this.ui_txtBase.text = `${str0}${TexasLanguage.getLanguageById(1409)}${UIUtil.formatNumber100(this.model.brate)}/${UIUtil.formatNumber100(this.model.brate * 2)}/${UIUtil.formatNumber100(this.model.brate * 4)}(${UIUtil.formatNumber100(this.model.pregamble)})`; //??????
        this.ui_txtBase.singleLine = true; //this.HorizontalWrapMode.Overflow;
        this.UpdateJackpot(0, 0);
        this.ui_txtAdd.text = TexasLanguage.getLanguageById(1410);//??????
        this.ui_txtRound.text = TexasLanguage.getLanguageById(1411) + ":0";//??????
        this.ui_txtRoom.text = "";//TexasLanguage.getLanguageById(1180) + ":" + this.model.Room_tnumber;//?????????
        this.ui_txtRoomNameMid.text = "";//TexasLanguage.getLanguageById(1743) + ":" + this.model.Room_name;//????????????
        this.ui_txtClubName.visible = (this.model.intoCid > 0);
        this.ui_txtClubName.text = this.model.curSClub != null ? this.model.curSClub.cname : "";
        this.ui_txtPassword.text = "";//"??????: "+  this.roomPassword;
        this.ui_txtPassword.visible = false;//(!this.roomPassword);
        this.ui_txtGameType.text = (this.model.gametype == 20 ? "AOF" : "") + (this.model.gametype == 10 ? "??????" : "") + (this.model.ins == 1 ? TexasLanguage.getLanguageById(1412) + "" : "") + (this.model.gps == 1 ? "GPS" : "") + (this.model.ip == 1 ? "IP" : "") + (this.model.delay == 1 ? TexasLanguage.getLanguageById(1945) + "" : "") + (this.model.showCard == 1 ? TexasLanguage.getLanguageById(1946) + "" : "") + (this.model.cinto ? TexasLanguage.getLanguageById(2193) + "" : "") + (this.model.Inflow > 0 ? TexasLanguage.getLanguageById(2229) + ":" + this.model.Inflow + "% " : "") + (this.model.ios ? TexasLanguage.getLanguageById(2230) : "");//??????
        this.ui_txtGameType.visible = false;//(this.model.gametype == 20 || this.model.gametype == 10 || this.model.ins == 1 || this.model.gps == 1 || this.model.ip == 1 || this.model.delay == 1 || this.model.showCard == 1 || this.model.cinto || this.model.Inflow > 0);// || this.model.ios);
        let txtGameType = this.ui_txtGameType.text == "" ? "" : "(" + this.ui_txtGameType.text + ")";
        this.ui_txtRoom.text = TexasLanguage.getLanguageById(180033) + txtGameType + "-" + this.model.Room_tnumber;//????????????(??????)- roomid;

        //??????
        this.ui_imgMatchRank.visible = false;
        this.ui_txtMatchRank.text = "";
        this.ui_txtMatchLv.text = "";
        this.ui_txtNexBas.text = "";
        this.ui_txtNexTime.text = "";
        if (this.model.competeid != 0) {
            this.ui_txtGameType.visible = true;
            this.ui_txtRoomNameMid.text = "";//TexasLanguage.getLanguageById(180027) + ":" + this.model.matchName;//????????????
            this.ui_txtRoom.text = TexasLanguage.getLanguageById(180028) + ":" + this.model.competeid;//???????????? 
            this.ui_txtGameType.text = TexasLanguage.getLanguageById(180023);//????????????
            this.ui_txtMatchLv.text = TexasLanguage.getLanguageById(180024) + ":" + this.model.level + "/" + this.model.max_level;//????????????
            this.ui_txtBase.text = TexasLanguage.getLanguageById(180025) + ":" + `${UIUtil.formatNumber100(this.model.brate)}/${UIUtil.formatNumber100(this.model.bigblind)}`;//????????????
        }
    }

    //????????????
    private uplevetimeFun = null;
    public UpdateMatchData(data: sc_compete_table_info) {
        this.ui_txtGameType.text = TexasLanguage.getLanguageById(180023);//????????????
        this.ui_txtMatchLv.text = TexasLanguage.getLanguageById(180024) + ":" + data.level + "/" + data.max_level;//????????????
        this.ui_txtBase.text = TexasLanguage.getLanguageById(180025) + ":" + UIUtil.formatNumber100(data.baserate) + "/" + UIUtil.formatNumber100(data.into);//????????????
        this.ui_txtNexBas.text = "????????????:" + UIUtil.formatNumber100(data.next_baserate) + "/" + UIUtil.formatNumber100(data.next_into);
        let t = data.next_uplevel_time;
        if (t > 0) {
            if (this.uplevetimeFun != null && this.uplevetimeFun != 0) clearTimeout(this.uplevetimeFun);
            this.uplevetimeFun = setTimeout(() => {
                this.ui_txtNexTime.text = TexasLanguage.getLanguageById(180026) + ":" + UIUtil.getStringTime(t);//????????????
                t--;
            }, 1000, data.next_uplevel_time);
            TimeInfoMgrTex.instance.addTimerNoCallback(this.uplevetimeFun);
        } else {
            this.ui_txtNexTime.text = "";
        }

    }
    //????????????
    public UpdateMatchRank(data: sc_compete_rank_info) {
        let rank = 0
        for (var i = 0; i < data.infos.length; i++) {
            if (data.infos[i].playerid == this.model.mPlayerModel.userid) {
                rank = data.infos[i].rank;
            }
        }
        this.ui_imgMatchRank.visible = true;
        this.ui_txtMatchRank.text = "???" + rank + "???";
    }
    //????????????
    public MacthEnd(data: sc_compete_award_info) {
        if (data.type == 0) {
            this.tipView.ShowTip(TexasLanguage.getLanguageById(180021), () => { //?????????????????????????????????????????????
                LobbyViewCtr.instance.cs_signup(data.competeid);
            }, () => {

            }, TexasLanguage.getLanguageById(180022), TexasLanguage.getLanguageById(1393));//??????,??????

        } else {
            let award = "";
            for (var i = 0; i < data.infos.length; i++) {
                award += data.infos[i].num + "" + data.infos[i].name + "\n";
            }

            //??????????????????
            this.tipView.ShowTip(TexasLanguage.getLanguageById(180020) + data.rank + "??????" + TexasLanguage.getLanguageById(1126) + "???\n" + award + ""); //???????????????????????????

        }
    }

    private roomPassword: string;
    public UpdateRecoverData(table: sc_entertablenum_tex) {
        this.isHaveAddGold = false;
        this.isBigEnd = false;
        this.model.isGaming = table._recover._status == 3;
        this.model._jpot = table.gpot;
        this.model._lastjpot = table.lpot;
        this.model.clicknum = table.clicknum;
        this.model._ShouPai = table._recover.shoupai;
        this.roomPassword = table.pas;
        this.lastGambleGold = 0;
        this.curSendCardIndex = this.model.isGaming ? 1 : 0;
        this.model.PlayingUsers = table._recover._pos2gamble;
        this.model.SetLockGold(table.lockgold);
        this.model.SetMinStartGamble(table.limitgold);
        this.model._CommonCard = table._recover._opencard;
        this.model.curTableOverCount = table._curTableOverCount;
    }
    public SetUserState(userId: number, state: TexasUserHandleState) {
        let user: TexasUserComp = this._bftable.GetUserByUserId(userId);
        if (user == null || user.player == null) { return; }
        if (!user.IsWatch() && !user.IsWaitToTakeIn() && this.model.isGaming) {
            if (state == TexasUserHandleState.giveUp) {
                user.UpdateGiveUpState();
            } else {
                user.updateHandleStateText(state);
            }
        }
    }
    public CheckMoveToMyPos() {
        this._bftable.userList.forEach(item => {
            if (item.localpos <= 0 || item.localpos > this.model.manNum) { return true; }//??????pos?????????????????????????????????
            let vec3Index = this.GetLocalPosByServerPos(item.localpos);
            let posTs = this.pos.get(vec3Index);
            // item.rectTransform.anchorMax = posTs.anchorMax;
            // item.rectTransform.anchorMin = posTs.anchorMin;
            this.moveN1toN2(item.node, posTs.node);
            item.SetPosInView(vec3Index);
        });
    }
    public ResetPos() {
        this.RefreshCardImage();
        this._bftable.userList.forEach(item => {
            if (item.localpos <= 0) { return true }
            let vec3Index = this.GetLocalPosByServerPos(item.localpos);
            let posTs = this.pos.get(vec3Index);
            // item.rectTransform.anchorMax = posTs.anchorMax;
            // item.rectTransform.anchorMin = posTs.anchorMin;
            this.moveN1toN2(item.node, posTs.node);
            item.SetPosInView(vec3Index);
        });
    }
    public GetLocalPosByServerPos(serverPos: number) {
        return this._bftable.GetLocalPos(serverPos);
    }
    public sc_chatlog(data: sc_chatlog) {
        // this.chatComp.showLog (data);
    }
    public sc_chat_n(data: sc_chat_n) {
        if (this._bftable == null) return;
        let user = this._bftable.GetUserByPos(data.pos);
        if (data.keep > 0 && user != null && user.player != null) {
            this.UpdateUserState(user.player.userid, data.keep, -1);
            this.SetUserForKeepSeat_nn(user.player.userid, data.keep);
        }

        if (user == null) {
            //console.log("chat user is null:" + data.pos);
            return;
        }
        this.HandleChat(data.pos, data.type, data.content, data.tpos);
        user.UpdateMoney(data.gold);
    }
    //1?????????2?????????3??????,4????????? 5.???????????????????????? 6.??????
    public HandleChat(pos: number, type: number, content: string, toPos = -1) {
        if (this._bftable == null) return;
        let user = this._bftable.GetUserByPos(pos);
        if (user == null) {
            console.log("chat user is null:" + pos);
            return;
        }
        switch (type) {
            case 1:
                user.PlayChatVoice(pos, content);
                break;
            case 2:
                user.ShowEmoj(content);
                break;
            case 3:
                break;
            case 4:
                user.ShowChatSound(content); //???????????????????????????,???????????????????????????
                break;
            case 5:
                let toUser = this._bftable.GetUserByPos(toPos);
                if (toUser == null) {
                    toUser = user;
                }
                if (toPos != user.serverpos) {
                    this.ShowGiftMove(user.localpos <= 0 ? this.ui_btnRecord.asCom : user.ui_imgEmoj.asCom, toUser.ui_imgEmoj.asCom, content, false);
                } else {
                    this.ShowGiftMove(user.localpos <= 0 ? this.ui_btnRecord.asCom : user.ui_imgEmoj.asCom, toUser.ui_imgEmoj.asCom, content, true);
                    // CommonCtr.instance.ShowTip(TexasLanguage.getLanguageById(1586));//??????????????????
                }
                break;
            case 6:
                let notifyStr = user.player._n + ":" + content;
                this.rollNoyifierComp.addNotify(notifyStr);
                break;
            default:
                break;
        }
    }
    public ShowVoice(pos: number, content: string) {
        let user: TexasUserComp = this._bftable.GetUserByPos(pos);
        if (user == null) {
            console.log("chat user is null:" + pos);
            return;
        }
        let chatOpen = PlayerPrefs.GetInt("key_chat_value", 1);
        if (chatOpen == 1)
            user.PlayChatVoice(pos, content);
    }
    private ShowGift(to: fgui.GComponent, content: string) {
        if (to == null) { return; }
        // this.ShowEftGift (to, content);
    }
    private ShowGiftMove(from: fgui.GComponent, to: fgui.GComponent, content: string, isSelf: boolean) {
        if (from == null || to == null) { return; }

        let gifNode = this.userInfoComp.getCreateAnimationNode(content);
        if (gifNode) {
            //??????????????????
            if (isSelf && Texas.giftConfig[gifNode.name]["moveAnima"] != "_") {
                CommonCtr.instance.ShowTip(TexasLanguage.getLanguageById(1586));//??????????????????
                return;
            }
            gifNode.setScale(1.1, 1.1);
            this.flyGift(gifNode, from.node, to.node);

        } else {
            console.log("GetGift error content:" + content);
        }
    }

    /**
     * @description
     * @param  ???????????????
     * @param  ???????????????
     */
    public flyGift(node: cc.Node, selfNode: cc.Node, targetNode: cc.Node) {
        let spineAni = node.getComponent(sp.Skeleton);
        console.log("node = " + node.name);
        console.log("moveAnima = " + Texas.giftConfig[node.name]["moveAnima"]);

        if (Texas.giftConfig[node.name]["moveAnima"] != "" && Texas.giftConfig[node.name]["moveAnima"] != "_") {
            targetNode.addChild(node);
            spineAni.setAnimation(0, Texas.giftConfig[node.name]["moveAnima"], true);
            //??????????????????
            node.position = node.parent.convertToNodeSpaceAR(selfNode.parent.convertToWorldSpaceAR(selfNode.position));
            node.setPosition(node.position);

            //?????????????????????
            let targetPosition = node.parent.convertToNodeSpaceAR(targetNode.parent.convertToWorldSpaceAR(targetNode.position));
            node.runAction(cc.sequence(cc.moveTo(0.5, cc.v2(targetPosition.x, targetPosition.y)), cc.callFunc(() => {
                spineAni.setAnimation(0, Texas.giftConfig[node.name]["playAnima"], false);
                //??????????????????
                spineAni.setCompleteListener(() => {
                    spineAni.node.parent.removeChild(node);
                    //??????end??????
                    let gifNode = this.userInfoComp.getCreateAnimationNode(node.name + "_end");
                    if (gifNode != null) {
                        this.flyGift(gifNode, selfNode, targetNode);
                    }
                });
            })));
        }
        else if (Texas.giftConfig[node.name]["playAnima"] != "" && Texas.giftConfig[node.name]["moveAnima"] != "_") {
            targetNode.addChild(node);
            //?????????????????????
            let targetPosition = node.parent.convertToNodeSpaceAR(targetNode.parent.convertToWorldSpaceAR(targetNode.position));
            node.position = targetPosition;

            spineAni.setAnimation(0, Texas.giftConfig[node.name]["playAnima"], false);
            spineAni.setCompleteListener(() => {
                spineAni.node.parent.removeChild(node);
            })
        } else if (Texas.giftConfig[node.name]["playAnima"] != "" && Texas.giftConfig[node.name]["moveAnima"] == "_") {
            //?????????????????????
            selfNode.addChild(node);
            node.position = node.parent.convertToNodeSpaceAR(selfNode.parent.convertToWorldSpaceAR(selfNode.position));
            node.setPosition(node.position);
            node.setScale(0.5, 0.5);
            spineAni.setAnimation(0, Texas.giftConfig[node.name]["playAnima"], false);
            spineAni.setCompleteListener(() => {
                spineAni.node.parent.removeChild(node);
            })
        }
    }

    private ShowEftBigWin(score: number) {
        this.ui_bigWin.visible = true;
        // this.ui_bigWin.getChild("Text").asTextField.asMogafaNumberField().Play(0, UIUtil.formatNumber100(score), 2);
        this.ui_bigWin.getChild("Text").asTextField.text = UIUtil.NumberToInt(score / 100) + "";
        this.bigwinSpin.bgStart();
        this.scheduleOnce(() => {
            this.ui_bigWin.visible = false;
            this.bigwinSpin.onDestroy();
        }, 5);

    }
    public IsDisplayChat() {
        // this.ui_btnYuYin.visible = (PlayerPrefs.GetInt("key_chat_value", 1) == 1);
    }
    public RefreshDeskImage() {
        if (this.model.competeid != 0) return;
        let deskBgIndex = PlayerPrefs.GetInt("key_deskBg_index", 3);
        UIUtil.loadImage(this.ui_zhuobubg, "whirlportbg" + deskBgIndex, "Texas")
    }
    public RefreshCardImage() {
        let cardBgIndex = PlayerPrefs.GetInt("key_cardBg_index", 3);
        CardRedbetComp.SetCardImageType(cardBgIndex);
        //??????????????????
        this._bftable.userList.forEach(item => {
            item.UpdateAllCardBgImage();
        });
    }
    public RefreshCommonCards() {
        if (this._CommonCardImageList == null || this._CommonCardImageList.length <= 0) return;
        this._CommonCardImageList.forEach(temp => {
            temp.UpdateCardImage();
        });
    }
    public RefreshUserCurGamble() {
        this._bftable.userList.forEach(item => {
            item.resetCurGamble();
        });
    }
    public CheckBtnBackTableState() {
        this.ui_btnBackTable.visible = (this._bftable.myUser.serverpos > 0 && this._bftable.myUser.IsKeep());

    }
    public ShowUILeftCards(isShowShowPai: boolean, isShowLeftCard: boolean) {
        let isShow: boolean = this._bftable.myUser.serverpos > 0 && !this.IsSelfWatch() && !this.IsSelfWaitToTakeIn();
        this.ui_btnShowPai.visible = (isShow && isShowShowPai);
        this.ui_btnLeftCards.getChild("Text").asTextField.text = this.getLeftCardCost();
        this.ui_btnLeftCards.visible = (isShow && isShowLeftCard);
        if (isShow && isShowShowPai) {
            this.ui_btnShowPai.getChild("Text").asTextField.text = this.getShowPaiCost();
        }
    }

    public getShowPaiCost(): string {
        let cost: string = "";
        cost = (this.model.brate / 100 * 2 * Math.pow(2, F_TexasViewCtr.instance.Model.fshownum)).toFixed(2);
        console.log("getShowPaiCost cost == ", cost);
        return "" + cost;
    }

    public getLeftCardCost(): string {
        let cost: string = "";
        // let clicknum: number = this.model.clicknum > 2 ? 2 : this.model.clicknum;
        // cost = (this.model.brate / 1000 * (clicknum + 1)).toFixed(2);
        // console.log("getLeftCardCost cost == ", cost);
        cost = (this.model.brate / 1000).toFixed(2);
        return "" + cost;
    }

    public ShowXiuPai(data) {
        if (data == null || data.pos2cards == null) {
            return;
        }
        data.pos2cards.foreach(item => {
            let user: TexasUserComp = this._bftable.GetUserByUserId(item.pos);
            if (user != null && !this.model.isGaming) {
                console.log("fgfgfgfgfgfgf value= ", item.vallist);
                user.ShowFirstCard(item.vallist);
            }
        });
    }
    public ShowMyCard(data: sc_showmycard_tex_n) {
        let user: TexasUserComp = this._bftable.GetUserByUserId(data.UserID);
        if (user != null) {
            user.ShowCardAt(data.cardPos, data.card);
        }
    }
    public ShowMyCardStatus(data: sc_showmycard_tex) {
        let user = this._bftable.GetUserByUserId(F_TexasViewCtr.instance.Model.mPlayerModel.userid);
        if (user != null) {
            user.ShowCardStatusAt(data.cpos, data.type);
        }
    }
    public ShowRotateCards(listContent: fgui.GComponent, cards: number[]) {
        UIUtil.HideChildren(listContent);
        let minCount = Math.min(listContent._children.length, cards.length, 2);
        for (var i = 0; i < minCount; i++) {
            this.ShowRotateCard(listContent._children[i].asCom, cards[i], i * 0.35);
        }
    }
    public ShowRotateCard(ts: fgui.GComponent, value: number, delay: number) {
        ts.visible = true;
        let card0: fgui.GComponent = ts._children.length >= 1 ? ts._children[0].asCom : null;
        let card1: fgui.GLoader = ts._children.length > 1 ? ts._children[1].asLoader : null;
        UIUtil.loadImage(card0.asLoader, CardRedbetComp.cardTypeName, "Texas")
        UIUtil.loadImage(card1.asLoader, value + "_" + PlayerPrefs.GetInt("key_cards_index", 1), "Texas")

        ts.node.stopAllActions();
        card0.visible = true;

        if (card1 != null) {
            card1.node.active = false;
            card1.visible = false;
        }

        this.node.anchorX = 0.5
        this.node.anchorY = 0.5
        let action = cc.sequence(
            // cc.delayTime(delay),
            // cc.rotate3DTo(delay,0),
            cc.spawn(
                cc.scaleTo(0.2, 0, 1),
                cc.skewTo(0.2, 0, 20),
            ),
            cc.callFunc(() => {
                card0.node.active = false;
                card0.visible = false;
                if (card1 != null) {
                    card1.node.active = true;
                    card1.visible = false;
                }
                this.node.skewY = -20;
            }),
            cc.spawn(
                cc.scaleTo(0.2, 1, 1),
                cc.skewTo(0.2, 0, 0)
            ),
        );
        ts.node.runAction(action);
    }
    private sendAudioTimer: Function = null;
    public PlaySendCardAudio(count: number, interval = 0.052) {
        this.unschedule(this.sendAudioTimer)

        if (count < 0) {
            count = 0;
        }
        this.scheduleOnce(this.sendAudioTimer = () => {
            AudioManager.Singleton.stopEffect("game_deal");
            AudioManager.Singleton.play("", "game_deal");
        }, interval)

    }
    public UpdateTakeInTip() {
        this.ui_newMsg_btn.visible = (this.model.ownnerid == F_TexasViewCtr.instance.Model.mPlayerModel.userid && this.model.cinto && F_TexasViewCtr.instance.Model.tableApply > 0);
    }
    public ShowOpenTip(isShow: boolean) {
        this.ui_openTip.visible = (isShow && this.model.delay == 1);
    }
    public UpdateConfirmStartBtn() {
        this.ShowUIWaitPlayPanel();
        // this.ui_ConfirmStartBtn.visible = (this.model.ownnerid == F_TexasViewCtr.instance.Model.mPlayerModel.userid && this.model.openplay && !this.model.isopen);
    }
    public RefreshTakeInPanel() {

    }
    //1?????? 0??????
    private GetInsSwitch(): number {
        let sw = 1;
        let insTipStr = PlayerPrefs.GetString("key_insTip_value", "");
        if (insTipStr != null && insTipStr != "") {
            let insArr: string[] = insTipStr.split(';');
            insArr.forEach(temp => {
                let tableInfoArr: string[] = temp.split('+');
                if (tableInfoArr.length < 2) return true;
                if (this.model.Room_tnumber == tableInfoArr[0]) {
                    sw = Number.parseInt(tableInfoArr[1]);
                }
            });
        }
        return sw;
    }
    public ShowConfirmHandlePanel(isShow: boolean) {
        this.ui_confirmHandlePanel.visible = isShow;
    }

    public Clamp(value: number, min: number, max: number): number {
        let num = 0;
        num = value < min ? min : value;
        num = value > max ? max : value;
        return num;
    }

    // ??? node1????????? node2?????????
    public moveN1toN2(node1: cc.Node, node2: cc.Node) {
        node1.position = node1.parent.convertToNodeSpaceAR(node2.parent.convertToWorldSpaceAR(node2.position))
    }
    // ????????? node1????????? node2??????????????????
    public convertNodeSpaceAR(node1: cc.Node, node2: cc.Node): cc.Vec3 {
        return node1.parent.convertToNodeSpaceAR(node2.parent.convertToWorldSpaceAR(node2.position))
    }

    public GetJiazhuType(type: number): string {
        let str = "";
        switch (type) {
            case 1:
                str = "1/4";
                break;
            case 2:
                str = "1/3";
                break;
            case 3:
                str = "1/2";
                break;
            case 4:
                str = "3/5";
                break;
            case 5:
                str = "2/3";
                break;
            case 6:
                str = "3/4";
                break;
            case 7:
                str = "1X";
                break;
            case 8:
                str = "1.5X";
                break;
            case 9:
                str = "Allin";
                break;
        }
        return str;
    }
    public GetJiazhuType2(type: number): string {
        let str = "";
        switch (type) {
            case 1:
                str = TexasLanguage.getLanguageById(2257);//???
                break;
            case 2:
                str = "1/4";
                break;
            case 3:
                str = "1/3";
                break;
            case 4:
                str = "1/2";
                break;
            case 5:
                str = "2/3";
                break;
            case 6:
                str = "3/4";
                break;
            case 7:
                str = "1X";
                break;
            case 8:
                str = "1.5X";
                break;
            case 9:
                str = "Allin";
                break;
        }
        return str;
    }

    public sc_openplay_tex_n() {
        this.ui_pauseview.visible = !F_TexasViewCtr.instance.Model.openplay;
    }
}

class BupaiPanelObj {
    num: number;
    com: fgui.GComponent;
}