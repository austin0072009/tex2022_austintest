﻿using ETModel.Framework.Common.Configuration;

namespace ETModel.Framework.Game.Config
{
    /// <summary>
    /// 
    /// </summary>
    public class ProtocolSection : ConfigSection
    {
        /// <summary>
        /// init
        /// </summary>
        public ProtocolSection()
        {
            HttpHost = ConfigUtils.GetSetting("Game.Http.Host");
            HttpPort = ConfigUtils.GetSetting("Game.Http.Port", 80);
            HttpName = ConfigUtils.GetSetting("Game.Http.Name", "Service.aspx");
            HttpRequestTimeout = ConfigUtils.GetSetting("Game.Http.Timeout",120000);

            SocketMaxConnection = ConfigUtils.GetSetting("MaxConnections", 10000);
            SocketBacklog = ConfigUtils.GetSetting("Backlog", 1000);
            SocketMaxAcceptOps = ConfigUtils.GetSetting("MaxAcceptOps", 1000);
            SocketBufferSize = ConfigUtils.GetSetting("BufferSize", 8192);
            //no use
            SocketExpireInterval = ConfigUtils.GetSetting("ExpireInterval", 600) * 1000;
            SocketExpireTime = ConfigUtils.GetSetting("ExpireTime", 3600) * 1000;

            SignKey = ConfigUtils.GetSetting("Product.SignKey", "");
            GameIpAddress = ConfigUtils.GetSetting("Game.IpAddress");
            GamePort = ConfigUtils.GetSetting("Game.Port", 9101);
            EnableActionGZip = ConfigUtils.GetSetting("Game.Action.EnableGZip", true);
            ActionGZipOutLength = ConfigUtils.GetSetting("Game.Action.GZipOutLength", 1024);//1k
        }

        /// <summary>
        /// 
        /// </summary>
        public string HttpHost { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public int HttpPort { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string HttpName { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public int HttpRequestTimeout { get; set; }


        /// <summary>
        /// 
        /// </summary>
        public string GameIpAddress { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public int SocketMaxConnection { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public int SocketBacklog { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public int SocketMaxAcceptOps { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public int SocketBufferSize { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public int SocketExpireInterval { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public int SocketExpireTime { get; set; }

        /// <summary>
        /// receive data sign key
        /// </summary>
        public string SignKey { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public int GamePort { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public int ActionGZipOutLength { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public bool EnableActionGZip { get; set; }

    }
}
