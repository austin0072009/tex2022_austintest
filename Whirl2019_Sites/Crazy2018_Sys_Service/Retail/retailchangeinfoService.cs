using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Interface.Retail;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Service.Retail
{
   public class retailchangeinfoService:BaseService<RetailChangeInfoView,int, snscenterwhirlEntities>,IretailchangeinfoService
    {

        public bool AddRetailChangeLog(int retailid,int type,string score,string desc) {

            bool isok = false;
            try
            {
                using (snscenterwhirlEntities db=new snscenterwhirlEntities())
                {
                    string sql = @"INSERT INTO `snscenterwhirl`.`retailchangeinfo`( `retailid`, `type`, `score`, `createtime`, `desc`) 
VALUES ({0}, {1}, {2}, {3}, {4});";
                    isok= db.Database.ExecuteSqlCommand(sql, retailid, type, score, DateTime.Now, desc)==1?true:false;
                }
            }
            catch (Exception e)
            {

                throw;
            }
            return isok;
        }
        /// <summary>
        /// 获取商户流水记录
        /// </summary>
        /// <param name="retailid"></param>
        /// <param name="pageindex"></param>
        /// <param name="pagesize"></param>
        /// <param name="keyword"></param>
        /// <returns></returns>
        public DataResults<RetailChangeInfoView> GetReatailLog(int retailid, int pageindex, int pagesize, string keyword=null) {
            DataResults<RetailChangeInfoView> resurt = new DataResults<RetailChangeInfoView>();
            try
            {
                using (snscenterwhirlEntities db=new snscenterwhirlEntities())
                {
                    string sql = @"select a.*,b.`name` from retailchangeinfo a LEFT JOIN retailinfo b on a.retailid=b.id where 1=1 ";
                    string count = "";
                    if (retailid!=0)
                    {
                        sql += " and a.retailid=" + retailid;
                    }
                    if (!string.IsNullOrEmpty(keyword))
                    {
                        sql += " and a.name like '%"+keyword+"%'";
                    }
                    count = sql;
                    sql += " ORDER BY a.createtime desc LIMIT "+(pageindex-1)*pagesize+","+pagesize;
                    resurt.TotalCount = db.Database.SqlQuery<RetailChangeInfoView>(count).Count();
                    resurt.Data = db.Database.SqlQuery<RetailChangeInfoView>(sql).ToList();
                }
            }
            catch (Exception e )
            {

                resurt.Message=e.Message;
            }
            return resurt;
        }

    }
}
