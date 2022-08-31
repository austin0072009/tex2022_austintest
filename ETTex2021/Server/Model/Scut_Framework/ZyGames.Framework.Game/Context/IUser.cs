
using ProtoBuf;
using System;
using ETModel.Framework.Game.Contract;

namespace ETModel.Framework.Game.Context
{
    /// <summary>
    /// IUser
    /// </summary>
    [ProtoContract]
    [ProtoInclude(100, typeof(SessionUser))]
    public interface IUser
    {
        /// <summary>
        /// user's token
        /// </summary>
        string Token { get; set; }
        /// <summary>
        /// 
        /// </summary>
        bool IsReplaced { get; set; }

        /// <summary>
        /// is online
        /// </summary>
        bool IsOnlining { get; }
        /// <summary>
        /// get userid
        /// </summary>
        /// <returns></returns>
        int GetUserId();
        /// <summary>
        /// get passport
        /// </summary>
        /// <returns></returns>
        string GetPassportId();
        /// <summary>
        /// reflesh date
        /// </summary>
        void RefleshOnlineDate();

        /// <summary>
        /// 
        /// </summary>
        /// <param name="time"></param>
        void SetExpired(DateTime time);
    }
}
