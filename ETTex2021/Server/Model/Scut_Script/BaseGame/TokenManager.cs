using System;
using System.Collections.Concurrent;
using System.Collections.Generic;

namespace ETModel.Script.CsScript.Action
{
    public class TokenManager
    {

        public TokenManager()
        {
            _dicToken = new ConcurrentDictionary<int, TokenData>();
        }
        private static TokenManager _instBase = null;

        /// <summary>
        /// 
        /// </summary>
        public static TokenManager instanceBase
        {
            get
            {
                if (_instBase == null) _instBase = new TokenManager();
                return _instBase;
            }
        }
        
        /// <summary>
        /// token
        /// </summary>
        protected ConcurrentDictionary<int, TokenData> _dicToken = new ConcurrentDictionary<int, TokenData>();


        public void AddToken(int uid, string token)
        {
            if (IsExist(uid))
            {
                _dicToken[uid].Token = token;
                _dicToken[uid].expiretime = DateTime.Now.AddDays(1);
                _dicToken[uid].NoVali = 1;
            }
            else
            {
                _dicToken.Add(uid, new TokenData() { expiretime = DateTime.Now.AddDays(1), Token = token,NoVali = 1});
            }
        }


        public bool NeedVali(int uid)
        {
            if (IsExist(uid))
            {
                if (_dicToken[uid].NoVali > 0)
                {
                    return false;
                }
                else
                {
                    return true;
                }
            }
            else
            {
                return true;
            }
        }

        public bool TokenVali(int uid,string token)
        {
            if (IsExist(uid))
            {
                if (_dicToken[uid].Token.Equals(token) && _dicToken[uid].expiretime > DateTime.Now)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            else
            {
                return false;
            }
        }


        public string GetToken(int uid)
        {
            if (_dicToken.ContainsKey(uid))
            {
                _dicToken[uid].NoVali = 0;
                return _dicToken[uid].Token;
            }
            else return "";
        }


        public void DeleteToken(int uid)
        {
            _dicToken.Remove(uid);
        }
        public bool IsExist(int uid)
        {
           return _dicToken.ContainsKey(uid);
        }


    }

    public class TokenData
    {
        public string Token { get; set; }

        public int NoVali { get; set; }

        public DateTime expiretime { get; set; }
    }
}
