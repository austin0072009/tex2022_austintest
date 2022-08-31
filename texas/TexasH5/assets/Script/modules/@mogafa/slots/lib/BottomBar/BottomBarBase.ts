
import BetChangedMessage from "./BetChangedMessage";
import { SpinType } from "../SpinType";
import SlotGameStage from "../GameStage/SlotGameStage";
import { SlotGameStageStatus } from "../GameStage/SlotGameStageStatus";

import { BottomBarSpinStaus } from "./BottomBarSpinStaus";
import SpinStatusStrategy from "../SpinStatusStrategy";
import SpinStatusStrategyNormal from "../SpinStatusStrategyNormal";
import SlotGameStageBase from "../GameStage/SlotGameStageBase";
import FguiFullScreenBase from "../../../fairygui-component/lib/FguiFullScreenBase";
import { MogafaNumberField } from "../../../fairygui-component/lib/extensions/MogafaNumberField";
import { ButtonLongTouch } from "../../../fairygui-component/lib/ButtonLongTouch";
import { Utils } from "../../../utils/lib/Utils";
import { AppConst } from "../../../../@slotsmaster/ui-common/lib/AppConst";
import SoundMgr from "../../../utils/lib/SoundMgr";
import { SpinResultsGameMode } from "../../../../spin-result/SpinResultsGameMode";
import SpinResultsFreeTrigger from "../../../../spin-result/SpinResultsFreeTrigger";




const BottomBarEvent = {
    SPIN_CLICK: "BottomBarSpinClick",
    CARD_CLICK: "BottomBarCardClick",
    CHALLENGE_CLICK: "BottomBarChallengeClick",
    AUTO_SPIN: "BottomBarAutoSpin",
    FAST_CLICK: "BottomBarFastClick",
    BET_CHANGED: "BottomBarBetChanged",
    COIN_CHANGED: "BottombarCoinChanged",
};

export default abstract class BottomBarBase extends FguiFullScreenBase {
    //#region 组件名称
    protected get challengeButtonName(): string {
        return "challenge";
    }
    protected get cardButtonName(): string {
        return "card";
    }
    protected get maxBetButtonName(): string {
        return "maxBet";
    }
    protected get fastButtonName(): string {
        return "fast";
    }
    protected get spinButtonName(): string {
        return "spin";
    }
    protected get autoSpinComponent(): string {
        return "autoSpin";
    }
    protected get autoSpinButtonName(): string {
        return "spin.autoSpin.auto";
    }
    protected get spin100ButtonName(): string {
        return "spin.autoSpin.spin100";
    }
    protected get spin50ButtonName(): string {
        return "spin.autoSpin.spin50";
    }
    protected get spin15ButtonName(): string {
        return "spin.autoSpin.spin15";
    }
    protected get freeSpinCountName(): string {
        return "spin.freeSpinsCount";
    }
    protected get autoSpinCountName(): string {
        return "spin.autoStopCount";
    }
    protected get infinityName(): string {
        return "spin.infinity";
    }
    protected get winCoinsName(): string {
        return "winCoins";
    }
    protected get coinsName(): string {
        return "winCoins.coins";
    }
    protected get twinkleName(): string {
        return "winCoins.twinkle";
    }
    protected get totalBetName(): string {
        return "totalBet";
    }
    protected get betName(): string {
        return "totalBet.bet";
    }
    protected get increaseBetName(): string {
        return "totalBet.increaseBet";
    }
    protected get decreaseBetName(): string {
        return "totalBet.decreaseBet";
    }
    protected get spinStatusControllerName(): string {
        return "spin.spinStatus";
    }

    protected get spinUserGold(): string {
        return null;
    }

    protected get exitButtonName(): string {
        return null;
    }

    protected get helpButtonName(): string {
        return null;
    }

    protected get SoundButtonName(): string {
        return null;
    }

