export class PublicMethods {
    public static designWidth: number = 1080;
    public static designHeight: number = 2340;

    public static screenFit(com: fgui.GComponent) {
        let scaleW = cc.winSize.width / this.designWidth;
        let scaleH = cc.winSize.height / this.designHeight;
        console.log("scaleH == ", scaleH);
        console.log("scaleW == ", scaleW);
        console.log("scaleW - scaleH == ", scaleW - scaleH);
        let sub = scaleW - scaleH;
        // if (sub > 0.15) {
        //     com.node.setScale(scaleH, scaleH); //留黑边
        //     com.node.x = (this.designWidth - cc.winSize.width * scaleH) / 2;
        // } else 
        if (sub > 0.06) {
            com.node.setScale(scaleW, scaleH); //整体拉伸充满
        } else {
            com.makeFullScreen(); //自定义适配
        }
    }
}