using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Crazy2018_Sys_Common;
using Crazy2018_Sys_ViewEntity;
using System.Linq.Expressions;

namespace Crazy2018_Sys_Service
{
    public class JackpotService : BaseService<tjackpot, int, texas_2021Entities>, IJackpotService
    {
        public List<JackpotScene> GetGameLevelTatolgold()
        {
            List<JackpotScene> retdata = new List<JackpotScene>();
            try
            {
                using (texas_2021Entities dbhelper = new texas_2021Entities())
                {
                    var data = (from a in dbhelper.tjackpot
                               join b in dbhelper.tgameinfo on a.gameid equals b.id
                               join c in dbhelper.tgamelevelinfo on a.roomid equals c.Id
                               select new JackpotView
                               {
                                  GanmeName = b.name,
                                  GameLevelName = c.Name,
                                  roomid =  a.roomid.Value,
                                  GameId = a.gameid.Value,
                                  Jackpot = (int)a.jackpot.Value
                               }).ToList();
                    var _data = data.GroupBy(o=>new{ o.GameId});
                    foreach (var item in _data)
                    {
                        retdata.Add(new JackpotScene()
                        {
                            GameName = item.FirstOrDefault()?.GanmeName,
                            primaryGold = item.Where(o=>o.GameLevelName.Contains("初级场")).Sum(o=>o.Jackpot) / 100,
                            middleGold = item.Where(o => o.GameLevelName.Contains("中级场")).Sum(o => o.Jackpot) / 100,
                            highGold = item.Where(o => o.GameLevelName.Contains("高级场")).Sum(o => o.Jackpot) /100,
                            Totalgold = item.Sum(t=>t.Jackpot)/100,
                        });
                    }
                    return retdata;


                }



            }
            catch (Exception ex)
            {

                throw;
            }
        }

        public DataResults<JackpotView> GetJackPotData(DPage page)
        {
            DataResults<JackpotView> result = new DataResults<JackpotView>();
            if (page == null) page = new DPage();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            Expression<Func<tjackpot, bool>> fun = w => w != null;
            Expression<Func<tgameinfo, bool>> fun1 = w => w != null;
            try
            {
                if (!string.IsNullOrEmpty(page.Keywords))
                    fun1 = w => w != null && w.name.Contains(page.Keywords) || w.gameRule.Contains(page.Keywords);
                using (texas_2021Entities dbhelper = new texas_2021Entities())
                {
                    var gameinfo = dbhelper.tgameinfo.Where(fun1);
                    var jackpotinfo = GetEntityLisrByWhere(fun).Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList();
                    var join = from j in jackpotinfo
                               join g in gameinfo on j.gameid equals g.id
                               join gn in dbhelper.tgamelevelinfo on j.roomid equals gn.Id
                               orderby j.Id
                               select
                               new JackpotView
                               {
                                   GameId = g.id,
                                   GanmeName = g.name,
                                   GameLevelName = gn.Name,
                                   Baserate = gn.Baserate.Value/100,
                                   HistoryGambleall = j.historygambleall.HasValue ? (int)j.historygambleall.Value : 0,
                                   Jackpot = j.jackpot.HasValue? (int)j.jackpot.Value:0,
                                   Income = j.income.HasValue ? (int)j.income.Value : 0,
                                   Pump = j.pump.Value,
                                   Rax = j.rax.Value,
                                   Waterproof = j.waterproof.Value,
                                   handsel = j.handsel.Value,
                                   roomid = j.roomid.Value,
                                   ID = j.Id,
                                   isEnable = j.isEnable,
                                   Remark = "奖池统计"
                               };
                    result.TotalCount = join.Count();
                    result.Data = join.ToList();
                    result.Message = "获取成功";
                }
            }
            catch (Exception ex)
            {
                Log.Error(this.GetType().ToString(), ex.Message);
                result.Code = (int)Status.fail;
                result.Message = "获取失败";
            }
            return result;
        }

        public void TimingRun()
        {
            try
            {
                using (texas_2021Entities dbhelper = new texas_2021Entities())
                {
                    var jackpot = dbhelper.tjackpot.ToList();
                    jackpot.ForEach(st=> 
                    {
                        var jacklog = dbhelper.tjackpotaddlog.OrderByDescending(t=>t.CreateTime).Where(t=>t.RoomID==st.roomid).FirstOrDefault();
                        if (jacklog!=null)
                        {
                            tjackpotaddlog jackaddlog = new tjackpotaddlog();
                            jackaddlog.beforeGold = jacklog.afterGold;
                            jackaddlog.Gold = st.jackpot - jacklog.afterGold;
                            jackaddlog.afterGold = jackaddlog.beforeGold + jackaddlog.Gold;
                            jackaddlog.GameId = jacklog.GameId;
                            jackaddlog.CreateTime = DateTime.Now;
                            jackaddlog.RoomID = jacklog.RoomID;
                            jackaddlog.TableID = 0;
                            dbhelper.tjackpotaddlog.Add(jackaddlog);
                            dbhelper.SaveChanges();
                        }
                        else
                        {
                            tjackpotaddlog jackaddlog = new tjackpotaddlog();
                            jackaddlog.beforeGold = st.jackpot;
                            jackaddlog.Gold = 0;
                            jackaddlog.afterGold = st.jackpot;
                            jackaddlog.GameId = st.gameid;
                            jackaddlog.CreateTime = DateTime.Now;
                            jackaddlog.RoomID = st.roomid;
                            jackaddlog.TableID = 0;
                            dbhelper.tjackpotaddlog.Add(jackaddlog);
                            dbhelper.SaveChanges();
                        }
                    });
                }
               // 
            }
            catch (Exception ex)
            {

                throw;
            }
        }
    }
}
