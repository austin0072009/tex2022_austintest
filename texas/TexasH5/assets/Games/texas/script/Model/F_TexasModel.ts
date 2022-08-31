import { CommonPosValSD, PlayerInfoSD, OtherUserInfoSD, CommonPosValListSD, RoomInfoSD } from "../../../../Script/BaseFrame/cs_base";
import { UIUtil } from "../../../../Script/Common/UIUtil";
import LobbyViewCtr from "../../../../GameHall/script/Lobby/LobbyViewCtr";
import { TableRoomInfoTex, SuperClub, Cards, sc_entertablenum_tex, TableRecoverTexasSD } from "./TexasNetData";



export class F_TexasModel {
    //比赛相关
    public AOF_Times: number;
    public level: number;
    public min_level: number;
    public max_level: number;
    public competeid: number;
    public matchName: string;
    public bigblind: number;

    public _tablePlayerList: string;
    public _pos2Gold: CommonPosValSD[] = [];
    public mPlayerModel: PlayerInfoSD;
    public tableApply = 0;
    public minStartGamble: number = 0; //开始的最低下注
    public tableLockGold: number = 0; //当前桌子锁定的金币
    public curTableOverCount: number = 0;//一共玩了多少局
    public isGamestart = false;//是否可以倒计时
    public jubaoType = 0;//举报类型，0:玩家，1:牌局

    public curMsgId: number = 0;
    public gameid: number;
    public levelid: number;
    public tableid: number;
    public room: TableRoomInfoTex;
    public Room_tnumber: string;
    public Room_name: string;
    /// <summary>
    /// 人数  几人房显示
    /// </summary>
    public manNum: number;
    /// <summary>
    /// 人数  最低多少人开启游戏
    /// </summary>
    public minPC: number = 0;
    /// <summary>
    /// 1开启
    /// </summary>
    public ins: number;
    public openV: number;
    public pas: string = "";
    /// <summary>
    /// 此桌面的玩有数据 所有带POS值 是从1开始， 
    /// </summary>
    public palyerlist: OtherUserInfoSD[];
    /// <summary>
    /// 只有位置的人申请才能看到
    /// </summary>
    public pos2apply: CommonPosValSD[];
    public MyEndMoney; //记录我剩余的钱，用于结束的时候判断是否需要弹出加钱界面
    public _CommonCard: number[];
    public _OpenCount;

    /// <summary>
    /// 所有人的公开显示手牌，弃牌的人不显示 
    /// </summary>
    public _pos2openPai: CommonPosValListSD[];
    public _ShouPai: number[];
    public BankerPos: number;
    public _posServer: number; //我在服务器的位置
    /// <summary>
    /// 是否正在排队
    /// </summary>
    public isline: boolean;
    /// <summary>
    /// 排队人数
    /// </summary>
    public onlinenumber;
    public isGaming: boolean; //牌局是否结束
    public isShowPersonRemind: boolean = true;
    public isselfontable: boolean; //自己是否在桌子上比牌失败，放弃都可以离开，这里要通知服务器发送退出消息
    public delayCount: number; //延迟次数
    /// <summary>
    /// 点击看公牌次数
    /// </summary>
    public clicknum: number;
    /// <summary>
    /// 强制看牌次数
    /// </summary>
    public fshownum: number;
    /// <summary>
    /// 已存在club gold
    /// </summary>
    public cgold: number;
    /// <summary>
    /// 是否超级联盟房间
    /// </summary>
    public IsSupper: boolean;
    /// <summary>
    /// 是否结算离桌
    /// </summary>
    public IsSettle: boolean;
    /// <summary>
    /// 俱乐部id
    /// </summary>
    public clubid: number;
    /// <summary>
    /// 房主id
    /// </summary>
    public ownnerid: number;
    /// <summary>
    /// 每一轮只有一只看牌机会
    /// </summary>
    public get showcard(): boolean {
        return this._curGambleLimitMin == 0;
    }

