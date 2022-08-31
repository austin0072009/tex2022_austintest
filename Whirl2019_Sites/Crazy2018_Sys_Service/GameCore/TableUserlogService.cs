using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Common;
using Crazy2018_Sys_Entity;
using Crazy2018_Sys_Interface;
using Crazy2018_Sys_ViewEntity;
using Crazy2018_Sys_ViewEntity.UserAgent;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Linq.Expressions;

namespace Crazy2018_Sys_Service
{
    public class TableUserlogService : BaseService<ttableuserlog, int, texas_2021Entities>, ITableUserlogService
    {

        IGameUserService tuser;
        public TableUserlogService(IGameUserService _tuser)
        {
            tuser = _tuser;
        }

        public DataResult DeleteTableLogByids(string ids)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// 用户汇总数据统计
        /// </summary>
        /// <returns></returns>
        public UserSummaryEntity GetUserSummary()
        {
            UserSummaryEntity rdata = new UserSummaryEntity();
            try
            {
                
                using (texas_2021Entities db = new texas_2021Entities())
                {
                    using (DBContextHelper db2 = new DBContextHelper())
                    {
                        var cznum = db2.RechargeRecordEntities.Where(t => t.IsHandel == true).
                            Select(t=>new { t.UserId}).Distinct().Count();
                        rdata.UserRechargeNum = cznum;
                        rdata.UserRechargeTwoNum = db2.RechargeRecordEntities.Where(t => t.IsHandel == true).
                            Select(t => new { t.UserId }).Count()- cznum;
                        var RegisterUserNum = db.tuser.Where(t => t.isRobot == 0).Count();
                        rdata.RegisterUserNum = RegisterUserNum;
                        //充值人数除以注册总人数
                        rdata.RechargeUserZHRate = (Convert.ToDouble(cznum) / Convert.ToDouble(RegisterUserNum)).ToString("0.00%");
                        //30充值流失用户
                        var date1 = DateTime.Now.AddDays(-30);
                        var UserRechargeLossNum = db2.RechargeRecordEntities.Where(t => t.IsHandel == true 
                            && t.CreatTime < date1).Count();
                        rdata.UserRechargeLossNum = UserRechargeLossNum;
                        rdata.UserRechargeLossRate = ((Convert.ToDouble(UserRechargeLossNum) / Convert.ToDouble(cznum))).ToString("0.00%");
                        //当月注册人数
                        var date2 = DateTime.Now.GetMonthMinDate();
                        var monthUser = db.tuser.Where(t => t.isRobot==0  && t.RegTime >= date2).Count();
                        rdata.RegisterUserThisMonth = monthUser;
                        rdata.RegisterUserRate = (Convert.ToDouble(monthUser) / Convert.ToDouble(db.tuser.Where(t => t.isRobot == 0).Count())).ToString("0.00%");

                        //日注册人数最大值
                        rdata.DayRegisterUserMax = (from a in db.tuser
                                                    where a.isRobot == 0
                                                    group a by new { a.RegTime.Value.Year, a.RegTime.Value.Month, a.RegTime.Value.Day } into aa
                                                    select new { numuser = aa.Count() }).
                                                    Max(t=>t.numuser);
                        rdata.ActiveUser = 0;
                        rdata.UserOnlineAverageTime = 0;
                        rdata.ActiviteUserZHtRate = "0.00";
                        var LossUserNum = tuser.GetOneMonthNologin();
                        rdata.LossUserNum = LossUserNum;
                        rdata.LossUserRate = (Convert.ToDouble(LossUserNum) / Convert.ToDouble(RegisterUserNum)).ToString("0.00%");
                        rdata.MaxRechargeAmount = db2.RechargeRecordEntities.
                            Where(t => t.IsHandel == true).Max(t => t.GoldCount)/100;

                        var date3 = DateTime.Now.ToGetBeginDateTime();
                        
                        rdata.TodayMaxRechargeAmount = db2.RechargeRecordEntities.
                           Where(t => t.IsHandel == true && t.CreatTime >= date3).
                           OrderByDescending(t => t.GoldCount).Take(1).ToList().
                           Sum(t => t.GoldCount)/100;


                        rdata.RegisterUserAPRUValue = 0;
                        rdata.RechargeUserAPRUValue = 0;
                        return rdata;
                    }
                }
            }
            catch (Exception ex)
            {
                return rdata;
            }
        }

