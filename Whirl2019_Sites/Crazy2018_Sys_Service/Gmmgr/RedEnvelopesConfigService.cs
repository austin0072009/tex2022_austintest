using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Crazy2018_Sys_Common;
using static Crazy2018_Sys_Common.DTEnums;
using System.Linq.Expressions;
using Crazy2018_Sys_ViewEntity;
namespace Crazy2018_Sys_Service.Gmmgr
{
    public class RedEnvelopesConfigService : BaseService<tredenvelopesconfig, int, texas_2021Entities>, IRedEnvelopesConfigService
    {
        IManageService manageLogservice;
        public RedEnvelopesConfigService(IManageService _manageLogservice)
        {
            manageLogservice = _manageLogservice;
        }

        public DataResult SubmitRedMoney(decimal money,decimal rate,string type)
        {
            DataResult res = new DataResult();
            int.TryParse(type,out int  _type);
            var dbRate = GetEntityLisrByWhere(t => t.TaskType == _type).Sum(T => T.Rate);
            var srate = 100 - dbRate;
            if ((dbRate + rate) > 100)
            {
                res.Code = (int)Status.fail;
                res.Message = "设置概率过大，请确保同一种红包概率相加为100,剩余概率最大应为"+ srate;
            }
            else
            {
                tredenvelopesconfig addentity = new tredenvelopesconfig()
                {
                    Money = money,
                    Rate = rate,
                    CreateDate = DateTime.Now,
                    TaskType = int.Parse(type)
                };
                AddEntity(addentity);
                res.Code = (int)Status.Success;
                res.Message = "设置成功!";
            }
            return res;
        }


