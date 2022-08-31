using ETModel.Framework.Game.Contract.Action;
using Model.Scut_Script.GameMessage;
using System;
using System.Collections.Generic;
using System.Threading;

namespace ETModel.Script.CsScript.Action
{
    /// <summary>
    /// 流程管理器
    /// </summary>
    public class ProcessManager
    {
        public BaseTable table;
        public int InnerId;
        public int index { get; private set; }
        public int count;
        public DateTime timerStartTime { get; private set; }
        /// <summary>
        /// 顺序流程
        /// </summary>
        public List<IGameProcess> ps = new List<IGameProcess>();
        /// <summary>
        /// 通用流程(牌桌随时都能执行的流程)
        /// </summary>
        public Dictionary<string, IGameProcess> pmap = new Dictionary<string, IGameProcess>();
        Timer _timer;
        public ProcessManager()
        {
            //_timer = new Timer((state) => { OneThreadSynchronizationContext.Instance.Post(TimerFun, state); }, this, -1, -1);
        }
        public void RunTimer()
        {
            table.AddUpdateListenerEvent(1000, TimerUpdate);
        }
        public void ADD(IGameProcess process)
        {
            ps.Add(process);
        }
        public void ADDMap(IGameProcess process)
        {
            pmap[process.GetFunName()[0]] = process;
        }
        public async ETTask<string> Run(int userid, cs_base cs, string json)
        {
            try
            {  
                if (cs != null)
                {
                    if (table != null && table._DicPos2User != null)
                    {  
                        if (pmap.TryGetValue(cs.fn, out IGameProcess process))
                        {
                            return await process.Process(userid, cs, json);
                        }
                        else if (ps[index].GetFunName().Contains(cs.fn))
                        {
                            return await ps[index].Process(userid, cs, json);
                        }
                    }
                   // TraceLogEx.Error("   fetal error table == null || table._DicPos2User == null run fn:" +  cs.fn);
                    return ps[index].GetErrorRsp(cs, -10020, "流程错误,当前流程[" + ps[index].GetProcessName() + "],不处理[" + cs.fn + "]消息");
                }
                return ps[index].GetErrorRsp(new cs_base(), -10021, "消息错误");
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "消息[" + json + "]处理发生异常");
                return ps[index].GetErrorRsp(new cs_base(), -10022, "消息处理发生异常");
            }
        }
        public async ETTask End(int index)
        {
            try
            {
                if (this.index == index)
                {
                    if (table == null || table._DicPos2User == null)
                    {
                        TraceLogEx.Error(" fetal error table == null || table._DicPos2User == null");
                        return; 
                    }
                    await ps[this.index].End();
                    if (!ps[this.index].IsEnd() || table._gameover) return;
                    this.index++;
                    if (this.index >= ps.Count) this.index = 0;
                    await ps[this.index].Start();
                }
                count++;
                if (count == int.MaxValue) count = 0;
                await ETTask.CompletedTask;
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "结束流程发生异常");
            }
        }
        public async void TimerFun(object obj)
        {
            if (obj != null && obj is ProcessManager && table != null && table is ChessCardTable)
                ((ChessCardTable)table).SendEndProcess(index);
            await ETTask.CompletedTask;
        }
        public async void TimerUpdate(long time)
        {
            if (time == 0 && table != null && table is ChessCardTable)
                ((ChessCardTable)table).SendEndProcess(index);
            await ETTask.CompletedTask;
        }
        public void StopTimer(bool IsChangeInnerId = false)
        {
            if (IsChangeInnerId) { if (InnerId < int.MaxValue) InnerId++; else InnerId = 0; }
            if (table != null)
            {
                table.StopTime();
            }
        }
        public void StartTimer(int delay, bool IsChangeInnerId = false)
        {
            if (IsChangeInnerId) { if (InnerId < int.MaxValue) InnerId++; else InnerId = 0; }
            if (table != null)
            {
                table.ChangeUpdateTime(delay);
            }
        }
        public int GetTimerLeftTime
        {
            get {
                TimeSpan _ts = timerStartTime - DateTime.Now;
                if(_ts.TotalSeconds<=0) return 0;
                return (int)_ts.TotalSeconds;
                
            }
        }
        public bool IsCurrentProcess<Process>() where Process : IGameProcess
        { 
            if (ps.Count == 0) return false;
            return ps[index] is Process;
        }

        public Process GetProcess<Process>() where Process : IGameProcess
        {
            var process = GetProcessFromList<Process>();
            if (process != null) return process;
            return GetProcessFromDic<Process>();
        }
        public Process GetProcessFromList<Process>() where Process : IGameProcess
        {
            for (int i = 0; i < ps.Count; i++)
            {
                if (ps[i] is Process) return (Process)ps[i];
            }
            return default;
        }
        public Process GetProcessFromDic<Process>() where Process : IGameProcess
        {
            foreach (var process in pmap.Values)
            {
                if (process is Process) return (Process)process;
            }
            return default;
        }
        public void Reset() 
        {
            for (int i = 0; i < ps.Count; i++) 
                ps[i].Reset(); 
        }
        public InnerCommand NewInnerCommand(int userid, cs_base cs, string content)
        {
            var request = new InnerCommand(InnerId, userid, cs, content);
            //TraceLogEx.Log("生成命令:" + request.GetObjectInfo());
            return request;
        }
        public ProcessEnd NewProcessEnd(int ProcessIndex)
        {
            var request = new ProcessEnd(InnerId, ProcessIndex);
            //TraceLogEx.Log("生成命令:" + request.GetObjectInfo());
            return request;
        }
    }
}
