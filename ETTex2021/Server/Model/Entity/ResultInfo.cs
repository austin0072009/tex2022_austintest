using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    public class ResultInfo
    {
        /// <summary>
        /// 操作结果类型
        /// </summary>
        public int state { get; set; }
        /// <summary>
        /// 获取 消息内容
        /// </summary>
        public string message { get; set; }
        /// <summary>
        /// 获取 返回数据
        /// </summary>
        public object data { get; set; }

    }
}
