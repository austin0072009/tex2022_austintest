using ETModel.Script.Model;
using System;
using System.Threading.Tasks;

namespace ETModel.Script.CsScript.Action
{
    /// <summary>
    /// 虚拟 用户   处理通用超时功能
    /// </summary>
    public class BaseUser
    {
        public BaseUser()
        { }
        #region 属性 

        private long msgid;

        public long _msgid
        {
            get
            {
                if (!NoPushMessage)
                {
                    msgid++;
                    return msgid;
                }
                return 0;
            }
        }
        /// <summary>
        /// 当前用户进入FJ，等队列的时间
        /// </summary>
        public DateTime _enterTime;
        public int _gameid = 0;
        public int _levelid = 0;
        public int _tableid = 0;
        public bool _isReady = false;
        /// <summary>
        /// 是否正在打牌
        /// </summary>
        public bool _isPlaying = false;
        public bool CheckPlaying { get { return _isPlaying; } }
        /// <summary>
        /// 是否后面进来的，只是能看  此用户不处理延时操作的 在正常字典中
        /// </summary>
        public bool _isWatch = false;
        public bool _isExit = false;
        /// <summary>
        /// 是否从TableComponent移除
        /// </summary>
        public bool _isExit_del = false;
        /// <summary>
        /// 表示结束end是否退出
        /// </summary>
        public bool EndExit = false;
        /// <summary>
        /// 是否机器人
        /// </summary>
        public bool _isRobot = false;

        public BaseRobot _bRobot;
        /// <summary>
        /// 是否掉线了
        /// </summary>
        public bool _isDisconnet = false;

        /// <summary>
        /// 是观众且 离开了FJ（断线或手动离开的） true 表示不在这个FJ不用给他推消息
        /// </summary>
        public bool _watchandoff;

        /// <summary>
        /// 标识是否结束 自己弃牌与比牌失败后为true1
        /// </summary>
        public bool _isgiveup;

        /// <summary>
        /// 
        /// </summary>
        public bool NoPushMessage
        {
            get
            {
                if (_isDisconnet) return true;
                if (_watchandoff) return true;
                if (_isExit) return true;
                return false;
            }
        }

        /// <summary>
        /// tb_user中的UserID 而不是id
        /// </summary>
        public int _userid = 0;

        /// <summary>
        /// 1 2 3 4 也可以对应东 南 西 北
        /// </summary>
        public int pos = 0;
        /// <summary>
        /// 用户数据库的对应值 ， 机器人也存在的
        /// </summary>
        public tUser _tbUser = null;

        public OtherUserInfoSD _tbwechatposData;

        /// <summary>
        /// 游戏中允许输赢的额度 额度用完了就踢人
        /// </summary>
        public long _curTempGold;
        /// <summary>
        /// _curTempGold into gold val  from pay
        /// </summary>
        public long _tempGold;
        /// <summary>
        /// _curTempGold into winning val for withdraw
        /// </summary>
        public long _tempGoldwin;
        public bool _UsetempGold;

        /// <summary>
        /// 游戏中允许输赢的额度 退出FJ再进入不清空该值
        /// </summary>
        public int _curLastTempGold;

        /// <summary>
        /// 游戏中允许输赢的额度 额度用完了就踢人 临时存上一次 为了更新JB到DB用的
        /// </summary>
        public int _lastTemp;
        /// <summary>
        /// 带入JB 带入的JB
        /// </summary>
        public int _goldInto;
        /// <summary>
        /// 战绩单独处理 结算的时候统计 休芒需要特殊统计  大结算时分芒果分
        /// </summary>
        public long _gain;
        /// <summary>
        /// 当前桌的下注 不同游戏 可能为0
        /// </summary>
        public long _gambleAll;
        /// <summary>
        /// 当前桌上的JB变化 一局的输赢
        /// </summary>
        public long _goldChange;
        /// <summary>
        /// 玩家扩展信息
        /// </summary>
        public tuserInfoEx _infoEx;
        /// <summary>
        /// 个人奖池
        /// </summary>
        public tUserJackpot _jackpot;

