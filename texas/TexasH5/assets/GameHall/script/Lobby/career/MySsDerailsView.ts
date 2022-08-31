import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import { UIUtil } from "../../../../Script/Common/UIUtil";
import LobbyViewCtr from "../LobbyViewCtr";
import { RankPrizeInfo, sc_compete_record_detail } from "./CareerNetDataStruct";

/*
 * @description 賽事详情
 */
export default class MySsDerailsView extends ViewBase {

    protected get packageResourceName(): string {
        return "gameHall";
    }
    protected get packageName(): string {
        return "res/Lobby";
    }
    protected get componentName(): string {
        return "ssDerails";
    }
    private ui_btn_ssplayDerailsBreak: fgui.GButton = null;
    public Competeid: number = 0;

    private ui_sstime: fgui.GTextField = null;//赛事名
    private ui_ssbet: fgui.GTextField = null;//赛事时间
    private ui_allNumInGamess: fgui.GTextField = null;//获得金额
    private ui_changjunRecordss: fgui.GTextField = null;//盈利局
    private ui_damangOrBaishouss: fgui.GTextField = null;//参与人数
    private ui_allShoushuss: fgui.GTextField = null;//总手数
    private ui_changjunDairuss: fgui.GTextField = null;//投资回报率
    private ui_n130: fgui.GList = null;//玩家列表

    createChildComponents() {
        super.createChildComponents();
        this.fguiComponent.visible = false;
        this.ui_btn_ssplayDerailsBreak.onClick(this.Hide, this);
    }
    OnLoadCompleted() {
        this.Show();
        this.ui_n130.numItems = 0;
        this.ui_n130.itemRenderer = this.renderList.bind(this);
    }

    Show() {
        super.Show();
        LobbyViewCtr.instance.cs_compete_record_detail(this.Competeid);
    }

    private rankingList: RankPrizeInfo[] = [];
    public sc_compete_record_detail(data: sc_compete_record_detail) {
        this.ui_sstime.text = data.competename;
        this.ui_ssbet.text = data.starttime;
        data.prizes.forEach((item) => {
            console.log("赛事奖品：" + item.name + "_" + item.num);
        });
        this.ui_allNumInGamess.text = data.prizes[0].num + "";
        this.ui_changjunRecordss.text = data.TableWinCount + "";
        this.ui_damangOrBaishouss.text = data.ranking.length + "";
        this.ui_allShoushuss.text = data.TotalRoundCount + "";
        this.ui_changjunDairuss.text = data.RateOfReturn + "%";

        this.rankingList = data.ranking;
        this.rankingList.sort((a, b) => {
            return a.rank - b.rank;
        });
        this.ui_n130.numItems = data.ranking.length;
    }

    public renderList(index: number, item: fgui.GObject) {
        let go = <fgui.GComponent>item;
        go.getChild("n6").asTextField.text = this.rankingList[index].rank + "";
        UIUtil.loadImage(go.getChild("n7").asCom.getChild("n0").asLoader, this.rankingList[index].pic);
        go.getChild("n8").asTextField.text = this.rankingList[index].name;
        go.getChild("n5").asTextField.text = this.rankingList[index].prizes[0].num + "";
        go.getChild("n9").asTextField.text = (this.rankingList[index].proportion * 100) + "%";
    }
}