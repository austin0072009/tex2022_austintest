export default class SymbolSpineResource {
    private _code: number;
    private _urls: string[];
    private _resources: Map<string, sp.SkeletonData>;
    /**
     * 棋子spine资源构造函数
     *
     * @param code 棋子编码
     * @param urls 棋子对应的spine资源列表
     */
    constructor(code: number, urls: string[]) {
        this._code = code;
        this._urls = urls;
        this._resources = new Map<string, sp.SkeletonData>();
    }
    public get code(): number {
        return this._code;
    }
    public get urls(): string[] {
        return this._urls;
    }
    public get resources(): Map<string, sp.SkeletonData> {
        return this._resources;
    }
    public addResource(name: string, resource: sp.SkeletonData) {
        this._resources.set(name, resource);
    }
}
