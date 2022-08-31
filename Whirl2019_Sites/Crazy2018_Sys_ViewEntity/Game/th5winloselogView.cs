using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity.Game
{
    public class th5winloselogView
    {
        public int Id { get; set; }
        public decimal Gold { get; set; }
        public int GameId { get; set; }
        public string GameName { get; set; }
        public int IsRebate { get; set; }
        public decimal afterGold { get; set; }

        public decimal beforeGold { get; set; }
        public string CreateTime { get; set; }
        public int UserId { get; set; }
        public string UserName { get; set; }



    }
}
