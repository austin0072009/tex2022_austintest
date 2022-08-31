using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.Options;
using System.Collections.Generic;
using System.Linq;

namespace ETModel
{
    public class UnitComponent : Component
    {
        [BsonElement]
        [BsonDictionaryOptions(DictionaryRepresentation.ArrayOfArrays)]
        private readonly Dictionary<long, Unit> idUnits = new Dictionary<long, Unit>();
        [BsonElement]
        [BsonDictionaryOptions(DictionaryRepresentation.ArrayOfArrays)]
        private readonly Dictionary<long, Unit> userid2Unit = new Dictionary<long, Unit>();

        public override void Dispose()
        {
            if (this.IsDisposed)
            {
                return;
            }
            base.Dispose();

            foreach (Unit unit in this.idUnits.Values)
            {
                unit.Dispose();
            }
            this.idUnits.Clear();
            userid2Unit.Clear();
        }

        public void Add(Unit unit)
        {
            this.idUnits.Add(unit.Id, unit);
            this.userid2Unit.Add(unit.UserID, unit);
        }

        public Unit Get(long id)
        {
            this.idUnits.TryGetValue(id, out Unit unit);
            return unit;
        }
        public Unit GetByUserID(long userid)
        {
            this.userid2Unit.TryGetValue(userid, out Unit unit);
            return unit;
        }
        public void Remove(long id)
        {
            Unit unit;
            this.idUnits.TryGetValue(id, out unit);
            this.idUnits.Remove(id);
            unit?.Dispose();
        }
        public void RemoveByUserID(long userid)
        {
            Unit unit;
            this.userid2Unit.TryGetValue(userid, out unit);
            this.userid2Unit.Remove(userid);
            if (this.idUnits.ContainsKey(unit.Id))
            {
                this.idUnits.Remove(unit.Id);
            }
            unit?.Dispose();
        }
        public void RemoveNoDispose(long id)
        {
            this.idUnits.Remove(id);
        }

        public int Count
        {
            get
            {
                return this.idUnits.Count;
            }
        }
        public int UserCount
        {
            get
            {
                return this.userid2Unit.Count;
            }
        }
        public int[] GetUserIds()
        {
            //HashSet<int> sets = new HashSet<int>();
            HashSet<int> ids = new HashSet<int>();
            foreach (var unit in userid2Unit.Values) if (unit.GetComponent<UnitGateComponent>() != null && !unit.GetComponent<UnitGateComponent>().IsDisconnect && unit.UserID > 0) ids.Add((int)unit.UserID);
            return ids.ToArray();
        }
        public Unit[] GetAll()
        {
            return this.idUnits.Values.ToArray();
        }
    }
}