////using ETModel.Framework.Common;
////using ETModel.Framework.Game.Cache;

////namespace ETModel.Framework.Game.Message
////{
////    /// <summary>
////    /// 聊天服务
////    /// </summary>
////    public abstract class ChatService
////    {
////        private readonly int _userId;
////        private readonly ChatCacheSet _chatCacheSet;
////        private readonly WhisperCacheSet _whisperCacheSet;
////        private static readonly VersionConfig VersionSet = new VersionConfig();

////        /// <summary>
////        /// 取下一个版本号
////        /// </summary>
////        public static int NextVersion
////        {
////            get
////            {
////                return VersionSet.NextId;
////            }
////        }
////		/// <summary>
////		/// Initializes a new instance of the  class.
////		/// </summary>
////		/// <param name="userId">User identifier.</param>
////        protected ChatService(int userId)
////        {
////            _userId = userId;
////            _chatCacheSet = new ChatCacheSet();
////            _whisperCacheSet = new WhisperCacheSet();
////        }
////		/// <summary>
////		/// Gets the curr version.
////		/// </summary>
////		/// <value>The curr version.</value>
////        public int CurrVersion
////        {
////            get
////            {
////                return VersionSet.Id;
////            }
////        }
		       

////    }
////}