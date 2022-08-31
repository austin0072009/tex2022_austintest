using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Common.Serialization;
using ETModel.Framework.Data;
using ETModel.Script.Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace ETModel.Script.CsScript.Action
{
    public class RedEnvelopesHelper : BaseHelper
    {
       
        public static bool IsTimeSlot()
        {
            bool time = false;
            var timeone = t_anythingList.GetString("reden_time1");
            var timetwo = t_anythingList.GetString("reden_time2");
            DateTime timestart1 = Convert.ToDateTime(timeone.Split('-')[0]);
            DateTime timeend1 = Convert.ToDateTime(timeone.Split('-')[1]);

            DateTime timestart2 = Convert.ToDateTime(timetwo.Split('-')[0]);
            DateTime timeend2 = Convert.ToDateTime(timetwo.Split('-')[1]);
            if (DateTime.Now > timestart1 && DateTime.Now<= timeend1)
                return true;
            if (DateTime.Now > timestart2 && DateTime.Now <= timeend2)
                return true;
            return time;
        }


        /// <summary>
        /// 新增玩家(打开)红包记录
        /// </summary> 
        public static void AddRedEnvelopesLog(int userId, int money, int taskType)
        {
            tRedEnvelopesLog _taxR = new tRedEnvelopesLog()
            {
                UserId = userId,
                TaskType = taskType,
                CreateDate = DateTime.Now,
                Money = money
            };
            BaseHelper.AddAsync<tRedEnvelopesLog>(_taxR); 
        }

        /// <summary>
        /// 随机获得红包金额
        /// </summary> 
        public static int GetRedEnvelopesMoney(int taskType)
        {
            int result = 0;
            List<tRedEnvelopesConfig> configs = GetRedEnvelopesConfigList(taskType);
            if (configs != null && configs.Count > 0)
            {
                int ra = new Random().Next(0, 10000);
                int bRate = 0;
                result = (int)(configs[0].Money * 100);
                foreach (tRedEnvelopesConfig config in configs)
                {
                    if (ra <= ((config.Rate * 100) + bRate))
                    {
                        return (int)(config.Money * 100);
                    }
                    else
                        bRate += (int)(config.Rate * 100);
                }
            }
            return result;
        }

        public static async Task< string> GetWelfareCount(int userId)
        {
            sc_getWelfareCount sendData = new sc_getWelfareCount { result = 0 };
            var agentinfo = await tuseragent2021Ex.GetAgentFromCachebyUserID(userId,0);

            
            if (agentinfo != null )
            {
                
                sendData.xyCount = 0;
                sendData.zyCount = 0;
                sendData.jlCount = 0;
                int level = 0;
                var online = GameSessionEx.Count;
                if (online < 10) level = 10;
                else if (online > 10 && online <= 20) level = 20;
                else if (online > 20 && online <= 30) level = 30;
                else if (online > 30 && online <= 40) level = 40;
                else level = 45;

                sendData.uCount = online + 5 * level;
                int open = 0;
                var csys = await RankHelper.GetValByKey("isopenJl");
                if (csys==null || csys.Val=="0")  open = 0;
                if (csys != null && csys.Val == "1") open = 1;

                sendData.isopenJl = open;

                sendData.result = 1;
            }
            return JsonUtils.Serialize(sendData);
        }
        /// <summary>
        /// 获取福利任务信息
        /// </summary> 
        public static async Task<string> GetWelfareTask(int userId)
        {
            sc_getWelfareTask sendData = new sc_getWelfareTask { result = 0, taskList = new List<WelfareTaskListSD>() };

            var agentinfo = await tuseragent2021Ex.GetAgentFromCachebyUserID(userId,0);
            tUser tuser =  await tb_UserEx.GetFromCachebyUserID(userId);

            if (agentinfo != null )
            {
                sendData.taskList = new List<WelfareTaskListSD>();
                List<tRedEnvelopesTask> tasks = GetRedEnvelopesTaskList();
                if (tasks != null && tasks.Count > 0)
                {
                    List<tRedEnvelopesReceiveLog> receiveLog = GetRedEnvelopesReceiveLog(userId);
                    foreach (tRedEnvelopesTask task in tasks)
                    {
                        //GetRedEnvelopes(userId, task, agentinfo.todayCardCount, receiveLog);//自动领取红包
                        WelfareTaskListSD newRow = new WelfareTaskListSD();
                        newRow.taskId = task.Id;
                        newRow.taskDes = task.TaskName;
                        newRow.taskType = task.TaskType;
                        newRow.awardTimes = task.RedEnvCount;
                        if (task.TaskType==3)
                        {
                            newRow.goalNum = 1;
                            newRow.fNum = 1;
                        }
                        else
                        {
                            newRow.goalNum = task.TaskCount;
                            newRow.fNum = agentinfo.todayCardCount;
                        }

                        newRow.isGet = receiveLog.Where(t=>t.TaskType== task.TaskType).Sum(t=>t.Count) >= task.RedEnvCount;
                        sendData.taskList.Add(newRow);
                    }
                    sendData.result = 1;
                } 
            }
            return JsonUtils.Serialize(sendData);
        }


        /// <summary>
        /// 自动领取红包
        /// </summary> 
        public static string GetRedEnvelopes(int userId, long taskid)
        {
            sc_getRedEnvCount sendData = new sc_getRedEnvCount() { result = 0 };
            try
            {
                var task = GetRedEnvelopesTask(taskid);
                sendData.result = 1;
                sendData.taskId = taskid;
            }
            catch (Exception)
            {
                sendData.result = 0;
            }
            return JsonUtils.Serialize(sendData);
        }

        /// <summary>
        /// 获取单个红包任务列表
        /// </summary>
        /// <returns></returns>
        public static tRedEnvelopesTask GetRedEnvelopesTask(long taskid)
        {
            var dbProvider = DbConnectionProvider.CreateDbProvider(strFixed.strConnectstring);

            var command = dbProvider.CreateCommandStruct("tRedEnvelopesTask", CommandMode.Inquiry);

            command.Columns = "Id,TaskName,TaskCount,RedEnvCount,TaskType,TaskCount";
            command.Filter.Condition = string.Format("{0}",dbProvider.FormatFilterParam("Id"));
            command.Filter.AddParam("Id", taskid);
            command.OrderBy = "TaskType";
            command.Parser();

            using (var reader = ConfigManger.Provider.ExecuteReader(CommandType.Text, command.Sql, command.Parameters))
            {
                while (reader.Read())
                {
                    tRedEnvelopesTask newRow = new tRedEnvelopesTask();
                    newRow.Id = Convert.ToInt32(reader["Id"]);
                    newRow.TaskName = reader["TaskName"].ToString();
                    newRow.TaskCount = Convert.ToInt32(reader["TaskCount"]);
                    newRow.RedEnvCount = Convert.ToInt32(reader["RedEnvCount"]);
                    newRow.TaskType = Convert.ToInt32(reader["TaskType"]);
                    return newRow;
                }
                reader.Dispose();
            }
            return null;
        }


        /// <summary>
        /// 获取红包任务列表
        /// </summary>
        /// <returns></returns>
        public static List<tRedEnvelopesTask> GetRedEnvelopesTaskList()
        {
            List<tRedEnvelopesTask> list = new List<tRedEnvelopesTask>();
            var command = ConfigManger.Provider.CreateCommandStruct("tRedEnvelopesTask", CommandMode.Inquiry);
            command.Columns = "Id,TaskName,TaskCount,RedEnvCount,TaskType,TaskCount";
            command.OrderBy = "TaskType";
            command.Parser();

            using (var reader = ConfigManger.Provider.ExecuteReader(CommandType.Text, command.Sql, command.Parameters))
            {
                while (reader.Read())
                {
                    tRedEnvelopesTask newRow = new tRedEnvelopesTask();
                    newRow.Id = Convert.ToInt32(reader["Id"]);
                    newRow.TaskName = reader["TaskName"].ToString();
                    newRow.TaskCount = Convert.ToInt32(reader["TaskCount"]);
                    newRow.RedEnvCount = Convert.ToInt32(reader["RedEnvCount"]);
                    newRow.TaskType = Convert.ToInt32(reader["TaskType"]);
                    list.Add(newRow);
                }
                reader.Dispose();
            }
            return list;
        }

        ///// <summary>
        ///// 增加红包数量并记录日志
        ///// </summary> 
        ///// <param name="taskType">任务种类(1:幸运红包，2：转运红包)</param> 
        //public static async void AddRedEnvelopesReceiveLog(int userId, long taskId, int count, int taskType)
        //{

        //    GameUser gameUser = await BaseHelper.GetBase<GameUser>(userId);
        //    if (gameUser != null)
        //    {
        //        int beforeCount = gameUser.ClRedCount;
        //        if (taskType == 1)
        //        {
        //            beforeCount = gameUser.RedCount;
        //            gameUser.RedCount+= count;
        //        }else if (taskType == 2)
        //        {
        //            gameUser.ClRedCount+= count;
        //        }
        //        else
        //            gameUser.JlRedCount+= count;
        //        tRedEnvelopesReceiveLog _taxR = new tRedEnvelopesReceiveLog()
        //        {
        //            UserId = userId,
        //            TaskId = taskId,
        //            CreateDate = DateTime.Now,
        //            Count = count,
        //            TaskType = taskType,
        //            BeforeCount = beforeCount
        //        };
        //        BaseHelper.AddAsync<tRedEnvelopesReceiveLog>(_taxR);
        //    }
        //}

      


        /// <summary>
        /// 获取玩家当日领取红包记录
        /// </summary> 
        public static List<tRedEnvelopesReceiveLog> GetRedEnvelopesReceiveLog(int userId)
        {
            List<tRedEnvelopesReceiveLog> result = new List<tRedEnvelopesReceiveLog>();
            var dbProvider = ETModel.Framework.Data.DbConnectionProvider.CreateDbProvider(strFixed.strConnectstring);

            var command = dbProvider.CreateCommandStruct("tRedEnvelopesReceiveLog", CommandMode.Inquiry);
            command.Columns = "UserId,TaskId,TaskType,Count";
            command.Filter = dbProvider.CreateCommandFilter();
            command.Filter.Condition = string.Format("{0} AND {1}", dbProvider.FormatFilterParam("CreateDate", ">="), dbProvider.FormatFilterParam("UserId"));
            command.Filter.AddParam("CreateDate", DateTime.Now.Date);
            command.Filter.AddParam("UserId", userId);
            command.Parser();

            using (var dr = dbProvider.ExecuteReader(CommandType.Text, command.Sql, command.Parameters))
            {
                while (dr.Read())
                {
                    tRedEnvelopesReceiveLog newRow = new tRedEnvelopesReceiveLog();
                    newRow.UserId = dr["UserId"].ToInt32();
                    newRow.TaskId = dr["TaskId"].ToInt32();
                    newRow.TaskType = dr["TaskType"].ToInt32();
                    newRow.Count = dr["Count"].ToInt32();
                    result.Add(newRow);
                }
            }
            return result;
        }

        /// <summary>
        /// 获取玩家红包打开详情记录
        /// </summary> 
        public static List<WelfarePlayerInfoSD> GetRedEnvelopesLog(int taskType)
        {
            List<WelfarePlayerInfoSD> result = new List<WelfarePlayerInfoSD>();
            var dbProvider = ETModel.Framework.Data.DbConnectionProvider.CreateDbProvider(strFixed.strConnectstring);

            var command = dbProvider.CreateCommandStruct("tRedEnvelopesLog", CommandMode.Inquiry);
            command.Columns = "UserId,TaskType,Money,CreateDate";
            command.Filter = dbProvider.CreateCommandFilter();
            //command.Filter.Condition = dbProvider.FormatFilterParam("TaskType");
            //command.Filter.AddParam("TaskType", taskType);
            command.OrderBy = "CreateDate DESC";
            command.Parser();

            var tbuserCache = new PersonalCacheStruct<tUser>();
            using (var dr = dbProvider.ExecuteReader(CommandType.Text, command.Sql, command.Parameters))
            {
                while (dr.Read())
                {
                    WelfarePlayerInfoSD newRow = new WelfarePlayerInfoSD();
                    newRow.UserID = dr["UserId"].ToInt32();
                    tUser _tempuser = tbuserCache.FindKey(newRow.UserID.ToString());
                    if (_tempuser != null)
                        newRow.name = _tempuser.wechatName;
                    newRow.gold = dr["Money"].ToInt32();
                    newRow.receiveTime = dr["CreateDate"].ToDateTime().ToString("yyyy-MM-dd HH:mm:ss");
                    result.Add(newRow);
                }
            }
            return result;
        }

        /// <summary>
        /// 获取红包配置列表
        /// </summary>
        /// <returns></returns>
        public static List<tRedEnvelopesConfig> GetRedEnvelopesConfigList(int taskType)
        {
            List<tRedEnvelopesConfig> list = new List<tRedEnvelopesConfig>();
            var dbProvider = ETModel.Framework.Data.DbConnectionProvider.CreateDbProvider(strFixed.strConnectstring);

            var command = ConfigManger.Provider.CreateCommandStruct("tRedEnvelopesConfig", CommandMode.Inquiry);
            command.Columns = "Id,Money,Rate,TaskType";
            command.Filter.Condition = dbProvider.FormatFilterParam("TaskType");
            command.Filter.AddParam("TaskType", taskType);
            command.OrderBy = "Money";
            command.Parser();

            using (var reader = ConfigManger.Provider.ExecuteReader(CommandType.Text, command.Sql, command.Parameters))
            {
                while (reader.Read())
                {
                    tRedEnvelopesConfig newRow = new tRedEnvelopesConfig();
                    newRow.Id = Convert.ToInt32(reader["Id"]);
                    newRow.Money = reader["Money"].ToDecimal();
                    newRow.Rate = reader["Rate"].ToDecimal();
                    newRow.TaskType = Convert.ToInt32(reader["TaskType"]);

                    list.Add(newRow);
                }
                reader.Dispose();
            }
            return list;
        }

        public static void ClearAllUserRedCount()
        {
            var idlist = tb_UserEx.GetGameUserRed();
            
        }
    }
}
