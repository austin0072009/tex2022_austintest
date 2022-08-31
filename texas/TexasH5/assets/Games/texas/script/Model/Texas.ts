
/// <summary>
/// 德州扑克牌的数据类   

import { UIUtil } from "../../../../Script/Common/UIUtil";
import F_TexasViewCtr from "../Contrl/F_TexasViewCtr";
import { TexUserInfoSD } from "./TexasNetData";

/// </summary>
export class Texas {

    /// <summary>
    /// 黑
    /// </summary>
    private static arrSpade: number[] = [102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114];
    /// <summary>
    /// 红
    /// </summary>
    private static arrHeart: number[] = [202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214];
    /// <summary>
    /// 梅
    /// </summary>
    private static arrClub: number[] = [302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314];
    /// <summary>
    /// 方
    /// </summary>
    private static arrDiamond: number[] = [402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414];

    private static twoPos: string[] = ["SB", "BB"];
    private static threePos: string[] = ["SB", "BB", "BTN"];
    private static fourPos: string[] = ["SB", "BB", "UTG", "BTN"];
    private static fivePos: string[] = ["SB", "BB", "UTG", "CO", "BTN"];
    private static sixPos: string[] = ["SB", "BB", "UTG", "HJ", "CO", "BTN"];
    private static sevenPos: string[] = ["SB", "BB", "UTG", "MP1", "HJ", "CO", "BTN"];
    private static eightPos: string[] = ["SB", "BB", "UTG", "UTG+1", "MP1", "HJ", "CO", "BTN"];
    private static ninePos: string[] = ["SB", "BB", "UTG", "UTG+1", "MP1", "MP2", "HJ", "CO", "BTN"];
    private static curPos: string[] = [];

    //礼物
    public static giftConfig = {
        "Tuoxie": { "playAnima": "21_To", "moveAnima": "21_Fly", "icon": "Tuoxie", "name": "拖鞋", "bgm": "", "diam": "0.2" },
        "daoju_dao": { "playAnima": "To", "moveAnima": "Fly", "icon": "daoju_dao", "name": "飞刀", "bgm": "", "diam": "0.2" },
        "daoju_daquan": { "playAnima": "To", "moveAnima": "From", "icon": "daoju_daquan", "name": "拳击", "bgm": "", "diam": "0.2" },
        "daoju_laolong": { "playAnima": "To", "moveAnima": "Fly", "icon": "daoju_laolong", "name": "栅栏", "bgm": "", "diam": "0.5" },
        "gunFrom": { "playAnima": "From", "moveAnima": "", "icon": "gunFrom", "name": "机枪", "bgm": "", "diam": "0.5" },
        "hd_bingtong01": { "playAnima": "To", "moveAnima": "Fly", "icon": "hd_bingtong01", "name": "冰桶", "bgm": "", "diam": "0.5" },
        "hd_daocha01": { "playAnima": "To", "moveAnima": "Fly", "icon": "hd_daocha01", "name": "喝茶", "bgm": "", "diam": "0.2" },
        "hd_ganbei01": { "playAnima": "To", "moveAnima": "Fly", "icon": "hd_ganbei01", "name": "干杯", "bgm": "", "diam": "0.2" },
        "hd_jidan01": { "playAnima": "To", "moveAnima": "Fly", "icon": "hd_jidan01", "name": "鸡蛋", "bgm": "", "diam": "0.2" },
        "hd_maobi01": { "playAnima": "To", "moveAnima": "Fly", "icon": "hd_maobi01", "name": "帅", "bgm": "", "diam": "0.5" },
        "hd_meigui01": { "playAnima": "To", "moveAnima": "Fly", "icon": "hd_meigui01", "name": "鲜花", "bgm": "", "diam": "0.5" },
        "hd_woshou01": { "playAnima": "To", "moveAnima": "Fly", "icon": "hd_woshou01", "name": "握手", "bgm": "", "diam": "0.5" },
        "hd_zhuaji01": { "playAnima": "To", "moveAnima": "Fly", "icon": "hd_zhuaji01", "name": "小鸡", "bgm": "", "diam": "0.5" },
        "hongbao": { "playAnima": "23_To", "moveAnima": "23_Fly", "icon": "hongbao", "name": "红包", "bgm": "", "diam": "0.5" },
        "kiss": { "playAnima": "15", "moveAnima": "", "icon": "kiss", "name": "飞吻", "bgm": "", "diam": "0.5" },
        "mj": { "playAnima": "22_To", "moveAnima": "22_Fly", "icon": "mj", "name": "發才", "bgm": "", "diam": "0.5" },
        "xihongshi": { "playAnima": "18", "moveAnima": "", "icon": "xihongshi", "name": "西红柿", "bgm": "", "diam": "0.5" },
        "yan": { "playAnima": "20_To", "moveAnima": "20_Fly", "icon": "yan", "name": "点烟", "bgm": "", "diam": "0.5" },
        "zan": { "playAnima": "16", "moveAnima": "", "icon": "zan", "name": "棒", "bgm": "", "diam": "0.5" },
        // "hd_jiguanqiang01": { "playAnima": "animation", "moveAnima": "fly", "icon": "hd_jiguanqiang01", "name": "加特林", "bgm": "", "diam": "1.0" },
        // "hd_jiguanqiang01_end": { "playAnima": "animation", "moveAnima": "", "icon": "hd_jiguanqiang01_end", "name": "加特林结束", "bgm": "", "diam": "0.2" },

        "fkdd": { "playAnima": "animation", "moveAnima": "_", "icon": "fkdd", "name": "", "bgm": "", "diam": "0.5" },
        "htmm": { "playAnima": "animation", "moveAnima": "_", "icon": "htmm", "name": "", "bgm": "", "diam": "0.5" },
        "jrmn": { "playAnima": "animation", "moveAnima": "_", "icon": "jrmn", "name": "", "bgm": "", "diam": "0.5" },
        "mhsg": { "playAnima": "animation", "moveAnima": "_", "icon": "mhsg", "name": "", "bgm": "", "diam": "0.5" },
    }

