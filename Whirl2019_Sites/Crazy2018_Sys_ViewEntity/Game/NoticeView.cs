using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{

    public class NoticeInfo
    {
        public string title;

        public string content;
    }

    public class NoticeView : BaseView
    {
        public int id { get; set; }
        public string title { get; set; }
        public string content { get; set; }
        public string noticetime { get; set; }
        public string C_author { get; set; }
        public string C_type { get; set; }
        public string TypeName { get; set; }
        public int isStart { get; set; }
        public string TcPicUrl { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }

    }
}
