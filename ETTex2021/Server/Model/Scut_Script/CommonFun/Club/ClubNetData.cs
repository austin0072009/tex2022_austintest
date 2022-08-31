using System.Collections.Generic;

using ETModel.Framework.Game.Contract.Action;
namespace ETModel.Script.CsScript.Action
{
    #region 
    public class clubinfosd
    {
        public int cidx;
        public long cgold;
        /// <summary>
        /// club名称
        /// </summary>
        public string cn;

        /// <summary>
        /// 图标
        /// </summary>
        public string url;
        //角色 有特殊的权限
        public int role;
    }

    /// <summary>
    ///  
    /// </summary>
    public class cs_enter_club : cs_base
    {
        public int curcid;
    }
    public class sc_enter_club : sc_base
    {
        public List<clubinfosd> clist;

        public List<ctableinfo> tlist;

        public List<floorInfoSD> flist;

        //默认cid
        public int curcid;

        //大于1表示有管理权限
        public int right;


        /// <summary>
        /// 自己在此club的邀请码
        /// </summary>
        public string code;
    }

    public class ctableinfo
    {

        public int gid;
        public string data;
    }

    public class cs_gettablelist_club : cs_base
    {
        public int cidx;
    }
    public class sc_gettablelist_club : sc_base
    {
        public List<ctableinfo> tlist;
        public List<floorInfoSD> flist;
    } 

    /// <summary>
    ///  
    /// </summary>
    public class cs_create_club : cs_base
    {
        public string iconurl;
        /// <summary>
        /// 
        /// </summary>
        public int userid;
        /// <summary>
        /// 名称
        /// </summary>
        public string name;
        /// <summary>
        /// 地区
        /// </summary>
        public string content;
        /// <summary>
        /// 联盟id
        /// </summary>
        public int allid;


        /// <summary>
        /// 返利佣金比例 
        /// </summary>
        public int cgoldRate;

        /// <summary>
        /// 基金比例
        /// </summary>
        public long insRate;


    }
    public class sc_create_club : sc_base_gm
    {
        /// <summary>
        /// 社区id
        /// </summary>
        public int cid;

        /// <summary>
        /// 社区名
        /// </summary>
        public string cname;
    }

    /// <summary>
    /// 修改社区联盟 单字段协议
    /// </summary>
    public class cs_setclubinfo_gm : cs_base_gm
    {

        /// <summary>
        /// 联盟或者社区id
        /// </summary>
        public int id;

        /// <summary>
        /// 1表示联盟   2社区
        /// </summary>
        public int idType;

        /// <summary>
        /// 1社区数量  2保险占成比例   3保险基金 4反利比例设置  5奖励说明   6设置bankinfo
        /// </summary>
        public int type;

        /// <summary>
        /// 对应type  三个值
        /// </summary>
        public int value;

        /// <summary>
        /// 对应type 的字符串 值
        /// </summary>
        public string svalue;

    }

    public class sc_setclubinfo_gm : sc_base_gm
    {

    }


    /// <summary>
    /// 暂时不用 后台一级代理授权
    /// </summary>
    public class cs_onesetagent_gm : cs_base_gm
    {
        /// <summary>
        /// 
        /// </summary>
        public int userId;

        /// <summary>
        /// 系统给的最大分配比例
        /// </summary>
        public int showrate;

        /// <summary>
        /// clubid
        /// </summary>
        public int clubid;
    }
    /// <summary>
    /// 后台一级代理授权
    /// </summary>
    public class sc_onesetagent_gm : sc_base_gm
    {


    }

    /// <summary>
    /// GM后台联盟,社区 基金转入转出
    /// </summary>
    public class cs_fundchange_gm : cs_base_gm
    {

        /// <summary>
        /// 联盟或者社区id
        /// </summary>
        public int id;

        /// <summary>
        /// 1表示联盟   2社区
        /// </summary>
        public int idType;
        /// <summary>
        /// 1 转入  2转出
        /// </summary>
        public int type;

