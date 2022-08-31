using Crazy2018_Sys_Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Crazy2018_Sys_Entity;
using Crazy2018_Sys_Common;

namespace Crazy2018_Sys_Service
{
   public class SiteConfigSerivice : ISiteConfigSerivice
    {
        private static object lockHelper = new object();
        public SiteConfig loadConfig()
        {
            SiteConfig model = CacheHelper.Get<SiteConfig>(DTKeys.CACHE_SITE_CONFIG);
            if (model == null)
            {
                CacheHelper.Insert(DTKeys.CACHE_SITE_CONFIG, loadConfig(Utils.GetXmlMapPath(DTKeys.FILE_SITE_XML_CONFING)),
                    Utils.GetXmlMapPath(DTKeys.FILE_SITE_XML_CONFING));
                model = CacheHelper.Get<SiteConfig>(DTKeys.CACHE_SITE_CONFIG);
            }
            return model;
        }

        public SiteConfig loadConfig(string configFilePath)
        {
            return (SiteConfig)SerializationHelper.Load(typeof(SiteConfig), configFilePath);
        }

        public SiteConfig saveConifg(SiteConfig model, string configFilePath)
        {
            if (string.IsNullOrEmpty(configFilePath))
            {
                configFilePath = Utils.GetXmlMapPath(DTKeys.FILE_SITE_XML_CONFING);
            }
            lock (lockHelper)
            {
                SerializationHelper.Save(model, configFilePath);
            }
            return model;
        }
    }
}
