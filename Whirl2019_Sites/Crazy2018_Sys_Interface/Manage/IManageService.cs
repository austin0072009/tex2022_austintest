using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Crazy2018_Sys_Common.DTEnums;

namespace Crazy2018_Sys_Interface
{
    public interface IManageService : IBaseService<dt_manager, int, chesscarddbEntities>, IDependency
    {
        dt_manager Login(string userName, string passWord);
        dt_manager_role GetRoleInfo(int? roleId);
        bool Exists(int? role_id, string nav_name, string action_type);
        dt_manager Register(dt_manager model);

        dt_manager GetLoginUser();

        DataResult ManageDel(string ids);

        void AddActionlog(ActionEnum actiontype, OptAction optaction, string remark);

    }
}
