import LobbyViewCtr from "../LobbyViewCtr";

/**
 * @description 娛樂 游戲item
 */
export default class GameItemInEntertainment extends fgui.GButton {
    protected onConstruct() {
        this.iconLoader = this.getChild("n0").asLoader;
        this.dark = this.getChild("dark").asImage;
        this.progressLabel = this.getChild("progressLabel").asTextField;
        this.progresssize = this.getChild("progresssize").asTextField;
    }
    public gameId: number;
    public icons: string;
    public iconLoader: fgui.GLoader;
    private dark: fgui.GImage;
    private progressLabel: fgui.GTextField;
    private progresssize: fgui.GTextField;
    public setData(gameId: number, icons: string, isUpdate: boolean) {
        this.gameId = gameId;
        this.icons = icons;
        this.iconLoader.url = "ui://Lobby/" + icons;
        this.dark.visible = isUpdate;
        this.dark.fillAmount = 1;
        this.progressLabel.text = '';
        this.progresssize.text = '';
    }

    public setProgress(size: number, totleSize: number) {
        if (totleSize == 0) {
            return;
        }
        let progress = size / totleSize;
        if (isNaN(progress)) {
            progress = 0;
        }
        console.log("this.gameId === ", this.gameId);
        this.progresssize.text = `${size}kb/${totleSize}kb`;
        this.dark.fillAmount = 1 - progress;
        this.progressLabel.text = Math.floor(progress * 100) + '%';

        if (progress >= 1) {
            this.progressLabel.text = '';
            this.progresssize.text = '';
            LobbyViewCtr.instance.view.entertainmentView.changedData(this.gameId);
        }
    }

    /**更新失败 */
    public updateFild() {
        this.dark.visible = true;
        this.dark.fillAmount = 1;
        this.progressLabel.text = '';
        this.progresssize.text = '';
    }

}