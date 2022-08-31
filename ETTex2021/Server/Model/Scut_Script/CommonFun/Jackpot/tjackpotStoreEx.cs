using ETModel.Script.Model;
using Model.Scut_Script.Common;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

/// <summary>
///  
/// </summary>
namespace ETModel.Script.CsScript.Action
{

    /// <summary>
    /// 库存工具类
    /// </summary>
    public class tjackpotStoreEx
    {
        public static async void AddOrUpdate(tjackpotstock _tempur, bool bAdd = true)
        {
            await BaseHelper.AddOrUpdate(_tempur, bAdd);
        }
     
        /// <summary>
        /// 获取库存
        /// </summary>
        /// <param name="_gameid"></param>
        /// <param name="levelid"></param>
        /// <returns></returns>
        public static async Task<tjackpotstock> GetJackpotStock(int _gameid, int levelid)
        {
            try
            {
                List<tjackpotstock> storelist = await BaseHelper.GetShareAll<tjackpotstock>(p => p.deleteState == 0 && p.gameid == _gameid && p.levelid == levelid);
                if (storelist == null || storelist.Count<=0)
                {
                    TraceLogEx.Error($"201907040910 can not find tjackpotstock gameid:{_gameid}  levelid:{levelid}");
                    return null;
                }

                return storelist[0];
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "20170912..........JackpotStock get error!");
            }
            TraceLogEx.Error($"20190704 can not find JackpotStock gameid:{_gameid}  levelid:{levelid}");
            return null;
        }

        /// <summary>
        /// 写入库存
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="_gameid"></param>
        /// <param name="levelid"></param>
        /// <param name="lWinScore"></param>
        public static async void WriteStock(int _gameid, int levelid, long lWinScore)
        {
            var jackPotStock = await GetJackpotStock(_gameid, levelid);
            if (jackPotStock == null)
            {
                TraceLogEx.Error($"未找到库存GameID:{_gameid}   LevelID:{levelid}");
                return;
            } 
            int lRaxScore = 0;
            if (lWinScore < 0)
            {
                jackPotStock.income -= lWinScore;//吃分
                lRaxScore = (int)(-lWinScore * ((float)jackPotStock.pump / 10000f));//税收
                jackPotStock.Tax += lRaxScore;
            }
            else
            {
                jackPotStock.outcomes += lWinScore;//吐分 
            }

            jackPotStock.stock -= lWinScore + lRaxScore;
            jackPotStock.modifyTime = DateTime.Now; 
            await BaseHelper.AddOrUpdate(jackPotStock);
        }

        public static async void UpdateTax(int _gameid, int levelid, long opentax)
        {
            if (opentax <= 0) return;
            var jackPotStock = await GetJackpotStock(_gameid, levelid);
            if (jackPotStock == null)
            {
                TraceLogEx.Error($"未找到库存GameID:{_gameid}   LevelID:{levelid}");
                return;
            } 

            jackPotStock.OpenTax += opentax;
            jackPotStock.modifyTime = DateTime.Now;
            await BaseHelper.AddOrUpdate(jackPotStock);
        }
    }



}

