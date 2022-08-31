import ViewBase from '../../../../Script/BaseFrame/ViewBase';
import { CompeteInfo, RankInfo, TexasLeveInfo } from '../LobbyNetData';
import LobbyViewCtr from '../LobbyViewCtr';
import MatchBlindsItem from './MatchBlindsItem';
import MatchPlayInfoItem from './MatchPlayInfoItem';
import MatchRewardTypeOne from './MatchRewardTypeOne';
import MatchRewardTypeThree from './MatchRewardTypeThree';
import MatchRewardTypeTwo from './MatchRewardTypeTwo';
/**
 * @description 賽事詳情
 */
export default class MatchDerailsView extends ViewBase {
    protected get packageResourceName(): string {
        return "gameHall";
    }
    protected get packageName(): string {
        return "res/Lobby";
    }
    protected get componentName(): string {
        return "matchDerails";
    }
    private ui_btn_matchDBreak: fgui.GButton = null;

    private typeController: fgui.Controller;

    /**玩家信息列表 */
    private ui_playInfoList: fgui.GList = null;
    /**参赛人数 */
    private ui_playcsnum: fgui.GTextField = null;
    /**参赛人次 */
    private ui_playercsrc: fgui.GTextField = null;



    /**盲注表 */
    private ui_blindsInfoList: fgui.GList = null;


    private ui_ssInfo: fgui.GComponent = null;
    private ui_wincom: fgui.GComponent = null;


    /**最低參賽人數 */
    private ui_lowestPlayNum: fgui.GTextField = null;
    /**報名人數 */
    private ui_enrollNum: fgui.GTextField = null;
    /**牌桌人數 */
    private ui_deskPlayNum: fgui.GTextField = null;
    /** 漲盲時間*/
    private ui_zmTime: fgui.GTextField = null;
    /**復活次數 */
    private ui_reviveCount: fgui.GTextField = null;
    /**報名費 */
    private ui_entryFee: fgui.GTextField = null;
    /**當前獎池 */
    private ui_nowJackpot: fgui.GTextField = null;
    /**初始籌碼 */
    private ui_initchip: fgui.GTextField = null;
    /**延時報名 */
    private ui_delayed: fgui.GTextField = null;
    /**保底奖池 */
    private ui_jackpot: fgui.GTextField = null;
    /**报名时间 */
    private ui_year: fgui.GTextField = null;
    private ui_enrollTime: fgui.GTextField = null;

    private ui_times: fgui.GTextField = null;
    private ui_state: fgui.GTextField = null;

    /**报名按钮 */
    private ui_btn_bm: fgui.GButton = null;
    private ui_btn_ssbm: fgui.GButton = null;
    private ui_btn_stopbm: fgui.GButton = null;


    private ui_spendGold: fgui.GTextField = null;

    /**奖励 */
    private ui_winjack1: fgui.GTextField = null;
    private ui_winper1: fgui.GTextField = null;
    private ui_winlist1: fgui.GList = null;


    private ui_showTip: fgui.GComponent = null;
    private ui_tipqx: fgui.GButton = null;
    private ui_tipqr: fgui.GButton = null;

