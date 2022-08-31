
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/slots/lib/GameStage/SlotGameStageBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxzbG90c1xcbGliXFxHYW1lU3RhZ2VcXFNsb3RHYW1lU3RhZ2VCYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLDJEQUEwRDtBQUMxRCxrRUFBNkQ7QUFDN0QsNERBQXVEO0FBQ3ZELDZEQUE0RDtBQUk1RCxzRUFBcUU7QUFDckUsd0NBQXVDO0FBQ3ZDLG1EQUE4QztBQUs5Qyx5RkFBb0Y7QUFDcEYsZ0dBQStGO0FBRS9GLDRFQUEyRTtBQUUzRSxtRUFBOEQ7QUFDOUQsbUZBQWtGO0FBQ2xGLGlGQUFnRjtBQUVoRixxRkFBb0Y7QUFDcEYsbUZBQStFO0FBQy9FLDZFQUF3RTtBQUN4RSx5RkFBb0Y7QUFFcEYsdURBQWlEO0FBQ2pELHdEQUFtRDtBQUVuRDs7R0FFRztBQUNIO0lBQXdELHFDQUFrQjtJQUExRTtRQUFBLHFFQXc4Q0M7UUF0NENXLGFBQU8sR0FBd0IseUNBQW1CLENBQUMsS0FBSyxDQUFDO1FBR3pELGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFDaEMsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsc0JBQWdCLEdBQVksSUFBSSxDQUFDO1FBSWpDLG9DQUE4QixHQUFXLENBQUMsQ0FBQztRQWlCbkQ7O1dBRUc7UUFDSyxlQUFTLEdBQXdCLHlDQUFtQixDQUFDLE1BQU0sQ0FBQztRQUNwRTs7V0FFRztRQUNLLG1CQUFhLEdBQXdCLHlDQUFtQixDQUFDLE1BQU0sQ0FBQztRQUNoRSxtQkFBYSxHQUFzQixFQUFFLENBQUM7UUEyQjlDOztXQUVHO1FBQ0sscUJBQWUsR0FBd0IsSUFBSSxDQUFDO1FBQ3BEOztXQUVHO1FBQ0ssc0JBQWdCLEdBQVksS0FBSyxDQUFDO1FBQzFDOztXQUVHO1FBQ0ssaUJBQVcsR0FBWSxLQUFLLENBQUM7UUFDckM7O1dBRUc7UUFDSyxnQkFBVSxH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QUcsU0FBUyxDQUFDO2dCQUNwQixNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLE9BQU8sR0FBRyxXQUFXLENBQUM7Z0JBQ3RCLE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsT0FBTyxHQUFHLFVBQVUsQ0FBQztnQkFDckIsTUFBTTtZQUNWO2dCQUNJLE1BQU07U0FDYjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFDTCx3QkFBQztBQUFELENBeDhDQSxBQXc4Q0MsQ0F4OEN1RCw0QkFBa0IsR0F3OEN6RSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTbG90R2FtZVN0YWdlIGZyb20gXCIuL1Nsb3RHYW1lU3RhZ2VcIjtcblxuaW1wb3J0IHsgU2xvdEdhbWVTdGFnZUV2ZW50IH0gZnJvbSBcIi4vU2xvdEdhbWVTdGFnZUV2ZW50XCI7XG5pbXBvcnQgU3ltYm9sQm9hcmRCYXNlIGZyb20gXCIuLi9TeW1ib2xCb2FyZC9TeW1ib2xCb2FyZEJhc2VcIjtcbmltcG9ydCBCb3R0b21CYXJCYXNlIGZyb20gXCIuLi9Cb3R0b21CYXIvQm90dG9tQmFyQmFzZVwiO1xuaW1wb3J0IHsgU2xvdEdhbWVTdGFnZVN0YXR1cyB9IGZyb20gXCIuL1Nsb3RHYW1lU3RhZ2VTdGF0dXNcIjtcbmltcG9ydCB7IFByaXplU2hvd1N0YXR1cyB9IGZyb20gXCIuLi9Qcml6ZVNob3dTdGF0dXNcIjtcbmltcG9ydCBTeW1ib2xTcGluZVJlc291cmNlIGZyb20gXCIuLi9TeW1ib2xCb2FyZC9TeW1ib2xTcGluZVJlc291cmNlXCI7XG5pbXBvcnQgeyBNb2dhZmFTbG90cyB9IGZyb20gXCIuLi9Nb2dhZmFTbG90c1wiO1xuaW1wb3J0IHsgU3ltYm9sQm9hcmRTdGF0dXMgfSBmcm9tIFwiLi4vU3ltYm9sQm9hcmQvU3ltYm9sQm9hcmRTdGF0dXNcIjtcbmltcG9ydCB7IFNwaW5UeXBlIH0gZnJvbSBcIi4uL1NwaW5UeXBlXCI7XG5pbXBvcnQgVG9wQmFyQmFzZSBmcm9tIFwiLi4vVG9wQmFyL1RvcEJhckJhc2VcIjtcbmltcG9ydCBXaW5CYXNlIGZyb20gXCIuLi9Db21tb24vV2luQmFzZVwiO1xuaW1wb3J0IExldmVsVXBCYXNlIGZyb20gXCIuLi9Db21tb24vTGV2ZWxVcEJhc2VcIjtcblxuXG5pbXBvcnQgRmd1aUZ1bGxTY3JlZW5CYXNlIGZyb20gXCIuLi8uLi8uLi9mYWlyeWd1aS1jb21wb25lbnQvbGliL0ZndWlGdWxsU2NyZWVuQmFzZVwiO1xuaW1wb3J0IHsgTW9nYWZhRXh0ZW5zaW9ucyB9IGZyb20gXCIuLi8uLi8uLi9mYWlyeWd1aS1jb21wb25lbnQvbGliL2V4dGVuc2lvbnMvTW9nYWZhRXh0ZW5zaW9uc1wiO1xuaW1wb3J0IEZndWlDb21wb25lbnRCYXNlIGZyb20gXCIuLi8uLi8uLi9mYWlyeWd1aS1jb21wb25lbnQvbGliL0ZndWlDb21wb25lbnRCYXNlXCI7XG5pbXBvcnQgeyBBcHBDb25zdCB9IGZyb20gXCIuLi8uLi8uLi8uLi9Ac2xvdHNtYXN0ZXIvdWktY29tbW9uL2xpYi9BcHBDb25zdFwiO1xuaW1wb3J0IFdlYlNvY2tldCBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvbGliL1dlYlNvY2tldFwiXG5pbXBvcnQgU3BpblJlc3VsdHMgZnJvbSBcIi4uLy4uLy4uLy4uL3NwaW4tcmVzdWx0L1NwaW5SZXN1bHRzXCI7XG5pbXBvcnQgeyBTcGluUmVzdWx0c0dhbWVNb2RlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3NwaW4tcmVzdWx0L1NwaW5SZXN1bHRzR2FtZU1vZGVcIjtcbmltcG9ydCB7IFNwaW5SZXN1bHRzV2luVHlwZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9zcGluLXJlc3VsdC9TcGluUmVzdWx0c1dpblR5cGVcIjtcbmltcG9ydCBTcGluUmVzdWx0c1VwZ3JhZGUgZnJvbSBcIi4uLy4uLy4uLy4uL3NwaW4tcmVzdWx0L1NwaW5SZXN1bHRzVXBncmFkZVwiO1xuaW1wb3J0IHsgU3BpblJlc3VsdHNFdmVudENvZGUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3Bpbi1yZXN1bHQvU3BpblJlc3VsdHNFdmVudENvZGVcIjtcbmltcG9ydCBTcGluUmVzdWx0c1doZWVsSXRlbSBmcm9tIFwiLi4vLi4vLi4vLi4vc3Bpbi1yZXN1bHQvU3BpblJlc3VsdHNXaGVlSXRlbVwiO1xuaW1wb3J0IFNwaW5SZXN1bHRzV2hlZWwgZnJvbSBcIi4uLy4uLy4uLy4uL3NwaW4tcmVzdWx0L1NwaW5SZXN1bHRzV2hlZWxcIjtcbmltcG9ydCBTcGluUmVzdWx0c0ZyZWVUcmlnZ2VyIGZyb20gXCIuLi8uLi8uLi8uLi9zcGluLXJlc3VsdC9TcGluUmVzdWx0c0ZyZWVUcmlnZ2VyXCI7XG5pbXBvcnQgU3BpblJlc3VsdHNDYXJkIGZyb20gXCIuLi8uLi8uLi8uLi9zcGluLXJlc3VsdC9TcGluUmVzdWx0c0NhcmRcIjtcbmltcG9ydCB7IHBsYWluVG9DbGFzcyB9IGZyb20gXCJjbGFzcy10cmFuc2Zvcm1lclwiO1xuaW1wb3J0IFNvdW5kTWdyIGZyb20gXCIuLi8uLi8uLi91dGlscy9saWIvU291bmRNZ3JcIjtcblxuLyoqXG4gKiBzbG905ri45oiP5Z+657G7XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFNsb3RHYW1lU3RhZ2VCYXNlIGV4dGVuZHMgRmd1aUZ1bGxTY3JlZW5CYXNlIGltcGxlbWVudHMgU2xvdEdhbWVTdGFnZSwgTW9nYWZhU2xvdHMge1xuICAgIC8qKlxuICAgICAqIOWFqOWxgOW9k+WJjeeahOe7k+aenO+8jOazqOaEj++8jOi/meS4que7k+aenOaYr+WPquivu+eahO+8jOS4jeimgeS/ruaUueWFtuS4reeahOWGheWuuVxuICAgICAqIC8vdG9kbyDlkI7pnaLlj6rmj5DkvpvpnIDopoHlhbPlv4PnmoTmlbDmja7vvIzkuI3nlKjmiormlbTkuKpzcGluUmVzdWx0c+aatOmcsuWHuuadpVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgc3BpblJlc3VsdHM6IFNwaW5SZXN1bHRzO1xuICAgIC8qKlxuICAgICAqIOa4uOaIj+WQjeensFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBnZXQgZ2FtZU5hbWUoKTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIOa4uOaIj+e8lueggVxuICAgICAqL1xuICAgIGFic3RyYWN0IGdldCBzdGFnZUNvZGUoKTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIOaji+ebmOeahOS9jee9rue0ouW8leWvueW6lOacjeWKoeWZqOWdkOagh+ezu1xuICAgICAqL1xuICAgIHB1YmxpYyBCb2FyZEluZGV4OiBudW1iZXJbXVtdO1xuICAgIC8qKlxuICAgICAqIOiOt+WPluacgOWkp+aji+WtkOe8lueggSzpnIDopoHlnKjlrZDnsbvph43lhplcbiAgICAgKiBAcmV0dXJucyDmnIDlpKfmo4vlrZDnvJbnoIFcbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0IG1heENvZGUoKTogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICog5qOL5a2Q55qEc3BpbmXliqjnlLvotYTmupBcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0IHN5bWJvbFNwaW5lVXJscygpOiBTeW1ib2xTcGluZVJlc291cmNlW107XG4gICAgLyoqXG4gICAgICogR2V0cyBjaGlwIHN5bWJvbCBjb2Rlc1xuICAgICAqIOetueeggeaji+WtkOe8luWPt++8jOWmguaenOayoeaciei/lOWbnuepuuaVsOe7hFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBnZXQgY2hpcFN5bWJvbENvZGVzKCk6IG51bWJlcltdO1xuICAgIC8qKlxuICAgICAqIEdldHMgamFja3BvdCBzeW1ib2wgY29kZXNcbiAgICAgKiBqYWNrcG905qOL5a2Q57yW5Y+377yM5aaC5p6c5rKh5pyJ6L+U5Zue56m65pWw57uEXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGdldCBqYWNrcG90U3ltYm9sQ29kZXMoKTogbnVtYmVyW107XG4gICAgLyoqXG4gICAgICog6L2s5Yqo5pe26ZyA6KaB5o6S6Zmk55qE5qOL5a2Q77yM5YW25Lita2V55Li6Z2FtZU1vZGVcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIOavlOWmguacieS6m+a4uOaIj+WcqGZyZWVzcGlu5Lit5LiN5YWB6K645YaN5qyh6Kem5Y+RZnJlZXNwaW4sXG4gICAgICog6YKj5LmI5ZyoZnJlZXNwaW7ovazliqjkuK3lsLHpnIDopoHmjpLpmaRzY2F0dGVy5qOL5a2QXG4gICAgICogYGBgdHNcbiAgICAgKiBwcm90ZWN0ZSBnZXQgZXhjbHVkZVN5bWJvbHMoKTp7W2tleTpudW1iZXJdOm51bWJlcltdfXtcbiAgICAgKiAgICAgcmV0dXJuIHtTcGluUmVzdWx0c0dhbWVNb2RlLkZyZWVTcGluOltTeW1ib2xzLlNjYXR0ZXJdfTtcbiAgICAgKiB9XG4gICAgICogYGBgdHNcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0IGV4Y2x1ZGVDaGVzc2VzKCk6IHtcbiAgICAgICAgW2tleTogbnVtYmVyXTogbnVtYmVyW107XG4gICAgfTtcblxuICAgIC8qXG4gICAgamFja3BvdOaji+WtkOe8luWPt1xuICAgICovXG4gICAgcHVibGljIEphY2tQb3RDb2RlOiBudW1iZXI7XG4gICAgLypcbiAgICBTY2F0dGVy5qOL5a2Q57yW5Y+3XG4gICAgKi9cbiAgICBwdWJsaWMgU2NhdHRlckNvZGU6IG51bWJlcjtcbiAgICAvKlxuICAgIOeJueauiuaXtumXtOinpuWPkeaji+WtkFxuICAgICovXG4gICAgcHVibGljIEJvbnVzQ29kZTogbnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBfc3RhdHVzOiBTbG90R2FtZVN0YWdlU3RhdHVzID0gU2xvdEdhbWVTdGFnZVN0YXR1cy5SZWFkeTtcbiAgICBwcml2YXRlIF9jdXJyZW50R2FtZU1vZGU6IFNwaW5SZXN1bHRzR2FtZU1vZGU7XG4gICAgcHJpdmF0ZSBfZnJlZU1vZGVUcmlnZ2VyOiBTcGluUmVzdWx0c0dhbWVNb2RlO1xuICAgIHByaXZhdGUgaGFzQmlnV2luOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBiaWdXaW5TaG93RW5kZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHByaXZhdGUgaGFzSmFja3BvdDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgamFja3BvdFNob3dFbmRlZDogYm9vbGVhbiA9IHRydWU7XG4gICAgcHJpdmF0ZSAkc3BpblJlc3VsdHM6IFNwaW5SZXN1bHRzO1xuICAgIHByaXZhdGUgJGNsZWFuczogYW55O1xuICAgIHByaXZhdGUgc3ltYm9sU3BpbmVSZXNvdXJjZXM6IFN5bWJvbFNwaW5lUmVzb3VyY2VbXTtcbiAgICBwcml2YXRlIHN5bWJvbFNwaW5lUmVzb3VyY2VMb2FkZWRJbmRleDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlICRzcGluUm91dGU6IGFueTtcbiAgICBwcml2YXRlIENhbGxiYWNrRGF0YTogYW55O1xuICAgIHByaXZhdGUgQ2FsbGJhY2tDaGFuZ2VEYXRhOiBhbnk7XG4gICAgcHJvdGVjdGVkIGdldCBzcGluUm91dGUoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHNwaW5Sb3V0ZTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHNldCBzcGluUm91dGUodmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLiRzcGluUm91dGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHJpdmF0ZSAkc3BpblBhcmFtczogYW55O1xuICAgIHByb3RlY3RlZCBnZXQgc3BpblBhcmFtcygpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy4kc3BpblBhcmFtcztcbiAgICB9XG4gICAgcHJvdGVjdGVkIHNldCBzcGluUGFyYW1zKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy4kc3BpblBhcmFtcyA9IHZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDlvZPliY3muLjmiI/nsbvlnotcbiAgICAgKi9cbiAgICBwcml2YXRlICRnYW1lTW9kZTogU3BpblJlc3VsdHNHYW1lTW9kZSA9IFNwaW5SZXN1bHRzR2FtZU1vZGUuTm9ybWFsO1xuICAgIC8qKlxuICAgICAqIOS4i+S4gOWxgOa4uOaIj+exu+Wei1xuICAgICAqL1xuICAgIHByaXZhdGUgJG5leHRHYW1lTW9kZTogU3BpblJlc3VsdHNHYW1lTW9kZSA9IFNwaW5SZXN1bHRzR2FtZU1vZGUuTm9ybWFsO1xuICAgIHByaXZhdGUgJHN5bWJvbEJvYXJkczogU3ltYm9sQm9hcmRCYXNlW10gPSBbXTtcbiAgICAvKipcbiAgICAgKiB3ZWJzb2NrZXTlrp7kvotcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0IHdlYlNvY2tldCgpOiBXZWJTb2NrZXQ7XG4gICAgLyoqXG4gICAgICog5qOL55uY5YiX6KGoXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldCBzeW1ib2xCb2FyZHMoKTogU3ltYm9sQm9hcmRCYXNlW10ge1xuICAgICAgICByZXR1cm4gdGhpcy4kc3ltYm9sQm9hcmRzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDlupXpg6hiYXJcbiAgICAgKi9cbiAgICBwdWJsaWMgYm90dG9tQmFyOiBCb3R0b21CYXJCYXNlO1xuICAgIC8qKlxuICAgICAqIOmhtumDqGJhclxuICAgICAqL1xuICAgIHB1YmxpYyB0b3BCYXI6IFRvcEJhckJhc2U7XG4gICAgLyoqXG4gICAgICogd2lu5qGG5Z+657G7XG4gICAgICovXG4gICAgcHJvdGVjdGVkIHdpbjogV2luQmFzZTtcbiAgICAvKipcbiAgICAgKiDljYfnuqflvLnnqpdcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgbGV2ZWxVcDogTGV2ZWxVcEJhc2U7XG4gICAgLyoqXG4gICAgICogU3BpbuaMiemSrue8k+WtmFxuICAgICAqL1xuICAgIHByaXZhdGUgc3BpbkNsaWNrQnVmZmVyOiBTbG90R2FtZVN0YWdlU3RhdHVzID0gbnVsbDtcbiAgICAvKipcbiAgICAgKiDmmK/lkKbmnInov57nur9cbiAgICAgKi9cbiAgICBwcml2YXRlIF9oYXNNYXRjaGVkTGluZXM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiDmmK/lkKbmnInljYfnuqdcbiAgICAgKi9cbiAgICBwcml2YXRlIF9oYXNVcGdyYWRlOiBib29sZWFuID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICog5Y2H57qn6YeR5biB5aWW5YqxXG4gICAgICovXG4gICAgcHJpdmF0ZSBfY29pbkF3YXJkOiBudW1iZXIgPSAwO1xuICAgIC8qKlxuICAgICAqIOWNh+e6p+enr+WIhuWlluWKsVxuICAgICAqL1xuICAgIHByaXZhdGUgX2ludGVncmFsQXdhcmQ6IG51bWJlciA9IDA7XG4gICAgLyoqXG4gICAgICog5pyA5aSn6L+e57q/5pWwXG4gICAgICovXG4gICAgcHVibGljIG1heGxpbmU6IG51bWJlciA9IDE7XG4gICAgLyoqXG4gICAgICog6I635Y+W5ri45oiP54q25oCBXG4gICAgICovXG4gICAgcHVibGljIGdldCBzdGF0dXMoKTogU2xvdEdhbWVTdGFnZVN0YXR1cyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0dXM7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgc3RhdHVzKHZhbHVlOiBTbG90R2FtZVN0YWdlU3RhdHVzKSB7XG4gICAgICAgIHRoaXMuX3N0YXR1cyA9IHZhbHVlO1xuICAgICAgICBjb25zb2xlLmxvZyhcImdhbWVTdGFnZXN0YXR1cyA9PT09XCIgKyB0aGlzLl9zdGF0dXMpXG4gICAgICAgIGlmICh2YWx1ZSA9PSBTbG90R2FtZVN0YWdlU3RhdHVzLlNlcnZlclJlc3VsdHNSZWNlaXZlZCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMuc3BpbkNsaWNrQnVmZmVyICYmXG4gICAgICAgICAgICAgICAgKHRoaXMuc3BpbkNsaWNrQnVmZmVyID09IFNsb3RHYW1lU3RhZ2VTdGF0dXMuV2FpdGluZ1NlcnZlclJlc3VsdHMgfHxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGluQ2xpY2tCdWZmZXIgPT0gU2xvdEdhbWVTdGFnZVN0YXR1cy5SZXF1ZXN0aW5nU2VydmVyKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgLy8g5Zyo6K+35rGC5pyN5Yqh5Zmo5Y+K562J5b6F5pyN5Yqh5Zmo6L+U5Zue5Lit5LiA55u054K55Ye7c3RvcO+8jOmCo+S5iOaUtuWIsOacjeWKoeWZqOi/lOWbnuWQjueri+WNs+WBnOatolxuICAgICAgICAgICAgICAgIC8vdG9kbyDmo4vnm5jlgZzmraLovazliqhcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BXYWl0aW5nUmVzdWx0cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zcGluQ2xpY2tCdWZmZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGxldCBib2FyZFN0YXR1czogU3ltYm9sQm9hcmRTdGF0dXMgPSBudWxsO1xuICAgICAgICBpZiAodmFsdWUgPT0gU2xvdEdhbWVTdGFnZVN0YXR1cy5SZWFkeSkge1xuICAgICAgICAgICAgYm9hcmRTdGF0dXMgPSBTeW1ib2xCb2FyZFN0YXR1cy5SZWFkeTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNwaW5SZXN1bHRzICYmIHRoaXMuc3BpblJlc3VsdHMubmV4dEdhbWVNb2RlICE9IFNwaW5SZXN1bHRzR2FtZU1vZGUuTm9ybWFsKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BpbkNsaWNrKCk7XG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgICB2YWx1ZSA9PSBTbG90R2FtZVN0YWdlU3RhdHVzLlJlcXVlc3RpbmdTZXJ2ZXIgfHxcbiAgICAgICAgICAgIHZhbHVlID09IFNsb3RHYW1lU3RhZ2VTdGF0dXMuV2FpdGluZ1NlcnZlclJlc3VsdHMgfHxcbiAgICAgICAgICAgIHZhbHVlID09IFNsb3RHYW1lU3RhZ2VTdGF0dXMuU2VydmVyUmVzdWx0c1JlY2VpdmVkXG4gICAgICAgICkge1xuICAgICAgICAgICAgYm9hcmRTdGF0dXMgPSBTeW1ib2xCb2FyZFN0YXR1cy5TcGlubmluZztcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9hcmRTdGF0dXMgIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLiRzeW1ib2xCb2FyZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzeW1ib2xCb2FyZHNbaV0uc3RhdHVzID0gYm9hcmRTdGF0dXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdmFsdWUgPT0gU2xvdEdhbWVTdGFnZVN0YXR1cy5SZWFkeSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuc3BpblJlc3VsdHMgJiZcbiAgICAgICAgICAgICAgICB0aGlzLnNwaW5SZXN1bHRzLmdhbWVNb2RlICE9IFNwaW5SZXN1bHRzR2FtZU1vZGUuTm9ybWFsICYmXG4gICAgICAgICAgICAgICAgdGhpcy5zcGluUmVzdWx0cy5maW5pc2hlZENvdW50IDwgdGhpcy5zcGluUmVzdWx0cy50b3RhbENvdW50XG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAvL3RoaXMuc3BpbkNsaWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09IFNsb3RHYW1lU3RhZ2VTdGF0dXMuQm9hcmRzUmVwbGFjaW5nKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jYW5CZU5leHRTdGF0dXMoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gU2xvdEdhbWVTdGFnZVN0YXR1cy5Cb2FyZHNQcml6ZVNob3dpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09IFNsb3RHYW1lU3RhZ2VTdGF0dXMuQm9hcmRzUHJpemVTaG93aW5nKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jYW5CZU5leHRTdGF0dXMoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gU2xvdEdhbWVTdGFnZVN0YXR1cy5Cb2FyZHNTZXR0bGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT0gU2xvdEdhbWVTdGFnZVN0YXR1cy5Cb2FyZHNTZXR0bGluZykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2FuQmVOZXh0U3RhdHVzKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9IFNsb3RHYW1lU3RhZ2VTdGF0dXMuUHJpemVTaG93aW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PSBTbG90R2FtZVN0YWdlU3RhdHVzLlByaXplU2hvd2luZykge1xuICAgICAgICAgICAgbGV0IGhhc0JpZ1dpbk9ySmFja3BvdFNob3cgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc0phY2twb3QgJiYgIXRoaXMuamFja3BvdFNob3dFbmRlZCkge1xuICAgICAgICAgICAgICAgIGhhc0JpZ1dpbk9ySmFja3BvdFNob3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuamFja3BvdFNob3coU2xvdEdhbWVTdGFnZUJhc2Uuc3BpblJlc3VsdHMuamFja3BvdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLmhhc0phY2twb3QgJiYgdGhpcy5oYXNCaWdXaW4gJiYgIXRoaXMuYmlnV2luU2hvd0VuZGVkKSB7XG4gICAgICAgICAgICAgICAgaGFzQmlnV2luT3JKYWNrcG90U2hvdyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5iaWdXaW5TaG93KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFoYXNCaWdXaW5PckphY2twb3RTaG93ICYmIHRoaXMuc3BpblJlc3VsdHMuZnJlZVRyaWdnZXIpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMuYmVmb3JlRW50ZXJGcmVlTW9kZS5iaW5kKHRoaXMpLCA1MDAsIHRoaXMuc3BpblJlc3VsdHMuZnJlZVRyaWdnZXIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAhaGFzQmlnV2luT3JKYWNrcG90U2hvdyAmJlxuICAgICAgICAgICAgICAgIHRoaXMuc3BpblJlc3VsdHMuZmluaXNoZWRDb3VudCA9PSB0aGlzLnNwaW5SZXN1bHRzLnRvdGFsQ291bnQgJiZcbiAgICAgICAgICAgICAgICB0aGlzLnNwaW5SZXN1bHRzLmdhbWVNb2RlICE9IFNwaW5SZXN1bHRzR2FtZU1vZGUuTm9ybWFsXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZyZWVNb2RlRmluaXNoZWQodGhpcy5zcGluUmVzdWx0cy53aW5Db2lucywgdGhpcy5zcGluUmVzdWx0cy50b3RhbENvdW50KTtcbiAgICAgICAgICAgICAgICAvLyog54m55q6K5qih5byP57uT5p2f5pe277yM5YWI5bCGc3BpbuaMiemSruexu+Wei+aUueS4uuaZrumAmnNwaW7nirbmgIFcbiAgICAgICAgICAgICAgICAvLyog6Ziy5q2i5q2k5pe2c3BpbuaMiemSrueahOexu+Wei+i/mOS4umZyZWVTcGlu77yM6YG/5YWN5Ye6546w5oyJ6ZKuXG4gICAgICAgICAgICAgICAgLy8qIOS7jmZyZWVTcGlu54q25oCB6Zeq5LiA5LiL5omN5Y+Y5Li65pmu6YCac3BpbueKtuaAgVxuICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQmFyLnNwaW5UeXBlID0gU3BpblR5cGUuU3BpbjtcbiAgICAgICAgICAgICAgICAvLyog54m55q6K5qih5byP57uT5p2f77yM5b+r6YCf5bCG5ri45oiP5qih5byP6K6+572u5Li65pmu6YCa5qih5byP77yM6L+Z5qC35LiL5LiA5qyhc3BpbuWwseWPr+S7peebtOaOpeagueaNruaZrumAmuaooeW8j+eahOiuvuWumua4heepundpbuahhueahOmHkeW4gVxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZ2FtZU1vZGUgPT09IFNwaW5SZXN1bHRzR2FtZU1vZGUuRnJlZVNwaW4gfHxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZ2FtZU1vZGUgPT09IFNwaW5SZXN1bHRzR2FtZU1vZGUuUmVzcGluIHx8XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGdhbWVNb2RlID09PSBTcGluUmVzdWx0c0dhbWVNb2RlLk9uZU1vcmVcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZ2FtZU1vZGUgPSBTcGluUmVzdWx0c0dhbWVNb2RlLk5vcm1hbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy/pmLLmraJmcmVlc3BpbiDnu5PmnZ/lkI7lj6/ngrnlh7sg5Zyo6L2s5LiA5bGFXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQmFyLmZyZWVNb2RlRmluaXNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBTbG90R2FtZVN0YWdlU3RhdHVzLlJlYWR5O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS5lbWl0KFNsb3RHYW1lU3RhZ2VFdmVudC5TVEFUVVNfQ0hBTkdFRCwgdGhpcy5zdGF0dXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5blvZPliY3muLjmiI/mqKHlvI9cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGN1cnJlbnRHYW1lTW9kZSgpOiBTcGluUmVzdWx0c0dhbWVNb2RlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRHYW1lTW9kZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W5YWN6LS55qih5byP6Kem5Y+R5ZmoXG4gICAgICovXG4gICAgcHVibGljIGdldCBmcmVlTW9kZVRyaWdnZXIoKTogU3BpblJlc3VsdHNHYW1lTW9kZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mcmVlTW9kZVRyaWdnZXI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPlnNwaW7nu5PmnpxcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHNwaW5SZXN1bHRzKCk6IFNwaW5SZXN1bHRzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHNwaW5SZXN1bHRzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDorr7nva5zcGlu57uT5p6cXG4gICAgICovXG4gICAgcHVibGljIHNldCBzcGluUmVzdWx0cyh2YWx1ZTogU3BpblJlc3VsdHMpIHtcbiAgICAgICAgdGhpcy4kc3BpblJlc3VsdHMgPSB2YWx1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5riF5qWa5qOL5a2Q5pWw5o2uXG4gICAgKi9cbiAgICBwdWJsaWMgZ2V0IGNsZWFucygpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy4kY2xlYW5zO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGNsZWFucyh2YWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMuJGNsZWFucyA9IHZhbHVlO1xuICAgIH1cbiAgICBwcml2YXRlIF9iZXRzOiBudW1iZXJbXTtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHN1cGVyLm9uTG9hZCgpO1xuICAgICAgICB0aGlzLl9zdGF0dXMgPSBTbG90R2FtZVN0YWdlU3RhdHVzLlJlYWR5O1xuICAgICAgICB0aGlzLmxvYWRDb21tb25Tb3VuZHNSZXNvdXJjZXMoKTtcbiAgICAgICAgTW9nYWZhRXh0ZW5zaW9ucy5pbml0KCk7XG4gICAgICAgIHRoaXMuQ2FsbGJhY2tEYXRhID0gbnVsbDtcbiAgICAgICAgdGhpcy53ZWJTb2NrZXQuc2V0QWN0b3JNZXNzYWdlQ2FsbGJhY2soKG1zZykgPT4ge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBudWxsXG4gICAgICAgICAgICBsZXQgZW50ZXJmcmVlID0gZmFsc2VcbiAgICAgICAgICAgIGlmIChtc2cuSW5mbyAmJiBtc2cuSW5mby5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UobXNnLkluZm9bMF0uTWVzc2FnZSlcblxuICAgICAgICAgICAgICAgIC8vaWYoZGF0YS5mbj09XCJzY19zaG93ZG93bl9zbG90Zl9uXCIpe1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmZuLmluZGV4T2YoXCJzY19zaG93ZG93bl9zbG90XCIpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQ2FsbGJhY2tEYXRhID0gbXNnLkluZm9bMF1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5vcGVubWFycnkgJiYgZGF0YS5vcGVubWFycnkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRlcmZyZWUgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vaWYoIGRhdGEuZm4gPT1cInNjX3RhYmxlc3RhcnRfc2xvdGZfblwiICYmIHRoaXMuQ2FsbGJhY2tEYXRhICl7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuZm4uaW5kZXhPZihcInNjX3RhYmxlc3RhcnRfc2xvdFwiKSAhPSAtMSAmJiB0aGlzLkNhbGxiYWNrRGF0YSB8fFxuICAgICAgICAgICAgICAgICAgICBlbnRlcmZyZWUgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uU3BpblJlc3VsdHNSZWNlaXZlZEludGVybmFsKHRoaXMuQ2FsbGJhY2tEYXRhKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBY3Rvck1lc3NhZ2VDYWxsYmFjaz09PT09PT1cIiwgZGF0YSlcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkRmd1aUNvbXBvbmVudDxUIGV4dGVuZHMgRmd1aUNvbXBvbmVudEJhc2U+KHR5cGU6IHsgbmV3KCk6IFQgfSk6IFQge1xuICAgICAgICBjb25zdCBjaGlsZCA9IHN1cGVyLmFkZEZndWlDb21wb25lbnQodHlwZSk7XG4gICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIFN5bWJvbEJvYXJkQmFzZSkge1xuICAgICAgICAgICAgY29uc3QgY2hlc3Nib2FyZCA9IChjaGlsZCBhcyB1bmtub3duKSBhcyBTeW1ib2xCb2FyZEJhc2U7XG4gICAgICAgICAgICB0aGlzLnN5bWJvbEJvYXJkcy5wdXNoKGNoZXNzYm9hcmQpO1xuICAgICAgICAgICAgY2hlc3Nib2FyZC5pbmRleCA9IHRoaXMuc3ltYm9sQm9hcmRzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBjaGVzc2JvYXJkLnN0YWdlQ29kZSA9IHRoaXMuc3RhZ2VDb2RlO1xuICAgICAgICAgICAgLy8gY2hlc3Nib2FyZC5nYW1lU3RhZ2UgPSB0aGlzO1xuICAgICAgICAgICAgY2hlc3Nib2FyZC5vblJlc3VsdHNTZXQodGhpcy5jaGVzc2JvYXJkUmVzdWx0c1NldCwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgQm90dG9tQmFyQmFzZSkge1xuICAgICAgICAgICAgdGhpcy5ib3R0b21CYXIgPSAoY2hpbGQgYXMgYW55KSBhcyBCb3R0b21CYXJCYXNlO1xuICAgICAgICAgICAgdGhpcy5ib3R0b21CYXIuZ2FtZSA9ICh0aGlzIGFzIHVua25vd24pIGFzIFNsb3RHYW1lU3RhZ2U7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUJhci5vbkZhc3RDbGljayh0aGlzLmZhc3QsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIFRvcEJhckJhc2UpIHtcbiAgICAgICAgICAgIHRoaXMudG9wQmFyID0gKGNoaWxkIGFzIGFueSkgYXMgVG9wQmFyQmFzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVDaGlsZENvbXBvbmVudHMoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkQ29tcG9uZW50cygpO1xuICAgICAgICB0aGlzLmxvYWRTeW1ib2xTcGluZVJlc291cmNlcygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDliqDovb3lhaznlKjpn7PmlYjotYTmupBcbiAgICAgKi9cbiAgICBwcml2YXRlIGxvYWRDb21tb25Tb3VuZHNSZXNvdXJjZXMoKTogdm9pZCB7XG4gICAgICAgIHJldHVybjtcbiAgICAgICAgbGV0IGJ1bmRsZSA9IGNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUoXCJnYW1lc19jb21tb25cIilcbiAgICAgICAgaWYgKGJ1bmRsZSkge1xuICAgICAgICAgICAgYnVuZGxlLmxvYWREaXIoXCIvc291bmRzXCIsIGNjLkF1ZGlvQ2xpcCwgZnVuY3Rpb24gKGVyciwgY2xpcHMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIFNvdW5kTWdyLmdldEluc3RhbmNlKCkuYWRkU291bmQoY2xpcHNbaV0ubmFtZSwgY2xpcHNbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHJlc1VybCA9IFwiZ2FtZXNfY29tbW9uXCI7XG4gICAgICAgICAgICBpZiAoIUFwcENvbnN0LmlzRWRpdG9yKSB7XG4gICAgICAgICAgICAgICAgcmVzVXJsID0gQXBwQ29uc3QucmVzVXJsICsgXCJnYW1lc19jb21tb25cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKHJlc1VybCwgKGVyciwgYnVuZGxlKSA9PiB7XG4gICAgICAgICAgICAgICAgYnVuZGxlLmxvYWREaXIoXCIvc291bmRzXCIsIGNjLkF1ZGlvQ2xpcCwgZnVuY3Rpb24gKGVyciwgY2xpcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgU291bmRNZ3IuZ2V0SW5zdGFuY2UoKS5hZGRTb3VuZChjbGlwc1tpXS5uYW1lLCBjbGlwc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjYy5sb2FkZXIubG9hZFJlc0RpcihcIkdhbWVzL0NvbW1vbi9zb3VuZHNcIiwgY2MuQXVkaW9DbGlwLCBmdW5jdGlvbiAoZXJyLCBjbGlwcykge1xuICAgICAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyAgICAgICAgIFNvdW5kTWdyLmdldEluc3RhbmNlKCkuYWRkU291bmQoY2xpcHNbaV0ubmFtZSwgY2xpcHNbaV0pO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9KTtcbiAgICB9XG4gICAgcHJpdmF0ZSBsb2FkU3ltYm9sU3BpbmVSZXNvdXJjZXMoKTogdm9pZCB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuc3ltYm9sU3BpbmVVcmxzICYmXG4gICAgICAgICAgICB0aGlzLnN5bWJvbFNwaW5lVXJscy5sZW5ndGggPj0gMCAmJlxuICAgICAgICAgICAgdGhpcy5zeW1ib2xTcGluZVJlc291cmNlTG9hZGVkSW5kZXggPCB0aGlzLnN5bWJvbFNwaW5lVXJscy5sZW5ndGhcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBsZXQgdXJscyA9IHRoaXMuc3ltYm9sU3BpbmVVcmxzW3RoaXMuc3ltYm9sU3BpbmVSZXNvdXJjZUxvYWRlZEluZGV4XS51cmxzO1xuICAgICAgICAgICAgaWYgKHVybHMgJiYgdXJscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXNBcnJheSh1cmxzLCBzcC5Ta2VsZXRvbkRhdGEsIHRoaXMuc3ltYm9sU3BpbmVSZXNvdXJjZXNMb2FkZWQuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3ltYm9sU3BpbmVSZXNvdXJjZUxvYWRlZEluZGV4Kys7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkU3ltYm9sU3BpbmVSZXNvdXJjZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIHN5bWJvbEJvYXJkU2V0V2luQ29pbnMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3ltYm9sQm9hcmRzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaXRlbS5ub2RlLm9uKFwiQk9UVE9NX0JBUl9TRVRfV0lOX0NPSU5TXCIsIHRoaXMuc2V0V2luQ29pbnMuYmluZCh0aGlzKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgYWxsQ2hpbGRDcmVhdGVkKCk6IHZvaWQge1xuICAgICAgICBzdXBlci5hbGxDaGlsZENyZWF0ZWQoKTtcbiAgICAgICAgLy90aGlzLmxvYWRJbml0R2FtZURhdGEoKTtcbiAgICAgICAgdGhpcy5zeW1ib2xCb2FyZFNldFdpbkNvaW5zKCk7XG4gICAgICAgIC8vKiDmuLjmiI/ln7rnsbvms6jlhozlupXpg6jmoI9iZXTmlLnlj5jkuovku7ZcbiAgICAgICAgLy90aGlzLmJvdHRvbUJhci5ub2RlLm9uKFwiQkVUX0NIQU5HRVwiLCB0aGlzLmJldENoYW5nZS5iaW5kKHRoaXMpKTtcblxuICAgICAgICBpZiAodGhpcy50b3BCYXIpIHtcbiAgICAgICAgICAgIHRoaXMudG9wQmFyLmNvaW5zID0gQXBwQ29uc3QuaGFsbERhdGEuZ29sZFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ib3R0b21CYXIuc2V0VXNlckNvaW5zKEFwcENvbnN0LmhhbGxEYXRhLmdvbGQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog5LiL5rOo5YC85Y+Y5YyW5LqL5Lu2XG4gICAgICogQHBhcmFtIGJldFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBiZXRDaGFuZ2UoYmV0OiBudW1iZXIpOiB2b2lkIHsgfVxuICAgIHByaXZhdGUgc3ltYm9sU3BpbmVSZXNvdXJjZXNMb2FkZWQoZXJyb3I6IGFueSwgcmVzb3VyY2VzOiBzcC5Ta2VsZXRvbkRhdGFbXSk6IHZvaWQge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNjLmVycm9yKGDmo4vlrZBzcGluZeWKqOeUu+i9veWFpemUmeivr2ApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHVybHMgPSB0aGlzLnN5bWJvbFNwaW5lVXJsc1t0aGlzLnN5bWJvbFNwaW5lUmVzb3VyY2VMb2FkZWRJbmRleF07XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc291cmNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0gcmVzb3VyY2VzW2ldO1xuICAgICAgICAgICAgICAgIHRoaXMuc3ltYm9sU3BpbmVVcmxzW3RoaXMuc3ltYm9sU3BpbmVSZXNvdXJjZUxvYWRlZEluZGV4XS5hZGRSZXNvdXJjZShyZXNvdXJjZS5uYW1lLCByZXNvdXJjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnN5bWJvbFNwaW5lUmVzb3VyY2VMb2FkZWRJbmRleCsrO1xuICAgICAgICAgICAgdGhpcy5sb2FkU3ltYm9sU3BpbmVSZXNvdXJjZXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWKoOi9veWIneWni+WMlua4uOaIj+aVsOaNrlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBsb2FkSW5pdEdhbWVEYXRhKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuc3BpblJvdXRlIHx8ICF0aGlzLnNwaW5QYXJhbXMpIHtcbiAgICAgICAgICAgIGNjLmVycm9yKFwi5Yid5aeL5YyW6K+35rGC5Y+C5pWw6ZSZ6K+v77yM5peg5rOV6I635Y+W5Yid5aeL5pWw5o2uXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMud2ViU29ja2V0LnJlcXVlc3QodGhpcy5zcGluUm91dGUsIHRoaXMuc3BpblBhcmFtcywgdGhpcy5sb2FkSW5pdEdhbWVEYXRhQ2FsbGJhY2suYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWKoOi9veWIneWni+WMlua4uOaIj+aVsOaNruWbnuiwg1xuICAgICAqIOWkhOeQhuWIneWni+WMlua4uOaIj+iuvue9ruOAgei1i+WAvFxuICAgICAqIEBwYXJhbSByZXN1bHRcbiAgICAgKi9cbiAgICBwcml2YXRlIGxvYWRJbml0R2FtZURhdGFDYWxsYmFjayhyZXN1bHQ6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT09IDIwMCAmJiByZXN1bHQuaXNTdWNjZXNzZnVsKSB7XG4gICAgICAgICAgICAvLyog6K6+572u5bqV6YOo5qCP562556CBXG4gICAgICAgICAgICBpZiAocmVzdWx0LmRhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9iZXRzID0gcmVzdWx0LmRhdGEuY29uZmlnLmJldC5saXN0Lm1hcCgoaXRlbSkgPT4gaXRlbS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgbGV0IG1heEJldDogbnVtYmVyID0gcmVzdWx0LmRhdGEuY29uZmlnLmJldC5tYXg7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRCb3R0b21CYXJCZXRzKG1heEJldCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ib3R0b21CYXIuYmV0ID0gdGhpcy5ib3R0b21CYXIuYmV0c1swXTtcbiAgICAgICAgICAgICAgICAvLyBsZXQgbWF4SW5kZXg6IG51bWJlciA9IGJldHMuaW5kZXhPZihtYXhCZXQpO1xuICAgICAgICAgICAgICAgIC8vIC8vdG9kbyDlj5bnprvlvpfmnIDov5HnmoTmnIDlpKflgLxcbiAgICAgICAgICAgICAgICAvLyBiZXRzID0gYmV0cy5zbGljZSgwLCBtYXhJbmRleCArIDEpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuYm90dG9tQmFyLmJldHMgPSBiZXRzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5nZXRJbml0R2FtZURhdGEocmVzdWx0KTtcbiAgICAgICAgICAgIC8vKiDorr7nva7liJ3lp4vljJbpu5jorqTmo4vnm5hcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRTbG90cyA9IHJlc3VsdC5kYXRhLmdhbWUuZGVmYXVsdFNsb3RzO1xuICAgICAgICAgICAgdGhpcy5zeW1ib2xCb2FyZHMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0uZGVmYXVsdFNsb3QgPSBkZWZhdWx0U2xvdHNbaW5kZXhdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsZXQgdXNlckluZm8gPSByZXN1bHQuZGF0YS51c2VyO1xuICAgICAgICAgICAgLy8qIOeUqOaIt+S/oeaBr+i1i+WAvOe7memhtumDqOagj1xuICAgICAgICAgICAgaWYgKHVzZXJJbmZvKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b3BCYXIuc2V0VXNlckNvaW5zKHVzZXJJbmZvLmNvaW5zKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvcEJhci5zZXRJbml0TGV2ZWwodXNlckluZm8ubGV2ZWwubGV2ZWwsIHVzZXJJbmZvLmxldmVsLmN1cnJlbnRWYWx1ZSwgdXNlckluZm8ubGV2ZWwudG90YWxWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnN0YXR1cyA9IFNsb3RHYW1lU3RhZ2VTdGF0dXMuUmVhZHk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5lcnJvcihg6ZSZ6K+v56CB77yaJHtyZXN1bHQuY29kZX0sIOmUmeivr+S/oeaBr++8miR7cmVzdWx0Lm1lc3NhZ2V9YCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog6K6+572u5bqV6YOo5qCPYmV05YiX6KGoXG4gICAgICogQHBhcmFtIG1heEJldFxuICAgICAqL1xuICAgIHByaXZhdGUgc2V0Qm90dG9tQmFyQmV0cyhtYXhCZXQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBsZXQgbWF4SW5kZXg6IG51bWJlciA9IHRoaXMuX2JldHMuaW5kZXhPZihtYXhCZXQpO1xuICAgICAgICAvL3RvZG8g5Y+W56a75b6X5pyA6L+R55qE5pyA5aSn5YC8XG4gICAgICAgIGlmIChtYXhJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBsZXQgYmV0czogbnVtYmVyW10gPSB0aGlzLl9iZXRzLnNsaWNlKDAsIG1heEluZGV4ICsgMSk7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUJhci5iZXRzID0gYmV0cztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vISDoi6Xml6Dms5XlnKhiZXRz5Lit5Y+W5Yiw5a+55bqUbWF4QmV055qE5LiL5qCH77yM5YiZ5Y+W5LiA5Liq56a7bWF4QmV05pyA5o6l6L+R55qEYmV055qE5LiL5qCHXG4gICAgICAgICAgICBsZXQgbmVhcmVzdEluZGV4OiBudW1iZXIgPSB0aGlzLmdldE5lYXJlc3RJbmRleChtYXhCZXQpO1xuICAgICAgICAgICAgbGV0IGJldHM6IG51bWJlcltdID0gdGhpcy5fYmV0cy5zbGljZSgwLCBuZWFyZXN0SW5kZXggKyAxKTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQmFyLmJldHMgPSBiZXRzO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPluemu21heGJldOacgOi/keeahGJldOS4i+agh1xuICAgICAqIEBwYXJhbSBtYXhCZXRcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldE5lYXJlc3RJbmRleChtYXhCZXQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGxldCBzdWJCZXQ6IG51bWJlciA9IDA7XG4gICAgICAgIGxldCBpbmRleDogbnVtYmVyID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9iZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZGV2aWF0aW9uOiBudW1iZXIgPSBNYXRoLmFicyh0aGlzLl9iZXRzW2ldIC0gbWF4QmV0KTtcbiAgICAgICAgICAgIGlmIChzdWJCZXQgPT09IDApIHtcbiAgICAgICAgICAgICAgICBzdWJCZXQgPSBkZXZpYXRpb247XG4gICAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN1YkJldCA+IGRldmlhdGlvbikge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWtkOexu+mHjei9veatpOaWueazleWOu+iOt+WPluWIneWni+WMlua4uOaIj+aVsOaNrlxuICAgICAqIEBwYXJhbSByZXN1bHRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0SW5pdEdhbWVEYXRhKHJlc3VsdDogYW55KTogdm9pZDtcbiAgICBwdWJsaWMgZ2V0U3ltYm9sU3BpbmVSZXNvdXJjZXNCeUNvZGUoc3ltYm9sQ29kZTogbnVtYmVyKTogU3ltYm9sU3BpbmVSZXNvdXJjZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN5bWJvbFNwaW5lVXJscy5maW5kKChzKSA9PiBzLmNvZGUgPT09IHN5bWJvbENvZGUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmo4Dmn6Xph5HluIHmmK/lkKbotrPlpJ9cbiAgICAgKlxuICAgICAqL1xuICAgIGNoZWNrQ29pbkVub3VnaCgpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IHVzZXJDb2luczogbnVtYmVyXG5cbiAgICAgICAgaWYgKHRoaXMudG9wQmFyKSB7XG4gICAgICAgICAgICB1c2VyQ29pbnMgPSB0aGlzLnRvcEJhci5jb2lucztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVzZXJDb2lucyA9IHRoaXMuYm90dG9tQmFyLmNvaW5zO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlzRW5vdWdoOiBib29sZWFuID0gdHJ1ZTtcbiAgICAgICAgdXNlckNvaW5zIC09IHRoaXMuYm90dG9tQmFyLmJldCAqIHRoaXMubWF4bGluZTtcbiAgICAgICAgaWYgKHVzZXJDb2lucyA8IDApIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFNsb3RHYW1lU3RhZ2VFdmVudC5TUElOX0NIRUNLX0NPSU4pO1xuICAgICAgICB9XG4gICAgICAgIHVzZXJDb2lucyA+PSAwID8gKGlzRW5vdWdoID0gdHJ1ZSkgOiAoaXNFbm91Z2ggPSBmYWxzZSk7XG4gICAgICAgIHJldHVybiBpc0Vub3VnaDtcbiAgICB9XG4gICAgLy8jcmVnaW9uIHNwaW5DbGlja1xuICAgIHNwaW5DbGljayh0aW1lcz86IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnNwaW5DbGlja0J1ZmZlciA9IG51bGw7XG4gICAgICAgIHN3aXRjaCAodGhpcy5fc3RhdHVzKSB7XG4gICAgICAgICAgICBjYXNlIFNsb3RHYW1lU3RhZ2VTdGF0dXMuUmVhZHk6XG4gICAgICAgICAgICAgICAgdGhpcy5iZWZvcmVTcGluUmVxdWVzdGluZ0ludGVybmFsKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGluUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBTbG90R2FtZVN0YWdlU3RhdHVzLkJvYXJkc1NwaW5uaW5nOlxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcFdhaXRpbmdSZXN1bHRzKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvL2Nhc2UgU2xvdEdhbWVTdGFnZVN0YXR1cy5Cb2FyZHNTdG9wcGVkOlxuICAgICAgICAgICAgY2FzZSBTbG90R2FtZVN0YWdlU3RhdHVzLkJvYXJkc1ByaXplU2hvd2luZzpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4kbmV4dEdhbWVNb2RlID09PSBTcGluUmVzdWx0c0dhbWVNb2RlLk5vcm1hbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwaW5DbGlja0J1ZmZlciA9IFNsb3RHYW1lU3RhZ2VTdGF0dXMuQm9hcmRzUHJpemVTaG93aW5nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BpbkNsaWNrQnVmZmVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFNsb3RHYW1lU3RhZ2VTdGF0dXMuV2FpdGluZ1NlcnZlclJlc3VsdHM6XG4gICAgICAgICAgICBjYXNlIFNsb3RHYW1lU3RhZ2VTdGF0dXMuUmVxdWVzdGluZ1NlcnZlcjpcbiAgICAgICAgICAgICAgICB0aGlzLnNwaW5DbGlja0J1ZmZlciA9IHRoaXMuX3N0YXR1cztcbiAgICAgICAgICAgICAgICAvLyB0b2RvIOmcgOimgeWcqOatpOWIpOaWrXdlYnNvY2tldOaYr+WQpui/nuaOpeaWreW8gOaIlui2heaXtu+8jOiLpea7oei2s+adoeS7tu+8jOWImemcgOimgeWBnOatouaji+ebmFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBTbG90R2FtZVN0YWdlU3RhdHVzLlNlcnZlclJlc3VsdHNSZWNlaXZlZDpcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BXYWl0aW5nUmVzdWx0cygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8jZW5kcmVnaW9uXG4gICAgcHJvdGVjdGVkIGNoYW5nZVN0YXR1cyhzdGF0dXM6IFNsb3RHYW1lU3RhZ2VTdGF0dXMpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiuvue9ruW6lemDqOagj+mHkeW4gVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRXaW5Db2lucygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX2hhc01hdGNoZWRMaW5lcykge1xuICAgICAgICAgICAgdGhpcy5ib3R0b21CYXIuc2V0V2luQ29pbnModGhpcy5zcGluUmVzdWx0cy53aW5Db2lucywgMSk7XG4gICAgICAgICAgICAvLyogd2lu5qGG6YeR5biB5aKe6ZW/5Yqo55S75byA5aeLMVPlkI7lho3lvIDlp4vlop7plb/nlKjmiLfph5HluIFcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50b3BCYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3BCYXIuc2V0VXNlckNvaW5zKHRoaXMuc3BpblJlc3VsdHMudXNlckNvaW5zLCAxKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbUJhci5zZXRVc2VyQ29pbnModGhpcy5zcGluUmVzdWx0cy51c2VyQ29pbnMsIDEpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSwgMS41KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDorr7nva7pobbpg6jmoI/ph5HluIFcbiAgICAgKiDljZXni6zmj5Dlh7rmnaXkvZzkuLrkuIDkuKrmlrnms5XnmoTljp/lm6DmmK/mn5DkupvmuLjmiI/vvIjlpoLvvJrnq6DpsbzvvInvvIxcbiAgICAgKiDpnIDopoHnu4/ov4fkuIDkupvliKTmlq3lho3nu5npobbpg6jph5HluIHmoI/otYvlgLzvvIzlm6DmraTljZXni6zmj5Dlh7rmnaXmlrnkvr/ph43lhpnor6Xmlrnms5VcbiAgICAgKiBAcGFyYW0gdXNlckNvaW5zXG4gICAgICovXG4gICAgcHVibGljIHNldFVzZXJDb2lucyh1c2VyQ29pbnM6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy50b3BCYXIpIHtcbiAgICAgICAgICAgIHRoaXMudG9wQmFyLmNvaW5zID0gdXNlckNvaW5zO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ib3R0b21CYXIuY29pbnMgPSB1c2VyQ29pbnM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8jcmVnaW9uIOacjeWKoeWZqOivt+axguebuOWFs+S7o+eggVxuICAgIHByaXZhdGUgYmVmb3JlU3BpblJlcXVlc3RpbmdJbnRlcm5hbCgpOiB2b2lkIHtcbiAgICAgICAgU2xvdEdhbWVTdGFnZUJhc2Uuc3BpblJlc3VsdHMgPSBudWxsO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ltYm9sQm9hcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnN5bWJvbEJvYXJkc1tpXS5yZXNldCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmVmb3JlU3BpblJlcXVlc3RpbmcoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6K+35rGC5pyN5Yqh5Zmoc3BpbuS5i+WJjeiwg+eUqO+8jOWmguaenOa4uOaIj+WFs+WNoemcgOimgeWcqOatpOS5i+WJjeWBmumAu+i+keWkhOeQhlxuICAgICAqIOWPr+mHjei9veatpOaWueazle+8jOe7k+adn+WQjuWwhua4uOaIj+WFs+WNoeeKtuaAgeabtOaUueaIkFNsb3RHYW1lU3RhZ2VTdGF0dXMuUmVxdWVzdGluZ1NlcnZlclxuICAgICAqL1xuICAgIHByb3RlY3RlZCBiZWZvcmVTcGluUmVxdWVzdGluZygpOiB2b2lkIHtcbiAgICAgICAgLy8qIOW9k+a4uOaIj+aooeW8j+S4uuaZrumAmuaooeW8j+aXtu+8jOavj+asoXNwaW7mmL7npLp3aW5Db2luc+aXtumDvemcgOimgeWFiOa4heepuuS4gOS4i1xuICAgICAgICBpZiAodGhpcy4kZ2FtZU1vZGUgPT09IFNwaW5SZXN1bHRzR2FtZU1vZGUuTm9ybWFsKSB7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUJhci5zZXRXaW5Db2lucygwLCAwKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoYW5nZVN0YXR1cyhTbG90R2FtZVN0YWdlU3RhdHVzLlJlcXVlc3RpbmdTZXJ2ZXIpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgc3BpblJlcXVlc3QoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyAhPSBTbG90R2FtZVN0YWdlU3RhdHVzLlJlcXVlc3RpbmdTZXJ2ZXIpIHtcbiAgICAgICAgICAgIC8vICYmIHRoaXMuc3RhdHVzICE9IFNsb3RHYW1lU3RhZ2VTdGF0dXMuQmVmb3JlUmVxdWVzdGluZ1NlcnZlcikge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCLlj6rmnInlnKjor7fmsYLmnI3liqHlmajnmoTnirbmgIHkuIvmiY3og73or7fmsYLmnI3liqHlmahcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8qIOavj+asoeivt+axguaVsOaNruWJje+8jOa4heepuuaOiemHkeW4geWinumVv+WKqOeUu++8jOacquaJp+ihjOWujOWinumVv+eahOmHkeW4geaVsOWAvOaUueS4uuebtOaOpei1i+WAvFxuICAgICAgICBpZiAodGhpcy50b3BCYXIpIHtcbiAgICAgICAgICAgIHRoaXMudG9wQmFyLmNhbmNlbENvaW5JbmNyZWFzZUFuaW1lKCk7XG4gICAgICAgICAgICAvLyog5Y+R6YCB6K+35rGC5YmN5pu05paw6aG26YOo5qCP6YeR5biBXG4gICAgICAgICAgICBsZXQgdXNlckNvaW5zOiBudW1iZXIgPSB0aGlzLnRvcEJhci5jb2lucztcbiAgICAgICAgICAgIHVzZXJDb2lucyAtPSB0aGlzLmJvdHRvbUJhci5iZXQgKiB0aGlzLmJvdHRvbUJhci50b3RhbExpbmVDb3VudDtcbiAgICAgICAgICAgIGlmICh1c2VyQ29pbnMgPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbWVzc2FnZS5zaG93VGlwcyhcIk9vcHMuIE5vdCBlbm91Z2ggY29pbnMgdG8gU1BJTi4uLlwiLCAyKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9IFNsb3RHYW1lU3RhZ2VTdGF0dXMuUmVhZHk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMuJG5leHRHYW1lTW9kZSAhPSBTcGluUmVzdWx0c0dhbWVNb2RlLkZyZWVTcGluICYmXG4gICAgICAgICAgICAgICAgdGhpcy4kbmV4dEdhbWVNb2RlICE9IFNwaW5SZXN1bHRzR2FtZU1vZGUuUmVzcGluICYmXG4gICAgICAgICAgICAgICAgdGhpcy4kbmV4dEdhbWVNb2RlICE9IFNwaW5SZXN1bHRzR2FtZU1vZGUuT25lTW9yZVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvcEJhci5zZXRVc2VyQ29pbnModXNlckNvaW5zLCAwKTtcbiAgICAgICAgICAgICAgICB9LCAwLjUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ib3R0b21CYXIuY2FuY2VsQ29pbkluY3JlYXNlQW5pbWUoKTtcbiAgICAgICAgICAgIC8vKiDlj5HpgIHor7fmsYLliY3mm7TmlrDpobbpg6jmoI/ph5HluIFcbiAgICAgICAgICAgIGxldCB1c2VyQ29pbnM6IG51bWJlciA9IHRoaXMuYm90dG9tQmFyLmNvaW5zO1xuICAgICAgICAgICAgdXNlckNvaW5zIC09IHRoaXMuYm90dG9tQmFyLmJldCAqIHRoaXMuYm90dG9tQmFyLnRvdGFsTGluZUNvdW50OztcbiAgICAgICAgICAgIGlmICh1c2VyQ29pbnMgPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbWVzc2FnZS5zaG93VGlwcyhcIk9vcHMuIE5vdCBlbm91Z2ggY29pbnMgdG8gU1BJTi4uLlwiLCAyKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9IFNsb3RHYW1lU3RhZ2VTdGF0dXMuUmVhZHk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMuJG5leHRHYW1lTW9kZSAhPSBTcGluUmVzdWx0c0dhbWVNb2RlLkZyZWVTcGluICYmXG4gICAgICAgICAgICAgICAgdGhpcy4kbmV4dEdhbWVNb2RlICE9IFNwaW5SZXN1bHRzR2FtZU1vZGUuUmVzcGluICYmXG4gICAgICAgICAgICAgICAgdGhpcy4kbmV4dEdhbWVNb2RlICE9IFNwaW5SZXN1bHRzR2FtZU1vZGUuT25lTW9yZVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib3R0b21CYXIuc2V0VXNlckNvaW5zKHVzZXJDb2lucywgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ltYm9sQm9hcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnN5bWJvbEJvYXJkc1tpXS5zdGFydFdhaXRpbmdSZXN1bHRzKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnNwaW5SZXF1ZXN0aW5nLCAwKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5Zyo5qyh562J5b6F5ri45oiP5YWz5Y2h54q25oCB5pu05pS55oiQU2xvdEdhbWVTdGFnZVN0YXR1cy5SZXF1ZXN0aW5nU2VydmVyXG4gICAgICog54S25ZCO5Y+R6YCB6K+35rGC5Yiw5pyN5Yqh5ZmoXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHNwaW5SZXF1ZXN0aW5nKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5zdGF0dXMgIT0gU2xvdEdhbWVTdGFnZVN0YXR1cy5SZXF1ZXN0aW5nU2VydmVyKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIuWPquacieWcqOivt+axguacjeWKoeWZqOeahOeKtuaAgeS4i+aJjeiDveivt+axguacjeWKoeWZqFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoYW5nZVN0YXR1cyhTbG90R2FtZVN0YWdlU3RhdHVzLldhaXRpbmdTZXJ2ZXJSZXN1bHRzKTtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuc3BpblJlcXVlc3RpbmcpO1xuXG4gICAgICAgIHRoaXMud2ViU29ja2V0LnJlcXVlc3QoXG4gICAgICAgICAgICB0aGlzLnNwaW5Sb3V0ZSxcbiAgICAgICAgICAgIHRoaXMuc3BpblBhcmFtcyxcbiAgICAgICAgICAgIHRoaXMub25YaWFaaHVSZXN1bHRzUmVjZWl2ZWRJbnRlcm5hbC5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgdGhpcy5vblNwaW5SZXN1bHRzRmFpbFJlY2VpdmVkLmJpbmQodGhpcylcbiAgICAgICAgKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5pS25Yiw5pyN5Yqh5Zmo6L+U5Zue57uT5p6c55qE6ZSZ6K+v5Zue6LCDXG4gICAgICovXG4gICAgcHJpdmF0ZSBvblNwaW5SZXN1bHRzRmFpbFJlY2VpdmVkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXR1cyA9IFNsb3RHYW1lU3RhZ2VTdGF0dXMuUmVhZHk7XG4gICAgICAgIC8vKiDlvZPmnI3liqHlmajplJnor6/lm57osIPml7bvvIzpmaTkuoblsIbmuLjmiI/nirbmgIHph43nva7kuLpzcGlu54q25oCB55qE5ZCM5pe277yM6L+Y6ZyA6KaB5pS55Y+Y5bqV6YOo5qCPc3BpbuaMiemSrueahOeKtuaAgVxuICAgICAgICAvLyog5Zyo6Z2eYXV0b1NwaW7nirbmgIHkuIvvvIzlsIZzcGlu5oyJ6ZKu5pS55Li6c3RvcOaMiemSrlxuICAgICAgICBpZiAoIXRoaXMuYm90dG9tQmFyLmlzQXV0b1NwaW4pIHtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQmFyLnNwaW5UeXBlID0gU3BpblR5cGUuUmVzcGluO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3ltYm9sQm9hcmRzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaXRlbS5zdGF0dXMgPSBTeW1ib2xCb2FyZFN0YXR1cy5TcGlubmluZztcbiAgICAgICAgICAgIGl0ZW0uc3RvcFdhaXRpbmdSZXN1bHRzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmlLbliLDkuIvms6jmtojmga/ov5Tlm57nu5PmnpxcbiAgICAgKiBAcGFyYW0gcmVzdWx0IOacjeWKoeWZqOi/lOWbnue7k+aenFxuICAgICAqL1xuICAgIHByaXZhdGUgb25YaWFaaHVSZXN1bHRzUmVjZWl2ZWRJbnRlcm5hbChyZXN1bHQ6IGFueSk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9uWGlhWmh1UmVzdWx0c1JlY2VpdmVkSW50ZXJuYWxcIilcbiAgICAgICAgaWYgKCFyZXN1bHQuTWVzc2FnZSkge1xuICAgICAgICAgICAgdGhpcy5zdG9wV2FpdGluZ1Jlc3VsdHMoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLkNhbGxiYWNrQ2hhbmdlRGF0YSA9IHJlc3VsdC5NZXNzYWdlXG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZU5hbWUgIT0gXCJzbG90ZnJ1aXRcIiAmJiB0aGlzLmdhbWVOYW1lICE9IFwienVlc1wiICYmIHRoaXMuZ2FtZU5hbWUgIT0gXCJzaHpcIikge1xuICAgICAgICAgICAgdGhpcy5vblNwaW5SZXN1bHRzUmVjZWl2ZWRJbnRlcm5hbChyZXN1bHQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog5pS25Yiw5pyN5Yqh5Zmo6L+U5Zue57uT5p6c55qE5Zue6LCDXG4gICAgICogQHBhcmFtIHJlc3VsdCDmnI3liqHlmajov5Tlm57nu5PmnpxcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgb25TcGluUmVzdWx0c1JlY2VpdmVkSW50ZXJuYWwocmVzdWx0OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKCFyZXN1bHQuTWVzc2FnZSB8fCAhdGhpcy5DYWxsYmFja0NoYW5nZURhdGEpIHtcbiAgICAgICAgICAgIGNjLmVycm9yKFwic3Bpbui/lOWbnue7k+aenOS4uuepulwiKTtcbiAgICAgICAgICAgIHRoaXMuc3RvcFdhaXRpbmdSZXN1bHRzKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNwaW5SZXN1bHRzID0gdGhpcy5wYXJzZVJlc3VsdChyZXN1bHQuTWVzc2FnZSk7XG4gICAgICAgIFNsb3RHYW1lU3RhZ2VCYXNlLnNwaW5SZXN1bHRzID0gc3BpblJlc3VsdHM7XG4gICAgICAgIHRoaXMuc3BpblJlc3VsdHMgPSBzcGluUmVzdWx0cztcbiAgICAgICAgdGhpcy5ub2RlLmVtaXQoU2xvdEdhbWVTdGFnZUV2ZW50LlNQSU5fUkVTVUxUU19SRUNFSVZFRCwgc3BpblJlc3VsdHMpO1xuICAgICAgICAvLyog5Y2h54mM5bGV56S6XG4gICAgICAgIGlmIChzcGluUmVzdWx0cy5jYXJkcyAmJiBzcGluUmVzdWx0cy5jYXJkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmNhcmRWaWV3U2hvdyhzcGluUmVzdWx0cy5jYXJkcyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbGV0IGxldmVsOiBTcGluUmVzdWx0c0xldmVsID0gc3BpblJlc3VsdHMubGV2ZWw7XG4gICAgICAgIC8vIGlmIChsZXZlbC51cGdyYWRlKSB7XG4gICAgICAgIC8vICAgICB0aGlzLl9oYXNVcGdyYWRlID0gdHJ1ZTtcbiAgICAgICAgLy8gICAgIHRoaXMuX2NvaW5Bd2FyZCA9IGxldmVsLnVwZ3JhZGUuYXdhcmQ7XG4gICAgICAgIC8vICAgICB0aGlzLl9pbnRlZ3JhbEF3YXJkID0gbGV2ZWwudXBncmFkZS5wb2ludHM7XG4gICAgICAgIC8vICAgICBpZiAobGV2ZWwudXBncmFkZS5tYXhCZXQpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnNldEJvdHRvbUJhckJldHMobGV2ZWwudXBncmFkZS5tYXhCZXQpO1xuICAgICAgICAvLyAgICAgICAgIC8vKiDlvZNtYXhiZXTmsqHmnInmlLnlj5jml7bvvIzpnIDopoHlsIZsZXZlbOaVsOaNruS4reeahG1heGJldOS/ruaUueS4ujDvvIzpmLLmraJVSeaYvuekum1heGJldFxuICAgICAgICAvLyAgICAgICAgIGlmIChsZXZlbC51cGdyYWRlLm1heEJldCA9PT0gdGhpcy5ib3R0b21CYXIuYmV0KSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGxldmVsLnVwZ3JhZGUubWF4QmV0ID0gMDtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICBpZiAobGV2ZWwubGV2ZWwgJSA1ID09PSAwKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5wYXVzZVN5bWJvbEJvYXJkKCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5sZXZlbFVwLmNsb3NlQ2FsbGJhY2sodGhpcy5jb250aW51ZVN5bWJvbEJvYXJkLmJpbmQodGhpcykpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vKiDlj6rmnInlnKjmma7pgJrmqKHlvI/kuIvvvIxzcGlu5pe25raI6ICXYmV077yM57uP6aqM5p2h5omN5Lya5aKe6ZW/XG4gICAgICAgIC8vIGlmIChzcGluUmVzdWx0cy5nYW1lTW9kZSA9PT0gU3BpblJlc3VsdHNHYW1lTW9kZS5Ob3JtYWwpIHtcbiAgICAgICAgLy8gICAgIC8vKiDpobbpg6jmoI/nu4/pqozmnaHlop7plb9cbiAgICAgICAgLy8gICAgIHRoaXMudG9wQmFyLnVwZGF0ZUxldmVsKFxuICAgICAgICAvLyAgICAgICAgIGxldmVsLmxldmVsLFxuICAgICAgICAvLyAgICAgICAgIGxldmVsLmN1cnJlbnRWYWx1ZSxcbiAgICAgICAgLy8gICAgICAgICBsZXZlbC50b3RhbFZhbHVlLFxuICAgICAgICAvLyAgICAgICAgIGxldmVsLnVwZ3JhZGUsXG4gICAgICAgIC8vICAgICAgICAgdGhpcy51cGRhdGVMZXZlbENhbGxiYWNrLmJpbmQodGhpcywgbGV2ZWwudXBncmFkZSlcbiAgICAgICAgLy8gICAgICk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5zcGluUmVzdWx0cy53aW5UeXBlICE9IFNwaW5SZXN1bHRzV2luVHlwZS5Ob25lICYmXG4gICAgICAgICAgICB0aGlzLnNwaW5SZXN1bHRzLndpblR5cGUgIT0gU3BpblJlc3VsdHNXaW5UeXBlLk5vcm1hbFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuaGFzQmlnV2luID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYmlnV2luU2hvd0VuZGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3BpblJlc3VsdHMuamFja3BvdExldmVsICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5oYXNKYWNrcG90ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuamFja3BvdFNob3dFbmRlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuJGdhbWVNb2RlID0gc3BpblJlc3VsdHMuZ2FtZU1vZGU7XG4gICAgICAgIHRoaXMuJG5leHRHYW1lTW9kZSA9IHNwaW5SZXN1bHRzLm5leHRHYW1lTW9kZTtcbiAgICAgICAgLy8qIOi1i+WAvOe7meW6lemDqOagj+W9k+WJjea4uOaIj+aooeW8j++8jOS+v+S6juS4jeWQjOaooeW8j+S4i3NwaW7mjInpkq7nva7ngbDnmoTmmL7npLrliKTmlq1cbiAgICAgICAgdGhpcy5ib3R0b21CYXIuY3VycmVudEdhbWVNb2RlID0gc3BpblJlc3VsdHMuZ2FtZU1vZGU7XG4gICAgICAgIHRoaXMuYm90dG9tQmFyLm5leHRHYW1lTW9kZSA9IHNwaW5SZXN1bHRzLm5leHRHYW1lTW9kZTtcbiAgICAgICAgaWYgKHNwaW5SZXN1bHRzLmZyZWVUcmlnZ2VyKSB7XG4gICAgICAgICAgICB0aGlzLiRuZXh0R2FtZU1vZGUgPSBzcGluUmVzdWx0cy5mcmVlVHJpZ2dlci5nYW1lTW9kZTtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQmFyLmZyZWVHYW1lVHJpZ2dlciA9IHNwaW5SZXN1bHRzLmZyZWVUcmlnZ2VyXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGFuZ2VCb3R0b21CYXJTcGluVHlwZSgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwaW5SZXN1bHRzLnNsb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSA+PSB0aGlzLnN5bWJvbEJvYXJkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihg5qOL55uY5pWw5LiN5aSfYCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnN5bWJvbEJvYXJkc1tpXS5zbG90UmVzdWx0cyA9IHNwaW5SZXN1bHRzLnNsb3RzW2ldO1xuICAgICAgICAgICAgaWYgKHNwaW5SZXN1bHRzLnNsb3RzW2ldLm1hdGNoZWRMaW5lcyAmJiBzcGluUmVzdWx0cy5zbG90c1tpXS5tYXRjaGVkTGluZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIHRvZG8g55uu5YmN5Y+q5pyJ5LiA5Liq5qOL55uY55qE5oOF5Ya15LiL77yM5pqC5pe25Yik5a6a5b2T5pyJ5LiA5Liq5qOL55uY5pyJ6L+e57q/77yM5YiZ6K6+572u6K+l5bGe5oCn5Li6dHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMuX2hhc01hdGNoZWRMaW5lcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgc3BpblJlc3VsdHMuZ2FtZU1vZGUgPT0gU3BpblJlc3VsdHNHYW1lTW9kZS5GcmVlU3BpbiB8fFxuICAgICAgICAgICAgc3BpblJlc3VsdHMuZ2FtZU1vZGUgPT0gU3BpblJlc3VsdHNHYW1lTW9kZS5PbmVNb3JlXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5ib3R0b21CYXIuY2hhbmdlRnJlZVNwaW5Db3VudChzcGluUmVzdWx0cy5maW5pc2hlZENvdW50LCBzcGluUmVzdWx0cy50b3RhbENvdW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdHVzKFNsb3RHYW1lU3RhZ2VTdGF0dXMuU2VydmVyUmVzdWx0c1JlY2VpdmVkKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog57uP6aqM5p2h5aKe6ZW/5a6M5ZCO5Zue6LCDXG4gICAgICogQHBhcmFtIHVwZ3JhZGVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgdXBkYXRlTGV2ZWxDYWxsYmFjayh1cGdyYWRlOiBTcGluUmVzdWx0c1VwZ3JhZGUpOiB2b2lkIHtcbiAgICAgICAgaWYgKHVwZ3JhZGUpIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWxVcC51cGdyYWRlKHVwZ3JhZGUsIHRoaXMuYXdhcmRJbmNyZWFzZUNhbGxiYWNrLmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWNh+e6p+WlluWKseaVsOWtl+WinuWKoOWbnuiwg1xuICAgICAqIEBwYXJhbSByZXdhcmRDb2luc1xuICAgICAqIEBwYXJhbSByZXdhcmRJbnRlZ3JhbFxuICAgICAqL1xuICAgIHByaXZhdGUgYXdhcmRJbmNyZWFzZUNhbGxiYWNrKHJld2FyZENvaW5zOiBudW1iZXIsIHJld2FyZEludGVncmFsOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgbGV0IGNvaW5Bd2FyZDogbnVtYmVyID0gdGhpcy50b3BCYXIuY29pbnMgKyByZXdhcmRDb2lucztcbiAgICAgICAgLy8gdG9kbyDmmoLml7bov5nmoLflpITnkIZcbiAgICAgICAgaWYgKHRoaXMuc3BpblJlc3VsdHMuc2xvdHNbMF0ubWF0Y2hlZExpbmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvaW5Bd2FyZCA9IHRoaXMuc3BpblJlc3VsdHMudXNlckNvaW5zO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpbnRlZ3JhbEF3YXJkOiBudW1iZXIgPSB0aGlzLnRvcEJhci5pbnRlZ3JhbCArIHJld2FyZEludGVncmFsO1xuICAgICAgICB0aGlzLnRvcEJhci5zZXRVc2VyQ29pbnMoY29pbkF3YXJkLCAxKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50b3BCYXIuc2V0VXNlckludGVncmFsKGludGVncmFsQXdhcmQsIDEpO1xuICAgICAgICB9LCAwLjYpO1xuICAgICAgICB0aGlzLl9oYXNVcGdyYWRlID0gZmFsc2U7XG4gICAgfVxuICAgIHByaXZhdGUgY2hhbmdlQm90dG9tQmFyU3BpblR5cGUoKTogdm9pZCB7XG4gICAgICAgIHN3aXRjaCAodGhpcy4kZ2FtZU1vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgU3BpblJlc3VsdHNHYW1lTW9kZS5GcmVlU3BpbjpcbiAgICAgICAgICAgIGNhc2UgU3BpblJlc3VsdHNHYW1lTW9kZS5PbmVNb3JlOlxuICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQmFyLnNwaW5UeXBlID0gU3BpblR5cGUuRnJlZVNwaW47XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFNwaW5SZXN1bHRzR2FtZU1vZGUuUmVzcGluOlxuICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQmFyLnNwaW5UeXBlID0gU3BpblR5cGUuUmVzcGluO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib3R0b21CYXIuc3BpblR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3R0b21CYXIuc3BpblR5cGUgPSBTcGluVHlwZS5BdXRvU3BpbjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbUJhci5zcGluVHlwZSA9IFNwaW5UeXBlLlNwaW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vdG9kbyDlpoLmnpzmmK/lnKjoh6rliqjmqKHlvI/kuIvorr7nva7miJBTcGluVHlwZS5BdXRvU3BpblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm90dG9tQmFyLm5leHRHYW1lTW9kZSA9IHRoaXMuc3BpblJlc3VsdHMubmV4dEdhbWVNb2RlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDpu5jorqTlpITnkIbnu5PmnpznmoTmlrnms5XvvIxcbiAgICAgKiDlpoLmnpzmuLjmiI/mnInpop3lpJbnmoTmlbDmja7pnIDopoHlpITnkIbvvIzliJnlj6/ku6Xph43ovb3mraTmlrnms5VcbiAgICAgKiDnhLblkI7ov5Tlm57mnIDnu4jnmoTlpITnkIbnu5PmnpxcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXN1bHQg5pyN5Yqh5Zmo6L+U5Zue55qE57uT5p6cXG4gICAgICogQHJldHVybnMgc3BpblJlc3VsdHNcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgcGFyc2VSZXN1bHQocmVzdWx0OiBhbnkpOiBTcGluUmVzdWx0cyB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFyc2VSZXN1bHRcIilcbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHJlc3VsdCk7XG4gICAgICAgIGxldCBkYXRhMiA9IEpTT04ucGFyc2UodGhpcy5DYWxsYmFja0NoYW5nZURhdGEpO1xuXG4gICAgICAgIGRhdGEuc2xvdHMgPSBbXTtcbiAgICAgICAgZGF0YS5zbG90c1swXSA9IHt9XG4gICAgICAgIGRhdGEuc2xvdHNbMF0uY29sdW1ucyA9IFtdXG4gICAgICAgIGRhdGEuc2xvdHNbMF0uZXZlbnRzID0gW11cbiAgICAgICAgZGF0YS5zbG90c1swXS5tYXRjaGVkTGluZXMgPSBbXVxuICAgICAgICBpZiAoZGF0YS5qb2NrICYmIGRhdGEuam9jay5qb2NrUG90U2NvcmUpIHtcbiAgICAgICAgICAgIGRhdGEuamFja3BvdHMgPSBkYXRhLmpvY2suam9ja1BvdFNjb3JlO1xuICAgICAgICAgICAgZGF0YS5qYWNrcG90ID0gZGF0YS5qb2NrLmxXaW5TY29yZTtcbiAgICAgICAgICAgIGRhdGEuamFja3BvdExldmVsID0gZGF0YS5qb2NrLmxldjtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0YS5qYWNrcG90cyA9IFs1MDAsIDIwMDAsIDYwMDAwMDBdO1xuICAgICAgICAgICAgZGF0YS5qYWNrcG90ID0gMDtcbiAgICAgICAgICAgIGRhdGEuamFja3BvdExldmVsID0gLTE7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhLndpblR5cGUgPSBkYXRhLndpblR5cGUgfHwgMDtcbiAgICAgICAgZGF0YS53aW5Db2lucyA9IGRhdGEuZ29sZDtcbiAgICAgICAgZGF0YS51c2VyQ29pbnMgPSBkYXRhLnVzZXJtb25leSB8fCBkYXRhLnVzZXJnb2xkO1xuICAgICAgICBkYXRhLnByZXZpb3VzR2FtZU1vZGU7XG4gICAgICAgIGRhdGEuZ2FtZU1vZGUgPSAwO1xuICAgICAgICBkYXRhLm5leHRHYW1lTW9kZSA9IDA7XG4gICAgICAgIGRhdGEuZmluaXNoZWRDb3VudCA9IGRhdGEuVG90YWxGcmVlIC0gZGF0YS5vcGVuZnJlZTtcbiAgICAgICAgZGF0YS50b3RhbENvdW50ID0gZGF0YS5Ub3RhbEZyZWU7XG4gICAgICAgIGRhdGEudGltZXN0YW1wID0gMDtcbiAgICAgICAgZGF0YS50b3RhbEJldE51bSA9IDA7XG4gICAgICAgIGRhdGEuaGlnaFNjb3JlID0gMDtcbiAgICAgICAgZGF0YS5iaWdXaW5Db2lucyA9IGRhdGEuZ29sZDtcbiAgICAgICAgZGF0YS5iaWdXaW5BZEF3YXJkcyA9IHsgYXdhcmRJZDogXCJcIiwgcG9pbnRzOiAwLCBjb2luczogMCwgY291bnRkb3duOiA0IH07XG4gICAgICAgIGRhdGEuY2FyZHMgPSBbXTtcbiAgICAgICAgZGF0YS5mcmVlV2luR29sZCA9IGRhdGEuRnJlZVdpbkdvbGQ7XG5cbiAgICAgICAgaWYgKGRhdGEudG90YWxDb3VudCA+IDAgJiYgZGF0YS5maW5pc2hlZENvdW50ID4gMCkge1xuICAgICAgICAgICAgZGF0YS53aW5Db2lucyA9IGRhdGEuRnJlZVdpbkdvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICAvL+aji+ebmOaVsOaNrui9rOaNolxuXG4gICAgICAgIGlmIChkYXRhMi5fdHVybnRhYmxlWzBdICYmIGRhdGEyLl90dXJudGFibGVbMF0ub25lbGluZSkge1xuICAgICAgICAgICAgbGV0IHJvdyA9IGRhdGEyLl90dXJudGFibGUubGVuZ3RoXG4gICAgICAgICAgICBsZXQgY291bSA9IGRhdGEyLl90dXJudGFibGVbMF0ub25lbGluZS5sZW5ndGhcblxuICAgICAgICAgICAgZm9yICh2YXIgYSA9IDAsIGIgPSBjb3VtOyBhIDwgYjsgYSsrKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5zbG90c1swXS5jb2x1bW5zW2FdID0ge31cbiAgICAgICAgICAgICAgICBkYXRhLnNsb3RzWzBdLmNvbHVtbnNbYV0uY2VsbHMgPSBbXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IGNvdW07IF9pIDwgX2E7IF9pKyspIHtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGEgPSAwLCBiID0gcm93OyBhIDwgYjsgYSsrKSB7XG5cblxuICAgICAgICAgICAgICAgICAgICBkYXRhLnNsb3RzWzBdLmNvbHVtbnNbX2ldLmNlbGxzW2FdID0geyBjb2RlOiBkYXRhMi5fdHVybnRhYmxlW2FdLm9uZWxpbmVbX2ldIC0gMSwgZml4ZWQ6IGZhbHNlLCBtb2NrQ29kZXM6IFtdIH1cbiAgICAgICAgICAgICAgICAgICAgZGF0YS5zbG90c1swXS5jb2x1bW5zW19pXS5jZWxsc1thXS5ldmVudHMgPSBbXVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5KYWNrUG90Q29kZSA9PSBkYXRhMi5fdHVybnRhYmxlW2FdLm9uZWxpbmVbX2ldIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5zbG90c1swXS5jb2x1bW5zW19pXS5jZWxsc1thXS5ldmVudHMucHVzaCh7IGNvZGU6IFNwaW5SZXN1bHRzRXZlbnRDb2RlLkJvbnVzLCB2YWx1ZTogU3BpblJlc3VsdHNFdmVudENvZGUuQm9udXMgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWVOYW1lID09IFwibmluamFWU3NhbXVyYWlcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEyLl90dXJudGFibGVbYV0ub25lbGluZVtfaV0gLSAxID49IHRoaXMuU2NhdHRlckNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnNsb3RzWzBdLmNvbHVtbnNbX2ldLmNlbGxzW2FdLmV2ZW50cy5wdXNoKHsgY29kZTogU3BpblJlc3VsdHNFdmVudENvZGUuRnJlZSwgdmFsdWU6IFNwaW5SZXN1bHRzRXZlbnRDb2RlLkZyZWUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLlNjYXR0ZXJDb2RlID09IGRhdGEyLl90dXJudGFibGVbYV0ub25lbGluZVtfaV0gLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5zbG90c1swXS5jb2x1bW5zW19pXS5jZWxsc1thXS5ldmVudHMucHVzaCh7IGNvZGU6IFNwaW5SZXN1bHRzRXZlbnRDb2RlLkZyZWUsIHZhbHVlOiBTcGluUmVzdWx0c0V2ZW50Q29kZS5GcmVlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIC8v5Lit5aWW6L+e57q/5pWw5o2u6L2s5o2iXG4gICAgICAgIGlmIChkYXRhLmhpdGxpbmUgJiYgZGF0YS5oaXRsaW5lLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBjb3VudCA9IGRhdGEuaGl0bGluZS5sZW5ndGhcbiAgICAgICAgICAgIGZvciAodmFyIGEgPSAwLCBiID0gY291bnQ7IGEgPCBiOyBhKyspIHtcbiAgICAgICAgICAgICAgICBkYXRhLnNsb3RzWzBdLm1hdGNoZWRMaW5lc1thXSA9IFtdXG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gZGF0YS5oaXRsaW5lW2FdLmhpdGNvdW50OyBfaSA8IF9hOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGRhdGEuaGl0bGluZVthXS5oaXRbX2ldXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5Cb2FyZEluZGV4W3ZhbHVlLnggLSAxXVt2YWx1ZS55IC0gMV1cbiAgICAgICAgICAgICAgICAgICAgZGF0YS5zbG90c1swXS5tYXRjaGVkTGluZXNbYV1bX2ldID0gdmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy/mo4vnm5jlj5jljJbmlbDmja5cbiAgICAgICAgaWYgKGRhdGEyLmNoYW5nZWluZm9zKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBhID0gMCwgYiA9IGRhdGEyLmNoYW5nZWluZm9zLmxlbmd0aDsgYSA8IGI7IGErKykge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLnNsb3RzWzBdLmNvbHVtbnNbZGF0YTIuY2hhbmdlaW5mb3NbYV0udGNvbF0uY2VsbHNbZGF0YTIuY2hhbmdlaW5mb3NbYV0udHJvd10uZXZlbnRzKSB7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnNsb3RzWzBdLmNvbHVtbnNbZGF0YTIuY2hhbmdlaW5mb3NbYV0udGNvbF0uY2VsbHNbZGF0YTIuY2hhbmdlaW5mb3NbYV0udHJvd10uZXZlbnRzID0gW11cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkYXRhLnNsb3RzWzBdLmNvbHVtbnNbZGF0YTIuY2hhbmdlaW5mb3NbYV0udGNvbF0uY2VsbHNbZGF0YTIuY2hhbmdlaW5mb3NbYV0udHJvd10uZXZlbnRzLnB1c2goeyBjb2RlOiBkYXRhMi5jaGFuZ2VpbmZvc1thXS50Y2FyZCAtIDEsIHZhbHVlOiBkYXRhMi5jaGFuZ2VpbmZvc1thXS50Y2FyZCAtIDEgfSlcblxuICAgICAgICAgICAgICAgIGRhdGEuc2xvdHNbMF0uY29sdW1uc1tkYXRhMi5jaGFuZ2VpbmZvc1thXS5jb2xdLmNlbGxzW2RhdGEyLmNoYW5nZWluZm9zW2FdLnJvd10ubW9ja0NvZGVzLnB1c2goZGF0YTIuY2hhbmdlaW5mb3NbYV0uYmVmb3JjYXJkIC0gMSlcbiAgICAgICAgICAgICAgICBkYXRhLnNsb3RzWzBdLmNvbHVtbnNbZGF0YTIuY2hhbmdlaW5mb3NbYV0uY29sXS5jZWxsc1tkYXRhMi5jaGFuZ2VpbmZvc1thXS5yb3ddLmNvZGUgPSBkYXRhMi5jaGFuZ2VpbmZvc1thXS5jYXJkIC0gMVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZU5hbWUgPT0gXCJ6dWVzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEudG90YWxDb3VudCA+IDAgJiYgZGF0YS5maW5pc2hlZENvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEyLmNoYW5nZWluZm9zW2FdLmJlZm9yY2FyZCAtIDEgPT0gNikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuc2xvdHNbMF0uY29sdW1uc1tkYXRhMi5jaGFuZ2VpbmZvc1thXS50Y29sXS5jZWxsc1tkYXRhMi5jaGFuZ2VpbmZvc1thXS50cm93XS5ldmVudHMucHVzaCh7IGNvZGU6IDYwMDEsIHZhbHVlOiA2MDAxIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhMi5jaGFuZ2VpbmZvc1thXS5iZWZvcmNhcmQgLSAxID09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnNsb3RzWzBdLmNvbHVtbnNbZGF0YTIuY2hhbmdlaW5mb3NbYV0udGNvbF0uY2VsbHNbZGF0YTIuY2hhbmdlaW5mb3NbYV0udHJvd10uZXZlbnRzLnB1c2goeyBjb2RlOiA1MDAxLCB2YWx1ZTogNTAwMSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGEuYmlzb25zKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBhID0gMCwgYiA9IGRhdGEuYmlzb25zLmxlbmd0aDsgYSA8IGI7IGErKykge1xuXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlX2Nob25nID0gLTFcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwLCB5ID0gZGF0YS5iaXNvbnNbYV0uY2hhbmdlcy5sZW5ndGg7IHggPCB5OyB4KyspIHtcblxuICAgICAgICAgICAgICAgICAgICBkYXRhLnNsb3RzWzBdLmNvbHVtbnNbZGF0YS5iaXNvbnNbYV0uY2hhbmdlc1t4XS5jb2xdLmNlbGxzW2RhdGEuYmlzb25zW2FdLmNoYW5nZXNbeF0ucm93XS5tb2NrQ29kZXMucHVzaChkYXRhLmJpc29uc1thXS5jaGFuZ2VzW3hdLmJlZm9yIC0gMSlcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5zbG90c1swXS5jb2x1bW5zW2RhdGEuYmlzb25zW2FdLmNoYW5nZXNbeF0uY29sXS5jZWxsc1tkYXRhLmJpc29uc1thXS5jaGFuZ2VzW3hdLnJvd10uY29kZSA9IGRhdGEuYmlzb25zW2FdLmNoYW5nZXNbeF0uY2FyZCAtIDFcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5iaXNvbnNbYV0uaXN2ZXJ0aWNhbCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVfY2hvbmcgPSBkYXRhLmJpc29uc1thXS5jaGFuZ2VzW3hdLmNvbFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEuYmlzb25zW2FdLm9yaWdpbikgeyAvL+aZrumAmuWGsuWIulxuICAgICAgICAgICAgICAgICAgICBkYXRhLnNsb3RzWzBdLmV2ZW50cy5wdXNoKHsgY29kZTogMSwgdmFsdWU6IHZhbHVlX2Nob25nIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLmJpc29uc1thXS5vcmlnaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5zbG90c1swXS5jb2x1bW5zW2RhdGEuYmlzb25zW2FdLm9yaWdpbi5jb2xdLmNlbGxzW2RhdGEuYmlzb25zW2FdLm9yaWdpbi5yb3ddLmV2ZW50cy5wdXNoKHsgY29kZTogYSwgdmFsdWU6IHZhbHVlX2Nob25nIH0pXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YS5uaW5qaWFtb2RsZSAmJiBkYXRhLm5pbmppYW1vZGxlID4gMCkge1xuICAgICAgICAgICAgZGF0YS5zbG90c1swXS5ldmVudHMucHVzaCh7IGNvZGU6IDIsIHZhbHVlOiBkYXRhLm5pbmppYW1vZGxlIH0pXG4gICAgICAgIH1cblxuICAgICAgICAvL+WGsOeQg1xuICAgICAgICBpZiAoZGF0YS5jbGVhbnMpIHtcbiAgICAgICAgICAgIGRhdGEuc2xvdHNbMF0uZXZlbnRzID0gW11cbiAgICAgICAgICAgIGxldCBjbGVhbnMgPSBkYXRhLmNsZWFucztcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbGVhbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVfY2hvbmcgPSAtMVxuICAgICAgICAgICAgICAgIGxldCBiZWZvcnQgPSBjbGVhbnNbaV0uYmVmb3J0XG4gICAgICAgICAgICAgICAgbGV0IGFmdGVydCA9IGNsZWFuc1tpXS5hZnRlcnRcbiAgICAgICAgICAgICAgICBsZXQgb25lbGluZU51bSA9IGFmdGVydFswXS5vbmVsaW5lLmxlbmd0aFxuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBvbmVsaW5lTnVtOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBhZnRlcnQubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuc2xvdHNbMF0uY29sdW1uc1tqXS5jZWxsc1trXS5tb2NrQ29kZXMucHVzaChiZWZvcnRba10ub25lbGluZVtqXSAtIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5zbG90c1swXS5jb2x1bW5zW2pdLmNlbGxzW2tdLmNvZGUgPSBhZnRlcnRba10ub25lbGluZVtqXSAtIDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL+iOt+WPluiOt+Wlluaji+WtkFxuICAgICAgICAgICAgICAgIGxldCBwcml6ZXMgPSBjbGVhbnNbaV0uY2xlYW5zXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBwcml6ZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvaW50cyA9IHByaXplc1tqXS5wb2ludHNcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBwb2ludHMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnNsb3RzWzBdLmNvbHVtbnNbcG9pbnRzW2tdLmNvbF0uY2VsbHNbcG9pbnRzW2tdLnJvd10uZXZlbnRzKSB7IH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5zbG90c1swXS5jb2x1bW5zW3BvaW50c1trXS5jb2xdLmNlbGxzW3BvaW50c1trXS5yb3ddLmV2ZW50cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5zbG90c1swXS5jb2x1bW5zW3BvaW50c1trXS5jb2xdLmNlbGxzW3BvaW50c1trXS5yb3ddLmV2ZW50cy5wdXNoKHsgY29kZTogMTUyMCwgdmFsdWU6IGkgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5DYWxsYmFja0NoYW5nZURhdGEgPSBudWxsXG5cblxuICAgICAgICBsZXQgd2hlZWxzID0gW11cbiAgICAgICAgaWYgKGRhdGEuc3BlY2lhbENhcmQpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGEgPSAwLCBiID0gZGF0YS5zcGVjaWFsQ2FyZC5sZW5ndGg7IGEgPCBiOyBhKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IG5ldyBTcGluUmVzdWx0c1doZWVsSXRlbShkYXRhLnNwZWNpYWxDYXJkW2FdLkl0ZW1JRCwgZGF0YS5zcGVjaWFsQ2FyZFthXS5JdGVtVmFsdWUpXG4gICAgICAgICAgICAgICAgd2hlZWxzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkc2QgPSBbXVxuICAgICAgICBkc2QucHVzaChuZXcgU3BpblJlc3VsdHNXaGVlbCh3aGVlbHMpKVxuICAgICAgICAvL+WFjei0ueasoeaVsFxuICAgICAgICBpZiAoZGF0YS5vcGVuZnJlZSA+IDAgJiYgZGF0YS5maW5pc2hlZENvdW50ID09IDAgfHwgZGF0YS5pc3N0YXJ0ZnJlZSkge1xuICAgICAgICAgICAgZGF0YS5mcmVlVHJpZ2dlciA9IG5ldyBTcGluUmVzdWx0c0ZyZWVUcmlnZ2VyKFxuICAgICAgICAgICAgICAgIFNwaW5SZXN1bHRzR2FtZU1vZGUuRnJlZVNwaW4sXG4gICAgICAgICAgICAgICAgZGF0YS5maW5pc2hlZENvdW50LFxuICAgICAgICAgICAgICAgIGRhdGEudG90YWxDb3VudCxcbiAgICAgICAgICAgICAgICBkc2QsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZGF0YS5uZXh0R2FtZU1vZGUgPSBTcGluUmVzdWx0c0dhbWVNb2RlLkZyZWVTcGluO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5vcGVubWFycnkgPiAwICYmIGRhdGEuZmluaXNoZWRDb3VudCA9PSAwKSB7XG4gICAgICAgICAgICBkYXRhLmZyZWVUcmlnZ2VyID0gbmV3IFNwaW5SZXN1bHRzRnJlZVRyaWdnZXIoXG4gICAgICAgICAgICAgICAgU3BpblJlc3VsdHNHYW1lTW9kZS5Cb251cyxcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIGRhdGEub3Blbm1hcnJ5LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGRhdGEubmV4dEdhbWVNb2RlID0gU3BpblJlc3VsdHNHYW1lTW9kZS5Cb251cztcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKGRhdGEudG90YWxDb3VudCA+IDAgJiYgZGF0YS5maW5pc2hlZENvdW50ID4gMCkge1xuICAgICAgICAgICAgZGF0YS5nYW1lTW9kZSA9IFNwaW5SZXN1bHRzR2FtZU1vZGUuRnJlZVNwaW5cbiAgICAgICAgICAgIGRhdGEubmV4dEdhbWVNb2RlID0gU3BpblJlc3VsdHNHYW1lTW9kZS5GcmVlU3BpblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGEuZmluaXNoZWRDb3VudCA9PSBkYXRhLnRvdGFsQ291bnQgJiYgZGF0YS50b3RhbENvdW50ICE9IDAgJiYgZGF0YS5maW5pc2hlZENvdW50ICE9IDApIHtcbiAgICAgICAgICAgIGRhdGEubmV4dEdhbWVNb2RlID0gU3BpblJlc3VsdHNHYW1lTW9kZS5Ob3JtYWxcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhLnRvdGFsQ291bnQgPT0gMCAmJiBkYXRhLm9wZW5mcmVlID09IDAgJiYgdGhpcy5ib3R0b21CYXIubmV4dEdhbWVNb2RlID09IDEpIHtcbiAgICAgICAgICAgIGRhdGEudG90YWxDb3VudCA9IHRoaXMuYm90dG9tQmFyLmZyZWVHYW1lVHJpZ2dlci50b3RhbFxuICAgICAgICAgICAgZGF0YS5maW5pc2hlZENvdW50ID0gZGF0YS50b3RhbENvdW50XG4gICAgICAgICAgICBkYXRhLndpbkNvaW5zID0gZGF0YS5GcmVlV2luR29sZFxuICAgICAgICAgICAgZGF0YS5nYW1lTW9kZSA9IFNwaW5SZXN1bHRzR2FtZU1vZGUuRnJlZVNwaW5cbiAgICAgICAgICAgIGRhdGEubmV4dEdhbWVNb2RlID0gU3BpblJlc3VsdHNHYW1lTW9kZS5Ob3JtYWxcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5oC75qyh5pWw77yaXCIgKyBkYXRhLnRvdGFsQ291bnQgKyBcIizlhY3otLnvvJpcIiArIGRhdGEub3BlbmZyZWUgKyBcIiznjpvkuL3vvJpcIiArIGRhdGEub3Blbm1hcnJ5KTtcblxuICAgICAgICBsZXQgc3BpblJlc3VsdCA9IHBsYWluVG9DbGFzcyhTcGluUmVzdWx0cywgZGF0YSk7XG5cbiAgICAgICAgcmV0dXJuIHNwaW5SZXN1bHQ7XG4gICAgfVxuICAgIC8vI2VuZHJlZ2lvblxuICAgIHByb3RlY3RlZCBzdG9wV2FpdGluZ1Jlc3VsdHMoKTogdm9pZCB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zeW1ib2xCb2FyZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuc3ltYm9sQm9hcmRzW2ldLnN0b3BXYWl0aW5nUmVzdWx0cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmFzdHMgc2xvdCBnYW1lXG4gICAgICovXG4gICAgcHJpdmF0ZSBmYXN0KCk6IHZvaWQge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ltYm9sQm9hcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnN5bWJvbEJvYXJkc1tpXS5pc0Zhc3QgPSB0aGlzLmJvdHRvbUJhci5pc0Zhc3Q7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8jcmVnaW9uXG4gICAgcHJvdGVjdGVkIGJlZm9yZVJlcGxhY2luZ01vY2tTeW1ib2xzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNoYW5nZVN0YXR1cyhTbG90R2FtZVN0YWdlU3RhdHVzLkJvYXJkc1JlcGxhY2luZyk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBiZWZvcmVTdGFydFByaXplU2hvdygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0dXMoU2xvdEdhbWVTdGFnZVN0YXR1cy5Cb2FyZHNQcml6ZVNob3dpbmcpO1xuICAgIH1cbiAgICAvLyNlbmRyZWdpb25cblxuICAgIC8qKlxuICAgICAqIENoZXNzYm9hcmRzIHJlc3VsdHMgc2V0XG4gICAgICogQHBhcmFtIGNoZXNzYm9hcmRJbmRleFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBjaGVzc2JvYXJkUmVzdWx0c1NldChjaGVzc2JvYXJkSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmNoYW5nZVN0YXR1cyhTbG90R2FtZVN0YWdlU3RhdHVzLkJvYXJkc1ByaXplU2hvd2luZyk7XG4gICAgfVxuICAgIC8vI3JlZ2lvbiDkuovku7bnm5HlkKxcbiAgICBvblN0YXR1c0NoYW5nZWQobGlzdGVuZXI6IEZ1bmN0aW9uLCB0YXJnZXQ/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKFNsb3RHYW1lU3RhZ2VFdmVudC5TVEFUVVNfQ0hBTkdFRCwgbGlzdGVuZXIsIHRhcmdldCk7XG4gICAgfVxuICAgIGNsZWFyU3RhdHVzQ2hhbmdlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLm9mZihTbG90R2FtZVN0YWdlRXZlbnQuU1RBVFVTX0NIQU5HRUQpO1xuICAgIH1cbiAgICBvZmZTdGF0dXNDaGFuZ2VkKGxpc3RlbmVyPzogRnVuY3Rpb24sIHRhcmdldD86IGFueSkge1xuICAgICAgICB0aGlzLm5vZGUub2ZmKFNsb3RHYW1lU3RhZ2VFdmVudC5TVEFUVVNfQ0hBTkdFRCwgbGlzdGVuZXIsIHRhcmdldCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOajgOafpemHkeW4geaYr+WQpui2s+Wkn+S6i+S7tlxuICAgICAqL1xuICAgIG9uU3BpbkNoZWNrQ29pbihsaXN0ZW5lcjogRnVuY3Rpb24sIHRhcmdldD86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUub24oU2xvdEdhbWVTdGFnZUV2ZW50LlNQSU5fQ0hFQ0tfQ09JTiwgbGlzdGVuZXIsIHRhcmdldCk7XG4gICAgfVxuICAgIG9mZlNwaW5DaGVja0NvaW4obGlzdGVuZXI6IEZ1bmN0aW9uLCB0YXJnZXQ/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLm9mZihTbG90R2FtZVN0YWdlRXZlbnQuU1BJTl9DSEVDS19DT0lOLCBsaXN0ZW5lciwgdGFyZ2V0KTtcbiAgICB9XG4gICAgY2xlYXJTcGluQ2hlY2tDb2luKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUub2ZmKFNsb3RHYW1lU3RhZ2VFdmVudC5TUElOX0NIRUNLX0NPSU4pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgc3BpbiByZXN1bHRzIHJlY2VpdmVkIG9uXG4gICAgICogQHBhcmFtIGxpc3RlbmVyXG4gICAgICogQHBhcmFtIFt0YXJnZXRdXG4gICAgICovXG4gICAgb25TcGluUmVzdWx0c1JlY2VpdmVkKGxpc3RlbmVyOiBGdW5jdGlvbiwgdGFyZ2V0PzogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5vbihTbG90R2FtZVN0YWdlRXZlbnQuU1BJTl9SRVNVTFRTX1JFQ0VJVkVELCBsaXN0ZW5lciwgdGFyZ2V0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPZmZzIHNwaW4gcmVzdWx0cyByZWNlaXZlZFxuICAgICAqIEBwYXJhbSBsaXN0ZW5lclxuICAgICAqIEBwYXJhbSBbdGFyZ2V0XVxuICAgICAqL1xuICAgIG9mZlNwaW5SZXN1bHRzUmVjZWl2ZWQobGlzdGVuZXI6IEZ1bmN0aW9uLCB0YXJnZXQ/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLm9mZihTbG90R2FtZVN0YWdlRXZlbnQuU1BJTl9SRVNVTFRTX1JFQ0VJVkVELCBsaXN0ZW5lciwgdGFyZ2V0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2xlYXJzIHNwaW4gcmVzdWx0cyByZWNlaXZlZFxuICAgICAqL1xuICAgIGNsZWFyU3BpblJlc3VsdHNSZWNlaXZlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLm9mZihTbG90R2FtZVN0YWdlRXZlbnQuU1BJTl9SRVNVTFRTX1JFQ0VJVkVEKTtcbiAgICB9XG5cbiAgICAvLyNlbmRyZWdpb24g5LqL5Lu255uR5ZCsXG4gICAgcHJvdGVjdGVkIGdldEJvYXJkKGJvYXJkSW5kZXg6IG51bWJlcik6IFN5bWJvbEJvYXJkQmFzZSB7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gdGhpcy5zeW1ib2xCb2FyZHNbYm9hcmRJbmRleF07XG4gICAgICAgIGlmICghYm9hcmQpIHtcbiAgICAgICAgICAgIGNjLmVycm9yKGDmo4vnm5jntKLlvJUke2JvYXJkSW5kZXh96LaF55WMYCk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjaGVja0FsbFN5bWJvbEJvYXJkU3RvcHBlZCgpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IHN0b3BwZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ltYm9sQm9hcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBib2FyZCA9IHRoaXMuc3ltYm9sQm9hcmRzW2ldO1xuICAgICAgICAgICAgaWYgKGJvYXJkLnN0YXR1cyA9PSBTeW1ib2xCb2FyZFN0YXR1cy5SZWFkeSB8fCBib2FyZC5zdGF0dXMgPT0gU3ltYm9sQm9hcmRTdGF0dXMuU3Bpbm5pbmcpIHtcbiAgICAgICAgICAgICAgICBzdG9wcGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0b3BwZWQ7XG4gICAgfVxuICAgIHByaXZhdGUgY2FuQmVOZXh0U3RhdHVzKCk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgY2FuQmVOZXh0U3RhdHVzOiBib29sZWFuID0gdHJ1ZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN5bWJvbEJvYXJkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY2FuQmVOZXh0U3RhdHVzID0gdGhpcy5zeW1ib2xCb2FyZHNbaV0uY2FuQmVOZXh0U3RhdHVzKHRoaXMuc3RhdHVzKTtcbiAgICAgICAgICAgIGlmICghY2FuQmVOZXh0U3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbkJlTmV4dFN0YXR1cztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVjZWl2ZXMgcHJpemUgc2hvdyBjb21wbGV0ZWRcbiAgICAgKiBAcGFyYW0gYm9hcmRJbmRleFxuICAgICAqL1xuICAgIHJlY2VpdmVQcml6ZVNob3dDb21wbGV0ZWQoYm9hcmRJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNhbkJlTmV4dFN0YXR1cyA9IHRoaXMuY2FuQmVOZXh0U3RhdHVzKCk7XG4gICAgICAgIGlmICghY2FuQmVOZXh0U3RhdHVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNCaWdXaW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJpZ1dpblNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmhhc0phY2twb3QgJiYgIXRoaXMuamFja3BvdFNob3dFbmRlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuamFja3BvdFNob3coU2xvdEdhbWVTdGFnZUJhc2Uuc3BpblJlc3VsdHMuamFja3BvdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuaGFzQmlnV2luICYmICF0aGlzLmhhc0phY2twb3QpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zcGluUmVzdWx0cy5mcmVlVHJpZ2dlcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJlZm9yZUVudGVyRnJlZU1vZGUodGhpcy5zcGluUmVzdWx0cy5mcmVlVHJpZ2dlcik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGluUmVzdWx0cy5maW5pc2hlZENvdW50ID09IHRoaXMuc3BpblJlc3VsdHMudG90YWxDb3VudCAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwaW5SZXN1bHRzLmdhbWVNb2RlICE9IFNwaW5SZXN1bHRzR2FtZU1vZGUuTm9ybWFsXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZnJlZU1vZGVGaW5pc2hlZCh0aGlzLnNwaW5SZXN1bHRzLndpbkNvaW5zLCB0aGlzLnNwaW5SZXN1bHRzLnRvdGFsQ291bnQpO1xuICAgICAgICAgICAgICAgICAgICAvLyog54m55q6K5qih5byP57uT5p2f5pe277yM5YWI5bCGc3BpbuaMiemSruexu+Wei+aUueS4uuaZrumAmnNwaW7nirbmgIFcbiAgICAgICAgICAgICAgICAgICAgLy8qIOmYsuatouatpOaXtnNwaW7mjInpkq7nmoTnsbvlnovov5jkuLpmcmVlU3Bpbu+8jOmBv+WFjeWHuueOsOaMiemSrlxuICAgICAgICAgICAgICAgICAgICAvLyog5LuOZnJlZVNwaW7nirbmgIHpl6rkuIDkuIvmiY3lj5jkuLrmma7pgJpzcGlu54q25oCBXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQmFyLnNwaW5UeXBlID0gU3BpblR5cGUuU3BpbjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXR1cyhTbG90R2FtZVN0YWdlU3RhdHVzLlJlYWR5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVjZWl2ZVN5bWJvbEJvYXJkU3RhdHVzQ2hhbmdlZChib2FyZEluZGV4OiBudW1iZXIsIGJvYXJkU3RhdHVzOiBTeW1ib2xCb2FyZFN0YXR1cyk6IHZvaWQge1xuICAgICAgICBjb25zdCBjYW5CZU5leHRTdGF0dXMgPSB0aGlzLmNhbkJlTmV4dFN0YXR1cygpO1xuICAgICAgICBpZiAoY2FuQmVOZXh0U3RhdHVzKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBTbG90R2FtZVN0YWdlU3RhdHVzLlNlcnZlclJlc3VsdHNSZWNlaXZlZDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBTbG90R2FtZVN0YWdlU3RhdHVzLkJvYXJkc1JlcGxhY2luZztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBTbG90R2FtZVN0YWdlU3RhdHVzLkJvYXJkc1JlcGxhY2luZzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBTbG90R2FtZVN0YWdlU3RhdHVzLkJvYXJkc1ByaXplU2hvd2luZztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBTbG90R2FtZVN0YWdlU3RhdHVzLkJvYXJkc1ByaXplU2hvd2luZzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBTbG90R2FtZVN0YWdlU3RhdHVzLkJvYXJkc1NldHRsaW5nO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFNsb3RHYW1lU3RhZ2VTdGF0dXMuQm9hcmRzU2V0dGxpbmc6XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc3RhdHVzID0gU2xvdEdhbWVTdGFnZVN0YXR1cy5SZWFkeTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBTbG90R2FtZVN0YWdlU3RhdHVzLlByaXplU2hvd2luZztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBTbG90R2FtZVN0YWdlU3RhdHVzLlByaXplU2hvd2luZzpcbiAgICAgICAgICAgICAgICAgICAgLy8hIOWmguaenOS4i+S4gOaKiua4uOaIj+aooeW8j+aYr+aZrumAmuaooeW8j++8jOS4lOayoeacieeJueauiuaooeW8j+eahOaVsOaNru+8jOaJjeaKiua4uOaIj+eKtuaAgeiuvuS4uuWHhuWkh+S4rVxuICAgICAgICAgICAgICAgICAgICAvLyEg5Li65LqG6Ziy5q2i5b2T5Ye6546wc2NhdHRlcuaji+WtkOWHhuWkh+i/m+WFpeeJueauiuaooeW8j++8jOW7tui/n+aJp+ihjGJlZm9yZUVudGVyRnJlZU1vZGXmlrnms5Xml7bjgIJcbiAgICAgICAgICAgICAgICAgICAgLy8hIOa4uOaIj+eKtuaAgeiLpeiiq+iuvue9ruS4uuWHhuWkh+S4re+8jOWImeS8muegtOWdj+a4uOaIj+a1geeoi++8jOWHuueOsOeUqOaIt+i/mOacqumAieaLqeaYr+WQpui/m+WFpeeJueauiuaooeW8j++8jFxuICAgICAgICAgICAgICAgICAgICAvLyEg5ri45oiP5bey57uP5byA5aeL55qEYnVnXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLiRuZXh0R2FtZU1vZGUgPT09IFNwaW5SZXN1bHRzR2FtZU1vZGUuTm9ybWFsICYmICF0aGlzLnNwaW5SZXN1bHRzLmZyZWVUcmlnZ2VyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9IFNsb3RHYW1lU3RhZ2VTdGF0dXMuUmVhZHk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYm9hcmRJbmRleFxuICAgICAqL1xuICAgIHJlY2VpdmVTeW1ib2xCb2FyZFN0b3BwZWQoYm9hcmRJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNhbkJlTmV4dFN0YXR1cyA9IHRoaXMuY2FuQmVOZXh0U3RhdHVzKCk7XG4gICAgICAgIGlmIChjYW5CZU5leHRTdGF0dXMpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdHVzKFNsb3RHYW1lU3RhZ2VTdGF0dXMuQm9hcmRzUmVwbGFjaW5nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWNlaXZlU3ltYm9sTW9ja0NvZGVzUmVwbGFjZWQoYm9hcmRJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNhbkJlTmV4dFN0YXR1cyA9IHRoaXMuY2FuQmVOZXh0U3RhdHVzKCk7XG4gICAgICAgIGlmIChjYW5CZU5leHRTdGF0dXMpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdHVzKFNsb3RHYW1lU3RhZ2VTdGF0dXMuQm9hcmRzUHJpemVTaG93aW5nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGJpZ3dpbiBzdXBlcndpbuetieWxleekuu+8jOmcgOimgemHjei9ve+8jOWxleekuuWujOaIkOWQjuimgeiwg+eUqGJpZ1dpblNob3dFbmRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYmlnV2luU2hvdygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy53aW4ucG9wVXBXaW4oXG4gICAgICAgICAgICBTbG90R2FtZVN0YWdlQmFzZS5zcGluUmVzdWx0cy53aW5UeXBlLFxuICAgICAgICAgICAgU2xvdEdhbWVTdGFnZUJhc2Uuc3BpblJlc3VsdHMuYmlnV2luQ29pbnMsXG4gICAgICAgICAgICBTbG90R2FtZVN0YWdlQmFzZS5zcGluUmVzdWx0cy5iaWdXaW5BZEF3YXJkcy5jb3VudGRvd24sXG4gICAgICAgICAgICB0aGlzLnNwaW5SZXN1bHRzLmdhbWVXaGVlbCxcbiAgICAgICAgICAgIHRoaXMuYmlnV2luQ2FsbGJhY2suYmluZCh0aGlzKVxuICAgICAgICApO1xuICAgICAgICAvLyog5aaC5p6c5bey57uP5pyJ6L+e57q/5LqG77yMYmlnd2lu5bCx5LiN55So57uZ5bqV6YOo5qCP5YaN6LWL5LiA5qyh5YC85LqGXG4gICAgICAgIGlmICghdGhpcy5faGFzTWF0Y2hlZExpbmVzKSB7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbUJhci5zZXRXaW5Db2lucyh0aGlzLnNwaW5SZXN1bHRzLndpbkNvaW5zLCAxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgYmlnV2luQ2FsbGJhY2socmV3YXJkQ29pbnM6IG51bWJlciwgcmV3YXJkSW50ZWdyYWw6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmJpZ1dpblNob3dFbmQoKTtcbiAgICAgICAgaWYgKHRoaXMudG9wQmFyKSB7XG4gICAgICAgICAgICBsZXQgY29pbkF3YXJkOiBudW1iZXIgPSByZXdhcmRDb2lucyArIHRoaXMudG9wQmFyLmNvaW5zO1xuICAgICAgICAgICAgLy8gdG9kbyDmmoLml7bov5nmoLflpITnkIZcbiAgICAgICAgICAgIGlmICh0aGlzLnNwaW5SZXN1bHRzLnNsb3RzWzBdLm1hdGNoZWRMaW5lcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY29pbkF3YXJkID0gdGhpcy5zcGluUmVzdWx0cy51c2VyQ29pbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRvcEJhci5zZXRVc2VyQ29pbnMoY29pbkF3YXJkLCAwLjUpO1xuICAgICAgICAgICAgbGV0IGludGVncmFsQXdhcmQ6IG51bWJlciA9IHJld2FyZEludGVncmFsICsgdGhpcy50b3BCYXIuaW50ZWdyYWw7XG4gICAgICAgICAgICAvLyog5Zug56ev5YiG5Yqo55S75omn6KGM6aG65bqP5oWi5LqO6YeR5biB5Yqo55S777yM5omA5Lul5bu25pe25omn6KGMXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy50b3BCYXIuc2V0VXNlckludGVncmFsKGludGVncmFsQXdhcmQsIDAuNSk7XG4gICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjb2luQXdhcmQ6IG51bWJlciA9IHJld2FyZENvaW5zICsgdGhpcy5ib3R0b21CYXIuY29pbnM7XG4gICAgICAgICAgICAvLyB0b2RvIOaaguaXtui/meagt+WkhOeQhlxuICAgICAgICAgICAgaWYgKHRoaXMuc3BpblJlc3VsdHMuc2xvdHNbMF0ubWF0Y2hlZExpbmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb2luQXdhcmQgPSB0aGlzLnNwaW5SZXN1bHRzLnVzZXJDb2lucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYm90dG9tQmFyLnNldFVzZXJDb2lucyhjb2luQXdhcmQsIDAuNSk7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBwcm90ZWN0ZWQgYmlnV2luU2hvd0VuZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5iaWdXaW5TaG93RW5kZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmhhc0JpZ1dpbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IFNsb3RHYW1lU3RhZ2VTdGF0dXMuUHJpemVTaG93aW5nO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBqcOWxleekuu+8jOmcgOimgemHjei9ve+8jOWxleekuuWujOaIkOWQjuimgeiwg+eUqGphY2twb3RTaG93RW5kXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGphY2twb3RTaG93KGphY2twb3RWYWx1ZSk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcImpwXCIpO1xuICAgICAgICAvLyog5pKt5pS+anDpn7PmlYhcbiAgICAgICAgU291bmRNZ3IuZ2V0SW5zdGFuY2UoKS5wbGF5RWZmZWN0KFwidm9famFja3BvdFwiKTtcbiAgICAgICAgdGhpcy5ib3R0b21CYXIuc2V0V2luQ29pbnModGhpcy5zcGluUmVzdWx0cy53aW5Db2lucywgMSk7XG4gICAgICAgIHRoaXMuamFja3BvdFNob3dFbmQoKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGphY2twb3RTaG93RW5kKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmphY2twb3RTaG93RW5kZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmhhc0phY2twb3QgPSBmYWxzZVxuICAgICAgICB0aGlzLnN0YXR1cyA9IFNsb3RHYW1lU3RhZ2VTdGF0dXMuUHJpemVTaG93aW5nO1xuXG4gICAgICAgIGlmICh0aGlzLnRvcEJhcikge1xuICAgICAgICAgICAgdGhpcy50b3BCYXIuc2V0VXNlckNvaW5zKHRoaXMuc3BpblJlc3VsdHMudXNlckNvaW5zLCAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQmFyLnNldFVzZXJDb2lucyh0aGlzLnNwaW5SZXN1bHRzLnVzZXJDb2lucywgMSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi/m+WFpeWFjei0uea4uOaIj+S5i+WJjeiwg+eUqFxuICAgICAqIEByZW1hcmtcbiAgICAgKiDlnKjov5nkuKrmlrnms5Xph4zpnaLlj6/ku6Xmj5DnpLrnlKjmiLfojrflvpflhY3otLnmuLjmiI/mrKHmlbDnrYnvvIzmiJbogIXmoLnmja50cmlnZ2Vy6YeM6Z2i55qEd2hlZWxz5bGV56S66L2s55uYXG4gICAgICog57uT5p2f5ZCO6LCD55SoZW50ZXJGcmVlR2FtZVxuICAgICAqIEBwYXJhbSBmcmVlVHJpZ2dlciDlhY3otLnmuLjmiI/op6blj5HlmahcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgYmVmb3JlRW50ZXJGcmVlTW9kZShmcmVlVHJpZ2dlcjogU3BpblJlc3VsdHNGcmVlVHJpZ2dlcik6IHZvaWQ7XG4gICAgcHJvdGVjdGVkIGVudGVyRnJlZU1vZGUoZXh0cmFEYXRhPzogYW55KTogdm9pZCB7XG4gICAgICAgIC8vKiDoi6XlvZPliY3muLjmiI/mqKHlvI/kuLrmma7pgJrmqKHlvI9cbiAgICAgICAgLy8qIOi9rOWcuuWIsOeJueauiuaooeW8j+WJje+8jOW6lemDqOagj+i1ouW+l+mHkeW4geaVsOa4hembtlxuICAgICAgICBpZiAodGhpcy5zcGluUmVzdWx0cy5nYW1lTW9kZSA9PT0gU3BpblJlc3VsdHNHYW1lTW9kZS5Ob3JtYWwpIHtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tQmFyLnNldFdpbkNvaW5zKDAsIDApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RhdHVzID0gU2xvdEdhbWVTdGFnZVN0YXR1cy5SZWFkeTtcbiAgICB9XG4gICAgLyoqXG4gICAgICrojrflvpfljaHniYfnmoTml7blgJnosIPnlKhcbiAgICAgKiBAcGFyYW0gY2FyZHNEYXRhIOWNoeeJh+aVsOaNrlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBjYXJkVmlld1Nob3coY2FyZHNEYXRhOiBTcGluUmVzdWx0c0NhcmRbXSk6IHZvaWQgeyB9XG4gICAgLyoqXG4gICAgICog5YWN6LS55qih5byP57uT5p2f55qE5pe25YCZ6LCD55SoXG4gICAgICpcbiAgICAgKiBAcGFyYW0gd2luQ29pbnMg6LWi5Y+W6YeR5biB5pWwXG4gICAgICogQHBhcmFtIHRvdGFsQ291bnQg5oC75qyh5pWwXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGZyZWVNb2RlRmluaXNoZWQod2luQ29pbnM6IG51bWJlciwgdG90YWxDb3VudDogbnVtYmVyKTogdm9pZCB7IH1cbiAgICAvKipcbiAgICAgKlxuICAgICAqIOaSreaUvuaMh+WumuS9jee9ruS4iueahOaMh+WumumFjee9rueahHNwaW5l5Yqo5pWI77yM5ZCM5pe25pKt5pS+77yM5Lu75LiA5pKt5pS+57uT5p2f5bCx6LCD55So5Zue6LCDXG4gICAgICogQHBhcmFtIHBvc2l0aW9ucyDmkq3mlL7mo4vlrZDkvY3nva7liJfooajvvJpbNSw5LDEwXVxuICAgICAqIEBwYXJhbSBjb25maWdOYW1lIOmFjee9ruWQjeensFxuICAgICAqIEBwYXJhbSBjYWxsYmFjayDlm57osINcbiAgICAgKiBAcGFyYW0gYm9hcmRJbmRleFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBwbGF5U3BpbmVCeUNvbmZpZ0FuZFBvc2l0aW9ucyhcbiAgICAgICAgYm9hcmRJbmRleDogbnVtYmVyLFxuICAgICAgICBwb3NpdGlvbnM6IG51bWJlcltdLFxuICAgICAgICBjb25maWdOYW1lOiBzdHJpbmcsXG4gICAgICAgIGNhbGxiYWNrPzogRnVuY3Rpb25cbiAgICApOiB2b2lkIHsgfVxuICAgIHByaXZhdGUgZW50ZXJGcmVlTW9kZVNob3dDYWxsYmFjazogRnVuY3Rpb247XG4gICAgcHJpdmF0ZSBlbnRlckZyZWVNb2RlU2hvd0NvbXBsZXRlZE9uY2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBQbGF5cyBlbnRlciBmcmVlIG1vZGUgc2hvd1xuICAgICAqIOaSreaUvui/m+WFpeWFjei0ueaooeW8j+eahOaji+WtkOWKqOaViFxuICAgICAqIEBwYXJhbSBbY2FsbGJhY2tdIOWbnuiwg1xuICAgICAqIEBwYXJhbSBbY29kZV0g5qOL5a2Q57yW56CBXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHBsYXlFbnRlckZyZWVNb2RlU2hvdyhjYWxsYmFjaz86IEZ1bmN0aW9uLCBjb2RlPzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZW50ZXJGcmVlTW9kZVNob3dDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICBsZXQgYW55U2hvdzogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVudGVyRnJlZU1vZGVTaG93Q29tcGxldGVkT25jZSA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ltYm9sQm9hcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBib2FyZCA9IHRoaXMuc3ltYm9sQm9hcmRzW2ldO1xuICAgICAgICAgICAgaWYgKGJvYXJkLnBsYXlFbnRlckZyZWVNb2RlU2hvdyh0aGlzLmVudGVyRnJlZU1vZGVTaG93Q29tcGxldGVkLmJpbmQodGhpcyksIGNvZGUpKSB7XG4gICAgICAgICAgICAgICAgYW55U2hvdyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhbnlTaG93ICYmIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgZW50ZXJGcmVlTW9kZVNob3dDb21wbGV0ZWQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmVudGVyRnJlZU1vZGVTaG93Q2FsbGJhY2sgJiYgIXRoaXMuZW50ZXJGcmVlTW9kZVNob3dDb21wbGV0ZWRPbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmVudGVyRnJlZU1vZGVTaG93Q29tcGxldGVkT25jZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmVudGVyRnJlZU1vZGVTaG93Q2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDigJzmmoLlgZzigJ3mo4vnm5hcbiAgICAgKiDlubbpnZ7mmK/nnJ/mraPnmoTmmoLlgZzmo4vnm5jvvIzogIzmmK/lsIbovazovbTkuIDnm7TlpITkuo5zcGlu54q25oCBXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHBhdXNlU3ltYm9sQm9hcmQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3ltYm9sQm9hcmRzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaXRlbS53YWl0aW5nUmVzdWx0c1N0cmF0ZWd5LmlzUGF1c2UgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5oGi5aSN5qOL55uYXG4gICAgICog6Kej6Zmk5LiA55u05aSE5LqOc3BpbueKtuaAge+8jOaBouWkjeWIsOato+W4uOa1gei9rOeahOeKtuaAgVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBjb250aW51ZVN5bWJvbEJvYXJkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN5bWJvbEJvYXJkcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGl0ZW0ud2FpdGluZ1Jlc3VsdHNTdHJhdGVneS5pc1BhdXNlID0gZmFsc2U7XG4gICAgICAgICAgICBpdGVtLndhaXRpbmdSZXN1bHRzU3RyYXRlZ3kuaXNQYXVzZUJ1ZmZlciA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyog54K55Ye75pS26ZuG5oyJ6ZKu77yM5bu25pe25omn6KGM6YeR5biB5aKe6ZW/5Yqo55S7XG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgLy8gICAgIHRoaXMudG9wQmFyLnNldFVzZXJDb2lucyh0aGlzLl9jb2luQXdhcmQsIDAuNSk7XG4gICAgICAgIC8vIH0sIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPlndpblR5cGXvvIznlKjkuo7ln4vngrlcbiAgICAgKiBAcGFyYW0gdHlwZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzZWxlY3RXaW5UeXBlKHR5cGU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGxldCB0eXBlU3RyOiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB0eXBlU3RyID0gXCJiaWdfd2luXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgdHlwZVN0ciA9IFwic3VwZXJfd2luXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgdHlwZVN0ciA9IFwibWVnYV93aW5cIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHR5cGVTdHI7XG4gICAgfVxufVxuIl19