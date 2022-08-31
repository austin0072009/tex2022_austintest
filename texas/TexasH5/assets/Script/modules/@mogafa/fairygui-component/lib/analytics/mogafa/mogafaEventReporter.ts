import EventReporter from "../EventReporter";
import CommonEventParameter from "../commonEventParameter";
import EventParameter from "../EventParameter";
import ReportableObject from "../reportableObject";
import AssetGetter from "./assetGettable";
import MogafaCommonEventParameter from "./mogafaCommonEventParameter";
import MogafaReportableObject from "./mogafaReportableObject";
import { HttpResponse } from "../../../../utils/lib/HttpInterface";
import HttpApi from "../../../../../@slotsmaster/ui-common/lib/HttpApi";
const REPORT_LOCAL_NAME = "reportData";
interface ReportResponse {
    requestId: string;
    timestamp: number;
    data: any;
}
export default class MoagfaEventReporter implements EventReporter {
    private readonly MaxEventCount: number = 100;
    private readonly ReportInterval: number = 5000;
    private readonly reportUrl: string = "https://0q7op0mbp1.execute-api.us-west-2.amazonaws.com/prod/events";
    private readonly assetGetter: AssetGetter;
    private _isReporting = false;
    private commonParameter: MogafaCommonEventParameter;
    constructor(assetGetter: AssetGetter) {
        this.assetGetter = assetGetter;
    }
    initialize(commonParamter: CommonEventParameter): void {
        this.commonParameter = commonParamter as MogafaCommonEventParameter;
        //todo:从本地获取之前保存的数据，然后上报
        this.readFromLocal();
        setInterval(() => {
            this.callLogEventReportUp();
        }, 10000);
    }
    private logEventReportableObject(reportableObject: ReportableObject): void {
        let mogafaReportableObject = reportableObject as MogafaReportableObject;
        mogafaReportableObject.assets = this.assetGetter.getAssets();
        this.commonParameter.addEvent(reportableObject);
        if (this.commonParameter.events.length >= this.MaxEventCount) {
            //调用http请求
            this.callLogEventReportUp();
            this.commonParameter.clearEvents();
        }
        //todo:存储在本地
        this.saveToLocal(this.commonParameter);
    }

    private async reportUp(commonParameter: MogafaCommonEventParameter) {
        let rst: HttpResponse<ReportResponse> = await HttpApi.http.post(this.reportUrl, commonParameter, {
            headers: {
                gameId: commonParameter.appId,
            },
        })
        if (rst.code != 0) {
            this.saveToLocal(commonParameter);
        }
    }

    private callLogEventReportUp() {
        if (!this._isReporting) {
            this._isReporting = true;
            this.reportUp(this.commonParameter);
        }
    }

    /**
     *存储到本地，防止丢数据
     */
    private saveToLocal(commonParameter: MogafaCommonEventParameter) {
        let saveData = commonParameter.toEventParameters();
        let saveLocal = JSON.stringify(saveData);
        cc.sys.localStorage.setItem(REPORT_LOCAL_NAME, saveLocal);
        this.commonParameter.clearEvents();
    }

    /**
     *获取本地缓存，并清空本地缓村
     */
    private readFromLocal() {
        let sysValue = cc.sys.localStorage.getItem(REPORT_LOCAL_NAME);
        if (sysValue) {
            cc.sys.localStorage.removeItem(REPORT_LOCAL_NAME);
            let reportData: CommonEventParameter = JSON.parse(sysValue);
            if (reportData) {
                let reportObj = reportData as MogafaCommonEventParameter;
                //上报
                this.reportUp(reportObj);
            }
        }
    }

    logEvent(name: any): void;
    logEvent(name: any, parameterName: string, parameterValue: number): void;
    logEvent(name: any, parameterName: string, parameterValue: string): void;
    logEvent(name: any, ...parameters: EventParameter[]): void;
    logEvent(name: any, parameterName?: any, parameterValue?: any, ...rest: any[]) {
        if (!this.instanceOfReportableObject(name)) {
            return;
        }
        this.logEventReportableObject((name as unknown) as ReportableObject);
    }
    private instanceOfReportableObject(object: any): object is ReportableObject {
        return "eventName" in object || "toEventParameters" in object;
    }
}
