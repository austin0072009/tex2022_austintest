import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import { UIUtil, PlayerPrefs } from "../../../../Script/Common/UIUtil";
import { TexasTurnActionEnum, Texas, TexasTurnEnum } from "../Model/Texas";
import { TexActionSD, PInfoSD, TexUserInfoSD } from "../Model/TexasNetData";
import CardRedbetComp from "./CardRedbetComp";
import TexasHistoryComp from "./TexasHistoryComp";



export class TurnCellComp extends ViewBase {
    public historyComp: TexasHistoryComp = null;
    public ui_turnTitle: fgui.GComponent = null;

    public ui_turnInfoList: fgui.GList = null;
    // public Transform ui_turnInfoCell;
    private dataList: TexActionSD[];
    private users: PInfoSD[];
    private addCounts: number;
    private bpos: number;
    private tuInfo: TexUserInfoSD[];

    private _Cards: number[] = [];
    private _turn: number;
    private _lastTotalDizhu: number;
    private onLoadEnd = false;
    OnLoadCompleted() {
        // super.AutoSetGoProperty();

        this.onLoadEnd = true;
        if (this.mystart) this.MyStartEx();
    }

    public MyStart(infoData: TexActionSD[], plist: PInfoSD[], cards: number[], turn: number, lastTotalDizhu: number, bPos: number, tInfo: TexUserInfoSD[]) {


        this.mystart = true;
        this.dataList = infoData;
        this.users = plist;
        this.bpos = bPos;
        this.tuInfo = tInfo;
        this._Cards = cards;
        this._turn = turn;
        this._lastTotalDizhu = lastTotalDizhu;
        if (this.onLoadEnd) this.MyStartEx();

    }

    AutoSetGoProperty() { }

    MyStartEx() {
        console.log("getChild : " + this.fguiComponent.name);
        this.ui_turnTitle = this.fguiComponent.getChild("turnTitle").asCom;
        this.ui_turnInfoList = this.fguiComponent.getChild("turnInfoList").asList;
        this.fguiHeight = 122;
        this.DisplayTurnInfo();
        this.DisplayTitle(this._Cards, this._turn, this._lastTotalDizhu);
    }

    public DisplayTitle(cards: number[], curTurn: number, dizhu: number) {
        let comp: TurnTitleComp = this.ui_turnTitle.node.getComponent(TurnTitleComp);
        if (comp == null) {
            comp = this.ui_turnTitle.node.addComponent(TurnTitleComp);
            comp.fguiComponent = this.ui_turnTitle;
            comp.historyComp = this.historyComp;
            // this.ui_turnTitle.node.active = true;
        }
        comp.MyStart1(this.dataList, cards, curTurn, dizhu);
    }
    public DisplayTurnInfo() {
        this.ui_turnInfoList.removeChildrenToPool();

        if (this.dataList == null || this.dataList.length == 0) return;
        let go: fgui.GObject = null;
        let folders = 0;
        this.addCounts = 0;
        this.fguiHeight = 122;
        for (var i = 0; i < this.dataList.length; i++)
        // for (var i = 0; i < 10; i++)
        {
            let curData: TexActionSD = this.dataList[i];
            let type: TexasTurnActionEnum = curData.at;
            //连续两个及其以上不显示玩家直接显示文本几个folds
            if (type == TexasTurnActionEnum.fold && i < this.dataList.length - 1) {
                folders += 1;
                let nextData: TexActionSD = this.dataList[i + 1];
                let nexttype: TexasTurnActionEnum = nextData.at;
                if (nexttype == TexasTurnActionEnum.fold) {
                    continue;
                }
            }
            go = this.ui_turnInfoList.addItemFromPool();
            this.historyComp.ui_turnContent.height += 51 + 22;
            this.fguiHeight += 51 + 22;
            // this.historyComp.ui_historyGroup.node.height += 51+51+20;
            this.SetTurnCellInfo(go.asCom, curData, folders);
            folders = 0;
        }
        // console.log("======DisplayTurnInfo == ui_turnInfoList.numItems:"+ this.ui_turnInfoList.numItems+", ui_turnContent.height:"+this.historyComp.ui_turnContent.height );
        // LayoutRebuilder.ForceRebuildLayoutImmediate(ui_turnInfoList.gameObject.GetComponent<RectTransform>());
        // LayoutRebuilder.ForceRebuildLayoutImmediate(gameObject.GetComponent<RectTransform>());
    }
    public SetTurnCellInfo(cellItem: fgui.GComponent, infoSD: TexActionSD, folds = 0) {
        let infoPanel: fgui.GGroup = cellItem.getChild("turnInfoCellPanel").asGroup;
        let foldPanel: fgui.GTextField = cellItem.getChild("turnFlodTxt").asTextField;
        infoPanel.visible = (folds <= 1);
        foldPanel.visible = (folds >= 2);
        if (folds <= 1) {
            let posName: fgui.GTextField = cellItem.getChild("curPosName").asTextField;
            let playerName: fgui.GTextField = cellItem.getChild("txtName").asTextField;
            let handleBg: fgui.GLoader = cellItem.getChild("handleBg").asLoader;
            let handleTitle: fgui.GTextField = cellItem.getChild("handleTitle").asTextField;
            let handleValue: fgui.GTextField = cellItem.getChild("handleValue").asTextField;
            let turnFlodTxt: fgui.GTextField = cellItem.getChild("txtCurGamble").asTextField;
            let userInfo: PInfoSD = this.GetUser(infoSD.id);
            UIUtil.SetLimitTxt(playerName, userInfo.wName, 6);
            handleValue.text = Texas.formatNumber100(infoSD.g) + "";
            posName.text = Texas.getPlayerPosType(infoSD.pos, this.bpos, this.tuInfo);
            turnFlodTxt.text = "";//infoSD.turn == 1 ? UIUtil.formatNumber100(infoSD.jg) + "" : "P:" + UIUtil.formatNumber100(infoSD.jg);
            let type: TexasTurnActionEnum = infoSD.at;

            if (type == TexasTurnActionEnum.B) {
                this.addCounts += 1;
            }
            this.SetHandleBytType(type, handleTitle, handleBg, infoSD.turn);
            posName.color = type == TexasTurnActionEnum.fold ? cc.Color.GRAY : cc.Color.WHITE;
            playerName.color = type == TexasTurnActionEnum.fold ? cc.Color.GRAY : cc.Color.WHITE;
            handleValue.color = type == TexasTurnActionEnum.fold ? cc.Color.GRAY : cc.Color.WHITE;
            turnFlodTxt.color = type == TexasTurnActionEnum.fold ? cc.Color.GRAY : cc.Color.WHITE;
        }
        else {
            foldPanel.text = folds + "folds";
        }
    }

