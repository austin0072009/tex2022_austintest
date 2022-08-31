/// <summary>
/// Scut 缓存获取不支持，?类型
/// </summary>
namespace ETModel.Script.CsScript.Action
{

    /// <summary>
    /// 税收处理相关
    /// </summary>
    public class tTaxLogEx : ConfigManger
    {

        /// <summary>
        /// 规则修改为goldwin > mango分就收一个进奖池
        /// </summary>
        public static int GetTax(int userid, int goldwin, int mango)
        {
            //3芒果分  去掉芒果分 >=13就扣3
            //5芒果分  去掉芒果分 >=25就扣5
            //10芒果分 去掉芒果 分 >=30就扣10
            //20芒果分 去掉芒果分 >= 60就扣20
            //40芒果分 去掉芒果分 >= 120就扣40
            //100芒果分 去掉芒果分 >= 200就扣100
            // 去掉的芒果分 是基本芒果分 不含休芒与揍芒果累加的 或者上局结于的
            if (goldwin <= 0) return 0;
            int ActionCoin = 0; 
            ////if (ActionCoin > mango) ActionCoin = mango;
            switch (mango)
            {
                case 3 * 100:
                    if (goldwin >= mango * 10) ActionCoin = mango;
                    break;
                case 5 * 100:
                    if (goldwin >= mango * 10) ActionCoin = mango;
                    break;
                case 10 * 100:
                    if (goldwin >= mango * 10) ActionCoin = mango;
                    break;
                case 20 * 100:
                    if (goldwin >= mango * 10) ActionCoin = mango;
                    break;
                case 40 * 100:
                    if (goldwin >= mango * 10) ActionCoin = mango;
                    break;
                case 100 * 100:
                    if (goldwin >= mango * 10) ActionCoin = mango;
                    break;
                default:
                    TraceLogEx.Error("undeal mango :" + mango);
                    break;

            }
            return ActionCoin;
        }
	} 

 

    
}

