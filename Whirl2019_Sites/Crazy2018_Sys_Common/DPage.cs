using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Common
{
    public class DPage
    {
        public DPage()
        {
            PageSize = 15;
            PageIndex = 1;
        }
        public int PageIndex { get; set; }
        /// <summary>
        /// 页大小
        /// </summary>
        public int PageSize { get; set; }
        /// <summary>
        /// 总条数
        /// </summary>
        public int TotalCount { get; set; }
        /// <summary>
        /// 查询字
        /// </summary>
        public string Keywords { get; set; }
    }
    public class DPagePara: DPage
    {
        public string userid { get; set; }

        public int ChangeType { get; set; }

        public int isExport { get; set; }

        public byte[] filebyte { get; set; }

        public int GameId { get; set; }

        public int isRobot { get; set; } = -1;

        public string orderby { get; set; } = "0";

        public int Rtype { get; set; }
        public int BigWinType { get; set; }
        public DateTime? starttime { get; set; } = null;
        public DateTime? endtime { get; set; } = null;
        /// <summary>
        /// 角色id
        /// </summary>
        public int RoleId { get; set; }
        /// <summary>
        /// 汇总统计公用字段  暂时不用定义具体含义
        /// </summary>
        public string TotalMoney { get; set; }
        /// <summary>
        /// 汇总统计公用字段  暂时不用定义具体含义
        /// </summary>
        public string TotalNum { get; set; }
        /// <summary>
        /// 点卡类型
        /// </summary>
        public int typeid { get; set; } = -1;
        /// <summary>
        /// 是否使用 0未使用 1使用
        /// </summary>
        public int Isuse { get; set; }
        /// <summary>
        /// 是否过期 1 未过期 0 过期
        /// </summary>
        public int IsExpiration { get; set; }
    }
    public class DPageLess: DPage
    {
        public int RoleId { get; set; }
    }

}
