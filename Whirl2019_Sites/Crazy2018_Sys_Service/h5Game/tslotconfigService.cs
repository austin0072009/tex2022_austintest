using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity;
using Crazy2018_Sys_Interface;
using Crazy2018_Sys_ViewEntity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Service
{
    /// <summary>
    /// h5游戏配置
    /// </summary>
   public class tslotconfigService : BaseService<tslotconfig, int, h5game_2021Entities>, ItslotconfigService
    {

        public DataResults<TSlotConfigView> GetSlotData(DPage page)
        {
            DataResults<TSlotConfigView> result = new DataResults<TSlotConfigView>();
            if (page == null) page = new DPage();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            try
            {
                Expression<Func<tslotconfig, bool>> fun = w => w != null;
                //if (!string.IsNullOrEmpty(platType) && platType != "0")
                //{
                //    int.TryParse(platType, out int ptype);
                //    //fun = fun.And(w => w != null && w.t == ptype);
                //}
                using (h5game_2021Entities db = new h5game_2021Entities())
                {
                    using (texas_2021Entities whir = new texas_2021Entities())
                    {
                        List<tslotconfig> data = db.tslotconfig.ToList();
                        List<tgameinfo> gdata = whir.tgameinfo.ToList();
                        var _data = (from a in db.tslotconfig
                                     .OrderByDescending(a => a.UpdateTime)
                                     .Skip((page.PageIndex - 1) * page.PageSize)
                                     .Take(page.PageSize).ToList()
                                     join b in whir.tgameinfo on a.GameID equals b.id into temp
                                     from tt in temp.DefaultIfEmpty()
                                     select new TSlotConfigView
                                     {
                                         id=(int)a.Id,
                                         GameID = (int)a.GameID,
                                         RoomID = (int)a.RoomID,
                                         UpdateTime = (DateTime)a.UpdateTime,
                                        // Config = a.Config,
                                         GameName = tt.name
                                     }).ToList();
                        result.TotalCount = _data.Count();
                        result.Data = _data.ToList();
                        result.table = JsonHelper.ToDataTable<TSlotConfigView>(result.Data);
                        result.Message = "获取成功";
                        return result;
                    }

                }

            }
            catch (Exception ex)
            {
                Log.Error("获取游戏信息", ex.Message);
                result.Code = (int)Status.fail;
                result.Message = "获取数据失败";
            }
            return result;
        }
        public DataResult Add(tslotconfig slotConfig)
        {
            DataResult result = new DataResult();
            result.Message = "保存成功";
            result.Code = (int)Status.Success;

            try
            {
             
                var entity = AddEntity(slotConfig);
                if (entity == null)
                {
                    result.Code = (int)Status.fail;
                    result.Message = "保存失败";
                }
            }
            catch (Exception ex)
            {
                result.Code = (int)Status.fail;
                result.Message = ex.Message;
                Log.Error(this.GetType().ToString(), ex.Message);
            }
            return result;
        }
        public DataResult Update(int id, tslotconfig slotConfig)
        {
            DataResult result = new DataResult();
            result.Message = "修改成功";
            result.Code = (int)Status.Success;

            try
            {
                using (h5game_2021Entities db = new h5game_2021Entities())
                {
                    var entity = db.tslotconfig.Where(x => x.Id == id).FirstOrDefault();
                    if (entity!=null)
                    {
                        entity.RoomID = slotConfig.RoomID;
                        entity.GameID = slotConfig.GameID;
                        entity.UpdateTime = DateTime.Now;
                        entity.Config = slotConfig.Config;
                    }
                  var isok= UpdateEntity(entity);
                    if (isok == null)
                    {
                        result.Code = (int)Status.fail;
                        result.Message = "修改失败";
                    }
                }
            }
            catch (Exception ex)
            {
                result.Code = (int)Status.fail;
                result.Message = ex.Message;
                Log.Error(this.GetType().ToString(), ex.Message);
            }
            return result;
        }
        public DataResult Delete(int id)
        {
            DataResult result = new DataResult();
            result.Message = "删除成功";
            result.Code = (int)Status.Success;

            try
            {
                using (h5game_2021Entities db = new h5game_2021Entities())
                {
                    var entity = db.tslotconfig.Where(x => x.Id == id).FirstOrDefault();
                    DelEntity(entity);
                  
                }
            }
            catch (Exception ex)
            {
                result.Code = (int)Status.fail;
                result.Message = "删除失败"+ex.Message;
                Log.Error(this.GetType().ToString(), ex.Message);
            }
            return result;
        }

        /// <summary>
        /// 获取一条配置信息
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public tslotconfig GetSlotById(int id)
        {
            try
            {
               
                using (h5game_2021Entities db = new h5game_2021Entities())
                {
                    var slot = db.tslotconfig.Where(x=>x.Id==id).FirstOrDefault();

                    return slot;
                }
            }
            catch (Exception)
            {

                return null;
            }
        }

        /// <summary>
        /// 获取配置详情
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public sconfig GetSlotConfigById(int id)
        {
            try
            {
                using (h5game_2021Entities db = new h5game_2021Entities())
                {
                    var slot = db.tslotconfig.Where(x => x.Id == id).FirstOrDefault();
                    sconfig sconfig = JsonHelper.JSONToObject<sconfig>(slot.Config);
                    return sconfig;
                }
            }
            catch (Exception e)
            {
                return null;
            }
        }
    }
}
