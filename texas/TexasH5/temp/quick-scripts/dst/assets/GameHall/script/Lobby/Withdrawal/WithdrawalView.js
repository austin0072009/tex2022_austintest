
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/Withdrawal/WithdrawalView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'be228C7BjNMsLVRP9IV527T', 'WithdrawalView');
// GameHall/script/Lobby/Withdrawal/WithdrawalView.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AudioManager_1 = require("../../../../Script/BaseFrame/AudioManager");
var CommonCtr_1 = require("../../../../Script/BaseFrame/CommonCtr");
var ViewBase_1 = require("../../../../Script/BaseFrame/ViewBase");
var HttpHelpEx_1 = require("../../../../Script/Common/Managers/HttpHelpEx");
var UIUtil_1 = require("../../../../Script/Common/UIUtil");
var AppConst_1 = require("../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst");
var BaseFrameNative_1 = require("../../../../Script/BaseFrameNative");
var LobbyViewCtr_1 = require("../LobbyViewCtr");
/**
 * @description 提现
 */
var WithdrawalView = /** @class */ (function (_super) {
    __extends(WithdrawalView, _super);
    function WithdrawalView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**金币 */
        _this.ui_gold = null;
        _this.ui_btn_break = null;
        _this.ui_btn_addGold = null;
        _this.ui_btn_bindTx = null;
        _this.ui_drawal1 = null;
        /**其他提现方式 */
        _this.ui_addTxcom = null;
        /**提现申请 */
        _this.ui_Txsqcom = null;
        /**验证支付密码 */
        _this.ui_yzTxsqcom = null;
        /**添加银行卡界面 */
        _this.ui_btn_cardaddGold = null;
        _this.ui_btn_cardbreak = null;
        _this.ui_cardgold = null;
        /**绑定银行卡 */
        _this.ui_bindcard = null;
        _this.ui_cardType = null;
        _this.ui_country = null;
        _this.ui_name = null;
        _this.ui_banknum = null;
        _this.ui_bankname = null;
        _this.ui_province = null;
        _this.ui_city = null;
        _this.ui_Subbranch = null;
        _this.ui_btn_bindCard = null;
        /**提现 */
        _this.ui_btn_tx = null;
        _this.ui_txBankName = null;
        _this.ui_userzsname = null;
        _this.ui_txGoldNum = null;
        _this.ui_btn_txbreak1 = null;
        _this.ui_txjinText = null;
        _this.ui_btn_othertx = null;
        _this.ui_btn_txqren = null;
        /**提现记录 */
        _this.ui_TxRecordPanel = null;
        _this.ui_ListRecord = null;
        _this.ui_recordNext = null;
        _this.ui_recordUp = null;
        _this.ui_btn_txRecord = null;
        /**验证支付密码 */
        _this.ui_payPwd = null;
        _this.ui_btn_yzzfbreak1 = null;
        _this.ui_btn_yzquxiao = null;
        _this.ui_btn_vconfirm = null;
        _this.ui_btn_inputbg = null;
        _this.ui_pwd0 = null;
        _this.ui_pwd1 = null;
        _this.ui_pwd2 = null;
        _this.ui_pwd3 = null;
        _this.ui_pwd4 = null;
        _this.ui_pwd5 = null;
        _this.ui_inputLabel = null;
        _this.inputPwd = '';
        _this.provinceConfig = {
            1: ["北京", "上海", "重慶", "安徽", "福建", "甘肅", "廣東", "廣西", "貴州", "海南", "河北", "黑龍江",
                "河南", "香港", "湖北", "湖南", "江蘇", "江西", "吉林", "遼寧", "澳門", "內蒙古", "寧夏", "青海", "山東", "山西", "陝西",
                "四川", "臺灣", "天津", "新疆", "西藏", "雲南", "浙江"],
            2: ["北京", "上海", "重庆", "安徽", "福建", "甘肃", "广东", "广西", "贵州", "海南", "河北", "黑龙江",
                "河南", "香港", "湖北", "湖南", "江苏", "江西", "吉林", "辽宁", "澳门", "内蒙古", "宁夏", "青海", "山东", "山西", "陕西",
                "四川", "台湾", "天津", "新疆", "西藏", "云南", "浙江"],
        };
        _this.cityConfig = {
            1: [["東城區", "西城區", "崇文區", "宣武區", "朝陽區", "豐臺區", "石景山區", "海澱區", "門頭溝區", "房山區", "通州區", "順義區", "昌平區", "大興區", "懷柔區", "平穀區", "密雲縣", "延慶縣"],
                ["黃浦區", "盧灣區", "徐匯區", "長寧區", "靜安區", "普陀區", "虹口區", "楊浦區", "閔行區", "寶山區", "嘉定區", "浦東新區", "金山區", "松江區", "青浦區", "南匯區", "奉賢區", "崇明縣"],
                ["萬州區", "涪陵區", "渝中區", "大渡口區", "江北區", "沙坪壩區", "九龍坡區", "南岸區", "北碚區", "萬盛區", "雙橋區", "渝北區", "巴南區", "黔江區", "長壽區", "綦江縣", "潼南縣", "銅梁縣", "大足縣", "榮昌縣", "璧山縣", "梁平縣", "城口縣", "豐都縣", "墊江縣", "武隆縣", "忠縣", "開縣", "雲陽縣", "奉節縣", "巫山縣", "巫溪縣", "石柱土家族自治縣", "秀山土家族苗族自治縣", "酉陽土家族苗族自治縣", "彭水苗族土家族自治縣", "江津市", "合川市", "永川市", "南川市"],
                ["合肥市", "宿州市", "淮北市", "亳州市", "阜陽市", "蚌埠市", "淮南市", "滁州市", "馬鞍山市", "蕪湖市", "銅陵市", "安慶市", "黃山市", "六安市", "巢湖市", "池州市", "宣城市"],
                ["福州市", "南平市", "莆田市", "三明市", "泉州市", "廈門市", "漳州市", "龍岩市", "寧德市"],
                ["蘭州市", "嘉峪關市", "白銀市", "天水市", "武威市", "酒泉市", "張掖市", "慶陽市", "平涼市", "定西市", "隴南市", "臨夏州", "甘南州"],
                ["廣州市", "深圳市", "清遠市", "韶關市", "河源市", "梅州市", "潮州市", "汕頭市", "揭陽市", "汕尾市", "惠州市", "東莞市", "珠海市", "中山市", "江門市", "佛山市", "肇慶市", "雲浮市", "陽江市", "茂名市", "湛江市"],
                ["南寧市", "桂林市", "柳州市", "梧州市", "貴港市", "玉林市", "欽州市", "北海市", "防城港市", "崇左市", "百色市", "河池市", "來賓市", "賀州市"],
                ["貴陽市", "六盤水市", "遵義市", "安順市", "畢節地區", "銅仁地區", "黔東南州", "黔南州", "黔西南州"],
                ["海口", "儋縣", "陵水", "瓊海", "三亞", "通什", "萬寧"],
                ["石家莊市", "張家口市", "承德市", "秦皇島市", "唐山市", "廊坊市", "保定市", "衡水市", "滄州市", "邢臺市", "邯鄲市"],
                ["哈爾濱市", "齊齊哈爾市", "七臺河市", "黑河市", "大慶市", "鶴崗市", "伊春市", "佳木斯市", "雙鴨山市", "雞西市", "牡丹江市", "綏化市", "大興安嶺地區"],
                ["鄭州市", "開封市", "三門峽市", "洛陽市", "焦作市", "新鄉市", "鶴壁市", "安陽市", "濮陽市", "商丘市", "許昌市", "漯河市", "平頂山市", "南陽市", "信陽市", "周口市", "駐馬店市", "濟源市"],
                ["香港", "九龍", "新界"],
                ["武漢市", "十堰市", "襄樊市", "荊門市", "孝感市", "黃岡市", "鄂州市", "黃石市", "鹹寧市", "荊州市", "宜昌市", "隨州市", "省直轄縣級行政單位", "恩施州"],
                ["長沙市", "張家界市", "常德市", "益陽市", "岳陽市", "株洲市", "湘潭市", "衡陽市", "郴州市", "永州市", "邵陽市", "懷化市", "婁底市", "湘西州"],
                ["南京市", "徐州市", "連雲港市", "宿遷市", "淮安市", "鹽城市", "揚州市", "泰州市", "南通市", "鎮江市", "常州市", "無錫市", "蘇州市"],
                ["南昌市", "九江市", "景德鎮市", "鷹潭市", "新餘市", "萍鄉市", "贛州市", "上饒市", "撫州市", "宜春市", "吉安市"],
                ["長春市", "白城市", "松原市", "吉林市", "四平市", "遼源市", "通化市", "白山市", "延邊州"],
                ["瀋陽市", "朝陽市", "阜新市", "鐵嶺市", "撫順市", "本溪市", "遼陽市", "鞍山市", "丹東市", "大連市", "營口市", "盤錦市", "錦州市", "葫蘆島市"],
                ["澳門"],
                ["呼和浩特市", "包頭市", "烏海市", "赤峰市", "通遼市", "呼倫貝爾市", "鄂爾多斯市", "烏蘭察布市", "巴彥淖爾市", "興安盟", "錫林郭勒盟", "阿拉善盟"],
                ["銀川市", "石嘴山市", "吳忠市", "固原市", "中衛市"],
                ["西寧市", "海東地區", "海北州", "海南州", "黃南州", "果洛州", "玉樹州", "海西州"],
                ["濟南市", "青島市", "聊城市", "德州市", "東營市", "淄博市", "濰坊市", "煙臺市", "威海市", "日照市", "臨沂市", "棗莊市", "濟寧市", "泰安市", "萊蕪市", "濱州市", "菏澤市"],
                ["太原市", "朔州市", "大同市", "陽泉市", "長治市", "晉城市", "忻州市", "晉中市", "臨汾市", "呂梁市", "運城市"],
                ["西安市", "延安市", "銅川市", "渭南市", "咸陽市", "寶雞市", "漢中市", "榆林市", "安康市", "商洛市"],
                ["成都市", "廣元市", "綿陽市", "德陽市", "南充市", "廣安市", "遂寧市", "內江市", "樂山市", "自貢市", "瀘州市", "宜賓市", "攀枝花市", "巴中市", "達州市", "資陽市", "眉山市", "雅安市", "阿壩州", "甘孜州", "涼山州"],
                ["臺北", "基隆", "臺南", "臺中", "高雄", "屏東", "南投", "雲林", "新竹", "彰化", "苗栗", "嘉義", "花蓮", "桃園", "宜蘭", "臺東", "金門", "馬祖", "澎湖"],
                ["和平區", "河東區", "河西區", "南開區", "河北區", "紅橋區", "塘沽區", "漢沽區", "大港區", "東麗區", "西青區", "津南區", "北辰區", "武清區", "寶坻區", "寧河縣", "靜海縣", "薊縣"],
                ["烏魯木齊市", "克拉瑪依市", "自治區直轄縣級行政單位", "喀什地區", "阿克蘇地區", "和田地區", "吐魯番地區", "哈密地區", "克孜勒蘇柯州", "博爾塔拉州", "昌吉州", "巴音郭楞州", "伊犁州", "塔城地區", "阿勒泰地區"],
                ["拉薩市", "那曲地區", "昌都地區", "林芝地區", "山南地區", "日喀則地區", "阿裏地區"],
                ["昆明市", "曲靖市", "玉溪市", "保山市", "昭通市", "麗江市", "思茅市", "臨滄市", "德宏州", "怒江州", "迪慶州", "大理州", "楚雄州", "紅河州", "文山州", "西雙版納州"],
                ["杭州市", "湖州市", "嘉興市", "舟山市", "寧波市", "紹興市", "衢州市", "金華市", "臺州市", "溫州市", "麗水市"]
            ],
            2: [["东城区", "西城区", "崇文区", "宣武区", "朝阳区", "丰台区", "石景山区", "海淀区", "门头沟区", "房山区", "通州区", "顺义区", "昌平区", "大兴区", "怀柔区", "平谷区", "密云县", "延庆县"],
                ["黄浦区", "卢湾区", "徐汇区", "长宁区", "静安区", "普陀区", "虹口区", "杨浦区", "闵行区", "宝山区", "嘉定区", "浦东新区", "金山区", "松江区", "青浦区", "南汇区", "奉贤区", "崇明县"],
                ["万州区", "涪陵区", "渝中区", "大渡口区", "江北区", "沙坪坝区", "九龙坡区", "南岸区", "北碚区", "万盛区", "双桥区", "渝北区", "巴南区", "黔江区", "长寿区", "綦江县", "潼南县", "铜梁县", "大足县", "荣昌县", "璧山县", "梁平县", "城口县", "丰都县", "垫江县", "武隆县", "忠县", "开县", "云阳县", "奉节县", "巫山县", "巫溪县", "石柱土家族自治县", "秀山土家族苗族自治县", "酉阳土家族苗族自治县", "彭水苗族土家族自治县", "江津市", "合川市", "永川市", "南川市"],
                ["合肥市", "宿州市", "淮北市", "亳州市", "阜阳市", "蚌埠市", "淮南市", "滁州市", "马鞍山市", "芜湖市", "铜陵市", "安庆市", "黄山市", "六安市", "巢湖市", "池州市", "宣城市"],
                ["福州市", "南平市", "莆田市", "三明市", "泉州市", "厦门市", "漳州市", "龙岩市", "宁德市"],
                ["兰州市", "嘉峪关市", "白银市", "天水市", "武威市", "酒泉市", "张掖市", "庆阳市", "平凉市", "定西市", "陇南市", "临夏州", "甘南州"],
                ["广州市", "深圳市", "清远市", "韶关市", "河源市", "梅州市", "潮州市", "汕头市", "揭阳市", "汕尾市", "惠州市", "东莞市", "珠海市", "中山市", "江门市", "佛山市", "肇庆市", "云浮市", "阳江市", "茂名市", "湛江市"],
                ["南宁市", "桂林市", "柳州市", "梧州市", "贵港市", "玉林市", "钦州市", "北海市", "防城港市", "崇左市", "百色市", "河池市", "来宾市", "贺州市"],
                ["贵阳市", "六盘水市", "遵义市", "安顺市", "毕节地区", "铜仁地区", "黔东南州", "黔南州", "黔西南州"],
                ["海口", "儋县", "陵水", "琼海", "三亚", "通什", "万宁"],
                ["石家庄市", "张家口市", "承德市", "秦皇岛市", "唐山市", "廊坊市", "保定市", "衡水市", "沧州市", "邢台市", "邯郸市"],
                ["哈尔滨市", "齐齐哈尔市", "七台河市", "黑河市", "大庆市", "鹤岗市", "伊春市", "佳木斯市", "双鸭山市", "鸡西市", "牡丹江市", "绥化市", "大兴安岭地区"],
                ["郑州市", "开封市", "三门峡市", "洛阳市", "焦作市", "新乡市", "鹤壁市", "安阳市", "濮阳市", "商丘市", "许昌市", "漯河市", "平顶山市", "南阳市", "信阳市", "周口市", "驻马店市", "济源市"],
                ["香港", "九龙", "新界"],
                ["武汉市", "十堰市", "襄樊市", "荆门市", "孝感市", "黄冈市", "鄂州市", "黄石市", "咸宁市", "荆州市", "宜昌市", "随州市", "省直辖县级行政单位", "恩施州"],
                ["长沙市", "张家界市", "常德市", "益阳市", "岳阳市", "株洲市", "湘潭市", "衡阳市", "郴州市", "永州市", "邵阳市", "怀化市", "娄底市", "湘西州"],
                ["南京市", "徐州市", "连云港市", "宿迁市", "淮安市", "盐城市", "扬州市", "泰州市", "南通市", "镇江市", "常州市", "无锡市", "苏州市"],
                ["南昌市", "九江市", "景德镇市", "鹰潭市", "新余市", "萍乡市", "赣州市", "上饶市", "抚州市", "宜春市", "吉安市"],
                ["长春市", "白城市", "松原市", "吉林市", "四平市", "辽源市", "通化市", "白山市", "延边州"],
                ["沈阳市", "朝阳市", "阜新市", "铁岭市", "抚顺市", "本溪市", "辽阳市", "鞍山市", "丹东市", "大连市", "营口市", "盘锦市", "锦州市", "葫芦岛市"],
                ["澳门"],
                ["呼和浩特市", "包头市", "乌海市", "赤峰市", "通辽市", "呼伦贝尔市", "鄂尔多斯市", "乌兰察布市", "巴彦淖尔市", "兴安盟", "锡林郭勒盟", "阿拉善盟"],
                ["银川市", "石嘴山市", "吴忠市", "固原市", "中卫市"],
                ["西宁市", "海东地区", "海北州", "海南州", "黄南州", "果洛州", "玉树州", "海西州"],
                ["济南市", "青岛市", "聊城市", "德州市", "东营市", "淄博市", "潍坊市", "烟台市", "威海市", "日照市", "临沂市", "枣庄市", "济宁市", "泰安市", "莱芜市", "滨州市", "菏泽市"],
                ["太原市", "朔州市", "大同市", "阳泉市", "长治市", "晋城市", "忻州市", "晋中市", "临汾市", "吕梁市", "运城市"],
                ["西安市", "延安市", "铜川市", "渭南市", "咸阳市", "宝鸡市", "汉中市", "榆林市", "安康市", "商洛市"],
                ["成都市", "广元市", "绵阳市", "德阳市", "南充市", "广安市", "遂宁市", "内江市", "乐山市", "自贡市", "泸州市", "宜宾市", "攀枝花市", "巴中市", "达州市", "资阳市", "眉山市", "雅安市", "阿坝州", "甘孜州", "凉山州"],
                ["台北", "基隆", "台南", "台中", "高雄", "屏东", "南投", "云林", "新竹", "彰化", "苗栗", "嘉义", "花莲", "桃园", "宜兰", "台东", "金门", "马祖", "澎湖"],
                ["和平区", "河东区", "河西区", "南开区", "河北区", "红桥区", "塘沽区", "汉沽区", "大港区", "东丽区", "西青区", "津南区", "北辰区", "武清区", "宝坻区", "宁河县", "静海县", "蓟县"],
                ["乌鲁木齐市", "克拉玛依市", "自治区直辖县级行政单位", "喀什地区", "阿克苏地区", "和田地区", "吐鲁番地区", "哈密地区", "克孜勒苏柯州", "博尔塔拉州", "昌吉州", "巴音郭楞州", "伊犁州", "塔城地区", "阿勒泰地区"],
                ["拉萨市", "那曲地区", "昌都地区", "林芝地区", "山南地区", "日喀则地区", "阿里地区"],
                ["昆明市", "曲靖市", "玉溪市", "保山市", "昭通市", "丽江市", "思茅市", "临沧市", "德宏州", "怒江州", "迪庆州", "大理州", "楚雄州", "红河州", "文山州", "西双版纳州"],
                ["杭州市", "湖州市", "嘉兴市", "舟山市", "宁波市", "绍兴市", "衢州市", "金华市", "台州市", "温州市", "丽水市"]
            ],
        };
        _this.isverification = false;
        /**提现记录 */
        _this.TxRecordListData = [];
        _this.TxPageIndex = 1;
        _this.TxPageSize = 30;
        return _this;
    }
    Object.defineProperty(WithdrawalView.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WithdrawalView.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WithdrawalView.prototype, "componentName", {
        get: function () {
            return "Withdrawal";
        },
        enumerable: false,
        configurable: true
    });
    WithdrawalView.prototype.createChildComponents = function () {
        var _this = this;
        this.province = this.provinceConfig[AppConst_1.AppConst.languageType];
        this.city = this.cityConfig[AppConst_1.AppConst.languageType];
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.visible = false;
        this.ui_btn_break.onClick(this.Hide, this);
        this.ui_btn_addGold.onClick(this.toTopup, this);
        this.ui_btn_bindTx.onClick(this.bindTx, this);
        this.typeController = this.fguiComponent.getController("type");
        this.ui_btn_cardaddGold.onClick(this.toTopup, this);
        this.ui_btn_cardbreak.onClick(this.HideCard, this);
        this.ui_btn_bindCard.onClick(this.bindCard, this);
        this.ui_btn_tx.onClick(this.sendtxMessage, this);
        this.ui_btn_txbreak1.onClick(this.closeTxsq, this);
        this.ui_btn_othertx.onClick(this.showOthertx, this);
        this.ui_btn_txqren.onClick(this.closeTxsq, this);
        this.type2Controller = this.ui_payPwd.getController("c1");
        this.ui_btn_yzzfbreak1.onClick(this.closePwd, this);
        this.ui_btn_yzquxiao.onClick(this.closePwd, this);
        this.ui_btn_inputbg.onClick(this.setFocus, this);
        this.ui_inputLabel.on(fgui.Event.TEXT_CHANGE, this.changedText, this);
        this.ui_inputLabel.node.opacity = 0;
        this.ui_btn_vconfirm.onClick(this.sendConfirm, this);
        this.ui_province.on(fgui.Event.STATUS_CHANGED, this.onChanged, this);
        /**提现记录 */
        this.ui_ListRecord.itemRenderer = this.TxRecordListRender.bind(this);
        this.ui_recordNext.onClick(this.nextTxRecord.bind(this));
        this.ui_recordUp.onClick(this.upTxRecord.bind(this));
        this.ui_btn_txRecord.onClick(function () {
            _this.ShowTxRecord(true);
        });
    };
    WithdrawalView.prototype.OnLoadCompleted = function () {
        this.Show();
    };
    WithdrawalView.prototype.Hide = function () {
        AudioManager_1.AudioManager.Singleton.play('WithdrawalView', "button");
        if (this.ui_TxRecordPanel.visible) {
            this.ShowTxRecord(false);
        }
        else {
            _super.prototype.Hide.call(this);
        }
    };
    /**是否有绑定卡 */
    WithdrawalView.prototype.getMobilephonenum = function () {
        var data = LobbyViewCtr_1.default.instance.Model.mobilephonen;
        if (data.bId) {
            this.typeController.setSelectedIndex(1);
            this.ui_userzsname.text = data.bName;
            this.ui_txBankName.text = data.bank;
            this.ui_btn_txRecord.visible = true;
            this.getChild("n56").visible = true;
        }
        else { //没有绑卡
            this.typeController.setSelectedIndex(0);
            this.ui_btn_txRecord.visible = false;
            this.getChild("n56").visible = false;
        }
    };
    /**绑定银行卡 */
    WithdrawalView.prototype.bindCard = function () {
        AudioManager_1.AudioManager.Singleton.play('WithdrawalView', "button");
        if (!this.ui_name.text || !this.ui_banknum.text || !this.ui_Subbranch.text) {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("请填写完整");
            return;
        }
        //   /**1绑定支付宝   2绑定银行卡 */
        //   public t: number;
        //   /** 玩家id*/
        //   public uid: number;
        //   /**支付宝姓名  或  银行卡持有人 */
        //   public name: string;
        //   /**支付宝账号 银行卡卡号 */
        //   public account: string;
        //   /** 银行名字*/
        //   public bank: string;
        //   /**国家 */
        //   public country: string;
        //   /**开户支行 */
        //   public branch: string;
        //   /**交易密码 */
        //   public pwd: string;
        //   /**开户行所在省份 */
        //   public province: String;
        var info = { t: 2, name: '', account: '', bank: '', country: "", branch: '', province: '' };
        info.account = this.ui_banknum.text;
        info.bank = this.ui_bankname.items[this.ui_bankname.selectedIndex];
        info.country = this.ui_country.items[this.ui_country.selectedIndex];
        info.name = this.ui_name.text;
        info.branch = this.ui_Subbranch.text;
        info.province = this.ui_province.items[this.ui_province.selectedIndex] + this.ui_city.items[this.ui_city.selectedIndex];
        LobbyViewCtr_1.default.instance.cs_bindalipaybank(info);
    };
    /**发送提现消息 */
    WithdrawalView.prototype.sendtxMessage = function () {
        AudioManager_1.AudioManager.Singleton.play('WithdrawalView', "button");
        var gold = this.ui_txGoldNum.text;
        if (isNaN(+gold)) {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("填写的金额不正确");
            return;
        }
        // if (!gold || +gold < 400 || +gold > 50000) {
        //     CommonCtr.instance.ShowTipLabel("填写的金额不正确");
        //     return;
        // }
        // if (((+gold) * 100) > AppConst.mPlayerModel.gold) {
        //     CommonCtr.instance.ShowTipLabel("可提取额度不足");
        //     return;
        // }
        // vip提现额度限制
        var vipConfig = LobbyViewCtr_1.default.instance.Model.vipConfig.WithdrawLimit;
        var myVipLevel = LobbyViewCtr_1.default.instance.Model.vipLevel;
        var limitGold = vipConfig[myVipLevel];
        // if ((+gold) > limitGold) {
        //     CommonCtr.instance.ShowTipLabel("超过单笔提现额度限制");
        //     return;
        // }
        this.showPwd();
    };
    /**关闭提现提现申请 */
    WithdrawalView.prototype.closeTxsq = function () {
        AudioManager_1.AudioManager.Singleton.play('WithdrawalView', "button");
        this.ui_Txsqcom.visible = false;
    };
    /**其他提现 */
    WithdrawalView.prototype.showOthertx = function () {
        AudioManager_1.AudioManager.Singleton.play('WithdrawalView', "button");
        this.showBindCard();
    };
    /**显示验证密码 */
    WithdrawalView.prototype.showPwd = function () {
        AudioManager_1.AudioManager.Singleton.play('WithdrawalView', "button");
        var verification = cc.sys.localStorage.getItem("txverification_pwd");
        if (verification) {
            var time = Date.now();
            if ((time - verification) > 259200000) { //三天
                this.ui_Txsqcom.visible = false;
                this.ui_payPwd.visible = true;
                this.clean();
                if (AppConst_1.AppConst.mPlayerModel["UserPassword"]) {
                    this.type2Controller.setSelectedIndex(0);
                }
                else {
                    this.type2Controller.setSelectedIndex(1);
                }
                this.isverification = true;
            }
            else {
                this.verificationPwdSuc();
            }
        }
        else {
            this.isverification = true;
            this.ui_Txsqcom.visible = false;
            this.ui_payPwd.visible = true;
            this.clean();
            if (AppConst_1.AppConst.mPlayerModel["UserPassword"]) {
                this.type2Controller.setSelectedIndex(0);
            }
            else {
                this.type2Controller.setSelectedIndex(1);
            }
        }
    };
    WithdrawalView.prototype.closePwd = function () {
        AudioManager_1.AudioManager.Singleton.play('WithdrawalView', "button");
        this.ui_payPwd.visible = false;
    };
    WithdrawalView.prototype.setFocus = function () {
        this.ui_inputLabel.requestFocus();
    };
    WithdrawalView.prototype.changedText = function (event) {
        var text = this.ui_inputLabel.text;
        this.inputPwd = text;
        for (var i = 0; i < 6; i++) {
            if (i > text.length) {
                this["ui_pwd" + i].text = '';
            }
            else {
                this["ui_pwd" + i].text = text[i];
            }
        }
    };
    WithdrawalView.prototype.clean = function () {
        this.inputPwd = '';
        this.ui_inputLabel.text = '';
        for (var i = 0; i < 6; i++) {
            this["ui_pwd" + i].text = '';
        }
    };
    /**确认验证密码 */
    WithdrawalView.prototype.sendConfirm = function () {
        AudioManager_1.AudioManager.Singleton.play('WithdrawalView', "button");
        if (this.inputPwd.length != 6) {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("密碼格式不正確");
            return;
        }
        //驗證支付密碼
        var contro = this.type2Controller.selectedIndex;
        if (contro == 1) {
            LobbyViewCtr_1.default.instance.cs_changePassword_appbk('', this.inputPwd, false, true); //設置
        }
        else { //驗證支付密碼
            LobbyViewCtr_1.default.instance.cs_enterbank_bk(this.inputPwd, true); //验证支付密码
        }
    };
    /**设置支付密码成功 */
    WithdrawalView.prototype.setPwdSucceed = function () {
        this.type2Controller.selectedIndex = 0;
        AppConst_1.AppConst.mPlayerModel["UserPassword"] = this.inputPwd;
        this.clean();
        this.ui_inputLabel.requestFocus();
    };
    /**验证支付密码成功 */
    WithdrawalView.prototype.verificationPwdSuc = function () {
        //TODO 发送提现申请
        if (this.isverification) {
            cc.sys.localStorage.setItem("txverification_pwd", Date.now() + '');
        }
        this.ui_payPwd.visible = false;
        this.sendWithdrawal();
    };
    /**发送提现 */
    WithdrawalView.prototype.sendWithdrawal = function () {
        var _this = this;
        //这里模拟一个要锁住全屏的等待过程
        fgui.GRoot.inst.showModalWait();
        var url = BaseFrameNative_1.BaseFrameNative.serverlistItem.apiAdress + "/api/Game/UserCashMoney";
        var params = {
            type: 2,
            money: (+this.ui_txGoldNum.text) * 100,
            UserId: AppConst_1.AppConst.mPlayerModel.userid,
            NickName: AppConst_1.AppConst.mPlayerModel._n,
            BankNum: LobbyViewCtr_1.default.instance.Model.mobilephonen.bId,
            BankName: LobbyViewCtr_1.default.instance.Model.mobilephonen.bank,
            BankUn: LobbyViewCtr_1.default.instance.Model.mobilephonen.bName,
        };
        console.log("============", JSON.stringify(params));
        HttpHelpEx_1.default.instance.post(url, params, {
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
            .then(function (res) {
            fgui.GRoot.inst.closeModalWait();
            console.log("=======提现==========", res);
            if (res["result"] == 0) {
                _this.ui_Txsqcom.visible = true;
                _this.ui_txjinText.setVar("gold", _this.ui_txGoldNum.text).flushVars();
                // let golds = AppConst.mPlayerModel.gold;
                // golds -= (+this.ui_txGoldNum.text) * 100;
                // AppConst.mPlayerModel.gold = golds;
            }
            else if (res["result"] == -89) {
                CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("提现金额需要小于10w");
            }
            else if (res["result"] == -88) {
                CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("流水不够");
            }
            else if (res["result"] == -90) {
                CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("24小时内最多提现两次");
            }
            else {
                CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("提現失敗");
            }
        })
            .catch(function (err) {
            console.log("=======提现err==========", err);
            fgui.GRoot.inst.closeModalWait();
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("提現失敗");
        });
    };
    WithdrawalView.prototype.updateGold = function () {
        this.ui_gold.text = UIUtil_1.UIUtil.formatNumber(AppConst_1.AppConst.mPlayerModel.gold) + '';
    };
    WithdrawalView.prototype.ShowTxRecord = function (isShow) {
        AudioManager_1.AudioManager.Singleton.play('WithdrawalView', "button");
        this.ui_TxRecordPanel.visible = isShow;
        this.ui_drawal1.visible = !isShow;
        this.ui_btn_txRecord.visible = !isShow;
        this.getChild("n56").visible = !isShow;
        if (isShow) {
            this.getTxRecordData(1);
        }
    };
    WithdrawalView.prototype.getTxRecordData = function (_pageindex) {
        var _this = this;
        this.ui_ListRecord.numItems = 0;
        this.TxRecordListData = [];
        this.TxPageIndex = _pageindex;
        var url = BaseFrameNative_1.BaseFrameNative.serverlistItem.apiAdress + "/api/Game/GetUserTakenow";
        var params = {
            pageindex: _pageindex,
            pagesize: this.TxPageSize,
            userid: AppConst_1.AppConst.mPlayerModel.userid,
        };
        console.log("============", JSON.stringify(params));
        HttpHelpEx_1.default.instance.post(url, params, {
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
            .then(function (res) {
            fgui.GRoot.inst.closeModalWait();
            console.log("=======提现记录==========", res);
            if (res.code == 0) {
                _this.TxRecordListData = res.data;
                _this.ui_ListRecord.numItems = _this.TxRecordListData.length;
                _this.ui_recordNext.enabled = _this.TxRecordListData.length == _this.TxPageSize;
                _this.ui_recordUp.enabled = _pageindex != 1;
            }
            else {
                CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("提現数据获取失敗");
            }
        })
            .catch(function (err) {
            console.log("=======提现记录err==========", err);
            fgui.GRoot.inst.closeModalWait();
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("提現记录失敗");
        });
    };
    WithdrawalView.prototype.TxRecordListRender = function (index, item) {
        var go = item;
        go.getChild("time").asTextField.text = this.TxRecordListData[index].date;
        go.getChild("money").asTextField.text = this.TxRecordListData[index].money;
        go.getChild("orderid").asTextField.text = this.TxRecordListData[index].ordernum;
        go.getChild("state").asTextField.text = this.TxRecordListData[index].states;
    };
    WithdrawalView.prototype.nextTxRecord = function () {
        AudioManager_1.AudioManager.Singleton.play('WithdrawalView', "button");
        this.getTxRecordData(this.TxPageIndex + 1);
    };
    WithdrawalView.prototype.upTxRecord = function () {
        AudioManager_1.AudioManager.Singleton.play('WithdrawalView', "button");
        this.getTxRecordData(this.TxPageIndex - 1);
    };
    WithdrawalView.prototype.Show = function () {
        _super.prototype.Show.call(this);
        this.ui_txGoldNum.text = '';
        LobbyViewCtr_1.default.instance.cs_mobilephonenum();
        this.ui_gold.text = UIUtil_1.UIUtil.formatNumber(AppConst_1.AppConst.mPlayerModel.gold) + '';
    };
    WithdrawalView.prototype.toTopup = function () {
        this.Hide();
        LobbyViewCtr_1.default.instance.view.showTopup();
    };
    WithdrawalView.prototype.bindTx = function () {
        AudioManager_1.AudioManager.Singleton.play('WithdrawalView', "button");
        this.showBindCard();
    };
    /**显示绑定银行卡 */
    WithdrawalView.prototype.showBindCard = function () {
        this.ui_cardgold.text = UIUtil_1.UIUtil.formatNumber(AppConst_1.AppConst.mPlayerModel.gold) + '';
        this.ui_bindcard.visible = true;
        this.ui_province.items = this.province;
        this.ui_city.items = this.city[0];
    };
    WithdrawalView.prototype.onChanged = function () {
        this.ui_city.items = this.city[this.ui_province.selectedIndex];
    };
    WithdrawalView.prototype.HideCard = function () {
        AudioManager_1.AudioManager.Singleton.play('WithdrawalView', "button");
        this.ui_bindcard.visible = false;
    };
    WithdrawalView.prototype.bindCardSuccess = function () {
        LobbyViewCtr_1.default.instance.cs_mobilephonenum();
        this.ui_bindcard.visible = false;
    };
    return WithdrawalView;
}(ViewBase_1.default));
exports.default = WithdrawalView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXFdpdGhkcmF3YWxcXFdpdGhkcmF3YWxWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBFQUF5RTtBQUN6RSxvRUFBbUU7QUFDbkUsa0VBQTZEO0FBQzdELDRFQUF1RTtBQUN2RSwyREFBMEQ7QUFDMUQsMkZBQTBGO0FBQzFGLHNFQUFxRTtBQUNyRSxnREFBMkM7QUFFM0M7O0dBRUc7QUFDSDtJQUE0QyxrQ0FBUTtJQUFwRDtRQUFBLHFFQWdqQkM7UUF0aUJHLFFBQVE7UUFDQSxhQUFPLEdBQW9CLElBQUksQ0FBQztRQUNoQyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFDbEMsb0JBQWMsR0FBaUIsSUFBSSxDQUFDO1FBQ3BDLG1CQUFhLEdBQWlCLElBQUksQ0FBQztRQUVuQyxnQkFBVSxHQUFvQixJQUFJLENBQUM7UUFDM0MsWUFBWTtRQUNKLGlCQUFXLEdBQW9CLElBQUksQ0FBQztRQUM1QyxVQUFVO1FBQ0YsZ0JBQVUsR0FBb0IsSUFBSSxDQUFDO1FBQzNDLFlBQVk7UUFDSixrQkFBWSxHQUFvQixJQUFJLENBQUM7UUFLN0MsYUFBYTtRQUNMLHdCQUFrQixHQUFpQixJQUFJLENBQUM7UUFDeEMsc0JBQWdCLEdBQWlCLElBQUksQ0FBQztRQUN0QyxpQkFBVyxHQUFvQixJQUFJLENBQUM7UUFHNUMsV0FBVztRQUNILGlCQUFXLEdBQW9CLElBQUksQ0FBQztRQUNwQyxpQkFBVyxHQUFtQixJQUFJLENBQUM7UUFDbkMsZ0JBQVUsR0FBbUIsSUFBSSxDQUFDO1FBQ2xDLGFBQU8sR0FBb0IsSUFBSSxDQUFDO1FBQ2hDLGdCQUFVLEdBQW9CLElBQUksQ0FBQztRQUNuQyxpQkFBVyxHQUFtQixJQUFJLENBQUM7UUFDbkMsaUJBQVcsR0FBbUIsSUFBSSxDQUFDO1FBQ25DLGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBQy9CLGtCQUFZLEdB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QUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO2dCQUMvSCxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztnQkFDblQsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO2dCQUN4SCxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO2dCQUMvRCxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztnQkFDNUYsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztnQkFDbkosQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO2dCQUNuRyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDO2dCQUNwRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztnQkFDMUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO2dCQUNoRixDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQztnQkFDckcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQztnQkFDakksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztnQkFDbEIsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDO2dCQUN4RyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7Z0JBQ25HLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO2dCQUM1RixDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7Z0JBQzlFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7Z0JBQy9ELENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQztnQkFDbkcsQ0FBQyxJQUFJLENBQUM7Z0JBQ04sQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQztnQkFDakcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO2dCQUNwQyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7Z0JBQ3pELENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztnQkFDdkgsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO2dCQUM3RSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztnQkFDdEUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztnQkFDcEosQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7Z0JBQ2xILENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUM7Z0JBQzdILENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUM7Z0JBQ3RJLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDO2dCQUN4RCxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQztnQkFDbEgsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO2FBQzVFO1lBQ0QsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztnQkFDcEksQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztnQkFDL0gsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7Z0JBQ25ULENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztnQkFDeEgsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztnQkFDL0QsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7Z0JBQzVGLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7Z0JBQ25KLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztnQkFDbkcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQztnQkFDcEUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7Z0JBQzFDLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztnQkFDaEYsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUM7Z0JBQ3JHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUM7Z0JBQ2pJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7Z0JBQ2xCLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEtBQUssQ0FBQztnQkFDeEcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO2dCQUNuRyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztnQkFDNUYsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO2dCQUM5RSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO2dCQUMvRCxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUM7Z0JBQ25HLENBQUMsSUFBSSxDQUFDO2dCQUNOLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUM7Z0JBQ2pHLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztnQkFDcEMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO2dCQUN6RCxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7Z0JBQ3ZILENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztnQkFDN0UsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7Z0JBQ3RFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7Z0JBQ3BKLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFB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O0lBQ3JDLENBQUM7SUFFTSx3Q0FBZSxHQUF0QjtRQUNJLHNCQUFZLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3JDLENBQUM7SUFDTCxxQkFBQztBQUFELENBaGpCQSxBQWdqQkMsQ0FoakIyQyxrQkFBUSxHQWdqQm5EIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXVkaW9NYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IENvbW1vbkN0ciB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL0NvbW1vbkN0clwiO1xyXG5pbXBvcnQgVmlld0Jhc2UgZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvVmlld0Jhc2VcIjtcclxuaW1wb3J0IEh0dHBIZWxwRXggZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9Db21tb24vTWFuYWdlcnMvSHR0cEhlbHBFeFwiO1xyXG5pbXBvcnQgeyBVSVV0aWwgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0NvbW1vbi9VSVV0aWxcIjtcclxuaW1wb3J0IHsgQXBwQ29uc3QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L21vZHVsZXMvQHNsb3RzbWFzdGVyL3VpLWNvbW1vbi9saWIvQXBwQ29uc3RcIjtcclxuaW1wb3J0IHsgQmFzZUZyYW1lTmF0aXZlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWVOYXRpdmVcIjtcclxuaW1wb3J0IExvYmJ5Vmlld0N0ciBmcm9tIFwiLi4vTG9iYnlWaWV3Q3RyXCI7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIOaPkOeOsFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2l0aGRyYXdhbFZpZXcgZXh0ZW5kcyBWaWV3QmFzZSB7XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IHBhY2thZ2VSZXNvdXJjZU5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJnYW1lSGFsbFwiO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGdldCBwYWNrYWdlTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcInJlcy9Mb2JieVwiO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGdldCBjb21wb25lbnROYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwiV2l0aGRyYXdhbFwiO1xyXG4gICAgfVxyXG4gICAgLyoq6YeR5biBICovXHJcbiAgICBwcml2YXRlIHVpX2dvbGQ6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX2J0bl9icmVhazogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfYnRuX2FkZEdvbGQ6IGZndWkuR0J1dHRvbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX2J0bl9iaW5kVHg6IGZndWkuR0J1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSB1aV9kcmF3YWwxOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xyXG4gICAgLyoq5YW25LuW5o+Q546w5pa55byPICovXHJcbiAgICBwcml2YXRlIHVpX2FkZFR4Y29tOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xyXG4gICAgLyoq5o+Q546w55Sz6K+3ICovXHJcbiAgICBwcml2YXRlIHVpX1R4c3Fjb206IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XHJcbiAgICAvKirpqozor4HmlK/ku5jlr4bnoIEgKi9cclxuICAgIHByaXZhdGUgdWlfeXpUeHNxY29tOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIHR5cGVDb250cm9sbGVyOiBmZ3VpLkNvbnRyb2xsZXI7XHJcblxyXG4gICAgLyoq5re75Yqg6ZO26KGM5Y2h55WM6Z2iICovXHJcbiAgICBwcml2YXRlIHVpX2J0bl9jYXJkYWRkR29sZDogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfYnRuX2NhcmRicmVhazogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfY2FyZGdvbGQ6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcblxyXG5cclxuICAgIC8qKue7keWumumTtuihjOWNoSAqL1xyXG4gICAgcHJpdmF0ZSB1aV9iaW5kY2FyZDogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfY2FyZFR5cGU6IGZndWkuR0NvbWJvQm94ID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfY291bnRyeTogZmd1aS5HQ29tYm9Cb3ggPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9uYW1lOiBmZ3VpLkdUZXh0SW5wdXQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9iYW5rbnVtOiBmZ3VpLkdUZXh0SW5wdXQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9iYW5rbmFtZTogZmd1aS5HQ29tYm9Cb3ggPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9wcm92aW5jZTogZmd1aS5HQ29tYm9Cb3ggPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9jaXR5OiBmZ3VpLkdDb21ib0JveCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX1N1YmJyYW5jaDogZmd1aS5HVGV4dElucHV0ID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfYnRuX2JpbmRDYXJkOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xyXG5cclxuXHJcbiAgICAvKirmj5DnjrAgKi9cclxuICAgIHByaXZhdGUgdWlfYnRuX3R4OiBmZ3VpLkdCdXR0b24gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV90eEJhbmtOYW1lOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV91c2VyenNuYW1lOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV90eEdvbGROdW06IGZndWkuR1RleHRJbnB1dCA9IG51bGw7XHJcblxyXG5cclxuICAgIHByaXZhdGUgdWlfYnRuX3R4YnJlYWsxOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV90eGppblRleHQ6IGZndWkuR1JpY2hUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9idG5fb3RoZXJ0eDogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHVpX2J0bl90eHFyZW46IGZndWkuR0J1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgLyoq5o+Q546w6K6w5b2VICovXHJcbiAgICBwcml2YXRlIHVpX1R4UmVjb3JkUGFuZWw6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX0xpc3RSZWNvcmQ6IGZndWkuR0xpc3QgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9yZWNvcmROZXh0OiBmZ3VpLkdCdXR0b24gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9yZWNvcmRVcDogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfYnRuX3R4UmVjb3JkOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xyXG5cclxuICAgIC8qKumqjOivgeaUr+S7mOWvhueggSAqL1xyXG4gICAgcHJpdmF0ZSB1aV9wYXlQd2Q6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX2J0bl95enpmYnJlYWsxOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9idG5feXpxdXhpYW86IGZndWkuR0J1dHRvbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX2J0bl92Y29uZmlybTogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfYnRuX2lucHV0Ymc6IGZndWkuR0xvYWRlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX3B3ZDA6IGZndWkuR1RleHRJbnB1dCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX3B3ZDE6IGZndWkuR1RleHRJbnB1dCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX3B3ZDI6IGZndWkuR1RleHRJbnB1dCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX3B3ZDM6IGZndWkuR1RleHRJbnB1dCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX3B3ZDQ6IGZndWkuR1RleHRJbnB1dCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX3B3ZDU6IGZndWkuR1RleHRJbnB1dCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX2lucHV0TGFiZWw6IGZndWkuR1RleHRJbnB1dCA9IG51bGw7XHJcbiAgICBwdWJsaWMgaW5wdXRQd2Q6IHN0cmluZyA9ICcnO1xyXG4gICAgcHJpdmF0ZSB0eXBlMkNvbnRyb2xsZXI6IGZndWkuQ29udHJvbGxlcjtcclxuICAgIC8qKuecgeS7vSAqL1xyXG4gICAgcHJpdmF0ZSBwcm92aW5jZTtcclxuICAgIHByaXZhdGUgcHJvdmluY2VDb25maWcgPSB7XHJcbiAgICAgICAgMTogW1wi5YyX5LqsXCIsIFwi5LiK5rW3XCIsIFwi6YeN5oW2XCIsIFwi5a6J5b69XCIsIFwi56aP5bu6XCIsIFwi55SY6IKFXCIsIFwi5buj5p2xXCIsIFwi5buj6KW/XCIsIFwi6LK05beeXCIsIFwi5rW35Y2XXCIsIFwi5rKz5YyXXCIsIFwi6buR6b6N5rGfXCIsXHJcbiAgICAgICAgICAgIFwi5rKz5Y2XXCIsIFwi6aaZ5rivXCIsIFwi5rmW5YyXXCIsIFwi5rmW5Y2XXCIsIFwi5rGf6JiHXCIsIFwi5rGf6KW/XCIsIFwi5ZCJ5p6XXCIsIFwi6YG85a+nXCIsIFwi5r6z6ZaAXCIsIFwi5YWn6JKZ5Y+kXCIsIFwi5a+n5aSPXCIsIFwi6Z2S5rW3XCIsIFwi5bGx5p2xXCIsIFwi5bGx6KW/XCIsIFwi6Zmd6KW/XCIsXHJcbiAgICAgICAgICAgIFwi5Zub5bedXCIsIFwi6Ie654GjXCIsIFwi5aSp5rSlXCIsIFwi5paw55aGXCIsIFwi6KW/6JePXCIsIFwi6Zuy5Y2XXCIsIFwi5rWZ5rGfXCJdLFxyXG4gICAgICAgIDI6IFtcIuWMl+S6rFwiLCBcIuS4iua1t1wiLCBcIumHjeW6hlwiLCBcIuWuieW+vVwiLCBcIuemj+W7ulwiLCBcIueUmOiCg1wiLCBcIuW5v+S4nFwiLCBcIuW5v+ilv1wiLCBcIui0teW3nlwiLCBcIua1t+WNl1wiLCBcIuays+WMl1wiLCBcIum7kem+meaxn1wiLFxyXG4gICAgICAgICAgICBcIuays+WNl1wiLCBcIummmea4r1wiLCBcIua5luWMl1wiLCBcIua5luWNl1wiLCBcIuaxn+iLj1wiLCBcIuaxn+ilv1wiLCBcIuWQieael1wiLCBcIui+veWugVwiLCBcIua+s+mXqFwiLCBcIuWGheiSmeWPpFwiLCBcIuWugeWkj1wiLCBcIumdkua1t1wiLCBcIuWxseS4nFwiLCBcIuWxseilv1wiLCBcIumZleilv1wiLFxyXG4gICAgICAgICAgICBcIuWbm+W3nVwiLCBcIuWPsOa5vlwiLCBcIuWkqea0pVwiLCBcIuaWsOeWhlwiLCBcIuilv+iXj1wiLCBcIuS6keWNl1wiLCBcIua1meaxn1wiXSxcclxuICAgIH1cclxuICAgIC8qKuWfjuW4giAqL1xyXG4gICAgcHJpdmF0ZSBjaXR5O1xyXG4gICAgcHJpdmF0ZSBjaXR5Q29uZmlnID0ge1xyXG4gICAgICAgIDE6IFtbXCLmnbHln47ljYBcIiwgXCLopb/ln47ljYBcIiwgXCLltIfmlofljYBcIiwgXCLlrqPmrabljYBcIiwgXCLmnJ3pmb3ljYBcIiwgXCLosZDoh7rljYBcIiwgXCLnn7Pmma/lsbHljYBcIiwgXCLmtbfmvrHljYBcIiwgXCLploDpoK3mup3ljYBcIiwgXCLmiL/lsbHljYBcIiwgXCLpgJrlt57ljYBcIiwgXCLpoIbnvqnljYBcIiwgXCLmmIzlubPljYBcIiwgXCLlpKfoiIjljYBcIiwgXCLmh7fmn5TljYBcIiwgXCLlubPnqYDljYBcIiwgXCLlr4bpm7LnuKNcIiwgXCLlu7bmhbbnuKNcIl0sXHJcbiAgICAgICAgW1wi6buD5rWm5Y2AXCIsIFwi55un54Gj5Y2AXCIsIFwi5b6Q5Yyv5Y2AXCIsIFwi6ZW35a+n5Y2AXCIsIFwi6Z2c5a6J5Y2AXCIsIFwi5pmu6ZmA5Y2AXCIsIFwi6Jm55Y+j5Y2AXCIsIFwi5qWK5rWm5Y2AXCIsIFwi6ZaU6KGM5Y2AXCIsIFwi5a+25bGx5Y2AXCIsIFwi5ZiJ5a6a5Y2AXCIsIFwi5rWm5p2x5paw5Y2AXCIsIFwi6YeR5bGx5Y2AXCIsIFwi5p2+5rGf5Y2AXCIsIFwi6Z2S5rWm5Y2AXCIsIFwi5Y2X5Yyv5Y2AXCIsIFwi5aWJ6LOi5Y2AXCIsIFwi5bSH5piO57ijXCJdLFxyXG4gICAgICAgIFtcIuiQrOW3nuWNgFwiLCBcIua2qumZteWNgFwiLCBcIua4neS4reWNgFwiLCBcIuWkp+a4oeWPo+WNgFwiLCBcIuaxn+WMl+WNgFwiLCBcIuaymeWdquWjqeWNgFwiLCBcIuS5nem+jeWdoeWNgFwiLCBcIuWNl+WyuOWNgFwiLCBcIuWMl+eimuWNgFwiLCBcIuiQrOebm+WNgFwiLCBcIumbmeapi+WNgFwiLCBcIua4neWMl+WNgFwiLCBcIuW3tOWNl+WNgFwiLCBcIum7lOaxn+WNgFwiLCBcIumVt+WjveWNgFwiLCBcIue2puaxn+e4o1wiLCBcIua9vOWNl+e4o1wiLCBcIumKheaigee4o1wiLCBcIuWkp+i2s+e4o1wiLCBcIuamruaYjOe4o1wiLCBcIueSp+Wxsee4o1wiLCBcIuaigeW5s+e4o1wiLCBcIuWfjuWPo+e4o1wiLCBcIuixkOmDvee4o1wiLCBcIuWiiuaxn+e4o1wiLCBcIuatpumahue4o1wiLCBcIuW/oOe4o1wiLCBcIumWi+e4o1wiLCBcIumbsumZvee4o1wiLCBcIuWlieevgOe4o1wiLCBcIuW3q+Wxsee4o1wiLCBcIuW3q+a6que4o1wiLCBcIuefs+afseWcn+WutuaXj+iHquayu+e4o1wiLCBcIuengOWxseWcn+WutuaXj+iLl+aXj+iHquayu+e4o1wiLCBcIumFiemZveWcn+WutuaXj+iLl+aXj+iHquayu+e4o1wiLCBcIuW9reawtOiLl+aXj+Wcn+WutuaXj+iHquayu+e4o1wiLCBcIuaxn+a0peW4glwiLCBcIuWQiOW3neW4glwiLCBcIuawuOW3neW4glwiLCBcIuWNl+W3neW4glwiXSxcclxuICAgICAgICBbXCLlkIjogqXluIJcIiwgXCLlrr/lt57luIJcIiwgXCLmt67ljJfluIJcIiwgXCLkurPlt57luIJcIiwgXCLpmJzpmb3luIJcIiwgXCLomozln6DluIJcIiwgXCLmt67ljZfluIJcIiwgXCLmu4Hlt57luIJcIiwgXCLppqzpno3lsbHluIJcIiwgXCLolarmuZbluIJcIiwgXCLpioXpmbXluIJcIiwgXCLlronmhbbluIJcIiwgXCLpu4PlsbHluIJcIiwgXCLlha3lronluIJcIiwgXCLlt6LmuZbluIJcIiwgXCLmsaDlt57luIJcIiwgXCLlrqPln47luIJcIl0sXHJcbiAgICAgICAgW1wi56aP5bee5biCXCIsIFwi5Y2X5bmz5biCXCIsIFwi6I6G55Sw5biCXCIsIFwi5LiJ5piO5biCXCIsIFwi5rOJ5bee5biCXCIsIFwi5buI6ZaA5biCXCIsIFwi5ryz5bee5biCXCIsIFwi6b6N5bKp5biCXCIsIFwi5a+n5b635biCXCJdLFxyXG4gICAgICAgIFtcIuiYreW3nuW4glwiLCBcIuWYieWzqumXnOW4glwiLCBcIueZvemKgOW4glwiLCBcIuWkqeawtOW4glwiLCBcIuatpuWogeW4glwiLCBcIumFkuazieW4glwiLCBcIuW8teaOluW4glwiLCBcIuaFtumZveW4glwiLCBcIuW5s+a2vOW4glwiLCBcIuWumuilv+W4glwiLCBcIumatOWNl+W4glwiLCBcIuiHqOWkj+W3nlwiLCBcIueUmOWNl+W3nlwiXSxcclxuICAgICAgICBbXCLlu6Plt57luIJcIiwgXCLmt7HlnLPluIJcIiwgXCLmuIXpgaDluIJcIiwgXCLpn7bpl5zluIJcIiwgXCLmsrPmupDluIJcIiwgXCLmooXlt57luIJcIiwgXCLmva7lt57luIJcIiwgXCLmsZXpoK3luIJcIiwgXCLmj63pmb3luIJcIiwgXCLmsZXlsL7luIJcIiwgXCLmg6Dlt57luIJcIiwgXCLmnbHojp7luIJcIiwgXCLnj6DmtbfluIJcIiwgXCLkuK3lsbHluIJcIiwgXCLmsZ/ploDluIJcIiwgXCLkvZvlsbHluIJcIiwgXCLogofmhbbluIJcIiwgXCLpm7Lmta7luIJcIiwgXCLpmb3msZ/luIJcIiwgXCLojILlkI3luIJcIiwgXCLmuZvmsZ/luIJcIl0sXHJcbiAgICAgICAgW1wi5Y2X5a+n5biCXCIsIFwi5qGC5p6X5biCXCIsIFwi5p+z5bee5biCXCIsIFwi5qKn5bee5biCXCIsIFwi6LK05riv5biCXCIsIFwi546J5p6X5biCXCIsIFwi5qy95bee5biCXCIsIFwi5YyX5rW35biCXCIsIFwi6Ziy5Z+O5riv5biCXCIsIFwi5bSH5bem5biCXCIsIFwi55m+6Imy5biCXCIsIFwi5rKz5rGg5biCXCIsIFwi5L6G6LOT5biCXCIsIFwi6LOA5bee5biCXCJdLFxyXG4gICAgICAgIFtcIuiytOmZveW4glwiLCBcIuWFreebpOawtOW4glwiLCBcIumBtee+qeW4glwiLCBcIuWuiemghuW4glwiLCBcIueVouevgOWcsOWNgFwiLCBcIumKheS7geWcsOWNgFwiLCBcIum7lOadseWNl+W3nlwiLCBcIum7lOWNl+W3nlwiLCBcIum7lOilv+WNl+W3nlwiXSxcclxuICAgICAgICBbXCLmtbflj6NcIiwgXCLlhIvnuKNcIiwgXCLpmbXmsLRcIiwgXCLnk4rmtbdcIiwgXCLkuInkup5cIiwgXCLpgJrku4BcIiwgXCLokKzlr6dcIl0sXHJcbiAgICAgICAgW1wi55+z5a626I6K5biCXCIsIFwi5by15a625Y+j5biCXCIsIFwi5om/5b635biCXCIsIFwi56em55qH5bO25biCXCIsIFwi5ZSQ5bGx5biCXCIsIFwi5buK5Z2K5biCXCIsIFwi5L+d5a6a5biCXCIsIFwi6KGh5rC05biCXCIsIFwi5ruE5bee5biCXCIsIFwi6YKi6Ie65biCXCIsIFwi6YKv6YSy5biCXCJdLFxyXG4gICAgICAgIFtcIuWTiOeIvua/seW4glwiLCBcIum9ium9iuWTiOeIvuW4glwiLCBcIuS4g+iHuuays+W4glwiLCBcIum7keays+W4glwiLCBcIuWkp+aFtuW4glwiLCBcIum2tOW0l+W4glwiLCBcIuS8iuaYpeW4glwiLCBcIuS9s+acqOaWr+W4glwiLCBcIumbmem0qOWxseW4glwiLCBcIumbnuilv+W4glwiLCBcIueJoeS4ueaxn+W4glwiLCBcIue2j+WMluW4glwiLCBcIuWkp+iIiOWuieW2uuWcsOWNgFwiXSxcclxuICAgICAgICBbXCLphK3lt57luIJcIiwgXCLplovlsIHluIJcIiwgXCLkuInploDls73luIJcIiwgXCLmtJvpmb3luIJcIiwgXCLnhKbkvZzluIJcIiwgXCLmlrDphInluIJcIiwgXCLptrTlo4HluIJcIiwgXCLlronpmb3luIJcIiwgXCLmv67pmb3luIJcIiwgXCLllYbkuJjluIJcIiwgXCLoqLHmmIzluIJcIiwgXCLmvK/msrPluIJcIiwgXCLlubPpoILlsbHluIJcIiwgXCLljZfpmb3luIJcIiwgXCLkv6Hpmb3luIJcIiwgXCLlkajlj6PluIJcIiwgXCLpp5DppqzlupfluIJcIiwgXCLmv5/mupDluIJcIl0sXHJcbiAgICAgICAgW1wi6aaZ5rivXCIsIFwi5Lmd6b6NXCIsIFwi5paw55WMXCJdLFxyXG4gICAgICAgIFtcIuatpua8ouW4glwiLCBcIuWNgeWgsOW4glwiLCBcIuilhOaoiuW4glwiLCBcIuiNiumWgOW4glwiLCBcIuWtneaEn+W4glwiLCBcIum7g+WyoeW4glwiLCBcIumEguW3nuW4glwiLCBcIum7g+efs+W4glwiLCBcIum5ueWvp+W4glwiLCBcIuiNiuW3nuW4glwiLCBcIuWunOaYjOW4glwiLCBcIumaqOW3nuW4glwiLCBcIuecgeebtOi9hOe4o+e0muihjOaUv+WWruS9jVwiLCBcIuaBqeaWveW3nlwiXSxcclxuICAgICAgICBbXCLplbfmspnluIJcIiwgXCLlvLXlrrbnlYzluIJcIiwgXCLluLjlvrfluIJcIiwgXCLnm4rpmb3luIJcIiwgXCLlsrPpmb3luIJcIiwgXCLmoKrmtLLluIJcIiwgXCLmuZjmva3luIJcIiwgXCLooaHpmb3luIJcIiwgXCLpg7Tlt57luIJcIiwgXCLmsLjlt57luIJcIiwgXCLpgrXpmb3luIJcIiwgXCLmh7fljJbluIJcIiwgXCLlqYHlupXluIJcIiwgXCLmuZjopb/lt55cIl0sXHJcbiAgICAgICAgW1wi5Y2X5Lqs5biCXCIsIFwi5b6Q5bee5biCXCIsIFwi6YCj6Zuy5riv5biCXCIsIFwi5a6/6YG35biCXCIsIFwi5reu5a6J5biCXCIsIFwi6bm95Z+O5biCXCIsIFwi5o+a5bee5biCXCIsIFwi5rOw5bee5biCXCIsIFwi5Y2X6YCa5biCXCIsIFwi6Y6u5rGf5biCXCIsIFwi5bi45bee5biCXCIsIFwi54Sh6Yyr5biCXCIsIFwi6JiH5bee5biCXCJdLFxyXG4gICAgICAgIFtcIuWNl+aYjOW4glwiLCBcIuS5neaxn+W4glwiLCBcIuaZr+W+t+mOruW4glwiLCBcIum3uea9reW4glwiLCBcIuaWsOmkmOW4glwiLCBcIuiQjemEieW4glwiLCBcIui0m+W3nuW4glwiLCBcIuS4iumlkuW4glwiLCBcIuaSq+W3nuW4glwiLCBcIuWunOaYpeW4glwiLCBcIuWQieWuieW4glwiXSxcclxuICAgICAgICBbXCLplbfmmKXluIJcIiwgXCLnmb3ln47luIJcIiwgXCLmnb7ljp/luIJcIiwgXCLlkInmnpfluIJcIiwgXCLlm5vlubPluIJcIiwgXCLpgbzmupDluIJcIiwgXCLpgJrljJbluIJcIiwgXCLnmb3lsbHluIJcIiwgXCLlu7bpgorlt55cIl0sXHJcbiAgICAgICAgW1wi54CL6Zm95biCXCIsIFwi5pyd6Zm95biCXCIsIFwi6Zic5paw5biCXCIsIFwi6ZC15ba65biCXCIsIFwi5pKr6aCG5biCXCIsIFwi5pys5rqq5biCXCIsIFwi6YG86Zm95biCXCIsIFwi6Z6N5bGx5biCXCIsIFwi5Li55p2x5biCXCIsIFwi5aSn6YCj5biCXCIsIFwi54ef5Y+j5biCXCIsIFwi55uk6Yym5biCXCIsIFwi6Yym5bee5biCXCIsIFwi6JGr6JiG5bO25biCXCJdLFxyXG4gICAgICAgIFtcIua+s+mWgFwiXSxcclxuICAgICAgICBbXCLlkbzlkozmtannibnluIJcIiwgXCLljIXpoK3luIJcIiwgXCLng4/mtbfluIJcIiwgXCLotaTls7DluIJcIiwgXCLpgJrpgbzluIJcIiwgXCLlkbzlgKvosp3niL7luIJcIiwgXCLphILniL7lpJrmlq/luIJcIiwgXCLng4/omK3lr5/luIPluIJcIiwgXCLlt7TlvaXmt5bniL7luIJcIiwgXCLoiIjlronnm59cIiwgXCLpjKvmnpfpg63li5Lnm59cIiwgXCLpmL/mi4nlloTnm59cIl0sXHJcbiAgICAgICAgW1wi6YqA5bed5biCXCIsIFwi55+z5Zi05bGx5biCXCIsIFwi5ZCz5b+g5biCXCIsIFwi5Zu65Y6f5biCXCIsIFwi5Lit6KGb5biCXCJdLFxyXG4gICAgICAgIFtcIuilv+Wvp+W4glwiLCBcIua1t+adseWcsOWNgFwiLCBcIua1t+WMl+W3nlwiLCBcIua1t+WNl+W3nlwiLCBcIum7g+WNl+W3nlwiLCBcIuaenOa0m+W3nlwiLCBcIueOieaoueW3nlwiLCBcIua1t+ilv+W3nlwiXSxcclxuICAgICAgICBbXCLmv5/ljZfluIJcIiwgXCLpnZLls7bluIJcIiwgXCLogYrln47luIJcIiwgXCLlvrflt57luIJcIiwgXCLmnbHnh5/luIJcIiwgXCLmt4TljZrluIJcIiwgXCLmv7DlnYrluIJcIiwgXCLnhZnoh7rluIJcIiwgXCLlqIHmtbfluIJcIiwgXCLml6XnhafluIJcIiwgXCLoh6jmsoLluIJcIiwgXCLmo5fojorluIJcIiwgXCLmv5/lr6fluIJcIiwgXCLms7DlronluIJcIiwgXCLokIrolarluIJcIiwgXCLmv7Hlt57luIJcIiwgXCLoj4/mvqTluIJcIl0sXHJcbiAgICAgICAgW1wi5aSq5Y6f5biCXCIsIFwi5pyU5bee5biCXCIsIFwi5aSn5ZCM5biCXCIsIFwi6Zm95rOJ5biCXCIsIFwi6ZW35rK75biCXCIsIFwi5pmJ5Z+O5biCXCIsIFwi5b+75bee5biCXCIsIFwi5pmJ5Lit5biCXCIsIFwi6Ieo5rG+5biCXCIsIFwi5ZGC5qKB5biCXCIsIFwi6YGL5Z+O5biCXCJdLFxyXG4gICAgICAgIFtcIuilv+WuieW4glwiLCBcIuW7tuWuieW4glwiLCBcIumKheW3neW4glwiLCBcIua4reWNl+W4glwiLCBcIuWSuOmZveW4glwiLCBcIuWvtumbnuW4glwiLCBcIua8ouS4reW4glwiLCBcIuamhuael+W4glwiLCBcIuWuieW6t+W4glwiLCBcIuWVhua0m+W4glwiXSxcclxuICAgICAgICBbXCLmiJDpg73luIJcIiwgXCLlu6PlhYPluIJcIiwgXCLntr/pmb3luIJcIiwgXCLlvrfpmb3luIJcIiwgXCLljZflhYXluIJcIiwgXCLlu6PlronluIJcIiwgXCLpgYLlr6fluIJcIiwgXCLlhafmsZ/luIJcIiwgXCLmqILlsbHluIJcIiwgXCLoh6rosqLluIJcIiwgXCLngJjlt57luIJcIiwgXCLlrpzos5PluIJcIiwgXCLmlIDmnp3oirHluIJcIiwgXCLlt7TkuK3luIJcIiwgXCLpgZTlt57luIJcIiwgXCLos4fpmb3luIJcIiwgXCLnnInlsbHluIJcIiwgXCLpm4XlronluIJcIiwgXCLpmL/lo6nlt55cIiwgXCLnlJjlrZzlt55cIiwgXCLmtrzlsbHlt55cIl0sXHJcbiAgICAgICAgW1wi6Ie65YyXXCIsIFwi5Z+66ZqGXCIsIFwi6Ie65Y2XXCIsIFwi6Ie65LitXCIsIFwi6auY6ZuEXCIsIFwi5bGP5p2xXCIsIFwi5Y2X5oqVXCIsIFwi6Zuy5p6XXCIsIFwi5paw56u5XCIsIFwi5b2w5YyWXCIsIFwi6IuX5qCXXCIsIFwi5ZiJ576pXCIsIFwi6Iqx6JOuXCIsIFwi5qGD5ZySXCIsIFwi5a6c6JitXCIsIFwi6Ie65p2xXCIsIFwi6YeR6ZaAXCIsIFwi6aas56WWXCIsIFwi5r6O5rmWXCJdLFxyXG4gICAgICAgIFtcIuWSjOW5s+WNgFwiLCBcIuays+adseWNgFwiLCBcIuays+ilv+WNgFwiLCBcIuWNl+mWi+WNgFwiLCBcIuays+WMl+WNgFwiLCBcIue0heapi+WNgFwiLCBcIuWhmOayveWNgFwiLCBcIua8ouayveWNgFwiLCBcIuWkp+a4r+WNgFwiLCBcIuadsem6l+WNgFwiLCBcIuilv+mdkuWNgFwiLCBcIua0peWNl+WNgFwiLCBcIuWMl+i+sOWNgFwiLCBcIuatpua4heWNgFwiLCBcIuWvtuWdu+WNgFwiLCBcIuWvp+ays+e4o1wiLCBcIumdnOa1t+e4o1wiLCBcIuiWiue4o1wiXSxcclxuICAgICAgICBbXCLng4/pra/mnKjpvYrluIJcIiwgXCLlhYvmi4nnkarkvp3luIJcIiwgXCLoh6rmsrvljYDnm7TovYTnuKPntJrooYzmlL/llq7kvY1cIiwgXCLlloDku4DlnLDljYBcIiwgXCLpmL/lhYvomIflnLDljYBcIiwgXCLlkoznlLDlnLDljYBcIiwgXCLlkJDpra/nlarlnLDljYBcIiwgXCLlk4jlr4blnLDljYBcIiwgXCLlhYvlrZzli5LomIfmn6/lt55cIiwgXCLljZrniL7loZTmi4nlt55cIiwgXCLmmIzlkInlt55cIiwgXCLlt7Tpn7Ppg63mpZ7lt55cIiwgXCLkvIrnioHlt55cIiwgXCLloZTln47lnLDljYBcIiwgXCLpmL/li5Lms7DlnLDljYBcIl0sXHJcbiAgICAgICAgW1wi5ouJ6Jap5biCXCIsIFwi6YKj5puy5Zyw5Y2AXCIsIFwi5piM6YO95Zyw5Y2AXCIsIFwi5p6X6Iqd5Zyw5Y2AXCIsIFwi5bGx5Y2X5Zyw5Y2AXCIsIFwi5pel5ZaA5YmH5Zyw5Y2AXCIsIFwi6Zi/6KOP5Zyw5Y2AXCJdLFxyXG4gICAgICAgIFtcIuaYhuaYjuW4glwiLCBcIuabsumdluW4glwiLCBcIueOiea6quW4glwiLCBcIuS/neWxseW4glwiLCBcIuaYremAmuW4glwiLCBcIum6l+axn+W4glwiLCBcIuaAneiMheW4glwiLCBcIuiHqOa7hOW4glwiLCBcIuW+t+Wuj+W3nlwiLCBcIuaAkuaxn+W3nlwiLCBcIui/quaFtuW3nlwiLCBcIuWkp+eQhuW3nlwiLCBcIualmumbhOW3nlwiLCBcIue0heays+W3nlwiLCBcIuaWh+WxseW3nlwiLCBcIuilv+mbmeeJiOe0jeW3nlwiXSxcclxuICAgICAgICBbXCLmna3lt57luIJcIiwgXCLmuZblt57luIJcIiwgXCLlmInoiIjluIJcIiwgXCLoiJ/lsbHluIJcIiwgXCLlr6fms6LluIJcIiwgXCLntLnoiIjluIJcIiwgXCLooaLlt57luIJcIiwgXCLph5Hoj6/luIJcIiwgXCLoh7rlt57luIJcIiwgXCLmuqvlt57luIJcIiwgXCLpupfmsLTluIJcIl1cclxuICAgICAgICBdLFxyXG4gICAgICAgIDI6IFtbXCLkuJzln47ljLpcIiwgXCLopb/ln47ljLpcIiwgXCLltIfmlofljLpcIiwgXCLlrqPmrabljLpcIiwgXCLmnJ3pmLPljLpcIiwgXCLkuLDlj7DljLpcIiwgXCLnn7Pmma/lsbHljLpcIiwgXCLmtbfmt4DljLpcIiwgXCLpl6jlpLTmsp/ljLpcIiwgXCLmiL/lsbHljLpcIiwgXCLpgJrlt57ljLpcIiwgXCLpobrkuYnljLpcIiwgXCLmmIzlubPljLpcIiwgXCLlpKflhbTljLpcIiwgXCLmgIDmn5TljLpcIiwgXCLlubPosLfljLpcIiwgXCLlr4bkupHljr9cIiwgXCLlu7bluobljr9cIl0sXHJcbiAgICAgICAgW1wi6buE5rWm5Yy6XCIsIFwi5Y2i5rm+5Yy6XCIsIFwi5b6Q5rGH5Yy6XCIsIFwi6ZW/5a6B5Yy6XCIsIFwi6Z2Z5a6J5Yy6XCIsIFwi5pmu6ZmA5Yy6XCIsIFwi6Jm55Y+j5Yy6XCIsIFwi5p2o5rWm5Yy6XCIsIFwi6Ze16KGM5Yy6XCIsIFwi5a6d5bGx5Yy6XCIsIFwi5ZiJ5a6a5Yy6XCIsIFwi5rWm5Lic5paw5Yy6XCIsIFwi6YeR5bGx5Yy6XCIsIFwi5p2+5rGf5Yy6XCIsIFwi6Z2S5rWm5Yy6XCIsIFwi5Y2X5rGH5Yy6XCIsIFwi5aWJ6LSk5Yy6XCIsIFwi5bSH5piO5Y6/XCJdLFxyXG4gICAgICAgIFtcIuS4h+W3nuWMulwiLCBcIua2qumZteWMulwiLCBcIua4neS4reWMulwiLCBcIuWkp+a4oeWPo+WMulwiLCBcIuaxn+WMl+WMulwiLCBcIuaymeWdquWdneWMulwiLCBcIuS5nem+meWdoeWMulwiLCBcIuWNl+WyuOWMulwiLCBcIuWMl+eimuWMulwiLCBcIuS4h+ebm+WMulwiLCBcIuWPjOahpeWMulwiLCBcIua4neWMl+WMulwiLCBcIuW3tOWNl+WMulwiLCBcIum7lOaxn+WMulwiLCBcIumVv+Wvv+WMulwiLCBcIue2puaxn+WOv1wiLCBcIua9vOWNl+WOv1wiLCBcIumTnOaigeWOv1wiLCBcIuWkp+i2s+WOv1wiLCBcIuiNo+aYjOWOv1wiLCBcIueSp+WxseWOv1wiLCBcIuaigeW5s+WOv1wiLCBcIuWfjuWPo+WOv1wiLCBcIuS4sOmDveWOv1wiLCBcIuWeq+axn+WOv1wiLCBcIuatpumahuWOv1wiLCBcIuW/oOWOv1wiLCBcIuW8gOWOv1wiLCBcIuS6kemYs+WOv1wiLCBcIuWlieiKguWOv1wiLCBcIuW3q+WxseWOv1wiLCBcIuW3q+a6quWOv1wiLCBcIuefs+afseWcn+WutuaXj+iHquayu+WOv1wiLCBcIuengOWxseWcn+WutuaXj+iLl+aXj+iHquayu+WOv1wiLCBcIumFiemYs+Wcn+WutuaXj+iLl+aXj+iHquayu+WOv1wiLCBcIuW9reawtOiLl+aXj+Wcn+WutuaXj+iHquayu+WOv1wiLCBcIuaxn+a0peW4glwiLCBcIuWQiOW3neW4glwiLCBcIuawuOW3neW4glwiLCBcIuWNl+W3neW4glwiXSxcclxuICAgICAgICBbXCLlkIjogqXluIJcIiwgXCLlrr/lt57luIJcIiwgXCLmt67ljJfluIJcIiwgXCLkurPlt57luIJcIiwgXCLpmJzpmLPluIJcIiwgXCLomozln6DluIJcIiwgXCLmt67ljZfluIJcIiwgXCLmu4Hlt57luIJcIiwgXCLpqazpno3lsbHluIJcIiwgXCLoipzmuZbluIJcIiwgXCLpk5zpmbXluIJcIiwgXCLlronluobluIJcIiwgXCLpu4TlsbHluIJcIiwgXCLlha3lronluIJcIiwgXCLlt6LmuZbluIJcIiwgXCLmsaDlt57luIJcIiwgXCLlrqPln47luIJcIl0sXHJcbiAgICAgICAgW1wi56aP5bee5biCXCIsIFwi5Y2X5bmz5biCXCIsIFwi6I6G55Sw5biCXCIsIFwi5LiJ5piO5biCXCIsIFwi5rOJ5bee5biCXCIsIFwi5Y6m6Zeo5biCXCIsIFwi5ryz5bee5biCXCIsIFwi6b6Z5bKp5biCXCIsIFwi5a6B5b635biCXCJdLFxyXG4gICAgICAgIFtcIuWFsOW3nuW4glwiLCBcIuWYieWzquWFs+W4glwiLCBcIueZvemTtuW4glwiLCBcIuWkqeawtOW4glwiLCBcIuatpuWogeW4glwiLCBcIumFkuazieW4glwiLCBcIuW8oOaOluW4glwiLCBcIuW6humYs+W4glwiLCBcIuW5s+WHieW4glwiLCBcIuWumuilv+W4glwiLCBcIumZh+WNl+W4glwiLCBcIuS4tOWkj+W3nlwiLCBcIueUmOWNl+W3nlwiXSxcclxuICAgICAgICBbXCLlub/lt57luIJcIiwgXCLmt7HlnLPluIJcIiwgXCLmuIXov5zluIJcIiwgXCLpn7blhbPluIJcIiwgXCLmsrPmupDluIJcIiwgXCLmooXlt57luIJcIiwgXCLmva7lt57luIJcIiwgXCLmsZXlpLTluIJcIiwgXCLmj63pmLPluIJcIiwgXCLmsZXlsL7luIJcIiwgXCLmg6Dlt57luIJcIiwgXCLkuJzojp7luIJcIiwgXCLnj6DmtbfluIJcIiwgXCLkuK3lsbHluIJcIiwgXCLmsZ/pl6jluIJcIiwgXCLkvZvlsbHluIJcIiwgXCLogofluobluIJcIiwgXCLkupHmta7luIJcIiwgXCLpmLPmsZ/luIJcIiwgXCLojILlkI3luIJcIiwgXCLmuZvmsZ/luIJcIl0sXHJcbiAgICAgICAgW1wi5Y2X5a6B5biCXCIsIFwi5qGC5p6X5biCXCIsIFwi5p+z5bee5biCXCIsIFwi5qKn5bee5biCXCIsIFwi6LS15riv5biCXCIsIFwi546J5p6X5biCXCIsIFwi6ZKm5bee5biCXCIsIFwi5YyX5rW35biCXCIsIFwi6Ziy5Z+O5riv5biCXCIsIFwi5bSH5bem5biCXCIsIFwi55m+6Imy5biCXCIsIFwi5rKz5rGg5biCXCIsIFwi5p2l5a6+5biCXCIsIFwi6LS65bee5biCXCJdLFxyXG4gICAgICAgIFtcIui0temYs+W4glwiLCBcIuWFreebmOawtOW4glwiLCBcIumBteS5ieW4glwiLCBcIuWuiemhuuW4glwiLCBcIuavleiKguWcsOWMulwiLCBcIumTnOS7geWcsOWMulwiLCBcIum7lOS4nOWNl+W3nlwiLCBcIum7lOWNl+W3nlwiLCBcIum7lOilv+WNl+W3nlwiXSxcclxuICAgICAgICBbXCLmtbflj6NcIiwgXCLlhIvljr9cIiwgXCLpmbXmsLRcIiwgXCLnkLzmtbdcIiwgXCLkuInkuppcIiwgXCLpgJrku4BcIiwgXCLkuIflroFcIl0sXHJcbiAgICAgICAgW1wi55+z5a625bqE5biCXCIsIFwi5byg5a625Y+j5biCXCIsIFwi5om/5b635biCXCIsIFwi56em55qH5bKb5biCXCIsIFwi5ZSQ5bGx5biCXCIsIFwi5buK5Z2K5biCXCIsIFwi5L+d5a6a5biCXCIsIFwi6KGh5rC05biCXCIsIFwi5rKn5bee5biCXCIsIFwi6YKi5Y+w5biCXCIsIFwi6YKv6YO45biCXCJdLFxyXG4gICAgICAgIFtcIuWTiOWwlOa7qOW4glwiLCBcIum9kOm9kOWTiOWwlOW4glwiLCBcIuS4g+WPsOays+W4glwiLCBcIum7keays+W4glwiLCBcIuWkp+W6huW4glwiLCBcIum5pOWyl+W4glwiLCBcIuS8iuaYpeW4glwiLCBcIuS9s+acqOaWr+W4glwiLCBcIuWPjOm4reWxseW4glwiLCBcIum4oeilv+W4glwiLCBcIueJoeS4ueaxn+W4glwiLCBcIue7peWMluW4glwiLCBcIuWkp+WFtOWuieWyreWcsOWMulwiXSxcclxuICAgICAgICBbXCLpg5Hlt57luIJcIiwgXCLlvIDlsIHluIJcIiwgXCLkuInpl6jls6HluIJcIiwgXCLmtJvpmLPluIJcIiwgXCLnhKbkvZzluIJcIiwgXCLmlrDkuaHluIJcIiwgXCLpuaTlo4HluIJcIiwgXCLlronpmLPluIJcIiwgXCLmv67pmLPluIJcIiwgXCLllYbkuJjluIJcIiwgXCLorrjmmIzluIJcIiwgXCLmvK/msrPluIJcIiwgXCLlubPpobblsbHluIJcIiwgXCLljZfpmLPluIJcIiwgXCLkv6HpmLPluIJcIiwgXCLlkajlj6PluIJcIiwgXCLpqbvpqazlupfluIJcIiwgXCLmtY7mupDluIJcIl0sXHJcbiAgICAgICAgW1wi6aaZ5rivXCIsIFwi5Lmd6b6ZXCIsIFwi5paw55WMXCJdLFxyXG4gICAgICAgIFtcIuatpuaxieW4glwiLCBcIuWNgeWgsOW4glwiLCBcIuilhOaoiuW4glwiLCBcIuiNhumXqOW4glwiLCBcIuWtneaEn+W4glwiLCBcIum7hOWGiOW4glwiLCBcIumEguW3nuW4glwiLCBcIum7hOefs+W4glwiLCBcIuWSuOWugeW4glwiLCBcIuiNhuW3nuW4glwiLCBcIuWunOaYjOW4glwiLCBcIumaj+W3nuW4glwiLCBcIuecgeebtOi+luWOv+e6p+ihjOaUv+WNleS9jVwiLCBcIuaBqeaWveW3nlwiXSxcclxuICAgICAgICBbXCLplb/mspnluIJcIiwgXCLlvKDlrrbnlYzluIJcIiwgXCLluLjlvrfluIJcIiwgXCLnm4rpmLPluIJcIiwgXCLlsrPpmLPluIJcIiwgXCLmoKrmtLLluIJcIiwgXCLmuZjmva3luIJcIiwgXCLooaHpmLPluIJcIiwgXCLpg7Tlt57luIJcIiwgXCLmsLjlt57luIJcIiwgXCLpgrXpmLPluIJcIiwgXCLmgIDljJbluIJcIiwgXCLlqITlupXluIJcIiwgXCLmuZjopb/lt55cIl0sXHJcbiAgICAgICAgW1wi5Y2X5Lqs5biCXCIsIFwi5b6Q5bee5biCXCIsIFwi6L+e5LqR5riv5biCXCIsIFwi5a6/6L+B5biCXCIsIFwi5reu5a6J5biCXCIsIFwi55uQ5Z+O5biCXCIsIFwi5oms5bee5biCXCIsIFwi5rOw5bee5biCXCIsIFwi5Y2X6YCa5biCXCIsIFwi6ZWH5rGf5biCXCIsIFwi5bi45bee5biCXCIsIFwi5peg6ZSh5biCXCIsIFwi6IuP5bee5biCXCJdLFxyXG4gICAgICAgIFtcIuWNl+aYjOW4glwiLCBcIuS5neaxn+W4glwiLCBcIuaZr+W+t+mVh+W4glwiLCBcIum5sOa9reW4glwiLCBcIuaWsOS9meW4glwiLCBcIuiQjeS5oeW4glwiLCBcIui1o+W3nuW4glwiLCBcIuS4iumltuW4glwiLCBcIuaKmuW3nuW4glwiLCBcIuWunOaYpeW4glwiLCBcIuWQieWuieW4glwiXSxcclxuICAgICAgICBbXCLplb/mmKXluIJcIiwgXCLnmb3ln47luIJcIiwgXCLmnb7ljp/luIJcIiwgXCLlkInmnpfluIJcIiwgXCLlm5vlubPluIJcIiwgXCLovr3mupDluIJcIiwgXCLpgJrljJbluIJcIiwgXCLnmb3lsbHluIJcIiwgXCLlu7bovrnlt55cIl0sXHJcbiAgICAgICAgW1wi5rKI6Ziz5biCXCIsIFwi5pyd6Ziz5biCXCIsIFwi6Zic5paw5biCXCIsIFwi6ZOB5bKt5biCXCIsIFwi5oqa6aG65biCXCIsIFwi5pys5rqq5biCXCIsIFwi6L696Ziz5biCXCIsIFwi6Z6N5bGx5biCXCIsIFwi5Li55Lic5biCXCIsIFwi5aSn6L+e5biCXCIsIFwi6JCl5Y+j5biCXCIsIFwi55uY6ZSm5biCXCIsIFwi6ZSm5bee5biCXCIsIFwi6JGr6Iqm5bKb5biCXCJdLFxyXG4gICAgICAgIFtcIua+s+mXqFwiXSxcclxuICAgICAgICBbXCLlkbzlkozmtannibnluIJcIiwgXCLljIXlpLTluIJcIiwgXCLkuYzmtbfluIJcIiwgXCLotaTls7DluIJcIiwgXCLpgJrovr3luIJcIiwgXCLlkbzkvKbotJ3lsJTluIJcIiwgXCLphILlsJTlpJrmlq/luIJcIiwgXCLkuYzlhbDlr5/luIPluIJcIiwgXCLlt7Tlvabmt5blsJTluIJcIiwgXCLlhbTlronnm59cIiwgXCLplKHmnpfpg63li5Lnm59cIiwgXCLpmL/mi4nlloTnm59cIl0sXHJcbiAgICAgICAgW1wi6ZO25bed5biCXCIsIFwi55+z5Zi05bGx5biCXCIsIFwi5ZC05b+g5biCXCIsIFwi5Zu65Y6f5biCXCIsIFwi5Lit5Y2r5biCXCJdLFxyXG4gICAgICAgIFtcIuilv+WugeW4glwiLCBcIua1t+S4nOWcsOWMulwiLCBcIua1t+WMl+W3nlwiLCBcIua1t+WNl+W3nlwiLCBcIum7hOWNl+W3nlwiLCBcIuaenOa0m+W3nlwiLCBcIueOieagkeW3nlwiLCBcIua1t+ilv+W3nlwiXSxcclxuICAgICAgICBbXCLmtY7ljZfluIJcIiwgXCLpnZLlspvluIJcIiwgXCLogYrln47luIJcIiwgXCLlvrflt57luIJcIiwgXCLkuJzokKXluIJcIiwgXCLmt4TljZrluIJcIiwgXCLmvY3lnYrluIJcIiwgXCLng5/lj7DluIJcIiwgXCLlqIHmtbfluIJcIiwgXCLml6XnhafluIJcIiwgXCLkuLTmsoLluIJcIiwgXCLmnqPluoTluIJcIiwgXCLmtY7lroHluIJcIiwgXCLms7DlronluIJcIiwgXCLojrHoipzluIJcIiwgXCLmu6jlt57luIJcIiwgXCLoj4/ms73luIJcIl0sXHJcbiAgICAgICAgW1wi5aSq5Y6f5biCXCIsIFwi5pyU5bee5biCXCIsIFwi5aSn5ZCM5biCXCIsIFwi6Ziz5rOJ5biCXCIsIFwi6ZW/5rK75biCXCIsIFwi5pmL5Z+O5biCXCIsIFwi5b+75bee5biCXCIsIFwi5pmL5Lit5biCXCIsIFwi5Li05rG+5biCXCIsIFwi5ZCV5qKB5biCXCIsIFwi6L+Q5Z+O5biCXCJdLFxyXG4gICAgICAgIFtcIuilv+WuieW4glwiLCBcIuW7tuWuieW4glwiLCBcIumTnOW3neW4glwiLCBcIua4reWNl+W4glwiLCBcIuWSuOmYs+W4glwiLCBcIuWunem4oeW4glwiLCBcIuaxieS4reW4glwiLCBcIuamhuael+W4glwiLCBcIuWuieW6t+W4glwiLCBcIuWVhua0m+W4glwiXSxcclxuICAgICAgICBbXCLmiJDpg73luIJcIiwgXCLlub/lhYPluIJcIiwgXCLnu7XpmLPluIJcIiwgXCLlvrfpmLPluIJcIiwgXCLljZflhYXluIJcIiwgXCLlub/lronluIJcIiwgXCLpgYLlroHluIJcIiwgXCLlhoXmsZ/luIJcIiwgXCLkuZDlsbHluIJcIiwgXCLoh6rotKHluIJcIiwgXCLms7jlt57luIJcIiwgXCLlrpzlrr7luIJcIiwgXCLmlIDmnp3oirHluIJcIiwgXCLlt7TkuK3luIJcIiwgXCLovr7lt57luIJcIiwgXCLotYTpmLPluIJcIiwgXCLnnInlsbHluIJcIiwgXCLpm4XlronluIJcIiwgXCLpmL/lnZ3lt55cIiwgXCLnlJjlrZzlt55cIiwgXCLlh4nlsbHlt55cIl0sXHJcbiAgICAgICAgW1wi5Y+w5YyXXCIsIFwi5Z+66ZqGXCIsIFwi5Y+w5Y2XXCIsIFwi5Y+w5LitXCIsIFwi6auY6ZuEXCIsIFwi5bGP5LicXCIsIFwi5Y2X5oqVXCIsIFwi5LqR5p6XXCIsIFwi5paw56u5XCIsIFwi5b2w5YyWXCIsIFwi6IuX5qCXXCIsIFwi5ZiJ5LmJXCIsIFwi6Iqx6I6yXCIsIFwi5qGD5ZutXCIsIFwi5a6c5YWwXCIsIFwi5Y+w5LicXCIsIFwi6YeR6ZeoXCIsIFwi6ams56WWXCIsIFwi5r6O5rmWXCJdLFxyXG4gICAgICAgIFtcIuWSjOW5s+WMulwiLCBcIuays+S4nOWMulwiLCBcIuays+ilv+WMulwiLCBcIuWNl+W8gOWMulwiLCBcIuays+WMl+WMulwiLCBcIue6ouahpeWMulwiLCBcIuWhmOayveWMulwiLCBcIuaxieayveWMulwiLCBcIuWkp+a4r+WMulwiLCBcIuS4nOS4veWMulwiLCBcIuilv+mdkuWMulwiLCBcIua0peWNl+WMulwiLCBcIuWMl+i+sOWMulwiLCBcIuatpua4heWMulwiLCBcIuWuneWdu+WMulwiLCBcIuWugeays+WOv1wiLCBcIumdmea1t+WOv1wiLCBcIuiTn+WOv1wiXSxcclxuICAgICAgICBbXCLkuYzpsoHmnKjpvZDluIJcIiwgXCLlhYvmi4nnjpvkvp3luIJcIiwgXCLoh6rmsrvljLrnm7Tovpbljr/nuqfooYzmlL/ljZXkvY1cIiwgXCLlloDku4DlnLDljLpcIiwgXCLpmL/lhYvoi4/lnLDljLpcIiwgXCLlkoznlLDlnLDljLpcIiwgXCLlkJDpsoHnlarlnLDljLpcIiwgXCLlk4jlr4blnLDljLpcIiwgXCLlhYvlrZzli5Loi4/mn6/lt55cIiwgXCLljZrlsJTloZTmi4nlt55cIiwgXCLmmIzlkInlt55cIiwgXCLlt7Tpn7Ppg63mpZ7lt55cIiwgXCLkvIrnioHlt55cIiwgXCLloZTln47lnLDljLpcIiwgXCLpmL/li5Lms7DlnLDljLpcIl0sXHJcbiAgICAgICAgW1wi5ouJ6JCo5biCXCIsIFwi6YKj5puy5Zyw5Yy6XCIsIFwi5piM6YO95Zyw5Yy6XCIsIFwi5p6X6Iqd5Zyw5Yy6XCIsIFwi5bGx5Y2X5Zyw5Yy6XCIsIFwi5pel5ZaA5YiZ5Zyw5Yy6XCIsIFwi6Zi/6YeM5Zyw5Yy6XCJdLFxyXG4gICAgICAgIFtcIuaYhuaYjuW4glwiLCBcIuabsumdluW4glwiLCBcIueOiea6quW4glwiLCBcIuS/neWxseW4glwiLCBcIuaYremAmuW4glwiLCBcIuS4veaxn+W4glwiLCBcIuaAneiMheW4glwiLCBcIuS4tOayp+W4glwiLCBcIuW+t+Wuj+W3nlwiLCBcIuaAkuaxn+W3nlwiLCBcIui/quW6huW3nlwiLCBcIuWkp+eQhuW3nlwiLCBcIualmumbhOW3nlwiLCBcIue6ouays+W3nlwiLCBcIuaWh+WxseW3nlwiLCBcIuilv+WPjOeJiOe6s+W3nlwiXSxcclxuICAgICAgICBbXCLmna3lt57luIJcIiwgXCLmuZblt57luIJcIiwgXCLlmInlhbTluIJcIiwgXCLoiJ/lsbHluIJcIiwgXCLlroHms6LluIJcIiwgXCLnu43lhbTluIJcIiwgXCLooaLlt57luIJcIiwgXCLph5HljY7luIJcIiwgXCLlj7Dlt57luIJcIiwgXCLmuKnlt57luIJcIiwgXCLkuL3msLTluIJcIl1cclxuICAgICAgICBdLFxyXG4gICAgfVxyXG4gICAgY3JlYXRlQ2hpbGRDb21wb25lbnRzKCkge1xyXG4gICAgICAgIHRoaXMucHJvdmluY2UgPSB0aGlzLnByb3ZpbmNlQ29uZmlnW0FwcENvbnN0Lmxhbmd1YWdlVHlwZV07XHJcbiAgICAgICAgdGhpcy5jaXR5ID0gdGhpcy5jaXR5Q29uZmlnW0FwcENvbnN0Lmxhbmd1YWdlVHlwZV07XHJcbiAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRDb21wb25lbnRzKCk7XHJcbiAgICAgICAgdGhpcy5mZ3VpQ29tcG9uZW50LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVpX2J0bl9icmVhay5vbkNsaWNrKHRoaXMuSGlkZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy51aV9idG5fYWRkR29sZC5vbkNsaWNrKHRoaXMudG9Ub3B1cCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy51aV9idG5fYmluZFR4Lm9uQ2xpY2sodGhpcy5iaW5kVHgsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudHlwZUNvbnRyb2xsZXIgPSB0aGlzLmZndWlDb21wb25lbnQuZ2V0Q29udHJvbGxlcihcInR5cGVcIik7XHJcblxyXG4gICAgICAgIHRoaXMudWlfYnRuX2NhcmRhZGRHb2xkLm9uQ2xpY2sodGhpcy50b1RvcHVwLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnVpX2J0bl9jYXJkYnJlYWsub25DbGljayh0aGlzLkhpZGVDYXJkLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnVpX2J0bl9iaW5kQ2FyZC5vbkNsaWNrKHRoaXMuYmluZENhcmQsIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnVpX2J0bl90eC5vbkNsaWNrKHRoaXMuc2VuZHR4TWVzc2FnZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy51aV9idG5fdHhicmVhazEub25DbGljayh0aGlzLmNsb3NlVHhzcSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy51aV9idG5fb3RoZXJ0eC5vbkNsaWNrKHRoaXMuc2hvd090aGVydHgsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudWlfYnRuX3R4cXJlbi5vbkNsaWNrKHRoaXMuY2xvc2VUeHNxLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy50eXBlMkNvbnRyb2xsZXIgPSB0aGlzLnVpX3BheVB3ZC5nZXRDb250cm9sbGVyKFwiYzFcIik7XHJcbiAgICAgICAgdGhpcy51aV9idG5feXp6ZmJyZWFrMS5vbkNsaWNrKHRoaXMuY2xvc2VQd2QsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudWlfYnRuX3l6cXV4aWFvLm9uQ2xpY2sodGhpcy5jbG9zZVB3ZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy51aV9idG5faW5wdXRiZy5vbkNsaWNrKHRoaXMuc2V0Rm9jdXMsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudWlfaW5wdXRMYWJlbC5vbihmZ3VpLkV2ZW50LlRFWFRfQ0hBTkdFLCB0aGlzLmNoYW5nZWRUZXh0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLnVpX2lucHV0TGFiZWwubm9kZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICB0aGlzLnVpX2J0bl92Y29uZmlybS5vbkNsaWNrKHRoaXMuc2VuZENvbmZpcm0sIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnVpX3Byb3ZpbmNlLm9uKGZndWkuRXZlbnQuU1RBVFVTX0NIQU5HRUQsIHRoaXMub25DaGFuZ2VkLCB0aGlzKTtcclxuXHJcbiAgICAgICAgLyoq5o+Q546w6K6w5b2VICovXHJcbiAgICAgICAgdGhpcy51aV9MaXN0UmVjb3JkLml0ZW1SZW5kZXJlciA9IHRoaXMuVHhSZWNvcmRMaXN0UmVuZGVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy51aV9yZWNvcmROZXh0Lm9uQ2xpY2sodGhpcy5uZXh0VHhSZWNvcmQuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy51aV9yZWNvcmRVcC5vbkNsaWNrKHRoaXMudXBUeFJlY29yZC5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnVpX2J0bl90eFJlY29yZC5vbkNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5TaG93VHhSZWNvcmQodHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBPbkxvYWRDb21wbGV0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5TaG93KCk7XHJcbiAgICB9XHJcbiAgICBIaWRlKCkge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnV2l0aGRyYXdhbFZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICBpZiAodGhpcy51aV9UeFJlY29yZFBhbmVsLnZpc2libGUpIHtcclxuICAgICAgICAgICAgdGhpcy5TaG93VHhSZWNvcmQoZmFsc2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN1cGVyLkhpZGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgLyoq5piv5ZCm5pyJ57uR5a6a5Y2hICovXHJcbiAgICBwdWJsaWMgZ2V0TW9iaWxlcGhvbmVudW0oKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBMb2JieVZpZXdDdHIuaW5zdGFuY2UuTW9kZWwubW9iaWxlcGhvbmVuO1xyXG4gICAgICAgIGlmIChkYXRhLmJJZCkge1xyXG4gICAgICAgICAgICB0aGlzLnR5cGVDb250cm9sbGVyLnNldFNlbGVjdGVkSW5kZXgoMSk7XHJcbiAgICAgICAgICAgIHRoaXMudWlfdXNlcnpzbmFtZS50ZXh0ID0gZGF0YS5iTmFtZTtcclxuICAgICAgICAgICAgdGhpcy51aV90eEJhbmtOYW1lLnRleHQgPSBkYXRhLmJhbms7XHJcbiAgICAgICAgICAgIHRoaXMudWlfYnRuX3R4UmVjb3JkLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmdldENoaWxkKFwibjU2XCIpLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7Ly/msqHmnInnu5HljaFcclxuICAgICAgICAgICAgdGhpcy50eXBlQ29udHJvbGxlci5zZXRTZWxlY3RlZEluZGV4KDApO1xyXG4gICAgICAgICAgICB0aGlzLnVpX2J0bl90eFJlY29yZC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Q2hpbGQoXCJuNTZcIikudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKirnu5Hlrprpk7booYzljaEgKi9cclxuICAgIHB1YmxpYyBiaW5kQ2FyZCgpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ1dpdGhkcmF3YWxWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgaWYgKCF0aGlzLnVpX25hbWUudGV4dCB8fCAhdGhpcy51aV9iYW5rbnVtLnRleHQgfHwgIXRoaXMudWlfU3ViYnJhbmNoLnRleHQpIHtcclxuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLlNob3dUaXBMYWJlbChcIuivt+Whq+WGmeWujOaVtFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyAgIC8qKjHnu5HlrprmlK/ku5jlrp0gICAy57uR5a6a6ZO26KGM5Y2hICovXHJcbiAgICAgICAgLy8gICBwdWJsaWMgdDogbnVtYmVyO1xyXG4gICAgICAgIC8vICAgLyoqIOeOqeWutmlkKi9cclxuICAgICAgICAvLyAgIHB1YmxpYyB1aWQ6IG51bWJlcjtcclxuICAgICAgICAvLyAgIC8qKuaUr+S7mOWuneWnk+WQjSAg5oiWICDpk7booYzljaHmjIHmnInkurogKi9cclxuICAgICAgICAvLyAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgLy8gICAvKirmlK/ku5jlrp3otKblj7cg6ZO26KGM5Y2h5Y2h5Y+3ICovXHJcbiAgICAgICAgLy8gICBwdWJsaWMgYWNjb3VudDogc3RyaW5nO1xyXG4gICAgICAgIC8vICAgLyoqIOmTtuihjOWQjeWtlyovXHJcbiAgICAgICAgLy8gICBwdWJsaWMgYmFuazogc3RyaW5nO1xyXG4gICAgICAgIC8vICAgLyoq5Zu95a62ICovXHJcbiAgICAgICAgLy8gICBwdWJsaWMgY291bnRyeTogc3RyaW5nO1xyXG4gICAgICAgIC8vICAgLyoq5byA5oi35pSv6KGMICovXHJcbiAgICAgICAgLy8gICBwdWJsaWMgYnJhbmNoOiBzdHJpbmc7XHJcbiAgICAgICAgLy8gICAvKirkuqTmmJPlr4bnoIEgKi9cclxuICAgICAgICAvLyAgIHB1YmxpYyBwd2Q6IHN0cmluZztcclxuICAgICAgICAvLyAgIC8qKuW8gOaIt+ihjOaJgOWcqOecgeS7vSAqL1xyXG4gICAgICAgIC8vICAgcHVibGljIHByb3ZpbmNlOiBTdHJpbmc7XHJcbiAgICAgICAgbGV0IGluZm86IHtcclxuICAgICAgICAgICAgdDogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIGFjY291bnQ6IHN0cmluZyxcclxuICAgICAgICAgICAgYmFuazogc3RyaW5nLCBjb3VudHJ5OiBzdHJpbmcsIGJyYW5jaDogc3RyaW5nLCBwcm92aW5jZTogc3RyaW5nXHJcbiAgICAgICAgfSA9IHsgdDogMiwgbmFtZTogJycsIGFjY291bnQ6ICcnLCBiYW5rOiAnJywgY291bnRyeTogXCJcIiwgYnJhbmNoOiAnJywgcHJvdmluY2U6ICcnIH07XHJcbiAgICAgICAgaW5mby5hY2NvdW50ID0gdGhpcy51aV9iYW5rbnVtLnRleHQ7XHJcbiAgICAgICAgaW5mby5iYW5rID0gdGhpcy51aV9iYW5rbmFtZS5pdGVtc1t0aGlzLnVpX2JhbmtuYW1lLnNlbGVjdGVkSW5kZXhdO1xyXG4gICAgICAgIGluZm8uY291bnRyeSA9IHRoaXMudWlfY291bnRyeS5pdGVtc1t0aGlzLnVpX2NvdW50cnkuc2VsZWN0ZWRJbmRleF07XHJcbiAgICAgICAgaW5mby5uYW1lID0gdGhpcy51aV9uYW1lLnRleHQ7XHJcbiAgICAgICAgaW5mby5icmFuY2ggPSB0aGlzLnVpX1N1YmJyYW5jaC50ZXh0O1xyXG4gICAgICAgIGluZm8ucHJvdmluY2UgPSB0aGlzLnVpX3Byb3ZpbmNlLml0ZW1zW3RoaXMudWlfcHJvdmluY2Uuc2VsZWN0ZWRJbmRleF0gKyB0aGlzLnVpX2NpdHkuaXRlbXNbdGhpcy51aV9jaXR5LnNlbGVjdGVkSW5kZXhdO1xyXG4gICAgICAgIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS5jc19iaW5kYWxpcGF5YmFuayhpbmZvKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirlj5HpgIHmj5DnjrDmtojmga8gKi9cclxuICAgIHB1YmxpYyBzZW5kdHhNZXNzYWdlKCkge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnV2l0aGRyYXdhbFZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICBsZXQgZ29sZCA9IHRoaXMudWlfdHhHb2xkTnVtLnRleHQ7XHJcbiAgICAgICAgaWYgKGlzTmFOKCtnb2xkKSkge1xyXG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKFwi5aGr5YaZ55qE6YeR6aKd5LiN5q2j56GuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmICghZ29sZCB8fCArZ29sZCA8IDQwMCB8fCArZ29sZCA+IDUwMDAwKSB7XHJcbiAgICAgICAgLy8gICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwoXCLloavlhpnnmoTph5Hpop3kuI3mraPnoa5cIik7XHJcbiAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gaWYgKCgoK2dvbGQpICogMTAwKSA+IEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC5nb2xkKSB7XHJcbiAgICAgICAgLy8gICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwoXCLlj6/mj5Dlj5bpop3luqbkuI3otrNcIik7XHJcbiAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIHZpcOaPkOeOsOmineW6pumZkOWItlxyXG4gICAgICAgIGxldCB2aXBDb25maWcgPSBMb2JieVZpZXdDdHIuaW5zdGFuY2UuTW9kZWwudmlwQ29uZmlnLldpdGhkcmF3TGltaXQ7XHJcbiAgICAgICAgbGV0IG15VmlwTGV2ZWwgPSBMb2JieVZpZXdDdHIuaW5zdGFuY2UuTW9kZWwudmlwTGV2ZWw7XHJcbiAgICAgICAgbGV0IGxpbWl0R29sZCA9IHZpcENvbmZpZ1tteVZpcExldmVsXTtcclxuICAgICAgICAvLyBpZiAoKCtnb2xkKSA+IGxpbWl0R29sZCkge1xyXG4gICAgICAgIC8vICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKFwi6LaF6L+H5Y2V56yU5o+Q546w6aKd5bqm6ZmQ5Yi2XCIpO1xyXG4gICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICB0aGlzLnNob3dQd2QoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirlhbPpl63mj5DnjrDmj5DnjrDnlLPor7cgKi9cclxuICAgIHB1YmxpYyBjbG9zZVR4c3EoKSB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdXaXRoZHJhd2FsVmlldycsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHRoaXMudWlfVHhzcWNvbS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5YW25LuW5o+Q546wICovXHJcbiAgICBwdWJsaWMgc2hvd090aGVydHgoKSB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdXaXRoZHJhd2FsVmlldycsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHRoaXMuc2hvd0JpbmRDYXJkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc3ZlcmlmaWNhdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8qKuaYvuekuumqjOivgeWvhueggSAqL1xyXG4gICAgcHVibGljIHNob3dQd2QoKSB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdXaXRoZHJhd2FsVmlldycsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGxldCB2ZXJpZmljYXRpb24gPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0eHZlcmlmaWNhdGlvbl9wd2RcIik7XHJcbiAgICAgICAgaWYgKHZlcmlmaWNhdGlvbikge1xyXG4gICAgICAgICAgICBsZXQgdGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIGlmICgodGltZSAtIHZlcmlmaWNhdGlvbikgPiAyNTkyMDAwMDApIHsvL+S4ieWkqVxyXG4gICAgICAgICAgICAgICAgdGhpcy51aV9UeHNxY29tLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudWlfcGF5UHdkLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKEFwcENvbnN0Lm1QbGF5ZXJNb2RlbFtcIlVzZXJQYXNzd29yZFwiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZTJDb250cm9sbGVyLnNldFNlbGVjdGVkSW5kZXgoMCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZTJDb250cm9sbGVyLnNldFNlbGVjdGVkSW5kZXgoMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzdmVyaWZpY2F0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmVyaWZpY2F0aW9uUHdkU3VjKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pc3ZlcmlmaWNhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudWlfVHhzcWNvbS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudWlfcGF5UHdkLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFuKCk7XHJcbiAgICAgICAgICAgIGlmIChBcHBDb25zdC5tUGxheWVyTW9kZWxbXCJVc2VyUGFzc3dvcmRcIl0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudHlwZTJDb250cm9sbGVyLnNldFNlbGVjdGVkSW5kZXgoMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGUyQ29udHJvbGxlci5zZXRTZWxlY3RlZEluZGV4KDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGNsb3NlUHdkKCkge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnV2l0aGRyYXdhbFZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICB0aGlzLnVpX3BheVB3ZC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0Rm9jdXMoKSB7XHJcbiAgICAgICAgdGhpcy51aV9pbnB1dExhYmVsLnJlcXVlc3RGb2N1cygpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGNoYW5nZWRUZXh0KGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHRleHQgPSB0aGlzLnVpX2lucHV0TGFiZWwudGV4dDtcclxuICAgICAgICB0aGlzLmlucHV0UHdkID0gdGV4dDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaSA+IHRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzW1widWlfcHdkXCIgKyBpXS50ZXh0ID0gJyc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzW1widWlfcHdkXCIgKyBpXS50ZXh0ID0gdGV4dFtpXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY2xlYW4oKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dFB3ZCA9ICcnO1xyXG4gICAgICAgIHRoaXMudWlfaW5wdXRMYWJlbC50ZXh0ID0gJyc7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpc1tcInVpX3B3ZFwiICsgaV0udGV4dCA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKirnoa7orqTpqozor4Hlr4bnoIEgKi9cclxuICAgIHB1YmxpYyBzZW5kQ29uZmlybSgpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ1dpdGhkcmF3YWxWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRQd2QubGVuZ3RoICE9IDYpIHtcclxuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLlNob3dUaXBMYWJlbChcIuWvhueivOagvOW8j+S4jeato+eiulwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+mpl+itieaUr+S7mOWvhueivFxyXG4gICAgICAgIGxldCBjb250cm8gPSB0aGlzLnR5cGUyQ29udHJvbGxlci5zZWxlY3RlZEluZGV4O1xyXG4gICAgICAgIGlmIChjb250cm8gPT0gMSkge1xyXG4gICAgICAgICAgICBMb2JieVZpZXdDdHIuaW5zdGFuY2UuY3NfY2hhbmdlUGFzc3dvcmRfYXBwYmsoJycsIHRoaXMuaW5wdXRQd2QsIGZhbHNlLCB0cnVlKTsgLy/oqK3nva5cclxuICAgICAgICB9IGVsc2UgeyAvL+mpl+itieaUr+S7mOWvhueivFxyXG4gICAgICAgICAgICBMb2JieVZpZXdDdHIuaW5zdGFuY2UuY3NfZW50ZXJiYW5rX2JrKHRoaXMuaW5wdXRQd2QsIHRydWUpOyAvL+mqjOivgeaUr+S7mOWvhueggVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKuiuvue9ruaUr+S7mOWvhueggeaIkOWKnyAqL1xyXG4gICAgcHVibGljIHNldFB3ZFN1Y2NlZWQoKSB7XHJcbiAgICAgICAgdGhpcy50eXBlMkNvbnRyb2xsZXIuc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgQXBwQ29uc3QubVBsYXllck1vZGVsW1wiVXNlclBhc3N3b3JkXCJdID0gdGhpcy5pbnB1dFB3ZDtcclxuICAgICAgICB0aGlzLmNsZWFuKCk7XHJcbiAgICAgICAgdGhpcy51aV9pbnB1dExhYmVsLnJlcXVlc3RGb2N1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKumqjOivgeaUr+S7mOWvhueggeaIkOWKnyAqL1xyXG4gICAgcHVibGljIHZlcmlmaWNhdGlvblB3ZFN1YygpIHtcclxuICAgICAgICAvL1RPRE8g5Y+R6YCB5o+Q546w55Sz6K+3XHJcbiAgICAgICAgaWYgKHRoaXMuaXN2ZXJpZmljYXRpb24pIHtcclxuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidHh2ZXJpZmljYXRpb25fcHdkXCIsIERhdGUubm93KCkgKyAnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudWlfcGF5UHdkLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlbmRXaXRoZHJhd2FsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Y+R6YCB5o+Q546wICovXHJcbiAgICBwdWJsaWMgc2VuZFdpdGhkcmF3YWwoKSB7XHJcbiAgICAgICAgLy/ov5nph4zmqKHmi5/kuIDkuKropoHplIHkvY/lhajlsY/nmoTnrYnlvoXov4fnqItcclxuICAgICAgICBmZ3VpLkdSb290Lmluc3Quc2hvd01vZGFsV2FpdCgpO1xyXG4gICAgICAgIGxldCB1cmwgPSBCYXNlRnJhbWVOYXRpdmUuc2VydmVybGlzdEl0ZW0uYXBpQWRyZXNzICsgXCIvYXBpL0dhbWUvVXNlckNhc2hNb25leVwiO1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIHR5cGU6IDIsXHJcbiAgICAgICAgICAgIG1vbmV5OiAoK3RoaXMudWlfdHhHb2xkTnVtLnRleHQpICogMTAwLFxyXG4gICAgICAgICAgICBVc2VySWQ6IEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC51c2VyaWQsXHJcbiAgICAgICAgICAgIE5pY2tOYW1lOiBBcHBDb25zdC5tUGxheWVyTW9kZWwuX24sXHJcbiAgICAgICAgICAgIEJhbmtOdW06IExvYmJ5Vmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5tb2JpbGVwaG9uZW4uYklkLCAgIC8v5Y2h5Y+3XHJcbiAgICAgICAgICAgIEJhbmtOYW1lOiBMb2JieVZpZXdDdHIuaW5zdGFuY2UuTW9kZWwubW9iaWxlcGhvbmVuLmJhbmssICAvL+mTtuihjOWQjeWtl1xyXG4gICAgICAgICAgICBCYW5rVW46IExvYmJ5Vmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5tb2JpbGVwaG9uZW4uYk5hbWUsICAvL+ecn+WunuWnk+WQjVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PVwiLCBKU09OLnN0cmluZ2lmeShwYXJhbXMpKTtcclxuICAgICAgICBIdHRwSGVscEV4Lmluc3RhbmNlLnBvc3QodXJsLCBwYXJhbXMsIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGZndWkuR1Jvb3QuaW5zdC5jbG9zZU1vZGFsV2FpdCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCI9PT09PT095o+Q546wPT09PT09PT09PVwiLCByZXMpXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzW1wicmVzdWx0XCJdID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpX1R4c3Fjb20udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51aV90eGppblRleHQuc2V0VmFyKFwiZ29sZFwiLCB0aGlzLnVpX3R4R29sZE51bS50ZXh0KS5mbHVzaFZhcnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgZ29sZHMgPSBBcHBDb25zdC5tUGxheWVyTW9kZWwuZ29sZDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBnb2xkcyAtPSAoK3RoaXMudWlfdHhHb2xkTnVtLnRleHQpICogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC5nb2xkID0gZ29sZHM7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNbXCJyZXN1bHRcIl0gPT0gLTg5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFwi5o+Q546w6YeR6aKd6ZyA6KaB5bCP5LqOMTB3XCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNbXCJyZXN1bHRcIl0gPT0gLTg4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFwi5rWB5rC05LiN5aSfXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNbXCJyZXN1bHRcIl0gPT0gLTkwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFwiMjTlsI/ml7blhoXmnIDlpJrmj5DnjrDkuKTmrKFcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3LlNob3dUaXBMYWJlbChcIuaPkOePvuWkseaVl1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIj09PT09PT3mj5DnjrBlcnI9PT09PT09PT09XCIsIGVycilcclxuICAgICAgICAgICAgICAgIGZndWkuR1Jvb3QuaW5zdC5jbG9zZU1vZGFsV2FpdCgpO1xyXG4gICAgICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFwi5o+Q54++5aSx5pWXXCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcHVibGljIHVwZGF0ZUdvbGQoKSB7XHJcbiAgICAgICAgdGhpcy51aV9nb2xkLnRleHQgPSBVSVV0aWwuZm9ybWF0TnVtYmVyKEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC5nb2xkKSArICcnO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuaPkOeOsOiusOW9lSAqL1xyXG4gICAgcHJpdmF0ZSBUeFJlY29yZExpc3REYXRhOiBhbnlbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBUeFBhZ2VJbmRleDogbnVtYmVyID0gMTtcclxuICAgIHByaXZhdGUgVHhQYWdlU2l6ZTogbnVtYmVyID0gMzA7XHJcblxyXG4gICAgcHVibGljIFNob3dUeFJlY29yZChpc1Nob3c6IGJvb2xlYW4pIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ1dpdGhkcmF3YWxWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgdGhpcy51aV9UeFJlY29yZFBhbmVsLnZpc2libGUgPSBpc1Nob3c7XHJcbiAgICAgICAgdGhpcy51aV9kcmF3YWwxLnZpc2libGUgPSAhaXNTaG93O1xyXG4gICAgICAgIHRoaXMudWlfYnRuX3R4UmVjb3JkLnZpc2libGUgPSAhaXNTaG93O1xyXG4gICAgICAgIHRoaXMuZ2V0Q2hpbGQoXCJuNTZcIikudmlzaWJsZSA9ICFpc1Nob3c7XHJcbiAgICAgICAgaWYgKGlzU2hvdykge1xyXG4gICAgICAgICAgICB0aGlzLmdldFR4UmVjb3JkRGF0YSgxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0VHhSZWNvcmREYXRhKF9wYWdlaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMudWlfTGlzdFJlY29yZC5udW1JdGVtcyA9IDA7XHJcbiAgICAgICAgdGhpcy5UeFJlY29yZExpc3REYXRhID0gW107XHJcbiAgICAgICAgdGhpcy5UeFBhZ2VJbmRleCA9IF9wYWdlaW5kZXg7XHJcblxyXG4gICAgICAgIGxldCB1cmwgPSBCYXNlRnJhbWVOYXRpdmUuc2VydmVybGlzdEl0ZW0uYXBpQWRyZXNzICsgXCIvYXBpL0dhbWUvR2V0VXNlclRha2Vub3dcIjtcclxuICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICBwYWdlaW5kZXg6IF9wYWdlaW5kZXgsXHJcbiAgICAgICAgICAgIHBhZ2VzaXplOiB0aGlzLlR4UGFnZVNpemUsXHJcbiAgICAgICAgICAgIHVzZXJpZDogQXBwQ29uc3QubVBsYXllck1vZGVsLnVzZXJpZCxcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PT1cIiwgSlNPTi5zdHJpbmdpZnkocGFyYW1zKSk7XHJcbiAgICAgICAgSHR0cEhlbHBFeC5pbnN0YW5jZS5wb3N0KHVybCwgcGFyYW1zLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmZ3VpLkdSb290Lmluc3QuY2xvc2VNb2RhbFdhaXQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPT09PT09PeaPkOeOsOiusOW9lT09PT09PT09PT1cIiwgcmVzKVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5jb2RlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlR4UmVjb3JkTGlzdERhdGEgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpX0xpc3RSZWNvcmQubnVtSXRlbXMgPSB0aGlzLlR4UmVjb3JkTGlzdERhdGEubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpX3JlY29yZE5leHQuZW5hYmxlZCA9IHRoaXMuVHhSZWNvcmRMaXN0RGF0YS5sZW5ndGggPT0gdGhpcy5UeFBhZ2VTaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudWlfcmVjb3JkVXAuZW5hYmxlZCA9IF9wYWdlaW5kZXggIT0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3LlNob3dUaXBMYWJlbChcIuaPkOePvuaVsOaNruiOt+WPluWkseaVl1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIj09PT09PT3mj5DnjrDorrDlvZVlcnI9PT09PT09PT09XCIsIGVycilcclxuICAgICAgICAgICAgICAgIGZndWkuR1Jvb3QuaW5zdC5jbG9zZU1vZGFsV2FpdCgpO1xyXG4gICAgICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFwi5o+Q54++6K6w5b2V5aSx5pWXXCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcHVibGljIFR4UmVjb3JkTGlzdFJlbmRlcihpbmRleDogbnVtYmVyLCBpdGVtOiBmZ3VpLkdPYmplY3QpIHtcclxuICAgICAgICBsZXQgZ28gPSA8Zmd1aS5HQ29tcG9uZW50Pml0ZW07XHJcbiAgICAgICAgZ28uZ2V0Q2hpbGQoXCJ0aW1lXCIpLmFzVGV4dEZpZWxkLnRleHQgPSB0aGlzLlR4UmVjb3JkTGlzdERhdGFbaW5kZXhdLmRhdGU7XHJcbiAgICAgICAgZ28uZ2V0Q2hpbGQoXCJtb25leVwiKS5hc1RleHRGaWVsZC50ZXh0ID0gdGhpcy5UeFJlY29yZExpc3REYXRhW2luZGV4XS5tb25leTtcclxuICAgICAgICBnby5nZXRDaGlsZChcIm9yZGVyaWRcIikuYXNUZXh0RmllbGQudGV4dCA9IHRoaXMuVHhSZWNvcmRMaXN0RGF0YVtpbmRleF0ub3JkZXJudW07XHJcbiAgICAgICAgZ28uZ2V0Q2hpbGQoXCJzdGF0ZVwiKS5hc1RleHRGaWVsZC50ZXh0ID0gdGhpcy5UeFJlY29yZExpc3REYXRhW2luZGV4XS5zdGF0ZXM7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIG5leHRUeFJlY29yZCgpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ1dpdGhkcmF3YWxWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgdGhpcy5nZXRUeFJlY29yZERhdGEodGhpcy5UeFBhZ2VJbmRleCArIDEpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSB1cFR4UmVjb3JkKCkge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnV2l0aGRyYXdhbFZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICB0aGlzLmdldFR4UmVjb3JkRGF0YSh0aGlzLlR4UGFnZUluZGV4IC0gMSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBTaG93KCkge1xyXG4gICAgICAgIHN1cGVyLlNob3coKTtcclxuICAgICAgICB0aGlzLnVpX3R4R29sZE51bS50ZXh0ID0gJyc7XHJcbiAgICAgICAgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLmNzX21vYmlsZXBob25lbnVtKCk7XHJcbiAgICAgICAgdGhpcy51aV9nb2xkLnRleHQgPSBVSVV0aWwuZm9ybWF0TnVtYmVyKEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC5nb2xkKSArICcnO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHRvVG9wdXAoKSB7XHJcbiAgICAgICAgdGhpcy5IaWRlKCk7XHJcbiAgICAgICAgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLnZpZXcuc2hvd1RvcHVwKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYmluZFR4KCkge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnV2l0aGRyYXdhbFZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICB0aGlzLnNob3dCaW5kQ2FyZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuaYvuekuue7keWumumTtuihjOWNoSAqL1xyXG4gICAgcHJpdmF0ZSBzaG93QmluZENhcmQoKSB7XHJcbiAgICAgICAgdGhpcy51aV9jYXJkZ29sZC50ZXh0ID0gVUlVdGlsLmZvcm1hdE51bWJlcihBcHBDb25zdC5tUGxheWVyTW9kZWwuZ29sZCkgKyAnJztcclxuICAgICAgICB0aGlzLnVpX2JpbmRjYXJkLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudWlfcHJvdmluY2UuaXRlbXMgPSB0aGlzLnByb3ZpbmNlO1xyXG4gICAgICAgIHRoaXMudWlfY2l0eS5pdGVtcyA9IHRoaXMuY2l0eVswXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25DaGFuZ2VkKCkge1xyXG4gICAgICAgIHRoaXMudWlfY2l0eS5pdGVtcyA9IHRoaXMuY2l0eVt0aGlzLnVpX3Byb3ZpbmNlLnNlbGVjdGVkSW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBIaWRlQ2FyZCgpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ1dpdGhkcmF3YWxWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgdGhpcy51aV9iaW5kY2FyZC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJpbmRDYXJkU3VjY2VzcygpIHtcclxuICAgICAgICBMb2JieVZpZXdDdHIuaW5zdGFuY2UuY3NfbW9iaWxlcGhvbmVudW0oKTtcclxuICAgICAgICB0aGlzLnVpX2JpbmRjYXJkLnZpc2libGUgPSBmYWxzZTtcclxuICAgIH1cclxufSJdfQ==