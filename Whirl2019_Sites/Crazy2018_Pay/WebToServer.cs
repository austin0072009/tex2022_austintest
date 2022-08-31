using Crazy2018_Sys_Common;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace Crazy2018_Pay
{
    public class WebToServer
    {
        public static string serviceUrl = ConfigurationManager.AppSettings["SutHttpServer"].ToString();
        /// <summary>
        /// 充值通用类
        /// </summary>
        public static bool Charge(int usrId, float number, int type)
        {
            try
            {
                cs_charge_gm _setcard = new cs_charge_gm
                {
                    fn = "cs_charge_gm",
                    userid = Convert.ToInt32(usrId),
                    type = type,
                    money = number,
                    gameid = 4
                };
                string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(_setcard));
                string _content = Crazy2018_Sys_Common.HttpService.HttpGet(serviceUrl + _data);
                sc_base_gm _scsetcard = JsonHelper.JSONToObject<sc_base_gm>(_content);
                return _scsetcard._ret == 0;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
