using ETModel;
using ETModel.Framework.Common.Serialization;
using ETModel.Framework.Game.Sns;
using ETModel.Script.CsScript.Action;
using ETModel.Script.Model;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Model.Scut_Script.Common
{
    public class ConnectManager : Entity
    {
    
        /// <summary>
        /// 接口平台离开 结构
        /// </summary>
        public class LeaveInfo
        {
            public long timeout;
            public int RetailID;
            public int UserID;
            public string RetailUser;
            public string UserName;
            public string PassportId;
            public long Gold;
        }

        private static ConnectManager instance;
        public static ConnectManager Instance { get { if (instance == null) instance = new ConnectManager(); return instance; } }
        private ConnectManager() { }
        Dictionary<int, LeaveInfo> offlineusers = new Dictionary<int, LeaveInfo>();
        Dictionary<int, SnsUser> snsdic = new Dictionary<int, SnsUser>();
        Dictionary<int, RetailInfo> retaildic = new Dictionary<int, RetailInfo>();
        public int outtime = 300000;
        private Session dbsession;
        public Session DBSession { get { if (dbsession == null) dbsession = Game.Scene.GetComponent<NetInnerComponent>().Get(StartConfigComponent.Instance.RedisDBConfig.GetComponent<InnerConfig>().IPEndPoint); return dbsession; } }

        public async Task<SnsUser> GetSnsUser(int userid)
        {
            if (!snsdic.TryGetValue(userid, out SnsUser sns)) { 
                sns = await SnsManager.GetUserInfoByUserId(userid);
                if (snsdic.ContainsKey(userid))
                {
                    snsdic[userid] = sns;
                }
                else
                {
                    snsdic.Add(userid, sns);
                }
                
            }
            return sns;
        }
        public async Task<RetailInfo> GetRetailInfo(int retailid)
        {
            if (!retaildic.TryGetValue(retailid, out RetailInfo info)) { info = await BaseHelper.GetBaseDB<RetailInfo>(retailid); retaildic.Add(retailid, info); }
            return info;
        }
        public void SetRetailInfo(int retailid, RetailInfo info)
        {
            retaildic[retailid] = info;
        }
        public LeaveInfo CreateInfo(tUser user, SnsUser snsuser)
        {
            return new LeaveInfo
            {
                timeout = DateTime.Now.Millisecond + outtime,
                Gold = -user.GetGoldAndWinGold,
                UserID = user.UserID,
                RetailID = user.RetailID,
                UserName = user.wechatName,
                PassportId = snsuser.PassportId,
                RetailUser = snsuser.RetailUser,
            };
        }
        public async void Offline(int UserID)
        {
            var user = await BaseHelper.GetBase<tUser>(UserID);
            if (user != null && user.RetailID > 0)
            {
                var snsuser = await GetSnsUser(UserID);
                if (snsuser != null && snsuser.RetailID == user.RetailID.ToString()) offlineusers[UserID] = CreateInfo(user, snsuser);
            }
            Game.Scene.GetComponent<LobbyProxyComponent>()?.UpdateUserInGame(UserID, false);
            //    if (!snsdic.TryGetValue(userid, out SnsUser user))
            //{
            //    user = SnsManager.GetUserInfoByUserId(userid);
            //    if (!string.IsNullOrWhiteSpace(user.RetailID) && !string.IsNullOrWhiteSpace(user.RetailUser))
            //    {
            //        if (!retaildic.TryGetValue(user.RetailID, out RetailInfo info))
            //        {
            //            info = await BaseHelper.GetShare<RetailInfo>((p) => p.RetailID == user.RetailID);
            //            retaildic.Add(user.RetailID, info);
            //        }
            //        if (info != null) snsdic.Add(userid, user);
            //        else { user = null; snsdic.Add(userid, user); }
            //    }
            //    else { user = null; snsdic.Add(userid, user); }
            //}
            //if (user != null) offlineusers.Add(userid, DateTime.Now.Millisecond + outtime);
        }
        public void Online(int userid)
        {
            Console.WriteLine("玩家[" + userid + "]上线");
            offlineusers.Remove(userid);
            Game.Scene.GetComponent<LobbyProxyComponent>()?.UpdateUserInGame(userid, true);
        }
        public async void OutTime()
        {
            long sta = DateTime.Now.Millisecond;
            List<int> timeouts = new List<int>();
            foreach (var item in offlineusers)
            {
                if (item.Value.timeout < sta) { GameLeave(item.Value); timeouts.Add(item.Key); }
            }
            foreach (int userid in timeouts) offlineusers.Remove(userid);
            await ETTask.CompletedTask;
        }
        public async void GameLeave(LeaveInfo info)
        { 
            try
            {
                DBSession.Send(new RedisDB_RatailUserRequset() { Gold = info.Gold, RetailID = info.RetailID, PassportId = info.PassportId, RetailUser = info.RetailUser, UserID = info.UserID, UserName = info.UserName, Type = 1 });
                Console.WriteLine($"玩家[{info.UserID}.{info.RetailUser}]离开游戏转移[{info.Gold}]至商户[{info.RetailID}.{info.UserName}]");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"玩家[{info.UserID}.{info.RetailUser}]离开游戏转移[{info.Gold}]至商户[{info.RetailID}.{info.UserName}]时发生异常!!!\r\n{ex.Message}\r\n{ex.StackTrace}");
                TraceLogEx.Error(ex, $"玩家[{info.UserID}.{info.RetailUser}]离开游戏转移[{info.Gold}]至商户[{info.RetailID}.{info.UserName}]时发生异常!!!");
            }            
            await ETTask.CompletedTask; 

        }

        public async Task<sc_retail_user_login> Login(cs_retail_user_login info)
        {
            var snsuser = await GetSnsUser(info.UserID);
            if (snsuser == null || snsuser.UserId == 0) return new sc_retail_user_login(info.RetailID, info.UserID, info.RetailUser, info.UserName, info.PassportId, info.Gold, GMService.secret, 2, $"用户[{info.UserID}]不存在");
            var rinfo = await GetRetailInfo(info.RetailID);
            if (rinfo == null) return new sc_retail_user_login(info.RetailID, info.UserID, info.RetailUser, info.UserName, info.PassportId, info.Gold, GMService.secret, 1, $"商家[{ info.RetailID}]不存在");
            if (info.Gold > rinfo.Gold)
            {
                return new sc_retail_user_login(info.RetailID, info.UserID, info.RetailUser, info.UserName, info.PassportId, info.Gold, GMService.secret, 4, $"商户余额不足");
            }
            if (snsuser.RetailID != rinfo.RetailID) return new sc_retail_user_login(info.RetailID, info.UserID, info.RetailUser, info.UserName, info.PassportId, info.Gold, GMService.secret, 3, $"用户数据中商户编号[{snsuser.RetailID}]与参数中商户编号[{rinfo.RetailID}]不一致");
            try
            {
                //if (info.Check(GMService.secret))
                {
                    var rsp = (RedisDB_RatailUserReply)await DBSession.Call(new RedisDB_RatailUserRequset() { Gold = info.Gold, RetailID = info.RetailID, PassportId = info.PassportId, RetailUser = info.RetailUser, UserID = info.UserID, UserName = info.UserName });
                    if (rsp.Error == 0) return new sc_retail_user_login(info.RetailID, info.UserID, info.RetailUser, info.UserName, info.PassportId, rsp.lGold, GMService.secret);
                    else return new sc_retail_user_login(info.RetailID, info.UserID, info.RetailUser, info.UserName, info.PassportId, info.Gold, GMService.secret, rsp.Error - ErrorCode.ERR_Fail, rsp.Message);
                }
                return new sc_retail_user_login(info.RetailID, info.UserID, info.RetailUser, info.UserName, info.PassportId, info.Gold, GMService.secret, 5, "验证码错误");
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "转移金币发生异常");
                return new sc_retail_user_login(info.RetailID, info.UserID, info.RetailUser, info.UserName, info.PassportId, info.Gold, GMService.secret, 6, "转移金币发生异常");
            }
        }
        public async Task<sc_retail_user_transglod> TransGlod(cs_retail_user_transglod info)
        {
            var snsuser = await GetSnsUser(info.UserID);
            if (snsuser == null || snsuser.UserId==0) return new sc_retail_user_transglod( GMService.secret,0, 2, $"用户[{info.UserID}]不存在");
            var rinfo = await GetRetailInfo(info.RetailID);
            if (rinfo == null) return new sc_retail_user_transglod(GMService.secret,0, 1, $"商家[{ info.RetailID}]不存在");
            if (rinfo.Ratio <= 0) rinfo.Ratio = 1;
            if (info.Gold > rinfo.Gold)
            {
                return new sc_retail_user_transglod(GMService.secret, 0, 4, $"商户余额不足");
            }
            if(info.Gold < 0)
            {
                UserStatus status = await BaseHelper.GetUserStatusbyUserID(info.UserID);
                if(status!=null && (status.Gameid!=0 || status.Levelid != 0))
                {
                    return new sc_retail_user_transglod(GMService.secret, 0, 12, $"玩家在游戏中，不能转出金额");
                }
            }

            if (snsuser.RetailID != rinfo.RetailID) return new sc_retail_user_transglod(GMService.secret,0, 3, $"用户数据中商户编号[{snsuser.RetailID}]与参数中商户编号[{rinfo.RetailID}]不一致");
            try
            {
                //if (info.Check(GMService.secret))
                {
                    var rsp = (RedisDB_RatailUserReply)await DBSession.Call(new RedisDB_RatailUserRequset() {Ratio = rinfo.Ratio,TransID = info.TransID, Gold = info.Gold, RetailID = info.RetailID, PassportId = info.PassportId, RetailUser = "", UserID = info.UserID, UserName = "",Type=2 });
                    if (rsp.Error == 0) return new sc_retail_user_transglod( GMService.secret, rsp.lGold);
                    else return new sc_retail_user_transglod(GMService.secret,info.Gold, rsp.Error-ErrorCode.ERR_Fail, rsp.Message);
                }
                return new sc_retail_user_transglod(GMService.secret,0, 5, "验证码错误");
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "额度转换发生异常");
                return new sc_retail_user_transglod(GMService.secret,0, 6, "额度转换发生异常");
            }
        }
        public async Task<sc_setRetailInfo_gm> SetRetailInfo(cs_setRetailInfo_gm info)
        {
            sc_setRetailInfo_gm reSendData = new sc_setRetailInfo_gm() { _ret=1};
            try
            {
                int retailid = int.Parse(info.info.RetailID);
                var rinfo = await GetRetailInfo(retailid);
                if (rinfo == null)
                {
                    reSendData._ret = 0;
                    SetRetailInfo(retailid, info.info);
                }
                else
                {
                    reSendData._ret = 0;
                    info.info.Id = rinfo.Id;
                    SetRetailInfo(retailid, info.info);
                }
            }
            catch(Exception e)
            {
                reSendData._info = e.Message;
            }
            
            return reSendData;
        }

        public async Task<sc_retail_exitgame> RetailExitGame(cs_retail_exitgame info)
        {
            var snsuser = await GetSnsUser(info.UserID);
            if (snsuser == null || snsuser.UserId == 0) return new sc_retail_exitgame(GMService.secret, 0, 2, $"用户[{info.UserID}]不存在");
            var rinfo = await GetRetailInfo(info.RetailID);
            if (rinfo == null) return new sc_retail_exitgame(GMService.secret, 0, 1, $"商家[{ info.RetailID}]不存在");
            if (snsuser.RetailID != rinfo.RetailID) return new sc_retail_exitgame(GMService.secret, 0, 3, $"用户数据中商户编号[{snsuser.RetailID}]与参数中商户编号[{rinfo.RetailID}]不一致");
            if (rinfo.Ratio <= 0) rinfo.Ratio = 1;
            var user = await BaseHelper.GetBase<tUser>(info.UserID);
            if (user == null || user.UserID == 0) return new sc_retail_exitgame(GMService.secret, 0, 2, $"用户[{info.UserID}]不存在");
            UserStatus status = await BaseHelper.GetUserStatusbyUserID(info.UserID);
            if (status==null)
            {
                return new sc_retail_exitgame(GMService.secret, 0, 13, $"玩家已不在游戏中");
            }
            if (user.GetGoldAndWinGold >0)
            {
                long lTmpGold = (long)Math.Floor(user.GetGoldAndWinGold / (float)rinfo.Ratio);
                try
                {
                    if(status.Gameid == 0  && status.Levelid == 0)
                    {
                       ///没有状态 正常流程
                        return new sc_retail_exitgame(GMService.secret, lTmpGold);
                    }
                    else
                    //if (info.Check(GMService.secret))
                    { 
                        string scresult = await CommonLogic.ApplyExitTable(user, status.Gameid,  status.TableID );
                        if (scresult != "1"  && scresult != "0")
                        {
                            //var rsp = (RedisDB_RatailUserReply)await DBSession.Call(new RedisDB_RatailUserRequset() { Ratio = rinfo.Ratio, TransID = IdGenerater.GenerateId().ToString(), Gold = -(user.GetGoldAndWinGold / rinfo.Ratio), RetailID = info.RetailID, PassportId = info.PassportId, RetailUser = "", UserID = info.UserID, UserName = "", Type = 1 });
                            //if (rsp.Error == 0)
                            //{
                            //    return new sc_retail_exitgame(GMService.secret, lTmpGold);
                            //}
                            //else return new sc_retail_exitgame(GMService.secret, 0, rsp.Error - ErrorCode.ERR_Fail, rsp.Message);
                            return new sc_retail_exitgame(GMService.secret, lTmpGold);
                        }
                        else
                        {
                            TraceLogEx.Log($"退出游戏失败【1】{scresult}");
                            return new sc_retail_exitgame(GMService.secret, 0, 14, $"退出游戏失败");
                        }
                    }
                }
                catch (Exception ex)
                {
                    TraceLogEx.Error(ex, "额度转换发生异常");
                    return new sc_retail_exitgame(GMService.secret, lTmpGold, 6, "退出异常");
                }
            }
            else
            {
                if (status.Gameid == 0  )
                {

                    return new sc_retail_exitgame(GMService.secret,0);
                }
                string scresult = await CommonLogic.ApplyExitTable(user,  status.Gameid,  status.TableID);
                if (scresult != "1" && scresult != "0")
                {
                    return new sc_retail_exitgame(GMService.secret, 0);
                }
                else
                {
                    TraceLogEx.Log($"退出游戏失败【2】{scresult}");
                    return new sc_retail_exitgame(GMService.secret, 0,14,$"退出游戏失败");
                }
                
            } 
        }

    }
}
