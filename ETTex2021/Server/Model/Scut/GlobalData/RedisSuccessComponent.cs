using System;
using System.Collections.Generic;

namespace ETModel
{
    [ObjectSystem]
    public class StartAfterRedisSuccess1System : AwakeSystem<RedisSuccessComponent>
    {
        public override void Awake(RedisSuccessComponent self)
        {
            self.Awake();
        }
    }
    public static class StartAfterRedisSuccessHelper
    {
        public static void Awake(this RedisSuccessComponent self)
        {
            self.actions = new List<Action>();
        }
    }

    public class RedisSuccessComponent : Component
    {
        public List<Action> actions;
    }
}
