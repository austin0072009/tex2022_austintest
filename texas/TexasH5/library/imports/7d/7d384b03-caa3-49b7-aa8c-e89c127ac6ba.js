"use strict";
cc._RF.push(module, '7d384sDyqNJt6qM6JwSesa6', 'SpinResults');
// Script/modules/spin-result/SpinResults.js

"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = void 0 && (void 0).__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var SpinResultsWinType_1 = require("./SpinResultsWinType");

var SpinResultsGameMode_1 = require("./SpinResultsGameMode");

var SpinResultsSlot_1 = __importDefault(require("./SpinResultsSlot"));

var SpinResultsFreeTrigger_1 = __importDefault(require("./SpinResultsFreeTrigger"));

var SpinResultsCollectible_1 = __importDefault(require("./SpinResultsCollectible"));

var class_transformer_1 = require("class-transformer");

var SpinResultsLevel_1 = __importDefault(require("./SpinResultsLevel"));

var SpinResultsTour_1 = __importDefault(require("./SpinResultsTour"));

var SpinResultsGameWheel_1 = __importDefault(require("./SpinResultsGameWheel"));

var class_transformer_2 = require("class-transformer");

var SpinResultsBigWinAdAwards_1 = __importDefault(require("./SpinResultsBigWinAdAwards"));

var SpinResultsCard_1 = __importDefault(require("./SpinResultsCard"));

var SpinResultsGame_1 = __importDefault(require("./SpinResultsGame"));

