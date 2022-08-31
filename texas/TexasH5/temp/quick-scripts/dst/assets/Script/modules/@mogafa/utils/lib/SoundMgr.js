
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/utils/lib/SoundMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFx1dGlsc1xcbGliXFxTb3VuZE1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0lBQUE7UUFDWSxXQUFNLEdBQTJCLEVBQUUsQ0FBQztRQUNwQyxlQUFVLEdBQXdCLElBQUksR0FBRyxFQUFFLENBQUM7UUFDNUMsWUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLFdBQU0sR0FBVyxFQUFFLENBQUM7SUE2SmhDLENBQUM7SUEzSmlCLG9CQUFXLEdBQXpCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1NBQ2xDO1FBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsMkJBQVEsR0FBUixVQUFTLEdBQVcsRUFBRSxJQUFTO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFFRDs7O09BR0c7SUFDSCw2QkFBVSxHQUFWLFVBQVcsTUFBYyxFQUFFLE1BQXVCO1FBQXZCLHVCQUFBLEVBQUEsY0FBdUI7UUFDOUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUFFLE9BQU87UUFDcEMsSUFBSSxNQUFjLENBQUM7UUFDbkIsSUFBSTtZQUNBLHdDQUF3QztZQUN4QyxNQUFNLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNuRTtRQUFDLE9BQU8sS0FB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b3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdW5kTWdyIHtcbiAgICBwcml2YXRlIHNvdW5kczogeyBba2V5OiBudW1iZXJdOiBhbnkgfSA9IHt9O1xuICAgIHByaXZhdGUgZWZmZWN0bU1hcDogTWFwPHN0cmluZywgbnVtYmVyPiA9IG5ldyBNYXAoKTtcbiAgICBwcml2YXRlIGVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHByaXZhdGUgbXVzaWM6IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBlZmZlY3Q6IHN0cmluZyA9IFwiXCI7XG4gICAgcHJvdGVjdGVkIHN0YXRpYyBpbnN0YW5jZTogU291bmRNZ3I7XG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBTb3VuZE1nciB7XG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBTb3VuZE1ncigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa3u+WKoOaJgOaciemfs+mikei1hOa6kFxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKiBAcGFyYW0gY2xpcFxuICAgICAqL1xuICAgIGFkZFNvdW5kKGtleTogc3RyaW5nLCBjbGlwOiBhbnkpIHtcbiAgICAgICAgdGhpcy5zb3VuZHNba2V5XSA9IGNsaXA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pKt5pS+6Z+z5pWIXG4gICAgICogQHBhcmFtIGZ4TmFtZVxuICAgICAqL1xuICAgIHBsYXlFZmZlY3QoZnhOYW1lOiBzdHJpbmcsIGlzTG9vcDogYm9vbGVhbiA9IGZhbHNlKTogbnVtYmVyIHtcbiAgICAgICAgdGhpcy5lZmZlY3QgPSBmeE5hbWU7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSByZXR1cm47XG4gICAgICAgIGlmICghdGhpcy5nZXRFZmZlY3RTdGF0dXMoKSkgcmV0dXJuO1xuICAgICAgICBsZXQgZWZmZWN0OiBudW1iZXI7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwicGxheUVmZmVjdCAgPT09PVwiK2Z4TmFtZSlcbiAgICAgICAgICAgIGVmZmVjdCA9IGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zb3VuZHNbZnhOYW1lXSwgaXNMb29wKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVmZmVjdG1NYXAuc2V0KGZ4TmFtZSwgZWZmZWN0KTtcbiAgICAgICAgcmV0dXJuIGVmZmVjdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlgZzmraLmkq3mlL7pn7PmlYhcbiAgICAgKiBAcGFyYW0gZnhOYW1lXG4gICAgICovXG4gICAgc3RvcEVmZmVjdChmeE5hbWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5lZmZlY3RtTWFwLmdldChmeE5hbWUpICE9IG51bGwgJiYgdGhpcy5lZmZlY3RtTWFwLmdldChmeE5hbWUpICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BFZmZlY3QodGhpcy5lZmZlY3RtTWFwLmdldChmeE5hbWUpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDorr7nva7pn7PmlYjpn7Pph49cbiAgICAgKiBAcGFyYW0gZnhOYW1lXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgc2V0Vm9sdW1lKGZ4TmFtZTogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmVmZmVjdG1NYXAuZ2V0KGZ4TmFtZSkgIT0gbnVsbCAmJiB0aGlzLmVmZmVjdG1NYXAuZ2V0KGZ4TmFtZSkgIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKHRoaXMuZWZmZWN0bU1hcC5nZXQoZnhOYW1lKSwgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiuvue9rumfs+S5kOmfs+mHj1xuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqL1xuICAgIHNldE11c2ljVm9sdW1lKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUodmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaSreaUvumfs+S5kFxuICAgICAqIEBwYXJhbSBtdXNpY05hbWVcbiAgICAgKi9cbiAgICBwbGF5TXVzaWMobXVzaWNOYW1lOiBzdHJpbmcsIGlzTG9vcDogYm9vbGVhbiA9IHRydWUpOiBudW1iZXIge1xuICAgICAgICB0aGlzLm11c2ljID0gbXVzaWNOYW1lO1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkgcmV0dXJuO1xuICAgICAgICBpZiAoIXRoaXMuZ2V0U291bmRTdGF0dXMoKSkgcmV0dXJuO1xuICAgICAgICByZXR1cm4gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuc291bmRzW211c2ljTmFtZV0sIGlzTG9vcCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5YGc5q2i6Z+z5LmQXG4gICAgICovXG4gICAgc3RvcE11c2ljKCkge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmmoLlgZzpn7PkuZBcbiAgICAgKi9cbiAgICBwYXVzZU11c2ljKCkge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZU11c2ljKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5oGi5aSN6Z+z5LmQXG4gICAgICovXG4gICAgcmVzdW1lTXVzaWMoKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZU11c2ljKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6Z2Z5q2i5omA5pyJ6Z+z5LmQ6Z+z5pWIXG4gICAgICogQHBhcmFtIGVuYWJsZWRcbiAgICAgKi9cbiAgICBzZXRFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKGVuYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMucGxheU11c2ljKHRoaXMubXVzaWMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0RW5hYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbmFibGVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa4hemZpOmfs+mikee8k+WtmFxuICAgICAqL1xuICAgIHJlbGVhc2UoKSB7XG4gICAgICAgIHRoaXMuZWZmZWN0bU1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5zZXRFbmFibGVkKGZhbHNlKTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5zb3VuZHMpIHtcbiAgICAgICAgICAvLyAgY2MubG9hZGVyLnJlbGVhc2UodGhpcy5zb3VuZHNba2V5XSk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zb3VuZHNba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRTb3VuZFN0YXR1cygpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiU291bmRTdGF0dXNcIikgPT0gXCJvcGVuXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiU291bmRTdGF0dXNcIikgPT0gXCJjbG9zZVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRTb3VuZFN0YXR1cyhpc09wZW46IHN0cmluZykge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlNvdW5kU3RhdHVzXCIsIGlzT3Blbik7XG4gICAgICAgIGlmICh0aGlzLmdldFNvdW5kU3RhdHVzKCkpIHtcbiAgICAgICAgICAgIHRoaXMucGxheU11c2ljKHRoaXMubXVzaWMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdG9wTXVzaWMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRFZmZlY3RTdGF0dXMoKSB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkVmZmVjdFN0YXR1c1wiKSA9PSBcIm9wZW5cIikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJFZmZlY3RTdGF0dXNcIikgPT0gXCJjbG9zZVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRFZmZlY3RTdGF0dXMoaXNPcGVuOiBzdHJpbmcpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJFZmZlY3RTdGF0dXNcIiwgaXNPcGVuKTtcbiAgICAgICAgaWYgKHRoaXMuZ2V0RWZmZWN0U3RhdHVzKCkpIHtcbiAgICAgICAgICAgIHRoaXMucGxheUVmZmVjdCh0aGlzLmVmZmVjdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0b3BFZmZlY3QodGhpcy5lZmZlY3QpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19