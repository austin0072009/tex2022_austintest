
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/spin-result/SpinResultsGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1ed3cCHPFVHEbcdtsHguT09', 'SpinResultsGame');
// Script/modules/spin-result/SpinResultsGame.js

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

var SpinResultsGameStatus_1 = require("./SpinResultsGameStatus");

var SpinResultsGame = /*#__PURE__*/function () {
  function SpinResultsGame(_id, _code, _isFree, _hasJackpot, _jackpot, _jackpot2, _status, _isTopGame, _isVertical, _orderNumber, _version) {
    this._id = _id;
    this._code = _code;
    this._isFree = _isFree;
    this._hasJackpot = _hasJackpot;
    this._jackpot = _jackpot;
    this._jackpot2 = _jackpot2;
    this._status = _status;
    this._isTopGame = _isTopGame;
    this._isVertical = _isVertical;
    this._orderNumber = _orderNumber;
    this._version = _version;
  }
  /**
   * 关卡ID
   *
   * @readonly
   * @type {string}
   * @memberof SpinResultsGame
   */


  _createClass(SpinResultsGame, [{
    key: "id",
    get: function get() {
      return this._id;
    },
    set: function set(value) {
      this._id = value;
    }
    /**
     * 关卡代号
     *
     * @readonly
     * @type {string}
     * @memberof SpinResultsGame
     */

  }, {
    key: "code",
    get: function get() {
      return this._code;
    },
    set: function set(value) {
      this._code = value;
    }
    /**
     * 奖池金额1
     *
     * @readonly
     * @type {string}
     * @memberof SpinResultsGame
     */

  }, {
    key: "jackpot",
    get: function get() {
      return this._jackpot;
    },
    set: function set(value) {
      this._jackpot = value;
    }
    /**
     * 奖池金额2
     *
     * @readonly
     * @type {string}
     * @memberof SpinResultsGame
     */

  }, {
    key: "jackpot2",
    get: function get() {
      return this._jackpot2;
    },
    set: function set(value) {
      this._jackpot2 = value;
    }
    /**
     * 是否有奖池
     *
     * @readonly
     * @type {boolean}
     * @memberof SpinResultsGame
     */

  }, {
    key: "hasJackpot",
    get: function get() {
      return this._hasJackpot;
    },
    set: function set(value) {
      this._hasJackpot = value;
    }
    /**
     * 是否免费
     *
     * @readonly
     * @type {boolean}
     * @memberof SpinResultsGame
     */

  }, {
    key: "isFree",
    get: function get() {
      return this._isFree;
    },
    set: function set(value) {
      this._isFree = value;
    }
    /**
     * 是否免费
     *
     * @readonly
     * @type {boolean}
     * @memberof SpinResultsGame
     */

  }, {
    key: "status",
    get: function get() {
      return this._status;
    },
    set: function set(value) {
      this._status = value;
    }
    /**
     * 是否置顶游戏
     *
     * @readonly
     * @type {boolean}
     * @memberof SpinResultsGame
     */

  }, {
    key: "isTopGame",
    get: function get() {
      return this._isTopGame;
    },
    set: function set(value) {
      this._isTopGame = value;
    }
    /**
     * 是否竖屏
     *
     * @readonly
     * @type {boolean}
     * @memberof SpinResultsGame
     */

  }, {
    key: "isVertical",
    get: function get() {
      return this._isVertical;
    },
    set: function set(value) {
      this._isVertical = value;
    }
    /**
     * 关卡顺序，解锁等级
     *
     * @readonly
     * @type {number}
     * @memberof SpinResultsUpgrade
     */

  }, {
    key: "orderNumber",
    get: function get() {
      return this._orderNumber;
    },
    set: function set(value) {
      this._orderNumber = value;
    }
    /**
     * 版本号
     *
     * @readonly
     * @type {string}
     * @memberof SpinResultsGame
     */

  }, {
    key: "version",
    get: function get() {
      return this._version;
    },
    set: function set(value) {
      this._version = value;
    }
  }]);

  return SpinResultsGame;
}();

__decorate([class_transformer_1.Expose(), __metadata("design:type", String), __metadata("design:paramtypes", [String])], SpinResultsGame.prototype, "id", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", String), __metadata("design:paramtypes", [String])], SpinResultsGame.prototype, "code", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", String), __metadata("design:paramtypes", [String])], SpinResultsGame.prototype, "jackpot", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", String), __metadata("design:paramtypes", [String])], SpinResultsGame.prototype, "jackpot2", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], SpinResultsGame.prototype, "hasJackpot", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], SpinResultsGame.prototype, "isFree", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsGame.prototype, "status", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], SpinResultsGame.prototype, "isTopGame", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], SpinResultsGame.prototype, "isVertical", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SpinResultsGame.prototype, "orderNumber", null);