var SpinResults = /*#__PURE__*/function () {
  function SpinResults(slots, jackpots, jackpot, jackpotLevel, winType, winCoins, userCoins, gameMode, finishedCount, totalCount, freeTrigger, collectibles, timestamp, totalBetNum, level, tour, gameWheel) {
    if (slots === void 0) {
      slots = [];
    }

    if (jackpots === void 0) {
      jackpots = [];
    }

    if (jackpot === void 0) {
      jackpot = 0;
    }

    if (jackpotLevel === void 0) {
      jackpotLevel = -1;
    }

    if (winType === void 0) {
      winType = SpinResultsWinType_1.SpinResultsWinType.None;
    }

    if (winCoins === void 0) {
      winCoins = 0;
    }

    if (userCoins === void 0) {
      userCoins = 0;
    }

    if (gameMode === void 0) {
      gameMode = SpinResultsGameMode_1.SpinResultsGameMode.Normal;
    }

    if (finishedCount === void 0) {
      finishedCount = 1;
    }

    if (totalCount === void 0) {
      totalCount = 1;
    }

    if (freeTrigger === void 0) {
      freeTrigger = null;
    }

    if (collectibles === void 0) {
      collectibles = [];
    }

    if (timestamp === void 0) {
      timestamp = 0;
    }

    if (totalBetNum === void 0) {
      totalBetNum = 0;
    }

    if (level === void 0) {
      level = null;
    }

    if (tour === void 0) {
      tour = null;
    }

    if (gameWheel === void 0) {
      gameWheel = null;
    }

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

  var _proto = SpinResults.prototype;

  _proto.setNextGameMode = function setNextGameMode() {
    if (this._freeTrigger && this._slots && this._slots.length > 0) {
      for (var i = 0; i < this._slots.length; i++) {
        this._slots[i].nextGameMode = this._freeTrigger.gameMode;
      }
    }
  }
  /**
   * ?????????????????????
   */
  ;

  /**
   * ????????????
   *
   * @param {string} cardId ??????ID
   * @param {string} cardImageUrl ??????????????????
   * @memberof SpinResults
   */
  _proto.addCard = function addCard(cardId, cardImageUrl, isNew, count) {
    if (isNew === void 0) {
      isNew = true;
    }

    if (count === void 0) {
      count = 1;
    }

    var card = new SpinResultsCard_1["default"](cardId, cardImageUrl, isNew, count);

    if (Array.isArray(this._cards)) {
      this._cards.push(card);
    } else {
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
  ;

  /**
   * ??????BinWin???????????????
   *
   * @param {string} awardId ??????ID
   * @param {number} points ?????????????????????
   * @param {number} coins ???????????????
   * @param {number} countdown ???????????????
   * @memberof SpinResults
   */
  _proto.addBinWinAdAwards = function addBinWinAdAwards(awardId, points, coins, countdown) {
    this._bigWinAdAwards = new SpinResultsBigWinAdAwards_1["default"](awardId, points, coins, countdown);
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
  ;

  _proto.addUnlockedGame = function addUnlockedGame(gameId, gameCode, isFree, hasJackpot, jackpot, jackpot2, status, isTopGame, isVertical, orderNum, version) {
    if (!this.level || !this.level.upgrade) {
      return;
    }

    var game = new SpinResultsGame_1["default"](gameId, gameCode, isFree, hasJackpot, jackpot, jackpot2, status, isTopGame, isVertical, orderNum, version);

    if (Array.isArray(this._level.upgrade.unlockedGames)) {
      this.level.upgrade.unlockedGames.push(game);
    } else {
      this.level.upgrade.unlockedGames = [game];
    }
  };

  _createClass(SpinResults, [{
    key: "slots",
    get: function get() {
      return this._slots;
    },
    set: function set(value) {
      this._slots = value;

      if (!this._slots) {
        this._slots = [];
      }
    }
    /**
     * ??????????????????
     */

  }, {
    key: "jackpots",
    get: function get() {
      return this._jackpots;
    }
    /**
     * ??????????????????
     */
    ,
    set: function set(value) {
      this._jackpots = value;
    }
    /**
     * ??????jp??????
     */

  }, {
    key: "jackpot",
    get: function get() {
      return this._jackpot;
    }
    /**
     * ??????jp??????
     */
    ,
    set: function set(value) {
      this._jackpot = value;
    }
    /**
     * ??????jp????????????
     */

  }, {
    key: "jackpotLevel",
    get: function get() {
      return this._jackpotLevel;
    }
    /**
     * ??????jp????????????
     */
    ,
    set: function set(value) {
      this._jackpotLevel = value;
    }
    /**
     * ??????????????????
     */

  }, {
    key: "winType",
    get: function get() {
      return this._winType;
    }
    /**
     * ??????????????????
     */
    ,
    set: function set(value) {
      this._winType = value;
    }
    /**
     * ?????????????????????
     */

  }, {
    key: "winCoins",
    get: function get() {
      return this._winCoins;
    }
    /**
     * ?????????????????????
     */
    ,
    set: function set(value) {
      this._winCoins = value;
    }
    /**
     * ?????????????????????
     */

  }, {
    key: "userCoins",
    get: function get() {
      return this._userCoins;
    }
    /**
     * ?????????????????????
     */
    ,
    set: function set(value) {
      this._userCoins = value;
    }
    /**
     * ??????????????????
     */

  }, {
    key: "previousGameMode",
    get: function get() {
      return this._previousGameMode;
    }
    /**
     * ??????????????????
     */
    ,
    set: function set(value) {
      this._previousGameMode = value;
    }
    /**
     * ??????????????????
     */

  }, {
    key: "gameMode",
    get: function get() {
      return this._gameMode;
    }
    /**
     * ??????????????????
     */
    ,
    set: function set(value) {
      this._gameMode = value;

      if (this._slots && this._slots.length > 0) {
        for (var i = 0; i < this._slots.length; i++) {
          this._slots[i].gameMode = value;
        }
      }
    }
    /**
     * ???????????????????????????
     */

  }, {
    key: "nextGameMode",
    get: function get() {
      return this._nextGameMode;
    }
    /**
     * ???????????????????????????
     */
    ,
    set: function set(value) {
      this._nextGameMode = value;

      if (this._slots && this._slots.length > 0) {
        for (var i = 0; i < this._slots.length; i++) {
          this._slots[i].nextGameMode = value;
        }
      }
    }
    /**
     * ?????????????????????
     */

  }, {
    key: "finishedCount",
    get: function get() {
      return this._finishedCount;
    }
    /**
     * ?????????????????????
     */
    ,
    set: function set(value) {
      this._finishedCount = value;
    }
    /**
     * ???????????????
     */

  }, {
    key: "totalCount",
    get: function get() {
      return this._totalCount;
    }
    /**
     * ???????????????
     */
    ,
    set: function set(value) {
      this._totalCount = value;
    }
    /**
     * ???????????????(ms)
     */

  }, {
    key: "timestamp",
    get: function get() {
      return this._timestamp;
    },
    set: function set(value) {
      this._timestamp = value;
    }
    /**
     * ???????????????
     */

  }, {
    key: "totalBetNum",
    get: function get() {
      return this._totalBetNum;
    }
    /**
     * ???????????????
     */
    ,
    set: function set(value) {
      this._totalBetNum = value;
    }
    /**
     * ?????????????????????
     */

  }, {
    key: "highScore",
    get: function get() {
      return this._highScore;
    }
    /**
     * ?????????????????????
     */
    ,
    set: function set(value) {
      this._highScore = value;
    }
    /**
     * ????????????
     *
     * @readonly
     * @type {number}
     * @memberof SpinResults
     */

  }, {
    key: "points",
    get: function get() {
      return this._points;
    },
    set: function set(value) {
      this._points = value;
    }
    /**
     * ?????????????????????
     *
     * @readonly
     * @type {number}
     * @memberof SpinResults
     */

  }, {
    key: "userPoints",
    get: function get() {
      return this._userPoints;
    },
    set: function set(value) {
      this._userPoints = value;
    }
    /**
     * BigWin?????????
     *
     * @readonly
     * @type {number}
     * @memberof SpinResults
     */

  }, {
    key: "bigWinCoins",
    get: function get() {
      return this._bigWinCoins;
    },
    set: function set(value) {
      this._bigWinCoins = value;
    }
    /**
     * ???????????????????????????
     */

  }, {
    key: "freeTrigger",
    get: function get() {
      return this._freeTrigger;
    }
    /**
     * ???????????????????????????
     */
    ,
    set: function set(value) {
      this._freeTrigger = value;
      this.setNextGameMode();
    }
  }, {
    key: "collectibles",
    get: function get() {
      return this._collectibles;
    }
    /**
     * ?????????????????????
     */
    ,
    set: function set(value) {
      this._collectibles = value;

      if (!this._collectibles) {
        this._collectibles = [];
      }
    }
    /**
     * ????????????
     */

  }, {
    key: "level",
    get: function get() {
      return this._level;
    }
    /**
     * ????????????
     */
    ,
    set: function set(value) {
      this._level = value;
    }
    /**
     * ?????????????????????
     */

  }, {
    key: "tour",
    get: function get() {
      return this._tour;
    }
    /**
     * ???????????????
     */
    ,
    set: function set(value) {
      this._tour = value;
    }
    /**
     * ?????????????????????
     */

  }, {
    key: "gameWheel",
    get: function get() {
      return this._gameWheel;
    }
    /**
     * ?????????????????????
     */
    ,
    set: function set(value) {
      this._gameWheel = value;
    }
    /**
     * ???????????????
     *
     * @readonly
     * @type {SpinResultsCard[]}
     * @memberof SpinResults
     */

  }, {
    key: "cards",
    get: function get() {
      return this._cards;
    },
    set: function set(value) {
      this._cards = value;
    }
  }, {
    key: "bigWinAdAwards",
    get: function get() {
      return this._bigWinAdAwards;
    },
    set: function set(value) {
      this._bigWinAdAwards = value;
    }
  }]);

  return SpinResults;
}();

__decorate([class_transformer_1.Type(function () {
  return SpinResultsSlot_1["default"];
}), __metadata("design:type", Array)], SpinResults.prototype, "_slots", void 0);

__decorate([class_transformer_1.Type(function () {
  return SpinResultsBigWinAdAwards_1["default"];
}), __metadata("design:type", SpinResultsBigWinAdAwards_1["default"])], SpinResults.prototype, "_bigWinAdAwards", void 0);

__decorate([class_transformer_1.Type(function () {
  return SpinResultsCard_1["default"];
}), __metadata("design:type", Array)], SpinResults.prototype, "_cards", void 0);

__decorate([class_transformer_1.Type(function () {
  return SpinResultsFreeTrigger_1["default"];
}), __metadata("design:type", SpinResultsFreeTrigger_1["default"])], SpinResults.prototype, "_freeTrigger", void 0);

__decorate([class_transformer_1.Type(function () {
  return SpinResultsCollectible_1["default"];
}), __metadata("design:type", Array)], SpinResults.prototype, "_collectibles", void 0);

__decorate([class_transformer_1.Type(function () {
  return SpinResultsLevel_1["default"];
}), __metadata("design:type", SpinResultsLevel_1["default"])], SpinResults.prototype, "_level", void 0);

__decorate([class_transformer_1.Type(function () {
  return SpinResultsTour_1["default"];
}), __metadata("design:type", SpinResultsTour_1["default"])], SpinResults.prototype, "_tour", void 0);

__decorate([class_transformer_1.Type(function () {
  return SpinResultsGameWheel_1["default"];
}), __metadata("design:type", SpinResultsGameWheel_1["default"])], SpinResults.prototype, "_gameWheel", void 0);

__decorate([class_transformer_2.Expose(), class_transformer_1.Type(function () {
  return SpinResultsSlot_1["default"];
}), __metadata("design:type", Array), __metadata("design:paramtypes", [Array])], SpinResults.prototype, "slots", null);

__decorate([class_transformer_2.Expose(), __metadata("design:type", Array), __metadata("design:paramtypes", [Array])], SpinResults.prototype, "jackpots", null);

__decorate([class_transformer_2.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResults.prototype, "jackpot", null);

__decorate([class_transformer_2.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResults.prototype, "jackpotLevel", null);

__decorate([class_transformer_2.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResults.prototype, "winType", null);

__decorate([class_transformer_2.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResults.prototype, "winCoins", null);

__decorate([class_transformer_2.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResults.prototype, "userCoins", null);

__decorate([class_transformer_2.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResults.prototype, "previousGameMode", null);

__decorate([class_transformer_2.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResults.prototype, "gameMode", null);

__decorate([class_transformer_2.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResults.prototype, "nextGameMode", null);

__decorate([class_transformer_2.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResults.prototype, "finishedCount", null);

__decorate([class_transformer_2.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResults.prototype, "totalCount", null);

__decorate([class_transformer_2.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResults.prototype, "timestamp", null);

__decorate([class_transformer_2.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResults.prototype, "totalBetNum", null);

__decorate([class_transformer_2.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResults.prototype, "highScore", null);

__decorate([class_transformer_2.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResults.prototype, "points", null);

__decorate([class_transformer_2.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResults.prototype, "userPoints", null);

__decorate([class_transformer_2.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResults.prototype, "bigWinCoins", null);

__decorate([class_transformer_1.Type(function () {
  return SpinResultsFreeTrigger_1["default"];
}), class_transformer_2.Expose(), __metadata("design:type", SpinResultsFreeTrigger_1["default"]), __metadata("design:paramtypes", [SpinResultsFreeTrigger_1["default"]])], SpinResults.prototype, "freeTrigger", null);

__decorate([class_transformer_1.Type(function () {
  return SpinResultsCollectible_1["default"];
}), class_transformer_2.Expose(), __metadata("design:type", Array), __metadata("design:paramtypes", [Array])], SpinResults.prototype, "collectibles", null);

__decorate([class_transformer_1.Type(function () {
  return SpinResultsLevel_1["default"];
}), class_transformer_2.Expose(), __metadata("design:type", SpinResultsLevel_1["default"]), __metadata("design:paramtypes", [SpinResultsLevel_1["default"]])], SpinResults.prototype, "level", null);

__decorate([class_transformer_1.Type(function () {
  return SpinResultsTour_1["default"];
}), class_transformer_2.Expose(), __metadata("design:type", SpinResultsTour_1["default"]), __metadata("design:paramtypes", [SpinResultsTour_1["default"]])], SpinResults.prototype, "tour", null);

__decorate([class_transformer_1.Type(function () {
  return SpinResultsGameWheel_1["default"];
}), class_transformer_2.Expose(), __metadata("design:type", SpinResultsGameWheel_1["default"]), __metadata("design:paramtypes", [SpinResultsGameWheel_1["default"]])], SpinResults.prototype, "gameWheel", null);

__decorate([class_transformer_1.Type(function () {
  return SpinResultsCard_1["default"];
}), class_transformer_2.Expose(), __metadata("design:type", Array), __metadata("design:paramtypes", [Array])], SpinResults.prototype, "cards", null);

__decorate([class_transformer_1.Type(function () {
  return SpinResultsBigWinAdAwards_1["default"];
}), class_transformer_2.Expose(), __metadata("design:type", SpinResultsBigWinAdAwards_1["default"]), __metadata("design:paramtypes", [SpinResultsBigWinAdAwards_1["default"]])], SpinResults.prototype, "bigWinAdAwards", null);

SpinResults = __decorate([class_transformer_2.Exclude(), __metadata("design:paramtypes", [Array, Array, Number, Number, Number, Number, Number, Number, Number, Number, SpinResultsFreeTrigger_1["default"], Array, Number, Number, SpinResultsLevel_1["default"], SpinResultsTour_1["default"], SpinResultsGameWheel_1["default"]])], SpinResults);
exports["default"] = SpinResults;

cc._RF.pop();