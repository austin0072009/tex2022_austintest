using ETModel.Framework.Common.Serialization;
using ETModel.Script.Model;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ETModel.Script.CsScript.Action
{
    /// <summary>
    /// 玩家之不能相互确认的 让裁判来 确定
    /// 1.每两个人进行比牌 
    /// </summary>
    public class TexasJudge
    {
        public TexasJudge()
        {
            _curalltax = 0;
            alltax = 0;
        }

        public int _minPlayer = 2;
        public int _maxPlayer = 9;
        /// <summary>
        ///  1.正常模式  10.短牌  20.AOF  30.比赛模式
        /// </summary>
        public int _gametype;
        /// <summary>
        /// 1开启
        /// </summary>
        public int ins;
        // 1.有限下注 指每轮下注过程中，下注额有一定限制，你如果要加注，加注额最多只能是桌面玩家下注额的总数。
        // 2.无限下注 是指每轮下注过程中，下注额没有任何限制，但你如果要加注，加注额最少要是你前面玩家下注额的两倍。比如你前面玩家下注$10，你可以加注到$50，你后面玩家若要加注，则最少要下注$100，当然他也可以加注到$200 或$500。所以无限下注德州扑克是一种风险更大但更富挑战性刺激性的游戏。
        public int _baseGamle; 
        /// <summary>
        /// 房主设置的密码
        /// </summary>
        public string password;
        /// <summary>
        /// 一轮开始
        /// </summary>
        public bool oneturnbegin;
        /// <summary>
        /// 当前限制的局数 
        /// </summary>
        private int _maxTableOverCount;
        /// <summary>
        /// 当前 的局数。
        /// </summary>
        public int _curTableOverCount;
        /// <summary>
        /// 规则需要有最大令牌处理数      总回合数  === 最大回合数后，就直接比牌，   暂时行于人数*20
        /// </summary>
        public int _maxTokenCount;
        /// <summary>
        /// 当前处理令牌数
        /// </summary>
        public int _curTokenCount;
        public int _gameCoin2Room1;
        /// <summary>
        /// 奖池
        /// </summary>
        public long _alljackpot;

        public List<TexasJackpot> _texpotlist;
        /// <summary>
        /// 每轮的奖池
        /// </summary>
        public Dictionary<int, long> _dicTurn2Jackpot;
        /// <summary>
        /// 当前轮 下注最多的人的下注
        /// </summary>
        public int _curGambleMax;
        public List<int> _fiveCommonCard = new List<int>();
        /// <summary>
        /// 1234 - 0345
        /// </summary>
        public TexasTurnEnum _texasTurn;
        public TexasTurnEnum _endTurn;
        /// <summary>
        /// 上一次的处于的轮数状态
        /// </summary>
        private TexasTurnEnum _lastTurn;

        public TexasTurnEnum _lastover;
        private TexasTable _myTable;

        /// <summary>
        /// 整体时间内累积的for bigwin奖池税收
        /// </summary>
        public double alltax;

        /// <summary>
        /// 一手内的for bigwin奖池税收
        /// </summary>
        public double _curalltax;
        /// <summary>
        /// 敲的判断标准 规则不允许出现 小数
        /// </summary>
        public int minalllimit = 99;

        public bool _dealCompareAll; 

        /// <summary>
        ///是否结算平分了
        /// </summary>
        public bool IsAverage;
        /// <summary>
        /// 获取最大的  局数或者庄数
        /// </summary>
        public int GetTableorBankerMaxCount
        {
            get
            {
                return _maxTableOverCount;
            }
        }
        //计时房间类
        public DateTime _endtime;
        public DateTime _idletime;//已开始的后桌的的空闲时间 只有一个人在位置上开始计时
        /// <summary>
        /// 30 60 120 分钟
        /// </summary>
        public int duration;
        /// <summary>
        /// 最小大盲100倍 实际带入需要再*带入倍数 50 100  200 500 
        /// </summary> 
        public int into;
        /// <summary>
        /// 最小带入   比例  1：1
        /// </summary>
        public double intorate_min;
        public double intorate_max;
        /// <summary>
        /// 前注 底注的 2的N次方   1 2 4 8 16 20 40
        /// </summary> 
        public int pregamble;

        public int gps;
        public int ip;
        /// <summary>
        /// 当局的保险池
        /// </summary>
        public int _allsurance;

        /// <summary>
        /// 多一个行动
        /// </summary>
        public int _straddlepos = 0;

        /// <summary>
        /// 延时看牌
        /// </summary>
        public int delay;
        /// <summary>
        /// 强制秀牌
        /// </summary>
        public int showCard;
        /// <summary>
        /// 可能为0
        /// </summary>
        public int clubidx;

        /// <summary>
        /// 联盟id   共享房间才有值
        /// </summary>
        public int alliId;

        /// <summary>
        /// 限制入池率
        /// </summary>
        public int Inflow;

        /// <summary>
        /// 几人房
        /// </summary>
        public int manNum;

        /// <summary>
        /// 控制 带入申请  true 表示 不能直接入坐需要房主同意
        /// </summary>
        public bool ctrapply;

        /// <summary>
        /// 是否限制ios
        /// </summary>
        public bool ios;

        /// <summary>
        /// 单局游戏id  每局重置
        /// </summary>
        public string OneId;

        /// <summary>
        /// 这桌秀牌的list
        /// </summary>
        public ConcurrentDictionary<int, List<Cards>> showcards;

        /// <summary>
        /// 临时退出需要保存单局玩家战绩日志
        /// </summary>
        public ConcurrentBag<TexUserInfoSD> userinfolog;

        /// <summary>
        /// 当局最大点击次数
        /// </summary>
        public int clicknum;
        /// <summary>
        /// 开局延时时间
        /// </summary>
        public int delaytime;

        /// <summary>
        /// 等待开牌的userid
        /// </summary>
        public int vuserid;

        /// <summary>
        /// AOF模式
        /// 最小保留记分倍数
        /// 最小带入的1至10倍
        /// </summary>
        public int AOF_Times;
        /// <summary>
        /// 保险数据
        /// </summary>
        public ConcurrentBag<sc_instoken_tex_n> insdata;

        public List<CommonPosValSD> _sbslist;//缓存用 给前端用的补丁
        public TexasJudge(TexasTable myTable)
        {
            _minPlayer = 2;
            _maxPlayer = 9;
            _myTable = myTable; 
        }

        public void InitiArgs(cs_createtable_tex _data)
        {
            _gametype = _data.gametype;
            ins = _data.ins;
            ////_roomcard = _data.roomcard;
            _minPlayer = 4;
            _maxPlayer = 9;  //_data.manNum > 9 ? 9 : _data.manNum;
            _maxTableOverCount = _data.maxCount;
            delaytime = 0;
            _baseGamle = _data.baserate;//测试数据   
                                        // _basemango = _data.basemango;//  
            _curTableOverCount = 0;
            _maxTokenCount = _maxPlayer * 4 * 8;//有规则是一轮最多加8次注的情况
            _curTokenCount = 0;
            oneturnbegin = false;
            _texasTurn = TexasTurnEnum.Init;
            _lastTurn = TexasTurnEnum.Init;
            _lastover = TexasTurnEnum.Init;
            duration = _data.Duration;
            //duration = 5;//测试5分钟一局============ 
            into = _data.into;
            if (into == 0) into = 200 * _baseGamle;
            intorate_min = _data.intorate_min;
            if (intorate_min == 0) intorate_min = 20;
            intorate_max = _data.intorate_max;
            if (intorate_max == 0) intorate_max = 200;
            pregamble = _data.pregamble;
            gps = _data.gps;
            ip = _data.ip;
            _endtime = DateTime.MinValue;
            delay = _data.delay;
            showCard = _data.showCard;
            clubidx = _data.clubidx;
            alliId = _data.allianceid;
            Inflow = _data.Inflow;
            manNum = _data.manNum;
            ctrapply = _data.cinto;
            ios = _data.ios;
            OneId = Guid.NewGuid().ToString();
            showcards = new ConcurrentDictionary<int, List<Cards>>();
            userinfolog = new ConcurrentBag<TexUserInfoSD>();
            insdata = new ConcurrentBag<sc_instoken_tex_n>();
            clicknum = 0;
            IsAverage = false;
            AOF_Times = _data.AOF_Times;
            if (!string.IsNullOrEmpty(_data.password))
            {
                if (_data.password.Length == 4) password = _data.password;
            }
            else
                password = "";
        }

        /// <summary>
        /// 只允许房主才能看到密码
        /// </summary>
        /// <param name="userid"></param>
        /// <returns></returns>
        public string GetPassword(int userid)
        {
            return password;
            //if (_myTable._ownerid == userid) return password;
            //else return "";
        }

        public bool CheckPassword(TexasUser user, string pas)
        {
            if (user._palyedgame) return true;//玩过游戏的 或者回桌的 不需要密码验证了
            if (user._CurrentGold > 0) return true;
            if (password == pas) return true;
            return false;
        }

        /// <summary>
        ///  //这一次打牌裁判动作结束
        /// </summary>
        public void Reset()
        { 
            _curalltax = 0;
            _curTokenCount = 0;
            oneturnbegin = false;
            _alljackpot = 0;
            _texasTurn = TexasTurnEnum.Init;
            _lastTurn = TexasTurnEnum.Init;
            _endTurn = TexasTurnEnum.Init;
            //LeftCard = null;
            _allsurance = 0;
            _texpotlist = new List<TexasJackpot>();
            _straddlepos = 0;
            showcards = new ConcurrentDictionary<int, List<Cards>>();
            userinfolog = new ConcurrentBag<TexUserInfoSD>();
            insdata = new ConcurrentBag<sc_instoken_tex_n>();
            clicknum = 0;
            IsAverage = false;
            _sbslist = new List<CommonPosValSD>();
        }


        /// <summary>
        /// 一局开始的初始时间记录 30 60分钟
        /// 标识桌子已开始
        /// </summary>
        public async void StartFirstTimer()
        {
            if (_curTableOverCount > 0) return;
            ttablelist temp = await ttablelistEx.GetTableByNumber(_myTable._gameid, _myTable._tableid);
            temp.tableStatus = 1;
            await ttablelistEx.AddOrUpdate(temp);
            _endtime = DateTime.Now.AddMinutes(duration);
        }
        public int GetLeftTimeSec()
        {
            if (_endtime == DateTime.MinValue)
            {
                return duration * 60;
            } 
            int lefttimesec = (_endtime > DateTime.Now) ? (int)(_endtime - DateTime.Now).TotalSeconds : 0; 
            return lefttimesec;
        }

        public bool CheckBigEnd()
        {
            if (_gametype == 30) { if (_curTableOverCount < _maxTableOverCount) return false; else return true; }
            if (DateTime.Now < _endtime) return false;
            else return true;

        }
        /// <summary>
        /// 庄按顺时针顺庄  Token顺序也是顺时针
        /// </summary>
        /// <returns></returns>
        public int GetTurnBankerPos()
        {
            int _temppos = _myTable._bankpos;
            do
            {
                _temppos--;
                if (_temppos < 1) _temppos = 9;
                if (!_myTable._DicPos2User.ContainsKey(_temppos)) continue;
                var _user = _myTable.GetUserByPosMust(_temppos);
                if (_user.jump1_wait2_big3 == 1) continue;
                if (_user._keepseat != 0) continue;//轮庄需要排除留座的用户
                if (_user._isWatch) continue;//轮庄需要排除观众的用户
                break;
            }
            while (true);

            return _temppos;
        }

        /// <summary>
        ///检测全部跳跳庄
        /// </summary>
        public void CheckAllBanker()
        {
            int palycount = _myTable.GetPlayerCount();
            int needjump = 0;
            int small = 0;
            int strd = 0;
            _myTable.ForeachAllDo((i) =>
            {
                TexasUser tempUser = _myTable.GetUserByPosMust(i);
                if (tempUser.jump1_wait2_big3 == 1) needjump++;
                if (tempUser.jump1_wait2_big3 == 2) small++;
                if (tempUser.jump1_wait2_big3 == 3) strd++;
            });
            if (needjump != 0 && palycount == needjump)
            {//所有人跳
                _myTable.ForeachAllDo((i) =>
                {
                    TexasUser tempUser = _myTable.GetUserByPosMust(i);
                    if (tempUser.jump1_wait2_big3 == 1) tempUser.jump1_wait2_big3 = 0;
                });
            }
            if (small != 0 && palycount <= 1)
            {
                _myTable.ForeachAllDo((i) =>
                {
                    TexasUser tempUser = _myTable.GetUserByPosMust(i);
                    if (tempUser.jump1_wait2_big3 == 2)
                    {
                        tempUser._inseatcannotplay = false;
                        tempUser.jump1_wait2_big3 = 0;
                        tempUser.morestraddle = true;
                    }
                });
            }
            if (strd != 0 && palycount <= 1)
            {
                _myTable.ForeachAllDo((i) =>
                {
                    TexasUser tempUser = _myTable.GetUserByPosMust(i);
                    if (tempUser.jump1_wait2_big3 == 3)
                    {
                        tempUser._inseatcannotplay = false;
                        tempUser.jump1_wait2_big3 = 0;
                        tempUser.morestraddle = false;
                    }
                });
            }
        }

        /// <summary>
        /// 给机器配置胜率后，机器人拿大牌，有多个机器时，以早大POS的机器人为准
        /// 如果有多个设置胜率帐号在同一桌，则会只有一个机率有效。
        /// </summary>
        /// <param name="pos2RobotAI"></param>
        /// <param name="_pos2Poker"></param>
        /// <returns></returns>
        public Dictionary<int, List<int>> ChangePokerByRobotAI(Dictionary<int, int> pos2RobotAI, Dictionary<int, List<int>> _pos2Poker)
        {
            try
            {
                Dictionary<int, Texas.TexasPokerType> _pbftype = new Dictionary<int, Texas.TexasPokerType>();

                _myTable.ForeachAllDo((i) =>
                {
                    List<int> _noorder = new List<int>(_pos2Poker[i]);
                    var _tlist = Texas.GetFiveFromSeven(_noorder, _fiveCommonCard);
                    _pbftype.Add(i, Texas.GetTexasType(_tlist));
                });

                int _maxpos = -1;
                Texas.TexasPokerType maxvalue = Texas.TexasPokerType.Error;

                var mastuser = _myTable.GetUserByIDTry(_myTable._ownerid);
                if (mastuser != null && mastuser._inwatch == false && mastuser._isPlaying)
                {
                    _maxpos = mastuser.pos;
                    maxvalue = _pbftype[mastuser.pos];
                }
                if (_maxpos == -1) return _pos2Poker;
                int _RobotRatePos = _maxpos;
                _myTable.ForeachAllDo((i) =>
                {
                    int _AIRate = pos2RobotAI[i];
                    if (_AIRate == 0) return;
                    int _tempRate = RandomHelper.RandomNumber(0, 100);
                    if (_tempRate <= _AIRate)
                    {
                        _RobotRatePos = i;
                    }
                });
                List<int> _tempChange = new List<int>();//把最大的牌换给机器人最高胜率的人
                _tempChange = _pos2Poker[_RobotRatePos];
                _pos2Poker[_RobotRatePos] = _pos2Poker[_maxpos];
                _pos2Poker[_maxpos] = _tempChange;
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, " 201911241328tex");
            }
            return _pos2Poker;
        }


        /// <summary>
        /// 小于等于底皮*4 分 就当观众 
        /// </summary>
        public bool CheckMinGoldLimit(long currentGold)
        {
            if (_gametype == 20)
            {
                if (currentGold > 0) return false;
                else return true;
            }
            int mango_look_beat = pregamble + _baseGamle * 4; //straddle and pregamble 
            if (currentGold <= mango_look_beat) return true;
            return false;
        }

        public int GetMinGoldLimit()
        {
            return intorate_min.ToInt32() * 100;
        }

        /// <summary>
        /// 自动打底，，，基础下注默认就有  前注
        /// </summary>
        public List<CommonPosValSD> AutoBaseGamble()
        {
            if (_dicTurn2Jackpot == null) _dicTurn2Jackpot = new Dictionary<int, long>();
            for (int _turn = 1; _turn <= 4; _turn++)
            {
                if (!_dicTurn2Jackpot.ContainsKey(_turn))
                {
                    _dicTurn2Jackpot.Add(_turn, 0);
                }
            }

            List<CommonPosValSD> _gamblelist = new List<CommonPosValSD>();
            _texasTurn = TexasTurnEnum.Turn1_0;
            _myTable._userTokenPos = _myTable._bankpos;//通打底，从庄家下一个位置开始
            _myTable.ForeachAllDo((i) =>
            {
                TexasUser tempUser = _myTable.GetUserByPosMust(i);
                if (tempUser._inseatcannotplay) return;//不允许参与游戏 
                long MaxBase = pregamble;
                if (tempUser._CurrentGold < MaxBase)
                {
                    if(_gametype != 20) TraceLogEx.Error("texas logic error must to deal 201909162036");
                    MaxBase = tempUser._CurrentGold;
                }
                if (tempUser._CurrentGold <= MaxBase && _gametype == 20)   _myTable.GambleAllin(tempUser, MaxBase);//allin
                tempUser.GoldReduce(MaxBase);

                _alljackpot += MaxBase;
                tempUser.TagTurnGamble(TexasTurnEnum.Turn1_0, MaxBase);//1.基础下注放入第一轮下注中 2. 1115暂时不放第一轮中
                _gamblelist.Add(new CommonPosValSD() { pos = tempUser._userid, val = MaxBase });
            });

            return _gamblelist;
        }

        /// <summary>
        /// 可能的小盲位
        /// </summary>
        /// <param name="pos"></param>
        /// <returns></returns>
        public bool CheckIsSmallPos(int pos)
        {
            int _smallPos = _myTable.GetNextPosTry(_myTable._bankpos);
            if (pos == _smallPos) return true;
            return false;
        }
        public bool CheckIsBigPos(int pos)
        {
            int _smallPos = _myTable.GetNextPosOnlySmall(_myTable._bankpos);
            int _bigPos = _myTable.GetNextPosOnlySmall(_smallPos);
            if (pos == _bigPos) return true;
            return false;
        }
        public bool CheckIsStraddlePos(int pos)
        {
            int _smallPos = _myTable.GetNextPosOnlySmall(_myTable._bankpos);
            int _bigPos = _myTable.GetNextPosOnlySmall(_smallPos);
            int _stradPos = _myTable.GetNextPosOnlySmall(_bigPos);
            if (pos == _stradPos) return true;
            return false;
        }

        /// <summary>
        /// 默认处理大小盲注  庄的上家是前注
        /// </summary>
        public List<CommonPosValSD> AutoBaseGambleTexas()
        {
            _sbslist = new List<CommonPosValSD>();
            //小盲注 庄下家 
            int _smallPos = _myTable.GetNextPos(_myTable._bankpos);
            if (_myTable.GetPlayerCount() == 2) _smallPos = _myTable._bankpos;//两人的时候庄就是小盲

            int smallgamble = _baseGamle;
            TexasUser tempUsersmall = _myTable.GetUserByPosMust(_smallPos);
            if (tempUsersmall._CurrentGold <= smallgamble && _gametype == 20)
            {
                smallgamble = (int)tempUsersmall._CurrentGold;
                _myTable.GambleAllin(tempUsersmall, smallgamble);//allin
            }
            tempUsersmall.GoldReduce(smallgamble);

            _alljackpot += smallgamble;
            tempUsersmall.TagTurnGamble(TexasTurnEnum.Turn1_0, smallgamble);//基础下注放入第一轮下注中
            tempUsersmall._newSet = false;
            _sbslist.Add(new CommonPosValSD() { pos = tempUsersmall._userid, val = smallgamble });

            LogUserAction(tempUsersmall, smallgamble, TexasTurnActionEnum.sb);
            //大盲注 庄下下家   
            int _bigPos = _myTable.GetNextPos(_smallPos);
            _myTable._userTokenPos = _bigPos;
            int biggamble = _baseGamle * 2;
            TexasUser tempUserBig = _myTable.GetUserByPosMust(_bigPos);

            if (tempUserBig._CurrentGold <= biggamble && _gametype == 20)
            {
                biggamble = (int)tempUserBig._CurrentGold;
                _myTable.GambleAllin(tempUserBig, biggamble);//allin
            }
            tempUserBig.GoldReduce(biggamble);

            _alljackpot += biggamble;
            tempUserBig.TagTurnGamble(TexasTurnEnum.Turn1_0, biggamble);//基础下注放入第一轮下注中 
            _curGambleMax = biggamble;
            _sbslist.Add(new CommonPosValSD() { pos = tempUserBig._userid, val = biggamble });
            tempUserBig.isbig = true;
            tempUserBig._newSet = false;
            LogUserAction(tempUserBig, biggamble, TexasTurnActionEnum.bb);

            //straddle 大盲下家  如果只有两个人 看怎么处理             
            int _straddlePos = _myTable.GetNextPos(_bigPos);
            if (_straddlePos != _smallPos && _myTable.GetPlayerCount() > 3)
            {
                int straddlegamble = _baseGamle * 4;
                TexasUser tempUserstraddle = _myTable.GetUserByPosMust(_straddlePos);

                if (tempUserstraddle._CurrentGold <= straddlegamble && _gametype == 20)
                {
                    straddlegamble = (int)tempUserstraddle._CurrentGold;
                    _myTable.GambleAllin(tempUserstraddle, straddlegamble);//allin
                }
                tempUserstraddle.GoldReduce(straddlegamble);

                _alljackpot += straddlegamble;
                tempUserstraddle._newSet = false;
                tempUserstraddle.TagTurnGamble(TexasTurnEnum.Turn1_0, straddlegamble);//基础下注放入第一轮下注中 
                _curGambleMax = straddlegamble;
                _sbslist.Add(new CommonPosValSD() { pos = tempUserstraddle._userid, val = straddlegamble });
                _myTable._userTokenPos = _straddlePos;
                _straddlepos = _straddlePos;
                if (tempUserstraddle._CurrentGold <= 0) _straddlePos = 0;//
                LogUserAction(tempUserstraddle, straddlegamble, TexasTurnActionEnum.stradlle);
            }
            else
            {//只有两家， 小盲需要多一次行动 
                _straddlepos = _bigPos;
            }
            return _sbslist;
        }

        /// <summary>
        /// 新进玩家需要补straddle
        /// </summary>
        public List<CommonPosValSD> AutoPatchStraddle()
        {
            List<CommonPosValSD> _gamblelist = new List<CommonPosValSD>();
            int _pcount = _myTable.GetPlayerCount();
            if (_pcount <= 4) return _gamblelist;

            _myTable.ForeachAllDo((i) =>
            {
                TexasUser tempUser = _myTable.GetUserByPosMust(i);
                if (tempUser._newSet) tempUser.morestraddle = true;
                tempUser._newSet = false;
            });
            _myTable.ForeachAllDo((i) =>
            {
                TexasUser tempUser = _myTable.GetUserByPosMust(i);
                if (tempUser._inseatcannotplay) return;//不允许参与游戏 
                if (!tempUser.morestraddle) return;
                if (CheckIsStraddlePos(tempUser.pos)) return;
                long MaxBase = _baseGamle*4;
                if (tempUser._CurrentGold < MaxBase)
                {
                    TraceLogEx.Error("texas logic error must to deal 201909162036");
                    MaxBase = tempUser._CurrentGold;
                }

                tempUser.GoldReduce(MaxBase);
                _alljackpot += MaxBase;
                tempUser.TagTurnGamble(TexasTurnEnum.Turn1_0, MaxBase);//基础下注放入第一轮下注中
                _gamblelist.Add(new CommonPosValSD() { pos = tempUser._userid, val = MaxBase });
                tempUser.morestraddle = false;
            });
             
            return _gamblelist;
        }

        /// <summary>
        /// 获取最小的下注值 下过小盲注的在没有加注的情况下只需要下一半
        /// </summary>
        public long GetGambleLimit(TexasUser myuser)
        {
            long _minGamble = 0;
            //_minGamble = GetMaxGamble(); 
            long _maxGamble = 0;
            _myTable.ForeachAllDo((i) =>
            {
                var tempUser = _myTable.GetUserByPosMust(i);
                if (tempUser._gambleAll > _maxGamble) _maxGamble = tempUser._gambleAll;
            });

            _minGamble = _maxGamble - myuser._gambleAll;
            //处理allin的情况
            if (_minGamble > myuser._CurrentGold) _minGamble = myuser._CurrentGold;
            return _minGamble;
        }

        /// <summary>
        /// 获取当前轮最大的下注值 
        /// </summary>
        public long GetCurTurnMaxGamble()
        {
            long _maxGamble = 0;
            _myTable.ForeachAllDo((i) =>
            {
                var tempUser = _myTable.GetUserByPosMust(i);
                if (tempUser._gambleAll == 0) return;//两个条件必须 有可能下注了，但超时了变观众
                long tgamble = tempUser.GetTurnGamble(_texasTurn);
                if (tgamble > _maxGamble) _maxGamble = tgamble;
            });
            return _maxGamble;
        }

        /// <summary>
        /// 已下注的最大值  新增加的规则 ，以前给客户端是 当前轮最大的下注值 
        /// </summary>
        /// <returns></returns>
        public long GetMaxGamble()
        {
            long _maxGamble = 0;
            _myTable.ForeachAllDo((i) =>
            {
                var tempUser = _myTable.GetUserByPosMust(i);
                if (tempUser._gambleAll == 0) return;//两个条件必须 有可能下注了，但超时了变观众

                if (tempUser._gambleAll > _maxGamble) _maxGamble = tempUser._gambleAll;
            });
            return _maxGamble;
        }

        public List<long> GetJackpotList()
        {
            List<long> _potlist = new List<long>();
            List<TexasUser> Userlist = new List<TexasUser>();

            _myTable.ForeachAllDo((i) =>
            {
                TexasUser tempUser = _myTable.GetUserByPosMust(i);
                if (tempUser._allIn)
                {
                    Userlist.Add(tempUser);
                }
            });
            if (Userlist.Count > 0)
            {
                Userlist.Sort((left, right) =>
                {
                    if (left._gambleAll > right._gambleAll)
                        return 1;
                    else if (left._gambleAll == right._gambleAll)
                        return 0;
                    else
                        return -1;
                });
                Userlist = Userlist.Where((x, i) => Userlist.FindIndex(z => z._gambleAll == x._gambleAll) == i).ToList();//Lambda表达式去重  
                long _tempalljackpot = _alljackpot;
                int _tempnum = _myTable._playerCount;
                List<long> prepotlist = new List<long>();
                for (int i = 0; i < Userlist.Count; i++)
                {
                    long _tpot = (Userlist[i]._gambleAll - prepotlist.Sum()) * _myTable._playerCount;
                    _potlist.Add(_tpot);
                    _tempalljackpot -= _tpot;
                    _tempnum--;
                    prepotlist.Add(Userlist[i]._gambleAll);
                }
                long lastpot = _alljackpot - prepotlist.Sum();
                if (lastpot > 0) prepotlist.Add(lastpot);
                return _potlist;
            }
            else return new List<long>();
        }

        public void AddJackpot(int _turn, long jackpot)
        {
            if (_turn == -1) return;
            if (_dicTurn2Jackpot.ContainsKey(_turn)) _dicTurn2Jackpot[_turn] = jackpot;
            else _dicTurn2Jackpot.Add(_turn, jackpot);
        }
        public long GetALLJackpot()
        {
            return _alljackpot;
        }

        public bool _turnOver = false;
        public bool CheckTurnOver()
        {
            _turnOver = true;//也表示一轮结束才处理
            long _maxGamble = GetCurTurnMaxGamble();
            int _unallinCount = 0;//没发完牌都all in需要特殊处理
            bool _allLook = true;
            _myTable.ForeachAllDo((i) =>
            {
                var tempUser = _myTable.GetUserByPosMust(i);
                if (tempUser.CheckisWatch()) return;
                if (tempUser._isgiveup) return;
                if (!tempUser._lookcard) _allLook = false;//需要在allin之前
                if (tempUser._CurrentGold > minalllimit) _unallinCount++;//未allin的个数 
                if (tempUser._allIn) return;//allin的人不用再允许加
                if (!tempUser.CheckTurnGambleOver(_texasTurn, _maxGamble))
                {
                    _turnOver = false;
                }
                if (tempUser._lookcard) _turnOver = false;
            });
            if (_allLook)
            {
                _turnOver = true;
            }
            //straddle 特殊处理
            if (_turnOver && _texasTurn == TexasTurnEnum.Turn1_0 && _straddlepos != 0)
            {
                _turnOver = false;
            }
            var tokenUser = _myTable.GetUserByPosMust(_myTable._userTokenPos);
            if (tokenUser == null)
            {//异常处理 
                TraceLogEx.Error(" table token count: _curTokenCount:" + _curTokenCount);
                _turnOver = true;
                return true;
            }
            if (!_allLook && tokenUser._goldChange == _baseGamle) _turnOver = false;
            return _turnOver;
        }

        public bool _moveend = false;

        /// <summary>
        /// 移动是否结束 
        /// </summary>
        /// <returns></returns>
        public bool DealMoveOver()
        {
            oneturnbegin = false;
            _moveend = false;
            bool _needShowOpenCard = true;//也表示一轮结束才处理
            long _maxGamble = GetCurTurnMaxGamble();
            int _allinCount = 0;//没发完牌都all in需要特殊处理
            bool _allLook = true;//所有人都看牌 休了 触发休芒 本局没有输赢，  

            _myTable.ForeachAllDo((i) =>
            {
                var tempUser = _myTable.GetUserByPosMust(i);
                if (tempUser.CheckisWatch()) return;
                if (tempUser._isgiveup) return;
                if (tempUser._allIn) _allinCount++;//未allin的个数  
                if (!tempUser._lookcard) _allLook = false;
                if (!tempUser.CheckTurnGambleOver(_texasTurn, _maxGamble))
                {
                    _needShowOpenCard = false;
                }
            });

            if (_allLook)
            {   //全看牌了 ==休芒
                _needShowOpenCard = true;
            }
            //straddle 特殊处理 
            if (_needShowOpenCard && _texasTurn == TexasTurnEnum.Turn1_0 && _straddlepos != 0) _needShowOpenCard = false;
            ////if (_myTable._DicPos2User[_myTable._userTokenPos]._goldChange <= _basegold) _needShowOpenCard = false;
            if (_curTokenCount < _myTable.GetPlayerCount()) _needShowOpenCard = false;

            if (_needShowOpenCard)
            {
                TagTurnJackpot();//必须放上面 不turn就变成下轮了 
                if (_texasTurn == TexasTurnEnum.Turn1_0)
                {
                    ReSetAllLookCard();
                    _texasTurn = TexasTurnEnum.Turn2_3;
                    oneturnbegin = true;
                }
                else if (_texasTurn == TexasTurnEnum.Turn2_3)
                {
                    ReSetAllLookCard();
                    _texasTurn = TexasTurnEnum.Turn3_4;
                    oneturnbegin = true;
                }
                else if (_texasTurn == TexasTurnEnum.Turn3_4)
                {
                    ReSetAllLookCard();
                    _texasTurn = TexasTurnEnum.Turn4_5;
                    oneturnbegin = true;
                }
                else if (_texasTurn == TexasTurnEnum.Turn4_5)
                {
                    _texasTurn = TexasTurnEnum.TurnCompare;
                    _moveend = true;
                }
                else if (_texasTurn == TexasTurnEnum.TurnCompare)
                {
                    TraceLogEx.Error("error logic path.......................");
                }
                if (CheckUnAllIn() == 1)
                {   //还有剩余金币的人当轮下注值是最大值
                    _moveend = true;
                    _texasTurn = TexasTurnEnum.TurnCompare;
                }
            }

            if (CheckGiveUpOver() || CheckAllIn() || LimtiMaxTokenCount())
            {   //提前结算   需要翻开所有的牌 
                _moveend = true;
                _texasTurn = TexasTurnEnum.TurnCompare;
            }
            if (_moveend)
            {
                _myTable.ForeachAllDo((i) =>
                {
                    TexasUser tempUser = _myTable.GetUserByPosMust(i);
                    if (tempUser != null)
                    {
                        tempUser.haveadd = false;//每一轮重置一次标识
                    }
                });
            }
            if (oneturnbegin || _moveend) CollectMutilJackpot();
            return _moveend;
        }

        /// <summary>
        /// 获取公牌，可能是3.4.5张，
        /// 显示公牌的条件：1.所有人有下注或弃牌，金额相等或有人All In.一圈中不能有看牌的【全看牌的除外】
        /// </summary>
        public List<int> ShowCommonCard()
        {
            List<int> cCards = new List<int>();
            if (_texasTurn == TexasTurnEnum.Turn2_3) cCards = new List<int>() { _fiveCommonCard[0], _fiveCommonCard[1], _fiveCommonCard[2] };
            else if (_texasTurn == TexasTurnEnum.Turn3_4) cCards = new List<int>() { _fiveCommonCard[0], _fiveCommonCard[1], _fiveCommonCard[2], _fiveCommonCard[3] };
            else if (_texasTurn == TexasTurnEnum.Turn4_5 || _texasTurn == TexasTurnEnum.TurnCompare) cCards = new List<int>(_fiveCommonCard);

            return cCards;
        }

        /// <summary>
        /// 根据结束的轮标识获取公牌
        /// </summary>
        /// <param name="_endTurn"></param>
        /// <returns></returns>
        public List<int> GetEndCommonCard(TexasTurnEnum _endTurn)
        {
            List<int> cCards = new List<int>();

            if (_endTurn == TexasTurnEnum.Turn2_3) cCards = new List<int>() { _fiveCommonCard[0], _fiveCommonCard[1], _fiveCommonCard[2] };
            else if (_endTurn == TexasTurnEnum.Turn3_4) cCards = new List<int>() { _fiveCommonCard[0], _fiveCommonCard[1], _fiveCommonCard[2], _fiveCommonCard[3] };
            else if (_endTurn == TexasTurnEnum.Turn4_5 || _texasTurn == TexasTurnEnum.TurnCompare) cCards = new List<int>(_fiveCommonCard);

            return cCards;
        }

        /// <summary>
        /// 根据下注值动态生成保险列表 
        /// </summary>
        public List<int> GetDynamicIns31(TexasUser _user)
        {
            List<int> inslist = new List<int>();
            if (_user != null)
            {
                if (_user._gambleAll == 0 || _user.outs31.Count < 1 || _user.outs31.Count > 14) return inslist;
                double _tempinsrate = Texas.GetRatebyCount(_user.outs31.Count);

                if (_tempinsrate == 0)
                {
                    _tempinsrate = 1;
                    TraceLogEx.Error("insurancerate is 0 logic error !------------------ _texasTurn:" + _texasTurn);
                }
                if (_texpotlist != null && _texpotlist.Count > 0 && _texpotlist[0].poslist.Contains(_user._userid))
                {
                    int _minPlayer = 0;
                    long _baoben = Convert.ToInt32((_texpotlist[0].gamble + _user.insOrder31) / _tempinsrate * 100 / 100);
                    long _full = Convert.ToInt32(_texpotlist[0].curallpot / _tempinsrate * 100 / 100);

                    int maxins = 0;
                    if (_texasTurn == TexasTurnEnum.Turn2_3)
                    {
                        maxins = Convert.ToInt32(_user.mpot31 * 0.25);
                    }
                    if (_texasTurn == TexasTurnEnum.Turn3_4)
                    {
                        if (_user.insOrder31 > 0 && _user.outs31.Count > 0)
                        {
                            _user.insRate41 = Texas.GetRatebyCount(_user.outs31.Count);//
                            double _beiins = _user.insOrder31 / _user.insRate41;
                            _minPlayer = (int)_beiins;
                        }
                        if (_user.douts31.Count > 0)
                        {
                            long _maxaollow = GetInsGambleAll(_user);
                            _baoben = Math.Min(_baoben, _maxaollow - _user.insOrder31);
                            _full = Math.Min(_full, _maxaollow - _user.insOrder31);
                        }
                        maxins = Convert.ToInt32(_user.mpot31 * 0.5);
                    }
                    _baoben = Math.Min(_baoben, maxins);
                    _full = Math.Min(_full, maxins);

                    inslist.Add(_minPlayer);
                    inslist.Add((int)_baoben);// + _user.insOrder3 第二次保本计算方法暂时不第一次的投保
                    inslist.Add((int)_full);//用_user.mpot有概率两个值一样大了 
                }
                return inslist;
            }

            TraceLogEx.Error("下注用户保险列表 用户null  func:GetDynamicIns");
            return inslist;
        }

        /// <summary>
        /// 根据下注值动态生成保险列表 
        /// </summary>
        public List<int> GetDynamicIns32(TexasUser _user)
        {
            List<int> inslist = new List<int>();
            if (_user != null)
            {
                if (_user._gambleAll == 0 || _user.outs32.Count < 1 || _user.outs32.Count > 14) return inslist;
                double _tempinsrate = Texas.GetRatebyCount(_user.outs32.Count);

                if (_tempinsrate == 0)
                {
                    _tempinsrate = 1;
                    TraceLogEx.Error("insurancerate is 0 logic error !------------------ _texasTurn:" + _texasTurn);
                }
                if (_texpotlist != null && _texpotlist.Count > 1 && _texpotlist[1].poslist.Contains(_user._userid))
                {
                    int _minPlayer = 0;
                    int _baoben = Convert.ToInt32((_texpotlist[1].gamble + _user.insOrder32) / _tempinsrate * 100 / 100);
                    int _full = Convert.ToInt32(_texpotlist[1].curallpot / _tempinsrate * 100 / 100);

                    int maxins = 0;
                    if (_texasTurn == TexasTurnEnum.Turn2_3)
                    {
                        maxins = Convert.ToInt32(_user.mpot32 * 0.25);
                    }
                    if (_texasTurn == TexasTurnEnum.Turn3_4)
                    {
                        if (_user.insOrder32 > 0 && _user.outs32.Count > 0)
                        {
                            _user.insRate42 = Texas.GetRatebyCount(_user.outs32.Count);
                            double _beiins = _user.insOrder32 / _user.insRate42;
                            _minPlayer = (int)_beiins;
                        }
                        if (_user.douts32.Count > 0)
                        {   //有平分的情况
                            long _maxaollow = GetInsGambleAll(_user);
                            _baoben = (int)Math.Min(_baoben, _maxaollow - _user.insOrder32);
                            _full = (int)Math.Min(_full, _maxaollow - _user.insOrder32);
                        }
                        maxins = Convert.ToInt32(_user.mpot32 * 0.5);
                    }
                    _baoben = Math.Min(_baoben, maxins);
                    _full = Math.Min(_full, maxins);

                    inslist.Add(_minPlayer);
                    inslist.Add(_baoben);
                    inslist.Add(_full);
                }

                return inslist;
            }

            TraceLogEx.Error("下注用户保险列表 用户null  func:GetDynamicIns");
            return inslist;
        }

        /// <summary>
        /// 可买保险的最大下注值   多出的部分是不会输, 不用买 
        /// </summary>
        /// <param name="_user"></param>
        /// <returns></returns>
        public long GetInsGambleAll(TexasUser _user)
        {
            List<TexasUser> _ungiveList = GetUnGiveupUserList();
            if (_ungiveList.Count < 2) return _user._gambleAll;
            _ungiveList = _ungiveList.OrderByDescending(t => t._gambleAll).ToList();

            long maxdis = _ungiveList[0]._gambleAll - _ungiveList[1]._gambleAll;
            if (_user._userid == _ungiveList[0]._userid)
            {
                return _user._gambleAll - maxdis;
            }
            else return _user._gambleAll;
        }

        private void TagTurnJackpot()
        {
            long _tempJackpot = 0;
            if (_lastTurn < TexasTurnEnum.Turn1_0) _tempJackpot = _alljackpot;
            else
            {
                _myTable.ForeachAllDo((i) =>
                {
                    TexasUser tempUser = _myTable.GetUserByPosMust(i);
                    if (tempUser._gambleAll == 0) return;
                    _tempJackpot += tempUser.GetTurnGamble(_texasTurn);
                });
            }

            AddJackpot((int)_texasTurn, _tempJackpot);  
            _lastTurn = _texasTurn;
        }

        private void ReSetAllLookCard()
        {
            _myTable.ForeachAllDo((i) =>
            {
                TexasUser tempUser = _myTable.GetUserByPosMust(i);
                if (tempUser._isgiveup) return;
                if (tempUser._allIn) return;//allin的人不用再允许加
                tempUser._lookcard = false;
                //tempUser._addinturn = false;
            });
        }

        /// <summary>
        /// 强制结束 //补丁，限制最大下注，逻辑中有BUG一直在玩
        /// </summary>
        /// <returns></returns>
        private bool LimtiMaxTokenCount()
        {
            if (_curTokenCount >= _maxTokenCount) return true;//所有人进行比牌，强制结束 
            return false;
        }

        /// <summary>
        /// 移动令牌是否成功
        /// </summary>
        /// <returns></returns>
        public bool MoveToken()
        {
            if (CheckGiveUpOver() || CheckAllIn() || CheckOnlyOneUnAllInAndMax())
            {//不是所有人allin 只有一个人未allin的情况是在dealmoveover中处理
                TagTurnJackpot();//allin结束的需要把金币放在一起
                return false;
            }
            else
            {
                _curTokenCount++; 
                DealMoveOver();
                _myTable.MoveTokenIndex();//只有一个人不再进行轮换了 
                _myTable.MoveTableToken();
                return true;
            }
        }

        /// <summary>
        /// 所有人敲了 或还有剩余金币的人当轮下注值是最大值
        /// </summary>
        /// <returns></returns>
        public bool CheckAllIn()
        {
            int _unallinCount = CheckUnAllIn();
            if (_unallinCount == 0) return true;
            else return false;
        }

        public bool CheckOnlyOneUnAllInAndMax()
        {
            bool _over = false;
            if (CheckUnAllIn() == 1)
            {
                _myTable.ForeachAllDo((i) =>
                {
                    var tempUser = _myTable.GetUserByPosMust(i);
                    if (tempUser.CheckisWatch()) return;
                    if (tempUser._isgiveup) return;
                    if (!tempUser._allIn)
                    {
                        if (tempUser._gambleAll == GetMaxGamble()) _over = true;
                    }
                });
            }
            return _over;
        }

        public int CheckUnAllIn()
        {
            int _unallinCount = 0;
            _myTable.ForeachAllDo((i) =>
            {
                var tempUser = _myTable.GetUserByPosMust(i);
                if (tempUser.CheckisWatch()) return;
                if (tempUser._isgiveup) return;
                if (!tempUser._allIn) _unallinCount++;
            });
            return _unallinCount;
        }

        // 获取本桌已经弃牌的人数 
        public int GetGiveUp()
        {
            int giveup = 0;
            _myTable.ForeachAllDo((i) =>
            {
                if (_myTable._DicPos2User[i]._isgiveup) giveup++;
            });
            return giveup;
        }

        public int GetUnGiveupCount()
        {
            int _ungiveupCount = 0;
            _myTable.ForeachAllDo((i) =>
            {
                var tempUser = _myTable.GetUserByPosMust(i);
                //if (tempUser.CheckisWatch()) return;
                if (!tempUser._isgiveup)
                {
                    _ungiveupCount++;
                }
            });
            return _ungiveupCount;
        }

        public List<TexasUser> GetUnGiveupUserList()
        {
            List<TexasUser> tlist = new List<TexasUser>();
            _myTable.ForeachBaseUser((tempUser) =>
            {
                if (tempUser.CheckisWatch()) return;
                if (!tempUser._isgiveup)
                {
                    tlist.Add(tempUser as TexasUser);
                }
            });
            return tlist;
        }

        /// <summary>
        /// 处理是不是所有人都弃牌，用于下局开始   true 表示只剩下最后一个人了
        /// </summary>
        /// <returns></returns>
        public bool CheckGiveUpOver()
        {
            if (GetUnGiveupCount() > 1) return false;
            else return true;
        }

        /// <summary>
        /// 获取最后赢家的牌，如果需要显示的话，只有比过牌才需要显示。
        /// </summary>
        /// <returns></returns>
        public List<CommonPosValListSD> GetPos2CardMaxCard()
        {
            List<CommonPosValListSD> _pos2MaxCard = new List<CommonPosValListSD>();
            _myTable.ForeachAllDo((i) =>
            {
                TexasUser tempUser = _myTable.GetUserByPosMust(i);
                tempUser._gambleAllleft = tempUser._gambleAll;
                tempUser._haveGetJackpot = false;//必须要标识 弃牌的人也需要标识 不然不会给赢家
                if (tempUser._isgiveup) return;
                ////if (_endTurn < TexasTurnEnum.TurnCompare) return; 
                tempUser._maxPai = Texas.GetFiveFromSeven(tempUser._shouPaiArr, _fiveCommonCard);//固定牌型                
                _pos2MaxCard.Add(new CommonPosValListSD() { pos = tempUser._userid, vallist = tempUser._maxPai });
            });
            if (GetUnGiveupCount() <= 1) _pos2MaxCard = new List<CommonPosValListSD>();//要比牌才通知最大牌型
            return _pos2MaxCard;
        }

        /// <summary>
        /// 所有人进行比牌，   所有人进行比牌， 按顺序自动进行比牌，一样大平分，如果allin的人赢的金币后还剩下，第二大家继续分金币
        /// 输的人ALLIN 可能会退Gold
        /// 当公牌最大时，所有人没弃牌的人都是平局，进行分奖池 https://wenku.baidu.com/view/04b5d6ce647d27284a735122.html
        /// </summary>
        public async Task<List<TexasCompareSD>> CompareAll(bool _forceOver)
        {
            //TraceLogEx.Log(string.Format("num:{0} ...._jackpot:{1}   commoncard:{2}", _myTable.tnum, _alljackpot, JsonUtils.Serialize(_fiveCommonCard)));
            _myTable.ForeachBaseUser((_user) =>
            {
                var tempUser = _user as TexasUser;
                if (tempUser._isgiveup) return;
                if (tempUser._allinTurn == TexasTurnEnum.Init) tempUser._allinTurn = TexasTurnEnum.Turn4_5;//需要标识这这轮allin的
            });

            List<TexasCompareSD> _pos2Score = new List<TexasCompareSD>();
            List<TexasUser> _tempall_one = new List<TexasUser>();
            _myTable.ForeachBaseUser((_user) =>
            {
                var tempUser = _user as TexasUser;
                if (tempUser._isgiveup) return;
                if (tempUser._haveGetJackpot) return;
                _tempall_one.Add(tempUser);
            });
            if (_tempall_one.Count == 0 && !_forceOver)
            {
                TraceLogEx.Error(" feal error logic .202001171800");
                return _pos2Score;
            }

            if (_tempall_one.Count == 1)
            {//只有一个人没有弃牌  需要全吃
                _tempall_one[0]._haveGetJackpot = true;
                _tempall_one[0]._getjackpot = _alljackpot;
                _alljackpot = 0;
            }
            else
            {
                CompareTwo();
            }
            //基础结算
            _myTable.ForeachBaseUser((user) => 
            {
                var _user = user as TexasUser;
                _user._goldwin = _user._getjackpot - _user._goldChange;
                _user.GoldAdd(_user._getjackpot);// 获取的包括自己下注多没有被赢完退回来的                   
                _user._gain += _user._goldwin;

                TexasCompareSD _twscore4 = new TexasCompareSD()
                {
                    pos = _user._userid,
                    _gold = (int)_user._goldChange,
                    _jackpot = 0,
                    Score = (int)_user._getjackpot,
                    bigwin = 0
                };
                _pos2Score.Add(_twscore4);
                TraceLogEx.Log(string.Format("num:{0}, _userid:{1}, goldwin:{2}, gain:{3} , _tableC:{4}，,_goldChange:{5}",
                    _myTable._tableid, _user._userid, _user._goldwin, _user._gain, _curTableOverCount, _user._goldChange));
            }); 

            int pcount = _myTable.GetPlayerCount();

            foreach (var _twscore4 in _pos2Score)
            {
                var _user = _myTable.GetBaseUserByID(_twscore4.pos) as TexasUser; //pos is userid
                if (_user._goldwin <= 0) continue;
              

                if (_user._goldwin > 0)
                {//小奖池 for bigwin
                    int _jtax = DealJackpotTax(_user, _user._goldwin.ToInt32());
                    if (_jtax > 0)
                    {
                        tjackpotEx.AddJackpotPercent(_jtax, TexasLobby.instance._gameid, _myTable._levelid);
                        _user.SystemTaxLog(_jtax, ResActionType.userJackpot);
                        tjackpotEx.Addjackpotlog(_user._userid, _jtax, 0, 2, TexasLobby.instance._gameid, _myTable._levelid);
                        _user._goldwin -= _jtax;
                        _user._gain -= _jtax;
                        _user.GoldReduce(_jtax);
                        _curalltax += _jtax;//每局奖池
                        alltax += _jtax;
                    }                   
                }

                //bigwin
                long _bigwin = await DealBigWin(_user);
                if (_bigwin > 0)
                {
                    _user._goldwin += _bigwin;
                    alltax -= (int)_bigwin;
                    _curalltax -= (int)_bigwin;
                    _user._gain += _user._goldwin;
                    _twscore4.bigwin = (int)_bigwin;
                }
                //水 翻牌阶段才抽
                if (_endTurn >= TexasTurnEnum.Turn2_3)
                {
                    long minepot = GetOwnPot(_user._userid);
                    var usertax = _user.DealTax(_myTable._tableid + "", alliId, IsAverage, GetThisGametax(pcount), minepot);
                    if (usertax > 0)
                    {
                        if (usertax > 0) await _user.AddCommission2Agent(_myTable._tableid, _myTable._gameid, usertax, 0);
                        //_user._goldwin -= (int)usertax;//要求不显示
                    }
                }

                _myTable._PlayTimes = await VIPHelper.SetUpgradeExp(_user._userid, 0, _user.GetGain(), _baseGamle, 1);
            }
            return _pos2Score;
        }

        /// <summary>
        /// 当前桌子的多奖池   多个玩家需要比牌才会调用
        /// </summary>
        public void CollectMutilJackpot()
        {
            List<TexasUser> _ungiveList = GetUnGiveupUserList();
            _texpotlist = new List<TexasJackpot>();//第一个是主池 
                                                   ////if (_texpotlist.Count != 0) return;//已处理一次了 不用再处理
            _myTable.ForeachBaseUser((_user) =>
            {
                var tempUser = _user as TexasUser;
                if (tempUser._gambleAll == 0) return;
                tempUser._mulpot_gamble = tempUser._gambleAll;
            });

            _ungiveList = _ungiveList.OrderBy(t => t._mulpot_gamble).ToList();
            for (int ct = 0; ct < _ungiveList.Count; ct++)
            {
                if (_ungiveList[ct]._mulpot_gamble == 0) continue;
                TexasJackpot _texpot = new TexasJackpot();
                _texpot.gamble = _ungiveList[ct]._mulpot_gamble;
                _texpot.poslist = new List<int>();
                _texpot.curallpot += _ungiveList[ct]._mulpot_gamble;
                _texpot.e_curallpot += _ungiveList[ct]._mulpot_gamble;

                _texpot.poslist.Add(_ungiveList[ct]._userid);

                _myTable.ForeachBaseUser((_user) =>
                {
                    var tempUser = _user as TexasUser;
                    if (tempUser._gambleAll == 0) return;
                    if (tempUser.pos == _ungiveList[ct].pos) return;
                    if (tempUser._mulpot_gamble == 0) return;
                    long _tpot = 0;
                    if (tempUser._mulpot_gamble < _ungiveList[ct]._mulpot_gamble)
                    {
                        _tpot = tempUser._mulpot_gamble;
                        tempUser._mulpot_gamble = 0;
                    }
                    else
                    {
                        _tpot = _ungiveList[ct]._mulpot_gamble;
                        tempUser._mulpot_gamble -= _ungiveList[ct]._mulpot_gamble;
                    }
                    _texpot.curallpot += _tpot;
                    _texpot.e_curallpot += _tpot;

                    _texpot.poslist.Add(tempUser._userid);
                });
                _ungiveList[ct]._mulpot_gamble = 0;//
                _texpotlist.Add(_texpot);
            }
        }

        private void CompareTwo()
        {
            if (_texpotlist == null) return;
            int winCount = 0;//补丁用于防止服务器结算卡死
            do
            {
                List<TexasUser> _tempall = new List<TexasUser>();
                _myTable.ForeachBaseUser((_user) =>
                {
                    var tempUser = _user as TexasUser;
                    if (tempUser._isgiveup) return;
                    if (tempUser._haveGetJackpot) return;
                    _tempall.Add(tempUser);
                });
                if (_tempall.Count == 0) break;
                else if (_tempall.Count == 1)
                {//只有一个人没有弃牌  即便敲了的人 下的值很小，也需要全吃
                    _tempall[0]._haveGetJackpot = true;
                    _tempall[0]._getjackpot += _alljackpot;
                    _alljackpot = 0;
                }
                else
                {   //有多个人比牌时 找到所有相同最大牌的人
                    List<TexasUser> _maxDrawList = GetMaxCardUserList(_tempall);
                    if (_maxDrawList.Count == 0)
                    {
                        TraceLogEx.Error("fetal error 202002281828");
                        break;
                    }
                    else if (_maxDrawList.Count == 1)
                    {
                        #region // 一家最大 1.但有可能没有把奖池赢完，可能第二家再分；2.AllIn 最多的人可能需要退回部分金币  
                        if (!_maxDrawList[0]._haveGetJackpot)
                        {
                            for (int _in = 0; _in < _texpotlist.Count; _in++)
                            { 
                                TexasJackpot _tpot = _texpotlist[_in];
                                if (_tpot.curallpot == 0) continue;
                                if (!_tpot.poslist.Contains(_maxDrawList[0]._userid)) continue;
                                _maxDrawList[0]._getjackpot += _tpot.curallpot;
                                _alljackpot -= _tpot.curallpot;

                                _tpot.e_curallpot = _tpot.curallpot;
                                _tpot.curallpot = 0;
                            }
                        }
                        _maxDrawList[0]._haveGetJackpot = true;//标识此人已领完了自己的奖池
                        #endregion
                    }
                    else
                    {
                        #region //进行平分处理，按AllIN的顺序进行平分
                        for (int _in = 0; _in < _texpotlist.Count; _in++)
                        {
                            TexasJackpot _tpot = _texpotlist[_in];
                            if (_tpot.curallpot == 0) continue;
                            List<TexasUser> getjUsers = new List<TexasUser>();
                            foreach (var tuser in _maxDrawList)
                            {
                                if (tuser._haveGetJackpot) continue;
                                if (!_tpot.poslist.Contains(tuser._userid)) continue;
                                getjUsers.Add(tuser);
                            }
                            if (getjUsers.Count == 0) continue;
                            long _temp_addback = _tpot.curallpot / getjUsers.Count;//会有除不尽的小数 掉了
                            foreach (var tuser2 in getjUsers)
                            {
                                tuser2._getjackpot += _temp_addback;
                            }
                            _alljackpot -= _tpot.curallpot;
                            _tpot.e_curallpot = _tpot.curallpot;
                            _tpot.curallpot = 0;

                            TraceLogEx.Log(string.Format(" dr2_ num:{0}, _userid:{1}, _temp_addback:{2}, _in:{3}, _alljackpot:{4} ",
                            _myTable._tableid, JsonUtils.Serialize(getjUsers.Select(uid => uid._userid).ToList()), _temp_addback, _in, _alljackpot));
                        }
                        foreach (var tuser in _maxDrawList)
                        {
                            tuser._haveGetJackpot = true;
                        }
                        IsAverage = true;
                        #endregion
                    }
                }
                winCount++;
                if (winCount > _maxPlayer) break;
            }
            while (_alljackpot > 0);
            if (winCount > _maxPlayer || _alljackpot < 0)
            {    //结算值不对，跟牌值没有关系了
                TraceLogEx.Error("fetal error...._jackpot:" + _alljackpot + " winCount:" + winCount);
            }
        }

        public long GetOwnPot(int uiserid)
        {
            long mpot = 0;
            foreach (var texpot in _texpotlist)
            {
                if (texpot.poslist.Count == 1) continue;                
                if (texpot.poslist.Contains(uiserid)) mpot += texpot.e_curallpot;
            }
            return mpot;
        }

        public long GetOwnPot(TexasUser user)
        {
            long mpot = 0;
            foreach (var texpot in _texpotlist)
            {
                if (texpot.poslist.Count == 1) continue;//只有一个人的奖池不用计算                
                if (texpot.poslist.Contains(user._userid)) mpot += texpot.curallpot;
            }
            return mpot;
        }

        public long GetOwnPot31(TexasUser user)
        {
            long mpot31 = 0;
            if (_texpotlist != null && _texpotlist.Count > 0)
            {
                if (_texpotlist[0].poslist.Contains(user._userid)) return _texpotlist[0].curallpot;
            }
            return mpot31;
        }


        public long GetOwnPot32(TexasUser user)
        {
            long mpot = 0;
            bool _jumpfirst = false;
            foreach (var texpot in _texpotlist)
            {
                if (texpot.poslist.Count == 1) continue;//只有一个人的奖池不用计算                
                if (texpot.poslist.Contains(user._userid))
                {
                    if (!_jumpfirst)
                    { _jumpfirst = true; continue; }
                    mpot += texpot.curallpot;
                    break;
                }
            }
            return mpot;
        }

        /// <summary>
        /// 是否能获得bigwin 且从奖池中获取额外的金币
        /// </summary>
        /// <param name="_user"></param>
        /// <returns></returns>
        private async ETTask<long> DealBigWin(TexasUser _user)
        {
            //1.公牌是最大牌 不能中  //未发完三张牌不能中
            if (GetUnGiveupCount() <= 1 || _user._goldwin <= 0 || _user._goldwin < _user._gambleAll) return 0;//未比牌不发大奖  两个同花顺输了的不中 

            #region  大奖类型（1.皇家同花顺 2.同花顺 3.四条）
            int jackpotType = 0;
            string bigname = "";
            var _cardft = Texas.GetTexasType(_user._maxPai);
            if (_cardft == Texas.TexasPokerType.Five_Flush_LoyalStraight)
            {
                jackpotType = 1;
                bigname = "皇家同花顺";
            }
            else if (_cardft == Texas.TexasPokerType.Five_Flush_Straight)
            {
                jackpotType = 2;
                bigname = "同花顺";
            }
            else if (_cardft == Texas.TexasPokerType.Five_Bomb)
            {
                jackpotType = 3;
                bigname = "四条";
            }
            if (jackpotType > 0)
            {
                long jackpotGold = await tjackpotEx.CalculationJackpot(_myTable._gameid, _myTable._levelid, jackpotType, _user._userid);
                _user.GoldAdd(jackpotGold);

                await ThreadEx.Sleep(RandomHelper.RandomNumber(2, 5) * 1000);
                // var gold_value = t_anythingList.GetInt("notice_gold_rate");
                if (jackpotGold > 0)
                {
                    var showName = _user._tbUser.wechatName;
                    sc_getnotice_n _getnotice = new sc_getnotice_n() { result = 1, noticelist = new List<string>() };
                    string msg = string.Format("恭喜玩家{0},在德州扑克中赢获{1},获得了{2}金币！", showName, bigname, jackpotGold / 100);
                    _getnotice.noticelist.Add(msg);
                    _getnotice._t = 1;
                    _getnotice.gameid = _myTable._gameid;
                    BaseSendDataServer.AutoNotifySendData(JsonUtils.Serialize((_getnotice)));  // 推送给所有在线玩家 中大奖
                }
                return jackpotGold;
            }
            #endregion
            return 0;
        }

        /// <summary>
        /// 抽奖池 大盲奖池
        /// </summary>
        /// <param name="_buser"></param>
        /// <param name="preGold"></param>
        private int DealJackpotTax(BaseUser _buser, int _goldwin)
        {
            if (_myTable.IsSupper) return 0;//普通金币房间不抽奖池了
            if (_goldwin >= _baseGamle * 20)
            {
                return _baseGamle * 2;//大盲
            }
            return 0;
        }

        /// <summary>
        /// 特殊处理相同最大牌型的用户
        /// </summary>
        /// <param name="_tempall"></param>
        /// <returns></returns>
        private List<TexasUser> GetMaxCardUserList(List<TexasUser> _tempall)
        {
            List<TexasUser> _maxDrawList = new List<TexasUser>();
            if (_tempall.Count < 2) return _maxDrawList;
            int _tempPos = 0;
            List<int> _maxcard = GetMaxCard(_tempall, out _tempPos);
            for (int i = 0; i < _tempall.Count; i++)
            {
                if (_tempall[i].pos == _tempPos) continue;
                Texas.TexasEnmuResult _result = Texas.ComparePoker(_tempall[i]._maxPai, _maxcard);
                if (_result == Texas.TexasEnmuResult.Draw)
                {
                    _maxDrawList.Add(_tempall[i]);
                }
            }

            //至少存在一个用户
            for (int i = 0; i < _tempall.Count; i++)
            {
                if (_tempall[i].pos == _tempPos) _maxDrawList.Add(_tempall[i]);//添加回去一起处理
            }
            return _maxDrawList;
        }

        /// <summary>
        /// 找到几个人中最大的牌，可能是相同牌型的
        /// </summary>
        /// <param name="_tempall"></param>
        /// <returns></returns>
        private List<int> GetMaxCard(List<TexasUser> _tempall, out int pos)
        {
            pos = 0;
            if (_tempall.Count == 0) return new List<int>();
            List<int> _maxcard = _tempall[0]._maxPai;
            pos = _tempall[0].pos;
            for (int i = 0; i < _tempall.Count; i++)
            {
                Texas.TexasEnmuResult _result = Texas.ComparePoker(_tempall[i]._maxPai, _maxcard);
                if (_result == Texas.TexasEnmuResult.Win)
                {
                    _maxcard = new List<int>(_tempall[i]._maxPai);
                    pos = _tempall[i].pos;
                }
            }
            return _maxcard;
        }

        public async void BigEndReturnAllGold()
        {
            if (_myTable._DicPos2User != null)
            {
                foreach (int key in _myTable._DicPos2User.Keys)
                {
                    var tempUser = _myTable._DicPos2User[key] as TexasUser;

                    if (tempUser._CurrentGold < 0)
                    {
                        TraceLogEx.Error(tempUser._userid + " ：" + tempUser._CurrentGold);
                        tempUser._CurrentGold = 0;
                    }
                    if (_myTable.IsSupper && clubidx > 0 && tempUser._CurrentGold > 0)
                    {
                        long agold = await tempUser.GetClubGold(tempUser.clubidx, tempUser._userid, tempUser._CurrentGold, true);
                        await ClubHelper.UpdateClubGold(tempUser.clubidx, tempUser._userid, tempUser._CurrentGold, true);
                        tempUser.WriteUserClubgoldLog(agold + tempUser._CurrentGold, 6, TexasLobby.instance._gameid, "", -tempUser._CurrentGold, tempUser.clubidx);
                    }
                    else
                    {
                        tempUser._tbUser.Gold += tempUser._CurrentGold;
                        await BaseHelper.AddOrUpdateBase(tempUser._tbUser);
                        if (tempUser._CurrentGold > 0)
                            tempUser.WriteGoldChangeLog(tempUser._CurrentGold, 34, _myTable._tableid.ToString(), true);//记录日志33:房间带入;34:带入返还
                    }
                   await tempUser.SetSatusInLobby();
                }
            }

            if (_myTable._DicPos2UserWatch != null)
            {
                foreach (int key2 in _myTable._DicPos2UserWatch.Keys)
                {
                    var tempUser = _myTable.GetBaseUserInWatch(key2);
                    if (tempUser._CurrentGold < 0)
                    {
                        TraceLogEx.Error(tempUser._userid + " ：" + tempUser._CurrentGold);
                        tempUser._CurrentGold = 0;
                    }
                    if (_myTable.IsSupper && clubidx > 0 && tempUser._CurrentGold > 0)
                    {
                        long agold = await tempUser.GetClubGold(tempUser.clubidx, tempUser._userid, tempUser._CurrentGold, true);
                        await ClubHelper.UpdateClubGold(tempUser.clubidx, tempUser._userid, tempUser._CurrentGold, true);
                        tempUser.WriteUserClubgoldLog(agold + tempUser._CurrentGold, 6, TexasLobby.instance._gameid, "", -tempUser._CurrentGold, tempUser.clubidx);
                    }
                    else
                    {
                        tempUser._tbUser.Gold += tempUser._CurrentGold;
                        await BaseHelper.AddOrUpdateBase(tempUser._tbUser);
                        if (tempUser._CurrentGold > 0)
                            tempUser.WriteGoldChangeLog(tempUser._CurrentGold, 34, _myTable._tableid.ToString(), true);//记录日志33:房间带入;34:带入返还
                    }
                    await  tempUser.SetSatusInLobby();
                }
            }
        }

        public void WriteAllJackpot()
        {
            if (_curalltax <= 0) return;
            var _jackpot = tjackpotEx.GetJackpot(_myTable._gameid, _myTable._levelid);
            if (_jackpot == null)
            {
                TraceLogEx.Error("未初始化游戏奖池:" + _myTable._gameid);
            }
            else
            {
                //tjackpotEx.UpdateJackpot(_curalltax, 0, 0, _myTable._gameid, _myTable._roomid, _myTable.tnum);
            }
            _myTable.NotifyJackpot();
        }


        public List<CommonPosValListSD> GetPosShouPai(bool force)
        {
            List<CommonPosValListSD> _pos2Gold = new List<CommonPosValListSD>();
            _myTable.ForeachAllDo((j) =>
            {
                var _wuser = _myTable.GetUserByPosMust(j);
                if (_wuser._isgiveup) return;//弃牌的人不再返回 
                if (!force && delay != 0) return;
                _pos2Gold.Add(new CommonPosValListSD() { pos = _wuser._userid, vallist = _wuser._shouPaiArr });
            });
            return _pos2Gold;
        }

        /// <summary>
        /// 得到所有位置手牌
        /// </summary>
        /// <returns></returns>
        public ConcurrentBag<CommonPosValListSD> GetAllPosShouPai()
        {
            ConcurrentBag<CommonPosValListSD> allusercard = new ConcurrentBag<CommonPosValListSD>();
            _myTable.ForeachAllDo((j) =>
            {
                var _wuser = _myTable.GetUserByPosMust(j);
                allusercard.Add(new CommonPosValListSD() { pos = _wuser._userid, vallist = _wuser._shouPaiArr });
            });
            return allusercard;
        }

        public List<CommonPosValSD> GetPosWinPercent(int cCount)
        {
            //var _ungivecount = GetUnGiveupUserList();
            //int totalbase = 0;
            //foreach (var _wuser in _ungivecount)
            //{
            //    int percent = 0;
            //    if (_wuser.outs.Count > 0)
            //    {
            //        percent = Convert.ToInt32((_wuser.outs.Count * 1.0) / (52 - _ungivecount.Count * 2 - cCount) * 100);
            //        if (percent > 100)
            //        {
            //            percent = 100;
            //            TraceLogEx.Error(string.Format("  cCount:{0}, _ungivecount.Count:{1}, outs.Count:{2}",
            //                  cCount, _ungivecount.Count, _wuser.outs.Count));
            //        }
            //        percent = 100 - percent;//要显示胜率
            //    }
            //    totalbase +=  percent ;
            //}
            //if (totalbase == 0) totalbase = 1;
            //List<CommonPosValSD> _pos2Gold = new List<CommonPosValSD>();
            //foreach(var _wuser in _ungivecount)
            //{  
            //    int percent = -0;
            //    if (_wuser.outs.Count > 0)
            //    {
            //        percent = Convert.ToInt32((_wuser.outs.Count * 1.0) / (52 - _ungivecount.Count * 2 - cCount) * 100); 
            //        percent = 100 - percent;//要显示胜率
            //    }
            //    int correctpercent = Convert.ToInt32(percent * 100.0 / totalbase);
            //    _pos2Gold.Add(new CommonPosValSD() { pos = _wuser._userid, val = correctpercent });
            //}
            //return _pos2Gold;

            List<CommonPosValSD> _pos2percent = new List<CommonPosValSD>();
            var _ungivecount = GetUnGiveupUserList();
            foreach (var _wuser in _ungivecount)
            {
                _pos2percent.Add(new CommonPosValSD() { pos = _wuser._userid, val = (int)_wuser.winpercent });
            }
            return _pos2percent;
        }

        public List<int> Getpotlist()
        {
            List<int> poslist = new List<int>();
            if (_texpotlist != null)
                foreach (var pot in _texpotlist)
                {
                    poslist.Add((int)pot.curallpot);
                }
            return poslist;
        }

        public List<CommonPosValSD> GetPosGoldWin()
        {
            List<CommonPosValSD> _pos2Gold = new List<CommonPosValSD>();
            _myTable.ForeachAllDo((j) =>
            {
                var _wuser = _myTable.GetUserByPosMust(j);
                _pos2Gold.Add(new CommonPosValSD() { pos = _wuser._userid, val = _wuser._goldwin });
            });
            return _pos2Gold;
        }

        public List<CommonPosValSD> GetPos2AllIn()
        {
            List<CommonPosValSD> _allin = new List<CommonPosValSD>();
            _myTable.ForeachAllDo((i) =>
            {
                var _wuser = _myTable.GetUserByPosMust(i);
                _allin.Add(new CommonPosValSD() { pos = _wuser._userid, val = _wuser._allIn ? 1 : 0 });
            });
            return _allin;
        }


        public List<CommonPosValSD> GetPos2GambleTurn()
        {
            List<CommonPosValSD> _pos2gamble = new List<CommonPosValSD>();
            _myTable.ForeachAllDo((i) =>
            {
                var tempUser = _myTable.GetUserByPosMust(i);

                long tgamble = tempUser.GetTurnGamble(_texasTurn);
                if (_texasTurn == TexasTurnEnum.Turn1_0 && tgamble >= pregamble) tgamble -= pregamble;
                _pos2gamble.Add(new CommonPosValSD() { pos = tempUser._userid, val = tgamble });
            });
            return _pos2gamble;
        }

        public List<CommonPosValSD> GetPos2Look()
        {
            List<CommonPosValSD> _allin = new List<CommonPosValSD>();
            _myTable.ForeachAllDo((i) =>
            {
                TexasUser tempUser = _myTable.GetUserByPosMust(i);
                _allin.Add(new CommonPosValSD() { pos = tempUser._userid, val = tempUser._lookcard ? 1 : 0 });
            });
            return _allin;
        }

        /// <summary>
        /// 牌局详情
        /// </summary>
        /// <param name="_tempuser"></param>
        /// <param name="singlegamble"></param>
        /// <param name="actiontype"></param>
        public void LogUserAction(TexasUser _tempuser, long singlegamble, TexasTurnActionEnum actiontype = TexasTurnActionEnum.Init)
        {
            if (_texasTurn == TexasTurnEnum.Init) return;

            List<TexasUser> userlist = new List<TexasUser>();
            _myTable.ForeachAllDo((i) =>
            {
                var _tempuser1 = _myTable.GetUserByPosMust(i);
                if (!_tempuser1.CheckPlaying) return;
                userlist.Add(_tempuser1);
            });

            TexActionSD _turnaction = new TexActionSD();

            //新一轮如果singlegamble == 0
            if (singlegamble == 0 && actiontype != TexasTurnActionEnum.fold) actiontype = TexasTurnActionEnum.Check;
            _turnaction.i = _curTokenCount;
            _turnaction.id = _tempuser._userid;
            _turnaction.pos = _tempuser.pos;
            _turnaction.turn = (int)_texasTurn;

            if (_texasTurn == TexasTurnEnum.Turn1_0) _turnaction.jg = _tempuser._CurrentGold;
            else _turnaction.jg = _alljackpot;
            _turnaction.g = (int)singlegamble;
            if (actiontype == TexasTurnActionEnum.Init)
            {
                TexActionSD lastaction = GetUpperTurnAction();
                if (lastaction != null)
                {
                    var lasttotalgold = _myTable.tableActionlog.Where(t => t.id == lastaction.id).Sum(t => t.g);
                    var totalgold = _myTable.tableActionlog.Where(t => t.id == _tempuser._userid).Sum(t => t.g) + singlegamble;
                    if (totalgold == lasttotalgold)
                    {
                        _turnaction.at = (int)TexasTurnActionEnum.call;//跟
                    }


                    if (_turnaction.at == 0 && singlegamble > lastaction.g)
                    {
                        TexActionSD last2action = GetUpper2TurnAction();

                        if(lastaction!=null && lastaction.at==2) _tempuser.addpoolnum++;
                        if (last2action!=null && last2action.g < lastaction.g)  if (_texasTurn < TexasTurnEnum.Turn2_3) _tempuser.bet3++;
                        if (_texasTurn == TexasTurnEnum.Turn3_4) _tempuser.cbet3++;

                        _turnaction.at = (int)TexasTurnActionEnum.B;//加注 
                    }
                }
                _turnaction.g = (int)singlegamble;
            }
            else _turnaction.at = (int)actiontype;
            if (_tempuser._allIn && actiontype != TexasTurnActionEnum.Ins) _turnaction.at = (int)TexasTurnActionEnum.allin;
            if (_turnaction.at == 0) _turnaction.at = (int)TexasTurnActionEnum.stradlle;

            if(_turnaction.at!= (int)TexasTurnActionEnum.Check && _turnaction.at != (int)TexasTurnActionEnum.sb && _turnaction.at != (int)TexasTurnActionEnum.bb && _turnaction.at != (int)TexasTurnActionEnum.fold) _tempuser.drivingnum++;

            _myTable.tableActionlog.Add(_turnaction);
        }

        /// <summary>
        /// 找到上一个行为
        /// </summary>
        /// <returns></returns>
        private TexActionSD GetUpperTurnAction()
        {
            if (_myTable.tableActionlog == null || _myTable.tableActionlog.Count == 0) return null;
            return _myTable.tableActionlog.Last(t => t.at != (int)TexasTurnActionEnum.fold);
        }
        /// <summary>
        /// 寻找上两个的行为
        /// </summary>
        /// <returns></returns>
        private TexActionSD GetUpper2TurnAction()
        {
            if (_myTable.tableActionlog == null || _myTable.tableActionlog.Count == 0) return null;
            return _myTable.tableActionlog.TakeLast(2).FirstOrDefault(t => t.at != (int)TexasTurnActionEnum.fold);
        }


        public async Task<List<CommonPosValSD>> GetApplyList()
        {
            List<CommonPosValSD> _apply = new List<CommonPosValSD>();
            tuserInfoEx userinfo = await tb_userinfoEx.GetFromCachebyUserID(_myTable._ownerid);
            if (userinfo.applyUsers != null && userinfo.applyUsers.Count > 0)
            {
                foreach (var apply in userinfo.applyUsers)
                {
                    var _user = _myTable.GetBaseUserByID(apply.UserId, true);
                    if (_user != null)
                    {
                        var timespan = apply.intotime.AddSeconds(180) - DateTime.Now;
                        int _atime = (int)timespan.TotalSeconds;
                        _atime = Math.Max(_atime, -1);//时间到了应该要处理
                        _apply.Add(new CommonPosValSD() { pos = _user.pos, val = _atime });
                    }

                };
            }
            return _apply;
        }

        #region insurance 

        public TexasUser GetMaxCardUserCurTurn(List<TexasUser> _tempall)
        {
            if (_tempall.Count < 2) return null;
            List<TexasUser> _maxDrawList = GetMaxCardUserListTurn(_tempall);//有多个人比牌时 找到所有相同最大牌的人
            if (_maxDrawList.Count == 0) return null;
            if (_maxDrawList.Count > 1)
            {
                TraceLogEx.Error("两个人牌一样的保险没有合理处理，暂时不触发保险 正常需要平分一个保险池");
                return null;//暂时不触发保队
            }
            TexasUser _tuser = _maxDrawList[0];
            return _tuser;
        }

        /// <summary>
        /// 特殊处理相同最大牌型的用户
        /// </summary>
        /// <param name="_tempall"></param>
        /// <returns></returns>
        private List<TexasUser> GetMaxCardUserListTurn(List<TexasUser> _tempall)
        {
            List<TexasUser> _maxDrawList = new List<TexasUser>();
            if (_tempall.Count < 2) return _maxDrawList;
            int _tempPos = 0;
            List<int> _maxcard = GetMaxCardTurn(_tempall, out _tempPos);
            for (int i = 0; i < _tempall.Count; i++)
            {
                if (_tempall[i].pos == _tempPos) continue;
                Texas.TexasEnmuResult _result = Texas.ComparePoker(_tempall[i]._maxPaiTurn, _maxcard);
                if (_result == Texas.TexasEnmuResult.Draw)
                {
                    _maxDrawList.Add(_tempall[i]);
                }
            }

            //至少存在一个用户
            for (int i = 0; i < _tempall.Count; i++)
            {
                if (_tempall[i].pos == _tempPos) _maxDrawList.Add(_tempall[i]);//添加回去一起处理
            }
            return _maxDrawList;
        }

        /// <summary>
        /// 找到几个人中最大的牌，可能是相同牌型的
        /// </summary>
        /// <param name="_tempall"></param>
        /// <returns></returns>
        private List<int> GetMaxCardTurn(List<TexasUser> _tempall, out int pos)
        {
            pos = 0;
            if (_tempall.Count == 0) return new List<int>();
            List<int> _maxcard = _tempall[0]._maxPaiTurn;
            pos = _tempall[0].pos;
            for (int i = 0; i < _tempall.Count; i++)
            {
                Texas.TexasEnmuResult _result = Texas.ComparePoker(_tempall[i]._maxPaiTurn, _maxcard);
                if (_result == Texas.TexasEnmuResult.Win)
                {
                    _maxcard = new List<int>(_tempall[i]._maxPaiTurn);
                    pos = _tempall[i].pos;
                }
            }
            return _maxcard;
        }

        public void CollectInsMinePot(List<TexasUser> _tempall)
        {
            List<int> tcommoncard = new List<int>();
            for (int i = 0; i < _fiveCommonCard.Count; i++)
            {
                if (i == 3 && _texasTurn == TexasTurnEnum.Turn2_3) break;//还没有发第5张公牌的时候
                if (i == 4 && _texasTurn == TexasTurnEnum.Turn3_4) break;
                tcommoncard.Add(_fiveCommonCard[i]);
            }

            foreach (var tempUser in _tempall)
            {
                if (tempUser._isgiveup) continue;
                tempUser._maxPaiTurn = Texas.GetFiveFromSeven(tempUser._shouPaiArr, tcommoncard, tcommoncard.Count + 2);//未分配的牌组合最大牌 
                if (tempUser.mpot != 0) continue;
                tempUser.mpot = (int)GetOwnPot(tempUser);
                tempUser.mpot31 = (int)GetOwnPot31(tempUser);
                tempUser.mpot32 = (int)GetOwnPot32(tempUser);
            }
        }

        /// <summary>
        /// 分池的补牌  要单独计算
        /// ABC 1.A的gold最少，胜率最大。【B的胜率第二大，需要能触发保险】 2.A的gold最大，胜率最大【BC金币不一样多】，有两个保险池可选。 3
        /// </summary>
        /// <param name="tlist"></param>
        /// <param name="maxuser"></param>
        public TexasUser CollectOuts(List<TexasUser> tlist, TexasUser maxuser)
        {
            if (tlist.Count < 2 || tlist.Count > 3) return null;
            List<int> delcard = new List<int>();
            _myTable.ForeachAllDo((i) =>
            {
                TexasUser tempUser = _myTable.GetUserByPosMust(i);
                if (tempUser._isgiveup) return;
                if (tempUser._shouPaiArr.Count == 0) return;
                delcard.AddRange(tempUser._shouPaiArr);
            });
            List<int> tcommoncard = new List<int>();
            for (int i = 0; i < _fiveCommonCard.Count; i++)
            {
                if (i == 3 && _texasTurn == TexasTurnEnum.Turn2_3) break;//还没有发第5张公牌的时候
                if (i == 4 && _texasTurn == TexasTurnEnum.Turn3_4) break;//TexasTurnEnum.Turn3_4
                tcommoncard.Add(_fiveCommonCard[i]);
            }
            delcard.AddRange(tcommoncard);

            List<TexasUser> sec_userlist = new List<TexasUser>();

            foreach (var tempUser in tlist)
            {
                if (tempUser.pos == maxuser.pos) continue;
                sec_userlist.Add(tempUser);
            }

            foreach (var tempUser in tlist)
            {
                if (tempUser._shouPaiArr.Count == 0) continue;
                List<int> _dcard = new List<int>();
                if (tempUser.pos == maxuser.pos)
                {
                    if (sec_userlist.Count > 1)
                    {//最大牌型的人才需要 计算补牌数 1对2是需要累加
                        List<int> alloust = new List<int>();
                        foreach (var ttu in sec_userlist)
                        {
                            List<int> tempouts = Texas.GetOutsList(tempUser._shouPaiArr, ttu._shouPaiArr, _fiveCommonCard, (int)_texasTurn, delcard, out _dcard);
                            foreach (int _c in tempouts)
                            {
                                if (!alloust.Contains(_c)) alloust.Add(_c);
                            }
                        }
                        tempUser.outs31 = new List<int>(alloust);
                    }
                    else
                    {
                        tempUser.outs31 = Texas.GetOutsList(tempUser._shouPaiArr, sec_userlist[0]._shouPaiArr, _fiveCommonCard, (int)_texasTurn, delcard, out _dcard);
                    }
                }
                else
                {
                    tempUser.outs31 = Texas.GetOutsList(tempUser._shouPaiArr, maxuser._shouPaiArr, _fiveCommonCard, (int)_texasTurn, delcard, out _dcard);
                }
                tempUser.douts31 = new List<int>(_dcard);
                double _winpercent = Convert.ToInt32((tempUser.outs31.Count * 1.0) / (52 - tlist.Count * 2 - tcommoncard.Count) * 100);
                if (_winpercent > 100)
                {
                    _winpercent = 100;
                    TraceLogEx.Error(string.Format("  cCount:{0}, _ungivecount.Count:{1}, outs.Count:{2}",
                          tcommoncard.Count, tlist.Count, tempUser.outs31.Count));
                }
                tempUser.winpercent = 100 - _winpercent;//要显示胜率

                if (tempUser.outs31.Count != 0)
                {//计算出来后 前3张或前4张 表示一家稳赢了就不会出保险  oust数可能为0
                    if (_texasTurn == TexasTurnEnum.Turn2_3)
                        tempUser.insRate31 = Texas.GetRatebyCount(tempUser.outs31.Count);
                    else if (_texasTurn == TexasTurnEnum.Turn3_4)
                        tempUser.insRate41 = Texas.GetRatebyCount(tempUser.outs31.Count);
                }
            }
            maxuser._ilist31 = GetDynamicIns31(maxuser);
            #region 2人胜率显示处理
            if (tlist.Count == 2)
            {
                foreach (var tempUser in tlist)
                {
                    if (tempUser.pos == maxuser.pos) continue;
                    tempUser.winpercent = 100 - maxuser.winpercent;
                }
            }
            #endregion
            #region 分池保险处理
            if (tlist.Count == 3 && sec_userlist.Count == 2 && _texpotlist.Count > 1)
            {   //一定是3个人  
                if (_texpotlist != null)
                {
                    if (_texpotlist[1].poslist.Contains(maxuser._userid))
                    {
                        if (maxuser.mpot32 > 0)
                        {
                            #region 32
                            TexasUser compareUser = null;
                            foreach (var userid in _texpotlist[1].poslist)
                            {
                                TexasUser tempUser = _myTable.GetUserByID(userid);
                                if (tempUser._shouPaiArr.Count == 0 || tempUser._isgiveup) continue;
                                if (tempUser._userid != maxuser._userid) compareUser = tempUser;

                            }

                            foreach (var userid in _texpotlist[1].poslist)
                            {
                                TexasUser tempUser = _myTable.GetUserByID(userid);
                                if (tempUser._shouPaiArr.Count == 0 || tempUser._isgiveup) continue;
                                List<int> _dcard = new List<int>();
                                if (tempUser._userid == maxuser._userid)
                                {
                                    maxuser.outs32 = Texas.GetOutsList(tempUser._shouPaiArr, compareUser._shouPaiArr, _fiveCommonCard, (int)_texasTurn, delcard, out _dcard);
                                    maxuser.douts32 = new List<int>(_dcard);
                                    if (maxuser.outs32.Count > 14 || maxuser.outs32.Count < 1)
                                    {
                                        ////maxuser.outs32 = new List<int>();
                                        ////maxuser.douts32 = new List<int>();
                                    }
                                    else
                                        maxuser._ilist32 = GetDynamicIns32(maxuser);
                                }
                            }
                            #endregion
                        }
                    }
                }

                bool _open32 = false;
                if (_texpotlist != null)
                {
                    if (_texpotlist.Count == 3 && !_texpotlist[1].poslist.Contains(maxuser._userid)) _open32 = true;
                    if (_texpotlist.Count == 2 && _texpotlist[1].poslist.Count == 2 && !_texpotlist[1].poslist.Contains(maxuser._userid)) _open32 = true;
                }
                if (_open32)
                {
                    TexasUser _maxuser32 = GetMaxCardUserCurTurn(sec_userlist);
                    if (_maxuser32 != null && _maxuser32.mpot32 > 0)
                    {
                        _maxuser32.ResetIns();
                        TexasUser _minuser32 = null;
                        foreach (var tempUser in sec_userlist)
                        {
                            if (tempUser.pos != _maxuser32.pos) _minuser32 = tempUser;
                        }

                        foreach (var tempUser in sec_userlist)
                        {
                            if (tempUser._shouPaiArr.Count == 0 || tempUser._isgiveup) continue;
                            List<int> _dcard = new List<int>();
                            if (tempUser.pos == _maxuser32.pos)
                            {
                                _maxuser32.outs32 = Texas.GetOutsList(tempUser._shouPaiArr, _minuser32._shouPaiArr, _fiveCommonCard, (int)_texasTurn, delcard, out _dcard);
                                _maxuser32.douts32 = new List<int>(_dcard);
                                if (_maxuser32.outs32.Count > 14 || _maxuser32.outs32.Count < 1)
                                {
                                    ////_maxuser32.outs32 = new List<int>();
                                    ////_maxuser32.douts32 = new List<int>();
                                }
                                else
                                    _maxuser32._ilist32 = GetDynamicIns32(_maxuser32);
                                return _maxuser32;
                            }
                        }

                    }
                }
            }
            #endregion
            return null;
        }

        public bool InsuranceWinOuts(TexasUser tuser, TexasTurnEnum _turn, int _31or32)
        {//当前这轮跟其他玩家比牌大小  
            if (_31or32 == 31)
            {
                if (tuser.outs31 == null) return false;
                int _c = 0;
                if (_turn == TexasTurnEnum.Turn3_4)
                {
                    _c = _fiveCommonCard[3];
                }
                if (_turn == TexasTurnEnum.Turn4_5)
                {
                    _c = _fiveCommonCard[4];
                }
                if (tuser.outs31.Contains(_c)) return true;//输了表示 保险中了
                else return false;
            }
            if (_31or32 == 32)
            {
                if (tuser.outs32 == null) return false;
                int _c = 0;
                if (_turn == TexasTurnEnum.Turn3_4)
                {
                    _c = _fiveCommonCard[3];
                }
                if (_turn == TexasTurnEnum.Turn4_5)
                {
                    _c = _fiveCommonCard[4];
                }
                if (tuser.outs32.Contains(_c)) return true;//输了表示 保险中了
                else return false;
            }
            return false;
        }
        #endregion 

        /// <summary>
        /// 获取收税配置
        /// </summary>
        /// <param name="pcount"></param>
        /// <returns></returns>
        public taxconfig_tex GetThisGametax(int pcount)
        {
            int pnum = 2;
            if (pcount >= 2 && pcount <= 4) pnum = 1;
            if (_baseGamle <= 200) pnum = 0;//<= 200没有人数限制
            return Texas.initializTax().Where(t => t.Gamle <= _baseGamle && t.pnum == pnum).OrderByDescending(t => t.Gamle).FirstOrDefault();
        }

    }

    public enum TexasTurnEnum
    {
        Init = -1,
        /// <summary>
        /// 盲注阶段 手牌数为0--小盲当庄：自动压FJ低分的一分 大盲为小盲的下家 
        /// </summary>
        Turn1_0 = 1,
        /// <summary>
        /// 手牌数为2 公牌为数为3 有算法的地方也了固定值
        /// </summary>
        Turn2_3 = 2,
        /// <summary>
        /// 公牌为4
        /// </summary>
        Turn3_4 = 3,
        /// <summary>
        /// 公牌为5
        /// </summary>
        Turn4_5 = 4,
        /// <summary>
        /// 比牌状态了
        /// </summary>
        TurnCompare = 5,
    }

    /// <summary>
    /// type  sb小盲 bb大盲 s：stradlle c call跟 f fold弃 A allin  X让牌  
    /// B是1/2（加注  前段计算加注轮数） 弃:（3B是大的2/3  R 加注 1）
    /// </summary>
    public enum TexasTurnActionEnum
    {
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
        /// 加注操作
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

    public class TexasJackpot
    {
        public long gamble;
        /// <summary>
        /// 有效奖池特殊变量 抽水使用
        /// </summary>
        public long e_curallpot;
        public long curallpot;
        public List<int> poslist;
    }
}
