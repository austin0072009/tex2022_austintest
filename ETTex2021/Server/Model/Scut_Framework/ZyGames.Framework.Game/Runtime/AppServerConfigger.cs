using System.Configuration;
using System.IO;
using ETModel.Framework.Common;
using ETModel.Framework.Common.Configuration;
using ETModel.Framework.RPC.IO;

namespace ETModel.Framework.Game.Runtime
{
    /// <summary>
    /// 
    /// </summary>
    public class DefaultAppConfigger : DefaultDataConfigger
    {
        /// <summary>
        /// init
        /// </summary>
        public DefaultAppConfigger()
        {
            ConfigFile = Path.Combine(MathUtils.RuntimePath, "ETModel.exe.config");
        }
        /// <summary>
        /// 
        /// </summary>
        protected override void LoadConfigData()
        {
            ////ConfigurationManager.RefreshSection("appSettings");
            ////ConfigurationManager.RefreshSection("connectionStrings");
            var er = ConfigurationManagerEx.ConnectionStrings.GetEnumerator();
            while (er.MoveNext())
            {
                var connSetting = er.Current as ConnectionStringSettings;
                if (connSetting == null) continue;
                AddNodeData(new ConnectionSection(connSetting.Name, connSetting.ProviderName, connSetting.ConnectionString));
            }
            var setting = GameEnvironment.Setting;
            setting.Reset();
            MessageStructure.EnableGzip = setting.ActionEnableGZip;
            MessageStructure.EnableGzipMinByte = setting.ActionGZipOutLength;
            base.LoadConfigData();
        }
    }
    /// <summary>
    /// 
    /// </summary>
    public class AppServerConfigger : DataConfigger
    {
        /// <summary>
        /// init
        /// </summary>
        public AppServerConfigger()
        {
            ConfigFile = Path.Combine(MathUtils.RuntimePath, "AppServer.config");
        }
        /// <summary>
        /// 
        /// </summary>
        protected override void LoadConfigData()
        {

        }
    }
}
