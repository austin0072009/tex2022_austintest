
using System;
using ETModel.Framework.Common.Configuration;

namespace ETModel.Framework.Game.Config
{
    /// <summary>
    /// 
    /// </summary>
    public class AppServerSection : ConfigSection
    {
        /// <summary>
        /// init
        /// </summary>
        public AppServerSection()
        {
            ProductCode = ConfigUtils.GetSetting("Product.Code", 1);
            ProductName = ConfigUtils.GetSetting("Product.Name", "Game");
            ProductServerId = ConfigUtils.GetSetting("Product.ServerId", 1);
            UserLoginDecodeKey = ConfigUtils.GetSetting("Product.ClientDesDeKey", "");
            ClientVersion = new Version(1, 0, 0);
            Version ver;
            if (Version.TryParse(ConfigUtils.GetSetting("Product.ClientVersion", "1.0.0"), out ver))
            {
                ClientVersion = ver;
            }

            PublishType = ConfigUtils.GetSetting("PublishType", "Release");
            ActionTimeOut = ConfigUtils.GetSetting("ActionTimeOut", 500);
            LanguageTypeName = ConfigUtils.GetSetting("Game.Language.TypeName", "Game.src.Locale.DefaultLanguage");


            ActionTypeName = ConfigUtils.GetSetting("Game.Action.TypeName");
            if (string.IsNullOrEmpty(ActionTypeName))
            {
                string assemblyName = ConfigUtils.GetSetting("Game.Action.AssemblyName", "ETModel.CsScript");
                if (!string.IsNullOrEmpty(assemblyName))
                {
                    ActionTypeName = assemblyName + ".Action.Action{0}," + assemblyName;
                }
            }
            ScriptTypeName = ConfigUtils.GetSetting("Game.Action.Script.TypeName", "Game.Script.Action{0}");
            DecodeFuncTypeName = ConfigUtils.GetSetting("Game.Script.DecodeFunc.TypeName", "");
            RemoteTypeName = ConfigUtils.GetSetting("Game.Remote.Script.TypeName", "Game.Script.Remote.{0}");
            AccountServerUrl = ConfigUtils.GetSetting("AccountServerUrl", "");
        }

        /// <summary>
        /// Game product code
        /// </summary>
        public int ProductCode { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string ProductName { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public int ProductServerId { get; set; }

        /// <summary>
        /// Client ver
        /// </summary>
        public Version ClientVersion { get; set; }

        /// <summary>
        /// user login decode password key.
        /// </summary>
        public string UserLoginDecodeKey { get; set; }


        /// <summary>
        /// user encode password key to db.
        /// </summary>
        [Obsolete("Sns no use")]
        public string UserEncodeKey { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string PublishType { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public int ActionTimeOut { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string LanguageTypeName { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string ActionTypeName { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string RemoteTypeName { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string DecodeFuncTypeName { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string ScriptTypeName { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string AccountServerUrl { get; set; }


    }
}
