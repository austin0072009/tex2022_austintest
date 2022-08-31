import { SpinResultsGameMode } from "./SpinResultsGameMode";
import SpinResultsWheel from "./SpinResultsWheel";
import SpinResultChoice from "./SpinResultChoice";
// import { SpinResultsEvent } from ".";
export default class SpinResultsFreeTrigger {
    private _gameMode;
    private _count;
    private _total;
    private _wheels;
    private _choices;
    private _events;
    constructor(gameMode?: SpinResultsGameMode, count?: number, total?: number, wheels?: SpinResultsWheel[], choices?: func[], events?: SpinResultsEvent[]);
    /**
     * 获取游戏类型
     */
    get gameMode(): SpinResultsGameMode;
    /**
     * 设置游戏类型
     */
    set gameMode(value: SpinResultsGameMode);
    /**
     * 获取次数
     */
    get count(): number;
    /**
     * 设置次数
     */
    set count(value: number);
    /**
     * 获取总次数
     */
    get total(): number;
    /**
     * 设置总次数
     */
    set total(value: number);
    /**
     * 获取转盘（比如小猪转棋盘数和wild列数）
     */
    get wheels(): SpinResultsWheel[];
    /**
     * 设置转盘
     */
    set wheels(value: SpinResultsWheel[]);
    /**
     * 获取选择（比如宙斯选择freespin次数）
     */
    get choices(): SpinResultChoice[];
    /**
     * 设置选择
     */
    set choices(value: SpinResultChoice[]);
    /**
     * 获取事件（比如埃及free spin转盘翻倍）
     */
    get events(): func[];
    /**
     * 设置事件
     */
    set events(value: func[]);
}