    /// <summary>
    /// 当前允许下注的最小值 为0表示可以看牌
    /// </summary>
    public _curGambleLimitMin: number = 0; //当前单次下注值
    public _curMaxGamble: number = 0; //封顶下注
    public _CurTurnCount: number = 0; //当前轮数
    public firstTurnStart: boolean = false;//当前是否是第一个操作
    public _jackpot: number; //当前的奖池数
    public _jpot: number; //当前的底皮
    public _lastjpot: number; //上一轮的底皮,只有进入房间服务器传值，游戏中都是客户端自己处理
    public _mangoOfTable: number; //当前奖池
    public _mingamble: number; //当前的允许的最小下注 Allin除外
    public _emaxg: number;
    public endDelay: boolean;
    public _gamble: number = 0;
    public turnGamble: number = 0; // 当前轮的最大下注allin除外
    /// <summary>
    /// 同超级联盟的俱乐部
    /// </summary>
    public clubslist: SuperClub[];
    /// <summary>
    /// 当前选中的加入超级联盟的俱乐部
    /// </summary>
    public curSClub: SuperClub;
    /// <summary>
    /// 超级联盟  玩家带入俱乐部的id    初始为0
    /// </summary>
    public intoCid: number;
    /// <summary>
    /// 主池边池默认第一个为主池
    /// </summary>
    public potlist: number[];
    public MatchCode = ""; //牌局号
    /// <summary>
    /// 自己的秀牌集合
    /// </summary>
    public _scards: Cards[];
    public brate: number;
    public intorate_min: number;
    public intorate_max: number;
    public pregamble: number;
    public gps: number;
    public ip: number;
    /// <summary>
    /// 如果有自己的操作更新最新的倒计时
    /// </summary>
    public lefttime: number;
    /// <summary>
    /// 房主同意开局 
    /// 默认都为true
    /// </summary>
    public openplay: boolean = true;
    /// <summary>
    /// 房主同意开局开关打开后，当前房间房主是否已经点开开启牌局状态
    /// 默认都为true
    /// </summary>
    public isopen: boolean;
    /// <summary>
    /// 是否限制ios
    /// </summary>
    public ios: boolean;
    /// <summary>
    /// 限制入池率
    /// </summary>
    public Inflow: number;
    public gametype: number;
    public delay: number;
    public showCard: number;
    /// <summary>
    /// 是否控制带入
    /// </summary>
    public cinto: boolean;
    //public int bmango;
    public table: sc_entertablenum_tex;
    public recover: TableRecoverTexasSD;
    public endTime: number;

    public isTurnOver: boolean; //当前手结束

    public isLastStepStart: boolean = false;

    public muteUsers: Map<number, boolean> = new Map<number, boolean>();

    public PlayingUsers: CommonPosValSD[]; //当前局正在玩的玩家
    public BigSmallPlayingUser: CommonPosValSD[]; //当前局大小盲玩家

    //public List<int> insList; //可选保额列表
    //public List<int> outs; //补牌
    ////public double rate; //赔率
    //public int curJiangchi; //当前自己的奖池
    public insList32: number[]; //可选保额列表
    public outs32: number[]; //补牌
    public rate32: number; //赔率
    public curJiangchi32: number; //当前自己的奖池分池
    public curJiangchi31: number;//当前自己的奖池主池
    public insList31: number[];
    public outs31: number[]; //补牌
    public inOrder: number;//已投保
    public insIpos: CommonPosValSD[];//val:0可购买主池和分池，1主池，2分池；

    public id2keep: CommonPosValSD[] = [];
    public isinsurance: boolean; //是否正在保险模式
    public F_TexasModel() {
        this._CommonCard = [];
        this._ShouPai = [];
        this._pos2openPai = [];
        this.Reset();
    }
    public Init() {
        this._CommonCard = [];
        this._ShouPai = [];
        this._pos2openPai = [];
        this.palyerlist = [];
        this.Reset();
    }
    public SetbaseDataId(gid: number, tid: number, lvid: number) {
        this.gameid = gid;
        this.tableid = tid;
        this.levelid = lvid;
        this.SetTalbeInfo(tid, lvid);
    }
    public SetTalbeInfo(tid: number, lvid: number) {
        this.tableid = tid;
        this.levelid = lvid;
        if (LobbyViewCtr.instance.Model.tableList == null) { return null; }
        LobbyViewCtr.instance.Model.tableList.forEach(item => {
            if (item.tid == this.tableid && item.lvid == this.levelid) {
                this.room = item;
            }
        });
    }

