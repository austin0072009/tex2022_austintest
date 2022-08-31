
using Common.NLog;
using System;
using System.Reflection;
using System.Threading;
using ETModel.Framework.Script;
using ETModel.Script;

namespace ETModel.Framework.Game.Runtime
{
    /// <summary>
    /// Runtime host service
    /// </summary>
    public class RuntimeHost
    {

        private readonly ManualResetEvent runCompleteEvent = new ManualResetEvent(false);
        /// <summary>
        /// 
        /// </summary>
        protected static string LoginCharFormat =
@"///////////////////////////////////////////////////////////////////////////

    //   ) )  //   ) )  //   / / /__  ___/   SCUT.EX Server version {0}
   ((        //        //   / /    / /       Login Server
     \\     //        //   / /    / /        
       ) ) //        //   / /    / /        
((___ / / ((____/ / ((___/ /    / /                http://www.scutgame.com

";

        private static string CharFormat =
@"///////////////////////////////////////////////////////////////////////////

    //   ) )  //   ) )  //   / / /__  ___/   SCUT.EX {0} ({1} bit)
   ((        //        //   / /    / /       Running in {2} platform
     \\     //        //   / /    / /        Game: {3}   Server: {4}
       ) ) //        //   / /    / /         
((___ / / ((____/ / ((___/ /    / /                http://www.scutgame.com
";

        private EnvironmentSetting _setting;

        /// <summary>
        /// 
        /// </summary>
        public virtual void OnInit()
        {
            try
            {
                _setting = new EnvironmentSetting();
                var osbit = GetOsBit();
                var platform = GetRunPlatform();
                TraceLog.WriteLine(string.Format(CharFormat,
                    Assembly.GetExecutingAssembly().GetName().Version,
                    osbit,
                    platform,
                    _setting.ProductCode,
                    _setting.ProductServerId));
            }
            catch
            {
            }
        }

        /// <summary>
        /// Process start logic init
        /// </summary>
        /// <returns></returns>
        public virtual bool OnStart()
        { 
            try
            {
                OnInit();
                GameEnvironment.Start(_setting);

                return true;
            }
            catch (Exception ex)
            {
                TraceLog.WriteLine("{0} Server failed to start error:{1}", DateTime.Now.ToString("HH:mm:ss"), ex.Message);
                TraceLog.WriteError("OnInit error:{0}", ex);
                TraceLog.WriteLine("# Server exit command \"Ctrl+C\" or \"Ctrl+Break\".");
            }
            return false;
        }

        private int GetOsBit()
        {
            try
            {
                return Environment.Is64BitProcess ? 64 : 32;
            }
            catch (Exception)
            {
                return 32;
            }
        }
        private string GetRunPlatform()
        {
            try
            {
                return Environment.OSVersion.Platform.ToString();
            }
            catch (Exception)
            {
                return "Unknow";
            }
        }
        /// <summary>
        /// Run
        /// </summary>
        public void Run()
        {
            try
            {
                RunAsync().Wait();
            }
            finally
            {
                runCompleteEvent.Set();
            }
        }

        /// <summary>
        /// Proccess stop logic
        /// </summary>
        public virtual void OnStop()
        {
            try
            {
                TraceLog.WriteLine("{0} Server is stopping, please wait.", DateTime.Now.ToString("HH:mm:ss"));
                ScriptEngines.StopMainProgram();
                GameEnvironment.WaitStop().Wait();
                TraceLog.WriteLine("{0} Server has stoped successfully!", DateTime.Now.ToString("HH:mm:ss"));
            }
            catch (Exception ex)
            {
                TraceLog.WriteError("OnStop error:{0}", ex);
            }
        }

        /// <summary>
        /// Set stop
        /// </summary>
        public void Stop()
        {
            GameEnvironment.IsCanceled = true;
            WaitRunComplated();
            OnStop();
        }

        /// <summary>
        /// 
        /// </summary>
        public void WaitRunComplated()
        {
            runCompleteEvent.WaitOne();
        }
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        protected virtual async System.Threading.Tasks.Task RunAsync()
        {
            try
            {
                ////MainClass MainInstance = new MainClass();
                ////MainInstance.ReStart();
                TraceLog.WriteLine("{0} Server has started successfully!", DateTime.Now.ToString("HH:mm:ss"));
            }
            catch (Exception ex)
            {
                TraceLog.WriteLine("{0} Server failed to start error:{1}", DateTime.Now.ToString("HH:mm:ss"), ex.Message);
                TraceLog.WriteError("RunMain error:{0}", ex);
            }
            finally
            {
                TraceLog.WriteLine("# Server exit command \"Ctrl+C\" or \"Ctrl+Break\".");
            }

            await RunWait();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        protected async System.Threading.Tasks.Task RunWait()
        {
            while (!GameEnvironment.IsCanceled)
            {
                await System.Threading.Tasks.Task.Delay(1000);
            }
        }
    }
}