        /// <summary>
        /// 在一局中的金币的变量，增加或减少的。
        /// </summary>
        public virtual long _CurrentGold
        {
            set
            {
                _curTempGold = value;
            }
            get
            {
               return _curTempGold;
            }
        }

       
        public void GoldIntoAll()
        {
            _CurrentGold = _tbUser.GetGoldAndWinGold;
        }

        public void GoldOutAll()
        {
            _tbUser.Gold = _CurrentGold;
        }

        /// <summary>
        /// 加金币
        /// </summary>
        /// <param name="tval">真正赢得钱</param>
        /// <param name="ownval">自己的下注的钱 Gold</param>
        public void GoldAdd(long ownval)
        {
            _tbUser.Gold += ownval;
        }


        /// <summary>
        /// 减分
        /// </summary>
        /// <param name="tval"></param>
        public void GoldReduce(long tval)
        {
            _tbUser.GoldReduce(tval);
        }


        /// <summary>
        /// 带入 table 
        /// </summary>
        /// <param name="gold"></param>
        /// <param name="wingold"></param>
        public async Task<bool> GoldIntoPart(long gold)
        {
            if (_tbUser.GetGoldAndWinGold >= gold)
            {
                _tbUser.GoldReduce(gold);
                await BaseHelper.AddOrUpdateBase(_tbUser);
                return true;
            }
            else return false;
        }
        public bool _userwingold=false;
       




        public virtual int _keepseat
        {
            get { return 0; }
        }

        /// <summary>
        /// 快捷设置用户状态
        /// </summary>
        /// <param name="_tempus"></param>
        public async ETTask SetStatus(UserStatusEnum _tempus, int gameid = 0, int roomid = 0, int tableid = 0)
        {
            UserStatus us = await BaseHelper.GetUserStatusbyUserID(_userid);
            if (us == null)
            {
                TraceLogEx.Error("201803272008 baseuser userstatus is null...maybe logic error!");
                return;
            }
            us.SetStatus(_tempus);
            if (gameid != 0) us.Gameid = gameid;
            if (roomid != 0) us.Levelid = roomid;
            if (tableid != 0) us.TableID = tableid;
            await UserStatusCache.Ins.AddOrUpdate(us);
        }

        /// <summary>
        /// 快捷设置用户状态
        /// </summary>
        /// <param name="_tempus"></param>
        public async Task<bool> SetSatusInLobby()
        {
            UserStatus us = await BaseHelper.GetUserStatusbyUserID(_userid);
            if (us == null)
            {
                TraceLogEx.Error("202203272008 baseuser userstatus is null...maybe logic error!");
                return false;
            }
            if (UserStatusEnum.InLobby == us.Status) return true;
            us.SetStatus(UserStatusEnum.InLobby); 
            return   await UserStatusCache.Ins.AddOrUpdate(us);
        }
        /// <summary>
        /// 快捷设置用户状态
        /// </summary>
        /// <param name="_tempus"></param>
        public async Task<bool> SetSatusInTableDaPai()
        {
            UserStatus us = await BaseHelper.GetUserStatusbyUserID(_userid);
            if (us == null)
            {
                TraceLogEx.Error("202203222008 baseuser userstatus is null...maybe logic error!");
                return false;
            }
            us.SetStatus(UserStatusEnum.InTableDaPai); 
            return await UserStatusCache.Ins.AddOrUpdate(us);
        }
        #endregion

        public virtual async Task<bool> Initi(int gameid, int roomID, tUser tbuser, bool robot, int limitInto,Type type, int clubid = 0)
        {
            _gameid = gameid;
            _levelid = roomID;
            _tbUser = tbuser;
            _userid = tbuser.UserID;
            _isRobot = robot;
            _isExit = false;
            _isExit_del = false;
            if (robot)
            {
                _bRobot = (BaseRobot)Activator.CreateInstance(type);
            }
            _infoEx = await tb_userinfoEx.GetFromCachebyUserID(_userid);
            _jackpot = await tUserJackpotEx.GetFromCachebyUserID(_userid);
            _enterTime = DateTime.Now;
            _WaitStartTime = DateTime.Now;
            _SysDealTimeOutCount = 0;
            _waitUserAction = "0";
            _lastTemp = limitInto;
            _goldInto = limitInto;
            if (limitInto != 0)
            {
                _UsetempGold = true;
                _curTempGold = limitInto; //排队中进行了上下分操作 201711122245 影响FJ模式 如果JB小1000的话 modify by jsw 201712281039
            } 

            _tbwechatposData = new OtherUserInfoSD();
            _tbwechatposData.py = new PlayerInfoSD()
            {
                _diam = (int)_tbUser.diamond,
                lv = _tbUser.lv,
                gold = _CurrentGold,
                state = 0,
                _n = _tbUser.wechatName,
                userid = _tbUser.UserID,
                _vlv = 11,
                UserLev = _tbUser.lv,
                wechat = new WechatInfoSD() { wicon = ToolsEx.IsHandlePhoto(_tbUser.isRobot, _tbUser.wechatHeadIcon).Trim(), _S = _tbUser.Sex, wName = _tbUser.wechatName.Trim() }
            };
            return true;
        }

