using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
  public  class BankCardView: BaseView
    {
        /// <summary>
        /// 银行名称
        /// </summary>
        public string CardName { get; set; }
        /// <summary>
        /// 银行卡号
        /// </summary>
        public string CardNo { get; set; }
        /// <summary>
        /// 户名
        /// </summary>
        public string UserName { get; set; }
    }
}
