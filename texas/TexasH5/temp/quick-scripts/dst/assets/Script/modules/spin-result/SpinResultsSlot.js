
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/spin-result/SpinResultsSlot.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eed69nttlVJDKe0uSgapRmO', 'SpinResultsSlot');
// Script/modules/spin-result/SpinResultsSlot.js

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

var SpinResultsColumn_1 = __importDefault(require("./SpinResultsColumn"));

var SpinResultsSymbol_1 = __importDefault(require("./SpinResultsSymbol"));

var SpinResultsEvent_1 = __importDefault(require("./SpinResultsEvent"));

var class_transformer_1 = require("class-transformer");

var SpinResultsGameMode_1 = require("./SpinResultsGameMode");

var SpinResultsWheel_1 = __importDefault(require("./SpinResultsWheel"));

var SpinResultsConst_1 = __importDefault(require("./SpinResultsConst"));

var SpinResultsCell_1 = __importDefault(require("./SpinResultsCell"));

var class_transformer_2 = require("class-transformer");

var SpinResultsSlot = /*#__PURE__*/function () {
  function SpinResultsSlot(columns, matchedLines, ofAKind) {
    this._columns = [];
    this._matchedLines = [];
    this._ofAKind = 0;
    this._events = [];
    this._extraChesses = [];
    this._replaceCodes = [];
    this._symbolEvents = [];
    this.columns = columns;
    this.ofAKind = ofAKind;
    this._gameMode = SpinResultsGameMode_1.SpinResultsGameMode.Normal;
    this._nextGameMode = SpinResultsGameMode_1.SpinResultsGameMode.Normal;
  }
  /**
   * 获取列结果集
   */


  var _proto = SpinResultsSlot.prototype;

  _proto.getReplaceCodes = function getReplaceCodes() {
    var times = 1;
    var replaceCodes = [];

    while (true) {
      var codes = [];
      var maxCount = 0;

      for (var col = 0; col < this.columns.length; col++) {
        var reel = this.columns[col];

        for (var row = 0; row < reel.cells.length; row++) {
          var replaceCode = SpinResultsConst_1["default"].NO_MOCK_CODE;
          var _replaceCodes = reel.replaceCodes[row];

          if (!_replaceCodes || _replaceCodes.length == 0) {
            replaceCode = SpinResultsConst_1["default"].NO_MOCK_CODE;
          } else {
            replaceCode = _replaceCodes[times - 1];

            if (replaceCode == null) {
              replaceCode = SpinResultsConst_1["default"].NO_MOCK_CODE;
            }
          }

          var cell = reel.cells[row];

          if (cell.mockCodes) {
            if (maxCount < cell.mockCodes.length) {
              maxCount = cell.mockCodes.length;
            }
          }

          codes.push(replaceCode);
        }
      }

      if (maxCount < times) {
        break;
      }

      times++;
      replaceCodes.push(codes);
    }

    return replaceCodes;
  }
  /**
   * 更新cell数据
   *
   * @param {number} column 列号
   * @param {number} row 行号
   * @param {number} code 棋子编码
   * @param {number} [assets=0] 资产值
   * @param {boolean} [fixed=false] 是否固定
   * @param {number} [extraCode=-1] 额外棋子编码
   * @param {number} [extraAssets=-1] 额外棋子资产
   * @param {number} [extraPosition=-1] 额外棋子位置
   * @param {SpinResultsWheel} [wheel=null] 转盘数据，比如大章鱼选择框
   * @param {SpinResultsEvent[]} [events=[]] 事件
   * @memberof SpinResults
   */
  ;

  _proto.updateCell = function updateCell(column, row, code, assets, mockCodes, fixed, extraCode, extraAssets, extraPosition, wheel, events) {
    if (assets === void 0) {
      assets = 0;
    }

    if (mockCodes === void 0) {
      mockCodes = [];
    }

    if (fixed === void 0) {
      fixed = false;
    }

    if (extraCode === void 0) {
      extraCode = -1;
    }

    if (extraAssets === void 0) {
      extraAssets = -1;
    }

    if (extraPosition === void 0) {
      extraPosition = -1;
    }

    if (wheel === void 0) {
      wheel = null;
    }

    if (events === void 0) {
      events = [];
    }

    this._columns[column].cells[row] = new SpinResultsCell_1["default"](code, fixed, mockCodes, assets, extraCode, extraAssets, extraPosition, wheel, events);
  }
  /**
   * 更新格子资产
   *
   * @param {number} column 列号
   * @param {number} row 行号
   * @param {number} assets 资产值
   * @memberof SpinResultsSlot
   */
  ;

  _proto.updateCellAssets = function updateCellAssets(column, row, assets) {
    this._columns[column].cells[row].assets = assets;
  }
  /**
   * 更新格子固定标记
   *
   * @param {number} column 列号
   * @param {number} row 行号
   * @param {boolean} fixed 是否固定
   * @memberof SpinResultsSlot
   */
  ;

  _proto.updateCellFixed = function updateCellFixed(column, row, fixed) {
    this._columns[column].cells[row].fixed = fixed;
  }
  /**
   * 更新格子额外棋子相关数据
   *
   * @param {number} column 列号
   * @param {number} row 行号
   * @param {number} extraCode 额外棋子编码
   * @param {number} [extraAssets=-1] 额外棋子资产
   * @param {number} [extraPosition=-1] 额外棋子位置
   * @memberof SpinResultsSlot
   */
  ;

  _proto.updateCellExtraCode = function updateCellExtraCode(column, row, extraCode, extraAssets, extraPosition) {
    if (extraAssets === void 0) {
      extraAssets = -1;
    }

    if (extraPosition === void 0) {
      extraPosition = -1;
    }

    this._columns[column].cells[row].extraCode = extraCode;
    this._columns[column].cells[row].extraAssets = extraAssets;
    this._columns[column].cells[row].extraPosition = extraPosition;
  }
  /**
   * 更新格子转盘数据
   * - 比如海洋关的大章鱼棋子，让用户选择，结果已经预定，相当于转盘
   *
   * @param {number} column 列号
   * @param {number} row 行号
   * @param {SpinResultsWheel} wheel 转盘数据
   * @memberof SpinResultsSlot
   */
  ;

  _proto.updateCellWheel = function updateCellWheel(column, row, values, finalValue) {
    this._columns[column].cells[row].wheel = new SpinResultsWheel_1["default"](values, finalValue);
  }
  /**
   * 更新格子事件
   *
   * @param {number} column 列号
   * @param {number} row 行号
   * @param {SpinResultsEvent[]} events 事件
   * @memberof SpinResultsSlot
   */
  ;

  _proto.updateCellEvents = function updateCellEvents(column, row, events) {
    this._columns[column].cells[row].events = events;
  }
  /**
   * 更新发生变化的棋子的mockCodes值，同时更新code值
   *
   * @param {number[]} hand 更新的手牌数据，变化的棋子位置才有值，没变化的棋子值为-1
   * @param {number} columnSize 列数
   * @param {number} rowSize 行数
   * @memberof SpinResults
   */
  ;

  _proto.updateChangeCodeMockCodes = function updateChangeCodeMockCodes(hand, columnSize, rowSize) {
    for (var i = 0; i < hand.length; ++i) {
      var code = hand[i];
      var column = Math.floor(i / rowSize);
      var row = i % rowSize;
      var curCode = code === -1 ? this._columns[column].cells[row].code : code;
      var preCode = code === -1 ? code : this._columns[column].cells[row].code;

      this._columns[column].cells[row].mockCodes.push(preCode);

      this._columns[column].cells[row].code = curCode;
    }
  }
  /**
   * 更新mockCodes值，同时更新code值
   *
   * @param {number[]} currentHand 当前手牌数据
   * @param {number[]} previousHand 之前的手牌数据
   * @param {number} columnSize 列数
   * @param {number} rowSize 行数
   * @memberof SpinResults
   */
  ;

  _proto.updateMockCodes = function updateMockCodes(currentHand, previousHand, columnSize, rowSize) {
    // 判断参数合法性
    if (!Array.isArray(currentHand) || !Array.isArray(previousHand) || currentHand.length !== previousHand.length) {
      return;
    } // 比较手牌中每个值，如果相同，填-1；如果不同，填previousHand中对应的值


    for (var i = 0; i < currentHand.length; ++i) {
      var currentCode = currentHand[i];
      var previousCode = previousHand[i];
      var mockCode = currentCode !== previousCode ? previousCode : -1;
      var column = Math.floor(i / rowSize);
      var row = i % rowSize;

      this._columns[column].cells[row].mockCodes.push(mockCode);

      this._columns[column].cells[row].code = currentCode;
    }
  }
  /**
   * 更新列的isHoldWin
   *
   * @param {number} column 列号
   * @param {boolean} isHoldWin 是否hold win
   * @memberof SpinResults
   */
  ;

  _proto.updateColumnHoldWin = function updateColumnHoldWin(column, isHoldWin) {
    this._columns[column].isHoldWin = isHoldWin;
  }
  /**
   * 更新格子code
   *
   * @param {number[]} hand 手牌数据
   * @param {number} rowSize 棋盘行数
   * @memberof SpinResultsSlot
   */
  ;

  _proto.updateCells = function updateCells(hand, rowSize) {
    for (var i = 0; i < hand.length; ++i) {
      var code = hand[i];
      var column = Math.floor(i / rowSize);
      var row = i % rowSize;
      this._columns[column].cells[row].code = code;
    }
  }
  /**
   * 初始化SpinResultSlot
   *
   * @param {number[]} hand 手牌
   * @param {number} columnSize 列数
   * @param {number} rowSize 行数
   * @memberof SpinResultsSlot
   */
  ;

  _proto.init = function init(hand, columnSize, rowSize) {
    var reels = [];

    for (var col = 0; col < columnSize; ++col) {
      var cells = [];

      for (var row = 0; row < rowSize; ++row) {
        var position = col * rowSize + row;
        var code = hand[position];
        var cell = new SpinResultsCell_1["default"](code, false, [], 0, -1, -1, -1, null, []);
        cells.push(cell);
      }

      var reel = new SpinResultsColumn_1["default"](cells, false);
      reels.push(reel);
    }

    this.columns = reels;
  };

  _createClass(SpinResultsSlot, [{
    key: "columns",
    get: function get() {
      return this._columns;
    }
    /**
     * 设置列结果集
     */
    ,
    set: function set(value) {
      if (!value) {
        this._columns = [];
        return;
      }

      this._columns = value;
      this._replaceCodes = this.getReplaceCodes();
    }
    /**
     * 获取连线数据
     */

  }, {
    key: "matchedLines",
    get: function get() {
      return this._matchedLines;
    }
    /**
     * 设置连线数据
     */
    ,
    set: function set(value) {
      this._matchedLines = value;

      if (!this._matchedLines) {
        this._matchedLines = [];
      }
    }
    /**
     * 获取5、6、7连
     */

  }, {
    key: "ofAKind",
    get: function get() {
      return this._ofAKind;
    }
    /**
     * 设置5、6、7连
     */
    ,
    set: function set(value) {
      this._ofAKind = value;
    }
  }, {
    key: "extraChesses",
    get: function get() {
      return this._extraChesses;
    },
    set: function set(value) {
      this._extraChesses = value;

      if (!this._extraChesses) {
        this._extraChesses = [];
      }
    }
  }, {
    key: "events",
    get: function get() {
      return this._events;
    },
    set: function set(value) {
      this._events = value;

      if (!this._events) {
        this._events = [];
      }
    }
  }, {
    key: "gameMode",
    get: function get() {
      return this._gameMode;
    },
    set: function set(value) {
      this._gameMode = value;
    }
  }, {
    key: "nextGameMode",
    get: function get() {
      return this._nextGameMode;
    },
    set: function set(value) {
      this._nextGameMode = value;
    }
  }, {
    key: "wheels",
    get: function get() {
      return this._wheels;
    },
    set: function set(value) {
      this._wheels = value;

      if (!this._wheels) {
        this._wheels = [];
      }
    }
  }, {
    key: "replaceCodes",
    get: function get() {
      return this._replaceCodes;
    }
    /**
     * Gets whether has matched lines
     * 是否有连线
     */

  }, {
    key: "hasMatchedLines",
    get: function get() {
      return this.matchedLines && this.matchedLines.length > 0;
    }
  }, {
    key: "hasReplaceCodes",
    get: function get() {
      return this.replaceCodes && this.replaceCodes.length > 0 && this.replaceCodes[0] && this.replaceCodes[0].length > 0;
    }
  }]);

  return SpinResultsSlot;
}();

