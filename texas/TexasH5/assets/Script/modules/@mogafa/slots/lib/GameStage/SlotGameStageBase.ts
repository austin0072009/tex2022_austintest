import SlotGameStage from "./SlotGameStage";

import { SlotGameStageEvent } from "./SlotGameStageEvent";
import SymbolBoardBase from "../SymbolBoard/SymbolBoardBase";
import BottomBarBase from "../BottomBar/BottomBarBase";
import { SlotGameStageStatus } from "./SlotGameStageStatus";
import { PrizeShowStatus } from "../PrizeShowStatus";
import SymbolSpineResource from "../SymbolBoard/SymbolSpineResource";
import { MogafaSlots } from "../MogafaSlots";
import { SymbolBoardStatus } from "../SymbolBoard/SymbolBoardStatus";
import { SpinType } from "../SpinType";
import TopBarBase from "../TopBar/TopBarBase";
import WinBase from "../Common/WinBase";
import LevelUpBase from "../Common/LevelUpBase";


import FguiFullScreenBase from "../../../fairygui-component/lib/FguiFullScreenBase";
import { MogafaExtensions } from "../../../fairygui-component/lib/extensions/MogafaExtensions";
import FguiComponentBase from "../../../fairygui-component/lib/FguiComponentBase";
import { AppConst } from "../../../../@slotsmaster/ui-common/lib/AppConst";
import WebSocket from "../../../utils/lib/WebSocket"
import SpinResults from "../../../../spin-result/SpinResults";
import { SpinResultsGameMode } from "../../../../spin-result/SpinResultsGameMode";
import { SpinResultsWinType } from "../../../../spin-result/SpinResultsWinType";
import SpinResultsUpgrade from "../../../../spin-result/SpinResultsUpgrade";
import { SpinResultsEventCode } from "../../../../spin-result/SpinResultsEventCode";
import SpinResultsWheelItem from "../../../../spin-result/SpinResultsWheeItem";
import SpinResultsWheel from "../../../../spin-result/SpinResultsWheel";
import SpinResultsFreeTrigger from "../../../../spin-result/SpinResultsFreeTrigger";
import SpinResultsCard from "../../../../spin-result/SpinResultsCard";
import { plainToClass } from "class-transformer";
import SoundMgr from "../../../utils/lib/SoundMgr";

/**
 * slot游戏基类
 */
export default abstract class SlotGameStageBase extends FguiFullScreenBase implements SlotGameStage, MogafaSlots {
    /**
     * 全局当前的结果，注意，这个结果是只读的，不要修改其中的内容
     * //todo 后面只提供需要关心的数据，不用把整个spinResults暴露出来
     */
    public static spinResults: SpinResults;
    /**
     * 游戏名称
     */
    protected abstract get gameName(): string;
    /**
     * 游戏编码
     */
    abstract get stageCode(): string;
    /**
     * 棋盘的位置索引对应服务器坐标系
     */
    public BoardIndex: number[][];
    /**
     * 获取最大棋子编码,需要在子类重写
     * @returns 最大棋子编码
     */
    public abstract get maxCode(): number;

    /**
     * 棋子的spine动画资源
     */
    protected abstract get symbolSpineUrls(): SymbolSpineResource[];
    /**
     * Gets chip symbol codes
     * 筹码棋子编号，如果没有返回空数组
     */
    protected abstract get chipSymbolCodes(): number[];
    /**
     * Gets jackpot symbol codes
     * jackpot棋子编号，如果没有返回空数组
     */
    protected abstract get jackpotSymbolCodes(): number[];
    /**
     * 转动时需要排除的棋子，其中key为gameMode
     * @example
     * 比如有些游戏在freespin中不允许再次触发freespin,
     * 那么在freespin转动中就需要排除scatter棋子
     * ```ts
     * protecte get excludeSymbols():{[key:number]:number[]}{
     *     return {SpinResultsGameMode.FreeSpin:[Symbols.Scatter]};
     * }
     * ```ts
     */
    protected abstract get excludeChesses(): {
        [key: number]: number[];
    };

    /*
    jackpot棋子编号
    */
    public JackPotCode: number;
    /*
    Scatter棋子编号
    */
    public ScatterCode: number;
    /*
    特殊时间触发棋子
    */
    public BonusCode: number;

