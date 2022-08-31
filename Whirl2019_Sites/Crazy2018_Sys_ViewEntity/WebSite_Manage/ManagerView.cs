using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
  public  class ManagerView: BaseView
    {
        public int id { get; set; }
        public int role_id { get; set; }
        public int role_type { get; set; }
        public string user_name { get; set; }
        public string password { get; set; }
        public string salt { get; set; }
        public string real_name { get; set; }
        public string telephone { get; set; }
        public string email { get; set; }
        public int is_lock { get; set; }
        public string role_name { get; set; }
        public string IP { get; set; }

    }
}
