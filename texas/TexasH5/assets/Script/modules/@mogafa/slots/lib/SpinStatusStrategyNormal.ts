import SpinStatusStrategy from "./SpinStatusStrategy";
import { SlotGameStageStatus } from "./GameStage/SlotGameStageStatus";
import { SpinType } from "./SpinType";

import { BottomBarSpinStaus } from "./BottomBar/BottomBarSpinStaus";
import { SpinResultsGameMode } from "../../../spin-result/SpinResultsGameMode";
import SpinResultsFreeTrigger from "../../../spin-result/SpinResultsFreeTrigger";


interface IResult {
    enable: boolean;
    spinStatus: BottomBarSpinStaus;
}
export default class SpinStatusStrategyNormal implements SpinStatusStrategy {
    getSpinStatus(
        gameStatus: SlotGameStageStatus,
        spinType: SpinType,
        freeGameTrigger: SpinResultsFreeTrigger,
        nextGameMode: SpinResultsGameMode
    ): IResult {
        let result: IResult = {
            enable: true,
            spinStatus: BottomBarSpinStaus.Ready,
        };
        if (
            spinType == SpinType.Respin &&
            nextGameMode == SpinResultsGameMode.Normal &&
            gameStatus == SlotGameStageStatus.Ready
        ) {
            result.enable = true;
            return result;
        }
        if (spinType == SpinType.Respin) {
            result.enable = false;
            return result;
        }
        switch (gameStatus) {
            case SlotGameStageStatus.Ready:
                this.spinButtonStatusChange(spinType, result, nextGameMode);
                result.enable = true;
                break;
            case SlotGameStageStatus.WaitingServerResults:
            case SlotGameStageStatus.RequestingServer:
            case SlotGameStageStatus.ServerResultsReceived:
                result.spinStatus = BottomBarSpinStaus.StopSpin;
                break;
            // case SlotGameStageStatus.StartPrizeShow:
            //     result.spinStatus = BottomBarSpinStaus.StopSpin;
            //     result.enable = false;
            //     break;
            case SlotGameStageStatus.BoardsPrizeShowing:
                this.spinButtonStatusChange(spinType, result, nextGameMode);
                result.enable = true;
                if (freeGameTrigger && freeGameTrigger.gameMode != SpinResultsGameMode.Normal) {
                    result.enable = false;
                }
                break;
            case SlotGameStageStatus.BoardsSettling:
            case SlotGameStageStatus.BoardsReplacing:
            case SlotGameStageStatus.PrizeShowing:
                this.spinButtonStatusChange(spinType, result, nextGameMode);
                result.enable = false;
                break;
        }
        if (result.spinStatus == BottomBarSpinStaus.StopSpin) {
            if (spinType == SpinType.AutoSpin) {
                result.spinStatus = BottomBarSpinStaus.StopAutoSpin;
            }
            if (spinType == SpinType.FreeSpin) {
                result.spinStatus = BottomBarSpinStaus.StopFreeSpin;
            }
            if (spinType === SpinType.Spin) {
                result.spinStatus = BottomBarSpinStaus.StopSpin;
            }
        }
        return result;
    }

    /**
     * spin按钮状态改变
     * 判断按钮类型在自动spin（AutoSpin）、freeSpin、准备中（Ready）中时
     * 按钮状态的状态如何改变
     * @param spinType
     * @param result
     * @param nextGameMode
     */
    private spinButtonStatusChange(spinType: number, result: IResult, nextGameMode: SpinResultsGameMode) {
        if (spinType === SpinType.AutoSpin) {
            result.spinStatus = BottomBarSpinStaus.StopAutoSpin;
        } else if (
            spinType === SpinType.FreeSpin &&
            (nextGameMode === SpinResultsGameMode.FreeSpin || nextGameMode === SpinResultsGameMode.OneMore)
        ) {
            result.spinStatus = BottomBarSpinStaus.StopFreeSpin;
        } else {
            result.spinStatus = BottomBarSpinStaus.Ready;
        }
    }
}
