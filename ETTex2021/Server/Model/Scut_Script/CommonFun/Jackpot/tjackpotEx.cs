using ETModel.Framework.Common.Serialization;
using ETModel.Script.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

/// <summary>
///  
/// </summary>
namespace ETModel.Script.CsScript.Action
{

    /// <summary>
    /// 奖池工具类
    /// </summary>
    public class tjackpotEx
    { 
        /// <summary>
        /// 获取奖池
        /// </summary>
        public static async Task<tjackpot> GetJackpot(int _gameid, int levelid)
        {
            try
            {
                
                List<tjackpot> gamelist =await BaseHelper.GetShareAll<tjackpot>(p => p.deleteState == 0 && p.gameid == _gameid && p.levelid == levelid);
                if (gamelist == null)
                {
                    TraceLogEx.Error(string.Format("201907040910 can not find jackpot gameid:{0} levelid:{1}", _gameid, levelid));
                    return null;
                }

                if (gamelist != null && gamelist.Count > 0)
                {
                     tjackpot _pot = ToolsEx.DeepCopy(gamelist[0]);
                    if (_pot.historygambleall == 0) _pot.historygambleall = 10000;//如果没有值，给一个初始值
                    if (_pot.jackpot == 0)
                    {
                        TraceLogEx.Error("default jackpot to 100. 20190521 _gameid:" + _gameid + ", levelid:"+ levelid);
                    }
                    return _pot;
                }
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "20170912..........Jackpot get error!");
            }
            return await Initjackpot(_gameid, levelid);
        }

        public async static Task<tjackpot> Initjackpot(int _gameid, int levelid)
        {
            var jackpot = new tjackpot();
            jackpot.gameid = _gameid;
            jackpot.levelid = levelid;
            jackpot.jackpot = 100000;
            await BaseHelper.AddOrUpdate(jackpot);
            TraceLogEx.Error($"20220704 can not find jackpot! Already initialized  gameid:{_gameid}  levelid:{levelid}");
            return jackpot;
        }


        /// <summary>
        /// 更新奖池，持久化
        /// </summary>
        /// <param name="gambleAll">收入金额</param>
        /// <param name="payacout">支出金额</param>
        public static async ETVoid AddJackpotPercent(int gambleAll, int _gameid, int levelid)
        {
            var jackpot = await GetJackpot(_gameid, levelid);
            if (jackpot == null) return;

            //获取奖池百比进入系统税收
            var showrate = t_anythingList.GetInt("jackpotshow");

            int jackpotCount = gambleAll;
            int showgold = jackpotCount * showrate / 100;          
            jackpotCount = showgold;//20%进显示奖池

            jackpot.historygambleall += gambleAll;
            jackpot.jackpot += jackpotCount;
            jackpot.income += jackpotCount;
            jackpot.rax += 0;
            jackpot.handsel += 0;
            jackpot.modifyTime = DateTime.Now;
            BaseHelper.AddOrUpdate(jackpot);
        }

        public static async void UpdateJackpotForNinePoint(long needupdatepot, int _gameid, int levelid)
        {
            var jackpot = await GetJackpot(_gameid, levelid);
            if (jackpot == null) return; 
            jackpot.jackpot += needupdatepot; 
            await BaseHelper.AddOrUpdate(jackpot);
        }
        /// <summary>
        /// 获取游戏总奖池
        /// </summary>
        /// <param name="_gameid"></param>
        /// <returns></returns>
        public static async Task<List<tjackpot>> GetGameJackpot(int _gameid)
        {
            List<tjackpot> gamelist = await BaseHelper.GetShareAll<tjackpot>(p => p.deleteState == 0 && p.gameid == _gameid && p.levelid!= 1051);
            if (gamelist == null) return new List<tjackpot>();
            return gamelist;
        }

