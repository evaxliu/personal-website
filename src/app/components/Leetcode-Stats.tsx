import { Check, X } from "lucide-react";
import {
  getLeetCodeStats,
  type ActivityDay,
  type Difficulty,
  type RecentSubmission,
} from "../api/leetcode/route";
import LeetCodeUpdatedTime from "./Leetcode-Updated-Time";

const LEETCODE_USERNAME = "LilacPlanet";

const difficultyStyles: Record<Difficulty, { bar: string; text: string }> = {
  Easy: { bar: "bg-green-300", text: "text-green-300" },
  Medium: { bar: "bg-amber-300", text: "text-amber-300" },
  Hard: { bar: "bg-rose-300", text: "text-rose-300" },
};

const activityColors = [
  "bg-[#211a3c]",
  "bg-[#453465]",
  "bg-[#6b539b]",
  "bg-[#9a7fd1]",
  "bg-[#c4b5fd]",
];

function getActivityLevel(count: number, maximum: number) {
  if (count === 0 || maximum === 0) return 0;

  const ratio = count / maximum;
  if (ratio <= 0.25) return 1;
  if (ratio <= 0.5) return 2;
  if (ratio <= 0.75) return 3;
  return 4;
}

function formatSubmissionDate(timestamp: number) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(timestamp * 1000));
}

function formatLanguage(language: string) {
  const languageNames: Record<string, string> = {
    python: "python",
    python3: "python3",
    javascript: "javascript",
    typescript: "typescript",
    java: "java",
    cpp: "c++",
    csharp: "c#",
    golang: "go",
    rust: "rust",
  };

  return languageNames[language] ?? language;
}

function ColumnLabel({ label }: { label: string }) {
  return (
    <p className="font-plex-mono text-xs font-semibold tracking-[1.5px] text-violet-300">
      {label}
    </p>
  );
}

function StatusText({ status }: { status: string }) {
  const accepted = status === "Accepted";

  return (
    <span
      className={`inline-flex items-center gap-1 whitespace-nowrap font-plex-sans text-xs font-semibold ${
        accepted ? "text-green-300" : "text-amber-300"
      }`}
    >
      {accepted ? (
        <Check aria-hidden="true" className="size-3" strokeWidth={3} />
      ) : (
        <X aria-hidden="true" className="size-3" strokeWidth={3} />
      )}
      {status}
    </span>
  );
}

function ActivityGrid({ activity }: { activity: ActivityDay[] }) {
  const maximum = Math.max(...activity.map((day) => day.count), 0);

  return (
    <div className="grid grid-cols-6 gap-1.5">
      {activity.map((day) => {
        const level = getActivityLevel(day.count, maximum);
        const formattedDate = new Intl.DateTimeFormat("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
          timeZone: "UTC",
        }).format(new Date(`${day.date}T00:00:00Z`));

        const submissionLabel = `${day.count} submission${
          day.count === 1 ? "" : "s"
        }`;

        return (
          <div
            aria-label={`${formattedDate}: ${submissionLabel}`}
            className={`aspect-square rounded-md ${activityColors[level]}`}
            key={day.date}
            role="img"
            title={`${formattedDate}: ${submissionLabel}`}
          />
        );
      })}
    </div>
  );
}