    private _status: SlotGameStageStatus = SlotGameStageStatus.Ready;
    private _currentGameMode: SpinResultsGameMode;
    private _freeModeTrigger: SpinResultsGameMode;
    private hasBigWin: boolean = false;
    private bigWinShowEnded: boolean = true;
    private hasJackpot: boolean = false;
    private jackpotShowEnded: boolean = true;
    private $spinResults: SpinResults;
    private $cleans: any;
    private symbolSpineResources: SymbolSpineResource[];
    private symbolSpineResourceLoadedIndex: number = 0;
    private $spinRoute: any;
    private CallbackData: any;
    private CallbackChangeData: any;
    protected get spinRoute(): any {
        return this.$spinRoute;
    }
    protected set spinRoute(value: any) {
        this.$spinRoute = value;
    }
    private $spinParams: any;
    protected get spinParams(): any {
        return this.$spinParams;
    }
    protected set spinParams(value: any) {
        this.$spinParams = value;
    }
    /**
     * 当前游戏类型
     */
    private $gameMode: SpinResultsGameMode = SpinResultsGameMode.Normal;
    /**
     * 下一局游戏类型
     */
    private $nextGameMode: SpinResultsGameMode = SpinResultsGameMode.Normal;
    private $symbolBoards: SymbolBoardBase[] = [];
    /**
     * websocket实例
     */
    protected abstract get webSocket(): WebSocket;
    /**
     * 棋盘列表
     */
    protected get symbolBoards(): SymbolBoardBase[] {
        return this.$symbolBoards;
    }
    /**
     * 底部bar
     */
    public bottomBar: BottomBarBase;
    /**
     * 顶部bar
     */
    public topBar: TopBarBase;
    /**
     * win框基类
     */
    protected win: WinBase;
    /**
     * 升级弹窗
     */
    protected levelUp: LevelUpBase;
    /**
     * Spin按钮缓存
     */
    private spinClickBuffer: SlotGameStageStatus = null;
    /**
     * 是否有连线
     */
    private _hasMatchedLines: boolean = false;
    /**
     * 是否有升级
     */
    private _hasUpgrade: boolean = false;
    /**
     * 升级金币奖励
     */
    private _coinAward: number = 0;
    /**
     * 升级积分奖励
     */
    private _integralAward: number = 0;
    /**
     * 最大连线数
     */
    public maxline: number = 1;
    /**
     * 获取游戏状态
     */
    public get status(): SlotGameStageStatus {
        return this._status;
    }
    public set status(value: SlotGameStageStatus) {
        this._status = value;
        console.log("gameStagestatus ====" + this._status)
        if (value == SlotGameStageStatus.ServerResultsReceived) {
            if (
                this.spinClickBuffer &&
                (this.spinClickBuffer == SlotGameStageStatus.WaitingServerResults ||
                    this.spinClickBuffer == SlotGameStageStatus.RequestingServer)
            ) {
                // 在请求服务器及等待服务器返回中一直点击stop，那么收到服务器返回后立即停止
                //todo 棋盘停止转动
                this.stopWaitingResults();
            }
            this.spinClickBuffer = null;
        }
        let boardStatus: SymbolBoardStatus = null;
        if (value == SlotGameStageStatus.Ready) {
            boardStatus = SymbolBoardStatus.Ready;
            if (this.spinResults && this.spinResults.nextGameMode != SpinResultsGameMode.Normal) {
                setTimeout(() => {
                    this.spinClick();
                }, 500);
            }
        }
        if (
            value == SlotGameStageStatus.RequestingServer ||
            value == SlotGameStageStatus.WaitingServerResults ||
            value == SlotGameStageStatus.ServerResultsReceived
        ) {
            boardStatus = SymbolBoardStatus.Spinning;
        }
        if (boardStatus != null) {
            for (let i = 0; i < this.$symbolBoards.length; i++) {
                this.$symbolBoards[i].status = boardStatus;
            }
            if (
                value == SlotGameStageStatus.Ready &&
                this.spinResults &&
                this.spinResults.gameMode != SpinResultsGameMode.Normal &&
                this.spinResults.finishedCount < this.spinResults.totalCount
            ) {
                //this.spinClick();
            }
        }
        if (value == SlotGameStageStatus.BoardsReplacing) {
            if (this.canBeNextStatus()) {
                this.status = SlotGameStageStatus.BoardsPrizeShowing;
            }
        }
        if (value == SlotGameStageStatus.BoardsPrizeShowing) {
            if (this.canBeNextStatus()) {
                this.status = SlotGameStageStatus.BoardsSettling;
            }
        }
        if (value == SlotGameStageStatus.BoardsSettling) {
            if (this.canBeNextStatus()) {
                this.status = SlotGameStageStatus.PrizeShowing;
            }
        }
        if (value == SlotGameStageStatus.PrizeShowing) {
            let hasBigWinOrJackpotShow = false;
            if (this.hasJackpot && !this.jackpotShowEnded) {
                hasBigWinOrJackpotShow = true;
                this.jackpotShow(SlotGameStageBase.spinResults.jackpot);
                return;
            }
            if (!this.hasJackpot && this.hasBigWin && !this.bigWinShowEnded) {
                hasBigWinOrJackpotShow = true;
                this.bigWinShow();
                return;
            }
            if (!hasBigWinOrJackpotShow && this.spinResults.freeTrigger) {
                setTimeout(this.beforeEnterFreeMode.bind(this), 500, this.spinResults.freeTrigger);
                return;
            }
            if (
                !hasBigWinOrJackpotShow &&
                this.spinResults.finishedCount == this.spinResults.totalCount &&
                this.spinResults.gameMode != SpinResultsGameMode.Normal
            ) {
                this.freeModeFinished(this.spinResults.winCoins, this.spinResults.totalCount);
                //* 特殊模式结束时，先将spin按钮类型改为普通spin状态
                //* 防止此时spin按钮的类型还为freeSpin，避免出现按钮
                //* 从freeSpin状态闪一下才变为普通spin状态
                this.bottomBar.spinType = SpinType.Spin;
                //* 特殊模式结束，快速将游戏模式设置为普通模式，这样下一次spin就可以直接根据普通模式的设定清空win框的金币
                if (
                    this.$gameMode === SpinResultsGameMode.FreeSpin ||
                    this.$gameMode === SpinResultsGameMode.Respin ||
                    this.$gameMode === SpinResultsGameMode.OneMore
                ) {
                    this.$gameMode = SpinResultsGameMode.Normal;
                }
                //防止freespin 结束后可点击 在转一居
                setTimeout(() => {
                    this.bottomBar.freeModeFinished = true;
                }, 1000);
            }
            this.status = SlotGameStageStatus.Ready;
        }
        this.node.emit(SlotGameStageEvent.STATUS_CHANGED, this.status);
    }
    /**
     * 获取当前游戏模式
     */
    public get currentGameMode(): SpinResultsGameMode {
        return this._currentGameMode;
    }
    /**
     * 获取免费模式触发器
     */
    public get freeModeTrigger(): SpinResultsGameMode {
        return this._freeModeTrigger;
    }
    /**
     * 获取spin结果
     */
    public get spinResults(): SpinResults {
        return this.$spinResults;
    }
    /**
     * 设置spin结果
     */
    public set spinResults(value: SpinResults) {
        this.$spinResults = value;
    }
    /**
     * 清楚棋子数据
    */
    public get cleans(): any {
        return this.$cleans;
    }
    public set cleans(value: any) {
        this.$cleans = value;
    }
    private _bets: number[];
    onLoad() {
        super.onLoad();
        this._status = SlotGameStageStatus.Ready;
        this.loadCommonSoundsResources();
        MogafaExtensions.init();
        this.CallbackData = null;
        this.webSocket.setActorMessageCallback((msg) => {
            let data = null
            let enterfree = false
            if (msg.Info && msg.Info.length > 0) {
                data = JSON.parse(msg.Info[0].Message)

                //if(data.fn=="sc_showdown_slotf_n"){
                if (data.fn.indexOf("sc_showdown_slot") != -1) {
                    this.CallbackData = msg.Info[0]

                    if (data.openmarry && data.openmarry > 0) {
                        enterfree = true
                    }

                }

                //if( data.fn =="sc_tablestart_slotf_n" && this.CallbackData ){
                if (data.fn.indexOf("sc_tablestart_slot") != -1 && this.CallbackData ||
                    enterfree == true) {
                    this.onSpinResultsReceivedInternal(this.CallbackData)
                }

            }



            console.log("ActorMessageCallback=======", data)
        });

    }

