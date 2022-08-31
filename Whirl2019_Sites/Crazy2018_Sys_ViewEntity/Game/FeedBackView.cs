using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
   public class FeedBackView:BaseView
    {
        public int  Id { get; set; }
        public string UserName { get; set; }
        public int Feedbacktype { get; set; }
        public string Feedbacktypename { get; set; }
        public string Tel { get; set; }
        public string Content { get; set; }

        public string fileurl { get; set; }

        public string urlname { get; set; }
    }
}
