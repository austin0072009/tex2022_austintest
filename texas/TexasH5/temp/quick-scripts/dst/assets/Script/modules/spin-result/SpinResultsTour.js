
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/spin-result/SpinResultsTour.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxzcGluLXJlc3VsdFxcU3BpblJlc3VsdHNUb3VyLmpzIl0sIm5hbWVzIjpbIl9fZGVjb3JhdGUiLCJkZWNvcmF0b3JzIiwidGFyZ2V0Iiwia2V5IiwiZGVzYyIsImMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJyIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZCIsIlJlZmxlY3QiLCJkZWNvcmF0ZSIsImkiLCJkZWZpbmVQcm9wZXJ0eSIsIl9fbWV0YWRhdGEiLCJrIiwidiIsIm1ldGFkYXRhIiwiX19pbXBvcnREZWZhdWx0IiwibW9kIiwiX19lc01vZHVsZSIsImV4cG9ydHMiLCJ2YWx1ZSIsIlNwaW5SZXN1bHRzUmFua0luZm9fMSIsInJlcXVpcmUiLCJjbGFzc190cmFuc2Zvcm1lcl8xIiwiY2xhc3NfdHJhbnNmb3JtZXJfMiIsIlNwaW5SZXN1bHRzVG91ciIsInN0YXR1cyIsImNvdW50ZG93biIsInRvdGFsTWludXRlcyIsImF3YXJkIiwibWluZSIsIm15UHJldiIsInJhbmtzIiwiX3N0YXR1cyIsIl9jb3VudGRvd24iLCJfdG90YWxNaW51dGVzIiwiX2F3YXJkIiwiX21pbmUiLCJfbXlQcmV2IiwiX3JhbmtzIiwiVHlwZSIsInByb3RvdHlwZSIsIkFycmF5IiwiRXhwb3NlIiwiTnVtYmVyIiwiRXhjbHVkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUNBLElBQUlBLFVBQVUsR0FBSSxVQUFRLFNBQUtBLFVBQWQsSUFBNkIsVUFBVUMsVUFBVixFQUFzQkMsTUFBdEIsRUFBOEJDLEdBQTlCLEVBQW1DQyxJQUFuQyxFQUF5QztBQUNuRixNQUFJQyxDQUFDLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBbEI7QUFBQSxNQUEwQkMsQ0FBQyxHQUFHSCxDQUFDLEdBQUcsQ0FBSixHQUFRSCxNQUFSLEdBQWlCRSxJQUFJLEtBQUssSUFBVCxHQUFnQkEsSUFBSSxHQUFHSyxN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QUMsQ0FDUDJCLG1CQUFtQixDQUFDaUIsSUFBcEIsQ0FBeUI7QUFBQSxTQUFNbkIscUJBQXFCLFdBQTNCO0FBQUEsQ0FBekIsQ0FETyxFQUVQRyxtQkFBbUIsQ0FBQ21CLE1BQXBCLEVBRk8sRUFHUC9CLFVBQVUsQ0FBQyxhQUFELEVBQWdCOEIsS0FBaEIsQ0FISCxFQUlQOUIsVUFBVSxDQUFDLG1CQUFELEVBQXNCLENBQUM4QixLQUFELENBQXRCLENBSkgsQ0FBRCxFQUtQakIsZUFBZSxDQUFDZ0IsU0FMVCxFQUtvQixPQUxwQixFQUs2QixJQUw3QixDQUFWOztBQU1BaEIsZUFBZSxHQUFHN0IsVUFBVSxDQUFDLENBQ3pCNEIsbUJBQW1CLENBQUNxQixPQUFwQixFQUR5QixFQUV6QmpDLFVBQVUsQ0FBQyxtQkFBRCxFQUFzQixDQUFDZ0MsTUFBRCxFQUFTQSxNQUFULEVBQWlCQSxNQUFqQixFQUF5QkYsS0FBekIsRUFBZ0NyQixxQkFBcUIsV0FBckQsRUFDNUJBLHFCQUFxQixXQURPLEVBQ0dxQixLQURILENBQXRCLENBRmUsQ0FBRCxFQUl6QmpCLGVBSnlCLENBQTVCO0FBS0FOLE9BQU8sV0FBUCxHQUFrQk0sZUFBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFNwaW5SZXN1bHRzUmFua0luZm9fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9TcGluUmVzdWx0c1JhbmtJbmZvXCIpKTtcbmNvbnN0IGNsYXNzX3RyYW5zZm9ybWVyXzEgPSByZXF1aXJlKFwiY2xhc3MtdHJhbnNmb3JtZXJcIik7XG5jb25zdCBjbGFzc190cmFuc2Zvcm1lcl8yID0gcmVxdWlyZShcImNsYXNzLXRyYW5zZm9ybWVyXCIpO1xubGV0IFNwaW5SZXN1bHRzVG91ciA9IGNsYXNzIFNwaW5SZXN1bHRzVG91ciB7XG4gICAgY29uc3RydWN0b3Ioc3RhdHVzLCBjb3VudGRvd24sIHRvdGFsTWludXRlcywgYXdhcmQsIG1pbmUsIG15UHJldiwgcmFua3MpIHtcbiAgICAgICAgdGhpcy5fc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICB0aGlzLl9jb3VudGRvd24gPSBjb3VudGRvd247XG4gICAgICAgIHRoaXMuX3RvdGFsTWludXRlcyA9IHRvdGFsTWludXRlcztcbiAgICAgICAgdGhpcy5fYXdhcmQgPSBhd2FyZDtcbiAgICAgICAgdGhpcy5fbWluZSA9IG1pbmU7XG4gICAgICAgIHRoaXMuX215UHJldiA9IG15UHJldjtcbiAgICAgICAgdGhpcy5fcmFua3MgPSByYW5rcztcbiAgICB9XG4gICAgZ2V0IHN0YXR1cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXR1cztcbiAgICB9XG4gICAgc2V0IHN0YXR1cyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9zdGF0dXMgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGNvdW50ZG93bigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvdW50ZG93bjtcbiAgICB9XG4gICAgc2V0IGNvdW50ZG93bih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9jb3VudGRvd24gPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IHRvdGFsTWludXRlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvdGFsTWludXRlcztcbiAgICB9XG4gICAgc2V0IHRvdGFsTWludXRlcyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl90b3RhbE1pbnV0ZXMgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGF3YXJkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXdhcmQ7XG4gICAgfVxuICAgIHNldCBhd2FyZCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9hd2FyZCA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgbWluZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21pbmU7XG4gICAgfVxuICAgIHNldCBtaW5lKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX21pbmUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IG15UHJldigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX215UHJldjtcbiAgICB9XG4gICAgc2V0IG15UHJldih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9teVByZXYgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IHJhbmtzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmFua3M7XG4gICAgfVxuICAgIHNldCByYW5rcyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9yYW5rcyA9IHZhbHVlO1xuICAgIH1cbn07XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLlR5cGUoKCkgPT4gU3BpblJlc3VsdHNSYW5rSW5mb18xLmRlZmF1bHQpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTcGluUmVzdWx0c1JhbmtJbmZvXzEuZGVmYXVsdClcbl0sIFNwaW5SZXN1bHRzVG91ci5wcm90b3R5cGUsIFwiX21pbmVcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzEuVHlwZSgoKSA9PiBTcGluUmVzdWx0c1JhbmtJbmZvXzEuZGVmYXVsdCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFNwaW5SZXN1bHRzUmFua0luZm9fMS5kZWZhdWx0KVxuXSwgU3BpblJlc3VsdHNUb3VyLnByb3RvdHlwZSwgXCJfbXlQcmV2XCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLlR5cGUoKCkgPT4gU3BpblJlc3VsdHNSYW5rSW5mb18xLmRlZmF1bHQpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBBcnJheSlcbl0sIFNwaW5SZXN1bHRzVG91ci5wcm90b3R5cGUsIFwiX3JhbmtzXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8yLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbTnVtYmVyXSlcbl0sIFNwaW5SZXN1bHRzVG91ci5wcm90b3R5cGUsIFwic3RhdHVzXCIsIG51bGwpO1xuX19kZWNvcmF0ZShbXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMi5FeHBvc2UoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgTnVtYmVyKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW051bWJlcl0pXG5dLCBTcGluUmVzdWx0c1RvdXIucHJvdG90eXBlLCBcImNvdW50ZG93blwiLCBudWxsKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzIuRXhwb3NlKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE51bWJlciksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtOdW1iZXJdKVxuXSwgU3BpblJlc3VsdHNUb3VyLnByb3RvdHlwZSwgXCJ0b3RhbE1pbnV0ZXNcIiwgbnVsbCk7XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8yLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBBcnJheSksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtBcnJheV0pXG5dLCBTcGluUmVzdWx0c1RvdXIucHJvdG90eXBlLCBcImF3YXJkXCIsIG51bGwpO1xuX19kZWNvcmF0ZShbXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMS5UeXBlKCgpID0+IFNwaW5SZXN1bHRzUmFua0luZm9fMS5kZWZhdWx0KSxcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8yLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTcGluUmVzdWx0c1JhbmtJbmZvXzEuZGVmYXVsdCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtTcGluUmVzdWx0c1JhbmtJbmZvXzEuZGVmYXVsdF0pXG5dLCBTcGluUmVzdWx0c1RvdXIucHJvdG90eXBlLCBcIm1pbmVcIiwgbnVsbCk7XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLlR5cGUoKCkgPT4gU3BpblJlc3VsdHNSYW5rSW5mb18xLmRlZmF1bHQpLFxuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzIuRXhwb3NlKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFNwaW5SZXN1bHRzUmFua0luZm9fMS5kZWZhdWx0KSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW1NwaW5SZXN1bHRzUmFua0luZm9fMS5kZWZhdWx0XSlcbl0sIFNwaW5SZXN1bHRzVG91ci5wcm90b3R5cGUsIFwibXlQcmV2XCIsIG51bGwpO1xuX19kZWNvcmF0ZShbXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMS5UeXBlKCgpID0+IFNwaW5SZXN1bHRzUmFua0luZm9fMS5kZWZhdWx0KSxcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8yLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBBcnJheSksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtBcnJheV0pXG5dLCBTcGluUmVzdWx0c1RvdXIucHJvdG90eXBlLCBcInJhbmtzXCIsIG51bGwpO1xuU3BpblJlc3VsdHNUb3VyID0gX19kZWNvcmF0ZShbXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMi5FeGNsdWRlKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtOdW1iZXIsIE51bWJlciwgTnVtYmVyLCBBcnJheSwgU3BpblJlc3VsdHNSYW5rSW5mb18xLmRlZmF1bHQsXG4gICAgICAgIFNwaW5SZXN1bHRzUmFua0luZm9fMS5kZWZhdWx0LCBBcnJheV0pXG5dLCBTcGluUmVzdWx0c1RvdXIpO1xuZXhwb3J0cy5kZWZhdWx0ID0gU3BpblJlc3VsdHNUb3VyO1xuIl19