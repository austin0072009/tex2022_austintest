using ETModel.Framework.Cache.Generic;
using ETModel.Script.Model;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace ETModel.Script.CsScript.Action
{
    /// <summary>
    /// 个人奖池工具类    
    /// </summary>
    public class tUserJackpotEx
    {
        /// <summary>
        /// 获取个人奖池
        /// </summary>
        /// <param name="UserID"></param>
        /// <returns></returns>
        public static async Task<tUserJackpot> GetFromCachebyUserID(int UserID)
        {
            tUserJackpot _tempuser = await BaseHelper.GetBase<tUserJackpot>(UserID);
            if (_tempuser == null)
            {
                _tempuser = GetNewUserJackpot(UserID);
                AddOrUpdate(_tempuser);
            }
            return _tempuser;
        }
        /// <summary>
        ///  增加或修改个人奖池
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="fuserid"></param>
        public static async void AddOrUpdate(tUserJackpot _tempur0)
        {
            await BaseHelper.AddOrUpdateBase(_tempur0);
        }

        /// <summary>
        /// 初始化个人将池
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="gameid"></param>
        /// <returns></returns>
        public static tUserJackpot GetNewUserJackpot(int userid)
        {
            //初始化个人奖池
            tUserJackpot newJackpot = new tUserJackpot();
            newJackpot.UserId = userid;
            newJackpot.updatetime = DateTime.Now;
            newJackpot._potRange = new CacheList<UJackpotRange>();
            newJackpot._potRange.Add(GetNewUJackpot(0));
            newJackpot._potRange.Add(GetNewUJackpot(1));
            newJackpot._potRange.Add(GetNewUJackpot(2));
            return newJackpot;
        }
        /// <summary>
        /// 构建新个人游戏奖池
        /// </summary>
        /// <param name="gameid"></param>
        /// <returns></returns>
        public static UJackpotRange GetNewUJackpot(int type)
        {
            return new UJackpotRange()
            {
                ControlEndRatio = 50,
                ControlLimitRatio = 100,
                _type = type,
                stime = DateTime.MaxValue,
                end = DateTime.MaxValue,
                bWin = false,
                goldt = 0
            };
        }


        /// <summary>
        /// 获取个人游戏奖池
        /// </summary>
        public static async ETTask<UJackpotRange> GetUserJackpot(int userid,int type)
        {
            tUserJackpot myJackpot = await GetFromCachebyUserID(userid);
            if (myJackpot == null)
            {   //初始化个人奖池

                tUserJackpot newJackpot = GetNewUserJackpot(userid);
                UJackpotRange _jackpot = newJackpot._potRange.Find(p => p._type == type);
                AddOrUpdate(newJackpot);
                return ToolsEx.DeepCopy(_jackpot);
            }
            else
            {
                if (myJackpot._potRange != null)
                {
                    UJackpotRange _jackpot = myJackpot._potRange.Find(p => p._type == type);
                    if (_jackpot != null)
                    {
                        return ToolsEx.DeepCopy(_jackpot);
                    }
                    else
                    {
                        UJackpotRange _newjackpot = GetNewUJackpot(type);
                        myJackpot._potRange.Add(_newjackpot);
                        return ToolsEx.DeepCopy(_newjackpot);
                    }
                } 
            }  
            return new UJackpotRange();
        }
        public static async void UpdateUserJackpot(BaseUser user, long winorlost)
        {
            user._jackpot._pot+=winorlost;
            AddOrUpdate(user._jackpot);

        }
        /// <summary>
        /// 更新奖池，持久化
        /// </summary> 
        public static async void UpdateUserJackpot(int userid, long winorlost,bool bNewRoom = false)
        {

            tUserJackpot myJackpot = await GetFromCachebyUserID(userid);
            if (myJackpot == null)
            {   //初始化个人奖池
                myJackpot = GetNewUserJackpot(userid);
            }

            if (myJackpot != null)
            {
                tuserInfoEx infoEx = await tb_userinfoEx.GetFromCachebyUserID(userid);
                int iWhiteUser = GlobalSysConfig.GetValue("WhiteUser").ToInt32();
                int call = 0;
                if (myJackpot.DgStatus == 0 || (!bNewRoom && infoEx.bNewPlayer && myJackpot.EffecTiveType == 0 && myJackpot.DgStatus!=0))//未点控
                {
                    myJackpot._pot += winorlost;
                }
                else if (myJackpot.DgStatus == 1)//点控赢
                {
                    call = -1;
                }
                else if (myJackpot.DgStatus == 2)//点控输
                {
                    call = 1;
                }

                myJackpot.updatetime = DateTime.Now;
                if (winorlost >= 0)////没输那就是赢了
                {
                    myJackpot.watergoldadd += (ulong)winorlost;
                    myJackpot.DgCurrScore += (call * winorlost);
                }
                else
                {
                    myJackpot.watergoldreduce += (ulong)(winorlost * -1);
                    myJackpot.DgCurrScore += (call * winorlost);
                }
                ChangeDKStatus(iWhiteUser, infoEx, myJackpot);

            }
            AddOrUpdate(myJackpot);

        }
        /// <summary>
        /// 检查充值点控
        /// </summary>
        /// <param name="userid"></param>
        public static async void CheckReChangeDg(int userid)
        {
            int iWhiteUser = GlobalSysConfig.GetValue("WhiteUser").ToInt32();
            tuserInfoEx infoEx = await tb_userinfoEx.GetFromCachebyUserID(userid);
            if (iWhiteUser == 1)
            {
                tUserJackpot myJackpot = await GetFromCachebyUserID(userid);
                ChangeDKStatus(iWhiteUser, infoEx, myJackpot);
            }
            
            ChangeNewPlayerControlStatus(infoEx, 0, true);
        }
        /// <summary>
        /// 修改点控状态
        /// </summary>
        public static async void ChangeDKStatus(int iWitheUser,tuserInfoEx infoEx,tUserJackpot jackpot)
        {
            if (jackpot._potRange == null || jackpot._potRange.Count <= 0)
            {
                jackpot._potRange = new CacheList<UJackpotRange>();
                jackpot._potRange.Add(GetNewUJackpot(0));
                jackpot._potRange.Add(GetNewUJackpot(1));
                jackpot._potRange.Add(GetNewUJackpot(2));
                AddOrUpdate(jackpot);
            }
            if (jackpot.DgStatus != 0)//处于点控状态则检测是否点控结束
            {
                if (infoEx.bNewPlayer)
                {
                    ChangeNewPlayerControlStatus(infoEx, 0, false);
                }
                else
                {
                    UJackpotRange uJackpotRange = jackpot._potRange.Find(p => p._type == jackpot.EffecTiveType);
                    if (jackpot.DgCurrScore <= 0)//当前点控进度为负数时，点控结束
                    {
                        uJackpotRange.goldt = 0;
                        jackpot.DgCurrScore = 0;
                        jackpot.DgStatus = 0;
                        AddOrUpdate(jackpot);
                    }
                    else if (uJackpotRange != null && uJackpotRange.end <= DateTime.Now && uJackpotRange._type != 1)//点控时间到了，强制结束
                    {
                        uJackpotRange.goldt = 0;
                        jackpot.DgCurrScore = 0;
                        jackpot.DgStatus = 0;
                        AddOrUpdate(jackpot);
                    }
                    else
                    {
                        return;
                    }
                }
               
                
            }
            else
            {
                if (jackpot._potRange == null)
                {
                    jackpot._potRange = new CacheList<UJackpotRange>();
                    jackpot._potRange.Add(GetNewUJackpot(0));
                    jackpot._potRange.Add(GetNewUJackpot(1));
                    jackpot._potRange.Add(GetNewUJackpot(2));
                }
                UJackpotRange uJackpotRange = jackpot._potRange.Find(p => p._type == 2);//优先判断GM点控
                if(uJackpotRange!=null && uJackpotRange.stime<=DateTime.Now && uJackpotRange.end > DateTime.Now && uJackpotRange.goldt > 0)
                {
                    jackpot.DgCurrScore = uJackpotRange.goldt;
                    jackpot.DgTotalScore = uJackpotRange.goldt;
                    jackpot.EffecTiveType = uJackpotRange._type;
                    jackpot._pot = 0;
                    jackpot.DgLimit = uJackpotRange.DgLimit;
                    jackpot.DgStatus = uJackpotRange.bWin ? 1 : 2;
                    AddOrUpdate(jackpot);
                    if (infoEx.bNewPlayer)
                    {
                        infoEx.bNewPlayer = false;
                        await BaseHelper.AddOrUpdateBase(infoEx);
                    }
                    return;
                }

                DKUserStock WhiteUserStock = GlobalSysConfig.GetValue<DKUserStock>("WhiteUserStock");//点赢控制配置
                DKUserStock BlackUserStock = GlobalSysConfig.GetValue<DKUserStock>("BlackUserStock");//点输控制配置
                
                long userPotScore = jackpot._pot;
                if (iWitheUser == 1)//开启充值点赢
                {
                    if (userPotScore <= WhiteUserStock.potScore)
                    {
                        int DkLimit = jackpot.chargeCount * WhiteUserStock.baseNum;//自动点赢作弊率=当日充值次数*自动点赢作弊率基数（范围为+-1000，超过范围时则取最大值或最小值）；
                        if (DkLimit > 1000) DkLimit = 1000;
                        else if (DkLimit < -1000) DkLimit = 1000;
                        //自动点赢额度=当前个人奖池额度的绝对值*（自动点赢额度比例下限~自动点赢额度比例上限的随机值）
                        int fValue = ToolsEx.GetRandomSys((int)(WhiteUserStock.minValue*1000),(int)(WhiteUserStock.maxValue*1000));
                        long DKTotalScore = (fValue*Math.Abs(userPotScore))/1000;
                        jackpot.DgCurrScore = DKTotalScore;
                        jackpot.DgTotalScore = DKTotalScore;
                        jackpot.EffecTiveType = 1;
                        jackpot._pot = 0;
                        jackpot.DgLimit = DkLimit;
                        jackpot.DgStatus = 1;
                        AddOrUpdate(jackpot);
                        if (infoEx.bNewPlayer)
                        {
                            infoEx.bNewPlayer = false;
                            await BaseHelper.AddOrUpdateBase(infoEx);
                        }
                        return;
                    }
                }
                else if (iWitheUser == 2)//开启自动点赢
                {
                    if (userPotScore <= WhiteUserStock.potScore)
                    {
                        int DkLimit = jackpot.chargeCount * WhiteUserStock.baseNum;//自动点赢作弊率=当日充值次数*自动点赢作弊率基数（范围为+-1000，超过范围时则取最大值或最小值）；
                        if (DkLimit > 1000) DkLimit = 1000;
                        else if (DkLimit < -1000) DkLimit = 1000;
                        //自动点赢额度=当前个人奖池额度的绝对值*（自动点赢额度比例下限~自动点赢额度比例上限的随机值）
                        int fValue = ToolsEx.GetRandomSys((int)(WhiteUserStock.minValue * 1000), (int)(WhiteUserStock.maxValue * 1000));
                        long DKTotalScore = (fValue * Math.Abs(userPotScore)) / 1000;
                        jackpot.DgCurrScore = DKTotalScore;
                        jackpot.DgTotalScore = DKTotalScore;
                        jackpot.EffecTiveType = 1;
                        jackpot._pot = 0;
                        jackpot.DgLimit = DkLimit;
                        jackpot.DgStatus = 1;
                        AddOrUpdate(jackpot);
                        if (infoEx.bNewPlayer)
                        {
                            infoEx.bNewPlayer = false;
                            await BaseHelper.AddOrUpdateBase(infoEx);
                        }
                        return;
                    }
                }
                //进行自动点输判断
                if (userPotScore >= BlackUserStock.potScore)
                {
                    jackpot.DgLoseTimes++;
                    int DkLimit = jackpot.DgLoseTimes * WhiteUserStock.baseNum;//自动点输作弊率=当日累计点输次数*自动点赢作弊率基数
                    if (DkLimit > 1000) DkLimit = 1000;
                    else if (DkLimit < -1000) DkLimit = 1000;
                    //自动点输额度=当前个人奖池额度的绝对值*（自动点输额度比例下限~自动点输额度比例上限的随机值）
                    int fValue = ToolsEx.GetRandomSys((int)(BlackUserStock.minValue * 1000), (int)(BlackUserStock.maxValue * 1000));
                    long DKTotalScore = (fValue * Math.Abs(userPotScore)) / 1000;
                    jackpot.DgCurrScore = DKTotalScore;
                    jackpot.DgTotalScore = DKTotalScore;
                    jackpot.EffecTiveType = 1;
                    jackpot._pot = 0;
                    jackpot.DgLimit = DkLimit;
                    jackpot.DgStatus = 2;
                    AddOrUpdate(jackpot);
                    if (infoEx.bNewPlayer)
                    {
                        infoEx.bNewPlayer = false;
                        await BaseHelper.AddOrUpdateBase(infoEx);
                    }
                    return;
                }
            }
        }
        /// <summary>
        /// 切换新手控制状态以及新手点控信息
        /// </summary>
        /// <param name="infoEx"></param>
        /// <param name="clubid"></param>
        /// <param name="bReChange"></param>
        public static async void ChangeNewPlayerControlStatus(tuserInfoEx infoEx,int clubid,bool bReChange)
        {
            DKNewPlayer player = GetDKNewPlayer();
            if (player == null) return;
            if (player.IsOpenNewControl == 1 && infoEx.bNewPlayer)
            {
                tUserJackpot jackpot = await GetFromCachebyUserID(infoEx.UserID);
                ulong totalWaterGold = jackpot.watergoldadd + jackpot.watergoldreduce;
                int iPlayCount = await tUserGamehandEx.GetTotalHandCount(infoEx.UserID, clubid);
                if(totalWaterGold<player.NewPlayerWater && player.NewPlayerPlayCount>iPlayCount)
                {
                    if (jackpot.DgStatus == 0)//未被点控
                    {
                        jackpot.DgCurrScore = ToolsEx.GetRandomSys(player.DKTotalScore[0],player.DKTotalScore[1]);
                        jackpot.DgTotalScore = jackpot.DgCurrScore;
                        jackpot.DgStatus = 1;
                        jackpot.DgLimit = player.NormalDKLimit;
                        jackpot.EffecTiveType = 0;
                    }
                    if (player.ReChangeBuffDKScore == null || player.ReChangeBuffDKScore.Length < 3) return;
                    if(jackpot.DgLimit == player.NormalDKLimit && bReChange)
                    {
                        if (ToolsEx.CheckPercent((int)player.ReChangeBuffDKScore[0]))
                        {
                           int iTmpScore = ToolsEx.GetRandomSys((int)(player.ReChangeBuffDKScore[1] * player.ReChangeBuffDKScore[3]), (int)(player.ReChangeBuffDKScore[2] * player.ReChangeBuffDKScore[3]));
                            jackpot.DgCurrScore += iTmpScore;
                            jackpot.DgTotalScore += iTmpScore;
                            jackpot.DgLimit = player.ReChangeDKLimit;
                        }
                    }
                    if (jackpot.DgStatus != 0 && jackpot.DgCurrScore <= 0)
                    {
                        jackpot.DgCurrScore = 0;
                        jackpot.DgStatus = 0;
                        infoEx.bNewPlayer = false;
                        await BaseHelper.AddOrUpdateBase(infoEx);
                    }
                    
                }
                else
                {
                    infoEx.bNewPlayer = false;
                    jackpot.DgCurrScore = 0;
                    jackpot.DgStatus = 0;
                    await BaseHelper.AddOrUpdateBase(infoEx);
                }
                AddOrUpdate(jackpot);
            }
        }
        /// <summary>
        /// 获取点控状态
        /// </summary>
        /// <param name="userid"></param>
        /// <returns></returns>
        public static async Task<DKStatus> GetDKStatus(int userid,bool bNewRoom = false)
        {
            tUserJackpot myJackpot = await GetFromCachebyUserID(userid);
            tuserInfoEx infoEx = await tb_userinfoEx.GetFromCachebyUserID(userid);
            if (myJackpot == null)
            {
                myJackpot = GetNewUserJackpot(userid);
                AddOrUpdate(myJackpot);
            }
            if (myJackpot._potRange == null || myJackpot._potRange.Count <= 0)
            {
                myJackpot._potRange = new CacheList<UJackpotRange>();
                myJackpot._potRange.Add(GetNewUJackpot(0));
                myJackpot._potRange.Add(GetNewUJackpot(1));
                myJackpot._potRange.Add(GetNewUJackpot(2));
                AddOrUpdate(myJackpot);
            }
            int iWhiteUser = GlobalSysConfig.GetValue("WhiteUser").ToInt32();
            ChangeDKStatus(iWhiteUser, infoEx, myJackpot);
            DKStatus status = new DKStatus();
            if (myJackpot.DgStatus != 0 && myJackpot.EffecTiveType == 0&& !bNewRoom)
            {
                return status;
            }
            status.status = myJackpot.DgStatus;
            if(status.status != 0)
            {
                UJackpotRange r = myJackpot._potRange.Find(p => p._type == myJackpot.EffecTiveType);
                status.MaxLimit = (long)(myJackpot.DgTotalScore*(r.ControlLimitRatio/100f));
                status.MinLimit = (long)(myJackpot.DgTotalScore * (r.ControlEndRatio / 100f));
                status.currScore = myJackpot.DgCurrScore;
                status.TotalScore = myJackpot.DgTotalScore;
                status.DgLimit = myJackpot.DgLimit;
            }
            return status;
        }
        /// <summary>
        /// GM设置点控信息
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="ujackpot"></param>
        /// <returns></returns>
        public static async Task<int> GMSetDKInfo(int userid,UJackpotRange ujackpot)
        {
            if(ujackpot==null) return -1;
            if (ujackpot._type > 2 || ujackpot._type < 0) return -2;
            tUserJackpot myJackpot = await GetFromCachebyUserID(userid);
            if (myJackpot == null)
            {
                myJackpot = GetNewUserJackpot(userid);
            }
            var pot = myJackpot._potRange.Find(p=>p._type == ujackpot._type);
            pot.stime = ujackpot.stime;
            pot._type = ujackpot._type;
            pot.end = ujackpot.end;
            pot.bWin = ujackpot.bWin;
            pot.ControlLimitRatio = ujackpot.ControlLimitRatio;
            pot.ControlEndRatio = ujackpot.ControlEndRatio;
            pot.goldt = ujackpot.goldt;
            AddOrUpdate(myJackpot);
            return 1;
        }
        /// <summary>
        /// 获取新手点控配置
        /// </summary>
        /// <returns></returns>
        public static DKNewPlayer GetDKNewPlayer()
        {
            DKNewPlayer newPlayer = CommonFun.LoadControlConfig<DKNewPlayer>(0, "NewPlayerControl");
            if (newPlayer == null) return null;
            return newPlayer;
        }

        public static int GetAddRate(int userid, int gameid)
        {
            //tUserJackpot myJackpot = await  GetFromCachebyUserID(userid);
            //UJackpotRange _jackpot = null;
            //if (myJackpot != null)
            //{
            //    _jackpot = myJackpot._potRange.Find(p => p.gameid == gameid);
            //}
            //if (_jackpot != null)
            //{
            //    return _jackpot.addrate;
            //}
            return 0;
        }

    }


}

