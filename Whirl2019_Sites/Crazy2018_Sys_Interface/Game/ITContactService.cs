using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity.Game;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Interface.Game
{
    public interface ITContactService : IBaseService<TContact, int, texas_2021Entities>, IDependency
    {
        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="contcat"></param>
        /// <returns></returns>
        DataResult AddContact(TContact contcat);
        /// <summary>
        /// 删除
        /// </summary>
        /// <param name="ids"></param>
        /// <returns></returns>
        DataResult DelContact(string ids);
        /// <summary>
        /// 修改
        /// </summary>
        /// <param name="cont"></param>
        /// <returns></returns>
        DataResult UpdataContact(TContact cont);
        /// <summary>
        /// 获取集合
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        DataResults<TContact> GetTContactList(DPage page);
    }
}
