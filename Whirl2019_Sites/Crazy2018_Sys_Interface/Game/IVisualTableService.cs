using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity;
using Crazy2018_Sys_ViewEntity.GameCore;
using System.Collections.Generic;

namespace Crazy2018_Sys_Interface
{
   public interface IVisualTableService : IBaseService<VisualTable, long, DBContextHelper>, IDependency
    {
        VisualTable GetVisualTableUrl(int tablenum);

        List<VisualTable> GetVisualTableList();

        DataResults<VisualTableView> GetVisualTableList(DPage page);

        VisualTable GetVisualById(int Id);

        DataResult DelVisualTables(string ids);

    }
}
