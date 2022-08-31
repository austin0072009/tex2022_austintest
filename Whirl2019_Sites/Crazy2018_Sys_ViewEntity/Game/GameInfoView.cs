using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
  public  class GameInfoView:BaseView
    {
        public int ID { get; set; }
        public string Name { get; set; }
        /// <summary>
        /// 游戏介绍
        /// </summary>
        public string GameIntroduce { get; set; }
        /// <summary>
        /// 游戏规则
        /// </summary>
        public string GameRule { get; set; }
        /// <summary>
        /// 是否启用
        /// </summary>
        public string IsEnableDesc { get; set; }
        /// <summary>
        /// 修改人
        /// </summary>
        public string ModifyUser { get; set; }
        public bool IsEnable { get; set; }
        /// <summary>
        /// 删除状态
        /// </summary>
        public bool DeleteState { get; set; }
        public string operation { get; set; }
        public int OldId { get; set; }
        /// <summary>
        /// 排序
        /// </summary>
        public int? Sort { get; set; }
        public string gameurl { get; set; }
        public int type { get; set; }
        public string icon { get; set; }
        /// <summary>
        /// 平台类型
        /// </summary>
        public string platType { get; set; }
        /// <summary>
        /// 游戏类型
        /// </summary>
        public int jdbType { get; set; }
        /// <summary>
        /// 是否维护
        /// </summary>
        public string IsRun { get; set; }

        public int isHot { get; set; }

    }
}
