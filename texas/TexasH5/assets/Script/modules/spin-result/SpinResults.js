"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SpinResultsWinType_1 = require("./SpinResultsWinType");
const SpinResultsGameMode_1 = require("./SpinResultsGameMode");
const SpinResultsSlot_1 = __importDefault(require("./SpinResultsSlot"));
const SpinResultsFreeTrigger_1 = __importDefault(require("./SpinResultsFreeTrigger"));
const SpinResultsCollectible_1 = __importDefault(require("./SpinResultsCollectible"));
const class_transformer_1 = require("class-transformer");
const SpinResultsLevel_1 = __importDefault(require("./SpinResultsLevel"));
const SpinResultsTour_1 = __importDefault(require("./SpinResultsTour"));
const SpinResultsGameWheel_1 = __importDefault(require("./SpinResultsGameWheel"));
const class_transformer_2 = require("class-transformer");
const SpinResultsBigWinAdAwards_1 = __importDefault(require("./SpinResultsBigWinAdAwards"));
const SpinResultsCard_1 = __importDefault(require("./SpinResultsCard"));
const SpinResultsGame_1 = __importDefault(require("./SpinResultsGame"));
let SpinResults = class SpinResults {
    constructor(slots = [], jackpots = [], jackpot = 0, jackpotLevel = -1, winType = SpinResultsWinType_1.SpinResultsWinType.None, winCoins = 0, userCoins = 0, gameMode = SpinResultsGameMode_1.SpinResultsGameMode.Normal, finishedCount = 1, totalCount = 1, freeTrigger = null, collectibles = [], timestamp = 0, totalBetNum = 0, level = null, tour = null, gameWheel = null) {
        this._slots = [];
        this._jackpots = [];
        this._slots = slots;
        this._jackpots = jackpots;
        this._jackpot = jackpot;
        this._jackpotLevel = jackpotLevel;
        this._winType = winType;
        this._winCoins = winCoins;
        this._userCoins = userCoins;
        this._previousGameMode = gameMode;
        this._gameMode = gameMode;
        this._nextGameMode = gameMode;
        this._finishedCount = finishedCount;
        this._totalCount = totalCount;
        this._timestamp = timestamp;
        this._totalBetNum = totalBetNum;
        this._freeTrigger = freeTrigger;
        this._collectibles = collectibles;
        this._level = level;
        this._tour = tour;
        this._gameWheel = gameWheel;
        this._cards = [];
    }
    get slots() {
        return this._slots;
    }
    set slots(value) {
        this._slots = value;
        if (!this._slots) {
            this._slots = [];
        }
    }
    /**
     * 获取奖池数据
     */
    get jackpots() {
        return this._jackpots;
    }
    /**
     * 设置奖池数据
     */
    set jackpots(value) {
        this._jackpots = value;
    }
    /**
     * 获取jp奖励
     */
    get jackpot() {
        return this._jackpot;
    }
    /**
     * 设置jp奖励
     */
    set jackpot(value) {
        this._jackpot = value;
    }
    /**
     * 获取jp中奖档次
     */
    get jackpotLevel() {
        return this._jackpotLevel;
    }
    /**
     * 设置jp中奖档次
     */
    set jackpotLevel(value) {
        this._jackpotLevel = value;
    }
    /**
     * 获取赢的类型
     */
    get winType() {
        return this._winType;
    }
    /**
     * 设置赢的类型
     */
    set winType(value) {
        this._winType = value;
    }
    /**
     * 获取赢取金币数
     */
    get winCoins() {
        return this._winCoins;
    }
    /**
     * 设置赢取金币数
     */
    set winCoins(value) {
        this._winCoins = value;
    }
    /**
     * 获取用户金币数
     */
    get userCoins() {
        return this._userCoins;
    }
    /**
     * 设置用户金币数
     */
    set userCoins(value) {
        this._userCoins = value;
    }
    /**
     * 获取游戏类型
     */
    get previousGameMode() {
        return this._previousGameMode;
    }
    /**
     * 设置游戏类型
     */
    set previousGameMode(value) {
        this._previousGameMode = value;
    }
    /**
     * 获取游戏类型
     */
    get gameMode() {
        return this._gameMode;
    }
    /**
     * 设置游戏类型
     */
    set gameMode(value) {
        this._gameMode = value;
        if (this._slots && this._slots.length > 0) {
            for (let i = 0; i < this._slots.length; i++) {
                this._slots[i].gameMode = value;
            }
        }
    }
    /**
     * 获取下回合游戏类型
     */
    get nextGameMode() {
        return this._nextGameMode;
    }
    /**
     * 设置下回合游戏类型
     */
    set nextGameMode(value) {
        this._nextGameMode = value;
        if (this._slots && this._slots.length > 0) {
            for (let i = 0; i < this._slots.length; i++) {
                this._slots[i].nextGameMode = value;
            }
        }
    }
    /**
     * 获取已完成次数
     */
    get finishedCount() {
        return this._finishedCount;
    }
    /**
     * 设置已完成次数
     */
    set finishedCount(value) {
        this._finishedCount = value;
    }
    /**
     * 获取总次数
     */
    get totalCount() {
        return this._totalCount;
    }
    /**
     * 设置总次数
     */
    set totalCount(value) {
        this._totalCount = value;
    }
    /**
     * 获取时间戳(ms)
     */
    get timestamp() {
        return this._timestamp;
    }
    set timestamp(value) {
        this._timestamp = value;
    }
    /**
     * 获取下注数
     */
    get totalBetNum() {
        return this._totalBetNum;
    }
    /**
     * 设置下注数
     */
    set totalBetNum(value) {
        this._totalBetNum = value;
    }
    /**
     * 获取历史最高分
     */
    get highScore() {
        return this._highScore;
    }
    /**
     * 设置历史最高分
     */
    set highScore(value) {
        this._highScore = value;
    }
    /**
     * 游戏积分
     *
     * @readonly
     * @type {number}
     * @memberof SpinResults
     */
    get points() {
        return this._points;
    }
    set points(value) {
        this._points = value;
    }
    /**
     * 用户总游戏积分
     *
     * @readonly
     * @type {number}
     * @memberof SpinResults
     */
    get userPoints() {
        return this._userPoints;
    }
    set userPoints(value) {
        this._userPoints = value;
    }
    /**
     * BigWin金币数
     *
     * @readonly
     * @type {number}
     * @memberof SpinResults
     */
    get bigWinCoins() {
        return this._bigWinCoins;
    }
    set bigWinCoins(value) {
        this._bigWinCoins = value;
    }
    /**
     * 获取免费游戏触发器
     */
    get freeTrigger() {
        return this._freeTrigger;
    }
    /**
     * 设置免费游戏触发器
     */
    set freeTrigger(value) {
        this._freeTrigger = value;
        this.setNextGameMode();
    }
    setNextGameMode() {
        if (this._freeTrigger && this._slots && this._slots.length > 0) {
            for (let i = 0; i < this._slots.length; i++) {
                this._slots[i].nextGameMode = this._freeTrigger.gameMode;
            }
        }
    }
    /**
     * 获取收集值列表
     */
    get collectibles() {
        return this._collectibles;
    }
    /**
     * 设置收集值列表
     */
    set collectibles(value) {
        this._collectibles = value;
        if (!this._collectibles) {
            this._collectibles = [];
        }
    }
    /**
     * 获取等级
     */
    get level() {
        return this._level;
    }
    /**
     * 设置等级
     */
    set level(value) {
        this._level = value;
    }
    /**
     * 获取巡回赛数据
     */
    get tour() {
        return this._tour;
    }
    /**
     * 设置巡回赛
     */
    set tour(value) {
        this._tour = value;
    }
    /**
     * 获取游戏内转盘
     */
    get gameWheel() {
        return this._gameWheel;
    }
    /**
     * 设置游戏内转盘
     */
    set gameWheel(value) {
        this._gameWheel = value;
    }
    /**
     * 获得的卡牌
     *
     * @readonly
     * @type {SpinResultsCard[]}
     * @memberof SpinResults
     */
    get cards() {
        return this._cards;
    }
    set cards(value) {
        this._cards = value;
    }
    /**
     * 添加卡牌
     *
     * @param {string} cardId 卡牌ID
     * @param {string} cardImageUrl 卡牌图片地址
     * @memberof SpinResults
     */
    addCard(cardId, cardImageUrl, isNew = true, count = 1) {
        const card = new SpinResultsCard_1.default(cardId, cardImageUrl, isNew, count);
        if (Array.isArray(this._cards)) {
            this._cards.push(card);
        }
        else {
            this._cards = [card];
        }
    }
    /**
     * BinWin看广告奖励
     *
     * @readonly
     * @type {SpinResultsBigWinAdAwards}
     * @memberof SpinResults
     */
    get bigWinAdAwards() {
        return this._bigWinAdAwards;
    }
    set bigWinAdAwards(value) {
        this._bigWinAdAwards = value;
    }
    /**
     * 添加BinWin看广告奖励
     *
     * @param {string} awardId 奖励ID
     * @param {number} points 奖励的游戏积分
     * @param {number} coins 奖励的金币
     * @param {number} countdown 弹窗倒计时
     * @memberof SpinResults
     */
    addBinWinAdAwards(awardId, points, coins, countdown) {
        this._bigWinAdAwards = new SpinResultsBigWinAdAwards_1.default(awardId, points, coins, countdown);
    }
    /**
     * 添加解锁关卡
     *
     * @param {string} gameId 关卡ID
     * @param {string} gameCode 关卡代号
     * @param {boolean} isFree 是否免费
     * @param {boolean} hasJackpot 是否有奖池
     * @param {string} jackpot 奖池金额
     * @param {string} jackpot2 奖池金额
     * @param {SpinResultsGameStatus} status 关卡状态
     * @param {boolean} isTopGame
     * @param {boolean} isVertical
     * @param {number} orderNum
     * @param {string} version
     * @returns {void}
     * @memberof SpinResults
     */
    addUnlockedGame(gameId, gameCode, isFree, hasJackpot, jackpot, jackpot2, status, isTopGame, isVertical, orderNum, version) {
        if (!this.level || !this.level.upgrade) {
            return;
        }
        const game = new SpinResultsGame_1.default(gameId, gameCode, isFree, hasJackpot, jackpot, jackpot2, status, isTopGame, isVertical, orderNum, version);
        if (Array.isArray(this._level.upgrade.unlockedGames)) {
            this.level.upgrade.unlockedGames.push(game);
        }
        else {
            this.level.upgrade.unlockedGames = [game];
        }
    }
};
__decorate([
    class_transformer_1.Type(() => SpinResultsSlot_1.default),
    __metadata("design:type", Array)
], SpinResults.prototype, "_slots", void 0);
__decorate([
    class_transformer_1.Type(() => SpinResultsBigWinAdAwards_1.default),
    __metadata("design:type", SpinResultsBigWinAdAwards_1.default)
], SpinResults.prototype, "_bigWinAdAwards", void 0);
__decorate([
    class_transformer_1.Type(() => SpinResultsCard_1.default),
    __metadata("design:type", Array)
], SpinResults.prototype, "_cards", void 0);
__decorate([
    class_transformer_1.Type(() => SpinResultsFreeTrigger_1.default),
    __metadata("design:type", SpinResultsFreeTrigger_1.default)
], SpinResults.prototype, "_freeTrigger", void 0);
__decorate([
    class_transformer_1.Type(() => SpinResultsCollectible_1.default),
    __metadata("design:type", Array)
], SpinResults.prototype, "_collectibles", void 0);
__decorate([
    class_transformer_1.Type(() => SpinResultsLevel_1.default),
    __metadata("design:type", SpinResultsLevel_1.default)
], SpinResults.prototype, "_level", void 0);
__decorate([
    class_transformer_1.Type(() => SpinResultsTour_1.default),
    __metadata("design:type", SpinResultsTour_1.default)
], SpinResults.prototype, "_tour", void 0);
__decorate([
    class_transformer_1.Type(() => SpinResultsGameWheel_1.default),
    __metadata("design:type", SpinResultsGameWheel_1.default)
], SpinResults.prototype, "_gameWheel", void 0);
__decorate([
    class_transformer_2.Expose(),
    class_transformer_1.Type(() => SpinResultsSlot_1.default),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], SpinResults.prototype, "slots", null);
