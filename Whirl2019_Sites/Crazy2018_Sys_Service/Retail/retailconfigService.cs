using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Interface.Retail;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Service.Retail
{
   public class retailconfigService:BaseService<retailconfig,int, snscenterwhirlEntities>,IretailconfigService
    {
        /// <summary>
        /// 查询一个商户的配置
        /// </summary>
        /// <param name="retailid"></param>
        /// <returns></returns>
        public retailconfig GetRetailConfigById(int retailid) {

            try
            {
                using (snscenterwhirlEntities db=new snscenterwhirlEntities())
                {
                    string sql = @"select * from retailconfig a where a.retailid={0}";
                    retailconfig retail = db.Database.SqlQuery<retailconfig>(sql,retailid).FirstOrDefault();

                    return retail;
                }
              
            }
            catch (Exception e)
            {

                throw;
            }
        }

        /// <summary>
        /// 新增一个商户的配置
        /// </summary>
        /// <param name="retailid"></param>
        /// <returns></returns>
        public bool AddConfig(int retailid,string playeramount)
        {
            bool isok = false;
            try
            {
                using (snscenterwhirlEntities db = new snscenterwhirlEntities())
                {
                    string sql = @"INSERT INTO `retailconfig`(`retailid`, `playeramount`) VALUES ({0}, {1}) ";
                    isok = db.Database.ExecuteSqlCommand(sql, retailid, playeramount)==1?true:false;
                }
            }
            catch (Exception e)
            {

                throw;
            }
            return isok;
        }
    }
}
