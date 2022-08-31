using Common.NLog;
using ETModel.Framework.Common.Serialization;
using ETModel.Framework.Game.Contract;
using ETModel.Script.Model;
using Model.Scut_Script.Common;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading;
using System.Threading.Tasks;
using System.Web;

namespace ETModel.Script.CsScript.Action
{
    public class GMService
    {

        public static GMService Current;
        static GMService()
        {
            Current = new GMService();
        }
        private GMService()
        {
            httpListener = new HttpListener();
        }

        private HttpListener httpListener;

        /// <summary>
        /// 请求方式:http://127.0.0.1:8080/Service/?CMD=1001|1,2,3
        /// </summary>
        /// <param name="address">http://127.0.0.1</param>
        /// <param name="port">8080</param>
        /// <param name="httpName">Service</param>
        public void Start(string address, int port, string httpName)
        {

            try
            {
                string url = string.Format("{0}:{1}/{2}/", address, port, httpName);
                httpListener.Prefixes.Add(url);
                httpListener.Start();
                httpListener.BeginGetContext(OnHttpRequest, httpListener);
                TraceLog.WriteInfo(address + " GM服务启动成功!");
            }
            catch (Exception ex)
            {
                TraceLog.WriteError("GM服务器启动失败,\n{0}\n{1}", ex.Message.ToString(), ex.StackTrace.ToString());
            }
        }

        private async void OnHttpRequest(IAsyncResult result)
        {

            try
            {
                string ErrorCode = "1";
                HttpListener listener = (HttpListener)result.AsyncState;
                HttpListenerContext context = listener.EndGetContext(result);
                listener.BeginGetContext(OnHttpRequest, listener);

                string address = context.Request.RemoteEndPoint.Address.ToString();
                AutoResetEvent waitHandle = new AutoResetEvent(false);
                int index = context.Request.RawUrl.IndexOf("?data=", StringComparison.OrdinalIgnoreCase);
                if (index != -1)
                {
                    string _baseData = context.Request.RawUrl.Substring(index + 6);
                    string _json = HttpUtility.UrlDecode(_baseData);
                    ErrorCode = await DoExecCmd(address, _json);
                }
                context.Response.ContentType = "application/json";// "text/plain";// "application/octet-stream";
                StreamWriter output = new StreamWriter(context.Response.OutputStream);
                output.Write(ErrorCode);
                output.Close();
                context.Response.Close();
            }
            catch (Exception ex)
            {
                TraceLog.WriteError("OnHttpRequest error:{0}", ex);
            }
            finally
            {

            }

        }



        #region swich方法        
        /// <summary>
        /// 获取在线玩家状态
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        private async Task<string> GetOnlineUserStaus(string json)
        {
            cs_getonlineuserstatus_gm online = JsonUtils.Deserialize<cs_getonlineuserstatus_gm>(json);
            sc_getonlineuserstatus_gm reOnLine = new sc_getonlineuserstatus_gm() { _ret = 1,userstatus = new List<UserStatus>() };
            List<tUser> tusers = new List<tUser>();
            if (online.retailid != 0)
            {
                tusers = await BaseHelper.GetBaseAll<tUser>(t => t.RetailID == online.retailid);
                if (tusers == null || tusers.Count <= 0)
                {
                    reOnLine._ret = 0;
                    return JsonUtils.Serialize(reOnLine);
                }
            }
            List<UserStatus> userStatuses = await BaseHelper.GetAllUserStatus();
            foreach(var v in userStatuses)
            {
                //if((online.gameid==0 || online.gameid==v.Gameid)&&(online.levelid==0 || online.levelid==v.Levelid)&&(tusers.Count==0 || tusers.Find(t=>t.UserID==v.UserID)!=null))
                //{
                //    reOnLine.userstatus.Add(v);
                //}
                if (online.gameid == 0)
                {
                    reOnLine.userstatus.Add(v);
                }
                else if(online.gameid == v.Gameid)
                {
                    reOnLine.userstatus.Add(v);
                }

            }
            reOnLine._ret = 0;
            return JsonUtils.Serialize(reOnLine);
        }

        private async ETTask<string> GetAllUserStatus()
        {
            List<UserStatus> userStatuses = await BaseHelper.GetAllUserStatus();
            return JsonUtils.Serialize(userStatuses);
        }
        /// <summary>
        /// 加载游戏配置文件
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        private async Task<string> LoadGameConfig(string json)
        {
            cs_loadgameconfig_gm config = JsonUtils.Deserialize<cs_loadgameconfig_gm>(json);
            if (config.bAll)
            {
                string strPath = StartConfigComponent.Instance.ConfigPath + $"/GameConfig";
                DirectoryInfo root = new DirectoryInfo(strPath);
                DirectoryInfo[] infos = root.GetDirectories();
                string strValue = "";
                foreach (var v in infos)
                {
                    int gameid = 0;
                    int.TryParse(v.Name, out gameid);
                    foreach (var f in v.GetFiles("*.json"))
                    {
                        if (f.Name.EndsWith("_config.json"))
                        {
                            int levelid = 0;
                            if (int.TryParse(f.Name.Replace("_config.json", ""), out levelid))
                            {
                                //string reValue = await ContorlHelper.LoadGameConfigEx(gameid, levelid);
                                //if (reValue.Length > 0) strValue += $"{reValue}\n";
                                //else strValue += $"游戏{levelid}更新成功\n";
                            }
                        }
                    }

                }
                return strValue;
            }
            else
            {
                //string reValue = await ContorlHelper.LoadGameConfigEx(config.gameid, config.levelid);
                //if (reValue.Length == 0) return "更新成功";
            }
            return $"有问题哦";
        }

