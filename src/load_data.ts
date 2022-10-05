import * as cities from './valid_city_names.json';
import axios from 'axios';
import * as fetchJsonp from 'fetch-jsonp';

const cityNames = new Set<string>(cities);
const cityNameShortToFull = new Map<string, string>();
cityNames.forEach((cityName) => {
  cityNameShortToFull.set(cityName.substr(0, 2), cityName);
});
const colors: Array<[number, string]> = [
  [0, '#FFDFDF'],
  [10, '#FFBFBF'],
  [20, '#FF9F9F'],
  [30, '#FF7F7F'],
  [40, '#FF5F5F'],
  [50, '#FF3F3F'],
  [60, '#FF1F1F'],
  [70, '#FF0000'],
  [80, '#E70000'],
  [90, '#CF0000'],
  [100, '#B80000'],
  [200, '#A00000'],
  [500, '#880000'],
  [1000, '#710000'],
  [2000, '#590000'],
  [5000, '#420000'],
];

// 忽略部分内容
const ignoreList = new Set([
  '外地来京人员',
  '未知',
  '未明确地区',
  '所属地待确认',
  '待确认',
  '地区待确认',
  '境外输入',
  '境外输入人员',
  '外省输入',
  '省十里丰监狱',
  '雄安新区',
]);

const municipalityList = new Map([
  ['北京', '北京市'],
  ['天津', '天津市'],
  ['上海', '上海市'],
  // 重庆面积太大，不适合作为单一地区处理
  ['香港', '香港特别行政区'],
  ['澳门', '澳门特别行政区'],
  ['台湾', '台湾省'],
]);

// 手动映射
// 高德地图里没有两江新区，姑且算入渝北
const manualMapping = new Map([
  ['巩义', '郑州市'],
  ['固始', '信阳市'],
  ['滑县', '安阳市'],
  ['长垣', '新乡市'],
  ['永城', '商丘市'],
  ['邓州', '南阳市'],
  ['韩城', '渭南市'],
  ['杨凌示范区', '咸阳市'],
  ['宁东', '银川市'],
  ['满洲里', '呼伦贝尔市'],
  ['阿拉善盟', '阿拉善盟'],
  ['大兴安岭', '大兴安岭地区'],
  ['宿松', '安庆市'],
  ['赣江新区', '南昌市'],
  ['公主岭', '四平市'],
  ['梅河口', '通化市'],
  ['两江新区', '渝北区'],
  ['万盛', '綦江区'],
  ['第四师', '可克达拉市'],
  ['第六师', '五家渠市'],
  ['第七师', '塔城地区'],
  ['第八师', '石河子市'],
  ['第九师', '塔城地区'],
  ['第十二师', '乌鲁木齐市'],
]);

const manualMappingWithProvince = new Map<string, string>([['重庆-高新区', '九龙坡区']]);

export async function loadData(): Promise<Array<any>> {
  const url = 'https://news.sina.com.cn/project/fymap/ncp2020_full_data.json';
  if (typeof document != "undefined") {
    const result = await fetchJsonp(url, {
      jsonpCallbackFunction: 'jsoncallback',
    });

    const j = await result.json();
    const data = j.data.list;
    return data;
  } else {
    const response = await axios.get(url);
    const data = JSON.parse(response.data.replace(/^jsoncallback\(|\)\;/g, '')).data.list;
    return data;
  }
}

function normalizeCityName(provinceName: string, cityName: string): string {
  // 手动规则
  if (manualMappingWithProvince.has(provinceName + '-' + cityName)) {
    return manualMappingWithProvince.get(provinceName + '-' + cityName);
  }
  if (manualMapping.has(cityName)) {
    return manualMapping.get(cityName);
  }
  // 前缀匹配
  // 规范市名，除了 张家口市/张家界市，阿拉善盟/阿拉尔市 外，前两个字都是唯一的
  // 所以可以用前两个字
  const shortName = cityName.substr(0, 2);
  if (cityNameShortToFull.has(shortName)) {
    const normalizedName = cityNameShortToFull.get(shortName);
    console.log(provinceName, cityName, '=>', normalizedName);
    return normalizedName;
  }
  console.log('!!!Cannot match, discard:', provinceName, cityName);
  return '';
}

export function getConfirmedCount(data): Map<string, number> {
  const confirmedCount = new Map<string, number>();
  for (const provinceData of data) {
    if (municipalityList.has(provinceData.name)) {
      confirmedCount.set(municipalityList.get(provinceData.name), Number(provinceData.econNum));
      continue;
    }
    for (const cityData of provinceData.city) {
      const provinceName = provinceData.name;
      const cityName = cityData.name;
      const nowConfirm = Number(cityData.econNum);
      if (nowConfirm == 0) {
        continue;
      }
      if (ignoreList.has(cityName)) {
        continue;
      }
      let normalizedName = cityData.mapName;
      if (!cityNames.has(normalizedName)) {
        normalizedName = normalizeCityName(provinceName, cityName);
        if (normalizedName == '') {
          continue;
        }
      }
      if (confirmedCount.has(normalizedName)) {
        confirmedCount.set(normalizedName, confirmedCount.get(normalizedName) + nowConfirm);
      } else {
        confirmedCount.set(normalizedName, nowConfirm);
      }
    }
  }
  console.log('confirmedCount', confirmedCount);
  return confirmedCount;
}

export function getColor(count: number): string {
  if (count == 0) {
    return '#FFFFFF';
  }
  for (const [idx, [threshold]] of colors.entries()) {
    if (idx == 0) {
      continue;
    }
    if (count < threshold) {
      return colors[idx - 1][1];
    }
  }
  return '#420000';
}

function printConfirmedCount(): void {
  loadData().then((data) => {
    getConfirmedCount(data);
  });
}

if (typeof require !== 'undefined' && require.main === module) {
  printConfirmedCount();
}
