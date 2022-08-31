using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity;
using Crazy2018_Sys_Entity.Game;
using Crazy2018_Sys_Interface;
using Crazy2018_Sys_Interface.Game;
using Crazy2018_Sys_Service;
using FluentScheduler;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Diagnostics;
using System.Linq;
using System.Threading;
using System.Web;


namespace Crazy2018_WebSite_Manage
{
    public class PlannedTask : Registry
    {
        public PlannedTask()
        {
           // Schedule<OtherJob>().ToRunNow().AndEvery(5).Minutes();
        }


    }
   
    public class OtherJob : IJob
    {
       
        private string _url = ConfigurationManager.AppSettings["SutHttpServer"].ToString();
        void IJob.Execute()
        {
            List<RoomConfiguration> ss = new List<RoomConfiguration>();
           
            using (DBContextHelper dbhelper = new DBContextHelper())
            {
                var entity = dbhelper.RoomConfiguration.Where(t=>t.IsDel==false).ToList();
                ss = new List<RoomConfiguration>(entity);
            }
            ss = ss.Where(t => t.Gameid == 51).ToList();
            cs_base_gm _setuser = new cs_base_gm() { fn = "cs_getgameroom_gm" };
            _setuser._g = 51;
            string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(_setuser));
            string _content = Utils.HttpGet(_url + _data);
            sc_gameroom_gm _scsetuser = JsonHelper.JSONToObject<sc_gameroom_gm>(_content);
            if (_scsetuser._ret == 0)
            {
                var data = _scsetuser.tablelist;
               
                foreach (var item in ss)
                {
                    var piroom = data.Find(t=>t.pi== item.Baseskin * 100);
                    
                    if (piroom.tnum < item.roomnumbermin)
                    {
                        Random ran = new Random();
                        int num = ran.Next(item.roomnumbermin,item.roomnumbermax) - piroom.tnum;
                        if (num>0)
                        {
                            for (int i = 0; i < num; i++)
                            {
                                //创建房间
                                cs_createtablelist_gm gameagree = new cs_createtablelist_gm();

                                cs_createtable_tex tex = new cs_createtable_tex();
                                tex.baserate = item.Baseskin * 100;
                                tex.Duration = ran.Next(2,6) * 30;
                                tex.fn = "cs_createtable_tex";
                                tex.gameid = 51;
                                tex.gametype = 2;
                                tex.gps = 0;
                                tex.into = 100;
                                tex.intorate_max = 4;
                                tex.intorate_min = 1;
                                tex.ip = 0;
                                tex.numpertable = 4;
                                tex.openv = 0;
                                tex.password = "";
                                tex.pregamble = tex.baserate;
                                tex.roomid = item.Roomid;
                                tex._g = tex.gameid;
                                gameagree.gameid = tex.gameid;
                                gameagree._g = tex.gameid;
                                gameagree.fn = "cs_createtablelist_gm";
                                gameagree.param = JsonHelper.ObjectToJSON(tex);

                                string _datatable = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(gameagree));
                                string _contenttable = Utils.HttpGet(_url + _datatable);
                                sc_createtablelist_gm _addtable = JsonHelper.JSONToObject<sc_createtablelist_gm>(_contenttable);

                                if (_addtable._ret == 0 && _addtable.tableid != 0)
                                {
                                    int roomuser = ran.Next(item.roompeoplenummin, item.roompeoplenumax);
                                    for (int j = 0; j < roomuser; j++)
                                    {
                                        //添加机器人进房间
                                        cs_robotjoinroom send = new cs_robotjoinroom();
                                        send.levelid = _addtable.levelid;
                                        send.fn = "cs_robotjoinroom";
                                        send.tableid = _addtable.tableid;
                                        send.gameId = tex.gameid;
                                        send._g = tex.gameid;
                                        string sendrootHttp = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(send));
                                        string _addrobotcontent = Utils.HttpGet(_url + sendrootHttp);
                                        Crazy2018_Sys_Entity.sc_base_gm r = JsonHelper.JSONToObject<Crazy2018_Sys_Entity.sc_base_gm>(_addrobotcontent);
                                        Thread.Sleep(2000);
                                    }
                                    int roomwatchuser = ran.Next(item.Lookonnummin, item.Lookonnummax);
                                    for (int k = 0; k < roomwatchuser; k++)
                                    {
                                        //添加围观机器人
                                        cs_addwatchrobot_whi watchrobot = new cs_addwatchrobot_whi();
                                        watchrobot.fn = "cs_addwatchrobot_whi";
                                        watchrobot.levelid = _addtable.levelid;
                                        watchrobot.tablenum = int.Parse(_addtable.tnumber);
                                        watchrobot.gameid = tex.gameid;
                                        watchrobot._g = tex.gameid;
                                        string watchhttp = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(watchrobot));
                                        string _watchhttpcontent = Utils.HttpGet(_url + watchhttp);
                                        //Crazy2018_Sys_Entity.sc_base_gm r = JsonHelper.JSONToObject<Crazy2018_Sys_Entity.sc_base_gm>(_watchhttpcontent);
                                        Thread.Sleep(100);
                                    }
                                }
                            }
                        }
                    }
                }
              

            }
        }
    }

    public class SetTable
    {
        /// <summary>
        /// 房间数量
        /// </summary>
        public int tablenum { get; set; }

        public int pi { get; set; }

        /// <summary>
        /// 围观人数量
        /// </summary>
        public int watctNum { get; set; }

        public int roomid { get; set; }



    }
}