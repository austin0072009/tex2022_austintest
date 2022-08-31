using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
   public class TuserPrizeLogView : BaseView
    {
		public string Id { get; set; }
		public Nullable<int> UserId { get; set; }
		public string CreateTime { get; set; }
		public Nullable<int> PrizeId { get; set; }
		public Nullable<int> TurntableId { get; set; }
		public Nullable<bool> IsGive { get; set; }
		public string PrizeName { get; set; }
		public Nullable<int> Prizetype { get; set; }
		public string Name { get; set; }

	}
}
