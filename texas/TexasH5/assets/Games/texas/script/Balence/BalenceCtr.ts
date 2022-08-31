import { TableGainSD, TableClubLoseWin, clubinfo } from "../Model/TexasNetData";
import BalenceComp from "./BalenceComp";

export default class BalenceCtr {
    public view: BalenceComp;

    private static _instance: BalenceCtr = null;
    static get instance(): BalenceCtr {
        if (this._instance == null)
            this._instance = new BalenceCtr();

        return this._instance;
    }

    private _model: BalenceModel;
    public get Model(): BalenceModel {
        if (this._model == null) {
            this._model = new BalenceModel();
            this._model.Init();
        }
        return this._model;
    }
}

export class BalenceModel {
    /// <summary>
    /// 1-3
    /// </summary>
    public br: string;
    /// <summary>
    /// 开始时间
    /// </summary>
    public begintime: string;
    public endtime: string;
    /// <summary>
    /// 持续时间 分钟显示转换成0.5h 1h
    /// </summary>
    public duration: number;
    /// <summary>
    /// 奖池 可能为负 有人击中朵朵可能为负
    /// </summary>
    public tax: number;
    /// <summary>
    /// 本局总手数
    /// </summary>
    public pcount: number;
    /// <summary>
    /// 本局总带入
    /// </summary>
    public allintogold: number;
    /// <summary>
    /// 所有参与人员 已按赢的多少进行了排序  MVP【赢最多的】 大鱼【输最多的】 土豪【带入最多的】 在此查找
    /// </summary>
    public gainlist: TableGainSD[];
    /// <summary>
    /// 保险贡献
    /// </summary>
    public InsurTotal: number;
    // <summary>
    /// 俱乐部输赢  超级联盟才有
    /// </summary>
    public clubWl: TableClubLoseWin[];

    /// <summary>
    /// 俱乐部保险输赢
    /// </summary>
    public clunbins: clubinfo[];
    /// <summary>
    /// 标识是否管理员或者创建者
    /// </summary>
    public isnamger: boolean;
    /// <summary>
    /// 是否超级联盟房间
    /// </summary>
    public IsSupper: boolean;

    public Init() {
        this.gainlist = [];
    }
    public Reset() {
        this.gainlist = [];
        this.begintime = null;
        this.endtime = null;
        this.duration = 0;
        this.tax = 0;
        this.pcount = 0;
        this.allintogold = 0;
        this.InsurTotal = 0;
        this.clubWl = null;
        this.clunbins = null;
        this.isnamger = false;
    }
}