using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Interface;
using Crazy2018_Sys_Interface.GameCore;
using Crazy2018_Sys_ViewEntity;
using Crazy2018_Sys_ViewEntity.Game;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using static Crazy2018_Sys_Common.DTEnums;
using static Crazy2018_Sys_Common.TableUtil;

namespace Crazy2018_Sys_Service.GameCore
{
    public class GoldChangeLogService : BaseService<tgoldchangelog, int, texas_2021Entities>, IGoldChangeLogService
    {
        IManageService manageLogservice;
        public GoldChangeLogService(IManageService _manageLogservice)
        {
            manageLogservice = _manageLogservice;
        }
        public DataResults<GoldChangelogView> GetUserGoldChangelog(DPagePara page)
        {
            DataResults<GoldChangelogView> result = new DataResults<GoldChangelogView>();
            Expression<Func<tgoldchangelog, bool>> fun = w => w != null;
            if (page == null) page = new DPagePara();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            result.ChangeType = page.ChangeType;
            result.starttime = page.starttime;
            result.endtime = page.endtime;
            result.ChangeType = page.ChangeType;
            try
            {
                using (texas_2021Entities dbhelper = new texas_2021Entities())
                {
                    //GoldChangelogView
                    IQueryable<tgoldchangelog> data = null;
                    List<tgoldchangelog> rdata = new List<tgoldchangelog>();
                    fun = fun.And(x => x.IsRobot == false);
                   // data = dbhelper.tgoldchangelog.Where(o=>o.IsRobot==false);
                    if (!string.IsNullOrEmpty(page.Keywords))
                    {
                        var keyuserid = int.Parse(page.Keywords);
                        fun = fun.And(st => st.UserId == keyuserid);
                    }
                    if (page.ChangeType!=0)
                    {
                        fun = fun.And(st => st.ChangeType == page.ChangeType);
                    }
                    if (page.starttime!=null)
                    {
                        fun = fun.And(st => st.CreateTime > page.starttime && st.CreateTime < page.endtime);
                    }
                    //else
                    //{
                    //    data = dbhelper.tgoldchangelog.Where(o=>o.IsRobot == false).OrderByDescending(o => o.CreateTime);
                    //}

                    result.TotalCount = GetCount(fun); data.Count();
                    rdata =GetEntityLisrByWhere(fun).OrderByDescending(o => o.CreateTime).Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList();

                    var _data = from a in rdata
                                join b in dbhelper.tuser on a.UserId equals b.UserID
                                orderby a.CreateTime descending
                                
                                select new GoldChangelogView
                                {
                                    Id = a.Id,
                                    UserId = a.UserId,
                                    UserName = b?.wechatName,
                                    Gold = (decimal)a.Gold.Value / 100,
                                    AfterGold = (decimal)a.AfterGold /100,
                                    CreateTime = a.CreateTime,
                                    gamble = a.gamble/100,
                                    ChangeType  = a.ChangeType.HasValue? a.ChangeType.Value:0,
                                    tableId = (string.IsNullOrEmpty(a.Remark)|| a.ChangeType == 12)  ? "": a.Remark.Split(';').Count()>1? a.Remark.Split(';')[0]: a.Remark,
                                    dipi = (string.IsNullOrEmpty(a.Remark) || a.ChangeType == 12) ? "" : a.Remark.Split(';').Count() > 1 ? a.Remark.Split(';')[1] : "",
                                    HandNum = (string.IsNullOrEmpty(a.Remark) || a.ChangeType == 12) ? "" : a.Remark.Split(';').Count() > 1 ? a.Remark.Split(';')[2] : "",
                                    ChangeTypeName = (a.ChangeType.HasValue && a.ChangeType.Value!=12) ? Enum.GetName(typeof(GlodToType), a.ChangeType) : 
                                    Enum.GetName(typeof(BigPrizeType), (string.IsNullOrEmpty(a.Remark)? 4: int.Parse(a.Remark))),
                                };
                    result.TotalMoney = data.Sum(t=> (long?)Math.Abs(t.Gold.Value/100))?.ToString();
                    result.Data = _data.ToList();
                    result.Message = "获取成功";
                    return result;
                }
            }
            catch (Exception ex)
            {
                result.Data = new List<GoldChangelogView>();
                result.Message = "获取失败!";
            }
            return result;
        }

