export function normalizeCount(value: unknown): number {
  const count = Number(value);

  if (!Number.isFinite(count)) {
    return 0;
  }

  return Math.max(0, Math.trunc(count));
}

export function combinedTitleCount(
  realtimeCount: unknown,
  unreadNotificationCount: unknown,
  newNotificationCount: unknown,
  flagCount: unknown,
  newFlagCount: unknown
): number {
  const notificationCount = normalizeCount(newNotificationCount) > 0 ? normalizeCount(unreadNotificationCount) : 0;
  const moderationCount = normalizeCount(newFlagCount) > 0 ? normalizeCount(flagCount) : 0;

  return normalizeCount(realtimeCount) + notificationCount + moderationCount;
}

/**
 * Replaces only the prefix that Core just rendered from `app.titleCount`.
 * This preserves real page titles such as `(2026) Annual Summary`.
 */
export function titleWithCombinedCount(
  currentTitle: string,
  realtimeCount: unknown,
  unreadNotificationCount: unknown,
  newNotificationCount: unknown,
  flagCount: unknown,
  newFlagCount: unknown
): string {
  const corePrefix = realtimeCount ? `(${String(realtimeCount)}) ` : '';
  const baseTitle = corePrefix && currentTitle.startsWith(corePrefix) ? currentTitle.slice(corePrefix.length) : currentTitle;
  const count = combinedTitleCount(realtimeCount, unreadNotificationCount, newNotificationCount, flagCount, newFlagCount);

  return count > 0 ? `(${count}) ${baseTitle}` : baseTitle;
}
