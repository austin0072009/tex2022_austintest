using ETModel.Framework.Common.Serialization;
using ETModel.Script.Model;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ETModel.Script.CsScript.Action
{

    /// <summary>
    /// 房卡房间列表工具类
    /// </summary>
    public class ttablelistEx
    {
        /// <summary>
        /// 添加或者删除缓存
        /// </summary>
        /// <param name="temp"></param>
        /// <returns></returns>
        public static async Task<bool> AddOrUpdate(ttablelist temp)
        {
            try
            {
                await BaseHelper.Add(temp);
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "201909041118..........ttablelist update error! " + JsonUtils.Serialize(temp));
            }
            return false;
        }

        /// <summary>
        /// 获取缓存
        /// </summary>
        /// <param name="tbNum">桌子号</param>
        /// <returns>缓存</returns>
        public static async Task<ttablelist> GetTableByNumber(int gameid, int tbNum, bool istry = false)
        {
            try
            {                 
                return await GetTableByid(gameid, tbNum);
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "20180103..........troomCardTempEx update error!");
            }
            if (!istry) TraceLogEx.Error("20190103........can not find the table tnum:" + tbNum);
            return null;
        }

        /// <summary>
        /// 获取缓存
        /// </summary>
        /// <param name="userId">房主ID</param>
        /// <returns>缓存</returns>
        public static async Task<List<ttablelist>> GetAllByOwnerUser(int userId, int gameid, int roomid)
        {
            try
            {
                List<ttablelist> templist = await BaseHelper.GetShareAll<ttablelist>(p => p.ownerId == userId && p.gameid == gameid && p.levelid == roomid);
                if (templist != null && templist.Count > 0)
                {
                    return templist;
                }
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "20180103..........troomCardTempEx update error!");
            }

            return null;
        }
        /// <summary>
        /// 获取缓存
        /// </summary>
        /// <param name="userId">房主ID</param>
        /// <returns>缓存</returns>
        public static async Task<int> GetAllCountByOwnerID(int userId, int gameid = 0)
        {
            try
            {
                if (gameid != 0)
                {
                    List<ttablelist> glist = await BaseHelper.GetShareAll<ttablelist>(p => p.ownerId == userId && p.gameid == gameid);
                    if (glist != null && glist.Count >= 0) return glist.Count;

                }
                List<ttablelist> templist = await BaseHelper.GetShareAll<ttablelist>(p => p.ownerId == userId);
                if (templist != null && templist.Count > 0)
                {
                    return templist.Count;
                }
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "202002291103..........find ownerid  error!");
            }
            return 0;
        }

        public static async Task<int> GetAllCountByOwnerID(int userId, DateTime time, int gameid = 0)
        {
            try
            {
                List<ttablelist> templist = await BaseHelper.GetShareAll<ttablelist>(p => p.ownerId == userId && DateTime.Parse(p.createTime) > time);
                if (templist != null && templist.Count > 0)
                {
                    return templist.Count;
                }
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "202002291103..........find ownerid  error!");
            }
            return 0;
        }


        /// <summary>
        /// 
        /// </summary>
        /// <param name="userId">房主ID</param>
        /// <returns>缓存</returns>
        public static async Task<List<ttablelist>> GetAllByGameidandLevelid(int gameid, int levelid)
        {
            try
            {
                List<ttablelist> templist = await BaseHelper.GetShareAll<ttablelist>(p => p.gameid == gameid && p.levelid == levelid);
                if (templist != null && templist.Count > 0)
                {
                    return templist;
                }
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "20180103..........troomCardTempEx update error!");
            }
            return null;
        }
        /// <summary>
        /// 得到club下面的房间
        /// </summary>
        /// <param name="gameid"></param>
        /// <param name="levelid"></param>
        /// <param name="cid">clubid</param>
        ///  <param name="ishall">需要知道是不是大厅</param>
        /// <returns></returns>
        public static async Task<List<ttablelist>> GetAllByGameidandLevelid(int gameid, long cid, int uid, int allid)
        {
            try
            {
                //if (cid == 0)
                //{
                //    //自己大厅的房间
                //    List<ttablelist> ownroom = await BaseHelper.GetShareAll<ttablelist>(p => (p.gameid == gameid && p.ownerId == uid && p.ClubIdx == 0)
                //    || p.gameid == gameid && p.ClubIdx == 0 && p.JoinUser.Contains(uid));
                //    if (ownroom != null && ownroom.Count > 0)
                //    {
                //        return ownroom;
                //    }
                //    else return null;
                //}
                //club内的房间
                List<ttablelist> templist = await BaseHelper.GetShareAll<ttablelist>(p => (p.gameid == gameid && p.ClubIdx == cid) || (allid != 0 && p.allId == allid));
                if (templist != null && templist.Count > 0)
                {
                    return templist;
                }
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "20180103..........troomCardTempEx update error!");
            }
            return null;
        }
        /// <summary>
        /// 需要得到联盟房间
        /// </summary>
        /// <param name="gameid"></param>
        /// <param name="allid"></param>
        /// <returns></returns>
        public static async Task<List<ttablelist>> GetAllByGameidalliId(int gameid, int allid)
        {
            List<ttablelist> allIdlist = await BaseHelper.GetShareAll<ttablelist>(p => p.gameid == gameid && p.allId == allid);
            if (allIdlist != null && allIdlist.Count > 0)
            {
                return allIdlist;
            }
            return null;
        }

        /// <summary>
        /// 获取全部桌子
        /// </summary>
        /// <returns></returns>
        public static async Task<List<ttablelist>> GetAllTable(int gameid)
        {
            List<ttablelist> list = await BaseHelper.GetShareAll<ttablelist>(t => t.gameid == gameid);
            return list;
        }

        /// <summary>
        /// 解散桌子
        /// </summary>
        /// <param name="tbNum">桌子号</param>
        /// <returns>解散结果</returns>
        public static async Task<bool> Delete(int tbNum)
        {
            ttablelist result = await BaseHelper.GetShare<ttablelist>(p => p.tableid == tbNum);
            if (result != null)
            {
                try
                {
                    return await BaseHelper.Delete(result);//此处不知为什么一直报线程正在终止错误
                }
                catch (Exception ex)
                {
                    TraceLogEx.Error(ex, "201909101501");
                }
            }

            return false;
        }
        public static async Task<ttablelist> GetTableByid(int gameid, int tid)
        {
            ttablelist list = await BaseHelper.GetShare<ttablelist>(gameid * 1000000L + tid);
            return list;
        }
    }
}

