# 吃什么都可以

面向马来西亚用户的午餐 / 晚餐灵感网页，使用 HTML、CSS 和原生 JavaScript，不需要地图 API key，也不依赖收费地图服务。

## 本地运行

在项目目录运行：

```powershell
py -m http.server 5500
```

然后打开 `http://localhost:5500`。浏览器定位通常需要 HTTPS 或 localhost 等安全上下文。

## 免费发布到 GitHub Pages

1. 在 GitHub 建立一个公开仓库，并将本项目文件上传到仓库。
2. 打开仓库 **Settings → Pages**。
3. 在 **Build and deployment** 选择 **GitHub Actions**。
4. 推送到 `main` 分支后，仓库中的 `.github/workflows/pages.yml` 会自动发布静态网页。
5. 发布完成后，GitHub Pages 会显示 `https://你的用户名.github.io/仓库名/`。自订网域是可选项，不需要购买网域也能使用。

GitHub Pages 的公开仓库静态托管符合其免费方案条件；GitHub 账号、仓库可见性及 Pages 的当前使用政策仍以 GitHub 官方说明为准。此网页不会使用 Firebase、Google Places 或收费 API。

## 附近餐饮地点

- 输入马来西亚城市、地区或地址时，使用 OpenStreetMap Nominatim 将地点转换为坐标，再查询 Overpass 公共地图服务；定位则只在用户授权后把坐标发送给 Overpass。
- 输入内容或定位坐标会发送给 OpenStreetMap 公共服务。查询服务由第三方维护，可能繁忙、限流、受网络阻挡或暂时无法访问；网页会显示错误，不会把示范数据伪装成真实结果。
- 餐厅资料由 OpenStreetMap 社群维护，资料不一定完整或最新；查询结果不能保证涵盖该地区全部店家。
- 距离是网页计算的直线距离，不是驾驶或步行路线。OSM 通常不提供菜品价格和实时营业状态，因此真实地点不会按 RM 预算过滤。
- 结果和地图链接会注明 OpenStreetMap 贡献者及 ODbL 资料许可。
- 为减少对公共服务的请求，页面会缓存当前地点的查询结果，并在本次页面打开期间缓存已识别的地点。

## 其他功能

- 按料理类型、预算筛选示范吃饭灵感；示范店家、价格、距离和交通时间并非真实商家数据。
- 幸运转盘支持手动输入、当前餐厅列表，以及从正餐清单随机抽取 30 种午餐 / 晚餐选择。
- 支持手机响应式布局、减少动态效果设置、TNG 捐款入口和反馈邮箱。
