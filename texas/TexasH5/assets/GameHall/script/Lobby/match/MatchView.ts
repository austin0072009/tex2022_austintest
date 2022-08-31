import { AudioManager } from "../../../../Script/BaseFrame/AudioManager";
import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import { UIUtil } from "../../../../Script/Common/UIUtil";
import { AppConst } from "../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst";
import { CompeteInfo } from "../LobbyNetData";
import LobbyViewCtr from "../LobbyViewCtr";
import MatchItem from "./MatchItem";

/**
 * @description 賽事
 */
export default class MatchView extends ViewBase {
    protected get packageResourceName(): string {
        return "gameHall";
    }
    protected get packageName(): string {
        return "res/Lobby";
    }
    protected get componentName(): string {
        return "match";
    }

    private ui_matchgold: fgui.GTextField = null;
    private ui_matchList: fgui.GList = null;
    private ui_btn_matchaddGold: fgui.GButton = null;
    private ui_match_eyeBtn: fgui.GButton = null;

    private ui_matchJackpot0: fgui.GTextField = null;
    private ui_matchJackpot1: fgui.GTextField = null;
    private ui_matchJackpot2: fgui.GTextField = null;
    private ui_matchJackpot3: fgui.GTextField = null;
    private ui_matchJackpot4: fgui.GTextField = null;
    private ui_matchJackpot5: fgui.GTextField = null;
    private ui_matchJackpot6: fgui.GTextField = null;
    createChildComponents() {
        super.createChildComponents();
        this.fguiComponent.visible = false;
        this.ui_btn_matchaddGold.onClick(this.showTopupView, this);
        this.ui_match_eyeBtn.onClick(this.hideGold, this);
        this.ui_matchList.setVirtual();
        this.ui_matchList.itemRenderer = this.renderListItem.bind(this);
        this.ui_matchList.on(fgui.Event.CLICK_ITEM, this.onClickItem, this);
        this.setJackpot(0);
    }

    OnLoadCompleted() {
        this.Show();
    }

    /**隐藏金币 */
    public hideGold() {
        AudioManager.Singleton.play('MatchView', "button");
        if (this.ui_match_eyeBtn.selected) {
            this.ui_matchgold.text = '*****';
        } else {
            this.ui_matchgold.text = UIUtil.formatNumber(AppConst.mPlayerModel.gold) + "";;
        }
    }

    /**设置奖池 */
    public setJackpot(jack: number) {
        let temp = (jack + '').padStart(7, "0");
        for (let i = 0; i < temp.length; i++) {
            this["ui_matchJackpot" + i].text = temp[i];
        }
    }

    public renderListItem(index: number, obj: fgui.GObject) {
        (<MatchItem>obj).setData(this.matchListData[index]);
    }
    /**赛事列表数据 */
    public matchListData: CompeteInfo[] = [];

    public handleMatchListData() {
        this.matchListData = LobbyViewCtr.instance.Model.matchData;
        this.ui_matchList.numItems = this.matchListData.length;



        let all: number = 0;
        /**获取奖池和 */
        for (let i = 0; i < this.matchListData.length; i++) {
            all += this.matchListData[i].prizepool;
        }
        this.jackpotNum = all;
        if (this.jackpotNum2 == 0) {
            this.jackpotNum2 = all;
        }
        if (all == 0) {
            return;
        }
        this.rollJackpot();
    }

    /**当前选择的赛事 */
    public selectItem: MatchItem;

    /**点击赛事显示详情 */
    public onClickItem(item: MatchItem) {
        this.selectItem = item;
        LobbyViewCtr.instance.view.showMatchDerailsView();
    }

    private timerId;
    /**奖池值 */
    private jackpotNum: number = 0;
    private jackpotNum2: number = 0;
    /**增加的次数 */
    private addNum: number = 0;
    public rollJackpot() {
        clearTimeout(this.timerId);
        this.timerId = setTimeout(() => {
            let randomCont = Math.floor(Math.random() * 30 + 50);
            if (this.addNum >= randomCont) {
                //减少
                this.addNum = 0;
                let r = +(0.95 + (Math.random() * 7) / 100).toFixed(2);
                this.jackpotNum = Math.floor(this.jackpotNum * r);
                this.jackpotNum2 = this.jackpotNum;
                this.setJackpot(this.jackpotNum);
                this.rollJackpot();
                return;
            }
            let randomN = Math.floor(Math.random() * 100 + 50);
            this.jackpotNum2 += randomN;
            this.setJackpot(this.jackpotNum2);
            this.addNum++;
            this.rollJackpot();

        }, Math.floor(Math.random() * 3 + 1) * 1000)
    }
    /**显示充值 */
    public showTopupView() {
        AudioManager.Singleton.play('MatchView', "button");
        LobbyViewCtr.instance.view.showTopup();
    }
    public Show() {
        if (this.ui_match_eyeBtn.selected) {
            this.ui_matchgold.text = '*****';
        } else {
            this.ui_matchgold.text = UIUtil.formatNumber(AppConst.mPlayerModel.gold) + "";;
        }
        LobbyViewCtr.instance.cs_compete_list();
        super.Show();
    }
    public Hide() {
        super.Hide();
        clearTimeout(this.timerId);
    }

    public clean() {
        clearTimeout(this.timerId);
    }

}