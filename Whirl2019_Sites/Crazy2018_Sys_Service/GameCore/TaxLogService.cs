using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity;
using Crazy2018_Sys_Interface;
using Crazy2018_Sys_Interface.Game;
using Crazy2018_Sys_ViewEntity;
using Crazy2018_Sys_ViewEntity.UserAgent;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using static Crazy2018_Sys_Common.DTEnums;
using static Crazy2018_Sys_Common.TableUtil;

namespace Crazy2018_Sys_Service
{
    public class TaxLogService : BaseService<ttaxlog, int, texas_2021Entities>, ITaxlogService
    {
        private readonly IUserAgentNewService useragentnew;
        private readonly ItuserService tuserservice;
        private readonly IAgentGoldlogService agentgoldlogservice;
        private readonly IRoomListService tableservice;
        private readonly IManageService manageLogservice;


        public TaxLogService(IUserAgentNewService _useragentnew, ItuserService _tuserservice,
            IAgentGoldlogService _agentgoldlogservice, IRoomListService _tableservice,
            IManageService _manageLogservice)
        {
            useragentnew = _useragentnew; tuserservice = _tuserservice;
            agentgoldlogservice = _agentgoldlogservice; tableservice = _tableservice;
            manageLogservice = _manageLogservice;

        }
        public MyAgent GetMyAgentByUserId(int userid)
        {
            MyAgent ma = new MyAgent();
            List<GameUser> therelevel = new List<GameUser>();
            List<GameUser> twolevel = new List<GameUser>();
            List<GameUser> onelevel = new List<GameUser>();
            var user = useragentnew.GetEntityByID(userid);
            if (user != null)
            {
                var myagentChild = JsonHelper.JSONToObject<List<ChildAgentList>>(user.ChildAgents).Where(st => st.lv == 1).ToList();//我的代理child集合
                if (myagentChild != null)
                {
                    myagentChild.ForEach(p =>
                    {
                        var _user = GetUserbyuserid(p.UserID);
                        var user1 = useragentnew.GetEntityByID(p.UserID);
                        therelevel.Add(new GameUser
                        {
                            UserId = _user.UserID,
                            UserName = _user.wechatName,
                            TotalHand = (int)user.gameDrawCount + (int)user.gameDrawCount + (int)user.gameDrawCount,
                            TodayDevote = GetUserTodayDevote(_user.UserID),
                            TotalDevote = GetTotalDevote(_user.UserID)
                        });
                    });
                    var twoagentChild = JsonHelper.JSONToObject<List<ChildAgentList>>(user.ChildAgents).Where(st => st.lv == 2).ToList();//我的代理的代理child集合
                    twoagentChild.ForEach(t =>
                    {
                        var twouser = useragentnew.GetEntityByID(t.UserID);//我的代理的代理
                        var _twouser = GetUserbyuserid(t.UserID);
                        twolevel.Add(new GameUser
                        {
                            UserId = _twouser.UserID,
                            UserName = _twouser.wechatName,
                            TotalHand = (int)twouser.gameDrawCount + (int)twouser.gameDrawCount + (int)twouser.gameDrawCount,
                            TodayDevote = GetUserTodayDevote(_twouser.UserID),
                            TotalDevote = GetTotalDevote(_twouser.UserID)
                        });
                    });
                    var oneagentChild = JsonHelper.JSONToObject<List<ChildAgentList>>(user.ChildAgents).Where(st => st.lv == 3).ToList();//3级代理child集合
                    oneagentChild.ForEach(t =>
                    {
                        var oneuser = useragentnew.GetEntityByID(t.UserID);//我的代理的代理
                        var _oneuser = GetUserbyuserid(t.UserID);
                        onelevel.Add(new GameUser
                        {
                            UserId = _oneuser.UserID,
                            UserName = _oneuser.wechatName,
                            TotalHand = (int)oneuser.gameDrawCount + (int)oneuser.gameDrawCount + (int)oneuser.gameDrawCount,
                            TodayDevote = GetUserTodayDevote(_oneuser.UserID),
                            TotalDevote = GetTotalDevote(_oneuser.UserID)
                        });
                    });
                }
            }
            ma.Onelevel = onelevel;
            ma.Twolevel = twolevel;
            ma.Therelevel = therelevel;
            ma.TodayDevote = ma.Onelevel.Sum(st => st.TodayDevote) + ma.Twolevel.Sum(st => st.TodayDevote) + ma.Therelevel.Sum(st => st.TodayDevote);
            ma.TotalDevote = ma.Onelevel.Sum(st => st.TotalDevote) + ma.Twolevel.Sum(st => st.TotalDevote) + ma.Therelevel.Sum(st => st.TotalDevote);
            ma.TotalMan = ma.Onelevel.Count() + ma.Twolevel.Count() + ma.Therelevel.Count();
            return ma;

        }
        /// <summary>
        /// 得到用户代理
        /// </summary>
        /// <param name="userid"></param>
        /// <returns></returns>
        public List<GameUser> GetAgentUser(int userid)
        {
            var twouser = useragentnew.GetEntityLisrByWhere(st => st.UserID == userid);
            List<GameUser> level = new List<GameUser>();
            twouser.ForEach(o =>
            {
                var _user = GetUserbyuserid(o.UserID);
                level.Add(new GameUser
                {
                    UserName = _user.wechatName,
                    TotalHand = (int)o.gameDrawCount + (int)o.gameDrawCount + (int)o.gameDrawCount,
                    TodayDevote = GetUserTodayDevote(_user.UserID),
                    TotalDevote = GetTotalDevote(_user.UserID)
                });
            });

            return level;
        }

