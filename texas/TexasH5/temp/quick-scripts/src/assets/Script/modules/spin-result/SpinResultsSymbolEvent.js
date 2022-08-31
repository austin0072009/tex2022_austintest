"use strict";
cc._RF.push(module, 'd2f16Enk8RB9IWV3fIGPmr5', 'SpinResultsSymbolEvent');
// Script/modules/spin-result/SpinResultsSymbolEvent.js

"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var SpinResultsSymbolEvent = /*#__PURE__*/function () {
  function SpinResultsSymbolEvent(code, assets, position, events) {
    this._events = [];
    this._code = code;
    this._assets = assets;
    this._postion = position;
    this._events = events;

    if (!this._events) {
      this._events = [];
    }
  }

  _createClass(SpinResultsSymbolEvent, [{
    key: "code",
    get: function get() {
      return this._code;
    }
  }, {
    key: "assets",
    get: function get() {
      return this._assets;
    }
  }, {
    key: "position",
    get: function get() {
      return this._postion;
    }
  }, {
    key: "events",
    get: function get() {
      return this._events;
    }
  }]);

  return SpinResultsSymbolEvent;
}();

exports["default"] = SpinResultsSymbolEvent;

cc._RF.pop();