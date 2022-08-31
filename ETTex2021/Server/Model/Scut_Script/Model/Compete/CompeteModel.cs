using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Model;
using ProtoBuf;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;

namespace ETModel.Script.Model
{
    [Serializable, ProtoContract]
    [EntityTable(CacheType.Dictionary, strFixed.strConnectstring, "competemodel", IsExpired = false)]
    /// <summary> 比赛模板 </summary>
    public class CompeteModel : BaseEntity
    {
        public CompeteModel()
        {
            Free = new CacheList<PrizeInfo>();
            prizes = new CacheList<CompetePrize>();
            CreatTime = DateTime.Now;
            IsEnable = true;
        }
        /// <summary> 模板编号 </summary>
        [ProtoMember(1)]
        [EntityField(true)]
        public int ID { get; set; }
        /// <summary> 比赛名称 </summary>
        [ProtoMember(2)]
        [EntityField]
        public string Name { get; set; }
        /// <summary> 比赛类型 </summary>
        [ProtoMember(3)]
        [EntityField]
        public CompeteType Type { get; set; }
        /// <summary> 游戏编号 </summary>
        [ProtoMember(4)]
        [EntityField(true, ColumnDbType.Int)]
        public int GameID { get; set; }
        /// <summary> 上架时间(只有到了这个时间，比赛才能在客户端可见，可以理解为比赛载入内存的起始时间) </summary>
        [ProtoMember(5)]
        [EntityField(true, ColumnDbType.Varchar, ColumnLength = 255)]
        public CompeteTime ShelfTime { get; set; }
        /// <summary> 报名起始时间 </summary>
        [ProtoMember(6)]
        [EntityField(true, ColumnDbType.Varchar, ColumnLength = 255)]
        public CompeteTime SignupTime { get; set; }
        /// <summary> 报名结束时间 </summary>
        [ProtoMember(7)]
        [EntityField(true, ColumnDbType.Varchar, ColumnLength = 255)]
        public CompeteTime SignupEnd { get; set; }
        /// <summary> 比赛开始时间 </summary>
        [ProtoMember(8)]
        [EntityField(true, ColumnDbType.Varchar, ColumnLength = 255)]
        public CompeteTime CompeteStart { get; set; }
        /// <summary> 比赛结束时间 </summary>
        [ProtoMember(9)]
        [EntityField(true, ColumnDbType.Varchar, ColumnLength = 255)]
        public CompeteTime CompeteEnd { get; set; }
        /// <summary> 报名费 </summary>
        [ProtoMember(10)]
        [EntityField(true, ColumnDbType.LongText)]
        public CacheList<PrizeInfo> Free { get; set; }
        /// <summary> 奖品 </summary>
        [ProtoMember(11)]
        [EntityField(true, ColumnDbType.LongText)]
        public CacheList<CompetePrize> prizes { get; set; }
        /// <summary> 最小开赛人数 </summary>
        [ProtoMember(12)]
        [EntityField]
        public int MinCount { get; set; }
        /// <summary> 最大开赛人数 </summary>
        [ProtoMember(13)]
        [EntityField]
        public int MaxCount { get; set; }
        /// <summary> 比赛备注 </summary>
        [ProtoMember(14)]
        [EntityField]
        public string Remark { get; set; }
        /// <summary> 比赛模板是否启用 </summary>
        [ProtoMember(15)]
        [EntityField]
        public bool IsEnable { get; set; }
        /// <summary> 比赛模板是否启用 </summary>
        [ProtoMember(16)]
        [EntityField]
        public DateTime CreatTime { get; set; }
        public bool CheckTime(ref string reason)
        {
            if (Type != CompeteType.Loop)
            {
                if (CompeteStart == null) { reason = "开赛时间为空"; return false; }
                if (SignupTime != null && ShelfTime != null && ShelfTime.Compare(SignupTime) > 0) { reason = "[上架时间]大于[报名起始时间]"; return false; }
                if (SignupTime != null && SignupEnd != null && SignupTime.Compare(SignupEnd) > 0) { reason = "[报名起始时间]大于[报名结束时间]"; return false; }
                if (SignupTime != null && CompeteStart != null && SignupTime.Compare(CompeteStart) > 0) { reason = "[报名起始时间]大于[开赛时间]"; return false; }
                if (SignupTime != null && SignupEnd != null && CompeteStart != null && SignupEnd.Compare(CompeteStart) > 0) { reason = "[报名结束时间]大于[开赛时间]"; return false; }
                if (CompeteStart != null && CompeteEnd != null && CompeteStart.Compare(CompeteEnd) > 0) { reason = "[开赛时间]大于[比赛结束时间]"; return false; }
                if (ShelfTime != null && CompeteStart != null && ShelfTime.Compare(CompeteStart) > 0) { reason = "[上架时间]大于[开赛时间]"; return false; }
            }
            return true;
        }
        protected override int GetIdentityId()
        {
            return ID;
        }
    }
    [Serializable, ProtoContract]
    /// <summary> 比赛时间 </summary>
    public class CompeteTime
    {
        public byte Second;
        public byte Minute;
        public byte Hour;
        public byte Day;
        public byte Month;
        public short Year;
        public byte Week;
        public CompeteTime() { }
        //public CompeteTime(DateTime time)
        //{
        //    this.Second = (byte)time.Second;
        //    this.Minute = (byte)time.Minute;
        //    this.Hour = (byte)time.Hour;
        //    this.Day = (byte)time.Day;
        //    this.Month = (byte)time.Month;
        //    this.Year = (byte)time.Year;
        //}
        /// <summary>
        /// 
        /// </summary>
        /// <param name="time"></param>
        /// <param name="type">时间类型(0.日赛,1.月赛,2.年赛,3.指定时间比赛(仅开一次的比赛),4.周赛)</param>
        public CompeteTime(DateTime time, int type)
        {
            if (type == 4) { this.Week = (byte)time.DayOfWeek; if (this.Week == 0) this.Week = 7; }
            else
            {
                if (type > 2) this.Year = (short)time.Year;
                if (type > 1) this.Month = (byte)time.Month;
                if (type > 0) this.Day = (byte)time.Day;
            }
            this.Hour = (byte)time.Hour;
            this.Minute = (byte)time.Minute;
            this.Second = (byte)time.Second;
        }
        public CompeteTime(byte Second, byte Minute, byte Hour, byte Day = 0, byte Month = 0, short Year = 0)
        {
            this.Second = Second;
            this.Minute = Minute;
            this.Hour = Hour;
            this.Day = Day;
            this.Month = Month;
            this.Year = Year;
        }
        public CompeteTime(int Week, int Second, int Minute, int Hour)
        {
            this.Week = (byte)Week;
            this.Second = (byte)Second;
            this.Minute = (byte)Minute;
            this.Hour = (byte)Hour;
        }
        public int GetTimeType()
        {
            if (Week > 0) return 4;
            if (Year > 0) return 3;
            if (Month > 0) return 2;
            if (Day > 0) return 1;
            return 0;
        }
        public string GetTimeInfo()
        {
            switch (GetTimeType())
            {
                case 0:
                    return "每天" + Hour + "时" + Minute + "分" + Second + "秒";
                case 1:
                    return "每月" + Day + "日" + Hour + "时" + Minute + "分" + Second + "秒";
                case 2:
                    return "每年" + Month + "月" + Day + "日" + Hour + "时" + Minute + "分" + Second + "秒";
                case 3:
                    return new DateTime(Year, Month, Day, Hour, Minute, Second, DateTimeKind.Utc).ToString();
                case 4:
                    return "每周" + Week + "  " + Hour + "时" + Minute + "分" + Second + "秒";
            }
            return null;
        }
        public int IsTimeout()
        {
            return -CompareNow();
        }
        public int CompareNow()
        {
            var current = DateTime.Now;
            if (Week > 0)
            {
                int cweek = (int)current.DayOfWeek;
                if (cweek == 0) cweek = 7;
                if (Week < cweek) return -1; else if (Week > cweek) return 1;
            }
            else
            {
                if (Year > 0) if (Year < current.Year) return -1; else if (Year > current.Year) return 1;
                if (Month > 0) if (Month < current.Month) return -1; else if (Month > current.Month) return 1;
                if (Day > 0) if (Day < current.Day) return -1; else if (Day > current.Day) return 1;
            }
            if (Hour < current.Hour) return -1; else if (Hour > current.Hour) return 1;
            if (Minute < current.Minute) return -1; else if (Minute > current.Minute) return 1;
            if (Second < current.Second) return -1; else if (Second > current.Second) return 1;
            return 0;
        }
        public int Compare(DateTime time)
        {
            if (Week > 0)
            {
                int cweek = (int)time.DayOfWeek;
                if (cweek == 0) cweek = 7;
                if (Week < cweek) return -1; else if (Week > cweek) return 1;
            }
            else
            {
                if (Year > 0) if (Year < time.Year) return -1; else if (Year > time.Year) return 1;
                if (Month > 0) if (Month < time.Month) return -1; else if (Month > time.Month) return 1;
                if (Day > 0) if (Day < time.Day) return -1; else if (Day > time.Day) return 1;
            }
            if (Hour < time.Hour) return -1; else if (Hour > time.Hour) return 1;
            if (Minute < time.Minute) return -1; else if (Minute > time.Minute) return 1;
            if (Second < time.Second) return -1; else if (Second > time.Second) return 1;
            return 0;
        }
        public int Compare(CompeteTime time)
        {
            if (Week > 0)
            {
                if (Week < time.Week) return -1; else if (Week > time.Week) return 1;
            }
            else
            {
                if (Year > 0) if (Year < time.Year) return -1; else if (Year > time.Year) return 1;
                if (Month > 0) if (Month < time.Month) return -1; else if (Month > time.Month) return 1;
                if (Day > 0) if (Day < time.Day) return -1; else if (Day > time.Day) return 1;
            }
            if (Hour < time.Hour) return -1; else if (Hour > time.Hour) return 1;
            if (Minute < time.Minute) return -1; else if (Minute > time.Minute) return 1;
            if (Second < time.Second) return -1; else if (Second > time.Second) return 1;
            return 0;
        }
        public bool IsSmall(CompeteTime time)
        {
            if (Week > 0)
            {
                if (time.Week <= 0 || Week >= time.Week) return false; else return true;
            }
            else
            {
                if (Year > 0) if (Year > time.Year) return false; else if (Year < time.Year) return true;
                if (Month > 0) if (Month > time.Month) return false; else if (Month < time.Month) return true;
                if (Day > 0) if (Day > time.Day) return false; else if (Day < time.Day) return true;
            }
            if (Hour > time.Hour) return false; else if (Hour < time.Hour) return true;
            if (Minute > time.Minute) return false; else if (Minute < time.Minute) return true;
            if (Second >= time.Second) return false; else return true;
        }
        public bool IsSmallOrEqual(CompeteTime time)
        {
            if (Week > 0)
            {
                if (time.Week <= 0 || Week > time.Week) return false;
            }
            else
            {
                if (Year > 0) if (Year > time.Year) return false; else if (Year < time.Year) return true;
                if (Month > 0) if (Month > time.Month) return false; else if (Month < time.Month) return true;
                if (Day > 0) if (Day > time.Day) return false; else if (Day < time.Day) return true;
            }
            if (Hour > time.Hour) return false; else if (Hour < time.Hour) return true;
            if (Minute > time.Minute) return false; else if (Minute < time.Minute) return true;
            if (Second > time.Second) return false; else if (Second < time.Second) return true;
            return true;
        }
        public DateTime GetNotTimeoutTime()
        {
            var current = DateTime.Now;
            int type = 0;
            DateTime time;
            if (Week > 0)
            {
                type = 3;
                int cweek = (int)current.DayOfWeek;
                if (cweek == 0) cweek = 7;
                time = new DateTime(current.Year, current.Month, current.Day, Hour, Minute, Second);
                if (Week < cweek) return time.AddDays(7 - cweek + Week); else if (Week > cweek) return time.AddDays(Week - cweek);
            }
            else
            {
                if (Year > 0 && Month > 0 && Day > 0) return new DateTime(Year, Month, Day, Hour, Minute, Second);
                if (Month > 0) type++;
                if (Day > 0) type++;
                time = new DateTime(current.Year, type < 2 ? current.Month : Month, type == 0 ? current.Day : Day, Hour, Minute, Second);
                if (current.Month > Month) return GetNextTime(time, type); else if (current.Month < Month) return time;
                if (current.Day > Day) return GetNextTime(time, type); else if (current.Day < Day) return time;
            }
            if (current.Hour > Hour) return GetNextTime(time, type); else if (current.Hour < Hour) return time;
            if (current.Minute > Minute) return GetNextTime(time, type); else if (current.Minute < Minute) return time;
            if (current.Second > Second) return GetNextTime(time, type); else if (current.Second < Second) return time;
            return time;
            //if (Year == 0 && Month > 0)
            //{
            //    DateTime time;
            //    if (current.Month > Month) { time = new DateTime(current.Year, Month, Day, Hour, Minute, Second); time.AddYears(1); }
            //    else if (current.Month < Month) { time = new DateTime(current.Year, Month, Day, Hour, Minute, Second); }
            //    if (current.Day > Day) { time = new DateTime(current.Year, Month, Day, Hour, Minute, Second); time.AddYears(1); }
            //    else if (current.Day < Day) { time = new DateTime(current.Year, Month, Day, Hour, Minute, Second); }
            //    if (current.Hour > Hour) { time = new DateTime(current.Year, Month, Day, Hour, Minute, Second); time.AddYears(1); }
            //    else if (current.Hour < Hour) time = new DateTime(current.Year, Month, Day, Hour, Minute, Second);
            //    if (current.Minute > Minute) { time = new DateTime(current.Year, Month, Day, Hour, Minute, Second); time.AddYears(1); }
            //    else if (current.Minute < Minute) time = new DateTime(current.Year, Month, Day, Hour, Minute, Second);
            //    if (current.Second > Second) { time = new DateTime(current.Year, Month, Day, Hour, Minute, Second); time.AddYears(1); }
            //    else if (current.Second < Second) time = new DateTime(current.Year, Month, Day, Hour, Minute, Second);
            //    else time = new DateTime(current.Year, Month, Day, Hour, Minute, Second);
            //    return time;
            //}
            //else if (Year == 0 && Month == 0 && Day > 0)
            //{
            //    DateTime time;
            //    if (current.Day > Day) { time = new DateTime(current.Year, current.Month, Day, Hour, Minute, Second); time.AddMonths(1); }
            //    else if (current.Day < Day) { time = new DateTime(current.Year, current.Month, Day, Hour, Minute, Second); }
            //    if (current.Hour > Hour) { time = new DateTime(current.Year, current.Month, Day, Hour, Minute, Second); time.AddMonths(1); }
            //    else if (current.Hour < Hour) time = new DateTime(current.Year, current.Month, Day, Hour, Minute, Second);
            //    if (current.Minute > Minute) { time = new DateTime(current.Year, current.Month, Day, Hour, Minute, Second); time.AddMonths(1); }
            //    else if (current.Minute < Minute) time = new DateTime(current.Year, current.Month, Day, Hour, Minute, Second);
            //    if (current.Second > Second) { time = new DateTime(current.Year, current.Month, Day, Hour, Minute, Second); time.AddMonths(1); }
            //    else if (current.Second < Second) time = new DateTime(current.Year, current.Month, Day, Hour, Minute, Second);
            //    else time = new DateTime(current.Year, current.Month, Day, Hour, Minute, Second);
            //    return time;

            //}
            //else if (Year == 0 && Month == 0 && Day == 0)
            //{
            //    DateTime time;
            //    if (current.Hour > Hour) { time = new DateTime(current.Year, current.Month, current.Day, Hour, Minute, Second); time.AddDays(1); }
            //    else if (current.Hour < Hour) time = new DateTime(current.Year, current.Month, current.Day, Hour, Minute, Second);
            //    if (current.Minute > Minute) { time = new DateTime(current.Year, current.Month, current.Day, Hour, Minute, Second); time.AddDays(1); }
            //    else if (current.Minute < Minute) time = new DateTime(current.Year, current.Month, current.Day, Hour, Minute, Second);
            //    if (current.Second > Second) { time = new DateTime(current.Year, current.Month, current.Day, Hour, Minute, Second); time.AddDays(1); }
            //    else if (current.Second < Second) time = new DateTime(current.Year, current.Month, current.Day, Hour, Minute, Second);
            //    else time = new DateTime(current.Year, current.Month, current.Day, Hour, Minute, Second);
            //    return time;
            //}
            //return new DateTime(Year, Month, Day, Hour, Minute, Second);
        }