        /// <summary>
        /// 当日贡献
        /// </summary>
        /// <param name="userid"></param>
        /// <returns></returns>
        public long GetUserTodayDevote(int userid)
        {
            var starttime = DateTime.Now.ToGetDayStartDateTime();
            var endtime = DateTime.Now.ToGetDayEndDateTime();
            var useragnet = agentgoldlogservice.GetEntityLisrByWhere(st => st.SourceUserId == userid
            && st.CreateDate >= starttime && st.CreateDate <= endtime);
            if (useragnet != null)
            {
                return (long)useragnet.Sum(st => st.ActionCoin) / 100;
            }
            return 0;
        }
        /// <summary>
        /// 总贡献
        /// </summary>
        /// <param name="userid"></param>
        /// <returns></returns>
        public long GetTotalDevote(int userid)
        {
            var useragnet = agentgoldlogservice.GetEntityLisrByWhere(st => st.SourceUserId == userid);
            if (useragnet != null)
            {
                return (long)useragnet.Sum(st => st.ActionCoin) / 100;
            }
            return 0;
        }

        public tuser GetUserbyuserid(int userid)
        {
            return tuserservice.GetEntityByID(userid);
        }

        public DataResult DeletetaxlogByids(string ids)
        {
            DataResult result = new DataResult();
            if (string.IsNullOrEmpty(ids))
            {
                result.Code = (int)Status.fail;
                result.Message = "id不能为空";
                return result;
            }
            var noticeIds = ids.Split(',');
            foreach (var item in noticeIds)
            {
                if (string.IsNullOrEmpty(item)) continue;
                int id = 0;
                int.TryParse(item, out id);
                DelEntity(id);

            }
            manageLogservice.AddActionlog(ActionEnum.Delete, OptAction.taxlog, ActionEnum.Delete.ToDescription() + OptAction.taxlog.ToDescription() + "数据条数:" + noticeIds.Count());
            result.Message = "删除成功";
            return result;
        }
        //红利领取记录
        public DataResults<UseragnetlogView> GetUserAgentlog(DPagePara page)
        {
            DataResults<UseragnetlogView> result = new DataResults<UseragnetlogView>();
            Expression<Func<tuseragentlog, bool>> fun = w => w != null;
            if (page == null) page = new DPagePara();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            using (texas_2021Entities dbhelper = new texas_2021Entities())
            {

               
                if (page.starttime == null)
                {
                    page.starttime = result.starttime = Convert.ToDateTime(DateTime.Now.AddDays(-7).ToString("yyyy-MM-dd"));
                }
                else
                {
                    result.starttime = page.starttime;
                }

                if (page.endtime == null)
                {
                    page.endtime = result.endtime = Convert.ToDateTime(DateTime.Now.ToString("yyyy-MM-dd")).AddDays(1);

                }
                else
                {
                    result.endtime =Convert.ToDateTime( page.endtime).AddDays(1);
                }
           
                fun = fun.And(t => t.CreatTime > page.starttime);

                fun = fun.And(t => t.CreatTime < page.endtime);
                if (!string.IsNullOrEmpty(page.Keywords))
                {
                    var keyuserid = int.Parse(page.Keywords);
                    fun = fun.And(t => t.UserId == keyuserid);
                }
                List<tuseragentlog> idata = dbhelper.tuseragentlog.Where(fun)
                    .OrderByDescending(o => o.CreatTime).Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList();
                List<tuseragentlog> data = new List<tuseragentlog>();


                result.TotalCount = dbhelper.tuseragentlog.Count();

                var _data = from a in idata
                            join b in dbhelper.tuser on a.UserId equals b.UserID
                            orderby a.CreatTime descending
                            select new UseragnetlogView
                            {
                                ID = a.ID,
                                CreatTime = a.CreatTime,
                                Gold = a.Gold.Value/100,
                                State = a.State,
                                UserId = a.UserId,
                                UserName = b.wechatName
                            };


                result.Data = _data.ToList();
                result.Message = "获取成功";
                return result;

            }

        }
        //红利领取记录汇总
        public decimal SumHongLi(DPagePara page)
        {
            using (texas_2021Entities dbhelper = new texas_2021Entities())
            {
                string sqlwhere = " where 1=1 ";
                if (page.starttime != null)
                {
                    // page.starttime = Convert.ToDateTime(DateTime.Now.AddDays(-7).ToString("yyyy-MM-dd"));
                    sqlwhere += " and CreatTime>='" + page.starttime + "'";
                }
                if (page.endtime != null)
                {
                  //  page.endtime = Convert.ToDateTime(DateTime.Now.ToString("yyyy-MM-dd"));
                  sqlwhere+= " and CreatTime<'" + Convert.ToDateTime(page.endtime).AddDays(1) + "'"; 
                }
           

                if (!string.IsNullOrEmpty(page.Keywords))
                {
                    sqlwhere += " and UserId=" + page.Keywords;

                }
                string sql = "select IFNULL(SUM(Gold/100),0) as num from tuseragentlog " + sqlwhere;
                return dbhelper.Database.SqlQuery<decimal>(sql).First();
            }
        }

