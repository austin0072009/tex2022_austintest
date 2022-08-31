using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
    public class GameUserAgentManage
    {
        public GameUserAgentManage()
        {
            agents = new List<GameUserAgentView>();
        }
        /// <summary>
        /// 代理数量
        /// </summary>
        public int AgentCount { get; set; }
        /// <summary>
        /// 总税收
        /// </summary>
        public long TaxCount { get; set; }
        /// <summary>
        /// 代理信息
        /// </summary>
        public List<GameUserAgentView> agents { get; set; }
    }
}
