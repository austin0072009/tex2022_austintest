

export interface HttpResponse<T> {
    code: number;
    data: T;
    isSuccessful: boolean;
    message: string;
}
