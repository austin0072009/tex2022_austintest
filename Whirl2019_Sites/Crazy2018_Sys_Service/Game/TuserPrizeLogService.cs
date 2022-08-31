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
	public class TuserPrizeLogService : BaseService<tuserprizelog, int, texas_2021Entities>, ITuserPrizeLogService
	{
		public DataResults<TuserPrizeLogView> GetTuserPrizeLogData(DPage page)
		{
			DataResults<TuserPrizeLogView> result = new DataResults<TuserPrizeLogView>();
			if (page == null) page = new DPage();
			result.Keywords = page.Keywords;
			result.PageIndex = page.PageIndex;
			result.PageSize = page.PageSize;
			//Expression<Func<tjackpot, bool>> fun = w => w != null;
			//Expression<Func<tgameinfo, bool>> fun1 = w => w != null;
			try
			{
				//if (!string.IsNullOrEmpty(page.Keywords))
				//	fun1 = w => w != null && w.name.Contains(page.Keywords) || w.gameRule.Contains(page.Keywords);
				using (texas_2021Entities dbhelper = new texas_2021Entities())
				{
					//var user = dbhelper.gameuser.ToList();
					//var turntableprize = dbhelper.turntableprize.ToList();
					var TablePrizeLogInfo = GetEntityLisrByWhere(a => a != null).Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList();
					var join = from j in TablePrizeLogInfo
							   join u in dbhelper.gameuser on j.userId equals u.UserId
							   join t in dbhelper.turntableprize on j.prizeid equals t.id
							   orderby j.createtime descending
							   select
							   new TuserPrizeLogView
							   {
								   Name = u.NickName,
								   Id = j.id,
								   UserId = j.userId,
								   CreateTime = j.createtime.Value.ToString("yyyy-MM-dd HH:mm:ss"),
								   PrizeId = j.prizeid,
								   TurntableId = j.turntableid,
								   IsGive = j.isgive,
								   PrizeName = t.name,
								   Prizetype = t.prizetype,
							   };
					result.TotalCount = join.Count();
					result.Data = join.ToList();//.Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList();
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
