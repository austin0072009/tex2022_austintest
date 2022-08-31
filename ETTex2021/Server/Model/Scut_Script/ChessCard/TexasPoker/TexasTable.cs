using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Common.Serialization;
using ETModel.Script.Model;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace ETModel.Script.CsScript.Action
{
    /// <summary>
    ///  虚拟桌子 庄按顺时针顺庄  Token顺序也是顺时针
    /// </summary>
    public partial class TexasTable : ChessCardTable
    {
        public TexasTable()
        {
            openplay = true;
        }
        private TexasSendDataServer _senddataserver;

        public int _bankpos; // 庄的位置 
        /// <summary>
        /// 此桌对应的打牌裁判
        /// </summary>
        public TexasJudge _judge;
        public TexasLobby _lobby;
        /// <summary>
        /// 一局小结算
        /// </summary>
        public List<TexTInfoSD> tableloglist;
        /// <summary>
        /// 小结算详情
        /// </summary>
        public List<TexActionSD> tableActionlog;
        /// <summary>
        /// 一桌的全部保险池的贡献
        /// </summary>
        public int tableInsurance;

        /// <summary>
        /// 上局所有人的手牌 强制秀牌使用
        /// </summary>
        public ConcurrentBag<CommonPosValListSD> allshoucard;

        /// <summary>
        /// 申请带出的玩家信息
        /// </summary>
        public ConcurrentDictionary<int, long> applytogold;

        public Queue<int> _com_cardLeft;
        /// <summary>
        /// 保险专用的Token
        /// </summary>
        public int _InsTokenPos;

        public string _vStatus;

        /// <summary>
        /// 临时保存 被踢得桌子
        /// </summary>
        public List<int> KickUser;

        /// <summary>
        /// 是否控制带入
        /// </summary>
        public bool cinto;

        /// <summary>
        ///  游戏开关  true游戏   false游戏暂停中
        /// </summary>
        public bool openplay;
         

        public int competeid;

        public int _PlayTimes;
        /// <summary> 当前等级(比赛场专用) </summary>
        public int level;
        /// <summary> 最小等级(比赛场专用) </summary>
        public int min_level;
        /// <summary> 最大等级(比赛场专用) </summary>
        public int max_level;
        /// <summary> 比赛名称(比赛场专用) </summary>
        public string name;

        /// <summary>
        /// 进入三个人后处理的
        /// </summary> 
        public TexasTable(int gameid, BaseRoom _room2, int tid, cs_createtable_tex _data, int ownerid, int minPlayerCount, string ctime)
        {  
            _lobby = TexasLobby.instance;
            _tableid = tid;
            KickUser = new List<int>();
            tname = _data.tname;
            cinto = _data.cinto;
            _bankpos = 1;
            tableInsurance = 0;
            _ownerid = ownerid;
            applytogold = new ConcurrentDictionary<int, long>();
            _senddataserver = TexasSendDataServer.instance;
            openplay = true;
            _judge = new TexasJudge(this);
            _judge.InitiArgs(_data);

            _num_max = _data.manNum;
            _num_min = 2;
            _num_start = 2;
            IsRemoveWatch = false;
            clubidx = _judge.clubidx;
            baserate = _judge._baseGamle;
            if (minPlayerCount >= 2 && minPlayerCount <= 9)
                _judge._minPlayer = minPlayerCount;
            tableloglist = new List<TexTInfoSD>();
            tableActionlog = new List<TexActionSD>();
            allshoucard = null;
            base._gametype = _judge._gametype;
            _tableMaxCount = _judge.GetTableorBankerMaxCount;
            base._turnWaitTime = 15;

            ConcurrentDictionary<int, BaseUser> _temppos2user = new ConcurrentDictionary<int, BaseUser>();
            base.Initi(_temppos2user, _room2, _judge._minPlayer, _judge.manNum, gameid, _senddataserver, DoTableTimer);
            base.EnterTableNotice(true);

            _strStatus = "TexasTable...1";
            GetSupperLea();
            createTime = Convert.ToDateTime(ctime);
            RemoveExpireApply();
        }

        #region Tools 方法  
        public void ForeachAllDo(Action<int> match)
        {
            if (_DicPos2User == null)
            {
                TraceLogEx.Error("201611151415tex fetal error  _DicPos2User is null.............................");
                return;
            }
            if (match == null) return;
            foreach (int key in _DicPos2User.Keys)
            {
                match(key);
            }
        }
        private int FindWatchKey(bool _force)
        {
            int key = -1;
            for (int i = _num_max + 9; i <= _num_max * _judge._maxPlayer + 9; i++)
            {
                if (_DicPos2UserWatch.ContainsKey(i)) continue;
                key = i;
                break;
            }
            if (_force && key == -1)
            {//强制找一个位置
                key = 1 + _DicPos2UserWatch.Keys.Max();
            }
            return key;
        }

        /// <summary>
        /// 获取此桌中指定用户ID的对象
        /// </summary>
        /// <param name="userID"></param>
        /// <returns></returns>
        public TexasUser GetUserByID(int userID)
        {
            var cuser = TryGetBaseUserByIDFromBaseAndWatch(userID, false);
            if (cuser == null) return null;
            return cuser as TexasUser;
        }

        /// <summary>
        /// 获取此桌中指定用户ID的对象
        /// </summary>
        /// <param name="userID"></param>
        /// <returns></returns>
        public TexasUser GetUserByIDTry(int userID)
        {
            var cuser = TryGetBaseUserByIDFromBaseAndWatch(userID, true);
            if (cuser == null) return null;
            return cuser as TexasUser;
        }

        public TexasUser GetUserByPosMust(int pos)
        { 
            var _tempUser = GetBaseUserByPos(pos);
            if (_tempUser == null) return null;
            return _tempUser as TexasUser;
        }

        public TexasUser GetUserByPosALL(int key)
        {
            if (_DicPos2User == null)
            {
                TraceLogEx.Error("201909281512tex  _DicPos2User == null fetal Error 运行正常后去掉 key:" + key);
                return null;
            }
            if (_DicPos2User.ContainsKey(key)) return _DicPos2User[key] as TexasUser;
            if (_DicPos2UserWatch != null)
            {
                if (_DicPos2UserWatch.ContainsKey(key)) return _DicPos2UserWatch[key] as TexasUser;
            }
            TraceLogEx.Error("202103121513tex fetal Error 必需处理 GetUserByPosALL...  key:" + key);
            return null;
        }

        public TexasUser GetBaseUserInWatch(int key)
        {
            if (_DicPos2UserWatch == null)
            {
                TraceLogEx.Error("201909281512tex  _DicPos2UserWatch == null fetal Error 运行正常后去掉 key:" + key);
                return null;
            }
            if (_DicPos2UserWatch.ContainsKey(key)) return _DicPos2UserWatch[key] as TexasUser;
            TraceLogEx.Error("201909281513tex fetal Error 必需处理 GetBaseUserInWatch...  key:" + key);
            return null;
        } 

        /// <summary>
        /// 大小盲注特殊用到的  
        /// </summary>
        /// <param name="tpos"></param>
        /// <returns></returns>
        public int GetNextPosTry(int tpos)
        {
            int _tempTokenPos = tpos;
            TexasUser _tempuser = _DicPos2User.ContainsKey(_tempTokenPos) ? _DicPos2User[_tempTokenPos] as TexasUser : null;
            int num = 0;
            do
            {
                if (_tempTokenPos < 1)
                {
                    _tempTokenPos = _num_max;
                }
                else
                {
                    _tempTokenPos--;
                }
                _tempuser = _DicPos2User.ContainsKey(_tempTokenPos) ? _DicPos2User[_tempTokenPos] as TexasUser : null;
                num++;
                if (num > 10)
                {
                    _tempTokenPos = 10;
                    break;
                }
            }
            while (!_DicPos2User.ContainsKey(_tempTokenPos) || _tempuser.jump1_wait2_big3 > 0);//中间有空位，要跳过

            return _tempTokenPos;
        }

        public int GetNextPosOnlySmall(int tpos)
        {
            int _tempTokenPos = tpos;

            TexasUser _tempuser = null;
            int num = 0;
            do
            {
                if (_tempTokenPos < 1)
                {
                    _tempTokenPos = _num_max;
                }
                else
                {
                    _tempTokenPos--;
                }
                _tempuser = _DicPos2User.ContainsKey(_tempTokenPos) ? _DicPos2User[_tempTokenPos] as TexasUser : null;
                num++;
                if (num > 10)
                {
                    _tempTokenPos = 10;
                    break;
                }
            }
            while (!_DicPos2User.ContainsKey(_tempTokenPos) || _tempuser.jump1_wait2_big3 > 0);//中间有空位，要跳过

            return _tempTokenPos;
        }

        /// <summary>
        /// 大小盲注特殊用到的  
        /// </summary>
        /// <param name="tpos"></param>
        /// <returns></returns>
        public int GetNextPos(int tpos)
        {
            int _tempTokenPos = tpos;

            TexasUser _tempuser = _DicPos2User[_tempTokenPos] as TexasUser;
            int _loopCount = 0;
            do
            {
                _loopCount++;
                do
                {
                    if (_tempTokenPos < 1)
                    {
                        Interlocked.Exchange(ref _tempTokenPos, _num_max);//就是_userTokenPosition = _num_max;的效果
                    }
                    else
                    {
                        Interlocked.Decrement(ref _tempTokenPos);//就是_userTokenPosition--;的效果 
                    }
                }
                while (!_DicPos2User.ContainsKey(_tempTokenPos));//中间有空位，要跳过
                if (_loopCount > _judge._maxPlayer * 2)
                {
                    TraceLogEx.Error("201208221538tex fetal Error 必需处理   _loopCount:" + _loopCount);

                    SetTableStatus(process_tex.sc_end_tex_n_pre);//直接结算
                    break;
                }
                _tempuser = _DicPos2User[_tempTokenPos] as TexasUser;
            }
            while (_tempuser._isgiveup || _tempuser._inseatcannotplay); //allin的人， 弃牌的人
            return _tempTokenPos;
        }
          
        #endregion 

        public void MoveTokenIndex()
        {
            try
            {
                TexasUser _tempuser = _DicPos2User.ContainsKey(_userTokenPos) ? _DicPos2User[_userTokenPos] as TexasUser : null;
                int _loopCount = 0;
                do
                {// 2,3,4轮都是由小盲注开始Token
                    _loopCount++;
                    if (_judge.oneturnbegin)
                    {//第四轮开始token给 显示的6张中大最大的人
                        _judge.oneturnbegin = false;
                        _userTokenPos = _bankpos;
                    }

                    MoveTokenClockwise();
                    if (_loopCount > _judge._maxPlayer * 2)
                    {
                        TraceLogEx.Error("201208221538tex fetal Error 必需处理   _loopCount:" + _loopCount);
                        SetTableStatus(process_tex.sc_end_tex_n_pre);//直接结算
                        break;
                    }
                    _tempuser = _DicPos2User.ContainsKey(_userTokenPos) ? _DicPos2User[_userTokenPos] as TexasUser : null;
                }
                while (_tempuser == null || _tempuser._isgiveup || _tempuser._allIn); //allin的人， 弃牌的人 
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "201208221538tex fetal Error 必需处理   _loopCount:");
                SetTableStatus(process_tex.sc_end_tex_n_pre);//直接结算 
            }
        }

        /// <summary>
        /// 进入桌子房间模式的 旁观 模式
        /// </summary>
        /// <param name="userid"></param>
        public async Task<int> EnterTableWatch(tUser tbUser)
        {
            RemoveKeepSeatOver();
            if (_DicPos2UserWatch.Count + _DicPos2User.Count >= _num_max * 4) return -1; //最大允许4倍的人数旁观 //不限制客户端的个数 可能 有破坏的外挂 
            TexasUser myu = new TexasUser();
            await myu.InitiChess(_gameid, _levelid, tbUser, 0, typeof(TexasRobot), IsSupper ? myu.clubidx : _judge.clubidx);
            myu._tableid = _tableid;
            int key = FindWatchKey(false);
            if (key == -1)
            {
                TraceLogEx.Error("201908292220tex fetal error!!!");
                return -1;
            } 
            _DicPos2UserWatch.TryAdd(key, myu);
            ////base.InitiAdd(key, myu as BaseUser);
            myu._inwatch = true;
            myu.pos = key;
            await  myu.SetStatus(UserStatusEnum.InTableWaiting, _gameid, _levelid, _tableid);  //只修改指定的人的状态   
            return 1;
        }

        /// <summary>
        /// 进入桌子房间模式的 旁观模式 user对象存在的情况
        /// </summary>
        /// <param name="userid"></param>
        public async ETTask< bool> EnterTableWatchRe(TexasUser myu, tUser tbUser)
        {
            RemoveKeepSeatOver();
            await myu.InitiChess(_gameid, _levelid, tbUser, 0, typeof(TexasRobot), myu.clubidx);//带入限制
            myu._tableid = _tableid; 
            myu._watchandoff = false;
            await myu.SetStatus(UserStatusEnum.InTableWaiting, _gameid, _levelid, _tableid);  //只修改指定的人的状态  
            if (CheckUserIDExitsSeat(myu._userid))
            {
                myu._inwatch = false;   //回桌特殊处理
                myu._inseatcannotplay = true;
                myu._isgiveup = true;
            }
            else
            {
                myu._inwatch = true; 
            }
            return true;
        }


        /// <summary>
        ///
        /// </summary>
        /// <param name="userid"></param>
        /// <returns></returns>
        public async Task<int> SitDownWaitUp(int userid)
        {
            var myu = GetUserByID(userid);
            if (myu == null) return 0;


            if (!CheckUserIDExitsSeat(userid)) return -4;//-4 未占座 
            myu._applyedKeep = false;

            int tkey = myu.pos;
            myu._isDisconnet = false;//申请坐下表示在线了 不知原因的断线重连的时候未处理成功 这个是patch
            myu._watchandoff = false;//申请坐下表示在线了 不知原因的断线重连的时候未处理成功 这个是patch 

            await _room.ReSetUserStatusBase(myu._userid);

            if (_WaitSitdownUser != null) _WaitSitdownUser.RemoveByID(myu._userid);
            //if (_tablestatus != TableStatusEnum.Playing) BaseUserMove2Watch(myu);
            if (!myu._isPlaying) BaseUserMove2Watch(myu);


            myu._tbwechatposData.pos = myu.pos;
            myu._tbwechatposData.isDis = myu._isDisconnet ? 1 : 0;
            myu._tbwechatposData.isR = myu._isReady ? 1 : 0;
            myu._tbwechatposData.isW = 3;//==================3 表示不占座
            myu._tbwechatposData.isK = 0;
            myu._tbwechatposData.py.gold = myu._CurrentGold;
            myu.RecordExitTime(_tableid, true);
            List<CommonPosValSD> _id2keep = new List<CommonPosValSD>();
            ForeachAllDo((i) =>
            {
                BaseUser tempUser = _DicPos2User[i];
                _id2keep.Add(new CommonPosValSD() { pos = tempUser._userid, val = tempUser._keepseat });
            });

            List<UserIDMSG> imList = new List<UserIDMSG>();
            ForeachBaseAndWatch((_user) =>
            {
                TexasUser tempUser = _user as TexasUser;
                sc_sitdownwaitup_tex_n _entertable = new sc_sitdownwaitup_tex_n() { result = 1 };
                _entertable.pos = tempUser.pos;
                _entertable.tpos = myu.pos;
                _entertable.user = myu._tbwechatposData;
                _entertable.id2keep = _id2keep;

                imList.Add(new UserIDMSG(tempUser._userid, _entertable, tempUser._isRobot, tempUser.NoPushMessage, tempUser._msgid));
            });
            _bsDataServer.SendDataDelay(imList);
            //_tableEnterSendData.Add(imList);                   
            return 1;
        }
        public async Task<int> SitDownCompete(int userid, int score)
        {
            int issitdown;
            if (IsSitDown(userid, out TexasUser myu, out int seat, out bool IsInSeat)) issitdown = 1;
            else if (!_DicPos2UserWatch.TryGetUserByID(userid, out myu)) return -1;
            else
            {
                seat = GetUserKey(myu);
                if (seat <= 0) return -2;
                else issitdown = base.Sitdown(userid, seat, _tablestatus == TableStatusEnum.Playing);
            }
            if (issitdown == 1) { myu._CurrentGold = score; await SendSitDownNotice(myu, true, IsInSeat); }
            else Console.WriteLine("游戏[" + _gameid + "]房间[" + _tableid + "]玩家[" + userid + "]坐下失败");
            return -3;
        }

        public bool CheckSeatEmpty(int pos, int userid)
        {
            if (pos > 0 && _DicPos2User.ContainsKey(pos))
            {
                var user = _DicPos2User[pos] as TexasUser;
                if (user._userid != userid && !user._delaytoEnd) return false;//-4 位置已被占用
            }
            if (pos > 0 && _WaitSitdownUser != null && (_WaitSitdownUser.GetUserByID(userid, true, true) == null) && _WaitSitdownUser.ContainsKey(pos)) return false;
            return true;
        }

        /// <summary>
        /// 金币带入并坐下 自动分配位置 如果有的话
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="intogold"></param>
        /// <param name="pos">0表示机器人自己安排位置 </param>
        /// <param name="iskeep">1表示回桌</param>
        /// <returns></returns>
        public async Task<int> SitDown(int userid, int intogold, int cidx, string pas, int pos = 0, int iskeep1 = 0)
        {
            var myu = GetUserByID(userid);
            if (myu == null) return 0;

            myu.addgold = 0;//需要重置
            myu._applyedKeep = false;
            if (pos > 0 && pos > _num_max) return 0;

            //判断GPS距离
            if (_judge.gps == 1 && myu._tbUser.isRobot == 0 && myu._tbUser.lat != 0 && myu._tbUser.lng != 0 && myu._tbUser.vlevel <= 1)
            {
                bool _havesamegps = base.CheckGPS(myu, _judge.password != "");
                if (_havesamegps) return -98;
            }

            if (_judge._endtime != DateTime.MinValue && !myu._palyedgame && _judge._endtime.AddMinutes(-5) <= DateTime.Now) return -95;
            if (_judge.ip.Equals(1) && myu._tbUser.vlevel <= 1 && string.IsNullOrEmpty(_judge.password)) if (NotifyWarning(myu._tbUser)) return -98;
            var iskeep = CheckUserIDExitsSeat(userid) ? 1 : 0;


            bool autoback = intogold == 0;//回桌金币是0

            if (!string.IsNullOrEmpty(_judge.password) && !_judge.CheckPassword(myu, pas)) return -9;// 密码验证 

            if (_judge.Inflow != 0 && await myu.CheckAddRate(_judge.Inflow))
            {
                await SitDownWaitUp(userid);
                return -97;//入池率不足够 
            }
            //if (myu.clubidx != 0 && myu.clubidx != cidx) return -10;//不能选择其他club

            if (myu.IsSettle) return -18;

            tclub club = await BaseHelper.GetShare<tclub>(myu.clubidx);
            if (club != null && club.losemax != 0 && intogold != 0)
            {
                var totalbanlence = club.gold + club.childs.Sum(t => t.cgold) - intogold;

                if (club.losemax > totalbanlence)
                {
                    await SitDownWaitUp(userid);//交收ing
                    return -12;
                }
            }


            //修改坐下的逻辑 
            long user_maxgold = await myu._ClubGold(IsSupper);
            long tempGold = myu._CurrentGold;
            if (myu._tbUser.isRobot == 1)
            {
                user_maxgold = myu._tbUser.GetGoldAndWinGold;
            }
            if (intogold == 0 && (tempGold >= _judge._baseGamle * 5))
            {
                intogold = (int)tempGold;//自动坐下带入之前的值  
            }
            if (intogold < _judge._baseGamle * 5)
            {
                return -1; //金币不够
            }

            var seatEm = CheckSeatEmpty(pos, userid);
            if (!seatEm) return -4;//-4 位置已被占用
            int key = -1;
            if (pos == 0)
            {
                key = FindKey();
                if (key == -1)
                {
                    TraceLogEx.Error("201908061612 sitdown fail error!!!");
                    return -2;
                }
            }
            else key = pos;

            int wkey = myu.pos;
            if (!autoback)
            {//手动带入 需要扣金币
                if (user_maxgold < intogold || intogold < _judge.GetMinGoldLimit())
                {
                    return -1;//带入不足
                }
                if (intogold > _judge._baseGamle * 100000)
                {
                    return -99;//带入超过上限
                }
                await myu.UpdateGold(intogold, false);//带入就去掉 一桌完了返回 myu._tbUser.Gold -= intogold;
                if (myu.GoldOut >= intogold) myu.GoldOut -= intogold;
                myu.GoldAdd(intogold);
                myu._goldIntoHistory += intogold;//累计带入在这儿处理   
                myu.tex_intogold += intogold;
                if (!IsSupper) myu.WriteGoldChangeLog(-intogold, 33, _tableid.ToString(), true);//记录日志33:房间带入;34:带入返还
                else myu.WriteUserClubgoldLog(user_maxgold - intogold, 7, _lobby._gameid, "", intogold, myu.clubidx);
            }
            // myu.Initi(_gameid, _roomid, myu._tbUser, myu._tbUser.isRobot == 1, intogold);
            myu._isDisconnet = false;//申请坐下表示在线了 不知原因的断线重连的时候未处理成功 这个是patch
            myu._watchandoff = false;//申请坐下表示在线了 不知原因的断线重连的时候未处理成功 这个是patch 

            if (!myu._isRobot) myu.SetTimeOutActionEx(0, "");
            await _room.ReSetUserStatusBase(myu._userid);
            myu.pos = key;
            bool removewatch = key > 0 && !_DicPos2User.ContainsKey(key);

            if (await AllocationtoTable(myu, false, removewatch))
            {
                await SendSitDownNotice(myu, removewatch);
                return 1;
            }
            else return -4;
        }
        /// <summary> 发送玩家坐下通知 </summary>
        public async ETTask SendSitDownNotice(TexasUser myu, bool removewatch, bool OnlySendSelf = false)
        {
            if (removewatch) _DicPos2UserWatch.RemoveByID(myu._userid);
            else if (!OnlySendSelf) _WaitSitdownUser.Add(myu.pos, myu);//加入到Wait等待入座

            myu._tbwechatposData.pos = myu.pos;
            myu._tbwechatposData.isDis = myu._isDisconnet ? 1 : 0;
            myu._tbwechatposData.isR = myu._isReady ? 1 : 0;
            myu._tbwechatposData.isW = myu.CheckisWatch() ? 1 : 0;
            myu._tbwechatposData.isK = 0;
            myu._tbwechatposData.py.gold = myu._CurrentGold;
            myu._tbwechatposData.py.recount = await Overduehandle(myu);
            myu._tbwechatposData.py._vlv = myu._userinfo.vipLv;
             

            myu.RecordExitTime(_tableid, true);

            if (myu._CurrentGold + myu.addgold > 0)
            {
                base.Gold2RedisUser(myu);
            }
            List<CommonPosValSD> _id2keep = new List<CommonPosValSD>();
            ForeachWaitSit((_tempuser) =>
            {
                _id2keep.Add(new CommonPosValSD() { pos = _tempuser._userid, val = _tempuser._keepseat });
            });
            ForeachAllDo((i) =>
            {
                BaseUser tempUser = _DicPos2User[i];
                if (tempUser != null && _id2keep.Any(t => t.pos == tempUser._userid)) return;
                _id2keep.Add(new CommonPosValSD() { pos = tempUser._userid, val = tempUser._keepseat });
            });

            List<UserIDMSG> imList = new List<UserIDMSG>();
            List<UserIDMSG> remarklist = new List<UserIDMSG>();

            ForeachWaitSit((_tempuser) =>
            {
                tuserInfoEx userinfoex = _tempuser._userinfo;
                _tempuser._tbwechatposData.py.uremark = null;

                int isw = _tempuser.CheckisWatch() ? 1 : _tempuser._tbwechatposData.isW; //2 是申请中   
                _tempuser._tbwechatposData.isW = isw;
                _tempuser._tbwechatposData.isK = _tempuser._keepseat;
                _tempuser._tbwechatposData.pos = _tempuser.pos;

                sc_sitdown_tex_n _entertable = new sc_sitdown_tex_n() { result = 1 };
                _entertable.pos = _tempuser.pos;
                _entertable.tpos = myu.pos;
                _entertable.user = myu._tbwechatposData;
                _entertable.id2keep = _id2keep;

                imList.Add(new UserIDMSG(_tempuser._userid, _entertable, _tempuser._isRobot, _tempuser.NoPushMessage, _tempuser._msgid));

                if (userinfoex.Userremark != null && userinfoex.Userremark.Count > 0)
                {
                    var remark = userinfoex.Userremark.Find(t => t.userid == myu._userid);
                    if (remark != null && remark.userid != userinfoex.UserID)
                    {
                        sc_refreshtableuser_n fuser = new sc_refreshtableuser_n() { result = 1, cc = 0 };
                        fuser.user = myu._tbwechatposData;
                        fuser.Ur = remark;
                        remarklist.Add(new UserIDMSG(_tempuser._userid, fuser, false, false, _tempuser._msgid));
                    }
                }
            });

            ForeachBaseAndWatch((_user) =>
            {
                TexasUser tempUser = _user as TexasUser;
                tuserInfoEx userinfoex = tempUser._userinfo;
                if (tempUser != null && imList.Any(t => t._userid == tempUser._userid)) return;

                myu._tbwechatposData.py.uremark = null;
                sc_sitdown_tex_n _entertable = new sc_sitdown_tex_n() { result = 1 };
                _entertable.pos = tempUser.pos;
                _entertable.tpos = myu.pos;
                _entertable.user = myu._tbwechatposData;
                _entertable.id2keep = _id2keep;
                if (!OnlySendSelf || tempUser._userid == myu._userid) imList.Add(new UserIDMSG(tempUser._userid, _entertable, tempUser._isRobot, tempUser.NoPushMessage, tempUser._msgid));

                if (userinfoex.Userremark != null && userinfoex.Userremark.Count > 0)
                {
                    var remark = userinfoex.Userremark.Find(t => t.userid == myu._userid);
                    if (remark != null && remark.userid != userinfoex.UserID)
                    {
                        sc_refreshtableuser_n fuser = new sc_refreshtableuser_n() { result = 1, cc = 0 };
                        fuser.user = myu._tbwechatposData;
                        fuser.Ur = remark;
                        remarklist.Add(new UserIDMSG(tempUser._userid, fuser, false, false, tempUser._msgid));
                    }
                }
            });
            _bsDataServer.SendDataDelay(imList);
            SendCommonData(remarklist);
        }

        public async Task<int> SitDownWait(int userid, int pos = 0)
        {
            var myu = GetUserByID(userid);
            if (myu == null) return 0;
            myu._applyedKeep = false;
            if (pos < 0 || pos > _judge._maxPlayer) return 0;
            //判断GPS距离
            if (_judge.gps == 1 && myu._tbUser.isRobot == 0 && myu._tbUser.lat != 0 && myu._tbUser.lng != 0 && myu._tbUser.vlevel <= 1)
            {
                bool _havesamegps = false;
                ForeachAllDo((i) =>
                {
                    BaseUser tempUser = _DicPos2User[i];
                    if (tempUser._userid == myu._userid) return;
                    var _dis = ToolsEx.GetDistancelat_lng(myu._tbUser.lat, myu._tbUser.lng, tempUser._tbUser.lat, tempUser._tbUser.lng);
                    if (_dis < 100)
                    {
                        _havesamegps = true;
                        return;
                    }
                });
                if (_judge.password != "") _havesamegps = false;//密码房间 不检测距离 
                if (_havesamegps) return -98;
            }

            if (_judge._endtime != DateTime.MinValue && !myu._palyedgame && _judge._endtime.AddMinutes(-5) <= DateTime.Now) return -95;
            if (_judge.ip.Equals(1) && myu._tbUser.vlevel <= 1) if (NotifyWarning(myu._tbUser)) return -98;
            if (myu.IsSettle) return -18;

            var seatEm = CheckSeatEmpty(pos, userid);
            if (!seatEm) return -4;//-4 位置已被占用

            int key = -1;
            if (pos == 0)
            {
                key = FindKey();
                if (key == -1)
                {
                    TraceLogEx.Error("201908061612 sitdown fail error!!!");
                    return -2;
                }
            }
            else key = pos;

            int wkey = myu.pos;
            //int wkey = key;

            myu._isDisconnet = false;//申请坐下表示在线了 不知原因的断线重连的时候未处理成功 这个是patch
            myu._watchandoff = false;//申请坐下表示在线了 不知原因的断线重连的时候未处理成功 这个是patch 

            _room.ReSetUserStatusBase(myu._userid);
            myu.pos = key;
            _WaitSitdownUser.Add(myu.pos, myu);

            myu._tbwechatposData.pos = myu.pos;
            myu._tbwechatposData.isDis = myu._isDisconnet ? 1 : 0;
            myu._tbwechatposData.isR = myu._isReady ? 1 : 0;
            myu._tbwechatposData.isW = 2;//==================2 表示处理未带入等待状态
            myu._tbwechatposData.isK = 0;
            myu._tbwechatposData.py.gold = myu._CurrentGold;
            myu.SetKeepSeat();

            List<CommonPosValSD> _id2keep = new List<CommonPosValSD>();
            ForeachWaitSit((_tempuser) =>
            {
                _id2keep.Add(new CommonPosValSD() { pos = _tempuser._userid, val = _tempuser._keepseat });
            });
            ForeachAllDo((i) =>
            {
                BaseUser tempUser = _DicPos2User[i];
                if (tempUser != null && _id2keep.Any(t => t.pos == tempUser._userid)) return;
                _id2keep.Add(new CommonPosValSD() { pos = tempUser._userid, val = tempUser._keepseat });
            });


            List<UserIDMSG> imList = new List<UserIDMSG>();
            List<UserIDMSG> remarklist = new List<UserIDMSG>();

            ForeachWaitSit((_user) =>
            {
                TexasUser tempUser = _user as TexasUser;
                tuserInfoEx userinfoex = tempUser._userinfo;
                myu._tbwechatposData.py.uremark = null;

                sc_sitdownwait_tex_n _entertable = new sc_sitdownwait_tex_n() {   result = 1, _msgid = 8 };
                _entertable.pos = tempUser.pos;
                _entertable.tpos = myu.pos;
                _entertable.user = myu._tbwechatposData;
                _entertable.id2keep = _id2keep;
                _entertable.atime = 0;
                imList.Add(new UserIDMSG(tempUser._userid, _entertable, tempUser._isRobot, tempUser.NoPushMessage, tempUser._msgid));

                if (userinfoex.Userremark != null && userinfoex.Userremark.Count > 0)
                {
                    var remark = userinfoex.Userremark.Find(t => t.userid == myu._userid);
                    if (remark != null && remark.userid != userinfoex.UserID)
                    {
                        sc_refreshtableuser_n fuser = new sc_refreshtableuser_n() { result = 1, cc = 0 };
                        fuser.user = myu._tbwechatposData;
                        fuser.Ur = remark;
                        remarklist.Add(new UserIDMSG(tempUser._userid, fuser, false, false, tempUser._msgid));
                    }
                }
            });
            ForeachBaseAndWatch((_user) =>
            {
                TexasUser tempUser = _user as TexasUser;
                if (tempUser != null && imList.Any(t => t._userid == tempUser._userid)) return;

                tuserInfoEx userinfoex = tempUser._userinfo;
                myu._tbwechatposData.py.uremark = null;

                sc_sitdownwait_tex_n _entertable = new sc_sitdownwait_tex_n() {  result = 1, _msgid = 8 };
                _entertable.pos = tempUser.pos;
                _entertable.tpos = myu.pos;
                _entertable.user = myu._tbwechatposData;
                _entertable.id2keep = _id2keep;
                _entertable.atime = 0;
                imList.Add(new UserIDMSG(tempUser._userid, _entertable, tempUser._isRobot, tempUser.NoPushMessage, tempUser._msgid));

                if (userinfoex.Userremark != null && userinfoex.Userremark.Count > 0)
                {
                    var remark = userinfoex.Userremark.Find(t => t.userid == myu._userid);
                    if (remark != null && remark.userid != userinfoex.UserID)
                    {
                        sc_refreshtableuser_n fuser = new sc_refreshtableuser_n() { result = 1, cc = 0 };
                        fuser.user = myu._tbwechatposData;
                        fuser.Ur = remark;
                        remarklist.Add(new UserIDMSG(tempUser._userid, fuser, false, false, tempUser._msgid));
                    }
                }
            });


            _bsDataServer.SendDataDelay(imList);
            SendCommonData(remarklist);
            return 1;
        }


        public async ETTask< bool> AllocationtoTable(TexasUser _adduser, bool _onlywait, bool rwatch)
        {
            _adduser._tableid = _tableid;
            int key = _adduser.pos;//指定位置 入座
            if (key == -1)
            {
                TraceLogEx.Error("201611172219tex fetal error!!!");
                return false;
            }

            await  _adduser.SetStatus(UserStatusEnum.InTableWaiting, _gameid, _levelid, _tableid);  //只修改指定的人的状态 

            _adduser._inwatch = false;
            _adduser._isReady = false;//============不然不会触发继续游戏
            _adduser._isgiveup = true;//============特殊标识 Token不找此人 不然可能把观众给了Token  
            _adduser._ForceKeepSeat = false;//处理一局内弃牌退出 再进入坐下  否则下一局会变成留座状态
            _adduser.SetKeepSeat();//处理一局内弃牌退出 再进入坐下  否则下一局会变成留座状态


            if (rwatch)
            {
                _adduser._delaytoEnd = false;
                base.InitiAdd(key, _adduser);
                if (_WaitSitdownUser != null) _WaitSitdownUser.RemoveByID(_adduser._userid);
            }
            

            int _pcount = GetPlayerCount();
            if (_onlywait == false && _judge._curTableOverCount > 0 && _pcount >= _judge._minPlayer)
            {   //必须大于人2，且不是第一局 
                if (_judge.CheckIsSmallPos(_adduser.pos)) _adduser.jump1_wait2_big3 = 1;//跳庄
                if (_judge.CheckIsBigPos(_adduser.pos)) _adduser.jump1_wait2_big3 = 2;
                if (_pcount >= 3)
                    if (_judge.CheckIsStraddlePos(_adduser.pos)) _adduser.jump1_wait2_big3 = 3;
                if (_pcount > 4)
                { //大于4才补straddle
                   // _adduser.morestraddle = true;
                }
                _adduser._newSet = true;
            }
            if (_tablestatus == TableStatusEnum.Playing || _tablestatus == TableStatusEnum.PrePlaying)
            {
                _adduser._inseatcannotplay = true;//不允许参与游戏  
                _adduser._isWatch = true;
            }
            else
            {
                _adduser._isWatch = false;
                _adduser._inseatcannotplay = false;//不允许参与游戏  
                if (_pcount >= _judge._minPlayer) _adduser._isWatch = true;

                if ((!_onlywait && _WaitStartTime != DateTime.MinValue && DateTime.Now >= _WaitStartTime) || (!_onlywait && _WaitStartTime == DateTime.MinValue))
                {
                    WaittoStart();
                }
                _strStatus = "TexTable...1.1 for auto ready...";
            }
            _adduser._SysDealTimeOutCountEx = 0;
            return true;
        }

        /// <summary>
        /// 过期处理
        /// </summary>
        /// <param name="myu"></param>
        /// <returns></returns>
        public async Task<int> Overduehandle(TexasUser myu)
        { 
            var reinfo = myu._userinfo.ReportInfo; 
            if (reinfo != null)
            {
                if (reinfo.rtime.ToGetDayEndDateTime() < DateTime.Now.ToGetDayEndDateTime())
                {
                    reinfo = new ReportInfo { rtime = DateTime.Now, num = 0 };
                    myu._userinfo.ReportInfo = reinfo;
                    await BaseHelper.AddOrUpdateBase(myu._userinfo);
                }
            }
            else
            {
                reinfo = new ReportInfo { rtime = DateTime.Now, num = 0 };
                myu._userinfo.ReportInfo = reinfo;
                await BaseHelper.AddOrUpdateBase(myu._userinfo);
            }

            return reinfo.num;
        }

        /// <summary>
        /// 在位置的人可以补一次
        /// </summary>
        /// <param name="userid"></param>
        public async Task<int> AddGoldInGame(int userid, int addgold, int cidx, bool isSupper)
        {
            var myu = GetUserByID(userid);
            if (myu == null) return 0;
            if (myu.pos < 0 || myu.pos > _judge._maxPlayer) return 0;
            //if (myu.clubidx != 0 && myu.clubidx != cidx) return -10;//不能选择其他club
            if (myu.addgold > 0)
            {
                return -2;//只能补一次
            }
            if (isSupper)
            {
                var userbalan = await GetUserBalance(userid, IsSupper);
                if (userbalan < addgold || addgold < _judge._baseGamle)//|| intogold < _judge._baseGamle * 50
                {
                    return -1;//补充入不足
                }
            }
            else
            {
                if (myu._tbUser.GetGoldAndWinGold < addgold || addgold < _judge._baseGamle)//|| intogold < _judge._baseGamle * 50
                {
                    return -1;//补充入不足
                }
            }

            if (addgold > _judge._baseGamle * 100000)//|| intogold < _judge._baseGamle * 50
            {
                return -99;//补充超过上限
            }
            myu.addgold = addgold;
            return 1;
        }


        #region ready

        /// <summary>
        /// 准备后，自动发牌     不处理后续超时行为
        /// </summary>
        /// <param name="userid"></param>
        public int Ready(int userid)
        {
            var myu = GetUserByID(userid);
            if (myu == null) return -1;
            if (!myu.CheckTimeOutFirst(process_tex.sc_end_tex_n)) return -2;
            //if (myu.CheckisWatch()) return;

            WaittoStart(myu);
            return 1;
        }

        private async void WaittoStart(TexasUser myu)
        {
            if (myu.CheckisWatch())
            {
                TraceLogEx.Log(" tex _isWatch ture................... myu._userid" + myu._userid);
                return;
            }
            ////if (HaveSomeBodyUnDeal()) return;//不用等所有人了
            if (GetPlayerCount() < _num_start) return;//新加限制需要4个人才能开始游戏

            //if (TableStatusEnum.PrePlaying == _tablestatus) return;
            _strStatus = "Ready.tex..allready";
            base.SetStatus(TableStatusEnum.PrePlaying);
            AsyncDelayExeFun(() =>
            {
                if (_DicPos2User == null) return;
                if (TableStatusEnum.Playing == _tablestatus) return;//开始了就不能处理去修改状态了
                                                                    //处理所有人准备完了
                ForeachAllDo((i) =>
                {
                    var user = GetUserByPosMust(i);
                    if (user._inseatcannotplay) return;
                    user._isWatch = false;
                    myu._isReady = true; //设置准备标识
                    user.SetTimeOutAction(1, process_tex.sc_ready_tex_n, 0);//不等时间 下一帧就开始                        
                });//自动开始下一步不算，只是走超时的逻辑                
            });
        }

        public async void WaittoStart(bool vctrl = false)
        {
            ForeachAllDo((i) =>
            {
                var _user = GetUserByPosMust(i);
                if (vctrl) _user._inseatcannotplay = false;//video change wacth  state  by vmaster
                if (_judge.CheckMinGoldLimit(_user._CurrentGold))
                {
                    _user._inseatcannotplay = true;
                }
                if (_user.jump1_wait2_big3 == 2) _user._inseatcannotplay = true;//more wait once 
                if (_user.jump1_wait2_big3 == 3) _user._inseatcannotplay = true;
            });
            _judge.CheckAllBanker();
            var onum = _judge._curTableOverCount > 0 ? _num_start : _num_min;
            if (!openplay) onum = 10;

            if (GetPlayerCount() < onum)
            {
                base.SetStatus(TableStatusEnum.WaitforReady);
                return;
            }
            if (TableStatusEnum.PrePlaying == _tablestatus || TableStatusEnum.End == _tablestatus) return;
            base.SetStatus(TableStatusEnum.PrePlaying);
            _strStatus = "Ready.tex..allready";

            AsyncDelayExeFun(() =>
            {
                if (_DicPos2User == null) return;
                if (TableStatusEnum.Playing == _tablestatus || TableStatusEnum.PrePlaying != _tablestatus) return;//开始了就不能处理去修改状态了                                                                      
                ForeachAllDo((i) =>
                {
                    var user = GetUserByPosMust(i);
                    if (user._inseatcannotplay) return;
                    user._isWatch = false;
                    user._isReady = true; //设置准备标识
                });
                Start();
            });
        }
        #endregion


        #region 解散游戏相关，存在未开始游戏的解散，已开始游戏的解散        解散申请与超时是与其他行为并行的行为，不能使用通用超时方法

        //public async void DismissTableTime()
        //{
        //    if (_tableid == 0) return;

        //    ttablelist temp = await ttablelistEx.GetTableByNumber(_gameid, _tableid);
        //    if (temp == null) return;
        //    temp.tableStatus = 3;
        //    await ttablelistEx.AddOrUpdate(temp);

        //    ForeachBaseAndWatch((tempUser) =>
        //    {
        //        tempUser.SetStatus(UserStatusEnum.InLobby);
        //    });
        //    if (_tablestatus == TableStatusEnum.WaitforReady) BigEnd();
        //    else DoExecuteAllEnd(true);//强制大结算 
        //}

        /// <summary>
        /// 站起围观 直接弃牌  跟离开房间 与断线 一样的操作
        /// </summary> 
        public int SitUpKeep(int userid, bool keep)
        {
            var myu = GetUserByID(userid);
            if (myu == null) return 0;
            var existseat = CheckUserIDExitsSeat(userid);
            if (!existseat)
            {
                return 0;//不在位置上不能操作
            }
            //true 表示留座 false表示站起围观
            if (keep)
            {
                if ((_tablestatus == TableStatusEnum.Playing && !myu._isgiveup) || _tablestatus == TableStatusEnum.PrePlaying)
                {
                    myu.settleseat = true;//设置结算留座
                    return (int)myu._CurrentGold;
                }

                myu.SetKeepSeat(180);
                myu._inseatcannotplay = true;//保留位置 但不允许他玩了
                PushSitupKeep(myu, true, false);
            }
            else
            {   //站起围观直接弃牌 
                if (myu._allIn) return -2;//allin 不允许弃牌
                if (myu.inins) return -3;//购买保险状态 不允许弃牌

                if (myu._isPlaying) GiveUp(userid, false);
                PushSitupKeep(myu, true, true);
                myu.SetKeepSeat(0);
                if (_WaitSitdownUser != null) _WaitSitdownUser.RemoveByID(myu._userid);
                if (_tablestatus != TableStatusEnum.Playing)
                {
                    BaseUserMove2Watch(myu);
                }
            }
            return myu._CurrentGold == 0  ? 1 : (int)myu._CurrentGold;
        }

        /// <summary>
        /// 推送留座状态
        /// </summary>
        /// <param name="myu"></param>
        /// <param name="keep"></param>
        /// <param name="isremove">是否直接移除</param>
        public void PushSitupKeep(TexasUser myu, bool keep, bool isremove)
        {
            List<UserIDMSG> imList = new List<UserIDMSG>();
            ForeachBaseAndWatch((_user) =>
            {
                TexasUser tempUser = _user as TexasUser;
                sc_situpkeep_tex_n _situpkeep = new sc_situpkeep_tex_n() { result = 1 };// 显示结束面板就行
                _situpkeep.userid = myu._userid;
                _situpkeep.isK = isremove ? 0 : myu._keepseat;
                imList.Add(new UserIDMSG(tempUser._userid, _situpkeep, tempUser._isRobot, tempUser.NoPushMessage, tempUser._msgid));
            });

            _bsDataServer.SendDataDelay(imList);
            myu._newSet = false;
            if (isremove && _tablestatus == TableStatusEnum.Playing) myu._delaytoEnd = true;
            myu.RecordExitTime(_tableid);//申请留座的时间也要记录成逃跑时间
        }

        public async Task<int> ReApplyExitTable(int userid)
        {
            var myu = GetUserByIDTry(userid);
            if (myu == null) return 1;
            int _suc = OnlyExit(myu);
            if (_suc.Equals(1))
            {
                myu._watchandoff = true;
                //  if (!myu._isRobot) myu.ReturnBringGold(tnum, _judge.clubidx);//退出返还金币           
                await myu.SetSatusInLobby();
            }
            return _suc;
        }

        private int OnlyExit(TexasUser myu)
        {
            if (myu._inwatch)
            {
                if (myu._palyedgame || myu._CurrentGold > 0) myu.pos = 0;
                else
                {
                    BaseUser _buser;
                    _DicPos2UserWatch.TryRemove(myu.pos, out _buser);
                }
            }
            else
            {
                bool _noticeexit = false;
                bool _removeimmediate = false;
                if (_tablestatus == TableStatusEnum.Playing && !myu._isgiveup && myu._keepseat == 0)
                {
                    if (myu._allIn) return -2;
                    if (myu.inins) return -3;//购买保险状态 不允许弃牌

                    if (myu._isPlaying) GiveUp(myu._userid, false);
                    PushSitupKeep(myu, true, true);
                    if (_WaitSitdownUser != null) _WaitSitdownUser.RemoveByID(myu._userid);
                    if (_tablestatus != TableStatusEnum.Playing) _removeimmediate = true;

                }
                if (myu._inseatcannotplay)
                {   //当前在位置上但是是观众;  退出会立即空出位置  通知所有人，可以入坐。
                    _noticeexit = true;
                    myu._isWatch = false;
                    myu.SetKeepSeat(-1);
                    _removeimmediate = true;
                }
                else
                {//当前在位置上不是观众;   弃牌才会到这儿 退出会不会空出位置  通知所有人留座，不可以入坐。
                    if (myu._palyedgame)
                    {
                        myu.SetKeepSeat(180);//先 留座   
                        myu._delaytoEnd = true;
                        _noticeexit = true;
                        _removeimmediate = false;
                        myu._inseatcannotplay = true;
                    }

                    if (_tablestatus != TableStatusEnum.Playing)
                    {
                        if (myu._applyedKeep)
                        {
                            myu._applyedKeep = false;
                            _noticeexit = false;//申请留座的前面已处理
                            _removeimmediate = false;
                        }
                        else
                        {
                            myu.SetKeepSeat(-1);
                            _noticeexit = true;//申请留座的前面已处理
                            _removeimmediate = true;
                        }
                        myu._inseatcannotplay = true;
                    }
                    myu._isWatch = false;
                    myu.SetKeepSeat(-1);
                    _noticeexit = true;//申请留座的前面已处理
                }

                if (_noticeexit && _DicPos2User.ContainsKey(myu.pos))
                {   //都需要发消息 
                    base.ExitTableOne(myu.pos, myu._userid, 0, myu._keepseat);//仅发送了消息，未处理逻辑 
                }
                //if (myu.applyinto) _removeimmediate = true;//申请带入的人要保留Watch
                if (_removeimmediate)
                {
                    BaseUserMove2Watch(myu);
                }
            }
            return 1;
        }
        private async Task<bool> SituporExit(TexasUser myu, bool _isdis, int _stand = 0)
        {
            if (myu._inwatch)
            {
                if (myu._palyedgame || myu._CurrentGold > 0)   myu.pos = 0;
                else
                {
                    await myu.SetSatusInLobby();
                    BaseUser _buser;                    
                    _DicPos2UserWatch.TryRemove(myu.pos, out _buser);
                }
                PushSitupKeep(myu, true, true);
                _WaitSitdownUser.RemoveByID(myu._userid);
            }
            else
            {
                if (_tablestatus == TableStatusEnum.Playing && !myu._isgiveup && myu._keepseat == 0)
                {
                    if (_isdis)
                    {
                       await myu.SetStatus(UserStatusEnum.InTableDaPaiDis);
                        base.NotifyDisBase(myu._userid, 0);
                        //myu.RecordExitTime(tnum);//断线要记录逃跑时间
                    }
                    return false;
                }
                bool _noticeexit = false;
                bool _removeimmediate = false;
                bool _movetowatch = false;
                if (myu._inseatcannotplay)
                {   //当前在位置上但是是观众;  退出会立即空出位置  通知所有人，可以入坐。
                    //_noticeexit = true;
                    //myu.SetKeepSeat(-1);
                    //_removeimmediate = true;

                    _WaitSitdownUser.RemoveByID(myu._userid);
                    if (myu._keepseat == 0)
                    {
                        _removeimmediate = true;
                        PushSitupKeep(myu, true, true);//占位掉线的情况
                    }
                }
                else
                {   //当前在位置上不是观众;   弃牌才会到这儿 退出会不会空出位置  通知所有人留座，不可以入坐。
                    if (myu._palyedgame)
                    {
                        myu.SetKeepSeat(180);//先 留座   
                        myu._delaytoEnd = true;
                        _noticeexit = true;
                        _removeimmediate = false;

                        myu._inseatcannotplay = true;
                    }
                    if (_tablestatus != TableStatusEnum.Playing)
                    {
                        if (myu._applyedKeep)
                        {
                            myu._applyedKeep = false;
                            _noticeexit = false;//申请留座的前面已处理
                            _removeimmediate = false;
                        }
                        else
                        {
                            myu.SetKeepSeat(-1);
                            _noticeexit = true;//申请留座的前面已处理
                            _removeimmediate = true;
                        }
                        myu._inseatcannotplay = true;
                    }
                }

                if (_noticeexit && _DicPos2User.ContainsKey(myu.pos))
                {   //都需要发消息 
                    base.ExitTableOne(myu.pos, myu._userid, 0, myu._keepseat);//仅发送了消息，未处理逻辑 
                }
                if (_removeimmediate)
                {
                    myu.RecordExitTime(_tableid);//手动退出要记录成逃跑时间  
                    BaseUserMove2Watch(myu);
                }
            }
            return true;
        }

        public bool BaseUserMove2Watch(TexasUser myu)
        {
            BaseUser tempu;
            base._DicPos2User.TryRemove(myu.pos, out tempu);
            bool _movetowatch = true;
            if (myu._CurrentGold > 0 || myu.applyinto) _movetowatch = true;
            if (_movetowatch && !CheckUserInWatch(myu._userid))
            {
                int key = FindWatchKey(true);
                myu.pos = key;
                myu._inwatch = true;
                _DicPos2UserWatch.TryAdd(key, myu);
            }
            return true;
        }
        /// <summary>
        /// 用户申请解散游戏  此游戏不需要
        /// </summary>
        /// <param name="userID"></param>
        public void ApplyExitTable(int userid)
        {

        }
        /// <summary>
        /// 用户申请解散游戏      游戏已开始需要处理结算面板
        /// </summary>
        /// <param name="userID"></param>
        public void DealExitTable(int userid, bool _isagree)
        {

        }
        #endregion

        #region 断线相关   掉线的通知，断线重连
        /// <summary>
        /// 掉线 状态通知
        /// </summary>
        /// <param name="userID"></param>
        public async void NotifyDis(int userid, UserStatus _us)
        {
            TexasUser myu = GetUserByIDTry(userid);
            if (myu == null) return;
            bool _suc = await SituporExit(myu, true);
            myu._watchandoff = true;
            if (_suc)
            {
                if (_us.TableID <= 0) await myu.SetSatusInLobby();
                myu._isgiveup = true;
            }
        }
        /// <summary>
        /// 断线重连     暂时
        /// </summary>     
        public async void NotifyReConnect(int userid)
        {            
            TexasUser myu = GetUserByID(userid);
            if (myu == null) return;
           await myu.SetSatusInTableDaPai();
            base.NotifyDisBase(userid, 1);
        }
        #endregion

        #region 非游戏流程功能 获取战绩 

        /// <summary>
        ///  游戏内战绩
        /// </summary>
        public string GetGain(int userid)
        {
            sc_getgain_tex _senddata = new sc_getgain_tex() { result = 1, cc = 0 };
            _senddata.lefttime = _judge.GetLeftTimeSec();
            _senddata.jackpot = _judge.alltax.ToInt32();
            List<TableGainSD> _tgList = new List<TableGainSD>();
            ForeachBaseAndWatch((_user) =>
            {
                TexasUser tempUser = _user as TexasUser;
                if (tempUser._goldIntoHistory == 0) return;//带入为0的不显示
                _tgList.Add(new TableGainSD()
                {
                    finto = tempUser._goldIntoHistory,
                    gain = (int)tempUser.GetGain(),
                    offline = tempUser._watchandoff ? 1 : 0,
                    pcount = tempUser.pcount,
                    goldout = tempUser.GoldOut,
                    UserID = tempUser._userid,
                    wechat = new WechatInfoSD()
                    {
                        wicon = ToolsEx.IsHandlePhoto(tempUser._tbUser.isRobot, tempUser._tbUser.wechatHeadIcon),
                        _S = tempUser._tbUser.Sex,
                        wName = tempUser._tbUser.wechatName
                    }
                });
            });
            _senddata.glist = _tgList;
            _senddata.Inspool = tableInsurance;
            List<PlayerInfoSD> _wlist = new List<PlayerInfoSD>();//在线观众
            ForeachWatch((user) =>
            { 
                _wlist.Add(user._tbwechatposData.py);
            });
            _senddata.wlist = _wlist;

            return JsonUtils.Serialize(_senddata);
        }

        /// <summary>
        ///  游戏内战绩
        /// </summary>
        public async Task<string> GetTHistory(tUser _user)
        {
            sc_thistory_tex _senddata = new sc_thistory_tex() { result = 1, tableId = _tableid, cc = 0 };

            List<TexTInfoSD> tulist = new List<TexTInfoSD>(tableloglist);

            foreach (var t in tulist)
            {
                var thisgame = await BaseHelper.GetShare<tcollectlog>(w => w.infoId == t.infoId && w.UserId == _user.UserID);
                t.IsSava = thisgame != null ? true : false;
            }
            var data = await BaseHelper.GetShareAll<tcollectlog>(t => t.UserId == _user.UserID);
            _senddata.ulist = GetTablePlayer();
            _senddata.bg = _judge._baseGamle;
            _senddata.tulist = tulist;
            _senddata.showCard = _judge.showCard;
            _senddata.savaNum = data == null ? 0 : data.Count();
            _senddata.maxSnum = 15;
            return JsonUtils.Serialize(_senddata);
        }

        /// <summary>
        /// 推送更新所有奖池 只通知当前房间内的奖池
        /// </summary> 
        public async void NotifyJackpot()
        {
            await ThreadEx.Sleep(500);
            var jlist = await tjackpotEx.GetGameJackpot(_gameid);
            if (jlist == null) return;
            sc_alljackpot_tex_n _getnotice = new sc_alljackpot_tex_n() { result = 1, };
            _getnotice.alljackpot = (ulong)jlist.Sum(t => t.jackpot);

            List<UserIDMSG> imList = new List<UserIDMSG>();
            ForeachBaseAndWatch((user) =>
            {
                imList.Add(new UserIDMSG(user._userid, _getnotice, user._isRobot, user.NoPushMessage, user._msgid));
            });
            _bsDataServer.SendDataDelay(imList);
        }

        /// <summary>
        /// 每局的详情
        /// </summary>
        private void LogWriteToMemory()
        {
            List<TexUserInfoSD> _tableinfolog = new List<TexUserInfoSD>();
            var tablecommoncard = new List<int>(_judge.GetEndCommonCard(_judge._endTurn));
            _judge._lastover = _judge._endTurn;
            TexasUser winuser = null;
            ForeachBaseUser((_user) =>
            {
                var _tempuser = _user as TexasUser;
                if (!_tempuser.CheckPlaying) return;
                if (_tempuser._shouPaiArr.Count == 0) return;
                if (_tempuser._goldwin > 0) winuser = _tempuser;
                if (!_tableinfolog.Any(t => t.id == _tempuser._userid))
                {
                    tuseragent2021Ex.WriteGameCount(_tempuser._userid,_gameid,_levelid, _tempuser._goldwin, _tempuser._dealcard, _room._levelinfo.Baserate, _tempuser.GetUserClubid(), _tempuser.tablenum, _tempuser.bet3, _tempuser.cbet3, _tempuser.drivingnum, _tempuser.isbig, _tempuser.tex_intogold, _tempuser._gain, _tempuser.addpoolnum);
                    if (_tempuser.tablenum == 0) _tempuser.tablenum = 1;

                    ttableUserLog _tableuserlog = new ttableUserLog();
                    _tableuserlog.gold = _tempuser._goldwin;//texas是总余额
                    _tableuserlog._win = _tempuser._goldwin > 0;
                    _tableuserlog.gameid = _gameid;
                    _tableuserlog.TableLogIdx = _tableid;
                    _tableuserlog.UserID = _tempuser._userid;
                    _tableuserlog._pos = _tempuser.pos;
                    _tableuserlog._cardList = _tempuser._shouPaiArr;// _pos2CardList[i];
                    _tableuserlog._isover = false;
                    _tableuserlog._isWatch = _tempuser._isWatch ? 1 : 0;
                    _tableuserlog.Bet = (ulong)_tempuser._gambleAll;
                    _tableuserlog.mystake = JsonUtils.Serialize(_judge._fiveCommonCard);

                    BaseHelper.AddAsync(_tableuserlog);
                    List<int> _tempcard = new List<int>();

                    if (_tempcard.Count == 0) _tempcard = _tempuser._shouPaiArr;
                    List<int> diPaiArr = new List<int>();
                    if (_tempuser._shouPaiArr.Count >= 2)
                        diPaiArr = new List<int>() { _tempuser._shouPaiArr[0], _tempuser._shouPaiArr[1] };

                    string sp = "";
                    for (int j = 0; j < _tempuser._shouPaiArr.Count; j++)
                    {
                        sp += _tempuser._shouPaiArr[j];
                        if (j < _tempuser._shouPaiArr.Count - 1)
                            sp += ",";
                    }

                    _tableinfolog.Add(new TexUserInfoSD()
                    {
                        p = diPaiArr,
                        g = (int)_tempuser._gambleAll,
                        st = _judge.showCard,
                        gu = _tempuser._isgiveup ? 1 : 0,
                        id = _tempuser._userid,
                        s = (int)_judge._texasTurn,
                        wg = (int)_tempuser._goldwin,
                        ins = _tempuser.claim,
                        pos = _tempuser.pos,
                        fshow = _tempuser.fshow
                    });
                }
            });

            if (_tableinfolog.Count > 0 && tableActionlog.Count > 0) //这里会出现两个数据都为空的情况
            {
                tableloglist.Add(new TexTInfoSD()
                {
                    c = tablecommoncard,
                    j = (int)_judge._curalltax,
                    tInfo = _tableinfolog,
                    tlist = tableActionlog,
                    ipool = _judge._allsurance,
                    ng = _judge.GetUnGiveupCount(),
                    infoId = _judge.OneId,
                    handcount = tableloglist.Count() + 1,
                    winuser = winuser == null ? 0 : winuser._userid,
                    maxpoker = winuser == null ? null : winuser._maxPai,
                    winGold = winuser == null ? 0 : winuser._goldwin,
                    bankerpos = _bankpos
                });
            }
            tableActionlog = new List<TexActionSD>();
        }

        #endregion

        /// <summary>
        /// 踢人   1表示强制站起，2表示强制退出桌子，这一桌的时间内都不能再次进入
        /// </summary>
        /// <param name="UserID"></param>
        /// <param name="type"></param>
        /// <returns></returns>
        public async Task<bool> TickUser(int UserID, int type, int ownerid)
        {
            var user = GetUserByID(UserID);
            if (user == null) return false;

            if (_tablestatus != TableStatusEnum.WaitforReady)
            {
                if (user._isPlaying && !user._isgiveup) return false;//游戏中不能tick
            }

            if (type == 1)
            {
                var _texuser = GetBaseUserByID(UserID);
                int _situp = SitUpKeep(UserID, false);
                if (_situp > 0) return false;
                sc_tickuser_tex_n tickuser = new sc_tickuser_tex_n() { result = 1 };
                tickuser.kickuid = UserID;
                tickuser.lockgold = (int)_texuser._CurrentGold;
                tickuser.ownid = ownerid;
                List<UserIDMSG> imList = new List<UserIDMSG>();
                ForeachBaseAndWatch((tempUser) =>
                {
                    imList.Add(new UserIDMSG(tempUser._userid, tickuser, tempUser._isRobot, tempUser.NoPushMessage, tempUser._msgid));
                });
                _bsDataServer.SendDataDelay(imList);
                return true;
            }
            else if (type == 2)
            {
                KickUser.Add(UserID);
                await ReApplyExitTable(UserID);
                return true;
            }
            else return false;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="card"></param>
        /// <param name="type">0   取消   1展示</param>
        /// <returns></returns>
        public int ShowMyCard(int userid, int card, int type, out int index)
        {
            index = -1;
            TexasUser myu = GetUserByID(userid);
            if (myu == null) return 0;
            if (myu.pos < 0 || myu._shouPaiArr.Count <= 0) return 0;

            index = myu._shouPaiArr.FindIndex(t => t == card);
            if (type.Equals(1))
            {
                if (_judge.showcards.ContainsKey(userid))
                {
                    var myshowcard = _judge.showcards[userid];
                    if (myshowcard.Count > 2) return 0;
                    if (myshowcard.FindIndex(t => t.card == card) >= 0) return 0;

                    myshowcard.Add(new Cards() { card = card, cpos = index });
                    _judge.showcards[userid] = myshowcard;
                }
                else
                {
                    _judge.showcards.TryAdd(userid, new List<Cards>() { new Cards() { card = card, cpos = index } });
                }
            }
            else
            {
                if (_judge.showcards.ContainsKey(userid))
                {
                    var myshowcard = _judge.showcards[userid];
                    myshowcard.Remove(t => t.card == card);
                    _judge.showcards[userid] = myshowcard;
                }
            }
            return 1;
        }

        /// <summary>
        /// 通知回撤金币
        /// </summary>
        public async void NotifyBackGold()
        {
            if (_gametype.Equals(20))
            {
                List<sc_goldback_tex_n> list = new List<sc_goldback_tex_n>();
                List<UserIDMSG> imList = new List<UserIDMSG>();
                foreach (var item in applytogold)
                {
                    var myu = GetUserByID(item.Key);
                    if (myu != null)
                    {
                        if (myu._CurrentGold >= item.Value)
                        {
                            myu.GoldReduce(item.Value);
                            myu._tbUser.Gold += item.Value;
                            myu.GoldOut += item.Value;
                            CommonLogic.updategold(myu._tbUser, 2);
                            await BaseHelper.AddOrUpdateBase(myu._tbUser);

                            sc_goldback_tex_n udata = new sc_goldback_tex_n { gold = myu._CurrentGold, ugold = myu._tbUser.GetGoldAndWinGold, UserId = item.Key, result = 1 };
                            imList.Add(new UserIDMSG(item.Key, udata, false, false));
                            myu.WriteGoldChangeLog(item.Value, 46, "", true);
                        }
                        else
                        {
                            sc_goldback_tex_n udata = new sc_goldback_tex_n { gold = myu._CurrentGold, ugold = myu._tbUser.GetGoldAndWinGold, UserId = item.Key, result = -1 };
                            imList.Add(new UserIDMSG(item.Key, udata, false, false));
                        }
                    }
                }
                LobbySendDataServer.instance.AutoSendData(imList);
                applytogold = new ConcurrentDictionary<int, long>();
            }
        }



        public void WriteBigEndLogEx( string bigendstr)
        {
            CacheList<Model.TexTInfoSD> details = new CacheList<Model.TexTInfoSD>();
            foreach (TexTInfoSD dr in tableloglist)
            {
                Model.TexTInfoSD newDr = new Model.TexTInfoSD();
                newDr.j = dr.j;
                newDr.c = dr.c;
                newDr.ng = dr.ng;
                newDr.ipool = dr.ipool;
                newDr.tInfo = new List<Model.TexUserInfoSD>();
                newDr.tlist = new List<Model.TexActionSD>();
                newDr.bankerpos = dr.bankerpos;
                foreach (var info in dr.tInfo)
                {
                    Model.TexUserInfoSD newU = new Model.TexUserInfoSD();
                    newU.id = info.id;
                    newU.p = info.p;
                    newU.s = info.s;
                    newU.g = info.g;
                    newU.gu = info.gu;
                    newU.wg = info.wg;
                    newU.st = info.st;
                    newU.ins = info.ins;
                    newU.pos = info.pos;
                    newU.fshow = info.fshow;
                    newU.ownc = info.ownc;

                    newDr.tInfo.Add(newU);
                }

                foreach (var item in dr.tlist)
                {
                    Model.TexActionSD tas = new Model.TexActionSD();
                    tas.i = item.i;
                    tas.g = item.g;
                    tas.id = item.id;
                    tas.at = item.at;
                    tas.pos = item.pos;
                    tas.turn = item.turn;
                    tas.jg = item.jg;
                    newDr.tlist.Add(tas);
                }

                details.Add(newDr);
            }

            base.WriteBigEndLog( JsonUtils.Serialize(details), bigendstr, _judge.clubidx, _judge.alliId);
        }

        /// <summary>
        /// 是否加入超级联盟 
        /// </summary>
        /// <returns></returns>
        public async void GetSupperLea()
        {
            if (_judge.clubidx == 0) return;
            var club = await BaseHelper.GetShare<tclub>(_judge.clubidx);
            if (club == null || club.alliancid == 0) return;
            var clli = await BaseHelper.GetShare<tcluballiance>(p => p.idx == club.alliancid);
            if (clli == null || !clli.IsSupper) return;
            IsSupper = true;
        }

        public async Task<long> GetUserBalance(int UserId, bool issupper)
        {
            var myu = GetUserByID(UserId);
            if (myu == null) return 0;
            return await myu._ClubGold(issupper);
        }

        public async void BigEndExpireApply()
        {
            tuserInfoEx ownuser = await tb_userinfoEx.GetFromCachebyUserID(_ownerid);
            if (ownuser != null)
            {
                var applutable = ownuser.applyUsers;
                if (applutable != null && applutable.Count > 0)
                {
                    var Expiredata = applutable.ToList();
                    if ((Expiredata != null && Expiredata.Count > 0))
                    {
                        foreach (var apply in Expiredata)
                        {                        
                            ownuser.applyUsers.Remove(apply);
                            BaseHelper.AddOrUpdateBase(ownuser);
                        }
                    }
                }
            }

            List<UserIDMSG> imList = new List<UserIDMSG>();
            sc_commonnews_n _getnotice = new sc_commonnews_n() { result = 1 };
            _getnotice.type = 2;
            _getnotice.unCount = 0;
            imList.Add(new UserIDMSG(_ownerid, _getnotice, false, false));
            LobbySendDataServer.instance.AutoSendData(imList);
        }

        public async void RemoveExpireApply()
        {
            tuserInfoEx ownuser = await tb_userinfoEx.GetFromCachebyUserID(_ownerid);
            if (ownuser != null)
            {
                var applutable = ownuser.applyUsers;
                if (applutable != null && applutable.Count > 0)
                {
                    var Expiredata = applutable.Where(t => t.intotime <= DateTime.Now.AddSeconds(-180)).ToList();//延迟5s
                    if ((Expiredata != null && Expiredata.Count > 0))
                    {
                        foreach (var apply in Expiredata)
                        {
                            ownuser.applyUsers.Remove(apply);
                            await BaseHelper.AddOrUpdateBase(ownuser);
                            await SitDownWaitUp(apply.UserId);
                        }

                        List<UserIDMSG> imList = new List<UserIDMSG>();
                        sc_commonnews_n _getnotice = new sc_commonnews_n() { result = 1 };
                        _getnotice.type = 2;
                        _getnotice.unCount = applutable.Count;
                        imList.Add(new UserIDMSG(_ownerid, _getnotice, false, false));
                        LobbySendDataServer.instance.AutoSendData(imList);
                    }
                }
            }
        }

        public void SendDataOpenPlay()
        {
            sc_openplay_tex_n tickuser = new sc_openplay_tex_n() {   result = 1 };
            tickuser.openplay = openplay;
            List<UserIDMSG> imList = new List<UserIDMSG>();
            ForeachBaseAndWatch((tempUser) =>
            {
                imList.Add(new UserIDMSG(tempUser._userid, tickuser, tempUser._isRobot, tempUser.NoPushMessage, tempUser._msgid));
            });
            _bsDataServer.SendDataDelay(imList);
        }

        #region timer
        private async void SetTableStatus(string sta)
        {
            _strStatus = sta;
            if (sta == process_tex.sc_end_tex_n_pre)
            {
                await ThreadEx.Sleep(100);
                await DoExecuteAllEnd(false);
            }
            base.ReStartTimer(1000, true);
        }

        /// <summary>
        /// 循环当前桌 不加锁 
        /// </summary>
        public override void DealEveryTable()
        {
            if (_waitAction == "" || _waitAction == "0") return;

            switch (_waitAction)
            {
                case process_tex.sc_end_tex_n_pre:

                    break;
                case process_tex.sc_end_tex_n:
                    base.SetStatus(TableStatusEnum.WaitforReady);
                    WaittoStart();//自动下一局   
                    break;
            }
        }

        /// <summary>
        /// 循环当前桌的每一个人 不加锁 
        /// </summary>
        public override void DealEveryUser(BaseUser user)
        {
            if (_DicPos2User == null) return;

            TexasUser _bfuser = user as TexasUser;
            if (_bfuser == null && _bfuser._waitUserAction == "" || _bfuser._waitUserAction == "0") return;
            switch (_bfuser._waitUserAction)
            {
                case process_tex.sc_entertable_n:    //自动 准备
                                                     //if (_bfuser._WaitClientLimitCount != 0) ReadyFirstAuto(_bfuser._userid);
                    break;
                case process_tex.sc_ready_tex_n:
                    //Start(1111);    // 处理所有人准备完了  
                    break;
                case "sc_tablestart_tex_n":
                case "sc_gamble_tex_n":
                case "sc_compare_tex_n":
                case "sc_giveup_tex_n":
                    ////NotifyNextUser(_bfuser._userid);
                    break;
                case process_tex.sc_token_tex_n:
                    long _mingamble = _judge.GetGambleLimit(_bfuser as TexasUser);
                    if (_mingamble == 0)
                    {
                        Gamble(_bfuser._userid, 0); //自动 最低倍跟注 
                    }
                    else
                    {
                        _bfuser._SysDealTimeOutCountEx++;
                        if (_bfuser._SysDealTimeOutCountEx > 1) _bfuser._ForceKeepSeat = true;//多一次机会
                        GiveUp(_bfuser._userid, true); //弃牌 同步有连翻弃牌的BUG  
                    }
                    break;
                case process_tex.sc_instoken_tex_n:
                    Insurance(_bfuser._userid, 0, 0, null);
                    break;
                default:  //没得状态 不处理
                    TraceLogEx.Error(" 201206171026tex _UserDic[i]._userAction:" + _bfuser._waitUserAction);
                    break;
            }
            _bfuser.RecordTimeoutCount();

            base.DealAliveTime();
        }
        bool _firstpath = true;
        /// <summary>
        /// 延时处理
        /// </summary>
        /// <param name="state"></param>
        private async void DoTableTimer(object state)
        {
            if (state == null) return;
            if (state is BaseTable)
            {
                BaseTable temp = state as BaseTable;

                if (temp._tableid == 0)
                {   ////桌子已经释放了
                    temp.StopTimer();
                    temp.IsTimeRunning = false;
                    return;
                }
                try
                {
                    TexasTable table = _lobby.GetTableByTableNum(temp._tableid);
                    if (table == null)
                    {
                        temp.StopTimer();
                        temp.IsTimeRunning = false;
                        return;
                    }
                    if (table._gameover)
                    {
                        await table.Reset(true);
                        return;//解散成功的桌子延时1秒释放 
                    }
                    if (table._tablestatus == TableStatusEnum.Playing)
                    {//only for patch  may be user be remove
                        if (!table.CheckAlive(table._turnWaitTime * 1 + 5))
                        {
                            TraceLogEx.Error("fetal path....Count：" + table._DicPos2User.Count + " gametype:" + table._gametype + " turn:" + table._judge._texasTurn
                                + " _strStatus:" + table._strStatus + " ctoken:" + table._userTokenPos
                                + " _liveTime:" + table._liveTime.ToString());

                            if (_firstpath)
                            {
                                _firstpath = false;
                                if (table._judge.MoveToken()) table.SetAlive();
                            }
                            else
                            {
                                table.ForeachAllDo((i) =>
                                {
                                    var _tempuser = _DicPos2User[i];
                                    TraceLogEx.Error(string.Format("fetal path....i:{0}, userid:{1},gold:{2}, gamble:{3} _waitUserAction:{4}, _WaitClientLimitCount{5}, giveup:{6}",
                                        i, _tempuser._userid, _tempuser._CurrentGold, _tempuser._gambleAll, _tempuser._waitUserAction, _tempuser._WaitClientLimitCount, _tempuser._isgiveup));
                                });
                                table._strStatus = "end";
                                table.ReStartTimer(1000);//结算等待两秒
                            }
                        }
                    }
                    if (table._strStatus == "reset")
                    {
                        table._strStatus = "resetforready";
                        table.ReStartTimer(12 * 1000);// 等待10+2秒看能不再次开始，如果中间有人走的情况
                    }

                    if (table._strStatus == "end")
                    {
                        table._strStatus = "end_after";
                        await DoExecuteAllEnd(false);
                        table.ReStartTimer(100);//结算等待两秒 
                    }
                    else if (table._strStatus == "end_after")
                    {
                        table._strStatus = "";
                        await Reset(true); //准备下局， 重置此桌信息   
                        table.StopTimer();
                    }
                }
                catch (Exception ex)
                {
                    TraceLogEx.Error(ex, "tex f201803211619");
                }
            }
        }
        #endregion
    }

    public class process_tex
    {
        public const string sc_entertable_n = "sc_entertable_n";
        public const string sc_ready_tex_n = "sc_ready_tex_n";
        public const string sc_token_tex_n = "sc_token_tex_n";
        public const string sc_end_tex_n = "sc_end_tex_n";
        public const string sc_end_tex_n_pre = "sc_end_tex_n_pre";
        public const string startdiscard = "startdiscard";//发牌至分牌为该状态

        public const string sc_instoken_tex_n = "sc_instoken_tex_n";
    }
}