    /// <summary>
    /// 一付Poker 52张
    /// </summary>
    private ALLPoker: number[];

    /// <summary>
    /// 不要大小王
    /// </summary>
    private static mNumALLPoker: number = 52;
    /// <summary>
    /// 单个用户牌的个数
    /// </summary>
    private static _NumPerUser: number = 2;

    /// <summary>
    /// 洗牌， 让所有纸牌，随机顺序
    /// </summary>
    private Shuffle() {

    }



    // #region   排序 

    /// <summary>
    /// 去掉花色 从大到小排序 
    /// </summary>
    /// <param name="paiarr"></param>
    /// <returns></returns>
    public static OrderPaiNoColor(paiarr: number[]): number[] {
        let _tempList: number[] = [];
        UIUtil.Concat(_tempList, paiarr);
        for (var i = 0; i < _tempList.length; i++) {
            if (_tempList[i] > 100) _tempList[i] %= 100;
        }
        let temparr: number[] = [];
        UIUtil.Concat(temparr, _tempList);
        temparr = temparr.sort((n1, n2) => n1 - n2);
        let _ASCList: number[] = [];
        UIUtil.Concat(_ASCList, temparr);
        _ASCList.reverse();//默认是升序反转一下就降序了
        return _ASCList;
    }
    /// <summary>
    ///  从大到小排序      保留花色
    /// </summary>
    /// <param name="paiarr"></param>
    /// <returns></returns>
    public static OrderPaiWithColor(paiarr: number[]): number[] {
        let _tempList: number[] = [];
        UIUtil.Concat(_tempList, paiarr);
        for (var i = 0; i < _tempList.length; i++) {
            if (_tempList[i] > 100) _tempList[i] %= 100;
        }
        let temparr: number[] = [];
        UIUtil.Concat(temparr, _tempList);
        temparr.sort((n1, n2) => n1 - n2);
        let _ASCList: number[] = [];
        UIUtil.Concat(_ASCList, temparr);
        _ASCList.reverse();//默认是升序反转一下就降序了

        //带上花色，有点小复杂 
        let _dicPoker2Count: Map<number, number> = this.GetPoker_Count(_ASCList);
        let _dicPoker2CountUsed: Map<number, number> = new Map<number, number>();
        for (var j = 0; j < _ASCList.length; j++) {
            if (!_dicPoker2CountUsed.has(_ASCList[j])) _dicPoker2CountUsed.set(_ASCList[j], 1);

            for (var c = _dicPoker2CountUsed.get(_ASCList[j]); c <= 4; c++) {
                _dicPoker2CountUsed.set(_ASCList[j], _dicPoker2CountUsed.get(_ASCList[j]) + 1);
                if (paiarr.indexOf(_ASCList[j] + 100 * c) >= 0) {
                    _ASCList[j] = _ASCList[j] + 100 * c;
                    break;
                }
            }
        }
        return _ASCList;
    }

    /// <summary>
    ///    带上花色，从手牌中查找       传入的参数都是排序过的
    /// </summary>
    /// <param name="_shoupai"></param>
    /// <param name="pokervalue"></param>
    /// <returns></returns>
    public static GetPaiColor(_shoupai: number[], pokervalue: number[]): number[] {
        let _ASCList: number[] = [];
        UIUtil.Concat(_ASCList, pokervalue);
        //带上花色，有点小复杂 
        let _dicPoker2Count: Map<number, number> = this.GetPoker_Count(_ASCList);
        let _dicPoker2CountUsed: Map<number, number> = new Map<number, number>();
        for (var j = 0; j < _ASCList.length; j++) {
            if (!_dicPoker2CountUsed.has(_ASCList[j])) _dicPoker2CountUsed.set(_ASCList[j], 1);

            for (var c = _dicPoker2CountUsed.get(_ASCList[j]); c <= 4; c++) {
                _dicPoker2CountUsed.set(_ASCList[j], _dicPoker2CountUsed.get(_ASCList[j]) + 1);
                if (_shoupai.indexOf(_ASCList[j] + 100 * c) >= 0) {
                    _ASCList[j] = _ASCList[j] + 100 * c;
                    break;
                }
            }
        }
        return _ASCList;
    }