        public DataResults<TaxlogView> GetTaxLog(DPagePara page)
        {
            DataResults<TaxlogView> result = new DataResults<TaxlogView>();
            Expression<Func<ttaxlog, bool>> fun = w => w != null;
            if (page == null) page = new DPagePara();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            result.starttime = page.starttime;
            result.endtime = page.endtime;
            result.ChangeType = page.ChangeType;
            result.isRobot = page.isRobot;

            try
            {
                using (texas_2021Entities dbhelper = new texas_2021Entities())
                {

                   
                    if (!string.IsNullOrEmpty(page.Keywords))
                    {
                        var keyuserid = int.Parse(page.Keywords);
                        fun = fun.And(st => st.SourceUserId == keyuserid || st.UserId == keyuserid);
                    }
                   // else data = data.OrderByDescending(o => o.CreateDate);

                    if (page.ChangeType != 0)
                    {
                        fun = fun.And(st => st.ActionType == page.ChangeType);
                    }
                    else
                    {
                        fun = fun.And(st => st.ActionType != 1);// && st.ActionType != 3);
                    }

                    if (page.starttime != null)
                    {
                        fun = fun.And(st => st.CreateDate > page.starttime && st.CreateDate < page.endtime);
                    }
                    if (page.isRobot != -1)
                    {
                        if (page.isRobot == 1)
                            fun = fun.And(st => st.UserId == 2147483647);
                        if (page.isRobot == 0)
                            fun = fun.And(st => st.UserId != 2147483647);
                    }
                    List<ttaxlog> data = dbhelper.ttaxlog.Where(fun).Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList();
                    var _data = from a in data
                                join b in dbhelper.tuser on a.SourceUserId equals b.UserID
                                into c
                                from aa in c.DefaultIfEmpty()
                                join d in dbhelper.tgameinfo on a.SourceGameID equals d.id
                                join e in dbhelper.tgamelevelinfo on a.SourceRoomID equals e.Id
                                //where a.ActionType!=1 || a.ActionType!=3
                                orderby a.CreateDate descending
                                select new TaxlogView
                                {
                                    Idx = a.Idx,
                                    ActionCoin = (decimal)a.ActionCoin.Value / 100,
                                    ActionType = a.ActionType,
                                    AfterCoin = a.AfterCoin,
                                    BeforCoin = a.BeforCoin,
                                    CreateDate = a.CreateDate,
                                    C_lv = a.C_lv,
                                    IsHandel = a.IsHandel,
                                    SourceGameID = a.SourceGameID,
                                    SourceUserId = a.SourceUserId,
                                    TableUserLogId = a.TableUserLogId,
                                    GameName = d.name,
                                    roomName = e.Name,
                                    dipi = e.Baserate.Value / 100,
                                    UserId = a.UserId,
                                    UserName = a.UserId == 2147483647 ? "系统" : aa.wechatName
                                };


                    if (page.isExport == 1)
                    {
                        Dictionary<string, string> headdec = new Dictionary<string, string>();
                        headdec.Add("Idx", "主键");
                        headdec.Add("UserId", "用户id");
                        headdec.Add("UserName", "用户名称");
                        headdec.Add("ActionCoin", "金额");
                        headdec.Add("ActionTypeName", "类型");
                        headdec.Add("SourceUserId", "扣税用户");
                        headdec.Add("GameName", "游戏名称");
                        headdec.Add("CreateDate", "创建时间");
                        headdec.Add("roomName", "房间");
                        headdec.Add("dipi", "底皮");
                        var serverpath = HttpContext.Current.Server.MapPath("/ExcelFile/ExportData.xls");
                        var exportdata = _data.OrderByDescending(w => w.CreateDate).ToList().Select(a => new TaxlogView
                        {
                            Idx = a.Idx,
                            ActionCoin = a.ActionCoin.Value,
                            ActionType = a.ActionType,
                            AfterCoin = a.AfterCoin,
                            BeforCoin = a.BeforCoin,
                            CreateDate = a.CreateDate,
                            C_lv = a.C_lv,
                            IsHandel = a.IsHandel,
                            SourceGameID = a.SourceGameID,
                            SourceUserId = a.SourceUserId,
                            TableUserLogId = a.TableUserLogId,
                            GameName = a.GameName,
                            roomName = a.roomName,
                            dipi = a.dipi,
                            UserId = a.UserId,
                            UserName = a.UserName,
                            ActionTypeName = Enum.GetName(typeof(ResActionType), a.ActionType)
                        }).ToList();

                        exportdata.Add(new TaxlogView() { UserName = "总金额:", ActionCoin = exportdata.Sum(t => t.ActionCoin) });
                        var bytedata = NPOIExcel.ToExcel<TaxlogView>(exportdata, headdec, serverpath);
                        result.filebyte = bytedata;
                    }

                    result.TotalMoney = _data.Sum(t=> (decimal?)t.ActionCoin.Value)?.ToString("#0.00");
                    result.TotalCount = _data.Count();
                    result.Data = _data.Select(a => new TaxlogView
                    {
                        Idx = a.Idx,
                        ActionCoin = a.ActionCoin.Value,
                        ActionType = a.ActionType,
                        AfterCoin = a.AfterCoin,
                        BeforCoin = a.BeforCoin,
                        CreateDate = a.CreateDate,
                        C_lv = a.C_lv,
                        IsHandel = a.IsHandel,
                        SourceGameID = a.SourceGameID,
                        SourceUserId = a.SourceUserId,
                        TableUserLogId = a.TableUserLogId,
                        GameName = a.GameName,
                        roomName = a.roomName,
                        dipi = a.dipi,
                        UserId = a.UserId,
                        UserName = a.UserName,
                        ActionTypeName = Enum.GetName(typeof(ResActionType), a.ActionType)
                    }).ToList();
                    result.Message = "获取成功";
                    return result;

                }
            }
            catch (Exception ex)
            {
                result.Data = new List<TaxlogView>();
                result.Message = "系统错误";
                return result;
            }
        }

