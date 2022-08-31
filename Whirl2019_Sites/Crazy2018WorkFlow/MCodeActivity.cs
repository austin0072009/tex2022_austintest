using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Activities;

namespace Crazy2018WorkFlow
{

    public sealed class MCodeActivity : CodeActivity
    {
        // 定义一个字符串类型的活动输入参数
       // public InArgument<string> Text { get; set; }

        // 如果活动返回值，则从 CodeActivity<TResult>
        // 并从 Execute 方法返回该值。
        protected override void Execute(CodeActivityContext context)
        {
            // 获取 Text 输入参数的运行时值
            System.Console.Write("请输入内容:");

            string inputString = System.Console.ReadLine();



            string outputString = string.Format("你输入的是:{0}", inputString);

            System.Console.WriteLine(outputString);
        }
    }
}
