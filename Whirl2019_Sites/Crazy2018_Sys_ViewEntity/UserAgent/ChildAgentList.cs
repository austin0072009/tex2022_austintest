using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
   public class ChildAgentList
    {
        public int UserID { get; set; }

        /// <summary>
        ///  流水
        /// </summary>
        public string water { get; set; }

        /// <summary>
        /// 几级 1级表示直接下级
        /// </summary>
        public int lv { get; set; }

        public DateTime CreatTime { get; set; }

        public string income { get; set; }
    }
}
