using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Entity
{
    /// <summary>
    /// 银行卡类型
    /// </summary>
  public  class BankTypeEntity: BaseEntity<int>
    {
        /// <summary>
        /// 银行名称
        /// </summary>
        public string BankName
        {
            get;
            set;
        }

        /// <summary>
        /// 卡类型
        /// </summary>
        public string CardType
        {
            get;
            set;
        }

        /// <summary>
        /// bin码
        /// </summary>
        public string BinCode
        {
            get;
            set;
        }
    }
}