    public RemovePlayerList(userID: number): boolean {
        let b = false;
        if (this.palyerlist == null) return b;
        this.palyerlist.forEach((_ousd, key) => {
            if (_ousd.py.userid == userID) {
                this.palyerlist.splice(key, 1);
                if (userID == this.mPlayerModel.userid) {
                    this.SetMyServerPos(0);
                }
                b = true;
            }
        });

        console.log("this.palyerlist === ", this.palyerlist);
        return b;
    }
    public RemovePos2Apply(pos: number): boolean {
        let b = false;
        if (this.pos2apply == null) return false;
        this.pos2apply.forEach((_ousd, key) => {
            if (_ousd.pos == pos) {
                this.pos2apply.splice(key, 1);
                b = true;

            }
        });
        return b;
    }
    public GetUserInfo(userId: number): OtherUserInfoSD {
        let user: OtherUserInfoSD = null;
        if (this.palyerlist != null) {
            this.palyerlist.forEach(_ousd => {
                if (_ousd.py.userid == userId) {
                    user = _ousd;
                }

            });
        }
        return user;
    }
    public GetUserInfoByPos(pos: number): OtherUserInfoSD {
        let user: OtherUserInfoSD = null;
        if (this.palyerlist != null) {
            this.palyerlist.forEach(_ousd => {
                if (_ousd.pos == pos) {
                    user = _ousd;
                }
            });
        }
        return user;
    }
    public SetUserData_isW_pos(userId: number, isW: number) {
        let user: OtherUserInfoSD = this.GetUserInfo(userId);
        if (user != null) {
            user.isW = isW;
        }
    }
    public SetUserData_isW(userId: number, isW: number) {
        this.SetUserData_nnn(userId, 1, isW);
    }

    public SetUserData_isK(userId: number, keepTime: number) {
        this.SetUserData_nnn(userId, 2, keepTime);
    }

    //统一修改数据 枚举方便调用
    // public SetUserData (userId:number, key:UserInfoKey, value:number) {
    //     this.SetUserData_nnn (userId, UIUtil.NumberToInt(key), value);
    // }

    //统一修改数据 1.key:isW(观众状态) 2. key:isK 留座状态 3.
    public SetUserData_nnn(userId: number, key: number, value: number) {
        let user: OtherUserInfoSD = this.GetUserInfo(userId);
        if (user != null) {
            switch (key) {
                case 1:
                    user.isW = value;
                    break;
                case 2:
                    user.isK = value;
                    break;
                default:
                    break;
            }
        }
    }
    public GetReadyCount(): number {
        let count = 0;
        if (this.palyerlist != null) {
            this.palyerlist.forEach(item => {
                if (item.isW != 1 && item.isW != 2 && item.isK <= 0) {
                    count++;
                }
            });
        }

        return count;
    }

    public GetMinPlayerCount(): number {
        return this.minPC;
    }

