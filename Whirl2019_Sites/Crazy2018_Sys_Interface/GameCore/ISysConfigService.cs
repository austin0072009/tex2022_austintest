using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity;
using Crazy2018_Sys_ViewEntity;
using Crazy2018_Sys_ViewEntity.Game;
using Crazy2018_Sys_ViewEntity.UserAgent;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Interface
{
   public interface ISysConfigService : IBaseService<tsysconfig, int, texas_2021Entities>, IDependency
    {
        DataResults<tsysconfig> GeSysConfig(DPagePara page);

        bool SubmitSysConfigEntity(tsysconfig entity);

        DataResult UserConfigDel(string ids);

        tsysconfig GetValueByKey(string key);

        tsysconfig GetValueByKeyDsc(string key,string dec);
    }
}
