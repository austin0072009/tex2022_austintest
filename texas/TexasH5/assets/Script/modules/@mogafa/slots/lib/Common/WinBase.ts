


import SpinResultsGameWheel from "../../../../spin-result/SpinResultsGameWheel";
import FguiComponentBase from "../../../fairygui-component/lib/FguiComponentBase";


export default abstract class WinBase extends FguiComponentBase {
    public abstract popUpWin(
        winType: number,
        coin: number,
        countdown: number,
        gameWheel?: SpinResultsGameWheel,
        callback?: Function
    ): void;
    public abstract onAdButtonClick(listener: Function): void;
}
