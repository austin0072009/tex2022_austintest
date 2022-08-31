/*
 Navicat Premium Data Transfer

 Source Server         : kkDB
 Source Server Type    : MySQL
 Source Server Version : 50736
 Source Host           : localhost:3306
 Source Schema         : kk_h5game_2021

 Target Server Type    : MySQL
 Target Server Version : 50736
 File Encoding         : 65001

 Date: 08/08/2022 17:26:26
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for competeblind
-- ----------------------------
DROP TABLE IF EXISTS `competeblind`;
CREATE TABLE `competeblind`  (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `matchlavel` int(11) NULL DEFAULT NULL,
  `smallblind` int(11) NULL DEFAULT NULL,
  `bigblind` int(11) NULL DEFAULT NULL,
  `PreGamble` int(11) NULL DEFAULT NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for temp_entityhistory
-- ----------------------------
DROP TABLE IF EXISTS `temp_entityhistory`;
CREATE TABLE `temp_entityhistory`  (
  `Key` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NOT NULL,
  `Value` longblob NULL,
  PRIMARY KEY (`Key`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for blindsconfig
-- ----------------------------
DROP TABLE IF EXISTS `blindsconfig`;
CREATE TABLE `blindsconfig`  (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '赛事类别',
  `level` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '等级',
  `Minblind` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '小盲',
  `Maxblind` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '大盲',
  `pregamble` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '前注',
  `CreateDate` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for competeblind
-- ----------------------------
DROP TABLE IF EXISTS `competeblind`;
CREATE TABLE `competeblind`  (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `matchlavel` int(11) NULL DEFAULT NULL,
  `smallblind` int(11) NULL DEFAULT NULL,
  `bigblind` int(11) NULL DEFAULT NULL,
  `PreGamble` int(11) NULL DEFAULT NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for competemodel
-- ----------------------------
DROP TABLE IF EXISTS `competemodel`;
CREATE TABLE `competemodel`  (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Type` int(11) NULL DEFAULT NULL,
  `GameID` int(11) NULL DEFAULT NULL,
  `ShelfTime` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `StartLogin` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `CompeteStart` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `CompeteEnd` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `Free` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `prizes` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `IsEnable` bit(1) NULL DEFAULT NULL,
  `CreatTime` datetime(0) NULL DEFAULT NULL,
  `SignupTime` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `SignupEnd` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `MinCount` int(11) NULL DEFAULT NULL,
  `MaxCount` int(11) NULL DEFAULT NULL,
  `Name` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `Remark` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for competeprizeconfig
-- ----------------------------
DROP TABLE IF EXISTS `competeprizeconfig`;
CREATE TABLE `competeprizeconfig`  (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `type` int(11) NULL DEFAULT NULL COMMENT '赛事类型',
  `starank` int(11) NULL DEFAULT NULL COMMENT '起始排名',
  `endrank` int(11) NULL DEFAULT NULL COMMENT '结束排名',
  `typeId` int(11) NULL DEFAULT NULL COMMENT '奖品类型(道具编号)',
  `num` int(11) NULL DEFAULT NULL COMMENT '奖品金额',
  `IsValue` tinyint(1) NULL DEFAULT NULL COMMENT '是否比例值',
  `percentage` float(11, 2) NULL DEFAULT NULL COMMENT '百分比',
  `CreateDate` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for competeproperty
-- ----------------------------
DROP TABLE IF EXISTS `competeproperty`;
CREATE TABLE `competeproperty`  (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `CompeteTemplateID` int(11) NULL DEFAULT NULL,
  `FieldName` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `Name` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `Value` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `IsEnable` bit(1) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE,
  UNIQUE INDEX `unique_index`(`CompeteTemplateID`, `FieldName`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for itemcountry
-- ----------------------------
DROP TABLE IF EXISTS `itemcountry`;
CREATE TABLE `itemcountry`  (
  `Id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `Name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '国家名称',
  `Value` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '国家code',
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci COMMENT = '国家名称' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for itemgoldmall
-- ----------------------------
DROP TABLE IF EXISTS `itemgoldmall`;
CREATE TABLE `itemgoldmall`  (
  `Id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `Name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '名称',
  `Gold` decimal(50, 0) NULL DEFAULT NULL COMMENT '金币数量',
  `Money` int(255) NULL DEFAULT NULL COMMENT '实际金额',
  `Isputaway` bit(1) NULL DEFAULT NULL COMMENT '是否上架  0:否；1:是',
  `ImgPic` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '上传商品图标',
  `Type` int(11) NULL DEFAULT NULL COMMENT '类型 0 金币  1 其他',
  `DisType` int(11) NULL DEFAULT NULL COMMENT '额外赠送类型 0 数量  1折扣 2 数量和折扣',
  `DisGoldNum` int(50) NULL DEFAULT NULL COMMENT '折扣数量',
  `Disper` decimal(50, 0) NULL DEFAULT NULL COMMENT '折扣百分比',
  `Country` int(11) NULL DEFAULT NULL COMMENT '国家',
  `Num` int(11) NULL DEFAULT NULL COMMENT '商品数量',
  `CreatDate` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci COMMENT = '金币商城' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for itemmanager
-- ----------------------------
DROP TABLE IF EXISTS `itemmanager`;
CREATE TABLE `itemmanager`  (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '物品名称',
  `Type` int(11) NULL DEFAULT NULL COMMENT '0:游戏物品、1:实物物品',
  `integral` int(11) NULL DEFAULT NULL COMMENT '物品原价积分',
  `ImgPic` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '上传道具图标',
  `Isputaway` bit(1) NULL DEFAULT NULL COMMENT '0:否；1:是',
  `Num` int(11) NULL DEFAULT NULL COMMENT '数量',
  `CreatDate` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for itemorderaddress
-- ----------------------------
DROP TABLE IF EXISTS `itemorderaddress`;
CREATE TABLE `itemorderaddress`  (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NULL DEFAULT NULL COMMENT '玩家id',
  `Address` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '收货地址',
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for itemorderlog
-- ----------------------------
DROP TABLE IF EXISTS `itemorderlog`;
CREATE TABLE `itemorderlog`  (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `OrderNum` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '订单编号',
  `UserId` int(11) NULL DEFAULT NULL,
  `UserName` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '玩家名称',
  `Viplevel` int(11) NULL DEFAULT NULL COMMENT 'vip等级',
  `scores` int(11) NULL DEFAULT NULL COMMENT '当前积分',
  `ItemName` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '物品名称',
  `ItemScores` int(11) NULL DEFAULT NULL COMMENT '物品积分',
  `Type` int(11) NULL DEFAULT NULL COMMENT '物品类型（0：游戏道具；1：实物道具）',
  `Address` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '收货地址',
  `status` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '审核中；已审核；',
  `CreatDate` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for rechargechannels
-- ----------------------------
DROP TABLE IF EXISTS `rechargechannels`;
CREATE TABLE `rechargechannels`  (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ChannelName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `ChannelCode` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `payurl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `dec` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `minmoney` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `paytype` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `isenable` bit(1) NULL DEFAULT NULL,
  `payname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `IsDel` bit(1) NULL DEFAULT NULL,
  `CreatTime` datetime(0) NULL DEFAULT NULL,
  `serviceList` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `UserId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `IP` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `MachineCode` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `MachineType` int(11) NULL DEFAULT NULL,
  `Lat` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Lng` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t2dlottery
-- ----------------------------
DROP TABLE IF EXISTS `t2dlottery`;
CREATE TABLE `t2dlottery`  (
  `Id` int(11) NOT NULL,
  `set` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `value` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `open_time` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `twod` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `stock_date` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `stock_datetime` datetime(0) NULL DEFAULT NULL,
  `history_id` int(11) NULL DEFAULT NULL,
  `liveset` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `livevalue` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `livetime` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `livetwod` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `livedate` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `lotteryType` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tactivecode
-- ----------------------------
DROP TABLE IF EXISTS `tactivecode`;
CREATE TABLE `tactivecode`  (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Activecode` int(11) NULL DEFAULT NULL,
  `GenerateUserId` int(11) NULL DEFAULT NULL,
  `UseUserId` int(11) NULL DEFAULT NULL,
  `CreateDate` datetime(0) NULL DEFAULT NULL,
  `cidx` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tcommodity
-- ----------------------------
DROP TABLE IF EXISTS `tcommodity`;
CREATE TABLE `tcommodity`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `introduce` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `exchangeValue` double NULL DEFAULT NULL,
  `commodityType` int(11) NULL DEFAULT NULL,
  `url` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  `isEnable` bit(1) NULL DEFAULT NULL,
  `commodityvValue` float NULL DEFAULT NULL,
  `Discount` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `ClubCount` int(11) NULL DEFAULT NULL,
  `TableCount` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tdiamondchangelog
-- ----------------------------
DROP TABLE IF EXISTS `tdiamondchangelog`;
CREATE TABLE `tdiamondchangelog`  (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NULL DEFAULT NULL,
  `BeforeGold` double NULL DEFAULT NULL,
  `Gold` double NULL DEFAULT NULL,
  `AfterGold` double NULL DEFAULT NULL,
  `ChangeType` int(11) NULL DEFAULT NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  `Remark` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tpropconfig
-- ----------------------------
DROP TABLE IF EXISTS `tpropconfig`;
CREATE TABLE `tpropconfig`  (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `PropID` int(11) NULL DEFAULT NULL,
  `UseType` int(11) NULL DEFAULT NULL,
  `PropType` int(11) NULL DEFAULT NULL,
  `PropName` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `Desc` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `PropCount` int(11) NULL DEFAULT NULL,
  `Gold` int(11) NULL DEFAULT NULL,
  `ImgUrl` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `Config` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tredenvelopesconfig
-- ----------------------------
DROP TABLE IF EXISTS `tredenvelopesconfig`;
CREATE TABLE `tredenvelopesconfig`  (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `Money` decimal(18, 4) NULL DEFAULT NULL,
  `Rate` decimal(18, 4) NULL DEFAULT NULL,
  `TaskType` int(11) NULL DEFAULT NULL,
  `CreateDate` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tredenvelopeslog
-- ----------------------------
DROP TABLE IF EXISTS `tredenvelopeslog`;
CREATE TABLE `tredenvelopeslog`  (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NULL DEFAULT NULL,
  `TaskType` int(11) NULL DEFAULT NULL,
  `Money` int(11) NULL DEFAULT NULL,
  `CreateDate` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tredenvelopesreceivelog
-- ----------------------------
DROP TABLE IF EXISTS `tredenvelopesreceivelog`;
CREATE TABLE `tredenvelopesreceivelog`  (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NULL DEFAULT NULL,
  `TaskId` bigint(20) NULL DEFAULT NULL,
  `TaskType` int(11) NULL DEFAULT NULL,
  `Count` int(11) NULL DEFAULT NULL,
  `BeforeCount` int(11) NULL DEFAULT NULL,
  `CreateDate` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tredenvelopestask
-- ----------------------------
DROP TABLE IF EXISTS `tredenvelopestask`;
CREATE TABLE `tredenvelopestask`  (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `TaskName` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `TaskType` int(11) NULL DEFAULT NULL,
  `TaskCount` int(11) NULL DEFAULT NULL,
  `RedEnvCount` int(11) NULL DEFAULT NULL,
  `CreateDate` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tslotconfig
-- ----------------------------
DROP TABLE IF EXISTS `tslotconfig`;
CREATE TABLE `tslotconfig`  (
  `Id` int(11) NOT NULL,
  `RoomID` int(11) NULL DEFAULT NULL,
  `Config` text CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `UpdateTime` datetime(0) NULL DEFAULT NULL,
  `GameID` int(11) NULL DEFAULT NULL,
  `Levelid` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ttaxlog
-- ----------------------------
DROP TABLE IF EXISTS `ttaxlog`;
CREATE TABLE `ttaxlog`  (
  `Idx` bigint(20) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NULL DEFAULT NULL,
  `BeforCoin` bigint(20) NULL DEFAULT NULL,
  `ActionCoin` double NULL DEFAULT NULL,
  `AfterCoin` bigint(20) NULL DEFAULT NULL,
  `ActionType` int(11) NULL DEFAULT NULL,
  `SourceGameID` int(11) NULL DEFAULT NULL,
  `SourceUserId` int(11) NULL DEFAULT NULL,
  `CreateDate` datetime(0) NULL DEFAULT NULL,
  `TableUserLogId` bigint(20) NULL DEFAULT NULL,
  `IsHandel` bit(1) NULL DEFAULT NULL,
  `_lv` int(11) NULL DEFAULT NULL,
  `SourceRoomID` int(11) NULL DEFAULT NULL,
  `clubidx` int(11) NULL DEFAULT NULL,
  `allid` int(11) NULL DEFAULT NULL,
  `PlatCoin` double NULL DEFAULT NULL,
  `UserWater` bigint(20) NULL DEFAULT NULL,
  PRIMARY KEY (`Idx`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 20812 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ttradeinfo
-- ----------------------------
DROP TABLE IF EXISTS `ttradeinfo`;
CREATE TABLE `ttradeinfo`  (
  `TradeNo` varchar(100) CHARACTER SET gbk COLLATE gbk_chinese_ci NOT NULL COMMENT '交易号',
  `FromUserId` int(11) NULL DEFAULT NULL COMMENT '出自用户id',
  `ToUserId` int(11) NULL DEFAULT NULL COMMENT '去往用户id',
  `Coin` bigint(20) NULL DEFAULT NULL COMMENT '硬币',
  `TaxCoin` bigint(20) NULL DEFAULT NULL COMMENT '税收硬币',
  `State` int(11) NULL DEFAULT NULL COMMENT '状态',
  `CreateDate` datetime(0) NULL DEFAULT NULL COMMENT '时间',
  `TradeType` int(11) NULL DEFAULT NULL COMMENT '交易类型',
  `Diamond` bigint(20) NULL DEFAULT NULL COMMENT '钻石',
  `TaxDiamond` bigint(20) NULL DEFAULT NULL COMMENT '税收钻石',
  PRIMARY KEY (`TradeNo`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tuser
-- ----------------------------
DROP TABLE IF EXISTS `tuser`;
CREATE TABLE `tuser`  (
  `UserID` int(11) NOT NULL,
  `wechatName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Gold` bigint(20) NULL DEFAULT NULL,
  `GoldA` decimal(18, 4) NULL DEFAULT NULL,
  `LastLotinTime1` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `LastLotinTime2` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `RegTime` datetime(0) NULL DEFAULT NULL,
  `IP` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `Desc` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `isRobot` int(11) NULL DEFAULT NULL,
  `Status` int(11) NULL DEFAULT NULL,
  `diamond` bigint(20) NULL DEFAULT NULL,
  `isagent` int(11) NULL DEFAULT NULL,
  `wechatHeadIcon` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `Sex` int(11) NULL DEFAULT NULL,
  `TotalMoney` decimal(18, 4) NOT NULL DEFAULT 0.0000,
  `totaldiamond` bigint(20) NULL DEFAULT NULL,
  `lockTime` varchar(30) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `winpercent` int(11) NULL DEFAULT NULL,
  `BankGold` bigint(20) NULL DEFAULT NULL,
  `vlevel` int(11) NULL DEFAULT NULL,
  `givecount` int(11) NULL DEFAULT NULL,
  `MaxLose` bigint(20) NULL DEFAULT NULL,
  `MaxWin` bigint(20) NULL DEFAULT NULL,
  `MaxGold` bigint(20) NULL DEFAULT NULL,
  `TotalGold` bigint(20) NULL DEFAULT NULL,
  `showid` int(11) NULL DEFAULT NULL,
  `lat` float NULL DEFAULT NULL,
  `lng` float NULL DEFAULT NULL,
  `UserPassword` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `IsTp` int(11) NULL DEFAULT 0,
  `lv` int(11) NULL DEFAULT NULL,
  `IsJdb` int(11) NULL DEFAULT 0,
  `UpTotalAmount` bigint(20) NULL DEFAULT NULL,
  `RobotGameid` int(11) NULL DEFAULT NULL,
  `clublist` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `clubpwd` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `clubProtect` int(11) NULL DEFAULT NULL,
  `Userremark` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `DgLimit` int(11) NULL DEFAULT NULL,
  `DgTotalScore` bigint(20) NULL DEFAULT NULL,
  `DgCurrScore` bigint(20) NULL DEFAULT NULL,
  `ControlLimitRatio` int(11) NULL DEFAULT 100,
  `ControlEndRatio` int(11) NULL DEFAULT 50,
  `UserName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `UserMoney` decimal(18, 4) NULL DEFAULT NULL,
  `UserMaxMoney` decimal(18, 4) NULL DEFAULT NULL,
  `DgCreateTime` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `RetailID` int(11) NULL DEFAULT 0,
  `VipWaterScore` int(11) NULL DEFAULT NULL,
  `UserExp` bigint(20) NULL DEFAULT NULL,
  `TodayUserExp` int(11) NULL DEFAULT NULL,
  `StatisticsTime` datetime(0) NULL DEFAULT NULL,
  `currBetScore` int(11) NULL DEFAULT NULL,
  `WinGold` bigint(20) NULL DEFAULT NULL,
  PRIMARY KEY (`UserID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tusercontact
-- ----------------------------
DROP TABLE IF EXISTS `tusercontact`;
CREATE TABLE `tusercontact`  (
  `Id` varchar(100) CHARACTER SET gbk COLLATE gbk_chinese_ci NOT NULL,
  `Name` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `Mobile` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `PostCode` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `Address` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `UserId` int(11) NULL DEFAULT NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  `UpdateTime` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tusergamehand
-- ----------------------------
DROP TABLE IF EXISTS `tusergamehand`;
CREATE TABLE `tusergamehand`  (
  `Id` varchar(100) CHARACTER SET gbk COLLATE gbk_chinese_ci NOT NULL,
  `UserId` int(11) NULL DEFAULT NULL,
  `clubid` int(11) NULL DEFAULT NULL,
  `pos1Count` decimal(18, 4) NULL DEFAULT NULL,
  `pos2Count` decimal(18, 4) NULL DEFAULT NULL,
  `pos5Count` decimal(18, 4) NULL DEFAULT NULL,
  `pos10Count` decimal(18, 4) NULL DEFAULT NULL,
  `pos20Count` decimal(18, 4) NULL DEFAULT NULL,
  `pos50Count` decimal(18, 4) NULL DEFAULT NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  `gameWinCount` int(11) NULL DEFAULT NULL,
  `gameLostCount` int(11) NULL DEFAULT NULL,
  `gameDrawCount` int(11) NULL DEFAULT NULL,
  `FillingCount` int(11) NULL DEFAULT NULL,
  `dealCardCount` int(11) NULL DEFAULT NULL,
  `todayCardCount` int(11) NULL DEFAULT NULL,
  `tablenum` int(11) NULL DEFAULT NULL,
  `lastdealtime` datetime(0) NULL DEFAULT NULL,
  `GameId` int(11) NULL DEFAULT NULL,
  `Bigblind` int(11) NULL DEFAULT NULL,
  `bet3` int(11) NULL DEFAULT NULL,
  `cbet3` int(11) NULL DEFAULT NULL,
  `drivingnum` int(11) NULL DEFAULT NULL,
  `addpoolnum` int(11) NULL DEFAULT NULL,
  `Aveinto` double NULL DEFAULT NULL,
  `AveGains` double NULL DEFAULT NULL,
  `totalCount` int(11) NULL DEFAULT NULL,
  `_gamehc` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tuserjackpot
-- ----------------------------
DROP TABLE IF EXISTS `tuserjackpot`;
CREATE TABLE `tuserjackpot`  (
  `UserId` int(11) NOT NULL,
  `updatetime` datetime(0) NULL DEFAULT NULL,
  `watergoldadd` bigint(20) NULL DEFAULT NULL,
  `watergoldreduce` bigint(20) NULL DEFAULT NULL,
  `AllGoldBack` bigint(20) NULL DEFAULT NULL,
  `AllGoldAdd` bigint(20) NULL DEFAULT NULL,
  `_jackpot` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `_potRange` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `chargeCount` int(11) NULL DEFAULT NULL,
  `DgLoseTimes` int(11) NULL DEFAULT NULL,
  `DgTotalScore` bigint(20) NULL DEFAULT NULL,
  `DgCurrScore` bigint(20) NULL DEFAULT NULL,
  `DgStatus` int(11) NULL DEFAULT NULL,
  `EffecTiveType` int(11) NULL DEFAULT NULL,
  `DgLimit` int(11) NULL DEFAULT NULL,
  `_pot` bigint(20) NULL DEFAULT NULL,
  PRIMARY KEY (`UserId`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tuseronlinetimelog
-- ----------------------------
DROP TABLE IF EXISTS `tuseronlinetimelog`;
CREATE TABLE `tuseronlinetimelog`  (
  `Idx` bigint(20) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NULL DEFAULT NULL,
  `LogInTime` bigint(20) NULL DEFAULT NULL,
  `LogOutTime` bigint(20) NULL DEFAULT NULL,
  `gameid` int(11) NULL DEFAULT NULL,
  `levelid` int(11) NULL DEFAULT NULL,
  `HallLogInTime` bigint(20) NULL DEFAULT NULL,
  `HallLogOutTime` bigint(20) NULL DEFAULT NULL,
  `GameLogInTime` bigint(20) NULL DEFAULT NULL,
  `GameLogOutTime` bigint(20) NULL DEFAULT NULL,
  PRIMARY KEY (`Idx`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 115610 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tuserproplog
-- ----------------------------
DROP TABLE IF EXISTS `tuserproplog`;
CREATE TABLE `tuserproplog`  (
  `Idx` bigint(20) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NULL DEFAULT NULL,
  `CreateDate` datetime(0) NULL DEFAULT NULL,
  `PropID` int(11) NULL DEFAULT NULL,
  `PropCount` int(11) NULL DEFAULT NULL,
  `Status` int(11) NULL DEFAULT NULL,
  `remark` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  PRIMARY KEY (`Idx`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tuserrechargelog
-- ----------------------------
DROP TABLE IF EXISTS `tuserrechargelog`;
CREATE TABLE `tuserrechargelog`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NULL DEFAULT NULL COMMENT '用户id',
  `money` decimal(18, 4) NULL DEFAULT NULL COMMENT '金额',
  `cointype` int(11) NULL DEFAULT NULL COMMENT '硬币类型',
  `fromtype` int(11) NULL DEFAULT NULL COMMENT '类型',
  `fromuserid` int(11) NULL DEFAULT NULL COMMENT '来自用户id',
  `fromadminid` int(11) NULL DEFAULT NULL COMMENT '来自管理员id',
  `remarks` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL COMMENT '备注',
  `createtime` datetime(0) NULL DEFAULT NULL COMMENT '时间',
  `oldGold` decimal(18, 4) NULL DEFAULT NULL COMMENT '原来金币',
  `currGold` decimal(18, 4) NULL DEFAULT NULL COMMENT '之后金币',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tvipconfig
-- ----------------------------
DROP TABLE IF EXISTS `tvipconfig`;
CREATE TABLE `tvipconfig`  (
  `Id` int(11) NOT NULL,
  `UpExps` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `DropExps` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `UpRule` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `Discount` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `UpReward` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `MonthReward` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `FreeWithdrawTimes` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `WithdrawLimit` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `MonthDay` int(11) NULL DEFAULT NULL,
  `ValidBetScore` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tvisitlimit
-- ----------------------------
DROP TABLE IF EXISTS `tvisitlimit`;
CREATE TABLE `tvisitlimit`  (
  `ipport` varchar(100) CHARACTER SET gbk COLLATE gbk_chinese_ci NOT NULL,
  `dateRecord` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `unitRcord` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `dateMaxLimit` int(11) NULL DEFAULT NULL,
  `unitMaxLimit` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`ipport`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tactivecode
-- ----------------------------
DROP TABLE IF EXISTS `tactivecode`;
CREATE TABLE `tactivecode`  (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Activecode` int(11) NULL DEFAULT NULL,
  `GenerateUserId` int(11) NULL DEFAULT NULL,
  `UseUserId` int(11) NULL DEFAULT NULL,
  `CreateDate` datetime(0) NULL DEFAULT NULL,
  `cidx` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tactivity
-- ----------------------------
DROP TABLE IF EXISTS `tactivity`;
CREATE TABLE `tactivity`  (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ImgUrl` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `Title` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `Content` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `CreateDate` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tagentgoldlog
-- ----------------------------
DROP TABLE IF EXISTS `tagentgoldlog`;
CREATE TABLE `tagentgoldlog`  (
  `Idx` bigint(20) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NULL DEFAULT NULL,
  `BeforCoin` double NULL DEFAULT NULL,
  `ActionCoin` double NULL DEFAULT NULL,
  `AfterCoin` double NULL DEFAULT NULL,
  `ActionType` int(11) NULL DEFAULT NULL,
  `SourceGameID` int(11) NULL DEFAULT NULL,
  `SourceUserId` int(11) NULL DEFAULT NULL,
  `CreateDate` datetime(0) NULL DEFAULT NULL,
  `TableUserLogId` bigint(20) NULL DEFAULT NULL,
  `IsHandel` bit(1) NULL DEFAULT NULL,
  `_lv` int(11) NULL DEFAULT NULL,
  `tnum` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `clubId` int(11) NULL DEFAULT NULL,
  `allid` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`Idx`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tauthinfo
-- ----------------------------
DROP TABLE IF EXISTS `tauthinfo`;
CREATE TABLE `tauthinfo`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `authname` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `authvalue` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tbanklog
-- ----------------------------
DROP TABLE IF EXISTS `tbanklog`;
CREATE TABLE `tbanklog`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `OpDate` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `OpType` int(11) NULL DEFAULT NULL,
  `OpCount` int(11) NULL DEFAULT NULL,
  `UserId` int(11) NULL DEFAULT NULL,
  `cidx` int(11) NULL DEFAULT NULL,
  `ToUserID` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tbetlog
-- ----------------------------
DROP TABLE IF EXISTS `tbetlog`;
CREATE TABLE `tbetlog`  (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `gameid` int(11) NULL DEFAULT NULL,
  `UserId` int(11) NULL DEFAULT NULL,
  `BeforeGold` bigint(20) NULL DEFAULT NULL,
  `Gold` bigint(20) NULL DEFAULT NULL,
  `AfterGold` bigint(20) NULL DEFAULT NULL,
  `basegamble` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `bets` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `res` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `robot` bit(1) NULL DEFAULT NULL,
  `Remark` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `tnum` int(11) NULL DEFAULT NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tchannelscontrol
-- ----------------------------
DROP TABLE IF EXISTS `tchannelscontrol`;
CREATE TABLE `tchannelscontrol`  (
  `UserId` int(11) NOT NULL,
  `wechatName` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `RetailID` int(11) NULL DEFAULT 0,
  `MonStatus` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `TodayWl` bigint(255) NULL DEFAULT 0 COMMENT '今日总输赢  金币数量差得出',
  `TodayBet` bigint(255) NULL DEFAULT 0 COMMENT '今日总投注',
  `TodayWin` bigint(255) NULL DEFAULT 0 COMMENT '今日总赢',
  `TodayLose` bigint(255) NULL DEFAULT 0 COMMENT '今日总输分',
  `TodayWl2` bigint(255) NULL DEFAULT 0 COMMENT '今日总输赢   总赢-总输',
  `TodayRewardrate` decimal(10, 2) NULL DEFAULT NULL COMMENT '今日返奖率  ',
  `TodayTax` bigint(255) NULL DEFAULT 0 COMMENT '今日总明税',
  `CumWl` bigint(255) NULL DEFAULT 0 COMMENT '累计输赢',
  `CumBet` bigint(255) NULL DEFAULT 0 COMMENT '总投注',
  `CumRewardRate` decimal(10, 2) NULL DEFAULT NULL COMMENT '累计返奖率',
  `UserStatus` bigint(255) NULL DEFAULT 0 COMMENT '玩家状态',
  `LastLoginTime` datetime(0) NULL DEFAULT NULL,
  `Updatetime` datetime(0) NULL DEFAULT NULL,
  `ZeroHourgGold` bigint(255) NULL DEFAULT 0 COMMENT '每日0时记录金币',
  PRIMARY KEY (`UserId`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tchannelsdata
-- ----------------------------
DROP TABLE IF EXISTS `tchannelsdata`;
CREATE TABLE `tchannelsdata`  (
  `Id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `CreateDateTime` datetime(0) NULL DEFAULT NULL COMMENT '日期',
  `TotalReg` int(11) NULL DEFAULT NULL COMMENT '总注册',
  `Signin` int(11) NULL DEFAULT NULL COMMENT '注册登录',
  `OneGame` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '1局以上',
  `ThreeGame` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '3局以上',
  `SixGame` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '6局以上',
  `LoginUserNum` int(11) NULL DEFAULT NULL COMMENT '用户登录活跃数',
  `OldUserRate` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '老用户Rate',
  `PayEXValReg` longtext CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL COMMENT '首日付费/有效注册',
  `IncomeEXAcReg` longtext CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL COMMENT '累计收入/累计注册',
  `Retained2th` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '一日留存（第二天有登录的人/总注册）',
  `Retained3th` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '三日留存（第四天有登录的人/总注册）',
  `Retained7th` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '七日留存（第八天有登录的人/总注册）',
  `ChannelsID` int(11) NULL DEFAULT 0 COMMENT '渠道Id',
  `Retained2thCount` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '一日留存',
  `Retained3thCount` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '三日留存',
  `Retained7thCount` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '七日留存',
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 805 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tchatlog
-- ----------------------------
DROP TABLE IF EXISTS `tchatlog`;
CREATE TABLE `tchatlog`  (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NULL DEFAULT NULL,
  `BarrageContent` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  `BarrageType` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `BarrageMoney` int(11) NULL DEFAULT NULL,
  `tableId` int(11) NULL DEFAULT NULL,
  `RoomId` int(11) NULL DEFAULT NULL,
  `GameId` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6837648 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tclub
-- ----------------------------
DROP TABLE IF EXISTS `tclub`;
CREATE TABLE `tclub`  (
  `idx` int(11) NOT NULL,
  `UserId` int(11) NULL DEFAULT NULL,
  `State` int(11) NULL DEFAULT NULL,
  `CreateDate` datetime(0) NULL DEFAULT NULL,
  `childs` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `Title` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `limitcount` int(11) NULL DEFAULT NULL,
  `search` bit(1) NULL DEFAULT NULL,
  `manager` bit(1) NULL DEFAULT NULL,
  `gold` bigint(20) NULL DEFAULT NULL,
  `diam` bigint(20) NULL DEFAULT NULL,
  `applyUserID` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `Loc` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `lv` int(11) NULL DEFAULT NULL,
  `closeapply` bit(1) NULL DEFAULT NULL,
  `Content` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `applyGoldList` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `alliancid` int(11) NULL DEFAULT NULL,
  `fundnum` bigint(20) NULL DEFAULT NULL,
  `clubIcon` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `FreeModify` int(11) NULL DEFAULT NULL,
  `jackpot` bigint(20) NULL DEFAULT NULL,
  `inspot` bigint(20) NULL DEFAULT NULL,
  `losemax` bigint(20) NULL DEFAULT NULL,
  `historylose` bigint(20) NULL DEFAULT NULL,
  `totalinspot` bigint(20) NULL DEFAULT NULL,
  `totalRax` bigint(20) NULL DEFAULT NULL,
  `servicefee` bigint(20) NULL DEFAULT NULL,
  `floor` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `member` int(11) NULL DEFAULT NULL,
  `floors` int(11) NULL DEFAULT NULL,
  `data` int(11) NULL DEFAULT NULL,
  `notice` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `splits` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `AgentCount` int(11) NULL DEFAULT NULL,
  `insRate` bigint(20) NULL DEFAULT NULL,
  `Fund` bigint(20) NULL DEFAULT NULL,
  `cgoldRate` bigint(20) NULL DEFAULT NULL,
  `reward` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  PRIMARY KEY (`idx`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tcluballiance
-- ----------------------------
DROP TABLE IF EXISTS `tcluballiance`;
CREATE TABLE `tcluballiance`  (
  `idx` int(11) NOT NULL,
  `UserId` int(11) NULL DEFAULT NULL,
  `State` int(11) NULL DEFAULT NULL,
  `CreateDate` datetime(0) NULL DEFAULT NULL,
  `childs` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `Title` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `Content` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `limitcount` int(11) NULL DEFAULT NULL,
  `search` bit(1) NULL DEFAULT NULL,
  `manager` bit(1) NULL DEFAULT NULL,
  `gold` bigint(20) NULL DEFAULT NULL,
  `diam` bigint(20) NULL DEFAULT NULL,
  `applyclubidx` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `lv` int(11) NULL DEFAULT NULL,
  `closeapply` bit(1) NULL DEFAULT NULL,
  `clubid` int(11) NULL DEFAULT NULL,
  `IsSupper` bit(1) NULL DEFAULT NULL,
  `jackpot` bigint(20) NULL DEFAULT NULL,
  `inspot` bigint(20) NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '密码',
  `appsecret` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '密钥',
  `Fund` bigint(20) NULL DEFAULT NULL,
  `insRate` bigint(20) NULL DEFAULT NULL,
  `Rate` bigint(20) NULL DEFAULT NULL,
  `cgold` bigint(20) NULL DEFAULT NULL,
  `cgoldRate` bigint(20) NULL DEFAULT NULL,
  `bankinfo` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  PRIMARY KEY (`idx`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tclubapplylog
-- ----------------------------
DROP TABLE IF EXISTS `tclubapplylog`;
CREATE TABLE `tclubapplylog`  (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NULL DEFAULT NULL,
  `applyType` int(11) NULL DEFAULT NULL,
  `Status` int(11) NULL DEFAULT NULL,
  `applyTime` datetime(0) NULL DEFAULT NULL,
  `clubId` bigint(20) NULL DEFAULT NULL,
  `ownClubId` int(11) NULL DEFAULT NULL,
  `message` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `ClubCode` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tclubfundlog
-- ----------------------------
DROP TABLE IF EXISTS `tclubfundlog`;
CREATE TABLE `tclubfundlog`  (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `ClubId` int(11) NULL DEFAULT NULL,
  `fnum` bigint(20) NULL DEFAULT NULL,
  `Price` int(11) NULL DEFAULT NULL,
  `ChangeType` int(11) NULL DEFAULT NULL,
  `UserId` int(11) NULL DEFAULT NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  `BalanNum` bigint(20) NULL DEFAULT NULL,
  `fundtotal` bigint(20) NULL DEFAULT NULL,
  `Role` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tclubgoldlog
-- ----------------------------
DROP TABLE IF EXISTS `tclubgoldlog`;
CREATE TABLE `tclubgoldlog`  (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `ChangeType` int(11) NULL DEFAULT NULL,
  `BeforeGold` double NULL DEFAULT NULL,
  `Gold` bigint(20) NULL DEFAULT NULL,
  `AfterGold` bigint(20) NULL DEFAULT NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  `ClubId` int(11) NULL DEFAULT NULL,
  `Remark` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `UserId` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tclubjackpotlog
-- ----------------------------
DROP TABLE IF EXISTS `tclubjackpotlog`;
CREATE TABLE `tclubjackpotlog`  (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `GameId` int(11) NULL DEFAULT NULL,
  `clubid` int(11) NULL DEFAULT NULL,
  `UserId` int(11) NULL DEFAULT NULL,
  `Gold` bigint(20) NULL DEFAULT NULL,
  `JackpotType` int(11) NULL DEFAULT NULL,
  `tnum` int(11) NULL DEFAULT NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  `allid` bigint(20) NULL DEFAULT NULL,
  `BetIns` bigint(20) NULL DEFAULT NULL COMMENT '购买的金额',
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tclubjackpotlog
-- ----------------------------
DROP TABLE IF EXISTS `tclubjackpotlog`;
CREATE TABLE `tclubjackpotlog`  (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `GameId` int(11) NULL DEFAULT NULL,
  `clubid` int(11) NULL DEFAULT NULL,
  `UserId` int(11) NULL DEFAULT NULL,
  `Gold` bigint(20) NULL DEFAULT NULL,
  `JackpotType` int(11) NULL DEFAULT NULL,
  `tnum` int(11) NULL DEFAULT NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  `allid` bigint(20) NULL DEFAULT NULL,
  `BetIns` bigint(20) NULL DEFAULT NULL COMMENT '购买的金额',
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tclublevel
-- ----------------------------
DROP TABLE IF EXISTS `tclublevel`;
CREATE TABLE `tclublevel`  (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `type` int(11) NULL DEFAULT NULL,
  `level` int(11) NULL DEFAULT NULL,
  `diamond` bigint(20) NULL DEFAULT NULL,
  `maxMember` int(11) NULL DEFAULT NULL,
  `maxadmin` int(11) NULL DEFAULT NULL,
  `expireTime` int(11) NULL DEFAULT NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tclubtaxlog
-- ----------------------------
DROP TABLE IF EXISTS `tclubtaxlog`;
CREATE TABLE `tclubtaxlog`  (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `gameid` int(11) NULL DEFAULT NULL,
  `clubid` int(11) NULL DEFAULT NULL,
  `allid` int(11) NULL DEFAULT NULL,
  `gold` bigint(20) NULL DEFAULT NULL,
  `totalgold` bigint(20) NULL DEFAULT NULL,
  `tnum` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tclubusergoldlog
-- ----------------------------
DROP TABLE IF EXISTS `tclubusergoldlog`;
CREATE TABLE `tclubusergoldlog`  (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `ClubId` int(11) NULL DEFAULT NULL,
  `UserId` int(11) NULL DEFAULT NULL,
  `BeforeGold` double NULL DEFAULT NULL,
  `Gold` bigint(20) NULL DEFAULT NULL,
  `AfterGold` bigint(20) NULL DEFAULT NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  `Remark` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `ChangeType` int(11) NULL DEFAULT NULL,
  `RoomNum` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tcollectlog
-- ----------------------------
DROP TABLE IF EXISTS `tcollectlog`;
CREATE TABLE `tcollectlog`  (
  `Id` varchar(100) CHARACTER SET gbk COLLATE gbk_chinese_ci NOT NULL,
  `sceneInfo` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `sceneUserInfo` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `UserId` int(11) NULL DEFAULT NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  `tnum` int(11) NULL DEFAULT NULL,
  `infoId` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `baserate` int(11) NULL DEFAULT NULL,
  `gNum` int(11) NULL DEFAULT NULL,
  `totalnum` int(11) NULL DEFAULT NULL,
  `WinUserId` int(11) NULL DEFAULT NULL,
  `WinGold` bigint(20) NULL DEFAULT NULL,
  `seeNum` int(11) NULL DEFAULT NULL,
  `NoGiveupNum` int(11) NULL DEFAULT NULL,
  `maxPoker` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `OwnSpair` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `OwnWin` bigint(20) NULL DEFAULT NULL,
  `preG` int(11) NULL DEFAULT NULL,
  `PlayerList` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `showCard` int(11) NULL DEFAULT NULL,
  `compoker` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `maxPot` bigint(20) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tcommodity
-- ----------------------------
DROP TABLE IF EXISTS `tcommodity`;
CREATE TABLE `tcommodity`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `introduce` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `exchangeValue` double NULL DEFAULT NULL,
  `commodityType` int(11) NULL DEFAULT NULL,
  `url` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  `isEnable` bit(1) NULL DEFAULT NULL,
  `commodityvValue` float NULL DEFAULT NULL,
  `Discount` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `ClubCount` int(11) NULL DEFAULT NULL,
  `TableCount` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tcompete
-- ----------------------------
DROP TABLE IF EXISTS `tcompete`;
CREATE TABLE `tcompete`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `config` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `ranking` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `clearinfo` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `create` datetime(0) NULL DEFAULT NULL,
  `EndTime` datetime(0) NULL DEFAULT NULL,
  `prizes` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `StartTime` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tcompeterelation
-- ----------------------------
DROP TABLE IF EXISTS `tcompeterelation`;
CREATE TABLE `tcompeterelation`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `competeid` int(11) NULL DEFAULT NULL,
  `playerid` int(11) NULL DEFAULT NULL,
  `IsEnable` bit(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `unique_index`(`competeid`, `playerid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tcompetitionconfig
-- ----------------------------
DROP TABLE IF EXISTS `tcompetitionconfig`;
CREATE TABLE `tcompetitionconfig`  (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `blindsconfigId` int(11) NULL DEFAULT NULL COMMENT '盲注表id',
  `level` int(255) NULL DEFAULT NULL COMMENT '等级',
  `Minblind` int(255) NULL DEFAULT NULL COMMENT '小盲',
  `Maxblind` int(255) NULL DEFAULT NULL COMMENT '大盲',
  `pregamble` int(255) NULL DEFAULT NULL COMMENT '前注',
  `CreateDate` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tdailytask
-- ----------------------------
DROP TABLE IF EXISTS `tdailytask`;
CREATE TABLE `tdailytask`  (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `gameid` int(11) NULL DEFAULT NULL COMMENT '游戏ID',
  `levelid` int(11) NULL DEFAULT NULL COMMENT '房间ID',
  `taskName` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '任务名称',
  `taskAttribute` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '任务属性',
  `taskType` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '任务类型',
  `taskDesc` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '任务描述',
  `number` int(11) NULL DEFAULT NULL COMMENT '完成局数',
  `bonusScheme` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '奖励方案',
  `gold` int(11) NULL DEFAULT NULL COMMENT '金币',
  `upper` int(11) NULL DEFAULT NULL COMMENT '上限',
  `receiveMode` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '接收方式',
  `isStart` int(11) NULL DEFAULT NULL COMMENT '是否启用',
  `lottery` int(11) NULL DEFAULT NULL COMMENT '奖券',
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tdiamondchangelog
-- ----------------------------
DROP TABLE IF EXISTS `tdiamondchangelog`;
CREATE TABLE `tdiamondchangelog`  (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NULL DEFAULT NULL,
  `BeforeGold` double NULL DEFAULT NULL,
  `Gold` double NULL DEFAULT NULL,
  `AfterGold` double NULL DEFAULT NULL,
  `ChangeType` int(11) NULL DEFAULT NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  `Remark` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for temail
-- ----------------------------
DROP TABLE IF EXISTS `temail`;
CREATE TABLE `temail`  (
  `TradeNo` varchar(100) CHARACTER SET gbk COLLATE gbk_chinese_ci NOT NULL,
  `FromUserId` int(11) NULL DEFAULT NULL,
  `ToUserId` int(11) NULL DEFAULT NULL,
  `MailType` int(11) NULL DEFAULT NULL,
  `Content` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `State` int(11) NULL DEFAULT NULL,
  `CreateDate` datetime(0) NULL DEFAULT NULL,
  `Attach` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `CState` int(11) NULL DEFAULT NULL,
  `IsLook` bit(1) NULL DEFAULT NULL,
  `EmailType` int(11) NULL DEFAULT NULL,
  `Title` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `FromUserName` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  PRIMARY KEY (`TradeNo`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for temp_entityhistory
-- ----------------------------
DROP TABLE IF EXISTS `temp_entityhistory`;
CREATE TABLE `temp_entityhistory`  (
  `Key` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NOT NULL,
  `Value` longblob NULL,
  PRIMARY KEY (`Key`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for texchangelog
-- ----------------------------
DROP TABLE IF EXISTS `texchangelog`;
CREATE TABLE `texchangelog`  (
  `Id` varchar(100) CHARACTER SET gbk COLLATE gbk_chinese_ci NOT NULL,
  `CommodityId` int(11) NULL DEFAULT NULL,
  `UserId` int(11) NULL DEFAULT NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  `isHandle` bit(1) NULL DEFAULT NULL,
  `oddNumbers` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `expressNumbers` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `commodityType` int(11) NULL DEFAULT NULL,
  `QRCodeUrl` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `exchangeCount` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for texchangelog
-- ----------------------------
DROP TABLE IF EXISTS `texchangelog`;
CREATE TABLE `texchangelog`  (
  `Id` varchar(100) CHARACTER SET gbk COLLATE gbk_chinese_ci NOT NULL,
  `CommodityId` int(11) NULL DEFAULT NULL,
  `UserId` int(11) NULL DEFAULT NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  `isHandle` bit(1) NULL DEFAULT NULL,
  `oddNumbers` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `expressNumbers` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `commodityType` int(11) NULL DEFAULT NULL,
  `QRCodeUrl` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `exchangeCount` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for textenconfig
-- ----------------------------
DROP TABLE IF EXISTS `textenconfig`;
CREATE TABLE `textenconfig`  (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `stime` datetime(0) NULL DEFAULT NULL,
  `etime` datetime(0) NULL DEFAULT NULL,
  `tvalues` int(11) NULL DEFAULT NULL,
  `des` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for textengoldlog
-- ----------------------------
DROP TABLE IF EXISTS `textengoldlog`;
CREATE TABLE `textengoldlog`  (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NULL DEFAULT NULL,
  `Gold` double NULL DEFAULT NULL,
  `ChangeType` int(11) NULL DEFAULT NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  `PlatGold` int(11) NULL DEFAULT NULL,
  `ClubGold` int(11) NULL DEFAULT NULL,
  `AllidGold` int(11) NULL DEFAULT NULL,
  `allidid` int(11) NULL DEFAULT NULL,
  `clubid` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tgamecollect
-- ----------------------------
DROP TABLE IF EXISTS `tgamecollect`;
CREATE TABLE `tgamecollect`  (
  `Id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `GameId` int(11) NULL DEFAULT NULL COMMENT '游戏id',
  `UserId` int(11) NULL DEFAULT NULL COMMENT '玩家id',
  `Type` int(255) NULL DEFAULT NULL COMMENT '1 收藏 2 喜爱',
  `Createtime` datetime(0) NULL DEFAULT NULL COMMENT '收藏时间',
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tgameinfo
-- ----------------------------
DROP TABLE IF EXISTS `tgameinfo`;
CREATE TABLE `tgameinfo`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `modifyUser` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `modifyTime` datetime(0) NULL DEFAULT NULL,
  `Sort` int(11) NULL DEFAULT NULL,
  `isHot` int(11) NULL DEFAULT NULL,
  `desc` varchar(1000) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `isopen` bit(1) NULL DEFAULT NULL,
  `type` int(11) NULL DEFAULT NULL,
  `gameurl` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `port` int(11) NULL DEFAULT NULL,
  `gameRule` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `icon` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `gameIntroduce` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `isEnable` bit(1) NULL DEFAULT NULL,
  `isEnableDesc` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `deleteState` bit(1) NULL DEFAULT NULL,
  `gameType` int(11) NULL DEFAULT NULL,
  `gameIp` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `gamePort` int(11) NULL DEFAULT NULL,
  `platType` int(11) NULL DEFAULT 2 COMMENT '平台',
  `jdbType` int(11) NULL DEFAULT NULL,
  `IsRun` int(11) NULL DEFAULT 1,
  `onlyapp` int(11) NULL DEFAULT NULL COMMENT '是否是应用程序',
  `volatility` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL COMMENT '波动率',
  `returnrate` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL COMMENT '返还率',
  `winningrate` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL COMMENT '最高赢奖倍率',
  `gamesize` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL COMMENT '游戏大小',
  `firstsize` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL COMMENT '首次加载大小',
  `support` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL COMMENT '支持平台',
  `language` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL COMMENT '语言',
  `GameVersion` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 950004 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tgamelevelinfo
-- ----------------------------
DROP TABLE IF EXISTS `tgamelevelinfo`;
CREATE TABLE `tgamelevelinfo`  (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `Baserate` int(11) NULL DEFAULT NULL,
  `gameid` int(11) NULL DEFAULT NULL,
  `_min` int(11) NULL DEFAULT NULL,
  `_max` int(11) NULL DEFAULT NULL,
  `onlineCount` int(11) NULL DEFAULT NULL,
  `openTableCount` int(11) NULL DEFAULT NULL,
  `gametype` int(11) NULL DEFAULT NULL,
  `gametypeDesc` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `isEnable` int(11) NULL DEFAULT NULL,
  `isEnableDesc` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `deleteState` int(11) NULL DEFAULT NULL,
  `modifyUser` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `modifyTime` datetime(0) NULL DEFAULT NULL,
  `Description` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `RobotCount` int(11) NULL DEFAULT NULL,
  `LevelType` int(11) NULL DEFAULT NULL,
  `pconut` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9500032 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tgameuserrank
-- ----------------------------
DROP TABLE IF EXISTS `tgameuserrank`;
CREATE TABLE `tgameuserrank`  (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NULL DEFAULT NULL,
  `UserName` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `TotalHand` int(11) NULL DEFAULT NULL,
  `Rank` int(11) NULL DEFAULT NULL,
  `RankType` int(11) NULL DEFAULT NULL,
  `Prize` int(11) NULL DEFAULT NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  `No` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `GameId` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tgangcardlog
-- ----------------------------
DROP TABLE IF EXISTS `tgangcardlog`;
CREATE TABLE `tgangcardlog`  (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `TableLogIdx` bigint(20) NULL DEFAULT NULL,
  `UserID` int(11) NULL DEFAULT NULL,
  `CreateDate` datetime(0) NULL DEFAULT NULL,
  `Lng` float NULL DEFAULT NULL,
  `Lat` float NULL DEFAULT NULL,
  `_win` bit(1) NULL DEFAULT NULL,
  `Bet` bigint(20) NULL DEFAULT NULL,
  `IP` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tgoldchangelog
-- ----------------------------
DROP TABLE IF EXISTS `tgoldchangelog`;
CREATE TABLE `tgoldchangelog`  (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NULL DEFAULT NULL,
  `BeforeGold` double NULL DEFAULT NULL,
  `gamble` bigint(20) NULL DEFAULT NULL,
  `Gold` double NULL DEFAULT NULL,
  `AfterGold` double NULL DEFAULT NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  `GameId` int(11) NULL DEFAULT NULL,
  `IsRobot` bit(1) NULL DEFAULT NULL,
  `ChangeType` int(11) NULL DEFAULT NULL,
  `Remark` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `clubid` int(11) NULL DEFAULT NULL,
  `tnum` int(11) NULL DEFAULT NULL,
  `tax` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE,
  INDEX `UserId`(`UserId`, `ChangeType`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1511495 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tgoldchangestatistics
-- ----------------------------
DROP TABLE IF EXISTS `tgoldchangestatistics`;
CREATE TABLE `tgoldchangestatistics`  (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UserID` int(11) NULL DEFAULT NULL,
  `gameid` int(11) NULL DEFAULT NULL,
  `currWater` bigint(20) NULL DEFAULT NULL,
  `totalWater` bigint(20) NULL DEFAULT NULL,
  `UpdateTime` datetime(0) NULL DEFAULT NULL,
  `IsRebate` int(11) NULL DEFAULT NULL,
  `ClubID` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tgoldeverydaysum
-- ----------------------------
DROP TABLE IF EXISTS `tgoldeverydaysum`;
CREATE TABLE `tgoldeverydaysum`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `number` int(11) NULL DEFAULT NULL COMMENT '总人数',
  `beforegold` varchar(19) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '之前金额',
  `aftergold` varchar(19) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '之后的金额',
  `totaltax` varchar(19) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '收税值',
  `createtime` datetime(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 439 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci COMMENT = '每日统计 玩家输赢' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for th5menu
-- ----------------------------
DROP TABLE IF EXISTS `th5menu`;
CREATE TABLE `th5menu`  (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Parentid` int(11) NULL DEFAULT NULL,
  `Name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Icon` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Isdisplay` int(255) NULL DEFAULT NULL,
  `Sort` int(255) NULL DEFAULT NULL,
  `Url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `CareatTime` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 40 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tjackpot
-- ----------------------------
DROP TABLE IF EXISTS `tjackpot`;
CREATE TABLE `tjackpot`  (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `gameid` int(11) NULL DEFAULT NULL,
  `jackpot` bigint(20) NULL DEFAULT NULL,
  `historygambleall` bigint(20) NULL DEFAULT NULL,
  `income` bigint(20) NULL DEFAULT NULL,
  `pump` int(11) NULL DEFAULT NULL,
  `waterproof` int(11) NULL DEFAULT NULL,
  `isEnable` int(11) NULL DEFAULT NULL,
  `isEnableDesc` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `deleteState` int(11) NULL DEFAULT NULL,
  `modifyUser` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `modifyTime` datetime(0) NULL DEFAULT NULL,
  `Description` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `rax` bigint(20) NULL DEFAULT NULL,
  `handsel` int(11) NULL DEFAULT NULL,
  `levelid` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 80091 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tjackpotlog
-- ----------------------------
DROP TABLE IF EXISTS `tjackpotlog`;
CREATE TABLE `tjackpotlog`  (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `GameId` int(11) NULL DEFAULT NULL,
  `RoomId` int(11) NULL DEFAULT NULL,
  `UserId` int(11) NULL DEFAULT NULL,
  `Gold` bigint(20) NULL DEFAULT NULL,
  `JackpotType` int(11) NULL DEFAULT NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  `ChangeType` int(11) NULL DEFAULT NULL,
  `tnum` int(11) NULL DEFAULT NULL,
  `Owner` int(11) NULL DEFAULT NULL,
  `IsSettlement` bit(1) NULL DEFAULT NULL,
  `clubid` int(11) NULL DEFAULT NULL,
  `allid` int(11) NULL DEFAULT NULL,
  `BetIns` bigint(20) NULL DEFAULT NULL COMMENT '购买金额',
  `PlatGold` bigint(20) NULL DEFAULT NULL,
  `ShouPair` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1475441 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tjackpotaddlog
-- ----------------------------
DROP TABLE IF EXISTS `tjackpotaddlog`;
CREATE TABLE `tjackpotaddlog`  (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `GameId` int(11) NULL DEFAULT NULL,
  `TableID` int(11) NULL DEFAULT NULL,
  `Gold` bigint(20) NULL DEFAULT NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  `RoomID` int(11) NULL DEFAULT NULL,
  `beforeGold` bigint(20) NULL DEFAULT NULL,
  `afterGold` bigint(20) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tjackpotlog
-- ----------------------------
DROP TABLE IF EXISTS `tjackpotlog`;
CREATE TABLE `tjackpotlog`  (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `GameId` int(11) NULL DEFAULT NULL,
  `RoomId` int(11) NULL DEFAULT NULL,
  `UserId` int(11) NULL DEFAULT NULL,
  `Gold` bigint(20) NULL DEFAULT NULL,
  `JackpotType` int(11) NULL DEFAULT NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  `ChangeType` int(11) NULL DEFAULT NULL,
  `tnum` int(11) NULL DEFAULT NULL,
  `Owner` int(11) NULL DEFAULT NULL,
  `IsSettlement` bit(1) NULL DEFAULT NULL,
  `clubid` int(11) NULL DEFAULT NULL,
  `allid` int(11) NULL DEFAULT NULL,
  `BetIns` bigint(20) NULL DEFAULT NULL COMMENT '购买金额',
  `PlatGold` bigint(20) NULL DEFAULT NULL,
  `ShouPair` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1475441 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tjackpotstock
-- ----------------------------
DROP TABLE IF EXISTS `tjackpotstock`;
CREATE TABLE `tjackpotstock`  (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `gameid` int(11) NULL DEFAULT NULL,
  `isEnable` int(11) NULL DEFAULT NULL,
  `isEnableDesc` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `deleteState` int(11) NULL DEFAULT NULL,
  `modifyUser` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `modifyTime` datetime(0) NULL DEFAULT NULL,
  `Description` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `pump` int(11) NULL DEFAULT NULL,
  `waterproof` int(11) NULL DEFAULT NULL,
  `historygambleall` bigint(20) NULL DEFAULT NULL,
  `income` bigint(20) NULL DEFAULT NULL,
  `rax` bigint(20) NULL DEFAULT NULL,
  `handsel` int(11) NULL DEFAULT NULL,
  `stock` bigint(20) NULL DEFAULT NULL,
  `levelid` int(11) NULL DEFAULT NULL,
  `outcomes` bigint(20) NULL DEFAULT NULL,
  `balanceScore` bigint(20) NULL DEFAULT NULL,
  `initstock` bigint(20) NULL DEFAULT NULL,
  `Tax` bigint(20) NULL DEFAULT NULL,
  `OpenTax` bigint(20) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 152 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tjackpotstocklog
-- ----------------------------
DROP TABLE IF EXISTS `tjackpotstocklog`;
CREATE TABLE `tjackpotstocklog`  (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `GameId` int(11) NULL DEFAULT NULL,
  `Levelid` int(11) NULL DEFAULT NULL,
  `UserId` int(11) NULL DEFAULT NULL,
  `WinGold` bigint(20) NULL DEFAULT NULL,
  `JackpotScore` bigint(20) NULL DEFAULT NULL,
  `Income` bigint(20) NULL DEFAULT NULL,
  `Outcomes` bigint(20) NULL DEFAULT NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  `RaxScore` int(11) NULL DEFAULT NULL,
  `RoomId` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1728 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tlotterybetinfo
-- ----------------------------
DROP TABLE IF EXISTS `tlotterybetinfo`;
CREATE TABLE `tlotterybetinfo`  (
  `idx` bigint(20) NOT NULL AUTO_INCREMENT,
  `gameid` int(11) NULL DEFAULT NULL,
  `userid` int(11) NULL DEFAULT NULL,
  `betNum` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `betScore` int(11) NULL DEFAULT NULL,
  `lotteryID` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `lotteryStatus` int(11) NULL DEFAULT NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  `UpdateTime` datetime(0) NULL DEFAULT NULL,
  `lotteryType` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`idx`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 218 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tlotteryclose
-- ----------------------------
DROP TABLE IF EXISTS `tlotteryclose`;
CREATE TABLE `tlotteryclose`  (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `closedate` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `desc` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `lotteryType` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tlotteryhistory
-- ----------------------------
DROP TABLE IF EXISTS `tlotteryhistory`;
CREATE TABLE `tlotteryhistory`  (
  `Id` int(11) NOT NULL,
  `set` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `value` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `open_time` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `twod` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `stock_date` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `stock_datetime` datetime(0) NULL DEFAULT NULL,
  `history_id` int(11) NULL DEFAULT NULL,
  `liveset` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `livevalue` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `livetime` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `livetwod` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `livedate` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `lotteryType` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tlotterytrendings
-- ----------------------------
DROP TABLE IF EXISTS `tlotterytrendings`;
CREATE TABLE `tlotterytrendings`  (
  `Id` int(11) NOT NULL,
  `Bet1` bigint(20) NULL DEFAULT NULL,
  `Bet2` bigint(20) NULL DEFAULT NULL,
  `Bet3` bigint(20) NULL DEFAULT NULL,
  `Bet4` bigint(20) NULL DEFAULT NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  `num` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `lotteryType` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tmatch
-- ----------------------------
DROP TABLE IF EXISTS `tmatch`;
CREATE TABLE `tmatch`  (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `MatchName` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `MatchNum` int(11) NULL DEFAULT NULL,
  `MatchMaxNum` int(11) NULL DEFAULT NULL,
  `StartTime` datetime(0) NULL DEFAULT NULL,
  `EndTime` datetime(0) NULL DEFAULT NULL,
  `EntryFee` int(11) NULL DEFAULT NULL,
  `MinBonus` int(11) NULL DEFAULT NULL,
  `MatchType` int(11) NULL DEFAULT NULL,
  `MatchIds` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `IsOverdue` int(11) NULL DEFAULT NULL,
  `SignupUser` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `MatchDes` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `banner` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `tablemax` int(11) NULL DEFAULT NULL,
  `initialBet` int(11) NULL DEFAULT NULL,
  `addBlind` int(11) NULL DEFAULT NULL,
  `ReviveCount` int(11) NULL DEFAULT NULL,
  `matchlavel` int(11) NULL DEFAULT NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  `Title` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `ApplyNum` int(11) NULL DEFAULT NULL,
  `ApplyMaxNum` int(11) NULL DEFAULT NULL,
  `NntryFee` int(11) NULL DEFAULT NULL,
  `JackpotAmount` int(11) NULL DEFAULT NULL,
  `BdJackpot` int(11) NULL DEFAULT NULL,
  `IsEnble` int(11) NULL DEFAULT NULL,
  `Desc` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `PicUrl` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `TableNum` int(11) NULL DEFAULT NULL,
  `MinNum` int(11) NULL DEFAULT NULL,
  `StartChip` int(11) NULL DEFAULT NULL,
  `BlindRiseTime` int(11) NULL DEFAULT NULL,
  `RestTime` int(11) NULL DEFAULT NULL,
  `Bonus` int(11) NULL DEFAULT NULL,
  `IsDelay` bit(1) NULL DEFAULT NULL,
  `ResurgenceNum` int(11) NULL DEFAULT NULL,
  `CreatDate` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tmatchblind
-- ----------------------------
DROP TABLE IF EXISTS `tmatchblind`;
CREATE TABLE `tmatchblind`  (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `matchlavel` int(11) NULL DEFAULT NULL,
  `smallblind` int(11) NULL DEFAULT NULL,
  `bigblind` int(11) NULL DEFAULT NULL,
  `PreGamble` int(11) NULL DEFAULT NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tnotice
-- ----------------------------
DROP TABLE IF EXISTS `tnotice`;
CREATE TABLE `tnotice`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `content` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `noticetime` datetime(0) NULL DEFAULT NULL,
  `_author` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `_type` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `isStart` int(11) NULL DEFAULT NULL,
  `TcPicUrl` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `Width` int(11) NULL DEFAULT NULL,
  `Height` int(11) NULL DEFAULT NULL,
  `triggerType` int(11) NULL DEFAULT NULL,
  `marqueeType` int(11) NULL DEFAULT NULL,
  `triggerWhere` int(11) NULL DEFAULT NULL,
  `starttime` datetime(0) NULL DEFAULT NULL,
  `endtime` datetime(0) NULL DEFAULT NULL,
  `interval` int(11) NULL DEFAULT NULL,
  `remark` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `author` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tonlineinfo
-- ----------------------------
DROP TABLE IF EXISTS `tonlineinfo`;
CREATE TABLE `tonlineinfo`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `GameId` int(11) NULL DEFAULT NULL,
  `GameType` int(11) NULL DEFAULT NULL,
  `OnlineCount` int(11) NULL DEFAULT NULL,
  `RoomId` int(11) NULL DEFAULT NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  `GameModel` int(11) NULL DEFAULT NULL,
  `rCount` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tpropconfig
-- ----------------------------
DROP TABLE IF EXISTS `tpropconfig`;
CREATE TABLE `tpropconfig`  (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `PropID` int(11) NULL DEFAULT NULL,
  `UseType` int(11) NULL DEFAULT NULL,
  `PropType` int(11) NULL DEFAULT NULL,
  `PropName` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `Desc` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `PropCount` int(11) NULL DEFAULT NULL,
  `Gold` int(11) NULL DEFAULT NULL,
  `ImgUrl` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `Config` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for trank
-- ----------------------------
DROP TABLE IF EXISTS `trank`;
CREATE TABLE `trank`  (
  `UserID` int(11) NOT NULL,
  `UserName` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `ScoreWin` int(11) NULL DEFAULT NULL,
  `CreateDate` datetime(0) NULL DEFAULT NULL,
  `ScoreLost` int(11) NULL DEFAULT NULL,
  `records` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  PRIMARY KEY (`UserID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tredenvelopesconfig
-- ----------------------------
DROP TABLE IF EXISTS `tredenvelopesconfig`;
CREATE TABLE `tredenvelopesconfig`  (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `Money` decimal(18, 4) NULL DEFAULT NULL,
  `Rate` decimal(18, 4) NULL DEFAULT NULL,
  `TaskType` int(11) NULL DEFAULT NULL,
  `CreateDate` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tredenvelopeslog
-- ----------------------------
DROP TABLE IF EXISTS `tredenvelopeslog`;
CREATE TABLE `tredenvelopeslog`  (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NULL DEFAULT NULL,
  `TaskType` int(11) NULL DEFAULT NULL,
  `Money` int(11) NULL DEFAULT NULL,
  `CreateDate` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tredenvelopesreceivelog
-- ----------------------------
DROP TABLE IF EXISTS `tredenvelopesreceivelog`;
CREATE TABLE `tredenvelopesreceivelog`  (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NULL DEFAULT NULL,
  `TaskId` bigint(20) NULL DEFAULT NULL,
  `TaskType` int(11) NULL DEFAULT NULL,
  `Count` int(11) NULL DEFAULT NULL,
  `BeforeCount` int(11) NULL DEFAULT NULL,
  `CreateDate` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tredenvelopestask
-- ----------------------------
DROP TABLE IF EXISTS `tredenvelopestask`;
CREATE TABLE `tredenvelopestask`  (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `TaskName` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `TaskType` int(11) NULL DEFAULT NULL,
  `TaskCount` int(11) NULL DEFAULT NULL,
  `RedEnvCount` int(11) NULL DEFAULT NULL,
  `CreateDate` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tserverconfig
-- ----------------------------
DROP TABLE IF EXISTS `tserverconfig`;
CREATE TABLE `tserverconfig`  (
  `ServerId` int(11) NOT NULL,
  `ServerName` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `ServerIP` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `ServerPort` int(11) NULL DEFAULT NULL,
  `InternalIP` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `Priority` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`ServerId`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tslotconfig
-- ----------------------------
DROP TABLE IF EXISTS `tslotconfig`;
CREATE TABLE `tslotconfig`  (
  `Id` int(11) NOT NULL,
  `RoomID` int(11) NULL DEFAULT NULL,
  `Config` text CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `UpdateTime` datetime(0) NULL DEFAULT NULL,
  `GameID` int(11) NULL DEFAULT NULL,
  `Levelid` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tsysconfig
-- ----------------------------
DROP TABLE IF EXISTS `tsysconfig`;
CREATE TABLE `tsysconfig`  (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Key` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `Val` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `Dec` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 342 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ttablelog
-- ----------------------------
DROP TABLE IF EXISTS `ttablelog`;
CREATE TABLE `ttablelog`  (
  `Idx` bigint(20) NOT NULL AUTO_INCREMENT,
  `MatchCode` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `StartTime` datetime(0) NULL DEFAULT NULL,
  `EndTime` datetime(0) NULL DEFAULT NULL,
  `gameid` int(11) NULL DEFAULT NULL,
  `_isover` bit(1) NULL DEFAULT NULL,
  `levelid` int(11) NULL DEFAULT NULL,
  `userid` int(11) NULL DEFAULT NULL,
  `userids` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `bet` bigint(20) NULL DEFAULT NULL,
  `bets` bigint(20) NULL DEFAULT NULL,
  PRIMARY KEY (`Idx`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 789446 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ttablerecorkmjlog
-- ----------------------------
DROP TABLE IF EXISTS `ttablerecorkmjlog`;
CREATE TABLE `ttablerecorkmjlog`  (
  `Idx` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `MatchCode` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  `actions` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `HistoryId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `RecordUser` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `uids` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `gameid` int(11) NULL DEFAULT NULL,
  `TableInfo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`Idx`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ttableuserlog
-- ----------------------------
DROP TABLE IF EXISTS `ttableuserlog`;
CREATE TABLE `ttableuserlog`  (
  `Idx` bigint(20) NOT NULL AUTO_INCREMENT,
  `TableLogIdx` bigint(20) NULL DEFAULT NULL,
  `UserID` int(11) NULL DEFAULT NULL,
  `_pos` int(11) NULL DEFAULT NULL,
  `gold` decimal(18, 4) NULL DEFAULT NULL,
  `_cardList` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `gameid` int(11) NULL DEFAULT NULL,
  `_isover` bit(1) NULL DEFAULT NULL,
  `_isWatch` int(11) NULL DEFAULT NULL,
  `_win` bit(1) NULL DEFAULT NULL,
  `CreateDate` datetime(0) NULL DEFAULT NULL,
  `trendIdx` bigint(20) NULL DEFAULT NULL,
  `mystake` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `Bet` bigint(20) NULL DEFAULT NULL,
  `levelid` int(11) NULL DEFAULT NULL,
  `basegamle` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`Idx`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ttablegainlog
-- ----------------------------
DROP TABLE IF EXISTS `ttablegainlog`;
CREATE TABLE `ttablegainlog`  (
  `Idx` bigint(20) NOT NULL AUTO_INCREMENT,
  `MatchCode` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `StartTime` datetime(0) NULL DEFAULT NULL,
  `EndTime` datetime(0) NULL DEFAULT NULL,
  `gameid` int(11) NULL DEFAULT NULL,
  `_isover` bit(1) NULL DEFAULT NULL,
  `gcount` int(11) NULL DEFAULT NULL,
  `jackpot` int(11) NULL DEFAULT NULL,
  `ChildAgents` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  PRIMARY KEY (`Idx`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ttablehistorylog
-- ----------------------------
DROP TABLE IF EXISTS `ttablehistorylog`;
CREATE TABLE `ttablehistorylog`  (
  `Id` varchar(100) CHARACTER SET gbk COLLATE gbk_chinese_ci NOT NULL,
  `gameid` int(11) NULL DEFAULT NULL,
  `RoomNum` int(11) NULL DEFAULT NULL,
  `plist` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `whirltlist` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `CreatTime` datetime(0) NULL DEFAULT NULL,
  `textlist` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `BigEndList` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `mjlist` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `bg` int(11) NULL DEFAULT NULL,
  `uids` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `clubid` int(11) NULL DEFAULT NULL,
  `allid` int(11) NULL DEFAULT NULL,
  `tableName` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `Starttime` datetime(0) NULL DEFAULT NULL,
  `GameDetails` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ttablehistorylog
-- ----------------------------
DROP TABLE IF EXISTS `ttablehistorylog`;
CREATE TABLE `ttablehistorylog`  (
  `Id` varchar(100) CHARACTER SET gbk COLLATE gbk_chinese_ci NOT NULL,
  `gameid` int(11) NULL DEFAULT NULL,
  `RoomNum` int(11) NULL DEFAULT NULL,
  `plist` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `whirltlist` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `CreatTime` datetime(0) NULL DEFAULT NULL,
  `textlist` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `BigEndList` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `mjlist` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `bg` int(11) NULL DEFAULT NULL,
  `uids` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `clubid` int(11) NULL DEFAULT NULL,
  `allid` int(11) NULL DEFAULT NULL,
  `tableName` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `Starttime` datetime(0) NULL DEFAULT NULL,
  `GameDetails` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ttablelist
-- ----------------------------
DROP TABLE IF EXISTS `ttablelist`;
CREATE TABLE `ttablelist`  (
  `idx` bigint(20) NOT NULL,
  `tableNum` int(11) NULL DEFAULT NULL,
  `gameid` int(11) NULL DEFAULT NULL,
  `levelid` int(11) NULL DEFAULT NULL,
  `createTime` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `maxCount` int(11) NULL DEFAULT NULL,
  `curCount` int(11) NULL DEFAULT NULL,
  `ownerId` int(11) NULL DEFAULT NULL,
  `tableStatus` int(11) NULL DEFAULT NULL,
  `tableid` int(11) NULL DEFAULT NULL,
  `Duration` int(11) NULL DEFAULT NULL,
  `firstinto` int(11) NULL DEFAULT NULL,
  `baserate` int(11) NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `minPlayerCount` int(11) NULL DEFAULT NULL,
  `para` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `data` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `floorid` int(11) NULL DEFAULT NULL,
  `mjpara` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `ClubIdx` int(11) NULL DEFAULT NULL,
  `tname` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `manNum` int(11) NULL DEFAULT NULL,
  `cinto` bit(1) NULL DEFAULT NULL,
  `allId` int(11) NULL DEFAULT NULL,
  `openplay` bit(1) NULL DEFAULT NULL,
  PRIMARY KEY (`idx`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ttablelog
-- ----------------------------
DROP TABLE IF EXISTS `ttablelog`;
CREATE TABLE `ttablelog`  (
  `Idx` bigint(20) NOT NULL AUTO_INCREMENT,
  `MatchCode` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `StartTime` datetime(0) NULL DEFAULT NULL,
  `EndTime` datetime(0) NULL DEFAULT NULL,
  `gameid` int(11) NULL DEFAULT NULL,
  `_isover` bit(1) NULL DEFAULT NULL,
  `levelid` int(11) NULL DEFAULT NULL,
  `userid` int(11) NULL DEFAULT NULL,
  `userids` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `bet` bigint(20) NULL DEFAULT NULL,
  `bets` bigint(20) NULL DEFAULT NULL,
  PRIMARY KEY (`Idx`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 789446 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ttablerecorkmjlog
-- ----------------------------
DROP TABLE IF EXISTS `ttablerecorkmjlog`;
CREATE TABLE `ttablerecorkmjlog`  (
  `Idx` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `MatchCode` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  `actions` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `HistoryId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `RecordUser` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `uids` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `gameid` int(11) NULL DEFAULT NULL,
  `TableInfo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`Idx`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ttableuserlog
-- ----------------------------
DROP TABLE IF EXISTS `ttableuserlog`;
CREATE TABLE `ttableuserlog`  (
  `Idx` bigint(20) NOT NULL AUTO_INCREMENT,
  `TableLogIdx` bigint(20) NULL DEFAULT NULL,
  `UserID` int(11) NULL DEFAULT NULL,
  `_pos` int(11) NULL DEFAULT NULL,
  `gold` decimal(18, 4) NULL DEFAULT NULL,
  `_cardList` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `gameid` int(11) NULL DEFAULT NULL,
  `_isover` bit(1) NULL DEFAULT NULL,
  `_isWatch` int(11) NULL DEFAULT NULL,
  `_win` bit(1) NULL DEFAULT NULL,
  `CreateDate` datetime(0) NULL DEFAULT NULL,
  `trendIdx` bigint(20) NULL DEFAULT NULL,
  `mystake` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `Bet` bigint(20) NULL DEFAULT NULL,
  `levelid` int(11) NULL DEFAULT NULL,
  `basegamle` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`Idx`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ttask
-- ----------------------------
DROP TABLE IF EXISTS `ttask`;
CREATE TABLE `ttask`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `type` int(11) NULL DEFAULT NULL,
  `condition` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `award` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `remark` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `CreateDate` datetime(0) NULL DEFAULT NULL,
  `level` int(11) NULL DEFAULT NULL,
  `showtype` int(11) NULL DEFAULT NULL,
  `InternalID` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `pic` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `EndTime` datetime(0) NULL DEFAULT NULL,
  `IsEnable` bit(1) NULL DEFAULT b'1',
  `issueAwardType` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ttaskcompletioninfo
-- ----------------------------
DROP TABLE IF EXISTS `ttaskcompletioninfo`;
CREATE TABLE `ttaskcompletioninfo`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NULL DEFAULT NULL,
  `taskid` int(11) NULL DEFAULT NULL,
  `IsReceive` bit(1) NULL DEFAULT NULL,
  `CreateDate` datetime(0) NULL DEFAULT NULL,
  `IsEnable` bit(1) NULL DEFAULT NULL,
  `AGold` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ttaskstatistics
-- ----------------------------
DROP TABLE IF EXISTS `ttaskstatistics`;
CREATE TABLE `ttaskstatistics`  (
  `userid` int(11) NOT NULL AUTO_INCREMENT,
  `RechargeCount` int(11) NULL DEFAULT NULL,
  `RechargeAmount` int(11) NULL DEFAULT NULL,
  `JoinGameCount` int(11) NULL DEFAULT NULL,
  `WinCount` int(11) NULL DEFAULT NULL,
  `LoseCount` int(11) NULL DEFAULT NULL,
  `UseEmoticonCount` int(11) NULL DEFAULT NULL,
  `ChangeGameDeskCount` int(11) NULL DEFAULT NULL,
  `ChangeAvatarFrameCount` int(11) NULL DEFAULT NULL,
  `ModifyNameCount` int(11) NULL DEFAULT NULL,
  `JoinTexasCount` int(11) NULL DEFAULT NULL,
  `JoinAMHCount` int(11) NULL DEFAULT NULL,
  `TexasMaxWinningStreak` int(11) NULL DEFAULT NULL,
  `LastSigninTime` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`userid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ttaxlog
-- ----------------------------
DROP TABLE IF EXISTS `ttaxlog`;
CREATE TABLE `ttaxlog`  (
  `Idx` bigint(20) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NULL DEFAULT NULL,
  `BeforCoin` bigint(20) NULL DEFAULT NULL,
  `ActionCoin` double NULL DEFAULT NULL,
  `AfterCoin` bigint(20) NULL DEFAULT NULL,
  `ActionType` int(11) NULL DEFAULT NULL,
  `SourceGameID` int(11) NULL DEFAULT NULL,
  `SourceUserId` int(11) NULL DEFAULT NULL,
  `CreateDate` datetime(0) NULL DEFAULT NULL,
  `TableUserLogId` bigint(20) NULL DEFAULT NULL,
  `IsHandel` bit(1) NULL DEFAULT NULL,
  `_lv` int(11) NULL DEFAULT NULL,
  `SourceRoomID` int(11) NULL DEFAULT NULL,
  `clubidx` int(11) NULL DEFAULT NULL,
  `allid` int(11) NULL DEFAULT NULL,
  `PlatCoin` double NULL DEFAULT NULL,
  `UserWater` bigint(20) NULL DEFAULT NULL,
  PRIMARY KEY (`Idx`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 20812 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ttexascowboyagentgold
-- ----------------------------
DROP TABLE IF EXISTS `ttexascowboyagentgold`;
CREATE TABLE `ttexascowboyagentgold`  (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `WaterSocre` bigint(20) NOT NULL DEFAULT 0 COMMENT '今日流水',
  `AgentGold` bigint(20) NOT NULL DEFAULT 0 COMMENT '进入返利金额',
  `CreateDate` date NULL DEFAULT NULL COMMENT '创建日期',
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 258 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '德州牛仔分红表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ttexascowtablelog
-- ----------------------------
DROP TABLE IF EXISTS `ttexascowtablelog`;
CREATE TABLE `ttexascowtablelog`  (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NULL DEFAULT NULL,
  `Gameble` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `WinScore` bigint(20) NULL DEFAULT NULL,
  `Result` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  `IsRobot` bit(1) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ttradeinfo
-- ----------------------------
DROP TABLE IF EXISTS `ttradeinfo`;
CREATE TABLE `ttradeinfo`  (
  `TradeNo` varchar(100) CHARACTER SET gbk COLLATE gbk_chinese_ci NOT NULL COMMENT '交易号',
  `FromUserId` int(11) NULL DEFAULT NULL COMMENT '出自用户id',
  `ToUserId` int(11) NULL DEFAULT NULL COMMENT '去往用户id',
  `Coin` bigint(20) NULL DEFAULT NULL COMMENT '硬币',
  `TaxCoin` bigint(20) NULL DEFAULT NULL COMMENT '税收硬币',
  `State` int(11) NULL DEFAULT NULL COMMENT '状态',
  `CreateDate` datetime(0) NULL DEFAULT NULL COMMENT '时间',
  `TradeType` int(11) NULL DEFAULT NULL COMMENT '交易类型',
  `Diamond` bigint(20) NULL DEFAULT NULL COMMENT '钻石',
  `TaxDiamond` bigint(20) NULL DEFAULT NULL COMMENT '税收钻石',
  PRIMARY KEY (`TradeNo`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tuser
-- ----------------------------
DROP TABLE IF EXISTS `tuser`;
CREATE TABLE `tuser`  (
  `UserID` int(11) NOT NULL,
  `wechatName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Gold` bigint(20) NULL DEFAULT NULL,
  `GoldA` decimal(18, 4) NULL DEFAULT NULL,
  `LastLotinTime1` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `LastLotinTime2` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `RegTime` datetime(0) NULL DEFAULT NULL,
  `IP` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `Desc` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `isRobot` int(11) NULL DEFAULT NULL,
  `Status` int(11) NULL DEFAULT NULL,
  `diamond` bigint(20) NULL DEFAULT NULL,
  `isagent` int(11) NULL DEFAULT NULL,
  `wechatHeadIcon` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `Sex` int(11) NULL DEFAULT NULL,
  `TotalMoney` decimal(18, 4) NOT NULL DEFAULT 0.0000,
  `totaldiamond` bigint(20) NULL DEFAULT NULL,
  `lockTime` varchar(30) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `winpercent` int(11) NULL DEFAULT NULL,
  `BankGold` bigint(20) NULL DEFAULT NULL,
  `vlevel` int(11) NULL DEFAULT NULL,
  `givecount` int(11) NULL DEFAULT NULL,
  `MaxLose` bigint(20) NULL DEFAULT NULL,
  `MaxWin` bigint(20) NULL DEFAULT NULL,
  `MaxGold` bigint(20) NULL DEFAULT NULL,
  `TotalGold` bigint(20) NULL DEFAULT NULL,
  `showid` int(11) NULL DEFAULT NULL,
  `lat` float NULL DEFAULT NULL,
  `lng` float NULL DEFAULT NULL,
  `UserPassword` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `IsTp` int(11) NULL DEFAULT 0,
  `lv` int(11) NULL DEFAULT NULL,
  `IsJdb` int(11) NULL DEFAULT 0,
  `UpTotalAmount` bigint(20) NULL DEFAULT NULL,
  `RobotGameid` int(11) NULL DEFAULT NULL,
  `clublist` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `clubpwd` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `clubProtect` int(11) NULL DEFAULT NULL,
  `Userremark` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `DgLimit` int(11) NULL DEFAULT NULL,
  `DgTotalScore` bigint(20) NULL DEFAULT NULL,
  `DgCurrScore` bigint(20) NULL DEFAULT NULL,
  `ControlLimitRatio` int(11) NULL DEFAULT 100,
  `ControlEndRatio` int(11) NULL DEFAULT 50,
  `UserName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `UserMoney` decimal(18, 4) NULL DEFAULT NULL,
  `UserMaxMoney` decimal(18, 4) NULL DEFAULT NULL,
  `DgCreateTime` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `RetailID` int(11) NULL DEFAULT 0,
  `VipWaterScore` int(11) NULL DEFAULT NULL,
  `UserExp` bigint(20) NULL DEFAULT NULL,
  `TodayUserExp` int(11) NULL DEFAULT NULL,
  `StatisticsTime` datetime(0) NULL DEFAULT NULL,
  `currBetScore` int(11) NULL DEFAULT NULL,
  `WinGold` bigint(20) NULL DEFAULT NULL,
  PRIMARY KEY (`UserID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tuserinfoex
-- ----------------------------
DROP TABLE IF EXISTS `tuserinfoex`;
CREATE TABLE `tuserinfoex`  (
  `UserID` int(11) NOT NULL,
  `clubpwd` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `clubProtect` int(11) NULL DEFAULT NULL,
  `Userremark` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `applyUsers` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  `freeCount` int(11) NULL DEFAULT NULL,
  `MobilePhoneNum` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `alipayName` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `alipayNum` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `BankUn` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `BankNum` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `BankName` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `bPhone` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `aPhone` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `BankProvince` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `BankCity` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `BankBranch` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `expiredate` datetime(0) NULL DEFAULT NULL,
  `vipLv` int(11) NULL DEFAULT NULL,
  `cTable` int(11) NULL DEFAULT NULL,
  `cClub` int(11) NULL DEFAULT NULL,
  `VipTime` datetime(0) NULL DEFAULT NULL,
  `BackPack` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `HeadIcos` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `HeadFrame` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `ReportInfo` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `vipExp` int(11) NULL DEFAULT NULL,
  `vipScore` int(11) NULL DEFAULT NULL,
  `AwardStatus` int(11) NULL DEFAULT NULL,
  `ReceiveMonthAwardTime` datetime(0) NULL DEFAULT NULL,
  `EnterGameTime` datetime(0) NULL DEFAULT NULL,
  `PracticeTimes` int(11) NULL DEFAULT NULL,
  `SigninData` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `bNewPlayer` bit(1) NULL DEFAULT NULL,
  `WinGold` bigint(20) NULL DEFAULT NULL,
  `SlotFree` text CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  PRIMARY KEY (`UserID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tuseragent2019
-- ----------------------------
DROP TABLE IF EXISTS `tuseragent2019`;
CREATE TABLE `tuseragent2019`  (
  `UserID` int(11) NOT NULL,
  `Lv` int(11) NULL DEFAULT NULL,
  `FUserID` int(11) NULL DEFAULT NULL,
  `TopUserID` int(11) NULL DEFAULT NULL,
  `SecondUserID` int(11) NULL DEFAULT NULL,
  `GoldHistoryCommission` double NULL DEFAULT NULL,
  `GoldCommission` double NULL DEFAULT NULL,
  `GoldC_pot` double NULL DEFAULT NULL,
  `QRPath` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `Code` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `HtmlUrl` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `lastdealtime` datetime(0) NULL DEFAULT NULL,
  `watergoldadd` bigint(20) NULL DEFAULT NULL,
  `watergoldreduce` bigint(20) NULL DEFAULT NULL,
  `childwater` bigint(20) NULL DEFAULT NULL,
  `ChildAgents` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `todayCardCount` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`UserID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tuseragent2021
-- ----------------------------
DROP TABLE IF EXISTS `tuseragent2021`;
CREATE TABLE `tuseragent2021`  (
  `ID` bigint(11) NOT NULL AUTO_INCREMENT,
  `UserID` int(11) NOT NULL,
  `cidx` int(11) NULL DEFAULT NULL,
  `Lv` int(11) NULL DEFAULT NULL,
  `FUserID` int(11) NULL DEFAULT NULL,
  `TopUserID` int(11) NULL DEFAULT NULL,
  `GoldHistoryCommission` double NULL DEFAULT NULL,
  `GoldCommission` double NULL DEFAULT NULL,
  `QRPath` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `Code` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `lastdealtime` datetime(0) NULL DEFAULT NULL,
  `watergoldadd` bigint(20) NULL DEFAULT NULL,
  `watergoldreduce` bigint(20) NULL DEFAULT NULL,
  `childwater` bigint(20) NULL DEFAULT NULL,
  `rate` int(11) NULL DEFAULT NULL,
  `ChildAgents` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `todayCardCount` int(11) NULL DEFAULT NULL,
  `_gWater` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 201 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tuseragent2021relation
-- ----------------------------
DROP TABLE IF EXISTS `tuseragent2021relation`;
CREATE TABLE `tuseragent2021relation`  (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ParentID` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `cidx` int(11) NOT NULL,
  `water` bigint(20) NULL DEFAULT NULL,
  `income` double NULL DEFAULT NULL,
  `tIncome` double NULL DEFAULT NULL,
  `lv` int(11) NULL DEFAULT NULL,
  `CreatTime` datetime(0) NULL DEFAULT NULL,
  `rate` int(11) NULL DEFAULT NULL,
  `showrate` int(11) NULL DEFAULT NULL,
  `IsAgent` int(11) NULL DEFAULT NULL,
  `Code` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `lastdealtime` datetime(0) NULL DEFAULT NULL,
  `GoldHistoryCommission` double NULL DEFAULT NULL,
  `GoldCommission` double NULL DEFAULT NULL,
  `AgentCount` int(11) NULL DEFAULT NULL,
  `Fund` bigint(20) NULL DEFAULT NULL,
  `insRate` bigint(20) NULL DEFAULT NULL,
  `ExtenGold` double NULL DEFAULT NULL,
  `IsReceiveExten` int(11) NULL DEFAULT NULL,
  `IsReceiveOwnExten` int(11) NULL DEFAULT NULL,
  `IsDel` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5478072 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tuseragentlog
-- ----------------------------
DROP TABLE IF EXISTS `tuseragentlog`;
CREATE TABLE `tuseragentlog`  (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NULL DEFAULT NULL,
  `Gold` bigint(20) NULL DEFAULT NULL,
  `State` int(11) NULL DEFAULT NULL,
  `CreatTime` datetime(0) NULL DEFAULT NULL,
  `Type` int(11) NULL DEFAULT NULL,
  `clubid` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tuserbackpack
-- ----------------------------
DROP TABLE IF EXISTS `tuserbackpack`;
CREATE TABLE `tuserbackpack`  (
  `Id` int(11) NOT NULL,
  `UserID` int(11) NULL DEFAULT NULL,
  `PropID` int(11) NULL DEFAULT NULL,
  `PropCount` int(11) NULL DEFAULT NULL,
  `RemoveTime` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tusercontact
-- ----------------------------
DROP TABLE IF EXISTS `tusercontact`;
CREATE TABLE `tusercontact`  (
  `Id` varchar(100) CHARACTER SET gbk COLLATE gbk_chinese_ci NOT NULL,
  `Name` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `Mobile` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `PostCode` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `Address` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `UserId` int(11) NULL DEFAULT NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  `UpdateTime` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tusergamedata
-- ----------------------------
DROP TABLE IF EXISTS `tusergamedata`;
CREATE TABLE `tusergamedata`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NULL DEFAULT NULL,
  `gameid` int(11) NULL DEFAULT NULL,
  `type` int(11) NULL DEFAULT NULL,
  `num` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3502 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tusergamehand
-- ----------------------------
DROP TABLE IF EXISTS `tusergamehand`;
CREATE TABLE `tusergamehand`  (
  `Id` varchar(100) CHARACTER SET gbk COLLATE gbk_chinese_ci NOT NULL,
  `UserId` int(11) NULL DEFAULT NULL,
  `clubid` int(11) NULL DEFAULT NULL,
  `pos1Count` decimal(18, 4) NULL DEFAULT NULL,
  `pos2Count` decimal(18, 4) NULL DEFAULT NULL,
  `pos5Count` decimal(18, 4) NULL DEFAULT NULL,
  `pos10Count` decimal(18, 4) NULL DEFAULT NULL,
  `pos20Count` decimal(18, 4) NULL DEFAULT NULL,
  `pos50Count` decimal(18, 4) NULL DEFAULT NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  `gameWinCount` int(11) NULL DEFAULT NULL,
  `gameLostCount` int(11) NULL DEFAULT NULL,
  `gameDrawCount` int(11) NULL DEFAULT NULL,
  `FillingCount` int(11) NULL DEFAULT NULL,
  `dealCardCount` int(11) NULL DEFAULT NULL,
  `todayCardCount` int(11) NULL DEFAULT NULL,
  `tablenum` int(11) NULL DEFAULT NULL,
  `lastdealtime` datetime(0) NULL DEFAULT NULL,
  `GameId` int(11) NULL DEFAULT NULL,
  `Bigblind` int(11) NULL DEFAULT NULL,
  `bet3` int(11) NULL DEFAULT NULL,
  `cbet3` int(11) NULL DEFAULT NULL,
  `drivingnum` int(11) NULL DEFAULT NULL,
  `addpoolnum` int(11) NULL DEFAULT NULL,
  `Aveinto` double NULL DEFAULT NULL,
  `AveGains` double NULL DEFAULT NULL,
  `totalCount` int(11) NULL DEFAULT NULL,
  `_gamehc` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tuserinfoex
-- ----------------------------
DROP TABLE IF EXISTS `tuserinfoex`;
CREATE TABLE `tuserinfoex`  (
  `UserID` int(11) NOT NULL,
  `clubpwd` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `clubProtect` int(11) NULL DEFAULT NULL,
  `Userremark` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `applyUsers` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  `freeCount` int(11) NULL DEFAULT NULL,
  `MobilePhoneNum` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `alipayName` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `alipayNum` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `BankUn` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `BankNum` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `BankName` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `bPhone` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `aPhone` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `BankProvince` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `BankCity` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `BankBranch` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `expiredate` datetime(0) NULL DEFAULT NULL,
  `vipLv` int(11) NULL DEFAULT NULL,
  `cTable` int(11) NULL DEFAULT NULL,
  `cClub` int(11) NULL DEFAULT NULL,
  `VipTime` datetime(0) NULL DEFAULT NULL,
  `BackPack` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `HeadIcos` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `HeadFrame` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `ReportInfo` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `vipExp` int(11) NULL DEFAULT NULL,
  `vipScore` int(11) NULL DEFAULT NULL,
  `AwardStatus` int(11) NULL DEFAULT NULL,
  `ReceiveMonthAwardTime` datetime(0) NULL DEFAULT NULL,
  `EnterGameTime` datetime(0) NULL DEFAULT NULL,
  `PracticeTimes` int(11) NULL DEFAULT NULL,
  `SigninData` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `bNewPlayer` bit(1) NULL DEFAULT NULL,
  `WinGold` bigint(20) NULL DEFAULT NULL,
  `SlotFree` text CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  PRIMARY KEY (`UserID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tuserjackpot
-- ----------------------------
DROP TABLE IF EXISTS `tuserjackpot`;
CREATE TABLE `tuserjackpot`  (
  `UserId` int(11) NOT NULL,
  `updatetime` datetime(0) NULL DEFAULT NULL,
  `watergoldadd` bigint(20) NULL DEFAULT NULL,
  `watergoldreduce` bigint(20) NULL DEFAULT NULL,
  `AllGoldBack` bigint(20) NULL DEFAULT NULL,
  `AllGoldAdd` bigint(20) NULL DEFAULT NULL,
  `_jackpot` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `_potRange` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `chargeCount` int(11) NULL DEFAULT NULL,
  `DgLoseTimes` int(11) NULL DEFAULT NULL,
  `DgTotalScore` bigint(20) NULL DEFAULT NULL,
  `DgCurrScore` bigint(20) NULL DEFAULT NULL,
  `DgStatus` int(11) NULL DEFAULT NULL,
  `EffecTiveType` int(11) NULL DEFAULT NULL,
  `DgLimit` int(11) NULL DEFAULT NULL,
  `_pot` bigint(20) NULL DEFAULT NULL,
  PRIMARY KEY (`UserId`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tuseronlinetimelog
-- ----------------------------
DROP TABLE IF EXISTS `tuseronlinetimelog`;
CREATE TABLE `tuseronlinetimelog`  (
  `Idx` bigint(20) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NULL DEFAULT NULL,
  `LogInTime` bigint(20) NULL DEFAULT NULL,
  `LogOutTime` bigint(20) NULL DEFAULT NULL,
  `gameid` int(11) NULL DEFAULT NULL,
  `levelid` int(11) NULL DEFAULT NULL,
  `HallLogInTime` bigint(20) NULL DEFAULT NULL,
  `HallLogOutTime` bigint(20) NULL DEFAULT NULL,
  `GameLogInTime` bigint(20) NULL DEFAULT NULL,
  `GameLogOutTime` bigint(20) NULL DEFAULT NULL,
  PRIMARY KEY (`Idx`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 115610 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tuserprizelog
-- ----------------------------
DROP TABLE IF EXISTS `tuserprizelog`;
CREATE TABLE `tuserprizelog`  (
  `id` varchar(100) CHARACTER SET gbk COLLATE gbk_chinese_ci NOT NULL,
  `userId` int(11) NULL DEFAULT NULL,
  `createtime` datetime(0) NULL DEFAULT NULL,
  `prizeid` int(11) NULL DEFAULT NULL,
  `turntableid` int(11) NULL DEFAULT NULL,
  `isgive` bit(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tuserproplog
-- ----------------------------
DROP TABLE IF EXISTS `tuserproplog`;
CREATE TABLE `tuserproplog`  (
  `Idx` bigint(20) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NULL DEFAULT NULL,
  `CreateDate` datetime(0) NULL DEFAULT NULL,
  `PropID` int(11) NULL DEFAULT NULL,
  `PropCount` int(11) NULL DEFAULT NULL,
  `Status` int(11) NULL DEFAULT NULL,
  `remark` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  PRIMARY KEY (`Idx`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tuserrechargelog
-- ----------------------------
DROP TABLE IF EXISTS `tuserrechargelog`;
CREATE TABLE `tuserrechargelog`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NULL DEFAULT NULL COMMENT '用户id',
  `money` decimal(18, 4) NULL DEFAULT NULL COMMENT '金额',
  `cointype` int(11) NULL DEFAULT NULL COMMENT '硬币类型',
  `fromtype` int(11) NULL DEFAULT NULL COMMENT '类型',
  `fromuserid` int(11) NULL DEFAULT NULL COMMENT '来自用户id',
  `fromadminid` int(11) NULL DEFAULT NULL COMMENT '来自管理员id',
  `remarks` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL COMMENT '备注',
  `createtime` datetime(0) NULL DEFAULT NULL COMMENT '时间',
  `oldGold` decimal(18, 4) NULL DEFAULT NULL COMMENT '原来金币',
  `currGold` decimal(18, 4) NULL DEFAULT NULL COMMENT '之后金币',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tusersummary
-- ----------------------------
DROP TABLE IF EXISTS `tusersummary`;
CREATE TABLE `tusersummary`  (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NULL DEFAULT NULL,
  `UserName` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `tnum` int(11) NULL DEFAULT NULL,
  `clubid` int(11) NULL DEFAULT NULL,
  `allid` int(11) NULL DEFAULT NULL,
  `Gains` bigint(20) NULL DEFAULT NULL,
  `Insurance` bigint(20) NULL DEFAULT NULL,
  `BranchIns` bigint(20) NULL DEFAULT NULL,
  `totalTax` bigint(20) NULL DEFAULT NULL,
  `servicefee` bigint(20) NULL DEFAULT NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  `TaxShare` bigint(20) NULL DEFAULT NULL,
  `TableName` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `GameId` int(11) NULL DEFAULT NULL,
  `Owners` int(11) NULL DEFAULT NULL,
  `level` int(11) NULL DEFAULT NULL,
  `pnum` int(11) NULL DEFAULT NULL,
  `preG` int(11) NULL DEFAULT NULL,
  `gametype` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tusertaskdata
-- ----------------------------
DROP TABLE IF EXISTS `tusertaskdata`;
CREATE TABLE `tusertaskdata`  (
  `userid` int(11) NOT NULL,
  `RechargeCount` int(11) NULL DEFAULT NULL,
  `RechargeAmount` int(11) NULL DEFAULT NULL,
  `ShareCount` int(11) NULL DEFAULT NULL,
  `ChangeAvatarCount` int(11) NULL DEFAULT NULL,
  `ChangeNameCount` int(11) NULL DEFAULT NULL,
  `UseEmoticonCount` int(11) NULL DEFAULT NULL,
  `ChangeGameDeskCount` int(11) NULL DEFAULT NULL,
  `ChangeAvatarFrameCount` int(11) NULL DEFAULT NULL,
  `ModifyNameCount` int(11) NULL DEFAULT NULL,
  `LastSigninTime` datetime(0) NULL DEFAULT NULL,
  `UserLev` int(11) NULL DEFAULT NULL COMMENT '人物等级',
  `UserVipLev` int(11) NULL DEFAULT NULL COMMENT ' VIP等级',
  `BindAccount` int(11) NULL DEFAULT NULL COMMENT '绑定账号',
  `BindBank` int(11) NULL DEFAULT NULL COMMENT '绑定银行',
  `BankDepositCount` int(11) NULL DEFAULT NULL COMMENT ' 银行存款次数',
  `BankDepositScore` int(11) NULL DEFAULT NULL COMMENT '银行存款金额',
  PRIMARY KEY (`userid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tusertaskkv
-- ----------------------------
DROP TABLE IF EXISTS `tusertaskkv`;
CREATE TABLE `tusertaskkv`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NULL DEFAULT NULL,
  `gameid` int(11) NULL DEFAULT NULL,
  `type` int(11) NULL DEFAULT NULL,
  `num` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8898 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tuservipfreecount
-- ----------------------------
DROP TABLE IF EXISTS `tuservipfreecount`;
CREATE TABLE `tuservipfreecount`  (
  `id` varchar(100) CHARACTER SET gbk COLLATE gbk_chinese_ci NOT NULL,
  `userid` int(11) NULL DEFAULT NULL,
  `vipid` int(11) NULL DEFAULT NULL,
  `freecount` int(11) NULL DEFAULT NULL,
  `createtime` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tuservipinfo
-- ----------------------------
DROP TABLE IF EXISTS `tuservipinfo`;
CREATE TABLE `tuservipinfo`  (
  `id` varchar(100) CHARACTER SET gbk COLLATE gbk_chinese_ci NOT NULL,
  `userid` int(11) NULL DEFAULT NULL,
  `vipid` int(11) NULL DEFAULT NULL,
  `expiredate` datetime(0) NULL DEFAULT NULL,
  `vipLv` int(11) NULL DEFAULT NULL,
  `cTable` int(11) NULL DEFAULT NULL,
  `cClub` int(11) NULL DEFAULT NULL,
  `CreateTime` datetime(0) NULL DEFAULT NULL,
  `vipExp` int(11) NULL DEFAULT NULL,
  `vipScore` int(11) NULL DEFAULT NULL,
  `AwardStatus` int(11) NULL DEFAULT NULL,
  `ReceiveMonthAwardTime` datetime(0) NULL DEFAULT NULL,
  `EnterGameTime` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tvipauth
-- ----------------------------
DROP TABLE IF EXISTS `tvipauth`;
CREATE TABLE `tvipauth`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vipid` int(11) NULL DEFAULT NULL,
  `authid` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tvipconfig
-- ----------------------------
DROP TABLE IF EXISTS `tvipconfig`;
CREATE TABLE `tvipconfig`  (
  `Id` int(11) NOT NULL,
  `UpExps` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `DropExps` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `UpRule` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `Discount` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `UpReward` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `MonthReward` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `FreeWithdrawTimes` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `WithdrawLimit` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `MonthDay` int(11) NULL DEFAULT NULL,
  `ValidBetScore` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tvipinfo
-- ----------------------------
DROP TABLE IF EXISTS `tvipinfo`;
CREATE TABLE `tvipinfo`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `viplevel` int(11) NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL,
  `commodid` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tvipprizelog
-- ----------------------------
DROP TABLE IF EXISTS `tvipprizelog`;
CREATE TABLE `tvipprizelog`  (
  `id` varchar(100) CHARACTER SET gbk COLLATE gbk_chinese_ci NOT NULL,
  `userId` int(11) NULL DEFAULT NULL,
  `createtime` datetime(0) NULL DEFAULT NULL,
  `prizeid` int(11) NULL DEFAULT NULL,
  `turntableid` int(11) NULL DEFAULT NULL,
  `isgive` bit(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for tvisitlimit
-- ----------------------------
DROP TABLE IF EXISTS `tvisitlimit`;
CREATE TABLE `tvisitlimit`  (
  `ipport` varchar(100) CHARACTER SET gbk COLLATE gbk_chinese_ci NOT NULL,
  `dateRecord` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `unitRcord` longtext CHARACTER SET gbk COLLATE gbk_chinese_ci NULL,
  `dateMaxLimit` int(11) NULL DEFAULT NULL,
  `unitMaxLimit` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`ipport`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for vipconfig
-- ----------------------------
DROP TABLE IF EXISTS `vipconfig`;
CREATE TABLE `vipconfig`  (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `VipLevel` int(11) NULL DEFAULT NULL COMMENT 'VIP等级',
  `UpExps` int(11) NULL DEFAULT NULL COMMENT '升级经验',
  `VipDiscount` float(11, 1) NULL DEFAULT NULL COMMENT 'VIP折扣',
  `UpReward` int(11) NULL DEFAULT NULL COMMENT '升级奖励',
  `MonthReward` int(11) NULL DEFAULT NULL COMMENT '每月奖励',
  `WithdrawLimit` int(11) NULL DEFAULT NULL COMMENT '每笔提现额度',
  `FreeWithdrawTimes` int(11) NULL DEFAULT NULL COMMENT '每日免费提现次数',
  `CreateDate` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for vipdropexps
-- ----------------------------
DROP TABLE IF EXISTS `vipdropexps`;
CREATE TABLE `vipdropexps`  (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Day` int(11) NULL DEFAULT NULL COMMENT '日期',
  `Exps` int(11) NULL DEFAULT NULL COMMENT '经验值',
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for vipruleinfo
-- ----------------------------
DROP TABLE IF EXISTS `vipruleinfo`;
CREATE TABLE `vipruleinfo`  (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `BigRate` int(11) NULL DEFAULT NULL,
  `SmallRate` int(11) NULL DEFAULT NULL COMMENT '小盲',
  `GameTimes` int(11) NULL DEFAULT NULL,
  `Exp` int(11) NULL DEFAULT NULL,
  `GameType` int(11) NULL DEFAULT NULL COMMENT '游戏类型(0 德州扑克  1:小游戏)',
  `Water` int(11) NULL DEFAULT NULL COMMENT '流水',
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
