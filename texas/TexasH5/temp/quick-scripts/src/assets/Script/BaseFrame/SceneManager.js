"use strict";
cc._RF.push(module, 'fb7442cPXFJL6FDeZxNNvdU', 'SceneManager');
// Script/BaseFrame/SceneManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneManager = void 0;
var SceneManager = /** @class */ (function () {
    function SceneManager() {
        this.sounds = new Map();
    }
    Object.defineProperty(SceneManager, "Singleton", {
        get: function () {
            if (!this._instance) {
                this._instance = new SceneManager();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    SceneManager.prototype.loadScene = function (abname, scenename) {
        var oldab = cc.assetManager.getBundle(abname);
        if (oldab == null) {
            cc.assetManager.loadBundle(abname, function (err, bundle) {
                if (err) {
                    console.error(abname + " load fail.");
                    return;
                }
                console.log("loadSubpackage success name == " + abname);
                //cc.director.loadScene(scenename);
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
    return SceneManager;
}());
exports.SceneManager = SceneManager;

cc._RF.pop();