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
using Crazy2018_Sys_ViewEntity.GameCore;
using static Crazy2018_Sys_Common.DTEnums;

namespace Crazy2018_Sys_Service
{
    public class FeedBackService : BaseService<tfeedback, int, texas_2021Entities>, IFeedBackService
    {

        IManageService manageLogservice;
        ISysConfigService sysconfig;
        IGameUserService userserver;

        public FeedBackService(IManageService _manageLogservice,
            ISysConfigService _sysconfig,
            IGameUserService _userserver)
        {
            manageLogservice = _manageLogservice;
            sysconfig = _sysconfig;
            userserver = _userserver;
        }
        public DataResults<FeedBackView> GetFeedBackData(DPage page)
        {
            DataResults<FeedBackView> result = new DataResults<FeedBackView>();
            if (page == null) page = new DPage();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            try
            {
                Expression<Func<tfeedback, bool>> fun = w => w != null;
                if (!string.IsNullOrEmpty(page.Keywords))
                    fun = fun.And(w=>w.content.Contains(page.Keywords) || w.tel.Contains(page.Keywords));
                var data = GetEntityLisrByWhere(fun);
                result.TotalCount = data.Count;
                result.Data = data.OrderByDescending(w => w.CreateDate.Value)
                    .Skip((page.PageIndex - 1) * page.PageSize)
                    .Take(page.PageSize).ToList()
                    .Select(w => new FeedBackView
                    {
                        Content = w.content,
                        CreatTime = w.CreateDate.Value.ToString("yyyy-MM-dd HH:mm:ss"),
                        Feedbacktypename = Enum.GetName(typeof(feedbackEnum), w.feedbacktype.Value),
                        Tel = w.tel,
                        Id=w.id,
                        UserName = w.UserName,
                        fileurl  = w.fileurl==null?"": w.fileurl,
                        urlname = w.fileurl == null?"":"下载"
                    }).ToList();
                result.Message = "获取数据成功";
            }
            catch (Exception ex)
            {

                Log.Error("获取反馈信息", ex.Message);
                result.Code = (int)Status.fail;
                result.Message = "获取数据失败";
            }
            return result;

        }
        public DataResult FeedBackDelById(string ids)
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
            result.Message = "删除成功";
            return result;
        }

        public DataResults<userloginlogView> GetUserLoginData(DPage page)
        {
            DataResults<userloginlogView> result = new DataResults<userloginlogView>();
            if (page == null) page = new DPage();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            try
            {
                using (snscenterwhirlEntities db = new snscenterwhirlEntities())
                {
                    List<userloginlog> data = new List<userloginlog>();
                    if (!string.IsNullOrEmpty(page.Keywords))
                    {
                        var keyuserid = int.Parse(page.Keywords);
                        data = db.userloginlog.Where(st => st.UserId == keyuserid).OrderByDescending(o => o.CreateTime).
                                 Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList();

                        result.TotalCount = db.userloginlog.Where(st => st.UserId == keyuserid).OrderByDescending(o => o.CreateTime).Count();
                    }
                    else
                    {
                        result.TotalCount = db.userloginlog.OrderByDescending(o => o.CreateTime).Count();
                        data = db.userloginlog.OrderByDescending(o => o.CreateTime).
                             Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList();
                    }


                    using (texas_2021Entities dbhelper = new texas_2021Entities())
                    {
                        var _data = from a in data
                                    join b in dbhelper.tuser on a.UserId equals b.UserID
                                    orderby a.CreateTime descending
                                    select new userloginlogView
                                    {
                                        Id= a.Id,
                                        UserId = a.UserId,
                                        UserName = b.wechatName,
                                        CreateTime = a.CreateTime,
                                        IP = a.IP,
                                        MachineCode = a.MachineCode,
                                        MachineTypeName = a.MachineType == 1 ?"Android":"IOS"
                                    };

                        result.Data = _data.ToList();
                        result.Message = "获取成功";
                        return result;
                    }


                }
            }
            catch (Exception ex)
            {

                result.Message = "获取失败";
                return result;
            }
        }

