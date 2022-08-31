



import SpinResultsUpgrade from "../../../../spin-result/SpinResultsUpgrade";
import FguiFullScreenBase from "../../../fairygui-component/lib/FguiFullScreenBase";


export default abstract class TopBarBase extends FguiFullScreenBase {
    public abstract get coins(): number;
    public abstract set coins(value: number);
    public abstract get integral(): number;
    public abstract set integral(value: number);
    public abstract get level(): number;
    public abstract set level(value: number);
    public abstract get currentExp(): number;
    public abstract set currentExp(value: number);
    public abstract get totalExp(): number;
    public abstract set totalExp(value: number);
    public abstract get coinName(): string;
    public abstract get integralName(): string;
    public abstract setInitLevel(level: number, currentExp: number, totalExp: number): void;
    public abstract updateLevel(
        level: number,
        currentExp: number,
        totalExp: number,
        upgradeValue: SpinResultsUpgrade,
        callback?: Function
    ): void;
    public abstract setUserCoins(userCoins: number, changeTime?: number): void;
    public abstract setUserIntegral(userIntegral: number, changeTime?: number): void;
    public abstract cancelCoinIncreaseAnime(): void;
}
