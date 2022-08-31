"use strict";
cc._RF.push(module, 'c2589V48flCrbrT/M3i5fxM', 'SpinResultsGameWheel');
// Script/modules/spin-result/SpinResultsGameWheel.js

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

var _1 = __importDefault(require("./SpinResultsWheel"));

var class_transformer_1 = require("class-transformer");

var class_transformer_2 = require("class-transformer");

var SpinResultsGameWheel = /*#__PURE__*/function () {
  function SpinResultsGameWheel(wheel, winCoins, totalCoins, productId, productCode, productPrice, awardCollectId) {
    this._wheel = wheel;
    this._winCoins = winCoins;
    this._totalCoins = totalCoins;
    this._productId = productId;
    this._productCode = productCode;
    this._productPrice = productPrice;
    this._awardCollectId = awardCollectId;
  }

  _createClass(SpinResultsGameWheel, [{
    key: "winCoins",
    get: function get() {
      return this._winCoins;
    },
    set: function set(value) {
      this._winCoins = value;
    }
  }, {
    key: "totalCoins",
    get: function get() {
      return this._totalCoins;
    },
    set: function set(value) {
      this._totalCoins = value;
    }
  }, {
    key: "productId",
    get: function get() {
      return this._productId;
    },
    set: function set(value) {
      this._productId = value;
    }
  }, {
    key: "productCode",
    get: function get() {
      return this._productCode;
    },
    set: function set(value) {
      this._productCode = value;
    }
  }, {
    key: "productPrice",
    get: function get() {
      return this._productPrice;
    },
    set: function set(value) {
      this._productPrice = value;
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
    key: "wheel",
    get: function get() {
      return this._wheel;
    },
    set: function set(value) {
      this._wheel = value;
    }
  }]);

  return SpinResultsGameWheel;
}();

__decorate([class_transformer_1.Type(function () {
  return _1;
}), __metadata("design:type", _1)], SpinResultsGameWheel.prototype, "_wheel", void 0);

__decorate([class_transformer_2.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsGameWheel.prototype, "winCoins", null);

__decorate([class_transformer_2.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsGameWheel.prototype, "totalCoins", null);

__decorate([class_transformer_2.Expose(), __metadata("design:type", String), __metadata("design:paramtypes", [String])], SpinResultsGameWheel.prototype, "productId", null);

__decorate([class_transformer_2.Expose(), __metadata("design:type", String), __metadata("design:paramtypes", [String])], SpinResultsGameWheel.prototype, "productCode", null);

__decorate([class_transformer_2.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsGameWheel.prototype, "productPrice", null);

__decorate([class_transformer_2.Expose(), __metadata("design:type", String), __metadata("design:paramtypes", [String])], SpinResultsGameWheel.prototype, "awardCollectId", null);

__decorate([class_transformer_1.Type(function () {
  return _1;
}), class_transformer_2.Expose(), __metadata("design:type", _1), __metadata("design:paramtypes", [_1])], SpinResultsGameWheel.prototype, "wheel", null);

SpinResultsGameWheel = __decorate([class_transformer_2.Exclude(), __metadata("design:paramtypes", [_1, Number, Number, String, String, Number, String])], SpinResultsGameWheel);
exports["default"] = SpinResultsGameWheel;

cc._RF.pop();