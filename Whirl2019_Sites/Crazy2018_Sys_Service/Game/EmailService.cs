using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Interface;
using System;
using System.Linq;
using System.Text;
using Crazy2018_Sys_Common;
using Crazy2018_Sys_ViewEntity;
using System.Linq.Expressions;
using Crazy2018_Sys_Entity;
using System.Web;
using System.Collections.Generic;
using Crazy2018_Sys_ViewEntity.GameCore;

namespace Crazy2018_Sys_Service
{
    public class EmailService : BaseService<temail, int, texas_2021Entities>, IEmailService
    {
        public dynamic CloseOpenActivity(int id, bool isenble)
        {
            using (DBContextHelper db = new DBContextHelper())
            {
              var et =  db.GameActivitys.Find(id);
                if (et!=null)
                {
                    et.IsEnble = isenble;
                    db.SaveChanges();
                    return new {success=true,msg="操作成功!" };
                }
                else
                {
                    return new { success = false, msg = "活动不存在!" };
                }
            }
        }

        public DataResult GameActivityDel(string ids)
        {
            DataResult result = new DataResult();
            if (string.IsNullOrEmpty(ids))
            {
                result.Code = (int)Status.fail;
                result.Message = "id不能为空";
                return result;
            }
            var noticeIds = ids.Split(',');
            foreach (var item in noticeIds)
            {
                if (string.IsNullOrEmpty(item)) continue;
                int id = 0;
                int.TryParse(item, out id);
                using (DBContextHelper db = new DBContextHelper())
                {
                    var emyitty = db.GameActivitys.Find(id);
                    db.GameActivitys.Remove(emyitty);
                    db.SaveChanges();
                }
            }
            result.Message = "删除成功";
            return result;
        }

        public DataResults<EmailView> GetEmailData(DPage page)
        {
            DataResults<EmailView> result = new DataResults<EmailView>();
            if (page == null) page = new DPage();
            Expression<Func<temail, bool>> fun = w => w != null;
            if (!string.IsNullOrEmpty(page.Keywords))
            {
                fun = fun.And(w => w != null && w.Content.Contains(page.Keywords) || w.Title.Contains(page.Keywords));
                int tempId = 0;
                int.TryParse(page.Keywords,out tempId);
                DateTime tTime = DateTime.Now;
              bool flag=  DateTime.TryParse(page.Keywords, out tTime);

                if (flag)
                {
                    var T2Time = tTime.AddHours(23.8);
                    fun = fun.Or(w => w.CreateDate.Value >= tTime && w.CreateDate.Value <= T2Time);
                }
                if (tempId > 0)
                {
                    fun = fun.Or(w => w.FromUserId == tempId || w.ToUserId == tempId);
                }
            }
               
            using (texas_2021Entities dbhelper = new texas_2021Entities())
            {
                var tradeInfo = dbhelper.Set<ttradeinfo>().Where(w => w != null);
                var emailData = GetEntityLisrByWhere(fun)
                    .OrderByDescending(w => w.CreateDate)
                    .Skip((page.PageIndex - 1) * page.PageSize)
                    .Take(page.PageSize);
                var join = (from w in emailData
                            join t in tradeInfo on w.TradeNo equals t.TradeNo
                            join u in dbhelper.tuser on w.ToUserId equals u.UserID
                            select new EmailView
                            {
                                Content = w.Content,
                                CState = w.CState.Value,
                                CreateDate = w.CreateDate.Value.ToString("yyyy-MM-dd HH:mm:ss"),
                                Attach = w.Attach,
                                EmailType = w.EmailType.Value,
                                FromUserId = w.FromUserId.Value,
                                FromUserName = w.FromUserName,
                                ToUserName = u.wechatName,
                                MailType = w.MailType.Value,
                                IsLook = w.IsLook.Value,
                                State = w.State.Value,
                                Title = w.Title,
                                ToUserId = w.ToUserId.Value,
                                TradeNo = w.TradeNo,
                                Coin = t.Coin.Value,
                                Diamond = t.Diamond.Value
                            });
                result.Data = join.ToList();
            }
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            result.Keywords = page.Keywords;
            result.TotalCount = GetCount(fun);
            return result;
        }

