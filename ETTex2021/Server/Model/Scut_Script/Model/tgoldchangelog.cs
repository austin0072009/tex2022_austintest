using ProtoBuf;
using System;
using ETModel.Framework.Model;

namespace ETModel.Script.Model
{
    /// <summary>
    ///金币变化记录表 每一个，每一局的金币变化
    /// </summary>
    [Serializable, ProtoContract]
    [EntityTable(AccessLevel.WriteOnly, strFixed.strConnectstring, "tgoldchangelog", StorageType = StorageType.WriteOnlyDB)]
    public class tgoldchangelog: ShareEntity
    {
        public tgoldchangelog()
        {
            CreateTime= DateTime.Now;
        }
        /// <summary>
        /// 自增
        /// </summary>
        [ProtoMember(1)]
        [EntityField(true, IsIdentity = true)]
        public long Id { get; set; }
        /// <summary>
        /// 用户Id
        /// </summary>
        [ProtoMember(2)]
        [EntityField]
        public int UserId { get; set; }
        /// <summary>
        /// 之前的金币
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public double BeforeGold { get; set; }
        /// <summary>
        /// 下注
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public long gamble { get; set; }
        /// <summary>
        /// 改变的金币
        /// </summary>
        [ProtoMember(5)]
        [EntityField]
        public double Gold { get; set; }
        /// <summary>
        /// 之后的金币
        /// </summary>
        [ProtoMember(6)]
        [EntityField]
        public double AfterGold { get; set; }
        [ProtoMember(7)]
        [EntityField]
        public DateTime CreateTime { get; set; }

        /// <summary>
        /// 游戏ID
        /// </summary>
        [ProtoMember(8)]
        [EntityField]
        public int GameId { get; set; }

        /// <summary>
        /// 是否机器人
        /// </summary>
        [ProtoMember(9)]
        [EntityField]
        public bool IsRobot { get; set; }

        /// <summary>
        ///  流水类型（1：大结算;2:领取佣金,3:钻石兑换金币,4:机器人充值,5:邮件金币,7:受赠,8:赠送,10:上分 11银行转账
        ///  13：切牌；15：送花；16：申请延时 17个人信息修改
        ///  20：查看余牌;21:强制秀牌;22:（每手）牌局详情;
        ///  23:房间结算;24:牌局税收;30:逃跑惩罚;31:输家返利;32:红包奖励;33:房间带入;34:带入返还   35：发弹幕  36开房消耗
        ///  37:保险分成  38：红利发放   39:退房扣利  40:退还红利 43：小游戏结算  45:基金转入 456:基金转出   46:回撤金币  47 提现   48举报扣费
        ///  100保险扣费   1001:SlOT结算  1002:小玛丽结算  1003:比赛报名  1004:比赛退赛  1005:比赛奖励  1006:任务奖励
        /// </summary>
        [ProtoMember(10)]
        [EntityField]
        public int ChangeType { get; set; }

        /// <summary>
        /// 备注（ChangeType房间结算时记录tableId（桌号）;地皮;总手数）
        /// </summary>
        [ProtoMember(11)]
        [EntityField]
        public string Remark { get; set; }

        /// <summary>
        /// clubid
        /// </summary>
        [ProtoMember(12)]
        [EntityField]
        public int clubid { get; set; }


        /// <summary>
        ///  
        /// </summary>
        [ProtoMember(13)]
        [EntityField]
        public int tnum { get; set; }

        /// <summary>
        /// 税收
        /// </summary>
        [ProtoMember(14)]
        [EntityField]
        public int tax { get; set; }

    }

    public class DiamondLogInfo
    {
        /// <summary>
        /// 流向文字
        /// </summary>
        public string ChangeType;

        /// <summary>
        /// 改变的砖石
        /// </summary> 
        public double Gold;

        /// <summary>
        /// 流向后砖石
        /// </summary>
        public double Aftergold;

        public string Remark;

        public string CreateTime;
    }


    public class goldchangelogInfo
    {

        public long Id { get; set; }
       

        public int UserId { get; set; }
        /// <summary>
        /// 之前的金币
        /// </summary> 
        public long BeforeGold { get; set; }
      
        /// <summary>
        /// 改变的金币
        /// </summary> 
        public long Gold { get; set; }
     
        public string CreateTime { get; set; }
         

        /// <summary>
        ///  流水类型（1：房间结算;2:领取佣金,3:钻石兑换金币,4:机器人充值,5:邮件金币,7:用户送金币（获得）,8:用户送出金币,10:充值11:转盘所需（扣除）金币,）
        /// </summary> 
        public string ChangeType { get; set; }

        /// <summary>
        /// 备注（ChangeType房间结算时记录tableId）
        /// </summary> 
        public string Remark { get; set; }

        public string jData { get; set; }
    }


}
