using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
  public  class RoomInfoView:BaseView
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int BaseRate { get; set; }
        public int gameid { get; set; }
        public int Min { get; set; }
        public int Max { get; set; }
        public int OnlineCount { get; set; }
        public int OpenTableCount { get; set; }
        public string GametypeDesc { get; set; }
        public string IsEnableDesc { get; set; }
        public string ModifyUser { get; set; }
        public bool IsEnable { get; set; }
        public int gameType { get; set; }
        public string operation { get; set; }
        public int OldId { get; set; }
    }
}
