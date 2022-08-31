import { MogafaNumberField } from "./MogafaNumberField";

export class MogafaExtensions {
    public static init(): void {
        (fgui.GObject.prototype as any).asMogafaNumberField = function (): MogafaNumberField {
            return new MogafaNumberField(this.asTextField);
        };
    }
}
