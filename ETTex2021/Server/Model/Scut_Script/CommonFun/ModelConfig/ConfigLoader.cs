using ETModel.Framework.Common.Serialization;
using ETModel.Script.Model;
using System;
using System.Collections.Generic;

namespace ETModel.Script.CsScript.Action
{
    /// <summary>
    /// 配置加载相关操作类 
    /// </summary>
    public static class ConfigLoader
    {
        public static void StartLoadRedis()
        {
            TraceLogEx.directorypath = System.Environment.CurrentDirectory + "/../Logs";
            t_anythingList.LoadDataSync();
            if (t_anythingList.GetInt("task_switch") == 1)
            {
                BaseBrigeHelper.ReLoadBase<ttask>();
                BaseBrigeHelper.ReLoadBase<tusertaskkv>();
                BaseBrigeHelper.ReLoadBase<tusertaskdata>();
                BaseBrigeHelper.ReLoadBase<tTaskCompletionInfo>();
            }

            if (t_anythingList.GetInt("compete_switch") == 1)
            {
                BaseBrigeHelper.ReLoadBase<CompeteModel>();
                BaseBrigeHelper.ReLoadBase<CompeteProperty>();
                BaseBrigeHelper.ReLoadBase<Blindsconfig>();
                BaseBrigeHelper.ReLoadBase<tcompetitionconfig>();
                BaseBrigeHelper.ReLoadBase<tcompete>();
                BaseBrigeHelper.ReLoadBase<tcompeterelation>();
            }
            if (t_anythingList.GetInt("club_switch") == 1)
            {

                BaseBrigeHelper.ReLoad<tclub>();
                BaseBrigeHelper.ReLoad<tcluballiance>();
                BaseBrigeHelper.ReLoad<tclublevel>();
            }

            BaseBrigeHelper.ReLoadBase<tUser>();
            BaseBrigeHelper.ReLoadBase<tuserInfoEx>();
            BaseBrigeHelper.ReLoad<temail>();
            BaseBrigeHelper.ReLoad<tTradeInfo>();
            BaseBrigeHelper.ReLoad<tgameinfo>();
            BaseBrigeHelper.ReLoad<tgamelevelinfo>();
            //BaseBrigeHelper.ReLoadBase<tuseragent2019>();
            BaseBrigeHelper.ReLoadBase<tuseragent2021>();
            BaseBrigeHelper.ReLoadBase<tuseragent2021relation>();
            BaseBrigeHelper.ReLoadBase<tUserJackpot>();
            BaseBrigeHelper.ReLoad<tUserGameHand>();
            BaseBrigeHelper.ReLoad<tCommodity>();
            BaseBrigeHelper.ReLoad<tcollectlog>();
            BaseBrigeHelper.ReLoad<tnotice>();
            BaseBrigeHelper.ReLoad<tjackpot>();
            BaseBrigeHelper.ReLoadBase<trank>();
            BaseBrigeHelper.ReLoad<tjackpotstock>();

            BaseBrigeHelper.ReLoad<tsysconfig>();
            BaseBrigeHelper.ReLoad<textenconfig>();

            CommonRobotManager.instance.InitiRobot();

            ActiveCodeHelper.LocadMap();
        }

        public static void StartLoadForGame()
        {
            TraceLogEx.directorypath = System.Environment.CurrentDirectory + "/../Logs/";
            t_anythingList.LoadDataSync();
            //t_shopbaseList.LoadDataSync();   
        }
        /// <summary>
        /// 仅实现 了AB外部文件夹下的
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="jsonFileName"></param>
        /// <returns></returns>
        public static List<T> LoadJsonListFile<T>(string jsonFileName) where T : class, new()
        {
            byte[] bytearr = LoadBytesSync(jsonFileName);
            if (bytearr == null)
            {
                return null;
                //Debug.LogError(jsonFileName + "-> jsonFileName's content is null.");
            }
            string jsonStr = System.Text.Encoding.UTF8.GetString(bytearr);


            T[] tarr = JsonUtilityEx.getJsonArray<T>(jsonStr);
            if (tarr != null && tarr.Length != 0)
            {
                return new List<T>(tarr);
            }
            return null;
        }
        /// <summary>
        /// 同步加载代码
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        public static byte[] LoadBytesSync(string fileName)
        {
            if (String.IsNullOrEmpty(fileName) || fileName.Contains("\r\n"))
            {
                // Debug.LogError("IO Loader can not load res , beacuse the parameter is error");
                return null;
            }
            byte[] bytes;
            string uri = StartConfigComponent.Instance.ConfigPath + "/" + fileName;
            //string uri = Environment.CurrentDirectory + fileName;
            if (!System.IO.File.Exists(uri))
            {
                return null;
            }
            bytes = System.IO.File.ReadAllBytes(uri);
            return bytes;
        }
    }

    /// <summary>
    /// JsonUtility 不支持数组直接读取 自己封装个扩展使用方便
    /// </summary>
    public class JsonUtilityEx
    {
        public static T[] getJsonArray<T>(string json)
        {
            string newJson = "{ \"array\": " + json + "}";
            Wrapper<T> wrapper = JsonUtils.Deserialize<Wrapper<T>>(newJson);
            return wrapper.array;
        }

        [Serializable]
        private class Wrapper<T>
        {
            public T[] array;
        }
        public static string ListIntToString(List<int> _lst)
        {
            string _str = "";
            foreach (var i in _lst)
            {
                _str += "" + i + ",";
            }
            return _str;
        }
    }
}