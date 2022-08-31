import { RoomInfoSD } from "../../../Script/BaseFrame/cs_base";
import { sc_getagentinfo, tasklist, sc_mobilephonenum, TableRoomInfoTex, sc_getuservipinfo, vipConfig, CompeteInfo, RankInfo, notice, sc_extendredinfo, sc_getemaillist, PropInfo } from "./LobbyNetData";

export default class LobbyModel {
    public level: RoomInfoSD;
    public levellist: RoomInfoSD[];
    //所有游戏都统一使用 lobby上的 gameid tableid levelid  MatchCode
    public gameid: number;
    public tableid: number;
    public tnubmer: string//桌子房间号
    public levelid: number;
    public MatchCode: string;
    public maxCount: number;
    public baserate: number;
    public ageninfo: sc_getagentinfo = null;
    public isHomePage: boolean = true;
    public TexSitdownData: any[] = null;
    public redpacketData: sc_extendredinfo = null;

    /**玩家人数 */
    public playerCount: number;
    /**房间号 */
    public tnumber: string

    public _isStarted: boolean;
    /**是靠桌编号进入的 */
    public _addbytablenum: boolean;
    public _addtableid: number;
    /**桌子 */
    public tableList: TableRoomInfoTex[];

    /**查询的 userId */
    public queryUserId: number;
    /**任务列表数据 */
    public tasklist: tasklist[];
    /**头像框 */
    public headFrame: string;
    /**银行卡绑定信息 */
    public mobilephonen: sc_mobilephonenum;

    /**玩家VIP信息 */
    public vipInfo: sc_getuservipinfo;

    /**vip 的配置信息 */
    public vipConfig: vipConfig;

    /**vip 等级 */
    public vipLevel: number = 0;

    /**賽事數據 */
    public matchData: CompeteInfo[];
    /**赛事排名 */
    public matchRank = {};

    /**弹窗公告 */
    public notice: notice[] = [];

    /**跑马灯 */
    public broadnotice: notice[] = [];

    /**背包数据 */
    public bagpackData: PropInfo[] = [];

    /**邮件消息 */
    public emailInfo: sc_getemaillist;

    /**是否设置支付密码 */
    public isSetPayPassword: boolean = false;

    public Init(): void { }
    public ClearData(): void {
    }
    public vipAddress: string = "";

}