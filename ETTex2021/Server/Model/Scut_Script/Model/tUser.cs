using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Game.Context;
using ETModel.Framework.Model;
using GameSystem;
using ProtoBuf;
using System;

/// <summary>
/// Scut 缓存获取不支持，?类型
/// </summary>
namespace ETModel.Script.Model
{
    [Serializable, ProtoContract, NumberField]
    [EntityTable(CacheType.Dictionary, strFixed.strConnectstring, "tUser", IsExpired = false)]              //, StorageType = StorageType.ReadWriteDB
    public class tUser : BaseUser
    {
        public tUser()
        {
            ControlEndRatio = 50;
            ControlLimitRatio = 100;
            clublist = new CacheList<int>();
        }
        /// <summary>
        /// <summary>
        /// 是与SessionUser关联的ID，由SNS服务器产生的过来的 很重要，       必须放第一个位置，否则清理 REDIS后会报错
        /// </summary> 
        [ProtoMember(1)]
        [EntityField(true)]
        public int UserID { get; set; }

        /// <summary>
        /// 
        /// </summary> 
        [ProtoMember(2)]
        [EntityField]
        public string UserPassword { get; set; }
        /// <summary>
        /// 
        /// </summary> 
        [ProtoMember(3)]
        [EntityField]
        [NumberField]
        public long Gold { get; set; }
        /// <summary>
        /// 
        /// </summary> 
        [ProtoMember(4)]
        [EntityField]
        public long MaxGold { get; set; }

        /// <summary>
        /// 
        /// </summary> 
        [ProtoMember(5)]
        [EntityField]
        public string LastLotinTime1 { get; set; }
        /// <summary>
        /// 
        /// </summary>
        [ProtoMember(6)]
        [EntityField]
        public string LastLotinTime2 { get; set; }
        /// <summary>
        /// 
        /// </summary> 
        [ProtoMember(7)]
        [EntityField]
        public DateTime RegTime { get; set; }
        /// <summary>
        /// 
        /// </summary>
        [ProtoMember(8)]
        [EntityField]
        public string wechatName { get; set; }
        /// <summary>
        /// 
        /// </summary>
        [ProtoMember(9)]
        [EntityField]
        public string IP { get; set; }
        /// <summary>
        /// 
        /// </summary> 
        [ProtoMember(10)]
        [EntityField]
        public string Desc { get; set; }
        /// <summary>
        /// 
        /// </summary> 
        [ProtoMember(11)]
        [EntityField]
        public int isRobot { get; set; }
        /// <summary>
        /// 
        /// </summary> 
        [ProtoMember(12)]
        [EntityField]
        public int RobotGameid { get; set; }
        /// <summary>
        /// 充值的钻石或房卡
        /// </summary> 
        [ProtoMember(13)]
        [EntityField]
        [NumberField]
        public long diamond { get; set; }

        /// <summary>
        /// 
        /// </summary>
        [ProtoMember(14)]
        [EntityField]
        public string wechatHeadIcon { get; set; }
        /// <summary>
        /// 
        /// </summary>
        [ProtoMember(15)]
        [EntityField]
        public int Sex { get; set; }
        /// <summary>
        /// 总充值金额
        /// </summary> 
        [ProtoMember(16)]
        [EntityField]
        public long TotalGold { get; set; }
        /// <summary>
        /// 充值总钻石
        /// </summary>
        [ProtoMember(17)]
        [EntityField]
        public long Totaldiamond { get; set; }
        /// <summary>
        /// 锁定时间
        /// </summary>
        [ProtoMember(18)]
        [EntityField]
        public string lockTime { get; set; }
        /// <summary>
        /// 胜率
        /// </summary>
        [ProtoMember(19)]
        [EntityField]
        public int winpercent { get; set; }
        /// <summary>
        /// 金币银行，暂时不用的
        /// </summary>
        [ProtoMember(20)]
        [EntityField]
        public long BankGold { get; set; }
        /// <summary>
        ///玩家的VIP等级0不是VIP    
        ///1 2 3分别是代理   
        ///8 合伙人.9第二级.10创始人
        ///18是主播 只能主播端登录 
        ///19是能创建房间最大数 能查看房间号的牌局回顾权限
        ///20是添加机器人
        /// </summary>
        [ProtoMember(21)]
        [EntityField]
        public int vlevel { get; set; } 