        public DataResult UserAgentLogDel(string ids)
        {
            DataResult result = new DataResult();
            if (string.IsNullOrEmpty(ids))
            {
                result.Code = (int)Status.fail;
                result.Message = "id不能为空";
                return result;
            }
            var noticeIds = ids.Split(',');
            using (texas_2021Entities dbhelper = new texas_2021Entities())
            {
                foreach (var item in noticeIds)
                {
                    if (string.IsNullOrEmpty(item)) continue;
                    int id = 0;
                    int.TryParse(item, out id);
                    var entity = dbhelper.tuseragentlog.Find(id);
                    dbhelper.tuseragentlog.Remove(entity);

                }
                dbhelper.SaveChanges();
            }
            result.Message = "删除成功";
            return result;
        }
        /// <summary>
        /// 首页统计
        /// </summary>
        /// <param name="date"></param>
        /// <returns></returns>
        public SysCruxDataStatistics GetThisdateTaimeTaxlog(DateTime date)
        {
            using (texas_2021Entities dbhelper = new texas_2021Entities())
            {
                SysCruxDataStatistics p = new SysCruxDataStatistics();
                var data = from a in dbhelper.ttaxlog
                           join b in dbhelper.tuser on a.UserId equals b.UserID
                           where b.isRobot == 0 && a.CreateDate >= date
                           select a.ActionCoin / 100;
                p.Todaytax = data.ToList().Sum(o => (long)o.Value);
                var table = dbhelper.ttablelist.ToList();
                p.totaltable = table.Count();
                p.Openingtable = table.Where(o => o.tableStatus == 1).Count();

                long? d = dbhelper.tgoldchangelog.Where(st => st.CreateTime >= date &&
                st.IsRobot == false &&
                st.ChangeType == 22).Sum(t => (long?)Math.Abs(t.Gold.Value / 100));
                p.TodayliuWater = d;

                p.TotalJackpot = dbhelper.tjackpot.Where(t => t.gameid == 52).Sum(t => t.jackpot).Value / 100;

                return p;
            }
        }

