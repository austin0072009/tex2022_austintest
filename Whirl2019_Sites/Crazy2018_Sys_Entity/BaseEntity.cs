using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Entity
{
    public class BaseEntity<TEntity>
    {
        public BaseEntity()
        {
            IsDel = false;
            CreatTime = DateTime.Now;
        }
        /// <summary>
        /// 主键
        /// </summary>
        [Key]
        public TEntity ID { get; set; }
        /// <summary>
        /// 是否删除
        /// </summary>
        [Required]
        public bool IsDel { get; set; }
        /// <summary>
        /// 创建时间
        /// </summary>
        [Required]
        public DateTime CreatTime { get; set; }
    }
}
