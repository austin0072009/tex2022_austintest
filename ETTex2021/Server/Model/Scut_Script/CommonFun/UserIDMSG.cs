using ETModel.Framework.Common.Serialization;
using ETModel.Framework.Game.Contract.Action;

namespace ETModel.Script.CsScript.Action
{

    public class UserIDMSG 
    {
        public UserIDMSG(int  userid, object senddata, bool robot, bool disconnect, bool _fw = false)
        {
            _userid = userid;
            _senddata = senddata;
            _isrobot = robot;
            _isDisconnect = disconnect;
            _forcewait = _fw;
        }
        public UserIDMSG(int userid, object data, bool robot, bool disconnect, long msgid)
        {
            _userid = userid;
            sc_base sc = (sc_base)data;
            sc._msgid = (int)msgid;
            //string senddata = JsonUtils.Serialize(data);
            _senddata = data;
            _isrobot = robot;
            _isDisconnect = disconnect;
        }
        public int _userid;
        public object _senddata;
        public bool _isrobot;
        /// <summary>
        /// 掉线的人，不发数据
        /// </summary>
        public bool _isDisconnect;

        /// <summary>
        /// 此协议发送后强制等0.01秒再推后面的消息
        /// </summary>
        public bool _forcewait;
    }

    /// <summary>
    /// 坐标
    /// </summary>
    public class PointSlotEx
    {
        /// <summary>
        /// 行坐标
        /// </summary>
        public int x;

        /// <summary>
        /// 列坐标
        /// </summary>
        public int y;
        /// <summary>
        /// 默认构造函数
        /// </summary>
        public PointSlotEx()
        {
            this.x = 0;
            this.y = 0;
        }
        /// <summary>
        /// 默认构造函数
        /// </summary>
        public PointSlotEx(int x, int y)
        {
            this.x = x;
            this.y = y;
        }
        public override bool Equals(object obj)
        {
            PointSlotEx p = obj as PointSlotEx;
            //按需求定制自己需要的比较方式
            return (this.x == p.x && this.y == p.y);
        }

        public override int GetHashCode()
        {
            return this.x.GetHashCode();
        } 
    }
}