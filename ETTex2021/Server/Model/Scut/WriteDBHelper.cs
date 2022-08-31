using System;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;
using ETModel.Framework.Common;
using ETModel.Framework.Common.Serialization;
using ETModel.Framework.Data;
using ETModel.Framework.Model;
using ETModel.Framework.Net;

namespace ETModel.Script.CsScript.Action
{
    /// <summary>
    /// 直写DB
    /// </summary>
    public class WriteDBHelper
    {
        /// <summary>
        /// 同步写入数据库
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="model"></param>
        public static void Add<T>(params T[] model) where T : AbstractEntity
        {
            AddRun(model);
        }

        private static void AddRun<T>(params T[] model) where T : AbstractEntity
        {
            using (var sender = DataSyncManager.GetDataSender())
            {
                sender.Send(model);
            };

        }

        /// <summary>
        /// 异步写数据库
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="model"></param>
        public static async void AddAsync<T>(params T[] model) where T : AbstractEntity
        {
            await AddRunAsync(model);
        }

        private static async Task AddRunAsync<T>(params T[] model) where T : AbstractEntity
        {
            await Task.Run(() =>
            {
                try
                {
                    using (var sender = DataSyncManager.GetDataSender())
                    {
                        sender.Send(model);
                    };
                }
                catch (Exception ex)
                {
                    TraceLogEx.Error(ex, "202003011114 :" + JsonUtils.Serialize(model));
                }
            });
        }
        /// <summary>
        /// 写一条数据到数据库并返回它的自增ID
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="data"></param>
        /// <returns></returns>
        public static long SendOneToDbReturnIdentity<T>(T data) where T : AbstractEntity
        {
            if (Equals(data, null))
            {
                return 0;
            }
            SchemaTable schemaTable = EntitySchemaSet.Get(data.GetType());
            DbBaseProvider dbProvider = DbConnectionProvider.CreateDbProvider(schemaTable.ConnectKey);
            if (dbProvider == null)
            {
                return 0;
            }
            long Identity = 0;
            CommandStruct command = GenerateCommand(dbProvider, data, schemaTable, null);
            if (command != null)
            {
                using (var reader = dbProvider.ExecuteReader(CommandType.Text, command.Sql, command.Parameters))
                {
                    if (reader.Read())
                    {
                        if (!long.TryParse(reader[0] + "", out Identity))
                        {
                            TraceLogEx.Error(command.Sql+ " sql ExecuteReader error!");
                        } 
                    }
                    reader.Dispose();
                }
               
            }
            return Identity;
        }
        private static CommandStruct GenerateCommand<T>(DbBaseProvider dbProvider, T data, SchemaTable schemaTable, EntityPropertyGetFunc<T> getFunc) where T : AbstractEntity
        {
            CommandStruct command;
            if (!(schemaTable.StorageType.HasFlag(StorageType.ReadOnlyDB) ||
                schemaTable.StorageType.HasFlag(StorageType.ReadWriteDB) ||
                schemaTable.StorageType.HasFlag(StorageType.WriteOnlyDB)) ||
                (string.IsNullOrEmpty(schemaTable.ConnectKey) &&
                 string.IsNullOrEmpty(schemaTable.ConnectionString)))
            {
                return null;
            }
            if (getFunc == null) getFunc = GetPropertyValue;

            IList<string> columns = schemaTable.GetColumnNames();
            if (columns == null || columns.Count == 0)
            {
                //TraceLog.WriteError("Class:{0} is not change column.", data.GetType().FullName);
                return null;
            }
            string tableName = schemaTable.GetTableName(data.GetCreateTime());
            if (data.IsDelete)
            {
                command = dbProvider.CreateCommandStruct(tableName, CommandMode.Delete);
            }
            else if (schemaTable.AccessLevel == AccessLevel.WriteOnly)
            {
                command = dbProvider.CreateCommandStruct(tableName, CommandMode.Insert);
            }
            else
            {
                command = dbProvider.CreateCommandStruct(tableName, CommandMode.ModifyInsert);
            }
            //StringBuilder changeLog = new StringBuilder();
            //changeLog.AppendFormat("\"Keys\":\"{0}\"", data.GetKeyCode());
            //处理列
            foreach (string columnName in columns)
            {
                if (string.IsNullOrEmpty(columnName)) continue;
                try
                {
                    SchemaColumn schemaColumn;
                    if (schemaTable.Columns.TryGetValue(columnName, out schemaColumn))
                    {
                        if (schemaColumn.Disable || schemaColumn.IsIdentity)
                        {
                            continue;
                        }
                        object value = getFunc(data, schemaColumn);
                        IDataParameter parameter = CreateParameter(dbProvider, columnName, schemaColumn.DbType, value);
                        command.AddParameter(parameter);

                    }
                }
                catch (Exception ex)
                {
                    throw new Exception(string.Format("get {0} column val error.", columnName), ex);
                }
            }
            //处理条件
            string[] keyList = schemaTable.Keys;
            if (keyList.Length == 0)
            {
                throw new ArgumentNullException(string.Format("Table:{0} key is empty.", schemaTable.EntityName));
            }
            //string condition = string.Empty;
            //command.Filter = dbProvider.CreateCommandFilter();
            //foreach (string columnName in keyList)
            //{
            //    try
            //    {
            //        SchemaColumn schemaColumn;
            //        if (schemaTable.Columns.TryGetValue(columnName, out schemaColumn))
            //        {
            //            string keyName = columnName;
            //            string paramName = "F_" + columnName;
            //            if (condition.Length > 0) condition += " AND ";
            //            condition += dbProvider.FormatFilterParam(schemaColumn.Name, "", paramName);
            //            object value = getFunc(data, schemaColumn);
            //            IDataParameter parameter = CreateParameter(dbProvider, paramName, schemaColumn.DbType, value);
            //            command.Filter.AddParam(parameter);
            //            //主键且自增列更新时，MSSQL与MySql处理不同，MySql需要有主键列
            //            command.AddKey(CreateParameter(dbProvider, keyName, schemaColumn.DbType, value), schemaColumn.IsIdentity);
            //        }
            //    }
            //    catch (Exception ex)
            //    {
            //        throw new Exception(string.Format("get {0} column val error.", columnName), ex);
            //    }
            //}
            //command.Filter.Condition = condition;
            command.ReturnIdentity = true;
            command.Parser();
            return command;
        }
        private static IDataParameter CreateParameter(DbBaseProvider dbProvider, string columnName, ColumnDbType dbType, object value)
        {
            IDataParameter parameter;
            switch (dbType)
            {
                case ColumnDbType.UniqueIdentifier:
                    parameter = dbProvider.CreateParameterByGuid(columnName, (Guid)value);
                    break;
                case ColumnDbType.LongText:
                    parameter = dbProvider.CreateParameterByLongText(columnName, value);
                    break;
                case ColumnDbType.Text:
                    parameter = dbProvider.CreateParameterByText(columnName, value);
                    break;
                case ColumnDbType.LongBlob:
                    parameter = dbProvider.CreateParameterLongBlob(columnName, value);
                    break;
                case ColumnDbType.Blob:
                    parameter = dbProvider.CreateParameterByBlob(columnName, value);
                    break;
                default:
                    parameter = dbProvider.CreateParameter(columnName, value);
                    break;
            }
            return parameter;
        }
        private static object GetPropertyValue<T>(T data, SchemaColumn column) where T : AbstractEntity
        {
            object value = null;
            if (data is AbstractEntity)
            {
                value = (data as AbstractEntity).GetPropertyValue(column.Name);
                CovertDataValue(column, ref value);
            }
            return value;
        }
        private static void CovertDataValue(SchemaColumn schemaColumn, ref object value)
        {
            if (value is DateTime && value.ToDateTime() < MathUtils.SqlMinDate)
            {
                value = MathUtils.SqlMinDate;
                return;
            }

            //序列化Json
            if (schemaColumn.IsSerialized)
            {
                if (schemaColumn.DbType == ColumnDbType.LongBlob || schemaColumn.DbType == ColumnDbType.Blob)
                {
                    value = SerializeBinaryObject(value);
                }
                else
                {
                    value = SerializeJson(schemaColumn, value);
                }
            }
        }
        private static object SerializeBinaryObject(object value)
        {
            return ProtoBufUtils.Serialize(value);
        }
        private static object SerializeJson(SchemaColumn schemaColumn, object value)
        {

            value = value ?? string.Empty;
            if (!string.IsNullOrEmpty(schemaColumn.JsonDateTimeFormat))
            {
                value = JsonUtils.SerializeCustom(value);
            }
            else
            {
                value = JsonUtils.Serialize(value);
            }
            return value;
        }
    }
}
