using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Common.Serialization;
using ETModel.Framework.Game.Contract.Action;
using ETModel.Script.Model;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace ETModel.Script.CsScript.Action
{
    /// <summary>
    ///  虚拟桌子      
    /// </summary>
    public abstract class ChessCardTable : BaseTable
    {
        /// <summary>
        /// 房主的UserID
        /// </summary>
        public int _ownerid;
          
        public ConcurrentDictionary<int, BaseUser> _WaitExitUser;
        public ConcurrentDictionary<int, ChessUser> _WaitSitdownUser;
        public GameActorHandler handler;

        /// <summary>
        /// 是否超级联盟房间
        /// </summary>
        public bool IsSupper;
        public int clubidx;

        /// <summary>
        /// 结算的时候是否需要移除watch玩家
        /// </summary>
        public bool IsRemoveWatch = true;

        public DateTime createTime;
        /// <summary>
        /// 桌子名称
        /// </summary>
        public string tname;
        public Dictionary<int, List<int>> CardListfromGM;


        /// <summary>
        /// 是否已扣出FK      12或24局才扣一次
        /// </summary>
        public bool _haveCheckRoomCard = false;
        /// <summary>
        /// 有人申请解散游戏了
        /// </summary>
        public bool _applyExitTable = false;
        /// <summary>
        /// 游戏模式，1房卡模式，0金币模式 10.房卡 20.比赛
        /// </summary>
        public int _gameCoin2Room1 = 0;
        private bool cardused = false;
        protected override void Initi(ConcurrentDictionary<int, BaseUser> _pos2user, BaseRoom roomc, int minnum, int maxnum, int gameid, BaseSendDataServer _bsds, SendOrPostCallback callback)
        {
            base.Initi(_pos2user, roomc, minnum, maxnum, gameid, _bsds, callback);
            if (_WaitSitdownUser == null) _WaitSitdownUser = new ConcurrentDictionary<int, ChessUser>();
            GameActorLocationRpcHandler handler = new GameActorLocationRpcHandler { table = this };
            Game.Scene.GetComponent<TableComponent>()?.InitTableHandler(_gameid, _levelid, _tableid, _ownerid, handler, false);
            this.handler = handler;

            _haveCheckRoomCard = false;
            _applyExitTable = false;
            manager.table = this;
            manager.RunTimer();
        }
        /// <summary>
        /// 是否加入超级联盟 
        /// </summary>
        /// <returns></returns>
        public async void GetSupperLea(int cidx)
        {
            if (cidx == 0) return;
            var club = await BaseHelper.GetShare<tclub>(cidx);
            if (club == null) return;
            IsSupper = true;//          
        }
        /// <summary>                                                        
        /// 1.FK次数到了。
        /// 2.n-1家认输了。
        /// 一桌完未重置之前使用
        /// </summary>
        /// <returns></returns>
        protected void CheckResetTable()
        {

        }
        

        protected override async ETTask<bool> StartBase()
        {
           // DealReduceDiamond(null, 10);//执行扣房卡 已处理只扣一次
            return await base.StartBase();
        }
        #region   Tools 方法
        public int GetPlayerCount()
        {
            int pcount = _DicPos2User.Count;
            ForeachBaseUser((user) =>
            {
                var _user = user as ChessUser;
                if (_user._inseatcannotplay) pcount--; //20
            });
            return pcount;
        }
        public int FindKey()
        {
            int key = -1;
            for (int i = 1; i <= _num_max; i++)
            {
                if (_DicPos2User.ContainsKey(i)) continue;
                if (_WaitSitdownUser != null && _WaitSitdownUser.ContainsKey(i)) continue;
                key = i;
                break;
            }
            return key;
        }
        /// <summary>
        /// 是否有位置 
        /// </summary>
        /// <returns></returns>
        public bool HaveEmptyPos()
        {
            if (_playerCount >= _num_max) return false;
            return true;
        }
        /// <summary>
        /// 两个字典都分别执行一次
        /// </summary>
        /// <param name="match"></param>
        public void ForeachWaitSit(Action<ChessUser> match)
        {
            if (match == null) return;

            if (_WaitSitdownUser != null)
            {
                foreach (var _tempbuser in _WaitSitdownUser)
                {
                    match(_tempbuser.Value);
                }
            }
        }
        public bool CheckUserIDExitsSeat(int userid)
        {
            if (_DicPos2User == null) return false;
            foreach (int key in _DicPos2User.Keys)
            {
                if (_DicPos2User[key]._userid == userid) return true;
            }
            if (_WaitSitdownUser == null) return false;
            foreach (int key in _WaitSitdownUser.Keys)
            {
                if (_WaitSitdownUser[key]._userid == userid) return true;
            }
            return false;
        }
        /// <summary>
        /// 获取此桌中指定用户ID的对象
        /// </summary>
        /// <param name="userID"></param>
        /// <returns></returns>
        public ChessUser TryGetBaseUserByIDFromBaseAndWatch(int userID, bool _istry = false)
        {
            if (_DicPos2User == null)
            {
                TraceLogEx.Error("201208221537chess _DicUser == null fetal Error 必需处理     运行正常后去掉 userID:" + userID);
                return null;
            }
            foreach (int key in _DicPos2User.Keys)
            {
                if (_DicPos2User[key]._userid == userID) return _DicPos2User[key] as ChessUser;
            }
            foreach (int key in _DicPos2UserWatch.Keys)
            {
                if (_DicPos2UserWatch[key]._userid == userID) return _DicPos2UserWatch[key] as ChessUser;
            }
            if (!_istry) TraceLogEx.Error("201611102029chess fetal Error 必需处理   没找到userID:" + userID);
            return null;
        }
        public bool CheckPosExitsSeat(int pos)
        {
            if (_DicPos2User == null) return false;
            if (_DicPos2User.Keys.Contains(pos)) return true;
            return false;
        }
        public bool CheckUserInWatch(int userid)
        {
            if (_DicPos2UserWatch == null) return false;
            foreach (int key in _DicPos2UserWatch.Keys)
            {
                if (_DicPos2UserWatch[key]._userid == userid) return true;
            }
            return false;
        }

        protected int GetUserKey(BaseUser user, int pos = 0)
        {
            int key = -1;
            if (pos == 0)
            {
                key = FindSeat();
                if (key == -1) return -2;
            }
            else if (!TryGetUserByID(user._userid, out BaseUser temp)) key = pos;
            else if (temp._userid != user._userid) return -4;
            return key;
        }

        /// <summary>
        /// 获取此桌中指定用户ID的对象
        /// </summary>
        /// <param name="userID"></param>
        /// <returns></returns>
        public ChessUser TryGetUserByIDFromBase(int userID, bool _istry = false)
        {
            if (_DicPos2User == null)
            {
                TraceLogEx.Error("201208221537chess _DicUser == null fetal Error 必需处理     运行正常后去掉 userID:" + userID);
                return null;
            }
            foreach (int key in _DicPos2User.Keys)
            {
                if (_DicPos2User[key]._userid == userID) return _DicPos2User[key] as ChessUser;
            } 
            if (!_istry) TraceLogEx.Error("201611102029chess fetal Error 必需处理   没找到userID:" + userID);
            return null;
        }
        private int FindWatchKey(bool _force)
        {
            int key = -1;
            for (int i = _num_max + _num_max; i <= _num_max * _num_max + _num_max; i++)
            {
                if (_DicPos2UserWatch.ContainsKey(i)) continue;
                key = i;
                break;
            }
            if (_force && key == -1)
            {   //强制找一个位置
                key = _num_max + _DicPos2UserWatch.Keys.Max();
            }
            return key;
        }
        #endregion

        /// <summary>
        /// 获取下家的位置pos 逆时针
        /// </summary>
        /// <returns></returns>
        protected void MoveTokenClock()
        {
            do
            {
                if (_userTokenPos == _num_max) _userTokenPos = 1;
                else _userTokenPos++;
            }
            while (!_DicPos2User.ContainsKey(_userTokenPos));//中间有空位，要跳过
        }

        /// <summary>
        /// 获取下家的位置pos  顺时针
        /// </summary>
        /// <returns></returns>
        protected void MoveTokenClockwise()
        {
            do
            {
                if (_userTokenPos < 1) _userTokenPos = _num_max;
                else _userTokenPos--;
            }
            while (!_DicPos2User.ContainsKey(_userTokenPos));//中间有空位，要跳过
        }
        //gold 2 redis 
        public async void Gold2Redis()
        {
            var redisT = await ttablelistEx.GetTableByNumber(_gameid, _tableid);
            if (redisT == null) return;
            ForeachBaseAndWatch((user) =>
            {
                ChessUser tempUser = user as ChessUser;
                if (tempUser._CurrentGold + tempUser.addgold > 0)
                {
                    if (redisT.Userbalan.Any(t => t.Key == tempUser._userid))
                    {
                        var ucache = redisT.Userbalan.Find(t => t.Key == tempUser._userid);
                        if (ucache != null)
                        {
                            ucache.clubid = tempUser.clubidx;
                            ucache.Value = tempUser._CurrentGold + tempUser.addgold;
                        }
                    }
                    else redisT.Userbalan.Add(new balance { Key = tempUser._userid, Value = tempUser._CurrentGold + tempUser.addgold, clubid = tempUser.clubidx });
                }
            });
            await BaseHelper.AddOrUpdate(redisT);
        }
        public async void Gold2RedisUser(ChessUser tempUser)
        {
            var redisT = await ttablelistEx.GetTableByNumber(_gameid, _tableid);
            if (redisT == null) return;

            if (tempUser._CurrentGold + tempUser.addgold > 0)
            {
                if (redisT.Userbalan.Any(t => t.Key == tempUser._userid))
                {
                    var ucache = redisT.Userbalan.Find(t => t.Key == tempUser._userid);
                    if (ucache != null)
                    {
                        ucache.clubid = tempUser.clubidx;
                        ucache.Value = tempUser._CurrentGold + tempUser.addgold;
                    }
                }
                else redisT.Userbalan.Add(new balance { Key = tempUser._userid, Value = tempUser._CurrentGold + tempUser.addgold, clubid = tempUser.clubidx });
            }
            await BaseHelper.AddOrUpdate(redisT);
        }
        #region room card
        // 扣除房卡
        public bool DealReduceDiamond(ChessUser cuser, int _roomcard)
        {
            if (cardused || cuser == null) return true;
            cardused = true;
            if (_gameCoin2Room1 == 10)
            {// 房主给
                cuser._tbUser.diamond -= _roomcard;
            }
            if (_gameCoin2Room1 == 11)
            {// 一起给
                ForeachBaseUser((user) =>
                {
                    user._tbUser.diamond -= _roomcard;
                });
            }
            return true;
        }

        #endregion

        // GPS Check
        public bool CheckGPS(ChessUser myu, bool havepass)
        {
            bool _havesamegps = false;
            ForeachBaseUser((tempUser) =>
            {
                if (tempUser._userid == myu._userid) return;
                var _dis = ToolsEx.GetDistancelat_lng(myu._tbUser.lat, myu._tbUser.lng, tempUser._tbUser.lat, tempUser._tbUser.lng);
                if (_dis < 100)
                {
                    _havesamegps = true;
                    return;
                }
            });
            if (havepass) _havesamegps = false;//密码房间 不检测距离 
            return _havesamegps;
        }

        /// <summary>
        /// 同位置，与IP警告
        /// </summary> 
        public bool NotifyWarning(tUser tuser)
        {
            //check ip 
            bool _havesameip = false;
            ForeachBaseUser((user) =>
            {
                if (user._isRobot) return;
                if (string.IsNullOrEmpty(user._tbUser.IP)) return;
                if (user._userid == tuser.UserID) return;
                if (user._tbUser.IP == tuser.IP) _havesameip = true;
            });
            return _havesameip;
            //if (_havesameip)
            //{
            //    sc_warning_n _exitForce = new sc_warning_n() { fn = "sc_warning_n", result = 1 };
            //    _exitForce._msgid = 1;
            //    _exitForce.gameid = _gameid;
            //    _exitForce.type = _havesameip ? 1 : 0;
            //    _exitForce.content = Language.Instance.withIp;

            //    List<UserIDMSG> imList = new List<UserIDMSG>();//给剩下的人发送消息，说明有人离开房间了，，

            //    ForeachAllDoBase((i) =>
            //    {
            //        BaseUser tempUser = _DicPos2User[i];
            //        imList.Add(new UserIDMSG(tempUser._userid, JsonUtils.Serialize(_exitForce), tempUser._isRobot, tempUser.NoPushMessage));
            //    });

            //    ForeachAllAndWatch((i) =>
            //    {
            //        BaseUser tempUser = _DicPos2UserWatch[i];
            //        imList.Add(new UserIDMSG(tempUser._userid, JsonUtils.Serialize(_exitForce), tempUser._isRobot, tempUser.NoPushMessage));
            //    });
            //    _bsDataServer.SendDataDelay(imList);
            //    _tableSendData.Add(imList);
            //    return _havesameip;
            //}
        }
   
        int[] goldlevels = new int[] { 10000, 5000, 1000, 500, 100, 50, 10 };

        public async ETTask<long> GetIntoGoldForRobot(ChessUser user)
        {
            long user_maxgold = await user._ClubGold(IsSupper);
            long gold = 0;
            int level = 0;
            for (; level < goldlevels.Length && user_maxgold < baserate * goldlevels[level]; level++) ;
            if (level < goldlevels.Length) { gold = baserate * goldlevels[ToolsEx.GetRandomSys(0, goldlevels.Length)]; }
            else gold = user_maxgold;
            return gold;
        }

        public virtual async ETTask<int> IntoGold(ChessUser user, long intogold, long user_maxgold, int mingoldlimit,int maxGoldLimit)
        {
            if (_bPractice)
            {
                user._CurrentGold = intogold;
                return 1;
            }
            if (user_maxgold < intogold || intogold < mingoldlimit)
            {
                return -1;//带入不足
            }
            //if (intogold > maxGoldLimit&&maxGoldLimit>0) return -99;//带入超过上限
            
            await user.UpdateGold(intogold, false);//带入就去掉 一桌完了返回 myu._tbUser.Gold -= intogold;
            user._CurrentGold += intogold;
            user._goldIntoHistory += intogold;//累计带入在这儿处理   
            user.WriteGoldChangeLog(-intogold, 33, _tableid.ToString(), true);//记录日志33:房间带入;34:带入返还
            
            return 1;
        }
        #region sitdown situp
        public bool IsSitDown<User>(int userid, out User user, out int seat, out bool IsInSeat) where User : ChessUser
        {
            if (_DicPos2User.TryGetPairByID(userid, out seat, out user))
            {
                user._isWatch = false;
                user.pos = seat;
                user._isExit = false;
                user._isExit_del = false;
                IsInSeat = true;
                _WaitExitUser.RemoveByID(userid);
                _WaitSitdownUser.RemoveByID(userid);
                return true;
            }
            if (_WaitSitdownUser.TryGetPairByID(userid, out seat, out user))
            {
                user._isWatch = false;
                user.pos = seat;
                user._isExit = false;
                user._isExit_del = false;
                IsInSeat = false;
                _WaitExitUser.RemoveByID(userid);
                return true;
            }
            IsInSeat = false;
            return false;
        }
        public virtual int Sitdown(int userid, int seat, bool IsPlaying)
        {
            if (seat > -1)
            {
                if (_WaitSitdownUser.TryGetPairByID(userid, out int key, out ChessUser user, seat))
                {
                    user.SitDownd(key);
                    _WaitExitUser.RemoveByID(userid, key);
                    SitDownPrint(userid, key, true);
                    return 1;
                }
                if (_DicPos2UserWatch.TryGetPairByID(userid, out int pos, out user, seat))
                {
                    if (IsPlaying)
                    {
                        if (_WaitSitdownUser.TryADD(seat, user))
                        {
                            user.SitDownd(seat);
                            SitDownPrint(userid, seat, true);
                        }
                        else return -102;
                    }
                    else if (_DicPos2User.TryADD(seat, user))
                    {
                        user.SitDownd(seat);
                        _DicPos2UserWatch.Remove(pos);
                        _WaitSitdownUser.RemoveByID(userid);
                        SitDownPrint(userid, seat, false);
                    }
                    else return -103;
                    _WaitExitUser.RemoveByID(userid, pos);
                    return 1;
                }
                if (_DicPos2User.TryGetPairByID(userid, out pos, out user, seat))
                {
                    user.SitDownd(pos);
                    _WaitSitdownUser.RemoveByID(userid, pos);
                    _WaitExitUser.RemoveByID(userid, pos);
                    return 1;
                }
                return -104;
            }
            return -101;
        }
        /// <summary>
        /// 站起
        /// </summary>
        /// <typeparam name="User"></typeparam>
        /// <param name="userid"></param>
        /// <param name="IsPlaying">桌子是否游戏进行中</param>
        /// <param name="bCanLeave">是否可以中途离开</param>
        /// <returns></returns>
        public virtual async ETTask<int> Situp<User>(int userid, bool IsPlaying, bool bCanLeave) where User : ChessUser
        {
            if (!_DicPos2User.TryGetUserByID(userid, out User myu, true) && !_WaitSitdownUser.TryGetUserByID(userid, out myu, true)) return 0;
            Situp(myu, IsPlaying,bCanLeave);
            await ETTask.CompletedTask;
            return 1;
        }
        /// <summary>
        /// 站起
        /// </summary>
        /// <typeparam name="User"></typeparam>
        /// <param name="user"></param>
        /// <param name="tablePlaying">桌子是否游戏进行中</param>
        /// <param name="bCanLeave">是否可以中途离开</param>
        /// <returns></returns>
        protected virtual int Situp<User>(User user, bool tablePlaying,bool bCanLeave) where User : ChessUser
        {
            user._isWatch = true;
            user._isReady = false;
            if (!tablePlaying)
            {
                if (_DicPos2User.TryRemoveByID(user._userid, out User temp, user.pos))
                {
                    Refund(temp, user.pos, false, false);
                    if (_DicPos2UserWatch.TryGetPairByID(temp._userid, out int waitpos, out User temp1)) temp1.pos = waitpos;
                    else
                    {
                        if (!_DicPos2UserWatch.ContainsKey(user.pos)) _DicPos2UserWatch.TryADD(user.pos, temp);
                        else
                        {
                            int wkey = FindWatchKey(true);
                            temp.pos = wkey;
                            _DicPos2UserWatch.TryADD(wkey, temp);
                        }
                    }
                    SendSitupNotice(new List<BaseUser>() { temp } );
                    if (temp._isRobot) BaseBrigeHelper.RobotCallback(temp._tbUser);
                    TraceLogEx.Log("\r\n玩家[" + user._userid + "]从座位[" + user.pos + "]上站起");
                    return 1;
                }
            }else if (bCanLeave)
            {
                if (_DicPos2User.TryGetUserByID(user._userid, out User temp))
                {
                    Refund(temp, user.pos, false, false);
                    TraceLogEx.Log("\r\n玩家[" + user._userid + "]中途从座位[" + user.pos + "]上站起");
                    return 1;
                }
            }
            else
            {
                if (_DicPos2User.TryGetPairByID(user._userid, out int pos, out User temp, user.pos))
                {
                    TraceLogEx.Log("\r\n玩家[" + user._userid + "]执行站起操作，本局结束后玩家从座位[" + pos + "]上站起");
                    return 0;
                }
                else if (_WaitSitdownUser.TryRemoveByID(user._userid, out pos, out temp, user.pos))
                {
                    TraceLogEx.Log("\r\n待坐玩家[" + user._userid + "]执行站起操作，已从待定座位[" + pos + "]上站起");
                    return 1;
                }
            }
            return -1;
        }

        protected virtual void SendSitupNotice(List<BaseUser> userlist) 
        {
            //List<UserIDMSG> imList = new List<UserIDMSG>();
            //ForeachBaseAndWatch((_user) =>
            //{
            //    BullFightUser tempUser = _user as BullFightUser;
            //    sc_situpkeep_n _situpkeep = new sc_situpkeep_n() { result = 1 };// 显示结束面板就行
            //    _situpkeep.userid = myu._userid;
            //    _situpkeep.isK = ismove ? 0 : myu._keepseat;
            //    imList.Add(new UserIDMSG(tempUser._userid, _situpkeep, tempUser._isRobot, tempUser.NoPushMessage, tempUser._msgid));
            //}); 
            //_senddataserver.SendDataDelay(imList);
            //_tableSendData.Add(imList); 
        }

        protected virtual void SendSitDownNotice(BaseUser user, bool IsInSeat, int pos) { }
        #endregion

        public override async ETTask ResetBase(bool gameover)
        {
            DelayExitAndSitdown();
            manager.Reset();
            SetStatus(TableStatusEnum.WaitforReady);
            await base.ResetBase(gameover);
        }

        /// <summary>
        /// 掉线 状态通知
        /// </summary> 
        public override void NotifyDisBase(int userid, int _isreconnect)
        {
            BaseUser myu = GetUserWaitByID(userid, true);
            if (myu == null) return;
            if (_isreconnect == 0) myu._isDisconnet = true;     //断线的，不用给他推送了

            sc_disconnect_n _exitForce = new sc_disconnect_n() { result = 1 };
            _exitForce._msgid = 1;
            _exitForce.gameid = _gameid;
            _exitForce.pos = myu.pos;
            _exitForce.tableid = _tableid;
            _exitForce.levelid = _levelid;
            _exitForce.reconnect = _isreconnect;

            List<UserIDMSG> imList = new List<UserIDMSG>();
            ForeachBaseAndWatch((tempUser) =>
            {
                imList.Add(new UserIDMSG(tempUser._userid, _exitForce, tempUser._isRobot, tempUser.NoPushMessage, tempUser._msgid));
            });
            _bsDataServer.SendDataDelay(imList);
        }
        /// <summary>
        ///  推送聊天信息 包括送花
        /// </summary>
        public bool SendChatBase(int userid, string content, int _type, int tpos)
        {
            BaseUser myu;
            TryGetUserByID(userid, out myu);
            if (myu == null) return false;
            List<UserIDMSG> imList = new List<UserIDMSG>();

            ForeachBaseAndWatch((tempUser) =>
            {
                sc_chat_n _chat_n = new sc_chat_n() { result = 1 };
                _chat_n.pos = myu.pos;
                _chat_n.content = content;
                _chat_n.type = _type;
                _chat_n.gameid = _gameid;
                _chat_n.tpos = tpos;
                _chat_n.keep = myu._keepseat;
                _chat_n.gold = (int)myu._CurrentGold;//返回身上的金币

                imList.Add(new UserIDMSG(tempUser._userid, _chat_n, tempUser._isRobot, tempUser.NoPushMessage, tempUser._msgid));
            });
            _bsDataServer.SendDataDelay(imList);
            return true;
        }

        protected virtual async void SendExitNotice(BaseUser user, int seat, bool IsPlaying, bool IsWatch = false)
        {
            sc_one_exittable_n _exitForce = new sc_one_exittable_n() { result = 1 };
            _exitForce._msgid = 1;
            _exitForce.gameid = _gameid;
            _exitForce.pos = IsWatch ? 0 : seat;
            _exitForce.userid = user._userid;
            _exitForce.name = user._tbwechatposData.py._n;
            if (!user._isExit_del)
            {
                TableComponentSync(user._userid);
                user._isExit_del = true;
            }
            ExitPrint(user._userid, seat, IsPlaying, IsWatch);
            if (IsWatch || IsPlaying) Send(user, _exitForce);
            else SendDataToBaseAndWatch(_exitForce);
            await user.SetSatusInLobby();
        }        

        public void PrintTalbePlayerCount(bool isprocessstart)
        {
            //TraceLogEx.Log(" [" + _gameid + "] tid:[" + _tableid + "] pro:[" + manager.ps[manager.index].GetProcessName() + "]" + (isprocessstart ? "开始" : "结束") + ",pc:[" + (_DicPos2User == null ? "null" : _DicPos2User.Count.ToString()) + "],list:" + JsonUtils.Serialize(GetPlayerCount()));
        }
        public void SitDownPrint(int userid, int seat, bool isdelay)
        {
        }
        public void ExitPrint(int userid, int pos, bool isdelay, bool iswatch = false)
        {
        }
        public virtual int FindSeat()
        {
            ChessUser _tempu;
            for (int i = 1; i <= _num_max; i++)
            {
                //var user = GetBaseUserByPos(i, true);
                //if (user == null) return i;
                //if ((user._isExit || user._isWatch) && !_WaitSitdownUser.TryGetUserByPos(i, out _tempu, true)) return i;
                if (_DicPos2User.ContainsKey(i)) continue;
                if (_WaitSitdownUser != null && _WaitSitdownUser.ContainsKey(i)) continue;
                return i;
            }
            return -1;
        }
        /// <summary>
        /// 得到随机位置
        /// </summary>
        /// <returns></returns>
        public int FindRanSeat()
        {
            List<int> poss = new List<int>();
            poss.AddRange(_DicPos2User.Keys);
            poss.AddRange(_WaitSitdownUser.Keys);
            if (poss.Count >= _num_max) return -1;
            List<int> allpos = new List<int>();
            for (int i = 1; i <= _num_max; i++) allpos.Add(i);
            List<int> surpos = allpos.Except(poss).ToList();
            if(surpos.Count()==0) return -1;
            int index = ToolsEx.GetRandomSys(0, surpos.Count()-1);
            return surpos[index];
        }


        protected virtual async ETTask<int> CheckSitdown(BaseUser user, int pos, long intogold, int cidx)
        {
            await ETTask.CompletedTask;
            return GetUserKey(user, pos);
        }

        public virtual void DelaySitup()
        {
            List<BaseUser> situplist = new List<BaseUser>();
            ForeachBaseUser(user =>
            {
                if (user._isWatch && IsRemoveWatch)
                {
                    _WaitExitUser.Add(user.pos, user);
                    situplist.Add(user);
                }
            });
            if (situplist.Count > 0) SendSitupNotice(situplist); //如果有多个人应用只通知一次  
        }
        public virtual void DelayExitTable()
        {
            if (_WaitExitUser != null)
            {
                foreach (var userinfo in _WaitExitUser)
                {
                    BaseUserMoveWatch(userinfo.Value);
                    Refund(userinfo.Value, userinfo.Key, false, false);
                    if (userinfo.Value._isRobot) BaseBrigeHelper.RobotCallback(userinfo.Value._tbUser);
                }
                _WaitExitUser.Clear();
            }
        }
        /// <summary>
        /// END退出房间
        /// 发通知
        /// </summary>
        public virtual void End_ExitTable()
        {
            List<int> exit = new List<int>();
            ForeachBaseAndWatch(user =>
            {
                if (user.EndExit)
                {
                    Refund(user, user.pos, false);
                    _WaitSitdownUser.RemoveByID(user._userid, user.pos);
                    exit.Add(user._userid);
                }
            });
            foreach (var uid in exit)
            {
                _DicPos2UserWatch.RemoveByID(uid);
                _DicPos2User.RemoveByID(uid);
            }
        }


        private void DelaySitDown()
        {
            if (_WaitSitdownUser == null) return;
            foreach (var item in _WaitSitdownUser)
            {
                item.Value._inseatcannotplay = false;
                _DicPos2User.TryADD(item.Key, item.Value);
                item.Value.SetKeepSeat();
                _DicPos2UserWatch.RemoveByID(item.Value._userid);
            }
            _WaitSitdownUser.Clear();
        }

        public void DelayExitAndSitdown()
        {
            DelaySitup();
            DelayExitTable();
            DelaySitDown();
        }


        /// <summary>
        /// 返还携带金币
        /// </summary>
        /// <param name="user"></param>
        /// <param name="key"></param>
        /// <param name="isplayer"></param>
        /// <param name="iswait"></param>
        public async virtual void Refund(BaseUser user, int key, bool isplayer = false, bool iswait = false, bool SendNotice = true)
        {
            await RefundGold(user);
            if (SendNotice) SendExitNotice(user, key, isplayer, iswait);
            else
            {
                if (!user._isExit_del)
                {
                    TableComponentSync(user._userid);
                    user._isExit_del = true;
                }
            }
        }

        protected virtual async ETTask RefundGold(BaseUser _user)
        {
            ChessUser user = _user as ChessUser;
            if (user._CurrentGold > 0 && !_bPractice)
            {
                if (IsSupper)
                {
                    await ClubHelper.UpdateClubGold(clubidx, user._userid, user._CurrentGold);
                    user.WriteUserClubgoldLog((await user._ClubGold(IsSupper)) + user._CurrentGold, 6, _gameid, _tableid.ToString(), -user._CurrentGold, clubidx);
                }
                else
                {
                    if (user._userwingold)
                    {
                        long AfterGold = user._CurrentGold;
                        double BeforeGold = user._tbUser.GetGoldAndWinGold;
                        user.GoldOutAll();
                        user.WriteGoldChangeLog(AfterGold - BeforeGold, 34, AfterGold, BeforeGold, "exit table");
                    }
                    else
                    {
                        user._tbUser.Gold = user._CurrentGold;
                        user.WriteGoldChangeLog(user._tbUser.GetGoldAndWinGold, 34, _tableid.ToString(), false);
                    }
                    await BaseHelper.AddOrUpdateBase(user._tbUser);
                }
                user._CurrentGold = 0;
                Gold2RedisUser(user);
            }
            //else TraceLogEx.Error(_user._userid + " gold: " + user._CurrentGold);
        }
        /// <summary>
        /// 退出房间
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="IsPlaying"></param>
        /// <returns></returns>
        public virtual int ExitTable(int userid, bool IsPlaying, int clubidx = 0)
        {
            if (_DicPos2UserWatch.TryRemoveByID(userid, out BaseUser _user))
            {
                Refund(_user, 0, IsPlaying, true);
                _WaitSitdownUser.Remove(userid);
                return 1;
            }

            if (!IsPlaying)
            {
                if (_DicPos2User.TryRemoveByID(userid, out int seat, out _user))
                {
                    Refund(_user, seat, IsPlaying);
                    _WaitSitdownUser.RemoveByID(userid, seat);
                    return 1;
                }
            }
            else if (_DicPos2User.TryGetPairByID(userid, out int seat, out _user) && _WaitExitUser.TryAddUser(seat, _user))
            {
                _user._isExit = true;
                _WaitSitdownUser.RemoveByID(userid, seat);
                return 1;
            }
            return -3;
        }

        public void Send(BaseUser user, sc_base msg)
        {
            _bsDataServer.SendDataDelay(new List<UserIDMSG> { new UserIDMSG(user._userid, msg, user._isRobot, user.NoPushMessage, user._msgid) });
        }
        public void SendDataToBaseAndWatch(sc_base msg)
        {
            var msgs = new List<UserIDMSG>();
            ForeachBaseAndWatch((user) =>
            {
                if (!user._isExit) msgs.Add(new UserIDMSG(user._userid, msg, user._isRobot, user.NoPushMessage, user._msgid));
            });

            if (msgs.Count > 0) _bsDataServer.SendDataDelay(msgs);
        }

        public string GetUserInfos()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("============================ DicPos2User ============================\r\n" + _DicPos2User.ToUserInfos() + "\r\n");
            sb.Append("============================ DicPos2UserWatch ============================\r\n" + _DicPos2UserWatch.ToUserInfos() + "\r\n");
            sb.Append("============================ WaitExitUser ============================\r\n" + _WaitExitUser.ToUserInfos() + "\r\n");
            sb.Append("============================ WaitSitdownUser============================\r\n" + _WaitSitdownUser.ToUserInfos() + "\r\n");
            return sb.ToString();
        }

        #region package data
        /// <summary>
        /// 所有玩家包括 观众
        /// </summary> 
        public async Task<List<OtherUserInfoSD>> GetOUserInfoBaseAndWatch(int UserID)
        {
            List<OtherUserInfoSD> oUserlist = new List<OtherUserInfoSD>();
            tuserInfoEx userinfo = await tb_userinfoEx.GetFromCachebyUserID(UserID);
            tuserInfoEx owserinfo = await tb_userinfoEx.GetFromCachebyUserID(_ownerid);
            ForeachBaseAndWatch((_tempuser1) =>
            {
                var _tempuser = _tempuser1 as ChessUser;
                int isw = _tempuser.CheckisWatch() ? 1 : (_tempuser._tbwechatposData == null ? 0 : _tempuser._tbwechatposData.isW); //2 是申请中                 
                _tempuser._tbwechatposData.isK = _tempuser._keepseat;
                _tempuser._tbwechatposData.pos = _tempuser.pos;
                _tempuser._tbwechatposData.isR = _tempuser._isReady ? 1 : 0;
                _tempuser._tbwechatposData.isW = isw;
                //tempuser._tbwechatposData.isW = !_tempuser._isWatch && _WaitSitdownUser.TryGetUserByID(UserID, out ChessUser user) ? 1 : 0;
                _tempuser._tbwechatposData.py.uremark = null;
                if (userinfo.Userremark != null && userinfo.Userremark.Count > 0)
                    _tempuser._tbwechatposData.py.uremark = userinfo.Userremark.Find(t => t.userid == _tempuser._userid);

                oUserlist.Add(_tempuser._tbwechatposData);
            });
            return oUserlist;
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="loginuser">登陆玩家</param>
        /// <returns></returns>
        public List<OtherUserInfoSD> GetOUserInfoBase(ChessUser _user)
        {
            if (_user == null) return null;
            List<OtherUserInfoSD> oUserlist = new List<OtherUserInfoSD>();

            ForeachWaitSit((_tempuser) =>
            {
                int isw = _tempuser.CheckisWatch() ? 1 : 0;    
                _tempuser._tbwechatposData.isW = isw;
                _tempuser._tbwechatposData.isK = _tempuser._keepseat;
                _tempuser._tbwechatposData.pos = _tempuser.pos;

                _tempuser._tbwechatposData.py.uremark = null;
                if (_user._userinfo.Userremark != null && _user._userinfo.Userremark.Count > 0)
                    _tempuser._tbwechatposData.py.uremark = _user._userinfo.Userremark.Find(t => t.userid == _tempuser._userid);

                oUserlist.Add(_tempuser._tbwechatposData);
            });

            ForeachBaseUser((_user1) =>
            {
                var _tempuser = _user1 as ChessUser;
                if (_tempuser!=null && oUserlist.Any(t=>t.py.userid== _tempuser._userid)) return;//优先显示WaitSitdown   
                
                int isw = _tempuser.CheckisWatch() ? 1 : 0;    
                _tempuser._tbwechatposData.isW = isw;
                _tempuser._tbwechatposData.isK = _tempuser._keepseat;
                _tempuser._tbwechatposData.pos = _tempuser.pos;

                _tempuser._tbwechatposData.py.uremark = null;
                if (_user._userinfo.Userremark != null && _user._userinfo.Userremark.Count > 0)
                    _tempuser._tbwechatposData.py.uremark = _user._userinfo.Userremark.Find(t => t.userid == _tempuser._userid);

                oUserlist.Add(_tempuser._tbwechatposData);
            });
            return oUserlist;
        }
        public List<PInfoSD> GetTablePlayer()
        {
            List<PInfoSD> ulist = new List<PInfoSD>();
            ForeachBaseAndWatch((_user) =>
            {
                ChessUser _tempuser = _user as ChessUser;
                if (!_tempuser._palyedgame) return;
                ulist.Add(new PInfoSD()
                {
                    uid = _tempuser._userid,
                    wicon = ToolsEx.IsHandlePhoto(_tempuser._tbUser.isRobot, _tempuser._tbUser.wechatHeadIcon).Trim(),
                    wName = _tempuser._tbUser.wechatName.Trim()
                });
            });
            return ulist;
        }

        //public List<CommonPosValSD> GetPosGoldWin()
        //{
        //    List<CommonPosValSD> _pos2Gold = new List<CommonPosValSD>();
        //    ForeachBaseUser((user) => { _pos2Gold.Add(new CommonPosValSD() { pos = user._userid, val = user._goldwin }); });
        //    return _pos2Gold;
        //}

        public List<CommonPosValSD> GetCurrentPosGold()
        {
            List<CommonPosValSD> _pos2Gold = new List<CommonPosValSD>();

            ForeachBaseUser((user) => { _pos2Gold.Add(new CommonPosValSD() { pos = user._userid, val = user._CurrentGold });});
            return _pos2Gold;
        }
        public List<CommonPosValSD> GetPos2Gamble()
        {
            List<CommonPosValSD> _pos2gamble = new List<CommonPosValSD>();
            ForeachBaseUser((user) => { _pos2gamble.Add(new CommonPosValSD() { pos = user._userid, val = user._gambleAll }); });
            return _pos2gamble;
        }

        public List<CommonPosValSD> GetPos2GiveUp()
        {
            List<CommonPosValSD> _allin = new List<CommonPosValSD>();
            ForeachBaseUser((user) => { _allin.Add(new CommonPosValSD() { pos = user._userid, val = user._isgiveup ? 1 : 0 }); });
            return _allin;
        }
        #endregion

     

        public override List<OtherUserInfoSD> GetOtherUserInfoSD()
        {
            List<OtherUserInfoSD> oUserlist = new List<OtherUserInfoSD>(); //通知所有人，有人进入桌子了    
            ForeachBaseUser((tempUser) =>
            {
                tempUser._tbwechatposData.isW = tempUser.CheckisWatch() ? 1 : 0;
                tempUser._tbwechatposData.isK = tempUser._keepseat;
                tempUser._tbwechatposData.pos = tempUser.pos;
                tempUser._tbwechatposData.isDis = tempUser._isDisconnet ? 1 : 0;
                tempUser._tbwechatposData.isR = tempUser._isReady ? 1 : 0;
                tempUser._tbwechatposData.py.gold = tempUser._CurrentGold;
                tempUser._tbwechatposData.py.uremark = null;
                oUserlist.Add(tempUser._tbwechatposData);
            });
            if (_WaitSitdownUser == null) _WaitSitdownUser = new ConcurrentDictionary<int, ChessUser>();
            foreach (var tempUser in _WaitSitdownUser.Values)
            {
                tempUser._tbwechatposData.isW = tempUser.CheckisWatch() ? 1 : 0;
                tempUser._tbwechatposData.isK = tempUser._keepseat;
                tempUser._tbwechatposData.pos = tempUser.pos;
                tempUser._tbwechatposData.isDis = tempUser._isDisconnet ? 1 : 0;
                tempUser._tbwechatposData.isR = tempUser._isReady ? 1 : 0;
                tempUser._tbwechatposData.py.gold = tempUser._CurrentGold;
                tempUser._tbwechatposData.py.uremark = null;
                oUserlist.Add(tempUser._tbwechatposData);
            }
            return oUserlist;
        }
        public bool PrintRepeat()
        {
            bool IsRepeat = false;
            if (_DicPos2User.PrintRepeat("_DicPos2User")) IsRepeat = true;
            if (_DicPos2UserWatch.PrintRepeat("_DicPos2UserWatch")) IsRepeat = true;
            if (_WaitExitUser.PrintRepeat("_WaitExitUser")) IsRepeat = true;
            if (_WaitSitdownUser.PrintRepeat("_WaitSitdownUser")) IsRepeat = true;

            return IsRepeat;
        }

        public void SendEndProcess(int index)
        {
            manager.StopTimer();
            handler.Receive(manager.NewProcessEnd(index)).Coroutine();
        }
        public async ETTask SendInnerCommand(int userid, cs_base cs)
        {
            await handler.Receive(manager.NewInnerCommand(userid, cs, JsonUtils.Serialize(cs)));
        }

      
        public void SendToCompete(cs_compete cs)
        {
            CompeteService.Send(cs);
        }
        /// <summary>
        /// 解散房间
        /// </summary>
        public virtual async void DismissTableTime()
        {
            if (_tableid == 0) return;

            ttablelist temp = await ttablelistEx.GetTableByNumber(_gameid, _tableid);
            if (temp == null) return;
            temp.tableStatus = 3;
            await ttablelistEx.AddOrUpdate(temp);

           await ForeachBaseAndWatchAsync(async (tempUser) =>
            {
               await tempUser.SetSatusInLobby();
            });
            if (_tablestatus == TableStatusEnum.WaitforReady) await BigEnd();
            else await DoExecuteAllEnd(true);//强制大结算 
        }
        public virtual async ETTask BigEnd() { }

        public virtual async ETTask DoExecuteAllEnd(bool _forceOver)
        {

        }
        public BaseUser GetUserWaitByID(int userID, bool _istry = false)
        {
            foreach (var _tempbuser in _DicPos2User)
            {
                if (_tempbuser.Value._userid == userID) return _tempbuser.Value;
            }
            foreach (var _tempbuser in _WaitSitdownUser)
            {
                if (_tempbuser.Value._userid == userID) return _tempbuser.Value;
            }

            if (!_istry) TraceLogEx.Error("201611102029 chesstable fetal Error 必需处理   没找到userID:" + userID);
            return null;
        }

        #region  留座相关功能 整理到ChessCard

        /// <summary>
        /// 移除留座时间 超过的人
        /// </summary>
        protected void RemoveKeepSeatOver()
        {
            List<int> _removeKey = new List<int>();
            ForeachBaseUser((_tempuser) =>
            {
                if (_tempuser._keepseat == -1 || _tempuser._isWatch)
                {
                    _removeKey.Add(_tempuser.pos);
                }
            });
            foreach (var tkey in _removeKey)
            {
                if (_DicPos2User.TryRemove(tkey, out BaseUser _tempb))
                {
                    //var cuser = _tempb as ChessUser;
                    //_tempb.SetKeepSeat();
                    _tempb._isWatch = true;
                    TraceLogEx.Log("玩家[" + _tempb._userid + "]因留作时间结束,从牌桌[" + _tableid + "]的座位[" + tkey + "]上站起");
                    if (!CheckUserInWatch(_tempb._userid))
                    {
                        if (!_DicPos2UserWatch.ContainsKey(tkey)) _DicPos2UserWatch.Add(tkey, _tempb);
                        else
                        {
                            int _tempwkey = FindWatchKey(true);
                            _tempb.pos = _tempwkey;
                            _DicPos2UserWatch.TryAdd(_tempwkey, _tempb);
                        }
                    }
                    else TraceLogEx.Error("logic error must deal...............202012162119");
                }
            }
        }

        /// <summary>
        /// 移除同时在两个字典中的人
        /// </summary>
        protected void RemoveMutilUser_Patch()
        {
            List<int> patchlist = new List<int>();
            ForeachBaseUser((_tempuser) =>
            {
                if (CheckUserInWatch(_tempuser._userid))
                {
                    TraceLogEx.Error("logic error must deal...............202012162122");
                    patchlist.Add(_tempuser._userid);
                }
            });
            foreach (var tuserid in patchlist)
            {   //移出观众用户  //patch...
                if (CheckUserInWatch(tuserid))
                {
                    int _tkey = 0;
                    foreach (int key in _DicPos2UserWatch.Keys)
                    {
                        if (_DicPos2UserWatch[key]._userid == tuserid) _tkey = key;
                    }
                    if (_tkey == 0)
                    {

                        TraceLogEx.Error("logic error must deal._tkey == 0..............202012162123");
                        continue;
                    }
                    BaseUser _tempb;

                    _DicPos2UserWatch.TryRemove(_tkey, out _tempb);
                }
            }
        }
        /// <summary>
        /// 补丁 前面删除了 但不知道为什么还有
        /// </summary>
        protected void DelWatchUser_Patch()
        {
            foreach (int key in _DicPos2User.Keys)
            {
                foreach (int wkey in _DicPos2UserWatch.Keys)
                {
                    if (_DicPos2UserWatch[wkey]._userid == _DicPos2User[key]._userid)
                    {
                        BaseUser _temp;
                        _DicPos2UserWatch.TryRemove(wkey, out _temp);
                        break;
                    }
                }
            }
        }
        #endregion

        /// <summary>
        ///  to  _DicPos2UserWatch
        /// </summary>
        /// <param name="myu"></param>
        /// <returns></returns>
        public void BaseUserMoveWatch(BaseUser myu)
        { 
            if (_DicPos2User.TryRemoveByID(myu._userid, out BaseUser temp, myu.pos))
            {
                if (_DicPos2UserWatch.TryGetPairByID(temp._userid, out int waitpos, out BaseUser temp1)) temp1.pos = waitpos;
                else
                {
                    if (!_DicPos2UserWatch.ContainsKey(myu.pos)) _DicPos2UserWatch.TryADD(myu.pos, temp);
                    else
                    {
                        int wkey = FindWatchKey(true);
                        temp.pos = wkey;
                        _DicPos2UserWatch.TryADD(wkey, temp);
                    }
                }
            } 
        }


        public void UpdateGameData()
        { 
        }

        public int GetRobotCount()
        {
            int _robot = 0;
            ForeachBaseUser((user) =>
            {
                if (user._isRobot) _robot++;
            });
            if (_WaitSitdownUser != null)
            {
                RobotForeachBaseUser((user) =>
                {
                    if (user._isRobot) _robot++;
                });
            }
            return _robot;
        }

        /// <summary>
        /// 获取在玩的非机器人玩家
        /// </summary>
        public int GetPersonCount
        {
            get 
            {
                int _person = 0;
                ForeachBaseUser((user) =>
                {
                    if (!user._isRobot) _person++;
                });
                return _person; 
            }
        }

        public void RobotForeachBaseUser(Action<BaseUser> match)
        {
            if (match == null) return;

            foreach (var _tempbuser in _WaitSitdownUser)
            {
                match(_tempbuser.Value);
            }
        }

        public void WriteTableLog(ttableLog tr)
        {
            _tablelog.EndTime = DateTime.Now;
            _tablelog.gameid = _gameid;
            _tablelog.levelid = _levelid;
            CacheList<int> _ulist = new CacheList<int>();
            long allbets = 0;
            ForeachBaseUser((user) =>
            {
                if (!user._isRobot&& (user._gambleAll > 0 || user._goldChange != 0))
                {
                    _ulist.Add(user._userid);
                    allbets += user._gambleAll;
                }
            });
            if (_ulist.Count <= 0) return;
            _tablelog.userids = _ulist;
            _tablelog.bets = allbets;
         
            BaseHelper.AddAsync<ttableLog>(tr); 
        }

        public void WriteBigEndLog( string tulist, string bigendstr, int clubidx, int allidx)
        {
            WriteTableLog(_tablelog);
            ttablehistoryLog newRow = new ttablehistoryLog() { gameid = _gameid, RoomNum = _tableid, CreatTime = DateTime.Now, BigEndList = bigendstr, clubid = clubidx, allid = allidx, tableName = tname };
            CacheList<Model.PInfoSD> ulist = new CacheList<Model.PInfoSD>();
            ForeachBaseAndWatch((_tempuser) =>
            {
                ulist.Add(new Model.PInfoSD()
                {
                    uid = _tempuser._userid,
                    wicon = ToolsEx.IsHandlePhoto(_tempuser._tbUser.isRobot, _tempuser._tbUser.wechatHeadIcon).Trim(),
                    wName = _tempuser._tbUser.wechatName.Trim()
                });
            });
            newRow.plist = ulist;
            newRow.GameDetails = tulist;
            newRow.bg = baserate;
            newRow.Starttime = createTime;
            ttableHistoryLogEx.Insert(newRow);
        }
    }
}