__decorate([
    class_transformer_2.Expose(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], SpinResults.prototype, "jackpots", null);
__decorate([
    class_transformer_2.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResults.prototype, "jackpot", null);
__decorate([
    class_transformer_2.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResults.prototype, "jackpotLevel", null);
__decorate([
    class_transformer_2.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResults.prototype, "winType", null);
__decorate([
    class_transformer_2.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResults.prototype, "winCoins", null);
__decorate([
    class_transformer_2.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResults.prototype, "userCoins", null);
__decorate([
    class_transformer_2.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResults.prototype, "previousGameMode", null);
__decorate([
    class_transformer_2.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResults.prototype, "gameMode", null);
__decorate([
    class_transformer_2.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResults.prototype, "nextGameMode", null);
__decorate([
    class_transformer_2.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResults.prototype, "finishedCount", null);
__decorate([
    class_transformer_2.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResults.prototype, "totalCount", null);
__decorate([
    class_transformer_2.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResults.prototype, "timestamp", null);
__decorate([
    class_transformer_2.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResults.prototype, "totalBetNum", null);
__decorate([
    class_transformer_2.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResults.prototype, "highScore", null);
__decorate([
    class_transformer_2.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResults.prototype, "points", null);
__decorate([
    class_transformer_2.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResults.prototype, "userPoints", null);
__decorate([
    class_transformer_2.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SpinResults.prototype, "bigWinCoins", null);
__decorate([
    class_transformer_1.Type(() => SpinResultsFreeTrigger_1.default),
    class_transformer_2.Expose(),
    __metadata("design:type", SpinResultsFreeTrigger_1.default),
    __metadata("design:paramtypes", [SpinResultsFreeTrigger_1.default])
], SpinResults.prototype, "freeTrigger", null);
__decorate([
    class_transformer_1.Type(() => SpinResultsCollectible_1.default),
    class_transformer_2.Expose(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], SpinResults.prototype, "collectibles", null);
__decorate([
    class_transformer_1.Type(() => SpinResultsLevel_1.default),
    class_transformer_2.Expose(),
    __metadata("design:type", SpinResultsLevel_1.default),
    __metadata("design:paramtypes", [SpinResultsLevel_1.default])
], SpinResults.prototype, "level", null);
__decorate([
    class_transformer_1.Type(() => SpinResultsTour_1.default),
    class_transformer_2.Expose(),
    __metadata("design:type", SpinResultsTour_1.default),
    __metadata("design:paramtypes", [SpinResultsTour_1.default])
], SpinResults.prototype, "tour", null);
__decorate([
    class_transformer_1.Type(() => SpinResultsGameWheel_1.default),
    class_transformer_2.Expose(),
    __metadata("design:type", SpinResultsGameWheel_1.default),
    __metadata("design:paramtypes", [SpinResultsGameWheel_1.default])
], SpinResults.prototype, "gameWheel", null);
__decorate([
    class_transformer_1.Type(() => SpinResultsCard_1.default),
    class_transformer_2.Expose(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], SpinResults.prototype, "cards", null);
__decorate([
    class_transformer_1.Type(() => SpinResultsBigWinAdAwards_1.default),
    class_transformer_2.Expose(),
    __metadata("design:type", SpinResultsBigWinAdAwards_1.default),
    __metadata("design:paramtypes", [SpinResultsBigWinAdAwards_1.default])
], SpinResults.prototype, "bigWinAdAwards", null);
SpinResults = __decorate([
    class_transformer_2.Exclude(),
    __metadata("design:paramtypes", [Array, Array, Number, Number, Number, Number, Number, Number, Number, Number, SpinResultsFreeTrigger_1.default, Array, Number, Number, SpinResultsLevel_1.default,
        SpinResultsTour_1.default,
        SpinResultsGameWheel_1.default])
], SpinResults);
exports.default = SpinResults;
