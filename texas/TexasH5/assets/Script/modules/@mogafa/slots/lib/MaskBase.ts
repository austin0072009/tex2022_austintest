import FguiComponentBase from "../../fairygui-component/lib/FguiComponentBase";



export default abstract class MaskBase extends FguiComponentBase {
    private _x: number;
    private _y: number;
    public get x(): number {
        return this._x;
    }
    public set x(x: number) {
        this._x = x;
    }
    public get y(): number {
        return this._y;
    }
    public set y(y: number) {
        this._y = y;
    }
}