        public DataResult DelUserLoginLog(string ids)
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
                using (snscenterwhirlEntities db = new snscenterwhirlEntities())
                {
                    var emyitty = db.userloginlog.Find(id);
                    db.userloginlog.Remove(emyitty);
                    db.SaveChanges();
                }
            }
            result.Message = "删除成功";
            return result;
        }

        public DataResults<limitdevice> GetlimitdeviceData(DPage page)
        {
            DataResults<limitdevice> result = new DataResults<limitdevice>();
            if (page == null) page = new DPage();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            try
            {
                using (snscenterwhirlEntities db = new snscenterwhirlEntities())
                {
                    List<limitdevice> data = new List<limitdevice>();
                    if (!string.IsNullOrEmpty(page.Keywords))
                    {
                       
                        data = db.limitdevice.Where(st => st.DeviceID.Contains(page.Keywords)).OrderByDescending(o => o.AppTime).
                                 Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList();

                        result.TotalCount = db.limitdevice.Where(st => st.DeviceID.Contains(page.Keywords)).OrderByDescending(o => o.AppTime).Count();
                    }
                    else
                    {
                        result.TotalCount = db.limitdevice.OrderByDescending(o => o.AppTime).Count();
                        data = db.limitdevice.OrderByDescending(o => o.AppTime).
                             Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList();
                    }

                        var _data = from a in data
                                    select a;

                        result.Data = _data.ToList();
                        result.Message = "获取成功";
                        return result;
                    

                    //limitdeviceView
                }
            }
            catch (Exception ex)
            {
                result.Data = new List<limitdevice>();
                result.Message = "fail";
                return result;
            }
        }

        public DataResult DellimitdeviceLog(string ids)
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
                using (snscenterwhirlEntities db = new snscenterwhirlEntities())
                {
                    var emyitty = db.limitdevice.Find(id);
                    db.limitdevice.Remove(emyitty);
                    db.SaveChanges();
                }
            }
            result.Message = "删除成功";
            return result;
        }

        public bool SubmitFormlimitLogin(string dev, int Id,string remark)
        {
            try
            {
                using (snscenterwhirlEntities db = new snscenterwhirlEntities())
                {
                    if (Id == 0)
                    {
                        limitdevice entity = new limitdevice()
                        {
                            DeviceID = dev,
                            AppTime = DateTime.Now,
                            Remark = remark
                        };
                        db.limitdevice.Add(entity);
                        db.SaveChangesAsync();
                        manageLogservice.AddActionlog(ActionEnum.limit, OptAction.IPorCode, 
                            ActionEnum.limit.ToDescription() + OptAction.IPorCode.ToDescription() + "登录，机器码:" + dev);
                        return true;

                    }
                    else
                    {
                        var enrtity = db.limitdevice.Find(Id);
                        enrtity.DeviceID = dev;
                        enrtity.Remark = remark;
                        db.SaveChangesAsync();
                        manageLogservice.AddActionlog(ActionEnum.limit, OptAction.IPorCode,
                             ActionEnum.limit.ToDescription() + OptAction.IPorCode.ToDescription() + "登录，机器码:" + dev);
                        return true;

                    }
                }
            }
            catch (Exception)
            {

                return false;
            }
            
            
        }

        public DataResults<AgentInsurancePoolView> GetBigAgentInsuranceData(DPagePara page)
        {
            DataResults<AgentInsurancePoolView> result = new DataResults<AgentInsurancePoolView>();
            if (page == null) page = new DPagePara();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            result.userid = page.userid;

            using (texas_2021Entities db = new texas_2021Entities())
            {

                IQueryable<tjackpotlog> data = db.tjackpotlog.Where(t=>t.ChangeType==2 && t.JackpotType== (int)BigPrizeType.保险池 && t.IsSettlement==false);

                if (!string.IsNullOrEmpty(page.Keywords))
                {
                    int.TryParse(page.Keywords,out int uid);
                    data = data.Where(t=>t.Owner== uid);
                }

                var rateconfig = sysconfig.GetValueByKey("Insrate");
                decimal rate = rateconfig == null ? 0 : Convert.ToInt32(rateconfig.Val)/100m;


                var _data = from a in data
                            join b in db.tuser on a.Owner equals b.UserID
                            where b.vlevel==8
                            group a by new { b.UserID,b.wechatName } into aa
                            select new AgentInsurancePoolView
                            {
                                UserId = aa.Key.UserID,
                                UName = aa.Key.wechatName,
                                Gold = aa.Max(t=>t.Gold.Value / 100 * rate)
                            };

                result.TotalCount = _data.Count();
                result.Data = _data.OrderByDescending(t => t.UserId).Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList();
                result.Message = "获取成功";
                return result;

            }
        }

        public DataResult UpdateJackpotlog(int userid)
        {
            DataResult rdata = new DataResult();
           var user = userserver.GetEntityByID(userid);

            if (user!=null)
            {
                if (user.vlevel==8)
                {
                    using (texas_2021Entities db = new texas_2021Entities())
                    {
                        var jacklist = db.tjackpotlog.Where(t=>t.Owner== userid & t.IsSettlement==false).ToList();
                        jacklist.ForEach(t=> 
                        {
                            t.IsSettlement = true;
                        });
                        db.SaveChangesAsync();
                        rdata.Code = (int)Status.Success;
                        rdata.Message = "操作成功";
                    }

                }
                else
                {
                    rdata.Code = (int)Status.fail;
                    rdata.Message = "此人非总代";
                }
            }
            else
            {
                rdata.Code = (int)Status.fail;
                rdata.Message = "没有这个总代";
            }
            return rdata;
        }
    }
}
