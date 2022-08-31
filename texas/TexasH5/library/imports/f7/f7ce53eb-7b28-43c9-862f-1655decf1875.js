"use strict";
cc._RF.push(module, 'f7ce5PreyhDyYYvFlXezxh1', 'SpinResultsColumn');
// Script/modules/spin-result/SpinResultsColumn.js

"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

require("reflect-metadata");

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

var SpinResultsCell_1 = __importDefault(require("./SpinResultsCell"));

var SpinResultsConst_1 = __importDefault(require("./SpinResultsConst"));

var class_transformer_1 = require("class-transformer");

var SpinResultsColumn = /*#__PURE__*/function () {
  function SpinResultsColumn(cells, isHoldWin) {
    this._cells = [];
    this._codes = [];
    this._stopCodes = [];
    this._replaceCodes = [];
    this._isHoldWin = false;
    this._isHoldWin = isHoldWin;
    this.cells = cells;
  }

  var _proto = SpinResultsColumn.prototype;

  _proto.getReplaceCodes = function getReplaceCodes(code, mockCodes) {
    var stopCode = SpinResultsConst_1["default"].NO_MOCK_CODE;
    var replaceCodes = [];
    var noReplaceCodesPosition = [];

    for (var i = 0; i < mockCodes.length; i++) {
      if (mockCodes[i] === SpinResultsConst_1["default"].NO_MOCK_CODE) {
        noReplaceCodesPosition.push(i);
      } else {
        replaceCodes.push(mockCodes[i]);
      }
    }

    if (replaceCodes.length == 0) {
      return {
        stopCode: code,
        replaceCodes: mockCodes
      };
    }

    stopCode = replaceCodes.shift();
    replaceCodes.push(code);

    for (var _i = 0; _i < noReplaceCodesPosition.length; _i++) {
      replaceCodes.splice(noReplaceCodesPosition[_i], 0, SpinResultsConst_1["default"].NO_MOCK_CODE);
    }

    return {
      stopCode: stopCode,
      replaceCodes: replaceCodes
    };
  };

  _createClass(SpinResultsColumn, [{
    key: "cells",
    get: function get() {
      return this._cells;
    },
    set: function set(value) {
      this._cells = value;
      this._codes = [];
      this._stopCodes = [];
      this._replaceCodes = [];

      if (!this._cells) {
        this._cells = [];
      }

      for (var i = 0; i < this._cells.length; i++) {
        var cell = this._cells[i];

        this._codes.push(cell.code);

        var replace = this.getReplaceCodes(cell.code, cell.mockCodes);

        this._stopCodes.push(replace.stopCode);

        this._replaceCodes.push(replace.replaceCodes);
      }
    }
  }, {
    key: "codes",
    get: function get() {
      return this._codes;
    }
  }, {
    key: "isHoldWin",
    get: function get() {
      return this._isHoldWin;
    },
    set: function set(value) {
      this._isHoldWin = value;
    }
  }, {
    key: "replaceCodes",
    get: function get() {
      return this._replaceCodes;
    }
  }, {
    key: "stopCodes",
    get: function get() {
      return this._stopCodes;
    }
  }]);

  return SpinResultsColumn;
}();

__decorate([class_transformer_1.Type(function () {
  return SpinResultsCell_1["default"];
}), __metadata("design:type", Array)], SpinResultsColumn.prototype, "_cells", void 0);

__decorate([class_transformer_1.Expose(), class_transformer_1.Type(function () {
  return SpinResultsCell_1["default"];
}), __metadata("design:type", Array), __metadata("design:paramtypes", [Array])], SpinResultsColumn.prototype, "cells", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], SpinResultsColumn.prototype, "isHoldWin", null);

SpinResultsColumn = __decorate([class_transformer_1.Exclude(), __metadata("design:paramtypes", [Array, Boolean])], SpinResultsColumn);
exports["default"] = SpinResultsColumn;

cc._RF.pop();