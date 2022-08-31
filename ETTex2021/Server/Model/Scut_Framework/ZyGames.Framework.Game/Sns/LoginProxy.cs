
using System;
using System.Collections.Generic;
using ETModel.Framework.Common;
using ETModel.Framework.Common.Reflect;
using ETModel.Framework.Game.Configuration;
using ETModel.Framework.Game.Service;

namespace ETModel.Framework.Game.Sns
{
    /// <summary>
    /// 登录代理
    /// </summary>
    public class LoginProxy
    {
        private const string DefaultArgs = "Pid,Pwd,DeviceID";

        private LoginProxy()
        {
        }

        /// <summary>
        /// Gets the login.
        /// </summary>
        /// <returns>The login.</returns>
        public static ILogin GetLogin(ActionGetter httpGet, string retaiId)
        {
            return GetLogin(retaiId, httpGet);
        }

        /// <summary>
        /// Gets the login.
        /// </summary>
        /// <param name="retaiId"></param>
        /// <param name="obj">sdk json object of request or ActionGetter object</param>
        /// <returns></returns>
        public static ILogin GetLogin(string retaiId, object obj)
        {
            if (string.IsNullOrEmpty(retaiId))
            {
                return null;
            }
            object[] args = new object[0];
            string typeName = string.Format("{0}.Sns.Login36you,{0}", "ETModel.Framework.Game");

            bool hasRetail = false;
            if (ZyGameBaseConfigManager.GameSetting.HasSetting)
            {
                var loginSetting = ZyGameBaseConfigManager.GameSetting.GetLoginSetting(retaiId);
                if (loginSetting != null)
                {
                    typeName = loginSetting.TypeName.Contains(",")
                        ? loginSetting.TypeName
                        : string.Format("{0}.Sns.{1},{0}", "ETModel.Framework.Game", loginSetting.TypeName);
                    args = GetArgs(loginSetting.TypeArgs, obj);
                    hasRetail = true;
                }
            }
            else
            {
                var loginSection = ZyGameBaseConfigManager.GetLogin();
                if (loginSection != null)
                {
                    var retail = loginSection.RetailList[retaiId];
                    if (retail != null)
                    {
                        typeName = retail.TypeName.Contains(",")
                            ? retail.TypeName
                            : string.Format("{0}.Sns.{1},{0}", "ETModel.Framework.Game", retail.TypeName);
                        args = GetArgs(retail.Args, obj);
                        hasRetail = true;
                    }
                }
            }
            if (!hasRetail)
            {
                args = GetArgs(DefaultArgs, obj);
            }

            var type = Type.GetType(typeName, false, true);
            if (type == null)
            {
                return null;
            }
            return type.CreateInstance<ILogin>(args);
        }

        private static object[] GetArgs(string argsStr, object obj)
        {
            var args = new List<object>();
            string[] paramList = argsStr.Split(',');
            object paramVal = null;
            foreach (string param in paramList)
            {
                var getter = obj as ActionGetter;
                if (getter != null)
                {
                    paramVal = getter.GetString(param);
                }
                else if (obj != null)
                {
                    paramVal = ObjectAccessor.Create(obj, true)[param];
                }
                args.Add(paramVal);
            }
            return args.ToArray();
        }
    }
}