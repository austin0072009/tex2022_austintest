using ETModel.Framework.Data;
using ETModel.Script.Model;

namespace ETModel.Script.CsScript.Action
{
    public class ConfigManger
    {
        private static readonly DbBaseProvider _dbBaseProvider;
        internal const string ConnectKey = "ConnData";

        static ConfigManger()
        {
            _dbBaseProvider = DbConnectionProvider.CreateDbProvider(ConnectKey);

        }

        public static DbBaseProvider Provider
        {
            get { return _dbBaseProvider; }
        }
    }

    /// <summary>
    /// Config.
    /// </summary>
    public class ConnectManagerEx
    {
        private static readonly DbBaseProvider _dataDbBaseProvider;

        static ConnectManagerEx()
        {
            _dataDbBaseProvider = DbConnectionProvider.CreateDbProvider(DbConfig.ConnData);
        }

        public static DbBaseProvider DataProvider
        {
            get { return _dataDbBaseProvider; }
        }
    }
}