    //#endregion 组件名称
    public _spinType: SpinType = SpinType.Spin;
    private _nextGameMode: SpinResultsGameMode = SpinResultsGameMode.Normal; //#region 组件
    protected bottomBar: fgui.GComponent;
    protected challengeButton: fgui.GButton;
    protected cardButton: fgui.GButton;
    protected decreaseBetButton: fgui.GButton;
    protected increaseBetButton: fgui.GButton;
    protected betNumber: fgui.GTextField;
    protected winCoin: MogafaNumberField;
    protected maxBetButton: fgui.GButton;
    protected fastButton: fgui.GButton;
    protected spinButton: fgui.GButton;
    protected autoSpinButton: fgui.GButton;
    protected spin100Button: fgui.GButton;
    protected spin50Button: fgui.GButton;
    protected spin15Button: fgui.GButton;
    protected freeSpinCountField: fgui.GTextField;
    protected autoSpinCountField: fgui.GTextField;
    protected UserGold: MogafaNumberField;
    protected infinity: fgui.GGraph;
    private twinkle: fgui.GLoader;
    protected ExitButton: fgui.GButton;
    protected HelpButton: fgui.GButton;
    protected SoundButton: fgui.GButton;
    //#endregion

    private _autoSpinCount: string;
    private _freeSpinCount: string;
    private _game: SlotGameStage;
    private _isFast: boolean = false;
    private _bets: number[] = [];
    private _bet: number = 0;
    protected _prevWinCoins: number = 0;
    protected _winCoins: number;
    private _coins: number;
    private _coinsChangeTime: number = 1;
    private _gameStatus: SlotGameStageStatus = SlotGameStageStatus.Ready;
    private _currentGameType: SpinResultsGameMode;
    private _freeGameTrigger: SpinResultsFreeTrigger;
    private _spinStatusStrategy: SpinStatusStrategy = new SpinStatusStrategyNormal();
    private _buttonLongTouch: ButtonLongTouch = null;
    private _totalAutoSpinTimes: number = 0;
    private _originTimes: number = 0;
    private _totalLineCount: number = 0;
    protected spinStatus: BottomBarSpinStaus;
    protected _freeModeFinished: boolean = false;
    private _isAutoSpin: boolean = false;
    public isJackpot: boolean = false;
    //* 金币文本
    private _coinLabel: fgui.GTextField;
    //* coin LltyuNumberField
    private _coinField: MogafaNumberField;
    //* 金币增长动画所需时间
    private _coinIncreaseTime: number = 1.5;

    public get isAutoSpin(): boolean {
        return this._isAutoSpin;
    }

    public set isAutoSpin(value: boolean) {
        this._isAutoSpin = value;
    }

    //#region 属性
    public get spinType(): SpinType {
        return this._spinType;
    }
    public set spinType(value: SpinType) {
        this._spinType = value;
        switch (value) {
            case SpinType.AutoSpin:
                this.setControllerProperty(this.spinStatusControllerName, 2);
                break;
            case SpinType.FreeSpin:
                this.setControllerProperty(this.spinStatusControllerName, 3);
                break;
            case SpinType.Respin:
                this.setControllerProperty(this.spinStatusControllerName, 1);
                break;
            case SpinType.Spin:
                this.setControllerProperty(this.spinStatusControllerName, 0);
                break;
        }
    }

    public get totalLineCount(): number {
        return this._totalLineCount;
    }

    public set totalLineCount(data: number) {
        this._totalLineCount = data;
    }

    private get coinsChangeTime(): number {
        return this._coinsChangeTime;
    }
    private set coinsChangeTime(changeTime: number) {
        this._coinsChangeTime = changeTime;
    }
    public get winCoins(): number {
        return this._winCoins;
    }
    public set winCoins(value: number) {
        this._winCoins = value;
        //* respin中不对金币进行改变
        if (SlotGameStageBase.spinResults && SlotGameStageBase.spinResults.gameMode === SpinResultsGameMode.Respin) {
            return;
        }
        if (value > 0) {
            this.winCoin.play(this._prevWinCoins, value, this.coinsChangeTime, this.coinPlayCallback.bind(this));
            this.emitCoinChanged();
        } else {
            this.getChild(this.coinsName).asTextField.text = Utils.formatNumberToInt(0, 0);
        }
        //* 当前游戏模式处于特殊模式下记录上一次的金币数，方便在展示金币增长时不用从0开始
        if (this.currentGameMode !== SpinResultsGameMode.Normal) {
            this._prevWinCoins = value;
        } else {
            this._prevWinCoins = 0;
        }
    }

    get coins(): number {
        return this._coins;
    }
    set coins(value: number) {
        if (value != null && this._coins != value) {
            this._coins = value;
            if (this._coinsChangeTime) {
                this.coinIncreaseAnime(value.toString());
            }
            //* 若没有增长时间，则直接赋值
            else {
                this._coinLabel.text = Utils.formatNumberToInt(value, 0);
            }
        }
    }

