using ETModel.Script.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using ETModel.Framework.Net;
using System.Threading.Tasks;

/// <summary>
///  
/// </summary>
namespace ETModel.Script.CsScript.Action
{

    public class tExchangeLogEx
    {
        public static async Task<bool> Add(texchangeLog data)
        {
            return await BaseHelper.SendOneToDbReturnIdentity(data) > 0;
        }
        public static async Task<int> GetGoodType(int goodId)
        {
            var cache =await BaseHelper.GetShare<tCommodity>(goodId);
            return (int)cache.commodityType;
        }
        /// <summary>
        /// 通过类型获取实物信息
        /// </summary>
        /// <param name="commodiType"></param>
        /// <param name="userId"></param>
        /// <returns></returns>
        public static List<texchangeLog> GetMyGoodList(int userId, CommodityType comtype = CommodityType.Material)
        {
            List<texchangeLog> ellist = new List<texchangeLog>();
            DbDataFilter filter = new DbDataFilter();
            filter.Condition = String.Format("UserId={0} AND commodityType={1}", userId,
                (int)comtype);
            var sender = DataSyncManager.TryReceiveSql(new texchangeLog().GetSchema(), filter, out ellist);
            return ellist;
        }

        public static tCommodity GetGoodsById(int Id)
        {
            List<tCommodity> ellist = new List<tCommodity>();
            DbDataFilter filter = new DbDataFilter();
            filter.Condition = String.Format("id={0}", Id);
            var sender = DataSyncManager.TryReceiveSql(new tCommodity().GetSchema(), filter, out ellist);
            return ellist.FirstOrDefault();
        }
        public static async Task<bool> addUserContact(tUserContact userContact)
        {
            return await BaseHelper.Add(userContact);
        }
        public static bool CheckUserContact(int userId)
        {
            var userContact = BaseHelper.GetShare<tUserContact>(userId);
            return userContact == null ? false : true;
        }
    }
}

