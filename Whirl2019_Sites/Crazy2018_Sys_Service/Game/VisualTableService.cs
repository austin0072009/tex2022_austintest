using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity;
using Crazy2018_Sys_Interface;
using Crazy2018_Sys_ViewEntity.GameCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Service.Game
{
    public class VisualTableService : BaseService<VisualTable, int, DBContextHelper>, IVisualTableService
    {
        public int DelEntity(long key)
        {
            throw new NotImplementedException();
        }

        public VisualTable GetEntityByID(long key)
        {
            throw new NotImplementedException();
        }

        public VisualTable GetVisualTableUrl(int tablenum)
        {
            return GetEntityByWhere(t => t.manNum == tablenum);
        }

        public List<VisualTable> GetVisualTableList()
        {
            List<VisualTable> data = new List<VisualTable>();
            try
            {
                using (DBContextHelper db = new DBContextHelper())
                {
                    return db.VisualTables.OrderByDescending(t => t.ID).ToList();
                }
            }
            catch (Exception ex)
            {
                return new List<VisualTable>();
            }

        }


        public DataResults<VisualTableView> GetVisualTableList(DPage page)
        {
            DataResults<VisualTableView> result = new DataResults<VisualTableView>();
            if (page == null) page = new DPage();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            Expression<Func<VisualTable, bool>> fun = w => w != null;
            try
            {
                using (chesscarddbEntities dbhelper = new chesscarddbEntities())
                {



                    if (!string.IsNullOrEmpty(page.Keywords))
                    {
                        int tempId = 0;
                        int.TryParse(page.Keywords, out tempId);
                        if (tempId > 0)
                            fun = fun.And(w => w.ID == tempId);
                        else
                            fun = fun.And(w => w.ID.ToString().Contains(page.Keywords));
                    }


                    using (DBContextHelper db = new DBContextHelper())
                    {
                        IQueryable<VisualTable> table = db.VisualTables.Where(fun);
                        //IQueryable<tgameinfo> gameinfo = dbwhirl.tgameinfo;
                        //from a in data.Where(fun)
                        //join b in db.tuser on a.UserId equals b.UserID
                        ////  join c in db.tgameinfo on a.GameId equals c.id
                        //orderby a.TotalHand descending


                        using (texas_2021Entities dbwhirl = new texas_2021Entities())
                        {
                            
                            var dataday = (from t in table
                                           select new VisualTableView
                                           {
                                               ID = (int)t.ID,
                                               gameid = t.gameid,
                                               vurl1 = t.vurl1,
                                               vurl2 = t.vurl2,
                                               vurl3 = t.vurl3,
                                               state = t.state,
                                               IsDel = t.IsDel,
                                               manNum = t.manNum,
                                               tablestate = t.tablestate,
                                               pakerlist = t.pakerlist,
                                               CreatTime = t.CreatTime,
                                           }).ToArray();



                            var data = (from t in dataday
                                        join b in dbwhirl.tgameinfo on t.gameid equals b.id.ToString()
                                        orderby t.ID descending
                                        select new VisualTableView
                                        {
                                            ID = (int)t.ID,
                                            gameid = b.id.ToString(),
                                            gameName = b.name,
                                            vurl1 = t.vurl1,
                                            vurl2 = t.vurl2,
                                            vurl3 = t.vurl3,
                                            state = t.state,
                                            IsDel = t.IsDel,
                                            manNum = t.manNum,
                                            tablestate = t.tablestate,
                                            pakerlist = t.pakerlist,
                                            CreatTime = t.CreatTime,

                                        }).ToArray();
                            result.Data = data.ToList();
                            result.TotalCount = data.Count();

                        }
                    }
                }
            }
            catch (Exception ex)
            {
                Log.Error(this.GetType().ToString(), ex.Message);
                result.Code = (int)Status.fail;
                result.Message = "获取失败";
            }
            return result;
        }

        public VisualTable GetVisualById(int Id)
        {
            VisualTable data = new VisualTable();
            try
            {
                using (DBContextHelper db = new DBContextHelper())
                {
                    return db.VisualTables.Where(t => t.ID == Id).First();
                }
            }
            catch (Exception ex)
            {
                return new VisualTable();
            }
        }

        public DataResult DelVisualTables(string ids)
        {

            DataResult result = new DataResult();
            if (string.IsNullOrEmpty(ids))
            {
                result.Code = (int)Status.fail;
                result.Message = "id不能为空";
                return result;
            }
            var visualIds = ids.Split(',');
            foreach (var item in visualIds)
            {
                if (string.IsNullOrEmpty(item)) continue;
                int id = 0;
                int.TryParse(item, out id);
                using (DBContextHelper db = new DBContextHelper())
                {
                    var visualNntity = db.VisualTables.Find(id);
                    db.VisualTables.Remove(visualNntity);
                    db.SaveChanges();
                }
            }
            result.Message = "删除成功";
            return result;
        }

    }
}