    public coinPlayCallback(): void {
        this.offCoinChanged();
    }
    public get freeSpinCount(): string {
        return this._freeSpinCount;
    }
    public set freeSpinCount(value: string) {
        this._freeSpinCount = value;
    }
    public get autoSpinCount(): string {
        return this._autoSpinCount;
    }
    public set autoSpinCount(value: string) {
        this._autoSpinCount = value;
    }
    public get game(): SlotGameStage {
        return this._game;
    }
    public set game(value: SlotGameStage) {
        if (this._game) {
            this._game.offStatusChanged(this.statusChanged, this);
        }
        this._game = value;
        if (this._game) {
            this._game.onStatusChanged(this.statusChanged, this);
        }
    }
    public get isFast(): boolean {
        return this._isFast;
    }
    protected set isFastInternal(value: boolean) {
        this._isFast = value;
    }
    public get isMinBet(): boolean {
        if (!this._bets || this._bets.length == 0) {
            return true;
        }
        return this._bet == this._bets[0];
    }
    public get isMaxBet(): boolean {
        if (!this._bets || this._bets.length == 0) {
            return true;
        }
        return this._bet == this._bets[this._bets.length - 1];
    }
    protected get gameStatus(): SlotGameStageStatus {
        return this._gameStatus;
    }
    protected set gameStatus(value: SlotGameStageStatus) {
        this._gameStatus = value;
    }
    public get bet(): number {
        return this._bet;
    }
    public set bet(value: number) {
        this._bet = value;

        this.betNumber.text = Utils.numToCountingNnit(this.bet);

        if (this._totalLineCount) {
            this.betNumber.text = Utils.numToCountingNnit(this.bet * this._totalLineCount);
        }

    }
    public set bets(bets: number[]) {
        this._bets = bets;

        if (AppConst.enterRoomData && AppConst.enterRoomData.betScores) {
            this._bets = AppConst.enterRoomData.betScores
            this._totalLineCount = AppConst.enterRoomData.totalLineCount > 50 ? 50 : AppConst.enterRoomData.totalLineCount
        }

        if (!this._bets) {
            this._bets = [];
            this._bet = 0;
            this.node.dispatchEvent(new BetChangedMessage(this._bet, this.isMinBet, this.isMaxBet));
            return;
        }
        this._bets = this._bets.sort((a, b) => a - b);
        let bet = this._bets.find((b) => this._bet == b);
        if (!bet) {
            this.bet = this._bets[0];
            this.changeBetButtonsEnable(true, false);
            this.node.dispatchEvent(new BetChangedMessage(this._bet, this.isMinBet, this.isMaxBet));
        }
    }
    public get bets(): number[] {
        if (!this._bets) {
            this._bets = [];
        }
        return this._bets;
    }
    public get nextGameMode(): SpinResultsGameMode {
        return this._nextGameMode;
    }
    public set nextGameMode(value: SpinResultsGameMode) {
        this._nextGameMode = value;
    }
    public get currentGameMode(): SpinResultsGameMode {
        return this._currentGameType;
    }
    public set currentGameMode(value: SpinResultsGameMode) {
        this._currentGameType = value;
    }
    public get freeGameTrigger(): SpinResultsFreeTrigger {
        return this._freeGameTrigger;
    }
    public set freeGameTrigger(value: SpinResultsFreeTrigger) {
        this._freeGameTrigger = value;
    }
    public get spinStatusStrategy(): SpinStatusStrategy {
        return this._spinStatusStrategy;
    }
    public set spinStatusStrategy(value: SpinStatusStrategy) {
        this._spinStatusStrategy = value;
    }
    /**
     * 自动spin时的延时时间，可在子类复写
     */
    public get holdUpTime() {
        return 1;
    }
    public get freeModeFinished(): boolean {
        return this._freeModeFinished;
    }

    public set freeModeFinished(value: boolean) {
        this._freeModeFinished = value;
    }
    //#endregion

