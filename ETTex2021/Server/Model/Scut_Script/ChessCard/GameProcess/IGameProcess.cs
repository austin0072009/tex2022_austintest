using ETModel.Framework.Game.Contract.Action;
using System.Collections.Generic;

namespace ETModel.Script.CsScript.Action
{
    public interface IGameProcess
    {
        ETTask End();
        ETTask Start();
        ETTask<string> Process(int userid, cs_base cs, string message);
        List<string> GetFunName();
        int GetIndex();
        string GetErrorRsp(cs_base cs, int errcode, string errmsg);
        void Reset();
        string GetProcessName();
        bool IsEnd();
    }
}
