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
    public class UserContactService : BaseService<tusercontact, int, texas_2021Entities>, IUserContactService
    {
        public DataResult SaveUserContact(int userId, string name, string mobile, string postCode, string address)
        {
            DataResult result = new DataResult();
            try
            {
                var isMobile = PageValidate.IsMobile(mobile);
                if (!isMobile)
                {
                    result.Code = (int)Status.fail;
                    result.Message = "手机号码不正确";
                    return result;
                }
                var entity = GetEntityByWhere(w => w.UserId == userId);
                if (entity == null)
                {
                    AddEntity(new tusercontact
                    {
                        Id = Guid.NewGuid().ToString("N"),
                        Address = address,
                        CreateTime = DateTime.Now,
                        Mobile = mobile,
                        PostCode = postCode,
                        UpdateTime = DateTime.Now,
                        Name = name,
                        UserId = userId
                    });
                }
                else
                {
                    entity.Mobile = mobile;
                    entity.Name = name;
                    entity.PostCode = postCode;
                    entity.UpdateTime = DateTime.Now;
                    entity.Address = address;
                    UpdateEntity(entity);
                }
            }
            catch (Exception ex)
            {
                result.Code = (int)Status.fail;
                result.Message = ex.Message;
            }
            return result;
        }

        public DataResults<UserContactView> GetData(DPage page)
        {
            DataResults<UserContactView> result = new DataResults<UserContactView>();
            if (page == null) page = new DPage();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            Expression<Func<tusercontact, bool>> fun = w => w != null;
            if (!string.IsNullOrEmpty(page.Keywords))
            {
                int tempUid = 0;
                var r1 = int.TryParse(page.Keywords, out tempUid);
                if (r1)
                {
                    fun = fun.And(w => w.UserId == tempUid);
                }
            }
            var data = GetEntityLisrByWhere(fun).OrderByDescending(w => w.CreateTime.Value)
                            .Skip((page.PageIndex - 1) * page.PageSize)
                            .Take(page.PageSize).ToList();
            result.TotalCount = GetCount(fun);
            result.Data = data
                            .Select(w => new UserContactView
                            {
                                CreatTime = w.CreateTime.Value.ToString("yyyy-MM-dd HH:mm:ss"),
                                UpdateDate = w.UpdateTime.Value.ToString("yyyy-MM-dd HH:mm:ss"),
                                Address = w.Address,
                                Id = w.Id,
                                Mobile = w.Mobile,
                                Name = w.Name,
                                PostCode = w.PostCode,
                                UserId = w.UserId.Value
                            }).ToList();
            return result;
        }
    }
}
