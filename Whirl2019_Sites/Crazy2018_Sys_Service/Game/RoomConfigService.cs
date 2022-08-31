using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity.Game;
using Crazy2018_Sys_Interface;
using Crazy2018_Sys_Interface.Game;
using Crazy2018_Sys_ViewEntity;
using Crazy2018_Sys_ViewEntity.Game;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Service.Game
{

    class RoomConfigService : BaseService<RoomConfiguration, long, DBContextHelper>, IRoomConfigService
    {
        public bool Add(RoomConfiguration room)
        {
            using (DBContextHelper db = new DBContextHelper())
            {
                if (room.ID > 0)
                {
                    db.RoomConfiguration.Add(room);
                    db.SaveChanges();
                    return true;
                }
                else
                {
                    db.RoomConfiguration.Add(room);
                    db.SaveChanges();
                    return true;
                }
            }
        }
        public DataResults<RoomConfigurationView> GetRoomConfigData(DPage page)
        {
            DataResults<RoomConfigurationView> result = new DataResults<RoomConfigurationView>();
            if (page == null) page = new DPagePara();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            Expression<Func<RoomConfiguration, bool>> fun = w => w != null;
            if (!string.IsNullOrEmpty(result.Keywords))
            {
                fun = fun.And(w => w.ID.ToString()==page.Keywords || w.Baseskin.ToString()==page.Keywords || w.LastTime.ToString()==page.Keywords);
            }

            try
            {
                using (texas_2021Entities dbhelper = new texas_2021Entities())
                {
                    //var gameinfo = dbhelper.tgameinfo.ToList();
                    //var gameleveinfo = dbhelper.tgamelevelinfo.ToList();
                    //var ardata = (from a in gameinfo
                    //              join b in gameleveinfo on a.id equals b.gameid
                    //              select new RoomListView
                    //              {
                    //                  Gamename = a.name,
                    //                  RoomName = b.Name,
                    //                  ownerId = a.id,
                    //              }).OrderBy(x => x.ownerId).ToList();

                    using (DBContextHelper db = new DBContextHelper())
                    {
                        IQueryable<RoomConfiguration> data = db.RoomConfiguration.Where(fun);
                        if (!string.IsNullOrEmpty(page.Keywords))
                        {
                            //AddNamedata = data.Where(st => st.AddName == page.Keywords);

                            // fun = fun.And(w => w.CardNum.ToString().Contains(page.Keywords) || w.AddName.Contains(page.Keywords) || w.ID.ToString() == page.Keywords);
                        }


                        var _data = (from a in data.ToList()
                                     join b in dbhelper.tgameinfo on a.Gameid equals b.id
                                     join c in dbhelper.tgamelevelinfo on a.Roomid equals c.Id
                                     orderby a.ID descending
                                     select new RoomConfigurationView
                                     {
                                         ID = (int)a.ID,
                                         Gameid = (int)a.Gameid,
                                         gamename = b.name,
                                         Baseskin = a.Baseskin,
                                         CorresBaseskin = a.CorresBaseskin,
                                         LastTime = a.LastTime,
                                         roomnumbermin = a.roomnumbermin,
                                         roomnumbermax = a.roomnumbermax,
                                         roompeoplenummin = a.roompeoplenummin,
                                         roompeoplenumax = a.roompeoplenumax,
                                         Lookonnummin = a.Lookonnummin,
                                         Lookonnummax = a.Lookonnummax,
                                         Roomid = a.Roomid,
                                         roomname = c.Name,
                                         isdelroomset = a.IsDel,
                                         CreateTime = a.CreatTime == null ? "" : a.CreatTime.ToString(),
                                     }).ToList();


                        result.TotalCount = _data.Count();
                        result.Data = _data.Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList();
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

        public DataResult<RoomConfiguration> GetRoomDataById(int id)
        {
            DataResult<RoomConfiguration> result = new DataResult<RoomConfiguration> { Message = "获取成功" };

            try
            {
                using (DBContextHelper dbhelper = new DBContextHelper())
                {
                    var entity = dbhelper.RoomConfiguration.Where(w => w.ID == id).FirstOrDefault();
                    RoomConfiguration roomInfo = new RoomConfiguration();
                    if (entity != null)
                    {
                        roomInfo.ID = entity.ID;
                        roomInfo.Gameid = entity.Gameid;
                        roomInfo.Roomid = entity.Roomid;
                        roomInfo.Baseskin = entity.Baseskin;
                        roomInfo.CorresBaseskin = entity.CorresBaseskin;
                        roomInfo.LastTime = entity.LastTime;
                        roomInfo.roomnumbermin = entity.roomnumbermin;
                        roomInfo.roomnumbermax = entity.roomnumbermax;
                        roomInfo.roompeoplenummin = entity.roompeoplenummin;
                        roomInfo.roompeoplenumax = entity.roompeoplenumax;
                        roomInfo.Lookonnummin = entity.Lookonnummin;
                        roomInfo.Lookonnummax = entity.Lookonnummax;
                        roomInfo.IsDel = false;
                        result.Data = roomInfo;
                    }
                    else
                    {
                        result.Code = (int)Status.fail;
                        result.Message = "数据为空";
                    }
                }
            }
            catch (Exception ex)
            {
                Log.Error("获取房间信息", ex.Message);
                result.Code = (int)Status.fail;
                result.Message = ex.Message;
            }
            return result;

        }


        public bool DeleteRoomSetInfo(int setid) {

            using (DBContextHelper db = new DBContextHelper())
            {
                var entity = db.RoomConfiguration.Where(x => x.ID == setid).FirstOrDefault();
                if (entity!=null)
                {
                    if (entity.IsDel) entity.IsDel = false;
                    else entity.IsDel = true;

                    db.SaveChanges();
                    return true;
                }
                else
                {
                    return true;
                }
            }
        }

        public List<RoomConfiguration> GetAllRoomConfig()
        {
            using (DBContextHelper dbhelper = new DBContextHelper())
            {
                var entity = dbhelper.RoomConfiguration.ToList();
                return entity;
            }
           
        }
    }
}
