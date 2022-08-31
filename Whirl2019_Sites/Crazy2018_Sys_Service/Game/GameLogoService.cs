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
    class GameLogoService : BaseService<GameLogo, long, DBContextHelper>, IGameLogoService
    {
        public DataResults<GameLogoView> GetGameLogoData(DPage page, string platType)
        {
            DataResults<GameLogoView> result = new DataResults<GameLogoView>();
            if (page == null) page = new DPage();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            try
            {
                Expression<Func<GameLogo, bool>> fun = w => w != null;
                if (!string.IsNullOrEmpty(platType)&&platType!="0")
                {
                    int.TryParse(platType, out int ptype);
                    fun = fun.And(w => w != null && w.logotype == ptype);
                }
                using (DBContextHelper db = new DBContextHelper())
                {
                    List<GameLogo> data =GetEntityLisrByWhere(fun).OrderByDescending(a => a.CreatTime).Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList(); ;
                    var _data = (from a in data
                                 select new GameLogoView
                                 {
                                     ID = (int)a.ID,
                                     logotype = a.logotype,
                                     Url = a.Url,
                                     remarks = a.remarks,
                                     CreatTime = a.CreatTime.ToString()
                                 }).ToList();
                    result.TotalCount = _data.Count();
                    result.Data = _data;//.OrderByDescending(a => a.CreatTime).Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList();
                    result.Message = "获取成功";
                    return result;
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

        public DataResult GameLogoDelete(string ids)
        {

            DataResult result = new DataResult();
            if (string.IsNullOrEmpty(ids))
            {
                result.Code = (int)Status.fail;
                result.Message = "id不能为空";
                return result;
            }
            var logoIds = ids.Split(',');
            foreach (var item in logoIds)
            {
                if (string.IsNullOrEmpty(item)) continue;
                int id = 0;
                int.TryParse(item, out id);
                using (DBContextHelper db = new DBContextHelper())
                {
                    var glogo = db.GameLogo.Find(id);
                    db.GameLogo.Remove(glogo);
                    db.SaveChanges();
                }
            }
            result.Message = "删除成功";
            return result;
        }
    }
}
