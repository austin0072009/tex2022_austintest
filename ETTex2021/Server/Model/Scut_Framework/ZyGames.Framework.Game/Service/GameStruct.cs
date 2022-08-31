using ETModel.Framework.Game.Contract;
using System;

namespace ETModel.Framework.Game.Service
{

    /// <summary>
    /// BaseStruct 的摘要说明
    /// </summary>
    public abstract class GameStruct
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="aActionId"></param>
        protected GameStruct(int aActionId)
        {
            this.actionId = aActionId;
        }

        /// <summary>
        /// 接收ET消息在此
        /// </summary>
        public void ReceiveData()
        { 
        
        }

        /// <summary>
        /// string类型  发送给ET消息在些封闭 中转
        /// </summary>
        /// <param name="obj"></param>
        public void PushIntoStack(string obj)
        {
            //dataStruct.PushIntoStack(obj);
            //BaseSendDataServer();
        }

        /// <summary>
        /// 初始化Action
        /// </summary>
        protected void InitAction()
        { 
        }
          
        /// <summary>
        /// 当前游戏会话
        /// </summary>
        public GameSession Current { get; internal set; }

        /// <summary>
        /// 
        /// </summary>
        public int UserId
        {
            get
            {
                return Current != null ? Current.UserId : 0;
            }
        }
        /// <summary>
        /// ActionID，接口编号
        /// </summary>
        protected int actionId;

        /// <summary>
        /// 本次登录SessionID句柄
        /// </summary>
        protected string Sid;
        /// <summary>
        /// 是否是错误的URL请求串
        /// </summary>
        private bool IsError = false;
        /// <summary>
        /// 是否影响输出, True：不响应
        /// </summary>
        protected bool IsNotRespond;

        /// <summary>
        /// 请求上来的消息编号，主动下发编号为0
        /// </summary>
        protected int MsgId = 0;

        /// <summary>
        ///  时间戳
        /// </summary>
        protected string St = "st";

        /// <summary>
        /// 返回Action是否为ErrorAction
        /// </summary>
        /// <returns></returns>
        public bool GetError()
        {
            return IsError;
        }
        private string errorInfo = string.Empty;
        /// <summary>
        /// 获取或设置错误信息
        /// </summary>
        public String ErrorInfo
        {
            get
            {
                return errorInfo;
            }
            set
            {
                errorInfo = value;
            }
        }

        private int errorCode = 0;
        /// <summary>
        /// 获取或设置错误信息
        /// </summary>
        public int ErrorCode
        {
            get
            {
                return errorCode;
            }
            set
            {
                if (errorCode != 0)
                {
                    IsError = true;
                }
                errorCode = value;
            }
        }

       
        /// <summary>
        /// Write response
        /// </summary>
        public virtual void WriteResponse(BaseGameResponse response)
        {
            
        } 
       

        /// <summary>
        /// ReadUrlElement
        /// </summary>
        /// <returns></returns>
        public abstract bool ReadUrlElement();
        /// <summary>
        /// 接收用户请求的参数，并根据相应类进行检测
        /// </summary>
        /// <returns></returns>
        public abstract bool GetUrlElement();
        /// <summary>
        /// 响应动作类
        /// </summary>
        public abstract bool DoAction();

        /// <summary>
        /// 创建返回协议内容输出栈
        /// </summary>
        public virtual void BuildPacket()
        {

        }

       
    }
}