        /// <summary>
        /// 转入或者转出基金金额
        /// </summary>
        public long gold;
    }

    /// <summary>
    /// 
    /// </summary>
    public class sc_fundchange_gm : sc_base_gm
    {

    }

    /// <summary>
    /// 联盟社区赠送相关
    /// </summary>
    public class cs_clubgive_gm : cs_base_gm
    {
        /// <summary>
        /// 1联盟送联盟   2联盟送个人    3联盟送社区
        /// 4社区送社区    5 社区送个人   6社区送给联盟
        /// 
        /// 
        /// </summary>
        public int type;

        /// <summary>
        /// 赠送id
        /// 456类型的时候  此id传社区创建人的id
        /// </summary>
        public int gid;

        /// <summary>
        /// 被赠送id
        /// </summary>
        public int cid;

        /// <summary>
        /// 金额  乘以100给过来
        /// </summary>
        public int gold;

    }
    public class sc_clubgive_gm : sc_base_gm
    {
        //返回info  错误 显示出来哈
    }






    /// <summary>
    ///  
    /// </summary>
    public class cs_getinfoex_club : cs_base
    {
        public int idx;
    }

    public class sc_getinfoex_club : sc_base
    {
        public long idx;

        /// <summary>
        /// 成员
        /// </summary> 
        public List<UserClubSD> childs;
        /// <summary>
        ///  
        /// </summary> 
        public int limitcount;
        /// <summary>
        ///  在线人书
        /// </summary> 
        public int onlinecount;
        /// <summary>
        /// 是否打开管理员创建牌局
        /// </summary>
        public bool manager;
        /// <summary>
        /// 金币 联盟分配的总额度
        /// </summary> 
        public long gold;
        /// <summary>
        /// 钻石
        /// </summary> 
        public long diam;
        /// <summary>
        /// 联盟名
        /// </summary>
        public string alliname;
        public int alliid;

        /// <summary>
        /// 最大管理员数量
        /// </summary>
        public int maxmanger;

        /// <summary>
        /// club的等级
        /// </summary>
        public int lv;

        /// <summary>
        /// club等级配置
        /// </summary>
        public List<levelconfig> leveldata;

        /// <summary>
        /// 当前club活跃度
        /// </summary>
        public int brisk;

        /// <summary>
        /// 公告
        /// </summary>
        public string notice;

        /// <summary>
        /// 基金份数
        /// </summary>
        public long fundnum;


        /// <summary>
        /// club头像
        /// </summary>
        public string cluburl;

        /// <summary>
        /// 修改名称次数
        /// </summary>
        public int freecount;
    }

    public class cs_flooredit_club : cs_base
    {
        public int cidx;
        public int fid;
        public string name;
        /// <summary>
        /// 自动续房
        /// </summary>
        public bool autoopen;
        public int gameid;
        public string data;
    }
    public class sc_flooredit_club : sc_base
    {
        public List<floorInfoSD> flist;
    }
    public class floorInfoSD
    {
        public int cidx;
        public int fid;
        public string name;
        /// <summary>
        /// 自动续房
        /// </summary>
        public bool autoopen;
        public int gameid;
        public string data;
    }


    /// <summary>
    /// 申请加入指定
    /// </summary>
    public class cs_apply_club : cs_base
    {
        public int idx;
        public string message;

        /// <summary>
        /// 1社区流程   0表示club流程
        /// </summary>
        public int type;

    }

    public class sc_apply_club : sc_base
    {

    }
    /// <summary>
    /// 获取申请列表
    /// </summary>
    public class cs_applylist_club : cs_base
    {
        public int idx;
    }

    public class sc_applylist_club : sc_base
    {
        public List<ClubApplySD> alist;
        /// <summary>
        /// clubid
        /// </summary>
        public long idx;

        /// <summary>
        /// 联盟id
        /// </summary>
        public long aId;
    }