    protected createChildComponents() {
        super.createChildComponents();
        this.bottomBar = this.fguiComponent;
        let component: fgui.GComponent;
        // if (this.challengeButtonName) {
        //     component = this.getChild(this.challengeButtonName);
        //     if (component) {
        //         this.challengeButton = component.asButton;
        //         this.challengeButton.onClick(this.onChallengeClick.bind(this));
        //     } else {
        //         cc.error(`成就按钮组件${this.challengeButtonName}不存在`);
        //     }
        // }
        if (this.cardButtonName) {
            component = this.getChild(this.cardButtonName);
            if (component) {
                this.cardButton = component.asButton;
                this.cardButton.onClick(this.onCardClick.bind(this));
            } else {
                cc.error(`卡组按钮组件${this.cardButtonName}不存在`);
            }
        }

        if (this.maxBetButtonName) {
            component = this.getChild(this.maxBetButtonName);
            if (component) {
                this.maxBetButton = component.asButton;
                this.maxBetButton.onClick(this.onMaxBetClick.bind(this));
            } else {
                cc.error(`最大下注按钮组件${this.maxBetButtonName}不存在`);
            }
        }
        if (this.fastButtonName) {
            this.fastButton = this.getChild(this.fastButtonName).asButton;
            this.fastButton.onClick(this.onFastClickInternal.bind(this));
        }
        if (this.spinButtonName) {
            this.spinButton = this.getChild(this.spinButtonName).asButton;
            this.spinButton.node.on("touch-long", this.onSpinLongTouchInternal.bind(this));
            this.spinButton.node.on("touch-short", this.onSpinClickInternal.bind(this));
            this.spinButton.node.on("touch-double", this.onSpinDoubleTouchInternal.bind(this))
            this._buttonLongTouch = this.addFguiComponent(ButtonLongTouch);
        }
        if (this.autoSpinButtonName) {
            this.autoSpinButton = this.getChild(this.autoSpinButtonName).asButton;
            this.autoSpinButton.onClick(this.onAutoSpinClickInternal.bind(this));
        }
        if (this.spin100ButtonName) {
            this.spin100Button = this.getChild(this.spin100ButtonName).asButton;
            this.spin100Button.onClick(this.onSpin100ClickInternal.bind(this));
        }
        if (this.spin50ButtonName) {
            this.spin50Button = this.getChild(this.spin50ButtonName).asButton;
            this.spin50Button.onClick(this.onSpin50ClickInternal.bind(this));
        }
        if (this.spin15ButtonName) {
            this.spin15Button = this.getChild(this.spin15ButtonName).asButton;
            this.spin15Button.onClick(this.onSpin15ClickInternal.bind(this));
        }
        if (this.betName) {
            this.betNumber = this.getChild(this.betName).asTextField;
        }
        if (this.increaseBetName) {
            this.increaseBetButton = this.getChild(this.increaseBetName).asButton;
            this.increaseBetButton.onClick(this.onIncreaseBetClick.bind(this));
        }
        if (this.decreaseBetName) {
            this.decreaseBetButton = this.getChild(this.decreaseBetName).asButton;
            this.decreaseBetButton.onClick(this.onDecreaseBetClick.bind(this));
        }
        if (this.twinkleName) {
            this.twinkle = this.getChild(this.twinkleName).asLoader;
            this.twinkle.visible = false;
        }
        if (this.coinsName) {
            this.winCoin = this.getChild(this.coinsName).asMogafaNumberField();
        }
        if (this.autoSpinCountName) {
            component = this.getChild(this.autoSpinCountName);
            if (component) {
                this.autoSpinCountField = component.asTextField;
            } else {
                cc.error(`auto spin 计数组件${this.autoSpinCountName}不存在`);
            }
        }
        if (this.infinityName) {
            component = this.getChild(this.infinityName);
            if (component) {
                this.infinity = component.asGraph;
            } else {
                cc.error(`auto spin 计数组件${this.infinityName}不存在`);
            }
        }
        if (this.freeSpinCountName) {
            component = this.getChild(this.freeSpinCountName);
            if (component) {
                this.freeSpinCountField = component.asTextField;
            } else {
                cc.error(`free spin 计数组件${this.freeSpinCountName}不存在`);
            }
        }
        if (this.spinUserGold) {
            component = this.getChild(this.spinUserGold);
            if (component) {
                this._coinLabel = component.asTextField;
                this._coinField = this._coinLabel.asMogafaNumberField();
            } else {
                cc.error(`free spin 计数组件${this.spinUserGold}不存在`);
            }
        }

        if (this.exitButtonName) {
            component = this.getChild(this.exitButtonName);
            if (component) {
                this.ExitButton = component.asButton;
                this.ExitButton.onClick(this.onExitClick.bind(this));
            } else {
                cc.error(`free spin 计数组件${this.spinUserGold}不存在`);
            }
        }

        if (this.helpButtonName) {
            component = this.getChild(this.helpButtonName);
            if (component) {
                this.HelpButton = component.asButton;
                this.HelpButton.onClick(this.onHelpClick.bind(this));
            } else {
                cc.error(`free spin 计数组件${this.spinUserGold}不存在`);
            }
        }

        if (this.SoundButtonName) {
            component = this.getChild(this.SoundButtonName);
            if (component) {
                this.SoundButton = component.asButton;
                this.SoundButton.onClick(this.onSoundClick.bind(this));
            } else {
                cc.error(`free spin 计数组件${this.spinUserGold}不存在`);
            }
        }
    }

