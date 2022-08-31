
/**
 * @description 进入游戏的列表item
 */
export default class RoomItem extends fgui.GButton {
    public constructor() {
        super();
    }
    /**游戏名字 */
    private gameName: fgui.GTextField;
    /**颜色控制器 */
    private colorController: fgui.Controller;
    /**时间 */
    private timeText: fgui.GTextField;
    /**人数 */
    private playNum: fgui.GTextField;
    /**底注 */
    private bet: fgui.GTextField;
    /**准入金币 */
    private limitGold: fgui.GTextField;
    /**桌子id */
    private tableId: fgui.GTextField;
    /**桌子状态 */
    private status: fgui.GTextField;
    /**好友房 */
    private friendGroup: fgui.GGroup;

    public gid: number;
    public tid: number;
    public lvid: number;
    private typeController: fgui.Controller;
    protected onConstruct(): void {
        this.gameName = this.getChild("name").asTextField;
        this.colorController = this.getController("id");
        this.timeText = this.getChild("time").asTextField;
        this.playNum = this.getChild("play").asTextField;
        this.bet = this.getChild("bet").asTextField;
        this.limitGold = this.getChild("limit").asTextField;
        this.tableId = this.getChild("table").asTextField;
        this.status = this.getChild("status").asTextField;
        this.friendGroup = this.getChild("friendGroup").asGroup;
        this.typeController = this.getController("type");

        this.tableId._label.cacheMode = cc.Label.CacheMode.CHAR;
        this.gameName._label.cacheMode = cc.Label.CacheMode.CHAR;
        this.playNum._label.cacheMode = cc.Label.CacheMode.CHAR;
        this.limitGold._label.cacheMode = cc.Label.CacheMode.CHAR;
        this.timeText._label.cacheMode = cc.Label.CacheMode.CHAR;
        this.getChild("n8").asTextField._label.cacheMode = cc.Label.CacheMode.CHAR;
    }

    /**设置控制器 */
    public setColor(color: number) {
        this.colorController.setSelectedIndex(color);
    }



    /**设置数据 */
    public setData(data: {
        name: string, tableId: string, time: number, playNum: number,
        limit: number, maxPlayNum: number, brate: number, preG: number, gid: number, tid: number, lvid: number, t: number,
        IsSettle: boolean, cgold: number, ispas: number
    }) {
        this.gameName.text = data.name;
        this.tableId.text = data.tableId;
        this.timeText.text = this.ChangeHourMinutestr(Math.round(data.time / 60));
        this.playNum.text = `${data.playNum}/${data.maxPlayNum}`;   //9
        this.limitGold.text = this.numToCountingNnit(data.brate * 2 * 100);
        this.bet.text = `${data.brate}/${data.brate * 2}/${data.brate * 4}(${data.preG})`;
        this.gid = data.gid;
        this.tid = data.tid;
        this.lvid = data.lvid;
        if (data.IsSettle) {
            this.status.text = "已结算";
        } else if (data.cgold > 0) {
            this.status.text = "参与中";
        } else {
            this.status.text = "";
        }
        console.log("data.ispas == ", data.ispas);
        this.friendGroup.visible = data.ispas == 1;
        if (data.brate < 1) {
            this.setColor(0);
        } else if (data.brate == 1 || data.brate == 2 || data.brate == 5) {
            this.setColor(1);
        } else if (data.brate == 10 || data.brate == 25 || data.brate == 50) {
            this.setColor(2);
        } else if (data.brate == 100 || data.brate == 200 || data.brate == 500) {
            this.setColor(3);
        }
        if (data.t == 20) {//aof
            this.typeController.setSelectedIndex(1);
        } else if (data.t == 10) { //短牌
            this.typeController.setSelectedIndex(2);
        } else {
            this.typeController.setSelectedIndex(0);
        }
    }

    public ChangeHourMinutestr(str: number) {
        let timeStr = (Math.floor(str / 60)).toString();
        let mtimeStr = (str % 60).toString();
        // return (timeStr.length < 2 ? "0" + timeStr : timeStr) + "h" + (mtimeStr.length < 2 ? "0" + mtimeStr : mtimeStr)+"min";
        return (timeStr) + "h" + (mtimeStr) + "min";

    }

    public numToCountingNnit(num: number) {
        if (num >= 1000) {
            num /= 1000;
            return num + "k";
        }
        return num + '';
    }

}