        /// <summary>
        /// 加载游戏配置文件
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        private string RunStartRobotPlayGame(string json)
        {
            cs_robotenterroom_gm config = JsonUtils.Deserialize<cs_robotenterroom_gm>(json);
            //if (config.userCount >= ContorlHelper.AIUserID.Length)
            //{
            //    return $"服务器没有这么多机器人，目前只有{ContorlHelper.AIUserID.Length}";
            //}
            //if (ContorlHelper.iWaitRobotCount > 0)
            //{
            //    return $"上次的机器人尚未完全进入游戏，请稍等";
            //}
            //else
            //{
            //    ContorlHelper.RunRobot(config);
            //}

            return $"机器人模拟游戏已启动";
        }
        private async Task<string> UpdateControlData(string json)
        {
            cs_updatecontroldata_gm config = JsonUtils.Deserialize<cs_updatecontroldata_gm>(json);
            string strValue = "";
            string strFileText = LoadUpdateConfig();
            if (config.IsFile) config = JsonUtils.Deserialize<cs_updatecontroldata_gm>(strFileText);
            try
            {
                if (config.JockScore != null)
                {
                    foreach (var v in config.JockScore)
                    {
                        int gameid = (v.Key - v.Key % 10) / 10;
                        if (gameid == 2540 || gameid == 2541) gameid /= 10;
                        tjackpot jackpot = await tjackpotEx.GetJackpot(gameid, v.Key);
                        if (jackpot != null)
                        {
                            jackpot.jackpot = v.Value;
                            jackpot.modifyTime = DateTime.Now;
                            await BaseHelper.AddOrUpdate(jackpot, !config.IsFile);
                        }
                    }
                }
                if (config.JockStockScore != null)
                {
                    foreach (var v in config.JockStockScore)
                    {
                        int gameid = (v.Key - v.Key % 10) / 10;
                        tjackpotstock jackpot = await tjackpotStoreEx.GetJackpotStock(gameid, v.Key);
                        if (jackpot != null)
                        {
                            jackpot.stock = v.Value;
                            jackpot.initstock = v.Value;
                            jackpot.modifyTime = DateTime.Now;
                            tjackpotStoreEx.AddOrUpdate(jackpot, !config.IsFile);
                        }

                    }
                }
                if (config.JockStockTax != null)
                {
                    foreach (var v in config.JockStockTax)
                    {
                        int gameid = (v.Key - v.Key % 10) / 10;
                        tjackpotstock jackpot = await tjackpotStoreEx.GetJackpotStock(gameid, v.Key);
                        if (jackpot != null)
                        {
                            jackpot.pump = v.Value;
                            jackpot.modifyTime = DateTime.Now;
                            tjackpotStoreEx.AddOrUpdate(jackpot, !config.IsFile);
                        }

                    }
                }
                if (config.JockStockbalanceScore != null)
                {
                    foreach (var v in config.JockStockbalanceScore)
                    {
                        int gameid = (v.Key - v.Key % 10) / 10;
                        tjackpotstock jackpot = await tjackpotStoreEx.GetJackpotStock(gameid, v.Key);
                        if (jackpot != null)
                        {
                            jackpot.balanceScore = v.Value;
                            jackpot.modifyTime = DateTime.Now;
                            tjackpotStoreEx.AddOrUpdate(jackpot, !config.IsFile);
                        }

                    }
                }
                strValue = "数据更新完成";
            }
            catch (Exception e)
            {
                strValue += $"{e.Message}\r\n{e.StackTrace}";
            }
            finally
            {

            }

            return strValue;
        }
        public string LoadUpdateConfig()
        {
            string strPath = StartConfigComponent.Instance.ConfigPath + $"/GameConfig/UpdateConfig.json";
            string strValue = File.ReadAllText(strPath);
            Regex r = new Regex(@"^/\*((?:(?!\*/)[\s\S])*)\*/", RegexOptions.Multiline);
            strValue = r.Replace(strValue, "");
            return strValue;
        }
        private async ETTask<string> DgUser(string json)
        {
            cs_dguser_gm config = JsonUtils.Deserialize<cs_dguser_gm>(json);
            UserStatus _us = await BaseHelper.TryGetUserStatus(config.userid);
            long lScore = config.limit > 0 ? config.lscore : -config.lscore;
            if (_us != null && _us.Gameid > 0)
            {
                try
                {
                    var _baseLobby = FactoryCommon.GetLobby(_us.Gameid) as BaseLobby;
                    List<BaseRoom> rooms = _baseLobby.roomCache.FindAll(r => r._levelid == _us.Levelid);
                    foreach (var v in rooms)
                    {
                        BaseUser user = v.GetUser(config.userid);
                        if (user != null)
                        {
                            user._tbUser.DgCurrScore = lScore;
                            user._tbUser.DgTotalScore = lScore;
                            user._tbUser.DgLimit = config.limit;
                            user._tbUser.ControlLimitRatio = 100;
                            user._tbUser.ControlEndRatio = 50;
                            user._tbUser.DgCreateTime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                            BaseTable table = v.GetTable(user._tableid);
                            foreach (var u in table._DicPos2User)
                            {
                                if (u.Value._userid == config.userid)
                                {
                                    u.Value._tbUser.DgCurrScore = lScore;
                                    u.Value._tbUser.DgTotalScore = lScore;
                                    u.Value._tbUser.DgLimit = config.limit;
                                    u.Value._tbUser.ControlEndRatio = 50;
                                    u.Value._tbUser.ControlLimitRatio = 100;
                                    u.Value._tbUser.DgCreateTime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                                    break;
                                }
                            }
                            break;
                        }

                    }
                }
                catch (Exception e)
                {
                    return $"加载失败:{e.Message}";
                }
            }
            else
            {
                tUser _tempuser = await tb_UserEx.GetFromCachebyUserID(config.userid);
                _tempuser.DgCurrScore = lScore;
                _tempuser.DgTotalScore = lScore;
                _tempuser.DgLimit = config.limit;
                _tempuser.ControlEndRatio = 50;
                _tempuser.ControlLimitRatio = 100;
                _tempuser.DgCreateTime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                tb_UserEx.UpdateData(_tempuser);
            }

            return $"对玩家【{config.userid}】启动点控成功";
        }
        public string CsSettbUserGm(string json)
        {
            cs_settb_user_gm _settb_user = JsonUtils.Deserialize<cs_settb_user_gm>(json);
            if (_settb_user != null)
            {
                tUser _user = JsonUtils.Deserialize<tUser>(_settb_user._userjson);
                tb_UserEx.UpdateData(_user);
                sc_base_gm _scSetcard = new sc_base_gm() { fn = "cs_settb_user_gm", _info = "", _ret = 0 };
                return JsonUtils.Serialize(_scSetcard);
            }
            else
            {
                sc_base_gm _scSetcard = new sc_base_gm() { fn = "cs_settb_user_gm", _info = "参数错误", _ret = 1 };
                return JsonUtils.Serialize(_scSetcard);
            }
        }

        public async Task<string> CsSetUserdesgm(string json)
        {
            cs_setuserdes_gm _setuserinfo = JsonUtils.Deserialize<cs_setuserdes_gm>(json);
            if (_setuserinfo != null)
            {
                int _userId1001 = _setuserinfo.userid;
                sc_base_gm _scResult = new sc_base_gm() { fn = "cs_setuserdes_gm", _info = "", _ret = 0 };
                tUser _user = await tb_UserEx.GetFromCachebyUserID(_userId1001);
                var agentuser = await tuseragent2021Ex.GetAgentFromCachebyUserID(_user.UserID, 0);
                if (_user != null && agentuser != null)
                {
                    if (_user.wechatName != _setuserinfo.webname ||
                        _user.wechatHeadIcon != _setuserinfo.headinfo || agentuser.FUserID != Convert.ToInt32(_setuserinfo.AgentId))
                    {
                        _user.wechatName = _setuserinfo.webname;
                        _user.wechatHeadIcon = _setuserinfo.headinfo;
                        // _user.AgentId = Convert.ToInt32(_setuserinfo.AgentId);
                        tb_UserEx.UpdateData(_user);
                    }
                    else
                    {
                        _scResult._ret = 1;
                        _scResult._info = "无需重新设置";
                    }
                }
                else
                {
                    _scResult._ret = 1;
                    _scResult._info = "会员不存在";
                }
                return JsonUtils.Serialize(_scResult);
            }
            else
            {
                sc_base_gm _scSetcard = new sc_base_gm() { fn = "cs_setuserdes_gm", _info = "参数错误", _ret = 1 };
                return JsonUtils.Serialize(_scSetcard);
            }

        }


        /// <summary>
        /// 设置机器人  
        /// </summary>
        /// <returns></returns>
        public async Task<string> CsSetRobotgm(string json)
        {
            cs_setrobot_gm _setrobot = JsonUtils.Deserialize<cs_setrobot_gm>(json);
            if (_setrobot != null)
            {
                int _userId1001 = _setrobot.userid;
                sc_base_gm _scResult = new sc_base_gm() { fn = "sc_setagent_ll_gm", _info = "", _ret = 0 };
                tUser _user = await tb_UserEx.GetFromCachebyUserID(_userId1001);
                if (_user != null)
                {
                    //if (_user.isRobot == 1)
                    //{
                    if (_setrobot.type == 1)
                    {
                        _user.winpercent = _setrobot.winpercent;
                    }
                    else
                    {
                       
                    }
                    tb_UserEx.UpdateData(_user);
                }
                else
                {
                    _scResult._ret = 1;
                    _scResult._info = "会员不存在";
                }
                return JsonUtils.Serialize(_scResult);
            }
            else
            {
                sc_base_gm _scSetcard = new sc_base_gm() { fn = "cs_setagent_ll_gm", _info = "参数错误", _ret = 1 };
                return JsonUtils.Serialize(_scSetcard);
            }
        }

        /// <summary>
        /// 锁定账号
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public async Task<string> CsSetlocktimegm(string json)
        {
            cs_setlocktime_gm _setlocktime = JsonUtils.Deserialize<cs_setlocktime_gm>(json);
            if (_setlocktime != null)
            {
                int _userId1001 = _setlocktime.userid;
                sc_base_gm _scResult = new sc_base_gm() { fn = "sc_setagent_ll_gm", _info = "", _ret = 0 };
                tUser _user = await tb_UserEx.GetFromCachebyUserID(_userId1001);
                if (_user != null)
                {
                    _user.lockTime = _setlocktime.locktime;
                    tb_UserEx.UpdateData(_user);

                    if (!string.IsNullOrEmpty(_setlocktime.locktime) && Convert.ToDateTime(_setlocktime.locktime) > DateTime.Now)
                    {
                     

                        sc_locktimenotice_n lockdata = new sc_locktimenotice_n() { result = 1 };
                        List<UserIDMSG> locklist = new List<UserIDMSG>();
                        UserIDMSG _msgRep = new UserIDMSG(_user.UserID, lockdata, false, false);
                        locklist.Add(_msgRep);
                        lockdata.status = 1;
                        LobbySendDataServer.instance.AutoSendData(locklist);
                    }
                }
                else
                {
                    _scResult._ret = 1;
                    _scResult._info = "会员不存在";
                }
                return JsonUtils.Serialize(_scResult);
            }
            else
            {
                sc_base_gm _scSetcard = new sc_base_gm() { fn = "cs_setlocktime_gm", _info = "参数错误", _ret = 1 };
                return JsonUtils.Serialize(_scSetcard);
            }
        }


        public string CsGetOnlineCountgm2(string json)
        {
            sc_getonlinecount senddata = new sc_getonlinecount { _ret = 1, _info = "获取成功" };
            senddata.userCount = GameSessionEx.Count;
            return JsonUtils.Serialize(senddata);
        }

