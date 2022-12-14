/****************************************************************************
Copyright (c) 2013-2015 scutgame.com

http://www.scutgame.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
****************************************************************************/

using System.Collections.Generic;
using ETModel.Framework.Model;
using ETModel.Framework.Net.Redis;

namespace ETModel.Framework.Net
{
    /// <summary>
    /// 
    /// </summary>
    public class RedisTransponder : ITransponder
    {
        /// <summary>
        /// 
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="receiveParam"></param>
        /// <param name="dataList"></param>
        /// <returns></returns>
        public bool TryReceiveData<T>(TransReceiveParam receiveParam, out List<T> dataList) where T : AbstractEntity, new()
        {

            using (IDataReceiver getter = new RedisDataGetter(receiveParam.RedisKey, receiveParam.Schema))
            {
                return getter.TryReceive<T>(out dataList);
            }
        }
        /// <summary>
        /// 
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="dataList"></param>
        /// <param name="sendParam"></param>
        public bool SendData<T>(T[] dataList, TransSendParam sendParam) where T : AbstractEntity, new()
        {
            using (IDataSender sender = new RedisDataSender(sendParam))
            {
                return sender.Send(dataList);
            }
        }
    }
}