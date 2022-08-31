"use strict";
cc._RF.push(module, '62f1fX7XvpOlLJKa6p/3qJM', 'SpinResultsRankInfo');
// Script/modules/spin-result/SpinResultsRankInfo.js

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

var SpinResultsRankInfo = /*#__PURE__*/function () {
  function SpinResultsRankInfo(userId, name, headImageUrl, headFrameImageUrl, point, num) {
    this._userId = userId;
    this._name = name;
    this._headImageUrl = headImageUrl;
    this._headFrameImageUrl = headFrameImageUrl;
    this._point = point;
    this._number = num;
  }

  _createClass(SpinResultsRankInfo, [{
    key: "userId",
    get: function get() {
      return this._userId;
    },
    set: function set(value) {
      this._userId = value;
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(value) {
      this._name = value;
    }
  }, {
    key: "headImageUrl",
    get: function get() {
      return this._headImageUrl;
    },
    set: function set(value) {
      this._headImageUrl = value;
    }
  }, {
    key: "headFrameImageUrl",
    get: function get() {
      return this._headFrameImageUrl;
    },
    set: function set(value) {
      this._headFrameImageUrl = value;
    }
  }, {
    key: "point",
    get: function get() {
      return this._point;
    },
    set: function set(value) {
      this._point = value;
    }
  }, {
    key: "number",
    get: function get() {
      return this._number;
    },
    set: function set(value) {
      this._number = value;
    }
  }]);

  return SpinResultsRankInfo;
}();

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsRankInfo.prototype, "userId", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", String), __metadata("design:paramtypes", [String])], SpinResultsRankInfo.prototype, "name", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", String), __metadata("design:paramtypes", [String])], SpinResultsRankInfo.prototype, "headImageUrl", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", String), __metadata("design:paramtypes", [String])], SpinResultsRankInfo.prototype, "headFrameImageUrl", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsRankInfo.prototype, "point", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsRankInfo.prototype, "number", null);

SpinResultsRankInfo = __decorate([class_transformer_1.Exclude(), __metadata("design:paramtypes", [Number, String, String, String, Number, Number])], SpinResultsRankInfo);
exports["default"] = SpinResultsRankInfo;

cc._RF.pop();