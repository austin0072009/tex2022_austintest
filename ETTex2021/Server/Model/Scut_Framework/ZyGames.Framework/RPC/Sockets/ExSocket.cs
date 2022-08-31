
using System;
using System.Collections.Concurrent;
using System.Net;
using System.Net.Sockets;
using System.Threading;

namespace ETModel.Framework.RPC.Sockets
{
    /// <summary>
    /// Ex socket.
    /// </summary>
    public class ExSocket
    {
        private Socket socket;
        private IPEndPoint remoteEndPoint;
        private ConcurrentQueue<SocketAsyncResult> sendQueue;
        private int isInSending;
        internal DateTime LastAccessTime;

        /// <summary>
        /// Initializes a new instance of the <see cref="ETModel.Framework.RPC.Sockets.ExSocket"/> class.
        /// </summary>
        /// <param name="socket">Socket.</param>
        public ExSocket(Socket socket)
        {
            HashCode = Guid.NewGuid();
            sendQueue = new ConcurrentQueue<SocketAsyncResult>();
            this.socket = socket;
            InitData();
        }

        private void InitData()
        {
            try
            {
                remoteEndPoint = (IPEndPoint)socket.RemoteEndPoint;
            }
            catch (Exception)
            {
            }
        }

        /// <summary>
        /// HashCode
        /// </summary>
        public Guid HashCode { get; private set; }

        /// <summary>
        /// Is closed flag.
        /// </summary>
        public bool IsClosed { get; set; }

        /// <summary>
        /// Is connected of socket
        /// </summary>
        public bool Connected { get { return socket.Connected; } }

        /// <summary>
        /// Gets the work socket.
        /// </summary>
        /// <value>The work socket.</value>
        internal Socket WorkSocket { get { return socket; } }
        /// <summary>
        /// Gets the remote end point.
        /// </summary>
        /// <value>The remote end point.</value>
        public EndPoint RemoteEndPoint { get { return remoteEndPoint; } }
        /// <summary>
        /// Gets the length of the queue.
        /// </summary>
        /// <value>The length of the queue.</value>
        public int QueueLength { get { return sendQueue.Count; } }
          

        /// <summary>
        /// re-connection use.
        /// </summary>
        /// <param name="key"></param>
        public void Reset(Guid key)
        {
            HashCode = key;
        }
        /// <summary>
        /// 
        /// </summary>
        public void Close()
        {
            try
            {
                WorkSocket.Shutdown(SocketShutdown.Both);
            }
            catch { }
            WorkSocket.Close();
        }

        internal bool DirectSendOrEnqueue(byte[] data, Action<SocketAsyncResult> callback)
        {
            lock (socket)
            {
                sendQueue.Enqueue(new SocketAsyncResult(data) { Socket = this, ResultCallback = callback });
                return Interlocked.CompareExchange(ref isInSending, 1, 0) == 0;
            }
        }

        internal bool TryDequeueOrReset(out SocketAsyncResult result)
        {
            lock(socket)
            {
                if (sendQueue.TryDequeue(out result)) return true;
                else Interlocked.Exchange(ref isInSending, 0);
                return false;
            }
        }
        //internal bool TrySetSendFlag()
        //{
        //    return Interlocked.CompareExchange(ref isInSending, 1, 0) == 0;
        //}
        internal void ResetSendFlag()
        {
            Interlocked.Exchange(ref isInSending, 0);
        }
    }
}