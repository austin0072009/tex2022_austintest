using ETModel.Framework.Common;
using ETModel.Framework.Common.Serialization;
using ETModel.Script.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ETModel.Script.CsScript.Action
{
    public class GoldTradeHelper //: BaseHelper
    {


        /// <summary>
        /// 邮件中是否可以发送金币
        /// </summary>
        public static bool _openSendGold = false;
        public static async Task<string> GetCurrentPlayerInfoSD(tUser tbUser)
        {
            //var _list = await tjackpotEx.GetAllJackpot();
            var scSd = new sc_freshplayerInfoSD { result = 1,user = new PlayerInfoSD() };
            tuserInfoEx tuserInfo = await tb_userinfoEx.GetFromCachebyUserID(tbUser.UserID);

            scSd.user.userid = tbUser.UserID;
            scSd.user._n = tbUser.wechatName;
            scSd.user.gold = tbUser.GetGoldAndWinGold;
            scSd.user.UserLev = tbUser.lv;
            scSd.user._diam = (int)tbUser.diamond;
            scSd.user.wechat = new WechatInfoSD() { wicon = ToolsEx.IsHandlePhoto(tbUser.isRobot, tbUser.wechatHeadIcon), _S = tbUser.Sex, wName = tbUser.wechatName };
            scSd.user._vlv = tuserInfo.vipLv;
            scSd.alljackpot = 0;// (int)_list.Sum(t => t.jackpot);
            scSd.user.lv = tbUser.vlevel;
            scSd.user.freecount = 0;
            scSd.user.deposited = tbUser.Gold;
            scSd.user.mallGod = 0;
            scSd.user.phone = tuserInfo.MobilePhoneNum;
            scSd.user.winnings = tuserInfo.WinGold;

            tUserGameHand agenthand = await tUserGamehandEx.GetUserHandRecord(tbUser.UserID, GetUserClubid(tbUser));
            if (agenthand == null) agenthand = new tUserGameHand();
           
            scSd.user.cinfo = new CountInfoSD()
            {
                //winc = agenthand.gameWinCount,
                //failc = agenthand.gameLostCount,
                //dc = agenthand.gameDrawCount,
                fr = agenthand.dealCardCount,
                FillingCount = agenthand.FillingCount,
                tablenum = agenthand.totalCount,
                bet3 = agenthand.bet3,
                cbet3 = agenthand.cbet3,
                addpoolnum = agenthand.addpoolnum,
                drivingnum = agenthand.drivingnum,
                Bigblind = agenthand.addpoolnum,
                AveGains = agenthand.AveGains,
                Aveinto = agenthand.Aveinto
            };

            UserStatus _us =await BaseHelper.TryGetUserStatus(tbUser.UserID);//获取是否需要断线重连  
            if (_us != null) scSd.user.state = (int)_us.Status;
            return JsonUtils.Serialize(scSd);
        }
        private static int GetUserClubid(tUser user) => (user.clublist == null || user.clublist.Count == 0) ? 0 : user.clublist[0];

        /// <summary>
        /// 申请赠送积分
        /// </summary> 
        public static async Task<string> GoldTrade(tUser user, cs_sendgoldtrade data)
        {
            string result = string.Empty;
            var transferMsg = new sc_sendgoldtrade() {  result = 1 };
            try
            {
                var targetUser = await tb_UserEx.GetFromCachebyUserID(data.objuserid);
                if (targetUser == null)
                {
                    transferMsg.result = -1;
                    return JsonUtils.Serialize(transferMsg);
                }

                if (targetUser.UserID == user.UserID)
                {
                    transferMsg.result = -2;
                    return JsonUtils.Serialize(transferMsg);
                }
                if (data.Gold < 2000)
                {
                    transferMsg.result = -7;
                    return JsonUtils.Serialize(transferMsg);
                }
                if (data.Gold > 1000000)
                {
                    transferMsg.result = -8;
                    transferMsg.message = "金额必须小于等于10000";
                    return JsonUtils.Serialize(transferMsg);
                }
                if (data.IsGet)
                {
                    if (targetUser.GetGoldAndWinGold < data.Gold)
                    {
                        transferMsg.result = 2;
                        return JsonUtils.Serialize(transferMsg);
                    }
                    //if (targetUser.AgentId != user.UserID)
                    //{
                    //    transferMsg.result = -3;
                    //    return JsonUtils.Serialize(transferMsg);
                    //}
                }
                else
                {
                    if (user.GetGoldAndWinGold < data.Gold)
                    {
                        transferMsg.result = 2;
                        return JsonUtils.Serialize(transferMsg);
                    }
                }

                transferMsg.objuserid = targetUser.UserID;
                transferMsg.objusername = targetUser.wechatName;
                transferMsg.objuserwicon = ToolsEx.IsHandlePhoto(targetUser.isRobot, targetUser.wechatHeadIcon).Trim();

            }
            catch (Exception ex)
            {
                TraceLogEx.Error("转账赠送失败Crash-----" + ex.Message);
                transferMsg.result = -3;
            }
            return JsonUtils.Serialize(transferMsg);
        }

        /// <summary>
        /// 确认赠送JB
        /// </summary>
        /// <param name="user"></param>
        /// <param name="data"></param>
        /// <returns></returns>
        public static async Task<string> EnsureGoldTrading(tUser user, cs_dealgoldtrade data)
        {
            //result 1:可以扣款，2 余额不足不能扣款,-1 用户账号不合法或者小于等于0,-2用户未在线或者给自己赠送，-3操作失败账号状态异常,-4用户拒绝            
            sc_dealgoldtrade sendData = new sc_dealgoldtrade { result = 2, Msg = "余额不足不能扣款" };
            var _agent = tuseragent2021Ex.GetAgentFromCachebyUserID(user.UserID,0);
            if (user.GetGoldAndWinGold < data.Gold)
            {
                sendData.result = 2;
                sendData.Msg = "玩家余额不足";
                return JsonUtils.Serialize(sendData);
            }


            if (data.Gold < 2000)
            {
                sendData.result = -7;
                sendData.Msg = "金额必须大于等于20";
            }
            else if (data.Gold > 1000000)
            {
                sendData.result = -8;
                sendData.Msg = "金额必须小于等于10000";
            }
            else
            {
                //检测银行密码
                Bank bankop = new Bank();
                bool checkpassword = await bankop.checkPassword(data.bankPassWord, user.UserID);
                // bool checkpassword = true;//先不验证密码
                if (checkpassword)
                {
                    tUser _targetUser = await tb_UserEx.GetFromCachebyUserID(data.objuserid);// userCache.FindKey(data.objuserid.ToString());
                    if (_targetUser == null)
                    {
                        TraceLogEx.Error(" fetal error ...data.objuserid:" + data.objuserid);
                        sendData.result = -1;
                        sendData.Msg = "赠送用户不存在";
                        return JsonUtils.Serialize(sendData);
                    }
                    if (await EnsureGoldLogic(user, _targetUser, data))
                    {
                        sendData.result = 1;
                        sendData.Msg = "赠送成功";
                    }
                }
                else
                {
                    sendData.result = -6;
                    sendData.Msg = "密码错误";
                }
            }
            return JsonUtils.Serialize(sendData);
        }

        /// <summary>
        /// 获取赠送记录
        /// </summary>
        /// <param name="_user"></param>
        /// <param name="_data"></param>
        /// <returns></returns>
        public static string GetGiveRecord(tUser user, cs_getgoldlog _data)
        {
            sc_getgoldlog senddata = new sc_getgoldlog() { result = 0, cc = 0 };
            var result = MailHelper.GetGiveEmailrecord(user.UserID, _data.pageIndex, _data.pageSize,1);

            return JsonUtils.Serialize(senddata);
        }
        /// <summary>
        /// 获取赠送记录
        /// </summary>
        /// <param name="_user"></param>
        /// <param name="_data"></param>
        /// <returns></returns>
        public static async Task<string> SearchGoldOrNickName(tUser user, cs_searchgoldornickname _data)
        {
            sc_searchgoldornickname senddata = new sc_searchgoldornickname() { result = 1, cc = 0 };
            if (user.UserID == _data.userid)
            {
                senddata.gold = user.GetGoldAndWinGold;
                senddata.nickname = user.wechatName;
            }
            else
            {
                tUser _tempuser = await tb_UserEx.GetFromCachebyUserID(_data.userid);
                if (_tempuser == null)
                {
                    senddata.result = 0;
                    senddata.message = "未找到该玩家";
                }
                else
                {
                    senddata.gold = _tempuser.GetGoldAndWinGold;
                    senddata.nickname = _tempuser.wechatName;
                }
                
            }
            return JsonUtils.Serialize(senddata);
        }
        /// <summary>
        /// 确认金金币逻辑
        /// </summary>
        /// <param name="user"></param>
        /// <param name="_targetUser"></param>
        /// <param name="data"></param>
        private static async Task<bool> EnsureGoldLogic(tUser user, tUser _targetUser, cs_dealgoldtrade data)
        {
            sc_dealgoldtrade_n pushMsg = new sc_dealgoldtrade_n { };
            if (user != null && _targetUser != null)
            {


                if (user.GetGoldAndWinGold >= (decimal)data.Gold)
                {

                    var rLog = new tUserRechargeLog();
                    rLog.cointype = data.Save==0? 3:5;
                    rLog.createtime = DateTime.Now;
                    rLog.fromtype = 2;
                    rLog.money = -(decimal)data.Gold;
                    rLog.oldGold = user.GetGoldAndWinGold;
                    rLog.currGold = user.GetGoldAndWinGold - (decimal)data.Gold;
                    rLog.remarks = _targetUser.wechatName + "/nID:" + _targetUser.UserID;
                    rLog.userid = user.UserID;
                    rLog.fromuserid = _targetUser.UserID;
                   
                    BaseHelper.AddAsync<tUserRechargeLog>(rLog);
                    if (data.Save == 0)
                    {
                        var targetLog = new tUserRechargeLog();
                        targetLog.cointype = 4;
                        targetLog.createtime = DateTime.Now;
                        targetLog.fromtype = 2;
                        targetLog.money = (decimal)data.Gold;
                        targetLog.oldGold = _targetUser.GetGoldAndWinGold;
                        targetLog.currGold = _targetUser.GetGoldAndWinGold + (decimal)data.Gold;
                        targetLog.remarks = user.wechatName + "/nID:" + user.UserID;
                        targetLog.userid = _targetUser.UserID;
                        targetLog.fromuserid = user.UserID;
                        BaseHelper.AddAsync<tUserRechargeLog>(targetLog);
                    }
                    else
                    {
                        tbanklog log = new tbanklog();
                        log.UserId = user.UserID;
                        log.OpDate = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                        log.OpType = 3;
                        log.OpCount = (int)data.Gold;
                        log.ToUserID = _targetUser.UserID;
                        await BaseHelper.InsertShare<tbanklog>(log);

                        tbanklog log1 = new tbanklog();
                        log1.UserId = _targetUser.UserID;
                        log1.OpDate = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
                        log1.OpType = 4;
                        log1.OpCount = (int)data.Gold;
                        log1.ToUserID = user.UserID;
                        await BaseHelper.InsertShare<tbanklog>(log1);
                    }
                   

                    tgoldchangelog model = new tgoldchangelog();

                    model.UserId = user.UserID;
                    model.BeforeGold = user.GetGoldAndWinGold - (long)data.Gold;
                    model.gamble = 0;
                    model.Gold = -(long)data.Gold;
                    model.AfterGold = user.GetGoldAndWinGold;
                    model.GameId = 51;
                    model.ChangeType = data.Save == 0 ? 8 : 11; 

                    model.IsRobot = false;
                    BaseHelper.AddAsync(model);


                    user.GoldReduce((long)data.Gold);

                    tclub cuser = await BaseHelper.GetShare<tclub>(user.UserID);
                    tclub tuser = await BaseHelper.GetShare<tclub>(_targetUser.UserID);
                    if (cuser == null && tuser == null) //收取1% 手续费
                    {
                        data.Gold = data.Gold * 0.99f;
                        tTaxLog _taxlog = new tTaxLog()
                        {
                            ActionCoin = data.Gold * 0.01f,
                            UserId = user.UserID,
                            ActionType = ResActionType.giveGold,
                            CreateDate = DateTime.Now,
                            SourceGameID = TexasLobby.instance._gameid,
                            SourceUserId = _targetUser.UserID,
                            SourceRoomID = 0,
                            TableUserLogId = 0
                        };
                        BaseHelper.AddAsync(_taxlog);
                    }
                    if (data.Save == 0)
                    {
                        _targetUser.Gold += (long)data.Gold;
                    }
                    else
                    {
                        _targetUser.BankGold += (long)data.Gold;
                    }
                    
                    tb_UserEx.UpdateData(user);
                    tb_UserEx.UpdateData(_targetUser);
                    CommonLogic.updategold(user, 2);
                    CommonLogic.updategold(_targetUser, 2);


                    pushMsg.result = 1;
                    pushMsg.Gold = data.Gold;
                    pushMsg.objuserid = user.UserID;
                    pushMsg.objusername = user.wechatName;
                    SendMoneyTradinMsg(_targetUser.UserID, pushMsg);

                    //发送邮件 
                    var tradeNo = await tb_TradeInfoEx.Add((long)data.Gold, 0, user.UserID, _targetUser.UserID, 8,"",data.Save==1);
                    string strMoney = (data.Gold / 100).ToString("0.00");
                    if (!string.IsNullOrEmpty(tradeNo))
                    {
                        if (data.Save == 0)
                        {
                            await MailHelper.SendEmail(tradeNo, user.UserID, user.wechatName, _targetUser.UserID, 1, 1, "金币赠送", user.wechatName + "赠送" + strMoney + "金币给您");
                        }
                        else
                        {
                            await MailHelper.SendEmail(tradeNo, user.UserID, user.wechatName, _targetUser.UserID, 1, 1, "银行转账", user.wechatName + "向您转账" + strMoney + "金币");
                        }
                    }
                       

                    return true;
                }
            }
            else
            {
                pushMsg.Gold = data.Gold;
                pushMsg.objuserid = user.UserID;
                pushMsg.objusername = user.wechatName;
                pushMsg.result = -4;
                SendMoneyTradinMsg(_targetUser.UserID, pushMsg);
            }
            return false;
        }
        /// <summary>
        /// 确认银行金币逻辑
        /// </summary>
        /// <param name="user"></param>
        /// <param name="_targetUser"></param>
        /// <param name="TranGold">转账金额</param>
        public static async Task<bool> EnsureBankMoneyLogic(tUser user, tUser _targetUser, float TranGold)
        {
            sc_dealgoldtrade_n pushMsg = new sc_dealgoldtrade_n { };
            if (user != null && _targetUser != null)
            {


                if (user.BankGold >= TranGold)
                {
                    user.BankGold -= (long)TranGold;

                    tclub cuser = await BaseHelper.GetShare<tclub>(user.UserID);
                    tclub tuser = await BaseHelper.GetShare<tclub>(_targetUser.UserID);
                    if (cuser == null && tuser == null) //收取1% 手续费
                    {
                        TranGold = TranGold * 0.99f;
                        tTaxLog _taxlog = new tTaxLog()
                        {
                            ActionCoin = TranGold * 0.01f,
                            UserId = user.UserID,
                            ActionType = ResActionType.giveGold,
                            CreateDate = DateTime.Now,
                            SourceGameID = TexasLobby.instance._gameid,
                            SourceUserId = _targetUser.UserID,
                            SourceRoomID = 0,
                            TableUserLogId = 0
                        };
                        BaseHelper.AddAsync(_taxlog);
                    }

                    _targetUser.BankGold += (long)TranGold;
                    tb_UserEx.UpdateData(user);
                    tb_UserEx.UpdateData(_targetUser);
                    CommonLogic.updategold(user, 2);
                    CommonLogic.updategold(_targetUser, 2);


                    pushMsg.result = 1;
                    pushMsg.Gold = TranGold;
                    pushMsg.objuserid = user.UserID;
                    pushMsg.objusername = user.wechatName;
                    SendMoneyTradinMsg(_targetUser.UserID, pushMsg);

                    //发送邮件 
                    var tradeNo = await tb_TradeInfoEx.Add((long)TranGold, 0, user.UserID, _targetUser.UserID, 8,"",true);
                    string strMoney = (TranGold / 100).ToString("0.00");
                    if (!string.IsNullOrEmpty(tradeNo))
                        await MailHelper.SendEmail(tradeNo, user.UserID, user.wechatName, _targetUser.UserID, 1, 1, "银行转账", user.wechatName + "向您转账" + strMoney + "金币");

                    return true;
                }
            }
            else
            {
                pushMsg.Gold = TranGold;
                pushMsg.objuserid = user.UserID;
                pushMsg.objusername = user.wechatName;
                pushMsg.result = -4;
                SendMoneyTradinMsg(_targetUser.UserID, pushMsg);
            }
            return false;
        }
        private static void SendMoneyTradinMsg(int userId, sc_dealgoldtrade_n msg)
        {
            List<UserIDMSG> imList = new List<UserIDMSG>();
            imList.Add(new UserIDMSG(userId, msg, false, false));
            LobbySendDataServer.instance.SendDataDelay(imList);
        }
      

        public static string GetDiamondName(int lenum, int ctype)
        {
            string name = "";
            switch (lenum)
            {
                case (int)LangEnuNew.BaseBIG5Language:
                    name = Enum.GetName(typeof(DiamondBIGLogEnum), ctype);
                    break;
                case (int)LangEnuNew.BaseENLanguage:
                    name = Enum.GetName(typeof(DiamondENLogEnum), ctype);
                    break;
                case (int)LangEnuNew.SimplifiedLanguage:
                    name = Enum.GetName(typeof(DiamondZHLogEnum), ctype);
                    break;
                default:
                    name = Enum.GetName(typeof(DiamondZHLogEnum), ctype);
                    break;
            }
            return name;
        }

      
    }

    /// <summary>
    /// 交易信息相关
    /// </summary>
    public class tb_TradeInfoEx
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="fromUserId"></param>
        /// <returns></returns>
        public static async Task<List<tTradeInfo>> GetTradeInfoByFromUserid(int fromUserId)
        {            
            List<tTradeInfo> list =await BaseHelper.GetShareAll<tTradeInfo>(st => st.FromUserId == fromUserId);
            return list;
        }
       
        public static async Task<List<tTradeInfo>> GetTradeInfobyToUserId(int touserid)
        {
            List<tTradeInfo> list =await BaseHelper.GetShareAll<tTradeInfo>(st => st.ToUserId == touserid); 
            return list;
        }
        /// <summary>
        /// 增加一条交易信息
        /// </summary>
        /// <param name="gold">JB</param>
        /// <param name="diamond">钻石</param>
        /// <param name="fromUserId">发送者</param>
        /// <param name="toUserId">接收者</param>
        /// <returns></returns>
        public static async Task<string> Add(long gold, long diamond, int fromUserId, int toUserId, int changeType = 0, string remark = "",bool bBankTran = false)
        { 
            double _tax = gold * t_anythingList.GetDouble("tax_rate");//税
            double _taxdiamond = diamond * t_anythingList.GetDouble("tax_rate");//税
            int tradeType = 0;
            if (gold > 0 && diamond > 0)
                tradeType = 2;
            else if (gold > 0 && diamond <= 0)
                tradeType = 0;
            else if (gold <= 0 && diamond > 0)
                tradeType = 1;
            else
                tradeType = 3;
            var data = new tTradeInfo
            {
                FromUserId = fromUserId,
                ToUserId = toUserId,
                Coin = gold - (long)_tax,
                TradeNo = ToolsEx.GenerateId(),
                CreateDate = MathUtils.Now,
                State = 1,
                TaxCoin = (long)_tax,
                TradeType = tradeType,
                Diamond = diamond - (long)_taxdiamond,
                TaxDiamond = (long)_taxdiamond
            };
            bool flag =await BaseHelper.Add(data);
            
            if (flag)
            {
                if(bBankTran)return data.TradeNo; 
                tgoldchangelog model = new tgoldchangelog();

                model.ChangeType = changeType;
                //如果是用户送出JB，toUserId才是JB的获得者
                if (changeType == 8)
                {
                    if (toUserId > 0)
                    {
                        var tempu = await tb_UserEx.GetFromCachebyUserID(toUserId);
                        model.BeforeGold = tempu.GetGoldAndWinGold;
                        model.AfterGold = tempu.GetGoldAndWinGold - gold;
                    }
                    else
                    {
                        model.BeforeGold = 0;
                        model.AfterGold = 0;
                    }
                    model.UserId = toUserId;
                    model.ChangeType = 7;
                }
                else
                {
                    if (fromUserId > 0)
                    {
                        var tempu = await tb_UserEx.GetFromCachebyUserID(fromUserId);
                        model.BeforeGold = tempu.GetGoldAndWinGold;
                        model.AfterGold = tempu.GetGoldAndWinGold - gold;
                    }
                    else
                    {
                        model.BeforeGold = 0;
                        model.AfterGold = 0;
                    }
                    model.UserId = fromUserId;
                }
                model.gamble = 0;
                model.Gold = gold;
                model.GameId = 51;
                model.Remark = remark;

                model.IsRobot = false;
                BaseHelper.AddAsync(model);
                return data.TradeNo;
            }

            return "";
        }
    }

}
