using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Entity
{
    public class TEntityCard : BaseEntity<long>
    {

        /// <summary>
        /// 名称
        /// </summary>
        public string AddName { get; set; }
        /// <summary>
        /// 卡类型
        /// </summary>
        public int CardType { get; set; }
        /// <summary>
        /// 卡编号
        /// </summary>
        public int CardNum { get; set; }
        /// <summary>
        /// 卡价格
        /// </summary>
        public decimal CardPrice { get; set; }
        /// <summary>
        /// 价钱
        /// </summary>
        public decimal TatolPrice { get; set; }
        /// <summary>
        /// 金币数量
        /// </summary>
        public decimal GoldPrice { get; set; }
        /// <summary>
        /// 时间
        /// </summary>
        public DateTime CreateTime { get; set; }
        /// <summary>
        /// 是否使用
        /// </summary>
        public int IsUse { get; set; }
        /// <summary>
        /// 过期时间
        /// </summary>
        public DateTime ExpirationTime { get; set; }
        /// <summary>
        /// 密码
        /// </summary>
        public string PassWord { get; set; }

    }
}
