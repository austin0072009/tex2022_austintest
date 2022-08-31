import { vipConfig } from "./Lobby/LobbyNetData";

export class GameCommon {
    static allSmsCode: any = null;
    static vipConfig: vipConfig = null;
    static isAutoLogin: boolean = true;

    static loadScene(abname: string, scenename: string): void {
        let oldab = cc.assetManager.getBundle(abname);
        if (oldab == null) {
            cc.assetManager.loadBundle(abname, (err, bundle) => {
                if (err) {
                    console.error(abname + " load fail.");
                    return;
                }
                console.log("loadSubpackage success name == " + abname);
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

    // 是否需要重连
    static isNeedReconnect(sceneName: string): boolean {
        let notSceneName: string[] = ["dlc", "login", "lobby"];
        for (let index = 0; index < notSceneName.length; index++) {
            let name = notSceneName[index];
            if (name == sceneName) {
                return false;
            }
        }
        return true;
    }
}