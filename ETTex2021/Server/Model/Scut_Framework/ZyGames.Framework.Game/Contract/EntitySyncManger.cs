

using Common.NLog;
using ETModel.Framework.Collection.Generic;
using ETModel.Framework.Common;
using ETModel.Framework.Common.Reflect;
using ETModel.Framework.Event;
using ETModel.Framework.Model;
using ETModel.Framework.RPC.IO;
using System;
using System.Collections.Concurrent;
using System.Threading;

namespace ETModel.Framework.Game.Contract
{
    /// <summary>
    /// The entity sync data operation.
    /// </summary>
    public static class EntitySyncManger
    {
        private const int SyncActionId = 200;
        private static DictionaryExtend<string, bool> _syncPools;
        private static ConcurrentQueue<BaseEntity> _sendQueue;
        private static Thread _queueProcessThread;
        private static ManualResetEvent singal = new ManualResetEvent(false);
        private static int _runningQueue;

        internal static event Func<int, byte[], bool> SendHandle;

        static EntitySyncManger()
        {
            _syncPools = new DictionaryExtend<string, bool>();
            _sendQueue = new ConcurrentQueue<BaseEntity>();

            Interlocked.Exchange(ref _runningQueue, 1);
            _queueProcessThread = new Thread(ProcessQueue);
            _queueProcessThread.Start();
        }


        /// <summary>
        /// Dispose
        /// </summary>
        public static void Dispose()
        {
            Interlocked.Exchange(ref _runningQueue, 0);
            try
            {
                singal.Set();
                singal.Dispose();
                _queueProcessThread.Abort();
            }
            catch
            {
            }
        }

        /// <summary>
        /// entity data send to client
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="eventargs"></param>
        public static void OnChange(AbstractEntity sender, CacheItemEventArgs eventargs)
        {
            try
            {
                if (sender == null ||
                    (sender as BaseEntity) == null ||
                    !sender.GetSchema().IsEntitySync)
                {
                    return;
                }
                string key = sender.GetKeyCode();
                if (!_syncPools.ContainsKey(key))
                {
                    _syncPools[key] = true;
                    _sendQueue.Enqueue(sender as BaseEntity);
                    singal.Set();
                }
            }
            catch (Exception ex)
            {
                TraceLog.WriteError("EntitySync Notify error:{0}", ex);
            }
        }

        private static void ProcessQueue(object state)
        {
            while (_runningQueue == 1)
            {
                singal.WaitOne();
                if (_runningQueue == 1)
                {
                    Thread.Sleep(100);//Delay 100ms
                }
                while (_runningQueue == 1)
                {
                    BaseEntity entity;
                    if (_sendQueue.TryDequeue(out entity))
                    {
                        string key = entity.GetKeyCode();
                        byte[] buffer = DoSerialize(entity);
                        _syncPools.Remove(key);
                        DoSend(entity.PersonalId, buffer);
                    }
                    else
                    {
                        break;
                    }
                }
                singal.Reset();
            }
        }

        private static void DoSend(string personalId, byte[] buffer)
        {
            if (buffer == null) return;
            if (SendHandle != null)
            {
                SendHandle(personalId.ToInt(), buffer);
            }
        }

        private static byte[] DoSerialize(params BaseEntity[] entityList)
        {
            var rootWriter = new MessageStructure();
            rootWriter.PushIntoStack(entityList.Length);
            object fieldValue = null;
            foreach (var entity in entityList)
            {
                var schema = entity.GetSchema();
                if (schema == null)
                {
                    continue;
                }
                var recordWriter = new MessageStructure();
                recordWriter.PushIntoStack(schema.EntityName);
                //write columns
                var columns = schema.GetColumns();
                foreach (var column in columns)
                {
                    fieldValue = entity.GetPropertyValue(column.Name);
                    if (EntitySchemaSet.IsSupportType(column.ColumnType))
                    {
                        recordWriter.PushIntoStack(column.ColumnType, fieldValue);
                    }
                    else if (column.HasChild)
                    {
                        PushChildStack(recordWriter, column, fieldValue);
                    }
                }

                rootWriter.PushIntoStack(recordWriter);
            }

            var head = new MessageHead(SyncActionId);
            rootWriter.WriteBuffer(head);
            return rootWriter.PopBuffer();
        }

        private static void PushChildStack(MessageStructure parent, SchemaColumn parentColumn, object value)
        {
            if (parentColumn.IsDictionary)
            {
                var column = parentColumn.Children[1];
                dynamic dict = value;
                dynamic keys = dict.Keys;
                int count = dict.Count;
                parent.PushIntoStack(count);
                foreach (var key in keys)
                {
                    object item = dict[key];
                    var itemWriter = new MessageStructure();
                    itemWriter.PushIntoStack(key);
                    if (EntitySchemaSet.IsSupportType(column.ColumnType))
                    {
                        itemWriter.PushIntoStack(column.ColumnType, item);
                    }
                    else if (column.HasChild)
                    {
                        PushChildStack(itemWriter, column, item);
                    }
                    parent.PushIntoStack(itemWriter);
                }
            }
            else if (parentColumn.IsList)
            {
                var column = parentColumn.Children[0];
                dynamic list = value;
                int count = list.Count;
                parent.PushIntoStack(count);
                foreach (var item in list)
                {
                    var itemWriter = new MessageStructure();
                    if (EntitySchemaSet.IsSupportType(column.ColumnType))
                    {
                        itemWriter.PushIntoStack(column.ColumnType, item);
                    }
                    else if (column.HasChild)
                    {
                        PushChildStack(itemWriter, column, item);
                    }
                    parent.PushIntoStack(itemWriter);
                }
            }
            else
            {
                //child entity object
                parent.PushIntoStack(1);
                var typeAccessor = ObjectAccessor.Create(value, true);
                var itemWriter = new MessageStructure();
                foreach (var column in parentColumn.Children)
                {
                    try
                    {
                        var fieldValue = typeAccessor[column.Name];
                        if (EntitySchemaSet.IsSupportType(column.ColumnType))
                        {
                            itemWriter.PushIntoStack(column.ColumnType, fieldValue);
                        }
                        else if (column.HasChild)
                        {
                            PushChildStack(itemWriter, column, fieldValue);
                        }
                    }
                    catch
                    {
                    }
                }
                parent.PushIntoStack(itemWriter);

            }
        }

    }
}