    public addFguiComponent<T extends FguiComponentBase>(type: { new(): T }): T {
        const child = super.addFguiComponent(type);
        if (child instanceof SymbolBoardBase) {
            const chessboard = (child as unknown) as SymbolBoardBase;
            this.symbolBoards.push(chessboard);
            chessboard.index = this.symbolBoards.length - 1;
            chessboard.stageCode = this.stageCode;
            // chessboard.gameStage = this;
            chessboard.onResultsSet(this.chessboardResultsSet, this);
        }
        if (child instanceof BottomBarBase) {
            this.bottomBar = (child as any) as BottomBarBase;
            this.bottomBar.game = (this as unknown) as SlotGameStage;
            this.bottomBar.onFastClick(this.fast, this);
        }
        if (child instanceof TopBarBase) {
            this.topBar = (child as any) as TopBarBase;
        }
        return child;
    }
    protected createChildComponents(): void {
        super.createChildComponents();
        this.loadSymbolSpineResources();
    }
    /**
     * 加载公用音效资源
     */
    private loadCommonSoundsResources(): void {
        return;
        let bundle = cc.assetManager.getBundle("games_common")
        if (bundle) {
            bundle.loadDir("/sounds", cc.AudioClip, function (err, clips) {
                for (let i = 0; i < clips.length; i++) {
                    SoundMgr.getInstance().addSound(clips[i].name, clips[i]);
                }
            });
        } else {
            let resUrl = "games_common";
            if (!AppConst.isEditor) {
                resUrl = AppConst.resUrl + "games_common";
            }
            cc.assetManager.loadBundle(resUrl, (err, bundle) => {
                bundle.loadDir("/sounds", cc.AudioClip, function (err, clips) {
                    for (let i = 0; i < clips.length; i++) {
                        SoundMgr.getInstance().addSound(clips[i].name, clips[i]);
                    }
                });
            })
        }

        // cc.loader.loadResDir("Games/Common/sounds", cc.AudioClip, function (err, clips) {
        //     for (let i = 0; i < clips.length; i++) {
        //         SoundMgr.getInstance().addSound(clips[i].name, clips[i]);
        //     }
        // });
    }
    private loadSymbolSpineResources(): void {
        if (
            this.symbolSpineUrls &&
            this.symbolSpineUrls.length >= 0 &&
            this.symbolSpineResourceLoadedIndex < this.symbolSpineUrls.length
        ) {
            let urls = this.symbolSpineUrls[this.symbolSpineResourceLoadedIndex].urls;
            if (urls && urls.length > 0) {
                cc.loader.loadResArray(urls, sp.SkeletonData, this.symbolSpineResourcesLoaded.bind(this));
            } else {
                this.symbolSpineResourceLoadedIndex++;
                this.loadSymbolSpineResources();
            }
        }
    }
    private symbolBoardSetWinCoins(): void {
        this.symbolBoards.map((item) => {
            item.node.on("BOTTOM_BAR_SET_WIN_COINS", this.setWinCoins.bind(this));
        });
    }
    protected allChildCreated(): void {
        super.allChildCreated();
        //this.loadInitGameData();
        this.symbolBoardSetWinCoins();
        //* 游戏基类注册底部栏bet改变事件
        //this.bottomBar.node.on("BET_CHANGE", this.betChange.bind(this));

        if (this.topBar) {
            this.topBar.coins = AppConst.hallData.gold
        } else {
            this.bottomBar.setUserCoins(AppConst.hallData.gold)
        }
    }
    /**
     * 下注值变化事件
     * @param bet
     */
    protected betChange(bet: number): void { }
    private symbolSpineResourcesLoaded(error: any, resources: sp.SkeletonData[]): void {
        if (error) {
            cc.error(`棋子spine动画载入错误`);
        } else {
            let urls = this.symbolSpineUrls[this.symbolSpineResourceLoadedIndex];
            for (let i = 0; i < resources.length; i++) {
                const resource = resources[i];
                this.symbolSpineUrls[this.symbolSpineResourceLoadedIndex].addResource(resource.name, resource);
            }
            this.symbolSpineResourceLoadedIndex++;
            this.loadSymbolSpineResources();
        }
    }

    /**
     * 加载初始化游戏数据
     */
    protected loadInitGameData(): void {
        if (!this.spinRoute || !this.spinParams) {
            cc.error("初始化请求参数错误，无法获取初始数据");
            return;
        }
        this.webSocket.request(this.spinRoute, this.spinParams, this.loadInitGameDataCallback.bind(this));
    }
    /**
     * 加载初始化游戏数据回调
     * 处理初始化游戏设置、赋值
     * @param result
     */
    private loadInitGameDataCallback(result: any): void {
        if (result.code === 200 && result.isSuccessful) {
            //* 设置底部栏筹码
            if (result.data) {
                this._bets = result.data.config.bet.list.map((item) => item.value);
                let maxBet: number = result.data.config.bet.max;
                this.setBottomBarBets(maxBet);
                this.bottomBar.bet = this.bottomBar.bets[0];
                // let maxIndex: number = bets.indexOf(maxBet);
                // //todo 取离得最近的最大值
                // bets = bets.slice(0, maxIndex + 1);
                // this.bottomBar.bets = bets;
            }
            this.getInitGameData(result);
            //* 设置初始化默认棋盘
            const defaultSlots = result.data.game.defaultSlots;
            this.symbolBoards.map((item, index) => {
                item.defaultSlot = defaultSlots[index];
            });
            let userInfo = result.data.user;
            //* 用户信息赋值给顶部栏
            if (userInfo) {
                this.topBar.setUserCoins(userInfo.coins);
                this.topBar.setInitLevel(userInfo.level.level, userInfo.level.currentValue, userInfo.level.totalValue);
            }
            this.status = SlotGameStageStatus.Ready;
        } else {
            cc.error(`错误码：${result.code}, 错误信息：${result.message}`);
        }
    }
    /**
     * 设置底部栏bet列表
     * @param maxBet
     */
    private setBottomBarBets(maxBet: number): void {
        let maxIndex: number = this._bets.indexOf(maxBet);
        //todo 取离得最近的最大值
        if (maxIndex > -1) {
            let bets: number[] = this._bets.slice(0, maxIndex + 1);
            this.bottomBar.bets = bets;
        } else {
            //! 若无法在bets中取到对应maxBet的下标，则取一个离maxBet最接近的bet的下标
            let nearestIndex: number = this.getNearestIndex(maxBet);
            let bets: number[] = this._bets.slice(0, nearestIndex + 1);
            this.bottomBar.bets = bets;
        }
    }
    /**
     * 获取离maxbet最近的bet下标
     * @param maxBet
     */
    private getNearestIndex(maxBet: number): number {
        let subBet: number = 0;
        let index: number = 0;
        for (let i = 0; i < this._bets.length; i++) {
            let deviation: number = Math.abs(this._bets[i] - maxBet);
            if (subBet === 0) {
                subBet = deviation;
                index = i;
            }
            if (subBet > deviation) {
                index = i;
            }
        }
        return index;
    }
    /**
     * 子类重载此方法去获取初始化游戏数据
     * @param result
     */
    protected abstract getInitGameData(result: any): void;
    public getSymbolSpineResourcesByCode(symbolCode: number): SymbolSpineResource {
        return this.symbolSpineUrls.find((s) => s.code === symbolCode);
    }
    /**
     * 检查金币是否足够
     *
     */
    checkCoinEnough(): boolean {
        let userCoins: number

        if (this.topBar) {
            userCoins = this.topBar.coins;
        } else {
            userCoins = this.bottomBar.coins;
        }

        let isEnough: boolean = true;
        userCoins -= this.bottomBar.bet * this.maxline;
        if (userCoins < 0) {
            this.node.emit(SlotGameStageEvent.SPIN_CHECK_COIN);
        }
        userCoins >= 0 ? (isEnough = true) : (isEnough = false);
        return isEnough;
    }
    //#region spinClick
    spinClick(times?: number): void {
        this.spinClickBuffer = null;
        switch (this._status) {
            case SlotGameStageStatus.Ready:
                this.beforeSpinRequestingInternal();
                this.spinRequest();
                break;
            case SlotGameStageStatus.BoardsSpinning:
                this.stopWaitingResults();
                break;
            //case SlotGameStageStatus.BoardsStopped:
            case SlotGameStageStatus.BoardsPrizeShowing:
                if (this.$nextGameMode === SpinResultsGameMode.Normal) {
                    this.spinClickBuffer = SlotGameStageStatus.BoardsPrizeShowing;
                } else {
                    this.spinClickBuffer = null;
                }
                break;
            case SlotGameStageStatus.WaitingServerResults:
            case SlotGameStageStatus.RequestingServer:
                this.spinClickBuffer = this._status;
                // todo 需要在此判断websocket是否连接断开或超时，若满足条件，则需要停止棋盘
                break;
            case SlotGameStageStatus.ServerResultsReceived:
                this.stopWaitingResults();
                break;
        }
    }