        public DataResult DeleteRedMoneyByids(string ids)
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
                DelEntity(id);

            }
            manageLogservice.AddActionlog(ActionEnum.Delete, OptAction.RedMoney, ActionEnum.Delete.ToDescription() + OptAction.RedMoney.ToDescription() + "数据条数:" + noticeIds.Count());
            result.Message = "删除成功";
            return result;
        }

        public DataResults<RedEnvelopesConfigView> GetGameRankData(DPagePara page)
        {
            DataResults<RedEnvelopesConfigView> result = new DataResults<RedEnvelopesConfigView>();
            if (page == null) page = new DPagePara();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            result.ChangeType = page.ChangeType;
            Expression<Func<tredenvelopesconfig, bool>> fun = w => w != null;

            if (page.ChangeType!=0)
            {
                fun = fun.And(t=>t.TaskType == page.ChangeType);
            }
            

            var data = GetEntityLisrByWhere(fun,page.PageIndex,page.PageSize, (t)=>t.CreateDate.Value).
                Select(t=>new RedEnvelopesConfigView
            {
                Id = t.Id,
                CreateDate = t.CreateDate,
                Money = t.Money,
                TaskType = t.TaskType.Value,
                Rate = t.Rate,
                TypeName = Enum.GetName(typeof(TableUtil.RedMoneyType), t.TaskType)
            }).ToList();

            result.TotalCount = GetCount(fun);
            result.Data = data;
            result.Message = "获取成功";
            return result;
        }

        public DataResult ModifyRedMoneyAndRate(int id, decimal money, string type,string ttype)
        {
            DataResult res = new DataResult();
            var entity = GetEntityByID(id);
            if (entity != null)
            {
                if (type.Equals("m"))
                    entity.Money = money;
                else if (type.Equals("r"))
                {
                    int.TryParse(ttype,out int _ttype);
                    var dbRate = GetEntityLisrByWhere(t => t.TaskType == _ttype && t.Id!= id).Sum(T => T.Rate);

                    var srate = 100 - dbRate;
                    if ((dbRate + money) > 100)
                    {
                        res.Code = (int)Status.fail;
                        res.Message = "设置概率过大，请确保同一种红包概率相加为100,剩余概率最大应为" + srate;
                    }
                    else
                    {
                        entity.Rate = money;
                    }
                }
                UpdateEntity(entity);
            }
            else
            {
                res.Code = (int)Status.fail;
                res.Message = "数据ID异常!";
            }
            return res;
        }

        public DataResults<tredenvelopestask> GetRedEnveTaskData(DPagePara page)
        {
            DataResults<tredenvelopestask> result = new DataResults<tredenvelopestask>();
            if (page == null) page = new DPagePara();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            result.ChangeType = page.ChangeType;

            Expression<Func<tredenvelopestask, bool>> fun = w => w != null;

            if (page.ChangeType != 0)
            {
                fun = fun.And(t => t.TaskType == page.ChangeType);
            }

            using (texas_2021Entities db = new texas_2021Entities())
            {
                var data = db.tredenvelopestask.OrderByDescending(t=>t.CreateDate).
                    Where(fun).
                    Skip((page.PageIndex-1)*page.PageSize).
                    Take(page.PageSize).ToList();
                result.TotalCount = db.tredenvelopestask.Count();
                result.Data = data;
                result.Message = "success";

                return result;
            }
        }

        public DataResult DeleteRedMoneyTaskByids(string ids)
        {
            DataResult result = new DataResult();
            if (string.IsNullOrEmpty(ids))
            {
                result.Code = (int)Status.fail;
                result.Message = "id不能为空";
                return result;
            }
            var noticeIds = ids.Split(',');
            using (texas_2021Entities db = new texas_2021Entities())
            {
                foreach (var item in noticeIds)
                {
                    if (string.IsNullOrEmpty(item)) continue;
                    int id = 0;
                    int.TryParse(item, out id);
                    var entity = db.tredenvelopestask.Find(id);
                    db.tredenvelopestask.Remove(entity);
                }
                db.SaveChangesAsync();
            }
            manageLogservice.AddActionlog(ActionEnum.Delete, OptAction.RedMoneyTask, ActionEnum.Delete.ToDescription() + OptAction.RedMoneyTask.ToDescription() + "数据条数:" + noticeIds.Count());
            result.Message = "删除成功";
            return result;
        }

        public bool SubmitRedMoneyTask(tredenvelopestask entity)
        {
            try
            {
                using (texas_2021Entities db = new texas_2021Entities())
                {
                    if (entity.Id > 0)
                    {
                        db.SaveChangesAsync();
                        return true;
                    }
                    else
                    {
                        entity.CreateDate = DateTime.Now;
                        db.tredenvelopestask.Add(entity);
                        db.SaveChangesAsync();
                        return true;
                    }
                }
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public DataResults<RedenvelopesLogView> GetUserRedenvelopeslog(DPagePara page)
        {
            DataResults<RedenvelopesLogView> result = new DataResults<RedenvelopesLogView>();
            Expression<Func<tredenvelopeslog, bool>> fun = w => w != null;
            if (page == null) page = new DPagePara();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            result.ChangeType = page.ChangeType;
            result.Keywords = page.Keywords;
            result.starttime = page.starttime;
            result.endtime = page.endtime;
            using (texas_2021Entities db = new texas_2021Entities())
            {
             
                if (!string.IsNullOrEmpty(page.Keywords))
                {
                    int.TryParse(page.Keywords,out int uid);
                    fun = fun.And(t=>t.UserId== uid);
                }
                if (page.ChangeType!=0)
                {
                    fun = fun.And(t => t.TaskType == page.ChangeType);
                }
                if (page.starttime!=null&&page.endtime!=null)
                {
                    fun = fun.And(t => t.CreateDate >= page.starttime && t.CreateDate<=page.endtime);
                }
                List<tredenvelopeslog> idata = db.tredenvelopeslog
                    .OrderByDescending(t => t.CreateDate)
                    .Skip((page.PageIndex - 1) * page.PageSize)
                    .Take(page.PageSize).ToList();
                var data = from a in idata
                           join b in db.tuser on a.UserId equals b.UserID
                           select new RedenvelopesLogView
                           {
                               Id = a.Id,
                               CreateDate = a.CreateDate,
                               Money = a.Money/100,
                               UserName = b.wechatName,
                               TaskType = a.TaskType,
                               UserId = a.UserId,
                               BeforeCount = a.BeforeCount
                           };

                result.TotalMoney = idata.Sum(t => (decimal?)t.Money.Value / 100)?.ToString("#0.00");
                result.TotalCount = idata.Count();
                result.Data = data.ToList();

                return result;
            }

        }

        public List<tredenvelopestask> GetRedTaskByType(int id)
        {
            using (texas_2021Entities db = new texas_2021Entities())
            {
              return  db.tredenvelopestask.Where(t=>t.TaskType == id).ToList();
            }
        }

        public DataResult AddRedenvelopeslog(int UserId, int RedenveType, int GoldNum) {

            DataResult result = new DataResult();

            using (texas_2021Entities db = new texas_2021Entities())
            {
                tredenvelopeslog tred = new tredenvelopeslog();
                tred.UserId = UserId;
                tred.TaskType = RedenveType;
                tred.Money = GoldNum;
                tred.CreateDate = DateTime.Now;
                db.tredenvelopeslog.Add(tred);
                db.SaveChanges();
            }
            result.Message = "添加成功";
            return result;
        }
    }
}
