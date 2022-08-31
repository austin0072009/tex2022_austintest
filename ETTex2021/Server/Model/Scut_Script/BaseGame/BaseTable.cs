using ETModel.Framework.Common.Serialization;
using ETModel.Framework.Game.Contract.Action;
using ETModel.Script.Model;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace ETModel.Script.CsScript.Action
{

    public delegate ETTask ActionAsync<in T>(T obj);
    public class BaseTable
    {
        public BaseTable()
        { }
        public int _gameid;
        public int _levelid;
        public int _tableid;// 桌号 6位
        public BaseRoom _room;
        public int baserate;

        protected BaseSendDataServer _bsDataServer;

        /// <summary>
        /// 是否为练习场桌子
        /// </summary>
        public bool _bPractice = false;
        /// <summary>
        /// 试玩场默认金币
        /// </summary>
        public long _bintogold = 1000000;

        /// <summary>
        /// 桌子的状态 
        /// </summary>
        public TableStatusEnum _tablestatus { get; protected set; }

        /// <summary>
        /// LOG用的状态
        /// </summary>
        public string _strStatus; 

        /// <summary>
        /// 此桌的最小人数，才能开局
        /// </summary>
        public int _num_min;
        /// <summary>
        /// 此桌的最大人数
        /// </summary>
        public int _num_max;
        /// <summary>
        /// >=_num_min  <= _num_max 用于一桌的开始
        /// </summary>
        public int _num_start;
        /// <summary>
        /// 当前是谁的令牌，即该谁正常出牌   1 2 3  
        /// 特殊赋值的地方  庄第一次初始赋值  每MoveNextUserToken  加1   
        /// </summary>
        public int _userTokenPos;

        /// <summary>
        /// 正常结束，n-1个人认输了，解散成功
        /// </summary>
        public bool _gameover = false;
        /// <summary>
        ///  此卓对面的位置与USER字典  
        /// </summary>
        public ConcurrentDictionary<int, BaseUser> _DicPos2User;
        /// <summary>
        /// 观众玩家
        /// </summary>
        public ConcurrentDictionary<int, BaseUser> _DicPos2UserWatch;

        #region game command

        public delegate ETTask<string> GameCommand(int UserID, cs_base cs, string data);
        protected Dictionary<string, GameCommand> commands = new Dictionary<string, GameCommand>();
        public ProcessManager manager = new ProcessManager();
        public bool IsTableCommond(string command)
        {
            return commands.ContainsKey(command.ToLower());
        }
      
        public async ETTask<string> execute(int userID, GameRequest request)
        {
            if (commands.TryGetValue(request.csbase.fn.ToLower(), out GameCommand cammond))
            {
                return await cammond(userID, request.csbase, request.data);
            }
            else TraceLogEx.Error(request.csbase.fn + " can not find...");
            return "";
        }

        public async ETTask<string> execute(int userID, cs_base cs, string data)
        {
            if (commands.TryGetValue(cs.fn.ToLower(), out GameCommand cammond))
            {
                return await cammond(userID, cs, data);
            }
            return "";
        }
        #endregion

        /// <summary>
        /// 当前桌在玩的人数  含坐下的观众[特殊时间卡进来的]  不含坐下的观众用GetPlayerCount()
        /// </summary>
        public int _playerCount
        {
            get
            {
                if (_DicPos2User == null) return 0;
                else return _DicPos2User.Count;
            }
        }

        /// <summary>
        /// 这一桌的录相记录 在开始一桌的时候 new 这个对象。    
        /// </summary>
        protected ttableLog _tablelog;
       
        /// <summary>
        /// 最近活动时间  
        /// </summary>
        protected DateTime _liveTime;
        public void SetAlive(int delaysec = 0)
        {
            _liveTime = DateTime.Now.AddSeconds(delaysec);
        }
        protected bool CheckAlive(int sec)
        {
            if (DateTime.Now < _liveTime.AddSeconds(sec)) return true;
            return false;
        }      

        public string _tableMathCode;
        public int _gametype;

        public int _tableMaxCount;
        /// <summary>
        /// 超时的时间
        /// </summary>
        public int _turnWaitTime;
        protected virtual void Initi(ConcurrentDictionary<int, BaseUser> _pos2user, BaseRoom room, int minnum, int maxnum, int gameid, BaseSendDataServer _bsds, SendOrPostCallback callback)
        {
            _tablelog = new ttableLog();
            Interlocked.Exchange(ref _userTokenPos, 0);

            DateTime tempDT = DateTime.Now;
            _tableMathCode = tempDT.ToString("HHmm") + _tableid;
            if (_pos2user == null) _pos2user = new ConcurrentDictionary<int, BaseUser>();
            _DicPos2UserWatch = new ConcurrentDictionary<int, BaseUser>();
            _DicPos2User = _pos2user;
            _room = room;
            _levelid = room._levelid;
            baserate = room.BaseRate;
            _num_max = maxnum;
            _num_min = minnum;
            _num_start = 2;
            _gameid = gameid;
            _tablestatus = TableStatusEnum.Initi;
            _bsDataServer = _bsds;
            
            if (callback != null)
            {
                _timer = new Timer((state) => { OneThreadSynchronizationContext.Instance.Post(callback, state); }, this, -1, -1);
                _timerforuser = new Timer((state) => { OneThreadSynchronizationContext.Instance.Post(DealperUser, state); }, this, 10, 10);
            }
        }
        private void DealperUser(object state)
        {
            var tempBaseTable = state as BaseTable;
            if (tempBaseTable == null) return;
            tempBaseTable.SomeUserIsOverTime();
        }
        /// <summary>
        /// 当前动作等待时间已到 // 按各个用户处理， 
        /// </summary>
        /// <returns></returns>
        public bool SomeUserIsOverTime()
        {
            bool _tempHaveTimeOut = false;

            if (_tableid == 0)
            {
                TraceLogEx.Error(_gameid + " : gameid,    the tableid is 0,  ");
                StopTimer();//上层逻辑有问题这个打个补丁
                return false;
            }
            //先执行用户到期，再执行桌子到期
            foreach (var user in _DicPos2User.Values)
            {
                if (user._WaitClientLimitCount == 0) continue;
                if (user._waitUserAction == "0") continue;
                if (DateTime.Now >= user._WaitStartTime)
                {
                    DealEveryUser(user);
                    _tempHaveTimeOut = true;
                    continue;
                }
            }
            if (_waitAction != "0" && DateTime.Now >= _WaitStartTime)
            {
                DealEveryTable();
                _waitAction = "0";
            }
            return _tempHaveTimeOut;
        }
        public bool IsDgSccuess(tUser user, int iWinScore)
        {
            if (Math.Abs(user.DgCurrScore - iWinScore) >= Math.Abs(user.DgTotalScore * user.ControlLimitRatio / 100))
            {
                return false;
            }
            else if (user.DgCurrScore > 0 && Math.Abs(iWinScore - user.DgCurrScore) >= Math.Abs(user.DgTotalScore * user.ControlEndRatio / 100))
            {
                return false;
            }
            return true;
        }
        /// <summary>
        /// 基础遍历方法
        /// </summary>
        /// <param name="match"></param>
        public void ForeachBaseUser(Action<BaseUser> match)
        {
            if (match == null) return;
            if (_DicPos2User == null)
            {
                TraceLogEx.Error("201911151413bs fetal error  _DicPos2User is null...... ...........");
                return;
            }

            foreach (var _tempbuser in _DicPos2User)
            {
                match(_tempbuser.Value);
            }
        }
        public async ETTask ForeachBaseUserAsync(ActionAsync<BaseUser> match)
        {
            if (match == null) return;
            if (_DicPos2User == null)
            {
                TraceLogEx.Error("201911151413bs fetal error  _DicPos2User is null...... ...........");
                return;
            }

            foreach (var _tempbuser in _DicPos2User)
            {
              await  match(_tempbuser.Value);
            }
        } 

        public async ETTask UpdateUserInfo()
        {
            foreach (var user in _DicPos2User.Values)
            {
                await BaseHelper.AddOrUpdateBase<tUser>(user._tbUser); //更新数据
                ////if (user._isRobot || user._goldChange == 0) continue;
                ////tuserInfoEx infoEx = await tb_userinfoEx.GetFromCachebyUserID(user._userid);
                ////user.WriteGoldChange(user._goldChange, "游戏结算", 23);
                ////if (user._goldChange > 0)
                ////{
                ////    infoEx.WinGold += user._goldChange;
                ////    if (user._tbUser.Gold < infoEx.WinGold)
                ////    {
                ////        infoEx.WinGold = user._tbUser.Gold;
                ////    }
                ////}
                ////else
                ////{
                ////    if (user._tbUser.Gold < infoEx.WinGold)
                ////    {
                ////        infoEx.WinGold = user._tbUser.Gold;
                ////    }
                ////}
                ////await BaseHelper.AddOrUpdateBase(infoEx);
            }
        }

        public void ForeachWatch(Action<BaseUser> match)
        {
            if (match == null) return;
            if (_DicPos2UserWatch != null)
            {
                foreach (var _tempbuser in _DicPos2UserWatch)
                {
                    match(_tempbuser.Value);
                }
            }
        }
        /// <summary>
        /// 两个字典都分别执行一次
        /// </summary>
        /// <param name="match"></param>
        public void ForeachBaseAndWatch(Action<BaseUser> match)
        {
            if (match == null) return;
            if (_DicPos2User != null)
            {
                foreach (var _tempbuser in _DicPos2User)
                {
                    match(_tempbuser.Value);
                }
            }

            if (_DicPos2UserWatch != null)
            {
                foreach (var _tempbuser in _DicPos2UserWatch)
                {                    
                    match(_tempbuser.Value);
                }
            }
        }
        /// <summary>
        /// 两个字典都分别执行一次
        /// </summary>
        /// <param name="match"></param>
        public async ETTask ForeachBaseAndWatchAsync(ActionAsync<BaseUser> match)
        {
            if (match == null) return;
            if (_DicPos2User != null)
            {
                foreach (var _tempbuser in _DicPos2User)
                {
                    await match(_tempbuser.Value);
                }
            }

            if (_DicPos2UserWatch != null)
            {
                foreach (var _tempbuser in _DicPos2UserWatch)
                {
                    await match(_tempbuser.Value);
                }
            }
        }
        public void SetStatus(TableStatusEnum _tse)
        {
            _tablestatus = _tse;
        }
        public async void AsyncDelayExeFun(System.Action delayFun, int ms = 10)
        {
            await ThreadEx.Sleep(ms);
            delayFun();
        }
    
        protected void InitiAdd(int key, BaseUser _buser)
        {
            BaseUser _olduser = null;
            int _oldkey = 0;
            foreach (var _tempbuser in _DicPos2User)
            {
                if (_tempbuser.Value._userid == _buser._userid)
                {
                    _olduser = _tempbuser.Value;
                    _oldkey = _tempbuser.Key;
                }
            }
            if (_olduser != null && _oldkey != 0)
            {   //已经存在 不能移出只能修改key  在游戏中未结算时就退出 再次进入坐下的逻辑
                BaseUser _delTemp = null;
                _DicPos2User.TryRemove(_oldkey, out _delTemp); //同一个用户不允许重复加入
            }
            if (!_DicPos2User.ContainsKey(key)) { _DicPos2User.TryAdd(key, _buser); _buser._isWatch = false; }
            if (key < 1) TraceLogEx.Error(key + ",key   add repeat   mayby logic error!!!" + _buser._userid);
            _DicPos2User[key].pos = key;
            Game.Scene.GetComponent<TableComponent>()?.InitTable(_gameid, _levelid, _tableid, _buser._userid);
            
        }

        protected virtual async ETTask<bool> StartBase()
        {
            SetStatus(TableStatusEnum.Playing);
            _tablelog.MatchCode = _tableMathCode;
            _tablelog.StartTime = DateTime.Now;
            _liveTime = DateTime.Now;
            foreach (var user in _DicPos2User.Values)
            {
                UserStatus us = await BaseHelper.GetUserStatusbyUserID(user._userid);
                if (us == null)
                {
                    TraceLogEx.Error("201208311452basetable 必须找到的UserID： " + user._userid);
                    continue;
                }
                if (us.Status != UserStatusEnum.InTableDaPaiDis) us.SetStatus(UserStatusEnum.InTableDaPai);
                await BaseHelper.AddorUpdateUserStatus(us);
            }
            return true;
        }

        /// <summary>
        ///  初始化进入的人通知
        /// </summary>
        protected async void EnterTableNotice(bool _nosenddata = false)
        {
            await  ForeachBaseUserAsync(async (_tempBUser) =>
            {
              await  _tempBUser.SetStatus(UserStatusEnum.InTableWaiting, _gameid, _levelid, _tableid);
            });
            await ThreadEx.Sleep(500);

            if (_DicPos2User == null) return;
            List<OtherUserInfoSD> oUserlist = new List<OtherUserInfoSD>();
            ForeachBaseUser((_tempBUser) =>
            {
                _tempBUser._tbwechatposData.isDis = _tempBUser._isDisconnet ? 1 : 0;
                _tempBUser._tbwechatposData.isR = _tempBUser._isReady ? 1 : 0;
                _tempBUser._tbwechatposData.isW = _tempBUser.CheckisWatch() ? 1 : 0;
                _tempBUser._tbwechatposData.isK = _tempBUser._keepseat;
                _tempBUser._tbwechatposData.py.gold = _tempBUser._CurrentGold;
                oUserlist.Add(_tempBUser._tbwechatposData);
            });
            List<UserIDMSG> imList = new List<UserIDMSG>();
            ForeachBaseAndWatch((tempUser) =>
            {
                sc_entertable_n _entertable = new sc_entertable_n() { result = 1 };
                _entertable.pos = tempUser.pos;
                _entertable.tpos = tempUser.pos;
                _entertable.gameid = _gameid;
                _entertable.tableid = _tableid;
                _entertable.levelid = _levelid;
                _entertable.gtype = _gametype;
                _entertable.plist = oUserlist;
                _entertable.mcode = _tableMathCode + "";
                _entertable.maxCount = _tableMaxCount;
                _entertable.levelid = _levelid;
                imList.Add(new UserIDMSG(tempUser._userid, _entertable, tempUser._isRobot, tempUser.NoPushMessage, tempUser._msgid));
            });
            _bsDataServer.SendDataDelay(imList);
        }

        protected void EnterTableEnd(int userid)
        {
            tb_UserEx.WriteUserOnLineTime(userid, _gameid, _levelid, false, true);
        }
        /// <summary>
        /// 后面进入的FJ的人通知
        /// </summary>
        /// <param name="key"></param>
        /// <returns></returns>
        protected void EnterTableAdditiveNotice(int key)
        {
            var oUserlist = GetOtherUserInfoSD();
            var res = Entertable_Notice(oUserlist, key, oUserlist.Count);
        }
        public virtual List<OtherUserInfoSD> GetOtherUserInfoSD()
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
            return oUserlist;
        }
        private async Task<int> Entertable_Notice(List<OtherUserInfoSD> oUserlist, int tpos, int order = 0)
        {
            await ThreadEx.Sleep(10 + order * 50); //模拟耗时操作
            List<UserIDMSG> imList = new List<UserIDMSG>();
            ForeachBaseAndWatch((tempUser) =>
            {
                sc_entertable_n _entertable = new sc_entertable_n() { result = 1 };
                _entertable.pos = tempUser.pos;
                _entertable.tpos = tpos;
                _entertable.gameid = _gameid;
                _entertable.levelid = _levelid;
                _entertable.tableid = _tableid;
                _entertable.gtype = _gametype;
                _entertable.plist = oUserlist;
                _entertable.mcode = _tableMathCode + "";
                _entertable.maxCount = _tableMaxCount;

                imList.Add(new UserIDMSG(tempUser._userid, _entertable, tempUser._isRobot, tempUser.NoPushMessage, tempUser._msgid));
            });
            _bsDataServer.SendDataDelay(imList);
            //NotifyWarning();
            return 0;
        }
        /// <summary>
        /// 掉线 状态通知
        /// </summary> 
        public virtual void NotifyDisBase(int userid, int _isreconnect)
        {
            BaseUser myu = GetBaseUserByID(userid, true);
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


        public bool TryGetUserByID(int userid, out BaseUser user)
        {
            user = GetBaseUserByID(userid, true);
            return user != null;
        }
        public bool TryGetWatchByID(int userid, out BaseUser user)
        {
            user = GetUserByIDFromWatch(userid, true);
            return user != null;
        }

        /// <summary>
        /// 用户退出桌子   只是通用的发消息
        /// </summary>
        /// <param name="userID"></param>
        protected async void ExitTableOne(int _exitpos, int userid, int cc = 0, int keepsite = 0)
        {
            var _user = GetBaseUserByID(userid);
            if (_user == null) return;
            //_user._isExit = true; //自己收不到退出消息

            List<UserIDMSG> imList = new List<UserIDMSG>();
            ForeachBaseAndWatch((user) =>
            {
                if (user.pos == _user.pos && user._isRobot) return;
                sc_one_exittable_n _exitForce = new sc_one_exittable_n() { result = 1 };
                _exitForce._msgid = 1;
                _exitForce.gameid = _gameid;
                _exitForce.pos = _user.pos;
                _exitForce.userid = userid;
                _exitForce.name = _user._tbwechatposData.py._n;
                _exitForce.isK = keepsite;
                imList.Add(new UserIDMSG(user._userid, _exitForce, user._isRobot, user.NoPushMessage, user._msgid));
            });
            _bsDataServer.SendDataDelay(imList);

            await _user.SetSatusInLobby();
            tb_UserEx.WriteUserOnLineTime(userid, _gameid, _levelid, true, false); 
            if (!_user._isExit_del)
            {
                TableComponentSync(userid);
                _user._isExit_del = true;
            }
        } 

        protected void TableComponentSync(int userid)
        {
            Game.Scene.GetComponent<TableComponent>()?.LeaveTable(userid, _tableid);
        }

        /// <summary>
        /// 获取此桌中指定用户ID的对象
        /// </summary>
        /// <param name="userID"></param>
        /// <returns></returns>
        public BaseUser GetBaseUserByID(int userID, bool _istry = false)
        {
            if (_DicPos2User == null)
            {
                TraceLogEx.Error("201611102028bs _DicPos2User == null fetal Error 运行正常后去掉 userID:" + userID);
                return null;
            }
            foreach (var _tempbuser in _DicPos2User)
            {
                if (_tempbuser.Value._userid == userID) return _tempbuser.Value;
            }
            if (!_istry) TraceLogEx.Error("201611102029bs fetal Error 必需处理   没找到userID:" + userID);
            return null;
        }
        public BaseUser GetBaseUserByPos(int pos, bool _istry = false)
        {
            if (_DicPos2User == null)
            {
                TraceLogEx.Error("201611102028bs _DicPos2User == null fetal Error 运行正常后去掉 pos:" + pos);
                return null;
            }
            if (_DicPos2User.ContainsKey(pos)) return _DicPos2User[pos];
            if (!_istry) TraceLogEx.Error("201611102029bs fetal Error 必需处理   没找到pos:" + pos);
            return null;
        }
        public BaseUser GetUserByIDFromWatch(int userID, bool _istry = false)
        {
            if (_DicPos2UserWatch == null) return null;
            foreach (var _tempbuser in _DicPos2UserWatch)
            {
                if (_tempbuser.Value._userid == userID) return _tempbuser.Value;
            }
            if (!_istry) TraceLogEx.Error("201611102029bs fetal Error 必需处理   没找到userID:" + userID);
            return null;
        }

        /// <summary>
        /// 一秒检测一次的一不会调用，只是强制加一个最大限制 
        /// </summary>
        protected void DealAliveTime()
        {
        }
      

        public virtual async ETTask ResetBase(bool _no_again)
        {
            if (_playerCount < _num_start)
            {
                _tablestatus = TableStatusEnum.WaitforReady;  //人数不够了，，停止循环         
            }
            ForeachBaseUser((user) =>
            {
                user.ResetBase();
            });
            Interlocked.Exchange(ref _userTokenPos, 0);
            _userTokenPos = 1;
            if (_no_again)
            {
                _tablelog = new ttableLog();
                await ForeachBaseAndWatchAsync(async (user) =>
                {
                    if (user._isRobot)
                    {
                        BaseHelper.RobotCallback(user._tbUser);
                    }
                    await user.SetSatusInLobby();
                });
                StopTimer();
            }
        }

        #region   断线相关

        /// <summary>
        /// 获取断线前的所有进入人的消息列表 
        /// </summary>
        /// <param name="userid"></param>
        public string GetEnterDisListBase(int pos)
        {
            List<OtherUserInfoSD> oUserlist = new List<OtherUserInfoSD>();
            ForeachBaseUser((user) =>
            {
                oUserlist.Add(user._tbwechatposData);
            });

            sc_entertable_n _canReady = new sc_entertable_n() { result = 1, _msgid = 8 };
            _canReady.pos = pos;
            _canReady.tpos = pos;
            _canReady.tableid = _tableid;
            _canReady.gameid = _gameid;//客服端好做分发
            _canReady.levelid = _levelid;
            _canReady.gtype = _gametype;
            _canReady.plist = oUserlist;
            _canReady.mcode = _tableMathCode + "";
            _canReady.maxCount = _tableMaxCount;

            return JsonUtils.Serialize(_canReady);
        }
        
        #endregion

        #region 延时相关
        /// <summary>
        /// 从动作开始计算等待时间，即任何一个动作开始赋值，
        /// </summary>
        public DateTime _WaitStartTime;

        /// <summary>
        /// 需要用户返回的Action   
        /// </summary>
        public string _waitAction = "0";

        public void SetTimeOutAction(string waitAction, int waitSecond = 15)
        {
            _WaitStartTime = DateTime.Now.AddSeconds(waitSecond);
            _waitAction = waitAction;
        }
        public void AddTimeOutAction(string waitAction, double waitSecond)
        {
            _WaitStartTime = _WaitStartTime.AddSeconds(waitSecond);
            _waitAction = waitAction;
        }
        public int GetLeftTime(int UserID)
        {
            BaseUser _buser = GetBaseUserByID(UserID);
            if (_buser == null) return 0;
            return _buser.GetCurrentTimeDown();
        }

        /// <summary>
        /// 是否还有人 没提交（未回话 ）
        /// </summary>
        /// <returns></returns>
        protected bool HaveSomeBodyUnDeal()
        {
            int Count = 0;
            ForeachBaseUser((_buser) =>
            {
                if (_buser._WaitClientLimitCount != 0) Count++;
            });
            return Count != 0;
        }

        public int GetPlayingCount()
        {
            int pcount = 0;
            ForeachBaseUser((user) =>
            {
                if (user.CheckPlaying) pcount++; //20
            });
            return pcount;
        }
        #endregion

        #region Timer
        private Timer _timerforuser;

        /// <summary>
        /// 是否被释放
        /// </summary>
        public bool IsDisposed { get; private set; }
        public Timer _timer;

        private int _timerRunning = 0;
        public bool IsTimeRunning
        {
            get { return _timerRunning == 1; }
            set { Interlocked.Exchange(ref _timerRunning, value ? 1 : 0); }
        }
        /// <summary>
        /// 出牌操作超时时间(5秒)
        /// </summary>
        private const int OperationSecTimeout = 5000;

        public void StartTimer(int period = 5000)
        {
            //Change函数的第一个参数意义是当Timer每一次触发执行回调前需要等待的时间，0表示立即触发，Infinite则表示永不触发回调；
            //第二个参数表示每次触发timer的间隔时间，0表示只执行一次即第一次。
            if (_timer != null) _timer.Change(period, period);
            IsTimerStarted = true;
        }

        public void ReStartTimer(int period, bool immediate = false)
        {
            if (_timer != null)
            {
                _timer.Change(-1, -1);
                _timer.Change(immediate ? 1 : period, period);
            }
           
        }

        public void StopTimer()
        {
            if (_timer != null) _timer.Change(-1, -1);
            if (_timerforuser != null) _timerforuser.Change(-1, -1);
            IsTimerStarted = false;
        }

        /// <summary>
        /// 定时器是否开始
        /// </summary>
        private bool IsTimerStarted { get; set; }
        #endregion


        public virtual void DealEveryTable()
        { }

        public virtual void DealEveryUser(BaseUser user)
        { }
        /// <summary>
        /// 玩家中大奖则向在线玩家推送公告
        /// </summary>
        public virtual async void SendNotice(BaseUser user, int gold, int _basegold)
        {
            UserStatus _us = await BaseHelper.GetUserStatusbyUserID(user._userid);
            if (_us == null || _us.InLobby() || _us.Gameid != _gameid) return;//没有状态或者在大厅不推送
            await ThreadEx.Sleep(RandomHelper.RandomNumber(2, 5) * 1000);

            var gold_value = t_anythingList.GetInt("notice_gold_rate");
            if (gold >= _basegold * gold_value)
            {
                var _game = await BaseHelper.GetShare<tgameinfo>(_gameid); 
                if (user._tbUser.isRobot == 1) return;
                var showName = user._tbUser.wechatName;
                sc_getnotice_n _getnotice = new sc_getnotice_n() { result = 1, noticelist = new List<string>() };
                string msg = string.Format(Language.Instance.bigwinMsg, showName, _game.name, gold);
                _getnotice.noticelist.Add(msg);
                _getnotice._t = 1;
                _getnotice.gameid = _gameid;

                BaseSendDataServer.NotifySendDataUserID(JsonUtils.Serialize(_getnotice), user._userid);
            }
        }
         
        /// <summary>
        /// 给同一个游戏广播消息
        /// </summary>
        /// <param name="lobby"></param>
        /// <param name="gamename"></param>
        /// <param name="gold"></param>
        /// <param name="_basegold"></param>
        public virtual async void SendNotice(string gamename, string nickName, float gold, int _basegold)
        {
            var gold_value = t_anythingList.GetInt("notice_gold_rate");
            if (gold >= _basegold * gold_value)
            {
                var _baseLobby = FactoryCommon.GetLobby(_gameid) as BaseLobby;
                List<BaseTable> tables = new List<BaseTable>(_baseLobby._tablenum2basetable.Values);
                for (int i = 0; i < tables.Count; i++)
                {
                    List<BaseUser> baseUsers = new List<BaseUser>(tables[i]._DicPos2User.Values);
                    for (int j = 0; j < baseUsers.Count; j++)
                    {
                        BaseUser user = baseUsers[j];
                        UserStatus _us = await BaseHelper.GetUserStatusbyUserID(user._userid);
                        if (user._isRobot || _us == null || _us.Gameid != _gameid) continue;//没有状态或者在大厅不推送
                                                                                            //
                        sc_getnotice_n _getnotice = new sc_getnotice_n() { result = 1, noticelist = new List<string>() };
                        string msg = string.Format(Language.Instance.bigwinMsg, nickName, gamename, gold);
                        _getnotice.noticelist.Add(msg);
                        _getnotice._t = 1;
                        _getnotice.gameid = _gameid;
                        BaseSendDataServer.NotifySendDataUserID(JsonUtils.Serialize(_getnotice), user._userid);
                    }
                }
            }
        }
       
        /// <summary>
        /// 给同一个游戏广播消息
        /// </summary>
        /// <param name="lobby"></param>
        /// <param name="gamename"></param>
        /// <param name="gold"></param>
        /// <param name="_basegold"></param>
        public virtual async void SendNotice(string msg)
        {
            var _baseLobby = FactoryCommon.GetLobby(_gameid) as BaseLobby;
            List<BaseTable> tables = new List<BaseTable>(_baseLobby._tablenum2basetable.Values);
            for (int i = 0; i < tables.Count; i++)
            {
                List<BaseUser> baseUsers = new List<BaseUser>(tables[i]._DicPos2User.Values);
                for (int j = 0; j < baseUsers.Count; j++)
                {
                    BaseUser user = baseUsers[j];
                    UserStatus _us = await BaseHelper.GetUserStatusbyUserID(user._userid);
                    if (user._isRobot || _us == null || _us.Gameid != _gameid) continue;//没有状态或者在大厅不推送
                    //var showName = user._tbUser.wechatName;
                    sc_getnotice_n _getnotice = new sc_getnotice_n() { result = 1, noticelist = new List<string>() };
                    _getnotice.noticelist.Add(msg);
                    _getnotice._t = 1;
                    _getnotice.gameid = _gameid;
                    BaseSendDataServer.NotifySendDataUserID(JsonUtils.Serialize(_getnotice), user._userid);
                }
            }
        }

      
        /// <summary>
        /// 推送一个人数据
        /// </summary>
        /// <param name="data"></param>
        public void SendCommonData(List<UserIDMSG> imList)
        {
            _bsDataServer.SendDataDelay(imList);
        }
        
        public string GetErrorRsp(cs_base cs, int errcode, string errmsg)
        {
            return JsonUtils.Serialize(new sc_base { fn = cs.fn.Replace("cs_", "sc_"), result = errcode, message = errmsg, cc = cs.cc });
        }
        #region Update定时器
        private long lTimeID = 0;
        public void AddUpdateListenerEvent(int intervalTime, Action<long> action)
        {
            if (lTimeID == 0)
            {
                lTimeID = Game.Scene.GetComponent<TimerComponent>().AddUpdateListenerEvent(intervalTime, action);
            }
        }
        /// <summary>
        /// 修改下次更新时间
        /// </summary>
        /// <param name="time"></param>
        public void ChangeUpdateTime(int time)
        {
            Game.Scene.GetComponent<TimerComponent>().SetUpdateEventTime(lTimeID, time);
        }
        public void StopTime()
        {
            Game.Scene.GetComponent<TimerComponent>().StopTime(lTimeID);
        }
        /// <summary>
        /// 获取剩余时间
        /// </summary>
        public long GetUpdateLeftTime
        {
            get
            {
                return Game.Scene.GetComponent<TimerComponent>().GetLeftTime(lTimeID);
            }
        }
        #endregion
    }

    public enum TableStatusEnum
    {
        /// <summary>
        /// 桌子初始化
        /// </summary>
        Initi = 1,
        /// <summary>
        /// 有人进了，等所有人准备，系统可以进行分配
        /// </summary>
        WaitforReady = 2,
        /// <summary>
        /// 打牌中
        /// </summary>
        Playing = 3,
        /// <summary>
        /// 临时加一个前置playing状态
        /// </summary>
        PrePlaying = 4,
        End = 5,
    }

}