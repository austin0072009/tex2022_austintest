using ETModel.Framework.Common.Serialization;
using ETModel.Framework.Game.Contract.Action;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ETModel.Script.CsScript.Action
{
    /// <summary>
    /// 基础通信请求接收后分发          适配以前写法，，，尝试一下先
    /// </summary>
    /// <remarks>继续BaseStruct类:不检查用户合法性请求;AuthorizeAction:有验证合法性</remarks>
    public class ActionReciveSend
    {
        private static CommonLogic _commonLogic = new CommonLogic();
        private static AccountLogic _clogic = new AccountLogic();


        private static List<string> fnlist = new List<string>() { "cs_device", "cs_loginac",  };
        public static async  Task<string> Receive(string _dataEx, string RemoteAddress, int UserId)
        {  
            cs_base _temp = JsonUtils.Deserialize<cs_base>(_dataEx);
            if (_temp == null || _temp.fn == "")
            {
                TraceLogEx.Error(" JSON data error! _dataEx:" + _dataEx);
                return "";
            }

            if (_dataEx == "") return "";

            string _dicUserIdSendData = "";
            string _ipport = "";
            try
            {
                if(fnlist.Contains(_temp.fn))
                {
                    _dicUserIdSendData = await _clogic.DealDataEx(_dataEx, _ipport, ""); 
                }
                else
                {
                    _dicUserIdSendData =await _commonLogic.DealDataEx(_dataEx, RemoteAddress, UserId); 
                } 
            }
            catch (Exception ex)
            { 
                TraceLogEx.Error(ex, " errorloc 201610231256 "); 
            }
            return _dicUserIdSendData;
        }

      
    }
}
