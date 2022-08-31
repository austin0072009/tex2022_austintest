import EventParameter from "./EventParameter";
import CommonEventParameter from "./commonEventParameter";
import ReportableObject from "./reportableObject";
export const EventReporterIocContainerName: string = "LogEventReporter";
export default interface EventReporter {
    initialize(commonParameter: CommonEventParameter): void;
    logEvent(reportableObject: ReportableObject): void;
    logEvent(name: string): void;
    logEvent(name: string, parameterName: string, parameterValue: number): void;
    logEvent(name: string, parameterName: string, parameterValue: string): void;
    logEvent(name: string, ...parameters: EventParameter[]): void;
}
