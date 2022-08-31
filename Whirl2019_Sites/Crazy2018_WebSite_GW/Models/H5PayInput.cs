using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Crazy2018_WebSite_GW.Models
{
    public class H5PayInput
    {


        public string loginName { get; set; }

        public string orderNo { get; set; }

        public string orderMoney { get; set; }

        public string paychannel { get; set; }

        public string orderType { get; set; }

        public string externalId { get; set; }

        public string notifyUrl { get; set; }

        public string sign { get; set; }

        public string paystatus { get; set; }

    }



    public class XMPay
    {
        public string code { get; set; }

        public string msg { get; set; }

        public string redirect { get; set; }

        public Urlpay data { get; set; }

        public string order_no { get; set; }

        public string status { get; set; }
    }
    public class Urlpay
    {
        public string url { get; set; }
        public string payUrl { get; set; }
    }

    /// <summary>
    /// 豪杰支付
    /// </summary>
    public class HJPay
    {
        /// <summary>
        /// 订单id
        /// </summary>
        public string payOrderId { get; set; }
        /// <summary>
        /// 签名
        /// </summary>
        public string sign { get; set; }
        /// <summary>
        /// 地址
        /// </summary>
        public Urlpay payparams { get; set; }
        /// <summary>
        /// 返回的状态码
        /// </summary>
        public string retCode { get; set; }
        /// <summary>
        /// 返回错误信息
        /// </summary>
        public string retMsg { get; set; }

    }

    /// <summary>
    /// 新秀支付
    /// </summary>
    public class XXPay
    {
        public string code { get; set; }
        public string msg { get; set; }
        public xxpaydata data {get;set;}

    }
    /// <summary>
    /// 商户支付返回
    /// </summary>
    public class SHPay
    {
        public int error { get; set; }
        public string msg { get; set; }
        public string orderid { get; set; }
        public string money { get; set; }
        public string name { get; set; }
        public string State { get; set; }
        public string memo { get; set; }


    }
    /// <summary>
    /// GPAY支付
    /// </summary>
    public class GPay
    {
        /// <summary>
        /// 商户编号
        /// </summary>
        public string merchantid { get; set; }
        /// <summary>
        /// 商户订单号
        /// </summary>
        public string orderid { get; set; }
        /// <summary>
        /// 系统订单号
        /// </summary>
        public string systemid { get; set; }
        /// <summary>
        /// 支付金额
        /// </summary>
        public int amount { get; set; }
        /// <summary>
        /// 订单金额
        /// </summary>
        public int order_amount { get; set; }
        /// <summary>
        /// 订单状态 0 : 搁置 1 : 处理中 2 : 支付完成 3 : 失败
        /// </summary>
        public int status { get; set; }
        /// <summary>
        /// 返回时间
        /// </summary>
        public string time { get; set; }
        /// <summary>
        /// remark	備註
        /// </summary>
        public string remark { get; set; }
        /// <summary>
        /// 签名数据
        /// </summary>
        public string sign { get; set; }

    }

    /// <summary>
    /// VUE支付
    /// </summary>
    public class VUEPay
    {
        public int errno { get; set; }
        public string msg { get; set; }
        public string order_id { get; set; }
        public string cashier_url { get; set; }

    }

    public class xxpaydata
    {
        public string order_id { get; set; }
        public string qrcode_url2 { get; set; }
        public string amount { get; set; }
        public string amount2 { get; set; }

    }

    public class SHpaydata
    {
        public string orderid { get; set; }
        public string money { get; set; }
        public string name { get; set; }
        public string State { get; set; }
        public string memo { get; set; }
    }

    #region 支付订单查询model

    public class JZpayQuery
    {
        public JZmodel returnValue { get; set; }



        public bool successed { get; set; }
    }
    public class JZmodel
    {
        public string outTradeNo { get; set; }

        public string tradeNo { get; set; }

        public string amount { get; set; }

        public decimal? serviceCharge { get; set; }
        /// <summary>
        /// 订单状态：0 等待支付，1 超时失
        //败，2 支付成功
        /// </summary>
        public int orderState { get; set; }

        public int payMethodId { get; set; }

        public DateTime? finishTime { get; set; }
        public DateTime? created { get; set; }

    }


    /// <summary>
    /// 滴滴查询订单model
    /// </summary>
    public class DDpayQuery
    {
        public ReturnModel returnValue { get; set; }



        public bool successed { get; set; }
    }
    public class ReturnModel
    {
        public string id { get; set; }
        public string oid { get; set; }

        public string businessOid { get; set; }

        public decimal amount { get; set; }

        public decimal serviceCharge { get; set; }

        public int orderState { get; set; }

        public int businessOrderState { get; set; }

        public int payMethod { get; set; }

        public DateTime? payTime { get; set; }

        public DateTime? created { get; set; }


    }

    #endregion
}