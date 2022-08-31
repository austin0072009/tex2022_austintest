using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
    public class GameActivityView
    {
        /// <summary>
        /// 标题
        /// </summary>
        public string Title { get; set; }

        public DateTime StartTime { get; set; }

        public DateTime EndTime { get; set; }

        public ActivityPicInfoView titleInfo { get; set; }
        public ActivityPicInfoView contentInfo { get; set; }
    }
    public class ActivityPicInfoView
    {
        public int Width { get; set; }
        public int Height { get; set; }
        /// <summary>
        /// 图片地址
        /// </summary>
        public string PicUrl { get; set; }


        /// <summary>
        /// 1:跳转网页   2游戏内跳转
        /// </summary>
        public int type;

        /// <summary>
        /// 网页跳转地址
        /// </summary>

        public string WebUrl;


        /// <summary>
        /// 游戏内跳转类型：   1红包界面   2其他界面
        /// </summary>
        public int gType;
    }


}
