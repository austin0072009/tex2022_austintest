using System;
using System.Linq;
using System.Activities;
using System.Activities.Statements;

namespace Crazy2018WorkFlow
{

    class Program
    {
        static void Main(string[] args)
        {
            startValueInWorkflow();
            Console.ReadLine();
        }
        static void startValueInWorkflow()

        {

            System.Collections.Generic.Dictionary<string, object> dic = new System.Collections.Generic.Dictionary<string, object>();

            dic.Add("argument1", 123.456);

            dic.Add("argument2", 456.789);

            WorkflowApplication myInstance = new WorkflowApplication(new Workflow1(), dic);

            myInstance.Run();

        }
    }
}
