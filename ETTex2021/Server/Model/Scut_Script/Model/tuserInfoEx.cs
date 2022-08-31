using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Event;
using ETModel.Framework.Model;
using GameSystem;
using ProtoBuf;
using System;

namespace ETModel.Script.Model
{
    /// <summary>
    /// 保存一些tuser 扩展信息   分担tuser
    /// </summary>
    [Serializable, ProtoContract, NumberField]
    [EntityTable(CacheType.Dictionary, strFixed.strConnectstring, "tuserInfoEx", IsExpired = false)]
    public class tuserInfoEx : BaseEntity
    {
        public tuserInfoEx()
        {
            cTable = 1;
            cClub = 1;
            vipLv = 0;
            clubProtect = 0;
            bNewPlayer = true;
            applyUsers = new CacheList<UserTableApply>();
            Userremark = new CacheList<UserRemark>();
            BackPack = new CacheList<UserBackPack>();
            HeadIcos = new CacheList<string>();
            CreateTime = DateTime.Now;
            ReportInfo = new ReportInfo { num = 0, rtime = DateTime.MinValue };
            freeCount = 1;
            SigninData = new SigninInfo { Cashout = 0,TotalRecharge=0,etime = DateTime.MinValue };    
        }
        /// <summary>
        /// <summary>
        /// 
        /// </summary> 
        [ProtoMember(1)]
        [EntityField(true)]
        public int UserID { get; set; }

        /// <summary>
        /// 保护密码
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public string clubpwd { get; set; }

        /// <summary>
        /// 是否处于保护状态 1是   0否
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public int clubProtect { get; set; }

        [ProtoMember(4)]
        [EntityField(true, ColumnDbType.LongText)]
        public CacheList<UserRemark> Userremark { get; set; }

        /// <summary>
        /// 
        /// </summary>
        [ProtoMember(5)]
        [EntityField(true, ColumnDbType.LongText)]
        public CacheList<UserTableApply> applyUsers { get; set; }


        [ProtoMember(6)]
        [EntityField]
        public DateTime CreateTime { get; set; }

        /// <summary>
        /// 昵称免费修改次数
        /// </summary>
        [ProtoMember(7)]
        [EntityField]
        public int freeCount { get; set; }

        /// <summary>
        /// 用户手机号
        /// </summary>
        [ProtoMember(8)]
        [EntityField]
        public string MobilePhoneNum { get; set; }
        /// <summary>
        /// 支付宝姓名
        /// </summary>
        [ProtoMember(9)]
        [EntityField]
        public string alipayName { get; set; }
        /// <summary>
        /// 支付宝号码
        /// </summary>
        [ProtoMember(10)]
        [EntityField]
        public string alipayNum { get; set; }

        /// <summary>
        /// 银行卡人名称
        /// </summary>
        [ProtoMember(11)]
        [EntityField]
        public string BankUn { get; set; }
        /// <summary>
        /// 银行卡号
        /// </summary>
        [ProtoMember(12)]
        [EntityField]
        public string BankNum { get; set; }
        /// <summary>
        /// 银行名称
        /// </summary>
        [ProtoMember(13)]
        [EntityField]
        public string BankName { get; set; }


        /// <summary>
        /// 银行卡 的时候 手机号
        /// </summary>
        [ProtoMember(14)]
        [EntityField]
        public string bPhone { get; set; }

        /// <summary>
        /// 绑支付宝  手机号
        /// </summary>
        [ProtoMember(15)]
        [EntityField]
        public string aPhone { get; set; }

        /// <summary>
        /// 省
        /// </summary>
        [ProtoMember(16)]
        [EntityField]
        public string BankProvince { get; set; }
        /// <summary>
        /// 
        /// </summary>
        [ProtoMember(17)]
        [EntityField]
        public string BankCity { get; set; }
        /// <summary>
        /// 银行支行
        /// </summary>
        [ProtoMember(18)]
        [EntityField]
        public string BankBranch { get; set; }


        #region vip字段
        /// <summary>
        /// vipLv玩家的过期时间
        /// </summary>
        [ProtoMember(19)]
        [EntityField]
        public DateTime expiredate { get; set; }

        /// <summary>
        /// 0普通玩家   1金卡玩家（月卡）   2白金卡玩家（年卡）
        /// </summary>
        [ProtoMember(20)]
        [EntityField]
        public int vipLv { get; set; }

        /// <summary>
        /// 可建房间数量
        /// </summary>
        [ProtoMember(21)]
        [EntityField]
        public int cTable { get; set; }

        /// <summary>
        /// 可建数量
        /// </summary>
        [ProtoMember(22)]
        [EntityField]
        public int cClub { get; set; }

        /// <summary>
        /// vip开通时间
        /// </summary>
        [ProtoMember(23)]
        [EntityField]
        public DateTime VipTime { get; set; }
        #endregion

        /// <summary>
        ///  背包
        /// </summary>
        [ProtoMember(24)]
        [EntityField(true, ColumnDbType.LongText)]
        public CacheList<UserBackPack> BackPack { get; set; }

