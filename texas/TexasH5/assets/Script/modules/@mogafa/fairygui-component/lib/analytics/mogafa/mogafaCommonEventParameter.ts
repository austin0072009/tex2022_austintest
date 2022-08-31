import CommonEventParameter from "../commonEventParameter";
import ReportableObject from "../reportableObject";
import EventParameter from "../EventParameter";

export default class MogafaCommonEventParameter implements CommonEventParameter {
    appId: string;
    appsflyerId: string;
    adId: string;
    userId: string;
    deviceModel: string;
    requestId: string;
    os: string;
    osVersion: string;
    deviceTimezone: string;
    deviceLanguage: string;
    clientVersion: string;
    network: string;
    natural: boolean;
    events: ReportableObject[];
    abGroup: EventParameter[];
    extraParameters: EventParameter[];
    constructor(
        appId: string,
        requestId: string,
        userId: string,
        os: string,
        osVersion: string,
        deviceModel: string,
        deviceLanguage: string,
        deviceTimezone: string,
        clientVersion: string,
        network: string,
        natural: boolean,
        abGroup: EventParameter[],
        appsflyerId: string,
        adId: string
    ) {
        this.appId = appId;
        this.requestId = requestId;
        this.userId = userId;
        this.os = os;
        this.osVersion = osVersion;
        this.deviceModel = deviceModel;
        this.deviceLanguage = deviceLanguage;
        this.deviceTimezone = deviceTimezone;
        this.clientVersion = clientVersion;
        this.network = network;
        this.natural = natural;
        this.abGroup = abGroup;
        if (!this.abGroup) {
            this.abGroup = [];
        }
        this.appsflyerId = appsflyerId;
        this.adId = adId;
        this.extraParameters = [];
        this.events = [];
    }
    addEventParameters(...parameters: EventParameter[]): void {
        for (let i = 0; i < parameters.length; i++) {
            this.extraParameters.push(parameters[i]);
        }
    }
    addAbGroupParameters(...parameters: EventParameter[]): void {
        for (let i = 0; i < parameters.length; i++) {
            this.abGroup.push(parameters[i]);
        }
    }
    addEvent(event: ReportableObject): void {
        if (event) {
            this.events.push(event);
        }
    }
    clearEvents(): void {
        this.events = [];
    }
    toEventParameters(...parameterNames: string[]): EventParameter[] {
        let parameters: EventParameter[] = [];
        for (let propertyName in this) {
            var property = this[propertyName];
            if (typeof property == "function" || parameterNames.indexOf(propertyName) === -1) {
                continue;
            }
            if (Array.isArray(property)) {
                parameters.push(new EventParameter(propertyName, JSON.stringify(property)));
            } else {
                parameters.push(new EventParameter(propertyName, property));
            }
        }
        return parameters;
    }
}
