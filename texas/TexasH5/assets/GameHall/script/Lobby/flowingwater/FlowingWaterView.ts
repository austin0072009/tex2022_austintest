import { AudioManager } from "../../../../Script/BaseFrame/AudioManager";
import { CommonCtr } from "../../../../Script/BaseFrame/CommonCtr";
import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import HttpHelpEx from "../../../../Script/Common/Managers/HttpHelpEx";
import { UIUtil } from "../../../../Script/Common/UIUtil";
import { AppConst } from "../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst";
import { BaseFrameNative } from "../../../../Script/BaseFrameNative";

/**
 * @description 我的流水
 */
export default class FlowingWaterView extends ViewBase {
    protected get packageResourceName(): string {
        return "gameHall";
    }
    protected get packageName(): string {
        return "res/Lobby";
    }
    protected get componentName(): string {
        return "flowingwater";
    }

    private ui_btn_waterBreak: fgui.GButton = null;
    private ui_gameDown: fgui.GComboBox = null;
    private ui_turnoverList: fgui.GList = null;

    // private comboboxItem: string[] = ["全部", "德州撲克", "德州牛仔", "龍虎", "忍者", "哪吒傳奇",
    //     "九綫拉王", "宙斯", "火牛奇襲", "水果瑪麗", "財神過年", "火之女王"];
    private comboboxItemId: number[] = [0, 51, 104, 21, 201, 505, 92, 254, 4096, 91, 258, 54];

    private comboboxItem: string[] = ["全部", "帶入", "返還", "受贈", "贈送", "充值", "提現"];
    private changeType: number[] = [0, 33, 34, 7, 8, 10, 47];


    private turnoverListData: { type: number, time: string, gameName: string, win: number }[] = [];

    /**当前的页数 */
    private pageIndex: number = 1;

    /**当前数据的总数 */
    private totalCount: number;
    /**当前查询的游戏id */
    private selectGameId: number = 0;
    /**上次查询的游戏id */
    private lastGameId: number;

    /**選擇的類型 */
    private selectChangType: number = 0;

    createChildComponents() {
        super.createChildComponents();
        this.fguiComponent.visible = false;
        this.ui_btn_waterBreak.onClick(this.Hide, this);
        this.ui_gameDown.items = this.comboboxItem;
        this.ui_turnoverList.setVirtual();
        this.ui_turnoverList.itemRenderer = this.renderListItem.bind(this);
        this.ui_turnoverList.on(fgui.Event.PULL_UP_RELEASE, this.onPullUpToRefresh, this);

        this.ui_gameDown.on(fgui.Event.STATUS_CHANGED, this.onChanged, this);

    }

    OnLoadCompleted() {
        this.Show();
    }
    Hide() {
        AudioManager.Singleton.play('FlowingWaterView', "button");
        super.Hide();
    }

    public renderListItem(index: number, obj: fgui.GObject) {
        let item = <fgui.GComponent>obj;
        let streamNum = item.getChild("n1").asTextField;
        let time = item.getChild("n2").asTextField;
        let gameName = item.getChild("n3").asTextField;
        let win = item.getChild("n4").asTextField;
        let color = item.getController("color");

        let str = '';
        switch (this.turnoverListData[index].type) {
            case 33:  //
                str = '帶入';
                break;
            case 34:  //返还 
                str = '返還';
                break;
            case 7:  //受赠
                str = '受贈';
                break;
            case 8:  //赠送
                str = '贈送';
                break;
            case 10:
                str = '充值';
                break;
            case 47:
                str = '提現';
                break;
            default:
                str = '上下分';
                break;
        }

        streamNum.text = str;

        time.text = this.turnoverListData[index].time;
        gameName.text = this.turnoverListData[index].gameName;
        if (this.turnoverListData[index].win > 0) {
            color.setSelectedIndex(0);
            win.text = '+' + this.turnoverListData[index].win;
        } else {
            color.setSelectedIndex(1);
            win.text = this.turnoverListData[index].win + '';
        }
    }

    /**上刷新 */
    public onPullUpToRefresh() {
        if (!this.getDataBool) {
            return;
        }
        // if (this.pageIndex * 20 > this.totalCount) {
        //     return;
        // }
        this.pageIndex += 1;
        this.getData();
    }

    /**是否可以获取数据 */
    private getDataBool: boolean = true;

    /**下拉狀態變化 */
    public onChanged() {
        AudioManager.Singleton.play('FlowingWaterView', "button");
        // this.selectGameId = this.comboboxItemId[this.ui_gameDown.selectedIndex];
        this.selectChangType = this.changeType[this.ui_gameDown.selectedIndex];
        if (this.lastGameId == this.selectChangType) {
            return;
        }
        this.turnoverListData = [];
        this.pageIndex = 1;
        this.getData();
    }

    public getData() {
        if (!this.getDataBool) {
            return;
        }
        this.getDataBool = false;
        // CommonCtr.instance.ShowTipLabel("正在获取数据");
        let url = BaseFrameNative.serverlistItem.apiAdress + "/api/gamelog/GetJackUserLog2";
        let params = {
            PageSize: 20, //頁面大小
            pageIndex: this.pageIndex, //页数
            userid: AppConst.mPlayerModel.userid + '',
            GameId: this.selectGameId,
            changeType: this.selectChangType
        };

        HttpHelpEx.instance.post(url, params)
            .then((res) => {
                this.getDataBool = true;
                cc.log("  ------res----", res);
                if (res.code == 1) {
                    // this.pageIndex = res.data.pageIndex;
                    // this.totalCount = res.data.totalCount;
                    let data = res.data;
                    if (this.lastGameId >= 0) {
                        if (this.lastGameId != this.selectChangType) {
                            this.turnoverListData = [];
                        }
                    } else {
                        this.turnoverListData = [];
                    }
                    this.lastGameId = this.selectChangType;
                    if (data.length > 0) {
                        for (let i = 0; i < data.length; i++) {
                            let info = { type: null, time: null, gameName: '', win: null };
                            info.type = data[i].changeType; //类型
                            info.time = data[i].time;  //时间
                            info.gameName = data[i].gameName.split("≡")[0];  //名字  "財神過年≡God Of Wealth New Year"
                            info.win = UIUtil.formatNumber100(data[i].gold);  //金额
                            this.turnoverListData.push(info);
                        }
                    } else {
                        CommonCtr.instance.ShowTipLabel("暂无数据");
                    }
                    this.ui_turnoverList.numItems = this.turnoverListData.length;
                    this.ui_turnoverList.scrollPane.scrollBottom(true);
                } else {
                    CommonCtr.instance.ShowTipLabel("获取数据失败");
                }

            })
            .catch((err) => {
                this.getDataBool = true;
                cc.log("----------err---", err)
                CommonCtr.instance.ShowTipLabel("获取数据失败");
            })
    }




    public Show() {
        this.turnoverListData = [];
        this.ui_turnoverList.numItems = this.turnoverListData.length;
        this.pageIndex = 1;
        this.getData();
        super.Show();
    }

}