using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Interface;
using Crazy2018_Sys_Interface.Club;
using Crazy2018_Sys_ViewEntity.Club;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using static Crazy2018_Sys_Common.DTEnums;

namespace Crazy2018_Sys_Service.Club
{
  public class ClubFundLogService : BaseService<tclubfundlog, int, texas_2021Entities>, IClubFundLogService
    {
        IManageService manageLogservice;
        public ClubFundLogService(IManageService _manageLogservice)
        {
            manageLogservice = _manageLogservice;
        }
        /// <summary>
        /// 获取俱乐部金币log
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        public DataResults<ClubFundLogView> GetClubFundLogData(DPagePara page)
        {
            DataResults<ClubFundLogView> result = new DataResults<ClubFundLogView>();
            Expression<Func<tclubfundlog, bool>> fun = w => w != null;
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
                using (
                    texas_2021Entities dbhelper = new texas_2021Entities())
                {
                    //GoldChangelogView
                   // IQueryable<tclubfundlog> data = null;
                  //  List<tclubfundlog> rdata = new List<tclubfundlog>();
                   // data = dbhelper.tclubfundlog;
                    if (!string.IsNullOrEmpty(page.Keywords))
                    {
                        var keyuserid = int.Parse(page.Keywords);
                        fun = fun.And(st => st.ClubId == keyuserid);
                    }

                    if (page.starttime != null)
                    {
                        fun = fun.And(st => st.CreateTime > page.starttime && st.CreateTime < page.endtime);
                    }
                    //else
                    //{
                    //    data = dbhelper.tgoldchangelog.Where(o=>o.IsRobot == false).OrderByDescending(o => o.CreateTime);
                    //}

                    result.TotalCount = GetCount(fun);
                    List<tclubfundlog> rdata = GetEntityLisrByWhere(fun).OrderByDescending(o => o.CreateTime).Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList();

                    var _data =
                                  (from h in rdata
                                   join b in dbhelper.tuser on h.UserId equals b.UserID into bjoin
                                   from c in bjoin.DefaultIfEmpty()
                                   join d in dbhelper.tclub on h.ClubId equals (int)d.idx into djoin
                                   from e in djoin.DefaultIfEmpty()
                                   orderby h.CreateTime descending
                                   select new ClubFundLogView

                                   {
                                       Id = h.Id,
                                       UserId = (int)h.UserId,
                                       UserName = c == null ? "" : c.wechatName,
                                       ClubId = e == null ? 0 : (int)e.idx,
                                       ClubName = e == null ? "" : e.Title,
                                       BalanNum = (long)h.BalanNum,
                                       CreateTime = h.CreateTime.ToString(),
                                       ChangeType = h.ChangeType.Value,
                                       fnum = (int)h.fnum,
                                       fundtotal = (long)h.fundtotal,
                                       Price = (int)h.Price
                                   }).ToList();


                    result.TotalMoney = dbhelper.tclubfundlog.Sum(t => (long?)Math.Abs(t.Price.Value / 100))?.ToString();
                    result.Data = _data.ToList();
                    result.Message = "获取成功";
                    return result;
                }
            }
            catch (Exception ex)
            {
                result.Data = new List<ClubFundLogView>();
                result.Message = "获取失败!";
            }
            return result;
        }
        public DataResult ClubClubFundLogDel(string ids)
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
                    var entity = dbhelper.tclubfundlog.Find(id);
                    dbhelper.tclubfundlog.Remove(entity);
                }
                dbhelper.SaveChangesAsync();
                manageLogservice.AddActionlog(ActionEnum.Delete, OptAction.goldtolog, ActionEnum.Delete.ToDescription() + OptAction.goldtolog.ToDescription() + ",数据条数:" + noticeIds.Count());
            }
            result.Message = "删除成功";
            return result;
        }

    }
}
