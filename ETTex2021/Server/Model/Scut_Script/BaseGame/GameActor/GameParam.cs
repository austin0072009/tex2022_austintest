using ETModel.Framework.Game.Contract.Action;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ETModel.Script.CsScript.Action
{
    public delegate string SlotCallBack(int UserID, cs_base _basedata, string _data);
    
    public class GameParam<Room, Lobby, Table> where Room : BaseRoom where Lobby : BaseLobby where Table : BaseTable
    {
        public Room room;
        public Lobby lobby;
        public Table table;
        //public GameParam(Logic logic,Room room,Lobby lobby, Table table) {
        //    this.lobby = lobby;
        //    this.logic = logic;
        //    this.room = room;
        //    this.table = table;
        //}

    }
}