    /// <summary>
    /// 同意用户加入本
    /// </summary>
    public class cs_agree_club : cs_base
    {
        /// <summary>
        /// 一个人有多个
        /// </summary>
        public int idx;
        public int tuserid;
        /// <summary>
        /// 1 表示同意 -1表示不同意
        /// </summary>
        public int agree;
    }

    public class sc_agree_club : sc_base
    {

    }

    /// <summary>
    ///设置属性  添加成员 移出成员 设置管理员未处理
    /// </summary>
    public class cs_setting_club : cs_base
    {
        public int idx;
        /// <summary>
        /// 审核1 成员管理10 成员权限100 
        /// </summary>
        public int member;
        /// <summary>
        /// 房间管理 包厢1 房间10
        /// </summary>
        public int floor;
        /// <summary>
        /// 战绩1  club10  club日志100 值班人1000 
        /// </summary>
        public int data;
        /// <summary>
        /// 公告
        /// </summary>
        public string notice;
    }

    public class sc_setting_club : sc_base
    {

    }

    /// <summary>
    ///删除玩家
    /// </summary>
    public class cs_deleteuser_club : cs_base
    {
        public int idx;

        public int uid;
    }
    /// <summary>
    /// 
    /// </summary>
    public class sc_deleteuser_club : sc_base
    {

    }
    #endregion

    //===================
    /// <summary>
    /// 获取自己的列表
    /// </summary>
    public class cs_getlist_club : cs_base
    {
    }

    public class sc_getlist_club : sc_base
    {
        /// <summary>
        /// 允许创建的数量 
        /// </summary>
        public int maxc;
        public List<clubsd> clist;

    }


    /// <summary>
    /// 获取自己的列表
    /// </summary>
    public class cs_search_club : cs_base
    {
        public string name;

    }

    public class sc_search_club : sc_base
    {
        public List<clubsd> clist;
    }


    public class clubsd
    {
        /// <summary>
        /// 流水号
        /// </summary> 
        public long idx;

        /// <summary>
        /// 创建者
        /// </summary> 
        public int UserId;

        /// <summary>
        /// 创建者名称
        /// </summary>
        public string uName;

        /// <summary>
        /// 创始人头像
        /// </summary>
        public string headurl;

        /// <summary>
        /// 状态， 封停
        /// </summary> 
        public int State;

        /// <summary>
        /// 创建时间
        /// </summary>  
        public string CreateDate;


        /// <summary>
        /// 标题
        /// </summary> 
        public string Title;
        /// <summary>
        ///  
        /// </summary> 
        public int limitcount;
        /// <summary>
        /// 金币
        /// </summary> 
        public long gold;
        /// <summary>
        /// 钻石
        /// </summary> 
        public long diam;
        /// <summary>
        /// 位置
        /// </summary>
        public string Loc;
        /// <summary>
        /// 等级
        /// </summary>
        public int lv;
        /// <summary>
        /// 桌子数
        /// </summary>
        public int tableC;

        /// <summary>
        /// 说明
        /// </summary>
        public string clubDesc;

        /// <summary>
        /// 团队数量 
        /// </summary>
        public int ccount;

        /// <summary>
        ///自己在这个club的职位 角色  
        ///0 普通成员 1管理员，2创建者
        /// </summary>
        public int role;

        /// <summary>
        /// 是否只允许管理员创建房间
        /// </summary>
        public bool mct;

        /// <summary>
        /// 显示自己的club币
        /// </summary>
        public long cgold;

        /// <summary>
        /// 是否加入超级联盟 
        /// </summary>
        public bool joinSpC;

        /// <summary>
        /// club头像
        /// </summary>
        public string cluburl;

        /// <summary>
        /// 是否已经加入
        /// </summary>
        public bool isjoin;

    }



    public class ClubApplySD
    {
        /// <summary>
        /// 申请类型 1:进club   3:申请进联盟
        /// </summary>
        public int stype;

