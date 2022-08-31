import { AppConfig } from "../../config/AppConfig";
import HttpApi from "../../modules/@slotsmaster/ui-common/lib/HttpApi";
import { CommonCtr } from "../../BaseFrame/CommonCtr";

interface IRequestConfig {
    headers?: any;
}
interface HttpResponse {
    code: number;
    data: any;
    isSuccessful: boolean;
    message: string;
    curl: string;
}
export default class HttpHelpEx {
    private static httpHelp: HttpHelpEx;
    public static get instance(): HttpHelpEx {
        if (this.httpHelp == null) {
            this.httpHelp = new HttpHelpEx();
        }
        return this.httpHelp;
    }
    private _config: IRequestConfig = {};
    private appid: string = "1000000008";
    private SecurityKey: string = "e0a953c3ee6040eaa9fae2b667060e09";
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
                } else {
                }
            };
            xhr.onerror = function (err) {
                reject(err);
            };
            xhr.open("GET", url, true);
            console.log("url === ", url);
            let nowTime = Math.floor(new Date().getTime() / 1000);
            let dataString = this.appid + nowTime + this.SecurityKey;
            console.log("dataString === ", dataString);
            let encryptedStr = md5.hex_md5(dataString);
            console.log("encryptedStr ==== ", encryptedStr);
            xhr.setRequestHeader("timestamp", "" + nowTime);
            xhr.setRequestHeader("appid", this.appid);
            xhr.setRequestHeader("sign", encryptedStr);
            if (config && Object.keys(config).length > 0) {
                this._config = Object.assign(this._config, config);
            }
            this.setXHRConfig(xhr);
            xhr.ontimeout = function (e) {
                fgui.GRoot.inst.closeModalWait();
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
        // let secretkey = "123456", datakey = "user";
        // let dataString = `abcd1234@@&90`;//要加密的字符串
        // let encryptedStr = encrypt(dataString, secretkey, 256);
        // console.log("加密后:", JSON.stringify(encryptedStr));
        // let cipherText = encryptedStr;//要解密的文本
        // let dataString2 = decrypt(cipherText, secretkey, 256);//得到解密之后的文本
        // console.log("解密后:", JSON.stringify(dataString2));
        return new Promise((resolve, reject) => {
            var xhr = cc.loader.getXMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    console.log("error == ", xhr.status);
                    console.log("error == ", xhr.responseText);
                    var response = xhr.responseText;
                    resolve(JSON.parse(response));
                } else {
                }
            };
            xhr.onerror = function (err) {
                console.log("error == ", err);
                reject(err);
            };

            xhr.ontimeout = function (e) {
                reject(`connect timeout，error message：${JSON.stringify(e)}`);
            };

            xhr.open("POST", url, true);
            xhr.timeout = 8000;
            console.log("url == ", url);
            console.log("params == ", JSON.stringify(params));
            let nowTime = Math.floor(new Date().getTime() / 1000);
            let dataString = this.appid + nowTime + this.SecurityKey;
            console.log("dataString === ", dataString);
            let encryptedStr = md5.hex_md5(dataString);
            console.log("encryptedStr ==== ", encryptedStr);
            xhr.setRequestHeader("timestamp", "" + nowTime);
            xhr.setRequestHeader("appid", this.appid);
            xhr.setRequestHeader("sign", encryptedStr);
            if (config && Object.keys(config).length > 0) {

                console.log("aaaaaaaaaaaaaaaa");
                this._config = Object.assign(this._config, config);
                this.setXHRConfig(xhr);
                xhr.send(JSON.stringify(params));
            } else {
                console.log("bbbbbbbbbbbbbbb");
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                let paramsStr = "";
                for (let item in params) {
                    paramsStr += item + "=" + params[item] + "&";
                }
                console.log("paramsStr +=== ", encodeURI(paramsStr));
                xhr.send(encodeURI(paramsStr));
            }
        });
    }

    private setXHRConfig(xhr: XMLHttpRequest) {
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        // xhr.setRequestHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        // xhr.setRequestHeader("Access-Control-Allow-Headers", "device-uuid,Authorization");
        xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        // if (this._config.headers) {
        //     for (let i in this._config.headers) {
        //         xhr.setRequestHeader(i, this._config.headers[i]);
        //     }
        // }
        xhr.timeout = 8000; // 8 seconds for timeout
    }

    public setInterceptorParams(params: IRequestConfig): void {
        this._config = params;
    }

    public RegisterAccount(pid: string, yzm: string, yqm: string, password: string, callback: Function): void {
        let checkurl = "";
        console.log(checkurl + "...............");
    }

    public static curServerListIndex: number = 0;
    public static defaultServerListIndex: number = 0;
    //拉取serverlist
    public GetServerList(callback: Function, isCircle: boolean = true): void {
        let defaultServeListIdx: string = localStorage.getItem("GameDefaultServerList");
        HttpHelpEx.defaultServerListIndex = defaultServeListIdx == null ? 0 : Number(defaultServeListIdx);
        let list: string[] = this.GetHomeUrl();
        if (HttpHelpEx.curServerListIndex >= list.length) {
            HttpHelpEx.defaultServerListIndex = 0;
        }
        // 0注册1找回密码2交易密码3重置密码
        let url: string = list[HttpHelpEx.defaultServerListIndex] + "?st=" + Date.now();//强制拉最新的
        //Debug.LogError("all serverlist:" + AppConfigList.Current.home_url);
        //Debug.LogError("default serverlist url:" + url); 
        if (isCircle) CommonCtr.instance.ShowLoad_Circle(true);
        HttpApi.http
            .get(url, {})
            .then(
                (res: any) => {
                    callback(res.data);
                    //Debug.LogError("www.text : " + www.text);
                    CommonCtr.instance.ShowLoad_Circle(false);
                },
                (err) => {
                    cc.error(JSON.stringify(err));
                    CommonCtr.instance.ShowLoad_Circle(false);
                    this.LoadServerList(callback, isCircle);
                    //CommonCtr.instance.ShowLoad_Circle(false);
                    //CommonCtr.instance.ShowTip(LanguageConfig.getLanguageById(1503));//服务器连接失败，请检测网络并重启客户端。
                }
            )
            .catch((err) => {
                CommonCtr.instance.ShowLoad_Circle(false);
                this.LoadServerList(callback, isCircle);
                //CommonCtr.instance.ShowLoad_Circle(false);
                //CommonCtr.instance.ShowTip(LanguageConfig.getLanguageById(1503));//服务器连接失败，请检测网络并重启客户端。
            });
    }
    //先从本地缓存的serverlist读取homeurl，没有缓存就去config里面的homeurl
    public GetHomeUrl(): Array<string> {

        // fs.readFile(fPath, "utf8", function (err, data){
        //   if (err) {

        //   }
        //   else
        //   {
        //     var key = CryptoJS.enc.Utf8.parse('fucktheworld');
        //     var iv = CryptoJS.enc.Utf8.parse('fucktheworld');
        //     let decrypted = CryptoJS.AES.decrypt(data, key, {
        //       keySize: 128 / 8,
        //       iv: iv,
        //       mode: CryptoJS.mode.CBC,
        //       padding: CryptoJS.pad.Pkcs7
        //     });
        //     let _dataLocal:ServerListPod = JSON.parse(decrypted);
        //     if (_dataLocal != null && _dataLocal.home_url != null && _dataLocal.home_url != ""){
        //       return _dataLocal.home_url.split('|');
        //     }
        //     else
        //     {
        //       return homeUrl.split('|');
        //     }
        //     console.log(data);
        //     console.log("--------", fPath);
        //   }
        // });
        return AppConfig.homeUrl.split('|');
    }
    public LoadServerList(callback: Function, isCircle: boolean = true): void {
        if (HttpHelpEx.curServerListIndex == HttpHelpEx.defaultServerListIndex) {
            HttpHelpEx.curServerListIndex++;
            this.LoadServerList(callback, isCircle);
            return;
        }
        let list: string[] = AppConfig.homeUrl.split('|');
        if (HttpHelpEx.curServerListIndex >= list.length) {
            CommonCtr.instance.ShowLoad_Circle(false);
            callback("");//拉取失败直接读取本地serverlist配置
            //CommonCtr.instance.ShowTip(LanguageConfig.getLanguageById(1503));//服务器连接失败，请检测网络并重启客户端。
            return;
        }
        let url: string = list[HttpHelpEx.curServerListIndex] + "?st=" + Date.now();//强制拉最新的;
        if (isCircle) CommonCtr.instance.ShowLoad_Circle(true);
        HttpApi.http
            .get(url, {})
            .then(
                (res: any) => {
                    callback(res.data);
                    //Debug.LogError("www.text : " + www.text);
                    CommonCtr.instance.ShowLoad_Circle(false);
                    localStorage.setItem("GameDefaultServerList", HttpHelpEx.curServerListIndex.toString());
                    //Debug.LogError("Set default ServerList index:" + curServerListIndex);
                },
                (err) => {
                    cc.error(JSON.stringify(err));
                    HttpHelpEx.curServerListIndex++;
                    if (HttpHelpEx.curServerListIndex >= list.length) {
                        //PlayerPrefs.SetInt("GameDefaultServerList", 0);
                        CommonCtr.instance.ShowLoad_Circle(false);
                        callback("");//拉取失败直接读取本地serverlist配置
                        //CommonCtr.instance.ShowTip(LanguageConfig.getLanguageById(1503));//服务器连接失败，请检测网络并重启客户端。
                    }
                    else {
                        CommonCtr.instance.ShowLoad_Circle(false);
                        this.LoadServerList(callback, isCircle);
                    }
                }
            )
            .catch((err) => {
                HttpHelpEx.curServerListIndex++;
                if (HttpHelpEx.curServerListIndex >= list.length) {
                    //PlayerPrefs.SetInt("GameDefaultServerList", 0);
                    CommonCtr.instance.ShowLoad_Circle(false);
                    callback("");//拉取失败直接读取本地serverlist配置
                    //CommonCtr.instance.ShowTip(LanguageConfig.getLanguageById(1503));//服务器连接失败，请检测网络并重启客户端。
                }
                else {
                    CommonCtr.instance.ShowLoad_Circle(false);
                    this.LoadServerList(callback, isCircle);
                }
            });
    }
    public URI(fileName: string): string {

        return null;
    }
}


