import * as cities from './valid_city_names.json';
import axios from 'axios';
import * as jsonpAdapter from 'axios-jsonp';

const cityNames = new Set<string>(cities);
const cityNameShortToFull = new Map<string, string>();
cityNames.forEach(cityName => {
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
const ignoreList = ['外地来京人员', '未知', '未明确地区', '所属地待确认', '待确认', '地区待确认'];

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
  ['阿拉善', '阿拉善盟'],
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

const manualMappingWitProvince = new Map<string, string>([
  ['西藏-地区待确认', '拉萨市'],
  ['重庆-高新区', '九龙坡区'],
]);
export async function loadTecentData({ jsonp = true }): Promise<Array<any>> {
  const options: Record<string, any> = {
    url: 'https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5',
    method: 'get',
    adapter: jsonp ? jsonpAdapter : undefined,
  };
  const response = await axios(options);
  return JSON.parse(response.data.data).areaTree[0].children;
}

function normalizeCityName(provinceName: string, cityName: string): string {
  // 手动规则
  if (manualMappingWitProvince.has(provinceName + '-' + cityName)) {
    return manualMappingWitProvince.get(provinceName + '-' + cityName);
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

function getRemain(area): number {
  const total = area.total;
  const result = total.confirm - total.dead - total.heal;
  if (result < 0 && area.name != '地区待确认') {
    console.log('ERROR remain: ', area);
    return 0;
  }
  return result;
}

export function getConfirmedCount(data): Map<string, number> {
  const confirmedCount = new Map<string, number>();
  for (const province of data) {
    const province_remain = getRemain(province);
    if (['香港', '澳门', '台湾'].includes(province.name)) {
      const suffix = province.name == '台湾' ? '省' : '特别行政区';
      confirmedCount.set(province.name + suffix, province_remain);
      continue;
    }
    if (['北京', '上海', '天津'].includes(province.name)) {
      const provinceName = province.name + '市';
      confirmedCount.set(provinceName, province_remain);
      continue;
    }
    for (const city of province.children) {
      const city_remain = getRemain(city);
      const normalizedName: string = normalizeCityName(province.name, city.name);
      if (normalizedName != '') {
        if (confirmedCount.has(normalizedName)) {
          confirmedCount.set(normalizedName, confirmedCount.get(normalizedName) + city_remain);
        } else {
          confirmedCount.set(normalizedName, city_remain);
        }
      }
    }
  }
  return confirmedCount;
}

export function getColor(count: number): string {
  if (count == 0) {
    return '#FFFFFF';
  }
  for (const [idx, [threshold, _]] of colors.entries()) {
    if (idx == 0) {
      continue;
    }
    if (count < threshold) {
      return colors[idx - 1][1];
    }
  }
  return '#420000';
}

function printConfirmedCount() {
  loadTecentData({ jsonp: false }).then(data => {
    console.dir(getConfirmedCount(data), { depth: null });
  });
}

if (typeof require !== 'undefined' && require.main === module) {
  printConfirmedCount();
}
