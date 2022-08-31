using ETModel.Script.Model;

namespace ETModel.Script.CsScript.Action
{  /// <summary>
   /// 游戏房间
   /// </summary>
    public class TexasRoom : ChessCardRoom
    {
        public TexasRoom()
        { }
       
        /// <summary>
        /// 
        /// </summary>
        /// <param name="_roominfo"></param>
        /// <param name="TurnWaitTime"></param>
        public TexasRoom(tgamelevelinfo _roominfo)
        {
            base.Initi(_roominfo);
 
        }
       
 
    }
}
