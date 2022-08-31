
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/BaseFrame/PublicMethods.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxCYXNlRnJhbWVcXFB1YmxpY01ldGhvZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQXFCQSxDQUFDO0lBakJpQix1QkFBUyxHQUF2QixVQUF3QixHQUFvQjtRQUN4QyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ2pELElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDcEQsSUFBSSxHQUFHLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUMxQixvQkFBb0I7UUFDcEIsK0NBQStDO1FBQy9DLHVFQUF1RTtRQUN2RSxVQUFVO1FBQ1YsSUFBSSxHQUFHLEdBQUcsSUFBSSxFQUFFO1lBQ1osR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUTtTQUM5QzthQUFNO1lBQ0gsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsT0FBTztTQUNoQztJQUNMLENBQUM7SUFuQmEseUJBQVcsR0FBVyxJQUFJLENBQUM7SUFDM0IsMEJBQVksR0FBVyxJQUFJLENBQUM7SUFtQjlDLG9CQUFDO0NBckJELEFBcUJDLElBQUE7QUFyQlksc0NBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUHVibGljTWV0aG9kcyB7XG4gICAgcHVibGljIHN0YXRpYyBkZXNpZ25XaWR0aDogbnVtYmVyID0gMTA4MDtcbiAgICBwdWJsaWMgc3RhdGljIGRlc2lnbkhlaWdodDogbnVtYmVyID0gMjM0MDtcblxuICAgIHB1YmxpYyBzdGF0aWMgc2NyZWVuRml0KGNvbTogZmd1aS5HQ29tcG9uZW50KSB7XG4gICAgICAgIGxldCBzY2FsZVcgPSBjYy53aW5TaXplLndpZHRoIC8gdGhpcy5kZXNpZ25XaWR0aDtcbiAgICAgICAgbGV0IHNjYWxlSCA9IGNjLndpblNpemUuaGVpZ2h0IC8gdGhpcy5kZXNpZ25IZWlnaHQ7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2NhbGVIID09IFwiLCBzY2FsZUgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInNjYWxlVyA9PSBcIiwgc2NhbGVXKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJzY2FsZVcgLSBzY2FsZUggPT0gXCIsIHNjYWxlVyAtIHNjYWxlSCk7XG4gICAgICAgIGxldCBzdWIgPSBzY2FsZVcgLSBzY2FsZUg7XG4gICAgICAgIC8vIGlmIChzdWIgPiAwLjE1KSB7XG4gICAgICAgIC8vICAgICBjb20ubm9kZS5zZXRTY2FsZShzY2FsZUgsIHNjYWxlSCk7IC8v55WZ6buR6L65XG4gICAgICAgIC8vICAgICBjb20ubm9kZS54ID0gKHRoaXMuZGVzaWduV2lkdGggLSBjYy53aW5TaXplLndpZHRoICogc2NhbGVIKSAvIDI7XG4gICAgICAgIC8vIH0gZWxzZSBcbiAgICAgICAgaWYgKHN1YiA+IDAuMDYpIHtcbiAgICAgICAgICAgIGNvbS5ub2RlLnNldFNjYWxlKHNjYWxlVywgc2NhbGVIKTsgLy/mlbTkvZPmi4nkvLjlhYXmu6FcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbS5tYWtlRnVsbFNjcmVlbigpOyAvL+iHquWumuS5iemAgumFjVxuICAgICAgICB9XG4gICAgfVxufSJdfQ==