var map;
var disProvince;
var disChongqing;
var layer;
var verbose = false;
var cache = new Map();

function initVirusMap() {
  document.getElementById("title").innerHTML +=
    "（最后更新于 " + LAST_UPDATE + "）";

  map = new AMap.Map("container", {
    zoom: window.screen.width <= 600 ? 3 : 4,
    center: [104.5, 38.5],
    pitch: 0,
    viewMode: "3D"
  });

  // 创建省份图层
  // 排除重庆(500000)
  var all_provinces = [
    "110000",
    "120000",
    "130000",
    "140000",
    "150000",
    "210000",
    "220000",
    "230000",
    "310000",
    "320000",
    "330000",
    "340000",
    "350000",
    "360000",
    "370000",
    "410000",
    "420000",
    "430000",
    "440000",
    "450000",
    "460000",
    "510000",
    "520000",
    "530000",
    "540000",
    "610000",
    "620000",
    "630000",
    "640000",
    "650000",
    "710000",
    "810000",
    "820000"
  ];

  function fillColor(properties) {
    return DATA[properties.adcode];
  }

  disProvince = new AMap.DistrictLayer.Province({
    zIndex: 12,
    adcode: all_provinces,
    depth: 1,
    styles: {
      fill: fillColor,
      "province-stroke": "black",
      "city-stroke": "white", // 中国地级市边界
      "county-stroke": "rgba(255,255,255,0.5)" // 中国区县边界
    }
  });

  disProvince.setMap(map);

  disChongqing = new AMap.DistrictLayer.Province({
    zIndex: 12,
    adcode: ["500000"],
    depth: 2,
    styles: {
      fill: fillColor,
      "province-stroke": "black",
      "city-stroke": "white", // 中国地级市边界
      "county-stroke": "rgba(255,255,255,0.5)" // 中国区县边界
    }
  });

  disChongqing.setMap(map);

  //initClickHandler();
  map.on("complete", function () {
    layer = new AMap.LabelsLayer({
      fitView: true
      //map: map
    });
    map.add(layer);
    map.on("click", clickHander);
  });
}

function clickHander(ev) {
  if (verbose) {
    console.log("ev", ev);
  }
  var px = ev.pixel;
  var props = disProvince.getDistrictByContainerPos(px);
  if (verbose) {
    console.log("props1", props);
  }
  if (!props) {
    props = disChongqing.getDistrictByContainerPos(px);
  }
  if (verbose) {
    console.log("props1", props);
  }
  if (props) {
    //nothing to do
  }
}

function initClickHandler() {
  map.on("click", clickHander);
}

document.addEventListener("DOMContentLoaded", initVirusMap);
