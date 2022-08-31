using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity;
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
using static Crazy2018_Sys_Common.TableUtil;
using Crazy2018_Sys_Service.SignalEntitiy2;
using System.Web;
using static Crazy2018_Sys_ViewEntity.PayModel;

namespace Crazy2018_Sys_Service
{
    public class RechargeRecordService : BaseService<RechargeRecordEntity, long, DBContextHelper>, IRechargeRecordService
    {
        IGameUserService gameuser;
        IBankCardService bankcard;
        public RechargeRecordService(IGameUserService _gameuser,
            IBankCardService _bankcard)
        {
            bankcard = _bankcard;
            gameuser = _gameuser;
        }

        public DataResult<RechargeRecordEntity> Add(decimal number, string orderNumber, string userId, string remark, decimal goldCount, int rechargeType)
        {
            DataResult<RechargeRecordEntity> ret = new DataResult<RechargeRecordEntity>();
            if (number <= 0 || string.IsNullOrEmpty(orderNumber) || string.IsNullOrEmpty(userId) || goldCount <= 0)
            {
                ret.Message = "数据校验出错";
                ret.Code = (int)Status.fail;
                return ret;
            }
            using (texas_2021Entities dbHelper = new texas_2021Entities())
            {
                var user = dbHelper.gameuser.FirstOrDefault(w => w.UserId == Convert.ToInt32(userId));
                if (user == null)
                {
                    ret.Message = "该用户不存在或者没登陆游戏不能充值";
                    ret.Code = (int)Status.fail;
                    return ret;
                }
            }
            ret.Data = AddEntity(new RechargeRecordEntity
            {
                GoldCount = goldCount,
                Number = number,
                OrderNumber = orderNumber,
                RechargeType = rechargeType,
                Remark = remark,
                UserId = int.Parse(userId)
            });
            return ret;
        }

        public DataResults<ChargelogRanking> ChargeLogRanking(DPagePara page)
        {
            DataResults<ChargelogRanking> result = new DataResults<ChargelogRanking>();
            if (page == null) page = new DPagePara();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            result.starttime = page.starttime;
            result.endtime = page.endtime;
            result.ChangeType = page.ChangeType;
            result.Rtype = page.Rtype;
            try
            {
                using (DBContextHelper db = new DBContextHelper())
                {
                    IQueryable<RechargeRecordEntity> IQdata = db.RechargeRecordEntities.Where(t=>t.IsHandel==true);
                    if (!string.IsNullOrEmpty(page.Keywords))
                    {
                        int.TryParse(page.Keywords, out int userid);
                        IQdata = IQdata.Where(t => t.UserId == userid);
                    }
                    if (page.Rtype != 0)
                    {
                        IQdata = IQdata.Where(t => t.RechargeType == page.Rtype);
                    }
                    if (page.starttime != null && page.endtime != null)
                    {
                        IQdata = IQdata.Where(t => t.CreatTime >= page.starttime && t.CreatTime <= page.endtime);
                    }
                    else
                    {
                        var dicdatetime = StatisticsUtil.GetTimeStartTime(page.ChangeType).FirstOrDefault();
                        page.starttime = dicdatetime.Key;
                        page.endtime = dicdatetime.Value;
                        IQdata = IQdata.Where(t => t.CreatTime >= page.starttime && t.CreatTime <= page.endtime);
                    }
                    var dataday = from a in IQdata
                                  //join b in 
                                  orderby a.CreatTime descending
                                  group a by new { a.UserId }
                                  into aa
                                  select new ChargelogRanking
                                  {
                                      Userid = aa.Key.UserId,
                                      GoldTotal = aa.Sum(t=>t.GoldCount),
                                      OrderNum = aa.Count(),
                                      RechargeDate = aa.Max(t => t.CreatTime)
                                  };

                    using (texas_2021Entities wdb = new texas_2021Entities())
                    {
                        var rdata = from a in dataday.OrderByDescending(t => t.OrderNum).Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList()
                                    join b in wdb.tuser on a.Userid equals b.UserID
                                    into c
                                    from cc in c.DefaultIfEmpty()
                                    select new ChargelogRanking
                                    {
                                        Userid = a.Userid,
                                        GoldTotal = a.GoldTotal/100,
                                        OrderNum = a.OrderNum,
                                        RechargeDate = a.RechargeDate,
                                        UserName = cc?.wechatName,
                                    };
                        result.TotalMoney = dataday.Sum(t => (decimal?)t.GoldTotal / 100)?.ToString("#0");
                        result.TotalNum = dataday.Sum(t => t.OrderNum).ToString();
                        result.TotalCount = dataday.Count();
                        result.Data = rdata.ToList();
                        result.Message = "获取成功";
                        return result;
                    }
                }
            }
            catch (Exception ex)
            {

                result.Data = new List<ChargelogRanking>();
                result.Message = "获取成功";
                return result;
            }
        }

