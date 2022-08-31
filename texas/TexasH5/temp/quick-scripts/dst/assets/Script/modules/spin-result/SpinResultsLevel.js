
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/spin-result/SpinResultsLevel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxzcGluLXJlc3VsdFxcU3BpblJlc3VsdHNMZXZlbC5qcyJdLCJuYW1lcyI6WyJfX2RlY29yYXRlIiwiZGVjb3JhdG9ycyIsInRhcmdldCIsImtleSIsImRlc2MiLCJjIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiciIsIk9iamVjdCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImQiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJpIiwiZGVmaW5lUHJvcGVydHkiLCJfX21ldGFkYXRhIiwiayIsInYiLCJtZXRhZGF0YSIsIl9faW1wb3J0RGVmYXVsdCIsIm1vZCIsIl9fZXNNb2R1bGUiLCJleHBvcnRzIiwidmFsdWUiLCJjbGFzc190cmFuc2Zvcm1lcl8xIiwicmVxdWlyZSIsIlNwaW5SZXN1bHRzVXBncmFkZV8xIiwiY2xhc3NfdHJhbnNmb3JtZXJfMiIsIlNwaW5SZXN1bHRzTGV2ZWwiLCJsZXZlbCIsImN1cnJlbnRWYWx1ZSIsInRvdGFsVmFsdWUiLCJ1cGdyYWRlIiwiX2xldmVsIiwiX2N1cnJlbnRWYWx1ZSIsIl90b3RhbFZhbHVlIiwiX3VwZ3JhZGUiLCJUeXBlIiwicHJvdG90eXBlIiwiRXhwb3NlIiwiTnVtYmVyIiwiRXhjbHVkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUNBLElBQUlBLFVBQVUsR0FBSSxVQUFRLFNBQUtBLFVBQWQsSUFBNkIsVUFBVUMsVUFBVixFQUFzQkMsTUFBdEIsRUFBOEJDLEdBQTlCLEVBQW1DQyxJQUFuQyxFQUF5QztBQUNuRixNQUFJQyxDQUFDLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBbEI7QUFBQSxNQUEwQkMsQ0FBQyxHQUFHSCxDQUFDLEdBQUcsQ0FBSixHQUFRSCxNQUFSLEdBQWlCRSxJQUFJLEtBQUssSUFBVCxHQUFnQkEsSUFBSSxHQUFHSyxNQUFNLENBQUNDLHdCQUFQLENBQWdDUixNQUFoQyxFQUF3Q0MsR0FBeEMsQ0FBdkIsR0FBc0VD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Q0FBQ3lCLE1BQUQsQ0FBdEIsQ0FISCxDQUFELEVBSVBaLGdCQUFnQixDQUFDVSxTQUpWLEVBSXFCLFlBSnJCLEVBSW1DLElBSm5DLENBQVY7O0FBS0F2QyxVQUFVLENBQUMsQ0FDUHlCLG1CQUFtQixDQUFDYSxJQUFwQixDQUF5QjtBQUFBLFNBQU1YLG9CQUFvQixXQUExQjtBQUFBLENBQXpCLENBRE8sRUFFUEMsbUJBQW1CLENBQUNZLE1BQXBCLEVBRk8sRUFHUHhCLFVBQVUsQ0FBQyxhQUFELEVBQWdCVyxvQkFBb0IsV0FBcEMsQ0FISCxFQUlQWCxVQUFVLENBQUMsbUJBQUQsRUFBc0IsQ0FBQ1csb0JBQW9CLFdBQXJCLENBQXRCLENBSkgsQ0FBRCxFQUtQRSxnQkFBZ0IsQ0FBQ1UsU0FMVixFQUtxQixTQUxyQixFQUtnQyxJQUxoQyxDQUFWOztBQU1BVixnQkFBZ0IsR0FBRzdCLFVBQVUsQ0FBQyxDQUMxQjRCLG1CQUFtQixDQUFDYyxPQUFwQixFQUQwQixFQUUxQjFCLFVBQVUsQ0FBQyxtQkFBRCxFQUFzQixDQUFDeUIsTUFBRCxFQUFTQSxNQUFULEVBQWlCQSxNQUFqQixFQUF5QmQsb0JBQW9CLFdBQTdDLENBQXRCLENBRmdCLENBQUQsRUFHMUJFLGdCQUgwQixDQUE3QjtBQUlBTixPQUFPLFdBQVAsR0FBa0JNLGdCQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgY2xhc3NfdHJhbnNmb3JtZXJfMSA9IHJlcXVpcmUoXCJjbGFzcy10cmFuc2Zvcm1lclwiKTtcbmNvbnN0IFNwaW5SZXN1bHRzVXBncmFkZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1NwaW5SZXN1bHRzVXBncmFkZVwiKSk7XG5jb25zdCBjbGFzc190cmFuc2Zvcm1lcl8yID0gcmVxdWlyZShcImNsYXNzLXRyYW5zZm9ybWVyXCIpO1xubGV0IFNwaW5SZXN1bHRzTGV2ZWwgPSBjbGFzcyBTcGluUmVzdWx0c0xldmVsIHtcbiAgICBjb25zdHJ1Y3RvcihsZXZlbCwgY3VycmVudFZhbHVlLCB0b3RhbFZhbHVlLCB1cGdyYWRlKSB7XG4gICAgICAgIHRoaXMuX2xldmVsID0gbGV2ZWw7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRWYWx1ZSA9IGN1cnJlbnRWYWx1ZTtcbiAgICAgICAgdGhpcy5fdG90YWxWYWx1ZSA9IHRvdGFsVmFsdWU7XG4gICAgICAgIHRoaXMuX3VwZ3JhZGUgPSB1cGdyYWRlO1xuICAgIH1cbiAgICBnZXQgbGV2ZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sZXZlbDtcbiAgICB9XG4gICAgc2V0IGxldmVsKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2xldmVsID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBjdXJyZW50VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50VmFsdWU7XG4gICAgfVxuICAgIHNldCBjdXJyZW50VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fY3VycmVudFZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCB0b3RhbFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdG90YWxWYWx1ZTtcbiAgICB9XG4gICAgc2V0IHRvdGFsVmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdG90YWxWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgdXBncmFkZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VwZ3JhZGU7XG4gICAgfVxuICAgIHNldCB1cGdyYWRlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3VwZ3JhZGUgPSB2YWx1ZTtcbiAgICB9XG59O1xuX19kZWNvcmF0ZShbXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMS5UeXBlKCgpID0+IFNwaW5SZXN1bHRzVXBncmFkZV8xLmRlZmF1bHQpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTcGluUmVzdWx0c1VwZ3JhZGVfMS5kZWZhdWx0KVxuXSwgU3BpblJlc3VsdHNMZXZlbC5wcm90b3R5cGUsIFwiX3VwZ3JhZGVcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzIuRXhwb3NlKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE51bWJlciksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtOdW1iZXJdKVxuXSwgU3BpblJlc3VsdHNMZXZlbC5wcm90b3R5cGUsIFwibGV2ZWxcIiwgbnVsbCk7XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8yLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbTnVtYmVyXSlcbl0sIFNwaW5SZXN1bHRzTGV2ZWwucHJvdG90eXBlLCBcImN1cnJlbnRWYWx1ZVwiLCBudWxsKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzIuRXhwb3NlKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE51bWJlciksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtOdW1iZXJdKVxuXSwgU3BpblJlc3VsdHNMZXZlbC5wcm90b3R5cGUsIFwidG90YWxWYWx1ZVwiLCBudWxsKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzEuVHlwZSgoKSA9PiBTcGluUmVzdWx0c1VwZ3JhZGVfMS5kZWZhdWx0KSxcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8yLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTcGluUmVzdWx0c1VwZ3JhZGVfMS5kZWZhdWx0KSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW1NwaW5SZXN1bHRzVXBncmFkZV8xLmRlZmF1bHRdKVxuXSwgU3BpblJlc3VsdHNMZXZlbC5wcm90b3R5cGUsIFwidXBncmFkZVwiLCBudWxsKTtcblNwaW5SZXN1bHRzTGV2ZWwgPSBfX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8yLkV4Y2x1ZGUoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW051bWJlciwgTnVtYmVyLCBOdW1iZXIsIFNwaW5SZXN1bHRzVXBncmFkZV8xLmRlZmF1bHRdKVxuXSwgU3BpblJlc3VsdHNMZXZlbCk7XG5leHBvcnRzLmRlZmF1bHQgPSBTcGluUmVzdWx0c0xldmVsO1xuIl19