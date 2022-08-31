using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity.GameCore
{
    public class tentitycardView
    {
        /// <summary>
        /// 卡id
        /// </summary>
        public int Id { get; set; }
        /// <summary>
        /// 类型id
        /// </summary>
        public int TypeId { get; set; }
        /// <summary>
        /// 类型名称
        /// </summary>
         public string TypeName { get; set; }
        /// <summary>
        /// 添加人
        /// </summary>
        public string AddName { get; set; }
        /// <summary>
        /// 卡名称
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        /// 卡编号
        /// </summary>
        public Nullable<int> CardNum { get; set; }
        /// <summary>
        /// 卡价格
        /// </summary>
        public Nullable<decimal> CardPrice { get; set; }
        /// <summary>
        /// 总价格
        /// </summary>
        public Nullable<decimal> TatolPrice { get; set; }
        /// <summary>
        /// 金币数量
        /// </summary>
        public Nullable<decimal> GoldPrice { get; set; }
        /// <summary>
        /// 创建时间
        /// </summary>
        public string CreateTime { get; set; }

        public string CreatTime { get; set; }
        /// <summary>
        /// 是否使用
        /// </summary>
        public string IsUse { get; set; }
        /// <summary>
        /// 过期时间
        /// </summary>
        public string ExpirationTime { get; set; }
        /// <summary>
        /// 密码
        /// </summary>
        public string PassWord { get; set; }

        public string IsDel { get; set; }
        public string IsExpiration { get; set; }
        public int Number { get; set; }
    }
}
