"use strict";
cc._RF.push(module, '0ec89qdry5GAZmtfEIhZCqK', 'BroadcastViewCtr');
// GameHall/script/Lobby/Components/BroadcastViewCtr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BroadcastViewCtr = void 0;
var BroadcastViewCtr = /** @class */ (function () {
    function BroadcastViewCtr() {
    }
    Object.defineProperty(BroadcastViewCtr, "instance", {
        get: function () {
            if (this._viewCtr == null) {
                this._viewCtr = new BroadcastViewCtr();
            }
            return this._viewCtr;
        },
        enumerable: false,
        configurable: true
    });
    BroadcastViewCtr.prototype.addMessage = function (str, delayTime) {
        if (delayTime === void 0) { delayTime = 0; }
        this.view && this.view.addMessage(str, delayTime);
    };
    return BroadcastViewCtr;
}());
exports.BroadcastViewCtr = BroadcastViewCtr;

cc._RF.pop();