        public DataResults<ChargelogView> GetChargeLogData(DPagePara page, string selectKeywords)
        {
            selectKeywords = selectKeywords != null ? selectKeywords.Trim() : "";
            DataResults<ChargelogView> result = new DataResults<ChargelogView>();
                 Expression<Func<RechargeRecordEntity, bool>> fun = w => w != null;
            if (page == null) page = new DPagePara();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            result.isExport = page.isExport;
          //  page.starttime =page.endtime= Convert.ToDateTime( "2019-12-12");
            try
            {
                using (texas_2021Entities  wdb = new texas_2021Entities())
                {
                    using (DBContextHelper db = new DBContextHelper())
                    {
                      
                        if (!string.IsNullOrEmpty(page.Keywords))
                        {
                            int.TryParse(page.Keywords, out int tempuid);
                            fun = fun.And(t => t.UserId == tempuid);
                        }
                        if (!string.IsNullOrEmpty(selectKeywords))
                        {
                            int.TryParse(selectKeywords, out int rtype);
                            fun = fun.And(t => t.RechargeType == rtype);
                        }
                        if (page.starttime!=null)
                        {
                            fun = fun.And(t => t.CreatTime >= page.starttime);
                        }
                        if (page.endtime != null)
                        {
                            DateTime enddate = Convert.ToDateTime(page.endtime).AddDays(1);
                            fun = fun.And(t => t.CreatTime <enddate);
                          
                        }
                        fun = fun.And(t => t.IsDel == false);
                        if (page.Rtype!=-1)
                        {
                            var IsHandel = page.Rtype == 1 ? true : false;
                            fun = fun.And(t => t.IsHandel == IsHandel);
                        }

                        //fun = fun.OrderByDescending(t => t.CreatTime);
                      //  IQueryable<RechargeRecordEntity> iqdata = db.RechargeRecordEntities;
                        var userlist = wdb.tuser.Where(t=>t.UserID>0);
                        if (page.isRobot!=-1)
                        {
                            userlist = userlist.Where(t=>t.isRobot== page.isRobot);
                        }
                      
                        var data = db.RechargeRecordEntities.Where(fun).OrderByDescending(t => t.CreatTime).
                            Skip((page.PageIndex - 1) * page.PageSize).
                            Take(page.PageSize).ToList();

                        var ids = data.Select(s => s.UserId).ToList();
                        var userdata = userlist.Where(t => ids.Contains(t.UserID)).ToList();

                        var  rdata = (from a in data
                                 join b in userdata
                                on a.UserId equals b.UserID
                                into c
                                from cc in c.DefaultIfEmpty()
                                select new ChargelogView
                                {
                                    UserName = cc?.wechatName,
                                    FromAdminId = Convert.ToInt32(a.UserId),
                                    FromUserid = Convert.ToInt32(a.UserId),
                                    Money = a.GoldCount / 100,
                                    UserID = a.UserId,
                                    Remark = a.Remark,
                                    FromType = 1,
                                    OrderNum = a.OrderNumber,
                                    _businessOrderState = a.RechargeType == 8 || a.RechargeType == 9 ? "" : Enum.GetName(typeof(payresult), a.businessOrderState),
                                    CentreOrderNum = a.CentreOrderNum,
                                    _orderState = a.RechargeType == 8 || a.RechargeType == 9 ? "" : Enum.GetName(typeof(payresult), a.orderState),
                                    RechargeType = ((Rechargechannel)Enum.Parse(typeof(Rechargechannel), a.RechargeType.ToString())).ToDescription(),
                                    CreatTime = a.CreatTime.ToString("yyyy-MM-dd HH:mm:ss")
                                }).ToList();
                        if (page.isExport == 1)
                        {
                            Dictionary<string, string> headdec = new Dictionary<string, string>();
                            headdec.Add("Idx", "主键");
                            headdec.Add("Money", "充值金额");
                            headdec.Add("RechargeType", "充值通道");
                            headdec.Add("CreatTime", "充值时间");
                            headdec.Add("UserID", "充值用户ID");
                            headdec.Add("Remark", "备注");
                            var serverpath = HttpContext.Current.Server.MapPath("/ExcelFile/ExportData.xls");
                            var exportdata = data.Select(a => new ChargelogView
                            {
                                UserName = "UserName",
                                FromAdminId = Convert.ToInt32(a.UserId),
                                FromUserid = Convert.ToInt32(a.UserId),
                                Money = a.GoldCount / 100,
                                UserID = Convert.ToInt32(a.UserId),
                                Remark = a.Remark,
                                FromType = 1,
                                RechargeType = ((Rechargechannel)Enum.Parse(typeof(Rechargechannel), a.RechargeType.ToString())).ToDescription(),
                                CreatTime = a.CreatTime.ToString("yyyy-MM-dd HH:mm:ss")
                            }).ToList();

                            exportdata.Add(new ChargelogView() { UserName = "充值金额:", Money = exportdata.Sum(t => t.Money) });
                            var bytedata = NPOIExcel.ToExcel<ChargelogView>(exportdata, headdec, serverpath);
                            result.filebyte = bytedata;
                        }



                        result.Message = "获取成功";
                        result.TotalCount = data.Count();
                        result.Data = rdata;
                    }
                }
            }
            catch (Exception ex)
            {
                Log.Debug("获取充值日志", ex.Message);
                result.Message = ex.Message;
                result.Code = (int)Status.fail;
            }
            return result;
        }

