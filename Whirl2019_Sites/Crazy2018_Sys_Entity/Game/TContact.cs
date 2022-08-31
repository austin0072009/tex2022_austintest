using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Entity.Game
{
     public class TContact : BaseEntity<long>
    {
        public string QQ { get; set; }
        public string Wechat { get; set; }
        public string Skype { get; set; }
        public string Phone { get; set; }
        public string Other1 { get; set; }
        public string Other2 { get; set; }
        public string Other3 { get; set; }
    }
}
