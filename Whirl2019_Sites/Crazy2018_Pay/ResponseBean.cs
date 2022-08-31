using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace Crazy2018_Pay
{
    public class ResponseBean
    {
        HttpRequestBase Request { get; set; }
        /// <summary>
        /// 商户号
        /// </summary>
        public string p1_usercode { get { return Request["p1_usercode"]; } }
        /// <summary>
        /// 订单号
        /// </summary>
        public string p2_order { get { return Request["p2_order"]; } }
        /// <summary>
        /// 订单金额
        /// </summary>
        public string p3_money { get { return Request["p3_money"]; } }
        /// <summary>
        /// 支付结果
        /// </summary>
        public string p4_status { get { return Request["p4_status"]; } }

        /// <summary>
        /// 竣付通订单号
        /// </summary>
        public string p5_jtpayorder { get { return Request["p5_jtpayorder"]; } }
        /// <summary>
        /// 商户支付方式
        /// </summary>
        public string p6_paymethod { get { return Request["p6_paymethod"]; } }
        /// <summary>
        /// 支付通道编码(银行,卡类编码)
        /// </summary>
        public string p7_paychannelnum { get { return Request["p7_paychannelnum"]; } }
        /// <summary>
        /// 编码方式
        /// </summary>
        public string p8_charset { get { return Request["p8_charset"]; } }
        /// <summary>
        /// 签名验证方式
        /// </summary>
        public string p9_signtype { get { return Request["p9_signtype"]; } }
        /// <summary>
        /// 签名
        /// </summary>
        public string p10_sign { get { return Request["p10_sign"]; } }
        /// <summary>
        /// 备注
        /// </summary>
        public string p11_remark { get { return Request["p11_remark"]; } }

        public ResponseBean(HttpRequestBase request)
        {
            this.Request = request;
        }
    }
}
