using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Crazy2018_Sys_Common;
using Crazy2018_Sys_ViewEntity;
using System.Linq.Expressions;

namespace Crazy2018_Sys_Service
{
	public class TurnTablePrizeService : BaseService<turntableprize, int, texas_2021Entities>, ITurnTablePrizeService
	{
		public DataResults<TurnTablePrizeView> GetTurnTablePrizeData(DPage page)
		{
			DataResults<TurnTablePrizeView> result = new DataResults<TurnTablePrizeView>();
			if (page == null) page = new DPage();
			result.Keywords = page.Keywords;
			result.PageIndex = page.PageIndex;
			result.PageSize = page.PageSize;
			//Expression<Func<tjackpot, bool>> fun = w => w != null;
			//Expression<Func<tgameinfo, bool>> fun1 = w => w != null;
			try
			{
				//if (!string.IsNullOrEmpty(page.Keywords))
				//    fun1 = w => w != null && w.name.Contains(page.Keywords) || w.gameRule.Contains(page.Keywords);
				using (texas_2021Entities dbhelper = new texas_2021Entities())
				{
					var TablePrizeInfo = GetEntityLisrByWhere(a => a != null).Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList();
					var join = from j in TablePrizeInfo
							   orderby j.levelid
							   select
							   new TurnTablePrizeView
							   {
								   Id = j.id,
								   Name = j.name,
								   Price = j.price,
								   Prizeurl = j.prizeurl,
								   Probability = j.probability,
								   Prizetype = j.prizetype,
								   Levelid = j.levelid,
							   };
					result.TotalCount = join.Count();
					result.Data = join.ToList();
					result.Message = "获取成功";
				}
			}
			catch (Exception ex)
			{
				Log.Error(this.GetType().ToString(), ex.Message);
				result.Code = (int)Status.fail;
				result.Message = "获取失败";
			}
			return result;
		}
	}
}
