using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity.Club
{
   public class ClubllianceView
    {
        public long idx { get; set; }
        public int UserId { get; set; }
        public string UserName { get; set; }
        public int State { get; set; }
        public System.DateTime CreateDate { get; set; }
        public string childs { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public int limitcount { get; set; }
        public bool search { get; set; }
        public bool manager { get; set; }
        public long gold { get; set; }
        public long diam { get; set; }
        public string applyclubidx { get; set; }
        public int lv { get; set; }
        public bool closeapply { get; set; }
        public string CreatTime { get; set; }
    }
}
