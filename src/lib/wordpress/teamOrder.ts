// Team members whose spot on /team differs from WordPress's newest-first
// order (keyed by the WordPress post id; value is the 1-based position).
const TEAM_POSITIONS: Record<number, number> = {
  233: 10, // Hanna
};

/** Moves pinned items to their configured positions; everything else keeps its order. */
export const applyTeamPositions = <T>(items: T[], getId: (item: T) => number): T[] => {
  const position = (item: T) => TEAM_POSITIONS[getId(item)];
  const pinned = items.filter((item) => position(item)).sort((a, b) => position(a) - position(b));
  const ordered = items.filter((item) => !position(item));
  for (const item of pinned) ordered.splice(Math.min(position(item) - 1, ordered.length), 0, item);
  return ordered;
};
