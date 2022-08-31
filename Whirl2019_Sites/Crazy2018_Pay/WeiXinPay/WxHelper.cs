using Crazy2018_Sys_Common;
using Newtonsoft.Json.Linq;
using System;
using System.Text;
using System.Web;
using System.Xml.Linq;

namespace Crazy2018_Pay
{
	public class WxHelper
	{
		/// <summary>
		/// 商品金额，用于统一下单
		/// </summary>
		public int total_fee { get; set; }
		public string callBackUrl { get; set; }
		/// <summary>
		/// openid用于调用统一下单接口
		/// </summary>
		public string openid { get; set; }
		static HttpHelper http = new HttpHelper();
		public WxPayData unifiedOrderResult { get; set; }
		/**
            * 
            * 网页授权获取用户基本信息的全部过程
            * 详情请参看网页授权获取用户基本信息：http://mp.weixin.qq.com/wiki/17/c0f37d5704f0b64713d5d2c37b468d75.html
            * 第一步：利用url跳转获取code
            * 第二步：利用code去获取openid和access_token
            * 
            */
		public string GetCode(string redirectUrl)
		{
			//构造网页授权获取code的URL
			string redirect_uri = HttpUtility.UrlEncode("http://" + redirectUrl);
			WxPayData data = new WxPayData();
			Log.Debug("appid", WxPayConfig.APPID);
			data.SetValue("appid", WxPayConfig.APPID);
			data.SetValue("redirect_uri", redirect_uri);
			data.SetValue("response_type", "code");
			data.SetValue("scope", "snsapi_base");
			data.SetValue("state", "STATE" + "#wechat_redirect");
			string url = "https://open.weixin.qq.com/connect/oauth2/authorize?" + data.ToUrl();
			HttpContext.Current.Response.Redirect(url);
			Log.Debug(this.GetType().ToString(), "Will Redirect to URL : " + url);
			Log.Debug(this.GetType().ToString(), "回调URL : " + redirectUrl);
			//触发微信返回code码         
			return url;
		}
		/// <summary>
		/// 获取openID和access_token
		/// </summary>
		/// <param name="code"></param>
		/// <returns></returns>
		public JObject GetAccess_token(string code)
		{
			string url = string.Format("https://api.weixin.qq.com/sns/oauth2/access_token?appid={0}&secret={1}&code={2}&grant_type=authorization_code",
									   WxPayConfig.APPID,
									   WxPayConfig.APPSECRET,
									   code);
			HttpItem item = new HttpItem()
			{
				URL = url
			};
			HttpResult result = http.GetHtml(item);

			JObject obj = JObject.Parse(result.Html);
			return obj;
		}
		/// <summary>
		/// 获取用户信息
		/// </summary>
		/// <param name="access_token"></param>
		/// <param name="openid"></param>
		/// <returns></returns>
		public JObject GetUserInfo(string access_token, string openid)
		{
			string url = string.Format("https://api.weixin.qq.com/sns/userinfo?access_token={0}&openid={1}&lang=zh_CN",
											  access_token,
											  openid);
			HttpItem item = new HttpItem()
			{
				URL = url,
				Encoding = Encoding.UTF8
			};
			HttpResult result = http.GetHtml(item);
			JObject obj = JObject.Parse(result.Html);
			return obj;

		}
		/**
 * 调用统一下单，获得下单结果
 * @return 统一下单结果
 * @失败时抛异常WxPayException
 */
		public WxPayData GetUnifiedOrderResult(string tradeNo = "")
		{
			//if (string.IsNullOrEmpty(tradeNo))
			// tradeNo = WxPayApi.GenerateOutTradeNo();

			//统一下单
			WxPayData data = new WxPayData();
			data.SetValue("body", "付款");
			data.SetValue("attach", "付款");
			data.SetValue("out_trade_no", tradeNo);
			data.SetValue("total_fee", total_fee);
			data.SetValue("time_start", DateTime.Now.ToString("yyyyMMddHHmmss"));
			data.SetValue("time_expire", DateTime.Now.AddMinutes(10).ToString("yyyyMMddHHmmss"));
			data.SetValue("goods_tag", "付款");
			data.SetValue("trade_type", "JSAPI");
			data.SetValue("openid", openid);
			data.SetValue("limit_pay", "no_credit");
			data.SetValue("notify_url", callBackUrl);
			WxPayData result = WxPayApi.UnifiedOrder(data);
			if (!result.IsSet("appid") || !result.IsSet("prepay_id") || result.GetValue("prepay_id").ToString() == "")
			{
				Log.Error(this.GetType().ToString(), "UnifiedOrder response error!");
				throw new WxPayException("UnifiedOrder response error!");
			}

			unifiedOrderResult = result;
			return result;
		}