    public SetHandleBytType(type: TexasTurnActionEnum, txt: fgui.GTextField, img: fgui.GLoader, curTurn: number) {
        let str = "";
        let imgStr = "hanlde_red";
        UIUtil.ImageGreyToggle(img, false);
        switch (type) {
            case TexasTurnActionEnum.allin:
                imgStr = "hanlde_red";
                str = "A";
                break;
            case TexasTurnActionEnum.B1:
                imgStr = "hanlde_red";
                str = "R";
                break;
            case TexasTurnActionEnum.B1_2:
                imgStr = "hanlde_red";
                str = "B";
                break;
            case TexasTurnActionEnum.B2_3:
                imgStr = "hanlde_red";
                str = "3B";
                break;
            case TexasTurnActionEnum.bb:
                str = "BB";
                imgStr = "handlle_green";
                break;
            case TexasTurnActionEnum.call:
                str = "C";
                imgStr = "handlle_green";
                break;
            case TexasTurnActionEnum.Check:
                str = "X";
                imgStr = "handlle_green";
                break;
            case TexasTurnActionEnum.fold:
                UIUtil.ImageGreyToggle(img, true);
                str = "F";
                break;
            case TexasTurnActionEnum.sb:
                str = "SB";
                imgStr = "handlle_green";
                break;
            case TexasTurnActionEnum.stradlle:
                imgStr = "hanlde_red";
                str = "S";
                break;
            case TexasTurnActionEnum.B:
                imgStr = "hanlde_red";
                if (curTurn == 1) {
                    str = (2 + this.addCounts) + "B";
                }
                else {
                    str = this.addCounts > 1 ? "R" : "B";
                }
                break;
            case TexasTurnActionEnum.Ins:
                imgStr = "hanlde_red";
                str = "i";
                break;
        }
        txt.text = str;
        UIUtil.loadImage(img, imgStr, "Texas")
    }
    public GetUser(id: number): PInfoSD {
        if (this.users == null) { return null; }
        return this.users.find(user => user.uid == id);
    }
}

export class TurnTitleComp extends ViewBase {
    public historyComp: TexasHistoryComp = null;
    public ui_turnName: fgui.GTextField = null;
    public ui_turnCardsList: fgui.GList = null;
    // public Transform ui_turnCardCell;
    public ui_playerCount: fgui.GTextField = null;
    public ui_lastTurnGamble: fgui.GTextField = null;

    private _dataList: TexActionSD[];
    private _playerNum: number
    private _cards: number[]
    private _turn: number
    private _lastDizhu: number

