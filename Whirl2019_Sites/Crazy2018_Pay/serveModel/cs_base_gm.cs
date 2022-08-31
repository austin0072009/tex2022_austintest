namespace Crazy2018_Pay
{
    public class cs_base_gm
    {
        public string fn = "";
    }
    /// <summary>
    /// 充值接口
    /// </summary>
    public class cs_charge_gm : cs_base_gm
    {
        /// <summary>
        /// 1、充值金币 2、砖石
        /// </summary>
        public int type;
        /// <summary>
        /// 固定传4
        /// </summary>
        public int gameid;
        /// <summary>
        /// 唯一值
        /// </summary>
        public int userid;
        /// <summary>
        /// 数量
        /// </summary>
        public float money;
        public string id;
    }
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
}