		public WxPayData GetOrderResult(string tradeNo, string ip)
		{
			//if (string.IsNullOrEmpty(tradeNo))
			// tradeNo = WxPayApi.GenerateOutTradeNo();

			//统一下单
			WxPayData data = new WxPayData();
			data.SetValue("body", "付款");
			data.SetValue("attach", "付款");
			data.SetValue("out_trade_no", tradeNo);
			data.SetValue("total_fee", total_fee);
			data.SetValue("time_start", DateTime.Now.ToString("yyyyMMddHHmmss"));
			data.SetValue("time_expire", DateTime.Now.AddMinutes(10).ToString("yyyyMMddHHmmss"));
			data.SetValue("goods_tag", "付款");
			data.SetValue("trade_type", "MWEB");
			data.SetValue("spbill_create_ip", ip);
			data.SetValue("notify_url", callBackUrl);
			data.SetValue("scene_info", "{'h5_info': {'type':'Wap','wap_url': 'http://www.rootquankeji.top/','wap_name': '在线充值'}}");
			

			WxPayData result = WxPayApi.UnifiedOrder(data);//调用统一下单接口

			if (!result.IsSet("appid") || !result.IsSet("prepay_id") || result.GetValue("prepay_id").ToString() == "")
			{
				Log.Error(this.GetType().ToString(), "UnifiedOrder response error!");
				throw new WxPayException("UnifiedOrder response error!");
			}

			unifiedOrderResult = result;
			return result;
		}

