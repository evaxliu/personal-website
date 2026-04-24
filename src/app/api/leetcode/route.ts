import { NextResponse } from "next/server";

const LEETCODE_GRAPHQL_URL = "https://leetcode.com/graphql";

const profileQuery = `
  query userPublicProfile($username: String!) {
    matchedUser(username: $username) {
      username
      profile {
        realName
        userAvatar
        ranking
        reputation
        starRating
      }
      submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
          submissions
        }
      }
      badges {
        id
        displayName
        icon
        creationDate
      }
      languageProblemCount {
        languageName
        problemsSolved
      }
      tagProblemCounts {
        advanced {
          tagName
          tagSlug
          problemsSolved
        }
        intermediate {
          tagName
          tagSlug
          problemsSolved
        }
        fundamental {
          tagName
          tagSlug
          problemsSolved
        }
      }
    }
  }
`;

const calendarQuery = `
  query userCalendar($username: String!, $year: Int) {
    matchedUser(username: $username) {
      userCalendar(year: $year) {
        activeYears
        streak
        totalActiveDays
        submissionCalendar
      }
    }
  }
`;

const recentQuery = `
  query recentSubmissions($username: String!) {
    recentSubmissionList(username: $username) {
      title
      titleSlug
      timestamp
      statusDisplay
      lang
    }
  }
`;

type GraphQLPayload<T> = {
  data?: T;
  errors?: Array<{ message: string }>;
};

type TagProblemCount = {
  tagName: string;
  tagSlug: string;
  problemsSolved: number;
};

type ProfileQueryData = {
  matchedUser?: {
    username: string;
    profile?: {
      realName?: string;
      userAvatar?: string;
      ranking?: number;
      reputation?: number;
      starRating?: number;
    } | null;
    submitStatsGlobal?: {
      acSubmissionNum?: Array<{
        difficulty: string;
        count: number;
        submissions: number;
      }>;
    } | null;
    badges?: Array<{
      id: string;
      displayName: string;
      icon: string;
      creationDate: string;
    }>;
    languageProblemCount?: Array<{
      languageName: string;
      problemsSolved: number;
    }>;
    tagProblemCounts?: {
      advanced: TagProblemCount[];
      intermediate: TagProblemCount[];
      fundamental: TagProblemCount[];
    } | null;
  } | null;
};

type CalendarQueryData = {
  matchedUser?: {
    userCalendar?: {
      activeYears?: number[];
      streak?: number;
      totalActiveDays?: number;
      submissionCalendar?: string;
    } | null;
  } | null;
};

type RecentQueryData = {
  recentSubmissionList?: Array<{
    title: string;
    titleSlug: string;
    timestamp: string;
    statusDisplay: string;
    lang: string;
  }>;
};

async function postLeetCode<T>(
  query: string,
  variables: Record<string, unknown>
) {
  const response = await fetch(LEETCODE_GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Referer: "https://leetcode.com",
    },
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });

  const rawText = await response.text();

  if (!rawText) {
    throw new Error(`LeetCode returned an empty response (${response.status})`);
  }

  let parsed: GraphQLPayload<T>;

  try {
    parsed = JSON.parse(rawText) as GraphQLPayload<T>;
  } catch {
    throw new Error(
      `LeetCode returned non-JSON (${response.status}): ${rawText.slice(
        0,
        120
      )}`
    );
  }

  if (!response.ok) {
    const message =
      parsed.errors?.map((e) => e.message).join(", ") ||
      `LeetCode request failed with status ${response.status}`;
    throw new Error(message);
  }

  if (parsed.errors?.length) {
    throw new Error(parsed.errors.map((e) => e.message).join(", "));
  }

  return parsed.data;
}

function parseSubmissionCalendar(calendar?: string) {
  if (!calendar) return {};

  try {
    return JSON.parse(calendar) as Record<string, number>;
  } catch {
    return {};
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get("username")?.trim();

    if (!username) {
      return NextResponse.json({ error: "Missing username" }, { status: 400 });
    }

    const currentYear = new Date().getFullYear();

    const [profileData, initialCalendarData, recentData] = await Promise.all([
      postLeetCode<ProfileQueryData>(profileQuery, { username }),
      postLeetCode<CalendarQueryData>(calendarQuery, {
        username,
        year: currentYear,
      }),
      postLeetCode<RecentQueryData>(recentQuery, { username }),
    ]);

    const matchedUser = profileData?.matchedUser;
    const initialCalendar = initialCalendarData?.matchedUser?.userCalendar;
    const recentSubmissionList = recentData?.recentSubmissionList ?? [];

    if (!matchedUser) {
      return NextResponse.json(
        { error: "LeetCode user not found" },
        { status: 404 }
      );
    }

    const activeYears = initialCalendar?.activeYears?.length
      ? initialCalendar.activeYears
      : [currentYear];

    const calendarResults = await Promise.all(
      activeYears.map((year) =>
        postLeetCode<CalendarQueryData>(calendarQuery, {
          username,
          year,
        })
      )
    );

    const mergedCalendar: Record<string, number> = {};

    for (const result of calendarResults) {
      const calendar = parseSubmissionCalendar(
        result?.matchedUser?.userCalendar?.submissionCalendar
      );

      for (const [timestamp, count] of Object.entries(calendar)) {
        mergedCalendar[timestamp] = count;
      }
    }

    const lifetimeActiveDays = Object.values(mergedCalendar).filter(
      (count) => count > 0
    ).length;

    const acStats = matchedUser.submitStatsGlobal?.acSubmissionNum ?? [];

    const totalSolved =
      acStats.find((item) => item.difficulty === "All")?.count ?? 0;
    const easySolved =
      acStats.find((item) => item.difficulty === "Easy")?.count ?? 0;
    const mediumSolved =
      acStats.find((item) => item.difficulty === "Medium")?.count ?? 0;
    const hardSolved =
      acStats.find((item) => item.difficulty === "Hard")?.count ?? 0;

    return NextResponse.json({
      username: matchedUser.username,
      profile: matchedUser.profile ?? null,
      stats: {
        totalSolved,
        easySolved,
        mediumSolved,
        hardSolved,
      },
      streak: initialCalendar?.streak ?? 0,
      totalActiveDays: lifetimeActiveDays,
      calendar: mergedCalendar,
      recentSubmissions: recentSubmissionList,
      languages: matchedUser.languageProblemCount ?? [],
      tagProblemCounts: matchedUser.tagProblemCounts ?? {
        advanced: [],
        intermediate: [],
        fundamental: [],
      },
      badges: matchedUser.badges ?? [],
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to fetch LeetCode data",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}