# -*- coding: utf-8 -*-
import re
from collections import defaultdict
import json
import requests
import datetime


def load_amap_cities():
    return dict([line.strip().split() for line in open('adcodes').readlines()])


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
    url = 'https://view.inews.qq.com/g2/getOnsInfo?name=wuwei_ww_area_counts'
    data = json.loads(requests.get(url).json()['data'])
    return data


def normalize_city_name(dxy_province_name, dxy_city_name):
    # 忽略部分内容
    ignore_list = ['外地来京人员', '未知']
    if dxy_city_name in ignore_list:
        return ''

    # 手动映射
    manual_mapping = {'巩义': '郑州市', '满洲里': '呼伦贝尔市', '固始县': '信阳市', '阿拉善': '阿拉善盟'}
    if manual_mapping.get(dxy_city_name):
        return manual_mapping[dxy_city_name]

    # 名称规则
    # 例如 临高县 其实是市级
    if dxy_city_name[-1] in ['市', '县', '盟']:
        normalized_name = dxy_city_name
    else:
        normalized_name = dxy_city_name + '市'
    if normalized_name in amap_city_to_code:
        return normalized_name

    # 前缀匹配
    # adcodes 里面的规范市名，出了 张家口市/张家界市，阿拉善盟/阿拉尔市 外，前两个字都是唯一的
    # cat adcodes|cut -d' ' -f2|cut -c1-2|sort|uniq -c |sort -k2n
    # 所以可以用前两个字
    normalized_name = amap_short_city_to_full_city[dxy_city_name[0:2]]
    print('fuzz map', dxy_province_name, dxy_city_name, 'to', normalized_name)
    return normalized_name


def get_confirmed_count_dxy():
    confirmed_count = defaultdict(int)
    suspected_count = defaultdict(int)
    for p in load_dxy_data():
        dxy_province_name = p['provinceName']
        if dxy_province_name in ['香港', '澳门', '台湾']:
            continue
        if dxy_province_name in ['北京市', '上海市', '天津市', '重庆市']:
            code = amap_city_to_code[dxy_province_name]
            confirmed_count[code] = p['confirmedCount']
            continue
        for c in p["cities"]:
            dxy_city_name = c["cityName"]
            normalized_name = normalize_city_name(
                dxy_province_name, dxy_city_name)
            if normalized_name != '':
                # 丁香园有重复计算，县级市和地级市重复，如满洲里。因此用累加。TODO 是不是该累加？
                code = amap_city_to_code[normalized_name]
                confirmed_count[code] += c["confirmedCount"]
    return confirmed_count, suspected_count


def get_confirmed_count_tx():
    confirmed_count = defaultdict(int)
    suspected_count = defaultdict(int)
    for item in load_tx_data():
        if item['country'] != '中国':
            continue
        if item['area'] in ['香港', '澳门', '台湾']:
            continue
        if item['area'] in ['北京', '上海', '天津', '重庆']:
            province_name = item['area'] + '市'
            code = amap_city_to_code[province_name]
            confirmed_count[code] += item['confirm']
            suspected_count[code] += item['suspect']
            continue
        normalized_name = normalize_city_name(item['area'], item['city'])
        if normalized_name != '':
            code = amap_city_to_code[normalized_name]
            confirmed_count[code] += item["confirm"]
            suspected_count[code] += item["suspect"]
    return confirmed_count, suspected_count


def count_to_color(confirm, suspect):
    # 颜色含义同丁香园
    if confirm > 100:
        return '#73181B'
    if confirm >= 10:
        return '#E04B49'
    if confirm > 0:
        return '#F08E7E'
    if suspect > 0:
        return '#F2D7A2'
    return '#FFFFFF'


def write_result(result):
    writer = open('confirmed_data.js', 'w')
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
