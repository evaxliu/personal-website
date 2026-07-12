type LeetCodeUpdatedTimeProps = {
  timestamp: string;
};

const TIME_ZONE = "America/Los_Angeles";

function getDateKey(date: Date) {
  return new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: TIME_ZONE,
  }).format(date);
}

export default function LeetCodeUpdatedTime({
  timestamp,
}: LeetCodeUpdatedTimeProps) {
  const updatedAt = new Date(timestamp);
  const now = new Date();

  const sameDay = getDateKey(updatedAt) === getDateKey(now);

  const formatted = new Intl.DateTimeFormat("en-US", {
    ...(sameDay
      ? {}
      : {
          month: "short",
          day: "numeric",
        }),
    hour: "numeric",
    minute: "2-digit",
    timeZone: TIME_ZONE,
  }).format(updatedAt);

  return (
    <p className="font-plex-mono text-sm text-violet-300/65">
      updated {formatted}
    </p>
  );
}