import { SlotGameStageStatus } from "./GameStage/SlotGameStageStatus";
import { SpinType } from "./SpinType";

import { BottomBarSpinStaus } from "./BottomBar/BottomBarSpinStaus";
import SpinResultsFreeTrigger from "../../../spin-result/SpinResultsFreeTrigger";
import { SpinResultsGameMode } from "../../../spin-result/SpinResultsGameMode";


export default interface SpinStatusStrategy {
    /**
     * 获取spin状态
     *
     * @param gameStatus 游戏状态
     * @param spinType spin类型
     * @param freeGameTrigger 免费游戏触发器
     * @returns enable为true表示按钮可用，spinStaus为按钮状态
     */
    getSpinStatus(
        gameStatus: SlotGameStageStatus,
        spinType: SpinType,
        freeGameTrigger: SpinResultsFreeTrigger,
        nextGameMode: SpinResultsGameMode
    ): { enable: boolean; spinStatus: BottomBarSpinStaus };
}