    //#endregion
    protected changeStatus(status: SlotGameStageStatus): void {
        this.status = status;
    }
    /**
     * 设置底部栏金币
     */
    public setWinCoins(): void {
        if (this._hasMatchedLines) {
            this.bottomBar.setWinCoins(this.spinResults.winCoins, 1);
            //* win框金币增长动画开始1S后再开始增长用户金币
            this.scheduleOnce(() => {
                if (this.topBar) {
                    this.topBar.setUserCoins(this.spinResults.userCoins, 1);
                } else {
                    this.bottomBar.setUserCoins(this.spinResults.userCoins, 1);
                }

            }, 1.5);
        }
    }
    /**
     * 设置顶部栏金币
     * 单独提出来作为一个方法的原因是某些游戏（如：章鱼），
     * 需要经过一些判断再给顶部金币栏赋值，因此单独提出来方便重写该方法
     * @param userCoins
     */
    public setUserCoins(userCoins: number): void {
        if (this.topBar) {
            this.topBar.coins = userCoins;
        } else {
            this.bottomBar.coins = userCoins;
        }
    }
    //#region 服务器请求相关代码
    private beforeSpinRequestingInternal(): void {
        SlotGameStageBase.spinResults = null;
        for (let i = 0; i < this.symbolBoards.length; i++) {
            this.symbolBoards[i].reset();
        }
        this.beforeSpinRequesting();
    }
    /**
     * 请求服务器spin之前调用，如果游戏关卡需要在此之前做逻辑处理
     * 可重载此方法，结束后将游戏关卡状态更改成SlotGameStageStatus.RequestingServer
     */
    protected beforeSpinRequesting(): void {
        //* 当游戏模式为普通模式时，每次spin显示winCoins时都需要先清空一下
        if (this.$gameMode === SpinResultsGameMode.Normal) {
            this.bottomBar.setWinCoins(0, 0);
        }
        this.changeStatus(SlotGameStageStatus.RequestingServer);
    }
    protected spinRequest(): void {
        if (this.status != SlotGameStageStatus.RequestingServer) {
            // && this.status != SlotGameStageStatus.BeforeRequestingServer) {
            cc.error("只有在请求服务器的状态下才能请求服务器");
            return;
        }
        //* 每次请求数据前，清空掉金币增长动画，未执行完增长的金币数值改为直接赋值
        if (this.topBar) {
            this.topBar.cancelCoinIncreaseAnime();
            //* 发送请求前更新顶部栏金币
            let userCoins: number = this.topBar.coins;
            userCoins -= this.bottomBar.bet * this.bottomBar.totalLineCount;
            if (userCoins < 0) {
                this.$message.showTips("Oops. Not enough coins to SPIN...", 2);
                this.status = SlotGameStageStatus.Ready;
                return;
            }
            if (
                this.$nextGameMode != SpinResultsGameMode.FreeSpin &&
                this.$nextGameMode != SpinResultsGameMode.Respin &&
                this.$nextGameMode != SpinResultsGameMode.OneMore
            ) {
                this.scheduleOnce(() => {
                    this.topBar.setUserCoins(userCoins, 0);
                }, 0.5);
            }
        } else {
            this.bottomBar.cancelCoinIncreaseAnime();
            //* 发送请求前更新顶部栏金币
            let userCoins: number = this.bottomBar.coins;
            userCoins -= this.bottomBar.bet * this.bottomBar.totalLineCount;;
            if (userCoins < 0) {
                this.$message.showTips("Oops. Not enough coins to SPIN...", 2);
                this.status = SlotGameStageStatus.Ready;
                return;
            }
            if (
                this.$nextGameMode != SpinResultsGameMode.FreeSpin &&
                this.$nextGameMode != SpinResultsGameMode.Respin &&
                this.$nextGameMode != SpinResultsGameMode.OneMore
            ) {
                this.bottomBar.setUserCoins(userCoins, 0);
            }
        }

        for (let i = 0; i < this.symbolBoards.length; i++) {
            this.symbolBoards[i].startWaitingResults();
        }
        this.schedule(this.spinRequesting, 0);
    }
    /**
     * 在次等待游戏关卡状态更改成SlotGameStageStatus.RequestingServer
     * 然后发送请求到服务器
     */
    protected spinRequesting(): void {
        if (this.status != SlotGameStageStatus.RequestingServer) {
            cc.error("只有在请求服务器的状态下才能请求服务器");
            return;
        }
        this.changeStatus(SlotGameStageStatus.WaitingServerResults);
        this.unschedule(this.spinRequesting);

        this.webSocket.request(
            this.spinRoute,
            this.spinParams,
            this.onXiaZhuResultsReceivedInternal.bind(this),
            this.onSpinResultsFailReceived.bind(this)
        );
    }
    /**
     * 收到服务器返回结果的错误回调
     */
    private onSpinResultsFailReceived(): void {
        this.status = SlotGameStageStatus.Ready;
        //* 当服务器错误回调时，除了将游戏状态重置为spin状态的同时，还需要改变底部栏spin按钮的状态
        //* 在非autoSpin状态下，将spin按钮改为stop按钮
        if (!this.bottomBar.isAutoSpin) {
            this.bottomBar.spinType = SpinType.Respin;
        }
        this.symbolBoards.map((item) => {
            item.status = SymbolBoardStatus.Spinning;
            item.stopWaitingResults();
        });
    }
    /**
     * 收到下注消息返回结果
     * @param result 服务器返回结果
     */
    private onXiaZhuResultsReceivedInternal(result: any): void {
        console.log("onXiaZhuResultsReceivedInternal")
        if (!result.Message) {
            this.stopWaitingResults();
            return;
        }
        this.CallbackChangeData = result.Message

        if (this.gameName != "slotfruit" && this.gameName != "zues" && this.gameName != "shz") {
            this.onSpinResultsReceivedInternal(result)
        }
    }
    /**
     * 收到服务器返回结果的回调
     * @param result 服务器返回结果
     */
    protected onSpinResultsReceivedInternal(result: any): void {
        if (!result.Message || !this.CallbackChangeData) {
            cc.error("spin返回结果为空");
            this.stopWaitingResults();
            return;
        }
        let spinResults = this.parseResult(result.Message);
        SlotGameStageBase.spinResults = spinResults;
        this.spinResults = spinResults;
        this.node.emit(SlotGameStageEvent.SPIN_RESULTS_RECEIVED, spinResults);
        //* 卡牌展示
        if (spinResults.cards && spinResults.cards.length > 0) {
            this.cardViewShow(spinResults.cards);
        }
        // let level: SpinResultsLevel = spinResults.level;
        // if (level.upgrade) {
        //     this._hasUpgrade = true;
        //     this._coinAward = level.upgrade.award;
        //     this._integralAward = level.upgrade.points;
        //     if (level.upgrade.maxBet) {
        //         this.setBottomBarBets(level.upgrade.maxBet);
        //         //* 当maxbet没有改变时，需要将level数据中的maxbet修改为0，防止UI显示maxbet
        //         if (level.upgrade.maxBet === this.bottomBar.bet) {
        //             level.upgrade.maxBet = 0;
        //         }
        //     }
        //     if (level.level % 5 === 0) {
        //         this.pauseSymbolBoard();
        //         this.levelUp.closeCallback(this.continueSymbolBoard.bind(this));
        //     }
        // }
        //* 只有在普通模式下，spin时消耗bet，经验条才会增长
        // if (spinResults.gameMode === SpinResultsGameMode.Normal) {
        //     //* 顶部栏经验条增长
        //     this.topBar.updateLevel(
        //         level.level,
        //         level.currentValue,
        //         level.totalValue,
        //         level.upgrade,
        //         this.updateLevelCallback.bind(this, level.upgrade)
        //     );
        // }
        if (
            this.spinResults.winType != SpinResultsWinType.None &&
            this.spinResults.winType != SpinResultsWinType.Normal
        ) {
            this.hasBigWin = true;
            this.bigWinShowEnded = false;
        }
        if (this.spinResults.jackpotLevel !== -1) {
            this.hasJackpot = true;
            this.jackpotShowEnded = false;
        }
        this.$gameMode = spinResults.gameMode;
        this.$nextGameMode = spinResults.nextGameMode;
        //* 赋值给底部栏当前游戏模式，便于不同模式下spin按钮置灰的显示判断
        this.bottomBar.currentGameMode = spinResults.gameMode;
        this.bottomBar.nextGameMode = spinResults.nextGameMode;
        if (spinResults.freeTrigger) {
            this.$nextGameMode = spinResults.freeTrigger.gameMode;
            this.bottomBar.freeGameTrigger = spinResults.freeTrigger
        }
        this.changeBottomBarSpinType();
        for (let i = 0; i < spinResults.slots.length; i++) {
            if (i >= this.symbolBoards.length) {
                cc.error(`棋盘数不够`);
                break;
            }
            this.symbolBoards[i].slotResults = spinResults.slots[i];
            if (spinResults.slots[i].matchedLines && spinResults.slots[i].matchedLines.length > 0) {
                // todo 目前只有一个棋盘的情况下，暂时判定当有一个棋盘有连线，则设置该属性为true
                this._hasMatchedLines = true;
            }
        }
        if (
            spinResults.gameMode == SpinResultsGameMode.FreeSpin ||
            spinResults.gameMode == SpinResultsGameMode.OneMore
        ) {
            this.bottomBar.changeFreeSpinCount(spinResults.finishedCount, spinResults.totalCount);
        }

        this.changeStatus(SlotGameStageStatus.ServerResultsReceived);
    }
    /**
     * 经验条增长完后回调
     * @param upgrade
     */
    protected updateLevelCallback(upgrade: SpinResultsUpgrade): void {
        if (upgrade) {
            this.levelUp.upgrade(upgrade, this.awardIncreaseCallback.bind(this));
        }
    }
    /**
     * 升级奖励数字增加回调
     * @param rewardCoins
     * @param rewardIntegral
     */
    private awardIncreaseCallback(rewardCoins: number, rewardIntegral: number): void {
        let coinAward: number = this.topBar.coins + rewardCoins;
        // todo 暂时这样处理
        if (this.spinResults.slots[0].matchedLines.length > 0) {
            coinAward = this.spinResults.userCoins;
        }
        let integralAward: number = this.topBar.integral + rewardIntegral;
        this.topBar.setUserCoins(coinAward, 1);
        this.scheduleOnce(() => {
            this.topBar.setUserIntegral(integralAward, 1);
        }, 0.6);
        this._hasUpgrade = false;
    }
    private changeBottomBarSpinType(): void {
        switch (this.$gameMode) {
            case SpinResultsGameMode.FreeSpin:
            case SpinResultsGameMode.OneMore:
                this.bottomBar.spinType = SpinType.FreeSpin;
                break;
            case SpinResultsGameMode.Respin:
                this.bottomBar.spinType = SpinType.Respin;
                break;
            default:
                if (this.bottomBar.spinType === 1) {
                    this.bottomBar.spinType = SpinType.AutoSpin;
                } else {
                    this.bottomBar.spinType = SpinType.Spin;
                }
                //todo 如果是在自动模式下设置成SpinType.AutoSpin
                break;
        }
        this.bottomBar.nextGameMode = this.spinResults.nextGameMode;
    }
    /**
     * 默认处理结果的方法，
     * 如果游戏有额外的数据需要处理，则可以重载此方法
     * 然后返回最终的处理结果
     *
     * @param result 服务器返回的结果
     * @returns spinResults
     */
    protected parseResult(result: any): SpinResults {
        console.log("parseResult")
        let data = JSON.parse(result);
        let data2 = JSON.parse(this.CallbackChangeData);

        data.slots = [];
        data.slots[0] = {}
        data.slots[0].columns = []
        data.slots[0].events = []
        data.slots[0].matchedLines = []
        if (data.jock && data.jock.jockPotScore) {
            data.jackpots = data.jock.jockPotScore;
            data.jackpot = data.jock.lWinScore;
            data.jackpotLevel = data.jock.lev;

        } else {
            data.jackpots = [500, 2000, 6000000];
            data.jackpot = 0;
            data.jackpotLevel = -1;
        }

        data.winType = data.winType || 0;
        data.winCoins = data.gold;
        data.userCoins = data.usermoney || data.usergold;
        data.previousGameMode;
        data.gameMode = 0;
        data.nextGameMode = 0;
        data.finishedCount = data.TotalFree - data.openfree;
        data.totalCount = data.TotalFree;
        data.timestamp = 0;
        data.totalBetNum = 0;
        data.highScore = 0;
        data.bigWinCoins = data.gold;
        data.bigWinAdAwards = { awardId: "", points: 0, coins: 0, countdown: 4 };
        data.cards = [];
        data.freeWinGold = data.FreeWinGold;

        if (data.totalCount > 0 && data.finishedCount > 0) {
            data.winCoins = data.FreeWinGold;
        }

        //棋盘数据转换

        if (data2._turntable[0] && data2._turntable[0].oneline) {
            let row = data2._turntable.length
            let coum = data2._turntable[0].oneline.length

            for (var a = 0, b = coum; a < b; a++) {
                data.slots[0].columns[a] = {}
                data.slots[0].columns[a].cells = []
            }
            for (var _i = 0, _a = coum; _i < _a; _i++) {

                for (var a = 0, b = row; a < b; a++) {


                    data.slots[0].columns[_i].cells[a] = { code: data2._turntable[a].oneline[_i] - 1, fixed: false, mockCodes: [] }
                    data.slots[0].columns[_i].cells[a].events = []
                    if (this.JackPotCode == data2._turntable[a].oneline[_i] - 1) {
                        data.slots[0].columns[_i].cells[a].events.push({ code: SpinResultsEventCode.Bonus, value: SpinResultsEventCode.Bonus })
                    }

                    if (this.gameName == "ninjaVSsamurai") {
                        if (data2._turntable[a].oneline[_i] - 1 >= this.ScatterCode) {
                            data.slots[0].columns[_i].cells[a].events.push({ code: SpinResultsEventCode.Free, value: SpinResultsEventCode.Free })
                        }
                    } else {
                        if (this.ScatterCode == data2._turntable[a].oneline[_i] - 1) {
                            data.slots[0].columns[_i].cells[a].events.push({ code: SpinResultsEventCode.Free, value: SpinResultsEventCode.Free })
                        }
                    }

                }
            }

        }
        //中奖连线数据转换
        if (data.hitline && data.hitline.length > 0) {
            let count = data.hitline.length
            for (var a = 0, b = count; a < b; a++) {
                data.slots[0].matchedLines[a] = []

                for (var _i = 0, _a = data.hitline[a].hitcount; _i < _a; _i++) {
                    let value = data.hitline[a].hit[_i]
                    value = this.BoardIndex[value.x - 1][value.y - 1]
                    data.slots[0].matchedLines[a][_i] = value
                }
            }
        }
        //棋盘变化数据
        if (data2.changeinfos) {
            for (var a = 0, b = data2.changeinfos.length; a < b; a++) {
                if (data.slots[0].columns[data2.changeinfos[a].tcol].cells[data2.changeinfos[a].trow].events) {

                } else {
                    data.slots[0].columns[data2.changeinfos[a].tcol].cells[data2.changeinfos[a].trow].events = []
                }

                data.slots[0].columns[data2.changeinfos[a].tcol].cells[data2.changeinfos[a].trow].events.push({ code: data2.changeinfos[a].tcard - 1, value: data2.changeinfos[a].tcard - 1 })

                data.slots[0].columns[data2.changeinfos[a].col].cells[data2.changeinfos[a].row].mockCodes.push(data2.changeinfos[a].beforcard - 1)
                data.slots[0].columns[data2.changeinfos[a].col].cells[data2.changeinfos[a].row].code = data2.changeinfos[a].card - 1

                if (this.gameName == "zues") {
                    if (data.totalCount > 0 && data.finishedCount > 0) {
                        if (data2.changeinfos[a].beforcard - 1 == 6) {
                            data.slots[0].columns[data2.changeinfos[a].tcol].cells[data2.changeinfos[a].trow].events.push({ code: 6001, value: 6001 })
                        }

                        if (data2.changeinfos[a].beforcard - 1 == 4) {
                            data.slots[0].columns[data2.changeinfos[a].tcol].cells[data2.changeinfos[a].trow].events.push({ code: 5001, value: 5001 })
                        }
                    }


                }

            }
        }

        if (data.bisons) {
            for (var a = 0, b = data.bisons.length; a < b; a++) {

                let value_chong = -1

                for (var x = 0, y = data.bisons[a].changes.length; x < y; x++) {

                    data.slots[0].columns[data.bisons[a].changes[x].col].cells[data.bisons[a].changes[x].row].mockCodes.push(data.bisons[a].changes[x].befor - 1)
                    data.slots[0].columns[data.bisons[a].changes[x].col].cells[data.bisons[a].changes[x].row].code = data.bisons[a].changes[x].card - 1

                    if (data.bisons[a].isvertical == false) {
                        value_chong = data.bisons[a].changes[x].col
                    }

                }

                if (!data.bisons[a].origin) { //普通冲刺
                    data.slots[0].events.push({ code: 1, value: value_chong })
                } else if (data.bisons[a].origin) {
                    data.slots[0].columns[data.bisons[a].origin.col].cells[data.bisons[a].origin.row].events.push({ code: a, value: value_chong })
                }

            }
        }

        if (data.ninjiamodle && data.ninjiamodle > 0) {
            data.slots[0].events.push({ code: 2, value: data.ninjiamodle })
        }

        //冰球
        if (data.cleans) {
            data.slots[0].events = []
            let cleans = data.cleans;

            for (var i = 0; i < cleans.length; i++) {
                let value_chong = -1
                let befort = cleans[i].befort
                let aftert = cleans[i].aftert
                let onelineNum = aftert[0].oneline.length

                for (var j = 0; j < onelineNum; j++) {
                    for (var k = 0; k < aftert.length; k++) {
                        data.slots[0].columns[j].cells[k].mockCodes.push(befort[k].oneline[j] - 1);
                        data.slots[0].columns[j].cells[k].code = aftert[k].oneline[j] - 1;
                    }
                }

                //获取获奖棋子
                let prizes = cleans[i].cleans
                for (var j = 0; j < prizes.length; j++) {
                    let points = prizes[j].points
                    for (var k = 0; k < points.length; k++) {
                        if (data.slots[0].columns[points[k].col].cells[points[k].row].events) { } else {
                            data.slots[0].columns[points[k].col].cells[points[k].row].events = [];
                        }
                        data.slots[0].columns[points[k].col].cells[points[k].row].events.push({ code: 1520, value: i });

                    }

                }
            }
        }

        this.CallbackChangeData = null


        let wheels = []
        if (data.specialCard) {
            for (var a = 0, b = data.specialCard.length; a < b; a++) {
                let item = new SpinResultsWheelItem(data.specialCard[a].ItemID, data.specialCard[a].ItemValue)
                wheels.push(item)
            }
        }

        let dsd = []
        dsd.push(new SpinResultsWheel(wheels))
        //免费次数
        if (data.openfree > 0 && data.finishedCount == 0 || data.isstartfree) {
            data.freeTrigger = new SpinResultsFreeTrigger(
                SpinResultsGameMode.FreeSpin,
                data.finishedCount,
                data.totalCount,
                dsd,
            );
            data.nextGameMode = SpinResultsGameMode.FreeSpin;

        } else if (data.openmarry > 0 && data.finishedCount == 0) {
            data.freeTrigger = new SpinResultsFreeTrigger(
                SpinResultsGameMode.Bonus,
                0,
                data.openmarry,
            );
            data.nextGameMode = SpinResultsGameMode.Bonus;
        }


        if (data.totalCount > 0 && data.finishedCount > 0) {
            data.gameMode = SpinResultsGameMode.FreeSpin
            data.nextGameMode = SpinResultsGameMode.FreeSpin
        }

        if (data.finishedCount == data.totalCount && data.totalCount != 0 && data.finishedCount != 0) {
            data.nextGameMode = SpinResultsGameMode.Normal
        }

        if (data.totalCount == 0 && data.openfree == 0 && this.bottomBar.nextGameMode == 1) {
            data.totalCount = this.bottomBar.freeGameTrigger.total
            data.finishedCount = data.totalCount
            data.winCoins = data.FreeWinGold
            data.gameMode = SpinResultsGameMode.FreeSpin
            data.nextGameMode = SpinResultsGameMode.Normal
        }

        console.log("总次数：" + data.totalCount + ",免费：" + data.openfree + ",玛丽：" + data.openmarry);

        let spinResult = plainToClass(SpinResults, data);

        return spinResult;
    }
    //#endregion
    protected stopWaitingResults(): void {
        for (let i = 0; i < this.symbolBoards.length; i++) {
            this.symbolBoards[i].stopWaitingResults();
        }
    }

