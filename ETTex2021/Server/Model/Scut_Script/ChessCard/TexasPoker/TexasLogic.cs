using ETModel.Framework.Common.Serialization;
using ETModel.Framework.Game.Contract.Action;
using ETModel.Script.Model;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ETModel.Script.CsScript.Action
{
    /// <summary>
    /// 逻辑消息进来 的接口处理
    /// </summary>
    public partial class TexasLogic : BaseLogic
    {
        public TexasLogic(BaseLobby lobby) : base(lobby)
        {
            _lobby = TexasLobby.instance;
        }
        private TexasLobby _lobby;
        /// <summary>
        /// 处理消息
        /// </summary>
        /// <param name="clientcommand"></param>
        /// <returns></returns>
        public override async ETTask<string> DealDataEx(int UserID, string _data)
        {
            string senddata = await base.DealDataEx(UserID, _data);
            if (senddata != "")
            {
                return senddata;
            }
            try
            {
                cs_base _basedata = JsonUtils.Deserialize<cs_base>(_data);
                switch (_basedata.fn)
                {
                    case "cs_compete_table_create":
                        return await CreateCompeteTable(JsonUtils.Deserialize<cs_compete_table_create>(_data));
                    case "cs_compete_table_close":
                        return await CompeteCloseTable(JsonUtils.Deserialize<cs_compete_table_close>(_data));
                    case "cs_compete_texas_ready":
                        return await CompeteChangeTableParam(JsonUtils.Deserialize<cs_compete_texas_ready>(_data));
                    case "cs_compete_table_join":
                        return await CompeteJoinTable(JsonUtils.Deserialize<cs_compete_table_join>(_data));
                    case "sc_compete_table_info":
                        return await SendCompeteTableInfo(JsonUtils.Deserialize<sc_compete_table_info>(_data));
                    case "cs_watch":
                        return await CompeteWatchTable(JsonUtils.Deserialize<cs_watch>(_data));
                    case "cs_send_table_user":
                        return await SendToTableUser(JsonUtils.Deserialize<cs_send_table_user>(_data));
                }
                tUser _user = await BaseHelper.GetBase<tUser>(UserID);
                Language.SetLang(_basedata.cc);
                switch (_basedata.fn)
                {
                    #region 非游戏流程功能
                    case "cs_chat":// 发送聊天信息
                        cs_chat _chat = JsonUtils.Deserialize<cs_chat>(_data);
                        senddata = SendChat(_user, _chat);
                        break;
                    case "cs_getgain_tex":
                        cs_getgain_tex _getgain = JsonUtils.Deserialize<cs_getgain_tex>(_data);
                        senddata = GetGain(_user, _getgain);
                        break;
                    case "cs_thistory_tex":
                        cs_thistory_tex _getthistory = JsonUtils.Deserialize<cs_thistory_tex>(_data);
                        senddata = await Getthistory(_user, _getthistory);
                        break;
                    case "cs_enterrobot_tex":
                        cs_enterrobot_tex _enterrobot = JsonUtils.Deserialize<cs_enterrobot_tex>(_data);
                        senddata = await EnterRobot(UserID, _enterrobot.levelid, _enterrobot.tableid);
                        break;

                    case "cs_getalljackpot_tex":
                        cs_getalljackpot_tex _getalljackpot = JsonUtils.Deserialize<cs_getalljackpot_tex>(_data);
                        senddata = await GetAllJackpot(_user, _getalljackpot);
                        break;
                    case "cs_roomhistory_tex":
                        cs_roomhistory_tex _getroomhistory = JsonUtils.Deserialize<cs_roomhistory_tex>(_data);
                        senddata = GetRoomHistory(_user, _getroomhistory);
                        break;
                    case "cs_addgoldingame_tex":
                        cs_addgoldingame_tex _addgoldingame = JsonUtils.Deserialize<cs_addgoldingame_tex>(_data);
                        senddata = await AddGoldInGame(_user, _addgoldingame);
                        break;
                    case "cs_bigend_tex":
                        cs_bigend_tex bigend = JsonUtils.Deserialize<cs_bigend_tex>(_data);
                        senddata = await GetBigEndHistory(_user, bigend);
                        break;
                    #endregion 
                    case "cs_entertablenum_tex":
                        cs_entertablenum_tex _enter = JsonUtils.Deserialize<cs_entertablenum_tex>(_data);
                        return await EnterRoomTableByNum(_user, _enter);
                    case "cs_gettablelist_tex":
                        cs_gettablelist_tex _gettablist = JsonUtils.Deserialize<cs_gettablelist_tex>(_data);
                        return await GetTableList(_user, _gettablist);
                    case "cs_dismisstable":
                        cs_dismisstable _dismisstab = JsonUtils.Deserialize<cs_dismisstable>(_data);
                        return DisMissTable(_user, _dismisstab);
                    case "cs_createtable_tex":
                        cs_createtable_tex _cratetable = JsonUtils.Deserialize<cs_createtable_tex>(_data);
                        senddata = await CreateTable(_user, _cratetable);
                        break;
                    case "cs_entertable_tex":
                        ////cs_entertable_whi _entertable = JsonUtils.Deserialize<cs_entertable_whi>(_data);
                        ////senddata = EnterTableAdd(_user, _entertable);
                        break;
                    case "cs_entertbalewatch_tex":
                        ////cs_entertbalewatch_whi _enterwatch = JsonUtils.Deserialize<cs_entertbalewatch_whi>(_data);
                        ////senddata = EnterTableWatch(_user, _enterwatch);
                        break;
                    case "cs_sitdown_tex":
                        cs_sitdown_tex sitdown = JsonUtils.Deserialize<cs_sitdown_tex>(_data);
                        senddata = await SitDown(_user, sitdown);
                        break;
                    case "cs_sitdownwait_tex":
                        cs_sitdownwait_tex sitdownwait = JsonUtils.Deserialize<cs_sitdownwait_tex>(_data);
                        senddata = await SitDownWait(_user, sitdownwait);
                        break;
                    case "cs_sitdownwaitup_tex":
                        cs_sitdownwaitup_tex sitdownwaitup = JsonUtils.Deserialize<cs_sitdownwaitup_tex>(_data);
                        senddata = await SitDownWaitUp(_user, sitdownwaitup);
                        break;


                    case "cs_situpkeep_tex":
                        cs_situpkeep_tex situpkeep = JsonUtils.Deserialize<cs_situpkeep_tex>(_data);
                        senddata = SitUpKeep(_user, situpkeep);
                        break;

                    case "cs_ready_tex":
                        cs_ready_tex _ready = JsonUtils.Deserialize<cs_ready_tex>(_data);
                        senddata = TableReady(_user, _ready);
                        break;
                    case "cs_gamble_tex":
                        cs_gamble_tex _gamble = JsonUtils.Deserialize<cs_gamble_tex>(_data);
                        senddata = Gamble(_user, _gamble);
                        break;
                    case "cs_giveup_tex":// 
                        cs_giveup_tex _giveupobj = JsonUtils.Deserialize<cs_giveup_tex>(_data);
                        senddata = GiveUp(_user, _giveupobj);
                        break;
                    case "cs_insurance_tex":
                        cs_insurance_tex _insuranceobj = JsonUtils.Deserialize<cs_insurance_tex>(_data);
                        senddata = Insurance(_user, _insuranceobj);
                        break;
                    case "cs_delay_tex":
                        cs_delay_tex _delay = JsonUtils.Deserialize<cs_delay_tex>(_data);
                        senddata = ApplyDelay(_user, _delay);
                        break;
                    case "cs_applyexittable_tex":
                        cs_applyexittable_tex _reapply = JsonUtils.Deserialize<cs_applyexittable_tex>(_data);
                        senddata = await ReAppleExite(_user, _reapply);
                        break;
                    case "cs_chatlog":
                        cs_chatlog ctb = JsonUtils.Deserialize<cs_chatlog>(_data);
                        senddata = await GetBarragelog(ctb);
                        break;
                    case "cs_tokenvmaster_tex":
                        cs_tokenvmaster_tex _vmasterobj = JsonUtils.Deserialize<cs_tokenvmaster_tex>(_data);
                        senddata = VMasterCommonCard(_user, _vmasterobj);
                        break;
                    case "cs_userremark_tex":
                        cs_userremark_tex remarkdata = JsonUtils.Deserialize<cs_userremark_tex>(_data);
                        senddata = await UserSetRemark(_user, remarkdata);
                        break;
                    case "cs_tickuser_tex":
                        cs_tickuser_tex tickuser = JsonUtils.Deserialize<cs_tickuser_tex>(_data);
                        senddata = await TickUser(_user, tickuser);
                        break;
                    case "cs_texascollect_tex":
                        cs_texascollect_tex texascollect = JsonUtils.Deserialize<cs_texascollect_tex>(_data);
                        senddata = await TexasCollectPoker(_user, texascollect);
                        break;
                    case "cs_geymytexascollect_tex":
                        cs_geymytexascollect_tex mytexascollect = JsonUtils.Deserialize<cs_geymytexascollect_tex>(_data);
                        senddata = await GetMyCollectPoker(_user, mytexascollect);
                        break;
                    case "cs_getscollectbyid_tex":
                        cs_getscollectbyid_tex getscollect = JsonUtils.Deserialize<cs_getscollectbyid_tex>(_data);
                        senddata = await GetCollectDetailsbyid(_user, getscollect);
                        break;
                    case "cs_dismisstable_tex":
                        cs_dismisstable_tex dismisstable = JsonUtils.Deserialize<cs_dismisstable_tex>(_data);
                        senddata = DismisstTextable(_user, dismisstable);
                        break;
                    case "cs_seerestcard_tex":
                        cs_seerestcard_tex seerestcard = JsonUtils.Deserialize<cs_seerestcard_tex>(_data);
                        senddata = SeeRestcard(_user, seerestcard);
                        break;
                    case "cs_forceshowcard_tex":
                        cs_forceshowcard_tex forceshowcard = JsonUtils.Deserialize<cs_forceshowcard_tex>(_data);
                        senddata = ForceshowCard(_user, forceshowcard);
                        break;
                    case "cs_showmycard_tex":
                        cs_showmycard_tex showmycard = JsonUtils.Deserialize<cs_showmycard_tex>(_data);
                        senddata = ShowmyCard(_user, showmycard);
                        break;
                    case "cs_advancesettle_tex":
                        cs_advancesettle_tex advancesettle = JsonUtils.Deserialize<cs_advancesettle_tex>(_data);
                        senddata = await AdvanceSettle(_user, advancesettle);
                        break;
                    case "cs_goldback_tex":
                        cs_goldback_tex goldback = JsonUtils.Deserialize<cs_goldback_tex>(_data);
                        senddata = await AOF_GoldBack(_user, goldback);
                        break;
                    case "cs_compete_table_close":
                        cs_compete_table_close closeparam = JsonUtils.Deserialize<cs_compete_table_close>(_data);

                        break;

                    #region GM操作
                    case "cs_setcard_gm":
                        cs_currentitydto_gm<cs_setcard_gm> _setcard = JsonUtils.Deserialize<cs_currentitydto_gm<cs_setcard_gm>>(_data);
                        sc_base_gm _scSetcard = new sc_base_gm() { _info = "", _ret = 1 };
                        var _bftable = _lobby.GetTableByTableNum(_setcard.entity.tablenum);
                        if (_bftable != null)
                        {
                            _bftable._judge._fiveCommonCard = _setcard.entity.pubcard;
                            _bftable.CardListfromGM = _setcard.entity._cards;
                            if (_setcard.entity.texvctrl) _bftable.WaittoStart(true);
                            _scSetcard._ret = 0;
                        }
                        senddata = JsonUtils.Serialize(_scSetcard);
                        break;
                    case "cs_seehandcard":
                        sc_seehandcard resjson = new sc_seehandcard() { _ret = 0, _info = "获取成功", fn = "cs_seehandcard" };
                        cs_seehandcard msg = JsonUtils.Deserialize<cs_seehandcard>(_data);
                        if (msg.tableId != 0)
                        {
                            List<UserPokerList> userdata = new List<UserPokerList>();
                            TexasTable _btable = _lobby.GetTableByTableNum(msg.tableId);
                            if (_btable != null && _btable._tablestatus == TableStatusEnum.Playing)
                            {
                                _btable.ForeachAllDo((i) =>
                                {
                                    TexasUser tempUser = _btable.GetUserByPosMust(i);
                                    if (tempUser == null) return;
                                    userdata.Add(new UserPokerList()
                                    {
                                        UserId = tempUser._tbUser.UserID,
                                        UserName = tempUser._tbUser.wechatName,
                                        ListCard = tempUser._shouPaiArr,
                                    });
                                });
                                resjson.pokerlist = userdata;
                            }
                        }
                        senddata = JsonUtils.Serialize(resjson);
                        break;
                    case "cs_OnekeyAddRobot_gm": 
                            cs_OnekeyAddRobot_gm addrobogm = JsonUtils.Deserialize<cs_OnekeyAddRobot_gm>(_data);
                            sc_OnekeyAddRobot_gm _senddataone = new sc_OnekeyAddRobot_gm() { _ret = 1, _info = "操作失败", };
                            var _ftable = _lobby.GetTableByTableNum(addrobogm.tnum);
                            if (_ftable != null)
                            {
                                var addcount = _ftable._judge.manNum - _ftable._DicPos2User.Count;
                                int count = 0;
                                for (int i = 0; i < 1000; i++)
                                {
                                    if (count >= addcount || count >= 10) break;
                                    tUser tbRobotuser = await BaseHelper.GetARobot(_lobby._gameid);
                                    if (tbRobotuser != null)
                                    {
                                        TexasRoom _levelinfo = _lobby.GetRoomByRoomID(_ftable._levelid);
                                        if (_levelinfo != null) await _levelinfo.EnterRoomBase(tbRobotuser.UserID); 

                                        var _myuser = _ftable.GetUserByIDTry(tbRobotuser.UserID);
                                        if (_myuser == null) await _ftable.EnterTableWatch(tbRobotuser);
                                        else
                                        {
                                          await  _ftable.EnterTableWatchRe(_myuser, tbRobotuser);
                                        }

                                        int _minPlayer = ToolsEx.GetRandomSys(_ftable._judge.intorate_min.ToInt32(), _ftable._judge.intorate_max.ToInt32()) * 100;
                                        var _res = await _ftable.SitDown(tbRobotuser.UserID, _minPlayer, 0, _ftable._judge.password);
                                        if (_res == 1)
                                        {
                                            BaseHelper.RobotExistNumAddOne();
                                            count++;
                                        }
                                    }
                                }
                                _senddataone._ret = 0;
                                _senddataone._info = "添加完毕！添加数量" + count;
                            }
                            senddata = JsonUtils.Serialize(_senddataone);
                            break; 
                    case "cs_getgameroom_gm":
                        {
                            sc_gameroom_gm roomdata = new sc_gameroom_gm { _ret = 0, _info = "获取成功" };
                            roomdata.gameid = _lobby._gameid;
                            try
                            {
                                var texalist = _lobby.roomCache;
                                List<RoomInfo> rlist = new List<RoomInfo>();
                                foreach (var br in texalist)
                                {
                                    TexasRoom _tr = br as TexasRoom;
                                    RoomInfo _r = new RoomInfo()
                                    {
                                        pi = _tr.BaseRate,
                                        ////tnum =  _tr.DicTable.Count,
                                        ////playNum = _tr.DicTable.Values.Sum(p => p._DicPos2User.Count),
                                        ////watchNum = _tr.DicTable.Values.Sum(p => p._DicPos2UserWatch.Count),
                                    };
                                    rlist.Add(_r);
                                }
                                roomdata.tablelist = rlist;
                            }
                            catch (Exception ex)
                            {
                                TraceLogEx.Error(ex, "21020726151103tex RoomID:" + _data);
                            }
                            senddata = JsonUtils.Serialize(roomdata);
                            break;
                        }
                    case "cs_getvideosroom_gm": 
                            sc_getvideosroom_gm resultmange = new sc_getvideosroom_gm { _ret = 0, _info = "操作成功" };
                            List<TableRoomInfoTex> tinfo = new List<TableRoomInfoTex>();
                            foreach (var _room in _lobby.roomCache)
                            {
                                if (_room == null)
                                {
                                    TraceLogEx.Error("_lobby.roomCache is null " + _lobby.roomCache.Count);
                                    continue;
                                }
                                int levelid = _room._levelid;

                                var _bfrcroom = _lobby.GetRoomByRoomID(levelid);
                                if (_bfrcroom == null) continue;
                                List<ttablelist> myTables = await ttablelistEx.GetAllByGameidandLevelid(_lobby._gameid, levelid);
                                if (myTables != null && myTables.Count > 0)
                                {
                                    myTables = myTables.OrderBy(i => i.tableStatus).ThenByDescending(i => i.createTime).ToList();
                                    foreach (var item in myTables)
                                    {
                                        var _tab = _lobby.GetTableByTableNum(item.tableid);

                                        if (_tab == null || _tab._judge == null || _tab._DicPos2User == null)
                                        {
                                            TraceLogEx.Error("can not find the tablenum:" + item.tableid);
                                            continue;
                                        }

                                    }
                                }
                            }
                            resultmange.tinfo = tinfo;
                            senddata = JsonUtils.Serialize(resultmange);
                            break; 
                    case "cs_anchorjoinroom_gm": 
                            cs_anchorjoinroom_gm _senddata = JsonUtils.Deserialize<cs_anchorjoinroom_gm>(_data);
                            sc_anchorjoinroom_gm resdata = new sc_anchorjoinroom_gm { _ret = 0, _info = "操作成功" };

                            var _table = _lobby.GetTableByRoomIDandTableID(_senddata.roomid, _senddata.tableid);
                            if (_table == null)
                            {
                                resdata._ret = -2;
                                resdata._info = "桌子找不到 tableid错误";
                                return JsonUtils.Serialize(resdata);
                            }
                            try
                            {
                                var tbRobotuser = await BaseHelper.GetBase<tUser>(_senddata.uid);
                                if (tbRobotuser == null || tbRobotuser.vlevel != 18)
                                {
                                    resdata._ret = -3;
                                    resdata._info = "用户没有主播权限";
                                    return JsonUtils.Serialize(resdata);
                                }
                                TexasRoom _levelinfo = _lobby.GetRoomByRoomID(_table._levelid);
                                if (_levelinfo != null) await _levelinfo.EnterRoomBase(tbRobotuser.UserID);
                                 
                                var _myuser = _table.GetUserByIDTry(tbRobotuser.UserID);
                                if (_myuser == null) await _table.EnterTableWatch(tbRobotuser);
                                else
                                {
                                   await _table.EnterTableWatchRe(_myuser, tbRobotuser);
                                }
                                resdata.playercount = _table._DicPos2User.Count + _table._DicPos2UserWatch.Count;
                                if (_table._judge._fiveCommonCard != null) resdata.commoncards = new List<int>(_table._judge._fiveCommonCard);
                                if (_table.CardListfromGM != null)
                                {
                                    resdata.cards = new List<KeyValuePair<int, List<int>>>(_table.CardListfromGM.ToList());
                                }
                                if (_table._tablestatus != TableStatusEnum.Playing) resdata.isplaying = 0;
                                else resdata.isplaying = 1;
                                resdata.waitopen = _table._judge.vuserid;
                                resdata._ret = 0;
                            }
                            catch (Exception ex)
                            {
                                resdata._ret = 1;
                                resdata._info = "error";
                                TraceLogEx.Error(ex, "202006301106 1texas");
                            }

                            senddata = JsonUtils.Serialize(resdata);
                            break; 
                    case "cs_onlineuser_gm":
                        {
                            UserStatus _curStatus = await BaseHelper.TryGetUserStatus(UserID);
                            TexasTable table = _lobby.GetTableByRoomIDandTableID(_curStatus.Levelid, _curStatus.TableID);
                            if (table != null)
                            {
                                var texauser = table.GetUserByID(UserID);
                                if (texauser != null)
                                {
                                    onlineuser ouser = new onlineuser();
                                    ouser.brogold = texauser._CurrentGold;
                                    ouser.tabnum = table._tableid;
                                    ouser.pos = texauser.pos;
                                    senddata = JsonUtils.Serialize(ouser);
                                }
                                else
                                {
                                    senddata = "";
                                }
                            }

                            break;
                        }
                    case "cs_tableinfo_gm":
                        {
                            cs_tableinfo_gm _addclubchlid = JsonUtils.Deserialize<cs_tableinfo_gm>(_data);
                            sc_tableinfo_gm _senddatat = new sc_tableinfo_gm() { _ret = 0 };
                            _senddatat.data = new List<tableuser>();
                            TexasTable table = _lobby.GetTableByRoomIDandTableID(_addclubchlid.roomid, _addclubchlid.tid);
                            if (table != null)
                            {
                                foreach (var item in table._DicPos2User.Keys)
                                {
                                    TexasUser puser = table._DicPos2User[item] as TexasUser;
                                    if (puser != null)
                                    {
                                        _senddatat.data.Add(new tableuser()
                                        {
                                            uid = puser._userid,
                                            uname = puser._tbUser.wechatName,
                                            pos = puser.pos,
                                            type = 0,
                                            usergold = puser.GetGain(),
                                            allgold = puser._CurrentGold,
                                            numgold = puser.Insurtotal
                                        });
                                    }
                                }
                                foreach (var item in table._DicPos2UserWatch.Keys)
                                {
                                    TexasUser puser = table._DicPos2UserWatch[item] as TexasUser;
                                    if (puser != null)
                                    {
                                        _senddatat.data.Add(new tableuser()
                                        {
                                            uid = puser._userid,
                                            uname = puser._tbUser.wechatName,
                                            pos = puser.pos,
                                            type = 1,
                                            usergold = puser.GetGain(),
                                            allgold = puser._CurrentGold,
                                            numgold = puser.Insurtotal
                                        });
                                    }
                                }
                            }
                            _senddatat._ret = 1;
                            senddata = JsonUtils.Serialize(_senddatat);
                            break;
                        }
                    case "cs_updatecontorlconfig_gm":
                        cs_updatecontorlconfig_gm updateconfig = JsonUtils.Deserialize<cs_updatecontorlconfig_gm>(_data);
                        Texas.UpdateTexasConfig(updateconfig.gameid, JsonUtils.Deserialize<TexasConfig>(updateconfig.param));
                        senddata = "更新成功";
                        break;
                    #endregion
                    default://默认不处理的  发送一个   d- 表示哈
                        TraceLogEx.Error(_basedata.fn + " undeal  201206091508tex ");
                        break;
                }
                return senddata;
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, " 201206091508tex ");
                return "";
            }
        }
        /// <summary> 关闭比赛房间 </summary>
        public async ETTask<string> CompeteCloseTable(cs_compete_table_close data)
        {
            var table = _lobby.GetTable(data.tableid) as TexasTable;
            await table.BigEnd();
            await table.Reset(true);
            return null;
        }
        /// <summary> 比赛房参数变更 </summary>
        public async ETTask<string> CompeteChangeTableParam(cs_compete_texas_ready data)
        {
            var table = _lobby.GetTable(data.tableid) as TexasTable;
            table._judge.pregamble = data.pregamble;
            table._judge._baseGamle = data.baserate;
            table._judge.into = data.into;
            foreach (var user in table._DicPos2User.Values)
            {
                table.Ready(user._userid);
            }
            return null;
        }
        /// <summary> 比赛房加入玩家 </summary>
        public async ETTask<string> CompeteJoinTable(cs_compete_table_join data)
        {
            var table = _lobby.GetTable(data.tableid) as TexasTable;
            EnterCompeteTableWatch(table, data.player.playerid);
            await table.SitDownCompete(data.player.playerid, data.player.score);
            return null;
        }
        public async ETTask<string> CompeteWatchTable(cs_watch data)
        {
            var table = _lobby.GetTable(data.tableid) as TexasTable;
            return JsonUtils.Serialize(await EnterCompeteTableWatch(table, data.userid));
        }
        public async ETTask<string> SendToTableUser(cs_send_table_user data)
        {
            var table = _lobby.GetTable(data.tableid) as TexasTable;
            if (table != null)
            {
                table.ForeachBaseAndWatch((user) =>
                {
                    var _tuser = user as TexasUser;
                    if (data.type == 0)  _tuser.SendMessage(data.msg); 
                    else if (data.type == 1 && !_tuser._isWatch) _tuser.SendMessage(data.msg);
                    else if (data.type == 2 && _tuser._isWatch) _tuser.SendMessage(data.msg); 
                });
            }
            return null;
        }
        public async ETTask<string> EnterCompeteTable(TexasTable table, int userid)
        {
            if (table._DicPos2User.TryGetPairByID(userid, out int key, out TexasUser user) || table._DicPos2UserWatch.TryGetPairByID(userid, out key, out user))
            {
                var senddata = EnterCompeteTableWatch(table, userid, false);
                //if (!user._isWatch) table.SendSitDownNotice(user, false, true).Coroutine();
                return JsonUtils.Serialize(senddata);
            }
            else
            {
                return JsonUtils.Serialize(new sc_entertablenum_tex { result = -101, message = "你不是比赛场的玩家无法加入比赛场房间" });
            }
        }
        public async ETTask<string> SendCompeteTableInfo(sc_compete_table_info data)
        {
            var table = _lobby.GetTableByTableNum(data.tableid);
            if (table == null || table._DicPos2User == null) return null;
            data.level = table.level;
            data.baserate = table.baserate;
            data.into = table._judge.into;
            List<UserIDMSG> msgs = new List<UserIDMSG>();
            if (data.userid == 0) table.ForeachBaseAndWatch((user) => { msgs.Add(new UserIDMSG(user._userid, data, user._isRobot, user._isDisconnet)); });
            else if (table._DicPos2User.TryGetUserByID(data.userid, out TexasUser user))
            {
                msgs.Add(new UserIDMSG(user._userid, data, user._isRobot, user._isDisconnet));
                table.SendSitDownNotice(user, false, true).Coroutine();
            }
            else if (table._DicPos2UserWatch.TryGetUserByID(data.userid, out user)) msgs.Add(new UserIDMSG(user._userid, data, user._isRobot, user._isDisconnet));
            if (msgs.Count > 0 && data.userid == 0) table.SendCommonData(msgs);
            return JsonUtils.Serialize(data);
        }
        /// <summary> 创建比赛房 </summary>
        public async ETTask<string> CreateCompeteTable(cs_compete_table_create data)
        {
            var cs = JsonUtils.Deserialize<cs_createtable_tex>(data.tableinfo);
            int master = 1008;//给一个默认开房的人
            if (cs != null)
            {
                int tableid = await CreateTableForRoom(_lobby.roomCache[0] as TexasRoom, master, cs, 0);
                if (tableid <= 0) return JsonUtils.Serialize(new sc_compete_table_create { competeid = data.competeid, result = -101, players = data.players, message = "创建比赛房失败" });
                TexasTable table = _lobby.GetTable(tableid) as TexasTable;
                if (table == null) return JsonUtils.Serialize(new sc_compete_table_create { competeid = data.competeid, result = -102, players = data.players, message = "创建比赛房失败" });
                table.competeid = data.competeid;
                table.level = cs.level;
                table.min_level = cs.min_level;
                table.max_level = cs.max_level;
                table.name = cs.name;
                foreach (var item in data.players)
                {
                    await EnterCompeteTableWatch(table, item.playerid);
                    await table.SitDownCompete(item.playerid, item.score);
                }
                table.AsyncDelayExeFun(() =>
                {
                    table.WaittoStart();
                }, 2000);
                string IP = StartConfigComponent.Instance.StartConfig.GetComponent<InnerConfig>().IPEndPoint.ToString();
                return JsonUtils.Serialize(new sc_compete_table_create { competeid = data.competeid, result = 1, players = data.players, tableid = tableid, ip = IP, message = "创建比赛房成功" });
            }
            return JsonUtils.Serialize(new sc_compete_table_create { competeid = data.competeid, result = -105, players = data.players, message = "创建比赛房失败" });
        }
        /// <summary>
        /// 用户退出FJ时调用
        /// </summary>
        /// <param name="userID"></param>
        public override async ETTask<int> ExitRoom(int levelid, int userID)
        {
            TexasRoom _tcroom = _lobby.GetRoomByRoomID(levelid);
            if (_tcroom != null)
            {
                if (await _tcroom.ExitRoomBase(userID)) return 1;
            }
            return 0;
        }
        /// <summary>
        /// 进入FJ中的指定桌子
        /// </summary>                          
        /// <returns></returns>
        public override async ETTask<string> EnterRoomTable(int _user, cs_enterroomtable _data)
        {
            return "";
        }           

        /// <summary>
        /// 退出ROOM
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="_us"></param>
        public override void ExitRoomByDisConnect(int userid, UserStatus _us)
        {
            TexasTable _tctable = _lobby.GetTableByTableNum(_us.TableID);
            if (_tctable == null) return;

            _tctable.NotifyDis(userid, _us);
        }

        /// <summary>
        /// 申请退出房间
        /// </summary>
        /// <param name="_user"></param>
        /// <param name="_data"></param>
        public override async ETTask< bool> ApplyExitTable(int _user, int tableid)
        {
            TexasTable _tctable = _lobby.GetTableByTableNum(tableid);
            if (_tctable == null) return false;

            _tctable.ApplyExitTable(_user);

            return true;
        }

        /// <summary>
        /// 处理退出桌子
        /// </summary>
        /// <param name="_user"></param>
        /// <param name="_data"></param>
        public override void DealExitTable(int _user, cs_dealexittable _data)
        {
            TexasTable _tctable = _lobby.GetTableByTableNum(_data.tableid);
            if (_tctable == null) return;
            _tctable.DealExitTable(_user, _data.agree == 1);
        }
         

        public override void DismissTableGM(string data)
        {
            cs_currdto_gm cd = JsonUtils.Deserialize<cs_currdto_gm>(data);
            var _table = _lobby.GetTableByRoomIDandTableID(cd.levelid, cd.tableid.ToInt32());

            if (_table != null)
            {
                //_table._judge._endtime = DateTime.Now;
                _table.DismissTableTime();
            }
        }


        public override string SendChat(tUser _user, cs_chat chat)
        {
            sc_chat _senddata = new sc_chat() { result = 0, cc = 0 };

            var _bftable = _lobby.GetTableByRoomIDandTableID(chat.levelid, chat.tableid);
            if (_bftable != null)
            {
                var existseat = _bftable.CheckUserIDExitsSeat(_user.UserID);
                if (!existseat)
                {
                    _senddata.result = -1;//不在位置上不能操作
                }
                else
                {
                    var _tempUser = _bftable.GetUserByIDTry(_user.UserID);
                    if (_tempUser != null)
                    {
                        bool _send = true;
                        if (chat.type == 5)
                        {
                            if (_tempUser._tbUser.GetGoldAndWinGold > chat.ngold)
                            {
                                _tempUser.GoldReduce(chat.ngold);
                                string remark = "";
                                var myu = _bftable.GetUserByIDTry(_user.UserID);
                                if (myu != null)
                                {
                                    var myTexasTable = _lobby.GetTableByRoomIDandTableID(myu._levelid, myu._tableid);
                                    if (myTexasTable != null)
                                        remark = myTexasTable._tableid.ToString();
                                }
                                RobotReturnGift(_bftable, _user.UserID, chat.tpos);
                                _tempUser.WriteGoldChangeLog(chat.ngold, 15, "礼物", false); //记录日志
                            }
                            else
                            {
                                _senddata.result = -2;//余额不足
                                _send = false;
                            }
                        }
                        if (chat.type == 6)
                        {   //弹幕
                            string remark = "";
                            var myu = _bftable.GetUserByIDTry(_user.UserID);
                            if (myu != null)
                            {
                                var myTexasTable = _lobby.GetTableByRoomIDandTableID(myu._levelid, myu._tableid);
                                if (myTexasTable != null)
                                    remark = myTexasTable._tableid.ToString();
                            }
                        }
                        if (_send)
                        {
                            var _suc = _bftable.SendChatBase(_user.UserID, chat.content, chat.type, chat.tpos);
                            if (_suc)
                            {
                                string logtype = "0";
                                if (chat.type == 1) logtype = "2";
                                if (chat.type == 3 || chat.type == 6) logtype = "1";
                                if (chat.type == 3 || chat.type == 1 || chat.type == 6)
                                    _tempUser.WritetChatlog(_tempUser._userid, chat.content, logtype, 0, _bftable._tableid, _tempUser._levelid, chat.gameid);
                                _senddata.result = 1;
                            }
                        }
                    }
                }
            }
            return JsonUtils.Serialize(_senddata);
        }

        public override async ETTask<int> EnterRobotFromGM(int tnum, int pos, int userid)
        {
            try
            {
                var _table = _lobby.GetTableByTableNum(tnum);
                if (_table != null)
                {
                    var tbRobotuser = await tb_UserEx.GetFromCachebyUserID(userid);
                    if (tbRobotuser == null) return 999;//机器人不存在
                    await _table._room.EnterRoomBase(tbRobotuser.UserID);

                    var _myuser = _table.GetUserByIDTry(tbRobotuser.UserID);
                    if (_myuser == null) await _table.EnterTableWatch(tbRobotuser);
                    else
                    {
                      await  _table.EnterTableWatchRe(_myuser, tbRobotuser);
                    }

                    int _minPlayer = _table._judge._baseGamle * 200 * ToolsEx.GetRandomSys(1, 5);    //金币带入规则
                    var _res = await _table.SitDown(tbRobotuser.UserID, _minPlayer, 0, _table._judge.password, pos);
                    if (_res == 1)
                    {
                        BaseHelper.RobotExistNumAddOne();
                        return 1;
                    }
                    else
                    {
                        return _res;
                    }
                }
                return -2;//房间号不存在
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "2020041813391texas");
                return -1;
            }
        }
        public override async ETTask<int> ExitRobotFromGM(int userid)
        {
            try
            {
                var tbRobotuser = await tb_UserEx.GetFromCachebyUserID(userid);
                if (tbRobotuser == null) return -999;//机器人不存在
                UserStatus _curStatus = await BaseHelper.TryGetUserStatus(tbRobotuser.UserID);
                if (_curStatus == null)
                {
                    return -997;
                }
                else
                {
                    //if (_curStatus.Status == UserStatusEnum.InTableDaPai) return -998;//同一个机器出现大两所有机器人要崩 

                    var _table = _lobby.GetTableByRoomIDandTableIDTry(_curStatus.Levelid, _curStatus.TableID);
                    if (_table != null)
                    {
                        var _res = await _table.ReApplyExitTable(tbRobotuser.UserID);
                        if (_res == 1)
                        {
                            BaseHelper.RobotExistNumReduceOne();
                            return 1;
                        }
                        else
                        {
                            return -1;//游戏中不能退出
                        }
                    }
                }
                return -2;// 
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "2020041913391tex");
                return -1;
            }
        }

        public override async ETTask<string> CreateTableGM(string data)
        {
            tUser _user = await tb_UserEx.GetFromCachebyUserID(1008);//给一个默认开房的人
            cs_createtable_tex _data = JsonUtils.Deserialize<cs_createtable_tex>(data);
            string rdata = await CreateTable(_user, _data);
            //sc_createtable_tex _senddata = JsonUtils.Deserialize<sc_createtable_tex>(rdata);
            return rdata;
        }

        public override async ETTask<int> EnterVMasterFromGM(int levelid, int tableid, int userid)
        {
            try
            {
                var tbRobotuser = await tb_UserEx.GetFromCachebyUserID(userid);
                if (tbRobotuser == null) return -1;//机器人不存在 
                if (tbRobotuser.vlevel != 18) return -1;

                var _table = _lobby.GetTableByRoomIDandTableID(levelid, tableid);
                if (_table != null)
                {
                    TexasRoom _levelinfo = _lobby.GetRoomByRoomID(_table._levelid);
                    if (_levelinfo != null) await _levelinfo.EnterRoomBase(tbRobotuser.UserID); 

                    var _myuser = _table.GetUserByIDTry(tbRobotuser.UserID);
                    if (_myuser == null) await _table.EnterTableWatch(tbRobotuser);
                    else
                    {
                      await  _table.EnterTableWatchRe(_myuser, tbRobotuser);
                    }

                    return 1;
                }
                return -2;//房间号不存在
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "202006301106 1texas");
                return -1;
            }
        }
        /// <summary>
        /// 随机回礼
        /// </summary>
        /// <param name="table"></param>
        /// <param name="pos"></param>
        public void RobotReturnGift(TexasTable table, int userid, int pos)
        {
            if (table == null) return;
            var tempUser = table.GetUserByPosMust(pos);
            var User = table.GetUserByID(userid);
            if (User == null) return;

            if (tempUser == null || tempUser._tbUser.isRobot == 0) return;
            int _rateleave = ToolsEx.GetRandomSys(0, 10);
            if (_rateleave < 7) return;//30%触发
            int _waittimeStart = ToolsEx.GetRandomSys(3000, 5000);
            table.AsyncDelayExeFun(() =>
            {
                int bq = ToolsEx.GetRandomSys(0, 10);
                table.SendChatBase(tempUser._userid, bq + "", 5, User.pos);
            }, _waittimeStart);

        }



    }

    public class tex_create_para
    {
        /// <summary>
        /// 带入倍数0.5~4
        /// </summary>
        public double intorate_min;
        public double intorate_max;
        /// <summary>
        /// 对应小盲 一般等于底注
        /// </summary> 
        public int blind;
        /// <summary>
        /// 前注 底注的 2的N次方   1 2 4 8 16 20 40
        /// </summary> 
        public int pregamble;
        public int gps;
        public int ip;
        /// <summary>
        ///  1.正常模式，2.保险模式， 3.延时看牌
        /// </summary>
        public int gametype;
        /// <summary>
        /// 创建的ID
        /// </summary>
        public int clubidx;
        public int ins;

        /// <summary>
        /// AOF模式
        /// 最小保留记分倍数
        /// 最小带入的1至10倍
        /// </summary>
        public int AOF_Times;
    }
}
