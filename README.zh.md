# Activity Title Count

[![许可证](https://img.shields.io/github/license/FFans/activity-title-count?branch=2.x)](LICENSE)
[![Flarum](https://img.shields.io/badge/flarum-2.x-%23e7672e)](https://docs.flarum.org/)
[![最新版本](https://img.shields.io/github/v/release/FFans/activity-title-count?filter=2.*&sort=semver)](https://github.com/FFans/activity-title-count/releases)
[![发布日期](https://img.shields.io/github/release-date/FFans/activity-title-count)](https://github.com/FFans/activity-title-count/releases)
[![Packagist 下载量](https://img.shields.io/packagist/dt/ffans/activity-title-count)](https://packagist.org/packages/ffans/activity-title-count)
[![月下载量](https://img.shields.io/packagist/dm/ffans/activity-title-count)](https://packagist.org/packages/ffans/activity-title-count)

把处于高亮态的通知数和审核队列数加入浏览器标题中的 Realtime 计数。

## 预览

```text
Realtime 待处理动态：3
未读通知：           2（通知按钮为 new 高亮）
待审核帖子：         4（审核按钮为 new 高亮）

浏览器标题：(9) 全部主题 - 我的论坛
```

每一项只在对应按钮处于高亮态时计入。以上示例中，通知高亮消失后标题会变为 `(7) 全部主题 - 我的论坛`；两处高亮都消失后，只保留 Realtime 的 `(3)` 计数。

审核数量取自 Flarum Flags 的按钮徽标，按审核队列中可见的帖子去重统计，包括 Approval 待批准帖子和用户举报帖子。

## 功能

- 仅在 Flarum 通知按钮显示高亮态时，把未读通知数量加入浏览器标题。
- 仅在 Flarum 审核按钮显示高亮态时，把待处理帖子数量加入浏览器标题。
- Core、Flags 或 Realtime 更新对应计数后立即刷新标题。
- 在 Flarum 单页应用导航期间保持正确计数。
- 保留本身以括号数字开头的真实页面标题。
- 无后端。

## 环境要求

| 扩展版本线 | Flarum | flarum/realtime | flarum/flags | 分支  |
|------------|--------|-----------------|--------------|-------|
| 2.x        | 2.x    | 2.x             | 2.x（可选）  | `2.x` |

## 安装

使用 Composer 安装：

```sh
composer require ffans/activity-title-count
php flarum cache:clear
```

然后在 Flarum 管理后台启用 **FFans Activity Title Count**。同时必须安装、配置并启用 Flarum Realtime。启用 Flarum Flags（直接启用或由 Flarum Approval 依赖启用）后，审核计数会自动生效。

## 更新

```sh
composer update ffans/activity-title-count
php flarum cache:clear
```

## 配置

无需配置。扩展会把 Realtime 待处理动态数与登录用户的通知、审核徽标总数合并；每个徽标数只在 Flarum 将对应按钮标记为高亮态时计入。

## 翻译

扩展当前没有面向用户的界面文本。如果未来版本加入可翻译界面，欢迎通过仓库贡献翻译。

## 链接

- [GitHub](https://github.com/FFans/activity-title-count)
- [Packagist](https://packagist.org/packages/ffans/activity-title-count)
- [英文社区](https://discuss.flarum.org/d/...)
- [中文社区](https://discuss.flarum.org.cn/d/...)

## 许可证

本项目基于 [MIT 许可证](LICENSE)发布。
