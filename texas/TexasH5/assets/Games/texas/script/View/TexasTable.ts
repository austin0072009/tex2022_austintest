import { OtherUserInfoSD } from "../../../../Script/BaseFrame/cs_base";
import F_TexasViewCtr from "../Contrl/F_TexasViewCtr";
import { PokerTexasType } from "../Model/Texas";
import { TexasLanguage } from "../Model/TexasLanguage";
import TexasUserComp from "./TexasUserComp";

const { ccclass, property } = cc._decorator;

@ccclass
export default class TexasTable extends cc.Component {
    public userList: TexasUserComp[] = [];
    /// <summary>
    ///是本地位置
    /// </summary>
    public _DicPos2User: Map<number, TexasUserComp> = new Map<number, TexasUserComp>();
    public get myUser(): TexasUserComp {
        let localpos: number = F_TexasViewCtr.instance.Model._posServer;
        if (this._DicPos2User.has(localpos)) {
            return this._DicPos2User.get(localpos);
        }
        else {

            console.log("localPos:" + localpos);
            this._DicPos2User.forEach((item, key) => {
                console.log("posKey:" + key)
            })
            return null;
        }
    }
    /// <summary>
    /// 观众时用这个对象 坐下后根据Pos从_DicPos2User取
    /// </summary>
    // public myManage:TexasUserComp;//为空表示我没有入座,表示观看模式
    public Init() {
        this.userList.forEach(_tuser => {
            this._DicPos2User.set(_tuser.localpos, _tuser);
        });
        // this.myManage = null;// _DicPos2User[1];
    }
    public ForeashAllDo(match: Function) {
        if (this._DicPos2User == null) return;
        if (match == null) return;
        this._DicPos2User.forEach((value, key) => {
            match(key);
        });
    }

    public GetBankerUserComp(): TexasUserComp {
        let user = null
        this.userList.forEach(userCom => {
            if (userCom.serverpos == F_TexasViewCtr.instance.Model.BankerPos) user = userCom;
        });
        return null;
    }


    public Clear() {
        this.userList = [];
        this._DicPos2User = new Map<number, TexasUserComp>();
    }


    /// <summary>
    /// 升庄牛牛的发牌位置确定     从庄家的位置开始算
    /// </summary>
    /// <param name="strdic"></param>
    /// <returns></returns>
    public GetFirstPosFaPai(Dice1: number, Dice2: number): number {
        return F_TexasViewCtr.instance.Model.BankerPos;
    }
    public GetUserByLocalPos(localpos: number): TexasUserComp {
        let _tempuser: TexasUserComp = null;
        this.ForeashAllDo((i) => {
            if (this._DicPos2User.get(i).localpos == localpos) _tempuser = this._DicPos2User.get(i);
        });
        if (_tempuser == null) console.log(localpos + ":localpos, fetel error!");
        return _tempuser;
    }

    public GetUserByUserId(userId: number): TexasUserComp {
        let tuc: TexasUserComp = null;
        this.userList.forEach(user => {
            if (user.player != null && user.player.userid == userId) {
                tuc = user;
            }
        });

        if (tuc != null) return tuc;

        let sd: OtherUserInfoSD = F_TexasViewCtr.instance.Model.GetUserInfo(userId);
        if (sd != null) {
            tuc = this.GetUserByPos(sd.pos);
        }
        else {
            //Debug.LogError("玩家不存在");
        }

        return tuc;
    }

    public GetUserByPos(pos: number): TexasUserComp {
        let user: TexasUserComp = null;
        this.userList.forEach(userCom => {
            if (userCom.localpos == pos) user = userCom;
        });

        return user;
    }
    public GetLocalPos(pos: number): number {
        let mypos: number = F_TexasViewCtr.instance.Model._posServer;
        return TexasTable.GetLocalPosByServerPos(pos, mypos, F_TexasViewCtr.instance.Model.manNum);
    }
    public static GetLocalPosByServerPos(serverPos: number, myServerPos: number, PLAYERS_NUM: number): number {
        var side = -1;
        let offset: number = (0 < myServerPos && myServerPos <= PLAYERS_NUM) ? 1 - myServerPos : 0;

        side = ((serverPos + offset) > 0 ? (serverPos + offset) : (serverPos + offset + PLAYERS_NUM));
        return side;//返回该位置 我们从1号位开始
    }

    public static GetNameByType(type: PokerTexasType): string {
        let typeName = "";
        switch (type) {
            case PokerTexasType.Five_Single:
                typeName = TexasLanguage.getLanguageById(1324);//高牌
                break;
            case PokerTexasType.Five_ONE_PAIR:
                typeName = TexasLanguage.getLanguageById(1323);//一对
                break;
            case PokerTexasType.Five_TWO_PAIR:
                typeName = TexasLanguage.getLanguageById(1322);//两对
                break;
            case PokerTexasType.Five_THREE:
                typeName = TexasLanguage.getLanguageById(1321);//三条
                break;
            case PokerTexasType.Five_Straight:
                typeName = TexasLanguage.getLanguageById(1320);//顺子
                break;
            case PokerTexasType.Five_Flush:
                typeName = TexasLanguage.getLanguageById(1319);//同花
                break;
            case PokerTexasType.Five_THREE_TWO:
                typeName = TexasLanguage.getLanguageById(1318);//葫芦
                break;
            case PokerTexasType.Five_Bomb:
                typeName = TexasLanguage.getLanguageById(1317);//四条
                break;
            case PokerTexasType.Five_Flush_Straight:
                typeName = TexasLanguage.getLanguageById(1316);//同花顺
                break;
            case PokerTexasType.Five_Flush_RoyalStraight:
                typeName = TexasLanguage.getLanguageById(1315);//皇家同花顺
                break;
            case PokerTexasType.Error:
                typeName = "";
                break;
        }
        return typeName;
    }
}