function DifficultyBars({
  solved,
}: {
  solved: Record<Difficulty, number>;
}) {
  const maximumSolved = Math.max(...Object.values(solved), 1);

  return (
    <div className="flex flex-col gap-4">
      {(Object.keys(solved) as Difficulty[]).map((difficulty) => {
        const count = solved[difficulty];
        const width =
          count === 0 ? 0 : Math.max((count / maximumSolved) * 100, 5);

        return (
          <div key={difficulty}>
            <div className="mb-1.5 flex items-baseline justify-between">
              <span
                className={`text-sm font-semibold ${difficultyStyles[difficulty].text}`}
              >
                {difficulty}
              </span>
              <span className="text-sm font-bold text-white">{count}</span>
            </div>
            <div className="h-1 overflow-hidden rounded-full bg-[#2b2148]">
              <div
                aria-hidden="true"
                className={`h-full rounded-full ${difficultyStyles[difficulty].bar}`}
                style={{ width: `${width}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function SubmissionRow({ submission }: { submission: RecentSubmission }) {
  return (
    <li>
      <a
        className="group flex flex-col gap-1.5 rounded-xl border border-[#2b2148] px-4 py-3.5 transition-colors hover:border-violet-300/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
        href={`https://leetcode.com/problems/${submission.titleSlug}/`}
        rel="noreferrer"
        target="_blank"
      >
        <span className="text-sm font-bold leading-snug text-white transition-colors group-hover:text-violet-300">
          {submission.title}
        </span>

        <span className="flex items-center gap-2">
          <StatusText status={submission.status} />

          <span className="font-plex-mono text-xs text-violet-300/60">
            {formatSubmissionDate(submission.timestamp)}
          </span>
        </span>
      </a>
    </li>
  );
}

function LoadingError() {
  return (
    <section className="hidden w-full flex-col gap-3 rounded-2xl border border-[#322851] border-l-4 border-l-violet-300 bg-[#1F1838] px-6 py-5 md:flex">
      <h2 className="text-md font-bold text-white">LeetCode stats</h2>

      <p className="text-sm font-semibold text-violet-200">
        The live stats could not be loaded right now.
      </p>

      <a
        className="text-xs font-semibold text-violet-300 font-plex-sans"
        href={`https://leetcode.com/u/${LEETCODE_USERNAME}/`}
        rel="noreferrer"
        target="_blank"
      >
        View {LEETCODE_USERNAME} on LeetCode ↗
      </a>
    </section>
  );
}

export default async function LeetCodeStats() {
  let stats;

  try {
    stats = await getLeetCodeStats(LEETCODE_USERNAME);
  } catch (error) {
    console.error("Could not load LeetCode stats:", error);
    return <LoadingError />;
  }

  return (
    <section
      aria-labelledby="leetcode-stats-heading"
      className="hidden w-full flex-col gap-4 rounded-2xl border border-[#322851] border-l-4 border-l-violet-300 bg-[#1F1838] px-6 py-5 duration-300 ease-in-out hover:-translate-y-1 md:flex"
    >
      <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
        <div>
          <a
            href={`https://leetcode.com/u/${stats.username}/`}
            rel="noreferrer"
            target="_blank"
          >
            <h2
              className="text-md font-bold text-white transition-colors hover:text-violet-300"
              id="leetcode-stats-heading"
            >
              LeetCode stats
            </h2>
          </a>

          <LeetCodeUpdatedTime timestamp={stats.fetchedAt} />
        </div>

        <p className="font-plex-mono text-sm text-violet-300">
          streak{" "}
          <span className="font-semibold text-white">
            {stats.currentStreak}
          </span>
          <span className="mx-2 text-violet-300/40">·</span>
          best{" "}
          <span className="font-semibold text-white">{stats.bestStreak}</span>
        </p>
      </div>

      <div className="flex h-px w-full bg-[#2b2148]" />

      <div className="grid grid-cols-2 gap-x-8">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <ColumnLabel label="LAST 30 DAYS" />
            <ActivityGrid activity={stats.activity} />
          </div>

          <div className="flex flex-col gap-3">
            <ColumnLabel label="SOLVED" />
            <DifficultyBars solved={stats.solved} />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <ColumnLabel label="RECENT SUBMISSIONS" />

          {stats.recentSubmissions.length > 0 ? (
            <div className="relative min-h-0 flex-1">
              <ul
                className="
                  absolute inset-0 flex flex-col gap-2.5 overflow-y-auto overscroll-contain pt-2 pr-3
                  [scrollbar-color:#453465_transparent] [scrollbar-width:thin]
                  [&::-webkit-scrollbar]:w-1.5
                  [&::-webkit-scrollbar-track]:bg-transparent
                  [&::-webkit-scrollbar-thumb]:rounded-full
                  [&::-webkit-scrollbar-thumb]:bg-[#453465]
                  [&::-webkit-scrollbar-thumb:hover]:bg-[#6b539b]
                "
              >
                {stats.recentSubmissions.map((submission) => (
                  <SubmissionRow
                    key={`${submission.timestamp}-${submission.titleSlug}`}
                    submission={submission}
                  />
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-sm font-semibold text-violet-200">
              No public recent submissions were returned by LeetCode.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}