        /// <summary>
        /// 更新机器人获胜几率
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public async Task<string> CsUpdatePro(string json)
        {
            cs_updatePro data1 = JsonUtils.Deserialize<cs_updatePro>(json);
            sc_updatePro sendUpdatePro = new sc_updatePro { fn = "", _ret = 1, _info = "成功" };

            List<tUser> userList = new List<tUser>();
            var robotId = await ExeOnlyRedisDBHelper.GetUserIdList(1);
            foreach (var d in robotId)
            {
                tUser user = await tb_UserEx.GetFromCachebyUserID(d);
                if (user != null)
                {
                    user.winpercent = data1.probability;
                    userList.Add(user);
                    tb_UserEx.UpdateData(user);
                }
            }
            return JsonUtils.Serialize(sendUpdatePro);
        }
        /// <summary>
        /// 更新机器人头像名称信息
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public async Task<string> CsUpdateRobot(string json)
        {
            cs_updateRobot robotData = JsonUtils.Deserialize<cs_updateRobot>(json);
            var result = await UpdateRobotImgAndName(robotData);
            sc_updateRobot sendUpdate = new sc_updateRobot { fn = "", _ret = 1 };
            sendUpdate._ret = result ? 1 : -1;
            return JsonUtils.Serialize(sendUpdate);
        }

        public async Task<string> GetRoboCount(string json)
        {
            cs_getrobotcount robotData = JsonUtils.Deserialize<cs_getrobotcount>(json);
            sc_getrobotcount sendUpdate = new sc_getrobotcount { fn = "sc_getrobotcount", _ret = 1 };
            if (robotData.isrecover)
            {
                foreach (var item in UserStatusCache.Ins.cache)
                {
                    if (item.Value.Status == UserStatusEnum.InRoom)
                    {
                        tUser user = await tb_UserEx.GetFromCachebyUserID(item.Value.UserID);
                        if (user.isRobot == 1)
                        {
                            BaseHelper.RobotCallback(user);
                            item.Value.Gameid = 0;
                            item.Value.Levelid = 0;
                            item.Value.SetStatus(UserStatusEnum.InLobby);
                            await BaseHelper.AddorUpdateUserStatus(item.Value);
                        }
                    }
                }
            }
            sendUpdate.robotcount = CommonRobotManager.instance.GetRobotCount();
            return JsonUtils.Serialize(sendUpdate);
        }


        public async Task<string> CsGameInfo(string json)
        {
            sc_gameInfo sendgameinfo = new sc_gameInfo { _ret = 1 };
            try
            {
                cs_gameInfo gameinfo = JsonUtils.Deserialize<cs_gameInfo>(json);

                tgameinfo info = new tgameinfo();
                var jser = JsonUtils.Serialize(gameinfo);
                if (gameinfo.oldid > 0)
                {
                    info = await BaseHelper.GetShare<tgameinfo>(p => p.id == gameinfo.oldid);
                    if (info != null)
                    {
                        info.isopen = gameinfo.isopen == 1 ? true : false;
                        info.type = gameinfo.type;
                        info.IsRun = gameinfo.IsRun;
                        info.Sort = gameinfo.Sort;
                        info.isHot = gameinfo.isHot;
                    }
                }
                else
                {
                    info = JsonUtils.Deserialize<tgameinfo>(jser);
                }
                await BaseHelper.AddOrUpdate<tgameinfo>(info);
            }
            catch (Exception)
            {
                sendgameinfo._ret = -1;
            }
            return JsonUtils.Serialize(sendgameinfo);
        }
        public async Task<string> CsGameleveliInfo(string json)
        {
            sc_gameInfo sendlevelinfo = new sc_gameInfo { _ret = 1 };
            try
            {
                cs_gamelevelInfo gameinfo = JsonUtils.Deserialize<cs_gamelevelInfo>(json);

                List<tgamelevelinfo> infos = new List<tgamelevelinfo>();
                tgamelevelinfo info = new tgamelevelinfo();

                var jser = JsonUtils.Serialize(gameinfo);
                if (gameinfo.oldid > 0)
                {
                    infos = await BaseHelper.GetShareAll<tgamelevelinfo>(p => p.Id == gameinfo.oldid);
                    info = infos.FirstOrDefault();
                    if (info != null)
                    {
                        info = JsonUtils.Deserialize<tgamelevelinfo>(jser);
                        info.Id = gameinfo.oldid;
                    }
                }
                else
                {
                    info = JsonUtils.Deserialize<tgamelevelinfo>(jser);
                    //info.Id = (int)gameCache.GetNextNo();
                }
                if (info != null)
                {
                    await BaseHelper.AddOrUpdate<tgamelevelinfo>(info);
                    await FactoryBaseHelper.DealDataExGM2(gameinfo.gameid,   json); 
                }
            }
            catch (Exception)
            {
                sendlevelinfo._ret = -1;
            }
            return JsonUtils.Serialize(sendlevelinfo);
        }

        public string CsTjackpot(string json)
        {
            sc_tjackpot tjackpotinfo = new sc_tjackpot { _ret = 1 };
            try
            {
                cs_tjackpot gameinfo = JsonUtils.Deserialize<cs_tjackpot>(json);
                tjackpot info = new tjackpot();
                var jser = JsonUtils.Serialize(gameinfo);
                info = JsonUtils.Deserialize<tjackpot>(jser);
                BaseHelper.Add(info);
            }
            catch (Exception)
            {
                tjackpotinfo._ret = -1;
            }
            return JsonUtils.Serialize(tjackpotinfo);
        }


        /// <summary>
        /// 重置银行密码
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public async Task<string> CsRestbankPasswrod(string json)
        {
            cs_restpasswrod cs_senddata = JsonUtils.Deserialize<cs_restpasswrod>(json);
            sc_base_gm sc_restResult = new sc_base_gm { _ret = 0, _info = "重置银行密码成功", fn = "cs_restbankpasswrod" };
            Bank bank = new Bank();
            if (!await bank.GMRestPassWord(cs_senddata.userid, cs_senddata.password))
            {
                sc_restResult._ret = 1;
                sc_restResult._info = "重置银行密码失败";
            }
            return JsonUtils.Serialize(sc_restResult);
        }



        public string RefreshallRobot(string json)
        {
            sc_base_gm resultmange = new sc_base_gm { _ret = 0, _info = "操作成功", fn = "cs_refreshallrobot" };
            BaseHelper.UpdateRobotForce();
            return JsonUtils.Serialize(resultmange);
        }

        public async Task<string> RefreRobotgold(string json)
        {
            cs_refrerobotgold  _data = JsonUtils.Deserialize<cs_refrerobotgold>(json);
            sc_refrerobotgold _result = new sc_refrerobotgold() { fn = "sc_refrerobotgold",_ret = 1 };
            
            if (_data.gameid.Equals(0))
            {
                var robotlist = await BaseHelper.GetBaseAll<tUser>(t=>t.isRobot==1);
                robotlist.ForEach(async t => { t.Gold = _data.robotgold; await BaseHelper.AddOrUpdateBase(t); });
                _result._ret = 0;
            }
            else
            {
                var robotlist = await BaseHelper.GetBaseAll<tUser>(t => t.isRobot == 1 && t.RobotGameid == _data.gameid);
                robotlist.ForEach(async t => { t.Gold = _data.robotgold; await BaseHelper.AddOrUpdateBase(t); });
                _result._ret = 0;
            }
            return JsonUtils.Serialize(_result);
        }


        public string SeeonLineLPeople(string json)
        {
            sc_base_gm resultmange = new sc_base_gm { _ret = 0, _info = "操作成功", fn = "cs_seeonlinepeople" };
            resultmange._info = GameSessionEx.Count.ToString();
            return JsonUtils.Serialize(resultmange);
        }

        public async Task<string> setJackpotRate(string json)
        {
            sc_base_gm resultmange = new sc_base_gm { _ret = 0, _info = "操作成功", fn = "sc_base_gm" };
            cs_jackpotrate gm = JsonUtils.Deserialize<cs_jackpotrate>(json);


            resultmange._info = "操作失败!";
            resultmange._ret = 1;
            return JsonUtils.Serialize(resultmange);

        }

        /// <summary>
        /// 设置父级
        /// </summary> 
        public async Task<string> SetFAgent(string json)
        {
            sc_base_gm resultmange = new sc_base_gm { _ret = 0, _info = "操作成功", fn = "cs_setgeneralagent_gm" };

            try
            {
                cs_setfagent_gm scinfo = JsonUtils.Deserialize<cs_setfagent_gm>(json);
                tUser _tempuser = await tb_UserEx.GetFromCachebyUserID(scinfo.userid);
                if (_tempuser == null)
                {
                    resultmange._ret = 0;
                    resultmange._info = "找不到玩家：" + scinfo.userid.ToString();
                }
                else
                {
                    string result = await tuseragent2021Ex.SetUserAgent2021(scinfo.userid, 0, scinfo.fUserId);
                    if (result == "1")
                    {
                        resultmange._ret = 1;
                        resultmange._info = "操作成功！";
                    }
                    else
                    {
                        resultmange._ret = 0;
                        resultmange._info = result;
                    }
                }
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "2020032512362");
                resultmange._ret = 1;
                resultmange._info = "系统错误！";
            }
            return JsonUtils.Serialize(resultmange);
        }

