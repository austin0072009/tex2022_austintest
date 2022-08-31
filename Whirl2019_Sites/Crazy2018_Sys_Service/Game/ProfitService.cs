using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity;
using Crazy2018_Sys_Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Crazy2018_Sys_Common;
using System.Data.Entity.Infrastructure;
using System.Data.Entity;
using System.Linq.Expressions;
using Crazy2018_Sys_ViewEntity;

namespace Crazy2018_Sys_Service
{
    public class ProfitService : BaseService<ProfitLog, long, DBContextHelper>, IProfitService
    {
        public DataResults<ProfitLogView> GetProfitLogs(DPage page)
        {
            DataResults<ProfitLogView> result = new DataResults<ProfitLogView>();
            if (page == null) page = new DPage();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            Expression<Func<ProfitLog, bool>> fun = w => w != null;
            if (!string.IsNullOrEmpty(page.Keywords))
            {
                int outUserId = 0;
                if (int.TryParse(page.Keywords, out outUserId))
                {
                    fun = fun.And(w => w.UserId == outUserId);
                }
            }
            result.Data = GetEntityLisrByWhere(fun).OrderByDescending(w => w.CreatTime).Skip((page.PageIndex - 1)
                * page.PageSize).Take(page.PageSize).
                Select(w => new ProfitLogView
                {
                    Amount = w.Amount,
                    UserId = w.UserId,
                    State = w.State,
                    CreatTime = w.CreatTime.ToString("yyyy-MM-dd HH:mm:ss")
                }).ToList();
            result.TotalCount = GetCount(fun);
            return result;
        }

        public DataResult<ProfitLog> ReceiveProfit(int userId, decimal amount)
        {
            throw new NotImplementedException();
        }

        //public DataResult<ProfitLog> ReceiveProfit(int userId, decimal amount)
        //{
        //    DataResult<ProfitLog> result = new DataResult<ProfitLog>();
        //    if (userId == 0)
        //    {
        //        result.Code = (int)Status.fail;
        //        result.Message = "用户ID为0";
        //    }
        //    using (texas_2021Entities dbHelper = new texas_2021Entities())
        //    {
        //        var dbSet = dbHelper.Set<tuseragent>();
        //        var aCount = dbHelper.tuseragent.Where(w => w.FatherId == userId);
        //        if (aCount.Count() < 3)
        //        {
        //            result.Code = (int)Status.fail;
        //            result.Message = "推广用户少于三人不能提现";
        //            return result;
        //        }
        //        var entity = dbHelper.tuseragent.FirstOrDefault(w => w.UserID == userId);
        //        if (entity == null)
        //        {
        //            result.Code = (int)Status.fail;
        //            result.Message = "用户不存在";
        //            return result;
        //        }
        //        //if (entity.GoldA < amount || amount < 100)
        //        //{
        //        //    result.Code = (int)Status.fail;
        //        //    result.Message = "可领取金额不足或者领取金额小于100";
        //        //    return result;
        //        //}
        //        //entity.GoldA -= amount;
        //        //entity.HistoryGoldA += amount;
        //        DbEntityEntry<tuseragent> entry = dbHelper.Entry(entity);
        //        if (entry.State == EntityState.Detached)
        //        {
        //            dbSet.Attach(entity);
        //            entry.State = EntityState.Modified;
        //        }
        //        var rCount = dbHelper.SaveChanges();
        //        var profitLog = new ProfitLog { Amount = amount, UserId = userId };
        //        profitLog.State = rCount > 0 ? 0 : -1;
        //        try
        //        {
        //            result.Data = AddEntity(profitLog);
        //        }
        //        catch (Exception ex)
        //        {

        //            throw;
        //        }
        //    }
        //    return result;
        //}
    }
}
