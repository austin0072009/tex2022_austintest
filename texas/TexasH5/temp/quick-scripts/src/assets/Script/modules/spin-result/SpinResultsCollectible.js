"use strict";
cc._RF.push(module, '308a0GZNq5G0a3YjXACLV5n', 'SpinResultsCollectible');
// Script/modules/spin-result/SpinResultsCollectible.js

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

var SpinResultsCollectible = /*#__PURE__*/function () {
  function SpinResultsCollectible(code, value, maxValue) {
    this._code = code;
    this._value = value;
    this._maxValue = maxValue;
  }
  /**
   * 获取编码
   */


  _createClass(SpinResultsCollectible, [{
    key: "code",
    get: function get() {
      return this._code;
    }
    /**
     * 设置编码
     */
    ,
    set: function set(value) {
      this._code = value;
    }
    /**
     * 获取当前值
     */

  }, {
    key: "value",
    get: function get() {
      return this._value;
    }
    /**
     * 设置当前值
     */
    ,
    set: function set(value) {
      this._value = value;
    }
    /**
     * 获取最大值
     */

  }, {
    key: "maxValue",
    get: function get() {
      return this._maxValue;
    }
    /**
     * 设置最大值
     */
    ,
    set: function set(value) {
      this._maxValue = value;
    }
  }]);

  return SpinResultsCollectible;
}();

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsCollectible.prototype, "code", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsCollectible.prototype, "value", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsCollectible.prototype, "maxValue", null);

SpinResultsCollectible = __decorate([class_transformer_1.Exclude(), __metadata("design:paramtypes", [Number, Number, Number])], SpinResultsCollectible);
exports["default"] = SpinResultsCollectible;

cc._RF.pop();