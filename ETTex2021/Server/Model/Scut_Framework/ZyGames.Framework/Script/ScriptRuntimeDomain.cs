using Common.NLog;
using System;
using System.Reflection;
using System.Runtime.Loader;

namespace ETModel.Framework.Script
{
    /// <summary>
    /// https://www.cnblogs.com/zkweb/p/11630228.html
    /// </summary>
    public class ScriptRuntimeDomain : IDisposable
    {
        private AssemblyLoadContext _currDomain;
        private ScriptDomainContext _context;
        private ScriptRuntimeScope _scope;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="name"></param>
        /// <param name="privateBinPaths"></param>
        /// <returns></returns>
        public ScriptRuntimeDomain(string name, string[] privateBinPaths)
        {
            ////AppDomainSetup setup = new AppDomainSetup();
            ////setup.ApplicationName = name;
            ////setup.ApplicationBase = System.AppDomain.CurrentDomain.SetupInformation.ApplicationBase;
            ////setup.PrivateBinPath = string.Join(";", privateBinPaths);
            ////setup.CachePath = setup.ApplicationBase;
            ////setup.ShadowCopyFiles = "true";
            ////setup.ShadowCopyDirectories = setup.ApplicationBase;
            InitDomain(name);
        }

        private void InitDomain(string name)
        {
            _currDomain = new AssemblyLoadContext(name, true);// _currDomain = System.AppDomain.CreateDomain(name, null, setup);
            var type = typeof(ScriptDomainContext);
             _currDomain.LoadFromAssemblyName(type.Assembly.GetName());
            _context = (ScriptDomainContext)Activator.CreateInstance(type);
            //_context = (ScriptDomainContext)_currDomain.CreateInstanceFromAndUnwrap(type.Assembly.GetName().CodeBase, type.FullName);
        }

        /// <summary>
        /// 
        /// </summary>
        public ScriptRuntimeScope Scope
        {
            get { return _scope; }
        }

        /// <summary>
        /// Main function args.
        /// </summary>
        public string[] MainArgs { get; set; }

        /// <summary>
        /// IMainScript
        /// </summary>
        public IMainScript MainInstance { get; set; }

        

        internal void LoadAssembly(string key, string assemblyName)
        { 
            _context.LoadAssembly(key, assemblyName); 
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="assemblyKey"></param>
        /// <returns></returns>
        internal Assembly GetAssembly(string assemblyKey)
        {
            return _context.GetAssembly(assemblyKey);
        }
        private ScriptRuntimeScope CreateRuntimeScope(ScriptSettupInfo settupInfo, string amsKey, Type type)
        { 
            return _context.GetInstance(amsKey, type.FullName, settupInfo) as ScriptRuntimeScope; 
        }

        /// <summary>
        /// 
        /// </summary>
        public ScriptRuntimeScope CreateScope(ScriptSettupInfo settupInfo)
        {
            var type = typeof(ScriptRuntimeScope);
            string amsKey = type.Assembly.GetName().Name;
            _scope = CreateRuntimeScope(settupInfo, amsKey, type);
            if (_scope != null)
            {
                _scope.Init();
            }
            return _scope;
        }


        /// <summary>
        /// 
        /// </summary>
        public void Unload()
        {
            try
            {
                if (_currDomain != null)
                {
                    _currDomain.Unload();// System.AppDomain.Unload(_currDomain);
                }
            }
            catch (Exception ex)
            {
                TraceLog.WriteError("Script domain error:{0}", ex);
            }
        }

        /// <summary>
        /// 
        /// </summary>
        public void Dispose()
        {
            Unload();
            _currDomain = null;
            _scope.Dispose();
            _scope = null;
            _context = null;
            GC.SuppressFinalize(this);
        }

    }
}
