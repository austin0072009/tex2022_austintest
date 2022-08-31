using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Crazy2018_Sys_Common;
using Crazy2018_Sys_ViewEntity;
using System.Linq.Expressions;
using System.Data.Entity.SqlServer;

namespace Crazy2018_Sys_Service
{
    public class GameService : BaseService<tgameinfo, int, texas_2021Entities>, IGameService
    {
        public DataResults<GameInfoView> GetGameData(DPage page, string platType,string isopen)
        {
            DataResults<GameInfoView> result = new DataResults<GameInfoView>();
            if (page == null) page = new DPage();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            try
            {
                Expression<Func<tgameinfo, bool>> fun = w => w != null;//&&w.deleteState==false;
                if (!string.IsNullOrEmpty(platType))
                {
                    int.TryParse(platType,out int ptype);
                    fun = fun.And(w => w != null && w.platType== ptype);
                }
                if (!string.IsNullOrEmpty(isopen))
                {
                    bool _isopen = isopen != "0";
                    fun = fun.And(w => w != null && w.isopen == _isopen);
                }
                if (!string.IsNullOrEmpty(page.Keywords))
                {
                    fun = fun.And(w => w != null && w.name.Contains(page.Keywords));
                }
              //  var data = GetEntityLisrByWhere(fun);
                result.TotalCount = GetCount(fun);

                result.Data = GetEntityLisrByWhere(fun).Skip((page.PageIndex - 1) * page.PageSize)
                    .Take(page.PageSize).OrderByDescending(w => w.modifyTime).ToList()
                    .Select(w => new GameInfoView
                    {
                        CreatTime = w.modifyTime.Value.ToString("yyyy-MM-dd HH:mm:ss"),
                        GameIntroduce = w.desc,
                        GameRule = w.gameRule,
                        ID = w.id,
                        IsEnableDesc= w.isHot.ToString(),
                        ModifyUser = w.modifyUser,
                        Name = w.name,
                        isHot = w.isHot.Value,
                        IsEnable = w.isopen.Value,
                      //  DeleteState = w.deleteState.Value,
                        Sort = w.Sort.Value,
                        platType=w.platType==0?"客户端":w.platType==1?"tp":"jdb",
                      //  jdbType= (int)w.jdbType,
                      type=(int)w.type,
                        IsRun= w.IsRun==1?"正常":"正在维护中..."
                    }).ToList();
                result.Message = "获取数据成功";
            }
            catch (Exception ex)
            {
                Log.Error("获取游戏信息", ex.Message);
                result.Code = (int)Status.fail;
                result.Message = "获取数据失败";
            }
            return result;
        }

