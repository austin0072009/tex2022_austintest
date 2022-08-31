
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/slots/lib/SpinStatusStrategyNormal.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxzbG90c1xcbGliXFxTcGluU3RhdHVzU3RyYXRlZ3lOb3JtYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx1RUFBc0U7QUFDdEUsdUNBQXNDO0FBRXRDLHFFQUFvRTtBQUNwRSxnRkFBK0U7QUFRL0U7SUFBQTtJQXFGQSxDQUFDO0lBcEZHLGdEQUFhLEdBQWIsVUFDSSxVQUErQixFQUMvQixRQUFrQixFQUNsQixlQUF1QyxFQUN2QyxZQUFpQztRQUVqQyxJQUFJLE1BQU0sR0FBWTtZQUNsQixNQUFNLEVBQUUsSUFBSTtZQUNaLFVBQVUsRUFBRSx1Q0FBa0IsQ0FBQyxLQUFLO1NBQ3ZDLENBQUM7UUFDRixJQUNJLFFBQVEsSUFBSSxtQkFBUSxDQUFDLE1BQU07WUFDM0IsWUFBWSxJQUFJLHlDQUFtQixDQUFDLE1BQU07WUFDMUMsVUFBVSxJQUFJLHlDQUFtQixDQUFDLEtBQUssRUFDekM7WUFDRSxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNyQixPQUFPLE1BQU0sQ0FBQztTQUNqQjtRQUNELElBQUksUUFBUSxJQUFJLG1CQUFRLENBQUMsTUFBTSxFQUFFO1lBQzdCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLE9BQU8sTUFBTSxDQUFDO1NBQ2pCO1FBQ0QsUUFBUSxVQUFVLEVBQUU7WUFDaEIsS0FBSyx5Q0FBbUIsQ0FBQyxLQUFLO2dCQUMxQixJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFDNUQsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLE1BQU07WUFDVixLQUFLLHlDQUFtQixDQUFDLG9CQUFvQixDQUFDO1lBQzlDLEtBQUsseUNBQW1CLENBQUMsZ0JBQWdCLENBQUM7WUFDMUMsS0FBSyx5Q0FBbUIsQ0FBQyxxQkFBcUI7Z0JBQzFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsdUNBQWtCLENBQUMsUUFBUSxDQUFDO2dCQUNoRCxNQUFNO1lBQ1YsMkNBQTJDO1lBQzNDLHVEQUF1RDtZQUN2RCw2QkFBNkI7WUFDN0IsYUFBYTtZQUNiLEtBQUsseUNBQW1CLENBQUMsa0JBQWtCO2dCQUN2QyxJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFDNUQsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLElBQUksZUFBZSxJQUFJLGVBQWUsQ0FBQyxRQUFRLElBQUkseUNBQW1CLENBQUMsTUFBTSxFQUFFO29CQUMzRSxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztpQkFDekI7Z0JBQ0QsTUFBTTtZQUNWLEtBQUsseUNBQW1CLENBQUMsY0FBYyxDQUFDO1lBQ3hDLEtBQUsseUNBQW1CLENBQUMsZUFBZSxDQUFDO1lBQ3pDLEtBQUsseUNBQW1CLENBQUMsWUFBWTtnQkFDakMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUM7Z0JBQzVELE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUN0QixNQUFNO1NBQ2I7UUFDRCxJQUFJLE1BQU0sQ0FBQyxVQUFVLElBQUksdUNBQWtCLENBQUMsUUFBUSxFQUFFO1lBQ2xELElBQUksUUFBUSxJQUFJLG1CQUFRLENBQUMsUUFBUSxFQUFFO2dCQUMvQixNQUFNLENBQUMsVUFBVSxHQUFHLHVDQUFrQixDQUFDLFlBQVksQ0FBQzthQUN2RDtZQUNELElBQUksUUFBUSxJQUFJLG1CQUFRLENBQUMsUUFBUSxFQUFFO2dCQUMvQixNQUFNLENBQUMsVUFBVSxHQUFHLHVDQUFrQixDQUFDLFlBQVksQ0FBQzthQUN2RDtZQUNELElBQUksUUFBUSxLQUFLLG1CQUFRLENBQUMsSUFBSSxFQUFFO2dCQUM1QixNQUFNLENBQUMsVUFBVSxHQUFHLHVDQUFrQixDQUFDLFFBQVEsQ0FBQzthQUNuRDtTQUNKO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSyx5REFBc0IsR0FBOUIsVUFBK0IsUUFBZ0IsRUFBRSxNQUFlLEVBQUUsWUFBaUM7UUFDL0YsSUFBSSxRQUFRLEtBQUssbUJBQVEsQ0FBQyxRQUFRLEVBQUU7WUFDaEMsTUFBTSxDQUFDLFVBQVUsR0FBRyx1Q0FBa0IsQ0FBQyxZQUFZLENBQUM7U0FDdkQ7YUFBTSxJQUNILFFBQVEsS0FBSyxtQkFBUSxDQUFDLFFBQVE7WUFDOUIsQ0FBQyxZQUFZLEtBQUsseUNBQW1CLENBQUMsUUFBUSxJQUFJLFlBQVksS0FBSyx5Q0FBbUIsQ0FBQyxPQUFPLENBQUMsRUFDakc7WUFDRSxNQUFNLENBQUMsVUFBVSxHQUFHLHVDQUFrQixDQUFDLFlBQVksQ0FBQztTQUN2RDthQUFNO1lBQ0gsTUFBTSxDQUFDLFVBQVUsR0FBRyx1Q0FBa0IsQ0FBQyxLQUFLLENBQUM7U0FDaEQ7SUFDTCxDQUFDO0lBQ0wsK0JBQUM7QUFBRCxDQXJGQSxBQXFGQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwaW5TdGF0dXNTdHJhdGVneSBmcm9tIFwiLi9TcGluU3RhdHVzU3RyYXRlZ3lcIjtcbmltcG9ydCB7IFNsb3RHYW1lU3RhZ2VTdGF0dXMgfSBmcm9tIFwiLi9HYW1lU3RhZ2UvU2xvdEdhbWVTdGFnZVN0YXR1c1wiO1xuaW1wb3J0IHsgU3BpblR5cGUgfSBmcm9tIFwiLi9TcGluVHlwZVwiO1xuXG5pbXBvcnQgeyBCb3R0b21CYXJTcGluU3RhdXMgfSBmcm9tIFwiLi9Cb3R0b21CYXIvQm90dG9tQmFyU3BpblN0YXVzXCI7XG5pbXBvcnQgeyBTcGluUmVzdWx0c0dhbWVNb2RlIH0gZnJvbSBcIi4uLy4uLy4uL3NwaW4tcmVzdWx0L1NwaW5SZXN1bHRzR2FtZU1vZGVcIjtcbmltcG9ydCBTcGluUmVzdWx0c0ZyZWVUcmlnZ2VyIGZyb20gXCIuLi8uLi8uLi9zcGluLXJlc3VsdC9TcGluUmVzdWx0c0ZyZWVUcmlnZ2VyXCI7XG5cblxuaW50ZXJmYWNlIElSZXN1bHQge1xuICAgIGVuYWJsZTogYm9vbGVhbjtcbiAgICBzcGluU3RhdHVzOiBCb3R0b21CYXJTcGluU3RhdXM7XG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGluU3RhdHVzU3RyYXRlZ3lOb3JtYWwgaW1wbGVtZW50cyBTcGluU3RhdHVzU3RyYXRlZ3kge1xuICAgIGdldFNwaW5TdGF0dXMoXG4gICAgICAgIGdhbWVTdGF0dXM6IFNsb3RHYW1lU3RhZ2VTdGF0dXMsXG4gICAgICAgIHNwaW5UeXBlOiBTcGluVHlwZSxcbiAgICAgICAgZnJlZUdhbWVUcmlnZ2VyOiBTcGluUmVzdWx0c0ZyZWVUcmlnZ2VyLFxuICAgICAgICBuZXh0R2FtZU1vZGU6IFNwaW5SZXN1bHRzR2FtZU1vZGVcbiAgICApOiBJUmVzdWx0IHtcbiAgICAgICAgbGV0IHJlc3VsdDogSVJlc3VsdCA9IHtcbiAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHNwaW5TdGF0dXM6IEJvdHRvbUJhclNwaW5TdGF1cy5SZWFkeSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgc3BpblR5cGUgPT0gU3BpblR5cGUuUmVzcGluICYmXG4gICAgICAgICAgICBuZXh0R2FtZU1vZGUgPT0gU3BpblJlc3VsdHNHYW1lTW9kZS5Ob3JtYWwgJiZcbiAgICAgICAgICAgIGdhbWVTdGF0dXMgPT0gU2xvdEdhbWVTdGFnZVN0YXR1cy5SZWFkeVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJlc3VsdC5lbmFibGUgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3BpblR5cGUgPT0gU3BpblR5cGUuUmVzcGluKSB7XG4gICAgICAgICAgICByZXN1bHQuZW5hYmxlID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAoZ2FtZVN0YXR1cykge1xuICAgICAgICAgICAgY2FzZSBTbG90R2FtZVN0YWdlU3RhdHVzLlJlYWR5OlxuICAgICAgICAgICAgICAgIHRoaXMuc3BpbkJ1dHRvblN0YXR1c0NoYW5nZShzcGluVHlwZSwgcmVzdWx0LCBuZXh0R2FtZU1vZGUpO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5lbmFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBTbG90R2FtZVN0YWdlU3RhdHVzLldhaXRpbmdTZXJ2ZXJSZXN1bHRzOlxuICAgICAgICAgICAgY2FzZSBTbG90R2FtZVN0YWdlU3RhdHVzLlJlcXVlc3RpbmdTZXJ2ZXI6XG4gICAgICAgICAgICBjYXNlIFNsb3RHYW1lU3RhZ2VTdGF0dXMuU2VydmVyUmVzdWx0c1JlY2VpdmVkOlxuICAgICAgICAgICAgICAgIHJlc3VsdC5zcGluU3RhdHVzID0gQm90dG9tQmFyU3BpblN0YXVzLlN0b3BTcGluO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gY2FzZSBTbG90R2FtZVN0YWdlU3RhdHVzLlN0YXJ0UHJpemVTaG93OlxuICAgICAgICAgICAgLy8gICAgIHJlc3VsdC5zcGluU3RhdHVzID0gQm90dG9tQmFyU3BpblN0YXVzLlN0b3BTcGluO1xuICAgICAgICAgICAgLy8gICAgIHJlc3VsdC5lbmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgU2xvdEdhbWVTdGFnZVN0YXR1cy5Cb2FyZHNQcml6ZVNob3dpbmc6XG4gICAgICAgICAgICAgICAgdGhpcy5zcGluQnV0dG9uU3RhdHVzQ2hhbmdlKHNwaW5UeXBlLCByZXN1bHQsIG5leHRHYW1lTW9kZSk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmVuYWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKGZyZWVHYW1lVHJpZ2dlciAmJiBmcmVlR2FtZVRyaWdnZXIuZ2FtZU1vZGUgIT0gU3BpblJlc3VsdHNHYW1lTW9kZS5Ob3JtYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmVuYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgU2xvdEdhbWVTdGFnZVN0YXR1cy5Cb2FyZHNTZXR0bGluZzpcbiAgICAgICAgICAgIGNhc2UgU2xvdEdhbWVTdGFnZVN0YXR1cy5Cb2FyZHNSZXBsYWNpbmc6XG4gICAgICAgICAgICBjYXNlIFNsb3RHYW1lU3RhZ2VTdGF0dXMuUHJpemVTaG93aW5nOlxuICAgICAgICAgICAgICAgIHRoaXMuc3BpbkJ1dHRvblN0YXR1c0NoYW5nZShzcGluVHlwZSwgcmVzdWx0LCBuZXh0R2FtZU1vZGUpO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5lbmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0LnNwaW5TdGF0dXMgPT0gQm90dG9tQmFyU3BpblN0YXVzLlN0b3BTcGluKSB7XG4gICAgICAgICAgICBpZiAoc3BpblR5cGUgPT0gU3BpblR5cGUuQXV0b1NwaW4pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuc3BpblN0YXR1cyA9IEJvdHRvbUJhclNwaW5TdGF1cy5TdG9wQXV0b1NwaW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3BpblR5cGUgPT0gU3BpblR5cGUuRnJlZVNwaW4pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuc3BpblN0YXR1cyA9IEJvdHRvbUJhclNwaW5TdGF1cy5TdG9wRnJlZVNwaW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3BpblR5cGUgPT09IFNwaW5UeXBlLlNwaW4pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuc3BpblN0YXR1cyA9IEJvdHRvbUJhclNwaW5TdGF1cy5TdG9wU3BpbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHNwaW7mjInpkq7nirbmgIHmlLnlj5hcbiAgICAgKiDliKTmlq3mjInpkq7nsbvlnovlnKjoh6rliqhzcGlu77yIQXV0b1NwaW7vvInjgIFmcmVlU3BpbuOAgeWHhuWkh+S4re+8iFJlYWR577yJ5Lit5pe2XG4gICAgICog5oyJ6ZKu54q25oCB55qE54q25oCB5aaC5L2V5pS55Y+YXG4gICAgICogQHBhcmFtIHNwaW5UeXBlXG4gICAgICogQHBhcmFtIHJlc3VsdFxuICAgICAqIEBwYXJhbSBuZXh0R2FtZU1vZGVcbiAgICAgKi9cbiAgICBwcml2YXRlIHNwaW5CdXR0b25TdGF0dXNDaGFuZ2Uoc3BpblR5cGU6IG51bWJlciwgcmVzdWx0OiBJUmVzdWx0LCBuZXh0R2FtZU1vZGU6IFNwaW5SZXN1bHRzR2FtZU1vZGUpIHtcbiAgICAgICAgaWYgKHNwaW5UeXBlID09PSBTcGluVHlwZS5BdXRvU3Bpbikge1xuICAgICAgICAgICAgcmVzdWx0LnNwaW5TdGF0dXMgPSBCb3R0b21CYXJTcGluU3RhdXMuU3RvcEF1dG9TcGluO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgc3BpblR5cGUgPT09IFNwaW5UeXBlLkZyZWVTcGluICYmXG4gICAgICAgICAgICAobmV4dEdhbWVNb2RlID09PSBTcGluUmVzdWx0c0dhbWVNb2RlLkZyZWVTcGluIHx8IG5leHRHYW1lTW9kZSA9PT0gU3BpblJlc3VsdHNHYW1lTW9kZS5PbmVNb3JlKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJlc3VsdC5zcGluU3RhdHVzID0gQm90dG9tQmFyU3BpblN0YXVzLlN0b3BGcmVlU3BpbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdC5zcGluU3RhdHVzID0gQm90dG9tQmFyU3BpblN0YXVzLlJlYWR5O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19