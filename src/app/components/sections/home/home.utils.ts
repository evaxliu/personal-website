import type { LeetCodeData } from "./home.types";

export function formatDate(timestamp: string) {
  return new Date(Number(timestamp) * 1000).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function getHeatColor(value: number) {
  if (value === 0) return "bg-white/8";
  if (value === 1) return "bg-purple-400/30";
  if (value <= 3) return "bg-purple-400/50";
  if (value <= 5) return "bg-purple-400/70";
  return "bg-purple-300/95";
}

function getUTCDateKey(date: Date) {
  return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(
    2,
    "0"
  )}-${String(date.getUTCDate()).padStart(2, "0")}`;
}

export function buildRecentHeatmap(
  calendar: Record<string, number>,
  days = 30
) {
  const countsByDate = new Map<string, number>();

  for (const [timestamp, count] of Object.entries(calendar)) {
    const date = new Date(Number(timestamp) * 1000);
    const key = getUTCDateKey(date);
    countsByDate.set(key, count);
  }

  return Array.from({ length: days }, (_, index) => {
    const date = new Date();
    date.setUTCHours(0, 0, 0, 0);
    date.setUTCDate(date.getUTCDate() - (days - 1 - index));

    const key = getUTCDateKey(date);

    return {
      date: key,
      count: countsByDate.get(key) ?? 0,
    };
  });
}

export function getLongestStreak(calendar: Record<string, number>) {
  const activeDates = new Set<string>();

  for (const [timestamp, count] of Object.entries(calendar)) {
    if (count > 0) {
      const date = new Date(Number(timestamp) * 1000);
      activeDates.add(getUTCDateKey(date));
    }
  }

  const sortedDates = Array.from(activeDates).sort();

  let longest = 0;
  let current = 0;
  let previousDate: Date | null = null;

  for (const dateKey of sortedDates) {
    const currentDate = new Date(`${dateKey}T00:00:00Z`);

    if (!previousDate) {
      current = 1;
    } else {
      const diffDays =
        (currentDate.getTime() - previousDate.getTime()) /
        (1000 * 60 * 60 * 24);

      current = diffDays === 1 ? current + 1 : 1;
    }

    longest = Math.max(longest, current);
    previousDate = currentDate;
  }

  return longest;
}

export function mergeTopTags(data: LeetCodeData["tagProblemCounts"]) {
  return [...data.fundamental, ...data.intermediate, ...data.advanced]
    .sort((a, b) => b.problemsSolved - a.problemsSolved)
    .slice(0, 6);
}

export function isLeetCodeData(value: unknown): value is LeetCodeData {
  return (
    typeof value === "object" &&
    value !== null &&
    "username" in value &&
    "stats" in value &&
    "calendar" in value &&
    "recentSubmissions" in value &&
    "tagProblemCounts" in value
  );
}