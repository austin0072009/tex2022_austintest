using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity;
using Crazy2018_Sys_Interface;
using Crazy2018_Sys_Service;
using Crazy2018_WebSite_GW.Models;
using FluentScheduler;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Diagnostics;
using System.Linq;
using System.Web;

namespace Crazy2018_WebSite_GW
{
    public class PlannedTask : Registry
    {
       
        public PlannedTask()
        {

            // Schedule an IJob to run at an interval
            // 立即执行每两秒一次的计划任务。（指定一个时间间隔运行，根据自己需求，可以是秒、分、时、天、月、年等。）
            Schedule<OtherJob>().ToRunNow().AndEvery(30).Minutes();

            

            //// Schedule an IJob to run once, delayed by a specific time interval
            //// 延迟一个指定时间间隔执行一次计划任务。（当然，这个间隔依然可以是秒、分、时、天、月、年等。）
            //Schedule<MyJob>().ToRunOnceIn(5).Seconds();

            //// Schedule a simple job to run at a specific time
            //// 在一个指定时间执行计划任务（最常用。这里是在每天的下午 1:10 分执行）
            //Schedule(() => Trace.WriteLine("It's 1:10 PM now.")).ToRunEvery(1).Days().At(13, 10);

            //Schedule(() => {

            //    // 做你想做的事儿。
            //    Trace.WriteLine("It's 1:10 PM now.");

            //}).ToRunEvery(1).Days().At(13, 10);

            //// Schedule a more complex action to run immediately and on an monthly interval
            //// 立即执行一个在每月的星期一 3:00 的计划任务（可以看出来这个一个比较复杂点的时间，它意思是它也能做到！）
            Schedule<MyComplexJob>().ToRunEvery(1).Days().At(23,59);

            Schedule<QueryOrderMsg>().ToRunNow().AndEvery(5).Minutes();


            //Schedule<MyComplexJob>().ToRunNow().AndEvery(60).Seconds();
            //// Schedule multiple jobs to be run in a single schedule
            //// 在同一个计划中执行两个（多个）任务
            //Schedule<MyJob>().AndThen<MyOtherJob>().ToRunNow().AndEvery(5).Minutes();
        }
    }
    public class MyJob : IJob
    {

        void IJob.Execute()
        {
            Trace.WriteLine("现在时间是：" + DateTime.Now);
        }
    }
    public class QueryOrderMsg : IJob
    {
        private readonly static object locker = new object();
        
