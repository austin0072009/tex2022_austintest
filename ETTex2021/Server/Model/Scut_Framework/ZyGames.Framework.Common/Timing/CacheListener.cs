
using Common.NLog;
using System;
using System.Collections.Generic;
using System.IO;
using Microsoft.Extensions.Caching.Memory;
using System.Threading;

namespace ETModel.Framework.Common.Timing
{
    /// <summary>
    /// Cachey removed reason.
    /// </summary>
    public enum CacheRemovedReason
    {
        /// <summary>
        /// The none.
        /// </summary>
        None = 0,
        /// <summary>
        /// The expired.
        /// </summary>
        Expired = 1,
        /// <summary>
        /// The append.
        /// </summary>
        Append,
        /// <summary>
        /// The changed.
        /// </summary>
        Changed,
        /// <summary>
        /// The removed.
        /// </summary>
        Removed,
    }
    /// <summary>
    /// 
    /// </summary>
    /// <param name="key"></param>
    /// <param name="value"></param>
    /// <param name="reason"></param>
    public delegate void CacheListenerHandle(string key, object value, CacheRemovedReason reason);

    /// <summary>
    /// 缓存定时监听器,
    /// 适用场合：刷新的时间间隔并不要求精确
    /// </summary>
    public class CacheListener
    {
        private static MemoryCache _cacheListener;
        private readonly string _cacheKey;
        private readonly int _expireTime;
        private readonly CacheListenerHandle _listenerHandle;
        private readonly string _dependency;
        private CacheListenerHandle _callback;
        private System.Threading.Timer _dueThread;
        private int isRunning = 0;

        static CacheListener()
        {
            //_cacheListener = HttpRuntime.Cache;
            //_cacheListener = MemoryCache.Default;
            _cacheListener = new MemoryCache(new MemoryCacheOptions());
        }

      

        /// <summary>
        /// 
        /// </summary>
        /// <param name="cacheKey"></param>
        /// <param name="secondsTimeOut"></param>
        /// <param name="listenerHandle"></param>
        public CacheListener(string cacheKey, int secondsTimeOut, CacheListenerHandle listenerHandle)
            : this(cacheKey, secondsTimeOut, listenerHandle, null)
        {
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="cacheKey"></param>
        /// <param name="secondsTimeOut">0:不过期</param>
        /// <param name="listenerHandle">过期回调方法</param>
        /// <param name="dependency">缓存文件依赖</param>
        public CacheListener(string cacheKey, int secondsTimeOut, CacheListenerHandle listenerHandle, string dependency)
        {
            DueTime = 100;
            _cacheKey = cacheKey;
            _expireTime = secondsTimeOut > 0 ? secondsTimeOut : 0;
            _listenerHandle = listenerHandle;
            _dependency = dependency;
            _callback += OnRemoveCallback;
        }

        /// <summary>
        /// 延迟执行时间，单位毫秒
        /// </summary>
        public int DueTime { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public bool IsRunning { get { return isRunning == 1; } }

        /// <summary>
        /// 
        /// </summary>
        public void Start()
        {
            _dueThread = new System.Threading.Timer(OnDueFirstRun, null, DueTime, Timeout.Infinite);
            Interlocked.Exchange(ref isRunning, 1);
        }

        private void OnDueFirstRun(object obj)
        {
            try
            {
                //First run
                if (_listenerHandle != null)
                {
                    try
                    {
                        _listenerHandle(_cacheKey, true, CacheRemovedReason.Append);
                    }
                    catch (Exception er)
                    {
                        TraceLog.WriteError("cache listener callback {0} error:{1}", _cacheKey, er);
                    }
                }

                CreateCacheItem();
            }
            catch (Exception ex)
            {
                TraceLog.WriteError("OnDueFirstRun {0} error:{1}", _cacheKey, ex);
            }
            finally
            {
                try
                {
                    _dueThread.Dispose();
                }
                catch (Exception)
                {
                }
            }
        }

        private void CreateCacheItem()
        {
            if (_cacheListener.Get(_cacheKey) != null)
            {
                return;
            }
            //4.滑动过期时间，3秒后,即三秒钟内被访问，则重新刷新缓存时间为3秒后
            MemoryCacheEntryOptions _options = new MemoryCacheEntryOptions();
            _options.AbsoluteExpiration = _expireTime == 0 ? DateTime.MaxValue : DateTime.Now.AddSeconds(_expireTime);
            _options.RegisterPostEvictionCallback(OnCacheEntryRemoved, this);// void PostEvictionDelegate(object key, object value, EvictionReason reason, object state);
             
            ////CacheItemPolicy policy = new CacheItemPolicy(); 
            ////if (!string.IsNullOrEmpty(_dependency) && File.Exists(_dependency))
            ////{
            ////    List<string> paths = new List<string>();
            ////    paths.Add(_dependency);
            ////    policy.ChangeMonitors.Add(new HostFileChangeMonitor(paths));
            ////}
            _cacheListener.Set(_cacheKey, true, _options);
        }

        private void OnCacheEntryRemoved(object key, object value, EvictionReason RemovedReason, object state)
        { 
            CacheRemovedReason reason = CacheRemovedReason.None;
            switch (RemovedReason)
            {
                case EvictionReason.Removed:
                    reason = CacheRemovedReason.Removed;
                    break;
                case EvictionReason.Expired:
                    reason = CacheRemovedReason.Expired;
                    break;
                case EvictionReason.Replaced:
                    reason = CacheRemovedReason.Changed;
                    break;
                //case EvictionReason.Evicted:
                //case EvictionReason.CacheSpecificEviction:
                //break;
                default:
                    break;
            }
            this._callback.BeginInvoke((string)key, value, reason, EndCallback, null);
        }

        private void EndCallback(IAsyncResult ar)
        {
        }

        private void OnRemoveCallback(string key, object value, CacheRemovedReason reason)
        {
            try
            {
                if (key == _cacheKey)
                {
                    if (_listenerHandle != null)
                    {
                        _listenerHandle(key, value, reason);
                    }
                    if (value != null && value.ToBool())
                    {
                        CreateCacheItem();
                    }
                    else
                    {
                        TraceLog.ReleaseWrite("Cache listener expire key:\"{0}\",reason:{1} is stoped.", key, reason);
                    }
                }
            }
            catch (Exception ex)
            {
                TraceLog.WriteError("Cache listener expire key:\"{0}\",reason:{1},error:{2}", key, reason, ex);
            }
        }

        /// <summary>
        /// 
        /// </summary>
        public void Stop()
        {
            Interlocked.Exchange(ref isRunning, 0);
            if (_cacheListener.Get(_cacheKey) != null)
                return;
            _cacheListener.Set(_cacheKey, false);
            _cacheListener.Remove(_cacheKey);
        }
    }
}