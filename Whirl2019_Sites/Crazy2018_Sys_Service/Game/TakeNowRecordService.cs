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
using static Crazy2018_Sys_Common.TableUtil;
using System.Configuration;
using System.Web;
using static Crazy2018_Sys_Common.DTEnums;

namespace Crazy2018_Sys_Service
{
    public class TakeNowRecordService : BaseService<TakeNowRecordEntity, long, DBContextHelper>, ITakeNowRecordService
    {
        IManageService manageLogservice;
        ITaxlogService taxlog;
        IGameUserService gamuser;
        public TakeNowRecordService(IManageService _manageLogservice, ITaxlogService _taxlog, IGameUserService _gamuser)
        {
            manageLogservice = _manageLogservice;
            taxlog = _taxlog;
            gamuser = _gamuser;
        }
        public string serviceUrl = ConfigurationManager.AppSettings["SutHttpServer"].ToString();
        public int GetTodayTakeCount(string userId)
        {
            string end = DateTime.Now.ToString("yyyy-MM-dd") + " 23:59:59";
            string start = DateTime.Now.ToString("yyyy-MM-dd") + " 00:00:00";
            DateTime eTime = Convert.ToDateTime(end);
            DateTime sTime= Convert.ToDateTime(start);
            return GetCount(w => w.CreatTime <= eTime&&w.CreatTime>= sTime && w.UserId == userId);
        }

        public DataResults<TakeNowView> GetTakeNowData(DPagePara page,int roleId)
        {
            DataResults<TakeNowView> result = new DataResults<TakeNowView>();
            if (page == null) page = new DPagePara();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            result.ChangeType = page.ChangeType;
            Expression<Func<TakeNowRecordEntity, bool>> fun = w => w != null;
            if (!string.IsNullOrEmpty(page.Keywords))
            {
                fun = fun.And(w => w.UserId.Contains(page.Keywords) || w.account.Contains(page.Keywords));
            }
            if (page.ChangeType!=-1)
            {
                fun = fun.And(w => w.State == page.ChangeType);
            }
            if (page.starttime != null )
            {
                fun = fun.And(w => w.CreatTime >= page.starttime );
            }
            if(page.endtime != null)
            {
                DateTime enddate = Convert.ToDateTime(page.endtime).AddDays(1);
                fun = fun.And(w => w.CreatTime <enddate);
            }

            using (DBContextHelper dbHelper = new DBContextHelper())
            {
                using (snscenterwhirlEntities snsHelper = new snscenterwhirlEntities())
                {
                   // var snsuserInfo = snsHelper.snsuserinfo;
                   // var cards = dbHelper.BankCardEntities;
                    var takeRecords = GetEntityLisrByWhere(fun).OrderByDescending(w => w.CreatTime)
                    .Skip((page.PageIndex - 1) * page.PageSize)
                    .Take(page.PageSize).ToList();
                    var join = from t in takeRecords
                               //join c in cards on t.account equals c.BankCardID
                               join sns in snsHelper.snsuserinfo on  Convert.ToInt32(t.UserId) equals sns.UserId
                               select new TakeNowView
                               {
                                   Amount = t.Amount/100,
                                   account = t.account,
                                   UserId = t.UserId,
                                   DfStateName = Enum.GetName(typeof(DfState), t.DfState),
                                   ID = t.ID,
                                   AccountType = Enum.GetName(typeof(AccountTypeEnum),int.Parse(t.AccountType)),
                                   StateName = Enum.GetName(typeof(TakeNowStateEnum), t.State),
                                   State = t.State,
                                   ActualAmount = t.ActualAmount,
                                   ExamineDate = t.ExamineDate.ToString("yyyy-MM-dd HH:mm:ss"),
                                   ServiceCharge = t.ServiceCharge,
                                   Remark = t.Remark??"",
                                   UserName = t.RealName,
                                   CreatTime = t.CreatTime.ToString("yyyy-MM-dd HH:mm:ss"),
                                   Mobile=sns.Mobile??"",
                                   isTax=t.isTax == true?"是":"否"
                               };


                    if (page.isExport == 1)
                    {
                        Dictionary<string, string> headdec = new Dictionary<string, string>();
                        headdec.Add("Amount", "提现金额");
                        headdec.Add("account", "提现账号");
                        headdec.Add("UserId", "用户Id");
                        headdec.Add("ID", "主键");
                        headdec.Add("AccountType", "提现类型");
                        headdec.Add("StateName", "提现状态");
                        headdec.Add("ActualAmount", "实际提现金额");
                        headdec.Add("ExamineDate", "审核时间");
                        headdec.Add("ServiceCharge", "手续费");
                        headdec.Add("Remark", "备注");
                        headdec.Add("UserName", "姓名");
                        headdec.Add("CreatTime", "创建时间");
                        headdec.Add("Mobile", "手机");
                        headdec.Add("isTax", "是否抽税");

                        var serverpath = HttpContext.Current.Server.MapPath("/ExcelFile/提现数据.xls");
                        var exportdata = join.OrderByDescending(w => w.CreatTime).ToList();
                        exportdata.Add(new TakeNowView() { account = "总金额:", Remark= exportdata .Sum(t=>t.Amount).ToString()});
                        var bytedata = NPOIExcel.ToExcel<TakeNowView>(exportdata.ToList(), headdec, serverpath);
                        result.filebyte = bytedata;
                    }

                    var data = join.ToList();
                    result.Data = data.ToList();
                    result.TotalCount = GetCount(fun);
                    return result;
                }

            }
        }

      
        //提现总计
        public int TiXianZJ(DPagePara page)
        {

            using (DBContextHelper dbHelper = new DBContextHelper())
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
                if (page.ChangeType!=-1)
                {
                    sqlwhere += " and State=" + page.ChangeType;

                }

                if (!string.IsNullOrEmpty(page.Keywords))
                {
                    sqlwhere += " and UserId=" + page.Keywords;

                }
                string sql = "select IFNULL(SUM(Amount),0) as num from takenowrecordentities " + sqlwhere;
                return dbHelper.Database.SqlQuery<int>(sql).First();
            }
        }
        public DataResult SetTakeNowState(int id, int state)
        {
            DataResult result = new DataResult() { Message = "设置成功" };
            
            try
            {
                if (id <= 0)
                {
                    result.Code = (int)Status.fail;
                    result.Message = "传入的id有误";
                    return result;
                }
                ////0 申请提现 1 已扣除金币 2 已提现 3已审核
                //if (state != 0 && state != 1 && state != 2)
                //{
                //    result.Code = (int)Status.fail;
                //    result.Message = "设置的状态有误";
                //    return result;
                //}TakeNowStateEnum
                var entity = GetEntityByID(id);
                if (entity == null)
                {
                    result.Code = (int)Status.fail;
                    result.Message = "记录不存在";
                    return result;
                }
                //提现操作
                if (state == 2)
                {
                    var tuser = gamuser.GetEntityByID(int.Parse(entity.UserId));
                    if (tuser != null)
                    {
                       result.Code = (int)Status.Success;
                       result.Message = "提现成功！";
                        if (entity.ServiceCharge>0)
                        {
                            Task tt = new Task(() =>
                            {
                                //添加税收
                                taxlog.AddEntity(new ttaxlog()
                                {
                                    UserId = int.Parse(entity.UserId),
                                    ActionCoin = (int)entity.ServiceCharge,
                                    ActionType = (int)ResActionType.提现税收,
                                    BeforCoin = (int)tuser.Gold / 100,
                                    AfterCoin = (int)((int)tuser.Gold / 100 - entity.Amount / 100),
                                    SourceGameID = 52,
                                    SourceRoomID = 521,
                                    TableUserLogId = 0,
                                    CreateDate = DateTime.Now,
                                    IsHandel = true,
                                    SourceUserId = int.Parse(entity.UserId)
                                });
                            });
                            tt.Start();
                        }
                        manageLogservice.AddActionlog(ActionEnum.Cash, OptAction.CashManage,
                             ActionEnum.Cash.ToDescription() + "金额:" + (entity.ActualAmount/100) + ",申请人:" + entity.UserId + ",提现订单ID:" + entity.ID);
                    }
                    else
                    {
                        result.Code = (int)Status.fail;
                        result.Message = "提现用户不存在！";
                    }
                }
                if (entity.State == 2)
                {
                    result.Code = (int)Status.fail;
                    result.Message = "当条记录已经被设置为已提现状态不能再次处理";
                    return result;
                }
                entity.State = state;
                
                if (state == (int)TakeNowStateEnum.审核通过)
                {
                    entity.ExamineDate = DateTime.Now;
                    
                    manageLogservice.AddActionlog(ActionEnum.Audit, OptAction.CashManage,
                       ActionEnum.Audit.ToDescription() + OptAction.CashManage.ToDescription() + ",申请人:" + entity.UserId + ",提现订单ID:" + entity.ID);
                }
                var updateentity = UpdateEntity(entity);
            }
            catch (Exception ex)
            {
                result.Code = (int)Status.fail;
                result.Message = ex.Message;
                Log.Error("SetTakeNowState", ex.ToString());
            }
            return result;
        }

