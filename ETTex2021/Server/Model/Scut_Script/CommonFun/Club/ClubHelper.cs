using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Common;
using ETModel.Framework.Common.Serialization;
using ETModel.Script.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ETModel.Script.CsScript.Action
{
    public class ClubHelper : BaseHelper
    {
        public static async Task<string> EnterClub(tUser _user, cs_enter_club _data)
        {
            sc_enter_club _senddata = new sc_enter_club() { result = -1, cc = _data.cc, flist= new List<floorInfoSD>() };

            int _curright = 0;
            var _tlist = new List<ctableinfo>();
            var _clist = new List<clubinfosd>();
            var idlist = _user.clublist;
            foreach (var cidx in idlist)
            {
                var _club = await BaseHelper.GetShare<tclub>(cidx);
                if (_club == null) continue;
                if (_club.idx == _data.curcid)
                {
                    if (_club.floor == null) _club.floor = new CacheList<string>();
                    var muser = _club.childs.Find(cu => { return cu.userid == _user.UserID; });
                    if(muser != null) _curright = muser._ismanager;
                    List<string> floorlist = new List<string>(_club.floor);
                    List<floorInfoSD> flist = new List<floorInfoSD>();
                    foreach (var _c in floorlist)
                    {
                        floorInfoSD csd = JsonUtils.Deserialize<floorInfoSD>(_c);
                        flist.Add(csd);
                    }
                    _senddata.flist = flist;

                    string senddata = "";
                    List<int> glist = new List<int>() { 10003, 10005, 401 };
                    for (int i = 0; i < glist.Count; i++)
                    {
                        int _g = glist[i]; 
                        string _tempdata = "";
                    
                        senddata = await FactoryBaseHelper.DealDataEx(_g,  _tempdata, _user.UserID); 
                        _tlist.Add(new ctableinfo() { gid = _g, data = senddata });
                        //senddata = await FactoryBaseHelper.DealDataEx(_g, _data, _user, _basedata.fn); 
                    }
                    var user =await BaseHelper.GetBase<tuseragent2021relation>((x) => x.UserID == _user.UserID && x.cidx == _data.curcid);
                    _senddata.code = user == null ? "" : user.Code;
                }
                long cgold = 0;
                if (_club.childs != null)
                {
                    var child = _club.childs.Find(t => t.userid == _user.UserID);
                    if (child != null)
                    {
                        cgold = child.cgold;
                    }
                    else cgold = 0;
                }
                else cgold = 0;

                _clist.Add(new clubinfosd() { cgold = cgold, cidx = cidx, cn = _club.Title, role = 1, url = _club.clubIcon });
                _senddata.result = 1;
            }

            _senddata.tlist = _tlist;
            _senddata.clist = _clist;
            _senddata.curcid = _data.curcid;
            _senddata.right = _curright; 
            return JsonUtils.Serialize(_senddata);
        }

        public static async Task<string> GetTableList(tUser _user, cs_gettablelist_club _data)
        {
            sc_gettablelist_club _senddata = new sc_gettablelist_club() { result = 0, cc = _data.cc };
            int reslut = 0;
            var _tlist = new List<ctableinfo>();

            List<floorInfoSD> flist = new List<floorInfoSD>();
            var _club = await BaseHelper.GetShare<tclub>(_data.cidx);
            if (_club != null)
            {
                if (_club.floor == null) _club.floor = new CacheList<string>();
                List<string> floorlist = new List<string>(_club.floor);
                foreach (var _c in floorlist)
                {
                    try
                    {
                        floorInfoSD csd = JsonUtils.Deserialize<floorInfoSD>(_c);
                        flist.Add(csd);
                    }
                    catch (Exception ex)
                    {
                        TraceLogEx.Error(ex, "202107161140");
                        break;
                    }
                }
                _senddata.flist = flist;

                string senddata = "";
                List<int> glist = new List<int>() { 10003, 10005, 401 };
                for (int i = 0; i < glist.Count; i++)
                {
                    int _g = glist[i];

                    string _tempdata = "";
                   
                    senddata = await FactoryBaseHelper.DealDataEx(_g, _tempdata, _user.UserID); 
                    _tlist.Add(new ctableinfo() { gid = _g, data = senddata });
                }
                reslut = 1;
            }
            _senddata.tlist = _tlist;
            _senddata.flist = flist; 
            _senddata.result = reslut;
            return JsonUtils.Serialize(_senddata);
        } 

        /// <summary>
        ///   
        /// </summary>                          
        /// <returns></returns>
        public static async Task<string> CreateClub(tUser _user, cs_create_club _data)
        {
            try
            {
                sc_create_club _senddata = new sc_create_club() { _ret = 0, fn = "sc_create_club" };

                dynamic result = await ClubHelper.Create(_user, _data);
                _senddata._ret = result.code;
                _senddata.cid = result.club.idx;
                _senddata.cname = result.club.Title;
                _senddata._info = result.msg;
                string _redata = JsonUtils.Serialize(_senddata);
                return _redata;
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, " 201206091508 club");
                return "";
            }
        }
        public static async Task<string> GetClubInfoEx(tUser _user, cs_getinfoex_club _data)
        {
            sc_getinfoex_club _senddata = new sc_getinfoex_club() { result = 0,  cc = _data.cc };
            int result = 0;
            var _club = await BaseHelper.GetShare<tclub>(_data.idx);
            if (_club != null)
            {
                int onlinecount = 0;
                if (_club.childs != null)
                {
                    List<int> onlinelist = new List<int>();
                    var arr = await GlobalDataService.GetOnlinePlayers_R(0);
                    if (arr != null) onlinelist.AddRange(arr); 
                    TraceLogEx.Log("GetClubInfoEx.online :" + JsonUtils.Serialize(onlinelist));
                    List<UserClubSD> clist = new List<UserClubSD>();
                    for (int i = 0; i < _club.childs.Count; i++)
                    {
                        var tuser = await BaseHelper.GetBase<tUser>(_club.childs[i].userid);
                        if (tuser == null) continue;
                        if (!tuser.clublist.Any(t => t == _data.idx)) tuser.clublist.Add(_data.idx);
                        UserClubSD uc = new UserClubSD()
                        {
                            ltime = tuser.LastLotinTime1,
                            manager = _club.childs[i]._ismanager,
                            name = tuser.wechatName,
                            playcount = _club.childs[i].playcount,
                            userid = tuser.UserID,
                            headUrl = ToolsEx.IsHandlePhoto(tuser.isRobot, tuser.wechatHeadIcon).Trim(),
                            relation = _club.childs[i].relation,
                            rights = _club.childs[i].rights,
                            online = onlinelist.Contains(tuser.UserID),
                            status = _club.childs[i].status,
                            gold = _club.childs[i].cgold
                        };
                        if (uc.online) onlinecount++;
                        clist.Add(uc);
                    }
                    _senddata.childs = clist;
                }
                if (_club.alliancid != 0)
                {
                    var alliance = await BaseHelper.GetShare<tcluballiance>(_club.alliancid);
                    if (alliance != null)
                    {
                        _senddata.alliname = alliance.Title;
                        _senddata.alliid = (int)alliance.idx;
                    }
                }
                //var levelconfig = await BaseHelper.GetShareAll<tclublevel>((x) => x.type == 1);
                //_senddata.leveldata = levelconfig == null ? null : levelconfig.Select(t => new levelconfig()
                //{
                //    diamond = t.diamond,
                //    level = t.level,
                //    maxmange = t.maxadmin,
                //    maxmenber = t.maxMember
                //}).ToList();   

                _senddata.brisk = 0;//活跃度
                _senddata.lv = _club.lv;
                _senddata.notice = _club.notice;
                _senddata.diam = _club.diam;
                _senddata.gold = _club.gold;
                _senddata.idx = _club.idx;
                _senddata.limitcount = _club.limitcount;
                _senddata.manager = _club.manager;
                _senddata.onlinecount = onlinecount; 
                _senddata.maxmanger = 10;
                _senddata.fundnum = _club.fundnum;
                _senddata.cluburl = string.IsNullOrEmpty(_club.clubIcon) ? "" : ToolsEx.IsHandlePhoto(0, _club.clubIcon).Trim();
                _senddata.freecount = _club.FreeModify;
                result = 1;
            }
            else result = -1; 

            _senddata.result = result;
            return JsonUtils.Serialize(_senddata);
        }


        /// <summary>
        ///   
        /// </summary>                          
        /// <returns></returns>
        public static async Task<string> FloorEdit(tUser _user, cs_flooredit_club _data)
        {
            sc_flooredit_club _senddata = new sc_flooredit_club() { result = 0, cc = _data.cc };
            int _res=0;
            var _club = await BaseHelper.GetShare<tclub>(_data.cidx);
            if (_club != null)
            {
                if (_club.floor == null) _club.floor = new CacheList<string>() { "", "", "", "", "", "", "", "", "" };
                if (_data.fid < 10 && _data.fid > 0)
                {                    
                    if(_data.data == "") _club.floor[_data.fid - 1] = "";
                    else _club.floor[_data.fid - 1] = JsonUtils.Serialize(_data);
                }
                List<string> floorlist = new List<string>(_club.floor);
                List<floorInfoSD> flist = new List<floorInfoSD>();
                foreach (var _c in floorlist)
                {
                    floorInfoSD csd = JsonUtils.Deserialize<floorInfoSD>(_c);
                    flist.Add(csd);
                }
                _senddata.flist = flist;
                 

                int _g = _data.gameid; 
                string _tempdata = _data.data;
                if (_data.gameid == 10003)
                {
                    //cs_createtable_tc _glist = new cs_createtable_tc() { clubidx = _club.idx, _g = _g };
                    //_tempdata = JsonUtils.Serialize(_glist);
                }
                else if (_data.gameid == 10005)
                {
                    //cs_createtable_bf _glist = new cs_createtable_bf() { clubidx = _club.idx, _g = _g };
                    //_tempdata = JsonUtils.Serialize(_glist);
                }
                else if (_data.gameid == 401)
                {
                    //cs_createtable_mj _glist = new cs_createtable_mj() { clubidx = _club.idx, _g = _g };
                    //_tempdata = JsonUtils.Serialize(_glist);
                }
                _res = 1;
                if (!string.IsNullOrEmpty(_tempdata ))
                {
                    string tdata = await FactoryBaseHelper.DealDataEx(_g, _tempdata, _user.UserID);  
                    if (!string.IsNullOrEmpty(tdata))
                    {
                       
                    }
                }  
                var _club2 = await BaseHelper.AddOrUpdate<tclub>(_club);
            }

            _senddata.result = _res;
            string _redata = JsonUtils.Serialize(_senddata);
            return _redata;
        }

        public static async Task<bool> ClubAutonew( int cid, int fid, int gid)
        {
            if (fid < 1) {   TraceLogEx.Error("fid is not can not creator new table."); return true; }
            var _club = await BaseHelper.GetShare<tclub>(cid);
            if (_club != null)
            {
                if (_club.floor == null) _club.floor = new CacheList<string>() { "", "", "", "", "", "", "", "", "" };

                int _g = gid;
                floorInfoSD csd = JsonUtils.Deserialize<floorInfoSD>(_club.floor[fid - 1]);
                if (csd == null) return true;
                string _tempdata = csd.data;
                if (_g == 10003)
                {
                    // cs_createtable_tc _glist = new cs_createtable_tc() { clubidx = cidx, _g = _g };
                    // _tempdata = JsonUtils.Serialize(_glist);
                }
                else if (_g == 10005)
                {
                    //cs_createtable_bf _glist = JsonUtils new cs_createtable_bf() { clubidx = cidx, _g = _g };
                    //_tempdata = JsonUtils.Serialize(_glist);
                }
                if (!string.IsNullOrEmpty(_tempdata))
                {
                    int tempuserid = _club.childs.Find((cu) => { return cu._ismanager > 0; }).userid;
                    string tdata = await FactoryBaseHelper.DealDataEx(_g, _tempdata, tempuserid);  
                }
            }
            return true;
        }
        
        #region club logic 

        public static async Task<string> Setting(tUser _user, cs_setting_club _data)
        {
            sc_setting_club _senddata = new sc_setting_club() { result = 0, cc = _data.cc };

            var result = await ClubHelper.Setting(_data.idx, _data.member, _data.floor, _data.data, _data.notice);
            _senddata.result = result;

            string _redata = JsonUtils.Serialize(_senddata);
            return _redata;
        }
        /// <summary>
        ///   
        /// </summary>                          
        /// <returns></returns>
        public static async Task<string> GetClubList(tUser _user, cs_getlist_club _data)
        {
            try
            {
                tuserInfoEx userinfo = await  tb_userinfoEx.GetFromCachebyUserID(_user.UserID);

                sc_getlist_club _senddata = new sc_getlist_club() { result = 0, cc = _data.cc };

                var clist = await ClubHelper.Getlistbyuserid(_user.UserID, 0, 100);
                List<clubsd> _clist = new List<clubsd>();
                foreach (var _c in clist)
                {
                    List<ttablelist> alltable =await BaseHelper.GetShareAll<ttablelist>(p => p.ClubIdx == _c.idx || (_c.alliancid!=0 && p.allId == _c.alliancid));

                    tcluballiance clli = _c.alliancid == 0 ? null : await BaseHelper.GetShare<tcluballiance>(p => p.idx == _c.alliancid);
                    clubsd csd = new clubsd();
                    csd.idx = _c.idx;
                    csd.gold = _c.gold;
                    csd.limitcount = _c.limitcount; 
                    csd.State = _c.State;
                    csd.Title = _c.Title;
                    csd.UserId = _c.UserId; 
                    csd.CreateDate = _c.CreateDate.ToString("yyyy-MM-dd HH:mm:ss");
                    csd.diam = _c.diam;
                    csd.uName = await tb_UserEx.GetUserNameByUserID(_c.UserId);
                    csd.clubDesc = _c.Content;
                    csd.ccount = _c.childs.Count;
                    csd.Loc = _c.Loc;
                    csd.mct = _c.manager;
                    csd.tableC = alltable!=null?alltable.Count():0;
                    csd.joinSpC = clli == null ? false: clli.IsSupper;
                    csd.lv = _c.lv;
                    csd.cluburl = string.IsNullOrEmpty(_c.clubIcon) ? "" : ToolsEx.IsHandlePhoto(0, _c.clubIcon).Trim();

                    var cy = _c.childs.Where(t => t.userid == _user.UserID).FirstOrDefault();
                    csd.role = cy == null ? 0 : cy._ismanager;
                    csd.cgold = cy == null ? 0 : cy.cgold;
                    _clist.Add(csd);
                }
                _senddata.maxc =(await tb_userinfoEx.GetFromCachebyUserID(_user.UserID)).cClub;//========================
                _senddata.clist = _clist;
                _senddata.result = 1;


                string _redata = JsonUtils.Serialize(_senddata);
                return _redata;
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, " 201904111537 club ");
                return "";
            }
        }

        /// <summary>
        ///   
        /// </summary>                          
        /// <returns></returns>
        public static async Task< string> GetSearchList(tUser _user, cs_search_club _data)
        {
            try
            {
                sc_search_club _senddata = new sc_search_club() { result = 0, cc = _data.cc };
                if (_data.name.Length < 50)
                {
                    var clist = await ClubHelper.GetlistbyName(_data.name, 0, 100);
                    List<clubsd> _clist = new List<clubsd>();
                    foreach (var _c in clist)
                    {
                        clubsd csd = new clubsd();
                        csd.idx = _c.idx;
                        csd.lv = _c.lv;
                        csd.gold = _c.gold;
                        csd.limitcount = _c.limitcount; 
                        csd.State = _c.State;
                        csd.Loc = _c.Loc;
                        csd.Title = _c.Title;
                        csd.UserId = _c.UserId; 
                        csd.CreateDate = _c.CreateDate.ToString("yyyy-MM-dd HH:mm:ss");
                        csd.diam = _c.diam;
                        tUser cuser = await GetBase<tUser>(_c.UserId);
                        csd.uName = cuser.wechatName;
                        csd.clubDesc = _c.Content;
                        csd.cluburl = string.IsNullOrEmpty(_c.clubIcon) ? "" : ToolsEx.IsHandlePhoto(0, _c.clubIcon).Trim();
                        csd.headurl = ToolsEx.IsHandlePhoto(0, cuser.wechatHeadIcon).Trim();
                        var own = _c.childs.Find(t => t.userid == _user.UserID);
                        csd.isjoin = own == null ? false : true;

                        _clist.Add(csd);
                    }
                    _senddata.clist = _clist;
                    _senddata.result = 1;

                }
                string _redata = JsonUtils.Serialize(_senddata);
                return _redata;
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, " 201904111538 club ");
                return "";
            }
        }

        /// <summary>
        /// A
        /// </summary>           
        public static async Task<string> Apply(tUser _user, cs_apply_club _data)
        { 
            sc_apply_club _senddata = new sc_apply_club() { result = 0, cc = _data.cc }; 
            if (_data.type == 1)    _senddata.result = await ClubHelper.Agree(0, _user.UserID, 0, _data.idx.ToString());
            else _senddata.result = await ClubHelper.Apply(_user.UserID, _data.idx, _data.message);

            string _redata = JsonUtils.Serialize(_senddata);
            return _redata;
        }

        public static async Task<string> GetApplyList(tUser _user, cs_applylist_club _data)
        { 
            sc_applylist_club _senddata = new sc_applylist_club() { result = 0, cc = _data.cc };
            var _club = await BaseHelper.GetShare<tclub>(_data.idx);
            if (_club != null)
            {
                var isnameger = _club.childs.FindAll(t => t.userid == _user.UserID && t._ismanager > 1);//权限判断
                if (isnameger!=null && isnameger.Count>0)
                {
                    var alist =await  BaseHelper.GetApplyListlog(1, 3, _data.idx);
                    List<ClubApplySD> capplylist = new List<ClubApplySD>();
                    if (alist != null)
                    {
                        foreach (var ustatus in alist)
                        {
                            ClubApplySD _ca = new ClubApplySD();
                            if (ustatus.applyType == 3)
                            {
                                var lm = await BaseHelper.GetShare<tcluballiance>( _club.alliancid);
                                var s_club = await BaseHelper.GetShare<tclub>( ustatus.ownClubId);
                                if (s_club != null) _ca.cName = s_club.Title;
                                else TraceLogEx.Error("fetal error! GetApplyList: ownClubId:" + ustatus.ownClubId);

                                if (lm != null) _ca.aName = lm.Title;
                                else TraceLogEx.Error("fetal error! GetApplyList: _club.alliancid: " + _club.alliancid);
                            }
                            _ca.clubid = (int)ustatus.ownClubId;
                            _ca.stype = ustatus.applyType;
                            _ca.userid = ustatus.UserId;
                            _ca.state = ustatus.Status;
                            _ca.name = await tb_UserEx.GetUserNameByUserID(ustatus.UserId);
                            _ca.message = ustatus.message;
                            capplylist.Add(_ca);
                        }
                    }
                    _senddata.alist = capplylist; 
                    _senddata.aId = _club.alliancid;
                }
            }
            
            _senddata.idx = _data.idx;
            _senddata.result = 1; 

            string _redata = JsonUtils.Serialize(_senddata);
            return _redata;
        }

        public static async Task< string> AgreeClub(tUser _user, cs_agree_club _data)
        {
            sc_agree_club _senddata = new sc_agree_club() { result = 0, cc = _data.cc };
            var _club = await BaseHelper.GetShare<tclub>(_data.idx);
            if (_club != null)
            {
                var applylog = await BaseHelper.Getclubapplylog(1, _data.idx, _data.tuserid);
                if (_data.agree == -1)
                {
                    if (_club.applyUserID != null)
                    {
                        _club.applyUserID.Remove(_data.tuserid);
                        await BaseHelper.AddOrUpdate<tclub>(_club);
                        PushAutoSendData(3, _club.applyUserID.Count, _data.idx, _user.UserID);
                    }
                    if (applylog != null) tCommonlogEx.UpdateApplylogStatus(applylog.Id, -1);

                    _senddata.result = 1;
                }
                else
                {
                    var result = await ClubHelper.Agree(applylog.clubId.ToInt32(), _data.tuserid, _user.UserID, applylog.ClubCode+"");
                    if (applylog != null) BaseHelper.UpdateApplylogStatus(applylog.Id, 1);
                    _senddata.result = result;
                } 
            }
            else _senddata.result = -1; 
            string _redata = JsonUtils.Serialize(_senddata);
            return _redata;
        }

        /// <summary>
        /// club消息推送
        /// </summary>
        /// <param name="type"></param>
        /// <param name="unCount"></param>
        /// <param name="clubid"></param>
        public static void PushAutoSendData(int type,int unCount,int clubid,int userid)
        {
            List<UserIDMSG> imList = new List<UserIDMSG>();
            sc_commonnews_n _getnotice = new sc_commonnews_n() { result = 1 };
            _getnotice.type = type;
            _getnotice.unCount = unCount;
            _getnotice.clubid = clubid;
            imList.Add(new UserIDMSG(userid, _getnotice, false, false));
            LobbySendDataServer.instance.AutoSendData(imList);
        } 

        public static async Task<string> DisMiss(tUser _user, cs_dismiss_club _data)
        {
            sc_dismiss_club _senddata = new sc_dismiss_club() { result = 0, cc = _data.cc };

            var result = await ClubHelper.DisMiss(_data.idx, _user);
            _senddata.result = result;

            string _redata = JsonUtils.Serialize(_senddata);
            return _redata;
        }

        public static async Task< string> TickUser(tUser _user, cs_deleteuser_club _data)
        {
            sc_deleteuser_club _senddata = new sc_deleteuser_club() { result = 0, cc = _data.cc };
            if (_data.uid== _user.UserID)
                _senddata.result = -1;//不能踢出自己
            else
            {
                tUser user = await GetBase<tUser>(_data.uid);
                var _club = await GetShare<tclub>( _data.idx);
                if (user != null && _club != null)
                {
                    var mchild = _club.childs.Find(t => t.userid == _user.UserID);
                    var schild = _club.childs.Find(t => t.userid == user.UserID);
                    if (mchild==null || schild==null) _senddata.result = 0;
                    else if (mchild._ismanager == 0) _senddata.result = -2;
                    else if (mchild._ismanager==1 && schild._ismanager > 0) _senddata.result = -2;//管理员不能删管理员
                    else if(_club.applyGoldList.Find(t=>t.userid== _data.uid)!=null) _senddata.result = -5;//还有未处理的请求
                    else
                    {
                        var childuser = _club.childs.Find(t => t.userid == user.UserID);
                        if (user.clublist != null && user.clublist.Contains(_data.idx)) user.clublist.Remove(_data.idx);

                        _club.childs.Remove(childuser);
                        if (childuser != null && childuser.cgold > 0)
                        {
                            tclubusergoldlog clublog = new tclubusergoldlog();
                            clublog.BeforeGold = childuser.cgold;
                            clublog.AfterGold = 0;
                            clublog.ChangeType = 10;
                            clublog.UserId = user.UserID;
                            clublog.ClubId = _club.idx;
                            clublog.Gold = childuser.cgold;
                            BaseHelper.AddAsync(clublog);
                            _club.gold += childuser.cgold;
                            tCommonlogEx.WriteClubGoldlog(_club.gold, _club.gold - childuser.cgold, 10, _club.idx, childuser.cgold, "", user.UserID);
                        }
                        await  BaseHelper.AddOrUpdate<tclub>(_club);
                        _senddata.result = 1;
                    }
                }
            }

            string _redata = JsonUtils.Serialize(_senddata);
            return _redata;
        }

        public static async Task<string> SearchForAdd(tUser _user, cs_searchforadd_club _data)
        {
            sc_searchforadd_club _senddata = new sc_searchforadd_club() { result = 0, cc = _data.cc };
            int result = 0;
            var _club = await BaseHelper.GetShare<tclub>(_data.idx);
            if (_club != null)
            {
                if (_club.childs != null)
                {
                    var muser = _club.childs.Find((c) => { return c.userid == _user.UserID; });
                    var  _tuser = await BaseHelper.GetBase<tUser>(_data.userid);
                    if (_tuser != null && muser != null && muser._ismanager > 0)
                    {                        
                        _senddata.uc = new UserClubSD()
                        {
                            ltime = _tuser.LastLotinTime1,
                            manager = 0,
                            name = _tuser.wechatName,
                            playcount = 0,
                            userid = _tuser.UserID,
                            headUrl = ToolsEx.IsHandlePhoto(_tuser.isRobot, _tuser.wechatHeadIcon).Trim(),
                            relation ="",
                            rights = "",
                        };
                        result = 1;
                    }
                    else result = -2;//未查询到
                    
                } 
            }
            else result = -1;

            _senddata.result = result;
            return JsonUtils.Serialize(_senddata);
        }
        public static async Task<string> ForAdd(tUser _user, cs_foradd_club _data)
        {
            sc_foradd_club _senddata = new sc_foradd_club() { result = 0, cc = _data.cc };
            int result = 0;
            var _club = await BaseHelper.GetShare<tclub>(_data.idx);
            if (_club != null)
            {
                if (_club.childs != null)
                {
                    var muser = _club.childs.Find((c) => { return c.userid == _user.UserID; });
                    var _tuser = await BaseHelper.GetBase<tUser>(_data.userid);
                    if (_tuser != null && muser != null && muser._ismanager > 0)
                    {
                        var agentRe = await BaseHelper.GetBase<tuseragent2021relation>((x) => x.UserID == _user.UserID && x.cidx == _data.idx);
                        string code = "";
                        if (agentRe != null) code = agentRe.Code;
                        result = await ClubHelper.Agree(_data.idx, _data.userid, _user.UserID, code);
                        //if (applylog != null) BaseHelper.UpdateApplylogStatus(applylog.Id, 1);                        
                    }
                    else _senddata.result = -2;//未查询到
                }
            }
            else result = -1;

            _senddata.result = result;
            return JsonUtils.Serialize(_senddata);
        }

        public static async Task<string> BanGame(tUser _user, cs_bangame_club _data)
        {
            sc_bangame_club _senddata = new sc_bangame_club() { result = 0, cc = _data.cc };
            int result = 0;
            var _club = await BaseHelper.GetShare<tclub>(_data.idx);
            if (_club != null)
            {
                if (_club.childs != null)
                {
                    var muser = _club.childs.Find((c) => { return c.userid == _user.UserID; });
                    var _tuser = await BaseHelper.GetBase<tUser>(_data.userid);
                    if (_tuser != null && muser != null && muser._ismanager > 0)
                    {
                        UserClub chlid = _club.childs.Where(x => x.userid == _tuser.UserID).FirstOrDefault();
                        if (chlid != null)
                        {
                            chlid.status = _data.ban?1:0; 
                            ClubHelper.UpdateData(_club);
                        } 
                        result = 1;                      
                    }
                    else _senddata.result = -2;//未查询到
                }
            }
            else result = -1;

            _senddata.result = result;
            return JsonUtils.Serialize(_senddata);
        }

        public static async Task<string> GetSlpitArray(tUser _user, cs_getsplitarray_club _data)
        {
            sc_getsplitarray_club _senddata = new sc_getsplitarray_club() { result = 0, cc = _data.cc };
            int result = 0;
            var _club = await BaseHelper.GetShare<tclub>(_data.idx);
            if (_club != null)
            {
                List<splitarraysd> slist = new List<splitarraysd>();
                if (_club.splits != null)
                {
                    foreach (var s in _club.splits)
                    {
                        slist.Add(new splitarraysd() { arrid=s.arrid, arrlist = s.arrlist, name=s.name }); 
                    }
                }
                result = 1;
                _senddata.slist = slist;
            }
            else result = -1;

            _senddata.result = result;
            return JsonUtils.Serialize(_senddata);
        }
        public static async Task<string> ModifySlpitArray(tUser _user, cs_modifysplitarray_club _data)
        {
            sc_modifysplitarray_club _senddata = new sc_modifysplitarray_club() { result = 0, cc = _data.cc };
            int result = 0;
            var _club = await BaseHelper.GetShare<tclub>(_data.idx);
            if (_club != null )
            {
                var muser = _club.childs.Find((c) => { return c.userid == _user.UserID; });
                if (muser._ismanager > 0)
                {
                    if (_club.splits == null) _club.splits = new CacheList<SplitArrayClub>();
                    if (_data.arr == 0)
                    {
                        int maxid = 1;
                        if (_club.splits.Count > 0)
                        {
                            var sc = _club.splits.OrderByDescending(u => u.arrid).ToList()[0];
                            maxid = sc.arrid;
                        }
                        if (_data.arrlist == null) _data.arrlist = new List<int>();
                        _club.splits.Add(new SplitArrayClub() { arrid = maxid, arrlist= new List<int> (_data.arrlist), name = _data.name }); 
                        result = 1;
                    }
                    else
                    {
                        var sarr  = _club.splits.Find((c) => { return c.arrid == _data.arr; });
                        if (sarr != null)
                        {
                            if (_data.del)
                            {
                                _club.splits.Remove(sarr);
                            } 
                            else
                            {
                                sarr.name = _data.name;
                                sarr.arrlist = _data.arrlist; 
                            } 
                            await BaseHelper.AddOrUpdate<tclub>(_club);
                            result = 1; 
                        }
                    } 
                }
            }
            else result = -1;
            if (result == 1)
            {
                List<splitarraysd> slist = new List<splitarraysd>();
                foreach (var s in _club.splits)
                {
                    slist.Add(new splitarraysd() { arrid = s.arrid, arrlist = s.arrlist, name = s.name });
                }
                _senddata.slist = slist;
            } 
            _senddata.result = result;
            return JsonUtils.Serialize(_senddata);
        }
        /// <summary>
        ///   
        /// </summary>                          
        /// <returns></returns>
        public static async Task< string> ApplyGold(tUser _user, cs_applygold_club _data)
        {
            sc_applygold_club _senddata = new sc_applygold_club() { result = 0, cc = _data.cc };

            int result = 0;
            var _club = await BaseHelper.GetShare<tclub>(_data.idx);
            if (_club != null)
            {
                var existapply = _club.applyGoldList.Find((x) => x.userid == _user.UserID);
                var child = _club.childs.Find((x) => x.userid == _user.UserID);
                if (existapply != null) result = -3;//同时只允许申请一次 必须处理
                else if (_data.type == 2 && _data.gold * 100 > child.cgold) result = -4;//回收余额不足
                else
                {
                    if (_data.type.Equals(2)) child.cgold -= _data.gold * 100;

                    _club.applyGoldList.Add(new UserApplyStatus()
                    {
                        Gold = _data.gold * 100,
                        GoldType = _data.type,
                        Status = 0,
                        userid = _user.UserID
                    }); 

                    await ThreadEx.Sleep(1);
                    var manager = _club.childs.FindAll(t => t._ismanager > 0);
                    List<UserIDMSG> imList = new List<UserIDMSG>();
                    foreach (var item in manager)
                    {
                        sc_commonnews_n _getnotice = new sc_commonnews_n() { result = 1 };
                        _getnotice.type = 1;
                        _getnotice.unCount = _club.applyGoldList.Count;
                        imList.Add(new UserIDMSG(item.userid, _getnotice, false, false));
                    }
                    LobbySendDataServer.instance.AutoSendData(imList);

                    await BaseHelper.AddOrUpdate(_club);
                    tclubapplylog al = new tclubapplylog();
                    al.applyType = 2;
                    al.clubId = _data.idx;
                    al.Status = 0;
                    al.UserId = _user.UserID;
                    BaseHelper.AddAsync<tclubapplylog>(al);
                    result = 1;
                }
            }
            else result = -2;
            _senddata.result = result;
            string _redata = JsonUtils.Serialize(_senddata);
            return _redata;
        }

        public static async Task<string> GetApplyGoldList(tUser _user, cs_getapplygold_club _data)
        {
            sc_getapplygold_club _senddata = new sc_getapplygold_club() { result = 1, cc = _data.cc };
             
            //自己创建的与自己的管理员的所有列表
            List<ClubApplyGoldSD> _cagold = new List<ClubApplyGoldSD>();
            if (_user.clublist != null)
            {
                foreach (var cidx in _user.clublist)
                {
                    var _club = await BaseHelper.GetShare<tclub>(cidx);
                    if (_club == null || _club.childs == null) continue;
                    var cclubuser = _club.childs.Find((x) => x.userid == _user.UserID);
                    if (cclubuser == null || cclubuser._ismanager == 0) continue;//普能的没权限


                    var applylist = _club.applyGoldList;
                    foreach (var _apply in applylist)
                    {
                        var _userapply = await BaseHelper.GetBase<tUser>(_apply.userid);
                        if (_userapply == null) continue;
                        _cagold.Add(new ClubApplyGoldSD()
                        {
                            clubid = _club.idx,
                            cname = _club.Title,
                            gold = _apply.Gold,
                            name = _userapply.wechatName,
                            state = 0,
                            type = _apply.GoldType,
                            userid = _apply.userid
                        });
                    }
                }
            }
            _senddata.agoldlist = _cagold; 

            string _redata = JsonUtils.Serialize(_senddata);
            return _redata;
        }
        public static async Task<string> AgreeGold(tUser _user, cs_agreegold_club _data)
        {
            sc_agreegold_club _senddata = new sc_agreegold_club() { result = 0, cc = _data.cc };
            int result = 0;
            var _club = await BaseHelper.GetShare<tclub>(_data.idx);
            if (_club != null && _club.childs != null)
            {
                var existapply = _club.applyGoldList.Find((x) => x.userid == _data.tuserid);
                if (existapply == null) result = -4;
                else if (_data.agree.Equals(-1))
                {
                    var d_child = _club.childs.Find(x => x.userid == _data.tuserid);
                    if (existapply.GoldType.Equals(2) && d_child != null) d_child.cgold += existapply.Gold; ////拒绝吧金币加回来

                    _club.applyGoldList.Remove(existapply);

                    result = 1;
                }
                else
                {
                    if (existapply.GoldType == 2)
                    {//club 加 
                        var child = _club.childs.Find(x => x.userid == _data.tuserid);
                        if (child != null)
                        {
                            //child.cgold -= existapply.Gold;
                            _club.gold += existapply.Gold;
                            _club.applyGoldList.Remove(existapply);
                            result = 1;

                            tclubusergoldlog clibuserlog = new tclubusergoldlog();
                            clibuserlog.ClubId = _club.idx;
                            clibuserlog.BeforeGold = child.cgold + existapply.Gold;
                            clibuserlog.AfterGold = child.cgold;
                            clibuserlog.ChangeType = existapply.GoldType;
                            clibuserlog.Gold = existapply.Gold;
                            clibuserlog.UserId = child.userid;
                            BaseHelper.AddAsync(clibuserlog);
                            tCommonlogEx.WriteClubGoldlog(_club.gold, _club.gold - existapply.Gold, existapply.GoldType, _club.idx, existapply.Gold, "", child.userid);
                        }
                    }
                    else
                    {
                        var child = _club.childs.Find(x => x.userid == _data.tuserid);
                        if (child != null)
                        {
                            if (_club.gold < existapply.Gold) result = -5;//club不足
                            else
                            {
                                child.cgold += existapply.Gold;
                                _club.gold -= existapply.Gold;
                                _club.applyGoldList.Remove(existapply);
                                result = 1;

                                tclubusergoldlog clibuserlog = new tclubusergoldlog();
                                clibuserlog.ClubId = _club.idx;
                                clibuserlog.BeforeGold = child.cgold - existapply.Gold;
                                clibuserlog.AfterGold = child.cgold;
                                clibuserlog.ChangeType = existapply.GoldType;
                                clibuserlog.Gold = existapply.Gold;
                                clibuserlog.UserId = child.userid;
                                BaseHelper.AddAsync(clibuserlog);
                                tCommonlogEx.WriteClubGoldlog(_club.gold, _club.gold + existapply.Gold, existapply.GoldType, _club.idx, existapply.Gold, "", child.userid);
                            }
                        }
                    }
                }
                await BaseHelper.AddOrUpdate(_club);
                await ThreadEx.Sleep(1);
                var manager = _club.childs.FindAll(t => t._ismanager > 0);
                List<UserIDMSG> imList = new List<UserIDMSG>();
                foreach (var item in manager)
                {
                    sc_commonnews_n _getnotice = new sc_commonnews_n() { result = 1 };
                    _getnotice.type = 1;
                    _getnotice.unCount = _club.applyGoldList.Count;
                    imList.Add(new UserIDMSG(item.userid, _getnotice, false, false));

                    sc_commonnotice_n commonnoti = new sc_commonnotice_n() { result = 1 };
                    commonnoti.type = 3;
                    commonnoti.UserId = _data.tuserid;
                    commonnoti.clubid = _data.idx;
                    imList.Add(new UserIDMSG(_data.tuserid, commonnoti, false, false));
                    //BaseSendDataServer.AutoNotifySendData(JsonUtils.Serialize((commonnoti)));
                }
                LobbySendDataServer.instance.AutoSendData(imList);
            }
            else result = -1;
            _senddata.result = result;

            string _redata = JsonUtils.Serialize(_senddata);
            return _redata;
        }

        public static async Task<string> AddGold(tUser _user, cs_addgold_club _data)
        {
            sc_addgold_club _senddata = new sc_addgold_club() { result = 0, cc = _data.cc };
            int result = 0;
            var _club = await BaseHelper.GetShare<tclub>(_data.idx);
            if (_club != null && _club.childs != null)
            {
                var child = _club.childs.Find(x => x.userid == _data.tuserid);
                var muser = _club.childs.Find(x => x.userid == _user.UserID);
                if (muser == null || muser._ismanager <= 0) result = -3;//权限不足
                else
                {
                    if (child == null) result = -4;
                    else
                    {
                        if (_data.add.Equals(-1))
                        {//-目标用户的cgold
                            if (child.cgold < _data.gold) result = -5;//club不足
                            else
                            {
                                child.cgold -= _data.gold;
                                muser.cgold += _data.gold; 
                                result = 1;
                                _senddata.gold = muser.cgold;
                                tclubusergoldlog clibuserlog = new tclubusergoldlog();
                                clibuserlog.ClubId = _club.idx;
                                clibuserlog.BeforeGold = child.cgold + _data.gold;
                                clibuserlog.AfterGold = child.cgold;
                                clibuserlog.ChangeType = _data.add;
                                clibuserlog.Gold = _data.gold;
                                clibuserlog.UserId = child.userid;
                                BaseHelper.AddAsync(clibuserlog);
                                tCommonlogEx.WriteClubGoldlog(_club.gold, _club.gold - _data.gold, _data.add, _club.idx, _data.gold, "", child.userid);
                            }
                        }
                        else
                        {
                            if (muser.cgold < _data.gold) result = -5;//club不足
                            else
                            {
                                child.cgold += _data.gold;
                                muser.cgold -= _data.gold; 
                                result = 1; 
                                _senddata.gold = muser.cgold;
                                tclubusergoldlog clibuserlog = new tclubusergoldlog();
                                clibuserlog.ClubId = _club.idx;
                                clibuserlog.BeforeGold = child.cgold - _data.gold;
                                clibuserlog.AfterGold = child.cgold;
                                clibuserlog.ChangeType = _data.add;
                                clibuserlog.Gold = _data.gold;
                                clibuserlog.UserId = child.userid;
                                BaseHelper.AddAsync(clibuserlog);
                                tCommonlogEx.WriteClubGoldlog(_club.gold, _club.gold + _data.gold, _data.add, _club.idx, _data.gold, "", child.userid);
                            } 
                        }
                    }
                    await BaseHelper.AddOrUpdate(_club);
                }
            }
            else result = -1;
            _senddata.result = result;

            string _redata = JsonUtils.Serialize(_senddata);
            return _redata;
        }

        public static async Task< string> UpClublevel(tUser _user, cs_upgradeclub_club _data)
        {
            sc_upgradeclub_club _senddata = new sc_upgradeclub_club() { result = 0, cc = _data.cc };
            int result = 0;
            var _club = await BaseHelper.GetShare<tclub>( _data.clubid);
            if (_club != null)
            {
                var clublenvel = await AllianceHelper.GetLevelCofigBylevel(1, _data.lv);
                if (_club.lv > _data.lv) result = -2;
                else if(_user.diamond < clublenvel.diamond) result = -3;
                else if ((_data.lv - _club.lv) > 1) result = -4;
                else
                {
                    _club.lv = _data.lv;
                    _club.limitcount = clublenvel.maxMember;
                    _user.diamond -= clublenvel.diamond;

                    await BaseHelper.AddOrUpdateBase(_user);
                    tDiamondChangeLog dlog = new tDiamondChangeLog();
                    dlog.BeforeGold = _user.diamond + clublenvel.diamond;
                    dlog.AfterGold = _user.diamond;
                    dlog.ChangeType = 5;
                    dlog.UserId = _user.UserID;
                    dlog.Gold = clublenvel.diamond;
                    BaseHelper.AddAsync(dlog);

                    CommonLogic.updategold(_user, 1);
                    await BaseHelper.AddOrUpdate<tclub>(_club);
                    await BaseHelper.AddOrUpdateBase<tUser>(_user);
                    result = 1;
                }
            }
            else result = -1;

            _senddata.result = result;
            string _redata = JsonUtils.Serialize(_senddata);
            return _redata;
        } 

        /// <summary>
        /// 添加管理员
        /// </summary>
        /// <param name="_user"></param>
        /// <param name="_data"></param>
        /// <returns></returns>
        public static async Task<string> ClubAddmanager(tUser _user, cs_addmanager_club _data)
        {
            sc_addmanager_club _senddata = new sc_addmanager_club() { result = 0, cc = _data.cc };
            int result = 0;
            var _club = await BaseHelper.GetShare<tclub>( _data.idx);
            if (_club!=null)
            {
                if (_data.atype==1)
                {
                    var clv = (await  AllianceHelper.GetLevelCofigBylevel(1, _club.lv)).maxadmin;
                    var adminnum = _club.childs.Where(t => t._ismanager == 1).ToList();
                    if (_club.childs.Where(t => t.userid == _data.uid).Count() <= 0) result = -2;//不在club
                    else if(adminnum!=null && adminnum.Count>= clv) result = -10;
                    else
                    {
                        var child = _club.childs.Where(t => t.userid == _data.uid).FirstOrDefault();
                        child._ismanager = 1;
                        _club.childs.RemoveAll(t => t.userid == _data.uid);
                        _club.childs.Add(child);
                        result = 1;
                    }
                }
                else
                {
                    if (_club.childs.Where(t => t.userid == _data.uid).Count() <= 0) result = -2;//不在club
                    var child = _club.childs.Where(t => t.userid == _data.uid).FirstOrDefault();
                    child._ismanager = 0;
                    _club.childs.RemoveAll(t => t.userid == _data.uid);
                    _club.childs.Add(child);
                    result = 1;
                }
                await BaseHelper.AddOrUpdate(_club);

                sc_commonnotice_n _getnotice = new sc_commonnotice_n() { result = 1};
                _getnotice.type = 2;
                _getnotice.UserId = _data.uid;
                _getnotice.clubid = _data.idx;
                BaseSendDataServer.AutoNotifySendData(JsonUtils.Serialize((_getnotice)));
            }
            else result = -1;
            _senddata.result = result;
            string _redata = JsonUtils.Serialize(_senddata);
            return _redata;
        }
        public static async Task<string> ClubSetSerch(tUser _user, cs_setclub_club _data)
        {
            sc_setclub_club _senddata = new sc_setclub_club() { result = 0, cc = _data.cc };
            int result = 0;
            var _club = await BaseHelper.GetShare<tclub>(_data.idx);
            if (_club != null)
            {
                if (_data.sType == 1) _club.search = _data.isSearch;
                if (_data.sType == 2) _club.manager = _data.isownplay;
                if (_data.sType == 3) _club.Content = _data.desc;
                if (_data.sType == 4) _club.Loc = _data.loc;
                if (_data.sType == 5)
                {
                    var chenkname = await GetShare<tclub>(t => t.Title == _data.clubname);
                    if (chenkname != null) result =  - 5;//同名检测
                    else if (_club.FreeModify == 0)
                    {
                        _club.Title = _data.clubname;
                        _club.FreeModify += 1;
                    }
                    else
                    {
                        if (_user.diamond>=30000)
                        {
                            _user.diamond -= 30000;
                            _club.Title = _data.clubname;
                            await BaseHelper.AddOrUpdateBase<tUser>(_user);
                            tDiamondChangeLog dlog = new tDiamondChangeLog();
                            dlog.BeforeGold = _user.diamond + 30000;
                            dlog.AfterGold = _user.diamond;
                            dlog.ChangeType = 12;
                            dlog.UserId = _user.UserID;
                            dlog.Gold = 30000;
                            BaseHelper.AddAsync(dlog);
                            CommonLogic.updategold(_user, 1);
                        }
                        else
                        {
                            result = -1;//余额不足
                        }
                    }
                }
                if (_data.sType == 6) _club.clubIcon = _data.cluburl;
                await BaseHelper.AddOrUpdate<tclub>(_club);
                if(result==0) result = 1;
            }
            else result = 0;
            _senddata.result = result;
            string _redata = JsonUtils.Serialize(_senddata);
            return _redata;
        }

        public static async Task< string> GetclubChildGold(tUser _user, cs_clubgoldchild_club _data)
        {
            sc_clubgoldchild_club _senddata = new sc_clubgoldchild_club() { result = 0, cc = _data.cc };
            int result = 0;
            var _club = await BaseHelper.GetShare<tclub>(_data.clubId);
            if (_club != null)
            {
                _senddata.club_gold = _club.gold;
                if (_club.childs!=null)
                {
                    _senddata.child_gold = _club.childs.Sum(t=>t.cgold);
                    List<clubchild> list = new List<clubchild>();
                    foreach (var item in _club.childs)
                    {
                        list.Add(new clubchild() 
                        { 
                          cgold = item.cgold,
                          cuserid = item.userid,
                          role = item._ismanager,
                          cname = await tb_UserEx.GetUserNameByUserID(item.userid)
                        });
                    }
                    _senddata.child = list;
                }

                result = 1;
            }
            else result = -1;

            _senddata.result = result;
            return JsonUtils.Serialize(_senddata);
        }


        public static async Task<string> GiveClubGoldToUser(tUser _user, cs_giveclubgold_club _data)
        {
            sc_giveclubgold_club _senddata = new sc_giveclubgold_club() { result = 0, cc = _data.cc };
            int result = 0;
            
            var _club = await BaseHelper.GetShare<tclub>(_data.clubid);
            if (_club != null)
            {
                if (_data.type.Equals(1))
                {
                    if (_club.gold < _data.gold * 100) result = -3;
                    else if (_club.childs != null && _club.childs.Find(t => t.userid == _data.userId) == null) result = -2;
                    else
                    {
                        var cuser = _club.childs.Find(t => t.userid == _data.userId);
                        cuser.cgold += _data.gold * 100;
                         
                        _club.gold -= _data.gold * 100;
                        await BaseHelper.AddOrUpdate(_club);
                        tclubusergoldlog clibuserlog = new tclubusergoldlog();
                        clibuserlog.ClubId = _club.idx;
                        clibuserlog.BeforeGold = cuser.cgold - _data.gold * 100;
                        clibuserlog.AfterGold = cuser.cgold;
                        clibuserlog.ChangeType = _data.type;
                        clibuserlog.Gold = _data.gold * 100;
                        clibuserlog.UserId = cuser.userid;
                        await BaseHelper.AddAsyncWait(clibuserlog);
                        tCommonlogEx.WriteClubGoldlog(_club.gold, _club.gold + _data.gold * 100, _data.type, _club.idx, _data.gold * 100, "", cuser.userid);
                        result = 1;
                    }
                }
                else
                {
                    var cuser = _club.childs.Find(t => t.userid == _data.userId);
                    if (_club.childs != null && cuser == null) result = -2;
                    else if (cuser.cgold < _data.gold * 100) result = -4;
                    else
                    {
                        var s_cuser = _club.childs.Find(t => t.userid == _data.userId);
                        if (s_cuser != null)
                        {
                            s_cuser.cgold -= _data.gold * 100;
                            if (s_cuser.cgold < 100) s_cuser.cgold = 0; 
                        }
                         

                        _club.gold += _data.gold * 100;
                        await BaseHelper.AddOrUpdate(_club);
                        tclubusergoldlog clibuserlog = new tclubusergoldlog();
                        clibuserlog.ClubId = _club.idx;
                        clibuserlog.BeforeGold = cuser.cgold + _data.gold * 100;
                        clibuserlog.AfterGold = cuser.cgold;
                        clibuserlog.ChangeType = _data.type;
                        clibuserlog.Gold = _data.gold * 100;
                        clibuserlog.UserId = cuser.userid;
                        await BaseHelper.AddAsyncWait(clibuserlog);
                        tCommonlogEx.WriteClubGoldlog(_club.gold, _club.gold - _data.gold * 100, _data.type, _club.idx, _data.gold * 100, "", cuser.userid);
                        result = 1;
                    }
                }
            }
            else result = -1;

            _senddata.result = result;
            return JsonUtils.Serialize(_senddata);
        }

       
        public static async Task<string> GetClubGoldLog(tUser _user, cs_clubgolddetail_club _data)
        {
            sc_clubgolddetail_club _senddata = new sc_clubgolddetail_club() { result = 0, cc = _data.cc }; 
            List<GoldDetail> sdata = new List<GoldDetail>();
            if (_data.logtype.Equals(0))
            {
                var data = tCommonlogEx.Getclubgoldlog(_data.clunId);
                if (data != null)
                {
                    foreach (var item in data)
                    {
                        sdata.Add(new GoldDetail()
                        {
                            date = item.CreateTime.ToString("MM/dd"),
                            time = item.CreateTime.ToString("HH:mm"),
                            balance = item.AfterGold,
                            cgold = Math.Abs(item.Gold),
                            type = item.AfterGold > item.BeforeGold ? 1 : 2,
                            type2 = item.ChangeType,
                            userId = item.UserId == 0 ? item.ClubId : item.UserId,
                            name = await GetCnameOrName(item.UserId, item.ClubId),
                            actionName = GetDiamondName(_data.cc, item.ChangeType)
                        });
                    }
                    _senddata.data = sdata;
                }
            }
            else
            {
                var data = await BaseHelper.Getclubgoldlog(_data.clunId, _user.UserID);
                if (data != null)
                {
                    foreach (var item in data)
                    {
                        sdata.Add(new GoldDetail()
                        {
                            date = item.CreateTime.ToString("MM/dd"),
                            time = item.CreateTime.ToString("HH:mm"),
                            balance = item.AfterGold,
                            cgold = item.Gold,
                            type = item.AfterGold > item.BeforeGold ? 1 : 2,
                            type2 = item.ChangeType,
                            userId = item.UserId == 0 ? item.ClubId : item.UserId,
                            name = await GetCnameOrName(item.UserId, item.ClubId),
                            actionName = GetDiamondName(_data.cc, item.ChangeType)
                        });
                    }
                    _senddata.data = sdata;
                }
            }
            _senddata.logtype = _data.logtype;
            _senddata.result = 1;
            return JsonUtils.Serialize(_senddata);
        }

        private static async Task<string> GetCnameOrName(int uid,int cid)
        {
            if (uid != 0) return await tb_UserEx.GetUserNameByUserID(uid);
            if (cid != 0)  return await GetCnameFromCachebyID(cid);
            return "";
        }

        public static string GetDiamondName(int lenum, int ctype)
        {
            string name = "";
            switch (lenum)
            {
                case (int)LangEnuNew.BaseBIG5Language:
                    name = Enum.GetName(typeof(ClubGoldBIGEnum), ctype);
                    break;
                case (int)LangEnuNew.BaseENLanguage:
                    name = Enum.GetName(typeof(ClubGoldENEnum), ctype);
                    break;
                case (int)LangEnuNew.SimplifiedLanguage:
                    name = Enum.GetName(typeof(ClubGoldZHEnum), ctype);
                    break;
                default:
                    name = Enum.GetName(typeof(ClubGoldZHEnum), ctype);
                    break;
            }
            return name;
        }


        public static async Task<string> GetUserBalance(tUser _user, cs_refreshbalance_club _data)
        {
            sc_refreshbalance_club _senddata = new sc_refreshbalance_club() { result = 0, cc = _data.cc };
            int reslut = 0;
            var _club = await BaseHelper.GetShare<tclub>(_data.clubid);
            if (_club!=null)
            {
                if (_club.childs!=null)
                {
                    var child = _club.childs.Find(t=>t.userid== _user.UserID);
                    if (child!=null)
                    {
                        _senddata.gold = child.cgold;
                        reslut = 1;
                    }
                    else _senddata.gold = 0;
                }
                else _senddata.gold = 0;
            }
            else reslut = -1;
            _senddata.result = reslut;
            return JsonUtils.Serialize(_senddata);
        }

        public static async Task<string> BuyClubfund(tUser _user, cs_clubfund_club _data)
        {
            sc_clubfund_club _senddata = new sc_clubfund_club() { result = 0, cc = _data.cc };
            int reslut = 0;
            var _club = await BaseHelper.GetShare<tclub>(_data.clubId);
            if (_club != null)
            {
                var buyconfig = new { gold = 3680000, need_diam = 328000 };//购买默认配置
                if (_user.diamond < buyconfig.need_diam  * _data.num) reslut = -2;
                else
                {
                    _user.diamond -= buyconfig.need_diam * _data.num;
                    _club.fundnum += buyconfig.gold * _data.num;

                    reslut = 1;
                    tDiamondChangeLog dlog = new tDiamondChangeLog();
                    dlog.BeforeGold = _user.diamond + buyconfig.need_diam * _data.num;
                    dlog.AfterGold = _user.diamond;
                    dlog.ChangeType = 7;
                    dlog.UserId = _user.UserID;
                    dlog.Gold = buyconfig.need_diam * _data.num;
                    await BaseHelper.AddAsyncWait(dlog);

                    //tclubfundlog fundlog = new tclubfundlog();
                    //fundlog.ClubId = _club.idx;
                    //fundlog.ChangeType = 1;
                    //fundlog.fnum = _data.num;
                    //fundlog.BalanNum = _club.fundnum;
                    //fundlog.Price = buyconfig.need_diam;
                    //fundlog.fundtotal = buyconfig.gold * _data.num;
                    //await BaseHelper.AddAsyncWait(fundlog);
                    await BaseHelper.AddOrUpdateBase(_user);
                    CommonLogic.updategold(_user, 1);
                    await BaseHelper.AddOrUpdate(_club);
                }
            }
            else reslut = -1;
            _senddata.result = reslut;
            return JsonUtils.Serialize(_senddata);
        }

        public async static Task<string> GiveClubfundToUser(tUser _user, cs_clubfundgrant_club _data)
        {
            sc_clubfundgrant_club _senddata = new sc_clubfundgrant_club() { result = 0, cc = _data.cc };
            var _club = await GetShare<tclub>(_data.clubId);
            int reslut = 0;
            if (_club != null)
            {
                var buyconfig = new { gold = 3680000, need_diam = 328000 };//购买默认配置
                var child = _club.childs.Find(t=>t.userid == _data.userId);
                if(child==null) reslut = -3;
                else if(_data.gnum <=0 ) reslut = -4;
                else if(_club.fundnum < _data.gnum * 100) reslut = -2;
                else
                {
                    
                    tUser user = await GetBase<tUser>(_data.userId);
                    user.Gold += _data.gnum * 100;
                    await BaseHelper.AddOrUpdateBase(user);
                    _club.fundnum -= _data.gnum * 100;
                    reslut = 1;

                    //tclubfundlog fundlog = new tclubfundlog();
                    //fundlog.ClubId = _club.idx;
                    //fundlog.ChangeType = 2;
                    //fundlog.fnum = _data.gnum;
                    //fundlog.Price = buyconfig.need_diam;
                    //fundlog.BalanNum = _club.fundnum;
                    //fundlog.UserId = _data.userId;
                    //fundlog.fundtotal = _data.gnum * 100;
                    //await BaseHelper.AddAsyncWait(fundlog);

                    tgoldchangelog model = new tgoldchangelog();
                    model.UserId = user.UserID;
                    model.BeforeGold = user.GetGoldAndWinGold - _data.gnum * 100;
                    model.gamble = 0;
                    model.Gold = _data.gnum * 100;
                    model.AfterGold = user.GetGoldAndWinGold;
                    model.GameId = 51;
                    model.ChangeType = 45;
                    model.IsRobot = false;
                    await BaseHelper.AddAsyncWait(model);

                    await BaseHelper.AddOrUpdate(_club);
                    CommonLogic.updategold(_user, 2);
                }
            }
            else reslut = -1;

            _senddata.result = reslut;
            return JsonUtils.Serialize(_senddata);
        }

        public static async Task<string> Getfindlog(tUser user, cs_fundlog_club _data)
        {
            sc_fundlog_club _senddata = new sc_fundlog_club() { result = 0, cc = _data.cc }; 
            var dbdata = await GetFondLog(_data.clubId);
            if (dbdata!=null)
            {
                List<fundlog> data = new List<fundlog>();
                foreach (var item in dbdata)
                {
                    data.Add(new fundlog() 
                    { 
                       gold = item.fundtotal,
                       logtime = item.CreateTime.ToString("MM:dd HH:mm"),
                       name = item.ChangeType==2? (await tb_UserEx.GetUserNameByUserID(item.UserId)):"",
                       type = item.ChangeType
                    });
                }
                _senddata.data = data;
            }
            _senddata.result = 1;
            return JsonUtils.Serialize(_senddata);
        }

        public static async Task<string> FundChange(tUser user, cs_fundchange_club _data)
        {
            sc_fundchange_club _senddata = new sc_fundchange_club() { result = 0, cc = _data.cc };
            int reslut = 0;
            if (_data.gold <= 0)
            {
                _senddata.result = -4;
                return JsonUtils.Serialize(_senddata);
            }
            var _club = await GetShare<tclub>(_data.clubid);
            if (_club != null)
            {
                if (_data.type.Equals(1))
                {
                    if (user.GetGoldAndWinGold < _data.gold) reslut = -2;
                    else
                    {
                        user.GoldReduce(_data.gold);
                        _club.inspot += _data.gold;
                        await BaseHelper.AddOrUpdate<tclub>(_club);
                        await BaseHelper.AddOrUpdateBase(user);
                        CommonLogic.updategold(user, 2);


                        tgoldchangelog model = new tgoldchangelog();
                        model.UserId = user.UserID;
                        model.BeforeGold = user.GetGoldAndWinGold - _data.gold;
                        model.gamble = 0;
                        model.Gold = _data.gold;
                        model.AfterGold = user.GetGoldAndWinGold;
                        model.GameId = 51;
                        model.ChangeType = 45;
                        model.IsRobot = false;
                        if (_data.gold > 0) await BaseHelper.AddAsyncWait(model);

                        tclubfundlog fundlog = new tclubfundlog();
                        fundlog.ClubId = _club.idx;
                        fundlog.ChangeType = _data.type;
                        fundlog.Price = (int)_data.gold;
                        fundlog.UserId = _club.UserId;
                        fundlog.Role = 2;
                        fundlog.fundtotal = 1;
                        if (_data.gold>0)  await BaseHelper.AddAsyncWait(fundlog);

                    }
                }
                else
                {
                    if (_club.inspot >= _data.gold)
                    {
                        _club.inspot -= _data.gold;
                        user.Gold += _data.gold;
                        await BaseHelper.AddOrUpdateBase(user);
                        await BaseHelper.AddOrUpdate<tclub>(_club);
                        CommonLogic.updategold(user, 2);

                        tgoldchangelog model = new tgoldchangelog();
                        model.UserId = user.UserID;
                        model.BeforeGold = user.GetGoldAndWinGold - _data.gold;
                        model.gamble = 0;
                        model.Gold = _data.gold;
                        model.AfterGold = user.GetGoldAndWinGold;
                        model.GameId = 51;
                        model.ChangeType = 456;
                        model.IsRobot = false;
                        if (_data.gold > 0) await BaseHelper.AddAsyncWait(model);

                        tclubfundlog fundlog = new tclubfundlog();
                        fundlog.ClubId = _club.idx;
                        fundlog.ChangeType = _data.type;
                        fundlog.Price = (int)_data.gold;
                        fundlog.UserId = _club.UserId;
                        fundlog.Role = 2;
                        fundlog.fundtotal = 1;
                        if (_data.gold > 0) await BaseHelper.AddAsyncWait(fundlog);
                    }
                    else reslut = -1;
                }
                reslut = 1;
            }
            else reslut = -3;

            _senddata.result = reslut;
            return JsonUtils.Serialize(_senddata);

        }





        /// <summary>
        /// 设置保护状态
        /// </summary>
        /// <param name="user"></param>
        /// <param name="_data"></param>
        /// <returns></returns>
        public static async Task<string> ClubSetPwd(tUser user, cs_protectpwd_club _data)
        {
            sc_protectpwd_club _senddata = new sc_protectpwd_club() { result = 0, cc = _data.cc };
            int result = 0;
            tuserInfoEx userinfo = await tb_userinfoEx.GetFromCachebyUserID(user.UserID);
            if (_data.setType==1)
            {
                byte[] b64 = Encoding.Default.GetBytes(_data.pwd);
                userinfo.clubpwd = Convert.ToBase64String(b64);
                userinfo.clubProtect = 1;
                result = 1;
            }
            else if (_data.setType == 0)
            {
                var upwd = Encoding.Default.GetString(Convert.FromBase64String(userinfo.clubpwd));
                if (_data.pwd != upwd)  result = -3;
                else
                {
                    userinfo.clubProtect = 0;
                    result = 1;
                }
            }
            else result = -1;
            await BaseHelper.AddOrUpdateBase(userinfo);
            _senddata.result = result;
            _senddata.setType = _data.setType;
            return JsonUtils.Serialize(_senddata);
        }

        /// <summary>
        /// 密码验证
        /// </summary>
        /// <param name="user"></param>
        /// <param name="_data"></param>
        /// <returns></returns>
        public static async Task<string> PwdChenk(tUser user, cs_protectpwdcheck_club _data)
        {
            sc_protectpwdcheck_club _senddata = new sc_protectpwdcheck_club() { result = 0, cc = _data.cc };
            tuserInfoEx userinfo = await tb_userinfoEx.GetFromCachebyUserID(user.UserID);
            int result = 0;
            if (_data.setType == 1)
            {
                userinfo.clubProtect = 1;
                await BaseHelper.AddOrUpdateBase(userinfo);
                result = 1;
            }
            else
            {
                var upwd = Encoding.Default.GetString(Convert.FromBase64String(userinfo.clubpwd));
                if (_data.pwd != upwd) result = -3;
                else
                {
                    result = 1;
                }
            }
            _senddata.result = result;
            return JsonUtils.Serialize(_senddata);
        }

        #endregion

        #region  
        /// <summary>
        ///  
        /// </summary>
        /// <param name="userId">玩家ID</param>
        /// <param name="title">标题</param>
        /// <param name="content">内容</param>
        /// <returns></returns>
        public static async Task<dynamic> Create(tUser _user, cs_create_club _data)
        {
            var result = new { code = 0,club = new tclub(), msg= "" };

            if(_user.clublist!=null && _user.clublist.Count > 0)
            {
                result = new { code = -1, club = new tclub(), msg = "同一个玩家不允许绑定多个社区！" };
                return result;
            }

            if (_data.name.Length > 50)
            {
                result = new { code = -1, club = new tclub(),msg = "名称超长 小于50字符" };
                return result;
            }
            if (_data.content != null && _data.content != "" && _data.content.Length > 50)
            {
                result = new { code = -3, club = new tclub(), msg = "名称超长 小于50字符" };
                return result;
            }
            tclub chenkname = await GetShare<tclub>(t=>t.Title== _data.name);
            if (chenkname != null)
            {
                result = new { code = -5, club = new tclub(), msg = "存在同名社区" };//同名
                return result;
            }
            tclub oclub = await GetShare<tclub>(t => t.UserId == _user.UserID);
            if (oclub != null)
            {
                result = new { code = -6, club = new tclub(), msg = "玩家只能绑定一个社区" };
                return result;
            }
            List<tclub> clublist = await BaseHelper.GetShareAll<tclub>((x) => x.alliancid == _data.allid);

            tcluballiance all = await BaseHelper.GetShare<tcluballiance>((x) => x.idx == _data.allid);
            if (all != null && clublist!=null && all.limitcount <= clublist.Count)
            {
                result = new { code = -1, club = new tclub(), msg = "联盟社区超额" };
                return result;
            }
            if (all != null && all.insRate < _data.insRate)
            {
                result = new { code = -1, club = new tclub(), msg = "社区基金比例超额，0-" + all.insRate };
                return result;
            }
            if (all != null && all.cgoldRate < _data.cgoldRate)
            {
                result = new { code = -1, club = new tclub(), msg = "社区反利不能比联盟大" };
                return result;
            }
            //3.创建 
            int _tnumber = await ToolsEx.GetClubEightID();
            tclub club = new tclub
            {
                idx = _tnumber,
                UserId = _user.UserID,
                childs = new CacheList<UserClub>() { new UserClub() { userid = _user.UserID, playcount = 0, rate = 0, _ismanager = 2, status = 0 } },
                limitcount = 10,
                CreateDate = DateTime.Now,
                Title = _data.name,
                Loc = _data.content,
                inspot = 0,
                insRate = _data.insRate,
                alliancid = _data.allid,
                clubIcon = _data.iconurl,
                applyUserID = new CacheList<int>(),
                applyGoldList = new CacheList<UserApplyStatus>(),
                cgoldRate = _data.cgoldRate
            };
           
            bool flag = await BaseHelper.Add<tclub>(club);
            if (flag)
            {
                if (_user.clublist == null) _user.clublist = new CacheList<int>();

                _user.clublist.Add(club.idx);
                _user.clublist.RemoveAll(t => t == 0);
                await BaseHelper.AddOrUpdateBase(_user); 
                
                AgentRelationHelper.Add_bigagentLocal(_user.UserID, club.idx,50, out string info);
                CommonLogic.updategold(_user, 3);
            }
            else TraceLogEx.Error("basehelper.add club error:" + _tnumber);
            return new { code = flag ? 1 : -6, club = club, msg = "" };
        }

        /// <summary>
        /// 获取我的
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="pageIndex"></param>
        /// <param name="pageSize"></param>
        /// <returns></returns>
        public static async Task<List<tclub>> Getlistbyuserid(int userid, int pageIndex, int pageSize)
        {
            List<tclub> rdata = new List<tclub>();
            var allclub  = await GetShareAll<tclub>(x => x.idx > 0);
            foreach (var item in allclub)
            {
                if (item.UserId== userid)
                {
                    rdata.Add(item);continue;
                }
                if (item.childs!=null && item.childs.Where(t=>t.userid== userid).Count()>0) rdata.Add(item);
            }
            return rdata.OrderByDescending((x) => x.CreateDate).ToList();

        }
        /// <summary>
        /// 获取我的
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="pageIndex"></param>
        /// <param name="pageSize"></param>
        /// <returns></returns>
        public static async Task<List<tclub>> GetlistbyName(string name, int pageIndex, int pageSize)
        {
            int cid = 0;
            int.TryParse(name,out cid);
            var _clist = await GetShareAll<tclub>(x => (x.Title == name || x.idx == cid) && x.search == true);
            int pageCount;
            int recordCount;
            var lst = MathUtils.GetPaging<tclub>(_clist.OrderByDescending((x) => x.CreateDate).ToList()
               , pageIndex, pageSize
               , out pageCount, out recordCount);

            return lst;

        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="idx"></param> 
        /// <returns></returns>
        public static async Task<int> Apply(int userid, int idx,string message)
        {
            var code =await BaseHelper.GetBase<tuseragent2021relation>(t => t.Code == idx.ToString());
            if (code == null) return -11;

            var _club = await BaseHelper.GetShare<tclub>(code.cidx);
            if (_club != null)
            {
                //if (_club.childs != null && _club.childs.Find(t => t.userid == userid)!=null) return -4;
                if (_club.applyUserID != null && _club.applyUserID.Contains(userid)) return -3;//同时只允许加一次
                if (_club.applyUserID == null) _club.applyUserID = new CacheList<int>();

                var clv = (await AllianceHelper.GetLevelCofigBylevel(1, _club.lv)).maxMember;
                if (_club.childs != null && _club.childs.Count >= clv) return -10;

                _club.applyUserID.Add(userid);
                tclubapplylog al = new tclubapplylog();
                al.applyType = 1;
                al.clubId = code.cidx;
                al.Status = 0;
                al.UserId = userid;
                al.message = message;
                al.ClubCode = idx;
                BaseHelper.AddAsync<tclubapplylog>(al);
                 
               await ThreadEx.DelayCall(1, () => { 
                    List<UserIDMSG> imList = new List<UserIDMSG>();
                    sc_commonnews_n _getnotice = new sc_commonnews_n() { result = 1 };
                    _getnotice.type = 3;
                    _getnotice.unCount = _club.applyUserID.Count;
                    _getnotice.clubid = code.cidx;
                    imList.Add(new UserIDMSG(_club.UserId, _getnotice, false, false));
                    LobbySendDataServer.instance.AutoSendData(imList);
                });

                await BaseHelper.Add<tclub>(_club);

                return 1;
            }
            return -2;
        }


        /// <summary>
        /// 
        /// </summary>
        /// <param name="idx"></param> 
        /// <param name="auserid">操作者用户</param> 
        /// <returns></returns>
        public static async Task<int> Agree(int idx, int tuserid, int auserid, string code)
        {
            var fuser_code =await BaseHelper.GetBase<tuseragent2021relation>(t => t.Code == code.ToString());
            if (fuser_code==null ) return -11;//邀请码数据有误

            var _club = await BaseHelper.GetShare<tclub>(fuser_code.cidx);
            if (_club != null)
            {
                //if (_club.childs != null && _club.childs.Where(t => t.userid == tuserid).Count() > 0) return -2;

                //_club.childs.Add(new UserClub()
                //{
                //    playcount = 0,
                //    userid = tuserid,
                //    _ismanager = 0,
                //    cgold = 0,
                //    status = 0
                //});
                if (_club.applyUserID != null) _club.applyUserID.Remove(tuserid);

                await BaseHelper.AddOrUpdate<tclub>(_club);
                tUser _user = await BaseHelper.GetBase<tUser>(tuserid);
                if (_user != null)
                {
                    if (_user.clublist == null) _user.clublist = new CacheList<int>();

                    _user.clublist.Add(_club.idx);
                    _user.clublist.RemoveAll(t => t == 0);
                    await BaseHelper.AddOrUpdateBase(_user);
                    CommonLogic.updategold(_user, 3);
                }
                tuseragent2021Ex.AddUserAgent2021(tuserid, fuser_code.UserID, fuser_code.cidx, fuser_code.Code.ToString());//特殊用 idx
                await ThreadEx.Sleep(100);

                PushAutoSendData(3, _club.applyUserID.Count, fuser_code.cidx, auserid == 0 ? _club.UserId : auserid);


                sc_commonnotice_n _getnotice = new sc_commonnotice_n() { result = 1};
                _getnotice.type = 1;
                _getnotice.UserId = tuserid;
                _getnotice.clubid = fuser_code.cidx;
                BaseSendDataServer.AutoNotifySendData(JsonUtils.Serialize((_getnotice))); 
                return 1;
            }
            return -1;
        }

        public static async Task<int> RemoveAgree(int idx, int tuserid)
        {
            var _club = await BaseHelper.GetShare<tclub>(idx);
            if (_club != null)
            {
                var p_agentRe = await BaseHelper.GetBase<tuseragent2021relation>(x => x.ParentID == tuserid && x.cidx == idx);
                if (p_agentRe == null)
                {
                    var agentRe = await BaseHelper.GetBase<tuseragent2021relation>(x => x.UserID == tuserid && x.cidx == idx);
                    if (agentRe != null)
                    {
                        tUser _user = await BaseHelper.GetBase<tUser>(tuserid);
                        if (_user != null)
                        {
                            if (_user.clublist == null) _user.clublist = new CacheList<int>();

                            _user.clublist.Remove(_club.idx);
                            agentRe.IsDel = 1;
                            await BaseHelper.AddOrUpdateBase(agentRe);
                            tb_UserEx.UpdateData(_user);
                        }
                        return 1;
                    }
                }
                else return -2;//有下级不能移除
            }
            return -1;
        }

        public static async Task<int> Setting(int idx, int member, int floor, int data, string _notice)
        { 
            var _club = await BaseHelper.GetShare<tclub>(idx);
            if (_club != null)
            {
                _club.member = member;
                _club.floors = floor;
                _club.data = data;
                _club.notice = _notice;
                await BaseHelper.Add<tclub>(_club);
                return 1;
            }
            return -1;
        }

        public static async Task<int> DisMiss(int idx, tUser tUser)
        {
            var _club = await BaseHelper.GetShare<tclub>(idx);
            if (_club != null)
            {
                var childuser = _club.childs.Find(t=>t.userid== tUser.UserID);
                if (_club.UserId == tUser.UserID && _club.gold > 100) return -2;//有金币不允许解散
                if (_club.applyGoldList.Find(t => t.userid == tUser.UserID) != null) return  -5;//还有未处理的请求
                if (_club.UserId == tUser.UserID && _club.childs.Count > 1) return -3;//自己是建立者  需要移除全部玩家才能解散
                if (_club.UserId == tUser.UserID)
                {
                    if(_club.alliancid != 0)
                    {
                        var all = await BaseHelper.GetShare<tcluballiance>(_club.alliancid);
                        if (all != null)
                        {
                            var allchild = all.childs.Find(t => t.clubId == _club.idx);
                            if (allchild != null) return -4;//需要退出解散联盟
                        }
                        else _club.alliancid = 0;
                    }
                }
                if (childuser!=null && childuser.cgold>0)
                {
                    tclubusergoldlog clublog = new tclubusergoldlog();
                    clublog.BeforeGold = childuser.cgold;
                    clublog.AfterGold = 0;
                    clublog.ChangeType = 10;
                    clublog.UserId = tUser.UserID;
                    clublog.ClubId = _club.idx;
                    clublog.Gold = childuser.cgold;
                    await BaseHelper.AddAsyncWait(clublog);
                    _club.gold += childuser.cgold;
                    tCommonlogEx.WriteClubGoldlog(_club.gold, _club.gold - childuser.cgold, 10, _club.idx, childuser.cgold, "", tUser.UserID);
                }
                _club.childs.Remove(childuser);
                await BaseHelper.AddOrUpdate(_club);
                if (_club.UserId == tUser.UserID)  await BaseHelper.Delete<tclub>(_club); //创建者才能删除club
                
                if (tUser.clublist != null)
                {
                    tUser.clublist.Remove(idx);
                    await BaseHelper.AddOrUpdateBase(tUser);
                }
                return 1;
            }
            return -1;
        }
        #endregion

        public static async Task<tclub> GetFromCachebyID(int clubidx)
        {
            if (clubidx == 0) return null;
            tclub club = await BaseHelper.GetShare<tclub>(clubidx);
            return club;
        }

        public static async Task<string> GetCnameFromCachebyID(int clubidx)
        {
            if (clubidx == 0) return "";
            tclub club = await BaseHelper.GetShare<tclub>(clubidx);
            if (club != null) return club.Title;
            else return "";
        }
        /// <summary>
        /// 获取玩家是管理员的club
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="allid"></param>
        /// <returns></returns>
        public async static Task<List<int>> GetUserOwnerClubList(int userid)
        {
            List<int> clist = new List<int>();
            tUser user = await GetBase<tUser>(userid);
            if (user != null && user.clublist != null)
            {
                foreach (var cid in user.clublist)
                {
                    if (cid != 0)
                    {
                        tclub club = await BaseHelper.GetShare<tclub>(cid);
                        if (club != null)
                        {
                            var child = club.childs.Find(t => t.userid == userid);
                            if (child==null || child._ismanager == 0) continue;
                            clist.Add(cid);
                        }
                    }
                }
            }
            return clist;
        }
        /// <summary>
        /// 获取这个玩家是否联盟下的管理员
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="allid"></param>
        /// <returns></returns>
        public static async Task<bool> GetUserIsallianceManger(int userid,int allid)
        {
            if (userid == 0 || allid == 0) return false;
            var clublist = await GetUserOwnerClubList(userid);
            var allen = await GetShare<tcluballiance>(allid);
            if (allen == null || allen.childs==null) return false;
            if (clublist.Intersect(allen.childs.Select(t => t.clubId).ToList()).Count() > 0) return true;
            else return false;
        }
         

        /// <summary>
        /// 获取这个玩家是不是管理员
        /// </summary>
        /// <param name="clubid"></param>
        /// <param name="userid"></param>
        /// <returns></returns>
        public static async Task<bool> GetUserIsManger(int clubid,int userid)
        {
            if (clubid == 0 || userid == 0) return false;
            tclub club = await BaseHelper.GetShare<tclub>(clubid);
            if (club == null) return false;
            var child = club.childs.Find(t=>t.userid== userid);
            if (child == null) return false;
            if(child._ismanager>0) return true;
            return false;
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
        public static async Task< bool> UpdateClubGold(long clubidx, int userid, long cgold, bool isadd=true)
        { 
            if (clubidx == 0) return false;
            tclub club = await BaseHelper.GetShare<tclub>(clubidx);
            if (club == null) return false;
            var child = club.childs.Find(x => x.userid == userid);
            if (child == null) return false;
            if (isadd)
            { 
                child.cgold += cgold;
            }
            else
            {
                if (child.cgold >= cgold)
                { 
                    child.cgold -= cgold;
                    await BaseHelper.AddOrUpdate<tclub>(club);
                    return true;
                }
                else
                {
                    TraceLogEx.Error(string.Format("fetal error  child.cgold:{0} > cgold :{1}", child.cgold, cgold));
                    return false;
                }
            }
            await BaseHelper.AddOrUpdate<tclub>(club);
            return true;
        }

        #region
        public static void UpdateData(tclub _tclub)
        {
            if (_tclub == null) return;
            BaseHelper.AddOrUpdate<tclub>(_tclub);
        }
        #endregion

        /// <summary>
        /// 修改club币   联盟向club发币
        /// </summary>
        /// <param name="_user"></param>
        /// <param name="_data"></param>
        /// <returns></returns>
        public static async Task<string> ModifyClubRelation(tUser _user, cs_setrelation_club _data)
        {
            sc_setrelation_club _senddata = new sc_setrelation_club() { result = 0, cc = _data.cc };
            int result = 0;
            var club = await GetShare<tclub>(_data.idx);
            if ( club != null)
            { 
                var child = club.childs.Where(t => t.userid == _data.userid).FirstOrDefault();
                if (child == null || child._ismanager == 0) result = -10;//不是管理员
                else
                {
                    child.relation = _data.relation;
                    result = 1;

                    club.childs.RemoveAll(t => t.userid == _data.userid);
                    club.childs.Add(child); 
                    await BaseHelper.AddOrUpdate(club);
                }
            }
            else result = -1;

            _senddata.result = result;
            return JsonUtils.Serialize(_senddata);
        }
        public static async Task<string> ModifyClubRights(tUser _user, cs_setrights_club _data)
        {
            sc_setrights_club _senddata = new sc_setrights_club() { result = 0, cc = _data.cc };
            int result = 0;
            var club = await GetShare<tclub>(_data.idx);
            if (club != null)
            {
                var child = club.childs.Where(t => t.userid == _data.userid).FirstOrDefault();
                if (child == null ) result = -10; 
                else
                {
                    child.rights = _data.rights;
                    result = 1;

                    club.childs.RemoveAll(t => t.userid == _data.userid);
                    club.childs.Add(child);
                    await BaseHelper.AddOrUpdate(club);
                }
            }
            else result = -1;

            _senddata.result = result;
            return JsonUtils.Serialize(_senddata);
        }
    }
}
