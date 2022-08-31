using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Crazy2018_WebSite_Manage.Hubs
{
    public class NoticeChat
    {
        /// <summary>
        /// Clients，用来主动发送消息
        /// </summary>
        private IHubConnectionContext<dynamic> Clients { get; set; }
        private readonly static NoticeChat _instance = new NoticeChat(GlobalHost.ConnectionManager.GetHubContext<NoticeHub>().Clients);
        private NoticeChat(IHubConnectionContext<dynamic> clients)
        {
            Clients = clients;
        }
        public static NoticeChat Instance
        {
            get
            {
                return _instance;
            }
        }
        /// <summary>
        /// 主动给所有人发送消息，系统直接调用
        /// </summary>
        /// <param name="msg"></param>
        public void SendSystemMsg<T>(T msg,List<string> userId)
        {
            var userDetail = NoticeHub.ConnectedUsers.Select(w=>w.ConnectionId);
            var temp = userDetail.ToList();
            Clients.Clients(temp).SendMsg(msg);
        }
        /// <summary>
        /// 主动给所有人发送消息，系统直接调用
        /// </summary>
        /// <param name="msg"></param>
        public void SendSystemMsgEx<T>(T msg, List<string> userId)
        {
            var userDetail = NoticeHub.ConnectedUsers.Where(w => userId.Contains(w.Id)).Select(w=>w.ConnectionId);
            var temp = userDetail.ToList();
            Clients.Clients(temp).SendMsg(msg);
        }
    }
}