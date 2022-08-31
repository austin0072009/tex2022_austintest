import ReportableObject from "../reportableObject";
import EventParameter from "../EventParameter";
import Asset from "./asset";

export default class MogafaReportableObject implements ReportableObject {
    eventName: string;
    timestamp: number;
    trigger: string;
    subGameId: string;
    subGameVersion: string;
    extraParameters: EventParameter[];
    assets: Asset[];
    constructor(eventName: string, trigger: string, subGameId?: string, subGameVersion?: string) {
        this.extraParameters = [];
        this.timestamp = new Date().getTime();
        this.eventName = eventName;
        this.trigger = trigger;
        this.subGameId = subGameId;
        this.subGameVersion = subGameVersion;
    }
    addEventParameters(...parameters: EventParameter[]): void {
        for (let i = 0; i < parameters.length; i++) {
            this.extraParameters.push(parameters[i]);
        }
    }
    toEventParameters(): Map<string, EventParameter[]> {
        let parameters: EventParameter[] = [];
        for (let propertyName in this) {
            var property = this[propertyName];
            if (typeof property == "function" || propertyName == "eventName") {
                continue;
            }
            if (Array.isArray(property)) {
                parameters.push(new EventParameter(propertyName, JSON.stringify(property)));
            } else {
                parameters.push(new EventParameter(propertyName, property));
            }
        }
        let parameter: Map<string, EventParameter[]> = new Map<string, EventParameter[]>();
        parameter.set(this.eventName, parameters);
        return parameter;
    }
}
