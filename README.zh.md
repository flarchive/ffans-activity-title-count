# Activity Title Count

[![许可证](https://img.shields.io/github/license/FFans/activity-title-count?branch=2.x)](LICENSE)
[![Flarum](https://img.shields.io/badge/flarum-2.x-%23e7672e)](https://docs.flarum.org/)
[![最新版本](https://img.shields.io/github/v/release/FFans/activity-title-count?filter=2.*&sort=semver)](https://github.com/FFans/activity-title-count/releases)
[![发布日期](https://img.shields.io/github/release-date/FFans/activity-title-count)](https://github.com/FFans/activity-title-count/releases)
[![Packagist 下载量](https://img.shields.io/packagist/dt/ffans/activity-title-count)](https://packagist.org/packages/ffans/activity-title-count)
[![月下载量](https://img.shields.io/packagist/dm/ffans/activity-title-count)](https://packagist.org/packages/ffans/activity-title-count)

在 Flarum 通知按钮为高亮态时，把未读通知数加入浏览器标题中的 Realtime 计数。

## 预览

```text
Realtime 待处理动态：3
未读通知：           2（通知按钮为 new 高亮）

浏览器标题：(5) 全部主题 - 我的论坛
```

当用户打开通知下拉列表，高亮态消失后，未读通知不再计入标题。以上示例的标题会变为 `(3) 全部主题 - 我的论坛`。

## 功能

- 仅在 Flarum 通知按钮显示高亮态时，把未读通知数量加入浏览器标题。
- 收到通知、查看通知下拉列表、读取单条、全部标记已读或删除全部通知后立即更新。
- 在 Flarum 单页应用导航期间保持正确计数。
- 保留本身以括号数字开头的真实页面标题。
- 无后端。

## 环境要求

| 扩展版本线 | Flarum | flarum/realtime | 分支  |
|------------|--------|-----------------|-------|
| 2.x        | 2.x    | 2.x             | `2.x` |

## 安装

使用 Composer 安装：

```sh
composer require ffans/activity-title-count
php flarum cache:clear
```

然后在 Flarum 管理后台启用 **FFans Activity Title Count**。同时必须安装、配置并启用 Flarum Realtime。

## 更新

```sh
composer update ffans/activity-title-count
php flarum cache:clear
```

## 配置

无需配置。只有当 Flarum 将通知按钮标记为高亮态时，扩展才会把登录用户的未读通知数加入 Realtime 当前待处理动态数。

## 翻译

扩展当前没有面向用户的界面文本。如果未来版本加入可翻译界面，欢迎通过仓库贡献翻译。

## 链接

- [GitHub](https://github.com/FFans/activity-title-count)
- [Packagist](https://packagist.org/packages/ffans/activity-title-count)
- [英文社区](https://discuss.flarum.org/d/...)
- [中文社区](https://discuss.flarum.org.cn/d/...)

## 许可证

本项目基于 [MIT 许可证](LICENSE)发布。
