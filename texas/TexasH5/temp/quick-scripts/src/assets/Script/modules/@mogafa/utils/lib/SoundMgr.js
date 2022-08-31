"use strict";
cc._RF.push(module, '547dal5t+tOFKbycQVtFQA9', 'SoundMgr');
// Script/modules/@mogafa/utils/lib/SoundMgr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SoundMgr = /** @class */ (function () {
    function SoundMgr() {
        this.sounds = {};
        this.effectmMap = new Map();
        this.enabled = true;
        this.music = "";
        this.effect = "";
    }
    SoundMgr.getInstance = function () {
        if (!this.instance) {
            this.instance = new SoundMgr();
        }
        return this.instance;
    };
    /**
     * 添加所有音频资源
     * @param key
     * @param clip
     */
    SoundMgr.prototype.addSound = function (key, clip) {
        this.sounds[key] = clip;
    };
    /**
     * 播放音效
     * @param fxName
     */
    SoundMgr.prototype.playEffect = function (fxName, isLoop) {
        if (isLoop === void 0) { isLoop = false; }
        this.effect = fxName;
        if (!this.enabled)
            return;
        if (!this.getEffectStatus())
            return;
        var effect;
        try {
            //console.log("playEffect  ===="+fxName)
            effect = cc.audioEngine.playEffect(this.sounds[fxName], isLoop);
        }
        catch (error) {
            return;
        }
        this.effectmMap.set(fxName, effect);
        return effect;
    };
    /**
     * 停止播放音效
     * @param fxName
     */
    SoundMgr.prototype.stopEffect = function (fxName) {
        if (this.effectmMap.get(fxName) != null && this.effectmMap.get(fxName) != undefined)
            cc.audioEngine.stopEffect(this.effectmMap.get(fxName));
    };
    /**
     * 设置音效音量
     * @param fxName
     * @param value
     */
    SoundMgr.prototype.setVolume = function (fxName, value) {
        if (this.effectmMap.get(fxName) != null && this.effectmMap.get(fxName) != undefined)
            cc.audioEngine.setVolume(this.effectmMap.get(fxName), value);
    };
    /**
     * 设置音乐音量
     * @param value
     */
    SoundMgr.prototype.setMusicVolume = function (value) {
        cc.audioEngine.setMusicVolume(value);
    };
    /**
     * 播放音乐
     * @param musicName
     */
    SoundMgr.prototype.playMusic = function (musicName, isLoop) {
        if (isLoop === void 0) { isLoop = true; }
        this.music = musicName;
        if (!this.enabled)
            return;
        if (!this.getSoundStatus())
            return;
        return cc.audioEngine.playMusic(this.sounds[musicName], isLoop);
    };
    /**
     * 停止音乐
     */
    SoundMgr.prototype.stopMusic = function () {
        cc.audioEngine.stopMusic();
    };
    /**
     * 暂停音乐
     */
    SoundMgr.prototype.pauseMusic = function () {
        cc.audioEngine.pauseMusic();
    };
    /**
     * 恢复音乐
     */
    SoundMgr.prototype.resumeMusic = function () {
        cc.audioEngine.resumeMusic();
    };
    /**
     * 静止所有音乐音效
     * @param enabled
     */
    SoundMgr.prototype.setEnabled = function (enabled) {
        if (enabled) {
            this.playMusic(this.music);
        }
        else {
            cc.audioEngine.stopAll();
        }
    };
    SoundMgr.prototype.getEnable = function () {
        return this.enabled;
    };
    /**
     * 清除音频缓存
     */
    SoundMgr.prototype.release = function () {
        this.effectmMap = new Map();
        this.setEnabled(false);
        for (var key in this.sounds) {
            //  cc.loader.release(this.sounds[key]);
            delete this.sounds[key];
        }
    };
    SoundMgr.prototype.getSoundStatus = function () {
        if (localStorage.getItem("SoundStatus") == "open") {
            return true;
        }
        else if (localStorage.getItem("SoundStatus") == "close") {
            return false;
        }
        else {
            return true;
        }
    };
    SoundMgr.prototype.setSoundStatus = function (isOpen) {
        localStorage.setItem("SoundStatus", isOpen);
        if (this.getSoundStatus()) {
            this.playMusic(this.music);
        }
        else {
            this.stopMusic();
        }
    };
    SoundMgr.prototype.getEffectStatus = function () {
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
    SoundMgr.prototype.setEffectStatus = function (isOpen) {
        localStorage.setItem("EffectStatus", isOpen);
        if (this.getEffectStatus()) {
            this.playEffect(this.effect);
        }
        else {
            this.stopEffect(this.effect);
        }
    };
    return SoundMgr;
}());
exports.default = SoundMgr;

cc._RF.pop();