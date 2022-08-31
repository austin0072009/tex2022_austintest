
using System;
using System.Collections.Specialized;
using System.Configuration;

namespace ETModel.Framework.Common.Configuration
{


    /// <summary>
    /// Config manage
    /// </summary>
    public sealed class ConfigurationManagerEx
    {
        private static System.Configuration.Configuration config;
        static ConfigurationManagerEx()
        {
            string configPath = StartConfigComponent.Instance.ConfigPath + "/ScutApp.config";
            Console.WriteLine("ConfigPath:" + configPath);
            ExeConfigurationFileMap map = new ExeConfigurationFileMap();
            map.ExeConfigFilename = configPath;
            config = ConfigurationManager.OpenMappedExeConfiguration(map, ConfigurationUserLevel.None);

        }
        public static ConnectionStringSettingsCollection ConnectionStrings
        {
            get
            {
                return config.ConnectionStrings.ConnectionStrings;
            }
        }
        private static NameValueCollection _AppSettings;

        public static NameValueCollection AppSettings
        {
            get
            {
                if (_AppSettings == null)
                {
                    _AppSettings = new NameValueCollection();
                    foreach (var key in config.AppSettings.Settings.AllKeys)
                    {
                        _AppSettings.Add(key, config.AppSettings.Settings[key].Value);
                    }
                }
                return _AppSettings;
            }
        }

        public static ConfigurationSection GetSection(string sectionName)
        {
            return config.GetSection(sectionName);
        }
    }
}