        /// <summary>
        ///  解锁头像列表
        /// </summary>
        [ProtoMember(25)]
        [EntityField(true, ColumnDbType.LongText)]
        public CacheList<string> HeadIcos { get; set; }
        /// <summary>
        /// 头像框
        /// </summary>
        [ProtoMember(26)]
        [EntityField]
        public string HeadFrame { get; set; }

        /// <summary>
        /// 举报信息 过0点刷新
        /// </summary>
        [ProtoMember(27)]
        [EntityField(true, ColumnDbType.Varchar, ColumnLength = 255)]
        public ReportInfo ReportInfo { get; set; }

        /// <summary>
        /// VIP当前经验值
        /// </summary>
        [ProtoMember(28)]
        [EntityField]
        public int vipExp { get; set; }

        /// <summary>
        /// VIP积分
        /// </summary>
        [ProtoMember(29)]
        [EntityField]
        public int vipScore { get; set; }

        /// <summary>
        /// 已领取的等级
        /// </summary>
        [ProtoMember(30)]
        [EntityField]
        public int AwardStatus { get; set; }

        /// <summary>
        /// 领取奖励时间
        /// </summary>
        [ProtoMember(31)]
        [EntityField]
        public DateTime ReceiveMonthAwardTime { get; set; }

        /// <summary>
        /// 进入游戏时间
        /// </summary>
        [ProtoMember(32)]
        [EntityField]
        public DateTime EnterGameTime { get; set; }

        /// <summary>
        /// 练习次数
        /// </summary>
        [ProtoMember(33)]
        [EntityField]
        public int PracticeTimes { get; set; }

        /// <summary>
        /// 签到数据统计
        /// </summary>
        [ProtoMember(34)]
        [EntityField(true, ColumnDbType.Varchar, ColumnLength = 255)]
        public SigninInfo SigninData { get; set; }

        /// <summary>
        /// 新手玩家
        /// </summary>
        [ProtoMember(35)]
        [EntityField]
        public bool bNewPlayer { get; set; } 
        /// <summary>
        /// winning  gold for withdraw
        /// </summary>
        [ProtoMember(36)]
        [EntityField]
        [NumberField]
        public long WinGold { get; set; }
        protected override int GetIdentityId()
        {
            return UserID;
        }
    }


    [Serializable, ProtoContract]
    public class ReportInfo : EntityChangeEvent
    {
        /// <summary>
        /// 举报次数
        /// </summary>
        [ProtoMember(1)]
        public int num { get; set; }
        /// <summary>
        /// 最后举报时间 
        /// </summary>
        [ProtoMember(2)]
        public DateTime rtime { get; set; }

    }

    [Serializable, ProtoContract]
    public class SigninInfo : EntityChangeEvent
    {
        /// <summary>
        /// 充值
        /// </summary>
        [ProtoMember(1)]
        public long TotalRecharge { get; set; }
        /// <summary>
        /// 体现 
        /// </summary>
        [ProtoMember(2)]
        public long Cashout { get; set; }

        /// <summary>
        /// 最后记录时间
        /// </summary>
        [ProtoMember(3)]
        public DateTime etime { get; set; }
    }


    /// <summary>
    /// 牌局请求
    /// </summary>
    [Serializable, ProtoContract]
    public class UserTableApply
    {
        [ProtoMember(1)]
        public int UserId { get; set; }
        /// <summary>
        /// table id
        /// </summary>
        [ProtoMember(2)]
        public int tableid { get; set; }
        [ProtoMember(3)]
        public int roomid { get; set; }

        /// <summary>
        /// 带入时间
        /// </summary>
        [ProtoMember(4)]
        public DateTime intotime { get; set; }

        /// <summary>
        /// into gold
        /// </summary>
        [ProtoMember(5)]
        public long cgold { get; set; }
        [ProtoMember(6)]
        public int clubid { get; set; }

        /// <summary>
        /// 0普通申请   1补充计分
        /// </summary>
        [ProtoMember(7)]
        public int atype { get; set; }

    }

    /// <summary>
    /// 玩家背包
    /// </summary>
    [Serializable, ProtoContract]
    public class UserBackPack
    {
        [ProtoMember(1)]
        public int PropID { get; set; }

        [ProtoMember(2)]
        public int PropCount { get; set; }

        [ProtoMember(3)]
        public DateTime RemoveTime { get; set; }
    }

    /// <summary>
    /// 玩家备注
    /// </summary>
    [Serializable, ProtoContract]
    public class UserRemark : EntityChangeEvent
    {
        /// <summary>
        /// 玩家id
        /// </summary>
        [ProtoMember(1)]
        public int userid { get; set; }
        /// <summary>
        /// 玩法备注 
        /// </summary>
        [ProtoMember(2)]
        public string playRemark { get; set; }
        /// <summary>
        /// 备注姓名
        /// </summary>
        [ProtoMember(3)]
        public string remarkName { get; set; }

    }
}
