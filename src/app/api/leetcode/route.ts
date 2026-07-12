import { unstable_cache } from "next/cache";

const LEETCODE_GRAPHQL_URL = "https://leetcode.com/graphql/";
const SUBMISSION_LIMIT = 20;

type GraphQLError = {
  message: string;
};

type GraphQLResponse<T> = {
  data?: T;
  errors?: GraphQLError[];
};

type SubmissionStat = {
  difficulty: "All" | Difficulty;
  count: number;
};

type SubmitStatsResponse = {
  matchedUser: {
    submitStats: {
      acSubmissionNum: SubmissionStat[];
    };
  } | null;
};

type CalendarResponse = {
  matchedUser: {
    userCalendar: {
      activeYears: number[];
      submissionCalendar: string;
    } | null;
  } | null;
};

type RecentSubmissionsResponse = {
  recentSubmissionList: Array<{
    title: string;
    titleSlug: string;
    timestamp: string;
    statusDisplay: string;
    lang: string;
  }>;
};

export type Difficulty = "Easy" | "Medium" | "Hard";

export type ActivityDay = {
  date: string;
  count: number;
};

export type RecentSubmission = {
  title: string;
  titleSlug: string;
  timestamp: number;
  status: string;
  language: string;
};

export type LeetCodeStats = {
  username: string;
  solved: Record<Difficulty, number>;
  activity: ActivityDay[];
  currentStreak: number;
  bestStreak: number;
  recentSubmissions: RecentSubmission[];
  fetchedAt: string;
};

const SUBMIT_STATS_QUERY = `
  query userSessionProgress($username: String!) {
    matchedUser(username: $username) {
      submitStats: submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
        }
      }
    }
  }
`;

const CALENDAR_QUERY = `
  query userProfileCalendar($username: String!, $year: Int) {
    matchedUser(username: $username) {
      userCalendar(year: $year) {
        activeYears
        submissionCalendar
      }
    }
  }
`;

const RECENT_SUBMISSIONS_QUERY = `
  query getRecentSubmissionList($username: String!, $limit: Int) {
    recentSubmissionList(username: $username, limit: $limit) {
      title
      titleSlug
      timestamp
      statusDisplay
      lang
    }
  }
`;

async function runLeetCodeQuery<T>(
  query: string,
  variables: Record<string, string | number>,
): Promise<T> {
  const response = await fetch(LEETCODE_GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Referer: "https://leetcode.com/",
    },
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`LeetCode returned ${response.status}.`);
  }

  const payload = (await response.json()) as GraphQLResponse<T>;

  if (payload.errors?.length) {
    throw new Error(payload.errors.map((error) => error.message).join("; "));
  }

  if (!payload.data) {
    throw new Error("LeetCode returned no data.");
  }

  return payload.data;
}

function parseSubmissionCalendar(calendar: string | null | undefined) {
  if (!calendar) {
    return new Map<string, number>();
  }

  try {
    const parsed = JSON.parse(calendar) as Record<string, number>;
    const dates = new Map<string, number>();

    for (const [unixTimestamp, count] of Object.entries(parsed)) {
      const date = new Date(Number(unixTimestamp) * 1000)
        .toISOString()
        .slice(0, 10);

      dates.set(date, (dates.get(date) ?? 0) + count);
    }

    return dates;
  } catch {
    return new Map<string, number>();
  }
}

function mergeCalendars(calendars: Array<Map<string, number>>) {
  const merged = new Map<string, number>();

  for (const calendar of calendars) {
    for (const [date, count] of calendar) {
      merged.set(date, (merged.get(date) ?? 0) + count);
    }
  }

  return merged;
}

function toDateKey(date: Date) {
  return date.toISOString().slice(0, 10);
}

function addUtcDays(date: Date, amount: number) {
  const nextDate = new Date(date);
  nextDate.setUTCDate(nextDate.getUTCDate() + amount);
  return nextDate;
}

function calculateStreaks(activityDates: string[]) {
  if (activityDates.length === 0) {
    return { currentStreak: 0, bestStreak: 0 };
  }

  const sortedDates = [...new Set(activityDates)].sort();
  let bestStreak = 1;
  let runningStreak = 1;

  for (let index = 1; index < sortedDates.length; index += 1) {
    const previousDate = new Date(`${sortedDates[index - 1]}T00:00:00Z`);
    const currentDate = new Date(`${sortedDates[index]}T00:00:00Z`);
    const differenceInDays =
      (currentDate.getTime() - previousDate.getTime()) / 86_400_000;

    if (differenceInDays === 1) {
      runningStreak += 1;
      bestStreak = Math.max(bestStreak, runningStreak);
    } else {
      runningStreak = 1;
    }
  }

  const activitySet = new Set(sortedDates);
  const today = new Date();
  const todayKey = toDateKey(today);
  const yesterdayKey = toDateKey(addUtcDays(today, -1));
  const latestDate = sortedDates.at(-1);

  if (latestDate !== todayKey && latestDate !== yesterdayKey) {
    return { currentStreak: 0, bestStreak };
  }

  let currentStreak = 0;
  let cursor = new Date(`${latestDate}T00:00:00Z`);

  while (activitySet.has(toDateKey(cursor))) {
    currentStreak += 1;
    cursor = addUtcDays(cursor, -1);
  }

  return { currentStreak, bestStreak };
}

