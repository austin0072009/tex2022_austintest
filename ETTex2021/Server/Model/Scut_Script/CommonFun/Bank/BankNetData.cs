using System.Collections.Generic;

using ETModel.Framework.Game.Contract.Action;

namespace ETModel.Script.CsScript.Action
{
    
    /// <summary>
    /// 获取银行信息
    /// </summary>
    public class cs_getbank_bk : cs_base
    {
    }
    /// <summary>
    /// 进入银行
    /// </summary>
    public class cs_enterbank_bk : cs_base
    {
        /// <summary>
        /// 银行密码
        /// </summary>
        public string pwd;
    }

    /// <summary>
    /// 进入银行返回
    /// </summary>
    public class sc_enterbank_bk : sc_base
    {
        /// <summary>
        /// 用户金币
        /// </summary>
        public int gold;

        /// <summary>
        /// 银行金币
        /// </summary>
        public long bankGold;

        /// <summary>
        /// 银行操作记录
        /// </summary>
        public List<banklog> log;
    }

    /// <summary>
    /// 银行操作记录
    /// </summary>
    public class banklog
    {
        /// <summary>
        /// 操作时间
        /// </summary>
        public string OpDate;

        /// <summary>
        /// 操作类型 1转入银行 2backgold
        /// </summary>
        public int OpType;

        /// <summary>
        /// 操作金额
        /// </summary>
        public int OpCount;
        /// <summary>
        /// 转账对象
        /// </summary>
        public int ToUserID;
    }

    /// <summary>
    /// 操作银行
    /// </summary>
    public class cs_opBank_bk : cs_base
    {
        /// <summary>
        /// 操作金额
        /// </summary>
        public int OpCount;

        /// <summary>
        /// 操作类型 1转入银行 2backgold 3:转账
        /// </summary>
        public int OpType;
    }


    /// <summary>
    /// 进入银行返回
    /// </summary>
    public class sc_opBank_bk : sc_base
    {
        /// <summary>
        /// 用户金币
        /// </summary>
        public int gold;

        /// <summary>
        /// 银行金币
        /// </summary>
        public long bankGold;

        /// <summary>
        /// 银行操作记录
        /// </summary>
        public List<banklog> log;

        /// <summary>
        /// 错误提醒
        /// </summary>
        public string msg;
    }

    /// <summary>
    /// 操作银行
    /// </summary>
    public class cs_opBankPwd_bk : cs_base
    {
        /// <summary>
        /// 操作金额
        /// </summary>
        public int OpCount;

        /// <summary>
        /// 操作类型 1转入银行 2backgold 3:转账
        /// </summary>
        public int OpType;
        /// <summary>
        /// 银行密码
        /// </summary>
        public string pwd;
        /// <summary>
        /// 转账目标
        /// </summary>
        public int toUserID;
    }


    /// <summary>
    /// 手机验证码
    /// </summary>
    public class getVerificationCode : cs_base
    {
        /// <summary>
        /// 手机号码
        /// </summary>
        public string mobilePhoneNum;

    }

    /// <summary>
    /// 初始化密码
    /// </summary>
    public class cs_changePassword_bk : cs_base
    {
        /// <summary>
        /// 新密码
        /// </summary>
        public string newPassWord;

    }

    /// <summary>
    /// 修改密码
    /// </summary>
    public class sc_changePassword_bk : sc_base
    {
    }

    /// <summary>
    /// 修改密码
    /// </summary>
    public class cs_changePassword_appbk : cs_base
    {
        /// <summary>
        /// 旧密码
        /// </summary>
        public string oldPassWord;

        /// <summary>
        /// 新密码
        /// </summary>
        public string newPassWord;
    }

    /// <summary>
    /// 修改密码
    /// </summary>
    public class sc_changePassword_appbk : sc_base
    {
    }

    /// <summary>
    /// 银行卡类型
    /// </summary>
    public class CardTypeDTO
    {
        /// <summary>
        /// 银行名称
        /// </summary>
        public string BankName;

        /// <summary>
        /// 卡类型
        /// </summary>
        public string CardType;

        /// <summary>
        /// bin码
        /// </summary>
        public string BinCode;
    }

    /// <summary>
    /// 手机验证码
    /// </summary>
    public class cs_SMS_Verification : cs_base
    {
        /// <summary>
        /// 手机验证码
        /// </summary>
        public string phoneNum;

    }

    /// <summary>
    /// 手机验证码
    /// </summary>
    public class sc_SMS_Verification : sc_base
    {
    }
    /// <summary>
    /// 获取绑定的手机号码
    /// </summary>
    public class cs_mobilephonenum : cs_base
    {

    }

    public class sc_bindalipaybank : sc_base
    {


    }

    public class cs_bindalipaybank : cs_base
    {
        /// <summary>
        /// 1绑定支付宝   2绑定银行卡
        /// </summary>
        public int t;

        /// <summary>
        /// 玩家id
        /// </summary>
        public int uid;

        /// <summary>
        /// 支付宝姓名  或  银行卡持有人
        /// </summary>
        public string name;

        /// <summary>
        /// 支付宝账号 银行卡卡号
        /// </summary>
        public string account;


        /// <summary>
        /// 银行名字
        /// </summary>
        public string bank;

        /// <summary>
        /// 国家
        /// </summary>
        public string country;

        /// <summary>
        /// 开户支行
        /// </summary>
        public string branch;

        /// <summary>
        /// 交易密码
        /// </summary>
        public string pwd;
        /// <summary>
        /// 开户行所在省份
        /// </summary>
        public string province;
    }  

    /// <summary>
    /// 获取绑定的手机号码  和最后一次充值的姓名、卡
    /// </summary>
    public class sc_mobilephonenum : sc_base
    {
        /// <summary>
        /// 绑定的手机号码
        /// </summary>

        public string UserCard;//充值账户
        public string uName;//真正姓名

        public string bId;//银行账号//bank
        public string bPhone;//银行手机号
        public string bName;//持卡人名
        /// <summary>
        /// 银行名字
        /// </summary>
        public string bank;



        public string aId;//支付宝账号//alipay
        public string aPhone;//支付宝手机号

        /// <summary>
        /// 是否设置过交易密码  1是      0否
        /// </summary>
        public int pwd;

    }
}
