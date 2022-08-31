"use strict";
cc._RF.push(module, 'a99340pPehJDY2eRwD5qH3a', 'SpinResultsUpgrade');
// Script/modules/spin-result/SpinResultsUpgrade.js

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

var class_transformer_1 = require("class-transformer");

var SpinResultsGame_1 = __importDefault(require("./SpinResultsGame"));

var SpinResultsUpgrade = /*#__PURE__*/function () {
  function SpinResultsUpgrade(level, award, vipRatio, awardCollectId) {
    this._level = level;
    this._award = award;
    this._vipRatio = vipRatio;
    this._awardCollectId = awardCollectId;
    this._unlockedGames = [];
  }

  var _proto = SpinResultsUpgrade.prototype;

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
   * @memberof SpinResultsUpgrade
   */
  _proto.addUnlockedGame = function addUnlockedGame(gameId, gameCode, isFree, hasJackpot, jackpot, jackpot2, status, isTopGame, isVertical, orderNum, version) {
    var game = new SpinResultsGame_1["default"](gameId, gameCode, isFree, hasJackpot, jackpot, jackpot2, status, isTopGame, isVertical, orderNum, version);

    this._unlockedGames.push(game);
  };

  _createClass(SpinResultsUpgrade, [{
    key: "level",
    get: function get() {
      return this._level;
    },
    set: function set(value) {
      this._level = value;
    }
  }, {
    key: "award",
    get: function get() {
      return this._award;
    },
    set: function set(value) {
      this._award = value;
    }
  }, {
    key: "vipRatio",
    get: function get() {
      return this._vipRatio;
    },
    set: function set(value) {
      this._vipRatio = value;
    }
  }, {
    key: "awardCollectId",
    get: function get() {
      return this._awardCollectId;
    },
    set: function set(value) {
      this._awardCollectId = value;
    }
  }, {
    key: "maxBet",
    get: function get() {
      return this._maxBet;
    },
    set: function set(value) {
      this._maxBet = value;
    }
    /**
     * 获得的游戏积分
     *
     * @readonly
     * @type {number}
     * @memberof SpinResultsUpgrade
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
     * 大升级弹窗倒计时
     *
     * @readonly
     * @type {number}
     * @memberof SpinResultsUpgrade
     */

  }, {
    key: "countdown",
    get: function get() {
      return this._countdown;
    },
    set: function set(value) {
      this._countdown = value;
    }
    /**
     * 解锁的关卡
     *
     * @readonly
     * @type {SpinResultsGame[]}
     * @memberof SpinResultsUpgrade
     */

  }, {
    key: "unlockedGames",
    get: function get() {
      return this._unlockedGames;
    },
    set: function set(value) {
      this._unlockedGames = value;
    }
  }]);

  return SpinResultsUpgrade;
}();

__decorate([class_transformer_1.Type(function () {
  return SpinResultsGame_1["default"];
}), __metadata("design:type", Array)], SpinResultsUpgrade.prototype, "_unlockedGames", void 0);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsUpgrade.prototype, "level", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsUpgrade.prototype, "award", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsUpgrade.prototype, "vipRatio", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", String), __metadata("design:paramtypes", [String])], SpinResultsUpgrade.prototype, "awardCollectId", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsUpgrade.prototype, "maxBet", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsUpgrade.prototype, "points", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsUpgrade.prototype, "countdown", null);

__decorate([class_transformer_1.Type(function () {
  return SpinResultsGame_1["default"];
}), class_transformer_1.Expose(), __metadata("design:type", Array), __metadata("design:paramtypes", [Array])], SpinResultsUpgrade.prototype, "unlockedGames", null);

SpinResultsUpgrade = __decorate([class_transformer_1.Exclude(), __metadata("design:paramtypes", [Number, Number, Number, String])], SpinResultsUpgrade);
exports["default"] = SpinResultsUpgrade;

cc._RF.pop();