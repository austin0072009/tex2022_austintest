using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
   public class PayModel
    {

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
            public string oid { get; set; }

            public string businessOid { get; set; }

            public int amount { get; set; }

            public int serviceCharge { get; set; }

            public int orderState { get; set; }

            public int businessOrderState { get; set; }

            public int payMethod { get; set; }

            public DateTime payTime { get; set; }

            public DateTime created { get; set; }


        }

    }
}