        public DataResults<ChargelogView> GetChargeLogDataInfo(DPagePara page, string selectKeywords)
        {
            selectKeywords = selectKeywords != null ? selectKeywords.Trim() : "";
            DataResults<ChargelogView> result = new DataResults<ChargelogView>();
            Expression<Func<RechargeRecordEntity, bool>> fun = w => w != null;
            if (page == null) page = new DPagePara();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            result.isExport = page.isExport;
            //  page.starttime =page.endtime= Convert.ToDateTime( "2019-12-12");
            try
            {
                using (texas_2021Entities wdb = new texas_2021Entities())
                {
                    using (DBContextHelper db = new DBContextHelper())
                    {
                       
                        if (!string.IsNullOrEmpty(page.Keywords))
                        {
                            int.TryParse(page.Keywords, out int tempuid);
                            fun = fun.And(t => t.UserId == tempuid);
                        }
                        if (!string.IsNullOrEmpty(selectKeywords))
                        {
                            int.TryParse(selectKeywords, out int rtype);
                            fun = fun.And(t => t.RechargeType == rtype);
                        }
                        if (page.starttime != null)
                        {
                            fun = fun.And(t => t.CreatTime >= page.starttime);
                        }
                        if (page.endtime != null)
                        {
                            DateTime enddate = Convert.ToDateTime(page.endtime).AddDays(1);
                            fun = fun.And(t => t.CreatTime < enddate);

                        }
                        if (page.Rtype != -1)
                        {
                            var IsHandel = page.Rtype == 1 ? true : false;
                            fun = fun.And(t => t.IsHandel == IsHandel);
                        }

                        //fun = fun.OrderByDescending(t => t.CreatTime);
                        List<RechargeRecordEntity> iqdata = db.RechargeRecordEntities.Where(fun)
                            .OrderByDescending(t => t.CreatTime)
                            .Skip((page.PageIndex - 1) * page.PageSize)
                            .Take(page.PageSize)
                            .ToList(); 
                        var userlist = wdb.tuser.Where(t => t.UserID > 0);
                        if (page.isRobot != -1)
                        {
                            userlist = userlist.Where(t => t.isRobot == page.isRobot);
                        }
                        var userdata = userlist.ToList();
                        var iqdatainfo = iqdata.ToList();
                        var data = from a in iqdatainfo
                                   select new ChargelogView
                                   {
                                       UserName = a.UserName,
                                       FromAdminId = Convert.ToInt32(a.UserId),
                                       FromUserid = Convert.ToInt32(a.UserId),
                                       Money = a.GoldCount / 100,
                                       UserID = Convert.ToInt32(a.UserId),
                                       Remark = a.Remark,
                                       FromType = 1,
                                       OrderNum = a.OrderNumber,
                                       _businessOrderState = a.RechargeType == 8 || a.RechargeType == 9 ? "" : Enum.GetName(typeof(payresult), a.businessOrderState),
                                       CentreOrderNum = a.CentreOrderNum,
                                       _orderState = a.RechargeType == 8 || a.RechargeType == 9 ? "" : Enum.GetName(typeof(payresult), a.orderState),
                                       RechargeType = ((Rechargechannel)Enum.Parse(typeof(Rechargechannel), a.RechargeType.ToString())).ToDescription(),
                                       CreatTime = a.CreatTime.ToString("yyyy-MM-dd HH:mm:ss")
                                   };


                        if (page.isExport == 1)
                        {
                            Dictionary<string, string> headdec = new Dictionary<string, string>();
                            headdec.Add("Idx", "主键");
                            headdec.Add("Money", "充值金额");
                            headdec.Add("RechargeType", "充值通道");
                            headdec.Add("CreatTime", "充值时间");
                            headdec.Add("UserID", "充值用户ID");
                            headdec.Add("Remark", "备注");
                            var serverpath = HttpContext.Current.Server.MapPath("/ExcelFile/ExportData.xls");
                            var exportdata = iqdata.OrderByDescending(t => t.CreatTime).ToList().Select(a => new ChargelogView
                            {
                                UserName = "UserName",
                                FromAdminId = Convert.ToInt32(a.UserId),
                                FromUserid = Convert.ToInt32(a.UserId),
                                Money = a.GoldCount / 100,
                                UserID = Convert.ToInt32(a.UserId),
                                Remark = a.Remark,
                                FromType = 1,
                                RechargeType = ((Rechargechannel)Enum.Parse(typeof(Rechargechannel), a.RechargeType.ToString())).ToDescription(),
                                CreatTime = a.CreatTime.ToString("yyyy-MM-dd HH:mm:ss")
                            }).ToList();

                            exportdata.Add(new ChargelogView() { UserName = "充值金额:", Money = exportdata.Sum(t => t.Money) });
                            var bytedata = NPOIExcel.ToExcel<ChargelogView>(exportdata, headdec, serverpath);
                            result.filebyte = bytedata;
                        }



                        result.Message = "获取成功";
                        result.TotalCount = data.Count();
                        result.Data = data.ToList();
                    }
                }
            }
            catch (Exception ex)
            {
                Log.Debug("获取充值日志", ex.Message);
                result.Message = ex.Message;
                result.Code = (int)Status.fail;
            }
            return result;
        }

