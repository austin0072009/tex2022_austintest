using System.Collections.Generic;

using ETModel.Framework.Game.Contract.Action;

namespace ETModel.Script.CsScript.Action
{
    /// <summary>
    ///  
    /// </summary>
    public class cs_create_alli : cs_base
    {
        /// <summary>
        /// 名称
        /// </summary>
        public string name;
        /// <summary>
        /// 1 普通  2 超级
        /// </summary>
        public int type;

        /// <summary>
        /// clubid
        /// </summary>
        public int cid;

        /// <summary>
        /// 社区数量限制
        /// </summary>
        public int limitcount;


        /// <summary>
        /// 反利比例
        /// </summary>
        public long cgoldRate;

        /// <summary>
        /// 基金比例
        /// </summary>
        public long insRate;




    }
    public class sc_create_alli : sc_base_gm
    {
        /// <summary>
        /// 联盟名称
        /// </summary>
        public string alliName;

        /// <summary>
        /// 联盟id
        /// </summary>
        public int aId;
    }
    /// <summary>
    /// 得到我的club
    /// </summary>
    public class cs_getalli_alli : cs_base
    {

        /// <summary>
        /// 联盟id
        /// </summary>
        public int aid;
    }

    public class sc_getalli_alli : sc_base
    {
        /// <summary>
        /// 联盟对应得全部clubid
        /// </summary>
        public int cid;

        /// <summary>
        /// 联盟名称
        /// </summary>
        public string aliiname;
        /// <summary>
        /// 联盟id
        /// </summary>
        public long aid;

        /// <summary>
        /// 联盟创建者名称
        /// </summary>
        public string cname;

        /// <summary>
        /// 联盟成员数量
        /// </summary>
        public int a_count;

        /// <summary>
        /// 联盟最大成员数
        /// </summary>
        public int a_maxcount;



        /// <summary>
        /// 当前联盟的 申请状态
        /// </summary>
        public bool status;


        /// <summary>
        /// 联盟成员
        /// </summary>
        public List<allichild> child;

        /// <summary>
        /// 联盟配置数据
        /// </summary>
        public List<levelconfig> data;
        /// <summary>
        /// 等级
        /// </summary>
        public int lv;

        /// <summary>
        /// 是否超级联盟
        /// </summary>
        public bool IsSupper;

        /// <summary>
        /// 联盟的联盟币
        /// </summary>
        public long alli_gold;

    }

    public class allichild
    {
        /// <summary>
        ///对应玩家创建得 clubid
        /// </summary>
        public int cid;

        /// <summary>
        /// 玩家名
        /// </summary>
        public string name;
        /// <summary>
        /// 玩家id
        /// </summary>

        public int uid;

        /// <summary>
        /// club名
        /// </summary>
        public string cname;

        /// <summary>
        /// club成员数量
        /// </summary>
        public int ccount;

        /// <summary>
        /// club最大成员数
        /// </summary>
        public int maxcount;

        /// <summary>
        /// 联盟币余额
        /// </summary>
        public long child_gold;

        /// <summary>
        /// 会员余额
        /// </summary>
        public long gold;

        /// <summary>
        /// club头像地址  为空是默认头像
        /// </summary>
        public string cluburl;
    }


    public class cs_allilevel_alli : cs_base
    {
        /// <summary>
        /// 需要的升的等级
        /// </summary>
        public int lv;

        /// <summary>
        /// 联盟id
        /// </summary>
        public int alliId;
    }

    /// <summary>
    /// 
    /// </summary>
    public class sc_allilevel_alli : sc_base
    {

    }
    /// <summary>
    /// 开启关闭联盟申请
    /// </summary>
    public class cs_closeapply_alli : cs_base
    {
        /// <summary>
        /// 开关状态
        /// </summary>
        public bool status;

        /// <summary>
        /// 联盟id
        /// </summary>
        public int alliId;
    }

    public class sc_closeapply_alli : sc_base
    {

    }

    /// <summary>
    /// 补充联盟币协议
    /// </summary>
    public class cs_plusalligold_alli : cs_base
    {
        /// <summary>
        /// 联盟id
        /// </summary>
        public int alliId;

        /// <summary>
        ///补充数量
        /// </summary>
        public int num;

    }
    public class sc_plusalligold_alli : sc_base
    {

    }
    /// <summary>
    /// 修改club币
    /// </summary>
    public class cs_modifyclubgolg_club : cs_base
    {
        /// <summary>
        /// 1表示发放  2表示退回
        /// </summary>
        public int type;

        /// <summary>
        /// 发放的 联盟id
        /// </summary>
        public int alliIid;

