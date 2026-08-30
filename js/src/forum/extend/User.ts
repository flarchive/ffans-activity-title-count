import User from 'flarum/common/models/User';
import { extend } from 'flarum/common/extend';
import app from 'flarum/forum/app';

export default function extendUser(): void {
  extend(User.prototype, 'pushAttributes', function (_returnValue, attributes) {
    const notificationCountChanged =
      Object.prototype.hasOwnProperty.call(attributes, 'unreadNotificationCount') ||
      Object.prototype.hasOwnProperty.call(attributes, 'newNotificationCount');

    if (this !== app.session?.user || !notificationCountChanged) {
      return;
    }

    // Core and Realtime have already updated the authoritative actor model.
    // Re-render the title without mirroring or changing either counter.
    app.updateTitle();
  });
}
