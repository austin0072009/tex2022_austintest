import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import { WebSocketManager } from "../../../../Script/BaseFrame/WebSocketManager";
import { UIUtil } from "../../../../Script/Common/UIUtil";
import { LoginViewCtr } from "../../Login/LoginViewCtr";
import { cs_getscollectbyid_tex, PInfoSD, sc_getscollectbyid_tex, TexActionSD, TexTInfoSD, TexUserInfoSD } from "./CareerNetDataStruct";
import { MyCardTurnCellComp, TurnTitleComp } from "./MyCardTurnCellComp";
import { TexasBase } from "./TexasBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MyCardHistory extends ViewBase {
    protected get packageResourceName(): string {
        return "gameHall";
    }
    protected get packageName(): string {
        return "res/Lobby";
    }
    protected get componentName(): string {
        return "historyPanel";
    }
    public tableId = 0;
    public di: number;
    public showCard: number;

    public ui_btnClose_history: fgui.GButton = null;
    public ui_paipu: fgui.GComponent = null;
    public ui_ListContent: fgui.GList = null;
    public ui_HisInfoTitleTextBg: fgui.GComponent = null;
    public ui_turnContent: fgui.GList = null;
    public ui_ShowDownContent: fgui.GComponent = null;
    public ui_ShowDownTitle: fgui.GComponent = null;
    public ui_ShowDownInfoList: fgui.GList = null;
    public ui_sliderSelectPage: fgui.GSlider = null;
    private curPageIndex = -1;
    private maxPageCount: number;
    public ui_btnPageNext: fgui.GButton = null;
    public ui_btnPagePre: fgui.GButton = null;
    public ui_txtPageIndex: fgui.GTextField = null;

    public users: PInfoSD[];
    public historyList: TexTInfoSD[];
    public ui_HisInfoTitleText: fgui.GTextField = null;
    public ui_historyGroup: fgui.GComponent = null;

    public firstCards: number[];
    public afterCards: number[];
    public showCards: number[];
    public selectFiveCards: number[];

    private cid: string;
    private data: any;

    private onLoadEnd = false;
    OnLoadCompleted() {
        this.onLoadEnd = true;
        if (this.mystart) this.MyStartEx();
    }

    public MyStart(_cid: string, _data: any = null) {
        this.cid = _cid;
        this.data = _data;
        this.mystart = true;
        if (this.onLoadEnd) this.MyStartEx();
    }

    AutoSetGoProperty() { }

    public MyStartEx() {
        super.AutoSetGoProperty();

        this.Init();
        this.Show();
    }


    public InitLanguage() {

    }
    public Init() {
        this.firstCards = [];
        this.afterCards = [];
        this.showCards = [];
        this.selectFiveCards = [];

        this.InitEvents();
        this.Hide();
    }

    public InitEvents() {
        this.ui_btnClose_history.onClick(() => {
            this.Hide();
        });

        this.ui_sliderSelectPage.on(fgui.Event.STATUS_CHANGED, (progress) => {
            if (progress.value == 0) return;//打开的时候会默认将滑动条的值滑到0，这时候会先刷新一次第一页的数据，然后再刷新当前maxpage的值

            let pageIndex = UIUtil.NumberToInt(progress.value); //this.Clamp(UIUtil.NumberToInt(Math.round(progress.value * this.maxPageCount)), 1, this.maxPageCount);
            // console.log("progress: " + progress.value + " curpage:" + this.curPageIndex +" , pageIndex:"+pageIndex);
            if (pageIndex != this.curPageIndex) {
                this.SetCurPageIndex(pageIndex);
            }
        });
        this.ui_btnPageNext.clearClick();
        this.ui_btnPageNext.onClick(() => {
            this.SetSliderValueByIndex(this.curPageIndex + 1);
        });
        this.ui_btnPagePre.clearClick();
        this.ui_btnPagePre.onClick(() => {
            this.SetSliderValueByIndex(this.curPageIndex - 1);
        });
    }

    private SetSliderValueByIndex(pageIndex: number) {
        this.ui_sliderSelectPage.value = pageIndex; //this.maxPageCount > 0 ? pageIndex / this.maxPageCount : 0;
        this.SetCurPageIndex(pageIndex);
    }

    private pageSd: TexTInfoSD;

    private SetCurPageIndex(pageIndex: number) {
        // this.Hide();

        if (pageIndex > this.maxPageCount || pageIndex <= 0 || this.curPageIndex == pageIndex || this.maxPageCount <= 0) { return; }
        this.curPageIndex = pageIndex;


        // console.log("curPageIndex:" + this.curPageIndex + " maxPageCount:" + this.maxPageCount);

        let enableFirst = pageIndex > 1 && this.maxPageCount > 1;

        this.SetButtonEnable(this.ui_btnPagePre, enableFirst);

        let enableLast = pageIndex < this.maxPageCount && this.maxPageCount > 1;

        this.SetButtonEnable(this.ui_btnPageNext, enableLast);

        this.ui_txtPageIndex.text = this.curPageIndex + "/" + this.maxPageCount;
        console.log("txt:" + this.ui_txtPageIndex.text);

        this.pageSd = this.historyList[this.curPageIndex - 1];
        // let positive = this.pageSd.j >= 0 ? "+" : "";
        // console.error("txtJackpotPool = " + this.pageSd.j);

        this.ShowHistoryInfo(this.pageSd);
    }

    private SetButtonEnable(btn: fgui.GButton, isEnable: boolean, btnColor: cc.Color = null, txtColor: cc.Color = null) {
        btn.enabled = isEnable;
        let _img: fgui.GImage = btn.getChild("Image").asImage;
        if (_img == null) return;
        if (isEnable) {
            _img.color = btnColor == null ? cc.Color.WHITE : btnColor;
        }
        else {
            _img.color = cc.Color.GRAY;
        }

        if (btn._children.length > 0) {
            let text = btn.getChild("Text");
            if (text != null) {
                if (isEnable) {
                    text.asTextField.color = txtColor == null ? cc.Color.WHITE : txtColor;
                }
                else {
                    text.asTextField.color = cc.Color.GRAY;
                }
            }
        }


    }

    //打开界面
    public Show() {
        this.node.active = true;
        super.Show();
        this.InitLanguage();

        if (this.data == null) {
            let _getlist: cs_getscollectbyid_tex = new cs_getscollectbyid_tex();
            _getlist.cid = this.cid;
            _getlist._g = 51;
            _getlist.fn = "cs_getscollectbyid_tex";
            WebSocketManager.getInstance.SendJSON(_getlist, this.sc_getscollectbyid_tex.bind(this));
        }
        else {
            this.UpdateData(this.data.ulist, this.data.tinfo, this.data.tnum, this.data.baserate, this.data.showCard);
        }
    }
    public sc_getscollectbyid_tex(data: sc_getscollectbyid_tex) {
        if (data.result != 1) {
            console.error("获取数据错误：" + data.result);
            return;
        }
        this.UpdateData_sc(data);
    }

    public Hide() {
        super.Hide();
    }

    public ShowHistoryInfo(data: TexTInfoSD) {
        this.ui_ListContent.visible = (data.tInfo != null && data.tInfo.length > 0);
        this.ShowList(data.tInfo, data.ipool, data.ng);

        this.ui_HisInfoTitleTextBg.visible = (data.tlist != null && data.tlist.length > 0);
        this.ui_turnContent.visible = (this.ui_HisInfoTitleTextBg.visible);
        this.ui_ShowDownContent.visible = (this.ui_HisInfoTitleTextBg.visible);
        // this.Show();
        this.ShowTurnInfo(data.tlist, data.ipool, data.tInfo);


    }
    public ShowList(tList: TexUserInfoSD[], poolNum: number, ng: number) {
        this.ui_ListContent.removeChildrenToPool();
        this.ui_ListContent.height = 0;
        if (tList == null || tList.length == 0) return;
        let go: fgui.GObject = null;
        let isShow = this.isShowPai(tList);

        this.showCards = [];
        for (var i = 0; i < tList.length; i++) {

            go = this.ui_ListContent.addItemFromPool();
            this.ui_ListContent.height += 155;
            // go.transform.GetComponent<RectTransform>().sizeDelta = new Vector2(820, 110);
            this.SetUserCellInfo(go.asCom, tList[i], isShow, ng);
            this.GetUserShowCard(tList[i]);
        }
        if (poolNum != 0) {
            go = this.ui_ListContent.addItemFromPool();
            this.ui_ListContent.height += 155;
            // go.transform.GetComponent<RectTransform>().sizeDelta = new Vector2(820, 80);
            let infoPanel: fgui.GGroup = go.asCom.getChild("historyCellPanel").asGroup;
            let insPanel: fgui.GComponent = go.asCom.getChild("insPoolPanel").asCom;
            infoPanel.visible = false;
            insPanel.visible = true;
            let insText: fgui.GTextField = insPanel.getChild("insPoolNum").asTextField;
            let insTitle: fgui.GTextField = insPanel.getChild("insPooltext").asTextField;
            insTitle.text = "保险池："

            let inspositive = poolNum > 0 ? "+" : "";
            insText.text = inspositive + UIUtil.formatNumber100(poolNum);
            insText.color = poolNum >= 0 ? cc.Color.RED : cc.Color.GREEN;
        }
        console.log("======ShowList == ui_ListContent.numItems:" + this.ui_ListContent.numItems + ", ui_ListContent.height:" + this.ui_ListContent.height);
    }
    // 状态 弃牌1; 开牌2; 未弃牌未开牌3; 弃牌前两张牌只显示背面
    public SetUserCellInfo(cellItem: fgui.GComponent, gainData: TexUserInfoSD, isShowPai: boolean, ng: number) {
        let infoPanel: fgui.GComponent = cellItem.getChild("historyCellPanel").asCom;
        let insPanel: fgui.GComponent = cellItem.getChild("insPoolPanel").asCom;
        infoPanel.visible = true;
        insPanel.visible = false;
        let userInfo: PInfoSD = this.GetUser(gainData.id);
        if (userInfo == null) console.log("userInfo is null , gainData.id=" + gainData.id)
        let txtName: fgui.GTextField = cellItem.getChild("txtName").asTextField;
        let txtGamble: fgui.GTextField = cellItem.getChild("txtGamble").asTextField;
        let txtGain: fgui.GTextField = cellItem.getChild("txtGain").asTextField;
        let txtSpecialCard: fgui.GTextField = cellItem.getChild("txtSpecialCard").asTextField;
        txtSpecialCard.visible = false;
        let statusbg: fgui.GLoader = cellItem.getChild("statusbg").asLoader;
        let txtStatus: fgui.GTextField = cellItem.getChild("txtStatus").asTextField;
        let txtInsurance: fgui.GTextField = cellItem.getChild("txtInsurance").asTextField;
        let posName: fgui.GTextField = cellItem.getChild("txtPos").asTextField;
        posName.text = TexasBase.getPlayerPosType(gainData.pos, this.pageSd.bankerpos, this.pageSd.tInfo);
        UIUtil.SetLimitTxt(txtName, userInfo.wName, 6);

        txtGamble.text = "下注: " + UIUtil.formatNumber100(gainData.g);//下注
        let positive = gainData.wg > 0 ? "+" : "";
        txtGain.text = positive + UIUtil.formatNumber100(gainData.wg);
        txtGain.color = gainData.wg >= 0 ? cc.Color.RED : cc.Color.GREEN; //Const.ColorNumRed : Const.ColorNumGreen;      

        let inspositive = gainData.ins > 0 ? "+" : "";
        txtInsurance.text = gainData.ins == 0 ? "" : inspositive + (gainData.ins / 100).toFixed(3).slice(0, -1);
        txtInsurance.color = gainData.ins >= 0 ? cc.Color.RED : cc.Color.GREEN; //Const.ColorNumRed : Const.ColorNumGreen;       

        this.selectFiveCards = [];
        let isQiPai = gainData.gu == 1;

        let isDealCard = ng > 1;//是否到了最后分牌阶段
        this.DealCardByDefault(gainData);


        if (!isQiPai && isDealCard)//没有弃牌且有7张牌时，最大的五张牌组合的类型
        {
            if (this.firstCards.length >= 2 && this.afterCards.length >= 5) {
                txtSpecialCard.visible = true;
                // this.selectFiveCards = Texas.GetMaxTypeCards(Texas.GetFiveFromSeven(this.firstCards, this.afterCards));
                // txtSpecialCard.text = Texas.GetTexasName(this.selectFiveCards);
            }
        }
        let isWHITE = false;
        let cardEye: fgui.GImage = null;
        let card: fgui.GLoader = null;

        //DebugEX.LogE("count;" + showCardCount + " gaindata.s:" + gainData.s);
        for (var i = 0; i < 2; i++)//首牌显示
        {
            cardEye = cellItem.getChild("cardEye" + (i + 1)).asImage;
            cardEye.visible = false;
            card = cellItem.getChild("card" + (i + 1)).asLoader;
            let cardId = 0;
            if (this.firstCards.length > i)
                cardId = this.firstCards[i];

            card.visible = true;

            // if (((isQiPai && !isSelf) || (!isQiPai && !isDealCard && !isSelf)) && this.showCard != 1 && !isShowPai)//不是自己的弃牌玩家不显示首牌,未比牌也不显示别人的首牌
            // {
            //     cardId = 0;
            // }
            //Debug.Log("userInfo.wName:" + userInfo.wName + " cardId: " + i + " :" + cardId);
            // card.url = "ui://Lobby/001";
            UIUtil.loadImage(card, cardId == 0 ? "001_1" : cardId + "_1", "Lobby");

            if (!isQiPai)//未弃牌结算有牌型的时候未选中的牌变灰,弃牌所有牌置灰
            {
                if (this.firstCards.length >= 2 && this.afterCards.length >= 5) {
                    card.color = this.isSelectCard(cardId) ? cc.Color.WHITE : cc.Color.GRAY;
                    if (this.isSelectCard(cardId)) isWHITE = true;
                }
                else {
                    card.color = cc.Color.WHITE;
                    isWHITE = true;
                }
            }
            else {
                card.color = cc.Color.GRAY;
            }
        }
        for (var i = 0; i < 5; i++)//系统牌显示
        {
            card = cellItem.getChild("card" + (i + 3)).asLoader;
            let cardId = 0;
            if (this.afterCards.length > i)
                cardId = this.afterCards[i];


            card.visible = (cardId > 0);
            UIUtil.loadImage(card, cardId == 0 ? "001" : cardId + "_1", "Lobby");

            if (!isQiPai)//未弃牌结算有牌型的时候未选中的牌变灰,弃牌首牌置灰
            {
                if (this.firstCards.length >= 2 && this.afterCards.length >= 5) {
                    card.color = this.isSelectCard(cardId) ? cc.Color.WHITE : cc.Color.GRAY;
                    if (this.isSelectCard(cardId)) isWHITE = true;
                }
                else {
                    card.color = cc.Color.WHITE;
                    isWHITE = true;
                }

            }
            else {
                card.color = cc.Color.GRAY;
            }

        }

        //没有弃牌，没有白色牌，则全部为白
        if (!isQiPai && !isWHITE) {
            for (var i = 0; i < 7; i++) {
                card = cellItem.getChild("card" + (i + 1)).asLoader;
                card.color = cc.Color.WHITE;
            }
        }

        //statusbg.gameObject.SetActive(gainData.s != 3);
        statusbg.visible = true;
        if (gainData.gu != 1 && gainData.s != 5) {
            statusbg.visible = false;
        }
        //小于等于1 表示只显示两张牌背 如果是自己要显示两张手牌。 2，3，表示对应第三，第四轮弃牌 5表示分牌
        txtStatus.text = this.GetUserActionString(gainData.s, gainData.gu);
        console.log("userId:" + gainData.id + " s:" + gainData.s);
    }
    private turnDic: Map<number, TexActionSD[]>;
    public ShowTurnInfo(tlist: TexActionSD[], poolNum: number, uList: TexUserInfoSD[]) {

        this.ui_turnContent.removeChildrenToPool();
        this.ui_turnContent.height = 0;

        let h = this.ui_ShowDownContent.height - this.ui_ShowDownInfoList.numItems * 115;
        this.ui_ShowDownContent.height = h < 122 ? 122 : h;
        this.ui_ShowDownInfoList.removeChildrenToPool();

        if (tlist == null || tlist.length == 0) return;
        let go: fairygui.GObject = null;
        if (this.turnDic == null)
            this.turnDic = new Map<number, TexActionSD[]>();
        this.turnDic.clear();
        tlist.forEach(temp => {
            if (this.turnDic.has(temp.turn)) {
                if (this.turnDic.get(temp.turn) == null) {
                    let list: TexActionSD[] = [];
                    list.push(temp);
                    this.turnDic.set(temp.turn, list);
                }
                else {
                    this.turnDic.get(temp.turn).push(temp);
                }
            }
            else {
                let list: TexActionSD[] = [];
                list.push(temp);
                this.turnDic.set(temp.turn, list);
            }
        });
        let turnType: number[] = [];
        this.turnDic.forEach((value, key) => {
            turnType.push(key);
        });
        turnType.sort((X1, X2) => X1 - X2);
        let lastTotalDizhu = 0;
        let curTurnDizhu = 0;

        for (var i = 0; i < turnType.length; i++) {
            let turn = turnType[i];
            if (turn == 5)
                continue;
            let aList: TexActionSD[] = this.turnDic.get(turn);
            aList.forEach(temp => {
                curTurnDizhu += temp.g;
            });
            let curValue = 0;
            if (turn == 1) {
                curTurnDizhu += (uList.length * this.di);
                curValue = curTurnDizhu;
            }
            else
                curValue = lastTotalDizhu;
            lastTotalDizhu += curTurnDizhu;

            go = this.ui_turnContent.addItemFromPool();
            this.ui_turnContent.height += 122;
            let comp: MyCardTurnCellComp = go.node.getComponent(MyCardTurnCellComp);
            if (comp == null) {
                comp = go.node.addComponent(MyCardTurnCellComp);
                comp.fguiComponent = go.asCom;
            }
            comp.historyComp = this;
            comp.MyStart(aList, this.users, this.afterCards, turn, curValue, this.pageSd.bankerpos, this.pageSd.tInfo);
            curTurnDizhu = 0;
        }
        console.log("======ShowTurnInfo == ui_turnContent.numItems:" + this.ui_turnContent.numItems + ", ui_turnContent.height:" + this.ui_turnContent.height);
        this.ShowShowDownInfo(lastTotalDizhu, poolNum);
    }
    public ShowShowDownInfo(totalDizhu: number, poolNum: number) {
        let showDownPlayers: TexUserInfoSD[] = []
        this.pageSd.tInfo.forEach(item => {
            if (item.gu != 1) {
                showDownPlayers.push(item);
            }
        });
        this.ui_ShowDownTitle.visible = (showDownPlayers != null && showDownPlayers.length > 0);
        if (showDownPlayers == null || showDownPlayers.length == 0) return;
        let titleComp: TurnTitleComp = this.ui_ShowDownTitle.node.getComponent(TurnTitleComp);
        if (titleComp == null) {
            titleComp = this.ui_ShowDownTitle.node.addComponent(TurnTitleComp);
            titleComp.fguiComponent = this.ui_ShowDownTitle
            this.ui_ShowDownTitle.node.active = true;
        }
        titleComp.MyStart2(showDownPlayers.length, this.showCards.length > 0 ? this.showCards : this.afterCards, 5, totalDizhu);
        let paipuComp: TurnTitleComp = this.ui_paipu.node.getComponent(TurnTitleComp);
        if (paipuComp == null) {
            paipuComp = this.ui_paipu.node.addComponent(TurnTitleComp);
            paipuComp.fguiComponent = this.ui_paipu
            this.ui_paipu.node.active = true;
        }
        paipuComp.MyStart2(this.pageSd.tInfo.length, this.showCards.length > 0 ? this.showCards : this.afterCards, -1, totalDizhu);


        this.ui_ShowDownInfoList.removeChildrenToPool();
        this.ui_ShowDownContent.height = 122;

        let go: fgui.GObject = null;
        for (var i = 0; i < showDownPlayers.length; i++) {
            go = this.ui_ShowDownInfoList.addItemFromPool();
            this.ui_ShowDownContent.height += 155;
            this.ui_ShowDownInfoList.height += 155;
            this.SetShowDownCellInfo(go.asCom, showDownPlayers[i], this.pageSd.ng);
        }
        if (poolNum != 0) {
            go = this.ui_ShowDownInfoList.addItemFromPool();
            this.ui_ShowDownContent.height += 155;
            this.ui_ShowDownInfoList.height += 155;
            let showDownPanel = go.asCom.getChild("showDownPanel").asGroup;
            let insPanel = go.asCom.getChild("insPoolPanel").asCom;
            showDownPanel.visible = false;
            insPanel.visible = true;
            let insText: fgui.GTextField = insPanel.getChild("insPoolNum").asTextField;
            let insTitle: fgui.GTextField = insPanel.getChild("insPooltext").asTextField;
            insTitle.text = "保险池："

            let inspositive = poolNum > 0 ? "+" : "";
            insText.text = inspositive + UIUtil.formatNumber100(poolNum);
            insText.color = poolNum >= 0 ? new cc.Color(187, 73, 73) : new cc.Color(71, 190, 138); //Const.ColorNumRed : Const.ColorNumGreen;
        }
        console.log("======ShowShowDownInfo == ui_ShowDownInfoList.numItems:" + this.ui_ShowDownInfoList.numItems + ", ui_ShowDownContent.height:" + this.ui_ShowDownContent.height);
        // LayoutRebuilder.ForceRebuildLayoutImmediate(ui_ShowDownInfoList.gameObject.GetComponent<RectTransform>());
    }
    public SetShowDownCellInfo(cellItem: fgui.GComponent, gainData: TexUserInfoSD, ng: number) {
        if (gainData == null)
            return;
        let showDownPanel: fgui.GGroup = cellItem.getChild("showDownPanel").asGroup;
        let insPanel: fgui.GComponent = cellItem.getChild("insPoolPanel").asCom;
        showDownPanel.visible = true;
        insPanel.visible = false;
        let userInfo: PInfoSD = this.GetUser(gainData.id);
        let txtName: fgui.GTextField = cellItem.getChild("txtName").asTextField;
        let txtGain: fgui.GTextField = cellItem.getChild("txtGain").asTextField;
        let txtSpecialCard: fgui.GTextField = cellItem.getChild("txtSpecialCard").asTextField
        txtSpecialCard.visible = false;
        let txtInsurance: fgui.GTextField = cellItem.getChild("txtInsurance").asTextField;
        let posName: fgui.GTextField = cellItem.getChild("curPosName").asTextField;
        console.log("curPosName == ", TexasBase.getPlayerPosType(gainData.pos, this.pageSd.bankerpos, this.pageSd.tInfo));
        posName.text = TexasBase.getPlayerPosType(gainData.pos, this.pageSd.bankerpos, this.pageSd.tInfo);
        UIUtil.SetLimitTxt(txtName, userInfo.wName, 6);
        let positive = gainData.wg > 0 ? "+" : "";
        txtGain.text = positive + UIUtil.formatNumber100(gainData.wg);
        txtGain.color = gainData.wg >= 0 ? new cc.Color(187, 73, 73) : new cc.Color(71, 190, 138)// Const.ColorNumRed : Const.ColorNumGreen;

        let inspositive = gainData.ins > 0 ? "+" : "";
        txtInsurance.text = gainData.ins == 0 ? "" : inspositive + UIUtil.formatNumber100(gainData.ins);
        txtInsurance.color = gainData.ins >= 0 ? new cc.Color(187, 73, 73) : new cc.Color(71, 190, 138);// Const.ColorNumRed : Const.ColorNumGreen;

        this.selectFiveCards = [];
        let isQiPai = gainData.gu == 1;
        let isDealCard = ng > 1;//是否到了最后分牌阶段
        this.DealCardByDefault(gainData);

        if (!isQiPai && isDealCard)//没有弃牌且有7张牌时，最大的五张牌组合的类型
        {
            if (this.firstCards.length >= 2 && this.afterCards.length >= 5) {
                txtSpecialCard.visible = true;
                // this.selectFiveCards = TexasBase.GetMaxTypeCards(TexasBase.GetFiveFromSeven(this.firstCards, this.afterCards));
                // txtSpecialCard.text = TexasBase.GetTexasName(this.selectFiveCards);
            }
        }
        let isWHITE = false;
        let card: fgui.GLoader = null;
        let isSelf = gainData.id == LoginViewCtr.instance.Model.mPlayerModel.userid;

        //DebugEX.LogE("count;" + showCardCount + " gaindata.s:" + gainData.s);
        for (var i = 0; i < 2; i++)//首牌显示
        {
            card = cellItem.getChild("card" + (i + 1)).asLoader;
            let cardId = 0;
            if (this.firstCards.length > i)
                cardId = this.firstCards[i];

            card.visible = true;
            if ((isQiPai && !isSelf) || (!isQiPai && !isDealCard))//不是自己的弃牌玩家不显示首牌,未比牌也不显示别人的首牌
            {
                cardId = 0;
            }
            //DebugEX.LogE("userInfo.wName:" + userInfo.wName + " cardId: " + i + " :" + cardId);
            UIUtil.loadImage(card, cardId == 0 ? "001" : cardId + "_1", "Lobby");

            if (!isQiPai)//未弃牌结算有牌型的时候未选中的牌变灰,弃牌所有牌置灰
            {
                if (this.firstCards.length >= 2 && this.afterCards.length >= 5) {
                    card.color = this.isSelectCard(cardId) ? cc.Color.WHITE : cc.Color.GRAY;
                    if (this.isSelectCard(cardId)) isWHITE = true;
                }
                else {
                    card.color = cc.Color.WHITE;
                    isWHITE = true;
                }
            }
            else {
                card.color = cc.Color.GRAY;
            }
        }
        for (var i = 0; i < 5; i++)//系统牌显示
        {
            card = cellItem.getChild("card" + (i + 3)).asLoader;
            let cardId = 0;
            if (this.afterCards.length > i)
                cardId = this.afterCards[i];

            card.visible = (cardId > 0);
            UIUtil.loadImage(card, cardId == 0 ? "001" : cardId + "_1", "Lobby");

            if (!isQiPai)//未弃牌结算有牌型的时候未选中的牌变灰,弃牌首牌置灰
            {
                if (this.firstCards.length >= 2 && this.afterCards.length >= 5) {
                    card.color = this.isSelectCard(cardId) ? cc.Color.WHITE : cc.Color.GRAY;
                    if (this.isSelectCard(cardId)) isWHITE = true;
                }
                else {
                    card.color = cc.Color.WHITE;
                    isWHITE = true;
                }
            }
            else {
                card.color = cc.Color.GRAY;
            }
        }

        //没有弃牌，没有白色牌，则全部为白
        if (!isQiPai && !isWHITE) {
            for (var i = 0; i < 7; i++) {
                card = cellItem.getChild("card" + (i + 1)).asLoader;
                card.color = cc.Color.WHITE;
            }
        }
    }
    private isShowPai(userList: TexUserInfoSD[]): boolean {
        let isShow = false;

        userList.forEach(item => {
            if (item.st == 1 && item.id == LoginViewCtr.instance.Model.mPlayerModel.userid) {
                isShow = true;
                return true;
            }

            if (item.fshow == true && item.id == LoginViewCtr.instance.Model.mPlayerModel.userid) {
                isShow = true;
                return true;
            }
        })

        return isShow;
    }

    private isShowPaiForCardIndex(cardId: number, showCardId: string): boolean {
        return cardId > 0 && showCardId != null && showCardId != "" && showCardId.indexOf(cardId.toString()) >= 0;
    }

    //1 :展示秀牌 0: 不展示
    private isShowPaiForCardIndexdelte(index: number, showCardId: number): boolean {
        let sign = showCardId / (index <= 0 ? 1 : (index * 10));
        return (sign % 10) == 1;
    }


    private isFirstCard(cardId: number, firstList: number[]): boolean {
        let b = false;
        if (firstList != null) {
            firstList.forEach(item => {
                if (cardId == item) {
                    b = true;
                }
            });
        }
        return b;
    }
    private isSelectCard(cardId: number): boolean {
        let b = false;
        if (this.selectFiveCards != null) {
            this.selectFiveCards.forEach(item => {
                if (cardId == item) {
                    b = true;
                }
            });
        }
        return b;
    }


    public UpdateData_sc(data: sc_getscollectbyid_tex) {
        this.UpdateData(data.ulist, [data.tinfo], data.tnum, data.baserate, data.showCard);
    }

    public UpdateData(ulist: PInfoSD[], tulist: TexTInfoSD[], tableId: number, dizhu: number, ShowCard: number) {

        this.tableId = tableId;
        this.di = dizhu;
        this.showCard = ShowCard;
        this.ui_txtPageIndex.text = 0 + "/" + 0;

        this.users = ulist;
        this.historyList = tulist;
        this.curPageIndex = -1;
        this.maxPageCount = this.historyList.length;
        this.ui_sliderSelectPage.visible = this.maxPageCount > 1;
        this.ui_sliderSelectPage.min = 1;
        this.ui_sliderSelectPage.max = this.maxPageCount > 1 ? this.maxPageCount : 100;
        this.ui_sliderSelectPage.value = 1;
        this.SetSliderValueByIndex(1);

    }


    public GetUser(id: number): PInfoSD {
        if (this.users == null) { return null; }
        return this.users.find(user => { return user.uid == id });
    }
    public GetUserShowCard(gainData: TexUserInfoSD) {
        if (gainData.id == LoginViewCtr.instance.Model.mPlayerModel.userid && gainData.ownc != null && gainData.ownc.length > 0) {
            this.showCards = [];
            for (var i = 0; i < 5 && i < gainData.ownc.length; i++) {
                this.showCards.push(gainData.ownc[i]);//玩家查看余牌后的公牌
            }
        }
    }

    public DealCardByDefault(gainData: TexUserInfoSD) {
        this.firstCards = [];
        for (var i = 0; i < 2 && i < gainData.p.length; i++) {
            this.firstCards.push(gainData.p[i]);//首牌
        }

        this.afterCards = [];
        for (var i = 0; i < 5 && i < this.pageSd.c.length; i++) {
            this.afterCards.push(this.pageSd.c[i]);//系统牌
        }
    }

    //状态 弃牌1; 开牌2; 未弃牌未开牌3; 弃牌前两张牌只显示背面
    public GetUserActionString(type: number, giveup: number): string {
        let str: string = "";

        if (giveup == 1) {
            str = "弃牌"
        }
        else {
            switch (type) {
                case -1:
                    str = "-1";
                    break;
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
                case 4:
                    break;
                case 5:
                    str = "开牌"
                    break;
                default:
                    str = "default";
                    break;
            }
        }
        return str;
    }

    public Clamp(value: number, min: number, max: number): number {
        let num = 0;
        num = value < min ? min : value;
        num = value > max ? max : value;
        return num;
    }

    // public HideChildren(node:cc.Node){

    // }


}