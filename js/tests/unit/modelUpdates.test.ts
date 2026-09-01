import bootstrapForum from '@flarum/jest-config/src/bootstrap/forum.js';
import { jest } from '@jest/globals';
import User from 'flarum/common/models/User';
import app from 'flarum/forum/app';
import extendForum from '../../src/forum/extend/Forum';
import extendUser from '../../src/forum/extend/User';

describe('title updates from model data', () => {
  it('reacts to current-user and forum count payloads only', () => {
    bootstrapForum();
    app.boot();
    extendForum();
    extendUser();

    const updateTitle = jest.spyOn(app, 'updateTitle').mockImplementation(() => {});
    const actor = app.session.user!;

    app.store.pushPayload({
      data: {
        type: 'users',
        id: actor.id()!,
        attributes: { newFlagCount: 1 },
      },
    });
    expect(updateTitle).toHaveBeenCalledTimes(1);

    updateTitle.mockClear();
    app.forum.pushAttributes({ flagCount: 5 });
    expect(updateTitle).toHaveBeenCalledTimes(1);

    updateTitle.mockClear();
    actor.pushAttributes({ newNotificationCount: 1 });
    expect(updateTitle).toHaveBeenCalledTimes(1);

    updateTitle.mockClear();
    actor.pushAttributes({ unreadNotificationCount: 2 });
    expect(updateTitle).toHaveBeenCalledTimes(1);

    app.store.pushPayload({
      data: {
        type: 'users',
        id: '2',
        attributes: { displayName: 'Another User' },
      },
    });
    const otherUser = app.store.getById<User>('users', '2')!;

    updateTitle.mockClear();
    otherUser.pushAttributes({ newFlagCount: 1, newNotificationCount: 1, unreadNotificationCount: 1 });
    expect(updateTitle).not.toHaveBeenCalled();

    updateTitle.mockClear();
    actor.pushData({ attributes: { displayName: 'Admin' } });
    app.forum.pushData({ attributes: { title: 'Forum' } });
    expect(updateTitle).not.toHaveBeenCalled();

    updateTitle.mockRestore();
  });
});
