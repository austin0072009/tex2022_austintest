using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Crazy2018_Sys_ViewEntity;
using Crazy2018_Sys_Common;
using static Crazy2018_Sys_Common.TableUtil;
using Crazy2018_Sys_Interface.Game;

namespace Crazy2018_Sys_Service
{
    public class Useragent2020Service : BaseService<tuseragent2020, int, texas_2021Entities>, IUseragent2020Service
    {
        private readonly IH5winloseLogService H5winloseLogService;
        public Useragent2020Service(IH5winloseLogService _H5winloseLogService)
        {
            H5winloseLogService = _H5winloseLogService;
        }


        public DataResults<AgentCeoView> GetAgentCEO(DPagePara page)
        {
            DataResults<AgentCeoView> result = new DataResults<AgentCeoView>();
            if (page == null) page = new DPagePara();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;


            using (texas_2021Entities db = new texas_2021Entities())
            {
                IQueryable<tuseragent2020> data = db.tuseragent2020;
                if (!string.IsNullOrEmpty(page.Keywords))
                {
                    int tempId = 0;
                    int.TryParse(page.Keywords, out tempId);
                    if (tempId > 0)
                        data = data.Where(w => w.UserID == tempId);
                }
                var _data = from a in data
                            join b in db.tuser
                            on a.UserID equals b.UserID
                            select new AgentCeoView()
                            {
                                UserName = b.wechatName,
                                ChildAgents = a.ChildAgents,
                                GoldC = (long)a.GoldC,
                                UserID = a.UserID,
                                Role = a.Role,
                                GoldCHistory = a.GoldCHistory,
                                lastdealtime = a.lastdealtime,
                                JackpotRate = a.JackpotRate,
                                GoldCH_G_R=a.GoldCH_G_R,
                                GoldCH_P_R=a.GoldCH_P_R,
                                rates=a.rates,
                                PotRates=a.PotRates
                            };


                result.TotalCount = _data.Count();
                result.Data = _data.OrderByDescending(t=>t.lastdealtime).Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList().
                    Select(a => new AgentCeoView
                    {
                        UserName = a.UserName,
                        UserID = a.UserID,
                        ChildAgents = a.ChildAgents,
                        GoldC =a.GoldC,
                        Role = a.Role,
                        PotRates=a.PotRates,
                        JackpotRate = a.JackpotRate,
                        GoldCH_G_R = a.GoldCH_G_R,
                        GoldCH_P_R = a.GoldCH_P_R,
                        rates = a.rates,
                        RoloName = Enum.GetName(typeof(AgentRoleName), a.Role),
                        GoldCHistory = a.GoldCHistory /100,
                        _lastdealtime = a.lastdealtime.Value.ToString("MM-dd hh:mm:ss")
                    }).ToList();
                result.Message = "获取成功";
                return result;
            }


        }

        
    }
}
