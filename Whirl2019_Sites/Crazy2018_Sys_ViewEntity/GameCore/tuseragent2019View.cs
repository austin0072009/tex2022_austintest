using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity.GameCore
{
   public class tuseragent2019View
    {
        /// <summary>
        /// 代理人姓名
        /// </summary>
        public string UserName { get; set; }
        public int UserID { get; set; }
        public Nullable<int> Lv { get; set; }
        /// <summary>
        /// 父级代理姓名
        /// </summary>
        public string FUserName { get; set; }
        public Nullable<int> FUserID { get; set; }
        public long GoldHistoryCommission { get; set; }
        public long GoldCommission { get; set; }
        public string QRPath { get; set; }
        public string Code { get; set; }
        public string HtmlUrl { get; set; }
        public Nullable<System.DateTime> lastdealtime { get; set; }
        public long watergoldadd { get; set; }
        public long watergoldreduce { get; set; }
        public long childwater { get; set; }
        public string ChildAgents { get; set; }
        /// <summary>
        /// 总代理姓名
        /// </summary>
        public string topUserName { get; set; }
        public Nullable<int> TopUserID { get; set; }
        public Nullable<int>  gameWinCount { get; set; }
        public Nullable<int> gameLostCount { get; set; }
        public Nullable<int> gameDrawCount { get; set; }
        public Nullable<int> dealCardCount { get; set; }
        public Nullable<int> pos1Count { get; set; }
        public Nullable<int> pos2Count { get; set; }
        public Nullable<int> pos5Count { get; set; }
        public Nullable<int> pos10Count { get; set; }
        public Nullable<int> pos20Count { get; set; }
        public Nullable<int> pos50Count { get; set; }

    }
    public class tuseragent2019View2 : tuseragent2019View
    {
        public List<ChildAgentList> ChildAgentsEY { get; set; }

        public string Agentlevel { get; set; }

        public string qrcode { get; set; }

    }
}
