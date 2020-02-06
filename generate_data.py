# -*- coding: utf-8 -*-
import re
from collections import defaultdict
import json
import requests
import datetime


def load_amap_cities():
    return dict([line.strip().split() for line in open('adcodes', encoding='utf8').readlines()])


amap_code_to_city = load_amap_cities()
amap_city_to_code = {v: k for k, v in amap_code_to_city.items()}
amap_short_city_to_full_city = {k[0:2]: k for k in amap_city_to_code}


def load_dxy_data():
    url = 'https://3g.dxy.cn/newh5/view/pneumonia'
    raw_html = requests.get(url).content.decode('utf8')
    match = re.search('window.getAreaStat = (.*?)}catch', raw_html)
    raw_json = match.group(1)
    result = json.loads(raw_json, encoding='utf8')
    return result


def load_tx_data():
    url = 'https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5'
    china = json.loads(requests.get(url).json()['data'])['areaTree'][0]
    assert china['name'] == '中国'
    # print(data)
    return china['children']


def normalize_city_name(province_name, city_name):
    # 手动映射
    manual_mapping_with_province = {
        ('西藏', '地区待确认'): '拉萨市', ('重庆', '高新区'): '九龙坡区'}
    if manual_mapping_with_province.get((province_name, city_name)):
        return manual_mapping_with_province[(province_name, city_name)]
    # 高德地图里没有两江新区，姑且算入渝北
    manual_mapping = {'巩义': '郑州市', '固始县': '信阳市',
                      '滑县': '安阳市', '长垣': '新乡市',
                      '永城': '商丘市', '邓州': '南阳市',
                      '韩城': '渭南市', '杨凌示范区': '咸阳市',
                      '宁东管委会': '银川市',
                      '满洲里': '呼伦贝尔市', '阿拉善': '阿拉善盟',
                      '宿松': '安庆市', '公主岭': '四平市', '两江新区': '渝北区',
                      '巴州': '巴音郭楞蒙古自治州', '六师五家渠': '五家渠市',
                      '第七师': '塔城地区', '第八师石河子': '石河子市',
                      '兵团第九师': '塔城地区'}
    if manual_mapping.get(city_name):
        return manual_mapping[city_name]

     # 忽略部分内容
    ignore_list = ['外地来京人员', '未知', '未明确地区', '所属地待确认', '待确认', '地区待确认']
    if city_name in ignore_list:
        #print('// ignore', province_name, city_name)
        return ''

    # 名称规则
    # 例如 临高县 其实是市级
    if city_name[-1] in ['市', '县', '盟']:
        normalized_name = city_name
    elif province_name == '重庆' and city_name[-1] == '区':
        normalized_name = city_name
    else:
        normalized_name = city_name + '市'
    if normalized_name in amap_city_to_code:
        return normalized_name

    # 前缀匹配
    # adcodes 里面的规范市名，出了 张家口市/张家界市，阿拉善盟/阿拉尔市 外，前两个字都是唯一的
    # cat adcodes|cut -d' ' -f2|cut -c1-2|sort|uniq -c |sort -k2n
    # 所以可以用前两个字
    normalized_name = amap_short_city_to_full_city.get(city_name[0:2], '')
    print(province_name, city_name, '=>', normalized_name)
    return normalized_name


def get_confirmed_count_dxy():
    confirmed_count = defaultdict(int)
    suspected_count = defaultdict(int)
    for p in load_dxy_data():
        province_name = p['provinceName']
        if province_name in ['香港', '澳门', '台湾']:
            continue
        if province_name in ['北京市', '上海市', '天津市']:
            code = amap_city_to_code[province_name]
            confirmed_count[code] = p['confirmedCount']
            continue
        for c in p["cities"]:
            city_name = c["cityName"]
            normalized_name = normalize_city_name(
                province_name, city_name)
            if normalized_name != '':
                # 丁香园有重复计算，县级市和地级市重复，如满洲里。因此用累加。TODO 是不是该累加？
                code = amap_city_to_code[normalized_name]
                confirmed_count[code] += c["confirmedCount"]
    return confirmed_count, suspected_count


def get_confirmed_count_tx():
    confirmed_count = defaultdict(int)
    suspected_count = defaultdict(int)
    for province in load_tx_data():
        # if item['country'] != '中国':
        #    continue
        if province['name'] in ['香港', '澳门', '台湾']:
            code = amap_city_to_code[province['name']]
            confirmed_count[code] += province['total']['confirm']
            suspected_count[code] += province['total']['suspect']
            continue
        if province['name'] in ['北京', '上海', '天津']:
            province_name = province['name'] + '市'
            code = amap_city_to_code[province_name]
            confirmed_count[code] += province['total']['confirm']
            suspected_count[code] += province['total']['suspect']
            continue
        for city in province['children']:
            normalized_name = normalize_city_name(
                province['name'], city['name'])
            if normalized_name != '':
                code = amap_city_to_code[normalized_name]
                confirmed_count[code] += city['total']["confirm"]
                suspected_count[code] += city['total']["suspect"]
    return confirmed_count, suspected_count


def count_to_color(confirm, suspect):
    # 颜色含义重新定义了请注意
    if confirm > 5000:
        return '#420001'
    if confirm > 2000:
        return '#590000'
    if confirm > 1000:
        return '#710000'
    if confirm > 500:
        return '#880000'
    if confirm > 200:
        return '#A00000'
    if confirm > 100:
        return '#B80000'
    if confirm > 90:
        return '#CF0000'
    if confirm > 80:
        return '#E70000'
    if confirm > 70:
        return '#FF0000'
    if confirm > 60:
        return '#FF1F1F'
    if confirm > 50:
        return '#FF3F3F'
    if confirm > 40:
        return '#FF5F5F'
    if confirm > 30:
        return '#FF7F7F'
    if confirm > 20:
        return '#FF9F9F'
    if confirm >= 10:
        return '#FFBFBF'
    if confirm > 0:
        return '#FFDFDF'
    if suspect > 0:
        return '#FDFFD6'
    return '#FFFFFF'


def write_result(result):
    writer = open('confirmed_data.js', 'w', encoding='utf8')
    writer.write('const LAST_UPDATE = "')
    writer.write(datetime.datetime.now(datetime.timezone(
        datetime.timedelta(hours=8))).strftime('%Y.%m.%d-%H:%M:%S'))
    writer.write('";\n')
    writer.write("const DATA = ")
    json.dump(result, writer, indent='  ', ensure_ascii=False)
    writer.close()


def main():
    confirmed_count, suspected_count = get_confirmed_count_tx()
    result = {}
    for code in amap_code_to_city:
        # 现在数据源的疑似都是 0 了
        result[code] = {'confirmedCount': confirmed_count[code],
                        'cityName': amap_code_to_city[code],
                        'color': count_to_color(confirmed_count[code], suspected_count[code])}
    write_result(result)


if __name__ == '__main__':
    main()
