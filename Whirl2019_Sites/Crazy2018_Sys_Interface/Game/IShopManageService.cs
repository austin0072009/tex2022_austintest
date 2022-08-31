using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_ViewEntity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Interface
{
    public interface IShopManageService : IBaseService<texchangelog, long, texas_2021Entities>, IDependency
    {
        /// <summary>
        /// 获取商品日志
        /// </summary>
        /// <param name="page"></param>
        /// <param name="type"></param>
        /// <returns></returns>
       DataResults<ShopLogView> GetShopLog(DPage page, int type=-1);
        /// <summary>
        /// 设置订单状态
        /// </summary>
        /// <param name="orderNo"></param>
        /// <returns></returns>
        DataResult SetShopState(string orderNo);
    }
}
