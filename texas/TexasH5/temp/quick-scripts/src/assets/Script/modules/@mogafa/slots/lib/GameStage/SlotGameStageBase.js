"use strict";
cc._RF.push(module, 'c23a59IaZ1MTpUK2ZaVPMFZ', 'SlotGameStageBase');
// Script/modules/@mogafa/slots/lib/GameStage/SlotGameStageBase.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SlotGameStageEvent_1 = require("./SlotGameStageEvent");
var SymbolBoardBase_1 = require("../SymbolBoard/SymbolBoardBase");
var BottomBarBase_1 = require("../BottomBar/BottomBarBase");
var SlotGameStageStatus_1 = require("./SlotGameStageStatus");
var SymbolBoardStatus_1 = require("../SymbolBoard/SymbolBoardStatus");
var SpinType_1 = require("../SpinType");
var TopBarBase_1 = require("../TopBar/TopBarBase");
var FguiFullScreenBase_1 = require("../../../fairygui-component/lib/FguiFullScreenBase");
var MogafaExtensions_1 = require("../../../fairygui-component/lib/extensions/MogafaExtensions");
var AppConst_1 = require("../../../../@slotsmaster/ui-common/lib/AppConst");
var SpinResults_1 = require("../../../../spin-result/SpinResults");
var SpinResultsGameMode_1 = require("../../../../spin-result/SpinResultsGameMode");
var SpinResultsWinType_1 = require("../../../../spin-result/SpinResultsWinType");
var SpinResultsEventCode_1 = require("../../../../spin-result/SpinResultsEventCode");
var SpinResultsWheeItem_1 = require("../../../../spin-result/SpinResultsWheeItem");
var SpinResultsWheel_1 = require("../../../../spin-result/SpinResultsWheel");
var SpinResultsFreeTrigger_1 = require("../../../../spin-result/SpinResultsFreeTrigger");
var class_transformer_1 = require("class-transformer");
var SoundMgr_1 = require("../../../utils/lib/SoundMgr");
/**
 * slot游戏基类
 */
