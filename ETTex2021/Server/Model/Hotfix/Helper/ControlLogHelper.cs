using System;
using System.Collections.Generic;
using System.Reflection;

namespace ETModel
{
	public static class ControlLogHelper
	{
		public static void EnterRoom(int gameid, int roomid, int userid, long lGold)
		{
			Game.Scene.GetComponent<ControlLogComponent>().EnterRoom(gameid,roomid,userid,lGold);
		}
		public static void ExitRoom(int userid)
		{
			Game.Scene.GetComponent<ControlLogComponent>().ExitRoom(userid);
		}
		public static void RecordResult(int userid,long lUserCurrScore,long lWinScore,int lSingleBetScore,
            int iLineCount,int iFreeTimes,int iOpenFreeTimes,int iMerryTimes,int[,] iReslutTable)
		{
            ControlReslut reslut = new ControlReslut();
            reslut.lUserCurrScore = lUserCurrScore;
            reslut.lWinScore = lWinScore;
            reslut.iUserID = userid;
            reslut.singleBetScore = lSingleBetScore;
            reslut.iBetLineCount = iLineCount;
            reslut.iFreeTimes = iFreeTimes;
            reslut.iOpenFreeTimes = iOpenFreeTimes;
            reslut.iMarryTimes = iMerryTimes;
            reslut.dicReward = new Dictionary<int, int>();
            //foreach (var v in showdown.slottype)
            //{
            //    reslut.dicReward[(int)v.line] = ((int)v.prize) % 10;
            //}
            reslut.iReslutTable = new List<int>();
            int iLen = iReslutTable.Length;
            for(int i = 0; i < iLen; i++)
            {
                for (int j = 0; j < iLen; j++)
                {
                    reslut.iReslutTable.Add(iReslutTable[i,j]);
                }
            }
            Game.Scene.GetComponent<ControlLogComponent>().RecordResult(reslut);
        }
	}
}
