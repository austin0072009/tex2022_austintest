namespace ETModel.Framework.Game.Command
{
    /// <summary>
    /// GM命令基类
    /// </summary>
    public abstract class BaseCommand
    {
        private const string SectionName = "zyGameBase-GM";

     
		/// <summary>
		/// Gets or sets the user I.
		/// </summary>
		/// <value>The user I.</value>
        public string UserID
        {
            get;
            set;
        }
		/// <summary>
		/// Processes the cmd.
		/// </summary>
		/// <param name="args">Arguments.</param>
        protected abstract void ProcessCmd(string[] args);

    }
}