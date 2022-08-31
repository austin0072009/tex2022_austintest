using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity.Retail
{
   public class RetailInfoView
    {
        public int id { get; set; }
        public string appsecret { get; set; }
        public string appid { get; set; }
        public string name { get; set; }
        public long gold { get; set; }
        public DateTime createtime { get; set; }
        public DateTime modefy { get; set; }
        public sbyte status { get; set; }
        public double playeramount { get; set; }
    }
}
