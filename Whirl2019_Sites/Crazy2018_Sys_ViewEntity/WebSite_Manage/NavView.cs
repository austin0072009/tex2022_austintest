using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
   public class NavView:BaseView
    {
        public int id { get; set; }
        public int parent_id { get; set; }
        public int channel_id { get; set; }
        public string nav_type { get; set; }
        public string name { get; set; }
        public string title { get; set; }
        public string sub_title { get; set; }
        public string icon_url { get; set; }
        public string link_url { get; set; }
        public int sort_id { get; set; }
        public int is_lock { get; set; }
        public string action_type { get; set; }
        public int is_sys { get; set; }
        public int class_layer { get; set; }
        public int width { get; set; }
    }
}
