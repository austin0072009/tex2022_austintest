using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
  public  class AgentInsurancePoolView
    {
        public int UserId { get; set; }


        public string UName { get; set; }

        /// <summary>
        /// 应该获得保险的金额
        /// </summary>
        public decimal Gold { get; set; }


    }
}
