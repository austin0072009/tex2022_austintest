using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Interface;
using Crazy2018_Sys_ViewEntity;
using Crazy2018_Sys_ViewEntity.UserAgent;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Crazy2018_Sys_Common.TableUtil;

namespace Crazy2018_Sys_Service.GameCore
{
    public class AgentGoldlogService : BaseService<tagentgoldlog, int, texas_2021Entities>, IAgentGoldlogService
    {
        public DataResults<AgentgoldlogView> GetAgentContrib(DPagePara page)
        {
            DataResults<AgentgoldlogView> result = new DataResults<AgentgoldlogView>();
            if (page == null) page = new DPagePara();
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            result.ChangeType = page.ChangeType;
            result.Keywords = page.Keywords;
            result.userid = page.userid;
            
            if (string.IsNullOrEmpty(page.userid))
            {
                result.Data = new List<AgentgoldlogView>();
                return result;
            }
            using (texas_2021Entities db = new texas_2021Entities())
            {
                int.TryParse(page.userid,out int uid);
                var qdata = db.tagentgoldlog.Where(t => t.UserId == uid);
                if (!string.IsNullOrEmpty(page.Keywords))
                {
                    int.TryParse(page.Keywords, out int kid);
                    qdata = qdata.Where(t=>t.SourceUserId == kid);
                }

                var data = from a in qdata
                           .OrderByDescending(t => t.ActionCoin)
                           .Skip((page.PageIndex - 1) * page.PageSize)
                           .Take(page.PageSize)
                join b in db.tuser on a.SourceUserId equals b.UserID
                           group a by new { a.SourceUserId, b.wechatName } into aa
                           select new AgentgoldlogView
                           {
                               Idx = aa.Max(t => t.Idx),
                               ActionCoin = aa.Sum(t => (long)t.ActionCoin / 100),
                               CreateDate = aa.Max(t => t.CreateDate),
                               C_lv = aa.Max(t => t.C_lv),
                               SourceUserName =aa.Key.wechatName,
                               SourceUserId = aa.Max(t => t.SourceUserId),
                           };

                result.TotalCount = data.Count();
                result.TotalMoney = data.Sum(t => t.ActionCoin)?.ToString("#0.00");
                result.Data = data.ToList();
                result.Message = "success";

                return result;

            }


        }
    }
}
