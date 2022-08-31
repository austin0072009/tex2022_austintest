using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Interface
{
   public interface ItjackpotstockService:IBaseService<tjackpotstock,int , h5game_2021Entities>,IDependency
    {

        /// <summary>
        /// 删除
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        DataResult Delete(int gameid);
        /// <summary>
        /// 修改
        /// </summary>
        /// <param name="id"></param>
        /// <param name="slotConfig"></param>
        /// <returns></returns>
        DataResult Update(int gameid, tjackpotstock stock);
        /// <summary>
        /// 增加
        /// </summary>
        /// <param name="slotConfig"></param>
        /// <returns></returns>
        DataResult Add(tjackpotstock stock);
    }
}