        public virtual void ResetBase()
        {
            _isPlaying = false;
            //_isWatch = false;
            _isReady = false;
            _goldChange = 0;
        }

        /// <summary>
        /// 观众不允许操作操作
        /// </summary>
        /// <returns></returns>
        public bool CheckisWatch()
        {
            if (_isWatch) return true;
            return false;
        }

        #region timeout 相关
        /// <summary>
        ///系统处理超时的次数，，，，暂定大于5次，，，会在下一局自动踢出桌子1
        /// </summary>
        public int _SysDealTimeOutCount;
        /// <summary>
        /// 从动作开始计算等待时间，即任何一个动作开始赋值，
        /// </summary>
        public DateTime _WaitStartTime;
        /// <summary>  
        /// 使用前为1 提交一次后修改为0
        /// 为  限制 一个用户不能重复提交 ，第二无效处理 add by jsw 201206281620
        /// </summary>
        public int _WaitClientLimitCount;

        /// <summary>
        /// 需要用户返回的Action   
        /// </summary>
        public string _waitUserAction;
        public bool ExistWaitAction
        {
            get
            {
                if (_waitUserAction == "" || _waitUserAction == "0") return false;
                else return true;
            }
        }
        /// <summary>
        /// 记录一下上次操作的事件
        /// </summary>
        private string _waitUserActionLast; 
        public void SetTimeOutAction(int WaitClientLimit, string waitUserAction, int waitSecond = 15)
        {
            if (CheckisWatch()) return;//观看用户没有延时操作
            if (waitSecond == 15)
            {
                _WaitStartTime = DateTime.Now.AddSeconds(waitSecond);
            }
            else _WaitStartTime = DateTime.Now.AddSeconds(waitSecond);
            _WaitClientLimitCount = WaitClientLimit;
            _waitUserAction = waitUserAction;
        }

        /// <summary>
        /// 用于断线重连操作 有倒计时操作同步
        /// </summary>
        /// <returns></returns>
        public int GetCurrentTimeDown()
        {
            if (1 == _WaitClientLimitCount && "0" != _waitUserAction)
            {
                TimeSpan _ts = _WaitStartTime - DateTime.Now;
                return (int)_ts.TotalSeconds;
            }
            return 0;
        }
        public void RecordTimeoutCount()
        {
            if (_isRobot) return;//机器人不统计
            _SysDealTimeOutCount++;
        }
        public void ResetTimeOutCount()
        {
            _SysDealTimeOutCount = 0;
        }
        /// <summary>
        /// 同一用户只允许提交一次
        /// </summary> 
        /// <returns></returns>
        public bool CheckTimeOutFirst(string _waitAction, bool istry = false)
        {
            if (1 == _WaitClientLimitCount && _waitAction == _waitUserAction)
            {   //执行一次后设置为，就不会多次执行了
                _WaitClientLimitCount = 0;
                _waitUserActionLast = _waitUserAction;
                _waitUserAction = "0";
                return true;
            }
            //Debug.Assert(false);
            if (_waitUserAction != "0" && _waitAction != _waitUserAction)
            {
                TraceLogEx.Error(string.Format(" 201211011626  BaseUser error client commit. userid:{0}, (apply){1}!={2}", _userid, _waitAction, _waitUserAction));
            }
            else
            {
                if (!istry) TraceLogEx.Error(" 201207031139  同一操作多次提交...............userid:" + _userid + " waitfor:" + _waitAction + " _waitUserAction:" + _waitUserAction);
            }
            return false;
        }

