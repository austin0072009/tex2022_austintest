using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Interface;
using Crazy2018_Sys_ViewEntity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Service
{
    public class ShopManageService : BaseService<texchangelog, long, texas_2021Entities>, IShopManageService
    {
        public DataResults<ShopLogView> GetShopLog(DPage page, int type = -1)
        {
            DataResults<ShopLogView> result = new DataResults<ShopLogView>();
            if (page == null) page = new DPage();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            Expression<Func<texchangelog, bool>> fun = w => w != null;
            Expression<Func<tcommodity, bool>> fun1 = w => w != null;
            if (type >= 0)
                fun1 = fun1.And(w => w.commodityType.Value == type);
            if (!string.IsNullOrEmpty(page.Keywords))
            {
                var userid = 0;
                int.TryParse(page.Keywords, out userid);
                if (userid > 0)
                    fun = fun.And(w => w.oddNumbers.Contains(page.Keywords) || w.name.Contains(page.Keywords) || w.UserId == userid);
                else
                    fun = fun.And(w => w.oddNumbers.Contains(page.Keywords) || w.name.Contains(page.Keywords));

            }
            var eData = GetEntityLisrByWhere(fun).Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList();
            using (texas_2021Entities dbhelper = new texas_2021Entities())
            {
                var cData = dbhelper.tcommodity.Where(fun1);
                var join = (from e in eData
                            join c in cData on e.CommodityId equals c.id
                            orderby e.CreateTime descending
                            select new ShopLogView
                            {
                                CommodityName = c.name,
                                CommodityType = Enum.GetName(typeof(CommodiyType), e.commodityType.Value),
                                CommodityvValue = c.commodityvValue.Value,
                                CreatTime = e.CreateTime.Value.ToString("yyyy-MM-dd HH:mm:ss"),
                                ExchangeValue = c.exchangeValue.Value,
                                IsHandle = e.isHandle.Value ? "是" : "否",
                                OddNumbers = e.oddNumbers,
                                Remark = "商城兑换",
                                UserId = e.UserId.Value
                            });
                result.TotalCount = join.Count();
                result.Data = join.ToList();//.Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList();
            }
            return result;
        }

        public DataResult SetShopState(string orderNo)
        {
            DataResult result = new DataResult();
            if (string.IsNullOrEmpty(orderNo))
            {
                result.Code = (int)Status.fail;
                result.Message = "订单号不能为空";
                return result;
            }
            var entity = GetEntityByWhere(w => w.oddNumbers.Equals(orderNo));
            if (entity == null)
            {
                result.Code = (int)Status.fail;
                result.Message = "订单不存在";
                return result;
            }
            if (entity.isHandle.Value)
            {
                result.Code = (int)Status.fail;
                result.Message = "该订单已处理";
                return result;
            }
            entity.isHandle = true;
            var uResult = UpdateEntity(entity);
            if (uResult == null)
            {
                result.Code = (int)Status.fail;
                result.Message = "处理失败";
                return result;
            }
            return result;
        }
    }
}