        /// <summary>
        /// 修改的clubid
        /// </summary>
        public int clubId;

        /// <summary>
        /// 发放回收金额
        /// </summary>
        public long gold;
    }
    public class sc_modifyclubgolg_club : sc_base
    {

    }

    /// <summary>
    /// club币协议
    /// </summary>
    public class cs_clubgoldchild_club : cs_base
    {

        /// <summary>
        /// clubid
        /// </summary>
        public int clubId;
    }

    public class clubchild
    {
        /// <summary>
        /// 成员名称
        /// </summary>
        public string cname;

        /// <summary>
        /// 成员id
        /// </summary>
        public int cuserid;

        /// <summary>
        /// 成员club币
        /// </summary>
        public long cgold;


        /// <summary>
        /// 角色   0 普通成员 1管理员，2创建者
        /// </summary>
        public int role;
    }

    public class sc_clubgoldchild_club : sc_base
    {
        /// <summary>
        /// club币
        /// </summary>
        public long club_gold;

        /// <summary>
        /// 成员club币总额
        /// </summary>
        public long child_gold;

        /// <summary>
        /// 成员
        /// </summary>
        public List<clubchild> child;

    }
    /// <summary>
    /// club发放回收协议
    /// </summary>
    public class cs_giveclubgold_club : cs_base
    {
        /// <summary>
        /// clubid
        /// </summary>
        public int clubid;

        /// <summary>
        /// 发放回收的成员 的 ID
        /// </summary>
        public int userId;
        /// <summary>
        /// 1发放   2回收
        /// </summary>
        public int type;

        /// <summary>
        /// 发放 回收的金额
        /// </summary>
        public long gold;
    }

    public class sc_giveclubgold_club : sc_base
    {
        // -1club不存在   -2非club成员  -3club余额不足 不足发放  -4成员余额不足 不足回收
    }




    /// <summary>
    /// 解散  踢出玩家
    /// </summary>
    public class cs_dismissalliance_alli : cs_base
    {
        /// <summary>
        /// clubid
        /// </summary>
        public int clubid;
        /// <summary>
        /// 联盟id
        /// </summary>
        public int cid;

        /// <summary>
        /// 需要踢出玩家id
        /// 传递创建者id  默认解散联盟
        /// </summary>
        public int uid;
    }

    public class sc_dismissalliance_alli : sc_base
    {

    }
    /// <summary>
    /// 获取club等级配置
    /// </summary>
    public class cs_clublvconfig_alli : cs_base
    {
        /// <summary>
        /// clubid
        /// </summary>
        public int id;

    }

    public class sc_clublvconfig_alli : sc_base
    {
        public List<levelconfig> data;
        /// <summary>
        /// 等级
        /// </summary>
        public int lv;

        /// <summary>
        /// 到期时间
        /// </summary>
        public string expiretime;
    }


    public class levelconfig
    {
        /// <summary>
        /// 等级
        /// </summary>
        public int level;

        /// <summary>
        /// 升级需要砖石
        /// </summary>
        public long diamond;

        /// <summary>
        /// 最大成员
        /// </summary>
        public int maxmenber;

        /// <summary>
        /// 最大管理员
        /// </summary>
        public int maxmange;

    }




    /// <summary>
    ///  搜索联盟
    /// </summary>
    public class cs_search_alli : cs_base
    {
        /// <summary>
        /// 联盟id
        /// </summary>
        public long idx;
    }

    public class sc_search_alli : sc_base
    {
        //-1联盟不存在

        /// <summary>
        /// 联盟名称
        /// </summary> 
        public string alliname;

        /// <summary>
        /// 联盟id
        /// </summary>
        public long idx;
    }

    /// <summary>
    /// 申请加入指定 
    /// </summary>
    public class cs_apply_alli : cs_base
    {
        /// <summary>
        /// 填写的联盟id
        /// </summary>
        public int idx;

        /// <summary>
        ///申请人的 clubid
        /// </summary>
        public int clubid;
    }

    public class sc_apply_alli : sc_base
    {

    }
    /// <summary>
    /// 同意用户加入本 
    /// </summary>
    public class cs_agree_alli : cs_base
    {
        /// <summary>
        /// 同意联盟申请的时候  给申请人所在的club
        /// </summary>
        public int ownclubid;

        /// <summary>
        /// clubid
        /// </summary>
        public int idx;
        /// <summary>
        /// 联盟id
        /// </summary>
        public int aId;
        /// <summary>
        /// 1 表示同意 -1表示不同意
        /// </summary>
        public int agree;

    }

    public class sc_agree_alli : sc_base
    {

    }