    private onLoadEnd = false;
    public MyStart1(dataList: TexActionSD[], cards: number[], turn: number, lastDizhu: number) {
        this.mystart = true;
        this._dataList = dataList;
        this._cards = cards;
        this._turn = turn;
        this._lastDizhu = lastDizhu;
        if (this.onLoadEnd) {
            this.AutoSetGoPropertyEx();
            this.setData1(this._dataList, this._cards, this._turn, this._lastDizhu);
        }
    }

    public MyStart2(playerNum: number, cards: number[], turn: number, lastDizhu: number) {
        this.mystart = true;
        this._playerNum = playerNum;
        this._cards = cards;
        this._turn = turn;
        this._lastDizhu = lastDizhu;
        if (this.onLoadEnd) {
            this.AutoSetGoPropertyEx();
            this.setData2(this._playerNum, this._cards, this._turn, this._lastDizhu);
        }
    }

    OnLoadCompleted() {
        this.onLoadEnd = true;
        if (this.mystart) {
            this.AutoSetGoPropertyEx();
            if (this._dataList) {
                this.setData1(this._dataList, this._cards, this._turn, this._lastDizhu);
            } else {
                this.setData2(this._playerNum, this._cards, this._turn, this._lastDizhu);
            }
        }
    }

    AutoSetGoProperty() {

    }

    AutoSetGoPropertyEx() {
        console.log("getChild : " + this.fguiComponent.name);
        this.ui_turnName = this.fguiComponent.getChild("turnName").asTextField;
        this.ui_turnCardsList = this.fguiComponent.getChild("turnCardsList").asList;
        this.ui_playerCount = this.fguiComponent.getChild("playerCount").asTextField;
        this.ui_lastTurnGamble = this.fguiComponent.getChild("lastTurnGamble").asTextField;
    }



    private setData1(dataList: TexActionSD[], cards: number[], turn: number, lastDizhu: number) {
        let newList: TexActionSD[] = [];
        let list = "{";
        dataList.forEach((value) => { list += value.id + "," })
        console.log("去重前： " + list + " }")
        const obj: { [key: number]: boolean; } = {};
        newList = dataList.reduce<TexActionSD[]>((item, next) => {
            if (!obj[next.id]) {
                item.push(next);
                obj[next.id] = true;
            }
            return item;
        }, []);
        let list2 = "{";
        newList.forEach((value) => { list2 += value.id + "," })
        console.log("去重后：" + list2 + " }")
        this.DisplayTitle(newList.length, cards, turn, lastDizhu);
    }
    private setData2(playerNum: number, cards: number[], turn: number, lastDizhu: number) {
        this.DisplayTitle(playerNum, cards, turn, lastDizhu);
    }
    public DisplayTitle(playerNum: number, cards: number[], turn: number, lastDizhu: number) {
        this.ui_turnName.text = this.getTurnName(turn);
        this.ui_playerCount.text = playerNum + "";
        this.ui_lastTurnGamble.text = Texas.formatNumber100(lastDizhu) + "";
        let go: fgui.GObject = null;

        this.ui_turnCardsList.removeChildrenToPool();
        if (cards == null || cards.length == 0) return;
        let cardsNum = this.displayCardsNum(turn, cards.length);
        for (var i = 0; i < cards.length && i < cardsNum; i++) {
            let cardId = cards[i];
            go = this.ui_turnCardsList.addItemFromPool();
            UIUtil.loadImage(go.asCom.getChild("turnCardCell").asLoader, cardId == 0 ? CardRedbetComp.cardTypeName : cardId + "_" + PlayerPrefs.GetInt("key_cards_index", 1), "Texas");
        }
    }
    public displayCardsNum(turn: number, cards: number) {
        let cardsNum = 0;
        switch (turn) {
            case -1:
                cardsNum = 5;
                break;
            case 1:
                cardsNum = 0;
                break;
            case 2:
                cardsNum = 3;
                break;
            case 3:
                cardsNum = 4;
                break;
            case 4:
                cardsNum = 5;
                break;
            case 5:
                cardsNum = cards;
                break;
        }
        return cardsNum;
    }

    public getTurnName(turn: number): string {
        let str = "";
        let type: TexasTurnEnum = turn;
        switch (type) {
            case TexasTurnEnum.Init:
                str = "牌谱"
                break;
            case TexasTurnEnum.Turn1_0:
                str = "Preflop";
                break;
            case TexasTurnEnum.Turn2_3:
                str = "Flop";
                break;
            case TexasTurnEnum.Turn3_4:
                str = "Turn";
                break;
            case TexasTurnEnum.Turn4_5:
                str = "River";
                break;
            case TexasTurnEnum.TrunCompare:
                str = "Showdown";
                break;
        }
        return str;
    }
}