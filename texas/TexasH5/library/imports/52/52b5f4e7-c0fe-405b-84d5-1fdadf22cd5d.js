"use strict";
cc._RF.push(module, '52b5fTnwP5AW4TVH9rfIs1d', 'SpinResultsWheeItem');
// Script/modules/spin-result/SpinResultsWheeItem.js

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
/**
 * 转盘选项
 *
 * @class SpinResultsWheelItem
 */


var SpinResultsWheelItem = /*#__PURE__*/function () {
  /**
   * Creates an instance of SpinResultsWheelItem.
   * @param {number} value 值
   * @param {number} assets 资产
   * @memberof SpinResultsWheelItem
   */
  function SpinResultsWheelItem(value, assets) {
    this._value = value;
    this._assets = assets;
  }
  /**
   * 获取值
   *
   * @type {number}
   * @memberof SpinResultsWheelItem
   */


  _createClass(SpinResultsWheelItem, [{
    key: "value",
    get: function get() {
      return this._value;
    }
    /**
     * 设置值
     *
     * @memberof SpinResultsWheelItem
     */
    ,
    set: function set(value) {
      this._value = value;
    }
    /**
     * 获取资产
     *
     * @type {number}
     * @memberof SpinResultsWheelItem
     */

  }, {
    key: "assets",
    get: function get() {
      return this._assets;
    }
    /**
     * 设置资产
     *
     * @memberof SpinResultsWheelItem
     */
    ,
    set: function set(value) {
      this._assets = value;
    }
  }]);

  return SpinResultsWheelItem;
}();

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsWheelItem.prototype, "value", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsWheelItem.prototype, "assets", null);

SpinResultsWheelItem = __decorate([class_transformer_1.Exclude(), __metadata("design:paramtypes", [Number, Number])], SpinResultsWheelItem);
exports["default"] = SpinResultsWheelItem;

cc._RF.pop();