var SlotGameStageBase = /** @class */ (function (_super) {
    __extends(SlotGameStageBase, _super);
    function SlotGameStageBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._status = SlotGameStageStatus_1.SlotGameStageStatus.Ready;
        _this.hasBigWin = false;
        _this.bigWinShowEnded = true;
        _this.hasJackpot = false;
        _this.jackpotShowEnded = true;
        _this.symbolSpineResourceLoadedIndex = 0;
        /**
         * 当前游戏类型
         */
        _this.$gameMode = SpinResultsGameMode_1.SpinResultsGameMode.Normal;
        /**
         * 下一局游戏类型
         */
        _this.$nextGameMode = SpinResultsGameMode_1.SpinResultsGameMode.Normal;
        _this.$symbolBoards = [];
        /**
         * Spin按钮缓存
         */
        _this.spinClickBuffer = null;
        /**
         * 是否有连线
         */
        _this._hasMatchedLines = false;
        /**
         * 是否有升级
         */
        _this._hasUpgrade = false;
        /**
         * 升级金币奖励
         */
        _this._coinAward = 0;
        /**
         * 升级积分奖励
         */
        _this._integralAward = 0;
        /**
         * 最大连线数
         */
        _this.maxline = 1;
        _this.enterFreeModeShowCompletedOnce = false;
        return _this;
    }
    Object.defineProperty(SlotGameStageBase.prototype, "spinRoute", {
        get: function () {
            return this.$spinRoute;
        },
        set: function (value) {
            this.$spinRoute = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlotGameStageBase.prototype, "spinParams", {
        get: function () {
            return this.$spinParams;
        },
        set: function (value) {
            this.$spinParams = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlotGameStageBase.prototype, "symbolBoards", {
        /**
         * 棋盘列表
         */
        get: function () {
            return this.$symbolBoards;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlotGameStageBase.prototype, "status", {
        /**
         * 获取游戏状态
         */
        get: function () {
            return this._status;
        },
        set: function (value) {
            var _this = this;
            this._status = value;
            console.log("gameStagestatus ====" + this._status);
            if (value == SlotGameStageStatus_1.SlotGameStageStatus.ServerResultsReceived) {
                if (this.spinClickBuffer &&
                    (this.spinClickBuffer == SlotGameStageStatus_1.SlotGameStageStatus.WaitingServerResults ||
                        this.spinClickBuffer == SlotGameStageStatus_1.SlotGameStageStatus.RequestingServer)) {
                    // 在请求服务器及等待服务器返回中一直点击stop，那么收到服务器返回后立即停止
                    //todo 棋盘停止转动
                    this.stopWaitingResults();
                }
                this.spinClickBuffer = null;
            }
            var boardStatus = null;
            if (value == SlotGameStageStatus_1.SlotGameStageStatus.Ready) {
                boardStatus = SymbolBoardStatus_1.SymbolBoardStatus.Ready;
                if (this.spinResults && this.spinResults.nextGameMode != SpinResultsGameMode_1.SpinResultsGameMode.Normal) {
                    setTimeout(function () {
                        _this.spinClick();
                    }, 500);
                }
            }
            if (value == SlotGameStageStatus_1.SlotGameStageStatus.RequestingServer ||
                value == SlotGameStageStatus_1.SlotGameStageStatus.WaitingServerResults ||
                value == SlotGameStageStatus_1.SlotGameStageStatus.ServerResultsReceived) {
                boardStatus = SymbolBoardStatus_1.SymbolBoardStatus.Spinning;
            }
            if (boardStatus != null) {
                for (var i = 0; i < this.$symbolBoards.length; i++) {
                    this.$symbolBoards[i].status = boardStatus;
                }
                if (value == SlotGameStageStatus_1.SlotGameStageStatus.Ready &&
                    this.spinResults &&
                    this.spinResults.gameMode != SpinResultsGameMode_1.SpinResultsGameMode.Normal &&
                    this.spinResults.finishedCount < this.spinResults.totalCount) {
                    //this.spinClick();
                }
            }
            if (value == SlotGameStageStatus_1.SlotGameStageStatus.BoardsReplacing) {
                if (this.canBeNextStatus()) {
                    this.status = SlotGameStageStatus_1.SlotGameStageStatus.BoardsPrizeShowing;
                }
            }
            if (value == SlotGameStageStatus_1.SlotGameStageStatus.BoardsPrizeShowing) {
                if (this.canBeNextStatus()) {
                    this.status = SlotGameStageStatus_1.SlotGameStageStatus.BoardsSettling;
                }
            }
            if (value == SlotGameStageStatus_1.SlotGameStageStatus.BoardsSettling) {
                if (this.canBeNextStatus()) {
                    this.status = SlotGameStageStatus_1.SlotGameStageStatus.PrizeShowing;
                }
            }
            if (value == SlotGameStageStatus_1.SlotGameStageStatus.PrizeShowing) {
                var hasBigWinOrJackpotShow = false;
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
                if (!hasBigWinOrJackpotShow &&
                    this.spinResults.finishedCount == this.spinResults.totalCount &&
                    this.spinResults.gameMode != SpinResultsGameMode_1.SpinResultsGameMode.Normal) {
                    this.freeModeFinished(this.spinResults.winCoins, this.spinResults.totalCount);
                    //* 特殊模式结束时，先将spin按钮类型改为普通spin状态
                    //* 防止此时spin按钮的类型还为freeSpin，避免出现按钮
                    //* 从freeSpin状态闪一下才变为普通spin状态
                    this.bottomBar.spinType = SpinType_1.SpinType.Spin;
                    //* 特殊模式结束，快速将游戏模式设置为普通模式，这样下一次spin就可以直接根据普通模式的设定清空win框的金币
                    if (this.$gameMode === SpinResultsGameMode_1.SpinResultsGameMode.FreeSpin ||
                        this.$gameMode === SpinResultsGameMode_1.SpinResultsGameMode.Respin ||
                        this.$gameMode === SpinResultsGameMode_1.SpinResultsGameMode.OneMore) {
                        this.$gameMode = SpinResultsGameMode_1.SpinResultsGameMode.Normal;
                    }
                    //防止freespin 结束后可点击 在转一居
                    setTimeout(function () {
                        _this.bottomBar.freeModeFinished = true;
                    }, 1000);
                }
                this.status = SlotGameStageStatus_1.SlotGameStageStatus.Ready;
            }
            this.node.emit(SlotGameStageEvent_1.SlotGameStageEvent.STATUS_CHANGED, this.status);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlotGameStageBase.prototype, "currentGameMode", {
        /**
         * 获取当前游戏模式
         */
        get: function () {
            return this._currentGameMode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlotGameStageBase.prototype, "freeModeTrigger", {
        /**
         * 获取免费模式触发器
         */
        get: function () {
            return this._freeModeTrigger;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlotGameStageBase.prototype, "spinResults", {
        /**
         * 获取spin结果
         */
        get: function () {
            return this.$spinResults;
        },
        /**
         * 设置spin结果
         */
        set: function (value) {
            this.$spinResults = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlotGameStageBase.prototype, "cleans", {
        /**
         * 清楚棋子数据
        */
        get: function () {
            return this.$cleans;
        },
        set: function (value) {
            this.$cleans = value;
        },
        enumerable: false,
        configurable: true
    });
    SlotGameStageBase.prototype.onLoad = function () {
        var _this = this;
        _super.prototype.onLoad.call(this);
        this._status = SlotGameStageStatus_1.SlotGameStageStatus.Ready;
        this.loadCommonSoundsResources();
        MogafaExtensions_1.MogafaExtensions.init();
        this.CallbackData = null;
        this.webSocket.setActorMessageCallback(function (msg) {
            var data = null;
            var enterfree = false;
            if (msg.Info && msg.Info.length > 0) {
                data = JSON.parse(msg.Info[0].Message);
                //if(data.fn=="sc_showdown_slotf_n"){
                if (data.fn.indexOf("sc_showdown_slot") != -1) {
                    _this.CallbackData = msg.Info[0];
                    if (data.openmarry && data.openmarry > 0) {
                        enterfree = true;
                    }
                }
                //if( data.fn =="sc_tablestart_slotf_n" && this.CallbackData ){
                if (data.fn.indexOf("sc_tablestart_slot") != -1 && _this.CallbackData ||
                    enterfree == true) {
                    _this.onSpinResultsReceivedInternal(_this.CallbackData);
                }
            }
            console.log("ActorMessageCallback=======", data);
        });
    };
    SlotGameStageBase.prototype.addFguiComponent = function (type) {
        var child = _super.prototype.addFguiComponent.call(this, type);
        if (child instanceof SymbolBoardBase_1.default) {
            var chessboard = child;
            this.symbolBoards.push(chessboard);
            chessboard.index = this.symbolBoards.length - 1;
            chessboard.stageCode = this.stageCode;
            // chessboard.gameStage = this;
            chessboard.onResultsSet(this.chessboardResultsSet, this);
        }
        if (child instanceof BottomBarBase_1.default) {
            this.bottomBar = child;
            this.bottomBar.game = this;
            this.bottomBar.onFastClick(this.fast, this);
        }
        if (child instanceof TopBarBase_1.default) {
            this.topBar = child;
        }
        return child;
    };
    SlotGameStageBase.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.loadSymbolSpineResources();
    };
    /**
     * 加载公用音效资源
     */
    SlotGameStageBase.prototype.loadCommonSoundsResources = function () {
        return;
        var bundle = cc.assetManager.getBundle("games_common");
        if (bundle) {
            bundle.loadDir("/sounds", cc.AudioClip, function (err, clips) {
                for (var i = 0; i < clips.length; i++) {
                    SoundMgr_1.default.getInstance().addSound(clips[i].name, clips[i]);
                }
            });
        }
        else {
            var resUrl = "games_common";
            if (!AppConst_1.AppConst.isEditor) {
                resUrl = AppConst_1.AppConst.resUrl + "games_common";
            }
            cc.assetManager.loadBundle(resUrl, function (err, bundle) {
                bundle.loadDir("/sounds", cc.AudioClip, function (err, clips) {
                    for (var i = 0; i < clips.length; i++) {
                        SoundMgr_1.default.getInstance().addSound(clips[i].name, clips[i]);
                    }
                });
            });
        }
        // cc.loader.loadResDir("Games/Common/sounds", cc.AudioClip, function (err, clips) {
        //     for (let i = 0; i < clips.length; i++) {
        //         SoundMgr.getInstance().addSound(clips[i].name, clips[i]);
        //     }
        // });
    };
    SlotGameStageBase.prototype.loadSymbolSpineResources = function () {
        if (this.symbolSpineUrls &&
            this.symbolSpineUrls.length >= 0 &&
            this.symbolSpineResourceLoadedIndex < this.symbolSpineUrls.length) {
            var urls = this.symbolSpineUrls[this.symbolSpineResourceLoadedIndex].urls;
            if (urls && urls.length > 0) {
                cc.loader.loadResArray(urls, sp.SkeletonData, this.symbolSpineResourcesLoaded.bind(this));
            }
            else {
                this.symbolSpineResourceLoadedIndex++;
                this.loadSymbolSpineResources();
            }
        }
    };
    SlotGameStageBase.prototype.symbolBoardSetWinCoins = function () {
        var _this = this;
        this.symbolBoards.map(function (item) {
            item.node.on("BOTTOM_BAR_SET_WIN_COINS", _this.setWinCoins.bind(_this));
        });
    };
    SlotGameStageBase.prototype.allChildCreated = function () {
        _super.prototype.allChildCreated.call(this);
        //this.loadInitGameData();
        this.symbolBoardSetWinCoins();
        //* 游戏基类注册底部栏bet改变事件
        //this.bottomBar.node.on("BET_CHANGE", this.betChange.bind(this));
        if (this.topBar) {
            this.topBar.coins = AppConst_1.AppConst.hallData.gold;
        }
        else {
            this.bottomBar.setUserCoins(AppConst_1.AppConst.hallData.gold);
        }
    };
    /**
     * 下注值变化事件
     * @param bet
     */
    SlotGameStageBase.prototype.betChange = function (bet) { };
    SlotGameStageBase.prototype.symbolSpineResourcesLoaded = function (error, resources) {
        if (error) {
            cc.error("\u68CB\u5B50spine\u52A8\u753B\u8F7D\u5165\u9519\u8BEF");
        }
        else {
            var urls = this.symbolSpineUrls[this.symbolSpineResourceLoadedIndex];
            for (var i = 0; i < resources.length; i++) {
                var resource = resources[i];
                this.symbolSpineUrls[this.symbolSpineResourceLoadedIndex].addResource(resource.name, resource);
            }
            this.symbolSpineResourceLoadedIndex++;
            this.loadSymbolSpineResources();
        }
    };
    /**
     * 加载初始化游戏数据
     */
    SlotGameStageBase.prototype.loadInitGameData = function () {
        if (!this.spinRoute || !this.spinParams) {
            cc.error("初始化请求参数错误，无法获取初始数据");
            return;
        }
        this.webSocket.request(this.spinRoute, this.spinParams, this.loadInitGameDataCallback.bind(this));
    };
    /**
     * 加载初始化游戏数据回调
     * 处理初始化游戏设置、赋值
     * @param result
     */
    SlotGameStageBase.prototype.loadInitGameDataCallback = function (result) {
        if (result.code === 200 && result.isSuccessful) {
            //* 设置底部栏筹码
            if (result.data) {
                this._bets = result.data.config.bet.list.map(function (item) { return item.value; });
                var maxBet = result.data.config.bet.max;
                this.setBottomBarBets(maxBet);
                this.bottomBar.bet = this.bottomBar.bets[0];
                // let maxIndex: number = bets.indexOf(maxBet);
                // //todo 取离得最近的最大值
                // bets = bets.slice(0, maxIndex + 1);
                // this.bottomBar.bets = bets;
            }
            this.getInitGameData(result);
            //* 设置初始化默认棋盘
            var defaultSlots_1 = result.data.game.defaultSlots;
            this.symbolBoards.map(function (item, index) {
                item.defaultSlot = defaultSlots_1[index];
            });
            var userInfo = result.data.user;
            //* 用户信息赋值给顶部栏
            if (userInfo) {
                this.topBar.setUserCoins(userInfo.coins);
                this.topBar.setInitLevel(userInfo.level.level, userInfo.level.currentValue, userInfo.level.totalValue);
            }
            this.status = SlotGameStageStatus_1.SlotGameStageStatus.Ready;
        }
        else {
            cc.error("\u9519\u8BEF\u7801\uFF1A" + result.code + ", \u9519\u8BEF\u4FE1\u606F\uFF1A" + result.message);
        }
    };
    /**
     * 设置底部栏bet列表
     * @param maxBet
     */
    SlotGameStageBase.prototype.setBottomBarBets = function (maxBet) {
        var maxIndex = this._bets.indexOf(maxBet);
        //todo 取离得最近的最大值
        if (maxIndex > -1) {
            var bets = this._bets.slice(0, maxIndex + 1);
            this.bottomBar.bets = bets;
        }
        else {
            //! 若无法在bets中取到对应maxBet的下标，则取一个离maxBet最接近的bet的下标
            var nearestIndex = this.getNearestIndex(maxBet);
            var bets = this._bets.slice(0, nearestIndex + 1);
            this.bottomBar.bets = bets;
        }
    };
    /**
     * 获取离maxbet最近的bet下标
     * @param maxBet
     */
    SlotGameStageBase.prototype.getNearestIndex = function (maxBet) {
        var subBet = 0;
        var index = 0;
        for (var i = 0; i < this._bets.length; i++) {
            var deviation = Math.abs(this._bets[i] - maxBet);
            if (subBet === 0) {
                subBet = deviation;
                index = i;
            }
            if (subBet > deviation) {
                index = i;
            }
        }
        return index;
    };
    SlotGameStageBase.prototype.getSymbolSpineResourcesByCode = function (symbolCode) {
        return this.symbolSpineUrls.find(function (s) { return s.code === symbolCode; });
    };
    /**
     * 检查金币是否足够
     *
     */
    SlotGameStageBase.prototype.checkCoinEnough = function () {
        var userCoins;
        if (this.topBar) {
            userCoins = this.topBar.coins;
        }
        else {
            userCoins = this.bottomBar.coins;
        }
        var isEnough = true;
        userCoins -= this.bottomBar.bet * this.maxline;
        if (userCoins < 0) {
            this.node.emit(SlotGameStageEvent_1.SlotGameStageEvent.SPIN_CHECK_COIN);
        }
        userCoins >= 0 ? (isEnough = true) : (isEnough = false);
        return isEnough;
    };
    //#region spinClick
    SlotGameStageBase.prototype.spinClick = function (times) {
        this.spinClickBuffer = null;
        switch (this._status) {
            case SlotGameStageStatus_1.SlotGameStageStatus.Ready:
                this.beforeSpinRequestingInternal();
                this.spinRequest();
                break;
            case SlotGameStageStatus_1.SlotGameStageStatus.BoardsSpinning:
                this.stopWaitingResults();
                break;
            //case SlotGameStageStatus.BoardsStopped:
            case SlotGameStageStatus_1.SlotGameStageStatus.BoardsPrizeShowing:
                if (this.$nextGameMode === SpinResultsGameMode_1.SpinResultsGameMode.Normal) {
                    this.spinClickBuffer = SlotGameStageStatus_1.SlotGameStageStatus.BoardsPrizeShowing;
                }
                else {
                    this.spinClickBuffer = null;
                }
                break;
            case SlotGameStageStatus_1.SlotGameStageStatus.WaitingServerResults:
            case SlotGameStageStatus_1.SlotGameStageStatus.RequestingServer:
                this.spinClickBuffer = this._status;
                // todo 需要在此判断websocket是否连接断开或超时，若满足条件，则需要停止棋盘
                break;
            case SlotGameStageStatus_1.SlotGameStageStatus.ServerResultsReceived:
                this.stopWaitingResults();
                break;
        }
    };
    //#endregion
    SlotGameStageBase.prototype.changeStatus = function (status) {
        this.status = status;
    };
    /**
     * 设置底部栏金币
     */
    SlotGameStageBase.prototype.setWinCoins = function () {
        var _this = this;
        if (this._hasMatchedLines) {
            this.bottomBar.setWinCoins(this.spinResults.winCoins, 1);
            //* win框金币增长动画开始1S后再开始增长用户金币
            this.scheduleOnce(function () {
                if (_this.topBar) {
                    _this.topBar.setUserCoins(_this.spinResults.userCoins, 1);
                }
                else {
                    _this.bottomBar.setUserCoins(_this.spinResults.userCoins, 1);
                }
            }, 1.5);
        }
    };
    /**
     * 设置顶部栏金币
     * 单独提出来作为一个方法的原因是某些游戏（如：章鱼），
     * 需要经过一些判断再给顶部金币栏赋值，因此单独提出来方便重写该方法
     * @param userCoins
     */
    SlotGameStageBase.prototype.setUserCoins = function (userCoins) {
        if (this.topBar) {
            this.topBar.coins = userCoins;
        }
        else {
            this.bottomBar.coins = userCoins;
        }
    };
    //#region 服务器请求相关代码
    SlotGameStageBase.prototype.beforeSpinRequestingInternal = function () {
        SlotGameStageBase.spinResults = null;
        for (var i = 0; i < this.symbolBoards.length; i++) {
            this.symbolBoards[i].reset();
        }
        this.beforeSpinRequesting();
    };
    /**
     * 请求服务器spin之前调用，如果游戏关卡需要在此之前做逻辑处理
     * 可重载此方法，结束后将游戏关卡状态更改成SlotGameStageStatus.RequestingServer
     */
    SlotGameStageBase.prototype.beforeSpinRequesting = function () {
        //* 当游戏模式为普通模式时，每次spin显示winCoins时都需要先清空一下
        if (this.$gameMode === SpinResultsGameMode_1.SpinResultsGameMode.Normal) {
            this.bottomBar.setWinCoins(0, 0);
        }
        this.changeStatus(SlotGameStageStatus_1.SlotGameStageStatus.RequestingServer);
    };
    SlotGameStageBase.prototype.spinRequest = function () {
        var _this = this;
        if (this.status != SlotGameStageStatus_1.SlotGameStageStatus.RequestingServer) {
            // && this.status != SlotGameStageStatus.BeforeRequestingServer) {
            cc.error("只有在请求服务器的状态下才能请求服务器");
            return;
        }
        //* 每次请求数据前，清空掉金币增长动画，未执行完增长的金币数值改为直接赋值
        if (this.topBar) {
            this.topBar.cancelCoinIncreaseAnime();
            //* 发送请求前更新顶部栏金币
            var userCoins_1 = this.topBar.coins;
            userCoins_1 -= this.bottomBar.bet * this.bottomBar.totalLineCount;
            if (userCoins_1 < 0) {
                this.$message.showTips("Oops. Not enough coins to SPIN...", 2);
                this.status = SlotGameStageStatus_1.SlotGameStageStatus.Ready;
                return;
            }
            if (this.$nextGameMode != SpinResultsGameMode_1.SpinResultsGameMode.FreeSpin &&
                this.$nextGameMode != SpinResultsGameMode_1.SpinResultsGameMode.Respin &&
                this.$nextGameMode != SpinResultsGameMode_1.SpinResultsGameMode.OneMore) {
                this.scheduleOnce(function () {
                    _this.topBar.setUserCoins(userCoins_1, 0);
                }, 0.5);
            }
        }
        else {
            this.bottomBar.cancelCoinIncreaseAnime();
            //* 发送请求前更新顶部栏金币
            var userCoins = this.bottomBar.coins;
            userCoins -= this.bottomBar.bet * this.bottomBar.totalLineCount;
            ;
            if (userCoins < 0) {
                this.$message.showTips("Oops. Not enough coins to SPIN...", 2);
                this.status = SlotGameStageStatus_1.SlotGameStageStatus.Ready;
                return;
            }
            if (this.$nextGameMode != SpinResultsGameMode_1.SpinResultsGameMode.FreeSpin &&
                this.$nextGameMode != SpinResultsGameMode_1.SpinResultsGameMode.Respin &&
                this.$nextGameMode != SpinResultsGameMode_1.SpinResultsGameMode.OneMore) {
                this.bottomBar.setUserCoins(userCoins, 0);
            }
        }
        for (var i = 0; i < this.symbolBoards.length; i++) {
            this.symbolBoards[i].startWaitingResults();
        }
        this.schedule(this.spinRequesting, 0);
    };
    /**
     * 在次等待游戏关卡状态更改成SlotGameStageStatus.RequestingServer
     * 然后发送请求到服务器
     */
    SlotGameStageBase.prototype.spinRequesting = function () {
        if (this.status != SlotGameStageStatus_1.SlotGameStageStatus.RequestingServer) {
            cc.error("只有在请求服务器的状态下才能请求服务器");
            return;
        }
        this.changeStatus(SlotGameStageStatus_1.SlotGameStageStatus.WaitingServerResults);
        this.unschedule(this.spinRequesting);
        this.webSocket.request(this.spinRoute, this.spinParams, this.onXiaZhuResultsReceivedInternal.bind(this), this.onSpinResultsFailReceived.bind(this));
    };
    /**
     * 收到服务器返回结果的错误回调
     */
    SlotGameStageBase.prototype.onSpinResultsFailReceived = function () {
        this.status = SlotGameStageStatus_1.SlotGameStageStatus.Ready;
        //* 当服务器错误回调时，除了将游戏状态重置为spin状态的同时，还需要改变底部栏spin按钮的状态
        //* 在非autoSpin状态下，将spin按钮改为stop按钮
        if (!this.bottomBar.isAutoSpin) {
            this.bottomBar.spinType = SpinType_1.SpinType.Respin;
        }
        this.symbolBoards.map(function (item) {
            item.status = SymbolBoardStatus_1.SymbolBoardStatus.Spinning;
            item.stopWaitingResults();
        });
    };
    /**
     * 收到下注消息返回结果
     * @param result 服务器返回结果
     */
    SlotGameStageBase.prototype.onXiaZhuResultsReceivedInternal = function (result) {
        console.log("onXiaZhuResultsReceivedInternal");
        if (!result.Message) {
            this.stopWaitingResults();
            return;
        }
        this.CallbackChangeData = result.Message;
        if (this.gameName != "slotfruit" && this.gameName != "zues" && this.gameName != "shz") {
            this.onSpinResultsReceivedInternal(result);
        }
    };
    /**
     * 收到服务器返回结果的回调
     * @param result 服务器返回结果
     */
    SlotGameStageBase.prototype.onSpinResultsReceivedInternal = function (result) {
        if (!result.Message || !this.CallbackChangeData) {
            cc.error("spin返回结果为空");
            this.stopWaitingResults();
            return;
        }
        var spinResults = this.parseResult(result.Message);
        SlotGameStageBase.spinResults = spinResults;
        this.spinResults = spinResults;
        this.node.emit(SlotGameStageEvent_1.SlotGameStageEvent.SPIN_RESULTS_RECEIVED, spinResults);
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
        if (this.spinResults.winType != SpinResultsWinType_1.SpinResultsWinType.None &&
            this.spinResults.winType != SpinResultsWinType_1.SpinResultsWinType.Normal) {
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
            this.bottomBar.freeGameTrigger = spinResults.freeTrigger;
        }
        this.changeBottomBarSpinType();
        for (var i = 0; i < spinResults.slots.length; i++) {
            if (i >= this.symbolBoards.length) {
                cc.error("\u68CB\u76D8\u6570\u4E0D\u591F");
                break;
            }
            this.symbolBoards[i].slotResults = spinResults.slots[i];
            if (spinResults.slots[i].matchedLines && spinResults.slots[i].matchedLines.length > 0) {
                // todo 目前只有一个棋盘的情况下，暂时判定当有一个棋盘有连线，则设置该属性为true
                this._hasMatchedLines = true;
            }
        }
        if (spinResults.gameMode == SpinResultsGameMode_1.SpinResultsGameMode.FreeSpin ||
            spinResults.gameMode == SpinResultsGameMode_1.SpinResultsGameMode.OneMore) {
            this.bottomBar.changeFreeSpinCount(spinResults.finishedCount, spinResults.totalCount);
        }
        this.changeStatus(SlotGameStageStatus_1.SlotGameStageStatus.ServerResultsReceived);
    };
    /**
     * 经验条增长完后回调
     * @param upgrade
     */
    SlotGameStageBase.prototype.updateLevelCallback = function (upgrade) {
        if (upgrade) {
            this.levelUp.upgrade(upgrade, this.awardIncreaseCallback.bind(this));
        }
    };
    /**
     * 升级奖励数字增加回调
     * @param rewardCoins
     * @param rewardIntegral
     */
    SlotGameStageBase.prototype.awardIncreaseCallback = function (rewardCoins, rewardIntegral) {
        var _this = this;
        var coinAward = this.topBar.coins + rewardCoins;
        // todo 暂时这样处理
        if (this.spinResults.slots[0].matchedLines.length > 0) {
            coinAward = this.spinResults.userCoins;
        }
        var integralAward = this.topBar.integral + rewardIntegral;
        this.topBar.setUserCoins(coinAward, 1);
        this.scheduleOnce(function () {
            _this.topBar.setUserIntegral(integralAward, 1);
        }, 0.6);
        this._hasUpgrade = false;
    };
    SlotGameStageBase.prototype.changeBottomBarSpinType = function () {
        switch (this.$gameMode) {
            case SpinResultsGameMode_1.SpinResultsGameMode.FreeSpin:
            case SpinResultsGameMode_1.SpinResultsGameMode.OneMore:
                this.bottomBar.spinType = SpinType_1.SpinType.FreeSpin;
                break;
            case SpinResultsGameMode_1.SpinResultsGameMode.Respin:
                this.bottomBar.spinType = SpinType_1.SpinType.Respin;
                break;
            default:
                if (this.bottomBar.spinType === 1) {
                    this.bottomBar.spinType = SpinType_1.SpinType.AutoSpin;
                }
                else {
                    this.bottomBar.spinType = SpinType_1.SpinType.Spin;
                }
                //todo 如果是在自动模式下设置成SpinType.AutoSpin
                break;
        }
        this.bottomBar.nextGameMode = this.spinResults.nextGameMode;
    };
    /**
     * 默认处理结果的方法，
     * 如果游戏有额外的数据需要处理，则可以重载此方法
     * 然后返回最终的处理结果
     *
     * @param result 服务器返回的结果
     * @returns spinResults
     */
    SlotGameStageBase.prototype.parseResult = function (result) {
        console.log("parseResult");
        var data = JSON.parse(result);
        var data2 = JSON.parse(this.CallbackChangeData);
        data.slots = [];
        data.slots[0] = {};
        data.slots[0].columns = [];
        data.slots[0].events = [];
        data.slots[0].matchedLines = [];
        if (data.jock && data.jock.jockPotScore) {
            data.jackpots = data.jock.jockPotScore;
            data.jackpot = data.jock.lWinScore;
            data.jackpotLevel = data.jock.lev;
        }
        else {
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
            var row = data2._turntable.length;
            var coum = data2._turntable[0].oneline.length;
            for (var a = 0, b = coum; a < b; a++) {
                data.slots[0].columns[a] = {};
                data.slots[0].columns[a].cells = [];
            }
            for (var _i = 0, _a = coum; _i < _a; _i++) {
                for (var a = 0, b = row; a < b; a++) {
                    data.slots[0].columns[_i].cells[a] = { code: data2._turntable[a].oneline[_i] - 1, fixed: false, mockCodes: [] };
                    data.slots[0].columns[_i].cells[a].events = [];
                    if (this.JackPotCode == data2._turntable[a].oneline[_i] - 1) {
                        data.slots[0].columns[_i].cells[a].events.push({ code: SpinResultsEventCode_1.SpinResultsEventCode.Bonus, value: SpinResultsEventCode_1.SpinResultsEventCode.Bonus });
                    }
                    if (this.gameName == "ninjaVSsamurai") {
                        if (data2._turntable[a].oneline[_i] - 1 >= this.ScatterCode) {
                            data.slots[0].columns[_i].cells[a].events.push({ code: SpinResultsEventCode_1.SpinResultsEventCode.Free, value: SpinResultsEventCode_1.SpinResultsEventCode.Free });
                        }
                    }
                    else {
                        if (this.ScatterCode == data2._turntable[a].oneline[_i] - 1) {
                            data.slots[0].columns[_i].cells[a].events.push({ code: SpinResultsEventCode_1.SpinResultsEventCode.Free, value: SpinResultsEventCode_1.SpinResultsEventCode.Free });
                        }
                    }
                }
            }
        }
        //中奖连线数据转换
        if (data.hitline && data.hitline.length > 0) {
            var count = data.hitline.length;
            for (var a = 0, b = count; a < b; a++) {
                data.slots[0].matchedLines[a] = [];
                for (var _i = 0, _a = data.hitline[a].hitcount; _i < _a; _i++) {
                    var value = data.hitline[a].hit[_i];
                    value = this.BoardIndex[value.x - 1][value.y - 1];
                    data.slots[0].matchedLines[a][_i] = value;
                }
            }
        }
        //棋盘变化数据
        if (data2.changeinfos) {
            for (var a = 0, b = data2.changeinfos.length; a < b; a++) {
                if (data.slots[0].columns[data2.changeinfos[a].tcol].cells[data2.changeinfos[a].trow].events) {
                }
                else {
                    data.slots[0].columns[data2.changeinfos[a].tcol].cells[data2.changeinfos[a].trow].events = [];
                }
                data.slots[0].columns[data2.changeinfos[a].tcol].cells[data2.changeinfos[a].trow].events.push({ code: data2.changeinfos[a].tcard - 1, value: data2.changeinfos[a].tcard - 1 });
                data.slots[0].columns[data2.changeinfos[a].col].cells[data2.changeinfos[a].row].mockCodes.push(data2.changeinfos[a].beforcard - 1);
                data.slots[0].columns[data2.changeinfos[a].col].cells[data2.changeinfos[a].row].code = data2.changeinfos[a].card - 1;
                if (this.gameName == "zues") {
                    if (data.totalCount > 0 && data.finishedCount > 0) {
                        if (data2.changeinfos[a].beforcard - 1 == 6) {
                            data.slots[0].columns[data2.changeinfos[a].tcol].cells[data2.changeinfos[a].trow].events.push({ code: 6001, value: 6001 });
                        }
                        if (data2.changeinfos[a].beforcard - 1 == 4) {
                            data.slots[0].columns[data2.changeinfos[a].tcol].cells[data2.changeinfos[a].trow].events.push({ code: 5001, value: 5001 });
                        }
                    }
                }
            }
        }
        if (data.bisons) {
            for (var a = 0, b = data.bisons.length; a < b; a++) {
                var value_chong = -1;
                for (var x = 0, y = data.bisons[a].changes.length; x < y; x++) {
                    data.slots[0].columns[data.bisons[a].changes[x].col].cells[data.bisons[a].changes[x].row].mockCodes.push(data.bisons[a].changes[x].befor - 1);
                    data.slots[0].columns[data.bisons[a].changes[x].col].cells[data.bisons[a].changes[x].row].code = data.bisons[a].changes[x].card - 1;
                    if (data.bisons[a].isvertical == false) {
                        value_chong = data.bisons[a].changes[x].col;
                    }
                }
                if (!data.bisons[a].origin) { //普通冲刺
                    data.slots[0].events.push({ code: 1, value: value_chong });
                }
                else if (data.bisons[a].origin) {
                    data.slots[0].columns[data.bisons[a].origin.col].cells[data.bisons[a].origin.row].events.push({ code: a, value: value_chong });
                }
            }
        }
        if (data.ninjiamodle && data.ninjiamodle > 0) {
            data.slots[0].events.push({ code: 2, value: data.ninjiamodle });
        }
        //冰球
        if (data.cleans) {
            data.slots[0].events = [];
            var cleans = data.cleans;
            for (var i = 0; i < cleans.length; i++) {
                var value_chong = -1;
                var befort = cleans[i].befort;
                var aftert = cleans[i].aftert;
                var onelineNum = aftert[0].oneline.length;
                for (var j = 0; j < onelineNum; j++) {
                    for (var k = 0; k < aftert.length; k++) {
                        data.slots[0].columns[j].cells[k].mockCodes.push(befort[k].oneline[j] - 1);
                        data.slots[0].columns[j].cells[k].code = aftert[k].oneline[j] - 1;
                    }
                }
                //获取获奖棋子
                var prizes = cleans[i].cleans;
                for (var j = 0; j < prizes.length; j++) {
                    var points = prizes[j].points;
                    for (var k = 0; k < points.length; k++) {
                        if (data.slots[0].columns[points[k].col].cells[points[k].row].events) { }
                        else {
                            data.slots[0].columns[points[k].col].cells[points[k].row].events = [];
                        }
                        data.slots[0].columns[points[k].col].cells[points[k].row].events.push({ code: 1520, value: i });
                    }
                }
            }
        }
        this.CallbackChangeData = null;
        var wheels = [];
        if (data.specialCard) {
            for (var a = 0, b = data.specialCard.length; a < b; a++) {
                var item = new SpinResultsWheeItem_1.default(data.specialCard[a].ItemID, data.specialCard[a].ItemValue);
                wheels.push(item);
            }
        }
        var dsd = [];
        dsd.push(new SpinResultsWheel_1.default(wheels));
        //免费次数
        if (data.openfree > 0 && data.finishedCount == 0 || data.isstartfree) {
            data.freeTrigger = new SpinResultsFreeTrigger_1.default(SpinResultsGameMode_1.SpinResultsGameMode.FreeSpin, data.finishedCount, data.totalCount, dsd);
            data.nextGameMode = SpinResultsGameMode_1.SpinResultsGameMode.FreeSpin;
        }
        else if (data.openmarry > 0 && data.finishedCount == 0) {
            data.freeTrigger = new SpinResultsFreeTrigger_1.default(SpinResultsGameMode_1.SpinResultsGameMode.Bonus, 0, data.openmarry);
            data.nextGameMode = SpinResultsGameMode_1.SpinResultsGameMode.Bonus;
        }
        if (data.totalCount > 0 && data.finishedCount > 0) {
            data.gameMode = SpinResultsGameMode_1.SpinResultsGameMode.FreeSpin;
            data.nextGameMode = SpinResultsGameMode_1.SpinResultsGameMode.FreeSpin;
        }
        if (data.finishedCount == data.totalCount && data.totalCount != 0 && data.finishedCount != 0) {
            data.nextGameMode = SpinResultsGameMode_1.SpinResultsGameMode.Normal;
        }
        if (data.totalCount == 0 && data.openfree == 0 && this.bottomBar.nextGameMode == 1) {
            data.totalCount = this.bottomBar.freeGameTrigger.total;
            data.finishedCount = data.totalCount;
            data.winCoins = data.FreeWinGold;
            data.gameMode = SpinResultsGameMode_1.SpinResultsGameMode.FreeSpin;
            data.nextGameMode = SpinResultsGameMode_1.SpinResultsGameMode.Normal;
        }
        console.log("总次数：" + data.totalCount + ",免费：" + data.openfree + ",玛丽：" + data.openmarry);
        var spinResult = class_transformer_1.plainToClass(SpinResults_1.default, data);
        return spinResult;
    };
    //#endregion
    SlotGameStageBase.prototype.stopWaitingResults = function () {
        for (var i = 0; i < this.symbolBoards.length; i++) {
            this.symbolBoards[i].stopWaitingResults();
        }
    };
    /**
     * Fasts slot game
     */
    SlotGameStageBase.prototype.fast = function () {
        for (var i = 0; i < this.symbolBoards.length; i++) {
            this.symbolBoards[i].isFast = this.bottomBar.isFast;
        }
    };
    //#region
    SlotGameStageBase.prototype.beforeReplacingMockSymbols = function () {
        this.changeStatus(SlotGameStageStatus_1.SlotGameStageStatus.BoardsReplacing);
    };
    SlotGameStageBase.prototype.beforeStartPrizeShow = function () {
        this.changeStatus(SlotGameStageStatus_1.SlotGameStageStatus.BoardsPrizeShowing);
    };
    //#endregion
    /**
     * Chessboards results set
     * @param chessboardIndex
     */
    SlotGameStageBase.prototype.chessboardResultsSet = function (chessboardIndex) {
        this.changeStatus(SlotGameStageStatus_1.SlotGameStageStatus.BoardsPrizeShowing);
    };
    //#region 事件监听
    SlotGameStageBase.prototype.onStatusChanged = function (listener, target) {
        this.node.on(SlotGameStageEvent_1.SlotGameStageEvent.STATUS_CHANGED, listener, target);
    };
    SlotGameStageBase.prototype.clearStatusChanged = function () {
        this.node.off(SlotGameStageEvent_1.SlotGameStageEvent.STATUS_CHANGED);
    };
    SlotGameStageBase.prototype.offStatusChanged = function (listener, target) {
        this.node.off(SlotGameStageEvent_1.SlotGameStageEvent.STATUS_CHANGED, listener, target);
    };
    /**
     * 检查金币是否足够事件
     */
    SlotGameStageBase.prototype.onSpinCheckCoin = function (listener, target) {
        this.node.on(SlotGameStageEvent_1.SlotGameStageEvent.SPIN_CHECK_COIN, listener, target);
    };
    SlotGameStageBase.prototype.offSpinCheckCoin = function (listener, target) {
        this.node.off(SlotGameStageEvent_1.SlotGameStageEvent.SPIN_CHECK_COIN, listener, target);
    };
    SlotGameStageBase.prototype.clearSpinCheckCoin = function () {
        this.node.off(SlotGameStageEvent_1.SlotGameStageEvent.SPIN_CHECK_COIN);
    };
    /**
     * Determines whether spin results received on
     * @param listener
     * @param [target]
     */
    SlotGameStageBase.prototype.onSpinResultsReceived = function (listener, target) {
        this.node.on(SlotGameStageEvent_1.SlotGameStageEvent.SPIN_RESULTS_RECEIVED, listener, target);
    };
    /**
     * Offs spin results received
     * @param listener
     * @param [target]
     */
    SlotGameStageBase.prototype.offSpinResultsReceived = function (listener, target) {
        this.node.off(SlotGameStageEvent_1.SlotGameStageEvent.SPIN_RESULTS_RECEIVED, listener, target);
    };
    /**
     * Clears spin results received
     */
    SlotGameStageBase.prototype.clearSpinResultsReceived = function () {
        this.node.off(SlotGameStageEvent_1.SlotGameStageEvent.SPIN_RESULTS_RECEIVED);
    };
    //#endregion 事件监听
    SlotGameStageBase.prototype.getBoard = function (boardIndex) {
        var board = this.symbolBoards[boardIndex];
        if (!board) {
            cc.error("\u68CB\u76D8\u7D22\u5F15" + boardIndex + "\u8D85\u754C");
            return null;
        }
        return board;
    };
    SlotGameStageBase.prototype.checkAllSymbolBoardStopped = function () {
        var stopped = true;
        for (var i = 0; i < this.symbolBoards.length; i++) {
            var board = this.symbolBoards[i];
            if (board.status == SymbolBoardStatus_1.SymbolBoardStatus.Ready || board.status == SymbolBoardStatus_1.SymbolBoardStatus.Spinning) {
                stopped = false;
                break;
            }
        }
        return stopped;
    };
    SlotGameStageBase.prototype.canBeNextStatus = function () {
        var canBeNextStatus = true;
        for (var i = 0; i < this.symbolBoards.length; i++) {
            canBeNextStatus = this.symbolBoards[i].canBeNextStatus(this.status);
            if (!canBeNextStatus) {
                break;
            }
        }
        return canBeNextStatus;
    };
    /**
     * Receives prize show completed
     * @param boardIndex
     */
    SlotGameStageBase.prototype.receivePrizeShowCompleted = function (boardIndex) {
        var canBeNextStatus = this.canBeNextStatus();
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
                }
                else if (this.spinResults.finishedCount == this.spinResults.totalCount &&
                    this.spinResults.gameMode != SpinResultsGameMode_1.SpinResultsGameMode.Normal) {
                    this.freeModeFinished(this.spinResults.winCoins, this.spinResults.totalCount);
                    //* 特殊模式结束时，先将spin按钮类型改为普通spin状态
                    //* 防止此时spin按钮的类型还为freeSpin，避免出现按钮
                    //* 从freeSpin状态闪一下才变为普通spin状态
                    this.bottomBar.spinType = SpinType_1.SpinType.Spin;
                }
                else {
                    this.changeStatus(SlotGameStageStatus_1.SlotGameStageStatus.Ready);
                }
            }
        }
    };
    SlotGameStageBase.prototype.receiveSymbolBoardStatusChanged = function (boardIndex, boardStatus) {
        var canBeNextStatus = this.canBeNextStatus();
        if (canBeNextStatus) {
            switch (this.status) {
                case SlotGameStageStatus_1.SlotGameStageStatus.ServerResultsReceived:
                    this.status = SlotGameStageStatus_1.SlotGameStageStatus.BoardsReplacing;
                    break;
                case SlotGameStageStatus_1.SlotGameStageStatus.BoardsReplacing:
                    this.status = SlotGameStageStatus_1.SlotGameStageStatus.BoardsPrizeShowing;
                    break;
                case SlotGameStageStatus_1.SlotGameStageStatus.BoardsPrizeShowing:
                    this.status = SlotGameStageStatus_1.SlotGameStageStatus.BoardsSettling;
                    break;
                case SlotGameStageStatus_1.SlotGameStageStatus.BoardsSettling:
                    // this.status = SlotGameStageStatus.Ready;
                    this.status = SlotGameStageStatus_1.SlotGameStageStatus.PrizeShowing;
                    break;
                case SlotGameStageStatus_1.SlotGameStageStatus.PrizeShowing:
                    //! 如果下一把游戏模式是普通模式，且没有特殊模式的数据，才把游戏状态设为准备中
                    //! 为了防止当出现scatter棋子准备进入特殊模式，延迟执行beforeEnterFreeMode方法时。
                    //! 游戏状态若被设置为准备中，则会破坏游戏流程，出现用户还未选择是否进入特殊模式，
                    //! 游戏已经开始的bug
                    if (this.$nextGameMode === SpinResultsGameMode_1.SpinResultsGameMode.Normal && !this.spinResults.freeTrigger) {
                        this.status = SlotGameStageStatus_1.SlotGameStageStatus.Ready;
                    }
                    break;
            }
        }
    };
    /**
     *
     * @param boardIndex
     */
    SlotGameStageBase.prototype.receiveSymbolBoardStopped = function (boardIndex) {
        var canBeNextStatus = this.canBeNextStatus();
        if (canBeNextStatus) {
            this.changeStatus(SlotGameStageStatus_1.SlotGameStageStatus.BoardsReplacing);
        }
    };
    SlotGameStageBase.prototype.receiveSymbolMockCodesReplaced = function (boardIndex) {
        var canBeNextStatus = this.canBeNextStatus();
        if (canBeNextStatus) {
            this.changeStatus(SlotGameStageStatus_1.SlotGameStageStatus.BoardsPrizeShowing);
        }
    };
    /**
     * bigwin superwin等展示，需要重载，展示完成后要调用bigWinShowEnd
     */
    SlotGameStageBase.prototype.bigWinShow = function () {
        this.win.popUpWin(SlotGameStageBase.spinResults.winType, SlotGameStageBase.spinResults.bigWinCoins, SlotGameStageBase.spinResults.bigWinAdAwards.countdown, this.spinResults.gameWheel, this.bigWinCallback.bind(this));
        //* 如果已经有连线了，bigwin就不用给底部栏再赋一次值了
        if (!this._hasMatchedLines) {
            this.bottomBar.setWinCoins(this.spinResults.winCoins, 1);
        }
    };
    SlotGameStageBase.prototype.bigWinCallback = function (rewardCoins, rewardIntegral) {
        var _this = this;
        this.bigWinShowEnd();
        if (this.topBar) {
            var coinAward = rewardCoins + this.topBar.coins;
            // todo 暂时这样处理
            if (this.spinResults.slots[0].matchedLines.length > 0) {
                coinAward = this.spinResults.userCoins;
            }
            this.topBar.setUserCoins(coinAward, 0.5);
            var integralAward_1 = rewardIntegral + this.topBar.integral;
            //* 因积分动画执行顺序慢于金币动画，所以延时执行
            this.scheduleOnce(function () {
                _this.topBar.setUserIntegral(integralAward_1, 0.5);
            }, 1);
        }
        else {
            var coinAward = rewardCoins + this.bottomBar.coins;
            // todo 暂时这样处理
            if (this.spinResults.slots[0].matchedLines.length > 0) {
                coinAward = this.spinResults.userCoins;
            }
            this.bottomBar.setUserCoins(coinAward, 0.5);
        }
    };
    SlotGameStageBase.prototype.bigWinShowEnd = function () {
        this.bigWinShowEnded = true;
        this.hasBigWin = false;
        this.status = SlotGameStageStatus_1.SlotGameStageStatus.PrizeShowing;
    };
    /**
     * jp展示，需要重载，展示完成后要调用jackpotShowEnd
     */
    SlotGameStageBase.prototype.jackpotShow = function (jackpotValue) {
        console.log("jp");
        //* 播放jp音效
        SoundMgr_1.default.getInstance().playEffect("vo_jackpot");
        this.bottomBar.setWinCoins(this.spinResults.winCoins, 1);
        this.jackpotShowEnd();
    };
    SlotGameStageBase.prototype.jackpotShowEnd = function () {
        this.jackpotShowEnded = true;
        this.hasJackpot = false;
        this.status = SlotGameStageStatus_1.SlotGameStageStatus.PrizeShowing;
        if (this.topBar) {
            this.topBar.setUserCoins(this.spinResults.userCoins, 1);
        }
        else {
            this.bottomBar.setUserCoins(this.spinResults.userCoins, 1);
        }
    };
    SlotGameStageBase.prototype.enterFreeMode = function (extraData) {
        //* 若当前游戏模式为普通模式
        //* 转场到特殊模式前，底部栏赢得金币数清零
        if (this.spinResults.gameMode === SpinResultsGameMode_1.SpinResultsGameMode.Normal) {
            this.bottomBar.setWinCoins(0, 0);
        }
        this.status = SlotGameStageStatus_1.SlotGameStageStatus.Ready;
    };
    /**
     *获得卡片的时候调用
     * @param cardsData 卡片数据
     */
    SlotGameStageBase.prototype.cardViewShow = function (cardsData) { };
    /**
     * 免费模式结束的时候调用
     *
     * @param winCoins 赢取金币数
     * @param totalCount 总次数
     */
    SlotGameStageBase.prototype.freeModeFinished = function (winCoins, totalCount) { };
    /**
     *
     * 播放指定位置上的指定配置的spine动效，同时播放，任一播放结束就调用回调
     * @param positions 播放棋子位置列表：[5,9,10]
     * @param configName 配置名称
     * @param callback 回调
     * @param boardIndex
     */
    SlotGameStageBase.prototype.playSpineByConfigAndPositions = function (boardIndex, positions, configName, callback) { };
    /**
     * Plays enter free mode show
     * 播放进入免费模式的棋子动效
     * @param [callback] 回调
     * @param [code] 棋子编码
     */
    SlotGameStageBase.prototype.playEnterFreeModeShow = function (callback, code) {
        this.enterFreeModeShowCallback = callback;
        var anyShow = false;
        this.enterFreeModeShowCompletedOnce = false;
        for (var i = 0; i < this.symbolBoards.length; i++) {
            var board = this.symbolBoards[i];
            if (board.playEnterFreeModeShow(this.enterFreeModeShowCompleted.bind(this), code)) {
                anyShow = true;
            }
        }
        if (!anyShow && callback) {
            callback();
        }
    };
    SlotGameStageBase.prototype.enterFreeModeShowCompleted = function () {
        if (this.enterFreeModeShowCallback && !this.enterFreeModeShowCompletedOnce) {
            this.enterFreeModeShowCompletedOnce = true;
            this.enterFreeModeShowCallback();
        }
    };
    /**
     * “暂停”棋盘
     * 并非是真正的暂停棋盘，而是将转轴一直处于spin状态
     */
    SlotGameStageBase.prototype.pauseSymbolBoard = function () {
        this.symbolBoards.map(function (item) {
            item.waitingResultsStrategy.isPause = true;
        });
    };
    /**
     * 恢复棋盘
     * 解除一直处于spin状态，恢复到正常流转的状态
     */
    SlotGameStageBase.prototype.continueSymbolBoard = function () {
        this.symbolBoards.map(function (item) {
            item.waitingResultsStrategy.isPause = false;
            item.waitingResultsStrategy.isPauseBuffer = true;
        });
        //* 点击收集按钮，延时执行金币增长动画
        // this.scheduleOnce(() => {
        //     this.topBar.setUserCoins(this._coinAward, 0.5);
        // }, 1);
    };
    /**
     * 获取winType，用于埋点
     * @param type
     */
    SlotGameStageBase.prototype.selectWinType = function (type) {
        var typeStr = "";
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
    };
    return SlotGameStageBase;
}(FguiFullScreenBase_1.default));
exports.default = SlotGameStageBase;

cc._RF.pop();