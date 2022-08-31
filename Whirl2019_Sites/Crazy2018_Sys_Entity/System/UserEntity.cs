using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Entity
{
    /// <summary>
    /// 用户信息
    /// </summary>
    public class UserEntity : BaseEntity<int>
    {
        public UserEntity()
        {
            bankCards = new List<BankCardEntity>();
        }
        /// <summary>
        /// 手机号
        /// </summary>
        public string PhoneNum { get; set; }

        /// <summary>
        /// 密码
        /// </summary>
        public string PassWord { get; set; }
        /// <summary>
        /// 密码盐
        /// </summary>
        public string Salt { get; set; }

        /// <summary>
        /// 用户名
        /// </summary>
        public string UserId { get; set; }

        /// <summary>
        /// QQ号
        /// </summary>
        public string QqNum { get; set; }

        /// <summary>
        /// 邮箱地址
        /// </summary>
        public string Email { get; set; }
        public virtual List<BankCardEntity> bankCards { get; set; }
    }
}
