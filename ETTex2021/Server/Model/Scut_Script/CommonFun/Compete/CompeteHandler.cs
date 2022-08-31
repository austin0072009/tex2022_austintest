using ETModel.Framework.Common.Serialization;
using ETModel.Script.CsScript.Action;
using System;
using System.Collections.Generic;

namespace ETModel
{
    [MessageHandler(AppType.Map)]
    public class CompeteHandler : InnerRequestHandler<CompeteRequest, CompeteResponse, cs_compete> //IMHandler
    {
        protected Dictionary<string, Func<string, ETTask<string>>> commands = new Dictionary<string, Func<string, ETTask<string>>>();
        public CompeteHandler()
        {
            commands.Add(typeof(cs_signup).Name, Signup);
            commands.Add(typeof(cs_quit).Name, Quit);
            commands.Add(typeof(cs_compete_list).Name, GetCompeteList);
            commands.Add(typeof(cs_round_over).Name, RoundOver);
            commands.Add(typeof(cs_compete_table_over).Name, TableOver);
            commands.Add(typeof(cs_compete_over).Name, CompeteOver);
            commands.Add(typeof(cs_reload).Name, CompeteReload);
            commands.Add(typeof(cs_compete_rank_info).Name, CompeteRanking);
            commands.Add(typeof(cs_compete_table_info).Name, CompeteTableInfo);
            commands.Add(typeof(cs_compete_record).Name, GetCompeteRecord);
            commands.Add(typeof(cs_compete_record_detail).Name, GetCompeteDetail);
        }
        //CompeteManager manager;
        //public CompeteManager Manager { get { if (manager == null) { manager = new CompeteManager(); } return manager; } }
        protected override async ETTask Run(cs_compete info, string msg, CompeteResponse response, Action reply)
        {
            if (t_anythingList.GetInt("compete_switch") == 0) { if (info.isreturn) response.Message = JsonUtils.Serialize(new sc_compete { fn = info.fn.Replace("cs_", "sc_"), result = -1, message = "比赛系统关闭,无法执行请求" }); return; }
            //init();
            Console.WriteLine("比赛请求:" + msg);
            //var info = JsonUtils.Deserialize<GlobalInfo>(request.Message);
            if (info != null && commands.TryGetValue(info.fn, out Func<string, ETTask<string>> fun))
            {
                var rsp = await fun(msg);
                if (info.isreturn)
                {
                    response.Message = rsp;
                    Console.WriteLine("返回比赛消息:" + JsonUtils.Serialize(response));
                    reply();
                }
            }
            await ETTask.CompletedTask;
        }

        //public async ETVoid Handle(Session session, object message)
        //{
        //    try
        //    {

        //        CompeteRequest request = message as CompeteRequest;
        //        if (request == null)
        //        {
        //            Log.Error($"消息类型转换错误: {message.GetType().Name} to {typeof(GlobalInfoRequest).Name}");
        //        }

        //        int rpcId = request.RpcId;
        //        long instanceId = session.InstanceId;
        //        var info = JsonUtils.Deserialize<cs_compete>(request.Message);
        //        if (info.isreturn)
        //        {
        //            CompeteResponse response = Activator.CreateInstance<CompeteResponse>();

        //            void Reply()
        //            {
        //                // 等回调回来,session可以已经断开了,所以需要判断session InstanceId是否一样
        //                if (session.InstanceId != instanceId)
        //                {
        //                    return;
        //                }

        //                response.RpcId = rpcId;
        //                session.Reply(response);
        //            }

        //            try
        //            {
        //                await this.Run(info, request.Message, response, Reply);
        //            }
        //            catch (Exception e)
        //            {
        //                Log.Error(e);
        //                response.Error = ErrorCode.ERR_RpcFail;
        //                response.Message = e.ToString();
        //                Reply();
        //            }
        //        }
        //        else
        //        {
        //            try { await this.Run(info, request.Message, null, null); }
        //            catch (Exception e)
        //            {
        //                Console.WriteLine(e);
        //                Log.Error(e);
        //            }
        //        }
        //    }
        //    catch (Exception e)
        //    {
        //        Log.Error($"解释消息失败: {message.GetType().FullName}\n{e}");
        //    }
        //}

        public async ETTask<string> Signup(string json)
        {
            return await CompeteManager.Ins.SiginCompete(json);
        }
        public async ETTask<string> Quit(string json)
        {
            return await CompeteManager.Ins.QuitCompete(json);
        }
        //public Type GetMessageType()
        //{
        //    return typeof(CompeteRequest);
        //}
        public async ETTask<string> GetCompeteList(string json)
        {
            return CompeteManager.Ins.GetCompeteList(json);
        }
        public async ETTask<string> RoundOver(string json)
        {
            CompeteManager.Ins.RoundOver(json);
            return null;
        }
        public async ETTask<string> TableOver(string json)
        {
            CompeteManager.Ins.TableOver(json);
            return null;
        }
        public async ETTask<string> CompeteOver(string json)
        {
            CompeteManager.Ins.CompeteOver(json);
            return null;
        }
        public async ETTask<string> CompeteReload(string json)
        {
            CompeteManager.Ins.LoadCompete(CompeteManager.Ins);
            return null;
        }
        public async ETTask<string> CompeteRanking(string json)
        {
            return CompeteManager.Ins.CompeteRanking(json);
        }
        public async ETTask<string> CompeteTableInfo(string json)
        {
            return await CompeteManager.Ins.CompeteTableInfo(json);
        }
        public async ETTask<string> Watch(string json)
        {
            return await CompeteManager.Ins.Watch(json);
        }
        public async ETTask<string> GetCompeteRecord(string json)
        {
            return await CompeteManager.Ins.GetCompeteRecord(json);
        }
        public async ETTask<string> GetCompeteDetail(string json)
        {
            return await CompeteManager.Ins.GetCompeteDetail(json);
        }
    }
}
