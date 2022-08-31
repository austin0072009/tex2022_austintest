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
   public class ClubGoldLogService : BaseService<tclubgoldlog, int, texas_2021Entities>, IClubGoldLogService
    {
        IManageService manageLogservice;
        public ClubGoldLogService(IManageService _manageLogservice)
        {
            manageLogservice = _manageLogservice;
        }
        /// <summary>
        /// 获取俱乐部金币log
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        public DataResults<ClubGoldLogView> GetClubGoldData(DPagePara page)
        {
            DataResults<ClubGoldLogView> result = new DataResults<ClubGoldLogView>();
            Expression<Func<tclubgoldlog, bool>> fun = w => w != null;
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
                  //  IQueryable<tclubgoldlog> data = null;
                    List<tclubgoldlog> rdata = new List<tclubgoldlog>();
                    //data = dbhelper.tclubgoldlog;
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

                    result.TotalCount = GetCount(fun);// data.Count();
                    rdata = GetEntityLisrByWhere(fun).OrderByDescending(o => o.CreateTime).Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList();

                    var _data =
                                (from h in rdata
                                 join d in dbhelper.tclub on h.ClubId equals (int)d.idx into djoin
                                 from e in djoin.DefaultIfEmpty()
                                 orderby h.CreateTime descending
                                 select new ClubGoldLogView
                                 {
                                     Id = (int)h.Id,
                                     ClubId = e == null ? 0 : (int)e.idx,
                                     ClubName = e == null ? "" : e.Title,
                                     Gold = (long)h.Gold.Value,
                                     CreateTime = h.CreateTime.ToString(),
                                     ChangeType = h.ChangeType.Value,
                                     BeforeGold = (double)h.BeforeGold,
                                     AfterGold = (long)h.AfterGold,
                                     Remark = h.Remark
                                 }).ToList();

                   
                    result.TotalMoney = dbhelper.tclubgoldlog.Sum(t => (long?)Math.Abs(t.Gold.Value / 100))?.ToString();
                    result.Data = _data.ToList();
                    result.Message = "获取成功";
                    return result;
                }
            }
            catch (Exception ex)
            {
                result.Data = new List<ClubGoldLogView>();
                result.Message = "获取失败!";
            }
            return result;
        }
        public DataResult ClubGoldLogDel(string ids)
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
                    var entity = dbhelper.tclubgoldlog.Find(id);
                    dbhelper.tclubgoldlog.Remove(entity);
                }
                dbhelper.SaveChangesAsync();
                manageLogservice.AddActionlog(ActionEnum.Delete, OptAction.goldtolog, ActionEnum.Delete.ToDescription() + OptAction.goldtolog.ToDescription() + ",数据条数:" + noticeIds.Count());
            }
            result.Message = "删除成功";
            return result;
        }
    }
}
