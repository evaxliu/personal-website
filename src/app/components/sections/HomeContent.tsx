"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionShell from "./SectionShell";
import ContentCard from "@/app/components/ui/ContentCard";
import type { LeetCodeData } from "./home/home.types";
import {
  buildRecentHeatmap,
  getHeatColor,
  isLeetCodeData,
  mergeTopTags,
} from "./home/home.utils";
import {
  PanelCard,
  StatCard,
  SubmissionItem,
  TagChip,
} from "./home/components";

const LEETCODE_USERNAME = "LilacPlanet";
const ACTIVITY_DAYS = 30;

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

export default function HomeContent() {
  const [data, setData] = useState<LeetCodeData | null>(null);
  const [initialLoading, setInitialLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState("");
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  async function fetchLeetCodeData(showLoading = false) {
    try {
      if (showLoading) {
        setInitialLoading(true);
      } else {
        setIsRefreshing(true);
      }

      setError("");

      const res = await fetch(
        `/api/leetcode?username=${encodeURIComponent(LEETCODE_USERNAME)}`,
        { cache: "no-store" }
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
        const message =
          typeof json === "object" &&
          json !== null &&
          "error" in json &&
          typeof json.error === "string"
            ? json.error
            : "Failed to fetch LeetCode data";

        throw new Error(message);
      }

      if (!isLeetCodeData(json)) {
        throw new Error("API returned an unexpected response shape.");
      }

      setData(json);
      setLastUpdated(
        new Date().toLocaleTimeString([], {
          hour: "numeric",
          minute: "2-digit",
        })
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      if (showLoading) {
        setInitialLoading(false);
      } else {
        setIsRefreshing(false);
      }
    }
  }

  useEffect(() => {
    let lastRefreshTime = 0;

    function guardedRefresh(showLoading = false) {
      const now = Date.now();
      if (now - lastRefreshTime < 1000) return;
      lastRefreshTime = now;

      void fetchLeetCodeData(showLoading);
    }

    function handleFocus() {
      guardedRefresh(false);
    }

    function handleVisibilityChange() {
      if (document.visibilityState === "visible") {
        guardedRefresh(false);
      }
    }

    guardedRefresh(true);

    window.addEventListener("focus", handleFocus);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("focus", handleFocus);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const heatmap = useMemo(() => {
    return data ? buildRecentHeatmap(data.calendar, ACTIVITY_DAYS) : [];
  }, [data]);

  const topTags = useMemo(() => {
    return data ? mergeTopTags(data.tagProblemCounts) : [];
  }, [data]);

  const uniqueRecentSubmissions = useMemo(() => {
    if (!data) return [];

    const grouped = new Map<string, typeof data.recentSubmissions>();

    for (const submission of data.recentSubmissions) {
      const existing = grouped.get(submission.titleSlug) ?? [];
      existing.push(submission);
      grouped.set(submission.titleSlug, existing);
    }

    return Array.from(grouped.values())
      .map((submissions) => {
        const sorted = [...submissions].sort(
          (a, b) => Number(b.timestamp) - Number(a.timestamp)
        );

        const accepted = sorted.find((submission) =>
          submission.statusDisplay.toLowerCase().includes("accepted")
        );

        return accepted ?? sorted[0];
      })
      .sort((a, b) => Number(b.timestamp) - Number(a.timestamp));
  }, [data]);

  return (
    <SectionShell
      eyebrow="Welcome"
      title={
        <>
          Eva <span className="text-purple-300">Liu</span>
        </>
      }
      description={
        <>
          Computer Science Bachelor’s @ University of Washington Paul G. Allen.
          <br />
          Previously Lead Software Engineer @ Center for Reproducible Biomedical
          Modeling.
        </>
      }
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-5"
      >
        {initialLoading && (
          <motion.div variants={item}>
            <ContentCard className="p-4 text-sm text-white/70" hover={false}>
              Loading live LeetCode data...
            </ContentCard>
          </motion.div>
        )}

        {error && !data && (
          <motion.div variants={item}>
            <ContentCard
              className="border-red-400/20 bg-red-400/10 p-4 text-sm text-red-100"
              hover={false}
            >
              {error}
            </ContentCard>
          </motion.div>
        )}

        {data && (
          <motion.div variants={item} className="space-y-4">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold">
                  Live <span className="text-purple-300">LeetCode</span> activity
                </h2>
                <p className="mt-1 text-xs text-white/50">
                  {lastUpdated
                    ? `Last updated at ${lastUpdated}`
                    : "Not updated yet"}
                  {isRefreshing ? " · Refreshing..." : ""}
                </p>
                {error && (
                  <p className="mt-1 text-xs text-red-200/90">
                    Background refresh failed. Showing last successful data.
                  </p>
                )}
              </div>

              <a
                href={`https://leetcode.com/${LEETCODE_USERNAME}/`}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-purple-300 transition hover:text-purple-200"
              >
                View profile ↗
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
              <StatCard
                label="Solved"
                value={data.stats.totalSolved}
                valueClassName="text-purple-300"
              />
              <StatCard
                label="Streak"
                value={data.streak}
                valueClassName="text-amber-300"
              />
              <StatCard
                label="Ranking"
                value={`#${data.profile?.ranking?.toLocaleString?.() ?? "—"}`}
                valueClassName="text-sky-300"
              />
              <StatCard
                label="Active Days"
                value={data.totalActiveDays}
                valueClassName="text-emerald-300"
              />
            </div>

            <div className="grid grid-cols-1 gap-3 xl:grid-cols-[1.1fr_0.9fr]">
              <PanelCard title="Activity" subtitle={`Last ${ACTIVITY_DAYS} days`}>
                <div className="flex items-center justify-between gap-3 text-[11px] text-white/55">
                  <span>Less</span>
                  <div className="flex items-center gap-1.5">
                    {[0, 1, 2, 4, 6].map((value) => (
                      <div
                        key={value}
                        className={[
                          "h-3.5 w-3.5 rounded-[4px] border border-white/10",
                          getHeatColor(value),
                        ].join(" ")}
                      />
                    ))}
                  </div>
                  <span>More</span>
                </div>

                <div className="mt-4 grid max-w-[220px] grid-cols-6 gap-2 sm:max-w-[260px] sm:gap-2.5">
                  {heatmap.map((cell) => (
                    <div
                      key={cell.date}
                      className={[
                        "aspect-square min-h-[18px] min-w-[18px] rounded-[6px] border border-white/10",
                        "sm:min-h-[20px] sm:min-w-[20px]",
                        getHeatColor(cell.count),
                      ].join(" ")}
                      title={`${cell.date}: ${cell.count} submission${
                        cell.count === 1 ? "" : "s"
                      }`}
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

                        <div className="h-1.5 overflow-hidden rounded-full bg-white/8">
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
                      <TagChip key={tag.tagSlug} tag={tag} />
                    ))}
                  </div>
                </div>
              </PanelCard>

              <PanelCard title="Recent submissions">
                <div className="space-y-2">
                  {uniqueRecentSubmissions.length === 0 ? (
                    <p className="text-sm text-white/60">
                      No recent submissions available.
                    </p>
                  ) : (
                    uniqueRecentSubmissions
                      .slice(0, 4)
                      .map((submission) => (
                        <SubmissionItem
                          key={`${submission.titleSlug}-${submission.timestamp}`}
                          submission={submission}
                        />
                      ))
                  )}
                </div>
              </PanelCard>
            </div>
          </motion.div>
        )}
      </motion.div>
    </SectionShell>
  );
}