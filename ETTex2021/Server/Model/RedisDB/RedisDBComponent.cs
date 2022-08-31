using ETModel.Framework.Common.Timing;
using ETModel.Framework.Game.Runtime;
using ETModel.Script.CsScript.Action;
using ETModel.Script.Model;
using System;
using System.Threading.Tasks;

namespace ETModel
{
    [ObjectSystem]
	public class RedisDbComponentSystem : AwakeSystem<RedisDBComponent>
	{
		public override void Awake(RedisDBComponent self)
		{
			self.Awake();
		}
	}

	/// <summary>
	/// 连接Redis MYSQL
	/// </summary>
	public class RedisDBComponent : Component
	{
		public static RedisDBComponent Instance { get; private set; }
         
        Task task;

        public void Awake()
        {
            Instance = this;

            Console.WriteLine("RedisDBComponent Awake!");
            if (task != null)
            {
                task.Dispose();
            }
            task = new Task(() =>
            {
                EnvironmentSetting setting = new EnvironmentSetting();
                GameEnvironment.Start(setting); 
                TimerFun();
                ConfigLoader.StartLoadRedis();
            });

            //启动任务,并安排到当前任务队列线程中执行任务(System.Threading.Tasks.TaskScheduler)
            task.Start();
            Console.WriteLine("exited awake. RedisDBComponent Start..");
            task.Wait();
            Console.WriteLine("exited awake. RedisDBComponent Wait end...");
        }

        private void TimerFun()
        {
            //每天0点执行
            TimeListener.Append(PlanConfig.EveryDayPlan(LobbySendDataServer.DoEveryDayExecute, "EveryDayTask", "00:00"));

            //红包清0
            TimeListener.Append(PlanConfig.EveryDayPlan(LobbySendDataServer.ClearUserRedEnCount, "ClearRenEnTask", "20:01"));
            //一个小时执行一次
            TimeListener.Append(PlanConfig.EveryMinutePlan(LobbySendDataServer.DoEveryHour
                      , "DoEveryHour", DateTime.Now.ToString("yyyy-MM-dd 00:00:00")
                      , DateTime.Now.AddYears(2).ToString()
                      , 60 * 60 * 2));
            //SLOT游戏定时返利
            TimeListener.Append(PlanConfig.EveryDayPlan(LobbySendDataServer.SlotAddCommission2Agent, "Commission2Agent", "04:00"));
        }

        public override void Dispose()
        { 
            if (task != null)
            {
                task.Dispose();
            }
            if (this.IsDisposed)
            {
                return;
            }
            base.Dispose();

            Instance = null;
        }
    }
}