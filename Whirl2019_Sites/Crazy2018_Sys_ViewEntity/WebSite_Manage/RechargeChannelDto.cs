using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
   public class RechargeChannelDto
    {
        public long ID { get; set; }
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

        public List<VipServiceInfo> serviceList { get; set; }
    }
    public class VipServiceInfo
    {
        public string desc;//vip 客服说明
        public string url;//头像url
        public string qq;//qq号
        public string phone;//手机号
        public string weixin;//微信账号可以是非数字
        public bool isOffice;//是否官方认证
        public bool isBank;//是否支持银联充值
        public bool isZhifubao;//是否支持支付宝充值
        public bool isWeixin;//是否支持微信充值
                             //数字为负数，0，字符传为空的 表示不支持该方式

        public string ylurl;

        public bool isopen;
        /// <summary>
        /// 是否官方充值
        /// </summary>
        public bool isGF;

    }
}