        public DataResult<EmailGiveGoldView> GetEmailGiveGoldStatistic(DPagePara page)
        {
            DataResult<EmailGiveGoldView> result = new DataResult<EmailGiveGoldView>();
            if (page == null) page = new DPagePara();
            EmailGiveGoldView rdata = new EmailGiveGoldView();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;

            result.starttime = page.starttime;
            result.endtime = page.endtime;
            result.ChangeType = page.ChangeType;
            result.Rtype = page.Rtype;
            try
            {
                using (texas_2021Entities db = new texas_2021Entities())
                {
                    IQueryable<temail> list = db.temail;

                    if (!string.IsNullOrEmpty(page.Keywords))
                    {
                        int.TryParse(page.Keywords, out int userid);
                        list = list.Where(st => st.FromUserId == userid);
                    }
                    if (page.Rtype!=0)
                    {
                        list = list.Where(st => st.EmailType == page.Rtype);
                    }
                    if (page.starttime != null && page.endtime != null)
                    {
                        list = list.Where(t => t.CreateDate >= page.starttime && t.CreateDate <= page.endtime);
                    }
                    else
                    {
                        var dicdatetime = StatisticsUtil.GetTimeStartTime(page.ChangeType).FirstOrDefault();
                        page.starttime = dicdatetime.Key;
                        page.endtime = dicdatetime.Value;
                        list = list.Where(t => t.CreateDate >= page.starttime && t.CreateDate <= page.endtime);
                    }

                    var gold = from a in list
                                join b in db.ttradeinfo on a.TradeNo equals b.TradeNo
                                where b.Coin!=0 && a.CState==1
                                select b;
                    rdata.TotalGold = gold.Sum(t => t.Coin.Value) / 100;
                    rdata.TotalTax = gold.Sum(t => t.TaxCoin.Value) / 100;
                    rdata.type = page.Rtype;
                    result.Data = rdata;
                    return result;
                }
            }
            catch (Exception ex)
            {
                result.Data = new EmailGiveGoldView();
                return result;
            }
        }

        public DataResults<GameActivity> GetGameActivityList(DPage page)
        {
            DataResults<GameActivity> result = new DataResults<GameActivity>();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;

            try
            {
                using (DBContextHelper db = new DBContextHelper())
                {
                    IQueryable<GameActivity> data = db.GameActivitys.OrderByDescending(t => t.CreatTime);
                    if (!string.IsNullOrEmpty(page.Keywords))
                    {
                        data = data.Where(t=>t.Title.Contains(page.Keywords));
                    }
                    result.TotalCount = data.Count();
                    var rdata = data.Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList();
                    result.Data = rdata;

                    return result;
                }
            }
            catch (Exception ex)
            {
                result.Data = new List<GameActivity>();
                return result;
            }
        }

        public GameActivity GetRankTime(string type)
        {
            using (DBContextHelper db = new DBContextHelper())
            {
                return db.GameActivitys.Where(t=>t.BackField== type).FirstOrDefault();
            }
        }

        public List<RechargeChannel> GetRechargeChannel()
        {
            List<RechargeChannel> data = new List<RechargeChannel>();
            try
            {
                using (DBContextHelper db =new DBContextHelper())
                {
                   return db.RechargeChannels.OrderByDescending(t=>t.ID).ToList();
                }
            }
            catch (Exception ex)
            {
                return new List<RechargeChannel>();
            }
        }

        public DataResult RechargeCDel(string ids)
        {
            DataResult result = new DataResult();
            if (string.IsNullOrEmpty(ids))
            {
                result.Code = (int)Status.fail;
                result.Message = "id不能为空";
                return result;
            }
            var noticeIds = ids.Split(',');
            foreach (var item in noticeIds)
            {
                if (string.IsNullOrEmpty(item)) continue;
                int id = 0;
                int.TryParse(item, out id);
                using (DBContextHelper db = new DBContextHelper())
                {
                    var emyitty = db.RechargeChannels.Find(id);
                    db.RechargeChannels.Remove(emyitty);
                    db.SaveChanges();
                }
            }
            result.Message = "删除成功";
            return result;
        }

