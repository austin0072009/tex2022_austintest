"use strict";
cc._RF.push(module, '193d300cU1Gp6CVvC07Umb6', 'SpinResultsCell');
// Script/modules/spin-result/SpinResultsCell.js

"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

var SpinResultsSymbol_1 = __importDefault(require("./SpinResultsSymbol"));

var SpinResultsWheel_1 = __importDefault(require("./SpinResultsWheel"));

var SpinResultsEvent_1 = __importDefault(require("./SpinResultsEvent"));

var class_transformer_1 = require("class-transformer");

var SpinResultCell = /*#__PURE__*/function (_SpinResultsSymbol_1$) {
  _inheritsLoose(SpinResultCell, _SpinResultsSymbol_1$);

  function SpinResultCell(code, fixed, mockCodes, assets, extraCode, extraAssets, extraPosition, wheel, events, isHoldWin) {
    var _this;

    _this = _SpinResultsSymbol_1$.call(this, code, assets) || this;
    _this._fixed = fixed;
    _this._mockCodes = mockCodes;
    _this._extraCode = extraCode;
    _this._extraAssets = extraAssets;
    _this._extraPosition = extraPosition;
    _this._wheel = wheel;
    _this._events = events;
    _this._isHoldWin = isHoldWin;
    return _this;
  }
  /**
   * 获取棋子是否固定
   */


  _createClass(SpinResultCell, [{
    key: "fixed",
    get: function get() {
      return this._fixed;
    }
    /**
     * 设置棋子是否固定
     */
    ,
    set: function set(value) {
      this._fixed = value;
    }
    /**
     * 获取假冒棋子
     */

  }, {
    key: "mockCodes",
    get: function get() {
      return this._mockCodes;
    }
    /**
     * 设置假冒棋子
     */
    ,
    set: function set(value) {
      this._mockCodes = value;
    }
    /**
     * 获取假冒棋子个数
     */

  }, {
    key: "mockCodeCount",
    get: function get() {
      if (!this._mockCodes) {
        return 0;
      }

      return this._mockCodes.length;
    }
    /**
     * 获取额外棋子
     */

  }, {
    key: "extraCode",
    get: function get() {
      return this._extraCode;
    }
    /**
     * 设置额外棋子
     */
    ,
    set: function set(value) {
      this._extraCode = value;
    }
    /**
     * 获取额外资产
     */

  }, {
    key: "extraAssets",
    get: function get() {
      return this._extraAssets;
    }
    /**
     * 设置额外资产
     */
    ,
    set: function set(value) {
      this._extraAssets = value;
    }
    /**
     * 获取额外棋子位置
     */

  }, {
    key: "extraPosition",
    get: function get() {
      return this._extraPosition;
    }
    /**
     * 设置额外棋子位置
     */
    ,
    set: function set(value) {
      this._extraPosition = value;
    }
    /**
     * 获取转盘
     */

  }, {
    key: "wheel",
    get: function get() {
      return this._wheel;
    }
    /**
     * 设置转盘
     */
    ,
    set: function set(value) {
      this._wheel = value;
    }
    /**
     * 获取事件
     */

  }, {
    key: "events",
    get: function get() {
      return this._events;
    }
    /**
     * 设置事件
     */
    ,
    set: function set(value) {
      this._events = value;
    }
  }, {
    key: "isHoldWin",
    get: function get() {
      return this._isHoldWin;
    },
    set: function set(value) {
      this._isHoldWin = value;
    }
  }]);

  return SpinResultCell;
}(SpinResultsSymbol_1["default"]);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], SpinResultCell.prototype, "fixed", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Array), __metadata("design:paramtypes", [Array])], SpinResultCell.prototype, "mockCodes", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultCell.prototype, "extraCode", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultCell.prototype, "extraAssets", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultCell.prototype, "extraPosition", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", SpinResultsWheel_1), __metadata("design:paramtypes", [SpinResultsWheel_1])], SpinResultCell.prototype, "wheel", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Array), __metadata("design:paramtypes", [Array])], SpinResultCell.prototype, "events", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], SpinResultCell.prototype, "isHoldWin", null);

SpinResultCell = __decorate([class_transformer_1.Exclude(), __metadata("design:paramtypes", [Number, Boolean, Array, Number, Number, Number, Number, SpinResultsWheel_1, Array, Boolean])], SpinResultCell);
exports["default"] = SpinResultCell;

cc._RF.pop();