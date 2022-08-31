using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity.Game;
using Crazy2018_Sys_Interface.Game;
using Crazy2018_Sys_ViewEntity.Game;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Service.Game
{
   public class NoticesEntityService: BaseService<NoticesEntity, long, DBContextHelper>, INoticesEntityService
    {
        public bool Add(NoticesEntity NoticesEntity)
        {
            using (DBContextHelper db = new DBContextHelper())
            {
                if (NoticesEntity.ID > 0)
                {
                    db.NoticesEntity.Add(NoticesEntity);
                    db.SaveChanges();
                    return true;
                }
                else
                {
                    db.NoticesEntity.Add(NoticesEntity);
                    db.SaveChanges();
                    return true;
                }
            }

        }


        public DataResults<NoticesEntityView> GetNoticesEntityInfo(int typeid)
        {
            DataResults<NoticesEntityView> result = new DataResults<NoticesEntityView>();
          
            Expression<Func<NoticesEntity, bool>> fun = w => w != null;
            if (typeid != 0)
            {
                fun = fun.And(x => x.Type == typeid);
            }

            try
            {
                using (chesscarddbEntities dbhelper = new chesscarddbEntities())
                {
                    var userinfo = dbhelper.dt_manager.ToList();
                    using (DBContextHelper db = new DBContextHelper())
                    {
                        IQueryable<NoticesEntity> data = db.NoticesEntity.Where(fun);
                        var _data = (from a in data.ToList()
                                     join b in userinfo on a.Userid equals b.id
                                     orderby a.ID descending
                                     select new NoticesEntityView
                                     {
                                         Id = (int)a.ID,
                                         AnnouncementTime = a.AnnouncementTime.Date.ToString("MM月dd日"),
                                         CreateTime = a.CreateTime,
                                         Frozenmoney = a.Frozenmoney,
                                         Type = a.Type,
                                         Userid = a.Userid,
                                         Username = b.user_name,

                                         Matchinfos = a.Matchinfos==null?null:a.Matchinfos.Split(';').ToList(),
                                         Partnerusers = a.Partnerusers == null ? null : a.Partnerusers.Split(';').ToList(),
                                         Reportinfo = a.Reportinfo == null ? null : a.Reportinfo.Split(';').ToList(),
                                         Vioinfo = a.Vioinfo == null ? null : a.Vioinfo.Split(';').ToList(),

                                         TitleImgUrl =a.TitleImgUrl,
                                         ContentImgUrl=a.ContentImgUrl
                                        
                                     }).ToList();


                        result.TotalCount = _data.Count();
                        result.Data = _data.ToList();
                        result.Message = "获取成功";
                        return result;
                    }
                }
            }
            catch (Exception ex)
            {
                Log.Error("获取房间配置", ex.Message);
                result.Message = "fail";
                return result;
            }
        }
    }
}
