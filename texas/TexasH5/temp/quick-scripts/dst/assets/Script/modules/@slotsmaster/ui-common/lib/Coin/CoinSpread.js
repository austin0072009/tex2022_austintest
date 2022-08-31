
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@slotsmaster/ui-common/lib/Coin/CoinSpread.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAc2xvdHNtYXN0ZXJcXHVpLWNvbW1vblxcbGliXFxDb2luXFxDb2luU3ByZWFkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztHQU9HOztBQUVIO0lBb0NJLG9CQUFZLElBQWE7UUFuQ3pCLGdCQUFnQjtRQUNSLDJCQUFzQixHQUFXLEVBQUUsQ0FBQztRQUU1QyxXQUFXO1FBQ0gsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUUzQixXQUFXO1FBQ0gsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUUzQixVQUFVO1FBQ0Ysa0JBQWEsR0FBVyxDQUFDLENBQUM7UUFFbEMsVUFBVTtRQUNGLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO1FBRWxDLFNBQVM7UUFDRCxjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBRTlCLFNBQVM7UUFDRCxjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBRTlCLGNBQWM7UUFDTixrQkFBYSxHQUFXLENBQUMsQ0FBQztRQU8xQixrQkFBYSxHQUFXLEdBQUcsQ0FBQztRQUlwQyxZQUFZO1FBQ0osdUJBQWtCLEdBQWEsSUFBSSxDQUFDO1FBRXhDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRCwyQkFBTSxHQUFOLFVBQU8sRUFBVTtRQUNiLElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUFFO1lBQ2pELFlBQVk7WUFDWixJQUFJLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQztZQUN6QixVQUFVO1lBQ1YsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNuQyxVQUFVO1lBQ1YsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNuQyxXQUFXO1lBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMs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Q1YsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7WUFDakMsNEJBQTRCO1lBQzVCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUMzQyxtREFBbUQ7WUFDbkQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztTQUN6QztJQUNMLENBQUM7SUFDTCxpQkFBQztBQUFELENBaklBLEFBaUlDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQEF1dGhvcjog55Sw6ZGrXG4gKiBARGF0ZTogMjAyMC0wMy0yNSAxNDoxMzowOVxuICogQExhc3RFZGl0b3JzOiDnlLDpkatcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjAtMDYtMTQgMTE6MTk6NDBcbiAqIEBWZXJzaW9uOiBDb2Nvc0NyZWF0b3IgVjIuMi4yXG4gKiBARGVzY3JpcHRpb246IOmHkeW4geaMpea0kuWKqOeUu1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvaW5TcHJlYWQge1xuICAgIC8vKiBZ6L205piv5ZCm5piv5YyA6YCf6L+Q5Yqo55qE6ZiI5YC8XG4gICAgcHJpdmF0ZSBZX0FDQ0VMRVJBVEVfVEhSRVNIT0xEOiBudW1iZXIgPSAzMDtcblxuICAgIC8vKiBY6L2055qE5Yid5aeL6YCf5bqmXG4gICAgcHJpdmF0ZSB4U3BlZWQ6IG51bWJlciA9IDA7XG5cbiAgICAvLyogWei9tOeahOWIneWni+mAn+W6plxuICAgIHByaXZhdGUgeVNwZWVkOiBudW1iZXIgPSAwO1xuXG4gICAgLy8qIFjovbTnmoTliqDpgJ/luqZcbiAgICBwcml2YXRlIHhBY2NlbGVyYXRpb246IG51bWJlciA9IDA7XG5cbiAgICAvLyogWei9tOeahOWKoOmAn+W6plxuICAgIHByaXZhdGUgeUFjY2VsZXJhdGlvbjogbnVtYmVyID0gMDtcblxuICAgIC8vKiDlvIDlp4tY5Z2Q5qCHXG4gICAgcHJpdmF0ZSB4U3RhcnRQb3M6IG51bWJlciA9IDA7XG5cbiAgICAvLyog5byA5aeLWeWdkOagh1xuICAgIHByaXZhdGUgeVN0YXJ0UG9zOiBudW1iZXIgPSAwO1xuXG4gICAgLy8qIOiuoeeul+WHuueahOaAu+eahOenu+WKqOaXtumXtFxuICAgIHByaXZhdGUgbW92ZVRvdGFsVGltZTogbnVtYmVyID0gMDtcblxuICAgIHByaXZhdGUgaXNNb3ZpbmdGb3JUb3VjaDogYm9vbGVhbjtcblxuICAgIC8vKiDnp7vliqjpgJ/luqZcbiAgICBwcml2YXRlIHNwZWVkOiBudW1iZXI7XG5cbiAgICBwcml2YXRlIHBhcmFib2xhU3BlZWQ6IG51bWJlciA9IDEuNTtcblxuICAgIC8vKiDoioLngrlcbiAgICBwcml2YXRlIG5vZGU6IGNjLk5vZGU7XG4gICAgLy8qIOmHkeW4geaMpea0kuWbnuiwg+WHveaVsFxuICAgIHByaXZhdGUgY29pblNwcmVhZENhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGw7XG4gICAgY29uc3RydWN0b3Iobm9kZTogY2MuTm9kZSkge1xuICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIH1cblxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmlzTW92aW5nRm9yVG91Y2ggJiYgdGhpcy5tb3ZlVG90YWxUaW1lID4gMCkge1xuICAgICAgICAgICAgLy8qIOavj+W4p+abtOaWsOenu+WKqOaXtumXtFxuICAgICAgICAgICAgdGhpcy5tb3ZlVG90YWxUaW1lIC09IGR0O1xuICAgICAgICAgICAgLy8qIOabtOaWsFjovbTlnZDmoIdcbiAgICAgICAgICAgIHRoaXMueFN0YXJ0UG9zIC09IHRoaXMueFNwZWVkICogZHQ7XG4gICAgICAgICAgICAvLyog5pu05pawWei9tOWdkOagh1xuICAgICAgICAgICAgdGhpcy55U3RhcnRQb3MgLT0gdGhpcy55U3BlZWQgKiBkdDtcbiAgICAgICAgICAgIC8vKiDmm7TmlrDoioLngrnnmoTkvY3nva5cbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLnhTdGFydFBvcywgdGhpcy55U3RhcnRQb3MpO1xuICAgICAgICAgICAgLy8qIOabtOaWsFjovbTpgJ/luqZcbiAgICAgICAgICAgIHRoaXMueFNwZWVkIC09IHRoaXMueEFjY2VsZXJhdGlvbiAqIGR0O1xuICAgICAgICAgICAgLy8qIOabtOaWsFnovbTpgJ/luqZcbiAgICAgICAgICAgIHRoaXMueVNwZWVkIC09IHRoaXMueUFjY2VsZXJhdGlvbiAqIGR0O1xuICAgICAgICAgICAgaWYgKHRoaXMueVNwZWVkID49IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnlBY2NlbGVyYXRpb24gPSAtMjgwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzTW92aW5nRm9yVG91Y2ggJiYgdGhpcy5tb3ZlVG90YWxUaW1lIDw9IDAgJiYgdGhpcy5ub2RlLmlzVmFsaWQpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuY29pblNwcmVhZENhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb2luU3ByZWFkKHN0YXJ0UG9zOiBjYy5WZWMyLCB0YXJnZXRwb3NpdGlvbjogY2MuVmVjMiwgc3BlZWQ6IG51bWJlciwgY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XG4gICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IGNjLnYzKHN0YXJ0UG9zLngsIHN0YXJ0UG9zLnksIDApO1xuICAgICAgICB0aGlzLm5vZGUueCA9IDI1MDtcbiAgICAgICAgdGhpcy5pc01vdmluZ0ZvclRvdWNoID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgICAgICB0aGlzLmNvaW5TcHJlYWRDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSAwLjY7XG4gICAgICAgIHRoaXMuY2FsY1BhcmFib2xhRWZmaWNpZW50KHRoaXMubm9kZS5wb3NpdGlvbiwgdGFyZ2V0cG9zaXRpb24pO1xuICAgIH1cblxuICAgIGNhbGNQYXJhYm9sYUVmZmljaWVudChzdGFydFBvczogY2MuVmVjMywgZW5kUG9zOiBjYy5WZWMyKSB7XG4gICAgICAgIHRoaXMueFN0YXJ0UG9zID0gOTYwO1xuICAgICAgICB0aGlzLnlTdGFydFBvcyA9IC0xMDgwO1xuXG4gICAgICAgIGxldCBzcGVlZCA9IHRoaXMuc3BlZWQ7XG5cbiAgICAgICAgLy8qIOi1t+Wni+eCueS4jue7k+adn+eCuemrmOW6puW3ruWkp+S6jumYiOWAvO+8jOWNiuadoeaKm+eJqee6v+S5n+WwseaYr+WPquacieWKoOmAn+i/h+eoiywgWei9tOWMgOmAn+i/kOWKqO+8jFjovbTliqDpgJ/ov5DliqhcbiAgICAgICAgaWYgKHN0YXJ0UG9zLnkgLSBlbmRQb3MueSA+IHRoaXMuWV9BQ0NFTEVSQVRFX1RIUkVTSE9MRCkge1xuICAgICAgICAgICAgbGV0IHhEaXN0YW5jZSA9IE1hdGguYWJzKHN0YXJ0UG9zLnggLSBlbmRQb3MueCk7XG4gICAgICAgICAgICBsZXQgeURpc3RhbmNlID0gTWF0aC5hYnMoc3RhcnRQb3MueSAtIGVuZFBvcy55KTtcbiAgICAgICAgICAgIC8vKiDorqHnrpfmgLvnmoTnp7vliqjml7bpl7RcbiAgICAgICAgICAgIHRoaXMubW92ZVRvdGFsVGltZSA9IE1hdGguc3FydCh4RGlzdGFuY2UgKiB4RGlzdGFuY2UgKyB5RGlzdGFuY2UgKiB5RGlzdGFuY2UpIC8gc3BlZWQ7XG4gICAgICAgICAgICAvLyog6K6h566XWOi9tOeahOW5s+Wdh+mAn+W6plxuICAgICAgICAgICAgbGV0IHhTcGVlZCA9IHhEaXN0YW5jZSAvIHRoaXMubW92ZVRvdGFsVGltZTtcbiAgICAgICAgICAgIC8vKiDorqHnrpdZ6L2055qE6YCf5bqmXG4gICAgICAgICAgICB0aGlzLnlTcGVlZCA9IHlEaXN0YW5jZSAvIHRoaXMubW92ZVRvdGFsVGltZTtcbiAgICAgICAgICAgIC8vKiBZ6L205YyA6YCf6L+Q5Yqo77yM5LiN6ZyA6KaB5Yqg6YCf5bqm77yM6K6+5Li6MFxuICAgICAgICAgICAgdGhpcy55QWNjZWxlcmF0aW9uID0gMDtcbiAgICAgICAgICAgIC8vKiDmoLnmja7otbflp4vngrnnmoTlnZDmoIfliKTmlq3np7vliqjpgJ/luqbnmoTmlrnlkJFcbiAgICAgICAgICAgIGlmIChlbmRQb3MueCA+IHN0YXJ0UG9zLngpIHtcbiAgICAgICAgICAgICAgICAvLyog6K6h566X5Yid5aeL6YCf5bqm77yM6LCD5pW05Y+C5pWwXCJwYXJhYm9sYVNwZWVkXCLlj6/ku6XmlLnlj5jmipvniannur/lvaLnirZcbiAgICAgICAgICAgICAgICB0aGlzLnhTcGVlZCA9IC14U3BlZWQgKiB0aGlzLnBhcmFib2xhU3BlZWQ7XG4gICAgICAgICAgICAgICAgLy8qIOiuoeeul1jovbTliqDpgJ/luqZcbiAgICAgICAgICAgICAgICB0aGlzLnhBY2NlbGVyYXRpb24gPSAteFNwZWVkIC8gdGhpcy5tb3ZlVG90YWxUaW1lO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyog6K6h566X5Yid5aeL6YCf5bqm77yM6LCD5pW05Y+C5pWwXCJwYXJhYm9sYVNwZWVkXCLlj6/ku6XmlLnlj5jmipvniannur/lvaLnirZcbiAgICAgICAgICAgICAgICB0aGlzLnhTcGVlZCA9IHhTcGVlZCAqIHRoaXMucGFyYWJvbGFTcGVlZDtcbiAgICAgICAgICAgICAgICAvLyog6K6h566XWOi9tOWKoOmAn+W6plxuICAgICAgICAgICAgICAgIHRoaXMueEFjY2VsZXJhdGlvbiA9IHhTcGVlZCAvIHRoaXMubW92ZVRvdGFsVGltZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyog6ZyA6KaBWei9tOWBmuWKoOmAn+i/kOWKqOW9ouaIkOaKm+eJqee6v++8jOWboOS4uuWwj+S6jumYiOWAvO+8jOaJgOS7pemcgOimgeWFiOWIsOi+vuacgOmrmOeCuVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCB4RGlzdGFuY2UgPSBzdGFydFBvcy54IC0gZW5kUG9zLng7XG4gICAgICAgICAgICBsZXQgeURpc3RhbmNlID0gTWF0aC5hYnMoc3RhcnRQb3MueSAtIGVuZFBvcy55KTtcbiAgICAgICAgICAgIHRoaXMubW92ZVRvdGFsVGltZSA9IDI7XG4gICAgICAgICAgICAvLyogWOi9tOWMgOmAn+i/kOWKqO+8jFjovbTnmoTpgJ/luqZcbiAgICAgICAgICAgIHRoaXMueFNwZWVkID0geERpc3RhbmNlIC8gdGhpcy5tb3ZlVG90YWxUaW1lO1xuICAgICAgICAgICAgLy8qIOWMgOmAn+i/kOWKqOS4jemcgOimgeWKoOmAn+W6pu+8jOiuvuS4ujBcbiAgICAgICAgICAgIHRoaXMueEFjY2VsZXJhdGlvbiA9IDA7XG4gICAgICAgICAgICAvLyog6K6h566X5pyA6auY54K555qE5L2N572u77yM6Led56a76K6+5Li6MuWAjemrmOW6puW3ru+8jOWPr+S7peiwg+aVtOWPguaVsHlfZGlzdGFuY2XnmoTns7vmlbDmnaXmlLnlj5jmipvniannur/mnIDpq5jngrnvvIzmnaXosIPmlbTmipvniannur/lvaLnirZcbiAgICAgICAgICAgIGxldCBoaWdoZXN0WSA9IE1hdGgubWF4KHN0YXJ0UG9zLnksIGVuZFBvcy55KSArIHlEaXN0YW5jZTtcbiAgICAgICAgICAgIC8vKiDmipvniannur/np7vliqjmsJvlm7TkuKTmrrXvvIzkuIDmrrXmmK/np7vliqjliLDmnIDpq5jngrnvvIzlj6bkuIDmrrXmmK/ku47mnIDpq5jngrnnp7vliqjliLDnm67moIfngrnvvIzlm6DkuLp46L205YyA6YCf6L+Q5Yqo77yM5omA5Lul5oiR5Lus5Y+q6ZyA6KaB5YWz5b+DWei9tOWwseWPr+S7peS6hlxuICAgICAgICAgICAgbGV0IGQxID0gaGlnaGVzdFkgLSBzdGFydFBvcy55O1xuICAgICAgICAgICAgbGV0IGQyID0gaGlnaGVzdFkgLSBlbmRQb3MueTtcbiAgICAgICAgICAgIC8vKiDkuIrljYfmrrXnmoTml7bpl7RcbiAgICAgICAgICAgIGxldCB0MSA9IHRoaXMubW92ZVRvdGFsVGltZSAvICgxICsgTWF0aC5zcXJ0KGQxIC8gZDIpKTtcbiAgICAgICAgICAgIC8vKiDkuIvpmY3mrrXnmoTml7bpl7RcbiAgICAgICAgICAgIGxldCB0MiA9IHRoaXMubW92ZVRvdGFsVGltZSAtIHQxO1xuICAgICAgICAgICAgLy8qIOWboOS4uuaYr+WMgOWKoOmAn+i/kOWKqO+8jOaJgOS7peeUqOS7u+S9leS4gOauteiuoeeul+WKoOmAn+W6pumDveWPr+S7pVxuICAgICAgICAgICAgdGhpcy55QWNjZWxlcmF0aW9uID0gLSgyICogZDEpIC8gKHQxICogdDEpO1xuICAgICAgICAgICAgLy8qIOiuoeeul1novbTnmoTliJ3lp4vpgJ/luqbvvIzlm6DkuLrmmK/ljIDlh4/pgJ/vvIzkuJTliLDovr7mnIDpq5jngrnml7bpgJ/luqbkuIDlrprkuLrpm7bvvIzmiYDku6Xlj6/ku6Xnm7TmjqXorqHnrpflvpflh7pZ6L205Yid5aeL6YCf5bqmXG4gICAgICAgICAgICB0aGlzLnlTcGVlZCA9IHRoaXMueUFjY2VsZXJhdGlvbiAqIHQxO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19