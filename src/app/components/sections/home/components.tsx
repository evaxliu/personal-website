import ContentCard from "@/app/components/ui/ContentCard";
import type { RecentSubmission, TagItem } from "./home.types";
import { formatDate } from "./home.utils";

export function StatCard({
  label,
  value,
  valueClassName,
}: {
  label: string;
  value: string | number;
  valueClassName?: string;
}) {
  return (
    <ContentCard className="p-4">
      <p className="text-xs text-white/55">{label}</p>
      <p className={`mt-2 text-2xl font-semibold ${valueClassName ?? "text-purple-300"}`}>
        {value}
      </p>
    </ContentCard>
  );
}

export function PanelCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <ContentCard className="p-4">
      <div>
        <h3 className="text-base font-semibold">{title}</h3>
        {subtitle && <p className="mt-0.5 text-[11px] text-white/55">{subtitle}</p>}
      </div>
      <div className="mt-3">{children}</div>
    </ContentCard>
  );
}

export function TagChip({ tag }: { tag: TagItem }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/6 px-2 py-0.5 text-[11px] text-white/75">
      {tag.tagName} · {tag.problemsSolved}
    </span>
  );
}

export function SubmissionItem({
  submission,
}: {
  submission: RecentSubmission;
}) {
  const accepted = submission.statusDisplay.toLowerCase().includes("accepted");

  return (
    <div className="rounded-xl border border-white/8 bg-black/10 p-3">
      <div className="flex items-start justify-between gap-2">
        <a
          href={`https://leetcode.com/problems/${submission.titleSlug}/`}
          target="_blank"
          rel="noreferrer"
          className="text-[13px] font-medium text-white/90 leading-snug transition hover:text-purple-300"
        >
          {submission.title}
        </a>

        <span
          className={[
            "shrink-0 rounded-full border px-2 py-0.5 text-[10px]",
            accepted
              ? "border-emerald-300/20 bg-emerald-400/10 text-emerald-200"
              : "border-amber-300/20 bg-amber-400/10 text-amber-200",
          ].join(" ")}
        >
          {submission.statusDisplay}
        </span>
      </div>

      <div className="mt-2 flex flex-wrap gap-1.5 text-[10px] text-white/55">
        <span className="rounded-full bg-white/6 px-2 py-0.5">{submission.lang}</span>
        <span className="rounded-full bg-white/6 px-2 py-0.5">
          {formatDate(submission.timestamp)}
        </span>
      </div>
    </div>
  );
}