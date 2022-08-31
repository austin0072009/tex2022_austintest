
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/BaseFrame/SceneManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxCYXNlRnJhbWVcXFNjZW5lTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQU1JO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsRUFBZSxDQUFDO0lBQ3pDLENBQUM7SUFFRCxzQkFBVyx5QkFBUzthQUFwQjtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7YUFDdkM7WUFFRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFFTSxnQ0FBUyxHQUFoQixVQUFpQixNQUFjLEVBQUUsU0FBaUI7UUFDOUMsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUMsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1lBQ2YsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLFVBQUMsR0FBRyxFQUFFLE1BQU07Z0JBQzNDLElBQUksR0FBRyxFQUFFO29CQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxDQUFDO29CQUN0QyxPQUFPO2lCQUNWO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEdBQUcsTUFBTSxDQUFDLENBQUM7Z0JBQ3hELG1DQUFtQztnQkFDbkMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsVUFBQyxHQUFHLEVBQUUsVUFBVTtvQkFDeEMsSUFBSSxHQUFHLEVBQUU7d0JBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsYUFBYSxHQUFHLFNBQVMsQ0FBQyxDQUFDO3dCQUNsRCxPQUFPO3FCQUNWO29CQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLGFBQWEsR0FBRyxTQUFTLENBQUMsQ0FBQztvQkFDcEQsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3JDLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7U0FDTjthQUNJO1lBQ0QsS0FBSyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsVUFBQyxHQUFHLEVBQUUsVUFBVTtnQkFDdkMsSUFBSSxHQUFHLEVBQUU7b0JBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsYUFBYSxHQUFHLFNBQVMsQ0FBQyxDQUFDO29CQUNsRCxPQUFPO2lCQUNWO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLGFBQWEsR0FBRyxTQUFTLENBQUMsQ0FBQztnQkFDcEQsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDckMsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFDTCxtQkFBQztBQUFELENBakRBLEFBaURDLElBQUE7QUFqRFksb0NBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgU2NlbmVNYW5hZ2VyIHtcbiAgICBwcml2YXRlIHNvdW5kczogTWFwPHN0cmluZywgYW55PjtcblxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogU2NlbmVNYW5hZ2VyO1xuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zb3VuZHMgPSBuZXcgTWFwPHN0cmluZywgYW55PigpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgU2luZ2xldG9uKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBTY2VuZU1hbmFnZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZFNjZW5lKGFibmFtZTogc3RyaW5nLCBzY2VuZW5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBsZXQgb2xkYWIgPSBjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKGFibmFtZSk7XG4gICAgICAgIGlmIChvbGRhYiA9PSBudWxsKSB7XG4gICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZEJ1bmRsZShhYm5hbWUsIChlcnIsIGJ1bmRsZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihhYm5hbWUgKyBcIiBsb2FkIGZhaWwuXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9hZFN1YnBhY2thZ2Ugc3VjY2VzcyBuYW1lID09IFwiICsgYWJuYW1lKTtcbiAgICAgICAgICAgICAgICAvL2NjLmRpcmVjdG9yLmxvYWRTY2VuZShzY2VuZW5hbWUpO1xuICAgICAgICAgICAgICAgIGJ1bmRsZS5sb2FkU2NlbmUoc2NlbmVuYW1lLCAoZXJyLCBzY2VuZUFzc2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYWJuYW1lICsgXCIgbG9hZCBmYWlsLlwiICsgc2NlbmVuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzY2VuZUFzc2V0ICsgXCIgc2NlbmVOYW1lOlwiICsgc2NlbmVuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IucnVuU2NlbmUoc2NlbmVBc3NldCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9sZGFiLmxvYWRTY2VuZShzY2VuZW5hbWUsIChlcnIsIHNjZW5lQXNzZXQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYWJuYW1lICsgXCIgbG9hZCBmYWlsLlwiICsgc2NlbmVuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzY2VuZUFzc2V0ICsgXCIgc2NlbmVOYW1lOlwiICsgc2NlbmVuYW1lKTtcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5ydW5TY2VuZShzY2VuZUFzc2V0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==