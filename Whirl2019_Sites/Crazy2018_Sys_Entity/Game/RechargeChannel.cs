using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Entity
{
    public class RechargeChannel : BaseEntity<long>
    {
        public RechargeChannel()
        {
            isenable = false;
        }
        /// <summary>
        /// 通道名称
        /// </summary>
        public string ChannelName { get; set; }
        /// <summary>
        /// 通道代码
        /// </summary>
        public string ChannelCode { get; set; }
        /// <summary>
        /// 支付地址
        /// </summary>
        public string payurl { get; set; }
        /// <summary>
        /// app描述
        /// </summary>
        public string dec { get; set; }
        /// <summary>
        /// 金额集合  逗号分隔
        /// </summary>
        public string minmoney { get; set; }
        /// <summary>
        /// 支付类型  vippay，alipay，upay，wxpay
        /// </summary>
        public string paytype { get; set; }
        /// <summary>
        /// 是否启用
        /// </summary>
        public bool isenable { get; set; }

        public string payname { get; set; }
        public int Discount { get; set; }
        /// <summary>
        /// vip字段 的客服人员信息
        /// </summary>

        public string serviceList { get; set; }


    }
}
