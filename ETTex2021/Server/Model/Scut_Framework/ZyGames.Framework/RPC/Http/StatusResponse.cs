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
using System.Threading.Tasks;

namespace ETModel.Framework.RPC.Http
{
    /// <summary>
    /// 
    /// </summary>
    public abstract class StatusResponse : IHttpResponseAction
    {
        /// <summary>
        /// 
        /// </summary>
        protected readonly int statusCode;
        /// <summary>
        /// 
        /// </summary>
        protected readonly string statusDescription;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="statusCode"></param>
        /// <param name="statusDescription"></param>
        /// <param name="identity"></param>
        protected StatusResponse(int statusCode, string statusDescription, string identity = null)
        {
            this.statusCode = statusCode;
            this.statusDescription = statusDescription;
            this.Identity = identity;
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="context"></param>
        protected void SetStatus(IHttpRequestResponseContext context)
        {
            context.Response.StatusCode = statusCode;
            if (statusDescription != null)
                context.Response.StatusDescription = statusDescription;
        }
        /// <summary>
        /// 
        /// </summary>
        public string Identity { get; private set; }

        /// <summary>
        /// 
        /// </summary>
        public string RequestParams { get; set; }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="context"></param>
        /// <returns></returns>
        public abstract Task Execute(IHttpRequestResponseContext context);
    }
}
