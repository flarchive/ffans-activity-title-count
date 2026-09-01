import Forum from 'flarum/common/models/Forum';
import type { ModelAttributes } from 'flarum/common/Model';
import { extend } from 'flarum/common/extend';
import app from 'flarum/forum/app';

export default function extendForum(): void {
  extend(Forum.prototype, 'pushData', function (_returnValue, data) {
    const attributes = (data as { attributes?: ModelAttributes }).attributes;

    if (this !== app.forum || !attributes || !Object.prototype.hasOwnProperty.call(attributes, 'flagCount')) {
      return;
    }

    // Flags has already updated the authoritative forum model.
    app.updateTitle();
  });
}
