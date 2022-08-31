using System.Collections.Concurrent;
using System.Threading;
namespace Common.NLog
{

    public static class CallContext
    {
        static ConcurrentDictionary<string, AsyncLocal<object>> state = new ConcurrentDictionary<string, AsyncLocal<object>>();

        public static void SetData(string name, object data) =>
            state.GetOrAdd(name, _ => new AsyncLocal<object>()).Value = data;

        public static object GetData(string name) =>
            state.TryGetValue(name, out AsyncLocal<object> data) ? data.Value : null;
    }

    ////public static DbContext CreateDbContext()
    ////{
    ////    DbContext dbContext = (DbContext)Common.CallContext.GetData("dbContext");
    ////    if (dbContext == null)
    ////    {
    ////        dbContext = new Model.DBContext();
    ////        Common.CallContext.SetData("dbContext", dbContext);
    ////    }
    ////    return dbContext;
    ////} 
 
}
