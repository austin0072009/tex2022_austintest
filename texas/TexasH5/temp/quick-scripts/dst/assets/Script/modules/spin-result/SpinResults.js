
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/spin-result/SpinResults.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxzcGluLXJlc3VsdFxcU3BpblJlc3VsdHMuanMiXSwibmFtZXMiOlsiX19kZWNvcmF0ZSIsImRlY29yYXRvcnMiLCJ0YXJnZXQiLCJrZXkiLCJkZXNjIiwiYyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInIiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJkIiwiUmVmbGVjdCIsImRlY29yYXRlIiwiaSIsImRlZmluZVByb3BlcnR5IiwiX19tZXRhZGF0YSIsImsiLCJ2IiwibWV0YWRhdGEiLCJfX2ltcG9ydERlZmF1bHQiLCJtb2QiLCJfX2VzTW9kdWxlIiwiZXhwb3J0cyIsInZhbHVlIiwiU3BpblJlc3VsdHNXaW5UeXBlXzEiLCJyZXF1aXJlIiwiU3BpblJlc3VsdHNHYW1lTW9kZV8xIiwiU3BpblJlc3VsdHNTbG90XzEiLCJTcGluUmVzdWx0c0ZyZWVUcmlnZ2VyXzEiLCJTcGluUmVzdWx0c0NvbGxlY3RpYmxlXzEiLCJjbGFzc190cmFuc2Zvcm1lcl8xIiwiU3BpblJlc3VsdHNMZXZlbF8xIiwiU3BpblJlc3VsdHNUb3VyXzEiLCJTcGluUmVzdWx0c0dhbWVXaGVlbF8xIiwiY2xhc3NfdHJhbnNmb3JtZXJfMiIsIlNwaW5SZXN1bHRzQmlnV2luQWRBd2FyZHNfMSIsIlNwaW5SZXN1bHRzQ2FyZF8xIiwiU3BpblJlc3VsdHNHYW1lXzEiLCJTcGluUmVzdWx0cyIsInNsb3RzIiwiamFja3BvdHMiLCJqYWNrcG90IiwiamFja3BvdExldmVsIiwid2luVHlwZSIsIndpbkNvaW5zIiwidXNlckNvaW5zIiwiZ2FtZU1vZGUiLCJmaW5pc2hlZENvdW50IiwidG90YWxDb3VudCIsImZyZWVUcmlnZ2VyIiwiY29sbGVjdGlibGVzIiwidGltZXN0YW1wIiwidG90YWxCZXROdW0iLCJsZXZlbCIsInRvdXIiLCJnYW1lV2hlZWwiLCJTcGluUmVzdWx0c1dpblR5cGUiLCJOb25lIiwiU3BpblJlc3VsdHNHYW1lTW9kZSIsIk5vcm1hbCIsIl9zbG90cyIsIl9qYWNrcG90cyIsIl9qYWNrcG90IiwiX2phY2twb3RMZXZlbCIsIl93aW5UeXBlIiwiX3dpbkNvaW5zIiwiX3VzZXJDb2lucyIsIl9wcmV2aW91c0dhbWVNb2RlIiwiX2dhbWVNb2RlIiwiX25leHRHYW1lTW9kZSIsIl9maW5pc2hlZENvdW50IiwiX3RvdGFsQ291bnQiLCJfdGltZXN0YW1wIiwiX3RvdGFsQmV0TnVtIiwiX2ZyZWVUcmlnZ2VyIiwiX2NvbGxlY3RpYmxlcyIsIl9sZXZlbCIsIl90b3VyIiwiX2dhbWVXaGVlbCIsIl9jYXJkcyIsInNldE5leHRHYW1lTW9kZSIsIm5leHRHYW1lTW9kZSIsImFkZENhcmQiLCJjYXJkSWQiLCJjYXJkSW1hZ2VVcmwiLCJpc05ldyIsImNvdW50IiwiY2FyZCIsIkFycmF5IiwiaXNBcnJheSIsInB1c2giLCJhZGRCaW5XaW5BZEF3YXJkcyIsImF3YXJkSWQiLCJwb2ludHMiLCJjb2lucyIsImNvdW50ZG93biIsIl9iaWdXaW5BZEF3YXJkcyIsImFkZFVubG9ja2VkR2FtZSIsImdhbWVJZCIsImdhbWVDb2RlIiwiaXNGcmVlIiwiaGFzSmFja3BvdCIsImphY2twb3QyIiwic3RhdHVzIiwiaXNUb3BHYW1lIiwiaXNWZXJ0aWNhbCIsIm9yZGVyTnVtIiwidmVyc2lvbiIsInVwZ3JhZGUiLCJnYW1lIiwidW5sb2NrZWRHYW1lcyIsIl9oaWdoU2NvcmUiLCJfcG9pbnRzIiwiX3VzZXJQb2ludHMiLCJfYmlnV2luQ29pbnMiLCJUeXBlIiwicHJvdG90eXBlIiwiRXhwb3NlIiwiTnVtYmVyIiwiRXhjbHVkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUNBLElBQUlBLFVBQVUsR0FBSSxVQUFRLFNBQUtBLFVBQWQsSUFBNkIsVUFBVUMsVUFBVixFQUFzQkMsTUFBdEIsRUFBOEJDLEdBQTlCLEVBQW1DQyxJQUFuQyxFQUF5QztBQUNuRixNQUFJQyxDQUFDLEdBQUdDLFNBQVMsQ0FBQ0Ms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V0FBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFNwaW5SZXN1bHRzV2luVHlwZV8xID0gcmVxdWlyZShcIi4vU3BpblJlc3VsdHNXaW5UeXBlXCIpO1xuY29uc3QgU3BpblJlc3VsdHNHYW1lTW9kZV8xID0gcmVxdWlyZShcIi4vU3BpblJlc3VsdHNHYW1lTW9kZVwiKTtcbmNvbnN0IFNwaW5SZXN1bHRzU2xvdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1NwaW5SZXN1bHRzU2xvdFwiKSk7XG5jb25zdCBTcGluUmVzdWx0c0ZyZWVUcmlnZ2VyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vU3BpblJlc3VsdHNGcmVlVHJpZ2dlclwiKSk7XG5jb25zdCBTcGluUmVzdWx0c0NvbGxlY3RpYmxlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vU3BpblJlc3VsdHNDb2xsZWN0aWJsZVwiKSk7XG5jb25zdCBjbGFzc190cmFuc2Zvcm1lcl8xID0gcmVxdWlyZShcImNsYXNzLXRyYW5zZm9ybWVyXCIpO1xuY29uc3QgU3BpblJlc3VsdHNMZXZlbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1NwaW5SZXN1bHRzTGV2ZWxcIikpO1xuY29uc3QgU3BpblJlc3VsdHNUb3VyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vU3BpblJlc3VsdHNUb3VyXCIpKTtcbmNvbnN0IFNwaW5SZXN1bHRzR2FtZVdoZWVsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vU3BpblJlc3VsdHNHYW1lV2hlZWxcIikpO1xuY29uc3QgY2xhc3NfdHJhbnNmb3JtZXJfMiA9IHJlcXVpcmUoXCJjbGFzcy10cmFuc2Zvcm1lclwiKTtcbmNvbnN0IFNwaW5SZXN1bHRzQmlnV2luQWRBd2FyZHNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9TcGluUmVzdWx0c0JpZ1dpbkFkQXdhcmRzXCIpKTtcbmNvbnN0IFNwaW5SZXN1bHRzQ2FyZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1NwaW5SZXN1bHRzQ2FyZFwiKSk7XG5jb25zdCBTcGluUmVzdWx0c0dhbWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9TcGluUmVzdWx0c0dhbWVcIikpO1xubGV0IFNwaW5SZXN1bHRzID0gY2xhc3MgU3BpblJlc3VsdHMge1xuICAgIGNvbnN0cnVjdG9yKHNsb3RzID0gW10sIGphY2twb3RzID0gW10sIGphY2twb3QgPSAwLCBqYWNrcG90TGV2ZWwgPSAtMSwgd2luVHlwZSA9IFNwaW5SZXN1bHRzV2luVHlwZV8xLlNwaW5SZXN1bHRzV2luVHlwZS5Ob25lLCB3aW5Db2lucyA9IDAsIHVzZXJDb2lucyA9IDAsIGdhbWVNb2RlID0gU3BpblJlc3VsdHNHYW1lTW9kZV8xLlNwaW5SZXN1bHRzR2FtZU1vZGUuTm9ybWFsLCBmaW5pc2hlZENvdW50ID0gMSwgdG90YWxDb3VudCA9IDEsIGZyZWVUcmlnZ2VyID0gbnVsbCwgY29sbGVjdGlibGVzID0gW10sIHRpbWVzdGFtcCA9IDAsIHRvdGFsQmV0TnVtID0gMCwgbGV2ZWwgPSBudWxsLCB0b3VyID0gbnVsbCwgZ2FtZVdoZWVsID0gbnVsbCkge1xuICAgICAgICB0aGlzLl9zbG90cyA9IFtdO1xuICAgICAgICB0aGlzLl9qYWNrcG90cyA9IFtdO1xuICAgICAgICB0aGlzLl9zbG90cyA9IHNsb3RzO1xuICAgICAgICB0aGlzLl9qYWNrcG90cyA9IGphY2twb3RzO1xuICAgICAgICB0aGlzLl9qYWNrcG90ID0gamFja3BvdDtcbiAgICAgICAgdGhpcy5famFja3BvdExldmVsID0gamFja3BvdExldmVsO1xuICAgICAgICB0aGlzLl93aW5UeXBlID0gd2luVHlwZTtcbiAgICAgICAgdGhpcy5fd2luQ29pbnMgPSB3aW5Db2lucztcbiAgICAgICAgdGhpcy5fdXNlckNvaW5zID0gdXNlckNvaW5zO1xuICAgICAgICB0aGlzLl9wcmV2aW91c0dhbWVNb2RlID0gZ2FtZU1vZGU7XG4gICAgICAgIHRoaXMuX2dhbWVNb2RlID0gZ2FtZU1vZGU7XG4gICAgICAgIHRoaXMuX25leHRHYW1lTW9kZSA9IGdhbWVNb2RlO1xuICAgICAgICB0aGlzLl9maW5pc2hlZENvdW50ID0gZmluaXNoZWRDb3VudDtcbiAgICAgICAgdGhpcy5fdG90YWxDb3VudCA9IHRvdGFsQ291bnQ7XG4gICAgICAgIHRoaXMuX3RpbWVzdGFtcCA9IHRpbWVzdGFtcDtcbiAgICAgICAgdGhpcy5fdG90YWxCZXROdW0gPSB0b3RhbEJldE51bTtcbiAgICAgICAgdGhpcy5fZnJlZVRyaWdnZXIgPSBmcmVlVHJpZ2dlcjtcbiAgICAgICAgdGhpcy5fY29sbGVjdGlibGVzID0gY29sbGVjdGlibGVzO1xuICAgICAgICB0aGlzLl9sZXZlbCA9IGxldmVsO1xuICAgICAgICB0aGlzLl90b3VyID0gdG91cjtcbiAgICAgICAgdGhpcy5fZ2FtZVdoZWVsID0gZ2FtZVdoZWVsO1xuICAgICAgICB0aGlzLl9jYXJkcyA9IFtdO1xuICAgIH1cbiAgICBnZXQgc2xvdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zbG90cztcbiAgICB9XG4gICAgc2V0IHNsb3RzKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3Nsb3RzID0gdmFsdWU7XG4gICAgICAgIGlmICghdGhpcy5fc2xvdHMpIHtcbiAgICAgICAgICAgIHRoaXMuX3Nsb3RzID0gW107XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W5aWW5rGg5pWw5o2uXG4gICAgICovXG4gICAgZ2V0IGphY2twb3RzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5famFja3BvdHM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiuvue9ruWlluaxoOaVsOaNrlxuICAgICAqL1xuICAgIHNldCBqYWNrcG90cyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9qYWNrcG90cyA9IHZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5ZqcOWlluWKsVxuICAgICAqL1xuICAgIGdldCBqYWNrcG90KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5famFja3BvdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6K6+572uanDlpZblirFcbiAgICAgKi9cbiAgICBzZXQgamFja3BvdCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9qYWNrcG90ID0gdmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPlmpw5Lit5aWW5qGj5qyhXG4gICAgICovXG4gICAgZ2V0IGphY2twb3RMZXZlbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2phY2twb3RMZXZlbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6K6+572uanDkuK3lpZbmoaPmrKFcbiAgICAgKi9cbiAgICBzZXQgamFja3BvdExldmVsKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2phY2twb3RMZXZlbCA9IHZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5botaLnmoTnsbvlnotcbiAgICAgKi9cbiAgICBnZXQgd2luVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dpblR5cGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiuvue9rui1oueahOexu+Wei1xuICAgICAqL1xuICAgIHNldCB3aW5UeXBlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3dpblR5cGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W6LWi5Y+W6YeR5biB5pWwXG4gICAgICovXG4gICAgZ2V0IHdpbkNvaW5zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fd2luQ29pbnM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiuvue9rui1ouWPlumHkeW4geaVsFxuICAgICAqL1xuICAgIHNldCB3aW5Db2lucyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl93aW5Db2lucyA9IHZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5bnlKjmiLfph5HluIHmlbBcbiAgICAgKi9cbiAgICBnZXQgdXNlckNvaW5zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdXNlckNvaW5zO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDorr7nva7nlKjmiLfph5HluIHmlbBcbiAgICAgKi9cbiAgICBzZXQgdXNlckNvaW5zKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3VzZXJDb2lucyA9IHZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5bmuLjmiI/nsbvlnotcbiAgICAgKi9cbiAgICBnZXQgcHJldmlvdXNHYW1lTW9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByZXZpb3VzR2FtZU1vZGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiuvue9rua4uOaIj+exu+Wei1xuICAgICAqL1xuICAgIHNldCBwcmV2aW91c0dhbWVNb2RlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3ByZXZpb3VzR2FtZU1vZGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W5ri45oiP57G75Z6LXG4gICAgICovXG4gICAgZ2V0IGdhbWVNb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2FtZU1vZGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiuvue9rua4uOaIj+exu+Wei1xuICAgICAqL1xuICAgIHNldCBnYW1lTW9kZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9nYW1lTW9kZSA9IHZhbHVlO1xuICAgICAgICBpZiAodGhpcy5fc2xvdHMgJiYgdGhpcy5fc2xvdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9zbG90cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Nsb3RzW2ldLmdhbWVNb2RlID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W5LiL5Zue5ZCI5ri45oiP57G75Z6LXG4gICAgICovXG4gICAgZ2V0IG5leHRHYW1lTW9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25leHRHYW1lTW9kZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6K6+572u5LiL5Zue5ZCI5ri45oiP57G75Z6LXG4gICAgICovXG4gICAgc2V0IG5leHRHYW1lTW9kZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9uZXh0R2FtZU1vZGUgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMuX3Nsb3RzICYmIHRoaXMuX3Nsb3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fc2xvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zbG90c1tpXS5uZXh0R2FtZU1vZGUgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5blt7LlrozmiJDmrKHmlbBcbiAgICAgKi9cbiAgICBnZXQgZmluaXNoZWRDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbmlzaGVkQ291bnQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiuvue9ruW3suWujOaIkOasoeaVsFxuICAgICAqL1xuICAgIHNldCBmaW5pc2hlZENvdW50KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2ZpbmlzaGVkQ291bnQgPSB2YWx1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W5oC75qyh5pWwXG4gICAgICovXG4gICAgZ2V0IHRvdGFsQ291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90b3RhbENvdW50O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDorr7nva7mgLvmrKHmlbBcbiAgICAgKi9cbiAgICBzZXQgdG90YWxDb3VudCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl90b3RhbENvdW50ID0gdmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPluaXtumXtOaIsyhtcylcbiAgICAgKi9cbiAgICBnZXQgdGltZXN0YW1wKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGltZXN0YW1wO1xuICAgIH1cbiAgICBzZXQgdGltZXN0YW1wKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3RpbWVzdGFtcCA9IHZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5bkuIvms6jmlbBcbiAgICAgKi9cbiAgICBnZXQgdG90YWxCZXROdW0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90b3RhbEJldE51bTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6K6+572u5LiL5rOo5pWwXG4gICAgICovXG4gICAgc2V0IHRvdGFsQmV0TnVtKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3RvdGFsQmV0TnVtID0gdmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPluWOhuWPsuacgOmrmOWIhlxuICAgICAqL1xuICAgIGdldCBoaWdoU2NvcmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oaWdoU2NvcmU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiuvue9ruWOhuWPsuacgOmrmOWIhlxuICAgICAqL1xuICAgIHNldCBoaWdoU2NvcmUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5faGlnaFNjb3JlID0gdmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOa4uOaIj+enr+WIhlxuICAgICAqXG4gICAgICogQHJlYWRvbmx5XG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgU3BpblJlc3VsdHNcbiAgICAgKi9cbiAgICBnZXQgcG9pbnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9pbnRzO1xuICAgIH1cbiAgICBzZXQgcG9pbnRzKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3BvaW50cyA9IHZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDnlKjmiLfmgLvmuLjmiI/np6/liIZcbiAgICAgKlxuICAgICAqIEByZWFkb25seVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIFNwaW5SZXN1bHRzXG4gICAgICovXG4gICAgZ2V0IHVzZXJQb2ludHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl91c2VyUG9pbnRzO1xuICAgIH1cbiAgICBzZXQgdXNlclBvaW50cyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl91c2VyUG9pbnRzID0gdmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJpZ1dpbumHkeW4geaVsFxuICAgICAqXG4gICAgICogQHJlYWRvbmx5XG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgU3BpblJlc3VsdHNcbiAgICAgKi9cbiAgICBnZXQgYmlnV2luQ29pbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iaWdXaW5Db2lucztcbiAgICB9XG4gICAgc2V0IGJpZ1dpbkNvaW5zKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2JpZ1dpbkNvaW5zID0gdmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPluWFjei0uea4uOaIj+inpuWPkeWZqFxuICAgICAqL1xuICAgIGdldCBmcmVlVHJpZ2dlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZyZWVUcmlnZ2VyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDorr7nva7lhY3otLnmuLjmiI/op6blj5HlmahcbiAgICAgKi9cbiAgICBzZXQgZnJlZVRyaWdnZXIodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZnJlZVRyaWdnZXIgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5zZXROZXh0R2FtZU1vZGUoKTtcbiAgICB9XG4gICAgc2V0TmV4dEdhbWVNb2RlKCkge1xuICAgICAgICBpZiAodGhpcy5fZnJlZVRyaWdnZXIgJiYgdGhpcy5fc2xvdHMgJiYgdGhpcy5fc2xvdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9zbG90cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Nsb3RzW2ldLm5leHRHYW1lTW9kZSA9IHRoaXMuX2ZyZWVUcmlnZ2VyLmdhbWVNb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPluaUtumbhuWAvOWIl+ihqFxuICAgICAqL1xuICAgIGdldCBjb2xsZWN0aWJsZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2xsZWN0aWJsZXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiuvue9ruaUtumbhuWAvOWIl+ihqFxuICAgICAqL1xuICAgIHNldCBjb2xsZWN0aWJsZXModmFsdWUpIHtcbiAgICAgICAgdGhpcy5fY29sbGVjdGlibGVzID0gdmFsdWU7XG4gICAgICAgIGlmICghdGhpcy5fY29sbGVjdGlibGVzKSB7XG4gICAgICAgICAgICB0aGlzLl9jb2xsZWN0aWJsZXMgPSBbXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5bnrYnnuqdcbiAgICAgKi9cbiAgICBnZXQgbGV2ZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sZXZlbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6K6+572u562J57qnXG4gICAgICovXG4gICAgc2V0IGxldmVsKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2xldmVsID0gdmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPluW3oeWbnui1m+aVsOaNrlxuICAgICAqL1xuICAgIGdldCB0b3VyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdG91cjtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6K6+572u5beh5Zue6LWbXG4gICAgICovXG4gICAgc2V0IHRvdXIodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdG91ciA9IHZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5bmuLjmiI/lhoXovaznm5hcbiAgICAgKi9cbiAgICBnZXQgZ2FtZVdoZWVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2FtZVdoZWVsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDorr7nva7muLjmiI/lhoXovaznm5hcbiAgICAgKi9cbiAgICBzZXQgZ2FtZVdoZWVsKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2dhbWVXaGVlbCA9IHZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflvpfnmoTljaHniYxcbiAgICAgKlxuICAgICAqIEByZWFkb25seVxuICAgICAqIEB0eXBlIHtTcGluUmVzdWx0c0NhcmRbXX1cbiAgICAgKiBAbWVtYmVyb2YgU3BpblJlc3VsdHNcbiAgICAgKi9cbiAgICBnZXQgY2FyZHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYXJkcztcbiAgICB9XG4gICAgc2V0IGNhcmRzKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2NhcmRzID0gdmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOa3u+WKoOWNoeeJjFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNhcmRJZCDljaHniYxJRFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjYXJkSW1hZ2VVcmwg5Y2h54mM5Zu+54mH5Zyw5Z2AXG4gICAgICogQG1lbWJlcm9mIFNwaW5SZXN1bHRzXG4gICAgICovXG4gICAgYWRkQ2FyZChjYXJkSWQsIGNhcmRJbWFnZVVybCwgaXNOZXcgPSB0cnVlLCBjb3VudCA9IDEpIHtcbiAgICAgICAgY29uc3QgY2FyZCA9IG5ldyBTcGluUmVzdWx0c0NhcmRfMS5kZWZhdWx0KGNhcmRJZCwgY2FyZEltYWdlVXJsLCBpc05ldywgY291bnQpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLl9jYXJkcykpIHtcbiAgICAgICAgICAgIHRoaXMuX2NhcmRzLnB1c2goY2FyZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9jYXJkcyA9IFtjYXJkXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBCaW5XaW7nnIvlub/lkYrlpZblirFcbiAgICAgKlxuICAgICAqIEByZWFkb25seVxuICAgICAqIEB0eXBlIHtTcGluUmVzdWx0c0JpZ1dpbkFkQXdhcmRzfVxuICAgICAqIEBtZW1iZXJvZiBTcGluUmVzdWx0c1xuICAgICAqL1xuICAgIGdldCBiaWdXaW5BZEF3YXJkcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JpZ1dpbkFkQXdhcmRzO1xuICAgIH1cbiAgICBzZXQgYmlnV2luQWRBd2FyZHModmFsdWUpIHtcbiAgICAgICAgdGhpcy5fYmlnV2luQWRBd2FyZHMgPSB2YWx1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5re75YqgQmluV2lu55yL5bm/5ZGK5aWW5YqxXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXdhcmRJZCDlpZblirFJRFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwb2ludHMg5aWW5Yqx55qE5ri45oiP56ev5YiGXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvaW5zIOWlluWKseeahOmHkeW4gVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudGRvd24g5by556qX5YCS6K6h5pe2XG4gICAgICogQG1lbWJlcm9mIFNwaW5SZXN1bHRzXG4gICAgICovXG4gICAgYWRkQmluV2luQWRBd2FyZHMoYXdhcmRJZCwgcG9pbnRzLCBjb2lucywgY291bnRkb3duKSB7XG4gICAgICAgIHRoaXMuX2JpZ1dpbkFkQXdhcmRzID0gbmV3IFNwaW5SZXN1bHRzQmlnV2luQWRBd2FyZHNfMS5kZWZhdWx0KGF3YXJkSWQsIHBvaW50cywgY29pbnMsIGNvdW50ZG93bik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOa3u+WKoOino+mUgeWFs+WNoVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGdhbWVJZCDlhbPljaFJRFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBnYW1lQ29kZSDlhbPljaHku6Plj7dcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzRnJlZSDmmK/lkKblhY3otLlcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGhhc0phY2twb3Qg5piv5ZCm5pyJ5aWW5rGgXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGphY2twb3Qg5aWW5rGg6YeR6aKdXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGphY2twb3QyIOWlluaxoOmHkeminVxuICAgICAqIEBwYXJhbSB7U3BpblJlc3VsdHNHYW1lU3RhdHVzfSBzdGF0dXMg5YWz5Y2h54q25oCBXG4gICAgICogQHBhcmFtIHtib29sZWFufSBpc1RvcEdhbWVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzVmVydGljYWxcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb3JkZXJOdW1cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmVyc2lvblxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqIEBtZW1iZXJvZiBTcGluUmVzdWx0c1xuICAgICAqL1xuICAgIGFkZFVubG9ja2VkR2FtZShnYW1lSWQsIGdhbWVDb2RlLCBpc0ZyZWUsIGhhc0phY2twb3QsIGphY2twb3QsIGphY2twb3QyLCBzdGF0dXMsIGlzVG9wR2FtZSwgaXNWZXJ0aWNhbCwgb3JkZXJOdW0sIHZlcnNpb24pIHtcbiAgICAgICAgaWYgKCF0aGlzLmxldmVsIHx8ICF0aGlzLmxldmVsLnVwZ3JhZGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBnYW1lID0gbmV3IFNwaW5SZXN1bHRzR2FtZV8xLmRlZmF1bHQoZ2FtZUlkLCBnYW1lQ29kZSwgaXNGcmVlLCBoYXNKYWNrcG90LCBqYWNrcG90LCBqYWNrcG90Miwgc3RhdHVzLCBpc1RvcEdhbWUsIGlzVmVydGljYWwsIG9yZGVyTnVtLCB2ZXJzaW9uKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5fbGV2ZWwudXBncmFkZS51bmxvY2tlZEdhbWVzKSkge1xuICAgICAgICAgICAgdGhpcy5sZXZlbC51cGdyYWRlLnVubG9ja2VkR2FtZXMucHVzaChnYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWwudXBncmFkZS51bmxvY2tlZEdhbWVzID0gW2dhbWVdO1xuICAgICAgICB9XG4gICAgfVxufTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzEuVHlwZSgoKSA9PiBTcGluUmVzdWx0c1Nsb3RfMS5kZWZhdWx0KSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQXJyYXkpXG5dLCBTcGluUmVzdWx0cy5wcm90b3R5cGUsIFwiX3Nsb3RzXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLlR5cGUoKCkgPT4gU3BpblJlc3VsdHNCaWdXaW5BZEF3YXJkc18xLmRlZmF1bHQpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTcGluUmVzdWx0c0JpZ1dpbkFkQXdhcmRzXzEuZGVmYXVsdClcbl0sIFNwaW5SZXN1bHRzLnByb3RvdHlwZSwgXCJfYmlnV2luQWRBd2FyZHNcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzEuVHlwZSgoKSA9PiBTcGluUmVzdWx0c0NhcmRfMS5kZWZhdWx0KSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQXJyYXkpXG5dLCBTcGluUmVzdWx0cy5wcm90b3R5cGUsIFwiX2NhcmRzXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLlR5cGUoKCkgPT4gU3BpblJlc3VsdHNGcmVlVHJpZ2dlcl8xLmRlZmF1bHQpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTcGluUmVzdWx0c0ZyZWVUcmlnZ2VyXzEuZGVmYXVsdClcbl0sIFNwaW5SZXN1bHRzLnByb3RvdHlwZSwgXCJfZnJlZVRyaWdnZXJcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzEuVHlwZSgoKSA9PiBTcGluUmVzdWx0c0NvbGxlY3RpYmxlXzEuZGVmYXVsdCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEFycmF5KVxuXSwgU3BpblJlc3VsdHMucHJvdG90eXBlLCBcIl9jb2xsZWN0aWJsZXNcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzEuVHlwZSgoKSA9PiBTcGluUmVzdWx0c0xldmVsXzEuZGVmYXVsdCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFNwaW5SZXN1bHRzTGV2ZWxfMS5kZWZhdWx0KVxuXSwgU3BpblJlc3VsdHMucHJvdG90eXBlLCBcIl9sZXZlbFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMS5UeXBlKCgpID0+IFNwaW5SZXN1bHRzVG91cl8xLmRlZmF1bHQpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTcGluUmVzdWx0c1RvdXJfMS5kZWZhdWx0KVxuXSwgU3BpblJlc3VsdHMucHJvdG90eXBlLCBcIl90b3VyXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLlR5cGUoKCkgPT4gU3BpblJlc3VsdHNHYW1lV2hlZWxfMS5kZWZhdWx0KSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3BpblJlc3VsdHNHYW1lV2hlZWxfMS5kZWZhdWx0KVxuXSwgU3BpblJlc3VsdHMucHJvdG90eXBlLCBcIl9nYW1lV2hlZWxcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzIuRXhwb3NlKCksXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMS5UeXBlKCgpID0+IFNwaW5SZXN1bHRzU2xvdF8xLmRlZmF1bHQpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBBcnJheSksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtBcnJheV0pXG5dLCBTcGluUmVzdWx0cy5wcm90b3R5cGUsIFwic2xvdHNcIiwgbnVsbCk7XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8yLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBBcnJheSksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtBcnJheV0pXG5dLCBTcGluUmVzdWx0cy5wcm90b3R5cGUsIFwiamFja3BvdHNcIiwgbnVsbCk7XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8yLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbTnVtYmVyXSlcbl0sIFNwaW5SZXN1bHRzLnByb3RvdHlwZSwgXCJqYWNrcG90XCIsIG51bGwpO1xuX19kZWNvcmF0ZShbXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMi5FeHBvc2UoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgTnVtYmVyKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW051bWJlcl0pXG5dLCBTcGluUmVzdWx0cy5wcm90b3R5cGUsIFwiamFja3BvdExldmVsXCIsIG51bGwpO1xuX19kZWNvcmF0ZShbXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMi5FeHBvc2UoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgTnVtYmVyKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW051bWJlcl0pXG5dLCBTcGluUmVzdWx0cy5wcm90b3R5cGUsIFwid2luVHlwZVwiLCBudWxsKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzIuRXhwb3NlKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE51bWJlciksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtOdW1iZXJdKVxuXSwgU3BpblJlc3VsdHMucHJvdG90eXBlLCBcIndpbkNvaW5zXCIsIG51bGwpO1xuX19kZWNvcmF0ZShbXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMi5FeHBvc2UoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgTnVtYmVyKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW051bWJlcl0pXG5dLCBTcGluUmVzdWx0cy5wcm90b3R5cGUsIFwidXNlckNvaW5zXCIsIG51bGwpO1xuX19kZWNvcmF0ZShbXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMi5FeHBvc2UoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgTnVtYmVyKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW051bWJlcl0pXG5dLCBTcGluUmVzdWx0cy5wcm90b3R5cGUsIFwicHJldmlvdXNHYW1lTW9kZVwiLCBudWxsKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzIuRXhwb3NlKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE51bWJlciksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtOdW1iZXJdKVxuXSwgU3BpblJlc3VsdHMucHJvdG90eXBlLCBcImdhbWVNb2RlXCIsIG51bGwpO1xuX19kZWNvcmF0ZShbXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMi5FeHBvc2UoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgTnVtYmVyKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW051bWJlcl0pXG5dLCBTcGluUmVzdWx0cy5wcm90b3R5cGUsIFwibmV4dEdhbWVNb2RlXCIsIG51bGwpO1xuX19kZWNvcmF0ZShbXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMi5FeHBvc2UoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgTnVtYmVyKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW051bWJlcl0pXG5dLCBTcGluUmVzdWx0cy5wcm90b3R5cGUsIFwiZmluaXNoZWRDb3VudFwiLCBudWxsKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzIuRXhwb3NlKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE51bWJlciksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtOdW1iZXJdKVxuXSwgU3BpblJlc3VsdHMucHJvdG90eXBlLCBcInRvdGFsQ291bnRcIiwgbnVsbCk7XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8yLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbTnVtYmVyXSlcbl0sIFNwaW5SZXN1bHRzLnByb3RvdHlwZSwgXCJ0aW1lc3RhbXBcIiwgbnVsbCk7XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8yLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbTnVtYmVyXSlcbl0sIFNwaW5SZXN1bHRzLnByb3RvdHlwZSwgXCJ0b3RhbEJldE51bVwiLCBudWxsKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzIuRXhwb3NlKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE51bWJlciksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtOdW1iZXJdKVxuXSwgU3BpblJlc3VsdHMucHJvdG90eXBlLCBcImhpZ2hTY29yZVwiLCBudWxsKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzIuRXhwb3NlKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE51bWJlciksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtOdW1iZXJdKVxuXSwgU3BpblJlc3VsdHMucHJvdG90eXBlLCBcInBvaW50c1wiLCBudWxsKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzIuRXhwb3NlKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE51bWJlciksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtOdW1iZXJdKVxuXSwgU3BpblJlc3VsdHMucHJvdG90eXBlLCBcInVzZXJQb2ludHNcIiwgbnVsbCk7XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8yLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbTnVtYmVyXSlcbl0sIFNwaW5SZXN1bHRzLnByb3RvdHlwZSwgXCJiaWdXaW5Db2luc1wiLCBudWxsKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzEuVHlwZSgoKSA9PiBTcGluUmVzdWx0c0ZyZWVUcmlnZ2VyXzEuZGVmYXVsdCksXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMi5FeHBvc2UoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3BpblJlc3VsdHNGcmVlVHJpZ2dlcl8xLmRlZmF1bHQpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbU3BpblJlc3VsdHNGcmVlVHJpZ2dlcl8xLmRlZmF1bHRdKVxuXSwgU3BpblJlc3VsdHMucHJvdG90eXBlLCBcImZyZWVUcmlnZ2VyXCIsIG51bGwpO1xuX19kZWNvcmF0ZShbXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMS5UeXBlKCgpID0+IFNwaW5SZXN1bHRzQ29sbGVjdGlibGVfMS5kZWZhdWx0KSxcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8yLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBBcnJheSksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtBcnJheV0pXG5dLCBTcGluUmVzdWx0cy5wcm90b3R5cGUsIFwiY29sbGVjdGlibGVzXCIsIG51bGwpO1xuX19kZWNvcmF0ZShbXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMS5UeXBlKCgpID0+IFNwaW5SZXN1bHRzTGV2ZWxfMS5kZWZhdWx0KSxcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8yLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTcGluUmVzdWx0c0xldmVsXzEuZGVmYXVsdCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtTcGluUmVzdWx0c0xldmVsXzEuZGVmYXVsdF0pXG5dLCBTcGluUmVzdWx0cy5wcm90b3R5cGUsIFwibGV2ZWxcIiwgbnVsbCk7XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLlR5cGUoKCkgPT4gU3BpblJlc3VsdHNUb3VyXzEuZGVmYXVsdCksXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMi5FeHBvc2UoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3BpblJlc3VsdHNUb3VyXzEuZGVmYXVsdCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtTcGluUmVzdWx0c1RvdXJfMS5kZWZhdWx0XSlcbl0sIFNwaW5SZXN1bHRzLnByb3RvdHlwZSwgXCJ0b3VyXCIsIG51bGwpO1xuX19kZWNvcmF0ZShbXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMS5UeXBlKCgpID0+IFNwaW5SZXN1bHRzR2FtZVdoZWVsXzEuZGVmYXVsdCksXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMi5FeHBvc2UoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3BpblJlc3VsdHNHYW1lV2hlZWxfMS5kZWZhdWx0KSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW1NwaW5SZXN1bHRzR2FtZVdoZWVsXzEuZGVmYXVsdF0pXG5dLCBTcGluUmVzdWx0cy5wcm90b3R5cGUsIFwiZ2FtZVdoZWVsXCIsIG51bGwpO1xuX19kZWNvcmF0ZShbXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMS5UeXBlKCgpID0+IFNwaW5SZXN1bHRzQ2FyZF8xLmRlZmF1bHQpLFxuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzIuRXhwb3NlKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEFycmF5KSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW0FycmF5XSlcbl0sIFNwaW5SZXN1bHRzLnByb3RvdHlwZSwgXCJjYXJkc1wiLCBudWxsKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzEuVHlwZSgoKSA9PiBTcGluUmVzdWx0c0JpZ1dpbkFkQXdhcmRzXzEuZGVmYXVsdCksXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMi5FeHBvc2UoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3BpblJlc3VsdHNCaWdXaW5BZEF3YXJkc18xLmRlZmF1bHQpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbU3BpblJlc3VsdHNCaWdXaW5BZEF3YXJkc18xLmRlZmF1bHRdKVxuXSwgU3BpblJlc3VsdHMucHJvdG90eXBlLCBcImJpZ1dpbkFkQXdhcmRzXCIsIG51bGwpO1xuU3BpblJlc3VsdHMgPSBfX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8yLkV4Y2x1ZGUoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW0FycmF5LCBBcnJheSwgTnVtYmVyLCBOdW1iZXIsIE51bWJlciwgTnVtYmVyLCBOdW1iZXIsIE51bWJlciwgTnVtYmVyLCBOdW1iZXIsIFNwaW5SZXN1bHRzRnJlZVRyaWdnZXJfMS5kZWZhdWx0LCBBcnJheSwgTnVtYmVyLCBOdW1iZXIsIFNwaW5SZXN1bHRzTGV2ZWxfMS5kZWZhdWx0LFxuICAgICAgICBTcGluUmVzdWx0c1RvdXJfMS5kZWZhdWx0LFxuICAgICAgICBTcGluUmVzdWx0c0dhbWVXaGVlbF8xLmRlZmF1bHRdKVxuXSwgU3BpblJlc3VsdHMpO1xuZXhwb3J0cy5kZWZhdWx0ID0gU3BpblJlc3VsdHM7XG4iXX0=