# 中国新型冠状病毒肺炎疫情地级市图

## 使用说明
### 方式一（推荐）：直接网页访问
本项目已经部署在 Github Pages 上了。可以直接访问 [这里](https://lispczz.github.io/pneumonia/)。每五分钟自动更新。

### 方式二：自己手动生成 

```bash
python3 generate_data.py # 这一步会从腾讯新闻疫情网页上获得地级市的疫情确认数，之后写入到 confirmed_data.js
open index.html # 使用高德地图 API 画图，使用了上一步中的获得的数据
```

## 注意事项
* 目前没有处理疑似病例
* 不包括港澳台。北京，上海，天津不细分区县。

## 效果

![效果图](demo.png)

