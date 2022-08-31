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
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using Crazy2018_Sys_ViewEntity.GameCore;
using Crazy2018_Sys_Entity;
using System.Web;
using static Crazy2018_Sys_Common.TableUtil;

namespace Crazy2018_Sys_Service.Game
{
    public class EntityCardService : BaseService<TEntityCard, int, DBContextHelper>, IEntityCardService
    {

     

        public DataResult CardTypeDel(string ids)
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
                    var emyitty = db.TEntityCardTypes.Find(id);
                    db.TEntityCardTypes.Remove(emyitty);
                }
                db.SaveChanges();
            }
            result.Message = "删除成功";
            return result;
        }

        public List<TEntityCardType> GetCardType()
        {
            try
            {
                using (DBContextHelper db = new DBContextHelper())
                {
                    return db.TEntityCardTypes.ToList();
                }
            }
            catch (Exception)
            {

                return new List<TEntityCardType>();
            }
        }

        public DataResults<TEntityCardType> GetCardTypeList(DPagePara page)
        {
            DataResults<TEntityCardType> result = new DataResults<TEntityCardType>();
            Expression<Func<TEntityCardType, bool>> fun = w => w != null;
            if (page == null) page = new DPagePara();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            try
            {
                using (DBContextHelper db = new DBContextHelper())
                {
                   
                    if (!string.IsNullOrEmpty(page.Keywords))
                    {
                        fun = fun.And(st => st.Name == page.Keywords);
                    }
                    List<TEntityCardType> data = db.TEntityCardTypes.OrderByDescending(t => t.CreateTime).Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList();
                    var _data = from a in data
                                orderby a.CreateTime descending
                                select a;


                    result.TotalCount = _data.Count();
                    result.Data = AutoMapper.MapToList<TEntityCardType, TEntityCardType>(_data);
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

        public bool SubmitCardTypEntity(TEntityCardType entity)
        {
            var _entity = entity.GetCommetEntity();
            using (DBContextHelper db = new DBContextHelper())
            {
                if (_entity.ID > 0)
                {

                    DbSet<TEntityCardType> dbSet = db.Set<TEntityCardType>();
                    DbEntityEntry<TEntityCardType> entry = db.Entry<TEntityCardType>(_entity);
                    if (entry.State == EntityState.Detached)
                    {
                        dbSet.Attach(entity);
                        entry.State = EntityState.Modified;
                    }
                    db.SaveChanges();
                    return true;
                }
                else
                {
                    db.TEntityCardTypes.Add(_entity);
                    db.SaveChanges();
                    return false;
                }
            }

        }

        public DataResults<tentitycardView> GetCardList(DPagePara page)
        {
            DataResults<tentitycardView> result = new DataResults<tentitycardView>();
            if (page == null) page = new DPagePara();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            Expression<Func<TEntityCard, bool>> fun = w => w != null;
            if (page.typeid != -1)
            {
                fun = fun.And(w => w.CardType == page.typeid);
            }
            if (page.IsExpiration != -1)
            {
                if (page.IsExpiration == 1)
                {
                    fun = fun.And(w => w.ExpirationTime < DateTime.Now);//过期
                }
                else
                {
                    fun = fun.And(w => w.ExpirationTime >= DateTime.Now);//未过期
                }
            }
            if (page.Isuse != -1)
            {
                fun = fun.And(w => w.IsUse == page.Isuse);//过期
            }
            try
            {
                using (DBContextHelper db = new DBContextHelper())
                {
                  
                    if (!string.IsNullOrEmpty(page.Keywords))
                    {
                        //AddNamedata = data.Where(st => st.AddName == page.Keywords);

                        fun = fun.And(w => w.CardNum.ToString().Contains(page.Keywords) || w.AddName.Contains(page.Keywords) || w.ID.ToString() == page.Keywords);
                    }
                    List<TEntityCard> data = GetEntityLisrByWhere(fun).OrderByDescending(a => a.CreateTime).Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList();//db.TEntityCards;

                    var _data = (from a in data
                                 join b in db.TEntityCardTypes on a.CardType equals b.ID
                                 select new tentitycardView
                                 {
                                      Id = (int)a.ID,
                                     TypeId = (int)a.CardType,
                                     TypeName = b.Name,
                                     AddName = a.AddName,
                                     CardNum = a.CardNum,
                                     CardPrice = a.CardPrice,
                                     GoldPrice = a.GoldPrice,
                                     TatolPrice = a.TatolPrice,
                                     CreateTime = a.CreateTime == null ? "" : a.CreatTime.ToString(),
                                     ExpirationTime = a.ExpirationTime == null ? "" : a.ExpirationTime.ToString(),
                                     CreatTime = a.CreatTime == null ? "" : a.CreatTime.ToString(),
                                     // Number= b.CardNum,
                                     IsUse = a.IsUse == 0 ? "未使用" : "已使用",
                                     PassWord = a.PassWord,
                                     IsDel = a.IsDel == true ? "已删除" : "未删除",
                                     IsExpiration = a.ExpirationTime >= DateTime.Now ? "未过期" : "已过期"
                                 }).ToList();
            

                    result.TotalCount = _data.Count();
                    result.Data = _data;
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

        public DataResults<tentitycardView> GetCardGroup(DPagePara page)
        {
            DataResults<tentitycardView> result = new DataResults<tentitycardView>();
            if (page == null) page = new DPagePara();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            Expression<Func<TEntityCard, bool>> fun = w => w != null;
            if (page.typeid != -1)
            {
                fun = fun.And(w => w.CardType == page.typeid);
            }
            try
            {
                using (DBContextHelper db = new DBContextHelper())
                {
                   
                    if (!string.IsNullOrEmpty(page.Keywords))
                    {
                        fun = fun.And(w => w.CardNum.ToString().Contains(page.Keywords));
                    }
                    List<TEntityCard> data = GetEntityLisrByWhere(fun).Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList();// db.TEntityCards.Where(x=>x.IsUse==0);
                    var _data = from a in data
                                 join b in db.TEntityCardTypes on a.CardType equals b.ID
                                 group a by new { a.CardType,b.Name } into g
                                 select new tentitycardView
                                 {
                                     TypeId = (int)g.Key.CardType,
                                     Name=g.Key.Name,
                                 
                                     Number = g.Count(),
                                   
                                 };

                  
                    result.TotalCount = _data.Count();
                    result.Data = _data.ToList();//.OrderBy(x=>x.TypeId).Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList();
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



        public DataResult AddCard(TEntityCard entityCard)
        {
            DataResult result = new DataResult();
         
            using (DBContextHelper db = new DBContextHelper())
            {
                TEntityCardType catype = db.TEntityCardTypes.Where(x => x.ID == entityCard.CardType).First();
                if (catype!=null)
                {
                    //TEntityCard tcard = new TEntityCard();
                    //tcard.AddName = cardname;
                    //tcard.CardType = cardtype;
                    //tcard.CardNum = cardnumber;
                    //tcard.CardPrice = catype.CardPrice;
                    //tcard.GoldPrice = catype.GoldPrice;
                    //tcard.CreateTime = DateTime.Now;
                    //tcard.IsUse = 0;//0 未使用 1 已使用
                    //tcard.ExpirationTime = ExpirationTime; //new DateTime().AddMonths(3 - ((DateTime.Now.Month - 1) % 3));//有效期三个月
                    //tcard.PassWord = pwd;
                    db.TEntityCards.Add(entityCard);
               
                    
                }

                db.SaveChanges();
                //导出新增的实体卡
              
            }
            result.Message = "添加成功";
            
            return result;
        }

        public DataResult CardDel(string ids)
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
                    var emyitty = db.TEntityCards.Find(id);
                    db.TEntityCards.Remove(emyitty);
                }
                db.SaveChanges();
            }
            result.Message = "删除成功";
            return result;
        }


        public DataResults<tentitycardView> GetCardData(DPagePara page)
        {

            DataResults<tentitycardView> result = new DataResults<tentitycardView>();
            if (page == null) page = new DPagePara();
            result.Keywords = page.Keywords;
            //result.PageIndex = page.PageIndex;
            //result.PageSize = page.PageSize;
            //result.isExport = page.isExport;
            Expression<Func<TEntityCard, bool>> fun = w => w != null;
            if (page.typeid != -1)
            {
                fun = fun.And(w => w.CardType == page.typeid);
            }

            if (!string.IsNullOrEmpty(page.Keywords))
            {
                //AddNamedata = data.Where(st => st.AddName == page.Keywords);

                fun = fun.And(w => w.AddName == page.Keywords);// w.CardNum.ToString().Contains(page.Keywords)  || w.ID.ToString() == page.Keywords);
            }
            //if (page.IsExpiration != -1)
            //{
            //    if (page.IsExpiration == 1)
            //    {
            //        fun = fun.And(w => w.ExpirationTime < DateTime.Now);//过期
            //    }
            //    else
            //    {
            //        fun = fun.And(w => w.ExpirationTime >= DateTime.Now);//未过期
            //    }
            //}
            //if (page.Isuse != -1)
            //{
            //    fun = fun.And(w => w.IsUse == page.Isuse);//过期
            //}
            try
            {
                using (DBContextHelper db = new DBContextHelper())
                {

                    List<TEntityCard> data =GetEntityLisrByWhere(fun).OrderByDescending(t => t.CreatTime).Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList();// db.TEntityCards.Where(fun);
                    // var userdata = userlist.ToList();
                    var _data = from a in data
                                join b in db.TEntityCardTypes on a.CardType equals b.ID

                                select new tentitycardView
                                {
                                    Id = (int)a.ID,
                                    TypeId = (int)a.CardType,
                                    TypeName = b.Name,
                                    AddName = a.AddName,
                                    CardNum = a.CardNum,
                                    CardPrice = a.CardPrice,
                                    GoldPrice = a.GoldPrice,
                                    TatolPrice = a.TatolPrice,
                                    CreateTime = a.CreateTime == null ? "" : a.CreatTime.ToString(),
                                    ExpirationTime = a.ExpirationTime == null ? "" : a.ExpirationTime.ToString(),
                                    CreatTime = a.CreatTime == null ? "" : a.CreatTime.ToString(),
                                    // Number= b.CardNum,
                                    IsUse = a.IsUse == 0 ? "未使用" : "已使用",
                                    PassWord = a.PassWord,
                                    IsDel = a.IsDel == true ? "已删除" : "未删除",
                                    IsExpiration = a.ExpirationTime >= DateTime.Now ? "未过期" : "已过期"
                                };


                    if (page.isExport == 1)
                    {
                        Dictionary<string, string> headdec = new Dictionary<string, string>();
                        headdec.Add("Id", "主键");
                        headdec.Add("PassWord", "密码");
                        headdec.Add("CardNum", "编码");
                        headdec.Add("CardPrice", "金额");
                        headdec.Add("GoldPrice", "金币数量");
                        headdec.Add("CreateTime", "创建时间");
                        headdec.Add("ExpirationTime", "过期时间");
                        headdec.Add("TypeName", "类型名称");
                        headdec.Add("AddName", "实体卡名称");

                        var serverpath = HttpContext.Current.Server.MapPath("/ExcelFile/ExCardData.xls");
                        var exportdata = _data.OrderByDescending(t => t.CreatTime).ToList().Select(a => new tentitycardView
                        {
                            Id = (int)a.Id,
                            PassWord = a.PassWord,
                            CardNum = a.CardNum,
                            CardPrice = a.CardPrice,
                            GoldPrice = a.GoldPrice,
                            CreateTime = a.CreatTime,
                            ExpirationTime = a.ExpirationTime,
                            IsUse=a.IsUse,
                            TypeName=a.TypeName,
                            AddName=a.AddName,

                        }).ToList();



                        var bytedata = NPOIExcel.ToExcel(exportdata, headdec, serverpath);
                        result.filebyte = bytedata;
                    }
                    result.isExport = 1;
                    result.Message = "获取成功";
                    result.TotalCount = _data.Count();
                    result.Data = _data.ToList();// _data.OrderByDescending(t => t.CreatTime).Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList();
                }

            }
            catch (Exception ex)
            {
                Log.Debug("获取充值日志", ex.Message);
                result.Message = ex.Message;
                result.Code = (int)Status.fail;
            }
            return result;
        }
      
    }
    public static class EntityCardServiceEx
    {
        public static TEntityCardType GetCommetEntity(this TEntityCardType entity)
        {
            entity.TotalPrice = entity.CardPrice * entity.CardNum;
            entity.CreateTime = DateTime.Now;
            entity.AddName = Utils.GetCookie("DTRememberName");

            return entity;
        }
    }
}
