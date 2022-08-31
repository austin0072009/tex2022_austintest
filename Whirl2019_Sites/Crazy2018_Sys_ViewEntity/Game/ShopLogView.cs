using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
   public class ShopLogView:BaseView
    {
        /// <summary>
        /// 单号
        /// </summary>
        public string OddNumbers { get; set; }
        /// <summary>
        /// 商品名称
        /// </summary>
        public string CommodityName { get; set; }
        /// <summary>
        /// 用户ID
        /// </summary>
        public int UserId { get; set; }
        /// <summary>
        /// 是否已经处理
        /// </summary>
        public string IsHandle { get; set; }
        /// <summary>
        /// 商品价值
        /// </summary>
        public float CommodityvValue { get; set; }
        /// <summary>
        /// 兑换值
        /// </summary>
        public double ExchangeValue { get; set; }
        /// <summary>
        /// 商品类型
        /// </summary>
        public string CommodityType { get; set; }
    }
}
