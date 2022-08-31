using ProtoBuf;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ETModel.Framework.Data;
using ETModel.Framework.Model;

namespace ETModel.Script.Model
{
    [Serializable, ProtoContract]
    [EntityTable(CacheType.Dictionary, strFixed.strConnectstring, "tUserRechargeLog", StorageType = StorageType.ReadWriteDB)]
    public  class tUserRechargeLog : BaseEntity
    {
        public tUserRechargeLog()
        {
            createtime = DateTime.Now;
        }
        [ProtoMember(1)]
        /// <summary>
        /// 自增ID
        /// </summary>
        [EntityField(true,IsIdentity = true)]
        public long id { set; get; }
        [ProtoMember(2)]
        [EntityField]
        /// <summary>
        /// 充值会员账号id
        /// </summary>
        public int userid { set; get; }
        /// <summary>
        /// 充值数量
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public decimal money { set; get; }
        /// <summary>
        ///  1、充值金币 2、砖石，3、赠送，4、受赠  5、银行转账
        /// </summary>
        [EntityField]
        [ProtoMember(4)]
        public int cointype { set; get; }
        /// <summary>
        /// 充值类型  1、后台充值 2、账号转账
        /// </summary>
        [EntityField]
        [ProtoMember(5)]
        public int fromtype { set; get; }
        /// <summary>
        /// 代理会员ID
        /// </summary>
        [EntityField]
        [ProtoMember(6)]
        public int fromuserid { set; get; }
        /// <summary>
        /// 后台管理员ID
        /// </summary>
        [EntityField]
        [ProtoMember(7)]
        public int fromadminid { set; get; }
        /// <summary>
        /// 备注
        /// </summary>
        [EntityField]
        [ProtoMember(8)]
        public string remarks { set; get; }
        /// <summary>
        /// 创建时间
        /// </summary>
        [EntityField]
        [ProtoMember(9)]
        public DateTime createtime { set; get; }
        /// <summary>
        /// 充值时玩家账户金额
        /// </summary>
        [EntityField]
        [ProtoMember(10)]
        public decimal oldGold { set; get; }

        /// <summary>
        /// 充值后玩家账户金额
        /// </summary>
        [EntityField]
        [ProtoMember(10)]
        public decimal currGold { set; get; }

        protected override int GetIdentityId()
        {
            return userid;
        }
    }
}
