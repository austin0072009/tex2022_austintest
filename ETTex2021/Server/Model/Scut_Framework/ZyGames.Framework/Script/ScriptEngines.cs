
using Common.NLog;
using ETModel.Framework.Common;
using ETModel.Framework.Common.Configuration;
using ETModel.Framework.Common.Serialization;
using ETModel.Framework.Common.Timing;
using ETModel.Framework.Model;
using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;

namespace ETModel.Framework.Script
{
    /// <summary>
    /// script loaded delegate
    /// </summary>
    public delegate void ScriptLoaded(string type, string[] files);

    /// <summary>
    /// 脚本对象引擎
    /// </summary>
    public class ScriptEngines
    {
        private static ScriptRuntimeDomain _runtimeDomain;
        private static ScriptSettupInfo _settupInfo;
        private static List<FileSystemWatcher> _watcherList;
        private static HashSet<string> _changedFiles;
        private static Timer _changeWatchingTimer;
        private static int _isCompiling = 0;
        /// <summary>
        /// Script loaded event
        /// </summary>
        public static event ScriptLoaded OnLoaded;

        private static void DoScriptLoaded(string type, string[] files)
        {
            ScriptLoaded handler = OnLoaded;
            if (handler != null) handler(type, files);
        }

        /// <summary>
        /// Is compiling
        /// </summary>
        public static bool IsCompiling { get { return _isCompiling == 1; } }
        /// <summary>
        /// Is error
        /// </summary>
        public static bool IsError { get; private set; }

        /// <summary>
        /// Settup info
        /// </summary>
        public static ScriptSettupInfo SettupInfo
        {
            get { return _settupInfo; }
        }

        static ScriptEngines()
        {
            _changedFiles = new HashSet<string>();
            _settupInfo = new ScriptSettupInfo();
        }

        /// <summary>
        /// 初始化
        /// </summary>
        public static void Initialize()
        {
            try
            {
                var scope = InitScriptRuntimeScope();
                if (scope != null)
                {
                    InitScriptListener(scope.WatcherPaths);
                }
            }
            catch (Exception er)
            {
                IsError = true;
                TraceLog.WriteError("Script init error:{0}.", er);
                throw er;
            }
        }


        private static void InitScriptListener(IEnumerable<string> paths)
        {
            _changeWatchingTimer = new Timer(DoWatcherChanged, null, Timeout.Infinite, Timeout.Infinite);
            _watcherList = new List<FileSystemWatcher>();
            foreach (var pathInfo in paths)
            {
                string[] args = pathInfo.Split(';');
                string path = args[0];
                string filter = args.Length > 0 ? args[1] : "*.*";
                if (!Directory.Exists(path))
                {
                    Directory.CreateDirectory(path);
                }
                var watcher = new FileSystemWatcher(path, filter);
                watcher.Changed += new FileSystemEventHandler(watcher_Changed);
                watcher.Created += new FileSystemEventHandler(watcher_Changed);
                watcher.Deleted += new FileSystemEventHandler(watcher_Changed);
                watcher.Error += watcher_Error;
                watcher.NotifyFilter = NotifyFilters.CreationTime | NotifyFilters.LastAccess | NotifyFilters.LastWrite | NotifyFilters.FileName | NotifyFilters.DirectoryName | NotifyFilters.Size;
                watcher.IncludeSubdirectories = true;
                watcher.EnableRaisingEvents = true;
                _watcherList.Add(watcher);
            }
        }

        private static void watcher_Error(object sender, ErrorEventArgs e)
        {
            TraceLog.WriteError("Script file has changed error:{0}", e.GetException().ToString());
        }

