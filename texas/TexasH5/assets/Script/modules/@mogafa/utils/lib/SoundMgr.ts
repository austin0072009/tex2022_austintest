
export default class SoundMgr {
    private sounds: { [key: number]: any } = {};
    private effectmMap: Map<string, number> = new Map();
    private enabled: boolean = true;
    private music: string = "";
    private effect: string = "";
    protected static instance: SoundMgr;
    public static getInstance(): SoundMgr {
        if (!this.instance) {
            this.instance = new SoundMgr();
        }
        return this.instance;
    }

    /**
     * 添加所有音频资源
     * @param key
     * @param clip
     */
    addSound(key: string, clip: any) {
        this.sounds[key] = clip;
    }

    /**
     * 播放音效
     * @param fxName
     */
    playEffect(fxName: string, isLoop: boolean = false): number {
        this.effect = fxName;
        if (!this.enabled) return;
        if (!this.getEffectStatus()) return;
        let effect: number;
        try {
            //console.log("playEffect  ===="+fxName)
            effect = cc.audioEngine.playEffect(this.sounds[fxName], isLoop);
        } catch (error) {
            return;
        }
        this.effectmMap.set(fxName, effect);
        return effect;
    }

    /**
     * 停止播放音效
     * @param fxName
     */
    stopEffect(fxName: string) {
        if (this.effectmMap.get(fxName) != null && this.effectmMap.get(fxName) != undefined)
            cc.audioEngine.stopEffect(this.effectmMap.get(fxName));
    }

    /**
     * 设置音效音量
     * @param fxName
     * @param value
     */
    setVolume(fxName: string, value: number) {
        if (this.effectmMap.get(fxName) != null && this.effectmMap.get(fxName) != undefined)
            cc.audioEngine.setVolume(this.effectmMap.get(fxName), value);
    }

    /**
     * 设置音乐音量
     * @param value
     */
    setMusicVolume(value: number) {
        cc.audioEngine.setMusicVolume(value);
    }

    /**
     * 播放音乐
     * @param musicName
     */
    playMusic(musicName: string, isLoop: boolean = true): number {
        this.music = musicName;
        if (!this.enabled) return;
        if (!this.getSoundStatus()) return;
        return cc.audioEngine.playMusic(this.sounds[musicName], isLoop);
    }

    /**
     * 停止音乐
     */
    stopMusic() {
        cc.audioEngine.stopMusic();
    }

    /**
     * 暂停音乐
     */
    pauseMusic() {
        cc.audioEngine.pauseMusic();
    }

    /**
     * 恢复音乐
     */
    resumeMusic() {
        cc.audioEngine.resumeMusic();
    }

    /**
     * 静止所有音乐音效
     * @param enabled
     */
    setEnabled(enabled: boolean) {
        if (enabled) {
            this.playMusic(this.music);
        } else {
            cc.audioEngine.stopAll();
        }
    }

    getEnable() {
        return this.enabled;
    }

    /**
     * 清除音频缓存
     */
    release() {
        this.effectmMap = new Map();
        this.setEnabled(false);
        for (const key in this.sounds) {
          //  cc.loader.release(this.sounds[key]);
            delete this.sounds[key];
        }
    }
    getSoundStatus(): boolean {
        if (localStorage.getItem("SoundStatus") == "open") {
            return true;
        } else if (localStorage.getItem("SoundStatus") == "close") {
            return false;
        } else {
            return true;
        }
    }
    setSoundStatus(isOpen: string) {
        localStorage.setItem("SoundStatus", isOpen);
        if (this.getSoundStatus()) {
            this.playMusic(this.music);
        } else {
            this.stopMusic();
        }
    }
    getEffectStatus() {
        if (localStorage.getItem("EffectStatus") == "open") {
            return true;
        } else if (localStorage.getItem("EffectStatus") == "close") {
            return false;
        } else {
            return true;
        }
    }
    setEffectStatus(isOpen: string) {
        localStorage.setItem("EffectStatus", isOpen);
        if (this.getEffectStatus()) {
            this.playEffect(this.effect);
        } else {
            this.stopEffect(this.effect);
        }
    }
}
