export const runtime = "nodejs";

const LEETCODE_URL = "https://leetcode.com/graphql/";
const RECENT_SUBMISSION_LIMIT = 20;

type Difficulty = "Easy" | "Medium" | "Hard";
type Calendar = Record<string, number>;

type SubmissionStat = {
  difficulty: "All" | Difficulty;
  count: number;
};

type GraphQLResult<T> = {
  data?: T;
  errors?: Array<{
    message: string;
  }>;
};

type StatsQueryData = {
  matchedUser: {
    username: string;

    submitStatsGlobal: {
      acSubmissionNum: SubmissionStat[];
    };

    userCalendar: {
      activeYears: number[];
      submissionCalendar: string;
    } | null;
  } | null;

  recentSubmissionList:
    | Array<{
        title: string;
        titleSlug: string;
        timestamp: string;
        statusDisplay: string;
      }>
    | null;
};

type CalendarQueryData = {
  matchedUser: {
    userCalendar: {
      submissionCalendar: string;
    } | null;
  } | null;
};

const STATS_QUERY = `
  query PortfolioLeetCodeStats(
    $username: String!
    $year: Int!
    $limit: Int!
  ) {
    matchedUser(username: $username) {
      username

      submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
        }
      }

      userCalendar(year: $year) {
        activeYears
        submissionCalendar
      }
    }

    recentSubmissionList(
      username: $username
      limit: $limit
    ) {
      title
      titleSlug
      timestamp
      statusDisplay
    }
  }
`;

const CALENDAR_QUERY = `
  query PortfolioLeetCodeCalendar(
    $username: String!
    $year: Int!
  ) {
    matchedUser(username: $username) {
      userCalendar(year: $year) {
        submissionCalendar
      }
    }
  }
`;

async function queryLeetCode<T>(
  query: string,
  variables: Record<string, string | number>,
): Promise<T> {
  const response = await fetch(LEETCODE_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Referer: "https://leetcode.com/",
      "User-Agent": "LilacPlanetPortfolio/1.0",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    cache: "no-store",
    signal: AbortSignal.timeout(10_000),
  });

  const result = (await response.json()) as GraphQLResult<T>;

  if (!response.ok) {
    throw new Error(`LeetCode returned HTTP ${response.status}.`);
  }

  if (result.errors?.length) {
    throw new Error(
      result.errors.map(({ message }) => message).join("; "),
    );
  }

  if (!result.data) {
    throw new Error("LeetCode returned no data.");
  }

  return result.data;
}

function getDateKey(date: Date) {
  return date.toISOString().slice(0, 10);
}

function addDays(date: Date, amount: number) {
  const result = new Date(date);
  result.setUTCDate(result.getUTCDate() + amount);
  return result;
}

function parseCalendar(value?: string | null): Calendar {
  if (!value) {
    return {};
  }

  const parsed = JSON.parse(value) as Record<string, number>;
  const calendar: Calendar = {};

  for (const [timestamp, count] of Object.entries(parsed)) {
    const date = getDateKey(
      new Date(Number(timestamp) * 1000),
    );

    calendar[date] = (calendar[date] ?? 0) + count;
  }

  return calendar;
}

function mergeCalendars(calendars: Calendar[]) {
  const merged: Calendar = {};

  for (const calendar of calendars) {
    for (const [date, count] of Object.entries(calendar)) {
      merged[date] = (merged[date] ?? 0) + count;
    }
  }

  return merged;
}

function calculateStreaks(calendar: Calendar) {
  const activeDates = Object.entries(calendar)
    .filter(([, count]) => count > 0)
    .map(([date]) => date)
    .sort();

  if (activeDates.length === 0) {
    return {
      currentStreak: 0,
      bestStreak: 0,
    };
  }

  let runningStreak = 1;
  let bestStreak = 1;

  for (let index = 1; index < activeDates.length; index += 1) {
    const previous = new Date(
      `${activeDates[index - 1]}T00:00:00Z`,
    );

    const current = new Date(
      `${activeDates[index]}T00:00:00Z`,
    );

    const daysApart =
      (current.getTime() - previous.getTime()) / 86_400_000;

    if (daysApart === 1) {
      runningStreak += 1;
      bestStreak = Math.max(bestStreak, runningStreak);
    } else {
      runningStreak = 1;
    }
  }

  const latestDate = activeDates.at(-1)!;
  const today = new Date();

  const streakIsActive =
    latestDate === getDateKey(today) ||
    latestDate === getDateKey(addDays(today, -1));

  if (!streakIsActive) {
    return {
      currentStreak: 0,
      bestStreak,
    };
  }

  const activeDateSet = new Set(activeDates);
  let cursor = new Date(`${latestDate}T00:00:00Z`);
  let currentStreak = 0;

  while (activeDateSet.has(getDateKey(cursor))) {
    currentStreak += 1;
    cursor = addDays(cursor, -1);
  }

  return {
    currentStreak,
    bestStreak,
  };
}

