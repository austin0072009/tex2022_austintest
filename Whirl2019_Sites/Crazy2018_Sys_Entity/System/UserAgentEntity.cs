using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Entity
{
    /// <summary>
    /// 用户代理信息
    /// </summary>
    public class UserAgentEntity:BaseEntity<int>
    {
        /// <summary>
        /// 用户
        /// </summary>
        public int UserId { get; set; }
        /// <summary>
        /// 父级代理ID
        /// </summary>
        public int FatherId { get; set; }
        /// <summary>
        /// 二维码路径
        /// </summary>
        public string QrPath { get; set; }
        /// <summary>
        /// 备注
        /// </summary>
        public string Remark { get; set; }
        /// <summary>
        /// 代理等级
        /// </summary>
        public int Level { get; set; }
    }
}