        /// <summary>
        /// 根据类型获取游戏
        /// </summary>
        /// <param name="typeid"></param>
        /// <returns></returns>
        public DataResults<GameInfoView> GetGameInfoDataByTypeId(string typeid)
        {
            DataResults<GameInfoView> result = new DataResults<GameInfoView>();
            try
            {
                Expression<Func<tgameinfo, bool>> fun = w => w != null;//&&w.deleteState==false;

                if (!string.IsNullOrEmpty(typeid))
                {
                    int.TryParse(typeid,out int ptype);
                    fun = fun.And(w => w != null && w.platType== ptype);
                }
                var data = GetEntityLisrByWhere(fun);
                result.TotalCount = data.Count;
                result.Data = data.OrderBy(w => w.isopen).ToList()
                    .Select(w => new GameInfoView
                    {
                        CreatTime = w.modifyTime.Value.ToString("yyyy-MM-dd HH:mm:ss"),
                        GameIntroduce = w.desc,
                        GameRule = w.gameRule,
                        ID = w.id,
                        IsEnableDesc = w.isHot.ToString(),
                        ModifyUser = w.modifyUser,
                        Name = w.name,
                        IsEnable = w.isopen.Value,
                        //  DeleteState = w.deleteState.Value,
                        Sort = w.Sort.Value,
                        platType = w.platType == 0 ? "客户端" : w.platType == 1 ? "tp" : "jdb",
                        //  jdbType= (int)w.jdbType,
                        type = (int)w.type,
                        IsRun = w.IsRun == 0 ? "正常" : "正在维护中..."
                    }).ToList();
                result.Message = "获取数据成功";
            }
            catch (Exception ex)
            {
                Log.Error("获取游戏信息", ex.Message);
                result.Code = (int)Status.fail;
                result.Message = "获取数据失败";
            }
            return result;
        }
        /// <summary>
        /// 根据类型获取游戏
        /// </summary>
        /// <param name="typeid"></param>
        /// <returns></returns>
        public DataResults<GameInfoView> GetAllgameinfo(string typeid,string gametypesea)
        {
            DataResults<GameInfoView> result = new DataResults<GameInfoView>();
            try
            {
                Expression<Func<tgameinfo, bool>> fun = w => w != null&&w.type!=2 ;

                if (!string.IsNullOrEmpty(typeid)&&typeid!="0")
                {
                    fun = fun.And(w => w != null && w.type.ToString() == typeid);
                }
                if (!string.IsNullOrEmpty(gametypesea))
                {
                    bool isopengame = gametypesea == "false" ? false : true;
                    fun = fun.And(w => w != null && w.isopen == isopengame);
                }
                var data = GetEntityLisrByWhere(fun);
                result.TotalCount = data.Count;
                result.Data = data.OrderBy(w => w.isopen).ToList()
                    .Select(w => new GameInfoView
                    {
                        CreatTime = w.modifyTime.Value.ToString("yyyy-MM-dd HH:mm:ss"),
                        GameIntroduce = w.desc,
                        GameRule = w.gameRule,
                        ID = w.id,
                        IsEnableDesc = w.isHot.ToString(),
                        ModifyUser = w.modifyUser,
                        Name = w.name,
                        IsEnable = w.isopen.Value,
                       icon=w.icon,
                       gameurl=w.gameurl,
                        Sort = w.Sort.Value,
                        platType = w.platType == 0 ? "客户端" : w.platType == 1 ? "tp" : "jdb",
                        //  jdbType= (int)w.jdbType,
                        type = (int)w.type,
                        IsRun = w.IsRun == 0 ? "正常" : "正在维护中..."
                    }).ToList();
                result.Message = "获取数据成功";
            }
            catch (Exception ex)
            {
                Log.Error("获取游戏信息", ex.Message);
                result.Code = (int)Status.fail;
                result.Message = "获取数据失败";
            }
            return result;
        }
        public DataResults<GameInfoView> GetGameInfoData(DPage page)
        {
            DataResults<GameInfoView> result = new DataResults<GameInfoView>();
            if (page == null) page = new DPage();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            try
            {
                Expression<Func<tgameinfo, bool>> fun = w => w != null;//&&w.deleteState==false;
               
                if (!string.IsNullOrEmpty(page.Keywords))
                {
                    fun = fun.And(w => w != null && w.name.Contains(page.Keywords) || w.desc.Contains(page.Keywords) || w.gameRule.Contains(page.Keywords));
                }
              //  var data = GetEntityLisrByWhere(fun);
                result.TotalCount = GetCount(fun);
                result.Data = GetEntityLisrByWhere(fun).OrderBy(w => w.isopen)
                    .Skip((page.PageIndex - 1) * page.PageSize)
                    .Take(page.PageSize).ToList()
                    .Select(w => new GameInfoView
                    {
                        CreatTime = w.modifyTime.Value.ToString("yyyy-MM-dd HH:mm:ss"),
                        GameIntroduce = w.desc,
                        GameRule = w.gameRule,
                        ID = w.id,
                        IsEnableDesc = w.isHot.ToString(),
                        ModifyUser = w.modifyUser,
                        Name = w.name,
                        IsEnable = w.isopen.Value,
                        //  DeleteState = w.deleteState.Value,
                        Sort = w.Sort.Value,
                        platType = w.platType == 0 ? "客户端" : w.platType == 1 ? "tp" : "jdb",
                        //  jdbType= (int)w.jdbType,
                        type = (int)w.type,
                        IsRun = w.IsRun == 0 ? "正常" : "正在维护中..."
                    }).ToList();
                result.Message = "获取数据成功";
            }
            catch (Exception ex)
            {
                Log.Error("获取游戏信息", ex.Message);
                result.Code = (int)Status.fail;
                result.Message = "获取数据失败";
            }
            return result;
        }
        public DataResults<GameInfoView> GetGameInfoData()
        {
            DataResults<GameInfoView> result = new DataResults<GameInfoView>();
           
            try
            {
                Expression<Func<tgameinfo, bool>> fun = w => w != null;
                fun = fun.And(x=>x.type!=2);
                var data = GetEntityLisrByWhere(fun);
                result.TotalCount = data.Count;
                result.Data = data.OrderBy(w => w.Sort)
                    .Select(w => new GameInfoView
                    {
                        CreatTime = w.modifyTime.Value.ToString("yyyy-MM-dd HH:mm:ss"),
                        GameIntroduce = w.desc,
                        GameRule = w.gameRule,
                        ID = w.id,
                        icon=w.icon,
                        IsEnableDesc = w.isHot.ToString(),
                        ModifyUser = w.modifyUser,
                        Name = w.name,
                        IsEnable = w.isopen.Value,
                        gameurl = w.gameurl,
                        Sort = w.Sort.Value,
                        platType = w.platType == 0 ? "客户端" : w.platType == 1 ? "tp" : "jdb",
                        type = (int)w.type,
                        IsRun = w.IsRun == 0 ? "正常" : "正在维护中..."
                    }).ToList();
                result.Message = "获取数据成功";
            }
            catch (Exception ex)
            {
                Log.Error("获取游戏信息", ex.Message);
                result.Code = (int)Status.fail;
                result.Message = "获取数据失败";
            }
            return result;
        }
        /// <summary>
        /// 根据类型获取游戏
        /// </summary>
        /// <param name="typeid"></param>
        /// <returns></returns>
        public DataResults<GameInfoView> GetGameInfoDataById(string id)
        {
            DataResults<GameInfoView> result = new DataResults<GameInfoView>();
            try
            {
                Expression<Func<tgameinfo, bool>> fun = w => w != null;//&&w.deleteState==false;

                if (!string.IsNullOrEmpty(id))
                {
                    int.TryParse(id, out int ptype);
                    fun = fun.And(w => w != null && w.id == ptype);
                }
                var data = GetEntityLisrByWhere(fun);
                result.TotalCount = data.Count;
                result.Data = data.OrderBy(w => w.isopen).ToList()
                    .Select(w => new GameInfoView
                    {
                        CreatTime = w.modifyTime.Value.ToString("yyyy-MM-dd HH:mm:ss"),
                        GameIntroduce = w.desc,
                        GameRule = w.gameRule,
                        ID = w.id,
                        IsEnableDesc = w.isHot.ToString(),
                        ModifyUser = w.modifyUser,
                        Name = w.name,
                        IsEnable = w.isopen.Value,
                        gameurl=w.gameurl,
                        icon=w.icon,
                        Sort = w.Sort.Value,
                        platType = w.platType == 0 ? "客户端" : w.platType == 1 ? "tp" : "jdb",
                        type = (int)w.type,
                        IsRun = w.IsRun == 0 ? "正常" : "正在维护中..."
                    }).ToList();
                result.Message = "获取数据成功";
            }
            catch (Exception ex)
            {
                Log.Error("获取游戏信息", ex.Message);
                result.Code = (int)Status.fail;
                result.Message = "获取数据失败";
            }
            return result;
        }

