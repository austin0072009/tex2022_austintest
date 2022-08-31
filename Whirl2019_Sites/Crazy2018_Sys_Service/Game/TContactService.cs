using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity.Game;
using Crazy2018_Sys_Interface.Game;
using EntityFramework.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Service.Game
{
   public class TContactService : BaseService<TContact, int, DBContextHelper>, ITContactService
    {
        public DataResult AddContact(TContact contcat)
        {
            DataResult result = new DataResult();

            using (DBContextHelper db = new DBContextHelper())
            {

                db.TContact.Add(contcat);
                db.SaveChanges();
                //导出新增的实体卡

            }
            result.Message = "添加成功";

            return result;
        }

        public DataResult DelContact(string ids)
        {
            DataResult result = new DataResult();
            if (string.IsNullOrEmpty(ids))
            {
                result.Code = (int)Status.fail;
                result.Message = "id不能为空";
                return result;
            }
            var noticeIds = ids.Split(',');
            using (DBContextHelper db = new DBContextHelper())
            {
                foreach (var item in noticeIds)
                {
                    if (string.IsNullOrEmpty(item)) continue;
                    int id = 0;
                    int.TryParse(item, out id);
                    var emyitty = db.TContact.Find(id);
                    db.TContact.Remove(emyitty);
                }
                db.SaveChanges();
            }
            result.Message = "删除成功";
            return result;
        }


        public DataResult UpdataContact(TContact cont)
        {
            DataResult result = new DataResult();

            using (DBContextHelper db = new DBContextHelper())
            {

                TContact catype = db.TContact.Where(x => x.ID == cont.ID).First();
                if (catype != null)
                {
                    
                    catype.QQ = cont.QQ;
                    catype.Wechat = cont.Wechat;
                    catype.Skype = cont.Skype;
                    catype.Phone = cont.Phone;
                    catype.Other1 = cont.Other1;
                    catype.Other2 = cont.Other2;
                    catype.Other3 = cont.Other3;

                    // db.TContact.(contcat);
                }
               
                db.SaveChanges();
                //导出新增的实体卡

            }
            result.Message = "添加成功";

            return result;
        }


        public DataResults<TContact> GetTContactList(DPage page)
        {
            DataResults<TContact> result = new DataResults<TContact>();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;

            try
            {
                using (DBContextHelper db = new DBContextHelper())
                {
                    Expression<Func<TContact, bool>> fun = w => w != null;//&&w.deleteState==false;
                   
                    if (!string.IsNullOrEmpty(page.Keywords))
                    {
                        fun = fun.And(w => w != null && w.QQ.Contains(page.Keywords) || w.Wechat.Contains(page.Keywords) || w.Skype.Contains(page.Keywords) || w.Phone.Contains(page.Keywords));
                    }
                    List<TContact> data = db.TContact.Where(fun).OrderByDescending(t => t.CreatTime).Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList();
                   
                    result.TotalCount = data.Count();
                    var rdata = data;
                    result.Data = rdata;

                    return result;
                }
            }
            catch (Exception ex)
            {
                result.Data = new List<TContact>();
                return result;
            }
        }

    }
}
