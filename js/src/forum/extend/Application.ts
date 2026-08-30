import Application from 'flarum/common/Application';
import { extend } from 'flarum/common/extend';
import app from 'flarum/forum/app';
import { titleWithCombinedCount } from '../utils/titleCount';

export default function extendApplication(): void {
  extend(Application.prototype, 'updateTitle', function () {
    document.title = titleWithCombinedCount(
      document.title,
      this.titleCount,
      app.session?.user?.unreadNotificationCount(),
      app.session?.user?.newNotificationCount()
    );
  });
}
