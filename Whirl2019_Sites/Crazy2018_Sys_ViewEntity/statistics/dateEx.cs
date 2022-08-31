using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
   public static class dateEx
    {
        public static DateTime ToGetBeginDateTime(this DateTime d)
        {
            return DateTime.Parse(d.ToString("yyyy-MM-dd 00:00:00"));
        }
        public static DateTime GetMonthMinDate(this DateTime d)
        {
            return DateTime.Parse(d.ToString("yyyy-MM-01 00:00:00"));
        }
        //public static DateTime ToGetDayStartDateTime(this DateTime d)
        //{
        //    return DateTime.Parse(d.ToString("yyyy-MM-dd"));
        //}
        //public static DateTime ToGetDayEndDateTime(this DateTime d)
        //{
        //    return DateTime.Parse(d.ToString("yyyy-MM-dd")).AddDays(1).AddMilliseconds(-1);
        //}
        public static List<KeyValuePair<DateTime, DateTime>> DayTimes(DateTime date)
        {
            var times = new List<KeyValuePair<DateTime, DateTime>>();

            date = date.ToGetBeginDateTime();

            var endTime = new DateTime();

            for (var i = 1; i <= 24; i++)
            {
                DateTime startTime;

                if (i.Equals(1))
                {
                    startTime = date;
                    endTime = startTime.AddHours(1).AddMilliseconds(-1);
                }
                else
                {
                    endTime = endTime.AddMilliseconds(1);

                    startTime = new DateTime(endTime.Year, endTime.Month, endTime.Day, endTime.Hour, 0, 0);
                    endTime = startTime.AddHours(1).AddMilliseconds(-1);
                }

                times.Add(new KeyValuePair<DateTime, DateTime>(startTime, endTime));
            }

            return times;
        }
        public static Dictionary<string, KeyValuePair<int, int>> GetGoldMaxMin()
        {
            return new Dictionary<string, KeyValuePair<int, int>>
            {
                   { "1万以下",new KeyValuePair<int, int>(0,10000)},
                   { "1万-10万",new KeyValuePair<int, int>(10000,100000)},
                   { "10万-50万",new KeyValuePair<int, int>(100000,500000)},
                   { "50万-100万",new KeyValuePair<int, int>(500000,1000000)},
                   { "100万-500万",new KeyValuePair<int, int>(1000000,5000000)},
                   { "500万-1000万",new KeyValuePair<int, int>(5000000,10000000)}
            };
        }




        public static int ToGetMonthOfDays(this DateTime day)
        {
            return System.Threading.Thread.CurrentThread.CurrentUICulture.Calendar.GetDaysInMonth(day.Year, DateTime.Now.Month);
        }

    }
}
