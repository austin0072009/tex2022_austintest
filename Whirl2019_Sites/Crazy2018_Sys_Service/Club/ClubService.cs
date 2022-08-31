using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Interface.Club;
using Crazy2018_Sys_ViewEntity.Club;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Service.Club
{
   public class ClubService: BaseService<tclub, int, texas_2021Entities>, IClubService
    {


        public DataResults<ClubView> GetListGlubData(DPagePara page)
        {
            DataResults<ClubView> result = new DataResults<ClubView>();
            Expression<Func<tclub, bool>> fun = w => w != null;
            if (page == null) page = new DPagePara();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            using (texas_2021Entities dbhelper = new texas_2021Entities())
            {

                List<tclub> roomdata = new List<tclub>();
              
                if (!string.IsNullOrEmpty(page.Keywords))
                {
                    fun = fun.And(st => st.Title.ToString().Contains(page.Keywords)|| st.idx.ToString().Contains(page.Keywords));
                }

               var _data = GetEntityLisrByWhere(fun);//dbhelper.tclub;
                var data = from a in _data
                           join b in dbhelper.tuser on a.UserId equals b.UserID into cc
                           from cca in cc.DefaultIfEmpty()
                           orderby a.CreateDate descending
                           select new ClubView
                           {
                               CreateDate = a.CreateDate.Value,
                               idx = a.idx,
                               UserId = (int)a.UserId,
                               State = (int)a.State,
                               UserName = cca.wechatName,
                               childs = a.childs,
                               Title = a.Title,
                               Content = a.Content,
                               limitcount = (int)a.limitcount,
                               search = (bool)a.search,
                               manager = (bool)a.manager,
                               gold = (long)a.gold,
                               alliancid=(int)a.alliancid,
                               applyGoldList=a.applyGoldList,
                               closeapply=(bool)a.closeapply,
                               diam=(long)a.diam,
                               lv=(int)a.lv,
                               applyUserID=a.applyUserID,
                               Loc=a.Loc,
                               
                           };

                result.TotalCount = GetCount(fun);
                result.Data = data.
                    //OrderByDescending(o => o.CreateDate).
                    //Skip((page.PageIndex - 1) * page.PageSize).
                    //Take(page.PageSize).
                    //ToList().
                    Select(a => new ClubView
                    {
                        CreatTime = a.CreateDate.ToString("yyyy-MM-dd HH:mm:ss"),
                        idx = a.idx,
                        UserId = (int)a.UserId,
                        State = (int)a.State,
                        UserName = a.UserName,
                        childs = a.childs,
                        Title = a.Title,
                        Content = a.Content,
                        limitcount = (int)a.limitcount,
                        search = (bool)a.search,
                        manager = (bool)a.manager,
                        gold = (long)a.gold,
                        alliancid = a.alliancid,
                        applyGoldList = a.applyGoldList,
                        closeapply = a.closeapply,
                        diam = (long)a.diam,
                        lv = a.lv,
                        applyUserID = a.applyUserID,
                        Loc = a.Loc,
                        jsonchilds = JsonHelper.JSONToObject<List<ClubChildView>>(a.childs),
                        
                    }).ToList();
                result.Message = "获取成功!";
                return result;
            }
        }

        public DataResult Update(string newidx, int idx)
        {
            DataResult result = new DataResult();
            int intcode = int.Parse(newidx);
            using (texas_2021Entities db=new texas_2021Entities())
            {
               var newentity = db.tclub.Where(x => x.idx == intcode).FirstOrDefault();

                if (newentity != null)
                {
                    result.Code = (int)Status.fail;
                    result.Message = "已存在相同的俱乐部id";
                    return result;
                }
               
                var entity = db.tclub.Where(x => x.idx == idx).FirstOrDefault();
                var chlid = JsonHelper.JSONToObject<List<ClubChild>>(entity.childs);
                if (chlid.Count>1)
                {
                    result.Code = (int)Status.fail;
                    result.Message = "该俱乐部下已存在成员，不允许修改";
                    return result;
                }
                     
                if (entity==null)
                {
                    result.Code = (int)Status.fail;
                    result.Message = "俱乐部不存在";
                    return result;
                }
                //tclub club = new tclub();
                //club = entity;
                //club.idx = intcode;
              //  entity.idx = intcode;

                StringBuilder strSql = new StringBuilder();
                strSql.Append(" update tclub set idx="+intcode );
                strSql.Append(" where idx="+idx);
                var connestr = db.Database.Connection.ConnectionString;// new DbContextBase().Database.Connection.ConnectionString;
                bool dt = SqlQueryUpdate(strSql.ToString(), connestr);
                if (dt == false)
                {
                    result.Code = (int)Status.fail;
                    result.Message = "修改失败";
                    return result;
                }
              
            }
      
            return result;
            
        }


        /// <summary>
        /// 获取club users
        /// </summary>
        /// <param name="idx"></param>
        /// <returns></returns>
        public DataResults<ClubChildView> GetListuserData(DPagePara page,int idx) {

            DataResults<ClubChildView> result = new DataResults<ClubChildView>();
            List<ClubChildView> chlids = new List<ClubChildView>();
            if (page == null) page = new DPagePara();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            using (texas_2021Entities db=new texas_2021Entities())
            {
              var club=  db.tclub.Where(x => x.idx == idx).SingleOrDefault();

                if (club != null)
                {
                    chlids = JsonHelper.JSONToObject<List<ClubChildView>>(club.childs);

                    if (!string.IsNullOrEmpty(page.Keywords))
                    {
                        chlids = chlids.Where(st => st.userid.ToString().Contains(page.Keywords)).ToList();
                    }
                    result.TotalCount = chlids.Count();
                    var _data = from a in chlids
                                join b in db.tuser on a.userid equals b.UserID
                                orderby a.userid descending
                                select new ClubChildView
                                {
                                    
                                    userid = a.userid,
                                    username=b.wechatName,
                                    rate=a.rate,
                                    playcount=a.playcount,
                                    _ismanager=a._ismanager,
                                    cgold=a.cgold
                                   
                                };

                    result.Data = _data.Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList();
                    result.Message = "获取成功!";
                }
               
            }
            
            return result;
        }


        /// <summary>
        /// 根据用户id 获取俱乐部集合
        /// </summary>
        /// <param name="page"></param>
        /// <param name="uid"></param>
        /// <returns></returns>
        public DataResults<ClubView> GetClubListByUid(DPagePara page,int uid)
        {
            DataResults<ClubView> result = new DataResults<ClubView>();
            if (page == null) page = new DPagePara();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            using (texas_2021Entities dbhelper = new texas_2021Entities())
            {

                List<tclub> roomdata = new List<tclub>();
                IQueryable<tclub> _data = dbhelper.tclub.Where(x=>x.UserId==uid);
                if (!string.IsNullOrEmpty(page.Keywords))
                {
                    _data = _data.Where(st => st.Title.ToString().Contains(page.Keywords)|| st.idx.ToString().Contains(page.Keywords));
                }
              

                var data = from a in _data
                           join b in dbhelper.tuser on a.UserId equals b.UserID into cc
                           from cca in cc.DefaultIfEmpty()
                           orderby a.CreateDate descending
                           select new ClubView
                           {
                               CreateDate = a.CreateDate.Value,
                               idx = a.idx,
                               UserId = (int)a.UserId,
                               State = (int)a.State,
                               UserName = cca.wechatName,
                               childs = a.childs,
                               Title = a.Title,
                               Content = a.Content,
                               limitcount = (int)a.limitcount,
                               search = (bool)a.search,
                               manager = (bool)a.manager,
                               gold = (long)a.gold,
                               alliancid = (int)a.alliancid,
                               applyGoldList = a.applyGoldList,
                               closeapply = (bool)a.closeapply,
                               diam = (long)a.diam,
                               lv = (int)a.lv,
                               applyUserID = a.applyUserID,
                               Loc = a.Loc,

                           };

                result.TotalCount = data.Count();
                result.Data = data.
                    OrderByDescending(o => o.CreateDate).
                    Skip((page.PageIndex - 1) * page.PageSize).
                    Take(page.PageSize).
                    ToList().
                    Select(a => new ClubView
                    {
                        CreatTime = a.CreateDate.ToString("yyyy-MM-dd HH:mm:ss"),
                        idx = a.idx,
                        UserId = (int)a.UserId,
                        State = (int)a.State,
                        UserName = a.UserName,
                        childs = a.childs,
                        Title = a.Title,
                        Content = a.Content,
                        limitcount = (int)a.limitcount,
                        search = (bool)a.search,
                        manager = (bool)a.manager,
                        gold = (long)a.gold,
                        alliancid = a.alliancid,
                        applyGoldList = a.applyGoldList,
                        closeapply = a.closeapply,
                        diam = (long)a.diam,
                        lv = a.lv,
                        applyUserID = a.applyUserID,
                        Loc = a.Loc,
                        jsonchilds = JsonHelper.JSONToObject<List<ClubChildView>>(a.childs),

                    }).ToList();
                result.Message = "获取成功!";
                return result;
            }
        }


    }
}
