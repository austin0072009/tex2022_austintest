using ETModel.Script.Model;

namespace ETModel.Script.CsScript.Action
{
    public class CompeteFactory
    {
        public static CompeteBase GetNewCompete(CompeteModel competemodel)
        {
            if (competemodel.GameID == CommonFun.GetAttribute<GameBootAttribute>(typeof(TexasSendDataServer))?.GameID)
            {
                CompeteBase compete = GetCompete(competemodel);
                if (compete != null && compete.id > 0) return compete;
            }
            return null;
        }
        public static CompeteBase GetCompete(CompeteModel competemodel)
        {
            if (competemodel.Type == CompeteType.Promotion) return new TexasPromotionRace(0, competemodel);
            else if (competemodel.Type == CompeteType.Loop) return new TexasLoopRace(0, competemodel);
            return null;
        }
        //public static CompeteBase GetNew(CompeteModel competemodel)
        //{

        //}
    }
}
