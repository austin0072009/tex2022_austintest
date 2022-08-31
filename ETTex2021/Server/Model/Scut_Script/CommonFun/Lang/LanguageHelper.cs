
using System;
using System.Collections.Generic;
using ETModel.Framework.Game.Lang;

namespace ETModel.Script.CsScript.Action
{
	/// <summary>
	/// Lang enum.
    /// </summary>
    [Obsolete]
    public enum LangEnum
    {
        /// <summary>
        /// 值=0 中文
        /// </summary>
        ZH_CN,
        /// <summary>
        /// 值=1 英文
        /// </summary>
        EN_US,
        /// <summary>
        /// 值=2 繁体
        /// </summary>
        BIG5_TW,
        /// <summary>
        /// 值=3 韩文
        /// </summary>
        KOREAN
    }

    /// <summary>
    /// 多语言
    /// </summary>
    [Obsolete("Use Language.Instance call.")]
    public class LanguageHelper
    {
        private static object thisLock = new object();
        private static Dictionary<LangEnum, ILanguage> _langTable = new Dictionary<LangEnum, ILanguage>();
        private static LangEnum _langEnum;

        static LanguageHelper()
        {
            _langEnum = LangEnum.ZH_CN;
        }
		/// <summary>
		/// Sets the lang.
		/// </summary>
		/// <param name="lang">Lang.</param>
        public static void SetLang(LangEnum lang)
        {
            lock (thisLock)
            {
                _langEnum = lang;
            }
        }
		/// <summary>
		/// Gets the lang.
		/// </summary>
		/// <returns>The lang.</returns>
        public static ILanguage GetLang()
        {
            return GetLang(_langEnum);
        }
		/// <summary>
		/// Gets the lang.
		/// </summary>
		/// <returns>The lang.</returns>
		/// <param name="langEnum">Lang enum.</param>
        public static ILanguage GetLang(LangEnum langEnum)
        {
            ILanguage lang = null;
            if (!_langTable.ContainsKey(langEnum))
            {
                lock (thisLock)
                {
                    if (!_langTable.ContainsKey(langEnum))
                    {
                        switch (langEnum)
                        {
                            case LangEnum.ZH_CN:
                                _langTable.Add(langEnum, new BaseZHLanguage());
                                break;
                            case LangEnum.BIG5_TW:
                                _langTable.Add(langEnum, new BaseBIG5Language());
                                break;
                            case LangEnum.EN_US:
                                _langTable.Add(langEnum, new BaseENLanguage());
                                break;
                            default:
                                _langTable.Add(langEnum, new BaseZHLanguage());
                                break;
                        }
                    }
                }
            }
            lang = _langTable[langEnum];
            return lang;
        }
    }
}