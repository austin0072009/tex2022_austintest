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

    public class tgameinfoService : BaseService<tgameinfo, int, h5game_2021Entities>, ItgameinfoService
    {

        string gurl = "http://106.13.222.130";
        //public DataResults<GameInfoView> GetGameInfoData()
        //{
        //    DataResults<GameInfoView> result = new DataResults<GameInfoView>();

        //    try
        //    {
        //        Expression<Func<tgameinfo, bool>> fun = w => w != null;
        //        fun = fun.And(x => x.type != 2);
        //        var data = GetEntityLisrByWhere(fun);
        //        result.TotalCount = data.Count;
        //        result.Data = data.OrderBy(w => w.Sort)
        //            .Select(w => new GameInfoView
        //            {
        //                CreatTime = w.modifyTime.Value.ToString("yyyy-MM-dd HH:mm:ss"),
        //                GameIntroduce = w.desc,
        //                GameRule = w.gameRule,
        //                ID = w.id,
        //                icon = w.icon,
        //                IsEnableDesc = w.isHot.ToString(),
        //                ModifyUser = w.modifyUser,
        //                Name = w.name,
        //                IsEnable = w.isopen.Value,
        //                gameurl = w.gameurl,
        //                Sort = w.Sort.Value,
        //                platType = w.platType == 0 ? "客户端" : w.platType == 1 ? "tp" : "jdb",
        //                type = (int)w.type,
        //                IsRun = w.IsRun == 0 ? "正常" : "正在维护中..."
        //            }).ToList();
        //        result.Message = "获取数据成功";
        //    }
        //    catch (Exception ex)
        //    {
        //        Log.Error("获取游戏信息", ex.Message);
        //        result.Code = (int)Status.fail;
        //        result.Message = "获取数据失败";
        //    }
        //    return result;
        //}

        public DataResults<GameInfoView> GetGameInfoData()
        {
            DataResults<GameInfoView> result = new DataResults<GameInfoView>();
            try
            {
                string sql = @"select 
IFNULL(a.modifyTime,'') as CreatTime,
IFNULL(a.`desc`,'') as GameIntroduce,
IFNULL(a.gameRule,'') as GameRule,
IFNULL(a.id,0) as ID,
CONCAT('" + gurl + "',a.icon) as icon,IFNULL(a.isHot,1) as IsEnableDesc,IFNULL(a.modifyUser,'') as ModifyUser,IFNULL(a.`name`,'') as Name,a.isopen as IsEnable,CONCAT('" + gurl + "',a.gameurl) as gameurl," + "IFNULL(a.Sort,0) as Sort,IFNULL(a.platType,0) as platType,IFNULL(a.type,0) as type,IFNULL(a.IsRun,0) as IsRun  from tgameinfo a where a.type!=2  and a.isHot=1 ORDER BY a.Sort";

                using (h5game_2021Entities db = new h5game_2021Entities())
                {

                    result.TotalCount = db.Database.SqlQuery<GameInfoView>(sql).ToList().Count;
                    result.Data = db.Database.SqlQuery<GameInfoView>(sql).ToList();
                }
            }
            catch (Exception ex)
            {

                Log.Error("获取游戏信息", ex.Message);
                result.Code = (int)Status.fail;
                result.Message = "获取数据失败";
            }
            return result;
        }
        public DataResults<GameInfoView> GetGameInfoDataById(string id)
        {
            DataResults<GameInfoView> result = new DataResults<GameInfoView>();
            try
            {
                string sql = @"select 
IFNULL(a.modifyTime,'') as CreatTime,
IFNULL(a.`desc`,'') as GameIntroduce,
IFNULL(a.gameRule,'') as GameRule,
IFNULL(a.id,0) as ID,
CONCAT('" + gurl + "',a.icon) as icon,IFNULL(a.isHot,1) as IsEnableDesc,IFNULL(a.modifyUser,'') as ModifyUser,IFNULL(a.`name`,'') as Name,a.isopen as IsEnable,CONCAT('" + gurl + "',a.gameurl) as gameurl," + "IFNULL(a.Sort,0) as Sort,IFNULL(a.platType,0) as platType,IFNULL(a.type,0) as type,IFNULL(a.IsRun,0) as IsRun  from tgameinfo a where a.type!=2  and a.isHot=1 and a.id=" + id + " ORDER BY a.Sort";
                using (h5game_2021Entities db = new h5game_2021Entities())
                {

                    result.TotalCount = db.Database.SqlQuery<GameInfoView>(sql).ToList().Count;
                    result.Data = db.Database.SqlQuery<GameInfoView>(sql).ToList();
                }
            }
            catch (Exception ex)
            {

                Log.Error("获取游戏信息", ex.Message);
                result.Code = (int)Status.fail;
                result.Message = "获取数据失败";
            }
            return result;
        }
        public DataResults<GameInfoView> GetGameInfoDataBycid(int cid)
        {
            DataResults<GameInfoView> result = new DataResults<GameInfoView>();
            try
            {
                string key = "and a.gametype="+cid+" ORDER BY a.Sort";
                switch (cid)
                {
                    case 1:
                        key = "  ORDER BY a.Sort";
                        break;
                    case 4:
                        key = "  ORDER BY a.Sort";
                        break;
                    case 5:
                        key = "  ORDER BY a.Sort";
                        break;
                    case 12:
                        key = " and a.gametype in (12,13,14,15,16) ORDER BY a.Sort";
                        break;
                    case 17:
                        key = " and a.gametype in (17,18,19,20,21) ORDER BY a.Sort";
                        break;
                    case 22:
                        key = " and a.gametype in (22,23,24) ORDER BY a.Sort";
                        break;
                    case 25:
                        key = " and a.gametype in (25,26,27,28) ORDER BY a.Sort";
                        break;
                    case 29:
                        key = " and a.gametype  in (29,30,31,32) ORDER BY a.Sort";
                        break;
                    case 33:
                        key = " and a.gametype in (33,34,35,36) ORDER BY a.Sort";
                        break;
                }
                string sql = @"select 
IFNULL(a.modifyTime,'') as CreatTime,
IFNULL(a.`desc`,'') as GameIntroduce,
IFNULL(a.gameRule,'') as GameRule,
IFNULL(a.id,0) as ID,
CONCAT('" + gurl + "',a.icon) as icon,IFNULL(a.isHot,1) as IsEnableDesc,IFNULL(a.modifyUser,'') as ModifyUser,IFNULL(a.`name`,'') as Name,a.isopen as IsEnable,CONCAT('" + gurl + "',a.gameurl) as gameurl,IFNULL(a.Sort,0) as Sort,IFNULL(a.platType,0) as platType,IFNULL(a.type,0) as type,IFNULL(a.IsRun,0) as IsRun  from tgameinfo a where a.type!=2  and a.isHot=1 " + key;

                using (h5game_2021Entities db = new h5game_2021Entities())
                {

                    result.TotalCount = db.Database.SqlQuery<GameInfoView>(sql).ToList().Count;
                    result.Data = db.Database.SqlQuery<GameInfoView>(sql).ToList();
                }
            }
            catch (Exception ex)
            {

                Log.Error("获取游戏信息", ex.Message);
                result.Code = (int)Status.fail;
                result.Message = "获取数据失败";
            }
            return result;
        }

        public DataResults<GameInfoView> GetGameInfoDataSearch(string keystr)
        {
            DataResults<GameInfoView> result = new DataResults<GameInfoView>();
            try
            {
                string sql = @"select 
IFNULL(a.modifyTime,'') as CreatTime,
IFNULL(a.`desc`,'') as GameIntroduce,
IFNULL(a.gameRule,'') as GameRule,
IFNULL(a.id,0) as ID,
CONCAT('" + gurl + "',a.icon) as icon,IFNULL(a.isHot,1) as IsEnableDesc,IFNULL(a.modifyUser,'') as ModifyUser,IFNULL(a.`name`,'') as Name,a.isopen as IsEnable,CONCAT('" + gurl + "',a.gameurl) as gameurl,IFNULL(a.Sort,0) as Sort,IFNULL(a.platType,0) as platType,IFNULL(a.type,0) as type,IFNULL(a.IsRun,0) as IsRun  from tgameinfo a where a.type!=2 and a.isHot=1 and (a.`name` like('%" + keystr + "%') or a.`desc` like('%" + keystr + "%'))  ORDER BY a.Sort";

                using (h5game_2021Entities db = new h5game_2021Entities())
                {

                    result.TotalCount = db.Database.SqlQuery<GameInfoView>(sql).ToList().Count;
                    result.Data = db.Database.SqlQuery<GameInfoView>(sql).ToList();
                }
            }
            catch (Exception ex)
            {

                Log.Error("获取游戏信息", ex.Message);
                result.Code = (int)Status.fail;
                result.Message = "获取数据失败";
            }
            return result;
        }


        public bool AddGame(tgameinfo tgameinfo) {
            try
            {
                using (h5game_2021Entities db = new h5game_2021Entities())
                {
                    db.tgameinfo.Add(tgameinfo);
                }
                return true;
            }
            catch (Exception e)
            {

                return false;
            }
        }

        public bool UpdateGame(int id,tgameinfo tgameinfo) {
            try
            {
                using (h5game_2021Entities db = new h5game_2021Entities())
                {
                  //  tgameinfo tgame = db.tgameinfo.Where(x => x.id == id).FirstOrDefault();
                   // string sql = @"select a.* from tgameinfo a where a.id=" + id;
                    //tgameinfo tgame = db.Database.SqlQuery<tgameinfo>(sql).FirstOrDefault();

                    //tgame.name = tgameinfo.name;
                    //tgame.Sort = tgameinfo.Sort;
                    //tgame.gameRule = tgameinfo.gameRule;
                    //tgame.desc = tgameinfo.desc;
                    //tgame.isopen = tgameinfo.isopen;
                    ////tgame.type = tgameinfo.type;
                    //tgame.gameurl = tgameinfo.gameurl;
                    //tgame.icon = tgameinfo.icon;
                    string sql2 = @"UPDATE tgameinfo SET `name` = {0}, `Sort` = {1}, `desc` = {2}, `isopen` = {3},`gameurl` = {4}, `gameRule` = {5},`icon` = {6}, WHERE id = {7}";
                    var game = db.Database.ExecuteSqlCommand(sql2, tgameinfo.name, tgameinfo.Sort, tgameinfo.desc, tgameinfo.isopen, tgameinfo.gameurl, tgameinfo.gameRule, tgameinfo.icon, id);// UpdateEntity(tgameinfo);
                    if (game==0)
                    {
                        return false;
                    }
                }
                return true;
            }
            catch (Exception e)
            {

                return false;
            }
        }

        public bool DelGame(int id)
        {
            try
            {
                using (h5game_2021Entities db = new h5game_2021Entities())
                {
                    tgameinfo tgameinfo = db.tgameinfo.Where(x=>x.id==id).FirstOrDefault();
                    db.tgameinfo.Remove(tgameinfo);
                }
                return true;
            }
            catch (Exception e)
            {

                return false;
            }
        }
    }
}
