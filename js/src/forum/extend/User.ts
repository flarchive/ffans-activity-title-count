import User from 'flarum/common/models/User';
import type { ModelAttributes } from 'flarum/common/Model';
import { extend } from 'flarum/common/extend';
import app from 'flarum/forum/app';

export default function extendUser(): void {
  extend(User.prototype, 'pushData', function (_returnValue, data) {
    const attributes = (data as { attributes?: ModelAttributes }).attributes;
    const titleCountChanged =
      attributes &&
      (Object.prototype.hasOwnProperty.call(attributes, 'unreadNotificationCount') ||
        Object.prototype.hasOwnProperty.call(attributes, 'newNotificationCount') ||
        Object.prototype.hasOwnProperty.call(attributes, 'newFlagCount'));

    if (this !== app.session?.user || !titleCountChanged) {
      return;
    }

    // Core, Flags, and Realtime have already updated the authoritative actor model.
    // Re-render the title without mirroring or changing any counter.
    app.updateTitle();
  });
}
