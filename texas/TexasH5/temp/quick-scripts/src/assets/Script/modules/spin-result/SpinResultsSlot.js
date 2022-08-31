"use strict";
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