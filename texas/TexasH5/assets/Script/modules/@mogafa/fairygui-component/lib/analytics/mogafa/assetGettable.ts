import Asset from "./asset";

export default interface AssetGetter {
    getAssets(): Asset[];
}
