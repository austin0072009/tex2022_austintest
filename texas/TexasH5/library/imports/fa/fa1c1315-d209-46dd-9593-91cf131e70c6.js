"use strict";
cc._RF.push(module, 'fa1c1MV0glG3ZWTkc8THnDG', 'SpinStatusStrategyNormal');
// Script/modules/@mogafa/slots/lib/SpinStatusStrategyNormal.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SlotGameStageStatus_1 = require("./GameStage/SlotGameStageStatus");
var SpinType_1 = require("./SpinType");
var BottomBarSpinStaus_1 = require("./BottomBar/BottomBarSpinStaus");
var SpinResultsGameMode_1 = require("../../../spin-result/SpinResultsGameMode");
var SpinStatusStrategyNormal = /** @class */ (function () {
    function SpinStatusStrategyNormal() {
    }
    SpinStatusStrategyNormal.prototype.getSpinStatus = function (gameStatus, spinType, freeGameTrigger, nextGameMode) {
        var result = {
            enable: true,
            spinStatus: BottomBarSpinStaus_1.BottomBarSpinStaus.Ready,
        };
        if (spinType == SpinType_1.SpinType.Respin &&
            nextGameMode == SpinResultsGameMode_1.SpinResultsGameMode.Normal &&
            gameStatus == SlotGameStageStatus_1.SlotGameStageStatus.Ready) {
            result.enable = true;
            return result;
        }
        if (spinType == SpinType_1.SpinType.Respin) {
            result.enable = false;
            return result;
        }
        switch (gameStatus) {
            case SlotGameStageStatus_1.SlotGameStageStatus.Ready:
                this.spinButtonStatusChange(spinType, result, nextGameMode);
                result.enable = true;
                break;
            case SlotGameStageStatus_1.SlotGameStageStatus.WaitingServerResults:
            case SlotGameStageStatus_1.SlotGameStageStatus.RequestingServer:
            case SlotGameStageStatus_1.SlotGameStageStatus.ServerResultsReceived:
                result.spinStatus = BottomBarSpinStaus_1.BottomBarSpinStaus.StopSpin;
                break;
            // case SlotGameStageStatus.StartPrizeShow:
            //     result.spinStatus = BottomBarSpinStaus.StopSpin;
            //     result.enable = false;
            //     break;
            case SlotGameStageStatus_1.SlotGameStageStatus.BoardsPrizeShowing:
                this.spinButtonStatusChange(spinType, result, nextGameMode);
                result.enable = true;
                if (freeGameTrigger && freeGameTrigger.gameMode != SpinResultsGameMode_1.SpinResultsGameMode.Normal) {
                    result.enable = false;
                }
                break;
            case SlotGameStageStatus_1.SlotGameStageStatus.BoardsSettling:
            case SlotGameStageStatus_1.SlotGameStageStatus.BoardsReplacing:
            case SlotGameStageStatus_1.SlotGameStageStatus.PrizeShowing:
                this.spinButtonStatusChange(spinType, result, nextGameMode);
                result.enable = false;
                break;
        }
        if (result.spinStatus == BottomBarSpinStaus_1.BottomBarSpinStaus.StopSpin) {
            if (spinType == SpinType_1.SpinType.AutoSpin) {
                result.spinStatus = BottomBarSpinStaus_1.BottomBarSpinStaus.StopAutoSpin;
            }
            if (spinType == SpinType_1.SpinType.FreeSpin) {
                result.spinStatus = BottomBarSpinStaus_1.BottomBarSpinStaus.StopFreeSpin;
            }
            if (spinType === SpinType_1.SpinType.Spin) {
                result.spinStatus = BottomBarSpinStaus_1.BottomBarSpinStaus.StopSpin;
            }
        }
        return result;
    };
    /**
     * spin按钮状态改变
     * 判断按钮类型在自动spin（AutoSpin）、freeSpin、准备中（Ready）中时
     * 按钮状态的状态如何改变
     * @param spinType
     * @param result
     * @param nextGameMode
     */
    SpinStatusStrategyNormal.prototype.spinButtonStatusChange = function (spinType, result, nextGameMode) {
        if (spinType === SpinType_1.SpinType.AutoSpin) {
            result.spinStatus = BottomBarSpinStaus_1.BottomBarSpinStaus.StopAutoSpin;
        }
        else if (spinType === SpinType_1.SpinType.FreeSpin &&
            (nextGameMode === SpinResultsGameMode_1.SpinResultsGameMode.FreeSpin || nextGameMode === SpinResultsGameMode_1.SpinResultsGameMode.OneMore)) {
            result.spinStatus = BottomBarSpinStaus_1.BottomBarSpinStaus.StopFreeSpin;
        }
        else {
            result.spinStatus = BottomBarSpinStaus_1.BottomBarSpinStaus.Ready;
        }
    };
    return SpinStatusStrategyNormal;
}());
exports.default = SpinStatusStrategyNormal;

cc._RF.pop();