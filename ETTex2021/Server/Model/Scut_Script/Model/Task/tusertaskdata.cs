using ETModel.Framework.Model;
using ProtoBuf;
using System;

namespace ETModel.Script.Model
{
    [Serializable, ProtoContract]
    [EntityTable(CacheType.Dictionary, strFixed.strConnectstring, "tusertaskdata", IsExpired = false)]
    public class tusertaskdata : BaseEntity
    {
        /// <summary> 用户编号 </summary>
        [ProtoMember(1)]
        [EntityField(true)]
        public int userid { get; set; }
        /// <summary> 充值次数 </summary>
        [ProtoMember(2)]
        [EntityField]
        public int RechargeCount { get; set; }
        /// <summary> 充值金额 </summary>
        [ProtoMember(3)]
        [EntityField]
        public int RechargeAmount { get; set; }
        /// <summary> 分享次数 </summary>
        [ProtoMember(4)]
        [EntityField]
        public int ShareCount { get; set; }
        /// <summary> 头像变更次数 </summary>
        [ProtoMember(5)]
        [EntityField]
        public int ChangeAvatarCount { get; set; }
        /// <summary> 修改昵称变更次数 </summary>
        [ProtoMember(6)]
        [EntityField]
        public int ChangeNameCount { get; set; }
        /// <summary> 使用表情次数 </summary>
        [ProtoMember(7)]
        [EntityField]
        public int UseEmoticonCount { get; set; }
        /// <summary> 更换桌面次数 </summary>
        [ProtoMember(8)]
        [EntityField]
        public int ChangeGameDeskCount { get; set; }
        /// <summary> 更换头像框次数 </summary>
        [ProtoMember(9)]
        [EntityField]
        public int ChangeAvatarFrameCount { get; set; }
        /// <summary> 修改昵称次数 </summary>
        [ProtoMember(10)]
        [EntityField]
        public int ModifyNameCount { get; set; }
        /// <summary> 最后一次签到时间 </summary>
        [ProtoMember(11)]
        [EntityField]
        public DateTime LastSigninTime { get; set; }
        /// <summary> 人物等级 </summary>
        [ProtoMember(12)]
        [EntityField]
        public int UserLev { get; set; }
        /// <summary> VIP等级 </summary>
        [ProtoMember(13)]
        [EntityField]
        public int UserVipLev { get; set; }
        /// <summary> 绑定账号 </summary>
        [ProtoMember(14)]
        [EntityField]
        public int BindAccount { get; set; }
        /// <summary> 绑定银行 </summary>
        [ProtoMember(15)]
        [EntityField]
        public int BindBank { get; set; }
        /// <summary> 银行存款次数 </summary>
        [ProtoMember(16)]
        [EntityField]
        public int BankDepositCount { get; set; }
        /// <summary> 银行存款金额 </summary>
        [ProtoMember(17)]
        [EntityField]
        public int BankDepositScore { get; set; }

        protected override int GetIdentityId() { return userid; }
    }
}