        public bool CheckTimeOutAction(string _waitAction)
        {
            if (1 == _WaitClientLimitCount && _waitAction == _waitUserAction) return true;
            return false;
        }
         
        public void WriteGoldChange(long winorlost, string Remark, int type)
        {
            if (winorlost == 0 || _userid==0 || _isRobot) return;
            tgoldchangelog model = new tgoldchangelog();
            model.UserId = _userid;
            model.gamble = _gambleAll;
            model.Gold = winorlost;
            model.BeforeGold = _tbUser.GetGoldAndWinGold - winorlost;
            model.GameId = _gameid;
            model.AfterGold = _tbUser.GetGoldAndWinGold;
            model.IsRobot = _isRobot;
            model.ChangeType = type;//表示
            model.tnum = _tableid;
            model.Remark = Remark;
            model.CreateTime = DateTime.Now;
            BaseHelper.AddAsync<tgoldchangelog>(model);
        }

        #endregion
         
        /// <summary>
        /// 1.写系统税收  
        /// </summary>
        /// <param name="_gameid"></param>
        /// <param name="preGold"></param>
        public void SystemTaxLog(double taxgold, ResActionType type, int clubidx = 0, int allid = 0,double PlatCoin = 0)
        {
            if (taxgold <= 0 || _isRobot) return;
            tjackpotStoreEx.UpdateTax(_gameid, _levelid, (long)taxgold);
            tTaxLog _taxR = new tTaxLog()
            {
                ActionCoin = taxgold,
                UserId = _userid,
                ActionType = type,
                CreateDate = DateTime.Now,
                SourceGameID = _gameid,
                SourceRoomID = _levelid,
                SourceUserId = _userid,
                clubidx = clubidx,
                allid = allid,
                PlatCoin = PlatCoin
            };
            BaseHelper.AddAsync<tTaxLog>(_taxR);
        }

        /// <summary>
        /// 写流水，默认是加，
        /// </summary>
        /// <param name="_gameid"></param>
        /// <param name="gold"></param>
        /// <param name="typeadd"></param>
        public void WriteWater(int _gameid, long gold, int typeadd = 1)
        {
            tuseragent2021Ex.WriteWaterSelf(_userid, 0, gold);
        }

        /// <summary>
        /// 控制任务进度
        /// </summary>
        /// <param name="score"></param>
        public void UserControlProcess(long score)
        {
            _tbUser.DgCurrScore -= score;
            if (Math.Abs(_tbUser.DgTotalScore - _tbUser.DgCurrScore) >= Math.Abs(_tbUser.DgTotalScore))
            {
                _tbUser.DgCurrScore = 0;
                _tbUser.DgTotalScore = 0;
            }
        }

        public long CalculateNewPlayerScore(long lScore)
        {
            if(_infoEx != null && _jackpot != null)
            {
                if (_infoEx.bNewPlayer)
                {
                    if (lScore > 0)
                    {
                        long lTmpScore = lScore + _jackpot._pot;
                        _jackpot._pot += lScore;
                        tUserJackpotEx.AddOrUpdate(_jackpot);
                        if (lTmpScore > 0&&lTmpScore>lScore)
                        {
                            return lScore;
                        }else if(lTmpScore >0)
                        {
                            return lTmpScore;
                        }
                    }
                    else
                    {
                        long lTmpScore = lScore + _jackpot._pot;
                        _jackpot._pot += lScore;
                        tUserJackpotEx.AddOrUpdate(_jackpot);
                        if (lTmpScore > 0)
                        {
                            return lScore;
                        }
                        else if (lTmpScore < 0 && lTmpScore>=lScore)
                        {
                            return lScore+(Math.Abs(lTmpScore));
                        }
                    }
                    if (_jackpot._pot <= -3000)
                    {
                        _infoEx.bNewPlayer = false;
                        tb_userinfoEx.AddOrUpdateBase(_infoEx);
                    }
                    return 0;
                }
                else
                {

                    return lScore;
                }
            }
            else
            {
                TraceLogEx.Error($"计算新手体验分数出错了：_infoEx为Nll:{_infoEx == null}  _jackpot为:{_jackpot==null}");
                return 0;
            }
        }
    }
}
