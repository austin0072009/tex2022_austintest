


import SpinResultsUpgrade from "../../../../spin-result/SpinResultsUpgrade";
import FguiComponentBase from "../../../fairygui-component/lib/FguiComponentBase";


export default abstract class LevelUpBase extends FguiComponentBase {
    /**
     * 升级
     *
     * @param level 最新等级
     * @param rewardCoins 奖励金币数
     * @param rewardCoins 奖励积分数
     * @param vipRatio vip系数
     * @param maxBetUnlocked 是否解锁最大下注
     * @param freeRewardCollectId 免费奖励领取ID
     * @param watchAdRewardCollectId 观看广告奖励领取ID
     */
    public abstract upgrade(upgrade: SpinResultsUpgrade, callback: Function): void;
    public abstract closeCallback(callback: Function): void;
    abstract onAdButtonClick(listener: Function): void;
}
