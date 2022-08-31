using ETModel.Framework.Common.Serialization;
using ETModel.Framework.Game.Contract.Action;
using ETModel.Framework.Model;
using ETModel.Script.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace ETModel.Script.CsScript.Action
{
    public class cs_task : cs_base, IBaseInfo { public bool isreturn { get; set; } }
    public class sc_task : sc_base { }
    /// <summary> 变更游戏数据 </summary>
    public class cs_game_data_change : cs_task
    {
        public int userid;
        /// <summary> 游戏编号(0.所有游戏统计,-1,小游戏统计) </summary>
        public int gameid;
        public string type;
        public int num;
        /// <summary>
        /// 0:累加，1:赋值替换
        /// </summary>
        public int replace;
    }
    /// <summary> 请求领取奖励 </summary>
    public class cs_award : cs_task
    {
        public int userid;
        public int taskid;
    }
    /// <summary> 领取奖励结果 </summary>
    public class sc_award : sc_task
    {
        public List<PrizeInfoMessage> prizes;

        public int AGold;
    }
    /// <summary> 任务信息 </summary>
    public class taskinfo
    {
        public taskinfo() { prizes = new List<PrizeInfoMessage>(); }
        /// <summary> 任务编号 </summary>
        public int taskid;
        /// <summary> 任务类型(1.新手任务，2.超值任务) </summary>
        public int type;
        /// <summary> 任务图片 </summary>
        public string pic;
        /// <summary> 任务名称 </summary>
        public string name;
        /// <summary> 任务描述 </summary>
        public string remark;
        /// <summary> 任务是否完成 </summary>
        public bool iscomplate;
        /// <summary> 当前任务完成进度 </summary>
        public int current;
        /// <summary> 完成任务需要的进度 </summary>
        public int total;
        /// <summary> 是否领奖 </summary>
        public bool isaward;
        /// <summary> 奖励 </summary>
        public List<PrizeInfoMessage> prizes;

        /// <summary>
        /// 任务等级   比如签到对应1-7
        /// </summary>
        public int level;

        public int AGold;
    }
    /// <summary> 获取任务列表 </summary>
    public class cs_tasklist : cs_task { public int userid; }
    /// <summary> 任务列表 </summary>
    public class sc_tasklist : sc_task { public List<taskinfo> tasklist; }
    public class cs_task_add_base : cs_task { public TempTask task; }
    public class sc_task_add_base : sc_task
    { 
        public sc_task_add ToMsg()
        {
            return new sc_task_add(result, message, GMService.secret);
        }
    }
    /// <summary> 更新任务完成状态 </summary>
    public class cs_taskcomplate : cs_task
    {
        public int userid;
        public int taskid;
    }
    public class cs_signin : cs_task { public int userid; }
    /// <summary> 玩家分数变更 </summary>
    public class UserScoreInfo
    {
        public int userid;
        public int score;
    }
    /// <summary> 回合结束后房间内所有玩家的金币变更情况 </summary>
    public class tableclearinfo : cs_task
    {
        public int gameid;
        public List<UserScoreInfo> infos;
    }

    /// <summary> 回合结束后的金币变更情况 </summary>
    public class userclearinfo : cs_task
    {
        public int userid;
        public int gameid;
        public int score;
    }
    public class SigninHelper
    {
        static DateTime lastscan = DateTime.Now;
        static List<ttask> signintasks;
        static Dictionary<int, ttask> map = new Dictionary<int, ttask>();
        static List<int> ids = new List<int>();
        static SigninHelper instance;
        public static SigninHelper Instance { get { if (instance == null) { instance = new SigninHelper(); } return instance; } }
        public SigninHelper()
        {
            map.Clear();
            ids.Clear();
            signintasks = BaseBrigeHelper.GetBaseAllMatch<ttask>(x => x.type == TaskType.Signin && x.IsEnable == true && (x.EndTime.IsNull() || x.EndTime > DateTime.Now));
            foreach (var task in signintasks) map.Add(task.id, task);
            ids.AddRange(map.Keys);
            signintasks.Sort((x, y) => { if (x.level < y.level) return -1; else if (x.level == y.level) return 0; return 1; });
        }
        public async void UpdateSigninTimer()
        {
            var temp = lastscan;
            lastscan = DateTime.Now;
            if (temp.Day == lastscan.Day) return;
            var players = await GlobalDataService.GetOnlinePlayers_R(0);
            if (players != null) for (int i = 0; i < players.Length; i++) Signin(players[i]);
        }

        public void Signin(int userid)
        {
            if (signintasks != null && signintasks.Count>0)
            {
                var taskinfo = BaseBrigeHelper.GetBaseT<tusertaskdata>(userid.ToString());
                var infos = BaseBrigeHelper.GetBaseAllMatch<tTaskCompletionInfo>(x => x.userid == userid && x.taskid.IsIn(ids.ToArray()));
                if (infos != null) infos.Sort((x, y) => { if (x.CreateDate < y.CreateDate) return -1; else if (x.CreateDate == y.CreateDate) return 0; return 1; });
                var cinfos = infos == null ? null : infos.FindAll(x => x.IsEnable);
                DateTime lastday = cinfos == null || cinfos.Count == 0 ? new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc) : cinfos[cinfos.Count - 1].CreateDate.ToGetBeginDateTime();// taskinfo.LastSigninTime.ToGetBeginDateTime();
                var sta = lastday.AddDays(1);
                var end = lastday.AddDays(2);
                var current = DateTime.Now;
                if (current.ToGetBeginDateTime() == lastday) return;
                ttask sign = null;
                bool bContinue = t_anythingList.GetInt("signin_continue") == 0;
                if (cinfos == null || cinfos.Count == 0 || cinfos.Count == signintasks.Count || (current >= end&&bContinue))
                {
                    if (cinfos != null) foreach (var info in cinfos) { info.IsEnable = false; BaseBrigeHelper.AddOrUpdateBase(info); }
                    sign = signintasks[0];
                }
                else if (cinfos != null && cinfos.Count > 0 && (current >= sta && current < end || !bContinue))
                {
                    var lastsign = map[cinfos[cinfos.Count - 1].taskid];
                    int lv = lastsign.level + 1;
                    if (lv > 7) lv = 1;
                    for (int i = 0; i < signintasks.Count; i++) if (signintasks[i].level == lv) { sign = signintasks[i]; break; }
                }
                if (sign != null)
                {
                    var info = infos.Find(x => x.userid == userid && x.taskid == sign.id);
                    if (info == null) BaseBrigeHelper.InsertBase(new tTaskCompletionInfo { userid = userid, taskid = sign.id, CreateDate = current, IsEnable = true });
                    else { info.IsEnable = true; info.CreateDate = current;info.IsReceive = false; BaseBrigeHelper.AddOrUpdateBase(info); }
                }
            }
        }
    }
    /// <summary> 成就任务 </summary>
    public class TaskHelper
    {
        //public static Dictionary<int, tPropConfig> props = PropsHelper.Ins.props
        public static void ComplateTask(int userid, ttask task)
        {
            if (task == null || !task.IsEnable) return;
            var cinfo = BaseBrigeHelper.GetBase<tTaskCompletionInfo>(x => x.userid == userid && x.taskid == task.id&&(x.IsEnable ||  x.CreateDate.ToGetBeginDateTime()== DateTime.Now.ToGetBeginDateTime()));
            if (cinfo != null) return; //任务已完成
            
            var taskdata = BaseBrigeHelper.GetBase<tusertaskdata>(x => x.userid == userid);
            //if (taskdata == null) { taskdata = new tusertaskdata { userid = userid }; BaseBrigeHelper.AddOrUpdateBase(taskdata); }
            if (IsComplate(userid, taskdata, task))
            {
                if (task.issueAwardType == 0)
                {
                    BaseBrigeHelper.InsertBase(new tTaskCompletionInfo { taskid = task.id, userid = userid, IsEnable = true, CreateDate = DateTime.Now,IsReceive = false });
                }
                else if (task.issueAwardType == 1)
                {
                    BaseBrigeHelper.InsertBase(new tTaskCompletionInfo { taskid = task.id, userid = userid,IsReceive=true, IsEnable = !(task.type==TaskType.Daily), CreateDate = DateTime.Now });
                    List<Attach> attach = new List<Attach>();
                    foreach(var v in task.award)
                    {
                        attach.Add(new Attach() {ItemID = v.type,Num = v.num,url= PropsManager.Ins.props[v.type].ImgUrl });
                    }
                    MailHelper.SendEmail(ToolsEx.GenerateId(), 0, "任务奖励", userid, 1, 1, task.name, task.remark,attach);
                }
                
            }
        }
        public static void ComplateTaskSendEmail(Queue<int> userIds)
        {
            var list = BaseBrigeHelper.GetBaseAllMatch<ttask>(x => x.type != TaskType.Signin && x.IsEnable == true && x.issueAwardType == 1 && (x.EndTime > DateTime.Now || x.EndTime.IsNull()));
            while (userIds.Count>0)
            {
                int userid = userIds.Dequeue();
                foreach (var task in list)
                {
                    TaskHelper.ComplateTask(userid, task);
                }
            }
            
        }
        public static bool IsComplate(int userid, tusertaskdata taskdata, ttask task)
        {
            if (task == null || task.condition == null || task.condition.Count == 0) return false; //任务不存在或玩家任务统计不存在
            try
            {
                PropertyInfo pinfo = null;
                foreach (var condition in task.condition)
                {
                    if (Enum.TryParse(condition.ColumnName, out TaskDataType datatype)) 
                    { 
                        var data = BaseBrigeHelper.GetBase<tusertaskkv>(x => x.userid == userid && x.gameid == condition.GameId && x.type == datatype); 
                        if (data == null || data.num < condition.Number)
                        {
                            return false;
                        }
                        else
                        {
                            data.num = 0;
                            BaseBrigeHelper.AddOrUpdateBase(data);
                        }
                            
                    }
                    else if (taskdata == null) return false;
                    else if ((pinfo = taskdata.GetType().GetProperty(condition.ColumnName)) != null && pinfo.TryToInt32(taskdata, out int num) && num < condition.Number) return false;
                }
                return true;
            }
            catch (Exception ex) { return false; }
        }
        private static int _Agold = 0;
        public static string Award(int userid, int taskid)
        {
            _Agold = 0;
            sc_award senddata = new sc_award();
            var cinfo = BaseBrigeHelper.GetBase<tTaskCompletionInfo>(x => x.userid == userid && x.taskid == taskid);
            var task = BaseBrigeHelper.GetBaseT<ttask>(taskid.ToString());
            if (task == null || !task.IsEnable) { senddata.result = -1001; senddata.message = "任务不存在"; return JsonUtils.Serialize(senddata); }
            var user = BaseBrigeHelper.GetBaseT<tUser>(userid.ToString());
            //var userinfo = BaseBrigeHelper.GetBaseT<tuserInfoEx>(userid.ToString());
            //if (userinfo == null) { userinfo = new tuserInfoEx { UserID = userid }; BaseBrigeHelper.AddOrUpdateBase(userinfo); }
            if (user == null || cinfo == null || task == null || !cinfo.IsEnable || cinfo.IsReceive) { senddata.result = -1002; senddata.message = "任务未完成不能领奖"; return JsonUtils.Serialize(senddata); }
            int Agold = 0;
            foreach (var award in task.award)
            {
                Award(user, award, taskid);
                Agold += _Agold;
            }
            //BaseBrigeHelper.AddOrUpdateBase(userinfo);
            BaseBrigeHelper.AddOrUpdateBase(user);
            
            cinfo.IsReceive = true;
            cinfo.AGold = Agold;
            BaseBrigeHelper.AddOrUpdateBase(cinfo);
            senddata.prizes = CommonFun.GetPrizes(task.award, PropsManager.Ins.props);
            senddata.AGold = Agold;
            senddata.result = 1;
            senddata.message = "领取奖励成功";
            return JsonUtils.Serialize(senddata);
        }
        public static async void Award(tUser user, PrizeInfo award, int taskid)
        {
            if (!PropsManager.Ins.props.TryGetValue(award.type,out tPropConfig config))
            {
                return;
            }
            tPropConfig prop = PropsManager.Ins.props[award.type];
            if (prop.UseType == 2)
            {
                if (prop.PropType == 0)//金币
                {
                    tUser reuser = await BaseHelper.GetBase<tUser>(user.UserID);
                    if (reuser != null)
                    {
                        long before = reuser.GetGoldAndWinGold;
                        int lqGold = await GetUserSigninAward(reuser.UserID, taskid) * 100;  //award.num * prop.Gold;
                        reuser.Gold += lqGold;
                        long after = reuser.GetGoldAndWinGold;

                        await BaseHelper.AddOrUpdate(new tgoldchangelog { Gold = lqGold, AfterGold = after, BeforeGold = before, ChangeType = 1006, CreateTime = DateTime.Now, UserId = user.UserID, Remark = "完成任务[" + taskid + "]获得奖励" });
                        _Agold = lqGold;

                        tb_UserEx.UpdateData(reuser);
                    }
                }
                else if (prop.PropType == 3)//钻石
                {
                    int before = (int)user.diamond;
                    user.diamond += award.num * prop.Gold;
                    long after = user.GetGoldAndWinGold;
                    tDiamondChangeLog dlog = new tDiamondChangeLog();
                    dlog.BeforeGold = before;
                    dlog.AfterGold = after;
                    dlog.ChangeType = 22;
                    dlog.UserId = 0;
                    dlog.Gold = award.num * prop.Gold;
                    dlog.Remark = "完成任务[" + taskid + "]获得奖励";
                    await BaseHelper.AddOrUpdate(dlog);
                }
                else if (prop.PropType == 4)//玩家经验
                {

                }
                else if (prop.PropType == 5)//VIP经验
                {
                    VIPHelper.SetUserVipInfo(user.UserID, award.num * prop.Gold, 0);
                }
            }
            else { var status = await BackPackHelper.AddProp(user.UserID, award.type, award.num); BackPackHelper.WritePropLog(user.UserID, award.type, award.num, status ? 1 : 0, "完成任务[" + taskid + "]获得奖励"); }
        }
        public static sc_tasklist GetTaskList(int userid)
        {
            sc_tasklist senddata = new sc_tasklist();
            var tasks = BaseBrigeHelper.GetBaseAllMatch<ttask>(x => x.id > 0 && x.IsEnable == true);
            var cinfos = BaseBrigeHelper.GetBaseAllMatch<tTaskCompletionInfo>(x => x.userid == userid);
            var infomap = new Dictionary<int, tTaskCompletionInfo>();
            foreach (var info in cinfos) infomap[info.taskid] = info;
            var taskdata = BaseBrigeHelper.GetBaseT<tusertaskdata>(userid.ToString());
            //if (taskdata == null) { taskdata = new tusertaskdata { userid = userid }; BaseBrigeHelper.AddOrUpdateBase(taskdata); }
            List<taskinfo> infos = new List<taskinfo>();
            var currTime = DateTime.Now.ToGetBeginDateTime();
            var currSiginInfo = (from c in cinfos
                         join t in tasks
                         on c.taskid equals t.id where c.CreateDate.ToGetBeginDateTime()==currTime&&t.type==TaskType.Signin
                         select 
                         new { c.CreateDate, t.level }
                         ).ToList();

            
            bool bContinue = t_anythingList.GetInt("signin_continue") == 0;
            foreach (var task in tasks)
            {
                taskinfo infodata = new taskinfo { taskid = task.id, name = task.name, remark = task.remark, type = (int)task.showtype, pic = task.pic,level = task.level };
                
                infodata.prizes.AddRange(CommonFun.GetPrizes(task.award, PropsManager.Ins.props));
                if (task.type == TaskType.Signin&& infomap.TryGetValue(task.id, out tTaskCompletionInfo signinfo) && signinfo.IsEnable&& !bContinue)
                {
                    infodata.AGold = signinfo.AGold;
                    if (signinfo.CreateDate < currSiginInfo[0].CreateDate&&task.level< currSiginInfo[0].level)
                    {
                        if (signinfo.IsReceive)
                        {
                            infodata.iscomplate = true;
                            infodata.isaward = true;
                        }
                        else
                        {
                            infodata.iscomplate = false;
                            infodata.total = Sum(task.condition);
                            if (taskdata == null) infodata.current = 0;
                            else infodata.current = Sum(taskdata, task.condition);
                        }
                    }else if (task.level>currSiginInfo[0].level)
                    {
                        infodata.iscomplate = false;
                        infodata.total = Sum(task.condition);
                        if (taskdata == null) infodata.current = 0;
                        else infodata.current = Sum(taskdata, task.condition);
                    }
                    else
                    {
                        infodata.iscomplate = true;
                        if (signinfo.IsReceive) infodata.isaward = true;
                        infodata.total = Sum(task.condition);
                        infodata.current = infodata.total;
                    }

                }
                else  if (infomap.TryGetValue(task.id, out tTaskCompletionInfo info) && info.IsEnable)
                {
                    infodata.AGold = info.AGold;
                    infodata.iscomplate = true;
                    if (info.IsReceive) infodata.isaward = true;
                    infodata.total = Sum(task.condition);
                    infodata.current = infodata.total;
                }
                else if (task.type != TaskType.Signin && info == null && IsComplate(userid, taskdata, task))
                {
                    info = new tTaskCompletionInfo { taskid = task.id, userid = userid, IsEnable = true, CreateDate = DateTime.Now,IsReceive = false };
                    BaseBrigeHelper.InsertBase(info);
                    infodata.iscomplate = true;
                    if (info.IsReceive) infodata.isaward = true;
                    infodata.total = Sum(task.condition);
                    infodata.current = infodata.total;
                }
                else
                {
                    infodata.total = Sum(task.condition);
                    if (taskdata == null) infodata.current = 0;
                    else infodata.current = Sum(taskdata, task.condition);
                }
                infos.Add(infodata);
            }
            senddata.result = 1;
            senddata.tasklist = infos;
            return senddata;
        }


        public static async ETTask<int> GetUserSigninAward(int userid,int taskid)
        {
            ttask tasks = BaseBrigeHelper.GetBase<ttask>(x => x.id == taskid && x.IsEnable == true && x.type == TaskType.Signin);
            var userex = await tb_userinfoEx.GetFromCachebyUserID(userid);
            tUser user = await tb_UserEx.GetFromCachebyUserID(userid);
            if (tasks!=null && userex!=null && user!=null)
            {
                if (userex.SigninData == null) userex.SigninData = new SigninInfo();
                var award = tasks.award.FirstOrDefault();
                if (tasks.level <= 6)
                {
                    if (userex.SigninData.TotalRecharge == 0) return award.minnum;
                    else  return  ToolsEx.GetRandomSys(award.minnum, award.num);
                }
                else
                {
                    long lose = userex.SigninData.Cashout + user.GetGoldAndWinGold - userex.SigninData.TotalRecharge;
                    long tgold = userex.SigninData.Cashout + user.GetGoldAndWinGold;//提现+余额

                    if (userex.SigninData.TotalRecharge == 0) return award.minnum;
                    else if (userex.SigninData.TotalRecharge < userex.SigninData.Cashout+ user.GetGoldAndWinGold) return ToolsEx.GetRandomSys(5, 50);
                    else if (lose < 0 && userex.SigninData.TotalRecharge >= tgold && userex.SigninData.TotalRecharge <= tgold * 5 && -lose < 500) return ToolsEx.GetRandomSys(5, 100);
                    else if (lose < 0 && userex.SigninData.TotalRecharge >= tgold && userex.SigninData.TotalRecharge <= tgold * 5 && -lose > 500) return ToolsEx.GetRandomSys(100, 150);
                    else return ToolsEx.GetRandomSys(150, 200);
                }
            }
            return 1;
        }


        public static int Sum(ICollection<TaskCondition> columns)
        {
            int num = 0;
            if (columns != null) foreach (var item in columns) num += item.Number;
            return num;
        }
        public static int Sum(tusertaskdata taskdata, ICollection<TaskCondition> conditions)
        {
            int num = 0;
            if (conditions == null) return num;
            Type type = taskdata.GetType();
            foreach (var condition in conditions)
            {
                if (Enum.TryParse(condition.ColumnName, out TaskDataType datatype))
                { var gamedata = BaseBrigeHelper.GetBase<tusertaskkv>(x => x.userid == taskdata.userid && x.gameid == condition.GameId && x.type == datatype); if (gamedata != null) num += gamedata.num; }
                else if (type.GetProperty(condition.ColumnName).TryToInt32(taskdata, out int val)) num += val;
            }
            return num;
        }
        public static bool CheckCondition<T>(ICollection<TaskCondition> columns) where T : BaseEntity
        {
            Type type = typeof(T);
            foreach (var column in columns) if ((type.GetProperty(column.ColumnName) == null && !Enum.TryParse(column.ColumnName, out TaskDataType datatype)) || column.Number < 0) return false;
            return true;
        }

        public static bool CheckAward<T>(ICollection<PrizeInfo> infos)
        {
            Type type = typeof(T);
            foreach (var column in infos) if (BaseBrigeHelper.GetShare<tPropConfig>(x => x.PropID == column.type) == null) return false;
            return true;
        }

        public static sc_task_add_base AddTask(ttask task)
        {
            if (task.type == TaskType.Signin && task.level == 0) return new sc_task_add_base { result = -4, message = "签到任务等级不能为0" };
            if (task.condition != null && !CheckCondition<tusertaskdata>(task.condition)) return new sc_task_add_base { result = -1, message = "任务条件错误" };
            if (!CheckAward<tUser>(task.award)) return new sc_task_add_base { result = -2, message = "任务奖励错误" };
            if (task.id <= 0 && task.type == TaskType.Signin && BaseBrigeHelper.GetBase<ttask>(x => x.type == task.type && x.IsEnable == true && x.level == task.level && x.InternalID == task.InternalID) != null) return new sc_task_add_base { result = -3, message = "签到任务重复" };
            if (task.id > 0) BaseBrigeHelper.AddOrUpdateBase(task); else BaseBrigeHelper.InsertBase(task);
            return new sc_task_add_base { result = 1, message = task.id > 0 ? "修改任务成功" : "添加任务成功" };
        }
    }
}
