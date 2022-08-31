using System;
using System.Collections.Generic;
using ETModel.Framework.Game.Contract.Action;
using ETModel.Script.Model;

namespace ETModel.Script.CsScript.Action
{
    /// <summary>
    /// 获取背包道具列表
    /// </summary>
    public class cs_getbackpacklist:cs_base
    {
    }
    public class sc_getbackpacklist:sc_base
    {
        public List<PropInfo> props;
    }

    public class PropInfo
    {
        public int PropID;
        public string PropName;
        /// <summary>
        /// 0:金币  1:头像 
        /// </summary>
        public int PropType;
        /// <summary>
        /// 0:兑换  1:使用 
        /// </summary>
        public int UseType;
        public string Desc;
        public int PropCount;
        public string ImgUrl;
    }
    /// <summary>
    /// 使用兑换道具
    /// </summary>
    public class cs_useprop : cs_base
    {
        public int PropID;
        public int PropCount;
    }
    public class sc_useprop : sc_base
    {
        public int PropID;
        public int PropCount;
        public int PropGold;
        public long UserGold;
        public string data;
    }
    /// <summary>
    /// 增加道具
    /// </summary>
    public class cs_adduserprop_gm : cs_base_gm
    {
        public int[] userids;
        public int PropID;
        public int PropCount;
    }
    public class sc_adduserprop_gm : sc_base_gm
    {
        public int PropID;
        public int PropCount;
    }

    /// <summary>
    /// 删除道具
    /// </summary>
    public class cs_removeuserprop_gm : cs_base_gm
    {
        public int userid;
        public int PropID;
        public int PropCount;
    }
    public class sc_removeuserprop_gm : sc_base_gm
    {
        public int PropID;
        public int PropCount;
    }
    /// <summary>
    /// 道具配置表增加道具
    /// </summary>
    public class cs_addpropconfig_gm : cs_base_gm
    {
        public tPropConfig config;
    }
    public class sc_addpropconfig_gm : sc_base_gm
    {
    }

    /// <summary>
    /// 道具配置表删除道具
    /// </summary>
    public class cs_removepropconfig_gm : sc_base_gm
    {
        public tPropConfig config;
    }


}
