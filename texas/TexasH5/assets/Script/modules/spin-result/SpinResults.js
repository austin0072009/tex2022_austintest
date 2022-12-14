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
     * ??????????????????
     */
    get jackpots() {
        return this._jackpots;
    }
    /**
     * ??????????????????
     */
    set jackpots(value) {
        this._jackpots = value;
    }
    /**
     * ??????jp??????
     */
    get jackpot() {
        return this._jackpot;
    }
    /**
     * ??????jp??????
     */
    set jackpot(value) {
        this._jackpot = value;
    }
    /**
     * ??????jp????????????
     */
    get jackpotLevel() {
        return this._jackpotLevel;
    }
    /**
     * ??????jp????????????
     */
    set jackpotLevel(value) {
        this._jackpotLevel = value;
    }
    /**
     * ??????????????????
     */
    get winType() {
        return this._winType;
    }
    /**
     * ??????????????????
     */
    set winType(value) {
        this._winType = value;
    }
    /**
     * ?????????????????????
     */
    get winCoins() {
        return this._winCoins;
    }
    /**
     * ?????????????????????
     */
    set winCoins(value) {
        this._winCoins = value;
    }
    /**
     * ?????????????????????
     */
    get userCoins() {
        return this._userCoins;
    }
    /**
     * ?????????????????????
     */
    set userCoins(value) {
        this._userCoins = value;
    }
    /**
     * ??????????????????
     */
    get previousGameMode() {
        return this._previousGameMode;
    }
    /**
     * ??????????????????
     */
    set previousGameMode(value) {
        this._previousGameMode = value;
    }
    /**
     * ??????????????????
     */
    get gameMode() {
        return this._gameMode;
    }
    /**
     * ??????????????????
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
     * ???????????????????????????
     */
    get nextGameMode() {
        return this._nextGameMode;
    }
    /**
     * ???????????????????????????
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
     * ?????????????????????
     */
    get finishedCount() {
        return this._finishedCount;
    }
    /**
     * ?????????????????????
     */
    set finishedCount(value) {
        this._finishedCount = value;
    }
    /**
     * ???????????????
     */
    get totalCount() {
        return this._totalCount;
    }
    /**
     * ???????????????
     */
    set totalCount(value) {
        this._totalCount = value;
    }
    /**
     * ???????????????(ms)
     */
    get timestamp() {
        return this._timestamp;
    }
    set timestamp(value) {
        this._timestamp = value;
    }
    /**
     * ???????????????
     */
    get totalBetNum() {
        return this._totalBetNum;
    }
    /**
     * ???????????????
     */
    set totalBetNum(value) {
        this._totalBetNum = value;
    }
    /**
     * ?????????????????????
     */
    get highScore() {
        return this._highScore;
    }
    /**
     * ?????????????????????
     */
    set highScore(value) {
        this._highScore = value;
    }
    /**
     * ????????????
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
     * ?????????????????????
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
     * BigWin?????????
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
     * ???????????????????????????
     */
    get freeTrigger() {
        return this._freeTrigger;
    }
    /**
     * ???????????????????????????
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
     * ?????????????????????
     */
    get collectibles() {
        return this._collectibles;
    }
    /**
     * ?????????????????????
     */
    set collectibles(value) {
        this._collectibles = value;
        if (!this._collectibles) {
            this._collectibles = [];
        }
    }
    /**
     * ????????????
     */
    get level() {
        return this._level;
    }
    /**
     * ????????????
     */
    set level(value) {
        this._level = value;
    }
    /**
     * ?????????????????????
     */
    get tour() {
        return this._tour;
    }
    /**
     * ???????????????
     */
    set tour(value) {
        this._tour = value;
    }
    /**
     * ?????????????????????
     */
    get gameWheel() {
        return this._gameWheel;
    }
    /**
     * ?????????????????????
     */
    set gameWheel(value) {
        this._gameWheel = value;
    }
    /**
     * ???????????????
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
     * ????????????
     *
     * @param {string} cardId ??????ID
     * @param {string} cardImageUrl ??????????????????
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
     * BinWin???????????????
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
     * ??????BinWin???????????????
     *
     * @param {string} awardId ??????ID
     * @param {number} points ?????????????????????
     * @param {number} coins ???????????????
     * @param {number} countdown ???????????????
     * @memberof SpinResults
     */
    addBinWinAdAwards(awardId, points, coins, countdown) {
        this._bigWinAdAwards = new SpinResultsBigWinAdAwards_1.default(awardId, points, coins, countdown);
    }
    /**
     * ??????????????????
     *
     * @param {string} gameId ??????ID
     * @param {string} gameCode ????????????
     * @param {boolean} isFree ????????????
     * @param {boolean} hasJackpot ???????????????
     * @param {string} jackpot ????????????
     * @param {string} jackpot2 ????????????
     * @param {SpinResultsGameStatus} status ????????????
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
