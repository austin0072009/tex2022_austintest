using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Interface;
using Crazy2018_Sys_ViewEntity.H5Game;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Service
{
  public class th5menuService:BaseService<th5menu,int,h5game_2021Entities>,Ith5menuService
    {

        
        public DataResults<MenuView> GetAllMenu() {
            DataResults<MenuView> result = new DataResults<MenuView>();
            try
            {
               
                using (h5game_2021Entities db=new h5game_2021Entities())
                {
         
                    List<th5menu> stocks = new List<th5menu>();
                    string sql = @"select * from th5menu";
                   
                        stocks = db.Database.SqlQuery<th5menu>(sql).ToList();
                    
                   
                    var data = stocks;
                    result.TotalCount = data.Count;
                    result.Data = data.OrderBy(w => w.Sort)
                        .Select(w => new MenuView
                        {
                            Id = w.Id,
                            Parentid = (int)w.Parentid,
                            Name = w.Name,
                            Title = w.Title,
                            Icon = w.Icon,
                            Isdisplay = (int)w.Isdisplay,
                            Sort = (int)w.Sort,
                            CreateTime=(DateTime)w.CareatTime
                        }).ToList();
                    result.Message = "获取数据成功";
                  
                }
                return result;
            }
            catch (Exception ex)
            {

                Log.Error("获取游戏信息", ex.Message);
                result.Code = (int)Status.fail;
                result.Message = "获取数据失败";
            }
            return result;
        }

    }
}