        /// <summary>
        /// 获取除保险奖池外的全部奖池
        /// </summary>
        /// <returns></returns>
        public static async Task<List<tjackpot>> GetAllJackpot()
        {
            try
            {
                int tempidtexas = TexasLobby.instance._gameid + 1000;
                List<tjackpot> gamelist =await  BaseHelper.GetShareAll<tjackpot>(p => p.deleteState == 0 && p.levelid != tempidtexas);
                if (gamelist == null)
                { 
                    //int tempid = WhirlLobby.instance._gameid + 1000;
                    //gamelist =await  BaseHelper.GetShareAll<tjackpot>(p => p.deleteState == 0 && p.levelid == tempid);
                }
                if (gamelist == null) return new List<tjackpot>();
                return gamelist;
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "2020032512368");
                return new List<tjackpot>();
            }
        }


        /// <summary>
        /// 获取奖池(非深拷贝)
        /// </summary>
        public static async Task<tjackpot> GetJackpotInfo(int _gameid, int levelid)
        {
            try
            { 
                List<tjackpot> gamelist =await BaseHelper.GetShareAll<tjackpot>(p => p.deleteState == 0 && p.gameid == _gameid && p.levelid == levelid);
                if (gamelist == null)
                { 
                    gamelist =await  BaseHelper.GetShareAll<tjackpot>(p => p.deleteState == 0 && p.gameid == _gameid);
                }

                if (gamelist != null && gamelist.Count > 0)
                { 
                    return gamelist[0];
                }
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, $"20170912..........Jackpot get error!  gameid:{_gameid}  levelid:{levelid}");
            }
            TraceLogEx.Error($"20190704 can not find jackpot!  gameid:{_gameid}  levelid:{levelid}");
            return null;
        }

        public static async Task<tjackpot> GetJackpot(int _gameid, List<int> lvlist)
        {
            if (lvlist.Count < 1) return new tjackpot();
            tjackpot _rejackpot =await GetJackpot(_gameid, lvlist[0]);
            if (_rejackpot == null) return new tjackpot();
            for (int i = 1; i < lvlist.Count; i++)
            {
                var _temp =await GetJackpot(_gameid, lvlist[i]);
                _rejackpot.jackpot += _temp.jackpot;
            }
            return _rejackpot;
        }





        public static async  Task<List<tjackpot>> GetJackpotList(int _gameid, List<int> lvlist)
        {
            if (lvlist.Count < 1) return new List<tjackpot>();
            return await GetGameJackpot(_gameid);
        }

        /// <summary>
        /// 计算奖池 
        /// </summary> 
        /// <param name="jackpotType">大奖类型（1：皇同50%；2：同25%；3：四条5%）</param> 
        /// <returns>返回用户获得的JB数量</returns>
        public static async Task<long> CalculationJackpot(int _gameid, int _roomid, int jackpotType, int userId)
        {
            long jackpotGold = 0;
            try
            { 
                //获取奖池
                var _jackpot =await  GetJackpotInfo(_gameid, _roomid);
                if (_jackpot != null)
                {
                    int percentage = 2;
                    switch (jackpotType)
                    {
                        case 1:
                            percentage = 50;
                            break;
                        case 2:
                            percentage = 25;
                            break;
                        case 3:
                            percentage = 5;
                            break;
                    }

                    jackpotGold = Convert.ToInt64(_jackpot.jackpot * (percentage / 100d));
                    jackpotGold = jackpotGold * 100 / 100;//不分小数部分 
                    _jackpot.jackpot -= jackpotGold; //减去奖池得JB
                    WriteJackpotLog(_gameid, _roomid, userId, jackpotGold, jackpotType, 1);
                } 
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "20170712..........Jackpot get error!");
            }
            return jackpotGold;
        } 


        /// <summary>
        /// 更新奖池，持久化
        /// </summary>
        /// <param name="gambleAll">收入金额</param>
        /// <param name="payacout">支出金额</param>
        public static void UpdateJackpot(int gambleAll, int payacout, long rax, int _gameid, int levelid, int tableid, int handsel = 0)
        {
          
        }
      
        /// <summary>
        /// 
        /// </summary>
        /// <param name="uid"></param>
        /// <param name="jackpot">金额</param>
        /// <param name="jacktype">奖类型</param>
        /// <param name="ct">领取    贡献</param>
        /// <param name="gameid"></param>
        /// <param name="roomid"></param>
        public static void Addjackpotlog(int uid, int jackpot, int jacktype, int ct, int gameid, int roomid,List<int> sp = null)
        {
            tjackpotLog jackpotLog = new tjackpotLog();
            jackpotLog.GameId = gameid;
            jackpotLog.RoomId = roomid;
            jackpotLog.UserId = uid;
            jackpotLog.Gold = jackpot;
            jackpotLog.JackpotType = jacktype;
            jackpotLog.ChangeType = ct;
            jackpotLog.ShouPair = new Framework.Cache.Generic.CacheList<int>();
             if(sp!=null) jackpotLog.ShouPair.AddRange(sp);
            BaseHelper.AddAsync(jackpotLog);//奖池可以导步写入
        }
        /// <summary>
        /// 获取个人 单个游戏的是否增加赔率
        /// </summary>
        public static async Task< int> GetUserJackpotPercentConstRate(long TotalGold, int UserID)
        {
            int personaljackpot = 0;
            tUserJackpot _userjackpot = await BaseHelper.GetBase<tUserJackpot>(UserID);
            bool _iswin = false;
            if (_userjackpot.watergoldadd > _userjackpot.watergoldreduce) _iswin = true;

            if (_iswin)
            {
                ulong _win = _userjackpot.watergoldadd - _userjackpot.watergoldreduce;
                if (TotalGold <= 0)
                    TotalGold = 1;
                personaljackpot -= (int)(_win / (ulong)TotalGold) * 10;
            }
            else
            {
                ulong _lost = _userjackpot.watergoldreduce - _userjackpot.watergoldadd;
                int _tempbase = Convert.ToInt32((ulong)TotalGold / _lost);
                if (_tempbase >= 5) personaljackpot += 20;//20%整个保底，但单次充值100 累计5次后会直接保底，计划给一个次数限制。
                //简单的方法每充值一次给 10次机会，10次高于20%的机会
            }
            return personaljackpot;
        }
        #region 新增修改
         
        public static async void WriteJackpotLog(int _gameid, int _levelid, int userid, long gold, int jtype, int ctype, long bets=0)
        { 
            tjackpotLog jackpotLog = new tjackpotLog();
            jackpotLog.GameId = _gameid;
            jackpotLog.RoomId = _levelid;
            jackpotLog.UserId = userid;
            jackpotLog.Gold = gold;
            jackpotLog.JackpotType = jtype;
            jackpotLog.ChangeType = ctype;
            jackpotLog.BetIns = bets;
            BaseHelper.AddAsync(jackpotLog); 
        }

        /// <summary>
        /// 获取多个奖池值
        /// </summary>
        /// <param name="_gameid"></param>
        /// <param name="index"></param>
        /// <returns></returns>
        public static async Task<List<long>> GetMoreJockPotScoreForIndex(int _gameid, int[] index)
        {
            int gameid = _gameid;
            if (gameid == 254)
            {
                gameid *= 10;
            }
            List<long> jockPotScores = new List<long>();
            foreach (var v in index)
            {
                var jackpot = await GetJackpot(_gameid, gameid * 10+ v);
                if (jackpot != null)
                {
                    jockPotScores.Add(jackpot.jackpot);
                }
            }
            return jockPotScores;
        }
        /// <summary>
        /// 获取某个奖池
        /// </summary>
        /// <param name="_gameid"></param>
        /// <param name="levelid"></param>
        /// <returns></returns>
        public static async Task<long> GetJockPotScore(int _gameid, int levelid)
        {
            int gameid = _gameid;
            if (gameid == 254) gameid *= 10;
            if (levelid < 50)
            {
                levelid += gameid * 10;
            }
            var jackpot = await GetJackpot(_gameid, levelid);
            if (jackpot != null)
            {
                return jackpot.jackpot;
            }
            return 0;
        }
        #endregion

        #region 控制状态查看与 控制设置 
        public static async Task<string> SetControlUserGM(string json)
        {
            sc_setcontrol_gm resultmange = new sc_setcontrol_gm { _ret = 0, _info = "操作成功" };
            try
            {
                cs_setcontrol_gm gdata = JsonUtils.Deserialize<cs_setcontrol_gm>(json);
                var ujackpot = await tUserJackpotEx.GetFromCachebyUserID(gdata.uId);
                if (ujackpot != null)
                {
                    if (ujackpot._potRange == null || ujackpot._potRange.Count<=0)
                    {
                        ujackpot._potRange = new ETModel.Framework.Cache.Generic.CacheList<UJackpotRange>();
                        ujackpot._potRange.Add(tUserJackpotEx.GetNewUJackpot(0));
                        ujackpot._potRange.Add(tUserJackpotEx.GetNewUJackpot(1));
                        ujackpot._potRange.Add(tUserJackpotEx.GetNewUJackpot(2));
                        
                    }
                    var jp = ujackpot._potRange.Find(p => p._type == gdata.uJackpot._type);
                    if (jp != null)
                    {
                        ujackpot._potRange.Remove(jp);
                        ujackpot._potRange.Add(gdata.uJackpot);
                        resultmange._ret = 0;
                        resultmange._info = "操作成功！";
                        tUserJackpotEx.AddOrUpdate(ujackpot);
                    }
                    else
                    {
                        resultmange._ret = 1;
                        resultmange._info = "_type只能为 0:新手点控，1:自动点控，2:GM点控 ";
                    }
                    

                }
                else
                {
                    resultmange._ret = 1;
                    resultmange._info = "玩家未找到";
                }

            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "20200616154612");
                resultmange._ret = 1;
                resultmange._info = "服务器错误";
            }
            return JsonUtils.Serialize(resultmange);
        }

        /// <summary>
        /// GM 获取在控制中的玩家
        /// </summary>
        /// <returns></returns>
        public static async Task<string> GetControlUserGM(string json)
        {
            sc_getcontrol_gm resultmange = new sc_getcontrol_gm { _ret = 0, _info = "操作成功" };
            try
            {
                cs_getcontrol_gm csdata = JsonUtils.Deserialize<cs_getcontrol_gm>(json);
                List<ControlState> rebot = new List<ControlState>();
                if (csdata.uIdlist != null)
                {
                    foreach (var uid in csdata.uIdlist)
                    {
                        tUserJackpot ujackpot = await tUserJackpotEx.GetFromCachebyUserID(uid);
                        var st = BaseHelper.TryGetUserStatus(uid);
                        if (ujackpot != null && ujackpot._potRange != null)
                        {
                            rebot.Add(new ControlState()
                            {
                                uId = uid,
                                DKCurrScore = (int)ujackpot.DgCurrScore,
                                DKTotalScore = (int)ujackpot.DgTotalScore,
                                DKType = ujackpot.EffecTiveType,
                                uJackpot = ujackpot._potRange.ToList(),
                                Status = st == null ? 0 : (int)st.Status,
                            }) ;
                        }
                    }
                    resultmange.ctrlState = rebot;
                }

            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "2020061615461");
                resultmange._ret = 1;
                resultmange._info = "服务器错误";
            }
            return JsonUtils.Serialize(resultmange);
        }


        #endregion
    }



}