    allChildCreated() {
        super.allChildCreated();
        if (this.spinButtonName) {
            this._buttonLongTouch.registerTouchLong(this.spinButton.node);
        }
        this.addAllButtonMusic(this.fguiComponent);
    }

    /**
     * 添加所有按钮的音效
     * @param fguiComponent
     */
    private addAllButtonMusic(fguiComponent: fgui.GComponent): void {
        fguiComponent._children.map((item) => {
            if (item.node.name === "GComponent") {
                this.addAllButtonMusic(item.asCom);
            }
            if (item.node.name === "GButton") {
                item.node.on("touchstart", this.onButtonClickMusic.bind(this));
            }
        });
    }

    /**
     * 设置用户金币
     * @param userCoins
     * @param changeTime
     */
    public setUserCoins(userCoins: number, changeTime: number = 1): void {
        if (this.spinUserGold) {
            console.log("setUserCoins")
            this.coinsChangeTime = changeTime;
            this.coins = userCoins;
        }
    }

    public addMaxBet(bet: number[]): void {
        let bets = this._bets.concat();
        let isChange = false;
        if (bet.length > 0) {
            for (let i = 0; i < bet.length; i++) {
                for (let j = 0; j < bets.length; j++) {
                    if (bet[i] == bets[j]) {
                        cc.error("等级增加的抵注跟升级前存在相同抵注::", bet[i]);
                        break;
                    }
                    if (j == bets.length - 1 && bet[i] > bets[j]) {
                        this._bets.push(bet[i]);
                        isChange = true;
                    }
                }
            }
            if (isChange) {
                this.changeBetButtonsEnable(this.isMinBet, this.isMaxBet);
            }
            console.log("addMaxBetaddMaxBetaddMaxBet::", this._bets);
        }
    }

    protected increaseBet(): number {
        console.log("increaseBet")
        let index: number = this._bets.findIndex((b) => b == this._bet);
        index++;
        if (index >= this._bets.length) {
            index = this._bets.length - 1;
        }
        this.bet = this._bets[index];
        this.betChangedInternal();
        return this._bet;
    }
    protected decreaseBet(): number {
        console.log("decreaseBet")
        let index: number = this._bets.findIndex((b) => b == this._bet);
        index--;
        if (index < 0) {
            index = 0;
        }
        this.bet = this._bets[index];

        this.betChangedInternal();
        return this._bet;
    }
    protected maxBet(): number {
        let bet = this._bet;
        let betChanged: boolean = false;
        if (!this._bets || this._bets.length == 0) {
            bet = 0;
        } else {
            bet = this._bets[this._bets.length - 1];
        }
        if (bet != this._bet) {
            betChanged = true;
        }
        this.bet = bet;
        if (betChanged) {
            this.betChangedInternal();
        }
        return this._bet;
    }

    /**
     * 金币增长动画
     * @param coinLabel
     */
    private coinIncreaseAnime(coinLabel: string) {
        let coins = 0;
        if (this._coinLabel.text == "") {
            coins = 0;
        } else {
            coins = Utils.strToNumber(this._coinLabel.text);
        }
        this._coinLabel.text = Utils.formatNumberToInt(coinLabel);

        this._coinField.play(coins, parseInt(coinLabel), this._coinIncreaseTime);
    }
    public cancelCoinIncreaseAnime(): void {
        this._coinField.cancelPlay();
    }

