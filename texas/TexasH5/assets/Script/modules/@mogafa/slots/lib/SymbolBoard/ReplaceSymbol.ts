export default class ReplaceSymbol {
    private $reel: number;
    private $cell: number;
    private $count: number;
    private $replaced: boolean = false;
    constructor(reel: number, cell: number, count: number) {
        this.$reel = reel;
        this.$cell = cell;
        this.$count = count;
        this.$replaced = false;
    }
    public get reel(): number {
        return this.$reel;
    }
    public get cell(): number {
        return this.$cell;
    }
    public get count(): number {
        return this.$count;
    }
    public replaceOnce(): void {
        this.$count--;
        if (this.$count < 0) {
            this.$count == 0;
        }
        this.$replaced = this.$count === 0;
    }
    public get replaced(): boolean {
        return this.$replaced;
    }
}