    /**
     * Fasts slot game
     */
    private fast(): void {
        for (let i = 0; i < this.symbolBoards.length; i++) {
            this.symbolBoards[i].isFast = this.bottomBar.isFast;
        }
    }
    //#region
    protected beforeReplacingMockSymbols(): void {
        this.changeStatus(SlotGameStageStatus.BoardsReplacing);
    }
    protected beforeStartPrizeShow(): void {
        this.changeStatus(SlotGameStageStatus.BoardsPrizeShowing);
    }
    //#endregion

    /**
     * Chessboards results set
     * @param chessboardIndex
     */
    protected chessboardResultsSet(chessboardIndex: number): void {
        this.changeStatus(SlotGameStageStatus.BoardsPrizeShowing);
    }
    //#region 事件监听
    onStatusChanged(listener: Function, target?: any): void {
        this.node.on(SlotGameStageEvent.STATUS_CHANGED, listener, target);
    }
    clearStatusChanged(): void {
        this.node.off(SlotGameStageEvent.STATUS_CHANGED);
    }
    offStatusChanged(listener?: Function, target?: any) {
        this.node.off(SlotGameStageEvent.STATUS_CHANGED, listener, target);
    }
    /**
     * 检查金币是否足够事件
     */
    onSpinCheckCoin(listener: Function, target?: any): void {
        this.node.on(SlotGameStageEvent.SPIN_CHECK_COIN, listener, target);
    }
    offSpinCheckCoin(listener: Function, target?: any): void {
        this.node.off(SlotGameStageEvent.SPIN_CHECK_COIN, listener, target);
    }
    clearSpinCheckCoin(): void {
        this.node.off(SlotGameStageEvent.SPIN_CHECK_COIN);
    }
    /**
     * Determines whether spin results received on
     * @param listener
     * @param [target]
     */
    onSpinResultsReceived(listener: Function, target?: any): void {
        this.node.on(SlotGameStageEvent.SPIN_RESULTS_RECEIVED, listener, target);
    }

