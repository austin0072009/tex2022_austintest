using ETModel;
using ETModel.Framework.Common.Serialization;
using ETModel.Script.CsScript.Action;
using System;
using System.Collections.Generic;

namespace Model.RedisDB
{
    [MessageHandler(AppType.RedisDB)]
    public class RedisDBAgentHandler : AMRpcHandler<RedisDB_AgentRequest, RedisDB_AgentResponse>
    {
        Dictionary<string, Func<string, string>> map = new Dictionary<string, Func<string, string>>();
        public RedisDBAgentHandler()
        {
            map.Add(typeof(cs_bigagent_add).Name, BigAgentadd);
            map.Add(typeof(cs_setagentrate_gm).Name, Setagentrate);
            map.Add(typeof(cs_agent_add).Name, AgentAdd);
            map.Add(typeof(cs_agent_update_showrate).Name, UpdateRate);
            map.Add(typeof(cs_agent_delete).Name, AgentDelete);
        }
        protected async override ETTask Run(Session session, RedisDB_AgentRequest request, RedisDB_AgentResponse response, Action reply)
        {

            var data = JsonUtils.Deserialize<cs_agent_base>(request.Message);
            if (map.TryGetValue(data.fn, out Func<string, string> method)) response.Message = method(request.Message);
            //switch (data.fn)
            //{
            //    case "cs_agent_add":
            //        response.Message = AgentAdd(request.Message);
            //        break;
            //    case "cs_agent_update_showrate":
            //        response.Message = UpdateRate(request.Message);
            //        break;
            //    case "cs_agent_delete":
            //        response.Message = AgentDelete(request.Message);
            //        break;
            //}
            reply();
            await ETTask.CompletedTask;
        }
        /// <summary>
        /// 设置社区代理反利值
        /// </summary>
        /// <param name="message"></param>
        /// <returns></returns>
        private string Setagentrate(string message)
        {
            var cs = JsonUtils.Deserialize<cs_setagentrate_gm>(message);
            int rsp = AgentRelationHelper.Set_agentrate(cs.userid, cs.rate, out string info);
            return JsonUtils.Serialize(new sc_bigagent_add(rsp, info, GMService.secret));
        }


        private string BigAgentadd(string message)
        {
            var cs = JsonUtils.Deserialize<cs_bigagent_add>(message);
            int rsp = AgentRelationHelper.Add_bigagentLocal(cs.userid, cs.cidx, cs.showrate, out string info);
            return JsonUtils.Serialize(new sc_bigagent_add(rsp, info, GMService.secret));

        }
        private string AgentAdd(string message)
        {
            var cs = JsonUtils.Deserialize<cs_agent_add>(message);
            //int rsp; string info = null;
            //try
            //{
            //    int parentid = ActiveCodeHelper.GetUserID(cs.cidx, Convert.ToInt32(cs.code, 16));
            //    if (parentid > 0)
            //    {
            //        rsp = AgentRelationHelper.Add_Local(cs.userid, parentid, cs.cidx, 0, cs.code);
            //        switch (rsp)
            //        {
            //            case -1:
            //                info = "上级代理不存在";
            //                break;
            //            case -2:
            //                info = "代理已存在";
            //                break;
            //            case -3:
            //                info = "为用户生成邀请码失败";
            //                break;
            //            case -4:
            //                info = "添加代理发生异常，请与服务器联系";
            //                break;
            //        }
            //    }
            //    else { rsp = -4; info = "邀请码不存在"; }
            //}
            //catch (Exception ex) { rsp = -5; info = "数据异常"; }
            int parentid = string.IsNullOrEmpty(cs.code) ? 0 : ActiveCodeHelper.GetUserID(Convert.ToInt32(cs.code));
            int rsp = AgentRelationHelper.Add_Local(cs.userid, parentid, cs.cidx, 0, cs.code, out string info);
            return JsonUtils.Serialize(new sc_agent_add(rsp, info, GMService.secret));
        }
        private string UpdateRate(string message)
        {
            cs_agent_update_showrate cs = JsonUtils.Deserialize<cs_agent_update_showrate>(message);
            //int rsp = AgentRelationHelper.UpdateShowRate_Local(cs.userid, cs.parentid, cs.cidx, cs.showrate);
            //string info = null;
            //switch (rsp)
            //{
            //    case -1:
            //        info = "上级代理不存在";
            //        break;
            //    case -2:
            //        info = "上级代理不匹配";
            //        break;
            //    case -3:
            //        info = "变更税率发生异常";
            //        break;
            //    case -4:
            //        info = "变更下级代理未完全成功";
            //        break;
            //    case -5:
            //        info = "修改税率异常，请与服务器联系";
            //        break;
            //}
            int rsp = AgentRelationHelper.UpdateShowRate_Local(cs.userid, cs.parentid, cs.cidx, cs.showrate, out string info);
            return JsonUtils.Serialize(new sc_agent_update_showrate(rsp, info, GMService.secret));
        }
        private string AgentDelete(string message)
        {
            cs_agent_delete cs = JsonUtils.Deserialize<cs_agent_delete>(message);
            //int rsp = AgentRelationHelper.Delete_Local(cs.userid, cs.parentid, cs.cidx);
            //string info = null;
            //switch (rsp)
            //{
            //    case -1:
            //        info = "你要删除的代理不存在";
            //        break;
            //    case -2:
            //        info = "上级代理不匹配";
            //        break;
            //    case -3:
            //        info = "修改子代理关系存在失败，请与服务器联系";
            //        break;
            //    case -4:
            //        info = "修改子代理关系异常，请与服务器联系";
            //        break;
            //    case -5:
            //        info = "删除代理异常，请与服务器联系";
            //        break;
            //}
            int rsp = AgentRelationHelper.Delete_Local(cs.userid, cs.parentid, cs.cidx, out string info);
            return JsonUtils.Serialize(new sc_agent_delete(rsp, info, GMService.secret));
        }
    }
}
