using Crazy2018_Sys_DBHelper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Service.SignalEntitiy2
{  /// <summary>
   /// 提现数据
   /// </summary>
    public class cs_cashmoney : cs_base
    {
        /// <summary>
        /// 密码
        /// </summary>
        public string pwd;

        public string Remark;

        /// <summary>
        ///  1支付宝   2银行卡
        /// </summary>
        public int t;

        public int UserId;

        /// <summary>
        /// 提现金额
        /// </summary>
        public int CmMoney;
    }

    public class cs_base
    {
        /// <summary>
        /// 函数名
        /// </summary>
        public string fn = "";
        /// <summary>
        /// 可能为0，游戏的协议使用对应游戏ID
        /// </summary>
        public int _g;
        /// <summary>
        /// 客服端要的值 不做任何处理直接返回去
        /// </summary>
        public int cc = 0;
        /// <summary>
        /// 可能为0，只有在登录后才不会为0，为断线后重新绑定Session用
        /// </summary>
        public int _r;
    }

    public class sc_cashmoney : sc_base
    {


    }
    public class sc_base
    {
        /// <summary>
        /// 函数名
        /// </summary>
        public string fn = "";
        public int _msgid;
        public int cc = 0;
        /// <summary>
        /// 1.成功 0失败 -1具体原因。
        /// </summary>
        public int result;
        /// <summary>
        /// 有条件选择的，需要客户根据条件处理下一次请教用的 默认为 false
        /// </summary>
        public bool closefun;
    }
}