    protected enableAllButtons(): void {
        if (this.cardButton) {
            this.cardButton.enabled = true;
            this.cardButton.touchable = true;
        }
        if (this.fastButton) {
            this.fastButton.enabled = true;
            this.fastButton.touchable = true;
        }
        if (this.autoSpinButton) {
            this.autoSpinButton.enabled = true;
            this.autoSpinButton.touchable = true;
        }
        this.changeBetButtonsEnable(this.isMinBet, this.isMaxBet);
    }
    protected disableAllButtonsButSpin(): void {
        if (this.cardButton) {
            this.cardButton.enabled = false;
            this.cardButton.touchable = false;
        }
        if (this.fastButton) {
            this.fastButton.enabled = false;
            this.fastButton.touchable = false;
        }
        if (this.decreaseBetButton) {
            this.decreaseBetButton.enabled = false;
            this.decreaseBetButton.touchable = false;
        }
        if (this.increaseBetButton) {
            this.increaseBetButton.enabled = false;
            this.increaseBetButton.touchable = false;
        }
        if (this.maxBetButton) {
            this.maxBetButton.enabled = false;
            this.maxBetButton.touchable = false;
        }
        if (this.autoSpinButton) {
            this.autoSpinButton.enabled = false;
            this.autoSpinButton.touchable = false;
        }
    }
    protected stopSpinClick(): void { }
    protected _autoTimes: number = 1;
    private statusChanged(status: SlotGameStageStatus): void {
        console.log("BottomBarBase statusChanged=======" + status)
        this.gameStatus = status;
        let spinStatus = this._spinStatusStrategy.getSpinStatus(
            status,
            this._spinType,
            this._freeGameTrigger,
            this._nextGameMode
        );
        this.spinStatus = spinStatus.spinStatus;
        this.spinButton.enabled = spinStatus.enable;
        this.changeBetButtonsEnable(this.isMinBet, this.isMaxBet);
        if (this._spinType != SpinType.Spin) {
            this.disableAllButtonsButSpin();
        }
        if (this._nextGameMode == SpinResultsGameMode.Normal && status == SlotGameStageStatus.Ready) {
            this.enableAllButtons();
        } else {
            this.disableAllButtonsButSpin();
        }
        //* 自动次数大于0且spin状态为自动状态且与游戏状态为ready状态时，自动状态继续
        if (
            this._autoTimes >= 0 &&
            this.spinStatus === BottomBarSpinStaus.StopAutoSpin &&
            status === SlotGameStageStatus.Ready
        ) {
            //* 因为棋盘在停止后因转动策略的影响会多次触发statusChanged，若每次进来都执行延时操作，
            //* 会在栈中放进多个onSpinClickInternal函数，导致多次触发，因此需要在每次延时执行时，
            //* 清空掉上一次的延时操作，最终只执行一次延时
            this.unscheduleAllCallbacks();
            this.scheduleOnce(() => {
                this.onSpinClickInternal(this._autoTimes, true, this._originTimes);
            }, this.holdUpTime);
        }
        this.setControllerProperty(this.spinStatusControllerName, spinStatus.spinStatus);
    }

