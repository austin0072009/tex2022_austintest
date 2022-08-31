using ETModel.Script.Model;
using System;
using System.Collections.Generic;
using ETModel.Framework.Game.Contract.Action;

namespace ETModel.Script.CsScript.Action
{
    #region  邮件系统
    /// <summary>
    /// 获取邮件列表
    /// </summary>
    public class cs_getemaillist : cs_base
    {
        /// <summary>
        /// 
        /// </summary>
        public int emailType;
    }

    public class sc_getemaillist : sc_base
    {
        public List<EmailinfoSD> emaillist;
    }
    public class EmailinfoSD
    {
        public string tradeno;
        public string title;
        public string content;
        public string _time;
        /// <summary>
        /// 状态，0没有附件，1有附件，2附件已领取
        /// </summary>
        public int _state;
        public MailTypeEnum _type;
        /// <summary>
        /// 附件
        /// </summary>
        public List<Attach> attach;
        /// <summary>
        /// 交易内容状态，0失败，1成功
        /// </summary>
        public int _cstate;
        /// <summary>
        /// 是否已查看
        /// </summary>
        public bool islook;
        /// <summary>
        /// 发件人ID
        /// </summary>
        public int fromUserid;

        /// <summary>
        /// 收件人  可能是0
        /// </summary>
        public int ToUserId;
        /// <summary>
        /// 发件人名称
        /// </summary>
        public string fromUserName;
    }
    public class Attach
    {
        public int ItemID;
        public int Num;
        public string url;
    }

    /// <summary>
    /// 发送邮件
    /// </summary>
    public class cs_sendemail : cs_base
    {
        /// <summary>
        /// 金币数量
        /// </summary>
        public long _gold;
        /// <summary>
        /// 钻石数量
        /// </summary>
        public long _diamond;
        public string _title;
        public string _content;
        public int _toUsesID;
    }
    public class sc_sendemail : sc_base
    { }

    /// <summary>
    /// 领取邮件附件的        
    /// </summary>
    public class cs_receiveemail : cs_base
    {
        public string tradeno;
    }

    public class sc_receiveemail : sc_base
    {
        public List<Attach> attaches;
        public long gold;
        public long totalgold;
        public long totaldiamond;
    }

    public class sc_pushevent_n : sc_base
    {
        public int Type;
    }

    public class sc_pushcoin_n : sc_base
    {
        public long curCoin;
        public float curDiamond;
    }
    
    /// <summary>
    /// 删除邮件
    /// </summary>
    public class cs_removeEmail : cs_base
    {
        public string tradeNo;

        /// <summary>
        /// 收件人  可能是0
        /// </summary>
        public int ToUserId;

    }
    /// <summary>
    /// -1 邮件不存在  -2系统邮件不可删除。默认保留7天
    /// </summary>
    public class sc_removeEmail : sc_base
    {
       
    }



    /// <summary>
    /// 设置邮件状态为已读
    /// </summary>
    public class cs_setemailstate : cs_base
    {
        public string tradeNo;
    }

    public class sc_setemailstate : sc_base
    {

    }


    /// <summary>
    /// 设置邮件状态为已读
    /// </summary>
    public class cs_gettradelog : cs_base
    {
        public int count;
    }

    public class sc_gettradelog : sc_base
    {
        public List<tradelogsd> loglist;
    }

    public class tradelogsd
    {
        public int fuid;
        public int touid;
        public long gold;
        public long tax;
        public string time;
    }

    #endregion

    #region 金币赠送系统
    /// <summary>
    ///  索要赠送请求
    /// </summary>
    [Serializable]
    public class cs_sendgoldtrade : cs_base
    {
        public int objuserid;      //目标用户
        /// <summary>
        /// 金额
        /// </summary>
        public int Gold;
        /// <summary>
        /// true为索要，false为增送
        /// </summary>
        public bool IsGet;
    }
    /// <summary>
    /// 索要赠送请求返回 
    /// result 1:可以扣款，2 余额不足不能扣款,-1 用户账号不存在，-2给自己赠送金，-3账号异常（作弊号不能backgold）,-4用户拒绝接收金币,-5用户不在线
    /// </summary>
    [Serializable]
    public class sc_sendgoldtrade : sc_base
    {
        public int objuserid;      //目标用户
        public string objusername;  //目标用户昵称

