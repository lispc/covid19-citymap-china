# -*- coding: utf-8 -*-
import re
from collections import defaultdict
import json
import requests


def load_amap_cities():
    return dict([line.strip().split() for line in open('adcodes').readlines()])


amap_code_to_city = load_amap_cities()
amap_city_to_code = {v: k for k, v in amap_code_to_city.items()}


def load_dxy_data():
    url = 'https://3g.dxy.cn/newh5/view/pneumonia'
    raw_html = requests.get(url).content.decode('utf8')
    match = re.search('window.getAreaStat = (.*?)}catch', raw_html)
    raw_json = match.group(1)
    result = json.loads(raw_json, encoding='utf8')
    return result


def normalize_city_name(dxy_city_name):
    ignore_list = ['外地来京人员', '未知']
    if dxy_city_name in ignore_list:
        return ''
    # TODO find a better solution
    manual_mapping = {'锡林郭勒': '锡林郭勒盟', '恩施州': '恩施土家族苗族自治州',
                      '西双版纳州': '西双版纳傣族自治州', '黔南州': '黔南布依族苗族自治州',
                      '临夏': '临夏回族自治州'
                      }
    if manual_mapping.get(dxy_city_name):
        return manual_mapping[dxy_city_name]
    nested = {'巩义': '郑州市', '满洲里': '呼伦贝尔市', '固始县': '信阳市'}
    if nested.get(dxy_city_name):
        return nested[dxy_city_name]
    # 例如 临高县 其实是个市
    if dxy_city_name[-1] in ['县']:
        return ''
    if dxy_city_name[-1] == '市':
        return dxy_city_name
    return dxy_city_name + '市'


def get_confirmed_count():
    confirmed_count = defaultdict(int)
    for p in load_dxy_data():
        if p['provinceShortName'] in ['北京', '上海', '天津', '重庆']:
            normalized_name = p['provinceShortName'] + '市'
            code = amap_city_to_code[normalized_name]
            confirmed_count[code] = p['confirmedCount']
            continue
        for c in p["cities"]:
            dxy_city_name = c["cityName"]
            normalized_name = normalize_city_name(dxy_city_name)
            if normalized_name != '':
                # 丁香园有重复计算，县级市和地级市重复，如满洲里。因此用累加。TODO 是不是该累加？
                code = amap_city_to_code[normalized_name]
                confirmed_count[code] += c["confirmedCount"]
    return confirmed_count


def count_to_color(count):
    # 颜色含义同丁香园
    if count == 0:
        return '#FFFFFF'
    if count < 10:
        return '#F08E7E'
    if count <= 100:
        return '#E04B49'
    return '#73181B'


def write_result(result):
    writer = open('dxy_confirmed_data.js', 'w')
    writer.write("const DATA = ")
    json.dump(result, writer, indent='  ', ensure_ascii=False)
    writer.close()


def main():
    confirmed_count = get_confirmed_count()
    result = {}
    for code in amap_code_to_city:
        result[code] = {'confirmedCount': confirmed_count.get(code, 0),
                        'cityName': amap_code_to_city[code], 'color': count_to_color(confirmed_count.get(code, 0))}
    write_result(result)


if __name__ == '__main__':
    main()
