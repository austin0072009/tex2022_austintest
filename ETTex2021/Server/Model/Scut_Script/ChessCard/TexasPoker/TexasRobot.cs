using ETModel.Framework.Game.Contract.Action;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ETModel.Script.CsScript.Action
{
    /// <summary>
    /// 机器人：
    /// 做简单的AI判断 
    /// 下注，一直下注。确定AI值 
    /// </summary>
    public class TexasRobot : BaseRobot
    {
        UserStatus _us;
        TexasUser myu;
        public override void RobotDealMSG(object UserIDandStrMSG)
        {
            object[] objArr = new object[3];
            objArr = (object[])UserIDandStrMSG;
            _us = (UserStatus)objArr[1];
            myu = (TexasUser)objArr[2];
            try
            {
                RobotDealMSGEx(objArr[0]);
            }
            catch (Exception ex)
            { TraceLogEx.Error(ex, "201611122210tex"); }
        }

        /// <summary>
        ///  消息处理  
        /// </summary> 
        /// <param name="strMSG"></param>
        private async void RobotDealMSGEx(object msg)
        {
            sc_base _csdata = (sc_base)msg;
            if (_csdata == null) return; 
            if (myu == null)
            {
                TraceLogEx.Error(" 201611301729tex " + myu._userid + " strMSG:" + msg);
                return;
            }
            //if (_csdata.fn == "sc_end_tex_n" ) return;//金币场结束了不处理了 因为异步过来的，桌子已经不存在了

            UserStatus _us = await BaseHelper.GetUserStatusbyUserID(myu._userid);
            if (_us == null)
            {
                TraceLogEx.Error(" 201611301728tex " + myu._userid);
                return;
            }
            if (_us.Status == UserStatusEnum.InLobby) return;//一局结算了，Table已释放 

           
            var tab = TexasLobby.instance.GetTableByRoomIDandTableID(myu._levelid, myu._tableid);
            if ((tab._tablestatus == TableStatusEnum.WaitforReady || tab._tablestatus == TableStatusEnum.Initi) && !myu._isReady)
            {
               // tab.Ready(myu._userid);// 逻辑不需要准备  
            }
            switch (_csdata.fn)
            {
                case "sc_entertable_n":
                    break;
                case "sc_ready_tex_n":
                    break;
                case "sc_entertable_tex_n"://默认就是准备状态不处理的其他
                    break;
                case "sc_tablestart_tex_n":
                    break;
                case "sc_token_tex_n":
                    sc_token_tex_n _tabletoken = (sc_token_tex_n)msg;
                    if (myu.pos == _tabletoken.pos)
                    {
                        int _waittimeStart = GetTokenWaitTime(tab._judge._texasTurn);
                        await ThreadEx.Sleep(_waittimeStart);
                        TexasTable _myt_token = TexasLobby.instance.GetTableByRoomIDandTableID(myu._levelid, myu._tableid);
                        if (_myt_token != null && _myt_token._judge != null && myu != null && _myt_token._tablestatus == TableStatusEnum.Playing)
                        {
                            int _moreweght12 = GetGiveRate12(_myt_token, myu);//1.2手牌加权重
                            int _moregiveup123 = GetGiveRate3(_myt_token, myu);//3张公牌出来后
                            int _followrate = GetFollowRate(_myt_token, myu);
                            int _more_follow = GetFollewRateCommon(_myt_token, myu);
                            _followrate += _moreweght12 + _moregiveup123 + _more_follow;
                            int weight = ComputerWeight(_myt_token, myu);
                            weight = ComputerWeightNegative(_myt_token, myu, weight + _moreweght12);
                            int _allinrate = (int)_myt_token._judge._texasTurn;
                            int _addrate = (_myt_token._judge._texasTurn > TexasTurnEnum.Turn1_0) ? (int)_myt_token._judge._texasTurn * 2 : -5;
                            TexasAIAction _action = TexasAIAction.Fellow;//默认跟牌 
                            if (weight >= 90)
                            {
                                if (ToolsEx.CheckPercent(5 + _allinrate)) _action = TexasAIAction.Allin;
                                else if (ToolsEx.CheckPercent(90 + _addrate)) _action = TexasAIAction.Add;
                                else _action = TexasAIAction.Fellow;
                            }
                            else if (weight >= 80)
                            {
                                if (ToolsEx.CheckPercent(4 + _allinrate)) _action = TexasAIAction.Allin;
                                else if (ToolsEx.CheckPercent(80 + _addrate)) _action = TexasAIAction.Add;
                                else _action = TexasAIAction.Fellow;
                            }
                            else if (weight >= 70)
                            {
                                if (ToolsEx.CheckPercent(3 + _allinrate)) _action = TexasAIAction.Allin;
                                else if (ToolsEx.CheckPercent(70 + _addrate)) _action = TexasAIAction.Add;
                                else _action = TexasAIAction.Fellow;
                            }
                            else if (weight >= 60)
                            {
                                if (ToolsEx.CheckPercent(2 + _allinrate)) _action = TexasAIAction.Allin;
                                else if (ToolsEx.CheckPercent(60 + _addrate)) _action = TexasAIAction.Add;
                                else _action = TexasAIAction.Fellow;
                            }
                            else if (weight >= 50)
                            {
                                if (ToolsEx.CheckPercent(1 + _allinrate)) _action = TexasAIAction.Allin;
                                else if (ToolsEx.CheckPercent(40 + _addrate)) _action = TexasAIAction.Add;
                                else
                                {
                                    _action = TexasAIAction.Fellow;
                                    if (ToolsEx.CheckPercent(3)) _action = TexasAIAction.GiveUP;
                                }
                            }
                            else if (weight >= 40)
                            {
                                if (ToolsEx.CheckPercent(_addrate)) _action = TexasAIAction.Add;
                                else
                                {
                                    _action = TexasAIAction.Fellow;
                                    if (ToolsEx.CheckPercent(2)) _action = TexasAIAction.GiveUP;
                                }
                            }
                            else if (weight >= 30)
                            {
                                if (ToolsEx.CheckPercent(20 + _followrate)) _action = TexasAIAction.Fellow; // 小值 跟注率用
                                else _action = TexasAIAction.GiveUP;
                            }
                            else
                            {
                                if (ToolsEx.CheckPercent(10 + _followrate)) _action = TexasAIAction.Fellow; // 小值 跟注率用
                                else _action = TexasAIAction.GiveUP;
                            }

                            if (_action == TexasAIAction.Fellow && myu._CurrentGold <= _myt_token._judge._baseGamle * 5)
                            {//不足底注的6倍时直接Allin，
                                _action = TexasAIAction.Allin;
                            }
                            if (_myt_token._judge._gametype == 20)
                            {
                                if (_action != TexasAIAction.GiveUP || _action != TexasAIAction.Allin) _action = TexasAIAction.Allin;
                            }
                            if (_action == TexasAIAction.GiveUP)
                            {
                                long _gambleRandom = _myt_token._judge.GetGambleLimit(myu);// 
                                if (_gambleRandom == 0) _myt_token.Gamble(myu._userid, 0);
                                else _myt_token.GiveUp(myu._userid, true);
                            }
                            else if (_action == TexasAIAction.Allin)
                            {
                                _myt_token.Gamble(myu._userid, (int)myu._CurrentGold);
                            }
                            else
                            {//默认跟牌 
                                long _gambleRandom = _myt_token._judge.GetGambleLimit(myu);//_tabletoken._min;
                                if (_action != TexasAIAction.Add && _gambleRandom == 0)
                                {
                                    int lookrate = GetLookRate(weight);
                                    lookrate += GetLookRateForRobot(_myt_token);
                                    if (ToolsEx.CheckPercent(lookrate)) _action = TexasAIAction.Add;//X%概率不休 
                                }
                                if (_action == TexasAIAction.Add)
                                {//如果一轮有2次加注就不再加了
                                    if (ForceAddCount(_myt_token, myu)) _action = TexasAIAction.Fellow;//强制跟  
                                }
                                if (_action == TexasAIAction.Add)
                                {
                                    _gambleRandom = _myt_token._judge.GetCurTurnMaxGamble();
                                    if (_tabletoken._min != 0) _gambleRandom = _myt_token._judge.GetGambleLimit(myu);//一圈内有人加注就不再加注了

                                    int _mingold = (int)_myt_token._judge.GetGambleLimit(myu);
                                    int _addrate1 = ToolsEx.GetRandomSys(1, 4);
                                    int addbase = (int)Math.Max(_myt_token._judge._baseGamle * 2, _myt_token._judge._alljackpot / 2 / 100 * 100);
                                    if (_gambleRandom == 0) _gambleRandom = addbase; //大盲的倍数
                                    int _tempaddgold = (int)_gambleRandom * _addrate1;

                                    if (_tempaddgold < _mingold) _tempaddgold = _mingold;
                                    if (_tempaddgold < _mingold)
                                    {
                                        TraceLogEx.Error("202001021432tex _tempaddgold:" + _tempaddgold + " _mingold:" + _mingold);
                                        _tempaddgold = _mingold;
                                    }
                                    if (_tempaddgold > myu._CurrentGold) _tempaddgold = (int)myu._CurrentGold;
                                    _myt_token.Gamble(myu._userid, _tempaddgold);//测试多加注
                                    break;
                                }
                                _myt_token.Gamble(myu._userid, _gambleRandom);
                            }
                            Turn4ActionSayText(_myt_token, myu);
                        }
                    }
                    break;
                case "sc_showcard_tex_n":
                    break;
                case "sc_gamble_tex_n":
                    break;
                case "sc_giveup_tex_n":
                    break;
                case process_tex.sc_instoken_tex_n: //默认处理成不买保险
                    sc_instoken_tex_n _tokenins = (sc_instoken_tex_n)msg;
                    int _waittimereadyins = ToolsEx.GetRandomSys(1200, 4500);
                    await ThreadEx.Sleep(_waittimereadyins);

                    TexasTable tableins = TexasLobby.instance.GetTableByRoomIDandTableID(myu._levelid, myu._tableid);
                    if (tableins != null && tableins._judge != null  && tableins._tablestatus == TableStatusEnum.Playing)
                    {  
                        int _ins = 0;
                        if (_tokenins._Cards.Count == 3) _ins = 0;
                        else
                        {
                            var ulist = tableins._judge.GetUnGiveupUserList();
                            var maxuser = tableins._judge.GetMaxCardUserCurTurn(ulist);
                            if (maxuser != null && _tokenins._ilist31 != null)
                            {
                                if (maxuser.pos == myu.pos)
                                {//如果自己是最大牌型 20% 买保险 就是故意输给保险池
                                    if (ToolsEx.CheckPercent(10)) _ins = _tokenins._ilist31.LastOrDefault();
                                }
                                else
                                {//如果自己不是是 赢保池的 25%
                                    if (ToolsEx.CheckPercent(10)) _ins = _tokenins._ilist31.LastOrDefault();
                                }
                            }
                        }
                        tableins.Insurance(myu._userid, _ins, 0, null);
                    }
                    break;
                case "sc_insurance_tex_n":
                    break;
                case "sc_end_tex_n":
                    int _waittimeready = ToolsEx.GetRandomSys(1200, 2000);
                    await ThreadEx.Sleep(_waittimeready);
                    sc_end_tex_n _showdown = (sc_end_tex_n)msg;
                    TexasTable myt0014 = TexasLobby.instance.GetTableByRoomIDandTableID(myu._levelid, myu._tableid);
                    if (myt0014 != null && myt0014._judge != null)
                    {
                        EndActionCartoon(myt0014, myu, _showdown._pos2GoldWin);
                        RobotAddGold(myt0014, myu);
                    }
                    break;
                case "sc_delay_tex_n":
                    break;
                case "sc_bigend_tex_n":
                    break;
                case "sc_sitdown_tex_n":
                    break;
                case "sc_disconnect_n":
                    break;
                case "sc_one_exittable_n":
                    break;
                case "sc_chat_n": break;
                case "sc_warning_n": break;
                case "sc_exittable_n":
                    ////sc_exittable_n _exittable = JsonUtils.Deserialize<sc_exittable_n>(strMSG);

                    ////ThreadEx.Sleep(10);
                    ////TCUser myu_exit;
                    ////DicIDtoUser.TryGetValue(UserID, out myu_exit);
                    ////if (_exittable. != myu_exit._Pos)
                    ////{   //自己的退出消息不再处理 
                    ////    TCTable mytexit = TCLobby.GetTableByRoomIDandTableID(myu_exit._roomid, _exittable.tableid);
                    ////    if (mytexit != null) mytexit.ExitTable(myu_exit._userid); //    
                    ////}
                    break;
                case "sc_tokenvmaster_tex_n":
                    break;
                case "sc_tickuser_tex_n":
                    break;
                case "sc_sitdownwaitup_tex_n":
                    break;
                case "sc_sitdownwait_tex_n":
                    break;
                case "sc_agreeintogold_tex_n":
                    break;
                case "sc_situpkeep_tex_n":
                    break;
                case "sc_alljackpot_tex_n":
                    break;
                default:
                    TraceLogEx.Error("201206190957tex strSID：" + _csdata.fn);
                    break;
            }
        }

        /// <summary>
        /// 获取权重
        /// </summary>
        /// <param name="_applytlist">头牌在0 尾牌是1</param>
        /// <returns></returns>
        private int ComputerWeight(TexasTable table, TexasUser myu)
        {
            if (table == null || myu == null || table._judge == null) return 0;

            List<int> Maxcard = Texas.GetFiveFromSeven(myu._shouPaiArr, table._judge._fiveCommonCard);
            //int _addrate = AddWeightByCard(myu._shouPaiArr, Maxcard);
            int contentmine = 0;
            foreach (var c in Maxcard)
            {
                if (myu._shouPaiArr.Contains(c)) contentmine++;
            }
            Texas.TexasPokerType _apply = Texas.GetTexasType(Maxcard);

            int weight = 0;
            if (_apply == Texas.TexasPokerType.Error) return weight;

            if (_apply >= Texas.TexasPokerType.Five_Flush_LoyalStraight)
            {
                weight = 100;
                if (contentmine == 2) weight += 6;
                else if (contentmine == 1) weight -= 20;
                else weight -= 80;
            }
            else if (_apply >= Texas.TexasPokerType.Five_Flush_Straight)
            {
                weight = 90;
                if (contentmine == 2) weight += 6;
                else if (contentmine == 1) weight += 0;
                else weight -= 70;
            }
            else if (_apply >= Texas.TexasPokerType.Five_Bomb)
            {
                weight = 80;
                if (contentmine == 2) weight += 6;
                else if (contentmine == 1) weight += 0;
                else weight -= 60;
            }
            else if (_apply >= Texas.TexasPokerType.Five_THREE_TWO)
            {
                weight = 75;
                if (contentmine == 2) weight += 6;
                else if (contentmine == 1) weight += 0;
                else weight -= 55;
            }
            else if (_apply >= Texas.TexasPokerType.Five_Flush)
            {
                weight = 70;
                if (contentmine == 2) weight += 0;
                else if (contentmine == 1) weight -= 6;
                else weight -= 60;
            }
            else if (_apply >= Texas.TexasPokerType.Five_Straight)
            {
                weight = 60;
                if (contentmine == 2) weight += 6;
                else if (contentmine == 1) weight -= 6;
                else weight -= 50;
            }
            else if (_apply >= Texas.TexasPokerType.Five_THREE)
            {
                weight = 50;
                if (contentmine == 2) weight += 6;
                else if (contentmine == 1) weight -= 6;
                else weight -= 40;
            }
            else if (_apply >= Texas.TexasPokerType.Five_TWO_PAIR)
            {
                weight = 40;
                if (contentmine == 2) weight += 6;
                else if (contentmine == 1) weight -= 6;
                else weight -= 30;
            }
            else if (_apply >= Texas.TexasPokerType.Five_ONE_PAIR)
            {
                weight = 30;
                if (contentmine == 2) weight += 0;
                else if (contentmine == 1) weight -= 6;
                else weight -= 20;
            }
            else weight = 10;

            return weight;
        }

        /// <summary>
        /// 手牌大来确定最弃跟 对子 同花 连子 大单牌加权重 
        /// </summary>
        /// <param name="table"></param>
        /// <param name="myu"></param>
        /// <returns></returns>
        private int GetGiveRate12(TexasTable table, TexasUser myu)
        {
            if (table == null || myu == null || myu._shouPaiArr == null || myu._shouPaiArr.Count < 2 || table._judge == null) return 0;

            if (table._judge._texasTurn > TexasTurnEnum.Turn1_0) return 0;
            int weight = 0;
            List<int> shoupai = new List<int>() { myu._shouPaiArr[0], myu._shouPaiArr[1] };
            if (shoupai.Count != 2) return weight;
            //对子
            if (myu._shouPaiArr[0] == myu._shouPaiArr[1])
            {
                int doubeval = Texas.IsSameValue(myu._shouPaiArr);
                if (doubeval >= 10) weight += 30;
                else if (doubeval > 0) weight += 20;
            }
            if (Texas.IsFlush(myu._shouPaiArr))
            {
                weight += 15;
            }
            if (Texas.IsStraight(myu._shouPaiArr))
            {
                weight += 10;
            }
            if (myu._shouPaiArr[0] % 100 > 10 || myu._shouPaiArr[1] % 100 > 10)
            {//有单张大处理
                weight += 5;
            }
            return weight;
        }
        /// <summary>
        /// 手牌大来确定最弃跟 对子 同花 连子 大单牌加权重 
        /// </summary>
        /// <param name="table"></param>
        /// <param name="myu"></param>
        /// <returns></returns>
        private int GetFollewRateCommon(TexasTable table, TexasUser myu)
        {
            if (table == null || myu == null || myu._shouPaiArr == null || myu._shouPaiArr.Count < 2 || table._judge == null) return 0;

            if (table._judge._texasTurn > TexasTurnEnum.Turn1_0)
            {
                List<int> Maxcard = Texas.GetFiveFromSeven(myu._shouPaiArr, table._judge._fiveCommonCard);
                int neg = 0;
                int humanCount = 0;
                table.ForeachAllDo((i) =>
                {
                    TexasUser _wuser = table.GetUserByPosMust(i);
                    if (_wuser == null) return;
                    if (_wuser._isgiveup) return;
                    if (!_wuser._isRobot) humanCount++;
                });
                table.ForeachAllDo((i) =>
                {
                    TexasUser _wuser = table.GetUserByPosMust(i);
                    if (_wuser == null) return;
                    if (_wuser._isgiveup) return;
                    List<int> Maxcard2 = Texas.GetFiveFromSeven(_wuser._shouPaiArr, table._judge._fiveCommonCard);
                    var res = Texas.ComparePoker(Maxcard, Maxcard2);

                    if (res == Texas.TexasEnmuResult.Lost) neg -= 15;
                    else neg += 5;
                });
                if (humanCount == 0) neg += 15;//增加表演数据
                if (humanCount == 1) neg += 5;//增加表演数据

                return neg;
            }
            else
                return 0;
        }
        /// <summary>
        /// 开了三张公牌了
        /// </summary>
        /// <param name="table"></param>
        /// <param name="myu"></param>
        /// <returns></returns>
        private int GetGiveRate3(TexasTable table, TexasUser myu)
        {
            if (table == null || myu == null || myu._shouPaiArr == null || myu._shouPaiArr.Count < 2 || table._judge == null) return 0;

            if (table._judge._texasTurn != TexasTurnEnum.Turn2_3) return 0;

            List<int> temp5card = new List<int>(myu._shouPaiArr);
            if (table._judge._fiveCommonCard.Count >= 3)
            {
                temp5card.Add(table._judge._fiveCommonCard[0]);
                temp5card.Add(table._judge._fiveCommonCard[1]);
                temp5card.Add(table._judge._fiveCommonCard[2]);
            }
            Texas.TexasPokerType _apply = Texas.GetTexasType(temp5card);

            int weight = 0;
            if (_apply == Texas.TexasPokerType.Error) return weight;

            if (_apply >= Texas.TexasPokerType.Five_Flush_LoyalStraight)
            {
                weight = 100;
            }
            else if (_apply >= Texas.TexasPokerType.Five_Flush_Straight)
            {
                weight = 90;
            }
            else if (_apply >= Texas.TexasPokerType.Five_Bomb)
            {
                weight = 80;
            }
            else if (_apply >= Texas.TexasPokerType.Five_THREE_TWO)
            {
                weight = 75;
            }
            else if (_apply >= Texas.TexasPokerType.Five_Flush)
            {
                weight = 70;
            }
            else if (_apply >= Texas.TexasPokerType.Five_Straight)
            {
                weight = 60;
            }
            else if (_apply >= Texas.TexasPokerType.Five_THREE)
            {
                weight = 50;
            }
            else if (_apply >= Texas.TexasPokerType.Five_TWO_PAIR)
            {
                weight = 40;
            }
            else if (_apply >= Texas.TexasPokerType.Five_ONE_PAIR)
            {
                weight = 30;
            }
            else if (Texas.IsSameColoronly4(temp5card))
            { //AI 升级一次，差一个连子，差一个同花  
                weight = 50;
            }
            else weight = -30;

            return weight;
        }
        /// <summary>
        /// 根据人数， 与其他人比牌进行的负权重计算 公开牌为4的时候才处理
        /// </summary>
        /// <param name="table"></param>
        /// <returns></returns>
        private int ComputerWeightNegative(TexasTable table, TexasUser myu, int weight)
        {
            if (table == null || myu == null || table._judge == null) return 0;
            if (table._judge._texasTurn < TexasTurnEnum.Turn3_4) return 0;
            List<int> Maxcard = Texas.GetFiveFromSeven(myu._shouPaiArr, table._judge._fiveCommonCard);

            int neg = 0;
            int humanCount = 0;
            table.ForeachAllDo((i) =>
            {
                TexasUser _wuser = table.GetUserByPosMust(i);
                if (_wuser == null) return;
                if (_wuser._isgiveup) return;
                List<int> Maxcard2 = Texas.GetFiveFromSeven(_wuser._shouPaiArr, table._judge._fiveCommonCard);
                var res = Texas.ComparePoker(Maxcard, Maxcard2);

                if (res == Texas.TexasEnmuResult.Lost) neg -= 15;
                else neg += 5;
                if (!_wuser._isRobot) humanCount++;
            });
            if (humanCount == 0) neg += 15;//增加表演数据
            if (humanCount == 1) neg += 5;//增加表演数据
            return weight + neg;
        }
        //暂时未使用了
        private int AddWeightByCard(List<int> shoupai, List<int> Maxcard)
        {
            int addrate = 0;
            if (shoupai.Count != 2) return 0;
            if (shoupai[0] / 100 == shoupai[1] / 100) return addrate += 4;//同色
            if (shoupai[0] % 100 == shoupai[1] % 100) return addrate += 3;//对子
            if (shoupai[0] % 100 > 10 && shoupai[1] % 100 > 10) return addrate += 2;

            if (shoupai[0] % 100 < 10 && shoupai[1] % 100 < 10) return addrate -= 5;

            int contentmine = 0;
            foreach (var c in Maxcard)
            {
                if (shoupai.Contains(c)) contentmine++;
            }
            if (contentmine == 1) addrate -= 20;
            if (contentmine == 2) addrate += 4;
            return addrate;
        }
        private int GetLookRate(int weight)
        {
            int rate = 0;

            if (weight >= 650)
            {
                rate = 100;//100% 不休
            }
            else if (weight >= 60)
            {
                rate = 80;//100% 不休
            }
            else if (weight == 50)
            {
                rate = 50;//100% 不休
            }
            else if (weight == 20)
            {
                rate = 0;//100% 不休
            }
            else if (weight == 10)
            {
                rate = 0;//100% 不休
            }
            return rate;
        }
        // 转机器人 如果在玩没有真人了 强制不休
        private int GetLookRateForRobot(TexasTable table)
        {
            if (table == null) return 0;
            int rate = 100;
            int pcount = 0;
            table.ForeachAllDo((i) =>
            {
                var user = table.GetUserByPosMust(i);
                if (!user._isRobot) pcount++;
                if (user._isgiveup) return;
                if (!user._isRobot) rate = 0;//有真人参与 只剩下机器 强制不休
            });
            if (pcount == 0) rate = 0;//纯机器人需要表演
            return rate;
        }
        /// <summary>
        /// 一轮强制只能加注两次
        /// </summary>
        /// <param name="table"></param>
        /// <param name="myu"></param>
        /// <returns></returns>
        private bool ForceAddCount(TexasTable table, TexasUser myu)
        {
            if (myu == null || table == null || table._judge == null) return false;
            int addcount = 0;
            table.ForeachAllDo((i) =>
            {
                var _tempu = table.GetUserByPosMust(i);
                if (_tempu == null) return;
                if (_tempu.pos == myu.pos) return;
                if (_tempu._isgiveup) return;
                if (_tempu.haveadd) addcount++;
            });
            if (addcount > 1) return true;
            else return false;
        }
        private int GetFollowRate(TexasTable table, TexasUser myu)
        {
            if (table == null || myu == null || table._judge == null) return 0;
            int followrate = 0;
            int _followgold = (int)table._judge.GetGambleLimit(myu);//为了表演首轮 增加跟注概率
            if (_followgold <= table._judge._baseGamle * 2) followrate += 55;
            else if (_followgold <= table._judge._baseGamle * 4) followrate += 20;
            return followrate;
        }
        /// <summary>
        /// 5% 5到10秒  
        /// 10%  4到8秒
        /// 40%  2到4秒
        /// 45%  2秒内
        /// </summary>
        /// <returns></returns>
        private int GetTokenWaitTime(TexasTurnEnum _turn)
        {
            int _waittimeStart = 1100;
            int _level = ToolsEx.GetRandomSys(0, 101);
            if (_turn == TexasTurnEnum.Turn1_0)
            {
                if (_level <= 50)
                { _waittimeStart = ToolsEx.GetRandomSys(1000, 2500); }
                else if (_level <= 50 + 35)
                { _waittimeStart = ToolsEx.GetRandomSys(2500, 3500); }
                else if (_level <= 50 + 35 + 13)
                { _waittimeStart = ToolsEx.GetRandomSys(3500, 4500); }
                else
                { _waittimeStart = ToolsEx.GetRandomSys(4500, 7500); }
            }
            else
            {
                if (_level <= 50)
                { _waittimeStart = ToolsEx.GetRandomSys(1000, 2500); }
                else if (_level <= 50 + 40)
                { _waittimeStart = ToolsEx.GetRandomSys(2500, 4500); }
                else if (_level <= 50 + 40 + 5)
                { _waittimeStart = ToolsEx.GetRandomSys(4500, 6500); }
                else
                { _waittimeStart = ToolsEx.GetRandomSys(6500, 11000); }
            }
            return _waittimeStart;
        }

        public async void RobotAddGold(TexasTable table, TexasUser myu)
        {//即时补充金币暂时不需要了
            if (table == null || myu == null) return;
            if (myu._keepseat <= 0) return;

            int _waittimeStart = 0;
            int _level = ToolsEx.GetRandomSys(0, 101);
            if (_level <= 45)
            { _waittimeStart = ToolsEx.GetRandomSys(3500, 8500); }
            else if (_level <= 45 + 40)
            { _waittimeStart = ToolsEx.GetRandomSys(8500, 35000); }
            else if (_level <= 45 + 40 + 10)
            { _waittimeStart = ToolsEx.GetRandomSys(35000, 60000); }
            else
            {
                //_waittimeStart = ToolsEx.GetRandomSys(5000, 10000);
            }
            if (_waittimeStart == 0) return;
            await ThreadEx.Sleep(_waittimeStart);
            if (table == null || table._judge == null || myu == null) return;
            if (myu._keepseat > 0 && myu._tbUser.isRobot == 1)
            {
                table.SitUpKeep(myu._userid,false);
                int _minPlayer = table._judge._baseGamle * 200 * ToolsEx.GetRandomSys(1, 6);
                await table.SitDown(myu._userid, _minPlayer, 0, table._judge.password);
            }
        }

        #region 机器人处理送花与发语音的AI
        /// <summary>
        /// 随机发文本
        /// </summary>
        public async void Turn4ActionSayText(TexasTable myt0014, TexasUser myu)
        {
            if (myt0014 == null || myt0014._judge == null) return;

            int _rateleave = ToolsEx.GetRandomSys(0, 100); //10%概率处理
            if (_rateleave < 98) return;
            int _waittimeStart = ToolsEx.GetRandomSys(1500, 3500);
            await ThreadEx.Sleep(_waittimeStart);
            if (myt0014 == null || myu == null || myt0014._judge==null) return;
            //4公牌的时候机器人发送语音  后续优化需要判断 牌型 来处理
            if (myt0014._judge._texasTurn == TexasTurnEnum.Turn3_4 && myu._isRobot)
            { 
                await ThreadEx.Sleep(900); 
                if (myt0014 == null || myt0014._judge == null) return;
                var cont = ToolsEx.GetTexasRandText();
                myt0014.SendChatBase(myu._userid, cont, 6, myu.pos);
                myu.WritetChatlog(myu._userid, cont, "1", 0, myt0014._tableid, myu._levelid, myt0014._gameid);
            }
        }

        /// <summary>
        /// 随机发送表情 赢给输最多的人送花； 如果输了给赢家咋锅
        /// </summary>
        public async void EndActionCartoon(TexasTable myt0014, TexasUser myu, List<CommonPosValSD> cp)
        {
            if (myt0014 == null || myu == null) return;
            int _rateleave = ToolsEx.GetRandomSys(0, 100); //10%概率处理
            if (_rateleave < 99) return;//10%触发

            int _waittimeStart = ToolsEx.GetRandomSys(1500, 3500);
            await ThreadEx.Sleep(_waittimeStart);
            if (myt0014 == null || myu == null) return;

            TexasUser winuser = null;
            TexasUser loseuser = null;

            //List<TexasUser> maxloseWin = myt0014._judge.GetUnGiveupUserList();
            List<CommonPosValSD> maxloseWin = cp;
            if (maxloseWin != null && maxloseWin.Count > 1 && maxloseWin.FirstOrDefault() != null && maxloseWin.LastOrDefault() != null)
            {
                maxloseWin = maxloseWin.OrderByDescending(t => t.val).ToList();
                winuser = myt0014.GetUserByIDTry(maxloseWin.FirstOrDefault().pos);
                loseuser = myt0014.GetUserByIDTry(maxloseWin.LastOrDefault().pos);
            }
            if (loseuser == null || winuser == null) return;

            if (myu.pos == loseuser.pos || myu.pos == winuser.pos)
            {//非大输家 大赢家暂停不做动作
                int actiontype = ToolsEx.GetRandomSys(1, 3);
                switch (actiontype)
                {
                    case 1://赢家给输最多的人送花
                        if (myu.pos == winuser.pos && winuser._isRobot)
                            myt0014.SendChatBase(winuser._userid, "5", 5, loseuser.pos);
                        break;
                    case 2://输家给赢家咋锅
                        if (myu.pos == loseuser.pos && loseuser._isRobot)
                            myt0014.SendChatBase(loseuser._userid, "13", 5, winuser.pos);
                        break;
                    //不能延时  暂时不用
                    case 3://双向 需要延时
                        if (myu.pos == winuser.pos && winuser._isRobot)//机器人可以给z人发，z人不能给机器人发
                            myt0014.SendChatBase(winuser._userid, "5", 5, loseuser.pos);
                        int _waittimeStart2 = ToolsEx.GetRandomSys(1500, 3500);
                        await ThreadEx.Sleep(_waittimeStart2);
                        if (myt0014 != null && myu != null && myu.pos == loseuser.pos && loseuser._isRobot)
                        {
                            myt0014.SendChatBase(loseuser._userid, "13", 5, winuser.pos);
                        }
                        break;
                }
            }
        }

        #endregion
    }
    public enum TexasAIAction
    {
        GiveUP = 0,
        Fellow = 1,
        Add = 50,
        Allin = 100
    }
}
