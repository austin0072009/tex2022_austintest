using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
   public class GameUserView:BaseView
    {
        public int UserID { get; set; }
        public string UserName { get; set; }
        public string WechatName { get; set; }
        public decimal UserMoney { get; set; }
        public float Diamond { get; set; }
        public decimal TotalMoney { get; set; }
        public decimal TotalDiamond { get; set; }
        public string LastLotinTime { get; set; }
        public string RegTime { get; set; }
        public string IP { get; set; }
        public string IsRobot { get; set; }

        public string PhoneNum { get; set; }


        public string TopUserName { get; set; }

        /// <summary>
        /// 会员等级
        /// </summary>
        public int vlevel { get; set; }

        public string levelName { get; set; }

        public string IsAgent { get; set; }
        public int AgentId { get; set; }
        /// <summary>
        /// 锁定到期时间
        /// </summary>
        public string LockTime { get; set; }
        /// <summary>
        /// 胜率百分比
        /// </summary>
        public int WinPercent { get; set; }
        public int RobotLevel { get; set; }
        public string WechatHeadIcon { get; set; }
        /// <summary>
        /// 1超级用户2系统用户
        /// </summary>
        public int RoleType { get; set; }
        public int RobotGameid { get; set; }
        public string PassportID { get; set; }
    }
}