    //获取花色
    public static GetCardColor(cbCardData: number): number {
        return cbCardData / 100;
    }

    public static GetPoker_Count(paiList: number[]): Map<number, number> {
        let _dicPoker2Count: Map<number, number> = new Map<number, number>();
        paiList.forEach(poke => {
            if (_dicPoker2Count.has(poke)) _dicPoker2Count.set(poke, _dicPoker2Count.get(poke) + 1);
            else _dicPoker2Count.set(poke, 1);
        });
        return _dicPoker2Count;
    }

    /// <summary>
    ///  是否同花 
    /// </summary>
    /// <param name="cardlist">===***需要带花色的牌***===</param>
    /// <returns></returns>
    public static IsFlush(cardlist: number[]): boolean {
        let _isflush = true;
        let flush0 = UIUtil.NumberToInt(cardlist[0] / 100);
        for (var i = 1; i < cardlist.length; i++) {
            if (flush0 != UIUtil.NumberToInt(cardlist[i] / 100)) {
                _isflush = false;
            }
        }

        return _isflush;
    }
    /// <summary> 
    /// 判断牌组是否为顺子  支持3个以前的顺子判断
    /// </summary> 
    /// <param name="PG">牌组 需要去色与从大到小排序</param> 
    /// <returns>是否为顺子</returns> 
    public static IsStraight(PG: number[]): boolean {
        let _IsStraight = false;
        for (var i = 0; i < PG.length - 1; i++) {
            if (PG[i] - 1 == PG[i + 1]) _IsStraight = true;
            else {
                _IsStraight = false;
                break;
            }
        }
        if (!_IsStraight) {//14 转 1 针对特殊顺子处理
            let _tempArr: number[] = [];
            UIUtil.Concat(_tempArr, PG);
            for (var i = 0; i < _tempArr.length; i++) {
                if (_tempArr[i] == 14) _tempArr[i] = 1;
            }
            _tempArr = this.OrderPaiNoColor(_tempArr);//需要从大到小排序一下
            for (var i = 0; i < _tempArr.length - 1; i++) {
                if (_tempArr[i] - 1 == _tempArr[i + 1]) _IsStraight = true;
                else {
                    _IsStraight = false;
                    break;
                }
            }
        }
        return _IsStraight;
    }
    /// <summary> 
    /// 判断牌组是否为顺子  123   14,3,2
    /// </summary> 
    /// <param name="PG">牌组</param> 
    /// <returns>是否为顺子</returns> 
    private static IsSunZhi123(cardlist: number[]): boolean {
        if (cardlist[0] == 14 && cardlist[1] == 3 && cardlist[2] == 2) return true;
        return false;
    }


    //获取类型:
    public static GetTexasType(shoupai: number[]): PokerTexasType {
        let _shoupai: number[] = [];
        UIUtil.Concat(_shoupai, shoupai);
        if (_shoupai.length < 2) return PokerTexasType.Error;//之前是5张显示牌型，现在是发2张牌后就要显示自己的牌型 ,2张手牌只显示高牌和一对
        let cbSameColor: boolean = Texas.IsFlush(_shoupai);
        let _tempNoColor: number[] = this.OrderPaiNoColor(_shoupai);
        let cbLineCard = this.IsStraight(_tempNoColor);

        if (cbSameColor && cbLineCard && _shoupai.length > 2) {
            if (Math.max.apply(null, _tempNoColor) == 14 && Math.max.apply(null, _tempNoColor) == 10) {
                return PokerTexasType.Five_Flush_RoyalStraight;
            }
            else return PokerTexasType.Five_Flush_Straight;
        }
        if ((cbSameColor == false) && (cbLineCard == true) && _shoupai.length > 2) return PokerTexasType.Five_Straight;
        if ((cbSameColor == true) && (cbLineCard == false) && _shoupai.length > 2) return PokerTexasType.Five_Flush;

        //扑克分析
        let _splitHelper: TexasSplitHelper = new TexasSplitHelper();
        _splitHelper.Split(_shoupai);
        //类型判断
        if (_splitHelper._four.length == 1 && _shoupai.length > 2) return PokerTexasType.Five_Bomb;
        if ((_splitHelper._three.length == 1) && (_splitHelper._two.length == 2) && _shoupai.length > 2) return PokerTexasType.Five_THREE_TWO;
        if ((_splitHelper._three.length == 1) && (_splitHelper._two.length == 1) && _shoupai.length > 2) return PokerTexasType.Five_THREE;
        if (_splitHelper._two.length == 2 && _shoupai.length > 2) return PokerTexasType.Five_TWO_PAIR;
        if ((_splitHelper._two.length == 1) && (_splitHelper._one.length == _shoupai.length - 1)) return PokerTexasType.Five_ONE_PAIR;//两张牌的时候可能是一对
        return PokerTexasType.Five_Single;
    }

