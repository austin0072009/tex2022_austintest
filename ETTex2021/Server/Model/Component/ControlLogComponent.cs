using ETModel.Script.CsScript.Action;
using ETModel.Script.Model;
using System.Collections.Generic;
using System.Text;

namespace ETModel
{
	public class ControlGame
    {
		public int GameID { get; set; }
		public int iPlayTimes { get; set; }
		public long lWinScore { get; set; }
		public long lLoseScore { get; set; }
		public long lRateScore { get; set; }
    }
	public class ControlUser
    {
		public int UserID { get; set; }
		public int iGameID { get; set; }
		public int iRoomID { get; set; }
		public int iPlayTimes { get; set; }
		public long lOldScore { get; set; }
		public long lWinTotalScore { get; set; }
		public long lRoomWinScore { get; set; }
		public long lRoomLoseScore { get; set; }
	}
	public class ControlRoom
	{
		public int iRoomID { get; set; }
		public int iPlayTimes { get; set; }
		public long lWinScore { get; set; }
		public long lLoseScore { get; set; }
		public long lRateScore { get; set; }
	}
	public class ControlReslut
	{
		public int iUserID { get; set; }
		public List<int> iReslutTable { get; set; }
		public Dictionary<int, int> dicReward { get; set; }
		public int iBetLineCount { get; set; }
		public long lWinScore { get; set; }
		public long singleBetScore { get; set; }
		public long lUserCurrScore { get; set; }
		public int iMarryTimes { get; set; }
		public int iFreeTimes { get; set; }
		public int iOpenFreeTimes { get; set; }
	}
	[ObjectSystem]
	public class ControlLogComponentAwakeSystem : AwakeSystem<ControlLogComponent>
	{
		public override void Awake(ControlLogComponent self)
		{
			self.Awake();
		}
	}
	[ObjectSystem]
	public class ControlLogComponentUpdateSystem : UpdateSystem<ControlLogComponent>
	{
		public override void Update(ControlLogComponent self)
		{
			self.Update();
		}
	}
	public class ControlLogComponent : Component
	{
		/// <summary>
		/// 
		/// </summary>
		public long lInventoryScore;
		public long lJackpot;
		public static Dictionary<int, ControlRoom> dicGameRoomList;
		public static Dictionary<int,ControlUser> dicUserList;
		private static Dictionary<int, ControlGame> dicGameList;
		private static long _lPrintGameInfoTime;

		public void Awake()
		{
			_lPrintGameInfoTime = TimeHelper.Day24Seconds();
			dicGameList = new Dictionary<int, ControlGame>();
			dicGameRoomList = new Dictionary<int, ControlRoom>();
			dicUserList = new Dictionary<int, ControlUser>();
		}
		public void EnterRoom(int gameid,int roomid,int userid,long lGold)
		{ 
			if (!dicGameList.ContainsKey(gameid))
			{
				dicGameList[gameid] = new ControlGame() {
					GameID = gameid,
					iPlayTimes = 0,
					lLoseScore = 0,
					lWinScore = 0,
					lRateScore = 0 };
			}
            if (!dicGameRoomList.ContainsKey(roomid))
            {
				dicGameRoomList[roomid] = new ControlRoom()
				{
					iRoomID = roomid,
					iPlayTimes = 0,
					lLoseScore = 0,
					lWinScore = 0,
					lRateScore = 0
				};
			}
			dicUserList[userid] = new ControlUser()
			{
				UserID = userid,
				lOldScore = lGold,
				iGameID = gameid,
				iRoomID = roomid,
				lWinTotalScore = 0,
				iPlayTimes = 0
			};
			Log.Info($"玩家[{userid}]进入房间[{roomid}]");
        }
		public void ExitRoom(int UserID)
        {
			if(dicUserList.Remove(UserID,out ControlUser user))
            {
				Log.Info($"本次玩家[{UserID}]\n" +
					$"初始积分为:{user.lOldScore}\n" +
					$"共玩{user.iPlayTimes}局\n" +
					$"总计获得积分为:{user.lWinTotalScore}\n" +
					$"剩余积分为:{user.lOldScore + user.lWinTotalScore}");
            }
        }
		public void RecordResult(ControlReslut reslut)
        {
			if(!dicUserList.TryGetValue(reslut.iUserID, out ControlUser user))
            {
				return;
            }
			StringBuilder str = new StringBuilder();
			for (int i = 0; i < reslut.iReslutTable.Count; i++)
            {
				str.Append($"{reslut.iReslutTable[i]}  ");
				if ((i+1) % 5 == 0) str.Append("\n");

			}
            if (reslut.dicReward.Count > 0)
            {
				str.Append("奖励线信息:\n");
				str.Append("棋子    个数\n");
				foreach (var v in reslut.dicReward)
				{
					str.Append($"{v.Key}    {v.Value}\n");
				}
			}
			dicUserList[reslut.iUserID].iPlayTimes++;
			dicUserList[reslut.iUserID].lWinTotalScore += reslut.lWinScore;
			long lUserLose = reslut.iBetLineCount * reslut.singleBetScore;
			long lTmpUserLose = reslut.lWinScore - lUserLose;

			if ( lTmpUserLose> 0)
            {
				dicGameList[user.iGameID].lLoseScore += lTmpUserLose;
				dicGameRoomList[user.iRoomID].lLoseScore += lTmpUserLose;
            }
            else
            {
				dicGameList[user.iGameID].lWinScore -= lTmpUserLose;
				dicGameRoomList[user.iRoomID].lWinScore -= lTmpUserLose;
			}
			dicGameList[user.iGameID].iPlayTimes++;
			dicGameRoomList[user.iRoomID].iPlayTimes++;
			
			Log.Info($"\n本局玩家[{reslut.iUserID}]\n" +
				$"压线:{reslut.iBetLineCount}  单注:{reslut.singleBetScore}   总注:{lUserLose}\n"+
				$"剩余免费:{reslut.iFreeTimes}\n" +
				$"获得免费:{reslut.iOpenFreeTimes}\n" +
				$"小游戏次数:{reslut.iMarryTimes}\n"+
				$"轮盘信息:\n{str}" +
				$"获得积分:{reslut.lWinScore}\n" +
				$"自身积分:{reslut.lUserCurrScore}");
		}
		public   void Update()
        {
            if (_lPrintGameInfoTime < TimeHelper.ClientNowSeconds())
            {
				_lPrintGameInfoTime = TimeHelper.Day24Seconds();
				foreach(var v in dicGameList)
                {
					Log.Info($"游戏[{v.Key}]一天总共运行 {v.Value.iPlayTimes} 次,吃分:{v.Value.lWinScore}  吐分:{v.Value.lLoseScore}   暗税:{v.Value.lRateScore}");
				}
            } 
        }
		public override void Dispose()
		{
			if (this.IsDisposed)
			{
				return;
			}

			base.Dispose();
		}
	}
}