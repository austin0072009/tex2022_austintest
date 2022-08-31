import FguiComponentBase from "./FguiComponentBase";


export default abstract class FguiFullScreenBase extends FguiComponentBase {
    protected createChildComponents(): void {
        super.createChildComponents();
        this.fguiComponent.makeFullScreen();
    }
}
