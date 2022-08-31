using Crazy2018_Sys_Common;
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
    public interface ItslotconfigService : IBaseService<tslotconfig, int, h5game_2021Entities>, IDependency
    {
        /// <summary>
        /// 删除
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        DataResult Delete(int id);
        /// <summary>
        /// 修改
        /// </summary>
        /// <param name="id"></param>
        /// <param name="slotConfig"></param>
        /// <returns></returns>
        DataResult Update(int id, tslotconfig slotConfig);
        /// <summary>
        /// 增加
        /// </summary>
        /// <param name="slotConfig"></param>
        /// <returns></returns>
        DataResult Add(tslotconfig slotConfig);
        /// <summary>
        /// 获取分页数据表
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        DataResults<TSlotConfigView> GetSlotData(DPage page);

        /// <summary>
        /// 获取一条配置数据
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        tslotconfig GetSlotById(int id);
        /// <summary>
        /// 配置详情
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        sconfig GetSlotConfigById(int id);


    }
}
