using ETModel.Framework.Game.Contract;
using ETModel.Script.Model;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ETModel.Script.CsScript.Action
{
    /// <summary>
    /// 虚拟 用户/角色/玩家
    /// </summary>
    public class ChessUser : BaseUser
    {
        /// <summary>
        /// 带入历史代入记录  累计带入 
        /// </summary>
        public long _goldIntoHistory;
        /// <summary>
        /// 当前手牌 1
        /// </summary>
        public List<int> _shouPaiArr;

        /// <summary>
        /// 是否同意解散一桌游戏    2表示未回答 ，1表示同意，0表示不同意。
        /// </summary>
        public int _isAgreeExit = 2;
        /// <summary>
        /// 排队时间 秒
        /// </summary>
        public int _orderSecond;

        /// <summary>
        /// 一手没有结束就离开的标识 在结算的时候处理
        /// </summary>
        public bool _delaytoEnd = false;

        /// <summary>
        /// 在位置上 可以玩游戏了，不能进行重置，在进入的时候 在一局结算后才置为false
        /// </summary>
        public bool _inseatcannotplay = false;
        /// <summary>
        /// 进入这桌选择的id  不能变
        /// </summary>
        public int clubidx;
        /// <summary>
        /// 一局玩的总手数
        /// </summary>
        public int pcount;

        /// <summary>
        /// 参与过游戏的
        /// </summary>
        public bool _palyedgame; 

        /// <summary>
        /// 带入金币临时值
        /// </summary>
        public int addgold;
        /// <summary>
        /// tex记录最新带入多少
        /// </summary>
        public long tex_intogold;

        /// <summary>
        /// 是否需要退金币 
        /// 防止重复退  输0的情况
        /// 带入之处设置true
        /// </summary>
        public bool outgold;


        /// <summary>
        /// 
        /// </summary>
        public int GetWinPercent
        {
            get
            {
                return _tbUser.winpercent + tUserJackpotEx.GetAddRate(_userid, _gameid);
            }
        }

        /// <summary>
        /// 大于0表示输家返利，小于0表示逃跑惩罚
        /// </summary>
        public int _escapeGold;


        public tuserInfoEx _userinfo = null;
        public ChessUser()
        {
           
        }    

        public async virtual Task<bool> InitiChess(int gameid, int roomID, tUser tbuser, int limitInto,Type type, int clubid = 0)
        {
            await base.Initi(gameid, roomID, tbuser, tbuser.isRobot == 1, limitInto,type);

            clubidx = clubid;
            _userinfo = await tb_userinfoEx.GetFromCachebyUserID(_userid);
            if (_userinfo == null)
            {
                TraceLogEx.Error(" fetal error  can not find tuserInfoEx:" + _userid);
                _userinfo = new tuserInfoEx();
            }
            tUserGameHand agenthand = await tUserGamehandEx.GetUserHandRecord(_userid, clubid);
            GameHandCount handCount = await tUserGamehandEx.GetGameHandCount(_userid,clubid,gameid,roomID);
            _tbwechatposData.py.cinfo = new CountInfoSD()
            {
                winc = handCount.WinCount,
                failc = handCount.LostCount,
                dc = handCount.DrawCount,
                fr = agenthand.dealCardCount,
                FillingCount = agenthand.FillingCount,
                tablenum = handCount.count
            };

            _orderSecond = 0;
            return true;
        } 
        public async void addingame(int gold, int tid, bool openclub=false )
        {
            if (gold < 0) return;
            _lastTemp += gold;
            if (_tbUser.GetGoldAndWinGold >= gold) GoldReduce( gold);
            else TraceLogEx.Error("fetal error 2019120181755 _tbUser.UserMoney > gold");

            if (openclub)
            {
                long user_maxgold = await _ClubGold(true);
                WriteUserClubgoldLog(user_maxgold, 7, TexasLobby.instance._gameid, "", gold, clubidx);
            }
            else
                WriteGoldChangeLog(-gold, 33, tid+"", true);//记录日志33:房间带入;34:带入返还

            _CurrentGold += gold;
            _tbwechatposData.py.gold = _CurrentGold;//更新要让其他人看到 
            _goldInto += gold;
            _goldIntoHistory += gold;
            tex_intogold += addgold;
        }

        public async Task<bool> UpdateGold(long mGold, bool isadd = false)
        {
            var club = await ClubHelper.GetFromCachebyID(clubidx);
            if (club != null )
            {
                return await ClubHelper.UpdateClubGold(clubidx, _userid, mGold, false); 
            }
            else
            {
                return await GoldIntoPart(mGold);
            }
        }
        /// <summary>
        ///  获取身上余额
        /// </summary>
        public async Task<long> _ClubGold(bool supper)
        {
            if (!supper || _tbUser.isRobot > 0)
            {
                return _tbUser.GetGoldAndWinGold;
            }
            else
            {
                if (clubidx == 0) return 0;
                var club = await ClubHelper.GetFromCachebyID(clubidx);
                if (club == null)
                {
                    if (_tbUser.isRobot == 0) TraceLogEx.Error(_userid + "_ClubGold:, club is null " + clubidx);
                    return 0;
                }
                var child = club.childs.Find(x => x.userid == _userid);
                if (child == null)
                {
                    if (_tbUser.isRobot == 0) TraceLogEx.Error(_userid + "_ClubGold:, user not is club " + clubidx);
                    return 0;
                }
                return child.cgold;
            }
        }
        /// <summary>
        /// 记录金币流向
        /// </summary> 
        /// <param name="seconds">避免同记录（大结算和退芒果是同时执行）时CreateTime一样无法倒序排列</param> 
        /// <param name="deviation">游戏中退出时专用（传入之前扣的底皮和下注）</param> 
        public void WriteGoldChangeLog(double gold, int changeType, string remark, bool writeGold = false)
        {
            if (_isRobot) return;
            tgoldchangelog model = new tgoldchangelog();
            model.UserId = _userid;
            model.gamble = _gambleAll;
            model.Gold = gold;
            model.tnum = _tableid;
            if (writeGold)
            {
                model.AfterGold = _tbUser.GetGoldAndWinGold;
                model.BeforeGold = model.AfterGold - gold;
            }
            model.GameId = _gameid;
            model.IsRobot = _isRobot;
            model.ChangeType = changeType;

            if (model.ChangeType == 34)
                model.CreateTime = DateTime.Now.AddSeconds(1);// 由于和单手结算在1秒内 

            model.Remark = remark;
            BaseHelper.AddAsync(model); //记录日志
        }
        public void WriteGoldChangeLog(double gold, int changeType, double AfterGold,double BeforeGold, string remark)
        {
            if (_isRobot) return;
            tgoldchangelog model = new tgoldchangelog();
            model.UserId = _userid;
            model.gamble = _gambleAll;
            model.Gold = gold;
            model.AfterGold = AfterGold;
            model.BeforeGold = BeforeGold;
            model.GameId = _gameid;
            model.IsRobot = false;
            model.ChangeType = changeType;
            model.Remark = remark;
            BaseHelper.AddAsync(model); //记录日志
        }


        /// <summary>
        /// 写入玩家club币日志    改变club币日志之后调用
        /// </summary>
        /// <param name="clubgold">改变之后的值</param>
        /// <param name="user"></param>
        /// <param name="ChangeType"></param>
        /// <param name="gameid"></param>
        /// <param name="remark"></param>
        /// <param name="gold">加为:负    减为：正</param>
        public void WriteUserClubgoldLog(long clubgold, int ChangeType, int gameid, string remark, long gold, int cid)
        {
            tclubusergoldlog dlog = new tclubusergoldlog();
            dlog.BeforeGold = clubgold + gold;
            dlog.AfterGold = clubgold;
            dlog.ChangeType = ChangeType;
            dlog.UserId = _tbUser.UserID;
            dlog.Gold = Math.Abs(gold);
            dlog.Remark = remark;
            dlog.ClubId = cid;
            BaseHelper.AddAsync(dlog);
        }
        public override void ResetBase()
        { 
            _isAgreeExit = 2;
            _ForceKeepSeat = false;
            base.ResetBase();
        }
        public void SitDownd(int seat)
        {
            _isWatch = false;
            _isExit = false;
            _isExit_del = false;
            pos = seat;
        }
        public void WriteGoldChangeLogEx(int GameId, int clubid, int tableId, int _baseGamle, int pcount)
        { 
        
        }

        /// <summary>
        /// 反利给代理
        /// </summary>
        /// <param name="money"></param>
        /// <param name="clubid"></param>
        /// <returns></returns>
        public async Task< int> AddCommission2Agent(int clubid,  int userid,int tnum,int gameid)
        {
            double _tax = _gain * 0.05;//5%的税 
            double temptax = _tax;
            if (_tax < 0 ) return 0;//单边抽
            //if (_tax < 0) _tax*=-1;//单边抽
            var user = await BaseHelper.GetBase<tuseragent2021relation>((x) => x.UserID == userid && x.cidx == clubid);
            if (user == null) return 0;
            int fuserid = user.ParentID;

            //for alliance   根据clubidx拿到allianceid 去反利
            var club = await ClubHelper.GetFromCachebyID(user.cidx);
            if (club != null)
            {

                var clubcommiss = _tax * (club.cgoldRate / 100d);
                club.inspot += (long)clubcommiss;

                tagentgoldlog _recordcc = new tagentgoldlog()
                {
                    ActionCoin = clubcommiss,
                    UserId = user.UserID,
                    ActionType = ResActionType.redReturnGold,
                    CreateDate = DateTime.Now,
                    SourceGameID = gameid,
                    SourceUserId = user.UserID,
                    _lv = 99,
                    tnum = "",
                    clubId = club.idx,
                    allid = 0
                };
                if (clubcommiss > 0) BaseHelper.AddAsync<tagentgoldlog>(_recordcc);
                if (clubcommiss > 0) await BaseHelper.AddOrUpdate<tclub>(club);

                var alliance = await AllianceHelper.GetUnionByIdx(club.alliancid);
                if (alliance != null)
                {
                    double Commission = 0;
                    var rate = (alliance.cgoldRate - club.cgoldRate) / 100d;
                    if (rate < 0 || rate > 1)
                    {
                        rate = 0;
                        TraceLogEx.Error("agent rate error :" + club.idx + " <  :" + club.cgoldRate);
                    }
                    else Commission = _tax * rate;

                    temptax -= Commission;
                    alliance.inspot += (long)Commission;


                    tagentgoldlog _recordP1 = new tagentgoldlog()
                    {
                        ActionCoin = Commission,
                        UserId = user.UserID,
                        ActionType = ResActionType.redReturnGold,
                        CreateDate = DateTime.Now,
                        SourceGameID = gameid,
                        SourceUserId = user.UserID,
                        _lv = 99,
                        tnum = "",
                        clubId = club.idx,
                        allid = (int)alliance.idx
                    };
                    if (clubcommiss > 0) BaseHelper.AddAsync<tagentgoldlog>(_recordP1);
                    if (clubcommiss > 0) await BaseHelper.AddOrUpdate<tcluballiance>(alliance);
                }
            }
            // end for alliance


            //var user_lower = AgentRelationHelper.GetChildLocal(userid, clubid);//得到下级关系  
            //if (user.IsAgent == 1)
            //{ //表示这个人自己是代理
            //    double Commission = 0;
            //    if (user_lower == null)
            //    {   //没有下级
            //        Commission = _tax * (user.showrate / 100d); 
            //    }
            //    else
            //    {   //有下级 
            //        var rate = (user.showrate - user_lower.showrate) / 100d;
            //        if (rate < 0)
            //        {
            //            rate = 0;
            //            TraceLogEx.Error("agent rate error :" + user.showrate + " <  " + user_lower.showrate);
            //        }
            //        Commission = _tax * rate; 
            //    }
            //    temptax -= Commission;
            //    user.income += Commission;
            //    user.tIncome += Commission;
            //    user.GoldCommission += Commission;
            //    BaseHelper.AddOrUpdateBase(user); 

            //    tagentgoldlog _recordP1 = new tagentgoldlog()
            //    {
            //        ActionCoin = Commission,
            //        UserId = user.UserID,
            //        ActionType = ResActionType.redReturnGold,
            //        CreateDate = DateTime.Now,
            //        SourceGameID = gameid,
            //        SourceUserId = user.UserID,
            //        _lv = user.lv,
            //        tnum = tnum.ToString(),
            //    };
            //    BaseHelper.AddAsync<tagentgoldlog>(_recordP1);
            //}
            //List<tuseragent2021relation> parents = new List<tuseragent2021relation>();
            //AgentRelationHelper.GetParentAll_Local(fuserid, clubid, parents);
            //if (parents.Count() == 0) return 0;

            //parents = parents.OrderByDescending(t => t.lv).ToList();//严格等级顺序
            //int lowshowrate = user.showrate;
            //foreach (var item in parents)
            //{
            //    var rate = (item.showrate - lowshowrate) /100d; 
            //    if (rate < 0)
            //    {
            //        rate = 0;
            //        TraceLogEx.Error(item.lv + " :lv agent rate error :" + item.showrate + " <  " + lowshowrate);
            //        break;
            //    }
            //    double Commission = _tax * rate;
            //    if (Commission < 0.01) continue;
            //    temptax -= Commission;
            //    lowshowrate = item.showrate;
            //    item.income += Commission;
            //    item.tIncome += Commission;
            //    item.GoldCommission += Commission;
            //    BaseHelper.AddOrUpdateBase(item); 

            //    tagentgoldlog _recordP1 = new tagentgoldlog()
            //    {
            //        ActionCoin = Commission,
            //        UserId = item.UserID,
            //        ActionType = ResActionType.redReturnGold,
            //        CreateDate = DateTime.Now,
            //        SourceGameID = gameid,
            //        SourceUserId = user.UserID,
            //        _lv = user.lv,
            //        tnum = tnum.ToString(),
            //    };
            //    BaseHelper.AddAsync<tagentgoldlog>(_recordP1); 
            //}
            if (temptax > 0) SystemTaxLog(temptax, ResActionType.settleGold);

            return 0;
        }

        /// <summary>
        /// 强制离坐 一局结束时下局不能继续1
        /// </summary>
        public bool _ForceKeepSeat = false;
        public void SetKeepSeat(int sec = 0)
        {
            if (sec == 0)
            {
                _keepend = DateTime.MinValue;
                return;
            }
            else if (sec < 0)
            {
                _keepend = DateTime.Now.AddSeconds(sec);
            }
            if (_keepseat > 0) return;//第二次不累计
            _keepend = DateTime.Now.AddSeconds(sec);
        }
        #region 申请留座相关
        /// <summary>
        /// 是否申请了留座  申请的时候置true 退出或时间到或再次坐下置成false
        /// </summary>
        public bool _applyedKeep;
        /// <summary>
        /// 离座变观众 给的等待时间秒
        /// </summary>
        public DateTime _keepend;
        public override int _keepseat
        {
            get
            {
                if (_keepend == DateTime.MinValue) return 0;
                if (DateTime.Now >= _keepend)
                {
                    _applyedKeep = false;
                    return -1;
                }
                return Convert.ToInt32((_keepend - DateTime.Now).TotalSeconds);
            }
        } 

        #endregion

        //比赛用
        public void SendMessage(string msg)
        { 
            if (!_isRobot && !NoPushMessage) ActionFactory.SendMessage(msg, _userid);
        }


        /// <summary>
        /// 写入砖石日志    改变砖石之后调用
        /// </summary>
        /// <param name="user"></param>
        /// <param name="ChangeType"></param>
        /// <param name="gameid"></param>
        /// <param name="remark"></param>
        /// <param name="gold">加砖石为:负    减砖石为：正</param>
        public void WriteUserDiamondLog(tUser user, int ChangeType, int gameid, string remark, long gold)
        {
            tDiamondChangeLog dlog = new tDiamondChangeLog();
            dlog.BeforeGold = user.diamond + gold;
            dlog.AfterGold = user.diamond;
            dlog.ChangeType = ChangeType;
            dlog.UserId = user.UserID;
            dlog.Gold = Math.Abs(gold);
            dlog.Remark = remark;
            BaseHelper.AddAsync(dlog);
        }
        /// <summary>
        /// 用户弹幕记录
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="content"></param>
        /// <param name="BarrageType">弹幕类型   以后可能分不同类型</param>
        public void WritetChatlog(int userid, string content, string BarrageType, int Barragemoney, int tableid, int levelid, int gamid)
        {
            tchatlog tb = new tchatlog();
            tb.UserId = userid;
            tb.BarrageContent = content;
            tb.BarrageType = BarrageType;
            tb.BarrageMoney = Barragemoney;
            tb.tableId = tableid;
            tb.RoomId = levelid;
            tb.GameId = gamid;
            BaseHelper.AddAsync(tb);
        }



        #region  club ex
        /// <summary>
        /// 失败局数
        /// </summary>
        public int _lostCount;
        /// <summary>
        /// 胜利局数
        /// </summary>
        public int _winCount;
        /// <summary>
        /// 单局最高分
        /// </summary>
        public long _winSingleMax;

        #endregion
    }
}
