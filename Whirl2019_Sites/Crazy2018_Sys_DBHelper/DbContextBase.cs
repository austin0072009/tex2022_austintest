 
using System.Data.Entity;
using System.Configuration;
using Crazy2018_Sys_Common;
using System.Data.Entity.Infrastructure;
using System.Data.Common;

namespace Crazy2018_Sys_DBHelper
{
    public class DbContextBase: DbContext
    {

        public DbContextBase(string nameConnectionString)
           : base(GetConnection(nameConnectionString))
        {
        }

        public static string GetConnection(string nameConnectionString)
        { 
            var connectString = ConfigurationManager.ConnectionStrings[nameConnectionString].ConnectionString;
            string ss1 = StringHelper.DecryptDES(connectString);//解密
            System.Console.WriteLine(ss1);
            //var str = StringHelper.DecryptDES(connectString).Replace("&quot;", "\"");//解密
            return ss1;
        } 
    }
}
