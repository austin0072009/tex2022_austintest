
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/BaseFrame/Queue.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '59f35Qa8oZH+r9qsdxGVnYi', 'Queue');
// Script/BaseFrame/Queue.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue(capacity) {
        this.elements = new Array();
        this._size = capacity;
    }
    Queue.prototype.push = function (o) {
        if (o == null) {
            return false;
        }
        //如果传递了size参数就设置了队列的大小
        if (this._size != undefined && !isNaN(this._size)) {
            if (this.elements.length == this._size) {
                this.pop();
            }
        }
        this.elements.unshift(o);
        return true;
    };
    Queue.prototype.pop = function () {
        return this.elements.pop();
    };
    Queue.prototype.size = function () {
        return this.elements.length;
    };
    Queue.prototype.remove = function (value) {
        this.elements = this.elements.filter(function (item) { return item !== value; });
    };
    Queue.prototype.empty = function () {
        return this.size() == 0;
    };
    Queue.prototype.clear = function () {
        delete this.elements;
        this.elements = new Array();
    };
    return Queue;
}());
exports.Queue = Queue;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxCYXNlRnJhbWVcXFF1ZXVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBS0ksZUFBbUIsUUFBaUI7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEtBQUssRUFBSyxDQUFDO1FBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO0lBQzFCLENBQUM7SUFFTSxvQkFBSSxHQUFYLFVBQVksQ0FBSTtRQUNaLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtZQUNYLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBQ0Qsc0JBQXNCO1FBQ3RCLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxTQUFTLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQy9DLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDcEMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQ2Q7U0FDSjtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxtQkFBRyxHQUFWO1FBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFTSxvQkFBSSxHQUFYO1FBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUNoQyxDQUFDO0lBRU0sc0JBQU0sR0FBYixVQUFjLEtBQU87UUFFakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksS0FBSyxLQUFLLEVBQWQsQ0FBYyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVNLHFCQUFLLEdBQVo7UUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVNLHFCQUFLLEdBQVo7UUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEtBQUssRUFBSyxDQUFDO0lBQ25DLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0E3Q0EsQUE2Q0MsSUFBQTtBQTdDWSxzQkFBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBRdWV1ZTxUPiB7XG5cbiAgICBwcml2YXRlIGVsZW1lbnRzOiBBcnJheTxUPjtcbiAgICBwcml2YXRlIF9zaXplOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoY2FwYWNpdHk/OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IG5ldyBBcnJheTxUPigpO1xuICAgICAgICB0aGlzLl9zaXplID0gY2FwYWNpdHk7XG4gICAgfVxuXG4gICAgcHVibGljIHB1c2gobzogVCkge1xuICAgICAgICBpZiAobyA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy/lpoLmnpzkvKDpgJLkuoZzaXpl5Y+C5pWw5bCx6K6+572u5LqG6Zif5YiX55qE5aSn5bCPXG4gICAgICAgIGlmICh0aGlzLl9zaXplICE9IHVuZGVmaW5lZCAmJiAhaXNOYU4odGhpcy5fc2l6ZSkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnRzLmxlbmd0aCA9PSB0aGlzLl9zaXplKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnRzLnVuc2hpZnQobyk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBwb3AoKTogVCB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRzLnBvcCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaXplKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRzLmxlbmd0aDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlKHZhbHVlOlQpOnZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSB0aGlzLmVsZW1lbnRzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHZhbHVlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZW1wdHkoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNpemUoKSA9PSAwO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhcigpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuZWxlbWVudHM7XG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSBuZXcgQXJyYXk8VD4oKTtcbiAgICB9XG59Il19