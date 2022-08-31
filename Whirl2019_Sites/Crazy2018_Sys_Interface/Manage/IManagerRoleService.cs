using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_ViewEntity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Interface
{
   public interface IManagerRoleService : IBaseService<dt_manager_role, int, chesscarddbEntities>, IDependency
    {
        List<dt_manager_role_value> GetRoleValues(int id);
        DataResult SaveRole(RoleModel model);


        DataResult DelRole(string ids);
    }
}
