using Crazy2018_Sys_ViewEntity;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Crazy2018_Sys_Common.TableUtil;

namespace Crazy2018_Sys_Common
{
   public static class StatisticsUtil
    {
        public static DateTime GetMonthMinDate(DateTime d)
        {
            return DateTime.Parse(d.ToString("yyyy-MM-01 00:00:00"));
        }
        public static int GetMonthdayCount(DateTime date)
        {
           return DateTime.DaysInMonth(date.Year, date.Month);
        }
        public static DateTime ToGetDayStartDateTime(this DateTime d)
        {
            return DateTime.Parse(d.ToString("yyyy-MM-dd"));
        }
        public static DateTime ToGetDayEndDateTime(this DateTime d)
        {
            return DateTime.Parse(d.ToString("yyyy-MM-dd")).AddDays(1).AddMilliseconds(-1);
        }


        public static List<KeyValuePair<string, DateTime>> MonthPastTimes(DateTime date)
        {
            var times = new List<KeyValuePair<string, DateTime>>();

            var now = DateTime.Now;
            var nyear = now.Year;
            var timeFormat = nyear.Equals(date.Year) ? "MM月dd日" : "yyyy年MM月dd日";

            if (now.ToString("yyyyMM").Equals(date.ToString("yyyyMM")))
            {
                var month = now.Month;
                var days = now.Day;

                for (var i = 0; i < days; i++)
                {
                    var day = (i + 1);
                    var time = new DateTime(nyear, month, day);
                    var key = time.ToString(timeFormat);

                    times.Add(new KeyValuePair<string, DateTime>(key, time));
                }
            }
            else
            {
                var year = date.Year;
                var month = date.Month;
                var days = date.ToGetMonthOfDays();

                for (var i = 0; i < days; i++)
                {
                    var day = (i + 1);
                    var time = new DateTime(year, month, day);
                    var key = time.ToString(timeFormat);

                    times.Add(new KeyValuePair<string, DateTime>(key, time));
                }
            }

            return times;
        }
        public static int GetLossDays(int type)
        {

            int starttime;
            switch (type)
            {
                case (int)TimeNoLogin.一个月:
                    starttime =(DateTime.Now - DateTime.Now.AddMonths(-1)).Days;
                    break;
                case (int)TimeNoLogin.三个月:
                    starttime = (DateTime.Now - DateTime.Now.AddMonths(-3)).Days;
                    break;
                case (int)TimeNoLogin.半年:
                    starttime = (DateTime.Now - DateTime.Now.AddMonths(-6)).Days;
                    break;
                default:
                    starttime = (DateTime.Now - DateTime.Now.AddMonths(-1)).Days;
                    break;
            }
            return starttime;
        }

        public static Dictionary<DateTime, DateTime> GetTimeStartTime(int type)
        {
            //DateTime date;
            Dictionary<DateTime, DateTime> date = new Dictionary<DateTime, DateTime>();
            
            switch (type)
            {
                case (int)TimeSlot.今天:
                    date.Add(DateTime.Now.ToGetDayStartDateTime(), DateTime.Now);
                    break;
                case (int)TimeSlot.昨天:
                    date.Add(DateTime.Now.ToGetDayStartDateTime().AddDays(-1), DateTime.Now.ToGetDayStartDateTime().AddDays(-1).ToGetDayEndDateTime());
                    break;
                case (int)TimeSlot.一周:
                    date.Add(DateTime.Now.ToGetDayStartDateTime().AddDays(-7), DateTime.Now);
                    break;
                case (int)TimeSlot.一月:
                    date.Add(DateTime.Now.ToGetDayStartDateTime().AddMonths(-1), DateTime.Now);
                    break;
                case (int)TimeSlot.一年:
                    date.Add(DateTime.Now.ToGetDayStartDateTime().AddMonths(-12), DateTime.Now);
                    break;
                default:
                    date.Add(DateTime.Now.ToGetDayStartDateTime().AddMonths(-12), DateTime.Now);
                    break;
            }
            return date;
        }

    }
    public static class EnumExtension
    {
        public static string ToDescription(this Enum val)
        {
            var type = val.GetType();

            var memberInfo = type.GetMember(val.ToString());

            var attributes = memberInfo[0].GetCustomAttributes(typeof(DescriptionAttribute), false);

            if (attributes == null || attributes.Length != 1)
            {
                //如果没有定义描述，就把当前枚举值的对应名称返回
                return val.ToString();
            }

            return (attributes.Single() as DescriptionAttribute).Description;
        }
    }
}
