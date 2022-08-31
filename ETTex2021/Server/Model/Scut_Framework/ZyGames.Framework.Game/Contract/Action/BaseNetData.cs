namespace ETModel.Framework.Game.Contract.Action
{

    public class cs_base
    {
        /// <summary>
        /// 函数名
        /// </summary>
        public string fn = "";
        /// <summary>
        /// 可能为0，游戏的协议使用对应游戏ID
        /// </summary>
        public int _g;
        /// <summary>
        /// 客服端要的值 不做任何处理直接返回去
        /// </summary>
        public int cc = 0;
        public cs_base() { fn = GetType().Name; }
    }

    public class sc_base
    {
        /// <summary>
        /// 函数名
        /// </summary>
        public string fn = "";
        public int _msgid;
        public int cc = 0;
        /// <summary>
        /// 1.成功 0失败 -1具体原因。 
        /// </summary>
        public int result;
        /// <summary>
        /// 返回信息
        /// </summary>
        public string message;
        public sc_base()
        {
            fn = GetType().Name;
        }
    }
    public class sc_offline_n :sc_base
    {

    }
    /// <summary>
    /// 创建角色的网络数据结构
    /// </summary>
    public class cs_create1005 : cs_base
    {
        /// <summary>
        /// 
        /// </summary>
        public string RetailID;// 
        /// <summary>
        /// 
        /// </summary>
        public string Pid;// 
        /// <summary>
        /// 
        /// </summary>
        public int MobileType;//  
        /// <summary>
        /// 
        /// </summary>
        public string ClientAppVersion;//  
        /// <summary>
        /// 
        /// </summary>
        public int GameID;// 
        /// <summary>
        /// 
        /// </summary>
        public string ServerID;//   
        /// <summary>
        /// 
        /// </summary>
        public int _Sex;         
        /// <summary>
        /// 
        /// </summary>
        public string NickName = string.Empty;    
        /// <summary>
        /// 
        /// </summary>
        public string ActiveCode = string.Empty;        
        /// <summary>
        /// 
        /// </summary>
        public string HeadID = string.Empty;

        /// <summary>
        /// 玩家ip
        /// </summary>
        public string IP = "";
    }
    public class sc_create1005 : sc_base
    { }

    /// <summary>
    /// 返回结构用
    /// </summary>
    public struct int_str
    {
        public int val1;
        public string val2;
    }

    public class cs_robotcontrol : cs_base
    {
        public int gameid;
        public int levelid;
        public int mode;//0:更新配置，1:打印日志 2:清除日志缓存
    }
}