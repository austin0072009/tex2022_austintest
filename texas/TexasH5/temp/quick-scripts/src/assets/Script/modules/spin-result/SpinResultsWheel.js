"use strict";
cc._RF.push(module, 'a8d9a1JGSdFg4mTzfcHqBNk', 'SpinResultsWheel');
// Script/modules/spin-result/SpinResultsWheel.js

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
/**
 * spin结果转盘数据
 */

var class_transformer_1 = require("class-transformer");

var SpinResultsWheeItem_1 = __importDefault(require("./SpinResultsWheeItem"));

var SpinResultsWheel = /*#__PURE__*/function () {
  /**
   * 构造函数
   * @param values 值
   * @param finalValue 最终值
   */
  function SpinResultsWheel(values, finalValue) {
    this._values = [];
    this._finalValue = null;
    this._finalPosition = -1;
    this._values = values;
    this._finalValue = finalValue;
  }
  /**
   * 获取转盘值
   */


  _createClass(SpinResultsWheel, [{
    key: "values",
    get: function get() {
      return this._values;
    }
    /**
     * 设置转盘值
     */
    ,
    set: function set(value) {
      var _this = this;

      this._values = value;

      if (!this._values) {
        this._values = [];
      }

      if (this._finalValue) {
        this._finalPosition = this._values.findIndex(function (v) {
          return v.value === _this._finalValue.value;
        });
      }
    }
    /**
     * 获取最终值
     */

  }, {
    key: "finalValue",
    get: function get() {
      return this._finalValue;
    }
    /**
     * 设置最终值
     */
    ,
    set: function set(value) {
      this._finalValue = value;

      if (this._values) {
        this._finalPosition = this._values.findIndex(function (v) {
          return v == value;
        });
      }
    }
    /**
     * 获取最终位置
     */

  }, {
    key: "finalPosition",
    get: function get() {
      return this._finalPosition;
    }
  }]);

  return SpinResultsWheel;
}();

__decorate([class_transformer_1.Type(function () {
  return SpinResultsWheeItem_1["default"];
}), __metadata("design:type", Array)], SpinResultsWheel.prototype, "_values", void 0);

__decorate([class_transformer_1.Type(function () {
  return SpinResultsWheeItem_1["default"];
}), __metadata("design:type", SpinResultsWheeItem_1["default"])], SpinResultsWheel.prototype, "_finalValue", void 0);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Array), __metadata("design:paramtypes", [Array])], SpinResultsWheel.prototype, "values", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", SpinResultsWheeItem_1["default"]), __metadata("design:paramtypes", [SpinResultsWheeItem_1["default"]])], SpinResultsWheel.prototype, "finalValue", null);

SpinResultsWheel = __decorate([class_transformer_1.Exclude(), __metadata("design:paramtypes", [Array, SpinResultsWheeItem_1["default"]])], SpinResultsWheel);
exports["default"] = SpinResultsWheel;

cc._RF.pop();