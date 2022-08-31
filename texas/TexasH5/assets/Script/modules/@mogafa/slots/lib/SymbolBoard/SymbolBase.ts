import SymbolSpineResource from "./SymbolSpineResource";
import SymbolSpineShowConfig from "./SymbolSpineShowConfig";
import { MogafaSlots } from "../MogafaSlots";
import { SymbolBoardStatus } from "./SymbolBoardStatus";
import CellBase from "./CellBase";
import { SymbolBoardConst } from "./SymbolBoardConst";
import SlotGameStageBase from "../GameStage/SlotGameStageBase";
import MogafaSlotsGameStage from "../MogafaSlotsGameStage";
import FguiComponentBase from "../../../fairygui-component/lib/FguiComponentBase";
class SpineTrackEntryCount {
    private _componentName: string;
    private _trackEntries: { trackEntry: any; count: number }[] = [];
    private _expectedTimes: number;
    constructor(componentName: string, expectedTimes: number) {
        this._componentName = componentName;
        this._expectedTimes = expectedTimes;
        if (this._expectedTimes == null) {
            this._expectedTimes = 1;
        }
    }
    public get componentName(): string {
        return this._componentName;
    }
    public get trackEntries(): { trackEntry: any; count: number }[] {
        return this._trackEntries;
    }
    /**
     * 添加trackEntry
     * @param trackEntry trackEntry
     */
    public addTrackEntry(trackEntry: any): void {
        const old = this._trackEntries.find((t) => t.trackEntry == trackEntry);
        if (!old) {
            this._trackEntries.push({ trackEntry: trackEntry, count: 0 });
        }
    }
    /**
     * 完成一次动画播放
     *
     * @param trackEntry trackEntry
     * @returns 全部完成指定次数返回true
     */
    public completedOnce(trackEntry: any): boolean {
        let track = this._trackEntries.find((t) => t.trackEntry.animation.name == trackEntry.trackEntry.animation.name);
        if (track) {
            track.count++;
        }
        return this.completed;
    }
    /**
     * 获取是否完成
     */
    public get completed(): boolean {
        let track = this._trackEntries.find((t) => t.count < this.expectedTimes);
        return !track;
    }

    public set expectedTimes(value: number) {
        this._expectedTimes = value;
    }

    public get expectedTimes(): number {
        return this._expectedTimes;
    }
}
export default abstract class SymbolBase extends FguiComponentBase implements MogafaSlots {
    /**
     * 关卡编码
     */
    private _stageCode: string;
    /**
     * 所属格子
     */
    private _cell: CellBase;

    /**
     * 获取关卡编码
     */
    get stageCode(): string {
        return this._stageCode;
    }
    /**
     * 设置关卡编码
     */
    set stageCode(value: string) {
        this._stageCode = value;
    }
    /**
     * 获取所属格子
     */
    get cell(): CellBase {
        return this._cell;
    }
    /**
     * 设置所属格子
     */
    set cell(value: CellBase) {
        this._cell = value;
    }
    /**
     * Board status of symbol base
     * 棋盘状态
     */
    private _boardStatus: SymbolBoardStatus;
    get boardStatus(): SymbolBoardStatus {
        return this._boardStatus;
    }
    set boardStatus(value: SymbolBoardStatus) {
        this._boardStatus = value;
    }