        void IJob.Execute()
        {
            lock (locker)
            {
                    using (DBContextHelper db = new DBContextHelper())
                    {
                        var time = DateTime.Now.AddMinutes(-10);
                        var rdata = db.RechargeRecordEntities.Where(t => t.CreatTime >= time && t.IsHandel == false).ToList();
                        if (rdata != null && rdata.Count > 0)
                        {
                            rdata.ForEach(t =>
                            {
                                try
                                {
                                 if (t.RechargeType >= 20 && t.RechargeType <= 25)
                                   {
                                    Dictionary<string, string> data = new Dictionary<string, string>();
                                    data.Add("businessId", ConfigurationData.jsdmchid);
                                    data.Add("signType", "MD5");
                                    data.Add("outTradeNo", t.OrderNumber);
                                    TimeSpan ts = DateTime.Now - new DateTime(1970, 1, 1, 0, 0, 0, 0);
                                    data.Add("random", Convert.ToInt64(ts.TotalSeconds).ToString());
                                    data.Add("secret", ConfigurationData.jsdkey);
                                    var Ddata = Utils.AsciiDictionary(data);
                                    var urlstr = Utils.GetUrlString(Ddata);
                                    data.Add("sign", StringHelper.MD5(urlstr));

                                    var diclist2 = Utils.AsciiDictionary(data);
                                    var str = Utils.GetUrlString(diclist2);

                                    var resultdata = Utils.HttpPost(ConfigurationData.jsdpayurl + "/pay/queryPayOrder", str);
                                    var resultEntity = JsonHelper.JSONToObject<DDpayQuery>(resultdata);
                                    
                                    if (resultEntity.successed)
                                    {
                                        var entity = db.RechargeRecordEntities.Where(w => w.OrderNumber.Equals(t.OrderNumber)).FirstOrDefault();
                                        if (entity!=null && entity.businessOrderState == 0)
                                        {
                                                entity.CentreOrderNum = resultEntity.returnValue.oid;
                                            entity.businessOrderState = resultEntity.returnValue.businessOrderState;
                                            entity.orderState = resultEntity.returnValue.orderState;
                                             if(resultEntity.returnValue.payTime!=null)
                                            entity.payTime = resultEntity.returnValue.payTime.Value;
                                            entity.serviceCharge = (int)resultEntity.returnValue.serviceCharge;

                                            DbSet<RechargeRecordEntity> dbSet = db.Set<RechargeRecordEntity>();
                                            DbEntityEntry<RechargeRecordEntity> entry = db.Entry(entity);
                                            if (entry.State == EntityState.Detached)
                                            {
                                                dbSet.Attach(entity);
                                                entry.State = EntityState.Modified;
                                            }
                                            db.SaveChangesAsync();
                                        }
                                    }
                                }
                                else if (t.RechargeType >= 100 && t.RechargeType < 200)//金樽
                                {
                                        Dictionary<string, string> data = new Dictionary<string, string>();
                                        data.Add("businessId", ConfigurationData.jzmacId);
                                        TimeSpan ts = DateTime.Now - new DateTime(1970, 1, 1, 0, 0, 0, 0);
                                        data.Add("random", Convert.ToInt64(ts.TotalSeconds).ToString());

                                        data.Add("outTradeNo", t.OrderNumber);
                                        data.Add("secret", ConfigurationData.jzkey);

                                        var Ddata = Utils.AsciiDictionary(data);
                                        var urlstr = Utils.GetUrlString(Ddata);
                                        data.Add("sign", StringHelper.MD5(urlstr));

                                        var diclist2 = Utils.AsciiDictionary(data);
                                        var str = Utils.GetUrlString(diclist2);
                                        
                                        var postresult = Utils.HttpPost(ConfigurationData.jzpayurl + "/pay/queryOrder", str);
                                        var resultEntity = JsonHelper.JSONToObject<JZpayQuery>(postresult);
                                        if (resultEntity.successed)
                                        {
                                            var entity = db.RechargeRecordEntities.Where(w => w.OrderNumber.Equals(t.OrderNumber)).FirstOrDefault();
                                            if (entity != null && entity.businessOrderState == 0)
                                            {
                                                entity.CentreOrderNum = resultEntity.returnValue.tradeNo;
                                                if (resultEntity.returnValue.orderState==1)
                                                {
                                                    entity.businessOrderState = 3;
                                                    entity.orderState = 3;
                                                }else if (resultEntity.returnValue.orderState == 2)
                                                {
                                                    entity.businessOrderState = 2;
                                                    entity.orderState = 2;
                                                }
                                                if(resultEntity.returnValue.serviceCharge!=null)
                                                entity.serviceCharge = Convert.ToInt32(resultEntity.returnValue.serviceCharge);

                                                DbSet<RechargeRecordEntity> dbSet = db.Set<RechargeRecordEntity>();
                                                DbEntityEntry<RechargeRecordEntity> entry = db.Entry(entity);
                                                if (entry.State == EntityState.Detached)
                                                {
                                                    dbSet.Attach(entity);
                                                    entry.State = EntityState.Modified;
                                                }
                                                db.SaveChangesAsync();
                                            }
                                        }

                                    }
                                    //else if (t.RechargeType == 10 || t.RechargeType == 11)//老潘支付
                                    //{
                                    //    Dictionary<string, string> data = new Dictionary<string, string>();
                                    //    data.Add("mch_id", ConfigurationData.mch_id);
                                    //    data.Add("mch_secret", ConfigurationData.xmkey);
                                    //    data.Add("timestamp", Utils.GetTimeStamp());
                                    //    data.Add("out_trade_no", t.OrderNumber);
                                    //    var Ddata = Utils.AsciiDictionary(data);
                                    //    var urlstr = Utils.GetUrlString(Ddata);
                                    //    data.Add("sign", StringHelper.MD5(urlstr).ToUpper());
                                    //    var diclist2 = Utils.AsciiDictionary(data);
                                    //    var str = Utils.GetUrlString(diclist2);
                                    //    var resdata = Utils.HttpPost(ConfigurationData.xmpayurl + "/api/pay/query", str);
                                    //    var resultEntity = JsonHelper.JSONToObject<XMPay>(resdata);
                                    //    if (resultEntity.code.Equals("100"))
                                    //    {
                                    //        var entity = db.RechargeRecordEntities.Where(w => w.OrderNumber.Equals(t.OrderNumber)).FirstOrDefault();
                                    //        if (entity != null && entity.orderState == 0)
                                    //        {
                                    //            //entity.CentreOrderNum = resultEntity.returnValue.tradeNo;
                                    //            //entity.businessOrderState = resultEntity.returnValue.orderState;
                                    //            //entity.orderState = resultEntity.returnValue.orderState;
                                    //            //if (resultEntity.returnValue.serviceCharge != null)
                                    //            //entity.serviceCharge = Convert.ToInt32(resultEntity.returnValue.serviceCharge);

                                    //            if(resultEntity.status.Equals("0")) entity.orderState = 0;
                                    //            if (resultEntity.status.Equals("1")) entity.orderState = 2;
                                    //            DbSet<RechargeRecordEntity> dbSet = db.Set<RechargeRecordEntity>();
                                    //            DbEntityEntry<RechargeRecordEntity> entry = db.Entry(entity);
                                    //            if (entry.State == EntityState.Detached)
                                    //            {
                                    //                dbSet.Attach(entity);
                                    //                entry.State = EntityState.Modified;
                                    //            }
                                    //            db.SaveChangesAsync();
                                    //        }
                                    //    }
                                    //}
                                }
                            catch (Exception ex)
                            {
                                    
                            }
                       });
                        }
                    }
            }
        }

    }
    public class OtherJob : IJob
    {
        private readonly static object locker = new object();
        void IJob.Execute()
        {
            lock (locker)
            {
                //GUserAgentService service = new GUserAgentService();
                //service.StatisticsHands();

            }
        }
    }

    public class MyComplexJob : IJob
    {
        void IJob.Execute()
        {
            JackpotService jackpotservice = new JackpotService();
            MvcApplication ml = new MvcApplication();
            //ml.Test();
            //jackpotservice.TimingRun();
        }
    }


}