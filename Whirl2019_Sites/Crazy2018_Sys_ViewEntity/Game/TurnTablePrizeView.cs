using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
   public class TurnTablePrizeView : BaseView
    {
		public int Id { get; set; }
		public string Name { get; set; }
		public Nullable<float> Price { get; set; }
		public string Prizeurl { get; set; }
		public Nullable<float> Probability { get; set; }
		public Nullable<int> Prizetype { get; set; }
		public string Levelid { get; set; }
	}
}
