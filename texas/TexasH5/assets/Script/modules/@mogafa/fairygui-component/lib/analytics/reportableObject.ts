import EventParameter from "./EventParameter";

export default interface ReportableObject {
    eventName: string;
    toEventParameters(): Map<string, EventParameter[]>;
}
