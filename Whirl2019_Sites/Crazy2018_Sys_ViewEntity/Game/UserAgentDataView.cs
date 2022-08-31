using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
  public  class UserAgentDataView : BaseView
    {
        public UserAgentDataView()
        {
            AgentData = new List<GameUserAgentView>();
        }
        public int UserId { get; set; }
        public string QRPath { get; set; }
        public decimal HistoryGold { get; set; }
        public decimal Gold { get; set; }
        public string HtmlPath { get; set; }
        public List<GameUserAgentView> AgentData { get; set; }
    }
}
