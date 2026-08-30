# Activity Title Count

[![License](https://img.shields.io/github/license/FFans/activity-title-count?branch=2.x)](LICENSE)
[![Flarum](https://img.shields.io/badge/flarum-2.x-%23e7672e)](https://docs.flarum.org/)
[![Latest release](https://img.shields.io/github/v/release/FFans/activity-title-count?filter=2.*&sort=semver)](https://github.com/FFans/activity-title-count/releases)
[![Release date](https://img.shields.io/github/release-date/FFans/activity-title-count)](https://github.com/FFans/activity-title-count/releases)
[![Packagist downloads](https://img.shields.io/packagist/dt/ffans/activity-title-count)](https://packagist.org/packages/ffans/activity-title-count)
[![Monthly downloads](https://img.shields.io/packagist/dm/ffans/activity-title-count)](https://packagist.org/packages/ffans/activity-title-count)

Adds the unread notification count to Realtime's browser-title count while Flarum's notification button is highlighted.

## Preview

```text
Realtime pending activity: 3
Unread notifications:      2 (notification button highlighted)

Browser title: (5) Discussions - My Forum
```

When the notification dropdown is opened and the highlight clears, unread notifications stop contributing to the title. With the example above, the title becomes `(3) Discussions - My Forum`.

## Features

- Adds the unread notification count to the browser title only while Flarum's notification button is highlighted.
- Updates immediately when notifications arrive, the notification dropdown is viewed, notifications are read, all are marked as read, or all are deleted.
- Keeps the correct count across Flarum's single-page navigation.
- Preserves real page titles that begin with a number in parentheses.
- No backend.

## Requirements

| Extension line | Flarum | flarum/realtime | Branch |
| --- | --- | --- | --- |
| 2.x | 2.x | 2.x | `2.x` |

## Installation

Install with Composer:

```sh
composer require ffans/activity-title-count
php flarum cache:clear
```

Then enable **FFans Activity Title Count** in the Flarum administration dashboard. Flarum Realtime must also be installed, configured, and enabled.

## Updating

```sh
composer update ffans/activity-title-count
php flarum cache:clear
```

## Configuration

No configuration is required. The extension adds the signed-in user's unread notification count to Realtime's current pending-activity count only while Flarum highlights the notification button.

## Translations

The extension currently has no user-visible interface strings. Repository contributions are welcome if future versions add translatable UI.

## Links

- [GitHub](https://github.com/FFans/activity-title-count)
- [Packagist](https://packagist.org/packages/ffans/activity-title-count)
- [Discuss](https://discuss.flarum.org/d/...)
- [Discuss in Chinese](https://discuss.flarum.org.cn/d/...)

## License

Released under the [MIT License](LICENSE).
