using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Interface;
using Crazy2018_Sys_Interface.GameCore;
using Crazy2018_Sys_ViewEntity.Game;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using static Crazy2018_Sys_Common.DTEnums;

namespace Crazy2018_Sys_Service.GameCore
{
   public class GoldChangeh5gameService : BaseService<tgoldchangh5game, int, texas_2021Entities>, IGoldChangeh5gameService
    {
        IManageService manageLogservice;
        public GoldChangeh5gameService(IManageService _manageLogservice)
        {
            manageLogservice = _manageLogservice;
        }
        //GoldChangeh5gameView
        public DataResults<GoldChangeh5gameView> GetUserGoldChangeH5game(DPagePara page)
        {
            DataResults<GoldChangeh5gameView> result = new DataResults<GoldChangeh5gameView>();
            Expression<Func<tgoldchangh5game, bool>> fun = w => w != null;
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
                   // IQueryable<tgoldchangh5game> data = null;
                  //  List<tgoldchangh5game> rdata = new List<tgoldchangh5game>();
                   
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
                    //else
                    //{
                    //    data = dbhelper.tgoldchangelog.Where(o=>o.IsRobot == false).OrderByDescending(o => o.CreateTime);
                    //}
                   List<tgoldchangh5game> data = dbhelper.tgoldchangh5game.Where(fun).OrderByDescending(o => o.CreateTime).Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList();
                    result.TotalCount = GetCount(fun);
                    //rdata = data;

                    var _data = from a in data
                                join b in dbhelper.tuser on a.UserId equals b.UserID
                                join c in dbhelper.tgameinfo on a.GameId equals c.id into gm
                                from subpet in gm.DefaultIfEmpty()
                                orderby a.CreateTime descending

                                select new GoldChangeh5gameView
                                {
                                    Id = a.Id,
                                    UserId =(int)a.UserId,
                                    UserName = b?.wechatName,
                                    Gold = (decimal)a.Gold.Value,
                                    CreateTime = a.CreateTime,
                                    IsComplete = a.IsComplete==0 ? "失败":"成功",
                                    GameId =(int)a.GameId,
                                    GoldType = a.GoldType.Value,
                                    GameName = a.GameId == 0 ? "0" : subpet.name
                                };
                    result.TotalMoney = dbhelper.tgoldchangh5game.Sum(t => (long?)Math.Abs(t.Gold.Value/100 ))?.ToString();
                    result.Data = _data.ToList();
                    result.Message = "获取成功";
                    return result;
                }
            }
            catch (Exception ex)
            {
                result.Data = new List<GoldChangeh5gameView>();
                result.Message = "获取失败!";
            }
            return result;
        }

        public DataResult GoldChangeH5gameDel(string ids)
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
                    var entity = dbhelper.tgoldchangh5game.Find(id);
                    dbhelper.tgoldchangh5game.Remove(entity);
                }
                dbhelper.SaveChangesAsync();
                manageLogservice.AddActionlog(ActionEnum.Delete, OptAction.goldtolog, ActionEnum.Delete.ToDescription() + OptAction.goldtolog.ToDescription() + ",数据条数:" + noticeIds.Count());
            }
            result.Message = "删除成功";
            return result;
        }

    }
}