    /// <summary>
    ///设置 属性
    /// </summary>
    public class cs_setting_alli : cs_base
    {
        public int idx;
        public bool manager;
        /// <summary>
        /// 总金币
        /// </summary>
        public int allgold;
    }

    public class sc_setting_alli : sc_base
    {

    }


    /// <summary>
    /// 升级   
    /// </summary>
    public class cs_levelup_alli : cs_base
    {
        public int idx;
        public int lv;
    }

    public class sc_levelup_alli : sc_base
    {

    }
    /// <summary>
    ///解散   
    /// </summary>
    public class cs_dismiss_alli : cs_base
    {
        public int idx;
    }

    public class sc_dismiss_alli : sc_base
    {

    }


    public class AllianceClubSD
    {
        public int clubidx;
        public string clubname;
        public long gold;
    }

    public class AllianceApplySD
    {
        public int userid;
        public string name;

    }
    /// <summary>
    /// club基金购买
    /// </summary>
    public class cs_clubfund_club : cs_base
    {
        /// <summary>
        /// 购买份数
        /// </summary>
        public int num;

        /// <summary>
        /// clubid
        /// </summary>
        public int clubId;
    }

    public class sc_clubfund_club : sc_base
    {
        //-1club不存在   -2砖石余额不足
    }

    /// <summary>
    /// club发放基金
    /// </summary>
    public class cs_clubfundgrant_club : cs_base
    {
        /// <summary>
        /// 发放玩家id
        /// </summary>
        public int userId;

        /// <summary>
        /// clubid
        /// </summary>
        public int clubId;

        /// <summary>
        /// 发放金额
        /// </summary>
        public long gnum;
    }

    public class sc_clubfundgrant_club : sc_base
    {
        //-1club不存在    -2基金不足
    }

    /// <summary>
    /// club币明细
    /// </summary>
    public class cs_clubgolddetail_club : cs_base
    {
        /// <summary>
        /// 0club币日志   2玩家club币日志
        /// </summary>
        public int logtype;
        /// <summary>
        /// 
        /// </summary>
        public int clunId;
    }

    public class sc_clubgolddetail_club : sc_base
    {
        public List<GoldDetail> data;

        /// <summary>
        /// 0club币日志   2玩家club币日志
        /// </summary>
        public int logtype;
    }

    public class GoldDetail
    {
        /// <summary>
        /// 玩家名称
        /// </summary>
        public string name;

        /// <summary>
        /// 玩家id
        /// </summary>
        public int userId;

        /// <summary>
        /// 操作之前的余额
        /// </summary>
        public long c_balance;

        /// <summary>
        /// 余额
        /// </summary>
        public long balance;

        /// <summary>
        /// 变动金额
        /// </summary>
        public long cgold;

        /// <summary>
        /// 日期
        /// </summary>
        public string date;

        /// <summary>
        /// 时间点
        /// </summary>
        public string time;


        /// <summary>
        ///  1发放   2回收  
        /// </summary>
        public int type;

        /// <summary>
        /// 
        ///  1申请发放   2申请回收  3退出自动回收    4管理员修改
        /// </summary>
        public int type2;

        /// <summary>
        /// 操作名称
        /// </summary>
        public string actionName;

    }

    /// <summary>
    /// 基金日志
    /// </summary>
    public class cs_fundlog_club : cs_base
    {
        public int clubId;
    }

    public class sc_fundlog_club : sc_base
    {
        public List<fundlog> data;

    }
    /// <summary>
    /// 社区基金转入转出
    /// </summary>
    public class cs_fundchange_club : cs_base
    {
        /// <summary>
        /// 1转入   2转出
        /// </summary>
        public int type;

        /// <summary>
        /// 社区id
        /// </summary>
        public int clubid;

        /// <summary>
        /// 转入转出的金额
        /// </summary>
        public long gold;

    }

    public class sc_fundchange_club : sc_base
    {
        //-1基金不足  -2余额不足   -3社区不存在
    }




    public class fundlog
    {
        /// <summary>
        /// 发放人
        /// </summary>
        public string name;

        /// <summary>
        /// 时间
        /// </summary>
        public string logtime;

        /// <summary>
        /// 金额
        /// </summary>
        public long gold;

        /// <summary>
        /// 1购买   2发放  
        /// </summary>
        public int type;
    }

    /// <summary>
    /// 刷新玩家余额
    /// </summary>
    public class cs_refreshbalance_club : cs_base
    {
        /// <summary>
        /// clubid
        /// </summary>
        public int clubid;
    }

    public class sc_refreshbalance_club : sc_base
    {
        /// <summary>
        /// club余额
        /// </summary>
        public long gold;

        //-1club不存在
    }

}
