//客户端消息基类
export class cs_base {
    // 函数名
    public fn: string = "";
    // 可能为0，游戏的协议使用对应游戏ID
    public _g: number;
    // constructor() {
    //     this.fn = this.constructor.name
    // }
}
export class sc_base {
    // 函数名
    public fn: string = "";
    // 可能为0，游戏的协议使用对应游戏ID
    public _msgid: number;
    /// <summary>
    /// 1.成功 0失败 -1具体原因。
    /// </summary>
    public result: number;
    // constructor() {
    //     this.fn = this.constructor.name
    // }
}

export class PlayerInfoSD {
    /// <summary>
    /// Session的ID 非自增长的
    /// </summary>
    public userid: number;
    /// <summary>
    /// 玩家名字
    /// </summary>
    public _n: string;
    /// <summary>
    ///  sign in count玩家连续登陆天数     
    /// </summary>
    public _sc: number;
    /// <summary>
    /// JB
    /// </summary>
    public gold: number;
    /// <summary>
    /// 钻石
    /// </summary>
    public _diam: number;
    /// <summary>
    /// 玩家vip等级 0 不是VIP  1 2 3代表玩家VIP等级
    ///玩家的VIP等级0不是VIP    
    ///1 2 3分别是代理   
    ///8 合伙人.9第二级.10创始人
    ///18是主播 只能主播端登录 
    ///19是能创建房间最大数 
    ///20是添加机器人
    /// </summary>
    public _vlv: number;
    /// <summary>
    /// 同 tuser的vlevel	
    /// </summary>
    public lv: number;
    /// <summary>
    /// 玩家的游戏状态，默认为0   InLobby = 1, InRoom = 2, InTableDaiPai = 3, InTableDis = 4
    /// </summary>
    public state: number;
    public wechat: WechatInfoSD;
    public cinfo: CountInfoSD;

    /// <summary>
    /// vipLv玩家的过期时间
    /// </summary>
    public expiredate: Date;

    /// <summary>
    /// 0普通玩家   1金卡玩家（月卡）   2白金卡玩家（年卡）
    /// </summary>
    public vipLv: number;

    /// <summary>
    /// 登录玩家对玩家的备注结构
    /// </summary>
    public uremark: UserRemark;

    /// <summary>
    /// 是否处于保护状态  1是   0否
    /// </summary>
    public IsPro: number;
    /// <summary>
    /// 玩家当前所在牌桌
    /// </summary>
    public tableid: number;
    /// <summary>
    /// 修改名称次数
    /// </summary>
    public freecount: number;

    /**拥有的头像框 */
    public headIcos: string[];
    /**当前选择的头像框 */
    public headFrame: string;
    public UserPassword: string;

    /// <summary>
    /// 举报的次数
    /// </summary>
    public recount: number;

}

export class CommonPosValListSD {
    public pos: number;
    public vallist: number[];
}

export class CommonPosValSD {
    public pos: number;
    public val: number;
}

export class OtherUserInfoSD {
    /// <summary>
    /// 其实用户
    /// </summary>
    public py: PlayerInfoSD;
    public pos: number;
    /// <summary>
    /// 是否掉线了       1    已掉线
    /// </summary>
    public isDis: number;
    /// <summary>
    /// 是否已准备      1     已准备
    /// </summary>
    public isR: number;
    /// <summary>
    /// 是否观众      1    
    /// </summary>
    public isW: number;
    /// <summary>
    /// 是否留座    的时间 0表示不需要留座 正常值1~300秒
    /// </summary>
    public isK: number;
}


export class CountInfoSD {
    /// <summary>
    /// 获胜数 胜率可以直接计算
    /// </summary>
    public winc: number;
    /// <summary>
    /// 失败数
    /// </summary>
    public failc: number;
    /// <summary>
    /// 平局数
    /// </summary>
    public dc: number;
    /// <summary>
    /// 翻牌数
    /// </summary>
    public fr: number;
    /// <summary>
    /// 加注手数
    /// </summary>
    public FillingCount: number;

    /// <summary>
    /// 牌局总数
    /// </summary>
    public tablenum: number;

    // <summary>
    /// 大盲手数
    /// </summary>
    public Bigblind: number;

    /// <summary>
    /// 3公牌前加注  3+
    /// </summary>
    public bet3: number;

    /// <summary>
    /// 3公牌后加注  3+
    /// </summary>
    public cbet3: number;

    /// <summary>
    /// 主动入池数量
    /// </summary>
    public drivingnum: number;

    /// <summary>
    /// 加注入池数量
    /// </summary>
    public addpoolnum: number;

    /// <summary>
    /// 场均带入
    /// </summary>
    public Aveinto: number;

    /// <summary>
    /// 场均战绩
    /// </summary>
    public AveGains: number;
}

