using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
   public class EmailView:BaseView
    {
        public string TradeNo { get; set; }
        public int FromUserId { get; set; }
        public int[] userids { get; set; }

        public string sUserIds { get; set; }
        public string FromUserName { get; set; }

        public int ToUserId { get; set; }


        public string ToUserName { get; set; }
        /// <summary>
        /// ，1交易，2系统,3 个人
        /// </summary>
        public int MailType { get; set; }
        public string Content { get; set; }
        /// <summary>
        /// 0没有附件，1有附件，2附件已领取
        /// </summary>
        public int State { get; set; }
        /// <summary>
        /// 附件
        /// </summary>
        public string Attach { get; set; }
        /// <summary>
        /// 交易内容状态，0失败，1成功  2撤销
        /// </summary>
        public int CState { get; set; }

        /// <summary>
        /// 是否已经查看 或者 表示领取
        /// </summary>
        public bool IsLook { get; set; }
        /// <summary>
        /// 邮件类型0 个人邮件 1 系统邮件
        /// </summary>
        public int EmailType { get; set; }
        public string Title { get; set; }
        public string CreateDate { get; set; }
        public long Coin { get; set; }
        public long Diamond { get; set; }
    }
}
