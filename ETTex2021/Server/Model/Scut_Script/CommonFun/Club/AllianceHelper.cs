using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Common;
using ETModel.Framework.Common.Serialization;
using ETModel.Script.Model;
using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ETModel.Script.CsScript.Action
{
    public class AllianceHelper : BaseHelper
    {
        #region alliance logic 

        /// <summary>
        ///   
        /// </summary>                          
        /// <returns></returns>
        public static async Task<string> CreateAllinace(cs_create_alli _data)
        {
            try
            {
                sc_create_alli _senddata = new sc_create_alli() { _ret = 0, _info = "" };

                ResultInfo result = await Create(_data);
                var m = (dynamic)result.data;

                _senddata.alliName = m.Title;
                _senddata.aId = m.idx;
                _senddata._ret = result.state;
                _senddata._info = result.message;

                string _redata = JsonUtils.Serialize(_senddata);
                return _redata;
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, " 201206091508 club");
                return "";
            }
        }

        /// <summary>
        ///   
        /// </summary>                          
        /// <returns></returns>
        public async static Task<string> GetAllianceList(tUser _user, cs_getalli_alli _data)
        {
            try
            {
                sc_getalli_alli _senddata = new sc_getalli_alli() { result = 0, cc = _data.cc };
                int result = 0;
                var clist = await GetShare<tcluballiance>(_data.aid);
                List<allichild> _clist = new List<allichild>();
                if (clist != null)
                {
                    _senddata.aid = clist.idx;
                    _senddata.cid = clist.clubid;
                    _senddata.aliiname = clist.Title;
                    _senddata.a_maxcount = (await GetLevelCofigBylevel(2, clist.lv)).maxMember;//需要查询等级
                    _senddata.cname = _user.wechatName;
                    _senddata.status = clist.search;
                    _senddata.lv = clist.lv;
                    _senddata.IsSupper = clist.IsSupper;
                    _senddata.alli_gold = clist.gold;
                    var levelconfig = await GetShareAll<tclublevel>((x) => x.type == 2);
                    _senddata.data = levelconfig == null ? null : levelconfig.Select(t => new levelconfig()
                    {
                        diamond = t.diamond,
                        level = t.level,
                        maxmange = t.maxadmin,
                        maxmenber = t.maxMember
                    }).ToList();

                    if (clist.childs != null)
                    {
                        _senddata.a_count = clist.childs.Count();
                        foreach (var club in clist.childs)
                        {
                            tUser cuser = await GetBase<tUser>(club.userid);
                            var c_club = await GetShare<tclub>(club.clubId);
                            //var levelcofig = GetLevelCofigBylevel(1, c_club.lv);
                            if (c_club != null)
                            {
                                _clist.Add(new allichild()
                                {
                                    ccount = c_club.childs.Count(),
                                    cname = c_club.Title,
                                    maxcount = c_club.limitcount,
                                    child_gold = c_club.gold,
                                    cluburl = string.IsNullOrEmpty(c_club.clubIcon) ? "" : ToolsEx.IsHandlePhoto(0, c_club.clubIcon).Trim(),
                                    gold = c_club.childs.Sum(t => t.cgold),
                                    uid = cuser.UserID,
                                    name = cuser == null ? "" : cuser.wechatName,
                                    cid = c_club.idx
                                });
                            }
                            else clist.childs.Remove(club);

                        }
                    }
                    _senddata.child = _clist;
                    result = 1;
                }
                else result = -1;


                _senddata.result = result;
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
        /// 得到club等级配置
        /// </summary>
        /// <param name="_user"></param>
        /// <param name="_data"></param>
        /// <returns></returns>
        public async static Task<string> GetclubAlliConfig(tUser _user, cs_clublvconfig_alli _data)
        {
            sc_clublvconfig_alli _senddata = new sc_clublvconfig_alli() { result = 0, cc = _data.cc };
            int result = 0;
            var club = await GetShare<tclub>(_data.id);
            if (club != null)
            {
                var levelconfig = await GetShareAll<tclublevel>((x) => x.type == 1);
                _senddata.expiretime = DateTime.Now.AddDays(30).ToString("yyyy/MM/dd");
                _senddata.lv = club.lv;
                _senddata.data = levelconfig == null ? null : levelconfig.Select(t => new levelconfig()
                {
                    diamond = t.diamond,
                    level = t.level,
                    maxmange = t.maxadmin,
                    maxmenber = t.maxMember
                }).ToList();
                result = 1;
            }
            else result = -1;
            _senddata.result = result;
            string _redata = JsonUtils.Serialize(_senddata);
            return _redata;
        }

        /// <summary>
        /// 升级联盟
        /// </summary>
        /// <param name="_user"></param>
        /// <param name="_data"></param>
        /// <returns></returns>
        public static async Task<string> UpAllilevel(tUser _user, cs_allilevel_alli _data)
        {
            sc_allilevel_alli _senddata = new sc_allilevel_alli() { result = 0, cc = _data.cc };
            var alli = await GetShare<tcluballiance>(_data.alliId);
            int result = 0;
            if (alli != null)
            {
                if (_data.lv <= alli.lv) result = -2;
                else if ((_data.lv - alli.lv) > 1) result = -4;
                else
                {
                    var levelcofig = await GetLevelCofigBylevel(2, _data.lv);
                    alli.lv = _data.lv;
                    _user.GoldReduce(levelcofig.diamond);
                    tb_UserEx.UpdateData(_user);
                    await BaseHelper.AddOrUpdate<tcluballiance>(alli);

                    tDiamondChangeLog dlog = new tDiamondChangeLog();
                    dlog.BeforeGold = _user.diamond + levelcofig.diamond;
                    dlog.AfterGold = _user.diamond;
                    dlog.ChangeType = 4;
                    dlog.UserId = _user.UserID;
                    dlog.Gold = levelcofig.diamond;
                    BaseHelper.AddAsync(dlog);

                    CommonLogic.updategold(_user, 1);
                    result = 1;
                }
            }
            else result = -1;

            _senddata.result = result;
            string _redata = JsonUtils.Serialize(_senddata);
            return _redata;
        }
        /// <summary>
        /// 开关联盟申请
        /// </summary>
        /// <param name="_user"></param>
        /// <param name="_data"></param>
        /// <returns></returns>
        public static async Task<string> OpenCloseAlliApply(tUser _user, cs_closeapply_alli _data)
        {
            sc_closeapply_alli _senddata = new sc_closeapply_alli() { result = 0, cc = _data.cc };
            var alli = await GetShare<tcluballiance>(_data.alliId);
            int result = 0;
            if (alli != null)
            {
                alli.search = _data.status;
                await BaseHelper.AddOrUpdate<tcluballiance>(alli);
                result = 1;
            }
            else result = -1;

            _senddata.result = result;
            string _redata = JsonUtils.Serialize(_senddata);
            return _redata;
        }
        /// <summary>
        /// 补充联盟币
        /// </summary>
        /// <param name="_user"></param>
        /// <param name="_data"></param>
        /// <returns></returns>
        public static async Task<string> AddalliGold(tUser _user, cs_plusalligold_alli _data)
        {
            sc_plusalligold_alli _senddata = new sc_plusalligold_alli() { result = 0, cc = _data.cc };
            int result = 0;
            var calli = await GetShare<tcluballiance>(_data.alliId);
            if (calli != null)
            {
                var aconfig = new { alligold = 1000000, ndiamond = 1000000 };

                if (_user.diamond < _data.num * aconfig.ndiamond) result = -2;
                else
                {
                    calli.gold += _data.num * aconfig.alligold;
                    _user.diamond -= _data.num * aconfig.ndiamond;

                    tDiamondChangeLog dlog = new tDiamondChangeLog();
                    dlog.BeforeGold = _user.diamond + _data.num * aconfig.ndiamond;
                    dlog.AfterGold = _user.diamond;
                    dlog.ChangeType = 6;
                    dlog.UserId = _user.UserID;
                    dlog.Gold = _data.num * aconfig.ndiamond;
                    BaseHelper.AddAsync(dlog);
                    CommonLogic.updategold(_user, 1);
                    await BaseHelper.AddOrUpdate(calli);
                    await BaseHelper.AddOrUpdateBase(_user);
                    result = 1;
                }
            }
            else result = -1;

            _senddata.result = result;
            return JsonUtils.Serialize(_senddata);
        }
        /// <summary>
        /// 修改club币   联盟向club发币
        /// </summary>
        /// <param name="_user"></param>
        /// <param name="_data"></param>
        /// <returns></returns>
        public static async Task<string> ModifyClubgold(tUser _user, cs_modifyclubgolg_club _data)
        {
            sc_modifyclubgolg_club _senddata = new sc_modifyclubgolg_club() { result = 0, cc = _data.cc };
            var calli = await GetShare<tcluballiance>(_data.alliIid);
            var club = await GetShare<tclub>(_data.clubId);
            int reslut = 0;
            if (_data.gold <= 0)
            {
                reslut = 0;
            }
            else
            {
                if (calli != null && club != null)
                {
                    if (_data.type.Equals(1))  //发放
                    {
                        if (calli.gold < _data.gold * 100)
                        {
                            reslut = -2;//联盟币不足
                        }
                        else
                        {
                            calli.gold -= _data.gold * 100;
                            club.gold += _data.gold * 100;

                            tclubusergoldlog clibuserlog = new tclubusergoldlog();
                            clibuserlog.ClubId = club.idx;
                            clibuserlog.BeforeGold = club.gold - _data.gold * 100;
                            clibuserlog.AfterGold = club.gold;
                            clibuserlog.ChangeType = 8;
                            clibuserlog.Gold = _data.gold * 100;
                            clibuserlog.UserId = 0;
                            await BaseHelper.AddAsyncWait(clibuserlog);
                            tCommonlogEx.WriteClubGoldlog(club.gold, club.gold - _data.gold * 100, 8, club.idx, _data.gold * 100, "", 0);


                            await BaseHelper.AddOrUpdate(calli);
                            await BaseHelper.AddOrUpdate(club);
                            reslut = 1;
                        }
                    }
                    else
                    {
                        if (club.gold < _data.gold * 100)
                        {
                            reslut = -3;//回收club币不足
                        }
                        else
                        {
                            club.gold -= _data.gold * 100;
                            calli.gold += _data.gold * 100;
                            if (club.gold < 100) club.gold = 0;//不足1  直接清0 

                            tclubusergoldlog clibuserlog = new tclubusergoldlog();
                            clibuserlog.ClubId = club.idx;
                            clibuserlog.BeforeGold = club.gold + _data.gold * 100;
                            clibuserlog.AfterGold = club.gold;
                            clibuserlog.ChangeType = 9;
                            clibuserlog.Gold = _data.gold * 100;
                            clibuserlog.UserId = 0;
                            await BaseHelper.AddAsyncWait(clibuserlog);
                            tCommonlogEx.WriteClubGoldlog(club.gold, club.gold + _data.gold * 100, 9, club.idx, _data.gold * 100, "", 0);

                            await BaseHelper.AddOrUpdate(calli);
                            await BaseHelper.AddOrUpdate(club);
                            reslut = 1;
                        }
                    }
                }
                else reslut = -1;
            }
            _senddata.result = reslut;
            return JsonUtils.Serialize(_senddata);
        }

        /// <summary>
        ///   
        /// </summary>                          
        /// <returns></returns>
        public static async Task<string> GetSearchList(tUser _user, cs_search_alli _data)
        {
            sc_search_alli _senddata = new sc_search_alli() { result = 0, cc = _data.cc };
            try
            {
                var calli = await BaseHelper.GetShare<tcluballiance>(_data.idx);
                if (calli != null)
                {
                    _senddata.alliname = calli.Title;
                    _senddata.idx = calli.idx;
                    _senddata.result = 1;

                }
                else _senddata.result = -1;

                string _redata = JsonUtils.Serialize(_senddata);
                return _redata;
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, " 201904111538 cs_search_alli ");
                return JsonUtils.Serialize(_senddata);
            }
        } 

        public static async Task<string> DisMiss(tUser _user, cs_dismissalliance_alli _data)
        {
            sc_dismissalliance_alli _senddata = new sc_dismissalliance_alli() { result = 0, cc = _data.cc };
            int result = 0;
            var calli = await BaseHelper.GetShare<tcluballiance>(_data.cid);
            if (calli != null)
            {
                if (_data.clubid != calli.clubid)
                {
                    var clublist = await BaseHelper.GetShare<tclub>(_data.clubid);
                    if (clublist.gold > 100) result = -4;
                    else if (clublist.childs.Sum(t => t.cgold / 100) > 0) result = -5;
                    else
                    {
                        clublist.gold = 0;
                        clublist.alliancid = 0;
                        await BaseHelper.AddOrUpdate<tclub>(clublist);
                        calli.childs.RemoveAll(t => t.clubId == _data.clubid);
                        await BaseHelper.AddOrUpdate<tcluballiance>(calli);
                        result = 1;
                    }
                }
                else
                {
                    if (calli.childs.Count() > 1) result = -2;
                    else if (calli.diam > 0) result = -3;
                    else
                    {
                        var club = await BaseHelper.GetShare<tclub>(calli.clubid);
                        if (club.childs.Sum(t => t.cgold / 100) > 0)
                        {
                            result = -5;
                        }
                        else
                        {
                            club.alliancid = 0;
                            club.gold = 0;
                            await BaseHelper.AddOrUpdate(club);
                            await BaseHelper.Delete<tcluballiance>(calli);
                            result = 1;
                        }
                    }
                }

            }
            else result = -1;

            _senddata.result = result;
            string _redata = JsonUtils.Serialize(_senddata);
            return _redata;
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
        public static async Task<ResultInfo> Create(cs_create_alli data)
        {
            ResultInfo info = new ResultInfo() { state = 1,message = "0",data = new tcluballiance()};
            
            //1.一个人能创建几个
            
            if (data.name.Length > 50)
            {
                info.state = -2;
                info.message = "名称超长";
                return info; //pout普通联盟余额不足
            }
            if (data.cgoldRate<=0 || data.insRate<=0)
            {
                info.state = -3;
                info.message = "必须初始化反利值和基金比例！";
                return info;
            }
            List<tcluballiance> alli = await BaseHelper.GetShareAll<tcluballiance>(t=>t.Title == data.name);
            if (alli!=null && alli.Count()>0)
            {
                info.state = -4;//同名
                info.message = "不允许同名联盟！";
                return info;
            }

            //3.创建

            int _tnumber = await ToolsEx.GetClubEightID();
            tcluballiance mail = new tcluballiance
            {
                idx = _tnumber,
                UserId = 0,
                lv = 1,
                childs = new CacheList<ClubChild>() { new ClubChild() { userid = 0, rate = 0, _ismanager = 2, clubId = 0 } },
                limitcount = data.limitcount,
                CreateDate = DateTime.Now,
                Title = data.name,
                IsSupper = false,
                insRate = data.insRate,
                cgoldRate = data.cgoldRate,
                applyclubidx = new CacheList<int>(),
                clubid = 0
            };
            bool flag = await BaseHelper.Add<tcluballiance>(mail);
            info.state = flag ? 0 : 1;
            info.data = mail;
            return info;
        }


        /// <summary>
        /// 获取我的
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="pageIndex"></param>
        /// <param name="pageSize"></param>
        /// <returns></returns>
        public static async Task<List<tcluballiance>> GetlistbyName(string name, int pageIndex, int pageSize)
        {
            var _clist = await GetShareAll<tcluballiance>(x => x.Title.Contains(name));
            int pageCount;
            int recordCount;
            var lst = MathUtils.GetPaging<tcluballiance>(_clist.OrderByDescending((x) => x.CreateDate).ToList()
               , pageIndex, pageSize
               , out pageCount, out recordCount);

            return lst;

        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="idx"></param> 
        /// clubid  申请人联盟id
        /// <returns></returns>
        public static async Task<int> Apply(int userid, int idx, int clubid)
        {
            var _alli = await BaseHelper.GetShare<tcluballiance>(idx);
            if (_alli != null && _alli.search == false)
            {
                if (_alli.applyclubidx.Contains(clubid)) return -3;
                var manconfig = await GetLevelCofigBylevel(2, _alli.lv);
                if (_alli.childs.Count >= manconfig.maxMember) return -5;//最大成员数量


                var ownclub = await BaseHelper.GetShare<tclub>(clubid);
                if (ownclub != null)
                {
                    var ownalli = await BaseHelper.GetShare<tcluballiance>(ownclub.alliancid);
                    if (ownalli != null) return -4;//只能加入/创建一个联盟
                }

                _alli.applyclubidx.Add(clubid);
                tclubapplylog al = new tclubapplylog();
                al.applyType = 3;
                al.clubId = _alli.clubid;//申请的目标club主键
                al.ownClubId = clubid;
                al.Status = 0;
                al.UserId = userid;
                await BaseHelper.AddAsyncWait(al);

                List<UserIDMSG> imList = new List<UserIDMSG>();
                sc_commonnews_n _getnotice = new sc_commonnews_n() { result = 1 };
                _getnotice.type = 3;
                _getnotice.unCount = _alli.applyclubidx.Count;
                _getnotice.clubid = _alli.clubid;
                imList.Add(new UserIDMSG(_alli.UserId, _getnotice, false, false));
                LobbySendDataServer.instance.AutoSendData(imList);

                await BaseHelper.Add<tcluballiance>(_alli);
                return 1;
            }
            return -2;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="idx"></param> 
        /// <returns></returns>
        public static async Task<int> Agree(int idx, int tuserid, long clubid, tcluballiance allian)
        {
            if (allian != null)
            {
                var child = allian.childs.Find(t => t.clubId == clubid);
                if (child == null)
                {
                    allian.childs.Add(new ClubChild()
                    {
                        userid = tuserid,
                        _ismanager = 0,
                        cgold = 0,
                        clubId = (int)clubid
                    });
                    return 1;
                }
                else return -4;
            }
            return -1;
        }

        public static async Task<int> Setting(int idx, bool manager)
        {
            var _club = await BaseHelper.GetShare<tcluballiance>(idx);
            if (_club != null)
            {
                _club.manager = manager;

                await BaseHelper.Add<tcluballiance>(_club);
                return 1;
            }
            return -1;
        }

        /// <summary>
        /// 1club配置    2联盟配置
        /// </summary>
        /// <param name="type"></param>
        /// <param name="level">d等级</param>
        /// <returns></returns>
        public static async Task<tclublevel> GetLevelCofigBylevel(int type, int level)
        {
            var levelconfig = await BaseHelper.GetShare<tclublevel>((x) => x.type == type && x.level == level);
            if (levelconfig != null) return levelconfig;
            else
            {
                if (type.Equals(2) && level > 6)
                {
                    //联盟需要无限升级 递增2
                    return new tclublevel() { level = level, maxMember = level + 2 };
                }
                return new tclublevel();
            }

        }

        #endregion

        #region alliance

        /// <summary>
        /// 获取联盟
        /// </summary>
        /// <param name="idx"></param>
        /// <returns></returns>
        public static async Task<tcluballiance> GetUnionByIdx(int idx)
        {
            if (idx == 0) return null;
            tcluballiance clubunion = await BaseHelper.GetShare<tcluballiance>(idx);
            return clubunion;
        }

        public static async void UpdateData(tcluballiance _tclubunion)
        {
            if (_tclubunion == null) return;
            await BaseHelper.AddOrUpdate<tcluballiance>(_tclubunion);
        }
        #endregion


    }
}