function getLastThirtyDays(calendar: Map<string, number>): ActivityDay[] {
  const today = new Date();

  return Array.from({ length: 30 }, (_, index) => {
    const date = addUtcDays(today, index - 29);
    const dateKey = toDateKey(date);

    return {
      date: dateKey,
      count: calendar.get(dateKey) ?? 0,
    };
  });
}

function dedupeSubmissions(submissions: RecentSubmission[]) {
  const byProblemAndDay = new Map<string, RecentSubmission>();

  // `submissions` is most-recent-first, so the first entry stored for a key
  // is the most recent one. A later (older) entry only replaces it when the
  // older one is Accepted and the stored one is not — i.e. an Accepted
  // submission wins over failed attempts from the same day.
  for (const submission of submissions) {
    const day = toDateKey(new Date(submission.timestamp * 1000));
    const key = `${submission.titleSlug}:${day}`;
    const existing = byProblemAndDay.get(key);

    if (
      !existing ||
      (submission.status === "Accepted" && existing.status !== "Accepted")
    ) {
      byProblemAndDay.set(key, submission);
    }
  }

  return [...byProblemAndDay.values()].sort(
    (a, b) => b.timestamp - a.timestamp,
  );
}

async function fetchLeetCodeStats(username: string): Promise<LeetCodeStats> {
  const currentYear = new Date().getUTCFullYear();

  const [submitStatsData, recentSubmissionsData, currentCalendarData] =
    await Promise.all([
      runLeetCodeQuery<SubmitStatsResponse>(SUBMIT_STATS_QUERY, { username }),
      runLeetCodeQuery<RecentSubmissionsResponse>(RECENT_SUBMISSIONS_QUERY, {
        username,
        limit: SUBMISSION_LIMIT,
      }),
      runLeetCodeQuery<CalendarResponse>(CALENDAR_QUERY, {
        username,
        year: currentYear,
      }),
    ]);

  if (!submitStatsData.matchedUser || !currentCalendarData.matchedUser) {
    throw new Error(`LeetCode user ${username} was not found.`);
  }

  const currentCalendar = currentCalendarData.matchedUser.userCalendar;
  const activeYears = currentCalendar?.activeYears ?? [currentYear];
  const otherYears = [...new Set(activeYears)].filter(
    (year) => year !== currentYear,
  );

  const otherCalendarResponses = await Promise.all(
    otherYears.map((year) =>
      runLeetCodeQuery<CalendarResponse>(CALENDAR_QUERY, {
        username,
        year,
      }),
    ),
  );

  const calendars = [
    parseSubmissionCalendar(currentCalendar?.submissionCalendar),
    ...otherCalendarResponses.map((response) =>
      parseSubmissionCalendar(
        response.matchedUser?.userCalendar?.submissionCalendar,
      ),
    ),
  ];

  const mergedCalendar = mergeCalendars(calendars);
  const activityDates = [...mergedCalendar.entries()]
    .filter(([, count]) => count > 0)
    .map(([date]) => date);
  const { currentStreak, bestStreak } = calculateStreaks(activityDates);

  const acceptedStats =
    submitStatsData.matchedUser.submitStats.acSubmissionNum;

  const solved = acceptedStats.reduce<Record<Difficulty, number>>(
    (totals, stat) => {
      if (stat.difficulty !== "All") {
        totals[stat.difficulty] = stat.count;
      }

      return totals;
    },
    { Easy: 0, Medium: 0, Hard: 0 },
  );

  const recentSubmissions = dedupeSubmissions(
    recentSubmissionsData.recentSubmissionList.map((submission) => ({
      title: submission.title,
      titleSlug: submission.titleSlug,
      timestamp: Number(submission.timestamp),
      status: submission.statusDisplay,
      language: submission.lang,
    })),
  );

  return {
    username,
    solved,
    activity: getLastThirtyDays(mergedCalendar),
    currentStreak,
    bestStreak,
    recentSubmissions,
    fetchedAt: new Date().toISOString(),
  };
}

export const getLeetCodeStats = unstable_cache(
  fetchLeetCodeStats,
  ["leetcode-stats"],
  {
    revalidate: 1_800,
  },
);