        public DataResults<RankView> GetGameRankData(DPagePara page)
        {
            DataResults<RankView> result = new DataResults<RankView>();
            if (page == null) page = new DPagePara();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            try
            {
                using (texas_2021Entities dbhrlper = new texas_2021Entities())
                {
                    Expression<Func<tuseragent2019, bool>> fun = w => w != null;
                    IQueryable<tuseragent2019> data = dbhrlper.tuseragent2019.OrderByDescending(w => new { w.watergoldadd, w.watergoldreduce });
                    IQueryable<tuser> user = dbhrlper.tuser.OrderBy(t=>t.RegTime);
                    if (!string.IsNullOrEmpty(page.Keywords))
                    {

                        int tempid = 0;
                        int.TryParse(page.Keywords, out tempid);
                        if (tempid > 0)
                            fun = fun.And(w => w != null && w.UserID == tempid);
                        data = data.Where(fun).OrderByDescending(w => new { w.watergoldadd, w.watergoldreduce });
                        result.TotalCount = data.Count();

                    }
                    if (page.starttime!=null && page.endtime!=null)
                    {
                        data = data.Where(st => st.lastdealtime > page.starttime && st.lastdealtime < page.endtime);
                    }


                    var _data = from a in data
                                join b in user on a.UserID equals b.UserID

                                //join c in dbhrlper.tgameinfo on b.UserID equals
                                select new RankView
                                {
                                    watergoldadd = a.watergoldadd.Value /100,
                                    watergoldreduce = a.watergoldreduce.Value / 100,
                                    UserID = a.UserID,
                                    winreduce = (a.watergoldadd.Value-a.watergoldreduce.Value)/100,
                                    UserName = b.wechatName,
                                    isRobot = b.isRobot.Value,
                                    isRebot = b.isRobot.Value == 0 ? "否" : "是"
                                };
                    var data_two = from a in _data select a;
                    if (page.isRobot != -1)
                    {
                        _data = data_two.Where(t => t.isRobot == page.isRobot);
                    }

                    if (page.orderby.Equals("1")) _data = data_two.OrderByDescending(t => t.watergoldadd);
                    if (page.orderby.Equals("1_1")) _data = data_two.OrderBy(t => t.watergoldadd);
                    if (page.orderby.Equals("2")) _data = data_two.OrderByDescending(t => t.watergoldreduce);
                    if (page.orderby.Equals("2_1")) _data = data_two.OrderBy(t => t.watergoldreduce);
                    if (page.orderby.Equals("3")) _data = data_two.OrderByDescending(t => t.winreduce);
                    if (page.orderby.Equals("3_1")) _data = data_two.OrderBy(t => t.winreduce);
                    result.TotalCount = data_two.Count();

                    if (page.orderby.Equals("0"))
                        _data = _data.OrderByDescending(w => new { w.watergoldadd, w.watergoldreduce });
                    

                    result.Data = _data.Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList();

                    result.Message = "获取数据成功";
                }
            }
            catch (Exception ex)
            {
                
                result.Code =(int)Status.fail;
                result.Message = "获取数据失败";
            }
            return result;
        }

