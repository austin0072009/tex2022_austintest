"use strict";
cc._RF.push(module, '1448bksINFHkrKueRh7hjRL', 'SpinResultsTour');
// Script/modules/spin-result/SpinResultsTour.js

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

var SpinResultsRankInfo_1 = __importDefault(require("./SpinResultsRankInfo"));

var class_transformer_1 = require("class-transformer");

var class_transformer_2 = require("class-transformer");

var SpinResultsTour = /*#__PURE__*/function () {
  function SpinResultsTour(status, countdown, totalMinutes, award, mine, myPrev, ranks) {
    this._status = status;
    this._countdown = countdown;
    this._totalMinutes = totalMinutes;
    this._award = award;
    this._mine = mine;
    this._myPrev = myPrev;
    this._ranks = ranks;
  }

  _createClass(SpinResultsTour, [{
    key: "status",
    get: function get() {
      return this._status;
    },
    set: function set(value) {
      this._status = value;
    }
  }, {
    key: "countdown",
    get: function get() {
      return this._countdown;
    },
    set: function set(value) {
      this._countdown = value;
    }
  }, {
    key: "totalMinutes",
    get: function get() {
      return this._totalMinutes;
    },
    set: function set(value) {
      this._totalMinutes = value;
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
    key: "mine",
    get: function get() {
      return this._mine;
    },
    set: function set(value) {
      this._mine = value;
    }
  }, {
    key: "myPrev",
    get: function get() {
      return this._myPrev;
    },
    set: function set(value) {
      this._myPrev = value;
    }
  }, {
    key: "ranks",
    get: function get() {
      return this._ranks;
    },
    set: function set(value) {
      this._ranks = value;
    }
  }]);

  return SpinResultsTour;
}();

__decorate([class_transformer_1.Type(function () {
  return SpinResultsRankInfo_1["default"];
}), __metadata("design:type", SpinResultsRankInfo_1["default"])], SpinResultsTour.prototype, "_mine", void 0);

__decorate([class_transformer_1.Type(function () {
  return SpinResultsRankInfo_1["default"];
}), __metadata("design:type", SpinResultsRankInfo_1["default"])], SpinResultsTour.prototype, "_myPrev", void 0);

__decorate([class_transformer_1.Type(function () {
  return SpinResultsRankInfo_1["default"];
}), __metadata("design:type", Array)], SpinResultsTour.prototype, "_ranks", void 0);

__decorate([class_transformer_2.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsTour.prototype, "status", null);

__decorate([class_transformer_2.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsTour.prototype, "countdown", null);

__decorate([class_transformer_2.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsTour.prototype, "totalMinutes", null);

__decorate([class_transformer_2.Expose(), __metadata("design:type", Array), __metadata("design:paramtypes", [Array])], SpinResultsTour.prototype, "award", null);

__decorate([class_transformer_1.Type(function () {
  return SpinResultsRankInfo_1["default"];
}), class_transformer_2.Expose(), __metadata("design:type", SpinResultsRankInfo_1["default"]), __metadata("design:paramtypes", [SpinResultsRankInfo_1["default"]])], SpinResultsTour.prototype, "mine", null);

__decorate([class_transformer_1.Type(function () {
  return SpinResultsRankInfo_1["default"];
}), class_transformer_2.Expose(), __metadata("design:type", SpinResultsRankInfo_1["default"]), __metadata("design:paramtypes", [SpinResultsRankInfo_1["default"]])], SpinResultsTour.prototype, "myPrev", null);

__decorate([class_transformer_1.Type(function () {
  return SpinResultsRankInfo_1["default"];
}), class_transformer_2.Expose(), __metadata("design:type", Array), __metadata("design:paramtypes", [Array])], SpinResultsTour.prototype, "ranks", null);

SpinResultsTour = __decorate([class_transformer_2.Exclude(), __metadata("design:paramtypes", [Number, Number, Number, Array, SpinResultsRankInfo_1["default"], SpinResultsRankInfo_1["default"], Array])], SpinResultsTour);
exports["default"] = SpinResultsTour;

cc._RF.pop();