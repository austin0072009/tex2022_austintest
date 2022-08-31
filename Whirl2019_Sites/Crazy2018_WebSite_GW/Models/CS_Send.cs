using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Crazy2018_WebSite_GW
{

    /// <summary>
    /// 提现
    /// </summary>
    public class cs_takenow:cs_base_gm
    {
        public string userid;
        public decimal amount;
    }
    public class cs_base_gm
    {
        public string fn = "";
    }
    /// <summary>
    /// 充值接口
    /// </summary>
    public class cs_charge_gm : cs_base_gm
    {
        /// <summary>
        /// 1、充值金币 2、砖石
        /// </summary>
        public int type;
        /// <summary>
        /// 固定传4
        /// </summary>
        public int gameid;
        /// <summary>
        /// 唯一值
        /// </summary>
        public int userid;
        /// <summary>
        /// 数量
        /// </summary>
        public float money;
        public string id;
    }
}