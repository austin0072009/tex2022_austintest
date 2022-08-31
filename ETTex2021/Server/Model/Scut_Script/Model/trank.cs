/****************************************************************************
Copyright (c) 2013-2015 scutgame.com

http://www.scutgame.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
****************************************************************************/
using System;
using ProtoBuf;
using ETModel.Framework.Event;
using ETModel.Framework.Model;
using ETModel.Framework.Cache.Generic;

namespace ETModel.Script.Model
{
    /// <summary>
    /// 排行榜的规则      一天排一次   每天12点处理一次写入数据库
    /// </summary>
    [Serializable, ProtoContract]
    [EntityTable(CacheType.Dictionary, strFixed.strConnectstring, "trank")]
    public class trank : BaseEntity
    {


        [ProtoMember(1)]
        [EntityField(true)]
        public int UserID { get; set; }

        [ProtoMember(2)]
        [EntityField]
        public string UserName { get; set; }

        /// <summary>
        /// 胜的次数
        /// </summary>
        [ProtoMember(3)]
        [EntityField]
        public int ScoreWin { get; set; }

        [ProtoMember(4)]
        [EntityField]
        public DateTime CreateDate { get; set; }
        /// <summary>
        /// 输的次数
        /// </summary>
        [ProtoMember(5)]
        [EntityField]
        public int ScoreLost { get; set; }
        /// <summary>
        /// 成绩
        /// </summary>
        [ProtoMember(6)]
        [EntityField(true, ColumnDbType.LongText)]
        public CacheList<Record> records { get; set; }

        protected override int GetIdentityId()
        {
            return UserID;
        }
        public trank() : base(false)
        {
            records = new CacheList<Record>();
            CreateDate = DateTime.Now;
        }
    }
    [ProtoContract, Serializable]
    public class Record : EntityChangeEvent
    {
        public Record()
        {
            CreateDate = DateTime.Now;
        }
        /// <summary>
        /// 自增ID
        /// </summary>
        [ProtoMember(1)]
        [EntityField(true, IsIdentity = true)]
        public long Idx { get; set; }

        [ProtoMember(2)]
        public int UserID { get; set; }

        [ProtoMember(3)]
        public int gameid { get; set; }

        /// <summary>
        /// 输赢 
        /// </summary>
        [ProtoMember(4)]
        public long gold { get; set; }

        /// <summary>
        /// 桌子号
        /// </summary>
        [ProtoMember(5)]
        public string MatchCode { get; set; }

        /// <summary>
        /// 创建时间
        /// </summary>
        [ProtoMember(6)]
        public DateTime CreateDate { get; set; }
    }

}