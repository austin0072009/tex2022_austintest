﻿using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_ViewEntity.Club;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Interface.Club
{
   public interface  ICluballianceService : IBaseService<tcluballiance, int, texas_2021Entities>, IDependency
    {
        DataResults<ClubllianceView> GetunionData(DPagePara page);

        DataResult Update(string newidx, int idx);

        DataResults<ClubChildView> GetListuserData(DPagePara page, int idx);
    }
}
