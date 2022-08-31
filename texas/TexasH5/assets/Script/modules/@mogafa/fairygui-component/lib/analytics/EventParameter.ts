import { Exclude, Expose } from "class-transformer";



@Exclude()
export default class EventParameter {
    private _name: string;
    private _value: any;
    @Expose()
    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }
    @Expose()
    get value(): any {
        return this._value;
    }
    set value(value: any) {
        this._value = value;
    }
    constructor(name: string, value: any) {
        this._name = name;
        this._value = value;
    }
}
