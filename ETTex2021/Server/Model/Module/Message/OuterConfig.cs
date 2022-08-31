using MongoDB.Bson.Serialization.Attributes;

namespace ETModel
{
    [BsonIgnoreExtraElements]
    public class OuterConfig : AConfigComponent
    {
        public string Address { get; set; }
        public string Address2 { get; set; }
        public string ws { get; set; }
        public string ws2 { get; set; }
    }
}