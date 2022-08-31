using System.Net;

namespace ETModel.Script.CsScript.Action
{
    public class CompeteTableInfo
    {
        public int tableid;
        public string IP;
        private IPEndPoint ippoint;
        public int round;
        public IPEndPoint IPEndPoint
        {
            get
            {
                if (ippoint == null && !IP.IsNullOrWhiteSpace())
                {
                    ippoint = IPEndPoint.Parse(IP);
                }
                return ippoint;
            }
        }
    }
}