    protected changeBetButtonsEnable(isMin: boolean, isMax: boolean): void {
        if (this.decreaseBetButton && this.increaseBetButton) {
            this.decreaseBetButton.enabled = !isMin;
            this.decreaseBetButton.touchable = !isMin;
            this.increaseBetButton.enabled = !isMax;
            this.increaseBetButton.touchable = !isMax;
        }

        if (this.maxBetButton) {
            this.maxBetButton.enabled = !isMax;
            this.maxBetButton.touchable = !isMax;
        }
    }
    protected betChangedInternal(): void {
        //this.betNumber.text = Utils.numToCountingNnit(this.bet);
        this.changeBetButtonsEnable(this.isMinBet, this.isMaxBet);
        this.node.emit(BottomBarEvent.BET_CHANGED, {
            bet: this.bet,
            isMin: this.isMinBet,
            isMax: this.isMaxBet,
        });
        this.node.emit("BET_CHANGE", this.bet);
    }
    public changeFreeSpinCount(finished: number, total: number): void {
        if (this.freeSpinCountField) {
            this._originTimes = total;
            this.freeSpinCountField.text = `${total - finished}/${total}`;
        }
    }
    public changeAutoSpinCount(finished: number): void {
        if (this.autoSpinCountField) {
            this.autoSpinCountField.text = finished.toString();
        }
    }
    protected onDecreaseBetClick(): void {
        this.decreaseBet();
    }
    protected onIncreaseBetClick(): void {
        this.increaseBet();
    }
    protected onMaxBetClick(): void {
        this.maxBet();
    }
    protected onExitClick(): void {
        console.log("返回大厅：：：：：：：：：：：：：：：：：：：：：：：：：：")
        if (cc.sys.isBrowser) {
            window.close()
        } else {
            cc.director.loadScene("Login");
        }
    }
    protected onHelpClick(): void {
        this.node.emit("showPayTable");
    }
    protected onSoundClick(): void {
        console.log("onSoundClick")
        if (SoundMgr.getInstance().getSoundStatus()) {
            SoundMgr.getInstance().setSoundStatus("close");
        } else {
            SoundMgr.getInstance().setSoundStatus("open");
        }

        if (SoundMgr.getInstance().getEffectStatus()) {
            SoundMgr.getInstance().setEffectStatus("close");
        } else {
            SoundMgr.getInstance().setEffectStatus("open");
        }
    }
    protected onFastClickInternal(): void {
        this.isFastInternal = !this.isFast;
        this.fastButton.controllers[1].selectedIndex = this.isFast ? 1 : 0;
        this.node.emit(BottomBarEvent.FAST_CLICK, this.isFast);
    }
    protected onAutoSpinClickInternal(): void {
        if (this.autoSpinCountField) {
            this.autoSpinCountField.text = "";
        }
        this.spinType = SpinType.AutoSpin;
        this.spinStatus = BottomBarSpinStaus.StopAutoSpin;
        this.onSpinClickInternal(9999999, true, -1);
    }
    protected onSpin100ClickInternal(): void {
        this.autoSpinCountField.text = "100";
        this.spinType = SpinType.AutoSpin;
        this.spinStatus = BottomBarSpinStaus.StopAutoSpin;
        this.onSpinClickInternal(100, true);
    }
    protected onSpin50ClickInternal(): void {
        this.autoSpinCountField.text = "50";
        this.spinType = SpinType.AutoSpin;
        this.spinStatus = BottomBarSpinStaus.StopAutoSpin;
        this.onSpinClickInternal(50, true);
    }
    protected onSpin15ClickInternal(): void {
        this.autoSpinCountField.text = "15";
        this.spinType = SpinType.AutoSpin;
        this.spinStatus = BottomBarSpinStaus.StopAutoSpin;
        this.onSpinClickInternal(15, true);
    }
    /**
     * 长按按钮事件处理
     */
    protected onSpinLongTouchInternal(): void {
        //* spinType不为autoSpinMenu和autoSpin时，设置spinType为autoSpinMenu
        console.log("onSpinLongTouchInternal")
        if (this.spinType === SpinType.Spin && this.spinStatus === BottomBarSpinStaus.Ready) {
            this.setControllerProperty(this.spinStatusControllerName, BottomBarSpinStaus.AutoSpinMenu);
        }
    }

    protected onSpinDoubleTouchInternal(): void {
        console.log("onSpinDoubleTouchInternal")
    }

