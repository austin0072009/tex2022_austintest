using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Threading.Tasks;
using System.Security.Principal;
using System.Web.Security;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Common;
using System.Web.Mvc;
using Crazy2018_WebSite_Manage.Controllers;
using System.Web.SessionState;
using Crazy2018_Sys_Interface;
using Crazy2018_Sys_Service;

namespace Crazy2018_WebSite_Manage.Hubs
{
    [HubName("socketHub")]
    public class NoticeHub : Hub
    {
        
        /// <summary>
        /// The connected users.
        /// </summary>
        public static readonly List<UserDetail> ConnectedUsers = new List<UserDetail>();

        private static HttpSessionState _session = HttpContext.Current.Session;
        public override Task OnConnected()
        {
            string connectedId = this.Context.ConnectionId;

            dt_manager manager = CacheHelper.Get<dt_manager>(DTKeys.SESSION_ADMIN_INFO);
            if (manager!=null)
            {
                string userId = manager.role_id.ToString();
                string tempusername = manager.user_name;
                if (ConnectedUsers.Count(w => w.UserName == tempusername) == 0)
                {
                    ConnectedUsers.Add(new UserDetail { ConnectionId = connectedId, UserName = tempusername, Id = userId });
                }
                else
                {

                }
                return base.OnConnected();
            }
            else
            {
                return null;
            }
        }
        public override Task OnDisconnected(bool stopCalled)
        {
            string connectedId = this.Context.ConnectionId;
            dt_manager manager = CacheHelper.Get<dt_manager>(DTKeys.SESSION_ADMIN_INFO);
            if (manager!=null)
            {
                string userId = manager.role_id.ToString();

                UserDetail item = ConnectedUsers.FirstOrDefault(x => x.ConnectionId == connectedId);
                if (item != null)
                {
                    ConnectedUsers.Remove(item);
                }
                return base.OnDisconnected(stopCalled);
            }
            else
            {
                return null;
            }
        }
        public override Task OnReconnected()
        {
            return base.OnReconnected();
        }
    }
    /// <summary>
    /// The user detail.
    /// </summary>
    public class UserDetail
    {
        #region Public Properties

        /// <summary>
        /// Gets or sets the connection id.
        /// </summary>
        public string ConnectionId { get; set; }

        /// <summary>
        /// Gets or sets the id.
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// Gets or sets the user name.
        /// </summary>
        public string UserName { get; set; }

        #endregion
    }
    /// <summary>
    /// The message detail.
    /// </summary>
    public class MessageDetail
    {
        #region Public Properties

        /// <summary>
        /// Gets or sets the message.
        /// </summary>
        public string Message { get; set; }

        /// <summary>
        /// Gets or sets the user name.
        /// </summary>
        public string UserName { get; set; }

        #endregion
    }
}