
interface IRequestConfig {
    headers?: any;
}
interface HttpResponse {
    code: number;
    data: any;
    isSuccessful: boolean;
    message: string;
}
export default class Http extends cc.Component {
    private _config: IRequestConfig = {};
    /**
     * get请求
     * @param {string} url
     */
    public get(url: string, config: IRequestConfig = {}): Promise<HttpResponse> {
        let xhr = cc.loader.getXMLHttpRequest();
        return new Promise((resolve, reject) => {
            xhr.onreadystatechange = function () {
                if (xhr.status === 200 && xhr.readyState === 4) {
                    let response = xhr.responseText;
                    resolve(JSON.parse(response));
                }
            };
            xhr.onerror = function (err) {
                reject(err);
            };
            xhr.open("GET", url, true);
            if (config && Object.keys(config).length > 0) {
                this._config = Object.assign(this._config, config);
            }
            this.setXHRConfig(xhr);
            xhr.ontimeout = function (e) {
                reject(`connect timeout，error message：${JSON.stringify(e)}`);
            };
            xhr.send();
        });
    }

    /**
     * post请求
     * @param {string} url
     * @param {object} params
     */
    public post(url: string, params: any, config: IRequestConfig = {}): Promise<HttpResponse> {
        return new Promise((resolve, reject) => {
            var xhr = cc.loader.getXMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var response = xhr.responseText;
                    resolve(JSON.parse(response));
                }
            };
            xhr.onerror = function (err) {
                reject(err);
            };

            xhr.open("POST", url, true);
            if (config && Object.keys(config).length > 0) {
                this._config = Object.assign(this._config, config);
            }
            this.setXHRConfig(xhr);

            xhr.ontimeout = function (e) {
                reject(`connect timeout，error message：${JSON.stringify(e)}`);
            };
            xhr.send(JSON.stringify(params));
        });
    }

    private setXHRConfig(xhr: XMLHttpRequest) {
        // xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        // xhr.setRequestHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        // xhr.setRequestHeader("Access-Control-Allow-Headers", "device-uuid,Authorization");
        // xhr.setRequestHeader("Content-Type", "application/json");
        if (this._config.headers) {
            for (let i in this._config.headers) {
                xhr.setRequestHeader(i, this._config.headers[i]);
                console.error(this._config.headers[i] + " ..........setXHRConfig");
            }
        }
        xhr.timeout = 8000;        // 8 seconds for timeout 
    }

    public setInterceptorParams(params: IRequestConfig): void {
        this._config = params;
    }
}
