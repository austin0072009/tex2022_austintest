using System;
using System.Collections.Generic;

namespace ETModel.Script.CsScript.Action
{
    /// <summary>
    /// 自动服务类 即，服务启动就要运行 包括 以下功能：
    /// 1.自动消息队列。 
    /// </summary>
    [GameBoot(51)]
    public class TexasSendDataServer : BaseSendDataServer
    {
        private static TexasSendDataServer _ins;
        public static TexasSendDataServer instance
        {
            get
            {
                if (_ins == null) _ins = new TexasSendDataServer();
                return _ins;
            }
        }


        public async override void AutoSendDataTry()
        { 
            List<UserIDMSG> imlist;
            if (!_waittoSendData.TryDequeue(out imlist)) return;
            foreach (UserIDMSG im in imlist)
            {
                if (!im._isrobot || im._isDisconnect) continue;

                UserStatus _us = await BaseHelper.GetUserStatusbyUserID(im._userid);
                if (_us == null || _us.InLobby() || _us.Levelid == 0 || _us.TableID == 0)
                {
                    //TraceLogEx.Error(" robot us is null. fetal error! 202203201729 texas " + im._userid + " strMSG:" + im._senddata);
                    continue;
                }

                BaseUser myu = TexasLobby.instance.GetUserByRoomIDandTableIDandUserID(_us.Levelid, _us.TableID, im._userid);
                if (myu == null)
                {
                    TraceLogEx.Error(" 201611301729tex " + im._userid + ",_us.Status:" + _us.Status + " strMSG:" + im._senddata);
                    continue;
                }
                object[] objArr = new object[3];
                objArr[0] = im._senddata;
                objArr[1] = _us;
                objArr[2] = myu;
                OneThreadSynchronizationContext.Instance.Post(myu._bRobot.RobotDealMSG, objArr);
            }

            AutoSendData(imlist); 
        }

        public override void SendDataDelay(List<UserIDMSG> imList)
        {
            _waittoSendData.Enqueue(imList);
        }
        public override void LogicUpdate()
        {
            StartRobotTimer(null);
        }

        public override async void StartServer(int gameid)
        {
            FactoryCommon.Register(gameid,  TexasLobby.instance);
            TexasLobby.instance.isRecoverTable = isRecoverTable();
            await TexasLobby.instance.Initi(gameid);
            base.StartServer(gameid);
        }

        public bool isRecoverTable()
        {
            if (StartConfigComponent.Instance.StartConfig.AppType == AppType.AllServer) return true;
            var config = StartConfigComponent.Instance.ScutGameConfigs;
            for (int i = config.Count - 1; i >= 0; i--)
            {
                if (config[i].AppType == AppType.ScutGame)
                {
                    if (config[i].AppId == StartConfigComponent.Instance.StartConfig.AppId) if (TexasLobby.instance._tablenum2basetable.Count == 0) return true; else return false;
                    else return false;
                }
            }
            return false;
        }


        /// <summary>
        /// 开始就自动运行
        /// 消息队列处理
        /// </summary>
        private void StartRobotTimer(object state)
        {
            TexasLobby.instance.DealEveryTable(0); //每桌的裁判[等待时间完了 自动 带打功能] 即时执行的 
        }
    }
}

