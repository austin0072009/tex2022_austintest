using ETModel.Script.Model;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ETModel.Script.CsScript.Action
{
    /// <summary>
    /// 虚拟 用户/角色/玩家
    /// </summary>
    public class TexasUser : ChessUser
    {
        public TexasUser()
        {
            Insurtotal = 0;
            tablenum = 0;
            settleseat = false;//单独重置
            fshownum = 0;
            IsSettle = false;
            totaltax = 0;
            GoldOut = 0;
            tex_intogold = 0;
            clubRatelog = new ConcurrentDictionary<int, double>();
            allinRatelog = new ConcurrentBag<CommonValSD>();
        }
        #region 未重置

        /// <summary>
        /// 表示在观众字典中 仅处理退出时是否需要清除数据 还是把数据放入到观众队列中
        /// </summary>
        public bool _inwatch = false;
        /// <summary>
        /// 结算专用 初始值为_gambleAll 最小为0
        /// </summary>
        public long _gambleAllleft;

        public Dictionary<TexasTurnEnum, long> _dicturn2gamble;

        /// <summary>
        /// 一局玩的总手数
        /// </summary>
        public int pcount;

        /// <summary>
        /// 如果是弃牌 指明在哪一轮
        /// </summary>
        public TexasTurnEnum _giveinTurn;
        #endregion

        public bool _isBanker = false;//是否是庄 
        /// <summary>
        ///  最后离开的时间（用于计算累计离开时间-套逃跑机制）
        /// </summary>
        public DateTime _lastExitTime;

        /// <summary>
        ///  累计离开的时间（用于计算累计离开时间总额（单位秒）-套逃跑机制）
        /// </summary>
        public int _totalExitTime;

        /// <summary>
        /// 手牌与公牌得出的最大牌型
        /// </summary>
        public List<int> _maxPai = new List<int>();
        /// <summary>
        /// 手牌与3/4公牌得出的最大牌型
        /// </summary>
        public List<int> _maxPaiTurn = new List<int>();
        /// <summary>
        /// 是否已获取的奖池
        /// </summary>
        public bool _haveGetJackpot; 
        public int _myTurn;

        /// <summary>
        /// 单局自己的输赢      如果需要小数后两位存储进行*100
        /// </summary>
        public long _goldwin;
        /// <summary>
        /// 表示一轮内的单次下注
        /// </summary>
        public long singlegamble;

        /// <summary>
        /// true 表示已经全下
        /// </summary>
        public bool _allIn;
        public TexasTurnEnum _allinTurn;
        /// <summary>
        /// 是否可以看牌 前面没有人在这轮下注可以选择看牌，有人下注了就不能出现看牌了
        /// </summary>
        public bool _lookcard;
        /// <summary>
        /// 当前轮是否已加注过一次
        /// </summary>
        public bool haveadd;
        /// <summary>
        /// 获取奖池的数量
        /// </summary>
        public long _getjackpot;


        /// <summary>
        /// 是否已经从奖池获取过1
        /// </summary>
        public bool _hadGetJackpot;
        /// <summary>
        /// 是否翻牌
        /// </summary>
        public bool _dealcard;
        /// <summary>
        /// 胜率 翻一张牌就要变
        /// </summary>
        public double winpercent;
        /// <summary>
        /// 申请带入
        /// </summary>
        public bool applyinto;

        /// <summary>
        /// 点击看公牌次数
        /// </summary>
        public int clicknum;

        /// <summary>
        /// 是否结算留座
        /// </summary>
        public bool settleseat;

        /// <summary>
        /// 是否结算离桌
        /// </summary>
        public bool IsSettle;
        /// <summary>
        /// 总抽税
        /// </summary>
        public double totaltax;

        /// <summary>
        /// 总分保险
        /// </summary>
        public double BranchIns;

        public long servicefee;


        public long TaxShare;
        public int InsOrder
        {
            get
            {
                return insOrder31 + insOrder41 + insOrder32 + insOrder42;
            }
        }
        /// <summary>
        /// 已下保额第三轮
        /// </summary>
        public int insOrder31;

        public int insOrder32;
        public double insRate31;
        public double insRate32;
        /// <summary>
        /// 已下保额第四轮
        /// </summary>
        public int insOrder41;
        public int insOrder42;
        public double insRate41;
        public double insRate42;

        public bool dealinsOrder3;
        public bool dealinsOrder4;
        /// <summary>
        /// 保险中 理赔的值赔付额 
        /// </summary>
        public int claim;
        /// <summary>
        /// 记录是否失去了保费3
        /// </summary>
        public bool InsLose31;
        public bool InsLose32;
        /// <summary>
        /// 记录是否失去了保费4
        /// </summary>
        public bool InsLose41;
        public bool InsLose42;

        /// <summary>
        /// 一桌玩家自己的保险总额
        /// </summary>
        public int Insurtotal;

        public List<int> outs31;
        /// <summary>
        /// 平分补牌
        /// </summary>
        public List<int> douts31;

        public List<int> _ilist31;

        public List<int> outs32;
        public List<int> douts32;
        public List<int> _ilist32;

        /// <summary>
        /// 自己所在多个奖池 的最大值  不包括自己多出来的投注
        /// </summary>
        public int mpot;
        public int mpot31;
        public int mpot32;
        public long _mulpot_gamble;
        /// <summary>
        /// 申请延时的次数
        /// </summary>
        public int delayCount;
        /// <summary>
        /// 一大局只有第一次使用免费
        /// </summary>
        public bool UsedDelayFree;

        /// <summary>
        /// 用户局中可能退出   记录退出的时候应该返回的红利
        /// </summary>
        public double bonusTax = 0;

        /// <summary>
        /// 进入这桌选择的id  不能变
        /// </summary>
        //public int clubidx;


        /// <summary>
        /// 打过的房间数量   初始0    并未只为1
        /// </summary>
        public int tablenum;

        /// <summary>
        /// 这一小局是否强制秀牌
        /// </summary>
        public bool fshow;

        /// <summary>
        /// 强制看牌次数
        /// </summary>
        public int fshownum;


        /// <summary>
        /// 是否处理保险状态
        /// </summary>
        public bool inins;
        public int _SysDealTimeOutCountEx;
       
        /// <summary>
        /// 中途坐下 庄位要跳，小盲位要多等一局。只有两个人不处理
        /// </summary>
        public int jump1_wait2_big3 = 0;

        /// <summary>
        /// 带出累计
        /// </summary>
        public long GoldOut;
        /// <summary>
        /// 新坐下的
        /// </summary>
        public bool _newSet = false;
        /// <summary>
        /// 补straddle
        /// </summary>
        public bool morestraddle;


        /// <summary>
        /// 输赢的金币 战绩
        /// </summary>
        /// <returns></returns>
        public long GetGain()
        {
            return _gain;
        }

        public void GoldAdd(long gold)
        {
            if (gold < 0)
            {
                TraceLogEx.Error("GoldAdd:"+ gold);
                return;
            }
            _CurrentGold += gold;
        }
        public void GoldReduce(long gold)
        {
            if (gold < 0)
            {
                TraceLogEx.Error("GoldReduce:" + gold);
                return;
            }
            if (_CurrentGold >= gold) _CurrentGold -= gold;
            else
            {
                TraceLogEx.Error(_CurrentGold+ " < GoldReduce:" + gold);
                _CurrentGold = 0;
            }
        }
        /// <summary>
        /// 3公牌前加注
        /// 限于翻牌前
        /// </summary>
        public int bet3 = 0;

        /// <summary>
        /// 3公牌后加注
        /// </summary>
        public int cbet3 = 0;
        /// <summary>
        /// 非可以选择过牌 主动跟注或者加注入池属于主动入池率
        /// 
        /// </summary>
        public int drivingnum = 0;

        /// <summary>
        /// 加注入池率
        /// </summary>
        public int addpoolnum = 0;




        /// <summary>
        /// 是否是大盲位
        /// </summary>
        public bool isbig =  false;

        /// <summary>
        /// 社区返利
        /// </summary>
        public ConcurrentDictionary<int, double> clubRatelog;


        /// <summary>
        /// 联盟反利 key联盟
        /// 
        /// </summary>
        public ConcurrentBag<CommonValSD> allinRatelog;
        
        /// <summary>
        ///  记录玩家掉线下线时间
        /// </summary> 
        public void RecordExitTime(int tnum, bool isSitDown = false)
        {
            if (!isSitDown)
            {
                //ExitDividendReduce(tnum);
                //ReturnBringGold(tnum, clubidx);
            }
            return;//暂时不要逃跑功能 
            ////if (GetGain() >= 20000 || _totalExitTime > 0)
            ////{
            ////    if (_lastExitTime != DateTime.MinValue)
            ////    {
            ////        TimeSpan span = DateTime.Now - _lastExitTime;
            ////        _totalExitTime += (int)span.TotalSeconds;
            ////    }
            ////    _lastExitTime = DateTime.Now;
            ////}
            ////if (isSitDown)
            ////    _lastExitTime = DateTime.MinValue;
        }


        /// <summary>
        /// 退出 记录带入红利
        /// </summary>
        public void ExitDividendReduce(int tnum)
        {
            double _g = GetGain();
            if (_g > 0)
            {
                double _tax = Convert.ToInt32((GetGain()) * t_anythingList.GetDouble("tax_rate"));//5%的税
                if (bonusTax > 0) // //39:退房扣利  40:退还红利
                {
                    WriteGoldChangeLog(bonusTax, 40, tnum.ToString(), true);
                    GoldAdd((long)bonusTax);//把第一次扣的红利还他
                }

                bonusTax = _tax; //只记录最后一次  GetGain 不会变   第二次进来把第一次扣的红利还他
                GoldReduce((long)_tax);//退出 赢了的话  先把返利得扣了  大结算还他

                WriteGoldChangeLog(-_tax, 39, tnum.ToString(), true);
            }
        }

        public void TagTurnGamble(TexasTurnEnum _turn, long gamble)
        {
            singlegamble = gamble;
            if (_dicturn2gamble == null) _dicturn2gamble = new Dictionary<TexasTurnEnum, long>();

            if (_dicturn2gamble.ContainsKey(_turn)) _dicturn2gamble[_turn] += gamble;
            else _dicturn2gamble.Add(_turn, gamble);
            _gambleAll += gamble;
            _goldChange += gamble;
        }
        public long GetTurnGamble(TexasTurnEnum _turn)
        {
            if (_dicturn2gamble == null) return 0;
            if (_dicturn2gamble.ContainsKey(_turn)) return _dicturn2gamble[_turn];
            return 0;
        }

        /// <summary>
        /// 检查当用户在当前轮是否可以结束操作了
        /// </summary>
        /// <param name="_whirlturn"></param>
        /// <param name="tmaxgamble"></param>
        /// <returns></returns>
        public bool CheckTurnGambleOver(TexasTurnEnum _texasturn, long tmaxgamble)
        {
            if (_allIn) return true;//休 与allin都在上面处理了
            if (!_dicturn2gamble.ContainsKey(_texasturn))
            {
                return false;
            }
            else
            {
                return _dicturn2gamble[_texasturn] == tmaxgamble;
            }
        }
        public override void ResetBase()
        {
            _shouPaiArr = new List<int>();
            _isBanker = false;
            _goldwin = 0;
            _gambleAll = 0;
            _lookcard = false;

            bet3 = 0;
            cbet3 = 0;
            drivingnum = 0;
            addpoolnum = 0;
            tex_intogold = 0;
            isbig = false;

            //morestraddle = false;
            Reset();
            // _WaitClientLimitCount = 0;    
            base.ResetBase();
        }

        public void Reset()
        {
            _goldwin = 0;
            ////_gambleAll = 0;//初始下注有处理不能在处理重置
            _lookcard = false;
            ////_dicturn2gamble = new Dictionary<WhirlTurnEnum, int>();//初始下注有处理不能在处理重置
            _getjackpot = 0;
            ////_showPai = new List<int>();
            ////_showCount = 0;
            //_isgiveup = false;//这里设置回导致无法 强制秀牌，改到发牌( Start(int userid))的时候设置
            //_giveinTurn = WhirlTurnEnum.Init;//这里设置回导致无法 强制秀牌，改到发牌( Start(int userid))的时候设置
            _allIn = false;
            InsLose31 = false;
            InsLose41 = false;
            _allinTurn = TexasTurnEnum.Init;
            _hadGetJackpot = false;
            _dealcard = false;
            _gambleAllleft = 0;
            insOrder31 = 0;
            insOrder32 = 0;
            insOrder41 = 0;
            insOrder42 = 0;
            insRate31 = 0;
            insRate32 = 0;
            insRate41 = 0;
            insRate42 = 0;
            _maxPaiTurn = new List<int>();

            outs31 = new List<int>();
            douts31 = new List<int>();
            mpot = 0;
            _ilist31 = new List<int>();
            outs32 = new List<int>();
            douts32 = new List<int>();
            _ilist32 = new List<int>();
            mpot31 = 0;
            mpot32 = 0;

            singlegamble = 0;
            claim = 0;
            _mulpot_gamble = 0;
            delayCount = 0;
            haveadd = false;
            dealinsOrder3 = false;
            dealinsOrder4 = false;
            applyinto = false;
            winpercent = 0;
            fshow = false;
            inins = false;
            clicknum = 0;
        } 

        /// <summary>
        /// 写入金币操作记录
        /// </summary>
        /// <param name="GameId"></param>
        /// <param name="isBank"></param>
        /// <param name="remark"></param>
        public void WriteGoldChangeLogEx(int GameId, int clubid, int tableId = 0, int diPi = 0, int _tableOverCount = 0)
        {
            // if (_tempUserMoney < 0) return;
            tgoldchangelog model = new tgoldchangelog();
            model.UserId = _userid;
            model.gamble = _gambleAll;
            model.Gold = _gain;
            // model.BeforeGold = (long)_tempUserMoney;
            //减去金币
            //_tempUserMoney += _gain;
            model.GameId = GameId;
            //model.AfterGold = (long)(_tbUser.UserMoney + _CurrentGold);
            model.IsRobot = _isRobot;
            model.CreateTime = DateTime.Now;
            model.clubid = clubid;
            if (tableId > 0)
            {
                model.ChangeType = 1;
                model.Remark = tableId.ToString() + ";" + diPi.ToString() + ";" + _tableOverCount.ToString();
                model.tnum = tableId;
            }
            BaseHelper.AddAsync(model);
        }
        /// <summary>
        /// 战绩
        /// </summary>
        /// <param name="allid"></param>
        /// <param name="tnum"></param>
        /// <param name="clubid"></param>
        /// <param name="owner"></param>
        /// <param name="roomlevel">房间level</param>
        /// <param name="pnum">人数</param>
        public async void WritetUserSummary(int tnum,int owner,int roomlevel,int pnum,int preG,int gametype)
        {
            var a = await GetUserAlliance();
            tusersummary usersummary = new tusersummary();
            usersummary.UserId = _userid;
            usersummary.allid = (int)a.idx;
            usersummary.clubid = GetUserClubid();
            usersummary.BranchIns = (long)BranchIns;
            var Gain = GetGain();

            usersummary.TaxShare = TaxShare;
            usersummary.Gains = Gain;
            usersummary.Insurance = Insurtotal;
            usersummary.servicefee = servicefee;
            usersummary.tnum = tnum;
            usersummary.totalTax = totaltax.ToInt64();
            usersummary.UserName = _tbUser.wechatName;
            usersummary.GameId = TexasLobby.instance._gameid;
            usersummary.Owners = owner;
            usersummary.pnum = pnum;
            usersummary.level = roomlevel;
            usersummary.preG = preG;
            usersummary.gametype = gametype;
            BaseHelper.AddAsync(usersummary);
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


        public void DealAddGoldInGame(int tnum)
        {
            if (addgold <= 0) return;
            if (clubidx != 0) addingame(addgold, tnum, true);
            else
            {
                if(GoldOut >= addgold) GoldOut -= addgold;
                addingame(addgold, tnum);
            }
            addgold = 0;
        }

        /// <summary>
        ///只抽赢家 没手抽
        /// </summary>
        /// <param name="tnum"></param>
        /// <param name="allid"></param>
        /// <param name="isA"></param>
        /// <param name="config"></param>
        /// <param name="totallose">总负盈利</param>
        /// <returns></returns>
        public double DealTax(string tnum, int allid,bool isA,taxconfig_tex config, long goldwin=0)
        {
            if (isA) return 0;
            if (config==null) return 0;
            double gain = goldwin;
            if (gain <= 0 || IsSettle) return 0;
            
            double _tax = gain * config.scale;//5%的税 
            if (_tax <= 0) return 0;
            if (_tax > config.upperLi) _tax = config.upperLi;
            GoldReduce((int)_tax);
            _gain -= (int)_tax;//说的战绩不显示出来 
            totaltax += _tax;

            return _tax;
        }

        public void AddClubAllidlogs(int tnum, int gameid)
        {
            if (clubRatelog!=null)
            {
                foreach (var item in clubRatelog)
                {
                    tagentgoldlog _recordcc = new tagentgoldlog()
                    {
                        ActionCoin = item.Value,
                        UserId = _userid,
                        ActionType = ResActionType.redReturnGold,
                        CreateDate = DateTime.Now,
                        SourceGameID = gameid,
                        SourceUserId = _userid,
                        _lv = 99,
                        tnum = tnum.ToString(),
                        clubId = item.Key,
                        allid = 0
                    };
                    if (item.Value > 0) BaseHelper.AddAsync<tagentgoldlog>(_recordcc);
                }
            }
            if (allinRatelog == null) return;
            foreach (var item in allinRatelog)
            {
                tagentgoldlog _recordP1 = new tagentgoldlog()
                {
                    ActionCoin = item.val,
                    UserId = _userid,
                    ActionType = ResActionType.redReturnGold,
                    CreateDate = DateTime.Now,
                    SourceGameID = gameid,
                    SourceUserId = _userid,
                    _lv = 99,
                    tnum = tnum.ToString(),
                    clubId = item.clubid,
                    allid = item.allid
                };
                if (item.val > 0) BaseHelper.AddAsync<tagentgoldlog>(_recordP1);
            }
        }

        /// <summary>
        /// 反利给代理 给alliance 也要
        /// </summary> 
        /// <returns></returns>
        public new async Task<int> AddCommission2Agent(int tnum, int gameid, double usertax, long totallose)
        {
            int user_allid = 0;
            int user_clubidx = (_tbUser.clublist == null || _tbUser.clublist.Count == 0) ? 0 : _tbUser.clublist[0];
            if (user_clubidx == 0) return 0;//必须有社区
            if (usertax == 0) return 0;

            double branchTotal = usertax;//分成总值
            long gain = _goldwin;
            if (gain == 0) return 0;
            if (branchTotal == 0) return 0;//没赢一把的不往下走了
            double temptax = branchTotal;//平台收入


            var user = await BaseHelper.GetBase<tuseragent2021relation>((x) => x.UserID == _userid && x.cidx == user_clubidx);
            if (user == null) return 0;
            int fuserid = user.ParentID;
            user.income += branchTotal;

            //for alliance   根据clubidx拿到allianceid 去反利
            var club = await ClubHelper.GetFromCachebyID(user_clubidx);
            if (club != null)
            {

                var clubcommiss = branchTotal * (club.cgoldRate / 100d);
                club.inspot += (long)clubcommiss;
                temptax -= clubcommiss;
                if (clubcommiss > 0) await BaseHelper.AddOrUpdateBase(user);

                if (clubRatelog.ContainsKey(club.idx)) clubRatelog[club.idx] += clubcommiss;
                else clubRatelog.TryAdd(club.idx, clubcommiss);
                
                //tagentgoldlog _recordcc = new tagentgoldlog()
                //{
                //    ActionCoin = clubcommiss,
                //    UserId = _userid,
                //    ActionType = ResActionType.redReturnGold,
                //    CreateDate = DateTime.Now,
                //    SourceGameID = gameid,
                //    SourceUserId = user.UserID,
                //    _lv = 99,
                //    tnum = tnum.ToString(),
                //    clubId = club.idx,
                //    allid = 0
                //};
                //if(clubcommiss>0) BaseHelper.AddAsync<tagentgoldlog>(_recordcc);
                if (clubcommiss > 0) await BaseHelper.AddOrUpdate<tclub>(club);

                var alliance = await AllianceHelper.GetUnionByIdx(club.alliancid);
                if (alliance != null)
                {
                    double Commission = 0;
                    user_allid = alliance.idx;
                    var rate = (alliance.cgoldRate - club.cgoldRate) / 100d;
                    if (rate < 0 || rate > 1)
                    {
                        rate = 0;
                        TraceLogEx.Error("agent rate error :" + club.idx + " <  :" + club.cgoldRate);
                    }
                    else Commission = branchTotal * rate;

                    temptax -= Commission;
                    alliance.inspot += (long)Commission;
                    
                    var allratelog = allinRatelog.Where(t => t.allid == alliance.idx && t.clubid == club.idx).FirstOrDefault();
                    if (allratelog!=null) allratelog.val += Commission;
                    else  allinRatelog.Add(new CommonValSD() { allid= alliance.idx,clubid= club.idx,val = Commission });
                    

                    //tagentgoldlog _recordP1 = new tagentgoldlog()
                    //{
                    //    ActionCoin = Commission,
                    //    UserId = _userid,
                    //    ActionType = ResActionType.redReturnGold,
                    //    CreateDate = DateTime.Now,
                    //    SourceGameID = gameid,
                    //    SourceUserId = user.UserID,
                    //    _lv = 99,
                    //    tnum = tnum.ToString(),
                    //    clubId = club.idx,
                    //    allid = (int)alliance.idx
                    //};
                    //if (clubcommiss > 0) BaseHelper.AddAsync<tagentgoldlog>(_recordP1);
                    if (clubcommiss > 0) await BaseHelper.AddOrUpdate<tcluballiance>(alliance);
                }
            }
            // end for alliance

            //var user_lower = AgentRelationHelper.GetChildLocal(userid, user_clubidx);//得到下级关系  
            //if (user.IsAgent == 1)
            //{ //表示这个人自己是代理
            //    double Commission = 0;
            //    if (user_lower == null)
            //    {   //没有下级
            //        Commission = branchTotal * (user.showrate / 100d);
            //    }
            //    else
            //    {   //有下级 
            //        var rate = (user.showrate - user_lower.showrate) / 100d;
            //        if (rate < 0)
            //        {
            //            rate = 0;
            //            TraceLogEx.Error("agent rate error :" + user.showrate + " <  " + user_lower.showrate);
            //        }
            //        Commission = branchTotal * rate;
            //    }
            //    temptax -= Commission;
            //    user.income += Commission;
            //    user.tIncome += Commission;
            //    user.GoldCommission += Commission;
            //    BaseHelper.AddOrUpdateBase(user);

            //    tagentgoldlog _recordP1 = new tagentgoldlog() { ActionCoin = Commission, UserId = user.UserID, ActionType = ResActionType.redReturnGold, CreateDate = DateTime.Now, 
            //        SourceGameID = gameid, SourceUserId = user.UserID, _lv = user.lv, tnum = tnum.ToString(), };
            //    BaseHelper.AddAsync<tagentgoldlog>(_recordP1);
            //}
            //List<tuseragent2021relation> parents = new List<tuseragent2021relation>();
            //AgentRelationHelper.GetParentAll_Local(fuserid, user_clubidx, parents);
            //if (parents.Count() == 0) return 0;

            //parents = parents.OrderByDescending(t => t.lv).ToList();//严格等级顺序
            //int lowshowrate = user.showrate;
            //foreach (var item in parents)
            //{
            //    var rate = (item.showrate - lowshowrate) / 100d;
            //    if (rate < 0)
            //    {
            //        rate = 0;
            //        TraceLogEx.Error(item.lv + " :lv agent rate error :" + item.showrate + " <  " + lowshowrate);
            //        break;
            //    }
            //    double Commission = branchTotal * rate;
            //    if (Commission < 0.01) continue;
            //    temptax -= Commission;
            //    lowshowrate = item.showrate;
            //    item.income += Commission;
            //    item.tIncome += Commission;
            //    item.GoldCommission += Commission;
            //    BaseHelper.AddOrUpdateBase(item);

            //    tagentgoldlog _recordP1 = new tagentgoldlog() { ActionCoin = Commission, UserId = item.UserID, ActionType = ResActionType.redReturnGold, CreateDate = DateTime.Now,
            //        SourceGameID = gameid, SourceUserId = user.UserID, _lv = user.lv, tnum = tnum.ToString(), };
            //    BaseHelper.AddAsync<tagentgoldlog>(_recordP1);
            //}
           
           
            if (temptax > 0) SystemTaxLog(branchTotal, ResActionType.settleGold, user_clubidx, user_allid, temptax);//给系统
            return 0;
        }




        public double DealTaxShare2021(string tnum, int allid, bool isA, taxconfig_tex config)
        {
            if (isA) return 0;
            if (config == null) return 0;
            double _g = GetGain();
            if (_g == 0 || IsSettle) return 0;

            double _tax = _g * config.scale;//5%的税 
            if (_tax > config.upperLi) _tax = config.upperLi;

            //水下：玩家输的金额÷总负盈利X战绩费X0.8Xclub比例
            //水上：玩家赢的金额÷总正盈利X战绩费X0.2Xclub比例
            double _toShare90 = Math.Abs(_tax * t_anythingList.GetDouble("textax_rateshare"));//返
            if (_g > 0)
            {
                GoldReduce( (int)_tax);
                _gain -= (int)_tax;

                double _toShare10 = _tax * 0.1;
                totaltax += Convert.ToInt64(_tax);
                servicefee += Convert.ToInt64(_toShare10);//给平台的服务费
            }
            else
            {
                _tax = _tax * -1;

                AgentHelper.DealAgentGoldClub(_userid, _gameid, (int)_toShare90, tnum, clubidx);
                double _toShare10 = _tax * 0.1;
                long taxs = (_tax - _toShare10).ToInt64();
                TaxShare += taxs;
                WriteUserClubgoldLog(0, 5, TexasLobby.instance._gameid, "", taxs, clubidx);//记录到club去  
                SystemTaxLog(_toShare10, ResActionType.settleGold, clubidx, allid);//系统收10% 
            }
            return _toShare90;
        }
        /// <summary>
        /// bgold返回改变前的余额
        /// </summary>
        /// <param name="clubidx"></param>
        /// <param name="userid"></param>
        /// <param name="cgold"></param>
        /// <param name="bgold"></param>
        /// <param name="isadd"></param>
        /// <returns></returns>
        public async Task<long> GetClubGold(long clubidx, int userid, long cgold, bool isadd = true)
        {
            long bgold = 0;
            if (clubidx == 0) return bgold;
            tclub club = await BaseHelper.GetShare<tclub>(clubidx);
            if (club == null) return bgold;
            var child = club.childs.Find(x => x.userid == userid);
            if (child == null) return bgold; 
            bgold = child.cgold; 
            return bgold;
        }

        public async void DealInsPot(bool IsSupper, long insgold, int tnum,int BetIns)
        {
            if (insgold == 0) return;
            var user_clubidx = (_tbUser.clublist == null || _tbUser.clublist.Count == 0) ? 0 : _tbUser.clublist[0];
            if (user_clubidx == 0) return;//必须有社区
              
            long sytemtempgold = insgold;

            var _insjackpot = await tjackpotEx.GetJackpot(_gameid, _gameid + 1000);//游戏 平台用一个固定的奖池
            var club = await ClubHelper.GetFromCachebyID(user_clubidx);
            var user = await BaseHelper.GetBase<tuseragent2021relation>((x) => x.UserID == _userid && x.cidx == user_clubidx);

            double _tempgold = 0;
            double _alli_tempgold = 0;
            double cinsrate = 0;
            double alli = 0;//联盟社区需要赔付的不足溢出金额

            if (club != null && club.insRate > 0 && club.inspot > 0)
            {
                cinsrate = club.insRate * 1d / 100;
                double newrate = (club.inspot * 1d / Math.Abs(insgold));
                if (newrate!=0 &&  newrate < cinsrate) cinsrate = newrate;


                _tempgold = insgold * cinsrate;
                if (club != null && user != null)
                {
                    if (_tempgold > 0 && club.inspot < _tempgold)
                    {
                        alli += _tempgold - club.inspot;
                        _tempgold = club.inspot;
                        club.inspot = 0;
                    }
                    else club.inspot -= (long)_tempgold;//小于0才是收入

                    club.totalinspot -= sytemtempgold;//总记录
                    BranchIns += _tempgold;
                    await BaseHelper.AddOrUpdate<tclub>(club);
                    tclubfundlog fundlog = new tclubfundlog();
                    fundlog.ClubId = user_clubidx;
                    fundlog.ChangeType = _tempgold < 0 ? 1 : 2;
                    fundlog.Price = (int)Math.Abs(_tempgold);
                    fundlog.UserId = club.UserId;
                    fundlog.Role = 2;
                    await BaseHelper.AddAsyncWait(fundlog);

                    tclubjackpotLog insjack = new tclubjackpotLog();
                    insjack.clubid = user_clubidx;
                    insjack.GameId = _gameid;
                    insjack.Gold = (long)Math.Abs(_tempgold);
                    insjack.JackpotType = _tempgold < 0 ? 1 : 2;
                    insjack.tnum = tnum;
                    insjack.UserId = _userid;
                    insjack.BetIns = BetIns;
                    BaseHelper.AddAsync(insjack);
                }
            }
            tcluballiance alliance = await BaseHelper.GetShare<tcluballiance>((x) => x.idx == club.alliancid);
            if (club != null && alliance != null && club.alliancid != 0 && alliance.insRate > 0 && alliance.inspot > 0)
            {
                double ainsrate = (alliance.insRate * 1d - cinsrate * 100d) / 100d;//联盟比例
                double a_newrate = alliance.inspot * 1d / Math.Abs(insgold);//联盟新比例
                if (a_newrate != 0 && a_newrate < ainsrate) ainsrate = a_newrate;


                _alli_tempgold = insgold * ainsrate;//收入
                if (_alli_tempgold > 0 && alliance.inspot < (Math.Abs(_alli_tempgold + alli)))
                {
                    alli += _alli_tempgold - alliance.inspot;
                    _alli_tempgold = alliance.inspot;
                    alliance.inspot = 0;
                }
                else alliance.inspot -= (long)_alli_tempgold;//小于0才是收入

                club.totalinspot = sytemtempgold;//总记录
                await BaseHelper.AddOrUpdate<tcluballiance>(alliance);

                tclubjackpotLog alliinsjack = new tclubjackpotLog();
                alliinsjack.clubid = user_clubidx;
                alliinsjack.allid = alliance.idx;
                alliinsjack.GameId = _gameid;
                alliinsjack.Gold = (long)Math.Abs(_alli_tempgold);
                alliinsjack.JackpotType = _alli_tempgold < 0 ? 1 : 2;
                alliinsjack.tnum = tnum;
                alliinsjack.UserId = _userid;
                alliinsjack.BetIns = BetIns;
                BaseHelper.AddAsync(alliinsjack);

                tclubfundlog allfundlog = new tclubfundlog();
                allfundlog.ClubId = (int)alliance.idx;
                allfundlog.ChangeType = _alli_tempgold < 0 ? 1 : 2;
                allfundlog.Price = (int)Math.Abs(_alli_tempgold);
                allfundlog.UserId = club.UserId;
                allfundlog.Role = 1;
                await BaseHelper.AddAsyncWait(allfundlog);
            } 

            if (_insjackpot != null)
            {
                //平台收入支出处理
                var pt = Convert.ToInt32(insgold - _tempgold - _alli_tempgold - alli);
                _insjackpot.jackpot -= pt;
                await BaseHelper.AddOrUpdate(_insjackpot);
                sytemtempgold = pt;
            } 

            //记录奖池记录  保险池借用的奖池日志表   
            tjackpotEx.WriteJackpotLog(_gameid, _levelid, _userid, Math.Abs(insgold), 10, sytemtempgold < 0 ? 1 : 2, BetIns); 
            //jackpotLog.PlatGold = Math.Abs(sytemtempgold); 
        }


        public int Ins_Bei_Drow(int gambleall, int _31or32)
        {
            if (_31or32 == 31)
            {
                bool _closebei = false;//平分补牌大于 背保险 
                if (douts31.Count > 0 && gambleall <= insOrder31) _closebei = true;
                if (!_closebei)
                {//如果这个用户上把买了保险 这轮必须自动背保险   确认最小保险值 
                    if (insOrder31 > 0 && outs31.Count > 0)
                    {
                        insRate41 = Texas.GetRatebyCount(outs31.Count);
                        double _beiins = insOrder31 / insRate41;
                        //insOrder41 += (int)_beiins;
                        return (int)_beiins;
                    }
                }
            }
            if (_31or32 == 32)
            {
                bool _closebei = false;//平分补牌大于 背保险 
                if (douts32.Count > 0 && gambleall <= insOrder32) _closebei = true;
                if (!_closebei)
                {//如果这个用户上把买了保险 这轮必须自动背保险   确认最小保险值 
                    if (insOrder32 > 0 && outs32.Count > 0)
                    {
                        insRate42 = Texas.GetRatebyCount(outs32.Count);
                        double _beiins = insOrder32 / insRate42;
                        //insOrder42 += (int)_beiins;
                        return (int)_beiins;
                    }
                }
            }
            return 0;
        }

        /// <summary>
        /// 判断入池率
        /// </summary>
        /// <param name="prate"></param>
        /// <returns></returns>
        public async Task<bool> CheckAddRate(int prate)
        {
            tUserGameHand agenthand = await tUserGamehandEx.GetUserHandRecord(_userid, GetUserClubid());
            if (agenthand == null) return false;
            else
            {
                var totalnum = agenthand.totalCount;
                if (agenthand._gamehc!=null) totalnum+=agenthand._gamehc.Sum(g=>g.count);

                if (totalnum == 0) return false;
                if (totalnum < 300) return false;

                double _prate = (Convert.ToDouble(agenthand.dealCardCount) / Convert.ToDouble(totalnum)) * 100;
                if (_prate < prate) return true;

                return false;
            }
        }
        public void ResetIns()
        {
            _ilist31 = new List<int>();
            outs32 = new List<int>();
            douts32 = new List<int>();
            _ilist32 = new List<int>();
        }
        public void SetTimeOutActionEx(int WaitClientLimit, string waitUserAction)
        {
            _WaitClientLimitCount = WaitClientLimit;
            _waitUserAction = waitUserAction;
        }
        /// <summary>
        /// 得到玩家所属联盟
        /// </summary>
        /// <returns></returns>
        public async Task<tcluballiance> GetUserAlliance()
        {
            int u_clubidx = (_tbUser.clublist == null || _tbUser.clublist.Count == 0) ? 0 : _tbUser.clublist[0];
            if (u_clubidx == 0) return new tcluballiance();
            tclub club = await BaseHelper.GetShare<tclub>(u_clubidx);
            if (club == null || club.alliancid==0) return new tcluballiance();

            tcluballiance all = await BaseHelper.GetShare<tcluballiance>(club.alliancid);
            if(all==null) return new tcluballiance();
            return all;
        }
        public int GetUserClubid() => (_tbUser.clublist == null || _tbUser.clublist.Count == 0) ? 0 : _tbUser.clublist[0];
        

    }
}
