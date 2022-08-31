using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Entity
{
  public  class GameActivity : BaseEntity<long>
    {
        public string Title { get; set; }

        public string TitleUrl { get; set; }


        public string PicUrl { get; set; }

        public DateTime StartTime { get; set; }

        public DateTime EndTime { get; set; }

        public int Width { get; set; }

        public int Height { get; set; }
        /// <summary>
        /// 标题图片 宽
        /// </summary>
        public int TWidth { get; set; }
        /// <summary>
        /// 标题图片 高
        /// </summary>
        public int THeight { get; set; }

        /// <summary>
        ///   0不跳转 1:跳转网页 官网   2游戏内跳转
        /// </summary>
        public int Type { get; set; }

        /// <summary>
        /// 跳转网页的跳转地址
        /// </summary>
        public string WebUrl { get; set; }

        /// <summary>
        ///Type游戏内跳转类型：  1红包界面   2其他界面 可能还要加
        /// </summary>
        public int gType { get; set; }

        public bool IsEnble { get; set; }
        
        public string BackField { get; set; }

        public string UserIds { get; set; }


    }
}
