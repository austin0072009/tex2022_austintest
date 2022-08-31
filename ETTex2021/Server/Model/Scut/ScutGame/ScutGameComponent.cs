using ETModel.Framework.Common.Serialization;
using ETModel.Script.CsScript.Action;
using System;

namespace ETModel
{
    [ObjectSystem]
    public class ScutGameComponentSystem : AwakeSystem<ScutGameComponent>
    {
        public override void Awake(ScutGameComponent self)
        {
            self.Awake();
        }
    }

    [ObjectSystem]
    public class ScutGameComponentParaSystem : AwakeSystem<ScutGameComponent, string>
    {
        public override void Awake(ScutGameComponent self, string a)
        {
            self.Awake(a);
        }
    }


    [ObjectSystem]
    public class ScutGameComponentUpdateSystem : UpdateSystem<ScutGameComponent>
    {
        public override void Update(ScutGameComponent self)
        {
            self.Update();
        }
    }


    public class ScutGameComponent : Component
    {
        public static ScutGameComponent Instance { get; private set; }

        public void Awake()
        {
            Instance = this;

            Console.WriteLine("ScutGame Starting all...");

            Start(StartConfigComponent.Instance.StartConfig.para);

            Console.WriteLine("exited.");
        }
        public void Awake(string para1)
        {
            Instance = this;
            para = para1;
           // if (para == "") para = "51.52.91.252.254.255.92.1000.4096";//全开
            Console.WriteLine("ScutGame Starting para:" + para);

            Start(para);
            Console.WriteLine("exited.");
        }
        string para = "";
        long _ms = 0;
        public void Update()
        {
            FactoryCommon.Update();
        }

        public override void Dispose()
        {
            if (this.IsDisposed)
            {
                return;
            }
            base.Dispose();

            Instance = null;
        }
        public void Start(string para)
        { 
            ConfigLoader.StartLoadForGame();
            FactoryCommon.LoadGame(para);
            Console.WriteLine("ScutGame Boot Sucessed! para:" + para); 
        }
    }
}
