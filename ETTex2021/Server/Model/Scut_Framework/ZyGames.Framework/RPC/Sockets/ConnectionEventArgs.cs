 
using System; 

namespace ETModel.Framework.RPC.Sockets
{
    /// <summary>
    /// Connection event handler.
    /// </summary>
    public delegate void ConnectionEventHandler(ISocket socket, ConnectionEventArgs e);

    /// <summary>
    /// Connection event arguments.
    /// </summary>
    public class ConnectionEventArgs : EventArgs
    {
        /// <summary>
        /// Gets or sets the socket.
        /// </summary>
        /// <value>The socket.</value>
        public ExSocket Socket { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public DataMeaage Meaage { get; set; }

        /// <summary>
        /// Gets or sets the data.
        /// </summary>
        /// <value>The data.</value>
        public byte[] Data
        {
            get { return Meaage != null ? Meaage.Data : null; }
            set
            {
                if (Meaage == null)
                {
                    Meaage = new DataMeaage() { Data = value };
                }
                else
                {
                    Meaage.Data = value;
                }
            }
        }
    }
}