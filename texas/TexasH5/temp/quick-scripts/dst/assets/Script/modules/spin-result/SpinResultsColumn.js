
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/spin-result/SpinResultsColumn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxzcGluLXJlc3VsdFxcU3BpblJlc3VsdHNDb2x1bW4uanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIl9fZGVjb3JhdGUiLCJkZWNvcmF0b3JzIiwidGFyZ2V0Iiwia2V5IiwiZGVzYyIsImMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJyIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZCIsIlJlZmxlY3QiLCJkZWNvcmF0ZSIsImkiLCJkZWZpbmVQcm9wZXJ0eSIsIl9fbWV0YWRhdGEiLCJrIiwidiIsIm1ldGFkYXRhIiwiX19pbXBvcnREZWZhdWx0IiwibW9kIiwiX19lc01vZHVsZSIsImV4cG9ydHMiLCJ2YWx1ZSIsIlNwaW5SZXN1bHRzQ2VsbF8xIiwiU3BpblJlc3VsdHNDb25zdF8xIiwiY2xhc3NfdHJhbnNmb3JtZXJfMSIsIlNwaW5SZXN1bHRzQ29sdW1uIiwiY2VsbHMiLCJpc0hvbGRXaW4iLCJfY2VsbHMiLCJfY29kZXMiLCJfc3RvcENvZGVzIiwiX3JlcGxhY2VDb2RlcyIsIl9pc0hvbGRXaW4iLCJnZXRSZXBsYWNlQ29kZXMiLCJjb2RlIiwibW9ja0NvZGVzIiwic3RvcENvZGUiLCJOT19NT0NLX0NPREUiLCJyZXBsYWNlQ29kZXMiLCJub1JlcGxhY2VDb2Rlc1Bvc2l0aW9uIiwicHVzaCIsInNoaWZ0Iiwic3BsaWNlIiwiY2VsbCIsInJlcGxhY2UiLCJUeXBlIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJFeHBvc2UiLCJCb29sZWFuIiwiRXhjbHVkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUNBQSxPQUFPLENBQUMsa0JBQUQsQ0FBUDs7QUFDQSxJQUFJQyxVQUFVLEdBQUksVUFBUSxTQUFLQSxVQUFkLElBQTZCLFVBQVVDLFVBQVYsRUFBc0JDLE1BQXRCLEVBQThCQyxHQUE5QixFQUFtQ0MsSUFBbkMsRUFBeUM7QUFDbkYsTUFBSUMsQ0FBQyxHQUFH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OUI7QUFJQUwsT0FBTyxXQUFQLEdBQWtCSyxpQkFBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xucmVxdWlyZShcInJlZmxlY3QtbWV0YWRhdGFcIik7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgU3BpblJlc3VsdHNDZWxsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vU3BpblJlc3VsdHNDZWxsXCIpKTtcbmNvbnN0IFNwaW5SZXN1bHRzQ29uc3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9TcGluUmVzdWx0c0NvbnN0XCIpKTtcbmNvbnN0IGNsYXNzX3RyYW5zZm9ybWVyXzEgPSByZXF1aXJlKFwiY2xhc3MtdHJhbnNmb3JtZXJcIik7XG5sZXQgU3BpblJlc3VsdHNDb2x1bW4gPSBjbGFzcyBTcGluUmVzdWx0c0NvbHVtbiB7XG4gICAgY29uc3RydWN0b3IoY2VsbHMsIGlzSG9sZFdpbikge1xuICAgICAgICB0aGlzLl9jZWxscyA9IFtdO1xuICAgICAgICB0aGlzLl9jb2RlcyA9IFtdO1xuICAgICAgICB0aGlzLl9zdG9wQ29kZXMgPSBbXTtcbiAgICAgICAgdGhpcy5fcmVwbGFjZUNvZGVzID0gW107XG4gICAgICAgIHRoaXMuX2lzSG9sZFdpbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pc0hvbGRXaW4gPSBpc0hvbGRXaW47XG4gICAgICAgIHRoaXMuY2VsbHMgPSBjZWxscztcbiAgICB9XG4gICAgZ2V0IGNlbGxzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2VsbHM7XG4gICAgfVxuICAgIHNldCBjZWxscyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9jZWxscyA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9jb2RlcyA9IFtdO1xuICAgICAgICB0aGlzLl9zdG9wQ29kZXMgPSBbXTtcbiAgICAgICAgdGhpcy5fcmVwbGFjZUNvZGVzID0gW107XG4gICAgICAgIGlmICghdGhpcy5fY2VsbHMpIHtcbiAgICAgICAgICAgIHRoaXMuX2NlbGxzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9jZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuX2NlbGxzW2ldO1xuICAgICAgICAgICAgdGhpcy5fY29kZXMucHVzaChjZWxsLmNvZGUpO1xuICAgICAgICAgICAgbGV0IHJlcGxhY2UgPSB0aGlzLmdldFJlcGxhY2VDb2RlcyhjZWxsLmNvZGUsIGNlbGwubW9ja0NvZGVzKTtcbiAgICAgICAgICAgIHRoaXMuX3N0b3BDb2Rlcy5wdXNoKHJlcGxhY2Uuc3RvcENvZGUpO1xuICAgICAgICAgICAgdGhpcy5fcmVwbGFjZUNvZGVzLnB1c2gocmVwbGFjZS5yZXBsYWNlQ29kZXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFJlcGxhY2VDb2Rlcyhjb2RlLCBtb2NrQ29kZXMpIHtcbiAgICAgICAgbGV0IHN0b3BDb2RlID0gU3BpblJlc3VsdHNDb25zdF8xLmRlZmF1bHQuTk9fTU9DS19DT0RFO1xuICAgICAgICBsZXQgcmVwbGFjZUNvZGVzID0gW107XG4gICAgICAgIGxldCBub1JlcGxhY2VDb2Rlc1Bvc2l0aW9uID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9ja0NvZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobW9ja0NvZGVzW2ldID09PSBTcGluUmVzdWx0c0NvbnN0XzEuZGVmYXVsdC5OT19NT0NLX0NPREUpIHtcbiAgICAgICAgICAgICAgICBub1JlcGxhY2VDb2Rlc1Bvc2l0aW9uLnB1c2goaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXBsYWNlQ29kZXMucHVzaChtb2NrQ29kZXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyZXBsYWNlQ29kZXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN0b3BDb2RlOiBjb2RlLCByZXBsYWNlQ29kZXM6IG1vY2tDb2RlcyB9O1xuICAgICAgICB9XG4gICAgICAgIHN0b3BDb2RlID0gcmVwbGFjZUNvZGVzLnNoaWZ0KCk7XG4gICAgICAgIHJlcGxhY2VDb2Rlcy5wdXNoKGNvZGUpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vUmVwbGFjZUNvZGVzUG9zaXRpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJlcGxhY2VDb2Rlcy5zcGxpY2Uobm9SZXBsYWNlQ29kZXNQb3NpdGlvbltpXSwgMCwgU3BpblJlc3VsdHNDb25zdF8xLmRlZmF1bHQuTk9fTU9DS19DT0RFKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdG9wQ29kZTogc3RvcENvZGUsIHJlcGxhY2VDb2RlczogcmVwbGFjZUNvZGVzIH07XG4gICAgfVxuICAgIGdldCBjb2RlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvZGVzO1xuICAgIH1cbiAgICBnZXQgaXNIb2xkV2luKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNIb2xkV2luO1xuICAgIH1cbiAgICBzZXQgaXNIb2xkV2luKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2lzSG9sZFdpbiA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgcmVwbGFjZUNvZGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVwbGFjZUNvZGVzO1xuICAgIH1cbiAgICBnZXQgc3RvcENvZGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RvcENvZGVzO1xuICAgIH1cbn07XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLlR5cGUoKCkgPT4gU3BpblJlc3VsdHNDZWxsXzEuZGVmYXVsdCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEFycmF5KVxuXSwgU3BpblJlc3VsdHNDb2x1bW4ucHJvdG90eXBlLCBcIl9jZWxsc1wiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMS5FeHBvc2UoKSxcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLlR5cGUoKCkgPT4gU3BpblJlc3VsdHNDZWxsXzEuZGVmYXVsdCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEFycmF5KSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW0FycmF5XSlcbl0sIFNwaW5SZXN1bHRzQ29sdW1uLnByb3RvdHlwZSwgXCJjZWxsc1wiLCBudWxsKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzEuRXhwb3NlKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbQm9vbGVhbl0pXG5dLCBTcGluUmVzdWx0c0NvbHVtbi5wcm90b3R5cGUsIFwiaXNIb2xkV2luXCIsIG51bGwpO1xuU3BpblJlc3VsdHNDb2x1bW4gPSBfX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLkV4Y2x1ZGUoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW0FycmF5LCBCb29sZWFuXSlcbl0sIFNwaW5SZXN1bHRzQ29sdW1uKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFNwaW5SZXN1bHRzQ29sdW1uO1xuIl19