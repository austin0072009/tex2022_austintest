using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Common.Serialization;
using ETModel.Script.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ETModel.Script.CsScript.Action
{
    /// <summary>
    /// 逻辑消息进来 的接口处理
    /// </summary>
    public partial class TexasLogic
    {  

        /// <summary>
        /// 处理按房间号进入房间
        /// </summary>
        /// <param name="_user"></param>
        /// <param name="_data"></param>
        public async ETTask<string> EnterRoomTableByNum(tUser _user, cs_entertablenum_tex _data)
        {
            sc_entertablenum_tex _senddata = new sc_entertablenum_tex() { result = 0 };

            var _t = _lobby.GetTableByTableNum(int.Parse(_data.tnumber));
            if (_t == null) return JsonUtils.Serialize(_senddata);
            if (_t.competeid > 0) return await EnterCompeteTable(_t, _user.UserID);
            if (!(_t is TexasTable)) return JsonUtils.Serialize(_senddata);
            var _temptab = _t as TexasTable;

            //club验证
            if (_temptab._judge.alliId == 0)
            {
                if (_temptab._judge.clubidx != 0 && _user.clublist != null && !_user.clublist.Contains(_temptab._judge.clubidx))
                {
                    _senddata.result = -10;
                    return JsonUtils.Serialize(_senddata);
                }
            }

            else //共享房间验证
            {
                tcluballiance club = await BaseHelper.GetShare<tcluballiance>(_temptab._judge.alliId);
                if (club != null && _user.clublist.Intersect(club.childs.Select(t => t.clubId).ToList()).Count() <= 0)
                {
                    _senddata.result = -10;
                    return JsonUtils.Serialize(_senddata);
                }
            }

            if (_temptab.KickUser != null && _temptab.KickUser.Contains(_user.UserID))
            {
                _senddata.result = -20;
                return JsonUtils.Serialize(_senddata);
            }

            int roomid = _temptab._levelid;
            int tableid = _temptab._tableid;
            var owerRoom = _lobby.GetRoomByRoomID(roomid);
            if (owerRoom == null)
            {
                TraceLogEx.Error("tex EnterRoomTableByNumber can not find roomid:" + roomid);
                return JsonUtils.Serialize(_senddata);
            }
            await owerRoom.EnterRoomBase(_user.UserID);//所有人需要处理进入的状态

            var table = _lobby.GetTableByRoomIDandTableID(roomid, tableid);
            if (table == null) return JsonUtils.Serialize(_senddata);


            int _succes = -1;
            if (!table.CheckUserIDExitsSeat(_user.UserID))
            {
                var _myusertemp = table.GetUserByIDTry(_user.UserID);
                if (_myusertemp == null)
                {
                    _succes = await table.EnterTableWatch(_user);
                    _myusertemp = table.GetUserByIDTry(_user.UserID);
                    if (_myusertemp == null)
                    {
                        _senddata.result = -2;//-2表示房间人数达到上限
                        return JsonUtils.Serialize(_senddata);//进入不了  
                    }
                }
                else
                {
                  await  table.EnterTableWatchRe(_myusertemp, _user);
                    _succes = 1;
                }
            }
            else _succes = 1;

            var _myuser = table.GetUserByID(_user.UserID);
            if (_temptab._judge.clubidx.Equals(0))
            {
                var redisT = await ttablelistEx.GetTableByNumber(_temptab._gameid, _temptab._tableid); //大厅房间进入过缓存权限
                if (redisT != null)
                {
                    if (!redisT.JoinUser.Contains(_user.UserID))
                    {
                        redisT.JoinUser.Add(_user.UserID);
                        await BaseHelper.AddOrUpdate(redisT);
                    }
                }
            }
            _senddata.result = _succes;//-9表示房间内有很近的玩家不能进入
            _senddata.gameid = _temptab._gameid;
            _senddata.levelid = _temptab._levelid;
            _senddata.tableid = _temptab._tableid;
            _senddata.brate = table._judge._baseGamle;
            _senddata.tnum = _data.tnumber;
            _senddata.limitgold = table._judge.GetMinGoldLimit();
            _senddata.intorate_min = table._judge.intorate_min;
            _senddata.intorate_max = table._judge.intorate_max;
            _senddata.pregamble = table._judge.pregamble;
            _senddata.gps = table._judge.gps;
            _senddata.ip = table._judge.ip;
            _senddata.gametype = table._judge._gametype;
            _senddata.ins = table._judge.ins;
            _senddata.palyerlist = table.GetOUserInfoBase(_myuser);
            _senddata.lefts = table._judge.GetLeftTimeSec();
            _senddata.pas = table._judge.GetPassword(_user.UserID);
            _senddata.delay = table._judge.delay;
            _senddata.showCard = table._judge.showCard;
            _senddata.clubid = table._judge.clubidx;
            _senddata.ownnerid = table._ownerid;
            _senddata.Inflow = table._judge.Inflow;
            _senddata.tname = table.tname;
            _senddata.manNum = table._judge.manNum;
            _senddata.IsSupper = table.IsSupper;
            _senddata.cinto = table.cinto;
            _senddata.clubslist = table.IsSupper ? await GetUserClubList(_user.UserID, table._judge.alliId) : null;
            _senddata.intoCid = _myuser.clubidx;
            _senddata.ios = table._judge.ios;
            _senddata.fshownum = _myuser.fshownum;
            _senddata.clicknum = _myuser.clicknum;
            _senddata.IsSettle = _myuser.IsSettle;
            _senddata.openplay = table.openplay;
            _senddata._curTableOverCount = table._judge._curTableOverCount;
            _senddata.AOF_Times = table._judge.AOF_Times;
            _senddata.minPC = table._num_min;
            //比赛字段  开始
            _senddata.bigblind = table._judge.into;
            _senddata.competeid = table.competeid;
            _senddata.min_level = table.min_level;
            _senddata.max_level = table.max_level;
            _senddata.level = table.level;
            _senddata.compete_name = table.name;
            //比赛字段  结束
            if (_myuser == null)
            {
                _senddata.lockgold = 0;
                _senddata.delays = -1;//表示 给免费机会
                _senddata.cgold = 0;
            }
            else
            {
                _myuser._isDisconnet = false;
                _myuser._watchandoff = false;
                _senddata.lockgold = (int)_myuser._CurrentGold;
                if (_myuser.UsedDelayFree) _senddata.delays = _myuser.delayCount;//最低为1 
                else _senddata.delays = -1;
                _senddata.cgold = (int)_myuser._CurrentGold;
            }
            var _jackpot = await tjackpotEx.GetGameJackpot(_temptab._gameid);
            if (_jackpot != null && _jackpot.Count > 0)
                _senddata.jackpot = (int)_jackpot.Sum(t => t.jackpot);
            _senddata.gpot = (int)table._judge.GetALLJackpot();
            _senddata.lpot = (int)table._judge.GetALLJackpot();
            _senddata._recover = new TableRecoverTexasSD()
            {
                _pos2allin = table._judge.GetPos2AllIn(),
                _pos2gamble = table._judge.GetPos2GambleTurn(),
                _pos2giveup = table.GetPos2GiveUp(),
                _pos2gold = table.GetCurrentPosGold(),
                _pos2look = table._judge.GetPos2Look(),
                _opencard = table._judge.GetEndCommonCard(table._judge._texasTurn),
                shoupai = _myuser == null ? new List<int>() : _myuser._shouPaiArr,
                _status = (int)table._tablestatus,
                _pos2apply = await table._judge.GetApplyList(),
                ctoken = table._userTokenPos,
                bankpos = table._bankpos,
                insdata = table._judge.insdata.Where(t => t.pos == _myuser.pos && t._tc == (int)table._judge._texasTurn).ToList(),
                _pos2bigsmall = table._judge._sbslist,
                lt = (table._userTokenPos != 0 && table.GetBaseUserByPos(table._userTokenPos, true) != null) ? table.GetUserByPosMust(table._userTokenPos).GetCurrentTimeDown() : 0
            };
            return JsonUtils.Serialize(_senddata);
        }

        public async Task<sc_entertablenum_tex> EnterCompeteTableWatch(TexasTable table, int userid, bool isneedsend = true)
        {
            sc_entertablenum_tex _senddata = new sc_entertablenum_tex() { result = 0 };

            int roomid = table._levelid;
            int tableid = table._tableid;
            var owerRoom = _lobby.GetRoomByRoomID(roomid);
            await owerRoom.EnterRoomBase(userid);//所有人需要处理进入的状态
            var _user = await BaseHelper.GetBase<tUser>(userid);

            int _succes = -1;
            TexasUser _myuser = table.GetUserByIDTry(userid);
            if (_myuser == null)
            {
                _succes = await table.EnterTableWatch(_user);
                _myuser = table.GetUserByIDTry(_user.UserID);
                if (_myuser == null)
                {
                    _senddata.result = -2;//-2表示房间人数达到上限
                    return _senddata;
                }
            }
            else
            {
              await  table.EnterTableWatchRe(_myuser, _user);
                _succes = 1;
            }
            _senddata.result = _succes;//-9表示房间内有很近的玩家不能进入
            _senddata.gameid = table._gameid;
            _senddata.levelid = table._levelid;
            _senddata.tableid = table._tableid;
            _senddata.brate = table._judge._baseGamle;
            _senddata.tnum = table._tableid.ToString();
            _senddata.limitgold = table._judge.GetMinGoldLimit();
            _senddata.intorate_min = table._judge.intorate_min;
            _senddata.intorate_max = table._judge.intorate_max;
            _senddata.pregamble = table._judge.pregamble;
            _senddata.gps = table._judge.gps;
            _senddata.ip = table._judge.ip;
            _senddata.gametype = table._judge._gametype;
            _senddata.ins = table._judge.ins;
            _senddata.palyerlist = table.GetOUserInfoBase(_myuser);
            _senddata.lefts = table._judge.GetLeftTimeSec();
            _senddata.pas = table._judge.GetPassword(_user.UserID);
            _senddata.delay = table._judge.delay;
            _senddata.showCard = table._judge.showCard;
            _senddata.clubid = table._judge.clubidx;
            _senddata.ownnerid = table._ownerid;
            _senddata.Inflow = table._judge.Inflow;
            _senddata.tname = table.tname;
            _senddata.manNum = table._judge.manNum;
            _senddata.IsSupper = table.IsSupper;
            _senddata.cinto = table.cinto;
            _senddata.clubslist = table.IsSupper ? await GetUserClubList(_user.UserID, table._judge.alliId) : null;
            _senddata.intoCid = _myuser.clubidx;
            _senddata.ios = table._judge.ios;
            _senddata.fshownum = _myuser.fshownum;
            _senddata.clicknum = _myuser.clicknum;
            _senddata.IsSettle = _myuser.IsSettle;
            _senddata._curTableOverCount = table._judge._curTableOverCount;
            _senddata.minPC = table._num_min;
            //比赛字段  开始
            _senddata.bigblind = table._judge.into;
            _senddata.competeid = table.competeid;
            _senddata.min_level = table.min_level;
            _senddata.max_level = table.max_level;
            _senddata.level = table.level;
            _senddata.compete_name = table.name;
            //比赛字段  结束
            if (_myuser == null)
            {
                _senddata.lockgold = 0;
                _senddata.delays = -1;//表示 给免费机会
                _senddata.cgold = 0;
            }
            else
            {
                _myuser._isDisconnet = false;
                _myuser._watchandoff = false;
                _senddata.lockgold = (int)_myuser._CurrentGold;
                if (_myuser.UsedDelayFree) _senddata.delays = _myuser.delayCount;//最低为1 
                else _senddata.delays = -1;
                _senddata.cgold = (int)_myuser._CurrentGold;
            }
            var _jackpot = await tjackpotEx.GetGameJackpot(table._gameid);
            if (_jackpot != null && _jackpot.Count > 0)
                _senddata.jackpot = (int)_jackpot.Sum(t => t.jackpot);
            _senddata.gpot = (int)table._judge.GetALLJackpot();
            _senddata.lpot = (int)table._judge.GetALLJackpot();
            _senddata._recover = new TableRecoverTexasSD()
            {
                _pos2allin = table._judge.GetPos2AllIn(),
                _pos2gamble = table._judge.GetPos2GambleTurn(),
                _pos2giveup = table.GetPos2GiveUp(),
                _pos2gold = table.GetCurrentPosGold(),
                _pos2look = table._judge.GetPos2Look(),
                _opencard = table._judge.GetEndCommonCard(table._judge._texasTurn),
                shoupai = _myuser == null ? new List<int>() : _myuser._shouPaiArr,
                _status = (int)table._tablestatus,
                _pos2apply = await table._judge.GetApplyList(), 
                bankpos = table._bankpos,
                _pos2bigsmall = table._judge._sbslist,
                insdata = table._judge.insdata.Where(t=>t.pos == _myuser.pos && t._tc == (int)table._judge._texasTurn).ToList()
            };
            if(isneedsend) table.Send(_myuser, _senddata);
            return _senddata;
        }

        /// <summary>
        /// 进入房间 返回现在等待用户数 
        /// </summary>                          
        /// <returns></returns>
        private string TableReady(tUser _user, cs_ready_tex _data)
        {
            sc_ready_tex _senddata = new sc_ready_tex() { result = 0, cc = 0 };

            TexasTable table = _lobby.GetTableByRoomIDandTableID(_data.levelid, _data.tableid);
            if (table == null) return JsonUtils.Serialize(_senddata);
            table.Ready(_user.UserID);
            _senddata.result = 1;
            return JsonUtils.Serialize(_senddata);
        }
        /// <summary>
        /// 弃牌
        /// </summary>                          
        /// <returns></returns>
        public string GiveUp(tUser _user, cs_giveup_tex _data)
        {
            sc_giveup_tex _senddata = new sc_giveup_tex() { result = 0, cc = 0 };

            TexasTable table = _lobby.GetTableByRoomIDandTableID(_data.levelid, _data.tableid);
            if (table == null) return JsonUtils.Serialize(_senddata);
            table.GiveUp(_user.UserID, true);
            _senddata.result = 1;
            return JsonUtils.Serialize(_senddata);
        }

        /// <summary>
        /// 下注
        /// </summary>
        /// <param name="_user"></param>
        /// <param name="_data"></param>
        /// <returns></returns>
        public string Gamble(tUser _user, cs_gamble_tex _data)
        {
            sc_gamble_tex _senddata = new sc_gamble_tex() { result = 0, cc = 0 };

            TexasTable table = _lobby.GetTableByRoomIDandTableID(_data.levelid, _data.tableid);
            if (table == null) return JsonUtils.Serialize(_senddata);
            bool _success = table.Gamble(_user.UserID, _data.money, _data.addrate);
            _senddata.result = _success ? 1 : 0;
            return JsonUtils.Serialize(_senddata);
        }


        /// <summary>
        /// 保险
        /// </summary>                          
        /// <returns></returns>
        public string Insurance(tUser _user, cs_insurance_tex _data)
        {
            sc_insurance_tex _senddata = new sc_insurance_tex() { result = 0, cc = 0 };

            TexasTable table = _lobby.GetTableByRoomIDandTableID(_data.levelid, _data.tableid);
            if (table == null) return JsonUtils.Serialize(_senddata);

            int _success = table.Insurance(_user.UserID, _data.ins, _data.ins32, _data.outs);
            _senddata.result = _success;
            return JsonUtils.Serialize(_senddata);
        }

        /// <summary>
        /// 随时 可以申请 延时 有消耗 一局内的消耗多次会翻倍
        /// </summary>                          
        /// <returns></returns>
        public string ApplyDelay(tUser _user, cs_delay_tex _data)
        {
            sc_delay_tex _senddata = new sc_delay_tex() { result = 0, cc = 0 };

            TexasTable table = _lobby.GetTableByRoomIDandTableID(_data.levelid, _data.tableid);
            if (table == null) return JsonUtils.Serialize(_senddata);


            var myu = table.GetUserByIDTry(_user.UserID);
            if (myu != null)
            {
                _senddata.result = table.NotifyDelay(_user.UserID);
            }
            return JsonUtils.Serialize(_senddata);
        }

        /// <summary>
        /// 申请离开状态 
        /// </summary>                          
        /// <returns></returns>
        public async Task<string> ReAppleExite(tUser _user, cs_applyexittable_tex _data)
        {
            sc_applyexittable_tex _senddata = new sc_applyexittable_tex() { result = 0, cc = 0 };
            TexasTable table = _lobby.GetTableByRoomIDandTableIDTry(_data.levelid, _data.tableid);
            if (table == null)
            {
                _senddata.result = 1;
                return JsonUtils.Serialize(_senddata);
            }
            int _success = await table.ReApplyExitTable(_user.UserID);
            _senddata.result = _success;
            return JsonUtils.Serialize(_senddata);
        }
        /// <summary>
        /// /
        /// </summary>
        /// <returns></returns>
        public async ETTask<string> GetBarragelog(cs_chatlog tcb)
        {
            sc_chatlog _senddata = new sc_chatlog() { result = 0, cc = 0 };
            TexasTable table = _lobby.GetTableByTableNum(tcb.tableid);
            if (table != null)
            {
                _senddata.data = await BaseHelper.GetTableBarrage(tcb.tableid, tcb.levelid, tcb.gameid);
                _senddata.tableId = tcb.tableid;
                _senddata.levelid = tcb.levelid;
                _senddata.result = 1;
            }
            return JsonUtils.Serialize(_senddata);
        }


        /// <summary>
        /// 获取自己已创建的房间列表  
        /// 1.未结束与正在玩的在内存中找
        /// 2.已结束的被删除了 
        /// </summary>                          
        /// <returns></returns>
        private async ETTask<string> GetTableList(tUser _user, cs_gettablelist_tex _data)
        {
            sc_gettablelist_tex _senddata = new sc_gettablelist_tex() { result = 0, cc = 0 };

            _senddata.tc = new List<int>() { 32 };//默认 8 16 24 32 40
            _senddata.g = t_anythingList.GetInt("gold_eachtable");
            _senddata.tinfo = new List<TableRoomInfoTex>();
            List<int> cids = new List<int>();
            bool ishall = false;
            if (_data.clubidx == 0)
            {
                //大厅内房间
                if (_user.clublist != null) cids = _user.clublist.ToList();
                cids.Add(0);
                ishall = true;
            }
            else
            {
                cids.Add(_data.clubidx);
            }
            cids = cids.Distinct().ToList();
            foreach (var cid in cids)
            {
                var _club = await BaseHelper.GetShare<tclub>((x) => x.idx == cid);
                List<ttablelist> myTables = await ttablelistEx.GetAllByGameidandLevelid(_data._g, cid, _user.UserID, _club == null ? 0 : _club.alliancid);
                if (myTables != null && myTables.Count > 0)
                {
                    myTables = myTables.OrderBy(i => i.tableStatus).ThenByDescending(i => i.createTime).ToList();
                    foreach (var item in myTables)
                    {
                        var _tab = _lobby.GetTableByTableNum(item.tableid);
                        if (_tab != null)
                        {

                            if (_tab == null || _tab._judge == null || _tab._DicPos2User == null)
                            {
                                TraceLogEx.Error("can not find the tablenum:" + item.tableid);
                                continue;
                            }
                            tex_create_para _para = JsonUtils.Deserialize<tex_create_para>(item.para);
                            List<cinfo> data = new List<cinfo>();
                            if (ishall && _tab._judge.alliId == 0 && _club != null) data.Add(new cinfo() { cn = _club.Title, url = string.IsNullOrEmpty(_club.clubIcon) ? "" : ToolsEx.IsHandlePhoto(0, _club.clubIcon).Trim() });
                            else data = await GetAllClubName(_user.UserID, _tab._judge.alliId);

                            var _myuser = _tab.GetUserByID(_user.UserID);
                            TableRoomInfoTex info = new TableRoomInfoTex()
                            {
                                ctime = item.createTime,
                                cC = item.curCount,
                                gid = item.gameid,
                                maxC = item.maxCount,
                                oid = item.ownerId,
                                lvid = item.levelid,
                                tNum = item.tableid,
                                tid = item.tableid,
                                minPC = item.minPlayerCount,
                                state = item.tableStatus,
                                brate = item.baserate,
                                hist = 0, //_tab._judge.CheckInGame(_user.UserID) ? 1 : 0,
                                ltime = _tab._judge.GetLeftTimeSec(),
                                dur = item.Duration,
                                pcount = _tab._DicPos2User.Count,
                                t = _tab._judge._gametype,
                                ins = _tab._judge.ins,
                                lg = item.firstinto,
                                gps = _tab._judge.gps,
                                intorate_max = _tab._judge.intorate_max,
                                intorate_min = _tab._judge.intorate_min,
                                ip = _tab._judge.ip,
                                preG = _tab._judge.pregamble,
                                ispas = string.IsNullOrEmpty(_tab._judge.password) ? 0 : 1,
                                clubName = data,
                                tname = item.tname,
                                manNum = item.manNum,
                                IsSupper = _tab.IsSupper,
                                ios = _tab._judge.ios,
                                AOF_Times = _tab._judge.AOF_Times,
                                IsSettle = _myuser == null ? false : _myuser.IsSettle,
                                cgold = _myuser == null ? 0 : (int)_myuser._CurrentGold
                            };
                            _senddata.tinfo.Add(info);
                        }
                    }
                }
            }
            if (ishall) _senddata.tinfo = _senddata.tinfo.GroupBy(t => t.tNum).Select(t => t.First()).ToList();



            var vipinfo = await tb_userinfoEx.GetFromCachebyUserID(_user.UserID);
            _senddata.maxcount = vipinfo.cTable;
            if (vipinfo.vipLv > 0) _senddata.curcount = await ttablelistEx.GetAllCountByOwnerID(_user.UserID, vipinfo.CreateTime, _lobby._gameid);
            else _senddata.curcount = await ttablelistEx.GetAllCountByOwnerID(_user.UserID, _lobby._gameid);
            _senddata.tinfo = _senddata.tinfo.OrderBy(t => t.brate).ThenByDescending(t => t.ctime).ToList();
            _senddata.result = 1;
            _senddata.idx = _data.clubidx;
            string _redata = JsonUtils.Serialize(_senddata);
            return _redata;
        }
        /// <summary>
        /// 解散指定房间  
        /// 1.未开始的才能解散,或者考虑需要强制解散
        /// </summary>                          
        /// <returns></returns>
        private string DisMissTable(tUser _user, cs_dismisstable _data)
        {
            sc_dismisstable _senddata = new sc_dismisstable() { result = 0, cc = 0 };

            var _table = _lobby.GetTableByRoomIDandTableID(0, _data.tableid);
            if (_table == null) return JsonUtils.Serialize(_senddata);
            _table._judge._endtime = DateTime.Now;
            //_table.DismissTable();

            _senddata.result = 1;
            string _redata = JsonUtils.Serialize(_senddata);
            return _redata;
        }
        /// <summary>
        /// 创建房间
        /// </summary>
        /// <param name="_user">房主</param>
        /// <param name="_data">创建房间参数</param>
        /// <returns></returns>
        public async ETTask<string> CreateTable(tUser _user, cs_createtable_tex _data)
        {
            try
            {
                sc_createtable_tex _senddata = new sc_createtable_tex() { result = 0, cc = 0 };
                //1.关闭了游戏 
                if (_lobby._CloseGame)
                {
                    _senddata.result = -3;//关闭了游戏
                    return JsonUtils.Serialize(_senddata);
                } 
                var correctRoom = _lobby.roomCache.FindLast((g) => { return g.BaseRate == _data.baserate; });


                if (correctRoom == null)
                {
                    _senddata.result = -1;//金币不够
                    return JsonUtils.Serialize(_senddata);
                }
                int _needGold = 0;
                tclub club = await BaseHelper.GetShare<tclub>(_data.clubidx);
                if (club != null)
                {
                    //club内
                    var cuser = club.childs.Find(t => t.userid == _user.UserID);
                    if (club.manager && (cuser == null || cuser._ismanager == 0))
                    {
                        _senddata.result = -3;//权限不够
                        return JsonUtils.Serialize(_senddata);
                    }
                }

                if (club != null && club.alliancid != 0)
                {
                    tcluballiance alli = await BaseHelper.GetShare<tcluballiance>(club.alliancid);

                    if (alli != null && alli.clubid != 0)
                    {
                        var cuser = club.childs.Find(t => t.userid == _user.UserID);
                        if (cuser == null || cuser._ismanager == 0)
                        {
                            _senddata.result = -3;//超级联盟必须管理员创建者建房
                            return JsonUtils.Serialize(_senddata);
                        }
                    }


                    if (alli != null && alli.clubid != 0)
                    {
                        //超级联盟的其他club判断
                        var bigclub = BaseHelper.GetShare<tclub>(_data.clubidx);
                        if (_data.clubidx != alli.clubid)
                        {
                            _senddata.result = -3;//权限不够
                            return JsonUtils.Serialize(_senddata);
                        }
                    }
                    if (alli != null && !alli.IsSupper)
                    {
                        //不是超联盟开放需要收费
                        var ngold = ToolsEx.GetOpentableDiamond(_data.baserate);
                        var vipinfo = await tb_userinfoEx.GetFromCachebyUserID(_user.UserID);
                        var h_num = await ttablelistEx.GetAllCountByOwnerID(_user.UserID, _lobby._gameid);//已经创建数量
                        if (h_num >= vipinfo.cTable)
                        {
                            _needGold = ngold;
                        }
                    }

                    if (alli != null && alli.IsSupper && club.gold == 0)
                    {
                        _senddata.result = -15;//超级联盟 没不能建房间
                        return JsonUtils.Serialize(_senddata);
                    }
                }
                else
                {
                    //大厅检测
                    var ngold = ToolsEx.GetOpentableDiamond(_data.baserate);
                    //大厅创建 和 普通成员在club创建
                    var vipinfo = await tb_userinfoEx.GetFromCachebyUserID(_user.UserID);
                    var h_num = await ttablelistEx.GetAllCountByOwnerID(_user.UserID, _lobby._gameid);//已经创建数量
                    if (h_num >= vipinfo.cTable) //收费
                    {
                        _needGold = ngold;
                    }
                }

                //2.砖石检测 
                //_needGold = t_anythingList.GetInt("gold_eachtable");//暂时定的开房价
                if (_user.GetGoldAndWinGold < _needGold)
                {
                    _senddata.result = -4;//金币不够
                    return JsonUtils.Serialize(_senddata);
                }

                int levelid = correctRoom._levelid;
                var room = _lobby.GetRoomByRoomID(levelid);
                //3.限制次数
                List<int> _tlist = room.GetTableListByOwnerUserID(_user.UserID);
                if (_tlist.Count > 100 && _user.UserID != 1008) //自动开房人员不限制次数
                {
                    _senddata.result = -2;//不能超过100次
                    return JsonUtils.Serialize(_senddata);
                }

                _user.GoldReduce(_needGold);
                if (_needGold > 0) tb_UserEx.UserDiamondLog(_user, 10, _lobby._gameid, Language.Instance.openTableXh, _needGold);

                _senddata.gold = (int)_user.GetGoldAndWinGold;
                var intstr = await CreateTableForRoom(room, _user.UserID, _data, _needGold);
                _senddata.tableid = intstr;
                _senddata.tnumber = intstr + "";
                _senddata.tcount = await ttablelistEx.GetAllCountByOwnerID(_user.UserID, _lobby._gameid);
                if (_senddata.tableid > 0) _senddata.result = 1;

                _senddata.playerCount = _data.numpertable;
                _senddata.levelid = levelid;
                string _redata = JsonUtils.Serialize(_senddata);
                return _redata;
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, " fetal error !");
            }
            return null;
        }

        /// <summary>
        /// 房卡模式创建桌子
        /// </summary>
        /// <param name="ownerid">房主ID</param>
        /// <param name="_data">房间参数</param>
        /// <returns></returns>
        public async Task<int> CreateTableForRoom(TexasRoom room, int ownerid, cs_createtable_tex _data, int _needGold)
        {
            int _tnumber = 0;
            if (_data.gametype != 30 && _lobby.GetTableCount() >= room._levelinfo.openTableCount)
            {
                TraceLogEx.Error("201704011350texas room  unusedQue.Count <= 0   桌子不够了，，创建不成功了...");
                return _tnumber;
            }

            _tnumber = await room.GetSixTableId();
            if (_tnumber < 99999)
            {
                TraceLogEx.Error("201704011350texas room  unusedQue.Count <= 0   桌子不够了，，创建不成功了...");
                return _tnumber;
            }
            TexasTable tab = new TexasTable(_lobby._gameid, room, _tnumber, _data, ownerid, _data.numpertable, DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss"));

            tex_create_para _para = new tex_create_para()
            {
                blind = _data.baserate,
                gametype = _data.gametype,
                ins = _data.ins,
                gps = _data.gps,
                ip = _data.ip,
                intorate_min = _data.intorate_min,
                intorate_max = _data.intorate_max,
                pregamble = _data.pregamble,
                clubidx = _data.clubidx,
                AOF_Times = _data.AOF_Times
            };

            ttablelist newtemp = new ttablelist()
            {
                createTime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss"),
                curCount = 0,
                gameid = _lobby._gameid,
                Duration = _data.Duration,
                baserate = _data.baserate,
                firstinto = _data.intorate_min.ToInt32(),
                maxCount = 200,
                minPlayerCount = _data.numpertable,
                levelid = room._levelid,
                ownerId = ownerid,
                tableStatus = 0,
                tableid = _tnumber,
                password = _data.password,
                para = JsonUtils.Serialize(_para),
                data = JsonUtils.Serialize(_data),
                ClubIdx = _data.clubidx,
                tname = _data.tname,
                manNum = _data.manNum,
                cinto = _data.cinto,
                allId = _data.allianceid,
                openplay = _data.openplay,
                idx = _lobby._gameid * 1000000L + _tnumber
            };
            await ttablelistEx.AddOrUpdate(newtemp);
            if (!room._dicMasterUserID2Tableid.ContainsKey(ownerid))
            {
                room._dicMasterUserID2Tableid.Add(ownerid, new List<int>());
            }

            room._dicMasterUserID2Tableid[ownerid].Add(_tnumber);
            _lobby.AddTable(_tnumber, tab);
            return _tnumber;
        }

        private async ETTask<string> SitDown(tUser _user, cs_sitdown_tex _data)
        {
            sc_sitdown_tex _senddata = new sc_sitdown_tex() { result = 0, cc = 0 };

            var table = _lobby.GetTableByRoomIDandTableID(_data.levelid, _data.tableid);
            if (table == null) return JsonUtils.Serialize(_senddata);
            if (table.competeid > 0) { _senddata.message = "比赛场不能主动坐下"; return JsonUtils.Serialize(_senddata); }
            if (table == null)
            {
                _senddata.result = -3;
                return JsonUtils.Serialize(_senddata);
            }
            _data.gold = (_data.gold / 100) * 100;//patch
            var _succes = await table.SitDown(_user.UserID, _data.gold, _data.clubidx, _data.pas, _data.pos, _data.iskeep);
            _senddata.result = _succes;
            _senddata.ugold = (int)await table.GetUserBalance(_user.UserID, table.IsSupper);
            string _redata = JsonUtils.Serialize(_senddata);
            //table.AddSendDataRecord(_user.UserID, _senddata);//坐下不加入记录
            return _redata;
        }

        private async ETTask<string> SitDownWait(tUser _user, cs_sitdownwait_tex _data)
        {
            sc_sitdownwait_tex _senddata = new sc_sitdownwait_tex() { result = 0,   cc = 0 };

            var table = _lobby.GetTableByRoomIDandTableID(_data.levelid, _data.tableid);
            if (table == null)
            {
                _senddata.result = -3;
                return JsonUtils.Serialize(_senddata);
            }
            var _succes = table.SitDownWait(_user.UserID, _data.pos);
            _senddata.result = await _succes;
            string _redata = JsonUtils.Serialize(_senddata);
            return _redata;
        }

        private async ETTask<string> SitDownWaitUp(tUser _user, cs_sitdownwaitup_tex _data)
        {
            sc_sitdownwaitup_tex _senddata = new sc_sitdownwaitup_tex() { result = 0,   cc = 0 };

            var table = _lobby.GetTableByRoomIDandTableID(_data.levelid, _data.tableid);
            if (table == null)
            {
                _senddata.result = -3;
                return JsonUtils.Serialize(_senddata);
            }
            var _succes = await table.SitDownWaitUp(_user.UserID);
            _senddata.result = _succes;
            string _redata = JsonUtils.Serialize(_senddata);
            return _redata;
        }


        /// <summary>
        ///   
        /// </summary>                          
        /// <returns></returns>
        private string SitUpKeep(tUser _user, cs_situpkeep_tex _data)
        {
            sc_situpkeep_tex _senddata = new sc_situpkeep_tex() { result = 0, cc = 0 };

            var table = _lobby.GetTableByRoomIDandTableID(_data.levelid, _data.tableid);
            if (table == null) return JsonUtils.Serialize(_senddata);

            int _succes = table.SitUpKeep(_user.UserID, _data.keep);
            _senddata.result = _succes > 0 ? 1 : _succes;
            _senddata.keep = _data.keep;
            _senddata.lockgold = _succes;

            string _redata = JsonUtils.Serialize(_senddata);
            return _redata;
        }


        /// <summary>
        ///  
        /// </summary>                          
        /// <returns></returns>
        public string VMasterCommonCard(tUser _user, cs_tokenvmaster_tex _data)
        {
            sc_tokenvmaster_tex _senddata = new sc_tokenvmaster_tex() { result = 0, cc = 0 };

            TexasTable table = _lobby.GetTableByRoomIDandTableID(_data.levelid, _data.tableid);
            if (table == null) return JsonUtils.Serialize(_senddata);
            int _success = table.VMasterCommonCard(_user.UserID, _data._Cards);
            _senddata.result = _success;
            return JsonUtils.Serialize(_senddata);
        }
        /// <summary>
        /// 玩家备注
        /// </summary>
        /// <param name="_user"></param>
        /// <param name="_data"></param>
        /// <returns></returns>
        public async ETTask<string> UserSetRemark(tUser _user, cs_userremark_tex _data)
        {
            sc_userremark_tex _senddata = new sc_userremark_tex() { result = 0, cc = 0 };
            tuserInfoEx userinfoex = await tb_userinfoEx.GetFromCachebyUserID(_user.UserID);
            if (_data.uid != _user.UserID)
            {
                if (userinfoex.Userremark == null) userinfoex.Userremark = new CacheList<UserRemark>();
                TexasTable table = _lobby.GetTableByRoomIDandTableID(_data.levelid, _data.tableid);
                if (table != null)
                {
                    {
                        userinfoex.Userremark.RemoveAll(t => t.userid == _data.uid);
                        userinfoex.Userremark.Add(new UserRemark()
                        {
                            userid = _data.uid,
                            playRemark = _data.pRemark,
                            remarkName = _data.rname
                        });
                        sc_refreshtableuser_n fuser = new sc_refreshtableuser_n() { result = 1, cc = 0 };
                        List<UserIDMSG> imList = new List<UserIDMSG>();
                        table.ForeachAllDo((i) =>
                        {
                            var _tempuser = table._DicPos2User[i];
                            if (_tempuser._userid == _data.uid)
                            {
                                OtherUserInfoSD userinfo = new OtherUserInfoSD();
                                _tempuser._tbwechatposData.isW = _tempuser.CheckisWatch() ? 1 : 0;
                                _tempuser._tbwechatposData.isK = _tempuser._keepseat;
                                _tempuser._tbwechatposData.pos = _tempuser.pos;
                                if (userinfoex.Userremark != null && userinfoex.Userremark.Count > 0)
                                    _tempuser._tbwechatposData.py.uremark = userinfoex.Userremark.Where(t => t.userid == _tempuser._userid).FirstOrDefault();
                                fuser.user = _tempuser._tbwechatposData;
                                fuser.Ur = _tempuser._tbwechatposData.py.uremark;
                                imList.Add(new UserIDMSG(_user.UserID, fuser, false, false));
                            }

                        });
                        table.SendCommonData(imList);
                    }
                }
                _senddata.result = 1;
            }
            else _senddata.result = 0;
            await BaseHelper.AddOrUpdateBase(userinfoex);
            return JsonUtils.Serialize(_senddata);
        }

        /// <summary>
        /// 创建者 踢人
        /// </summary>
        /// <param name="_user"></param>
        /// <param name="_data"></param>
        /// <returns></returns>
        public async Task<string> TickUser(tUser _user, cs_tickuser_tex _data)
        {
            sc_tickuser_tex _senddata = new sc_tickuser_tex() { result = 0, cc = 0 };

            TexasTable table = _lobby.GetTableByRoomIDandTableID(_data.levelid, _data.tableid);
            if (table == null) return JsonUtils.Serialize(_senddata);
            if (_user.UserID != table._ownerid) return JsonUtils.Serialize(_senddata);
            bool _suc = await table.TickUser(_data.uid, _data.type, _user.UserID);
            _senddata.result = _suc ? 1 : -2;
            await BaseHelper.AddOrUpdateBase(_user);
            return JsonUtils.Serialize(_senddata);
        }

        public async ETTask<string> TexasCollectPoker(tUser _user, cs_texascollect_tex _data)
        {
            sc_texascollect_tex _senddata = new sc_texascollect_tex() { result = 0, cc = 0 };
            TexasTable table = _lobby.GetTableByRoomIDandTableID(_data.levelid, _data.tableid);
            int result = 0;
            if (_data.type.Equals(0))
            {
                if (table != null)
                {
                    {
                        var cdata = await BaseHelper.GetShareAll<tcollectlog>(t => t.UserId == _user.UserID);
                        if (cdata != null && cdata.Count >= 15) result = -2;
                        else
                        {
                            var data = table.tableloglist.Where(t => t.infoId == _data.infoId).FirstOrDefault();
                            if (data != null)
                            {
                                tcollectlog log = new tcollectlog();
                                log.sceneInfo = data == null ? "" : JsonUtils.Serialize(data);
                                log.tnum = table._tableid;
                                log.UserId = _user.UserID;
                                log.baserate = table._judge._baseGamle;
                                log.gNum = data.handcount;
                                log.totalnum = table.tableloglist.Count();
                                log.NoGiveupNum = data.ng;
                                log.maxPoker = data.maxpoker;
                                log.WinGold = data.winGold;
                                log.WinUserId = data.winuser;
                                log.infoId = data.infoId;
                                log.preG = table._judge.pregamble;
                                log.PlayerList = JsonUtils.Serialize(table.GetTablePlayer());
                                log.showCard = table._judge.showCard;
                                log.compoker = table._judge._fiveCommonCard;
                                log.maxPot = table.tableloglist != null ? table.tableloglist.GroupBy(t => t.infoId).Select(t => t.First().tInfo.Sum(m => m.g)).ToList().Max() : 0;

                                var owngame = data.tInfo.Where(t => t.id == _user.UserID).FirstOrDefault();
                                if (owngame != null) //参与游戏
                                {
                                    log.OwnWin = owngame.wg;
                                    log.OwnSpair = owngame.p;
                                }
                                BaseHelper.Add<tcollectlog>(log);
                                _senddata.infoId = _data.infoId;
                                _senddata.IsSava = true;
                                _senddata.savaNum = cdata == null ? 0 : cdata.Count() + 1;
                                result = 1;
                            }
                        }
                    }
                }
                else result = -1;
            }
            else
            {
                var log = await BaseHelper.GetShare<tcollectlog>(t => t.infoId == _data.infoId && t.UserId == _user.UserID);
                BaseHelper.Delete<tcollectlog>(log);
                var cdata = await BaseHelper.GetShareAll<tcollectlog>(t => t.UserId == _user.UserID);
                _senddata.infoId = _data.infoId;
                _senddata.IsSava = false;
                _senddata.savaNum = cdata == null ? 0 : cdata.Count();
                result = 1;
            }
            _senddata.result = result;
            return JsonUtils.Serialize(_senddata);
        }

        public async ETTask<string> GetMyCollectPoker(tUser _user, cs_geymytexascollect_tex _data)
        {
            sc_geymytexascollect_tex _senddata = new sc_geymytexascollect_tex() { result = 0, cc = 0 };
            var log = await BaseHelper.GetShareAll<tcollectlog>(t => t.UserId == _user.UserID);

            if (log != null)
            {
                _senddata.data = log.OrderByDescending(t=>t.CreateTime).Select(t => new TexasCollectList()
                {
                    baserate = t.baserate,
                    gNum = t.gNum,
                    infoId = t.infoId,
                    NoGiveupNum = t.NoGiveupNum,
                    winGold = t.WinGold,
                    maxPoker = (int)Texas.GetTexasType(t.maxPoker),
                    WinUserId = t.UserId,
                    seeNum = t.seeNum,
                    totalnum = t.totalnum,
                    winName = _user.wechatName,
                    OwnSpair = t.OwnSpair,
                    OwnWin = t.OwnWin,
                    preG = t.preG,
                    cid = t.Id,
                    compoker = t.compoker
                }).ToList();

            }
            _senddata.result = 1;
            return JsonUtils.Serialize(_senddata);
        }
        /// <summary>
        /// 得到单局收藏详情
        /// </summary>
        /// <param name="_user"></param>
        /// <param name="_data"></param>
        /// <returns></returns>
        public async ETTask<string> GetCollectDetailsbyid(tUser _user, cs_getscollectbyid_tex _data)
        {
            sc_getscollectbyid_tex _senddata = new sc_getscollectbyid_tex() { result = 0, cc = 0 };
            int result = 0;
            var clog = await BaseHelper.GetShare<tcollectlog>(t => t.Id == _data.cid);
            if (clog != null)
            {
                _senddata.cTime = clog.CreateTime.ToString("MM-dd hh:mm");
                _senddata.ulist = JsonUtils.Deserialize<List<PInfoSD>>(clog.PlayerList);
                _senddata.snum = clog.seeNum;
                _senddata.tinfo = JsonUtils.Deserialize<TexTInfoSD>(clog.sceneInfo);
                _senddata.tnum = clog.tnum;
                _senddata.showCard = clog.showCard;
                _senddata.baserate = clog.baserate;
                _senddata.maxPot = clog.maxPot;
                //_senddata
                clog.seeNum++;
                BaseHelper.AddOrUpdate(clog);
                result = 1;
            }
            else result = -1;

            _senddata.result = result;
            return JsonUtils.Serialize(_senddata);
        }

        public string DismisstTextable(tUser _user, cs_dismisstable_tex _data)
        {
            sc_dismisstable_tex _senddata = new sc_dismisstable_tex() { result = 0, cc = 0 };
            TexasTable table = _lobby.GetTableByRoomIDandTableID(_data.levelid, _data.tableid);
            int reslut = 0;
            if (table != null)
            {
                //if (table._ownerid == 1008)
                //{
                    if (table._tablestatus == TableStatusEnum.Playing)
                    {
                        table._judge._endtime = DateTime.Now; 
                    }
                    else
                    {
                        table.DismissTableTime();
                        _lobby.DealDateOver(table._tableid);
                    }
                    reslut = 1;
                //}
                //else reslut = -2;
            }
            else reslut = -1;
            _senddata.result = reslut;
            return JsonUtils.Serialize(_senddata);
        }
        /// <summary>
        /// 查看公牌余牌
        /// </summary>
        /// <param name="_user"></param>
        /// <param name="_data"></param>
        /// <returns></returns>
        public string SeeRestcard(tUser _user, cs_seerestcard_tex _data)
        {
            sc_seerestcard_tex _senddata = new sc_seerestcard_tex() { result = 0, cc = 0 };
            TexasTable table = _lobby.GetTableByRoomIDandTableID(_data.levelid, _data.tableid);
            if (table != null)
            {
                var user = table.GetUserByID(_user.UserID);
                if(user!=null)
                {
                    int cc = user.clicknum +1;
                    if (user.clicknum > 3) cc = 3;
                    if (user.clicknum == 0) cc = 1;
                    var needa = table._judge._baseGamle / 10;
                    //if (table._tablestatus == TableStatusEnum.End)
                    //{
                    if (_user.GetGoldAndWinGold >= needa)
                    {
                        var cardlist = table._judge._fiveCommonCard;
                        if (cardlist != null && user != null)
                        {
                            var cards = table._judge.GetEndCommonCard(table._judge._lastover);
                            if (cards.Count <= 0) cardlist = cardlist.Take(3 + user.clicknum).ToList();
                            else if (cards.Count == 3) cardlist = cardlist.Take(4 + user.clicknum).ToList();
                            else if (cards.Count == 4) cardlist = cardlist.Take(5 + user.clicknum).ToList();
                            user.clicknum += 1;

                            //if (table._judge.clicknum < user.clicknum)
                            //{
                            //    table.AddTimeOutAction(process_tex.sc_end_tex_n, 0.7);
                            //    table._judge.clicknum = user.clicknum;
                            //}
                            _senddata.card = cardlist;
                            _user.GoldReduce(needa);
                            CommonLogic.updategold(_user, 1);
                            BaseHelper.AddOrUpdateBase(_user);

                            var onegame = table.tableloglist.Find(t => t.infoId == table._judge.OneId);
                            if (onegame != null)
                            {
                                var action = onegame.tInfo.Where(t => t.id == _user.UserID).FirstOrDefault();
                                if (action != null) action.ownc = cardlist;
                            }
                            user.WriteGoldChangeLog(needa, 20, "");

                            _senddata.result = 1;
                        }

                    }
                    else _senddata.result = -5;
                    //}
                    //else _senddata.result = -2;
                }
            }
            return JsonUtils.Serialize(_senddata);
        }
        /// <summary>
        /// 强制秀牌
        /// </summary>
        /// <param name="_user"></param>
        /// <param name="_data"></param>
        /// <returns></returns>
        public string ForceshowCard(tUser _user, cs_forceshowcard_tex _data)
        {
            sc_forceshowcard_tex _senddata = new sc_forceshowcard_tex() { result = 0, cc = 0 };
            TexasTable table = _lobby.GetTableByRoomIDandTableID(_data.levelid, _data.tableid);
            if (table != null)
            {
                var teaxuser = table.GetUserByID(_user.UserID);
                var c = teaxuser.fshownum + 1;

                var needd = Math.Pow(2, c) * table._judge._baseGamle;
                var ascard = table.allshoucard;
                if (ascard != null && _user.GetGoldAndWinGold >= needd)
                {
                    _senddata.othercard = ascard.ToList();
                    _user.GoldReduce(needd.ToInt64());
                    BaseHelper.AddOrUpdateBase(_user);

                    teaxuser.fshownum += 1;
                    var onegame = table.tableloglist.Find(t => t.infoId == table._judge.OneId);
                    if (onegame != null)
                    {
                        var action = onegame.tInfo.Where(t => t.id == _user.UserID).FirstOrDefault();
                        if (action != null) action.fshow = true;
                    }
                    CommonLogic.updategold(_user, 2);
                    teaxuser.WriteGoldChangeLog(needd, 21, "");
                    _senddata.result = 1;
                    _senddata.fshownum = teaxuser.fshownum;
                }
                else
                {
                    _senddata.result = -5;
                }

            }
            return JsonUtils.Serialize(_senddata);
        }

        public string ShowmyCard(tUser _user, cs_showmycard_tex _data)
        {
            sc_showmycard_tex _senddata = new sc_showmycard_tex() { result = 0, cc = 0 };
            TexasTable table = _lobby.GetTableByRoomIDandTableID(_data.levelid, _data.tableid);
            if (table != null && table._tablestatus != TableStatusEnum.Initi)
            {
                int index = -1;

                var reslut = table.ShowMyCard(_user.UserID, _data.card, _data.type, out index);
                _senddata.result = reslut;
                _senddata.cpos = index;
            }
            _senddata.type = _data.type;
            return JsonUtils.Serialize(_senddata);
        }

        /// <summary>
        /// 结算
        /// </summary>
        /// <param name="_user"></param>
        /// <param name="_data"></param>
        /// <returns></returns>
        public async ETTask<string> AdvanceSettle(tUser _user, cs_advancesettle_tex _data)
        {
            sc_advancesettle_tex _senddata = new sc_advancesettle_tex() { result = 0, cc = 0 };
            TexasTable table = _lobby.GetTableByRoomIDandTableID(_data.levelid, _data.tableid);
            int result = 0;
            if (table != null)
            {
                var myu = table.GetUserByIDTry(_user.UserID);
                if (myu != null)
                {
                    if (myu._palyedgame)
                    {   //必须是参与过游戏得
                        if (myu._allIn) result = -2;
                        else if (myu.inins) result = -3;//购买保险状态 不允许结算
                        else if (myu.IsSettle) result = -4;
                        else
                        {
                            if (myu._isPlaying) table.GiveUp(myu._userid, false);
                            table.PushSitupKeep(myu, true, true);
                            if (table._WaitSitdownUser != null) table._WaitSitdownUser.RemoveByID(myu._userid);
                            if (table._tablestatus != TableStatusEnum.Playing)
                            {
                                table.BaseUserMove2Watch(myu);
                            }

                            //结算退钱
                            if (table.IsSupper && table._judge.clubidx > 0)
                            {
                                var tax = myu.DealTax(table._tableid + "", table._judge.alliId, table._judge.IsAverage, table._judge.GetThisGametax(table.GetPlayerCount()));
                                if (tax > 0) await myu.AddCommission2Agent(table._tableid, table._gameid, tax, 0);
                                long agold = await myu.GetClubGold(myu.clubidx, myu._userid, myu._CurrentGold, true);
                                await ClubHelper.UpdateClubGold(myu.clubidx, myu._userid, myu._CurrentGold, true);
                                myu.WriteUserClubgoldLog(agold + myu._CurrentGold, 6, _lobby._gameid, "", -myu._CurrentGold, myu.clubidx);
                            }
                            else
                            {
                                myu._tbUser.Gold += myu._CurrentGold;
                                if (myu._CurrentGold > 0)
                                    myu.WriteGoldChangeLog(myu._CurrentGold, 34, table._tableid.ToString(), true);//记录日志33:房间带入;34:带入返还 
                            }
                            myu._CurrentGold = 0;
                            table.Gold2RedisUser(myu);
                            myu.IsSettle = true;
                            _senddata.IsSettle = myu.IsSettle;
                            result = 1;
                        }
                    }
                    else result = -1;
                }
            }
            _senddata.result = result;
            return JsonUtils.Serialize(_senddata);
        }

        /// <summary>
        /// AOF金币回撤
        /// </summary>
        /// <param name="_user"></param>
        /// <param name="_data"></param>
        /// <returns></returns>
        public async ETTask<string> AOF_GoldBack(tUser _user, cs_goldback_tex _data)
        {
            sc_goldback_tex _senddata = new sc_goldback_tex() { result = 0, cc = 0 };
            TexasTable table = _lobby.GetTableByRoomIDandTableID(_data.levelid, _data.tableid);
            int result = 0;
            if (table != null)
            {
                if (table._gametype.Equals(20))
                {
                    var myu = table.GetUserByIDTry(_user.UserID);
                    if (myu != null)
                    {

                        if (myu._CurrentGold - _data.gold >= table._judge.intorate_min * 100 * table._judge.AOF_Times)
                        {
                            if (table.applytogold.ContainsKey(_user.UserID))
                            {
                                result = -5;
                            }
                            else
                            {
                                table.applytogold.TryAdd(_user.UserID, _data.gold);
                                result = 1;
                            }
                        }
                        else result = -2;
                    }
                    else result = -4;
                }
                else result = -3;
            }
            else result = -1;
            _senddata.result = result;
            return JsonUtils.Serialize(_senddata);
        }



        #region  非游戏流程功能
        public async ETTask<string> AddGoldInGame(tUser _user, cs_addgoldingame_tex data)
        {
            sc_addgoldingame_tex _senddata = new sc_addgoldingame_tex() { result = 0, cc = 0 };

            var _bftable = _lobby.GetTableByRoomIDandTableID(data.levelid, data.tableid);
            if (_bftable != null)
            {
                _senddata.result = await _bftable.AddGoldInGame(_user.UserID, data.gold, data.clubidx, _bftable.IsSupper);
                _senddata.gold = (int)await _bftable.GetUserBalance(_user.UserID, _bftable.IsSupper);
            }
            return JsonUtils.Serialize(_senddata);
        }

        public string GetRoomHistory(tUser _user, cs_roomhistory_tex data)
        {
            sc_roomhistory_tex _senddata = new sc_roomhistory_tex() { result = 0, cc = 0 };
            _senddata.ulist = new List<PInfoSD>();
            _senddata.tulist = new List<TexTInfoSD>();
            TexTInfoSD thdata = new TexTInfoSD();

            ttablehistoryLog _tableLog = ttableHistoryLogEx.GetTableLogByKey(data.tableid.ToString(), _lobby._gameid);
            if (_tableLog != null)
            {
                foreach (Model.PInfoSD dr in _tableLog.plist)
                {
                    PInfoSD newRow = new PInfoSD();
                    newRow.uid = dr.uid;
                    newRow.wicon = dr.wicon;
                    newRow.wName = dr.wName;
                    _senddata.ulist.Add(newRow);
                }
                var textlist = JsonUtils.Deserialize<List<Model.TexTInfoSD>>(_tableLog.GameDetails);
                foreach (Model.TexTInfoSD dr in textlist)
                {
                    TexTInfoSD newRow = new TexTInfoSD();
                    newRow.j = dr.j;
                    newRow.c = dr.c;
                    newRow.ipool = dr.ipool;
                    newRow.ng = dr.ng;

                    newRow.tInfo = new List<TexUserInfoSD>();
                    newRow.tlist = new List<TexActionSD>();
                    newRow.bankerpos = dr.bankerpos;

                    foreach (Model.TexUserInfoSD info in dr.tInfo)
                    {
                        TexUserInfoSD newU = new TexUserInfoSD();
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
                        _senddata.showCard = info.st;
                        newRow.tInfo.Add(newU);
                    }
                    _senddata.tulist.Add(newRow);
                    foreach (Model.TexActionSD info in dr.tlist)
                    {
                        TexActionSD act = new TexActionSD();
                        act.i = info.i;
                        act.id = info.id;
                        act.pos = info.pos;
                        act.g = info.g;
                        act.turn = info.turn;
                        act.at = info.at;
                        act.jg = info.jg;
                        newRow.tlist.Add(act);
                    }
                }
                _senddata.bg = _tableLog.bg;
                _senddata.BigEndInfo = JsonUtils.Deserialize<BigEndInfoSD_tex>(_tableLog.BigEndList);
            }
            _senddata.result = 1;
            return JsonUtils.Serialize(_senddata);
        }

        public async ETTask<string> GetBigEndHistory(tUser _user, cs_bigend_tex data)
        {
            sc_bigend_tex _senddata = new sc_bigend_tex() { result = 0, cc = 0 };

            TexTInfoSD thdata = new TexTInfoSD();

            ttablehistoryLog _tableLog = ttableHistoryLogEx.GetTableLogByKey(data.tableid.ToString(), _lobby._gameid);
            if (_tableLog != null)
            {
                _senddata.bigend = JsonUtils.Deserialize<BigEndInfoSD_tex>(_tableLog.BigEndList);
                _senddata.isnamger = await ClubHelper.GetUserIsallianceManger(_user.UserID, _tableLog.allid);
            }
            _senddata.result = 1;
            return JsonUtils.Serialize(_senddata);
        }


        public string GetGain(tUser _user, cs_getgain_tex data)
        {
            sc_getgain_tex _senddata = new sc_getgain_tex() { result = 0, cc = 0 };

            var _bftable = _lobby.GetTableByRoomIDandTableID(data.levelid, data.tableid);
            if (_bftable != null)
            {
                return _bftable.GetGain(_user.UserID);
            }
            return JsonUtils.Serialize(_senddata);
        }

        public async ETTask<string> Getthistory(tUser _user, cs_thistory_tex data)
        {
            sc_thistory_tex _senddata = new sc_thistory_tex() { result = 0, tableId = data.tableid, cc = 0 };

            var _bftable = _lobby.GetTableByRoomIDandTableID(data.levelid, data.tableid);
            if (_bftable != null)
            {
                _senddata.bg = _bftable._judge._baseGamle;
                _senddata.showCard = _bftable._judge.showCard;
                return await _bftable.GetTHistory(_user);
            }
            return JsonUtils.Serialize(_senddata);
        }


        /// <summary>
        ///  获取所有奖池 包括记录
        /// </summary>
        /// <param name="_user"></param>
        /// <param name="data"></param>
        /// <returns></returns>
        public async ETTask<string> GetAllJackpot(tUser _user, cs_getalljackpot_tex data)
        {
            sc_getalljackpot_tex _senddata = new sc_getalljackpot_tex() { result = 0, cc = 0 };

            List<CommonPosValSD> _sixj = new List<CommonPosValSD>();
            var jlist = await tjackpotEx.GetJackpotList(_lobby._gameid, _lobby.GetRoomIDList());
            for (var i = 0; i < jlist.Count; i++)
            {
                var room = _lobby.GetRoomByRoomID(jlist[i].levelid);
                if (room == null) continue;
                _sixj.Add(new CommonPosValSD() { pos = room.BaseRate, val = (int)jlist[i].jackpot });
            }
            _senddata._base2pot = _sixj;
            _senddata.result = 1;
            return JsonUtils.Serialize(_senddata);
        }

        public override async ETTask<string> EnterRobot(int _user, int levelid, int tableid)
        {
            sc_enterrobot_tex _senddata = new sc_enterrobot_tex() { result = 0, cc = 0 };

            var Level = _lobby.GetRoomByRoomID(levelid); 
            if (Level != null && TexasLobby.instance._openRobot)
            {
                var _bftable = _lobby.GetTableByRoomIDandTableID(levelid, tableid);
                if (_bftable != null && Level != null)
                { 
                    tUser tbRobotuser = await BaseHelper.GetARobot(_lobby._gameid); 
                    if (tbRobotuser != null)
                    {
                        int _intogold = Convert.ToInt32(_bftable._judge._baseGamle * 2 * 100 * ToolsEx.GetRandomSys(1, 10));    //金币带入规则
                        if (tbRobotuser.isRobot == 1)
                        {
                            tb_UserEx.SetRobotGold(tbRobotuser, _intogold, _intogold*2);
                        }
                        await Level.EnterRoomBase(tbRobotuser.UserID);

                        var _myuser = _bftable.GetUserByIDTry(tbRobotuser.UserID);
                        if (_myuser == null) await _bftable.EnterTableWatch(tbRobotuser);
                        else
                        {
                          await  _bftable.EnterTableWatchRe(_myuser, tbRobotuser);
                        } 

                        //int _minPlayer = _bftable._judge._baseGamle * 200 * ToolsEx.GetRandomSys(1, 5);    //金币带入规则
                        var _res = await _bftable.SitDown(tbRobotuser.UserID, _intogold, 0, _bftable._judge.password);
                        _senddata.result = _res;
                        if (_res == 1) BaseHelper.RobotExistNumAddOne();
                    }
                }
            }
            return JsonUtils.Serialize(_senddata);
        }
        public override async ETTask<string> AddWatchRobot(string _data)
        {
            cs_addwatchrobot_tex data = JsonUtils.Deserialize<cs_addwatchrobot_tex>(_data);
            sc_addwatchrobot_tex _senddata = new sc_addwatchrobot_tex() { _info = "", _ret = 0 };

            var Level = _lobby.GetRoomByRoomID(data.levelid);
            //判断是否开机器人
            if (_lobby._openRobot)
            {
                var _bftable = _lobby.GetTableByTableNum(data.tablenum);
                if (_bftable != null && Level != null)
                {   //一次性分配足额机器人 

                    tUser tbRobotuser = await BaseHelper.GetARobot(_lobby._gameid);
                    if (tbRobotuser != null)
                    {
                        if (tbRobotuser.isRobot == 1)
                        {
                            ////tb_UserEx.SetUserGold(tbRobotuser, Level._min * 2, Level._max * 2);
                        }

                        await _bftable._room.EnterRoomBase(tbRobotuser.UserID);
                        var _myuser = _bftable.GetUserByIDTry(tbRobotuser.UserID);
                        if (_myuser == null) await _bftable.EnterTableWatch(tbRobotuser);
                        else
                        {
                         await   _bftable.EnterTableWatchRe(_myuser, tbRobotuser);
                        }
                    }
                    else
                    {
                        _senddata._ret = 1;
                        _senddata._info = "无可用机器人";
                    }
                }
                else
                {
                    _senddata._ret = 1;
                    _senddata._info = "桌子不存在";
                }
            }
            return JsonUtils.Serialize(_senddata);
        }



        /// <summary>
        /// 获取玩家同超联盟 的club
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="allid"></param>
        /// <returns></returns>
        public async ETTask<List<SuperClub>> GetUserClubList(int userid, int allid)
        {
            List<SuperClub> clist = new List<SuperClub>();
            tUser user = await tb_UserEx.GetFromCachebyUserID(userid);
            if (user != null && user.clublist != null)
            {
                foreach (var cid in user.clublist)
                {
                    if (cid != 0)
                    {
                        tclub club = await BaseHelper.GetShare<tclub>(cid);
                        if (club != null && club.alliancid == allid)
                        {
                            var child = club.childs.Find(t => t.userid == userid);
                            clist.Add(new SuperClub()
                            {
                                cid = club.idx,
                                cname = club.Title,
                                clubgold = child == null ? 0 : child.cgold,
                                url = club.clubIcon
                            });
                        }
                    }
                }
            }
            return clist;
        }

        public async ETTask<List<cinfo>> GetAllClubName(int userid, int allid)
        {
            List<cinfo> data = new List<cinfo>();
            if (allid == 0) return null;
            var allclub = await GetUserClubList(userid, allid);
            if (allclub.Count > 0)
            {
                return allclub.Select(t => new cinfo()
                {
                    cn = t.cname,
                    url = string.IsNullOrEmpty(t.url) ? "" : ToolsEx.IsHandlePhoto(0, t.url).Trim()
                }).ToList();
            }
            return null;
        }


        #endregion
    }
}
