
using System;
using ProtoBuf;
using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Game.Cache;
using ETModel.Framework.Model;

namespace ETModel.Framework.Game.Context
{
    /// <summary>
    /// 游戏角色
    /// </summary>
    [Serializable, ProtoContract]
    public abstract class BaseUser : BaseEntity
    {
        /// <summary>
        /// Initializes a new instance.
        /// </summary>
        protected BaseUser()
        {
        }
        /// <summary>
        /// Initializes a new instance.
        /// </summary>
        /// <param name="access">Access.</param>
        protected BaseUser(AccessLevel access)
            : base(access)
        {
        }


        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public abstract int GetUserId();
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public abstract string GetNickName();
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public abstract string GetPassportId();
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public abstract string GetRetailId();
    }
}