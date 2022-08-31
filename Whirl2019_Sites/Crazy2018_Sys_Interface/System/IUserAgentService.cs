using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity;
using Crazy2018_Sys_ViewEntity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Interface
{
    public interface IUserAgentService : IBaseService<UserAgentEntity, int, DBContextHelper>, IDependency
    {
        UserAgentView GetUserAgentData(string userId);
    }
}
