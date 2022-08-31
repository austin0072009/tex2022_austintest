using ETModel.Script.Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using ETModel.Framework.Common;
using ETModel.Framework.Common.Serialization;
using ETModel.Framework.Data;
using System.Threading.Tasks;
using ETModel.Framework.Cache.Generic;

namespace ETModel.Script.CsScript.Action
{
    public class MailHelper : BaseHelper
    { 
        #region 发送GM邮件
        /// <summary>
        /// 发送GM邮件
        /// </summary>
        /// <param name="userId">玩家ID</param>
        /// <param name="title">标题</param>
        /// <param name="content">内容</param>
        /// <returns></returns>
        public static async Task<int> SendGMEmail(string title, string content,int[] userIds, int emailType=1,List<Attach> attaches=null)
        {
            try
            {
                if (userIds != null)
                {
                    foreach (var uid in userIds)  await SendEmail(ToolsEx.GenerateId(), 0, "GM", uid, 1, emailType, title, content, attaches);
                }
                else
                {
                    await SendEmail(ToolsEx.GenerateId(), 0, "GM", 0, 1, emailType, title, content, attaches);
                }
                return 0;
            }
            catch (Exception ex)
            {

                return -1;
            }
        }
        /// <summary>
        /// 用户送JB
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="touserid">送给用户的id</param>
        /// <param name="gold"></param>
        /// <param name="diamond"></param>
        /// <param name="cState"></param>
        /// <param name="emailType"></param>
        public static async void SendUserEmail(int userid, int touserid, long gold,
            int cState, int emailType)
        {

            var user = await tb_UserEx.GetFromCachebyUserID(userid);
            var touser = await tb_UserEx.GetFromCachebyUserID(touserid);
            if (user != null || touser != null)
            {
                var tradeNo =await tb_TradeInfoEx.Add(gold, 0, userid, touser.UserID, 7);
                if (!string.IsNullOrEmpty(tradeNo))
                    await SendEmail(tradeNo, userid, user.wechatName, touserid, 1, 3, "送金币", "");
            }
        }


        /// <summary>
        /// 验证长度
        /// </summary>
        /// <param name="content"></param>
        /// <param name="min"></param>
        /// <param name="max"></param>
        /// <returns></returns>
        private static bool VerifyRange(string content, int min, int max)
        {
            int length = Encoding.Default.GetByteCount(content);
            return length >= min && length <= max;
        }
        #endregion

        #region 发送邮件
        /// <summary>
        /// 发送邮件
        /// </summary>
        /// <param name="tradeNo">交易号</param>
        /// <param name="fromUserId">发送者ID，系统用户=>AppSettings.MailSysUserId</param>
        /// <param name="toUserId">接收者ID</param>
        /// <param name="num">附件数量</param>
        /// <param name="mailType">邮件类型，1交易</param>
        /// <param name="cState">0交易失败，1交易成功</param>
        /// <param name="args">邮件内容：1交易=>new string[]{ 被交易昵称, 获得JB数量 }</param>
        /// <param name="emailType">邮件类型0 个人邮件 1 系统邮件  2 活动</param>
        /// <param name="title">标题</param>
        /// <returns></returns>
        public static async Task<bool> SendEmail(string tradeNo, int fromUserId, string fromUserName, int toUserId, int cState, int emailType, string title, string Content,List<Attach> attach = null)
        {
           
            
            MailTypeEnum mailType = MailTypeEnum.personal;
            if (emailType == 2)
            {
                mailType = MailTypeEnum.System;
            }
            CacheList<Model.Attach> tmpAttachs = new CacheList<Model.Attach>();
            if (attach != null)
            {
                foreach(var v in attach)
                {
                    tmpAttachs.Add(new Model.Attach() { ItemID = v.ItemID, Num = v.Num });
                }
            }
            temail mail = new temail
            {
                IsLook = false,
                TradeNo = tradeNo,
                FromUserId = fromUserId,
                FromUserName = fromUserName,
                ToUserId = toUserId,
                Content = Content,
                CreateDate = MathUtils.Now,
                State = tmpAttachs.Count>0?1:0,
                MailType = mailType,
                Attach = tmpAttachs,// new Model.Attach(),
                CState = cState,
                EmailType = (int)mailType,
                Title = title
            };
            bool flag = await BaseHelper.Add(mail);
            if (flag)
            {
                //推送 有新的邮件
                sc_pushevent_n push = new sc_pushevent_n() { result = 1, Type = 1 };
                if (toUserId==0)   BaseSendDataServer.AutoNotifySendData(JsonUtils.Serialize((push)));//全部玩家
                else  BaseSendDataServer.NotifySendDataUserID(JsonUtils.Serialize(push), toUserId);
            }
            return flag;
        }
        #endregion

