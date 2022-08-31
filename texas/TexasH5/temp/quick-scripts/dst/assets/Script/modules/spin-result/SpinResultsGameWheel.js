
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/spin-result/SpinResultsGameWheel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxzcGluLXJlc3VsdFxcU3BpblJlc3VsdHNHYW1lV2hlZWwuanMiXSwibmFtZXMiOlsiX19kZWNvcmF0ZSIsImRlY29yYXRvcnMiLCJ0YXJnZXQiLCJrZXkiLCJkZXNjIiwiYyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInIiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJkIiwiUmVmbGVjdCIsImRlY29yYXRlIiwiaSIsImRlZmluZVByb3BlcnR5IiwiX19tZXRhZGF0YSIsImsiLCJ2IiwibWV0YWRhdGEiLCJleHBvcnRzIiwidmFsdWUiLCJfMSIsIl9faW1wb3J0RGVmYXVsdCIsInJlcXVpcmUiLCJjbGFzc190cmFuc2Zvcm1lcl8xIiwiY2xhc3NfdHJhbnNmb3JtZXJfMiIsIlNwaW5SZXN1bHRzR2FtZVdoZWVsIiwid2hlZWwiLCJ3aW5Db2lucyIsInRvdGFsQ29pbnMiLCJwcm9kdWN0SWQiLCJwcm9kdWN0Q29kZSIsInByb2R1Y3RQcmljZSIsImF3YXJkQ29sbGVjdElkIiwiX3doZWVsIiwiX3dpbkNvaW5zIiwiX3RvdGFsQ29pbnMiLCJfcHJvZHVjdElkIiwiX3Byb2R1Y3RDb2RlIiwiX3Byb2R1Y3RQcmljZSIsIl9hd2FyZENvbGxlY3RJZCIsIlR5cGUiLCJwcm90b3R5cGUiLCJFeHBvc2UiLCJOdW1iZXIiLCJTdHJpbmciLCJFeGNsdWRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBQ0EsSUFBSUEsVUFBVSxHQUFJLFVBQVEsU0FBS0EsVUFBZCxJQUE2QixVQUFVQyxVQUFWLEVBQXNCQyxNQUF0QixFQUE4QkMsR0FBOUIsRUFBbUNDLElBQW5DLEVBQXlDO0FBQ25GLE1BQUlDLENBQUMsR0FBR0MsU0FBUyxDQUFDQyxNQUFsQjtBQUFBLE1BQTBCQyxDQUFDLEdBQUdILENBQUMsR0FBRyxDQUFKLEdBQVFILE1BQVIsR0FBaUJFLElBQUksS0FBSyxJQUFULEdB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QkFBb0IsQ0FBQ2dCLFNBSmQsRUFJeUIsY0FKekIsRUFJeUMsSUFKekMsQ0FBVjs7QUFLQTNDLFVBQVUsQ0FBQyxDQUNQMEIsbUJBQW1CLENBQUNrQixNQUFwQixFQURPLEVBRVA1QixVQUFVLENBQUMsYUFBRCxFQUFnQjhCLE1BQWhCLENBRkgsRUFHUDlCLFVBQVUsQ0FBQyxtQkFBRCxFQUFzQixDQUFDOEIsTUFBRCxDQUF0QixDQUhILENBQUQsRUFJUG5CLG9CQUFvQixDQUFDZ0IsU0FKZCxFQUl5QixnQkFKekIsRUFJMkMsSUFKM0MsQ0FBVjs7QUFLQTNDLFVBQVUsQ0FBQyxDQUNQeUIsbUJBQW1CLENBQUNpQixJQUFwQixDQUF5QjtBQUFBLFNBQU1wQixFQUFOO0FBQUEsQ0FBekIsQ0FETyxFQUVQSSxtQkFBbUIsQ0FBQ2tCLE1BQXBCLEVBRk8sRUFHUDVCLFVBQVUsQ0FBQyxhQUFELEVBQWdCTSxFQUFoQixDQUhILEVBSVBOLFVBQVUsQ0FBQyxtQkFBRCxFQUFzQixDQUFDTSxFQUFELENBQXRCLENBSkgsQ0FBRCxFQUtQSyxvQkFBb0IsQ0FBQ2dCLFNBTGQsRUFLeUIsT0FMekIsRUFLa0MsSUFMbEMsQ0FBVjs7QUFNQWhCLG9CQUFvQixHQUFHM0IsVUFBVSxDQUFDLENBQzlCMEIsbUJBQW1CLENBQUNxQixPQUFwQixFQUQ4QixFQUU5Qi9CLFVBQVUsQ0FBQyxtQkFBRCxFQUFzQixDQUFDTSxFQUFELEVBQUt1QixNQUFMLEVBQWFBLE1BQWIsRUFBcUJDLE1BQXJCLEVBQTZCQSxNQUE3QixFQUFxQ0QsTUFBckMsRUFBNkNDLE1BQTdDLENBQXRCLENBRm9CLENBQUQsRUFHOUJuQixvQkFIOEIsQ0FBakM7QUFJQVAsT0FBTyxXQUFQLEdBQWtCTyxvQkFBbEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1NwaW5SZXN1bHRzV2hlZWxcIikpO1xuY29uc3QgY2xhc3NfdHJhbnNmb3JtZXJfMSA9IHJlcXVpcmUoXCJjbGFzcy10cmFuc2Zvcm1lclwiKTtcbmNvbnN0IGNsYXNzX3RyYW5zZm9ybWVyXzIgPSByZXF1aXJlKFwiY2xhc3MtdHJhbnNmb3JtZXJcIik7XG5sZXQgU3BpblJlc3VsdHNHYW1lV2hlZWwgPSBjbGFzcyBTcGluUmVzdWx0c0dhbWVXaGVlbCB7XG4gICAgY29uc3RydWN0b3Iod2hlZWwsIHdpbkNvaW5zLCB0b3RhbENvaW5zLCBwcm9kdWN0SWQsIHByb2R1Y3RDb2RlLCBwcm9kdWN0UHJpY2UsIGF3YXJkQ29sbGVjdElkKSB7XG4gICAgICAgIHRoaXMuX3doZWVsID0gd2hlZWw7XG4gICAgICAgIHRoaXMuX3dpbkNvaW5zID0gd2luQ29pbnM7XG4gICAgICAgIHRoaXMuX3RvdGFsQ29pbnMgPSB0b3RhbENvaW5zO1xuICAgICAgICB0aGlzLl9wcm9kdWN0SWQgPSBwcm9kdWN0SWQ7XG4gICAgICAgIHRoaXMuX3Byb2R1Y3RDb2RlID0gcHJvZHVjdENvZGU7XG4gICAgICAgIHRoaXMuX3Byb2R1Y3RQcmljZSA9IHByb2R1Y3RQcmljZTtcbiAgICAgICAgdGhpcy5fYXdhcmRDb2xsZWN0SWQgPSBhd2FyZENvbGxlY3RJZDtcbiAgICB9XG4gICAgZ2V0IHdpbkNvaW5zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fd2luQ29pbnM7XG4gICAgfVxuICAgIHNldCB3aW5Db2lucyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl93aW5Db2lucyA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgdG90YWxDb2lucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvdGFsQ29pbnM7XG4gICAgfVxuICAgIHNldCB0b3RhbENvaW5zKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3RvdGFsQ29pbnMgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IHByb2R1Y3RJZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2R1Y3RJZDtcbiAgICB9XG4gICAgc2V0IHByb2R1Y3RJZCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9wcm9kdWN0SWQgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IHByb2R1Y3RDb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZHVjdENvZGU7XG4gICAgfVxuICAgIHNldCBwcm9kdWN0Q29kZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9wcm9kdWN0Q29kZSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgcHJvZHVjdFByaWNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZHVjdFByaWNlO1xuICAgIH1cbiAgICBzZXQgcHJvZHVjdFByaWNlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3Byb2R1Y3RQcmljZSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgYXdhcmRDb2xsZWN0SWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hd2FyZENvbGxlY3RJZDtcbiAgICB9XG4gICAgc2V0IGF3YXJkQ29sbGVjdElkKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2F3YXJkQ29sbGVjdElkID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCB3aGVlbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3doZWVsO1xuICAgIH1cbiAgICBzZXQgd2hlZWwodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fd2hlZWwgPSB2YWx1ZTtcbiAgICB9XG59O1xuX19kZWNvcmF0ZShbXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMS5UeXBlKCgpID0+IF8xKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgXzEpXG5dLCBTcGluUmVzdWx0c0dhbWVXaGVlbC5wcm90b3R5cGUsIFwiX3doZWVsXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8yLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbTnVtYmVyXSlcbl0sIFNwaW5SZXN1bHRzR2FtZVdoZWVsLnByb3RvdHlwZSwgXCJ3aW5Db2luc1wiLCBudWxsKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzIuRXhwb3NlKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE51bWJlciksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtOdW1iZXJdKVxuXSwgU3BpblJlc3VsdHNHYW1lV2hlZWwucHJvdG90eXBlLCBcInRvdGFsQ29pbnNcIiwgbnVsbCk7XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8yLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbU3RyaW5nXSlcbl0sIFNwaW5SZXN1bHRzR2FtZVdoZWVsLnByb3RvdHlwZSwgXCJwcm9kdWN0SWRcIiwgbnVsbCk7XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8yLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbU3RyaW5nXSlcbl0sIFNwaW5SZXN1bHRzR2FtZVdoZWVsLnByb3RvdHlwZSwgXCJwcm9kdWN0Q29kZVwiLCBudWxsKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzIuRXhwb3NlKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE51bWJlciksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtOdW1iZXJdKVxuXSwgU3BpblJlc3VsdHNHYW1lV2hlZWwucHJvdG90eXBlLCBcInByb2R1Y3RQcmljZVwiLCBudWxsKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzIuRXhwb3NlKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZyksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtTdHJpbmddKVxuXSwgU3BpblJlc3VsdHNHYW1lV2hlZWwucHJvdG90eXBlLCBcImF3YXJkQ29sbGVjdElkXCIsIG51bGwpO1xuX19kZWNvcmF0ZShbXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMS5UeXBlKCgpID0+IF8xKSxcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8yLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBfMSksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtfMV0pXG5dLCBTcGluUmVzdWx0c0dhbWVXaGVlbC5wcm90b3R5cGUsIFwid2hlZWxcIiwgbnVsbCk7XG5TcGluUmVzdWx0c0dhbWVXaGVlbCA9IF9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzIuRXhjbHVkZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbXzEsIE51bWJlciwgTnVtYmVyLCBTdHJpbmcsIFN0cmluZywgTnVtYmVyLCBTdHJpbmddKVxuXSwgU3BpblJlc3VsdHNHYW1lV2hlZWwpO1xuZXhwb3J0cy5kZWZhdWx0ID0gU3BpblJlc3VsdHNHYW1lV2hlZWw7XG4iXX0=