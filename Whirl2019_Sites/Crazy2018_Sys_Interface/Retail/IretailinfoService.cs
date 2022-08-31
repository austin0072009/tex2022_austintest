using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_ViewEntity.Retail;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Interface.Retail
{
    public interface IretailinfoService:IBaseService<retailinfo,int, snscenterwhirlEntities>,IDependency
    {
        /// <summary>
        /// 添加一个商户
        /// </summary>
        /// <param name="id"></param>
        /// <param name="appsrcret"></param>
        /// <param name="appid"></param>
        /// <param name="name"></param>
        /// <param name="gold"></param>
        /// <param name="status"></param>
        /// <returns></returns>
        bool Addretail(int id, string appsrcret, string appid, string name, long gold, sbyte status);
        /// <summary>
        /// 获取一个商户
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        retailinfo GetRetailinfo(int id);
        /// <summary>
        /// 商户集合
        /// </summary>
        /// <returns></returns>
        DataResults<retailinfo> GetretailinfoData();

        /// <summary>
        /// 修改商户信息
        /// </summary>
        /// <param name="id">商户id</param>
        /// <param name="appsrcret">密钥</param>
        /// <param name="appid">应用id</param>
        /// <param name="name">名称</param>
        /// <param name="gold">数量</param>
        /// <param name="status">状态</param>
        /// <returns></returns>
        bool UpdateRetail(int id, string appsrcret, string appid, string name, long gold, sbyte status);

        /// <summary>
        /// 获取某个商户的用户 
        /// </summary>
        /// <param name="reid"></param>
        /// <param name="pageindex"></param>
        /// <param name="pagesize"></param>
        /// <returns></returns>
        DataResults<ReatilUserView> GetReatilUserData(int reid, int pageindex, int pagesize);
        
        }
}