        public DataResults<ChargelogDayStatistics> GetChargeLogStatistics(DPagePara page)
        {
            DataResults<ChargelogDayStatistics> result = new DataResults<ChargelogDayStatistics>();
            if (page == null) page = new DPagePara();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            result.starttime = page.starttime;
            result.endtime = page.endtime;
            result.ChangeType = page.ChangeType;
            result.Rtype = page.Rtype;
            try
            {
                using (DBContextHelper db = new DBContextHelper())
                {
                    IQueryable<RechargeRecordEntity> IQdata = db.RechargeRecordEntities;
                    string strwhere = "WHERE IsHandel=1 ";
                    if (!string.IsNullOrEmpty(page.Keywords))
                    {
                        int.TryParse(page.Keywords, out int userid);
                        strwhere += " and UserId="+ userid;
                    }
                    if (page.Rtype!=0)
                    {
                        strwhere += $" and RechargeType={page.Rtype}";
                    }

                    if (page.starttime != null && page.endtime != null)
                    {
                        strwhere += $" and CreatTime>='{page.starttime}' and CreatTime<='{page.endtime}'";
                    }
                    else
                    {
                        var dicdatetime = StatisticsUtil.GetTimeStartTime(page.ChangeType).FirstOrDefault();
                        page.starttime = dicdatetime.Key;
                        page.endtime = dicdatetime.Value;
                        strwhere += $" and CreatTime>='{page.starttime}' and CreatTime<='{page.endtime}'";
                    }

                    string sql = $@"select *,SUM(GoldCount/100) Gold,COUNT(OrderNumber) OrderNum,COUNT(DISTINCT UserId) UserNum 
                                     from rechargerecordentities {strwhere}
                                    GROUP BY DATE_FORMAT(CreatTime,'%Y-%m-%d')
                                    ORDER BY Gold desc  limit {(page.PageIndex - 1) * page.PageSize + "," + page.PageSize}";

                    var data = db.Database.SqlQuery<ChargelogDayStatistics>(sql).ToList();

                    //linq musql查询有bug  待验证
                    var dataday = from a in IQdata
                                  orderby a.CreatTime descending
                                  group a by new { a.CreatTime.Year, a.CreatTime.Month , a.CreatTime.Day }
                                  into aa
                                  select aa;




                    result.TotalCount = dataday.Count();
                    result.Data = data;
                    result.Message = "获取成功";
                    return result;
                }


            }
            catch (Exception ex)
            {
                result.Data = new List<ChargelogDayStatistics>();
                result.Message = "获取成功";
                return result;
            }
        }
        /// <summary>
        /// 查询用户近七天充值记录
        /// </summary>
        /// <param name="userid"></param>
        /// <returns></returns>
        public List<RechargeRecordEntity> GetUserNearlySevenDays(int userid)
        {
            try
            {
                using (DBContextHelper db = new DBContextHelper())
                {
                    var mintime = DateTime.Now.AddDays(-7);
                    var data = db.RechargeRecordEntities.Where(t => t.UserId == userid && t.CreatTime>= mintime).ToList();
                    return data;

                }
            }
            catch (Exception)
            {
                return new List<RechargeRecordEntity>();
            }
        }

