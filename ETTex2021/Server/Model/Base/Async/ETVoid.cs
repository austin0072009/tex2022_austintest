using System;
using System.Diagnostics;
using System.Runtime.CompilerServices;

namespace ETModel
{
    [AsyncMethodBuilder(typeof (AsyncETVoidMethodBuilder))]
    public struct ETVoid: ICriticalNotifyCompletion
    {
        [DebuggerHidden]
        public void Coroutine()
        {
        }

        [DebuggerHidden]
        public bool IsCompleted => true;

        [DebuggerHidden]
        public void OnCompleted(Action continuation)
        {
        }

        [DebuggerHidden]
        public void UnsafeOnCompleted(Action continuation)
        {
        }
    }
}