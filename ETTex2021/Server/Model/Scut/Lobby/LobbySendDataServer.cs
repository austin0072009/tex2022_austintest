using ETModel.Framework.Common.Timing;
using System;
using System.Collections.Generic;

namespace ETModel.Script.CsScript.Action
{
    public class LobbySendDataServer : BaseSendDataServer
    {
        private static LobbySendDataServer _ins;
         


        public static LobbySendDataServer instance
        {
            get
            {
                if (_ins == null) _ins = new LobbySendDataServer();
                return _ins;
            }
        }

        /// <summary>
        /// 定时清理内存
        /// </summary>
        public static void GCTimer()
        { 
        }
        //定时器触发的处理事件
        private static void ClearEvent(object state)
        {
            //清理内存
            GC.Collect();
            GC.WaitForPendingFinalizers();
        }

        public override void AutoSendDataTry()
        {
            if (_waittoSendData.Count <= 0)
            {
                return;
            }
            List<UserIDMSG> imlist;
            if (!_waittoSendData.TryDequeue(out imlist)) return;
            try
            {
                AutoSendData(imlist);
            }
            catch (Exception ex)
            {
                Log.Error(ex);
            }
        }
        public override void SendDataDelay(List<UserIDMSG> imList)
        {
            _waittoSendData.Enqueue(imList);
        }
        public override void StartServer(int gameid)
        {  
            base.StartServer(gameid); 
           
            //每天0点执行
            TimeListener.Append(PlanConfig.EveryDayPlan(DoEveryDayExecute, "EveryDayTask", "00:00"));
            
            //红包清0
            TimeListener.Append(PlanConfig.EveryDayPlan(ClearUserRedEnCount, "ClearRenEnTask", "20:01"));
             

            TimeListener.Append(PlanConfig.EveryMinutePlan(DoEveryHour
                      , "DoEveryHour", DateTime.Now.ToString("yyyy-MM-dd 00:00:00")
                      , DateTime.Now.AddYears(2).ToString()
                      , 60 * 60 * 2));

            TimeListener.Append(PlanConfig.EveryMinutePlan(TestFunc
                      , "DoEveryHour", DateTime.Now.ToString("yyyy-MM-dd 00:00:00")
                      , DateTime.Now.AddYears(2).ToString()
                      , 5));
        }

        public static void TestFunc(PlanConfig planConfig)
        {
            Console.WriteLine("测试代码");
        }

        /// <summary>
        /// SLOT游戏定时返利
        /// </summary>
        /// <param name="planconfig"></param>
        public static void SlotAddCommission2Agent(PlanConfig planconfig)
        {
            //SLOT.AddCommission2Agent();
        }

        public static void ClearUserRedEnCount(PlanConfig planconfig)
        {
            RedEnvelopesHelper.ClearAllUserRedCount();
        }


        public static void DoEveryDayExecute(PlanConfig planconfig)
        {
            //do something
            RankHelper.SetRankListEveryDay();
            tuseragent2021Ex.ClearTodayIncome();
        }



        public static void DoEveryHour(PlanConfig planconfig)
        {
            BaseHelper.ReverseData();
        }
          
    }
}
