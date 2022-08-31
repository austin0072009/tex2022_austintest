﻿using ProtoBuf;
using System;
using ETModel.Framework.Model;

namespace ETModel.Script.Model
{
    /// <summary>
    /// 房间配置
    /// </summary>
    ////[Serializable, ProtoContract]
    ////[EntityTable(AccessLevel.ReadOnly, strFixed.strConnectstring, "tgamelevelinfo", StorageType = StorageType.ReadOnlyDB)]
    [Serializable, ProtoContract]
    [EntityTable(AccessLevel.ReadOnly, strFixed.strConnectstring, "tgamelevelinfo", IsExpired = false)]
    public class tgamelevelinfo : ShareEntity
    {
        /// <summary>
        /// </summary>
        public tgamelevelinfo()
            : base(true)
        {

        }

        /// <summary>
        /// 
        /// </summary>        
        [ProtoMember(1)]
        [EntityField("Id", IsKey = true, IsIdentity = true)]
        public int Id { get; set; }
        /// <summary>
        /// 
        /// </summary>        
        [ProtoMember(2)]
        [EntityField]
        public string Name { get; set; }

        /// <summary>
        /// 底注分
        /// </summary>        
        [ProtoMember(3)]
        [EntityField]
        public int Baserate { get; set; }
        /// <summary>
        /// 游戏ID
        /// </summary>
        [ProtoMember(4)]
        [EntityField]
        public int gameid { get; set; }

        /// <summary>
        /// 最低分
        /// </summary>
        [ProtoMember(5)]
        [EntityField]
        public int _min { get; set; }

        /// <summary>
        /// 最高分
        /// </summary>
        [ProtoMember(6)]
        [EntityField]
        public int _max { get; set; }

        /// <summary>
        /// 在线人数
        /// </summary>
        [ProtoMember(7)]
        [EntityField]
        public int onlineCount { get; set; }

        /// <summary>
        /// 桌子数量
        /// </summary>
        [ProtoMember(8)]
        [EntityField]
        public int openTableCount { get; set; }

        /// <summary>
        /// 游戏类型
        /// </summary>
        [ProtoMember(9)]
        [EntityField]
        public int gametype { get; set; }

        /// <summary>
        /// 游戏类型说明
        /// </summary>
        [ProtoMember(10)]
        [EntityField]
        public string gametypeDesc { get; set; }

        /// <summary>
        /// 是否启用
        /// </summary>
        [ProtoMember(11)]
        [EntityField]
        public int isEnable { get; set; }

        /// <summary>
        /// 是否启用说明
        /// </summary>
        [ProtoMember(12)]
        [EntityField]
        public string isEnableDesc { get; set; }

        /// <summary>
        /// 是否删除
        /// </summary>
        [ProtoMember(13)]
        [EntityField]
        public int deleteState { get; set; }

        /// <summary>
        /// 修改人
        /// </summary>
        [ProtoMember(14)]
        [EntityField]
        public string modifyUser { get; set; }
        /// <summary>
        /// 修改时间
        /// </summary>
        [ProtoMember(15)]
        [EntityField]
        public DateTime modifyTime { get; set; }
        /// <summary>
        /// 
        /// </summary>        
        [ProtoMember(16)]
        [EntityField]
        public string Description { get; set; }
        /// <summary>
        /// 机器人数量
        /// </summary>        
        [ProtoMember(17)]
        [EntityField]
        public int RobotCount { get; set; }


        [ProtoMember(18)]
        [EntityField]
        public int LevelType { get; set; }

        /// <summary>
        /// 人数
        /// </summary>
        [ProtoMember(19)]
        [EntityField]
        public int pconut { get; set; }

    }
}
