using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
    public class OnlineOrRegsuterMonth
    {
        public OnlineOrRegsuterMonth()
        {
            Categories = new List<string>();
            Series = new List<OnlineregsterDataInfo>();
            NowDate = "-";
            TotalJacket = 0;
        }
        public int TotalJacket { get; set; }
        public List<string> Categories { get; set; }
        public List<OnlineregsterDataInfo> Series { get; set; }
        public string NowDate { get; set; }
    }
    public  class OnlineregsterDataInfo
    {
        public OnlineregsterDataInfo()
        {
            Id = 0;
            name = "";
            color = "";
            data = new List<int>();
        }
        public int Id { get; set; }
        public string name { get; set; }
        public string color { get; set; }
        public List<int> data { get; set; }
    }

    public class UserGoldDisMap
    {
        public string name { get; set; }= "占比";

        public bool colorByPoint { get; set; } = true;
        /// <summary>
        /// 总金币
        /// </summary>
        public decimal TotalGold { get; set; }

        public List<UserGoldData> data { get; set; }

    }
    public class UserGoldData
    {
        /// <summary>
        /// 名称
        /// </summary>
        public string name { get; set; }
        /// <summary>
        /// 占比
        /// </summary>
        public decimal y { get; set; }
        /// <summary>
        /// 人数
        /// </summary>
        public int UserNum { get; set; }
    }

   public class onedayTimeDailyBriefingInfo
    {
        public onedayTimeDailyBriefingInfo()
        {
            TimeString = "";
            Time00T01TotalRecords = 0;
            Time01T02TotalRecords = 0;
            Time02T03TotalRecords = 0;
            Time03T04TotalRecords = 0;
            Time04T05TotalRecords = 0;
            Time05T06TotalRecords = 0;
            Time06T07TotalRecords = 0;
            Time07T08TotalRecords = 0;
            Time08T09TotalRecords = 0;
            Time09T10TotalRecords = 0;
            Time10T11TotalRecords = 0;
            Time11T12TotalRecords = 0;
            Time12T13TotalRecords = 0;
            Time13T14TotalRecords = 0;
            Time14T15TotalRecords = 0;
            Time15T16TotalRecords = 0;
            Time16T17TotalRecords = 0;
            Time17T18TotalRecords = 0;
            Time18T19TotalRecords = 0;
            Time19T20TotalRecords = 0;
            Time20T21TotalRecords = 0;
            Time21T22TotalRecords = 0;
            Time22T23TotalRecords = 0;
            Time23T01TotalRecords = 0;
        }

        public string TimeString { get; set; }
        public int Time00T01TotalRecords { get; set; }
        public int Time01T02TotalRecords { get; set; }
        public int Time02T03TotalRecords { get; set; }
        public int Time03T04TotalRecords { get; set; }
        public int Time04T05TotalRecords { get; set; }
        public int Time05T06TotalRecords { get; set; }
        public int Time06T07TotalRecords { get; set; }
        public int Time07T08TotalRecords { get; set; }
        public int Time08T09TotalRecords { get; set; }
        public int Time09T10TotalRecords { get; set; }
        public int Time10T11TotalRecords { get; set; }
        public int Time11T12TotalRecords { get; set; }
        public int Time12T13TotalRecords { get; set; }
        public int Time13T14TotalRecords { get; set; }
        public int Time14T15TotalRecords { get; set; }
        public int Time15T16TotalRecords { get; set; }
        public int Time16T17TotalRecords { get; set; }
        public int Time17T18TotalRecords { get; set; }
        public int Time18T19TotalRecords { get; set; }
        public int Time19T20TotalRecords { get; set; }
        public int Time20T21TotalRecords { get; set; }
        public int Time21T22TotalRecords { get; set; }
        public int Time22T23TotalRecords { get; set; }
        public int Time23T01TotalRecords { get; set; }


    }
}
