"use strict";
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