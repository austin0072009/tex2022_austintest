using ETModel.Framework.Common;

namespace ETModel.Framework.Game.Service
{
    /// <summary>
    /// Base struct.
    /// </summary>
    public abstract class BaseStruct : GameStruct
    {       

        /// <summary>
        /// 构造函数
        /// </summary>
        /// <param name="aActionId"></param>
        /// <param name="actionGetter"></param>
        protected BaseStruct(int aActionId, ActionGetter actionGetter) :
            base(aActionId)
        {
            actionId = aActionId; 
        }

        /// <summary>
        /// 子类实现
        /// </summary>
        protected virtual void InitChildAction()
        {
        }

        /// <summary>
        /// 
        /// </summary>
        public void DoInit()
        { 
            InitAction();
            InitChildAction();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="response"></param>
        /// <param name="errorTarget"></param>
        /// <param name="waitTimeOutNum"></param>
        /// <param name="isWriteInfo"></param>
        public void WriteLockTimeoutAction(BaseGameResponse response, object errorTarget, long waitTimeOutNum, bool isWriteInfo = true)
        {
            
        }

        /// <summary>
        /// 子类实现Action处理
        /// </summary>
        /// <returns></returns>
        public abstract bool TakeAction();

        /// <summary>
        /// 处理结束执行
        /// </summary>
        public virtual void TakeActionAffter(bool state)
        {
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public virtual bool CheckAction()
        {
            return true;
        }

        /// <summary>
        /// 执行Action处理
        /// </summary>
        /// <returns></returns>
        public override bool DoAction()
        {
            bool result;
            if (!CheckAction())
            {
                return false;
            }
            result = TakeAction();
            TakeActionAffter(result);

            return result;
        }

        /// <summary>
        /// 读取Url参数
        /// </summary>
        /// <returns></returns>
        public override bool ReadUrlElement()
        {
            //调整加锁位置
            bool result = false;  
            return result;
        }

        /// <summary>
        /// get url parameter
        /// </summary>
        /// <returns></returns>
        public override bool GetUrlElement()
        {
            return true;
        }   

        /// <summary>
        /// 刷新时间缀
        /// </summary>
        protected virtual void RefleshSt()
        {
            St = MathUtils.UnixEpochTimeSpan.TotalSeconds.ToCeilingInt().ToString();
        }

        /// <summary>
        /// 较验参数
        /// </summary>
        /// <returns></returns>
        protected virtual bool ValidateElement()
        {
            return true;
        }

        /// <summary>
        /// 是否此请求忽略UID参数
        /// </summary>
        /// <returns></returns>
        protected virtual bool IsIgnoreUid()
        {
            return false;
        } 

    }
}