        #region 获取邮件列表
        /// <summary>
        /// 获取自己送的邮件（JB）
        /// </summary>
        /// <param name="type">自己送的   2获得的</param>
        /// <returns></returns>
        public static async Task< sc_getgoldlog> GetGiveEmailrecord(int userid, int pageIndex, int pageSize, int type)
        {
            //sc_getmodelrecord
            int pageCount;
            int recordCount;
            List<temail> lst = null;
            List<tTradeInfo> tradeinfos = null;
            if (type.Equals(1))
            {
                List<temail> lst1 = await GetShareAll<temail>(x => x.MailType == MailTypeEnum.personal && x.FromUserId == userid);
                lst = MathUtils.GetPaging<temail>(lst1
                .OrderByDescending((x) => x.CreateDate).ToList()
                , pageIndex, pageSize
                , out pageCount, out recordCount);
                tradeinfos =await tb_TradeInfoEx.GetTradeInfoByFromUserid(userid);
            }
            else
            {
                List<temail> lst2 = await GetShareAll<temail>(x => x.MailType == MailTypeEnum.personal && x.ToUserId == userid);
                lst = MathUtils.GetPaging<temail>(lst2
            .OrderByDescending((x) => x.CreateDate).ToList()
            , pageIndex, pageSize
            , out pageCount, out recordCount);
                tradeinfos =await tb_TradeInfoEx.GetTradeInfobyToUserId(userid);
            }
            var joins = (from e in lst
                         join t in tradeinfos
                         on e.TradeNo equals t.TradeNo
                         select new GiveEntitySD
                         {
                             TradeNo = e.TradeNo,
                             Content = e.Content,
                             CreateDate = e.CreateDate.ToFormat(),
                             MailType = (int)e.MailType,
                             CState = e.CState,
                             IsLook = e.IsLook,
                             Diamond = t.Diamond,
                             Coin = t.Coin,
                             Title = e.Title,
                             FromUserId = e.FromUserId,
                             ToUserId = e.ToUserId,
                             FromUserName = e.FromUserName
                         }).ToList();
            return new sc_getgoldlog
            {
                pageCount = pageCount,
                recordCount = recordCount,
                EntityList = joins
            };

        }

         

        /// <summary>
        /// 获取邮件列表
        /// </summary>
        /// <param name="userId">玩家ID</param>
        /// <param name="pageIndex">页号</param>
        /// <param name="pageSize">每页大小</param>
        /// <param name="mailType">0 个人邮件1 系统邮件</param>
        /// <returns></returns>
        public static async Task<sc_getemaillist> GetEmailList(int userId)
        {
            List<temail> temlist = new List<temail>();
            var maillist = await BaseHelper.GetShareAll<temail>(x => (x.ToUserId == userId || x.ToUserId == 0) && x.CreateDate >= DateTime.Now.AddDays(-7));
            if (maillist != null) maillist = maillist.OrderByDescending((x) => x.CreateDate).ToList();

            List<tTradeInfo>  tradeinfos = await tb_TradeInfoEx.GetTradeInfobyToUserId(userId);
            var joins = (from e in maillist
                         select new EmailinfoSD
                         {
                             content = e.Content,
                             tradeno = e.TradeNo,
                             _time = e.CreateDate.ToFormat(),
                             _type = e.MailType,
                             _cstate = e.CState,
                             islook = e.IsLook,
                             _state = e.State,
                             attach = e.Attach != null ? e.Attach.ToList().ConvertAll(a=>new Attach() {Num=a.Num,ItemID = a.ItemID,url=PropsManager.Ins.props.ContainsKey(a.ItemID)? PropsManager.Ins.props[a.ItemID].ImgUrl:"" }) : null,
                             title = e.Title,
                             fromUserid = e.FromUserId,
                             ToUserId = e.ToUserId,
                             fromUserName = Enum.GetName(typeof(MailNameEnum), (int)e.MailType)
                         }).ToList();
            return new sc_getemaillist{emaillist = joins,fn = "sc_getemaillist",result = 1 };
        }
        #endregion

