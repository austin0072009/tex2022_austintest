using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Common
{
   public class TableUtil
    {

        public enum CommneEnum
        {
            是 = 1,
            否 = 0,
        }
        public enum sysanduser
        {
            系统 = 1,
            游戏用户 = 0,
        }

        public enum UserType
        {
            不限 = 0,
            玩家 = 1,
            机器人 = 2
        }

        public enum RedMoneyType
        {
            幸运红包 = 1,
            转运红包 = 2,
            锦鲤红包 = 3
        }
        //0 待支付，1 已取消，2 成功，3 超时，4 信息错误
        public enum payresult
        {
            待支付 = 0,
            已取消 = 1,
            成功 = 2,
            超时 = 3,
            信息错误 = 4,
            失败 = 5
        }

        /// <summary>
        /// 操作类型
        /// </summary>
        public enum ResActionType
        {

            ///// <summary>
            ///// 加
            ///// </summary>
            //加 = 1,
            /// <summary>
            /// 玩家奖池贡献
            /// </summary>
            玩家奖池贡献 = 3,
            /// <summary>
            /// 奖池税收
            /// </summary>
            奖池税收 = 4,
            提现税收 = 5,
            /// <summary>
            /// 红利税收
            /// </summary>
            红利税收 = 7,
            /// <summary>
            /// 切牌税收
            /// </summary>
            切牌收入 = 11,
            /// <summary>
            /// 查看余牌税收
            /// </summary>
            查看余牌收入 = 12,
            /// <summary>
            /// 强制show牌税收
            /// </summary>
            强制秀牌收入 = 13
        }

        public enum AgentRoleName
        {
            创始人 = 10,
            第二级 = 9,
            合伙人 = 8

        }

        public enum TableStatus
        {
            已创建 = 0,
            已开局 = 1,
            已完结 = 2,
            已解散 = 3
        }
        public enum GiveType
        {
            赠送 = 3,
            受赠 = 4
        }


        public enum feedbackEnum
        {
            BUG = 1,
            代理加盟 = 2,
            举报作弊 = 3,
            充值反馈 = 4
        }
        public enum emailState
        {
            
            没有附件=0,
            有附件 = 1,
            附件已领取 = 2
        }
        public enum EmailType
        {
            //0 个人邮件 1 系统邮件
            个人邮件 = 0,
            系统邮件 = 1
        }
        public enum emailCState
        {
            //0失败，1成功  2撤销
            失败 = 0,
            成功 = 1,
            撤销 = 2
        }


        public enum GlodToType
        {
            大结算 = 1,
            领取佣金 = 2,
            钻石兑换金币 = 3,
            机器人充值 = 4,
            邮件金币 = 5,
            受赠 = 7,
            赠送 = 8,
            充值 = 10,
            转盘所需金币 = 11,
            大奖类型 = 12,
            切牌 = 13,
            送花 = 15,
            查看余牌 = 20,
            强制秀牌 = 21,
            牌局详情 = 22,
            房间结算 = 23,
            牌局税收 = 24,
            逃跑惩罚 = 30,
            输家返利 = 31,
            红包奖励 = 32,
            房间带入 = 33,
            带入返还 = 34,
            弹幕消耗 = 35,
            开房消耗 = 36,
            保险分成 = 37,
            红利发放 = 38,
            退房扣利 = 39,
            退还红利 = 40,
            麻将结算 = 41,
            麻将税收 = 42,
            小游戏结算 = 43,

            //37:保险分成  38：红利发放   39:退房扣利  40:退还红利

        }
        public enum BigPrizeType
        {
            //Remark 1：天皇；2：朵皇；3：朵朵
            天皇 = 1,
            朵皇 = 2,
            朵朵 = 3,
            保险池 = 10,
            无 = 4,
        }
        public enum JackpotType
        {
            奖池领取 = 1,
            奖池贡献 = 2
        }


        public enum NoticeType
        {
            公告 = 1,
            停服公告 = 2,
            新闻 = 3,
            弹窗新闻 = 4,
        }
        public enum ReceiveGoldState
        {
            成功 = 0,
            失败 = -1,
            扣除金币失败 = -2
        }
        public enum TimeSlot
        {
            不限 = 0,
            今天 = 1,
            昨天 = 2,
            一周 = 3,
            一月 = 4,
            一年 = 5
        }
        
        public enum TimeNoLogin
        {
            一个月 = 0,
            三个月 = 1,
            半年 = 2,
        }
        public enum memberLevel
        {
            普通用户 = 0,
            普通代理VIP1 = 1,
            普通代理VIP2 = 2,
            普通代理VIP3 = 3,
            合伙人 = 8,
            第二级 = 9,
            创始人 = 10,
            允许创建房间 = 19,
            允许添加机器人 = 20
        }
        public enum DevelopmentJacapot
        {
            不限 = 0,
            朵朵 = 1,
            朵朵_朵皇 = 2,
            朵朵_朵皇_天皇 = 3
        }
        /// <summary>
        /// 充值类型
        /// </summary>
        public enum RechargeType
        {
            蚂蚁支付宝 = 1,
            蚂蚁微信 = 2,
            蚂蚁银联 = 3,
            支付宝转账跑分 = 4,
            支付宝H5转卡 = 5,
            支付宝扫码 = 6,
            支付宝原生 = 7,
            客服上分 = 8,
            客服下分 = 9,
            LB支付 = 10,
            聚合支付宝H5 = 11,
            捷士达支付宝 = 12,
            捷士达微信 = 13,
            捷士达银联快捷 = 14,
            捷士达银联扫码 = 15,
            捷士达在线网银 = 16
        }
        public enum Rechargechannel
        {
            [Description("其他")]
            orther = 0,
            //[Description("蚂蚁支付宝")]
            //ALI = 1,
            //[Description("蚂蚁微信")]
            //WX = 2,
            //[Description("蚂蚁银联")]
            //CUP = 3,
            /// <summary>
            /// 支付宝转账跑分
            /// </summary>
            [Description("支付宝转账跑分")]
            ZCKMASHPAY = 4,
            /// <summary>
            /// 支付宝H5转卡
            /// </summary>
            [Description("支付宝H5转卡")]
            ZCKPAY = 5,
            /// <summary>
            /// 支付宝扫码
            /// </summary>
            [Description("支付宝扫码")]
            ZCKMASHWXPAY = 6,
            /// <summary>
            /// 支付宝原生
            /// </summary>
            [Description("支付宝原生")]
            ZCKQYHB = 7,
            /// <summary>
            /// 客服充值
            /// </summary>
            [Description("客服上分")]
            KEFU = 8,
           [Description("客服下分")]
            KEFU2 = 9,
            [Description("老潘支付宝固码")]
            ALIGUMA = 10,
            [Description("老潘支付账号转账")]
            MSALI = 11,

            [Description("捷士达微信扫码")]
            weixinsm = 20,
            [Description("捷士达支付宝扫码")]
            zhifbsm = 21,
            [Description("捷士达银联快捷")]
            unionpaycode = 22,
            [Description("捷士达微信转账")]
            weixinzz = 23,
            [Description("捷士达支付宝转账")]
            zhifbzz = 24,
            [Description("捷士达QQ扫码")]
            qqcode = 25,

            [Description("金樽微信扫码")]
            jzwxcode = 101,
            [Description("金樽h5原生")]
            jzh5 = 102,
            [Description("金樽微信手机转账")]
            jzwxphone = 103,
            [Description("金樽支付宝")]
            jzalipaycode = 104,
            [Description("金樽QQ扫码")]
            jzqqcode = 105,
            [Description("金樽银联快捷")]
            jzunioncode = 109,
            [Description("金樽微信转卡")]
            jzwxcard = 111,
            [Description("金樽支付宝转账")]
            jzalipayzz = 117,

            [Description("聚力微信扫码")]
            jljhwxcode = 200,
            [Description("聚力支付宝扫码")]
            jljhzfbcode = 201,
            [Description("聚力微信手机号转账")]
            jljhphonecode = 203,
            [Description("聚力支付宝转账")]
            jljhapliycode = 204,
            [Description("聚力支付宝转账")]
            jljhqqcode = 205,
            [Description("聚力支付宝h5")]
            jljhapliyh5 = 212,
            [Description("聚力微信h5")]
            jljhweixinh5 = 213,
            [Description("聚力支付宝银行卡")]
            jljhapliycard = 214,
            [Description("聚力微信银行卡")]
            jljhweixincard = 215,
            [Description("豪杰银行代付")]
            hjdfpay=8000,
            [Description("豪杰微信扫码支付")]
            hjwecharpay=8002,
            [Description("豪杰支付宝扫码支付")]
            hjzfbcodepay = 8006,
            [Description("豪杰支付宝H5支付")]
            hjzfbpay = 8007,
            [Description("豪杰银联二维码")]
            hjylcodepay = 8014,
            [Description("豪杰支付宝PDD")]
            hjzfbpddpay = 8016,
            [Description("豪杰支付宝转卡")]
            hjzfbzkpay = 8017,
            [Description("豪杰支付宝话费H5")]
            hjzfbhfpay = 8018,
            [Description("豪杰云闪付")]
            hjysfpay = 8019,
            [Description("新秀微信扫码")]
            xxwxpay = 31,
            [Description("商户支付")]
            shpay = 51,
            [Description("G支付支付宝")]
            gpayzfb = 600,
            [Description("G支付支付宝H5")]
            gpayzfbH5 = 601,
            [Description("G支付微信")]
            gpaywx = 602,
            [Description("G支付微信H5")]
            gpaywxh5 = 603,
            [Description("G支付银联扫码")]
            gpayylsm = 604,
            [Description("G支付银联扫码H5")]
            gpayylh5 = 605,
            [Description("G支付QQ")]
            gpayqq = 606,
            [Description("G支付QQH5")]
            gpayqqh5 = 607,
            [Description("G支付快捷")]
            gpaykj = 608,
            [Description("G支付中国农业银行")]
            gpaynyyh = 609,
            [Description("G支付农商银行")]
            gpaynsyh = 610,
            [Description("G支付中国银行")]
            gpayzgyh = 611,
            [Description("G支付中国光大银行")]
            gpaygdyh = 612,
            [Description("G支付兴业银行")]
            gpayxyyh = 613,
            [Description("G支付中信银行")]
            gpayzxyh = 614,
            [Description("G支付中国民生银行")]
            gpaymsyh = 615,
            [Description("G支付中国工商银行")]
            gpaygsyh = 616,
            [Description("G支付平安银行")]
            gpaypayh = 617,
            [Description("G支付浦发银行")]
            gpaypfyh = 618,
            [Description("G支付中国邮政储蓄银行")]
            gpayyzyh = 619,
            [Description("G支付南京银行")]
            gpaynjyh = 620,
            [Description("G支付交通银行")]
            gpayjtyh = 621,
            [Description("G支付招商银行")]
            gpayzsyh = 622,
            [Description("G支付中国建设银行")]
            gpayjsyh = 623,
            [Description("G支付广发银行")]
            gpaygfyh = 624,
            [Description("G支付东亚银行")]
            gpaydyyh = 625,
            [Description("G支付USDT")]
            gpayusdt = 626,
            [Description("VUE微信转卡")]
            vuewxtcpay = 360,
            [Description("VUE微信扫码")]
            vuewxspay = 361,
            [Description("VUE微信WAP")]
            vuewxwappay = 362,
            [Description("VUE微信原生")]
            vuewxpay = 363,
            [Description("VUE支付宝密码红包")]
            vuezfbgbpay = 364,
            [Description("VUE支付宝原生")]
            vuezfbpay = 365,
            [Description("VUE支付宝转卡")]
            vuezfbzk=366,
            [Description("VUE支付宝话费")]
            vuezfbhf = 367,

        }
        public enum MailTypeEnum
        {
            不限 = 0,
            /// <summary>
            /// 交易
            /// </summary>
            交易 = 1,
            /// <summary>
            /// 系统
            /// </summary>
            系统 = 2,
            /// <summary>
            /// 个人
            /// </summary>
            个人 = 3,
        }
        /// <summary>
        ///  0 申请提现 1 已扣除金币 2 已提现 3已审核   4审核不通过   5提现失败  6提现中
        /// </summary>
        public enum TakeNowStateEnum
        {
            申请中 = 0,
            已扣除金币 = 1,
            已提现 = 2,
            审核通过 = 3,
            审核不通过 = 4,
            提现失败 = 5,
            提现中 = 6
        }
        public enum AccountTypeEnum
        {
            银行卡 = 2,
            支付宝 = 1
        }
        public enum Whirl2PokerType
        {
            //扑克类型
            Error = 0,
            Point_0 = 100,// 散牌0~8点  注：0点不分大小,谁的尾大谁赢　
            Point_1 = 110,//  
            Point_2 = 120,//  
            Point_3 = 130,//
            Point_4 = 140,//
            Point_5 = 150,//
            Point_6 = 160,//
            Point_7 = 170,//
            Point_8 = 180,//


            SPE9_109_410 = 400, //苕十九 4个 红10＋9  （丁猫九＝乌龙九＝苕十九）
            SPE9_109_210 = 401, //苕十九
            SPE9_309_410 = 402, //苕十九
            SPE9_210_309 = 403, //苕十九

            SPE9_108_111 = 404, //乌龙九 4个 黑8＋j
            SPE9_108_311 = 405, //乌龙九
            SPE9_111_308 = 406, //乌龙九
            SPE9_308_311 = 407, //乌龙九

            SPE9_203_206 = 408, //丁猫九 2个 红3＋红6
            SPE9_203_406 = 409, //丁猫九

            SPE9_109_110 = 450, //梅十九 4个  黑10＋9 （板五九＝丁长九＝梅十九）
            SPE9_110_309 = 451, //梅十九
            SPE9_109_310 = 452, //梅十九
            SPE9_309_310 = 453, //梅十九

            SPE9_106_203 = 454, //丁长九 2个 红3＋黑6
            SPE9_203_306 = 455, //丁长九

            SPE9_304_305 = 456, //板5九 4个 黑4＋5
            SPE9_105_304 = 457, //板5九
            SPE9_104_305 = 458, //板5九
            SPE9_104_105 = 459, //板5九

            SPE9_105_204 = 460, //和五九 4个 红4＋5
            SPE9_204_305 = 461, //和五九
            SPE9_105_404 = 462, //和五九
            SPE9_305_404 = 463, //和五九

            SPE9_208_311 = 470, //灯茏九 4个 红8＋j
            SPE9_111_208 = 471, //灯茏九
            SPE9_311_408 = 472, //灯茏九
            SPE9_111_408 = 473, //灯茏九


            SPE9_107_402 = 480, //地关九 8个 红2＋7
            SPE9_207_402 = 481, //地关九
            SPE9_307_402 = 482, //地关九
            SPE9_402_407 = 483, //地关九
            SPE9_107_202 = 484, //地关九
            SPE9_202_207 = 485, //地关九
            SPE9_202_307 = 486, //地关九
            SPE9_202_407 = 487, //地关九

            SPE9_107_212 = 490, //天关九 8个  红q＋7
            SPE9_207_212 = 491, //天关九
            SPE9_212_307 = 492, //天关九
            SPE9_212_407 = 493, //天关九
            SPE9_107_412 = 494, //天关九
            SPE9_207_412 = 495, //天关九
            SPE9_307_412 = 496, //天关九
            SPE9_407_412 = 497, //天关九


            SPE_202_408 = 720, //地杠 8个   红2＋8
            SPE_202_308 = 721, //地杠
            SPE_202_208 = 722, //地杠
            SPE_108_202 = 723, //地杠
            SPE_108_402 = 724, //地杠
            SPE_208_402 = 725, //地杠
            SPE_308_402 = 726, //地杠
            SPE_402_408 = 727, //地杠

            SPE_108_412 = 730, //天杠 8个   红q＋8
            SPE_208_412 = 731, //天杠 
            SPE_308_412 = 732, //天杠 
            SPE_408_412 = 733, //天杠 
            SPE_108_212 = 734, //天杠 
            SPE_208_212 = 735, //天杠 
            SPE_212_308 = 736, //天杠 
            SPE_212_408 = 737, //天杠 

            SPE1_109_202 = 740, //地九王  4个   红2＋9 新增特殊牌型可开关
            SPE1_202_309 = 741, //地九王
            SPE1_109_402 = 742, //地九王
            SPE1_309_402 = 743, //地九王

            SPE_109_412 = 750, //天王 4个   红q＋9
            SPE_109_212 = 751, //天王 
            SPE_309_412 = 752, //天王 
            SPE_212_309 = 753, //天王 

            Pair_105_305 = 770,//五对 杂五
            Pair_107_307 = 771,//七对
            Pair_108_308 = 772,//八对
            Pair_109_309 = 773,//九对 杂九

            Pair_207_407 = 780,//膏药对   这四种叫下对 大小相同         
            Pair_206_406 = 781,//猫猫对
            Pair_210_410 = 782,//苕十对
            Pair_111_311 = 783,//斧头对

            Pair_106_306 = 890,//长三对   这三种叫中对 大小相同
            Pair_104_304 = 891,//板凳对
            Pair_110_310 = 892,//梅十对

            Pair_204_404 = 996,//和牌对
            Pair_208_408 = 997,//人牌对
            Pair_202_402 = 998,// 地牌对
            Pair_212_412 = 999,//天牌对
            king_16_203 = 1000,// 17 红3 丁二皇
        }
        public enum UserStatusEnum
        {
            未在线 = 0,
            在大厅 = 1,
            在房间 = 2,
            /// <summary>
            /// 在桌子上打牌
            /// </summary>
            在打牌 = 3,
            /// <summary>
            /// 在桌子上打牌，但断线了
            /// </summary>
            断线 = 4,
            /// <summary>
            /// 在桌子上等待，
            /// </summary>
            等待 = 5,

            /// <summary>
            /// 排队断线了
            /// </summary>
            再次掉线 = 6
        }
        public enum ActivityType
        {
            普通活动 = 0,
            排行榜活动 = 1,
            俱乐部banner = 51
        }
        public enum tType
        {
            不跳转 = 0,
            跳转网页 = 1,
            跳转游戏内 = 2
        
        }
        public enum gType
        {
            红包界面 = 1,
            其他界面 = 2
        }
    }
}