    /**
     * Offs spin results received
     * @param listener
     * @param [target]
     */
    offSpinResultsReceived(listener: Function, target?: any): void {
        this.node.off(SlotGameStageEvent.SPIN_RESULTS_RECEIVED, listener, target);
    }
    /**
     * Clears spin results received
     */
    clearSpinResultsReceived(): void {
        this.node.off(SlotGameStageEvent.SPIN_RESULTS_RECEIVED);
    }

    //#endregion 事件监听
    protected getBoard(boardIndex: number): SymbolBoardBase {
        const board = this.symbolBoards[boardIndex];
        if (!board) {
            cc.error(`棋盘索引${boardIndex}超界`);
            return null;
        }
        return board;
    }
    protected checkAllSymbolBoardStopped(): boolean {
        let stopped: boolean = true;
        for (let i = 0; i < this.symbolBoards.length; i++) {
            const board = this.symbolBoards[i];
            if (board.status == SymbolBoardStatus.Ready || board.status == SymbolBoardStatus.Spinning) {
                stopped = false;
                break;
            }
        }
        return stopped;
    }
    private canBeNextStatus(): boolean {
        let canBeNextStatus: boolean = true;
        for (let i = 0; i < this.symbolBoards.length; i++) {
            canBeNextStatus = this.symbolBoards[i].canBeNextStatus(this.status);
            if (!canBeNextStatus) {
                break;
            }
        }
        return canBeNextStatus;
    }
    /**
     * Receives prize show completed
     * @param boardIndex
     */
    receivePrizeShowCompleted(boardIndex: number): void {
        const canBeNextStatus = this.canBeNextStatus();
        if (!canBeNextStatus) {
            if (this.hasBigWin) {
                this.bigWinShow();
            }
            if (this.hasJackpot && !this.jackpotShowEnded) {
                this.jackpotShow(SlotGameStageBase.spinResults.jackpot);
            }
            if (!this.hasBigWin && !this.hasJackpot) {
                if (this.spinResults.freeTrigger) {
                    this.beforeEnterFreeMode(this.spinResults.freeTrigger);
                } else if (
                    this.spinResults.finishedCount == this.spinResults.totalCount &&
                    this.spinResults.gameMode != SpinResultsGameMode.Normal
                ) {
                    this.freeModeFinished(this.spinResults.winCoins, this.spinResults.totalCount);
                    //* 特殊模式结束时，先将spin按钮类型改为普通spin状态
                    //* 防止此时spin按钮的类型还为freeSpin，避免出现按钮
                    //* 从freeSpin状态闪一下才变为普通spin状态
                    this.bottomBar.spinType = SpinType.Spin;
                } else {
                    this.changeStatus(SlotGameStageStatus.Ready);
                }
            }
        }
    }
    receiveSymbolBoardStatusChanged(boardIndex: number, boardStatus: SymbolBoardStatus): void {
        const canBeNextStatus = this.canBeNextStatus();
        if (canBeNextStatus) {
            switch (this.status) {
                case SlotGameStageStatus.ServerResultsReceived:
                    this.status = SlotGameStageStatus.BoardsReplacing;
                    break;
                case SlotGameStageStatus.BoardsReplacing:
                    this.status = SlotGameStageStatus.BoardsPrizeShowing;
                    break;
                case SlotGameStageStatus.BoardsPrizeShowing:
                    this.status = SlotGameStageStatus.BoardsSettling;
                    break;
                case SlotGameStageStatus.BoardsSettling:
                    // this.status = SlotGameStageStatus.Ready;
                    this.status = SlotGameStageStatus.PrizeShowing;
                    break;
                case SlotGameStageStatus.PrizeShowing:
                    //! 如果下一把游戏模式是普通模式，且没有特殊模式的数据，才把游戏状态设为准备中
                    //! 为了防止当出现scatter棋子准备进入特殊模式，延迟执行beforeEnterFreeMode方法时。
                    //! 游戏状态若被设置为准备中，则会破坏游戏流程，出现用户还未选择是否进入特殊模式，
                    //! 游戏已经开始的bug
                    if (this.$nextGameMode === SpinResultsGameMode.Normal && !this.spinResults.freeTrigger) {
                        this.status = SlotGameStageStatus.Ready;
                    }
                    break;
            }
        }
    }
    /**
     *
     * @param boardIndex
     */
    receiveSymbolBoardStopped(boardIndex: number): void {
        const canBeNextStatus = this.canBeNextStatus();
        if (canBeNextStatus) {
            this.changeStatus(SlotGameStageStatus.BoardsReplacing);
        }
    }
    receiveSymbolMockCodesReplaced(boardIndex: number): void {
        const canBeNextStatus = this.canBeNextStatus();
        if (canBeNextStatus) {
            this.changeStatus(SlotGameStageStatus.BoardsPrizeShowing);
        }
    }

