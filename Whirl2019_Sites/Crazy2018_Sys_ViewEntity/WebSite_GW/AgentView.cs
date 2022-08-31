using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
   
    /// <summary>
    /// 代理信息
    /// </summary>
   public class AgentView : BaseView
    {
        public int  UserID { get; set; }
        public decimal ToDayBet { get; set; }
        public int Bet { get; set; }
    }
}
