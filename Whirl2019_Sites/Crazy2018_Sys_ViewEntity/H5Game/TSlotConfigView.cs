using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
    public class TSlotConfigView
    {
        /// <summary>
        /// 主键id
        /// </summary>
        public int id { get; set; }
        /// <summary>
        /// 房间id
        /// </summary>
        public int RoomID { get; set; }
        /// <summary>
        /// 详细配置
        /// </summary>
        public string Config { get; set; }
        /// <summary>
        /// 修改时间
        /// </summary>
        public DateTime UpdateTime { get; set; }
        /// <summary>
        /// 游戏id
        /// </summary>
        public int GameID { get; set; }
        public string   GameName { get; set; }
    }

    /// <summary>
    /// 详细配置
    /// </summary>
    public class sconfig
    {
        public string MarryMults { get; set; }
        /// <summary>
        /// 单行分数
        /// </summary>
        public string[] SingleLineScore { get; set; }
        /// <summary>
        /// 最大 筹码
        /// </summary>
        public int MaxBet { get; set; }
        /// <summary>
        /// 单行计数
        /// </summary>
        public int SingleLineCount { get; set; }
        /// <summary>
        /// 线
        /// </summary>
        public string Lines { get; set; }

        /// <summary>
        /// 倍数
        /// </summary>
        public string Multiples { get; set; }
        /// <summary>
        /// 小游戏时间奖励
        /// </summary>
        public int Bonus_SmallGametime { get; set; }
        /// <summary>
        /// 间隔时间
        /// </summary>
        public int Scatter_Freetime { get; set; }
        /// <summary>
        /// 数字锁定
        /// </summary>
        public int JackstockNum { get; set; }
        /// <summary>
        /// Jackstock 千斤顶
        /// </summary>
        public string Jackstock { get; set; }
        /// <summary>
        /// Jackstock概率数值
        /// </summary>
        public int Probability_Jackstock_Num { get; set; }
        /// <summary>
        /// Jackstock概率
        /// </summary>
        public string Probability_Jackstock { get; set; }
        /// <summary>
        /// DK白色用户号码
        /// </summary>
        public int DKWhiteUserNum { get; set; }
        /// <summary>
        /// DK白色用户
        /// </summary>
        public string DKWhiteUser { get; set; }
        /// <summary>
        /// DK黑色用户号码
        /// </summary>
        public int DKBlackUserNum { get; set; }
        /// <summary>
        /// DK黑色用户
        /// </summary>
        public string DKBlackUser { get; set; }
        /// <summary>
        /// 奖池费用
        /// </summary>
        public int ChargeForGoldPool { get; set; }
        /// <summary>
        /// 奖池百分比
        /// </summary>
        public int GoldPool_Attenuation_Percent { get; set; }
        /// <summary>
        /// 奖池
        /// </summary>
        public int GoldPool_Attenuation { get; set; }
        /// <summary>
        /// 奖池最小值
        /// </summary>
        public int GoldPoolMin { get; set; }
        /// <summary>
        /// 奖池最大值
        /// </summary>
        public int GoldPoolMax { get; set; }
        /// <summary>
        /// 奖池分量
        /// </summary>
        public string GoldPoolWeight { get; set; }
        /// <summary>
        /// CtrJack
        /// </summary>
        public int CtrJack { get; set; }
        /// <summary>
        /// 自动登录
        /// </summary>
        public int AutoWhiteLogin { get; set; }
        /// <summary>
        /// 自动退出
        /// </summary>
        public int AutoWhiteOut { get; set; }
        /// <summary>
        /// 白色用户num
        /// </summary>
        public int WhiteUserNum { get; set; }
        /// <summary>
        /// 白色用户库存
        /// </summary>
        public string WhiteUserStock { get; set; }
        /// <summary>
        /// 黑色用户数
        /// </summary>
        public int BlackUserNum { get; set; }
        /// <summary>
        /// 黑色用户
        /// </summary>
        public string BlackUserStock { get; set; }
        /// <summary>
        /// 自动消隐
        /// </summary>
        public int AutoBlackLogin { get; set; }
        /// <summary>
        /// 自动断开
        /// </summary>
        public int AutoBlackOut { get; set; }

    }

    
}
