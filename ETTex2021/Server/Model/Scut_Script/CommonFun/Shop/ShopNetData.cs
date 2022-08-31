using System;
using System.Collections.Generic;

using ETModel.Framework.Game.Contract.Action;
namespace ETModel.Script.CsScript.Action
{
    /// <summary>
    /// 商品
    /// </summary>
    [Serializable]
    public class cs_commodity : cs_base
    {
        /// <summary>
        /// 2 砖石道具    1门票 暂时无
        /// </summary>
        public int commodityType;
    }
    /// <summary>
    /// 商品信息
    /// </summary>
    [Serializable]
    public class sc_commodity : sc_base
    {
        public sc_commodity()
        {
            data = new List<GoodsModelSD>();
        }
        public string shopurl = "";
        public List<GoodsModelSD> data;
        /// <summary>
        /// 兑换次数
        /// </summary>
        public int exchangeCount;
    }
    /// <summary>
    /// 商品实体
    /// </summary>
    [Serializable]
    public class GoodsModelSD
    {
        /// <summary>
        /// 砖石和rmb比例    10:1
        /// 商品价值,砖石值
        /// </summary>
        public float commodityvValue;
        /// <summary>
        /// 商品id
        /// </summary>
        public int commodityId;
        /// <summary>
        /// 名称
        /// </summary>
        public string name;
        /// <summary>
        /// 商品介绍
        /// </summary>
        public string introduce;
        /// <summary>
        /// 兑换值 不显示
        /// </summary>
        public float exchangeValue;
        /// <summary>
        /// 图片地址
        /// </summary>
        public string url;
        /// <summary>
        /// 商品类型 2金币   1砖石   3购买会员卡
        /// </summary>
        public int commodityType;


        /// <summary>
        /// 优惠描述   如  送4千
        /// </summary>
        public string Discoun;



    }
    /// <summary>
    /// 兑换信息
    /// </summary>
    [Serializable]
    public class cs_exchangeMessage : cs_base
    {
        /// <summary>
        /// 商品礼物id
        /// </summary>
        public int commodityId;
    }

    /// <summary>
    /// 兑换信息
    /// </summary>
    [Serializable]
    public class sc_exchangeMessage : sc_base
    {

    };

    /// <summary>
    /// 兑换钻石
    /// </summary>
    [Serializable]
    public class cs_exchangeDiamond : cs_base
    {
        /// <summary>
        /// 钻石数量
        /// </summary>
        public int exchangeCount;
    }

    /// <summary>
    /// 兑换钻石
    /// </summary>
    [Serializable]
    public class sc_exchangeDiamond : sc_base
    {
        /// <summary>
        /// 当前金币数量
        /// </summary>
        public int curGold;

        /// <summary>
        /// 当前钻石数量
        /// </summary>
        public int curDiamond;
    };

    [Serializable]
    public class sc_updateuserInfo_n : sc_base
    {


    }
    [Serializable]
    public class cs_myExchange : cs_base
    {
        /// <summary>
        /// 0实物、1钻石、2金币
        /// </summary>
        public int comtype;
    }
}
