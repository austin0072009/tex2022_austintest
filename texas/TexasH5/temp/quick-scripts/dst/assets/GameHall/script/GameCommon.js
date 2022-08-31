
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/GameCommon.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8d59a89dLVDrpkvkNqeFWR2', 'GameCommon');
// GameHall/script/GameCommon.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameCommon = void 0;
var GameCommon = /** @class */ (function () {
    function GameCommon() {
    }
    GameCommon.loadScene = function (abname, scenename) {
        var oldab = cc.assetManager.getBundle(abname);
        if (oldab == null) {
            cc.assetManager.loadBundle(abname, function (err, bundle) {
                if (err) {
                    console.error(abname + " load fail.");
                    return;
                }
                console.log("loadSubpackage success name == " + abname);
                bundle.loadScene(scenename, function (err, sceneAsset) {
                    if (err) {
                        console.error(abname + " load fail." + scenename);
                        return;
                    }
                    console.log(sceneAsset + " sceneName:" + scenename);
                    cc.director.runScene(sceneAsset);
                });
            });
        }
        else {
            oldab.loadScene(scenename, function (err, sceneAsset) {
                if (err) {
                    console.error(abname + " load fail." + scenename);
                    return;
                }
                console.log(sceneAsset + " sceneName:" + scenename);
                cc.director.runScene(sceneAsset);
            });
        }
    };
    // 是否需要重连
    GameCommon.isNeedReconnect = function (sceneName) {
        var notSceneName = ["dlc", "login", "lobby"];
        for (var index = 0; index < notSceneName.length; index++) {
            var name = notSceneName[index];
            if (name == sceneName) {
                return false;
            }
        }
        return true;
    };
    GameCommon.allSmsCode = null;
    GameCommon.vipConfig = null;
    GameCommon.isAutoLogin = true;
    return GameCommon;
}());
exports.GameCommon = GameCommon;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcR2FtZUNvbW1vbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtJQUFBO0lBK0NBLENBQUM7SUExQ1Usb0JBQVMsR0FBaEIsVUFBaUIsTUFBYyxFQUFFLFNBQWlCO1FBQzlDLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtZQUNmLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxVQUFDLEdBQUcsRUFBRSxNQUFNO2dCQUMzQyxJQUFJLEdBQUcsRUFBRTtvQkFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsQ0FBQztvQkFDdEMsT0FBTztpQkFDVjtnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO2dCQUN4RCxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxVQUFDLEdBQUcsRUFBRSxVQUFVO29CQUN4QyxJQUFJLEdBQUcsRUFBRTt3QkFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxhQUFhLEdBQUcsU0FBUyxDQUFDLENBQUM7d0JBQ2xELE9BQU87cUJBQ1Y7b0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsYUFBYSxHQUFHLFNBQVMsQ0FBQyxDQUFDO29CQUNwRCxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDckMsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztTQUNOO2FBQ0k7WUFDRCxLQUFLLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxVQUFDLEdBQUcsRUFBRSxVQUFVO2dCQUN2QyxJQUFJLEdBQUcsRUFBRTtvQkFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxhQUFhLEdBQUcsU0FBUyxDQUFDLENBQUM7b0JBQ2xELE9BQU87aUJBQ1Y7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsYUFBYSxHQUFHLFNBQVMsQ0FBQyxDQUFDO2dCQUNwRCxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNyQyxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVELFNBQVM7SUFDRiwwQkFBZSxHQUF0QixVQUF1QixTQUFpQjtRQUNwQyxJQUFJLFlBQVksR0FBYSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkQsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDdEQsSUFBSSxJQUFJLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9CLElBQUksSUFBSSxJQUFJLFNBQVMsRUFBRTtnQkFDbkIsT0FBTyxLQUFLLENBQUM7YUFDaEI7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUE3Q00scUJBQVUsR0FBUSxJQUFJLENBQUM7SUFDdkIsb0JBQVMsR0FBYyxJQUFJLENBQUM7SUFDNUIsc0JBQVcsR0FBWSxJQUFJLENBQUM7SUE0Q3ZDLGlCQUFDO0NBL0NELEFBK0NDLElBQUE7QUEvQ1ksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB2aXBDb25maWcgfSBmcm9tIFwiLi9Mb2JieS9Mb2JieU5ldERhdGFcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWVDb21tb24ge1xuICAgIHN0YXRpYyBhbGxTbXNDb2RlOiBhbnkgPSBudWxsO1xuICAgIHN0YXRpYyB2aXBDb25maWc6IHZpcENvbmZpZyA9IG51bGw7XG4gICAgc3RhdGljIGlzQXV0b0xvZ2luOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIHN0YXRpYyBsb2FkU2NlbmUoYWJuYW1lOiBzdHJpbmcsIHNjZW5lbmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGxldCBvbGRhYiA9IGNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUoYWJuYW1lKTtcbiAgICAgICAgaWYgKG9sZGFiID09IG51bGwpIHtcbiAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKGFibmFtZSwgKGVyciwgYnVuZGxlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGFibmFtZSArIFwiIGxvYWQgZmFpbC5cIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2FkU3VicGFja2FnZSBzdWNjZXNzIG5hbWUgPT0gXCIgKyBhYm5hbWUpO1xuICAgICAgICAgICAgICAgIGJ1bmRsZS5sb2FkU2NlbmUoc2NlbmVuYW1lLCAoZXJyLCBzY2VuZUFzc2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYWJuYW1lICsgXCIgbG9hZCBmYWlsLlwiICsgc2NlbmVuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzY2VuZUFzc2V0ICsgXCIgc2NlbmVOYW1lOlwiICsgc2NlbmVuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IucnVuU2NlbmUoc2NlbmVBc3NldCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9sZGFiLmxvYWRTY2VuZShzY2VuZW5hbWUsIChlcnIsIHNjZW5lQXNzZXQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYWJuYW1lICsgXCIgbG9hZCBmYWlsLlwiICsgc2NlbmVuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzY2VuZUFzc2V0ICsgXCIgc2NlbmVOYW1lOlwiICsgc2NlbmVuYW1lKTtcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5ydW5TY2VuZShzY2VuZUFzc2V0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g5piv5ZCm6ZyA6KaB6YeN6L+eXG4gICAgc3RhdGljIGlzTmVlZFJlY29ubmVjdChzY2VuZU5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgbm90U2NlbmVOYW1lOiBzdHJpbmdbXSA9IFtcImRsY1wiLCBcImxvZ2luXCIsIFwibG9iYnlcIl07XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBub3RTY2VuZU5hbWUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBsZXQgbmFtZSA9IG5vdFNjZW5lTmFtZVtpbmRleF07XG4gICAgICAgICAgICBpZiAobmFtZSA9PSBzY2VuZU5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufSJdfQ==