import { combinedTitleCount, normalizeCount, titleWithCombinedCount } from '../../src/forum/utils/titleCount';

describe('normalizeCount', () => {
  test.each([
    [undefined, 0],
    [null, 0],
    [Number.NaN, 0],
    [Number.POSITIVE_INFINITY, 0],
    [-1, 0],
    [0, 0],
    [1.9, 1],
    [3, 3],
  ])('normalizes %p to %p', (value, expected) => {
    expect(normalizeCount(value)).toBe(expected);
  });
});

describe('combinedTitleCount', () => {
  test.each([
    [0, 0, 0, 0, 0, 0],
    [3, 0, 0, 0, 0, 3],
    [0, 4, 1, 0, 0, 4],
    [3, 4, 1, 0, 0, 7],
    [0, 4, 0, 0, 0, 0],
    [3, 4, 0, 0, 0, 3],
    [0, 0, 0, 5, 1, 5],
    [3, 0, 0, 5, 1, 8],
    [3, 4, 1, 5, 1, 12],
    [3, 4, 1, 5, 0, 7],
    [3, 4, 0, 5, 1, 8],
    [undefined, undefined, undefined, undefined, undefined, 0],
    [-1, 3, 1, -1, 1, 3],
    [Number.NaN, 4, 1, Number.NaN, 1, 4],
    [1, 999, 1, 999, 1, 1999],
  ])(
    'combines realtime %p, unread notifications %p/%p, and pending moderation %p/%p as %p',
    (realtime, unread, notificationsAreNew, pendingModeration, moderationIsNew, expected) => {
      expect(combinedTitleCount(realtime, unread, notificationsAreNew, pendingModeration, moderationIsNew)).toBe(expected);
    }
  );
});

describe('titleWithCombinedCount', () => {
  it('combines the Core prefix with unread notifications while the notification button is new', () => {
    expect(titleWithCombinedCount('(3) Discussion - Forum', 3, 4, 1, 0, 0)).toBe('(7) Discussion - Forum');
  });

  it('combines the Core prefix with pending posts while the moderation button is new', () => {
    expect(titleWithCombinedCount('(3) Discussion - Forum', 3, 0, 0, 5, 1)).toBe('(8) Discussion - Forum');
  });

  it('combines Realtime, notification, and moderation counts', () => {
    expect(titleWithCombinedCount('(3) Discussion - Forum', 3, 4, 1, 5, 1)).toBe('(12) Discussion - Forum');
  });

  it('keeps unread notifications after Realtime resets while the notification button is new', () => {
    const realtimeCount = 0;

    expect(titleWithCombinedCount('Discussion - Forum', realtimeCount, 4, 1, 0, 0)).toBe('(4) Discussion - Forum');
    expect(realtimeCount).toBe(0);
  });

  it('excludes unread notifications after the notification button is no longer new', () => {
    expect(titleWithCombinedCount('(3) Discussion - Forum', 3, 4, 0, 0, 0)).toBe('(3) Discussion - Forum');
    expect(titleWithCombinedCount('Discussion - Forum', 0, 4, 0, 0, 0)).toBe('Discussion - Forum');
  });

  it('excludes pending posts after the moderation button is no longer new', () => {
    expect(titleWithCombinedCount('(3) Discussion - Forum', 3, 0, 0, 5, 0)).toBe('(3) Discussion - Forum');
    expect(titleWithCombinedCount('Discussion - Forum', 0, 0, 0, 5, 0)).toBe('Discussion - Forum');
  });

  it('does not duplicate the count when Core recalculates a page title', () => {
    expect(titleWithCombinedCount('(2) Home - Forum', 2, 2, 1, 3, 1)).toBe('(7) Home - Forum');
    expect(titleWithCombinedCount('(2) Topic - Forum', 2, 2, 1, 3, 1)).toBe('(7) Topic - Forum');
  });

  it('preserves a real numeric page-title prefix when there is no count', () => {
    expect(titleWithCombinedCount('(2026) Annual Summary', 0, 0, 0, 0, 0)).toBe('(2026) Annual Summary');
  });

  it('removes Core negative and decimal prefixes before applying normalized totals', () => {
    expect(titleWithCombinedCount('(-1) Forum', -1, 3, 1, 0, 0)).toBe('(3) Forum');
    expect(titleWithCombinedCount('(1.9) Forum', 1.9, 4, 1, 0, 0)).toBe('(5) Forum');
  });
});
