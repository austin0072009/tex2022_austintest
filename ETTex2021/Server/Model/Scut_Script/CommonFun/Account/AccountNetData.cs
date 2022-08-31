using System;
using System.Collections.Generic;
using ETModel.Framework.Game.Contract.Action;

namespace ETModel.Script.CsScript.Action
{

    public class cs_getexiste_openid : cs_base
    {
        public string openid;
        public bool _istrueWeiXin;
    }

    public class sc_getexiste_openid : sc_base
    {
        public bool _existe;
        public string _pid;
    }


    public class cs_device : cs_base
    {
        public int MobileType;
        public int GameID;
        public string RetailID;
        public string ClientAppVersion;
        public string DeviceID;
        public int ScreenX;
        public int ScreenY;
        public int ServerID;
        public string _openid;
        public string _unionid;
    }

    public class sc_device : sc_base
    {
        public string passportid;
        public string password;
    } 
   
     
    public class cs_ping : cs_base
    {

    }  
    public class sc_ping : sc_base
    {
        public int fps;
    }


    public class cs_loginac : cs_base
    {
        public string PassportId;
        /// <summary>
        /// The password.
        /// </summary>
        public string Password;
        /// <summary>
        /// The device I.
        /// </summary>
        public string DeviceID;
        /// <summary>
        /// 当OPENID
        /// </summary>
        public string retailUser;
        /// <summary>
        /// The screen x.
        /// </summary>
        public int ScreenX;
        /// <summary>
        /// The screen y.
        /// </summary>
        public int ScreenY;
        /// <summary>
        /// The retail I.
        /// </summary>
        public string RetailID;
        /// <summary>
        /// The type of the user.
        /// </summary>
        public int UserType;
        /// <summary>
        /// The server I.
        /// </summary>
        public int ServerID;
        /// <summary>
        /// The type of the game.
        /// </summary>
        public int GameType;
        public string wechatename;
        public string wechathead;

        /// <summary>
        /// 玩家ip
        /// </summary>
        public string IP = "";
    }

    public class sc_loginac : sc_base
    {
        public string SessionId;
        public int UserId;
        public int UserType;
        public string LoginTime;
        public int GuideID;
        public string PassportId;
        public string refresh_token;
        public string scope;
        public string phone;
        /// <summary>
        /// 邀请码
        /// </summary>
        public string aCode;
    }

}
