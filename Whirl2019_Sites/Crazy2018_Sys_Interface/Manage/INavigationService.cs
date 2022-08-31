using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_ViewEntity;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Interface
{
  public  interface INavigationService: IBaseService<dt_navigation, int, chesscarddbEntities>, IDependency
    {
        /// <summary>
        /// 取得所有类别列表
        /// </summary>
        /// <param name="parent_id">父ID</param>
        /// <param name="nav_type">导航类别</param>
        /// <returns>DataTable</returns>
        DataTable GetList(int parent_id, string nav_type);
        bool Exists(int id);
        bool Exists(string name);
        string Navigation_validate(string navname, string old_name);
       
    }
}
 