function getRecentActivity(calendar: Calendar) {
  const today = new Date();

  return Array.from({ length: 30 }, (_, index) => {
    const date = getDateKey(addDays(today, index - 29));

    return {
      date,
      count: calendar[date] ?? 0,
    };
  });
}

function getSolvedCounts(
  submissionStats: SubmissionStat[],
): Record<Difficulty, number> {
  const solved: Record<Difficulty, number> = {
    Easy: 0,
    Medium: 0,
    Hard: 0,
  };

  for (const stat of submissionStats) {
    if (stat.difficulty !== "All") {
      solved[stat.difficulty] = stat.count;
    }
  }

  return solved;
}

export async function GET() {
  let profileUrl: string | undefined;

  try {
    const username = process.env.LEETCODE_USERNAME?.trim();

    if (!username) {
      throw new Error(
        "LEETCODE_USERNAME is missing from the environment variables.",
      );
    }

    profileUrl = `https://leetcode.com/u/${encodeURIComponent(
      username,
    )}/`;

    const currentYear = new Date().getUTCFullYear();

    const stats = await queryLeetCode<StatsQueryData>(
      STATS_QUERY,
      {
        username,
        year: currentYear,
        limit: RECENT_SUBMISSION_LIMIT,
      },
    );

    if (!stats.matchedUser) {
      throw new Error(
        `No public LeetCode user was found for "${username}".`,
      );
    }

    const currentCalendar = stats.matchedUser.userCalendar;

    const previousYears = [
      ...new Set(
        currentCalendar?.activeYears ?? [currentYear],
      ),
    ].filter((year) => year !== currentYear);

    const previousCalendarResults = await Promise.all(
      previousYears.map((year) =>
        queryLeetCode<CalendarQueryData>(CALENDAR_QUERY, {
          username,
          year,
        }),
      ),
    );

    const calendar = mergeCalendars([
      parseCalendar(currentCalendar?.submissionCalendar),

      ...previousCalendarResults.map((result) =>
        parseCalendar(
          result.matchedUser?.userCalendar
            ?.submissionCalendar,
        ),
      ),
    ]);

    const { currentStreak, bestStreak } =
      calculateStreaks(calendar);

    const recentSubmissions = (
      stats.recentSubmissionList ?? []
    )
      .map((submission) => ({
        title: submission.title,
        titleSlug: submission.titleSlug,
        timestamp: Number(submission.timestamp),
        status: submission.statusDisplay,
      }))
      .filter(({ timestamp }) =>
        Number.isFinite(timestamp),
      );

    return Response.json(
      {
        ok: true,
        data: {
          username: stats.matchedUser.username,
          profileUrl,
          solved: getSolvedCounts(
            stats.matchedUser.submitStatsGlobal
              .acSubmissionNum,
          ),
          activity: getRecentActivity(calendar),
          currentStreak,
          bestStreak,
          recentSubmissions,
          fetchedAt: new Date().toISOString(),
        },
      },
      {
        headers: {
          "Cache-Control":
            "public, s-maxage=1800, stale-while-revalidate=86400",
        },
      },
    );
  } catch (error) {
    console.error("Could not load LeetCode stats:", error);

    return Response.json(
      {
        ok: false,
        error:
          process.env.NODE_ENV === "development" &&
          error instanceof Error
            ? error.message
            : "The live stats could not be loaded right now.",
        profileUrl,
      },
      {
        status: 502,
        headers: {
          "Cache-Control": "no-store",
        },
      },
    );
  }
}