        public DataResults<tjackpotlogView> GetUserReceivejackpotLog(DPagePara page)
        {
            DataResults<tjackpotlogView> result = new DataResults<tjackpotlogView>();
            Expression<Func<tjackpotlog, bool>> fun = w => w != null;
            if (page == null) page = new DPagePara();
            result.Keywords = page.Keywords;
            result.starttime = page.starttime;
            result.endtime = page.endtime;
            result.BigWinType = page.BigWinType;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            result.isExport = page.isExport;
            result.isRobot = page.isRobot;
            result.ChangeType = page.ChangeType;
            try
            {
                using (texas_2021Entities dbhelper = new texas_2021Entities())
                {
                  //  IQueryable<tjackpotlog> data = null;
                    List<tjackpotlog> rdata = new List<tjackpotlog>();
                    fun = fun.And(x=>x.JackpotType!=10);
                 
                    if (!string.IsNullOrEmpty(page.Keywords))
                    {
                        var keyuserid = int.Parse(page.Keywords);
                        fun = fun.And(st => st.UserId == keyuserid);
                    }
                    if (page.ChangeType!=0)
                    {
                        fun = fun.And(st => st.ChangeType == page.ChangeType);
                    }
                    if (page.BigWinType != 0)
                    {
                        fun = fun.And(st => st.JackpotType == page.BigWinType);
                    }
                    if (page.starttime != null && page.endtime != null)
                    {
                        var etime = page.endtime.Value.ToGetDayEndDateTime();
                        fun = fun.And(st => st.CreateTime > page.starttime && st.CreateTime < etime);
                    }
                    result.TotalCount = dbhelper.tjackpotlog.Where(t => t.JackpotType != 10).Count();
                    List<tjackpotlog> data = dbhelper.tjackpotlog.Where(fun)
                        .OrderByDescending(o => o.CreateTime)
                        .Skip((page.PageIndex - 1) * page.PageSize)
                        .Take(page.PageSize)
                        .ToList();
                   var _data = from a in data
                                join b in dbhelper.tgameinfo on a.GameId equals b.id
                                join c in dbhelper.tgamelevelinfo on a.RoomId equals c.Id
                                join d in dbhelper.tuser on a.UserId equals d.UserID
                                orderby a.CreateTime descending
                                select new tjackpotlogView
                                {
                                    Id = a.Id,
                                    GameName = b.name,
                                    RoomName = c.Name,
                                    UserId = a.UserId,
                                    ChangeType = a.ChangeType.Value,
                                    isRoot = d.isRobot.Value,
                                    UserName = d.wechatName,
                                    Gold = a.Gold.Value /100,
                                    CreateTime = a.CreateTime,
                                    JackpotType = a.JackpotType.Value
                                };

                    if (page.isRobot!=-1)
                    {
                        _data = _data.Where(t=>t.isRoot== page.isRobot);
                    }

                    if (page.isExport==1)
                    {
                        Dictionary<string, string> headdec = new Dictionary<string, string>();
                        headdec.Add("Id", "主键");
                        headdec.Add("RoomName", "房间名称");
                        headdec.Add("UserId", "用户Id");
                        headdec.Add("isRoot", "是否机器人");
                        headdec.Add("UserName", "姓名");
                        headdec.Add("Gold", "金币");
                        headdec.Add("CreateTime", "创建时间");
                        headdec.Add("TypeName", "大奖类型");

                        var serverpath = HttpContext.Current.Server.MapPath("/ExcelFile/ExportData.xls");
                        var exportdata = _data.OrderByDescending(w => w.CreateTime).ToList();

                        exportdata.Add(new tjackpotlogView() { RoomName = "总流水:", Gold = exportdata.Sum(t =>t.Gold) });
                        var bytedata = NPOIExcel.ToExcel<tjackpotlogView>(exportdata, headdec, serverpath);
                        result.filebyte = bytedata;
                    }

                    result.Data = _data.Select(d=>new tjackpotlogView
                    {
                        Id = d.Id,
                        GameName = d.GameName,
                        RoomName = d.RoomName,
                        UserId = d.UserId,
                        isRoot = d.isRoot,
                        UserName = d.UserName,
                        Gold = d.Gold,
                        CreateTime = d.CreateTime,
                        TypeName = Enum.GetName(typeof(BigPrizeType), d.JackpotType.Value),
                        ChangName = Enum.GetName(typeof(JackpotType), d.ChangeType),

                    }).ToList();
                    result.TotalMoney = _data.Sum(t=>t.Gold).Value.ToString("#0.00");
                    result.Message = "获取成功";
                    return result;

                }
            }
            catch (Exception ex)
            {

                result.Data = new List<tjackpotlogView>();
                result.Message = "fail";
                return result;
            }
        }
        public DataResult UserReceivejackpotLogDel(string ids)
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
                    var entity = dbhelper.tjackpotlog.Find(id);
                    dbhelper.tjackpotlog.Remove(entity);
                }
                dbhelper.SaveChangesAsync();
                manageLogservice.AddActionlog(ActionEnum.Delete, OptAction.UserWinning, ActionEnum.Delete.ToDescription() + OptAction.UserWinning.ToDescription() + ",数据条数:" + noticeIds.Count());
            }
            result.Message = "删除成功";
            return result;
        }
        public DataResult GoldChangelogDel(string ids)
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
                    var entity = dbhelper.tgoldchangelog.Find(id);
                    dbhelper.tgoldchangelog.Remove(entity);
                }
                dbhelper.SaveChangesAsync();
                manageLogservice.AddActionlog(ActionEnum.Delete, OptAction.goldtolog, ActionEnum.Delete.ToDescription() + OptAction.goldtolog.ToDescription() + ",数据条数:" + noticeIds.Count());
            }
            result.Message = "删除成功";
            return result;
        }

        public DataResults<tjackpotaddlogView> GetJackpotAddlog(DPagePara page)
        {
            throw new NotImplementedException();
        }
        //玩家输赢流水
        public DataResults<GoldChangelogView> UserlosingWinning(DPagePara page)
        {
            DataResults<GoldChangelogView> result = new DataResults<GoldChangelogView>();
            Expression<Func<tgoldchangelog, bool>> fun = w => w != null;
            if (page == null) page = new DPagePara();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            result.ChangeType = page.ChangeType;
            result.starttime = page.starttime;
            result.endtime = page.endtime;
            result.orderby = page.orderby;
            try
            {
                using (texas_2021Entities dbhelper = new texas_2021Entities())
                {
                    //GoldChangelogView
                    fun = fun.And(x=>x.IsRobot==false);
                

                    if (!string.IsNullOrEmpty(page.Keywords))
                    {
                        var keyuserid = int.Parse(page.Keywords);
                        fun = fun.And(st => st.UserId == keyuserid);
                    }
                    if (page.GameId != 0)
                    {
                        fun = fun.And(st => st.GameId == page.GameId);
                    }
                    if (page.starttime != null)
                    {
                        fun = fun.And(st => st.CreateTime > page.starttime && st.CreateTime < page.endtime);
                    }

                    List<tgoldchangelog> data = dbhelper.tgoldchangelog.Where(fun).Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList();

                    var _data = from a in data
                                join b in dbhelper.tuser on a.UserId equals b.UserID
                                join c in dbhelper.tgameinfo on a.GameId equals c.id
                                where a.ChangeType == 1
                                select new GoldChangelogView
                                {
                                    Id = a.Id,
                                    UserId = a.UserId,
                                    UserName = b.wechatName,
                                    Gold = (decimal)a.Gold.Value / 100,
                                    AfterGold = (decimal)a.AfterGold / 100,
                                    CreateTime = a.CreateTime,
                                    GameName = c.name,
                                    gamble = a.gamble / 100,
                                    ChangeType = a.ChangeType.HasValue ? a.ChangeType.Value : 0,
                                    tableId = a.Remark,
                                    dipi = "0",
                                    HandNum = ""
                                };

                    result.TotalCount = _data.Count();
                    _data = _data.OrderByDescending(o => o.CreateTime);
                    if (page.orderby.Equals("1")) _data = _data.OrderByDescending(t => t.Gold);
                    if (page.orderby.Equals("1_1")) _data = _data.OrderBy(t => t.Gold);

                    result.Data = _data.Select(a=>new GoldChangelogView()
                    {
                        Id = a.Id,
                        UserId = a.UserId,
                        UserName = a.UserName,
                        Gold = Math.Round(a.Gold.Value,2),
                        AfterGold = a.AfterGold,
                        CreateTime = a.CreateTime,
                        GameName = a.GameName,
                        gamble = a.gamble,
                        ChangeType = a.ChangeType,
                        tableId = a.tableId,
                        dipi = "0",
                        HandNum = "",
                        ChangeTypeName = Enum.GetName(typeof(GlodToType), a.ChangeType)

                    }).ToList();

                    if (page.isExport == 1)
                    {
                        Dictionary<string, string> headdec = new Dictionary<string, string>();
                        headdec.Add("Id", "主键");
                        headdec.Add("UserId", "用户Id");
                        headdec.Add("UserName", "用户名称");
                        headdec.Add("Gold", "输赢");
                        headdec.Add("AfterGold", "余额");
                        headdec.Add("CreateTime", "创建时间");
                        headdec.Add("GameName", "游戏名称");
                        headdec.Add("gamble", "下注");

                        headdec.Add("tableId", "桌子号");
                        headdec.Add("ChangeTypeName", "流向类型");

                        var serverpath = HttpContext.Current.Server.MapPath("/ExcelFile/ExportData.xls");
                        var exportdata = _data.OrderByDescending(w => w.CreateTime).ToList().Select(a => new GoldChangelogView()
                        {
                            Id = a.Id,
                            UserId = a.UserId,
                            UserName = a.UserName,
                            Gold = Math.Round(a.Gold.Value, 2),
                            AfterGold = a.AfterGold,
                            CreateTime = a.CreateTime,
                            GameName = a.GameName,
                            gamble = a.gamble,
                            ChangeType = a.ChangeType,
                            tableId = a.tableId,
                            dipi = "0",
                            HandNum = "",
                            ChangeTypeName = Enum.GetName(typeof(GlodToType), a.ChangeType)
                        }).ToList();

                        exportdata.Add(new GoldChangelogView() { UserName = "总流水:", Gold = exportdata.Sum(t => Math.Abs(t.Gold.Value)) });
                        var bytedata = NPOIExcel.ToExcel<GoldChangelogView>(exportdata, headdec, serverpath);
                        result.filebyte = bytedata;
                    }
                    result.Message = "获取成功";
                    return result;
                }
            }
            catch (Exception ex)
            {
                result.Data = new List<GoldChangelogView>();
                result.Message = "获取失败！";
                return result;
            }
        }
        //玩家输赢汇总
        public decimal GameUserLoseWinSum(DPagePara page)
        {
            using (texas_2021Entities dbhelper = new texas_2021Entities())
            {
                string sqlwhere = " where 1=1  and ChangeType=1";
                if (page.starttime != null)
                {
                    // page.starttime = Convert.ToDateTime(DateTime.Now.AddDays(-7).ToString("yyyy-MM-dd"));
                    sqlwhere += " and CreateTime>='" + page.starttime + "'";
                }
                if (page.endtime != null)
                {
                   // page.endtime = Convert.ToDateTime(DateTime.Now.ToString("yyyy-MM-dd"));
                   sqlwhere+= " and CreateTime<'" + Convert.ToDateTime(page.endtime).AddDays(1) + "'"; 
                }
               

                if (!string.IsNullOrEmpty(page.Keywords))
                {
                    sqlwhere += " and UserId=" + page.Keywords;

                }
                string sql = "select IFNULL(SUM(Gold),0) as num from tgoldchangelog " + sqlwhere;
                return dbhelper.Database.SqlQuery<int>(sql).First();
            }
        }

        public DataResults<tjackpotlogView> GetUserInsurancePoolLog(DPagePara page)
        {
            DataResults<tjackpotlogView> result = new DataResults<tjackpotlogView>();
            if (page == null) page = new DPagePara();
            result.Keywords = page.Keywords;
            result.starttime = page.starttime;
            result.endtime = page.endtime;
            result.BigWinType = page.BigWinType;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            result.isExport = page.isExport;
            result.isRobot = page.isRobot;
            try
            {
                using (texas_2021Entities dbhelper = new texas_2021Entities())
                {
                    IQueryable<tjackpotlog> data = null;
                    List<tjackpotlog> rdata = new List<tjackpotlog>();
                    data = dbhelper.tjackpotlog.Where(t=>t.JackpotType==10);
                    if (!string.IsNullOrEmpty(page.Keywords))
                    {
                        var keyuserid = int.Parse(page.Keywords);
                        data = data.Where(st => st.UserId == keyuserid);
                    }
                    if (page.starttime != null && page.endtime != null)
                    {
                        var etime = page.endtime.Value.ToGetDayEndDateTime();
                        data = data.Where(st => st.CreateTime > page.starttime && st.CreateTime < etime);
                    }
                    result.TotalCount = data.Count();

                    var _data = from a in data
                                join b in dbhelper.tgameinfo on a.GameId equals b.id
                                //join c in dbhelper.tgamelevelinfo on a.RoomId equals c.Id
                                join d in dbhelper.tuser on a.UserId equals d.UserID
                                orderby a.CreateTime descending
                                select new tjackpotlogView
                                {
                                    Id = a.Id,
                                    GameName = b.name,
                                   // RoomName = c.Name,
                                    UserId = a.UserId,
                                    isRoot = d.isRobot.Value,
                                    UserName = d.wechatName,
                                    Gold = a.Gold.Value / 100,
                                    CreateTime = a.CreateTime,
                                    ChangeType = a.ChangeType.Value,
                                    JackpotType = a.JackpotType.Value
                                };

                    if (page.isRobot != -1)
                    {
                        _data = _data.Where(t => t.isRoot == page.isRobot);
                    }

                    if (page.isExport == 1)
                    {
                        Dictionary<string, string> headdec = new Dictionary<string, string>();
                        //headdec.Add("RoomName", "房间名称");
                        headdec.Add("UserId", "用户Id");
                        headdec.Add("isRoot", "是否机器人");
                        headdec.Add("UserName", "姓名");
                        headdec.Add("Gold", "赔付金额");
                        headdec.Add("CreateTime", "创建时间");
                        headdec.Add("TypeName", "大奖类型");

                        var serverpath = HttpContext.Current.Server.MapPath("/ExcelFile/ExportData.xls");
                        var exportdata = _data.OrderByDescending(w => w.CreateTime).ToList();

                        exportdata.Add(new tjackpotlogView() { RoomName = "总奖池:", Gold = exportdata.Sum(t => t.Gold) });
                        var bytedata = NPOIExcel.ToExcel<tjackpotlogView>(exportdata, headdec, serverpath);
                        result.filebyte = bytedata;
                    }

                    result.Data = _data.OrderByDescending(o => o.CreateTime).Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList().Select(d => new tjackpotlogView
                    {
                        Id = d.Id,
                        GameName = d.GameName,
                        //RoomName = d.RoomName,
                        UserId = d.UserId,
                        isRoot = d.isRoot,
                        UserName = d.UserName,
                        Gold = d.Gold,
                        ChangeType = d.ChangeType,
                        CreateTime = d.CreateTime,
                        TypeName = Enum.GetName(typeof(BigPrizeType), d.JackpotType.Value)

                    }).ToList();
                    result.TotalMoney = _data.Sum(t => t.Gold).Value.ToString("#0.00");
                    result.TotalNum = dbhelper.tjackpot.Where(t=>t.gameid==51 && t.roomid == 1051).Sum(t=>t.jackpot.Value/100).ToString("#0.00");
                    result.Message = "获取成功";
                    return result;

                }
            }
            catch (Exception ex)
            {

                result.Data = new List<tjackpotlogView>();
                result.Message = "fail";
                return result;
            }
        }
    }
}