        public DataResults<OnlineInfoView> GetOnlineInfo(string sTime, string eTime)
        {
            DataResults<OnlineInfoView> result = new DataResults<OnlineInfoView>();
            result.Message = "获取成功";
            try
            {
                DateTime startTime = DateTime.Now.AddDays(-1);
                DateTime endTime = DateTime.Now;
                if (!string.IsNullOrEmpty(sTime))
                    DateTime.TryParse(sTime, out startTime);
                if (!string.IsNullOrEmpty(eTime))
                    DateTime.TryParse(eTime, out endTime);
                using (texas_2021Entities dbhelper = new texas_2021Entities())
                {
                    var entitys = dbhelper.tonlineinfo
                          .Where(w => w.CreateTime >= startTime && w.CreateTime <= endTime).OrderByDescending(w => w.CreateTime).ToList()
                          .Select(w => new OnlineInfoView
                          {
                              CreatTime = w.CreateTime.Value.ToString("yyyy-MM-dd HH:mm:ss"),
                              OnlineCount = w.OnlineCount.Value,
                              Id=w.id
                          });
                    result.Data = entitys.ToList();
                }

            }
            catch (Exception ex)
            {
                Log.Error("获取在线人数", ex.Message);
                result.Code = (int)Status.fail;
                result.Message = "获取数据失败";
            }
            return result;

        }

