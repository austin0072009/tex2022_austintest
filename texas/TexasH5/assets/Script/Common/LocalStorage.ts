/*
 * @Description: 本地存储
 * @Version: CocosCreator V2.2.2
 * @Autor: sin2021
 * @Date: 2020-04-27 12:26:13
 * @LastEditors: sin2021
 * @LastEditTime: 2020-04-28 11:08:09
 */
export class LocalStorage {
    private localStorageTable: object = {};
    protected static instance:LocalStorage;
    public static getInstance():LocalStorage
    {
        if(!this.instance)
        {
            this.instance = new LocalStorage();
        }
        return this.instance;
    }

    getItem( key ) {
        let sysValue = cc.sys.localStorage.getItem( key );
        if( sysValue ) {            
            cc.sys.localStorage.removeItem( key );
            this.setItem( key, sysValue );
        }
        return this.localStorageTable[ key ];
    }
    
    setItem( key, value ) {
        let sysValue = cc.sys.localStorage.getItem( key );
        if( sysValue ) {
            cc.sys.localStorage.removeItem( key );
        }
        let oldValue = this.localStorageTable[ key ];
        if( oldValue != value ) {
            this.localStorageTable[ key ] = value;
        }
        cc.sys.localStorage.setItem( key, value);
    }

    removeItem( key ) {
        this.localStorageTable[key] = null;
        cc.sys.localStorage.removeItem( key);
    }
}