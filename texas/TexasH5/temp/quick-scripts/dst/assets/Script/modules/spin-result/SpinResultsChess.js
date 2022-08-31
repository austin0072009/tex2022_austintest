
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/spin-result/SpinResultsChess.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '92f93XllPJHGrCvd0y2anXn', 'SpinResultsChess');
// Script/modules/spin-result/SpinResultsChess.js

"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var SpinResultsChess = /*#__PURE__*/function () {
  function SpinResultsChess(code, assets, position) {
    this._code = code;
    this._assets = assets;
    this._position = position;
  }
  /**
   * 获取结果棋子编码
   */


  _createClass(SpinResultsChess, [{
    key: "code",
    get: function get() {
      return this._code;
    }
    /**
     * 设置结果棋子编码
     *
     */
    ,
    set: function set(value) {
      this._code = value;
    }
    /**
     * 获取棋子上的资产（比如金币数、freespin次数）
     */

  }, {
    key: "assets",
    get: function get() {
      return this._assets;
    }
    /**
     * 设置棋子上的资产（比如金币数、freespin次数）
     */
    ,
    set: function set(value) {
      this._assets = value;
    }
    /**
     * 获取棋子位置
     */

  }, {
    key: "position",
    get: function get() {
      return this._position;
    }
    /**
     * 设置棋子位置
     */
    ,
    set: function set(value) {
      this._position = value;
    }
  }]);

  return SpinResultsChess;
}();

exports["default"] = SpinResultsChess;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxzcGluLXJlc3VsdFxcU3BpblJlc3VsdHNDaGVzcy5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIlNwaW5SZXN1bHRzQ2hlc3MiLCJjb2RlIiwiYXNzZXRzIiwicG9zaXRpb24iLCJfY29kZSIsIl9hc3NldHMiLCJfcG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFDQUEsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUFFQyxFQUFBQSxLQUFLLEVBQUU7QUFBVCxDQUE3Qzs7SUFDTUM7QUFDRiw0QkFBWUMsSUFBWixFQUFrQkMsTUFBbEIsRUFBMEJDLFFBQTFCLEVBQW9DO0FBQ2hDLFNBQUtDLEtBQUwsR0FBYUgsSUFBYjtBQUNBLFNBQUtJLE9BQUwsR0FBZUgsTUFBZjtBQUNBLFNBQUtJLFNBQUwsR0FBaUJILFFBQWpCO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7Ozs7O1NBQ0ksZUFBVztBQUNQLGFBQU8sS0FBS0MsS0FBWjtBQUNIO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7O1NBQ0ksYUFBU0wsS0FBVCxFQUFnQjtBQUNaLFdBQUtLLEtBQUwsR0FBYUwsS0FBYjtBQUNIO0FBQ0Q7QUFDSjtBQUNBOzs7O1NBQ0ksZUFBYTtBQUNULGFBQU8sS0FBS00sT0FBWjtBQUNIO0FBQ0Q7QUFDSjtBQUNBOztTQUNJLGFBQVdOLEtBQVgsRUFBa0I7QUFDZCxXQUFLTSxPQUFMLEdBQWVOLEtBQWY7QUFDSDtBQUNEO0FBQ0o7QUFDQTs7OztTQUNJLGVBQWU7QUFDWCxhQUFPLEtBQUtPLFNBQVo7QUFDSDtBQUNEO0FBQ0o7QUFDQTs7U0FDSSxhQUFhUCxLQUFiLEVBQW9CO0FBQ2hCLFdBQUtPLFNBQUwsR0FBaUJQLEtBQWpCO0FBQ0g7Ozs7OztBQUVMRCxPQUFPLFdBQVAsR0FBa0JFLGdCQUFsQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBTcGluUmVzdWx0c0NoZXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihjb2RlLCBhc3NldHMsIHBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuX2NvZGUgPSBjb2RlO1xuICAgICAgICB0aGlzLl9hc3NldHMgPSBhc3NldHM7XG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uID0gcG9zaXRpb247XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPlue7k+aenOaji+WtkOe8lueggVxuICAgICAqL1xuICAgIGdldCBjb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29kZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6K6+572u57uT5p6c5qOL5a2Q57yW56CBXG4gICAgICpcbiAgICAgKi9cbiAgICBzZXQgY29kZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9jb2RlID0gdmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPluaji+WtkOS4iueahOi1hOS6p++8iOavlOWmgumHkeW4geaVsOOAgWZyZWVzcGlu5qyh5pWw77yJXG4gICAgICovXG4gICAgZ2V0IGFzc2V0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Fzc2V0cztcbiAgICB9XG4gICAgLyoqXG4gICAgICog6K6+572u5qOL5a2Q5LiK55qE6LWE5Lqn77yI5q+U5aaC6YeR5biB5pWw44CBZnJlZXNwaW7mrKHmlbDvvIlcbiAgICAgKi9cbiAgICBzZXQgYXNzZXRzKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2Fzc2V0cyA9IHZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5bmo4vlrZDkvY3nva5cbiAgICAgKi9cbiAgICBnZXQgcG9zaXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6K6+572u5qOL5a2Q5L2N572uXG4gICAgICovXG4gICAgc2V0IHBvc2l0aW9uKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uID0gdmFsdWU7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gU3BpblJlc3VsdHNDaGVzcztcbiJdfQ==