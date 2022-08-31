using Crazy2018_Sys_DBHelper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Interface
{
  public  interface IManageLogService:IBaseService<dt_manager_log, int, chesscarddbEntities>, IDependency
    {
    }
}
