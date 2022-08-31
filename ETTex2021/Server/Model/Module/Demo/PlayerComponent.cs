using System.Collections.Generic;
using System.Linq;

namespace ETModel
{
	[ObjectSystem]
	public class PlayerComponentSystem : AwakeSystem<PlayerComponent>
	{
		public override void Awake(PlayerComponent self)
		{
			self.Awake();
		}
	}
	
	public class PlayerComponent : Component
	{
		public static PlayerComponent Instance { get; private set; }

		public Player MyPlayer;
		 
		private readonly Dictionary<int, Player> id2Players = new Dictionary<int, Player>();
		public void Awake()
		{
			Instance = this;
		}
		
		public void Add(Player player)
		{ 
			if(!id2Players.ContainsKey(player.UserID)) id2Players.Add(player.UserID, player);
		}
		 

		public Player GetByUserID(int userid)
		{ 
			id2Players.TryGetValue(userid, out Player gamer);
			return gamer;
		} 
		public void Remove(int userid)
		{
			this.id2Players.Remove(userid);
		}

		/// <summary>
		/// 在线人数
		/// </summary>
		public int Count
		{
			get
			{
				return this.id2Players.Count;
			}
		}

		public Player[] GetAll()
		{
			return this.id2Players.Values.ToArray();
		}

		public override void Dispose()
		{
			if (this.IsDisposed)
			{
				return;
			}
			
			base.Dispose();

			foreach (Player player in this.id2Players.Values)
			{
				player.Dispose();
			}

			Instance = null;
		}
	}
}