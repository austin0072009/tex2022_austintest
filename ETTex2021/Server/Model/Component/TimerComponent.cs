using System;
using System.Collections.Generic;
using System.Threading;

namespace ETModel
{
	public struct TimerInfo
	{
		public long Id { get; set; }
		public long Time { get; set; }
		public ETTaskCompletionSource tcs;
		public Action<long> action { get; set; }
		public bool loop { get; set; }
		public bool IsTimer { get; set; }
		public long lIntervalTime { get; set; }
	}
	public struct TimerAction
	{
		public long id;
		/// <summary>
		/// 剩余时间
		/// </summary>
		public long leftTime;
		public Action<long> action;
	}

	[ObjectSystem]
	public class TimerComponentUpdateSystem : UpdateSystem<TimerComponent>
	{
		public override void Update(TimerComponent self)
		{
			self.Update();
		}
	}

	public class TimerComponent : Component
	{
		private readonly Dictionary<long, TimerInfo> timers = new Dictionary<long, TimerInfo>();

		/// <summary>
		/// key: time, value: timer id
		/// </summary>
		private readonly MultiMap<long, long> timeId = new MultiMap<long, long>();

		private readonly Queue<long> timeOutTime = new Queue<long>();

		private readonly Queue<long> timeOutTimerIds = new Queue<long>();

		private readonly Queue<TimerAction> queueActions = new Queue<TimerAction>();
		private Dictionary<long, long> dicActionTime = new Dictionary<long, long>();

		// 记录最小时间，不用每次都去MultiMap取第一个值
		private long minTime;

		public void Update()
		{
			if (this.timeId.Count == 0)
			{
				return;
			}

			long timeNow = TimeHelper.Now();

			if (timeNow < this.minTime)
			{
				return;
			}

			int iCount = queueActions.Count;
			for (int i = 0; i < iCount; i++)
			{
				TimerAction action = queueActions.Dequeue();
				if (action.action != null)
				{
					if (dicActionTime.ContainsKey(action.id))
					{
						if (dicActionTime[action.id] == 0)
						{
							action.leftTime += 100;
							queueActions.Enqueue(action);
							continue;
						}
						if (dicActionTime[action.id] != action.leftTime)
						{
							action.leftTime = dicActionTime[action.id];
						};
						action.action(action.leftTime - timeNow <= 0 ? 0 : action.leftTime - timeNow);
						queueActions.Enqueue(action);
					}

				}
			}

			foreach (KeyValuePair<long, List<long>> kv in this.timeId.GetDictionary())
			{
				long k = kv.Key;
				if (k > timeNow)
				{
					minTime = k;
					break;
				}
				this.timeOutTime.Enqueue(k);
			}

			while (this.timeOutTime.Count > 0)
			{
				long time = this.timeOutTime.Dequeue();
				foreach (long timerId in this.timeId[time])
				{
					this.timeOutTimerIds.Enqueue(timerId);
				}
				this.timeId.Remove(time);
			}

			while (this.timeOutTimerIds.Count > 0)
			{
				long timerId = this.timeOutTimerIds.Dequeue();
				TimerInfo timer;
				if (!this.timers.TryGetValue(timerId, out timer))
				{
					continue;
				}
				if (timer.IsTimer)
				{
					timer.action?.Invoke(timerId);
					if (timer.loop)
					{
						this.timeId.Add(TimeHelper.Now() + timer.lIntervalTime, timer.Id);
					}
					else
					{
						this.timers.Remove(timerId);
					}
				}
				else
				{
					this.timers.Remove(timerId);
					timer.tcs.SetResult();
				}

			}
		}

		private void Remove(long id)
		{
			this.timers.Remove(id);
		}

		public ETTask WaitTillAsync(long tillTime, CancellationToken cancellationToken)
		{
			ETTaskCompletionSource tcs = new ETTaskCompletionSource();
			TimerInfo timer = new TimerInfo { Id = IdGenerater.GenerateId(), Time = tillTime, tcs = tcs, IsTimer = false };
			this.timers[timer.Id] = timer;
			this.timeId.Add(timer.Time, timer.Id);
			if (timer.Time < this.minTime)
			{
				this.minTime = timer.Time;
			}
			cancellationToken.Register(() => { this.Remove(timer.Id); });
			return tcs.Task;
		}