        /// <summary>
        /// 根据时间查询用户充值记录
        /// </summary>
        /// <param name="userid"></param>
        /// <returns></returns>
        public List<RechargeRecordEntity> GetUserNearlyDays(int userid,string datestring)
        {
            try
            {
                using (DBContextHelper db = new DBContextHelper())
                {
                    var mindate = Convert.ToDateTime(datestring);
                    var sdate = mindate.ToGetDayStartDateTime();
                    var edate = mindate.ToGetDayEndDateTime();
                    var data = db.RechargeRecordEntities.Where(t => t.UserId == userid && t.CreatTime >= sdate && t.CreatTime< edate).ToList();
                    return data;

                }
            }
            catch (Exception)
            {
                return new List<RechargeRecordEntity>();
            }
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="money"></param>
        /// <param name="pwd"></param>
        /// <param name="account"></param>
        /// <param name="username"></param>
        /// <param name="accounttype"> //1 支付宝 2 银行卡</param>
        /// <returns></returns>
        public string UserCashMoney(int userid, int money, string pwd, int type,string Remark,gameuser g)
        {

            sc_cashmoney _senddata = new sc_cashmoney() { result = 1, fn = "sc_cashmoney" };
            if (money >= 10000 && money%1000==0)
            {
                var user = gameuser.GetEntityByID(userid);
               
                if (user != null)
                {

                    if (string.IsNullOrEmpty(user.UserPassword))
                    {
                        _senddata.result = -21;//请设置交易密码
                    }else if (type == 1 && string.IsNullOrEmpty(g.alipayNum))
                    {
                        _senddata.result = -20;//请绑定支付宝
                    }
                    else if (type == 2 && string.IsNullOrEmpty(g.BankNum))
                    {
                        _senddata.result = -22;//请绑银行卡
                    }
                    else
                    {
                        //if (!string.IsNullOrEmpty(user.UserPassword) && StringHelper.Encrypto(pwd, "bkpassword") == user.UserPassword)
                        //{
                            using (DBContextHelper db = new DBContextHelper())
                            {
                                //每天第一笔提现免手续费
                                var uid = userid.ToString();
                                var date = DateTime.Now.ToGetBeginDateTime();
                                decimal smoney = 0;
                                var fristtakenow = db.TakeNowRecordEntities.Where(t => t.UserId == uid && t.CreatTime >= date).FirstOrDefault();
                                if (fristtakenow != null)
                                    smoney = (money / 100) * ConfigurationData.taxrate;
                                else
                                    smoney = 0;

                                db.TakeNowRecordEntities.Add(new TakeNowRecordEntity()
                                {
                                    account = type == 1 ? g.alipayNum : g.BankNum + $"({g.BankName})",
                                    AccountType = type.ToString(),
                                    Phone = type == 1 ? g.aPhone : g.bPhone,
                                    RealName = type == 1 ? g.alipayName : g.BankUn,
                                    UserId = userid.ToString(),
                                    Amount = money,
                                    Remark = g.BankName,
                                    State = 0,
                                    OrderNum = "T"+StringHelper.GenerateId(),
                                    isTax = smoney == 0 ? false : true,
                                    IsDel = false,
                                    CreatTime = DateTime.Now,
                                    ServiceCharge = smoney,
                                    ActualAmount = (money / 100) - smoney
                                });
                                db.SaveChanges();
                            }
                        //}
                        //else
                        //{
                        //    _senddata.result = -1;//密码错误
                        //}
                    }
                    
            }
                else
                {
                    _senddata.result = -2;//用户不存在
                }
            }
            else
            {
                _senddata.result = -4;//金额必须大于100
            }
            return JsonHelper.ObjectToJSON(_senddata);
        }


        public string CheckUserCashMoney(int userid, int money, string pwd, string remark,gameuser g,int type)
        {
            sc_cashmoney _senddata = new sc_cashmoney() { result = 1, fn = "sc_cashmoney" };
           
            if (money >= 10000 && money % 1000 ==0)
            {
                var user = gameuser.GetEntityByID(userid);
                if (user != null)
                {
                    if (string.IsNullOrEmpty(user.UserPassword))
                    {
                        _senddata.result = -21;//请设置交易密码
                    }
                    else if (type == 1 && string.IsNullOrEmpty(g.alipayNum))
                    {
                        _senddata.result = -20;//请绑定支付宝
                    }
                    else if (type == 2 && string.IsNullOrEmpty(g.BankNum))
                    {
                        _senddata.result = -22;//请绑银行卡
                    }
                    else
                    {
                        if (user.Gold < money)
                            _senddata.result = -7;//余额不足
                        else
                        {
                            if (string.IsNullOrEmpty(user.UserPassword))
                            {
                                _senddata.result = -21;//请设置交易密码
                            }
                            else
                            {
                                //if (string.IsNullOrEmpty(user.UserPassword) || StringHelper.Encrypto(pwd, "bkpassword") != user.UserPassword)
                                //{
                                //    _senddata.result = -1;//密码错误
                                //}
                            }
                        }
                    }
                }
                else
                {
                    _senddata.result = -2;//用户不存在
                }
            }
            else
            {
                _senddata.result = -4;//金额必须大于100
            }
            return JsonHelper.ObjectToJSON(_senddata);
        }
        //充值总计
        public decimal ChargeZJ(DPagePara page, string types)
        {
            using (DBContextHelper dbhelper = new DBContextHelper())
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
                    sqlwhere += " and CreatTime<'" + Convert.ToDateTime(page.endtime).AddDays(1) + "'";
                }
                if (!string.IsNullOrEmpty(types))
                {
                    sqlwhere += " and RechargeType=" + types;

                }

                if (!string.IsNullOrEmpty(page.Keywords))
                {
                    sqlwhere += " and UserId=" + page.Keywords;

                }
                string sql = "select SUM(GoldCount) as num from rechargerecordentities " + sqlwhere;
              var num=  dbhelper.Database.SqlQuery<decimal>(sql).First();

                return num;
            }
        }

        public void GetNearfiveOrder()
        {
            
        }
    }
}
