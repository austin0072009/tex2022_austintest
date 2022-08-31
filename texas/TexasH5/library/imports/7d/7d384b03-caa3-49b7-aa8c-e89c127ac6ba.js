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
   * 获取收集值列表
   */
  ;

  /**
   * 添加卡牌
   *
   * @param {string} cardId 卡牌ID
   * @param {string} cardImageUrl 卡牌图片地址
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
   * BinWin看广告奖励
   *
   * @readonly
   * @type {SpinResultsBigWinAdAwards}
   * @memberof SpinResults
   */
  ;

  /**
   * 添加BinWin看广告奖励
   *
   * @param {string} awardId 奖励ID
   * @param {number} points 奖励的游戏积分
   * @param {number} coins 奖励的金币
   * @param {number} countdown 弹窗倒计时
   * @memberof SpinResults
   */
  _proto.addBinWinAdAwards = function addBinWinAdAwards(awardId, points, coins, countdown) {
    this._bigWinAdAwards = new SpinResultsBigWinAdAwards_1["default"](awardId, points, coins, countdown);
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
     * 获取奖池数据
     */

  }, {
    key: "jackpots",
    get: function get() {
      return this._jackpots;
    }
    /**
     * 设置奖池数据
     */
    ,
    set: function set(value) {
      this._jackpots = value;
    }
    /**
     * 获取jp奖励
     */

  }, {
    key: "jackpot",
    get: function get() {
      return this._jackpot;
    }
    /**
     * 设置jp奖励
     */
    ,
    set: function set(value) {
      this._jackpot = value;
    }
    /**
     * 获取jp中奖档次
     */

  }, {
    key: "jackpotLevel",
    get: function get() {
      return this._jackpotLevel;
    }
    /**
     * 设置jp中奖档次
     */
    ,
    set: function set(value) {
      this._jackpotLevel = value;
    }
    /**
     * 获取赢的类型
     */

  }, {
    key: "winType",
    get: function get() {
      return this._winType;
    }
    /**
     * 设置赢的类型
     */
    ,
    set: function set(value) {
      this._winType = value;
    }
    /**
     * 获取赢取金币数
     */

  }, {
    key: "winCoins",
    get: function get() {
      return this._winCoins;
    }
    /**
     * 设置赢取金币数
     */
    ,
    set: function set(value) {
      this._winCoins = value;
    }
    /**
     * 获取用户金币数
     */

  }, {
    key: "userCoins",
    get: function get() {
      return this._userCoins;
    }
    /**
     * 设置用户金币数
     */
    ,
    set: function set(value) {
      this._userCoins = value;
    }
    /**
     * 获取游戏类型
     */

  }, {
    key: "previousGameMode",
    get: function get() {
      return this._previousGameMode;
    }
    /**
     * 设置游戏类型
     */
    ,
    set: function set(value) {
      this._previousGameMode = value;
    }
    /**
     * 获取游戏类型
     */

  }, {
    key: "gameMode",
    get: function get() {
      return this._gameMode;
    }
    /**
     * 设置游戏类型
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
     * 获取下回合游戏类型
     */

  }, {
    key: "nextGameMode",
    get: function get() {
      return this._nextGameMode;
    }
    /**
     * 设置下回合游戏类型
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
     * 获取已完成次数
     */

  }, {
    key: "finishedCount",
    get: function get() {
      return this._finishedCount;
    }
    /**
     * 设置已完成次数
     */
    ,
    set: function set(value) {
      this._finishedCount = value;
    }
    /**
     * 获取总次数
     */

  }, {
    key: "totalCount",
    get: function get() {
      return this._totalCount;
    }
    /**
     * 设置总次数
     */
    ,
    set: function set(value) {
      this._totalCount = value;
    }
    /**
     * 获取时间戳(ms)
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
     * 获取下注数
     */

  }, {
    key: "totalBetNum",
    get: function get() {
      return this._totalBetNum;
    }
    /**
     * 设置下注数
     */
    ,
    set: function set(value) {
      this._totalBetNum = value;
    }
    /**
     * 获取历史最高分
     */

  }, {
    key: "highScore",
    get: function get() {
      return this._highScore;
    }
    /**
     * 设置历史最高分
     */
    ,
    set: function set(value) {
      this._highScore = value;
    }
    /**
     * 游戏积分
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
     * 用户总游戏积分
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
     * BigWin金币数
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
     * 获取免费游戏触发器
     */

  }, {
    key: "freeTrigger",
    get: function get() {
      return this._freeTrigger;
    }
    /**
     * 设置免费游戏触发器
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
     * 设置收集值列表
     */
    ,
    set: function set(value) {
      this._collectibles = value;

      if (!this._collectibles) {
        this._collectibles = [];
      }
    }
    /**
     * 获取等级
     */

  }, {
    key: "level",
    get: function get() {
      return this._level;
    }
    /**
     * 设置等级
     */
    ,
    set: function set(value) {
      this._level = value;
    }
    /**
     * 获取巡回赛数据
     */

  }, {
    key: "tour",
    get: function get() {
      return this._tour;
    }
    /**
     * 设置巡回赛
     */
    ,
    set: function set(value) {
      this._tour = value;
    }
    /**
     * 获取游戏内转盘
     */

  }, {
    key: "gameWheel",
    get: function get() {
      return this._gameWheel;
    }
    /**
     * 设置游戏内转盘
     */
    ,
    set: function set(value) {
      this._gameWheel = value;
    }
    /**
     * 获得的卡牌
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