    /**
     * spin按钮点击事件内部处理
     * @param times spin次数
     * @param isAuto 是否为自动
     * @param originTimes 初始值，用于自动spin选自动时，无穷大的判断
     */
    protected onSpinClickInternal(times: number = 1, isAuto: boolean = false, originTimes?: number): void {
        console.log("onSpinClickInternal")
        this.isAutoSpin = isAuto;
        if (!this.spinButton.enabled) {
            return;
        }
        if (
            !this._freeModeFinished &&
            this._nextGameMode == SpinResultsGameMode.Normal &&
            (this._currentGameType == SpinResultsGameMode.FreeSpin ||
                this._currentGameType == SpinResultsGameMode.Respin)
        ) {
            return;
        }
        if (this._freeModeFinished) {
            this._freeModeFinished = false;
        }
        if (!this.game.checkCoinEnough()) {
            return;
        }
        if (!originTimes) {
            this._originTimes = times;
        } else {
            this._originTimes = originTimes;
        }
        if (this.infinity) {
            if (this._originTimes < 0) {
                this.infinity.node.active = true;
            } else {
                this.infinity.node.active = false;
            }
        }

        this._autoTimes = times;
        //* 记录总共自动转的次数，用于手动停止时
        if (!this._totalAutoSpinTimes) {
            this._totalAutoSpinTimes = times;
        } else {
            //* 手动停止autoSpin
            if (this._totalAutoSpinTimes !== times && !isAuto) {
                this.spinType = SpinType.Spin;
                this.spinStatus = BottomBarSpinStaus.Ready;
                this.game.spinClick(times);
                this.node.emit(BottomBarEvent.SPIN_CLICK);
                //* 手动停止后归零
                this._totalAutoSpinTimes = 0;
                return;
            }
        }
        if (this.gameStatus == SlotGameStageStatus.Ready) {
            this.disableAllButtonsButSpin();
        } else {
            this.stopSpinClick();
        }
        //* autoSpin状态
        if (this.spinStatus === BottomBarSpinStaus.StopAutoSpin) {
            if (this._autoTimes === 0) {
                this.spinType = SpinType.Spin;
                this.spinStatus = BottomBarSpinStaus.Ready;
                this.node.emit(BottomBarEvent.SPIN_CLICK);
                //* autoSpin自动结束后归零
                this._totalAutoSpinTimes = 0;
                this.enableAllButtons();
                return;
            } else {
                this._autoTimes--;
                if (this._totalAutoSpinTimes >= 0 && this._originTimes > -1) {
                    this.changeAutoSpinCount(this._autoTimes);
                }
                this.game.spinClick(times);
                return;
            }
        }
        this.game.spinClick(times);
        this.node.emit(BottomBarEvent.SPIN_CLICK);
    }
    /**
     * 继续autospin
     */
    protected continueAutoSpin(): void {
        this.onSpinClickInternal(this._autoTimes, true, this._originTimes);
    }
    /**
     * 设置win框金币
     * @param winCoins
     * @param changeTime
     */
    public setWinCoins(winCoins: number, changeTime: number = 1) {
        this.coinsChangeTime = changeTime;
        this.winCoins = winCoins;
    }
    public onSpinClick(listener: Function, target?: any): void {
        this.node.on(BottomBarEvent.SPIN_CLICK, listener, target);
    }
    public offSpinClick(listener: Function, target?: any): void {
        this.node.off(BottomBarEvent.SPIN_CLICK, listener, target);
    }
    public clearSpinClick(): void {
        this.node.off(BottomBarEvent.SPIN_CLICK);
    }
    public onChallengeClick(listener: Function, target?: any): void {
        this.node.on(BottomBarEvent.CHALLENGE_CLICK, listener, target);
    }
    public offChallengeClick(listener: Function, target?: any): void {
        this.node.off(BottomBarEvent.CHALLENGE_CLICK, listener, target);
    }
    public clearChallengeClick(): void {
        this.node.off(BottomBarEvent.CHALLENGE_CLICK);
    }
    public onCardClick(listener: Function, target?: any): void {
        this.node.emit(BottomBarEvent.CARD_CLICK);
    }
    public onCardClickEvent(listener: Function, target?: any): void {
        this.node.on(BottomBarEvent.CARD_CLICK, listener, target);
    }

    public onAutoSpin(listener: Function, target?: any): void {
        this.node.on(BottomBarEvent.AUTO_SPIN, listener, target);
    }
    public offAutoSpin(listener: Function, target?: any): void {
        this.node.off(BottomBarEvent.AUTO_SPIN, listener, target);
    }
    public clearAutoSpin(): void {
        this.node.off(BottomBarEvent.AUTO_SPIN);
    }
    public onFastClick(listener: Function, target?: any): void {
        this.node.on(BottomBarEvent.FAST_CLICK, listener, target);
    }
    public offFastClick(listener: Function, target?: any): void {
        this.node.off(BottomBarEvent.FAST_CLICK, listener, target);
    }
    public clearFastClick(): void {
        this.node.off(BottomBarEvent.FAST_CLICK);
    }
    public onBetChanged(listener: Function, target?: any): void {
        this.node.on(BottomBarEvent.BET_CHANGED, listener, target);
    }
    public offBetChanged(listener: Function, target?: any): void {
        this.node.off(BottomBarEvent.BET_CHANGED, listener, target);
    }
    public clearBetChanged(): void {
        this.node.off(BottomBarEvent.BET_CHANGED);
    }
    /**
     * 金币变化事件
     * 可以在此方法中绑定处理金币变化的事件和音效
     * @param listener
     * @param target
     */
    public onCoinChanged(listener: Function, target?: any): void {
        this.node.on(BottomBarEvent.COIN_CHANGED, listener, target);
    }
    public emitCoinChanged(target?: any) {
        this.node.emit(BottomBarEvent.COIN_CHANGED, target);
    }
    public offCoinChanged(): void {
        this.node.off(BottomBarEvent.COIN_CHANGED);
    }
    /**
     * 按钮点击播放音效事件
     * 子类重载此方法给按钮绑定音乐
     */
    public onButtonClickMusic(): void { }
}
