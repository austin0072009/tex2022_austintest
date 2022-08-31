using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity;
using Crazy2018_Sys_Interface;
using Crazy2018_Sys_Interface.Game;
using Crazy2018_Sys_ViewEntity.Game;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Service
{
   public class RechargeChannelsService: BaseService<RechargeChannel, long, DBContextHelper>, IRechargeChannelsService
    {
        public DataResults<RechargeChannel> GetRechargeData(DPagePara page)
        {
            DataResults<RechargeChannel> result = new DataResults<RechargeChannel>();
            if (page == null) page = new DPagePara();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            try
            {
                using (DBContextHelper db = new DBContextHelper())
                {
                    IQueryable<RechargeChannel> data = db.RechargeChannels;
                    data = data.Where(st => st.isenable ==true);
                    var _data = from a in data 
                                orderby a.ID descending
                                select a;


                    result.TotalCount = _data.Count();
                    result.Data = AutoMapper.MapToList<RechargeChannel, RechargeChannel>(_data.OrderByDescending(t => t.ID).ToList());
                    result.Message = "获取成功";
                    return result;
                }
            }
            catch (Exception ex)
            {

                result.Message = "fail";
                return result;
            }

        }


        public List<RechargeServiceListView> GetRechargeByid(int id) {

            List<RechargeServiceListView> servicelist = new List<RechargeServiceListView>();
            try
            {

                using (DBContextHelper db = new DBContextHelper())
                {
                    IQueryable<RechargeChannel> data = db.RechargeChannels;
                    data = data.Where(st => st.ID == id);
                    RechargeChannel rechdata= data.SingleOrDefault();
                    if (rechdata.serviceList!=null)
                    {
                        servicelist= JsonHelper.JSONToObject<List<RechargeServiceListView>>(rechdata.serviceList);
                        //rechdata.serviceList
                    }
                    return servicelist;
                }
            }
            catch (Exception ex)
            {

                return servicelist;
            }

        }

      
    }
}
