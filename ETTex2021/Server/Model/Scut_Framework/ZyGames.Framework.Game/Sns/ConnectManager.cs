using ETModel.Framework.Data;

namespace ETModel.Framework.Game.Sns
{
    /// <summary>
    /// Config.
    /// </summary>
    internal class SQLConnectManager
    {
        private static readonly DbBaseProvider _dbBaseProvider;
        private const string ConnectKey = "SnsCenter";

        static SQLConnectManager()
        {
            _dbBaseProvider = DbConnectionProvider.CreateDbProvider(ConnectKey);
           
        }

        public static DbBaseProvider Provider
        {
            get { return _dbBaseProvider; }
        }
    }
}