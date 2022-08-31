using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Service
{
    /// <summary>
    /// 库存
    /// </summary>
    public class tjackpotstockService : BaseService<tjackpotstock, int, h5game_2021Entities>, ItjackpotstockService
    {
        /// <summary>
        /// 新增库存
        /// </summary>
        /// <param name="slotConfig"></param>
        /// <returns></returns>
        public DataResult Add(tjackpotstock stock)
        {
            DataResult result = new DataResult();
            result.Message = "保存成功";
            result.Code = (int)Status.Success;

            try
            {

                var entity = AddEntity(stock);
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
        /// <summary>
        /// 根据游戏id获取库存
        /// </summary>
        /// <param name="gameid"></param>
        /// <param name="stock"></param>
        /// <returns></returns>
        public DataResult Update(int gameid, tjackpotstock stock)
        {
            DataResult result = new DataResult();
            result.Message = "修改成功";
            result.Code = (int)Status.Success;
            try
            {
                using (h5game_2021Entities db = new h5game_2021Entities())
                {
                    var entity = db.tjackpotstock.Where(x => x.gameid == gameid).FirstOrDefault();
                    if (entity != null)
                    {
                        entity.stock = stock.stock;
                    }
                    var isok = UpdateEntity(entity);
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
        /// <summary>
        /// 删除一个库存
        /// </summary>
        /// <param name="gameid"></param>
        /// <returns></returns>
        public DataResult Delete(int gameid)
        {
            DataResult result = new DataResult();
            result.Message = "删除成功";
            result.Code = (int)Status.Success;

            try
            {
                using (h5game_2021Entities db = new h5game_2021Entities())
                {
                    var entity = db.tjackpotstock.Where(x => x.gameid == gameid).FirstOrDefault();
                    DelEntity(entity);

                }
            }
            catch (Exception ex)
            {
                result.Code = (int)Status.fail;
                result.Message = "删除失败" + ex.Message;
                Log.Error(this.GetType().ToString(), ex.Message);
            }
            return result;
        }
    }
}
