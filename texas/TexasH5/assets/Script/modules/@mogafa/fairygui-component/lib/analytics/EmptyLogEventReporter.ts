import EventReporter from "./EventReporter";
import EventParameter from "./EventParameter";

export default class EmptyLogEventReporter implements EventReporter {
    private static _instance: EventReporter;
    static get instance(): EventReporter {
        if (EmptyLogEventReporter._instance == null) {
            EmptyLogEventReporter._instance = new EmptyLogEventReporter();
        }
        return EmptyLogEventReporter._instance;
    }
    initialize(): void {}
    logEvent(name: any): void;
    logEvent(name: string, parameterName: string, parameterValue: number): void;
    logEvent(name: string, parameterName: string, parameterValue: string): void;
    logEvent(name: string, ...parameters: EventParameter[]): void;
    logEvent(name: any, parameterName?: any, parameterValue?: any, ...rest: any[]) {}
}
