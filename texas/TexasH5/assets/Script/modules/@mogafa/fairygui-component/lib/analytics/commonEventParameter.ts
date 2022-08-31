import EventParameter from "./EventParameter";

export default interface CommonEventParameter {
    toEventParameters(...parameterNames: string[]): EventParameter[];
}
