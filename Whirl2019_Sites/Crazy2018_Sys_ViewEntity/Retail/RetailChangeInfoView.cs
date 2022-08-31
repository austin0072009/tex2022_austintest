using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity.Retail
{
    class RetailChangeInfoView
    {
        public int id { get; set; }
        public int retailid { get; set; }
        public string  name { get; set; }
        public sbyte type { get; set; }
        public long score { get; set; }
        public System.DateTime createtime { get; set; }
        public string desc { get; set; }
    }
}
