const LAST_UPDATE = "2020.02.01-20:30:22";
const DATA = {
  "110000": {
    "confirmedCount": 168,
    "cityName": "北京市",
    "color": "#73181B"
  },
  "120000": {
    "confirmedCount": 38,
    "cityName": "天津市",
    "color": "#E04B49"
  },
  "130100": {
    "confirmedCount": 12,
    "cityName": "石家庄市",
    "color": "#E04B49"
  },
  "130200": {
    "confirmedCount": 8,
    "cityName": "唐山市",
    "color": "#F08E7E"
  },
  "130300": {
    "confirmedCount": 1,
    "cityName": "秦皇岛市",
    "color": "#F08E7E"
  },
  "130400": {
    "confirmedCount": 10,
    "cityName": "邯郸市",
    "color": "#E04B49"
  },
  "130500": {
    "confirmedCount": 10,
    "cityName": "邢台市",
    "color": "#E04B49"
  },
  "130600": {
    "confirmedCount": 11,
    "cityName": "保定市",
    "color": "#E04B49"
  },
  "130700": {
    "confirmedCount": 8,
    "cityName": "张家口市",
    "color": "#F08E7E"
  },
  "130800": {
    "confirmedCount": 2,
    "cityName": "承德市",
    "color": "#F08E7E"
  },
  "130900": {
    "confirmedCount": 19,
    "cityName": "沧州市",
    "color": "#E04B49"
  },
  "131000": {
    "confirmedCount": 11,
    "cityName": "廊坊市",
    "color": "#E04B49"
  },
  "131100": {
    "confirmedCount": 4,
    "cityName": "衡水市",
    "color": "#F08E7E"
  },
  "140100": {
    "confirmedCount": 4,
    "cityName": "太原市",
    "color": "#F08E7E"
  },
  "140200": {
    "confirmedCount": 6,
    "cityName": "大同市",
    "color": "#F08E7E"
  },
  "140300": {
    "confirmedCount": 1,
    "cityName": "阳泉市",
    "color": "#F08E7E"
  },
  "140400": {
    "confirmedCount": 3,
    "cityName": "长治市",
    "color": "#F08E7E"
  },
  "140500": {
    "confirmedCount": 2,
    "cityName": "晋城市",
    "color": "#F08E7E"
  },
  "140600": {
    "confirmedCount": 3,
    "cityName": "朔州市",
    "color": "#F08E7E"
  },
  "140700": {
    "confirmedCount": 11,
    "cityName": "晋中市",
    "color": "#E04B49"
  },
  "140800": {
    "confirmedCount": 10,
    "cityName": "运城市",
    "color": "#E04B49"
  },
  "140900": {
    "confirmedCount": 1,
    "cityName": "忻州市",
    "color": "#F08E7E"
  },
  "141000": {
    "confirmedCount": 1,
    "cityName": "临汾市",
    "color": "#F08E7E"
  },
  "141100": {
    "confirmedCount": 5,
    "cityName": "吕梁市",
    "color": "#F08E7E"
  },
  "150100": {
    "confirmedCount": 2,
    "cityName": "呼和浩特市",
    "color": "#F08E7E"
  },
  "150200": {
    "confirmedCount": 3,
    "cityName": "包头市",
    "color": "#F08E7E"
  },
  "150300": {
    "confirmedCount": 0,
    "cityName": "乌海市",
    "color": "#FFFFFF"
  },
  "150400": {
    "confirmedCount": 2,
    "cityName": "赤峰市",
    "color": "#F08E7E"
  },
  "150500": {
    "confirmedCount": 1,
    "cityName": "通辽市",
    "color": "#F08E7E"
  },
  "150600": {
    "confirmedCount": 5,
    "cityName": "鄂尔多斯市",
    "color": "#F08E7E"
  },
  "150700": {
    "confirmedCount": 2,
    "cityName": "呼伦贝尔市",
    "color": "#F08E7E"
  },
  "150800": {
    "confirmedCount": 3,
    "cityName": "巴彦淖尔市",
    "color": "#F08E7E"
  },
  "150900": {
    "confirmedCount": 2,
    "cityName": "乌兰察布市",
    "color": "#F08E7E"
  },
  "152200": {
    "confirmedCount": 1,
    "cityName": "兴安盟",
    "color": "#F08E7E"
  },
  "152500": {
    "confirmedCount": 2,
    "cityName": "锡林郭勒盟",
    "color": "#F08E7E"
  },
  "152900": {
    "confirmedCount": 0,
    "cityName": "阿拉善盟",
    "color": "#FFFFFF"
  },
  "210100": {
    "confirmedCount": 13,
    "cityName": "沈阳市",
    "color": "#E04B49"
  },
  "210200": {
    "confirmedCount": 10,
    "cityName": "大连市",
    "color": "#E04B49"
  },
  "210300": {
    "confirmedCount": 1,
    "cityName": "鞍山市",
    "color": "#F08E7E"
  },
  "210400": {
    "confirmedCount": 0,
    "cityName": "抚顺市",
    "color": "#FFFFFF"
  },
  "210500": {
    "confirmedCount": 3,
    "cityName": "本溪市",
    "color": "#F08E7E"
  },
  "210600": {
    "confirmedCount": 5,
    "cityName": "丹东市",
    "color": "#F08E7E"
  },
  "210700": {
    "confirmedCount": 7,
    "cityName": "锦州市",
    "color": "#F08E7E"
  },
  "210800": {
    "confirmedCount": 1,
    "cityName": "营口市",
    "color": "#F08E7E"
  },
  "210900": {
    "confirmedCount": 2,
    "cityName": "阜新市",
    "color": "#F08E7E"
  },
  "211000": {
    "confirmedCount": 1,
    "cityName": "辽阳市",
    "color": "#F08E7E"
  },
  "211100": {
    "confirmedCount": 7,
    "cityName": "盘锦市",
    "color": "#F08E7E"
  },
  "211200": {
    "confirmedCount": 2,
    "cityName": "铁岭市",
    "color": "#F08E7E"
  },
  "211300": {
    "confirmedCount": 6,
    "cityName": "朝阳市",
    "color": "#F08E7E"
  },
  "211400": {
    "confirmedCount": 5,
    "cityName": "葫芦岛市",
    "color": "#F08E7E"
  },
  "220100": {
    "confirmedCount": 7,
    "cityName": "长春市",
    "color": "#F08E7E"
  },
  "220200": {
    "confirmedCount": 3,
    "cityName": "吉林市",
    "color": "#F08E7E"
  },
  "220300": {
    "confirmedCount": 2,
    "cityName": "四平市",
    "color": "#F08E7E"
  },
  "220400": {
    "confirmedCount": 0,
    "cityName": "辽源市",
    "color": "#FFFFFF"
  },
  "220500": {
    "confirmedCount": 1,
    "cityName": "通化市",
    "color": "#F08E7E"
  },
  "220600": {
    "confirmedCount": 0,
    "cityName": "白山市",
    "color": "#FFFFFF"
  },
  "220700": {
    "confirmedCount": 2,
    "cityName": "松原市",
    "color": "#F08E7E"
  },
  "220800": {
    "confirmedCount": 0,
    "cityName": "白城市",
    "color": "#FFFFFF"
  },
  "222400": {
    "confirmedCount": 2,
    "cityName": "延边朝鲜族自治州",
    "color": "#F08E7E"
  },
  "230100": {
    "confirmedCount": 25,
    "cityName": "哈尔滨市",
    "color": "#E04B49"
  },
  "230200": {
    "confirmedCount": 3,
    "cityName": "齐齐哈尔市",
    "color": "#F08E7E"
  },
  "230300": {
    "confirmedCount": 4,
    "cityName": "鸡西市",
    "color": "#F08E7E"
  },
  "230400": {
    "confirmedCount": 1,
    "cityName": "鹤岗市",
    "color": "#F08E7E"
  },
  "230500": {
    "confirmedCount": 2,
    "cityName": "双鸭山市",
    "color": "#F08E7E"
  },
  "230600": {
    "confirmedCount": 8,
    "cityName": "大庆市",
    "color": "#F08E7E"
  },
  "230700": {
    "confirmedCount": 0,
    "cityName": "伊春市",
    "color": "#FFFFFF"
  },
  "230800": {
    "confirmedCount": 11,
    "cityName": "佳木斯市",
    "color": "#E04B49"
  },
  "230900": {
    "confirmedCount": 5,
    "cityName": "七台河市",
    "color": "#F08E7E"
  },
  "231000": {
    "confirmedCount": 6,
    "cityName": "牡丹江市",
    "color": "#F08E7E"
  },
  "231100": {
    "confirmedCount": 0,
    "cityName": "黑河市",
    "color": "#FFFFFF"
  },
  "231200": {
    "confirmedCount": 13,
    "cityName": "绥化市",
    "color": "#E04B49"
  },
  "232700": {
    "confirmedCount": 2,
    "cityName": "大兴安岭地区",
    "color": "#F08E7E"
  },
  "310000": {
    "confirmedCount": 169,
    "cityName": "上海市",
    "color": "#73181B"
  },
  "320100": {
    "confirmedCount": 28,
    "cityName": "南京市",
    "color": "#E04B49"
  },
  "320200": {
    "confirmedCount": 13,
    "cityName": "无锡市",
    "color": "#E04B49"
  },
  "320300": {
    "confirmedCount": 23,
    "cityName": "徐州市",
    "color": "#E04B49"
  },
  "320400": {
    "confirmedCount": 14,
    "cityName": "常州市",
    "color": "#E04B49"
  },
  "320500": {
    "confirmedCount": 34,
    "cityName": "苏州市",
    "color": "#E04B49"
  },
  "320600": {
    "confirmedCount": 12,
    "cityName": "南通市",
    "color": "#E04B49"
  },
  "320700": {
    "confirmedCount": 13,
    "cityName": "连云港市",
    "color": "#E04B49"
  },
  "320800": {
    "confirmedCount": 12,
    "cityName": "淮安市",
    "color": "#E04B49"
  },
  "320900": {
    "confirmedCount": 13,
    "cityName": "盐城市",
    "color": "#E04B49"
  },
  "321000": {
    "confirmedCount": 13,
    "cityName": "扬州市",
    "color": "#E04B49"
  },
  "321100": {
    "confirmedCount": 2,
    "cityName": "镇江市",
    "color": "#F08E7E"
  },
  "321200": {
    "confirmedCount": 17,
    "cityName": "泰州市",
    "color": "#E04B49"
  },
  "321300": {
    "confirmedCount": 8,
    "cityName": "宿迁市",
    "color": "#F08E7E"
  },
  "330100": {
    "confirmedCount": 98,
    "cityName": "杭州市",
    "color": "#E04B49"
  },
  "330200": {
    "confirmedCount": 55,
    "cityName": "宁波市",
    "color": "#E04B49"
  },
  "330300": {
    "confirmedCount": 241,
    "cityName": "温州市",
    "color": "#73181B"
  },
  "330400": {
    "confirmedCount": 18,
    "cityName": "嘉兴市",
    "color": "#E04B49"
  },
  "330500": {
    "confirmedCount": 6,
    "cityName": "湖州市",
    "color": "#F08E7E"
  },
  "330600": {
    "confirmedCount": 24,
    "cityName": "绍兴市",
    "color": "#E04B49"
  },
  "330700": {
    "confirmedCount": 34,
    "cityName": "金华市",
    "color": "#E04B49"
  },
  "330800": {
    "confirmedCount": 13,
    "cityName": "衢州市",
    "color": "#E04B49"
  },
  "330900": {
    "confirmedCount": 7,
    "cityName": "舟山市",
    "color": "#F08E7E"
  },
  "331000": {
    "confirmedCount": 95,
    "cityName": "台州市",
    "color": "#E04B49"
  },
  "331100": {
    "confirmedCount": 8,
    "cityName": "丽水市",
    "color": "#F08E7E"
  },
  "340100": {
    "confirmedCount": 59,
    "cityName": "合肥市",
    "color": "#E04B49"
  },
  "340200": {
    "confirmedCount": 15,
    "cityName": "芜湖市",
    "color": "#E04B49"
  },
  "340300": {
    "confirmedCount": 16,
    "cityName": "蚌埠市",
    "color": "#E04B49"
  },
  "340400": {
    "confirmedCount": 6,
    "cityName": "淮南市",
    "color": "#F08E7E"
  },
  "340500": {
    "confirmedCount": 22,
    "cityName": "马鞍山市",
    "color": "#E04B49"
  },
  "340600": {
    "confirmedCount": 6,
    "cityName": "淮北市",
    "color": "#F08E7E"
  },
  "340700": {
    "confirmedCount": 16,
    "cityName": "铜陵市",
    "color": "#E04B49"
  },
  "340800": {
    "confirmedCount": 37,
    "cityName": "安庆市",
    "color": "#E04B49"
  },
  "341000": {
    "confirmedCount": 9,
    "cityName": "黄山市",
    "color": "#F08E7E"
  },
  "341100": {
    "confirmedCount": 6,
    "cityName": "滁州市",
    "color": "#F08E7E"
  },
  "341200": {
    "confirmedCount": 47,
    "cityName": "阜阳市",
    "color": "#E04B49"
  },
  "341300": {
    "confirmedCount": 12,
    "cityName": "宿州市",
    "color": "#E04B49"
  },
  "341500": {
    "confirmedCount": 13,
    "cityName": "六安市",
    "color": "#E04B49"
  },
  "341600": {
    "confirmedCount": 25,
    "cityName": "亳州市",
    "color": "#E04B49"
  },
  "341700": {
    "confirmedCount": 4,
    "cityName": "池州市",
    "color": "#F08E7E"
  },
  "341800": {
    "confirmedCount": 4,
    "cityName": "宣城市",
    "color": "#F08E7E"
  },
  "350100": {
    "confirmedCount": 39,
    "cityName": "福州市",
    "color": "#E04B49"
  },
  "350200": {
    "confirmedCount": 17,
    "cityName": "厦门市",
    "color": "#E04B49"
  },
  "350300": {
    "confirmedCount": 25,
    "cityName": "莆田市",
    "color": "#E04B49"
  },
  "350400": {
    "confirmedCount": 10,
    "cityName": "三明市",
    "color": "#E04B49"
  },
  "350500": {
    "confirmedCount": 24,
    "cityName": "泉州市",
    "color": "#E04B49"
  },
  "350600": {
    "confirmedCount": 11,
    "cityName": "漳州市",
    "color": "#E04B49"
  },
  "350700": {
    "confirmedCount": 8,
    "cityName": "南平市",
    "color": "#F08E7E"
  },
  "350800": {
    "confirmedCount": 1,
    "cityName": "龙岩市",
    "color": "#F08E7E"
  },
  "350900": {
    "confirmedCount": 9,
    "cityName": "宁德市",
    "color": "#F08E7E"
  },
  "360100": {
    "confirmedCount": 83,
    "cityName": "南昌市",
    "color": "#E04B49"
  },
  "360200": {
    "confirmedCount": 3,
    "cityName": "景德镇市",
    "color": "#F08E7E"
  },
  "360300": {
    "confirmedCount": 9,
    "cityName": "萍乡市",
    "color": "#F08E7E"
  },
  "360400": {
    "confirmedCount": 43,
    "cityName": "九江市",
    "color": "#E04B49"
  },
  "360500": {
    "confirmedCount": 40,
    "cityName": "新余市",
    "color": "#E04B49"
  },
  "360600": {
    "confirmedCount": 4,
    "cityName": "鹰潭市",
    "color": "#F08E7E"
  },
  "360700": {
    "confirmedCount": 30,
    "cityName": "赣州市",
    "color": "#E04B49"
  },
  "360800": {
    "confirmedCount": 11,
    "cityName": "吉安市",
    "color": "#E04B49"
  },
  "360900": {
    "confirmedCount": 29,
    "cityName": "宜春市",
    "color": "#E04B49"
  },
  "361000": {
    "confirmedCount": 18,
    "cityName": "抚州市",
    "color": "#E04B49"
  },
  "361100": {
    "confirmedCount": 16,
    "cityName": "上饶市",
    "color": "#E04B49"
  },
  "370100": {
    "confirmedCount": 18,
    "cityName": "济南市",
    "color": "#E04B49"
  },
  "370200": {
    "confirmedCount": 21,
    "cityName": "青岛市",
    "color": "#E04B49"
  },
  "370300": {
    "confirmedCount": 10,
    "cityName": "淄博市",
    "color": "#E04B49"
  },
  "370400": {
    "confirmedCount": 12,
    "cityName": "枣庄市",
    "color": "#E04B49"
  },
  "370500": {
    "confirmedCount": 0,
    "cityName": "东营市",
    "color": "#FFFFFF"
  },
  "370600": {
    "confirmedCount": 20,
    "cityName": "烟台市",
    "color": "#E04B49"
  },
  "370700": {
    "confirmedCount": 9,
    "cityName": "潍坊市",
    "color": "#F08E7E"
  },
  "370800": {
    "confirmedCount": 11,
    "cityName": "济宁市",
    "color": "#E04B49"
  },
  "370900": {
    "confirmedCount": 6,
    "cityName": "泰安市",
    "color": "#F08E7E"
  },
  "371000": {
    "confirmedCount": 24,
    "cityName": "威海市",
    "color": "#E04B49"
  },
  "371100": {
    "confirmedCount": 10,
    "cityName": "日照市",
    "color": "#E04B49"
  },
  "371200": {
    "confirmedCount": 0,
    "cityName": "莱芜市",
    "color": "#FFFFFF"
  },
  "371300": {
    "confirmedCount": 23,
    "cityName": "临沂市",
    "color": "#E04B49"
  },
  "371400": {
    "confirmedCount": 17,
    "cityName": "德州市",
    "color": "#E04B49"
  },
  "371500": {
    "confirmedCount": 8,
    "cityName": "聊城市",
    "color": "#F08E7E"
  },
  "371600": {
    "confirmedCount": 9,
    "cityName": "滨州市",
    "color": "#F08E7E"
  },
  "371700": {
    "confirmedCount": 8,
    "cityName": "菏泽市",
    "color": "#F08E7E"
  },
  "410100": {
    "confirmedCount": 56,
    "cityName": "郑州市",
    "color": "#E04B49"
  },
  "410200": {
    "confirmedCount": 8,
    "cityName": "开封市",
    "color": "#F08E7E"
  },
  "410300": {
    "confirmedCount": 5,
    "cityName": "洛阳市",
    "color": "#F08E7E"
  },
  "410400": {
    "confirmedCount": 11,
    "cityName": "平顶山市",
    "color": "#E04B49"
  },
  "410500": {
    "confirmedCount": 25,
    "cityName": "安阳市",
    "color": "#E04B49"
  },
  "410600": {
    "confirmedCount": 6,
    "cityName": "鹤壁市",
    "color": "#F08E7E"
  },
  "410700": {
    "confirmedCount": 23,
    "cityName": "新乡市",
    "color": "#E04B49"
  },
  "410800": {
    "confirmedCount": 2,
    "cityName": "焦作市",
    "color": "#F08E7E"
  },
  "410900": {
    "confirmedCount": 3,
    "cityName": "濮阳市",
    "color": "#F08E7E"
  },
  "411000": {
    "confirmedCount": 12,
    "cityName": "许昌市",
    "color": "#E04B49"
  },
  "411100": {
    "confirmedCount": 14,
    "cityName": "漯河市",
    "color": "#E04B49"
  },
  "411200": {
    "confirmedCount": 7,
    "cityName": "三门峡市",
    "color": "#F08E7E"
  },
  "411300": {
    "confirmedCount": 66,
    "cityName": "南阳市",
    "color": "#E04B49"
  },
  "411400": {
    "confirmedCount": 36,
    "cityName": "商丘市",
    "color": "#E04B49"
  },
  "411500": {
    "confirmedCount": 70,
    "cityName": "信阳市",
    "color": "#E04B49"
  },
  "411600": {
    "confirmedCount": 38,
    "cityName": "周口市",
    "color": "#E04B49"
  },
  "411700": {
    "confirmedCount": 40,
    "cityName": "驻马店市",
    "color": "#E04B49"
  },
  "419001": {
    "confirmedCount": 0,
    "cityName": "济源市",
    "color": "#FFFFFF"
  },
  "420100": {
    "confirmedCount": 3215,
    "cityName": "武汉市",
    "color": "#73181B"
  },
  "420200": {
    "confirmedCount": 209,
    "cityName": "黄石市",
    "color": "#73181B"
  },
  "420300": {
    "confirmedCount": 177,
    "cityName": "十堰市",
    "color": "#73181B"
  },
  "420500": {
    "confirmedCount": 276,
    "cityName": "宜昌市",
    "color": "#73181B"
  },
  "420600": {
    "confirmedCount": 347,
    "cityName": "襄阳市",
    "color": "#73181B"
  },
  "420700": {
    "confirmedCount": 227,
    "cityName": "鄂州市",
    "color": "#73181B"
  },
  "420800": {
    "confirmedCount": 251,
    "cityName": "荆门市",
    "color": "#73181B"
  },
  "420900": {
    "confirmedCount": 628,
    "cityName": "孝感市",
    "color": "#73181B"
  },
  "421000": {
    "confirmedCount": 287,
    "cityName": "荆州市",
    "color": "#73181B"
  },
  "421100": {
    "confirmedCount": 726,
    "cityName": "黄冈市",
    "color": "#73181B"
  },
  "421200": {
    "confirmedCount": 206,
    "cityName": "咸宁市",
    "color": "#73181B"
  },
  "421300": {
    "confirmedCount": 304,
    "cityName": "随州市",
    "color": "#73181B"
  },
  "422800": {
    "confirmedCount": 87,
    "cityName": "恩施土家族苗族自治州",
    "color": "#E04B49"
  },
  "429004": {
    "confirmedCount": 97,
    "cityName": "仙桃市",
    "color": "#E04B49"
  },
  "429005": {
    "confirmedCount": 27,
    "cityName": "潜江市",
    "color": "#E04B49"
  },
  "429006": {
    "confirmedCount": 82,
    "cityName": "天门市",
    "color": "#E04B49"
  },
  "429021": {
    "confirmedCount": 7,
    "cityName": "神农架林区",
    "color": "#F08E7E"
  },
  "430100": {
    "confirmedCount": 86,
    "cityName": "长沙市",
    "color": "#E04B49"
  },
  "430200": {
    "confirmedCount": 22,
    "cityName": "株洲市",
    "color": "#E04B49"
  },
  "430300": {
    "confirmedCount": 13,
    "cityName": "湘潭市",
    "color": "#E04B49"
  },
  "430400": {
    "confirmedCount": 26,
    "cityName": "衡阳市",
    "color": "#E04B49"
  },
  "430500": {
    "confirmedCount": 41,
    "cityName": "邵阳市",
    "color": "#E04B49"
  },
  "430600": {
    "confirmedCount": 45,
    "cityName": "岳阳市",
    "color": "#E04B49"
  },
  "430700": {
    "confirmedCount": 39,
    "cityName": "常德市",
    "color": "#E04B49"
  },
  "430800": {
    "confirmedCount": 2,
    "cityName": "张家界市",
    "color": "#F08E7E"
  },
  "430900": {
    "confirmedCount": 24,
    "cityName": "益阳市",
    "color": "#E04B49"
  },
  "431000": {
    "confirmedCount": 13,
    "cityName": "郴州市",
    "color": "#E04B49"
  },
  "431100": {
    "confirmedCount": 18,
    "cityName": "永州市",
    "color": "#E04B49"
  },
  "431200": {
    "confirmedCount": 28,
    "cityName": "怀化市",
    "color": "#E04B49"
  },
  "431300": {
    "confirmedCount": 26,
    "cityName": "娄底市",
    "color": "#E04B49"
  },
  "433100": {
    "confirmedCount": 6,
    "cityName": "湘西土家族苗族自治州",
    "color": "#F08E7E"
  },
  "440100": {
    "confirmedCount": 150,
    "cityName": "广州市",
    "color": "#73181B"
  },
  "440200": {
    "confirmedCount": 4,
    "cityName": "韶关市",
    "color": "#F08E7E"
  },
  "440300": {
    "confirmedCount": 170,
    "cityName": "深圳市",
    "color": "#73181B"
  },
  "440400": {
    "confirmedCount": 38,
    "cityName": "珠海市",
    "color": "#E04B49"
  },
  "440500": {
    "confirmedCount": 14,
    "cityName": "汕头市",
    "color": "#E04B49"
  },
  "440600": {
    "confirmedCount": 39,
    "cityName": "佛山市",
    "color": "#E04B49"
  },
  "440700": {
    "confirmedCount": 3,
    "cityName": "江门市",
    "color": "#F08E7E"
  },
  "440800": {
    "confirmedCount": 13,
    "cityName": "湛江市",
    "color": "#E04B49"
  },
  "440900": {
    "confirmedCount": 3,
    "cityName": "茂名市",
    "color": "#F08E7E"
  },
  "441200": {
    "confirmedCount": 6,
    "cityName": "肇庆市",
    "color": "#F08E7E"
  },
  "441300": {
    "confirmedCount": 20,
    "cityName": "惠州市",
    "color": "#E04B49"
  },
  "441400": {
    "confirmedCount": 6,
    "cityName": "梅州市",
    "color": "#F08E7E"
  },
  "441500": {
    "confirmedCount": 4,
    "cityName": "汕尾市",
    "color": "#F08E7E"
  },
  "441600": {
    "confirmedCount": 1,
    "cityName": "河源市",
    "color": "#F08E7E"
  },
  "441700": {
    "confirmedCount": 10,
    "cityName": "阳江市",
    "color": "#E04B49"
  },
  "441800": {
    "confirmedCount": 6,
    "cityName": "清远市",
    "color": "#F08E7E"
  },
  "441900": {
    "confirmedCount": 21,
    "cityName": "东莞市",
    "color": "#E04B49"
  },
  "442000": {
    "confirmedCount": 18,
    "cityName": "中山市",
    "color": "#E04B49"
  },
  "442100": {
    "confirmedCount": 0,
    "cityName": "东沙群岛",
    "color": "#FFFFFF"
  },
  "445100": {
    "confirmedCount": 3,
    "cityName": "潮州市",
    "color": "#F08E7E"
  },
  "445200": {
    "confirmedCount": 6,
    "cityName": "揭阳市",
    "color": "#F08E7E"
  },
  "445300": {
    "confirmedCount": 0,
    "cityName": "云浮市",
    "color": "#FFFFFF"
  },
  "450100": {
    "confirmedCount": 16,
    "cityName": "南宁市",
    "color": "#E04B49"
  },
  "450200": {
    "confirmedCount": 12,
    "cityName": "柳州市",
    "color": "#E04B49"
  },
  "450300": {
    "confirmedCount": 21,
    "cityName": "桂林市",
    "color": "#E04B49"
  },
  "450400": {
    "confirmedCount": 5,
    "cityName": "梧州市",
    "color": "#F08E7E"
  },
  "450500": {
    "confirmedCount": 23,
    "cityName": "北海市",
    "color": "#E04B49"
  },
  "450600": {
    "confirmedCount": 8,
    "cityName": "防城港市",
    "color": "#F08E7E"
  },
  "450700": {
    "confirmedCount": 1,
    "cityName": "钦州市",
    "color": "#F08E7E"
  },
  "450800": {
    "confirmedCount": 0,
    "cityName": "贵港市",
    "color": "#FFFFFF"
  },
  "450900": {
    "confirmedCount": 5,
    "cityName": "玉林市",
    "color": "#F08E7E"
  },
  "451000": {
    "confirmedCount": 2,
    "cityName": "百色市",
    "color": "#F08E7E"
  },
  "451100": {
    "confirmedCount": 1,
    "cityName": "贺州市",
    "color": "#F08E7E"
  },
  "451200": {
    "confirmedCount": 6,
    "cityName": "河池市",
    "color": "#F08E7E"
  },
  "451300": {
    "confirmedCount": 0,
    "cityName": "来宾市",
    "color": "#FFFFFF"
  },
  "451400": {
    "confirmedCount": 0,
    "cityName": "崇左市",
    "color": "#FFFFFF"
  },
  "460100": {
    "confirmedCount": 11,
    "cityName": "海口市",
    "color": "#E04B49"
  },
  "460200": {
    "confirmedCount": 16,
    "cityName": "三亚市",
    "color": "#E04B49"
  },
  "460300": {
    "confirmedCount": 0,
    "cityName": "三沙市",
    "color": "#FFFFFF"
  },
  "460400": {
    "confirmedCount": 6,
    "cityName": "儋州市",
    "color": "#F08E7E"
  },
  "469001": {
    "confirmedCount": 0,
    "cityName": "五指山市",
    "color": "#FFFFFF"
  },
  "469002": {
    "confirmedCount": 5,
    "cityName": "琼海市",
    "color": "#F08E7E"
  },
  "469005": {
    "confirmedCount": 0,
    "cityName": "文昌市",
    "color": "#FFFFFF"
  },
  "469006": {
    "confirmedCount": 8,
    "cityName": "万宁市",
    "color": "#F08E7E"
  },
  "469007": {
    "confirmedCount": 1,
    "cityName": "东方市",
    "color": "#F08E7E"
  },
  "469021": {
    "confirmedCount": 1,
    "cityName": "定安县",
    "color": "#F08E7E"
  },
  "469022": {
    "confirmedCount": 0,
    "cityName": "屯昌县",
    "color": "#FFFFFF"
  },
  "469023": {
    "confirmedCount": 2,
    "cityName": "澄迈县",
    "color": "#F08E7E"
  },
  "469024": {
    "confirmedCount": 4,
    "cityName": "临高县",
    "color": "#F08E7E"
  },
  "469025": {
    "confirmedCount": 0,
    "cityName": "白沙黎族自治县",
    "color": "#FFFFFF"
  },
  "469026": {
    "confirmedCount": 1,
    "cityName": "昌江黎族自治县",
    "color": "#F08E7E"
  },
  "469027": {
    "confirmedCount": 1,
    "cityName": "乐东黎族自治县",
    "color": "#F08E7E"
  },
  "469028": {
    "confirmedCount": 5,
    "cityName": "陵水黎族自治县",
    "color": "#F08E7E"
  },
  "469029": {
    "confirmedCount": 0,
    "cityName": "保亭黎族苗族自治县",
    "color": "#FFFFFF"
  },
  "469030": {
    "confirmedCount": 1,
    "cityName": "琼中黎族苗族自治县",
    "color": "#F08E7E"
  },
  "500000": {
    "confirmedCount": 0,
    "cityName": "重庆市",
    "color": "#FFFFFF"
  },
  "500101": {
    "confirmedCount": 39,
    "cityName": "万州区",
    "color": "#E04B49"
  },
  "500102": {
    "confirmedCount": 1,
    "cityName": "涪陵区",
    "color": "#F08E7E"
  },
  "500103": {
    "confirmedCount": 7,
    "cityName": "渝中区",
    "color": "#F08E7E"
  },
  "500104": {
    "confirmedCount": 6,
    "cityName": "大渡口区",
    "color": "#F08E7E"
  },
  "500105": {
    "confirmedCount": 12,
    "cityName": "江北区",
    "color": "#E04B49"
  },
  "500106": {
    "confirmedCount": 2,
    "cityName": "沙坪坝区",
    "color": "#F08E7E"
  },
  "500107": {
    "confirmedCount": 9,
    "cityName": "九龙坡区",
    "color": "#F08E7E"
  },
  "500108": {
    "confirmedCount": 3,
    "cityName": "南岸区",
    "color": "#F08E7E"
  },
  "500109": {
    "confirmedCount": 0,
    "cityName": "北碚区",
    "color": "#FFFFFF"
  },
  "500110": {
    "confirmedCount": 4,
    "cityName": "綦江区",
    "color": "#F08E7E"
  },
  "500111": {
    "confirmedCount": 4,
    "cityName": "大足区",
    "color": "#F08E7E"
  },
  "500112": {
    "confirmedCount": 21,
    "cityName": "渝北区",
    "color": "#E04B49"
  },
  "500113": {
    "confirmedCount": 1,
    "cityName": "巴南区",
    "color": "#F08E7E"
  },
  "500114": {
    "confirmedCount": 2,
    "cityName": "黔江区",
    "color": "#F08E7E"
  },
  "500115": {
    "confirmedCount": 10,
    "cityName": "长寿区",
    "color": "#E04B49"
  },
  "500116": {
    "confirmedCount": 3,
    "cityName": "江津区",
    "color": "#F08E7E"
  },
  "500117": {
    "confirmedCount": 8,
    "cityName": "合川区",
    "color": "#F08E7E"
  },
  "500118": {
    "confirmedCount": 3,
    "cityName": "永川区",
    "color": "#F08E7E"
  },
  "500119": {
    "confirmedCount": 0,
    "cityName": "南川区",
    "color": "#FFFFFF"
  },
  "500120": {
    "confirmedCount": 8,
    "cityName": "璧山区",
    "color": "#F08E7E"
  },
  "500151": {
    "confirmedCount": 2,
    "cityName": "铜梁区",
    "color": "#F08E7E"
  },
  "500152": {
    "confirmedCount": 2,
    "cityName": "潼南区",
    "color": "#F08E7E"
  },
  "500153": {
    "confirmedCount": 2,
    "cityName": "荣昌区",
    "color": "#F08E7E"
  },
  "500154": {
    "confirmedCount": 16,
    "cityName": "开州区",
    "color": "#E04B49"
  },
  "500155": {
    "confirmedCount": 2,
    "cityName": "梁平区",
    "color": "#F08E7E"
  },
  "500156": {
    "confirmedCount": 1,
    "cityName": "武隆区",
    "color": "#F08E7E"
  },
  "500229": {
    "confirmedCount": 1,
    "cityName": "城口县",
    "color": "#F08E7E"
  },
  "500230": {
    "confirmedCount": 5,
    "cityName": "丰都县",
    "color": "#F08E7E"
  },
  "500231": {
    "confirmedCount": 11,
    "cityName": "垫江县",
    "color": "#E04B49"
  },
  "500233": {
    "confirmedCount": 12,
    "cityName": "忠县",
    "color": "#E04B49"
  },
  "500235": {
    "confirmedCount": 18,
    "cityName": "云阳县",
    "color": "#E04B49"
  },
  "500236": {
    "confirmedCount": 5,
    "cityName": "奉节县",
    "color": "#F08E7E"
  },
  "500237": {
    "confirmedCount": 6,
    "cityName": "巫山县",
    "color": "#F08E7E"
  },
  "500238": {
    "confirmedCount": 10,
    "cityName": "巫溪县",
    "color": "#E04B49"
  },
  "500240": {
    "confirmedCount": 10,
    "cityName": "石柱土家族自治县",
    "color": "#E04B49"
  },
  "500241": {
    "confirmedCount": 1,
    "cityName": "秀山土家族苗族自治县",
    "color": "#F08E7E"
  },
  "500242": {
    "confirmedCount": 0,
    "cityName": "酉阳土家族苗族自治县",
    "color": "#FFFFFF"
  },
  "500243": {
    "confirmedCount": 0,
    "cityName": "彭水苗族土家族自治县",
    "color": "#FFFFFF"
  },
  "510100": {
    "confirmedCount": 72,
    "cityName": "成都市",
    "color": "#E04B49"
  },
  "510300": {
    "confirmedCount": 9,
    "cityName": "自贡市",
    "color": "#F08E7E"
  },
  "510400": {
    "confirmedCount": 7,
    "cityName": "攀枝花市",
    "color": "#F08E7E"
  },
  "510500": {
    "confirmedCount": 5,
    "cityName": "泸州市",
    "color": "#F08E7E"
  },
  "510600": {
    "confirmedCount": 7,
    "cityName": "德阳市",
    "color": "#F08E7E"
  },
  "510700": {
    "confirmedCount": 12,
    "cityName": "绵阳市",
    "color": "#E04B49"
  },
  "510800": {
    "confirmedCount": 2,
    "cityName": "广元市",
    "color": "#F08E7E"
  },
  "510900": {
    "confirmedCount": 5,
    "cityName": "遂宁市",
    "color": "#F08E7E"
  },
  "511000": {
    "confirmedCount": 10,
    "cityName": "内江市",
    "color": "#E04B49"
  },
  "511100": {
    "confirmedCount": 2,
    "cityName": "乐山市",
    "color": "#F08E7E"
  },
  "511300": {
    "confirmedCount": 16,
    "cityName": "南充市",
    "color": "#E04B49"
  },
  "511400": {
    "confirmedCount": 2,
    "cityName": "眉山市",
    "color": "#F08E7E"
  },
  "511500": {
    "confirmedCount": 7,
    "cityName": "宜宾市",
    "color": "#F08E7E"
  },
  "511600": {
    "confirmedCount": 16,
    "cityName": "广安市",
    "color": "#E04B49"
  },
  "511700": {
    "confirmedCount": 9,
    "cityName": "达州市",
    "color": "#F08E7E"
  },
  "511800": {
    "confirmedCount": 5,
    "cityName": "雅安市",
    "color": "#F08E7E"
  },
  "511900": {
    "confirmedCount": 8,
    "cityName": "巴中市",
    "color": "#F08E7E"
  },
  "512000": {
    "confirmedCount": 2,
    "cityName": "资阳市",
    "color": "#F08E7E"
  },
  "513200": {
    "confirmedCount": 1,
    "cityName": "阿坝藏族羌族自治州",
    "color": "#F08E7E"
  },
  "513300": {
    "confirmedCount": 5,
    "cityName": "甘孜藏族自治州",
    "color": "#F08E7E"
  },
  "513400": {
    "confirmedCount": 5,
    "cityName": "凉山彝族自治州",
    "color": "#F08E7E"
  },
  "520100": {
    "confirmedCount": 4,
    "cityName": "贵阳市",
    "color": "#F08E7E"
  },
  "520200": {
    "confirmedCount": 8,
    "cityName": "六盘水市",
    "color": "#F08E7E"
  },
  "520300": {
    "confirmedCount": 4,
    "cityName": "遵义市",
    "color": "#F08E7E"
  },
  "520400": {
    "confirmedCount": 0,
    "cityName": "安顺市",
    "color": "#FFFFFF"
  },
  "520500": {
    "confirmedCount": 3,
    "cityName": "毕节市",
    "color": "#F08E7E"
  },
  "520600": {
    "confirmedCount": 3,
    "cityName": "铜仁市",
    "color": "#F08E7E"
  },
  "522300": {
    "confirmedCount": 1,
    "cityName": "黔西南布依族苗族自治州",
    "color": "#F08E7E"
  },
  "522600": {
    "confirmedCount": 2,
    "cityName": "黔东南苗族侗族自治州",
    "color": "#F08E7E"
  },
  "522700": {
    "confirmedCount": 4,
    "cityName": "黔南布依族苗族自治州",
    "color": "#F08E7E"
  },
  "530100": {
    "confirmedCount": 30,
    "cityName": "昆明市",
    "color": "#E04B49"
  },
  "530300": {
    "confirmedCount": 5,
    "cityName": "曲靖市",
    "color": "#F08E7E"
  },
  "530400": {
    "confirmedCount": 7,
    "cityName": "玉溪市",
    "color": "#F08E7E"
  },
  "530500": {
    "confirmedCount": 7,
    "cityName": "保山市",
    "color": "#F08E7E"
  },
  "530600": {
    "confirmedCount": 6,
    "cityName": "昭通市",
    "color": "#F08E7E"
  },
  "530700": {
    "confirmedCount": 6,
    "cityName": "丽江市",
    "color": "#F08E7E"
  },
  "530800": {
    "confirmedCount": 4,
    "cityName": "普洱市",
    "color": "#F08E7E"
  },
  "530900": {
    "confirmedCount": 1,
    "cityName": "临沧市",
    "color": "#F08E7E"
  },
  "532300": {
    "confirmedCount": 0,
    "cityName": "楚雄彝族自治州",
    "color": "#FFFFFF"
  },
  "532500": {
    "confirmedCount": 4,
    "cityName": "红河哈尼族彝族自治州",
    "color": "#F08E7E"
  },
  "532600": {
    "confirmedCount": 0,
    "cityName": "文山壮族苗族自治州",
    "color": "#FFFFFF"
  },
  "532800": {
    "confirmedCount": 12,
    "cityName": "西双版纳傣族自治州",
    "color": "#E04B49"
  },
  "532900": {
    "confirmedCount": 6,
    "cityName": "大理白族自治州",
    "color": "#F08E7E"
  },
  "533100": {
    "confirmedCount": 3,
    "cityName": "德宏傣族景颇族自治州",
    "color": "#F08E7E"
  },
  "533300": {
    "confirmedCount": 0,
    "cityName": "怒江傈僳族自治州",
    "color": "#FFFFFF"
  },
  "533400": {
    "confirmedCount": 0,
    "cityName": "迪庆藏族自治州",
    "color": "#FFFFFF"
  },
  "540100": {
    "confirmedCount": 1,
    "cityName": "拉萨市",
    "color": "#F08E7E"
  },
  "540200": {
    "confirmedCount": 0,
    "cityName": "日喀则市",
    "color": "#FFFFFF"
  },
  "540300": {
    "confirmedCount": 0,
    "cityName": "昌都市",
    "color": "#FFFFFF"
  },
  "540400": {
    "confirmedCount": 0,
    "cityName": "林芝市",
    "color": "#FFFFFF"
  },
  "540500": {
    "confirmedCount": 0,
    "cityName": "山南市",
    "color": "#FFFFFF"
  },
  "540600": {
    "confirmedCount": 0,
    "cityName": "那曲市",
    "color": "#FFFFFF"
  },
  "542500": {
    "confirmedCount": 0,
    "cityName": "阿里地区",
    "color": "#FFFFFF"
  },
  "610100": {
    "confirmedCount": 39,
    "cityName": "西安市",
    "color": "#E04B49"
  },
  "610200": {
    "confirmedCount": 5,
    "cityName": "铜川市",
    "color": "#F08E7E"
  },
  "610300": {
    "confirmedCount": 6,
    "cityName": "宝鸡市",
    "color": "#F08E7E"
  },
  "610400": {
    "confirmedCount": 8,
    "cityName": "咸阳市",
    "color": "#F08E7E"
  },
  "610500": {
    "confirmedCount": 6,
    "cityName": "渭南市",
    "color": "#F08E7E"
  },
  "610600": {
    "confirmedCount": 7,
    "cityName": "延安市",
    "color": "#F08E7E"
  },
  "610700": {
    "confirmedCount": 13,
    "cityName": "汉中市",
    "color": "#E04B49"
  },
  "610800": {
    "confirmedCount": 1,
    "cityName": "榆林市",
    "color": "#F08E7E"
  },
  "610900": {
    "confirmedCount": 14,
    "cityName": "安康市",
    "color": "#E04B49"
  },
  "611000": {
    "confirmedCount": 2,
    "cityName": "商洛市",
    "color": "#F08E7E"
  },
  "620100": {
    "confirmedCount": 20,
    "cityName": "兰州市",
    "color": "#E04B49"
  },
  "620200": {
    "confirmedCount": 0,
    "cityName": "嘉峪关市",
    "color": "#FFFFFF"
  },
  "620300": {
    "confirmedCount": 1,
    "cityName": "金昌市",
    "color": "#F08E7E"
  },
  "620400": {
    "confirmedCount": 1,
    "cityName": "白银市",
    "color": "#F08E7E"
  },
  "620500": {
    "confirmedCount": 3,
    "cityName": "天水市",
    "color": "#F08E7E"
  },
  "620600": {
    "confirmedCount": 0,
    "cityName": "武威市",
    "color": "#FFFFFF"
  },
  "620700": {
    "confirmedCount": 2,
    "cityName": "张掖市",
    "color": "#F08E7E"
  },
  "620800": {
    "confirmedCount": 1,
    "cityName": "平凉市",
    "color": "#F08E7E"
  },
  "620900": {
    "confirmedCount": 0,
    "cityName": "酒泉市",
    "color": "#FFFFFF"
  },
  "621000": {
    "confirmedCount": 0,
    "cityName": "庆阳市",
    "color": "#FFFFFF"
  },
  "621100": {
    "confirmedCount": 2,
    "cityName": "定西市",
    "color": "#F08E7E"
  },
  "621200": {
    "confirmedCount": 3,
    "cityName": "陇南市",
    "color": "#F08E7E"
  },
  "622900": {
    "confirmedCount": 2,
    "cityName": "临夏回族自治州",
    "color": "#F08E7E"
  },
  "623000": {
    "confirmedCount": 0,
    "cityName": "甘南藏族自治州",
    "color": "#FFFFFF"
  },
  "630100": {
    "confirmedCount": 9,
    "cityName": "西宁市",
    "color": "#F08E7E"
  },
  "630200": {
    "confirmedCount": 0,
    "cityName": "海东市",
    "color": "#FFFFFF"
  },
  "632200": {
    "confirmedCount": 0,
    "cityName": "海北藏族自治州",
    "color": "#FFFFFF"
  },
  "632300": {
    "confirmedCount": 0,
    "cityName": "黄南藏族自治州",
    "color": "#FFFFFF"
  },
  "632500": {
    "confirmedCount": 0,
    "cityName": "海南藏族自治州",
    "color": "#FFFFFF"
  },
  "632600": {
    "confirmedCount": 0,
    "cityName": "果洛藏族自治州",
    "color": "#FFFFFF"
  },
  "632700": {
    "confirmedCount": 0,
    "cityName": "玉树藏族自治州",
    "color": "#FFFFFF"
  },
  "632800": {
    "confirmedCount": 0,
    "cityName": "海西蒙古族藏族自治州",
    "color": "#FFFFFF"
  },
  "640100": {
    "confirmedCount": 16,
    "cityName": "银川市",
    "color": "#E04B49"
  },
  "640200": {
    "confirmedCount": 0,
    "cityName": "石嘴山市",
    "color": "#FFFFFF"
  },
  "640300": {
    "confirmedCount": 6,
    "cityName": "吴忠市",
    "color": "#F08E7E"
  },
  "640400": {
    "confirmedCount": 2,
    "cityName": "固原市",
    "color": "#F08E7E"
  },
  "640500": {
    "confirmedCount": 2,
    "cityName": "中卫市",
    "color": "#F08E7E"
  },
  "650100": {
    "confirmedCount": 8,
    "cityName": "乌鲁木齐市",
    "color": "#F08E7E"
  },
  "650200": {
    "confirmedCount": 0,
    "cityName": "克拉玛依市",
    "color": "#FFFFFF"
  },
  "650400": {
    "confirmedCount": 1,
    "cityName": "吐鲁番市",
    "color": "#F08E7E"
  },
  "650500": {
    "confirmedCount": 0,
    "cityName": "哈密市",
    "color": "#FFFFFF"
  },
  "652300": {
    "confirmedCount": 0,
    "cityName": "昌吉回族自治州",
    "color": "#FFFFFF"
  },
  "652700": {
    "confirmedCount": 0,
    "cityName": "博尔塔拉蒙古自治州",
    "color": "#FFFFFF"
  },
  "652800": {
    "confirmedCount": 0,
    "cityName": "巴音郭楞蒙古自治州",
    "color": "#FFFFFF"
  },
  "652900": {
    "confirmedCount": 1,
    "cityName": "阿克苏地区",
    "color": "#F08E7E"
  },
  "653000": {
    "confirmedCount": 0,
    "cityName": "克孜勒苏柯尔克孜自治州",
    "color": "#FFFFFF"
  },
  "653100": {
    "confirmedCount": 0,
    "cityName": "喀什地区",
    "color": "#FFFFFF"
  },
  "653200": {
    "confirmedCount": 0,
    "cityName": "和田地区",
    "color": "#FFFFFF"
  },
  "654000": {
    "confirmedCount": 5,
    "cityName": "伊犁哈萨克自治州",
    "color": "#F08E7E"
  },
  "654200": {
    "confirmedCount": 1,
    "cityName": "塔城地区",
    "color": "#F08E7E"
  },
  "654300": {
    "confirmedCount": 0,
    "cityName": "阿勒泰地区",
    "color": "#FFFFFF"
  },
  "659001": {
    "confirmedCount": 1,
    "cityName": "石河子市",
    "color": "#F08E7E"
  },
  "659002": {
    "confirmedCount": 0,
    "cityName": "阿拉尔市",
    "color": "#FFFFFF"
  },
  "659003": {
    "confirmedCount": 0,
    "cityName": "图木舒克市",
    "color": "#FFFFFF"
  },
  "659004": {
    "confirmedCount": 0,
    "cityName": "五家渠市",
    "color": "#FFFFFF"
  },
  "659005": {
    "confirmedCount": 0,
    "cityName": "北屯市",
    "color": "#FFFFFF"
  },
  "659006": {
    "confirmedCount": 0,
    "cityName": "铁门关市",
    "color": "#FFFFFF"
  },
  "659007": {
    "confirmedCount": 0,
    "cityName": "双河市",
    "color": "#FFFFFF"
  },
  "659008": {
    "confirmedCount": 0,
    "cityName": "可克达拉市",
    "color": "#FFFFFF"
  },
  "659009": {
    "confirmedCount": 0,
    "cityName": "昆玉市",
    "color": "#FFFFFF"
  }
}