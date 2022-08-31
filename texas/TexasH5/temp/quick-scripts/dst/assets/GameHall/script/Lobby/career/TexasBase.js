
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/career/TexasBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXGNhcmVlclxcVGV4YXNCYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxhQUFhO0FBQ2IsZ0JBQWdCOzs7QUFFaEIsMkRBQTBEO0FBRzFELGNBQWM7QUFDZDtJQUFBO0lBMG1CQSxDQUFDO0lBL2pCRyxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGNBQWM7SUFDTiwyQkFBTyxHQUFmO0lBRUEsQ0FBQztJQUlELGdCQUFnQjtJQUVoQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQ0FBaUM7SUFDakMsdUJBQXVCO0lBQ1QseUJBQWUsR0FBN0IsVUFBOEIsTUFBZ0I7UUFDMUMsSUFBSSxTQUFTLEdBQWEsRUFBRSxDQUFDO1FBQzdCLGVBQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3ZDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUc7Z0JBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQztTQUMvQztRQUNELElBQUksT0FBTyxHQUFhLEVBQUUsQ0FBQztRQUMzQixlQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNsQyxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFDLEVBQUUsRUFBRSxFQUFFLElBQUssT0FBQSxFQUFFLEdBQUcsRUFBRSxFQUFQLENBQU8sQ0FBQyxDQUFDO1FBQzVDLElBQUksUUFBUSxHQUFhLEVBQUUsQ0FBQztRQUM1QixlQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FB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QUFhO0lBQ2IsTUFBTTtJQUNOLGNBQWM7SUFDZCx5REFBTSxDQUFBO0lBQ04sYUFBYTtJQUNiLE1BQU07SUFDTixjQUFjO0lBQ2QseURBQU0sQ0FBQTtJQUNOLGFBQWE7SUFDYixZQUFZO0lBQ1osY0FBYztJQUNkLHFFQUFZLENBQUE7SUFDWixhQUFhO0lBQ2IsS0FBSztJQUNMLGNBQWM7SUFDZCw2REFBUSxDQUFBO0lBQ1IsYUFBYTtJQUNiLE1BQU07SUFDTixjQUFjO0lBQ2QsNkRBQVEsQ0FBQTtJQUNSLGFBQWE7SUFDYixTQUFTO0lBQ1QsY0FBYztJQUNkLCtEQUFTLENBQUE7SUFDVCxhQUFhO0lBQ2IsTUFBTTtJQUNOLGNBQWM7SUFDZCwrREFBUyxDQUFBO0lBQ1QsYUFBYTtJQUNiLFVBQVU7SUFDVixjQUFjO0lBQ2QsNkRBQVEsQ0FBQTtJQUNSLGFBQWE7SUFDYixXQUFXO0lBQ1gsY0FBYztJQUNkLDZEQUFRLENBQUE7SUFDUixhQUFhO0lBQ2IsUUFBUTtJQUNSLGNBQWM7SUFDZCwwREFBTyxDQUFBO0lBQ1AsYUFBYTtJQUNiLFVBQVU7SUFDVixjQUFjO0lBQ2Qsd0RBQU0sQ0FBQTtJQUNOLGFBQWE7SUFDYixNQUFNO0lBQ04sY0FBYztJQUNkLHNFQUFhLENBQUE7SUFDYixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCw0REFBUSxDQUFBO0FBQ1osQ0FBQyxFQXREVyxtQkFBbUIsR0FBbkIsMkJBQW1CLEtBQW5CLDJCQUFtQixRQXNEOUI7QUFFRDtJQUNJLG1CQUFZLENBQWlCLEVBQUUsSUFBWTtRQUN2QyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNaLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFHTCxnQkFBQztBQUFELENBUkEsQUFRQyxJQUFBO0FBUlksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vLyA8c3VtbWFyeT5cbi8vLyDlvrflt57miZHlhYvniYznmoTmlbDmja7nsbsgICBcblxuaW1wb3J0IHsgVUlVdGlsIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9Db21tb24vVUlVdGlsXCI7XG5pbXBvcnQgeyBUZXhVc2VySW5mb1NEIH0gZnJvbSBcIi4vQ2FyZWVyTmV0RGF0YVN0cnVjdFwiO1xuXG4vLy8gPC9zdW1tYXJ5PlxuZXhwb3J0IGNsYXNzIFRleGFzQmFzZSB7XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOm7kVxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHJpdmF0ZSBzdGF0aWMgYXJyU3BhZGU6IG51bWJlcltdID0gWzEwMiwgMTAzLCAxMDQsIDEwNSwgMTA2LCAxMDcsIDEwOCwgMTA5LCAxMTAsIDExMSwgMTEyLCAxMTMsIDExNF07XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDnuqJcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHByaXZhdGUgc3RhdGljIGFyckhlYXJ0OiBudW1iZXJbXSA9IFsyMDIsIDIwMywgMjA0LCAyMDUsIDIwNiwgMjA3LCAyMDgsIDIwOSwgMjEwLCAyMTEsIDIxMiwgMjEzLCAyMTRdO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5qKFXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwcml2YXRlIHN0YXRpYyBhcnJDbHViOiBudW1iZXJbXSA9IFszMDIsIDMwMywgMzA0LCAzMDUsIDMwNiwgMzA3LCAzMDgsIDMwOSwgMzEwLCAzMTEsIDMxMiwgMzEzLCAzMTRdO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5pa5XG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwcml2YXRlIHN0YXRpYyBhcnJEaWFtb25kOiBudW1iZXJbXSA9IFs0MDIsIDQwMywgNDA0LCA0MDUsIDQwNiwgNDA3LCA0MDgsIDQwOSwgNDEwLCA0MTEsIDQxMiwgNDEzLCA0MTRdO1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgdHdvUG9zOiBzdHJpbmdbXSA9IFtcIlNCXCIsIFwiQkJcIl07XG4gICAgcHJpdmF0ZSBzdGF0aWMgdGhyZWVQb3M6IHN0cmluZ1tdID0gW1wiU0JcIiwgXCJCQlwiLCBcIkJUTlwiXTtcbiAgICBwcml2YXRlIHN0YXRpYyBmb3VyUG9zOiBzdHJpbmdbXSA9IFtcIlNCXCIsIFwiQkJcIiwgXCJVVEdcIiwgXCJCVE5cIl07XG4gICAgcHJpdmF0ZSBzdGF0aWMgZml2ZVBvczogc3RyaW5nW10gPSBbXCJTQlwiLCBcIkJCXCIsIFwiVVRHXCIsIFwiQ09cIiwgXCJCVE5cIl07XG4gICAgcHJpdmF0ZSBzdGF0aWMgc2l4UG9zOiBzdHJpbmdbXSA9IFtcIlNCXCIsIFwiQkJcIiwgXCJVVEdcIiwgXCJISlwiLCBcIkNPXCIsIFwiQlROXCJdO1xuICAgIHByaXZhdGUgc3RhdGljIHNldmVuUG9zOiBzdHJpbmdbXSA9IFtcIlNCXCIsIFwiQkJcIiwgXCJVVEdcIiwgXCJNUDFcIiwgXCJISlwiLCBcIkNPXCIsIFwiQlROXCJdO1xuICAgIHByaXZhdGUgc3RhdGljIGVpZ2h0UG9zOiBzdHJpbmdbXSA9IFtcIlNCXCIsIFwiQkJcIiwgXCJVVEdcIiwgXCJVVEcrMVwiLCBcIk1QMVwiLCBcIkhKXCIsIFwiQ09cIiwgXCJCVE5cIl07XG4gICAgcHJpdmF0ZSBzdGF0aWMgbmluZVBvczogc3RyaW5nW10gPSBbXCJTQlwiLCBcIkJCXCIsIFwiVVRHXCIsIFwiVVRHKzFcIiwgXCJNUDFcIiwgXCJNUDJcIiwgXCJISlwiLCBcIkNPXCIsIFwiQlROXCJdO1xuICAgIHByaXZhdGUgc3RhdGljIGN1clBvczogc3RyaW5nW10gPSBbXTtcblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5LiA5LuYUG9rZXIgNTLlvKBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHByaXZhdGUgQUxMUG9rZXI6IG51bWJlcltdO1xuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDkuI3opoHlpKflsI/njotcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHByaXZhdGUgc3RhdGljIG1OdW1BTExQb2tlcjogbnVtYmVyID0gNTI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDljZXkuKrnlKjmiLfniYznmoTkuKrmlbBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHByaXZhdGUgc3RhdGljIF9OdW1QZXJVc2VyOiBudW1iZXIgPSAyO1xuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmtJfniYzvvIwg6K6p5omA5pyJ57q454mM77yM6ZqP5py66aG65bqPXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwcml2YXRlIFNodWZmbGUoKSB7XG5cbiAgICB9XG5cblxuXG4gICAgLy8gI3JlZ2lvbiAgIOaOkuW6jyBcblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5Y675o6J6Iqx6ImyIOS7juWkp+WIsOWwj+aOkuW6jyBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cInBhaWFyclwiPjwvcGFyYW0+XG4gICAgLy8vIDxyZXR1cm5zPjwvcmV0dXJucz5cbiAgICBwdWJsaWMgc3RhdGljIE9yZGVyUGFpTm9Db2xvcihwYWlhcnI6IG51bWJlcltdKTogbnVtYmVyW10ge1xuICAgICAgICBsZXQgX3RlbXBMaXN0OiBudW1iZXJbXSA9IFtdO1xuICAgICAgICBVSVV0aWwuQ29uY2F0KF90ZW1wTGlzdCwgcGFpYXJyKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfdGVtcExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChfdGVtcExpc3RbaV0gPiAxMDApIF90ZW1wTGlzdFtpXSAlPSAxMDA7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRlbXBhcnI6IG51bWJlcltdID0gW107XG4gICAgICAgIFVJVXRpbC5Db25jYXQodGVtcGFyciwgX3RlbXBMaXN0KTtcbiAgICAgICAgdGVtcGFyciA9IHRlbXBhcnIuc29ydCgobjEsIG4yKSA9PiBuMSAtIG4yKTtcbiAgICAgICAgbGV0IF9BU0NMaXN0OiBudW1iZXJbXSA9IFtdO1xuICAgICAgICBVSVV0aWwuQ29uY2F0KF9BU0NMaXN0LCB0ZW1wYXJyKTtcbiAgICAgICAgX0FTQ0xpc3QucmV2ZXJzZSgpOy8v6buY6K6k5piv5Y2H5bqP5Y+N6L2s5LiA5LiL5bCx6ZmN5bqP5LqGXG4gICAgICAgIHJldHVybiBfQVNDTGlzdDtcbiAgICB9XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyAg5LuO5aSn5Yiw5bCP5o6S5bqPICAgICAg5L+d55WZ6Iqx6ImyXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJwYWlhcnJcIj48L3BhcmFtPlxuICAgIC8vLyA8cmV0dXJucz48L3JldHVybnM+XG4gICAgcHVibGljIHN0YXRpYyBPcmRlclBhaVdpdGhDb2xvcihwYWlhcnI6IG51bWJlcltdKTogbnVtYmVyW10ge1xuICAgICAgICBsZXQgX3RlbXBMaXN0OiBudW1iZXJbXSA9IFtdO1xuICAgICAgICBVSVV0aWwuQ29uY2F0KF90ZW1wTGlzdCwgcGFpYXJyKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfdGVtcExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChfdGVtcExpc3RbaV0gPiAxMDApIF90ZW1wTGlzdFtpXSAlPSAxMDA7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRlbXBhcnI6IG51bWJlcltdID0gW107XG4gICAgICAgIFVJVXRpbC5Db25jYXQodGVtcGFyciwgX3RlbXBMaXN0KTtcbiAgICAgICAgdGVtcGFyci5zb3J0KChuMSwgbjIpID0+IG4xIC0gbjIpO1xuICAgICAgICBsZXQgX0FTQ0xpc3Q6IG51bWJlcltdID0gW107XG4gICAgICAgIFVJVXRpbC5Db25jYXQoX0FTQ0xpc3QsIHRlbXBhcnIpO1xuICAgICAgICBfQVNDTGlzdC5yZXZlcnNlKCk7Ly/pu5jorqTmmK/ljYfluo/lj43ovazkuIDkuIvlsLHpmY3luo/kuoZcblxuICAgICAgICAvL+W4puS4iuiKseiJsu+8jOacieeCueWwj+WkjeadgiBcbiAgICAgICAgbGV0IF9kaWNQb2tlcjJDb3VudDogTWFwPG51bWJlciwgbnVtYmVyPiA9IHRoaXMuR2V0UG9rZXJfQ291bnQoX0FTQ0xpc3QpO1xuICAgICAgICBsZXQgX2RpY1Bva2VyMkNvdW50VXNlZDogTWFwPG51bWJlciwgbnVtYmVyPiA9IG5ldyBNYXA8bnVtYmVyLCBudW1iZXI+KCk7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgX0FTQ0xpc3QubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGlmICghX2RpY1Bva2VyMkNvdW50VXNlZC5oYXMoX0FTQ0xpc3Rbal0pKSBfZGljUG9rZXIyQ291bnRVc2VkLnNldChfQVNDTGlzdFtqXSwgMSk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGMgPSBfZGljUG9rZXIyQ291bnRVc2VkLmdldChfQVNDTGlzdFtqXSk7IGMgPD0gNDsgYysrKSB7XG4gICAgICAgICAgICAgICAgX2RpY1Bva2VyMkNvdW50VXNlZC5zZXQoX0FTQ0xpc3Rbal0sIF9kaWNQb2tlcjJDb3VudFVzZWQuZ2V0KF9BU0NMaXN0W2pdKSArIDEpO1xuICAgICAgICAgICAgICAgIGlmIChwYWlhcnIuaW5kZXhPZihfQVNDTGlzdFtqXSArIDEwMCAqIGMpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgX0FTQ0xpc3Rbal0gPSBfQVNDTGlzdFtqXSArIDEwMCAqIGM7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX0FTQ0xpc3Q7XG4gICAgfVxuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyAgICDluKbkuIroirHoibLvvIzku47miYvniYzkuK3mn6Xmib4gICAgICAg5Lyg5YWl55qE5Y+C5pWw6YO95piv5o6S5bqP6L+H55qEXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJfc2hvdXBhaVwiPjwvcGFyYW0+XG4gICAgLy8vIDxwYXJhbSBuYW1lPVwicG9rZXJ2YWx1ZVwiPjwvcGFyYW0+XG4gICAgLy8vIDxyZXR1cm5zPjwvcmV0dXJucz5cbiAgICBwdWJsaWMgc3RhdGljIEdldFBhaUNvbG9yKF9zaG91cGFpOiBudW1iZXJbXSwgcG9rZXJ2YWx1ZTogbnVtYmVyW10pOiBudW1iZXJbXSB7XG4gICAgICAgIGxldCBfQVNDTGlzdDogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgVUlVdGlsLkNvbmNhdChfQVNDTGlzdCwgcG9rZXJ2YWx1ZSk7XG4gICAgICAgIC8v5bim5LiK6Iqx6Imy77yM5pyJ54K55bCP5aSN5p2CIFxuICAgICAgICBsZXQgX2RpY1Bva2VyMkNvdW50OiBNYXA8bnVtYmVyLCBudW1iZXI+ID0gdGhpcy5HZXRQb2tlcl9Db3VudChfQVNDTGlzdCk7XG4gICAgICAgIGxldCBfZGljUG9rZXIyQ291bnRVc2VkOiBNYXA8bnVtYmVyLCBudW1iZXI+ID0gbmV3IE1hcDxudW1iZXIsIG51bWJlcj4oKTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBfQVNDTGlzdC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaWYgKCFfZGljUG9rZXIyQ291bnRVc2VkLmhhcyhfQVNDTGlzdFtqXSkpIF9kaWNQb2tlcjJDb3VudFVzZWQuc2V0KF9BU0NMaXN0W2pdLCAxKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgYyA9IF9kaWNQb2tlcjJDb3VudFVzZWQuZ2V0KF9BU0NMaXN0W2pdKTsgYyA8PSA0OyBjKyspIHtcbiAgICAgICAgICAgICAgICBfZGljUG9rZXIyQ291bnRVc2VkLnNldChfQVNDTGlzdFtqXSwgX2RpY1Bva2VyMkNvdW50VXNlZC5nZXQoX0FTQ0xpc3Rbal0pICsgMSk7XG4gICAgICAgICAgICAgICAgaWYgKF9zaG91cGFpLmluZGV4T2YoX0FTQ0xpc3Rbal0gKyAxMDAgKiBjKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIF9BU0NMaXN0W2pdID0gX0FTQ0xpc3Rbal0gKyAxMDAgKiBjO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9BU0NMaXN0O1xuICAgIH1cblxuICAgIC8v6I635Y+W6Iqx6ImyXG4gICAgcHVibGljIHN0YXRpYyBHZXRDYXJkQ29sb3IoY2JDYXJkRGF0YTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGNiQ2FyZERhdGEgLyAxMDA7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBHZXRQb2tlcl9Db3VudChwYWlMaXN0OiBudW1iZXJbXSk6IE1hcDxudW1iZXIsIG51bWJlcj4ge1xuICAgICAgICBsZXQgX2RpY1Bva2VyMkNvdW50OiBNYXA8bnVtYmVyLCBudW1iZXI+ID0gbmV3IE1hcDxudW1iZXIsIG51bWJlcj4oKTtcbiAgICAgICAgcGFpTGlzdC5mb3JFYWNoKHBva2UgPT4ge1xuICAgICAgICAgICAgaWYgKF9kaWNQb2tlcjJDb3VudC5oYXMocG9rZSkpIF9kaWNQb2tlcjJDb3VudC5zZXQocG9rZSwgX2RpY1Bva2VyMkNvdW50LmdldChwb2tlKSArIDEpO1xuICAgICAgICAgICAgZWxzZSBfZGljUG9rZXIyQ291bnQuc2V0KHBva2UsIDEpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIF9kaWNQb2tlcjJDb3VudDtcbiAgICB9XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vICDmmK/lkKblkIzoirEgXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJjYXJkbGlzdFwiPj09PSoqKumcgOimgeW4puiKseiJsueahOeJjCoqKj09PTwvcGFyYW0+XG4gICAgLy8vIDxyZXR1cm5zPjwvcmV0dXJucz5cbiAgICBwdWJsaWMgc3RhdGljIElzRmx1c2goY2FyZGxpc3Q6IG51bWJlcltdKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBfaXNmbHVzaCA9IHRydWU7XG4gICAgICAgIGxldCBmbHVzaDAgPSBVSVV0aWwuTnVtYmVyVG9JbnQoY2FyZGxpc3RbMF0gLyAxMDApO1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGNhcmRsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZmx1c2gwICE9IFVJVXRpbC5OdW1iZXJUb0ludChjYXJkbGlzdFtpXSAvIDEwMCkpIHtcbiAgICAgICAgICAgICAgICBfaXNmbHVzaCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9pc2ZsdXNoO1xuICAgIH1cbiAgICAvLy8gPHN1bW1hcnk+IFxuICAgIC8vLyDliKTmlq3niYznu4TmmK/lkKbkuLrpobrlrZAgIOaUr+aMgTPkuKrku6XliY3nmoTpobrlrZDliKTmlq1cbiAgICAvLy8gPC9zdW1tYXJ5PiBcbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJQR1wiPueJjOe7hCDpnIDopoHljrvoibLkuI7ku47lpKfliLDlsI/mjpLluo88L3BhcmFtPiBcbiAgICAvLy8gPHJldHVybnM+5piv5ZCm5Li66aG65a2QPC9yZXR1cm5zPiBcbiAgICBwdWJsaWMgc3RhdGljIElzU3RyYWlnaHQoUEc6IG51bWJlcltdKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBfSXNTdHJhaWdodCA9IGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IFBHLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgaWYgKFBHW2ldIC0gMSA9PSBQR1tpICsgMV0pIF9Jc1N0cmFpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIF9Jc1N0cmFpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFfSXNTdHJhaWdodCkgey8vMTQg6L2sIDEg6ZKI5a+554m55q6K6aG65a2Q5aSE55CGXG4gICAgICAgICAgICBsZXQgX3RlbXBBcnI6IG51bWJlcltdID0gW107XG4gICAgICAgICAgICBVSVV0aWwuQ29uY2F0KF90ZW1wQXJyLCBQRyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF90ZW1wQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90ZW1wQXJyW2ldID09IDE0KSBfdGVtcEFycltpXSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGVtcEFyciA9IHRoaXMuT3JkZXJQYWlOb0NvbG9yKF90ZW1wQXJyKTsvL+mcgOimgeS7juWkp+WIsOWwj+aOkuW6j+S4gOS4i1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfdGVtcEFyci5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RlbXBBcnJbaV0gLSAxID09IF90ZW1wQXJyW2kgKyAxXSkgX0lzU3RyYWlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfSXNTdHJhaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9Jc1N0cmFpZ2h0O1xuICAgIH1cbiAgICAvLy8gPHN1bW1hcnk+IFxuICAgIC8vLyDliKTmlq3niYznu4TmmK/lkKbkuLrpobrlrZAgIDEyMyAgIDE0LDMsMlxuICAgIC8vLyA8L3N1bW1hcnk+IFxuICAgIC8vLyA8cGFyYW0gbmFtZT1cIlBHXCI+54mM57uEPC9wYXJhbT4gXG4gICAgLy8vIDxyZXR1cm5zPuaYr+WQpuS4uumhuuWtkDwvcmV0dXJucz4gXG4gICAgcHJpdmF0ZSBzdGF0aWMgSXNTdW5aaGkxMjMoY2FyZGxpc3Q6IG51bWJlcltdKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChjYXJkbGlzdFswXSA9PSAxNCAmJiBjYXJkbGlzdFsxXSA9PSAzICYmIGNhcmRsaXN0WzJdID09IDIpIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG5cbiAgICAvL+iOt+WPluexu+WeizpcbiAgICBwdWJsaWMgc3RhdGljIEdldFRleGFzVHlwZShzaG91cGFpOiBudW1iZXJbXSk6IFBva2VyVGV4YXNUeXBlIHtcbiAgICAgICAgbGV0IF9zaG91cGFpOiBudW1iZXJbXSA9IFtdO1xuICAgICAgICBVSVV0aWwuQ29uY2F0KF9zaG91cGFpLCBzaG91cGFpKTtcbiAgICAgICAgaWYgKF9zaG91cGFpLmxlbmd0aCA8IDIpIHJldHVybiBQb2tlclRleGFzVHlwZS5FcnJvcjsvL+S5i+WJjeaYrzXlvKDmmL7npLrniYzlnovvvIznjrDlnKjmmK/lj5Ey5byg54mM5ZCO5bCx6KaB5pi+56S66Ieq5bex55qE54mM5Z6LICwy5byg5omL54mM5Y+q5pi+56S66auY54mM5ZKM5LiA5a+5XG4gICAgICAgIGxldCBjYlNhbWVDb2xvcjogYm9vbGVhbiA9IFRleGFzQmFzZS5Jc0ZsdXNoKF9zaG91cGFpKTtcbiAgICAgICAgbGV0IF90ZW1wTm9Db2xvcjogbnVtYmVyW10gPSB0aGlzLk9yZGVyUGFpTm9Db2xvcihfc2hvdXBhaSk7XG4gICAgICAgIGxldCBjYkxpbmVDYXJkID0gdGhpcy5Jc1N0cmFpZ2h0KF90ZW1wTm9Db2xvcik7XG5cbiAgICAgICAgaWYgKGNiU2FtZUNvbG9yICYmIGNiTGluZUNhcmQgJiYgX3Nob3VwYWkubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgaWYgKE1hdGgubWF4LmFwcGx5KG51bGwsIF90ZW1wTm9Db2xvcikgPT0gMTQgJiYgTWF0aC5tYXguYXBwbHkobnVsbCwgX3RlbXBOb0NvbG9yKSA9PSAxMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQb2tlclRleGFzVHlwZS5GaXZlX0ZsdXNoX1JveWFsU3RyYWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHJldHVybiBQb2tlclRleGFzVHlwZS5GaXZlX0ZsdXNoX1N0cmFpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGlmICgoY2JTYW1lQ29sb3IgPT0gZmFsc2UpICYmIChjYkxpbmVDYXJkID09IHRydWUpICYmIF9zaG91cGFpLmxlbmd0aCA+IDIpIHJldHVybiBQb2tlclRleGFzVHlwZS5GaXZlX1N0cmFpZ2h0O1xuICAgICAgICBpZiAoKGNiU2FtZUNvbG9yID09IHRydWUpICYmIChjYkxpbmVDYXJkID09IGZhbHNlKSAmJiBfc2hvdXBhaS5sZW5ndGggPiAyKSByZXR1cm4gUG9rZXJUZXhhc1R5cGUuRml2ZV9GbHVzaDtcblxuICAgICAgICAvL+aJkeWFi+WIhuaekFxuICAgICAgICBsZXQgX3NwbGl0SGVscGVyOiBUZXhhc1NwbGl0SGVscGVyID0gbmV3IFRleGFzU3BsaXRIZWxwZXIoKTtcbiAgICAgICAgX3NwbGl0SGVscGVyLlNwbGl0KF9zaG91cGFpKTtcbiAgICAgICAgLy/nsbvlnovliKTmlq1cbiAgICAgICAgaWYgKF9zcGxpdEhlbHBlci5fZm91ci5sZW5ndGggPT0gMSAmJiBfc2hvdXBhaS5sZW5ndGggPiAyKSByZXR1cm4gUG9rZXJUZXhhc1R5cGUuRml2ZV9Cb21iO1xuICAgICAgICBpZiAoKF9zcGxpdEhlbHBlci5fdGhyZWUubGVuZ3RoID09IDEpICYmIChfc3BsaXRIZWxwZXIuX3R3by5sZW5ndGggPT0gMikgJiYgX3Nob3VwYWkubGVuZ3RoID4gMikgcmV0dXJuIFBva2VyVGV4YXNUeXBlLkZpdmVfVEhSRUVfVFdPO1xuICAgICAgICBpZiAoKF9zcGxpdEhlbHBlci5fdGhyZWUubGVuZ3RoID09IDEpICYmIChfc3BsaXRIZWxwZXIuX3R3by5sZW5ndGggPT0gMSkgJiYgX3Nob3VwYWkubGVuZ3RoID4gMikgcmV0dXJuIFBva2VyVGV4YXNUeXBlLkZpdmVfVEhSRUU7XG4gICAgICAgIGlmIChfc3BsaXRIZWxwZXIuX3R3by5sZW5ndGggPT0gMiAmJiBfc2hvdXBhaS5sZW5ndGggPiAyKSByZXR1cm4gUG9rZXJUZXhhc1R5cGUuRml2ZV9UV09fUEFJUjtcbiAgICAgICAgaWYgKChfc3BsaXRIZWxwZXIuX3R3by5sZW5ndGggPT0gMSkgJiYgKF9zcGxpdEhlbHBlci5fb25lLmxlbmd0aCA9PSBfc2hvdXBhaS5sZW5ndGggLSAxKSkgcmV0dXJuIFBva2VyVGV4YXNUeXBlLkZpdmVfT05FX1BBSVI7Ly/kuKTlvKDniYznmoTml7blgJnlj6/og73mmK/kuIDlr7lcbiAgICAgICAgcmV0dXJuIFBva2VyVGV4YXNUeXBlLkZpdmVfU2luZ2xlO1xuICAgIH1cblxuICAgIC8v5pyA5aSn54mM5Z6LXG4gICAgcHVibGljIHN0YXRpYyBHZXRGaXZlRnJvbVNldmVuKGNiSGFuZENhcmREYXRhOiBudW1iZXJbXSwgY2JDZW50ZXJDYXJkRGF0YTogbnVtYmVyW10sIGFsbENvdW50OiBudW1iZXIgPSA3KTogbnVtYmVyW10ge1xuICAgICAgICBsZXQgY2JUZW1wQ2FyZERhdGE6IG51bWJlcltdID0gW107Ly/kuLTml7blj5jph49cbiAgICAgICAgVUlVdGlsLkNvbmNhdChjYlRlbXBDYXJkRGF0YSwgY2JIYW5kQ2FyZERhdGEpO1xuICAgICAgICBVSVV0aWwuQ29uY2F0KGNiVGVtcENhcmREYXRhLCBjYkNlbnRlckNhcmREYXRhKTtcbiAgICAgICAgaWYgKGNiVGVtcENhcmREYXRhLmxlbmd0aCAhPSBhbGxDb3VudCB8fCBjYlRlbXBDYXJkRGF0YS5sZW5ndGggPCAyKSByZXR1cm4gW107Ly/kuYvliY3mmK815byg5pi+56S654mM5Z6L77yM546w5Zyo5piv5Y+RMuW8oOeJjOWQjuWwseimgeaYvuekuuiHquW3seeahOeJjOWeiyBcblxuICAgICAgICBsZXQgX3RlbXBDYXJkQ29tcGFyZSA9IHRoaXMuT3JkZXJQYWlXaXRoQ29sb3IoY2JUZW1wQ2FyZERhdGEpO1xuXG4gICAgICAgIGxldCBjYkxhc3RDYXJkRGF0YSA9IFtdO1xuICAgICAgICBpZiAoX3RlbXBDYXJkQ29tcGFyZS5sZW5ndGggPCA1KSB7XG4gICAgICAgICAgICBVSVV0aWwuQ29uY2F0KGNiTGFzdENhcmREYXRhLCBfdGVtcENhcmRDb21wYXJlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNiTGFzdENhcmREYXRhLnB1c2goX3RlbXBDYXJkQ29tcGFyZVswXSk7XG4gICAgICAgICAgICBjYkxhc3RDYXJkRGF0YS5wdXNoKF90ZW1wQ2FyZENvbXBhcmVbMV0pO1xuICAgICAgICAgICAgY2JMYXN0Q2FyZERhdGEucHVzaChfdGVtcENhcmRDb21wYXJlWzJdKTtcbiAgICAgICAgICAgIGNiTGFzdENhcmREYXRhLnB1c2goX3RlbXBDYXJkQ29tcGFyZVszXSk7XG4gICAgICAgICAgICBjYkxhc3RDYXJkRGF0YS5wdXNoKF90ZW1wQ2FyZENvbXBhcmVbNF0pO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjYkNhcmRLaW5kOiBQb2tlclRleGFzVHlwZSA9IHRoaXMuR2V0VGV4YXNUeXBlKGNiVGVtcENhcmREYXRhKTtcbiAgICAgICAgbGV0IGNiVGVtcENhcmRLaW5kOiBQb2tlclRleGFzVHlwZSA9IDA7XG5cbiAgICAgICAgbGV0IGNiVGVtcExhc3RDYXJkRGF0YTogbnVtYmVyW10gPSBbMCwgMCwgMCwgMCwgMF07Ly/lj6rlgZrliJ3lp4vmmoLkvY3nlKhcbiAgICAgICAgLy/nu4TlkIjnrpfms5VcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxDb3VudCAtIDQ7IGkrKykge1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IGkgKyAxOyBqIDwgYWxsQ291bnQgLSAzOyBqKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrID0gaiArIDE7IGsgPCBhbGxDb3VudCAtIDI7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBsID0gayArIDE7IGwgPCBhbGxDb3VudCAtIDE7IGwrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbSA9IGwgKyAxOyBtIDwgYWxsQ291bnQ7IG0rKykgeyAgIC8v6I635Y+W5pWw5o2uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2JUZW1wTGFzdENhcmREYXRhWzBdID0gX3RlbXBDYXJkQ29tcGFyZVtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYlRlbXBMYXN0Q2FyZERhdGFbMV0gPSBfdGVtcENhcmRDb21wYXJlW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNiVGVtcExhc3RDYXJkRGF0YVsyXSA9IF90ZW1wQ2FyZENvbXBhcmVba107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2JUZW1wTGFzdENhcmREYXRhWzNdID0gX3RlbXBDYXJkQ29tcGFyZVtsXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYlRlbXBMYXN0Q2FyZERhdGFbNF0gPSBfdGVtcENhcmRDb21wYXJlW21dO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2JUZW1wQ2FyZEtpbmQgPSB0aGlzLkdldFRleGFzVHlwZShjYlRlbXBMYXN0Q2FyZERhdGEpOy8v6I635Y+W54mM5Z6LXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+eJjOWei+Wkp+Wwj1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLkNvbXBhcmVQb2tlcl9ubihjYlRlbXBMYXN0Q2FyZERhdGEsIGNiTGFzdENhcmREYXRhKSA9PSBUZXhhc0VubXVSZXN1bHQuV2luKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNiQ2FyZEtpbmQgPSBjYlRlbXBDYXJkS2luZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2JMYXN0Q2FyZERhdGEgPSBbXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVSVV0aWwuQ29uY2F0KGNiTGFzdENhcmREYXRhLCBjYlRlbXBMYXN0Q2FyZERhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjYkxhc3RDYXJkRGF0YTtcbiAgICB9XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOebuOWQjOeJjOWei+eJjOWAvOW5s+WIhlxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgLy8vIDxwYXJhbSBuYW1lPVwiYXBwbHljYXJkXCI+PC9wYXJhbT5cbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJjYXJkbGlzdFwiPjwvcGFyYW0+XG4gICAgLy8vIDxyZXR1cm5zPjwvcmV0dXJucz5cbiAgICBwdWJsaWMgc3RhdGljIENvbXBhcmVQb2tlcl9ubihhcHBseWNhcmQ6IG51bWJlcltdLCBjYXJkbGlzdDogbnVtYmVyW10pOiBUZXhhc0VubXVSZXN1bHQge1xuICAgICAgICBsZXQgX2FwcGx5dHlwZTogUG9rZXJUZXhhc1R5cGUgPSB0aGlzLkdldFRleGFzVHlwZShhcHBseWNhcmQpO1xuICAgICAgICBsZXQgX3R5cGU6IFBva2VyVGV4YXNUeXBlID0gdGhpcy5HZXRUZXhhc1R5cGUoY2FyZGxpc3QpO1xuICAgICAgICByZXR1cm4gdGhpcy5Db21wYXJlUG9rZXIoYXBwbHljYXJkLCBfYXBwbHl0eXBlLCBjYXJkbGlzdCwgX3R5cGUpO1xuICAgIH1cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIGFwcGx5Y2FyZCDooajnpLrnlLPor7fmr5TniYznmoTkurpcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cImFwcGx5Y2FyZFwiPjwvcGFyYW0+XG4gICAgLy8vIDxwYXJhbSBuYW1lPVwiX2FwcGx5dHlwZVwiPjwvcGFyYW0+XG4gICAgLy8vIDxwYXJhbSBuYW1lPVwiY2FyZGxpc3RcIj48L3BhcmFtPlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cIl90eXBlXCI+PC9wYXJhbT5cbiAgICAvLy8gPHJldHVybnM+PC9yZXR1cm5zPlxuICAgIHByaXZhdGUgc3RhdGljIENvbXBhcmVQb2tlcihhcHBseWNhcmQ6IG51bWJlcltdLCBfYXBwbHl0eXBlOiBQb2tlclRleGFzVHlwZSwgY2FyZGxpc3Q6IG51bWJlcltdLCBfdHlwZTogUG9rZXJUZXhhc1R5cGUpOiBUZXhhc0VubXVSZXN1bHQge1xuICAgICAgICBpZiAoX2FwcGx5dHlwZSA+IF90eXBlKSByZXR1cm4gVGV4YXNFbm11UmVzdWx0LldpbjtcbiAgICAgICAgZWxzZSBpZiAoX2FwcGx5dHlwZSA8IF90eXBlKSByZXR1cm4gVGV4YXNFbm11UmVzdWx0Lkxvc3Q7XG4gICAgICAgIGVsc2UgeyAgIC8v55u45ZCM57G75Z6LIOmcgOimgeagueaNruinhOWImeWGjeWkhOeQhuS4gOasoe+8jCAgXG4gICAgICAgICAgICBsZXQgX3RhcHBseUxpc3Q6IG51bWJlcltdID0gdGhpcy5PcmRlclBhaU5vQ29sb3IoYXBwbHljYXJkKTtcbiAgICAgICAgICAgIGxldCBfdGFyZ2V0Q2FyZExpc3Q6IG51bWJlcltdID0gdGhpcy5PcmRlclBhaU5vQ29sb3IoY2FyZGxpc3QpO1xuICAgICAgICAgICAgc3dpdGNoIChfYXBwbHl0eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBQb2tlclRleGFzVHlwZS5GaXZlX1NpbmdsZTpcbiAgICAgICAgICAgICAgICBjYXNlIFBva2VyVGV4YXNUeXBlLkZpdmVfRmx1c2g6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNvbXBhcmVMaXN0T25lQnlPbmUoX3RhcHBseUxpc3QsIF90YXJnZXRDYXJkTGlzdCk7XG4gICAgICAgICAgICAgICAgY2FzZSBQb2tlclRleGFzVHlwZS5GaXZlX1N0cmFpZ2h0OlxuICAgICAgICAgICAgICAgIGNhc2UgUG9rZXJUZXhhc1R5cGUuRml2ZV9GbHVzaF9TdHJhaWdodDpcbiAgICAgICAgICAgICAgICAgICAgX3RhcHBseUxpc3QgPSB0aGlzLkRlYWxBMjM0NShfdGFwcGx5TGlzdCk7XG4gICAgICAgICAgICAgICAgICAgIF90YXJnZXRDYXJkTGlzdCA9IHRoaXMuRGVhbEEyMzQ1KF90YXJnZXRDYXJkTGlzdCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNvbXBhcmVMaXN0T25lQnlPbmUoX3RhcHBseUxpc3QsIF90YXJnZXRDYXJkTGlzdCk7XG4gICAgICAgICAgICAgICAgY2FzZSBQb2tlclRleGFzVHlwZS5GaXZlX09ORV9QQUlSOlxuICAgICAgICAgICAgICAgICAgICBsZXQgX2FwcGx5TW9yZU9uZV9QMTogbnVtYmVyW10gPSB0aGlzLkdldE1vcmVPbmVMaXN0KF90YXBwbHlMaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IF90YXJnZXRNb3JlT25lX1AxOiBudW1iZXJbXSA9IHRoaXMuR2V0TW9yZU9uZUxpc3QoX3RhcmdldENhcmRMaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IF90ZW1wUGFpcjE6IFRleGFzRW5tdVJlc3VsdCA9IHRoaXMuQ29tcGFyZUxpc3RPbmVCeU9uZShfYXBwbHlNb3JlT25lX1AxLCBfdGFyZ2V0TW9yZU9uZV9QMSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGVtcFBhaXIxID09IFRleGFzRW5tdVJlc3VsdC5EcmF3KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgX2FwcGx5T25seU9uZTogbnVtYmVyW10gPSB0aGlzLkdldE9ubHlPbmVMaXN0KF90YXBwbHlMaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBfdGFyZ2V0T25seU9uZTogbnVtYmVyW10gPSB0aGlzLkdldE9ubHlPbmVMaXN0KF90YXJnZXRDYXJkTGlzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Db21wYXJlTGlzdE9uZUJ5T25lKF9hcHBseU9ubHlPbmUsIF90YXJnZXRPbmx5T25lLCAzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RlbXBQYWlyMTtcbiAgICAgICAgICAgICAgICBjYXNlIFBva2VyVGV4YXNUeXBlLkZpdmVfVFdPX1BBSVI6XG4gICAgICAgICAgICAgICAgICAgIGxldCBfYXBwbHlNb3JlT25lX1AyOiBudW1iZXJbXSA9IHRoaXMuR2V0TW9yZU9uZUxpc3QoX3RhcHBseUxpc3QpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgX3RhcmdldE1vcmVPbmVfUDI6IG51bWJlcltdID0gdGhpcy5HZXRNb3JlT25lTGlzdChfdGFyZ2V0Q2FyZExpc3QpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgX3RlbXBQYWlyMjogVGV4YXNFbm11UmVzdWx0ID0gdGhpcy5Db21wYXJlTGlzdE9uZUJ5T25lKF9hcHBseU1vcmVPbmVfUDIsIF90YXJnZXRNb3JlT25lX1AyLCAyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90ZW1wUGFpcjIgPT0gVGV4YXNFbm11UmVzdWx0LkRyYXcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBfYXBwbHlPbmx5T25lID0gdGhpcy5HZXRPbmx5T25lTGlzdChfdGFwcGx5TGlzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgX3RhcmdldE9ubHlPbmUgPSB0aGlzLkdldE9ubHlPbmVMaXN0KF90YXJnZXRDYXJkTGlzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Db21wYXJlTGlzdE9uZUJ5T25lKF9hcHBseU9ubHlPbmUsIF90YXJnZXRPbmx5T25lLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RlbXBQYWlyMjtcbiAgICAgICAgICAgICAgICBjYXNlIFBva2VyVGV4YXNUeXBlLkZpdmVfVEhSRUU6XG4gICAgICAgICAgICAgICAgY2FzZSBQb2tlclRleGFzVHlwZS5GaXZlX1RIUkVFX1RXTzovL1RleGFz5Zug5Li65pyJ5YWs54mMIOWPr+iDveS4gOagt+eahOeJjO+8jOmcgOimgei/m+ihjOWvueWtkOavlOi+g1xuICAgICAgICAgICAgICAgICAgICBsZXQgX2FwcGx5TW9yZU9uZV8zOiBudW1iZXJbXSA9IHRoaXMuR2V0TW9yZU9uZUxpc3QoX3RhcHBseUxpc3QsIDMpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgX3RhcmdldE1vcmVPbmVfMzogbnVtYmVyW10gPSB0aGlzLkdldE1vcmVPbmVMaXN0KF90YXJnZXRDYXJkTGlzdCwgMyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBfdGVtcFBhaXIzOiBUZXhhc0VubXVSZXN1bHQgPSB0aGlzLkNvbXBhcmVMaXN0T25lQnlPbmUoX2FwcGx5TW9yZU9uZV8zLCBfdGFyZ2V0TW9yZU9uZV8zLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90ZW1wUGFpcjMgPT0gVGV4YXNFbm11UmVzdWx0LkRyYXcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBfYXBwbHlNb3JlT25lXzI6IG51bWJlcltdID0gdGhpcy5HZXRNb3JlT25lTGlzdChfdGFwcGx5TGlzdCwgMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgX3RhcmdldE1vcmVPbmVfMjogbnVtYmVyW10gPSB0aGlzLkdldE1vcmVPbmVMaXN0KF90YXJnZXRDYXJkTGlzdCwgMik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Db21wYXJlTGlzdE9uZUJ5T25lKF9hcHBseU1vcmVPbmVfMiwgX3RhcmdldE1vcmVPbmVfMiwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90ZW1wUGFpcjM7XG4gICAgICAgICAgICAgICAgY2FzZSBQb2tlclRleGFzVHlwZS5GaXZlX0JvbWI6Ly9UZXhhc+WboOS4uuacieWFrOeJjCDpnIDopoHlho3mrKHmr5TovoNcbiAgICAgICAgICAgICAgICAgICAgbGV0IF9hcHBseU1vcmVPbmVfNDogbnVtYmVyW10gPSB0aGlzLkdldE1vcmVPbmVMaXN0KF90YXBwbHlMaXN0LCA0KTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IF90YXJnZXRNb3JlT25lXzQ6IG51bWJlcltdID0gdGhpcy5HZXRNb3JlT25lTGlzdChfdGFyZ2V0Q2FyZExpc3QsIDQpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgX3RlbXBQYWlyNDogVGV4YXNFbm11UmVzdWx0ID0gdGhpcy5Db21wYXJlTGlzdE9uZUJ5T25lKF9hcHBseU1vcmVPbmVfNCwgX3RhcmdldE1vcmVPbmVfNCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGVtcFBhaXI0ID09IFRleGFzRW5tdVJlc3VsdC5EcmF3KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgX2FwcGx5T25seU9uZTogbnVtYmVyW10gPSB0aGlzLkdldE9ubHlPbmVMaXN0KF90YXBwbHlMaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBfdGFyZ2V0T25seU9uZTogbnVtYmVyW10gPSB0aGlzLkdldE9ubHlPbmVMaXN0KF90YXJnZXRDYXJkTGlzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Db21wYXJlTGlzdE9uZUJ5T25lKF9hcHBseU9ubHlPbmUsIF90YXJnZXRPbmx5T25lLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RlbXBQYWlyNDtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVGV4YXNFbm11UmVzdWx0LkRyYXc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOS4gOagt+WkpyDlubPlsYDkuI3pnIDopoHmr5ToirHoibJcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cImFwcGx5Y2FyZFwiPuS7juWkp+WIsOWwj+aOkuW6jyDmsqHmnInoirHoibI8L3BhcmFtPlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cImNhcmRsaXN0XCI+5LuO5aSn5Yiw5bCP5o6S5bqPIOayoeacieiKseiJsjwvcGFyYW0+XG4gICAgLy8vIDxyZXR1cm5zPjwvcmV0dXJucz5cbiAgICBwcml2YXRlIHN0YXRpYyBDb21wYXJlTGlzdE9uZUJ5T25lKGFwcGx5bGlzdDogbnVtYmVyW10sIGNhcmRsaXN0OiBudW1iZXJbXSwgQ29tcGFyZUxlbiA9IDUpOiBUZXhhc0VubXVSZXN1bHQge1xuICAgICAgICBpZiAoYXBwbHlsaXN0WzBdID4gY2FyZGxpc3RbMF0pIHJldHVybiBUZXhhc0VubXVSZXN1bHQuV2luO1xuICAgICAgICBlbHNlIGlmIChhcHBseWxpc3RbMF0gPCBjYXJkbGlzdFswXSkgcmV0dXJuIFRleGFzRW5tdVJlc3VsdC5Mb3N0O1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChDb21wYXJlTGVuID09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gVGV4YXNFbm11UmVzdWx0LkRyYXc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoYXBwbHlsaXN0WzFdID4gY2FyZGxpc3RbMV0pIHJldHVybiBUZXhhc0VubXVSZXN1bHQuV2luO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFwcGx5bGlzdFsxXSA8IGNhcmRsaXN0WzFdKSByZXR1cm4gVGV4YXNFbm11UmVzdWx0Lkxvc3Q7XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChDb21wYXJlTGVuID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBUZXhhc0VubXVSZXN1bHQuRHJhdztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcHBseWxpc3RbMl0gPiBjYXJkbGlzdFsyXSkgcmV0dXJuIFRleGFzRW5tdVJlc3VsdC5XaW47XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChhcHBseWxpc3RbMl0gPCBjYXJkbGlzdFsyXSkgcmV0dXJuIFRleGFzRW5tdVJlc3VsdC5Mb3N0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKENvbXBhcmVMZW4gPT0gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gVGV4YXNFbm11UmVzdWx0LkRyYXc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXBwbHlsaXN0WzNdID4gY2FyZGxpc3RbM10pIHJldHVybiBUZXhhc0VubXVSZXN1bHQuV2luO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChhcHBseWxpc3RbM10gPCBjYXJkbGlzdFszXSkgcmV0dXJuIFRleGFzRW5tdVJlc3VsdC5Mb3N0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcHBseWxpc3RbNF0gPiBjYXJkbGlzdFs0XSkgcmV0dXJuIFRleGFzRW5tdVJlc3VsdC5XaW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChhcHBseWxpc3RbNF0gPCBjYXJkbGlzdFs0XSkgcmV0dXJuIFRleGFzRW5tdVJlc3VsdC5Mb3N0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFRleGFzRW5tdVJlc3VsdC5EcmF3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyBBMjM0Nei9rOaIkDEyMzQ1XG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJhcHBseWNhcmRcIj7pnIDopoHljrvoibLvvIzmjpLluo/vvIzku47lpKfliLDlsI/vvIw8L3BhcmFtPiBcbiAgICAvLy8gPHJldHVybnM+PC9yZXR1cm5zPlxuICAgIHByaXZhdGUgc3RhdGljIERlYWxBMjM0NShzaG91UGFpOiBudW1iZXJbXSk6IG51bWJlcltdIHtcbiAgICAgICAgaWYgKHNob3VQYWlbMF0gPT0gMTQgJiYgc2hvdVBhaVsxXSA9PSA1ICYmIHNob3VQYWlbMl0gPT0gNCAmJiBzaG91UGFpWzNdID09IDMgJiYgc2hvdVBhaVs0XSA9PSAyKSB7XG4gICAgICAgICAgICBsZXQgczEyMzQ1OiBudW1iZXJbXSA9IHNob3VQYWk7XG4gICAgICAgICAgICBzMTIzNDVbMF0gPSAxOy8v6ZyA6KaB5q+U6L6D5oiQ5pyA5bCP55qEXG4gICAgICAgICAgICBzMTIzNDUgPSB0aGlzLk9yZGVyUGFpTm9Db2xvcihzMTIzNDUpO1xuICAgICAgICAgICAgcmV0dXJuIHMxMjM0NTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2hvdVBhaTtcbiAgICB9XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vICAgICBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cIl9zaG91UGFpXCI+6ZyA6KaB5Y676Imy77yM5o6S5bqP77yM5LuO5aSn5Yiw5bCP77yMPC9wYXJhbT5cbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJfbnVtXCI+PC9wYXJhbT5cbiAgICAvLy8gPHJldHVybnM+PC9yZXR1cm5zPlxuICAgIHByaXZhdGUgc3RhdGljIEdldE1vcmVPbmVMaXN0KF9zaG91UGFpOiBudW1iZXJbXSwgX251bSA9IDIpOiBudW1iZXJbXSB7XG4gICAgICAgIGxldCBfc3BsaXRIZWxwZXI6IFRleGFzU3BsaXRIZWxwZXIgPSBuZXcgVGV4YXNTcGxpdEhlbHBlcigpO1xuICAgICAgICBfc3BsaXRIZWxwZXIuU3BsaXQoX3Nob3VQYWkpO1xuICAgICAgICBsZXQgX3JldExpc3Q6IG51bWJlcltdID0gW107XG4gICAgICAgIHN3aXRjaCAoX251bSkge1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIF9yZXRMaXN0ID0gX3NwbGl0SGVscGVyLl90d287XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgX3JldExpc3QgPSBfc3BsaXRIZWxwZXIuX3RocmVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIF9yZXRMaXN0ID0gX3NwbGl0SGVscGVyLl9mb3VyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDogYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9yZXRMaXN0O1xuICAgIH1cblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8gICAgIFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgLy8vIDxwYXJhbSBuYW1lPVwiX3Nob3VQYWlcIj7pnIDopoHljrvoibLvvIzmjpLluo/vvIzku47lpKfliLDlsI/vvIw8L3BhcmFtPlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cIl9udW1cIj48L3BhcmFtPlxuICAgIC8vLyA8cmV0dXJucz48L3JldHVybnM+XG4gICAgcHJpdmF0ZSBzdGF0aWMgR2V0T25seU9uZUxpc3QoX3Nob3VQYWk6IG51bWJlcltdKTogbnVtYmVyW10ge1xuICAgICAgICBsZXQgX3NwbGl0SGVscGVyOiBUZXhhc1NwbGl0SGVscGVyID0gbmV3IFRleGFzU3BsaXRIZWxwZXIoKTtcbiAgICAgICAgX3NwbGl0SGVscGVyLlNwbGl0KF9zaG91UGFpKTtcbiAgICAgICAgbGV0IF9yZXRMaXN0OiBudW1iZXJbXSA9IF9zcGxpdEhlbHBlci5fb25seU9uZTtcbiAgICAgICAgcmV0dXJuIF9yZXRMaXN0O1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2RpY1R5cGUyU3RyaW5nOiBEaWNIZWxwZXJbXSA9IFtdO1xuXG4gICAgcHVibGljIHN0YXRpYyBHZXROYW1lQnlUeXBlKF90eXBlOiBQb2tlclRleGFzVHlwZSk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLl9kaWNUeXBlMlN0cmluZy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5fZGljVHlwZTJTdHJpbmcucHVzaChuZXcgRGljSGVscGVyKFBva2VyVGV4YXNUeXBlLkZpdmVfU2luZ2xlLCBcIumrmOeJjFwiKSk7XG4gICAgICAgICAgICB0aGlzLl9kaWNUeXBlMlN0cmluZy5wdXNoKG5ldyBEaWNIZWxwZXIoUG9rZXJUZXhhc1R5cGUuRml2ZV9PTkVfUEFJUiwgXCLkuIDlr7lcIikpO1xuICAgICAgICAgICAgdGhpcy5fZGljVHlwZTJTdHJpbmcucHVzaChuZXcgRGljSGVscGVyKFBva2VyVGV4YXNUeXBlLkZpdmVfVFdPX1BBSVIsIFwi5Lik5a+5XCIpKTtcbiAgICAgICAgICAgIHRoaXMuX2RpY1R5cGUyU3RyaW5nLnB1c2gobmV3IERpY0hlbHBlcihQb2tlclRleGFzVHlwZS5GaXZlX1RIUkVFLCBcIuS4ieadoVwiKSk7XG4gICAgICAgICAgICB0aGlzLl9kaWNUeXBlMlN0cmluZy5wdXNoKG5ldyBEaWNIZWxwZXIoUG9rZXJUZXhhc1R5cGUuRml2ZV9TdHJhaWdodCwgXCLpobrlrZBcIikpO1xuICAgICAgICAgICAgdGhpcy5fZGljVHlwZTJTdHJpbmcucHVzaChuZXcgRGljSGVscGVyKFBva2VyVGV4YXNUeXBlLkZpdmVfRmx1c2gsIFwi5ZCM6IqxXCIpKTtcbiAgICAgICAgICAgIHRoaXMuX2RpY1R5cGUyU3RyaW5nLnB1c2gobmV3IERpY0hlbHBlcihQb2tlclRleGFzVHlwZS5GaXZlX1RIUkVFX1RXTywgXCLokavoiqZcIikpO1xuICAgICAgICAgICAgdGhpcy5fZGljVHlwZTJTdHJpbmcucHVzaChuZXcgRGljSGVscGVyKFBva2VyVGV4YXNUeXBlLkZpdmVfQm9tYiwgXCLlm5vmnaFcIikpO1xuICAgICAgICAgICAgdGhpcy5fZGljVHlwZTJTdHJpbmcucHVzaChuZXcgRGljSGVscGVyKFBva2VyVGV4YXNUeXBlLkZpdmVfRmx1c2hfU3RyYWlnaHQsIFwi5ZCM6Iqx6aG6XCIpKTtcbiAgICAgICAgICAgIHRoaXMuX2RpY1R5cGUyU3RyaW5nLnB1c2gobmV3IERpY0hlbHBlcihQb2tlclRleGFzVHlwZS5GaXZlX0ZsdXNoX1JveWFsU3RyYWlnaHQsIFwi55qH5a625ZCM6Iqx6aG6XCIpKTtcblxuICAgICAgICB9XG4gICAgICAgIHZhciBuYW1lID0gdGhpcy5fZGljVHlwZTJTdHJpbmcuZmluZCgoX2RoKSA9PiB7IHJldHVybiBfZGguX3QgPT0gX3R5cGU7IH0pO1xuICAgICAgICBpZiAobmFtZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIiAgZXJyb3IgdHlwZTpcIiArIF90eXBlLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5hbWUuX25hbWU7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIEdldFRleGFzTmFtZShjYXJkczogbnVtYmVyW10pOiBzdHJpbmcge1xuICAgICAgICB2YXIgX3R5cGUgPSB0aGlzLkdldFRleGFzVHlwZShjYXJkcyk7XG4gICAgICAgIHJldHVybiB0aGlzLkdldE5hbWVCeVR5cGUoX3R5cGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgR2V0TWF4VHlwZUNhcmRzKGNhcmRzOiBudW1iZXJbXSk6IG51bWJlcltdIHtcbiAgICAgICAgbGV0IHRlbXBDYXJkczogbnVtYmVyW10gPSBbXVxuICAgICAgICBzd2l0Y2ggKHRoaXMuR2V0VGV4YXNUeXBlKGNhcmRzKSkge1xuICAgICAgICAgICAgY2FzZSBQb2tlclRleGFzVHlwZS5GaXZlX1NpbmdsZTpcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBQb2tlclRleGFzVHlwZS5GaXZlX09ORV9QQUlSOlxuICAgICAgICAgICAgICAgIHRlbXBDYXJkcyA9IHRoaXMuR2V0U2FtZVZhbGVDYXJkcyhjYXJkcywgMik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBva2VyVGV4YXNUeXBlLkZpdmVfVFdPX1BBSVI6XG4gICAgICAgICAgICAgICAgdGVtcENhcmRzID0gdGhpcy5HZXRTYW1lVmFsZUNhcmRzKGNhcmRzLCAyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgUG9rZXJUZXhhc1R5cGUuRml2ZV9USFJFRTpcbiAgICAgICAgICAgICAgICB0ZW1wQ2FyZHMgPSB0aGlzLkdldFNhbWVWYWxlQ2FyZHMoY2FyZHMsIDMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBQb2tlclRleGFzVHlwZS5GaXZlX1N0cmFpZ2h0OlxuICAgICAgICAgICAgICAgIFVJVXRpbC5Db25jYXQodGVtcENhcmRzLCBjYXJkcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBva2VyVGV4YXNUeXBlLkZpdmVfRmx1c2g6XG4gICAgICAgICAgICAgICAgVUlVdGlsLkNvbmNhdCh0ZW1wQ2FyZHMsIGNhcmRzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgUG9rZXJUZXhhc1R5cGUuRml2ZV9USFJFRV9UV086XG4gICAgICAgICAgICAgICAgVUlVdGlsLkNvbmNhdCh0ZW1wQ2FyZHMsIGNhcmRzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgUG9rZXJUZXhhc1R5cGUuRml2ZV9Cb21iOlxuICAgICAgICAgICAgICAgIHRlbXBDYXJkcyA9IHRoaXMuR2V0U2FtZVZhbGVDYXJkcyhjYXJkcywgNCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBva2VyVGV4YXNUeXBlLkZpdmVfRmx1c2hfU3RyYWlnaHQ6XG4gICAgICAgICAgICAgICAgVUlVdGlsLkNvbmNhdCh0ZW1wQ2FyZHMsIGNhcmRzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgUG9rZXJUZXhhc1R5cGUuRml2ZV9GbHVzaF9Sb3lhbFN0cmFpZ2h0OlxuICAgICAgICAgICAgICAgIFVJVXRpbC5Db25jYXQodGVtcENhcmRzLCBjYXJkcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBva2VyVGV4YXNUeXBlLkVycm9yOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZW1wQ2FyZHM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgR2V0U2FtZVZhbGVDYXJkcyhjYXJkczogbnVtYmVyW10sIHNhbWVDb3VudDogbnVtYmVyKTogbnVtYmVyW10ge1xuICAgICAgICBsZXQgdGVtcENhcmRzOiBudW1iZXJbXSA9IFtdO1xuXG4gICAgICAgIGxldCB0ZW1wRGljOiBNYXA8bnVtYmVyLCBudW1iZXJbXT4gPSBuZXcgTWFwPG51bWJlciwgbnVtYmVyW10+KCk7XG4gICAgICAgIGNhcmRzLmZvckVhY2gocG9rZSA9PiB7XG4gICAgICAgICAgICBsZXQga2V5ID0gVUlVdGlsLk51bWJlclRvSW50KHBva2UgJSAxMDApO1xuICAgICAgICAgICAgaWYgKHRlbXBEaWMuaGFzKGtleSkpXG4gICAgICAgICAgICAgICAgdGVtcERpYy5nZXQoa2V5KS5wdXNoKHBva2UpO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGNhcmRMaXN0OiBudW1iZXJbXSA9IFtdO1xuICAgICAgICAgICAgICAgIGNhcmRMaXN0LnB1c2gocG9rZSk7XG4gICAgICAgICAgICAgICAgdGVtcERpYy5zZXQoa2V5LCBjYXJkTGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRlbXBEaWMuZm9yRWFjaCh0ZW1wID0+IHtcbiAgICAgICAgICAgIGlmICh0ZW1wLmxlbmd0aCA9PSBzYW1lQ291bnQpXG4gICAgICAgICAgICAgICAgVUlVdGlsLkNvbmNhdCh0ZW1wQ2FyZHMsIHRlbXApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRlbXBDYXJkcztcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBnZXRQbGF5ZXJQb3NUeXBlKHBvczogbnVtYmVyLCBicG9zOiBudW1iZXIsIHRMaXN0OiBUZXhVc2VySW5mb1NEW10pOiBzdHJpbmcge1xuICAgICAgICBsZXQgcG9zVHlwZSA9IFwiXCI7XG4gICAgICAgIHRoaXMuY3VyUG9zID0gW107XG4gICAgICAgIGlmICh0TGlzdCA9PSBudWxsIHx8IHRMaXN0Lmxlbmd0aCA8PSAwKSByZXR1cm4gcG9zVHlwZTtcbiAgICAgICAgc3dpdGNoICh0TGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB0aGlzLmN1clBvcyA9IHRoaXMudHdvUG9zO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHRoaXMuY3VyUG9zID0gdGhpcy50aHJlZVBvcztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICB0aGlzLmN1clBvcyA9IHRoaXMuZm91clBvcztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICB0aGlzLmN1clBvcyA9IHRoaXMuZml2ZVBvcztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICB0aGlzLmN1clBvcyA9IHRoaXMuc2l4UG9zO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIHRoaXMuY3VyUG9zID0gdGhpcy5zZXZlblBvcztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICB0aGlzLmN1clBvcyA9IHRoaXMuZWlnaHRQb3M7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJQb3MgPSB0aGlzLm5pbmVQb3M7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGhwb3MgPSB0aGlzLkdldEhhbmRsZVBvcyhwb3MsIGJwb3MsIHRMaXN0KTtcbiAgICAgICAgaWYgKHRoaXMuY3VyUG9zID09IG51bGwgfHwgdGhpcy5jdXJQb3MubGVuZ3RoIDw9IDAgfHwgdGhpcy5jdXJQb3MubGVuZ3RoIDwgaHBvcyB8fCBocG9zIDw9IDApIHJldHVybiBwb3NUeXBlO1xuICAgICAgICBlbHNlIHJldHVybiB0aGlzLmN1clBvc1tocG9zIC0gMV07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgR2V0SGFuZGxlUG9zKHBvczogbnVtYmVyLCBicG9zOiBudW1iZXIsIHRMaXN0OiBUZXhVc2VySW5mb1NEW10pOiBudW1iZXIge1xuICAgICAgICBsZXQgaFBvcyA9IDA7XG4gICAgICAgIGxldCBjdXJVc2VyOiBUZXhVc2VySW5mb1NEID0gdExpc3QuZmluZChpdGVtID0+IHsgcmV0dXJuIGl0ZW0ucG9zID09IHBvcyB9KTtcbiAgICAgICAgbGV0IGJVc2VyOiBUZXhVc2VySW5mb1NEID0gdExpc3QuZmluZChpdGVtID0+IHsgcmV0dXJuIGl0ZW0ucG9zID09IGJwb3MgfSk7XG5cbiAgICAgICAgaWYgKHRMaXN0ID09IG51bGwgfHwgdExpc3QubGVuZ3RoIDwgMiB8fCBjdXJVc2VyID09IG51bGwgfHwgYlVzZXIgPT0gbnVsbCkgcmV0dXJuIGhQb3M7XG4gICAgICAgIGxldCBuZXdMaXN0OiBUZXhVc2VySW5mb1NEW10gPSBbXTtcbiAgICAgICAgbmV3TGlzdCA9IHRMaXN0O1xuICAgICAgICBuZXdMaXN0LnNvcnQoKHgsIHkpID0+IHsgcmV0dXJuIHgucG9zIC0geS5wb3M7IH0pO1xuICAgICAgICBsZXQgc1BvcyA9IDA7XG4gICAgICAgIGxldCBiSW5keDogbnVtYmVyID0gbmV3TGlzdC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnBvcyA9PSBicG9zKTtcbiAgICAgICAgbGV0IGNJbmR4OiBudW1iZXIgPSBuZXdMaXN0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0ucG9zID09IHBvcyk7XG4gICAgICAgIGlmIChuZXdMaXN0Lmxlbmd0aCA9PSAyKSB7XG4gICAgICAgICAgICBzUG9zID0gYkluZHg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzUG9zID0gYkluZHggLSAxID49IDAgPyBiSW5keCAtIDEgOiBiSW5keCAtIDEgKyBuZXdMaXN0Lmxlbmd0aDtcblxuICAgICAgICB9XG4gICAgICAgIGhQb3MgPSBzUG9zIC0gY0luZHggPCAwID8gc1BvcyAtIGNJbmR4ICsgbmV3TGlzdC5sZW5ndGggKyAxIDogc1BvcyAtIGNJbmR4ICsgMTtcbiAgICAgICAgcmV0dXJuIGhQb3M7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGV4YXNTcGxpdEhlbHBlciB7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmsqHmnInpopzoibLnmoRcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBfc2hvdVBhaTogbnVtYmVyW107XG4gICAgcHVibGljIF9zaG91UGFpQ29sb3I6IG51bWJlcltdO1xuXG4gICAgcHVibGljIF9vbmx5T25lOiBudW1iZXJbXSA9IFtdO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5pWj54mM77yMQe+8jDLvvIwz77yMNO+8jDUg5LiN566X5pWj54mM5LqGICDkuKrmlbDkuLox5LiU5LiN5Zyo6L+e5a2Q5Lit44CCXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgX3Vyb241T25lOiBudW1iZXJbXSA9IFtdO1xuICAgIHB1YmxpYyBfdXJvbjVPbmVDb2xvcjogbnVtYmVyW10gPSBbXTtcbiAgICAvL+WfuuehgOe7k+aehCBcbiAgICBwdWJsaWMgX29uZTogbnVtYmVyW10gPSBbXTtcbiAgICBwdWJsaWMgX3R3bzogbnVtYmVyW10gPSBbXTtcbiAgICBwdWJsaWMgX3RocmVlOiBudW1iZXJbXSA9IFtdO1xuICAgIHB1YmxpYyBfZm91cjogbnVtYmVyW10gPSBbXTtcblxuICAgIHB1YmxpYyBfc3RyYWlnaHQ6IG51bWJlcltdW10gPSBbXTsgIC8v6L+e5a2QIOS7jjN+QeeahOacgOmVv+WNlei/niAgIOWPr+iDveaYr+S4pOS4qui/nuWtkFxuXG4gICAgcHVibGljIF9kaWNDb2xvcjJMaXN0OiBNYXA8bnVtYmVyLCBudW1iZXJbXT4gPSBuZXcgTWFwPG51bWJlciwgbnVtYmVyW10+KCk7XG4gICAgcHVibGljIFNwbGl0KHNob3VwYWk6IG51bWJlcltdKSB7XG4gICAgICAgIHRoaXMuX3Nob3VQYWlDb2xvciA9IFtdO1xuICAgICAgICBVSVV0aWwuQ29uY2F0KHRoaXMuX3Nob3VQYWlDb2xvciwgc2hvdXBhaSk7XG4gICAgICAgIHRoaXMuU2VhcmNoQ29sb3IoKTtcbiAgICAgICAgdGhpcy5fc2hvdVBhaSA9IFtdO1xuICAgICAgICBVSVV0aWwuQ29uY2F0KHRoaXMuX3Nob3VQYWksIHNob3VwYWkpO1xuICAgICAgICB0aGlzLl9zaG91UGFpID0gVGV4YXNCYXNlLk9yZGVyUGFpTm9Db2xvcih0aGlzLl9zaG91UGFpKTtcbiAgICAgICAgdGhpcy5TZWFyY2hCYXNlKCk7XG5cbiAgICAgICAgdGhpcy5fc3RyYWlnaHQgPSBbXTtcbiAgICAgICAgdGhpcy5TZWFyY2hTdHJhaWdodCgpO1xuICAgICAgICB0aGlzLlNlYXJjaFN0cmFpZ2h0QSgpO1xuXG4gICAgICAgIHRoaXMuX3Vyb241T25lID0gW107XG4gICAgICAgIHRoaXMuU2VhcmNoVW5yb24oKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgU2VhcmNoQ29sb3IoKSB7XG4gICAgICAgIHRoaXMuX3Nob3VQYWlDb2xvci5mb3JFYWNoKHBhaSA9PiB7XG4gICAgICAgICAgICBsZXQgX2NvbG9yID0gVGV4YXNCYXNlLkdldENhcmRDb2xvcihwYWkpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9kaWNDb2xvcjJMaXN0LmhhcyhfY29sb3IpKSB0aGlzLl9kaWNDb2xvcjJMaXN0LnNldChfY29sb3IsIFtdKTtcbiAgICAgICAgICAgIHRoaXMuX2RpY0NvbG9yMkxpc3QuZ2V0KF9jb2xvcikucHVzaChwYWkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy/liIbmiJDlm5vkuKrmlbDnu4RcbiAgICBwdWJsaWMgU2VhcmNoQmFzZSgpIHtcbiAgICAgICAgbGV0IF9kaWNQb2tlcjJDb3VudDogTWFwPG51bWJlciwgbnVtYmVyPiA9IFRleGFzQmFzZS5HZXRQb2tlcl9Db3VudCh0aGlzLl9zaG91UGFpKTtcbiAgICAgICAgbGV0IF90ZW1wOiBudW1iZXJbXSA9IFtdO1xuICAgICAgICBfZGljUG9rZXIyQ291bnQuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKF9kaWNQb2tlcjJDb3VudC5nZXQoa2V5KSA9PSA0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fb25lLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB0aGlzLl90d28ucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3RocmVlLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9mb3VyLnB1c2goa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKF9kaWNQb2tlcjJDb3VudC5nZXQoa2V5KSA9PSAzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fb25lLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB0aGlzLl90d28ucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3RocmVlLnB1c2goa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKF9kaWNQb2tlcjJDb3VudC5nZXQoa2V5KSA9PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fb25lLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB0aGlzLl90d28ucHVzaChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoX2RpY1Bva2VyMkNvdW50LmdldChrZXkpID09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9vbmUucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX29ubHlPbmUucHVzaChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fb25lID0gVGV4YXNCYXNlLk9yZGVyUGFpTm9Db2xvcih0aGlzLl9vbmUpO1xuICAgICAgICB0aGlzLl90d28gPSBUZXhhc0Jhc2UuT3JkZXJQYWlOb0NvbG9yKHRoaXMuX3R3byk7XG4gICAgICAgIHRoaXMuX3RocmVlID0gVGV4YXNCYXNlLk9yZGVyUGFpTm9Db2xvcih0aGlzLl90aHJlZSk7XG4gICAgICAgIHRoaXMuX2ZvdXIgPSBUZXhhc0Jhc2UuT3JkZXJQYWlOb0NvbG9yKHRoaXMuX2ZvdXIpO1xuICAgIH1cblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8gXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwcml2YXRlIFNlYXJjaFN0cmFpZ2h0KCkge1xuICAgICAgICBpZiAodGhpcy5fc2hvdVBhaS5sZW5ndGggPCA1KSByZXR1cm47Ly/kuI3otrM15Liq54mM5bCx5LiN5aSE55CG55qEICAgIFxuICAgICAgICBsZXQgX3RlbXBvbmU6IG51bWJlcltdID0gdGhpcy5fb25lO1xuICAgICAgICBsZXQgX21pblN0cmFpZ2h0OiBudW1iZXJbXSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF90ZW1wb25lLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgaWYgKF90ZW1wb25lW2ldIC0gMSA9PSBfdGVtcG9uZVtpICsgMV0pIHtcbiAgICAgICAgICAgICAgICBfbWluU3RyYWlnaHQucHVzaChfdGVtcG9uZVtpXSk7XG4gICAgICAgICAgICAgICAgaWYgKGkgKyAxID09IF90ZW1wb25lLmxlbmd0aCAtIDEpIF9taW5TdHJhaWdodC5wdXNoKF90ZW1wb25lW2kgKyAxXSk7Ly/mnIDlkI7kuIDkuKropoHliqDkuIpcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Ugey8v5Y+v6IO95Lya5Ye6546w5Yia5omN5aW9NeS4qu+8jOiAjOWQjui/mOacieeJjO+8jOaQnOe0ouS4jeWIsFxuICAgICAgICAgICAgICAgIF9taW5TdHJhaWdodC5wdXNoKF90ZW1wb25lW2ldKTtcbiAgICAgICAgICAgICAgICBpZiAoX21pblN0cmFpZ2h0Lmxlbmd0aCA+PSA1KSB0aGlzLl9zdHJhaWdodC5wdXNoKF9taW5TdHJhaWdodCk7XG4gICAgICAgICAgICAgICAgX21pblN0cmFpZ2h0ID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9taW5TdHJhaWdodC5sZW5ndGggPj0gNSkgdGhpcy5fc3RyYWlnaHQucHVzaChfbWluU3RyYWlnaHQpOy8v5pyA5ZCO5LiA57uE5b+F6aG75Yqg6L+b5Y67IOS4jeeEtuS4gOS4qumVv+i/nuWtkOayoeaQnOe0ouWIsFxuICAgIH1cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWPquWkhOeQhkEyMzQ1ICAgXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwcml2YXRlIFNlYXJjaFN0cmFpZ2h0QSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Nob3VQYWkubGVuZ3RoIDwgNSkgcmV0dXJuOy8v5LiN6LazNeS4queJjOWwseS4jeWkhOeQhueahCAgXG4gICAgICAgIGlmICh0aGlzLl9zaG91UGFpLmluZGV4T2YoMTQpID09IC0xKSByZXR1cm47Ly/msqHmnIlB5bCx5LiN5aSE55CG5LqGXG4gICAgICAgIGxldCBfdGVtcFNob3VQYWk6IG51bWJlcltdID0gdGhpcy5fc2hvdVBhaTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfdGVtcFNob3VQYWkubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoX3RlbXBTaG91UGFpW2ldID09IDE0KSBfdGVtcFNob3VQYWlbaV0gPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IF9taW5TdHJhaWdodDogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfdGVtcFNob3VQYWkubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoX3RlbXBTaG91UGFpW2ldIC0gMSA9PSBfdGVtcFNob3VQYWlbaSArIDFdKSB7XG4gICAgICAgICAgICAgICAgX21pblN0cmFpZ2h0LnB1c2goX3RlbXBTaG91UGFpW2ldKTtcbiAgICAgICAgICAgICAgICBpZiAoaSArIDEgPT0gX3RlbXBTaG91UGFpLmxlbmd0aCAtIDEpIF9taW5TdHJhaWdodC5wdXNoKF90ZW1wU2hvdVBhaVtpICsgMV0pOy8v5pyA5ZCO5LiA5Liq6KaB5Yqg5LiKXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHsvL+WPr+iDveS8muWHuueOsOWImuaJjeWlvTXkuKrvvIzogIzlkI7ov5jmnInniYzvvIzmkJzntKLkuI3liLBcbiAgICAgICAgICAgICAgICBfbWluU3RyYWlnaHQucHVzaChfdGVtcFNob3VQYWlbaV0pO1xuICAgICAgICAgICAgICAgIGlmIChfbWluU3RyYWlnaHQubGVuZ3RoID49IDUpIHRoaXMuX3N0cmFpZ2h0LnB1c2goX21pblN0cmFpZ2h0KTtcbiAgICAgICAgICAgICAgICBfbWluU3RyYWlnaHQgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoX21pblN0cmFpZ2h0Lmxlbmd0aCA+PSA1ICYmIF9taW5TdHJhaWdodC5pbmRleE9mKDEpID49IDApIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX3RlbXBTaG91UGFpLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChfdGVtcFNob3VQYWlbaV0gPT0gMSkgX3RlbXBTaG91UGFpW2ldID0gMTQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9zdHJhaWdodC5wdXNoKF9taW5TdHJhaWdodCk7Ly/mnIDlkI7kuIDnu4Tlv4XpobvliqDov5vljrsg5LiN54S25LiA5Liq6ZW/6L+e5a2Q5rKh5pCc57Si5YiwXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmkJzntKLmlaPniYwg5Liq5pWw5LiN6IO95aSn5LqOMe+8jOS4jeWcqOi/nuWtkOS4reOAglxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHJpdmF0ZSBTZWFyY2hVbnJvbigpIHtcbiAgICAgICAgbGV0IF90ZW1wVW5yb246IG51bWJlcltdID0gdGhpcy5fb25seU9uZTtcbiAgICAgICAgdGhpcy5fc3RyYWlnaHQuZm9yRWFjaChfdGVtcFN0cmFpZ2h0ID0+IHtcbiAgICAgICAgICAgIF90ZW1wU3RyYWlnaHQuZm9yRWFjaChfY2FyZFZhbCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKF90ZW1wVW5yb24uaW5kZXhPZihfY2FyZFZhbCkgPj0gMCkgX3RlbXBVbnJvbi5zcGxpY2UoX3RlbXBVbnJvbi5pbmRleE9mKF9jYXJkVmFsKSwgMSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3Vyb241T25lID0gX3RlbXBVbnJvbjtcbiAgICAgICAgdGhpcy5fdXJvbjVPbmVDb2xvciA9IHRoaXMuX3Vyb241T25lO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3Vyb241T25lQ29sb3IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX3Nob3VQYWlDb2xvci5mb3JFYWNoKF9jbCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKF9jbCAlIDEwMCA9PSB0aGlzLl91cm9uNU9uZUNvbG9yW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Vyb241T25lQ29sb3JbaV0gPSBfY2w7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIEdldE1pblVucm9uKCk6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLl91cm9uNU9uZUNvbG9yLmxlbmd0aCA8IDApIHJldHVybiAwO1xuICAgICAgICBsZXQgX3RlbXA6IG51bWJlcltdID0gVGV4YXNCYXNlLk9yZGVyUGFpTm9Db2xvcih0aGlzLl91cm9uNU9uZSk7XG4gICAgICAgIGxldCBfbWluQ2FyZCA9IF90ZW1wW190ZW1wLmxlbmd0aCAtIDFdO1xuICAgICAgICByZXR1cm4gX21pbkNhcmQ7XG4gICAgfVxufVxuXG4vLy8gPHN1bW1hcnk+XG4vLy8gIOWQjOiKsemhuuOAieWbm+adoeOAieS4ieadoSvkuIDlr7njgInlkIzoirHjgInpobrjgInkuInmnaHjgInkuKTmnaHjgInkuIDlr7njgInlpKfml6DotZZcbi8vLyA8L3N1bW1hcnk+XG5leHBvcnQgZW51bSBQb2tlclRleGFzVHlwZSB7XG4gICAgLy/miZHlhYvnsbvlnotcbiAgICBFcnJvciA9IDAsXG4gICAgRml2ZV9TaW5nbGUgPSAxLC8vIOWNleW8oCDkuJPkuJrkuZ/lj6vpq5jniYzniYzlnotcbiAgICBGaXZlX09ORV9QQUlSID0gMiwgICAgLy/kuIDlr7nniYzlnotcbiAgICBGaXZlX1RXT19QQUlSID0gMywgICAgLy/kuKTlr7nniYzlnotcbiAgICBGaXZlX1RIUkVFID0gNCwgICAgICAgLy/kuInmnaHniYzlnotcbiAgICBGaXZlX1N0cmFpZ2h0ID0gNSwgICAgLy/pobrlrZDniYzlnotcbiAgICBGaXZlX0ZsdXNoID0gNiwgICAgICAgLy/lkIzoirHniYzlnotcbiAgICBGaXZlX1RIUkVFX1RXTyA9IDcsICAgLy/okavoiqbniYzlnotcbiAgICBGaXZlX0JvbWIgPSA4LCAgICAgICAgLy/lm5vmnaHniYzlnotcbiAgICBGaXZlX0ZsdXNoX1N0cmFpZ2h0ID0gOSwgICAgIC8v5ZCM6Iqx6aG654mM5Z6LXG4gICAgRml2ZV9GbHVzaF9Sb3lhbFN0cmFpZ2h0ID0gMTAsICAvL+eah+WutuWQjOiKsemhuueJjOWei1xufVxuZXhwb3J0IGVudW0gVGV4YXNFbm11UmVzdWx0IHtcbiAgICBEcmF3ID0gMCxcbiAgICBMb3N0ID0gMSxcbiAgICBXaW4gPSAyXG59XG5leHBvcnQgZW51bSBUZXhhc1R1cm5FbnVtIHtcbiAgICBJbml0ID0gLTEsXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDnm7Lms6jpmLbmrrUg5omL54mM5pWw5Li6MC0t5bCP55uy5b2T5bqE77ya6Ieq5Yqo5Y6L5oi/6Ze05L2O5YiG55qE5LiA5YiGIOWkp+ebsuazqOS4uuWwj+ebsuazqOeahOS4i+Wutu+8jOiHquWKqOWOi+aIv+mXtOeahOacgOS9juWIhu+8jOS7juWwj+ebsuazqOW8gOWni+WPkeeJjO+8jFRva2Vu5Lqk57uZ5aSn55uy5rOoXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBUdXJuMV8wID0gMSxcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOaJi+eJjOaVsOS4ujIrMyDlhazlvIDniYzkuLrmlbDkuLozICBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIFR1cm4yXzMgPSAyLFxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5omL54mM5pWw5Li6Mis0IOWFrOW8gOeJjOS4uuaVsOS4ujQgIFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgVHVybjNfNCA9IDMsXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmiYvniYzmlbDkuLoyKzUg5YWs5byA54mM5Li65pWw5Li6NSBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIFR1cm40XzUgPSA0LFxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5q+U54mM54q25oCB5LqGXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBUcnVuQ29tcGFyZSA9IDUsXG59XG5leHBvcnQgZW51bSBUZXhhc1R1cm5BY3Rpb25FbnVtIHtcbiAgICBJbml0ID0gLTEsXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlsI/nm7JcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHNiID0gMSxcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWkp+ebslxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgYmIgPSAyLFxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8gc3RyYWRsbGVcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHN0cmFkbGxlID0gMyxcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOi3n1xuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgY2FsbCA9IDQsXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlvIPniYxcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIGZvbGQgPSA1LFxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8gYWxsaW5cbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIGFsbGluID0gNixcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOiuqeeJjFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgQ2hlY2sgPSA3LFxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5Yqg5rOoIDIvM1xuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgQjJfMyA9IDgsXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDliqDms6ggMS8yIFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgQjFfMiA9IDksXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDliqDms6ggMVxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgQjEgPSAxMCxcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWFqOmDqOWKoOazqOaTjeS9nFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgQiA9IDExLFxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5q+U54mMXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBzaG93ZG9udyA9IDE1LFxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5L+d6Zmp57G75Z6LIOWPr+iDvemcgOimgeivpue7hueahOS/nemZqea1geeoi1xuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgSW5zID0gMjAsXG59XG5cbmV4cG9ydCBjbGFzcyBEaWNIZWxwZXIge1xuICAgIGNvbnN0cnVjdG9yKHQ6IFBva2VyVGV4YXNUeXBlLCBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fdCA9IHQ7XG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcHVibGljIF90OiBQb2tlclRleGFzVHlwZTtcbiAgICBwdWJsaWMgX25hbWU6IHN0cmluZztcbn1cblxuIl19