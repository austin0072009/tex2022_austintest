"use strict";
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