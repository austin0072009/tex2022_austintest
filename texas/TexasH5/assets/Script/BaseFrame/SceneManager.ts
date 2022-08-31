export class SceneManager {
    private sounds: Map<string, any>;

    private static _instance: SceneManager;


    constructor() {
        this.sounds = new Map<string, any>();
    }

    static get Singleton() {
        if (!this._instance) {
            this._instance = new SceneManager();
        }

        return this._instance;
    }

    public loadScene(abname: string, scenename: string): void {
        let oldab = cc.assetManager.getBundle(abname);
        if (oldab == null) {
            cc.assetManager.loadBundle(abname, (err, bundle) => {
                if (err) {
                    console.error(abname + " load fail.");
                    return;
                }
                console.log("loadSubpackage success name == " + abname);
                //cc.director.loadScene(scenename);
                bundle.loadScene(scenename, (err, sceneAsset) => {
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
            oldab.loadScene(scenename, (err, sceneAsset) => {
                if (err) {
                    console.error(abname + " load fail." + scenename);
                    return;
                }
                console.log(sceneAsset + " sceneName:" + scenename);
                cc.director.runScene(sceneAsset);
            });
        }
    }
}