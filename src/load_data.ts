import * as cities from './valid_city_names.json';
import axios from 'axios';

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
const ignoreList = ['外地来京人员', '未知', '未明确地区', '所属地待确认', '待确认', '地区待确认', '境外输入'];

// 手动映射
// 高德地图里没有两江新区，姑且算入渝北
const manualMapping = new Map([
  ['巩义', '郑州市'],
  ['固始县', '信阳市'],
  ['滑县', '安阳市'],
  ['长垣', '新乡市'],
  ['永城', '商丘市'],
  ['邓州', '南阳市'],
  ['韩城', '渭南市'],
  ['杨凌', '咸阳市'],
  ['宁东管委会', '银川市'],
  ['满洲里', '呼伦贝尔市'],
  ['阿拉善盟', '阿拉善盟'],
  ['宿松', '安庆市'],
  ['赣江新区', '南昌市'],
  ['公主岭', '四平市'],
  ['梅河口市', '通化市'],
  ['两江新区', '渝北区'],
  ['万盛经开区', '綦江区'],
  ['巴州', '巴音郭楞蒙古自治州'],
  ['兵团第四师', '可克达拉市'],
  ['六师五家渠', '五家渠市'],
  ['第七师', '塔城地区'],
  ['第八师石河子', '石河子市'],
  ['兵团第九师', '塔城地区'],
  ['兵团第十二师', '乌鲁木齐市'],
]);

const manualMappingWithProvince = new Map<string, string>([
  ['西藏-地区待确认', '拉萨市'],
  ['重庆-高新区', '九龙坡区'],
]);
export async function loadTencentData(): Promise<Array<any>> {
  const url = 'https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=statisGradeCityDetail';
  const options: Record<string, any> = {
    url,
    method: 'get',
  };
  const response = await axios(options);
  const data = response.data.data;
  return data.statisGradeCityDetail;
}

function normalizeCityName(provinceName: string, cityName: string): string {
  /*
    if (['香港', '澳门', '台湾'].includes(provinceName)) {
      const suffix = provinceName == '台湾' ? '省' : '特别行政区';
      return provinceName + suffix;
    }
    */
  // 直辖市
  if (['北京', '上海', '天津'].includes(provinceName)) {
    return provinceName + '市';
  }
  // 手动规则
  if (manualMappingWithProvince.has(provinceName + '-' + cityName)) {
    return manualMappingWithProvince.get(provinceName + '-' + cityName);
  }
  if (manualMapping.has(cityName)) {
    return manualMapping.get(cityName);
  }
  if (ignoreList.includes(cityName)) {
    return '';
  }

  // 名称规则
  // 例如 临高县 其实是市级
  let normalizedName = '';
  if (['市', '县', '盟'].includes(cityName[-1])) {
    normalizedName = cityName;
  } else if (provinceName == '重庆' && cityName[-1] == '区') {
    normalizedName = cityName;
  } else {
    normalizedName = cityName + '市';
  }
  if (cityNames.has(normalizedName)) {
    return normalizedName;
  }

  // 前缀匹配
  // 规范市名，除了 张家口市/张家界市，阿拉善盟/阿拉尔市 外，前两个字都是唯一的
  // 所以可以用前两个字
  const shortName = cityName.substr(0, 2);
  if (cityNameShortToFull.has(shortName)) {
    normalizedName = cityNameShortToFull.get(shortName);
    //console.log(provinceName, cityName, '=>', normalizedName);
    return normalizedName;
  }
  console.log('!!!Cannot match, discard:', provinceName, cityName);
  return '';
}

export function getConfirmedCount(data): Map<string, number> {
  const confirmedCount = new Map<string, number>();
  for (const cityData of data) {
    const provinceName = cityData.province;
    const cityName = cityData.city;
    const nowConfirm = cityData.nowConfirm;
    const normalizedName: string = normalizeCityName(provinceName, cityName);
    if (normalizedName != '') {
      if (confirmedCount.has(normalizedName)) {
        confirmedCount.set(normalizedName, confirmedCount.get(normalizedName) + nowConfirm);
      } else {
        confirmedCount.set(normalizedName, nowConfirm);
      }
    }
  }
  console.log({ confirmedCount });
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
  loadTencentData().then((data) => {
    console.dir(getConfirmedCount(data), { depth: null });
  });
}

if (typeof require !== 'undefined' && require.main === module) {
  printConfirmedCount();
}