        private static ScriptRuntimeScope InitScriptRuntimeScope()
        {
            //star compile
            if (Interlocked.Exchange(ref _isCompiling, 1) == 0)
            {
                ScriptRuntimeDomain runtimeDomain = null;
                try
                {
                    string runtimePath = MathUtils.RuntimePath ?? MathUtils.RuntimeBinPath;
                    ////  AppDomain.CurrentDomain.AppendPrivatePath(ScriptCompiler.ScriptPath);
                    runtimeDomain = new ScriptRuntimeDomain(typeof(ScriptRuntimeDomain).Name, new[] { _settupInfo.RuntimePrivateBinPath});
                    string dllkey = "";
                    foreach (var assemblyName in _settupInfo.ReferencedAssemblyNames)
                    {
                        //排除System的dll
                        if (string.IsNullOrEmpty(assemblyName) ||
                            !Path.IsPathRooted(assemblyName)) continue;
                        string key = Path.GetFileNameWithoutExtension(assemblyName);
                        runtimeDomain.LoadAssembly(key, assemblyName);
                        dllkey = key;
                    }
                    var scope = runtimeDomain.CreateScope(_settupInfo);
                    //ignore error, allow model is empty.
                    if (scope == null)
                    {
                        if (_runtimeDomain == null) _runtimeDomain = runtimeDomain;
                        return scope;
                    }

                    scope.ModelAssembly = runtimeDomain.GetAssembly(dllkey);
                    //update befor
                    bool isFirstRun = _runtimeDomain == null;
                    if (!isFirstRun && _settupInfo.ModelChangedBefore != null)
                    {
                        if (_runtimeDomain.Scope.ModelAssembly != null) _settupInfo.ModelChangedBefore(_runtimeDomain.Scope.ModelAssembly);
                        TimeListener.Clear();
                        if (_runtimeDomain.MainInstance != null) _runtimeDomain.MainInstance.Stop();
                    }
                    runtimeDomain.MainInstance = runtimeDomain.Scope.Execute(_settupInfo.ScriptMainProgram, _settupInfo.ScriptMainTypeName) as IMainScript;
                    if (_runtimeDomain != null)
                    {
                        //unload pre-domain
                        _runtimeDomain.Dispose();
                    }
                    _runtimeDomain = runtimeDomain;
                    EntitySchemaSet.EntityAssembly = scope.ModelAssembly;
                    //update after
                    if (!isFirstRun && _settupInfo.ModelChangedAfter != null && scope.ModelAssembly != null)
                    {
                        _settupInfo.ModelChangedAfter(scope.ModelAssembly);
                    }
                    else if (scope.ModelAssembly != null)
                    {
                        ProtoBufUtils.LoadProtobufType(scope.ModelAssembly);
                        EntitySchemaSet.LoadAssembly(scope.ModelAssembly);
                    } 
                    return null;
                }
                finally
                {
                    Interlocked.Exchange(ref _isCompiling, 0);
                }
            }
            else
            {
                TraceLog.WriteLine("{1} {0} has not compiled in other thread.", "model", DateTime.Now.ToString("HH:mm:ss"));
            }
            return null;
        }

        private static void DoWatcherChanged(object state)
        {
          
        }

        private static void watcher_Changed(object sender, FileSystemEventArgs e)
        {
            
        }


        /// <summary>
        /// Register model script has changed before event.
        /// </summary>
        /// <param name="callback"></param>
        public static void RegisterModelChangedBefore(Action<Assembly> callback)
        {
            _settupInfo.ModelChangedBefore += callback;
        }

        /// <summary>
        /// Register model script has changed after event.
        /// </summary>
        /// <param name="callback"></param>
        public static void RegisterModelChangedAfter(Action<Assembly> callback)
        {
            _settupInfo.ModelChangedAfter += callback;
        }

        /// <summary>
        /// Add system reference
        /// </summary>
        /// <param name="assemblys"></param>
        public static void AddSysReferencedAssembly(params string[] assemblys)
        {
            foreach (var assembly in assemblys)
            {
                if (!string.IsNullOrEmpty(assembly))
                {
                    _settupInfo.ReferencedAssemblyNames.Add(assembly);
                }
            }
        }
        /// <summary>
        /// 添加CSharp脚本动态引用DLL
        /// </summary>
        /// <param name="assemblys"></param>
        public static void AddReferencedAssembly(params string[] assemblys)
        {
            foreach (var ass in assemblys)
            {
                if (string.IsNullOrEmpty(ass)) continue;
                var assembly = ass.Split('/', '\\').Length == 1 ? Path.Combine(_settupInfo.RuntimePrivateBinPath, ass) : ass;
                if (!string.IsNullOrEmpty(assembly))
                {
                    _settupInfo.ReferencedAssemblyNames.Add(assembly);
                }
            }
        }

        /// <summary>
        /// Get model entity assembly.
        /// </summary>
        /// <returns></returns>
        public static Assembly GetEntityAssembly()
        {
            return _runtimeDomain.Scope != null ? _runtimeDomain.Scope.ModelAssembly : null;
        } 

        /// <summary>
        /// stop main class.
        /// </summary>
        public static void StopMainProgram()
        {
            if (_runtimeDomain != null && _runtimeDomain.MainInstance != null)
            {
                ((dynamic)_runtimeDomain.MainInstance).Stop();
            }
        }
        /// <summary>
        /// 执行脚本
        /// </summary>
        /// <param name="scriptCode">脚本标识</param>
        /// <param name="typeName">csharp脚本指定对象类型</param>
        /// <param name="args">csharp脚本指定类型构造函数的参数</param>
        /// <returns>csharp脚本返回指定typeName实例对象；python脚本返回ScriptCode对象</returns>
        public static dynamic Execute(string scriptCode, string typeName, params object[] args)
        {
            if (IsCompiling) return null;
            return _runtimeDomain.Scope.Execute(scriptCode, typeName, args);
        } 

        /// <summary>
        /// Process csharp script.
        /// </summary>
        /// <param name="typeName"></param>
        /// <param name="args"></param>
        /// <returns></returns>
        public static dynamic ExecuteCSharp(string typeName, params object[] args)
        {
            if (IsCompiling) return null;
            return _runtimeDomain.Scope.ExecuteCSharp(typeName, args);
        } 

        /// <summary>
        /// Dispose
        /// </summary>
        public static void Dispose()
        {
            _changeWatchingTimer.Dispose();
            _runtimeDomain.Dispose();
        }

    }
}