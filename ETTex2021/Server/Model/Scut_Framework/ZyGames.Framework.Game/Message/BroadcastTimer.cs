 
using System;
using System.Threading;
using ETModel.Framework.Common.Timing;

namespace ETModel.Framework.Game.Message
{
    /// <summary>
    /// 广播定时器
    /// </summary>
    public class BroadcastTimer
    {
		///<summary>
		/// </summary>
        public delegate void BroadcastCallback(NoticeMessage message);

        private int _isRunning;
        private readonly BroadcastCallback _callback;
		/// <summary>
		/// Initializes a new instance of the <see cref="ETModel.Framework.Game.Message.BroadcastTimer"/> class.
		/// </summary>
		/// <param name="callback">Callback.</param>
        public BroadcastTimer(BroadcastCallback callback)
        {
            _callback = callback;
        }
		/// <summary>
		/// Add the specified message, beginTime, endTime, isCycle and secondInterval.
		/// </summary>
		/// <param name="message">Message.</param>
		/// <param name="beginTime">Begin time.</param>
		/// <param name="endTime">End time.</param>
		/// <param name="isCycle">If set to <c>true</c> is cycle.</param>
		/// <param name="secondInterval">Second interval.</param>
        public void Add(NoticeMessage message, string beginTime, string endTime, bool isCycle, int secondInterval)
		{
		    PlanConfig planConfig = null;
		    if (isCycle)
		    {
		        planConfig = PlanConfig.EveryMinutePlan(DoBroadcast, "BroadcastTimer", beginTime, endTime, secondInterval);
		    }
		    else
            {
                planConfig = PlanConfig.OncePlan(DoBroadcast, "BroadcastTimer", beginTime);
		    }
		    planConfig.Target = message;
            TimeListener.Append(planConfig);
        }
		/// <summary>
		/// Add the specified message, week, beginTime, endTime, isCycle and secondInterval.
		/// </summary>
		/// <param name="message">Message.</param>
		/// <param name="week">Week.</param>
		/// <param name="beginTime">Begin time.</param>
		/// <param name="endTime">End time. void</param>
        /// <param name="isCycle">If set to <c>true</c> is cycle. void</param>
        /// <param name="secondInterval">Second interval. void</param>
        public void Add(NoticeMessage message, DayOfWeek week, string beginTime, string endTime, bool isCycle, int secondInterval)
        {
            var planConfig = PlanConfig.EveryWeekPlan(DoBroadcast, "BroadcastTimer", week, beginTime);
            planConfig.Target = message;
            TimeListener.Append(planConfig);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="messageId"></param>
        /// <returns></returns>
        public bool Remove(Guid messageId)
        {
            return Remove(m => m.Id == messageId);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="match"></param>
        /// <returns></returns>
        public bool Remove(Predicate<NoticeMessage> match)
        {
            return TimeListener.Remove(m =>
            {
                if (m.Target is NoticeMessage)
                {
                    var temp = (NoticeMessage)m.Target;
                    return match(temp);
                }
                return false;
            });
        }

        private void DoBroadcast(PlanConfig planConfig)
        {
            if (_isRunning == 1) return;
            Interlocked.Exchange(ref _isRunning, 1);
            //TraceLog.ReleaseWrite("{0}>>Broadcast listener start...", DateTime.Now.ToLongTimeString());
            if (planConfig.Target is NoticeMessage)
            {
                NoticeMessage message = planConfig.Target as NoticeMessage;
                if (_callback != null)
                {
                    _callback(message);
                }
            }
            Interlocked.Exchange(ref _isRunning, 0);
        }

    }
}