export class WechatInfoSD {
    /// <summary>
    /// 微信昵称
    /// </summary>
    public wName: string;
    /// <summary>
    /// 微信头像ICON
    /// </summary>
    public wicon: string;
    /// <summary>
    /// 性别
    /// </summary>
    public _S: number;

    /**簽名 */
    public Desc: string;
}

/// <summary>
/// 玩家备注
/// </summary> 
export class UserRemark {
    /// <summary>
    /// 玩家id
    /// </summary> 
    public userid: number;
    /// <summary>
    /// 玩法备注 
    /// </summary> 
    public playRemark: string;
    /// <summary>
    /// 备注姓名
    /// </summary> 
    public remarkName: string;
}


/// <summary>
/// 聊天功能             只有在游戏中，的具体一桌才能发消息
/// </summary>
export class cs_chat extends cs_base {
    public levelid: number;
    public tableid: number;
    /// <summary>
    /// 要发送的聊天内容
    /// </summary>
    public content: string;
    /// <summary>
    /// 1语音，2表情，3文本, 4常用语,  5礼物  6发弹幕消耗
    /// </summary>
    public type: number;
    /// <summary>
    /// 目标位置 如果有使用的话
    /// 弹幕的时候  1:文本   2:语音
    /// </summary>
    public tpos: number;
    /// <summary>
    /// 发表情需要的金币 type=5
    /// </summary>
    public ngold: number;
}
export class sc_chat extends sc_base {

}
export class sc_chat_n extends sc_base {
    public pos: number;
    /// <summary>
    /// 要发送的聊天内容
    /// </summary>
    public content: string
    /// <summary>
    /// 1语音，2表情，3文本, 4常用语,  5礼物
    /// </summary>
    public type: number;
    public gameid: number;
    /// <summary>
    /// 目标位置 如果有使用的话
    /// </summary>
    public tpos: number;
    /// <summary>
    /// 玩家留座 需要处理成离开位置显示保留300秒的倒计时 
    /// </summary>
    public keep: number;
    /// <summary>
    /// 剩下的JB
    /// </summary>
    public gold: number;
}

/// <summary>
/// 警告 同IP，或同位置，GPS计算
/// </summary> 
export class sc_warning_n extends sc_base {
    /// <summary>
    /// 1同IP，2同位置 
    /// </summary>
    public type: number;
    public gameid: number;

    /// <summary>
    /// 要发送的内容
    /// </summary>
    public content: string
}
/// <summary>
/// 通知有人离开桌子了，可能是自己人离开，可能是被服务器规则T出
/// </summary>
export class sc_exittable_n extends sc_base {
    public gameid: number;
    /// <summary>
    ///  不同意的列表 
    /// </summary>
    public disagree: number[];
    /// <summary>
    /// 还没有开始的话，没有扣出FK的时候就直接退出，开始后需要显示结算面板
    /// </summary>
    public _showResult: boolean;
}
/// <summary>
/// 游戏中掉线通知，
/// </summary>
export class sc_disconnect_n extends sc_base {
    public gameid: number;
    public levelid: number;
    public tableid: number;
    public pos: number;
    /// <summary>
    /// 1表示 又重新连接上了
    /// </summary>
    public reconnect: number;
}


export class cs_getgamelevel extends cs_base {
}

export class sc_getgamelevel extends sc_base {

    public levellist: RoomInfoSD[];
}

export class RoomInfoSD {
    public id: number;
    /// <summary>
    /// ChessGameModel的id
    /// </summary>
    public gameid: number;
    /// <summary>
    /// 此游戏的在线人线
    /// </summary>
    public onlineCount: number;
    /// <summary>
    /// 游戏类型，1，2
    /// </summary>
    public gametype: number;
    /// <summary>
    /// 初，中，高级场
    /// </summary>
    public name: string;
    /// <summary>
    /// 底分
    /// </summary>
    public baserate: number;

    /// <summary>
    /// 最低
    /// </summary>
    public _min: number;
    /// <summary>
    /// 最高限制 
    /// </summary>
    public _max: number;
}

/// <summary>
/// 输入房号进入的玩家需再次申请  
/// </summary>
export class cs_entertablenum extends cs_base {
    public tnumber: string;
}

export class sc_entertablenum extends sc_base {
    public _g: number;
    public data: string;
}

// 刷新
export class sc_freshgold_n extends sc_base {
    public gold: number;
    /// <summary>
    /// 1.钻石 2.JB 3.clubidx
    /// </summary>
    public freshType: number;
}

/// <summary>
/// 公共消息推送  没有具体讯息
/// </summary>
export class sc_commonnotice_n extends sc_base {
    /// <summary>
    /// 1：加入俱乐部成功通知
    /// 2:设置管理员成功通知
    /// 3:申请俱乐部币成功通知
    /// </summary>
    public type: number;

    public UserId: number;

    public clubid: number;
}