    /**轮播 */
    private slideCom: fgui.GComponent;
    private slideList: fgui.GList;
    private indexController: fgui.Controller;
    private timerId;
    createChildComponents() {
        super.createChildComponents();
        this.fguiComponent.visible = false;
        this.ui_btn_matchDBreak.onClick(this.Hide, this);
        this.typeController = this.fguiComponent.getController("type");
        this.typeController.onChanged(this.stateChanged, this);

        this.ui_blindsInfoList.setVirtual();
        this.ui_blindsInfoList.itemRenderer = this.renderListItem.bind(this);

        this.ui_playInfoList.setVirtual();
        this.ui_playInfoList.itemRenderer = this.renderListItemPlay.bind(this);


        this.ui_winlist1.setVirtual();
        this.ui_winlist1.itemRenderer = this.renderListItemWin.bind(this);


        /**輪播圖 */
        this.slideCom = this.ui_ssInfo.getChild("n54").asCom;
        this.slideList = this.slideCom.getChild("list").asList;
        this.indexController = this.slideCom.getController("index");
        this.slideList.setVirtualAndLoop();
        this.slideList.itemRenderer = this.itemRendererslide.bind(this);
        this.slideList.numItems = 4;

        this.ssinfoContro = this.ui_ssInfo.getController("bm");
        this.winType = this.ui_wincom.getController("type");

        this.ui_btn_bm.onClick(this.opentip, this);
        this.ui_btn_ssbm.onClick(this.opentip, this);
        this.ui_btn_stopbm.onClick(this.stopSignup, this);

        this.ui_tipqx.onClick(this.closeTip, this);
        this.ui_tipqr.onClick(this.sendSignup, this);

        this.ssinfoContro.setSelectedIndex(1);
    }
    OnLoadCompleted() {
        this.Show();
    }
    /**状态改变 */
    public stateChanged() {
        // if (this.typeController.selectedIndex == 2) {
        //     this.getCompeteRank();
        // }
    }
    /**盲注 */
    public renderListItem(index: number, obj: fgui.GObject) {
        let item = <MatchBlindsItem>obj;
        item.setData(this.levelinfos[index]);
    }

    /**玩家 */
    public renderListItemPlay(index: number, obj: fgui.GObject) {
        let item = <MatchPlayInfoItem>obj;
        item.setData(index, this.matchRank[index]);
    }

    /**赢得奖品 */
    public renderListItemWin(index: number, obj: MatchRewardTypeOne | MatchRewardTypeTwo | MatchRewardTypeThree) {
        obj.setData(index, this.prizeListData[index], +this.ui_nowJackpot.text);
    }

    /**盲注等级信息 */
    public levelinfos: TexasLeveInfo[] = [];
    /**赛事的玩家排名 */
    public matchRank: RankInfo[] = [];

    /**选择查看的赛事 */
    public selectCompeteid: number;

    /**赛事详情控制器 */
    private ssinfoContro: fgui.Controller;

    /**奖励类型控制器 */
    private winType: fgui.Controller;

    /**设置赛事的详情数据 */
    public initData() {
        let data = LobbyViewCtr.instance.view.matchView.selectItem.data;

        this.selectCompeteid = data.competeid;
        this.levelinfos = data.levelinfos;
        this.ui_blindsInfoList.numItems = this.levelinfos.length;

        this.ui_enrollNum.text = `${data.signupcount}/${data.maxcount}`;
        this.ui_lowestPlayNum.text = data.mincount + '';
        this.ui_deskPlayNum.text = data.tablemaxcount + '';

        this.ui_zmTime.setVar("s", data.leveluptime + '').flushVars();
        this.ui_reviveCount.text = data.rebirth + '';
        this.ui_nowJackpot.text = data.prizepool + '';
        this.ui_jackpot.text = "¥" + data.prizepool;

        this.ui_initchip.text = data.initscore + '';
        this.ui_delayed.text = data.signupdelay + '';
        this.ui_entryFee.text = `${data.free[0].name}* ${data.free[0].num}`;


        this.ui_winjack1.setVar("jackpot", data.prizepool + '').flushVars();

        let str = data.StartTime.split(" ");
        this.ui_year.text = str[0].slice(str[0].indexOf("-") + 1);
        this.ui_enrollTime.text = str[1].slice(0, str[1].lastIndexOf(":"));

        this.ui_times.text = `${this.ui_year.text} ${this.ui_enrollTime.text}`;

        this.ui_btn_bm.visible = !data.IsSignup;
        this.ssinfoContro.setSelectedIndex(data.IsSignup ? 1 : 0);

        this.ui_playcsnum.setVar("pnum", data.signupcount + '').flushVars();

        if (!data.cansignup) {
            if (Date.now() < new Date(data.SignupTime).getTime()) { //报名未开始
                this.ui_state.text = '報名未開始';
            } else {
                this.ui_state.text = '報名結束';
            }
        } else {
            this.ui_state.text = '報名中';
        }
        this.ui_btn_ssbm.enabled = !data.CompeteStart;
        this.ui_btn_stopbm.enabled = !data.CompeteStart;
        this.ui_btn_bm.enabled = !data.CompeteStart;


        this.handlePrize(data);
        this.getCompeteRank();
    }