        /// <summary>
        /// 微信头像ICON
        /// </summary>
        public string objuserwicon;
    }
    /// <summary>
    /// 索要赠送服务器主动推送消息//result 1:可以扣款，2 余额不足不能扣款,-1 用户账号不存在，-2给自己赠送金，-3账号异常（作弊号不能backgold）,-4用户拒绝接收金币,-5用户不在线
    /// </summary>
    [Serializable]
    public class sc_sendgoldtrade_n : sc_base
    {
        public int objuserid;      //目标用户
        public string objusername;  //目标用户昵称
        /// <summary>
        /// 交易金币
        /// </summary>
        public float Gold;
        /// <summary>
        /// true为索要，false为增送
        /// </summary>
        public bool IsGet;
    }

    /// <summary>
    /// 确认赠送金币
    /// </summary>
    [Serializable]
    public class cs_dealgoldtrade : cs_base
    {
        public int objuserid;      //目标用户

        public float Gold;        //交易金币
        public int Save; //0 保存身上 1：保存银行
        /// <summary>
        /// 银行密码
        /// </summary>
        public string bankPassWord;
    }

    /// <summary>
    /// 确认接收赠送金币返回 //result 1:可以扣款，2 余额不足不能扣款,-1 用户账号不存在，-2给自己赠送金，-3账号异常（作弊号不能backgold）,-4用户拒绝接收金币,-5用户不在线
    /// </summary>
    [Serializable]
    public class sc_dealgoldtrade : sc_base
    {
        /// <summary>
        /// 返回结果
        /// </summary>
        public string Msg;
    }

    [Serializable]
    public class sc_userGoldChangeLog : sc_base
    {
        /// <summary>
        /// 返回结果
        /// </summary>
        public List<goldchangelogInfo> GoldChangeLog;
    }

    public class sc_UserDiamondsLog : sc_base
    {
        /// <summary>
        /// 返回结果
        /// </summary>
        public List<DiamondLogInfo> DiamondLog;
    }


    /// <summary>
    /// 确认接收赠送金币推送返回 //result 1:可以扣款，2 余额不足不能扣款,-1 用户账号不存在，-2给自己赠送，-3账号异常（作弊号不能backgold）,-4用户拒绝接收金币,-5用户不在线
    /// </summary>
    [Serializable]
    public class sc_dealgoldtrade_n : sc_base
    {
        public int objuserid;      //对方用户
        public string objusername;  //对方用户昵称
        /// <summary>
        /// 交易金币
        /// </summary>
        public float Gold;
    }
    public class cs_searchgoldornickname:cs_base
    {
        public int userid;
    }

    public class sc_searchgoldornickname : sc_base
    {
        public long gold;
        public string nickname;
    }

    public class cs_getgoldlog : cs_base
    {
        public int pageIndex;
        public int pageSize;
        public int pageCount;
    }

    public class sc_getgoldlog : sc_base
    {
        public int pageIndex;
        public int pageSize;
        public int pageCount;
        public int recordCount;
        public int userid;
        /// <summary>
        /// 1为自己送的   2为接收的
        /// </summary>
        public int gettype;
        public List<GiveEntitySD> EntityList;
    }
    public class GiveEntitySD
    {
        public string TradeNo;


        public string FromUserName;

        public int FromUserId;

        public int ToUserId;
        /// <summary>
        /// ，1交易，2系统,3 个人
        /// </summary>
        public int MailType;
        public string Content;
        /// <summary>
        /// 交易内容状态，0失败，1成功  2撤销
        /// </summary>
        public int CState;

        /// <summary>
        /// 是否已经查看 或者 表示领取
        /// </summary>
        public bool IsLook;
        /// <summary>
        /// 邮件类型0 个人邮件 1 系统邮件
        /// </summary>
        public int EmailType;
        public string Title;
        public string CreateDate;
        /// <summary>
        /// 金币
        /// </summary>
        public long Coin;
        /// <summary>
        /// 钻石
        /// </summary>
        public long Diamond;
    }
    #endregion
}