        /// <summary>
        /// 联盟名称 stype=3
        /// </summary>
        public string aName;

        /// <summary>
        /// 申请人所在的club
        /// </summary>
        public int clubid;


        /// <summary>
        /// club名称
        /// </summary>
        public string cName;

        public int userid;
        public string name;
        public string message;
        /// <summary>
        /// 0 未处理 1 同意  -1 拒绝
        /// </summary>
        public int state;
        /// <summary>
        /// 最近登录时间
        /// </summary> 
        public string ltime;
    }


    /// <summary>
    /// 申请加金币
    /// </summary>
    public class cs_applygold_club : cs_base
    {
        /// <summary>
        /// club id
        /// </summary>
        public int idx;
        public long gold;
        /// <summary>
        /// 1表示 发放  2表示 退回
        /// </summary>
        public int type;
    }

    public class sc_applygold_club : sc_base
    {

    }
    /// <summary>
    /// 获取申请加金币列表
    /// </summary>
    public class cs_getapplygold_club : cs_base
    {
    }

    public class sc_getapplygold_club : sc_base
    {
        public List<ClubApplyGoldSD> agoldlist;
    }

    public class ClubApplyGoldSD
    {
        public int userid;
        public string name;
        public int clubid;
        public string cname;
        /// <summary>
        /// 0 未处理 1 同意  -1 拒绝
        /// </summary>
        public int state;
        /// <summary>
        /// 申请 金币
        /// </summary> 
        public long gold;
        /// <summary>
        /// 1表示 发放  2表示 退回
        /// </summary>
        public int type;
    }

    /// <summary>
    /// 同意用户加金币  一个用户申请加一次未处理不能再申请
    /// </summary>
    public class cs_agreegold_club : cs_base
    {
        public int idx;
        public int tuserid;
        /// <summary>
        /// 1 表示同意 -1表示不同意
        /// </summary>
        public int agree;
        public long gold;//加金币
             
    }

    public class sc_agreegold_club : sc_base
    {

    }
    /// <summary>
    /// 直接加减金币
    /// </summary>
    public class cs_addgold_club : cs_base
    {
        public int idx;
        public int tuserid;
        /// <summary>
        /// 1 表+ -1表示-
        /// </summary>
        public int add;
        public long gold; 

    }

    public class sc_addgold_club : sc_base
    { 
        public long gold;
    }

    /// <summary>
    /// 设置保护密码开关
    /// </summary>
    public class cs_protectpwd_club : cs_base
    {
        /// <summary>
        /// 0取消    1设置
        /// </summary>
        public int setType;


        /// <summary>
        /// id
        /// </summary>
        public int cid;
        /// <summary>
        /// 密码
        /// </summary>
        public string pwd;
    }
    public class cs_modifyclubLosemax : cs_base_gm
    {
        public int clubid;


        public long Losemax;
    }
    public class sc_modifyclubLosemax : sc_base_gm
    {

    }



    public class sc_protectpwd_club : sc_base
    {
        public int setType;
    }


    public class cs_protectpwdcheck_club : cs_base
    {
        /// <summary>
        /// 0解锁    1加锁
        /// </summary>
        public int setType;

        /// <summary>
        /// 密码
        /// </summary>
        public string pwd;
    }

    public class sc_protectpwdcheck_club : sc_base
    {
        //-3密码错误
    } 
     

    public class cs_upgradeclub_club : cs_base
    {
        /// <summary>
        /// clubid
        /// </summary>
        public int clubid;

        /// <summary>
        /// 需要的 升级
        /// </summary>
        public int lv;
    }
    public class sc_upgradeclub_club : sc_base
    {

    }


    public class UserClubSD
    {
        public int userid;
        public string name;
        /// <summary>
        /// 本期手数
        /// </summary> 
        public int playcount;

        /// <summary>
        /// 最近登录时间
        /// </summary> 
        public string ltime;
        /// <summary>
        ///  0 普通成员 1管理员，2创建者
        /// </summary>
        public int manager;