    /**
     * bigwin superwin等展示，需要重载，展示完成后要调用bigWinShowEnd
     */
    protected bigWinShow(): void {
        this.win.popUpWin(
            SlotGameStageBase.spinResults.winType,
            SlotGameStageBase.spinResults.bigWinCoins,
            SlotGameStageBase.spinResults.bigWinAdAwards.countdown,
            this.spinResults.gameWheel,
            this.bigWinCallback.bind(this)
        );
        //* 如果已经有连线了，bigwin就不用给底部栏再赋一次值了
        if (!this._hasMatchedLines) {
            this.bottomBar.setWinCoins(this.spinResults.winCoins, 1);
        }
    }
    protected bigWinCallback(rewardCoins: number, rewardIntegral: number): void {
        this.bigWinShowEnd();
        if (this.topBar) {
            let coinAward: number = rewardCoins + this.topBar.coins;
            // todo 暂时这样处理
            if (this.spinResults.slots[0].matchedLines.length > 0) {
                coinAward = this.spinResults.userCoins;
            }
            this.topBar.setUserCoins(coinAward, 0.5);
            let integralAward: number = rewardIntegral + this.topBar.integral;
            //* 因积分动画执行顺序慢于金币动画，所以延时执行
            this.scheduleOnce(() => {
                this.topBar.setUserIntegral(integralAward, 0.5);
            }, 1);
        } else {
            let coinAward: number = rewardCoins + this.bottomBar.coins;
            // todo 暂时这样处理
            if (this.spinResults.slots[0].matchedLines.length > 0) {
                coinAward = this.spinResults.userCoins;
            }
            this.bottomBar.setUserCoins(coinAward, 0.5);
        }

    }
    protected bigWinShowEnd(): void {
        this.bigWinShowEnded = true;
        this.hasBigWin = false;
        this.status = SlotGameStageStatus.PrizeShowing;
    }
    /**
     * jp展示，需要重载，展示完成后要调用jackpotShowEnd
     */
    protected jackpotShow(jackpotValue): void {
        console.log("jp");
        //* 播放jp音效
        SoundMgr.getInstance().playEffect("vo_jackpot");
        this.bottomBar.setWinCoins(this.spinResults.winCoins, 1);
        this.jackpotShowEnd();
    }
    protected jackpotShowEnd(): void {
        this.jackpotShowEnded = true;
        this.hasJackpot = false
        this.status = SlotGameStageStatus.PrizeShowing;

        if (this.topBar) {
            this.topBar.setUserCoins(this.spinResults.userCoins, 1);
        } else {
            this.bottomBar.setUserCoins(this.spinResults.userCoins, 1);
        }

    }