__decorate([class_transformer_1.Expose(), __metadata("design:type", String), __metadata("design:paramtypes", [String])], SpinResultsGame.prototype, "version", null);

SpinResultsGame = __decorate([class_transformer_1.Exclude(), __metadata("design:paramtypes", [String, String, Boolean, Boolean, String, String, Number, Boolean, Boolean, Number, String])], SpinResultsGame);
exports["default"] = SpinResultsGame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxzcGluLXJlc3VsdFxcU3BpblJlc3VsdHNHYW1lLmpzIl0sIm5hbWVzIjpbIl9fZGVjb3JhdGUiLCJkZWNvcmF0b3JzIiwidGFyZ2V0Iiwia2V5IiwiZGVzYyIsImMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJyIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZCIsIlJlZmxlY3QiLCJkZWNvcmF0ZSIsImkiLCJkZWZpbmVQcm9wZXJ0eSIsIl9fbWV0YWRhdGEiLCJrIiwidiIsIm1ldGFkYXRhIiwiZXhwb3J0cyIsInZhbHVlIiwiY2xhc3NfdHJhbnNmb3JtZXJfMSIsInJlcXVpcmUiLCJTcGluUmVzdWx0c0dhbWVTdGF0dXNfMSIsIlNwaW5SZXN1bHRzR2FtZSIsIl9pZCIsIl9jb2RlIiwiX2lzRnJlZSIsIl9oYXNKYWNrcG90IiwiX2phY2twb3QiLCJfamFja3BvdDIiLCJfc3RhdHVzIiwiX2lzVG9wR2FtZSIsIl9pc1ZlcnRpY2FsIiwiX29yZGVyTnVtYmVyIiwiX3ZlcnNpb24iLCJFeHBvc2UiLCJTdHJpbmciLCJwcm90b3R5cGUiLCJCb29sZWFuIiwiTnVtYmVyIiwiRXhjbHVkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUNBLElBQUlBLFVBQVUsR0FBSSxVQUFRLFNBQUtBLFVBQWQsSUFBNkIsVUFBVUMsVUFBVixFQUFzQkMsTUFBdEIsRUFBOEJDLEdBQTlCLEVBQW1DQyxJQUFuQyxFQUF5QztBQUNuRixNQUFJQyxDQUFDLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBbEI7QUFBQSxNQUEwQkMsQ0FBQyxHQUFHSCxDQUFDLEdBQUcsQ0FBSixHQUFRSCxNQUFSLEdBQWlCRSxJQUFJLEtBQUssSUFBVCxHQUFnQkEsSUFBSSxHQUFHSyxNQUFNLENBQUNDLHdCQUFQLENBQWdDUixNQUFoQyxFQUF3Q0MsR0FBeEMsQ0FBdkIsR0FBc0VDLElBQXJIO0FBQUEsTUFBMkhP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Q0FBdEIsQ0FISCxDQUFELEVBSVBiLGVBQWUsQ0FBQ2MsU0FKVCxFQUlvQixTQUpwQixFQUkrQixJQUovQixDQUFWOztBQUtBZCxlQUFlLEdBQUd6QixVQUFVLENBQUMsQ0FDekJzQixtQkFBbUIsQ0FBQ29CLE9BQXBCLEVBRHlCLEVBRXpCMUIsVUFBVSxDQUFDLG1CQUFELEVBQXNCLENBQUNzQixNQUFELEVBQVNBLE1BQVQsRUFBaUJFLE9BQWpCLEVBQTBCQSxPQUExQixFQUFtQ0YsTUFBbkMsRUFBMkNBLE1BQTNDLEVBQW1ERyxNQUFuRCxFQUEyREQsT0FBM0QsRUFBb0VBLE9BQXBFLEVBQTZFQyxNQUE3RSxFQUFxRkgsTUFBckYsQ0FBdEIsQ0FGZSxDQUFELEVBR3pCYixlQUh5QixDQUE1QjtBQUlBTCxPQUFPLFdBQVAsR0FBa0JLLGVBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBjbGFzc190cmFuc2Zvcm1lcl8xID0gcmVxdWlyZShcImNsYXNzLXRyYW5zZm9ybWVyXCIpO1xuY29uc3QgU3BpblJlc3VsdHNHYW1lU3RhdHVzXzEgPSByZXF1aXJlKFwiLi9TcGluUmVzdWx0c0dhbWVTdGF0dXNcIik7XG5sZXQgU3BpblJlc3VsdHNHYW1lID0gY2xhc3MgU3BpblJlc3VsdHNHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihfaWQsIF9jb2RlLCBfaXNGcmVlLCBfaGFzSmFja3BvdCwgX2phY2twb3QsIF9qYWNrcG90MiwgX3N0YXR1cywgX2lzVG9wR2FtZSwgX2lzVmVydGljYWwsIF9vcmRlck51bWJlciwgX3ZlcnNpb24pIHtcbiAgICAgICAgdGhpcy5faWQgPSBfaWQ7XG4gICAgICAgIHRoaXMuX2NvZGUgPSBfY29kZTtcbiAgICAgICAgdGhpcy5faXNGcmVlID0gX2lzRnJlZTtcbiAgICAgICAgdGhpcy5faGFzSmFja3BvdCA9IF9oYXNKYWNrcG90O1xuICAgICAgICB0aGlzLl9qYWNrcG90ID0gX2phY2twb3Q7XG4gICAgICAgIHRoaXMuX2phY2twb3QyID0gX2phY2twb3QyO1xuICAgICAgICB0aGlzLl9zdGF0dXMgPSBfc3RhdHVzO1xuICAgICAgICB0aGlzLl9pc1RvcEdhbWUgPSBfaXNUb3BHYW1lO1xuICAgICAgICB0aGlzLl9pc1ZlcnRpY2FsID0gX2lzVmVydGljYWw7XG4gICAgICAgIHRoaXMuX29yZGVyTnVtYmVyID0gX29yZGVyTnVtYmVyO1xuICAgICAgICB0aGlzLl92ZXJzaW9uID0gX3ZlcnNpb247XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWFs+WNoUlEXG4gICAgICpcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBTcGluUmVzdWx0c0dhbWVcbiAgICAgKi9cbiAgICBnZXQgaWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICB9XG4gICAgc2V0IGlkKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWFs+WNoeS7o+WPt1xuICAgICAqXG4gICAgICogQHJlYWRvbmx5XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgU3BpblJlc3VsdHNHYW1lXG4gICAgICovXG4gICAgZ2V0IGNvZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2RlO1xuICAgIH1cbiAgICBzZXQgY29kZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9jb2RlID0gdmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWlluaxoOmHkeminTFcbiAgICAgKlxuICAgICAqIEByZWFkb25seVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFNwaW5SZXN1bHRzR2FtZVxuICAgICAqL1xuICAgIGdldCBqYWNrcG90KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5famFja3BvdDtcbiAgICB9XG4gICAgc2V0IGphY2twb3QodmFsdWUpIHtcbiAgICAgICAgdGhpcy5famFja3BvdCA9IHZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDlpZbmsaDph5Hpop0yXG4gICAgICpcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBTcGluUmVzdWx0c0dhbWVcbiAgICAgKi9cbiAgICBnZXQgamFja3BvdDIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9qYWNrcG90MjtcbiAgICB9XG4gICAgc2V0IGphY2twb3QyKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2phY2twb3QyID0gdmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOaYr+WQpuacieWlluaxoFxuICAgICAqXG4gICAgICogQHJlYWRvbmx5XG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQG1lbWJlcm9mIFNwaW5SZXN1bHRzR2FtZVxuICAgICAqL1xuICAgIGdldCBoYXNKYWNrcG90KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faGFzSmFja3BvdDtcbiAgICB9XG4gICAgc2V0IGhhc0phY2twb3QodmFsdWUpIHtcbiAgICAgICAgdGhpcy5faGFzSmFja3BvdCA9IHZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmmK/lkKblhY3otLlcbiAgICAgKlxuICAgICAqIEByZWFkb25seVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBtZW1iZXJvZiBTcGluUmVzdWx0c0dhbWVcbiAgICAgKi9cbiAgICBnZXQgaXNGcmVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNGcmVlO1xuICAgIH1cbiAgICBzZXQgaXNGcmVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2lzRnJlZSA9IHZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmmK/lkKblhY3otLlcbiAgICAgKlxuICAgICAqIEByZWFkb25seVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBtZW1iZXJvZiBTcGluUmVzdWx0c0dhbWVcbiAgICAgKi9cbiAgICBnZXQgc3RhdHVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdHVzO1xuICAgIH1cbiAgICBzZXQgc3RhdHVzKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3N0YXR1cyA9IHZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmmK/lkKbnva7pobbmuLjmiI9cbiAgICAgKlxuICAgICAqIEByZWFkb25seVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBtZW1iZXJvZiBTcGluUmVzdWx0c0dhbWVcbiAgICAgKi9cbiAgICBnZXQgaXNUb3BHYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNUb3BHYW1lO1xuICAgIH1cbiAgICBzZXQgaXNUb3BHYW1lKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2lzVG9wR2FtZSA9IHZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmmK/lkKbnq5blsY9cbiAgICAgKlxuICAgICAqIEByZWFkb25seVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBtZW1iZXJvZiBTcGluUmVzdWx0c0dhbWVcbiAgICAgKi9cbiAgICBnZXQgaXNWZXJ0aWNhbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzVmVydGljYWw7XG4gICAgfVxuICAgIHNldCBpc1ZlcnRpY2FsKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2lzVmVydGljYWwgPSB2YWx1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5YWz5Y2h6aG65bqP77yM6Kej6ZSB562J57qnXG4gICAgICpcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBTcGluUmVzdWx0c1VwZ3JhZGVcbiAgICAgKi9cbiAgICBnZXQgb3JkZXJOdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vcmRlck51bWJlcjtcbiAgICB9XG4gICAgc2V0IG9yZGVyTnVtYmVyKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX29yZGVyTnVtYmVyID0gdmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOeJiOacrOWPt1xuICAgICAqXG4gICAgICogQHJlYWRvbmx5XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgU3BpblJlc3VsdHNHYW1lXG4gICAgICovXG4gICAgZ2V0IHZlcnNpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92ZXJzaW9uO1xuICAgIH1cbiAgICBzZXQgdmVyc2lvbih2YWx1ZSkge1xuICAgICAgICB0aGlzLl92ZXJzaW9uID0gdmFsdWU7XG4gICAgfVxufTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzEuRXhwb3NlKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZyksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtTdHJpbmddKVxuXSwgU3BpblJlc3VsdHNHYW1lLnByb3RvdHlwZSwgXCJpZFwiLCBudWxsKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzEuRXhwb3NlKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZyksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtTdHJpbmddKVxuXSwgU3BpblJlc3VsdHNHYW1lLnByb3RvdHlwZSwgXCJjb2RlXCIsIG51bGwpO1xuX19kZWNvcmF0ZShbXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMS5FeHBvc2UoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW1N0cmluZ10pXG5dLCBTcGluUmVzdWx0c0dhbWUucHJvdG90eXBlLCBcImphY2twb3RcIiwgbnVsbCk7XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbU3RyaW5nXSlcbl0sIFNwaW5SZXN1bHRzR2FtZS5wcm90b3R5cGUsIFwiamFja3BvdDJcIiwgbnVsbCk7XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBCb29sZWFuKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW0Jvb2xlYW5dKVxuXSwgU3BpblJlc3VsdHNHYW1lLnByb3RvdHlwZSwgXCJoYXNKYWNrcG90XCIsIG51bGwpO1xuX19kZWNvcmF0ZShbXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMS5FeHBvc2UoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgQm9vbGVhbiksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtCb29sZWFuXSlcbl0sIFNwaW5SZXN1bHRzR2FtZS5wcm90b3R5cGUsIFwiaXNGcmVlXCIsIG51bGwpO1xuX19kZWNvcmF0ZShbXG4gICAgY2xhc3NfdHJhbnNmb3JtZXJfMS5FeHBvc2UoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgTnVtYmVyKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW051bWJlcl0pXG5dLCBTcGluUmVzdWx0c0dhbWUucHJvdG90eXBlLCBcInN0YXR1c1wiLCBudWxsKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzEuRXhwb3NlKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbQm9vbGVhbl0pXG5dLCBTcGluUmVzdWx0c0dhbWUucHJvdG90eXBlLCBcImlzVG9wR2FtZVwiLCBudWxsKTtcbl9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzEuRXhwb3NlKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbQm9vbGVhbl0pXG5dLCBTcGluUmVzdWx0c0dhbWUucHJvdG90eXBlLCBcImlzVmVydGljYWxcIiwgbnVsbCk7XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbTnVtYmVyXSlcbl0sIFNwaW5SZXN1bHRzR2FtZS5wcm90b3R5cGUsIFwib3JkZXJOdW1iZXJcIiwgbnVsbCk7XG5fX2RlY29yYXRlKFtcbiAgICBjbGFzc190cmFuc2Zvcm1lcl8xLkV4cG9zZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbU3RyaW5nXSlcbl0sIFNwaW5SZXN1bHRzR2FtZS5wcm90b3R5cGUsIFwidmVyc2lvblwiLCBudWxsKTtcblNwaW5SZXN1bHRzR2FtZSA9IF9fZGVjb3JhdGUoW1xuICAgIGNsYXNzX3RyYW5zZm9ybWVyXzEuRXhjbHVkZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbU3RyaW5nLCBTdHJpbmcsIEJvb2xlYW4sIEJvb2xlYW4sIFN0cmluZywgU3RyaW5nLCBOdW1iZXIsIEJvb2xlYW4sIEJvb2xlYW4sIE51bWJlciwgU3RyaW5nXSlcbl0sIFNwaW5SZXN1bHRzR2FtZSk7XG5leHBvcnRzLmRlZmF1bHQgPSBTcGluUmVzdWx0c0dhbWU7XG4iXX0=