        #region 领取邮件附件
        /// <summary>
        /// 领取邮件附件
        /// </summary>
        /// <param name="user">玩家ID</param>
        /// <param name="tradeNo">交易号</param>
        /// <returns></returns>
        public static async Task<int> ReceiveEmail(tUser user, string tradeNo, sc_receiveemail receiveemaildata)
        {
            temail tb_email = await GetShare<temail>((x) => x.TradeNo == tradeNo && x.ToUserId == user.UserID);
            if (tb_email == null || tb_email.State != 1)
            {
                return SimplifiedLanguage.Fail;
            }
            if(tb_email.Attach==null || tb_email.Attach.Count <= 0)
            {
                return SimplifiedLanguage.Fail;
            }
            long lTmpGold = 0;
            bool bUpdateUser = false;
            foreach(var v in tb_email.Attach)
            {
                if (PropsManager.Ins.props.ContainsKey(v.ItemID))
                {
                    tPropConfig config = PropsManager.Ins.props[v.ItemID];
                    //if (config.UseType == 1) //使用
                    //{

                    //}else if (config.UseType == 0) //兑换
                    //{
                    //    if (config.PropType == 0)//金币
                    //    {
                    //        user.Gold += config.Gold * v.Num;
                    //        lTmpGold += config.Gold * v.Num;
                    //    }else if(config.PropType==2)//钻石
                    //    {
                    //        user.diamond += config.Gold * v.Num;
                    //        lTmpGold += config.Gold * v.Num;
                    //    }
                    //    else if (config.PropType == 3)//玩家经验
                    //    {
                    //        user.diamond += config.Gold * v.Num;
                    //        lTmpGold += config.Gold * v.Num;
                    //    }
                    //    else if (config.PropType == 4)//VIP经验
                    //    {
                    //        VIPHelper.SetUserVipInfo(user.UserID, v.Num * config.Gold, 0);
                    //        lTmpGold += config.Gold * v.Num;
                    //    }else if(config.PropType == 5)
                    //    {
                    //        BackPackHelper.AddProp(user.UserID, v.ItemID, v.Num);
                    //    }
                    //}

                    if (config.PropType == 0)//金币
                    {
                        user.Gold += config.Gold * v.Num;
                        lTmpGold += config.Gold * v.Num;
                        bUpdateUser = true;
                        CommonFun.WriteGoldOrDiamondChangeLog(user.UserID, 0, user.GetGoldAndWinGold, lTmpGold, 5, 0, "邮件附件");
                    }
                    else if (config.PropType == 3)//钻石
                    {
                        user.diamond += config.Gold * v.Num;
                        lTmpGold += config.Gold * v.Num;
                        bUpdateUser = true;
                        CommonFun.WriteGoldOrDiamondChangeLog(user.UserID, 0, user.diamond, lTmpGold, 5, 0, "邮件附件",bDiamond:true);
                    }
                    else if (config.PropType == 4)//玩家经验
                    {
                        lTmpGold += config.Gold * v.Num;
                        tb_UserEx.SetUserExp(user, (int)lTmpGold);
                    }
                    else if (config.PropType == 5)//VIP经验
                    {
                        VIPHelper.SetUserVipInfo(user.UserID, v.Num * config.Gold, 0);
                        lTmpGold += config.Gold * v.Num;
                    }
                    else if (config.PropType == 6)
                    {
                        await BackPackHelper.AddProp(user.UserID, v.ItemID, v.Num);
                    }
                }
                else
                {
                    TraceLogEx.Error($"未发现对应的道具[{v.ItemID}]");
                    return SimplifiedLanguage.Fail;
                }
            }
            receiveemaildata.attaches = tb_email.Attach.ToList().ConvertAll(a=>new Attach() {ItemID = a.ItemID,Num = a.Num });
            receiveemaildata.gold = lTmpGold;
            receiveemaildata.totalgold = user.GetGoldAndWinGold;
            receiveemaildata.totaldiamond = user.diamond;
            tb_email.State = 2;
            tb_email.IsLook = true;
            if (bUpdateUser)
            {
                BaseHelper.AddOrUpdateBase(user);
            }

            await BaseHelper.Add(tb_email);
            return SimplifiedLanguage.Success;
        }
        public static async Task< int> SetMailState(string tradeNo, int toUserId)
        {
            temail tb_email = await GetShare<temail>((x) => x.TradeNo == tradeNo && x.ToUserId == toUserId);
            if (tb_email == null)
            {
                return SimplifiedLanguage.Fail;
            }
            tb_email.IsLook = true;
            await BaseHelper.Add(tb_email);
            return SimplifiedLanguage.Success;
        }

