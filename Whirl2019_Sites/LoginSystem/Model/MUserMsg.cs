using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LoginSystem
{
    public class MUserMsg
    {
        /// <summary>
        /// id
        /// </summary>
        private int id;

        /// <summary>
        /// 用户名
        /// </summary>
        private string userID = string.Empty;

        /// <summary>
        /// 手机号
        /// </summary>
        private string phoneNum = string.Empty;

        /// <summary>
        /// 操作类型 0注册1找回密码2交易密码
        /// </summary>
        private int operType = -1;

        /// <summary>
        /// 验证码
        /// </summary>
        private string verifyCode = string.Empty;

        /// <summary>
        /// 验证次数
        /// </summary>
        private int matchTimes = 0;

        /// <summary>
        /// 添加时间
        /// </summary>
        private DateTime addTime = DateTime.Now;

        /// <summary>
        /// 修改时间
        /// </summary>
        private DateTime modifyTime = DateTime.Now;

        /// <summary>
        /// 是否删除
        /// </summary>
        private int isDelete = 0;

        /// <summary>
        /// Id
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
        /// 用户名
        /// </summary>
        public string UserID
        {
            get
            {
                return userID;
            }

            set
            {
                userID = value;
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
        /// 操作类型 0注册1找回密码2交易密码
        /// </summary>
        public int OperType
        {
            get
            {
                return operType;
            }

            set
            {
                operType = value;
            }
        }

        /// <summary>
        /// 验证码
        /// </summary>
        public string VerifyCode
        {
            get
            {
                return verifyCode;
            }

            set
            {
                verifyCode = value;
            }
        }

        /// <summary>
        /// 校验次数
        /// </summary>
        public int MatchTimes
        {
            get
            {
                return matchTimes;
            }

            set
            {
                matchTimes = value;
            }
        }

        /// <summary>
        /// 添加时间
        /// </summary>
        public DateTime AddTime
        {
            get
            {
                return addTime;
            }

            set
            {
                addTime = value;
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
    }
}
