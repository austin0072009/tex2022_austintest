/*********************************************************   
 * 作    者：jsw
 * 模    块：记录错误
 *  创建时间：20090715
 *  功能描述：将错误记录到错误文件
 *******************************************************
 */
using System;
using System.IO;
using System.Diagnostics;
namespace ETModel.Script.CsScript.Action
{
    /// <summary>
    /// 自定义的日志跟踪工具    
    /// </summary>
    public class TraceLogEx
    {
        private static object obj = new object();  
        //private static string directorypath = string.Format(@"C:\SiteTraceLogEx\{0}\{1}\{2}", 
        public static string directorypath = "../Logs/";
        /// <summary>
        /// 默认目录在C根目录下，可以自己传文件位置修改
        /// </summary>
        public static string strPath
        {
            get { return directorypath; }
            set { directorypath = value; }
        }
        /// <summary>
        /// 
        /// </summary>
        public TraceLogEx()
        { }

        
        /// <summary>
        /// 记录错误信息  附加备注
        /// </summary>
        /// <param name="ex">错误实例</param>
        /// <param name="Desc">备注说明</param>
        public static void Error(Exception ex, string Desc)
        {
            lock (obj)
            {
                try
                {
                    //不存在则创建一个目录
                    if (!Directory.Exists(directorypath))
                    {
                        Directory.CreateDirectory(directorypath);
                    }
                    FileStream fs = null;
                    string strFilePath = string.Format(@"{0}\{1}_{2}_{3}Error.txt", directorypath, DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day);
                    if (!File.Exists(strFilePath))
                    {
                        fs = new FileStream(strFilePath, FileMode.Create);
                    }
                    else
                    {
                        fs = new FileStream(strFilePath, FileMode.Append);
                    }
                    StackTrace st = new StackTrace(true);

                    StreamWriter sw = new StreamWriter(fs);
                    sw.WriteLine("—Exception—Begin————————————————————————————–");
                    sw.WriteLine("—————————————call stack--begin—————————————————————————————–");
                    for (int i = 0; i < st.FrameCount; i++)
                    {
                        int line = st.GetFrame(i).GetFileLineNumber();
                        if (line != 0) sw.WriteLine(string.Format("at：{0}的{1}行", st.GetFrame(i).GetFileName(), line));
                    }
                    sw.WriteLine("—————————————call stack--end—————————————–");
                    sw.WriteLine("—————————————被调用stack begin—————————————–");
                    sw.WriteLine(string.Format("ex.StackTrace：{0}", ex.StackTrace));
                    sw.WriteLine("—————————————被调用stack end—————————————–");
                    sw.WriteLine(string.Format("datetime：{0}", DateTime.Now.ToString("G")));
                    sw.WriteLine(string.Format("message：{0}", ex.Message));
                    sw.WriteLine(string.Format("No.：{0}", Desc));
                    sw.WriteLine("—Exception—End————————————————————————————–");
                    sw.Close();
                }
                catch //(IOException ioe)
                {

                }
            }
        }

        /// <summary>
        /// Log 记录    添加备注
        /// </summary>
        /// <param name="Desc"></param>
        public static void Error(string Desc)
        {
            try
            {
                if (!Directory.Exists(directorypath))
                {  //不存在则创建一个目录
                    Directory.CreateDirectory(directorypath);
                }
                FileStream fs = null;
                string strFilePath = string.Format(@"{0}\{1}_{2}_{3}Error.txt", directorypath, DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day);
                if (!File.Exists(strFilePath))
                {
                    fs = new FileStream(strFilePath, FileMode.Create);
                }
                else
                {
                    fs = new FileStream(strFilePath, FileMode.Append);
                }
                StackTrace st = new StackTrace(true);
                StreamWriter sw = new StreamWriter(fs);
                sw.WriteLine("—Exception—Begin———————————————–");
                for (int i = 0; i < st.FrameCount; i++)
                {
                    int line = st.GetFrame(i).GetFileLineNumber();
                    if (line != 0) sw.WriteLine(string.Format("at：{0}的{1}行", st.GetFrame(i).GetFileName(), line));
                }
                // MethodInfo method0 = (MethodInfo)(st.GetFrame(0).GetMethod()); 
                sw.WriteLine(string.Format("datetime：{0}", DateTime.Now.ToString("G")));
                sw.WriteLine(string.Format("No.：{0}", Desc));
                sw.WriteLine("—Exception—End———————————————–");
                sw.Close();
            }
            catch (Exception ioe)
            {


            } 
        }

        public static void Log(string Desc)
        {
            try
            {
                //不存在则创建一个目录
                if (!Directory.Exists(directorypath))
                {
                    Directory.CreateDirectory(directorypath);
                }
                FileStream fs = null;
                string strFilePath = string.Format(@"{0}\{1}_{2}_{3}Log.txt", directorypath, DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day);
                if (!File.Exists(strFilePath))
                {
                    fs = new FileStream(strFilePath, FileMode.Create);
                }
                else
                {
                    fs = new FileStream(strFilePath, FileMode.Append);
                }
                StackTrace st = new StackTrace(true);
                StreamWriter sw = new StreamWriter(fs);
                sw.WriteLine(DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss ") + Desc);
                sw.Close();
            }
            catch (Exception ioe)
            {

            }
        }
        /// <summary>
        /// 游戏日志
        /// </summary>
        /// <param name="msg"></param>
        public static void GameLog(int gameid,string msg)
        {
            string strPath = $"../GameLog/{gameid}";

            try
            {
                //不存在则创建一个目录
                if (!Directory.Exists(strPath))
                {
                    Directory.CreateDirectory(strPath);
                }
                FileStream fs = null;
                string strFilePath = string.Format(@"{0}\{1}_{2}_{3}Log.txt", strPath, DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day);
                if (!File.Exists(strFilePath))
                {
                    fs = new FileStream(strFilePath, FileMode.Create);
                }
                else
                {
                    fs = new FileStream(strFilePath, FileMode.Append);
                }
                StackTrace st = new StackTrace(true);
                StreamWriter sw = new StreamWriter(fs);
                sw.WriteLine(DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss ") + msg);
                sw.Close();
            }
            catch (Exception ioe)
            {

            }
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="Desc"></param>
        public static void Debug(string Desc, ConsoleColor color=ConsoleColor.White)
        {
            Console.ForegroundColor = color;
            Console.WriteLine(Desc);
            Console.ForegroundColor = ConsoleColor.White;
        }
    }
}