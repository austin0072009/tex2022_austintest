
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/BaseFrame/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '24f51JuPwtHo64d41mWxtLT', 'AudioManager');
// Script/BaseFrame/AudioManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioManager = void 0;
var UIUtil_1 = require("../Common/UIUtil");
var ClipKeyPair = /** @class */ (function () {
    function ClipKeyPair() {
    }
    return ClipKeyPair;
}());
var PlayKeyPiar = /** @class */ (function () {
    function PlayKeyPiar() {
    }
    return PlayKeyPiar;
}());
var AudioManager = /** @class */ (function () {
    function AudioManager() {
        this.oldEffectVolume = 1;
        this.sounds = new Map();
        this.effectmMap = new Map();
        this.enabled = true;
        this.music = "";
        this.effect = "";
    }
    Object.defineProperty(AudioManager, "Singleton", {
        get: function () {
            if (!this._instance) {
                this._instance = new AudioManager();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AudioManager.prototype, "MusicVolume", {
        get: function () {
            return cc.audioEngine.getMusicVolume();
        },
        /// <summary>
        /// 背景音乐大小
        /// </summary>
        set: function (value) {
            cc.audioEngine.setMusicVolume(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AudioManager.prototype, "YinxiaoVolume", {
        get: function () {
            var _this = this;
            var value = 0;
            this.effectmMap.forEach(function (val, key) {
                value = cc.audioEngine.getVolume(_this.effectmMap.get(key));
            });
            return value;
        },
        /// <summary>
        /// 音效大小
        /// </summary>
        set: function (value) {
            var _this = this;
            this.effectmMap.forEach(function (val, key) {
                cc.audioEngine.setVolume(_this.effectmMap.get(key), value);
            });
        },
        enumerable: false,
        configurable: true
    });
    AudioManager.prototype.PauseMusic = function (_ispause) {
        cc.audioEngine.stopMusic();
    };
    AudioManager.prototype.DestoryByScene = function (sceneName) {
    };
    /// <summary>
    /// 
    /// </summary>
    /// <param name="sceneName">不知道场景就填""</param>
    /// <param name="name"></param>
    /// <param name="loop"></param>
    /// <param name="position"></param>
    /// <param name="parent"></param>
    /// <returns></returns>         
    AudioManager.prototype.play = function (sceneName, name, loop, callback, position, parent) {
        if (loop === void 0) { loop = false; }
        if (callback === void 0) { callback = null; }
        if (position === void 0) { position = null; }
        if (parent === void 0) { parent = null; }
        this.effect = name;
        if (!this.enabled)
            return;
        if (!this.getEffectStatus())
            return;
        var effect;
        try {
            //console.log("playEffect  ===="+fxName)
            effect = cc.audioEngine.playEffect(this.sounds[name], loop);
        }
        catch (error) {
            return;
        }
        console.log("sceneName === ", sceneName);
        console.log("name === ", name);
        this.effectmMap.set(name, effect);
        return effect;
    };
    /// <summary>
    /// 特殊接口 勿用
    /// </summary>
    /// <param name="sceneName"></param>
    /// <param name="name"></param>
    /// <param name="loop"></param>
    /// <param name="callback"></param>
    /// <param name="CurlSpeed"></param>
    /// <returns></returns>
    AudioManager.prototype.playspeed = function (sceneName, name, loop, callback, CurlSpeed) {
        if (loop === void 0) { loop = false; }
        if (callback === void 0) { callback = null; }
        if (CurlSpeed === void 0) { CurlSpeed = 1; }
    };
    /**
     * 添加所有音频资源
     * @param key
     * @param clip
     */
    AudioManager.prototype.add = function (key, clip) {
        this.sounds[key] = clip;
    };
    AudioManager.prototype.playBGM = function (musicName, isLoop) {
        if (isLoop === void 0) { isLoop = true; }
        // if(!this.sounds.has(musicName) ) 
        // {
        //     console.error(" there is no musicname:"+ musicName);
        //     return;
        // }
        console.log("musicName -=== ", musicName);
        this.music = musicName;
        if (!this.enabled)
            return;
        if (!this.getSoundStatus())
            return;
        return cc.audioEngine.playMusic(this.sounds[musicName], isLoop);
    };
    AudioManager.prototype.playOnClick = function () {
        AudioManager.Singleton.play("", "ui_click");
    };
    /**
     * 停止播放音效
     * @param fxName
     */
    AudioManager.prototype.stopEffect = function (fxName) {
        if (this.effectmMap.get(fxName) != null && this.effectmMap.get(fxName) != undefined)
            cc.audioEngine.stopEffect(this.effectmMap.get(fxName));
    };
    /**
     * 停止音乐
     */
    AudioManager.prototype.stopBGM = function () {
        cc.audioEngine.stopMusic();
    };
    /**
     * 暂停音乐
     */
    AudioManager.prototype.pauseMusic = function () {
        cc.audioEngine.pauseMusic();
    };
    /**
     * 恢复音乐
     */
    AudioManager.prototype.resumeMusic = function () {
        if (!this.getSoundStatus())
            this.setSoundStatus("open");
        cc.audioEngine.resumeMusic();
    };
    /**
     * 暂停所有音效
     */
    AudioManager.prototype.pauseAllEffects = function () {
        this.setEffectStatus("close");
    };
    /**
    * 恢复所有音效
    */
    AudioManager.prototype.resumeAllEffects = function () {
        this.setEffectStatus("open");
    };
    /**
    * 获取音效状态
    */
    AudioManager.prototype.getEffectsStatus = function () {
        return cc.audioEngine.getEffectsVolume() == 0 ? false : true;
    };
    /**
     * 静止所有音乐音效
     * @param enabled
     */
    AudioManager.prototype.setEnabled = function (enabled) {
        this.enabled = enabled;
        if (enabled) {
            this.playBGM(this.music);
        }
        else {
            cc.audioEngine.stopAll();
        }
    };
    AudioManager.prototype.getEnable = function () {
        return this.enabled;
    };
    /**
     * 清除音频缓存
     */
    AudioManager.prototype.release = function () {
        this.effectmMap = new Map();
        this.setEnabled(false);
        for (var key in this.sounds) {
            // cc.loader.release(this.sounds[key]);
            delete this.sounds[key];
        }
    };
    // 背景音乐默认关闭
    AudioManager.prototype.getSoundStatus = function () {
        if (localStorage.getItem("SoundStatus") == "open") {
            return true;
        }
        else if (localStorage.getItem("SoundStatus") == "close") {
            return false;
        }
        else {
            return false;
        }
    };
    AudioManager.prototype.setSoundStatus = function (isOpen) {
        localStorage.setItem("SoundStatus", isOpen);
        console.log("this.getSoundStatus() == ", this.getSoundStatus());
        if (this.getSoundStatus()) {
            if (this.music && this.music != "") {
                this.playBGM(this.music);
            }
        }
        else {
            this.stopBGM();
        }
    };
    // 音效默认打开
    AudioManager.prototype.getEffectStatus = function () {
        if (localStorage.getItem("EffectStatus") == "open") {
            return true;
        }
        else if (localStorage.getItem("EffectStatus") == "close") {
            return false;
        }
        else {
            return true;
        }
    };
    AudioManager.prototype.setEffectStatus = function (isOpen) {
        console.log("setEffectStatus ===== ", isOpen);
        localStorage.setItem("EffectStatus", isOpen);
        if (this.getSoundStatus()) {
            if (this.effect && this.effect != "") {
                // this.play("", this.effect);
            }
        }
        else {
            this.stopEffect(this.effect);
        }
    };
    Object.defineProperty(AudioManager, "TexasMusicStatus", {
        /**
         * 大厅、德州扑克 保存设置
         */
        get: function () {
            var state = UIUtil_1.PlayerPrefs.GetInt("TexasMusic", 0);
            return state == 0 ? false : true;
        },
        set: function (value) {
            var isOpen = value ? 1 : 0;
            UIUtil_1.PlayerPrefs.SetInt("TexasMusic", isOpen);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AudioManager, "TexasEffectStatus", {
        get: function () {
            var state = UIUtil_1.PlayerPrefs.GetInt("TexasEffect", 1);
            return state == 0 ? false : true;
        },
        set: function (value) {
            var isOpen = value ? 1 : 0;
            UIUtil_1.PlayerPrefs.SetInt("TexasEffect", isOpen);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AudioManager, "GamesMusicStatus", {
        /**
         * 娱乐城 保存设置
         */
        get: function () {
            var state = UIUtil_1.PlayerPrefs.GetInt("GamesMusic", 1);
            return state == 0 ? false : true;
        },
        set: function (value) {
            var isOpen = value ? 1 : 0;
            UIUtil_1.PlayerPrefs.SetInt("GamesMusic", isOpen);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AudioManager, "GamesEffectStatus", {
        get: function () {
            var state = UIUtil_1.PlayerPrefs.GetInt("GamesEffect", 1);
            return state == 0 ? false : true;
        },
        set: function (value) {
            var isOpen = value ? 1 : 0;
            UIUtil_1.PlayerPrefs.SetInt("GamesEffect", isOpen);
        },
        enumerable: false,
        configurable: true
    });
    return AudioManager;
}());
exports.AudioManager = AudioManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxCYXNlRnJhbWVcXEF1ZGlvTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBK0M7QUFHL0M7SUFBQTtJQUdBLENBQUM7SUFBRCxrQkFBQztBQUFELENBSEEsQUFHQyxJQUFBO0FBRUQ7SUFBQTtJQUdBLENBQUM7SUFBRCxrQkFBQztBQUFELENBSEEsQUFHQyxJQUFBO0FBRUQ7SUFZSTtRQU5RLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO1FBT3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQWUsQ0FBQztRQUNyQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQzVDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxzQkFBVyx5QkFBUzthQUFwQjtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7YUFDdkM7WUFFRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFNRCxzQkFBVyxxQ0FBVzthQUd0QjtZQUNJLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMzQyxDQUFDO1FBUkQsYUFBYTtRQUNiLFVBQVU7UUFDVixjQUFjO2FBQ2QsVUFBdUIsS0FBYTtZQUNoQyxFQUFFLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxDQUFDOzs7T0FBQTtJQVFELHNCQUFXLHVDQUFhO2FBS3hCO1lBQUEsaUJBTUM7WUFMRyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDZCxJQUFJ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QUFJLEtBQUssR0FBRyxvQkFBVyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEQsT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNyQyxDQUFDO2FBQ0QsVUFBNEIsS0FBYztZQUN0QyxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNCLG9CQUFXLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM3QyxDQUFDOzs7T0FKQTtJQUtELHNCQUFXLGlDQUFpQjthQUE1QjtZQUNJLElBQUksS0FBSyxHQUFHLG9CQUFXLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNqRCxPQUFPLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3JDLENBQUM7YUFDRCxVQUE2QixLQUFjO1lBQ3ZDLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0Isb0JBQVcsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLENBQUM7OztPQUpBO0lBS0wsbUJBQUM7QUFBRCxDQW5UQSxBQW1UQyxJQUFBO0FBblRZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxheWVyUHJlZnMgfSBmcm9tIFwiLi4vQ29tbW9uL1VJVXRpbFwiO1xuXG5cbmNsYXNzIENsaXBLZXlQYWlyIHtcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuICAgIHB1YmxpYyBhdWRpb0NsaXA6IGFueTtcbn1cblxuY2xhc3MgUGxheUtleVBpYXIge1xuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBwbGF5T2JqOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBBdWRpb01hbmFnZXIge1xuICAgIHByaXZhdGUgc291bmRzOiBNYXA8c3RyaW5nLCBhbnk+O1xuICAgIHByaXZhdGUgZWZmZWN0bU1hcDogTWFwPHN0cmluZywgbnVtYmVyPjtcbiAgICBwcml2YXRlIGVuYWJsZWQ6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBtdXNpYzogc3RyaW5nO1xuICAgIHByaXZhdGUgZWZmZWN0OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBvbGRFZmZlY3RWb2x1bWUgPSAxO1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBBdWRpb01hbmFnZXI7XG4gICAgcHJpdmF0ZSBtUGxheWluZ0lkczogUGxheUtleVBpYXJbXTtcblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc291bmRzID0gbmV3IE1hcDxzdHJpbmcsIGFueT4oKTtcbiAgICAgICAgdGhpcy5lZmZlY3RtTWFwID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tdXNpYyA9IFwiXCI7XG4gICAgICAgIHRoaXMuZWZmZWN0ID0gXCJcIjtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IFNpbmdsZXRvbigpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgQXVkaW9NYW5hZ2VyKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfVxuXG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOiDjOaZr+mfs+S5kOWkp+Wwj1xuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHNldCBNdXNpY1ZvbHVtZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldE11c2ljVm9sdW1lKHZhbHVlKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBNdXNpY1ZvbHVtZSgpIHtcbiAgICAgICAgcmV0dXJuIGNjLmF1ZGlvRW5naW5lLmdldE11c2ljVm9sdW1lKCk7XG4gICAgfVxuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDpn7PmlYjlpKflsI9cbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBzZXQgWWlueGlhb1ZvbHVtZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZWZmZWN0bU1hcC5mb3JFYWNoKCh2YWwsIGtleSkgPT4ge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKHRoaXMuZWZmZWN0bU1hcC5nZXQoa2V5KSwgdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHVibGljIGdldCBZaW54aWFvVm9sdW1lKCkge1xuICAgICAgICBsZXQgdmFsdWUgPSAwO1xuICAgICAgICB0aGlzLmVmZmVjdG1NYXAuZm9yRWFjaCgodmFsLCBrZXkpID0+IHtcbiAgICAgICAgICAgIHZhbHVlID0gY2MuYXVkaW9FbmdpbmUuZ2V0Vm9sdW1lKHRoaXMuZWZmZWN0bU1hcC5nZXQoa2V5KSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIFBhdXNlTXVzaWMoX2lzcGF1c2U6IGJvb2xlYW4pIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XG4gICAgfVxuXG4gICAgcHVibGljIERlc3RvcnlCeVNjZW5lKHNjZW5lTmFtZTogc3RyaW5nKSB7XG5cbiAgICB9XG5cblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8gXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJzY2VuZU5hbWVcIj7kuI3nn6XpgZPlnLrmma/lsLHloatcIlwiPC9wYXJhbT5cbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJuYW1lXCI+PC9wYXJhbT5cbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJsb29wXCI+PC9wYXJhbT5cbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJwb3NpdGlvblwiPjwvcGFyYW0+XG4gICAgLy8vIDxwYXJhbSBuYW1lPVwicGFyZW50XCI+PC9wYXJhbT5cbiAgICAvLy8gPHJldHVybnM+PC9yZXR1cm5zPiAgICAgICAgIFxuICAgIHB1YmxpYyBwbGF5KHNjZW5lTmFtZTogc3RyaW5nLFxuICAgICAgICBuYW1lOiBzdHJpbmcsXG4gICAgICAgIGxvb3A6IGJvb2xlYW4gPSBmYWxzZSxcbiAgICAgICAgY2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbCxcbiAgICAgICAgcG9zaXRpb246IGNjLlZlYzMgPSBudWxsLFxuICAgICAgICBwYXJlbnQ6IGFueSA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5lZmZlY3QgPSBuYW1lO1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKCF0aGlzLmdldEVmZmVjdFN0YXR1cygpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBsZXQgZWZmZWN0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInBsYXlFZmZlY3QgID09PT1cIitmeE5hbWUpXG4gICAgICAgICAgICBlZmZlY3QgPSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuc291bmRzW25hbWVdLCBsb29wKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcInNjZW5lTmFtZSA9PT0gXCIsIHNjZW5lTmFtZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibmFtZSA9PT0gXCIsIG5hbWUpO1xuICAgICAgICB0aGlzLmVmZmVjdG1NYXAuc2V0KG5hbWUsIGVmZmVjdCk7XG4gICAgICAgIHJldHVybiBlZmZlY3Q7XG4gICAgfVxuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDnibnmrormjqXlj6Mg5Yu/55SoXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJzY2VuZU5hbWVcIj48L3BhcmFtPlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cIm5hbWVcIj48L3BhcmFtPlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cImxvb3BcIj48L3BhcmFtPlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cImNhbGxiYWNrXCI+PC9wYXJhbT5cbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJDdXJsU3BlZWRcIj48L3BhcmFtPlxuICAgIC8vLyA8cmV0dXJucz48L3JldHVybnM+XG4gICAgcHVibGljIHBsYXlzcGVlZChzY2VuZU5hbWU6IHN0cmluZywgbmFtZTogc3RyaW5nLCBsb29wOiBib29sZWFuID0gZmFsc2UsIGNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGwsIEN1cmxTcGVlZDogbnVtYmVyID0gMSkge1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog5re75Yqg5omA5pyJ6Z+z6aKR6LWE5rqQXG4gICAgICogQHBhcmFtIGtleVxuICAgICAqIEBwYXJhbSBjbGlwXG4gICAgICovXG4gICAgYWRkKGtleSwgY2xpcCkge1xuICAgICAgICB0aGlzLnNvdW5kc1trZXldID0gY2xpcDtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBwbGF5QkdNKG11c2ljTmFtZSwgaXNMb29wID0gdHJ1ZSkge1xuICAgICAgICAvLyBpZighdGhpcy5zb3VuZHMuaGFzKG11c2ljTmFtZSkgKSBcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgICAgY29uc29sZS5lcnJvcihcIiB0aGVyZSBpcyBubyBtdXNpY25hbWU6XCIrIG11c2ljTmFtZSk7XG4gICAgICAgIC8vICAgICByZXR1cm47XG4gICAgICAgIC8vIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJtdXNpY05hbWUgLT09PSBcIiwgbXVzaWNOYW1lKTtcbiAgICAgICAgdGhpcy5tdXNpYyA9IG11c2ljTmFtZTtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHJldHVybjtcbiAgICAgICAgaWYgKCF0aGlzLmdldFNvdW5kU3RhdHVzKCkpIHJldHVybjtcbiAgICAgICAgcmV0dXJuIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLnNvdW5kc1ttdXNpY05hbWVdLCBpc0xvb3ApO1xuICAgIH1cblxuICAgIHB1YmxpYyBwbGF5T25DbGljaygpIHtcbiAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KFwiXCIsIFwidWlfY2xpY2tcIik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5YGc5q2i5pKt5pS+6Z+z5pWIXG4gICAgICogQHBhcmFtIGZ4TmFtZVxuICAgICAqL1xuICAgIHN0b3BFZmZlY3QoZnhOYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLmVmZmVjdG1NYXAuZ2V0KGZ4TmFtZSkgIT0gbnVsbCAmJiB0aGlzLmVmZmVjdG1NYXAuZ2V0KGZ4TmFtZSkgIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEVmZmVjdCh0aGlzLmVmZmVjdG1NYXAuZ2V0KGZ4TmFtZSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWBnOatoumfs+S5kFxuICAgICAqL1xuICAgIHN0b3BCR00oKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BNdXNpYygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaaguWBnOmfs+S5kFxuICAgICAqL1xuICAgIHBhdXNlTXVzaWMoKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlTXVzaWMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmgaLlpI3pn7PkuZBcbiAgICAgKi9cbiAgICByZXN1bWVNdXNpYygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmdldFNvdW5kU3RhdHVzKCkpIHRoaXMuc2V0U291bmRTdGF0dXMoXCJvcGVuXCIpO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5yZXN1bWVNdXNpYygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaaguWBnOaJgOaciemfs+aViFxuICAgICAqL1xuICAgIHBhdXNlQWxsRWZmZWN0cygpIHtcbiAgICAgICAgdGhpcy5zZXRFZmZlY3RTdGF0dXMoXCJjbG9zZVwiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIOaBouWkjeaJgOaciemfs+aViFxuICAgICovXG4gICAgcmVzdW1lQWxsRWZmZWN0cygpIHtcbiAgICAgICAgdGhpcy5zZXRFZmZlY3RTdGF0dXMoXCJvcGVuXCIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICog6I635Y+W6Z+z5pWI54q25oCBXG4gICAgKi9cbiAgICBnZXRFZmZlY3RzU3RhdHVzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gY2MuYXVkaW9FbmdpbmUuZ2V0RWZmZWN0c1ZvbHVtZSgpID09IDAgPyBmYWxzZSA6IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6Z2Z5q2i5omA5pyJ6Z+z5LmQ6Z+z5pWIXG4gICAgICogQHBhcmFtIGVuYWJsZWRcbiAgICAgKi9cbiAgICBzZXRFbmFibGVkKGVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gZW5hYmxlZDtcbiAgICAgICAgaWYgKGVuYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMucGxheUJHTSh0aGlzLm11c2ljKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEVuYWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5hYmxlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmuIXpmaTpn7PpopHnvJPlrZhcbiAgICAgKi9cbiAgICByZWxlYXNlKCkge1xuICAgICAgICB0aGlzLmVmZmVjdG1NYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuc2V0RW5hYmxlZChmYWxzZSk7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuc291bmRzKSB7XG4gICAgICAgICAgICAvLyBjYy5sb2FkZXIucmVsZWFzZSh0aGlzLnNvdW5kc1trZXldKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNvdW5kc1trZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOiDjOaZr+mfs+S5kOm7mOiupOWFs+mXrVxuICAgIGdldFNvdW5kU3RhdHVzKCkge1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJTb3VuZFN0YXR1c1wiKSA9PSBcIm9wZW5cIikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJTb3VuZFN0YXR1c1wiKSA9PSBcImNsb3NlXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRTb3VuZFN0YXR1cyhpc09wZW4pIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJTb3VuZFN0YXR1c1wiLCBpc09wZW4pO1xuICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMuZ2V0U291bmRTdGF0dXMoKSA9PSBcIiwgdGhpcy5nZXRTb3VuZFN0YXR1cygpKTtcbiAgICAgICAgaWYgKHRoaXMuZ2V0U291bmRTdGF0dXMoKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMubXVzaWMgJiYgdGhpcy5tdXNpYyAhPSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5QkdNKHRoaXMubXVzaWMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdG9wQkdNKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g6Z+z5pWI6buY6K6k5omT5byAXG4gICAgZ2V0RWZmZWN0U3RhdHVzKCkge1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJFZmZlY3RTdGF0dXNcIikgPT0gXCJvcGVuXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiRWZmZWN0U3RhdHVzXCIpID09IFwiY2xvc2VcIikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0RWZmZWN0U3RhdHVzKGlzT3Blbikge1xuICAgICAgICBjb25zb2xlLmxvZyhcInNldEVmZmVjdFN0YXR1cyA9PT09PSBcIiwgaXNPcGVuKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJFZmZlY3RTdGF0dXNcIiwgaXNPcGVuKTtcbiAgICAgICAgaWYgKHRoaXMuZ2V0U291bmRTdGF0dXMoKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZWZmZWN0ICYmIHRoaXMuZWZmZWN0ICE9IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnBsYXkoXCJcIiwgdGhpcy5lZmZlY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdG9wRWZmZWN0KHRoaXMuZWZmZWN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWkp+WOheOAgeW+t+W3nuaJkeWFiyDkv53lrZjorr7nva5cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IFRleGFzTXVzaWNTdGF0dXMoKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBzdGF0ZSA9IFBsYXllclByZWZzLkdldEludChcIlRleGFzTXVzaWNcIiwgMCk7XG4gICAgICAgIHJldHVybiBzdGF0ZSA9PSAwID8gZmFsc2UgOiB0cnVlO1xuICAgIH1cbiAgICBzdGF0aWMgc2V0IFRleGFzTXVzaWNTdGF0dXModmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgbGV0IGlzT3BlbiA9IHZhbHVlID8gMSA6IDA7XG4gICAgICAgIFBsYXllclByZWZzLlNldEludChcIlRleGFzTXVzaWNcIiwgaXNPcGVuKTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBUZXhhc0VmZmVjdFN0YXR1cygpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IHN0YXRlID0gUGxheWVyUHJlZnMuR2V0SW50KFwiVGV4YXNFZmZlY3RcIiwgMSk7XG4gICAgICAgIHJldHVybiBzdGF0ZSA9PSAwID8gZmFsc2UgOiB0cnVlO1xuICAgIH1cbiAgICBzdGF0aWMgc2V0IFRleGFzRWZmZWN0U3RhdHVzKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIGxldCBpc09wZW4gPSB2YWx1ZSA/IDEgOiAwO1xuICAgICAgICBQbGF5ZXJQcmVmcy5TZXRJbnQoXCJUZXhhc0VmZmVjdFwiLCBpc09wZW4pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWoseS5kOWfjiDkv53lrZjorr7nva5cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IEdhbWVzTXVzaWNTdGF0dXMoKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBzdGF0ZSA9IFBsYXllclByZWZzLkdldEludChcIkdhbWVzTXVzaWNcIiwgMSk7XG4gICAgICAgIHJldHVybiBzdGF0ZSA9PSAwID8gZmFsc2UgOiB0cnVlO1xuICAgIH1cbiAgICBzdGF0aWMgc2V0IEdhbWVzTXVzaWNTdGF0dXModmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgbGV0IGlzT3BlbiA9IHZhbHVlID8gMSA6IDA7XG4gICAgICAgIFBsYXllclByZWZzLlNldEludChcIkdhbWVzTXVzaWNcIiwgaXNPcGVuKTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBHYW1lc0VmZmVjdFN0YXR1cygpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IHN0YXRlID0gUGxheWVyUHJlZnMuR2V0SW50KFwiR2FtZXNFZmZlY3RcIiwgMSk7XG4gICAgICAgIHJldHVybiBzdGF0ZSA9PSAwID8gZmFsc2UgOiB0cnVlO1xuICAgIH1cbiAgICBzdGF0aWMgc2V0IEdhbWVzRWZmZWN0U3RhdHVzKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIGxldCBpc09wZW4gPSB2YWx1ZSA/IDEgOiAwO1xuICAgICAgICBQbGF5ZXJQcmVmcy5TZXRJbnQoXCJHYW1lc0VmZmVjdFwiLCBpc09wZW4pO1xuICAgIH1cbn0iXX0=