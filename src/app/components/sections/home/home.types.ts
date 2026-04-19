export type RecentSubmission = {
  title: string;
  titleSlug: string;
  timestamp: string;
  statusDisplay: string;
  lang: string;
};

export type TagItem = {
  tagName: string;
  tagSlug: string;
  problemsSolved: number;
};

export type LeetCodeData = {
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