using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Common
{
    public class DTEnums
    {
        /// <summary>
        /// 统一管理操作枚举
        /// </summary>
        public enum ActionEnum
        {
            /// <summary>
            /// 所有
            /// </summary>
            [Description("所有")]
            All,
            /// <summary>
            /// 显示
            /// </summary>
            [Description("显示")]
            Show,
            /// <summary>
            /// 查看
            /// </summary>
            [Description("查看")]
            View,
            /// <summary>
            /// 添加
            /// </summary>
            [Description("添加")]
            Add,
            /// <summary>
            /// 修改
            /// </summary>
            [Description("修改")]
            Edit,
            /// <summary>
            /// 删除
            /// </summary>
            [Description("删除")]
            Delete,
            /// <summary>
            /// 审核
            /// </summary>
            [Description("审核")]
            Audit,
            /// <summary>
            /// 回复
            /// </summary>
            [Description("回复")]
            Reply,
            /// <summary>
            /// 确认
            /// </summary>
            [Description("确认")]
            Confirm,
            /// <summary>
            /// 取消
            /// </summary>
            [Description("取消")]
            Cancel,
            /// <summary>
            /// 作废
            /// </summary>
            [Description("作废")]
            Invalid,
            /// <summary>
            /// 生成
            /// </summary>
            [Description("生成")]
            Build,
            /// <summary>
            /// 安装
            /// </summary>
            [Description("安装")]
            Instal,
            /// <summary>
            /// 卸载
            /// </summary>
            [Description("卸载")]
            UnLoad,
            /// <summary>
            /// 登录
            /// </summary>
            [Description("登录")]
            Login,
            /// <summary>
            /// 备份
            /// </summary>
            [Description("备份")]
            Back,
            /// <summary>
            /// 重置
            /// </summary>
            [Description("重置")]
            Restore,
            /// <summary>
            /// 替换
            /// </summary>
            [Description("替换")]
            Replace,
            /// <summary>
            /// 复制
            /// </summary>
            [Description("复制")]
            Copy,
            /// <summary>
            /// 禁用
            /// </summary>
            [Description("禁用")]
            Disable,
            /// <summary>
            /// 启用
            /// </summary>
            [Description("启用")]
            Enable,
            /// <summary>
            /// 限制
            /// </summary>
            [Description("限制")]
            limit,
            /// <summary>
            /// 充值
            /// </summary>
            [Description("上分")]
            Recharge,
            /// <summary>
            /// 下分
            /// </summary>
            [Description("下分")]
            backRecharge,
            /// <summary>
            /// 设置
            /// </summary>
            [Description("设置")]
            Set,
            /// <summary>
            /// 发送
            /// </summary>
            [Description("发送")]
            Send,
            /// <summary>
            /// 提现
            /// </summary>
            [Description("提现")]
            Cash,
            /// <summary>
            /// h5下分
            /// </summary>
            [Description("h5下分")]
            h5Outmoney,
            /// <summary>
            /// h5上分
            /// </summary>
            [Description("h5上分")]
            h5upmoney,
            [Description("成功")]
            Success,
            /// <summary>
            /// H5下分
            /// </summary>
            [Description("失败")]
            Fail
        }
        /// <summary>
        /// 操作模块
        /// </summary>
        public enum OptAction
        {
            [Description("税收日志")]
            taxlog,
            [Description("金币流向日志")]
            goldtolog,
            [Description("玩家中奖日志")]
            UserWinning,
            [Description("邮件")]
            emailsend,
            [Description("用户银行卡")]
            UserCard,
            [Description("银行卡密码")]
            resetcardpwd,
            [Description("重置登录密码")]
            resetloginpwd,
            [Description("金币")]
            RechargeGold,
            [Description("设置机器人胜率")]
            setrebotsl,
            [Description("锁定账户")]
            lockuser,
            [Description("代理等级")]
            setMember,
            [Description("最大输赢")]
            setMaxLosewin,
            [Description("设置牌型")]
            setbrandtype,
            [Description("桌子")]
            Establishtable,
            [Description("公告")]
            publicnotice,
            [Description("IP/机器码")]
            IPorCode,
            [Description("放奖大小")]
            fangwater,
            [Description("机器人胜率")]
            RobotWinning,
            [Description("机器人昵称")]
            RobotNikename,
            [Description("机器人")]
            Robot,
            [Description("观战机器人")]
            WatchRobot,
            [Description("牌型")]
            CardType,
            [Description("提现申请")]
            CashManage,
            [Description("红包配置")]
            RedMoney,
            [Description("红包任务")]
            RedMoneyTask,
            [Description("手牌")]
            HandPoker,
            [Description("奖池和红利比例")]
            Jackpot,
            [Description("股份")]
            Shares
        }



        /// <summary>
        /// 系统导航菜单类别枚举
        /// </summary>
        public enum NavigationEnum
        {
            /// <summary>
            /// 系统后台菜单
            /// </summary>
            System,
            /// <summary>
            /// 会员中心导航
            /// </summary>
            Users,
            /// <summary>
            /// 网站主导航
            /// </summary>
            WebSite
        }
        public enum AppLogEnum
        {
            /// <summary>
            /// 修改利率
            /// </summary>
            UpdateRateLog
        }
        //代付状态:0-订单生成,1-代付中,2-代付成功,3-代付失败,4-业务处理完成

        public enum DfState
        {
            订单生成 = 0,
            代付中 = 1,
            代付成功 = 2,
            代付失败 = 3,
            业务处理完成 = 4
        }
    }
}