    public updatePlayNum() {
        let data = LobbyViewCtr.instance.view.matchView.selectItem.data;
        this.ui_enrollNum.text = `${data.signupcount}/${data.maxcount}`;
        this.ssinfoContro.setSelectedIndex(data.IsSignup ? 1 : 0);
        this.ui_playcsnum.setVar("pnum", data.signupcount + '').flushVars();
    }


    /**奖励数据 */
    private prizeListData = [];

    /**处理奖励 */
    public handlePrize(data: CompeteInfo) {
        this.prizeListData = [];
        let Prize = data.prizes;
        for (let i = 0; i < Prize.length; i++) {
            if (Prize[i].endrank == 0) {
                this.prizeListData.push(Prize[i].prizes);
            } else {
                for (let j = i; j < Prize[i].endrank; j++) {
                    this.prizeListData.push(Prize[i].prizes);
                }
            }
        }

        if (this.prizeListData[0][0].isvalue) { //有百分比
            this.ui_winlist1.defaultItem = "ui://Lobby/ssWinItem";
            this.winType.setSelectedIndex(0);
        } else {  //其他混合物品
            this.ui_winlist1.defaultItem = "ui://Lobby/ssWinItem1";
            this.winType.setSelectedIndex(1);

        }

        this.ui_winper1.setVar("pnum", this.prizeListData.length + '').flushVars();
        this.ui_winlist1.numItems = this.prizeListData.length;
        console.log("------------奖品------------", this.prizeListData);
    }

    /**獲取排名 */
    public getCompeteRank() {
        LobbyViewCtr.instance.cs_compete_rank_info(this.selectCompeteid);
    }

    /**设置玩家排名 */
    public handleRank() {
        let mathRank = LobbyViewCtr.instance.Model.matchRank;
        if (Object.keys(mathRank).length > 0 && (mathRank[this.selectCompeteid].length > 0)) {
            this.matchRank = mathRank[this.selectCompeteid];
        } else {
            this.matchRank = null;
        }
        if (this.matchRank) {
            this.ui_playInfoList.numItems = this.matchRank.length;
        } else {
            this.ui_playInfoList.numItems = 0;
        }
    }


    /**关闭提示 */
    public closeTip() {
        this.ui_showTip.visible = false;
    }
    public opentip() {
        this.ui_spendGold.text = this.ui_entryFee.text;
        this.ui_showTip.visible = true;
    }
    /**发送报名 */
    public sendSignup() {
        this.closeTip();
        LobbyViewCtr.instance.cs_signup(this.selectCompeteid);
    }

    /**退赛 */
    public stopSignup() {
        LobbyViewCtr.instance.cs_quit(this.selectCompeteid);
    }



    /**轮播图 */
    public itemRendererslide(index: number, obj: fgui.GObject) {
        this.indexController.setSelectedIndex(index);
    }

    public Show() {
        this.typeController.setSelectedIndex(0);
        super.Show();
        this.initData();
        this.loopRoll();
        // this.timerId && clearInterval(this.timerId);
        // this.timerId = setInterval(() => {
        //     this.slideList.scrollPane.scrollRight(1, true);
        // }, 5000)
    }

    public loopRoll() {
        this.node.stopAllActions();
        this.node.runAction(
            cc.repeatForever(
                cc.sequence(
                    cc.delayTime(5),
                    cc.callFunc(() => {
                        this.slideList.scrollPane.scrollRight(1, true);
                    })))
        )
    }

    clean() {
        // clearInterval(this.timerId);
        this.node.stopAllActions();
    }
    Hide() {
        super.Hide();
        //clearInterval(this.timerId);
        this.node.stopAllActions();
    }
    onDestroy() {
        // clearInterval(this.timerId);
        this.node.stopAllActions();
    }
}