    public AddPlayerList(user: OtherUserInfoSD) {
        for (var i = 0; i < this.palyerlist.length; i++) {
            var _ousd = this.palyerlist[i];
            if (_ousd.py.userid == user.py.userid) {
                this.palyerlist.splice(i, 1);
            }
        }
        this.palyerlist.push(user);
        console.log(this.palyerlist);
    }
    public AddPos2ApplyList(user: CommonPosValSD) {
        for (var i = 0; i < this.pos2apply.length; i++) {
            var _ousd = this.pos2apply[i];
            if (_ousd.pos == user.pos) {
                this.pos2apply.splice(i, 1);
            }
        }
        this.pos2apply.push(user);
    }
    /// <summary>
    /// 清理数据准备下一次游戏
    /// </summary>
    public Reset() {
        this.SetMinStartGamble(0);
        this.SetLockGold(0);
        this.room = null;
        this.levelid = 0;
        this.tableid = 0;
        this.SetMyServerPos(0);
        this.palyerlist = null;
        this.MatchCode = "";
        this._posServer = 0;
        //_curRoomInfo = null;
        this.isline = false;
        this._CurTurnCount = 0;
        this.isGaming = false;
        this.isselfontable = false;
        this._curMaxGamble = 0;
        this._pos2openPai = [];
        console.log("清空手牌 个数:");
        this.isselfontable = false;
        this._curGambleLimitMin = 0;
        this._CommonCard = [];
        this._jackpot = 0;
        if (this._ShouPai != null) {
            this._ShouPai = [];
        }
        this._jpot = 0;
        this._lastjpot = 0;
        this.isTurnOver = false;
        this.isinsurance = false;
    }
    public GetSelfServerCards(): number[] {
        let allCards: number[] = [];
        if (this._ShouPai == null || this._ShouPai.length <= 0) {
            console.log("展示分牌: 手牌不能为空");
            return allCards;
        }

        UIUtil.Concat(allCards, this._ShouPai);

        if (this._pos2openPai == null || this._pos2openPai.length <= 0) {
            console.log("展示分牌: 公开牌玩家为空");
        }
        this._pos2openPai.forEach(item => {
            if (item.pos == this._posServer) {
                UIUtil.Concat(allCards, item.vallist);
            }
        });

        return allCards;

    }
    //判断某个位置是不是观众
    public IsPosWatch(serverPos: number): boolean {
        let isWatch = true;
        if (this.palyerlist != null) {
            this.palyerlist.forEach(item => {
                if (item.pos == serverPos) {
                    // console.log("pos:item.isW" + item.isW);
                    isWatch = item.isW == 1;
                }
            });
        }

        //游戏未开始，不能是观众状态 .(游戏中才能显示观众状态)    
        return isWatch;
    }
    /// <summary>
    /// 占座等待中
    /// </summary>
    /// <param name="serverPos"></param>
    /// <returns></returns>
    public IsPosWaitToTakeIn(serverPos: number): boolean {
        let isWait = true;
        if (this.palyerlist != null) {
            this.palyerlist.forEach(item => {
                if (item.pos == serverPos) {
                    // console.log("pos:22222222" + item.isW);
                    isWait = item.isW == 2;
                }
            });
        }

        //占座中
        return isWait;
    }
    //玩家是否在正在游戏中
    public IsInPlaying(userId: number): boolean {
        let isPlaying = false;
        if (this.PlayingUsers != null) {
            this.PlayingUsers.forEach(item => {
                if (item.pos == userId) {
                    isPlaying = true;
                }
            });
        }
        return isPlaying;
    }
    public SetMyServerPos(pos: number) {
        this._posServer = pos;
        // console.log("设置 My serverPos:" + pos);
    }
    public EnableMuteUser(userId: number, isMute: boolean) {
        this.muteUsers.set(userId, isMute);
    }
    public GetUserIsMute(userId: number): boolean {
        let isMute = false;
        if (this.muteUsers != null && this.muteUsers.has(userId)) {

            isMute = this.muteUsers.get(userId);
        }

        return isMute;
    }
    public SetCurSClub(sclubId: number) {
        if (sclubId > 0 && this.clubslist != null)
            this.curSClub = this.clubslist.find(item => { return item.cid == sclubId });
        else
            this.curSClub = null;
    }
    public SetRemainTime(remainTime: number) {
        this.endTime = remainTime;//UIUtil.NumberToInt(cc.director.getTotalTime()/1000 + remainTime);
    }
    public SetLockGold(lockGold: number) {
        this.tableLockGold = lockGold;
    }
    public SetMinStartGamble(minGold: number) {
        this.minStartGamble = minGold;
    }
    private CheckHasMe(lists: OtherUserInfoSD[]): boolean {
        let hasme = false;
        lists.find(
            a => {
                if (a.py.userid == this.mPlayerModel.userid) {
                    hasme = true;
                    return true;
                }
                return false;
            }
        );
        return hasme;
    }

    public gamelevel: RoomInfoSD;
    /// <summary>
    /// 检查是不是输了
    /// </summary>
    public CheckIsLose(gold: number): boolean {
        // if (LobbyViewCtr.instance.Model.LastEnterRoomData == null) return false;
        let data: RoomInfoSD = this.gamelevel;
        if (data != null && gold < data._min) {
            return true;
        }
        return false;
    }



}
