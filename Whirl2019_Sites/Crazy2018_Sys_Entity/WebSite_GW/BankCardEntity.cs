using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Entity
{
    /// <summary>
    /// 银行卡实体
    /// </summary>
    public class BankCardEntity : BaseEntity<int>
    {
        /// <summary>
        /// 用户ID
        /// </summary>
        public string UserID
        {
            set;
            get;
        }

        /// <summary>
        /// 持卡人姓名
        /// </summary>
        public string UserName
        {
            get;
            set;
        }

        /// <summary>
        /// 银行卡号
        /// </summary>
        public string BankCardID
        {
            get;
            set;
        }

        /// <summary>
        /// 银行类型
        /// </summary>
        public int CardType
        {
            get;
            set;
        }

        /// <summary>
        /// 银行名称
        /// </summary>
        public string CardName
        {
            get;
            set;
        }

        /// <summary>
        /// 开户行
        /// </summary>
        public string BankAddress
        {
            get;
            set;
        }
        /// <summary>
        /// 所在地、所在区域
        /// </summary>
        public string Location { get; set; }
    }
}
