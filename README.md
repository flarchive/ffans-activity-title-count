# Activity Title Count

[![License](https://img.shields.io/github/license/FFans/activity-title-count?branch=2.x)](LICENSE)
[![Flarum](https://img.shields.io/badge/flarum-2.x-%23e7672e)](https://docs.flarum.org/)
[![Latest release](https://img.shields.io/github/v/release/FFans/activity-title-count?filter=2.*&sort=semver)](https://github.com/FFans/activity-title-count/releases)
[![Release date](https://img.shields.io/github/release-date/FFans/activity-title-count)](https://github.com/FFans/activity-title-count/releases)
[![Packagist downloads](https://img.shields.io/packagist/dt/ffans/activity-title-count)](https://packagist.org/packages/ffans/activity-title-count)
[![Monthly downloads](https://img.shields.io/packagist/dm/ffans/activity-title-count)](https://packagist.org/packages/ffans/activity-title-count)

Adds highlighted notification and moderation-queue counts to Realtime's browser-title count.

## Preview

```text
Realtime pending activity: 3
Unread notifications:      2 (notification button highlighted)
Pending moderation posts:  4 (moderation button highlighted)

Browser title: (9) Discussions - My Forum
```

Each count contributes only while its corresponding button is highlighted. With the example above, clearing the notification highlight changes the title to `(7) Discussions - My Forum`; clearing both highlights leaves Realtime's `(3)` count.

The moderation number comes from Flarum Flags' badge. It counts distinct posts visible in the moderation queue, including posts awaiting Approval and user-reported posts.

## Features

- Adds the unread notification count to the browser title only while Flarum's notification button is highlighted.
- Adds the pending moderation-post count only while Flarum's moderation button is highlighted.
- Updates immediately when Core, Flags, or Realtime changes the corresponding count.
- Keeps the correct count across Flarum's single-page navigation.
- Preserves real page titles that begin with a number in parentheses.
- No backend.

## Requirements

| Extension line | Flarum | flarum/realtime | flarum/flags | Branch |
| --- | --- | --- | --- | --- |
| 2.x | 2.x | 2.x | 2.x (optional) | `2.x` |

## Installation

Install with Composer:

```sh
composer require ffans/activity-title-count
php flarum cache:clear
```

Then enable **FFans Activity Title Count** in the Flarum administration dashboard. Flarum Realtime must also be installed, configured, and enabled. Moderation counting is enabled automatically when Flarum Flags (directly or through Flarum Approval) is enabled.

## Updating

```sh
composer update ffans/activity-title-count
php flarum cache:clear
```

## Configuration

No configuration is required. The extension combines Realtime's pending activity with the signed-in user's notification and moderation badge totals. Each badge total is included only while Flarum marks that button as highlighted.

## Translations

The extension currently has no user-visible interface strings. Repository contributions are welcome if future versions add translatable UI.

## Links

- [GitHub](https://github.com/FFans/activity-title-count)
- [Packagist](https://packagist.org/packages/ffans/activity-title-count)
- [Discuss](https://discuss.flarum.org/d/...)
- [Discuss in Chinese](https://discuss.flarum.org.cn/d/...)

## License

Released under the [MIT License](LICENSE).