		public ETTask WaitTillAsync(long tillTime)
		{
			ETTaskCompletionSource tcs = new ETTaskCompletionSource();
			TimerInfo timer = new TimerInfo { Id = IdGenerater.GenerateId(), Time = tillTime, tcs = tcs, IsTimer = false };
			this.timers[timer.Id] = timer;
			this.timeId.Add(timer.Time, timer.Id);
			if (timer.Time < this.minTime)
			{
				this.minTime = timer.Time;
			}
			return tcs.Task;
		}

		public ETTask WaitAsync(long time, CancellationToken cancellationToken)
		{
			ETTaskCompletionSource tcs = new ETTaskCompletionSource();
			TimerInfo timer = new TimerInfo { Id = IdGenerater.GenerateId(), Time = TimeHelper.Now() + time, tcs = tcs, IsTimer = false };
			this.timers[timer.Id] = timer;
			this.timeId.Add(timer.Time, timer.Id);
			if (timer.Time < this.minTime)
			{
				this.minTime = timer.Time;
			}
			cancellationToken.Register(() => { this.Remove(timer.Id); });
			return tcs.Task;
		}

		public ETTask WaitAsync(long time)
		{
			ETTaskCompletionSource tcs = new ETTaskCompletionSource();
			TimerInfo timer = new TimerInfo { Id = IdGenerater.GenerateId(), Time = TimeHelper.Now() + time, tcs = tcs, IsTimer = false };
			this.timers[timer.Id] = timer;
			this.timeId.Add(timer.Time, timer.Id);
			if (timer.Time < this.minTime)
			{
				this.minTime = timer.Time;
			}
			return tcs.Task;
		}

		public long AddTimer(int intervalTime, Action<long> action, bool loop = false)
		{
			TimerInfo timer = new TimerInfo
			{
				Id = IdGenerater.GenerateId(),
				Time = TimeHelper.Now() + intervalTime,
				lIntervalTime = intervalTime,
				action = action,
				loop = loop,
				IsTimer = true
			};
			this.timers[timer.Id] = timer;
			this.timeId.Add(timer.Time, timer.Id);
			if (timer.Time < this.minTime)
			{
				this.minTime = timer.Time;
			}
			return timer.Id;
		}

		public void KillTimer(long id)
		{
			if (this.timers.ContainsKey(id))
			{
				Remove(id);
			}
		}
		public void ChangeTimer(long id, long intervalTime)
		{
			if (this.timers.TryGetValue(id, out TimerInfo timer))
			{
				if (this.timeId.ContainsKey(timer.Time)) this.timeId.Remove(timer.Time);
				this.timers.Remove(id);
				timer.Time = TimeHelper.Now() + intervalTime;
				timer.lIntervalTime = intervalTime;
				this.timers.Add(id, timer);
				this.timeId.Add(timer.Time, timer.Id);
				if (timer.Time < this.minTime)
				{
					this.minTime = timer.Time;
				}
			}

		}
		public long GetLeftTime(long timeid)
		{
			if (this.timers.TryGetValue(timeid, out TimerInfo timer))
			{
				return timer.Time - TimeHelper.Now();
			}
			else if (this.dicActionTime.TryGetValue(timeid, out long leftTime))
			{
				return leftTime - TimeHelper.Now() <= 0 ? 0 : leftTime - TimeHelper.Now();
			}
			return 0;
		}
		/// <summary>
		/// 刷新事件绑定
		/// </summary>
		/// <param name="intervalTime"></param>
		/// <param name="action"></param>
		public long AddUpdateListenerEvent(int intervalTime, Action<long> action)
		{
			TimerAction timerAction = new TimerAction()
			{
				id = IdGenerater.GenerateId(),
				leftTime = TimeHelper.Now() + intervalTime,
				action = action
			};
			dicActionTime[timerAction.id] = timerAction.leftTime;
			queueActions.Enqueue(timerAction);
			return timerAction.id;
		}

		public void SetUpdateEventTime(long id, int intervalTime)
		{
			if (dicActionTime.ContainsKey(id))
			{
				dicActionTime[id] = TimeHelper.Now() + intervalTime;
			}
		}
		public void StopTime(long id)
		{
			if (dicActionTime.ContainsKey(id))
			{
				dicActionTime[id] = 0;
			}
		}
	}
}