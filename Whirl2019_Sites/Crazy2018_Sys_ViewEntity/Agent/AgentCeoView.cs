using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
   public class AgentCeoView
    {
        public string UserName { get; set; }

        public int UserID { get; set; }

        public Nullable<int> Role { get; set; }

        public string RoloName { get; set; }

        public Nullable<int> PartnerUserID { get; set; }
        public Nullable<int> FFUserID { get; set; }
        public Nullable<long> GoldCHistory { get; set; }
        public Nullable<double> GoldC { get; set; }
        public Nullable<System.DateTime> lastdealtime { get; set; }
        public string _lastdealtime { get; set; }

        public string ChildAgents { get; set; }


        public List<int> _JackpotRate { get; set; }


        public string JackpotRate { get; set; }

        /// <summary>
        /// 平台
        /// </summary>
        public Nullable<int> GoldCH_P_R { get; set; }
        /// <summary>
        /// 股东
        /// </summary>
        public Nullable<long> GoldCH_G_R { get; set; }
        /// <summary>
        /// 红利
        /// </summary>
        public string rates { get; set; }

        public string PotRates { get; set; }

    }
}
