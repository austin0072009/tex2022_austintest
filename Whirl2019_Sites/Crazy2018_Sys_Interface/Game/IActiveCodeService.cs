using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Interface
{
    public interface IActiveCodeService : IBaseService<tactivecode, int, texas_2021Entities>, IDependency
    {
        DataResult Add(int userid, int activeLevel = 0);
        bool Exist(string activeCode);
        DataResult Update(string activeCode, int userid);
        DataResult Initi26Code();
    }
}
