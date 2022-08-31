
using System;
using ProtoBuf;

namespace ETModel.Framework.Model
{
    /// <summary>
    /// 私有实体基类
    /// </summary>
    [ProtoContract, Serializable]
    public abstract class BaseEntity : AbstractEntity, IComparable<BaseEntity>
    {
        /// <summary>
        /// 
        /// </summary>
        protected BaseEntity()
        {

        }
		/// <summary>
		/// Initializes a new instance of the <see cref="ETModel.Framework.Model.BaseEntity"/> class.
		/// </summary>
		/// <param name="isReadonly">If set to <c>true</c> is readonly.</param>
        protected BaseEntity(bool isReadonly)
            : base(isReadonly)
        {

        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="access"></param>
        protected BaseEntity(AccessLevel access)
            : base(access)
        {
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="other"></param>
        /// <returns></returns>
        public virtual int CompareTo(BaseEntity other)
        {
            return base.CompareTo(other);
        }

    }
}