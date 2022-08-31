using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity;
using Crazy2018_Sys_Interface;
using Crazy2018_Sys_ViewEntity;
using Crazy2018_Sys_ViewEntity.Game;
using Crazy2018_Sys_ViewEntity.UserAgent;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Service.GameCore
{
    public class SysConfigService : BaseService<tsysconfig, int, texas_2021Entities>, ISysConfigService
    {
        public DataResults<tsysconfig> GeSysConfig(DPagePara page)
        {
            DataResults<tsysconfig> result = new DataResults<tsysconfig>();
            if (page == null) page = new DPagePara();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;

            using (texas_2021Entities dbhelper = new texas_2021Entities())
            {
               List<tsysconfig> data = dbhelper.tsysconfig
                        .OrderByDescending(t => t.Id).Skip((page.PageIndex - 1) * page.PageSize)
                        .Take(page.PageSize).ToList();
              
                if (!string.IsNullOrEmpty(page.Keywords))
                    data = dbhelper.tsysconfig.Where(st => st.Key == page.Keywords)
                        .OrderByDescending(t => t.Id).Skip((page.PageIndex - 1) * page.PageSize)
                        .Take(page.PageSize).ToList();

                var _data = from a in data
                            select a;


                result.TotalCount = data.Count();
                result.Data = data.ToList();
                result.Message = "获取成功";
                return result;
            }
        }

        public DataResult UserConfigDel(string ids)
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
                    if (string.IsNullOrEmpty(item)) continue;
                    int id = 0;
                    int.TryParse(item, out id);
                    var emyitty = DelEntity(id);
                }
            result.Message = "删除成功";
            return result;
        }

        public bool SubmitSysConfigEntity(tsysconfig entity)
        {
            try
            {
                    if (entity.Id > 0)
                    {
                        if (GetValueByKey(entity.Key) == null) return false;
                        UpdateAsync(entity);
                        return true;
                    }
                    else
                    {
                        //entity.CreateDate = DateTime.Now;
                        //db.tsysconfig.Add(entity);
                        //db.SaveChangesAsync();
                        AddEntity(entity);
                        return true;
                    }
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public tsysconfig GetValueByKey(string key)
        {
           return GetEntityByWhere(t=>t.Key== key);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="key"></param>
        /// <param name="dec"></param>
        /// <returns></returns>
        public tsysconfig GetValueByKeyDsc(string key, string dec)
        {
            return GetEntityByWhere(t => t.Key == key && t.Dec== dec)??new tsysconfig();
        }
    }
}