        public DataResult RevokeTradeNum(string tradenum)
        {
            DataResult result = new DataResult();
            cs_basemsg_gm bgm = new cs_basemsg_gm();
            result.Code = -1;
            var emailentity = GetEntityByWhere(o=>o.TradeNo.Equals(tradenum));
            if (emailentity==null)
            {
                result.Message = "交易号不存在！";
            }
            else
            {
                if (emailentity.IsLook.HasValue && (bool)emailentity.IsLook)//表示已经领取
                {
                    result.Message = "已经查看 或者领取了金币！";
                }
                else
                {
                    //if (emailentity.MailType==2)//系统
                    //{
                        bgm.fn = "cs_revoketrade_email";
                        bgm.TradeNo = tradenum;
                        string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(bgm));
                        string _content = HttpService.GetHttp(_url, _data);
                        sc_base_gm _scsetcard = JsonHelper.JSONToObject<sc_base_gm>(_content);
                        if (_scsetcard._ret == 1)
                        {
                            Log.Error("添加机器人", _scsetcard._info);
                            result.Code = (int)Status.fail;
                            result.Message = _scsetcard._info;
                        }
                        return result;


                    //}
                    //else if (emailentity.MailType == 3)//个人
                    //{


                    //}
                }

            }
            return result;
        }

        public bool SubmitGameActivity(GameActivity page)
        {
            using (DBContextHelper db = new DBContextHelper())
            {
                if (page.ID > 0)
                {
                    db.GameActivitys.Add(page);
                    db.SaveChanges();
                    return true;
                }
                else
                {
                    page.CreatTime = DateTime.Now;
                    page.IsEnble = true;
                    db.GameActivitys.Add(page);
                    db.SaveChanges();
                    return true;
                }
            }
        }


        /// <summary>
        /// 根据活动id获取用户
        /// </summary>
        /// <param name="typeid"></param>
        /// <returns></returns>
        public DataResults<GameActityUserView> GetActityUserInfo(int typeid)
        {
            DataResults<GameActityUserView> result = new DataResults<GameActityUserView>();
            List<GameActityUserView> actitylist = new List<GameActityUserView>();

            Expression<Func<GameActivity, bool>> fun = w => w != null;
            if (typeid != 0)
            {
                fun = fun.And(x => x.ID == typeid);
            }

            try
            {
                using (texas_2021Entities dbhelper = new texas_2021Entities())
                {
                    var userinfo = dbhelper.tuser.ToList();
                    using (DBContextHelper db = new DBContextHelper())
                    {
                        GameActivity data = db.GameActivitys.Where(fun).FirstOrDefault();
                        if (data != null)
                        {
                           

                            List<string> Userid = data.UserIds == null ? null : data.UserIds.Split(',').ToList();
                            for (int i = 0; i < Userid.Count; i++)
                            {
                                GameActityUserView userView = new GameActityUserView();
                              var user= userinfo.Where(x => x.UserID == Convert.ToInt32(Userid[i])).FirstOrDefault();
                                userView.Id = i;
                                userView.GameId = (int)data.ID;
                                userView.GameName = data.Title;
                                userView.Userid = Userid[i];
                                userView.UserName = user != null ? user.wechatName: "无";
                                actitylist.Add(userView);
                            }

                        }
                        //var _data = (from a in data.ToList()
                        //             orderby a.ID descending
                        //             select new GameActityUserView
                        //             {
                        //                 Id = (int)a.ID,
                        //                 GameId = (int)a.ID,
                        //                 Userid = a.UserIds == null ? null : a.UserIds.Split(',').ToList(),
                        //             }).ToList();

                        result.TotalCount = actitylist.Count();
                        result.Data = actitylist.ToList();
                        result.Message = "获取成功";
                        return result;
                    }
                }
            }
            catch (Exception ex)
            {
                Log.Error("获取房间配置", ex.Message);
                result.Message = "fail";
                return result;
            }
        }

        public void Update(GameActivity actity) {
            using (DBContextHelper db=new DBContextHelper())
            {
              
                var entity = db.GameActivitys.Where(w => w.ID == actity.ID).FirstOrDefault();
                if (entity != null)
                {
                    entity.UserIds = actity.UserIds;
                    db.SaveChanges();
                }
            }
        }

    }
}