    //最大牌型
    public static GetFiveFromSeven(cbHandCardData: number[], cbCenterCardData: number[], allCount: number = 7): number[] {
        let cbTempCardData: number[] = [];//临时变量
        UIUtil.Concat(cbTempCardData, cbHandCardData);
        UIUtil.Concat(cbTempCardData, cbCenterCardData);
        if (cbTempCardData.length != allCount || cbTempCardData.length < 2) return [];//之前是5张显示牌型，现在是发2张牌后就要显示自己的牌型 

        let _tempCardCompare = this.OrderPaiWithColor(cbTempCardData);

        let cbLastCardData = [];
        if (_tempCardCompare.length < 5) {
            UIUtil.Concat(cbLastCardData, _tempCardCompare);
        } else {
            cbLastCardData.push(_tempCardCompare[0]);
            cbLastCardData.push(_tempCardCompare[1]);
            cbLastCardData.push(_tempCardCompare[2]);
            cbLastCardData.push(_tempCardCompare[3]);
            cbLastCardData.push(_tempCardCompare[4]);
        }
        let cbCardKind: PokerTexasType = this.GetTexasType(cbTempCardData);
        let cbTempCardKind: PokerTexasType = 0;

        let cbTempLastCardData: number[] = [0, 0, 0, 0, 0];//只做初始暂位用
        //组合算法
        for (var i = 0; i < allCount - 4; i++) {
            for (var j = i + 1; j < allCount - 3; j++) {
                for (var k = j + 1; k < allCount - 2; k++) {
                    for (var l = k + 1; l < allCount - 1; l++) {
                        for (var m = l + 1; m < allCount; m++) {   //获取数据
                            cbTempLastCardData[0] = _tempCardCompare[i];
                            cbTempLastCardData[1] = _tempCardCompare[j];
                            cbTempLastCardData[2] = _tempCardCompare[k];
                            cbTempLastCardData[3] = _tempCardCompare[l];
                            cbTempLastCardData[4] = _tempCardCompare[m];

                            cbTempCardKind = this.GetTexasType(cbTempLastCardData);//获取牌型

                            //牌型大小
                            if (this.ComparePoker_nn(cbTempLastCardData, cbLastCardData) == TexasEnmuResult.Win) {
                                cbCardKind = cbTempCardKind;
                                cbLastCardData = []
                                UIUtil.Concat(cbLastCardData, cbTempLastCardData);
                            }
                        }
                    }
                }
            }
        }

        return cbLastCardData;
    }

    /// <summary>
    /// 相同牌型牌值平分
    /// </summary>
    /// <param name="applycard"></param>
    /// <param name="cardlist"></param>
    /// <returns></returns>
    public static ComparePoker_nn(applycard: number[], cardlist: number[]): TexasEnmuResult {
        let _applytype: PokerTexasType = this.GetTexasType(applycard);
        let _type: PokerTexasType = this.GetTexasType(cardlist);
        return this.ComparePoker(applycard, _applytype, cardlist, _type);
    }
    /// <summary>
    /// applycard 表示申请比牌的人
    /// </summary>
    /// <param name="applycard"></param>
    /// <param name="_applytype"></param>
    /// <param name="cardlist"></param>
    /// <param name="_type"></param>
    /// <returns></returns>
    private static ComparePoker(applycard: number[], _applytype: PokerTexasType, cardlist: number[], _type: PokerTexasType): TexasEnmuResult {
        if (_applytype > _type) return TexasEnmuResult.Win;
        else if (_applytype < _type) return TexasEnmuResult.Lost;
        else {   //相同类型 需要根据规则再处理一次，  
            let _tapplyList: number[] = this.OrderPaiNoColor(applycard);
            let _targetCardList: number[] = this.OrderPaiNoColor(cardlist);
            switch (_applytype) {
                case PokerTexasType.Five_Single:
                case PokerTexasType.Five_Flush:
                    return this.CompareListOneByOne(_tapplyList, _targetCardList);
                case PokerTexasType.Five_Straight:
                case PokerTexasType.Five_Flush_Straight:
                    _tapplyList = this.DealA2345(_tapplyList);
                    _targetCardList = this.DealA2345(_targetCardList);
                    return this.CompareListOneByOne(_tapplyList, _targetCardList);
                case PokerTexasType.Five_ONE_PAIR:
                    let _applyMoreOne_P1: number[] = this.GetMoreOneList(_tapplyList);
                    let _targetMoreOne_P1: number[] = this.GetMoreOneList(_targetCardList);
                    let _tempPair1: TexasEnmuResult = this.CompareListOneByOne(_applyMoreOne_P1, _targetMoreOne_P1, 1);
                    if (_tempPair1 == TexasEnmuResult.Draw) {
                        let _applyOnlyOne: number[] = this.GetOnlyOneList(_tapplyList);
                        let _targetOnlyOne: number[] = this.GetOnlyOneList(_targetCardList);
                        return this.CompareListOneByOne(_applyOnlyOne, _targetOnlyOne, 3);
                    }
                    else
                        return _tempPair1;
                case PokerTexasType.Five_TWO_PAIR:
                    let _applyMoreOne_P2: number[] = this.GetMoreOneList(_tapplyList);
                    let _targetMoreOne_P2: number[] = this.GetMoreOneList(_targetCardList);
                    let _tempPair2: TexasEnmuResult = this.CompareListOneByOne(_applyMoreOne_P2, _targetMoreOne_P2, 2);
                    if (_tempPair2 == TexasEnmuResult.Draw) {
                        let _applyOnlyOne = this.GetOnlyOneList(_tapplyList);
                        let _targetOnlyOne = this.GetOnlyOneList(_targetCardList);
                        return this.CompareListOneByOne(_applyOnlyOne, _targetOnlyOne, 1);
                    }
                    else
                        return _tempPair2;
                case PokerTexasType.Five_THREE:
                case PokerTexasType.Five_THREE_TWO://Texas因为有公牌 可能一样的牌，需要进行对子比较
                    let _applyMoreOne_3: number[] = this.GetMoreOneList(_tapplyList, 3);
                    let _targetMoreOne_3: number[] = this.GetMoreOneList(_targetCardList, 3);
                    let _tempPair3: TexasEnmuResult = this.CompareListOneByOne(_applyMoreOne_3, _targetMoreOne_3, 1);
                    if (_tempPair3 == TexasEnmuResult.Draw) {
                        let _applyMoreOne_2: number[] = this.GetMoreOneList(_tapplyList, 2);
                        let _targetMoreOne_2: number[] = this.GetMoreOneList(_targetCardList, 2);
                        return this.CompareListOneByOne(_applyMoreOne_2, _targetMoreOne_2, 1);
                    }
                    else
                        return _tempPair3;
                case PokerTexasType.Five_Bomb://Texas因为有公牌 需要再次比较
                    let _applyMoreOne_4: number[] = this.GetMoreOneList(_tapplyList, 4);
                    let _targetMoreOne_4: number[] = this.GetMoreOneList(_targetCardList, 4);
                    let _tempPair4: TexasEnmuResult = this.CompareListOneByOne(_applyMoreOne_4, _targetMoreOne_4, 1);
                    if (_tempPair4 == TexasEnmuResult.Draw) {
                        let _applyOnlyOne: number[] = this.GetOnlyOneList(_tapplyList);
                        let _targetOnlyOne: number[] = this.GetOnlyOneList(_targetCardList);
                        return this.CompareListOneByOne(_applyOnlyOne, _targetOnlyOne, 1);
                    }
                    else
                        return _tempPair4;
                default:
                    return TexasEnmuResult.Draw;
            }
        }
    }

