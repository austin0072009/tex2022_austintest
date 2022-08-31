"use strict";
cc._RF.push(module, '1ce1eHMe5tLOKAfJbh7poft', 'CoinSpread');
// Script/modules/@slotsmaster/ui-common/lib/Coin/CoinSpread.ts

"use strict";
/*
 * @Author: 田鑫
 * @Date: 2020-03-25 14:13:09
 * @LastEditors: 田鑫
 * @LastEditTime: 2020-06-14 11:19:40
 * @Version: CocosCreator V2.2.2
 * @Description: 金币挥洒动画
 */
Object.defineProperty(exports, "__esModule", { value: true });
var CoinSpread = /** @class */ (function () {
    function CoinSpread(node) {
        //* Y轴是否是匀速运动的阈值
        this.Y_ACCELERATE_THRESHOLD = 30;
        //* X轴的初始速度
        this.xSpeed = 0;
        //* Y轴的初始速度
        this.ySpeed = 0;
        //* X轴的加速度
        this.xAcceleration = 0;
        //* Y轴的加速度
        this.yAcceleration = 0;
        //* 开始X坐标
        this.xStartPos = 0;
        //* 开始Y坐标
        this.yStartPos = 0;
        //* 计算出的总的移动时间
        this.moveTotalTime = 0;
        this.parabolaSpeed = 1.5;
        //* 金币挥洒回调函数
        this.coinSpreadCallback = null;
        this.node = node;
    }
    CoinSpread.prototype.update = function (dt) {
        if (this.isMovingForTouch && this.moveTotalTime > 0) {
            //* 每帧更新移动时间
            this.moveTotalTime -= dt;
            //* 更新X轴坐标
            this.xStartPos -= this.xSpeed * dt;
            //* 更新Y轴坐标
            this.yStartPos -= this.ySpeed * dt;
            //* 更新节点的位置
            this.node.setPosition(this.xStartPos, this.yStartPos);
            //* 更新X轴速度
            this.xSpeed -= this.xAcceleration * dt;
            //* 更新Y轴速度
            this.ySpeed -= this.yAcceleration * dt;
            if (this.ySpeed >= 0) {
                this.yAcceleration = -2800;
            }
        }
        else if (this.isMovingForTouch && this.moveTotalTime <= 0 && this.node.isValid) {
            this.node.stopAllActions();
            this.node.destroy();
            this.coinSpreadCallback();
        }
    };
    CoinSpread.prototype.coinSpread = function (startPos, targetposition, speed, callback) {
        this.node.position = cc.v3(startPos.x, startPos.y, 0);
        this.node.x = 250;
        this.isMovingForTouch = true;
        this.speed = speed;
        this.coinSpreadCallback = callback;
        this.node.scale = 0.6;
        this.calcParabolaEfficient(this.node.position, targetposition);
    };
    CoinSpread.prototype.calcParabolaEfficient = function (startPos, endPos) {
        this.xStartPos = 960;
        this.yStartPos = -1080;
        var speed = this.speed;
        //* 起始点与结束点高度差大于阈值，半条抛物线也就是只有加速过程, Y轴匀速运动，X轴加速运动
        if (startPos.y - endPos.y > this.Y_ACCELERATE_THRESHOLD) {
            var xDistance = Math.abs(startPos.x - endPos.x);
            var yDistance = Math.abs(startPos.y - endPos.y);
            //* 计算总的移动时间
            this.moveTotalTime = Math.sqrt(xDistance * xDistance + yDistance * yDistance) / speed;
            //* 计算X轴的平均速度
            var xSpeed = xDistance / this.moveTotalTime;
            //* 计算Y轴的速度
            this.ySpeed = yDistance / this.moveTotalTime;
            //* Y轴匀速运动，不需要加速度，设为0
            this.yAcceleration = 0;
            //* 根据起始点的坐标判断移动速度的方向
            if (endPos.x > startPos.x) {
                //* 计算初始速度，调整参数"parabolaSpeed"可以改变抛物线形状
                this.xSpeed = -xSpeed * this.parabolaSpeed;
                //* 计算X轴加速度
                this.xAcceleration = -xSpeed / this.moveTotalTime;
            }
            else {
                //* 计算初始速度，调整参数"parabolaSpeed"可以改变抛物线形状
                this.xSpeed = xSpeed * this.parabolaSpeed;
                //* 计算X轴加速度
                this.xAcceleration = xSpeed / this.moveTotalTime;
            }
        }
        //* 需要Y轴做加速运动形成抛物线，因为小于阈值，所以需要先到达最高点
        else {
            var xDistance = startPos.x - endPos.x;
            var yDistance = Math.abs(startPos.y - endPos.y);
            this.moveTotalTime = 2;
            //* X轴匀速运动，X轴的速度
            this.xSpeed = xDistance / this.moveTotalTime;
            //* 匀速运动不需要加速度，设为0
            this.xAcceleration = 0;
            //* 计算最高点的位置，距离设为2倍高度差，可以调整参数y_distance的系数来改变抛物线最高点，来调整抛物线形状
            var highestY = Math.max(startPos.y, endPos.y) + yDistance;
            //* 抛物线移动氛围两段，一段是移动到最高点，另一段是从最高点移动到目标点，因为x轴匀速运动，所以我们只需要关心Y轴就可以了
            var d1 = highestY - startPos.y;
            var d2 = highestY - endPos.y;
            //* 上升段的时间
            var t1 = this.moveTotalTime / (1 + Math.sqrt(d1 / d2));
            //* 下降段的时间
            var t2 = this.moveTotalTime - t1;
            //* 因为是匀加速运动，所以用任何一段计算加速度都可以
            this.yAcceleration = -(2 * d1) / (t1 * t1);
            //* 计算Y轴的初始速度，因为是匀减速，且到达最高点时速度一定为零，所以可以直接计算得出Y轴初始速度
            this.ySpeed = this.yAcceleration * t1;
        }
    };
    return CoinSpread;
}());
exports.default = CoinSpread;

cc._RF.pop();