        /// <summary>
        /// 显示的短ID 可订制靓号用 6位最大999999
        /// </summary>
        [ProtoMember(22)]  
        [EntityField]
        public int showid { get; set; }

        /// <summary>
        /// 
        /// </summary>
        [ProtoMember(23)]
        [EntityField]
        public float lat { get; set; }
        /// <summary>
        ///  
        /// </summary>
        [ProtoMember(24)]
        [EntityField]
        public float lng { get; set; }

        /// <summary>
        /// 作为进入h5游戏的时候  临时保存总金额
        /// </summary>
        [ProtoMember(25)]
        [EntityField]
        public long UpTotalAmount { get; set; }

        /// <summary>
        /// 玩家等级 用于特殊处理
        /// </summary>
        [ProtoMember(26)]
        [EntityField]
        public int lv { get; set; }

        /// <summary>
        /// 已加入的
        /// </summary>
        [ProtoMember(27)]
        [EntityField(true, ColumnDbType.LongText)]
        public CacheList<int> clublist { get; set; }
        #region 新增
        /// <summary>
        /// 点控限制
        /// </summary>
        [ProtoMember(28)]
        [EntityField]
        public int DgLimit { get; set; }
        /// <summary>
        /// 点控 总 输赢金额 目标 i
        /// </summary>
        [ProtoMember(29)]
        [EntityField]
        public long DgTotalScore { get; set; }
        /// <summary>
        /// 剩余目标  j
        /// </summary>
        [ProtoMember(30)]
        [EntityField]
        public long DgCurrScore { get; set; }
        /// <summary>
        /// 点控阈值系数百分比
        /// </summary>
        [ProtoMember(31)]
        [EntityField]
        public int ControlLimitRatio { get; set; }
        /// <summary>
        /// 点控收尾系数百分比
        /// </summary>
        [ProtoMember(32)]
        [EntityField]
        public int ControlEndRatio { get; set; }
        /// <summary>
        /// 点控时间
        /// </summary>
        [ProtoMember(33)]
        [EntityField]
        public string DgCreateTime { get; set; }
        [ProtoMember(34)]
        [EntityField]
        public int RetailID { get; set; }

        /// <summary>
        /// VIP积分计算流水
        /// </summary> 
        [ProtoMember(35)]
        [EntityField]
        [NumberField]
        public int VipWaterScore { get; set; }

        /// <summary>
        /// 玩家经验值
        /// </summary> 
        [ProtoMember(36)]
        [EntityField]
        [NumberField]
        public long UserExp { get; set; }

        /// <summary>
        /// 玩家今日获取的经验值
        /// </summary> 
        [ProtoMember(37)]
        [EntityField]
        [NumberField]
        public int TodayUserExp { get; set; }

        /// <summary>
        /// 玩家经验开始统计时间
        /// </summary> 
        [ProtoMember(38)]
        [EntityField]
        public DateTime StatisticsTime { get; set; }

        /// <summary>
        /// 当前押注剩余分数
        /// </summary> 
        [ProtoMember(39)]
        [EntityField]
        [NumberField]
        public int currBetScore { get; set; }
               

        public override string GetNickName()
        {
            return wechatName;
        }

        public override string GetPassportId()
        {
            return "";
        }

        public override string GetRetailId()
        {
            return "";
        }

        public override int GetUserId()
        {
            return UserID;
        }
        #endregion
        public long GetGoldAndWinGold
        {
            get
            {
                return Gold;
            }
        }
        /// <summary>
        /// 减分
        /// </summary>
        /// <param name="tval"></param>
        public void GoldReduce(long tval)
        {  
            if (tval >= Gold)
            { 
                Gold = 0;
            }
            else
            {
                Gold -= tval;
            }
        }
      

        protected override int GetIdentityId()
        {
            return UserID;
        }
    }

    public class strFixed
    {
        public const string strConnectstring = "ConnData";
        public const string strConnectstring_System = "SystemData";
        public const string strConnectstring_Sns = "SnsCenter";
    }
}



