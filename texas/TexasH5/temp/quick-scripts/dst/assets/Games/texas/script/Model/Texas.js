
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/texas/script/Model/Texas.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '403d0LGSp1JEq3tCpx+hhKR', 'Texas');
// Games/texas/script/Model/Texas.ts

"use strict";
/// <summary>
/// 德州扑克牌的数据类   
Object.defineProperty(exports, "__esModule", { value: true });
exports.DicHelper = exports.TexasTurnActionEnum = exports.TexasTurnEnum = exports.TexasEnmuResult = exports.PokerTexasType = exports.TexasSplitHelper = exports.Texas = void 0;
var UIUtil_1 = require("../../../../Script/Common/UIUtil");
var F_TexasViewCtr_1 = require("../Contrl/F_TexasViewCtr");
/// </summary>
var Texas = /** @class */ (function () {
    function Texas() {
    }
    /// <summary>
    /// 洗牌， 让所有纸牌，随机顺序
    /// </summary>
    Texas.prototype.Shuffle = function () {
    };
    // #region   排序 
    /// <summary>
    /// 去掉花色 从大到小排序 
    /// </summary>
    /// <param name="paiarr"></param>
    /// <returns></returns>
    Texas.OrderPaiNoColor = function (paiarr) {
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
    Texas.OrderPaiWithColor = function (paiarr) {
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
    Texas.GetPaiColor = function (_shoupai, pokervalue) {
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
    Texas.GetCardColor = function (cbCardData) {
        return cbCardData / 100;
    };
    Texas.GetPoker_Count = function (paiList) {
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
    Texas.IsFlush = function (cardlist) {
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
    Texas.IsStraight = function (PG) {
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
    Texas.IsSunZhi123 = function (cardlist) {
        if (cardlist[0] == 14 && cardlist[1] == 3 && cardlist[2] == 2)
            return true;
        return false;
    };
    //获取类型:
    Texas.GetTexasType = function (shoupai) {
        var _shoupai = [];
        UIUtil_1.UIUtil.Concat(_shoupai, shoupai);
        if (_shoupai.length < 2)
            return PokerTexasType.Error; //之前是5张显示牌型，现在是发2张牌后就要显示自己的牌型 ,2张手牌只显示高牌和一对
        var cbSameColor = Texas.IsFlush(_shoupai);
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
    Texas.GetFiveFromSeven = function (cbHandCardData, cbCenterCardData, allCount) {
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
    Texas.ComparePoker_nn = function (applycard, cardlist) {
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
    Texas.ComparePoker = function (applycard, _applytype, cardlist, _type) {
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
    Texas.CompareListOneByOne = function (applylist, cardlist, CompareLen) {
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
    Texas.DealA2345 = function (shouPai) {
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
    Texas.GetMoreOneList = function (_shouPai, _num) {
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
    Texas.GetOnlyOneList = function (_shouPai) {
        var _splitHelper = new TexasSplitHelper();
        _splitHelper.Split(_shouPai);
        var _retList = _splitHelper._onlyOne;
        return _retList;
    };
    Texas.GetNameByType = function (_type) {
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
    Texas.GetTexasName = function (cards) {
        var _type = this.GetTexasType(cards);
        return this.GetNameByType(_type);
    };
    Texas.GetMaxTypeCards = function (cards) {
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
    Texas.GetSameValeCards = function (cards, sameCount) {
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
    Texas.getPlayerPosType = function (pos, bpos, tList) {
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
    Texas.GetHandlePos = function (pos, bpos, tList) {
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
    //微小房间保留小数
    Texas.formatNumber100 = function (_val) {
        var brate = F_TexasViewCtr_1.default.instance.Model.brate;
        if (brate >= 100) {
            return UIUtil_1.UIUtil.NumberToInt(_val / 100);
        }
        else {
            return UIUtil_1.UIUtil.formatNumber100(_val);
        }
    };
    /// <summary>
    /// 黑
    /// </summary>
    Texas.arrSpade = [102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114];
    /// <summary>
    /// 红
    /// </summary>
    Texas.arrHeart = [202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214];
    /// <summary>
    /// 梅
    /// </summary>
    Texas.arrClub = [302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314];
    /// <summary>
    /// 方
    /// </summary>
    Texas.arrDiamond = [402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414];
    Texas.twoPos = ["SB", "BB"];
    Texas.threePos = ["SB", "BB", "BTN"];
    Texas.fourPos = ["SB", "BB", "UTG", "BTN"];
    Texas.fivePos = ["SB", "BB", "UTG", "CO", "BTN"];
    Texas.sixPos = ["SB", "BB", "UTG", "HJ", "CO", "BTN"];
    Texas.sevenPos = ["SB", "BB", "UTG", "MP1", "HJ", "CO", "BTN"];
    Texas.eightPos = ["SB", "BB", "UTG", "UTG+1", "MP1", "HJ", "CO", "BTN"];
    Texas.ninePos = ["SB", "BB", "UTG", "UTG+1", "MP1", "MP2", "HJ", "CO", "BTN"];
    Texas.curPos = [];
    //礼物
    Texas.giftConfig = {
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
    };
    /// <summary>
    /// 不要大小王
    /// </summary>
    Texas.mNumALLPoker = 52;
    /// <summary>
    /// 单个用户牌的个数
    /// </summary>
    Texas._NumPerUser = 2;
    Texas._dicType2String = [];
    return Texas;
}());
exports.Texas = Texas;
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
        this._shouPai = Texas.OrderPaiNoColor(this._shouPai);
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
            var _color = Texas.GetCardColor(pai);
            if (!_this._dicColor2List.has(_color))
                _this._dicColor2List.set(_color, []);
            _this._dicColor2List.get(_color).push(pai);
        });
    };
    //分成四个数组
    TexasSplitHelper.prototype.SearchBase = function () {
        var _this = this;
        var _dicPoker2Count = Texas.GetPoker_Count(this._shouPai);
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
        this._one = Texas.OrderPaiNoColor(this._one);
        this._two = Texas.OrderPaiNoColor(this._two);
        this._three = Texas.OrderPaiNoColor(this._three);
        this._four = Texas.OrderPaiNoColor(this._four);
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
        var _temp = Texas.OrderPaiNoColor(this._uron5One);
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXHRleGFzXFxzY3JpcHRcXE1vZGVsXFxUZXhhcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsYUFBYTtBQUNiLGdCQUFnQjs7O0FBRWhCLDJEQUEwRDtBQUMxRCwyREFBc0Q7QUFHdEQsY0FBYztBQUNkO0lBQUE7SUFrcEJBLENBQUM7SUF6a0JHLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsY0FBYztJQUNOLHVCQUFPLEdBQWY7SUFFQSxDQUFDO0lBSUQsZ0JBQWdCO0lBRWhCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlDQUFpQztJQUNqQyx1QkFBdUI7SUFDVCxxQkFBZSxHQUE3QixVQUE4QixNQUFnQjtRQUMxQyxJQUFJLFNBQVMsR0FBYSxFQUFFLENBQUM7UUFDN0IsZUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDakMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdkMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRztnQkFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDO1NBQy9DO1FBQ0QsSUFBSSxPQUFPLEdBQWEsRUFBRSxDQUFDO1FBQzNCLGVBQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSyxPQUFBLEVBQUUsR0FBRyxFQUFFLEVBQVAsQ0FBTyxDQUFDLENBQUM7UUFDNUMsSUFBSSxRQUFRLEdBQWEsRUFBRSxDQUFDO1FBQzVCLGVBQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2pDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FB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LEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtRQUNuSCxjQUFjLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtRQUMxSCxlQUFlLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtRQUMzSCxTQUFTLEVBQUUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtRQUM5RyxlQUFlLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtRQUMzSCxhQUFhLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtRQUN2SCxhQUFhLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtRQUN2SCxZQUFZLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtRQUNySCxZQUFZLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtRQUNwSCxhQUFhLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtRQUN2SCxhQUFhLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtRQUN2SCxhQUFhLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtRQUN2SCxTQUFTLEVBQUUsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtRQUNySCxNQUFNLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxF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QUFhO0lBQ2IsTUFBTTtJQUNOLGNBQWM7SUFDZCx5REFBTSxDQUFBO0lBQ04sYUFBYTtJQUNiLFlBQVk7SUFDWixjQUFjO0lBQ2QscUVBQVksQ0FBQTtJQUNaLGFBQWE7SUFDYixLQUFLO0lBQ0wsY0FBYztJQUNkLDZEQUFRLENBQUE7SUFDUixhQUFhO0lBQ2IsTUFBTTtJQUNOLGNBQWM7SUFDZCw2REFBUSxDQUFBO0lBQ1IsYUFBYTtJQUNiLFNBQVM7SUFDVCxjQUFjO0lBQ2QsK0RBQVMsQ0FBQTtJQUNULGFBQWE7SUFDYixNQUFNO0lBQ04sY0FBYztJQUNkLCtEQUFTLENBQUE7SUFDVCxhQUFhO0lBQ2IsVUFBVTtJQUNWLGNBQWM7SUFDZCw2REFBUSxDQUFBO0lBQ1IsYUFBYTtJQUNiLFdBQVc7SUFDWCxjQUFjO0lBQ2QsNkRBQVEsQ0FBQTtJQUNSLGFBQWE7SUFDYixRQUFRO0lBQ1IsY0FBYztJQUNkLDBEQUFPLENBQUE7SUFDUCxhQUFhO0lBQ2IsVUFBVTtJQUNWLGNBQWM7SUFDZCx3REFBTSxDQUFBO0lBQ04sYUFBYTtJQUNiLE1BQU07SUFDTixjQUFjO0lBQ2Qsc0VBQWEsQ0FBQTtJQUNiLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLDREQUFRLENBQUE7QUFDWixDQUFDLEVBdERXLG1CQUFtQixHQUFuQiwyQkFBbUIsS0FBbkIsMkJBQW1CLFFBc0Q5QjtBQUVEO0lBQ0ksbUJBQVksQ0FBaUIsRUFBRSxJQUFZO1FBQ3ZDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUdMLGdCQUFDO0FBQUQsQ0FSQSxBQVFDLElBQUE7QUFSWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8vIDxzdW1tYXJ5PlxuLy8vIOW+t+W3nuaJkeWFi+eJjOeahOaVsOaNruexuyAgIFxuXG5pbXBvcnQgeyBVSVV0aWwgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0NvbW1vbi9VSVV0aWxcIjtcbmltcG9ydCBGX1RleGFzVmlld0N0ciBmcm9tIFwiLi4vQ29udHJsL0ZfVGV4YXNWaWV3Q3RyXCI7XG5pbXBvcnQgeyBUZXhVc2VySW5mb1NEIH0gZnJvbSBcIi4vVGV4YXNOZXREYXRhXCI7XG5cbi8vLyA8L3N1bW1hcnk+XG5leHBvcnQgY2xhc3MgVGV4YXMge1xuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDpu5FcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHByaXZhdGUgc3RhdGljIGFyclNwYWRlOiBudW1iZXJbXSA9IFsxMDIsIDEwMywgMTA0LCAxMDUsIDEwNiwgMTA3LCAxMDgsIDEwOSwgMTEwLCAxMTEsIDExMiwgMTEzLCAxMTRdO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g57qiXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwcml2YXRlIHN0YXRpYyBhcnJIZWFydDogbnVtYmVyW10gPSBbMjAyLCAyMDMsIDIwNCwgMjA1LCAyMDYsIDIwNywgMjA4LCAyMDksIDIxMCwgMjExLCAyMTIsIDIxMywgMjE0XTtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOaihVxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHJpdmF0ZSBzdGF0aWMgYXJyQ2x1YjogbnVtYmVyW10gPSBbMzAyLCAzMDMsIDMwNCwgMzA1LCAzMDYsIDMwNywgMzA4LCAzMDksIDMxMCwgMzExLCAzMTIsIDMxMywgMzE0XTtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOaWuVxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHJpdmF0ZSBzdGF0aWMgYXJyRGlhbW9uZDogbnVtYmVyW10gPSBbNDAyLCA0MDMsIDQwNCwgNDA1LCA0MDYsIDQwNywgNDA4LCA0MDksIDQxMCwgNDExLCA0MTIsIDQxMywgNDE0XTtcblxuICAgIHByaXZhdGUgc3RhdGljIHR3b1Bvczogc3RyaW5nW10gPSBbXCJTQlwiLCBcIkJCXCJdO1xuICAgIHByaXZhdGUgc3RhdGljIHRocmVlUG9zOiBzdHJpbmdbXSA9IFtcIlNCXCIsIFwiQkJcIiwgXCJCVE5cIl07XG4gICAgcHJpdmF0ZSBzdGF0aWMgZm91clBvczogc3RyaW5nW10gPSBbXCJTQlwiLCBcIkJCXCIsIFwiVVRHXCIsIFwiQlROXCJdO1xuICAgIHByaXZhdGUgc3RhdGljIGZpdmVQb3M6IHN0cmluZ1tdID0gW1wiU0JcIiwgXCJCQlwiLCBcIlVUR1wiLCBcIkNPXCIsIFwiQlROXCJdO1xuICAgIHByaXZhdGUgc3RhdGljIHNpeFBvczogc3RyaW5nW10gPSBbXCJTQlwiLCBcIkJCXCIsIFwiVVRHXCIsIFwiSEpcIiwgXCJDT1wiLCBcIkJUTlwiXTtcbiAgICBwcml2YXRlIHN0YXRpYyBzZXZlblBvczogc3RyaW5nW10gPSBbXCJTQlwiLCBcIkJCXCIsIFwiVVRHXCIsIFwiTVAxXCIsIFwiSEpcIiwgXCJDT1wiLCBcIkJUTlwiXTtcbiAgICBwcml2YXRlIHN0YXRpYyBlaWdodFBvczogc3RyaW5nW10gPSBbXCJTQlwiLCBcIkJCXCIsIFwiVVRHXCIsIFwiVVRHKzFcIiwgXCJNUDFcIiwgXCJISlwiLCBcIkNPXCIsIFwiQlROXCJdO1xuICAgIHByaXZhdGUgc3RhdGljIG5pbmVQb3M6IHN0cmluZ1tdID0gW1wiU0JcIiwgXCJCQlwiLCBcIlVUR1wiLCBcIlVURysxXCIsIFwiTVAxXCIsIFwiTVAyXCIsIFwiSEpcIiwgXCJDT1wiLCBcIkJUTlwiXTtcbiAgICBwcml2YXRlIHN0YXRpYyBjdXJQb3M6IHN0cmluZ1tdID0gW107XG5cbiAgICAvL+ekvOeJqVxuICAgIHB1YmxpYyBzdGF0aWMgZ2lmdENvbmZpZyA9IHtcbiAgICAgICAgXCJUdW94aWVcIjogeyBcInBsYXlBbmltYVwiOiBcIjIxX1RvXCIsIFwibW92ZUFuaW1hXCI6IFwiMjFfRmx5XCIsIFwiaWNvblwiOiBcIlR1b3hpZVwiLCBcIm5hbWVcIjogXCLmi5bpnotcIiwgXCJiZ21cIjogXCJcIiwgXCJkaWFtXCI6IFwiMC4yXCIgfSxcbiAgICAgICAgXCJkYW9qdV9kYW9cIjogeyBcInBsYXlBbmltYVwiOiBcIlRvXCIsIFwibW92ZUFuaW1hXCI6IFwiRmx5XCIsIFwiaWNvblwiOiBcImRhb2p1X2Rhb1wiLCBcIm5hbWVcIjogXCLpo57liIBcIiwgXCJiZ21cIjogXCJcIiwgXCJkaWFtXCI6IFwiMC4yXCIgfSxcbiAgICAgICAgXCJkYW9qdV9kYXF1YW5cIjogeyBcInBsYXlBbmltYVwiOiBcIlRvXCIsIFwibW92ZUFuaW1hXCI6IFwiRnJvbVwiLCBcImljb25cIjogXCJkYW9qdV9kYXF1YW5cIiwgXCJuYW1lXCI6IFwi5ouz5Ye7XCIsIFwiYmdtXCI6IFwiXCIsIFwiZGlhbVwiOiBcIjAuMlwiIH0sXG4gICAgICAgIFwiZGFvanVfbGFvbG9uZ1wiOiB7IFwicGxheUFuaW1hXCI6IFwiVG9cIiwgXCJtb3ZlQW5pbWFcIjogXCJGbHlcIiwgXCJpY29uXCI6IFwiZGFvanVfbGFvbG9uZ1wiLCBcIm5hbWVcIjogXCLmoIXmoI9cIiwgXCJiZ21cIjogXCJcIiwgXCJkaWFtXCI6IFwiMC41XCIgfSxcbiAgICAgICAgXCJndW5Gcm9tXCI6IHsgXCJwbGF5QW5pbWFcIjogXCJGcm9tXCIsIFwibW92ZUFuaW1hXCI6IFwiXCIsIFwiaWNvblwiOiBcImd1bkZyb21cIiwgXCJuYW1lXCI6IFwi5py65p6qXCIsIFwiYmdtXCI6IFwiXCIsIFwiZGlhbVwiOiBcIjAuNVwiIH0sXG4gICAgICAgIFwiaGRfYmluZ3RvbmcwMVwiOiB7IFwicGxheUFuaW1hXCI6IFwiVG9cIiwgXCJtb3ZlQW5pbWFcIjogXCJGbHlcIiwgXCJpY29uXCI6IFwiaGRfYmluZ3RvbmcwMVwiLCBcIm5hbWVcIjogXCLlhrDmobZcIiwgXCJiZ21cIjogXCJcIiwgXCJkaWFtXCI6IFwiMC41XCIgfSxcbiAgICAgICAgXCJoZF9kYW9jaGEwMVwiOiB7IFwicGxheUFuaW1hXCI6IFwiVG9cIiwgXCJtb3ZlQW5pbWFcIjogXCJGbHlcIiwgXCJpY29uXCI6IFwiaGRfZGFvY2hhMDFcIiwgXCJuYW1lXCI6IFwi5Zad6Iy2XCIsIFwiYmdtXCI6IFwiXCIsIFwiZGlhbVwiOiBcIjAuMlwiIH0sXG4gICAgICAgIFwiaGRfZ2FuYmVpMDFcIjogeyBcInBsYXlBbmltYVwiOiBcIlRvXCIsIFwibW92ZUFuaW1hXCI6IFwiRmx5XCIsIFwiaWNvblwiOiBcImhkX2dhbmJlaTAxXCIsIFwibmFtZVwiOiBcIuW5suadr1wiLCBcImJnbVwiOiBcIlwiLCBcImRpYW1cIjogXCIwLjJcIiB9LFxuICAgICAgICBcImhkX2ppZGFuMDFcIjogeyBcInBsYXlBbmltYVwiOiBcIlRvXCIsIFwibW92ZUFuaW1hXCI6IFwiRmx5XCIsIFwiaWNvblwiOiBcImhkX2ppZGFuMDFcIiwgXCJuYW1lXCI6IFwi6bih6JuLXCIsIFwiYmdtXCI6IFwiXCIsIFwiZGlhbVwiOiBcIjAuMlwiIH0sXG4gICAgICAgIFwiaGRfbWFvYmkwMVwiOiB7IFwicGxheUFuaW1hXCI6IFwiVG9cIiwgXCJtb3ZlQW5pbWFcIjogXCJGbHlcIiwgXCJpY29uXCI6IFwiaGRfbWFvYmkwMVwiLCBcIm5hbWVcIjogXCLluIVcIiwgXCJiZ21cIjogXCJcIiwgXCJkaWFtXCI6IFwiMC41XCIgfSxcbiAgICAgICAgXCJoZF9tZWlndWkwMVwiOiB7IFwicGxheUFuaW1hXCI6IFwiVG9cIiwgXCJtb3ZlQW5pbWFcIjogXCJGbHlcIiwgXCJpY29uXCI6IFwiaGRfbWVpZ3VpMDFcIiwgXCJuYW1lXCI6IFwi6bKc6IqxXCIsIFwiYmdtXCI6IFwiXCIsIFwiZGlhbVwiOiBcIjAuNVwiIH0sXG4gICAgICAgIFwiaGRfd29zaG91MDFcIjogeyBcInBsYXlBbmltYVwiOiBcIlRvXCIsIFwibW92ZUFuaW1hXCI6IFwiRmx5XCIsIFwiaWNvblwiOiBcImhkX3dvc2hvdTAxXCIsIFwibmFtZVwiOiBcIuaPoeaJi1wiLCBcImJnbVwiOiBcIlwiLCBcImRpYW1cIjogXCIwLjVcIiB9LFxuICAgICAgICBcImhkX3podWFqaTAxXCI6IHsgXCJwbGF5QW5pbWFcIjogXCJUb1wiLCBcIm1vdmVBbmltYVwiOiBcIkZseVwiLCBcImljb25cIjogXCJoZF96aHVhamkwMVwiLCBcIm5hbWVcIjogXCLlsI/puKFcIiwgXCJiZ21cIjogXCJcIiwgXCJkaWFtXCI6IFwiMC41XCIgfSxcbiAgICAgICAgXCJob25nYmFvXCI6IHsgXCJwbGF5QW5pbWFcIjogXCIyM19Ub1wiLCBcIm1vdmVBbmltYVwiOiBcIjIzX0ZseVwiLCBcImljb25cIjogXCJob25nYmFvXCIsIFwibmFtZVwiOiBcIue6ouWMhVwiLCBcImJnbVwiOiBcIlwiLCBcImRpYW1cIjogXCIwLjVcIiB9LFxuICAgICAgICBcImtpc3NcIjogeyBcInBsYXlBbmltYVwiOiBcIjE1XCIsIFwibW92ZUFuaW1hXCI6IFwiXCIsIFwiaWNvblwiOiBcImtpc3NcIiwgXCJuYW1lXCI6IFwi6aOe5ZC7XCIsIFwiYmdtXCI6IFwiXCIsIFwiZGlhbVwiOiBcIjAuNVwiIH0sXG4gICAgICAgIFwibWpcIjogeyBcInBsYXlBbmltYVwiOiBcIjIyX1RvXCIsIFwibW92ZUFuaW1hXCI6IFwiMjJfRmx5XCIsIFwiaWNvblwiOiBcIm1qXCIsIFwibmFtZVwiOiBcIueZvOaJjVwiLCBcImJnbVwiOiBcIlwiLCBcImRpYW1cIjogXCIwLjVcIiB9LFxuICAgICAgICBcInhpaG9uZ3NoaVwiOiB7IFwicGxheUFuaW1hXCI6IFwiMThcIiwgXCJtb3ZlQW5pbWFcIjogXCJcIiwgXCJpY29uXCI6IFwieGlob25nc2hpXCIsIFwibmFtZVwiOiBcIuilv+e6ouafv1wiLCBcImJnbVwiOiBcIlwiLCBcImRpYW1cIjogXCIwLjVcIiB9LFxuICAgICAgICBcInlhblwiOiB7IFwicGxheUFuaW1hXCI6IFwiMjBfVG9cIiwgXCJtb3ZlQW5pbWFcIjogXCIyMF9GbHlcIiwgXCJpY29uXCI6IFwieWFuXCIsIFwibmFtZVwiOiBcIueCueeDn1wiLCBcImJnbVwiOiBcIlwiLCBcImRpYW1cIjogXCIwLjVcIiB9LFxuICAgICAgICBcInphblwiOiB7IFwicGxheUFuaW1hXCI6IFwiMTZcIiwgXCJtb3ZlQW5pbWFcIjogXCJcIiwgXCJpY29uXCI6IFwiemFuXCIsIFwibmFtZVwiOiBcIuajklwiLCBcImJnbVwiOiBcIlwiLCBcImRpYW1cIjogXCIwLjVcIiB9LFxuICAgICAgICAvLyBcImhkX2ppZ3VhbnFpYW5nMDFcIjogeyBcInBsYXlBbmltYVwiOiBcImFuaW1hdGlvblwiLCBcIm1vdmVBbmltYVwiOiBcImZseVwiLCBcImljb25cIjogXCJoZF9qaWd1YW5xaWFuZzAxXCIsIFwibmFtZVwiOiBcIuWKoOeJueael1wiLCBcImJnbVwiOiBcIlwiLCBcImRpYW1cIjogXCIxLjBcIiB9LFxuICAgICAgICAvLyBcImhkX2ppZ3VhbnFpYW5nMDFfZW5kXCI6IHsgXCJwbGF5QW5pbWFcIjogXCJhbmltYXRpb25cIiwgXCJtb3ZlQW5pbWFcIjogXCJcIiwgXCJpY29uXCI6IFwiaGRfamlndWFucWlhbmcwMV9lbmRcIiwgXCJuYW1lXCI6IFwi5Yqg54m55p6X57uT5p2fXCIsIFwiYmdtXCI6IFwiXCIsIFwiZGlhbVwiOiBcIjAuMlwiIH0sXG5cbiAgICAgICAgXCJma2RkXCI6IHsgXCJwbGF5QW5pbWFcIjogXCJhbmltYXRpb25cIiwgXCJtb3ZlQW5pbWFcIjogXCJfXCIsIFwiaWNvblwiOiBcImZrZGRcIiwgXCJuYW1lXCI6IFwiXCIsIFwiYmdtXCI6IFwiXCIsIFwiZGlhbVwiOiBcIjAuNVwiIH0sXG4gICAgICAgIFwiaHRtbVwiOiB7IFwicGxheUFuaW1hXCI6IFwiYW5pbWF0aW9uXCIsIFwibW92ZUFuaW1hXCI6IFwiX1wiLCBcImljb25cIjogXCJodG1tXCIsIFwibmFtZVwiOiBcIlwiLCBcImJnbVwiOiBcIlwiLCBcImRpYW1cIjogXCIwLjVcIiB9LFxuICAgICAgICBcImpybW5cIjogeyBcInBsYXlBbmltYVwiOiBcImFuaW1hdGlvblwiLCBcIm1vdmVBbmltYVwiOiBcIl9cIiwgXCJpY29uXCI6IFwianJtblwiLCBcIm5hbWVcIjogXCJcIiwgXCJiZ21cIjogXCJcIiwgXCJkaWFtXCI6IFwiMC41XCIgfSxcbiAgICAgICAgXCJtaHNnXCI6IHsgXCJwbGF5QW5pbWFcIjogXCJhbmltYXRpb25cIiwgXCJtb3ZlQW5pbWFcIjogXCJfXCIsIFwiaWNvblwiOiBcIm1oc2dcIiwgXCJuYW1lXCI6IFwiXCIsIFwiYmdtXCI6IFwiXCIsIFwiZGlhbVwiOiBcIjAuNVwiIH0sXG4gICAgfVxuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDkuIDku5hQb2tlciA1MuW8oFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHJpdmF0ZSBBTExQb2tlcjogbnVtYmVyW107XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOS4jeimgeWkp+Wwj+eOi1xuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHJpdmF0ZSBzdGF0aWMgbU51bUFMTFBva2VyOiBudW1iZXIgPSA1MjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWNleS4queUqOaIt+eJjOeahOS4quaVsFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHJpdmF0ZSBzdGF0aWMgX051bVBlclVzZXI6IG51bWJlciA9IDI7XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOa0l+eJjO+8jCDorqnmiYDmnInnurjniYzvvIzpmo/mnLrpobrluo9cbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHByaXZhdGUgU2h1ZmZsZSgpIHtcblxuICAgIH1cblxuXG5cbiAgICAvLyAjcmVnaW9uICAg5o6S5bqPIFxuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDljrvmjonoirHoibIg5LuO5aSn5Yiw5bCP5o6S5bqPIFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgLy8vIDxwYXJhbSBuYW1lPVwicGFpYXJyXCI+PC9wYXJhbT5cbiAgICAvLy8gPHJldHVybnM+PC9yZXR1cm5zPlxuICAgIHB1YmxpYyBzdGF0aWMgT3JkZXJQYWlOb0NvbG9yKHBhaWFycjogbnVtYmVyW10pOiBudW1iZXJbXSB7XG4gICAgICAgIGxldCBfdGVtcExpc3Q6IG51bWJlcltdID0gW107XG4gICAgICAgIFVJVXRpbC5Db25jYXQoX3RlbXBMaXN0LCBwYWlhcnIpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF90ZW1wTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKF90ZW1wTGlzdFtpXSA+IDEwMCkgX3RlbXBMaXN0W2ldICU9IDEwMDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdGVtcGFycjogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgVUlVdGlsLkNvbmNhdCh0ZW1wYXJyLCBfdGVtcExpc3QpO1xuICAgICAgICB0ZW1wYXJyID0gdGVtcGFyci5zb3J0KChuMSwgbjIpID0+IG4xIC0gbjIpO1xuICAgICAgICBsZXQgX0FTQ0xpc3Q6IG51bWJlcltdID0gW107XG4gICAgICAgIFVJVXRpbC5Db25jYXQoX0FTQ0xpc3QsIHRlbXBhcnIpO1xuICAgICAgICBfQVNDTGlzdC5yZXZlcnNlKCk7Ly/pu5jorqTmmK/ljYfluo/lj43ovazkuIDkuIvlsLHpmY3luo/kuoZcbiAgICAgICAgcmV0dXJuIF9BU0NMaXN0O1xuICAgIH1cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vICDku47lpKfliLDlsI/mjpLluo8gICAgICDkv53nlZnoirHoibJcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cInBhaWFyclwiPjwvcGFyYW0+XG4gICAgLy8vIDxyZXR1cm5zPjwvcmV0dXJucz5cbiAgICBwdWJsaWMgc3RhdGljIE9yZGVyUGFpV2l0aENvbG9yKHBhaWFycjogbnVtYmVyW10pOiBudW1iZXJbXSB7XG4gICAgICAgIGxldCBfdGVtcExpc3Q6IG51bWJlcltdID0gW107XG4gICAgICAgIFVJVXRpbC5Db25jYXQoX3RlbXBMaXN0LCBwYWlhcnIpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF90ZW1wTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKF90ZW1wTGlzdFtpXSA+IDEwMCkgX3RlbXBMaXN0W2ldICU9IDEwMDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdGVtcGFycjogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgVUlVdGlsLkNvbmNhdCh0ZW1wYXJyLCBfdGVtcExpc3QpO1xuICAgICAgICB0ZW1wYXJyLnNvcnQoKG4xLCBuMikgPT4gbjEgLSBuMik7XG4gICAgICAgIGxldCBfQVNDTGlzdDogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgVUlVdGlsLkNvbmNhdChfQVNDTGlzdCwgdGVtcGFycik7XG4gICAgICAgIF9BU0NMaXN0LnJldmVyc2UoKTsvL+m7mOiupOaYr+WNh+W6j+WPjei9rOS4gOS4i+WwsemZjeW6j+S6hlxuXG4gICAgICAgIC8v5bim5LiK6Iqx6Imy77yM5pyJ54K55bCP5aSN5p2CIFxuICAgICAgICBsZXQgX2RpY1Bva2VyMkNvdW50OiBNYXA8bnVtYmVyLCBudW1iZXI+ID0gdGhpcy5HZXRQb2tlcl9Db3VudChfQVNDTGlzdCk7XG4gICAgICAgIGxldCBfZGljUG9rZXIyQ291bnRVc2VkOiBNYXA8bnVtYmVyLCBudW1iZXI+ID0gbmV3IE1hcDxudW1iZXIsIG51bWJlcj4oKTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBfQVNDTGlzdC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaWYgKCFfZGljUG9rZXIyQ291bnRVc2VkLmhhcyhfQVNDTGlzdFtqXSkpIF9kaWNQb2tlcjJDb3VudFVzZWQuc2V0KF9BU0NMaXN0W2pdLCAxKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgYyA9IF9kaWNQb2tlcjJDb3VudFVzZWQuZ2V0KF9BU0NMaXN0W2pdKTsgYyA8PSA0OyBjKyspIHtcbiAgICAgICAgICAgICAgICBfZGljUG9rZXIyQ291bnRVc2VkLnNldChfQVNDTGlzdFtqXSwgX2RpY1Bva2VyMkNvdW50VXNlZC5nZXQoX0FTQ0xpc3Rbal0pICsgMSk7XG4gICAgICAgICAgICAgICAgaWYgKHBhaWFyci5pbmRleE9mKF9BU0NMaXN0W2pdICsgMTAwICogYykgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBfQVNDTGlzdFtqXSA9IF9BU0NMaXN0W2pdICsgMTAwICogYztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfQVNDTGlzdDtcbiAgICB9XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vICAgIOW4puS4iuiKseiJsu+8jOS7juaJi+eJjOS4reafpeaJviAgICAgICDkvKDlhaXnmoTlj4LmlbDpg73mmK/mjpLluo/ov4fnmoRcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cIl9zaG91cGFpXCI+PC9wYXJhbT5cbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJwb2tlcnZhbHVlXCI+PC9wYXJhbT5cbiAgICAvLy8gPHJldHVybnM+PC9yZXR1cm5zPlxuICAgIHB1YmxpYyBzdGF0aWMgR2V0UGFpQ29sb3IoX3Nob3VwYWk6IG51bWJlcltdLCBwb2tlcnZhbHVlOiBudW1iZXJbXSk6IG51bWJlcltdIHtcbiAgICAgICAgbGV0IF9BU0NMaXN0OiBudW1iZXJbXSA9IFtdO1xuICAgICAgICBVSVV0aWwuQ29uY2F0KF9BU0NMaXN0LCBwb2tlcnZhbHVlKTtcbiAgICAgICAgLy/luKbkuIroirHoibLvvIzmnInngrnlsI/lpI3mnYIgXG4gICAgICAgIGxldCBfZGljUG9rZXIyQ291bnQ6IE1hcDxudW1iZXIsIG51bWJlcj4gPSB0aGlzLkdldFBva2VyX0NvdW50KF9BU0NMaXN0KTtcbiAgICAgICAgbGV0IF9kaWNQb2tlcjJDb3VudFVzZWQ6IE1hcDxudW1iZXIsIG51bWJlcj4gPSBuZXcgTWFwPG51bWJlciwgbnVtYmVyPigpO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IF9BU0NMaXN0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBpZiAoIV9kaWNQb2tlcjJDb3VudFVzZWQuaGFzKF9BU0NMaXN0W2pdKSkgX2RpY1Bva2VyMkNvdW50VXNlZC5zZXQoX0FTQ0xpc3Rbal0sIDEpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBjID0gX2RpY1Bva2VyMkNvdW50VXNlZC5nZXQoX0FTQ0xpc3Rbal0pOyBjIDw9IDQ7IGMrKykge1xuICAgICAgICAgICAgICAgIF9kaWNQb2tlcjJDb3VudFVzZWQuc2V0KF9BU0NMaXN0W2pdLCBfZGljUG9rZXIyQ291bnRVc2VkLmdldChfQVNDTGlzdFtqXSkgKyAxKTtcbiAgICAgICAgICAgICAgICBpZiAoX3Nob3VwYWkuaW5kZXhPZihfQVNDTGlzdFtqXSArIDEwMCAqIGMpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgX0FTQ0xpc3Rbal0gPSBfQVNDTGlzdFtqXSArIDEwMCAqIGM7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX0FTQ0xpc3Q7XG4gICAgfVxuXG4gICAgLy/ojrflj5boirHoibJcbiAgICBwdWJsaWMgc3RhdGljIEdldENhcmRDb2xvcihjYkNhcmREYXRhOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gY2JDYXJkRGF0YSAvIDEwMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIEdldFBva2VyX0NvdW50KHBhaUxpc3Q6IG51bWJlcltdKTogTWFwPG51bWJlciwgbnVtYmVyPiB7XG4gICAgICAgIGxldCBfZGljUG9rZXIyQ291bnQ6IE1hcDxudW1iZXIsIG51bWJlcj4gPSBuZXcgTWFwPG51bWJlciwgbnVtYmVyPigpO1xuICAgICAgICBwYWlMaXN0LmZvckVhY2gocG9rZSA9PiB7XG4gICAgICAgICAgICBpZiAoX2RpY1Bva2VyMkNvdW50Lmhhcyhwb2tlKSkgX2RpY1Bva2VyMkNvdW50LnNldChwb2tlLCBfZGljUG9rZXIyQ291bnQuZ2V0KHBva2UpICsgMSk7XG4gICAgICAgICAgICBlbHNlIF9kaWNQb2tlcjJDb3VudC5zZXQocG9rZSwgMSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gX2RpY1Bva2VyMkNvdW50O1xuICAgIH1cblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8gIOaYr+WQpuWQjOiKsSBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cImNhcmRsaXN0XCI+PT09Kioq6ZyA6KaB5bim6Iqx6Imy55qE54mMKioqPT09PC9wYXJhbT5cbiAgICAvLy8gPHJldHVybnM+PC9yZXR1cm5zPlxuICAgIHB1YmxpYyBzdGF0aWMgSXNGbHVzaChjYXJkbGlzdDogbnVtYmVyW10pOiBib29sZWFuIHtcbiAgICAgICAgbGV0IF9pc2ZsdXNoID0gdHJ1ZTtcbiAgICAgICAgbGV0IGZsdXNoMCA9IFVJVXRpbC5OdW1iZXJUb0ludChjYXJkbGlzdFswXSAvIDEwMCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgY2FyZGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChmbHVzaDAgIT0gVUlVdGlsLk51bWJlclRvSW50KGNhcmRsaXN0W2ldIC8gMTAwKSkge1xuICAgICAgICAgICAgICAgIF9pc2ZsdXNoID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX2lzZmx1c2g7XG4gICAgfVxuICAgIC8vLyA8c3VtbWFyeT4gXG4gICAgLy8vIOWIpOaWreeJjOe7hOaYr+WQpuS4uumhuuWtkCAg5pSv5oyBM+S4quS7peWJjeeahOmhuuWtkOWIpOaWrVxuICAgIC8vLyA8L3N1bW1hcnk+IFxuICAgIC8vLyA8cGFyYW0gbmFtZT1cIlBHXCI+54mM57uEIOmcgOimgeWOu+iJsuS4juS7juWkp+WIsOWwj+aOkuW6jzwvcGFyYW0+IFxuICAgIC8vLyA8cmV0dXJucz7mmK/lkKbkuLrpobrlrZA8L3JldHVybnM+IFxuICAgIHB1YmxpYyBzdGF0aWMgSXNTdHJhaWdodChQRzogbnVtYmVyW10pOiBib29sZWFuIHtcbiAgICAgICAgbGV0IF9Jc1N0cmFpZ2h0ID0gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgUEcubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoUEdbaV0gLSAxID09IFBHW2kgKyAxXSkgX0lzU3RyYWlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgX0lzU3RyYWlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIV9Jc1N0cmFpZ2h0KSB7Ly8xNCDovawgMSDpkojlr7nnibnmrorpobrlrZDlpITnkIZcbiAgICAgICAgICAgIGxldCBfdGVtcEFycjogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgICAgIFVJVXRpbC5Db25jYXQoX3RlbXBBcnIsIFBHKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX3RlbXBBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RlbXBBcnJbaV0gPT0gMTQpIF90ZW1wQXJyW2ldID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90ZW1wQXJyID0gdGhpcy5PcmRlclBhaU5vQ29sb3IoX3RlbXBBcnIpOy8v6ZyA6KaB5LuO5aSn5Yiw5bCP5o6S5bqP5LiA5LiLXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF90ZW1wQXJyLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChfdGVtcEFycltpXSAtIDEgPT0gX3RlbXBBcnJbaSArIDFdKSBfSXNTdHJhaWdodCA9IHRydWU7XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF9Jc1N0cmFpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX0lzU3RyYWlnaHQ7XG4gICAgfVxuICAgIC8vLyA8c3VtbWFyeT4gXG4gICAgLy8vIOWIpOaWreeJjOe7hOaYr+WQpuS4uumhuuWtkCAgMTIzICAgMTQsMywyXG4gICAgLy8vIDwvc3VtbWFyeT4gXG4gICAgLy8vIDxwYXJhbSBuYW1lPVwiUEdcIj7niYznu4Q8L3BhcmFtPiBcbiAgICAvLy8gPHJldHVybnM+5piv5ZCm5Li66aG65a2QPC9yZXR1cm5zPiBcbiAgICBwcml2YXRlIHN0YXRpYyBJc1N1blpoaTEyMyhjYXJkbGlzdDogbnVtYmVyW10pOiBib29sZWFuIHtcbiAgICAgICAgaWYgKGNhcmRsaXN0WzBdID09IDE0ICYmIGNhcmRsaXN0WzFdID09IDMgJiYgY2FyZGxpc3RbMl0gPT0gMikgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cblxuICAgIC8v6I635Y+W57G75Z6LOlxuICAgIHB1YmxpYyBzdGF0aWMgR2V0VGV4YXNUeXBlKHNob3VwYWk6IG51bWJlcltdKTogUG9rZXJUZXhhc1R5cGUge1xuICAgICAgICBsZXQgX3Nob3VwYWk6IG51bWJlcltdID0gW107XG4gICAgICAgIFVJVXRpbC5Db25jYXQoX3Nob3VwYWksIHNob3VwYWkpO1xuICAgICAgICBpZiAoX3Nob3VwYWkubGVuZ3RoIDwgMikgcmV0dXJuIFBva2VyVGV4YXNUeXBlLkVycm9yOy8v5LmL5YmN5pivNeW8oOaYvuekuueJjOWei++8jOeOsOWcqOaYr+WPkTLlvKDniYzlkI7lsLHopoHmmL7npLroh6rlt7HnmoTniYzlnosgLDLlvKDmiYvniYzlj6rmmL7npLrpq5jniYzlkozkuIDlr7lcbiAgICAgICAgbGV0IGNiU2FtZUNvbG9yOiBib29sZWFuID0gVGV4YXMuSXNGbHVzaChfc2hvdXBhaSk7XG4gICAgICAgIGxldCBfdGVtcE5vQ29sb3I6IG51bWJlcltdID0gdGhpcy5PcmRlclBhaU5vQ29sb3IoX3Nob3VwYWkpO1xuICAgICAgICBsZXQgY2JMaW5lQ2FyZCA9IHRoaXMuSXNTdHJhaWdodChfdGVtcE5vQ29sb3IpO1xuXG4gICAgICAgIGlmIChjYlNhbWVDb2xvciAmJiBjYkxpbmVDYXJkICYmIF9zaG91cGFpLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgIGlmIChNYXRoLm1heC5hcHBseShudWxsLCBfdGVtcE5vQ29sb3IpID09IDE0ICYmIE1hdGgubWF4LmFwcGx5KG51bGwsIF90ZW1wTm9Db2xvcikgPT0gMTApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUG9rZXJUZXhhc1R5cGUuRml2ZV9GbHVzaF9Sb3lhbFN0cmFpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSByZXR1cm4gUG9rZXJUZXhhc1R5cGUuRml2ZV9GbHVzaF9TdHJhaWdodDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKGNiU2FtZUNvbG9yID09IGZhbHNlKSAmJiAoY2JMaW5lQ2FyZCA9PSB0cnVlKSAmJiBfc2hvdXBhaS5sZW5ndGggPiAyKSByZXR1cm4gUG9rZXJUZXhhc1R5cGUuRml2ZV9TdHJhaWdodDtcbiAgICAgICAgaWYgKChjYlNhbWVDb2xvciA9PSB0cnVlKSAmJiAoY2JMaW5lQ2FyZCA9PSBmYWxzZSkgJiYgX3Nob3VwYWkubGVuZ3RoID4gMikgcmV0dXJuIFBva2VyVGV4YXNUeXBlLkZpdmVfRmx1c2g7XG5cbiAgICAgICAgLy/miZHlhYvliIbmnpBcbiAgICAgICAgbGV0IF9zcGxpdEhlbHBlcjogVGV4YXNTcGxpdEhlbHBlciA9IG5ldyBUZXhhc1NwbGl0SGVscGVyKCk7XG4gICAgICAgIF9zcGxpdEhlbHBlci5TcGxpdChfc2hvdXBhaSk7XG4gICAgICAgIC8v57G75Z6L5Yik5patXG4gICAgICAgIGlmIChfc3BsaXRIZWxwZXIuX2ZvdXIubGVuZ3RoID09IDEgJiYgX3Nob3VwYWkubGVuZ3RoID4gMikgcmV0dXJuIFBva2VyVGV4YXNUeXBlLkZpdmVfQm9tYjtcbiAgICAgICAgaWYgKChfc3BsaXRIZWxwZXIuX3RocmVlLmxlbmd0aCA9PSAxKSAmJiAoX3NwbGl0SGVscGVyLl90d28ubGVuZ3RoID09IDIpICYmIF9zaG91cGFpLmxlbmd0aCA+IDIpIHJldHVybiBQb2tlclRleGFzVHlwZS5GaXZlX1RIUkVFX1RXTztcbiAgICAgICAgaWYgKChfc3BsaXRIZWxwZXIuX3RocmVlLmxlbmd0aCA9PSAxKSAmJiAoX3NwbGl0SGVscGVyLl90d28ubGVuZ3RoID09IDEpICYmIF9zaG91cGFpLmxlbmd0aCA+IDIpIHJldHVybiBQb2tlclRleGFzVHlwZS5GaXZlX1RIUkVFO1xuICAgICAgICBpZiAoX3NwbGl0SGVscGVyLl90d28ubGVuZ3RoID09IDIgJiYgX3Nob3VwYWkubGVuZ3RoID4gMikgcmV0dXJuIFBva2VyVGV4YXNUeXBlLkZpdmVfVFdPX1BBSVI7XG4gICAgICAgIGlmICgoX3NwbGl0SGVscGVyLl90d28ubGVuZ3RoID09IDEpICYmIChfc3BsaXRIZWxwZXIuX29uZS5sZW5ndGggPT0gX3Nob3VwYWkubGVuZ3RoIC0gMSkpIHJldHVybiBQb2tlclRleGFzVHlwZS5GaXZlX09ORV9QQUlSOy8v5Lik5byg54mM55qE5pe25YCZ5Y+v6IO95piv5LiA5a+5XG4gICAgICAgIHJldHVybiBQb2tlclRleGFzVHlwZS5GaXZlX1NpbmdsZTtcbiAgICB9XG5cbiAgICAvL+acgOWkp+eJjOWei1xuICAgIHB1YmxpYyBzdGF0aWMgR2V0Rml2ZUZyb21TZXZlbihjYkhhbmRDYXJkRGF0YTogbnVtYmVyW10sIGNiQ2VudGVyQ2FyZERhdGE6IG51bWJlcltdLCBhbGxDb3VudDogbnVtYmVyID0gNyk6IG51bWJlcltdIHtcbiAgICAgICAgbGV0IGNiVGVtcENhcmREYXRhOiBudW1iZXJbXSA9IFtdOy8v5Li05pe25Y+Y6YePXG4gICAgICAgIFVJVXRpbC5Db25jYXQoY2JUZW1wQ2FyZERhdGEsIGNiSGFuZENhcmREYXRhKTtcbiAgICAgICAgVUlVdGlsLkNvbmNhdChjYlRlbXBDYXJkRGF0YSwgY2JDZW50ZXJDYXJkRGF0YSk7XG4gICAgICAgIGlmIChjYlRlbXBDYXJkRGF0YS5sZW5ndGggIT0gYWxsQ291bnQgfHwgY2JUZW1wQ2FyZERhdGEubGVuZ3RoIDwgMikgcmV0dXJuIFtdOy8v5LmL5YmN5pivNeW8oOaYvuekuueJjOWei++8jOeOsOWcqOaYr+WPkTLlvKDniYzlkI7lsLHopoHmmL7npLroh6rlt7HnmoTniYzlnosgXG5cbiAgICAgICAgbGV0IF90ZW1wQ2FyZENvbXBhcmUgPSB0aGlzLk9yZGVyUGFpV2l0aENvbG9yKGNiVGVtcENhcmREYXRhKTtcblxuICAgICAgICBsZXQgY2JMYXN0Q2FyZERhdGEgPSBbXTtcbiAgICAgICAgaWYgKF90ZW1wQ2FyZENvbXBhcmUubGVuZ3RoIDwgNSkge1xuICAgICAgICAgICAgVUlVdGlsLkNvbmNhdChjYkxhc3RDYXJkRGF0YSwgX3RlbXBDYXJkQ29tcGFyZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYkxhc3RDYXJkRGF0YS5wdXNoKF90ZW1wQ2FyZENvbXBhcmVbMF0pO1xuICAgICAgICAgICAgY2JMYXN0Q2FyZERhdGEucHVzaChfdGVtcENhcmRDb21wYXJlWzFdKTtcbiAgICAgICAgICAgIGNiTGFzdENhcmREYXRhLnB1c2goX3RlbXBDYXJkQ29tcGFyZVsyXSk7XG4gICAgICAgICAgICBjYkxhc3RDYXJkRGF0YS5wdXNoKF90ZW1wQ2FyZENvbXBhcmVbM10pO1xuICAgICAgICAgICAgY2JMYXN0Q2FyZERhdGEucHVzaChfdGVtcENhcmRDb21wYXJlWzRdKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY2JDYXJkS2luZDogUG9rZXJUZXhhc1R5cGUgPSB0aGlzLkdldFRleGFzVHlwZShjYlRlbXBDYXJkRGF0YSk7XG4gICAgICAgIGxldCBjYlRlbXBDYXJkS2luZDogUG9rZXJUZXhhc1R5cGUgPSAwO1xuXG4gICAgICAgIGxldCBjYlRlbXBMYXN0Q2FyZERhdGE6IG51bWJlcltdID0gWzAsIDAsIDAsIDAsIDBdOy8v5Y+q5YGa5Yid5aeL5pqC5L2N55SoXG4gICAgICAgIC8v57uE5ZCI566X5rOVXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsQ291bnQgLSA0OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSBpICsgMTsgaiA8IGFsbENvdW50IC0gMzsgaisrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IGogKyAxOyBrIDwgYWxsQ291bnQgLSAyOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbCA9IGsgKyAxOyBsIDwgYWxsQ291bnQgLSAxOyBsKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG0gPSBsICsgMTsgbSA8IGFsbENvdW50OyBtKyspIHsgICAvL+iOt+WPluaVsOaNrlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNiVGVtcExhc3RDYXJkRGF0YVswXSA9IF90ZW1wQ2FyZENvbXBhcmVbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2JUZW1wTGFzdENhcmREYXRhWzFdID0gX3RlbXBDYXJkQ29tcGFyZVtqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYlRlbXBMYXN0Q2FyZERhdGFbMl0gPSBfdGVtcENhcmRDb21wYXJlW2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNiVGVtcExhc3RDYXJkRGF0YVszXSA9IF90ZW1wQ2FyZENvbXBhcmVbbF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2JUZW1wTGFzdENhcmREYXRhWzRdID0gX3RlbXBDYXJkQ29tcGFyZVttXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNiVGVtcENhcmRLaW5kID0gdGhpcy5HZXRUZXhhc1R5cGUoY2JUZW1wTGFzdENhcmREYXRhKTsvL+iOt+WPlueJjOWei1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/niYzlnovlpKflsI9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5Db21wYXJlUG9rZXJfbm4oY2JUZW1wTGFzdENhcmREYXRhLCBjYkxhc3RDYXJkRGF0YSkgPT0gVGV4YXNFbm11UmVzdWx0Lldpbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYkNhcmRLaW5kID0gY2JUZW1wQ2FyZEtpbmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNiTGFzdENhcmREYXRhID0gW11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVUlVdGlsLkNvbmNhdChjYkxhc3RDYXJkRGF0YSwgY2JUZW1wTGFzdENhcmREYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2JMYXN0Q2FyZERhdGE7XG4gICAgfVxuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDnm7jlkIzniYzlnovniYzlgLzlubPliIZcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cImFwcGx5Y2FyZFwiPjwvcGFyYW0+XG4gICAgLy8vIDxwYXJhbSBuYW1lPVwiY2FyZGxpc3RcIj48L3BhcmFtPlxuICAgIC8vLyA8cmV0dXJucz48L3JldHVybnM+XG4gICAgcHVibGljIHN0YXRpYyBDb21wYXJlUG9rZXJfbm4oYXBwbHljYXJkOiBudW1iZXJbXSwgY2FyZGxpc3Q6IG51bWJlcltdKTogVGV4YXNFbm11UmVzdWx0IHtcbiAgICAgICAgbGV0IF9hcHBseXR5cGU6IFBva2VyVGV4YXNUeXBlID0gdGhpcy5HZXRUZXhhc1R5cGUoYXBwbHljYXJkKTtcbiAgICAgICAgbGV0IF90eXBlOiBQb2tlclRleGFzVHlwZSA9IHRoaXMuR2V0VGV4YXNUeXBlKGNhcmRsaXN0KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuQ29tcGFyZVBva2VyKGFwcGx5Y2FyZCwgX2FwcGx5dHlwZSwgY2FyZGxpc3QsIF90eXBlKTtcbiAgICB9XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyBhcHBseWNhcmQg6KGo56S655Sz6K+35q+U54mM55qE5Lq6XG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJhcHBseWNhcmRcIj48L3BhcmFtPlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cIl9hcHBseXR5cGVcIj48L3BhcmFtPlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cImNhcmRsaXN0XCI+PC9wYXJhbT5cbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJfdHlwZVwiPjwvcGFyYW0+XG4gICAgLy8vIDxyZXR1cm5zPjwvcmV0dXJucz5cbiAgICBwcml2YXRlIHN0YXRpYyBDb21wYXJlUG9rZXIoYXBwbHljYXJkOiBudW1iZXJbXSwgX2FwcGx5dHlwZTogUG9rZXJUZXhhc1R5cGUsIGNhcmRsaXN0OiBudW1iZXJbXSwgX3R5cGU6IFBva2VyVGV4YXNUeXBlKTogVGV4YXNFbm11UmVzdWx0IHtcbiAgICAgICAgaWYgKF9hcHBseXR5cGUgPiBfdHlwZSkgcmV0dXJuIFRleGFzRW5tdVJlc3VsdC5XaW47XG4gICAgICAgIGVsc2UgaWYgKF9hcHBseXR5cGUgPCBfdHlwZSkgcmV0dXJuIFRleGFzRW5tdVJlc3VsdC5Mb3N0O1xuICAgICAgICBlbHNlIHsgICAvL+ebuOWQjOexu+WeiyDpnIDopoHmoLnmja7op4TliJnlho3lpITnkIbkuIDmrKHvvIwgIFxuICAgICAgICAgICAgbGV0IF90YXBwbHlMaXN0OiBudW1iZXJbXSA9IHRoaXMuT3JkZXJQYWlOb0NvbG9yKGFwcGx5Y2FyZCk7XG4gICAgICAgICAgICBsZXQgX3RhcmdldENhcmRMaXN0OiBudW1iZXJbXSA9IHRoaXMuT3JkZXJQYWlOb0NvbG9yKGNhcmRsaXN0KTtcbiAgICAgICAgICAgIHN3aXRjaCAoX2FwcGx5dHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgUG9rZXJUZXhhc1R5cGUuRml2ZV9TaW5nbGU6XG4gICAgICAgICAgICAgICAgY2FzZSBQb2tlclRleGFzVHlwZS5GaXZlX0ZsdXNoOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Db21wYXJlTGlzdE9uZUJ5T25lKF90YXBwbHlMaXN0LCBfdGFyZ2V0Q2FyZExpc3QpO1xuICAgICAgICAgICAgICAgIGNhc2UgUG9rZXJUZXhhc1R5cGUuRml2ZV9TdHJhaWdodDpcbiAgICAgICAgICAgICAgICBjYXNlIFBva2VyVGV4YXNUeXBlLkZpdmVfRmx1c2hfU3RyYWlnaHQ6XG4gICAgICAgICAgICAgICAgICAgIF90YXBwbHlMaXN0ID0gdGhpcy5EZWFsQTIzNDUoX3RhcHBseUxpc3QpO1xuICAgICAgICAgICAgICAgICAgICBfdGFyZ2V0Q2FyZExpc3QgPSB0aGlzLkRlYWxBMjM0NShfdGFyZ2V0Q2FyZExpc3QpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Db21wYXJlTGlzdE9uZUJ5T25lKF90YXBwbHlMaXN0LCBfdGFyZ2V0Q2FyZExpc3QpO1xuICAgICAgICAgICAgICAgIGNhc2UgUG9rZXJUZXhhc1R5cGUuRml2ZV9PTkVfUEFJUjpcbiAgICAgICAgICAgICAgICAgICAgbGV0IF9hcHBseU1vcmVPbmVfUDE6IG51bWJlcltdID0gdGhpcy5HZXRNb3JlT25lTGlzdChfdGFwcGx5TGlzdCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBfdGFyZ2V0TW9yZU9uZV9QMTogbnVtYmVyW10gPSB0aGlzLkdldE1vcmVPbmVMaXN0KF90YXJnZXRDYXJkTGlzdCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBfdGVtcFBhaXIxOiBUZXhhc0VubXVSZXN1bHQgPSB0aGlzLkNvbXBhcmVMaXN0T25lQnlPbmUoX2FwcGx5TW9yZU9uZV9QMSwgX3RhcmdldE1vcmVPbmVfUDEsIDEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3RlbXBQYWlyMSA9PSBUZXhhc0VubXVSZXN1bHQuRHJhdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IF9hcHBseU9ubHlPbmU6IG51bWJlcltdID0gdGhpcy5HZXRPbmx5T25lTGlzdChfdGFwcGx5TGlzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgX3RhcmdldE9ubHlPbmU6IG51bWJlcltdID0gdGhpcy5HZXRPbmx5T25lTGlzdChfdGFyZ2V0Q2FyZExpc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ29tcGFyZUxpc3RPbmVCeU9uZShfYXBwbHlPbmx5T25lLCBfdGFyZ2V0T25seU9uZSwgMyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90ZW1wUGFpcjE7XG4gICAgICAgICAgICAgICAgY2FzZSBQb2tlclRleGFzVHlwZS5GaXZlX1RXT19QQUlSOlxuICAgICAgICAgICAgICAgICAgICBsZXQgX2FwcGx5TW9yZU9uZV9QMjogbnVtYmVyW10gPSB0aGlzLkdldE1vcmVPbmVMaXN0KF90YXBwbHlMaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IF90YXJnZXRNb3JlT25lX1AyOiBudW1iZXJbXSA9IHRoaXMuR2V0TW9yZU9uZUxpc3QoX3RhcmdldENhcmRMaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IF90ZW1wUGFpcjI6IFRleGFzRW5tdVJlc3VsdCA9IHRoaXMuQ29tcGFyZUxpc3RPbmVCeU9uZShfYXBwbHlNb3JlT25lX1AyLCBfdGFyZ2V0TW9yZU9uZV9QMiwgMik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGVtcFBhaXIyID09IFRleGFzRW5tdVJlc3VsdC5EcmF3KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgX2FwcGx5T25seU9uZSA9IHRoaXMuR2V0T25seU9uZUxpc3QoX3RhcHBseUxpc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IF90YXJnZXRPbmx5T25lID0gdGhpcy5HZXRPbmx5T25lTGlzdChfdGFyZ2V0Q2FyZExpc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ29tcGFyZUxpc3RPbmVCeU9uZShfYXBwbHlPbmx5T25lLCBfdGFyZ2V0T25seU9uZSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90ZW1wUGFpcjI7XG4gICAgICAgICAgICAgICAgY2FzZSBQb2tlclRleGFzVHlwZS5GaXZlX1RIUkVFOlxuICAgICAgICAgICAgICAgIGNhc2UgUG9rZXJUZXhhc1R5cGUuRml2ZV9USFJFRV9UV086Ly9UZXhhc+WboOS4uuacieWFrOeJjCDlj6/og73kuIDmoLfnmoTniYzvvIzpnIDopoHov5vooYzlr7nlrZDmr5TovoNcbiAgICAgICAgICAgICAgICAgICAgbGV0IF9hcHBseU1vcmVPbmVfMzogbnVtYmVyW10gPSB0aGlzLkdldE1vcmVPbmVMaXN0KF90YXBwbHlMaXN0LCAzKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IF90YXJnZXRNb3JlT25lXzM6IG51bWJlcltdID0gdGhpcy5HZXRNb3JlT25lTGlzdChfdGFyZ2V0Q2FyZExpc3QsIDMpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgX3RlbXBQYWlyMzogVGV4YXNFbm11UmVzdWx0ID0gdGhpcy5Db21wYXJlTGlzdE9uZUJ5T25lKF9hcHBseU1vcmVPbmVfMywgX3RhcmdldE1vcmVPbmVfMywgMSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGVtcFBhaXIzID09IFRleGFzRW5tdVJlc3VsdC5EcmF3KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgX2FwcGx5TW9yZU9uZV8yOiBudW1iZXJbXSA9IHRoaXMuR2V0TW9yZU9uZUxpc3QoX3RhcHBseUxpc3QsIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IF90YXJnZXRNb3JlT25lXzI6IG51bWJlcltdID0gdGhpcy5HZXRNb3JlT25lTGlzdChfdGFyZ2V0Q2FyZExpc3QsIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ29tcGFyZUxpc3RPbmVCeU9uZShfYXBwbHlNb3JlT25lXzIsIF90YXJnZXRNb3JlT25lXzIsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGVtcFBhaXIzO1xuICAgICAgICAgICAgICAgIGNhc2UgUG9rZXJUZXhhc1R5cGUuRml2ZV9Cb21iOi8vVGV4YXPlm6DkuLrmnInlhazniYwg6ZyA6KaB5YaN5qyh5q+U6L6DXG4gICAgICAgICAgICAgICAgICAgIGxldCBfYXBwbHlNb3JlT25lXzQ6IG51bWJlcltdID0gdGhpcy5HZXRNb3JlT25lTGlzdChfdGFwcGx5TGlzdCwgNCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBfdGFyZ2V0TW9yZU9uZV80OiBudW1iZXJbXSA9IHRoaXMuR2V0TW9yZU9uZUxpc3QoX3RhcmdldENhcmRMaXN0LCA0KTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IF90ZW1wUGFpcjQ6IFRleGFzRW5tdVJlc3VsdCA9IHRoaXMuQ29tcGFyZUxpc3RPbmVCeU9uZShfYXBwbHlNb3JlT25lXzQsIF90YXJnZXRNb3JlT25lXzQsIDEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3RlbXBQYWlyNCA9PSBUZXhhc0VubXVSZXN1bHQuRHJhdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IF9hcHBseU9ubHlPbmU6IG51bWJlcltdID0gdGhpcy5HZXRPbmx5T25lTGlzdChfdGFwcGx5TGlzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgX3RhcmdldE9ubHlPbmU6IG51bWJlcltdID0gdGhpcy5HZXRPbmx5T25lTGlzdChfdGFyZ2V0Q2FyZExpc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ29tcGFyZUxpc3RPbmVCeU9uZShfYXBwbHlPbmx5T25lLCBfdGFyZ2V0T25seU9uZSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90ZW1wUGFpcjQ7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFRleGFzRW5tdVJlc3VsdC5EcmF3O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDkuIDmoLflpKcg5bmz5bGA5LiN6ZyA6KaB5q+U6Iqx6ImyXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJhcHBseWNhcmRcIj7ku47lpKfliLDlsI/mjpLluo8g5rKh5pyJ6Iqx6ImyPC9wYXJhbT5cbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJjYXJkbGlzdFwiPuS7juWkp+WIsOWwj+aOkuW6jyDmsqHmnInoirHoibI8L3BhcmFtPlxuICAgIC8vLyA8cmV0dXJucz48L3JldHVybnM+XG4gICAgcHJpdmF0ZSBzdGF0aWMgQ29tcGFyZUxpc3RPbmVCeU9uZShhcHBseWxpc3Q6IG51bWJlcltdLCBjYXJkbGlzdDogbnVtYmVyW10sIENvbXBhcmVMZW4gPSA1KTogVGV4YXNFbm11UmVzdWx0IHtcbiAgICAgICAgaWYgKGFwcGx5bGlzdFswXSA+IGNhcmRsaXN0WzBdKSByZXR1cm4gVGV4YXNFbm11UmVzdWx0LldpbjtcbiAgICAgICAgZWxzZSBpZiAoYXBwbHlsaXN0WzBdIDwgY2FyZGxpc3RbMF0pIHJldHVybiBUZXhhc0VubXVSZXN1bHQuTG9zdDtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoQ29tcGFyZUxlbiA9PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFRleGFzRW5tdVJlc3VsdC5EcmF3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGFwcGx5bGlzdFsxXSA+IGNhcmRsaXN0WzFdKSByZXR1cm4gVGV4YXNFbm11UmVzdWx0LldpbjtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChhcHBseWxpc3RbMV0gPCBjYXJkbGlzdFsxXSkgcmV0dXJuIFRleGFzRW5tdVJlc3VsdC5Mb3N0O1xuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoQ29tcGFyZUxlbiA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gVGV4YXNFbm11UmVzdWx0LkRyYXc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXBwbHlsaXN0WzJdID4gY2FyZGxpc3RbMl0pIHJldHVybiBUZXhhc0VubXVSZXN1bHQuV2luO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYXBwbHlsaXN0WzJdIDwgY2FyZGxpc3RbMl0pIHJldHVybiBUZXhhc0VubXVSZXN1bHQuTG9zdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChDb21wYXJlTGVuID09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFRleGFzRW5tdVJlc3VsdC5EcmF3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFwcGx5bGlzdFszXSA+IGNhcmRsaXN0WzNdKSByZXR1cm4gVGV4YXNFbm11UmVzdWx0LldpbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYXBwbHlsaXN0WzNdIDwgY2FyZGxpc3RbM10pIHJldHVybiBUZXhhc0VubXVSZXN1bHQuTG9zdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXBwbHlsaXN0WzRdID4gY2FyZGxpc3RbNF0pIHJldHVybiBUZXhhc0VubXVSZXN1bHQuV2luO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYXBwbHlsaXN0WzRdIDwgY2FyZGxpc3RbNF0pIHJldHVybiBUZXhhc0VubXVSZXN1bHQuTG9zdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBUZXhhc0VubXVSZXN1bHQuRHJhdztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8gQTIzNDXovazmiJAxMjM0NVxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgLy8vIDxwYXJhbSBuYW1lPVwiYXBwbHljYXJkXCI+6ZyA6KaB5Y676Imy77yM5o6S5bqP77yM5LuO5aSn5Yiw5bCP77yMPC9wYXJhbT4gXG4gICAgLy8vIDxyZXR1cm5zPjwvcmV0dXJucz5cbiAgICBwcml2YXRlIHN0YXRpYyBEZWFsQTIzNDUoc2hvdVBhaTogbnVtYmVyW10pOiBudW1iZXJbXSB7XG4gICAgICAgIGlmIChzaG91UGFpWzBdID09IDE0ICYmIHNob3VQYWlbMV0gPT0gNSAmJiBzaG91UGFpWzJdID09IDQgJiYgc2hvdVBhaVszXSA9PSAzICYmIHNob3VQYWlbNF0gPT0gMikge1xuICAgICAgICAgICAgbGV0IHMxMjM0NTogbnVtYmVyW10gPSBzaG91UGFpO1xuICAgICAgICAgICAgczEyMzQ1WzBdID0gMTsvL+mcgOimgeavlOi+g+aIkOacgOWwj+eahFxuICAgICAgICAgICAgczEyMzQ1ID0gdGhpcy5PcmRlclBhaU5vQ29sb3IoczEyMzQ1KTtcbiAgICAgICAgICAgIHJldHVybiBzMTIzNDU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNob3VQYWk7XG4gICAgfVxuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyAgICAgXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJfc2hvdVBhaVwiPumcgOimgeWOu+iJsu+8jOaOkuW6j++8jOS7juWkp+WIsOWwj++8jDwvcGFyYW0+XG4gICAgLy8vIDxwYXJhbSBuYW1lPVwiX251bVwiPjwvcGFyYW0+XG4gICAgLy8vIDxyZXR1cm5zPjwvcmV0dXJucz5cbiAgICBwcml2YXRlIHN0YXRpYyBHZXRNb3JlT25lTGlzdChfc2hvdVBhaTogbnVtYmVyW10sIF9udW0gPSAyKTogbnVtYmVyW10ge1xuICAgICAgICBsZXQgX3NwbGl0SGVscGVyOiBUZXhhc1NwbGl0SGVscGVyID0gbmV3IFRleGFzU3BsaXRIZWxwZXIoKTtcbiAgICAgICAgX3NwbGl0SGVscGVyLlNwbGl0KF9zaG91UGFpKTtcbiAgICAgICAgbGV0IF9yZXRMaXN0OiBudW1iZXJbXSA9IFtdO1xuICAgICAgICBzd2l0Y2ggKF9udW0pIHtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBfcmV0TGlzdCA9IF9zcGxpdEhlbHBlci5fdHdvO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIF9yZXRMaXN0ID0gX3NwbGl0SGVscGVyLl90aHJlZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBfcmV0TGlzdCA9IF9zcGxpdEhlbHBlci5fZm91cjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6IGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfcmV0TGlzdDtcbiAgICB9XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vICAgICBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cIl9zaG91UGFpXCI+6ZyA6KaB5Y676Imy77yM5o6S5bqP77yM5LuO5aSn5Yiw5bCP77yMPC9wYXJhbT5cbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJfbnVtXCI+PC9wYXJhbT5cbiAgICAvLy8gPHJldHVybnM+PC9yZXR1cm5zPlxuICAgIHByaXZhdGUgc3RhdGljIEdldE9ubHlPbmVMaXN0KF9zaG91UGFpOiBudW1iZXJbXSk6IG51bWJlcltdIHtcbiAgICAgICAgbGV0IF9zcGxpdEhlbHBlcjogVGV4YXNTcGxpdEhlbHBlciA9IG5ldyBUZXhhc1NwbGl0SGVscGVyKCk7XG4gICAgICAgIF9zcGxpdEhlbHBlci5TcGxpdChfc2hvdVBhaSk7XG4gICAgICAgIGxldCBfcmV0TGlzdDogbnVtYmVyW10gPSBfc3BsaXRIZWxwZXIuX29ubHlPbmU7XG4gICAgICAgIHJldHVybiBfcmV0TGlzdDtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgc3RhdGljIF9kaWNUeXBlMlN0cmluZzogRGljSGVscGVyW10gPSBbXTtcblxuICAgIHB1YmxpYyBzdGF0aWMgR2V0TmFtZUJ5VHlwZShfdHlwZTogUG9rZXJUZXhhc1R5cGUpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5fZGljVHlwZTJTdHJpbmcubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuX2RpY1R5cGUyU3RyaW5nLnB1c2gobmV3IERpY0hlbHBlcihQb2tlclRleGFzVHlwZS5GaXZlX1NpbmdsZSwgXCLpq5jniYxcIikpO1xuICAgICAgICAgICAgdGhpcy5fZGljVHlwZTJTdHJpbmcucHVzaChuZXcgRGljSGVscGVyKFBva2VyVGV4YXNUeXBlLkZpdmVfT05FX1BBSVIsIFwi5LiA5a+5XCIpKTtcbiAgICAgICAgICAgIHRoaXMuX2RpY1R5cGUyU3RyaW5nLnB1c2gobmV3IERpY0hlbHBlcihQb2tlclRleGFzVHlwZS5GaXZlX1RXT19QQUlSLCBcIuS4pOWvuVwiKSk7XG4gICAgICAgICAgICB0aGlzLl9kaWNUeXBlMlN0cmluZy5wdXNoKG5ldyBEaWNIZWxwZXIoUG9rZXJUZXhhc1R5cGUuRml2ZV9USFJFRSwgXCLkuInmnaFcIikpO1xuICAgICAgICAgICAgdGhpcy5fZGljVHlwZTJTdHJpbmcucHVzaChuZXcgRGljSGVscGVyKFBva2VyVGV4YXNUeXBlLkZpdmVfU3RyYWlnaHQsIFwi6aG65a2QXCIpKTtcbiAgICAgICAgICAgIHRoaXMuX2RpY1R5cGUyU3RyaW5nLnB1c2gobmV3IERpY0hlbHBlcihQb2tlclRleGFzVHlwZS5GaXZlX0ZsdXNoLCBcIuWQjOiKsVwiKSk7XG4gICAgICAgICAgICB0aGlzLl9kaWNUeXBlMlN0cmluZy5wdXNoKG5ldyBEaWNIZWxwZXIoUG9rZXJUZXhhc1R5cGUuRml2ZV9USFJFRV9UV08sIFwi6JGr6IqmXCIpKTtcbiAgICAgICAgICAgIHRoaXMuX2RpY1R5cGUyU3RyaW5nLnB1c2gobmV3IERpY0hlbHBlcihQb2tlclRleGFzVHlwZS5GaXZlX0JvbWIsIFwi5Zub5p2hXCIpKTtcbiAgICAgICAgICAgIHRoaXMuX2RpY1R5cGUyU3RyaW5nLnB1c2gobmV3IERpY0hlbHBlcihQb2tlclRleGFzVHlwZS5GaXZlX0ZsdXNoX1N0cmFpZ2h0LCBcIuWQjOiKsemhulwiKSk7XG4gICAgICAgICAgICB0aGlzLl9kaWNUeXBlMlN0cmluZy5wdXNoKG5ldyBEaWNIZWxwZXIoUG9rZXJUZXhhc1R5cGUuRml2ZV9GbHVzaF9Sb3lhbFN0cmFpZ2h0LCBcIueah+WutuWQjOiKsemhulwiKSk7XG5cbiAgICAgICAgfVxuICAgICAgICB2YXIgbmFtZSA9IHRoaXMuX2RpY1R5cGUyU3RyaW5nLmZpbmQoKF9kaCkgPT4geyByZXR1cm4gX2RoLl90ID09IF90eXBlOyB9KTtcbiAgICAgICAgaWYgKG5hbWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCIgIGVycm9yIHR5cGU6XCIgKyBfdHlwZS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuYW1lLl9uYW1lO1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBHZXRUZXhhc05hbWUoY2FyZHM6IG51bWJlcltdKTogc3RyaW5nIHtcbiAgICAgICAgdmFyIF90eXBlID0gdGhpcy5HZXRUZXhhc1R5cGUoY2FyZHMpO1xuICAgICAgICByZXR1cm4gdGhpcy5HZXROYW1lQnlUeXBlKF90eXBlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIEdldE1heFR5cGVDYXJkcyhjYXJkczogbnVtYmVyW10pOiBudW1iZXJbXSB7XG4gICAgICAgIGxldCB0ZW1wQ2FyZHM6IG51bWJlcltdID0gW11cbiAgICAgICAgc3dpdGNoICh0aGlzLkdldFRleGFzVHlwZShjYXJkcykpIHtcbiAgICAgICAgICAgIGNhc2UgUG9rZXJUZXhhc1R5cGUuRml2ZV9TaW5nbGU6XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgUG9rZXJUZXhhc1R5cGUuRml2ZV9PTkVfUEFJUjpcbiAgICAgICAgICAgICAgICB0ZW1wQ2FyZHMgPSB0aGlzLkdldFNhbWVWYWxlQ2FyZHMoY2FyZHMsIDIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBQb2tlclRleGFzVHlwZS5GaXZlX1RXT19QQUlSOlxuICAgICAgICAgICAgICAgIHRlbXBDYXJkcyA9IHRoaXMuR2V0U2FtZVZhbGVDYXJkcyhjYXJkcywgMik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBva2VyVGV4YXNUeXBlLkZpdmVfVEhSRUU6XG4gICAgICAgICAgICAgICAgdGVtcENhcmRzID0gdGhpcy5HZXRTYW1lVmFsZUNhcmRzKGNhcmRzLCAzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgUG9rZXJUZXhhc1R5cGUuRml2ZV9TdHJhaWdodDpcbiAgICAgICAgICAgICAgICBVSVV0aWwuQ29uY2F0KHRlbXBDYXJkcywgY2FyZHMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBQb2tlclRleGFzVHlwZS5GaXZlX0ZsdXNoOlxuICAgICAgICAgICAgICAgIFVJVXRpbC5Db25jYXQodGVtcENhcmRzLCBjYXJkcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBva2VyVGV4YXNUeXBlLkZpdmVfVEhSRUVfVFdPOlxuICAgICAgICAgICAgICAgIFVJVXRpbC5Db25jYXQodGVtcENhcmRzLCBjYXJkcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBva2VyVGV4YXNUeXBlLkZpdmVfQm9tYjpcbiAgICAgICAgICAgICAgICB0ZW1wQ2FyZHMgPSB0aGlzLkdldFNhbWVWYWxlQ2FyZHMoY2FyZHMsIDQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBQb2tlclRleGFzVHlwZS5GaXZlX0ZsdXNoX1N0cmFpZ2h0OlxuICAgICAgICAgICAgICAgIFVJVXRpbC5Db25jYXQodGVtcENhcmRzLCBjYXJkcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBva2VyVGV4YXNUeXBlLkZpdmVfRmx1c2hfUm95YWxTdHJhaWdodDpcbiAgICAgICAgICAgICAgICBVSVV0aWwuQ29uY2F0KHRlbXBDYXJkcywgY2FyZHMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBQb2tlclRleGFzVHlwZS5FcnJvcjpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGVtcENhcmRzO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIEdldFNhbWVWYWxlQ2FyZHMoY2FyZHM6IG51bWJlcltdLCBzYW1lQ291bnQ6IG51bWJlcik6IG51bWJlcltdIHtcbiAgICAgICAgbGV0IHRlbXBDYXJkczogbnVtYmVyW10gPSBbXTtcblxuICAgICAgICBsZXQgdGVtcERpYzogTWFwPG51bWJlciwgbnVtYmVyW10+ID0gbmV3IE1hcDxudW1iZXIsIG51bWJlcltdPigpO1xuICAgICAgICBjYXJkcy5mb3JFYWNoKHBva2UgPT4ge1xuICAgICAgICAgICAgbGV0IGtleSA9IFVJVXRpbC5OdW1iZXJUb0ludChwb2tlICUgMTAwKTtcbiAgICAgICAgICAgIGlmICh0ZW1wRGljLmhhcyhrZXkpKVxuICAgICAgICAgICAgICAgIHRlbXBEaWMuZ2V0KGtleSkucHVzaChwb2tlKTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBjYXJkTGlzdDogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgICAgICAgICBjYXJkTGlzdC5wdXNoKHBva2UpO1xuICAgICAgICAgICAgICAgIHRlbXBEaWMuc2V0KGtleSwgY2FyZExpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0ZW1wRGljLmZvckVhY2godGVtcCA9PiB7XG4gICAgICAgICAgICBpZiAodGVtcC5sZW5ndGggPT0gc2FtZUNvdW50KVxuICAgICAgICAgICAgICAgIFVJVXRpbC5Db25jYXQodGVtcENhcmRzLCB0ZW1wKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0ZW1wQ2FyZHM7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UGxheWVyUG9zVHlwZShwb3M6IG51bWJlciwgYnBvczogbnVtYmVyLCB0TGlzdDogVGV4VXNlckluZm9TRFtdKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHBvc1R5cGUgPSBcIlwiO1xuICAgICAgICB0aGlzLmN1clBvcyA9IFtdO1xuICAgICAgICBpZiAodExpc3QgPT0gbnVsbCB8fCB0TGlzdC5sZW5ndGggPD0gMCkgcmV0dXJuIHBvc1R5cGU7XG4gICAgICAgIHN3aXRjaCAodExpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJQb3MgPSB0aGlzLnR3b1BvcztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICB0aGlzLmN1clBvcyA9IHRoaXMudGhyZWVQb3M7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJQb3MgPSB0aGlzLmZvdXJQb3M7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJQb3MgPSB0aGlzLmZpdmVQb3M7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJQb3MgPSB0aGlzLnNpeFBvcztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICB0aGlzLmN1clBvcyA9IHRoaXMuc2V2ZW5Qb3M7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJQb3MgPSB0aGlzLmVpZ2h0UG9zO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgIHRoaXMuY3VyUG9zID0gdGhpcy5uaW5lUG9zO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGxldCBocG9zID0gdGhpcy5HZXRIYW5kbGVQb3MocG9zLCBicG9zLCB0TGlzdCk7XG4gICAgICAgIGlmICh0aGlzLmN1clBvcyA9PSBudWxsIHx8IHRoaXMuY3VyUG9zLmxlbmd0aCA8PSAwIHx8IHRoaXMuY3VyUG9zLmxlbmd0aCA8IGhwb3MgfHwgaHBvcyA8PSAwKSByZXR1cm4gcG9zVHlwZTtcbiAgICAgICAgZWxzZSByZXR1cm4gdGhpcy5jdXJQb3NbaHBvcyAtIDFdO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIEdldEhhbmRsZVBvcyhwb3M6IG51bWJlciwgYnBvczogbnVtYmVyLCB0TGlzdDogVGV4VXNlckluZm9TRFtdKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IGhQb3MgPSAwO1xuICAgICAgICBsZXQgY3VyVXNlcjogVGV4VXNlckluZm9TRCA9IHRMaXN0LmZpbmQoaXRlbSA9PiB7IHJldHVybiBpdGVtLnBvcyA9PSBwb3MgfSk7XG4gICAgICAgIGxldCBiVXNlcjogVGV4VXNlckluZm9TRCA9IHRMaXN0LmZpbmQoaXRlbSA9PiB7IHJldHVybiBpdGVtLnBvcyA9PSBicG9zIH0pO1xuXG4gICAgICAgIGlmICh0TGlzdCA9PSBudWxsIHx8IHRMaXN0Lmxlbmd0aCA8IDIgfHwgY3VyVXNlciA9PSBudWxsIHx8IGJVc2VyID09IG51bGwpIHJldHVybiBoUG9zO1xuICAgICAgICBsZXQgbmV3TGlzdDogVGV4VXNlckluZm9TRFtdID0gW107XG4gICAgICAgIG5ld0xpc3QgPSB0TGlzdDtcbiAgICAgICAgbmV3TGlzdC5zb3J0KCh4LCB5KSA9PiB7IHJldHVybiB4LnBvcyAtIHkucG9zOyB9KTtcbiAgICAgICAgbGV0IHNQb3MgPSAwO1xuICAgICAgICBsZXQgYkluZHg6IG51bWJlciA9IG5ld0xpc3QuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5wb3MgPT0gYnBvcyk7XG4gICAgICAgIGxldCBjSW5keDogbnVtYmVyID0gbmV3TGlzdC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnBvcyA9PSBwb3MpO1xuICAgICAgICBpZiAobmV3TGlzdC5sZW5ndGggPT0gMikge1xuICAgICAgICAgICAgc1BvcyA9IGJJbmR4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc1BvcyA9IGJJbmR4IC0gMSA+PSAwID8gYkluZHggLSAxIDogYkluZHggLSAxICsgbmV3TGlzdC5sZW5ndGg7XG5cbiAgICAgICAgfVxuICAgICAgICBoUG9zID0gc1BvcyAtIGNJbmR4IDwgMCA/IHNQb3MgLSBjSW5keCArIG5ld0xpc3QubGVuZ3RoICsgMSA6IHNQb3MgLSBjSW5keCArIDE7XG4gICAgICAgIHJldHVybiBoUG9zO1xuICAgIH1cblxuICAgIC8v5b6u5bCP5oi/6Ze05L+d55WZ5bCP5pWwXG4gICAgcHVibGljIHN0YXRpYyBmb3JtYXROdW1iZXIxMDAoX3ZhbDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IGJyYXRlID0gRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuYnJhdGU7XG4gICAgICAgIGlmIChicmF0ZSA+PSAxMDApIHtcbiAgICAgICAgICAgIHJldHVybiBVSVV0aWwuTnVtYmVyVG9JbnQoX3ZhbCAvIDEwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gVUlVdGlsLmZvcm1hdE51bWJlcjEwMChfdmFsKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRleGFzU3BsaXRIZWxwZXIge1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5rKh5pyJ6aKc6Imy55qEXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgX3Nob3VQYWk6IG51bWJlcltdO1xuICAgIHB1YmxpYyBfc2hvdVBhaUNvbG9yOiBudW1iZXJbXTtcblxuICAgIHB1YmxpYyBfb25seU9uZTogbnVtYmVyW10gPSBbXTtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOaVo+eJjO+8jEHvvIwy77yMM++8jDTvvIw1IOS4jeeul+aVo+eJjOS6hiAg5Liq5pWw5Li6MeS4lOS4jeWcqOi/nuWtkOS4reOAglxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIF91cm9uNU9uZTogbnVtYmVyW10gPSBbXTtcbiAgICBwdWJsaWMgX3Vyb241T25lQ29sb3I6IG51bWJlcltdID0gW107XG4gICAgLy/ln7rnoYDnu5PmnoQgXG4gICAgcHVibGljIF9vbmU6IG51bWJlcltdID0gW107XG4gICAgcHVibGljIF90d286IG51bWJlcltdID0gW107XG4gICAgcHVibGljIF90aHJlZTogbnVtYmVyW10gPSBbXTtcbiAgICBwdWJsaWMgX2ZvdXI6IG51bWJlcltdID0gW107XG5cbiAgICBwdWJsaWMgX3N0cmFpZ2h0OiBudW1iZXJbXVtdID0gW107ICAvL+i/nuWtkCDku44zfkHnmoTmnIDplb/ljZXov54gICDlj6/og73mmK/kuKTkuKrov57lrZBcblxuICAgIHB1YmxpYyBfZGljQ29sb3IyTGlzdDogTWFwPG51bWJlciwgbnVtYmVyW10+ID0gbmV3IE1hcDxudW1iZXIsIG51bWJlcltdPigpO1xuICAgIHB1YmxpYyBTcGxpdChzaG91cGFpOiBudW1iZXJbXSkge1xuICAgICAgICB0aGlzLl9zaG91UGFpQ29sb3IgPSBbXTtcbiAgICAgICAgVUlVdGlsLkNvbmNhdCh0aGlzLl9zaG91UGFpQ29sb3IsIHNob3VwYWkpO1xuICAgICAgICB0aGlzLlNlYXJjaENvbG9yKCk7XG4gICAgICAgIHRoaXMuX3Nob3VQYWkgPSBbXTtcbiAgICAgICAgVUlVdGlsLkNvbmNhdCh0aGlzLl9zaG91UGFpLCBzaG91cGFpKTtcbiAgICAgICAgdGhpcy5fc2hvdVBhaSA9IFRleGFzLk9yZGVyUGFpTm9Db2xvcih0aGlzLl9zaG91UGFpKTtcbiAgICAgICAgdGhpcy5TZWFyY2hCYXNlKCk7XG5cbiAgICAgICAgdGhpcy5fc3RyYWlnaHQgPSBbXTtcbiAgICAgICAgdGhpcy5TZWFyY2hTdHJhaWdodCgpO1xuICAgICAgICB0aGlzLlNlYXJjaFN0cmFpZ2h0QSgpO1xuXG4gICAgICAgIHRoaXMuX3Vyb241T25lID0gW107XG4gICAgICAgIHRoaXMuU2VhcmNoVW5yb24oKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgU2VhcmNoQ29sb3IoKSB7XG4gICAgICAgIHRoaXMuX3Nob3VQYWlDb2xvci5mb3JFYWNoKHBhaSA9PiB7XG4gICAgICAgICAgICBsZXQgX2NvbG9yID0gVGV4YXMuR2V0Q2FyZENvbG9yKHBhaSk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2RpY0NvbG9yMkxpc3QuaGFzKF9jb2xvcikpIHRoaXMuX2RpY0NvbG9yMkxpc3Quc2V0KF9jb2xvciwgW10pO1xuICAgICAgICAgICAgdGhpcy5fZGljQ29sb3IyTGlzdC5nZXQoX2NvbG9yKS5wdXNoKHBhaSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvL+WIhuaIkOWbm+S4quaVsOe7hFxuICAgIHB1YmxpYyBTZWFyY2hCYXNlKCkge1xuICAgICAgICBsZXQgX2RpY1Bva2VyMkNvdW50OiBNYXA8bnVtYmVyLCBudW1iZXI+ID0gVGV4YXMuR2V0UG9rZXJfQ291bnQodGhpcy5fc2hvdVBhaSk7XG4gICAgICAgIGxldCBfdGVtcDogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgX2RpY1Bva2VyMkNvdW50LmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGlmIChfZGljUG9rZXIyQ291bnQuZ2V0KGtleSkgPT0gNCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX29uZS5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHdvLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB0aGlzLl90aHJlZS5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZm91ci5wdXNoKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChfZGljUG9rZXIyQ291bnQuZ2V0KGtleSkgPT0gMykge1xuICAgICAgICAgICAgICAgIHRoaXMuX29uZS5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHdvLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB0aGlzLl90aHJlZS5wdXNoKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChfZGljUG9rZXIyQ291bnQuZ2V0KGtleSkgPT0gMikge1xuICAgICAgICAgICAgICAgIHRoaXMuX29uZS5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHdvLnB1c2goa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKF9kaWNQb2tlcjJDb3VudC5nZXQoa2V5KSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fb25lLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9vbmx5T25lLnB1c2goa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX29uZSA9IFRleGFzLk9yZGVyUGFpTm9Db2xvcih0aGlzLl9vbmUpO1xuICAgICAgICB0aGlzLl90d28gPSBUZXhhcy5PcmRlclBhaU5vQ29sb3IodGhpcy5fdHdvKTtcbiAgICAgICAgdGhpcy5fdGhyZWUgPSBUZXhhcy5PcmRlclBhaU5vQ29sb3IodGhpcy5fdGhyZWUpO1xuICAgICAgICB0aGlzLl9mb3VyID0gVGV4YXMuT3JkZXJQYWlOb0NvbG9yKHRoaXMuX2ZvdXIpO1xuICAgIH1cblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8gXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwcml2YXRlIFNlYXJjaFN0cmFpZ2h0KCkge1xuICAgICAgICBpZiAodGhpcy5fc2hvdVBhaS5sZW5ndGggPCA1KSByZXR1cm47Ly/kuI3otrM15Liq54mM5bCx5LiN5aSE55CG55qEICAgIFxuICAgICAgICBsZXQgX3RlbXBvbmU6IG51bWJlcltdID0gdGhpcy5fb25lO1xuICAgICAgICBsZXQgX21pblN0cmFpZ2h0OiBudW1iZXJbXSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF90ZW1wb25lLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgaWYgKF90ZW1wb25lW2ldIC0gMSA9PSBfdGVtcG9uZVtpICsgMV0pIHtcbiAgICAgICAgICAgICAgICBfbWluU3RyYWlnaHQucHVzaChfdGVtcG9uZVtpXSk7XG4gICAgICAgICAgICAgICAgaWYgKGkgKyAxID09IF90ZW1wb25lLmxlbmd0aCAtIDEpIF9taW5TdHJhaWdodC5wdXNoKF90ZW1wb25lW2kgKyAxXSk7Ly/mnIDlkI7kuIDkuKropoHliqDkuIpcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Ugey8v5Y+v6IO95Lya5Ye6546w5Yia5omN5aW9NeS4qu+8jOiAjOWQjui/mOacieeJjO+8jOaQnOe0ouS4jeWIsFxuICAgICAgICAgICAgICAgIF9taW5TdHJhaWdodC5wdXNoKF90ZW1wb25lW2ldKTtcbiAgICAgICAgICAgICAgICBpZiAoX21pblN0cmFpZ2h0Lmxlbmd0aCA+PSA1KSB0aGlzLl9zdHJhaWdodC5wdXNoKF9taW5TdHJhaWdodCk7XG4gICAgICAgICAgICAgICAgX21pblN0cmFpZ2h0ID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9taW5TdHJhaWdodC5sZW5ndGggPj0gNSkgdGhpcy5fc3RyYWlnaHQucHVzaChfbWluU3RyYWlnaHQpOy8v5pyA5ZCO5LiA57uE5b+F6aG75Yqg6L+b5Y67IOS4jeeEtuS4gOS4qumVv+i/nuWtkOayoeaQnOe0ouWIsFxuICAgIH1cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWPquWkhOeQhkEyMzQ1ICAgXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwcml2YXRlIFNlYXJjaFN0cmFpZ2h0QSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Nob3VQYWkubGVuZ3RoIDwgNSkgcmV0dXJuOy8v5LiN6LazNeS4queJjOWwseS4jeWkhOeQhueahCAgXG4gICAgICAgIGlmICh0aGlzLl9zaG91UGFpLmluZGV4T2YoMTQpID09IC0xKSByZXR1cm47Ly/msqHmnIlB5bCx5LiN5aSE55CG5LqGXG4gICAgICAgIGxldCBfdGVtcFNob3VQYWk6IG51bWJlcltdID0gdGhpcy5fc2hvdVBhaTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfdGVtcFNob3VQYWkubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoX3RlbXBTaG91UGFpW2ldID09IDE0KSBfdGVtcFNob3VQYWlbaV0gPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IF9taW5TdHJhaWdodDogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfdGVtcFNob3VQYWkubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoX3RlbXBTaG91UGFpW2ldIC0gMSA9PSBfdGVtcFNob3VQYWlbaSArIDFdKSB7XG4gICAgICAgICAgICAgICAgX21pblN0cmFpZ2h0LnB1c2goX3RlbXBTaG91UGFpW2ldKTtcbiAgICAgICAgICAgICAgICBpZiAoaSArIDEgPT0gX3RlbXBTaG91UGFpLmxlbmd0aCAtIDEpIF9taW5TdHJhaWdodC5wdXNoKF90ZW1wU2hvdVBhaVtpICsgMV0pOy8v5pyA5ZCO5LiA5Liq6KaB5Yqg5LiKXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHsvL+WPr+iDveS8muWHuueOsOWImuaJjeWlvTXkuKrvvIzogIzlkI7ov5jmnInniYzvvIzmkJzntKLkuI3liLBcbiAgICAgICAgICAgICAgICBfbWluU3RyYWlnaHQucHVzaChfdGVtcFNob3VQYWlbaV0pO1xuICAgICAgICAgICAgICAgIGlmIChfbWluU3RyYWlnaHQubGVuZ3RoID49IDUpIHRoaXMuX3N0cmFpZ2h0LnB1c2goX21pblN0cmFpZ2h0KTtcbiAgICAgICAgICAgICAgICBfbWluU3RyYWlnaHQgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoX21pblN0cmFpZ2h0Lmxlbmd0aCA+PSA1ICYmIF9taW5TdHJhaWdodC5pbmRleE9mKDEpID49IDApIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX3RlbXBTaG91UGFpLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChfdGVtcFNob3VQYWlbaV0gPT0gMSkgX3RlbXBTaG91UGFpW2ldID0gMTQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9zdHJhaWdodC5wdXNoKF9taW5TdHJhaWdodCk7Ly/mnIDlkI7kuIDnu4Tlv4XpobvliqDov5vljrsg5LiN54S25LiA5Liq6ZW/6L+e5a2Q5rKh5pCc57Si5YiwXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmkJzntKLmlaPniYwg5Liq5pWw5LiN6IO95aSn5LqOMe+8jOS4jeWcqOi/nuWtkOS4reOAglxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHJpdmF0ZSBTZWFyY2hVbnJvbigpIHtcbiAgICAgICAgbGV0IF90ZW1wVW5yb246IG51bWJlcltdID0gdGhpcy5fb25seU9uZTtcbiAgICAgICAgdGhpcy5fc3RyYWlnaHQuZm9yRWFjaChfdGVtcFN0cmFpZ2h0ID0+IHtcbiAgICAgICAgICAgIF90ZW1wU3RyYWlnaHQuZm9yRWFjaChfY2FyZFZhbCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKF90ZW1wVW5yb24uaW5kZXhPZihfY2FyZFZhbCkgPj0gMCkgX3RlbXBVbnJvbi5zcGxpY2UoX3RlbXBVbnJvbi5pbmRleE9mKF9jYXJkVmFsKSwgMSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3Vyb241T25lID0gX3RlbXBVbnJvbjtcbiAgICAgICAgdGhpcy5fdXJvbjVPbmVDb2xvciA9IHRoaXMuX3Vyb241T25lO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3Vyb241T25lQ29sb3IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX3Nob3VQYWlDb2xvci5mb3JFYWNoKF9jbCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKF9jbCAlIDEwMCA9PSB0aGlzLl91cm9uNU9uZUNvbG9yW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Vyb241T25lQ29sb3JbaV0gPSBfY2w7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIEdldE1pblVucm9uKCk6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLl91cm9uNU9uZUNvbG9yLmxlbmd0aCA8IDApIHJldHVybiAwO1xuICAgICAgICBsZXQgX3RlbXA6IG51bWJlcltdID0gVGV4YXMuT3JkZXJQYWlOb0NvbG9yKHRoaXMuX3Vyb241T25lKTtcbiAgICAgICAgbGV0IF9taW5DYXJkID0gX3RlbXBbX3RlbXAubGVuZ3RoIC0gMV07XG4gICAgICAgIHJldHVybiBfbWluQ2FyZDtcbiAgICB9XG59XG5cbi8vLyA8c3VtbWFyeT5cbi8vLyAg5ZCM6Iqx6aG644CJ5Zub5p2h44CJ5LiJ5p2hK+S4gOWvueOAieWQjOiKseOAiemhuuOAieS4ieadoeOAieS4pOadoeOAieS4gOWvueOAieWkp+aXoOi1llxuLy8vIDwvc3VtbWFyeT5cbmV4cG9ydCBlbnVtIFBva2VyVGV4YXNUeXBlIHtcbiAgICAvL+aJkeWFi+exu+Wei1xuICAgIEVycm9yID0gMCxcbiAgICBGaXZlX1NpbmdsZSA9IDEsLy8g5Y2V5bygIOS4k+S4muS5n+WPq+mrmOeJjOeJjOWei1xuICAgIEZpdmVfT05FX1BBSVIgPSAyLCAgICAvL+S4gOWvueeJjOWei1xuICAgIEZpdmVfVFdPX1BBSVIgPSAzLCAgICAvL+S4pOWvueeJjOWei1xuICAgIEZpdmVfVEhSRUUgPSA0LCAgICAgICAvL+S4ieadoeeJjOWei1xuICAgIEZpdmVfU3RyYWlnaHQgPSA1LCAgICAvL+mhuuWtkOeJjOWei1xuICAgIEZpdmVfRmx1c2ggPSA2LCAgICAgICAvL+WQjOiKseeJjOWei1xuICAgIEZpdmVfVEhSRUVfVFdPID0gNywgICAvL+iRq+iKpueJjOWei1xuICAgIEZpdmVfQm9tYiA9IDgsICAgICAgICAvL+Wbm+adoeeJjOWei1xuICAgIEZpdmVfRmx1c2hfU3RyYWlnaHQgPSA5LCAgICAgLy/lkIzoirHpobrniYzlnotcbiAgICBGaXZlX0ZsdXNoX1JveWFsU3RyYWlnaHQgPSAxMCwgIC8v55qH5a625ZCM6Iqx6aG654mM5Z6LXG59XG5leHBvcnQgZW51bSBUZXhhc0VubXVSZXN1bHQge1xuICAgIERyYXcgPSAwLFxuICAgIExvc3QgPSAxLFxuICAgIFdpbiA9IDJcbn1cbmV4cG9ydCBlbnVtIFRleGFzVHVybkVudW0ge1xuICAgIEluaXQgPSAtMSxcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOebsuazqOmYtuautSDmiYvniYzmlbDkuLowLS3lsI/nm7LlvZPluoTvvJroh6rliqjljovmiL/pl7TkvY7liIbnmoTkuIDliIYg5aSn55uy5rOo5Li65bCP55uy5rOo55qE5LiL5a6277yM6Ieq5Yqo5Y6L5oi/6Ze055qE5pyA5L2O5YiG77yM5LuO5bCP55uy5rOo5byA5aeL5Y+R54mM77yMVG9rZW7kuqTnu5nlpKfnm7Lms6hcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIFR1cm4xXzAgPSAxLFxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5omL54mM5pWw5Li6MiszIOWFrOW8gOeJjOS4uuaVsOS4ujMgIFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgVHVybjJfMyA9IDIsXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmiYvniYzmlbDkuLoyKzQg5YWs5byA54mM5Li65pWw5Li6NCAgXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBUdXJuM180ID0gMyxcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOaJi+eJjOaVsOS4ujIrNSDlhazlvIDniYzkuLrmlbDkuLo1IFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgVHVybjRfNSA9IDQsXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmr5TniYznirbmgIHkuoZcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIFRydW5Db21wYXJlID0gNSxcbn1cbmV4cG9ydCBlbnVtIFRleGFzVHVybkFjdGlvbkVudW0ge1xuICAgIEluaXQgPSAtMSxcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWwj+ebslxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgc2IgPSAxLFxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5aSn55uyXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBiYiA9IDIsXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyBzdHJhZGxsZVxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgc3RyYWRsbGUgPSAzLFxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g6LefXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBjYWxsID0gNCxcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOW8g+eJjFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgZm9sZCA9IDUsXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyBhbGxpblxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgYWxsaW4gPSA2LFxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g6K6p54mMXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBDaGVjayA9IDcsXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDliqDms6ggMi8zXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBCMl8zID0gOCxcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWKoOazqCAxLzIgXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBCMV8yID0gOSxcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWKoOazqCAxXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBCMSA9IDEwLFxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5YWo6YOo5Yqg5rOo5pON5L2cXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBCID0gMTEsXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmr5TniYxcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHNob3dkb253ID0gMTUsXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDkv53pmannsbvlnosg5Y+v6IO96ZyA6KaB6K+m57uG55qE5L+d6Zmp5rWB56iLXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBJbnMgPSAyMCxcbn1cblxuZXhwb3J0IGNsYXNzIERpY0hlbHBlciB7XG4gICAgY29uc3RydWN0b3IodDogUG9rZXJUZXhhc1R5cGUsIG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl90ID0gdDtcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBwdWJsaWMgX3Q6IFBva2VyVGV4YXNUeXBlO1xuICAgIHB1YmxpYyBfbmFtZTogc3RyaW5nO1xufVxuXG4iXX0=