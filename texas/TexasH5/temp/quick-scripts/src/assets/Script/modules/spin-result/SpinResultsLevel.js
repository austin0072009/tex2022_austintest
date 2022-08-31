"use strict";
cc._RF.push(module, 'cae88NigjxOEoFY5qgjRiNx', 'SpinResultsLevel');
// Script/modules/spin-result/SpinResultsLevel.js

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

var SpinResultsUpgrade_1 = __importDefault(require("./SpinResultsUpgrade"));

var class_transformer_2 = require("class-transformer");

var SpinResultsLevel = /*#__PURE__*/function () {
  function SpinResultsLevel(level, currentValue, totalValue, upgrade) {
    this._level = level;
    this._currentValue = currentValue;
    this._totalValue = totalValue;
    this._upgrade = upgrade;
  }

  _createClass(SpinResultsLevel, [{
    key: "level",
    get: function get() {
      return this._level;
    },
    set: function set(value) {
      this._level = value;
    }
  }, {
    key: "currentValue",
    get: function get() {
      return this._currentValue;
    },
    set: function set(value) {
      this._currentValue = value;
    }
  }, {
    key: "totalValue",
    get: function get() {
      return this._totalValue;
    },
    set: function set(value) {
      this._totalValue = value;
    }
  }, {
    key: "upgrade",
    get: function get() {
      return this._upgrade;
    },
    set: function set(value) {
      this._upgrade = value;
    }
  }]);

  return SpinResultsLevel;
}();

__decorate([class_transformer_1.Type(function () {
  return SpinResultsUpgrade_1["default"];
}), __metadata("design:type", SpinResultsUpgrade_1["default"])], SpinResultsLevel.prototype, "_upgrade", void 0);

__decorate([class_transformer_2.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsLevel.prototype, "level", null);

__decorate([class_transformer_2.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsLevel.prototype, "currentValue", null);

__decorate([class_transformer_2.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsLevel.prototype, "totalValue", null);

__decorate([class_transformer_1.Type(function () {
  return SpinResultsUpgrade_1["default"];
}), class_transformer_2.Expose(), __metadata("design:type", SpinResultsUpgrade_1["default"]), __metadata("design:paramtypes", [SpinResultsUpgrade_1["default"]])], SpinResultsLevel.prototype, "upgrade", null);

SpinResultsLevel = __decorate([class_transformer_2.Exclude(), __metadata("design:paramtypes", [Number, Number, Number, SpinResultsUpgrade_1["default"]])], SpinResultsLevel);
exports["default"] = SpinResultsLevel;

cc._RF.pop();