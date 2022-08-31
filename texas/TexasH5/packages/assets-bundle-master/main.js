"use strict";
var path = require("path");
var fs = require("fs");

var IPC = require("./core/IPC");
var AssetsBundle = require("./core/AssetsBundle");
var AutoAtlasUtils = require("./core/AutoAtlasUtils");
// 重新编译 main.js 追加设置搜索路径逻辑
function reBuildMainJs(buildOptions) {
    let buildDestPath = buildOptions.dest;
    var root = path.normalize(buildDestPath);
    var url = path.join(root, "main.js");
    let data = fs.readFileSync(url, "utf8");
    if (data && typeof data === "string") {
        var newStr =
            "\n" +
            "if (window.jsb) { \n" +
            " jsb.fileUtils.addSearchPath( ((jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + 'remoteSubGame/'), true ); \n" +
            "    let hotUpdateSearchPaths = localStorage.getItem('HotUpdateHall'); \n" +
            "    if (hotUpdateSearchPaths) { \n" +
            "       jsb.fileUtils.addSearchPath( ((jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + 'assets/'), true ); \n" +
            "    } \n" +
            "    console.log('basePath:'+(jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/')); \n" +
            "    if(jsb.fileUtils){ \n" +
            "       console.log('searchPaths:'+JSON.stringify(jsb.fileUtils.getSearchPaths()));  \n" +
            "    } \n" +
            "    console.log('jsb.fileUtils.Path: addSearchPath!!!'); \n" +
            "}\n";
        var newData = newStr + data;
        fs.writeFileSync(url, newData, "utf8");

        Editor.log("[assets-bundle]:: 'HotUpdateSearchPaths' updated in built " + url);
    }
}

module.exports = {
    load() {
        // Editor.log("加载成功, 项目编译时请始终保持此插件同时打开");
        Editor.Builder.on("build-finished", this.onBuildFinished);
        Editor.Builder.on("build-start", this.onBuildStart);
        Editor.Panel.open("assets-bundle");
    },

    unload() {
        Editor.Builder.removeListener("build-finished", this.onBuildFinished);
        Editor.Builder.removeListener("build-start", this.onBuildStart);
    },

    /**编译开始 */
    async onBuildStart(options, callback) {
        if (!Editor.Panel.findWindow("assets-bundle")) {
            callback();
            return;
        }
        // 动态设置子包 并获取子包配置信息
        try {
            let [error] = await IPC.sendToPanel("onBuildStart");
            error && Editor.error(error);
        } catch (error) {
            Editor.error(error);
        }

        callback();
    },

    async onBuildFinished(options, callback) {
        if (!Editor.Panel.findWindow("assets-bundle")) {
            callback();
            return;
        }
        var buildResults = options.buildResults;

        Editor.success("step5 assets-bundle main onBuildFinished");
        Editor.success(":::::: 开始打包资源 ::::::");
        try {
            let autoAtlasInfo;
            if ("如果自动图集分离存在问题,直接注释if即可") {
                autoAtlasInfo = AutoAtlasUtils.getSubPackageAutoAtlas(options);
            }

            // Editor.log("编译完成:", options);
            let buildDest = options.dest;
            let platform = options.platform; // 'android',
            let _subpackages = buildResults._subpackages;
            let [error, strData] = await IPC.sendToPanel("onBuildFinished");
            if (!error) {
                /**@type {PlugConfig} */
                let plugConfig = JSON.parse(strData);
                Editor.success("step6 assets-bundle main onBuildFinished   包目录初始化");
                AssetsBundle.init(plugConfig, buildDest, _subpackages);

                Editor.log("开始校验资源安全性和私有性");
                console.log("开始校验资源安全性和私有性");
                if (await AssetsBundle.check()) {
                    Editor.log("开始打包");
                    await AssetsBundle.run(autoAtlasInfo);
                }
            }

            reBuildMainJs(options);
        } catch (error) {
            Editor.error(error);
        }

        Editor.success(":::::: 打包资源结束 ::::::");
        callback();
    },

    // register your ipc messages here
    messages: {
        open() {
            // open entry panel registered in package.json
            Editor.Panel.open("assets-bundle");
        },
    },
};
