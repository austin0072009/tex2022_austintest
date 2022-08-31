using System;

namespace ETModel
{
    public static class TimeHelper
    {
        public static DateTime NullTime = new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc);
        private static readonly long epoch = NullTime.Ticks;
        /// <summary>
        /// 客户端时间
        /// </summary>
        /// <returns></returns>
        public static long ClientNow()
        {
            return (DateTime.UtcNow.Ticks - epoch) / 10000;
        }

        public static long ClientNowSeconds()
        {
            return (DateTime.UtcNow.Ticks - epoch) / 10000000;
        }
        public static long Day24Seconds()
        {
            return (DateTime.Now.Date.AddDays(1).Ticks - epoch) / 10000000;
        }

        public static long Now()
        {
            return ClientNow();
        }
        public static bool IsNotNull(this DateTime self)
        {
            return self > NullTime;
        }
        public static bool IsNull(this DateTime self)
        {
            return self <= NullTime;
        }
    }
}