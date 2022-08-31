using ETModel.Framework.Game.Runtime;
using ETModel.Framework.RPC.IO;

namespace ETModel.Framework.Game.Service
{
    /// <summary>
    /// 
    /// </summary>
    public class SocketGameResponse : BaseGameResponse
    {
        static SocketGameResponse()
        {
            var setting = GameEnvironment.Setting;
            if (setting != null)
            {
                MessageStructure.EnableGzip = setting.ActionEnableGZip;
                MessageStructure.EnableGzipMinByte = setting.ActionGZipOutLength;
            }
        }

        private MessageStructure _buffers;
        /// <summary>
        /// 
        /// </summary>
        public SocketGameResponse()
        {
            _buffers = new MessageStructure();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="buffer"></param>
        public override void BinaryWrite(byte[] buffer)
        {
            DoWrite(buffer);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="buffer"></param>
        public override void Write(byte[] buffer)
        {
            DoWrite(buffer);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public byte[] ReadByte()
        {
            return _buffers.PosGzipBuffer();
        }

        private void DoWrite(byte[] buffer)
        {
            _buffers.WriteByte(buffer);
        }

    }
}