        public DataResultsList<GangCardStatisticsIP> GetUserTableLogSameIp(DPagePara page)
        {
            DataResultsList<GangCardStatisticsIP> sumdata = new DataResultsList<GangCardStatisticsIP>();
            DataResults<GangCardStatisticsIP> result = new DataResults<GangCardStatisticsIP>();
            sumdata.One = result;
            if (page == null) page = new DPagePara();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            try
            {
                
                using(texas_2021Entities   db = new texas_2021Entities())
                {
                    ///出现两次ip相同的用户
                    var iptwocount = from a in db.tuser
                                     where a.isRobot==0 &&
                                     (
                                     from b in db.tuser
                                     orderby b.LastLotinTime1 descending
                                     group b by b.IP into aa
                                     where aa.Count()>1
                                     select aa.Key
                                     ).Contains(a.IP)
                                     select a;

                    var tabledata = from a in db.ttableuserlog
                               join b in iptwocount on a.UserID equals b.UserID
                               orderby a.CreateDate descending
                               group new { a,b} by new { a.TableLogIdx,b.UserID} into bb
                               where bb.Count()>1
                               select new GangCardStatisticsIP
                               {
                                   Userid = bb.Key.UserID,
                                   UserName = bb.Max(t=>t.b.wechatName),
                                   LoginIP = bb.Max(t => t.b.IP),
                                   TableId = bb.Key.TableLogIdx.Value,
                                   Tabletime = bb.Max(t=>t.a.CreateDate).Value,
                                   ThisHand = bb.Count()
                               };

                    var data = from a in tabledata
                               where
                               (
                               from b in tabledata
                               orderby b.Tabletime descending
                               group b by b.TableId into bb
                               where bb.Count() > 1
                               select bb.Key
                               ).Contains(a.TableId)
                               select a;

                    if (!string.IsNullOrEmpty(page.Keywords))
                    {
                        var para = int.Parse(page.Keywords);
                        data = data.Where(st=>st.Userid==para || st.TableId== para);
                    }

                    result.TotalCount = data.Count();
                    result.Data = data.OrderByDescending(t => t.Tabletime).Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList();
                    result.Message = "获取成功";
                    return sumdata;

                }
            }
            catch (Exception ex)
            {
                result.Message = "fail";
                return sumdata;
            }
        }

        public DataResults<GangCardStatisticsIP> GetUserTableLogSameIpLnglat(DPagePara page)
        {
            DataResults<GangCardStatisticsIP> result = new DataResults<GangCardStatisticsIP>();
            Expression<Func<tgangcardlog, bool>> fun = w => w != null;
            if (page == null) page = new DPagePara();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;

            try
            {
                using (texas_2021Entities db = new texas_2021Entities())
                {
                
                    if (!string.IsNullOrEmpty(page.Keywords))
                    {
                        var para = int.Parse(page.Keywords);
                        fun = fun.And(st => st.UserID == para || st.TableLogIdx == para);
                    }
                    List<tgangcardlog> IQdata = db.tgangcardlog.Where(fun).OrderByDescending(t => t.CreateDate).Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList();
                    ///
                    var data = from a in IQdata
                               join b in db.tuser on a.UserID equals b.UserID
                               join c in db.tuseragent2019 on a.UserID equals c.UserID
                               select new GangCardStatisticsIP
                               {
                                   Userid = a.UserID.Value,
                                   UserName = b.wechatName,
                                   LoginIP = a.IP,
                                   TableId = a.TableLogIdx.Value,
                                   ThisHand = c.gameWinCount.Value+c.gameLostCount.Value+c.gameDrawCount.Value,
                                   Tabletime = a.CreateDate.Value,
                                   Lng = a.Lng.Value,
                                   lat = a.Lat.Value
                               };

                    result.TotalCount = data.Count();
                    result.Data = data.ToList();
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

        public DataResults<UserTableLogWinLosingView> GetUserTableLogWinLosing(DPagePara page)
        {
            DataResults<UserTableLogWinLosingView> result = new DataResults<UserTableLogWinLosingView>();
            if (page == null) page = new DPagePara();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            result.isRobot = page.isRobot;
            result.starttime = page.starttime;
            result.endtime = page.endtime;

            using (texas_2021Entities db = new texas_2021Entities())
            {
                IQueryable<ttableuserlog> IQdata = db.ttableuserlog;
                if (!string.IsNullOrEmpty(page.Keywords))
                {
                    var para = int.TryParse(page.Keywords,out int id);
                    IQdata = IQdata.Where(t=>t.UserID == id || t.TableLogIdx == id);
                }
                if (page.starttime != null&& page.endtime!=null)
                {
                    IQdata = IQdata.Where(t => t.CreateDate>= page.starttime && t.CreateDate<= page.endtime);
                }

                var data = from a in IQdata
                           join b in db.tuser on a.UserID equals b.UserID
                           orderby a.CreateDate descending
                           select new UserTableLogWinLosingView
                           {
                               Idx = a.Idx,
                               isRobot = b.isRobot.Value,
                               Bet = a.Bet/100,
                               CreateDate = a.CreateDate,
                               UserID = a.UserID,
                               C_cardList = a.C_cardList,
                               C_isover = a.C_isover,
                               C_isWatch = a.C_isWatch,
                               C_pos = a.C_pos,
                               C_win = a.C_win,
                               gold = a.gold/100,
                               TableLogIdx = a.TableLogIdx,
                               UserName = b.wechatName
                           };
                if (page.isRobot != -1)
                {
                    data = data.Where(t => t.isRobot == page.isRobot);
                }

                result.TotalMoney = data.Where(t=>t.C_win==true).Sum(t=>(decimal?)t.gold.Value)?.ToString("#0.00");
                result.TotalNum = data.Where(t => t.C_win == false).Sum(t => (decimal?)t.gold.Value)?.ToString("#0.00");
                result.TotalCount = data.Count();
                result.Data = data.Skip((page.PageIndex-1)*page.PageSize).Take(page.PageSize).ToList();
                return result;
            }

        }
    }
}
