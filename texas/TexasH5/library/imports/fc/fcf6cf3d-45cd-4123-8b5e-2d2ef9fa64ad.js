"use strict";
cc._RF.push(module, 'fcf6c89Rc1BI4teLS75+mSt', 'SpinResultsSymbol');
// Script/modules/spin-result/SpinResultsSymbol.js

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

var SpinResultsSymbol = /*#__PURE__*/function () {
  function SpinResultsSymbol(code, assets, position) {
    this._code = code;
    this._assets = assets;
    this._position = position;
  }
  /**
   * 获取结果棋子编码
   */


  _createClass(SpinResultsSymbol, [{
    key: "code",
    get: function get() {
      return this._code;
    }
    /**
     * 设置结果棋子编码
     *
     */
    ,
    set: function set(value) {
      this._code = value;
    }
    /**
     * 获取棋子上的资产（比如金币数、freespin次数）
     */

  }, {
    key: "assets",
    get: function get() {
      return this._assets;
    }
    /**
     * 设置棋子上的资产（比如金币数、freespin次数）
     */
    ,
    set: function set(value) {
      this._assets = value;
    }
    /**
     * 获取棋子位置
     */

  }, {
    key: "position",
    get: function get() {
      return this._position;
    }
    /**
     * 设置棋子位置
     */
    ,
    set: function set(value) {
      this._position = value;
    }
  }]);

  return SpinResultsSymbol;
}();

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsSymbol.prototype, "code", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsSymbol.prototype, "assets", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsSymbol.prototype, "position", null);

SpinResultsSymbol = __decorate([class_transformer_1.Exclude(), __metadata("design:paramtypes", [Number, Number, Number])], SpinResultsSymbol);
exports["default"] = SpinResultsSymbol;

cc._RF.pop();