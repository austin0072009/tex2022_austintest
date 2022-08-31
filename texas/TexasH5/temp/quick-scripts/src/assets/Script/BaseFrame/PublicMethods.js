"use strict";
cc._RF.push(module, 'e9891vZsihKm66yztOnv5L0', 'PublicMethods');
// Script/BaseFrame/PublicMethods.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicMethods = void 0;
var PublicMethods = /** @class */ (function () {
    function PublicMethods() {
    }
    PublicMethods.screenFit = function (com) {
        var scaleW = cc.winSize.width / this.designWidth;
        var scaleH = cc.winSize.height / this.designHeight;
        console.log("scaleH == ", scaleH);
        console.log("scaleW == ", scaleW);
        console.log("scaleW - scaleH == ", scaleW - scaleH);
        var sub = scaleW - scaleH;
        // if (sub > 0.15) {
        //     com.node.setScale(scaleH, scaleH); //留黑边
        //     com.node.x = (this.designWidth - cc.winSize.width * scaleH) / 2;
        // } else 
        if (sub > 0.06) {
            com.node.setScale(scaleW, scaleH); //整体拉伸充满
        }
        else {
            com.makeFullScreen(); //自定义适配
        }
    };
    PublicMethods.designWidth = 1080;
    PublicMethods.designHeight = 2340;
    return PublicMethods;
}());
exports.PublicMethods = PublicMethods;

cc._RF.pop();