# 中国新型冠状病毒肺炎疫情地级市图

在网页上通过腾讯新闻的 API 获得 __现存__ 病例数，在高德地图上给每个城市绘制不同颜色。    
点击地图可以显示每个城市的具体数字。

## 使用说明

### 方式一（推荐）：直接网页访问
本项目已经部署在 Github Pages 上了。可以直接访问 [这里](https://lispczz.github.io/pneumonia/)。

### 方式二：自己手动生成 

```bash
# 可以直接访问
$ yarn webpack serve
# 或者打包后使用静态文件服务器 host
$ yarn webpack
```

## 注意事项
* 目前没有处理疑似病例
* 北京，上海，天津不细分区县
* (bug) 少数城市显示病例数时，城市名最开始一两个字会丢失，例如应当显示“忻州市 2”，显示的是“州市 2”。原因不明。

## 离线数据获取工具

```bash
# 可以使用下面的命令直接 print 每个城市的病例数
$ ts-node src/load_data.ts

# 之前使用 Python 离线做数据处理，也可以参考
# 数据写入 confirmed_data.js 中
$ python3 legacy_fetch_data.py 
```

## 效果

![效果图](demo.png)

