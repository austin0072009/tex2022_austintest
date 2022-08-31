using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Entity
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

    public class sc_apply_club : sc_base_gm {
     
        public int _msgid;
        public int cc = 0;
        /// <summary>
        /// 1.成功 0失败 -1具体原因。 
        /// </summary>
        public int result;
    }
    public class sc_agree_alli : sc_base_gm
    {

    }
    public class sc_cluborunion_gm : sc_base_gm
    {
        /// <summary>
        /// 原idx
        /// </summary>
        public int NewIdx;
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

    public class cs_jackpotrate :cs_base_gm
    {
        public int userId { get; set; }


        public List<int> jackpotrate { get; set; }

        public List<int> bunosrate { get; set; }

        public int Ggr { get; set; } = -1;
        public int Gpr { get; set; } = -1;

        public long GoldC { get; set; }

        public List<int> PotRates { get; set; }
    }


    public class cs_sendDividend : cs_base_gm
    {
        public int uId;
        /// <summary>
        /// 发放金额
        /// </summary>

        public long gold;
    }


    /// <summary>
    /// 机器人加入房间
    /// </summary>
    public class cs_robotjoinroom : cs_base_gm {

        public int userId { get; set; }

        public int gameId { get; set; }

        public int roomnumber { get; set; }

        public int levelid { get; set; }

        public int pos { get; set; }

        public int tableid { get; set; }
    }
    /// <summary>
    /// h5
    ///  带入
    /// </summary>
    public class cs_jdbIncrdecr_gm : cs_base_gm
    {
        /// <summary>
        /// 玩家id
        /// </summary>
        public int uid;

        /// <summary>
        /// 0带入h5    1退出上分到本平台
        /// </summary>
        public int type;

        /// <summary>
        /// 上下分金额
        /// </summary>
        public decimal money;

        public int gameid;
    }
    public class sc_jdbIncrdecr_gm : sc_base_gm
    {
        /// <summary>
        /// 余额
        /// </summary>
        public decimal balance;
    }

    /// <summary>
    /// 下注信息
    /// </summary>
    public class cs_wagerinfo_gm : cs_base_gm
    {
        /// <summary>
        /// 交易号
        /// </summary>
        public string transferId;

        public int uid;

        /// <summary>
        /// 游戏型态
        /// </summary>
        public int gType;
        /// <summary>
        /// 机台类型
        /// </summary>
        public int mType;

        /// <summary>
        /// 下注分
        /// </summary>
        public double bet;

        /// <summary>
        /// 输赢分
        /// </summary>
        public double win;
        /// <summary>
        /// 总输赢
        /// </summary>
        public double netWin;

        /// <summary>
        /// 玩家ip地址
        /// </summary>
        public string ipAddress;

        /// <summary>
        /// 游戏时间
        /// </summary>
        public string gameDate;

    }

    public class sc_wagerinfo_gm : sc_base_gm
    {
        /// <summary>
        /// 余额
        /// </summary>
        public decimal balance;
    }

    public class sc_cancelwager : sc_base_gm
    {

        /// <summary>
        /// 余额
        /// </summary>
        public decimal balance;
    }

    public class cs_cancelwager : cs_base_gm
    {
        /// <summary>
        /// 交易号
        /// </summary>
        public string transferId;

        public int uid;
    }

   
}
