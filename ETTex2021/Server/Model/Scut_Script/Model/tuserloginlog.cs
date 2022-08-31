using ProtoBuf;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ETModel.Framework.Model;

namespace ETModel.Script.Model
{
    [Serializable, ProtoContract]
    [EntityTable(CacheType.Entity, strFixed.strConnectstring, "rechargechannels", StorageType = StorageType.ReadWriteDB)]
   public class tuserloginlog: ShareEntity
    {
        public tuserloginlog()
        {
            CreateTime = DateTime.Now;
        }
        [ProtoMember(1)]
        [EntityField("Id", IsKey = true, IsIdentity = true)]
        public int ID { get; set; }

        [ProtoMember(2)]
        [EntityField]
        public string UserId { get; set; }

        [ProtoMember(3)]
        [EntityField]
        public string IP { get; set; }

        [ProtoMember(4)]
        [EntityField]
        public string MachineCode { get; set; }

        [ProtoMember(5)]
        [EntityField]
        public int MachineType { get; set; }

        [ProtoMember(6)]
        [EntityField]
        public string Lat { get; set; }

        [ProtoMember(7)]
        [EntityField]
        public string Lng { get; set; }

        [ProtoMember(8)]
        [EntityField]
        public DateTime CreateTime { get; set; }

    }
}
