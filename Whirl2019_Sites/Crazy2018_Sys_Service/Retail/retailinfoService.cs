using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Interface.Retail;
using Crazy2018_Sys_ViewEntity.Retail;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Service.Retail
{
   public class retailinfoService:BaseService<retailinfo,int, snscenterwhirlEntities>,IretailinfoService
    {
        /// <summary>
        /// 添加商户
        /// </summary>
        /// <param name="id"></param>
        /// <param name="appsrcret"></param>
        /// <param name="appid"></param>
        /// <param name="name"></param>
        /// <param name="gold"></param>
        /// <param name="status"></param>
        /// <returns></returns>
        public bool Addretail(int id,string appsrcret,string appid,string name,long gold,sbyte status) {
            bool isok = false;
            try
            {
                string sql = @"INSERT INTO `snscenterwhirl`.`retailinfo`(`id`, `appsecret`, `appid`, `name`, `gold`, `createtime`, `modefy`, `status`) VALUES ({0}, {1}, {2}, {3}, {4}, {5}, {6}, {7});";
                using (snscenterwhirlEntities db=new snscenterwhirlEntities())
                {
                  int a=  db.Database.ExecuteSqlCommand(sql,id,appsrcret,appid,name,gold,DateTime.Now,DateTime.Now, status);
                    if (a==1)
                    {
                        isok = true;
                    }
                  
                }
            }
            catch (Exception)
            {

                throw;
            }
            return isok;
        }


        /// <summary>
        /// 获取一个商户
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public retailinfo GetRetailinfo(int id) {
            retailinfo retail = null;
            try
            {
                string sql = @"select a.* from retailinfo a where a.id={0}";
                using (snscenterwhirlEntities db=new snscenterwhirlEntities())
                {
                 var ret=   db.Database.SqlQuery<retailinfo>(sql,id).FirstOrDefault();
                    retail = ret;
                }
            }
            catch (Exception e)
            {

                throw;
            }
            return retail;
        }

        /// <summary>
        /// 获取商户集合
        /// </summary>
        /// <returns></returns>
        public DataResults<retailinfo> GetretailinfoData() {
            DataResults<retailinfo> result = new DataResults<retailinfo>();
            try
            {
                string sql = @"select * from retailinfo";
                using (snscenterwhirlEntities db=new snscenterwhirlEntities())
                {
                    result.Data = db.Database.SqlQuery<retailinfo>(sql).ToList();
                    result.TotalCount = result.Data.Count();
                }
            }
            catch (Exception e)
            {

                result.Message = e.Message;
            }
            return result;
        }

        /// <summary>
        /// 获取商户的所有的用户信息集合表
        /// </summary>
        /// <param name="reid"></param>
        /// <returns></returns>
        public DataResults<ReatilUserView> GetReatilUserData(int reid,int pageindex,int pagesize) {
            DataResults<ReatilUserView> retail = new DataResults<ReatilUserView>();
            try
            {
                string sql = @"select a.*,b.Gold,b.wechatName from 
(select a.*,b.id as reid,b.`name` as retailname  from snsuserinfo a INNER JOIN retailinfo b on a.RetailID=b.id ORDER BY RetailID desc) 
a INNER JOIN h5game_2021.tuser b on a.userid=b.userid WHERE a.reid=" + reid + " LIMIT "+(pageindex-1)*pagesize +" ,"+pagesize;
                string sql2 = @"select a.*,b.Gold,b.wechatName from 
(select a.*,b.id as reid,b.`name` as retailname  from snsuserinfo a INNER JOIN retailinfo b on a.RetailID=b.id ORDER BY RetailID desc) 
a INNER JOIN h5game_2021.tuser b on a.userid=b.userid WHERE a.reid=" + reid;
                using (snscenterwhirlEntities db = new snscenterwhirlEntities())
                {
                    retail.Data = db.Database.SqlQuery<ReatilUserView>(sql).ToList();
                    retail.TotalCount = db.Database.SqlQuery<ReatilUserView>(sql2).Count();
                }
            }
            catch (Exception e)
            {

                retail.Message = e.Message;
            }


            return retail;
        }


        /// <summary>
        /// 修改商户信息
        /// </summary>
        /// <param name="id"></param>
        /// <param name="appsrcret"></param>
        /// <param name="appid"></param>
        /// <param name="name"></param>
        /// <param name="gold"></param>
        /// <param name="status"></param>
        /// <returns></returns>
        public bool UpdateRetail(int id, string appsrcret, string appid, string name, long gold, sbyte status) {
            bool isok = false;
            try
            {
                string sql = @"UPDATE `retailinfo` SET 
`appsecret` = {1}, `appid` = {2}, `name` = {3}, `gold` = {4}, `modefy` = {5}, `status` ={6}
WHERE `id` = {0};";
                using (snscenterwhirlEntities db = new snscenterwhirlEntities())
                {
                    int a = db.Database.ExecuteSqlCommand(sql, id, appsrcret, appid, name, gold,  DateTime.Now, status);
                    if (a == 1)
                    {
                        isok = true;
                    }

                }
            }
            catch (Exception)
            {

                throw;
            }
            return isok;
        }
    }
}