    /// <summary>
    /// 一样大 平局不需要比花色
    /// </summary>
    /// <param name="applycard">从大到小排序 没有花色</param>
    /// <param name="cardlist">从大到小排序 没有花色</param>
    /// <returns></returns>
    private static CompareListOneByOne(applylist: number[], cardlist: number[], CompareLen = 5): TexasEnmuResult {
        if (applylist[0] > cardlist[0]) return TexasEnmuResult.Win;
        else if (applylist[0] < cardlist[0]) return TexasEnmuResult.Lost;
        else {
            if (CompareLen == 1) {
                return TexasEnmuResult.Draw;
            }
            else {
                if (applylist[1] > cardlist[1]) return TexasEnmuResult.Win;
                else if (applylist[1] < cardlist[1]) return TexasEnmuResult.Lost;
                else {
                    if (CompareLen == 2) {
                        return TexasEnmuResult.Draw;
                    }
                    else {
                        if (applylist[2] > cardlist[2]) return TexasEnmuResult.Win;
                        else if (applylist[2] < cardlist[2]) return TexasEnmuResult.Lost;
                        else {
                            if (CompareLen == 3) {
                                return TexasEnmuResult.Draw;
                            }
                            else {
                                if (applylist[3] > cardlist[3]) return TexasEnmuResult.Win;
                                else if (applylist[3] < cardlist[3]) return TexasEnmuResult.Lost;
                                else {
                                    if (applylist[4] > cardlist[4]) return TexasEnmuResult.Win;
                                    else if (applylist[4] < cardlist[4]) return TexasEnmuResult.Lost;
                                    else {
                                        return TexasEnmuResult.Draw;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    /// <summary>
    /// A2345转成12345
    /// </summary>
    /// <param name="applycard">需要去色，排序，从大到小，</param> 
    /// <returns></returns>
    private static DealA2345(shouPai: number[]): number[] {
        if (shouPai[0] == 14 && shouPai[1] == 5 && shouPai[2] == 4 && shouPai[3] == 3 && shouPai[4] == 2) {
            let s12345: number[] = shouPai;
            s12345[0] = 1;//需要比较成最小的
            s12345 = this.OrderPaiNoColor(s12345);
            return s12345;
        }
        return shouPai;
    }

    /// <summary>
    ///     
    /// </summary>
    /// <param name="_shouPai">需要去色，排序，从大到小，</param>
    /// <param name="_num"></param>
    /// <returns></returns>
    private static GetMoreOneList(_shouPai: number[], _num = 2): number[] {
        let _splitHelper: TexasSplitHelper = new TexasSplitHelper();
        _splitHelper.Split(_shouPai);
        let _retList: number[] = [];
        switch (_num) {
            case 2:
                _retList = _splitHelper._two;
                break;
            case 3:
                _retList = _splitHelper._three;
                break;
            case 4:
                _retList = _splitHelper._four;
                break;
            default: break;
        }
        return _retList;
    }

    /// <summary>
    ///     
    /// </summary>
    /// <param name="_shouPai">需要去色，排序，从大到小，</param>
    /// <param name="_num"></param>
    /// <returns></returns>
    private static GetOnlyOneList(_shouPai: number[]): number[] {
        let _splitHelper: TexasSplitHelper = new TexasSplitHelper();
        _splitHelper.Split(_shouPai);
        let _retList: number[] = _splitHelper._onlyOne;
        return _retList;
    }


    private static _dicType2String: DicHelper[] = [];

    public static GetNameByType(_type: PokerTexasType): string {
        if (this._dicType2String.length == 0) {
            this._dicType2String.push(new DicHelper(PokerTexasType.Five_Single, "高牌"));
            this._dicType2String.push(new DicHelper(PokerTexasType.Five_ONE_PAIR, "一对"));
            this._dicType2String.push(new DicHelper(PokerTexasType.Five_TWO_PAIR, "两对"));
            this._dicType2String.push(new DicHelper(PokerTexasType.Five_THREE, "三条"));
            this._dicType2String.push(new DicHelper(PokerTexasType.Five_Straight, "顺子"));
            this._dicType2String.push(new DicHelper(PokerTexasType.Five_Flush, "同花"));
            this._dicType2String.push(new DicHelper(PokerTexasType.Five_THREE_TWO, "葫芦"));
            this._dicType2String.push(new DicHelper(PokerTexasType.Five_Bomb, "四条"));
            this._dicType2String.push(new DicHelper(PokerTexasType.Five_Flush_Straight, "同花顺"));
            this._dicType2String.push(new DicHelper(PokerTexasType.Five_Flush_RoyalStraight, "皇家同花顺"));

        }
        var name = this._dicType2String.find((_dh) => { return _dh._t == _type; });
        if (name == null) {
            console.log("  error type:" + _type.toString());
            return "";
        }
        return name._name;
        return "";
    }
    public static GetTexasName(cards: number[]): string {
        var _type = this.GetTexasType(cards);
        return this.GetNameByType(_type);
    }

    public static GetMaxTypeCards(cards: number[]): number[] {
        let tempCards: number[] = []
        switch (this.GetTexasType(cards)) {
            case PokerTexasType.Five_Single:

                break;
            case PokerTexasType.Five_ONE_PAIR:
                tempCards = this.GetSameValeCards(cards, 2);
                break;
            case PokerTexasType.Five_TWO_PAIR:
                tempCards = this.GetSameValeCards(cards, 2);
                break;
            case PokerTexasType.Five_THREE:
                tempCards = this.GetSameValeCards(cards, 3);
                break;
            case PokerTexasType.Five_Straight:
                UIUtil.Concat(tempCards, cards);
                break;
            case PokerTexasType.Five_Flush:
                UIUtil.Concat(tempCards, cards);
                break;
            case PokerTexasType.Five_THREE_TWO:
                UIUtil.Concat(tempCards, cards);
                break;
            case PokerTexasType.Five_Bomb:
                tempCards = this.GetSameValeCards(cards, 4);
                break;
            case PokerTexasType.Five_Flush_Straight:
                UIUtil.Concat(tempCards, cards);
                break;
            case PokerTexasType.Five_Flush_RoyalStraight:
                UIUtil.Concat(tempCards, cards);
                break;
            case PokerTexasType.Error:
                break;
        }
        return tempCards;
    }

    private static GetSameValeCards(cards: number[], sameCount: number): number[] {
        let tempCards: number[] = [];

        let tempDic: Map<number, number[]> = new Map<number, number[]>();
        cards.forEach(poke => {
            let key = UIUtil.NumberToInt(poke % 100);
            if (tempDic.has(key))
                tempDic.get(key).push(poke);
            else {
                let cardList: number[] = [];
                cardList.push(poke);
                tempDic.set(key, cardList);
            }
        });

        tempDic.forEach(temp => {
            if (temp.length == sameCount)
                UIUtil.Concat(tempCards, temp);
        });
        return tempCards;
    }
    public static getPlayerPosType(pos: number, bpos: number, tList: TexUserInfoSD[]): string {
        let posType = "";
        this.curPos = [];
        if (tList == null || tList.length <= 0) return posType;
        switch (tList.length) {
            case 2:
                this.curPos = this.twoPos;
                break;
            case 3:
                this.curPos = this.threePos;
                break;
            case 4:
                this.curPos = this.fourPos;
                break;
            case 5:
                this.curPos = this.fivePos;
                break;
            case 6:
                this.curPos = this.sixPos;
                break;
            case 7:
                this.curPos = this.sevenPos;
                break;
            case 8:
                this.curPos = this.eightPos;
                break;
            case 9:
                this.curPos = this.ninePos;
                break;
        }
        let hpos = this.GetHandlePos(pos, bpos, tList);
        if (this.curPos == null || this.curPos.length <= 0 || this.curPos.length < hpos || hpos <= 0) return posType;
        else return this.curPos[hpos - 1];
    }

    private static GetHandlePos(pos: number, bpos: number, tList: TexUserInfoSD[]): number {
        let hPos = 0;
        let curUser: TexUserInfoSD = tList.find(item => { return item.pos == pos });
        let bUser: TexUserInfoSD = tList.find(item => { return item.pos == bpos });

        if (tList == null || tList.length < 2 || curUser == null || bUser == null) return hPos;
        let newList: TexUserInfoSD[] = [];
        newList = tList;
        newList.sort((x, y) => { return x.pos - y.pos; });
        let sPos = 0;
        let bIndx: number = newList.findIndex(item => item.pos == bpos);
        let cIndx: number = newList.findIndex(item => item.pos == pos);
        if (newList.length == 2) {
            sPos = bIndx;
        }
        else {
            sPos = bIndx - 1 >= 0 ? bIndx - 1 : bIndx - 1 + newList.length;

        }
        hPos = sPos - cIndx < 0 ? sPos - cIndx + newList.length + 1 : sPos - cIndx + 1;
        return hPos;
    }

    //微小房间保留小数
    public static formatNumber100(_val: number): number {
        let brate = F_TexasViewCtr.instance.Model.brate;
        if (brate >= 100) {
            return UIUtil.NumberToInt(_val / 100);
        } else {
            return UIUtil.formatNumber100(_val);
        }
    }
}

export class TexasSplitHelper {
    /// <summary>
    /// 没有颜色的
    /// </summary>
    public _shouPai: number[];
    public _shouPaiColor: number[];

    public _onlyOne: number[] = [];
    /// <summary>
    /// 散牌，A，2，3，4，5 不算散牌了  个数为1且不在连子中。
    /// </summary>
    public _uron5One: number[] = [];
    public _uron5OneColor: number[] = [];
    //基础结构 
    public _one: number[] = [];
    public _two: number[] = [];
    public _three: number[] = [];
    public _four: number[] = [];

    public _straight: number[][] = [];  //连子 从3~A的最长单连   可能是两个连子

    public _dicColor2List: Map<number, number[]> = new Map<number, number[]>();
    public Split(shoupai: number[]) {
        this._shouPaiColor = [];
        UIUtil.Concat(this._shouPaiColor, shoupai);
        this.SearchColor();
        this._shouPai = [];
        UIUtil.Concat(this._shouPai, shoupai);
        this._shouPai = Texas.OrderPaiNoColor(this._shouPai);
        this.SearchBase();

        this._straight = [];
        this.SearchStraight();
        this.SearchStraightA();

        this._uron5One = [];
        this.SearchUnron();
    }

    public SearchColor() {
        this._shouPaiColor.forEach(pai => {
            let _color = Texas.GetCardColor(pai);
            if (!this._dicColor2List.has(_color)) this._dicColor2List.set(_color, []);
            this._dicColor2List.get(_color).push(pai);
        });
    }
    //分成四个数组
    public SearchBase() {
        let _dicPoker2Count: Map<number, number> = Texas.GetPoker_Count(this._shouPai);
        let _temp: number[] = [];
        _dicPoker2Count.forEach((value, key) => {
            if (_dicPoker2Count.get(key) == 4) {
                this._one.push(key);
                this._two.push(key);
                this._three.push(key);
                this._four.push(key);
            }
            else if (_dicPoker2Count.get(key) == 3) {
                this._one.push(key);
                this._two.push(key);
                this._three.push(key);
            }
            else if (_dicPoker2Count.get(key) == 2) {
                this._one.push(key);
                this._two.push(key);
            }
            else if (_dicPoker2Count.get(key) == 1) {
                this._one.push(key);
                this._onlyOne.push(key);
            }
        });
        this._one = Texas.OrderPaiNoColor(this._one);
        this._two = Texas.OrderPaiNoColor(this._two);
        this._three = Texas.OrderPaiNoColor(this._three);
        this._four = Texas.OrderPaiNoColor(this._four);
    }

    /// <summary>
    /// 
    /// </summary>
    private SearchStraight() {
        if (this._shouPai.length < 5) return;//不足5个牌就不处理的    
        let _tempone: number[] = this._one;
        let _minStraight: number[] = [];
        for (var i = 0; i < _tempone.length - 1; i++) {
            if (_tempone[i] - 1 == _tempone[i + 1]) {
                _minStraight.push(_tempone[i]);
                if (i + 1 == _tempone.length - 1) _minStraight.push(_tempone[i + 1]);//最后一个要加上
            }
            else {//可能会出现刚才好5个，而后还有牌，搜索不到
                _minStraight.push(_tempone[i]);
                if (_minStraight.length >= 5) this._straight.push(_minStraight);
                _minStraight = [];
            }
        }
        if (_minStraight.length >= 5) this._straight.push(_minStraight);//最后一组必须加进去 不然一个长连子没搜索到
    }
    /// <summary>
    /// 只处理A2345   
    /// </summary>
    private SearchStraightA() {
        if (this._shouPai.length < 5) return;//不足5个牌就不处理的  
        if (this._shouPai.indexOf(14) == -1) return;//没有A就不处理了
        let _tempShouPai: number[] = this._shouPai;
        for (var i = 0; i < _tempShouPai.length - 1; i++) {
            if (_tempShouPai[i] == 14) _tempShouPai[i] = 1;
        }

        let _minStraight: number[] = [];
        for (var i = 0; i < _tempShouPai.length - 1; i++) {
            if (_tempShouPai[i] - 1 == _tempShouPai[i + 1]) {
                _minStraight.push(_tempShouPai[i]);
                if (i + 1 == _tempShouPai.length - 1) _minStraight.push(_tempShouPai[i + 1]);//最后一个要加上
            }
            else {//可能会出现刚才好5个，而后还有牌，搜索不到
                _minStraight.push(_tempShouPai[i]);
                if (_minStraight.length >= 5) this._straight.push(_minStraight);
                _minStraight = [];
            }
        }
        if (_minStraight.length >= 5 && _minStraight.indexOf(1) >= 0) {
            for (var i = 0; i < _tempShouPai.length - 1; i++) {
                if (_tempShouPai[i] == 1) _tempShouPai[i] = 14;
            }
            this._straight.push(_minStraight);//最后一组必须加进去 不然一个长连子没搜索到
        }
    }
    /// <summary>
    /// 搜索散牌 个数不能大于1，不在连子中。
    /// </summary>
    private SearchUnron() {
        let _tempUnron: number[] = this._onlyOne;
        this._straight.forEach(_tempStraight => {
            _tempStraight.forEach(_cardVal => {
                if (_tempUnron.indexOf(_cardVal) >= 0) _tempUnron.splice(_tempUnron.indexOf(_cardVal), 1);
            });
        });
        this._uron5One = _tempUnron;
        this._uron5OneColor = this._uron5One;
        for (var i = 0; i < this._uron5OneColor.length; i++) {
            this._shouPaiColor.forEach(_cl => {
                if (_cl % 100 == this._uron5OneColor[i]) {
                    this._uron5OneColor[i] = _cl;
                }
            });
        }
    }
    public GetMinUnron(): number {
        if (this._uron5OneColor.length < 0) return 0;
        let _temp: number[] = Texas.OrderPaiNoColor(this._uron5One);
        let _minCard = _temp[_temp.length - 1];
        return _minCard;
    }
}

/// <summary>
///  同花顺〉四条〉三条+一对〉同花〉顺〉三条〉两条〉一对〉大无赖
/// </summary>
export enum PokerTexasType {
    //扑克类型
    Error = 0,
    Five_Single = 1,// 单张 专业也叫高牌牌型
    Five_ONE_PAIR = 2,    //一对牌型
    Five_TWO_PAIR = 3,    //两对牌型
    Five_THREE = 4,       //三条牌型
    Five_Straight = 5,    //顺子牌型
    Five_Flush = 6,       //同花牌型
    Five_THREE_TWO = 7,   //葫芦牌型
    Five_Bomb = 8,        //四条牌型
    Five_Flush_Straight = 9,     //同花顺牌型
    Five_Flush_RoyalStraight = 10,  //皇家同花顺牌型
}
export enum TexasEnmuResult {
    Draw = 0,
    Lost = 1,
    Win = 2
}
export enum TexasTurnEnum {
    Init = -1,
    /// <summary>
    /// 盲注阶段 手牌数为0--小盲当庄：自动压房间低分的一分 大盲注为小盲注的下家，自动压房间的最低分，从小盲注开始发牌，Token交给大盲注
    /// </summary>
    Turn1_0 = 1,
    /// <summary>
    /// 手牌数为2+3 公开牌为数为3  
    /// </summary>
    Turn2_3 = 2,
    /// <summary>
    /// 手牌数为2+4 公开牌为数为4  
    /// </summary>
    Turn3_4 = 3,
    /// <summary>
    /// 手牌数为2+5 公开牌为数为5 
    /// </summary>
    Turn4_5 = 4,
    /// <summary>
    /// 比牌状态了
    /// </summary>
    TrunCompare = 5,
}
export enum TexasTurnActionEnum {
    Init = -1,
    /// <summary>
    /// 小盲
    /// </summary>
    sb = 1,
    /// <summary>
    /// 大盲
    /// </summary>
    bb = 2,
    /// <summary>
    /// stradlle
    /// </summary>
    stradlle = 3,
    /// <summary>
    /// 跟
    /// </summary>
    call = 4,
    /// <summary>
    /// 弃牌
    /// </summary>
    fold = 5,
    /// <summary>
    /// allin
    /// </summary>
    allin = 6,
    /// <summary>
    /// 让牌
    /// </summary>
    Check = 7,
    /// <summary>
    /// 加注 2/3
    /// </summary>
    B2_3 = 8,
    /// <summary>
    /// 加注 1/2 
    /// </summary>
    B1_2 = 9,
    /// <summary>
    /// 加注 1
    /// </summary>
    B1 = 10,
    /// <summary>
    /// 全部加注操作
    /// </summary>
    B = 11,
    /// <summary>
    /// 比牌
    /// </summary>
    showdonw = 15,
    /// <summary>
    /// 保险类型 可能需要详细的保险流程
    /// </summary>
    Ins = 20,
}

export class DicHelper {
    constructor(t: PokerTexasType, name: string) {
        this._t = t;
        this._name = name;
        return this;
    }
    public _t: PokerTexasType;
    public _name: string;
}

