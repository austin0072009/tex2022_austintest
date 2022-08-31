using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Interface.h5Game;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Service.h5Game
{
   public class tuserh5Service:BaseService<tuser,int,h5game_2021Entities>,Ituserh5Service
    {

        /// <summary>
        /// 获取所有用户
        /// </summary>
        /// <param name="pageindex"></param>
        /// <param name="pagesize"></param>
        /// <returns></returns>
        public DataResults<tuser> GetUserData(int pageindex, int pagesize)
        {
            DataResults<tuser> result = new DataResults<tuser>();
            try
            {
             
               

                using (h5game_2021Entities db = new h5game_2021Entities())
                {
                    string coutstr = @"select * from tuser";
                    string sql = @"select * from tuser LIMIT " + (pageindex - 1) * pagesize + "," + pagesize;
                    var data = db.Database.SqlQuery<tuser>(sql).ToList();
                    var cout = db.Database.SqlQuery<tuser>(coutstr).Count();
                    result.TotalCount = cout;
                    result.Data = data.ToList();
                }

            }
            catch (Exception e)
            {
                result.Message = e.Message;
            }
            return result;
        }

        /// <summary>
        /// 获取所有用户
        /// </summary>
        /// <param name="pageindex"></param>
        /// <param name="pagesize"></param>
        /// <returns></returns>
        public DataResults<tuser> GetUserInfo(int userid, int pageindex, int pagesize)
        {
            DataResults<tuser> result = new DataResults<tuser>();
            try
            {

                string ustr = "";
                if (userid != 0)
                {
                    ustr = " where a.userid=" + userid;
                }

                using (h5game_2021Entities db = new h5game_2021Entities())
                {
                    string coutstr = @"select * from tuser a "+ ustr;
                    string sql = @"select * from tuser a "+ ustr + " LIMIT " + (pageindex - 1) * pagesize + "," + pagesize;
                    var data = db.Database.SqlQuery<tuser>(sql).ToList();
                    var count = db.Database.SqlQuery<tuser>(coutstr).Count();
                    result.TotalCount = count;
                    result.Data = data.ToList();
                }

            }
            catch (Exception e)
            {
                result.Message = e.Message;
            }
            return result;
        }

        /// <summary>
        /// 获取用户信息
        /// </summary>
        /// <param name="userid"></param>
        /// <returns></returns>
        public tuser GetUserInfo(int userid)
        {

            tuser result = null;
            try
            {
                using (h5game_2021Entities db = new h5game_2021Entities())
                {
                    string sql = @"select * from tuser a where a.userid={0}";
                    var data = db.Database.SqlQuery<tuser>(sql, userid).FirstOrDefault();
                    result = data;
                }
            }
            catch (Exception e)
            {
            }
            return result;
        }
    }
}
