import { PlayerPrefs } from "../Common/UIUtil";


class ClipKeyPair {
    public name: string;
    public audioClip: any;
}

class PlayKeyPiar {
    public id: number;
    public playObj: any;
}

export class AudioManager {
    private sounds: Map<string, any>;
    private effectmMap: Map<string, number>;
    private enabled: boolean;
    private music: string;
    private effect: string;
    private oldEffectVolume = 1;

    private static _instance: AudioManager;
    private mPlayingIds: PlayKeyPiar[];


    constructor() {
        this.sounds = new Map<string, any>();
        this.effectmMap = new Map<string, number>();
        this.enabled = true;
        this.music = "";
        this.effect = "";
    }

    static get Singleton() {
        if (!this._instance) {
            this._instance = new AudioManager();
        }

        return this._instance;
    }


    /// <summary>
    /// 背景音乐大小
    /// </summary>
    public set MusicVolume(value: number) {
        cc.audioEngine.setMusicVolume(value);
    }
    public get MusicVolume() {
        return cc.audioEngine.getMusicVolume();
    }

    /// <summary>
    /// 音效大小
    /// </summary>
    public set YinxiaoVolume(value: number) {
        this.effectmMap.forEach((val, key) => {
            cc.audioEngine.setVolume(this.effectmMap.get(key), value);
        });
    }
    public get YinxiaoVolume() {
        let value = 0;
        this.effectmMap.forEach((val, key) => {
            value = cc.audioEngine.getVolume(this.effectmMap.get(key));
        });
        return value;
    }

    public PauseMusic(_ispause: boolean) {
        cc.audioEngine.stopMusic();
    }

    public DestoryByScene(sceneName: string) {

    }


    /// <summary>
    /// 
    /// </summary>
    /// <param name="sceneName">不知道场景就填""</param>
    /// <param name="name"></param>
    /// <param name="loop"></param>
    /// <param name="position"></param>
    /// <param name="parent"></param>
    /// <returns></returns>         
    public play(sceneName: string,
        name: string,
        loop: boolean = false,
        callback: Function = null,
        position: cc.Vec3 = null,
        parent: any = null) {
        this.effect = name;
        if (!this.enabled)
            return;
        if (!this.getEffectStatus())
            return;
        let effect;
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
    }

    /// <summary>
    /// 特殊接口 勿用
    /// </summary>
    /// <param name="sceneName"></param>
    /// <param name="name"></param>
    /// <param name="loop"></param>
    /// <param name="callback"></param>
    /// <param name="CurlSpeed"></param>
    /// <returns></returns>
    public playspeed(sceneName: string, name: string, loop: boolean = false, callback: Function = null, CurlSpeed: number = 1) {
    }


    /**
     * 添加所有音频资源
     * @param key
     * @param clip
     */
    add(key, clip) {
        this.sounds[key] = clip;
    }


    public playBGM(musicName, isLoop = true) {
        // if(!this.sounds.has(musicName) ) 
        // {
        //     console.error(" there is no musicname:"+ musicName);
        //     return;
        // }
        console.log("musicName -=== ", musicName);
        this.music = musicName;
        if (!this.enabled) return;
        if (!this.getSoundStatus()) return;
        return cc.audioEngine.playMusic(this.sounds[musicName], isLoop);
    }

    public playOnClick() {
        AudioManager.Singleton.play("", "ui_click");
    }

    /**
     * 停止播放音效
     * @param fxName
     */
    stopEffect(fxName) {
        if (this.effectmMap.get(fxName) != null && this.effectmMap.get(fxName) != undefined)
            cc.audioEngine.stopEffect(this.effectmMap.get(fxName));
    }

    /**
     * 停止音乐
     */
    stopBGM() {
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
        if (!this.getSoundStatus()) this.setSoundStatus("open");
        cc.audioEngine.resumeMusic();
    }

    /**
     * 暂停所有音效
     */
    pauseAllEffects() {
        this.setEffectStatus("close");
    }

    /**
    * 恢复所有音效
    */
    resumeAllEffects() {
        this.setEffectStatus("open");
    }

    /**
    * 获取音效状态
    */
    getEffectsStatus(): boolean {
        return cc.audioEngine.getEffectsVolume() == 0 ? false : true;
    }

    /**
     * 静止所有音乐音效
     * @param enabled
     */
    setEnabled(enabled) {
        this.enabled = enabled;
        if (enabled) {
            this.playBGM(this.music);
        }
        else {
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
            // cc.loader.release(this.sounds[key]);
            delete this.sounds[key];
        }
    }
    // 背景音乐默认关闭
    getSoundStatus() {
        if (localStorage.getItem("SoundStatus") == "open") {
            return true;
        }
        else if (localStorage.getItem("SoundStatus") == "close") {
            return false;
        }
        else {
            return false;
        }
    }
    setSoundStatus(isOpen) {
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
    }
    // 音效默认打开
    getEffectStatus() {
        if (localStorage.getItem("EffectStatus") == "open") {
            return true;
        }
        else if (localStorage.getItem("EffectStatus") == "close") {
            return false;
        }
        else {
            return true;
        }
    }
    setEffectStatus(isOpen) {
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
    }

    /**
     * 大厅、德州扑克 保存设置
     */
    static get TexasMusicStatus(): boolean {
        let state = PlayerPrefs.GetInt("TexasMusic", 0);
        return state == 0 ? false : true;
    }
    static set TexasMusicStatus(value: boolean) {
        let isOpen = value ? 1 : 0;
        PlayerPrefs.SetInt("TexasMusic", isOpen);
    }
    static get TexasEffectStatus(): boolean {
        let state = PlayerPrefs.GetInt("TexasEffect", 1);
        return state == 0 ? false : true;
    }
    static set TexasEffectStatus(value: boolean) {
        let isOpen = value ? 1 : 0;
        PlayerPrefs.SetInt("TexasEffect", isOpen);
    }

    /**
     * 娱乐城 保存设置
     */
    static get GamesMusicStatus(): boolean {
        let state = PlayerPrefs.GetInt("GamesMusic", 1);
        return state == 0 ? false : true;
    }
    static set GamesMusicStatus(value: boolean) {
        let isOpen = value ? 1 : 0;
        PlayerPrefs.SetInt("GamesMusic", isOpen);
    }
    static get GamesEffectStatus(): boolean {
        let state = PlayerPrefs.GetInt("GamesEffect", 1);
        return state == 0 ? false : true;
    }
    static set GamesEffectStatus(value: boolean) {
        let isOpen = value ? 1 : 0;
        PlayerPrefs.SetInt("GamesEffect", isOpen);
    }
}