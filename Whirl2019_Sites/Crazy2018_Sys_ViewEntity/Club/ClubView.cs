using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity.Club
{
    public class ClubView 
    {
        public long idx { get; set; }
        public int UserId { get; set; }
        public int State { get; set; }
        public DateTime CreateDate { get; set; }
        public List<ClubChildView> jsonchilds { get; set; }
        public string childs { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public int limitcount { get; set; }
        public bool search { get; set; }
        public bool manager { get; set; }
        public long gold { get; set; }
        public long diam { get; set; }
        public string UserName { get; set; }
        public string applyUserID { get; set; }
        public string Loc { get; set; }
        public int lv { get; set; }
        public bool closeapply { get; set; }
   
        public string applyGoldList { get; set; }
        public int alliancid { get; set; }
        public string CreatTime { get; set; }
    }

    public class ClubChild 
    {
        public int userid { get; set; }
        public int rate { get; set; }
        public int playcount { get; set; }
        public int _ismanager { get; set; }
        public int cgold { get; set; }
    }

    public class ClubChildView : BaseName
    {
        public int userid { get; set; }
        public int rate { get; set; }
        public int playcount { get; set; }
        public int _ismanager { get; set; }
        public int cgold { get; set; }
    }

    public class BaseName {
        public string username { get; set; }
    }
}
