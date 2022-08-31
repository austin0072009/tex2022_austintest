using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
   public class RoomListView : BaseView
    {
        public int tableNum { get; set; }
        public string Gamename { get; set; }
        public string RoomName { get; set; }



        public string createTime { get; set; }
        public Nullable<int> maxCount { get; set; }
        public Nullable<int> curCount { get; set; }
        public string allUserRecord { get; set; }
        public Nullable<int> ownerId { get; set; }
        /// <summary>
        /// 桌子状态 0已创建 1已开局 2已完结 3已解散
        /// </summary>
        public string tableStatus { get; set; }
        public Nullable<int> tableid { get; set; }
        public string data { get; set; }
        public Nullable<int> levelid { get; set; }
        public Nullable<int> Duration { get; set; }
        public Nullable<int> firstinto { get; set; }
        public Nullable<int> baserate { get; set; }

        public string para { get; set; }

        public ParaView JsonPara { get; set; }

    }
    public class ParaView
    {

        /// <summary>
        /// 对应底皮 3.5.10.20.40.80
        /// </summary> 
        public int basemango { get; set; }


        public string IsZm
        {
            get { return _IsZm; }
            set
            {
                _IsZm =  value.Equals("1") ? "是" : "否";
            }
        }
        /// <summary>
        /// 揍芒
        /// </summary> 
        public string _IsZm { get; set; }
        /// <summary>
        /// 休芒
        /// </summary> 
        public string IsXiu;
        public string _IsXiu
        { get { return IsXiu; }
            set
            {
                _IsXiu = string.IsNullOrEmpty(value) ? "否" : value.Equals("1") ? "是" : "否";
            }
        }
        public string IsDw { get { return _IsDw; } set
            {
                _IsDw = string.IsNullOrEmpty(value) ? "否" : value.Equals("1") ? "是" : "否";

            } }
        /// <summary>
        /// 2表示地九王
        /// </summary> 
        public string _IsDw;
        public string IsSSM { get { return _IsSSM; } set
            {
                _IsSSM = value.Equals("1") ? "是" : "否";
            } }
        /// <summary>
        /// 手手芒
        /// </summary> 
        public string _IsSSM;
    }


}
