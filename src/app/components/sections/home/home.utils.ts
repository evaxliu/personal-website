import type { LeetCodeData } from "./home.types";

export function formatDate(timestamp: string) {
  return new Date(Number(timestamp) * 1000).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function getHeatColor(value: number) {
  if (value === 0) return "bg-white/10";
  if (value <= 1) return "bg-purple-400/30";
  if (value <= 2) return "bg-purple-400/45";
  if (value <= 4) return "bg-purple-400/65";
  return "bg-purple-300/90";
}

export function buildRecentHeatmap(
  calendar: Record<string, number>,
  days = 35
) {
  const today = new Date();
  const countsByDate = new Map<string, number>();

  for (const [timestamp, count] of Object.entries(calendar)) {
    const d = new Date(Number(timestamp) * 1000);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(d.getDate()).padStart(2, "0")}`;

    countsByDate.set(key, count);
  }

  return Array.from({ length: days }, (_, index) => {
    const d = new Date(today);
    d.setDate(today.getDate() - (days - 1 - index));

    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(d.getDate()).padStart(2, "0")}`;

    return {
      date: key,
      count: countsByDate.get(key) ?? 0,
    };
  });
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