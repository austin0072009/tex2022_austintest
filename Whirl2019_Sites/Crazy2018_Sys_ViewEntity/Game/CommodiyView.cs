using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
  public  class CommodiyView:BaseView
    {
        /// <summary>
        /// 商品id
        /// </summary>
        public int id { get; set; }
        /// <summary>
        /// 商品名称
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        /// 商品介绍
        /// </summary>
        public string Introduce { get; set; }
        /// <summary>
        /// 兑换金币
        /// </summary>
        public double ExchangeValue { get; set; }
        /// <summary>
        /// 商品价值
        /// </summary>
        public float CommodityvValue { get; set; }
        /// <summary>
        /// 商品类型名称
        /// </summary>
        public string CommodityName { get; set; }
        /// <summary>
        /// 商品图片地址
        /// </summary>
        public string ImgUrl { get; set; }
        /// <summary>
        /// 是否启用
        /// </summary>
        public string IsEnableDesc { get; set; }
        public int CommodityType { get; set; }
        public bool IsEnable { get; set; }
    }
}
