using ETModel.Framework.Common.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ETModel.Script.CsScript.Action
{
    /// <summary>
    ///   特有逻辑
    /// </summary>
    public partial class TexasTable
    {
        #region 发牌，  盲注(开始发牌前强制就打底了不够就T出去)， 看牌， 弃牌， 比牌 结算 

        /// <summary>
        /// 至少两人到位了进行 开局 
        /// </summary>
        public async void Start()
        { 
            ForeachAllDo((i) =>
            {
                var _user = GetUserByPosMust(i); 
                if (_judge.CheckMinGoldLimit(_user._CurrentGold))
                {
                    _user._inseatcannotplay = true;
                } 
            });
            if (TableStatusEnum.Playing == _tablestatus || TableStatusEnum.PrePlaying != _tablestatus)
            {
                TraceLogEx.Error("error logic ...need to deal..._tablestatus: " + _tablestatus);
                return;
            }
            int startcount = _judge._curTableOverCount > 0 ? _num_start : _num_min;
            int pcount = GetPlayerCount();
            if (pcount < startcount && pcount >= 10)
            {
                base.SetStatus(TableStatusEnum.WaitforReady);
                TraceLogEx.Error(pcount + " < " + startcount);
                return;
            }

            await base.StartBase();
            DelWatchUser_Patch();
            //tableInsurance = 0;
            _judge.StartFirstTimer();
            _judge.OneId = Guid.NewGuid().ToString();
            _judge.delaytime = 0;
            _judge._lastover = TexasTurnEnum.Init;
            _com_cardLeft = new Queue<int>();
            _strStatus = process_tex.startdiscard;//放在前面
            #region AI发牌  

            Dictionary<int, List<int>> _pokerDic = new Dictionary<int, List<int>>();
            if (CardListfromGM != null)
            {
                foreach (var v in CardListfromGM)
                {
                    _pokerDic.Add(v.Key + 1, v.Value);
                }
                //_pokerDic = new Dictionary<int, List<int>>(CardListfromGM);
            }
            else
            {
                List<List<int>> _pokeList = new List<List<int>>();
                while (true)
                {
                    _pokeList = new Texas().DistributePokerAI(_judge._gametype, _gameid, out _com_cardLeft, _playerCount);//GetPlayerCount() 会有人开局进来靠成发牌不对情况
                    if (_com_cardLeft == null)
                    {
                        TraceLogEx.Log($"公牌null，人数:{_playerCount}");
                        return;
                    }

                    _judge._fiveCommonCard = new List<int>();
                    for (int i = 0; i < 5; i++)
                    {
                        int ccard = _com_cardLeft.Dequeue();
                        _judge._fiveCommonCard.Add(ccard);
                    }
                    _judge._fiveCommonCard = ToolsEx.ListDisrupte(_judge._fiveCommonCard);
                    //_judge._fiveCommonCard = new List<int>() { 102, 202, 302, 402, 103 };//测试
                    if (DistributeLimit(_pokeList, _judge._fiveCommonCard)) continue;//再洗牌
                    else break;
                }
                TraceLogEx.Log($"公牌：{JsonUtilityEx.ListIntToString(_judge._fiveCommonCard)}");

                ForeachAllDo((i) =>
                {
                    if (_pokeList.Count == 0) return;
                    _pokerDic.Add(i, _pokeList[0]);
                    _pokeList.RemoveAt(0);
                });
                ////_judge._fiveCommonCard = new List<int>() { 314, 313, 402, 411, 209 };//测试
                ////_pokerDic = new Dictionary<int, List<int>>();
                ////_pokerDic[1] = new List<int> { 114, 214 };
                ////_pokerDic[2] = new List<int> { 307, 308 };
                ////_pokerDic[3] = new List<int> { 207, 208 };
                ////_pokerDic[4] = new List<int> { 114, 114 };
                ////_pokerDic[5] = new List<int> { 114, 114 };
                ////_pokerDic[6] = new List<int> { 114, 114 };
                ////_pokerDic[7] = new List<int> { 114, 114 };
                ////_pokerDic[8] = new List<int> { 114, 114 };
                ////_pokerDic[9] = new List<int> { 114, 114 };
                Dictionary<int, int> _pos2RobotAI = new Dictionary<int, int>();
                ForeachAllDo((i) =>
                {
                    var user = GetUserByPosMust(i);
                    _pos2RobotAI.Add(i, user.GetWinPercent);
                    //_pos2RobotAI.Add(i, i == 1 ? 101 : 0);
                });
                _judge.ChangePokerByRobotAI(_pos2RobotAI, _pokerDic);
            }
            #endregion
            List<CommonPosValSD> _useridlist = new List<CommonPosValSD>();
          
            ForeachAllDo((i) =>
            {
                TexasUser tempUser = GetUserByPosMust(i);
                _useridlist.Add(new CommonPosValSD() { pos = i, val = tempUser._userid });
                tempUser._dicturn2gamble = new Dictionary<TexasTurnEnum, long>();
                tempUser._gambleAll = 0;

                tempUser._isgiveup = false;
                tempUser._giveinTurn = TexasTurnEnum.Init;
                if (tempUser._inseatcannotplay)
                {
                    tempUser._isWatch = true;//不允许参与游戏 
                    tempUser._shouPaiArr = new List<int>();//针对弃牌用户 牌局回顾没他的bug 
                    return;
                }
                else
                {
                    tempUser.DealAddGoldInGame(_tableid);//补充一次
                } 
                tempUser.pos = i;
            });

            _bankpos = _judge.GetTurnBankerPos();// _bankpos = 1;

            List<UserIDMSG> imList = new List<UserIDMSG>();
            List<CommonPosValSD> _gamblelist = _judge.AutoBaseGamble();//底注 
            List<CommonPosValSD> _smallbiglist = _judge.AutoBaseGambleTexas();//大小盲注 
            List<CommonPosValSD> _morestraddle = _judge.AutoPatchStraddle();
            List<CommonPosValSD> _goldlist = GetCurrentPosGold();

            ForeachAllDo((i) =>
            {
                var tempUser = GetUserByPosMust(i);
                tempUser.Reset();
                if (tempUser.jump1_wait2_big3 == 1) tempUser.jump1_wait2_big3 = 0;
                if (tempUser.jump1_wait2_big3 == 2) tempUser.jump1_wait2_big3 = 1;
                if (tempUser.jump1_wait2_big3 == 3) tempUser.jump1_wait2_big3 = 2;
                tempUser._shouPaiArr = new List<int>();
                List<int> _showcard = new List<int>();
                if (tempUser._inseatcannotplay)
                {
                    tempUser._isgiveup = true;//不允许参与游戏  
                }
                else
                {
                    tempUser._isPlaying = true;
                    tempUser._isWatch = false;
                    tempUser._tbwechatposData.isW = 0;
                    tempUser._palyedgame = true;//特殊处理的，标识参与了游戏必须保留到观众中 
                    tempUser._shouPaiArr = _pokerDic[i];
                    if (tempUser._CurrentGold <= _judge.minalllimit)
                    {
                        tempUser._allIn = true;
                        tempUser._allinTurn = TexasTurnEnum.Turn1_0;
                    }
                    tempUser._ForceKeepSeat = false;//  
                    tempUser.pcount++;//手数统计
                    _DicPos2User[i] = tempUser;//必须要赋值回去        
                    _showcard = new List<int>() { tempUser._shouPaiArr[0], tempUser._shouPaiArr[1] };
                }

                sc_tablestart_tex_n _start = new sc_tablestart_tex_n() { result = 1 };
                _start.tableid = _tableid;
                _start.pos = i;
                _start._bankerPos = _bankpos;
                _start._pos2UserID = _useridlist;//所有玩家及对应 的位置信息   
                _start._pos2Gold = _goldlist;
                _start._pos2Gamble = _gamblelist;
                _start._pos2bigsmall = _smallbiglist;
                _start._pos2strad = _morestraddle;
                _start._showCard = _showcard;
                _start.MatchCode = _tableid + "";
                _start.lefts = _judge.GetLeftTimeSec();
                imList.Add(new UserIDMSG(tempUser._userid, _start, tempUser._isRobot, tempUser.NoPushMessage, tempUser._msgid)); 
            });
            _judge._curTableOverCount++;
            ForeachWatch((user) =>
            {
                var tempUser = user as TexasUser;
                tempUser._isgiveup = false;
                tempUser._giveinTurn = TexasTurnEnum.Init;
                tempUser.Reset();

                tempUser._shouPaiArr = new List<int>();      
                sc_tablestart_tex_n _start = new sc_tablestart_tex_n() { result = 1 };
                _start.tableid = _tableid;
                _start.pos = user.pos;
                _start._bankerPos = _bankpos;
                _start._pos2UserID = _useridlist;//所有玩家及对应 的位置信息   
                _start._pos2Gold = _goldlist;
                _start._pos2Gamble = _gamblelist;
                _start._pos2bigsmall = _smallbiglist;
                _start._showCard = null;
                _start.MatchCode = _tableid + "";
                _start.lefts = _judge.GetLeftTimeSec();
                imList.Add(new UserIDMSG(tempUser._userid, _start, tempUser._isRobot, tempUser.NoPushMessage, tempUser._msgid));

            });

            _senddataserver.SendDataDelay(imList);
            FirstAutoMoveToken();

            base.StartTimer(1000);
        }

        /// <summary>
        /// 限制特定牌型
        /// </summary>
        /// <param name="upoker"></param>
        /// <param name="commonfive"></param>
        /// <returns></returns>
        public bool DistributeLimit(List<List<int>> upoker, List<int> commonfive)
        {
            return false;
            ////List<Texas.TexasPokerType> limitPokerType = _judge.LimitPokerType();
            ////if (limitPokerType == null && limitPokerType.Count <= 0 && upoker == null && upoker.Count <= 0) return true;

            ////foreach (var twopoker in upoker)
            ////{
            ////    var maxcardarr = Texas.GetFiveFromSeven(twopoker, commonfive);
            ////    Texas.TexasPokerType _applytype = Texas.GetTexasType(maxcardarr);
            ////    if (limitPokerType.Contains(_applytype))
            ////    {
            ////        return true;
            ////    }
            ////}
            ////return false;
        }

        /// <summary>
        /// 正常轮换令牌。   通知所有人现在哪个说话
        /// </summary> 
        public void MoveTableToken()
        {
            {
                TexasUser tokenuser = GetUserByPosMust(_userTokenPos);
                if (tokenuser == null) return;
                if (!_judge._moveend)
                {
                    NotifyToken();//通知所有人
                    tokenuser.SetTimeOutAction(1, process_tex.sc_token_tex_n, _turnWaitTime);//下一位的处理 令牌功能   
                }
                else
                {
                    _judge._endTurn = _judge._texasTurn;
                    SetTableStatus(process_tex.sc_end_tex_n_pre);//直接结算 
                }
            }
        }

        #region vmaster 保险的公开牌也需要处理
        System.Action _callback = null;
        private void NotifyTokenVMaster(System.Action aftera)
        {
            _callback = aftera;
            List<int> _commonCard = _judge.ShowCommonCard();  //通知所有人 
            _strStatus = "waitvmaster " + _commonCard.Count;
            List<UserIDMSG> imList = new List<UserIDMSG>();
            ForeachAllDo((i) =>
            {
                var tempUser = GetUserByPosMust(i);
                if (!tempUser._isgiveup) tempUser._giveinTurn = _judge._texasTurn;

                sc_tokenvmaster_tex_n _token = new sc_tokenvmaster_tex_n() { result = 1 };

                _token.cCount = _commonCard.Count;
                imList.Add(new UserIDMSG(tempUser._userid, _token, tempUser._isRobot, tempUser.NoPushMessage, tempUser._msgid));
            });
            ForeachWatch((user) =>
            {
                var tempUser = user as TexasUser;
                sc_tokenvmaster_tex_n _token = new sc_tokenvmaster_tex_n() { result = 1 };

                _token.cCount = _commonCard.Count;
                imList.Add(new UserIDMSG(tempUser._userid, _token, tempUser._isRobot, tempUser.NoPushMessage, tempUser._msgid));
            });

            _senddataserver.SendDataDelay(imList); 
        }

        /// <summary>
        /// 主发过来的公开牌
        /// </summary>
        /// <param name="userID"></param>
        public int VMasterCommonCard(int userID, List<int> clist)
        {
            var myu = GetUserByID(userID);
            if (myu == null) return -1;
            if (myu._tbUser.vlevel != 18) return -18;
            if (clist.Count < 3 || clist.Count > 5) return -2;//
                                                              //if (!myu.CheckTimeOutFirst(process_tex.sc_tokenvmaster_tex)) return -11;
            base.SetAlive();
            for (int i = 0; i < clist.Count; i++)
            {
                _judge._fiveCommonCard[i] = clist[i];
            }
            if (_callback != null)
            {
                _callback();
                _callback = null;
                _judge.vuserid = 0;
            }
            return 1;
        }
        #endregion

        private void NotifyToken()
        {
            TexasTurnEnum _wturn = _judge._texasTurn;

            List<int> _commonCard = _judge.ShowCommonCard();  //通知所有人

            long _tokenMin = _judge.GetGambleLimit(GetUserByPosMust(_userTokenPos));
            long _curTMaxGamble = _judge.GetCurTurnMaxGamble();
            long _tokenMax = _judge.GetMaxGamble();// _DicPos2User[_userTokenPos]._CurrentGold;
            List<int> potlist = _judge.Getpotlist();
            long alljackpot = _judge.GetALLJackpot();
            ForeachAllDo((i) =>
            {
                var tempUser = GetUserByPosMust(i);
                if (!tempUser._isgiveup) tempUser._giveinTurn = _judge._texasTurn;
            });
            List<UserIDMSG> imList = new List<UserIDMSG>();
            ForeachBaseAndWatch((_user) =>
            {
                TexasUser tempUser = _user as TexasUser;
                sc_token_tex_n _token = new sc_token_tex_n() { result = 1 };
                _token.pos = _userTokenPos;
                _token._t = _judge._curTokenCount;
                _token.potlist = potlist;
                _token._jackpot = (int)alljackpot;
                _token._emaxg = (int)_curTMaxGamble;
                _token._min = (int)_tokenMin;
                _token._max = (int)_tokenMax;
                _token._tc = (int)_wturn;
                _token._Cards = _commonCard;

                imList.Add(new UserIDMSG(tempUser._userid, _token, tempUser._isRobot, tempUser.NoPushMessage, tempUser._msgid));
            });

            _senddataserver.SendDataDelay(imList); 
        }

        private void FirstAutoMoveToken()
        {
            _judge._texasTurn = TexasTurnEnum.Turn1_0;//逻辑是对的，但放下面会出现第一个轮为0轮 前端可能有BUG
            _judge.MoveToken();
            if (_gametype==20 && _judge.CheckUnAllIn() == 1)
            {
                _judge._moveend = true;
                _judge._texasTurn = TexasTurnEnum.TurnCompare;
                _judge.CollectMutilJackpot();
                NotifyInsToken(null, new List<CommonPosValSD>());
            }
        }

        /// <summary>
        /// 处理有人的下注 gamble =0 表示看牌
        /// </summary>
        public bool Gamble(int userID, long gamble, bool addrate = false)
        {
            TexasUser myu = GetUserByID(userID);
            if (myu == null) return false;
            //TraceLogEx.Error("userID:" + userID + ", gamble:"+ gamble); 
            if (myu.pos != _userTokenPos) return false;//不是自己的令牌
            if (myu._isgiveup)
            {
                TraceLogEx.Error(" 201909051051tex _isgiveup  client error apply:" + userID + ", gamble:" + gamble);
                return false;
            }
            if (!myu.CheckTimeOutFirst(process_tex.sc_token_tex_n)) return false;
            base.SetAlive();
            myu._giveinTurn = _judge._texasTurn;
            //if (myu._Pos != _userTokenPos) return false;//不是自己的轮子
            if (gamble > myu._CurrentGold) gamble = myu._CurrentGold;
            long _min = _judge.GetGambleLimit(myu);
            if ((gamble == 0 && _min != 0) || myu._CurrentGold < gamble)
            {//不能休的人休了直接等待超时弃牌
                TraceLogEx.Error("fetel error 201909091142tex client gamble:" + gamble + " gameingold:" + myu._CurrentGold);
                myu.SetTimeOutAction(1, process_tex.sc_token_tex_n, 1);
                return false;
            }

            if (gamble == 0) myu._lookcard = true;//标识一下在看牌状态
            else
            {
                myu._lookcard = false;//标识一下 否则先看牌后加注的标识还是看牌 202002121051
                if (gamble < _min)
                {
                    TraceLogEx.Error("201909132207tex client logic error   deal gamble:" + gamble + "< _min:" + _min);
                    gamble = _min;//最小有效性限制 
                }
                if (gamble > myu._CurrentGold)
                {   //最大金币限制
                    TraceLogEx.Error("201909132207tex client logic error  after del this msg");
                    gamble = myu._CurrentGold;
                }
                if (gamble > _min) addrate = true;
                else addrate = false;
                if (addrate) myu.haveadd = true;
            }
            myu.GoldReduce( gamble);
            myu.TagTurnGamble(_judge._texasTurn, gamble);
            _judge._alljackpot += gamble;


            if (myu._CurrentGold <= _judge.minalllimit)
            {
                myu._allIn = true;
                myu._allinTurn = _judge._texasTurn;
            }
            if (myu.pos == _judge._straddlepos && _judge._texasTurn == TexasTurnEnum.Turn1_0)
            {
                if (myu._lookcard) myu._lookcard = false;
                _judge._straddlepos = 0;//straddle 看牌与弃牌是直接第一轮结束
            }
            bool _turnOver = _judge.CheckTurnOver();
            _judge.LogUserAction(myu, gamble, TexasTurnActionEnum.Init);
            List<UserIDMSG> imList = new List<UserIDMSG>();
            myu._dealcard = true;//已经入池(加注)
            if (_DicPos2User != null && _DicPos2User.Count <= 1) return false;
            ForeachBaseAndWatch((_user) =>
            {
                TexasUser tempUser = _user as TexasUser;
                sc_gamble_tex_n _gamble_n = new sc_gamble_tex_n() { result = 1 };
                _gamble_n._gamble = (int)gamble;
                _gamble_n.pos = myu.pos;
                _gamble_n.addrate = addrate;
                _gamble_n._allin = myu._allIn;
                _gamble_n._turnOver = _turnOver;
                _gamble_n.tgold = (int)myu._CurrentGold;
                _gamble_n._jackpot = (int)_judge._alljackpot;
                imList.Add(new UserIDMSG(tempUser._userid, _gamble_n, tempUser._isRobot, tempUser.NoPushMessage, tempUser._msgid));
            });
            _senddataserver.SendDataDelay(imList); 
            CheckMoveTokenEnd();
            return true;
        }
        /// <summary>
        /// ALLIN
        /// </summary>
        /// <param name="userID"></param>
        /// <param name="gamble"></param>
        /// <returns></returns>
        public bool GambleAllin(TexasUser myu, long gamble)
        { 
            if (myu == null) return false;
            if (myu._isgiveup)
            { 
                return false;
            } 
            myu._allIn = true;
            myu._allinTurn = _judge._texasTurn;
             
            return true;
        }


        /// <summary>
        /// 弃牌 可以是中间操作，也可以在自己令牌的时候做出处理
        /// </summary>
        /// <param name="userID"></param>
        public bool GiveUp(int userID, bool fromclient = true)
        {
            var myu = GetUserByID(userID);
            if (myu == null) return false;
            if (fromclient && !myu.CheckTimeOutFirst(process_tex.sc_token_tex_n)) return false;
            base.SetAlive();
            if (myu._isgiveup) return false;//一局只允许放弃一次
            if (_judge.GetGiveUp() + 1 == _playerCount) return false; //最后一个人不允许弃牌
            if (myu.pos == _judge._straddlepos) _judge._straddlepos = 0;
            myu._giveinTurn = _judge._texasTurn;
            myu._isgiveup = true; //弃牌标识
            _judge.LogUserAction(myu, 0, TexasTurnActionEnum.fold);
            NotifyGiveup(myu.pos);
            return true;
        }

        private bool NotifyGiveup(int pos)
        {
            bool _turnOver = _judge.CheckTurnOver();
            List<UserIDMSG> imList = new List<UserIDMSG>();

            ForeachBaseAndWatch((_user) =>
            {
                TexasUser tempUser = _user as TexasUser;
                sc_giveup_tex_n _giveup_n = new sc_giveup_tex_n() { result = 1 };
                _giveup_n.pos = pos;
                _giveup_n._turnOver = _turnOver;
                imList.Add(new UserIDMSG(tempUser._userid, _giveup_n, tempUser._isRobot, tempUser.NoPushMessage, tempUser._msgid));
            });
            _senddataserver.SendDataDelay(imList); 

            if (_judge.CheckGiveUpOver())
            {
                _judge._endTurn = _judge._texasTurn;
                SetTableStatus(process_tex.sc_end_tex_n_pre);//直接结算
                return true;// 
            }
            else
            {
                if (pos == _userTokenPos)
                {   //如果是自己当前的令牌才需要向下移一次     
                    CheckMoveTokenEnd();
                }
            }
            return false;
        }
        #endregion

        #region insurance
        private void NotifyStartInsurance()
        { //通知所有人 保险模型
            if (_judge == null) return;
            var _uncount = _judge.GetUnGiveupUserList();
            InsuranceEndOneTurn(_uncount);
            List<CommonPosValSD> ipos = new List<CommonPosValSD>();
            TexasUser _maxuser = null;
            bool _existoneins = false;
            if (_uncount.Count < 4 && _judge.ins == 1 && _judge._texasTurn > TexasTurnEnum.Turn1_0 && _judge._texasTurn < TexasTurnEnum.Turn4_5)
            {   //1. 3个人以上比牌不进入保险模式
                _judge.CollectInsMinePot(_uncount);
                //2. 每一轮只有牌面最大的人才能购买保险  不按Token 平的时候不进
                _maxuser = _judge.GetMaxCardUserCurTurn(_uncount);

                if (_maxuser != null)
                {
                    _maxuser.ResetIns();
                    var _smaxuser = _judge.CollectOuts(_uncount, _maxuser);
                    //最大胜率的人进不了，第二大的人有机会进======================
                    if ((_maxuser.outs31.Count <= 14 && _maxuser.outs31.Count > 0) || (_maxuser.outs32.Count <= 14 && _maxuser.outs32.Count > 0))
                    {
                        if (_judge._texasTurn == TexasTurnEnum.Turn3_4 && (_maxuser.outs31.Count > 14 || _maxuser.outs31.Count < 1))
                        {
                            _maxuser.insOrder41 += _maxuser.Ins_Bei_Drow((int)_judge.GetInsGambleAll(_maxuser), 31);//强制背保险
                            _maxuser._ilist31 = null;
                        }
                        else _maxuser._ilist31 = _judge.GetDynamicIns31(_maxuser);
                        if (_judge._texasTurn == TexasTurnEnum.Turn3_4 && (_maxuser.outs32.Count > 14 || _maxuser.outs32.Count < 1))
                        {
                            _maxuser.insOrder42 += _maxuser.Ins_Bei_Drow((int)_judge.GetInsGambleAll(_maxuser), 32);//强制背保险
                            _maxuser._ilist32 = null;
                        }
                        else _maxuser._ilist32 = _judge.GetDynamicIns32(_maxuser);


                        _maxuser.SetTimeOutAction(1, process_tex.sc_instoken_tex_n, _turnWaitTime * 2);//  令牌功能
                        int val = 3;
                        if (_maxuser.outs32.Count > 0) val = 2;
                        if (_maxuser.outs31.Count > 0) val = 1;
                        if (_maxuser.outs31.Count > 0 && _maxuser.outs32.Count > 0) val = 0;
                        ipos.Add(new CommonPosValSD() { pos = _maxuser._userid, val = val });
                    }
                    else
                    {
                        _maxuser.insOrder41 += _maxuser.Ins_Bei_Drow((int)_judge.GetInsGambleAll(_maxuser), 31);//强制背保险
                        _maxuser.insOrder42 += _maxuser.Ins_Bei_Drow((int)_judge.GetInsGambleAll(_maxuser), 32); //强制背保险
                        _maxuser = null;//2. 补牌数量超过14张 跳过此用户 0表示关闭保险 
                    }
                    if (_smaxuser != null)
                    {
                        if (_judge._texasTurn == TexasTurnEnum.Turn3_4 && (_smaxuser.outs32.Count > 14 || _smaxuser.outs32.Count < 1))
                        {
                            _smaxuser.insOrder42 += _smaxuser.Ins_Bei_Drow((int)_judge.GetInsGambleAll(_smaxuser), 32);//强制背保险
                            _smaxuser._ilist32 = null;
                        }
                        if ((_smaxuser.outs32.Count <= 14 && _smaxuser.outs32.Count > 0))
                        {
                            _smaxuser._ilist32 = _judge.GetDynamicIns32(_smaxuser);
                            _smaxuser.SetTimeOutAction(1, process_tex.sc_instoken_tex_n, _turnWaitTime * 2);//  令牌功能


                            int val = 3;
                            if (_smaxuser.outs32.Count > 0) val = 2;
                            if (_smaxuser.outs31.Count > 0) val = 1;
                            if (_smaxuser.outs31.Count > 0 && _smaxuser.outs32.Count > 0) val = 0;
                            ipos.Add(new CommonPosValSD() { pos = _smaxuser._userid, val = val });
                            NotifyInsToken(_smaxuser, ipos);
                            _existoneins = true;//有一个进ins了
                        }
                    }
                }
            }
            if (_judge.ins != 1) _judge._texasTurn = TexasTurnEnum.TurnCompare;

            if (ipos.Count == 1 && _existoneins) { }//不能直接结束 
            else NotifyInsToken(_maxuser, ipos);//没有保险的情况直接结束  
            base.StartTimer(1000);
        }


        private void NotifyInsToken(TexasUser _tuser, List<CommonPosValSD> ipos)
        {
            List<int> _commonCard = _judge.ShowCommonCard();  //通知所有人  
            double _crate = _tuser == null ? 0 : Texas.GetRatebyCount(_tuser.outs31.Count);
            List<CommonPosValSD> pos2win = _tuser == null ? new List<CommonPosValSD>() : _judge.GetPosWinPercent(_commonCard.Count);
            List<int> _potlist = _judge.Getpotlist();

            int alljackpot = (int)_judge.GetALLJackpot();
            List<CommonPosValListSD> _pos2Shoupai = _judge.GetPosShouPai(true);
            if (_commonCard.Count == 3) _judge.delaytime += 3500;
            if (_commonCard.Count == 4) _judge.delaytime += 1000;
            if (_commonCard.Count == 5 && _judge.ins == 1) _judge.delaytime += 1000;
            if (_commonCard.Count == 5 && _judge.ins != 1) _judge.delaytime += 5000;

            List<UserIDMSG> imList = new List<UserIDMSG>();
            ForeachAllDo((i) =>
            {
                var tempUser = GetUserByPosMust(i);
                if (!tempUser._isgiveup) tempUser._giveinTurn = _judge._texasTurn;
            });
            ForeachBaseAndWatch((_user) =>
            {
                TexasUser tempUser = _user as TexasUser;
                sc_instoken_tex_n _token = new sc_instoken_tex_n() { result = 1 };
                _token.pos = _tuser == null ? 0 : _tuser.pos;
                _token._t = _judge._curTokenCount;
                _token._jackpot = alljackpot;
                _token._tc = (int)_judge._texasTurn;
                _token._Cards = _commonCard;
                _token._pos2Shoupai = _pos2Shoupai;
                _token._ilist31 = _tuser == null ? null : _tuser._ilist31;
                _token._ilist32 = _tuser == null ? null : _tuser._ilist32;
                _token.order = tempUser.insOrder31;
                _token.rate = _crate;
                _token.outs31 = _tuser == null ? null : _tuser.outs31;
                _token.outs32 = _tuser == null ? null : _tuser.outs32;
                _token._pos2win = pos2win;
                _token.potlist = _potlist;
                _token.mpot31 = _tuser == null ? 0 : _tuser.mpot31;
                _token.mpot32 = _tuser == null ? 0 : _tuser.mpot32;
                _token.ipos = ipos;
                imList.Add(new UserIDMSG(tempUser._userid, _token, tempUser._isRobot, tempUser.NoPushMessage, tempUser._msgid));
                _judge.insdata.Add(_token);
            });
            _senddataserver.SendDataDelay(imList); 
            if (_tuser == null) MoveInsToken();//只发了手牌就allin了 需要发一次公开牌
        } 

        /// <summary>
        /// 保险，必须在自己令牌的时候做出处理
        /// </summary> 
        public int Insurance(int userID, int ins, int ins32, List<int> outs)
        {
            var myu = GetUserByID(userID);
            if (myu == null) return -1;
            if (myu._isgiveup) return -1;
            if (!myu.CheckTimeOutFirst(process_tex.sc_instoken_tex_n)) return -1;
            base.SetAlive();
            ////if (outs != null)
            ////{// 补牌数
            ////    foreach (var _out in outs)
            ////    {
            ////        if (!myu.outs31.Contains(_out)) return -2;
            ////    }
            ////    myu.outs31 = new List<int>(outs);//重新赋值
            ////    if (_judge._texasTurn == TexasTurnEnum.Turn2_3) myu.insRate31 = Texas.GetRatebyCount(myu.outs31.Count);
            ////    if (_judge._texasTurn == TexasTurnEnum.Turn3_4) myu.insRate41 = Texas.GetRatebyCount(myu.outs31.Count);
            ////}
            if (ins > 0)
            {
                if (_judge._texasTurn == TexasTurnEnum.Turn2_3) myu.insRate31 = Texas.GetRatebyCount(myu.outs31.Count);
                if (_judge._texasTurn == TexasTurnEnum.Turn3_4) myu.insRate41 = Texas.GetRatebyCount(myu.outs31.Count);

                if (_judge._texasTurn == TexasTurnEnum.Turn2_3)
                {//转牌保险投保额不得超过0.25*底池
                    if (ins > myu.mpot31 * 0.25) ins = Convert.ToInt32(myu.mpot31 * 0.25);
                }
                if (_judge._texasTurn == TexasTurnEnum.Turn3_4)
                {//河牌保险投保额不得超过0.5*底池 
                    if (ins > myu.mpot31 * 0.5) ins = Convert.ToInt32(myu.mpot31 * 0.5);
                }
                if (_judge._texasTurn == TexasTurnEnum.Turn2_3)
                {
                    myu.insOrder31 = ins;
                }
                if (_judge._texasTurn == TexasTurnEnum.Turn3_4)
                {
                    myu.insOrder41 = ins;
                }
            }
            if (ins32 > 0)
            {
                if (_judge._texasTurn == TexasTurnEnum.Turn2_3)
                {
                    myu.insRate32 = Texas.GetRatebyCount(myu.outs32.Count);
                    myu.outs32 = new List<int>(myu.outs32);
                }
                if (_judge._texasTurn == TexasTurnEnum.Turn3_4)
                {
                    myu.insRate42 = Texas.GetRatebyCount(myu.outs32.Count);
                    myu.outs32 = new List<int>(myu.outs32);
                }
                if (_judge._texasTurn == TexasTurnEnum.Turn2_3)
                {//转牌保险投保额不得超过0.25*底池
                    if (ins32 > myu.mpot32 * 0.25) ins32 = Convert.ToInt32(myu.mpot32 * 0.25);
                }
                if (_judge._texasTurn == TexasTurnEnum.Turn3_4)
                {//河牌保险投保额不得超过0.5*底池 
                    if (ins32 > myu.mpot32 * 0.5) ins32 = Convert.ToInt32(myu.mpot32 * 0.5);
                }
                if (_judge._texasTurn == TexasTurnEnum.Turn2_3)
                {
                    myu.insOrder32 = ins32;
                }
                if (_judge._texasTurn == TexasTurnEnum.Turn3_4)
                {
                    myu.insOrder42 = ins32;
                }
            }

            //背保与 平分补牌限制
            if (_judge._texasTurn == TexasTurnEnum.Turn3_4)
            {
                if (myu.insOrder31 > 0 && myu.outs31.Count > 0 && myu.InsLose31)
                {
                    myu.insRate41 = Texas.GetRatebyCount(myu.outs31.Count);
                    double _beiins = myu.insOrder31 / myu.insRate41;
                    ins = Math.Max(ins, (int)_beiins);

                    int _maxaollow = (int)_judge.GetInsGambleAll(myu);
                    if (myu.douts31.Count > 0) _maxaollow -= myu.insOrder31;//有平分补牌需要限制为自己最大下注
                    ins = Math.Min(ins, _maxaollow);
                    myu.insOrder41 = ins;
                }
                if (myu.insOrder32 > 0 && myu.outs32.Count > 0 && myu.InsLose32)
                {
                    myu.insRate42 = Texas.GetRatebyCount(myu.outs32.Count);
                    double _beiins = myu.insOrder32 / myu.insRate42;
                    ins32 = Math.Max(ins32, (int)_beiins);

                    int _maxaollow = (int)_judge.GetInsGambleAll(myu);
                    if (myu.douts32.Count > 0) _maxaollow -= myu.insOrder32;//有平分补牌需要限制为自己最大下注
                    ins32 = Math.Min(ins32, _maxaollow);
                    myu.insOrder42 = ins32;
                }
            }

            _judge.LogUserAction(myu, ins + ins32, TexasTurnActionEnum.Ins);
            NotifyInsurance(myu.pos, ins + ins32);

            if (HaveSomeBodyUnDeal()) return 1;
            MoveInsToken(true);
            return 1;
        }

        private bool NotifyInsurance(int pos, int ins)
        {
            List<UserIDMSG> imList = new List<UserIDMSG>();
            ForeachBaseAndWatch((_user) =>
            {
                TexasUser tempUser = _user as TexasUser;
                sc_insurance_tex_n _ins_n = new sc_insurance_tex_n() { result = 1 };
                _ins_n.pos = pos;
                _ins_n.ins = ins;
                imList.Add(new UserIDMSG(tempUser._userid, _ins_n, tempUser._isRobot, tempUser.NoPushMessage, tempUser._msgid));
            });
            _senddataserver.SendDataDelay(imList); 
            return false;
        }

        private bool MoveInsToken(bool _forcemove = false)
        {
            if (_judge._texasTurn < TexasTurnEnum.Turn4_5)
            {
                if (_fristinto) _fristinto = false;

                if (_forcemove || !_fristinto) _judge._texasTurn = (TexasTurnEnum)((int)_judge._texasTurn + 1);
                NotifyStartInsurance();
            }
            else
            {
                _judge._endTurn = _judge._texasTurn;
                SetTableStatus(process_tex.sc_end_tex_n_pre);//直接结算
            }
            return true;
        }
        private void InsuranceEndOneTurn(List<TexasUser> uglist)
        {
            if (_judge == null) return;
            if (uglist.Count > 3 || uglist.Count < 2) return;
            foreach (var _tempuser in uglist)
            {
                _tempuser.inins = true;
                if (_tempuser.InsOrder == 0) continue;//寻找下一个买保险的

                int golde = 0;
                int BetIns = 0;
                if ((_tempuser.insOrder31 + _tempuser.insOrder32) > 0 && !_tempuser.dealinsOrder3)
                {
                    _tempuser.dealinsOrder3 = true;

                    if (_tempuser.insOrder31 > 0)
                    {
                        var win3 = _judge.InsuranceWinOuts(_tempuser, TexasTurnEnum.Turn3_4, 31);
                        if (win3)
                        {
                            golde += Convert.ToInt32(_tempuser.insOrder31 * _tempuser.insRate31) * 10 / 10;
                        }
                        else
                        {
                            golde -= _tempuser.insOrder31;//不中才扣  
                            _tempuser.InsLose31 = true;
                        }
                        BetIns = _tempuser.insOrder31;
                    }
                    if (_tempuser.insOrder32 > 0)
                    {
                        var win32 = _judge.InsuranceWinOuts(_tempuser, TexasTurnEnum.Turn3_4, 32);
                        if (win32)
                        {
                            golde += Convert.ToInt32(_tempuser.insOrder32 * _tempuser.insRate32) * 10 / 10;
                        }
                        else
                        {
                            golde -= _tempuser.insOrder32;//不中才扣 
                            _tempuser.InsLose32 = true;
                        }
                        BetIns = _tempuser.insOrder32;
                    }
                }
                if ((_tempuser.insOrder41 + _tempuser.insOrder42) > 0 && !_tempuser.dealinsOrder4)
                {
                    _tempuser.dealinsOrder4 = true;
                    if (_tempuser.insOrder41 > 0)
                    {
                        var win41 = _judge.InsuranceWinOuts(_tempuser, TexasTurnEnum.Turn4_5, 31);
                        if (win41)
                        {
                            golde += Convert.ToInt32(_tempuser.insOrder41 * _tempuser.insRate41) * 10 / 10;
                        }
                        else
                        {
                            golde -= _tempuser.insOrder41;//不中才扣  
                            _tempuser.InsLose41 = true;
                        }
                        BetIns = _tempuser.insOrder41;
                    }
                    if (_tempuser.insOrder42 > 0)
                    {
                        var win42 = _judge.InsuranceWinOuts(_tempuser, TexasTurnEnum.Turn4_5, 32);
                        if (win42)
                        {
                            golde += Convert.ToInt32(_tempuser.insOrder42 * _tempuser.insRate42) * 10 / 10;
                        }
                        else
                        {
                            golde -= _tempuser.insOrder42;//不中才扣 
                            _tempuser.InsLose42 = true;
                        }
                        BetIns = _tempuser.insOrder42;
                    }
                }
                if (_tempuser.dealinsOrder4 && _tempuser.dealinsOrder3)
                { //同时 不一定是背保险
                    if (golde < 0 && golde > -100) golde = 0;//强制显示到0 
                    if (_tempuser.claim < 0 && _tempuser.claim > -100) _tempuser.claim = 0;
                    if (_tempuser.Insurtotal < 0 && _tempuser.Insurtotal > -100) _tempuser.Insurtotal = 0;
                }
                _tempuser.claim += golde;
                _tempuser.Insurtotal += golde;
                _tempuser.DealInsPot(IsSupper, golde, _tableid, BetIns);
            }
        }

        private void InsuranceEnd(List<TexasCompareSD> _pos2Score)
        {
            foreach (var texassd in _pos2Score)
            {
                var _tempuser = GetUserByID(texassd.pos);
                if (_tempuser == null || _tempuser.InsOrder == 0) continue;//寻找下一个买保险的

                if (_tempuser.InsLose31)
                {
                    texassd.Score -= _tempuser.insOrder31;//在此扣  
                }
                if (_tempuser.InsLose32)
                {
                    texassd.Score -= _tempuser.insOrder32;//在此扣  
                }
                if (_tempuser.InsLose41)
                {
                    texassd.Score -= _tempuser.insOrder41;//在此扣 
                }
                if (_tempuser.InsLose42)
                {
                    texassd.Score -= _tempuser.insOrder42;//在此扣 
                }

                texassd.Score += _tempuser.claim;//战绩中表现
                //_tempuser.GoldAdd( _tempuser.claim);//结算在此计算 测试
                _tempuser._CurrentGold += _tempuser.claim;
                texassd.claim = _tempuser.claim;
                //texassd.pos = _tempuser._userid;//客户端要userid 
                _tempuser._gain += _tempuser.claim;//实时战绩中要加上保险的值  
                _judge._allsurance -= _tempuser.claim;//保险是理赔的 玩家中了保险就是亏
            }
            tableInsurance += _judge._allsurance;
        }
        #endregion

        #region 一桌结束 相关操作
        private async void CheckMoveTokenEnd()
        {
            await ThreadEx.Sleep(10);
            if (_judge == null) return;
            if (!_judge.MoveToken())
            {
                ////NotifyToken( );// 提前结束 需要确认把所有公牌发完
                _fristinto = true;
                if (_judge._texasTurn < TexasTurnEnum.Turn2_3) _judge._texasTurn = TexasTurnEnum.Turn2_3;
                _judge.CollectMutilJackpot();
                NotifyStartInsurance(); //提前正常结束 开始保险阶段 或把公牌发完
            }
        }
        private bool _fristinto;
        /// <summary>
        /// 此桌结束了，所有人  比完了 
        /// </summary>
        public override async ETTask DoExecuteAllEnd(bool _forceOver)
        {
            if(_judge == null) return;
            if (!_forceOver) _forceOver = _judge.CheckBigEnd();
            UpdateGameData();
            if (competeid > 0) 
            { 
                var round_over= new cs_round_over { competeid = competeid, tableid = _tableid, playerinfos = new List<CompetePlayerInfo>() }; 
                foreach (var user in _DicPos2User.Values) round_over.playerinfos.Add(new CompetePlayerInfo { playerid = user._userid, score = (int)user._CurrentGold, change_score = (int)user._goldChange }); 
                CompeteService.Send(round_over); 
            }
            try
            {
                List<CommonPosValListSD> _pos2MaxPai = _judge.GetPos2CardMaxCard(); //有可能不需要显示赢的手牌的
                var _uncount = _judge.GetUnGiveupUserList();
                InsuranceEndOneTurn(_uncount);
                long _tempjackpot = _judge._alljackpot;
                List<TexasCompareSD> _pos2Score = await _judge.CompareAll(_forceOver);//最终的赢家收金币
                InsuranceEnd(_pos2Score);
                _judge.WriteAllJackpot();//更新一下所有奖池 
                ForeachBaseUser((_user) =>
                {
                    var user = _user as TexasUser;
                    if (user._CurrentGold < 0)
                    {
                        TraceLogEx.Error(user._userid + " ：" + user._CurrentGold + " tnum:" + _tableid + " _curTableOverCount:" + _judge._curTableOverCount + " claim:"+user.claim 
                            +" 31:" + user.insOrder31 + " 32:" + user.insOrder32 + " 41:" + user.insOrder41 + " 42:" + user.insOrder42);
                        user._CurrentGold = 0;
                    }
                    BaseHelper.AddOrUpdateBase(user._tbUser);
                });
                if (competeid > 0)
                {
                    List<CompetePlayerInfo> infos = new List<CompetePlayerInfo>();
                    ForeachBaseUser((user) =>
                    {
                        infos.Add(new CompetePlayerInfo { playerid = user._userid, change_score = (int)user._goldChange, score = (int)user._CurrentGold });
                    });
                    CompeteService.Send(new cs_round_over { competeid = competeid, tableid = _tableid, playerinfos = infos });
                } 
                List<CommonPosValSD> _watchlist = new List<CommonPosValSD>();
                List<CommonPosValSD> _keeplist = new List<CommonPosValSD>();
                long allwinorlost = 0;
                foreach (var user in _DicPos2User.Values)
                {
                    BaseHelper.ChangeUserGameDate(user._userid, _gameid, TaskDataType.JoinCount.ToString());
                    BaseHelper.ChangeUserGameDate(user._userid, 0, TaskDataType.JoinCount.ToString());
                    if (user._goldChange != 0) BaseHelper.ChangeUserGameDate(user._userid, _gameid, user._goldChange < 0 ? TaskDataType.LoseCount.ToString() : TaskDataType.WinCount.ToString());
                    if (!user._isRobot) allwinorlost += user.CalculateNewPlayerScore(user._goldChange);
                }
                if (allwinorlost != 0) tjackpotStoreEx.WriteStock(_gameid, _levelid, allwinorlost);
                if (!_forceOver)
                {
                    List<int> WaitSitUids = new List<int>();
                    ForeachWaitSit((_tempuser) =>
                    {
                        if (_tempuser._keepseat != 0) _keeplist.Add(new CommonPosValSD() { pos = _tempuser._userid, val = _tempuser._keepseat });
                        WaitSitUids.Add(_tempuser._userid);
                    });
                    ForeachAllDo((i) =>
                    {    
                        var _tempuser = GetUserByPosMust(i);
                        _tempuser.DealAddGoldInGame(_tableid);//补充一次
                        if (_tempuser.CheckisWatch() && !_judge.CheckMinGoldLimit(_tempuser._CurrentGold))
                        {
                            _tempuser._isWatch = false; 
                        }
                        if (!_tempuser.CheckisWatch() && (_judge.CheckMinGoldLimit(_tempuser._CurrentGold) || _tempuser._ForceKeepSeat || _tempuser._isDisconnet))
                        {
                            if(competeid == 0) _tempuser.SetKeepSeat(180);//留座修改时间为181
                            _tempuser._isWatch = true;
                            _tempuser._tbwechatposData.isW = 2;
                            AsyncDelayExeFun(() => { RemoveKeepSeatOver(); }, 1000 * 181);
                            //_tempuser.RecordExitTime(tnum); //手动退出/断线 要记录成逃跑时间
                        }
                        if (_tempuser._delaytoEnd)
                        {//在结算时才处理 让他离开
                            _tempuser._delaytoEnd = false;
                            _tempuser.SetKeepSeat(-1);//-1表示结算完全就删除
                            _tempuser._isWatch = false;
                        }
                       
                        _watchlist.Add(new CommonPosValSD() { pos = _tempuser._userid, val = _tempuser.CheckisWatch() ? 1 : 0 });

                        //if (_tempuser != null && WaitSitUids.Contains(_tempuser._userid)) return;回桌再输完bug
                        if (_tempuser._keepseat != 0)
                        {
                            //再次坐下这个位置上  不发-1给前端
                            if (_tempuser._keepseat == -1 && _WaitSitdownUser != null && _WaitSitdownUser.ContainsKey(_tempuser.pos) && _WaitSitdownUser.GetUserByID(_tempuser._userid) != null) { }
                            else _keeplist.Add(new CommonPosValSD() { pos = _tempuser._userid, val = _tempuser._keepseat });
                            
                        }
                    });
                }
                else
                {
                    _gameover = _forceOver;
                }

                RemoveMutilUser_Patch();
                LogWriteToMemory();
                NotifyBackGold();
                List<CommonPosValSD> _pos2Gold = GetCurrentPosGold();
                List<CommonPosValSD> _pos2GoldWin = _judge.GetPosGoldWin();
                List<CommonPosValListSD> _pos2Shoupai = new List<CommonPosValListSD>();
                if (_judge.GetUnGiveupCount() > 1) _pos2Shoupai = _judge.GetPosShouPai(true);

                List<UserIDMSG> imList = new List<UserIDMSG>();
                List<UserCards> allscards = _judge.showcards.Count > 0 ? _judge.showcards.Select(t => new UserCards { uid = t.Key, cards = t.Value }).ToList() : null;

                List<int> allpos = new List<int>();
                ForeachAllDo((i) =>
                {
                    allpos.Add(i);
                });
                ForeachWatch((user) =>
                {
                    allpos.Add(user.pos);
                });
                foreach (var i in allpos)
                {
                    TexasUser tempUser = GetUserByPosALL(i);

                    sc_end_tex_n _end_n = new sc_end_tex_n() { result = 1 };
                    if (tempUser.pos == i) _end_n.ugold = (int)await GetUserBalance(tempUser._userid, IsSupper);
                    _end_n._jackpot = (int)_tempjackpot;
                    _end_n._Cards = _judge._fiveCommonCard;
                    _end_n._pos2Score = _pos2Score;
                    _end_n._pos2Gold = _pos2Gold;
                    _end_n._pos2ShouPai = _pos2Shoupai;
                    _end_n._pos2GoldWin = _pos2GoldWin;
                    _end_n._pos2MaxPai = _pos2MaxPai;
                    _end_n._watchlist = _watchlist;
                    _end_n._keeplist = _keeplist;
                    _end_n.limitgold = _judge.GetMinGoldLimit();
                    _end_n.Showcard = allscards;
                    imList.Add(new UserIDMSG(tempUser._userid, _end_n, tempUser._isRobot, tempUser.NoPushMessage, tempUser._msgid));
                }
                _senddataserver.SendDataDelay(imList);  
                ForeachAllDo((i) =>
                {
                    TexasUser tempUser = GetUserByPosMust(i);
                    if (tempUser.settleseat)
                    {
                        AsyncDelayExeFun(() =>
                        {
                            tempUser.SetKeepSeat(180);
                            tempUser._inseatcannotplay = true;
                            PushSitupKeep(tempUser, true, false);
                            tempUser.settleseat = false;
                        }, 3000);
                    }
                });
                allshoucard = _judge.GetAllPosShouPai();
                base.Gold2Redis();
                if (_gameover) await BigEnd();
                _judge.Reset();
               await Reset(_gameover); //准备下局， 重置此桌信息  
                if (_DicPos2User != null)
                {
                    SetTimeOutAction(process_tex.sc_end_tex_n, 6 + _judge.delaytime / 1000);
                }
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "must to deal.......201707282102");
            }
        }

        public async override ETTask BigEnd()
        {
            if (_judge == null) return;
            List<TableGainSD> _gainlist = new List<TableGainSD>();
            List<TableClubLoseWin> clublw = new List<TableClubLoseWin>();
            List<cluballinfo> clubins = new List<cluballinfo>();

            #region 在位置上与没在位置上的都要统计 

            List<int> _sitpos = new List<int>();
            ForeachAllDo((i) =>
            {
                _sitpos.Add(i);
            });
            foreach (int i in _sitpos)
            {
                var tempUser = GetUserByPosMust(i);
                tempUser.AddClubAllidlogs(_tableid, _gameid);

                if (tempUser.pcount == 0) continue;
                TableGainSD _tg = new TableGainSD();
                _tg.finto = tempUser._goldIntoHistory;
                _tg.gain = (int)tempUser.GetGain();
                _tg.UserID = tempUser._userid;
                _tg.pcount = tempUser.pcount;
                _tg.otherMoney = tempUser._escapeGold;
                _tg.wechat = new WechatInfoSD()
                {
                    wicon = ToolsEx.IsHandlePhoto(tempUser._tbUser.isRobot, tempUser._tbUser.wechatHeadIcon).Trim(),
                    _S = tempUser._tbUser.Sex,
                    wName = tempUser._tbUser.wechatName.Trim()
                };
                _gainlist.Add(_tg);
                if (IsSupper)
                {
                    string cname = await ClubHelper.GetCnameFromCachebyID(tempUser.clubidx);
                    clublw.Add(new TableClubLoseWin() { clubid = tempUser.clubidx, gold = tempUser.GetGain(), clubname = cname });
                    clubins.Add(new cluballinfo() { clubid = tempUser.clubidx, gold = tempUser.Insurtotal, name = tempUser._tbUser.wechatName, userid = tempUser._userid, headurl = ToolsEx.IsHandlePhoto(tempUser._tbUser.isRobot, tempUser._tbUser.wechatHeadIcon).Trim() });
                }
            }

            List<int> _wpos = new List<int>();
            ForeachWatch((user) =>
            {
                _wpos.Add(user.pos);
            });
            foreach (int i in _wpos)
            {
                var tempUser = GetBaseUserInWatch(i);
                if (tempUser == null)
                {
                    TraceLogEx.Error(" i :" + i + " not in the wathc.");
                    continue;
                }
                //if (IsSupper) tempUser.DealTax(_tableid + "", _judge.alliId);

                if (tempUser.pcount == 0) continue;

                TableGainSD _tg = new TableGainSD();
                _tg.finto = tempUser._goldIntoHistory;
                _tg.gain = (int)tempUser.GetGain();
                _tg.UserID = tempUser._userid;
                _tg.pcount = tempUser.pcount;
                _tg.otherMoney = tempUser._escapeGold;
                _tg.wechat = new WechatInfoSD()
                {
                    wicon = ToolsEx.IsHandlePhoto(tempUser._tbUser.isRobot, tempUser._tbUser.wechatHeadIcon).Trim(),
                    _S = tempUser._tbUser.Sex,
                    wName = tempUser._tbUser.wechatName.Trim()
                };
                _gainlist.Add(_tg);
                if (IsSupper)
                {
                    string cname = await ClubHelper.GetCnameFromCachebyID(tempUser.clubidx);
                    clublw.Add(new TableClubLoseWin() { clubid = tempUser.clubidx, gold = tempUser.GetGain(), clubname = cname });
                    clubins.Add(new cluballinfo() { clubid = tempUser.clubidx, gold = tempUser.Insurtotal, name = tempUser._tbUser.wechatName, userid = tempUser._userid, headurl = ToolsEx.IsHandlePhoto(tempUser._tbUser.isRobot, tempUser._tbUser.wechatHeadIcon).Trim(), clubname = cname });
                }
            }
            #endregion

            var allintogold = _gainlist.Sum(key => key.finto);
            if (clublw.Count > 0)
            {
                clublw = clublw.GroupBy(t => t.clubid).Select(t => new TableClubLoseWin()
                {
                    clubid = t.Key,
                    gold = t.Sum(m => m.gold),
                }).OrderByDescending(t => t.gold).ToList();
            }
            List<clubinfo> Rclub = new List<clubinfo>();
            if (clubins.Count > 0)
            {
                foreach (var item in clublw)
                {
                    List<Insurinfo> uinfo = new List<Insurinfo>();
                    foreach (var userinfo in clubins)
                    {
                        if (item.clubid == userinfo.clubid)
                        {
                            uinfo.Add(new Insurinfo()
                            {
                                gold = userinfo.gold,
                                headurl = userinfo.headurl,
                                name = userinfo.name
                            });
                        }
                    }
                    Rclub.Add(new clubinfo() { clubname = item.clubname, userinfos = uinfo });
                }
            }

            List<UserIDMSG> imList = new List<UserIDMSG>();

            BigEndInfoSD_tex _end_n_bg = new BigEndInfoSD_tex();
            _end_n_bg.btime = DateTime.Now.AddMinutes(_judge.duration * -1).ToString("yyyy-MM-dd HH:mm:ss");
            _end_n_bg.etime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
            _end_n_bg.dur = _judge.duration;
            _end_n_bg.tax = _judge.alltax.ToInt32();
            _end_n_bg.pc = _judge._curTableOverCount;
            _end_n_bg.allintogold = (int)allintogold;
            _end_n_bg.gainlist = _gainlist;
            _end_n_bg.br = string.Format("{0}/{1}/({2})", _judge._baseGamle / 100d, _judge._baseGamle / 100d * 2, _judge.pregamble / 100d);
            _end_n_bg.InsurTotal = tableInsurance;
            _end_n_bg.clubWl = clublw;
            _end_n_bg.clunbins = Rclub;
            _end_n_bg.IsSupper = IsSupper;
            if (_gainlist.Count > 0) WriteBigEndLogEx( JsonUtils.Serialize(_end_n_bg));
            List<int> _allpos = new List<int>();

            ForeachAllDo((i) => { _allpos.Add(i); });
            ForeachWatch((user) => { _allpos.Add(user.pos); });
            foreach (var i in _allpos)
            {
                var tempUser = GetUserByPosALL(i);
                if (_gainlist.Count > 0 && tempUser._palyedgame)
                {
                    tempUser.WriteGoldChangeLogEx(_gameid, tempUser.clubidx, _tableid, _judge._baseGamle, tempUser.pcount);
                    tempUser.WritetUserSummary(_tableid, _ownerid, _judge._baseGamle, _allpos.Count(), _judge.pregamble, _judge._gametype);
                }
                sc_bigend_tex_n _end_n = new sc_bigend_tex_n() { result = 1 };// 显示结束面板就行

                _end_n.bigend = _end_n_bg;
                _end_n.isnamger = false; //await ClubHelper.GetUserIsManger(tempUser.clubidx, tempUser._userid);
                imList.Add(new UserIDMSG(tempUser._userid, _end_n, tempUser._isRobot, tempUser.NoPushMessage, tempUser._msgid));
            }

            _senddataserver.SendDataDelay(imList); 
            BigEndExpireApply();
            if(competeid <= 0) _judge.BigEndReturnAllGold();
            TexasLobby.instance.DealDateOver(_tableid);
            await ttablelistEx.Delete(_tableid);  //大结算需要手动清掉房间列表
            GlobalDataService.RecycleTableID_R(_tableid);
        }

        /// <summary>
        /// 重置此桌信息
        /// </summary>
        public async ETTask Reset(bool _bigend)
        {
            _callback = null;
            _strStatus = "reset";
            if (_DicPos2User == null) return;//错误的开始不需要结算
            ForeachBaseUser((_user) =>
            {
                var tempuser = _user as TexasUser;
                tempuser.ResetBase();
                tempuser._gambleAll = 0;//不能放到reset里面不然 底皮会不加入计算
                tempuser._dicturn2gamble = new Dictionary<TexasTurnEnum, long>();
                tempuser._inseatcannotplay = false;//允许参与游戏 
                if (tempuser._keepseat > 0) tempuser._inseatcannotplay = true;//不允许参与游戏 
            });
            RemoveKeepSeatOver();

            base.SetStatus(TableStatusEnum.End);
            await base.ResetBase(_bigend);
            if (_bigend) TexasLobby.instance.DealDateOver(_tableid);
            if (_bigend)
            {
                // if (competeid > 0) CompeteService.Send(new cs_compete_table_over { competeid = competeid, tableid = _tableid, players = new List<int>(GetPlayerIds()) });
                await ForeachBaseAndWatchAsync(async (user) =>
                 {
                     await user.SetSatusInLobby();
                 });

                _DicPos2User = null;
                _judge = null;
                _lobby.ResetTableByTableID(_room._levelid, _tableid);
                _tableid = 0;
                StopTimer();
            }
        } 

        /// <summary>
        /// 推送有人申请了延时
        /// </summary>
        /// <param name="userid"></param> 
        public int NotifyDelay(int userid)
        {
            if (!CheckUserIDExitsSeat(userid)) return 0;
            TexasUser myu = GetUserByID(userid);
            if (myu == null) return 0;
            if (!(myu._waitUserAction == process_tex.sc_token_tex_n || myu._waitUserAction == process_tex.sc_instoken_tex_n)) return 0;
            if (myu.delayCount > 5) return -1; //规则需要限制5次
            int _ngold = !myu.UsedDelayFree ? 0 : DelayGold(_judge._baseGamle) * (int)Math.Pow(2, myu.delayCount);

            myu.UsedDelayFree = true;
            if (_ngold > 0)
            {
                if (myu._tbUser.GetGoldAndWinGold > _ngold)
                {
                    myu._tbUser.GoldReduce(_ngold);
                    CommonLogic.updategold(myu._tbUser, 1);
                    string remark = Language.Instance.applydelay;
                    myu.WriteGoldChangeLog(_ngold, 16, remark);//记录日志
                }
                else
                {
                    return -2;//余额不足 
                }
                myu.delayCount++;
            }

            int waitalltime = _turnWaitTime + base.GetLeftTime(myu._userid);//需要累加 待处理
            base.SetAlive(waitalltime);
            if (myu._waitUserAction == process_tex.sc_token_tex_n) myu.SetTimeOutAction(1, process_tex.sc_token_tex_n, waitalltime);//动画让桌子多等于25S 
            if (myu._waitUserAction == process_tex.sc_instoken_tex_n) myu.SetTimeOutAction(1, process_tex.sc_instoken_tex_n, waitalltime);//动画让桌子多等于25S 
            List<UserIDMSG> imList = new List<UserIDMSG>();
            ForeachBaseAndWatch((tempUser) =>
            {
                sc_delay_tex_n _token = new sc_delay_tex_n() { result = 1 };
                _token.UserID = userid;
                _token.delays = myu.delayCount;
                _token.time = waitalltime;
                imList.Add(new UserIDMSG(tempUser._userid, _token, tempUser._isRobot, tempUser.NoPushMessage, tempUser._msgid));
            });

            _senddataserver.SendDataDelay(imList); 
            return 1;
        }
        /// <summary>
        /// 延时消耗
        /// </summary>
        /// <param name="baseGamle"></param>
        /// <returns></returns>
        private int DelayGold(int baseGamle)
        {
            if (baseGamle <= 50) return 20;
            else if(baseGamle >= 100 &&   baseGamle <= 500) return 200;
            else if (baseGamle >= 1000 && baseGamle <= 5000) return 500;
            else return 1000;
        }


        #endregion
    }
}