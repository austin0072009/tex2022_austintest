using System;
using System.Collections.Generic;

namespace ETModel
{
    [ObjectSystem]
    public class GameActorMessageDispatcherComponentStartSystem : AwakeSystem<GameActorMessageDispatcherComponent>
    {
        public override void Awake(GameActorMessageDispatcherComponent self)
        {
            self.Awake();
        }
    }

    [ObjectSystem]
    public class GameActorMessageDispatcherComponentLoadSystem : LoadSystem<GameActorMessageDispatcherComponent>
    {
        public override void Load(GameActorMessageDispatcherComponent self)
        {
            self.Load();
        }
    }

    /// <summary>
    /// Actor消息分发组件
    /// </summary>
    public static class GameActorMessageDispatcherComponentHelper
    {

        public static void Awake(this GameActorMessageDispatcherComponent self)
        {
            self.Load();
        }

        public static void Load(this GameActorMessageDispatcherComponent self)
        {
            self.GameActorMessageHandlers.Clear();
            List<StartConfig> games = StartConfigComponent.Instance.ScutGameConfigs;
            List<Type> types = Game.EventSystem.GetTypes(typeof(ActorMessageHandlerAttribute));
            for (int j = 0; j < types.Count; j++)
            {
                Type type = types[j];
                object[] attrs = type.GetCustomAttributes(typeof(ActorMessageHandlerAttribute), false);
                if (attrs.Length == 0)
                {
                    continue;
                }

                ActorMessageHandlerAttribute messageHandlerAttribute = (ActorMessageHandlerAttribute)attrs[0];
                if (!messageHandlerAttribute.Type.Is(AppType.ScutGame))
                {
                    continue;
                }
                object obj = Activator.CreateInstance(type);

                IMActorHandler imHandler = obj as IMActorHandler;
                if (imHandler == null)
                {
                    throw new Exception($"message handler not inherit IMActorHandler abstract class: {obj.GetType().FullName}");
                }
                Type messageType = imHandler.GetMessageType();
                self.GameActorMessageHandlers.Add(messageType, imHandler);
            }
        }

        /// <summary>
        /// 分发actor消息
        /// </summary>
        public static async ETTask Handle(
                this GameActorMessageDispatcherComponent self, Entity entity, ActorMessageInfo actorMessageInfo)
        {
            if (!self.GameActorMessageHandlers.TryGetValue(actorMessageInfo.Message.GetType(), out IMActorHandler handler))
            {
                throw new Exception($"not found message handler: {MongoHelper.ToJson(actorMessageInfo.Message)}");
            }

            await handler.Handle(actorMessageInfo.Session, entity, actorMessageInfo.Message);
        }

    }

    public class GameActorMessageDispatcherComponent : Component
    {
        public readonly Dictionary<Type, IMActorHandler> GameActorMessageHandlers = new Dictionary<Type, IMActorHandler>();

        public override void Dispose()
        {
            if (this.IsDisposed)
            {
                return;
            }
            base.Dispose();

            this.GameActorMessageHandlers.Clear();
        }
    }

}
