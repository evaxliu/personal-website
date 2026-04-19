"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionShell from "./SectionShell";

type RecentSubmission = {
  title: string;
  titleSlug: string;
  timestamp: string;
  statusDisplay: string;
  lang: string;
};

type TagItem = {
  tagName: string;
  tagSlug: string;
  problemsSolved: number;
};

type LeetCodeData = {
  username: string;
  profile: {
    realName: string;
    userAvatar: string;
    ranking: number;
    reputation: number;
    starRating: number;
  };
  stats: {
    totalSolved: number;
    easySolved: number;
    mediumSolved: number;
    hardSolved: number;
  };
  streak: number;
  totalActiveDays: number;
  calendar: Record<string, number>;
  recentSubmissions: RecentSubmission[];
  languages: Array<{
    languageName: string;
    problemsSolved: number;
  }>;
  tagProblemCounts: {
    advanced: TagItem[];
    intermediate: TagItem[];
    fundamental: TagItem[];
  };
  badges: Array<{
    id: string;
    displayName: string;
    icon: string;
    creationDate: string;
  }>;
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

const LEETCODE_USERNAME = "LilacPlanet";

function formatDate(timestamp: string) {
  const date = new Date(Number(timestamp) * 1000);
  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function getHeatColor(value: number) {
  if (value === 0) return "bg-white/10";
  if (value <= 1) return "bg-purple-400/30";
  if (value <= 2) return "bg-purple-400/45";
  if (value <= 4) return "bg-purple-400/65";
  return "bg-purple-300/90";
}

function buildRecentHeatmap(calendar: Record<string, number>, days = 35) {
  const today = new Date();
  const countsByDate = new Map<string, number>();

  for (const [timestamp, count] of Object.entries(calendar)) {
    const date = new Date(Number(timestamp) * 1000);
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(
      date.getDate()
    ).padStart(2, "0")}`;

    countsByDate.set(key, count);
  }

  const cells: { date: string; count: number }[] = [];

  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);

    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
      d.getDate()
    ).padStart(2, "0")}`;

    cells.push({
      date: key,
      count: countsByDate.get(key) ?? 0,
    });
  }

  return cells;
}

function mergeTopTags(data: LeetCodeData["tagProblemCounts"]) {
  return [...data.fundamental, ...data.intermediate, ...data.advanced]
    .sort((a, b) => b.problemsSolved - a.problemsSolved)
    .slice(0, 6);
}

function isLeetCodeData(value: unknown): value is LeetCodeData {
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

export default function HomeContent() {
  const [data, setData] = useState<LeetCodeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(
          `/api/leetcode?username=${encodeURIComponent(LEETCODE_USERNAME)}`
        );

        const text = await res.text();

        if (!text) {
          throw new Error("Your API route returned an empty response.");
        }

        let json: unknown;
        try {
          json = JSON.parse(text);
        } catch {
          throw new Error(
            `Your API route did not return valid JSON: ${text.slice(0, 120)}`
          );
        }

        if (!res.ok) {
          const errorMessage =
            typeof json === "object" &&
            json !== null &&
            "error" in json &&
            typeof json.error === "string"
              ? json.error
              : "Failed to fetch LeetCode data";

          throw new Error(errorMessage);
        }

        if (!isLeetCodeData(json)) {
          throw new Error("API returned an unexpected response shape.");
        }

        if (!ignore) {
          setData(json);
        }
      } catch (err) {
        if (!ignore) {
          setError(err instanceof Error ? err.message : "Something went wrong");
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      ignore = true;
    };
  }, []);

  const heatmap = useMemo(() => {
    if (!data) return [];
    return buildRecentHeatmap(data.calendar, 35);
  }, [data]);

  const topTags = useMemo(() => {
    if (!data) return [];
    return mergeTopTags(data.tagProblemCounts);
  }, [data]);

  const uniqueRecentSubmissions = useMemo(() => {
    if (!data) return [];

    const seen = new Set<string>();

    return data.recentSubmissions.filter((submission) => {
      if (seen.has(submission.titleSlug)) {
        return false;
      }

      seen.add(submission.titleSlug);
      return true;
    });
  }, [data]);

  return (
    <SectionShell title="Home">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-5"
      >
        <motion.div variants={item} className="space-y-3 pt-1">
          <p className="text-[20px] uppercase tracking-[0.22em] text-purple-300">
            Eva Liu
          </p>
          <p className="max-w-2xl text-sm md:text-base text-white/70 leading-relaxed">
            I enjoy building things end-to-end and learning by doing. Recently,
            I’ve been spending time strengthening my problem-solving
            skills through LeetCode while continuing to build projects across
            the stack.
          </p>
        </motion.div>

        {loading && (
          <motion.div
            variants={item}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70"
          >
            Loading live LeetCode data...
          </motion.div>
        )}

        {error && (
          <motion.div
            variants={item}
            className="rounded-2xl border border-red-400/20 bg-red-400/10 p-4 text-sm text-red-100"
          >
            {error}
          </motion.div>
        )}

        {data && (
          <motion.div variants={item} className="space-y-4">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold">
                  Live <span className="text-purple-300">LeetCode</span> activity
                </h2>
              </div>

              <a
                href={`https://leetcode.com/${LEETCODE_USERNAME}/`}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-purple-300 hover:text-purple-200 transition"
              >
                View profile ↗
              </a>
            </div>

            <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-white/55">Solved</p>
                <p className="mt-2 text-2xl font-semibold text-purple-300">
                  {data.stats.totalSolved}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-white/55">Streak</p>
                <p className="mt-2 text-2xl font-semibold text-amber-300">
                  {data.streak}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-white/55">Ranking</p>
                <p className="mt-2 text-2xl font-semibold text-sky-300">
                  #{data.profile?.ranking?.toLocaleString?.() ?? "—"}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-white/55">Active Days</p>
                <p className="mt-2 text-2xl font-semibold text-emerald-300">
                  {data.totalActiveDays}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <h3 className="text-base font-semibold">Activity</h3>
                    <p className="mt-0.5 text-[11px] text-white/55">
                      Last 35 days
                    </p>
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-7 gap-1 max-w-65">
                  {heatmap.map((cell) => (
                    <div
                      key={cell.date}
                      className={[
                        "aspect-square rounded-[5px] border border-white/10",
                        getHeatColor(cell.count),
                      ].join(" ")}
                      title={`${cell.date}: ${cell.count} submission${cell.count === 1 ? "" : "s"}`}
                    />
                  ))}
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[
                    {
                      label: "Easy",
                      value: data.stats.easySolved,
                      accent: "bg-emerald-300/80",
                    },
                    {
                      label: "Medium",
                      value: data.stats.mediumSolved,
                      accent: "bg-amber-300/80",
                    },
                    {
                      label: "Hard",
                      value: data.stats.hardSolved,
                      accent: "bg-rose-300/80",
                    },
                  ].map((row) => {
                    const width =
                      data.stats.totalSolved > 0
                        ? (row.value / data.stats.totalSolved) * 100
                        : 0;

                    return (
                      <div key={row.label} className="space-y-1.5">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-white/70">{row.label}</span>
                          <span className="text-white/50">{row.value}</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/8 overflow-hidden">
                          <div
                            className={`h-full rounded-full ${row.accent}`}
                            style={{ width: `${width}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4">
                  <h3 className="text-xs font-semibold text-white/85">
                    Top tags
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {topTags.map((tag) => (
                      <span
                        key={tag.tagSlug}
                        className="rounded-full border border-white/10 bg-white/6 px-2 py-0.5 text-[11px] text-white/75"
                      >
                        {tag.tagName} · {tag.problemsSolved}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-base font-semibold">Recent submissions</h3>

                <div className="mt-3 space-y-2">
                  {uniqueRecentSubmissions.length === 0 && (
                    <p className="text-sm text-white/60">
                      No recent submissions available.
                    </p>
                  )}

                  {uniqueRecentSubmissions.slice(0, 4).map((submission) => (
                    <div
                      key={`${submission.titleSlug}-${submission.timestamp}`}
                      className="rounded-lg border border-white/8 bg-black/10 p-3"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <a
                          href={`https://leetcode.com/problems/${submission.titleSlug}/`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[13px] font-medium text-white/90 leading-snug hover:text-purple-300 transition"
                        >
                          {submission.title}
                        </a>

                        <span
                          className={[
                            "shrink-0 rounded-full px-2 py-0.5 text-[10px] border",
                            submission.statusDisplay.toLowerCase().includes("accepted")
                              ? "border-emerald-300/20 bg-emerald-400/10 text-emerald-200"
                              : "border-amber-300/20 bg-amber-400/10 text-amber-200",
                          ].join(" ")}
                        >
                          {submission.statusDisplay}
                        </span>
                      </div>

                      <div className="mt-2 flex flex-wrap gap-1.5 text-[10px] text-white/55">
                        <span className="rounded-full bg-white/6 px-2 py-0.5">
                          {submission.lang}
                        </span>
                        <span className="rounded-full bg-white/6 px-2 py-0.5">
                          {formatDate(submission.timestamp)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </SectionShell>
  );
}