        public DataResults<tuseragentlogView> GetUserAgentGoldRanking(DPagePara page)
        {
            DataResults<tuseragentlogView> result = new DataResults<tuseragentlogView>();
            Expression<Func<tuseragentlog, bool>> fun = w => w != null;
            if (page == null) page = new DPagePara();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            result.ChangeType = page.ChangeType;

            if (page.ChangeType != 0)
            {
                var dicdatetime = StatisticsUtil.GetTimeStartTime(page.ChangeType).FirstOrDefault();
                page.starttime = dicdatetime.Key;
                page.endtime = dicdatetime.Value;
            }
            try
            {
                using (texas_2021Entities dbhelper = new texas_2021Entities())
                {
                 

                    if (!string.IsNullOrEmpty(page.Keywords))
                    {
                        int.TryParse(page.Keywords, out int userid);
                        fun = fun.And(st => st.UserId == userid);
                    }
                    if (page.starttime != null && page.endtime != null)
                    {
                        fun = fun.And(t => t.CreatTime >= page.starttime && t.CreatTime <= page.endtime);
                    }
                    List<tuseragentlog> list = dbhelper.tuseragentlog.Where(fun).OrderByDescending(t => t.Gold).Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList(); ;
                    var data = from a in list
                               join b in dbhelper.tuser on a.UserId equals b.UserID
                               where a.State == (int)ReceiveGoldState.成功
                               orderby a.CreatTime descending
                               group a by new { a.UserId, b.wechatName  } into aa
                               select new tuseragentlogView
                               {
                                   UserId = aa.Key.UserId,
                                   UserName = aa.Key.wechatName,
                                   Gold = aa.Sum(t => t.Gold) / 100,
                                   CreatTime = aa.Max(t => t.CreatTime)
                               };



                    result.TotalCount = dbhelper.tuseragentlog.Where(fun).Count();
                    result.Data = data.ToList();
                    result.Message = "获取成功";
                    return result;
                }
            }
            catch (Exception ex)
            {
                result.Message = "获取失败";
                return result;
            }
        }

        public DataResult<UserLossStatistics> LossUserStatistics(DPagePara page)
        {
            DataResult<UserLossStatistics> result = new DataResult<UserLossStatistics>();

            if (page == null) page = new DPagePara();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;

            try
            {
                using (texas_2021Entities db = new texas_2021Entities())
                {
                    string swhere = "";
                    if (!string.IsNullOrEmpty(page.Keywords))
                    {
                        int.TryParse(page.Keywords, out int userid);
                        swhere += "  and UserID=" + userid;
                    }
                    int days = StatisticsUtil.GetLossDays(page.ChangeType);
                    string sql = @"select 
                                        UserID Userid,UserName UserName,datediff(NOW(),LastLotinTime1) DayCount 
                                   from  
                                        tuser 
                                   WHERE 
                                        datediff(NOW(),LastLotinTime1)>" + days + swhere + @"
                                   ORDER BY
                                        DayCount
                                   LIMIT " + (page.PageIndex - 1) * page.PageSize + "," + page.PageSize;
                    UserLossStatistics rdata = new UserLossStatistics();
                    var data = db.Database.SqlQuery<int>("select count(UserID) from tuser WHERE datediff(NOW(), LastLotinTime1) > @num" + swhere, new MySqlParameter("@num", days));
                    result.TotalCount = data.First();
                    rdata.data = db.Database.SqlQuery<LossUser>(sql).ToList();
                    rdata.losscount = data.First();
                    result.Data = rdata;
                    result.Message = "获取成功";
                    return result;
                }
            }
            catch (Exception ex)
            {

                result.Message = "fail";
                return result;
            }


        }


    }
}