		public string GetJsApiParameters()
		{
			Log.Debug(this.GetType().ToString(), "JsApiPay::GetJsApiParam is processing...");

			WxPayData jsApiParam = new WxPayData();
			jsApiParam.SetValue("appId", unifiedOrderResult.GetValue("appid"));
			jsApiParam.SetValue("timeStamp", WxPayApi.GenerateTimeStamp());
			jsApiParam.SetValue("nonceStr", WxPayApi.GenerateNonceStr());
			jsApiParam.SetValue("package", "prepay_id=" + unifiedOrderResult.GetValue("prepay_id"));
			jsApiParam.SetValue("signType", "MD5");
			jsApiParam.SetValue("paySign", jsApiParam.MakeSign());

			string parameters = jsApiParam.ToJson();

			Log.Debug(this.GetType().ToString(), "Get jsApiParam : " + parameters);
			return parameters;
		}
		/// <summary>
		/// 企业向用户付款
		/// </summary>
		/// <param name="balance"></param>
		/// <param name="OpenId"></param>
		public bool Transfer(string balance, string OpenId, out string returnMsg)
		{
			bool result = false;
			string xmlResult = null;  //现金红包接口返回的xml
			string certPath = null;  //证书在服务器的物理位置
			string data = null;  //调用现金红包接口需要的数据
								 //创建支付应答对象
			RequestHandler packageReqHandler = new RequestHandler(null);
			returnMsg = string.Empty;
			//初始化
			packageReqHandler.Init();
			// certPath = WxPayConfig.SSLCERT_PATH;
			/*设置package订单参数
            公众账号appid	mch_appid	        是	    wx8888888888888888	String	微信分配的公众账号ID（企业号corpid即为此appId）
            商户号	        mchid	            是	    1900000109	String(32)	微信支付分配的商户号
            随机字符串	    nonce_str	        是	    5K8264ILTKCH16CQ2502SI8ZNMTM67VS	String(32)	随机字符串，不长于32位
            签名	        sign	            是	    C380BEC2BFD727A4B6845133519F3AD6	String(32)	签名，详见签名算法
            商户订单号	    partner_trade_no	是	    10000098201411111234567890	String	商户订单号，需保持唯一性
            用户openid	    openid	            是	    oxTWIuGaIt6gTKsQRLau2M0yL16E	String	商户appid下，某用户的openid
            校验用户姓名选项	check_name	        是	    OPTION_CHECK	String	NO_CHECK：不校验真实姓名 FORCE_CHECK：强校验真实姓名（未实名认证的用户会校验失败，无法转账） OPTION_CHECK：针对已实名认证的用户才校验真实姓名（未实名认证用户不校验，可以转账成功）
            收款用户姓名	re_user_name	    可选	马花花	String	收款用户真实姓名。 如果check_name设置为FORCE_CHECK或OPTION_CHECK，则必填用户真实姓名
            金额	        amount	            是	    10099	int	企业付款金额，单位为分
            企业付款描述信息	desc	            是	    理赔	String	企业付款操作说明信息。必填。
            Ip地址	        spbill_create_ip	是	    192.168.0.1	String(32)	调用接口的机器Ip地址*/
			packageReqHandler.SetParameter("mch_appid", WxPayConfig.APPID);//微信分配的公众账号ID（企业号corpid即为此appId）。接口传入的所有appid应该为公众号的appid（在mp.weixin.qq.com申请的），不能为APP的appid（在open.weixin.qq.com申请的）。 
			packageReqHandler.SetParameter("mchid", WxPayConfig.MCHID);  //微信支付分配的商户号
			packageReqHandler.SetParameter("nonce_str", WxPayApi.GetStr());    //随机字符串，不长于32位
			packageReqHandler.SetParameter("partner_trade_no", WxPayConfig.MCHID + new DateTime().ToString("yyyyMMdd") + WxPayApi.GetNum());//商户订单号（每个订单号必须唯一）组成：mch_id+yyyymmdd+10位一天内不能重复的数字。接口根据商户订单号支持重入，如出现超时可再调用。
			packageReqHandler.SetParameter("openid", OpenId);  //用户openid  接受红包的用户用户在wxappid下的openid
			packageReqHandler.SetParameter("check_name", "NO_CHECK");
			packageReqHandler.SetParameter("re_user_name", "王二娃");//收款用户真实姓名
			packageReqHandler.SetParameter("amount", balance);  //付款金额 
			packageReqHandler.SetParameter("desc", "奖励入账");
			packageReqHandler.SetParameter("spbill_create_ip", "211.159.185.65");//Ip地址

			try
			{
				string sign = packageReqHandler.CreateMd5Sign("key", WxPayConfig.KEY);
				packageReqHandler.SetParameter("sign", sign);                        //签名

				data = packageReqHandler.ParseXML();
				//data = "<xml><amount><![CDATA[10000]]></amount><mchid><![CDATA[1296045801]]></mchid><sign><![CDATA[CE14654EADE26441FFD2F89F275EC916]]></sign><partner_trade_no><![CDATA[1296045801000101011495006837]]></partner_trade_no><re_user_name><![CDATA[张三]]></re_user_name><check_name><![CDATA[NO_CHECK]]></check_name><spbill_create_ip><![CDATA[211.159.185.65]]></spbill_create_ip><nonce_str><![CDATA[lxc8tt78w4zjz892w2x2du3qrnaszg]]></nonce_str><mch_appid><![CDATA[wx01d014db310a6c9e]]></mch_appid><desc><![CDATA[测试]]></desc><openid><![CDATA[oXIWxuL8D4u8eeNL6h0uIVfM-V-k]]></openid></xml>";
				Log.Debug("param", data);
				certPath = @"C:\Users\Administrator\Desktop\hedanyx\cert\apiclient_cert.p12";//apiclient_cert.p12的证书物理位置(例如：E:\projects\文档\微信商户平台证书\商户平台API证书
				Log.Debug(this.GetType().ToString(), "证书路径 =" + certPath);
				xmlResult = TenPay.Sendredpack(data, WxPayConfig.MCHID/*apiclient_cert.p12证书密码即商户号*/, certPath, 7200/*timeout*/, 1);
				XElement XNode = XDocument.Parse(xmlResult).Element("xml");

				Log.Debug("xmlResult", xmlResult);
				string return_code = XNode.Element("return_code").Value;
				string result_code = XNode.Element("result_code").Value;
				string err_code = XNode.Element("err_code").Value;
				Log.Debug("result_code", result_code);
				Log.Debug("return_code", return_code);
				Log.Debug("err_code", err_code);
				// string return_msg = XNode.Element("err_code").Value;
				returnMsg = result_code;
				result = true;
				if ("FAIL".Equals(return_code) && "FAIL".Equals(result_code))
				{
					result = false;
				}

			}
			catch (Exception ex)
			{
				Log.Debug(this.GetType().ToString(), ex.StackTrace);
				Log.Debug("exmsg", ex.Message);
			}
			return result;
		}
	}
}