        /// <summary>
        /// 设置总代理
        /// </summary> 
        public async Task<string> SetGeneralAgent(string json)
        {
            sc_base_gm resultmange = new sc_base_gm { _ret = 0, _info = "操作成功", fn = "cs_setgeneralagent_gm" };

            try
            {
                cs_setgeneralagent_gm scinfo = JsonUtils.Deserialize<cs_setgeneralagent_gm>(json);

                tUser _tempuser = await tb_UserEx.GetFromCachebyUserID(scinfo.userid);
                if (_tempuser == null)
                {
                    resultmange._ret = 0;
                    resultmange._info = "找不到玩家：" + scinfo.userid;
                }
                else
                {
                    var agent = await tuseragent2021Ex.GetAgentFromCachebyUserID(scinfo.userid, 0);
                    if (agent == null)
                    {
                        resultmange._ret = 0;
                        resultmange._info = "找不到玩家代理信息：" + scinfo.userid;
                    }
                    else
                    {
                        _tempuser.vlevel = scinfo.vlevel;
                        tb_UserEx.UpdateData(_tempuser);

                        agent.TopUserID = scinfo.userid;
                        agent.FUserID = 0;
                        resultmange._ret = 1;
                        resultmange._info = "操作成功！";
                    }
                }
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "202003251237");
                resultmange._ret = 1;
                resultmange._info = "系统错误！";
            }
            return JsonUtils.Serialize(resultmange);
        }



        public async Task<string> msunbinding(string json)
        {
            sc_base_gm resultmange = new sc_base_gm { _ret = 0, _info = "操作成功", fn = "cs_msunbinding_gm" };
            cs_unbinding ub = JsonUtils.Deserialize<cs_unbinding>(json);
            var useragent = await tuseragent2021Ex.GetAgentFromCachebyUserID(ub.userid, 0);
            if (useragent.Lv != 1)
            {
                resultmange._ret = 1;
                resultmange._info = "只能解绑1级代理。";
            }
            else
            {
                if (useragent.FUserID != 0 && useragent.UserID > 0)
                {
                    await AgentRelationHelper.Delete(useragent.UserID, useragent.FUserID, useragent.cidx);
                    //var fuser = await tuseragent2021Ex.GetFromCachebyUserID(useragent.FUserID);
                    //if (fuser != null)
                    //{

                    //    var chlid = fuser.ChildAgents.Where(st => st.UserID == useragent.UserID).FirstOrDefault();
                    //    fuser.ChildAgents.Remove(chlid);
                    //    useragent.FUserID = 0;
                    //    await BaseHelper.AddOrUpdateBase<tuseragent2021>(useragent);
                    //    await BaseHelper.AddOrUpdateBase<tuseragent2021>(fuser);
                    //}
                }
            }
            return JsonUtils.Serialize(resultmange);
        }

        public async Task<string> SetCashsetlevel(string json)
        {
            sc_base_gm resultmange = new sc_base_gm { _ret = 0, _info = "操作成功", fn = "cs_setcashlevel_gm" };
            cs_setcashlevel_gm sg = JsonUtils.Deserialize<cs_setcashlevel_gm>(json);
            var res = "";
            tUser user = await BaseHelper.GetBase<tUser>(sg.userid);
            if (user == null) res = "设置失败!";
            else
            {
                user.lv = sg.lv;
                await BaseHelper.AddOrUpdateBase(user);
                res = "1";
            }

            if (!res.Equals("1"))
            {
                resultmange._info = res;
                resultmange._ret = 1;
            }
            return JsonUtils.Serialize(resultmange);
        }




        public async Task<string> SetUserlevel(string json)
        {
            sc_base_gm resultmange = new sc_base_gm { _ret = 0, _info = "操作成功", fn = "cs_setlevel_whi" };
            cs_setlevel_gm sg = JsonUtils.Deserialize<cs_setlevel_gm>(json);
            var res = await tb_UserEx.SetUserLevel(sg.userid, sg.levelid);
            resultmange._info = !res.Equals("1") ? res : "";
            resultmange._ret = res.Equals("1") ? 0 : 1;

            return JsonUtils.Serialize(resultmange);
        }
        public async Task<string> RevokeTradenum(string json)
        {
            sc_base_gm resultmange = new sc_base_gm { _ret = 0, _info = "操作成功", fn = "cs_revoketrade_email" };
            cs_currdto_gm msg = JsonUtils.Deserialize<cs_currdto_gm>(json);
            if (!await MailHelper.ModifyeMail(msg.TradeNo, msg.Coin))
            {
                resultmange._info = "操作失败!";
                resultmange._ret = 1;
            }

            return JsonUtils.Serialize(resultmange);
        }

        public async Task<string> UserGmcash(string json)
        {
            sc_base_gm gmjson = new sc_base_gm() { _ret = 0, _info = "操作成功", fn = "sc_gmcash" };
            sc_gmcash msg = JsonUtils.Deserialize<sc_gmcash>(json);
            var tuser = await tb_UserEx.GetFromCachebyUserID(msg.userId);
            if (tuser != null)
            {
                if (tuser.isRobot.Equals(0))
                {
                    if (tuser.GetGoldAndWinGold > msg.chmoney && msg.chmoney >= 0)
                    {
                        long gold = await BaseHelper.UpdateUserGold(tuser.UserID, -(long)msg.chmoney * 100);
                        if (gold > long.MinValue) { tuser.Gold = gold; }
                    }
                    else
                    {
                        gmjson._ret = 1;
                        gmjson._info = "backgold金额异常!";
                    }
                }
                else
                {
                    gmjson._ret = 1;
                    gmjson._info = "用户类型异常!";
                }
            }
            else
            {
                gmjson._ret = 1;
                gmjson._info = "用户不存在!";
            }

            return JsonUtils.Serialize(gmjson);
        }

        public async Task<string> setRedEnvelopCount(string json)
        {
            sc_base_gm resjson = new sc_base_gm() { _ret = 0, _info = "操作成功", fn = "cs_redenvelopcount" };
            cs_redenvelopcount msg = JsonUtils.Deserialize<cs_redenvelopcount>(json);
            if (msg.UserId.Equals(-1))
            {
                List<int> listId = await ExeOnlyRedisDBHelper.GetUserIdList(0);
                // RedEnvelopesHelper.AddRedEnvelopesReceiveLog2(listId, msg.typeCon, msg.Count, msg.TypeId);
            }
            else if (msg.UserId > 0)
            {
                var tuser = await tb_UserEx.GetFromCachebyUserID(msg.UserId);
                if (tuser != null)
                {
                    List<int> listId = new List<int>();

                    listId.Add(tuser.UserID);
                    //RedEnvelopesHelper.AddRedEnvelopesReceiveLog2(listId, msg.typeCon, msg.Count, msg.TypeId);
                }
                else
                {
                    resjson._ret = 1;
                    resjson._info = "用户不存在!";
                }
            }
            return JsonUtils.Serialize(resjson);
        }

        /// <summary>
        /// 更新机器人信息
        /// </summary>
        /// <returns></returns>
        private async Task<bool> UpdateRobotImgAndName(cs_updateRobot data)
        {
            List<tUser> users = new List<tUser>();
            try
            {
                int num = data.UpdateNum == 0 ? 100 : data.UpdateNum;
                List<int> robotints = await ExeOnlyRedisDBHelper.GetUserIdList(1);
                var robotIDs = robotints.Where(w => w > data.RobotId).Take(num).ToList();
                foreach (var userid in robotIDs)
                {
                    tUser user = await tb_UserEx.GetFromCachebyUserID(userid);
                    if (user != null) users.Add(user);
                }
                SetWebChartName(users, data.FilePath);
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        /// <summary>
        /// 批量设置名称
        /// </summary>
        /// <param name="users"></param>
        /// <returns></returns>
        private void SetWebChartName(List<tUser> users = null, string path = @"C:\Users\Administrator\Desktop\nameorimg.txt")
        {
            StreamReader sr = new StreamReader(path, Encoding.Default);
            String line;
            int index = users.Count;
            while ((line = sr.ReadLine().Trim()) != null && index > 0)
            {

                if (index > 0 && !string.IsNullOrEmpty(line))
                {
                    var strs = line.Split(',');
                    if (strs.Any())
                    {
                        users[index - 1].wechatName = strs[1];
                        users[index - 1].wechatHeadIcon = strs[0];
                        tb_UserEx.UpdateData(users[index - 1]);
                        index--;

                    }
                }
            }
            sr.Close();
        }

        private async Task<string> GetRobotStateList(string json)
        {
            sc_rebotstate_gm resultmange = new sc_rebotstate_gm { _ret = 0, _info = "操作成功" };
            try
            {
                cs_robotids gm = JsonUtils.Deserialize<cs_robotids>(json);
                if (gm.ids != null && gm.ids.Length > 0)
                {
                    List<RobotState> rebot = new List<RobotState>();
                    for (int i = 0; i < gm.ids.Length; i++)
                    {
                        int id = 0; int.TryParse(gm.ids[i], out id);

                        UserStatus _curStatus = await BaseHelper.TryGetUserStatus(id);
                        if (_curStatus != null)
                        {
                            rebot.Add(new RobotState()
                            {
                                UserID = _curStatus.UserID,
                                Gameid = _curStatus.Gameid,
                                RoomID = _curStatus.Levelid,
                                Status = (int)_curStatus.Status,
                                TableID = _curStatus.TableID
                            });
                        }
                        else
                        {
                            rebot.Add(new RobotState()
                            {
                                UserID = id,
                                Gameid = 0,
                                RoomID = 0,
                                Status = 0,//表示闲置状态
                                TableID = 0
                            });
                        }
                    }
                    resultmange.robotstate = rebot;
                }
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "202006161546");
                resultmange._ret = 1;
                resultmange._info = "服务器错误";
            }
            return JsonUtils.Serialize(resultmange);
        }




        #endregion

        /// <summary>
        /// 执行指令 格式 "001|1,2,3"
        /// </summary>
        /// <param name="cmd"></param>
        /// <returns></returns>
        public async Task<string> DoExecCmd(string address, string json)
        {
            TraceLog.WriteInfo("{0}执行指令:{1}", address, json);
            cs_base_gm _basegm = null;
            try
            {
                if (json == "") return "0";
                _basegm = JsonUtils.Deserialize<cs_base_gm>(json);
                string errorCode = "0";
                switch (_basegm.fn)
                {
                    //?CMD=1001|1380162     http://127.0.0.1:8080/Service/?CMD=cs_setcard_ll_gm|1380162|4
                    //http://127.0.0.1:8080/Service/?data=%7B%22userid%22%3A%2213779%22%2C%22type%22%3A%221%22%2C%22money%22%3A%22100000%22%2C%22gameid%22%3A%2210%22%2C%22fn%22%3A%22cs_charge_gm%22%7D

                    case "cs_settb_user_gm":
                        errorCode = CsSettbUserGm(json);
                        break;
                    case "cs_setuserdes_gm":
                        errorCode = await CsSetUserdesgm(json);
                        break;
                    case "cs_setrobot_gm"://设置机器人
                        errorCode = await CsSetRobotgm(json);
                        break;
                    case "cs_setlocktime_gm"://锁定账号
                        errorCode = await CsSetlocktimegm(json);
                        break;
                    case "cs_getonlinecount_gm":
                        errorCode = CsGetOnlineCountgm2(json);
                        break;
                    case "cs_updatePro"://更新机器人获胜几率
                        errorCode = await CsUpdatePro(json);
                        break;
                    case "cs_updateRobot"://更新机器人头像名称信息
                        errorCode = await CsUpdateRobot(json);
                        break;
                    case "cs_getrobotcount":
                        errorCode = await GetRoboCount(json);
                        break;
                    case "cs_gameinfo":
                        errorCode = await CsGameInfo(json);
                        break;
                    case "cs_gamelevelinfo":
                        errorCode = await CsGameleveliInfo(json);
                        break;
                    case "cs_tjackpot":
                        errorCode = CsTjackpot(json);
                        break;
                    case "cs_restbankpasswrod":
                        errorCode = await CsRestbankPasswrod(json);
                        break;
                    case "cs_setgeneralagent_gm":
                        errorCode = await SetGeneralAgent(json);
                        break;
                    case "cs_setfagent_gm":
                        errorCode = await SetFAgent(json);
                        break;
                    case "cs_revoketrade_email":
                        errorCode = await RevokeTradenum(json);
                        break;
                    case "cs_msunbinding_gm":
                        errorCode = await msunbinding(json);
                        break;
                    case "cs_setlevel_gm":
                        errorCode = await SetUserlevel(json);
                        break;
                    case "sc_gmcash":
                        errorCode = await UserGmcash(json);
                        break;
                    case "cs_redenvelopcount"://设置玩家/全部可领取红包个数
                        errorCode = await setRedEnvelopCount(json);
                        break;
                    case "cs_refreshallrobot":
                        errorCode = RefreshallRobot(json);
                        break;
                    case "cs_refrerobotgold":
                        errorCode = await RefreRobotgold(json);
                        break;
                    case "cs_seeonlinepeople":
                        errorCode = SeeonLineLPeople(json);
                        break;
                    case "cs_jackpotrate":
                        errorCode = await setJackpotRate(json);
                        break;

                    case "cs_robotids":
                        errorCode = await GetRobotStateList(json);
                        break;
                    case "cs_setcashlevel_gm":
                        errorCode = await SetCashsetlevel(json);
                        break;
                    case "cs_setcontrol_gm":
                        errorCode = await tjackpotEx.SetControlUserGM(json);
                        break;
                    case "cs_getcontrol_gm":
                        errorCode = await tjackpotEx.GetControlUserGM(json);
                        break;

                    #region game club and alliance 
                    case "cs_create_club":
                        errorCode = await GMGameHelper.CreateClubGM(json);//创建club
                        break;
                    case "cs_create_alli":
                        errorCode = await GMGameHelper.CreateAllinaceGM(json);//创建联盟
                        break;
                    case "cs_clubcharge_gm":
                        errorCode = await GMGameHelper.CsClubChargegm(json);// 给club和联盟 上下分或钻石
                        break;
                    case "cs_alliancecharge_gm":
                        errorCode = await GMGameHelper.AllianceCharge(json);// 给联盟上联盟币
                        break;
                    case "cs_modifyclubgolg_club":
                        errorCode = await GMGameHelper.ModifyClubgold(json);// 给联盟 上下分或钻石
                        break;
                    case "cs_cluborunion_gm":
                        errorCode = await GMGameHelper.CsClubOrUnionIdx(json);//修改club或者联盟编码
                        break;
                    case "cs_addchlid_club":
                        errorCode = await GMGameHelper.CsAddClunChlid(json);//添加会员到club
                        break;
                    case "cs_removechlid_club":
                        errorCode = await GMGameHelper.CsRemoveClunChlid(json);//添加会员到club
                        break;
                    case "cs_chlidcharge_gm":
                        errorCode = await GMGameHelper.CsChlidChargegm(json);//club会员上下分 
                        break;
                    case "cs_updatechlid_club":
                        errorCode = await GMGameHelper.CsUpdateClubChlid(json);//修改club会员
                        break;
                    case "cs_unioncharge_gm":
                        errorCode = await GMGameHelper.CsUnionChargegm(json);//联盟上下分
                        break;
                    case "cs_unionchlidcharge_gm":
                        errorCode = await GMGameHelper.CsUnionChlidChargegm(json);//联盟会员上下分
                        break;
                    case "cs_agree_union":
                        errorCode = await GMGameHelper.UnionAddClubUser(json);
                        break;
                    case "cs_dismissalliance_alli":
                        errorCode = await GMGameHelper.DisMiss(json);
                        break;
                    case "cs_chlidstatus_gm":
                        errorCode = await GMGameHelper.UPdateChlidStatus(json);
                        break;
                    case "cs_allilevel_alli":
                        errorCode = await GMGameHelper.UpAllilevel(json);
                        break;
                    case "cs_setclubinfo_gm":
                        errorCode = await GMGameHelper.ModifyClubinfo(json);//设置社区信息
                        break;
                    case "cs_fundchange_gm":
                        errorCode = await GMGameHelper.FundChange(json);//基金转入转出
                        break;
                    case "cs_clubgive_gm":
                        errorCode = await GMGameHelper.ClubGiveOther(json);//联盟社区赠送相关
                        break;


                    #endregion
                    #region  game dispatch
                    case "cs_setcard_gm"://设置指定玩家牌型最小    
                        errorCode = await GMGameHelper.SetCardWhiGM(json);//game
                        break;
                    case "cs_charge_gm"://修改充值金额或钻石
                        errorCode = await GMGameHelper.CsChargegm(json);//game
                        break;
                    case "cs_enterroom_gm":
                        errorCode = await GMGameHelper.CsEnterRoomgm(json);
                        break;
                    case "cs_dismisstable_gm"://管理员后台解散
                        errorCode = await GMGameHelper.DismissTable(json);
                        break;
                    #region 邮件
                    case "cs_sendemail_gm":
                        errorCode = await GMGameHelper.CsSendEmailgm(json);//发送邮件
                        break;
                    case "cs_removeemail_gm":
                        errorCode = await GMGameHelper.CsRemoveEmailgm(json);//删除邮件
                        break;
                    #endregion
                    case "cs_switchgame":
                        errorCode = GMGameHelper.CsSwitchGame(json);
                        break;
                    case "cs_createtablelist_gm":
                        errorCode = await GMGameHelper.CreateTableByGM(json);
                        break;
                    case "cs_seehandcard":
                        errorCode = GMGameHelper.SeeHandcard(json);
                        break;
                    //case "cs_noticemsg":
                    //    errorCode = await GMGameHelper.Noticemsg(json);
                    //    break;
                    case "cs_noticemsgdel_gm":
                        errorCode = await GMGameHelper.NoticeMsgDel(json);
                        break;
                    case "cs_noticemsgAdd_gm":
                        errorCode = await GMGameHelper.NoticeAdd(json);
                        break;
                    case "cs_addwatchrobot_whi":
                        errorCode = await GMGameHelper.AddWatchRobot(json);//旁观机器人
                        break;
                    case "cs_robotjoinroom":
                        errorCode = await GMGameHelper.IntoRoomRobot(json);
                        break;
                    case "cs_OnekeyAddRobot_gm":
                        errorCode = await GMGameHelper.OnekeyAddRobot(json);
                        break;
                    case "cs_RobottKickOut"://踢机器人
                        errorCode = await GMGameHelper.ExitRoomRobot(json);
                        break;

                    case "cs_set100roomrobot":
                        errorCode = await GMGameHelper.Set100RoomRobot(json);
                        break;

                    case "cs_getgameroom_gm":
                        errorCode = await GMGameHelper.GetGameRoom(json);
                        break;
                    case "cs_getvideosroom_gm":
                        errorCode = await GMGameHelper.GetGameVideosRoom(json);
                        break;
                    case "cs_anchorjoinroom_gm":
                        errorCode = await GMGameHelper.AnchorJoinRoom(json);
                        break;
                    case "cs_syskeyvalue":
                        errorCode = await GMGameHelper.UpdateSysConfig(json);
                        break;
                    case "cs_extenconfig_gm"://推广红包修改
                        errorCode = await GMGameHelper.UpdateExtenConfig(json);
                        break;
                    case "cs_setInvitacode":
                        errorCode = await GMGameHelper.SetInvitacode(json);
                        break;
                    #endregion
                    case "cs_commodity_gm":
                        errorCode = await GMGameHelper.UPdateCommodity(json);//修改商品
                        break;
                    case "cs_updateserverlist_gm":
                        errorCode = GMGameHelper.UpdateServerlist(json);
                        break;
                    case "cs_onlineuser_gm":
                        errorCode = await GMGameHelper.QueryOnlineClub(json);
                        break;
                    case "cs_tableinfo_gm"://查询桌子实时数据
                        errorCode = await GMGameHelper.QueryTableinfo(json);
                        break;
                    case "cs_modifyclubLosemax":
                        errorCode = await GMGameHelper.ModifyclubLosemax(json);
                        break;
                    #region 控制
                    case "cs_loadgameconfig_gm":
                        errorCode = await LoadGameConfig(json);
                        break;
                    case "cs_robotenterroom_gm":
                        errorCode = RunStartRobotPlayGame(json);
                        break;
                    case "cs_dguser_gm":
                            errorCode = await DgUser(json);
                            break;
                    case "cs_updatecontroldata_gm":
                            errorCode = await UpdateControlData(json);
                            break;
                    case "cs_change100gamerobot_gm":
                            errorCode = await Change100GameRobot(json);
                            break;
                    case "cs_updatecontorlconfig_gm":
                            errorCode = await UpdateContorlConfig(json);
                            break;
                    case "cs_set100gamelimit_gm":
                        errorCode = await Set100GameLimit(json);
                        break;
                    case "cs_get100gamelimit_gm":
                        errorCode = Get100GameLimit(json);
                        break;
                    case "cs_settexascowcard_gm":
                        errorCode = await SetTexasCowCard(json);
                        break;
                    case "cs_openplay_gm":
                        errorCode = await OpenTablePlayState(json);
                        break;
                    case "cs_tickuser_gm"://踢出玩家
                        errorCode = await GMGameHelper.TickUser(json);
                        break;
                    #endregion
                    case "cs_enterroom":
                        errorCode = await GMGameHelper.EnterRoomGM(json);
                        break;
                    case "cs_enterrobot_gm":
                        errorCode = await GMGameHelper.EnterTableGM(json);
                        break;
                    case "cs_agent_user_gold_change":
                        errorCode = await UpdateAgentUserGold(json);
                        break;
                    #region 商户
                    case "cs_retail_user_login":
                        errorCode = await RetailUserLogin(json);//商户用户请求登录
                        break;
                    case "cs_retail_user_transglod":
                        errorCode = await RetailTransGlod(json);//商户用户额度转换
                        break;
                    case "cs_setRetailInfo_gm":
                        errorCode = await SetRetailInfo(json);//设置商户信息
                        break;
                    case "cs_retail_exitgame":
                        errorCode = await RetailExitGame(json);//商户玩家退出游戏
                        break;
                    #endregion
                    case "cs_bigagent_add":
                        errorCode = await BigAgentAdd(json);
                        break;
                    case "cs_setagentrate_gm":
                        errorCode = await Setagentrate(json);
                        break;
                    case "cs_agent_update_showrate":
                        errorCode = await UpdateShowRate(json);
                        break;
                    case "cs_agent_delete":
                        errorCode = await AgentDelete(json);
                        break;
                    case "cs_task_add":
                        errorCode = await AddTask(json);
                        break;
                    case "cs_task_remove":
                        errorCode = await RemoveTask(json);
                        break;
                    case "cs_compete_add":
                        errorCode = await AddCompete(json);
                        break;
                    case "cs_compete_property_add":
                        errorCode = await AddCompeteProperty(json);
                        break;
                    #region 背包道具
                    case "cs_adduserprop_gm":
                        errorCode = await BackPackHelper.GmAddUserProp(json);
                        break;
                    case "cs_removeuserprop_gm":
                        errorCode = await BackPackHelper.GmRemoveUserProp(json);
                        break;
                    case "cs_addpropconfig_gm":
                        errorCode = await BackPackHelper.GmAddUserPropConfig(json);
                        break;
                    #endregion
                    #region VIP
                    case "cs_getvipconfig_gm":
                        sc_getvipconfig_gm vipconfig = new sc_getvipconfig_gm() { };
                        vipconfig.config = await VIPHelper.GetVipConfig();
                        errorCode = JsonUtils.Serialize(vipconfig);
                        break;
                    case "cs_modifyvipconfig_gm":
                        cs_modifyvipconfig_gm modifyvipconfig = JsonUtils.Deserialize<cs_modifyvipconfig_gm>(json);
                        errorCode = await VIPHelper.SetVipConfig(modifyvipconfig.Context);
                        break;
                    case "cs_setuserviplev_gm":
                        cs_setuserviplev_gm viplev = JsonUtils.Deserialize<cs_setuserviplev_gm>(json);
                        errorCode = await VIPHelper.SetUserVipLev(viplev.userid, viplev.lev, viplev.lScore);
                        break;
                    case "cs_getuservipinfo_gm":
                        cs_getuservipinfo_gm uservip = JsonUtils.Deserialize<cs_getuservipinfo_gm>(json);
                        errorCode = await VIPHelper.GetUserVipInfo(uservip.userid);
                        break;
                    case "cs_writeuservipscore_gm":
                        cs_writeuservipscore_gm vipscore = JsonUtils.Deserialize<cs_writeuservipscore_gm>(json);
                        errorCode = await VIPHelper.WriteUserVipScore(vipscore.userid, vipscore.lScore);
                        break;
                    #endregion
                    case "cs_gamereport_gm":
                        cs_gamereport_gm gamereport = JsonUtils.Deserialize<cs_gamereport_gm>(json);
                        errorCode = await GameReport(gamereport);
                        break;
                    case "cs_getonlineuserstatus_gm":
                        errorCode = await GetOnlineUserStaus(json);
                        break;
                    case "cs_changePassword_GM":  ////修改交易密码
                        cs_changePassword_GM _changeAppPassword = JsonUtils.Deserialize<cs_changePassword_GM>(json);
                        errorCode = await Bank.ChangeAppPassword(_changeAppPassword);
                        break;
                    case "cs_setsysconfig_gm"://设置系统配置
                        errorCode = await SetSysConfig(json);
                        break;
                    case "cs_cocostoken_gm":
                        errorCode =  SaveToken(json);
                        break;
                    case "cs_getuserinfo_gm":
                        errorCode = await GMGameHelper.GetUserInfo(json);
                        break;
                    default:
                        CommonLogic test = new CommonLogic();
                        errorCode = await test.DealDataEx(json, "", 1009);
                        break;
                }
                return errorCode;
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "GM2020032512365");
                return "0";
            }
        }
        private async Task<string> SetSysConfig(string json)
        {
            cs_setsysconfig_gm gm = JsonUtils.Deserialize<cs_setsysconfig_gm>(json);
            sc_setsysconfig_gm sendData = new sc_setsysconfig_gm() { _ret = 1};
            if (gm.config == null)
            {
                sendData._info = "配置不能为空";
                return JsonUtils.Serialize(sendData);
            }
            tsysconfig config = await BaseHelper.GetShare<tsysconfig>(t => t.Key == gm.config.Key);
            if (config != null && config.Id!=gm.config.Id)
            {
                sendData._info = "Key值已经存在";
                return JsonUtils.Serialize(sendData);
            }
            else
            {
                bool bSuccess = false;
                gm.config.CreateTime = DateTime.Now;
                if (gm.config.Id == 0)
                {
                    bSuccess = await BaseHelper.InsertShare(gm.config);
                }
                else
                {
                   bSuccess = await BaseHelper.AddOrUpdate(gm.config);
                }
                if (bSuccess)
                {
                    IPManager.Ins.SendMessage(new A2A_AppInfoRequest() { Message = json });
                    sendData._ret = 0;
                    return JsonUtils.Serialize(sendData);
                }
                else
                {
                    sendData._info = "失败";
                    return JsonUtils.Serialize(sendData);
                }
            }
            
        }
        /// <summary>
        /// 
        /// </summary>
        public string SaveToken(string json)
        {
            cs_cocostoken_gm tokendata = JsonUtils.Deserialize<cs_cocostoken_gm>(json);
            TokenManager.instanceBase.AddToken(tokendata.userid,tokendata.token);
            return JsonUtils.Serialize(new sc_base_gm() { _ret = 0 });
        }
       


        private async Task<string> UpdateContorlConfig(string json)
        {
            cs_updatecontorlconfig_gm gm = JsonUtils.Deserialize<cs_updatecontorlconfig_gm>(json);
            return await FactoryBaseHelper.DealDataExGM2(gm.gameid, json); 
        }

        private async Task<string> Set100GameLimit(string json)
        {
            cs_set100gamelimit_gm gm = JsonUtils.Deserialize<cs_set100gamelimit_gm>(json);
            return await FactoryBaseHelper.DealDataExGM2(gm.gameid, json); 
        }
        public async Task<string> SetTexasCowCard(string json)
        {
            cs_settexascowcard_gm gm = new cs_settexascowcard_gm();
            return await FactoryBaseHelper.DealDataExGM2(gm.gameid, json); 
        }

        /// <summary>
        /// 开关游戏状态
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public async Task<string> OpenTablePlayState(string json)
        {
            cs_openplay_gm _data = JsonUtils.Deserialize<cs_openplay_gm>(json);
            sc_openplay_gm _senddata = new sc_openplay_gm() { _ret = 1,_info = "" };
            TexasTable table = TexasLobby.instance.GetTableByRoomIDandTableID(_data.levelid, _data.tableid);
            if (table != null)
            {
                if(table.openplay && _data.state==1)
                {
                    _senddata._ret = 1;
                    _senddata._info = "游戏已经是开启状态!";
                }else if (!table.openplay && _data.state == 0)
                {
                    _senddata._ret = 1;
                    _senddata._info = "游戏已经是关闭状态!";
                }
                else
                {
                    table.openplay = _data.state == 1 ? true : false;
                    table.SendDataOpenPlay();
                    table.WaittoStart();
                    _senddata._ret = 0;
                }
            }
            else
            {
                _senddata._ret = 1;
                _senddata._info = "桌子不存在!";
            }
            return JsonUtils.Serialize(_senddata);

        }


        private string Get100GameLimit(string json)
        {
            int[] gameids = new int[] {104,8002,8003 };
            sc_get100gamelimit_gm gm = new sc_get100gamelimit_gm() { _ret = 0, gamelimits = new List<GameLimitScore>() };
            foreach (var v in gameids)
            {
               
            }
            return JsonUtils.Serialize(gm);
        }

        /// <summary>
        /// 修改百人转盘游戏机器人配置
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        private async Task<string> Change100GameRobot(string json)
        {
            cs_change100gamerobot_gm gm = JsonUtils.Deserialize<cs_change100gamerobot_gm>(json);
            return await FactoryBaseHelper.DealDataExGM2(gm.gameid, gm.data); 
        }

        public static string secret = "13452-90a7edf09aisdop32kjap0d98fhj34ne";
        public async Task<string> UpdateAgentUserGold(string json)
        {
            cs_agent_user_gold_change changeinfo = JsonUtils.Deserialize<cs_agent_user_gold_change>(json);
            if (changeinfo.gold < 0) return JsonUtils.Serialize(new sc_agent_user_gold_change(changeinfo.userid, changeinfo.gold, secret, 1, "玩家金额不能小余0"));
            if (changeinfo.Check(secret))
            {
                var user = await BaseHelper.GetBase<tUser>(changeinfo.userid);
                user.Gold += changeinfo.gold;
                if (await BaseHelper.AddOrUpdateBase(user)) return JsonUtils.Serialize(new sc_agent_user_gold_change(changeinfo.userid, user.Gold, secret));
                else return JsonUtils.Serialize(new sc_agent_user_gold_change(changeinfo.userid, user.GetGoldAndWinGold, secret, 2, "更新失败"));
            }
            else
            {
                return JsonUtils.Serialize(new sc_agent_user_gold_change(changeinfo.userid, changeinfo.gold, secret, 3, "验证码错误"));
            }
        }
        /// <summary>
        /// 商户用户登录请求
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public async Task<string> RetailUserLogin(string json)
        {
            return JsonUtils.Serialize(await ConnectManager.Instance.Login(JsonUtils.Deserialize<cs_retail_user_login>(json)));
        }
        /// <summary>
        /// 商户用户额度转换
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public async Task<string> RetailTransGlod(string json)
        {
            return JsonUtils.Serialize(await ConnectManager.Instance.TransGlod(JsonUtils.Deserialize<cs_retail_user_transglod>(json)));
        }
        private async Task<string> SetRetailInfo(string json)
        {
            return JsonUtils.Serialize(await ConnectManager.Instance.SetRetailInfo(JsonUtils.Deserialize<cs_setRetailInfo_gm>(json)));
        }
        private async Task<string> RetailExitGame(string json)
        {
            return JsonUtils.Serialize(await ConnectManager.Instance.RetailExitGame(JsonUtils.Deserialize<cs_retail_exitgame>(json)));
        }
        public async Task<string> AgentAdd(string json)
        {
            var cs = JsonUtils.Deserialize<cs_agent_add>(json);
            if (cs == null || !cs.Check(secret)) return JsonUtils.Serialize(new sc_agent_add(-1, "消息为空或验证码错误", secret));
            if (cs.userid <= 0 || cs.cidx <= 0) return cs.GetGMResult(-2, "消息中的参数不能为空", secret);
            var ip = StartConfigComponent.Instance.StartConfig.AppType == AppType.AllServer ? StartConfigComponent.Instance.StartConfig.GetComponent<InnerConfig>().IPEndPoint : StartConfigComponent.Instance.RedisDBConfig.GetComponent<InnerConfig>().IPEndPoint;
            var session = Game.Scene.GetComponent<NetInnerComponent>().Get(ip);
            var rsp = (RedisDB_AgentResponse)await session.Call(new RedisDB_AgentRequest { Message = json });
            return rsp.Message;
        }

        public async Task<string> BigAgentAdd(string json)
        {
            var cs = JsonUtils.Deserialize<cs_bigagent_add>(json);
            if (cs == null || !cs.Check(secret)) return JsonUtils.Serialize(new sc_bigagent_add(-1, "消息为空或验证码错误", secret));
            if (cs.userid <= 0 || cs.cidx <= 0) return cs.GetGMResult(-2, "消息中的参数不能为空", secret);
            var ip = StartConfigComponent.Instance.StartConfig.AppType == AppType.AllServer ? StartConfigComponent.Instance.StartConfig.GetComponent<InnerConfig>().IPEndPoint : StartConfigComponent.Instance.RedisDBConfig.GetComponent<InnerConfig>().IPEndPoint;
            var session = Game.Scene.GetComponent<NetInnerComponent>().Get(ip);
            var rsp = (RedisDB_AgentResponse)await session.Call(new RedisDB_AgentRequest { Message = json });
            return rsp.Message;
        }

        /// <summary>
        /// 设置社区1级代理反利值
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public async Task<string> Setagentrate(string json)
        {
            var cs = JsonUtils.Deserialize<cs_setagentrate_gm>(json);
            if (cs == null || !cs.Check(secret)) return JsonUtils.Serialize(new sc_setagentrate_gm(-1, "消息错误", secret));
            if (cs.userid <= 0 || cs.rate <= 0) return cs.GetGMResult(-2, "消息中的参数不能为空", secret);
            var ip = StartConfigComponent.Instance.StartConfig.AppType == AppType.AllServer ? StartConfigComponent.Instance.StartConfig.GetComponent<InnerConfig>().IPEndPoint : StartConfigComponent.Instance.RedisDBConfig.GetComponent<InnerConfig>().IPEndPoint;
            var session = Game.Scene.GetComponent<NetInnerComponent>().Get(ip);
            var rsp = (RedisDB_AgentResponse)await session.Call(new RedisDB_AgentRequest { Message = json });
            return rsp.Message;
        }




        public async Task<string> UpdateShowRate(string json)
        {
            var cs = JsonUtils.Deserialize<cs_agent_update_showrate>(json);
            if (cs == null || !cs.Check(secret)) return JsonUtils.Serialize(new sc_agent_add(-1, "消息为空或验证码错误", secret));
            if (cs.userid <= 0 || cs.parentid <= 0 || cs.cidx <= 0 || cs.showrate < 0) return cs.GetGMResult(-2, "消息中的参数不能为空", secret);
            var ip = StartConfigComponent.Instance.StartConfig.AppType == AppType.AllServer ? StartConfigComponent.Instance.StartConfig.GetComponent<InnerConfig>().IPEndPoint : StartConfigComponent.Instance.RedisDBConfig.GetComponent<InnerConfig>().IPEndPoint;
            var session = Game.Scene.GetComponent<NetInnerComponent>().Get(ip);
            var rsp = (RedisDB_AgentResponse)await session.Call(new RedisDB_AgentRequest { Message = json });
            return rsp.Message;
        }
        public async Task<string> AgentDelete(string json)
        {
            var cs = JsonUtils.Deserialize<cs_agent_delete>(json);
            if (cs == null || !cs.Check(secret)) return JsonUtils.Serialize(new sc_agent_add(-1, "消息为空或验证码错误", secret));
            if (cs.userid <= 0 || cs.parentid <= 0 || cs.cidx <= 0) return cs.GetGMResult(-2, "消息中的参数不能为空", secret);
            var ip = StartConfigComponent.Instance.StartConfig.AppType == AppType.AllServer ? StartConfigComponent.Instance.StartConfig.GetComponent<InnerConfig>().IPEndPoint : StartConfigComponent.Instance.RedisDBConfig.GetComponent<InnerConfig>().IPEndPoint;
            var session = Game.Scene.GetComponent<NetInnerComponent>().Get(ip);
            var rsp = (RedisDB_AgentResponse)await session.Call(new RedisDB_AgentRequest { Message = json });
            return rsp.Message;
        }
        public async Task<string> AddTask(string json)
        {
            var cs = JsonUtils.Deserialize<cs_task_add>(json);
            if (cs == null || cs.task == null) return JsonUtils.Serialize(new sc_task_add(-101, "消息错误", secret));
            if (!cs.Check(secret)) return JsonUtils.Serialize(new sc_task_add(-102, "验证失败", secret));
            var senddata = await BaseHelper.TaskAdd(cs.task);
            return JsonUtils.Serialize(senddata.ToMsg());
        }
        public async Task<string> RemoveTask(string json)
        {
            var cs = JsonUtils.Deserialize<cs_task_remove>(json);
            if (cs == null || !cs.Check(secret)) return JsonUtils.Serialize(new sc_task_add(-102, "验证失败", secret));
            var task = await BaseHelper.GetBase<ttask>(cs.id);
            if (task == null) return JsonUtils.Serialize(new sc_task_remove(-1, "任务不存在", secret));
            task.IsEnable = false;
            await BaseHelper.AddOrUpdateBase(task);
            //await BaseHelper.DeleteBase(task);
            return JsonUtils.Serialize(new sc_task_remove(1, "删除任务成功", secret));
        }
        public async Task<string> AddCompete(string json)
        {
            var cs = JsonUtils.Deserialize<cs_compete_add>(json);
            if (cs == null || !cs.Check(secret)) return JsonUtils.Serialize(new sc_task_add(-101, "比赛信息验证失败", secret));
            var model = cs.info.ToModel();
            string reason = "";
            if (!model.CheckTime(ref reason)) return JsonUtils.Serialize(new sc_task_add(-102, reason + ",模板更新失败", secret));
            if (CompeteFactory.GetCompete(model) == null) return JsonUtils.Serialize(new sc_task_add(-103, "目前不支持游戏编号[" + model.GameID + "]比赛类型[" + model.Type + "]的比赛", secret));
            if (model.ID > 0)
            {
                if (await BaseHelper.AddOrUpdateBase(model))
                {
                    return JsonUtils.Serialize(new sc_compete_add(1, "修改比赛模板成功", secret));
                    CompeteService.Send(new cs_reload { });
                }
                return JsonUtils.Serialize(new sc_compete_add(-103, "修改比赛模板失败", secret));
            }
            if (await BaseHelper.InsertBase(model))
            {
                return JsonUtils.Serialize(new sc_compete_add(1, "添加比赛模板成功", secret));
                CompeteService.Send(new cs_reload { });
            }
            return JsonUtils.Serialize(new sc_compete_add(-103, "添加比赛模板失败", secret));
        }
        public async Task<string> AddCompeteProperty(string json)
        {
            var cs = JsonUtils.Deserialize<cs_compete_property_add>(json);
            if (cs == null || !cs.Check(secret)) return JsonUtils.Serialize(new sc_task_add(-102, "信息验证失败", secret));
            CompeteProperty pinfo = await BaseHelper.GetBase<CompeteProperty>(x => x.FieldName == cs.info.FieldName && x.CompeteTemplateID == cs.info.CompeteTemplateID);
            if (pinfo != null)
            {
                pinfo.Value = cs.info.Value;
                pinfo.IsEnable = cs.info.IsEnable;
                if (await BaseHelper.AddOrUpdateBase(pinfo))
                {
                    return JsonUtils.Serialize(new sc_compete_property_add(1, "修改牌桌属性成功", secret));
                }
                return JsonUtils.Serialize(new sc_compete_property_add(-101, "修改牌桌属性失败", secret));
            }
            if (await BaseHelper.InsertBase(cs.info.ToProperty()))
            {
                return JsonUtils.Serialize(new sc_compete_property_add(1, "添加牌桌属性成功", secret));
            }
            return JsonUtils.Serialize(new sc_compete_property_add(-101, "添加牌桌属性失败", secret));
        }

        public async Task<string> GameReport( cs_gamereport_gm data)
        {

            tUser user = await tb_UserEx.GetFromCachebyUserID(data.uid);
            sc_gamereport_gm gamereport = new sc_gamereport_gm() { _ret = 1 };
            if (user == null)
            {
                gamereport._info = $"未找到该玩家[{data.uid}]";
                return JsonUtils.Serialize(gamereport);
            }
            tuserInfoEx userinfoex = await tb_userinfoEx.GetFromCachebyUserID(user.UserID);
            if (user != null && userinfoex != null)
            {
                var reinfo = userinfoex.ReportInfo;
                int rgold = 0;
                if (reinfo != null)
                {
                    if (reinfo.rtime.ToGetDayEndDateTime() < DateTime.Now.ToGetDayEndDateTime()) reinfo = new ReportInfo { rtime = DateTime.Now, num = 0 };
                }
                else reinfo = new ReportInfo { rtime = DateTime.Now, num = 0 };

                if (reinfo.num + 1 == 1) rgold = 1000;
                if (reinfo.num + 1 == 2) rgold = 2000;
                if (reinfo.num + 1 >= 3) rgold = 4000;
                if (user.GetGoldAndWinGold < rgold) gamereport._ret = -1;
                else
                {
                    reinfo.num++;
                    reinfo.rtime = DateTime.Now;
                    user.GoldReduce(rgold);
                    CommonLogic.updategold(user, 2);

                    tgoldchangelog model = new tgoldchangelog();
                    model.UserId = user.UserID;
                    model.gamble = 0;
                    model.Gold = rgold;
                    model.BeforeGold = user.GetGoldAndWinGold + rgold;
                    model.GameId = TexasLobby.instance._gameid;
                    model.AfterGold = user.GetGoldAndWinGold;
                    model.IsRobot = false;
                    model.ChangeType = 48;//表示
                    model.tnum = 0;
                    model.Remark = "举报扣费";
                    model.CreateTime = DateTime.Now;
                    BaseHelper.AddAsync<tgoldchangelog>(model);
                    gamereport._ret = 0;
                    gamereport.renum = reinfo.num;
                    userinfoex.ReportInfo = reinfo;
                    await BaseHelper.AddOrUpdateBase(userinfoex);
                }
            }
            return JsonUtils.Serialize(gamereport);
        }

    }
}