        public List<GameServerTakeNow> GetGameServerTakeNowLog(int userid)
        {
            Expression<Func<TakeNowRecordEntity, bool>> fun = w => w != null;
            var mindate = DateTime.Now.AddDays(-7);
            fun = fun.And(w => w.UserId == userid.ToString() && w.CreatTime>= mindate);
            return  GetEntityLisrByWhere(fun).Select(t=>new GameServerTakeNow
            {
                type = "提现",
                money = t.Amount/100,
                date = t.CreatTime,
                states =Enum.GetName(typeof(TakeNowStateEnum), t.State)
            }).ToList();
        }

        /// <summary>
        /// 获取
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="datestring"></param>
        /// <returns></returns>
        public List<GameServerTakeNow> GetGameServerTakeNowLog(int userid,string datestring)
        {
            Expression<Func<TakeNowRecordEntity, bool>> fun = w => w != null;
            var mindate = Convert.ToDateTime(datestring);
            var sdate = mindate.ToGetDayStartDateTime();
            var edate = mindate.ToGetDayEndDateTime();
            fun = fun.And(w => w.UserId == userid.ToString() && w.CreatTime> sdate && w.CreatTime< edate);
            return GetEntityLisrByWhere(fun).Select(t => new GameServerTakeNow
            {
                type = "提现",
                money = t.Amount / 100,
                date = t.CreatTime,
                states = Enum.GetName(typeof(TakeNowStateEnum), t.State)
            }).ToList();
        }

    }
}