        public static List<tTradeInfo> SetGetTradeLog(int count, int userid)
        {
            var command = ConfigManger.Provider.CreateCommandStruct("ttradeinfo", CommandMode.Inquiry);
            command.OrderBy = "CreateDate DESC ";
            command.Columns = "FromUserId,ToUserId,Coin,TaxCoin,State,CreateDate,TradeType";
            command.Filter = ConfigManger.Provider.CreateCommandFilter();
            command.Filter.Condition = string.Format("{0} and {1} ", command.Filter.FormatExpression("FromUserId"), command.Filter.FormatExpression("CreateDate", ">="));
            command.Filter.AddParam("FromUserId", userid);
            command.Filter.AddParam("CreateDate", DateTime.Now.AddDays(-1 * count));
            command.Parser();

            using (var reader = ConfigManger.Provider.ExecuteReader(CommandType.Text, command.Sql, command.Parameters))
            {
                List<tTradeInfo> olist = new List<tTradeInfo>();
                while (reader.Read())
                {
                    tTradeInfo ordermode = new tTradeInfo();

                    ordermode.FromUserId = reader["FromUserId"].ToInt();
                    ordermode.ToUserId = reader["ToUserId"].ToInt();
                    ordermode.Coin = reader["Coin"].ToLong();
                    ordermode.TaxCoin = reader["TaxCoin"].ToLong();
                    ordermode.State = reader["State"].ToInt();
                    ordermode.CreateDate = reader["CreateDate"].ToDateTime();
                    ordermode.TradeType = reader["TradeType"].ToInt();
                    olist.Add(ordermode);
                }
                return olist;
            }
        }


        #endregion

        #region 删除邮件
        /// <summary>
        /// 删除邮件
        /// </summary>
        /// <param name="userId">玩家ID</param>
        /// <param name="tradeNo">邮件自增ID</param>
        /// <returns></returns>
        public static async Task<string> RemoveEmail(string tradeNo, int toUserId)
        {
            sc_removeEmail senddata = new sc_removeEmail() { result = 0};

            temail item = await BaseHelper.GetShare<temail>(x => x.TradeNo == tradeNo && x.ToUserId == toUserId);
            if (item != null)
            {
                if (item.EmailType == 2)
                {
                    senddata.result = -2;
                    senddata.message = "系统邮件不可删除.";
                }
                else
                {
                    senddata.result = 1;
                    await BaseHelper.Delete(item);
                }
            }
            else
            {
                senddata.result = -1;
                senddata.message = "邮件不存在";
            }
            return JsonUtils.Serialize(senddata);
        }
        /// <summary>
        /// 删除邮件
        /// </summary>
        /// <param name="userId">玩家ID</param>
        /// <param name="tradeNo">邮件自增ID</param>
        /// <returns></returns>
        public static async Task<int> GMRemoveEmail(string tradeNo, int toUserId)
        {
            temail item = await BaseHelper.GetShare<temail>(x => x.TradeNo == tradeNo&&x.ToUserId==toUserId);
            if (item != null)
            {
                await BaseHelper.Delete(item);
                return 0;
            }
            else
            {
                return 1;
            }
        }
        public static async Task< bool> ModifyeMail(string tradenum,int coin)
        {

            try
            {
                if (tradenum == null) return false;
                temail templist = await BaseHelper.GetShare<temail>(p => p.TradeNo == tradenum);

                if (templist!=null)
                {
                    await BaseHelper.UpdateUserGold(templist.FromUserId, coin);
                    //var user =await tb_UserEx.GetFromCachebyUserID(templist.FromUserId);
                    //user.Gold += coin;
                    //tb_UserEx.UpdateData(user);
                }
                templist.CState = 2;
                await BaseHelper.AddOrUpdate(templist);
                return true;
            }
            catch (Exception ex)
            {

                return false;
            }
        }

        #endregion
    }
}