__decorate([class_transformer_1.Type(function () {
  return SpinResultsColumn_1["default"];
}), __metadata("design:type", Array)], SpinResultsSlot.prototype, "_columns", void 0);

__decorate([class_transformer_1.Type(function () {
  return SpinResultsEvent_1["default"];
}), __metadata("design:type", Array)], SpinResultsSlot.prototype, "_events", void 0);

__decorate([class_transformer_1.Type(function () {
  return SpinResultsSymbol_1["default"];
}), __metadata("design:type", Array)], SpinResultsSlot.prototype, "_extraChesses", void 0);

__decorate([class_transformer_1.Type(function () {
  return SpinResultsWheel_1["default"];
}), __metadata("design:type", Array)], SpinResultsSlot.prototype, "_wheels", void 0);

__decorate([class_transformer_1.Type(function () {
  return SpinResultsColumn_1["default"];
}), class_transformer_2.Expose(), __metadata("design:type", Array), __metadata("design:paramtypes", [Array])], SpinResultsSlot.prototype, "columns", null);

__decorate([class_transformer_2.Expose(), __metadata("design:type", Array), __metadata("design:paramtypes", [Array])], SpinResultsSlot.prototype, "matchedLines", null);

__decorate([class_transformer_2.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsSlot.prototype, "ofAKind", null);

__decorate([class_transformer_1.Type(function () {
  return SpinResultsSymbol_1["default"];
}), class_transformer_2.Expose(), __metadata("design:type", Array), __metadata("design:paramtypes", [Array])], SpinResultsSlot.prototype, "extraChesses", null);

__decorate([class_transformer_1.Type(function () {
  return SpinResultsEvent_1["default"];
}), class_transformer_2.Expose(), __metadata("design:type", Array), __metadata("design:paramtypes", [Array])], SpinResultsSlot.prototype, "events", null);

__decorate([class_transformer_2.Expose(), class_transformer_1.Type(function () {
  return SpinResultsWheel_1["default"];
}), __metadata("design:type", Array), __metadata("design:paramtypes", [Array])], SpinResultsSlot.prototype, "wheels", null);

SpinResultsSlot = __decorate([class_transformer_2.Exclude(), __metadata("design:paramtypes", [Array, Array, Number])], SpinResultsSlot);
exports["default"] = SpinResultsSlot;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxzcGluLXJlc3VsdFxcU3BpblJlc3VsdHNTbG90LmpzIl0sIm5hbWVzIjpbIl9fZGVjb3JhdGUiLCJkZWNvcmF0b3JzIiwidGFyZ2V0Iiwia2V5IiwiZGVzYyIsImMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJyIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZCIsIlJlZmxlY3QiLCJkZWNvcmF0ZSIsImkiLCJkZWZpbmVQcm9wZXJ0eSIsIl9fbWV0YWRhdGEiLCJrIiwidiIsIm1ldGFkYXRhIiwiX19pbXBvcnREZWZhdWx0IiwibW9kIiwiX19lc01vZHVsZSIsImV4cG9ydHMiLCJ2YWx1ZSIsIlNwaW5SZXN1bHRzQ29sdW1uXzEiLCJyZXF1aXJlIiwiU3BpblJlc3VsdHNTeW1ib2xfMSIsIlNwaW5SZXN1bHRzRXZlbnRfMSIsImNsYXNzX3RyYW5zZm9ybWVyXzEiLCJTcGluUmVzdWx0c0dhbWVNb2RlXzEiLCJTcGluUmVzdWx0c1doZWVsXzEiLCJTcGluUmVzdWx0c0NvbnN0XzEiLCJTcGluUmVzdWx0c0NlbGxfMSIsImNsYXNzX3RyYW5zZm9ybWVyXzIiLCJTcGluUmVzdWx0c1Nsb3QiLCJjb2x1bW5zIiwibWF0Y2hlZExpbmVzIiwib2ZBS2luZCIsIl9jb2x1bW5zIiwiX21hdGNoZWRMaW5lcyIsIl9vZkFLaW5kIiwiX2V2ZW50cyIsIl9leHRyYUNoZXNzZXMiLCJfcmVwbGFjZUNvZGVzIiwiX3N5bWJvbEV2ZW50cyIsIl9nYW1lTW9kZSIsIlNwaW5SZXN1bHRzR2FtZU1vZGUiLCJOb3JtYWwiLCJfbmV4dEdhbWVNb2RlIiwiZ2V0UmVwbGFjZUNvZGVzIiwidGltZXMiLCJyZXBsYWNlQ29kZXMiLCJjb2RlcyIsIm1heENvdW50IiwiY29sIiwicmVlbCIsInJvdyIsImNlbGxzIiwicmVwbGFjZUNvZGUiLCJOT19NT0NLX0NPREUiLCJjZWxsIiwibW9ja0NvZGVzIiwicHVzaCIsInVwZGF0ZUNlbGwiLCJjb2x1bW4iLCJjb2RlIiwiYXNzZXRzIiwiZml4ZWQiLCJleHRyYUNvZGUiLCJleHRyYUFzc2V0cyIsImV4dHJhUG9zaXRpb24iLCJ3aGVlbCIsImV2ZW50cyIsInVwZGF0ZUNlbGxBc3NldHMiLCJ1cGRhdGVDZWxsRml4ZWQiLCJ1cGRhdGVDZWxsRXh0cmFDb2RlIiwidXBkYXRlQ2VsbFdoZWVsIiwidmFsdWVzIiwiZmluYWxWYWx1ZSIsInVwZGF0ZUNlbGxFdmVudHMiLCJ1cGRhdGVDaGFuZ2VDb2RlTW9ja0NvZGVzIiwiaGFuZCIsImNvbHVtblNpemUiLCJyb3dTaXplIiwiTWF0aCIsImZsb29yIiwiY3VyQ29kZSIsInByZUNvZGUiLCJ1cGRhdGVNb2NrQ29kZXMiLCJjdXJyZW50SGFuZCIsInByZXZpb3VzSGFuZCIsIkFycmF5IiwiaXNBcnJheSIsImN1cnJlbnRDb2RlIiwicHJldmlvdXNDb2RlIiwibW9ja0NvZGUiLCJ1cGRhdGVDb2x1bW5Ib2xkV2luIiwiaXNIb2xkV2luIiwidXBkYXRlQ2VsbHMiLCJpbml0IiwicmVlbHMiLCJwb3NpdGlvbiIsIl93aGVlbHMiLCJUeXBlIiwicHJvdG90eXBlIiwiRXhwb3NlIiwiTnVtYmVyIiwiRXhjbHVkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUNBLElBQUlBLFVBQVUsR0FBSSxVQUFRLFNBQUtBLFVBQWQsSUFBNkIsVUFBVUMsVUFBVixFQUFzQkMsTUFBdEIsRUFBOEJDLEdBQTlCLEVBQW1DQyxJQUFuQyxFQUF5QztBQUNuRixNQUFJQyxDQUFDLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBbEI7QUFBQSxNQUEwQkMsQ0FBQyxHQUFHSCxDQUFDLEdBQUcsQ0FBSixHQUFRSCxNQUFSLEdBQWlCRSxJQUFJLEtBQUssSUFBVCxHQUFnQkEsSUFBSSxHQUFHSyxNQUFNLENBQUNDLHdCQUFQLENBQWdDUixNQUFoQyxFQUF3Q0MsR0FBeEMsQ0FBdkIsR0FBc0VDLElBQXJIO0FBQUEsTUFBMkhPLENBQTNIO0FBQ0EsTUFB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QXBCLENBQXlCO0FBQUEsU0FBTXpFLGtCQUFrQixXQUF4QjtBQUFBLENBQXpCLENBRk8sRUFHUGYsVUFBVSxDQUFDLGFBQUQsRUFBZ0I0RSxLQUFoQixDQUhILEVBSVA1RSxVQUFVLENBQUMsbUJBQUQsRUFBc0IsQ0FBQzRFLEtBQUQsQ0FBdEIsQ0FKSCxDQUFELEVBS1B6RCxlQUFlLENBQUNzRSxTQUxULEVBS29CLFFBTHBCLEVBSzhCLElBTDlCLENBQVY7O0FBTUF0RSxlQUFlLEdBQUduQyxVQUFVLENBQUMsQ0FDekJrQyxtQkFBbUIsQ0FBQzBFLE9BQXBCLEVBRHlCLEVBRXpCNUYsVUFBVSxDQUFDLG1CQUFELEVBQXNCLENBQUM0RSxLQUFELEVBQVFBLEtBQVIsRUFBZWUsTUFBZixDQUF0QixDQUZlLENBQUQsRUFHekJ4RSxlQUh5QixDQUE1QjtBQUlBWixPQUFPLFdBQVAsR0FBa0JZLGVBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBTcGluUmVzdWx0c0NvbHVtbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1NwaW5SZXN1bHRzQ29sdW1uXCIpKTtcbmNvbnN0IFNwaW5SZXN1bHRzU3ltYm9sXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vU3BpblJlc3VsdHNTeW1ib2xcIikpO1xuY29uc3QgU3BpblJlc3VsdHNFdmVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1NwaW5SZXN1bHRzRXZlbnRcIikpO1xuY29uc3QgY2xhc3NfdHJhbnNmb3JtZXJfMSA9IHJlcXVpcmUoXCJjbGFzcy10cmFuc2Zvcm1lclwiKTtcbmNvbnN0IFNwaW5SZXN1bHRzR2FtZU1vZGVfMSA9IHJlcXVpcmUoXCIuL1NwaW5SZXN1bHRzR2FtZU1vZGVcIik7XG5jb25zdCBTcGluUmVzdWx0c1doZWVsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vU3BpblJlc3VsdHNXaGVlbFwiKSk7XG5jb25zdCBTcGluUmVzdWx0c0NvbnN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vU3BpblJlc3VsdHNDb25zdFwiKSk7XG5jb25zdCBTcGluUmVzdWx0c0NlbGxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9TcGluUmVzdWx0c0NlbGxcIikpO1xuY29uc3QgY2xhc3NfdHJhbnNmb3JtZXJfMiA9IHJlcXVpcmUoXCJjbGFzcy10cmFuc2Zvcm1lclwiKTtcbmxldCBTcGluUmVzdWx0c1Nsb3QgPSBjbGFzcyBTcGluUmVzdWx0c1Nsb3Qge1xuICAgIGNvbnN0cnVjdG9yKGNvbHVtbnMsIG1hdGNoZWRMaW5lcywgb2ZBS2luZCkge1xuICAgICAgICB0aGlzLl9jb2x1bW5zID0gW107XG4gICAgICAgIHRoaXMuX21hdGNoZWRMaW5lcyA9IFtdO1xuICAgICAgICB0aGlzLl9vZkFLaW5kID0gMDtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gW107XG4gICAgICAgIHRoaXMuX2V4dHJhQ2hlc3NlcyA9IFtdO1xuICAgICAgICB0aGlzLl9yZXBsYWNlQ29kZXMgPSBbXTtcbiAgICAgICAgdGhpcy5fc3ltYm9sRXZlbnRzID0gW107XG4gICAgICAgIHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XG4gICAgICAgIHRoaXMub2ZBS2luZCA9IG9mQUtpbmQ7XG4gICAgICAgIHRoaXMuX2dhbWVNb2RlID0gU3BpblJlc3VsdHNHYW1lTW9kZV8xLlNwaW5SZXN1bHRzR2FtZU1vZGUuTm9ybWFsO1xuICAgICAgICB0aGlzLl9uZXh0R2FtZU1vZGUgPSBTcGluUmVzdWx0c0dhbWVNb2RlXzEuU3BpblJlc3VsdHNHYW1lTW9kZS5Ob3JtYWw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPluWIl+e7k+aenOmbhlxuICAgICAqL1xuICAgIGdldCBjb2x1bW5zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29sdW1ucztcbiAgICB9XG4gICAgLyoqXG4gICAgICog6K6+572u5YiX57uT5p6c6ZuGXG4gICAgICovXG4gICAgc2V0IGNvbHVtbnModmFsdWUpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fY29sdW1ucyA9IFtdO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NvbHVtbnMgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fcmVwbGFjZUNvZGVzID0gdGhpcy5nZXRSZXBsYWNlQ29kZXMoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W6L+e57q/5pWw5o2uXG4gICAgICovXG4gICAgZ2V0IG1hdGNoZWRMaW5lcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hdGNoZWRMaW5lcztcbiAgICB9XG4gICAgLyoqXG4gICAgICog6K6+572u6L+e57q/5pWw5o2uXG4gICAgICovXG4gICAgc2V0IG1hdGNoZWRMaW5lcyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9tYXRjaGVkTGluZXMgPSB2YWx1ZTtcbiAgICAgICAgaWYgKCF0aGlzLl9tYXRjaGVkTGluZXMpIHtcbiAgICAgICAgICAgIHRoaXMuX21hdGNoZWRMaW5lcyA9IFtdO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPljXjgIE244CBN+i/nlxuICAgICAqL1xuICAgIGdldCBvZkFLaW5kKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fb2ZBS2luZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6K6+572uNeOAgTbjgIE36L+eXG4gICAgICovXG4gICAgc2V0IG9mQUtpbmQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fb2ZBS2luZCA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgZXh0cmFDaGVzc2VzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXh0cmFDaGVzc2VzO1xuICAgIH1cbiAgICBzZXQgZXh0cmFDaGVzc2VzKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2V4dHJhQ2hlc3NlcyA9IHZhbHVlO1xuICAgICAgICBpZiAoIXRoaXMuX2V4dHJhQ2hlc3Nlcykge1xuICAgICAgICAgICAgdGhpcy5fZXh0cmFDaGVzc2VzID0gW107XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IGV2ZW50cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50cztcbiAgICB9XG4gICAgc2V0IGV2ZW50cyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9ldmVudHMgPSB2YWx1ZTtcbiAgICAgICAgaWYgKCF0aGlzLl9ldmVudHMpIHtcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IFtdO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBnYW1lTW9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dhbWVNb2RlO1xuICAgIH1cbiAgICBzZXQgZ2FtZU1vZGUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZ2FtZU1vZGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IG5leHRHYW1lTW9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25leHRHYW1lTW9kZTtcbiAgICB9XG4gICAgc2V0IG5leHRHYW1lTW9kZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9uZXh0R2FtZU1vZGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IHdoZWVscygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3doZWVscztcbiAgICB9XG4gICAgc2V0IHdoZWVscyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl93aGVlbHMgPSB2YWx1ZTtcbiAgICAgICAgaWYgKCF0aGlzLl93aGVlbHMpIHtcbiAgICAgICAgICAgIHRoaXMuX3doZWVscyA9IFtdO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCByZXBsYWNlQ29kZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXBsYWNlQ29kZXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgd2hldGhlciBoYXMgbWF0Y2hlZCBsaW5lc1xuICAgICAqIOaYr+WQpuaciei/nue6v1xuICAgICAqL1xuICAgIGdldCBoYXNNYXRjaGVkTGluZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hdGNoZWRMaW5lcyAmJiB0aGlzLm1hdGNoZWRMaW5lcy5sZW5ndGggPiAwO1xuICAgIH1cbiAgICBnZXQgaGFzUmVwbGFjZUNvZGVzKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMucmVwbGFjZUNvZGVzICYmIHRoaXMucmVwbGFjZUNvZGVzLmxlbmd0aCA+IDAgJiYgdGhpcy5yZXBsYWNlQ29kZXNbMF0gJiYgdGhpcy5yZXBsYWNlQ29kZXNbMF0ubGVuZ3RoID4gMCk7XG4gICAgfVxuICAgIGdldFJlcGxhY2VDb2RlcygpIHtcbiAgICAgICAgbGV0IHRpbWVzID0gMTtcbiAgICAgICAgY29uc3QgcmVwbGFjZUNvZGVzID0gW107XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICBsZXQgY29kZXMgPSBbXTtcbiAgICAgICAgICAgIGxldCBtYXhDb3VudCA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCB0aGlzLmNvbHVtbnMubGVuZ3RoOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZWwgPSB0aGlzLmNvbHVtbnNbY29sXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCByZWVsLmNlbGxzLmxlbmd0aDsgcm93KyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcGxhY2VDb2RlID0gU3BpblJlc3VsdHNDb25zdF8xLmRlZmF1bHQuTk9fTU9DS19DT0RFO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVwbGFjZUNvZGVzID0gcmVlbC5yZXBsYWNlQ29kZXNbcm93XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXBsYWNlQ29kZXMgfHwgcmVwbGFjZUNvZGVzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlQ29kZSA9IFNwaW5SZXN1bHRzQ29uc3RfMS5kZWZhdWx0Lk5PX01PQ0tfQ09ERTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VDb2RlID0gcmVwbGFjZUNvZGVzW3RpbWVzIC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVwbGFjZUNvZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VDb2RlID0gU3BpblJlc3VsdHNDb25zdF8xLmRlZmF1bHQuTk9fTU9DS19DT0RFO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSByZWVsLmNlbGxzW3Jvd107XG4gICAgICAgICAgICAgICAgICAgIGlmIChjZWxsLm1vY2tDb2Rlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1heENvdW50IDwgY2VsbC5tb2NrQ29kZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4Q291bnQgPSBjZWxsLm1vY2tDb2Rlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29kZXMucHVzaChyZXBsYWNlQ29kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1heENvdW50IDwgdGltZXMpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRpbWVzKys7XG4gICAgICAgICAgICByZXBsYWNlQ29kZXMucHVzaChjb2Rlcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcGxhY2VDb2RlcztcbiAgICB9XG4gICAgLyoqXG4gICAgICog5pu05pawY2VsbOaVsOaNrlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbiDliJflj7dcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93IOihjOWPt1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2RlIOaji+WtkOe8lueggVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbYXNzZXRzPTBdIOi1hOS6p+WAvFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZpeGVkPWZhbHNlXSDmmK/lkKblm7rlrppcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2V4dHJhQ29kZT0tMV0g6aKd5aSW5qOL5a2Q57yW56CBXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtleHRyYUFzc2V0cz0tMV0g6aKd5aSW5qOL5a2Q6LWE5LqnXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtleHRyYVBvc2l0aW9uPS0xXSDpop3lpJbmo4vlrZDkvY3nva5cbiAgICAgKiBAcGFyYW0ge1NwaW5SZXN1bHRzV2hlZWx9IFt3aGVlbD1udWxsXSDovaznm5jmlbDmja7vvIzmr5TlpoLlpKfnq6DpsbzpgInmi6nmoYZcbiAgICAgKiBAcGFyYW0ge1NwaW5SZXN1bHRzRXZlbnRbXX0gW2V2ZW50cz1bXV0g5LqL5Lu2XG4gICAgICogQG1lbWJlcm9mIFNwaW5SZXN1bHRzXG4gICAgICovXG4gICAgdXBkYXRlQ2VsbChjb2x1bW4sIHJvdywgY29kZSwgYXNzZXRzID0gMCwgbW9ja0NvZGVzID0gW10sIGZpeGVkID0gZmFsc2UsIGV4dHJhQ29kZSA9IC0xLCBleHRyYUFzc2V0cyA9IC0xLCBleHRyYVBvc2l0aW9uID0gLTEsIHdoZWVsID0gbnVsbCwgZXZlbnRzID0gW10pIHtcbiAgICAgICAgdGhpcy5fY29sdW1uc1tjb2x1bW5dLmNlbGxzW3Jvd10gPSBuZXcgU3BpblJlc3VsdHNDZWxsXzEuZGVmYXVsdChjb2RlLCBmaXhlZCwgbW9ja0NvZGVzLCBhc3NldHMsIGV4dHJhQ29kZSwgZXh0cmFBc3NldHMsIGV4dHJhUG9zaXRpb24sIHdoZWVsLCBldmVudHMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmm7TmlrDmoLzlrZDotYTkuqdcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW4g5YiX5Y+3XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJvdyDooYzlj7dcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYXNzZXRzIOi1hOS6p+WAvFxuICAgICAqIEBtZW1iZXJvZiBTcGluUmVzdWx0c1Nsb3RcbiAgICAgKi9cbiAgICB1cGRhdGVDZWxsQXNzZXRzKGNvbHVtbiwgcm93LCBhc3NldHMpIHtcbiAgICAgICAgdGhpcy5fY29sdW1uc1tjb2x1bW5dLmNlbGxzW3Jvd10uYXNzZXRzID0gYXNzZXRzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmm7TmlrDmoLzlrZDlm7rlrprmoIforrBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW4g5YiX5Y+3XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJvdyDooYzlj7dcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGZpeGVkIOaYr+WQpuWbuuWumlxuICAgICAqIEBtZW1iZXJvZiBTcGluUmVzdWx0c1Nsb3RcbiAgICAgKi9cbiAgICB1cGRhdGVDZWxsRml4ZWQoY29sdW1uLCByb3csIGZpeGVkKSB7XG4gICAgICAgIHRoaXMuX2NvbHVtbnNbY29sdW1uXS5jZWxsc1tyb3ddLmZpeGVkID0gZml4ZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOabtOaWsOagvOWtkOmineWkluaji+WtkOebuOWFs+aVsOaNrlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbiDliJflj7dcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93IOihjOWPt1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBleHRyYUNvZGUg6aKd5aSW5qOL5a2Q57yW56CBXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtleHRyYUFzc2V0cz0tMV0g6aKd5aSW5qOL5a2Q6LWE5LqnXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtleHRyYVBvc2l0aW9uPS0xXSDpop3lpJbmo4vlrZDkvY3nva5cbiAgICAgKiBAbWVtYmVyb2YgU3BpblJlc3VsdHNTbG90XG4gICAgICovXG4gICAgdXBkYXRlQ2VsbEV4dHJhQ29kZShjb2x1bW4sIHJvdywgZXh0cmFDb2RlLCBleHRyYUFzc2V0cyA9IC0xLCBleHRyYVBvc2l0aW9uID0gLTEpIHtcbiAgICAgICAgdGhpcy5fY29sdW1uc1tjb2x1bW5dLmNlbGxzW3Jvd10uZXh0cmFDb2RlID0gZXh0cmFDb2RlO1xuICAgICAgICB0aGlzLl9jb2x1bW5zW2NvbHVtbl0uY2VsbHNbcm93XS5leHRyYUFzc2V0cyA9IGV4dHJhQXNzZXRzO1xuICAgICAgICB0aGlzLl9jb2x1bW5zW2NvbHVtbl0uY2VsbHNbcm93XS5leHRyYVBvc2l0aW9uID0gZXh0cmFQb3NpdGlvbjtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5pu05paw5qC85a2Q6L2s55uY5pWw5o2uXG4gICAgICogLSDmr5TlpoLmtbfmtIvlhbPnmoTlpKfnq6Dpsbzmo4vlrZDvvIzorqnnlKjmiLfpgInmi6nvvIznu5Pmnpzlt7Lnu4/pooTlrprvvIznm7jlvZPkuo7ovaznm5hcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW4g5YiX5Y+3XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJvdyDooYzlj7dcbiAgICAgKiBAcGFyYW0ge1NwaW5SZXN1bHRzV2hlZWx9IHdoZWVsIOi9rOebmOaVsOaNrlxuICAgICAqIEBtZW1iZXJvZiBTcGluUmVzdWx0c1Nsb3RcbiAgICAgKi9cbiAgICB1cGRhdGVDZWxsV2hlZWwoY29sdW1uLCByb3csIHZhbHVlcywgZmluYWxWYWx1ZSkge1xuICAgICAgICB0aGlzLl9jb2x1bW5zW2NvbHVtbl0uY2VsbHNbcm93XS53aGVlbCA9IG5ldyBTcGluUmVzdWx0c1doZWVsXzEuZGVmYXVsdCh2YWx1ZXMsIGZpbmFsVmFsdWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmm7TmlrDmoLzlrZDkuovku7ZcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW4g5YiX5Y+3XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJvdyDooYzlj7dcbiAgICAgKiBAcGFyYW0ge1NwaW5SZXN1bHRzRXZlbnRbXX0gZXZlbnRzIOS6i+S7tlxuICAgICAqIEBtZW1iZXJvZiBTcGluUmVzdWx0c1Nsb3RcbiAgICAgKi9cbiAgICB1cGRhdGVDZWxsRXZlbnRzKGNvbHVtbiwgcm93LCBldmVudHMpIHtcbiAgICAgICAgdGhpcy5fY29sdW1uc1tjb2x1bW5dLmNlbGxzW3Jvd10uZXZlbnRzID0gZXZlbnRzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmm7TmlrDlj5HnlJ/lj5jljJbnmoTmo4vlrZDnmoRtb2NrQ29kZXPlgLzvvIzlkIzml7bmm7TmlrBjb2Rl5YC8XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcltdfSBoYW5kIOabtOaWsOeahOaJi+eJjOaVsOaNru+8jOWPmOWMlueahOaji+WtkOS9jee9ruaJjeacieWAvO+8jOayoeWPmOWMlueahOaji+WtkOWAvOS4ui0xXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtblNpemUg5YiX5pWwXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJvd1NpemUg6KGM5pWwXG4gICAgICogQG1lbWJlcm9mIFNwaW5SZXN1bHRzXG4gICAgICovXG4gICAgdXBkYXRlQ2hhbmdlQ29kZU1vY2tDb2RlcyhoYW5kLCBjb2x1bW5TaXplLCByb3dTaXplKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGFuZC5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgY29uc3QgY29kZSA9IGhhbmRbaV07XG4gICAgICAgICAgICBjb25zdCBjb2x1bW4gPSBNYXRoLmZsb29yKGkgLyByb3dTaXplKTtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGkgJSByb3dTaXplO1xuICAgICAgICAgICAgbGV0IGN1ckNvZGUgPSBjb2RlID09PSAtMSA/IHRoaXMuX2NvbHVtbnNbY29sdW1uXS5jZWxsc1tyb3ddLmNvZGUgOiBjb2RlO1xuICAgICAgICAgICAgbGV0IHByZUNvZGUgPSBjb2RlID09PSAtMSA/IGNvZGUgOiB0aGlzLl9jb2x1bW5zW2NvbHVtbl0uY2VsbHNbcm93XS5jb2RlO1xuICAgICAgICAgICAgdGhpcy5fY29sdW1uc1tjb2x1bW5dLmNlbGxzW3Jvd10ubW9ja0NvZGVzLnB1c2gocHJlQ29kZSk7XG4gICAgICAgICAgICB0aGlzLl9jb2x1bW5zW2NvbHVtbl0uY2VsbHNbcm93XS5jb2RlID0gY3VyQ29kZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDmm7TmlrBtb2NrQ29kZXPlgLzvvIzlkIzml7bmm7TmlrBjb2Rl5YC8XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcltdfSBjdXJyZW50SGFuZCDlvZPliY3miYvniYzmlbDmja5cbiAgICAgKiBAcGFyYW0ge251bWJlcltdfSBwcmV2aW91c0hhbmQg5LmL5YmN55qE5omL54mM5pWw5o2uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtblNpemUg5YiX5pWwXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJvd1NpemUg6KGM5pWwXG4gICAgICogQG1lbWJlcm9mIFNwaW5SZXN1bHRzXG4gICAgICovXG4gICAgdXBkYXRlTW9ja0NvZGVzKGN1cnJlbnRIYW5kLCBwcmV2aW91c0hhbmQsIGNvbHVtblNpemUsIHJvd1NpemUpIHtcbiAgICAgICAgLy8g5Yik5pat5Y+C5pWw5ZCI5rOV5oCnXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShjdXJyZW50SGFuZCkgfHwgIUFycmF5LmlzQXJyYXkocHJldmlvdXNIYW5kKSB8fCBjdXJyZW50SGFuZC5sZW5ndGggIT09IHByZXZpb3VzSGFuZC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyDmr5TovoPmiYvniYzkuK3mr4/kuKrlgLzvvIzlpoLmnpznm7jlkIzvvIzloastMe+8m+WmguaenOS4jeWQjO+8jOWhq3ByZXZpb3VzSGFuZOS4reWvueW6lOeahOWAvFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRIYW5kLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Q29kZSA9IGN1cnJlbnRIYW5kW2ldO1xuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNDb2RlID0gcHJldmlvdXNIYW5kW2ldO1xuICAgICAgICAgICAgY29uc3QgbW9ja0NvZGUgPSBjdXJyZW50Q29kZSAhPT0gcHJldmlvdXNDb2RlID8gcHJldmlvdXNDb2RlIDogLTE7XG4gICAgICAgICAgICBjb25zdCBjb2x1bW4gPSBNYXRoLmZsb29yKGkgLyByb3dTaXplKTtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGkgJSByb3dTaXplO1xuICAgICAgICAgICAgdGhpcy5fY29sdW1uc1tjb2x1bW5dLmNlbGxzW3Jvd10ubW9ja0NvZGVzLnB1c2gobW9ja0NvZGUpO1xuICAgICAgICAgICAgdGhpcy5fY29sdW1uc1tjb2x1bW5dLmNlbGxzW3Jvd10uY29kZSA9IGN1cnJlbnRDb2RlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOabtOaWsOWIl+eahGlzSG9sZFdpblxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbiDliJflj7dcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzSG9sZFdpbiDmmK/lkKZob2xkIHdpblxuICAgICAqIEBtZW1iZXJvZiBTcGluUmVzdWx0c1xuICAgICAqL1xuICAgIHVwZGF0ZUNvbHVtbkhvbGRXaW4oY29sdW1uLCBpc0hvbGRXaW4pIHtcbiAgICAgICAgdGhpcy5fY29sdW1uc1tjb2x1bW5dLmlzSG9sZFdpbiA9IGlzSG9sZFdpbjtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5pu05paw5qC85a2QY29kZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJbXX0gaGFuZCDmiYvniYzmlbDmja5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93U2l6ZSDmo4vnm5jooYzmlbBcbiAgICAgKiBAbWVtYmVyb2YgU3BpblJlc3VsdHNTbG90XG4gICAgICovXG4gICAgdXBkYXRlQ2VsbHMoaGFuZCwgcm93U2l6ZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhhbmQubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSBoYW5kW2ldO1xuICAgICAgICAgICAgY29uc3QgY29sdW1uID0gTWF0aC5mbG9vcihpIC8gcm93U2l6ZSk7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBpICUgcm93U2l6ZTtcbiAgICAgICAgICAgIHRoaXMuX2NvbHVtbnNbY29sdW1uXS5jZWxsc1tyb3ddLmNvZGUgPSBjb2RlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWIneWni+WMllNwaW5SZXN1bHRTbG90XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcltdfSBoYW5kIOaJi+eJjFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW5TaXplIOWIl+aVsFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3dTaXplIOihjOaVsFxuICAgICAqIEBtZW1iZXJvZiBTcGluUmVzdWx0c1Nsb3RcbiAgICAgKi9cbiAgICBpbml0KGhhbmQsIGNvbHVtblNpemUsIHJvd1NpemUpIHtcbiAgICAgICAgbGV0IHJlZWxzID0gW107XG4gICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGNvbHVtblNpemU7ICsrY29sKSB7XG4gICAgICAgICAgICBsZXQgY2VsbHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHJvd1NpemU7ICsrcm93KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBjb2wgKiByb3dTaXplICsgcm93O1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvZGUgPSBoYW5kW3Bvc2l0aW9uXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gbmV3IFNwaW5SZXN1bHRzQ2VsbF8xLmRlZmF1bHQoY29kZSwgZmFsc2UsIFtdLCAwLCAtMSwgLTEsIC0xLCBudWxsLCBbXSk7XG4gICAgICAgICAgICAgICAgY2VsbHMucHVzaChjZWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlZWwgPSBuZXcgU3BpblJlc3VsdHNDb2x1bW5fMS5kZWZhdWx0KGNlbGxzLCBmYWxzZSk7XG4gICAgICAgICAgICByZWVscy5wdXNoKHJlZWwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sdW1ucyA9IHJlZWxzO1xuICAgIH1cbn07XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLlR5cGUoKCkgPT4gU3BpblJlc3VsdHNDb2x1bW5fMS5kZWZhdWx0KSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQXJyYXkpXG5dLCBTcGluUmVzdWx0c1Nsb3QucHJvdG90eXBlLCBcIl9jb2x1bW5zXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLlR5cGUoKCkgPT4gU3BpblJlc3VsdHNFdmVudF8xLmRlZmF1bHQpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBBcnJheSlcbl0sIFNwaW5SZXN1bHRzU2xvdC5wcm90b3R5cGUsIFwiX2V2ZW50c1wiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMS5UeXBlKCgpID0+IFNwaW5SZXN1bHRzU3ltYm9sXzEuZGVmYXVsdCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEFycmF5KVxuXSwgU3BpblJlc3VsdHNTbG90LnByb3RvdHlwZSwgXCJfZXh0cmFDaGVzc2VzXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLlR5cGUoKCkgPT4gU3BpblJlc3VsdHNXaGVlbF8xLmRlZmF1bHQpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBBcnJheSlcbl0sIFNwaW5SZXN1bHRzU2xvdC5wcm90b3R5cGUsIFwiX3doZWVsc1wiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMS5UeXBlKCgpID0+IFNwaW5SZXN1bHRzQ29sdW1uXzEuZGVmYXVsdCksXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMi5FeHBvc2UoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQXJyYXkpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbQXJyYXldKVxuXSwgU3BpblJlc3VsdHNTbG90LnByb3RvdHlwZSwgXCJjb2x1bW5zXCIsIG51bGwpO1xuX19kZWNvcmF0ZShbXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMi5FeHBvc2UoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQXJyYXkpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbQXJyYXldKVxuXSwgU3BpblJlc3VsdHNTbG90LnByb3RvdHlwZSwgXCJtYXRjaGVkTGluZXNcIiwgbnVsbCk7XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8yLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbTnVtYmVyXSlcbl0sIFNwaW5SZXN1bHRzU2xvdC5wcm90b3R5cGUsIFwib2ZBS2luZFwiLCBudWxsKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzEuVHlwZSgoKSA9PiBTcGluUmVzdWx0c1N5bWJvbF8xLmRlZmF1bHQpLFxuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzIuRXhwb3NlKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEFycmF5KSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW0FycmF5XSlcbl0sIFNwaW5SZXN1bHRzU2xvdC5wcm90b3R5cGUsIFwiZXh0cmFDaGVzc2VzXCIsIG51bGwpO1xuX19kZWNvcmF0ZShbXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMS5UeXBlKCgpID0+IFNwaW5SZXN1bHRzRXZlbnRfMS5kZWZhdWx0KSxcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8yLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBBcnJheSksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtBcnJheV0pXG5dLCBTcGluUmVzdWx0c1Nsb3QucHJvdG90eXBlLCBcImV2ZW50c1wiLCBudWxsKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzIuRXhwb3NlKCksXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMS5UeXBlKCgpID0+IFNwaW5SZXN1bHRzV2hlZWxfMS5kZWZhdWx0KSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQXJyYXkpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbQXJyYXldKVxuXSwgU3BpblJlc3VsdHNTbG90LnByb3RvdHlwZSwgXCJ3aGVlbHNcIiwgbnVsbCk7XG5TcGluUmVzdWx0c1Nsb3QgPSBfX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8yLkV4Y2x1ZGUoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW0FycmF5LCBBcnJheSwgTnVtYmVyXSlcbl0sIFNwaW5SZXN1bHRzU2xvdCk7XG5leHBvcnRzLmRlZmF1bHQgPSBTcGluUmVzdWx0c1Nsb3Q7XG4iXX0=