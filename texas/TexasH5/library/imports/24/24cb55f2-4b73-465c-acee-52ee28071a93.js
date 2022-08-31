"use strict";
cc._RF.push(module, '24cb5XyS3NGXKzuUu4oBxqT', 'TexasBase');
// GameHall/script/Lobby/career/TexasBase.ts

"use strict";
/// <summary>
/// 德州扑克牌的数据类   
Object.defineProperty(exports, "__esModule", { value: true });
exports.DicHelper = exports.TexasTurnActionEnum = exports.TexasTurnEnum = exports.TexasEnmuResult = exports.PokerTexasType = exports.TexasSplitHelper = exports.TexasBase = void 0;
var UIUtil_1 = require("../../../../Script/Common/UIUtil");
/// </summary>
var TexasBase = /** @class */ (function () {
    function TexasBase() {
    }
    /// <summary>
    /// 洗牌， 让所有纸牌，随机顺序
    /// </summary>
    TexasBase.prototype.Shuffle = function () {
    };
    // #region   排序 
    /// <summary>
    /// 去掉花色 从大到小排序 
    /// </summary>
    /// <param name="paiarr"></param>
    /// <returns></returns>
    TexasBase.OrderPaiNoColor = function (paiarr) {
        var _tempList = [];
        UIUtil_1.UIUtil.Concat(_tempList, paiarr);
        for (var i = 0; i < _tempList.length; i++) {
            if (_tempList[i] > 100)
                _tempList[i] %= 100;
        }
        var temparr = [];
        UIUtil_1.UIUtil.Concat(temparr, _tempList);
        temparr = temparr.sort(function (n1, n2) { return n1 - n2; });
        var _ASCList = [];
        UIUtil_1.UIUtil.Concat(_ASCList, temparr);
        _ASCList.reverse(); //默认是升序反转一下就降序了
        return _ASCList;
    };
    /// <summary>
    ///  从大到小排序      保留花色
    /// </summary>
    /// <param name="paiarr"></param>
    /// <returns></returns>
    TexasBase.OrderPaiWithColor = function (paiarr) {
        var _tempList = [];
        UIUtil_1.UIUtil.Concat(_tempList, paiarr);
        for (var i = 0; i < _tempList.length; i++) {
            if (_tempList[i] > 100)
                _tempList[i] %= 100;
        }
        var temparr = [];
        UIUtil_1.UIUtil.Concat(temparr, _tempList);
        temparr.sort(function (n1, n2) { return n1 - n2; });
        var _ASCList = [];
        UIUtil_1.UIUtil.Concat(_ASCList, temparr);
        _ASCList.reverse(); //默认是升序反转一下就降序了
        //带上花色，有点小复杂 
        var _dicPoker2Count = this.GetPoker_Count(_ASCList);
        var _dicPoker2CountUsed = new Map();
        for (var j = 0; j < _ASCList.length; j++) {
            if (!_dicPoker2CountUsed.has(_ASCList[j]))
                _dicPoker2CountUsed.set(_ASCList[j], 1);
            for (var c = _dicPoker2CountUsed.get(_ASCList[j]); c <= 4; c++) {
                _dicPoker2CountUsed.set(_ASCList[j], _dicPoker2CountUsed.get(_ASCList[j]) + 1);
                if (paiarr.indexOf(_ASCList[j] + 100 * c) >= 0) {
                    _ASCList[j] = _ASCList[j] + 100 * c;
                    break;
                }
            }
        }
        return _ASCList;
    };
    /// <summary>
    ///    带上花色，从手牌中查找       传入的参数都是排序过的
    /// </summary>
    /// <param name="_shoupai"></param>
    /// <param name="pokervalue"></param>
    /// <returns></returns>
    TexasBase.GetPaiColor = function (_shoupai, pokervalue) {
        var _ASCList = [];
        UIUtil_1.UIUtil.Concat(_ASCList, pokervalue);
        //带上花色，有点小复杂 
        var _dicPoker2Count = this.GetPoker_Count(_ASCList);
        var _dicPoker2CountUsed = new Map();
        for (var j = 0; j < _ASCList.length; j++) {
            if (!_dicPoker2CountUsed.has(_ASCList[j]))
                _dicPoker2CountUsed.set(_ASCList[j], 1);
            for (var c = _dicPoker2CountUsed.get(_ASCList[j]); c <= 4; c++) {
                _dicPoker2CountUsed.set(_ASCList[j], _dicPoker2CountUsed.get(_ASCList[j]) + 1);
                if (_shoupai.indexOf(_ASCList[j] + 100 * c) >= 0) {
                    _ASCList[j] = _ASCList[j] + 100 * c;
                    break;
                }
            }
        }
        return _ASCList;
    };
    //获取花色
    TexasBase.GetCardColor = function (cbCardData) {
        return cbCardData / 100;
    };
    TexasBase.GetPoker_Count = function (paiList) {
        var _dicPoker2Count = new Map();
        paiList.forEach(function (poke) {
            if (_dicPoker2Count.has(poke))
                _dicPoker2Count.set(poke, _dicPoker2Count.get(poke) + 1);
            else
                _dicPoker2Count.set(poke, 1);
        });
        return _dicPoker2Count;
    };
    /// <summary>
    ///  是否同花 
    /// </summary>
    /// <param name="cardlist">===***需要带花色的牌***===</param>
    /// <returns></returns>
    TexasBase.IsFlush = function (cardlist) {
        var _isflush = true;
        var flush0 = UIUtil_1.UIUtil.NumberToInt(cardlist[0] / 100);
        for (var i = 1; i < cardlist.length; i++) {
            if (flush0 != UIUtil_1.UIUtil.NumberToInt(cardlist[i] / 100)) {
                _isflush = false;
            }
        }
        return _isflush;
    };
    /// <summary> 
    /// 判断牌组是否为顺子  支持3个以前的顺子判断
    /// </summary> 
    /// <param name="PG">牌组 需要去色与从大到小排序</param> 
    /// <returns>是否为顺子</returns> 
    TexasBase.IsStraight = function (PG) {
        var _IsStraight = false;
        for (var i = 0; i < PG.length - 1; i++) {
            if (PG[i] - 1 == PG[i + 1])
                _IsStraight = true;
            else {
                _IsStraight = false;
                break;
            }
        }
        if (!_IsStraight) { //14 转 1 针对特殊顺子处理
            var _tempArr = [];
            UIUtil_1.UIUtil.Concat(_tempArr, PG);
            for (var i = 0; i < _tempArr.length; i++) {
                if (_tempArr[i] == 14)
                    _tempArr[i] = 1;
            }
            _tempArr = this.OrderPaiNoColor(_tempArr); //需要从大到小排序一下
            for (var i = 0; i < _tempArr.length - 1; i++) {
                if (_tempArr[i] - 1 == _tempArr[i + 1])
                    _IsStraight = true;
                else {
                    _IsStraight = false;
                    break;
                }
            }
        }
        return _IsStraight;
    };
    /// <summary> 
    /// 判断牌组是否为顺子  123   14,3,2
    /// </summary> 
    /// <param name="PG">牌组</param> 
    /// <returns>是否为顺子</returns> 
    TexasBase.IsSunZhi123 = function (cardlist) {
        if (cardlist[0] == 14 && cardlist[1] == 3 && cardlist[2] == 2)
            return true;
        return false;
    };
    //获取类型:
    TexasBase.GetTexasType = function (shoupai) {
        var _shoupai = [];
        UIUtil_1.UIUtil.Concat(_shoupai, shoupai);
        if (_shoupai.length < 2)
            return PokerTexasType.Error; //之前是5张显示牌型，现在是发2张牌后就要显示自己的牌型 ,2张手牌只显示高牌和一对
        var cbSameColor = TexasBase.IsFlush(_shoupai);
        var _tempNoColor = this.OrderPaiNoColor(_shoupai);
        var cbLineCard = this.IsStraight(_tempNoColor);
        if (cbSameColor && cbLineCard && _shoupai.length > 2) {
            if (Math.max.apply(null, _tempNoColor) == 14 && Math.max.apply(null, _tempNoColor) == 10) {
                return PokerTexasType.Five_Flush_RoyalStraight;
            }
            else
                return PokerTexasType.Five_Flush_Straight;
        }
        if ((cbSameColor == false) && (cbLineCard == true) && _shoupai.length > 2)
            return PokerTexasType.Five_Straight;
        if ((cbSameColor == true) && (cbLineCard == false) && _shoupai.length > 2)
            return PokerTexasType.Five_Flush;
        //扑克分析
        var _splitHelper = new TexasSplitHelper();
        _splitHelper.Split(_shoupai);
        //类型判断
        if (_splitHelper._four.length == 1 && _shoupai.length > 2)
            return PokerTexasType.Five_Bomb;
        if ((_splitHelper._three.length == 1) && (_splitHelper._two.length == 2) && _shoupai.length > 2)
            return PokerTexasType.Five_THREE_TWO;
        if ((_splitHelper._three.length == 1) && (_splitHelper._two.length == 1) && _shoupai.length > 2)
            return PokerTexasType.Five_THREE;
        if (_splitHelper._two.length == 2 && _shoupai.length > 2)
            return PokerTexasType.Five_TWO_PAIR;
        if ((_splitHelper._two.length == 1) && (_splitHelper._one.length == _shoupai.length - 1))
            return PokerTexasType.Five_ONE_PAIR; //两张牌的时候可能是一对
        return PokerTexasType.Five_Single;
    };
    //最大牌型
    TexasBase.GetFiveFromSeven = function (cbHandCardData, cbCenterCardData, allCount) {
        if (allCount === void 0) { allCount = 7; }
        var cbTempCardData = []; //临时变量
        UIUtil_1.UIUtil.Concat(cbTempCardData, cbHandCardData);
        UIUtil_1.UIUtil.Concat(cbTempCardData, cbCenterCardData);
        if (cbTempCardData.length != allCount || cbTempCardData.length < 2)
            return []; //之前是5张显示牌型，现在是发2张牌后就要显示自己的牌型 
        var _tempCardCompare = this.OrderPaiWithColor(cbTempCardData);
        var cbLastCardData = [];
        if (_tempCardCompare.length < 5) {
            UIUtil_1.UIUtil.Concat(cbLastCardData, _tempCardCompare);
        }
        else {
            cbLastCardData.push(_tempCardCompare[0]);
            cbLastCardData.push(_tempCardCompare[1]);
            cbLastCardData.push(_tempCardCompare[2]);
            cbLastCardData.push(_tempCardCompare[3]);
            cbLastCardData.push(_tempCardCompare[4]);
        }
        var cbCardKind = this.GetTexasType(cbTempCardData);
        var cbTempCardKind = 0;
        var cbTempLastCardData = [0, 0, 0, 0, 0]; //只做初始暂位用
        //组合算法
        for (var i = 0; i < allCount - 4; i++) {
            for (var j = i + 1; j < allCount - 3; j++) {
                for (var k = j + 1; k < allCount - 2; k++) {
                    for (var l = k + 1; l < allCount - 1; l++) {
                        for (var m = l + 1; m < allCount; m++) { //获取数据
                            cbTempLastCardData[0] = _tempCardCompare[i];
                            cbTempLastCardData[1] = _tempCardCompare[j];
                            cbTempLastCardData[2] = _tempCardCompare[k];
                            cbTempLastCardData[3] = _tempCardCompare[l];
                            cbTempLastCardData[4] = _tempCardCompare[m];
                            cbTempCardKind = this.GetTexasType(cbTempLastCardData); //获取牌型
                            //牌型大小
                            if (this.ComparePoker_nn(cbTempLastCardData, cbLastCardData) == TexasEnmuResult.Win) {
                                cbCardKind = cbTempCardKind;
                                cbLastCardData = [];
                                UIUtil_1.UIUtil.Concat(cbLastCardData, cbTempLastCardData);
                            }
                        }
                    }
                }
            }
        }
        return cbLastCardData;
    };
    /// <summary>
    /// 相同牌型牌值平分
    /// </summary>
    /// <param name="applycard"></param>
    /// <param name="cardlist"></param>
    /// <returns></returns>
    TexasBase.ComparePoker_nn = function (applycard, cardlist) {
        var _applytype = this.GetTexasType(applycard);
        var _type = this.GetTexasType(cardlist);
        return this.ComparePoker(applycard, _applytype, cardlist, _type);
    };
    /// <summary>
    /// applycard 表示申请比牌的人
    /// </summary>
    /// <param name="applycard"></param>
    /// <param name="_applytype"></param>
    /// <param name="cardlist"></param>
    /// <param name="_type"></param>
    /// <returns></returns>
    TexasBase.ComparePoker = function (applycard, _applytype, cardlist, _type) {
        if (_applytype > _type)
            return TexasEnmuResult.Win;
        else if (_applytype < _type)
            return TexasEnmuResult.Lost;
        else { //相同类型 需要根据规则再处理一次，  
            var _tapplyList = this.OrderPaiNoColor(applycard);
            var _targetCardList = this.OrderPaiNoColor(cardlist);
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
                    var _applyMoreOne_P1 = this.GetMoreOneList(_tapplyList);
                    var _targetMoreOne_P1 = this.GetMoreOneList(_targetCardList);
                    var _tempPair1 = this.CompareListOneByOne(_applyMoreOne_P1, _targetMoreOne_P1, 1);
                    if (_tempPair1 == TexasEnmuResult.Draw) {
                        var _applyOnlyOne = this.GetOnlyOneList(_tapplyList);
                        var _targetOnlyOne = this.GetOnlyOneList(_targetCardList);
                        return this.CompareListOneByOne(_applyOnlyOne, _targetOnlyOne, 3);
                    }
                    else
                        return _tempPair1;
                case PokerTexasType.Five_TWO_PAIR:
                    var _applyMoreOne_P2 = this.GetMoreOneList(_tapplyList);
                    var _targetMoreOne_P2 = this.GetMoreOneList(_targetCardList);
                    var _tempPair2 = this.CompareListOneByOne(_applyMoreOne_P2, _targetMoreOne_P2, 2);
                    if (_tempPair2 == TexasEnmuResult.Draw) {
                        var _applyOnlyOne = this.GetOnlyOneList(_tapplyList);
                        var _targetOnlyOne = this.GetOnlyOneList(_targetCardList);
                        return this.CompareListOneByOne(_applyOnlyOne, _targetOnlyOne, 1);
                    }
                    else
                        return _tempPair2;
                case PokerTexasType.Five_THREE:
                case PokerTexasType.Five_THREE_TWO: //Texas因为有公牌 可能一样的牌，需要进行对子比较
                    var _applyMoreOne_3 = this.GetMoreOneList(_tapplyList, 3);
                    var _targetMoreOne_3 = this.GetMoreOneList(_targetCardList, 3);
                    var _tempPair3 = this.CompareListOneByOne(_applyMoreOne_3, _targetMoreOne_3, 1);
                    if (_tempPair3 == TexasEnmuResult.Draw) {
                        var _applyMoreOne_2 = this.GetMoreOneList(_tapplyList, 2);
                        var _targetMoreOne_2 = this.GetMoreOneList(_targetCardList, 2);
                        return this.CompareListOneByOne(_applyMoreOne_2, _targetMoreOne_2, 1);
                    }
                    else
                        return _tempPair3;
                case PokerTexasType.Five_Bomb: //Texas因为有公牌 需要再次比较
                    var _applyMoreOne_4 = this.GetMoreOneList(_tapplyList, 4);
                    var _targetMoreOne_4 = this.GetMoreOneList(_targetCardList, 4);
                    var _tempPair4 = this.CompareListOneByOne(_applyMoreOne_4, _targetMoreOne_4, 1);
                    if (_tempPair4 == TexasEnmuResult.Draw) {
                        var _applyOnlyOne = this.GetOnlyOneList(_tapplyList);
                        var _targetOnlyOne = this.GetOnlyOneList(_targetCardList);
                        return this.CompareListOneByOne(_applyOnlyOne, _targetOnlyOne, 1);
                    }
                    else
                        return _tempPair4;
                default:
                    return TexasEnmuResult.Draw;
            }
        }
    };
    /// <summary>
    /// 一样大 平局不需要比花色
    /// </summary>
    /// <param name="applycard">从大到小排序 没有花色</param>
    /// <param name="cardlist">从大到小排序 没有花色</param>
    /// <returns></returns>
    TexasBase.CompareListOneByOne = function (applylist, cardlist, CompareLen) {
        if (CompareLen === void 0) { CompareLen = 5; }
        if (applylist[0] > cardlist[0])
            return TexasEnmuResult.Win;
        else if (applylist[0] < cardlist[0])
            return TexasEnmuResult.Lost;
        else {
            if (CompareLen == 1) {
                return TexasEnmuResult.Draw;
            }
            else {
                if (applylist[1] > cardlist[1])
                    return TexasEnmuResult.Win;
                else if (applylist[1] < cardlist[1])
                    return TexasEnmuResult.Lost;
                else {
                    if (CompareLen == 2) {
                        return TexasEnmuResult.Draw;
                    }
                    else {
                        if (applylist[2] > cardlist[2])
                            return TexasEnmuResult.Win;
                        else if (applylist[2] < cardlist[2])
                            return TexasEnmuResult.Lost;
                        else {
                            if (CompareLen == 3) {
                                return TexasEnmuResult.Draw;
                            }
                            else {
                                if (applylist[3] > cardlist[3])
                                    return TexasEnmuResult.Win;
                                else if (applylist[3] < cardlist[3])
                                    return TexasEnmuResult.Lost;
                                else {
                                    if (applylist[4] > cardlist[4])
                                        return TexasEnmuResult.Win;
                                    else if (applylist[4] < cardlist[4])
                                        return TexasEnmuResult.Lost;
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
    };
    /// <summary>
    /// A2345转成12345
    /// </summary>
    /// <param name="applycard">需要去色，排序，从大到小，</param> 
    /// <returns></returns>
    TexasBase.DealA2345 = function (shouPai) {
        if (shouPai[0] == 14 && shouPai[1] == 5 && shouPai[2] == 4 && shouPai[3] == 3 && shouPai[4] == 2) {
            var s12345 = shouPai;
            s12345[0] = 1; //需要比较成最小的
            s12345 = this.OrderPaiNoColor(s12345);
            return s12345;
        }
        return shouPai;
    };
    /// <summary>
    ///     
    /// </summary>
    /// <param name="_shouPai">需要去色，排序，从大到小，</param>
    /// <param name="_num"></param>
    /// <returns></returns>
    TexasBase.GetMoreOneList = function (_shouPai, _num) {
        if (_num === void 0) { _num = 2; }
        var _splitHelper = new TexasSplitHelper();
        _splitHelper.Split(_shouPai);
        var _retList = [];
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
    };
    /// <summary>
    ///     
    /// </summary>
    /// <param name="_shouPai">需要去色，排序，从大到小，</param>
    /// <param name="_num"></param>
    /// <returns></returns>
    TexasBase.GetOnlyOneList = function (_shouPai) {
        var _splitHelper = new TexasSplitHelper();
        _splitHelper.Split(_shouPai);
        var _retList = _splitHelper._onlyOne;
        return _retList;
    };
    TexasBase.GetNameByType = function (_type) {
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
        var name = this._dicType2String.find(function (_dh) { return _dh._t == _type; });
        if (name == null) {
            console.log("  error type:" + _type.toString());
            return "";
        }
        return name._name;
        return "";
    };
    TexasBase.GetTexasName = function (cards) {
        var _type = this.GetTexasType(cards);
        return this.GetNameByType(_type);
    };
    TexasBase.GetMaxTypeCards = function (cards) {
        var tempCards = [];
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
                UIUtil_1.UIUtil.Concat(tempCards, cards);
                break;
            case PokerTexasType.Five_Flush:
                UIUtil_1.UIUtil.Concat(tempCards, cards);
                break;
            case PokerTexasType.Five_THREE_TWO:
                UIUtil_1.UIUtil.Concat(tempCards, cards);
                break;
            case PokerTexasType.Five_Bomb:
                tempCards = this.GetSameValeCards(cards, 4);
                break;
            case PokerTexasType.Five_Flush_Straight:
                UIUtil_1.UIUtil.Concat(tempCards, cards);
                break;
            case PokerTexasType.Five_Flush_RoyalStraight:
                UIUtil_1.UIUtil.Concat(tempCards, cards);
                break;
            case PokerTexasType.Error:
                break;
        }
        return tempCards;
    };
    TexasBase.GetSameValeCards = function (cards, sameCount) {
        var tempCards = [];
        var tempDic = new Map();
        cards.forEach(function (poke) {
            var key = UIUtil_1.UIUtil.NumberToInt(poke % 100);
            if (tempDic.has(key))
                tempDic.get(key).push(poke);
            else {
                var cardList = [];
                cardList.push(poke);
                tempDic.set(key, cardList);
            }
        });
        tempDic.forEach(function (temp) {
            if (temp.length == sameCount)
                UIUtil_1.UIUtil.Concat(tempCards, temp);
        });
        return tempCards;
    };
    TexasBase.getPlayerPosType = function (pos, bpos, tList) {
        var posType = "";
        this.curPos = [];
        if (tList == null || tList.length <= 0)
            return posType;
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
        var hpos = this.GetHandlePos(pos, bpos, tList);
        if (this.curPos == null || this.curPos.length <= 0 || this.curPos.length < hpos || hpos <= 0)
            return posType;
        else
            return this.curPos[hpos - 1];
    };
    TexasBase.GetHandlePos = function (pos, bpos, tList) {
        var hPos = 0;
        var curUser = tList.find(function (item) { return item.pos == pos; });
        var bUser = tList.find(function (item) { return item.pos == bpos; });
        if (tList == null || tList.length < 2 || curUser == null || bUser == null)
            return hPos;
        var newList = [];
        newList = tList;
        newList.sort(function (x, y) { return x.pos - y.pos; });
        var sPos = 0;
        var bIndx = newList.findIndex(function (item) { return item.pos == bpos; });
        var cIndx = newList.findIndex(function (item) { return item.pos == pos; });
        if (newList.length == 2) {
            sPos = bIndx;
        }
        else {
            sPos = bIndx - 1 >= 0 ? bIndx - 1 : bIndx - 1 + newList.length;
        }
        hPos = sPos - cIndx < 0 ? sPos - cIndx + newList.length + 1 : sPos - cIndx + 1;
        return hPos;
    };
    /// <summary>
    /// 黑
    /// </summary>
    TexasBase.arrSpade = [102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114];
    /// <summary>
    /// 红
    /// </summary>
    TexasBase.arrHeart = [202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214];
    /// <summary>
    /// 梅
    /// </summary>
    TexasBase.arrClub = [302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314];
    /// <summary>
    /// 方
    /// </summary>
    TexasBase.arrDiamond = [402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414];
    TexasBase.twoPos = ["SB", "BB"];
    TexasBase.threePos = ["SB", "BB", "BTN"];
    TexasBase.fourPos = ["SB", "BB", "UTG", "BTN"];
    TexasBase.fivePos = ["SB", "BB", "UTG", "CO", "BTN"];
    TexasBase.sixPos = ["SB", "BB", "UTG", "HJ", "CO", "BTN"];
    TexasBase.sevenPos = ["SB", "BB", "UTG", "MP1", "HJ", "CO", "BTN"];
    TexasBase.eightPos = ["SB", "BB", "UTG", "UTG+1", "MP1", "HJ", "CO", "BTN"];
    TexasBase.ninePos = ["SB", "BB", "UTG", "UTG+1", "MP1", "MP2", "HJ", "CO", "BTN"];
    TexasBase.curPos = [];
    /// <summary>
    /// 不要大小王
    /// </summary>
    TexasBase.mNumALLPoker = 52;
    /// <summary>
    /// 单个用户牌的个数
    /// </summary>
    TexasBase._NumPerUser = 2;
    TexasBase._dicType2String = [];
    return TexasBase;
}());
exports.TexasBase = TexasBase;
var TexasSplitHelper = /** @class */ (function () {
    function TexasSplitHelper() {
        this._onlyOne = [];
        /// <summary>
        /// 散牌，A，2，3，4，5 不算散牌了  个数为1且不在连子中。
        /// </summary>
        this._uron5One = [];
        this._uron5OneColor = [];
        //基础结构 
        this._one = [];
        this._two = [];
        this._three = [];
        this._four = [];
        this._straight = []; //连子 从3~A的最长单连   可能是两个连子
        this._dicColor2List = new Map();
    }
    TexasSplitHelper.prototype.Split = function (shoupai) {
        this._shouPaiColor = [];
        UIUtil_1.UIUtil.Concat(this._shouPaiColor, shoupai);
        this.SearchColor();
        this._shouPai = [];
        UIUtil_1.UIUtil.Concat(this._shouPai, shoupai);
        this._shouPai = TexasBase.OrderPaiNoColor(this._shouPai);
        this.SearchBase();
        this._straight = [];
        this.SearchStraight();
        this.SearchStraightA();
        this._uron5One = [];
        this.SearchUnron();
    };
    TexasSplitHelper.prototype.SearchColor = function () {
        var _this = this;
        this._shouPaiColor.forEach(function (pai) {
            var _color = TexasBase.GetCardColor(pai);
            if (!_this._dicColor2List.has(_color))
                _this._dicColor2List.set(_color, []);
            _this._dicColor2List.get(_color).push(pai);
        });
    };
    //分成四个数组
    TexasSplitHelper.prototype.SearchBase = function () {
        var _this = this;
        var _dicPoker2Count = TexasBase.GetPoker_Count(this._shouPai);
        var _temp = [];
        _dicPoker2Count.forEach(function (value, key) {
            if (_dicPoker2Count.get(key) == 4) {
                _this._one.push(key);
                _this._two.push(key);
                _this._three.push(key);
                _this._four.push(key);
            }
            else if (_dicPoker2Count.get(key) == 3) {
                _this._one.push(key);
                _this._two.push(key);
                _this._three.push(key);
            }
            else if (_dicPoker2Count.get(key) == 2) {
                _this._one.push(key);
                _this._two.push(key);
            }
            else if (_dicPoker2Count.get(key) == 1) {
                _this._one.push(key);
                _this._onlyOne.push(key);
            }
        });
        this._one = TexasBase.OrderPaiNoColor(this._one);
        this._two = TexasBase.OrderPaiNoColor(this._two);
        this._three = TexasBase.OrderPaiNoColor(this._three);
        this._four = TexasBase.OrderPaiNoColor(this._four);
    };
    /// <summary>
    /// 
    /// </summary>
    TexasSplitHelper.prototype.SearchStraight = function () {
        if (this._shouPai.length < 5)
            return; //不足5个牌就不处理的    
        var _tempone = this._one;
        var _minStraight = [];
        for (var i = 0; i < _tempone.length - 1; i++) {
            if (_tempone[i] - 1 == _tempone[i + 1]) {
                _minStraight.push(_tempone[i]);
                if (i + 1 == _tempone.length - 1)
                    _minStraight.push(_tempone[i + 1]); //最后一个要加上
            }
            else { //可能会出现刚才好5个，而后还有牌，搜索不到
                _minStraight.push(_tempone[i]);
                if (_minStraight.length >= 5)
                    this._straight.push(_minStraight);
                _minStraight = [];
            }
        }
        if (_minStraight.length >= 5)
            this._straight.push(_minStraight); //最后一组必须加进去 不然一个长连子没搜索到
    };
    /// <summary>
    /// 只处理A2345   
    /// </summary>
    TexasSplitHelper.prototype.SearchStraightA = function () {
        if (this._shouPai.length < 5)
            return; //不足5个牌就不处理的  
        if (this._shouPai.indexOf(14) == -1)
            return; //没有A就不处理了
        var _tempShouPai = this._shouPai;
        for (var i = 0; i < _tempShouPai.length - 1; i++) {
            if (_tempShouPai[i] == 14)
                _tempShouPai[i] = 1;
        }
        var _minStraight = [];
        for (var i = 0; i < _tempShouPai.length - 1; i++) {
            if (_tempShouPai[i] - 1 == _tempShouPai[i + 1]) {
                _minStraight.push(_tempShouPai[i]);
                if (i + 1 == _tempShouPai.length - 1)
                    _minStraight.push(_tempShouPai[i + 1]); //最后一个要加上
            }
            else { //可能会出现刚才好5个，而后还有牌，搜索不到
                _minStraight.push(_tempShouPai[i]);
                if (_minStraight.length >= 5)
                    this._straight.push(_minStraight);
                _minStraight = [];
            }
        }
        if (_minStraight.length >= 5 && _minStraight.indexOf(1) >= 0) {
            for (var i = 0; i < _tempShouPai.length - 1; i++) {
                if (_tempShouPai[i] == 1)
                    _tempShouPai[i] = 14;
            }
            this._straight.push(_minStraight); //最后一组必须加进去 不然一个长连子没搜索到
        }
    };
    /// <summary>
    /// 搜索散牌 个数不能大于1，不在连子中。
    /// </summary>
    TexasSplitHelper.prototype.SearchUnron = function () {
        var _this = this;
        var _tempUnron = this._onlyOne;
        this._straight.forEach(function (_tempStraight) {
            _tempStraight.forEach(function (_cardVal) {
                if (_tempUnron.indexOf(_cardVal) >= 0)
                    _tempUnron.splice(_tempUnron.indexOf(_cardVal), 1);
            });
        });
        this._uron5One = _tempUnron;
        this._uron5OneColor = this._uron5One;
        for (var i = 0; i < this._uron5OneColor.length; i++) {
            this._shouPaiColor.forEach(function (_cl) {
                if (_cl % 100 == _this._uron5OneColor[i]) {
                    _this._uron5OneColor[i] = _cl;
                }
            });
        }
    };
    TexasSplitHelper.prototype.GetMinUnron = function () {
        if (this._uron5OneColor.length < 0)
            return 0;
        var _temp = TexasBase.OrderPaiNoColor(this._uron5One);
        var _minCard = _temp[_temp.length - 1];
        return _minCard;
    };
    return TexasSplitHelper;
}());
exports.TexasSplitHelper = TexasSplitHelper;
/// <summary>
///  同花顺〉四条〉三条+一对〉同花〉顺〉三条〉两条〉一对〉大无赖
/// </summary>
var PokerTexasType;
(function (PokerTexasType) {
    //扑克类型
    PokerTexasType[PokerTexasType["Error"] = 0] = "Error";
    PokerTexasType[PokerTexasType["Five_Single"] = 1] = "Five_Single";
    PokerTexasType[PokerTexasType["Five_ONE_PAIR"] = 2] = "Five_ONE_PAIR";
    PokerTexasType[PokerTexasType["Five_TWO_PAIR"] = 3] = "Five_TWO_PAIR";
    PokerTexasType[PokerTexasType["Five_THREE"] = 4] = "Five_THREE";
    PokerTexasType[PokerTexasType["Five_Straight"] = 5] = "Five_Straight";
    PokerTexasType[PokerTexasType["Five_Flush"] = 6] = "Five_Flush";
    PokerTexasType[PokerTexasType["Five_THREE_TWO"] = 7] = "Five_THREE_TWO";
    PokerTexasType[PokerTexasType["Five_Bomb"] = 8] = "Five_Bomb";
    PokerTexasType[PokerTexasType["Five_Flush_Straight"] = 9] = "Five_Flush_Straight";
    PokerTexasType[PokerTexasType["Five_Flush_RoyalStraight"] = 10] = "Five_Flush_RoyalStraight";
})(PokerTexasType = exports.PokerTexasType || (exports.PokerTexasType = {}));
var TexasEnmuResult;
(function (TexasEnmuResult) {
    TexasEnmuResult[TexasEnmuResult["Draw"] = 0] = "Draw";
    TexasEnmuResult[TexasEnmuResult["Lost"] = 1] = "Lost";
    TexasEnmuResult[TexasEnmuResult["Win"] = 2] = "Win";
})(TexasEnmuResult = exports.TexasEnmuResult || (exports.TexasEnmuResult = {}));
var TexasTurnEnum;
(function (TexasTurnEnum) {
    TexasTurnEnum[TexasTurnEnum["Init"] = -1] = "Init";
    /// <summary>
    /// 盲注阶段 手牌数为0--小盲当庄：自动压房间低分的一分 大盲注为小盲注的下家，自动压房间的最低分，从小盲注开始发牌，Token交给大盲注
    /// </summary>
    TexasTurnEnum[TexasTurnEnum["Turn1_0"] = 1] = "Turn1_0";
    /// <summary>
    /// 手牌数为2+3 公开牌为数为3  
    /// </summary>
    TexasTurnEnum[TexasTurnEnum["Turn2_3"] = 2] = "Turn2_3";
    /// <summary>
    /// 手牌数为2+4 公开牌为数为4  
    /// </summary>
    TexasTurnEnum[TexasTurnEnum["Turn3_4"] = 3] = "Turn3_4";
    /// <summary>
    /// 手牌数为2+5 公开牌为数为5 
    /// </summary>
    TexasTurnEnum[TexasTurnEnum["Turn4_5"] = 4] = "Turn4_5";
    /// <summary>
    /// 比牌状态了
    /// </summary>
    TexasTurnEnum[TexasTurnEnum["TrunCompare"] = 5] = "TrunCompare";
})(TexasTurnEnum = exports.TexasTurnEnum || (exports.TexasTurnEnum = {}));
var TexasTurnActionEnum;
(function (TexasTurnActionEnum) {
    TexasTurnActionEnum[TexasTurnActionEnum["Init"] = -1] = "Init";
    /// <summary>
    /// 小盲
    /// </summary>
    TexasTurnActionEnum[TexasTurnActionEnum["sb"] = 1] = "sb";
    /// <summary>
    /// 大盲
    /// </summary>
    TexasTurnActionEnum[TexasTurnActionEnum["bb"] = 2] = "bb";
    /// <summary>
    /// stradlle
    /// </summary>
    TexasTurnActionEnum[TexasTurnActionEnum["stradlle"] = 3] = "stradlle";
    /// <summary>
    /// 跟
    /// </summary>
    TexasTurnActionEnum[TexasTurnActionEnum["call"] = 4] = "call";
    /// <summary>
    /// 弃牌
    /// </summary>
    TexasTurnActionEnum[TexasTurnActionEnum["fold"] = 5] = "fold";
    /// <summary>
    /// allin
    /// </summary>
    TexasTurnActionEnum[TexasTurnActionEnum["allin"] = 6] = "allin";
    /// <summary>
    /// 让牌
    /// </summary>
    TexasTurnActionEnum[TexasTurnActionEnum["Check"] = 7] = "Check";
    /// <summary>
    /// 加注 2/3
    /// </summary>
    TexasTurnActionEnum[TexasTurnActionEnum["B2_3"] = 8] = "B2_3";
    /// <summary>
    /// 加注 1/2 
    /// </summary>
    TexasTurnActionEnum[TexasTurnActionEnum["B1_2"] = 9] = "B1_2";
    /// <summary>
    /// 加注 1
    /// </summary>
    TexasTurnActionEnum[TexasTurnActionEnum["B1"] = 10] = "B1";
    /// <summary>
    /// 全部加注操作
    /// </summary>
    TexasTurnActionEnum[TexasTurnActionEnum["B"] = 11] = "B";
    /// <summary>
    /// 比牌
    /// </summary>
    TexasTurnActionEnum[TexasTurnActionEnum["showdonw"] = 15] = "showdonw";
    /// <summary>
    /// 保险类型 可能需要详细的保险流程
    /// </summary>
    TexasTurnActionEnum[TexasTurnActionEnum["Ins"] = 20] = "Ins";
})(TexasTurnActionEnum = exports.TexasTurnActionEnum || (exports.TexasTurnActionEnum = {}));
var DicHelper = /** @class */ (function () {
    function DicHelper(t, name) {
        this._t = t;
        this._name = name;
        return this;
    }
    return DicHelper;
}());
exports.DicHelper = DicHelper;

cc._RF.pop();