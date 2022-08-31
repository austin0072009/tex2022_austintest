using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
  public  class EmailModel
    {
        public string Title { get; set; }
        public string Content { get; set; }
        public string UserIds { get; set; }
        /// <summary>
        /// 金币数量
        /// </summary>
        public long gold { get; set; }
        /// <summary>
        /// 钻石数量
        /// </summary>
        public long diamond { get; set; }
        // public long 
    }
}
