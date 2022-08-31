using ETModel.Framework.Net;
using ETModel.Script.CsScript.Action;
using ETModel.Script.Model;
using ETModel.Script;
using System;
using System.Collections.Generic;
using System.Linq; 
using System.Threading.Tasks;


namespace ETModel.Script.CsScript.Action
{
    public class tvipinfoEx
    {
        /// <summary>
        /// 根据商品ID获取VIP信息
        /// </summary>
        /// <param name="commodid"></param>
        /// <returns></returns>
        public static tvipinfo GetVipInfoByCommodId(int commodid)
        {
            List<tvipinfo> elist = new List<tvipinfo>();
            DbDataFilter filter = new DbDataFilter();
            filter.Condition = String.Format("commodid={0}", commodid);
            var sender = DataSyncManager.TryReceiveSql(new tvipinfo().GetSchema(), filter, out elist);
            return elist.FirstOrDefault() ?? null;
        }
        public static tvipinfo GetVipInfoById(int id)
        {
            List<tvipinfo> elist = new List<tvipinfo>();
            DbDataFilter filter = new DbDataFilter();
            filter.Condition = String.Format("id={0}", id);
            var sender = DataSyncManager.TryReceiveSql(new tvipinfo().GetSchema(), filter, out elist);
            return elist.FirstOrDefault() ?? null;
        }
       

      
       
        /// <summary>
        /// 根据用户ID和场次ID获得当前场次的免费次数
        /// </summary>
        /// <param name="user"></param>
        /// <param name="levelid"></param>
        /// <returns></returns>
        public static int GetUserFreeCountByLevelId(tUser user, int levelid)
        {

            
            return 1;
        }
     

    }

}
