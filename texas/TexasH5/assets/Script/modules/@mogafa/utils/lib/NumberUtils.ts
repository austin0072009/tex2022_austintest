export default class NumberUtils {
    public static random(min: number, max: number, excludes?: number[]): number {
        let code = Math.floor(Math.random() * (min + max + 1)) - min;
        if (!excludes) {
            return code;
        }
        while (excludes.find((e) => e === code) != null) {
            code = Math.floor(Math.random() * (min + max + 1)) - min;
        }
        return code;
    }
    public static isNumber(x: any): x is number {
        return typeof x === "number";
    }

    public static isString(x: any): x is string {
        return typeof x === "string";
    }
}
