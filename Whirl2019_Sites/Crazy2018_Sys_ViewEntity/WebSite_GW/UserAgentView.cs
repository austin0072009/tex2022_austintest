using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
    public class UserAgentView : BaseView
    {
        /// <summary>
        /// A级代理人数
        /// </summary>
        public int ALevelCount { get; set; }
        /// <summary>
        /// B级代理人数
        /// </summary>
        public int BLevelCount { get; set; }
        /// <summary>
        /// 代理人数
        /// </summary>
        public int LevelCount { get; set; }
        /// <summary>
        /// 推广二维码路径
        /// </summary>
        public string QRPath { get; set; }
        /// <summary>
        /// 我的代理ID
        /// </summary>
        public int AagentId { get; set; }
        /// <summary>
        /// 我的电话号码
        /// </summary>
        public string PhoneNum { get; set; } 
        /// <summary>
        /// 代理用户
        /// </summary>
        List<AgentView> AgentInfos { get; set; }

    }
}