        public DataResult<RoomInfoView> GetRoomInfoById(int id)
        {
            DataResult<RoomInfoView> result = new DataResult<RoomInfoView> {Message = "获取成功" };

            try
            {
                using (texas_2021Entities dbhelper = new texas_2021Entities())
                {
                    var entity = dbhelper.tgamelevelinfo.Where(w => w.Id == id).FirstOrDefault();
                    RoomInfoView rooInfo = new RoomInfoView();
                    if (entity != null)
                    {
                        rooInfo.BaseRate = entity.Baserate.Value;
                        rooInfo.CreatTime = entity.modifyTime.Value.ToString("yyyy-MM-dd HH:mm:ss");
                        rooInfo.Name = entity.Name;
                        rooInfo.ModifyUser = entity.modifyUser;
                        rooInfo.Min = entity.C_min.Value;
                        rooInfo.Max = entity.C_max.Value;
                        rooInfo.OnlineCount = entity.onlineCount.Value;
                        rooInfo.OpenTableCount = entity.openTableCount.Value;
                        rooInfo.Remark = entity.Description;
                        rooInfo.IsEnable = entity.isEnable.Value == 1 ? true : false;
                        rooInfo.IsEnableDesc = entity.isEnableDesc;
                        rooInfo.gameType = entity.gametype.Value;
                        rooInfo.GametypeDesc = entity.gametypeDesc;
                        rooInfo.gameid = entity.gameid.Value;
                        result.Data = rooInfo;
                    }
                    else
                    {
                        result.Code = (int)Status.fail;
                        result.Message = "数据为空";
                    }
                }
            }
            catch (Exception ex)
            {
                Log.Error("获取房间信息", ex.Message);
                result.Code = (int)Status.fail;
                result.Message = ex.Message;
            }
            return result;
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="starttime"></param>
        /// <param name="endtime"></param>
        /// <param name="type">1表示在线   2表示注册</param>
        /// <returns></returns>
        public int StatisticsstarttimeToEndtime(DateTime starttime, DateTime endtime,string type)
        {
            if (type.Equals("1"))
            {
                return GetOnlineNumdate(starttime, endtime);
            }
            if (type.Equals("2"))
            {
                return GetRegisterNumDate(starttime, endtime);
            }
            return -1;
        }
        public int Totaljacket()
        {
            try
            {
                using (texas_2021Entities dbhelper = new texas_2021Entities())
                {
                    //&& w.RoomID== roomid
                    var entitys = dbhelper.tjackpot
                          .Where(w => w.gameid == 52).Sum(t => t.jackpot) / 100;
                    return (int)entitys;
                }
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
        public int StatisticsstarttimeToEndtimeJackpot(DateTime starttime, DateTime endtime,int roomid)
        {
            try
            {
                using (texas_2021Entities dbhelper = new texas_2021Entities())
                {
                    //&& w.RoomID== roomid
                    var entitys = dbhelper.tjackpotaddlog
                          .Where(w => w.CreateTime >= starttime && w.CreateTime <= endtime).Sum(t=>t.Gold)/100;
                    return (int)entitys;
                }
            }
            catch (Exception ex)
            {
                return 0;
            }
        }

        public int GetOnlineNumdate(DateTime starttime, DateTime endtime)
        {
            try
            {
                using (texas_2021Entities dbhelper = new texas_2021Entities())
                {
                    var list = dbhelper.tonlineinfo.Where(w => w.CreateTime >= starttime && w.CreateTime <= endtime).Select(t=>new { t.OnlineCount}).ToList();

                    var entitys = list.Sum(t=>(int?)t.OnlineCount) / list.Count();
                    return entitys.Value;
                }
            }
            catch (Exception ex)
            {

                return 0;
            }
        }
        public int GetRegisterNumDate(DateTime starttime, DateTime endtime)
        {
            try
            {
                using (texas_2021Entities dbhelper = new texas_2021Entities())
                {
                    var entitys = dbhelper.tuser
                          .Where(w => w.RegTime  >= starttime && w.RegTime<= endtime).ToList().Count();
                    return entitys;
                }
            }
            catch (Exception ex)
            {
                return 0;
            }
          
        }
        /// <summary>
        /// 得到游戏房间等级
        /// </summary>
        /// <returns></returns>
        public List<Dictionary<int,string>> GetGameLevel()
        {
            try
            {
                using (texas_2021Entities dbhelper = new texas_2021Entities())
                {
                    var entitys = dbhelper.tgamelevelinfo
                          .Where(w => w.gameid==52).ToList();
                    return entitys.Select(t => new Dictionary<int, string>() { { t.Id, t.Name }}).ToList();
                }
            }
            catch (Exception ex)
            {
                throw new ArgumentNullException("GetGameLevel   erro");
            }
        }

        public static string NowDayStrTotalRecords(List<onedayTimeDailyBriefingInfo> entities)
        {
            if (entities == null)
                throw new ArgumentNullException("NowDayStrTotalRecords   erro");

            var time00T01 = entities.Sum(e => e.Time00T01TotalRecords);
            var time01T02 = entities.Sum(e => e.Time01T02TotalRecords);
            var time02T03 = entities.Sum(e => e.Time02T03TotalRecords);
            var time03T04 = entities.Sum(e => e.Time03T04TotalRecords);
            var time04T05 = entities.Sum(e => e.Time04T05TotalRecords);
            var time05T06 = entities.Sum(e => e.Time05T06TotalRecords);
            var time06T07 = entities.Sum(e => e.Time06T07TotalRecords);
            var time07T08 = entities.Sum(e => e.Time07T08TotalRecords);
            var time08T09 = entities.Sum(e => e.Time08T09TotalRecords);
            var time09T10 = entities.Sum(e => e.Time09T10TotalRecords);
            var time10T11 = entities.Sum(e => e.Time10T11TotalRecords);
            var time11T12 = entities.Sum(e => e.Time11T12TotalRecords);
            var time12T13 = entities.Sum(e => e.Time12T13TotalRecords);
            var time13T14 = entities.Sum(e => e.Time13T14TotalRecords);
            var time14T15 = entities.Sum(e => e.Time14T15TotalRecords);
            var time15T16 = entities.Sum(e => e.Time15T16TotalRecords);
            var time16T17 = entities.Sum(e => e.Time16T17TotalRecords);
            var time17T18 = entities.Sum(e => e.Time17T18TotalRecords);
            var time18T19 = entities.Sum(e => e.Time18T19TotalRecords);
            var time19T20 = entities.Sum(e => e.Time19T20TotalRecords);
            var time20T21 = entities.Sum(e => e.Time20T21TotalRecords);
            var time21T22 = entities.Sum(e => e.Time21T22TotalRecords);
            var time22T23 = entities.Sum(e => e.Time22T23TotalRecords);
            var time23T01 = entities.Sum(e => e.Time23T01TotalRecords);

           return  string.Format("{0},{1},{2},{3},{4},{5},{6},{7},{8},{9},{10},{11},{12},{13},{14},{15},{16},{17},{18},{19},{20},{21},{22},{23}"
                ,time00T01,
                    time01T02,
                    time02T03,
                    time03T04,
                    time04T05,
                    time05T06,
                    time06T07,
                    time07T08,
                    time08T09,
                    time09T10,
                    time10T11,
                    time11T12,
                    time12T13,
                    time13T14,
                    time14T15,
                    time15T16,
                    time16T17,
                    time17T18,
                    time18T19,
                    time19T20,
                    time20T21,
                    time21T22,
                    time22T23,
                    time23T01);
        }


        public string NowOnlineStatics(DateTime date,bool  isoneday,string type)
        {
            List<KeyValuePair<string, DateTime>> dates = new List<KeyValuePair<string, DateTime>>();
            if (isoneday)
            {
                 dates.Add(new KeyValuePair<string,DateTime>(date.ToString("MM月dd日"), date.ToGetBeginDateTime()));
            }
            else
            {
               
                dates = StatisticsUtil.MonthPastTimes(date);
            }

            var data = (dates.Select(d => new { d, times = dateEx.DayTimes(d.Value) })
                .Select(@t => new onedayTimeDailyBriefingInfo
                {
                    TimeString = @t.d.Key,
                    Time00T01TotalRecords =
                        StatisticsstarttimeToEndtime(@t.times[0].Key,
                            @t.times[0].Value, type),
                    Time01T02TotalRecords =
                        StatisticsstarttimeToEndtime(@t.times[1].Key,
                            @t.times[1].Value, type),
                    Time02T03TotalRecords =
                        StatisticsstarttimeToEndtime(@t.times[2].Key,
                            @t.times[2].Value, type),
                    Time03T04TotalRecords =
                        StatisticsstarttimeToEndtime(@t.times[3].Key,
                            @t.times[3].Value, type),
                    Time04T05TotalRecords =
                        StatisticsstarttimeToEndtime(@t.times[4].Key,
                            @t.times[4].Value, type),
                    Time05T06TotalRecords =
                        StatisticsstarttimeToEndtime(@t.times[5].Key,
                            @t.times[5].Value, type),
                    Time06T07TotalRecords =
                        StatisticsstarttimeToEndtime(@t.times[6].Key,
                            @t.times[6].Value, type),
                    Time07T08TotalRecords =
                        StatisticsstarttimeToEndtime(@t.times[7].Key,
                            @t.times[7].Value, type),
                    Time08T09TotalRecords =
                        StatisticsstarttimeToEndtime(@t.times[8].Key,
                            @t.times[8].Value,type),
                    Time09T10TotalRecords =
                        StatisticsstarttimeToEndtime(@t.times[9].Key,
                            @t.times[9].Value, type),
                    Time10T11TotalRecords =
                        StatisticsstarttimeToEndtime(@t.times[10].Key,
                            @t.times[10].Value, type),
                    Time11T12TotalRecords =
                        StatisticsstarttimeToEndtime(@t.times[11].Key,
                            @t.times[11].Value, type),
                    Time12T13TotalRecords =
                        StatisticsstarttimeToEndtime(@t.times[12].Key,
                            @t.times[12].Value, type),
                    Time13T14TotalRecords =
                        StatisticsstarttimeToEndtime(@t.times[13].Key,
                            @t.times[13].Value, type),
                    Time14T15TotalRecords =
                        StatisticsstarttimeToEndtime(@t.times[14].Key,
                            @t.times[14].Value, type),
                    Time15T16TotalRecords =
                        StatisticsstarttimeToEndtime(@t.times[15].Key,
                            @t.times[15].Value, type),
                    Time16T17TotalRecords =
                        StatisticsstarttimeToEndtime(@t.times[16].Key,
                            @t.times[16].Value, type),
                    Time17T18TotalRecords =
                        StatisticsstarttimeToEndtime(@t.times[17].Key,
                            @t.times[17].Value, type),
                    Time18T19TotalRecords =
                        StatisticsstarttimeToEndtime(@t.times[18].Key,
                            @t.times[18].Value, type),
                    Time19T20TotalRecords =
                        StatisticsstarttimeToEndtime(@t.times[19].Key,
                            @t.times[19].Value, type),
                    Time20T21TotalRecords =
                        StatisticsstarttimeToEndtime(@t.times[20].Key,
                            @t.times[20].Value, type),
                    Time21T22TotalRecords =
                        StatisticsstarttimeToEndtime(@t.times[21].Key,
                            @t.times[21].Value, type),
                    Time22T23TotalRecords =
                        StatisticsstarttimeToEndtime(@t.times[22].Key,
                            @t.times[22].Value, type),
                    Time23T01TotalRecords =
                        StatisticsstarttimeToEndtime(@t.times[23].Key,
                            @t.times[23].Value, type)
                })).ToList();
            return NowDayStrTotalRecords(data);
        }

        public DataResult<GameInfoView> SaveGameInfoData(GameInfoView model)
        {
            DataResult<GameInfoView> result = new DataResult<GameInfoView>();
            if (model == null)
            {
                result.Message = "传入的数据不能为空";
                result.Code = (int)Status.fail;
                return result;
            }
            try
            {
                var updateData = GetEntityByID(model.ID);
                if (updateData != null)//修改
                {
                    updateData.id = model.ID;
                    updateData.isopen = model.IsEnable;
                    updateData.gameRule = model.GameRule;
                    updateData.desc = model.GameIntroduce;
                    updateData.isHot = model.IsEnable ?0 : 1;
                    updateData.name = model.Name;
                    updateData.modifyTime = DateTime.Now;
                  //  updateData.deleteState = model.DeleteState;
                    updateData.Sort = model.Sort;
                    updateData.IsRun = Convert.ToInt32(model.IsRun);
                    if (UpdateEntity(updateData) == null)
                    {
                        result.Code = (int)Status.fail;
                        result.Message = "修改失败";
                    }
                    result.Message = "修改成功";
                }
                else
                {
                    if (AddEntity(new tgameinfo
                    {
                        id = model.ID,
                       // deleteState = model.DeleteState,
                        desc = model.GameIntroduce,
                        gameRule = model.GameRule,
                        isopen = model.IsEnable,
                        isHot = model.IsEnable ? 0 : 1,
                        modifyTime = DateTime.Now,
                        modifyUser = model.ModifyUser,
                        name = model.Name,
                        Sort = model.Sort,
                        IsRun=Convert.ToInt32(model.IsRun)
                    }) == null)
                    {
                        result.Code = (int)Status.fail;
                        result.Message = "添加失败";
                    }
                    else
                    {
                        result.Message = "添加成功";
                    };
                }
            }
            catch (Exception ex)
            {

                Log.Error("保存游戏信息", ex.Message);
                result.Code = (int)Status.fail;
                result.Message = ex.Message;
            }
            return result;
        }

        public OnlineOrRegsuterMonth GetMonthStatiscstoDayDatainfo(DateTime month, string type)
        {
            var entity = new OnlineOrRegsuterMonth();

            var days = StatisticsUtil.GetMonthdayCount(month);
            var date = StatisticsUtil.GetMonthMinDate(month);
            var categories = new List<string>();
            for (var i = 1; i <= days; i++)
            {
                categories.Add(string.Format("{0}",i));
            }
            var series = new List<OnlineregsterDataInfo>
            {
                new OnlineregsterDataInfo
                {
                    name = type=="1"? "月在线人数":"月注册人数",
                    color = "#92AECB",
                    data = new List<int>()
                }
            };
            var categoriesCount = categories.Count;

            foreach (var serie in series)
            {
                if (serie.name.Equals("月在线人数") || serie.name.Equals("月注册人数"))
                {
                    foreach (var category in categories)
                    {
                        var categoryDay = string.Format("{0}-{1}", date.ToString("yyyy-MM"), category);

                        if (serie.data == null)
                        {
                            serie.data = new List<int>();
                        }

                        var num = StatisticsstarttimeToEndtime(DateTime.Parse(categoryDay).ToGetDayStartDateTime(), 
                            DateTime.Parse(categoryDay).ToGetDayEndDateTime(),type);

                        serie.data.Add(num);
                    }
                }
            }
            entity.Categories = categories;
            entity.Series = series;
            entity.NowDate = date.ToString("yyy-MM");
            return entity;
        }
        /// <summary>
        /// 奖池统计
        /// </summary>
        /// <returns></returns>
        public OnlineOrRegsuterMonth GetMonthDaytjackpotStatics()
        {
            var entity = new OnlineOrRegsuterMonth();
            var month = DateTime.Now;
            var days = StatisticsUtil.GetMonthdayCount(month);
            var date = StatisticsUtil.GetMonthMinDate(month);
            var categories = new List<string>();
            for (var i = 1; i <= days; i++)
            {
                categories.Add(string.Format("{0}", i));
            }
            var leveldata = GetGameLevel();
            var series = new List<OnlineregsterDataInfo>();

           // for (int i = 0; i < leveldata.Count; i++)
            //{
                series.Add(new OnlineregsterDataInfo
                {
                    Id = 0,
                    name = "当日增加",
                    color = "#92AECB",
                    data = new List<int>()
                });
            //}
            foreach (var serie in series)//等级
            {
                    foreach (var category in categories)//月天数
                    {
                        var categoryDay = string.Format("{0}-{1}", date.ToString("yyyy-MM"), category);

                        if (serie.data == null)
                        {
                            serie.data = new List<int>();
                        }
                        //每天奖池数量
                        var num = StatisticsstarttimeToEndtimeJackpot(DateTime.Parse(categoryDay).ToGetDayStartDateTime(),
                            DateTime.Parse(categoryDay).ToGetDayEndDateTime(), serie.Id);
                        serie.data.Add(num);
                    }
            }
            entity.TotalJacket = Totaljacket();
            entity.Categories = categories;
            entity.Series = series;
            entity.NowDate = date.ToString("yyy-MM");
            return entity;
        }
        public decimal GetUserGoldProportion(int mingold, int maxgold)
        {
            using (texas_2021Entities dbhelper = new texas_2021Entities())
            {
                var totalmoney =Convert.ToDouble(dbhelper.tuser.Where(st => st.isRobot == 0).Sum(st => st.Gold).Value);
                var v =Convert.ToDouble(dbhelper.tuser.
                        Where(st => st.isRobot == 0).
                        Where(s => s.Gold >= mingold && s.Gold < maxgold).Sum(t=>t.Gold)) / totalmoney;
                return Convert.ToDecimal(v*100);
            }
        }
        public int GetGoldSectionNum(int mingold, int maxgold)
        {
            using (texas_2021Entities dbhelper = new texas_2021Entities())
            {
                
                var v = dbhelper.tuser.
                        Where(st => st.isRobot == 0).
                        Where(s => s.Gold >= mingold && s.Gold < maxgold).Count();
                return v;
            }
        }

        public List<UserGoldDisMap> GetUserGoldDisMap()
        {
            List<UserGoldDisMap> listd = new List<UserGoldDisMap>();
            UserGoldDisMap d = new UserGoldDisMap();
            try
            {
                using (texas_2021Entities db = new texas_2021Entities())
                {
                    var paradata = dateEx.GetGoldMaxMin();
                    var data = paradata.Select(t => new UserGoldData
                    {
                        name = t.Key+"("+ GetGoldSectionNum(t.Value.Key, t.Value.Value) + "人)",
                        y = GetUserGoldProportion(t.Value.Key, t.Value.Value)
                    });
                    d.data = data.ToList();
                    d.TotalGold = db.tuser.Where(st => st.isRobot == 0).Sum(st => st.Gold).Value;
                    listd.Add(d);
                    return listd;
                }
            }
            catch (Exception ex)
            {

                return new List<UserGoldDisMap>();
            }

        }

      
    }
}
