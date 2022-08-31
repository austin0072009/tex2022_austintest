
using System;
using System.Configuration;
using System.IO;
using ETModel.Framework.Common.Configuration;
using ETModel.Framework.Common.Timing;

namespace ETModel.Framework.Game.Configuration
{
    /// <summary>
    /// 游戏配置管理类
    /// </summary>
    public static class ZyGameBaseConfigManager
    {
        private static readonly object thisLock = new object();
        private const string KeyName = "zyGameBaseBll";
        private static ZyGameBaseBllSection zyGameBaseBll;
        private static GameConfigSetting _gameConfigSetting = new GameConfigSetting();
        private static string _configFileName;

        /// <summary>
        /// 游戏配置
        /// </summary>
        internal static GameConfigSetting GameSetting
        {
            get
            {
                return _gameConfigSetting;
            }
        }

        private static ZyGameBaseBllSection BaseConfig
        {
            get
            {
                if (zyGameBaseBll == null)
                {
                    lock (thisLock)
                    {
                        if (zyGameBaseBll == null)
                        {
                            zyGameBaseBll = (ZyGameBaseBllSection)ConfigurationManagerEx.GetSection(KeyName);
                        }
                    }
                }
                return zyGameBaseBll;
            }
        }

        /// <summary>
        /// 获取渠道登录处理提供类的配置
        /// </summary>
        /// <returns></returns>
        public static LoginElement GetLogin()
        {
            return BaseConfig != null ? BaseConfig.Login : null;
        }

       

        /// <summary>
        /// 初始化配置
        /// </summary>
        public static void Intialize()
        {
            return;
            string runtimePath = AppDomain.CurrentDomain.SetupInformation.ApplicationBase;
            _configFileName = Path.Combine(runtimePath, "Game.config.xml");
            CacheListener routeListener = new CacheListener("__GAME_CONFIG", 0, (key, value, reason) =>
            {
				if (reason == CacheRemovedReason.Changed)
                {
                    _gameConfigSetting.Init(_configFileName);
                }
            }, _configFileName);
            routeListener.Start();

            _gameConfigSetting.Init(_configFileName);
        }

    }
}