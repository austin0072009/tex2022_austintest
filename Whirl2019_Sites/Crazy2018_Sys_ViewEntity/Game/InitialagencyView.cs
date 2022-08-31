using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
   public class InitialagencyView:BaseView
    {
        /// <summary>
        /// 初始代码
        /// </summary>
        public string InitialaCode { get; set; }
        /// <summary>
        /// 使用者信息
        /// </summary>
        public string UserUserId { get; set; }
        /// <summary>
        /// 初始二维码存放地址
        /// </summary>
        public string CodePath { get; set; }
    }
}
