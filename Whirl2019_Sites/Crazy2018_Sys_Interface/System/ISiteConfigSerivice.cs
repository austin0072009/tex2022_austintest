using Crazy2018_Sys_Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Interface
{
   public interface ISiteConfigSerivice: IDependency
    {
        SiteConfig loadConfig();
        SiteConfig loadConfig(string configFilePath);
        SiteConfig saveConifg(SiteConfig model, string configFilePath);
    }
}