    /**
     * Status  of symbol base
     * 棋子状态
     */
    protected _status: SymbolBoardStatus;
    get status(): SymbolBoardStatus {
        return this._status;
    }
    set status(value: SymbolBoardStatus) {
        this._status = value;
        if (value === SymbolBoardStatus.Stopped) {
            this.playSpineByConfig(this.spineShowAfterStopConfigName);
        }
        if (value === SymbolBoardStatus.Ready) {
            let matchedLines: number[][] = null;
            if (SlotGameStageBase.spinResults) {
                let slot = SlotGameStageBase.spinResults.slots[this.cell.reel.symbolBoard.index];
                matchedLines = slot.matchedLines;
            }
            if (!matchedLines || matchedLines.length == 0) {
                this.playSpineByConfig(this.spineShowForStationaryBoardConfigName);
            }
        }
    }
    /**
     * 棋子spine动画组件名称
     * 一个棋子支持多个spine动画组件
     * 请参照SlotGameStageBase的symbolSpineUrls
     * 资源的顺序与组件的顺序一致
     */
    protected abstract get spineComponentNames(): string[];
    /**
     * 棋子停止时需要播放动画的设置
     */
    protected abstract get spineShowAfterStop(): SymbolSpineShowConfig[];
    /**
     * Gets spine show for stationary board config name
     * 获取棋盘静止时需要播放的spine动画配置名称
     * （静止的含义是无棋子替换、无连线展示、无筹码结算时的棋盘，准备好下一次spin时的状态）
     */
    protected abstract get spineShowForStationaryBoardConfigName(): string;
    /**
     * Gets spine show after stop config name
     * 获取棋子停下时播放的spine动画配置名称
     */
    protected abstract get spineShowAfterStopConfigName(): string;

    /**
     * 棋子中奖展示是需要播放动画的设置
     */
    protected abstract get spineShowForPrize(): SymbolSpineShowConfig[];
    /**
     * Gets spine show for prize config name
     * 获取棋子展示中奖连线时播放的spine动画配置名称
     */
    protected abstract get spineShowForPrizeConfigName(): string;
    /**
     * Gets spine show configs
     * 获取spine展示配置
     */
    protected abstract get spineShowConfigs(): { [key: string]: SymbolSpineShowConfig[] };

    /**
     * 棋子的spine动画组件，这是通过spineComponentNames名称加载的
     */
    private _spineComponents: Map<string, sp.Skeleton> = new Map<string, sp.Skeleton>();

    /**
     * 保存棋子在棋盘上连续编码的位置
     * 当中奖展示效果结束后，会将这个位置报告给棋盘
     */
    protected _finalPosition: number;
    private _index: number;
    private _code: number;
    private _isFinal: boolean = false;
    private _assets: number;
    private _gameStage: SlotGameStageBase;
    protected symbolGroup: fgui.GGroup;
    private _trackEntries: SpineTrackEntryCount[];
    private isPlayByConfig: boolean = false;
    private playByConfigCallback: Function;
    protected get codeControllerName(): string {
        return "code";
    }
    /**
     * 获取fairygui编辑器设置的inline控制器名称
     */
    protected get inLineControllerName(): string {
        return "inLine";
    }
    /**
     * 获取展示inline效果的控制器编码
     */
    protected get inLineControllerCode(): number {
        return 1;
    }
    protected get symbolGroupComponentName(): string {
        return "symbolGroup";
    }

