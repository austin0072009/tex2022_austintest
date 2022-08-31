using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
   public class tentitycardtypeView
    {

        public int Id { get; set; }
        public string AddName { get; set; }
        public string Name { get; set; }
        public Nullable<int> CardNum { get; set; }
        public Nullable<decimal> CardPrice { get; set; }
        public Nullable<decimal> TatolPrice { get; set; }
        public Nullable<decimal> GoldPrice { get; set; }
        public string CreateTime { get; set; }
    }
}
