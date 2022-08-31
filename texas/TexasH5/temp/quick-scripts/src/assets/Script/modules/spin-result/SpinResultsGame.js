"use strict";
cc._RF.push(module, '1ed3cCHPFVHEbcdtsHguT09', 'SpinResultsGame');
// Script/modules/spin-result/SpinResultsGame.js

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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var class_transformer_1 = require("class-transformer");

var SpinResultsGameStatus_1 = require("./SpinResultsGameStatus");

var SpinResultsGame = /*#__PURE__*/function () {
  function SpinResultsGame(_id, _code, _isFree, _hasJackpot, _jackpot, _jackpot2, _status, _isTopGame, _isVertical, _orderNumber, _version) {
    this._id = _id;
    this._code = _code;
    this._isFree = _isFree;
    this._hasJackpot = _hasJackpot;
    this._jackpot = _jackpot;
    this._jackpot2 = _jackpot2;
    this._status = _status;
    this._isTopGame = _isTopGame;
    this._isVertical = _isVertical;
    this._orderNumber = _orderNumber;
    this._version = _version;
  }
  /**
   * 关卡ID
   *
   * @readonly
   * @type {string}
   * @memberof SpinResultsGame
   */


  _createClass(SpinResultsGame, [{
    key: "id",
    get: function get() {
      return this._id;
    },
    set: function set(value) {
      this._id = value;
    }
    /**
     * 关卡代号
     *
     * @readonly
     * @type {string}
     * @memberof SpinResultsGame
     */

  }, {
    key: "code",
    get: function get() {
      return this._code;
    },
    set: function set(value) {
      this._code = value;
    }
    /**
     * 奖池金额1
     *
     * @readonly
     * @type {string}
     * @memberof SpinResultsGame
     */

  }, {
    key: "jackpot",
    get: function get() {
      return this._jackpot;
    },
    set: function set(value) {
      this._jackpot = value;
    }
    /**
     * 奖池金额2
     *
     * @readonly
     * @type {string}
     * @memberof SpinResultsGame
     */

  }, {
    key: "jackpot2",
    get: function get() {
      return this._jackpot2;
    },
    set: function set(value) {
      this._jackpot2 = value;
    }
    /**
     * 是否有奖池
     *
     * @readonly
     * @type {boolean}
     * @memberof SpinResultsGame
     */

  }, {
    key: "hasJackpot",
    get: function get() {
      return this._hasJackpot;
    },
    set: function set(value) {
      this._hasJackpot = value;
    }
    /**
     * 是否免费
     *
     * @readonly
     * @type {boolean}
     * @memberof SpinResultsGame
     */

  }, {
    key: "isFree",
    get: function get() {
      return this._isFree;
    },
    set: function set(value) {
      this._isFree = value;
    }
    /**
     * 是否免费
     *
     * @readonly
     * @type {boolean}
     * @memberof SpinResultsGame
     */

  }, {
    key: "status",
    get: function get() {
      return this._status;
    },
    set: function set(value) {
      this._status = value;
    }
    /**
     * 是否置顶游戏
     *
     * @readonly
     * @type {boolean}
     * @memberof SpinResultsGame
     */

  }, {
    key: "isTopGame",
    get: function get() {
      return this._isTopGame;
    },
    set: function set(value) {
      this._isTopGame = value;
    }
    /**
     * 是否竖屏
     *
     * @readonly
     * @type {boolean}
     * @memberof SpinResultsGame
     */

  }, {
    key: "isVertical",
    get: function get() {
      return this._isVertical;
    },
    set: function set(value) {
      this._isVertical = value;
    }
    /**
     * 关卡顺序，解锁等级
     *
     * @readonly
     * @type {number}
     * @memberof SpinResultsUpgrade
     */

  }, {
    key: "orderNumber",
    get: function get() {
      return this._orderNumber;
    },
    set: function set(value) {
      this._orderNumber = value;
    }
    /**
     * 版本号
     *
     * @readonly
     * @type {string}
     * @memberof SpinResultsGame
     */

  }, {
    key: "version",
    get: function get() {
      return this._version;
    },
    set: function set(value) {
      this._version = value;
    }
  }]);

  return SpinResultsGame;
}();

__decorate([class_transformer_1.Expose(), __metadata("design:type", String), __metadata("design:paramtypes", [String])], SpinResultsGame.prototype, "id", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", String), __metadata("design:paramtypes", [String])], SpinResultsGame.prototype, "code", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", String), __metadata("design:paramtypes", [String])], SpinResultsGame.prototype, "jackpot", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", String), __metadata("design:paramtypes", [String])], SpinResultsGame.prototype, "jackpot2", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], SpinResultsGame.prototype, "hasJackpot", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], SpinResultsGame.prototype, "isFree", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsGame.prototype, "status", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], SpinResultsGame.prototype, "isTopGame", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], SpinResultsGame.prototype, "isVertical", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsGame.prototype, "orderNumber", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", String), __metadata("design:paramtypes", [String])], SpinResultsGame.prototype, "version", null);

SpinResultsGame = __decorate([class_transformer_1.Exclude(), __metadata("design:paramtypes", [String, String, Boolean, Boolean, String, String, Number, Boolean, Boolean, Number, String])], SpinResultsGame);
exports["default"] = SpinResultsGame;

cc._RF.pop();