    public set code(code: number) {
        if (code >= SymbolBoardConst.FINAL_CODE_OFFSET) {
            this._isFinal = true;
            code = code - SymbolBoardConst.FINAL_CODE_OFFSET;
        } else {
            this._isFinal = false;
        }
        this._code = code;
        this.setControllerProperty(this.codeControllerName, code);
    }
    public get code(): number {
        return this._code;
    }
    get isFinal(): boolean {
        return this._isFinal;
    }
    public get assets(): number {
        return this._assets;
    }
    public set assets(value: number) {
        this._assets = value;
    }
    public get index(): number {
        return this._index;
    }
    public set index(value: number) {
        this._index = value;
    }
    /**
     * 播放一组动画中的最后一个动画的trackEntry列表
     * （每一个spine组件对应一个trackEntry）
     * 我们用这个trackEntry来监听这一组动画播放结束
     * （我们定义一组动画播放完成一次的含义是这一组动画所有的动画播放一次）
     */
    protected get trackEntries(): SpineTrackEntryCount[] {
        return this._trackEntries;
    }
    /**
     * 获取棋子spine组件列表
     */
    protected get spineComponents(): Map<string, sp.Skeleton> {
        return this._spineComponents;
    }
    /**
     * 获取棋子spine资源
     */
    protected get spineResources(): SymbolSpineResource {
        // if (!this._gameStage) {
        //     this._gameStage = this.findGameStage();
        //     if (!this._gameStage) {
        //         return null;
        //     }
        // }
        let resources = null; //this._gameStage.getSymbolSpineResourcesByCode(this.code);
        if (resources == null) {
            resources = MogafaSlotsGameStage.gameStages[this.stageCode].symbolSpineResources.find(
                (s) => s.code == this.code
            );
        }
        return resources;
    }
    protected allChildCreated(): void {
        super.allChildCreated();
        if (this.symbolGroupComponentName) {
            const component = this.getChild(this.symbolGroupComponentName);
            if (component) {
                this.symbolGroup = component.asGroup;
            }
        }
    }
    private findGameStage(): SlotGameStageBase {
        let parent = this.parent;
        while (parent.parent) {
            parent = parent.parent;
        }
        return (parent as unknown) as SlotGameStageBase;
    }
    protected createChildComponents() {
        if (this.spineComponentNames) {
            for (let i = 0; i < this.spineComponentNames.length; i++) {
                let spineContainer = this.getChild(this.spineComponentNames[i]).asGraph;
                if (!spineContainer) {
                    cc.error(`包${this.packageName}或spine容器${this.spineComponentNames}不存在`);
                    return;
                }
                const spineComponent = spineContainer.node.addComponent(sp.Skeleton);
                this._spineComponents.set(this.spineComponentNames[i], spineComponent);
                spineComponent.setCompleteListener(this.onSpineCompletedOnce.bind(this));
            }
        }
    }
    public stopShow(): void {
        const stopShow = this.spineShowAfterStop.filter((c) => c.code == this.code);
        if (stopShow) {
            for (let i = 0; i < stopShow.length; i++) {
                this.spinePlay(stopShow[i]);
            }
        }
    }
    public startMove(): void { }
    private onSpineCompletedOnce(trackEntry: any, loopCount: number): void {
        if (!this.trackEntries) {
            return;
        }
        let completed: boolean = false;
        for (let i = 0; i < this._trackEntries.length; i++) {
            const trackEntryCount = this.trackEntries[i];
            let tracks = trackEntryCount.trackEntries.filter(
                (t) => t.trackEntry.animation.name == trackEntry.animation.name
            );
            if (tracks && tracks.length > 0) {
                for (let i = 0; i < tracks.length; i++) {
                    const track = tracks[i];
                    completed = trackEntryCount.completedOnce(track);
                }
                //break;
            }
        }
        if (completed) {
            this.checkAllSpineShowForPrizeCompleted();
        }
    }
    private checkAllSpineShowForPrizeCompleted(): void {
        let allCompleted: boolean = true;
        for (let trackEntryCount of this._trackEntries) {
            if (!trackEntryCount.completed) {
                allCompleted = false;
                break;
            }
        }
        if (allCompleted) {
            if (this.isPlayByConfig) {
                if (this.playByConfigCallback) {
                    if (this.symbolGroup) {
                        this.symbolGroup.visible = true;
                    }
                    this.playByConfigCallback();
                }
            } else {
                this.prizeShowEnd();
            }
        }
    }
    protected spinePlay(spine: SymbolSpineShowConfig): any {
        const spineComponent = this._spineComponents.get(spine.spineComponentName);
        const spineResource = this.spineResources.resources.get(spine.spineName);
        let tarckEntry: any;
        if (spineComponent && spineResource) {
            spineComponent.node.active = true;
            if (this.symbolGroup) {
                this.symbolGroup.visible = false;
            }
            spineComponent.skeletonData = spineResource;

            let count = spine.playParameters.length;
            if (spine.skin) {
                spineComponent.setSkin(spine.skin);
            }

            if (spine.scale) {
                spineResource.scale = spine.scale
                spineComponent.node.scale = spine.scale
            }

            spineComponent.premultipliedAlpha = spine.premultipliedAlpha

            for (let i = 0; i < spine.playParameters.length; i++) {
                const animation = spine.playParameters[i];
                const isLast = i == count - 1;
                const isLoop = isLast ? animation.isLoop : false;
                if (i == 0) {
                    tarckEntry = spineComponent.setAnimation(0, animation.animationName, isLoop);
                } else {
                    tarckEntry = spineComponent.addAnimation(0, animation.animationName, isLoop);
                }
            }
        }
        return tarckEntry;
    }
    public startPrizeShow(finalPosition: number): void {
        // console.log("startPrizeShow")
        this.isPlayByConfig = false;
        this.playByConfigCallback = null;
        this._finalPosition = finalPosition;
        if (this.inLineControllerName) {
            this.setControllerProperty(this.inLineControllerName, this.inLineControllerCode);
        }
        const playing = this.spineShow(this.spineShowForPrize);
        if (!playing) {
            this.playPrizeShow();
        }
    }
    private spineShow(configs: SymbolSpineShowConfig[]): boolean {
        this._trackEntries = [];
        let canBeShow: boolean = false;
        const prizeShowConfigs = configs.filter((s) => s.code == this.code);
        if (!this.spineComponents || !prizeShowConfigs || prizeShowConfigs.length == 0) {
            return canBeShow;
        }
        for (let i = 0; i < prizeShowConfigs.length; i++) {
            let tarckEntry = this.spinePlay(prizeShowConfigs[i]);
            if (tarckEntry) {
                let trackCount = this._trackEntries.find(
                    (t) => t.componentName == prizeShowConfigs[i].spineComponentName
                );
                if (!trackCount) {
                    trackCount = new SpineTrackEntryCount(
                        prizeShowConfigs[i].spineComponentName,
                        prizeShowConfigs[i].completeCount
                    );
                    trackCount.addTrackEntry(tarckEntry);
                    this._trackEntries.push(trackCount);
                }
                canBeShow = true;
            }
        }
        return canBeShow;
    }
    protected playPrizeShow(): void {
        setTimeout(() => this.prizeShowEnd(), 500);
    }
    protected prizeShowEnd(): void {
        if (this.symbolGroup) {
            this.symbolGroup.visible = true;
        }
        for (let spineComponent of this._spineComponents) {
            spineComponent[1].node.active = false;
            spineComponent[1].clearTracks();
            spineComponent[1].skeletonData = null;
        }
        this.setControllerProperty(this.inLineControllerName, 0);
        this.notifyPrizeShowCompleted();
    }
    protected notifyPrizeShowCompleted(): void {
        const parent = (this.parent as unknown) as CellBase;
        if (parent) {
            parent.receivePrizeShowCompleted(this._finalPosition);
        }
    }
    /**
     * 根据配置名称播放spine动画
     *
     * @param configName spine配置名称
     * @param callback spine执行完后回调
     */
    public playSpineByConfig(configName: string, callback?: Function): void {
        if (!configName) {
            if (callback) {
                callback();
            }
            return;
        }
        const configs = this.spineShowConfigs[configName];
        if (configs) {
            this.isPlayByConfig = true;
            this.playByConfigCallback = callback;
            const playing = this.spineShow(configs);
            if (!playing) {
                if (callback) {
                    if (this.symbolGroup) {
                        this.symbolGroup.visible = true;
                    }
                    callback();
                }
            }
        } else {
            if (callback) {
                if (this.symbolGroup) {
                    this.symbolGroup.visible = true;
                }
                callback();
            }
        }
    }
    public reset(): void {
        if (this.symbolGroup) {
            this.symbolGroup.visible = true;
        }
        for (let spineComponent of this._spineComponents) {
            spineComponent[1].node.active = false;
            spineComponent[1].clearTracks();
            spineComponent[1].skeletonData = null;
        }
        this.setControllerProperty(this.inLineControllerName, 0);
        this._trackEntries = [];
        this._isFinal = false;
        this.unscheduleAllCallbacks();
    }
    doubleChessShow(): void {
        if (this.assets == 2 && (this.code == 1 || this.code == 0)) {
            this.setControllerProperty("doubleShow", 1);
        } else {
            this.setControllerProperty("doubleShow", 0);
        }
    }
    public fixedCellShow(): void { }
    public fixedCellHide(): void { }
}
