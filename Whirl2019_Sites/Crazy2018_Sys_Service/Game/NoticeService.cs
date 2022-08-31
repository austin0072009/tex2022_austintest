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
using static Crazy2018_Sys_Common.TableUtil;
using static Crazy2018_Sys_Common.DTEnums;

namespace Crazy2018_Sys_Service
{
    public class NoticeService : BaseService<tnotice, int, texas_2021Entities>, INoticeService
    {
        IManageService manageserver;
        public NoticeService(IManageService _manageserver)
        {
            manageserver = _manageserver;
        }
        public List<tnotice> GetListTop(int top,int type)
        {
            return GetEntityLisrByWhere(st=>st.isStart==1).
                Where(o=>o.C_type==type.ToString()).
                OrderByDescending(o=>o.noticetime).Take(top).ToList();
        }

        public DataResults<NoticeView> GetNoticeData(DPage page)
        {
            DataResults<NoticeView> result = new DataResults<NoticeView>();
            if (page == null) page = new DPage();
            Expression<Func<tnotice, bool>> fun = w => w != null;
            if (!string.IsNullOrEmpty(page.Keywords))
                fun = w => w != null && w.content.Contains(page.Keywords) || w.title.Contains(page.Keywords);
            var data = GetEntityLisrByWhere(fun)
                .OrderBy(w => w.noticetime)
                .OrderByDescending(w => w.id)
                .Skip((page.PageIndex - 1) * page.PageSize)
                .Take(page.PageSize)
                .Select(w => new NoticeView
                {
                    content = w.content,
                    noticetime = w.noticetime.Value.ToString("yyyy-MM-dd HH:mm:ss"),
                    C_author = w.C_author,
                    C_type = w.C_type,
                    TypeName = Enum.GetName(typeof(NoticeType), int.Parse(w.C_type)),
                    id = w.id,
                    isStart = w.isStart.Value,
                    title = w.title
                });
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            result.Keywords = page.Keywords;
            result.TotalCount = GetCount(fun);
            result.Data = data.ToList();
            return result;
        }

        public DataResults<UserRechargelogView> GetUserRechargeData(DPagePara page)
        {
            DataResults<UserRechargelogView> result = new DataResults<UserRechargelogView>();
            Expression<Func<tuserrechargelog, bool>> fun = w => w != null;
            if (page == null) page = new DPagePara();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            result.starttime = page.starttime;
            result.endtime = page.endtime;
            result.ChangeType = page.ChangeType;//赠送受赠
            using (texas_2021Entities db = new texas_2021Entities())
            {
              //  IQueryable<tuserrechargelog> data = db.tuserrechargelog;
                if (!string.IsNullOrEmpty(page.Keywords))
                {
                    int.TryParse(page.Keywords,out int uid);
                    fun = fun.And(t=>t.userid == uid || t.fromuserid==uid);
                }
                if (page.ChangeType!=0)
                {
                    fun = fun.And(t => t.cointype == page.ChangeType);
                }
                if (page.starttime!=null && page.endtime!=null)
                {
                    fun = fun.And(t => t.createtime>= page.starttime&& t.createtime<=page.endtime);
                }
                
                List<tuserrechargelog> data = db.tuserrechargelog.Where(fun).OrderByDescending(x=>x.createtime).Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList();
                result.TotalCount = db.tuserrechargelog.Count();
                var _data = from a in data
                            join b in db.tuser on a.userid equals b.UserID
                            join c in db.tuser on a.fromuserid equals c.UserID
                            orderby a.createtime descending
                            select new UserRechargelogView
                            {
                                id = a.id,
                                cointype = a.cointype,
                                createtime = a.createtime,
                                currGold = a.currGold/100,
                                oldGold = a.oldGold/100,
                                fromtype = a.fromtype,
                                money = a.money/100,
                                userid = a.userid,
                                fromuserid = a.fromuserid,
                                UserName = b.wechatName,
                                fromUserName = c.wechatName,
                                remarks =  a.remarks
                            };

                result.TotalMoney = db.tuserrechargelog.Sum(t=> (decimal?)Math.Abs(t.money.Value / 100))?.ToString("#0.00");
                result.Data = _data.ToList();//.Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList();
                result.Message = "获取成功!";
            }
            return result;
        }

        public DataResult NoticeAdd(NoticeView model)
        {
            DataResult result = new DataResult() {Message = "添加成功" };
            if (string.IsNullOrEmpty(model.content) || string.IsNullOrEmpty(model.title))
            {
                result.Code = (int)Status.fail;
                result.Message = "公告内容或者公告标题为空";
                return result;
            }
            var lengh = model.content.Length;

            if (model.id == 0)//添加
            {
                var data = AddEntity(new tnotice
                {
                    content = model.content,
                    C_author = model.C_author,
                    C_type = model.C_type,
                    isStart = model.isStart,
                    title = model.title,
                    noticetime = DateTime.Now,
                    Width = model.Width,
                    Height = model.Height,
                    TcPicUrl=model.TcPicUrl
                });
                manageserver.AddActionlog(ActionEnum.Add, OptAction.publicnotice, ActionEnum.Delete.ToDescription() + OptAction.publicnotice.ToDescription() + "数据条数:1");
                if (data == null)
                {
                    result.Code = (int)Status.fail;
                    result.Message = "添加失败";
                    return result;
                }
            }
            else
            {//编辑
                result.Message = "更新成功";
                var entity = new tnotice();
                entity = GetEntityByID(model.id);
                if (entity == null)
                {
                    result.Code = (int)Status.fail;
                    result.Message = "没有找到该条数据";
                    return result;
                }
                entity.content = model.content;
                entity.title = model.title;
                entity.C_author = model.C_author;
                entity.C_type = model.C_type;
                entity.isStart = model.isStart;
                entity.TcPicUrl = model.TcPicUrl;
                manageserver.AddActionlog(ActionEnum.Edit, OptAction.publicnotice, ActionEnum.Edit.ToDescription() + 
                    OptAction.publicnotice.ToDescription() + "数据条数:1");
                if (UpdateEntity(entity) == null)
                {
                    result.Code = (int)Status.fail;
                    result.Message = "更新失败";
                    return result;

                };
            }
            return result;
        }

        public DataResult NoticeDelById(string ids)
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
            manageserver.AddActionlog(ActionEnum.Delete, OptAction.publicnotice, ActionEnum.Delete.ToDescription() + OptAction.publicnotice.ToDescription() + "，数据条数:" + noticeIds.Count());
            result.Message = "删除成功";
            return result;
        }

        public DataResult RechargeDel(string ids)
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
                var emyitty = db.tuserrechargelog.Find(id);
                db.tuserrechargelog.Remove(emyitty);
                }
                db.SaveChanges();
            }
            result.Message = "删除成功";
            return result;
        }
    }
}
