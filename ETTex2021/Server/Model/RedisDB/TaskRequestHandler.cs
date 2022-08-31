using ETModel.Framework.Common.Serialization;
using ETModel.Script.CsScript.Action;
using ETModel.Script.Model;
using System;
using System.Collections.Generic;
using System.Threading;

namespace ETModel
{
    [MessageHandler(AppType.RedisDB)]
    public class TaskRequestHandler : InnerRequestHandler<RedisDB_TaskRequest, RedisDB_TaskResponse, cs_task> //IMHandler
    {
        protected Dictionary<string, Func<string, string>> commands = new Dictionary<string, Func<string, string>>();
        private Queue<int> queueUserIds = new Queue<int>();
        public Timer timer;
        public TaskRequestHandler()
        {
            commands.Add(typeof(cs_task_add_base).Name, AddTask);
            commands.Add(typeof(cs_signin).Name, Signin);
            commands.Add(typeof(cs_award).Name,  Award);
            commands.Add(typeof(cs_tasklist).Name, GetTaskList);
            commands.Add(typeof(cs_taskcomplate).Name, TaskComplate);
            commands.Add(typeof(cs_game_data_change).Name, UserGameDateChange);
            commands.Add(typeof(userclearinfo).Name, UserClear);
            commands.Add(typeof(tableclearinfo).Name, TableClear);

            timer = new Timer((state) => { OneThreadSynchronizationContext.Instance.Post(AutoTaskComplate, state); }, this, 5000, 5000);
        }

        private void AutoTaskComplate(object state)
        {
            TaskHelper.ComplateTaskSendEmail(queueUserIds); 
        }

        protected async override ETTask Run(cs_task info, string msg, RedisDB_TaskResponse response, Action reply)
        {
            if (t_anythingList.GetInt("task_switch") == 0) { if (info.isreturn) response.Message = JsonUtils.Serialize(new sc_task { fn = info.fn.Replace("cs_", "sc_"), result = -1, message = "任务系统关闭,无法执行请求" }); return; }
            if (info != null && commands.TryGetValue(info.fn, out Func<string, string> fun))
            {
                var rsp = fun(msg);
                if (info.isreturn)
                {
                    response.Message = rsp;
                    reply();
                }
            }
            await ETTask.CompletedTask;
        }

        public string GetTaskList(string msg)
        {
            var cs = JsonUtils.Deserialize<cs_tasklist>(msg);
            return JsonUtils.Serialize(TaskHelper.GetTaskList(cs.userid));
        }
        public string AddTask(string msg)
        {
            var cs = JsonUtils.Deserialize<cs_task_add_base>(msg);
            return JsonUtils.Serialize(TaskHelper.AddTask(cs.task.ToTask()));
        }
        public string Signin(string msg)
        {
            var cs = JsonUtils.Deserialize<cs_signin>(msg);
            SigninHelper.Instance.Signin(cs.userid);
            return null;
        }
        public string TaskComplate(string msg)
        {
            var cs = JsonUtils.Deserialize<cs_taskcomplate>(msg);
            if (cs != null) TaskComplate(cs.userid, cs.taskid);
            return null;
        }
        public string Award(string msg)
        {
            var cs = JsonUtils.Deserialize<cs_award>(msg);
            return TaskHelper.Award(cs.userid, cs.taskid);
        }
        public string UserGameDateChange(string msg)
        {
            var cs = JsonUtils.Deserialize<cs_game_data_change>(msg);
            if (cs != null) UserGameDateChange(cs.userid, cs.gameid, cs.type, cs.num);
            return null;
        }
        string TableClear(string msg)
        {
            var cs = JsonUtils.Deserialize<tableclearinfo>(msg);
            if (cs == null) return null;
            foreach (var item in cs.infos) UserClear(item.userid, cs.gameid, item.score);
            return null;
        }
        string UserClear(string msg)
        {
            var cs = JsonUtils.Deserialize<userclearinfo>(msg);
            if (cs != null) UserClear(cs.userid, cs.gameid, cs.score);
            return null;
        }
        static Dictionary<int, Dictionary<int, int>> currentws = new Dictionary<int, Dictionary<int, int>>();

        public void UpdateWinningStreak(int userid, int gameid, int score)
        {
            if (score > 0)
            {
                if (!currentws.TryGetValue(userid, out Dictionary<int, int> map)) { map = new Dictionary<int, int>(); currentws.Add(userid, map); }
                if (!map.TryGetValue(gameid, out int count)) count = 0;
                map[gameid] = ++count;
                var data = BaseBrigeHelper.GetBase<tusertaskkv>(x => x.userid == userid && x.gameid == gameid && x.type == TaskDataType.WinningStreakCount);
                if (data == null) BaseBrigeHelper.InsertBase(new tusertaskkv { userid = userid, gameid = gameid, type = TaskDataType.WinningStreakCount, num = count });
                else if (count > data.num) { data.num = count; BaseBrigeHelper.AddOrUpdateBase(data); }
            }
            else if (currentws.TryGetValue(userid, out Dictionary<int, int> map)) map.Remove(gameid);
        }
        void UserClear(int userid, int gameid, int score)
        {
            UserGameDateChange(userid, gameid, TaskDataType.JoinCount.ToString(), 1); //当前游戏参与次数加1
            UserGameDateChange(userid, 0, TaskDataType.JoinCount.ToString(), 1);//所有游戏参与次数加1
            if (score != 0)
            {
                UserGameDateChange(userid, gameid, score < 0 ? TaskDataType.LoseCount.ToString() : TaskDataType.WinCount.ToString(), 1); //当前胜利或失败次数统计
                UserGameDateChange(userid, gameid, score < 0 ? TaskDataType.LoseScore.ToString() : TaskDataType.WinScore.ToString(), score); //当前输或赢的金额统计
            }
            UpdateWinningStreak(userid, gameid, score);//连胜次数统计
        }
        public void UserGameDateChange(int userid, int gameid, string type, int num,bool bReplace = false)
        {
            if (Enum.TryParse(type, out TaskDataType datatype))
            {
                var data = BaseBrigeHelper.GetBase<tusertaskkv>(x => x.gameid == gameid && x.userid == userid && x.type == datatype);
                if (data != null)
                {
                    data.num += num;
                    BaseBrigeHelper.AddOrUpdateBase(data);
                }
                else BaseBrigeHelper.InsertBase(new tusertaskkv { gameid = gameid, userid = userid, num = num, type = datatype });
            }
            else
            {
                var data = BaseBrigeHelper.GetBaseT<tusertaskdata>(userid.ToString());
                if (data == null) data = new tusertaskdata { userid = userid };
                var pinfo = typeof(tusertaskdata).GetProperty(type);
                if (pinfo != null)
                {
                    if (!bReplace) CommonFun.NumberIncrease(data, pinfo, num);
                    else CommonFun.NumberEval(data, pinfo, num);
                    BaseBrigeHelper.AddOrUpdateBase(data);
                }
            }
            if (!queueUserIds.Contains(userid))
            {
                queueUserIds.Enqueue(userid);
            }
        }
        void TaskComplate(int userid, int taskid)
        {
            if (taskid == -88888)
            {
                var list = BaseBrigeHelper.GetBaseAllMatch<ttask>(x => x.type != TaskType.Signin && x.IsEnable == true && (x.EndTime > DateTime.Now || x.EndTime.IsNull()));
                foreach (var item in list) TaskHelper.ComplateTask(userid, item);
            }
            else
            {
                var task = BaseBrigeHelper.GetBaseT<ttask>(taskid.ToString());
                TaskHelper.ComplateTask(userid, task);
            }
        }
    }
}
