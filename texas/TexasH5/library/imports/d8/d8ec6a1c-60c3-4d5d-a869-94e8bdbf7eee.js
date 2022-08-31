"use strict";
cc._RF.push(module, 'd8ec6ocYMNNXahplOi9v37u', 'SpinResultsBigWinAdAwards');
// Script/modules/spin-result/SpinResultsBigWinAdAwards.js

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

var SpinResultsBigWinAdAwards = /*#__PURE__*/function () {
  function SpinResultsBigWinAdAwards(_awardId, _points, _coins, _countdown) {
    this._awardId = _awardId;
    this._points = _points;
    this._coins = _coins;
    this._countdown = _countdown;
  }
  /**
   * 奖励ID
   *
   * @readonly
   * @type {string}
   * @memberof SpinResultsBigWinAdAwards
   */


  _createClass(SpinResultsBigWinAdAwards, [{
    key: "awardId",
    get: function get() {
      return this._awardId;
    },
    set: function set(value) {
      this._awardId = value;
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
     * 奖励的金币
     *
     * @readonly
     * @type {number}
     * @memberof SpinResultsBigWinAdAwards
     */

  }, {
    key: "coins",
    get: function get() {
      return this._coins;
    },
    set: function set(value) {
      this._coins = value;
    }
    /**
     * 弹窗倒计时, 单位秒
     *
     * @readonly
     * @type {number}
     * @memberof SpinResultsBigWinAdAwards
     */

  }, {
    key: "countdown",
    get: function get() {
      return this._countdown;
    },
    set: function set(value) {
      this._countdown = value;
    }
  }]);

  return SpinResultsBigWinAdAwards;
}();

__decorate([class_transformer_1.Expose(), __metadata("design:type", String), __metadata("design:paramtypes", [String])], SpinResultsBigWinAdAwards.prototype, "awardId", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsBigWinAdAwards.prototype, "points", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsBigWinAdAwards.prototype, "coins", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsBigWinAdAwards.prototype, "countdown", null);

SpinResultsBigWinAdAwards = __decorate([class_transformer_1.Exclude(), __metadata("design:paramtypes", [String, Number, Number, Number])], SpinResultsBigWinAdAwards);
exports["default"] = SpinResultsBigWinAdAwards;

cc._RF.pop();