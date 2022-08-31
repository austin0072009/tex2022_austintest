
using System;
using Common.NLog;
using ETModel.Framework.Script;

namespace ETModel.Framework.Game.Command
{
    /// <summary>
    /// 
    /// </summary>
    public class ScriptCommand : BaseCommand
    {
        private readonly string _cmd;

        ///<summary>
        ///</summary>
        public ScriptCommand(string cmd)
        {
            _cmd = cmd;
        }
        /// <summary>
        /// Processes the cmd.
        /// </summary>
        /// <param name="args">Arguments.</param>
        protected override void ProcessCmd(string[] args)
        {
            string routeName = string.Format("Gm.{0}", _cmd);
            dynamic scriptScope = ScriptEngines.Execute(routeName, null);
            if (scriptScope != null)
            {
                try
                {
                    scriptScope.processCmd(UserID, args);
                }
                catch (Exception ex)
                {
                    TraceLog.WriteError("Gm:{0} process error:{1}", _cmd, ex);
                }
            }
        }
    }
}