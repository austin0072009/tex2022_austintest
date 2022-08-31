using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Entity
{
   public class TEntityCardType : BaseEntity<long>
    {
        /// <summary>
        /// 添加名称
        /// </summary>
        public string AddName { get; set; }
        /// <summary>
        /// 名称
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        /// 卡编号
        /// </summary>
        public int CardNum { get; set; }
        /// <summary>
        /// 卡金额
        /// </summary>
        public decimal CardPrice { get; set; }
        /// <summary>
        /// 价钱
        /// </summary>
        public decimal TotalPrice { get; set; }
        /// <summary>
        /// 金币数量
        /// </summary>
        public decimal GoldPrice { get; set; }
        /// <summary>
        /// 创建时间
        /// </summary>
        public DateTime CreateTime { get; set; }
    }
}
