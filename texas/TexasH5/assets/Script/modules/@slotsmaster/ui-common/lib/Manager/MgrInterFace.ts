/*
 * @Description: 
}
 * @Author: 张菊
 * @Date: 2020-06-15 15:09:54
 * @LastEditTime: 2020-07-20 17:36:02
 * @LastEditors: 田鑫
 */

import HttpApi, { Http_RefreshHall, Http_PostCollectReward, Http_GetRewardId } from "../HttpApi";
import { AppConst } from "../AppConst";

export class MgrInterFace {
    protected static instance: MgrInterFace;
    public static getInstance(): MgrInterFace {
        if (!this.instance) {
            this.instance = new MgrInterFace();
        }
        return this.instance;
    }
    public async refreshHall(callBack: Function): Promise<any> {
        return new Promise(async (resolve) => {
            let result: any = await HttpApi.http.get(HttpApi.server + Http_RefreshHall, {
                headers: {
                    Authorization: AppConst.accessToken,
                },
            });
            if (result.isSuccessful) {
                AppConst.hallData = result.data;
                resolve(callBack());
            }
        });
    }
    public async collectReward(
        id: string,
        successCallBack: Function,
        failCallback?: Function,
        catchErrorCallback?: Function
    ): Promise<any> {
        try {
            let url = Http_PostCollectReward + id;
            let result: any = await HttpApi.http.post(
                HttpApi.server + url,
                {},
                {
                    headers: {
                        Authorization: AppConst.accessToken,
                    },
                }
            );
            if (result.isSuccessful && result.code === 200) {
                successCallBack();
            } else {
                if (failCallback) {
                    failCallback();
                }
            }
        } catch (error) {
            if (catchErrorCallback) {
                catchErrorCallback();
            }
        }
    }
    public async getAwardId(adName: string, successCallBack: Function): Promise<any> {
        let bodyParams = {
            awardCollectCode: adName,
        };
        let result: any = await HttpApi.http.post(HttpApi.server + Http_GetRewardId, bodyParams, {
            headers: {
                Authorization: AppConst.accessToken,
            },
        });
        if (result.isSuccessful && result.code === 200) {
            this.collectReward(result.awardCollectId, successCallBack);
        }
    }
}
