import { loadTencentData, getConfirmedCount, getColor } from './load_data';
let map;
let disProvince;
let disChongqing;
let layer;
const verbose = false;
let confirmedCount = new Map();
const cache = new Map();

function getCountByName(name) {
  let count = 0;
  if (confirmedCount.has(name)) {
    count = confirmedCount.get(name);
  }
  return count;
}

function getColorByName(name) {
  const color = getColor(getCountByName(name));
  return color;
}

function initCovidMap() {
  map = new AMap.Map('container', {
    zoom: window.screen.width <= 600 ? 3 : 4,
    center: [104.5, 38.5],
    pitch: 0,
    viewMode: '3D',
  });

  // 创建省份图层
  // 排除重庆(500000)
  const allProvinces = [
    '110000',
    '120000',
    '130000',
    '140000',
    '150000',
    '210000',
    '220000',
    '230000',
    '310000',
    '320000',
    '330000',
    '340000',
    '350000',
    '360000',
    '370000',
    '410000',
    '420000',
    '430000',
    '440000',
    '450000',
    '460000',
    '510000',
    '520000',
    '530000',
    '540000',
    '610000',
    '620000',
    '630000',
    '640000',
    '650000',
    '710000',
    '810000',
    '820000',
  ];
  disProvince = new AMap.DistrictLayer.Province({
    zIndex: 12,
    adcode: allProvinces,
    depth: 1,
    styles: {
      fill: function (properties) {
        return getColorByName(properties.NAME_CHN);
      },
      'province-stroke': 'black',
      'city-stroke': 'cornflowerblue', // 中国地级市边界
      'county-stroke': 'rgba(255,255,255,0.5)', // 中国区县边界
    },
  });

  disProvince.setMap(map);

  disChongqing = new AMap.DistrictLayer.Province({
    zIndex: 12,
    adcode: ['500000'],
    depth: 2,
    styles: {
      fill: function (properties) {
        return getColorByName(properties.NAME_CHN);
      },
      'province-stroke': 'black',
      'city-stroke': 'cornflowerblue', // 中国地级市边界
      'county-stroke': 'rgba(255,255,255,0.5)', // 中国区县边界
    },
  });

  disChongqing.setMap(map);
  map.on('complete', function () {
    layer = new AMap.LabelsLayer({
      fitView: true,
    });
    map.add(layer);
    map.on('click', clickHandler);
  });
}

function clickHandler(ev) {
  if (verbose) {
    console.log('ev', ev);
  }
  const px = ev.pixel;
  let props = disProvince.getDistrictByContainerPos(px);
  if (verbose) {
    console.log('props1', props);
  }
  if (!props) {
    props = disChongqing.getDistrictByContainerPos(px);
  }
  if (verbose) {
    console.log('props1', props);
  }
  if (props) {
    const seperator = ' ';
    // 京津沪港澳台
    if (['110000', '120000', '310000', '710000', '810000', '820000'].includes(props.adcode_pro.toString())) {
      const text = props.NAME_CHN + seperator + getCountByName(props.NAME_CHN);
      //console.log('text', text);
      const labelMarker = new AMap.LabelMarker({
        position: [props.x, props.y],
        text: { content: text },
        rank: 2,
      });
      layer.add(labelMarker);
    } else {
      // 展示点击区域所在省份每个市的病例数字
      AMap.plugin('AMap.DistrictSearch', function () {
        const isChongqing = props.adcode_pro.toString() == '500000';
        const subdistrict = isChongqing ? 2 : 1;
        //console.log('subdistrict', subdistrict)
        function districtsHandler(result) {
          if (!isChongqing) {
            for (const entry of result.districtList[0].districtList) {
              let count = getCountByName(entry.name);
              if (count == 0) {
                continue;
              }
              const text = entry.name + seperator + count;
              //console.log("text", text);
              const option = {
                position: entry.center,
                text: { content: text },
                rank: entry.adcode == props.adcode.toString() ? 2 : 1,
              };
              if (verbose) {
                console.log('option', option);
              }
              const labelMarker = new AMap.LabelMarker(option);
              layer.add(labelMarker);
            }
          } else {
            // 重庆郊县
            for (const entry of result.districtList[0].districtList[0].districtList) {
              const option = {
                position: entry.center,
                text: {
                  content: entry.name + seperator + getCountByName(entry.name),
                },
                rank: entry.adcode == props.adcode.toString() ? 2 : 1,
              };
              if (verbose) {
                console.log('option, 重庆郊县', option);
              }
              const labelMarker = new AMap.LabelMarker(option);
              layer.add(labelMarker);
            }
            // 重庆城区
            let confirmedCount = 0;
            const chongqingDowntown = result.districtList[0].districtList[1];
            for (const entry of chongqingDowntown.districtList) {
              confirmedCount += getCountByName(entry.name);
            }
            const option = {
              position: chongqingDowntown.center,
              text: {
                content: chongqingDowntown.name + seperator + confirmedCount,
              },
              rank: props.adcode_cit.toString() == '500100' ? 2 : 1,
            };
            if (verbose) {
              console.log('option, 重庆城区', option);
            }
            const labelMarker = new AMap.LabelMarker(option);
            layer.add(labelMarker);
          }
        }
        const districtSearch = new AMap.DistrictSearch({
          level: 'district',
          subdistrict: subdistrict,
        });
        const k = props.adcode_pro.toString();
        if (cache.get(k)) {
          districtsHandler(cache.get(k));
        } else {
          districtSearch.search(k, function (status, result) {
            if (verbose) {
              console.log('status', status);
              console.log('result', result);
            }
            if (status == 'complete') {
              cache.set(k, result);
              districtsHandler(result);
            }
          });
        }
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  loadTencentData({ jsonp: true }).then((data) => {
    confirmedCount = getConfirmedCount(data);
    // fix some bugs of AMap
    if (confirmedCount.get('徐州市')) {
      confirmedCount.set('邳州市', confirmedCount.get('徐州市'));
    }
    if (confirmedCount.get('济南市')) {
      confirmedCount.set('莱芜市', confirmedCount.get('济南市'));
    }
    initCovidMap();
  });
});