        public DateTime GetTime(DateTime current)
        {
            if (Year > 0 && Month > 0 && Day > 0) return new DateTime(Year, Month, Day, Hour, Minute, Second);
            int type = 0;
            if (Month > 0) type++;
            if (Day > 0) type++;
            var time = new DateTime(current.Year, type < 2 ? current.Month : Month, type == 0 ? current.Day : Day, Hour, Minute, Second);
            if (current.Month > Month) return GetNextTime(time, type); else if (current.Month < Month) return time;
            if (current.Day > Day) return GetNextTime(time, type); else if (current.Day < Day) return time;
            if (current.Hour > Hour) return GetNextTime(time, type); else if (current.Hour < Hour) return time;
            if (current.Minute > Minute) return GetNextTime(time, type); else if (current.Minute < Minute) return time;
            if (current.Second > Second) return GetNextTime(time, type); else if (current.Second < Second) return time;
            return time;
        }
        public DateTime GetCurrentTime()
        {
            var current = DateTime.Now;
            if (Week > 0)
            {
                int cweek = (int)current.DayOfWeek;
                if (cweek == 0) cweek = 7;
                return new DateTime(current.Year, current.Month, current.Day, Hour, Minute, Second).AddDays(Week - cweek);
            }
            else
            {
                if (Year > 0 && Month > 0 && Day > 0) return new DateTime(Year, Month, Day, Hour, Minute, Second);
                return new DateTime(current.Year, Month > 0 ? Month : current.Month, Day == 0 ? current.Day : Day, Hour, Minute, Second);
            }
        }
        public DateTime GetNextTime(DateTime time, int type)
        {
            return type == 3 ? time.AddDays(7) : (type == 2 ? time.AddYears(1) : (type == 1 ? time.AddMonths(1) : time.AddDays(1)));
        }
    }
    [Serializable, ProtoContract, DataContract]
    /// <summary> 比赛类型 </summary>
    public enum CompeteType
    {
        [EnumMember]
        /// <summary> 循环赛 </summary>
        Loop = 1,
        [EnumMember]
        /// <summary> 晋级赛 </summary>
        Promotion = 2,
        [EnumMember]
        /// <summary> 定时赛 </summary>
        Timing = 3,
    }
    [Serializable, ProtoContract]
    public enum TimeType
    {
        SpecifyTime = 1,
        Year = 2,
        Moon = 3,
        Week = 4,
        Day = 5
    }
    [Serializable, ProtoContract]
    public class CompetePrize
    {
        /// <summary> 起始排名 </summary>
        public int starank;
        /// <summary> 结束排名 </summary>
        public int endrank;
        /// <summary> 奖品 </summary>
        public List<CompetePrizeInfo> prizes;
    }
    [Serializable, ProtoContract]
    public class CompetePrizeInfo
    {
        /// <summary> 奖品数量,是否是值类型(true.值类型，flase.比例类型) </summary>
        public bool IsValue;
        /// <summary> 奖品类型(道具编号) </summary>
        public int type;
        /// <summary> 奖品数量 </summary>
        public int num;
    }
}
