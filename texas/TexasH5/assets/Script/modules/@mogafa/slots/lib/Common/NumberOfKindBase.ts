import FguiComponentBase from "../../../fairygui-component/lib/FguiComponentBase";




export default abstract class NumberOfKindBase extends FguiComponentBase {
    public abstract executeNumberOfKind(kindNumber: number): void;
}