    /**
     * 进入免费游戏之前调用
     * @remark
     * 在这个方法里面可以提示用户获得免费游戏次数等，或者根据trigger里面的wheels展示转盘
     * 结束后调用enterFreeGame
     * @param freeTrigger 免费游戏触发器
     */
    protected abstract beforeEnterFreeMode(freeTrigger: SpinResultsFreeTrigger): void;
    protected enterFreeMode(extraData?: any): void {
        //* 若当前游戏模式为普通模式
        //* 转场到特殊模式前，底部栏赢得金币数清零
        if (this.spinResults.gameMode === SpinResultsGameMode.Normal) {
            this.bottomBar.setWinCoins(0, 0);
        }
        this.status = SlotGameStageStatus.Ready;
    }
    /**
     *获得卡片的时候调用
     * @param cardsData 卡片数据
     */
    protected cardViewShow(cardsData: SpinResultsCard[]): void { }
    /**
     * 免费模式结束的时候调用
     *
     * @param winCoins 赢取金币数
     * @param totalCount 总次数
     */
    protected freeModeFinished(winCoins: number, totalCount: number): void { }
    /**
     *
     * 播放指定位置上的指定配置的spine动效，同时播放，任一播放结束就调用回调
     * @param positions 播放棋子位置列表：[5,9,10]
     * @param configName 配置名称
     * @param callback 回调
     * @param boardIndex
     */
    protected playSpineByConfigAndPositions(
        boardIndex: number,
        positions: number[],
        configName: string,
        callback?: Function
    ): void { }
    private enterFreeModeShowCallback: Function;
    private enterFreeModeShowCompletedOnce: boolean = false;
    /**
     * Plays enter free mode show
     * 播放进入免费模式的棋子动效
     * @param [callback] 回调
     * @param [code] 棋子编码
     */
    protected playEnterFreeModeShow(callback?: Function, code?: number): void {
        this.enterFreeModeShowCallback = callback;
        let anyShow: boolean = false;
        this.enterFreeModeShowCompletedOnce = false;
        for (let i = 0; i < this.symbolBoards.length; i++) {
            const board = this.symbolBoards[i];
            if (board.playEnterFreeModeShow(this.enterFreeModeShowCompleted.bind(this), code)) {
                anyShow = true;
            }
        }
        if (!anyShow && callback) {
            callback();
        }
    }
    private enterFreeModeShowCompleted(): void {
        if (this.enterFreeModeShowCallback && !this.enterFreeModeShowCompletedOnce) {
            this.enterFreeModeShowCompletedOnce = true;
            this.enterFreeModeShowCallback();
        }
    }
    /**
     * “暂停”棋盘
     * 并非是真正的暂停棋盘，而是将转轴一直处于spin状态
     */
    protected pauseSymbolBoard(): void {
        this.symbolBoards.map((item) => {
            item.waitingResultsStrategy.isPause = true;
        });
    }
    /**
     * 恢复棋盘
     * 解除一直处于spin状态，恢复到正常流转的状态
     */
    protected continueSymbolBoard(): void {
        this.symbolBoards.map((item) => {
            item.waitingResultsStrategy.isPause = false;
            item.waitingResultsStrategy.isPauseBuffer = true;
        });
        //* 点击收集按钮，延时执行金币增长动画
        // this.scheduleOnce(() => {
        //     this.topBar.setUserCoins(this._coinAward, 0.5);
        // }, 1);
    }

    /**
     * 获取winType，用于埋点
     * @param type
     */
    protected selectWinType(type: number): string {
        let typeStr: string = "";
        switch (type) {
            case 2:
                typeStr = "big_win";
                break;
            case 3:
                typeStr = "super_win";
                break;
            case 4:
                typeStr = "mega_win";
                break;
            default:
                break;
        }
        return typeStr;
    }
}
