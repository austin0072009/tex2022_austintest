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
    public class CommoditService : BaseService<tcommodity, int, texas_2021Entities>, ICommoditService
    {
        public DataResult DelCommodiy(string ids)
        {
            DataResult result = new DataResult();
            if (string.IsNullOrEmpty(ids))
            {
                result.Code = (int)Status.fail;
                result.Message = "id不能为空";
                return result;
            }
            var noticeIds = ids.Split(',');
            foreach (var item in noticeIds)
            {
                int id = 0;
                int.TryParse(item, out id);
                if (id == 0) continue;
                DelEntity(id);
            }
            result.Message = "删除成功";
            return result;
        }

        public DataResult<CommodiyView> GetCommodiyById(int id)
        {
            DataResult<CommodiyView> result = new DataResult<CommodiyView>() {Message="获取成功",Data=new CommodiyView() };
            try
            {
                var entity = GetEntityByID(id);
                if (entity == null)
                {
                    result.Code = (int)Status.fail;
                    result.Message = "该条数据不存在";
                }
                else
                {
                    result.Data = new CommodiyView
                    {
                        CommodityType = entity.commodityType.Value,
                        CommodityName = Enum.GetName(typeof(CommodiyType), entity.commodityType),
                        CreatTime = entity.CreateTime.Value.ToString("yyyy-MM-dd HH:mm:ss"),
                        Name = entity.name,
                        id = entity.id,
                        ImgUrl = entity.url,
                        Introduce = entity.introduce,
                        IsEnable = entity.isEnable.Value,
                        IsEnableDesc = entity.isEnable.Value ? "是" : "否",
                        ExchangeValue = entity.exchangeValue.Value,
                        CommodityvValue=entity.commodityvValue.Value
                    };
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

        public DataResults<CommodiyView> GetCommodiyData(DPage page)
        {
            DataResults<CommodiyView> result = new DataResults<CommodiyView>();
            if (page == null) page = new DPage();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            try
            {
                Expression<Func<tcommodity, bool>> fun = w => w != null;
                if (!string.IsNullOrEmpty(page.Keywords))
                    fun =fun.And(w=> w.name.Contains(page.Keywords) || w.introduce.Contains(page.Keywords));
                result.Data = GetEntityLisrByWhere(fun).OrderByDescending(w => w.CreateTime).Skip((page.PageIndex - 1) * page.PageSize).
                    Take(page.PageSize).
                    ToList().
                    Select(w => new CommodiyView
                    {
                        CommodityName = Enum.GetName(typeof(CommodiyType), w.commodityType.Value),
                        CommodityvValue = w.commodityvValue.Value,
                        CreatTime = w.CreateTime.Value.ToString("yyyy-MM-dd HH:mm:ss"),
                        Name = w.name,
                        id = w.id,
                        ImgUrl = w.url,
                        CommodityType = w.commodityType.Value,
                        Introduce = w.introduce,
                        IsEnable = w.isEnable.Value,
                        IsEnableDesc = w.isEnable.Value ? "是" : "否",
                        ExchangeValue = w.exchangeValue.Value
                    }).ToList();
                result.TotalCount = GetCount(fun);
                result.Message = "获取成功";
            }
            catch (Exception ex)
            {
                Log.Error(this.GetType().ToString(), ex.Message);
                result.Code = (int)Status.fail;
                result.Message = "获取失败";
            }
            return result;
        }

        public DataResult SaveCommodiy(CommodiyView model)
        {
            DataResult result = new DataResult() { Message = "添加成功" };
            if (string.IsNullOrEmpty(model.Name) || string.IsNullOrEmpty(model.Introduce) || string.IsNullOrEmpty(model.ImgUrl))
            {
                result.Code = (int)Status.fail;
                result.Message = "商品名称或者商品介绍或者商品图片不能为空";
                return result;
            }
            if (string.IsNullOrEmpty(Enum.GetName(typeof(CommodiyType), model.CommodityType)))
            {
                result.Code = (int)Status.fail;
                result.Message = "商品类型不正确";
                return result;
            }
            if (model.id == 0)//添加
            {
                var data = AddEntity(new tcommodity
                {
                    commodityType = model.CommodityType,
                    CreateTime = DateTime.Now,
                    commodityvValue = model.CommodityvValue,
                    exchangeValue = model.ExchangeValue,
                    introduce = model.Introduce,
                    isEnable = model.IsEnable,
                    name = model.Name,
                    url = model.ImgUrl
                });
                if (data == null)
                {
                    result.Code = (int)Status.fail;
                    result.Message = "添加失败";
                    return result;
                };
            }
            else
            {//编辑
                result.Message = "更新成功";
                var entity = new tcommodity();
                entity = GetEntityByID(model.id);
                if (!model.ImgUrl.Equals(entity.url))
                    entity.url = model.ImgUrl;
                else {
                    entity.url = model.ImgUrl;
                }
                if (entity == null)
                {
                    result.Code = (int)Status.fail;
                    result.Message = "没有找到该条数据";
                    return result;
                }
                entity.exchangeValue = model.ExchangeValue;
                entity.commodityType = model.CommodityType;
                entity.introduce = model.Introduce;
                entity.isEnable = model.IsEnable;
                entity.name = model.Name;
              
                entity.commodityvValue = model.CommodityvValue;
                if (UpdateEntity(entity) == null)
                {
                    result.Code = (int)Status.fail;
                    result.Message = "更新失败";
                    return result;

                };
            }
            return result;
        }
    }
}
