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
using System;
using Common.NLog;

namespace ETModel.Framework.Common.Event
{
    /// <summary>
    /// 
    /// </summary>
    public delegate void NotifyCallback(NotifyEventArgs e);

    /// <summary>
    /// Notify event args
    /// </summary>
    public class NotifyEventArgs : EventArgs
    {
        /// <summary>
        /// Whether to interrupt
        /// </summary>
        public bool Interrupt { get; set; }

        /// <summary>
        /// User object
        /// </summary>
        public object Target { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public DateTime ExpiredTime { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public event NotifyCallback Callback;

        /// <summary>
        /// Check where
        /// </summary>
        /// <returns></returns>
        internal protected virtual bool Check()
        {
            return true;
        }


        /// <summary>
        /// 
        /// </summary>
        internal void OnCallback()
        {
            //try
            //{
                NotifyCallback handler = Callback;
                if (handler != null) handler(this);
            //}
            //catch (Exception ex)
            //{
            //    TraceLog.WriteError("Notify callback error:{0}", ex);
            //}
        }

    }
}