        /// <summary>
        /// 成员头像地址
        /// </summary>
        public string headUrl;
        public string relation;
        public string rights;
        public bool online;
        /// <summary>
        /// 1 表冻结 0 不冻结
        /// </summary>
        public int status;
        public long gold;
    }


    /// <summary>
    ///解散属性
    /// </summary>
    public class cs_dismiss_club : cs_base
    {
        public int idx;
    }
    /// <summary>
    /// 得到club详情
    /// </summary>
    public class sc_dismiss_club : sc_base
    {

    }


    /// <summary>
    /// 添加club管理员
    /// </summary>
    public class cs_addmanager_club : cs_base
    {
        /// <summary>
        /// 0表示删除   1添加
        /// </summary>
        public int atype;
        /// <summary>
        /// clubID
        /// </summary>
        public int idx;

        /// <summary>
        /// 添加、删除的玩家id
        /// </summary>
        public int uid;
    }

    public class sc_addmanager_club : sc_base
    {

    }
    /// <summary>
    /// 设置club
    /// </summary>
    public class cs_setclub_club : cs_base
    {
        /// <summary>
        /// 设置类型 1设置是否允许搜索   2设置房主开牌   3设置简介
        /// 4：更改地区   5:更改名称  6.更改头像
        /// </summary>
        public int sType;

        /// <summary>
        /// clubID
        /// </summary>
        public int idx;

        /// <summary>
        /// 是否允许搜索
        /// </summary>
        public bool isSearch;

        /// <summary>
        /// 是否房主开局
        /// </summary>
        public bool isownplay;

        /// <summary>
        /// 简介
        /// </summary>
        public string desc;

        /// <summary>
        /// club名称
        /// </summary>
        public string clubname;

        /// <summary>
        /// 地区
        /// </summary>
        public string loc;

        /// <summary>
        /// club头像
        /// </summary>
        public string cluburl;
    }

    public class sc_setclub_club : sc_base
    {

    }

    /// <summary>
    ///设置club属性
    /// </summary>
    public class cs_setrelation_club : cs_base
    {
        public int idx;
        public int userid;
        public string relation;
    }

    public class sc_setrelation_club : sc_base
    {

    }
    public class cs_setrights_club : cs_base
    {
        public int idx;
        public int userid;
        public string rights;
    }
    public class ChildRight
    {

        public int c1_s1;//审批
        public int c1_s2;
        public int c1_s3;

        public int r2_s1;
        public int r2_s2;//房间管理


        public int c3_d1;//club data
        public int c3_d2;
        public int c3_d3;

        public int c4_c1;//club 
        public int c4_c2;
        public int c4_c3;
        public int c4_c4;
    }

    public class sc_setrights_club : sc_base
    {

    }
    public class cs_searchforadd_club : cs_base
    {
        public int idx;
        public int userid; 
    } 

    public class sc_searchforadd_club : sc_base
    {
        public UserClubSD uc;
    }
    public class cs_foradd_club : cs_base
    {
        public int idx;
        public int userid;
    }

    public class sc_foradd_club : sc_base
    {
         
    }

    public class cs_bangame_club : cs_base
    {
        public int idx;
        public int userid;
        public bool ban;//true 表示禁止，false表示解禁
    }

    public class sc_bangame_club : sc_base
    {

    }

    #region split array
    public class cs_getsplitarray_club : cs_base
    {
        public int idx; 
    }

    public class sc_getsplitarray_club : sc_base
    {
        public List<splitarraysd> slist;
    }
    public class splitarraysd
    {
        public int arrid;
        public string name;
        public List<int> arrlist;
    }
    public class cs_modifysplitarray_club : cs_base
    {
        public int idx;
        public int arr;
        public string name;
        public List<int> arrlist;
        public bool del;//是否直接删除
    }

    public class sc_modifysplitarray_club : sc_base
    {
        public List<splitarraysd> slist;
    }
    #endregion
}
