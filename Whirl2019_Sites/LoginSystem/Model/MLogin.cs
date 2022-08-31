using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LoginSystem
{
    public class MLogin
    {
        /// <summary>
        /// id
        /// </summary>
        private int id;

        /// <summary>
        /// 手机号
        /// </summary>
        private string phoneNum = string.Empty;

        /// <summary>
        /// 密码
        /// </summary>
        private string passWord = string.Empty;

        /// <summary>
        /// 用户名
        /// </summary>
        private string userId = string.Empty;

        /// <summary>
        /// QQ号
        /// </summary>
        private string qqNum = string.Empty;

        /// <summary>
        /// 邮箱地址
        /// </summary>
        private string email = string.Empty;

        /// <summary>
        /// 是否删除
        /// </summary>
        private int isDelete = 0;

        /// <summary>
        /// 修改时间
        /// </summary>
        private DateTime modifyTime = DateTime.Now;

        /// <summary>
        /// id
        /// </summary>
        public int Id
        {
            get
            {
                return id;
            }

            set
            {
                id = value;
            }
        }

        /// <summary>
        /// 手机号
        /// </summary>
        public string PhoneNum
        {
            get
            {
                return phoneNum;
            }

            set
            {
                phoneNum = value;
            }
        }

        /// <summary>
        /// 登录密码
        /// </summary>
        public string PassWord
        {
            get
            {
                return passWord;
            }

            set
            {
                passWord = value;
            }
        }

        /// <summary>
        /// 用户名
        /// </summary>
        public string UserId
        {
            get
            {
                return userId;
            }

            set
            {
                userId = value;
            }
        }

        /// <summary>
        /// QQ号
        /// </summary>
        public string QqNum
        {
            get
            {
                return qqNum;
            }

            set
            {
                qqNum = value;
            }
        }

        /// <summary>
        /// 邮箱
        /// </summary>
        public string Email
        {
            get
            {
                return email;
            }

            set
            {
                email = value;
            }
        }

        /// <summary>
        /// 是否删除
        /// </summary>
        public int IsDelete
        {
            get
            {
                return isDelete;
            }

            set
            {
                isDelete = value;
            }
        }

        /// <summary>
        /// 修改时间
        /// </summary>
        public DateTime ModifyTime
        {
            get
            {
                return modifyTime;
            }

            set
            {
                modifyTime = value;
            }
        }
    }
}
