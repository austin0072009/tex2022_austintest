using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Pay
{
    //支付请求类
    public class RequestBean
    {
        /// <summary>
        /// 商户号
        /// </summary>
        public string p1_usercode { get; set; }
        /// <summary>
        /// 订单号
        /// </summary>
        public string p2_order { get; set; }
        /// <summary>
        /// 订单金额
        /// </summary>
        public string p3_money { get; set; }
        /// <summary>
        /// 明文跳转
        /// </summary>
        public string p4_returnurl { get; set; }

        /// <summary>
        /// 服务器异步通知地址
        /// </summary>
        public string p5_notifyurl { get; set; }
        /// <summary>
        /// 订单时间 格式:yyyymmddhhmmss
        /// </summary>
        public string p6_ordertime { get; set; }
        /// <summary>
        /// 签名
        /// </summary>
        public string p7_sign { get; set; }
        /// <summary>
        /// 签名方式 (非必填)
        /// </summary>
        public string p8_signtype { get; set; }
        /// <summary>
        /// 支付方式:1:网银 2:快捷 3:微信 4:支付宝 5:游戏点卡 6:竣付通账户 7:预付费卡 8:人民币 9:授信额度
        /// </summary>
        public int p9_paymethod { get; set; }
        /// <summary>
        /// 支付通道编码(银行编码或卡类编码)
        /// </summary>
        public string p10_paychannelnum { get; set; }
        /// <summary>
        /// 玩家名称
        /// </summary>
        public string p14_customname { get; set; }
        /// <summary>
        /// 客户端IP
        /// </summary>
        public string p17_customip { get; set; }

        /// <summary>
        /// 商品名称
        /// </summary>        
        public string p18_product { get; set; }

        /// <summary>
        ///卡密 if (p9_paymethod.Equals("5"))//如果为卡类支付需要设置卡号和卡密
        /// </summary>        
        public string p19_productcat { get; set; }
        /// <summary>
        /// 卡号 if (p9_paymethod.Equals("5"))//如果为卡类支付需要设置卡号和卡密
        /// </summary>        
        public string p20_productnum { get; set; }
        /// <summary>
        /// 终端设备
        /// </summary>
        public string p25_terminal { get; set; }
        /// <summary>
        /// 支付场景
        /// </summary>
        public string p26_iswappay { get; set; }
        public string p11_cardtype { get; set; }
        public string p12_channel { get; set; }
        public string p13_orderfailertime { get; set; }
        public string p21_pdesc { get; set; }
        public string p22_version { get; set; }
        public string p23_charset { get; set; }
        public string p24_remark { get; set; }
        /// <summary>
        /// 转换为post数据
        /// </summary>
        /// <returns></returns>
        public override string ToString()
        {
            string str = "p1_usercode=" + p1_usercode + "&p2_order=" + p2_order + "&p3_money=" + p3_money + "&p4_returnurl=" + p4_returnurl +
                         "&p5_notifyurl=" + p5_notifyurl + "&p6_ordertime=" + p6_ordertime + "&p7_sign=" + p7_sign + "&p8_signtype=" + p8_signtype + "&p9_paymethod=" +
                         p9_paymethod + "&p10_paychannelnum=" + p10_paychannelnum + p14_customname + "&p14_customname" + p18_product + "&p18_product" + p25_terminal + "&p25_terminal" + p26_iswappay + "&p26_iswappay";
            return str;
        }
    }
}
