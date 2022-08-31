using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Entity.Game
{
   public class NoticesEntity:BaseEntity<long>
    {
        /// <summary>
        /// 活动类型
        /// </summary>
        public int Type { get; set; }
        /// <summary>
        /// 标题地址
        /// </summary>
        public string TitleImgUrl { get; set; }
        /// <summary>
        /// 内容地址
        /// </summary>
        public string ContentImgUrl { get; set; }
        /// <summary>
        /// 创建人
        /// </summary>
        public int Userid { get; set; }
        /// <summary>
        /// 公告时间
        /// </summary>
        public DateTime AnnouncementTime { get; set; }
        /// <summary>
        /// 冻结资金
        /// </summary>
        public decimal Frozenmoney { get; set; }
        /// <summary>
        /// 违规账号信息
        /// </summary>
        public string Vioinfo { get; set; }

        /// <summary>
        /// 举报人信息
        /// </summary>
        public string Reportinfo { get; set; }

        /// <summary>
        /// 伙牌用户名信息
        /// </summary>
        public string Matchinfos { get; set; }
        /// <summary>
        /// 排名信息 
        /// </summary>
        public string Partnerusers { get; set; }
        /// <summary>
        /// 创建时间
        /// </summary>
        public DateTime CreateTime { get; set; }
    }
}
