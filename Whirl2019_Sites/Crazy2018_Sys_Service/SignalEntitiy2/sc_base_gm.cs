using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Service.SignalEntitiy2
{
    public class sc_base_gm
    {
        public string fn = "";
        /// <summary>
        /// 0表示 成功 1以上表示 失败
        /// </summary>
        public int _ret;
        /// <summary>
        /// 如果有错误的描述信息
        /// </summary>
        public string _info;
    }
    public class sc_sendemail_gm : sc_base_gm
    {

    }
    /// <summary>
    /// 充值接口（服务端）
    /// </summary>
    public class sc_charge_gm : sc_base_gm
    {
        /// <summary>
        /// 原金币数或钻石数
        /// </summary>
        public decimal UserMoney;
    }
    /// <summary>
    /// 游戏场次信息
    /// </summary>
    public class sc_gameInfo : sc_base_gm
    {

    }
    /// <summary>
    /// 游戏场次信息
    /// </summary>
    public class sc_tjackpot : sc_base_gm
    {

    }
}
